"use strict";var precacheConfig=[["/index.html","c97c2d42c840f6e4419e7bd1b103e43e"],["/static/css/main.41109dd7.css","a8a73807e13471174b0d8090ab3e4f48"],["/static/js/main.4d3aef9f.js","186061d7c57c71d2b986aba214f30ac8"],["/static/media/GothamRounded-Book.5ae9a7e1.svg","5ae9a7e1d73e7bc9c0ddeaae10436cbe"],["/static/media/GothamRounded-Book.8e267ddb.woff2","8e267ddb4734795dcfd59e6749b211b3"],["/static/media/GothamRounded-Book.b68c562a.eot","b68c562a02fcf87e5ea21e56d61d30bf"],["/static/media/GothamRounded-Book.e4d3e8a2.woff","e4d3e8a24917b96ed1521e519712af0e"],["/static/media/GothamRounded-Light.0e26da2c.svg","0e26da2cede19262f598ea1957604c26"],["/static/media/GothamRounded-Light.6ee76f8e.eot","6ee76f8e84627a2bc4ee06ce35b5f6bf"],["/static/media/GothamRounded-Light.d4f35094.woff2","d4f35094a237b47c54e335309b73efd3"],["/static/media/GothamRounded-Light.f2d6aa9a.woff","f2d6aa9aeea75a50710093c59434472a"],["/static/media/GothamRounded-Medium.3b8f0959.svg","3b8f0959ecdd7aff673b8d62a837e72e"],["/static/media/GothamRounded-Medium.4be9b22b.eot","4be9b22b3c994a0853e984415d92f746"],["/static/media/GothamRounded-Medium.697fd8cd.woff2","697fd8cd1d6038714e93965f0b797904"],["/static/media/GothamRounded-Medium.a17fa885.woff","a17fa885e548e264531eebb652a1f8ef"],["/static/media/champion-steno-logo-300x206.d2208757.png","d2208757918fb38b3797a77ff1dabfb8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});