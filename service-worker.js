// 뮤직룸 Service Worker
// 백그라운드 오디오 유지 + 기본 캐싱

const CACHE_NAME = 'musicroom-v3';
const APP_SHELL = [
  './',
  './index.html',
  './room.html',
  './manifest.json',
  './shared.js',
  './icon-192.png',
  './icon-512.png',
];

// 설치: 핵심 파일 캐싱
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL).catch(() => {
        // 캐싱 실패해도 설치는 계속
      });
    })
  );
});

// 활성화: 이전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// fetch: 네트워크 우선, 실패 시 캐시
// Firebase / YouTube는 항상 네트워크로
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  // Firebase, YouTube, Google API는 캐시 안 함
  if (
    url.includes('firebasedatabase.app') ||
    url.includes('googleapis.com') ||
    url.includes('youtube.com') ||
    url.includes('ytimg.com') ||
    url.includes('gstatic.com')
  ) {
    return; // 기본 fetch 동작
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // HTML은 캐시에 넣지 않음 → 배포 직후에도 global 플레이리스트 등 최신 스크립트 유지
        let skipPut = false;
        try {
          const p = new URL(url).pathname;
          skipPut = p.endsWith('/room.html') || p.endsWith('/index.html');
        } catch (e) {}
        if (response.ok && !skipPut) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // 오프라인이면 캐시에서
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return undefined;
        });
      })
  );
});

// 백그라운드 오디오 유지: 클라이언트가 15초마다 ping → SW 활성 유지
self.addEventListener('message', (event) => {
  if (event.data === 'keepalive') {
    event.ports[0]?.postMessage('alive');
  }
});
