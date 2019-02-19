(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";var o=n(6),r=n(63),i=n(137),a=n(39);function s(e){var t=new i(e),n=r(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var c=s(a);c.Axios=i,c.create=function(e){return s(o.merge(a,e))},c.Cancel=n(67),c.CancelToken=n(151),c.isCancel=n(66),c.all=function(e){return Promise.all(e)},c.spread=n(152),e.exports=c,e.exports.default=c},136:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},137:function(e,t,n){"use strict";var o=n(39),r=n(6),i=n(146),a=n(147);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(o,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=s},138:function(e,t,n){"use strict";var o=n(6);e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},139:function(e,t,n){"use strict";var o=n(65);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},140:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e}},141:function(e,t,n){"use strict";var o=n(6);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},142:function(e,t,n){"use strict";var o=n(6),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(o.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=o.trim(e.substr(0,i)).toLowerCase(),n=o.trim(e.substr(i+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},143:function(e,t,n){"use strict";var o=n(6);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},144:function(e,t,n){"use strict";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),a="",s=0,c=o;i.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&t>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return a}},145:function(e,t,n){"use strict";var o=n(6);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),o.isString(r)&&s.push("path="+r),o.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},146:function(e,t,n){"use strict";var o=n(6);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},147:function(e,t,n){"use strict";var o=n(6),r=n(148),i=n(66),a=n(39),s=n(149),c=n(150);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return u(e),t.data=r(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},148:function(e,t,n){"use strict";var o=n(6);e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},149:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},150:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},151:function(e,t,n){"use strict";var o=n(67);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},152:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},184:function(e,t,n){var o;e.exports=(o=n(0),function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),c=o(s),u=n(1),f=o(u),l=n(5),p=o(l),d=n(3),h=o(d),m=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={isSdkLoaded:!1,isProcessing:!1},o.responseApi=function(e){window.FB.api("/me",{locale:o.props.language,fields:o.props.fields},function(t){i(t,e),o.props.callback(t)})},o.checkLoginState=function(e){o.setStateIfMounted({isProcessing:!1}),e.authResponse?o.responseApi(e.authResponse):o.props.onFailure?o.props.onFailure({status:e.status}):o.props.callback({status:e.status})},o.checkLoginAfterRefresh=function(e){"connected"===e.status?o.checkLoginState(e):window.FB.login(function(e){return o.checkLoginState(e)},!0)},o.click=function(e){if(o.state.isSdkLoaded&&!o.state.isProcessing&&!o.props.isDisabled){o.setState({isProcessing:!0});var t=o.props,n=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,f=t.authType,l=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var d={client_id:r,redirect_uri:c,state:l,return_scopes:a,scope:n,response_type:s,auth_type:f};if(o.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,p.default)(d);else{if(!window.FB)return void(o.props.onFailure&&o.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(o.checkLoginState,{scope:n,return_scopes:a,auth_type:d.auth_type})}}}},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:n,xfbml:o,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,h.default)(e,"code")||(0,h.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e,t,n,o,r,i,a=this.props.language;e=document,t="script",n="facebook-jssdk",o=e.getElementsByTagName(t)[0],r=o,i=o,e.getElementById(n)||((i=e.createElement(t)).id=n,i.src="https://connect.facebook.net/"+a+"/sdk.js",r.parentNode.insertBefore(i,r))}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(c.default.Component);m.propTypes={isDisabled:f.default.bool,callback:f.default.func.isRequired,appId:f.default.string.isRequired,xfbml:f.default.bool,cookie:f.default.bool,authType:f.default.string,scope:f.default.string,state:f.default.string,responseType:f.default.string,returnScopes:f.default.bool,redirectUri:f.default.string,autoLoad:f.default.bool,disableMobileRedirect:f.default.bool,isMobile:f.default.bool,fields:f.default.string,version:f.default.string,language:f.default.string,onClick:f.default.func,onFailure:f.default.func,render:f.default.func.isRequired},m.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(e){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}},function(e,t,n){"use strict";function o(){}var r=n(7);e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]))},277:function(e,t,n){__NEXT_REGISTER_PAGE("/preview",function(){return e.exports=n(292),{page:e.exports.default}})},292:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(20),a=n.n(i),s=n(31),c=n(32),u=n(46),f=n(8),l=n.n(f),p=n(1),d=n.n(p),h=n(40),m=n.n(h),y=n(184),w=n.n(y);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,o,r,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(o,r)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function a(e){v(i,o,r,a,s,"next",e)}function s(e){v(i,o,r,a,s,"throw",e)}a(void 0)})}}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return o=this,i=(e=k(t)).call.apply(e,[this].concat(s)),n=!i||"object"!==g(i)&&"function"!=typeof i?E(o):i,j(E(E(n)),"state",{file:void 0,isLoading:!0,isExceedPreviewQuta:!1}),j(E(E(n)),"myVideo",r.a.createRef()),j(E(E(n)),"fetchVideo",function(){var e=b(l.a.mark(function e(t){var o,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat("http://localhost:4000/graphql"),{operationName:null,variables:{},query:'{ file(id: "'.concat(t,'") { name uri mimetype price isPaid viewCount }}')},{headers:{Authorization:"Bearer ".concat(n.token)}});case 2:o=e.sent,(r=o.data.data).file&&n.setState({file:r.file});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),j(E(E(n)),"handleUpdateTime",function(){var e=n.myVideo.current,t=n.state.file;e&&t&&t.price>0&&!t.isPaid&&e.currentTime>=e.duration/10&&(e.pause(),n.setState({isExceedPreviewQuta:!0}))}),j(E(E(n)),"handleClickApp",function(){var e=+new Date;setTimeout(function(){+new Date-e<12e3&&(window.location.href="https://www.pgyer.com/SszB")},3e3)}),j(E(E(n)),"handleLogin",function(){var e=b(l.a.mark(function e(t){var n,o,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.accessToken,e.next=3,m.a.post("".concat("http://localhost:4000/graphql"),{operationName:null,variables:{},query:'mutation {  socialLogin(service: "facebook", accessToken: "'.concat(n,'") { token } }')});case 3:o=e.sent,(r=o.data.data).socialLogin&&(window.localStorage.setItem("authToken",r.socialLogin.token),(i=new Date).setDate(i.getDate()+30),window.localStorage.setItem("tokenExpiredAt",i.toISOString()),window.location.reload());case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),j(E(E(n)),"renderFile",function(){var e=n.state.file;if(!e)return null;var t=e.mimetype,o=e.name,i=e.uri,a=e.price,s=e.viewCount;return"video/mp4"===t?r.a.createElement("div",{className:"jsx-".concat(R.__hash)},r.a.createElement("video",{ref:n.myVideo,controls:!n.state.isExceedPreviewQuta,controlsList:"nodownload",onTimeUpdate:n.handleUpdateTime,className:"jsx-".concat(R.__hash)},r.a.createElement("source",{src:i,type:"video/mp4",className:"jsx-".concat(R.__hash)})),r.a.createElement("p",{className:"jsx-".concat(R.__hash)+" name"},o),r.a.createElement("div",{className:"jsx-".concat(R.__hash)+" file-meta"},r.a.createElement("p",{className:"jsx-".concat(R.__hash)+" view"},s," views"),r.a.createElement("p",{className:"jsx-".concat(R.__hash)+" price"},a>0?"Price ".concat(a," USD"):"Free")),r.a.createElement(d.a,{styleId:R.__hash,css:R})):["image/png","image/jpg","image/jpeg","image/gif"].includes(t)?r.a.createElement("div",{className:"jsx-".concat(R.__hash)},r.a.createElement("img",{src:i,className:"jsx-".concat(R.__hash)}),r.a.createElement(d.a,{styleId:R.__hash,css:R})):void 0}),n}var n,o,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:(a=b(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search).get("q"),(n=window.localStorage.getItem("tokenExpiredAt"))&&new Date(n).getTime()<Date.now()&&(window.localStorage.removeItem("authToken"),window.localStorage.removeItem("tokenExpiredAt")),this.token=window.localStorage.getItem("authToken"),!t){e.next=8;break}return e.next=7,this.fetchVideo(t);case 7:this.setState({isLoading:!1});case 8:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:"jsx-".concat(R.__hash)+" container"},this.renderFile(),this.state.isExceedPreviewQuta&&r.a.createElement("div",{className:"jsx-".concat(R.__hash)+" modal"},r.a.createElement("div",{className:"jsx-".concat(R.__hash)+" modal-content"},r.a.createElement("p",{className:"jsx-".concat(R.__hash)+" modal-text"},"To continue to watch this video, please pay first."),r.a.createElement("a",{href:"poseidon://preview".concat(window.location.search),onClick:this.handleClickApp,className:"jsx-".concat(R.__hash)+" app-link"},"Open the APP"),!this.token&&r.a.createElement("small",{className:"jsx-".concat(R.__hash)},"Already paid? ",r.a.createElement(w.a,{appId:"512530302558078",scope:"public_profile, email",callback:this.handleLogin,render:function(e){return r.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.onClick()},className:"jsx-".concat(R.__hash)},"login here")}})))),r.a.createElement(d.a,{styleId:R.__hash,css:R}))}}])&&x(n.prototype,o),i&&x(n,i),t}(),R=[".container.jsx-3406995878{background-color:#222633;padding:50px 0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:80vh;}","p.jsx-3406995878{font-size:18px;margin:0;}","video.jsx-3406995878,img.jsx-3406995878,iframe.jsx-3406995878{width:100%;max-width:920px;max-height:400px;}","small.jsx-3406995878{font-size:14px;}",".modal.jsx-3406995878{position:fixed;width:100%;height:100%;background-color:#00000063;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".modal-content.jsx-3406995878{color:#fff;background:#070707c2;padding:16px 24px;border-radius:10px;text-align:center;}",".modal-text.jsx-3406995878{color:#fff;margin:10px;font-size:18px;}",".app-link.jsx-3406995878{font-size:18px;display:block;}",".file-meta.jsx-3406995878{padding:0px;height:40px;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".name.jsx-3406995878{color:#fff;font-size:24px;padding-top:20px;}",".price.jsx-3406995878{color:#fff;font-size:18px;}","@media only screen and (min-width:600px){video.jsx-3406995878{min-width:700px;}}"];R.__hash="3406995878";t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(a.a,null,r.a.createElement("title",null,"Poseidon Network")),r.a.createElement(c.a,null),r.a.createElement(S,null),r.a.createElement(u.a,null))}},39:function(e,t,n){"use strict";(function(t){var o=n(6),r=n(138),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(64):void 0!==t&&(s=n(64)),s),transformRequest:[function(e,t){return r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){c.headers[e]={}}),o.forEach(["post","put","patch"],function(e){c.headers[e]=o.merge(i)}),e.exports=c}).call(this,n(134))},40:function(e,t,n){e.exports=n(135)},6:function(e,t,n){"use strict";var o=n(63),r=n(136),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,o){"object"==typeof t[o]&&"object"==typeof n?t[o]=e(t[o],n):t[o]=n}for(var o=0,r=arguments.length;o<r;o++)u(arguments[o],n);return t},extend:function(e,t,n){return u(t,function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},63:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},64:function(e,t,n){"use strict";var o=n(6),r=n(139),i=n(141),a=n(142),s=n(143),c=n(65),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(144);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;o.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";p.Authorization="Basic "+u(y+":"+w)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};r(t,f,o),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},o.isStandardBrowserEnv()){var g=n(145),v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&o.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},65:function(e,t,n){"use strict";var o=n(140);e.exports=function(e,t,n,r,i){var a=new Error(e);return o(a,t,n,r,i)}},66:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},67:function(e,t,n){"use strict";function o(e){this.message=e}o.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},o.prototype.__CANCEL__=!0,e.exports=o}},[[277,1,0]]]);