(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{395:function(e,t,r){"use strict";r.r(t);r(36),r(56),r(37),r(57);var n=r(10),o=r(26),c=(r(43),r(42),r(18),r(34),r(161),r(96),r(51),r(50),r(160)),f=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m,d={name:"DruxtBreadcrumb",extends:c.default,props:{home:{type:Boolean,default:!0},path:{type:String,default:""}},computed:h({crumbs:function(e){return e.model}},Object(f.d)({route:function(e){return e.druxtRouter.route},routes:function(e){return e.druxtRouter.routes}})),watch:{$route:(m=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$fetch();case 2:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)}),home:function(){this.$fetch()},path:function(){this.$fetch()}},methods:h({fetchCrumbs:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var path,r,n,o,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(path=e.path||e.$route.path,r=e.route,!e.path||path===e.$route.path){t.next=6;break}return t.next=5,e.getRoute(path);case 5:r=t.sent;case 6:if(r&&Object.keys(r).length){t.next=8;break}throw new Error("No route data available.");case 8:if("/"!==path||e.home){t.next=10;break}return t.abrupt("return");case 10:if(n=[],r.label&&n.push({text:r.label}),"/"!==path){t.next=15;break}return e.model=n,t.abrupt("return");case 15:(o=path.split("/").filter(String)).pop();case 17:if(!(o.length>0)){t.next=33;break}return c="/"+o.join("/"),f=void 0,t.prev=20,t.next=23,e.getRoute(c);case 23:f=t.sent,t.next=29;break;case 26:t.prev=26,t.t0=t.catch(20),f=!1;case 29:f.label&&n.push({to:c,text:f.label}),o.pop(),t.next=17;break;case 33:e.home&&n.push({to:"/",text:"Home"}),e.model=n.reverse();case 35:case"end":return t.stop()}}),t,null,[[20,26]])})))()}},Object(f.b)({getRoute:"druxtRouter/getRoute"})),druxt:{componentOptions:function(){return[["default"]]},fetchConfig:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value){t.next=3;break}return t.next=3,e.fetchCrumbs();case 3:case"end":return t.stop()}}),t)})))()},propsData:function(e){var t=e.model;return{crumbs:t,value:t}},slots:function(){var e=this,t={default:function(){return e.$createElement("ul",(e.crumbs||[]).map((function(t){return e.$createElement("li",[t.to?e.$createElement("NuxtLink",{props:{to:t.to}},[t.text]):t.text])})))}};return t}}},x=d,O=r(29),component=Object(O.a)(x,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);