(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{385:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return m}));var o=r(8),n=r(23),c=r(25);const l=t=>t.map((t=>t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," "))).join("/");async function d({stories:e}){const{addTemplate:r,options:d}=this,j=new c.a(d.druxt.baseUrl,{...d.druxt,proxy:{api:!1}}),m=(new n.DrupalJsonApiParams).addFilter("status",!0),x=(await j.getCollectionAll("block--block",m)).map((t=>t.data)).flat(),h=Array.from(new Set(x.map((t=>t.attributes.theme))));r({src:Object(o.resolve)(t,"../templates/druxt-block.stories.js"),fileName:"stories/druxt-block.stories.js",options:{blocks:x}}),x.forEach((e=>{r({src:Object(o.resolve)(t,"../templates/druxt-block.instance.stories.js"),fileName:`stories/druxt-block.${e.attributes.drupal_internal__id}.stories.js`,options:{block:e,title:l(["Druxt","Blocks",e.attributes.theme,e.attributes.region,e.attributes.drupal_internal__id])}})})),r({src:Object(o.resolve)(t,"../templates/druxt-block-region.stories.js"),fileName:"stories/druxt-block-region.stories.js",options:{regions:Array.from(new Set(x.map((t=>t.attributes.region)))),themes:h}}),h.forEach((e=>{Array.from(new Set(x.filter((t=>t.attributes.theme===e)).map((t=>t.attributes.region)))).forEach((n=>{r({src:Object(o.resolve)(t,"../templates/druxt-block-region.instance.stories.js"),fileName:`stories/druxt-block-region.${e}.${n}.stories.js`,options:{region:n,title:l(["Druxt","Blocks",e,n]),theme:e}})}))})),e.push(Object(o.resolve)(d.buildDir,"./stories/druxt-block.stories.js")),e.push(Object(o.resolve)(d.buildDir,"./stories/druxt-block-region.stories.js")),e.push(Object(o.resolve)(d.buildDir,"./stories/druxt-block.*.stories.js")),e.push(Object(o.resolve)(d.buildDir,"./stories/druxt-block-region.*.stories.js"))}const j=function(e={}){const r={baseUrl:e.baseUrl,...(this.options||{}).druxt||{},blocks:{query:{},...((this.options||{}).druxt||{}).site,...e}};this.addModule(["druxt",r]),this.nuxt.hook("components:dirs",(e=>{e.push({path:Object(o.join)(t,"components")}),e.push({path:Object(o.join)(t,"components/blocks")})})),this.nuxt.hook("storybook:config",(async({stories:t})=>{await d.call(this,{stories:t})}))};j.meta=r(386);const m={props:{block:{type:Object,require:!0}},computed:{settings(){return this.block.attributes.settings}}}}).call(this,"/")},386:function(t){t.exports=JSON.parse('{"name":"druxt-blocks","version":"0.15.2","description":"Drupal Block and Block Region Druxt components.","keywords":["block","blocks","cms","decoupled","drupal","druxt","druxtjs","headless","jsonapi","json:api","nuxt","nuxtjs","module","storybook","vue"],"homepage":"https://druxtjs.org","bugs":{"url":"https://github.com/druxt/druxt.js/issues"},"repository":{"type":"git","url":"git+https://github.com/druxt/druxt.js"},"license":"MIT","exports":{".":{"require":"./dist/druxt-blocks.ssr.js","import":"./dist/druxt-blocks.esm.js"},"./components/*":"./dist/components/*"},"main":"dist/druxt-blocks.ssr.js","module":"dist/druxt-blocks.esm.js","files":["dist","templates"],"dependencies":{"axios":"^0.21.1","drupal-jsonapi-params":"^2.0.0","druxt":"^0.18.2","druxt-entity":"^0.24.3","druxt-router":"^0.26.1"},"optionalDependencies":{"vue":"^2.6.14","vuex":"^3.6.2"},"publishConfig":{"access":"public"}}')},409:function(t,e,r){"use strict";r.r(e);r(43),r(36),r(42),r(18),r(56),r(37),r(57);var o=r(26),n=r(30);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"DruxtBlockPageTitleBlock",mixins:[r(385).a],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.d)("druxtRouter",{title:function(t){return t.route.label}}))},d=l,j=r(29),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports}}]);