import{S as m,i as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(i){const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"43066959-f9f55707df0fe34b818b99119",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const n=document.querySelector(".gallery"),c=document.querySelector(".form"),p={captionsData:"alt"};let u=new m(".gallery a",p);u.on("show.simplelightbox",function(){});c.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements.image.value.trim();if(r===""){l.error({color:"red",position:"center",message:"Please enter a search query!"});return}const o=document.createElement("div");o.classList.add("loader"),n.appendChild(o),d(r).then(s=>{n.removeChild(o);const e=f(s.hits);n.innerHTML=e,u.refresh(),s.hits.length===0&&l.info({title:"Info",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>{n.removeChild(o),l.error({color:"red",position:"center",message:"Sorry, there was an error processing your request. Please try again!"})}).finally(()=>{c.reset()})});const f=i=>i.map(r=>`<li class="gallery-item">
           <a class="gallery-link" href="${r.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${r.webformatURL}"
               data-source="${r.largeImageURL}"
               alt="${r.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li class="item-description"><h3>Likes</h3><p>${r.likes}</p>
             </li>
             <li class="item-description"><h3>Views</h3><p>${r.views}</p>
               </li>
               <li class="item-description"><h3>Comments</h3><p>${r.comments}</p>
                 </li>
                 <li class="item-description"><h3>Downloads</h3><p>${r.downloads}</p>
                   </li>
             </ul>
           </li>`).join("");
//# sourceMappingURL=commonHelpers.js.map
