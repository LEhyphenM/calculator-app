(function(t){function n(n){for(var r,o,u=n[0],a=n[1],s=n[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,u=1;u<e.length;u++){var a=e[u];0!==c[a]&&(r=!1)}r&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var r={},c={app:0},i=[];function o(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=a;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"515c":function(t,n,e){"use strict";e("faf5")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("7a23"),c={id:"app"};function i(t,n,e,i,o,u){var a=Object(r["h"])("Calculator");return Object(r["e"])(),Object(r["b"])("div",c,[Object(r["c"])("h1",null,Object(r["i"])(o.title),1),Object(r["d"])(a),Object(r["c"])("h6",null,Object(r["i"])(o.footer),1)])}var o={class:"calculator"},u={class:"display top"};function a(t,n,e,c,i,a){return Object(r["e"])(),Object(r["b"])("div",o,[Object(r["c"])("div",u,Object(r["i"])(i.current||"0"),1),Object(r["c"])("div",{onClick:n[0]||(n[0]=function(){return a.clear&&a.clear.apply(a,arguments)}),class:"btn"},"C"),Object(r["c"])("div",{onClick:n[1]||(n[1]=function(){return a.sign&&a.sign.apply(a,arguments)}),class:"btn"},"+/-"),Object(r["c"])("div",{onClick:n[2]||(n[2]=function(){return a.percent&&a.percent.apply(a,arguments)}),class:"btn"},"%"),Object(r["c"])("div",{onClick:n[3]||(n[3]=function(){return a.divide&&a.divide.apply(a,arguments)}),class:"btn operator"},"÷"),Object(r["c"])("div",{onClick:n[4]||(n[4]=function(t){return a.append("7")}),class:"btn"},"7"),Object(r["c"])("div",{onClick:n[5]||(n[5]=function(t){return a.append("8")}),class:"btn"},"8"),Object(r["c"])("div",{onClick:n[6]||(n[6]=function(t){return a.append("9")}),class:"btn"},"9"),Object(r["c"])("div",{onClick:n[7]||(n[7]=function(){return a.times&&a.times.apply(a,arguments)}),class:"btn operator"},"x"),Object(r["c"])("div",{onClick:n[8]||(n[8]=function(t){return a.append("4")}),class:"btn"},"4"),Object(r["c"])("div",{onClick:n[9]||(n[9]=function(t){return a.append("5")}),class:"btn"},"5"),Object(r["c"])("div",{onClick:n[10]||(n[10]=function(t){return a.append("6")}),class:"btn"},"6"),Object(r["c"])("div",{onClick:n[11]||(n[11]=function(){return a.minus&&a.minus.apply(a,arguments)}),class:"btn operator"},"-"),Object(r["c"])("div",{onClick:n[12]||(n[12]=function(t){return a.append("1")}),class:"btn"},"1"),Object(r["c"])("div",{onClick:n[13]||(n[13]=function(t){return a.append("2")}),class:"btn"},"2"),Object(r["c"])("div",{onClick:n[14]||(n[14]=function(t){return a.append("3")}),class:"btn"},"3"),Object(r["c"])("div",{onClick:n[15]||(n[15]=function(){return a.add&&a.add.apply(a,arguments)}),class:"btn operator"},"+"),Object(r["c"])("div",{onClick:n[16]||(n[16]=function(t){return a.append("0")}),class:"btn zero bottom zero"},"0"),Object(r["c"])("div",{onClick:n[17]||(n[17]=function(){return a.dot&&a.dot.apply(a,arguments)}),class:"btn bottom"},"."),Object(r["c"])("div",{onClick:n[18]||(n[18]=function(){return a.equal&&a.equal.apply(a,arguments)}),class:"btn operator bottom"},"=")])}e("fb6a"),e("99af");var s={data:function(){return{previous:null,current:"",operator:null,operatorClicked:!1}},methods:{clear:function(){this.current=""},sign:function(){this.current="-"===this.current.charAt(0)?this.current.slice(1):"-".concat(this.current)},percent:function(){this.current="".concat(parseFloat(this.current)/100)},append:function(t){this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current="".concat(this.current).concat(t)},dot:function(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious:function(){this.previous=this.current,this.operatorClicked=!0},divide:function(){this.operator=function(t,n){return t/n},this.setPrevious()},times:function(){this.operator=function(t,n){return t*n},this.setPrevious()},minus:function(){this.operator=function(t,n){return t-n},this.setPrevious()},add:function(){this.operator=function(t,n){return t+n},this.setPrevious()},equal:function(){this.current="".concat(this.operator(parseFloat(this.current),parseFloat(this.previous))),this.previous=null}}},l=(e("515c"),e("6b0d")),p=e.n(l);const d=p()(s,[["render",a],["__scopeId","data-v-54770f99"]]);var f=d,b={name:"app",data:function(){return{title:"Calculator App",footer:"Lauren Elliott-Manheim • 2015-2022 • Ex astris, scientia"}},components:{Calculator:f}};e("7cc5");const v=p()(b,[["render",i]]);var h=v;Object(r["a"])(h).mount("#app")},"7cc5":function(t,n,e){"use strict";e("dc6a")},dc6a:function(t,n,e){},faf5:function(t,n,e){}});
//# sourceMappingURL=app.31e17815.js.map