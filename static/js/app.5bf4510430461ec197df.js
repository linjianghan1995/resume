webpackJsonp([6],{C4aK:function(e,t){},CFSk:function(e,t){},EoR4:function(e,t,n){e.exports=n.p+"static/img/avatar.jpeg"},Kg7K:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("kV13"),i=n("4YfN"),a=n.n(i),r=n("b8UZ"),c={data:function(){return{}},computed:a()({},Object(r.c)(["showArrow"])),methods:a()({},Object(r.b)(["next"]),{toNext:function(){var e=this,t=this.$route.path;this.next(t).then(function(t){e.$router.push(t)})}})},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.showArrow,expression:"showArrow"}],staticClass:"next"},[t("i",{staticClass:"iconfont icon-xiala3 arrow",on:{click:this.toNext}})])},staticRenderFns:[]};var u={components:{Down:n("C7Lr")(c,s,!1,function(e){n("q3vC")},"data-v-168b8cc3",null).exports},data:function(){return{lastScroll:0}},computed:a()({},Object(r.c)(["animateOptions"])),methods:a()({},Object(r.b)(["next","last","clickRouteChange"]),{changeAnimation:function(){this.clickRouteChange()},mouseWheel:function(e){var t=this;if(e.timeStamp-this.lastScroll>1e3)if(this.lastScroll=e.timeStamp,e.deltaY>0){var n=this.$route.path;this.next(n).then(function(e){t.$router.push(e)})}else{var o=this.$route.path;this.last(o).then(function(e){t.$router.push(e)})}else console.log("请爱护你的鼠标不要连续滚动！")},swipedown:function(){var e=this,t=this.$route.path;this.next(t).then(function(t){e.$router.push(t)})},swipeup:function(){var e=this,t=this.$route.path;this.last(t).then(function(t){e.$router.push(t)})}})},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{mousewheel:e.mouseWheel}},[n("v-touch",{staticClass:"resume",on:{swipedown:e.swipedown,swipeup:e.swipeup}},[n("div",{staticClass:"nav"},[e._l(this.$router.options.routes,function(t,o){return[n("router-link",{key:o+2,attrs:{to:t.path,exact:""}},[n("i",{staticClass:"iconfont icon-dian nav-item",on:{click:e.changeAnimation}})])]})],2),e._v(" "),n("div",{staticClass:"page"},[n("transition",{attrs:{mode:"out-in",duration:{enter:e.animateOptions.enterTime,leave:e.animateOptions.leaveTime},"leave-active-class":"animated "+e.animateOptions.leave,"enter-active-class":"animated "+e.animateOptions.enter}},[n("router-view")],1)],1),e._v(" "),n("div",{staticClass:"next"},[n("Down")],1)])],1)},staticRenderFns:[]};var m={name:"App",components:{Resume:n("C7Lr")(u,l,!1,function(e){n("gb9Z")},"data-v-5c253920",null).exports}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"all"}},[t("Resume")],1)},staticRenderFns:[]};var p=n("C7Lr")(m,h,!1,function(e){n("O/wa")},null,null).exports,d=n("5inH");o.a.use(d.a);var g=new d.a({mode:"hash",base:Object({NODE_ENV:"production"}).BASE_URL||"",linkActiveClass:"active",routes:[{path:"/",name:"Info",component:function(){return n.e(2).then(n.bind(null,"iNA+"))}},{path:"/contact",name:"Contact",component:function(){return n.e(4).then(n.bind(null,"a4yk"))}},{path:"/skills",name:"Skills",component:function(){return n.e(1).then(n.bind(null,"PwBs"))}},{path:"/profiles",name:"Profiles",component:function(){return n.e(3).then(n.bind(null,"bqvq"))}},{path:"/career",name:"Career",component:function(){return n.e(0).then(n.bind(null,"FtCM"))}}]}),v=n("rVsN"),b=n.n(v),f=n("EkpR"),w=n.n(f),O=n("EoR4"),L={name:"林江函",avatar:n.n(O).a,introduce:"健康, 进步, 发财.",status:[{icon:"icon-icon-",value:"福建宁德\n福鼎",style:{minHeight:"80px",paddingTop:"16px"}},{icon:"icon-xueli",value:"浙江大学城市学院(三本)\n机械设计及其自动化",style:{minHeight:"80px",paddingTop:"19px"}},{icon:"icon--jiehun",value:"1995年10月生\n2018年06月毕业\n未婚",style:{minHeight:"80px",paddingTop:"2px"}}]},k={L0:{NAME:"0-正在学习",COLOR:"rgba(173, 208, 108, 0.2)"},L1:{NAME:"1-粗浅不堪",COLOR:"rgba(155, 196, 74, 0.35)"},L2:{NAME:"2-略知一二",COLOR:"rgba(139, 187, 42, 0.5)"},L3:{NAME:"3-千锤百炼",COLOR:"rgba(78, 175, 142, 0.5)"},L4:{NAME:"4-驾轻就熟",COLOR:"rgba(38, 157, 115, 0.5)"},L5:{NAME:"5-烂熟于心",COLOR:"rgba(0, 140, 91, 0.5)"}},x=[{name:"编程语言",background:"rgba(74, 137, 220, 0.2)",child:[{name:"NodeJS",background:"rgba(74, 137, 220, 0.2)",proficiency:{level:k.L1.NAME,background:k.L1.COLOR},comment:"12323"},{name:"Python",background:"rgba(74, 137, 220, 0.2)",proficiency:{level:k.L3.NAME,background:k.L3.COLOR},comment:""}]},{name:"前端",background:"rgba(59, 175, 218, 0.2)",child:[{name:"Vue全家桶",background:"rgba(59, 175, 218, 0.2)",proficiency:{level:k.L1.NAME,background:k.L1.COLOR},comment:""}]},{name:"桌面端",background:"rgba(55, 188, 155, 0.2)",child:[{name:"PyQt5",background:"rgba(55, 188, 155, 0.2)",proficiency:{level:k.L3.NAME,background:k.L3.COLOR},comment:""}]},{name:"服务端",background:"rgba(140, 193, 82, 0.2)",child:[{name:"Django",background:"rgba(140, 193, 82, 0.2)",proficiency:{level:k.L1.NAME,background:k.L1.COLOR},comment:""}]},{name:"数据库",background:"rgba(246, 187, 66, 0.2)",child:[{name:"MySQL",background:"rgba(246, 187, 66, 0.2)",proficiency:{level:k.L1.NAME,background:k.L1.COLOR},comment:""},{name:"MongoDB",background:"rgba(246, 187, 66, 0.2)",proficiency:{level:k.L1.NAME,background:k.L1.COLOR},comment:""}]},{name:"工具",background:"rgba(232, 13, 24, 0.2)",child:[{name:"Git",background:"rgba(232, 13, 24, 0.2)",proficiency:{level:k.L2.NAME,background:k.L2.COLOR},comment:""},{name:"Doxygen",background:"rgba(232, 13, 24, 0.2)",proficiency:{level:k.L2.NAME,background:k.L2.COLOR},comment:""}]}];o.a.use(r.a);var C=new r.a.Store({state:{routes:g.options.routes,animateOptions:{},showArrow:!0,info:L,skills:x,profiles:[{title:"维护开源例子库",subTitle:"PyQt Demo",skills:"PyQt ...",text:"",github:"https://github.com/PyQt5/PyQt/"},{title:"vue商城",subTitle:"一个简单的PC-WEB电商代理商城",skills:"vue vue-router vuex axios qiniu echart element-ui mavon-editor",text:"这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！",github:""},{title:"node-express-server",subTitle:"电商代理商城服务端",skills:"node express mongoose mongodb express-promise-router ",text:"这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!",github:""}],career:[{time:"2010-2013",text:"从事工业产品设计，主要对产品的外形、拼装等的合理设计，对多种软件如PS、CAD、ProE等使用较多！"},{time:"2013-2015",text:"从事于矿业公司业务部门，主要是对矿山机械的采购、运行、维护等工作.自2014年起开始自学编程知识Html、JavaScript、CSS,并且使用WordPress框架为公司搭建了自己的站点"},{time:"2016-2018",text:"从事前端开发,主要使用Vue技术栈开发了电子商城网站,包括注册,商品列表,新闻,代理人员记录以及后台权限管理等模块,使用NodeJs开发了对应的服务端!"},{time:"2016-2018",text:"从事前端开发,主要使用Vue技术栈开发了电子商城网站,包括注册,商品列表,新闻,代理人员记录以及后台权限管理等模块,使用NodeJs开发了对应的服务端!"},{time:"2016-2018",text:"从事前端开发,主要使用Vue技术栈开发了电子商城网站,包括注册,商品列表,新闻,代理人员记录以及后台权限管理等模块,使用NodeJs开发了对应的服务端!"},{time:"2019-至今",text:"主要前端开发,主要使用Vue技术栈开发了众寻智慧位置是一款在线实时定位的位置数据服务系统，可以结合智能硬件设备实现电子围栏、轨迹追踪、实时定位监控等多种功能，服务于社区矫正、车辆追踪、老年社区等领域"}],contact:{evaluation:["　　选择机械专业 与 计算机方面的发展 ， 就是为了能自动化处理一些机械重复的问题，把更多的时间用于创造和服务。","　　大三开始由比较底层的（例如PLC编程）转向计算机编程，磕磕碰碰中也总结了大量的经验和良好的编程习惯。","　　由于家庭原因，毕业之后在家接外包，虽然赚的钱不多，也积累了一些与客户交流沟通的技巧。","　　也许计算机专业知识很多方面没有深入，但是能够快速把握问题，迅速检索答案，高效解决问题。"],email:"625781186@qq.com",tel:"15259312399",socials:[{url:"https://github.com/625781186",icon:"icon-GitHub"},{url:"https://github.com/PyQt5/PyQt",icon:"icon-GitHub"},{url:"https://blog.pyqt5.com",icon:"icon-csdn"},{url:"https://blog.csdn.net/qq842977873",icon:"icon-csdn"}]},LEVEL:k},mutations:{changeAnimateDirection:function(e,t){e.animateOptions=t},changeShowArrow:function(e){e.showArrow=!e.showArrow},changeSkillsList:function(e,t){e.skills=t}},actions:{next:function(e,t){var n=e.commit,o=e.state;return new b.a(function(e){var i=o.routes.findIndex(function(e){return e.path===t}),a=void 0;a=i+1===o.routes.length?o.routes[0].path:o.routes[i+1].path;n("changeAnimateDirection",{leave:"fadeOutDown",enter:"fadeInDown",leaveTime:300,enterTime:300}),n("changeShowArrow"),e(a),setTimeout(function(){n("changeShowArrow")},o.animateOptions.leaveTime+o.animateOptions.enterTime)})},last:function(e,t){var n=e.commit,o=e.state;return new b.a(function(e){var i=o.routes.findIndex(function(e){return e.path===t}),a=void 0;if(0===i){var r=o.routes.length;a=o.routes[r-1].path}else a=o.routes[i-1].path;n("changeAnimateDirection",{leave:"fadeOutUp",enter:"fadeInUp",leaveTime:800,enterTime:800}),n("changeShowArrow"),e(a),setTimeout(function(){n("changeShowArrow")},o.animateOptions.leaveTime+o.animateOptions.enterTime)})},clickRouteChange:function(e){var t=e.commit,n=e.state;t("changeAnimateDirection",{leave:"zoomOut",enter:"zoomIn",leaveTime:800,enterTime:800}),t("changeShowArrow"),setTimeout(function(){t("changeShowArrow")},n.animateOptions.leaveTime+n.animateOptions.enterTime)},shuffleSkills:function(e){var t=e.commit,n=e.state;t("changeSkillsList",w()(n.skills,{copy:!0}))}}}),A=n("xwKP"),N=n("GTOL"),y=n.n(N);n("Kg7K"),n("CFSk"),n("C4aK");o.a.use(A.a),o.a.use(y.a,{name:"v-touch"}),o.a.config.productionTip=!1,new o.a({el:"#app",router:g,store:C,components:{App:p},template:"<App/>"})},"O/wa":function(e,t){},gb9Z:function(e,t){},q3vC:function(e,t){}},["NHnr"]);