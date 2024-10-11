'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ec5b89dc49c433a9521a13928c032129",
".git/config": "74b141e5c613ff17bb037cd1267a84a2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4078ee76b4d63c6afef14632ab01b63",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9675d4f4df9e3a1f8a9138ca658c800",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a32615bcf527313041a2c932e7f38c9",
".git/logs/refs/heads/main": "7a32615bcf527313041a2c932e7f38c9",
".git/logs/refs/remotes/origin/main": "f355115a89c2085943b7efcb60f3d73d",
".git/objects/2a/ab733de216e5820f46032b976d1741bdd79ca5": "5e5c275f2bc604ccb2a15b83cf9151d0",
".git/objects/55/644735b77e6980f0e8dc1cbe8102d6cdd9ee72": "ec2dfc126895a68889b0a2c24df84ff3",
".git/objects/67/09798f54b4b335c52039b1c45d1920f784a993": "e70ec807db6280a44a71edbd6c3168c9",
".git/objects/6c/8ea9ed8c2e517cd108b31e5b9e633963857465": "842bb5ecef5c3ccd015b56d691cbc8a8",
".git/objects/6f/581d2bd2491453483659530a1cb364d38b6b54": "afe5f9cbb7cff3ef8f31e05d53fa7ce6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a9/a5f0f76cd014dbf74e2df7b6db2c83ae8a49ce": "5ae7466d4b32a8fc88f4e4cd21cd3c09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c6d101690c60409480e336b6a15c0b1747eea3": "93adf8e2763a50193e6de8769a4ace5b",
".git/objects/e3/df3f463381f52bd09055c0d05d753e91653687": "2f03f143e022261d3705e832d0b605ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/pack/pack-583bf67f7cf7d0bb073bba347b602dbf618032b9.idx": "ecc1a8a63d93ca051102ec4453b66c24",
".git/objects/pack/pack-583bf67f7cf7d0bb073bba347b602dbf618032b9.pack": "c9aa6f62c8ddb727a908042b70bcf66f",
".git/objects/pack/pack-583bf67f7cf7d0bb073bba347b602dbf618032b9.rev": "184ce58d828627c0e66ce80fa34366a7",
".git/refs/heads/main": "8faa01d03c03dc1fa68b2fb0e8a48b51",
".git/refs/remotes/origin/main": "95e729c548a98855aa59674a46c7fc88",
"assets/AssetManifest.bin": "2e153d58bbd133fdcf2b9bd0a19dd98d",
"assets/AssetManifest.bin.json": "3e33a657e28bbeb108678e27206e0536",
"assets/AssetManifest.json": "6c6e96b84ed4735f8ed5a561373649bb",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/gifs/processing.gif": "246c4f7baccbffb762cb5e178d45d71d",
"assets/assets/gifs/rejected.gif": "0f858207fc4db2b3abb6806146924bb3",
"assets/assets/images/aba.jpg": "b6f3120d4289f035b7944944c9b726ea",
"assets/assets/images/aba_qr.jpg": "4527a7dcff299fa0e27afdb4e9daaccb",
"assets/assets/images/bg-portrait.jpg": "b151488f36d0aaf0b3b78fc39a78c19d",
"assets/assets/images/bg-wide.jpg": "8cd788fe3e19d00d4b3c1f6ea86b5fc6",
"assets/assets/images/bg.jpg": "d01026bdcb85a6ef4886190a996d65b0",
"assets/assets/images/binance.png": "faecabe9929683e364ca43b295591481",
"assets/assets/images/binance_qr.jpg": "2980afb7377ac2663ca02f98b6016b6d",
"assets/assets/images/hpay.png": "ed3da217f6dd29165bc5754b9935dee1",
"assets/assets/images/huione_qr.jpg": "c0f5b85f18d6db8f4abe90f69cd469f5",
"assets/assets/images/logo.png": "c793184994408857c769f0ee2d69f827",
"assets/assets/images/logo_old.png": "2fc86f4e3ed13351e219a966bd7dc5da",
"assets/assets/images/menu.png": "d292b8eac464f219657d2fb9836b3ceb",
"assets/assets/images/pngwing.com-12.png": "6672bc30a68e2e717a592e4d8ee9f0c8",
"assets/assets/images/pngwing.com-13.png": "2c5706db77d5ea3eae29518ee6295f03",
"assets/assets/sample.pdf": "2cd8fadf07f5e83344a5f83c47219052",
"assets/FontManifest.json": "211b4461c7918a49b6b15900e753308a",
"assets/fonts/MaterialIcons-Regular.otf": "413c03d9a0941b43384aafd153365167",
"assets/NOTICES": "acf4c669263aa7b90ea2f389db47140c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ff5b4c2e9c51146c08a35fec3df1e070",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5c8f0fa0b3d723450e170565852fbc7e",
"icons/Icon-192.png": "62a4ba1b9d79dc826756a75e284ea53b",
"icons/Icon-512.png": "6d0a836ca6c03b1aae4acbafbe36a39c",
"icons/Icon-maskable-192.png": "62a4ba1b9d79dc826756a75e284ea53b",
"icons/Icon-maskable-512.png": "6d0a836ca6c03b1aae4acbafbe36a39c",
"index.html": "b0dd8d9b59be10432bdafcef86658dfd",
"/": "b0dd8d9b59be10432bdafcef86658dfd",
"main.dart.js": "c4f294da74332410ca669eb4be95fef7",
"manifest.json": "aa425bfbc1cae6be0c9159032c78f7a5",
"version.json": "c5338a233d4141fd4f89d24b95daab56"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
