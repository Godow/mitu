(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(t,e,l){var content=l(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(39).default)("3f1fe89e",content,!0,{sourceMap:!1})},304:function(t,e,l){"use strict";var n=l(293);l.n(n).a},305:function(t,e,l){(e=l(38)(!1)).push([t.i,"#vipvideo{height:100vh}#vipvideo iframe{margin-left:10vw;width:80vw}#clock{display:none}@media screen and (max-width:800px){#vipvideo iframe{height:40vh;margin:0;width:95vw}}",""]),t.exports=e},307:function(t,e,l){"use strict";l.r(e);var n={name:"vipvideo",components:{},data:function(){return{options:[{value:"https://jx.du2.cc/?url=",label:"一号通用vip引擎系统"},{value:"https://vip.bljiex.com/?v=",label:"二号通用vip引擎系统"},{value:"https://www.8090g.cn/?url=",label:"三号通用vip引擎系统"},{value:"https://jx.618g.com/?url=",label:"四号通用vip引擎系统"}],value:"",inputUrl:"",tempUrl:""}},computed:{myUrl:function(){return this.value+this.inputUrl}}},r=(l(304),l(16)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"vipvideo"}},[l("h2",{staticStyle:{color:"#FF7256","text-align":"center",padding:"1vh"}},[t._v("全网VIP视频解析")]),t._v(" "),l("iframe",{staticStyle:{padding:"1vh",height:"60vh",border:"1px dashed gray"},attrs:{src:t.myUrl,allowfullscreen:"true"}}),t._v(" "),l("el-select",{staticStyle:{display:"block",width:"60vw",margin:"5px auto"},attrs:{placeholder:"请选择解析引擎"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),l("el-input",{staticStyle:{width:"60vw",display:"block",margin:"5px auto"},attrs:{placeholder:"请输入需要解析的视频网址"},model:{value:t.tempUrl,callback:function(e){t.tempUrl=e},expression:"tempUrl"}}),t._v(" "),l("el-button",{staticStyle:{width:"30vw",display:"block",margin:"5px auto"},attrs:{type:"primary",round:""},on:{click:function(e){t.inputUrl=t.tempUrl}}},[t._v("播放")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);