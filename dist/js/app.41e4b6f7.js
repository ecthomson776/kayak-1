(function(t){function a(a){for(var r,l,n=a[0],i=a[1],c=a[2],p=0,v=[];p<n.length;p++)l=n[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&v.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(a);while(v.length)v.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,n=1;n<e.length;n++){var i=e[n];0!==o[i]&&(r=!1)}r&&(s.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},o={app:0},s=[];function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var u=i;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"amber lighten-4"},[e("Nav"),e("v-content",[e("router-view")],1)],1)},s=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-app-bar",{staticClass:"cyan lighten-5",attrs:{app:""}},[e("v-toolbar-title",{staticClass:"headline"},[e("span",{staticClass:"font-weight-light"},[t._v("kustAM.kayaks")])]),e("v-spacer")],1)],1)},n=[],i={},c=i,u=e("2877"),p=e("6544"),v=e.n(p),d=e("40dc"),h=e("2fa4"),f=e("2a7f"),m=Object(u["a"])(c,l,n,!1,null,null,null),g=m.exports;v()(m,{VAppBar:d["a"],VSpacer:h["a"],VToolbarTitle:f["a"]});var b={name:"App",components:{Nav:g},data:function(){return{}}},C=b,x=e("7496"),y=e("a75b"),w=Object(u["a"])(C,o,s,!1,null,null,null),k=w.exports;v()(w,{VApp:x["a"],VContent:y["a"]});var _=e("8c4f"),V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"my-5"},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-card-text",[e("p",{staticClass:"display-1"},[t._v(" Kayak Customiser ")])]),e("v-card-actions",[e("v-btn",{staticClass:"ma-2",attrs:{color:"blue",dark:"",href:"/custom2"}},[t._v("Login\n            "),e("v-icon",{attrs:{dark:"",right:""}},[t._v("mdi-lock-open-variant-outline")])],1)],1)],1)],1)},O=[],j={},S=j,P=e("8336"),R=e("b0af"),T=e("99d9"),I=e("a523"),E=e("132d"),G=Object(u["a"])(S,V,O,!1,null,null,null),M=G.exports;v()(G,{VBtn:P["a"],VCard:R["a"],VCardActions:T["a"],VCardText:T["b"],VContainer:I["a"],VIcon:E["a"]});var A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom"},[e("h1",{staticClass:"ml-12 pa-3"},[t._v("Kayak Customiser")]),e("v-container",{staticClass:"my-5"},[e("v-card",{attrs:{xs12:"",md6:""}},[e("v-flex",{attrs:{wrap:""}},[e("v-radio-group",{staticClass:"pa-3",attrs:{row:""},model:{value:t.colour,callback:function(a){t.colour=a},expression:"colour"}},[e("v-radio",{attrs:{label:"red",color:"red",value:"red"}}),e("v-radio",{attrs:{label:"blue",color:"blue",value:"blue"}}),e("v-radio",{attrs:{label:"yellow",color:"yellow",value:"yellow"}}),e("v-radio",{attrs:{label:"grey",color:"grey",value:"grey"}}),e("v-radio",{attrs:{label:"pink",color:"pink",value:"pink"}}),e("v-radio",{attrs:{label:"green",color:"green",value:"green"}})],1),e("v-btn",{on:{click:t.getkayaks}},[t._v("Get Records")])],1)],1)],1),e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500px"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.colour_test_01,(function(a){return e("v-col",{key:a.id,attrs:{cols:12}},[e("v-card",[e("v-img",{staticClass:"white--text align-end",attrs:{src:a.image,height:"250px"}},[e("v-card-title")],1),e("p",{staticClass:"text-left"},[t._v("Model No: "),e("v-card-text",{staticClass:"text--primary",domProps:{textContent:t._s(a.colour)}})],1)],1)],1)})),1)],1)],1)],1)},B=[],K=(e("ac6a"),e("59ca")),$=e.n(K),N=(e("e71f"),{apiKey:"AIzaSyCRyi6kXBcei6rIOvOYkJEZVqm48DrQtXI",authDomain:"kustam-kayaks.firebaseapp.com",databaseURL:"https://kustam-kayaks.firebaseio.com",projectId:"kustam-kayaks",storageBucket:"kustam-kayaks.appspot.com",messagingSenderId:"321631924376",appId:"1:321631924376:web:59b37e168ef2edd86420ed",measurementId:"G-VCWHV6DKDN"});$.a.initializeApp(N);var D=$.a.firestore(),F=D,J={data:function(){return{colour:"",singleSelect:!0,colour_test_01:[]}},methods:{getkayaks:function(){var t=this;this.colour_test_01=[],F.collection("colour_test_01").where("colour","==",this.colour).get().then((function(a){a.forEach((function(a){var e=a.data();e.id=a.id,t.colour_test_01.push(e)}))}))}}},L=J,Y=e("62ad"),z=e("0e8f"),X=e("adda"),q=e("67b6"),H=e("43a6"),Q=e("0fd9"),U=Object(u["a"])(L,A,B,!1,null,null,null),W=U.exports;v()(U,{VBtn:P["a"],VCard:R["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:Y["a"],VContainer:I["a"],VFlex:z["a"],VImg:X["a"],VRadio:q["a"],VRadioGroup:H["a"],VRow:Q["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom"},[e("h1",{staticClass:"ml-12 pa-3"},[t._v("Kayak Customiser")]),e("v-container",{staticClass:"my-5"},[e("v-card",{attrs:{xs12:"",md6:""}},[e("v-card-title",[t._v("\n      Customisation Options: ")]),e("v-spacer"),e("v-flex",{attrs:{wrap:""}},[e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"Colour:  "},model:{value:t.colour,callback:function(a){t.colour=a},expression:"colour"}},[e("v-radio",{attrs:{label:"Orange",color:"orange",value:"orange"}}),e("v-radio",{attrs:{label:"Green",color:"green",value:"green"}})],1),e("v-spacer"),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"Your height: "},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}},[e("v-radio",{attrs:{label:"< 170cm",value:"h1"}}),e("v-radio",{attrs:{label:"> 171cm",value:"h2"}})],1),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"Your weight:  "},model:{value:t.weight,callback:function(a){t.weight=a},expression:"weight"}},[e("v-radio",{attrs:{label:"40kg - 70kg",value:"w1"}}),e("v-radio",{attrs:{label:"71kg - 100kg",value:"w2"}})],1),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"Features:  "},model:{value:t.features,callback:function(a){t.features=a},expression:"features"}},[e("v-radio",{attrs:{label:"None",value:"none"}}),e("v-radio",{attrs:{label:"Camera Mount",value:"camera mount"}})],1),e("v-btn",{on:{click:t.getkayaks}},[t._v("View Kayak")])],1)],1),t._l(t.prototype1,(function(a){return e("v-card",{key:a.id,staticClass:"mx-auto",attrs:{xs12:"",md6:""}},[e("v-img",{staticClass:"white--text align-end",attrs:{src:a.image,"max-width":"500px",height:"250px"}},[e("v-card-title")],1),e("p",{staticClass:"text-left"},[t._v("CO2 value: "),e("v-card-text",{staticClass:"text--primary",domProps:{textContent:t._s(a.co2)}})],1),e("p",{staticClass:"text-left"},[t._v("Cost: "),e("v-card-text",{staticClass:"text--primary",domProps:{textContent:t._s(a.cost)}})],1)],1)}))],2)],1)},tt=[],at={data:function(){return{colour:"",height:"",weight:"",features:"",singleSelect:!0,prototype1:[]}},methods:{getkayaks:function(){var t=this;this.prototype1=[],F.collection("prototype1").where("colour","==",this.colour).where("height","==",this.height).where("weight","==",this.weight).where("features","==",this.features).get().then((function(a){a.forEach((function(a){var e=a.data();e.id=a.id,t.prototype1.push(e)}))}))}}},et=at,rt=Object(u["a"])(et,Z,tt,!1,null,null,null),ot=rt.exports;v()(rt,{VBtn:P["a"],VCard:R["a"],VCardText:T["b"],VCardTitle:T["c"],VContainer:I["a"],VFlex:z["a"],VImg:X["a"],VRadio:q["a"],VRadioGroup:H["a"],VSpacer:h["a"]});var st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom"},[e("h1",{staticClass:"ml-12 pa-3"},[t._v("Kayak Customiser")]),e("v-container",{staticClass:"my-5",attrs:{fluid:""}},[e("v-card",{attrs:{xs12:"",md6:""}},[e("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:""}},[e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"colour"},model:{value:t.colour,callback:function(a){t.colour=a},expression:"colour"}},[e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-radio",{attrs:{label:"Orange",color:"orange",value:"orange"}})],1),e("v-radio",{attrs:{label:"Green",color:"green",value:"green"}})],1),e("v-spacer"),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"height"},model:{value:t.height,callback:function(a){t.height=a},expression:"height"}},[e("v-radio",{attrs:{label:"h1",value:"h1"}}),e("v-radio",{attrs:{label:"h2",value:"h2"}})],1),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"weight"},model:{value:t.weight,callback:function(a){t.weight=a},expression:"weight"}},[e("v-radio",{attrs:{label:"w1",value:"w1"}}),e("v-radio",{attrs:{label:"w2",value:"w2"}})],1),e("v-radio-group",{staticClass:"pa-3",attrs:{row:"",label:"features"},model:{value:t.features,callback:function(a){t.features=a},expression:"features"}},[e("v-radio",{attrs:{label:"none",value:"none"}}),e("v-radio",{attrs:{label:"Camera Mount",value:"camera mount"}})],1),e("v-btn",{on:{click:t.getkayaks}},[t._v("Get Records")]),e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-responsive",[e("v-img",{staticClass:"white--text align-end",attrs:{src:t.kayak.image,"max-width":"500px",height:"250px"}},[e("v-card-title")],1)],1),e("p",{staticClass:"text-left"},[t._v("CO2 value: "),e("v-card-text",{staticClass:"text--primary",domProps:{textContent:t._s(t.kayak.co2)}})],1),e("p",{staticClass:"text-left"},[t._v("Cost: "),e("v-card-text",{staticClass:"text--primary",domProps:{textContent:t._s(t.kayak.cost)}})],1)],1)],1)],1)],1)],1)},lt=[],nt={data:function(){return{colour:"",height:"",weight:"",features:"",singleSelect:!0,prototype1:[],kayak:[]}},methods:{getkayaks:function(){var t=this;this.prototype1=[],F.collection("prototype1").where("colour","==",this.colour).where("height","==",this.height).where("weight","==",this.weight).where("features","==",this.features).get().then((function(a){a.forEach((function(a){var e=a.data();e.id=a.id,t.prototype1.push(e)}))}))}}},it=nt,ct=e("a722"),ut=e("6b53"),pt=Object(u["a"])(it,st,lt,!1,null,null,null),vt=pt.exports;v()(pt,{VBtn:P["a"],VCard:R["a"],VCardText:T["b"],VCardTitle:T["c"],VContainer:I["a"],VFlex:z["a"],VImg:X["a"],VLayout:ct["a"],VRadio:q["a"],VRadioGroup:H["a"],VResponsive:ut["a"],VSpacer:h["a"]}),r["a"].use(_["a"]);var dt=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/custom",name:"custom",component:W},{path:"/custom2",name:"custom2",component:ot},{path:"/custom3",name:"custom3",component:vt}]}),ht=e("f309");r["a"].use(ht["a"]);var ft=new ht["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:dt,vuetify:ft,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.41e4b6f7.js.map