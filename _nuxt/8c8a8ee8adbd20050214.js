(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,n,e){var content=e(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1aeb5326",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";var o=e(292);e.n(o).a},301:function(t,n,e){(n=e(38)(!1)).push([t.i,"*{margin:0;padding:0}#music{height:100vh}#music iframe{margin-left:10vw;width:80vw;height:99vh}.waiting{color:#fff;z-index:-1;position:absolute}@media screen and (max-width:800px){.waiting{color:#000}#music iframe{margin:0;width:100%;height:91vh}}",""]),t.exports=n},306:function(t,n,e){"use strict";e.r(n);var o={name:"music",data:function(){return{waiting:"正在加载资源，请稍后... ...",iframeSrc:"https://www.musictool.top"}},components:{},mounted:function(){var t=this,iframe=document.createElement("iframe");iframe.src=t.iframeSrc,iframe.style.border="0px",iframe.style.allowfullscreen="true",iframe.attachEvent?iframe.attachEvent("onload",(function(){t.waiting=""})):iframe.onload=function(){t.waiting=""},document.getElementById("music").append(iframe)}},c=(e(300),e(16)),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"music"}},[n("div",{staticClass:"waiting",domProps:{innerHTML:this._s(this.waiting)}})])}),[],!1,null,null,null);n.default=component.exports}}]);