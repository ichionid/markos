(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{433:function(e,n,t){"use strict";t.r(n);t(225),t(51),t(58),t(42),t(18),t(43),t(68);var o={name:"DruxtEntityFormButtons",extends:t(160).default,props:{schema:{type:Object,required:!0}},methods:{getScopedSlots:function(){var e=this,n=Object.fromEntries(["submit","reset"].map((function(button){return[button,function(n){return e.$createElement("button",{attrs:n,domProps:{id:button},on:{click:function(n){n.preventDefault(),e.$emit(button,e.model)}}},[button.charAt(0).toUpperCase()+button.slice(1)])}]})));return n.default=function(e){return Object.keys(n).filter((function(e){return!["default","_normalized"].includes(e)})).map((function(t){return n[t](e)}))},n}},druxt:{componentOptions:function(e){var n=e.schema,t=[];return n.config&&(t=[[n.config.entityType,n.config.bundle,n.config.mode,n.config.schemaType],[n.resourceType,n.config.mode,n.config.schemaType],[n.config.entityType,n.config.bundle,n.config.schemaType],[n.resourceType,n.config.schemaType]]),t.push(["default"]),t}}},c=t(29),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);