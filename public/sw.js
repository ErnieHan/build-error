const versions = '8'
const cacheName = 'pcm3.0.cache.v' + versions
const indexPath = '/' //首頁

const precacheResources = []

//需要使用cors設定的URL
const useCorsPath = [
  '/manifest.json',
  '/manifest/tc/manifest.json',
  '/manifest/sc/manifest.json',
  '/pwaicons/maskable_icon_x128.png',
  '/pwaicons/maskable_icon_x192.png',
  '/pwaicons/maskable_icon_x384.png',
  '/pwaicons/maskable_icon_x512.png',
  '/pwaicons/icon-180x180.png',
  '/pwaicons/icon-192x192.png',
  '/pwaicons/icon-256x256.png',
  '/pwaicons/icon-384x384.png',
  '/pwaicons/icon-512x512.png'
]

const precacheCtn = precacheResources.length

self.addEventListener('install', event => {
  console.log('Service worker install event!', cacheName)
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(precacheResources))
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheName.indexOf(key) === -1) {
            return caches.delete(key)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  const requestUrl = event.request.url
  const urlPath = requestUrl.replace(self.location.origin, '')
  let fetchOption = {}
  let req = null
  if (useCorsPath.indexOf(urlPath) !== -1) {
    fetchOption = {
      mode: 'cors',
      credentials: 'include'
    }
    req = requestUrl
  } else {
    req = event.request
  }

  /*if (urlPath == indexPath) { //首頁
		return event.respondWith(caches.match(indexPath + '?v=' + versions));
	}*/

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse && precacheCtn > 0) {
        return cachedResponse
      }
      return fetch(req, fetchOption)
        .then(function (response) {
          const url = new URL(requestUrl)
          if (
            url.origin == location.origin &&
            precacheResources.indexOf(urlPath) !== -1 &&
            precacheCtn > 0 &&
            response.ok
          ) {
            let responseClone = response.clone()
            caches.open(cacheName).then(function (cache) {
              cache.put(event.request, responseClone)
            })
          }
          return response
        })
        .catch(function (e) {
          console.log(event.request, e)
        })
    })
  )
})
