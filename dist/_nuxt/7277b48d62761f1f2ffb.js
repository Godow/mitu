(window.webpackJsonp=window.webpackJsonp||[]).push([[3,1],{284:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("4336ce92",content,!0,{sourceMap:!1})},285:function(t,e,n){t.exports=n.p+"img/d61e5c7.png"},286:function(t,e,n){"use strict";var o=n(284);n.n(o).a},287:function(t,e,n){(e=n(51)(!1)).push([t.i,"*{padding:0;margin:0}#hello{position:fixed}#hello a .el-button{float:left;clear:both;width:10vw;margin-top:40px;margin-left:-20px}.tuijian{position:fixed;right:0;bottom:120px;color:red;text-align:center}.joinus{right:20px;bottom:20px;width:100px;height:100p}.joinus,.mitu{position:fixed}.mitu{border-radius:0 0 0 120px;right:-20px;top:-20px;width:120px;height:120p;background-color:#fff}a{text-decoration:none}.phoneNav{display:none}@media screen and (max-width:800px){.mitu{display:none}#hello{position:relative;height:0;margin-bottom:8vh}.phoneNav{display:block;width:100%;height:8vh;background-color:#000}.joinus,.nav,.tuijian{display:none}}",""]),t.exports=e},288:function(t,e,n){"use strict";n.r(e);var o={name:"hello",data:function(){return{dialogVisible:!1}},methods:{}},r=(n(286),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"hello"}},[o("div",{staticClass:"phoneNav",staticStyle:{position:"fixed",top:"0px"}},[t._m(0),t._v(" "),o("div",{staticStyle:{position:"fixed",right:"8vh",width:"0px",height:"0px","border-left":"10px solid white","border-top":"10px solid transparent","border-bottom":"10px solid transparent"}}),t._v(" "),o("img",{staticStyle:{width:"8vh",height:"8vh",position:"fixed",right:"0px"},attrs:{src:n(117)}}),t._v(" "),o("el-dropdown",{staticStyle:{position:"fixed",left:"0px"},attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link",staticStyle:{"line-height":"8vh",color:"white","font-size":"20px"}},[t._v("\n      菜单"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticStyle:{"line-height":"50px",color:"white"},attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("nuxt-link",{attrs:{to:"movie"}},[t._v("电影频道")])],1),t._v(" "),o("el-dropdown-item",[o("nuxt-link",{attrs:{to:"vip"}},[t._v("视频解析")])],1),t._v(" "),o("el-dropdown-item",[o("nuxt-link",{attrs:{to:"music"}},[t._v("音乐下载")])],1),t._v(" "),o("el-dropdown-item",[o("nuxt-link",{attrs:{to:"tiku"}},[t._v("题库中心")])],1),t._v(" "),o("el-dropdown-item",[o("a",{attrs:{href:"http://rrd.me/ftesh"}},[t._v("优惠购物")])]),t._v(" "),o("el-dropdown-item",[o("nuxt-link",{attrs:{to:"others"}},[t._v("更多资源")])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"nav"},[o("nuxt-link",{attrs:{to:"movie"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("电影频道")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"vip"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("视频解析")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"music"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("音乐下载")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"tiku"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("题库中心")])],1),t._v(" "),o("a",{attrs:{href:"http://rrd.me/ftesh"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("优惠购物")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"others"}},[o("el-button",{attrs:{type:"primary",round:""}},[t._v("更多资源")])],1)],1),t._v(" "),t._m(1),t._v(" "),o("img",{staticClass:"joinus",attrs:{src:n(117)}}),t._v(" "),o("img",{staticClass:"mitu",attrs:{src:n(285)}}),t._v(" "),o("nuxt")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{color:"gray",position:"fixed",right:"10vh","font-size":"10px"}},[this._v("微信扫码获取"),e("br"),this._v("更多资源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tuijian"},[this._v("强烈推荐关注公众号"),e("br"),this._v("获取更多资源")])}],!1,null,null,null);e.default=component.exports},290:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("1aeb5326",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";var o=n(290);n.n(o).a},297:function(t,e,n){(e=n(51)(!1)).push([t.i,"*{margin:0;padding:0}#music{height:100vh}#music iframe{margin-left:10vw;width:80vw;height:99vh}.waiting{color:#fff;z-index:-1;position:absolute}@media screen and (max-width:800px){.waiting{color:#000}#music iframe{margin:0;width:100%;height:91vh}}",""]),t.exports=e},305:function(t,e,n){"use strict";n.r(e);var o={name:"music",data:function(){return{waiting:"正在加载资源，请稍后... ...",iframeSrc:"https://www.musictool.top"}},components:{hello:n(288).default},mounted:function(){var t=this,iframe=document.createElement("iframe");iframe.src=t.iframeSrc,iframe.style.border="0px",iframe.style.allowfullscreen="true",iframe.attachEvent?iframe.attachEvent("onload",(function(){t.waiting=""})):iframe.onload=function(){t.waiting=""},document.getElementById("music").append(iframe)}},r=(n(296),n(26)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"music"}},[e("hello"),this._v(" "),e("div",{staticClass:"waiting",domProps:{innerHTML:this._s(this.waiting)}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);