!function(e){var a={};function t(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(n,s,function(a){return e[a]}.bind(null,s));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=10)}([function(e,a,t){"use strict";var n=Object.prototype.hasOwnProperty;function s(e,a){return Array.isArray(e)?function(e,a){for(var t,n="",i="",r=Array.isArray(a),o=0;o<e.length;o++)(t=s(e[o]))&&(r&&a[o]&&(t=l(t)),n=n+i+t,i=" ");return n}(e,a):e&&"object"==typeof e?function(e){var a="",t="";for(var s in e)s&&e[s]&&n.call(e,s)&&(a=a+t+s,t=" ");return a}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var a="";for(var t in e)n.call(e,t)&&(a=a+t+":"+e[t]+";");return a}return e+""}function r(e,a,t,n){return!1!==a&&null!=a&&(a||"class"!==e&&"style"!==e)?!0===a?" "+(n?e:e+'="'+e+'"'):("function"==typeof a.toJSON&&(a=a.toJSON()),"string"==typeof a||(a=JSON.stringify(a),t||-1===a.indexOf('"'))?(t&&(a=l(a))," "+e+'="'+a+'"'):" "+e+"='"+a.replace(/'/g,"&#39;")+"'"):""}a.merge=function e(a,t){if(1===arguments.length){for(var n=a[0],s=1;s<a.length;s++)n=e(n,a[s]);return n}for(var r in t)if("class"===r){var o=a[r]||[];a[r]=(Array.isArray(o)?o:[o]).concat(t[r]||[])}else if("style"===r){var o=i(a[r]);o=o&&";"!==o[o.length-1]?o+";":o;var l=i(t[r]);l=l&&";"!==l[l.length-1]?l+";":l,a[r]=o+l}else a[r]=t[r];return a},a.classes=s,a.style=i,a.attr=r,a.attrs=function(e,a){var t="";for(var o in e)if(n.call(e,o)){var l=e[o];if("class"===o){l=s(l),t=r(o,l,!1,a)+t;continue}"style"===o&&(l=i(l)),t+=r(o,l,!1,a)}return t};var o=/["&<>]/;function l(e){var a=""+e,t=o.exec(a);if(!t)return e;var n,s,i,r="";for(n=t.index,s=0;n<a.length;n++){switch(a.charCodeAt(n)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}s!==n&&(r+=a.substring(s,n)),s=n+1,r+=i}return s!==n?r+a.substring(s,n):r}a.escape=l,a.rethrow=function e(a,n,s,i){if(!(a instanceof Error))throw a;if(!("undefined"==typeof window&&n||i))throw a.message+=" on line "+s,a;try{i=i||t(9).readFileSync(n,"utf8")}catch(t){e(a,null,s)}var r=3,o=i.split("\n"),l=Math.max(s-r,0),d=Math.min(o.length,s+r);var r=o.slice(l,d).map(function(e,a){var t=a+l+1;return(t==s?"  > ":"    ")+t+"| "+e}).join("\n");a.path=n;a.message=(n||"Pug")+":"+s+"\n"+r+"\n\n"+a.message;throw a}},,function(e,a,t){t(0);e.exports=function(e){var a="";return a+='<section data-section-name="leaderboard"><h1 class="leaderboard__header">Таблица лидеров</h1><br><div class="leaderboard"><div class="leaderboard__wrapper"></div><div class="leaderboard__controls"><img class="arrow arrow__inactive" src="../../img/arrow-left.png"><img class="arrow" src="../../img/arrow-right.png"></div><a class="back" data-href="menu" href="menu">Назад в меню</a></div></section>'}},function(e,a,t){var n=t(0);e.exports=function(e){var a,t="",s=e||{};return function(e){t+="<table><thead><tr><th></th><th>User</th><th>Score</th><th>Games played</th></tr></thead><tbody></tbody>";for(var s=0;s<e.length;s++)t=t+"<tr><td>"+n.escape(null==(a=e[s].num)?"":a)+"</td><td>"+n.escape(null==(a=e[s].name)?"":a)+"</td><td>"+n.escape(null==(a=e[s].score)?"":a)+"</td><td>"+n.escape(null==(a=e[s].games)?"":a)+"</td></tr>";t+="</table>"}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),t}},function(e,a,t){t(0);e.exports=function(e){var a="",t=e||{};return function(e){a+='<header class="menu-header" id="header"><h1>Logic game</h1><nav>',null===e.name?a+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':a+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',a+='</nav></header><section data-section-name="menu"><div class="menu-wrapper" id="main"><div class="menu-wrapper__menu" id="menu"><a class="menu__link" href="sign_in" data-href="sign_in">Играть вдвоем</a><br><a class="menu__link" href="sign_up" data-href="sign_up">Играть одному</a><br><a class="menu__link" href="leaders" data-href="leaders">Таблица лидеров</a><br><a class="menu__link" href="about" data-href="about">О нас</a><br></div></div></section>'}.call(this,"data"in t?t.data:"undefined"!=typeof data?data:void 0),a}},function(e,a,t){t(0);e.exports=function(e){var a="",t=e||{};return function(e){a+='<header class="menu-header" id="header"><h1>Logic game</h1><nav>',null===e.name?a+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':a+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',a+='</nav></header><section data-section-name="about"><div class="about"><div class="about__wrapper"><div class="team"><div class="team__name"><a class="team__a" href="https://github.com/dlipko">Дмитрий Липко</a></div><div class="team__role">Лучший ментор</div><div class="team__name"><a class="team__a" href="https://github.com/SmartPhoneJava">Артём Доктор</a></div><div class="team__role">Fullstack</div><div class="team__name"><a class="team__a" href="https://github.com/slevinsps">Иван Спасенов</a></div><div class="team__role">Fullstack</div><div class="team__name"><a class="team__a" href="https://github.com/Bigyin1">Сергей Апарин</a></div><div class="team__role">Fullstack</div></div><a class="back" data-href="menu" href="menu">Назад в меню</a></div></div></section>'}.call(this,"data"in t?t.data:"undefined"!=typeof data?data:void 0),a}},function(e,a,t){t(0);e.exports=function(e){var a="",t=e||{};return function(e){a+='<header class="menu-header" id="header"><h1>Logic game</h1><nav>',null===e.name?a+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':a+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',a+='</nav></header><section class="signup"><form class="signup__form" novalidate="novalidate"><input class="input signup__input text-h2" id="email" type="email" name="email" autocomplete="autocomplete" autofocus="true" placeholder="Email"><div class="warning signup__warning hidden js-warning-email"></div><input class="input signup__input text-h2" id="login" type="login" name="login" autocomplete="autocomplete" autofocus="true" placeholder="Login"><div class="warning signup__warning hidden js-warning-login"></div><input class="input signup__input text-h2" id="password" type="password" name="password" autocomplete="autocomplete" placeholder="Password"><div class="warning signup__warning hidden js-warning-password"></div><input class="input signup__input text-h2" id="password-repeat" type="password" name="password-repeat" autocomplete="autocomplete" placeholder="Repeat Password"><div class="warning signup__warning hidden js-warning-repassword"></div><input class="button signup__submit text-h2" type="submit" name="submit" value="Sign up"><div class="signup__footer"><a class="button header-bar__button text-base" data-href="menu" href="menu">Back to Menu</a><div class="text-base">or</div><a class="button header-bar__button text-base" data-href="sign_in" href="sign_in">Sign In</a></div></form></section>'}.call(this,"data"in t?t.data:"undefined"!=typeof data?data:void 0),a}},function(e,a,t){t(0);e.exports=function(e){var a="",t=e||{};return function(e){a+='<header class="menu-header" id="header"><h1>Logic game</h1><nav>',null===e.name?a+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':a+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',a+='</nav></header><section class="signup"><form class="signup__form" novalidate="novalidate"><input class="input signup__input text-h2" id="email" type="email" name="email" autofocus="true" placeholder="Email"><div class="warning signup__warning hidden js-warning-email"></div><input class="input signup__input text-h2" id="password" type="password" name="password" autocomplete="autocomplete" placeholder="Password"><div class="warning signup__warning hidden js-warning-password"></div><input class="button signup__submit text-h2" type="submit" name="submit" value="Sign in"><div class="signup__footer"><a class="button header-bar__button text-base" data-href="menu" href="menu">Back to Menu</a><div class="text-base">or</div><a class="button header-bar__button text-base" data-href="sign_up" href="sign_up">Sign Up</a></div></form></section>'}.call(this,"data"in t?t.data:"undefined"!=typeof data?data:void 0),a}},function(e,a,t){var n=t(0);e.exports=function(e){var a,t="",s=e||{};return function(e){t+='<header class="menu-header" id="header"><h1>Logic game</h1><nav>',null===e.name?t+='<a class="menu-button" href="sign_in" data-href="sign_in">Sign In</a><a class="menu-button" href="sign_up" data-href="sign_up">Sign Up</a>':t+='<a class="menu-button" href="profile" data-href="profile">Profile</a><a class="menu-button" href="sign_out" data-href="sign_out">Sign Out</a>',t+='</nav></header><section data-section-name="profile"><div class="profile"><div class="profile__wrapper"><div class="profile__main"><div class="profile__avatar">';var s=e.avatar;t=t+'<img class="profile__avatar__img"'+n.attr("src",s,!0,!0)+'><input class="button avatar__button" type="file" name="upload" value="Upload"></div><div class="profile__info"><div class="profile__row"><div class="profile__name">Login</div><div class="profile__value">'+n.escape(null==(a=e.name)?"":a)+'</div></div><div class="profile__row"><div class="profile__name">Email</div><div class="profile__value">'+n.escape(null==(a=e.email)?"":a)+'</div></div><div class="profile__row"><div class="profile__name">Password</div><div class="profile__value">******</div></div><div class="profile__row"><div class="profile__name">Games Played</div><div class="profile__value">'+n.escape(null==(a=e.played)?"":a)+'</div></div></div></div><a class="back" data-href="menu" href="menu">Назад в меню</a></div></div></section>'}.call(this,"data"in s?s.data:"undefined"!=typeof data?data:void 0),t}},function(e,a){},function(e,a,t){"use strict";t.r(a);var n=t(2),s=t.n(n),i=t(3),r=t.n(i);class o{constructor({el:e=document.body}={}){this.parent=e,this.template=r.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data})}}const l="https://escapade-backend.herokuapp.com";class d{static post({host:e=l,url:a="/",body:t={}}={}){return fetch(e+a,{method:"POST",body:JSON.stringify(t),mode:"cors",credentials:"include",headers:{"Content-Type":"application/json; charset=utf-8"}})}static get({host:e=l,url:a="/"}={}){return fetch(e+a,{method:"GET",mode:"cors",credentials:"include"})}static delete({host:e=l,url:a="/"}={}){return fetch(e+a,{method:"DELETE",mode:"cors",credentials:"include"})}}class u{constructor({el:e=document.body}={}){this.parent=e,this.template=s.a,this._currPage=1}set data(e=[]){this._data=e}render(){d.get({url:"/leaderboard/pages/count"}).then(e=>e.json()).then(e=>{this._pagesCount=e.count,this.parent.innerHTML=this.template(),this._initButtons(),this.board=new o({el:this.parent.querySelector(".leaderboard__wrapper")}),d.get({url:"/leaderboard/pages/1"}).then(e=>e.json()).then(e=>{this.board.data=e,this.board.render()})})}_initButtons(){this._arrows=this.parent.querySelectorAll(".arrow"),this._arrows[0].addEventListener("click",this._prevPage.bind(this)),this._arrows[1].addEventListener("click",this._nextPage.bind(this)),1===this._pagesCount&&this._arrows[1].classList.add("arrow__inactive")}_nextPage(){this._currPage!==this._pagesCount&&(1===this._currPage&&this._arrows[0].classList.remove("arrow__inactive"),this._currPage+=1,this._currPage===this._pagesCount&&this._arrows[1].classList.add("arrow__inactive"))}_prevPage(){1!=this._currPage&&(this._currPage===this._pagesCount&&this._arrows[1].classList.remove("arrow__inactive"),this._currPage-=1,1===this._currPage&&this._arrows[0].classList.add("arrow__inactive"))}}var c=t(4),h=t.n(c);class p{constructor({el:e=document.body}={}){this.parent=e,this.template=h.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data})}}var _=t(5),f=t.n(_);class g{constructor({el:e=document.body}={}){this.parent=e,this.template=f.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data})}}var m=t(6),v=t.n(m);function w(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(String(e).toLowerCase())}function b(e){return/^[A-Za-z]\w{3,14}$/i.test(e)}const y=new class{constructor(){this.name=null,this.email=null,this.played=null,this.avatar=null,this.password=null}setUser({email:e,played:a,avatar:t,password:n,name:s}={}){this.email=e||null,this.played=a||0,this.avatar=t||"./img/qrosh.png",this.name=s||null,this.password=n||null}removeUser(){this.email=null,this.played=null,this.avatar=null,this.name=null,this.password=null}};class S{constructor({el:e=document.body}={}){this.parent=e,this.template=v.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data}),this._warnings={},this._warnings.email=this.parent.querySelector(".js-warning-email"),this._warnings.login=this.parent.querySelector(".js-warning-login"),this._warnings.pass=this.parent.querySelector(".js-warning-password"),this._warnings.repass=this.parent.querySelector(".js-warning-repassword"),this._form=this.parent.querySelector(".signup__form"),this._submitButton=this.parent.querySelector(".signup__submit"),this._submitButton.addEventListener("click",this._onSubmit.bind(this))}_onSubmit(e){console.log("event"),e.preventDefault();const a={};a.email=this._form.elements.email.value,a.name=this._form.elements.login.value,a.password=this._form.elements.password.value,a.repass=this._form.elements["password-repeat"].value,this._validateInput(a)&&(console.log(a),this._auth(a))}_validateInput({email:e,name:a,password:t,repass:n}){let s=!0;if(this._hideWarning(this._warnings.email),!0!==w(e)){let a="Invalid email format";0===e.length&&(a="Fill email field please"),this._showWarning(this._warnings.email,a),s=!1}if(this._hideWarning(this._warnings.login),!0!==b(a)){let e="Invalid login format";0===a.length&&(e="Fill login field please"),this._showWarning(this._warnings.login,e),s=!1}if(this._hideWarning(this._warnings.pass),!0!==b(t)){let e="Invalid password format";0===t.length&&(e="Fill password field please"),this._showWarning(this._warnings.pass,e),s=!1}if(this._hideWarning(this._warnings.repass),n!==t){let e="Passwords dont match";0===n.length&&(e="Repeat password please"),this._showWarning(this._warnings.repass,e),s=!1}return s}_showWarning(e,a){e.classList.remove("hidden"),e.innerHTML="",e.innerHTML+=a}_hideWarning(e){e.classList.add("hidden"),e.innerHTML=""}_auth(e){console.log(e),d.post({url:"/register",body:e}).then(a=>{if(201!==a.status)return a.json();y.setUser({...e}),W(),console.log(y)}).then(e=>{this._showWarning(this._warnings.email,e.message)})}}var L=t(7),P=t.n(L);class x{constructor({el:e=document.body}={}){this.parent=e,this.template=P.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data}),this._warnings={},this._warnings.email=this.parent.querySelector(".js-warning-email"),this._warnings.pass=this.parent.querySelector(".js-warning-password"),this._form=this.parent.querySelector(".signup__form"),this._submitButton=this.parent.querySelector(".signup__submit"),this._submitButton.addEventListener("click",this._onSubmit.bind(this))}_onSubmit(e){e.preventDefault();const a={};a.email=this._form.elements.email.value,a.password=this._form.elements.password.value,this._validateInput(a)&&this._login(a)}_validateInput({email:e,password:a}){let t=!0;if(this._hideWarning(this._warnings.email),!0!==w(e)){let a="Invalid email format";0===e.length&&(a="Fill email field please"),this._showWarning(this._warnings.email,a),t=!1}if(this._hideWarning(this._warnings.pass),!0!==b(a)){let e="Invalid password format";0===a.length&&(e="Fill password field please"),this._showWarning(this._warnings.pass,e),t=!1}return t}_showWarning(e,a){e.classList.remove("hidden"),e.innerHTML="",e.innerHTML+=a}_hideWarning(e){e.classList.add("hidden"),e.innerHTML=""}_login(e){d.post({url:"/login",body:e}).then(e=>{200===e.status?e.json().then(e=>{y.setUser({...e}),W()}):e.json().then(e=>{this._showWarning(this._warnings.email,e.message)})})}}var j=t(8),k=t.n(j);class M{constructor({el:e=document.body}={}){this.parent=e,this.template=k.a}set data(e=[]){this._data=e}render(){this.parent.innerHTML=this.template({data:this._data})}}t.d(a,"createProfile",function(){return W});const T=document.getElementById("application");function O(){const e=new p({el:T});e.data=y,e.render()}function W(){const e=new M({el:T});e.data=y,e.render()}const H={menu:O,sign_in:function(){const e=new x({el:T});e.data=y,e.render()},sign_up:function(){const e=new S({el:T});e.data=y,e.render()},leaders:function(){new u({el:T}).render()},about:function(){const e=new g({el:T});e.data=y,e.render()},profile:W,sign_out:function(){d.delete({url:"/logout"}).then(e=>{if(200===e.status){y.removeUser();const e=new p({el:T});e.data=y,e.render()}})}};var I;I=O,d.get({url:"/me"}).then(e=>{200===e.status?e.json().then(e=>{y.setUser({...e}),I(),console.log("check",e)}):(y.removeUser(),I())}),T.addEventListener("click",function(e){if(!(e.target instanceof HTMLAnchorElement)||e.target.classList.contains("team__a"))return;e.preventDefault();const a=e.target;console.log({href:a.href,dataHref:a.dataset.href}),T.innerHTML="",H[a.dataset.href]()})}]);