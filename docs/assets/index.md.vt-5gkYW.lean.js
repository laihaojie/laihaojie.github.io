import{_ as X,o as S,c as A,d as Y,a3 as ae,j as pe,P as ce,I as O,k as ve,F as ue}from"./chunks/framework.FL0bwkQZ.js";const he={},me={class:"loader"};function we(e,t){return S(),A("div",me)}const fe=X(he,[["render",we],["__scopeId","data-v-55c478a0"]]),ge={},ye={class:"washing"};function xe(e,t){return S(),A("div",ye)}const _e=X(ge,[["render",xe],["__scopeId","data-v-9de7efbb"]]);let j={};function F(e={}){j={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function l(e){return e?j[e]:j}function N(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function Z(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{const i=n.matches(t),o=Array.from(n.querySelectorAll(t));return[...i?[n]:[],...o]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&Le(n))}function Q(e){if(!e||Ce(e))return;const t=l("smoothScroll");e.scrollIntoView({behavior:!t||be(e)?"auto":"smooth",inline:"center",block:"center"})}function be(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function Ce(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function Le(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let z={};function _(e,t){z[e]=t}function d(e){return e?z[e]:z}function q(){z={}}let V={};function R(e,t){V[e]=t}function $(e){var t;(t=V[e])==null||t.call(V)}function Pe(){V={}}function Be(e,t,n,i){let o=d("__activeStagePosition");const a=o||n.getBoundingClientRect(),h=i.getBoundingClientRect(),m=N(e,a.x,h.x-a.x,t),s=N(e,a.y,h.y-a.y,t),u=N(e,a.width,h.width-a.width,t),r=N(e,a.height,h.height-a.height,t);o={x:m,y:s,width:u,height:r},te(o),_("__activeStagePosition",o)}function ee(e){if(!e)return;const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};_("__activeStagePosition",n),te(n)}function Ee(){const e=d("__activeStagePosition"),t=d("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}const n=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${i}`)}function $e(e){const t=ke(e);document.body.appendChild(t),ie(t,n=>{n.target.tagName==="path"&&$("overlayClick")}),_("__overlaySvg",t)}function te(e){const t=d("__overlaySvg");if(!t){$e(e);return}const n=t.firstElementChild;if((n==null?void 0:n.tagName)!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",ne(e))}function ke(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",ne(e)),o.style.fill=l("overlayColor")||"rgb(0,0,0)",o.style.opacity=`${l("overlayOpacity")}`,o.style.pointerEvents="auto",o.style.cursor="auto",i.appendChild(o),i}function ne(e){const t=window.innerWidth,n=window.innerHeight,i=l("stagePadding")||0,o=l("stageRadius")||0,a=e.width+i*2,h=e.height+i*2,m=Math.min(o,a/2,h/2),s=Math.floor(Math.max(m,0)),u=e.x-i+s,r=e.y-i,p=a-s*2,c=h-s*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${u},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`}function Se(){const e=d("__overlaySvg");e&&e.remove()}function Ae(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function G(e){const{element:t}=e;let n=typeof t=="string"?document.querySelector(t):t;n||(n=Ae()),Te(n,e)}function He(){const e=d("__activeElement"),t=d("__activeStep");e&&(ee(e),Ee(),se(e,t))}function Te(e,t){const n=Date.now(),i=d("__activeStep"),o=d("__activeElement")||e,a=!o||o===e,h=e.id==="driver-dummy-element",m=o.id==="driver-dummy-element",s=l("animate"),u=t.onHighlightStarted||l("onHighlightStarted"),r=(t==null?void 0:t.onHighlighted)||l("onHighlighted"),p=(i==null?void 0:i.onDeselected)||l("onDeselected"),c=l(),w=d();!a&&p&&p(m?void 0:o,i,{config:c,state:w}),u&&u(h?void 0:e,t,{config:c,state:w});const g=!a&&s;let f=!1;Ne(),_("previousStep",i),_("previousElement",o),_("activeStep",t),_("activeElement",e);const v=()=>{if(d("__transitionCallback")!==v)return;const y=Date.now()-n,L=400-y<=400/2;t.popover&&L&&!f&&g&&(K(e,t),f=!0),l("animate")&&y<400?Be(y,400,o,e):(ee(e),r&&r(h?void 0:e,t,{config:l(),state:d()}),_("__transitionCallback",void 0),_("__previousStep",i),_("__previousElement",o),_("__activeStep",t),_("__activeElement",e)),window.requestAnimationFrame(v)};_("__transitionCallback",v),window.requestAnimationFrame(v),Q(e),!g&&t.popover&&K(e,t),o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls"),l("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function Me(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function k(){const e=d("__resizeTimeout");e&&window.cancelAnimationFrame(e),_("__resizeTimeout",window.requestAnimationFrame(He))}function De(e){var t;if(!d("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const n=d("__activeElement"),i=(t=d("popover"))==null?void 0:t.wrapper,o=Z([...i?[i]:[],...n?[n]:[]]),a=o[0],h=o[o.length-1];if(e.preventDefault(),e.shiftKey){const m=o[o.indexOf(document.activeElement)-1]||h;m==null||m.focus()}else{const m=o[o.indexOf(document.activeElement)+1]||a;m==null||m.focus()}}function oe(e){var t;((t=l("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?$("escapePress"):e.key==="ArrowRight"?$("arrowRightPress"):e.key==="ArrowLeft"&&$("arrowLeftPress"))}function ie(e,t,n){const i=(o,a)=>{const h=o.target;e.contains(h)&&((!n||n(h))&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()),a==null||a(o))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",o=>{i(o,t)},!0)}function Ie(){window.addEventListener("keyup",oe,!1),window.addEventListener("keydown",De,!1),window.addEventListener("resize",k),window.addEventListener("scroll",k)}function We(){window.removeEventListener("keyup",oe),window.removeEventListener("resize",k),window.removeEventListener("scroll",k)}function Ne(){const e=d("popover");e&&(e.wrapper.style.display="none")}function K(e,t){var n,i;let o=d("popover");o&&document.body.removeChild(o.wrapper),o=Oe(),document.body.appendChild(o.wrapper);const{title:a,description:h,showButtons:m,disableButtons:s,showProgress:u,nextBtnText:r=l("nextBtnText")||"Next &rarr;",prevBtnText:p=l("prevBtnText")||"&larr; Previous",progressText:c=l("progressText")||"{current} of {total}"}=t.popover||{};o.nextButton.innerHTML=r,o.previousButton.innerHTML=p,o.progress.innerHTML=c,a?(o.title.innerHTML=a,o.title.style.display="block"):o.title.style.display="none",h?(o.description.innerHTML=h,o.description.style.display="block"):o.description.style.display="none";const w=m||l("showButtons"),g=u||l("showProgress")||!1,f=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||g;o.closeButton.style.display=w.includes("close")?"block":"none",f?(o.footer.style.display="flex",o.progress.style.display=g?"block":"none",o.nextButton.style.display=w.includes("next")?"block":"none",o.previousButton.style.display=w.includes("previous")?"block":"none"):o.footer.style.display="none";const v=s||l("disableButtons")||[];v!=null&&v.includes("next")&&(o.nextButton.disabled=!0,o.nextButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("previous")&&(o.previousButton.disabled=!0,o.previousButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("close")&&(o.closeButton.disabled=!0,o.closeButton.classList.add("driver-popover-btn-disabled"));const y=o.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");const L=o.arrow;L.className="driver-popover-arrow";const P=((n=t.popover)==null?void 0:n.popoverClass)||l("popoverClass")||"";y.className=`driver-popover ${P}`.trim(),ie(o.wrapper,B=>{var H,T,M;const E=B.target,D=((H=t.popover)==null?void 0:H.onNextClick)||l("onNextClick"),I=((T=t.popover)==null?void 0:T.onPrevClick)||l("onPrevClick"),W=((M=t.popover)==null?void 0:M.onCloseClick)||l("onCloseClick");if(E.classList.contains("driver-popover-next-btn"))return D?D(e,t,{config:l(),state:d()}):$("nextClick");if(E.classList.contains("driver-popover-prev-btn"))return I?I(e,t,{config:l(),state:d()}):$("prevClick");if(E.classList.contains("driver-popover-close-btn"))return W?W(e,t,{config:l(),state:d()}):$("closeClick")},B=>!(o!=null&&o.description.contains(B))&&!(o!=null&&o.title.contains(B))&&typeof B.className=="string"&&B.className.includes("driver-popover")),_("popover",o);const x=((i=t.popover)==null?void 0:i.onPopoverRender)||l("onPopoverRender");x&&x(o,{config:l(),state:d()}),se(e,t),Q(y);const b=e.classList.contains("driver-dummy-element"),C=Z([y,...b?[]:[e]]);C.length>0&&C[0].focus()}function re(){const e=d("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),n=l("stagePadding")||0,i=l("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function J(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.top-o,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(n.top-(i==null?void 0:i.realHeight)+n.height+o,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):e==="center"?Math.max(Math.min(n.top+n.height/2-(i==null?void 0:i.realHeight)/2,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):0}function U(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.left-o,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(n.left-(i==null?void 0:i.realWidth)+n.width+o,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):e==="center"?Math.max(Math.min(n.left+n.width/2-(i==null?void 0:i.realWidth)/2,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):0}function se(e,t){const n=d("popover");if(!n)return;const{align:i="start",side:o="left"}=(t==null?void 0:t.popover)||{},a=i,h=e.id==="driver-dummy-element"?"over":o,m=l("stagePadding")||0,s=re(),u=n.arrow.getBoundingClientRect(),r=e.getBoundingClientRect(),p=r.top-s.height;let c=p>=0;const w=window.innerHeight-(r.bottom+s.height);let g=w>=0;const f=r.left-s.width;let v=f>=0;const y=window.innerWidth-(r.right+s.width);let L=y>=0;const P=!c&&!g&&!v&&!L;let x=h;if(h==="top"&&c?L=v=g=!1:h==="bottom"&&g?L=v=c=!1:h==="left"&&v?L=c=g=!1:h==="right"&&L&&(v=c=g=!1),h==="over"){const b=window.innerWidth/2-s.realWidth/2,C=window.innerHeight/2-s.realHeight/2;n.wrapper.style.left=`${b}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${C}px`,n.wrapper.style.bottom="auto"}else if(P){const b=window.innerWidth/2-(s==null?void 0:s.realWidth)/2,C=10;n.wrapper.style.left=`${b}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto"}else if(v){const b=Math.min(f,window.innerWidth-(s==null?void 0:s.realWidth)-u.width),C=J(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});n.wrapper.style.left=`${b}px`,n.wrapper.style.top=`${C}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="left"}else if(L){const b=Math.min(y,window.innerWidth-(s==null?void 0:s.realWidth)-u.width),C=J(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});n.wrapper.style.right=`${b}px`,n.wrapper.style.top=`${C}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",x="right"}else if(c){const b=Math.min(p,window.innerHeight-s.realHeight-u.width);let C=U(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});n.wrapper.style.top=`${b}px`,n.wrapper.style.left=`${C}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="top"}else if(g){const b=Math.min(w,window.innerHeight-(s==null?void 0:s.realHeight)-u.width);let C=U(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:u});n.wrapper.style.left=`${C}px`,n.wrapper.style.bottom=`${b}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",x="bottom"}P?n.arrow.classList.add("driver-popover-arrow-none"):Re(a,x,e)}function Re(e,t,n){const i=d("popover");if(!i)return;const o=n.getBoundingClientRect(),a=re(),h=i.arrow,m=a.width,s=window.innerWidth,u=o.width,r=o.left,p=a.height,c=window.innerHeight,w=o.top,g=o.height;h.className="driver-popover-arrow";let f=t,v=e;t==="top"?(r+u<=0?(f="right",v="end"):r+u-m<=0&&(f="top",v="start"),r>=s?(f="left",v="end"):r+m>=s&&(f="top",v="end")):t==="bottom"?(r+u<=0?(f="right",v="start"):r+u-m<=0&&(f="bottom",v="start"),r>=s?(f="left",v="start"):r+m>=s&&(f="bottom",v="end")):t==="left"?(w+g<=0?(f="bottom",v="end"):w+g-p<=0&&(f="left",v="start"),w>=c?(f="top",v="end"):w+p>=c&&(f="left",v="end")):t==="right"&&(w+g<=0?(f="bottom",v="start"):w+g-p<=0&&(f="right",v="start"),w>=c?(f="top",v="start"):w+p>=c&&(f="right",v="end")),f?(h.classList.add(`driver-popover-arrow-side-${f}`),h.classList.add(`driver-popover-arrow-align-${v}`)):h.classList.add("driver-popover-arrow-none")}function Oe(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";const i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";const o=document.createElement("button");o.type="button",o.classList.add("driver-popover-close-btn"),o.setAttribute("aria-label","Close"),o.innerHTML="&times;";const a=document.createElement("footer");a.classList.add("driver-popover-footer");const h=document.createElement("span");h.classList.add("driver-popover-progress-text"),h.innerText="";const m=document.createElement("span");m.classList.add("driver-popover-navigation-btns");const s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";const u=document.createElement("button");return u.type="button",u.classList.add("driver-popover-next-btn"),u.innerHTML="Next &rarr;",m.appendChild(s),m.appendChild(u),a.appendChild(h),a.appendChild(m),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:n,description:i,footer:a,previousButton:s,nextButton:u,closeButton:o,footerButtons:m,progress:h}}function ze(){var e;const t=d("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function Ve(e={}){F(e);function t(){l("allowClose")&&u()}function n(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r+1;p[c]?s(c):u()}function i(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r-1;p[c]?s(c):u()}function o(r){(l("steps")||[])[r]?s(r):u()}function a(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u"||typeof d("activeIndex")>"u")return;const g=((r=c.popover)==null?void 0:r.onPrevClick)||l("onPrevClick");if(g)return g(w,c,{config:l(),state:d()});i()}function h(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u")return;const g=((r=c.popover)==null?void 0:r.onNextClick)||l("onNextClick");if(g)return g(w,c,{config:l(),state:d()});n()}function m(){d("isInitialized")||(_("isInitialized",!0),document.body.classList.add("driver-active",l("animate")?"driver-fade":"driver-simple"),Ie(),R("overlayClick",t),R("escapePress",t),R("arrowLeftPress",a),R("arrowRightPress",h))}function s(r=0){var p,c,w,g,f,v,y,L;const P=l("steps");if(!P){console.error("No steps to drive through"),u();return}if(!P[r]){u();return}_("__activeOnDestroyed",document.activeElement),_("activeIndex",r);const x=P[r],b=P[r+1],C=P[r-1],B=((p=x.popover)==null?void 0:p.doneBtnText)||l("doneBtnText")||"Done",H=l("allowClose"),T=typeof((c=x.popover)==null?void 0:c.showProgress)<"u"?(w=x.popover)==null?void 0:w.showProgress:l("showProgress"),M=(((g=x.popover)==null?void 0:g.progressText)||l("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${r+1}`).replace("{{total}}",`${P.length}`),E=((f=x.popover)==null?void 0:f.showButtons)||l("showButtons"),D=["next","previous",...H?["close"]:[]].filter(de=>!(E!=null&&E.length)||E.includes(de)),I=((v=x.popover)==null?void 0:v.onNextClick)||l("onNextClick"),W=((y=x.popover)==null?void 0:y.onPrevClick)||l("onPrevClick"),le=((L=x.popover)==null?void 0:L.onCloseClick)||l("onCloseClick");G({...x,popover:{showButtons:D,nextBtnText:b?void 0:B,disableButtons:[...C?[]:["previous"]],showProgress:T,progressText:M,onNextClick:I||(()=>{b?s(r+1):u()}),onPrevClick:W||(()=>{s(r-1)}),onCloseClick:le||(()=>{u()}),...(x==null?void 0:x.popover)||{}}})}function u(r=!0){const p=d("__activeElement"),c=d("__activeStep"),w=d("__activeOnDestroyed"),g=l("onDestroyStarted");if(r&&g){const y=!p||(p==null?void 0:p.id)==="driver-dummy-element";g(y?void 0:p,c,{config:l(),state:d()});return}const f=(c==null?void 0:c.onDeselected)||l("onDeselected"),v=l("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),We(),ze(),Me(),Se(),Pe(),q(),p&&c){const y=p.id==="driver-dummy-element";f&&f(y?void 0:p,c,{config:l(),state:d()}),v&&v(y?void 0:p,c,{config:l(),state:d()})}w&&w.focus()}return{isActive:()=>d("isInitialized")||!1,refresh:k,drive:(r=0)=>{m(),s(r)},setConfig:F,setSteps:r=>{q(),F({...l(),steps:r})},getConfig:l,getState:d,getActiveIndex:()=>d("activeIndex"),isFirstStep:()=>d("activeIndex")===0,isLastStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&p===r.length-1},getActiveStep:()=>d("activeStep"),getActiveElement:()=>d("activeElement"),getPreviousElement:()=>d("previousElement"),getPreviousStep:()=>d("previousStep"),moveNext:n,movePrevious:i,moveTo:o,hasNextStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p+1]},hasPreviousStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p-1]},highlight:r=>{m(),G({...r,popover:r.popover?{showButtons:[],showProgress:!1,progressText:"",...r.popover}:void 0})},destroy:()=>{u(!1)}}}const Fe=Y({__name:"driver",setup(e){const t=ae("isDriver",!1),n=Ve({steps:[{element:"#docsearch",popover:{title:"快速搜索",description:"输入标题或关键字可快速搜索。",prevBtnText:"上一个",nextBtnText:"下一个"}},{element:".VPSwitchAppearance",popover:{title:"暗黑模式切换",description:"点击这里切换网页主题模式。",prevBtnText:"上一个",nextBtnText:"下一个"}},{element:".VPSocialLink",popover:{title:"作者的GitHub",description:"点击访问作者GitHub，欢迎关注。",prevBtnText:"上一个",nextBtnText:"下一个"}},{element:".container .action .VPButton",popover:{title:"网页代码仓库地址",description:"点击访问代码仓库，欢迎Star。",prevBtnText:"上一个",nextBtnText:"结束"}}]});return pe(async()=>{await ce(),t.value||n.drive(),t.value=!0}),(i,o)=>(S(),A("div"))}}),je={class:"home-wrapper"},qe=Y({__name:"home",setup(e){return(t,n)=>(S(),A(ue,null,[O(Fe),ve("div",je,[O(fe),O(_e)])],64))}}),Je=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"阿杰编程手册","text":"Vite & Vue powered static site generator.","tagline":"Lorem ipsum...","image":{"src":"/mao.png","alt":"VitePress"},"actions":[{"theme":"alt","text":"View on GitHub","link":"https://github.com/laihaojie/jie-docs"}]},"features":null},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1700831538000}'),Ge={name:"index.md"},Ue=Object.assign(Ge,{setup(e){return(t,n)=>(S(),A("div",null,[O(qe)]))}});export{Je as __pageData,Ue as default};
