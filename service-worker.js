// 뮤직룸 Service Worker
// 백그라운드 오디오 유지 + 기본 캐싱

const CACHE_NAME = 'musicroom-v1';
const STATIC_ASSETS = [
  '/music-room/',
  '/music-room/index.html',
  '/music-room/room.html',
];

// 설치: 핵심 파일 캐싱
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
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
        // 성공하면 캐시에도 저장
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // 오프라인이면 캐시에서
        return caches.match(event.request);
      })
  );
});

// 백그라운드 오디오 유지를 위해 SW가 살아있도록 주기적 ping 수신
self.addEventListener('message', (event) => {
  if (event.data === 'keepalive') {
    // 응답만 해도 SW가 활성 상태 유지됨
    event.ports[0]?.postMessage('alive');
  }
});
