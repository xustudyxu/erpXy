(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MallXxtxIndex"],{1100:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"error-main"},[0!=t.pageStyle?e("div",{staticClass:"status"},[e("div",{class:t.getCss()}),e("h3",[t._v(t._s(t.getTitle()))]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],attrs:{type:"info"},on:{click:t.errorButton}},[t._v(t._s(t.getButton()))])],1):t._e()])},r=[],o={name:"Error",props:{pageStyle:{type:null,required:!0},showButton:{default:!0,type:Boolean}},data:function(){return{}},watch:{pageTitle:function(t){}},created:function(){},methods:{errorButton:function(){-1==this.pageStyle?this.$router.push("/login"):this.$emit("errorButton")},getTitle:function(){return-1==this.pageStyle?"未登录，请先登录":0==this.pageStyle?"正常状态不显示":1==this.pageStyle?"暂无数据":2==this.pageStyle?"无网络，请检查当前网络":3==this.pageStyle?"网络请求失败，请再次尝试":4==this.pageStyle?this.pageTitle:void 0},getCss:function(){return-1==this.pageStyle?"status-icon no-result":0==this.pageStyle?"status-icon no-network":1==this.pageStyle?"status-icon no-result":2==this.pageStyle?"status-icon no-network":3==this.pageStyle?"status-icon no-network":4==this.pageStyle?"status-icon no-xiangmu":void 0},getButton:function(){return-1==this.pageStyle?"登录":"再试一次"}}},i=o,s=e("2877"),d=Object(s["a"])(i,n,r,!1,null,"409e994e",null);a["a"]=d.exports},"33de":function(t,a,e){"use strict";e.d(a,"Yb",(function(){return r})),e.d(a,"L",(function(){return o})),e.d(a,"M",(function(){return u})),e.d(a,"T",(function(){return c})),e.d(a,"A",(function(){return l})),e.d(a,"Vb",(function(){return h})),e.d(a,"Eb",(function(){return b})),e.d(a,"R",(function(){return y})),e.d(a,"W",(function(){return g})),e.d(a,"ab",(function(){return k})),e.d(a,"O",(function(){return U})),e.d(a,"B",(function(){return x})),e.d(a,"P",(function(){return j})),e.d(a,"C",(function(){return v})),e.d(a,"r",(function(){return D})),e.d(a,"s",(function(){return C})),e.d(a,"Rb",(function(){return _})),e.d(a,"bb",(function(){return P})),e.d(a,"F",(function(){return L})),e.d(a,"K",(function(){return q})),e.d(a,"N",(function(){return w})),e.d(a,"Ab",(function(){return ht})),e.d(a,"zb",(function(){return mt})),e.d(a,"ub",(function(){return O})),e.d(a,"Tb",(function(){return B})),e.d(a,"Ub",(function(){return $})),e.d(a,"n",(function(){return I})),e.d(a,"qb",(function(){return T})),e.d(a,"sb",(function(){return E})),e.d(a,"yb",(function(){return X})),e.d(a,"wb",(function(){return N})),e.d(a,"Z",(function(){return R})),e.d(a,"fb",(function(){return z})),e.d(a,"X",(function(){return F})),e.d(a,"Qb",(function(){return V})),e.d(a,"x",(function(){return J})),e.d(a,"y",(function(){return M})),e.d(a,"nb",(function(){return Z})),e.d(a,"e",(function(){return H})),e.d(a,"eb",(function(){return K})),e.d(a,"db",(function(){return Y})),e.d(a,"cb",(function(){return G})),e.d(a,"Db",(function(){return Q})),e.d(a,"Ob",(function(){return W})),e.d(a,"Nb",(function(){return tt})),e.d(a,"d",(function(){return at})),e.d(a,"lb",(function(){return et})),e.d(a,"Y",(function(){return nt})),e.d(a,"hb",(function(){return rt})),e.d(a,"f",(function(){return ot})),e.d(a,"k",(function(){return it})),e.d(a,"z",(function(){return st})),e.d(a,"w",(function(){return dt})),e.d(a,"Hb",(function(){return ut})),e.d(a,"u",(function(){return pt})),e.d(a,"o",(function(){return ct})),e.d(a,"Xb",(function(){return lt})),e.d(a,"pb",(function(){return ft})),e.d(a,"xb",(function(){return bt})),e.d(a,"g",(function(){return yt})),e.d(a,"kb",(function(){return gt})),e.d(a,"Lb",(function(){return Ut})),e.d(a,"U",(function(){return xt})),e.d(a,"V",(function(){return jt})),e.d(a,"t",(function(){return vt})),e.d(a,"v",(function(){return Dt})),e.d(a,"Pb",(function(){return Ct})),e.d(a,"b",(function(){return _t})),e.d(a,"c",(function(){return Pt})),e.d(a,"Sb",(function(){return Lt})),e.d(a,"D",(function(){return qt})),e.d(a,"tb",(function(){return wt})),e.d(a,"Kb",(function(){return At})),e.d(a,"Ib",(function(){return St})),e.d(a,"Mb",(function(){return Ot})),e.d(a,"jb",(function(){return Bt})),e.d(a,"mb",(function(){return $t})),e.d(a,"m",(function(){return It})),e.d(a,"rb",(function(){return Tt})),e.d(a,"Gb",(function(){return Et})),e.d(a,"l",(function(){return Xt})),e.d(a,"ib",(function(){return kt})),e.d(a,"ob",(function(){return Nt})),e.d(a,"h",(function(){return Rt})),e.d(a,"a",(function(){return zt})),e.d(a,"j",(function(){return Ft})),e.d(a,"i",(function(){return Vt})),e.d(a,"Cb",(function(){return Jt})),e.d(a,"Jb",(function(){return Mt})),e.d(a,"q",(function(){return Zt})),e.d(a,"Bb",(function(){return Ht})),e.d(a,"Fb",(function(){return Kt})),e.d(a,"gb",(function(){return Yt})),e.d(a,"Zb",(function(){return Gt})),e.d(a,"p",(function(){return Qt})),e.d(a,"vb",(function(){return Wt})),e.d(a,"J",(function(){return p})),e.d(a,"H",(function(){return i})),e.d(a,"I",(function(){return s})),e.d(a,"G",(function(){return d})),e.d(a,"S",(function(){return A})),e.d(a,"Q",(function(){return S})),e.d(a,"E",(function(){return m})),e.d(a,"Wb",(function(){return f}));var n=e("80d5"),r={url:"/app/jck/zgrwgysList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},o={url:"/app/dsxj/dsxjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},i={url:"/app/jj/dsjjjgList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},s={url:"/app/jj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},d={url:"/app/jj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},u={url:"/app/dsxj/dsxjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},p={url:"/app/jj/dsjjzqList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},c={url:"/app/dsxj/finishDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},l={url:"/app/dsxj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},h={url:"/app/dsxj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},m={url:"/app/jj/deleteDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},f={url:"/app/jj/setDbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},b={url:"/app/dsxj/getZbjg",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},y={url:"/app/dsxj/execStopDsxj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},g={url:"/app/dsxj/getBjls",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},k={url:"/app/jj/getDsjjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},U={url:"/app/jj/execRevokeDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},x={url:"/app/jj/deleteDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},j={url:"/app/dsxj/execRevokeDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},v={url:"/app/dsxj/deleteDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},D={url:"/app/jj/createDsjjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},C={url:"/app/dsxj/createDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},_={url:"/app/dsxj/saveDsxjXmxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},P={url:"/app/dsxj/getDsxjxmxq",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},L={url:"/app/jj/dsjjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},q={url:"/app/dsxj/dsxjList",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},w={url:"/app/jj/execJbxx",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},A={url:"/app/jj/finishDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},S={url:"/app/jj/execStopDsjj",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},O={url:"app/ananymous/address/getSfcsq",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},B={url:"/app/ananymous/product/searchProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},$={url:"/app/ananymous/product/searchProductList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},I={url:"/app/ananymous/category/category",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},T={url:"/app/ananymous/product/e_product",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},E={url:"/app/ananymous/product/e_product_text",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},X={url:"/app/ananymous/product/supplierList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},N={url:"app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},R={url:"app/ananymous/address/getDefAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},z={url:"app/authentication/order/getLessStock",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},F={url:"app/authentication/chart/listCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},V={url:"app/authentication/chart/saveCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},J={url:"app/authentication/chart/deleteCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},M={url:"app/authentication/chart/deleteCarts",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Z={url:"app/authentication/chart/listOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},H={url:"app/authentication/chart/addCart",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},K={url:"app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Y={url:"app/authentication/invoice/listInvoiceAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},G={url:"app/authentication/order/freight",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Q={url:"app/authentication/address/getYsAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},W={url:"app/authentication/order/placeOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},tt={url:"app/authentication/order/payOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},at={url:"app/ananymous/product/accessoryList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},et={url:"app/authentication/order/listOrderDetailByPro",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},nt={url:"app/authentication/comparision/listComparisionProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},rt={url:"app/ananymous/product/listmyfavorite",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ot={url:"app/authentication/comparision/addComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},it={url:"app/authentication/comparision/cancleComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},st={url:"app/authentication/comparision/deleteComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},dt={url:"app/authentication/comparision/deleteAllComparision",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ut={url:"app/authentication/comparision/listComparisionDetail",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},pt={url:"app/authentication/chart/deleteAccessory",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ct={url:"app/ananymous/product/checkPrice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},lt={url:"app/authentication/order/validateOrderApproal",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ht={url:"/app/ananymous/product/hotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},mt={url:"/app/ananymous/product/dszqhotProduct",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},ft={url:"/app/ananymous/ww/main/proImgList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},bt={url:"/app/authentication/xtgl/hotwordsList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},yt={url:"/app/authentication/xtgl/savehotword",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},gt={url:"/app/authentication/order/getOrderCount",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},kt={url:"/app/ananymous/ww/main/noteTicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ut={url:"/app/authentication/order/myOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},xt={url:"/app/authentication/address/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},jt={url:"/app/authentication/address/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},vt={url:"/app/authentication/address/defaultAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Dt={url:"/app/authentication/address/deleteAddress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ct={url:"/app/authentication/address/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},_t={url:"/app/authentication/invoice/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Pt={url:"/app/authentication/invoice/listAll",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Lt={url:"/app/authentication/invoice/save",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},qt={url:"/app/authentication/invoice/deleteInvoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},wt={url:"/app/authentication/afs/servicesList",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},At={url:"/app/authentication/afs/myAfsOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},St={url:"/app/authentication/order/listOrderLog",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Ot={url:"/app/authentication/order/orderExpress",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Bt={url:"/app/authentication/order/getOrder",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},$t={url:"/app/authentication/order/getOrder_invoice",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},It={url:"/app/authentication/order/cancle",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Tt={url:"/app/authentication/order/getOrder_detail_id",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Et={url:"/app/authentication/approval/list",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Xt={url:"/app/authentication/approval/cancleApproval",method:"",data:"",baseUrl:!0,param:"",token:!0,encryption:!0},Nt={url:"/app/router/getVueRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!0},Rt={url:"/app/ca/login/applogin",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},zt={url:"/app/cfca/certDownload",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Ft={url:"/app/xm/saveKbylbqm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1},Vt=(Object(n["d"])("VUE_APP_CFCA_API"),{url:"/app/ewm/saveEwm",method:"",data:"",baseUrl:Object(n["d"])("VUE_APP_CFCA_API"),param:"",token:!0,encryption:!1}),Jt=(Object(n["d"])("VUE_APP_FILE_API"),Object(n["d"])("VUE_APP_FILE_API"),{url:"/app/router/getVantRoleRouteJson",method:"",data:"",baseUrl:"",param:"",token:!0,encryption:!1}),Mt={url:"/app/login/applogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Zt={url:"/app/login/codelogin",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Ht={url:"",method:"get",data:"",baseUrl:"",param:"",token:!0,encryption:!1},Kt={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Yt={url:"",method:"get",data:"",baseUrl:"",param:"",token:"",encryption:!1},Gt={url:"/app/login/zj/saveJc_pszj",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Qt={url:"/app/login/zj/checkZjhm",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1},Wt={url:"app/qrcode/getParam",method:"",data:"",baseUrl:"",param:"",token:"",encryption:!1}},"445c":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"nav-bar"},[t.headerData.leftText?e("div",{staticClass:"nav-bar-left"},[e("div",{on:{click:function(a){return a.stopPropagation(),t.handelClick(t.headerData.leftUrl)}}},[e("i",{staticClass:"iconfont iconicon-back"}),e("div",{staticClass:"nav-bar-txt"},[t._v(t._s(t.headerData.leftText))])])]):t._e(),e("div",{staticClass:"nav-bar-title"},[t._v(t._s(t.headerData.title))]),e("div",{staticClass:"nav-bar-right"},[t.headerData.rightText?e("div",{staticClass:"nav-bar-txt",on:{click:function(a){return t.handelClick(t.headerData.rightUrl,t.headerData.rightCallBackClick)}}},[t._v(t._s(t.headerData.rightText))]):t._e(),t.headerData.showSearch?e("i",{staticClass:"iconfont iconsousuo",on:{click:function(a){return t.searchClick()}}}):t._e()])])},r=[],o={name:"HeaderBar",props:{headerData:{type:null,required:!0}},data:function(){return{}},created:function(){this.headerData&&(this.headerData.rightCallBackClick||(this.headerData.rightCallBackClick=!1))},methods:{searchClick:function(){this.$bus.$emit("showMeun",!0)},handelClick:function(t,a){if(console.log("targetUrl=====================",t),"back"!==t)if("needConfirm"!==t){if(t)this.$router.push(t);else if(a){var e="callback";this.headerData&&this.headerData.rightText&&(e=this.headerData.rightText),this.$emit("callbackClick",e)}}else this.$emit("on-exit");else this.$router.go(-1)}}},i=o,s=e("2877"),d=Object(s["a"])(i,n,r,!1,null,"416ac0a2",null);a["a"]=d.exports},"57f6":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("headerBar",{attrs:{"header-data":t.headerData}}),e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"common-main box"},[e("div",{staticClass:"common-list"},[e("common-list",{ref:"ggcommonlist",staticClass:"common-list",attrs:{"post-url":t.list.postUrl,"req-data":t.list.reqData,"data-name":t.list.dataName},on:{returnData:function(a){return t.getPrizeLog(a)}}},t._l(t.noticesList,(function(a,n){return e("div",{key:n,staticClass:"list",on:{click:function(e){return t.goMallXxtxInDetail(a)}}},[e("h3",[t._v(t._s(a.title))]),e("div",{staticClass:"info"},[e("span",[e("i",{staticClass:"iconfont iconshijian"}),t._v(" "+t._s(a.createtime)+" ")])])])})),0)],1)])])])],1)},r=[],o=e("445c"),i=e("7a87"),s=e("33de"),d={name:"MallXxtxIndex",components:{headerBar:o["a"],commonList:i["a"]},data:function(){return{list:{items:[],error:!1,postUrl:"",reqData:"",dataName:"",noDataText:""},noticesList:[],headerData:{title:"系统公告",leftUrl:"back",leftText:" "}}},created:function(){this.init()},methods:{init:function(){this.list.postUrl=s["ib"],this.list.reqData={pageno:1,pagerow:10},this.list.dataName="list",this.list.noDataText="暂无更多数据"},getPrizeLog:function(t){this.noticesList=t},goMallXxtxInDetail:function(t){this.$router.push({name:"MallXxtxInDetail",params:{ggxq:t}})}}},u=d,p=e("2877"),c=Object(p["a"])(u,n,r,!1,null,"48d378c9",null);a["default"]=c.exports},"7a87":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"didaList"}},[0==t.pageStyles?e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":t.finishedText,"error-text":t.errorText,"immediate-check":t.firstFresh},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[t._t("default")],2)],1)],1):t.noDataShow?e("div",[e("error-page",{attrs:{"page-style":t.pageStyles},on:{errorButton:t.parentReceive}})],1):t._e()])},r=[],o=(e("99af"),e("1100")),i={components:{errorPage:o["a"]},props:{firstFresh:{type:Boolean,default:!1},postUrl:{type:null,required:!0},dataName:{type:null,required:!0},reqData:{type:null,required:!0},apptypeShow:{type:Boolean,default:!0},noDataShow:{type:Boolean,default:!0}},data:function(){return{list:[],pageStyles:0,loading:!1,finished:!1,isLoading:!1,query:{},pagesize:10,xxList:[],currentPage:1,totalpageno:0,finishedText:"没有更多了",errorText:"请求失败，点击重新加载",total:0}},created:function(){this.reqNewData=this.reqData,console.info("reqData-----------------",this.reqData);var t=this;this.$bus.$on("refList",(function(a){var e=this;t.query=a,t.currentPage=1,t.getListData(a).then((function(t){e.loading=!1,e.totalpageno<=e.currentPage&&(e.finished=!0)}))}))},beforeDestroy:function(){this.$bus.$off("refList")},methods:{getListData:function(){var t=this,a=this.reqData;console.info("query--11--",this.query);if(this.apptypeShow){if(null!=this.query&&""!==this.query){var e={apptype:"APP"};this.query=Object.assign(this.query,e)}else this.query={apptype:"APP"};({pageno:this.currentPage,query:JSON.stringify(this.query)})}else console.log("this.query============================",this.query),this.query.currentPage=this.currentPage;return this.$store.dispatch(this.postUrl,Object.assign(a,this.query)).then((function(a){t.totalpageno=a.totalPages,t.pageStyles=0,0===t.totalpageno&&(t.pageStyles=1),1===t.currentPage?(t.list=t.dataName?a[t.dataName]:a,null!=t.list&&0!==t.list.length||(t.pageStyles=1),t.currentPage++):0===a.length?t.finished=!0:a.totalPages>=t.currentPage?t.list=t.list.concat(t.dataName?a[t.dataName]:a):t.finished=!0,a&&a.title?(t.xxList.data=t.list,t.xxList.title=a.title,t.$emit("returnData",t.xxList)):t.$emit("returnData",t.list)})).catch((function(a){t.$toast(a),t.loading=!1}))},parentReceive:function(){this.onRefresh(this.query)},onLoad:function(){var t=this;this.getListData().then((function(a){t.loading=!1,t.currentPage++,t.totalpageno<t.currentPage&&(t.finished=!0),console.log("this.finished==================================================",t.finished)}))},onRefresh:function(t){var a=this;this.query=null!=t&&""!==t?t:{},this.list=[],this.currentPage=1,this.getListData(1).then((function(){a.isLoading=!1,a.finished=!1}))},hideLoading:function(){this.loading=!1},hideIsLoading:function(){this.isLoading=!1}}},s=i,d=e("2877"),u=Object(d["a"])(s,n,r,!1,null,null,null);a["a"]=u.exports}}]);
//# sourceMappingURL=MallXxtxIndex.52297dce.js.map