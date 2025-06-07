(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginXy"], {
            "445c": function (t, e, a) {
                "use strict";
                var s = function () {
                    var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                    return a("header", {
                        staticClass: "nav-bar"
                    }, [t.headerData.leftText ? a("div", {
                                staticClass: "nav-bar-left"
                            }, [a("div", {
                                        on: {
                                            click: function (e) {
                                                return e.stopPropagation(),
                                                t.handelClick(t.headerData.leftUrl)
                                            }
                                        }
                                    }, [a("i", {
                                                staticClass: "iconfont iconicon-back"
                                            }), a("div", {
                                                staticClass: "nav-bar-txt"
                                            }, [t._v(t._s(t.headerData.leftText))])])]) : t._e(), a("div", {
                                staticClass: "nav-bar-title"
                            }, [t._v(t._s(t.headerData.title))]), a("div", {
                                staticClass: "nav-bar-right"
                            }, [t.headerData.rightText ? a("div", {
                                        staticClass: "nav-bar-txt",
                                        on: {
                                            click: function (e) {
                                                return t.handelClick(t.headerData.rightUrl, t.headerData.rightCallBackClick)
                                            }
                                        }
                                    }, [t._v(t._s(t.headerData.rightText))]) : t._e(), t.headerData.showSearch ? a("i", {
                                        staticClass: "iconfont iconsousuo",
                                        on: {
                                            click: function (e) {
                                                return t.searchClick()
                                            }
                                        }
                                    }) : t._e()])])
                },
                o = [],
                i = {
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
                                        var a = "callback";
                                        this.headerData && this.headerData.rightText && (a = this.headerData.rightText),
                                        this.$emit("callbackClick", a)
                                    }
                                } else
                                    this.$emit("on-exit");
                            else
                                this.$router.go(-1)
                        }
                    }
                },
                r = i,
                n = a("2877"),
                c = Object(n["a"])(r, s, o, !1, null, "416ac0a2", null);
                e["a"] = c.exports
            },
            "651f": function (t, e, a) {
                "use strict";
                var s = function () {
                    var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                    return a("div", {
                        directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.showTop,
                                expression: "showTop"
                            }
                        ],
                        staticClass: "scrollTop",
                        on: {
                            click: t.toTop
                        }
                    }, [t._m(0)])
                },
                o = [function () {
                        var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                        return a("div", {
                            staticClass: "aside-icon"
                        }, [a("i", {
                                    staticClass: "iconfont iconfanhuidingbu"
                                })])
                    }
                ],
                i = {
                    name: "ScrollTop",
                    data: function () {
                        return {
                            scrollTop: 0,
                            time: 0,
                            dParams: 20,
                            scrollState: 0
                        }
                    },
                    computed: {
                        showTop: function () {
                            var t = this.scrollTop > 300;
                            return t
                        }
                    },
                    mounted: function () {
                        window.addEventListener("scroll", this.getScrollTop)
                    },
                    methods: {
                        toTop: function (t) {
                            if (!this.scrollState) {
                                this.scrollState = 1,
                                t.preventDefault();
                                var e = document.documentElement.scrollTop || document.body.scrollTop;
                                console.log("dis---------------------------------", e);
                                var a = this;
                                this.time = setInterval((function () {
                                            a.gotoTop(a.scrollTop - a.dParams)
                                        }), 10)
                            }
                        },
                        gotoTop: function (t) {
                            this.dParams += 20,
                            t = t > 0 ? t : 0,
                            document.documentElement.scrollTop = t,
                            document.body.scrollTop = t,
                            this.scrollTop < 10 && (clearInterval(this.time), this.dParams = 20, this.scrollState = 0)
                        },
                        getScrollTop: function () {
                            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                        }
                    }
                },
                r = i,
                n = a("2877"),
                c = Object(n["a"])(r, s, o, !1, null, "4a569401", null);
                e["a"] = c.exports
            },
            "8c78": function (t, e, a) {
                "use strict";
                a.r(e);
                var s = function () {
                    var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                    return a("div", [a("headerBar", {
                                attrs: {
                                    "header-data": t.headerData
                                }
                            }), t._m(0), a("Backtop", {
                                staticClass: "aside-fixed-bar"
                            }), a("div", {
                                staticClass: "common-space"
                            }), a("div", {
                                staticClass: "foot-btn fixed"
                            }, [a("ul", [a("li", [a("van-button", {
                                                        attrs: {
                                                            type: "info",
                                                            round: "",
                                                            size: "large"
                                                        },
                                                        on: {
                                                            click: function (e) {
                                                                return t.tyxy()
                                                            }
                                                        }
                                                    }, [t._v("同意")])], 1)])])], 1)
                },
                o = [function () {
                        var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                        return a("div", {
                            staticClass: "container"
                        }, [a("div", {
                                    staticClass: "content"
                                }, [a("div", {
                                            staticClass: "common-main box"
                                        }, [a("div", {
                                                    staticClass: "notice-content"
                                                }, [a("p", [t._v(" 本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。 ")]), a("p", [a("strong", [t._v("一、适用范围")]), a("br"), t._v("在您使用本软件网络服务，本软件自动接收并记录的您的手机上的信息，包括但不限于您的健康数据、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据 ")]), a("p", [a("strong", [t._v("二、信息的使用 ")]), a("br"), t._v("在获得您的数据之后，本软件会将其上传至服务器，以生成您的排行榜数据，以便您能够更好地使用服务 ")]), a("p", [a("strong", [t._v("三、信息披露")]), a("br"), t._v("(一)本软件不会将您的信息披露给不受信任的第三方 "), a("br"), t._v("(二)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露 "), a("br"), t._v("(三)如您出现违反中国有关法律、法规或者相关规则的情况，需要向第三方披露 ")]), a("p", [a("strong", [t._v("四、信息存储和交换")]), a("br"), t._v("本软件收集的有关您的信息和资料将保存在本软件及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本软件收集信息和资料所在地的境外并在境外被访问、存储和展示 ")]), a("p", [a("strong", [t._v("五、信息安全")]), a("br"), t._v("在使用本软件网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，请您立即联络本软件客服，以便本软件采取相应措施 ")])])])])])
                    }
                ],
                i = a("445c"),
                r = a("651f"),
                n = {
                    name: "GysZcxy",
                    components: {
                        headerBar: i["a"],
                        Backtop: r["a"]
                    },
                    data: function () {
                        return {
                            headerData: {
                                title: "服务协议",
                                leftUrl: "back",
                                leftText: " "
                            }
                        }
                    },
                    created: function () {
                        this.$store.commit("mh/SET_ISREAD", !1)
                    },
                    methods: {
                        tyxy: function () {
                            this.$store.commit("mh/SET_RADIO", !0),
                            this.$router.back()
                        }
                    }
                },
                c = n,
                l = a("2877"),
                d = Object(l["a"])(c, s, o, !1, null, "2f19e670", null);
                e["default"] = d.exports
            }
        }
    ]);
//# sourceMappingURL=loginXy.0cfd8aa1.js.map
