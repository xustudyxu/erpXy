(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KqTj", "WdxmBj"], {
            "143d": function (t, e, i) {
                "use strict";
                i.d(e, "b", (function () {
                        return o
                    })),
                i.d(e, "a", (function () {
                        return a
                    }));
                var n = i("93a9"),
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                r = "=";
                function o(t) {
                    var e,
                    i,
                    n = "";
                    for (e = 0; e + 3 <= t.length; e += 3)
                        i = parseInt(t.substring(e, e + 3), 16), n += s.charAt(i >> 6) + s.charAt(63 & i);
                    e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16), n += s.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16), n += s.charAt(i >> 2) + s.charAt((3 & i) << 4));
                    while ((3 & n.length) > 0)
                        n += r;
                    return n
                }
                function a(t) {
                    var e,
                    i = "",
                    o = 0,
                    a = 0;
                    for (e = 0; e < t.length; ++e) {
                        if (t.charAt(e) == r)
                            break;
                        var h = s.indexOf(t.charAt(e));
                        h < 0 || (0 == o ? (i += Object(n["b"])(h >> 2), a = 3 & h, o = 1) : 1 == o ? (i += Object(n["b"])(a << 2 | h >> 4), a = 15 & h, o = 2) : 2 == o ? (i += Object(n["b"])(a), i += Object(n["b"])(h >> 2), a = 3 & h, o = 3) : (i += Object(n["b"])(a << 2 | h >> 4), i += Object(n["b"])(15 & h), o = 0))
                    }
                    return 1 == o && (i += Object(n["b"])(a << 2)),
                    i
                }
            },
            "1ff3": function (t, e, i) {
                "use strict";
                (function (t) {
                    i.d(e, "a", (function () {
                            return a
                        }));
                    var n,
                    s = i("143d"),
                    r = i("ea6a"),
                    o = "undefined" !== typeof t ? null === (n = Object({
                                NODE_ENV: "production",
                                VUE_APP_API: "http://119.3.183.241:8080/gqcgys",
                                VUE_APP_BASE_API: "http://119.3.183.241:8080/gqcgys",
                                VUE_APP_CFCA_API: "http://10.1.57.244:8081/thirdparty",
                                VUE_APP_FILE_API: "http://119.3.183.241:8080/gqcgys",
                                VUE_APP_name: "app",
                                VUE_APP_SC_BASE_API: "http://119.3.183.241:8081/xyshop",
                                VUE_APP_Type: "APP",
                                VUE_APP_VERSION: "1.81",
                                BASE_URL: ""
                            })) || void 0 === n ? void 0 : n.npm_package_version : void 0,
                    a = function () {
                        function t(t) {
                            void 0 === t && (t = {}),
                            t = t || {},
                            this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024,
                            this.default_public_exponent = t.default_public_exponent || "010001",
                            this.log = t.log || !1,
                            this.key = null
                        }
                        return t.prototype.setKey = function (t) {
                            this.log && this.key && console.warn("A key was already set, overriding existing."),
                            this.key = new r["a"](t)
                        },
                        t.prototype.setPrivateKey = function (t) {
                            this.setKey(t)
                        },
                        t.prototype.setPublicKey = function (t) {
                            this.setKey(t)
                        },
                        t.prototype.decrypt = function (t) {
                            try {
                                return this.getKey().decrypt(Object(s["a"])(t))
                            } catch (e) {
                                return !1
                            }
                        },
                        t.prototype.encrypt = function (t) {
                            try {
                                return Object(s["b"])(this.getKey().encrypt(t))
                            } catch (e) {
                                return !1
                            }
                        },
                        t.prototype.sign = function (t, e, i) {
                            try {
                                return Object(s["b"])(this.getKey().sign(t, e, i))
                            } catch (n) {
                                return !1
                            }
                        },
                        t.prototype.verify = function (t, e, i) {
                            try {
                                return this.getKey().verify(t, Object(s["a"])(e), i)
                            } catch (n) {
                                return !1
                            }
                        },
                        t.prototype.getKey = function (t) {
                            if (!this.key) {
                                if (this.key = new r["a"], t && "[object Function]" === {}
                                    .toString.call(t))
                                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                                this.key.generate(this.default_key_size, this.default_public_exponent)
                            }
                            return this.key
                        },
                        t.prototype.getPrivateKey = function () {
                            return this.getKey().getPrivateKey()
                        },
                        t.prototype.getPrivateKeyB64 = function () {
                            return this.getKey().getPrivateBaseKeyB64()
                        },
                        t.prototype.getPublicKey = function () {
                            return this.getKey().getPublicKey()
                        },
                        t.prototype.getPublicKeyB64 = function () {
                            return this.getKey().getPublicBaseKeyB64()
                        },
                        t.version = o,
                        t
                    }
                    ()
                }).call(this, i("4362"))
            },
            "445c": function (t, e, i) {
                "use strict";
                var n = function () {
                    var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                    return i("header", {
                        staticClass: "nav-bar"
                    }, [t.headerData.leftText ? i("div", {
                                staticClass: "nav-bar-left"
                            }, [i("div", {
                                        on: {
                                            click: function (e) {
                                                return e.stopPropagation(),
                                                t.handelClick(t.headerData.leftUrl)
                                            }
                                        }
                                    }, [i("i", {
                                                staticClass: "iconfont iconicon-back"
                                            }), i("div", {
                                                staticClass: "nav-bar-txt"
                                            }, [t._v(t._s(t.headerData.leftText))])])]) : t._e(), i("div", {
                                staticClass: "nav-bar-title"
                            }, [t._v(t._s(t.headerData.title))]), i("div", {
                                staticClass: "nav-bar-right"
                            }, [t.headerData.rightText ? i("div", {
                                        staticClass: "nav-bar-txt",
                                        on: {
                                            click: function (e) {
                                                return t.handelClick(t.headerData.rightUrl, t.headerData.rightCallBackClick)
                                            }
                                        }
                                    }, [t._v(t._s(t.headerData.rightText))]) : t._e(), t.headerData.showSearch ? i("i", {
                                        staticClass: "iconfont iconsousuo",
                                        on: {
                                            click: function (e) {
                                                return t.searchClick()
                                            }
                                        }
                                    }) : t._e()])])
                },
                s = [],
                r = {
                    name: "HeaderBar",
                    props: {
                        headerData: {
                            type: null,
                            required: !0
                        }
                    },
                    data: function () {
                        return {}
                    },
                    created: function () {
                        this.headerData && (this.headerData.rightCallBackClick || (this.headerData.rightCallBackClick = !1))
                    },
                    methods: {
                        searchClick: function () {
                            this.$bus.$emit("showMeun", !0)
                        },
                        handelClick: function (t, e) {
                            if (console.log("targetUrl=====================", t), "back" !== t)
                                if ("needConfirm" !== t) {
                                    if (t)
                                        this.$router.push(t);
                                    else if (e) {
                                        var i = "callback";
                                        this.headerData && this.headerData.rightText && (i = this.headerData.rightText),
                                        this.$emit("callbackClick", i)
                                    }
                                } else
                                    this.$emit("on-exit");
                            else
                                this.$router.go(-1)
                        }
                    }
                },
                o = r,
                a = i("2877"),
                h = Object(a["a"])(o, n, s, !1, null, "416ac0a2", null);
                e["a"] = h.exports
            },
            "4abd": function (t, e, i) {
                "use strict";
                var n = {
                    NOLOGIN: -1,
                    NOMORE: 0,
                    NODATA: 1,
                    NONET: 2,
                    NOAPACHE: 3
                },
                s = {
                    1: "货物",
                    2: "工程",
                    3: "服务"
                },
                r = {
                    1: "初始化",
                    2: "已发布",
                    3: "撤回"
                },
                o = {
                    0: "否",
                    1: "是"
                },
                a = {
                    1: "男",
                    2: "女",
                    0: "未知性别",
                    9: "未说明的性别"
                },
                h = {
                    0: "初始化",
                    5: "项目立项",
                    15: "项目组织中",
                    20: "已公告",
                    22: "已发布",
                    25: "开标中",
                    27: "第一次开标完成",
                    30: "开标完成",
                    35: "评审中",
                    40: "评标结束",
                    45: "已评审公示",
                    50: "已定标",
                    55: "已结果公告",
                    65: "项目完成"
                },
                u = {
                    "00380002": "公开招标",
                    "00380003": "邀请招标",
                    "00380020": "政府采购-竞争性谈判",
                    "00380024": "政府采购-竞争性磋商",
                    "00380005": "政府采购-询价",
                    "00380011": "政府采购-单一来源",
                    "00380004": "企采-谈判",
                    "00380018": "企采-询比",
                    "00380012": "企采-竞价",
                    "00380006": "企采-直接采购",
                    "00380007": "其他",
                    "00380008": "协议供货",
                    "00380010": "定点采购",
                    "00380013": "土地拍卖",
                    "00380014": "土地挂牌",
                    "00380015": "电商竞价",
                    "00380026": "招标转议标",
                    "00380022": "招标转议标",
                    "00380021": "非在线采购",
                    "00380023": "非在线采购(框架采购)",
                    "00380009": "方案评审"
                },
                c = {
                    1: "今",
                    2: "昨",
                    3: "前",
                    4: "更"
                },
                l = {
                    1: "运维",
                    2: "外部招标代理机构",
                    3: "供应商",
                    4: "评审专家",
                    5: "采购主体",
                    8: "采购人",
                    9: "安全认证供应商",
                    10: "监标人",
                    99: "信源运维"
                },
                d = [{
                        title_en: "cc",
                        title: "出差"
                    }, {
                        title_en: "bs",
                        title: "市内办事"
                    }, {
                        title_en: "wc",
                        title: "因私外出"
                    }
                ],
                f = {
                    "": "请选择考勤状态",
                    wzt: "请选择考勤状态",
                    cc: "出差",
                    bs: "市内办事",
                    qj: "请假",
                    tx: "调休",
                    wc: "因私外出",
                    "cd<20": "迟到<20",
                    "cd>20": "迟到>20",
                    qq: "缺勤",
                    nj: "年假",
                    dk: "上班打卡",
                    zc: "正常上班",
                    cl: "迟到<20",
                    cg: "迟到>20",
                    qjspz: "请假审批中"
                },
                p = [{
                        title_en: "cc",
                        title: "出差"
                    }, {
                        title_en: "bs",
                        title: "市内办事"
                    }, {
                        title_en: "wc",
                        title: "因私外出"
                    }, {
                        title_en: "zc",
                        title: "上班打卡"
                    }
                ],
                g = [{
                        title_en: "cc",
                        title: "出差"
                    }, {
                        title_en: "bs",
                        title: "市内办事"
                    }, {
                        title_en: "wc",
                        title: "因私外出"
                    }, {
                        title_en: "zc",
                        title: "上班打卡"
                    }
                ];
                e["a"] = {
                    XMZT: h,
                    SFTYYQ: o,
                    CGFS: u,
                    XMLX: s,
                    TimeDay: c,
                    pageStyle: n,
                    XTGGZT: r,
                    XB: a,
                    ZZXZ: l,
                    QdShareDataList: f,
                    QdAmData_zc: d,
                    QdAmData_dzwl: p,
                    QdPmData: g
                }
            },
            "4b80": function (t, e, i) {
                t.exports = i.p + "img/default-tx.982eb070.png"
            },
            "510f": function (t, e, i) {
                "use strict";
                i.d(e, "d", (function () {
                        return a
                    })),
                i.d(e, "a", (function () {
                        return h
                    })),
                i.d(e, "b", (function () {
                        return u
                    }));
                i("a4d3"),
                i("4de4"),
                i("c975"),
                i("a434"),
                i("b0c0"),
                i("e439"),
                i("dbb4"),
                i("b64b"),
                i("159b");
                var n = i("ade3"),
                s = i("2f62");
                function r(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(i), !0).forEach((function (e) {
                                Object(n["a"])(t, e, i[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                    }
                    return t
                }
                var a = {
                    mounted: function () {},
                    data: function () {
                        return {}
                    },
                    methods: {
                        goPage: function (t, e) {
                            this.$store.dispatch("router/setPageParams", e),
                            this.$router.push({
                                name: t,
                                params: {
                                    keyName: e
                                }
                            })
                        },
                        getParams: function () {
                            return this.$store.state.router.pageParams
                        }
                    },
                    beforeRouteEnter: function (t, e, i) {
                        i((function (e) {
                                if ("MhHome" !== t.name && "MallHome" !== t.name) {
                                    var i = e.$store.state.router.keepAlive,
                                    n = i.indexOf(t.name);
                                    -1 === n && i.push(t.name),
                                    e.$store.commit("router/SET_KEEP_ALIVE", i)
                                } else
                                    e.$store.commit("router/SET_KEEP_ALIVE", []);
                                console.log("PageRoute=进入页面==", i)
                            }))
                    },
                    beforeRouteLeave: function (t, e, i) {
                        var n = [];
                        if (n = this.$store.state.router.keepAlive, "GysXmbm" === e.name) {
                            var s = n.indexOf(e.name);
                            n.splice(s, 1)
                        }
                        var r = n.indexOf(e.name),
                        o = n.indexOf(t.name);
                        -1 !== o && n.splice(r, 1);
                        for (var a = [], h = 0; h < this.$store.state.router.footMeun.length; h++)
                            a.push(this.$store.state.router.footMeun[h].component);
                        var u = a.indexOf(e.name),
                        c = a.indexOf(t.name);
                        -1 !== u && -1 !== c && n.splice(r, 1),
                        console.log("PageRoute=退出页面======================", n),
                        this.$store.commit("router/SET_KEEP_ALIVE", n),
                        i()
                    }
                },
                h = {
                    mounted: function () {
                        var t = this;
                        window["showSoftKeyBoard"] = function (e) {
                            console.info("showSoftKeyBoard-----", e),
                            t.Native_ShowSoftKeyBoard = e
                        },
                        window["getRotuerPage"] = function (e) {
                            return t.$store.state.router.keepAlive
                        },
                        window["updateScanData"] = function (e) {
                            console.info("updateScan======", e),
                            t.Native_ScanData = e
                        },
                        window["updateHandImage"] = function (e) {
                            t.Native_PhoneImageData = e
                        }
                    },
                    data: function () {
                        return {
                            Native_ShowSoftKeyBoard: "",
                            Native_ScanData: {},
                            Native_PhoneImageData: {},
                            Native_CaLoad: "",
                            Native_CaList: {}
                        }
                    },
                    computed: {},
                    methods: {
                        NativeLoadCA: function () {
                            var t = this;
                            try {
                                this.Native_CaLoad = window.myapp.LoadCA(),
                                console.info("NativeLoadCA======", window.myapp.LoadCA())
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("LoadCA", "{page:1}", (function (e) {
                                    var i = JSON.parse(e);
                                    console.log("goScanView------", e),
                                    t.Native_CaLoad = i
                                }))
                        },
                        NativeGetAllCAInfo: function () {
                            try {
                                console.info("NativeGetAllCAInfo======", window.myapp.getAllCAInfo());
                                var t = window.myapp.getAllCAInfo();
                                this.Native_CaList = JSON.parse(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("getAllCAInfo", (function (t) {}))
                        },
                        NativeGetOnelCAInfo: function (t) {
                            try {
                                console.info("NativeGetAllCAInfo======", window.myapp.getOneCAInfo())
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("getOneCAInfo", t, (function (t) {}))
                        },
                        NativeChangePin: function (t) {
                            try {
                                window.myapp.changePin(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("changePin", t, (function (t) {}))
                        },
                        NativeEnvelopeDecrypt: function (t) {
                            try {
                                window.myapp.envelopeDecrypt(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("envelopeDecrypt", t, (function (t) {}))
                        },
                        NativeEnvelopeEncrypt: function (t) {
                            try {
                                window.myapp.envelopeEncrypt(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("envelopeEncrypt", t, (function (t) {}))
                        }
                    }
                },
                u = {
                    mounted: function () {
                        var t = this;
                        window["getRotuerPage"] = function (e) {
                            return t.$store.state.router.keepAlive
                        },
                        window["updateScanData"] = function (e) {
                            console.info("updateScan======", e),
                            t.Native_ScanData = e
                        },
                        window["updateHandImage"] = function (e) {
                            t.Native_PhoneImageData = e
                        }
                    },
                    data: function () {
                        return {
                            Native_ScanData: {},
                            Native_PhoneImageData: {}
                        }
                    },
                    computed: {},
                    methods: {
                        NativeAddPush: function (t) {
                            try {
                                window.myapp.addPush(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("addPush", t, (function (t) {}))
                        },
                        NativeDissPush: function () {
                            try {
                                window.myapp.dissPush()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("dissPush", (function (t) {}))
                        },
                        NativeDissDialog: function () {
                            try {
                                window.myapp.dissDialog()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("dissDialog", (function (t) {}))
                        },
                        NativeLoginAction: function (t) {
                            try {
                                window.myapp.loginAction(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("loginAction", t, (function (t) {}))
                        },
                        NativeCheakUpdate: function () {
                            try {
                                window.myapp.cheakUpdate()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("cheakUpdate", (function (t) {}))
                        },
                        NativeGetLjSize: function () {
                            try {
                                window.myapp.getlj()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("getlj", (function (t) {}))
                        },
                        NativeCleanLj: function () {
                            try {
                                window.myapp.cleanlj()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("cleanlj", (function (t) {}))
                        },
                        NativeDownFiles: function (t) {
                            try {
                                window.myapp.downloadFile(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("downloadFile", String(t), (function (t) {}))
                        },
                        NativeScan: function () {
                            var t = this;
                            try {
                                window.myapp.goScanView()
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("goScanView", "{page:1}", (function (e) {
                                    var i = JSON.parse(e);
                                    console.log("goScanView------", e),
                                    t.Native_ScanData = i
                                }))
                        },
                        NativePhone: function (t) {
                            var e = this;
                            try {
                                window.myapp.goIDCards(t)
                            } catch (i) {
                                console.log(i)
                            }
                            this.$bridge.callhandler("goIDCards", t, (function (t) {
                                    var i = JSON.parse(t);
                                    console.log("goIDCards------", i),
                                    e.Native_PhoneImageData = i
                                }))
                        },
                        NativeHandSing: function () {
                            var t = this;
                            try {
                                window.myapp.goHandWriteView()
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("goHandWriteView", (function (e) {
                                    t.Native_PhoneImageData = e
                                }))
                        },
                        NativeCallPhone: function (t) {
                            try {
                                window.myapp.call(t)
                            } catch (e) {
                                console.log(e)
                            }
                            this.$bridge.callhandler("call", t, (function (t) {}))
                        },
                        NativeUpdateImage: function () {
                            try {
                                window.myapp.CameraOrImage()
                            } catch (t) {
                                console.log(t)
                            }
                            this.$bridge.callhandler("CameraOrImage", (function (t) {}))
                        }
                    }
                };
                o({
                    onQueryChange: function (t) {
                        this.query = t
                    },
                    blurInput: function () {
                        this.$refs.searchBox.blur()
                    },
                    addQuery: function (t) {
                        this.$refs.searchBox.setQuery(t)
                    },
                    saveSearch: function () {
                        this.updateHostorList(this.query)
                    }
                }, Object(s["b"])(["updateHostorList", "deleteSearchHistory"])),
                o({
                    wybmAction: function () {
                        this.wybmfbAction()
                    }
                }, Object(s["b"])(["wybmfbAction"]))
            },
            "762b": function (t, e, i) {
                "use strict";
                i.r(e);
                var n = function () {
                    var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                    return i("div", {
                        staticClass: "kaoqin"
                    }, [i("div", {
                                staticClass: "nav-bar-white"
                            }, [i("headerBar", {
                                        attrs: {
                                            "header-data": t.headerData
                                        }
                                    })], 1), i("div", {
                                staticClass: "kaoqin-head"
                            }, [i("div", {
                                        staticClass: "kaoqin-userinfo-bg"
                                    }), i("div", {
                                        staticClass: "kaoqin-userinfo"
                                    }, [i("div", {
                                                staticClass: "userinfo-tx",
                                                on: {
                                                    click: function (e) {
                                                        return t.showImage(t.userInfo.tx_url ? t.userInfo.tx_url : t.avatar)
                                                    }
                                                }
                                            }, [i("van-image", {
                                                        attrs: {
                                                            src: t.userInfo.tx_url ? t.userInfo.tx_url : t.avatar,
                                                            fit: "cover",
                                                            round: !0
                                                        }
                                                    })], 1), i("div", {
                                                staticClass: "userinfo-name"
                                            }, [i("div", {
                                                        staticClass: "name"
                                                    }, [t._v(t._s(t.userInfo.name))]), i("div", {
                                                        staticClass: "info-flex"
                                                    }, [i("div", {
                                                                staticClass: "info"
                                                            }, [i("i", {
                                                                        staticClass: "iconfont icondailijigou"
                                                                    }), t._v(" " + t._s(t.userInfo.bmmc) + " ")]), i("div", {
                                                                staticClass: "info"
                                                            }, [i("i", {
                                                                        staticClass: "iconfont iconshouji"
                                                                    }), t._v(" " + t._s(t.userInfo.sj) + " ")])])])])]), i("div", {
                                staticClass: "kaoqin-time"
                            }, [i("i", {
                                        staticClass: "iconfont iconalarm_clock"
                                    }), i("em", [t._v("当前时间：")]), t._v(t._s(t.date))]), i("div", {
                                staticClass: "content"
                            }, [i("div", {
                                        staticClass: "kaoqin-item"
                                    }, [i("div", {
                                                staticClass: "kaoqin-list"
                                            }, [i("div", {
                                                        staticClass: "kaoqin-icon am"
                                                    }), i("div", {
                                                        staticClass: "kaoqin-type"
                                                    }, t._l(t.amUpdateQdData, (function (e, n) {
                                                                return i("div", {
                                                                    key: n
                                                                }, [e.worktype ? i("div", {
                                                                            staticClass: "type",
                                                                            on: {
                                                                                click: function (i) {
                                                                                    return t.showPopupKqlx(e)
                                                                                }
                                                                            }
                                                                        }, [t._v(t._s(t.QdShareDataList[e.worktype]) + " " + t._s("zc" !== e.worktype ? e.address : ""))]) : t._e()])
                                                            })), 0), t.amUpdateQdData[0].id ? i("div", {
                                                        staticClass: "kaoqin-state done"
                                                    }, [t._v("已提交")]) : i("div", {
                                                        staticClass: "kaoqin-state "
                                                    }, [t._v("未提交")])]), i("div", {
                                                staticClass: "kaoqin-list"
                                            }, [i("div", {
                                                        staticClass: "kaoqin-icon pm"
                                                    }), i("div", {
                                                        staticClass: "kaoqin-type"
                                                    }, t._l(t.pmUpdateQdData, (function (e, n) {
                                                                return i("div", {
                                                                    key: n
                                                                }, [e.worktype ? i("div", {
                                                                            staticClass: "type",
                                                                            on: {
                                                                                click: function (i) {
                                                                                    return t.showPopupKqlx(e)
                                                                                }
                                                                            }
                                                                        }, [t._v(" " + t._s(t.QdShareDataList[e.worktype]) + " " + t._s("zc" !== e.worktype ? e.address : ""))]) : t._e()])
                                                            })), 0), t.pmUpdateQdData[0].id ? i("div", {
                                                        staticClass: "kaoqin-state done"
                                                    }, [t._v("已提交")]) : i("div", {
                                                        staticClass: "kaoqin-state "
                                                    }, [t._v("未提交")])])]), i("van-notice-bar", {
                                        directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.showTip,
                                                expression: "showTip"
                                            }
                                        ],
                                        staticClass: "notice-bar-white",
                                        attrs: {
                                            "left-icon": "info-o",
                                            scrollable: ""
                                        }
                                    }, [t._v(" 受移动设备网络以及当前位置海拔等因素影响，导致定位不能正常进行位置更新.请适当调整当前位置并多次尝试. ")]), i("div", {
                                        staticClass: "login-button"
                                    }, [i("van-button", {
                                                attrs: {
                                                    round: "",
                                                    type: "info",
                                                    disabled: t.isdisabled
                                                },
                                                on: {
                                                    click: function (e) {
                                                        return t.sendQdSj()
                                                    }
                                                }
                                            }, [t._v("上传签到")])], 1)], 1), i("van-popup", {
                                style: {
                                    height: "85%"
                                },
                                attrs: {
                                    round: "",
                                    closeable: "",
                                    position: "bottom"
                                },
                                model: {
                                    value: t.KqlxShow,
                                    callback: function (e) {
                                        t.KqlxShow = e
                                    },
                                    expression: "KqlxShow"
                                }
                            }, [i("div", {
                                        staticClass: "common-popup"
                                    }, [i("div", {
                                                staticClass: "popup-title"
                                            }, [t._v("选择考勤类型")]), i("div", {
                                                staticClass: "popup-content"
                                            }, [i("div", {
                                                        staticClass: "select-list select-list-line"
                                                    }, t._l(t.QdAmData, (function (e, n) {
                                                                return i("ul", {
                                                                    key: n,
                                                                    on: {
                                                                        click: function (e) {
                                                                            return t.cheackQdType(n)
                                                                        }
                                                                    }
                                                                }, [i("li", {
                                                                            class: t.checkIndex === n ? "active" : ""
                                                                        }, [t._v(t._s(e.title))])])
                                                            })), 0), t.showCsdd ? i("van-field", {
                                                        attrs: {
                                                            label: "出差地点",
                                                            required: "",
                                                            placeholder: "输入出差地点",
                                                            rules: [{
                                                                    required: !0,
                                                                    message: "请输入出差地点"
                                                                }
                                                            ]
                                                        },
                                                        model: {
                                                            value: t.csdd,
                                                            callback: function (e) {
                                                                t.csdd = e
                                                            },
                                                            expression: "csdd"
                                                        }
                                                    }) : t._e(), t.showCsdd ? i("div", [t._v("请输入出差地点，到市一级，例如：广东佛山市")]) : t._e(), t.showJjbg ? i("div", [t._v(t._s(t.locationMsg.address1))]) : t._e(), t.showSnbs ? i("van-field", {
                                                        attrs: {
                                                            label: "办事地点",
                                                            required: "",
                                                            placeholder: "输入办事地点",
                                                            rules: [{
                                                                    required: !0,
                                                                    message: "请输入办事地点"
                                                                }
                                                            ]
                                                        },
                                                        model: {
                                                            value: t.bsdd,
                                                            callback: function (e) {
                                                                t.bsdd = e
                                                            },
                                                            expression: "bsdd"
                                                        }
                                                    }) : t._e()], 1), t.showSnbs ? i("div", {
                                                staticClass: "foot-btn fixed"
                                            }, [i("ul", [i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            plain: "",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.addSnType(0)
                                                                            }
                                                                        }
                                                                    }, [t._v("清空")])], 1), i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.addSnType(1)
                                                                            }
                                                                        }
                                                                    }, [t._v("确定")])], 1)])]) : t._e(), t.showCsdd ? i("div", {
                                                staticClass: "foot-btn fixed"
                                            }, [i("ul", [i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            plain: "",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.addCcType(0)
                                                                            }
                                                                        }
                                                                    }, [t._v("清空")])], 1), i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.addCcType(1)
                                                                            }
                                                                        }
                                                                    }, [t._v("确定")])], 1)])]) : t._e(), t.showJjbg ? i("div", {
                                                staticClass: "foot-btn fixed"
                                            }, [i("ul", [i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            plain: "",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.qr(0)
                                                                            }
                                                                        }
                                                                    }, [t._v("重新获取")])], 1), i("li", [i("van-button", {
                                                                        attrs: {
                                                                            type: "info",
                                                                            round: "",
                                                                            size: "large"
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.qr(1)
                                                                            }
                                                                        }
                                                                    }, [t._v("确定")])], 1)])]) : t._e()])]), i("div", {
                                staticClass: "common-space"
                            }), i("FooterNav", {
                                ref: "FooterNav"
                            })], 1)
                },
                s = [],
                r = (i("a4d3"), i("99af"), i("4de4"), i("fb6a"), i("a434"), i("e439"), i("dbb4"), i("b64b"), i("159b"), i("ade3")),
                o = i("80d5"),
                a = i("8e4d"),
                h = i("445c"),
                u = i("4abd"),
                c = i("2f62"),
                l = i("510f"),
                d = i("2a08"),
                f = i("28a2"),
                p = i("1ff3");
                p["a"],
                i("27ae");
                function g(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                function m(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? g(Object(i), !0).forEach((function (e) {
                                Object(r["a"])(t, e, i[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : g(Object(i)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                    }
                    return t
                }
                var v = d["a"].get({}),
                y = {
                    components: {
                        headerBar: h["a"],
                        FooterNav: a["a"]
                    },
                    mixins: [l["d"]],
                    data: function () {
                        return {
                            btnState: !0,
                            checkIndex: "",
                            date: "",
                            headerData: {
                                title: "考勤打卡"
                            },
                            avatar: i("4b80"),
                            QdAmData: "",
                            showTip: !1,
                            showSpinner: !1,
                            showCsdd: !1,
                            showSnbs: !1,
                            showJjbg: !1,
                            csdd: "",
                            bsdd: "",
                            checkPopupList: -1,
                            showPopup: "",
                            KqlxShow: !1,
                            isdisabled: !1,
                            gaodeDW: {
                                lng: "",
                                lat: ""
                            },
                            amUpdateQdData: [{
                                    id: "",
                                    dayType: "上午",
                                    times: .5,
                                    worktype: "wzt",
                                    source: "1",
                                    address: ""
                                }
                            ],
                            pmUpdateQdData: [{
                                    id: "",
                                    dayType: "下午",
                                    times: .5,
                                    worktype: "wzt",
                                    source: "1",
                                    address: ""
                                }
                            ],
                            locationMsg: {},
                            getAddressType: ""
                        }
                    },
                    computed: m({}, Object(c["d"])({
                            userInfo: function (t) {
                                return t.mh.mhUserInfo
                            }
                        })),
                    mounted: function () {
                        var t = this;
                        this.timer = setInterval((function () {
                                    t.date = t.getNowTime()
                                }), 1e3);
                        var e = this;
                        window["updateLocation1"] = function (t) {
                            console.log("value======123==============", t),
                            "0" === t.lon || "0" === t.lat ? (v.hideLoading(), e.$toast("定位数据获取失败！"), e.btnState = !0) : (v.hideLoading(), "zc" === e.amUpdateQdData[0].worktype && (e.amUpdateQdData[0].address = t.address), "zc" === e.pmUpdateQdData[0].worktype && (e.pmUpdateQdData[0].address = t.address), e.goKqtxl())
                        },
                        window["updateLocation"] = function (i) {
                            "jjbg" === e.getAddressType ? (console.info("临时坐标-----", i.lon, i.lat, i.address), "0" === i.lon || "0" === i.lat ? (t.$toast("定位数据获取失败！"), e.btnState = !0) : (t.locationMsg.lng = i.lon, t.locationMsg.lat = i.lat, t.locationMsg.address1 = i.address)) : (console.info("固定坐标-----", e.gaodeDW.lng, e.gaodeDW.lat, "临时坐标-----", i.lon, i.lat), "0" === i.lon || "0" === i.lat ? (v.hideLoading(), e.$toast("定位数据获取失败！"), e.btnState = !0) : e.GetDistance(e.userInfo.dzwlbj, e.gaodeDW.lng, e.gaodeDW.lat, i.lon, i.lat) ? (v.hideLoading(), e.goKqtxl()) : (v.hideLoading(), e.$toast("距离过远，请调整当前位置"), e.btnState = !0))
                        }
                    },
                    created: function () {
                        this.$store.commit("router/SET_Foot_Num", 2);
                        var t = this;
                        if (t.date = t.getNowTime(), this.timer = setInterval((function () {
                                        t.date = t.getNowTime()
                                    }), 1e3), this.QdAmData = "1" === this.userInfo.dzwlqx || 1 === this.userInfo.dzwlqx ? u["a"].QdAmData_dzwl : u["a"].QdAmData_zc, console.info("dzwlqx------", this.userInfo.dzwlqx), console.info("QdAmData------", this.QdAmData), this.QdShareDataList = u["a"].QdShareDataList, this.QdPmData = u["a"].QdPmData, "1" !== this.userInfo.dzwlqx && 1 !== this.userInfo.dzwlqx || (this.showTip = !0), null !== this.userInfo.yhzb && void 0 !== this.userInfo.yhzb && "" !== this.userInfo.yhzb && "" !== this.userInfo.yhzb.lng && "" !== this.userInfo.yhzb.lat) {
                            var e = this.bd_decrypt(this.userInfo.yhzb.lng, this.userInfo.yhzb.lat);
                            this.gaodeDW.lng = e.lng,
                            this.gaodeDW.lat = e.lat
                        }
                        this.getKqData()
                    },
                    methods: {
                        getLocation: function () {
                            var t = this,
                            e = {
                                type: "1"
                            };
                            try {
                                window.myapp.getDistance(JSON.stringify(e))
                            } catch (i) {
                                console.log(i)
                            }
                            this.$bridge.callhandler("getDistance", JSON.stringify(e), (function (e) {
                                    var i = JSON.parse(e);
                                    t.locationMsg.lng = i.lng,
                                    t.locationMsg.lat = i.lat,
                                    t.locationMsg.address1 = i.address,
                                    console.info("临时坐标-----", i.lng, i.lat, i.address),
                                    console.info("getDistance------", t.locationMsg.address)
                                }))
                        },
                        showImage: function (t) {
                            Object(f["a"])({
                                images: [t],
                                startPosition: 0,
                                onClose: function () {}
                            })
                        },
                        getNowTime: function () {
                            var t = new Date,
                            e = "",
                            i = "",
                            n = "";
                            return e = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                            i = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
                            n = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(),
                            t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日  " + e + ":" + i + ":" + n
                        },
                        getKqData: function () {
                            var t = this;
                            this.$store.dispatch("erp/querySignAction", {
                                userId: this.userInfo.id
                            }).then((function (e) {
                                    console.info("res------", e);
                                    for (var i = e.sign, n = 0; n < i.length; n++) {
                                        var s = i[n];
                                        t.handleData(s)
                                    }
                                    console.info("this.pmUpdateQdData------", t.pmUpdateQdData),
                                    console.info("this.amUpdateQdData------", t.amUpdateQdData)
                                })).catch((function (e) {
                                    t.$toast(e)
                                }))
                        },
                        showPopupKqlx: function (t) {
                            if ("qj" !== t.worktype)
                                if ("qjspz" !== t.worktype)
                                    if (1 !== this.userInfo.dzwlqx && "1" !== this.userInfo.dzwlqx || "上午" !== t.dayType || "wzt" === t.worktype) {
                                        if ("" !== this.checkIndex ? ("cc" === this.QdAmData[this.checkIndex].title_en ? (this.showCsdd = !0, this.showJjbg = !1, this.showSnbs = !1) : this.showCsdd = !1, "jjbg" === this.QdAmData[this.checkIndex].title_en ? (this.showJjbg = !0, this.showCsdd = !1, this.showSnbs = !1) : this.showJjbg = !1, "bs" === this.QdAmData[this.checkIndex].title_en ? (this.showJjbg = !1, this.showCsdd = !1, this.showSnbs = !0) : this.showSnbs = !1) : (this.showJjbg = !1, this.showCsdd = !1, this.showSnbs = !1), "上午" === t.dayType) {
                                            if (this.QdAmData = "1" === this.userInfo.dzwlqx || 1 === this.userInfo.dzwlqx ? u["a"].QdAmData_dzwl : u["a"].QdAmData_zc, "wc" === t.worktype)
                                                return this.amUpdateQdData[0].times = .5, void this.amUpdateQdData.splice(1, 1);
                                            this.showPopup = 0
                                        } else if ("下午" === t.dayType) {
                                            if (this.QdAmData = u["a"].QdPmData, "wc" === t.worktype)
                                                return this.pmUpdateQdData[0].times = .5, void this.pmUpdateQdData.splice(1, 1);
                                            this.showPopup = 1
                                        }
                                        this.KqlxShow = !0
                                    } else
                                        this.$toast.fail("您已开启电子围栏，不能修改状态，如确需修改请和人事专责联系并报备部门经理");
                                else
                                    this.$toast.fail("请假审批中，考勤状态不可修改");
                            else
                                this.$toast.fail("请假状态下不能修改考勤状态，请联系人事专员进行修改")
                        },
                        qr: function (t) {
                            0 === t ? (this.locationMsg.address1 = "", this.getLocation()) : this.locationMsg.address1 ? (0 === this.showPopup ? (this.amUpdateQdData[0].address = this.locationMsg.address1, this.amUpdateQdData[0].source = 1, this.amUpdateQdData[0].worktype = "jjbg") : (this.pmUpdateQdData[0].worktype = "jjbg", this.pmUpdateQdData[0].source = 1, this.pmUpdateQdData[0].address = this.locationMsg.address1), this.KqlxShow = !1) : this.$toast("获取地址失败，请重新获取！")
                        },
                        addSnType: function (t) {
                            0 !== t ? this.checkPopupList < 0 ? this.$toast.fail("请选择考勤类型") : 0 !== this.bsdd.length ? (0 === this.showPopup ? (this.amUpdateQdData[0].address = this.bsdd, this.amUpdateQdData[0].source = 1, this.amUpdateQdData[0].worktype = "bs") : (this.pmUpdateQdData[0].worktype = "bs", this.pmUpdateQdData[0].source = 1, this.pmUpdateQdData[0].address = this.bsdd), this.KqlxShow = !1) : this.$toast.fail("请输入办事地点") : this.bsdd = ""
                        },
                        addCcType: function (t) {
                            0 !== t ? this.checkPopupList < 0 ? this.$toast.fail("请选择考勤类型") : 0 !== this.csdd.length ? (0 === this.showPopup ? (this.amUpdateQdData[0].address = this.csdd, this.amUpdateQdData[0].source = 1, this.amUpdateQdData[0].worktype = "cc") : (this.pmUpdateQdData[0].worktype = "cc", this.pmUpdateQdData[0].source = 1, this.pmUpdateQdData[0].address = this.csdd), this.KqlxShow = !1) : this.$toast.fail("请输入出差地点，到市一级，例如：广东佛山市") : this.csdd = ""
                        },
                        handleData: function (t) {
                            if ("上午" === t.mark_noon)
                                if ("" === this.amUpdateQdData[0].id)
                                    this.amUpdateQdData[0].id = t.id, this.amUpdateQdData[0].times = t.days_span, this.amUpdateQdData[0].address = t.address, this.amUpdateQdData[0].source = t.source, this.amUpdateQdData[0].worktype = t.task_type;
                                else {
                                    var e = {
                                        id: t.id,
                                        dayType: "上午",
                                        times: t.days_span,
                                        worktype: t.task_type,
                                        source: t.source,
                                        address: t.address
                                    };
                                    this.amUpdateQdData.push(e)
                                }
                            else if ("" === this.pmUpdateQdData[0].id)
                                this.pmUpdateQdData[0].id = t.id, this.pmUpdateQdData[0].times = t.days_span, this.pmUpdateQdData[0].address = t.address, this.pmUpdateQdData[0].source = t.source, this.pmUpdateQdData[0].worktype = t.task_type;
                            else {
                                var i = {
                                    id: t.id,
                                    dayType: "下午",
                                    times: t.days_span,
                                    worktype: t.task_type,
                                    source: t.source,
                                    address: t.address
                                };
                                this.pmUpdateQdData.push(i)
                            }
                        },
                        cheackQdType: function (t) {
                            if (this.getAddressType = "", this.checkIndex = t, "wc" === this.QdAmData[t].title_en) {
                                if ("" === this.amUpdateQdData[0].id || "" === this.pmUpdateQdData[0].id)
                                    return void this.$toast.fail("未获得考勤信息状态下不能选择因私外出");
                                if (0 === this.showPopup)
                                    if ("qj" !== this.amUpdateQdData[0].worktype && "tx" !== this.amUpdateQdData[0].worktype) {
                                        this.amUpdateQdData[0].times = .25;
                                        var e = {
                                            id: "",
                                            dayType: "上午",
                                            times: .25,
                                            worktype: "wc",
                                            source: "1",
                                            address: ""
                                        };
                                        1 === this.amUpdateQdData.length && this.amUpdateQdData.push(e)
                                    } else
                                        this.$toast.fail("请假或调休状态下不能选择因私外出");
                                else if ("qj" !== this.pmUpdateQdData[0].worktype && "tx" !== this.pmUpdateQdData[0].worktype) {
                                    this.pmUpdateQdData[0].times = .25;
                                    var i = {
                                        id: "",
                                        dayType: "下午",
                                        times: .25,
                                        worktype: "wc",
                                        source: "1",
                                        address: ""
                                    };
                                    1 === this.pmUpdateQdData.length && this.pmUpdateQdData.push(i)
                                } else
                                    this.$toast.fail("请假或调休状态下不能选择因私外出");
                                this.KqlxShow = !1
                            } else
                                "cc" === this.QdAmData[t].title_en ? (this.amUpdateQdData.length > 1 && this.amUpdateQdData.splice(1.1), this.pmUpdateQdData.length > 1 && this.pmUpdateQdData.splice(1.1), this.checkPopupList = t, this.showCsdd = !0, this.showJjbg = !1, this.showSnbs = !1) : "jjbg" === this.QdAmData[t].title_en ? (console.log("this.locationMsg==================", this.locationMsg), this.getLocation(), this.getAddressType = "jjbg", this.showJjbg = !0, this.showCsdd = !1, this.showSnbs = !1, this.checkPopupList = t) : "bs" === this.QdAmData[t].title_en ? (this.checkPopupList = t, this.showSnbs = !0, this.showCsdd = !1, this.showJjbg = !1) : (this.KqlxShow = !1, console.log("this.QdAmData[index]============", this.checkIndex, this.QdAmData), 0 === this.showPopup ? (this.amUpdateQdData[0].worktype = this.QdAmData[t].title_en, this.amUpdateQdData[0].source = 1, this.amUpdateQdData[0].address = "") : (this.pmUpdateQdData[0].worktype = this.QdAmData[t].title_en, this.pmUpdateQdData[0].source = 1, this.pmUpdateQdData[0].address = ""));
                            console.info("amUpdateQdData==A==", this.amUpdateQdData),
                            console.info("pmUpdateQdData==A==", this.pmUpdateQdData)
                        },
                        sendQdSj: function () {
                            var t = this;
                            if (this.btnState) {
                                this.btnState = !1,
                                "wzt" === this.amUpdateQdData[0].worktype && (this.amUpdateQdData[0].worktype = ""),
                                "wzt" === this.pmUpdateQdData[0].worktype && (this.pmUpdateQdData[0].worktype = "");
                                var e = this.userInfo.yhzb;
                                console.log("123==================1", this.amUpdateQdData, this.pmUpdateQdData);
                                for (var i = 0; i < this.amUpdateQdData.length; i++)
                                    if ("wc" == this.amUpdateQdData[i].worktype)
                                        return void this.goKqtxl();
                                for (var n = 0; n < this.pmUpdateQdData.length; n++)
                                    if ("wc" == this.pmUpdateQdData[n].worktype)
                                        return void this.goKqtxl();
                                if (1 === this.userInfo.dzwlqx || "1" === this.userInfo.dzwlqx)
                                    if ("zc" === this.amUpdateQdData[0].worktype) {
                                        /* if (console.info("str-----", e), null === e || void 0 === e || "" === e)
                                            return this.$toast.fail("没有定位数据，请在个人中心上传个人位置"), void(this.btnState = !0);
                                        var s = {
                                            baseLat: this.userInfo.yhzb.lat,
                                            baseLng: this.userInfo.yhzb.lng,
                                            dzwlbj: this.userInfo.dzwlbj,
                                            type: "0"
                                        };
                                        v.showLoading();
                                        try {
                                            window.myapp.getDistance(JSON.stringify(s))
                                        } catch (r) {
                                            console.log(r)
                                        }
                                        this.$bridge.callhandler("getDistance", JSON.stringify(s), (function (e) {
                                                var i = JSON.parse(e);
                                                console.info("固定坐标-----", t.gaodeDW.lng, t.gaodeDW.lat, "临时坐标-----", i.lng, i.lat),
                                                t.GetDistance(t.userInfo.dzwlbj, t.gaodeDW.lng, t.gaodeDW.lat, i.lng, i.lat) ? (v.hideLoading(), t.goKqtxl()) : (v.hideLoading(), t.$toast("距离过远，请调整当前位置"), t.btnState = !0),
                                                console.info("getDistance------", i)
                                            })) */
                                           this.goKqtxl();
                                    } else
                                        this.goKqtxl();
                                else
                                    this.goKqtxl()
                            }
                        },
                        GetDistance: function (t, e, i, n, s) {
                            var r = e * Math.PI / 180,
                            o = n * Math.PI / 180,
                            a = r - o,
                            h = i * Math.PI / 180 - s * Math.PI / 180,
                            u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(r) * Math.cos(o) * Math.pow(Math.sin(h / 2), 2)));
                            u *= 6378.137,
                            u = Math.round(1e4 * u),
                            console.info("s-------------", u),
                            console.info("dis-------------", t);
                            var c = t + 500;
                            return console.info("dd-------------", c),
                            c >= u
                        },
                        bd_decrypt: function (t, e) {
                            var i = 3e3 * Math.PI / 180,
                            n = t - .0065,
                            s = e - .006,
                            r = Math.sqrt(n * n + s * s) - 2e-5 * Math.sin(s * i),
                            o = Math.atan2(s, n) - 3e-6 * Math.cos(n * i),
                            a = r * Math.cos(o),
                            h = r * Math.sin(o);
                            return {
                                lng: a,
                                lat: h
                            }
                        },
                        goKqtxl: function () {
                            var t = this,
                            e = this.amUpdateQdData.concat(this.pmUpdateQdData);
                            console.log("123==================2", e);
                            var i = [],
                            n = {
                                params: e,
                                username: Object(o["e"])(),
                                userId: this.userInfo.id
                            };
                            this.isdisabled = !0,
                            i.push(n);
                            var s = new p["a"];
                            s.setPublicKey(this.$store.state.mh.jmkey);
                            var r = [],
                            a = JSON.stringify(i);
                            if (console.log("加密前：", a), a.length > 10)
                                for (var h = a.length / 10, u = 0; u <= h; u++) {
                                    console.log("分割加密前===========", a.slice(10 * u, 10 * (u + 1)));
                                    var c = s.encrypt(a.slice(10 * u, 10 * (u + 1)));
                                    r.push(c)
                                }
                            console.log("加密后：", r),
                            this.$store.dispatch("erp/submitSignInfoAction", {
                                userid: this.userInfo.id,
                                data: r,
                                timestamp: (new Date).getTime()
                            }).then((function (e) {
                                    t.isdisabled = !1,
                                    console.info("res------", e),
                                    t.amUpdateQdData = [{
                                            id: "",
                                            dayType: "上午",
                                            times: .5,
                                            worktype: "wzt",
                                            source: "1",
                                            address: ""
                                        }
                                    ],
                                    t.pmUpdateQdData = [{
                                            id: "",
                                            dayType: "下午",
                                            times: .5,
                                            worktype: "wzt",
                                            source: "1",
                                            address: ""
                                        }
                                    ];
                                    for (var i = e.data.sign, n = 0; n < i.length; n++) {
                                        var s = i[n];
                                        t.handleData(s)
                                    }
                                    t.$toast(e.text),
                                    t.btnState = !0
                                })).catch((function (e) {
                                    t.btnState = !0,
                                    t.isdisabled = !1,
                                    t.$toast(e)
                                }))
                        }
                    }
                },
                b = y,
                w = i("2877"),
                D = Object(w["a"])(b, n, s, !1, null, "e51bad3c", null);
                e["default"] = D.exports
            },
            "8e4d": function (t, e, i) {
                "use strict";
                var n = function () {
                    var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                    return t.menuList && t.menuList.length > 0 ? i("footer", {
                        staticClass: "xy-nav"
                    }, t._l(t.menuList, (function (e, n) {
                                return i("dl", {
                                    key: n,
                                    class: {
                                        activeMenu: t.footNum == n
                                    },
                                    on: {
                                        click: function (i) {
                                            return t.toLink(e, n)
                                        }
                                    }
                                }, [i("dt", {
                                            class: t.footNum == n ? e.activeIcon : e.icon
                                        }, [1 === n && t.msgCount > 0 ? i("div", {
                                                    staticClass: "num"
                                                }, [t._v(t._s(t.msgCount))]) : t._e()]), i("dd", {
                                            class: t.footNum == n ? "menu-text-active" : ""
                                        }, [t._v(t._s(e.meta.title))])])
                            })), 0) : t._e()
                },
                s = [],
                r = (i("a4d3"), i("4de4"), i("e439"), i("dbb4"), i("b64b"), i("159b"), i("ade3")),
                o = i("2f62");
                function a(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                function h(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(i), !0).forEach((function (e) {
                                Object(r["a"])(t, e, i[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                    }
                    return t
                }
                var u = {
                    name: "",
                    data: function () {
                        return {
                            menuList: []
                        }
                    },
                    computed: h({}, Object(o["d"])({
                            userInfo: function (t) {
                                return t.mh.mhUserInfo
                            },
                            msgCount: function (t) {
                                return t.router.msgCount
                            }
                        })),
                    watch: {
                        menuList: function (t) {
                            t && t.length > 0 && (this.menuList = t)
                        }
                    },
                    created: function () {
                        this.footNum = this.$store.state.router.footNum,
                        this.menuList = this.$store.state.router.footMeun,
                        0 === this.menuList.length || 1 === JSON.parse(window.localStorage.getItem("isFirst")) ? (console.log("footNum==Icon===", this.footNum), this.getBottomCdList()) : this.menuList = this.menuList
                    },
                    methods: {
                        getMenuBottom: function () {
                            this.menuList.length > 0 && (this.menuList = this.menuList, console.log("menuList==menuList===", this.menuList))
                        },
                        getBottomCdList: function () {
                            var t = this;
                            this.$store.commit("router/SET_Foot_Meun", ""),
                            this.$store.dispatch("mh/getBottomCdList", {
                                ryId: this.userInfo.id
                            }).then((function (e) {
                                    if (window.localStorage.setItem("isFirst", JSON.stringify(0)), "" !== e && null != e) {
                                        var i = [],
                                        n = [];
                                        if (i = JSON.parse(e), 0 === i.router.length)
                                            t.$toast.fail("暂无数据！");
                                        else {
                                            for (var s = 0; s < i.router.length; s++) {
                                                if (n = i.router[s].children, 3 === t.userInfo.zzxz && "SJDBCD_GYS" === i.router[s].component) {
                                                    for (var r = 0; r < n.length; r++)
                                                        0 !== r && r % 2 === 0 && r === Math.floor(n.length / 2) ? n[r].activeIcon = n[r].icon : n[r].activeIcon = n[r].icon + "-active";
                                                    t.$store.commit("router/SET_Foot_Meun", n);
                                                    break
                                                }
                                                if (5 === t.userInfo.zzxz && "JBR_HOME" === i.router[s].component) {
                                                    for (var o = 0; o < n.length; o++)
                                                        0 !== o && o % 2 === 0 && o === Math.floor(n.length / 2) ? n[o].activeIcon = n[o].icon : n[o].activeIcon = n[o].icon + "-active";
                                                    t.$store.commit("router/SET_Foot_Meun", n),
                                                    console.log("555555555555======", n);
                                                    break
                                                }
                                                if (4 === t.userInfo.zzxz && "SJDBCD_DLJG" === i.router[s].component) {
                                                    for (var a = 0; a < n.length; a++)
                                                        0 !== a && a % 2 === 0 && a === Math.floor(n.length / 2) ? n[a].activeIcon = n[a].icon : n[a].activeIcon = n[a].icon + "-active";
                                                    console.log("2222222222======", n),
                                                    t.$store.commit("router/SET_Foot_Meun", n);
                                                    break
                                                }
                                                if (4 === t.userInfo.zzxz && "SJDBCD_GYS" === i.router[s].component) {
                                                    for (var h = 0; h < n.length; h++)
                                                        0 !== h && h % 2 === 0 && h === Math.floor(n.length / 2) ? n[h].activeIcon = n[h].icon : n[h].activeIcon = n[h].icon + "-active";
                                                    t.$store.commit("router/SET_Foot_Meun", n);
                                                    break
                                                }
                                                for (var u = 0; u < n.length; u++)
                                                    0 !== u && u % 2 === 0 && u === Math.floor(n.length / 2) ? n[u].activeIcon = n[u].icon : n[u].activeIcon = n[u].icon + "-active";
                                                t.$store.commit("router/SET_Foot_Meun", n);
                                                break
                                            }
                                            console.log("childrens====================================", n),
                                            t.menuList = n,
                                            t.$store.commit("router/SET_Foot_Meun", n)
                                        }
                                    } else
                                        t.$store.commit("router/SET_Foot_Meun", [])
                                })).catch((function (e) {
                                    t.$toast.fail(e)
                                }))
                        },
                        toLink: function (t, e) {
                            var i = this;
                            e !== this.footNum && (this.$store.commit("router/SET_Foot_Num", e), t.needLogin && (this.userInfo.id || this.$toast.fail("请先登录！")), "url" === t.type ? i.$router.push({
                                    name: "GgIframe",
                                    params: {
                                        ggUrl: t.component,
                                        title: t.title
                                    }
                                }) : i.$router.push(t.component))
                        }
                    }
                },
                c = u,
                l = i("2877"),
                d = Object(l["a"])(c, n, s, !1, null, "21d03d4e", null);
                e["a"] = d.exports
            },
            "93a9": function (t, e, i) {
                "use strict";
                i.d(e, "b", (function () {
                        return s
                    })),
                i.d(e, "d", (function () {
                        return r
                    })),
                i.d(e, "f", (function () {
                        return o
                    })),
                i.d(e, "g", (function () {
                        return a
                    })),
                i.d(e, "e", (function () {
                        return h
                    })),
                i.d(e, "c", (function () {
                        return u
                    })),
                i.d(e, "a", (function () {
                        return c
                    }));
                var n = "0123456789abcdefghijklmnopqrstuvwxyz";
                function s(t) {
                    return n.charAt(t)
                }
                function r(t, e) {
                    return t & e
                }
                function o(t, e) {
                    return t | e
                }
                function a(t, e) {
                    return t ^ e
                }
                function h(t, e) {
                    return t & ~e
                }
                function u(t) {
                    if (0 == t)
                        return -1;
                    var e = 0;
                    return 0 == (65535 & t) && (t >>= 16, e += 16),
                    0 == (255 & t) && (t >>= 8, e += 8),
                    0 == (15 & t) && (t >>= 4, e += 4),
                    0 == (3 & t) && (t >>= 2, e += 2),
                    0 == (1 & t) && ++e,
                    e
                }
                function c(t) {
                    var e = 0;
                    while (0 != t)
                        t &= t - 1, ++e;
                    return e
                }
            },
            ea6a: function (t, e, i) {
                "use strict";
                var n,
                s,
                r = i("143d"),
                o = {
                    decode: function (t) {
                        var e;
                        if (void 0 === n) {
                            var i = "0123456789ABCDEF",
                            s = " \f\n\r\t \u2028\u2029";
                            for (n = {}, e = 0; e < 16; ++e)
                                n[i.charAt(e)] = e;
                            for (i = i.toLowerCase(), e = 10; e < 16; ++e)
                                n[i.charAt(e)] = e;
                            for (e = 0; e < s.length; ++e)
                                n[s.charAt(e)] = -1
                        }
                        var r = [],
                        o = 0,
                        a = 0;
                        for (e = 0; e < t.length; ++e) {
                            var h = t.charAt(e);
                            if ("=" == h)
                                break;
                            if (h = n[h], -1 != h) {
                                if (void 0 === h)
                                    throw new Error("Illegal character at offset " + e);
                                o |= h,
                                ++a >= 2 ? (r[r.length] = o, o = 0, a = 0) : o <<= 4
                            }
                        }
                        if (a)
                            throw new Error("Hex encoding incomplete: 4 bits missing");
                        return r
                    }
                },
                a = {
                    decode: function (t) {
                        var e;
                        if (void 0 === s) {
                            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            n = "= \f\n\r\t \u2028\u2029";
                            for (s = Object.create(null), e = 0; e < 64; ++e)
                                s[i.charAt(e)] = e;
                            for (s["-"] = 62, s["_"] = 63, e = 0; e < n.length; ++e)
                                s[n.charAt(e)] = -1
                        }
                        var r = [],
                        o = 0,
                        a = 0;
                        for (e = 0; e < t.length; ++e) {
                            var h = t.charAt(e);
                            if ("=" == h)
                                break;
                            if (h = s[h], -1 != h) {
                                if (void 0 === h)
                                    throw new Error("Illegal character at offset " + e);
                                o |= h,
                                ++a >= 4 ? (r[r.length] = o >> 16, r[r.length] = o >> 8 & 255, r[r.length] = 255 & o, o = 0, a = 0) : o <<= 6
                            }
                        }
                        switch (a) {
                        case 1:
                            throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                        case 2:
                            r[r.length] = o >> 10;
                            break;
                        case 3:
                            r[r.length] = o >> 16,
                            r[r.length] = o >> 8 & 255;
                            break
                        }
                        return r
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function (t) {
                        var e = a.re.exec(t);
                        if (e)
                            if (e[1])
                                t = e[1];
                            else {
                                if (!e[2])
                                    throw new Error("RegExp out of sync");
                                t = e[2]
                            }
                        return a.decode(t)
                    }
                },
                h = 1e13,
                u = function () {
                    function t(t) {
                        this.buf = [+t || 0]
                    }
                    return t.prototype.mulAdd = function (t, e) {
                        var i,
                        n,
                        s = this.buf,
                        r = s.length;
                        for (i = 0; i < r; ++i)
                            n = s[i] * t + e, n < h ? e = 0 : (e = 0 | n / h, n -= e * h), s[i] = n;
                        e > 0 && (s[i] = e)
                    },
                    t.prototype.sub = function (t) {
                        var e,
                        i,
                        n = this.buf,
                        s = n.length;
                        for (e = 0; e < s; ++e)
                            i = n[e] - t, i < 0 ? (i += h, t = 1) : t = 0, n[e] = i;
                        while (0 === n[n.length - 1])
                            n.pop()
                    },
                    t.prototype.toString = function (t) {
                        if (10 != (t || 10))
                            throw new Error("only base 10 is supported");
                        for (var e = this.buf, i = e[e.length - 1].toString(), n = e.length - 2; n >= 0; --n)
                            i += (h + e[n]).toString().substring(1);
                        return i
                    },
                    t.prototype.valueOf = function () {
                        for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i)
                            e = e * h + t[i];
                        return e
                    },
                    t.prototype.simplify = function () {
                        var t = this.buf;
                        return 1 == t.length ? t[0] : this
                    },
                    t
                }
                (),
                c = "…",
                l = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                d = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
                function f(t, e) {
                    return t.length > e && (t = t.substring(0, e) + c),
                    t
                }
                var p,
                g = function () {
                    function t(e, i) {
                        this.hexDigits = "0123456789ABCDEF",
                        e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = i)
                    }
                    return t.prototype.get = function (t) {
                        if (void 0 === t && (t = this.pos++), t >= this.enc.length)
                            throw new Error("Requesting byte offset ".concat(t, " on a stream of length ").concat(this.enc.length));
                        return "string" === typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                    },
                    t.prototype.hexByte = function (t) {
                        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                    },
                    t.prototype.hexDump = function (t, e, i) {
                        for (var n = "", s = t; s < e; ++s)
                            if (n += this.hexByte(this.get(s)), !0 !== i)
                                switch (15 & s) {
                                case 7:
                                    n += "  ";
                                    break;
                                case 15:
                                    n += "\n";
                                    break;
                                default:
                                    n += " "
                                }
                        return n
                    },
                    t.prototype.isASCII = function (t, e) {
                        for (var i = t; i < e; ++i) {
                            var n = this.get(i);
                            if (n < 32 || n > 176)
                                return !1
                        }
                        return !0
                    },
                    t.prototype.parseStringISO = function (t, e) {
                        for (var i = "", n = t; n < e; ++n)
                            i += String.fromCharCode(this.get(n));
                        return i
                    },
                    t.prototype.parseStringUTF = function (t, e) {
                        for (var i = "", n = t; n < e; ) {
                            var s = this.get(n++);
                            i += s < 128 ? String.fromCharCode(s) : s > 191 && s < 224 ? String.fromCharCode((31 & s) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & s) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                        }
                        return i
                    },
                    t.prototype.parseStringBMP = function (t, e) {
                        for (var i, n, s = "", r = t; r < e; )
                            i = this.get(r++), n = this.get(r++), s += String.fromCharCode(i << 8 | n);
                        return s
                    },
                    t.prototype.parseTime = function (t, e, i) {
                        var n = this.parseStringISO(t, e),
                        s = (i ? l : d).exec(n);
                        return s ? (i && (s[1] = +s[1], s[1] += +s[1] < 70 ? 2e3 : 1900), n = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4], s[5] && (n += ":" + s[5], s[6] && (n += ":" + s[6], s[7] && (n += "." + s[7]))), s[8] && (n += " UTC", "Z" != s[8] && (n += s[8], s[9] && (n += ":" + s[9]))), n) : "Unrecognized time: " + n
                    },
                    t.prototype.parseInteger = function (t, e) {
                        var i,
                        n = this.get(t),
                        s = n > 127,
                        r = s ? 255 : 0,
                        o = "";
                        while (n == r && ++t < e)
                            n = this.get(t);
                        if (i = e - t, 0 === i)
                            return s ? -1 : 0;
                        if (i > 4) {
                            o = n,
                            i <<= 3;
                            while (0 == (128 & (+o ^ r)))
                                o = +o << 1, --i;
                            o = "(" + i + " bit)\n"
                        }
                        s && (n -= 256);
                        for (var a = new u(n), h = t + 1; h < e; ++h)
                            a.mulAdd(256, this.get(h));
                        return o + a.toString()
                    },
                    t.prototype.parseBitString = function (t, e, i) {
                        for (var n = this.get(t), s = (e - t - 1 << 3) - n, r = "(" + s + " bit)\n", o = "", a = t + 1; a < e; ++a) {
                            for (var h = this.get(a), u = a == e - 1 ? n : 0, c = 7; c >= u; --c)
                                o += h >> c & 1 ? "1" : "0";
                            if (o.length > i)
                                return r + f(o, i)
                        }
                        return r + o
                    },
                    t.prototype.parseOctetString = function (t, e, i) {
                        if (this.isASCII(t, e))
                            return f(this.parseStringISO(t, e), i);
                        var n = e - t,
                        s = "(" + n + " byte)\n";
                        i /= 2,
                        n > i && (e = t + i);
                        for (var r = t; r < e; ++r)
                            s += this.hexByte(this.get(r));
                        return n > i && (s += c),
                        s
                    },
                    t.prototype.parseOID = function (t, e, i) {
                        for (var n = "", s = new u, r = 0, o = t; o < e; ++o) {
                            var a = this.get(o);
                            if (s.mulAdd(128, 127 & a), r += 7, !(128 & a)) {
                                if ("" === n)
                                    if (s = s.simplify(), s instanceof u)
                                        s.sub(80), n = "2." + s.toString();
                                    else {
                                        var h = s < 80 ? s < 40 ? 0 : 1 : 2;
                                        n = h + "." + (s - 40 * h)
                                    }
                                else
                                    n += "." + s.toString();
                                if (n.length > i)
                                    return f(n, i);
                                s = new u,
                                r = 0
                            }
                        }
                        return r > 0 && (n += ".incomplete"),
                        n
                    },
                    t
                }
                (),
                m = function () {
                    function t(t, e, i, n, s) {
                        if (!(n instanceof v))
                            throw new Error("Invalid tag value.");
                        this.stream = t,
                        this.header = e,
                        this.length = i,
                        this.tag = n,
                        this.sub = s
                    }
                    return t.prototype.typeName = function () {
                        switch (this.tag.tagClass) {
                        case 0:
                            switch (this.tag.tagNumber) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString"
                            }
                            return "Universal_" + this.tag.tagNumber.toString();
                        case 1:
                            return "Application_" + this.tag.tagNumber.toString();
                        case 2:
                            return "[" + this.tag.tagNumber.toString() + "]";
                        case 3:
                            return "Private_" + this.tag.tagNumber.toString()
                        }
                    },
                    t.prototype.content = function (t) {
                        if (void 0 === this.tag)
                            return null;
                        void 0 === t && (t = 1 / 0);
                        var e = this.posContent(),
                        i = Math.abs(this.length);
                        if (!this.tag.isUniversal())
                            return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                        switch (this.tag.tagNumber) {
                        case 1:
                            return 0 === this.stream.get(e) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(e, e + i);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                        case 6:
                            return this.stream.parseOID(e, e + i, t);
                        case 16:
                        case 17:
                            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                        case 12:
                            return f(this.stream.parseStringUTF(e, e + i), t);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return f(this.stream.parseStringISO(e, e + i), t);
                        case 30:
                            return f(this.stream.parseStringBMP(e, e + i), t);
                        case 23:
                        case 24:
                            return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                        }
                        return null
                    },
                    t.prototype.toString = function () {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                    },
                    t.prototype.toPrettyString = function (t) {
                        void 0 === t && (t = "");
                        var e = t + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                            t += "  ";
                            for (var i = 0, n = this.sub.length; i < n; ++i)
                                e += this.sub[i].toPrettyString(t)
                        }
                        return e
                    },
                    t.prototype.posStart = function () {
                        return this.stream.pos
                    },
                    t.prototype.posContent = function () {
                        return this.stream.pos + this.header
                    },
                    t.prototype.posEnd = function () {
                        return this.stream.pos + this.header + Math.abs(this.length)
                    },
                    t.prototype.toHexString = function () {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                    },
                    t.decodeLength = function (t) {
                        var e = t.get(),
                        i = 127 & e;
                        if (i == e)
                            return i;
                        if (i > 6)
                            throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                        if (0 === i)
                            return null;
                        e = 0;
                        for (var n = 0; n < i; ++n)
                            e = 256 * e + t.get();
                        return e
                    },
                    t.prototype.getHexStringValue = function () {
                        var t = this.toHexString(),
                        e = 2 * this.header,
                        i = 2 * this.length;
                        return t.substr(e, i)
                    },
                    t.decode = function (e) {
                        var i;
                        i = e instanceof g ? e : new g(e, 0);
                        var n = new g(i),
                        s = new v(i),
                        r = t.decodeLength(i),
                        o = i.pos,
                        a = o - n.pos,
                        h = null,
                        u = function () {
                            var e = [];
                            if (null !== r) {
                                var n = o + r;
                                while (i.pos < n)
                                    e[e.length] = t.decode(i);
                                if (i.pos != n)
                                    throw new Error("Content size is not correct for container starting at offset " + o)
                            } else
                                try {
                                    for (; ; ) {
                                        var s = t.decode(i);
                                        if (s.tag.isEOC())
                                            break;
                                        e[e.length] = s
                                    }
                                    r = o - i.pos
                                } catch (a) {
                                    throw new Error("Exception while decoding undefined length content: " + a)
                                }
                            return e
                        };
                        if (s.tagConstructed)
                            h = u();
                        else if (s.isUniversal() && (3 == s.tagNumber || 4 == s.tagNumber))
                            try {
                                if (3 == s.tagNumber && 0 != i.get())
                                    throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                                h = u();
                                for (var c = 0; c < h.length; ++c)
                                    if (h[c].tag.isEOC())
                                        throw new Error("EOC is not supposed to be actual content.")
                            } catch (l) {
                                h = null
                            }
                        if (null === h) {
                            if (null === r)
                                throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
                            i.pos = o + Math.abs(r)
                        }
                        return new t(n, a, r, s, h)
                    },
                    t
                }
                (),
                v = function () {
                    function t(t) {
                        var e = t.get();
                        if (this.tagClass = e >> 6, this.tagConstructed = 0 !== (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                            var i = new u;
                            do {
                                e = t.get(),
                                i.mulAdd(128, 127 & e)
                            } while (128 & e);
                            this.tagNumber = i.simplify()
                        }
                    }
                    return t.prototype.isUniversal = function () {
                        return 0 === this.tagClass
                    },
                    t.prototype.isEOC = function () {
                        return 0 === this.tagClass && 0 === this.tagNumber
                    },
                    t
                }
                (),
                y = i("93a9"),
                b = 0xdeadbeefcafe,
                w = 15715070 == (16777215 & b),
                D = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                S = (1 << 26) / D[D.length - 1],
                T = function () {
                    function t(t, e, i) {
                        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                    }
                    return t.prototype.toString = function (t) {
                        if (this.s < 0)
                            return "-" + this.negate().toString(t);
                        var e;
                        if (16 == t)
                            e = 4;
                        else if (8 == t)
                            e = 3;
                        else if (2 == t)
                            e = 1;
                        else if (32 == t)
                            e = 5;
                        else {
                            if (4 != t)
                                return this.toRadix(t);
                            e = 2
                        }
                        var i,
                        n = (1 << e) - 1,
                        s = !1,
                        r = "",
                        o = this.t,
                        a = this.DB - o * this.DB % e;
                        if (o-- > 0) {
                            a < this.DB && (i = this[o] >> a) > 0 && (s = !0, r = Object(y["b"])(i));
                            while (o >= 0)
                                a < e ? (i = (this[o] & (1 << a) - 1) << e - a, i |= this[--o] >> (a += this.DB - e)) : (i = this[o] >> (a -= e) & n, a <= 0 && (a += this.DB, --o)), i > 0 && (s = !0), s && (r += Object(y["b"])(i))
                        }
                        return s ? r : "0"
                    },
                    t.prototype.negate = function () {
                        var e = A();
                        return t.ZERO.subTo(this, e),
                        e
                    },
                    t.prototype.abs = function () {
                        return this.s < 0 ? this.negate() : this
                    },
                    t.prototype.compareTo = function (t) {
                        var e = this.s - t.s;
                        if (0 != e)
                            return e;
                        var i = this.t;
                        if (e = i - t.t, 0 != e)
                            return this.s < 0 ? -e : e;
                        while (--i >= 0)
                            if (0 != (e = this[i] - t[i]))
                                return e;
                        return 0
                    },
                    t.prototype.bitLength = function () {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + V(this[this.t - 1] ^ this.s & this.DM)
                    },
                    t.prototype.mod = function (e) {
                        var i = A();
                        return this.abs().divRemTo(e, null, i),
                        this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i),
                        i
                    },
                    t.prototype.modPowInt = function (t, e) {
                        var i;
                        return i = t < 256 || e.isEven() ? new x(e) : new O(e),
                        this.exp(t, i)
                    },
                    t.prototype.clone = function () {
                        var t = A();
                        return this.copyTo(t),
                        t
                    },
                    t.prototype.intValue = function () {
                        if (this.s < 0) {
                            if (1 == this.t)
                                return this[0] - this.DV;
                            if (0 == this.t)
                                return -1
                        } else {
                            if (1 == this.t)
                                return this[0];
                            if (0 == this.t)
                                return 0
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                    },
                    t.prototype.byteValue = function () {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                    },
                    t.prototype.shortValue = function () {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                    },
                    t.prototype.signum = function () {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                    },
                    t.prototype.toByteArray = function () {
                        var t = this.t,
                        e = [];
                        e[0] = this.s;
                        var i,
                        n = this.DB - t * this.DB % 8,
                        s = 0;
                        if (t-- > 0) {
                            n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[s++] = i | this.s << this.DB - n);
                            while (t >= 0)
                                n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n, i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == s && (128 & this.s) != (128 & i) && ++s, (s > 0 || i != this.s) && (e[s++] = i)
                        }
                        return e
                    },
                    t.prototype.equals = function (t) {
                        return 0 == this.compareTo(t)
                    },
                    t.prototype.min = function (t) {
                        return this.compareTo(t) < 0 ? this : t
                    },
                    t.prototype.max = function (t) {
                        return this.compareTo(t) > 0 ? this : t
                    },
                    t.prototype.and = function (t) {
                        var e = A();
                        return this.bitwiseTo(t, y["d"], e),
                        e
                    },
                    t.prototype.or = function (t) {
                        var e = A();
                        return this.bitwiseTo(t, y["f"], e),
                        e
                    },
                    t.prototype.xor = function (t) {
                        var e = A();
                        return this.bitwiseTo(t, y["g"], e),
                        e
                    },
                    t.prototype.andNot = function (t) {
                        var e = A();
                        return this.bitwiseTo(t, y["e"], e),
                        e
                    },
                    t.prototype.not = function () {
                        for (var t = A(), e = 0; e < this.t; ++e)
                            t[e] = this.DM & ~this[e];
                        return t.t = this.t,
                        t.s = ~this.s,
                        t
                    },
                    t.prototype.shiftLeft = function (t) {
                        var e = A();
                        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                        e
                    },
                    t.prototype.shiftRight = function (t) {
                        var e = A();
                        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                        e
                    },
                    t.prototype.getLowestSetBit = function () {
                        for (var t = 0; t < this.t; ++t)
                            if (0 != this[t])
                                return t * this.DB + Object(y["c"])(this[t]);
                        return this.s < 0 ? this.t * this.DB : -1
                    },
                    t.prototype.bitCount = function () {
                        for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                            t += Object(y["a"])(this[i] ^ e);
                        return t
                    },
                    t.prototype.testBit = function (t) {
                        var e = Math.floor(t / this.DB);
                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                    },
                    t.prototype.setBit = function (t) {
                        return this.changeBit(t, y["f"])
                    },
                    t.prototype.clearBit = function (t) {
                        return this.changeBit(t, y["e"])
                    },
                    t.prototype.flipBit = function (t) {
                        return this.changeBit(t, y["g"])
                    },
                    t.prototype.add = function (t) {
                        var e = A();
                        return this.addTo(t, e),
                        e
                    },
                    t.prototype.subtract = function (t) {
                        var e = A();
                        return this.subTo(t, e),
                        e
                    },
                    t.prototype.multiply = function (t) {
                        var e = A();
                        return this.multiplyTo(t, e),
                        e
                    },
                    t.prototype.divide = function (t) {
                        var e = A();
                        return this.divRemTo(t, e, null),
                        e
                    },
                    t.prototype.remainder = function (t) {
                        var e = A();
                        return this.divRemTo(t, null, e),
                        e
                    },
                    t.prototype.divideAndRemainder = function (t) {
                        var e = A(),
                        i = A();
                        return this.divRemTo(t, e, i),
                        [e, i]
                    },
                    t.prototype.modPow = function (t, e) {
                        var i,
                        n,
                        s = t.bitLength(),
                        r = R(1);
                        if (s <= 0)
                            return r;
                        i = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6,
                        n = s < 8 ? new x(e) : e.isEven() ? new I(e) : new O(e);
                        var o = [],
                        a = 3,
                        h = i - 1,
                        u = (1 << i) - 1;
                        if (o[1] = n.convert(this), i > 1) {
                            var c = A();
                            n.sqrTo(o[1], c);
                            while (a <= u)
                                o[a] = A(), n.mulTo(c, o[a - 2], o[a]), a += 2
                        }
                        var l,
                        d,
                        f = t.t - 1,
                        p = !0,
                        g = A();
                        s = V(t[f]) - 1;
                        while (f >= 0) {
                            s >= h ? l = t[f] >> s - h & u : (l = (t[f] & (1 << s + 1) - 1) << h - s, f > 0 && (l |= t[f - 1] >> this.DB + s - h)),
                            a = i;
                            while (0 == (1 & l))
                                l >>= 1, --a;
                            if ((s -= a) < 0 && (s += this.DB, --f), p)
                                o[l].copyTo(r), p = !1;
                            else {
                                while (a > 1)
                                    n.sqrTo(r, g), n.sqrTo(g, r), a -= 2;
                                a > 0 ? n.sqrTo(r, g) : (d = r, r = g, g = d),
                                n.mulTo(g, o[l], r)
                            }
                            while (f >= 0 && 0 == (t[f] & 1 << s))
                                n.sqrTo(r, g), d = r, r = g, g = d, --s < 0 && (s = this.DB - 1, --f)
                        }
                        return n.revert(r)
                    },
                    t.prototype.modInverse = function (e) {
                        var i = e.isEven();
                        if (this.isEven() && i || 0 == e.signum())
                            return t.ZERO;
                        var n = e.clone(),
                        s = this.clone(),
                        r = R(1),
                        o = R(0),
                        a = R(0),
                        h = R(1);
                        while (0 != n.signum()) {
                            while (n.isEven())
                                n.rShiftTo(1, n), i ? (r.isEven() && o.isEven() || (r.addTo(this, r), o.subTo(e, o)), r.rShiftTo(1, r)) : o.isEven() || o.subTo(e, o), o.rShiftTo(1, o);
                            while (s.isEven())
                                s.rShiftTo(1, s), i ? (a.isEven() && h.isEven() || (a.addTo(this, a), h.subTo(e, h)), a.rShiftTo(1, a)) : h.isEven() || h.subTo(e, h), h.rShiftTo(1, h);
                            n.compareTo(s) >= 0 ? (n.subTo(s, n), i && r.subTo(a, r), o.subTo(h, o)) : (s.subTo(n, s), i && a.subTo(r, a), h.subTo(o, h))
                        }
                        return 0 != s.compareTo(t.ONE) ? t.ZERO : h.compareTo(e) >= 0 ? h.subtract(e) : h.signum() < 0 ? (h.addTo(e, h), h.signum() < 0 ? h.add(e) : h) : h
                    },
                    t.prototype.pow = function (t) {
                        return this.exp(t, new E)
                    },
                    t.prototype.gcd = function (t) {
                        var e = this.s < 0 ? this.negate() : this.clone(),
                        i = t.s < 0 ? t.negate() : t.clone();
                        if (e.compareTo(i) < 0) {
                            var n = e;
                            e = i,
                            i = n
                        }
                        var s = e.getLowestSetBit(),
                        r = i.getLowestSetBit();
                        if (r < 0)
                            return e;
                        s < r && (r = s),
                        r > 0 && (e.rShiftTo(r, e), i.rShiftTo(r, i));
                        while (e.signum() > 0)
                            (s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                        return r > 0 && i.lShiftTo(r, i),
                        i
                    },
                    t.prototype.isProbablePrime = function (t) {
                        var e,
                        i = this.abs();
                        if (1 == i.t && i[0] <= D[D.length - 1]) {
                            for (e = 0; e < D.length; ++e)
                                if (i[0] == D[e])
                                    return !0;
                            return !1
                        }
                        if (i.isEven())
                            return !1;
                        e = 1;
                        while (e < D.length) {
                            var n = D[e],
                            s = e + 1;
                            while (s < D.length && n < S)
                                n *= D[s++];
                            n = i.modInt(n);
                            while (e < s)
                                if (n % D[e++] == 0)
                                    return !1
                        }
                        return i.millerRabin(t)
                    },
                    t.prototype.copyTo = function (t) {
                        for (var e = this.t - 1; e >= 0; --e)
                            t[e] = this[e];
                        t.t = this.t,
                        t.s = this.s
                    },
                    t.prototype.fromInt = function (t) {
                        this.t = 1,
                        this.s = t < 0 ? -1 : 0,
                        t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                    },
                    t.prototype.fromString = function (e, i) {
                        var n;
                        if (16 == i)
                            n = 4;
                        else if (8 == i)
                            n = 3;
                        else if (256 == i)
                            n = 8;
                        else if (2 == i)
                            n = 1;
                        else if (32 == i)
                            n = 5;
                        else {
                            if (4 != i)
                                return void this.fromRadix(e, i);
                            n = 2
                        }
                        this.t = 0,
                        this.s = 0;
                        var s = e.length,
                        r = !1,
                        o = 0;
                        while (--s >= 0) {
                            var a = 8 == n ? 255 & +e[s] : k(e, s);
                            a < 0 ? "-" == e.charAt(s) && (r = !0) : (r = !1, 0 == o ? this[this.t++] = a : o + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, o += n, o >= this.DB && (o -= this.DB))
                        }
                        8 == n && 0 != (128 & +e[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                        this.clamp(),
                        r && t.ZERO.subTo(this, this)
                    },
                    t.prototype.clamp = function () {
                        var t = this.s & this.DM;
                        while (this.t > 0 && this[this.t - 1] == t)
                            --this.t
                    },
                    t.prototype.dlShiftTo = function (t, e) {
                        var i;
                        for (i = this.t - 1; i >= 0; --i)
                            e[i + t] = this[i];
                        for (i = t - 1; i >= 0; --i)
                            e[i] = 0;
                        e.t = this.t + t,
                        e.s = this.s
                    },
                    t.prototype.drShiftTo = function (t, e) {
                        for (var i = t; i < this.t; ++i)
                            e[i - t] = this[i];
                        e.t = Math.max(this.t - t, 0),
                        e.s = this.s
                    },
                    t.prototype.lShiftTo = function (t, e) {
                        for (var i = t % this.DB, n = this.DB - i, s = (1 << n) - 1, r = Math.floor(t / this.DB), o = this.s << i & this.DM, a = this.t - 1; a >= 0; --a)
                            e[a + r + 1] = this[a] >> n | o, o = (this[a] & s) << i;
                        for (a = r - 1; a >= 0; --a)
                            e[a] = 0;
                        e[r] = o,
                        e.t = this.t + r + 1,
                        e.s = this.s,
                        e.clamp()
                    },
                    t.prototype.rShiftTo = function (t, e) {
                        e.s = this.s;
                        var i = Math.floor(t / this.DB);
                        if (i >= this.t)
                            e.t = 0;
                        else {
                            var n = t % this.DB,
                            s = this.DB - n,
                            r = (1 << n) - 1;
                            e[0] = this[i] >> n;
                            for (var o = i + 1; o < this.t; ++o)
                                e[o - i - 1] |= (this[o] & r) << s, e[o - i] = this[o] >> n;
                            n > 0 && (e[this.t - i - 1] |= (this.s & r) << s),
                            e.t = this.t - i,
                            e.clamp()
                        }
                    },
                    t.prototype.subTo = function (t, e) {
                        var i = 0,
                        n = 0,
                        s = Math.min(t.t, this.t);
                        while (i < s)
                            n += this[i] - t[i], e[i++] = n & this.DM, n >>= this.DB;
                        if (t.t < this.t) {
                            n -= t.s;
                            while (i < this.t)
                                n += this[i], e[i++] = n & this.DM, n >>= this.DB;
                            n += this.s
                        } else {
                            n += this.s;
                            while (i < t.t)
                                n -= t[i], e[i++] = n & this.DM, n >>= this.DB;
                            n -= t.s
                        }
                        e.s = n < 0 ? -1 : 0,
                        n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n),
                        e.t = i,
                        e.clamp()
                    },
                    t.prototype.multiplyTo = function (e, i) {
                        var n = this.abs(),
                        s = e.abs(),
                        r = n.t;
                        i.t = r + s.t;
                        while (--r >= 0)
                            i[r] = 0;
                        for (r = 0; r < s.t; ++r)
                            i[r + n.t] = n.am(0, s[r], i, r, 0, n.t);
                        i.s = 0,
                        i.clamp(),
                        this.s != e.s && t.ZERO.subTo(i, i)
                    },
                    t.prototype.squareTo = function (t) {
                        var e = this.abs(),
                        i = t.t = 2 * e.t;
                        while (--i >= 0)
                            t[i] = 0;
                        for (i = 0; i < e.t - 1; ++i) {
                            var n = e.am(i, e[i], t, 2 * i, 0, 1);
                            (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                        }
                        t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                        t.s = 0,
                        t.clamp()
                    },
                    t.prototype.divRemTo = function (e, i, n) {
                        var s = e.abs();
                        if (!(s.t <= 0)) {
                            var r = this.abs();
                            if (r.t < s.t)
                                return null != i && i.fromInt(0), void(null != n && this.copyTo(n));
                            null == n && (n = A());
                            var o = A(),
                            a = this.s,
                            h = e.s,
                            u = this.DB - V(s[s.t - 1]);
                            u > 0 ? (s.lShiftTo(u, o), r.lShiftTo(u, n)) : (s.copyTo(o), r.copyTo(n));
                            var c = o.t,
                            l = o[c - 1];
                            if (0 != l) {
                                var d = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
                                f = this.FV / d,
                                p = (1 << this.F1) / d,
                                g = 1 << this.F2,
                                m = n.t,
                                v = m - c,
                                y = null == i ? A() : i;
                                o.dlShiftTo(v, y),
                                n.compareTo(y) >= 0 && (n[n.t++] = 1, n.subTo(y, n)),
                                t.ONE.dlShiftTo(c, y),
                                y.subTo(o, o);
                                while (o.t < c)
                                    o[o.t++] = 0;
                                while (--v >= 0) {
                                    var b = n[--m] == l ? this.DM : Math.floor(n[m] * f + (n[m - 1] + g) * p);
                                    if ((n[m] += o.am(0, b, n, v, 0, c)) < b) {
                                        o.dlShiftTo(v, y),
                                        n.subTo(y, n);
                                        while (n[m] < --b)
                                            n.subTo(y, n)
                                    }
                                }
                                null != i && (n.drShiftTo(c, i), a != h && t.ZERO.subTo(i, i)),
                                n.t = c,
                                n.clamp(),
                                u > 0 && n.rShiftTo(u, n),
                                a < 0 && t.ZERO.subTo(n, n)
                            }
                        }
                    },
                    t.prototype.invDigit = function () {
                        if (this.t < 1)
                            return 0;
                        var t = this[0];
                        if (0 == (1 & t))
                            return 0;
                        var e = 3 & t;
                        return e = e * (2 - (15 & t) * e) & 15,
                        e = e * (2 - (255 & t) * e) & 255,
                        e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
                        e = e * (2 - t * e % this.DV) % this.DV,
                        e > 0 ? this.DV - e : -e
                    },
                    t.prototype.isEven = function () {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                    },
                    t.prototype.exp = function (e, i) {
                        if (e > 4294967295 || e < 1)
                            return t.ONE;
                        var n = A(),
                        s = A(),
                        r = i.convert(this),
                        o = V(e) - 1;
                        r.copyTo(n);
                        while (--o >= 0)
                            if (i.sqrTo(n, s), (e & 1 << o) > 0)
                                i.mulTo(s, r, n);
                            else {
                                var a = n;
                                n = s,
                                s = a
                            }
                        return i.revert(n)
                    },
                    t.prototype.chunkSize = function (t) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                    },
                    t.prototype.toRadix = function (t) {
                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36)
                            return "0";
                        var e = this.chunkSize(t),
                        i = Math.pow(t, e),
                        n = R(i),
                        s = A(),
                        r = A(),
                        o = "";
                        this.divRemTo(n, s, r);
                        while (s.signum() > 0)
                            o = (i + r.intValue()).toString(t).substr(1) + o, s.divRemTo(n, s, r);
                        return r.intValue().toString(t) + o
                    },
                    t.prototype.fromRadix = function (e, i) {
                        this.fromInt(0),
                        null == i && (i = 10);
                        for (var n = this.chunkSize(i), s = Math.pow(i, n), r = !1, o = 0, a = 0, h = 0; h < e.length; ++h) {
                            var u = k(e, h);
                            u < 0 ? "-" == e.charAt(h) && 0 == this.signum() && (r = !0) : (a = i * a + u, ++o >= n && (this.dMultiply(s), this.dAddOffset(a, 0), o = 0, a = 0))
                        }
                        o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(a, 0)),
                        r && t.ZERO.subTo(this, this)
                    },
                    t.prototype.fromNumber = function (e, i, n) {
                        if ("number" == typeof i)
                            if (e < 2)
                                this.fromInt(1);
                            else {
                                this.fromNumber(e, n),
                                this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), y["f"], this),
                                this.isEven() && this.dAddOffset(1, 0);
                                while (!this.isProbablePrime(i))
                                    this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this)
                            }
                        else {
                            var s = [],
                            r = 7 & e;
                            s.length = 1 + (e >> 3),
                            i.nextBytes(s),
                            r > 0 ? s[0] &= (1 << r) - 1 : s[0] = 0,
                            this.fromString(s, 256)
                        }
                    },
                    t.prototype.bitwiseTo = function (t, e, i) {
                        var n,
                        s,
                        r = Math.min(t.t, this.t);
                        for (n = 0; n < r; ++n)
                            i[n] = e(this[n], t[n]);
                        if (t.t < this.t) {
                            for (s = t.s & this.DM, n = r; n < this.t; ++n)
                                i[n] = e(this[n], s);
                            i.t = this.t
                        } else {
                            for (s = this.s & this.DM, n = r; n < t.t; ++n)
                                i[n] = e(s, t[n]);
                            i.t = t.t
                        }
                        i.s = e(this.s, t.s),
                        i.clamp()
                    },
                    t.prototype.changeBit = function (e, i) {
                        var n = t.ONE.shiftLeft(e);
                        return this.bitwiseTo(n, i, n),
                        n
                    },
                    t.prototype.addTo = function (t, e) {
                        var i = 0,
                        n = 0,
                        s = Math.min(t.t, this.t);
                        while (i < s)
                            n += this[i] + t[i], e[i++] = n & this.DM, n >>= this.DB;
                        if (t.t < this.t) {
                            n += t.s;
                            while (i < this.t)
                                n += this[i], e[i++] = n & this.DM, n >>= this.DB;
                            n += this.s
                        } else {
                            n += this.s;
                            while (i < t.t)
                                n += t[i], e[i++] = n & this.DM, n >>= this.DB;
                            n += t.s
                        }
                        e.s = n < 0 ? -1 : 0,
                        n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n),
                        e.t = i,
                        e.clamp()
                    },
                    t.prototype.dMultiply = function (t) {
                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                        ++this.t,
                        this.clamp()
                    },
                    t.prototype.dAddOffset = function (t, e) {
                        if (0 != t) {
                            while (this.t <= e)
                                this[this.t++] = 0;
                            this[e] += t;
                            while (this[e] >= this.DV)
                                this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                        }
                    },
                    t.prototype.multiplyLowerTo = function (t, e, i) {
                        var n = Math.min(this.t + t.t, e);
                        i.s = 0,
                        i.t = n;
                        while (n > 0)
                            i[--n] = 0;
                        for (var s = i.t - this.t; n < s; ++n)
                            i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
                        for (s = Math.min(t.t, e); n < s; ++n)
                            this.am(0, t[n], i, n, 0, e - n);
                        i.clamp()
                    },
                    t.prototype.multiplyUpperTo = function (t, e, i) {
                        --e;
                        var n = i.t = this.t + t.t - e;
                        i.s = 0;
                        while (--n >= 0)
                            i[n] = 0;
                        for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                            i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
                        i.clamp(),
                        i.drShiftTo(1, i)
                    },
                    t.prototype.modInt = function (t) {
                        if (t <= 0)
                            return 0;
                        var e = this.DV % t,
                        i = this.s < 0 ? t - 1 : 0;
                        if (this.t > 0)
                            if (0 == e)
                                i = this[0] % t;
                            else
                                for (var n = this.t - 1; n >= 0; --n)
                                    i = (e * i + this[n]) % t;
                        return i
                    },
                    t.prototype.millerRabin = function (e) {
                        var i = this.subtract(t.ONE),
                        n = i.getLowestSetBit();
                        if (n <= 0)
                            return !1;
                        var s = i.shiftRight(n);
                        e = e + 1 >> 1,
                        e > D.length && (e = D.length);
                        for (var r = A(), o = 0; o < e; ++o) {
                            r.fromInt(D[Math.floor(Math.random() * D.length)]);
                            var a = r.modPow(s, this);
                            if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(i)) {
                                var h = 1;
                                while (h++ < n && 0 != a.compareTo(i))
                                    if (a = a.modPowInt(2, this), 0 == a.compareTo(t.ONE))
                                        return !1;
                                if (0 != a.compareTo(i))
                                    return !1
                            }
                        }
                        return !0
                    },
                    t.prototype.square = function () {
                        var t = A();
                        return this.squareTo(t),
                        t
                    },
                    t.prototype.gcda = function (t, e) {
                        var i = this.s < 0 ? this.negate() : this.clone(),
                        n = t.s < 0 ? t.negate() : t.clone();
                        if (i.compareTo(n) < 0) {
                            var s = i;
                            i = n,
                            n = s
                        }
                        var r = i.getLowestSetBit(),
                        o = n.getLowestSetBit();
                        if (o < 0)
                            e(i);
                        else {
                            r < o && (o = r),
                            o > 0 && (i.rShiftTo(o, i), n.rShiftTo(o, n));
                            var a = function () {
                                (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                                (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                                i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)),
                                i.signum() > 0 ? setTimeout(a, 0) : (o > 0 && n.lShiftTo(o, n), setTimeout((function () {
                                            e(n)
                                        }), 0))
                            };
                            setTimeout(a, 10)
                        }
                    },
                    t.prototype.fromNumberAsync = function (e, i, n, s) {
                        if ("number" == typeof i)
                            if (e < 2)
                                this.fromInt(1);
                            else {
                                this.fromNumber(e, n),
                                this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), y["f"], this),
                                this.isEven() && this.dAddOffset(1, 0);
                                var r = this,
                                o = function () {
                                    r.dAddOffset(2, 0),
                                    r.bitLength() > e && r.subTo(t.ONE.shiftLeft(e - 1), r),
                                    r.isProbablePrime(i) ? setTimeout((function () {
                                            s()
                                        }), 0) : setTimeout(o, 0)
                                };
                                setTimeout(o, 0)
                            }
                        else {
                            var a = [],
                            h = 7 & e;
                            a.length = 1 + (e >> 3),
                            i.nextBytes(a),
                            h > 0 ? a[0] &= (1 << h) - 1 : a[0] = 0,
                            this.fromString(a, 256)
                        }
                    },
                    t
                }
                (),
                E = function () {
                    function t() {}
                    return t.prototype.convert = function (t) {
                        return t
                    },
                    t.prototype.revert = function (t) {
                        return t
                    },
                    t.prototype.mulTo = function (t, e, i) {
                        t.multiplyTo(e, i)
                    },
                    t.prototype.sqrTo = function (t, e) {
                        t.squareTo(e)
                    },
                    t
                }
                (),
                x = function () {
                    function t(t) {
                        this.m = t
                    }
                    return t.prototype.convert = function (t) {
                        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                    },
                    t.prototype.revert = function (t) {
                        return t
                    },
                    t.prototype.reduce = function (t) {
                        t.divRemTo(this.m, null, t)
                    },
                    t.prototype.mulTo = function (t, e, i) {
                        t.multiplyTo(e, i),
                        this.reduce(i)
                    },
                    t.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                        this.reduce(e)
                    },
                    t
                }
                (),
                O = function () {
                    function t(t) {
                        this.m = t,
                        this.mp = t.invDigit(),
                        this.mpl = 32767 & this.mp,
                        this.mph = this.mp >> 15,
                        this.um = (1 << t.DB - 15) - 1,
                        this.mt2 = 2 * t.t
                    }
                    return t.prototype.convert = function (t) {
                        var e = A();
                        return t.abs().dlShiftTo(this.m.t, e),
                        e.divRemTo(this.m, null, e),
                        t.s < 0 && e.compareTo(T.ZERO) > 0 && this.m.subTo(e, e),
                        e
                    },
                    t.prototype.revert = function (t) {
                        var e = A();
                        return t.copyTo(e),
                        this.reduce(e),
                        e
                    },
                    t.prototype.reduce = function (t) {
                        while (t.t <= this.mt2)
                            t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var i = 32767 & t[e],
                            n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            i = e + this.m.t,
                            t[i] += this.m.am(0, n, t, e, 0, this.m.t);
                            while (t[i] >= t.DV)
                                t[i] -= t.DV, t[++i]++
                        }
                        t.clamp(),
                        t.drShiftTo(this.m.t, t),
                        t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    },
                    t.prototype.mulTo = function (t, e, i) {
                        t.multiplyTo(e, i),
                        this.reduce(i)
                    },
                    t.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                        this.reduce(e)
                    },
                    t
                }
                (),
                I = function () {
                    function t(t) {
                        this.m = t,
                        this.r2 = A(),
                        this.q3 = A(),
                        T.ONE.dlShiftTo(2 * t.t, this.r2),
                        this.mu = this.r2.divide(t)
                    }
                    return t.prototype.convert = function (t) {
                        if (t.s < 0 || t.t > 2 * this.m.t)
                            return t.mod(this.m);
                        if (t.compareTo(this.m) < 0)
                            return t;
                        var e = A();
                        return t.copyTo(e),
                        this.reduce(e),
                        e
                    },
                    t.prototype.revert = function (t) {
                        return t
                    },
                    t.prototype.reduce = function (t) {
                        t.drShiftTo(this.m.t - 1, this.r2),
                        t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()),
                        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                        while (t.compareTo(this.r2) < 0)
                            t.dAddOffset(1, this.m.t + 1);
                        t.subTo(this.r2, t);
                        while (t.compareTo(this.m) >= 0)
                            t.subTo(this.m, t)
                    },
                    t.prototype.mulTo = function (t, e, i) {
                        t.multiplyTo(e, i),
                        this.reduce(i)
                    },
                    t.prototype.sqrTo = function (t, e) {
                        t.squareTo(e),
                        this.reduce(e)
                    },
                    t
                }
                ();
                function A() {
                    return new T(null)
                }
                function _(t, e) {
                    return new T(t, e)
                }
                var P = "undefined" !== typeof navigator;
                P && w && "Microsoft Internet Explorer" == navigator.appName ? (T.prototype.am = function (t, e, i, n, s, r) {
                    var o = 32767 & e,
                    a = e >> 15;
                    while (--r >= 0) {
                        var h = 32767 & this[t],
                        u = this[t++] >> 15,
                        c = a * h + u * o;
                        h = o * h + ((32767 & c) << 15) + i[n] + (1073741823 & s),
                        s = (h >>> 30) + (c >>> 15) + a * u + (s >>> 30),
                        i[n++] = 1073741823 & h
                    }
                    return s
                }, p = 30) : P && w && "Netscape" != navigator.appName ? (T.prototype.am = function (t, e, i, n, s, r) {
                    while (--r >= 0) {
                        var o = e * this[t++] + i[n] + s;
                        s = Math.floor(o / 67108864),
                        i[n++] = 67108863 & o
                    }
                    return s
                }, p = 26) : (T.prototype.am = function (t, e, i, n, s, r) {
                    var o = 16383 & e,
                    a = e >> 14;
                    while (--r >= 0) {
                        var h = 16383 & this[t],
                        u = this[t++] >> 14,
                        c = a * h + u * o;
                        h = o * h + ((16383 & c) << 14) + i[n] + s,
                        s = (h >> 28) + (c >> 14) + a * u,
                        i[n++] = 268435455 & h
                    }
                    return s
                }, p = 28),
                T.prototype.DB = p,
                T.prototype.DM = (1 << p) - 1,
                T.prototype.DV = 1 << p;
                var N = 52;
                T.prototype.FV = Math.pow(2, N),
                T.prototype.F1 = N - p,
                T.prototype.F2 = 2 * p - N;
                var C,
                B,
                j = [];
                for (C = "0".charCodeAt(0), B = 0; B <= 9; ++B)
                    j[C++] = B;
                for (C = "a".charCodeAt(0), B = 10; B < 36; ++B)
                    j[C++] = B;
                for (C = "A".charCodeAt(0), B = 10; B < 36; ++B)
                    j[C++] = B;
                function k(t, e) {
                    var i = j[t.charCodeAt(e)];
                    return null == i ? -1 : i
                }
                function R(t) {
                    var e = A();
                    return e.fromInt(t),
                    e
                }
                function V(t) {
                    var e,
                    i = 1;
                    return 0 != (e = t >>> 16) && (t = e, i += 16),
                    0 != (e = t >> 8) && (t = e, i += 8),
                    0 != (e = t >> 4) && (t = e, i += 4),
                    0 != (e = t >> 2) && (t = e, i += 2),
                    0 != (e = t >> 1) && (t = e, i += 1),
                    i
                }
                T.ZERO = R(0),
                T.ONE = R(1);
                var U = function () {
                    function t() {
                        this.i = 0,
                        this.j = 0,
                        this.S = []
                    }
                    return t.prototype.init = function (t) {
                        var e,
                        i,
                        n;
                        for (e = 0; e < 256; ++e)
                            this.S[e] = e;
                        for (i = 0, e = 0; e < 256; ++e)
                            i = i + this.S[e] + t[e % t.length] & 255, n = this.S[e], this.S[e] = this.S[i], this.S[i] = n;
                        this.i = 0,
                        this.j = 0
                    },
                    t.prototype.next = function () {
                        var t;
                        return this.i = this.i + 1 & 255,
                        this.j = this.j + this.S[this.i] & 255,
                        t = this.S[this.i],
                        this.S[this.i] = this.S[this.j],
                        this.S[this.j] = t,
                        this.S[t + this.S[this.i] & 255]
                    },
                    t
                }
                ();
                function q() {
                    return new U
                }
                var M,
                L,
                Q = 256,
                $ = null;
                if (null == $) {
                    $ = [],
                    L = 0;
                    var z = void 0;
                    if ("undefined" !== typeof window && window.crypto && window.crypto.getRandomValues) {
                        var H = new Uint32Array(256);
                        for (window.crypto.getRandomValues(H), z = 0; z < H.length; ++z)
                            $[L++] = 255 & H[z]
                    }
                    var K = 0,
                    F = function (t) {
                        if (K = K || 0, K >= 256 || L >= Q)
                            window.removeEventListener ? window.removeEventListener("mousemove", F, !1) : window.detachEvent && window.detachEvent("onmousemove", F);
                        else
                            try {
                                var e = t.x + t.y;
                                $[L++] = 255 & e,
                                K += 1
                            } catch (i) {}
                    };
                    "undefined" !== typeof window && (window.addEventListener ? window.addEventListener("mousemove", F, !1) : window.attachEvent && window.attachEvent("onmousemove", F))
                }
                function J() {
                    if (null == M) {
                        M = q();
                        while (L < Q) {
                            var t = Math.floor(65536 * Math.random());
                            $[L++] = 255 & t
                        }
                        for (M.init($), L = 0; L < $.length; ++L)
                            $[L] = 0;
                        L = 0
                    }
                    return M.next()
                }
                var G = function () {
                    function t() {}
                    return t.prototype.nextBytes = function (t) {
                        for (var e = 0; e < t.length; ++e)
                            t[e] = J()
                    },
                    t
                }
                ();
                function Z(t, e) {
                    if (e < t.length + 22)
                        return console.error("Message too long for RSA"), null;
                    for (var i = e - t.length - 6, n = "", s = 0; s < i; s += 2)
                        n += "ff";
                    var r = "0001" + n + "00" + t;
                    return _(r, 16)
                }
                function W(t, e) {
                    if (e < t.length + 11)
                        return console.error("Message too long for RSA"), null;
                    var i = [],
                    n = t.length - 1;
                    while (n >= 0 && e > 0) {
                        var s = t.charCodeAt(n--);
                        s < 128 ? i[--e] = s : s > 127 && s < 2048 ? (i[--e] = 63 & s | 128, i[--e] = s >> 6 | 192) : (i[--e] = 63 & s | 128, i[--e] = s >> 6 & 63 | 128, i[--e] = s >> 12 | 224)
                    }
                    i[--e] = 0;
                    var r = new G,
                    o = [];
                    while (e > 2) {
                        o[0] = 0;
                        while (0 == o[0])
                            r.nextBytes(o);
                        i[--e] = o[0]
                    }
                    return i[--e] = 2,
                    i[--e] = 0,
                    new T(i)
                }
                var Y = function () {
                    function t() {
                        this.n = null,
                        this.e = 0,
                        this.d = null,
                        this.p = null,
                        this.q = null,
                        this.dmp1 = null,
                        this.dmq1 = null,
                        this.coeff = null
                    }
                    return t.prototype.doPublic = function (t) {
                        return t.modPowInt(this.e, this.n)
                    },
                    t.prototype.doPrivate = function (t) {
                        if (null == this.p || null == this.q)
                            return t.modPow(this.d, this.n);
                        var e = t.mod(this.p).modPow(this.dmp1, this.p),
                        i = t.mod(this.q).modPow(this.dmq1, this.q);
                        while (e.compareTo(i) < 0)
                            e = e.add(this.p);
                        return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
                    },
                    t.prototype.setPublic = function (t, e) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                    },
                    t.prototype.encrypt = function (t) {
                        var e = this.n.bitLength() + 7 >> 3,
                        i = W(t, e);
                        if (null == i)
                            return null;
                        var n = this.doPublic(i);
                        if (null == n)
                            return null;
                        for (var s = n.toString(16), r = s.length, o = 0; o < 2 * e - r; o++)
                            s = "0" + s;
                        return s
                    },
                    t.prototype.setPrivate = function (t, e, i) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16), this.d = _(i, 16)) : console.error("Invalid RSA private key")
                    },
                    t.prototype.setPrivateEx = function (t, e, i, n, s, r, o, a) {
                        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16), this.d = _(i, 16), this.p = _(n, 16), this.q = _(s, 16), this.dmp1 = _(r, 16), this.dmq1 = _(o, 16), this.coeff = _(a, 16)) : console.error("Invalid RSA private key")
                    },
                    t.prototype.generate = function (t, e) {
                        var i = new G,
                        n = t >> 1;
                        this.e = parseInt(e, 16);
                        for (var s = new T(e, 16); ; ) {
                            for (; ; )
                                if (this.p = new T(t - n, 1, i), 0 == this.p.subtract(T.ONE).gcd(s).compareTo(T.ONE) && this.p.isProbablePrime(10))
                                    break;
                            for (; ; )
                                if (this.q = new T(n, 1, i), 0 == this.q.subtract(T.ONE).gcd(s).compareTo(T.ONE) && this.q.isProbablePrime(10))
                                    break;
                            if (this.p.compareTo(this.q) <= 0) {
                                var r = this.p;
                                this.p = this.q,
                                this.q = r
                            }
                            var o = this.p.subtract(T.ONE),
                            a = this.q.subtract(T.ONE),
                            h = o.multiply(a);
                            if (0 == h.gcd(s).compareTo(T.ONE)) {
                                this.n = this.p.multiply(this.q),
                                this.d = s.modInverse(h),
                                this.dmp1 = this.d.mod(o),
                                this.dmq1 = this.d.mod(a),
                                this.coeff = this.q.modInverse(this.p);
                                break
                            }
                        }
                    },
                    t.prototype.decrypt = function (t) {
                        var e = _(t, 16),
                        i = this.doPrivate(e);
                        return null == i ? null : X(i, this.n.bitLength() + 7 >> 3)
                    },
                    t.prototype.generateAsync = function (t, e, i) {
                        var n = new G,
                        s = t >> 1;
                        this.e = parseInt(e, 16);
                        var r = new T(e, 16),
                        o = this,
                        a = function () {
                            var e = function () {
                                if (o.p.compareTo(o.q) <= 0) {
                                    var t = o.p;
                                    o.p = o.q,
                                    o.q = t
                                }
                                var e = o.p.subtract(T.ONE),
                                n = o.q.subtract(T.ONE),
                                s = e.multiply(n);
                                0 == s.gcd(r).compareTo(T.ONE) ? (o.n = o.p.multiply(o.q), o.d = r.modInverse(s), o.dmp1 = o.d.mod(e), o.dmq1 = o.d.mod(n), o.coeff = o.q.modInverse(o.p), setTimeout((function () {
                                            i()
                                        }), 0)) : setTimeout(a, 0)
                            },
                            h = function () {
                                o.q = A(),
                                o.q.fromNumberAsync(s, 1, n, (function () {
                                        o.q.subtract(T.ONE).gcda(r, (function (t) {
                                                0 == t.compareTo(T.ONE) && o.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(h, 0)
                                            }))
                                    }))
                            },
                            u = function () {
                                o.p = A(),
                                o.p.fromNumberAsync(t - s, 1, n, (function () {
                                        o.p.subtract(T.ONE).gcda(r, (function (t) {
                                                0 == t.compareTo(T.ONE) && o.p.isProbablePrime(10) ? setTimeout(h, 0) : setTimeout(u, 0)
                                            }))
                                    }))
                            };
                            setTimeout(u, 0)
                        };
                        setTimeout(a, 0)
                    },
                    t.prototype.sign = function (t, e, i) {
                        var n = et(i),
                        s = n + e(t).toString(),
                        r = Z(s, this.n.bitLength() / 4);
                        if (null == r)
                            return null;
                        var o = this.doPrivate(r);
                        if (null == o)
                            return null;
                        var a = o.toString(16);
                        return 0 == (1 & a.length) ? a : "0" + a
                    },
                    t.prototype.verify = function (t, e, i) {
                        var n = _(e, 16),
                        s = this.doPublic(n);
                        if (null == s)
                            return null;
                        var r = s.toString(16).replace(/^1f+00/, ""),
                        o = it(r);
                        return o == i(t).toString()
                    },
                    t
                }
                ();
                function X(t, e) {
                    var i = t.toByteArray(),
                    n = 0;
                    while (n < i.length && 0 == i[n])
                        ++n;
                    if (i.length - n != e - 1 || 2 != i[n])
                        return null;
                    ++n;
                    while (0 != i[n])
                        if (++n >= i.length)
                            return null;
                    var s = "";
                    while (++n < i.length) {
                        var r = 255 & i[n];
                        r < 128 ? s += String.fromCharCode(r) : r > 191 && r < 224 ? (s += String.fromCharCode((31 & r) << 6 | 63 & i[n + 1]), ++n) : (s += String.fromCharCode((15 & r) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]), n += 2)
                    }
                    return s
                }
                var tt = {
                    md2: "3020300c06082a864886f70d020205000410",
                    md5: "3020300c06082a864886f70d020505000410",
                    sha1: "3021300906052b0e03021a05000414",
                    sha224: "302d300d06096086480165030402040500041c",
                    sha256: "3031300d060960864801650304020105000420",
                    sha384: "3041300d060960864801650304020205000430",
                    sha512: "3051300d060960864801650304020305000440",
                    ripemd160: "3021300906052b2403020105000414"
                };
                function et(t) {
                    return tt[t] || ""
                }
                function it(t) {
                    for (var e in tt)
                        if (tt.hasOwnProperty(e)) {
                            var i = tt[e],
                            n = i.length;
                            if (t.substr(0, n) == i)
                                return t.substr(n)
                        }
                    return t
                }
                /*!
                Copyright (c) 2011, Yahoo! Inc. All rights reserved.
                Code licensed under the BSD License:
                http://developer.yahoo.com/yui/license.html
                version: 2.9.0
                 */
                var nt = {};
                nt.lang = {
                    extend: function (t, e, i) {
                        if (!e || !t)
                            throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                        var n = function () {};
                        if (n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), i) {
                            var s;
                            for (s in i)
                                t.prototype[s] = i[s];
                            var r = function () {},
                            o = ["toString", "valueOf"];
                            try {
                                /MSIE/.test(navigator.userAgent) && (r = function (t, e) {
                                    for (s = 0; s < o.length; s += 1) {
                                        var i = o[s],
                                        n = e[i];
                                        "function" === typeof n && n != Object.prototype[i] && (t[i] = n)
                                    }
                                })
                            } catch (a) {}
                            r(t.prototype, i)
                        }
                    }
                };
                /**
                 * @fileOverview
                 * @name asn1-1.0.js
                 * @author Kenji Urushima kenji.urushima@gmail.com
                 * @version asn1 1.0.13 (2017-Jun-02)
                 * @since jsrsasign 2.1
                 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
                 */
                var st = {};
                "undefined" != typeof st.asn1 && st.asn1 || (st.asn1 = {}),
                st.asn1.ASN1Util = new function () {
                    this.integerToByteHex = function (t) {
                        var e = t.toString(16);
                        return e.length % 2 == 1 && (e = "0" + e),
                        e
                    },
                    this.bigIntToMinTwosComplementsHex = function (t) {
                        var e = t.toString(16);
                        if ("-" != e.substr(0, 1))
                            e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                        else {
                            var i = e.substr(1),
                            n = i.length;
                            n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                            for (var s = "", r = 0; r < n; r++)
                                s += "f";
                            var o = new T(s, 16),
                            a = o.xor(t).add(T.ONE);
                            e = a.toString(16).replace(/^-/, "")
                        }
                        return e
                    },
                    this.getPEMStringFromHex = function (t, e) {
                        return hextopem(t, e)
                    },
                    this.newObject = function (t) {
                        var e = st,
                        i = e.asn1,
                        n = i.DERBoolean,
                        s = i.DERInteger,
                        r = i.DERBitString,
                        o = i.DEROctetString,
                        a = i.DERNull,
                        h = i.DERObjectIdentifier,
                        u = i.DEREnumerated,
                        c = i.DERUTF8String,
                        l = i.DERNumericString,
                        d = i.DERPrintableString,
                        f = i.DERTeletexString,
                        p = i.DERIA5String,
                        g = i.DERUTCTime,
                        m = i.DERGeneralizedTime,
                        v = i.DERSequence,
                        y = i.DERSet,
                        b = i.DERTaggedObject,
                        w = i.ASN1Util.newObject,
                        D = Object.keys(t);
                        if (1 != D.length)
                            throw "key of param shall be only one.";
                        var S = D[0];
                        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + S + ":"))
                            throw "undefined key: " + S;
                        if ("bool" == S)
                            return new n(t[S]);
                        if ("int" == S)
                            return new s(t[S]);
                        if ("bitstr" == S)
                            return new r(t[S]);
                        if ("octstr" == S)
                            return new o(t[S]);
                        if ("null" == S)
                            return new a(t[S]);
                        if ("oid" == S)
                            return new h(t[S]);
                        if ("enum" == S)
                            return new u(t[S]);
                        if ("utf8str" == S)
                            return new c(t[S]);
                        if ("numstr" == S)
                            return new l(t[S]);
                        if ("prnstr" == S)
                            return new d(t[S]);
                        if ("telstr" == S)
                            return new f(t[S]);
                        if ("ia5str" == S)
                            return new p(t[S]);
                        if ("utctime" == S)
                            return new g(t[S]);
                        if ("gentime" == S)
                            return new m(t[S]);
                        if ("seq" == S) {
                            for (var T = t[S], E = [], x = 0; x < T.length; x++) {
                                var O = w(T[x]);
                                E.push(O)
                            }
                            return new v({
                                array: E
                            })
                        }
                        if ("set" == S) {
                            for (T = t[S], E = [], x = 0; x < T.length; x++) {
                                O = w(T[x]);
                                E.push(O)
                            }
                            return new y({
                                array: E
                            })
                        }
                        if ("tag" == S) {
                            var I = t[S];
                            if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                                var A = w(I[2]);
                                return new b({
                                    tag: I[0],
                                    explicit: I[1],
                                    obj: A
                                })
                            }
                            var _ = {};
                            if (void 0 !== I.explicit && (_.explicit = I.explicit), void 0 !== I.tag && (_.tag = I.tag), void 0 === I.obj)
                                throw "obj shall be specified for 'tag'.";
                            return _.obj = w(I.obj),
                            new b(_)
                        }
                    },
                    this.jsonToASN1HEX = function (t) {
                        var e = this.newObject(t);
                        return e.getEncodedHex()
                    }
                },
                st.asn1.ASN1Util.oidHexToInt = function (t) {
                    for (var e = "", i = parseInt(t.substr(0, 2), 16), n = Math.floor(i / 40), s = i % 40, r = (e = n + "." + s, ""), o = 2; o < t.length; o += 2) {
                        var a = parseInt(t.substr(o, 2), 16),
                        h = ("00000000" + a.toString(2)).slice(-8);
                        if (r += h.substr(1, 7), "0" == h.substr(0, 1)) {
                            var u = new T(r, 2);
                            e = e + "." + u.toString(10),
                            r = ""
                        }
                    }
                    return e
                },
                st.asn1.ASN1Util.oidIntToHex = function (t) {
                    var e = function (t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e),
                        e
                    },
                    i = function (t) {
                        var i = "",
                        n = new T(t, 10),
                        s = n.toString(2),
                        r = 7 - s.length % 7;
                        7 == r && (r = 0);
                        for (var o = "", a = 0; a < r; a++)
                            o += "0";
                        s = o + s;
                        for (a = 0; a < s.length - 1; a += 7) {
                            var h = s.substr(a, 7);
                            a != s.length - 7 && (h = "1" + h),
                            i += e(parseInt(h, 2))
                        }
                        return i
                    };
                    if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                    var n = "",
                    s = t.split("."),
                    r = 40 * parseInt(s[0]) + parseInt(s[1]);
                    n += e(r),
                    s.splice(0, 2);
                    for (var o = 0; o < s.length; o++)
                        n += i(s[o]);
                    return n
                },
                st.asn1.ASN1Object = function () {
                    var t = "";
                    this.getLengthHexFromValue = function () {
                        if ("undefined" == typeof this.hV || null == this.hV)
                            throw "this.hV is null or undefined.";
                        if (this.hV.length % 2 == 1)
                            throw "value hex must be even length: n=" + t.length + ",v=" + this.hV;
                        var e = this.hV.length / 2,
                        i = e.toString(16);
                        if (i.length % 2 == 1 && (i = "0" + i), e < 128)
                            return i;
                        var n = i.length / 2;
                        if (n > 15)
                            throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                        var s = 128 + n;
                        return s.toString(16) + i
                    },
                    this.getEncodedHex = function () {
                        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
                        this.hTLV
                    },
                    this.getValueHex = function () {
                        return this.getEncodedHex(),
                        this.hV
                    },
                    this.getFreshValueHex = function () {
                        return ""
                    }
                },
                st.asn1.DERAbstractString = function (t) {
                    st.asn1.DERAbstractString.superclass.constructor.call(this);
                    this.getString = function () {
                        return this.s
                    },
                    this.setString = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                    },
                    this.setStringHex = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    "undefined" != typeof t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t["str"] ? this.setString(t["str"]) : "undefined" != typeof t["hex"] && this.setStringHex(t["hex"]))
                },
                nt.lang.extend(st.asn1.DERAbstractString, st.asn1.ASN1Object),
                st.asn1.DERAbstractTime = function (t) {
                    st.asn1.DERAbstractTime.superclass.constructor.call(this);
                    this.localDateToUTC = function (t) {
                        utc = t.getTime() + 6e4 * t.getTimezoneOffset();
                        var e = new Date(utc);
                        return e
                    },
                    this.formatDate = function (t, e, i) {
                        var n = this.zeroPadding,
                        s = this.localDateToUTC(t),
                        r = String(s.getFullYear());
                        "utc" == e && (r = r.substr(2, 2));
                        var o = n(String(s.getMonth() + 1), 2),
                        a = n(String(s.getDate()), 2),
                        h = n(String(s.getHours()), 2),
                        u = n(String(s.getMinutes()), 2),
                        c = n(String(s.getSeconds()), 2),
                        l = r + o + a + h + u + c;
                        if (!0 === i) {
                            var d = s.getMilliseconds();
                            if (0 != d) {
                                var f = n(String(d), 3);
                                f = f.replace(/[0]+$/, ""),
                                l = l + "." + f
                            }
                        }
                        return l + "Z"
                    },
                    this.zeroPadding = function (t, e) {
                        return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                    },
                    this.getString = function () {
                        return this.s
                    },
                    this.setString = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(t)
                    },
                    this.setByDateValue = function (t, e, i, n, s, r) {
                        var o = new Date(Date.UTC(t, e - 1, i, n, s, r, 0));
                        this.setByDate(o)
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    }
                },
                nt.lang.extend(st.asn1.DERAbstractTime, st.asn1.ASN1Object),
                st.asn1.DERAbstractStructured = function (t) {
                    st.asn1.DERAbstractString.superclass.constructor.call(this);
                    this.setByASN1ObjectArray = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = t
                    },
                    this.appendASN1Object = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(t)
                    },
                    this.asn1Array = new Array,
                    "undefined" != typeof t && "undefined" != typeof t["array"] && (this.asn1Array = t["array"])
                },
                nt.lang.extend(st.asn1.DERAbstractStructured, st.asn1.ASN1Object),
                st.asn1.DERBoolean = function () {
                    st.asn1.DERBoolean.superclass.constructor.call(this),
                    this.hT = "01",
                    this.hTLV = "0101ff"
                },
                nt.lang.extend(st.asn1.DERBoolean, st.asn1.ASN1Object),
                st.asn1.DERInteger = function (t) {
                    st.asn1.DERInteger.superclass.constructor.call(this),
                    this.hT = "02",
                    this.setByBigInteger = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = st.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                    },
                    this.setByInteger = function (t) {
                        var e = new T(String(t), 10);
                        this.setByBigInteger(e)
                    },
                    this.setValueHex = function (t) {
                        this.hV = t
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    "undefined" != typeof t && ("undefined" != typeof t["bigint"] ? this.setByBigInteger(t["bigint"]) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t["hex"] && this.setValueHex(t["hex"]))
                },
                nt.lang.extend(st.asn1.DERInteger, st.asn1.ASN1Object),
                st.asn1.DERBitString = function (t) {
                    if (void 0 !== t && "undefined" !== typeof t.obj) {
                        var e = st.asn1.ASN1Util.newObject(t.obj);
                        t.hex = "00" + e.getEncodedHex()
                    }
                    st.asn1.DERBitString.superclass.constructor.call(this),
                    this.hT = "03",
                    this.setHexValueIncludingUnusedBits = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = t
                    },
                    this.setUnusedBitsAndHexValue = function (t, e) {
                        if (t < 0 || 7 < t)
                            throw "unused bits shall be from 0 to 7: u = " + t;
                        var i = "0" + t;
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = i + e
                    },
                    this.setByBinaryString = function (t) {
                        t = t.replace(/0+$/, "");
                        var e = 8 - t.length % 8;
                        8 == e && (e = 0);
                        for (var i = 0; i <= e; i++)
                            t += "0";
                        var n = "";
                        for (i = 0; i < t.length - 1; i += 8) {
                            var s = t.substr(i, 8),
                            r = parseInt(s, 2).toString(16);
                            1 == r.length && (r = "0" + r),
                            n += r
                        }
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + e + n
                    },
                    this.setByBooleanArray = function (t) {
                        for (var e = "", i = 0; i < t.length; i++)
                            1 == t[i] ? e += "1" : e += "0";
                        this.setByBinaryString(e)
                    },
                    this.newFalseArray = function (t) {
                        for (var e = new Array(t), i = 0; i < t; i++)
                            e[i] = !1;
                        return e
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    "undefined" != typeof t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t["hex"] ? this.setHexValueIncludingUnusedBits(t["hex"]) : "undefined" != typeof t["bin"] ? this.setByBinaryString(t["bin"]) : "undefined" != typeof t["array"] && this.setByBooleanArray(t["array"]))
                },
                nt.lang.extend(st.asn1.DERBitString, st.asn1.ASN1Object),
                st.asn1.DEROctetString = function (t) {
                    if (void 0 !== t && "undefined" !== typeof t.obj) {
                        var e = st.asn1.ASN1Util.newObject(t.obj);
                        t.hex = e.getEncodedHex()
                    }
                    st.asn1.DEROctetString.superclass.constructor.call(this, t),
                    this.hT = "04"
                },
                nt.lang.extend(st.asn1.DEROctetString, st.asn1.DERAbstractString),
                st.asn1.DERNull = function () {
                    st.asn1.DERNull.superclass.constructor.call(this),
                    this.hT = "05",
                    this.hTLV = "0500"
                },
                nt.lang.extend(st.asn1.DERNull, st.asn1.ASN1Object),
                st.asn1.DERObjectIdentifier = function (t) {
                    var e = function (t) {
                        var e = t.toString(16);
                        return 1 == e.length && (e = "0" + e),
                        e
                    },
                    i = function (t) {
                        var i = "",
                        n = new T(t, 10),
                        s = n.toString(2),
                        r = 7 - s.length % 7;
                        7 == r && (r = 0);
                        for (var o = "", a = 0; a < r; a++)
                            o += "0";
                        s = o + s;
                        for (a = 0; a < s.length - 1; a += 7) {
                            var h = s.substr(a, 7);
                            a != s.length - 7 && (h = "1" + h),
                            i += e(parseInt(h, 2))
                        }
                        return i
                    };
                    st.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                    this.hT = "06",
                    this.setValueHex = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                    },
                    this.setValueOidString = function (t) {
                        if (!t.match(/^[0-9.]+$/))
                            throw "malformed oid string: " + t;
                        var n = "",
                        s = t.split("."),
                        r = 40 * parseInt(s[0]) + parseInt(s[1]);
                        n += e(r),
                        s.splice(0, 2);
                        for (var o = 0; o < s.length; o++)
                            n += i(s[o]);
                        this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = n
                    },
                    this.setValueName = function (t) {
                        var e = st.asn1.x509.OID.name2oid(t);
                        if ("" === e)
                            throw "DERObjectIdentifier oidName undefined: " + t;
                        this.setValueOidString(e)
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    void 0 !== t && ("string" === typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
                },
                nt.lang.extend(st.asn1.DERObjectIdentifier, st.asn1.ASN1Object),
                st.asn1.DEREnumerated = function (t) {
                    st.asn1.DEREnumerated.superclass.constructor.call(this),
                    this.hT = "0a",
                    this.setByBigInteger = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.hV = st.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                    },
                    this.setByInteger = function (t) {
                        var e = new T(String(t), 10);
                        this.setByBigInteger(e)
                    },
                    this.setValueHex = function (t) {
                        this.hV = t
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    "undefined" != typeof t && ("undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t["hex"] && this.setValueHex(t["hex"]))
                },
                nt.lang.extend(st.asn1.DEREnumerated, st.asn1.ASN1Object),
                st.asn1.DERUTF8String = function (t) {
                    st.asn1.DERUTF8String.superclass.constructor.call(this, t),
                    this.hT = "0c"
                },
                nt.lang.extend(st.asn1.DERUTF8String, st.asn1.DERAbstractString),
                st.asn1.DERNumericString = function (t) {
                    st.asn1.DERNumericString.superclass.constructor.call(this, t),
                    this.hT = "12"
                },
                nt.lang.extend(st.asn1.DERNumericString, st.asn1.DERAbstractString),
                st.asn1.DERPrintableString = function (t) {
                    st.asn1.DERPrintableString.superclass.constructor.call(this, t),
                    this.hT = "13"
                },
                nt.lang.extend(st.asn1.DERPrintableString, st.asn1.DERAbstractString),
                st.asn1.DERTeletexString = function (t) {
                    st.asn1.DERTeletexString.superclass.constructor.call(this, t),
                    this.hT = "14"
                },
                nt.lang.extend(st.asn1.DERTeletexString, st.asn1.DERAbstractString),
                st.asn1.DERIA5String = function (t) {
                    st.asn1.DERIA5String.superclass.constructor.call(this, t),
                    this.hT = "16"
                },
                nt.lang.extend(st.asn1.DERIA5String, st.asn1.DERAbstractString),
                st.asn1.DERUTCTime = function (t) {
                    st.asn1.DERUTCTime.superclass.constructor.call(this, t),
                    this.hT = "17",
                    this.setByDate = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)
                    },
                    this.getFreshValueHex = function () {
                        return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)),
                        this.hV
                    },
                    void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
                },
                nt.lang.extend(st.asn1.DERUTCTime, st.asn1.DERAbstractTime),
                st.asn1.DERGeneralizedTime = function (t) {
                    st.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                    this.hT = "18",
                    this.withMillis = !1,
                    this.setByDate = function (t) {
                        this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)
                    },
                    this.getFreshValueHex = function () {
                        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)),
                        this.hV
                    },
                    void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
                },
                nt.lang.extend(st.asn1.DERGeneralizedTime, st.asn1.DERAbstractTime),
                st.asn1.DERSequence = function (t) {
                    st.asn1.DERSequence.superclass.constructor.call(this, t),
                    this.hT = "30",
                    this.getFreshValueHex = function () {
                        for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                            var i = this.asn1Array[e];
                            t += i.getEncodedHex()
                        }
                        return this.hV = t,
                        this.hV
                    }
                },
                nt.lang.extend(st.asn1.DERSequence, st.asn1.DERAbstractStructured),
                st.asn1.DERSet = function (t) {
                    st.asn1.DERSet.superclass.constructor.call(this, t),
                    this.hT = "31",
                    this.sortFlag = !0,
                    this.getFreshValueHex = function () {
                        for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                            var i = this.asn1Array[e];
                            t.push(i.getEncodedHex())
                        }
                        return 1 == this.sortFlag && t.sort(),
                        this.hV = t.join(""),
                        this.hV
                    },
                    "undefined" != typeof t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
                },
                nt.lang.extend(st.asn1.DERSet, st.asn1.DERAbstractStructured),
                st.asn1.DERTaggedObject = function (t) {
                    st.asn1.DERTaggedObject.superclass.constructor.call(this),
                    this.hT = "a0",
                    this.hV = "",
                    this.isExplicit = !0,
                    this.asn1Object = null,
                    this.setASN1Object = function (t, e, i) {
                        this.hT = e,
                        this.isExplicit = t,
                        this.asn1Object = i,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                    },
                    this.getFreshValueHex = function () {
                        return this.hV
                    },
                    "undefined" != typeof t && ("undefined" != typeof t["tag"] && (this.hT = t["tag"]), "undefined" != typeof t["explicit"] && (this.isExplicit = t["explicit"]), "undefined" != typeof t["obj"] && (this.asn1Object = t["obj"], this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                },
                nt.lang.extend(st.asn1.DERTaggedObject, st.asn1.ASN1Object),
                i.d(e, "a", (function () {
                        return ot
                    }));
                var rt = function () {
                    var t = function (e, i) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (t, e) {
                            t.__proto__ = e
                        }
                         || function (t, e) {
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                        },
                        t(e, i)
                    };
                    return function (e, i) {
                        if ("function" !== typeof i && null !== i)
                            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
                        function n() {
                            this.constructor = e
                        }
                        t(e, i),
                        e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                    }
                }
                (),
                ot = function (t) {
                    function e(i) {
                        var n = t.call(this) || this;
                        return i && ("string" === typeof i ? n.parseKey(i) : (e.hasPrivateKeyProperty(i) || e.hasPublicKeyProperty(i)) && n.parsePropertiesFrom(i)),
                        n
                    }
                    return rt(e, t),
                    e.prototype.parseKey = function (t) {
                        try {
                            var e = 0,
                            i = 0,
                            n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
                            s = n.test(t) ? o.decode(t) : a.unarmor(t),
                            r = m.decode(s);
                            if (3 === r.sub.length && (r = r.sub[2].sub[0]), 9 === r.sub.length) {
                                e = r.sub[1].getHexStringValue(),
                                this.n = _(e, 16),
                                i = r.sub[2].getHexStringValue(),
                                this.e = parseInt(i, 16);
                                var h = r.sub[3].getHexStringValue();
                                this.d = _(h, 16);
                                var u = r.sub[4].getHexStringValue();
                                this.p = _(u, 16);
                                var c = r.sub[5].getHexStringValue();
                                this.q = _(c, 16);
                                var l = r.sub[6].getHexStringValue();
                                this.dmp1 = _(l, 16);
                                var d = r.sub[7].getHexStringValue();
                                this.dmq1 = _(d, 16);
                                var f = r.sub[8].getHexStringValue();
                                this.coeff = _(f, 16)
                            } else {
                                if (2 !== r.sub.length)
                                    return !1;
                                if (r.sub[0].sub) {
                                    var p = r.sub[1],
                                    g = p.sub[0];
                                    e = g.sub[0].getHexStringValue(),
                                    this.n = _(e, 16),
                                    i = g.sub[1].getHexStringValue(),
                                    this.e = parseInt(i, 16)
                                } else
                                    e = r.sub[0].getHexStringValue(), this.n = _(e, 16), i = r.sub[1].getHexStringValue(), this.e = parseInt(i, 16)
                            }
                            return !0
                        } catch (v) {
                            return !1
                        }
                    },
                    e.prototype.getPrivateBaseKey = function () {
                        var t = {
                            array: [new st.asn1.DERInteger({
                                    int: 0
                                }), new st.asn1.DERInteger({
                                    bigint: this.n
                                }), new st.asn1.DERInteger({
                                    int: this.e
                                }), new st.asn1.DERInteger({
                                    bigint: this.d
                                }), new st.asn1.DERInteger({
                                    bigint: this.p
                                }), new st.asn1.DERInteger({
                                    bigint: this.q
                                }), new st.asn1.DERInteger({
                                    bigint: this.dmp1
                                }), new st.asn1.DERInteger({
                                    bigint: this.dmq1
                                }), new st.asn1.DERInteger({
                                    bigint: this.coeff
                                })]
                        },
                        e = new st.asn1.DERSequence(t);
                        return e.getEncodedHex()
                    },
                    e.prototype.getPrivateBaseKeyB64 = function () {
                        return Object(r["b"])(this.getPrivateBaseKey())
                    },
                    e.prototype.getPublicBaseKey = function () {
                        var t = new st.asn1.DERSequence({
                            array: [new st.asn1.DERObjectIdentifier({
                                    oid: "1.2.840.113549.1.1.1"
                                }), new st.asn1.DERNull]
                        }),
                        e = new st.asn1.DERSequence({
                            array: [new st.asn1.DERInteger({
                                    bigint: this.n
                                }), new st.asn1.DERInteger({
                                    int: this.e
                                })]
                        }),
                        i = new st.asn1.DERBitString({
                            hex: "00" + e.getEncodedHex()
                        }),
                        n = new st.asn1.DERSequence({
                            array: [t, i]
                        });
                        return n.getEncodedHex()
                    },
                    e.prototype.getPublicBaseKeyB64 = function () {
                        return Object(r["b"])(this.getPublicBaseKey())
                    },
                    e.wordwrap = function (t, e) {
                        if (e = e || 64, !t)
                            return t;
                        var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                        return t.match(RegExp(i, "g")).join("\n")
                    },
                    e.prototype.getPrivateKey = function () {
                        var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                        return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                        t += "-----END RSA PRIVATE KEY-----",
                        t
                    },
                    e.prototype.getPublicKey = function () {
                        var t = "-----BEGIN PUBLIC KEY-----\n";
                        return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                        t += "-----END PUBLIC KEY-----",
                        t
                    },
                    e.hasPublicKeyProperty = function (t) {
                        return t = t || {},
                        t.hasOwnProperty("n") && t.hasOwnProperty("e")
                    },
                    e.hasPrivateKeyProperty = function (t) {
                        return t = t || {},
                        t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                    },
                    e.prototype.parsePropertiesFrom = function (t) {
                        this.n = t.n,
                        this.e = t.e,
                        t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
                    },
                    e
                }
                (Y)
            }
        }
    ]);
//# sourceMappingURL=KqTj.cdb93b1b.js.map
