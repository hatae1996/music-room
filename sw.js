// 뮤직룸 Service Worker
const CACHE = 'musicroom-v1';

// 설치 시 핵심 파일 캐시
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll(['/music-room.html', '/manifest.json'])
    ).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 네트워크 우선, 캐시 폴백
self.addEventListener('fetch', e => {
  // YouTube / Firebase / Google API는 캐시 안 함
  const url = e.request.url;
  if (url.includes('youtube') || url.includes('firebase') ||
      url.includes('googleapis') || url.includes('gstatic')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// 백그라운드에서도 푸시/메시지 유지
self.addEventListener('message', e => {
  if (e.data === 'keepAlive') {
    // 백그라운드 재생 유지를 위한 heartbeat
  }
});
