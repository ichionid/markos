(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{397:function(t,e,r){"use strict";r.r(e);r(36),r(56),r(37),r(57),r(58),r(39),r(59),r(40),r(34),r(60),r(61),r(38);var n=r(24),o=r(26),c=r(10),l=r(81),d=(r(50),r(42),r(18),r(230),r(96),r(80),r(43),r(400),r(68),r(69),r(166),r(51),r(62)),f=r.n(d),y=r(23),h=r(160),m=r(229),v=r(30);function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"DruxtView",extends:h.default,props:{arguments:{type:Array,default:function(){return[]}},displayId:{type:String,default:"default"},type:{type:String,default:"view--view"},uuid:{type:String,default:null},viewId:{type:String,default:null}},data:function(){var t=Object(m.parse)(Object(m.stringify)(this.$route.query));return{model:{filter:t.filter||{},page:parseInt(t.page)||null,sort:t.sort||null},resource:null,view:!1}},fetchKey:function(t){var e=["DruxtView",this.viewId||this.uuid,this.displayId].filter((function(t){return t}));return[].concat(Object(l.a)(e),[t(e.join(":"))]).join(":")},computed:{attachments_after:function(){var t=this;if(!(((this.view||{}).data||{}).attributes||{}).display)return!1;var e=this.view.data.attributes.display;return Object.keys(e).filter((function(r){return"attachment"===e[r].display_plugin&&"after"===e[r].display_options.attachment_position&&void 0!==e[r].display_options.displays[t.displayId]}))},attachments_before:function(){var t=this;if(!(((this.view||{}).data||{}).attributes||{}).display)return!1;var e=this.view.data.attributes.display;return Object.keys(e).filter((function(r){return"attachment"===e[r].display_plugin&&"before"===e[r].display_options.attachment_position&&void 0!==e[r].display_options.displays[t.displayId]}))},count:function(){return parseInt(((this.resource||{}).meta||{}).count)||0},display:function(){return(((this.view||{}).data||{}).attributes||{}).display?"default"===this.display_id?this.view.data.attributes.display[this.display_id]:f()(this.view.data.attributes.display.default,this.view.data.attributes.display[this.displayId]):{}},filters:function(){return Object.values(((this.display||{}).display_options||{}).filters||{}).filter((function(filter){return filter.exposed}))},headers:function(){return this.display&&(this.display.display_options||{}).header||[]},mode:function(){return this.display&&this.display.display_options&&this.display.display_options.row.type.includes("entity:")&&(this.display.display_options.row.options||{}).view_mode||"default"},pager:function(){return((this.display||{}).display_options||{}).pager||!1},results:function(){return(this.resource||{}).data||[]},showPager:function(){return this.pager.type&&"none"!==this.pager.type},showSorts:function(){return!(!((((this.display||{}).display_options||{}).exposed_form||{}).options||{}).expose_sort_order||!this.sorts.length)},sorts:function(){return Object.values(((this.display||{}).display_options||{}).sorts||{}).filter((function(t){return t.exposed}))}},watch:{"$route.query":function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:Object.entries(t).length||(e.model={filter:{},page:null,sort:null});case 1:case"end":return r.stop()}}),r)})))()},displayId:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()},"model.filter":{deep:!0,handler:function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Object.entries(t).length||Object.entries(e).length){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,r.$fetch();case 4:case"end":return n.stop()}}),n)})))()}},"model.page":function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t===e){n.next=3;break}return n.next=3,r.$fetch();case 3:case"end":return n.stop()}}),n)})))()},"model.sort":function(t,e){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t===e){n.next=3;break}return n.next=3,r.$fetch();case 3:case"end":return n.stop()}}),n)})))()},query:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()},uuid:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()},viewId:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()}},methods:x({getQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={},r=(t.query||{}).resourceTypes||[];if(!0===(t.query||{}).bundleFilter){var n=((this.display||{}).display_options||{}).filters||[];Object.values(n).map((function(filter){"bundle"===filter.plugin_id&&filter.value&&Object.keys(filter.value).map((function(t){r.push("".concat(filter.entity_type,"--").concat(t))}))}))}if((r||[]).length){var o,c=w(r);try{for(c.s();!(o=c.n()).done;){var d=o.value;e["fields[".concat(d,"]")]=["uuid"].concat(Object(l.a)((t.query||{}).fields||[])).join(",")}}catch(t){c.e(t)}finally{c.f()}}if(this.model.page&&(e.page=this.model.page),this.arguments.length)for(var f in this.arguments)e["views-argument[".concat(f,"]")]=this.arguments[f];return Object.entries(this.model.filter||{}).length&&(e["views-filter"]=this.model.filter),this.model.sort&&(e["views-sort[sort_by]"]=this.model.sort),e},onFiltersUpdate:function(){this.model.page=null,this.model.sort=null}},Object(v.b)({getCollection:"druxt/getCollection",getResource:"druxt/getResource",getResults:"druxt/views/getResults"})),druxt:{componentOptions:function(t){var e=t.displayId,r=t.uuid,view=t.view;return[[t.viewId||((view.data||{}).attributes||{}).drupal_internal__id,e],[r||(view.data||{}).id,e],[e]]},fetchConfig:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.view||!t.uuid&&!t.viewId){e.next=11;break}if(!t.uuid){e.next=7;break}return e.next=4,t.getResource({type:t.type,id:t.uuid});case 4:t.view=e.sent,e.next=11;break;case 7:return e.next=9,t.getCollection({type:t.type,query:(new y.DrupalJsonApiParams).addFilter("drupal_internal__id",t.viewId)});case 9:r=e.sent,t.view={data:r.data[0]};case 11:case"end":return e.stop()}}),e)})))()},fetchData:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n=e.viewId||(((e.view||{}).data||{}).attributes||{}).drupal_internal__id)){r.next=6;break}return o=e.getQuery(t),r.next=5,e.getResults({viewId:n,displayId:e.displayId,query:Object(m.stringify)(o)});case 5:e.resource=r.sent;case 6:case"end":return r.stop()}}),r)})))()},propsData:function(t){return{count:t.count,display:t.display,mode:t.mode,pager:t.pager,results:t.results,view:t.view}},settings:function(t,e){var r=t.$druxt,n=f()(r.settings.views||{},e,{arrayMerge:function(t,e){return e}});return{query:n.query||{}}},slots:function(t){var e=this,r={};return this.viewId||this.uuid?(r.header=function(){return Object.entries(e.headers).map((function(e){var r=Object(n.a)(e,2),o=r[0],header=r[1];return t("span",{domProps:{innerHTML:(header.content||{}).value},key:o})}))},this.filters.length&&(r.filters=function(r){return t("DruxtViewsFilters",{attrs:x({},r),on:{input:function(t){e.model.filter=t}},ref:"filters",props:x({filters:e.filters,value:e.model.filter},((e.display||{}).display_options||{}).exposed_form||{})})}),this.showSorts&&(r.sorts=function(r){return t("DruxtViewsSorts",{attrs:x({},r),on:{input:function(t){e.model.sort=t}},ref:"sorts",props:x({sorts:e.sorts,value:e.model.sort},((e.display||{}).display_options||{}).exposed_form||{})})}),this.attachments_before&&(r.attachments_before=function(r){return e.attachments_before.map((function(n){return t("DruxtView",{attrs:x({},r),key:n,ref:"attachements_before",props:{displayId:n,type:e.type,uuid:e.uuid,viewId:e.viewId}})}))}),r.results=function(r){return e.results.length?e.results.map((function(n){return t("DruxtEntity",{attrs:x({},r),key:n.id,props:{mode:e.mode,type:n.type,uuid:n.id}})})):Object.values(((e.display||{}).display_options||{}).empty||{}).filter((function(t){return"text_custom"===t.plugin_id})).map((function(e){return t("div",{domProps:{innerHTML:e.content}})}))},this.showPager&&(r.pager=function(r){return t("DruxtViewsPager",{attrs:x({},r),on:{input:function(t){e.model.page=t}},ref:"pager",props:x({count:e.count,resource:e.resource,value:e.model.page},e.pager)})}),this.attachments_after&&(r.attachments_after=function(r){return e.attachments_after.map((function(n){return t("DruxtView",{attrs:x({},r),key:n,ref:"attachements_after",props:{displayId:n,type:e.type,uuid:e.uuid,viewId:e.viewId}})}))}),r.default=function(t){return Object.keys(r).filter((function(t){return!["default","_normalized"].includes(t)})).map((function(e){return r[e](t)}))},r):{default:function(){return t("DruxtDebug",{props:{summary:"Missing required 'uuid' or 'viewId' prop."}},[t("p","The DruxtView component requires either the 'uuid' or 'viewId' prop to be set.")])}}}}},I=j,k=r(29),component=Object(k.a)(I,undefined,undefined,!1,null,null,null);e.default=component.exports},400:function(t,e,r){var n=r(3),o=r(226).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})}}]);