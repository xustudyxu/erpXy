(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MyOrder","WdxmBj"],{1100:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-main"},[0!=t.pageStyle?a("div",{staticClass:"status"},[a("div",{class:t.getCss()}),a("h3",[t._v(t._s(t.getTitle()))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},r=[],o={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,"409e994e",null);e["a"]=c.exports},"33de":function(t,e,a){"use strict";a.d(e,"Yb",(function(){return r})),a.d(e,"L",(function(){return o})),a.d(e,"M",(function(){return d})),a.d(e,"T",(function(){return u})),a.d(e,"A",(function(){return p})),a.d(e,"Vb",(function(){return h})),a.d(e,"Eb",(function(){return b})),a.d(e,"R",(function(){return g})),a.d(e,"W",(function(){return y})),a.d(e,"ab",(function(){return v})),a.d(e,"O",(function(){return k})),a.d(e,"B",(function(){return w})),a.d(e,"P",(function(){return _})),a.d(e,"C",(function(){return j})),a.d(e,"r",(function(){return U})),a.d(e,"s",(function(){return L})),a.d(e,"Rb",(function(){return C})),a.d(e,"bb",(function(){return x})),a.d(e,"F",(function(){return P})),a.d(e,"K",(function(){return S})),a.d(e,"N",(function(){return D})),a.d(e,"Ab",(function(){return ht})),a.d(e,"zb",(function(){return mt})),a.d(e,"ub",(function(){return $})),a.d(e,"Tb",(function(){return I})),a.d(e,"Ub",(function(){return E})),a.d(e,"n",(function(){return N})),a.d(e,"qb",(function(){return T})),a.d(e,"sb",(function(){return B})),a.d(e,"yb",(function(){return q})),a.d(e,"wb",(function(){return R})),a.d(e,"Z",(function(){return V})),a.d(e,"fb",(function(){return z})),a.d(e,"X",(function(){return M})),a.d(e,"Qb",(function(){return H})),a.d(e,"x",(function(){return F})),a.d(e,"y",(function(){return J})),a.d(e,"nb",(function(){return K})),a.d(e,"e",(function(){return X})),a.d(e,"eb",(function(){return G})),a.d(e,"db",(function(){return Q})),a.d(e,"cb",(function(){return W})),a.d(e,"Db",(function(){return Z})),a.d(e,"Ob",(function(){return Y})),a.d(e,"Nb",(function(){return tt})),a.d(e,"d",(function(){return et})),a.d(e,"lb",(function(){return at})),a.d(e,"Y",(function(){return nt})),a.d(e,"hb",(function(){return rt})),a.d(e,"f",(function(){return ot})),a.d(e,"k",(function(){return it})),a.d(e,"z",(function(){return st})),a.d(e,"w",(function(){return ct})),a.d(e,"Hb",(function(){return dt})),a.d(e,"u",(function(){return lt})),a.d(e,"o",(function(){return ut})),a.d(e,"Xb",(function(){return pt})),a.d(e,"pb",(function(){return ft})),a.d(e,"xb",(function(){return bt})),a.d(e,"g",(function(){return gt})),a.d(e,"kb",(function(){return yt})),a.d(e,"Lb",(function(){return kt})),a.d(e,"U",(function(){return wt})),a.d(e,"V",(function(){return _t})),a.d(e,"t",(function(){return jt})),a.d(e,"v",(function(){return Ut})),a.d(e,"Pb",(function(){return Lt})),a.d(e,"b",(function(){return Ct})),a.d(e,"c",(function(){return xt})),a.d(e,"Sb",(function(){return Pt})),a.d(e,"D",(function(){return St})),a.d(e,"tb",(function(){return Dt})),a.d(e,"Kb",(function(){return Ot})),a.d(e,"Ib",(function(){return At})),a.d(e,"Mb",(function(){return $t})),a.d(e,"jb",(function(){return It})),a.d(e,"mb",(function(){return Et})),a.d(e,"m",(function(){return Nt})),a.d(e,"rb",(function(){return Tt})),a.d(e,"Gb",(function(){return Bt})),a.d(e,"l",(function(){return qt})),a.d(e,"ib",(function(){return vt})),a.d(e,"ob",(function(){return Rt})),a.d(e,"h",(function(){return Vt})),a.d(e,"a",(function(){return zt})),a.d(e,"j",(function(){return Mt})),a.d(e,"i",(function(){return Ht})),a.d(e,"Cb",(function(){return Ft})),a.d(e,"Jb",(function(){return Jt})),a.d(e,"q",(function(){return Kt})),a.d(e,"Bb",(function(){return Xt})),a.d(e,"Fb",(function(){return Gt})),a.d(e,"gb",(function(){return Qt})),a.d(e,"Zb",(function(){return Wt})),a.d(e,"p",(function(){return Zt})),a.d(e,"vb",(function(){return Yt})),a.d(e,"J",(function(){return l})),a.d(e,"H",(function(){return i})),a.d(e,"I",(function(){return s})),a.d(e,"G",(function(){return c})),a.d(e,"S",(function(){return O})),a.d(e,"Q",(function(){return A})),a.d(e,"E",(function(){return m})),a.d(e,"Wb",(function(){return f}));var n=a("80d5"),r={url:"/app/jck/zgrwgysList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},o={url:"/app/dsxj/dsxjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},i={url:"/app/jj/dsjjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},s={url:"/app/jj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},c={url:"/app/jj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},d={url:"/app/dsxj/dsxjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},l={url:"/app/jj/dsjjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},u={url:"/app/dsxj/finishDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},p={url:"/app/dsxj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},h={url:"/app/dsxj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},m={url:"/app/jj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},f={url:"/app/jj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},b={url:"/app/dsxj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},g={url:"/app/dsxj/execStopDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},y={url:"/app/dsxj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},v={url:"/app/jj/getDsjjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},k={url:"/app/jj/execRevokeDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},w={url:"/app/jj/deleteDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},_={url:"/app/dsxj/execRevokeDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},j={url:"/app/dsxj/deleteDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},U={url:"/app/jj/createDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},L={url:"/app/dsxj/createDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},C={url:"/app/dsxj/saveDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},x={url:"/app/dsxj/getDsxjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},P={url:"/app/jj/dsjjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},S={url:"/app/dsxj/dsxjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},D={url:"/app/jj/execJbxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},O={url:"/app/jj/finishDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},A={url:"/app/jj/execStopDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},$={url:"app/ananymous/address/getSfcsq",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},I={url:"/app/ananymous/product/searchProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},E={url:"/app/ananymous/product/searchProductList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},N={url:"/app/ananymous/category/category",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},T={url:"/app/ananymous/product/e_product",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},B={url:"/app/ananymous/product/e_product_text",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},q={url:"/app/ananymous/product/supplierList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},R={url:"app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},V={url:"app/ananymous/address/getDefAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},z={url:"app/authentication/order/getLessStock",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},M={url:"app/authentication/chart/listCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},H={url:"app/authentication/chart/saveCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},F={url:"app/authentication/chart/deleteCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},J={url:"app/authentication/chart/deleteCarts",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},K={url:"app/authentication/chart/listOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},X={url:"app/authentication/chart/addCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},G={url:"app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Q={url:"app/authentication/invoice/listInvoiceAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},W={url:"app/authentication/order/freight",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Z={url:"app/authentication/address/getYsAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Y={url:"app/authentication/order/placeOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},tt={url:"app/authentication/order/payOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},et={url:"app/ananymous/product/accessoryList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},at={url:"app/authentication/order/listOrderDetailByPro",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},nt={url:"app/authentication/comparision/listComparisionProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},rt={url:"app/ananymous/product/listmyfavorite",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ot={url:"app/authentication/comparision/addComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},it={url:"app/authentication/comparision/cancleComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},st={url:"app/authentication/comparision/deleteComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ct={url:"app/authentication/comparision/deleteAllComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},dt={url:"app/authentication/comparision/listComparisionDetail",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},lt={url:"app/authentication/chart/deleteAccessory",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ut={url:"app/ananymous/product/checkPrice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},pt={url:"app/authentication/order/validateOrderApproal",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ht={url:"/app/ananymous/product/hotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},mt={url:"/app/ananymous/product/dszqhotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ft={url:"/app/ananymous/ww/main/proImgList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},bt={url:"/app/authentication/xtgl/hotwordsList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},gt={url:"/app/authentication/xtgl/savehotword",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},yt={url:"/app/authentication/order/getOrderCount",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},vt={url:"/app/ananymous/ww/main/noteTicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},kt={url:"/app/authentication/order/myOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},wt={url:"/app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},_t={url:"/app/authentication/address/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},jt={url:"/app/authentication/address/defaultAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ut={url:"/app/authentication/address/deleteAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Lt={url:"/app/authentication/address/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ct={url:"/app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},xt={url:"/app/authentication/invoice/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Pt={url:"/app/authentication/invoice/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},St={url:"/app/authentication/invoice/deleteInvoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Dt={url:"/app/authentication/afs/servicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ot={url:"/app/authentication/afs/myAfsOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},At={url:"/app/authentication/order/listOrderLog",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},$t={url:"/app/authentication/order/orderExpress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},It={url:"/app/authentication/order/getOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Et={url:"/app/authentication/order/getOrder_invoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Nt={url:"/app/authentication/order/cancle",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Tt={url:"/app/authentication/order/getOrder_detail_id",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Bt={url:"/app/authentication/approval/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},qt={url:"/app/authentication/approval/cancleApproval",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Rt={url:"/app/router/getVueRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},Vt={url:"/app/ca/login/applogin",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},zt={url:"/app/cfca/certDownload",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Mt={url:"/app/xm/saveKbylbqm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Ht=(Object(n["d"])("VUE_APP_CFCA_API"),{url:"/app/ewm/saveEwm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1}),Ft=(Object(n["d"])("VUE_APP_FILE_API"),Object(n["d"])("VUE_APP_FILE_API"),{url:"/app/router/getVantRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!1}),Jt={url:"/app/login/applogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Kt={url:"/app/login/codelogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Xt={url:"",method:"get",data:"",baseUrl:"",param:"",token:!0,encryption:!1},Gt={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Qt={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Wt={url:"/app/login/zj/saveJc_pszj",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Zt={url:"/app/login/zj/checkZjhm",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Yt={url:"app/qrcode/getParam",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1}},"445c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav-bar"},[t.headerData.leftText?a("div",{staticClass:"nav-bar-left"},[a("div",{on:{click:function(e){return e.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[a("i",{staticClass:"iconfont iconicon-back"}),a("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),a("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),a("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?a("div",{staticClass:"nav-bar-txt",on:{click:function(e){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?a("i",{staticClass:"iconfont iconsousuo",on:{click:function(e){return t.searchClick()}}}):t._e()])])},r=[],o={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,e){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(e){var a="callback";this.headerData&&this.headerData.rightText&&(a=this.headerData.rightText),this.$emit("callbackClick",a)}}else this.$emit("on-exit");else this.$router.go(-1)}}},i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,"416ac0a2",null);e["a"]=c.exports},"510f":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return d}));a("a4d3"),a("4de4"),a("c975"),a("a434"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b");var n=a("ade3"),r=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={mounted:function(){},data:function(){return{}},methods:{goPage:function(t,e){this.$store.dispatch("router/setPageParams",e),this.$router.push({name:t,params:{keyName:e}})},getParams:function(){return this.$store.state.router.pageParams}},beforeRouteEnter:function(t,e,a){a((function(e){if("MhHome"!==t.name&&"MallHome"!==t.name){var a=e.$store.state.router.keepAlive,n=a.indexOf(t.name);-1===n&&a.push(t.name),e.$store.commit("router/SET_KEEP_ALIVE",a)}else e.$store.commit("router/SET_KEEP_ALIVE",[]);console.log("PageRoute=进入页面==",a)}))},beforeRouteLeave:function(t,e,a){var n=[];if(n=this.$store.state.router.keepAlive,"GysXmbm"===e.name){var r=n.indexOf(e.name);n.splice(r,1)}var o=n.indexOf(e.name),i=n.indexOf(t.name);-1!==i&&n.splice(o,1);for(var s=[],c=0;c<this.$store.state.router.footMeun.length;c++)s.push(this.$store.state.router.footMeun[c].component);var d=s.indexOf(e.name),l=s.indexOf(t.name);-1!==d&&-1!==l&&n.splice(o,1),console.log("PageRoute=退出页面======================",n),this.$store.commit("router/SET_KEEP_ALIVE",n),a()}},c={mounted:function(){var t=this;window["showSoftKeyBoard"]=function(e){console.info("showSoftKeyBoard-----",e),t.Native_ShowSoftKeyBoard=e},window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ShowSoftKeyBoard:"",Native_ScanData:{},Native_PhoneImageData:{},Native_CaLoad:"",Native_CaList:{}}},computed:{},methods:{NativeLoadCA:function(){var t=this;try{this.Native_CaLoad=window.myapp.LoadCA(),console.info("NativeLoadCA======",window.myapp.LoadCA())}catch(e){console.log(e)}this.$bridge.callhandler("LoadCA","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_CaLoad=a}))},NativeGetAllCAInfo:function(){try{console.info("NativeGetAllCAInfo======",window.myapp.getAllCAInfo());var t=window.myapp.getAllCAInfo();this.Native_CaList=JSON.parse(t)}catch(e){console.log(e)}this.$bridge.callhandler("getAllCAInfo",(function(t){}))},NativeGetOnelCAInfo:function(t){try{console.info("NativeGetAllCAInfo======",window.myapp.getOneCAInfo())}catch(e){console.log(e)}this.$bridge.callhandler("getOneCAInfo",t,(function(t){}))},NativeChangePin:function(t){try{window.myapp.changePin(t)}catch(e){console.log(e)}this.$bridge.callhandler("changePin",t,(function(t){}))},NativeEnvelopeDecrypt:function(t){try{window.myapp.envelopeDecrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeDecrypt",t,(function(t){}))},NativeEnvelopeEncrypt:function(t){try{window.myapp.envelopeEncrypt(t)}catch(e){console.log(e)}this.$bridge.callhandler("envelopeEncrypt",t,(function(t){}))}}},d={mounted:function(){var t=this;window["getRotuerPage"]=function(e){return t.$store.state.router.keepAlive},window["updateScanData"]=function(e){console.info("updateScan======",e),t.Native_ScanData=e},window["updateHandImage"]=function(e){t.Native_PhoneImageData=e}},data:function(){return{Native_ScanData:{},Native_PhoneImageData:{}}},computed:{},methods:{NativeAddPush:function(t){try{window.myapp.addPush(t)}catch(e){console.log(e)}this.$bridge.callhandler("addPush",t,(function(t){}))},NativeDissPush:function(){try{window.myapp.dissPush()}catch(t){console.log(t)}this.$bridge.callhandler("dissPush",(function(t){}))},NativeDissDialog:function(){try{window.myapp.dissDialog()}catch(t){console.log(t)}this.$bridge.callhandler("dissDialog",(function(t){}))},NativeLoginAction:function(t){try{window.myapp.loginAction(t)}catch(e){console.log(e)}this.$bridge.callhandler("loginAction",t,(function(t){}))},NativeCheakUpdate:function(){try{window.myapp.cheakUpdate()}catch(t){console.log(t)}this.$bridge.callhandler("cheakUpdate",(function(t){}))},NativeGetLjSize:function(){try{window.myapp.getlj()}catch(t){console.log(t)}this.$bridge.callhandler("getlj",(function(t){}))},NativeCleanLj:function(){try{window.myapp.cleanlj()}catch(t){console.log(t)}this.$bridge.callhandler("cleanlj",(function(t){}))},NativeDownFiles:function(t){try{window.myapp.downloadFile(t)}catch(e){console.log(e)}this.$bridge.callhandler("downloadFile",String(t),(function(t){}))},NativeScan:function(){var t=this;try{window.myapp.goScanView()}catch(e){console.log(e)}this.$bridge.callhandler("goScanView","{page:1}",(function(e){var a=JSON.parse(e);console.log("goScanView------",e),t.Native_ScanData=a}))},NativePhone:function(t){var e=this;try{window.myapp.goIDCards(t)}catch(a){console.log(a)}this.$bridge.callhandler("goIDCards",t,(function(t){var a=JSON.parse(t);console.log("goIDCards------",a),e.Native_PhoneImageData=a}))},NativeHandSing:function(){var t=this;try{window.myapp.goHandWriteView()}catch(e){console.log(e)}this.$bridge.callhandler("goHandWriteView",(function(e){t.Native_PhoneImageData=e}))},NativeCallPhone:function(t){try{window.myapp.call(t)}catch(e){console.log(e)}this.$bridge.callhandler("call",t,(function(t){}))},NativeUpdateImage:function(){try{window.myapp.CameraOrImage()}catch(t){console.log(t)}this.$bridge.callhandler("CameraOrImage",(function(t){}))}}};i({onQueryChange:function(t){this.query=t},blurInput:function(){this.$refs.searchBox.blur()},addQuery:function(t){this.$refs.searchBox.setQuery(t)},saveSearch:function(){this.updateHostorList(this.query)}},Object(r["b"])(["updateHostorList","deleteSearchHistory"])),i({wybmAction:function(){this.wybmfbAction()}},Object(r["b"])(["wybmfbAction"]))},"5e2c":function(t,e,a){t.exports=a.p+"img/no-img.3caca518.png"},"651f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"scrollTop",on:{click:t.toTop}},[t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-icon"},[a("i",{staticClass:"iconfont iconfanhuidingbu"})])}],o={name:"ScrollTop",data:function(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){var t=this.scrollTop>300;return t}},mounted:function(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop:function(t){if(!this.scrollState){this.scrollState=1,t.preventDefault();var e=document.documentElement.scrollTop||document.body.scrollTop;console.log("dis---------------------------------",e);var a=this;this.time=setInterval((function(){a.gotoTop(a.scrollTop-a.dParams)}),10)}},gotoTop:function(t){this.dParams+=20,t=t>0?t:0,document.documentElement.scrollTop=t,document.body.scrollTop=t,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,"4a569401",null);e["a"]=c.exports},"8a16":function(t,e,a){"use strict";var n=a("9403"),r=a.n(n);r.a},"8dc2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("headerBar",{attrs:{"header-data":t.headerData}}),a("div",{staticClass:"container-tab"},[a("van-tabs",{staticClass:"tabs-sticky",attrs:{swipeable:"",animated:"",sticky:""},on:{change:function(e){return t.change()}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(e,n){return a("van-tab",{key:n,attrs:{title:e}},[0===t.pageStyles?a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.orderList,(function(e,n){return a("div",{key:n,staticClass:"order-item van-clearfix"},[a("div",{staticClass:"order-loop"},[a("div",{staticClass:"order-tit"},[a("div",{staticClass:"left"},[t._v(t._s(e.gysmc))]),a("div",{staticClass:"right"},[a("font",{staticClass:"red"},[t._v(t._s(e.statusValue))])],1)]),t._l(e.detailList,(function(r,o){return a("div",{key:o},[a("div",{staticClass:"order-con",style:e.detailList.length>1?"margin-top:20px":""},[a("div",{staticClass:"goods-img",on:{click:function(e){return t.imgPreview(r.img?r.img:t.defaultImg)}}},[a("img",{attrs:{src:r.img,onerror:t.defaultImg}})]),a("div",{staticClass:"goods-name"},[a("div",{staticClass:"name",on:{click:function(e){return t.toOrderSnapshot(r.id)}}},[t._v(t._s(r.product_name))]),a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v(t._s(r.sourceName))])],1),a("div",{staticClass:"goods-price"},[a("div",{staticClass:"jiage"},[t._v("¥"+t._s(r.price))]),a("div",{staticClass:"shuliang"},[t._v("× "+t._s(r.total))]),a("div",{staticClass:"pingjia"},[e.status>=35&&55!==e.status&&2!==r.evaluation_status?a("van-button",{attrs:{plain:"",size:"small"},on:{click:function(e){return t.goorderevaluation(r.id)}}},[t._v("评价")]):t._e(),2===r.evaluation_status?a("div",{staticClass:"btn"},[t._v("已评价")]):t._e()],1)])]),r.accessorList.length>0&&r.check?a("div",{staticClass:"common-more",on:{click:function(e){return t.showMore1(n,o)}}},[a("div",{staticClass:"more"},[a("em",[t._v("隐藏")])])]):t._e(),r.accessorList.length>0&&!r.check?a("div",{staticClass:"common-more",on:{click:function(e){return t.showMore1(n,o)}}},[a("div",{staticClass:"more"},[a("em",[t._v("显示")])])]):t._e(),r.check?a("div",{staticClass:"accessories"},t._l(r.accessorList,(function(e,n){return a("div",{key:n,staticClass:"accessories-list"},[a("div",{staticClass:"accessories-tit"},[t._v(t._s(e.name))]),a("div",{staticClass:"accessories-info"},[t._v("¥"+t._s(e.price))])])})),0):t._e()])})),a("div",{staticClass:"order-foot"},[a("van-button",{attrs:{plain:"",size:"small"},on:{click:function(a){return t.goorderdetail(e.id)}}},[t._v("订单详情")]),e.status>=15&&e.status<35?a("van-button",{attrs:{plain:"",size:"small"},on:{click:function(a){return t.cancleOrder(e.id)}}},[t._v("撤销订单")]):t._e(),30===e.status?a("van-button",{attrs:{plain:"",size:"small"},on:{click:function(a){return t.goodsQs(e.id)}}},[t._v("签收")]):t._e()],1)],2)])})),0):t._e(),1===t.pageStyles?a("div",[a("error-page",{attrs:{"page-style":t.pageStyles},on:{errorButton:t.parentReceive}})],1):t._e()],1)})),1)],1),a("Backtop",{staticClass:"scrollTop-bar"})],1)},r=[],o=(a("a434"),a("5319"),a("445c")),i=a("1100"),s=a("510f"),c=a("28a2"),d=a("33de"),l=a("651f"),u={name:"MyOrder",components:{headerBar:o["a"],errorPage:i["a"],Backtop:l["a"]},mixins:[s["d"]],data:function(){return{state:!0,tabs:["全部","待发货","待收货","已签收"],loading:!0,finished:!1,defaultImg:'this.src="'+a("5e2c")+'"',check:!1,list:{items:[],error:!1,postUrl:"",reqData:"",dataName:"",noDataText:""},pageStyles:0,SearchInput:{ddbh:"",ddzt:"",sfddh:"",fkzt:"",kssj:["",""]},active:0,checked:!0,orderList:[],qbList:[],dfhList:[],dshList:[],ywcList:[],headerData:{title:"我的订单",leftUrl:"back",leftText:" "},currentPage:1,totalPages:0}},created:function(){var t=this;this.$bus.$on("pjSearch",(function(){t.change()})),this.$route.params&&this.$route.params.cs&&(this.active=this.$route.params.cs),this.init()},methods:{imgPreview:function(t){var e=[];e.push(t),Object(c["a"])({images:e,loop:!1})},goodsQs:function(t){var e=this;this.$store.dispatch("member/signOrderAction",{e_order_id:t}).then((function(t){e.$toast.success("签收成功"),e.change()})).catch((function(){e.loading=!1}))},showMore1:function(t,e){this.orderList[t].detailList[e].check=!this.orderList[t].detailList[e].check,this.orderList[t].detailList.splice(e,1,this.orderList[t].detailList[e])},showMore2:function(t,e){this.dfhList[t].detailList[e].check=!this.dfhList[t].detailList[e].check,this.dfhList[t].detailList.splice(e,1,this.dfhList[t].detailList[e])},showMore3:function(t,e){this.dshList[t].detailList[e].check=!this.dshList[t].detailList[e].check,this.dshList[t].detailList.splice(e,1,this.dshList[t].detailList[e])},showMore4:function(t,e){this.ywcList[t].detailList[e].check=!this.ywcList[t].detailList[e].check,this.ywcList[t].detailList.splice(e,1,this.ywcList[t].detailList[e])},getPrizeLog:function(t){if(0===this.active){this.qbList=t||[];for(var e=0;e<this.qbList.length;e++)for(var a=0;a<this.qbList[e].detailList.length;a++)this.qbList[e].detailList[a].check=!1}if(1===this.active){this.dfhList=t||[];for(var n=0;n<this.dfhList.length;n++)for(var r=0;r<this.dfhList[n].detailList.length;r++)this.dfhList[n].detailList[r].check=!1}if(2===this.active){this.dshList=t||[];for(var o=0;o<this.dshList.length;o++)for(var i=0;i<this.dshList[o].detailList.length;i++)this.dshList[o].detailList[i].check=!1}if(3===this.active){this.ywcList=t||[];for(var s=0;s<this.ywcList.length;s++)for(var c=0;c<this.ywcList[s].detailList.length;c++)this.ywcList[s].detailList[c].check=!1}},toOrderSnapshot:function(t){this.$store.commit("goods/SET_SPID",t),this.$router.push({name:"OrderSnapshot"})},parentReceive:function(){this.change()},init:function(){var t=this;if(this.state){this.state=!1;var e="";0===this.active&&(e=""),1===this.active&&(e="dfh"),2===this.active&&(e="dsh"),3===this.active&&(e="dpj");var a={pageno:this.currentPage,pagerow:10,order_status_query:this.SearchInput.ddzt,order_ddbh_query:this.SearchInput.ddbh,order_pay_state_query:this.SearchInput.fkzt,third_order_id_query:this.SearchInput.sfddh,kssj_query:this.SearchInput.kssj[0].replace("-","").replace("-","").replace(" ","").replace(":","").replace(":",""),jssj_query:this.SearchInput.kssj[1].replace("-","").replace("-","").replace(" ","").replace(":","").replace(":",""),query:e};d["Lb"].data=a,this.asyncApiModule(d["Lb"]).then((function(e){if(t.loading=!1,t.totalPages=e.totalPages,t.currentPage++,t.state=!0,e.list){t.pageStyles=0;for(var a=0;a<e.list.length;a++)e.list[a].check=!1,t.orderList.push(e.list[a]);t.currentPage>e.totalPages?t.finished=!0:t.finished=!1}else t.pageStyles=1,t.finished=!0}))}},onLoad:function(){this.finished=!1,this.init()},change:function(){this.pageStyles=0,this.orderList=[],this.loading=!0,this.finished=!1,this.currentPage=1,this.init()},cancleOrder:function(t){var e=this;this.$dialog.confirm({message:"确认撤销订单么?"}).then((function(a){d["m"].data={e_order_id:t},e.asyncApiModule(d["m"]).then((function(t){e.$toast.success("撤销成功"),e.change()})).catch((function(){e.loading=!1}))})).catch((function(t){}))},goBack:function(){this.$router.back()},goAddressadd:function(){this.$router.push({name:"AddressAdd"})},goorderdetail:function(t){this.$store.commit("member/SET_ORDERID",t),this.$router.push({name:"OrderDetail"})},goorderevaluation:function(t){this.$store.commit("member/SET_ORDERID",t),this.$router.push({name:"OrderEvaluation"})},goorderexpress:function(t){this.$store.commit("member/SET_ORDERID",t),this.$router.push("OrderExpress")}}},p=u,h=(a("8a16"),a("2877")),m=Object(h["a"])(p,n,r,!1,null,"40ca6789",null);e["default"]=m.exports},9403:function(t,e,a){}}]);
//# sourceMappingURL=MyOrder.3e925e24.js.map