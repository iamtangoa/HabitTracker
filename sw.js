const V="habit-tracker-v3";
const FILES=["./","./index.html","./manifest.json","./firebase-config.js","./icon-192.png","./icon-512.png","./icon-maskable.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=="GET"||!(u.origin===location.origin||u.hostname==="www.gstatic.com"))return;
 e.respondWith(fetch(r).then(x=>{if(x&&(x.ok||x.type==="opaque")){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x}).catch(()=>caches.match(r).then(x=>x||caches.match("./index.html"))))});
