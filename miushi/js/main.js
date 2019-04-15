"use strict";var objectFitImages=function(){function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,o={};null!==(e=u.exec(i));)o[e[1]]=e[2];return o}function o(e,i,o){var n=t(i||1,o||0);m.call(e,"src")!==n&&b.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function s(t){var s=i(t),c=t[a];if(s["object-fit"]=s["object-fit"]||"fill",!c.img){if("fill"===s["object-fit"])return;if(!c.skipTest&&f&&!s["object-position"])return}if(!c.img){c.img=new Image(t.width,t.height),c.img.srcset=m.call(t,"data-ofi-srcset")||t.srcset,c.img.src=m.call(t,"data-ofi-src")||t.src,b.call(t,"data-ofi-src",t.src),t.srcset&&b.call(t,"data-ofi-srcset",t.srcset),o(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{r(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(c.img),t.style.backgroundImage='url("'+(c.img.currentSrc||c.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=s["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(s["object-fit"])?n(c.img,function(){c.img.naturalWidth>t.width||c.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(c.img,function(e){o(t,e.naturalWidth,e.naturalHeight)})}function r(t){var e={get:function(e){return t[a].img[e?e:"src"]},set:function(e,i){return t[a].img[i?i:"src"]=e,b.call(t,"data-ofi-"+i,e),s(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function c(){function t(t,e){return t[a]&&t[a].img&&("src"===e||"srcset"===e)?t[a].img:t}g||(HTMLImageElement.prototype.getAttribute=function(e){return m.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return b.call(t(this,e),e,String(i))})}function l(t,e){var i=!h&&!t;if(e=e||{},t=t||"img",g&&!e.skipTest||!w)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var o=0;o<t.length;o++)t[o][a]=t[o][a]||{skipTest:e.skipTest},s(t[o]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&l(t.target,{skipTest:e.skipTest})},!0),h=!0,t="img"),e.watchMQ&&window.addEventListener("resize",l.bind(null,t,{skipTest:e.skipTest}))}var a="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,d="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in d.style,g="object-position"in d.style,w="background-size"in d.style,p="string"==typeof d.currentSrc,m=d.getAttribute,b=d.setAttribute,h=!1;return l.supportsObjectFit=f,l.supportsObjectPosition=g,c(),l}();$(document).ready(function(){function t(t){t.slick({infinite:!0,dots:!0,dotsClass:"custom-dots",arrows:!0,prevArrow:'<div class="arrow arrow--left"></div>',nextArrow:'<div class="arrow arrow--right"></div>',autoplay:!0,autoplaySpeed:4e3,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,centerMode:!0,variableWidth:!0}}]})}function e(t){return $(window).width()<t}function i(t){return s.unshift(t),!!(s[0]&&!s[1]||!s[0]&&s[1])}$(".sale-carousel").slick({infinite:!0,dots:!0,dotsClass:"custom-dots",arrows:!0,prevArrow:'<div class="arrow arrow--left"></div>',nextArrow:'<div class="arrow arrow--right"></div>',autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:991,settings:{arrows:!1}}]}),t($(".sets-carousel")),t($(".rolls-carousel")),t($(".pizza-carousel")),t($(".wok-carousel")),t($(".new-stock-carousel")),$(".new-stock-carousel").slick("slickFilter",$(".slide--new")),$(".btn--news").on("click",function(){$(".new-stock-carousel").slick("slickUnfilter"),$(".new-stock-carousel").slick("slickFilter",$(".slide--new")),$(".btn--news").addClass("btn--active"),$(".btn--stock").removeClass("btn--active")}),$(".btn--stock").on("click",function(){$(".new-stock-carousel").slick("slickUnfilter"),$(".new-stock-carousel").slick("slickFilter",$(".slide--stock")),$(".btn--news").removeClass("btn--active"),$(".btn--stock").addClass("btn--active")});var o,n=992,s=[];s.unshift(e(n)),s.unshift(e(n)),$(window).width()<n?(o=!0,$(".col .list").slideUp(0)):(o=!1,$(".col .list").slideDown(0)),$(window).resize(function(){o=e(n),i(e(n))&&(e(n)?$(".col .list").slideUp(0):$(".col .list").slideDown(0))}),$(".col .title").on("click",function(){o&&($(".col .list").not($(this).next()).slideUp(500),$(this).next().slideToggle(500),$(".col .title").not($(this)).removeClass("unwrapped"),$(this).toggleClass("unwrapped"))})}),$(document).on("click",function(t){var e=t.target.id,i=$("#js_overlay");"js_overlay"!==e&&"js_close"!==e&&"js_burger"!==e&&"js_burger__bar"!==e||(i.fadeToggle(),noScroll.toggle())}),function(t){function e(){if("undefined"!=typeof r)return r;var t=document.documentElement,e=document.createElement("div");return e.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),t.appendChild(e),r=e.offsetWidth-e.clientWidth,t.removeChild(e),r}function i(){return document.documentElement.scrollHeight>window.innerHeight}function o(t){if("undefined"!=typeof document&&!l){var o=document.documentElement;c=window.pageYOffset,i()?o.style.width="calc(100% - "+e()+"px)":o.style.width="100%",o.style.position="fixed",o.style.top=-c+"px",o.style.overflow="hidden",l=!0}}function n(){if("undefined"!=typeof document&&l){var t=document.documentElement;t.style.width="",t.style.position="",t.style.top="",t.style.overflow="",window.scroll(0,c),l=!1}}function s(){return l?void n():void o()}var r,c,l=!1,a={on:o,off:n,toggle:s};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a:t.noScroll=a}(window);