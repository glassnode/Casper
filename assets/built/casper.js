function addFormEventListener(e,t,r=null,n=null){console.log(t+"-form");let i=e.getElementById(t+"-form");var o=e.getElementById(t+"-email");let s=e.getElementById(t+"-submit");var a=e.getElementById(t+"-warning");i&&i.addEventListener("submit",e=>{e.preventDefault();e=o.value;s.disabled=!0,fetch("http://localhost:3000/api/subscribe",{body:JSON.stringify({email:e,type:"newsletter"}),headers:{"Content-Type":"application/json"},method:"POST"}).then(e=>{console.log(e),r&&r(),s.disabled=!1}).then(e=>{console.error(e),n&&n(a)})})}!function(o){"use strict";o.fn.fitVids=function(e){var t,r,i={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(r.childNodes[1])),e&&o.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var n=".fitvidsignore";i.ignore&&(n=n+", "+i.ignore);e=o(this).find(e.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,r=o(this);0<r.parents(n).length||"embed"===this.tagName.toLowerCase()&&r.parent("object").length||r.parent(".fluid-width-video-wrapper").length||(r.css("height")||r.css("width")||!isNaN(r.attr("height"))&&!isNaN(r.attr("width"))||(r.attr("height",9),r.attr("width",16)),e=("object"===this.tagName.toLowerCase()||r.attr("height")&&!isNaN(parseInt(r.attr("height"),10))?parseInt(r.attr("height"),10):r.height())/(isNaN(parseInt(r.attr("width"),10))?r.width():parseInt(r.attr("width"),10)),r.attr("name")||(t="fitvid"+o.fn.fitVids._count,r.attr("name",t),o.fn.fitVids._count++),r.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),r.removeAttr("height").removeAttr("width"))})})},o.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){var r="glassnode.dark-mode",n="dark-mode",e=e.matchMedia("(prefers-color-scheme: dark)"),i=t.querySelector("html"),t=t.querySelector(".js-toggle-mode");"true"!==localStorage.getItem(r)&&!e.matches||i.classList.toggle(n),t.addEventListener("click",()=>{localStorage.setItem(r,!i.classList.contains(n)),i.classList.toggle(n)})}(window,document),function(t,r){var n,i,o,s,a,d,l,c=r.querySelector("link[rel=next]");function u(){if(404===this.status)return t.removeEventListener("scroll",h),void t.removeEventListener("resize",f);this.response.querySelectorAll("article.post-card").forEach(function(e){n.appendChild(r.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?c.href=e.href:(t.removeEventListener("scroll",h),t.removeEventListener("resize",f)),l=r.documentElement.scrollHeight,s=o=!1}function e(){var e;s||(a+d<=l-i?o=!1:(s=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",c.href),e.send(null)))}function m(){o||t.requestAnimationFrame(e),o=!0}function h(){a=t.scrollY,m()}function f(){d=t.innerHeight,l=r.documentElement.scrollHeight,m()}!c||(n=r.querySelector(".post-feed"))&&(s=o=!(i=300),a=t.scrollY,d=t.innerHeight,l=r.documentElement.scrollHeight,t.addEventListener("scroll",h,{passive:!0}),t.addEventListener("resize",f),m())}(window,document),function(t){var r="newsletterFloatBannerHidden",e="true"===localStorage.getItem(r);let n=t.querySelector(".newsletter-banner");if(!e&&n){n.classList.remove("d-none");let e=t.querySelector(".newsletter-banner__dismiss button");e.addEventListener("click",()=>{n.classList.add("d-none"),localStorage.setItem(r,"true")})}}((window,document)),function(t){[{name:"newsletter-post-card",afterSuccess:null,afterError:e=>{e.classList.remove("d-none")}},{name:"newsletter-banner",afterSuccess:null,afterError:null}].map(e=>{addFormEventListener(t,e.name,e.afterSuccess,e.afterError)})}((window,document));
//# sourceMappingURL=casper.js.map