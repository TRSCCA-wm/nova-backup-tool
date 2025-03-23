/*! For license information please see tool.js.LICENSE.txt */
(()=>{var e={208:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(314),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".is-deleting td[data-v-dbe7acb8]{color:var(--60)}",""]);const a=o},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},72:(e,t,r)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var d=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:y(p,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,g=0;function y(e,t){var r,n,o;if(t.singleton){var a=g++;r=h||(h=s(t)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=s(t),n=f.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=l(e,t),s=0;s<r.length;s++){var u=c(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=a}}}},262:(e,t)=>{"use strict";t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},427:(e,t,r)=>{"use strict";r.d(t,{A:()=>ee});const n=Vue;var o={class:"flex mb-6 items-center justify-between"},a={class:"flex items-center justify-end space-x-2"},i={class:"overflow-hidden overflow-x-auto relative rounded-lg"};const c=function(){return Nova.request().get("/nova-vendor/spatie/backup-tool/backup-statuses").then((function(e){return e.data}))},l=function(e){return Nova.request().get("/nova-vendor/spatie/backup-tool/backups?disk=".concat(e)).then((function(e){return e.data}))},s=function(){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups")},u=function(e){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups",{option:e})},d=function(e){var t=e.disk,r=e.path;return Nova.request().delete("/nova-vendor/spatie/backup-tool/backups",{params:{disk:t,path:r}})};var p={key:0,class:"p-3 flex items-center"},f={class:"overflow-hidden overflow-x-auto relative rounded-lg"},h={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},g={class:"bg-gray-50 dark:bg-gray-800"},y={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},v={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},m={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},k={key:0},b={class:"text-center px-2 py-2",colspan:"4"},w=["textContent"];const x=LaravelNovaUi;var _={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},N={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},V={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},E={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 flex items-center justify-end"},D=["href","title"],C=["title","disabled"];const S={__name:"Backup",props:{date:{required:!0},path:{required:!0},size:{required:!0},disk:{required:!0},deletable:{required:!0},deleting:{required:!0}},setup:function(e){var t=e,r=(0,n.computed)((function(){return"".concat("/nova-vendor/spatie/backup-tool/download-backup","?disk=").concat(t.disk,"&path=").concat(t.path)}));return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{class:(0,n.normalizeClass)({"is-deleting":e.deleting})},[(0,n.createElementVNode)("td",_,(0,n.toDisplayString)(e.path),1),(0,n.createElementVNode)("td",N,(0,n.toDisplayString)(e.date),1),(0,n.createElementVNode)("td",V,(0,n.toDisplayString)(e.size),1),(0,n.createElementVNode)("td",E,[(0,n.createElementVNode)("a",{href:r.value,target:"_blank",rel:"noopener nofollow",title:t.__("Download"),class:"appearance-none cursor-pointer text-70 hover:text-primary mr-3"},[(0,n.createVNode)((0,n.unref)(x.Icon),{name:"download"})],8,D),(0,n.createElementVNode)("button",{title:t.__("Delete"),class:(0,n.normalizeClass)(["appearance-none mr-3",e.deletable?"text-70 hover:text-primary":"cursor-default text-40"]),disabled:!e.deletable,onClick:o[0]||(o[0]=(0,n.withModifiers)((function(e){return t.$emit("delete")}),["prevent"]))},[(0,n.createVNode)((0,n.unref)(x.Icon),{name:"trash"})],10,C)])],2)}}};var B=r(72),L=r.n(B),M=r(208),O={insert:"head",singleton:!1};L()(M.A,O);M.A.locals;var j=r(262);const A={emits:["setModalVisibility","delete"],props:{disks:{required:!0,type:Array},activeDisk:{required:!0,type:String},backups:{required:!0,type:Array}},data:function(){return{deletingBackup:null,deleteModalOpen:!1,currentDisk:this.activeDisk}},components:{Backup:(0,j.A)(S,[["__scopeId","data-v-dbe7acb8"]])},methods:{getDiscs:function(){return this.disks.map((function(e){return{value:e,label:e}}))},openDeleteModal:function(e){this.$emit("setModalVisibility",!0),this.deleteModalOpen=!0,this.deletingBackup=e},closeDeleteModal:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.deletingBackup=null},confirmDelete:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.$emit("delete",{disk:this.activeDisk,path:this.deletingBackup.path})}}};var T={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},P={class:"bg-gray-50 dark:bg-gray-800 rounded-t-lg"},q={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},I={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},F={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},z={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},G={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},H={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},$={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},U={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},R={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},Y={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},J={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},K={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"};function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(){W=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),c=new B(n||[]);return o(i,"_invoke",{value:E(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",g="completed",y={};function v(){}function m(){}function k(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==r&&n.call(x,i)&&(b=x);var _=k.prototype=v.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function V(e,t){function r(o,a,i,c){var l=d(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==Q(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function E(t,r,n){var o=p;return function(a,i){if(o===h)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=D(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?g:f,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function D(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,D(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(Q(t)+" is not iterable")}return m.prototype=k,o(_,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:m,configurable:!0}),m.displayName=s(k,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,s(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},N(V.prototype),s(V.prototype,c,(function(){return this})),t.AsyncIterator=V,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new V(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(_),s(_,l,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function X(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const Z={inheritAttrs:!1,components:{Backups:(0,j.A)(A,[["render",function(e,t,r,o,a,i){var c=(0,n.resolveComponent)("SelectControl"),l=(0,n.resolveComponent)("backup"),s=(0,n.resolveComponent)("ModalHeader"),u=(0,n.resolveComponent)("ModalContent"),d=(0,n.resolveComponent)("DeleteResourceModal");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[r.disks.length>1?((0,n.openBlock)(),(0,n.createElementBlock)("div",p,[(0,n.createVNode)(c,{class:"w-full md:w-1/5",size:"lg",options:i.getDiscs(),modelValue:a.currentDisk,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.currentDisk=e}),onSelected:t[1]||(t[1]=function(t){return e.$emit("update:activeDisk",t.target.value)})},null,8,["options","modelValue"])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("table",h,[(0,n.createElementVNode)("thead",g,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",y,(0,n.toDisplayString)(e.__("Path")),1),(0,n.createElementVNode)("th",v,(0,n.toDisplayString)(e.__("Created at")),1),(0,n.createElementVNode)("th",m,(0,n.toDisplayString)(e.__("Size")),1),t[2]||(t[2]=(0,n.createElementVNode)("th",null,null,-1))])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.backups,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(l,(0,n.mergeProps)({ref_for:!0},e,{disk:r.activeDisk,deletable:r.backups.length>1,deleting:!a.deleteModalOpen&&a.deletingBackup&&e.path===a.deletingBackup.path,key:e.id,onDelete:function(t){return i.openDeleteModal(e)}}),null,16,["disk","deletable","deleting","onDelete"])})),128)),0===r.backups.length?((0,n.openBlock)(),(0,n.createElementBlock)("tr",k,[(0,n.createElementVNode)("td",b,(0,n.toDisplayString)(e.__("No backups present")),1)])):(0,n.createCommentVNode)("",!0)])])]),(0,n.createVNode)(d,{mode:"delete",show:a.deleteModalOpen,onClose:i.closeDeleteModal,onConfirm:i.confirmDelete},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(s,{textContent:(0,n.toDisplayString)(e.__("Delete backup"))},null,8,["textContent"]),(0,n.createVNode)(u,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",{class:"leading-normal",textContent:(0,n.toDisplayString)(e.__("Are you sure you want to delete the backup created at :date ?",{date:a.deletingBackup.date}))},null,8,w)]})),_:1})]})),_:1},8,["show","onClose","onConfirm"])])}]]),BackupStatuses:{__name:"BackupStatuses",props:{backupStatuses:{required:!0,type:Array}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("table",T,[(0,n.createElementVNode)("thead",P,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",q,(0,n.toDisplayString)(t.__("Name")),1),(0,n.createElementVNode)("th",I,(0,n.toDisplayString)(t.__("Disk")),1),(0,n.createElementVNode)("th",F,(0,n.toDisplayString)(t.__("Healthy")),1),(0,n.createElementVNode)("th",z,(0,n.toDisplayString)(t.__("Amount of backups")),1),(0,n.createElementVNode)("th",G,(0,n.toDisplayString)(t.__("Newest backup")),1),(0,n.createElementVNode)("th",H,(0,n.toDisplayString)(t.__("Used Storage")),1)])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.backupStatuses,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:e.disk},[(0,n.createElementVNode)("td",$,(0,n.toDisplayString)(t.__(e.name)),1),(0,n.createElementVNode)("td",U,(0,n.toDisplayString)(t.__(e.disk)),1),(0,n.createElementVNode)("td",R,[(0,n.createVNode)((0,n.unref)(x.Icon),{class:(0,n.normalizeClass)(e.healthy?"text-green-500":"text-red-500"),name:e.healthy?"check-circle":"x-circle"},null,8,["class","name"])]),(0,n.createElementVNode)("td",Y,(0,n.toDisplayString)(e.amount),1),(0,n.createElementVNode)("td",J,(0,n.toDisplayString)(e.newest),1),(0,n.createElementVNode)("td",K,(0,n.toDisplayString)(e.usedStorage),1)])})),128))])])}}},Button:x.Button,Icon:x.Icon},computed:{disks:function(){return this.backupStatuses.map((function(e){return e.disk}))}},data:function(){return{activeDisk:null,activeDiskBackups:[],backupStatuses:[],initialLoading:!0,modalVisibility:!1,loading:!0,poller:null}},created:function(){var e,t=this;return(e=W().mark((function e(){return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.initialLoading=!1,e.next=3,t.updateBackupStatuses();case 3:return e.next=5,t.updateActiveDiskBackups();case 5:t.loading=!1,t.startPolling();case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){X(a,n,o,i,c,"next",e)}function c(e){X(a,n,o,i,c,"throw",e)}i(void 0)}))})()},beforeUnmount:function(){this.poller&&window.clearInterval(this.poller)},methods:{updateBackupStatuses:function(){var e=this;return c().then((function(t){e.backupStatuses=t,e.activeDisk||(e.activeDisk=t[0].disk)}))},updateActiveDiskBackups:function(){var e=this;if(this.activeDisk)return l(this.activeDisk).then((function(t){e.activeDiskBackups=t}))},createBackup:function(){return Nova.success(this.__("Creating a new backup in the background...")),s()},createPartialBackup:function(e){return Nova.success(this.__("Creating a new backup in the background...")+" ("+e+")"),this.$refs.backupDropdownMenu.delayedHideMenu(),u(e)},deleteBackup:function(e){var t=e.disk,r=e.path;return d({disk:t,path:r})},startPolling:function(){var e=this;Nova.config("nova_backup_tool").polling&&(this.poller=window.setInterval((function(){e.modalVisibility||(e.updateBackupStatuses(),e.updateActiveDiskBackups())}),1e3*Nova.config("nova_backup_tool").polling_interval))},setModalVisibility:function(e){this.modalVisibility=e}}},ee=(0,j.A)(Z,[["render",function(e,t,r,c,l,s){var u=(0,n.resolveComponent)("Head"),d=(0,n.resolveComponent)("Heading"),p=(0,n.resolveComponent)("Button"),f=(0,n.resolveComponent)("DropdownTrigger"),h=(0,n.resolveComponent)("DropdownMenuItem"),g=(0,n.resolveComponent)("DropdownMenu"),y=(0,n.resolveComponent)("Dropdown"),v=(0,n.resolveComponent)("backup-statuses"),m=(0,n.resolveComponent)("LoadingCard"),k=(0,n.resolveComponent)("backups"),b=(0,n.resolveComponent)("LoadingView");return(0,n.openBlock)(),(0,n.createBlock)(b,{loading:e.initialLoading},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(u,{title:e.__("Backups")},null,8,["title"]),(0,n.createElementVNode)("div",o,[(0,n.createVNode)(d,null,{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Backups")),1)]})),_:1}),(0,n.createElementVNode)("div",a,[(0,n.createVNode)(y,{dusk:"select-all-dropdown",ref:"backupDropdownMenu"},{menu:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{slot:"menu",direction:"rtl",width:"250"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(h,{as:"button",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return s.createPartialBackup("only-db")}),["prevent"]))},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Create database backup")),1)]})),_:1}),(0,n.createVNode)(h,{as:"button",onClick:t[1]||(t[1]=(0,n.withModifiers)((function(e){return s.createPartialBackup("only-files")}),["prevent"]))},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Create files backup")),1)]})),_:1})]})),_:1})]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(f,{"show-arrow":!1,class:"rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{variant:"ghost",icon:"ellipsis-horizontal"})]})),_:1})]})),_:1},512),(0,n.createVNode)(p,{variant:"solid",onClick:s.createBackup},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Create Backup")),1)]})),_:1},8,["onClick"])])]),(0,n.createVNode)(m,{loading:e.loading,class:"mb-6"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",i,[(0,n.createVNode)(v,{"backup-statuses":e.backupStatuses},null,8,["backup-statuses"])])]})),_:1},8,["loading"]),(0,n.createVNode)(m,{loading:e.loading},{default:(0,n.withCtx)((function(){return[e.activeDisk?((0,n.openBlock)(),(0,n.createBlock)(k,{key:0,disks:s.disks,backups:e.activeDiskBackups,"active-disk":e.activeDisk,onDelete:s.deleteBackup,onSetModalVisibility:s.setModalVisibility},null,8,["disks","backups","active-disk","onDelete","onSetModalVisibility"])):(0,n.createCommentVNode)("",!0)]})),_:1},8,["loading"])]})),_:1},8,["loading"])}]])}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,Nova.inertia("BackupTool",r(427).A)})();