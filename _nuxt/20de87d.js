(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{391:function(e,t,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(165).default)("b063fc50",content,!0,{sourceMap:!1})},398:function(e,t,r){"use strict";r(391)},399:function(e,t,r){var n=r(164)(!1);n.push([e.i,"img[data-v-fafa7c2a]{width:100%}",""]),e.exports=n},419:function(e,t,r){"use strict";r.r(t);var n=r(26),o=r(10),c=(r(18),r(38),r(43),r(36),r(42),r(56),r(37),r(57),r(50),r(162)),l=r(30);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"DruxtFieldResponsiveImage",mixins:[c.b],data:function(){return{entities:[]}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(e.items);case 1:if((t.t1=t.t0()).done){t.next=10;break}return r=t.t1.value,n=e.items[r],t.next=6,e.getResource({id:n.uuid,type:n.type});case 6:o=t.sent,e.entities[r]=o.data,t.next=1;break;case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){console.warn("[druxt-entity] The ".concat(this.$options._componentTag," component is deprecated. See https://entity.druxtjs.org/guide/deprecations.html"))},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({getResource:"druxt/getResource"}))},m=d,v=(r(398),r(29)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?e._e():r(e.wrapper.component,e._b({tag:"component"},"component",e.wrapper.props,!1),[e.$scopedSlots["label-above"]?r("div",[e._t("label-above")],2):e._e(),e._v(" "),e.$scopedSlots["label-inline"]?e._t("label-inline"):e._e(),e._v(" "),e._l(e.entities,(function(e){return r("img",{key:e.id,attrs:{src:e.attributes.uri.value.replace("public://","/sites/default/files/")}})}))],2)}),[],!1,null,"fafa7c2a",null);t.default=component.exports}}]);