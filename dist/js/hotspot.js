!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("vue"), require("@vue/composition-api")))
        : "function" == typeof define && define.amd
        ? define(["vue", "@vue/composition-api"], e)
        : ((t = t || self).VueHotspot = e(t.Vue, t.VueCompositionApi));
})(this, function (t, e) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var o = "default" in e ? e.default : e;
    function i(t, e) {
        var o = null,
            i = Date.now();
        return function () {
            var n = this,
                a = arguments,
                s = Date.now(),
                r = e - (s - i);
            clearTimeout(o), r <= 0 ? (t.apply(n, a), (i = Date.now())) : (o = setTimeout(t, r));
        };
    }
    var n = e.createComponent({
        props: { hotspot: Object, config: Object, imageLoaded: Boolean, vueHotspotBackgroundImage: HTMLImageElement, vueHotspot: HTMLDivElement },
        setup: function (t, o) {
            o.emit;
            var n = e.ref(!1),
                a = e.reactive({
                    positionTop: 0,
                    positionLeft: 0,
                    hotspotColor: e.computed(function () {
                        return t.config && t.config.hotspotColor;
                    }),
                    interactivity: e.computed(function () {
                        return t.config && t.config.interactivity;
                    }),
                    textColor: e.computed(function () {
                        return t.config && t.config.textColor;
                    }),
                    messageBoxColor: e.computed(function () {
                        return t.config && t.config.messageBoxColor;
                    }),
                    opacity: e.computed(function () {
                        return t.config && t.config.opacity;
                    }),
                });
            function s() {
                (a.positionTop = (t.hotspot.y * t.vueHotspotBackgroundImage.clientHeight) / 100 + (t.vueHotspotBackgroundImage.offsetTop - t.vueHotspot.clientTop) + "px;"),
                    (a.positionLeft = (t.hotspot.x * t.vueHotspotBackgroundImage.clientWidth) / 100 + (t.vueHotspotBackgroundImage.offsetLeft - t.vueHotspot.clientLeft) + "px;");
            }
            return (
                e.watch(
                    function () {
                        return t.imageLoaded;
                    },
                    function (t, e) {
                        t && s();
                    }
                ),
                e.onMounted(function () {
                    window.addEventListener("resize", i(s, 50));
                }),
                e.onUnmounted(function () {
                    window.removeEventListener("resize", i(s, 50));
                }),
                Object.assign({}, { isActive: n }, e.toRefs(a), {
                    getHotspotStyle: s,
                    toggleActive: function () {
                        n.value = !n.value;
                    },
                })
            );
        },
    });
    function a(t, e, o, i, n, a, s, r, u, c) {
        "boolean" != typeof s && ((u = r), (r = s), (s = !1));
        var p,
            d = "function" == typeof o ? o.options : o;
        if (
            (t && t.render && ((d.render = t.render), (d.staticRenderFns = t.staticRenderFns), (d._compiled = !0), n && (d.functional = !0)),
            i && (d._scopeId = i),
            a
                ? ((p = function (t) {
                      (t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                          e && e.call(this, u(t)),
                          t && t._registeredComponents && t._registeredComponents.add(a);
                  }),
                  (d._ssrRegister = p))
                : e &&
                  (p = s
                      ? function (t) {
                            e.call(this, c(t, this.$root.$options.shadowRoot));
                        }
                      : function (t) {
                            e.call(this, r(t));
                        }),
            p)
        )
            if (d.functional) {
                var l = d.render;
                d.render = function (t, e) {
                    return p.call(e), l(t, e);
                };
            } else {
                var v = d.beforeCreate;
                d.beforeCreate = v ? [].concat(v, p) : [p];
            }
        return o;
    }
    var s,
        r = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function u(t) {
        return function (t, e) {
            return (function (t, e) {
                var o = r ? e.media || "default" : t,
                    i = c[o] || (c[o] = { ids: new Set(), styles: [] });
                if (!i.ids.has(t)) {
                    i.ids.add(t);
                    var n = e.source;
                    if (
                        (e.map && ((n += "\n/*# sourceURL=" + e.map.sources[0] + " */"), (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) + " */")),
                        i.element ||
                            ((i.element = document.createElement("style")),
                            (i.element.type = "text/css"),
                            e.media && i.element.setAttribute("media", e.media),
                            void 0 === s && (s = document.head || document.getElementsByTagName("head")[0]),
                            s.appendChild(i.element)),
                        "styleSheet" in i.element)
                    )
                        i.styles.push(n), (i.element.styleSheet.cssText = i.styles.filter(Boolean).join("\n"));
                    else {
                        var a = i.ids.size - 1,
                            u = document.createTextNode(n),
                            p = i.element.childNodes;
                        p[a] && i.element.removeChild(p[a]), p.length ? i.element.insertBefore(u, p[a]) : i.element.appendChild(u);
                    }
                }
            })(t, e);
        };
    }
    var c = {};
    var p = a(
            {
                render: function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o(
                        "div",
                        {
                            staticClass: "ui__vue_hotspot_hotspot",
                            class: t.isActive || "none" === t.interactivity ? "active" : "",
                            style: "top: " + t.positionTop + "; left: " + t.positionLeft + "; background-color: " + t.hotspotColor + ";",
                            on: {
                                mouseenter: function (e) {
                                    "hover" === t.interactivity && (t.isActive = !0);
                                },
                                mouseleave: function (e) {
                                    "hover" === t.interactivity && (t.isActive = !1);
                                },
                                click: function (e) {
                                    "click" === t.interactivity && t.toggleActive();
                                },
                            },
                        },
                        [
                            o("div", { style: "color:" + t.textColor }, [
                                o("div", { staticClass: "ui__vue_hotspot_title", style: "\n        background: " + t.messageBoxColor + ";\n        opacity: " + t.opacity }, [t._v("\n      " + t._s(t.hotspot.Title) + "\n    ")]),
                                t._v(" "),
                                o("div", { staticClass: "ui__vue_hotspot_message", style: "\n        background: " + t.messageBoxColor + ";\n        opacity: " + t.opacity }, [t._v("\n      " + t._s(t.hotspot.Message) + "\n    ")]),
                            ]),
                        ]
                    );
                },
                staticRenderFns: [],
            },
            function (t) {
                t &&
                    t("data-v-243de032_0", {
                        source:
                            ".ui__vue_hotspot_hotspot[data-v-243de032]{height:15px;width:15px;position:absolute;border-radius:50%;cursor:pointer;z-index:5;margin-left:-10px;margin-top:-10px}.ui__vue_hotspot_hotspot>div[data-v-243de032]{width:140px;height:94px;margin:-104px -60px;border-radius:4px;overflow:hidden;font-size:10px;display:none}.ui__vue_hotspot_hotspot.active>div[data-v-243de032]{display:block}.ui__vue_hotspot_hotspot.active>div[data-v-243de032]:before{border:solid transparent;content:' ';height:0;left:0;position:absolute;width:0;border-width:10px;border-left-color:rgba(255,255,255,.4);transform:rotate(90deg);top:-10px}.ui__vue_hotspot_hotspot>div>.ui__vue_hotspot_title[data-v-243de032]{height:20px;line-height:20px;font-weight:700;padding:4px 10px;transition:opacity .2s ease-in}.ui__vue_hotspot_hotspot>div>.ui__vue_hotspot_message[data-v-243de032]{margin-top:2px;padding:10px 10px;height:72px;overflow-y:auto;transition:opacity .2s ease-in}",
                        map: void 0,
                        media: void 0,
                    });
            },
            n,
            "data-v-243de032",
            !1,
            void 0,
            !1,
            u,
            void 0,
            void 0
        ),
        d = a(
            {
                render: function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", { staticClass: "ui__vue_hotspot_buttons_box" }, [
                        e("div", { staticClass: "ui__vue_hotspot_buttons", class: this.isEditable ? "active" : "" }, [
                            e("button", { staticClass: "ui__vue_hotspot_save", on: { click: this.saveAllHotspots } }, [this._v("Save")]),
                            this._v(" "),
                            e("button", { staticClass: "ui__vue_hotspot_remove", on: { click: this.removeAllHotspots } }, [this._v("Remove")]),
                        ]),
                    ]);
                },
                staticRenderFns: [],
            },
            function (t) {
                t &&
                    t("data-v-74ac8b34_0", {
                        source:
                            ".ui__vue_hotspot_buttons_box[data-v-74ac8b34]{height:5em}.ui__vue_hotspot_buttons[data-v-74ac8b34]{transition:padding .4s ease-out,opacity .2s ease-in;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);border-radius:0 0 1em 1em;padding:0;opacity:0}.ui__vue_hotspot_buttons.active[data-v-74ac8b34]{padding:1em;opacity:1}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove[data-v-74ac8b34],.ui__vue_hotspot_buttons>.ui__vue_hotspot_save[data-v-74ac8b34]{width:8em;display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;box-sizing:border-box;outline:0;margin:0;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px;margin-left:10px}.ui__vue_hotspot_buttons>.ui__vue_hotspot_save[data-v-74ac8b34]{color:#fff;background-color:#67c23a;border-color:#67c23a}.ui__vue_hotspot_buttons>.ui__vue_hotspot_save[data-v-74ac8b34]:hover{background:#85ce61;border-color:#85ce61;color:#fff}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove[data-v-74ac8b34]{color:#fff;background-color:#f56c6c;border-color:#f56c6c}.ui__vue_hotspot_buttons>.ui__vue_hotspot_remove[data-v-74ac8b34]:hover{color:#fff;background:#f78989;border-color:#f78989}",
                        map: void 0,
                        media: void 0,
                    });
            },
            e.createComponent({
                props: { config: Object },
                setup: function (t, o) {
                    var i = o.emit;
                    return {
                        isEditable: e.computed(function () {
                            return t.config && t.config.editable;
                        }),
                        saveAllHotspots: function () {
                            i("save-data", t.config.data);
                        },
                        removeAllHotspots: function () {
                            (t.config.data = []), i("after-delete");
                        },
                    };
                },
            }),
            "data-v-74ac8b34",
            !1,
            void 0,
            !1,
            u,
            void 0,
            void 0
        );
    t.use(o);
    return a(
        {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return t.config
                    ? o(
                          "div",
                          { ref: "vueHotspot", staticClass: "ui__vue_hotspot" },
                          [
                              o("img", { ref: "vueHotspotBackgroundImage", staticClass: "ui__vue_hotspot_background_image", attrs: { src: t.config.image, alt: "Hotspot Image" }, on: { load: t.successLoadImg } }),
                              t._v(" "),
                              t.config.editable
                                  ? o(
                                        "span",
                                        {
                                            ref: "vueHotspotOverlay",
                                            staticClass: "ui__vue_hotspot_overlay",
                                            style: "height: " + t.overlayHeight + "; width: " + t.overlayWidth + "; left: " + t.overlayLeft + "; top: " + t.overlayTop + ";",
                                            on: {
                                                click: function (e) {
                                                    return e.stopPropagation(), e.preventDefault(), t.addHotspot(e);
                                                },
                                            },
                                        },
                                        [o("p", [t._v(t._s(t.config.overlayText))])]
                                    )
                                  : t._e(),
                              t._v(" "),
                              t._l(t.config.data, function (e, i) {
                                  return o("DataPoint", { key: i, attrs: { hotspot: e, config: t.config, imageLoaded: t.imageLoaded, vueHotspotBackgroundImage: t.vueHotspotBackgroundImage, vueHotspot: t.vueHotspot } });
                              }),
                              t._v(" "),
                              o("ControlBox", { attrs: { config: t.config }, on: { "save-data": t.saveAllHotspots, "after-delete": t.removeAllHotspots } }),
                          ],
                          2
                      )
                    : t._e();
            },
            staticRenderFns: [],
        },
        function (t) {
            t &&
                t("data-v-6ee6204c_0", {
                    source:
                        ".ui__vue_hotspot{width:100%;height:100%;display:inline-block;position:relative}.ui__vue_hotspot_background_image{max-width:100%;width:100%}span.ui__vue_hotspot_overlay{position:absolute;background-color:rgba(0,0,0,.4);top:0;left:0;cursor:pointer}span.ui__vue_hotspot_overlay>p{color:#fff;background:rgba(255,255,255,.4);margin-top:0;padding:20px;text-align:center}",
                    map: void 0,
                    media: void 0,
                });
        },
        e.createComponent({
            components: { DataPoint: p, ControlBox: d },
            props: { initOptions: Object },
            setup: function (t, o) {
                var n = o.emit,
                    a = e.ref(null),
                    s = e.ref(null),
                    r = e.ref(null),
                    u = e.reactive({
                        data: [],
                        image: "https://via.placeholder.com/600x500?text=Oops!+image+not+found...",
                        editable: !0,
                        interactivity: "hover",
                        hotspotColor: "rgb(66, 184, 131)",
                        messageBoxColor: "rgb(255, 255, 255)",
                        textColor: "rgb(53, 73, 94)",
                        overlayText: "Please Click The Image To Add Hotspots.",
                        opacity: 0.8,
                        schema: [
                            { property: "Title", default: "Vue Hotspot" },
                            { property: "Message", default: "This is a Vue Hotspot Component which lets you create hotspot. " },
                        ],
                    }),
                    c = e.ref(null),
                    p = e.ref(!1),
                    d = e.reactive({ overlayHeight: 0, overlayWidth: 0, overlayLeft: 0, overlayTop: 0 });
                function l() {
                    var t = e.isRef(r) ? r.value : r,
                        o = e.isRef(a) ? a.value : a;
                    (d.overlayHeight = (t.clientHeight / o.clientHeight) * 100 + "%"),
                        (d.overlayWidth = (t.clientWidth / o.clientWidth) * 100 + "%"),
                        (d.overlayLeft = t.offsetLeft - o.clientLeft + "px"),
                        (d.overlayTop = t.offsetTop - o.clientTop + "px");
                }
                function v(t) {
                    return JSON.parse(JSON.stringify(t));
                }
                return (
                    e.watch(p, function (t, e) {
                        t && l();
                    }),
                    e.watch(
                        function () {
                            return t.initOptions;
                        },
                        function (t, e) {
                            c.value = Object.assign({}, c.value ? c.value : v(u), t);
                        },
                        { deep: !0 }
                    ),
                    e.onMounted(function () {
                        window.addEventListener("resize", i(l, 50));
                    }),
                    e.onUnmounted(function () {
                        window.removeEventListener("resize", i(l, 50));
                    }),
                    Object.assign({}, { defaultOptions: u, config: c, imageLoaded: p }, e.toRefs(d), {
                        vueHotspot: a,
                        vueHotspotOverlay: s,
                        vueHotspotBackgroundImage: r,
                        deepCopy: v,
                        successLoadImg: function (t) {
                            !0 === t.target.complete && (p.value = !0);
                        },
                        saveAllHotspots: function () {
                            var t = e.isRef(c) ? c.value : c;
                            n("save-data", t.data);
                        },
                        removeAllHotspots: function () {
                            n("after-delete");
                        },
                        resizeOverlay: l,
                        addHotspot: function (t) {
                            for (var o = t.offsetX, i = t.offsetY, n = e.isRef(c) ? c.value : c, a = s.value.offsetHeight, r = { x: (o / s.value.offsetWidth) * 100, y: (i / a) * 100 }, u = n.schema, p = 0; p < u.length; p++) {
                                var d = u[p],
                                    l = prompt("Please enter " + d.property, d.default);
                                if (null === l) return;
                                r[d.property] = l;
                            }
                            n.data.push(r);
                        },
                    })
                );
            },
        }),
        void 0,
        !1,
        void 0,
        !1,
        u,
        void 0,
        void 0
    );
});
