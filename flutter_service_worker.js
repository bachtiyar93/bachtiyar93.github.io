'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b3b87f9153d4406c14bc11865bbe1089",
"index.html": "3d08ca14c5c4b92971dbaee11997912c",
"/": "3d08ca14c5c4b92971dbaee11997912c",
"main.dart.js": "b2e448e99832d0f6a9cb629c191a2673",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "901d86fb8842ec0d66225a542131d689",
"assets/AssetManifest.json": "dd308b41f5f5444a713b85e78cffb445",
"assets/NOTICES": "7a938a6c7fdc0a0d0e34eddb31c67f3b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1224defec24dfef53827dba95da34e78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8cd292b9df2770041f86ad90fff96334",
"assets/fonts/MaterialIcons-Regular.otf": "ab2075c7275246adc14c2551464f7472",
"assets/assets/pawoon.png": "77f6adb3b58d194ba126b7324de37d59",
"assets/assets/wallpaper.png": "75a54e36763bf4b72e957ff46514cca9",
"assets/assets/sofast.png": "051c0ffcc697b92b401eb2b8fd737a02",
"assets/assets/smartbid.png": "6fcaf43168a2b65ccd111120935672cb",
"assets/assets/twintulip.png": "7c03762670bfde655a4bd86a087ed964",
"assets/assets/logo.png": "bbba3fa424015b99bfad72311f8533fc",
"assets/assets/smartbid/camaro_0.png": "677bd08f93fae5f591fd7571c1c0af2d",
"assets/assets/smartbid/alfa_romeo_c4_0.png": "e7ae58c4d332186edbd397737c14d260",
"assets/assets/smartbid/camaro_1.png": "9fa4d89425bff4288500294f805c96fb",
"assets/assets/smartbid/land_rover_2.png": "178a75ea05e9a15a0839e84faf41defc",
"assets/assets/smartbid/land_rover_0.png": "c46ec62a20849574c15f62703dae2744",
"assets/assets/smartbid/camaro_2.png": "562bdc074df939e8fab2e48e76643a87",
"assets/assets/smartbid/land_rover_1.png": "746595c694bface1662c333f51772c25",
"assets/assets/smartbid/avis.png": "29cf4766baaa2ff9dd63a171b101e045",
"assets/assets/smartbid/fiat_0.png": "f606c59406bed3066df0dc8f77fd9742",
"assets/assets/smartbid/fiat_1.png": "d1e2d3affc9c344abf4b94de121d844f",
"assets/assets/smartbid/acura_2.png": "fd9ebf61ec16e6fb6c19b61d4374320f",
"assets/assets/smartbid/acura_0.png": "feeb7137bfeeaf440b5cfc16bc65b733",
"assets/assets/smartbid/acura_1.png": "cfb1b206cb48952c8ade53d72c680ceb",
"assets/assets/smartbid/honda_0.png": "f8e872966e53d4f81eacd325eecd2bfb",
"assets/assets/smartbid/brand/ford.png": "4f0329c9105fc8838dc58268faf9905b",
"assets/assets/smartbid/brand/avis.png": "29cf4766baaa2ff9dd63a171b101e045",
"assets/assets/smartbid/brand/chevrolet.png": "ee1abbc62d87d817f8d931cff7232ad8",
"assets/assets/smartbid/brand/volkswagen.png": "1fcafc3c9d39dce006c445f9ba757fa4",
"assets/assets/smartbid/brand/prosche.png": "c944b9f4e308d5b3b4d242cf04058fd3",
"assets/assets/smartbid/brand/tesla.jpg": "9247d932cc0ebfa923c71070112b955a",
"assets/assets/smartbid/brand/toyota.png": "0d838195c9e5cac1213d098f06ba7303",
"assets/assets/smartbid/brand/audi.png": "4746e5d3f26772beaf5ae1374a7888be",
"assets/assets/smartbid/brand/honda.png": "543ab30a796fc26fcd6fce89d3995600",
"assets/assets/smartbid/brand/marcedes.png": "c37b8b03e1184bf949f33b8d66419fa0",
"assets/assets/smartbid/brand/bmw.png": "58f5736b728277411a56125ec3b08885",
"assets/assets/smartbid/brand/suzuki.png": "dd6c62b6ee286736334176edb9622046",
"assets/assets/smartbid/brand/nissan.png": "2ec772cd91c46c977d539b2cb8916646",
"assets/assets/smartbid/brand/hertz.png": "998da7c9d50f4d79895cd42c5d46618a",
"assets/assets/smartbid/tesla.jpg": "9247d932cc0ebfa923c71070112b955a",
"assets/assets/smartbid/dashboard/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/smartbid/dashboard/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/smartbid/dashboard/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/smartbid/dashboard/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/smartbid/dashboard/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/smartbid/dashboard/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/smartbid/dashboard/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/smartbid/dashboard/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/smartbid/dashboard/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/smartbid/dashboard/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/smartbid/dashboard/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/smartbid/dashboard/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/smartbid/dashboard/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/smartbid/dashboard/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/smartbid/dashboard/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/smartbid/dashboard/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/smartbid/dashboard/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/smartbid/dashboard/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/smartbid/dashboard/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/smartbid/dashboard/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/smartbid/dashboard/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/smartbid/dashboard/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/smartbid/dashboard/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/smartbid/dashboard/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/smartbid/dashboard/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/smartbid/dashboard/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/smartbid/citroen_0.png": "2fa940165dbf8e93bba7c2fdc96a1ef1",
"assets/assets/smartbid/citroen_1.png": "a60afcd4ed2935a8e0a0c807b3ceb3c6",
"assets/assets/smartbid/citroen_2.png": "04ad288c18da9d48e16ebd008aebd20e",
"assets/assets/smartbid/ford_1.png": "0a7083546bc392a6f7dc66904417ac9d",
"assets/assets/smartbid/ferrari_spider_488_3.png": "f35068f7d52ae64cd51157ae275d7ee0",
"assets/assets/smartbid/ferrari_spider_488_2.png": "cdf256ec3680ad0f2a7cc283333089cb",
"assets/assets/smartbid/ford_0.png": "c785b9c4aa4994978d89ed2c2633fdd4",
"assets/assets/smartbid/ferrari_spider_488_0.png": "758173f3bed4f3fe44066790107cd534",
"assets/assets/smartbid/ferrari_spider_488_1.png": "4f5c94e7dc48807ba373915f005e5b92",
"assets/assets/smartbid/nissan_gtr_2.png": "3042f543242ef12313847028383ce703",
"assets/assets/smartbid/ferrari_spider_488_4.png": "1aa650ebc79837396bf4dec0fddc796a",
"assets/assets/smartbid/nissan_gtr_3.png": "b5e0b1d9e6d188d1a6cbb936bcf2f441",
"assets/assets/smartbid/nissan_gtr_1.png": "62676bafb54089dcfe996a0ca2241765",
"assets/assets/smartbid/nissan_gtr_0.png": "b74c138a4b2bed105129359692995642",
"assets/assets/smartbid/hertz.png": "998da7c9d50f4d79895cd42c5d46618a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
