(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{291:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("75e9db1e",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var o=n(291);n.n(o).a},299:function(t,e,n){(e=n(38)(!1)).push([t.i,"*{padding:0;margin:0}#movie{height:100vh}#movie iframe{margin-left:10vw;width:80vw;height:99%}.waiting{color:#fff;z-index:-1;position:absolute}@media screen and (min-width:800px){.beiyong{position:fixed;right:-10px;top:15vh}.beiyong a{float:right;clear:both;line-height:50px}}@media screen and (max-width:800px){.beiyong{background-color:rgba(139,126,102,.5);display:grid;grid-template-columns:repeat(4,25%)}.waiting{color:#000}#movie iframe{width:100%;margin:0}}",""]),t.exports=e},307:function(t,e,n){"use strict";n.r(e);var o={name:"movie",data:function(){return{waiting:"正在加载资源，请稍后... ...",iframeSrc:"https://www.tv432.com"}},components:{},mounted:function(){var t=this,iframe=document.createElement("iframe");iframe.src=t.iframeSrc,iframe.style.border="0px",iframe.style.allowfullscreen="true",iframe.attachEvent?iframe.attachEvent("onload",(function(){t.waiting=""})):iframe.onload=function(){t.waiting=""},document.getElementById("movie").append(iframe)}},r=(n(298),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"movie"}},[n("div",{staticClass:"beiyong"},[n("a",{attrs:{href:"https://www.77kpp.com/"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路1")])],1),t._v(" "),n("a",{attrs:{href:"http://www.kk2w.cc/"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路2")])],1),t._v(" "),n("a",{attrs:{href:"https://www.i6v.cc/"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路3")])],1),t._v(" "),n("a",{attrs:{href:"https://www.yunbtv.com/"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路4")])],1),t._v(" "),n("a",{attrs:{href:"https://009bk.com/"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路5")])],1),t._v(" "),n("a",{attrs:{href:"https://www.qsptv.net"}},[n("el-button",{attrs:{round:"",size:"mini"}},[t._v("备用线路6")])],1)]),t._v(" "),n("div",{staticClass:"waiting",domProps:{innerHTML:t._s(t.waiting)}})])}),[],!1,null,null,null);e.default=component.exports}}]);