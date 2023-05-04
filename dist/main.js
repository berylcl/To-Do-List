(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\r\n  background-color: #d3d3d3;\r\n  margin: 0 10%;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 10px;\r\n  margin-top: 100px;\r\n  background-color: white;\r\n  box-shadow: rgba(0, 0, 0, 0.28) 0 3px 8px;\r\n  padding: 30px 0;\r\n}\r\n\r\n.container > .row {\r\n  background-color: white;\r\n  border-bottom: 0.5px solid #d3d3d3;\r\n  width: 95%;\r\n  padding: 10px 0;\r\n}\r\n\r\n.container .row:nth-child(3) {\r\n  background-color: white;\r\n  border-bottom: none;\r\n  width: 95%;\r\n  padding: 0;\r\n}\r\n\r\n.container .row:last-child {\r\n  background-color: white;\r\n  border-bottom: none;\r\n  width: 95%;\r\n  padding: 0 0;\r\n}\r\n\r\n.row input {\r\n  outline: none;\r\n  margin: 0;\r\n  border: none;\r\n  width: 92%;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  border-bottom: 0.5px solid #d3d3d3;\r\n}\r\n\r\n.currenttask {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px 10px;\r\n  width: 100%;\r\n}\r\n\r\n.task-container input {\r\n  width: auto;\r\n  margin-right: 10px;\r\n}\r\n\r\n.taskfield {\r\n  width: 90% !important;\r\n}\r\n\r\n.row .clear-button {\r\n  width: 100%;\r\n  padding: 8px 12px;\r\n  font-size: 0.8rem;\r\n  border-radius: 0;\r\n  border: none;\r\n  color: #595959;\r\n  border-bottom: none;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=new class{constructor(e=[]){this.tasklist=e}addTask(e,t,n){const r=new class{constructor(e="",t=!1,n){this.description=e,this.completed=t,this.index=n}}(e,t,n);this.tasklist.push(r),document.querySelector(".tasks").innerHTML="",this.loadTasks()}readTasks(e=[]){if(console.log(e),null!==e){let t=1;e.tasklist.forEach((e=>{this.addTask(e.description,e.completed,t),t+=1}))}}loadTasks(){const e=document.querySelector(".tasks");this.tasklist.forEach((t=>{const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("input"),a=document.createElement("input"),i=document.createElement("i");n.setAttribute("class","task-container"),r.setAttribute("class","currenttask"),o.setAttribute("type","checkbox"),o.setAttribute("class","check-box"),a.setAttribute("type","input"),a.setAttribute("class","taskfield"),i.setAttribute("class","fa-solid fa-trash-can delete-icon"),i.setAttribute("id",`removetask${t.index}`),a.value=t.description,o.checked=t.completed,r.appendChild(o),r.appendChild(a),r.appendChild(i),n.appendChild(r),e.appendChild(n)}))}removeTask(e){this.tasklist.splice(e,1);let t=1;this.tasklist.forEach((e=>{e.index=t,t+=1})),document.querySelector(".tasks").innerHTML="",this.loadTasks()}updateDescription(e,t){this.tasklist[t].description=e.value}updateStatus(e,t){this.tasklist[e].completed=t}};document.addEventListener("DOMContentLoaded",(()=>{window.onload=function(){if(h.loadTasks(),localStorage){const e=localStorage.getItem("tasklist");h.readTasks(JSON.parse(e))}}(),window.addEventListener("beforeunload",(()=>{localStorage.setItem("tasklist",JSON.stringify(h))})),document.querySelector("#addtask").addEventListener("click",(()=>{if(""!==document.querySelector("#taskdescription").value){const e=h.tasklist.length;h.addTask(document.querySelector("#taskdescription").value,!1,e),document.querySelector("#taskdescription").value=""}})),document.addEventListener("keyup",(e=>{if("Enter"===e.key&&""!==document.querySelector("#taskdescription").value){const e=h.tasklist.length;h.addTask(document.querySelector("#taskdescription").value,!1,e),document.querySelector("#taskdescription").value=""}})),document.addEventListener("click",(e=>{document.querySelectorAll(".delete-icon").forEach(((t,n)=>{e.target===t&&h.removeTask(n)}))})),document.addEventListener("change",(e=>{e.target.matches(".taskfield")&&document.querySelectorAll(".taskfield").forEach(((t,n)=>{e.target===t&&h.updateDescription(t,n)})),e.target.matches(".check-box")&&document.querySelectorAll(".check-box").forEach(((t,n)=>{e.target===t&&h.updateStatus(n,t.checked)}))})),document.querySelector(".clear-button").addEventListener("click",(()=>{for(let e=0;e<h.tasklist.length;e+=1)h.tasklist[e].completed&&(h.removeTask(e),e-=1)}))}))})()})();