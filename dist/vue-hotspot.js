!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).VueHotspot=e()}(this,function(){"use strict";var t={props:{initOptions:Object},data:function(){return{defaultOptions:{data:[],image:"https://via.placeholder.com/600x500",editable:!0,interactivity:"hover",schema:[{property:"Title",default:"Vue Hotspot"},{property:"Message",default:"This is a Vue Hotspot Component which lets you create hotspot. "}]},config:null}},methods:{init:function(){window.addEventListener("resize",this.resizeHotspot)},copyObj:function(t){return JSON.parse(JSON.stringify(t))},getHotspotPosition:function(t){var e=this.$refs.vue_hotspot,o=this.$refs.vue_hotspot_background_image,i=o.clientHeight,s=o.clientWidth;return"\n        top: "+(t.y*i/100+(o.offsetTop-e.clientTop))+"px;\n        left: "+(t.x*s/100+(o.offsetLeft-e.clientLeft))+"px;\n      "},resizeHotspot:function(){var t=this.$refs.vue_hotspot,e=this.$refs.vue_hotspot_overlay;if(e){var o=this.$refs.vue_hotspot_background_image;e.style.height=o.clientHeight/t.clientHeight*100+"%",e.style.width=o.clientWidth/t.clientWidth*100+"%",e.style.left=o.offsetLeft-t.clientLeft+"px",e.style.top=o.offsetTop-t.clientTop+"px"}},setOptions:function(){var t=this.copyObj(this.defaultOptions);this.config&&(t=this.config),this.config=Object.assign({},t,this.initOptions)},successLoadImg:function(t){!0===t.target.complete&&this.resizeHotspot()},addHotspot:function(t){for(var e=this.$refs.vue_hotspot_overlay,o=t.offsetX,i=t.offsetY,s=e.offsetHeight,n={x:o/e.offsetWidth*100,y:i/s*100},a=this.config.schema,r=0;r<a.length;r++){var u=a[r],_=prompt("Please enter "+u.property,u.default);if(null===_)return;n[u.property]=_}this.config.data.push(n)},saveAllHotspots:function(){this.$emit("save-data",this.config.data)},removeAllHotspots:function(){this.config.data=[],this.$emit("after-delete")},toggleClass:function(t){this.$refs["vue_hotspot_hotspot_"+t][0].classList.toggle("active")}},mounted:function(){this.initOptions&&(this.setOptions(),this.init())},watch:{initOptions:{handler:function(t,e){var o=this;this.setOptions(),this.$nextTick(function(){o.resizeHotspot()})},deep:!0}}};var e,o=function(t,e,o,i,s,n,a,r,u,_){"boolean"!=typeof a&&(u=r,r=a,a=!1);var p,c="function"==typeof o?o.options:o;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),n?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=p):e&&(p=a?function(){e.call(this,_(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),p)if(c.functional){var d=c.render;c.render=function(t,e){return p.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,p):[p]}return o},i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var s={};return o({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.config?o("div",{ref:"vue_hotspot",staticClass:"ui__vue_hotspot"},[o("img",{ref:"vue_hotspot_background_image",staticClass:"ui__vue_hotspot_background_image",attrs:{src:t.config.image,alt:"Hotspot Image"},on:{load:t.successLoadImg}}),t._v(" "),t.config.editable?o("span",{ref:"vue_hotspot_overlay",staticClass:"ui__vue_hotspot_overlay",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addHotspot(e)}}},[o("p",[t._v("Please Click The Image To Add Hotspots.")])]):t._e(),t._v(" "),t._l(t.config.data,function(e,i){return o("div",{key:i,ref:"vue_hotspot_hotspot_"+i,refInFor:!0,staticClass:"ui__vue_hotspot_hotspot",class:"ui__vue_hotspot_hotspot_"+i,style:t.getHotspotPosition(e),on:{mouseenter:function(e){"hover"===t.config.interactivity&&t.toggleClass(i)},mouseleave:function(e){"hover"===t.config.interactivity&&t.toggleClass(i)},click:function(e){"click"===t.config.interactivity&&t.toggleClass(i)}}},[o("div",[o("div",{staticClass:"ui__vue_hotspot_title"},[t._v(t._s(e.Title))]),t._v(" "),o("div",{staticClass:"ui__vue_hotspot_message"},[t._v(t._s(e.Message))])])])}),t._v(" "),o("div",{staticClass:"ui__vue_hotspot_buttons_box"},[o("div",{staticClass:"ui__vue_hotspot_buttons",class:t.config&&t.config.editable?"active":""},[o("button",{staticClass:"ui__vue_hotspot_save",on:{click:t.saveAllHotspots}},[t._v("Save")]),t._v(" "),o("button",{staticClass:"ui__vue_hotspot_remove",on:{click:t.removeAllHotspots}},[t._v("Remove")])])])],2):t._e()])},staticRenderFns:[]},function(t){t&&t("data-v-93de8ca2_0",{source:".ui__vue_hotspot{width:auto;height:auto;display:inline-block;position:relative}.ui__vue_hotspot_hotspot{height:20px;width:20px;position:absolute;background:#1abc9c;border-radius:50%;cursor:pointer;z-index:200;margin-left:-10px;margin-top:-10px}.ui__vue_hotspot_background_image{max-width:100%}.ui__vue_hotspot_hotspot>div{background:rgba(26,188,156,.4);width:140px;height:94px;margin:-94px -60px;border-radius:4px;overflow:hidden;font-size:10px;display:none}.ui__vue_hotspot_hotspot.active>div{display:block}.ui__vue_hotspot_hotspot>div>.ui__vue_hotspot_title{background:rgba(255,255,255,.4);height:20px;font-weight:700;padding:4px 10px}.ui__vue_hotspot_hotspot>div>.ui__vue_hotspot_message{background:rgba(255,255,255,.4);margin-top:2px;padding:4px 10px;height:72px;overflow-y:auto}.ui__vue_hotspot_buttons_box{height:5em}.ui__vue_hotspot_buttons{transition:padding .4s ease-out,opacity .2s ease-in;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border-radius:0 0 1em 1em;padding:0;opacity:0}.ui__vue_hotspot_buttons.active{padding:1em;opacity:1}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove,.ui__vue_hotspot_buttons>.ui__vue_hotspot_save{width:8em;display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:0;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px;margin-left:10px}.ui__vue_hotspot_buttons>.ui__vue_hotspot_save{color:#fff;background-color:#67c23a;border-color:#67c23a}.ui__vue_hotspot_buttons>.ui__vue_hotspot_save:hover{background:#85ce61;border-color:#85ce61;color:#fff}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove{color:#fff;background-color:#f56c6c;border-color:#f56c6c}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove:hover{color:#fff;background:#f78989;border-color:#f78989}.ui__vue_hotspot_unsaved{background:#409eff}span.ui__vue_hotspot_overlay{position:absolute;background-color:rgba(0,0,0,.4);background-color:rgba(0,0,0,.4);top:0;left:0;cursor:pointer}span.ui__vue_hotspot_overlay>p{color:#fff;background:rgba(255,255,255,.4);margin-top:0;padding:20px;text-align:center}",map:void 0,media:void 0})},t,void 0,!1,void 0,function(t){return function(t,o){return function(t,o){var n=i?o.media||"default":t,a=s[n]||(s[n]={ids:new Set,styles:[]});if(!a.ids.has(t)){a.ids.add(t);var r=o.source;if(o.map&&(r+="\n/*# sourceURL="+o.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",o.media&&a.element.setAttribute("media",o.media),void 0===e&&(e=document.head||document.getElementsByTagName("head")[0]),e.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(r),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{var u=a.ids.size-1,_=document.createTextNode(r),p=a.element.childNodes;p[u]&&a.element.removeChild(p[u]),p.length?a.element.insertBefore(_,p[u]):a.element.appendChild(_)}}}(t,o)}},void 0)});
