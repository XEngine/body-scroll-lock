"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});let a=!1;if(typeof window<"u"){const o={get passive(){a=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}const d=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1);let n=[],s=!1,w=-1,r,l,c;const p=o=>n.some(e=>!!(e.options.allowTouchMove&&e.options.allowTouchMove(o))),u=o=>{const e=o||window.event;return p(e.target)||e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)},y=o=>{if(c===void 0){const e=!!o&&o.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(e&&i>0){const t=parseInt(window.getComputedStyle(window.top.document.body).getPropertyValue("padding-right"),10);c=window.top.document.body.style.paddingRight,window.top.document.body.style.paddingRight=`${t+i}px`}}r===void 0&&(r=window.top.document.body.style.overflow,window.top.document.body.style.overflow="hidden")},f=()=>{c!==void 0&&(window.top.document.body.style.paddingRight=c,c=void 0),r!==void 0&&(window.top.document.body.style.overflow=r,r=void 0)},m=()=>window.requestAnimationFrame(()=>{if(l===void 0){l={position:window.top.document.body.style.position,top:window.top.document.body.style.top,left:window.top.document.body.style.left};const{scrollY:o,scrollX:e,innerHeight:i}=window;window.top.document.body.style.position="fixed",window.top.document.body.style.top=`${-o}px`,window.top.document.body.style.left=`${-e}px`}}),v=()=>{if(l!==void 0){const o=-parseInt(window.top.document.body.style.top,10),e=-parseInt(window.top.document.body.style.left,10);window.top.document.body.style.position=l.position,window.top.document.body.style.top=l.top,window.top.document.body.style.left=l.left,window.scrollTo(e,o),l=void 0}},h=o=>o?o.scrollHeight-o.scrollTop<=o.clientHeight:!1,g=(o,e)=>{const i=o.targetTouches[0].clientY-w;return p(o.target)?!1:e&&e.scrollTop===0&&i>0||h(e)&&i<0?u(o):(o.stopPropagation(),!0)},b=(o,e)=>{if(!o){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(n.some(t=>t.targetElement===o))return;const i={targetElement:o,options:e||{}};n=[...n,i],d?m():y(e),d&&(o.ontouchstart=t=>{t.targetTouches.length===1&&(w=t.targetTouches[0].clientY)},o.ontouchmove=t=>{t.targetTouches.length===1&&g(t,o)},s||(document.addEventListener("touchmove",u,a?{passive:!1}:void 0),s=!0))},S=()=>{d&&(n.forEach(o=>{o.targetElement.ontouchstart=null,o.targetElement.ontouchmove=null}),s&&(document.removeEventListener("touchmove",u,a?{passive:!1}:void 0),s=!1),w=-1),d?v():f(),n=[]},B=o=>{if(!o){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}n=n.filter(e=>e.targetElement!==o),d&&(o.ontouchstart=null,o.ontouchmove=null,s&&n.length===0&&(document.removeEventListener("touchmove",u,a?{passive:!1}:void 0),s=!1)),d?v():f()};exports.clearAllBodyScrollLocks=S;exports.disableBodyScroll=b;exports.enableBodyScroll=B;
