!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function s(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",i="",r=Array.isArray(t),o=0;o<e.length;o++)(n=s(e[o]))&&(r&&t[o]&&(n=l(n)),a=a+i+n,i=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var s in e)s&&e[s]&&a.call(e,s)&&(t=t+n+s,n=" ");return t}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function r(e,t,n,a){return!1!==t&&null!=t&&(t||"class"!==e&&"style"!==e)?!0===t?" "+(a?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],s=1;s<t.length;s++)a=e(a,t[s]);return a}for(var r in n)if("class"===r){var o=t[r]||[];t[r]=(Array.isArray(o)?o:[o]).concat(n[r]||[])}else if("style"===r){var o=i(t[r]);o=o&&";"!==o[o.length-1]?o+";":o;var l=i(n[r]);l=l&&";"!==l[l.length-1]?l+";":l,t[r]=o+l}else t[r]=n[r];return t},t.classes=s,t.style=i,t.attr=r,t.attrs=function(e,t){var n="";for(var o in e)if(a.call(e,o)){var l=e[o];if("class"===o){l=s(l),n=r(o,l,!1,t)+n;continue}"style"===o&&(l=i(l)),n+=r(o,l,!1,t)}return n};var o=/["&<>]/;function l(e){var t=""+e,n=o.exec(t);if(!n)return e;var a,s,i,r="";for(a=n.index,s=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}s!==a&&(r+=t.substring(s,a)),s=a+1,r+=i}return s!==a?r+t.substring(s,a):r}t.escape=l,t.rethrow=function e(t,a,s,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||i))throw t.message+=" on line "+s,t;try{i=i||n(10).readFileSync(a,"utf8")}catch(n){e(t,null,s)}var r=3,o=i.split("\n"),l=Math.max(s-r,0),u=Math.min(o.length,s+r);var r=o.slice(l,u).map(function(e,t){var n=t+l+1;return(n==s?"  > ":"    ")+n+"| "+e}).join("\n");t.path=a;t.message=(a||"Pug")+":"+s+"\n"+r+"\n\n"+t.message;throw t}},,function(e,t,n){n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+='<header class="menu-header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+='</nav></header><section data-section-name="menu"><div class="menu-wrapper" id="main"><div class="menu-wrapper__menu" id="menu"><a class="menu__link" href="sign_in" data-href="sign_in">Играть вдвоем</a><a class="menu__link" href="sign_up" data-href="sign_up">Играть одному</a><a class="menu__link" href="leaders" data-href="leaders">Таблица лидеров</a><a class="menu__link" href="about" data-href="about">О нас</a></div></div></section>'}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t,n){n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+="<h1>Logic game</h1><nav>",null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+="</nav>"}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t,n){n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+='<header class="menu-header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+='</nav></header><section data-section-name="about"><div class="about"><div class="about__wrapper"><div class="team"><div class="team__name"><a class="team__a" href="https://github.com/dlipko">Дмитрий Липко</a></div><div class="team__role">Лучший ментор</div><div class="team__name"><a class="team__a" href="https://github.com/SmartPhoneJava">Артём Доктор</a></div><div class="team__role">Fullstack</div><div class="team__name"><a class="team__a" href="https://github.com/slevinsps">Иван Спасенов</a></div><div class="team__role">Fullstack</div><div class="team__name"><a class="team__a" href="https://github.com/Bigyin1">Сергей Апарин</a></div><div class="team__role">Fullstack</div></div><a class="back" data-href="menu" href="menu">Назад в меню</a></div></div></section>'}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t,n){var a=n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+='<header class="menu-header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t=t+'</nav></header><section data-section-name="profile"><div class="profile"> <div class="profile__wrapper"><div class="profile__main">       <div class="profile__info"><form class="profile__form" novalidate="novalidate"><div class="profile__avatar"><div class="profile__name">Avatar</div><span class="inner" id="output"></span><label class="custom-file-upload button" for="file">Load avatar</label><input id="file" type="file"></div><div class="profile__data"><div class="profile__row"><div class="profile__name">Login</div><input class="input signup__input text-h2" type="login" name="login"'+a.attr("value",e.name,!0,!0)+'><div class="warning signup__warning hidden js-warning-login"></div></div><div class="profile__row"><div class="profile__name">Email</div><input class="input signup__input text-h2" type="email" name="email"'+a.attr("value",e.email,!0,!0)+'><div class="warning signup__warning hidden js-warning-email"></div></div><div class="profile__row"><div class="profile__name">Password</div><input class="input signup__input text-h2" type="password" name="password" placeholder="******" autocomplete="new-password"><div class="warning signup__warning hidden js-warning-password"></div></div><div class="profile__row"><div class="profile__name">Repeat password</div><input class="input signup__input text-h2" type="password" name="password-repeat" placeholder="******" autocomplete="new-password"><div class="warning signup__warning hidden js-warning-repassword"></div></div><div class="profile__row"><input class="change__submit button" id="submit_changes" type="submit" name="submit" value="Изменить данные"></div></div></form><div class="profile__footer"><br><hr><br><div class="profile__row"><div class="hrefBackToMenu"> <a class="back" data-href="menu" href="menu">Назад в меню</a></div></div></div></div></div></div></div></section>'}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<section data-section-name="leaderboard"><h1 class="leaderboard__header">Таблица лидеров</h1><br><div class="leaderboard"><div class="leaderboard__wrapper"></div><div class="leaderboard__controls"><img class="arrow arrow__inactive" src="../../img/arrow-left.png"><img class="arrow" src="../../img/arrow-right.png"></div><a class="back" data-href="menu" href="menu">Назад в меню</a></div></section>'}},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",s=e||{};return function(e){n+="<table><thead><tr><th>User</th><th>Best Score</th><th>Best Time</th></tr></thead><tbody></tbody>";for(var s=0;s<e.length;s++)n=n+"<tr><td>"+a.escape(null==(t=e[s].name)?"":t)+"</td><td>"+a.escape(null==(t=e[s].bestScore.String||0)?"":t)+"</td><td>"+a.escape(null==(t=e[s].bestTime.String||0)?"":t)+"</td></tr>";n+="</table>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),n}},function(e,t,n){n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+='<header class="menu-header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+='</nav></header><section class="signup"><form class="signup__form" novalidate="novalidate"><input class="input signup__input text-h2" type="email" name="email" autofocus="true" placeholder="Email"><div class="warning signup__warning hidden js-warning-email"></div><input class="input signup__input text-h2" type="password" name="password" autocomplete="autocomplete" placeholder="Password"><div class="warning signup__warning hidden js-warning-password"></div><input class="button signup__submit text-h2" type="submit" name="submit" value="Sign in"><div class="signup__footer"><a class="button header-bar__button text-base" data-href="menu" href="menu">Back to Menu</a><div class="text-base">or</div><a class="button header-bar__button text-base" data-href="sign_up" href="sign_up">Sign Up</a></div></form></section>'}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t,n){n(0);e.exports=function(e){var t="",n=e||{};return function(e){t+='<header class="menu-header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+='</nav></header><section class="signup"><form class="signup__form" novalidate="novalidate"><input class="input signup__input text-h2" type="email" name="email" autocomplete="autocomplete" autofocus="true" placeholder="Email"><div class="warning signup__warning hidden js-warning-email"></div><input class="input signup__input text-h2" type="login" name="login" autocomplete="autocomplete" autofocus="true" placeholder="Login"><div class="warning signup__warning hidden js-warning-login"></div><input class="input signup__input text-h2" type="password" name="password"  autocomplete="new-password" placeholder="Password"><div class="warning signup__warning hidden js-warning-password"></div><input class="input signup__input text-h2" type="password" name="password-repeat"  autocomplete="new-password" placeholder="Repeat Password"><div class="warning signup__warning hidden js-warning-repassword"></div><input class="button signup__submit text-h2" type="submit" name="submit" value="Sign up"><div class="signup__footer"><a class="button header-bar__button text-base" data-href="menu" href="menu">Back to Menu</a><div class="text-base">or</div><a class="button header-bar__button text-base" data-href="sign_in" href="sign_in">Sign In</a></div></form></section>'}.call(this,"data"in n?n.data:"undefined"!=typeof data?data:void 0),t}},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(3),r=n.n(i);var o=new class{constructor(){this.listeners={}}on(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)}off(e,t){this.listeners[e]=this.listeners[e].filter(function(e){return e!==t})}emit(e,t){this.listeners[e].forEach(function(e){e(t)})}};class l{constructor(e,t){this.parent=e,this.parent.hidden=!0,this.template=t,o.on("userUpdate",this.onUserUpdate.bind(this))}get active(){return!this.parent.hidden}hide(){this.parent.hidden=!0}get rendered(){return!(""===this.parent.innerHTML)}show(){this.rendered||this.render(),this.parent.hidden=!1}set data(e=[]){this._data=e}render(){this.parent.innerHTML="",this.parent.innerHTML=this.template({data:this._data})}onUserUpdate(){const e=this.parent.querySelector(".menu-header");e&&(e.innerHTML=r()({data:this._data}))}}const u="https://escapade-backend.herokuapp.com";class d{static post({host:e=u,url:t="/",body:n={}}={}){return fetch(e+t,{method:"POST",body:JSON.stringify(n),mode:"cors",credentials:"include",headers:{"Content-Type":"application/json; charset=utf-8"}})}static put({host:e=u,url:t="/",body:n={}}={}){return fetch(e+t,{method:"PUT",body:JSON.stringify(n),mode:"cors",credentials:"include",headers:{"Content-Type":"application/json; charset=utf-8"}})}static postPhoto({host:e=u,url:t="/",body:n={}}={}){return fetch(e+t,{method:"POST",body:n,mode:"cors",credentials:"include"})}static get({host:e=u,url:t="/"}={}){return fetch(e+t,{method:"GET",mode:"cors",credentials:"include"})}static delete({host:e=u,url:t="/"}={}){return fetch(e+t,{method:"DELETE",mode:"cors",credentials:"include"})}}const h=new class{constructor(){this.name=null,this.email=null,this.played=null,this.avatar=null}setUser({email:e,played:t,avatar:n,name:a}={}){this.email=e||null,this.played=t||0,this.avatar=n||"./img/qrosh.png",this.name=a||null}removeUser(){this.email=null,this.played=null,this.avatar=null,this.name=null}};var c=n(4),p=n.n(c);var g=n(5),_=n.n(g);const m=["iframe","script"],f=["src","alt"],v=/<(\w+)\s?(.*?)>.*?(<\/(.*?)>)?/,w=/(\w+\s*)=(\s*".*?")/g,b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,y=/^[A-Za-z]\w{3,14}$/i;function S(e){let t="";return!0!==b.test(String(e).toLowerCase())&&(t="Invalid email format",0===e.length&&(t="Fill email field please")),t}function P(e){let t="";return!0!==y.test(e)&&(t="Password must be at least 3 letters",0===e.length&&(t="Fill password field please")),t}function L(e){let t="";return e.length<3&&(t="Login must be at least 3 letters"),t}function j(e=""){return e.replace(v,(e,t)=>m.includes(t)?"":e).replace(w,(e,t)=>f.includes(t)?e:"")}console.log("logout on");var x=n(6),A=n.n(x),T=n(7),U=n.n(T);class W{constructor(e){this.parent=e,this.template=U.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data})}}class q extends l{constructor(e){super(e,A.a),this._currPage=1,o.on("respPagesAmount",this._initBoard.bind(this)),o.on("respPage",e=>{this.board.data=e,this.board.render(),console.log("rerender board")})}render(){super.render(),o.emit("reqPagesAmount"),o.emit("reqPage",1)}_initBoard(e){this._pagesCount=e,this._initButtons(),this.board=new W(this.parent.querySelector(".leaderboard__wrapper")),console.log("initBoard")}_initButtons(){[this._leftArrow,this._rightArrow]=this.parent.querySelectorAll(".arrow"),this._leftArrow.addEventListener("click",this._prevPage.bind(this)),this._rightArrow.addEventListener("click",this._nextPage.bind(this)),1===this._pagesCount&&this._rightArrow.classList.add("arrow__inactive")}_nextPage(){this._currPage!==this._pagesCount&&(o.emit("reqPage",this._currPage+1),1===this._currPage&&this._leftArrow.classList.remove("arrow__inactive"),this._currPage+=1,this._currPage===this._pagesCount&&this._rightArrow.classList.add("arrow__inactive"))}_prevPage(){1!=this._currPage&&(o.emit("reqPage",this._currPage-1),this._currPage===this._pagesCount&&this._rightArrow.classList.remove("arrow__inactive"),this._currPage-=1,1===this._currPage&&this._leftArrow.classList.add("arrow__inactive"))}}class k{constructor(){o.on("reqPagesAmount",this._getPagesAmount.bind(this)),o.on("reqPage",this._getPage.bind(this))}_getPagesAmount(){d.get({url:"/users/pages_amount"}).then(e=>e.json()).then(e=>{const t=e.amount;console.log("Pages amount",t),o.emit("respPagesAmount",t)}).catch(e=>{console.log("getPagesAmount error: ",e)})}_getPage(e){d.get({url:`/users/pages/${e}`}).then(e=>e.json()).then(e=>{o.emit("respPage",e)}).catch(e=>{console.log("getPage error: ",e)})}}var M=new class{constructor(){this.view=q,this.model=new k}},O=n(8),E=n.n(O);class B extends l{constructor(e){super(e,E.a),o.on("onSuccessLogin",e=>{h.setUser({...e}),o.emit("userUpdate"),V.open("/profile")}),o.on("onFailedLogin",e=>{this._showWarning(this._warnings.email,e.message)})}render(){this.data=h,super.render(),this._warnings={},this._warnings.email=this.parent.querySelector(".js-warning-email"),this._warnings.pass=this.parent.querySelector(".js-warning-password"),this._form=this.parent.querySelector(".signup__form"),this._submitButton=this.parent.querySelector(".signup__submit"),this._submitButton.addEventListener("click",this._onSubmit.bind(this))}_onSubmit(e){e.preventDefault();const t={};t.email=this._form.elements.email.value,t.password=this._form.elements.password.value,this._validateInput(t)&&o.emit("login",t)}_validateInput({email:e,password:t}){let n=!0,a="";return this._hideWarning(this._warnings.email),0!==(a=S(e=j(e))).length&&(this._showWarning(this._warnings.email,a),n=!1),this._hideWarning(this._warnings.pass),0!==(a=P(t=j(t))).length&&(this._showWarning(this._warnings.pass,a),n=!1),n}_showWarning(e,t){e.classList.remove("hidden"),e.innerHTML="",e.innerHTML+=t}_hideWarning(e){e.classList.add("hidden"),e.innerHTML=""}}class I{constructor(){o.on("login",this._login.bind(this))}_login(e){d.post({url:"/session",body:e}).then(e=>{200===e.status?e.json().then(e=>{o.emit("onSuccessLogin",e)}):e.json().then(e=>{o.emit("onFailedLogin",e)})}).catch(e=>{console.log("SignIn failed : ",e)})}}var H=new class{constructor(){this.view=B,this.model=new I}},F=n(9),C=n.n(F);class D extends l{constructor(e){super(e,C.a),o.on("onSuccessAuth",e=>{h.setUser({...e}),o.emit("userUpdate"),V.open("/profile")}),o.on("onFailedAuth",e=>{this._showWarning(this._warnings.email,e.message)})}render(){this.data=h,super.render(),this._warnings={},this._warnings.email=this.parent.querySelector(".js-warning-email"),this._warnings.login=this.parent.querySelector(".js-warning-login"),this._warnings.pass=this.parent.querySelector(".js-warning-password"),this._warnings.repass=this.parent.querySelector(".js-warning-repassword"),this._form=this.parent.querySelector(".signup__form"),this._submitButton=this.parent.querySelector(".signup__submit"),this._submitButton.addEventListener("click",this._onSubmit.bind(this))}_onSubmit(e){console.log("event"),e.preventDefault();const t={};t.email=this._form.elements.email.value,t.name=this._form.elements.login.value,t.password=this._form.elements.password.value,t.repass=this._form.elements["password-repeat"].value,this._validateInput(t)&&(console.log(t),o.emit("auth",t))}_validateInput({email:e,name:t,password:n,repass:a}){let s=!0,i="";return this._hideWarning(this._warnings.email),0!==(i=S(e=j(e))).length&&(this._showWarning(this._warnings.email,i),s=!1),this._hideWarning(this._warnings.login),0!==(i=L(t=j(t))).length&&(this._showWarning(this._warnings.login,i),s=!1),0!==(i=P(n=j(n))).length&&(this._showWarning(this._warnings.pass,i),s=!1),a=j(a),this._hideWarning(this._warnings.repass),a!==n&&(i="Passwords dont match",this._showWarning(this._warnings.repass,i),s=!1),s}_showWarning(e,t){e.classList.remove("hidden"),e.innerHTML="",e.innerHTML+=t}_hideWarning(e){e.classList.add("hidden"),e.innerHTML=""}}class J{constructor(){o.on("auth",this._auth.bind(this))}_auth(e){console.log(e),d.post({url:"/user",body:e}).then(t=>{if(201!==t.status)return t.json();o.emit("onSuccessAuth",e)}).then(e=>{o.emit("onFailedAuth",e)}).catch(e=>{console.log("SignUp failed : ",e)})}}var N=new class{constructor(){this.view=D,this.model=new J}};const R=new class{constructor(e){this.routes={},this.root=e}register(e,t){return this.routes[e]={View:t,view:null,el:null},this}open(e){const t=this.routes[e];if(!t)return void this.open("/");window.location.pathname!==e&&window.history.pushState(null,"",e);let{View:n,view:a,el:s}=t;s||(s=document.createElement("section"),this.root.appendChild(s)),a||(a=new n(s)),a.active||(Object.values(this.routes).forEach(function({view:e}){e&&e.active&&e.hide()}),a.show()),this.routes[e]={View:n,view:a,el:s}}start(){this.root.addEventListener("click",function(e){if(!(e.target instanceof HTMLAnchorElement)||e.target.classList.contains("team__a"))return;e.preventDefault();const t=e.target;console.log({pathname:t.pathname}),"/sign_out"!==t.pathname?this.open(t.pathname):o.emit("logout",null)}.bind(this)),window.addEventListener("popstate",function(){const e=window.location.pathname;this.open(e)}.bind(this));const e=window.location.pathname;this.open(e)}}(document.getElementById("application"));var z;R.register("/",class extends l{constructor(e){super(e,s.a)}render(){this.data=h,super.render()}}).register("/sign_in",H.view).register("/sign_up",N.view).register("/leaders",M.view).register("/about",class extends l{constructor(e){super(e,p.a)}render(){this.data=h,super.render()}}).register("/profile",class extends l{constructor(e){super(e,_.a)}render(){this.data=h,super.render(),this._getAvatar(),this._form=this.parent.querySelector(".profile__form"),this._warnings={},this._warnings.email=this.parent.querySelector(".js-warning-email"),this._warnings.login=this.parent.querySelector(".js-warning-login"),this._warnings.pass=this.parent.querySelector(".js-warning-password"),this._warnings.repass=this.parent.querySelector(".js-warning-repassword"),this._changeButton=this.parent.querySelector(".change__submit"),this._changeButton.addEventListener("click",this._onSubmitDataProfile.bind(this)),document.getElementById("file").addEventListener("change",this._handleFileSelect.bind(this),!1)}_onSubmitDataProfile(e){e.preventDefault(),console.log("event _onSubmitDataProfile");const t={};t.email=this._form.elements.email.value,t.name=this._form.elements.login.value,t.password=this._form.elements.password.value,t.repass=this._form.elements["password-repeat"].value,console.log(this._data),this._validateInput(t)&&(console.log(" hello56 "+t.email," ",t.name," ",t.password," ",t.repass),this._changeProfile(t))}_validateInput(e){let t="",n=!0;return this._hideWarning(this._warnings.email),this._hideWarning(this._warnings.login),this._hideWarning(this._warnings.pass),this._hideWarning(this._warnings.repass),e.email=j(e.email),e.email!=this._data.email&&0!==(t=S(e.email)).length&&(this._showWarning(this._warnings.email,t),n=!1),e.name=j(e.name),e.name!=this._data.name&&0!==(t=L(e.name)).length&&(this._showWarning(this._warnings.login,t),n=!1),e.password=j(e.password),e.repass=j(e.repass),""!=e.password&&(0!==(t=P(e.password)).length&&(this._showWarning(this._warnings.pass,t),n=!1),e.repass!==e.password&&(t="Passwords dont match",this._showWarning(this._warnings.repass,t),n=!1)),n}_showWarning(e,t){e.classList.remove("hidden"),e.innerHTML="",e.innerHTML+=t}_hideWarning(e){e.classList.add("hidden"),e.innerHTML=""}_uploadAvatar(e){const t=new FormData;t.append("file",e),console.log("upload photo"),d.postPhoto({url:"/avatar",body:t}).then(e=>{201===e.status?e.json().then(e=>{console.log("Okey photo")}):e.json().then(e=>{this._showWarning(this._warnings.email,e.error)})})}_handleFileSelect(e,t=250,n=250){const a=e.target.files[0];if(!a.type.match("image.*"))return void alert("Image only please....");this._uploadAvatar(a);const s=new FileReader;s.onload=(e=>(function(a){document.getElementById("output").innerHTML=['<img class="thumb" title="',escape(e.name),'" src="',a.target.result,'" width="'+n+'" height="'+t+'"  />'].join("")}))(a),s.readAsDataURL(a)}_getAvatar(e=250,t=250){d.get({url:"/avatar"}).then(n=>{if(console.log(n.status),200===n.status)return n.blob();document.getElementById("output").innerHTML=['<img class="thumb" ','" src="./img/qrosh.png" width="'+e+'" height="'+t+'"  />'].join("")}).then(e=>{if(console.log(e),void 0===e)return;const t=URL.createObjectURL(e);console.log("_getAvatar112"+t),document.getElementById("output").innerHTML=['<img class="thumb" ','" src="',t+'"  />'].join("")})}_changeProfile(e){console.log(e),d.put({url:"/user",body:e}).then(t=>{if(console.log(t.status),200!==t.status)return t.json();e.password="",e.repassword="",h.setUser({...e}),o.emit("userUpdate",null),V.open("/profile")}).catch(e=>{this._showWarning(this._warnings.email,e.message)})}}),o.on("logout",function(){d.delete({url:"/session"}).then(e=>{200===e.status&&(h.removeUser(),o.emit("userUpdate",null),V.open("/"))})}),z=R.start.bind(R),d.get({url:"/user"}).then(e=>{200===e.status?e.json().then(e=>{h.setUser({...e}),z()}):(console.log("No Auth"),h.removeUser(),z())}).catch(e=>{console.log(e)});var V=t.default=R}]);