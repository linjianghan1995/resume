webpackJsonp([3],{Trl2:function(t,e){},bqvq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),r=n.n(i),c=n("b8UZ"),l={components:{},data:function(){return{cycle:!0,indicators:!0,controls:!1,interval:1e4,current:1,imgSrc:"",openFullscreen:!1}},methods:{setPage:function(t){this.current=t+1},openFullscreenDialog:function(t){this.imgSrc=t,this.openFullscreen=!0},closeFullscreenDialog:function(){this.openFullscreen=!1}},computed:r()({},Object(c.c)(["profiles"]))},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-item section"},[n("h2",[t._v("项目经验 / Profiles")]),t._v(" "),n("mu-flex",{attrs:{"justify-content":"center"}},[n("mu-pagination",{attrs:{raised:"",circle:"","page-size":1,total:t.profiles.length,current:t.current},on:{"update:current":function(e){t.current=e}}})],1),t._v(" "),n("mu-carousel",{staticClass:"carousel",attrs:{transition:"slide","hide-controls":t.controls,"hide-indicators":t.indicators,interval:t.interval,cycle:t.cycle,active:t.current-1},on:{change:t.setPage}},[t._l(t.profiles,function(e,i){return[n("mu-carousel-item",{key:i},[n("mu-container",{staticClass:"box"},[n("mu-card",{staticClass:"card",staticStyle:{width:"100%",margin:"0 auto"}},[n("mu-card-header",{attrs:{title:e.title,"sub-title":e.subTitle}}),t._v(" "),e.img?n("mu-card-media",[n("img",{staticClass:"img",attrs:{src:e.img},on:{click:function(n){return t.openFullscreenDialog(e.img)}}})]):t._e(),t._v(" "),n("mu-card-title",{attrs:{"sub-title":"技术栈："+e.skills}}),t._v(" "),n("mu-card-text",[t._v("\n              "+t._s(e.text)+"\n            ")]),t._v(" "),n("mu-card-actions",[e.github?n("a",{attrs:{href:e.github,target:"_blank"}},[n("mu-icon",{staticClass:"icon",attrs:{value:":iconfont icon-GitHub"}})],1):n("mu-divider",{staticStyle:{margin:"15px"}})],1)],1)],1)],1)]})],2),t._v(" "),n("mu-dialog",{attrs:{transition:"slide-bottom",fullscreen:"",open:t.openFullscreen},on:{"update:open":function(e){t.openFullscreen=e}}},[n("mu-appbar",{attrs:{color:"primary",title:"Fullscreen Diaolog"}},[n("mu-button",{attrs:{slot:"left",icon:""},on:{click:t.closeFullscreenDialog},slot:"left"},[t._v("\n        ×\n      ")]),t._v(" "),n("mu-button",{attrs:{slot:"right",icon:""},on:{click:t.closeFullscreenDialog},slot:"right"},[t._v("\n        ×\n      ")])],1),t._v(" "),n("div",{staticStyle:{"padding-top":"14px","text-align":"center","vertical-align":"middle"}},[n("img",{staticStyle:{height:"520px"},attrs:{src:t.imgSrc}})])],1)],1)},staticRenderFns:[]};var a=n("C7Lr")(l,s,!1,function(t){n("Trl2")},"data-v-0d0ab754",null);e.default=a.exports}});