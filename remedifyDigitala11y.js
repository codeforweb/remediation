!function(){"use strict";function e(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function c(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=r,n=i[t=t],(t=function(t){t=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(i,t))})}return r}var t,n,i=function(n,r){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=c({timeout:8e3,frequency:1e3},i||{}),a=Date.now();!function t(){var e=n();e?r(e):setTimeout(function(){i.timeout&&Date.now()-a>i.timeout?o&&o():t()},i.frequency)}()};t="\n        li.active >ul.sub-menu {\n\t\t    opacity: 1 !important;\n\t\t    visibility: visible !important;\n\t\t    clip: auto !important;\n\t\t    height: auto !important;\n\t\t    overflow: visible !important;\n\t\t    display: grid !important;\n        }\n        .dropdown-nav-special-toggle {\n        \tdisplay:none !important;\n        }\n    ",(n=document.createElement("style")).innerHTML=t,document.head.appendChild(n),function(n,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=c({ancestor:document,useForEach:!0},r||{});i(function(){var t;if(r.ancestor){var e=[];try{e=r.ancestor.querySelectorAll(n)}catch(t){try{e=remediationUtil.queryXPathAll(n,r.ancestor)}catch(t){throw new Error(n+" is invalid CSS and XPath selector")}}return null!=(t=e)&&t.length?e:void 0}},function(t){r.useForEach?t.forEach(e):e(t)},r,t)}("#site-navigation li.menu-item-has-children",function(e){function n(){e.classList.remove("active"),r.setAttribute("aria-expanded","false")}var r=e.querySelector("a"),t=(r.setAttribute("role","button"),r.setAttribute("tabindex",0),r.setAttribute("aria-expanded","false"),e.querySelector(".sub-menu"));t.id=t.id||function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",n=0;n<10;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return"rcc-"+e}(),r.setAttribute("aria-controls",t.id);r.addEventListener("click",function(t){e.classList.contains("active")?n():(e.classList.add("active"),r.setAttribute("aria-expanded","true")),t.preventDefault(),t.stopPropagation()}),r.addEventListener("keydown",function(t){13!==t.keyCode&&32!==t.keyCode||(t.preventDefault(),r.click()),27===t.keyCode&&(t.preventDefault(),n(),r.focus())}),e.querySelectorAll("a").forEach(function(t){t.addEventListener("keydown",function(t){27===t.keyCode&&(t.preventDefault(),n(),r.focus())}),t.addEventListener("blur",function(){setTimeout(function(){e.contains(document.activeElement)||n()},100)})})})}();
