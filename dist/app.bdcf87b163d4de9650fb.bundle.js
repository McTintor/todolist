(()=>{"use strict";var n={568:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),a=t(314),A=t.n(a)()(r());A.push([n.id,"body {\n    height: 100vh;\n    width: 100%;\n    background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n#content {\n    min-height: 60%;\n    max-height: 60%;\n    width: 60%;\n    border-radius: 1em;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 1px -3px 65px 0px rgba(0,0,0,0.83);\n    -webkit-box-shadow: 10px 15px 65px 0px rgba(0,0,0,0.83);\n    -moz-box-shadow: 10px 15px 65px 0px rgba(0,0,0,0.83);\n}\n\n#sidebar {\n    height: 100%;\n    width: 25%;\n    background: rgba(255, 255, 255, 0.411);\n    border-radius: 1rem 0 0 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#maincontent {\n    height: 100%;\n    width: 75%;\n    background: rgba(255, 255, 255, 0.199);\n    border-radius: 0 1rem 1rem 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n}\n\nfooter {\n    width: 100%;\n    padding: 0.5em 0;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n    font-size: 1em;\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    background: rgba(155, 218, 199, 0.274);\n    text-align: center;\n}\n\n#title {\n    text-align: center;\n    margin: 0 0 2rem 0;\n    padding: 0;\n    font-size: 3em;\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\na, a:link, a:visited {\n    color: black;\n    text-decoration: none;\n}\n\n#add {\n    margin: 1em 4em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 1em 1.5em;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    -webkit-box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    -moz-box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    font-size: large;\n}\n\n#add:hover {\n    background-color: rgb(255, 215, 213);\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n    padding-top: 60px;\n  }\n  .modal-content {\n    background-color: #fefefe;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }","",{version:3,sources:["webpack://./src/main.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,WAAW;IACX,4BAA4B;IAC5B,qFAAqF;IACrF,UAAU;IACV,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,8CAA8C;IAC9C,uDAAuD;IACvD,oDAAoD;AACxD;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sCAAsC;IACtC,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sCAAsC;IACtC,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,cAAc;IACd,qEAAqE;IACrE,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,qEAAqE;AACzE;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;IAC9C,sDAAsD;IACtD,mDAAmD;IACnD,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,4BAA4B;IAC5B,iCAAiC;IACjC,iBAAiB;EACnB;EACA;IACE,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;EACA;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;EACA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB",sourcesContent:["body {\n    height: 100vh;\n    width: 100%;\n    background: rgb(238,174,202);\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n#content {\n    min-height: 60%;\n    max-height: 60%;\n    width: 60%;\n    border-radius: 1em;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 1px -3px 65px 0px rgba(0,0,0,0.83);\n    -webkit-box-shadow: 10px 15px 65px 0px rgba(0,0,0,0.83);\n    -moz-box-shadow: 10px 15px 65px 0px rgba(0,0,0,0.83);\n}\n\n#sidebar {\n    height: 100%;\n    width: 25%;\n    background: rgba(255, 255, 255, 0.411);\n    border-radius: 1rem 0 0 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#maincontent {\n    height: 100%;\n    width: 75%;\n    background: rgba(255, 255, 255, 0.199);\n    border-radius: 0 1rem 1rem 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n}\n\nfooter {\n    width: 100%;\n    padding: 0.5em 0;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n    font-size: 1em;\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    background: rgba(155, 218, 199, 0.274);\n    text-align: center;\n}\n\n#title {\n    text-align: center;\n    margin: 0 0 2rem 0;\n    padding: 0;\n    font-size: 3em;\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\na, a:link, a:visited {\n    color: black;\n    text-decoration: none;\n}\n\n#add {\n    margin: 1em 4em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 1em 1.5em;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    -webkit-box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    -moz-box-shadow: 10px 10px 17px 3px rgba(0,0,0,0.3);\n    font-size: large;\n}\n\n#add:hover {\n    background-color: rgb(255, 215, 213);\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n    padding-top: 60px;\n  }\n  .modal-content {\n    background-color: #fefefe;\n    margin: 5% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }"],sourceRoot:""}]);const i=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},A=[],i=0;i<n.length;i++){var c=n[i],s=o.base?c[0]+o.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}A.push(l)}return A}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var i=t(a[A]);e[i].references--}for(var c=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),A=t.n(a),i=t(659),c=t.n(i),s=t(56),d=t.n(s),l=t(540),p=t.n(l),u=t(113),f=t.n(u),g=t(568),C={};C.styleTagTransform=f(),C.setAttributes=d(),C.insert=c().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=p(),r()(g.A,C),g.A&&g.A.locals&&g.A.locals,document.querySelector("#maincontent");const m=document.getElementById("myModal"),b=document.getElementById("add"),x=document.getElementsByClassName("close")[0];b.onclick=function(){m.style.display="block"},x.onclick=function(){m.style.display="none"},window.onclick=function(n){n.target==m&&(m.style.display="none")}})();
//# sourceMappingURL=app.bdcf87b163d4de9650fb.bundle.js.map