(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[33],{486:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(11)),l=o(a(41)),c=a(500);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,E,v,b=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);f=b,E="contextTypes",v={extract:r.default.func},E in f?Object.defineProperty(f,E,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[E]=v;var g=b;t.default=g,e.exports=t.default},487:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){for(var t=e.ratingValue,a=[],l=0;l<5;l++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:l}));if(t&&t>0)for(var c=0;c<=t-1;c++)a[c]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:c});return r.a.createElement(n.Fragment,null,a)}},488:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t})))}},490:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(65);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(l.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("p",null,"Call Us 3965410")))}},491:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass;return r.a.createElement("div",{className:"copyright ".concat(a||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t}))),r.a.createElement("p",null,"\xa9 2020"," ",r.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},492:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(499)),r=c(a(486)),l=c(a(501));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},493:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(504),c=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},o=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(c,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style"},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},494:function(e,t,a){"use strict";var n=a(485),r=a(0),l=a.n(r),c=a(103),o=a(506),i=a(491),s=a(493);t.a=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,u=e.spaceBottomClass,m=e.containerClass,d=e.extraFooterClass,p=e.sideMenu,f=Object(r.useState)(0),E=Object(n.a)(f,2),v=E[0],b=E[1],g=Object(r.useState)(0),y=Object(n.a)(g,2),h=y[0],N=y[1];Object(r.useEffect)((function(){return N(100),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){b(window.scrollY)};return l.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(u||""," ").concat(d||"")},l.a.createElement("div",{className:"".concat(m||"container")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement(i.a,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})),l.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"footer-widget mb-30 ml-30"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"ABOUT US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"},"About us")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Store location")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Orders tracking")))))),l.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},l.a.createElement("div",{className:"".concat(p?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"USEFUL LINKS")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Returns")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Support Policy")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"Size guide")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"#/"},"FAQs")))))),l.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6")},l.a.createElement("div",{className:"".concat(p?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75")},l.a.createElement("div",{className:"footer-title"},l.a.createElement("h3",null,"FOLLOW US")),l.a.createElement("div",{className:"footer-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),l.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6")},l.a.createElement(s.a,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:p})))),l.a.createElement("button",{className:"scroll-top ".concat(v>h?"show":""),onClick:function(){o.animateScroll.scrollToTop()}},l.a.createElement("i",{className:"fa fa-angle-double-up"})))}},498:function(e,t,a){"use strict";var n=a(485),r=a(0),l=a.n(r),c=a(488),o=a(495),i=a(497),s=a(496),u=a(65),m=a(64),d=a(146),p=a(490),f=Object(m.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(d.b)(t))}}}))(Object(u.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,c=e.borderStyle;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},l.a.createElement(p.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,"Free delivery on order over"," ",l.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,u=e.borderStyle,m=e.headerPaddingClass,d=e.headerBgClass,p=Object(r.useState)(0),E=Object(n.a)(p,2),v=E[0],b=E[1],g=Object(r.useState)(0),y=Object(n.a)(g,2),h=y[0],N=y[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return N(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){b(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(d||"")},l.a.createElement("div",{className:"".concat(m||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===u?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement(f,{borderStyle:u}))),l.a.createElement("div",{className:" ".concat(m||""," sticky-bar header-res-padding clearfix ").concat(v>h?"stick":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4"},l.a.createElement(c.a,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})),l.a.createElement("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},l.a.createElement(i.a,null)))),l.a.createElement(s.a,null)))}},499:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(11))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:l.default.func});var p=d;t.default=p,e.exports=t.default},500:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(11)),l=c(a(486));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,E,v=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),c&&s(a,c),t}(n.Component);p=v,f="propTypes",E={title:r.default.string},f in p?Object.defineProperty(p,f,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[f]=E;var b=v;t.default=b,e.exports=t.default},502:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(498),c=a(494);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i}),t,r.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},503:function(e,t,a){"use strict";var n=a(485),r=a(0),l=a.n(r),c=a(489),o=a.n(c),i=a(484),s=a(740),u=a(487),m=a(64);t.a=Object(m.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,c=e.discountedprice,m=e.finalproductprice,d=e.finaldiscountedprice,p=Object(r.useState)(null),f=Object(n.a)(p,2),E=f[0],v=f[1],b=Object(r.useState)(null),g=Object(n.a)(b,2),y=g[0],h=g[1],N=Object(r.useState)(t.variation?t.variation[0].color:""),w=Object(n.a)(N,2),C=w[0],O=w[1],j=Object(r.useState)(t.variation?t.variation[0].size[0].name:""),k=Object(n.a)(j,2),S=k[0],x=k[1],T=Object(r.useState)(t.variation?t.variation[0].size[0].stock:t.stock),_=Object(n.a)(T,2),P=_[0],A=_[1],B=Object(r.useState)(1),L=Object(n.a)(B,2),M=L[0],F=L[1],D=e.wishlistitem,I=e.compareitem,U=e.addtocart,R=e.addtowishlist,z=e.addtocompare,q=e.addtoast,H=e.cartitems,V=Object(i.e)(H,t,C,S);Object(r.useEffect)((function(){null!==E&&E.controller&&null!==y&&y.controller&&(E.controller.control=y,y.controller.control=E)}),[E,y]);var W={getSwiper:v,spaceBetween:10,loopedSlides:4,loop:!0},G={getSwiper:h,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return l.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},l.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return l.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},l.a.createElement("i",{className:"pe-7s-angle-right"}))}};return l.a.createElement(r.Fragment,null,l.a.createElement(s.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},l.a.createElement(s.a.Header,{closeButton:!0}),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},l.a.createElement("div",{className:"product-large-image-wrapper"},l.a.createElement(o.a,W,t.image&&t.image.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",{className:"single-image"},l.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))})))),l.a.createElement("div",{className:"product-small-image-wrapper mt-15"},l.a.createElement(o.a,G,t.image&&t.image.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",{className:"single-image"},l.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))}))))),l.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},l.a.createElement("div",{className:"product-details-content quickview-content"},l.a.createElement("h2",null,t.name),l.a.createElement("div",{className:"product-details-price"},null!==c?l.a.createElement(r.Fragment,null,l.a.createElement("span",null,a.currencySymbol+d)," ",l.a.createElement("span",{className:"old"},a.currencySymbol+m)):l.a.createElement("span",null,a.currencySymbol+m," ")),t.rating&&t.rating>0?l.a.createElement("div",{className:"pro-details-rating-wrap"},l.a.createElement("div",{className:"pro-details-rating"},l.a.createElement(u.a,{ratingValue:t.rating}))):"",l.a.createElement("div",{className:"pro-details-list"},l.a.createElement("p",null,t.shortDescription)),t.variation?l.a.createElement("div",{className:"pro-details-size-color"},l.a.createElement("div",{className:"pro-details-color-wrap"},l.a.createElement("span",null,"Color"),l.a.createElement("div",{className:"pro-details-color-content"},t.variation.map((function(e,t){return l.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},l.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===C?"checked":"",onChange:function(){O(e.color),x(e.size[0].name),A(e.size[0].stock),F(1)}}),l.a.createElement("span",{className:"checkmark"}))})))),l.a.createElement("div",{className:"pro-details-size"},l.a.createElement("span",null,"Size"),l.a.createElement("div",{className:"pro-details-size-content"},t.variation&&t.variation.map((function(e){return e.color===C?e.size.map((function(e,t){return l.a.createElement("label",{className:"pro-details-size-content--single",key:t},l.a.createElement("input",{type:"radio",value:e.name,checked:e.name===S?"checked":"",onChange:function(){x(e.name),A(e.stock),F(1)}}),l.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?l.a.createElement("div",{className:"pro-details-quality"},l.a.createElement("div",{className:"pro-details-cart btn-hover"},l.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):l.a.createElement("div",{className:"pro-details-quality"},l.a.createElement("div",{className:"cart-plus-minus"},l.a.createElement("button",{onClick:function(){return F(M>1?M-1:1)},className:"dec qtybutton"},"-"),l.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:M,readOnly:!0}),l.a.createElement("button",{onClick:function(){return F(M<P-V?M+1:M)},className:"inc qtybutton"},"+")),l.a.createElement("div",{className:"pro-details-cart btn-hover"},P&&P>0?l.a.createElement("button",{onClick:function(){return U(t,q,M,C,S)},disabled:V>=P}," ","Add To Cart"," "):l.a.createElement("button",{disabled:!0},"Out of Stock")),l.a.createElement("div",{className:"pro-details-wishlist"},l.a.createElement("button",{className:void 0!==D?"active":"",disabled:void 0!==D,title:void 0!==D?"Added to wishlist":"Add to wishlist",onClick:function(){return R(t,q)}},l.a.createElement("i",{className:"pe-7s-like"}))),l.a.createElement("div",{className:"pro-details-compare"},l.a.createElement("button",{className:void 0!==I?"active":"",disabled:void 0!==I,title:void 0!==I?"Added to compare":"Add to compare",onClick:function(){return z(t,q)}},l.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},507:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.titleText,a=e.subtitleText,n=e.positionClass,l=e.spaceClass,c=e.borderClass;return r.a.createElement("div",{className:"section-title ".concat(n||""," ").concat(l||""," ").concat(c||"")},r.a.createElement("h2",null,t),r.a.createElement("p",null,a))}},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(64),c=a(484),o=a(485),i=a(103),s=a(147),u=a(503),m=function(e){var t=e.product,a=e.currency,l=e.addToCart,m=e.addToWishlist,d=e.addToCompare,p=e.cartItem,f=e.wishlistItem,E=e.compareItem,v=e.sliderClassName,b=e.spaceBottomClass,g=Object(n.useState)(!1),y=Object(o.a)(g,2),h=y[0],N=y[1],w=Object(s.useToasts)().addToast,C=Object(c.a)(t.price,t.discount),O=+(t.price*a.currencyRate).toFixed(2),j=+(C*a.currencyRate).toFixed(2);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(v||"")},r.a.createElement("div",{className:"product-wrap-2 ".concat(b||"")},r.a.createElement("div",{className:"product-img"},r.a.createElement(i.b,{to:"/product/"+t.id},r.a.createElement("img",{className:"default-img",src:""+t.image[0],alt:""}),t.image.length>1?r.a.createElement("img",{className:"hover-img",src:""+t.image[1],alt:""}):""),t.discount||t.new?r.a.createElement("div",{className:"product-img-badges"},t.discount?r.a.createElement("span",{className:"pink"},"-",t.discount,"%"):"",t.new?r.a.createElement("span",{className:"purple"},"New"):""):"",r.a.createElement("div",{className:"product-action-2"},t.affiliateLink?r.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):t.variation&&t.variation.length>=1?r.a.createElement(i.b,{to:"".concat("","/product/").concat(t.id),title:"Select options"},r.a.createElement("i",{className:"fa fa-cog"})):t.stock&&t.stock>0?r.a.createElement("button",{onClick:function(){return l(t,w)},className:void 0!==p&&p.quantity>0?"active":"",disabled:void 0!==p&&p.quantity>0,title:void 0!==p?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):r.a.createElement("button",{disabled:!0,className:"active",title:"Out of stock"},r.a.createElement("i",{className:"fa fa-shopping-cart"})),r.a.createElement("button",{onClick:function(){return N(!0)},title:"Quick View"},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement("button",{className:void 0!==E?"active":"",disabled:void 0!==E,title:void 0!==E?"Added to compare":"Add to compare",onClick:function(){return d(t,w)}},r.a.createElement("i",{className:"fa fa-retweet"})))),r.a.createElement("div",{className:"product-content-2"},r.a.createElement("div",{className:"title-price-wrap-2"},r.a.createElement("h3",null,r.a.createElement(i.b,{to:"/product/"+t.id},t.name)),r.a.createElement("div",{className:"price-2"},null!==C?r.a.createElement(n.Fragment,null,r.a.createElement("span",null,a.currencySymbol+j)," ",r.a.createElement("span",{className:"old"},a.currencySymbol+O)):r.a.createElement("span",null,a.currencySymbol+O," "))),r.a.createElement("div",{className:"pro-wishlist-2"},r.a.createElement("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return m(t,w)}},r.a.createElement("i",{className:"fa fa-heart-o"})))))),r.a.createElement(u.a,{show:h,onHide:function(){return N(!1)},product:t,currency:a,discountedprice:C,finalproductprice:O,finaldiscountedprice:j,cartitem:p,wishlistitem:f,compareitem:E,addtocart:l,addtowishlist:m,addtocompare:d,addtoast:w}))},d=a(66),p=a(83),f=a(104);t.a=Object(l.connect)((function(e,t){return{products:Object(c.f)(e.productData.products,t.category,t.type,t.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,n,r,l){e(Object(d.e)(t,a,n,r,l))},addToWishlist:function(t,a){e(Object(p.d)(t,a))},addToCompare:function(t,a){e(Object(f.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,l=e.addToCart,c=e.addToWishlist,o=e.addToCompare,i=e.cartItems,s=e.wishlistItems,u=e.compareItems,d=e.sliderClassName,p=e.spaceBottomClass;return r.a.createElement(n.Fragment,null,t.map((function(e){return r.a.createElement(m,{sliderClassName:d,spaceBottomClass:p,product:e,currency:a,addToCart:l,addToWishlist:c,addToCompare:o,cartItem:i.filter((function(t){return t.id===e.id}))[0],wishlistItem:s.filter((function(t){return t.id===e.id}))[0],compareItem:u.filter((function(t){return t.id===e.id}))[0],key:e.id})})))}))},514:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')},524:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(103);t.a=function(e){var t=e.singlePost;return r.a.createElement("div",{className:"col-lg-4 col-sm-6"},r.a.createElement("div",{className:"blog-wrap mb-30 scroll-zoom"},r.a.createElement("div",{className:"blog-img"},r.a.createElement(l.b,{to:""+t.url},r.a.createElement("img",{src:""+t.image,alt:""})),r.a.createElement("div",{className:"blog-category-names"},t.category.map((function(e,t){return r.a.createElement("span",{className:"purple",key:t},e)})))),r.a.createElement("div",{className:"blog-content-wrap"},r.a.createElement("div",{className:"blog-content text-center"},r.a.createElement("h3",null,r.a.createElement(l.b,{to:""+t.url},t.title)),r.a.createElement("span",null,"By"," ",r.a.createElement(l.b,{to:""+t.authorUrl},t.author))))))}},529:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(514),c=a(524),o=a(507);t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass;return r.a.createElement("div",{className:"blog-area ".concat(t||""," ").concat(a||"")},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{titleText:"OUR BLOG",positionClass:"text-center",spaceClass:"mb-55"}),r.a.createElement("div",{className:"row"},l.map((function(e){return r.a.createElement(c.a,{singlePost:e,key:e.id})})))))}},567:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.titleText,a=e.subTitleText,n=e.positionClass,l=e.spaceClass;return r.a.createElement("div",{className:"section-title-2 ".concat(n||""," ").concat(l||"")},r.a.createElement("h2",null,t),r.a.createElement("p",null,a))}},592:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"}]')},603:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(592),c=function(e){var t=e.data,a=e.spaceBottomClass,n=e.textAlignClass;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"support-wrap-2 support-shape ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"support-content-2"},r.a.createElement("img",{className:"animated",src:""+t.image,alt:""}),r.a.createElement("h5",null,t.title),r.a.createElement("p",null,t.subtitle))))};t.a=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass;return r.a.createElement("div",{className:"support-area ".concat(t||""," ").concat(a||"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row feature-icon-two-wrap"},l&&l.map((function(e,t){return r.a.createElement(c,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center",key:t})})))))}},635:function(e){e.exports=JSON.parse('[{"id":1,"title":"Stylish","subtitle":"Male Clothes","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-2.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Stylish","subtitle":"Female Clothes","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-2-2.jpg","url":"/shop-grid-standard"}]')},763:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(492),c=a.n(l),o=a(502),i=a(603),s=a(529),u=a(489),m=a.n(u),d=a(635),p=a(103),f=function(e){var t=e.data,a=e.sliderClass;return r.a.createElement("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img ".concat(a||""),style:{backgroundImage:"url(".concat(""+t.image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12 ml-auto"},r.a.createElement("div",{className:"slider-content-3 slider-animated-1 text-center"},r.a.createElement("h3",{className:"animated"},t.title),r.a.createElement("h1",{className:"animated"},t.subtitle),r.a.createElement("p",{className:"animated"},t.text),r.a.createElement("div",{className:"slider-btn btn-hover"},r.a.createElement(p.b,{className:"animated",to:""+t.url},"SHOP NOW")))))))},E=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement("div",{className:"slider-area"},r.a.createElement("div",{className:"slider-active nav-style-1"},r.a.createElement(m.a,e,d&&d.map((function(e,t){return r.a.createElement(f,{data:e,key:t,sliderClass:"swiper-slide"})})))))},v=a(511),b=a(567),g=function(e){var t=e.category,a=e.limit;return r.a.createElement("div",{className:"product-area pb-60 section-padding-1"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(b.a,{titleText:"New Arrival",subTitleText:"Lorem ipsum dolor sit amet conse ctetu.",positionClass:"text-center",spaceClass:"mb-60"}),r.a.createElement("div",{className:"row five-column"},r.a.createElement(v.a,{category:t,type:"new",limit:a,spaceBottomClass:"mb-25"}))))};t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,"Flone | Fashion Home"),r.a.createElement("meta",{name:"description",content:"Fashion home of flone react minimalist eCommerce template."})),r.a.createElement(o.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible"},r.a.createElement(E,null),r.a.createElement(i.a,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),r.a.createElement(g,{category:"accessories",limit:10}),r.a.createElement(s.a,{spaceBottomClass:"pb-55"})))}}}]);
//# sourceMappingURL=33.53e03e64.chunk.js.map