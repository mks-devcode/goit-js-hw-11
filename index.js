import{a as m,S as f,i as n}from"./assets/vendor-DirGshhi.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=m.create({baseURL:"https://pixabay.com",params:{key:"56113716-8c020b23e7503bfe8f17bb94f",image_type:"photo",orientation:"horizontal",safesearch:!0}}),d=r=>u.get("/api/",{params:{q:r}}).then(i=>i.data),l=document.querySelector(".gallery");console.log(l);const c=document.querySelector(".loader");function p({webformatURL:r,largeImageURL:i,tags:s,likes:o,views:e,comments:t,downloads:a}){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
    />
    </a>
    <div class="info-wrapper">
        <div class="info-item">
          <h3>Likes</h3>
          <p>${o}</p>
        </div>
        <div class="info-item">
          <h3>Views</h3>
          <p>${e}</p>
        </div>
        <div class="info-item">
          <h3>Comments</h3>
          <p>${t}</p>
        </div>
        <div class="info-item">
          <h3>Downloads</h3>
          <p>${a}</p>
        </div>
    </div>
</li>`}function h(r){return r.map(p).join("")}function g(r){l.innerHTML=r,v.refresh()}function y(){l.innerHTML=""}const v=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function L(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(r.target).get("search-text").trim();if(s==="")return n.error({message:"Search field cannot be empty!",position:"topRight"});y(),L(),d(s).then(o=>{if(console.log(o),o.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const e=h(o.hits);console.log(e),g(e)}).catch(o=>n.error({message:o.message,position:"topRight"})).finally(()=>{b()}),r.target.reset()});
//# sourceMappingURL=index.js.map
