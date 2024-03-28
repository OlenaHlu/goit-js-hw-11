import{S as c,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(s){const t="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"43066959-f9f55707df0fe34b818b99119",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${i}?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const d=document.querySelector(".gallery"),l=document.querySelector(".form");let m=new c(".gallery a",{captionsData:"alt"});l.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.image.value.trim();if(t===""){a.error({color:"red",position:"center",message:"Please enter a search query!"});return}const i=document.createElement("div");i.classList.add("loader"),document.body.appendChild(i),u(t).then(o=>{const e=p(o.hits);if(d.innerHTML=e,m.refresh(),o.hits.length===0){a.info({title:"Info",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(o=>{a.error({color:"red",position:"center",message:"Sorry, there was an error processing your request. Please try again!"})}).finally(()=>{l.reset(),document.body.removeChild(i)})});const p=s=>s.map(t=>`<li class="gallery-item">
           <a class="gallery-link" href="${t.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${t.webformatURL}"
               data-source="${t.largeImageURL}"
               alt="${t.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li class="item-description"><h3>Likes</h3><p>${t.likes}</p>
             </li>
             <li class="item-description"><h3>Views</h3><p>${t.views}</p>
               </li>
               <li class="item-description"><h3>Comments</h3><p>${t.comments}</p>
                 </li>
                 <li class="item-description"><h3>Downloads</h3><p>${t.downloads}</p>
                   </li>
             </ul>
           </li>`).join("");
//# sourceMappingURL=commonHelpers.js.map
