/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+n[a] > +o[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.0";
        var t = Object.create(null),
            o = (s.migrateDisablePatches = function() {
                for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
            }, s.migrateEnablePatches = function() {
                for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
            }, s.migrateIsPatchEnabled = function(e) {
                return !t[e]
            }, n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)), {});

        function i(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i(n, o), r
                },
                set: function(e) {
                    i(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && i(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function u(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            a(e, t, r, n, o)
        }

        function d(e, t, r, n) {
            a(e, t, r, n)
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
        var c, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (c in d(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, d(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
        u(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), u(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && u(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (u(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (u(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), u(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), u(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), u(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, d(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function Q(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        d(s.fn, "removeAttr", function(e) {
            var r = this;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), d(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var x, A = !1,
            R = /^[a-z]/,
            T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return A = !0, e = r.apply(this, arguments), A = !1, e
            })
        }), d(s, "swap", function(e, t, r, n) {
            var o, a = {};
            for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"), t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = r.apply(e, n || []), t) e.style[o] = a[o];
            return r
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return i("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, {
            get: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), x = s.fn.css, d(s.fn, "css", function(e, t) {
            var r, n = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(n, e, t)
            }), this) : ("number" == typeof t && (t = Q(e), r = t, R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), x.apply(this, arguments))
        }, "css-number");

        function C(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var S, N, P, k, H, E, M, q = s.data,
            D = (d(s, "data", function(e, t, r) {
                var n, o, a;
                if (t && "object" == typeof t && 2 === arguments.length) {
                    for (a in n = s.hasData(e) && q.call(this, e), o = {}, t) a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                    return q.call(this, e, o), t
                }
                return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : q.apply(this, arguments)
            }, "data-camelCase"), s.fx && (P = s.Tween.prototype.run, k = function(e) {
                return e
            }, d(s.Tween.prototype, "run", function() {
                1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = k), P.apply(this, arguments)
            }, "easing-one-arg"), S = s.fx.interval, N = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n.document.hidden || i("fx-interval", N), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
                },
                set: function(e) {
                    i("fx-interval", N), S = e
                }
            })), s.fn.load),
            F = s.event.add,
            W = s.event.fix,
            O = (s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), d(s.event, "fix", function(e) {
                var t = e.type,
                    r = this.fixHooks[t],
                    n = s.event.props;
                if (n.length) {
                    i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
                    while (n.length) s.event.addProp(n.pop())
                }
                if (r && !r._migrated_ && (r._migrated_ = !0, i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t), (n = r.props) && n.length))
                    while (n.length) s.event.addProp(n.pop());
                return t = W.call(this, e), r && r.filter ? r.filter(t, e) : t
            }, "event-old-patch"), d(s.event, "add", function(e, t) {
                return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), F.apply(this, arguments)
            }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
                d(s.fn, t, function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
                }, "shorthand-removed-v3")
            }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
                u(s.fn, r, function(e, t) {
                    return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
                }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
            }), s(function() {
                s(n.document).triggerHandler("ready")
            }), s.event.special.ready = {
                setup: function() {
                    this === n.document && i("ready-event", "'ready' event is deprecated")
                }
            }, u(s.fn, "bind", function(e, t, r) {
                return this.on(e, null, t, r)
            }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), u(s.fn, "unbind", function(e, t) {
                return this.off(e, null, t)
            }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), u(s.fn, "delegate", function(e, t, r, n) {
                return this.on(t, e, r, n)
            }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), u(s.fn, "undelegate", function(e, t, r) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), u(s.fn, "hover", function(e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e)
            }, "pre-on-methods", "jQuery.fn.hover() is deprecated"), /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
            _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
                s.migrateEnablePatches("self-closed-tags")
            }, d(s, "htmlPrefilter", function(e) {
                var t, r;
                return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(O, "<$1></$2>")
            }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags"), s.fn.offset);
        return d(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (H = s.param, d(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), H.call(this, e, t)
        }, "param-ajax-traditional")), u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (E = s.Deferred, M = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], d(s, "Deferred", function(e) {
            var a = E(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(M, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = E.exceptionHook), s
    });
(function($) {
    "use strict";
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/ober-hero-slider.default', function() {
            var editorActive = $('body').hasClass('elementor-editor-active');
            if (editorActive) {}
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {});
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {
            var editorActive = $('body').hasClass('elementor-editor-active');
            if (editorActive) {}
        });
    });
})(jQuery);
(function($) {
    'use strict';
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1),
                element;
            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
})(jQuery);
/*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n() {
        return (n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var o, r, s = function(t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        a = function(t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        l = function(t) {
            var e = a(t);
            return e && document.querySelector(e) ? e : null
        },
        c = function(t) {
            var e = a(t);
            return e ? document.querySelector(e) : null
        },
        u = function(t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = Number.parseFloat(n),
                r = Number.parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
        },
        f = function(t) {
            t.dispatchEvent(new Event("transitionend"))
        },
        d = function(t) {
            return (t[0] || t).nodeType
        },
        h = function(t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function() {
                n || f(t)
            }), i)
        },
        p = function(t, e, n) {
            Object.keys(n).forEach((function(i) {
                var o, r = n[i],
                    s = e[i],
                    a = s && d(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            }))
        },
        g = function(t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        },
        m = function() {
            return function() {}
        },
        v = function(t) {
            return t.offsetHeight
        },
        _ = function() {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        b = function(t) {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
        },
        y = "rtl" === document.documentElement.dir,
        w = (o = {}, r = 1, {
            set: function(t, e, n) {
                void 0 === t.bsKey && (t.bsKey = {
                    key: e,
                    id: r
                }, r++), o[t.bsKey.id] = n
            },
            get: function(t, e) {
                if (!t || void 0 === t.bsKey) return null;
                var n = t.bsKey;
                return n.key === e ? o[n.id] : null
            },
            delete: function(t, e) {
                if (void 0 !== t.bsKey) {
                    var n = t.bsKey;
                    n.key === e && (delete o[n.id], delete t.bsKey)
                }
            }
        }),
        E = function(t, e, n) {
            w.set(t, e, n)
        },
        T = function(t, e) {
            return w.get(t, e)
        },
        k = function(t, e) {
            w.delete(t, e)
        },
        O = /[^.]*(?=\..*)\.|.*/,
        L = /\..*/,
        A = /::\d+$/,
        C = {},
        D = 1,
        x = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function j(t, e) {
        return e && e + "::" + D++ || t.uidEvent || D++
    }

    function N(t) {
        var e = j(t);
        return t.uidEvent = e, C[e] = C[e] || {}, C[e]
    }

    function I(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function P(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(L, ""),
            s = x[r];
        return s && (r = s), S.has(r) || (r = t), [i, o, r]
    }

    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = P(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = N(t),
                u = c[l] || (c[l] = {}),
                f = I(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && o;
            else {
                var d = j(a, e.replace(O, "")),
                    h = s ? function(t, e, n) {
                        return function i(o) {
                            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return o.delegateTarget = s, i.oneOff && H.off(t, o.type, n), n.apply(s, [o]);
                            return null
                        }
                    }(t, n, i) : function(t, e) {
                        return function n(i) {
                            return i.delegateTarget = t, n.oneOff && H.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s)
            }
        }
    }

    function B(t, e, n, i, o) {
        var r = I(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }
    var H = {
            on: function(t, e, n, i) {
                M(t, e, n, i, !1)
            },
            one: function(t, e, n, i) {
                M(t, e, n, i, !0)
            },
            off: function(t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = P(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = N(t),
                        u = e.startsWith(".");
                    if (void 0 === s) {
                        u && Object.keys(c).forEach((function(n) {
                            ! function(t, e, n, i) {
                                var o = e[n] || {};
                                Object.keys(o).forEach((function(r) {
                                    if (r.includes(i)) {
                                        var s = o[r];
                                        B(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, n, e.slice(1))
                        }));
                        var f = c[a] || {};
                        Object.keys(f).forEach((function(n) {
                            var i = n.replace(A, "");
                            if (!l || e.includes(i)) {
                                var o = f[n];
                                B(t, c, a, o.originalHandler, o.delegationSelector)
                            }
                        }))
                    } else {
                        if (!c || !c[a]) return;
                        B(t, c, a, s, r ? n : null)
                    }
                }
            },
            trigger: function(t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, o = _(),
                    r = e.replace(L, ""),
                    s = e !== r,
                    a = S.has(r),
                    l = !0,
                    c = !0,
                    u = !1,
                    f = null;
                return s && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : f = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach((function(t) {
                    Object.defineProperty(f, t, {
                        get: function() {
                            return n[t]
                        }
                    })
                })), u && f.preventDefault(), c && t.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
            }
        },
        R = function() {
            function t(t) {
                t && (this._element = t, E(t, this.constructor.DATA_KEY, this))
            }
            return t.prototype.dispose = function() {
                k(this._element, this.constructor.DATA_KEY), this._element = null
            }, t.getInstance = function(t) {
                return T(t, this.DATA_KEY)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "5.0.0-beta1"
                }
            }]), t
        }(),
        W = "alert",
        K = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            i(n, t);
            var o = n.prototype;
            return o.close = function(t) {
                var e = t ? this._getRootElement(t) : this._element,
                    n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }, o._getRootElement = function(t) {
                return c(t) || t.closest(".alert")
            }, o._triggerCloseEvent = function(t) {
                return H.trigger(t, "close.bs.alert")
            }, o._removeElement = function(t) {
                var e = this;
                if (t.classList.remove("show"), t.classList.contains("fade")) {
                    var n = u(t);
                    H.one(t, "transitionend", (function() {
                        return e._destroyElement(t)
                    })), h(t, n)
                } else this._destroyElement(t)
            }, o._destroyElement = function(t) {
                t.parentNode && t.parentNode.removeChild(t), H.trigger(t, "closed.bs.alert")
            }, n.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.alert");
                    e || (e = new n(this)), "close" === t && e[t](this)
                }))
            }, n.handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, e(n, null, [{
                key: "DATA_KEY",
                get: function() {
                    return "bs.alert"
                }
            }]), n
        }(R);
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', K.handleDismiss(new K)), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[W];
            t.fn[W] = K.jQueryInterface, t.fn[W].Constructor = K, t.fn[W].noConflict = function() {
                return t.fn[W] = e, K.jQueryInterface
            }
        }
    }));
    var Q = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        return i(n, t), n.prototype.toggle = function() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }, n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.button");
                e || (e = new n(this)), "toggle" === t && e[t]()
            }))
        }, e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.button"
            }
        }]), n
    }(R);

    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function F(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }))
    }
    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'),
            n = T(e, "bs.button");
        n || (n = new Q(e)), n.toggle()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.button;
            t.fn.button = Q.jQueryInterface, t.fn.button.Constructor = Q, t.fn.button.noConflict = function() {
                return t.fn.button = e, Q.jQueryInterface
            }
        }
    }));
    var Y = {
            setDataAttribute: function(t, e, n) {
                t.setAttribute("data-bs-" + F(e), n)
            },
            removeDataAttribute: function(t, e) {
                t.removeAttribute("data-bs-" + F(e))
            },
            getDataAttributes: function(t) {
                if (!t) return {};
                var e = {};
                return Object.keys(t.dataset).filter((function(t) {
                    return t.startsWith("bs")
                })).forEach((function(n) {
                    var i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = U(t.dataset[n])
                })), e
            },
            getDataAttribute: function(t, e) {
                return U(t.getAttribute("data-bs-" + F(e)))
            },
            offset: function(t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function(t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            }
        },
        q = {
            matches: function(t, e) {
                return t.matches(e)
            },
            find: function(t, e) {
                var n;
                return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
            },
            findOne: function(t, e) {
                return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
            },
            children: function(t, e) {
                var n, i = (n = []).concat.apply(n, t.children);
                return i.filter((function(t) {
                    return t.matches(e)
                }))
            },
            parents: function(t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            prev: function(t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function(t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        },
        z = "carousel",
        V = ".bs.carousel",
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        $ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        G = {
            TOUCH: "touch",
            PEN: "pen"
        },
        Z = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = q.findOne(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.next = function() {
                this._isSliding || this._slide("next")
            }, r.nextWhenVisible = function() {
                !document.hidden && g(this._element) && this.next()
            }, r.prev = function() {
                this._isSliding || this._slide("prev")
            }, r.pause = function(t) {
                t || (this._isPaused = !0), q.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (f(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, r.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, r.to = function(t) {
                var e = this;
                this._activeElement = q.findOne(".active.carousel-item", this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) H.one(this._element, "slid.bs.carousel", (function() {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? "next" : "prev";
                        this._slide(i, this._items[t])
                    }
            }, r.dispose = function() {
                t.prototype.dispose.call(this), H.off(this._element, V), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, r._getConfig = function(t) {
                return t = n({}, X, t), p(z, t, $), t
            }, r._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, r._addEventListeners = function() {
                var t = this;
                this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (function(e) {
                    return t.pause(e)
                })), H.on(this._element, "mouseleave.bs.carousel", (function(e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, r._addTouchEventListeners = function() {
                var t = this,
                    e = function(e) {
                        t._pointerEvent && G[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                    },
                    n = function(e) {
                        t._pointerEvent && G[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                q.find(".carousel-item img", this._element).forEach((function(t) {
                    H.on(t, "dragstart.bs.carousel", (function(t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (function(t) {
                    return e(t)
                })), H.on(this._element, "pointerup.bs.carousel", (function(t) {
                    return n(t)
                })), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (function(t) {
                    return e(t)
                })), H.on(this._element, "touchmove.bs.carousel", (function(e) {
                    return function(e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), H.on(this._element, "touchend.bs.carousel", (function(t) {
                    return n(t)
                })))
            }, r._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(), this.prev();
                        break;
                    case "ArrowRight":
                        t.preventDefault(), this.next()
                }
            }, r._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? q.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }, r._getItemByDirection = function(t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, r._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(q.findOne(".active.carousel-item", this._element));
                return H.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, r._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    for (var e = q.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add("active")
                }
            }, r._updateInterval = function() {
                var t = this._activeElement || q.findOne(".active.carousel-item", this._element);
                if (t) {
                    var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, r._slide = function(t, e) {
                var n, i, o, r = this,
                    s = q.findOne(".active.carousel-item", this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    f = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-start", i = "carousel-item-next", o = "left") : (n = "carousel-item-end", i = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                    if (this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
                        l.classList.add(i), v(l), s.classList.add(n), l.classList.add(n);
                        var d = u(s);
                        H.one(s, "transitionend", (function() {
                            l.classList.remove(n, i), l.classList.add("active"), s.classList.remove("active", i, n), r._isSliding = !1, setTimeout((function() {
                                H.trigger(r._element, "slid.bs.carousel", {
                                    relatedTarget: l,
                                    direction: o,
                                    from: a,
                                    to: c
                                })
                            }), 0)
                        })), h(s, d)
                    } else s.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, H.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    f && this.cycle()
                }
            }, o.carouselInterface = function(t, e) {
                var i = T(t, "bs.carousel"),
                    r = n({}, X, Y.getDataAttributes(t));
                "object" == typeof e && (r = n({}, r, e));
                var s = "string" == typeof e ? e : r.slide;
                if (i || (i = new o(t, r)), "number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else r.interval && r.ride && (i.pause(), i.cycle())
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.carouselInterface(this, t)
                }))
            }, o.dataApiClickHandler = function(t) {
                var e = c(this);
                if (e && e.classList.contains("carousel")) {
                    var i = n({}, Y.getDataAttributes(e), Y.getDataAttributes(this)),
                        r = this.getAttribute("data-bs-slide-to");
                    r && (i.interval = !1), o.carouselInterface(e, i), r && T(e, "bs.carousel").to(r), t.preventDefault()
                }
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return X
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.carousel"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", (function() {
        for (var t = q.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) Z.carouselInterface(t[e], T(t[e], "bs.carousel"))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[z];
            t.fn[z] = Z.jQueryInterface, t.fn[z].Constructor = Z, t.fn[z].noConflict = function() {
                return t.fn[z] = e, Z.jQueryInterface
            }
        }
    }));
    var J = "collapse",
        tt = {
            toggle: !0,
            parent: ""
        },
        et = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        nt = function(t) {
            function o(e, n) {
                var i;
                (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
                for (var o = q.find('[data-bs-toggle="collapse"]'), r = 0, s = o.length; r < s; r++) {
                    var a = o[r],
                        c = l(a),
                        u = q.find(c).filter((function(t) {
                            return t === e
                        }));
                    null !== c && u.length && (i._selector = c, i._triggerArray.push(a))
                }
                return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function() {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }, r.show = function() {
                var t = this;
                if (!this._isTransitioning && !this._element.classList.contains("show")) {
                    var e, n;
                    this._parent && 0 === (e = q.find(".show, .collapsing", this._parent).filter((function(e) {
                        return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                    }))).length && (e = null);
                    var i = q.findOne(this._selector);
                    if (e) {
                        var r = e.find((function(t) {
                            return i !== t
                        }));
                        if ((n = r ? T(r, "bs.collapse") : null) && n._isTransitioning) return
                    }
                    if (!H.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                        e && e.forEach((function(t) {
                            i !== t && o.collapseInterface(t, "hide"), n || E(t, "bs.collapse", null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(t) {
                            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = u(this._element);
                        H.one(this._element, "transitionend", (function() {
                            t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[s] = "", t.setTransitioning(!1), H.trigger(t._element, "shown.bs.collapse")
                        })), h(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, r.hide = function() {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i],
                                r = c(o);
                            r && !r.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var s = u(this._element);
                    H.one(this._element, "transitionend", (function() {
                        t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), H.trigger(t._element, "hidden.bs.collapse")
                    })), h(this._element, s)
                }
            }, r.setTransitioning = function(t) {
                this._isTransitioning = t
            }, r.dispose = function() {
                t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
            }, r._getConfig = function(t) {
                return (t = n({}, tt, t)).toggle = Boolean(t.toggle), p(J, t, et), t
            }, r._getDimension = function() {
                return this._element.classList.contains("width") ? "width" : "height"
            }, r._getParent = function() {
                var t = this,
                    e = this._config.parent;
                d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = q.findOne(e);
                var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
                return q.find(n, e).forEach((function(e) {
                    var n = c(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, r._addAriaAndCollapsedClass = function(t, e) {
                if (t && e.length) {
                    var n = t.classList.contains("show");
                    e.forEach((function(t) {
                        n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, o.collapseInterface = function(t, e) {
                var i = T(t, "bs.collapse"),
                    r = n({}, tt, Y.getDataAttributes(t), "object" == typeof e && e ? e : {});
                if (!i && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), i || (i = new o(t, r)), "string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.collapseInterface(this, t)
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return tt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.collapse"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = Y.getDataAttributes(this),
            n = l(this);
        q.find(n).forEach((function(t) {
            var n, i = T(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n)
        }))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[J];
            t.fn[J] = nt.jQueryInterface, t.fn[J].Constructor = nt, t.fn[J].noConflict = function() {
                return t.fn[J] = e, nt.jQueryInterface
            }
        }
    }));
    var it = "top",
        ot = "bottom",
        rt = "right",
        st = "left",
        at = [it, ot, rt, st],
        lt = at.reduce((function(t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []),
        ct = [].concat(at, ["auto"]).reduce((function(t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        ut = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function dt(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function ht(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }

    function pt(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }
    var gt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {},
                    i = e.attributes[t] || {},
                    o = e.elements[t];
                pt(o) && ft(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                n = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var i = e.elements[t],
                            o = e.attributes[t] || {},
                            r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        pt(i) && ft(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function(t) {
                            i.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function mt(t) {
        return t.split("-")[0]
    }

    function vt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }

    function _t(t, e) {
        var n, i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ((n = i) instanceof dt(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = e;
            do {
                if (o && t.isSameNode(o)) return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }

    function bt(t) {
        return dt(t).getComputedStyle(t)
    }

    function yt(t) {
        return ["table", "td", "th"].indexOf(ft(t)) >= 0
    }

    function wt(t) {
        return ((ht(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Et(t) {
        return "html" === ft(t) ? t : t.assignedSlot || t.parentNode || t.host || wt(t)
    }

    function Tt(t) {
        if (!pt(t) || "fixed" === bt(t).position) return null;
        var e = t.offsetParent;
        if (e) {
            var n = wt(e);
            if ("body" === ft(e) && "static" === bt(e).position && "static" !== bt(n).position) return n
        }
        return e
    }

    function kt(t) {
        for (var e = dt(t), n = Tt(t); n && yt(n) && "static" === bt(n).position;) n = Tt(n);
        return n && "body" === ft(n) && "static" === bt(n).position ? e : n || function(t) {
            for (var e = Et(t); pt(e) && ["html", "body"].indexOf(ft(e)) < 0;) {
                var n = bt(e);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }

    function Ot(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function Lt(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function At(t) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), t)
    }

    function Ct(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t, e
        }), {})
    }
    var Dt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e, n = t.state,
                    i = t.name,
                    o = n.elements.arrow,
                    r = n.modifiersData.popperOffsets,
                    s = mt(n.placement),
                    a = Ot(s),
                    l = [st, rt].indexOf(s) >= 0 ? "height" : "width";
                if (o && r) {
                    var c = n.modifiersData[i + "#persistent"].padding,
                        u = vt(o),
                        f = "y" === a ? it : st,
                        d = "y" === a ? ot : rt,
                        h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
                        p = r[a] - n.rects.reference[a],
                        g = kt(o),
                        m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        v = h / 2 - p / 2,
                        _ = c[f],
                        b = m - u[l] - c[d],
                        y = m / 2 - u[l] / 2 + v,
                        w = Lt(_, y, b),
                        E = a;
                    n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e)
                }
            },
            effect: function(t) {
                var e = t.state,
                    n = t.options,
                    i = t.name,
                    o = n.element,
                    r = void 0 === o ? "[data-popper-arrow]" : o,
                    s = n.padding,
                    a = void 0 === s ? 0 : s;
                null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && _t(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {
                    padding: At("number" != typeof a ? a : Ct(a, at))
                })
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        xt = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function St(t) {
        var e, n = t.popper,
            i = t.popperRect,
            o = t.placement,
            r = t.offsets,
            s = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = function(t) {
                var e = t.x,
                    n = t.y,
                    i = window.devicePixelRatio || 1;
                return {
                    x: Math.round(e * i) / i || 0,
                    y: Math.round(n * i) / i || 0
                }
            }(r),
            u = c.x,
            f = c.y,
            d = r.hasOwnProperty("x"),
            h = r.hasOwnProperty("y"),
            p = st,
            g = it,
            m = window;
        if (l) {
            var v = kt(n);
            v === dt(n) && (v = wt(n)), o === it && (g = ot, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === st && (p = rt, u -= v.clientWidth - i.width, u *= a ? 1 : -1)
        }
        var _, b = Object.assign({
            position: s
        }, l && xt);
        return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = h ? "0" : "", _[p] = d ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = h ? f + "px" : "", e[p] = d ? u + "px" : "", e.transform = "", e))
    }
    var jt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(t) {
                var e = t.state,
                    n = t.options,
                    i = n.gpuAcceleration,
                    o = void 0 === i || i,
                    r = n.adaptive,
                    s = void 0 === r || r,
                    a = {
                        placement: mt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: o
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), St(Object.assign(Object.assign({}, a), {}, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: s
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), St(Object.assign(Object.assign({}, a), {}, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1
                })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                    "data-popper-placement": e.placement
                })
            },
            data: {}
        },
        Nt = {
            passive: !0
        };
    var It = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(t) {
                var e = t.state,
                    n = t.instance,
                    i = t.options,
                    o = i.scroll,
                    r = void 0 === o || o,
                    s = i.resize,
                    a = void 0 === s || s,
                    l = dt(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return r && c.forEach((function(t) {
                        t.addEventListener("scroll", n.update, Nt)
                    })), a && l.addEventListener("resize", n.update, Nt),
                    function() {
                        r && c.forEach((function(t) {
                            t.removeEventListener("scroll", n.update, Nt)
                        })), a && l.removeEventListener("resize", n.update, Nt)
                    }
            },
            data: {}
        },
        Pt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function Mt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Pt[t]
        }))
    }
    var Bt = {
        start: "end",
        end: "start"
    };

    function Ht(t) {
        return t.replace(/start|end/g, (function(t) {
            return Bt[t]
        }))
    }

    function Rt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function Wt(t) {
        var e = dt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Kt(t) {
        return Rt(wt(t)).left + Wt(t).scrollLeft
    }

    function Qt(t) {
        var e = bt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function Ut(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : pt(e) && Qt(e) ? e : t(Et(e))
            }(t),
            i = "body" === ft(n),
            o = dt(n),
            r = i ? [o].concat(o.visualViewport || [], Qt(n) ? n : []) : n,
            s = e.concat(r);
        return i ? s : s.concat(Ut(Et(r)))
    }

    function Ft(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Yt(t, e) {
        return "viewport" === e ? Ft(function(t) {
            var e = dt(t),
                n = wt(t),
                i = e.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                s = 0,
                a = 0;
            return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
                width: o,
                height: r,
                x: s + Kt(t),
                y: a
            }
        }(t)) : pt(e) ? function(t) {
            var e = Rt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Ft(function(t) {
            var e = wt(t),
                n = Wt(t),
                i = t.ownerDocument.body,
                o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                s = -n.scrollLeft + Kt(t),
                a = -n.scrollTop;
            return "rtl" === bt(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(wt(t)))
    }

    function qt(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
                var e = Ut(Et(t)),
                    n = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && pt(t) ? kt(t) : t;
                return ht(n) ? e.filter((function(t) {
                    return ht(t) && _t(t, n) && "body" !== ft(t)
                })) : []
            }(t) : [].concat(e),
            o = [].concat(i, [n]),
            r = o[0],
            s = o.reduce((function(e, n) {
                var i = Yt(t, n);
                return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e
            }), Yt(t, r));
        return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
    }

    function zt(t) {
        return t.split("-")[1]
    }

    function Vt(t) {
        var e, n = t.reference,
            i = t.element,
            o = t.placement,
            r = o ? mt(o) : null,
            s = o ? zt(o) : null,
            a = n.x + n.width / 2 - i.width / 2,
            l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case it:
                e = {
                    x: a,
                    y: n.y - i.height
                };
                break;
            case ot:
                e = {
                    x: a,
                    y: n.y + n.height
                };
                break;
            case rt:
                e = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case st:
                e = {
                    x: n.x - i.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: n.x,
                    y: n.y
                }
        }
        var c = r ? Ot(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
                case "start":
                    e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                    break;
                case "end":
                    e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }

    function Xt(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            o = void 0 === i ? t.placement : i,
            r = n.boundary,
            s = void 0 === r ? "clippingParents" : r,
            a = n.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = n.elementContext,
            u = void 0 === c ? "popper" : c,
            f = n.altBoundary,
            d = void 0 !== f && f,
            h = n.padding,
            p = void 0 === h ? 0 : h,
            g = At("number" != typeof p ? p : Ct(p, at)),
            m = "popper" === u ? "reference" : "popper",
            v = t.elements.reference,
            _ = t.rects.popper,
            b = t.elements[d ? m : u],
            y = qt(ht(b) ? b : b.contextElement || wt(t.elements.popper), s, l),
            w = Rt(v),
            E = Vt({
                reference: w,
                element: _,
                strategy: "absolute",
                placement: o
            }),
            T = Ft(Object.assign(Object.assign({}, _), E)),
            k = "popper" === u ? T : w,
            O = {
                top: y.top - k.top + g.top,
                bottom: k.bottom - y.bottom + g.bottom,
                left: y.left - k.left + g.left,
                right: k.right - y.right + g.right
            },
            L = t.modifiersData.offset;
        if ("popper" === u && L) {
            var A = L[o];
            Object.keys(O).forEach((function(t) {
                var e = [rt, ot].indexOf(t) >= 0 ? 1 : -1,
                    n = [it, ot].indexOf(t) >= 0 ? "y" : "x";
                O[t] += A[n] * e
            }))
        }
        return O
    }

    function $t(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            o = n.boundary,
            r = n.rootBoundary,
            s = n.padding,
            a = n.flipVariations,
            l = n.allowedAutoPlacements,
            c = void 0 === l ? ct : l,
            u = zt(i),
            f = u ? a ? lt : lt.filter((function(t) {
                return zt(t) === u
            })) : at,
            d = f.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === d.length && (d = f);
        var h = d.reduce((function(e, n) {
            return e[n] = Xt(t, {
                placement: n,
                boundary: o,
                rootBoundary: r,
                padding: s
            })[mt(n)], e
        }), {});
        return Object.keys(h).sort((function(t, e) {
            return h[t] - h[e]
        }))
    }
    var Gt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                n = t.options,
                i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = mt(m), _ = l || (v === m || !p ? [Mt(m)] : function(t) {
                        if ("auto" === mt(t)) return [];
                        var e = Mt(t);
                        return [Ht(t), e, Ht(e)]
                    }(m)), b = [m].concat(_).reduce((function(t, n) {
                        return t.concat("auto" === mt(n) ? $t(e, {
                            placement: n,
                            boundary: u,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: g
                        }) : n)
                    }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, k = b[0], O = 0; O < b.length; O++) {
                    var L = b[O],
                        A = mt(L),
                        C = "start" === zt(L),
                        D = [it, ot].indexOf(A) >= 0,
                        x = D ? "width" : "height",
                        S = Xt(e, {
                            placement: L,
                            boundary: u,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: c
                        }),
                        j = D ? C ? rt : st : C ? ot : it;
                    y[x] > w[x] && (j = Mt(j));
                    var N = Mt(j),
                        I = [];
                    if (r && I.push(S[A] <= 0), a && I.push(S[j] <= 0, S[N] <= 0), I.every((function(t) {
                            return t
                        }))) {
                        k = L, T = !1;
                        break
                    }
                    E.set(L, I)
                }
                if (T)
                    for (var P = function(t) {
                            var e = b.find((function(e) {
                                var n = E.get(e);
                                if (n) return n.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return k = e, "break"
                        }, M = p ? 3 : 1; M > 0; M--) {
                        if ("break" === P(M)) break
                    }
                e.placement !== k && (e.modifiersData[i]._skip = !0, e.placement = k, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function Zt(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function Jt(t) {
        return [it, rt, ot, st].some((function(e) {
            return t[e] >= 0
        }))
    }
    var te = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state,
                n = t.name,
                i = e.rects.reference,
                o = e.rects.popper,
                r = e.modifiersData.preventOverflow,
                s = Xt(e, {
                    elementContext: "reference"
                }),
                a = Xt(e, {
                    altBoundary: !0
                }),
                l = Zt(s, i),
                c = Zt(a, o, r),
                u = Jt(l),
                f = Jt(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: f
            }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": f
            })
        }
    };
    var ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state,
                n = t.options,
                i = t.name,
                o = n.offset,
                r = void 0 === o ? [0, 0] : o,
                s = ct.reduce((function(t, n) {
                    return t[n] = function(t, e, n) {
                        var i = mt(t),
                            o = [st, it].indexOf(i) >= 0 ? -1 : 1,
                            r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
                                placement: t
                            })) : n,
                            s = r[0],
                            a = r[1];
                        return s = s || 0, a = (a || 0) * o, [st, rt].indexOf(i) >= 0 ? {
                            x: a,
                            y: s
                        } : {
                            x: s,
                            y: a
                        }
                    }(n, e.rects, r), t
                }), {}),
                a = s[e.placement],
                l = a.x,
                c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s
        }
    };
    var ne = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state,
                n = t.name;
            e.modifiersData[n] = Vt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var ie = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                n = t.options,
                i = t.name,
                o = n.mainAxis,
                r = void 0 === o || o,
                s = n.altAxis,
                a = void 0 !== s && s,
                l = n.boundary,
                c = n.rootBoundary,
                u = n.altBoundary,
                f = n.padding,
                d = n.tether,
                h = void 0 === d || d,
                p = n.tetherOffset,
                g = void 0 === p ? 0 : p,
                m = Xt(e, {
                    boundary: l,
                    rootBoundary: c,
                    padding: f,
                    altBoundary: u
                }),
                v = mt(e.placement),
                _ = zt(e.placement),
                b = !_,
                y = Ot(v),
                w = "x" === y ? "y" : "x",
                E = e.modifiersData.popperOffsets,
                T = e.rects.reference,
                k = e.rects.popper,
                O = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
                    placement: e.placement
                })) : g,
                L = {
                    x: 0,
                    y: 0
                };
            if (E) {
                if (r) {
                    var A = "y" === y ? it : st,
                        C = "y" === y ? ot : rt,
                        D = "y" === y ? "height" : "width",
                        x = E[y],
                        S = E[y] + m[A],
                        j = E[y] - m[C],
                        N = h ? -k[D] / 2 : 0,
                        I = "start" === _ ? T[D] : k[D],
                        P = "start" === _ ? -k[D] : -T[D],
                        M = e.elements.arrow,
                        B = h && M ? vt(M) : {
                            width: 0,
                            height: 0
                        },
                        H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        },
                        R = H[A],
                        W = H[C],
                        K = Lt(0, T[D], B[D]),
                        Q = b ? T[D] / 2 - N - K - R - O : I - K - R - O,
                        U = b ? -T[D] / 2 + N + K + W + O : P + K + W + O,
                        F = e.elements.arrow && kt(e.elements.arrow),
                        Y = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                        q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                        z = E[y] + Q - q - Y,
                        V = E[y] + U - q,
                        X = Lt(h ? Math.min(S, z) : S, x, h ? Math.max(j, V) : j);
                    E[y] = X, L[y] = X - x
                }
                if (a) {
                    var $ = "x" === y ? it : st,
                        G = "x" === y ? ot : rt,
                        Z = E[w],
                        J = Lt(Z + m[$], Z, Z - m[G]);
                    E[w] = J, L[w] = J - Z
                }
                e.modifiersData[i] = L
            }
        },
        requiresIfExists: ["offset"]
    };

    function oe(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = wt(e),
            s = Rt(t),
            a = pt(e),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (a || !a && !n) && (("body" !== ft(e) || Qt(r)) && (l = (i = e) !== dt(i) && pt(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Wt(i)), pt(e) ? ((c = Rt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = Kt(r))), {
            x: s.left + l.scrollLeft - c.x,
            y: s.top + l.scrollTop - c.y,
            width: s.width,
            height: s.height
        }
    }

    function re(t) {
        var e = new Map,
            n = new Set,
            i = [];
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            n.has(t.name) || function t(o) {
                n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                })), i.push(o)
            }(t)
        })), i
    }
    var se = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function ae() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function le(t) {
        void 0 === t && (t = {});
        var e = t,
            n = e.defaultModifiers,
            i = void 0 === n ? [] : n,
            o = e.defaultOptions,
            r = void 0 === o ? se : o;
        return function(t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, se), r),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                u = {
                    state: a,
                    setOptions: function(n) {
                        f(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
                            reference: ht(t) ? Ut(t) : t.contextElement ? Ut(t.contextElement) : [],
                            popper: Ut(e)
                        };
                        var o, s, c = function(t) {
                            var e = re(t);
                            return ut.reduce((function(t, n) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === n
                                })))
                            }), [])
                        }((o = [].concat(i, a.options.modifiers), s = o.reduce((function(t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                                options: Object.assign(Object.assign({}, n.options), e.options),
                                data: Object.assign(Object.assign({}, n.data), e.data)
                            }) : e, t
                        }), {}), Object.keys(s).map((function(t) {
                            return s[t]
                        }))));
                        return a.orderedModifiers = c.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                n = t.options,
                                i = void 0 === n ? {} : n,
                                o = t.effect;
                            if ("function" == typeof o) {
                                var r = o({
                                        state: a,
                                        name: e,
                                        instance: u,
                                        options: i
                                    }),
                                    s = function() {};
                                l.push(r || s)
                            }
                        })), u.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                n = t.popper;
                            if (ae(e, n)) {
                                a.rects = {
                                    reference: oe(e, kt(n), "fixed" === a.options.strategy),
                                    popper: vt(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var i = 0; i < a.orderedModifiers.length; i++)
                                    if (!0 !== a.reset) {
                                        var o = a.orderedModifiers[i],
                                            r = o.fn,
                                            s = o.options,
                                            l = void 0 === s ? {} : s,
                                            f = o.name;
                                        "function" == typeof r && (a = r({
                                            state: a,
                                            options: l,
                                            name: f,
                                            instance: u
                                        }) || a)
                                    } else a.reset = !1, i = -1
                            }
                        }
                    },
                    update: (o = function() {
                        return new Promise((function(t) {
                            u.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return s || (s = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                s = void 0, t(o())
                            }))
                        }))), s
                    }),
                    destroy: function() {
                        f(), c = !0
                    }
                };
            if (!ae(t, e)) return u;

            function f() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), u
        }
    }
    var ce = le(),
        ue = le({
            defaultModifiers: [It, ne, jt, gt]
        }),
        fe = le({
            defaultModifiers: [It, ne, jt, gt, ee, Gt, ie, Dt, te]
        }),
        de = Object.freeze({
            __proto__: null,
            popperGenerator: le,
            detectOverflow: Xt,
            createPopperBase: ce,
            createPopper: fe,
            createPopperLite: ue,
            top: it,
            bottom: ot,
            right: rt,
            left: st,
            auto: "auto",
            basePlacements: at,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: lt,
            placements: ct,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ut,
            applyStyles: gt,
            arrow: Dt,
            computeStyles: jt,
            eventListeners: It,
            flip: Gt,
            hide: te,
            offset: ee,
            popperOffsets: ne,
            preventOverflow: ie
        }),
        he = "dropdown",
        pe = new RegExp("ArrowUp|ArrowDown|Escape"),
        ge = y ? "top-end" : "top-start",
        me = y ? "top-start" : "top-end",
        ve = y ? "bottom-end" : "bottom-start",
        _e = y ? "bottom-start" : "bottom-end",
        be = y ? "left-start" : "right-start",
        ye = y ? "right-start" : "left-start",
        we = {
            offset: 0,
            flip: !0,
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Ee = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Te = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var t = this._element.classList.contains("show");
                    o.clearMenus(), t || this.show()
                }
            }, r.show = function() {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var t = o.getParentFromElement(this._element),
                        e = {
                            relatedTarget: this._element
                        };
                    if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                        if (!this._inNavbar) {
                            if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var n = this._element;
                            "parent" === this._config.reference ? n = t : d(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])), this._popper = fe(n, this._menu, this._getPopperConfig())
                        }
                        var i;
                        if ("ontouchstart" in document.documentElement && !t.closest(".navbar-nav"))(i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.on(t, "mouseover", null, (function() {}))
                        }));
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(t, "shown.bs.dropdown", e)
                    }
                }
            }, r.hide = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var t = o.getParentFromElement(this._element),
                        e = {
                            relatedTarget: this._element
                        };
                    H.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(t, "hidden.bs.dropdown", e))
                }
            }, r.dispose = function() {
                t.prototype.dispose.call(this), H.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, r.update = function() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }, r._addEventListeners = function() {
                var t = this;
                H.on(this._element, "click.bs.dropdown", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, r._getConfig = function(t) {
                return t = n({}, this.constructor.Default, Y.getDataAttributes(this._element), t), p(he, t, this.constructor.DefaultType), t
            }, r._getMenuElement = function() {
                return q.next(this._element, ".dropdown-menu")[0]
            }, r._getPlacement = function() {
                var t = this._element.parentNode;
                if (t.classList.contains("dropend")) return be;
                if (t.classList.contains("dropstart")) return ye;
                var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? me : ge : e ? _e : ve
            }, r._detectNavbar = function() {
                return null !== this._element.closest(".navbar")
            }, r._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            altBoundary: this._config.flip,
                            rootBoundary: this._config.boundary
                        }
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), n({}, t, this._config.popperConfig)
            }, o.dropdownInterface = function(t, e) {
                var n = T(t, "bs.dropdown");
                if (n || (n = new o(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.dropdownInterface(this, t)
                }))
            }, o.clearMenus = function(t) {
                if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                    for (var e = q.find('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                        var r = o.getParentFromElement(e[n]),
                            s = T(e[n], "bs.dropdown"),
                            a = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (a.clickEvent = t), s) {
                            var l = s._menu;
                            if (e[n].classList.contains("show"))
                                if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && l.contains(t.target)))
                                    if (!H.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                                        var c;
                                        if ("ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function(t) {
                                            return H.off(t, "mouseover", null, (function() {}))
                                        }));
                                        e[n].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove("show"), e[n].classList.remove("show"), H.trigger(r, "hidden.bs.dropdown", a)
                                    }
                        }
                    }
            }, o.getParentFromElement = function(t) {
                return c(t) || t.parentNode
            }, o.dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !pe.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var e = o.getParentFromElement(this),
                        n = this.classList.contains("show");
                    if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : q.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void o.clearMenus();
                    if (n && "Space" !== t.key) {
                        var i = q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(g);
                        if (i.length) {
                            var r = i.indexOf(t.target);
                            "ArrowUp" === t.key && r > 0 && r--, "ArrowDown" === t.key && r < i.length - 1 && r++, i[r = -1 === r ? 0 : r].focus()
                        }
                    } else o.clearMenus()
                }
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return we
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ee
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.dropdown"
                }
            }]), o
        }(R);
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", Te.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(), t.stopPropagation(), Te.dropdownInterface(this, "toggle")
    })), H.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[he];
            t.fn[he] = Te.jQueryInterface, t.fn[he].Constructor = Te, t.fn[he].noConflict = function() {
                return t.fn[he] = e, Te.jQueryInterface
            }
        }
    }));
    var ke = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        Oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        Le = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = q.findOne(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, r.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = H.trigger(this._element, "show.bs.modal", {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function(t) {
                        return e.hide(t)
                    })), H.on(this._dialog, "mousedown.dismiss.bs.modal", (function() {
                        H.one(e._element, "mouseup.dismiss.bs.modal", (function(t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, r.hide = function(t) {
                var e = this;
                if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !H.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
                        var i = u(this._element);
                        H.one(this._element, "transitionend", (function(t) {
                            return e._hideModal(t)
                        })), h(this._element, i)
                    } else this._hideModal()
                }
            }, r.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return H.off(t, ".bs.modal")
                })), t.prototype.dispose.call(this), H.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, r.handleUpdate = function() {
                this._adjustDialog()
            }, r._getConfig = function(t) {
                return t = n({}, ke, t), p("modal", t, Oe), t
            }, r._showElement = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade"),
                    i = q.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && v(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, H.trigger(e._element, "shown.bs.modal", {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var r = u(this._dialog);
                    H.one(this._dialog, "transitionend", o), h(this._dialog, r)
                } else o()
            }, r._enforceFocus = function() {
                var t = this;
                H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", (function(e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, r._setEscapeEvent = function() {
                var t = this;
                this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", (function(e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : H.off(this._element, "keydown.dismiss.bs.modal")
            }, r._setResizeEvent = function() {
                var t = this;
                this._isShown ? H.on(window, "resize.bs.modal", (function() {
                    return t._adjustDialog()
                })) : H.off(window, "resize.bs.modal")
            }, r._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), H.trigger(t._element, "hidden.bs.modal")
                }))
            }, r._removeBackdrop = function() {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, r._showBackdrop = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), H.on(this._element, "click.dismiss.bs.modal", (function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                        })), n && v(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = u(this._backdrop);
                    H.one(this._backdrop, "transitionend", t), h(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function() {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var r = u(this._backdrop);
                        H.one(this._backdrop, "transitionend", o), h(this._backdrop, r)
                    } else o()
                } else t()
            }, r._triggerBackdropTransition = function() {
                var t = this;
                if (!H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var n = u(this._dialog);
                    H.off(this._element, "transitionend"), H.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("modal-static"), e || (H.one(t._element, "transitionend", (function() {
                            t._element.style.overflowY = ""
                        })), h(t._element, n))
                    })), h(this._element, n), this._element.focus()
                }
            }, r._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                (!this._isBodyOverflowing && t && !y || this._isBodyOverflowing && !t && y) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !y || !this._isBodyOverflowing && t && y) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, r._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, r._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, r._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        Y.setDataAttribute(e, "padding-right", n), e.style.paddingRight = Number.parseFloat(i) + t._scrollbarWidth + "px"
                    })), q.find(".sticky-top").forEach((function(e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        Y.setDataAttribute(e, "margin-right", n), e.style.marginRight = Number.parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    Y.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add("modal-open")
            }, r._resetScrollbar = function() {
                q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                    var e = Y.getDataAttribute(t, "padding-right");
                    void 0 !== e && (Y.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), q.find(".sticky-top").forEach((function(t) {
                    var e = Y.getDataAttribute(t, "margin-right");
                    void 0 !== e && (Y.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = Y.getDataAttribute(document.body, "padding-right");
                void 0 === t ? document.body.style.paddingRight = "" : (Y.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, r._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o.jQueryInterface = function(t, e) {
                return this.each((function() {
                    var i = T(this, "bs.modal"),
                        r = n({}, ke, Y.getDataAttributes(this), "object" == typeof t && t ? t : {});
                    if (i || (i = new o(this, r)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](e)
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return ke
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.modal"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        var e = this,
            i = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), H.one(i, "show.bs.modal", (function(t) {
            t.defaultPrevented || H.one(i, "hidden.bs.modal", (function() {
                g(e) && e.focus()
            }))
        }));
        var o = T(i, "bs.modal");
        if (!o) {
            var r = n({}, Y.getDataAttributes(i), Y.getDataAttributes(this));
            o = new Le(i, r)
        }
        o.show(this)
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = Le.jQueryInterface, t.fn.modal.Constructor = Le, t.fn.modal.noConflict = function() {
                return t.fn.modal = e, Le.jQueryInterface
            }
        }
    }));
    var Ae = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        xe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Se(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) {
                var i, o = s[t],
                    a = o.nodeName.toLowerCase();
                if (!r.includes(a)) return o.parentNode.removeChild(o), "continue";
                var l = (i = []).concat.apply(i, o.attributes),
                    c = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (e.includes(n)) return !Ae.has(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(De));
                        for (var i = e.filter((function(t) {
                                return t instanceof RegExp
                            })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, c) || o.removeAttribute(t.nodeName)
                }))
            }, l = 0, c = s.length; l < c; l++) a(l);
        return o.body.innerHTML
    }
    var je = "tooltip",
        Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ie = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Pe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "(null|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object)"
        },
        Me = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: y ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: y ? "right" : "left"
        },
        Be = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            container: !1,
            fallbackPlacements: null,
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: xe,
            popperConfig: null
        },
        He = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Re = function(t) {
            function o(e, n) {
                var i;
                if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (i = t.call(this, e) || this)._isEnabled = !0, i._timeout = 0, i._hoverState = "", i._activeTrigger = {}, i._popper = null, i.config = i._getConfig(n), i.tip = null, i._setListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.enable = function() {
                this._isEnabled = !0
            }, r.disable = function() {
                this._isEnabled = !1
            }, r.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, r.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = T(t.delegateTarget, e);
                        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, r.dispose = function() {
                clearTimeout(this._timeout), H.off(this._element, this.constructor.EVENT_KEY), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this)
            }, r.show = function() {
                var t = this;
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = H.trigger(this._element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this._element),
                        i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                    if (e.defaultPrevented || !i) return;
                    var o = this.getTipElement(),
                        r = s(this.constructor.NAME);
                    o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
                        l = this._getAttachment(a);
                    this._addAttachmentClass(l);
                    var c = this._getContainer();
                    E(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), H.trigger(this._element, this.constructor.Event.INSERTED), this._popper = fe(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
                    var f, d, p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                    if (p)(f = o.classList).add.apply(f, p.split(" "));
                    if ("ontouchstart" in document.documentElement)(d = []).concat.apply(d, document.body.children).forEach((function(t) {
                        H.on(t, "mouseover", (function() {}))
                    }));
                    var g = function() {
                        var e = t._hoverState;
                        t._hoverState = null, H.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (this.tip.classList.contains("fade")) {
                        var m = u(this.tip);
                        H.one(this.tip, "transitionend", g), h(this.tip, m)
                    } else g()
                }
            }, r.hide = function() {
                var t = this;
                if (this._popper) {
                    var e = this.getTipElement(),
                        n = function() {
                            "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), H.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
                        };
                    if (!H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                        var i;
                        if (e.classList.remove("show"), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.off(t, "mouseover", m)
                        }));
                        if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                            var o = u(e);
                            H.one(e, "transitionend", n), h(e, o)
                        } else n();
                        this._hoverState = ""
                    }
                }
            }, r.update = function() {
                null !== this._popper && this._popper.update()
            }, r.isWithContent = function() {
                return Boolean(this.getTitle())
            }, r.getTipElement = function() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, r.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(q.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, r.setElementContent = function(t, e) {
                if (null !== t) return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, r.getTitle = function() {
                var t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
            }, r.updateAttachment = function(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }, r._getPopperConfig = function(t) {
                var e = this,
                    i = {
                        name: "flip",
                        options: {
                            altBoundary: !0
                        }
                    };
                return this.config.fallbackPlacements && (i.options.fallbackPlacements = this.config.fallbackPlacements), n({}, {
                    placement: t,
                    modifiers: [i, {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: this.config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: "." + this.constructor.NAME + "-arrow"
                        }
                    }, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }],
                    onFirstUpdate: function(t) {
                        t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                    }
                }, this.config.popperConfig)
            }, r._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }, r._getContainer = function() {
                return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : q.findOne(this.config.container)
            }, r._getAttachment = function(t) {
                return Me[t.toUpperCase()]
            }, r._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) H.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        H.on(t._element, n, t.config.selector, (function(e) {
                            return t._enter(e)
                        })), H.on(t._element, i, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t._element && t.hide()
                }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = n({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, r._fixTitle = function() {
                var t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }, r._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, r._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, r._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, r._getConfig = function(t) {
                var e = Y.getDataAttributes(this._element);
                return Object.keys(e).forEach((function(t) {
                    Ie.has(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = n({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), p(je, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t
            }, r._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, r._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Ne);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, r._handlePopperPlacementChange = function(t) {
                var e = t.state;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.tooltip"),
                        n = "object" == typeof t && t;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return Be
                }
            }, {
                key: "NAME",
                get: function() {
                    return je
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return He
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Pe
                }
            }]), o
        }(R);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[je];
            t.fn[je] = Re.jQueryInterface, t.fn[je].Constructor = Re, t.fn[je].noConflict = function() {
                return t.fn[je] = e, Re.jQueryInterface
            }
        }
    }));
    var We = "popover",
        Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Qe = n({}, Re.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ue = n({}, Re.DefaultType, {
            content: "(string|element|function)"
        }),
        Fe = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Ye = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            i(n, t);
            var o = n.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(q.findOne(".popover-header", t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this._element)), this.setElementContent(q.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
            }, o._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
            }, o._getContent = function() {
                return this._element.getAttribute("data-bs-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Ke);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, n.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.popover"),
                        i = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new n(this, i), E(this, "bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(n, null, [{
                key: "Default",
                get: function() {
                    return Qe
                }
            }, {
                key: "NAME",
                get: function() {
                    return We
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Fe
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ue
                }
            }]), n
        }(Re);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[We];
            t.fn[We] = Ye.jQueryInterface, t.fn[We].Constructor = Ye, t.fn[We].noConflict = function() {
                return t.fn[We] = e, Ye.jQueryInterface
            }
        }
    }));
    var qe = "scrollspy",
        ze = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ve = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Xe = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, H.on(i._scrollElement, "scroll.bs.scrollspy", (function(t) {
                    return i._process(t)
                })), i.refresh(), i._process(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q.find(this._selector).map((function(t) {
                    var e = l(t),
                        o = e ? q.findOne(e) : null;
                    if (o) {
                        var r = o.getBoundingClientRect();
                        if (r.width || r.height) return [Y[n](o).top + i, e]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, r.dispose = function() {
                t.prototype.dispose.call(this), H.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, r._getConfig = function(t) {
                if ("string" != typeof(t = n({}, ze, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                    var e = t.target.id;
                    e || (e = s(qe), t.target.id = e), t.target = "#" + e
                }
                return p(qe, t, Ve), t
            }, r._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, r._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, r._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, r._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, r._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = q.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (q.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), q.parents(n, ".nav, .list-group").forEach((function(t) {
                    q.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                        return t.classList.add("active")
                    })), q.prev(t, ".nav-item").forEach((function(t) {
                        q.children(t, ".nav-link").forEach((function(t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, r._clear = function() {
                q.find(this._selector).filter((function(t) {
                    return t.classList.contains("active")
                })).forEach((function(t) {
                    return t.classList.remove("active")
                }))
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.scrollspy");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return ze
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.scrollspy"
                }
            }]), o
        }(R);
    H.on(window, "load.bs.scrollspy.data-api", (function() {
        q.find('[data-bs-spy="scroll"]').forEach((function(t) {
            return new Xe(t, Y.getDataAttributes(t))
        }))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[qe];
            t.fn[qe] = Xe.jQueryInterface, t.fn[qe].Constructor = Xe, t.fn[qe].noConflict = function() {
                return t.fn[qe] = e, Xe.jQueryInterface
            }
        }
    }));
    var $e = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = c(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = q.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = H.trigger(e, "hide.bs.tab", {
                        relatedTarget: this._element
                    })), !(H.trigger(this._element, "show.bs.tab", {
                        relatedTarget: e
                    }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        H.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }), H.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }, o._activate = function(t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? q.children(e, ".active") : q.find(":scope > li > .active", e))[0],
                r = n && o && o.classList.contains("fade"),
                s = function() {
                    return i._transitionComplete(t, o, n)
                };
            if (o && r) {
                var a = u(o);
                o.classList.remove("show"), H.one(o, "transitionend", s), h(o, a)
            } else s()
        }, o._transitionComplete = function(t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = q.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }(t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && q.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0));
            n && n()
        }, n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tab") || new n(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }))
        }, e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.tab"
            }
        }]), n
    }(R);
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(), (T(this, "bs.tab") || new $e(this)).show()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = $e.jQueryInterface, t.fn.tab.Constructor = $e, t.fn.tab.noConflict = function() {
                return t.fn.tab = e, $e.jQueryInterface
            }
        }
    }));
    var Ge = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Ze = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        },
        Je = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.show = function() {
                var t = this;
                if (!H.trigger(this._element, "show.bs.toast").defaultPrevented) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var e = function() {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), H.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), v(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = u(this._element);
                        H.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.hide = function() {
                var t = this;
                if (this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                    var e = function() {
                        t._element.classList.add("hide"), H.trigger(t._element, "hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = u(this._element);
                        H.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
            }, r._getConfig = function(t) {
                return t = n({}, Ze, Y.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), p("toast", t, this.constructor.DefaultType), t
            }, r._setListeners = function() {
                var t = this;
                H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, r._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.toast");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t](this)
                    }
                }))
            }, e(o, null, [{
                key: "DefaultType",
                get: function() {
                    return Ge
                }
            }, {
                key: "Default",
                get: function() {
                    return Ze
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.toast"
                }
            }]), o
        }(R);
    return b((function() {
        var t = _();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = Je.jQueryInterface, t.fn.toast.Constructor = Je, t.fn.toast.noConflict = function() {
                return t.fn.toast = e, Je.jQueryInterface
            }
        }
    })), {
        Alert: K,
        Button: Q,
        Carousel: Z,
        Collapse: nt,
        Dropdown: Te,
        Modal: Le,
        Popover: Ye,
        ScrollSpy: Xe,
        Tab: $e,
        Toast: Je,
        Tooltip: Re
    }
}));
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e) r.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                            listener: n,
                            proxyListener: l
                        }), u.addEventListener(v, l, o)
                    } else
                        for (h = 0; h < p.length; h += 1) {
                            var f = p[h];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                                listener: n,
                                proxyListener: d
                            }), u.addEventListener(f, d, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length)
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try {
                        h = new t.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                    }
                    d.dom7EventData = i.filter((function(e, t) {
                        return t > 0
                    })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                else this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function(e) {
        s.fn[e] = s.fn[e] || r[e]
    }));
    var n = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
            },
            parseUrlQuery: function(e) {
                var i, s, a, r, n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                            return "" !== e
                        }))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                            var d = r[o],
                                h = Object.getOwnPropertyDescriptor(a, d);
                            void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                        }
                }
                return i
            }
        },
        o = {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        },
        l = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                t.on(e, t.params.on[e])
            }))
        },
        d = {
            components: {
                configurable: !0
            }
        };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        })), s
    }, l.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }
        return a.f7proxy = t, s.on(e, a, i)
    }, l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }))
        })), i) : i
    }, l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                })), t.forEach((function(e) {
                    e.apply(a, s)
                }))
            }
        })), r
    }, l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        }))
    }, l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(a)
        }))
    }, d.components.set = function(e) {
        this.use && this.use(e)
    }, l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, d);
    var h = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                o = this.virtual && e.virtual.enabled,
                l = o ? this.virtual.slides.length : this.slides.length,
                d = i.children("." + this.params.slideClass),
                h = o ? this.virtual.slides.length : d.length,
                p = [],
                c = [],
                u = [];

            function v(t) {
                return !e.cssMode || t !== d.length - 1
            }
            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length,
                b = this.snapGrid.length,
                w = e.spaceBetween,
                y = -f,
                x = 0,
                T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0,
                            I = void 0,
                            D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var H = t.getComputedStyle($[0], null),
                                B = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(H.getPropertyValue("width")),
                                    V = parseFloat(H.getPropertyValue("padding-left")),
                                    Y = parseFloat(H.getPropertyValue("padding-right")),
                                    F = parseFloat(H.getPropertyValue("margin-left")),
                                    W = parseFloat(H.getPropertyValue("margin-right")),
                                    R = H.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(H.getPropertyValue("height")),
                                    j = parseFloat(H.getPropertyValue("padding-top")),
                                    K = parseFloat(H.getPropertyValue("padding-bottom")),
                                    U = parseFloat(H.getPropertyValue("margin-top")),
                                    _ = parseFloat(H.getPropertyValue("margin-bottom")),
                                    Z = H.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    }), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                    }
                    p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                }
                if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                        marginLeft: w + "px"
                    }) : d.filter(v).css({
                        marginRight: w + "px"
                    }) : d.filter(v).css({
                        marginBottom: w + "px"
                    })), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }));
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map((function(e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function(t) {
                            ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                        })), (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach((function(e, t) {
                            p[t] = e - re
                        })), c.forEach((function(e, t) {
                            c[t] = e + re
                        }))
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [],
                s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
                else
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length) break;
                        i.push(this.slides.eq(a)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
                i = this.slides,
                a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                        var d = -(r - o.swiperSlideOffset),
                            h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                r = this.isBeginning,
                o = this.isEnd,
                l = r,
                d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                o = this.activeIndex,
                l = this.realIndex,
                d = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), h !== o) {
                var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = s(e.target).closest("." + t.slideClass)[0],
                a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.wrapperEl,
                n = this.progress,
                o = 0,
                l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this,
                o = n.params,
                l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(),
                p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex,
                a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var u = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this,
                n = e;
            n < 0 && (n = 0);
            var o = r.params,
                l = r.snapGrid,
                d = r.slidesGrid,
                h = r.previousIndex,
                p = r.activeIndex,
                c = r.rtlTranslate,
                u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
                f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex)
                for (var b = 0; b < d.length; b += 1) - Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
                var w = r.isHorizontal();
                return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = -g, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate),
                p = r.map((function(e) {
                    return l(e)
                })),
                c = (n.map((function(e) {
                    return l(e)
                })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function(e) {
                !c && h >= e && (c = e)
            })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                    t.slideTo(o)
                }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function() {
                    t.slideTo(o)
                }))) : t.slideTo(o)
            } else t.slideTo(o)
        }
    };
    var v = {
        loopCreate: function() {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each((function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            }));
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                r = this.allowSlideNext,
                n = this.snapGrid,
                o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function(e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && o.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    a = this.activeIndex;
                s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                var r = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (e >= r) this.appendSlide(t);
                else {
                    for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                        var h = this.slides.eq(d);
                        h.remove(), l.unshift(h)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                        n = a > e ? a + t.length : a
                    } else i.append(t);
                    for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                    s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!t.cordova && !t.phonegap),
            phonegap: !(!t.cordova && !t.phonegap),
            electron: !1
        }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);

    function D(i) {
        var a = this.touchEventsData,
            r = this.params,
            o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
                if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX,
                    p = o.currentY,
                    c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function O(t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            o = this.rtlTranslate,
            l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    h = "touchmove" === l.type ? d.pageX : l.pageX,
                    p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void(r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (this.isVertical()) {
                        if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX,
                        u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var m = !0,
                                g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function A(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(),
            u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function() {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
            if (s.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            f = i.velocities.pop(),
                            m = v.position - f.position,
                            g = v.time - f.time;
                        t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var b = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * b,
                        y = t.translate + w;
                    r && (y = -y);
                    var x, T, E = !1,
                        S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < d.length; M += 1)
                            if (d[M] > -y) {
                                C = M;
                                break
                            }
                        y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                    }
                    if (T && t.once("transitionEnd", (function() {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                        if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        })))
                    }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2])
                }
                var D = (p - l[k]) / $,
                    O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k))
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k))
                }
            }
    }

    function G() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function H(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function B() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }
    var N = !1;

    function X() {}
    var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        Y = {
            update: h,
            translate: p,
            transition: c,
            slide: u,
            loop: v,
            grabCursor: f,
            manipulation: L,
            events: {
                attachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
                    var r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                },
                detachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        r = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                        }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        a = this.$el,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                var t = l[e];
                                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var d = l || this.originalParams,
                                h = s.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                            var c = d.direction && d.direction !== s.direction,
                                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map((function(e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var i = parseFloat(e.substr(1));
                                    return {
                                        value: t.innerHeight * i,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a],
                                n = r.point;
                            r.value <= t.innerWidth && (i = n)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function(i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    var o;

                    function l() {
                        n && n()
                    }
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        F = {},
        W = function(e) {
            function t() {
                for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
                1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function(e) {
                    Object.keys(Y[e]).forEach((function(i) {
                        t.prototype[i] || (t.prototype[i] = Y[e][i])
                    }))
                }));
                var h = this;
                void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function(e) {
                    var t = h.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = {
                            enabled: !0
                        }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                            enabled: !1
                        })
                    }
                }));
                var p = n.extend({}, V);
                h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
                var c = s(h.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each((function(e, i) {
                            var s = n.extend({}, r, {
                                el: i
                            });
                            u.push(new t(s))
                        })), u
                    }
                    var v, f, m;
                    return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function(e) {
                        return c.children(e)
                    } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                        $el: c,
                        el: a,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === h.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === h.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: h.params.allowSlideNext,
                        allowSlidePrev: h.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2],
                            cancel: f[3]
                        }, h.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: n.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: h.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), h.useModules(), h.params.init && h.init(), h
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function(t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), this.emit("changeDirection"), t && this.update(), this)
            }, t.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
            }, t.extendDefaults = function(e) {
                n.extend(F, e)
            }, i.extendedDefaults.get = function() {
                return F
            }, i.defaults.get = function() {
                return V
            }, i.Class.get = function() {
                return e
            }, i.$.get = function() {
                return s
            }, Object.defineProperties(t, i), t
        }(l),
        R = {
            name: "device",
            proto: {
                device: I
            },
            static: {
                device: I
            }
        },
        q = {
            name: "support",
            proto: {
                support: o
            },
            static: {
                support: o
            }
        },
        j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                var e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        K = {
            name: "browser",
            proto: {
                browser: j
            },
            static: {
                browser: j
            }
        },
        U = {
            name: "resize",
            create: function() {
                var e = this;
                n.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        _ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
                void 0 === i && (i = {});
                var s = this,
                    a = new(0, _.func)((function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                s.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else s.emit("observerUpdate", e[0])
                    }));
                a.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.observer.observers.push(a)
            },
            init: function() {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        Z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                n.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        Q = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    o = t.params.virtual,
                    l = o.addSlidesBefore,
                    d = o.addSlidesAfter,
                    h = t.virtual,
                    p = h.from,
                    c = h.to,
                    u = h.slides,
                    v = h.slidesGrid,
                    f = h.renderSlide,
                    m = h.offset;
                t.updateActiveIndex();
                var g, b, w, y = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
                var x = Math.max((y || 0) - w, 0),
                    T = Math.min((y || 0) + b, u.length - 1),
                    E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                function S() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (n.extend(t.virtual, {
                        from: x,
                        to: T,
                        offset: E,
                        slidesGrid: t.slidesGrid
                    }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: x,
                    to: T,
                    slides: function() {
                        for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void S();
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var P = p; P <= c; P += 1)(P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach((function(e) {
                    t.$wrapperEl.append(f(u[e], e))
                })), C.sort((function(e, t) {
                    return t - e
                })).forEach((function(e) {
                    t.$wrapperEl.prepend(f(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach((function(e) {
                        var t = r[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        J = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                n.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        removeSlide: Q.removeSlide.bind(this),
                        removeAllSlides: Q.removeAllSlides.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        ee = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [
                                [d.left, d.top],
                                [d.left + this.width, d.top],
                                [d.left, d.top + this.height],
                                [d.left + this.width, d.top + this.height]
                            ], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        te = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                n.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: ee.enable.bind(this),
                        disable: ee.disable.bind(this),
                        handle: ee.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var ie = {
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel" in e;
                    if (!t) {
                        var i = e.createElement("div");
                        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                    }
                    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    a = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var r = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var o = 0,
                    l = i.rtlTranslate ? -1 : 1,
                    d = ie.normalize(t);
                if (a.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                        o = d.pixelX * l
                    } else {
                        if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                        o = d.pixelY
                    }
                else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
                if (0 === o) return !0;
                if (a.invert && (o = -o), i.params.freeMode) {
                    var h = {
                            time: n.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o)
                        },
                        p = i.mousewheel.lastEventBeforeSnap,
                        c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
                    if (!c) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var u = i.getTranslate() + o * a.sensitivity,
                            v = i.isBeginning,
                            f = i.isEnd;
                        if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var m = i.mousewheel.recentWheelEvents;
                            m.length >= 15 && m.shift();
                            var g = m.length ? m[m.length - 1] : void 0,
                                b = m[0];
                            if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);
                            else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                                var w = o > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((function() {
                                    i.slideToClosest(i.params.speed, !0, void 0, w)
                                }), 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function() {
                                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                    }
                } else {
                    var y = {
                            time: n.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o),
                            raw: e
                        },
                        x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var T = x.length ? x[x.length - 1] : void 0;
                    if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var e = ie.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        se = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        ae = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, d, h = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function(e, a) {
                            var r = s(a),
                                n = r.index();
                            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var p = h.eq(i),
                                c = p.index();
                            if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (c >= h.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                        h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                w = e ? "right" : "left";
                            h.css(this.isHorizontal() ? w : "top", b + "px")
                        }
                    }
                    if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                        var y;
                        y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var x = (i + 1) / n,
                            T = 1,
                            E = 1;
                        "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), n.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        re = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
                        n[0].style.opacity = 0, n.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        o = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: o,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function() {
                    a.css("opacity", 0), a.transition(400)
                }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                        $el: a,
                        el: a[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        ne = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p
                }
                if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, a)
                })), i.each((function(t, i) {
                    var n = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        e.parallax.setTransform(i, n)
                    }))
                }))
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                }))
            }
        },
        oe = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        o = s.height * t.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom,
                    b = this.params.zoom,
                    w = g.gesture,
                    y = g.image;
                (w.$slideEl || (w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            }
        },
        le = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function(e, n) {
                        var o = s(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, h, p, !1, (function() {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                            }
                        })), i.emit("lazyImageLoad", r[0], o[0])
                    }))
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function d(e) {
                    if (n) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function h(e) {
                    return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                }));
                else if (l > 1)
                    for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        de = {
            LinearSpline: function(e, t) {
                var i, s, a, r, n, o = function(e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, a = this,
                    r = a.controller.control;

                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);
                else r instanceof W && t !== r && n(r)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    a = s.controller.control;

                function r(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function() {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
                else a instanceof W && t !== a && r(a)
            }
        },
        he = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, a) {
                    var r = s(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                }))
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        pe = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    })),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = pe.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                        value: a
                    }, null, a) : t.history.pushState({
                        value: a
                    }, null, a))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        ce = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ue = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }), i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function() {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        ve = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd((function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    }))
                }
            }
        },
        fe = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            P = d.shadowScale,
                            z = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                    }
                var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        me = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                        var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd((function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    }))
                }
            }
        },
        ge = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                    var f = i.eq(u),
                        m = r[u],
                        g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = l ? p * g : 0,
                        w = l ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = n.stretch;
                    "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
                    var T = l ? 0 : x * g,
                        E = l ? x * g : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        be = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), n.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var a;
                        if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var r = this.activeIndex;
                            this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                            var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                            a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        }
                        this.slideTo(a)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var s, a = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                            var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                        } else s = this.realIndex;
                        t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                    }
                    var o = 1,
                        l = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
                    else
                        for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
                }
            }
        },
        we = [R, q, K, U, Z, J, te, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                n.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: ie.enable.bind(this),
                        disable: ie.disable.bind(this),
                        handle: ie.handle.bind(this),
                        handleMouseEnter: ie.handleMouseEnter.bind(this),
                        handleMouseLeave: ie.handleMouseLeave.bind(this),
                        animateSlider: ie.animateSlider.bind(this),
                        releaseScroll: ie.releaseScroll.bind(this),
                        lastScrollTime: n.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    navigation: {
                        init: se.init.bind(this),
                        update: se.update.bind(this),
                        destroy: se.destroy.bind(this),
                        onNextClick: se.onNextClick.bind(this),
                        onPrevClick: se.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation,
                        a = i.$nextEl,
                        r = i.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                n.extend(this, {
                    pagination: {
                        init: ae.init.bind(this),
                        render: ae.render.bind(this),
                        update: ae.update.bind(this),
                        destroy: ae.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                n.extend(this, {
                    scrollbar: {
                        init: re.init.bind(this),
                        destroy: re.destroy.bind(this),
                        updateSize: re.updateSize.bind(this),
                        setTranslate: re.setTranslate.bind(this),
                        setTransition: re.setTransition.bind(this),
                        enableDraggable: re.enableDraggable.bind(this),
                        disableDraggable: re.disableDraggable.bind(this),
                        setDragPosition: re.setDragPosition.bind(this),
                        getPointerPosition: re.getPointerPosition.bind(this),
                        onDragStart: re.onDragStart.bind(this),
                        onDragMove: re.onDragMove.bind(this),
                        onDragEnd: re.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                n.extend(this, {
                    parallax: {
                        setTransform: ne.setTransform.bind(this),
                        setTranslate: ne.setTranslate.bind(this),
                        setTransition: ne.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                    t[i] = oe[i].bind(e)
                })), n.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, a)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                n.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: le.load.bind(this),
                        loadInSlide: le.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                n.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: de.getInterpolateFunction.bind(this),
                        setTranslate: de.setTranslate.bind(this),
                        setTransition: de.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(he).forEach((function(t) {
                    e.a11y[t] = he[t].bind(e)
                }))
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                n.extend(this, {
                    history: {
                        init: pe.init.bind(this),
                        setHistory: pe.setHistory.bind(this),
                        setHistoryPopState: pe.setHistoryPopState.bind(this),
                        scrollToSlide: pe.scrollToSlide.bind(this),
                        destroy: pe.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                n.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: ce.init.bind(this),
                        destroy: ce.destroy.bind(this),
                        setHash: ce.setHash.bind(this),
                        onHashCange: ce.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                n.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ue.run.bind(e),
                        start: ue.start.bind(e),
                        stop: ue.stop.bind(e),
                        pause: ue.pause.bind(e),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                n.extend(this, {
                    fadeEffect: {
                        setTranslate: ve.setTranslate.bind(this),
                        setTransition: ve.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                n.extend(this, {
                    cubeEffect: {
                        setTranslate: fe.setTranslate.bind(this),
                        setTransition: fe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                n.extend(this, {
                    flipEffect: {
                        setTranslate: me.setTranslate.bind(this),
                        setTransition: me.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        n.extend(this.params, e), n.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                n.extend(this, {
                    coverflowEffect: {
                        setTranslate: ge.setTranslate.bind(this),
                        setTransition: ge.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    multipleActiveThumbs: !0,
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                n.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: be.init.bind(this),
                        update: be.update.bind(this),
                        onThumbClick: be.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}));
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var o = document,
        l = o.createTextNode.bind(o)

    function d(n, t, e) {
        n.style.setProperty(t, e)
    }

    function f(n, t) {
        return n.appendChild(t)
    }

    function p(n, t, e, r) {
        var i = o.createElement("span")
        return t && (i.className = t), e && (!r && i.setAttribute("data-" + t, e), i.textContent = e), n && f(n, i) || i
    }

    function h(n, t) {
        return n.getAttribute("data-" + t)
    }

    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || o).querySelectorAll(n)) : []
    }

    function u(n) {
        for (var t = []; n--;) t[n] = []
        return t
    }

    function v(n, t) {
        n && n.some(t)
    }

    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}

    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }

    function r(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i) {
                r.unshift(e)
                var o = a[e]
                if (!o) throw new Error("plugin not loaded: " + e)
                v(o.depends, function(n) {
                    t(n, e, r)
                })
            } else {
                var u = r.indexOf(n)
                r.splice(i, 1), r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }

    function t(n) {
        a[n.by] = n
    }

    function g(n, r, i, o, u) {
        n.normalize()
        var c = [],
            a = document.createDocumentFragment()
        o && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length) return s.push(n), void c.push.apply(c, g(n, r, i, o, u))
                var t = n.wholeText || "",
                    e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")), v(e.split(i), function(n, t) {
                    t && u && s.push(p(a, "whitespace", " ", u))
                    var e = p(a, r, n)
                    c.push(e), s.push(e)
                }), " " === t[t.length - 1] && s.push(l(" ")))
            } else s.push(n)
        }), v(s, function(n) {
            f(a, n)
        }), n.innerHTML = "", f(n, a), c
    }
    var s = 0
    var i = "words",
        e = n(i, s, "word", function(n) {
            return g(n, "word", /\s+/, 0, 1)
        }),
        y = "chars",
        w = n(y, [i], "char", function(n, e, t) {
            var r = []
            return v(t[i], function(n, t) {
                r.push.apply(r, g(n, "char", "", e.whitespace && t))
            }), r
        })

    function b(e) {
        var f = (e = e || {}).key
        return m(e.target || "[data-splitting]").map(function(a) {
            var s = a["🍌"]
            if (!e.force && s) return s
            s = a["🍌"] = {
                el: a
            }
            var n = e.by || h(a, "splitting")
            n && "true" != n || (n = y)
            var t = r(n),
                l = function(n, t) {
                    for (var e in t) n[e] = t[e]
                    return n
                }({}, e)
            return v(t, function(n) {
                if (n.split) {
                    var t = n.by,
                        e = (f ? "-" + f : "") + n.key,
                        r = n.split(a, l, s)
                    e && (i = a, c = (u = "--" + e) + "-index", v(o = r, function(n, t) {
                        Array.isArray(n) ? v(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }), d(i, u + "-total", o.length)), s[t] = r, a.classList.add(t)
                }
                var i, o, u, c
            }), a.classList.add("splitting"), s
        })
    }

    function N(n, t, e) {
        var r = m(t.matching || n.children, n),
            i = {}
        return v(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }), Object.keys(i).map(Number).sort(x).map(c(i))
    }

    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content, b(n), t.outerHTML
    }, b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
            return N(n, {
                matching: e[i]
            }, "offsetTop")
        }),
        L = n("items", s, "item", function(n, t) {
            return m(t.matching || n.children, n)
        }),
        k = n("rows", s, "row", function(n, t) {
            return N(n, t, "offsetTop")
        }),
        A = n("cols", s, "col", function(n, t) {
            return N(n, t, "offsetLeft")
        }),
        C = n("grid", ["rows", "cols"]),
        M = "layout",
        S = n(M, s, s, function(n, t) {
            var e = t.rows = +(t.rows || h(n, "rows") || 1),
                r = t.columns = +(t.columns || h(n, "columns") || 1)
            if (t.image = t.image || h(n, "image") || n.currentSrc || n.src, t.image) {
                var i = m("img", n)[0]
                t.image = i && (i.currentSrc || i.src)
            }
            t.image && d(n, "background-image", "url(" + t.image + ")")
            for (var o = e * r, u = [], c = p(s, "cell-grid"); o--;) {
                var a = p(c, "cell")
                p(a, "cell-inner"), u.push(a)
            }
            return f(n, c), u
        }),
        H = n("cellRows", [M], "row", function(n, t, e) {
            var r = t.rows,
                i = u(r)
            return v(e[M], function(n, t, e) {
                i[Math.floor(t / (e.length / r))].push(n)
            }), i
        }),
        O = n("cellColumns", [M], "col", function(n, t, e) {
            var r = t.columns,
                i = u(r)
            return v(e[M], function(n, t) {
                i[t % r].push(n)
            }), i
        }),
        j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
            return e[M]
        })
    return t(e), t(w), t(T), t(L), t(k), t(A), t(C), t(S), t(H), t(O), t(j), b
});

! function(n) {
    var o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 11)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, , function(n, e, t) {
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
    }).call(this, t(5))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var o;
    o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    e.exports = o
}, , , , , , function(e, t, n) {
    e.exports = n(12)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(4),
        r = n(13);

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var s = a.window.jarallax;
    if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
            return a.window.jarallax = s, this
        }, void 0 !== a.jQuery) {
        var c = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = r.default.apply(a.window, e);
            return "object" !== l(t) ? t : this
        };
        c.constructor = r.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u, this
        }
    }
    i()(function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(14),
        r = n.n(a),
        b = n(4);

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var s, v, m = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
        p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        d = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++)
                if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        }();

    function f() {
        v = p ? (!s && document.body && ((s = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(s)), (s ? s.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
    }
    f(), b.window.addEventListener("resize", f), b.window.addEventListener("orientationchange", f), b.window.addEventListener("load", f), i()(function() {
        f()
    });
    var g = [];

    function y() {
        g.length && (g.forEach(function(e, t) {
            var n = e.instance,
                o = e.oldData,
                i = n.$item.getBoundingClientRect(),
                a = {
                    width: i.width,
                    height: i.height,
                    top: i.top,
                    bottom: i.bottom,
                    wndW: b.window.innerWidth,
                    wndH: v
                },
                r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height,
                l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
            g[t].oldData = a, r && n.onResize(), l && n.onScroll()
        }), r()(y))
    }

    function h(e, t) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        for (var n, o = t, i = Array.prototype.slice.call(arguments, 2), a = e.length, r = 0; r < a; r++)
            if ("object" === u(o) || void 0 === o ? e[r].jarallax || (e[r].jarallax = new w(e[r], o)) : e[r].jarallax && (n = e[r].jarallax[o].apply(e[r].jarallax, i)), void 0 !== n) return n;
        return e
    }
    var x = 0,
        w = function() {
            function s(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, s);
                var n = this;
                n.instanceID = x++, n.$item = e, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var o = n.$item.dataset || {},
                    i = {};
                if (Object.keys(o).forEach(function(e) {
                        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                        t && void 0 !== n.defaults[t] && (i[t] = o[e])
                    }), n.options = n.extend({}, n.defaults, i, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                        "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                    }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                    var a = n.options.disableParallax;
                    n.options.disableParallax = function() {
                        return a.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                        return !1
                    }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                    var r = n.options.disableVideo;
                    n.options.disableVideo = function() {
                        return r.test(navigator.userAgent)
                    }
                }
                "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                    return !1
                });
                var l = n.options.elementInViewport;
                l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]);
                l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, n.initImg() && n.canInitParallax() && n.init()
            }
            return function(e, t, n) {
                t && l(e.prototype, t), n && l(e, n)
            }(s, [{
                key: "css",
                value: function(t, n) {
                    return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && d && (n[d] = n.transform), Object.keys(n).forEach(function(e) {
                        t.style[e] = n[e]
                    }), t)
                }
            }, {
                key: "extend",
                value: function(n) {
                    var o = arguments;
                    return n = n || {}, Object.keys(arguments).forEach(function(t) {
                        o[t] && Object.keys(o[t]).forEach(function(e) {
                            n[e] = o[t][e]
                        })
                    }), n
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: b.window.innerWidth || document.documentElement.clientWidth,
                        height: v,
                        y: document.documentElement.scrollTop
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return d && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        n = {};
                    if (!e.options.keepImg) {
                        var o = e.$item.getAttribute("style");
                        if (o && e.$item.setAttribute("data-jarallax-original-styles", o), e.image.useImgTag) {
                            var i = e.image.$item.getAttribute("style");
                            i && e.image.$item.setAttribute("data-jarallax-original-styles", i)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), m && e.css(e.image.$container, {
                            opacity: .9999
                        }), e.image.$container.setAttribute("id", "jarallax-container-".concat(e.instanceID)), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: ".concat(e.options.imgSize, "; object-position: ").concat(e.options.imgPosition, ";"),
                            "max-width": "none"
                        }, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": e.image.bgImage || 'url("'.concat(e.image.src, '")')
                        }, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                        var a = function(e) {
                            for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                            return t
                        }(e.$item).filter(function(e) {
                            var t = b.window.getComputedStyle(e),
                                n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                            return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                        });
                        e.image.position = a.length ? "absolute" : "fixed"
                    }
                    n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    g.push({
                        instance: this
                    }), 1 === g.length && y()
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var n = this;
                    g.forEach(function(e, t) {
                        e.instance.instanceID === n.instanceID && g.splice(t, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var n = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            n = t.width,
                            o = t.height;
                        if (!e.$clipStyles) e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
                        var i = "#jarallax-container-".concat(e.instanceID, " {\n           clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n           clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n        }");
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        n = t.height,
                        o = e.options.speed,
                        i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = n,
                        l = 0;
                    return i && (o < 0 ? (a = o * Math.max(n, v), v < n && (a -= o * (n - v))) : a = o * (n + v), 1 < o ? r = Math.abs(a - v) : o < 0 ? r = a / o + Math.abs(a) : r += (v - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (v - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
                        height: "".concat(r, "px"),
                        marginTop: "".concat(l, "px"),
                        left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                        width: "".concat(t.width, "px")
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        n = t.$item.getBoundingClientRect(),
                        o = n.top,
                        i = n.height,
                        a = {},
                        r = n;
                    if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b.window.innerWidth, e || t.isElementInViewport) {
                        var l = Math.max(0, o),
                            s = Math.max(0, i + o),
                            c = Math.max(0, -o),
                            u = Math.max(0, o + i - v),
                            m = Math.max(0, i - (o + i - v)),
                            p = Math.max(0, -o + v - i),
                            d = 1 - 2 * (v - o) / (v + i),
                            f = 1;
                        if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : m <= v && (f = m / v), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var g = 1;
                            t.options.speed < 0 ? g -= t.options.speed * f : g += t.options.speed * (1 - f), a.transform = "scale(".concat(g, ") translate3d(0,0,0)")
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var y = t.parallaxScrollDistance * d;
                            "absolute" === t.image.position && (y -= o), a.transform = "translate3d(0,".concat(y, "px,0)")
                        }
                        t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                            section: n,
                            beforeTop: l,
                            beforeTopEnd: s,
                            afterTop: c,
                            beforeBottom: u,
                            beforeBottomEnd: m,
                            afterBottom: p,
                            visiblePercent: f,
                            fromViewportCenter: d
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]), s
        }();
    h.constructor = w, t.default = h
}, function(e, t, n) {
    var o = n(15),
        i = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || function(e) {
            var t = +new Date,
                n = Math.max(0, 16 - (t - a)),
                o = setTimeout(e, n);
            return a = t, o
        },
        a = +new Date;
    var r = o.cancelAnimationFrame || o.webkitCancelAnimationFrame || o.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (i = i.bind(o), r = r.bind(o)), (e.exports = i).cancel = r
}, function(n, e, t) {
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
    }).call(this, t(5))
}]);;
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery || window.Zepto);
    }
}(function($) {
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    var mfp, MagnificPopup = function() {},
        _isJQ = !!(window.jQuery),
        _prevStatus, _window = $(window),
        _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
        _getEl = function(className, appendTo, html, raw) {
            var el = document.createElement('div');
            el.className = 'mfp-' + className;
            if (html) {
                el.innerHTML = html;
            }
            if (!raw) {
                el = $(el);
                if (appendTo) {
                    el.appendTo(appendTo);
                }
            } else if (appendTo) {
                appendTo.appendChild(el);
            }
            return el;
        },
        _mfpTrigger = function(e, data) {
            mfp.ev.triggerHandler(NS + e, data);
            if (mfp.st.callbacks) {
                e = e.charAt(0).toLowerCase() + e.slice(1);
                if (mfp.st.callbacks[e]) {
                    mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                }
            }
        },
        _getCloseBtn = function(type) {
            if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                _currPopupType = type;
            }
            return mfp.currTemplate.closeBtn;
        },
        _checkInstance = function() {
            if (!$.magnificPopup.instance) {
                mfp = new MagnificPopup();
                mfp.init();
                $.magnificPopup.instance = mfp;
            }
        },
        supportsTransitions = function() {
            var s = document.createElement('p').style,
                v = ['ms', 'O', 'Moz', 'Webkit'];
            if (s['transition'] !== undefined) {
                return true;
            }
            while (v.length) {
                if (v.pop() + 'Transition' in s) {
                    return true;
                }
            }
            return false;
        };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items,
                    item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl('container', mfp.wrap);
            }
            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on('keyup' + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            if (_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    $('body, html').css('overflow', 'hidden');
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger('BuildControls');
            $('html').css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
            return data;
        },
        close: function() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ''
                };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
            if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
            _mfpTrigger('Resize');
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content)
                mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger('FirstMarkupParse', markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger('AfterChange');
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index],
                type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                type = item.type;
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = 'click.magnificPopup';
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }
                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger('UpdateStatus', data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },
        _checkIfClose: function(target) {
            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
            if (closeOnContent && closeOnBg) {
                return true;
            } else {
                if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                    return true;
                }
                if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                    if (closeOnBg) {
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: '',
            preloader: true,
            focus: '',
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: 'auto',
            fixedBgPos: 'auto',
            overflowY: 'auto',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: 'Close (Esc)',
            tLoading: 'Loading...',
            autoFocusLast: true
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === 'open') {
                var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            options = $.extend(true, {}, options);
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };
    var INLINE_NS = 'inline',
        _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
            if (_lastInlineElement) {
                _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                _lastInlineElement = null;
            }
        };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide',
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var AJAX_NS = 'ajax',
        _ajaxCur, _removeAjaxCursor = function() {
            if (_ajaxCur) {
                $(document.body).removeClass(_ajaxCur);
            }
        },
        _destroyAjaxRequest = function() {
            _removeAjaxCursor();
            if (mfp.req) {
                mfp.req.abort();
            }
        };
    $.magnificPopup.registerModule(AJAX_NS, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
                mfp.updateStatus('loading');
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };
                        _mfpTrigger('ParseAjax', temp);
                        mfp.appendContent($(temp.data), AJAX_NS);
                        item.finished = true;
                        _removeAjaxCursor();
                        mfp._setFocus();
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
                        mfp.updateStatus('ready');
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
                mfp.req = $.ajax(opts);
                return '';
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined)
            return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return '';
    };
    $.magnificPopup.registerModule('image', {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image,
                    ns = '.image';
                mfp.types.push('image');
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });
                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img) return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger('ImageHasSize', item);
                    if (item.imgHidden) {
                        if (mfp.content)
                            mfp.content.removeClass('mfp-loading');
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0,
                    img = item.img[0],
                    mfpSetInterval = function(delay) {
                        if (_imgInterval) {
                            clearInterval(_imgInterval);
                        }
                        _imgInterval = setInterval(function() {
                            if (img.naturalWidth > 0) {
                                mfp._onImageHasSize(item);
                                return;
                            }
                            if (counter > 200) {
                                clearInterval(_imgInterval);
                            }
                            counter++;
                            if (counter === 3) {
                                mfpSetInterval(10);
                            } else if (counter === 40) {
                                mfpSetInterval(50);
                            } else if (counter === 100) {
                                mfpSetInterval(500);
                            }
                        }, delay);
                    };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0,
                    onLoadComplete = function() {
                        if (item) {
                            if (item.img[0].complete) {
                                item.img.off('.mfploader');
                                if (item === mfp.currItem) {
                                    mfp._onImageHasSize(item);
                                    mfp.updateStatus('ready');
                                }
                                item.hasSize = true;
                                item.loaded = true;
                                _mfpTrigger('ImageLoadComplete');
                            } else {
                                guard++;
                                if (guard < 200) {
                                    setTimeout(onLoadComplete, 100);
                                } else {
                                    onLoadError();
                                }
                            }
                        }
                    },
                    onLoadError = function() {
                        if (item) {
                            item.img.off('.mfploader');
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            item.loadError = true;
                        }
                    },
                    imgSt = mfp.st.image;
                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }
                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }
                mfp.updateStatus('loading');
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule('zoom', {
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration,
                    getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                            cssObj = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            },
                            t = 'transition';
                        cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                        newImg.css(cssObj);
                        return newImg;
                    },
                    showMainContent = function() {
                        mfp.content.css('visibility', 'visible');
                    },
                    openTimeout, animatedImg;
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= ($(window).scrollTop() - paddingTop);
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var IFRAME_NS = 'iframe',
        _emptyPage = '//about:blank',
        _fixIframeBugs = function(isShowing) {
            if (mfp.currTemplate[IFRAME_NS]) {
                var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                if (el.length) {
                    if (!isShowing) {
                        el[0].src = _emptyPage;
                    }
                    if (mfp.isIE8) {
                        el.css('display', isShowing ? 'block' : 'none');
                    }
                }
            }
        };
    $.magnificPopup.registerModule(IFRAME_NS, {
        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);
                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs();
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true);
                        }
                    }
                });
                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },
            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;
                $.each(iframeSt.patterns, function() {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false;
                    }
                });
                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);
                mfp.updateStatus('ready');
                return template;
            }
        }
    });
    var _getLoopedId = function(index) {
            var numSlides = mfp.items.length;
            if (index > numSlides - 1) {
                return index - numSlides;
            } else if (index < 0) {
                return numSlides + index;
            }
            return index;
        },
        _replaceCurrTotal = function(text, curr, total) {
            return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
        };
    $.magnificPopup.registerModule('gallery', {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
        proto: {
            initGallery: function() {
                var gSt = mfp.st.gallery,
                    ns = '.mfp-gallery';
                mfp.direction = true;
                if (!gSt || !gSt.enabled) return false;
                _wrapClasses += ' mfp-gallery';
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function() {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }
                    _document.on('keydown' + ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });
                _mfpOn('UpdateStatus' + ns, function(e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });
                _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                            arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                            arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                        arrowLeft.click(function() {
                            mfp.prev();
                        });
                        arrowRight.click(function() {
                            mfp.next();
                        });
                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });
                _mfpOn(CHANGE_EVENT + ns, function() {
                    if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
            },
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload,
                    preloadBefore = Math.min(p[0], mfp.items.length),
                    preloadAfter = Math.min(p[1], mfp.items.length),
                    i;
                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);
                if (mfp.items[index].preloaded) {
                    return;
                }
                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }
                _mfpTrigger('LazyLoad', item);
                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }
                item.preloaded = true;
            }
        }
    });
    var RETINA_NS = 'retina';
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return '@2x' + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina,
                        ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
    _checkInstance();
}));
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'));
    } else {
        window.jQueryBridget = factory(window, window.jQuery);
    }
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} : function(message) {
        console.error(message);
    };

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }
        if (!PluginClass.prototype.option) {
            PluginClass.prototype.option = function(opts) {
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            plainCall(this, arg0);
            return this;
        };

        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr);
                    return;
                }
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init();
                } else {
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance);
                }
            });
        }
        updateJQuery($);
    }

    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget;
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
})(window, function factory() {
    'use strict';

    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    };
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }

    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;

    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }

    function getSize(elem) {
        setup();
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == 'none') {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth +
                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight +
                (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return 'matches';
        }
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    };
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    };
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    };
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem, options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    };
    return utils;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict';

    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };

    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    };
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    };
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    };

    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent('transitionEnd', [this]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    };
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    };
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once('transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return 'opacity';
        }
        for (var prop in optionStyle) {
            return prop;
        }
    };
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    };
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};

    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    };
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    };
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;

        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    };
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    };
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    };
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    };
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    };
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    };
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    };
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    };
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    };
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    };
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    };
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    };

    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };

    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}(window, function factory(Outlayer) {
    'use strict';

    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    };
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        });
    };
    return Item;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}(window, function factory(getSize, Outlayer) {
    'use strict';

    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    };
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    };
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    };
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'));
    } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
    }
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    };
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
    };
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
            stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
    }
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    };
    return MasonryMode;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    };
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    };
    return FitRows;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    };
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    };
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
    } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    } : function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    };
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    };
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
    };
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    };
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
    };
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    };
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            var isMatched = test(item);
            if (isMatched) {
                matches.push(item);
            }
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            return function(item) {
                return jQuery(item.element).is(filter);
            };
        }
        if (typeof filter == 'function') {
            return function(item) {
                return filter(item.element);
            };
        }
        return function(item) {
            return matchesSelector(item.element, filter);
        };
    };
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    };
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') {
                return sorter;
            }
            var args = trim(sorter).split(' ');
            var query = args[0];
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            } : function(elem) {
                return elem && getValue(elem);
            };
            return sorter;
        }

        function getValueGetter(attr, query) {
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                };
            }
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            };
        }
        return mungeSorter;
    })();
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) {
            return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    };
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    };

    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            throw new Error('No layout mode: ' + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
    };
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item);
        }
    };
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    };
    return Isotope;
}));
(function($) {
    var methods;
    methods = {
        init: function(elements, options) {
            $(window).scroll(function() {
                methods.animate(elements, options);
            });
            $(window).trigger('scroll');
        },
        animate: function(elements, options) {
            var viewBottom, viewHeight, viewTop;
            viewHeight = $(window).height();
            viewTop = $(window).scrollTop();
            viewBottom = viewTop + viewHeight;
            $.each(elements, function() {
                var elementAnimated, elementAnimation, elementBottom, elementDelay, elementDuration, elementHeight, elementIteration, elementOffset, elementTop;
                elementAnimated = 'animated';
                elementAnimation = $(this).data('animate');
                elementOffset = $(this).data('offset');
                elementDuration = $(this).data('duration');
                elementDelay = $(this).data('delay');
                elementIteration = $(this).data('iteration');
                elementHeight = $(this).outerHeight();
                elementTop = $(this).offset().top;
                elementBottom = elementTop + elementHeight;
                if (elementOffset) {
                    elementTop = elementTop + elementOffset;
                    elementBottom = elementBottom - elementOffset;
                }
                if (options.animateCssVersion === 4) {
                    elementAnimated = 'animate__animated';
                    elementAnimation = 'animate__' + elementAnimation;
                }
                $(this).css({
                    '-webkit-animation-duration': elementDuration,
                    'animation-duration': elementDuration
                });
                $(this).css({
                    '-webkit-animation-delay': elementDelay,
                    'animation-delay': elementDelay
                });
                $(this).css({
                    '-webkit-animation-iteration-count': elementIteration,
                    'animation-iteration-count': elementIteration
                });
                if (elementBottom >= viewTop && elementTop <= viewBottom) {
                    $(this).css('visibility', 'visible');
                    $(this).addClass(elementAnimation);
                    $(this).addClass(elementAnimated);
                } else {
                    if (options.once === false) {
                        $(this).css('visibility', 'hidden');
                        $(this).removeClass(elementAnimation);
                        $(this).removeClass(elementAnimated);
                    }
                }
            });
        }
    };
    jQuery.fn.scrolla = function(options) {
        options = $.extend({
            mobile: false,
            once: false,
            animateCssVersion: 4
        }, options);
        if (options.mobile === false) {
            if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return false;
            }
        }
        methods.init(this, options);
    };
})(jQuery);
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
    'use strict';
    var skrollr = {
        get: function() {
            return _instance;
        },
        init: function(options) {
            return _instance || new Skrollr(options);
        },
        VERSION: '0.6.30'
    };
    var hasProp = Object.prototype.hasOwnProperty;
    var Math = window.Math;
    var getStyle = window.getComputedStyle;
    var documentElement;
    var body;
    var EVENT_TOUCHSTART = 'touchstart';
    var EVENT_TOUCHMOVE = 'touchmove';
    var EVENT_TOUCHCANCEL = 'touchcancel';
    var EVENT_TOUCHEND = 'touchend';
    var SKROLLABLE_CLASS = 'skrollable';
    var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
    var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
    var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';
    var SKROLLR_CLASS = 'skrollr';
    var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
    var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
    var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';
    var DEFAULT_EASING = 'linear';
    var DEFAULT_DURATION = 1000;
    var DEFAULT_MOBILE_DECELERATION = 0.004;
    var DEFAULT_SKROLLRBODY = 'skrollr-body';
    var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;
    var ANCHOR_START = 'start';
    var ANCHOR_END = 'end';
    var ANCHOR_CENTER = 'center';
    var ANCHOR_BOTTOM = 'bottom';
    var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';
    var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;
    var rxTrim = /^\s+|\s+$/g;
    var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;
    var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;
    var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;
    var rxCamelCase = /-([a-z0-9_])/g;
    var rxCamelCaseFn = function(str, letter) {
        return letter.toUpperCase();
    };
    var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;
    var rxInterpolateString = /\{\?\}/g;
    var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;
    var rxGradient = /[a-z\-]+-gradient/g;
    var theCSSPrefix = '';
    var theDashedCSSPrefix = '';
    var detectCSSPrefix = function() {
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (!getStyle) {
            return;
        }
        var style = getStyle(body, null);
        for (var k in style) {
            theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));
            if (theCSSPrefix) {
                break;
            }
        }
        if (!theCSSPrefix) {
            theCSSPrefix = theDashedCSSPrefix = '';
            return;
        }
        theCSSPrefix = theCSSPrefix[0];
        if (theCSSPrefix.slice(0, 1) === '-') {
            theDashedCSSPrefix = theCSSPrefix;
            theCSSPrefix = ({
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            })[theCSSPrefix];
        } else {
            theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
        }
    };
    var polyfillRAF = function() {
        var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];
        var lastTime = _now();
        if (_isMobile || !requestAnimFrame) {
            requestAnimFrame = function(callback) {
                var deltaTime = _now() - lastTime;
                var delay = Math.max(0, 1000 / 60 - deltaTime);
                return window.setTimeout(function() {
                    lastTime = _now();
                    callback();
                }, delay);
            };
        }
        return requestAnimFrame;
    };
    var polyfillCAF = function() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];
        if (_isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function(timeout) {
                return window.clearTimeout(timeout);
            };
        }
        return cancelAnimFrame;
    };
    var easings = {
        begin: function() {
            return 0;
        },
        end: function() {
            return 1;
        },
        linear: function(p) {
            return p;
        },
        quadratic: function(p) {
            return p * p;
        },
        cubic: function(p) {
            return p * p * p;
        },
        swing: function(p) {
            return (-Math.cos(p * Math.PI) / 2) + 0.5;
        },
        sqrt: function(p) {
            return Math.sqrt(p);
        },
        outCubic: function(p) {
            return (Math.pow((p - 1), 3) + 1);
        },
        bounce: function(p) {
            var a;
            if (p <= 0.5083) {
                a = 3;
            } else if (p <= 0.8489) {
                a = 9;
            } else if (p <= 0.96208) {
                a = 27;
            } else if (p <= 0.99981) {
                a = 91;
            } else {
                return 1;
            }
            return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
        }
    };

    function Skrollr(options) {
        documentElement = document.documentElement;
        body = document.body;
        detectCSSPrefix();
        _instance = this;
        options = options || {};
        _constants = options.constants || {};
        if (options.easing) {
            for (var e in options.easing) {
                easings[e] = options.easing[e];
            }
        }
        _edgeStrategy = options.edgeStrategy || 'set';
        _listeners = {
            beforerender: options.beforerender,
            render: options.render,
            keyframe: options.keyframe
        };
        _forceHeight = options.forceHeight !== false;
        if (_forceHeight) {
            _scale = options.scale || 1;
        }
        _mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;
        _smoothScrollingEnabled = options.smoothScrolling !== false;
        _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;
        _smoothScrolling = {
            targetTop: _instance.getScrollTop()
        };
        _isMobile = ((options.mobileCheck || function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
        })());
        if (_isMobile) {
            _skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY);
            if (_skrollrBody) {
                _detect3DTransforms();
            }
            _initMobile();
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
        } else {
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
        }
        _instance.refresh();
        _addEvent(window, 'resize orientationchange', function() {
            var width = documentElement.clientWidth;
            var height = documentElement.clientHeight;
            if (height !== _lastViewportHeight || width !== _lastViewportWidth) {
                _lastViewportHeight = height;
                _lastViewportWidth = width;
                _requestReflow = true;
            }
        });
        var requestAnimFrame = polyfillRAF();
        (function animloop() {
            _render();
            _animFrame = requestAnimFrame(animloop);
        }());
        return _instance;
    }
    Skrollr.prototype.refresh = function(elements) {
        var elementIndex;
        var elementsLength;
        var ignoreID = false;
        if (elements === undefined) {
            ignoreID = true;
            _skrollables = [];
            _skrollableIdCounter = 0;
            elements = document.getElementsByTagName('*');
        } else if (elements.length === undefined) {
            elements = [elements];
        }
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var el = elements[elementIndex];
            var anchorTarget = el;
            var keyFrames = [];
            var smoothScrollThis = _smoothScrollingEnabled;
            var edgeStrategy = _edgeStrategy;
            var emitEvents = false;
            if (ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                delete el[SKROLLABLE_ID_DOM_PROPERTY];
            }
            if (!el.attributes) {
                continue;
            }
            var attributeIndex = 0;
            var attributesLength = el.attributes.length;
            for (; attributeIndex < attributesLength; attributeIndex++) {
                var attr = el.attributes[attributeIndex];
                if (attr.name === 'data-anchor-target') {
                    anchorTarget = document.querySelector(attr.value);
                    if (anchorTarget === null) {
                        throw 'Unable to find anchor target "' + attr.value + '"';
                    }
                    continue;
                }
                if (attr.name === 'data-smooth-scrolling') {
                    smoothScrollThis = attr.value !== 'off';
                    continue;
                }
                if (attr.name === 'data-edge-strategy') {
                    edgeStrategy = attr.value;
                    continue;
                }
                if (attr.name === 'data-emit-events') {
                    emitEvents = true;
                    continue;
                }
                var match = attr.name.match(rxKeyframeAttribute);
                if (match === null) {
                    continue;
                }
                var kf = {
                    props: attr.value,
                    element: el,
                    eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
                };
                keyFrames.push(kf);
                var constant = match[1];
                if (constant) {
                    kf.constant = constant.substr(1);
                }
                var offset = match[2];
                if (/p$/.test(offset)) {
                    kf.isPercentage = true;
                    kf.offset = (offset.slice(0, -1) | 0) / 100;
                } else {
                    kf.offset = (offset | 0);
                }
                var anchor1 = match[3];
                var anchor2 = match[4] || anchor1;
                if (!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
                    kf.mode = 'absolute';
                    if (anchor1 === ANCHOR_END) {
                        kf.isEnd = true;
                    } else if (!kf.isPercentage) {
                        kf.offset = kf.offset * _scale;
                    }
                } else {
                    kf.mode = 'relative';
                    kf.anchors = [anchor1, anchor2];
                }
            }
            if (!keyFrames.length) {
                continue;
            }
            var styleAttr, classAttr;
            var id;
            if (!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                id = el[SKROLLABLE_ID_DOM_PROPERTY];
                styleAttr = _skrollables[id].styleAttr;
                classAttr = _skrollables[id].classAttr;
            } else {
                id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
                styleAttr = el.style.cssText;
                classAttr = _getClass(el);
            }
            _skrollables[id] = {
                element: el,
                styleAttr: styleAttr,
                classAttr: classAttr,
                anchorTarget: anchorTarget,
                keyFrames: keyFrames,
                smoothScrolling: smoothScrollThis,
                edgeStrategy: edgeStrategy,
                emitEvents: emitEvents,
                lastFrameIndex: -1
            };
            _updateClass(el, [SKROLLABLE_CLASS], []);
        }
        _reflow();
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];
            if (sk === undefined) {
                continue;
            }
            _parseProps(sk);
            _fillProps(sk);
        }
        return _instance;
    };
    Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
        var viewportHeight = documentElement.clientHeight;
        var box = element.getBoundingClientRect();
        var absolute = box.top;
        var boxHeight = box.bottom - box.top;
        if (viewportAnchor === ANCHOR_BOTTOM) {
            absolute -= viewportHeight;
        } else if (viewportAnchor === ANCHOR_CENTER) {
            absolute -= viewportHeight / 2;
        }
        if (elementAnchor === ANCHOR_BOTTOM) {
            absolute += boxHeight;
        } else if (elementAnchor === ANCHOR_CENTER) {
            absolute += boxHeight / 2;
        }
        absolute += _instance.getScrollTop();
        return (absolute + 0.5) | 0;
    };
    Skrollr.prototype.animateTo = function(top, options) {
        options = options || {};
        var now = _now();
        var scrollTop = _instance.getScrollTop();
        var duration = options.duration === undefined ? DEFAULT_DURATION : options.duration;
        _scrollAnimation = {
            startTop: scrollTop,
            topDiff: top - scrollTop,
            targetTop: top,
            duration: duration,
            startTime: now,
            endTime: now + duration,
            easing: easings[options.easing || DEFAULT_EASING],
            done: options.done
        };
        if (!_scrollAnimation.topDiff) {
            if (_scrollAnimation.done) {
                _scrollAnimation.done.call(_instance, false);
            }
            _scrollAnimation = undefined;
        }
        return _instance;
    };
    Skrollr.prototype.stopAnimateTo = function() {
        if (_scrollAnimation && _scrollAnimation.done) {
            _scrollAnimation.done.call(_instance, true);
        }
        _scrollAnimation = undefined;
    };
    Skrollr.prototype.isAnimatingTo = function() {
        return !!_scrollAnimation;
    };
    Skrollr.prototype.isMobile = function() {
        return _isMobile;
    };
    Skrollr.prototype.setScrollTop = function(top, force) {
        _forceRender = (force === true);
        if (_isMobile) {
            _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
        } else {
            window.scrollTo(0, top);
        }
        return _instance;
    };
    Skrollr.prototype.getScrollTop = function() {
        if (_isMobile) {
            return _mobileOffset;
        } else {
            return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
        }
    };
    Skrollr.prototype.getMaxScrollTop = function() {
        return _maxKeyFrame;
    };
    Skrollr.prototype.on = function(name, fn) {
        _listeners[name] = fn;
        return _instance;
    };
    Skrollr.prototype.off = function(name) {
        delete _listeners[name];
        return _instance;
    };
    Skrollr.prototype.destroy = function() {
        var cancelAnimFrame = polyfillCAF();
        cancelAnimFrame(_animFrame);
        _removeAllEvents();
        _updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            _reset(_skrollables[skrollableIndex].element);
        }
        documentElement.style.overflow = body.style.overflow = '';
        documentElement.style.height = body.style.height = '';
        if (_skrollrBody) {
            skrollr.setStyle(_skrollrBody, 'transform', 'none');
        }
        _instance = undefined;
        _skrollrBody = undefined;
        _listeners = undefined;
        _forceHeight = undefined;
        _maxKeyFrame = 0;
        _scale = 1;
        _constants = undefined;
        _mobileDeceleration = undefined;
        _direction = 'down';
        _lastTop = -1;
        _lastViewportWidth = 0;
        _lastViewportHeight = 0;
        _requestReflow = false;
        _scrollAnimation = undefined;
        _smoothScrollingEnabled = undefined;
        _smoothScrollingDuration = undefined;
        _smoothScrolling = undefined;
        _forceRender = undefined;
        _skrollableIdCounter = 0;
        _edgeStrategy = undefined;
        _isMobile = false;
        _mobileOffset = 0;
        _translateZ = undefined;
    };
    var _initMobile = function() {
        var initialElement;
        var initialTouchY;
        var initialTouchX;
        var currentElement;
        var currentTouchY;
        var currentTouchX;
        var lastTouchY;
        var deltaY;
        var initialTouchTime;
        var currentTouchTime;
        var lastTouchTime;
        var deltaTime;
        _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
            var touch = e.changedTouches[0];
            currentElement = e.target;
            while (currentElement.nodeType === 3) {
                currentElement = currentElement.parentNode;
            }
            currentTouchY = touch.clientY;
            currentTouchX = touch.clientX;
            currentTouchTime = e.timeStamp;
            if (!rxTouchIgnoreTags.test(currentElement.tagName)) {
                e.preventDefault();
            }
            switch (e.type) {
                case EVENT_TOUCHSTART:
                    if (initialElement) {
                        initialElement.blur();
                    }
                    _instance.stopAnimateTo();
                    initialElement = currentElement;
                    initialTouchY = lastTouchY = currentTouchY;
                    initialTouchX = currentTouchX;
                    initialTouchTime = currentTouchTime;
                    break;
                case EVENT_TOUCHMOVE:
                    if (rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
                        e.preventDefault();
                    }
                    deltaY = currentTouchY - lastTouchY;
                    deltaTime = currentTouchTime - lastTouchTime;
                    _instance.setScrollTop(_mobileOffset - deltaY, true);
                    lastTouchY = currentTouchY;
                    lastTouchTime = currentTouchTime;
                    break;
                default:
                case EVENT_TOUCHCANCEL:
                case EVENT_TOUCHEND:
                    var distanceY = initialTouchY - currentTouchY;
                    var distanceX = initialTouchX - currentTouchX;
                    var distance2 = distanceX * distanceX + distanceY * distanceY;
                    if (distance2 < 49) {
                        if (!rxTouchIgnoreTags.test(initialElement.tagName)) {
                            initialElement.focus();
                            var clickEvent = document.createEvent('MouseEvents');
                            clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                            initialElement.dispatchEvent(clickEvent);
                        }
                        return;
                    }
                    initialElement = undefined;
                    var speed = deltaY / deltaTime;
                    speed = Math.max(Math.min(speed, 3), -3);
                    var duration = Math.abs(speed / _mobileDeceleration);
                    var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
                    var targetTop = _instance.getScrollTop() - targetOffset;
                    var targetRatio = 0;
                    if (targetTop > _maxKeyFrame) {
                        targetRatio = (_maxKeyFrame - targetTop) / targetOffset;
                        targetTop = _maxKeyFrame;
                    } else if (targetTop < 0) {
                        targetRatio = -targetTop / targetOffset;
                        targetTop = 0;
                    }
                    duration = duration * (1 - targetRatio);
                    _instance.animateTo((targetTop + 0.5) | 0, {
                        easing: 'outCubic',
                        duration: duration
                    });
                    break;
            }
        });
        window.scrollTo(0, 0);
        documentElement.style.overflow = body.style.overflow = 'hidden';
    };
    var _updateDependentKeyFrames = function() {
        var viewportHeight = documentElement.clientHeight;
        var processedConstants = _processConstants();
        var skrollable;
        var element;
        var anchorTarget;
        var keyFrames;
        var keyFrameIndex;
        var keyFramesLength;
        var kf;
        var skrollableIndex;
        var skrollablesLength;
        var offset;
        var constantValue;
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            element = skrollable.element;
            anchorTarget = skrollable.anchorTarget;
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                offset = kf.offset;
                constantValue = processedConstants[kf.constant] || 0;
                kf.frame = offset;
                if (kf.isPercentage) {
                    offset = offset * viewportHeight;
                    kf.frame = offset;
                }
                if (kf.mode === 'relative') {
                    _reset(element);
                    kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;
                    _reset(element, true);
                }
                kf.frame += constantValue;
                if (_forceHeight) {
                    if (!kf.isEnd && kf.frame > _maxKeyFrame) {
                        _maxKeyFrame = kf.frame;
                    }
                }
            }
        }
        _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                constantValue = processedConstants[kf.constant] || 0;
                if (kf.isEnd) {
                    kf.frame = _maxKeyFrame - kf.offset + constantValue;
                }
            }
            skrollable.keyFrames.sort(_keyFrameComparator);
        }
    };
    var _calcSteps = function(fakeFrame, actualFrame) {
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            var skrollable = _skrollables[skrollableIndex];
            var element = skrollable.element;
            var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
            var frames = skrollable.keyFrames;
            var framesLength = frames.length;
            var firstFrame = frames[0];
            var lastFrame = frames[frames.length - 1];
            var beforeFirst = frame < firstFrame.frame;
            var afterLast = frame > lastFrame.frame;
            var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
            var emitEvents = skrollable.emitEvents;
            var lastFrameIndex = skrollable.lastFrameIndex;
            var key;
            var value;
            if (beforeFirst || afterLast) {
                if (beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
                    continue;
                }
                if (beforeFirst) {
                    _updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);
                    if (emitEvents && lastFrameIndex > -1) {
                        _emitEvent(element, firstFrame.eventType, _direction);
                        skrollable.lastFrameIndex = -1;
                    }
                } else {
                    _updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);
                    if (emitEvents && lastFrameIndex < framesLength) {
                        _emitEvent(element, lastFrame.eventType, _direction);
                        skrollable.lastFrameIndex = framesLength;
                    }
                }
                skrollable.edge = beforeFirst ? -1 : 1;
                switch (skrollable.edgeStrategy) {
                    case 'reset':
                        _reset(element);
                        continue;
                    case 'ease':
                        frame = firstOrLastFrame.frame;
                        break;
                    default:
                    case 'set':
                        var props = firstOrLastFrame.props;
                        for (key in props) {
                            if (hasProp.call(props, key)) {
                                value = _interpolateString(props[key].value);
                                if (key.indexOf('@') === 0) {
                                    element.setAttribute(key.substr(1), value);
                                } else {
                                    skrollr.setStyle(element, key, value);
                                }
                            }
                        }
                        continue;
                }
            } else {
                if (skrollable.edge !== 0) {
                    _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
                    skrollable.edge = 0;
                }
            }
            var keyFrameIndex = 0;
            for (; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
                if (frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
                    var left = frames[keyFrameIndex];
                    var right = frames[keyFrameIndex + 1];
                    for (key in left.props) {
                        if (hasProp.call(left.props, key)) {
                            var progress = (frame - left.frame) / (right.frame - left.frame);
                            progress = left.props[key].easing(progress);
                            value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);
                            value = _interpolateString(value);
                            if (key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    }
                    if (emitEvents) {
                        if (lastFrameIndex !== keyFrameIndex) {
                            if (_direction === 'down') {
                                _emitEvent(element, left.eventType, _direction);
                            } else {
                                _emitEvent(element, right.eventType, _direction);
                            }
                            skrollable.lastFrameIndex = keyFrameIndex;
                        }
                    }
                    break;
                }
            }
        }
    };
    var _render = function() {
        if (_requestReflow) {
            _requestReflow = false;
            _reflow();
        }
        var renderTop = _instance.getScrollTop();
        var afterAnimationCallback;
        var now = _now();
        var progress;
        if (_scrollAnimation) {
            if (now >= _scrollAnimation.endTime) {
                renderTop = _scrollAnimation.targetTop;
                afterAnimationCallback = _scrollAnimation.done;
                _scrollAnimation = undefined;
            } else {
                progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);
                renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
            }
            _instance.setScrollTop(renderTop, true);
        } else if (!_forceRender) {
            var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;
            if (smoothScrollingDiff) {
                _smoothScrolling = {
                    startTop: _lastTop,
                    topDiff: renderTop - _lastTop,
                    targetTop: renderTop,
                    startTime: _lastRenderCall,
                    endTime: _lastRenderCall + _smoothScrollingDuration
                };
            }
            if (now <= _smoothScrolling.endTime) {
                progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);
                renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
            }
        }
        if (_forceRender || _lastTop !== renderTop) {
            _direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);
            _forceRender = false;
            var listenerParams = {
                curTop: renderTop,
                lastTop: _lastTop,
                maxTop: _maxKeyFrame,
                direction: _direction
            };
            var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);
            if (continueRendering !== false) {
                _calcSteps(renderTop, _instance.getScrollTop());
                if (_isMobile && _skrollrBody) {
                    skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
                }
                _lastTop = renderTop;
                if (_listeners.render) {
                    _listeners.render.call(_instance, listenerParams);
                }
            }
            if (afterAnimationCallback) {
                afterAnimationCallback.call(_instance, false);
            }
        }
        _lastRenderCall = now;
    };
    var _parseProps = function(skrollable) {
        var keyFrameIndex = 0;
        var keyFramesLength = skrollable.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            var frame = skrollable.keyFrames[keyFrameIndex];
            var easing;
            var value;
            var prop;
            var props = {};
            var match;
            while ((match = rxPropValue.exec(frame.props)) !== null) {
                prop = match[1];
                value = match[2];
                easing = prop.match(rxPropEasing);
                if (easing !== null) {
                    prop = easing[1];
                    easing = easing[2];
                } else {
                    easing = DEFAULT_EASING;
                }
                value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];
                props[prop] = {
                    value: value,
                    easing: easings[easing]
                };
            }
            frame.props = props;
        }
    };
    var _parseProp = function(val) {
        var numbers = [];
        rxRGBAIntegerColor.lastIndex = 0;
        val = val.replace(rxRGBAIntegerColor, function(rgba) {
            return rgba.replace(rxNumericValue, function(n) {
                return n / 255 * 100 + '%';
            });
        });
        if (theDashedCSSPrefix) {
            rxGradient.lastIndex = 0;
            val = val.replace(rxGradient, function(s) {
                return theDashedCSSPrefix + s;
            });
        }
        val = val.replace(rxNumericValue, function(n) {
            numbers.push(+n);
            return '{?}';
        });
        numbers.unshift(val);
        return numbers;
    };
    var _fillProps = function(sk) {
        var propList = {};
        var keyFrameIndex;
        var keyFramesLength;
        keyFrameIndex = 0;
        keyFramesLength = sk.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
        propList = {};
        keyFrameIndex = sk.keyFrames.length - 1;
        for (; keyFrameIndex >= 0; keyFrameIndex--) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
    };
    var _fillPropForFrame = function(frame, propList) {
        var key;
        for (key in propList) {
            if (!hasProp.call(frame.props, key)) {
                frame.props[key] = propList[key];
            }
        }
        for (key in frame.props) {
            propList[key] = frame.props[key];
        }
    };
    var _calcInterpolation = function(val1, val2, progress) {
        var valueIndex;
        var val1Length = val1.length;
        if (val1Length !== val2.length) {
            throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
        }
        var interpolated = [val1[0]];
        valueIndex = 1;
        for (; valueIndex < val1Length; valueIndex++) {
            interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
        }
        return interpolated;
    };
    var _interpolateString = function(val) {
        var valueIndex = 1;
        rxInterpolateString.lastIndex = 0;
        return val[0].replace(rxInterpolateString, function() {
            return val[valueIndex++];
        });
    };
    var _reset = function(elements, undo) {
        elements = [].concat(elements);
        var skrollable;
        var element;
        var elementsIndex = 0;
        var elementsLength = elements.length;
        for (; elementsIndex < elementsLength; elementsIndex++) {
            element = elements[elementsIndex];
            skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];
            if (!skrollable) {
                continue;
            }
            if (undo) {
                element.style.cssText = skrollable.dirtyStyleAttr;
                _updateClass(element, skrollable.dirtyClassAttr);
            } else {
                skrollable.dirtyStyleAttr = element.style.cssText;
                skrollable.dirtyClassAttr = _getClass(element);
                element.style.cssText = skrollable.styleAttr;
                _updateClass(element, skrollable.classAttr);
            }
        }
    };
    var _detect3DTransforms = function() {
        _translateZ = 'translateZ(0)';
        skrollr.setStyle(_skrollrBody, 'transform', _translateZ);
        var computedStyle = getStyle(_skrollrBody);
        var computedTransform = computedStyle.getPropertyValue('transform');
        var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
        var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');
        if (!has3D) {
            _translateZ = '';
        }
    };
    skrollr.setStyle = function(el, prop, val) {
        var style = el.style;
        prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');
        if (prop === 'zIndex') {
            if (isNaN(val)) {
                style[prop] = val;
            } else {
                style[prop] = '' + (val | 0);
            }
        } else if (prop === 'float') {
            style.styleFloat = style.cssFloat = val;
        } else {
            try {
                if (theCSSPrefix) {
                    style[theCSSPrefix + prop.slice(0, 1).toUpperCase() + prop.slice(1)] = val;
                }
                style[prop] = val;
            } catch (ignore) {}
        }
    };
    var _addEvent = skrollr.addEvent = function(element, names, callback) {
        var intermediate = function(e) {
            e = e || window.event;
            if (!e.target) {
                e.target = e.srcElement;
            }
            if (!e.preventDefault) {
                e.preventDefault = function() {
                    e.returnValue = false;
                    e.defaultPrevented = true;
                };
            }
            return callback.call(this, e);
        };
        names = names.split(' ');
        var name;
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            name = names[nameCounter];
            if (element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else {
                element.attachEvent('on' + name, intermediate);
            }
            _registeredEvents.push({
                element: element,
                name: name,
                listener: callback
            });
        }
    };
    var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
        names = names.split(' ');
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            if (element.removeEventListener) {
                element.removeEventListener(names[nameCounter], callback, false);
            } else {
                element.detachEvent('on' + names[nameCounter], callback);
            }
        }
    };
    var _removeAllEvents = function() {
        var eventData;
        var eventCounter = 0;
        var eventsLength = _registeredEvents.length;
        for (; eventCounter < eventsLength; eventCounter++) {
            eventData = _registeredEvents[eventCounter];
            _removeEvent(eventData.element, eventData.name, eventData.listener);
        }
        _registeredEvents = [];
    };
    var _emitEvent = function(element, name, direction) {
        if (_listeners.keyframe) {
            _listeners.keyframe.call(_instance, element, name, direction);
        }
    };
    var _reflow = function() {
        var pos = _instance.getScrollTop();
        _maxKeyFrame = 0;
        if (_forceHeight && !_isMobile) {
            body.style.height = '';
        }
        _updateDependentKeyFrames();
        if (_forceHeight && !_isMobile) {
            body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
        }
        if (_isMobile) {
            _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
        } else {
            _instance.setScrollTop(pos, true);
        }
        _forceRender = true;
    };
    var _processConstants = function() {
        var viewportHeight = documentElement.clientHeight;
        var copy = {};
        var prop;
        var value;
        for (prop in _constants) {
            value = _constants[prop];
            if (typeof value === 'function') {
                value = value.call(_instance);
            } else if ((/p$/).test(value)) {
                value = (value.slice(0, -1) / 100) * viewportHeight;
            }
            copy[prop] = value;
        }
        return copy;
    };
    var _getDocumentHeight = function() {
        var skrollrBodyHeight = 0;
        var bodyHeight;
        if (_skrollrBody) {
            skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
        }
        bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);
        return bodyHeight - documentElement.clientHeight;
    };
    var _getClass = function(element) {
        var prop = 'className';
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }
        return element[prop];
    };
    var _updateClass = function(element, add, remove) {
        var prop = 'className';
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }
        if (remove === undefined) {
            element[prop] = add;
            return;
        }
        var val = element[prop];
        var classRemoveIndex = 0;
        var removeLength = remove.length;
        for (; classRemoveIndex < removeLength; classRemoveIndex++) {
            val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
        }
        val = _trim(val);
        var classAddIndex = 0;
        var addLength = add.length;
        for (; classAddIndex < addLength; classAddIndex++) {
            if (_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
                val += ' ' + add[classAddIndex];
            }
        }
        element[prop] = _trim(val);
    };
    var _trim = function(a) {
        return a.replace(rxTrim, '');
    };
    var _untrim = function(a) {
        return ' ' + a + ' ';
    };
    var _now = Date.now || function() {
        return +new Date();
    };
    var _keyFrameComparator = function(a, b) {
        return a.frame - b.frame;
    };
    var _instance;
    var _skrollables;
    var _skrollrBody;
    var _listeners;
    var _forceHeight;
    var _maxKeyFrame = 0;
    var _scale = 1;
    var _constants;
    var _mobileDeceleration;
    var _direction = 'down';
    var _lastTop = -1;
    var _lastRenderCall = _now();
    var _lastViewportWidth = 0;
    var _lastViewportHeight = 0;
    var _requestReflow = false;
    var _scrollAnimation;
    var _smoothScrollingEnabled;
    var _smoothScrollingDuration;
    var _smoothScrolling;
    var _forceRender;
    var _skrollableIdCounter = 0;
    var _edgeStrategy;
    var _isMobile = false;
    var _mobileOffset = 0;
    var _translateZ;
    var _registeredEvents = [];
    var _animFrame;
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return skrollr;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = skrollr;
    } else {
        window.skrollr = skrollr;
    }
}(window, document));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
}));
(function($) {
    'use strict';
    $(window).on("load", function() {
        $('body').imagesLoaded({}, function() {
            var preload = $('.preloader');
            preload.addClass('loaded');
            preload.find('.centrize').fadeOut();
            initCursor();
            $('.elementor-widget-text-editor').attr('data-animate', 'active');
            $('.scroll-animate').scrolla({
                once: true,
                mobile: true
            });
        });
    });
    $(function() {
        'use strict';
        setHeightFullSection();
        $(window).resize(function() {
            setHeightFullSection();
        });
        $('.js-parallax').jarallax({
            speed: 0.65,
            type: 'scroll'
        });
        if ($('.section-parallax-1').length) {
            $('.section-parallax-1').prepend('<div class="pbefore"></div><div class="pafter"></div>');
            $('.section-parallax-1 .pbefore').jarallax({
                speed: 0.85,
            });
            $('.section-parallax-1 .pafter').jarallax({
                speed: 0.85,
            });
        }
        if ($('.section-parallax-2').length) {
            $('.section-parallax-2').prepend('<div class="pbefore"></div><div class="pafter"></div>');
            $('.section-parallax-2 .pbefore').jarallax({
                speed: 0.85,
            });
            $('.section-parallax-2 .pafter').jarallax({
                speed: 0.85,
            });
        }
        if ($('.section-parallax-3').length) {
            $('.section-parallax-3').prepend('<div class="pbefore"></div><div class="pafter"></div>');
            $('.section-parallax-3 .pbefore').jarallax({
                speed: 0.85,
            });
            $('.section-parallax-3 .pafter').jarallax({
                speed: 0.85,
            });
        }
        if ($('.section-parallax-4').length) {
            $('.section-parallax-4').prepend('<div class="pbefore"></div><div class="pafter"></div>');
            $('.section-parallax-4 .pbefore').jarallax({
                speed: 0.85,
            });
            $('.section-parallax-4 .pafter').jarallax({
                speed: 0.85,
            });
        }
        if ($('.section-parallax-5').length) {
            $('.section-parallax-5').prepend('<div class="pafter"></div>');
            $('.section-parallax-5 .pbefore').jarallax({
                speed: 0.85,
            });
            $('.section-parallax-5 .pafter').jarallax({
                speed: 0.85,
            });
        }
        Splitting();
        if ($(window).width() > 1200) {
            var s = skrollr.init();
        }
        if ($('.header').length) {
            $(window).on('scroll', function(event) {
                if ($(window).scrollTop() > 100) {
                    $('.header').addClass('sticky');
                    if (this.oldScroll < this.scrollY) {
                        $('.header').addClass('animate-in');
                    } else {
                        if ($(window).scrollTop() < 200) {
                            $('.header').addClass('animate-out');
                        }
                    }
                } else {
                    $('.header').removeClass('sticky');
                    $('.header').removeClass('animate-in');
                    $('.header').removeClass('animate-out');
                }
                this.oldScroll = this.scrollY;
            });
        }

        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
                return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
        }
        var skin = $.cookie('skin');
        if (skin == 'dark') {
            $('body').removeClass('light-skin');
        }
        if (skin == 'light') {
            $('body').addClass('light-skin');
        }
        if ($('body').hasClass('light-skin')) {
            $('.header .switcher-btn').addClass('active');
        }
        $('.header').on('click', '.switcher-btn', function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('body').removeClass('light-skin');
                $.cookie('skin', 'dark', {
                    expires: 7,
                    path: '/'
                });
            } else {
                $(this).addClass('active');
                $('body').addClass('light-skin');
                $.cookie('skin', 'light', {
                    expires: 7,
                    path: '/'
                });
            }
            return false;
        });
        $('.header').on('click', '.menu-btn', function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('no-touch');
                $('body').removeClass('no-scroll');
                $('.menu-full-overlay').removeClass('is-open');
                $('.menu-full-overlay').removeClass('has-scroll');
                $('.menu-full-overlay').removeClass('animate-active');
                setTimeout(function() {
                    $('.menu-full-overlay').removeClass('visible');
                    $('.menu-btn').removeClass('no-touch');
                }, 1000);
            } else {
                $(this).addClass('active no-touch');
                var height = $(window).height();
                $('.menu-full-overlay').css({
                    'height': height
                });
                $('body').addClass('no-scroll');
                $('.menu-full-overlay').addClass('is-open visible');
                setTimeout(function() {
                    $('.menu-full-overlay').addClass('has-scroll animate-active');
                    $('.menu-btn').removeClass('no-touch');
                }, 1000);
            }
            return false;
        });
        $('.menu-full').on('click', 'a', function() {
            if (!$(this).parent().hasClass('has-children')) {
                $('.header .menu-btn.active').trigger('click');
            }
        });
        $('.menu-full .has-children > a').append('<i class="fas fa-chevron-down"></i>');
        $('.menu-full').on('click', '.has-children > a', function() {
            if ($(this).closest('li').hasClass('opened')) {
                $(this).closest('li').removeClass('opened');
                $(this).closest('li').addClass('closed');
                $(this).closest('li').find('> ul').slideUp();
            } else {
                $(this).closest('ul').find('> li').removeClass('closed').removeClass('opened');
                $(this).closest('ul').find('> li').find('> ul').slideUp();
                $(this).closest('li').addClass('opened');
                $(this).closest('li').find('> ul').slideDown();
            }
            return false;
        });
        var swiperTestimonials = new Swiper('.js-testimonials', {
            slidesPerView: 1,
            spaceBetween: 50,
            loop: false,
            speed: 1000,
            pagination: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        var $container = $('.works-items');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.works-col',
                percentPosition: true,
            });
        });
        var $gal_container = $('.m-gallery');
        $gal_container.imagesLoaded(function() {
            $gal_container.isotope({
                itemSelector: '.col-lg-6',
                percentPosition: true,
            });
        });
        $('.filter-links').on('click', 'a', function() {
            var filterValue = $(this).attr('data-href');
            $container.isotope({
                filter: filterValue
            });
            $('.filter-links a').removeClass('active');
            $(this).addClass('active');
            if (!$(filterValue).find('.scroll-animate').hasClass('animate__active')) {
                $(filterValue).find('.scroll-animate').addClass('animate__active');
            }
            return false;
        });
        $('.has-popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube_short: {
                        index: 'youtu.be/',
                        id: 'youtu.be/',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'mfp-fade',
            callbacks: {
                markupParse: function(template, values, item) {
                    template.find('iframe').attr('allow', 'autoplay');
                }
            }
        });
        $('.has-popup-audio').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'mfp-fade'
        });
        $('.tab-menu').on('click', '.tab-btn', function() {
            var tab_bl = $(this).attr('href');
            $(this).closest('.tab-menu').find('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $(this).closest('.tabs').find('> .tab-item').hide();
            $(tab_bl).fadeIn();
            return false;
        });
        $('.collapse-item').on('click', '.collapse-btn', function() {
            if ($(this).closest('.collapse-item').hasClass('active')) {
                $(this).closest('.collapse-item').find('.collapse-content').slideUp();
                $(this).closest('.collapse-item').removeClass('active');
                $(this).removeClass('active');
            } else {
                $(this).closest('.collapse-item').find('.collapse-content').slideDown();
                $(this).closest('.collapse-item').addClass('active');
                $(this).addClass('active');
            }
        });
        $('.m-video-large .video').on('click', '.play, .img', function() {
            $(this).closest('.video').addClass('active');
            var iframe = $(this).closest('.video').find('.js-video-iframe');
            largeVideoPlay(iframe);
            return false;
        });

        function largeVideoPlay(iframe) {
            var src = iframe.data('src');
            iframe.attr('src', src);
        }
        $('.header .cart-btn .cart-icon').on('click', function() {
            if ($(this).closest('.cart-btn').hasClass('opened')) {
                $(this).closest('.cart-btn').removeClass('opened');
                $(this).closest('.cart-btn').find('.cart-widget').hide();
            } else {
                $(this).closest('.cart-btn').addClass('opened');
                $(this).closest('.cart-btn').find('.cart-widget').fadeIn();
            }
            return false;
        });
    });

    function initCursor() {
        var mouseX = window.innerWidth / 2,
            mouseY = window.innerHeight / 2;
        var cursor = {
            el: $('.cursor'),
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: 30,
            h: 30,
            update: function() {
                var l = this.x - this.w / 2;
                var t = this.y - this.h / 2;
                this.el.css({
                    'transform': 'translate3d(' + l + 'px,' + t + 'px, 0)'
                });
            }
        }
        $(window).mousemove(function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        $('a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk').hover(function() {
            $('.cursor').addClass("cursor-zoom");
        }, function() {
            $('.cursor').removeClass("cursor-zoom");
        });
        setInterval(move, 1000 / 60);

        function move() {
            cursor.x = lerp(cursor.x, mouseX, 0.1);
            cursor.y = lerp(cursor.y, mouseY, 0.1);
            cursor.update()
        }

        function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end
        }
    }

    function setHeightFullSection() {
        var width = $(window).width();
        var height = $(window).height();
        $('.error-page, .menu-full-overlay, .preloader .centrize').css({
            'height': height
        });
    }
})(jQuery);
/*!
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @joshuatuscan
 Site: http://www.rrssb.ml
*/
+
(function(window, $, undefined) {
    'use strict';
    $.fn.rrssb = function(options) {
        var settings = $.extend({
            description: undefined,
            emailAddress: undefined,
            emailBody: undefined,
            emailSubject: undefined,
            image: undefined,
            title: undefined,
            url: undefined
        }, options);
        settings.emailSubject = settings.emailSubject || settings.title;
        settings.emailBody = settings.emailBody || ((settings.description ? settings.description : '') +
            (settings.url ? '\n\n' + settings.url : ''));
        for (var key in settings) {
            if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
                settings[key] = encodeString(settings[key]);
            }
        };
        if (settings.url !== undefined) {
            $(this).find('.share-btn-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
            $(this).find('.share-btn-tumblr').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-linkedin').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
            $(this).find('.share-btn-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
            $(this).find('.share-btn-reddit').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
            $(this).find('.share-btn-googleplus').attr('href', 'https://plus.google.com/share?url=' + settings.url);
            $(this).find('.share-btn-pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-print').attr('href', 'javascript:window.print()');
            $(this).find('.share-btn-whatsapp').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
        }
        if (settings.emailAddress !== undefined || settings.emailSubject) {
            $(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
        }
    };
    var encodeString = function(string) {
        if (string !== undefined && string !== null) {
            if (string.match(/%[0-9a-f]{2}/i) !== null) {
                string = decodeURIComponent(string);
                encodeString(string);
            } else {
                return encodeURIComponent(string);
            }
        }
    };
    var rrssbInit = function() {
        $('.share-btn').each(function(index) {
            $(this).addClass('share-btn-' + (index + 1));
        });
    };
    var popupCenter = function(url, title, w, h) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 3) - (h / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        if (newWindow && newWindow.focus) {
            newWindow.focus();
        }
    };
    $(document).ready(function() {
        try {
            $(document).on('click', '.share-btn', {}, function popUp(e) {
                var self = $(this);
                popupCenter(self.attr('href'), self.attr('title'), 580, 470);
                e.preventDefault();
            });
        } catch (e) {}
        rrssbInit();
    });
    window.rrssbInit = rrssbInit;
})(window, jQuery);
(function($) {
    "use strict";
    var count = 2;
    var total = ajax_portfolio_infinite_scroll_data.max_num;
    var flag = 1;
    var card_wrap = $('.works-box');
    var works = $('.works-items');
    $('.works-box .load-more a').on('click', function() {
        if (count > total) {
            $(this).closest('.load-more').hide();
        } else {
            if (flag == 1) {
                loadContent(count);
                if (count + 1 > total) {
                    $(this).closest('.load-more').fadeOut(500);
                }
            }
        }
        if (flag == 1) {
            flag = 0;
            count++;
        }
        return false;
    });

    function loadContent(pageNumber) {
        console.log(ajax_portfolio_infinite_scroll_data);
        $.ajax({
            url: ajax_portfolio_infinite_scroll_data.url,
            type: 'POST',
            data: "action=infinite_scroll_el&page_no=" + pageNumber + '&post_type=portfolio' + '&page_id=' + ajax_portfolio_infinite_scroll_data.page_id + '&order_by=' + ajax_portfolio_infinite_scroll_data.order_by + '&order=' + ajax_portfolio_infinite_scroll_data.order + '&per_page=' + ajax_portfolio_infinite_scroll_data.per_page + '&source=' + ajax_portfolio_infinite_scroll_data.source + '&temp=' + ajax_portfolio_infinite_scroll_data.temp + '&cat_ids=' + ajax_portfolio_infinite_scroll_data.cat_ids + '&ajax_nonce=' + ajax_portfolio_infinite_scroll_data.ajax_nonce,
            success: function(html) {
                var $html = $(html);
                var $container = works;
                $html.imagesLoaded(function() {
                    $container.append($html);
                    $container.isotope('appended', $html);
                    $container.isotope('layout');
                    updateAnim();
                    updateMagnificPopups();
                });
                flag = 1;
            }
        });
        return false;
    }

    function updateMagnificPopups() {}

    function updateAnim() {
        $('.works-item .scroll-animate').scrolla({
            once: true,
            mobile: true
        });
    }
})(jQuery);
/*! elementor - v3.12.1 - 02-04-2023 */
(() => {
    "use strict";
    var e, r, _, t, a, i = {},
        n = {};

    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var _ = n[e] = {
            exports: {}
        };
        return i[e](_, _.exports, __webpack_require__), _.exports
    }
    __webpack_require__.m = i, e = [], __webpack_require__.O = (r, _, t, a) => {
        if (!_) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [_, t, a] = e[u], n = !0, o = 0; o < _.length; o++)(!1 & a || i >= a) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[o]))) ? _.splice(o--, 1) : (n = !1, a < i && (i = a));
                if (n) {
                    e.splice(u--, 1);
                    var c = t();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [_, t, a]
    }, _ = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = this(e)), 8 & t) return e;
        if ("object" == typeof e && e) {
            if (4 & t && e.__esModule) return e;
            if (16 & t && "function" == typeof e.then) return e
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var i = {};
        r = r || [null, _({}), _([]), _(_)];
        for (var n = 2 & t && e;
            "object" == typeof n && !~r.indexOf(n); n = _(n)) Object.getOwnPropertyNames(n).forEach((r => i[r] = () => e[r]));
        return i.default = () => e, __webpack_require__.d(a, i), a
    }, __webpack_require__.d = (e, r) => {
        for (var _ in r) __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
            enumerable: !0,
            get: r[_]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r), r)), [])), __webpack_require__.u = e => 723 === e ? "lightbox.10bc81bc33e5bd8f8073.bundle.min.js" : 48 === e ? "text-path.b50b3e74488a4e302613.bundle.min.js" : 209 === e ? "accordion.8799675460c73eb48972.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js" : 181 === e ? "toggle.31881477c45ff5cf9d4d.bundle.min.js" : 791 === e ? "video.d86bfd0676264945e968.bundle.min.js" : 268 === e ? "image-carousel.624de4dfcf054f3ddaa7.bundle.min.js" : 357 === e ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : 413 === e ? "container.0fe1d3abe4a4fd76f033.bundle.min.js" : void 0, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, a = "elementor:", __webpack_require__.l = (e, r, _, i) => {
        if (t[e]) t[e].push(r);
        else {
            var n, o;
            if (void 0 !== _)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var b = c[u];
                    if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + _) {
                        n = b;
                        break
                    }
                }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc), n.setAttribute("data-webpack", a + _), n.src = e), t[e] = [r];
            var onScriptComplete = (r, _) => {
                    n.onerror = n.onload = null, clearTimeout(p);
                    var a = t[e];
                    if (delete t[e], n.parentNode && n.parentNode.removeChild(n), a && a.forEach((e => e(_))), r) return r(_)
                },
                p = setTimeout(onScriptComplete.bind(null, void 0, {
                    type: "timeout",
                    target: n
                }), 12e4);
            n.onerror = onScriptComplete.bind(null, n.onerror), n.onload = onScriptComplete.bind(null, n.onload), o && document.head.appendChild(n)
        }
    }, __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var _ = r.getElementsByTagName("script");
            _.length && (e = _[_.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
    })(), (() => {
        var e = {
            162: 0
        };
        __webpack_require__.f.j = (r, _) => {
            var t = __webpack_require__.o(e, r) ? e[r] : void 0;
            if (0 !== t)
                if (t) _.push(t[2]);
                else if (162 != r) {
                var a = new Promise(((_, a) => t = e[r] = [_, a]));
                _.push(t[2] = a);
                var i = __webpack_require__.p + __webpack_require__.u(r),
                    n = new Error;
                __webpack_require__.l(i, (_ => {
                    if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0), t)) {
                        var a = _ && ("load" === _.type ? "missing" : _.type),
                            i = _ && _.target && _.target.src;
                        n.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")", n.name = "ChunkLoadError", n.type = a, n.request = i, t[1](n)
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, __webpack_require__.O.j = r => 0 === e[r];
        var webpackJsonpCallback = (r, _) => {
                var t, a, [i, n, o] = _,
                    c = 0;
                if (i.some((r => 0 !== e[r]))) {
                    for (t in n) __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                    if (o) var u = o(__webpack_require__)
                }
                for (r && r(_); c < i.length; c++) a = i[c], __webpack_require__.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return __webpack_require__.O(u)
            },
            r = self.webpackChunkelementor = self.webpackChunkelementor || [];
        r.forEach(webpackJsonpCallback.bind(null, 0)), r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
    })()
})();
/*! elementor - v3.12.1 - 02-04-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
    [354], {
        381: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = (e, t) => {
                t = Array.isArray(t) ? t : [t];
                for (const n of t)
                    if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0;
                return !1
            }
        },
        8135: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        selectors: {
                            elements: ".elementor-element",
                            nestedDocumentElements: ".elementor .elementor-element"
                        },
                        classes: {
                            editMode: "elementor-edit-mode"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                    }
                }
                getDocumentSettings(e) {
                    let t;
                    if (this.isEdit) {
                        t = {};
                        const e = elementor.settings.page.model;
                        jQuery.each(e.getActiveControls(), (n => {
                            t[n] = e.attributes[n]
                        }))
                    } else t = this.$element.data("elementor-settings") || {};
                    return this.getItems(t, e)
                }
                runElementsHandlers() {
                    this.elements.$elements.each(((e, t) => setTimeout((() => elementorFrontend.elementsHandler.runReadyTrigger(t)))))
                }
                onInit() {
                    this.$element = this.getSettings("$element"), super.onInit(), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.on("document:loaded", (() => {
                        elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                    })) : this.runElementsHandlers()
                }
                onSettingsChange() {}
            }
            t.default = _default
        },
        2821: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(3090));
            class SwiperHandlerBase extends i.default {
                getInitialSlide() {
                    const e = this.getEditSettings();
                    return e.activeItemIndex ? e.activeItemIndex - 1 : 0
                }
                getSlidesCount() {
                    return this.elements.$slides.length
                }
                togglePauseOnHover(e) {
                    e ? this.elements.$swiperContainer.on({
                        mouseenter: () => {
                            this.swiper.autoplay.stop()
                        },
                        mouseleave: () => {
                            this.swiper.autoplay.start()
                        }
                    }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
                }
                handleKenBurns() {
                    const e = this.getSettings();
                    this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive), this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(), this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground), this.$activeImageBg.addClass(e.classes.kenBurnsActive)
                }
            }
            t.default = SwiperHandlerBase
        },
        3090: e => {
            "use strict";
            e.exports = elementorModules.ViewModule.extend({
                $element: null,
                editorListeners: null,
                onElementChange: null,
                onEditSettingsChange: null,
                onPageSettingsChange: null,
                isEdit: null,
                __construct(e) {
                    this.isActive(e) && (this.$element = e.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners())
                },
                isActive: () => !0,
                isElementInTheCurrentDocument() {
                    return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
                },
                findElement(e) {
                    var t = this.$element;
                    return t.find(e).filter((function() {
                        return jQuery(this).parent().closest(".elementor-element").is(t)
                    }))
                },
                getUniqueHandlerID(e, t) {
                    return e || (e = this.getModelCID()), t || (t = this.$element), e + t.attr("data-element_type") + this.getConstructorID()
                },
                initEditorListeners() {
                    var e = this;
                    if (e.editorListeners = [{
                            event: "element:destroy",
                            to: elementor.channels.data,
                            callback(t) {
                                t.cid === e.getModelCID() && e.onDestroy()
                            }
                        }], e.onElementChange) {
                        const t = e.getWidgetType() || e.getElementType();
                        let n = "change";
                        "global" !== t && (n += ":" + t), e.editorListeners.push({
                            event: n,
                            to: elementor.channels.editor,
                            callback(t, n) {
                                e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                            }
                        })
                    }
                    e.onEditSettingsChange && e.editorListeners.push({
                        event: "change:editSettings",
                        to: elementor.channels.editor,
                        callback(t, n) {
                            if (n.model.cid !== e.getModelCID()) return;
                            const r = Object.keys(t.changed)[0];
                            e.onEditSettingsChange(r, t.changed[r])
                        }
                    }), ["page"].forEach((function(t) {
                        var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                        e[n] && e.editorListeners.push({
                            event: "change",
                            to: elementor.settings[t].model,
                            callback(t) {
                                e[n](t.changed)
                            }
                        })
                    }))
                },
                getEditorListeners() {
                    return this.editorListeners || this.initEditorListeners(), this.editorListeners
                },
                addEditorListeners() {
                    var e = this.getUniqueHandlerID();
                    this.getEditorListeners().forEach((function(t) {
                        elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                    }))
                },
                removeEditorListeners() {
                    var e = this.getUniqueHandlerID();
                    this.getEditorListeners().forEach((function(t) {
                        elementorFrontend.removeListeners(e, t.event, null, t.to)
                    }))
                },
                getElementType() {
                    return this.$element.data("element_type")
                },
                getWidgetType() {
                    const e = this.$element.data("widget_type");
                    if (e) return e.split(".")[0]
                },
                getID() {
                    return this.$element.data("id")
                },
                getModelCID() {
                    return this.$element.data("model-cid")
                },
                getElementSettings(e) {
                    let t = {};
                    const n = this.getModelCID();
                    if (this.isEdit && n) {
                        const e = elementorFrontend.config.elements.data[n],
                            r = e.attributes;
                        let i = r.widgetType || r.elType;
                        r.isInner && (i = "inner-" + i);
                        let o = elementorFrontend.config.elements.keys[i];
                        o || (o = elementorFrontend.config.elements.keys[i] = [], jQuery.each(e.controls, ((e, t) => {
                            t.frontend_available && o.push(e)
                        }))), jQuery.each(e.getActiveControls(), (function(e) {
                            if (-1 !== o.indexOf(e)) {
                                let n = r[e];
                                n.toJSON && (n = n.toJSON()), t[e] = n
                            }
                        }))
                    } else t = this.$element.data("settings") || {};
                    return this.getItems(t, e)
                },
                getEditSettings(e) {
                    var t = {};
                    return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(t, e)
                },
                getCurrentDeviceSetting(e) {
                    return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
                },
                onInit() {
                    this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                },
                onDestroy() {
                    this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
                }
            })
        },
        2263: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(3090));
            class StretchedElement extends i.default {
                getStretchedClass() {
                    return "e-stretched"
                }
                getStretchSettingName() {
                    return "stretch_element"
                }
                getStretchActiveValue() {
                    return "yes"
                }
                bindEvents() {
                    const e = this.getUniqueHandlerID();
                    elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element), elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this), elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
                }
                unbindEvents() {
                    elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch), elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
                }
                isActive(e) {
                    return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
                }
                getStretchElementForConfig() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return e ? this.$element.find(e) : this.$element
                }
                getStretchElementConfig() {
                    return {
                        element: this.getStretchElementForConfig(),
                        selectors: {
                            container: this.getStretchContainer()
                        },
                        considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                    }
                }
                initStretch() {
                    this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
                }
                getStretchContainer() {
                    return elementorFrontend.getKitSettings("stretched_section_container") || window
                }
                isStretchSettingEnabled() {
                    return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
                }
                stretch() {
                    this.isStretchSettingEnabled() && this.stretchElement.stretch()
                }
                onInit() {
                    this.isActive(this.getSettings()) && (this.initStretch(), super.onInit(...arguments), this.stretch())
                }
                onElementChange(e) {
                    this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
                }
                onKitChangeStretchContainerChange() {
                    this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch()
                }
            }
            t.default = StretchedElement
        },
        6412: (e, t, n) => {
            "use strict";
            var r = n(3203),
                i = r(n(5955)),
                o = r(n(8135)),
                s = r(n(5658)),
                a = r(n(2263)),
                c = r(n(3090)),
                l = r(n(2821)),
                u = r(n(7323));
            i.default.frontend = {
                Document: o.default,
                tools: {
                    StretchElement: s.default
                },
                handlers: {
                    Base: c.default,
                    StretchedElement: a.default,
                    SwiperBase: l.default,
                    NestedTabs: u.default
                }
            }
        },
        5658: e => {
            "use strict";
            e.exports = elementorModules.ViewModule.extend({
                getDefaultSettings: () => ({
                    element: null,
                    direction: elementorFrontend.config.is_rtl ? "right" : "left",
                    selectors: {
                        container: window
                    },
                    considerScrollbar: !1
                }),
                getDefaultElements() {
                    return {
                        $element: jQuery(this.getSettings("element"))
                    }
                },
                stretch() {
                    const e = this.getSettings();
                    let t;
                    try {
                        t = jQuery(e.selectors.container)
                    } catch (e) {}
                    t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
                    var n = this.elements.$element,
                        r = t.innerWidth(),
                        i = n.offset().left,
                        o = "fixed" === n.css("position"),
                        s = o ? 0 : i,
                        a = window === t[0];
                    if (!a) {
                        var c = t.offset().left;
                        o && (s = c), i > c && (s = i - c)
                    }
                    if (e.considerScrollbar && a) {
                        s -= window.innerWidth - r
                    }
                    o || (elementorFrontend.config.is_rtl && (s = r - (n.outerWidth() + s)), s = -s), e.margin && (s += e.margin);
                    var l = {};
                    let u = r;
                    e.margin && (u -= 2 * e.margin), l.width = u + "px", l[e.direction] = s + "px", n.css(l)
                },
                reset() {
                    var e = {
                        width: ""
                    };
                    e[this.getSettings("direction")] = "", this.elements.$element.css(e)
                }
            })
        },
        2618: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(740);
            var i = r(n(7597)),
                o = r(n(381));
            class ArgsObject extends i.default {
                static getInstanceType() {
                    return "ArgsObject"
                }
                constructor(e) {
                    super(), this.args = e
                }
                requireArgument(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                    if (!Object.prototype.hasOwnProperty.call(t, e)) throw Error(`${e} is required.`)
                }
                requireArgumentType(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), typeof n[e] !== t) throw Error(`${e} invalid type: ${t}.`)
                }
                requireArgumentInstance(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), !(n[e] instanceof t || (0, o.default)(n[e], t))) throw Error(`${e} invalid instance.`)
                }
                requireArgumentConstructor(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                    if (this.requireArgument(e, n), n[e].constructor.toString() !== t.prototype.constructor.toString()) throw Error(`${e} invalid constructor type.`)
                }
            }
            t.default = ArgsObject
        },
        869: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.ForceMethodImplementation = void 0, n(740);
            class ForceMethodImplementation extends Error {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`, t), Object.keys(t).length && console.error(t), Error.captureStackTrace(this, ForceMethodImplementation)
                }
            }
            t.ForceMethodImplementation = ForceMethodImplementation;
            t.default = e => {
                const t = Error().stack.split("\n")[2].trim(),
                    n = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
                    r = {};
                if (r.functionName = n, r.fullName = n, r.functionName.includes(".")) {
                    const e = r.functionName.split(".");
                    r.className = e[0], r.functionName = e[1]
                } else r.isStatic = !0;
                throw new ForceMethodImplementation(r, e)
            }
        },
        7597: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class InstanceType {
                static[Symbol.hasInstance](e) {
                    let t = super[Symbol.hasInstance](e);
                    if (e && !e.constructor.getInstanceType) return t;
                    if (e && (e.instanceTypes || (e.instanceTypes = []), t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0), t)) {
                        const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType(); - 1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                    }
                    return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())), t
                }
                static getInstanceType() {
                    elementorModules.ForceMethodImplementation()
                }
                constructor() {
                    let e = new.target;
                    const t = [];
                    for (; e.__proto__ && e.__proto__.name;) t.push(e.__proto__), e = e.__proto__;
                    t.reverse().forEach((e => this instanceof e))
                }
            }
            t.default = InstanceType
        },
        1192: (e, t, n) => {
            "use strict";
            n(740);
            const Module = function() {
                const e = jQuery,
                    t = arguments,
                    n = this,
                    r = {};
                let i;
                this.getItems = function(e, t) {
                        if (t) {
                            const n = t.split("."),
                                r = n.splice(0, 1);
                            if (!n.length) return e[r];
                            if (!e[r]) return;
                            return this.getItems(e[r], n.join("."))
                        }
                        return e
                    }, this.getSettings = function(e) {
                        return this.getItems(i, e)
                    }, this.setSettings = function(t, r, o) {
                        if (o || (o = i), "object" == typeof t) return e.extend(o, t), n;
                        const s = t.split("."),
                            a = s.splice(0, 1);
                        return s.length ? (o[a] || (o[a] = {}), n.setSettings(s.join("."), r, o[a])) : (o[a] = r, n)
                    }, this.getErrorMessage = function(e, t) {
                        let n;
                        if ("forceMethodImplementation" === e) n = `The method '${t}' must to be implemented in the inheritor child.`;
                        else n = "An error occurs";
                        return n
                    }, this.forceMethodImplementation = function(e) {
                        throw new Error(this.getErrorMessage("forceMethodImplementation", e))
                    }, this.on = function(t, i) {
                        if ("object" == typeof t) return e.each(t, (function(e) {
                            n.on(e, this)
                        })), n;
                        return t.split(" ").forEach((function(e) {
                            r[e] || (r[e] = []), r[e].push(i)
                        })), n
                    }, this.off = function(e, t) {
                        if (!r[e]) return n;
                        if (!t) return delete r[e], n;
                        const i = r[e].indexOf(t);
                        return -1 !== i && (delete r[e][i], r[e] = r[e].filter((e => e))), n
                    }, this.trigger = function(t) {
                        const i = "on" + t[0].toUpperCase() + t.slice(1),
                            o = Array.prototype.slice.call(arguments, 1);
                        n[i] && n[i].apply(n, o);
                        const s = r[t];
                        return s ? (e.each(s, (function(e, t) {
                            t.apply(n, o)
                        })), n) : n
                    }, n.__construct.apply(n, t), e.each(n, (function(e) {
                        const t = n[e];
                        "function" == typeof t && (n[e] = function() {
                            return t.apply(n, arguments)
                        })
                    })),
                    function() {
                        i = n.getDefaultSettings();
                        const r = t[0];
                        r && e.extend(!0, i, r)
                    }(), n.trigger("init")
            };
            Module.prototype.__construct = function() {}, Module.prototype.getDefaultSettings = function() {
                return {}
            }, Module.prototype.getConstructorID = function() {
                return this.constructor.name
            }, Module.extend = function(e) {
                const t = jQuery,
                    n = this,
                    child = function() {
                        return n.apply(this, arguments)
                    };
                return t.extend(child, n), (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child, child.__super__ = n.prototype, child
            }, e.exports = Module
        },
        6516: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(2640)).default.extend({
                getDefaultSettings: () => ({
                    container: null,
                    items: null,
                    columnsCount: 3,
                    verticalSpaceBetween: 30
                }),
                getDefaultElements() {
                    return {
                        $container: jQuery(this.getSettings("container")),
                        $items: jQuery(this.getSettings("items"))
                    }
                },
                run() {
                    var e = [],
                        t = this.elements.$container.position().top,
                        n = this.getSettings(),
                        r = n.columnsCount;
                    t += parseInt(this.elements.$container.css("margin-top"), 10), this.elements.$items.each((function(i) {
                        var o = Math.floor(i / r),
                            s = jQuery(this),
                            a = s[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                        if (o) {
                            var c = s.position(),
                                l = i % r,
                                u = c.top - t - e[l];
                            u -= parseInt(s.css("margin-top"), 10), u *= -1, s.css("margin-top", u + "px"), e[l] += a
                        } else e.push(a)
                    }))
                }
            });
            t.default = i
        },
        400: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Scroll {
                static scrollObserver(e) {
                    let t = 0;
                    const n = {
                        root: e.root || null,
                        rootMargin: e.offset || "0px",
                        threshold: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            const t = [];
                            if (e > 0 && e <= 100) {
                                const n = 100 / e;
                                for (let e = 0; e <= 100; e += n) t.push(e / 100)
                            } else t.push(0);
                            return t
                        }(e.sensitivity)
                    };
                    return new IntersectionObserver((function handleIntersect(n) {
                        const r = n[0].boundingClientRect.y,
                            i = n[0].isIntersecting,
                            o = r < t ? "down" : "up",
                            s = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                        e.callback({
                            sensitivity: e.sensitivity,
                            isInViewport: i,
                            scrollPercentage: s,
                            intersectionScrollDirection: o
                        }), t = r
                    }), n)
                }
                static getElementViewportPercentage(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = e[0].getBoundingClientRect(),
                        r = t.start || 0,
                        i = t.end || 0,
                        o = window.innerHeight * r / 100,
                        s = window.innerHeight * i / 100,
                        a = n.top - window.innerHeight,
                        c = 0 - a + o,
                        l = n.top + o + e.height() - a + s,
                        u = Math.max(0, Math.min(c / l, 1));
                    return parseFloat((100 * u).toFixed(2))
                }
                static getPageScrollPercentage() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    const n = e.start || 0,
                        r = e.end || 0,
                        i = t || document.documentElement.scrollHeight - document.documentElement.clientHeight,
                        o = i * n / 100,
                        s = i + o + i * r / 100;
                    return (document.documentElement.scrollTop + document.body.scrollTop + o) / s * 100
                }
            }
        },
        2640: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(1192)).default.extend({
                elements: null,
                getDefaultElements: () => ({}),
                bindEvents() {},
                onInit() {
                    this.initElements(), this.bindEvents()
                },
                initElements() {
                    this.elements = this.getDefaultElements()
                }
            });
            t.default = i
        },
        5955: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(1192)),
                o = r(n(2640)),
                s = r(n(2618)),
                a = r(n(6516)),
                c = r(n(400)),
                l = r(n(869)),
                u = window.elementorModules = {
                    Module: i.default,
                    ViewModule: o.default,
                    ArgsObject: s.default,
                    ForceMethodImplementation: l.default,
                    utils: {
                        Masonry: a.default,
                        Scroll: c.default
                    }
                };
            t.default = u
        },
        7323: (e, t, n) => {
            "use strict";
            var r = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n(3090));
            class NestedTabs extends i.default {
                getTabTitleFilterSelector(e) {
                    return `[data-tab="${e}"]`
                }
                getTabContentFilterSelector(e) {
                    return `*:nth-child(${2*e})`
                }
                getTabIndex(e) {
                    return e.getAttribute("data-tab")
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            tablist: '[role="tablist"]',
                            tabTitle: ".e-n-tab-title",
                            tabContent: ".e-con",
                            headingContainer: ".e-n-tabs-heading",
                            activeTabContentContainers: ".e-con.e-active",
                            mobileTabTitle: ".e-collapse"
                        },
                        classes: {
                            active: "e-active"
                        },
                        showTabFn: "show",
                        hideTabFn: "hide",
                        toggleSelf: !1,
                        hidePrevious: !0,
                        autoExpand: !0,
                        keyDirection: {
                            ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
                            ArrowUp: -1,
                            ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
                            ArrowDown: 1
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $tabTitles: this.findElement(e.tabTitle),
                        $tabContents: this.findElement(e.tabContent),
                        $mobileTabTitles: this.findElement(e.mobileTabTitle),
                        $headingContainer: this.findElement(e.headingContainer)
                    }
                }
                activateDefaultTab() {
                    const e = this.getSettings(),
                        t = this.getEditSettings("activeItemIndex") || 1,
                        n = {
                            showTabFn: e.showTabFn,
                            hideTabFn: e.hideTabFn
                        };
                    this.setSettings({
                        showTabFn: "show",
                        hideTabFn: "hide"
                    }), this.changeActiveTab(t), this.setSettings(n)
                }
                handleKeyboardNavigation(e) {
                    const t = e.currentTarget,
                        n = jQuery(t.closest(this.getSettings("selectors").tablist)),
                        r = n.find(this.getSettings("selectors").tabTitle),
                        i = "vertical" === n.attr("aria-orientation");
                    switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowRight":
                            if (i) return;
                            break;
                        case "ArrowUp":
                        case "ArrowDown":
                            if (!i) return;
                            e.preventDefault();
                            break;
                        case "Home":
                            return e.preventDefault(), void r.first().trigger("focus");
                        case "End":
                            return e.preventDefault(), void r.last().trigger("focus");
                        default:
                            return
                    }
                    const o = t.getAttribute("data-tab") - 1,
                        s = this.getSettings("keyDirection")[e.key],
                        a = r[o + s];
                    a ? a.focus() : -1 === o + s ? r.last().trigger("focus") : r.first().trigger("focus")
                }
                deactivateActiveTab(e) {
                    const t = this.getSettings(),
                        n = t.classes.active,
                        r = e ? this.getTabTitleFilterSelector(e) : "." + n,
                        i = e ? this.getTabContentFilterSelector(e) : "." + n,
                        o = this.elements.$tabTitles.filter(r),
                        s = this.elements.$tabContents.filter(i);
                    o.add(s).removeClass(n), o.attr({
                        tabindex: "-1",
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), s[t.hideTabFn](0, (() => this.onHideTabContent(s))), s.attr("hidden", "hidden")
                }
                onHideTabContent(e) {}
                activateTab(e) {
                    const t = this.getSettings(),
                        n = t.classes.active,
                        r = "show" === t.showTabFn ? 0 : 400;
                    let i = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),
                        o = this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));
                    if (!i.length) {
                        const t = Math.max(e - 1, 1);
                        i = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)), o = this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))
                    }
                    i.add(o).addClass(n), i.attr({
                        tabindex: "0",
                        "aria-selected": "true",
                        "aria-expanded": "true"
                    }), o[t.showTabFn](r, (() => this.onShowTabContent(o))), o.removeAttr("hidden")
                }
                onShowTabContent(e) {
                    elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"), elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", e)
                }
                isActiveTab(e) {
                    return this.elements.$tabTitles.filter('[data-tab="' + e + '"]').hasClass(this.getSettings("classes.active"))
                }
                onTabClick(e) {
                    e.preventDefault(), this.changeActiveTab(e.currentTarget.getAttribute("data-tab"), !0)
                }
                onTabKeyDown(e) {
                    this.preventDefaultLinkBehaviourForTabTitle(e), this.onKeydownAvoidUndesiredPageScrolling(e)
                }
                onTabKeyUp(e) {
                    switch (e.code) {
                        case "ArrowLeft":
                        case "ArrowRight":
                            this.handleKeyboardNavigation(e);
                            break;
                        case "Enter":
                        case "Space":
                            e.preventDefault(), this.changeActiveTab(e.currentTarget.getAttribute("data-tab"), !0)
                    }
                }
                getTabEvents() {
                    return {
                        keydown: this.onTabKeyDown.bind(this),
                        keyup: this.onTabKeyUp.bind(this),
                        click: this.onTabClick.bind(this)
                    }
                }
                bindEvents() {
                    this.elements.$tabTitles.on(this.getTabEvents()), elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers)
                }
                preventDefaultLinkBehaviourForTabTitle(e) {
                    jQuery(e.target).is("a") && "Enter" === e.key && e.preventDefault()
                }
                onKeydownAvoidUndesiredPageScrolling(e) {
                    ["End", "Home", "ArrowUp", "ArrowDown"].includes(e.key) && this.handleKeyboardNavigation(e)
                }
                reInitSwipers(e, t) {
                    const n = t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
                    for (const e of n) {
                        if (!e.swiper) return;
                        e.swiper.initialized = !1, e.swiper.init()
                    }
                }
                onInit() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.createMobileTabs(t), super.onInit(...t), this.getSettings("autoExpand") && this.activateDefaultTab()
                }
                onEditSettingsChange(e, t) {
                    "activeItemIndex" === e && this.changeActiveTab(t, !1)
                }
                changeActiveTab(e) {
                    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.isEdit && this.isElementInTheCurrentDocument()) return window.top.$e.run("document/repeater/select", {
                        container: elementor.getContainer(this.$element.attr("data-id")),
                        index: parseInt(e)
                    });
                    const t = this.isActiveTab(e),
                        n = this.getSettings();
                    if (!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(), !n.hidePrevious && t && this.deactivateActiveTab(e), !t) {
                        if ("none" === this.elements.$headingContainer.css("display")) return void this.activateMobileTab(e);
                        this.activateTab(e)
                    }
                }
                activateMobileTab(e) {
                    setTimeout((() => {
                        this.activateTab(e), this.forceActiveTabToBeInViewport(e)
                    }), 10)
                }
                forceActiveTabToBeInViewport(e) {
                    if (!elementorFrontend.isEditMode()) return;
                    const t = this.elements.$mobileTabTitles.filter(this.getTabTitleFilterSelector(e));
                    elementor.helpers.isInViewport(t[0]) || t[0].scrollIntoView({
                        block: "center"
                    })
                }
                createMobileTabs(e) {
                    const t = this.getSettings();
                    if (elementorFrontend.isEditMode()) {
                        const n = this.$element,
                            r = this.findElement(".e-collapse").remove();
                        let i = 1;
                        if (this.findElement(".e-con").each((function() {
                                const e = jQuery(this),
                                    r = n.find(`${t.selectors.headingContainer} > *:nth-child(${i})`),
                                    o = `<div class="${t.selectors.tabTitle.replace(".","")} e-collapse" data-tab="${i}" role="tab">${r.html()}</div>`;
                                e.before(o), ++i
                            })), r.length) return elementorModules.ViewModule.prototype.onInit.apply(this, e)
                    }
                }
                getActiveClass() {
                    return this.getSettings().classes.active
                }
                getVisibleTabTitle(e) {
                    const t = this.elements.$tabTitles.filter(e);
                    return null !== t[0] ? .offsetParent ? t[0] : t[1]
                }
                getKeyPressed(e) {
                    const t = 9 === e ? .which,
                        n = e ? .shiftKey;
                    return !!t && n ? "ShiftTab" : !!t && !n ? "Tab" : 27 === e ? .which ? "Escape" : void 0
                }
                changeFocusFromContentContainerItemBackToTabTitle(e) {
                    if (this.hasDropdownLayout()) return;
                    const t = "ShiftTab" === this.getKeyPressed(e),
                        n = "Tab" === this.getKeyPressed(e),
                        r = "Escape" === this.getKeyPressed(e),
                        i = this.itemInsideContentContainerHasFocus(0),
                        o = this.itemInsideContentContainerHasFocus("last"),
                        s = `.${this.getActiveClass()}`,
                        a = this.getVisibleTabTitle(s),
                        c = parseInt(a ? .getAttribute("data-tab")),
                        l = this.getTabTitleFilterSelector(c + 1),
                        u = this.getVisibleTabTitle(l),
                        h = n && o && !!u;
                    t && i && !!a || r ? (e.preventDefault(), a ? .focus()) : h && (e.preventDefault(), this.setTabindexOfActiveContainerItems("-1"), u ? .focus())
                }
                changeFocusFromActiveTabTitleToContentContainer(e) {
                    const t = "Tab" === this.getKeyPressed(e),
                        n = this.getFocusableItemsInsideActiveContentContainer()[0],
                        r = elementorFrontend.elements.window.document.activeElement,
                        i = parseInt(r.getAttribute("data-tab"));
                    t && this.tabTitleHasActiveContentContainer(i) && n && (e.preventDefault(), n.focus())
                }
                itemInsideContentContainerHasFocus(e) {
                    const t = elementorFrontend.elements.window.document.activeElement,
                        n = this.getFocusableItemsInsideActiveContentContainer();
                    return n["last" === e ? n.length - 1 : e] === t
                }
                getFocusableItemsInsideActiveContentContainer() {
                    const e = this.getSettings();
                    return this.$element.find(e.selectors.activeTabContentContainers).find(":focusable")
                }
                setTabindexOfActiveContainerItems(e) {
                    this.getFocusableItemsInsideActiveContentContainer().attr("tabindex", e)
                }
                setActiveCurrentContainerItemsToFocusable() {
                    const e = elementorFrontend.elements.window.document.activeElement,
                        t = parseInt(e ? .getAttribute("data-tab"));
                    this.tabTitleHasActiveContentContainer(t) && this.setTabindexOfActiveContainerItems("0")
                }
                tabTitleHasActiveContentContainer(e) {
                    const t = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),
                        n = t[0] ? .classList.contains(`${this.getActiveClass()}`);
                    return !(!this.elements.$tabContents.filter(this.getTabContentFilterSelector(e)) || !n)
                }
            }
            t.default = NestedTabs
        },
        5089: (e, t, n) => {
            var r = n(930),
                i = n(9268),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw o(i(e) + " is not a function")
            }
        },
        1378: (e, t, n) => {
            var r = n(930),
                i = String,
                o = TypeError;
            e.exports = function(e) {
                if ("object" == typeof e || r(e)) return e;
                throw o("Can't set " + i(e) + " as a prototype")
            }
        },
        6112: (e, t, n) => {
            var r = n(8759),
                i = String,
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw o(i(e) + " is not an object")
            }
        },
        6198: (e, t, n) => {
            var r = n(4088),
                i = n(7740),
                o = n(2871),
                createMethod = function(e) {
                    return function(t, n, s) {
                        var a, c = r(t),
                            l = o(c),
                            u = i(s, l);
                        if (e && n != n) {
                            for (; l > u;)
                                if ((a = c[u++]) != a) return !0
                        } else
                            for (; l > u; u++)
                                if ((e || u in c) && c[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: createMethod(!0),
                indexOf: createMethod(!1)
            }
        },
        2306: (e, t, n) => {
            var r = n(8240),
                i = r({}.toString),
                o = r("".slice);
            e.exports = function(e) {
                return o(i(e), 8, -1)
            }
        },
        375: (e, t, n) => {
            var r = n(2371),
                i = n(930),
                o = n(2306),
                s = n(211)("toStringTag"),
                a = Object,
                c = "Arguments" == o(function() {
                    return arguments
                }());
            e.exports = r ? o : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = a(e), s)) ? n : c ? o(t) : "Object" == (r = o(t)) && i(t.callee) ? "Arguments" : r
            }
        },
        8474: (e, t, n) => {
            var r = n(9606),
                i = n(6095),
                o = n(4399),
                s = n(7826);
            e.exports = function(e, t, n) {
                for (var a = i(t), c = s.f, l = o.f, u = 0; u < a.length; u++) {
                    var h = a[u];
                    r(e, h) || n && r(n, h) || c(e, h, l(t, h))
                }
            }
        },
        2585: (e, t, n) => {
            var r = n(5283),
                i = n(7826),
                o = n(5736);
            e.exports = r ? function(e, t, n) {
                return i.f(e, t, o(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        5736: e => {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        1343: (e, t, n) => {
            var r = n(930),
                i = n(7826),
                o = n(3712),
                s = n(9444);
            e.exports = function(e, t, n, a) {
                a || (a = {});
                var c = a.enumerable,
                    l = void 0 !== a.name ? a.name : t;
                if (r(n) && o(n, l, a), a.global) c ? e[t] = n : s(t, n);
                else {
                    try {
                        a.unsafe ? e[t] && (c = !0) : delete e[t]
                    } catch (e) {}
                    c ? e[t] = n : i.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !a.nonConfigurable,
                        writable: !a.nonWritable
                    })
                }
                return e
            }
        },
        9444: (e, t, n) => {
            var r = n(2086),
                i = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    i(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        5283: (e, t, n) => {
            var r = n(3677);
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        7886: e => {
            var t = "object" == typeof document && document.all,
                n = void 0 === t && void 0 !== t;
            e.exports = {
                all: t,
                IS_HTMLDDA: n
            }
        },
        821: (e, t, n) => {
            var r = n(2086),
                i = n(8759),
                o = r.document,
                s = i(o) && i(o.createElement);
            e.exports = function(e) {
                return s ? o.createElement(e) : {}
            }
        },
        4999: e => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        1448: (e, t, n) => {
            var r, i, o = n(2086),
                s = n(4999),
                a = o.process,
                c = o.Deno,
                l = a && a.versions || c && c.version,
                u = l && l.v8;
            u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = +r[1]), e.exports = i
        },
        8684: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        79: (e, t, n) => {
            var r = n(8240),
                i = Error,
                o = r("".replace),
                s = String(i("zxcasd").stack),
                a = /\n\s*at [^:]*:[^\n]*/,
                c = a.test(s);
            e.exports = function(e, t) {
                if (c && "string" == typeof e && !i.prepareStackTrace)
                    for (; t--;) e = o(e, a, "");
                return e
            }
        },
        8395: (e, t, n) => {
            var r = n(2585),
                i = n(79),
                o = n(2114),
                s = Error.captureStackTrace;
            e.exports = function(e, t, n, a) {
                o && (s ? s(e, t) : r(e, "stack", i(n, a)))
            }
        },
        2114: (e, t, n) => {
            var r = n(3677),
                i = n(5736);
            e.exports = !r((function() {
                var e = Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
            }))
        },
        1695: (e, t, n) => {
            var r = n(2086),
                i = n(4399).f,
                o = n(2585),
                s = n(1343),
                a = n(9444),
                c = n(8474),
                l = n(7189);
            e.exports = function(e, t) {
                var n, u, h, d, f, g = e.target,
                    p = e.global,
                    m = e.stat;
                if (n = p ? r : m ? r[g] || a(g, {}) : (r[g] || {}).prototype)
                    for (u in t) {
                        if (d = t[u], h = e.dontCallGetSet ? (f = i(n, u)) && f.value : n[u], !l(p ? u : g + (m ? "." : "#") + u, e.forced) && void 0 !== h) {
                            if (typeof d == typeof h) continue;
                            c(d, h)
                        }(e.sham || h && h.sham) && o(d, "sham", !0), s(n, u, d, e)
                    }
            }
        },
        3677: e => {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        7258: (e, t, n) => {
            var r = n(6059),
                i = Function.prototype,
                o = i.apply,
                s = i.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(o) : function() {
                return s.apply(o, arguments)
            })
        },
        6059: (e, t, n) => {
            var r = n(3677);
            e.exports = !r((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        9413: (e, t, n) => {
            var r = n(6059),
                i = Function.prototype.call;
            e.exports = r ? i.bind(i) : function() {
                return i.apply(i, arguments)
            }
        },
        4398: (e, t, n) => {
            var r = n(5283),
                i = n(9606),
                o = Function.prototype,
                s = r && Object.getOwnPropertyDescriptor,
                a = i(o, "name"),
                c = a && "something" === function something() {}.name,
                l = a && (!r || r && s(o, "name").configurable);
            e.exports = {
                EXISTS: a,
                PROPER: c,
                CONFIGURABLE: l
            }
        },
        1518: (e, t, n) => {
            var r = n(8240),
                i = n(5089);
            e.exports = function(e, t, n) {
                try {
                    return r(i(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (e) {}
            }
        },
        8240: (e, t, n) => {
            var r = n(6059),
                i = Function.prototype,
                o = i.call,
                s = r && i.bind.bind(o, o);
            e.exports = r ? s : function(e) {
                return function() {
                    return o.apply(e, arguments)
                }
            }
        },
        563: (e, t, n) => {
            var r = n(2086),
                i = n(930),
                aFunction = function(e) {
                    return i(e) ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? aFunction(r[e]) : r[e] && r[e][t]
            }
        },
        2964: (e, t, n) => {
            var r = n(5089),
                i = n(1858);
            e.exports = function(e, t) {
                var n = e[t];
                return i(n) ? void 0 : r(n)
            }
        },
        2086: (e, t, n) => {
            var check = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof n.g && n.g) || function() {
                return this
            }() || Function("return this")()
        },
        9606: (e, t, n) => {
            var r = n(8240),
                i = n(3060),
                o = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function hasOwn(e, t) {
                return o(i(e), t)
            }
        },
        7153: e => {
            e.exports = {}
        },
        6761: (e, t, n) => {
            var r = n(5283),
                i = n(3677),
                o = n(821);
            e.exports = !r && !i((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        5974: (e, t, n) => {
            var r = n(8240),
                i = n(3677),
                o = n(2306),
                s = Object,
                a = r("".split);
            e.exports = i((function() {
                return !s("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == o(e) ? a(e, "") : s(e)
            } : s
        },
        5070: (e, t, n) => {
            var r = n(930),
                i = n(8759),
                o = n(7530);
            e.exports = function(e, t, n) {
                var s, a;
                return o && r(s = t.constructor) && s !== n && i(a = s.prototype) && a !== n.prototype && o(e, a), e
            }
        },
        9277: (e, t, n) => {
            var r = n(8240),
                i = n(930),
                o = n(4489),
                s = r(Function.toString);
            i(o.inspectSource) || (o.inspectSource = function(e) {
                return s(e)
            }), e.exports = o.inspectSource
        },
        8945: (e, t, n) => {
            var r = n(8759),
                i = n(2585);
            e.exports = function(e, t) {
                r(t) && "cause" in t && i(e, "cause", t.cause)
            }
        },
        3278: (e, t, n) => {
            var r, i, o, s = n(640),
                a = n(2086),
                c = n(8759),
                l = n(2585),
                u = n(9606),
                h = n(4489),
                d = n(8944),
                f = n(7153),
                g = "Object already initialized",
                p = a.TypeError,
                m = a.WeakMap;
            if (s || h.state) {
                var v = h.state || (h.state = new m);
                v.get = v.get, v.has = v.has, v.set = v.set, r = function(e, t) {
                    if (v.has(e)) throw p(g);
                    return t.facade = e, v.set(e, t), t
                }, i = function(e) {
                    return v.get(e) || {}
                }, o = function(e) {
                    return v.has(e)
                }
            } else {
                var b = d("state");
                f[b] = !0, r = function(e, t) {
                    if (u(e, b)) throw p(g);
                    return t.facade = e, l(e, b, t), t
                }, i = function(e) {
                    return u(e, b) ? e[b] : {}
                }, o = function(e) {
                    return u(e, b)
                }
            }
            e.exports = {
                set: r,
                get: i,
                has: o,
                enforce: function(e) {
                    return o(e) ? i(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!c(t) || (n = i(t)).type !== e) throw p("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        930: (e, t, n) => {
            var r = n(7886),
                i = r.all;
            e.exports = r.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === i
            } : function(e) {
                return "function" == typeof e
            }
        },
        7189: (e, t, n) => {
            var r = n(3677),
                i = n(930),
                o = /#|\.prototype\./,
                isForced = function(e, t) {
                    var n = a[s(e)];
                    return n == l || n != c && (i(t) ? r(t) : !!t)
                },
                s = isForced.normalize = function(e) {
                    return String(e).replace(o, ".").toLowerCase()
                },
                a = isForced.data = {},
                c = isForced.NATIVE = "N",
                l = isForced.POLYFILL = "P";
            e.exports = isForced
        },
        1858: e => {
            e.exports = function(e) {
                return null == e
            }
        },
        8759: (e, t, n) => {
            var r = n(930),
                i = n(7886),
                o = i.all;
            e.exports = i.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : r(e) || e === o
            } : function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        },
        3296: e => {
            e.exports = !1
        },
        2071: (e, t, n) => {
            var r = n(563),
                i = n(930),
                o = n(5516),
                s = n(1876),
                a = Object;
            e.exports = s ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = r("Symbol");
                return i(t) && o(t.prototype, a(e))
            }
        },
        2871: (e, t, n) => {
            var r = n(4005);
            e.exports = function(e) {
                return r(e.length)
            }
        },
        3712: (e, t, n) => {
            var r = n(8240),
                i = n(3677),
                o = n(930),
                s = n(9606),
                a = n(5283),
                c = n(4398).CONFIGURABLE,
                l = n(9277),
                u = n(3278),
                h = u.enforce,
                d = u.get,
                f = String,
                g = Object.defineProperty,
                p = r("".slice),
                m = r("".replace),
                v = r([].join),
                b = a && !i((function() {
                    return 8 !== g((function() {}), "length", {
                        value: 8
                    }).length
                })),
                y = String(String).split("String"),
                S = e.exports = function(e, t, n) {
                    "Symbol(" === p(f(t), 0, 7) && (t = "[" + m(f(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!s(e, "name") || c && e.name !== t) && (a ? g(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), b && n && s(n, "arity") && e.length !== n.arity && g(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && s(n, "constructor") && n.constructor ? a && g(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) {}
                    var r = h(e);
                    return s(r, "source") || (r.source = v(y, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = S((function toString() {
                return o(this) && d(this).source || l(this)
            }), "toString")
        },
        5681: e => {
            var t = Math.ceil,
                n = Math.floor;
            e.exports = Math.trunc || function trunc(e) {
                var r = +e;
                return (r > 0 ? n : t)(r)
            }
        },
        1879: (e, t, n) => {
            var r = n(4059);
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
            }
        },
        7826: (e, t, n) => {
            var r = n(5283),
                i = n(6761),
                o = n(8202),
                s = n(6112),
                a = n(2258),
                c = TypeError,
                l = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                h = "enumerable",
                d = "configurable",
                f = "writable";
            t.f = r ? o ? function defineProperty(e, t, n) {
                if (s(e), t = a(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && f in n && !n[f]) {
                    var r = u(e, t);
                    r && r[f] && (e[t] = n.value, n = {
                        configurable: d in n ? n[d] : r[d],
                        enumerable: h in n ? n[h] : r[h],
                        writable: !1
                    })
                }
                return l(e, t, n)
            } : l : function defineProperty(e, t, n) {
                if (s(e), t = a(t), s(n), i) try {
                    return l(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw c("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        4399: (e, t, n) => {
            var r = n(5283),
                i = n(9413),
                o = n(7446),
                s = n(5736),
                a = n(4088),
                c = n(2258),
                l = n(9606),
                u = n(6761),
                h = Object.getOwnPropertyDescriptor;
            t.f = r ? h : function getOwnPropertyDescriptor(e, t) {
                if (e = a(e), t = c(t), u) try {
                    return h(e, t)
                } catch (e) {}
                if (l(e, t)) return s(!i(o.f, e, t), e[t])
            }
        },
        62: (e, t, n) => {
            var r = n(1352),
                i = n(8684).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
                return r(e, i)
            }
        },
        6952: (e, t) => {
            t.f = Object.getOwnPropertySymbols
        },
        5516: (e, t, n) => {
            var r = n(8240);
            e.exports = r({}.isPrototypeOf)
        },
        1352: (e, t, n) => {
            var r = n(8240),
                i = n(9606),
                o = n(4088),
                s = n(6198).indexOf,
                a = n(7153),
                c = r([].push);
            e.exports = function(e, t) {
                var n, r = o(e),
                    l = 0,
                    u = [];
                for (n in r) !i(a, n) && i(r, n) && c(u, n);
                for (; t.length > l;) i(r, n = t[l++]) && (~s(u, n) || c(u, n));
                return u
            }
        },
        7446: (e, t) => {
            "use strict";
            var n = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                i = r && !n.call({
                    1: 2
                }, 1);
            t.f = i ? function propertyIsEnumerable(e) {
                var t = r(this, e);
                return !!t && t.enumerable
            } : n
        },
        7530: (e, t, n) => {
            var r = n(1518),
                i = n(6112),
                o = n(1378);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = r(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
                } catch (e) {}
                return function setPrototypeOf(n, r) {
                    return i(n), o(r), t ? e(n, r) : n.__proto__ = r, n
                }
            }() : void 0)
        },
        7999: (e, t, n) => {
            var r = n(9413),
                i = n(930),
                o = n(8759),
                s = TypeError;
            e.exports = function(e, t) {
                var n, a;
                if ("string" === t && i(n = e.toString) && !o(a = r(n, e))) return a;
                if (i(n = e.valueOf) && !o(a = r(n, e))) return a;
                if ("string" !== t && i(n = e.toString) && !o(a = r(n, e))) return a;
                throw s("Can't convert object to primitive value")
            }
        },
        6095: (e, t, n) => {
            var r = n(563),
                i = n(8240),
                o = n(62),
                s = n(6952),
                a = n(6112),
                c = i([].concat);
            e.exports = r("Reflect", "ownKeys") || function ownKeys(e) {
                var t = o.f(a(e)),
                    n = s.f;
                return n ? c(t, n(e)) : t
            }
        },
        1632: (e, t, n) => {
            var r = n(7826).f;
            e.exports = function(e, t, n) {
                n in e || r(e, n, {
                    configurable: !0,
                    get: function() {
                        return t[n]
                    },
                    set: function(e) {
                        t[n] = e
                    }
                })
            }
        },
        9586: (e, t, n) => {
            var r = n(1858),
                i = TypeError;
            e.exports = function(e) {
                if (r(e)) throw i("Can't call method on " + e);
                return e
            }
        },
        8944: (e, t, n) => {
            var r = n(9197),
                i = n(5422),
                o = r("keys");
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        4489: (e, t, n) => {
            var r = n(2086),
                i = n(9444),
                o = "__core-js_shared__",
                s = r[o] || i(o, {});
            e.exports = s
        },
        9197: (e, t, n) => {
            var r = n(3296),
                i = n(4489);
            (e.exports = function(e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.28.0",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        5558: (e, t, n) => {
            var r = n(1448),
                i = n(3677);
            e.exports = !!Object.getOwnPropertySymbols && !i((function() {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        7740: (e, t, n) => {
            var r = n(9502),
                i = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? i(n + t, 0) : o(n, t)
            }
        },
        4088: (e, t, n) => {
            var r = n(5974),
                i = n(9586);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        9502: (e, t, n) => {
            var r = n(5681);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : r(t)
            }
        },
        4005: (e, t, n) => {
            var r = n(9502),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(r(e), 9007199254740991) : 0
            }
        },
        3060: (e, t, n) => {
            var r = n(9586),
                i = Object;
            e.exports = function(e) {
                return i(r(e))
            }
        },
        1288: (e, t, n) => {
            var r = n(9413),
                i = n(8759),
                o = n(2071),
                s = n(2964),
                a = n(7999),
                c = n(211),
                l = TypeError,
                u = c("toPrimitive");
            e.exports = function(e, t) {
                if (!i(e) || o(e)) return e;
                var n, c = s(e, u);
                if (c) {
                    if (void 0 === t && (t = "default"), n = r(c, e, t), !i(n) || o(n)) return n;
                    throw l("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), a(e, t)
            }
        },
        2258: (e, t, n) => {
            var r = n(1288),
                i = n(2071);
            e.exports = function(e) {
                var t = r(e, "string");
                return i(t) ? t : t + ""
            }
        },
        2371: (e, t, n) => {
            var r = {};
            r[n(211)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        4059: (e, t, n) => {
            var r = n(375),
                i = String;
            e.exports = function(e) {
                if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(e)
            }
        },
        9268: e => {
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        },
        5422: (e, t, n) => {
            var r = n(8240),
                i = 0,
                o = Math.random(),
                s = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++i + o, 36)
            }
        },
        1876: (e, t, n) => {
            var r = n(5558);
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        8202: (e, t, n) => {
            var r = n(5283),
                i = n(3677);
            e.exports = r && i((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        640: (e, t, n) => {
            var r = n(2086),
                i = n(930),
                o = r.WeakMap;
            e.exports = i(o) && /native code/.test(String(o))
        },
        211: (e, t, n) => {
            var r = n(2086),
                i = n(9197),
                o = n(9606),
                s = n(5422),
                a = n(5558),
                c = n(1876),
                l = r.Symbol,
                u = i("wks"),
                h = c ? l.for || l : l && l.withoutSetter || s;
            e.exports = function(e) {
                return o(u, e) || (u[e] = a && o(l, e) ? l[e] : h("Symbol." + e)), u[e]
            }
        },
        1557: (e, t, n) => {
            "use strict";
            var r = n(563),
                i = n(9606),
                o = n(2585),
                s = n(5516),
                a = n(7530),
                c = n(8474),
                l = n(1632),
                u = n(5070),
                h = n(1879),
                d = n(8945),
                f = n(8395),
                g = n(5283),
                p = n(3296);
            e.exports = function(e, t, n, m) {
                var v = "stackTraceLimit",
                    b = m ? 2 : 1,
                    y = e.split("."),
                    S = y[y.length - 1],
                    T = r.apply(null, y);
                if (T) {
                    var E = T.prototype;
                    if (!p && i(E, "cause") && delete E.cause, !n) return T;
                    var w = r("Error"),
                        C = t((function(e, t) {
                            var n = h(m ? t : e, void 0),
                                r = m ? new T(e) : new T;
                            return void 0 !== n && o(r, "message", n), f(r, C, r.stack, 2), this && s(E, this) && u(r, this, C), arguments.length > b && d(r, arguments[b]), r
                        }));
                    if (C.prototype = E, "Error" !== S ? a ? a(C, w) : c(C, w, {
                            name: !0
                        }) : g && v in T && (l(C, T, v), l(C, T, "prepareStackTrace")), c(C, T), !p) try {
                        E.name !== S && o(E, "name", S), E.constructor = C
                    } catch (e) {}
                    return C
                }
            }
        },
        740: (e, t, n) => {
            var r = n(1695),
                i = n(2086),
                o = n(7258),
                s = n(1557),
                a = "WebAssembly",
                c = i[a],
                l = 7 !== Error("e", {
                    cause: 7
                }).cause,
                exportGlobalErrorCauseWrapper = function(e, t) {
                    var n = {};
                    n[e] = s(e, t, l), r({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: l
                    }, n)
                },
                exportWebAssemblyErrorCauseWrapper = function(e, t) {
                    if (c && c[e]) {
                        var n = {};
                        n[e] = s(a + "." + e, t, l), r({
                            target: a,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: l
                        }, n)
                    }
                };
            exportGlobalErrorCauseWrapper("Error", (function(e) {
                return function Error(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("EvalError", (function(e) {
                return function EvalError(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("RangeError", (function(e) {
                return function RangeError(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
                return function ReferenceError(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
                return function SyntaxError(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("TypeError", (function(e) {
                return function TypeError(t) {
                    return o(e, this, arguments)
                }
            })), exportGlobalErrorCauseWrapper("URIError", (function(e) {
                return function URIError(t) {
                    return o(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
                return function CompileError(t) {
                    return o(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
                return function LinkError(t) {
                    return o(e, this, arguments)
                }
            })), exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
                return function RuntimeError(t) {
                    return o(e, this, arguments)
                }
            }))
        },
        3203: e => {
            e.exports = function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }
    },
    e => {
        var t;
        t = 6412, e(e.s = t)
    }
]);
! function() {
    "use strict";

    function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
    }
    var keyCounter = 0,
        allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }, Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }, Waypoint.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
    }, Waypoint.prototype.disable = function() {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function() {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
    }, Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
        return this
    }, Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(),
function() {
    "use strict";

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }

    function Context(element) {
        this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var keyCounter = 0,
        contexts = {},
        Waypoint = window.Waypoint,
        oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
    }, Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
            isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
    }, Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(), self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
        })
    }, Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(), self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
        })
    }, Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }, Context.prototype.handleScroll = function() {
        var triggeredGroups = {},
            axes = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var axisKey in axes) {
            var axis = axes[axisKey],
                isForward = axis.newScroll > axis.oldScroll,
                direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                        nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                        crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                        crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }, Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
    }, Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window,
            contextOffset = isWindow ? void 0 : this.adapter.offset(),
            triggeredGroups = {};
        this.handleScroll(), axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
                    adjustment = waypoint.options.offset,
                    oldTriggerPoint = waypoint.triggerPoint,
                    elementOffset = 0,
                    freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
        }), this
    }, Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }, Context.refreshAll = function() {
        for (var contextId in contexts) contexts[contextId].refresh()
    }, Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }, window.onload = function() {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
    }, Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }, Waypoint.Context = Context
}(),
function() {
    "use strict";

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function Group(options) {
        this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
    }
    var groups = {
            vertical: {},
            horizontal: {}
        },
        Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }, Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction],
                reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
            isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }, Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }, Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }, Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }, Group.prototype.first = function() {
        return this.waypoints[0]
    }, Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }, Waypoint.Group = Group
}(),
function() {
    "use strict";

    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery,
        Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }), Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }), Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";

    function createExtension(framework) {
        return function() {
            var waypoints = [],
                overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
            }), waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }

    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {}, x.ui.version = "1.13.2",
        /*!
         * jQuery UI :data 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
                return function(t) {
                    return !!x.data(t, e)
                }
            }) : function(t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
         * jQuery UI Disable Selection 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }),
        /*!
         * jQuery UI Focusable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.focusable = function(t, e) {
            var i, n, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (o = (i = t.parentNode).name, !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e, n && x(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "visible" === e
            }(x(t)))
        }, x.extend(x.expr.pseudos, {
            focusable: function(t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }), x.fn._form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        },
        /*!
         * jQuery UI Form Reset Mixin 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = x(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element._form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
         * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
        x.expr.pseudos || (x.expr.pseudos = x.expr[":"]), x.uniqueSort || (x.uniqueSort = x.unique), x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, i = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, x.escapeSelector = function(t) {
            return (t + "").replace(e, i)
        }), x.fn.even && x.fn.odd || x.fn.extend({
            even: function() {
                return this.filter(function(t) {
                    return t % 2 == 0
                })
            },
            odd: function() {
                return this.filter(function(t) {
                    return t % 2 == 1
                })
            }
        }),
        /*!
         * jQuery UI Keycode 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
         * jQuery UI Labels 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.labels = function() {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e)) : this.pushStack([])
        }, x.ui.plugin = {
            add: function(t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
         * jQuery UI Position 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, h = x.fn.position, x.position = {
            scrollbarWidth: function() {
                var t, e, i;
                return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0], x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i)
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    i = N(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, x.fn.position = function(f) {
            var c, d, p, g, m, v, y, w, b, _, t, e;
            return f && f.of ? (v = "string" == typeof(f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of), y = x.position.getWithinInfo(f.within), w = x.position.getScrollInfo(y), b = (f.collision || "flip").split(" "), _ = {}, e = 9 === (e = (t = v)[0]).nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : N(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : e.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: e.pageY,
                    left: e.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }, v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = x.extend({}, g = e.offset), x.each(["my", "at"], function() {
                var t, e, i = (f[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
            }), 1 === b.length && (b[1] = b[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), c = E(_.at, d, p), m.left += c[0], m.top += c[1], this.each(function() {
                var i, t, r = x(this),
                    l = r.outerWidth(),
                    a = r.outerHeight(),
                    e = L(this, "marginLeft"),
                    n = L(this, "marginTop"),
                    o = l + e + L(this, "marginRight") + w.width,
                    s = a + n + L(this, "marginBottom") + w.height,
                    h = x.extend({}, m),
                    u = E(_.my, r.outerWidth(), r.outerHeight());
                "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += u[0], h.top += u[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: a,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: s,
                        offset: [c[0] + u[0], c[1] + u[1]],
                        my: f.my,
                        at: f.at,
                        within: y,
                        elem: r
                    })
                }), f.using && (t = function(t) {
                    var e = g.left - h.left,
                        i = e + d - l,
                        n = g.top - h.top,
                        o = n + p - a,
                        s = {
                            target: {
                                element: v,
                                left: g.left,
                                top: g.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: h.left,
                                top: h.top,
                                width: l,
                                height: a
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                    d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
                }), r.offset(x.extend(h, {
                    using: t
                }))
            })) : h.apply(this, arguments)
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within,
                        o = n.isWindow ? n.scrollLeft : n.offset.left,
                        n = n.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = o - s,
                        l = s + e.collisionWidth - n - o;
                    e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function(t, e) {
                    var i, n = e.within,
                        n = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        i = i.isWindow ? i.scrollLeft : i.offset.left,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = s - i,
                        s = s + e.collisionWidth - o - i,
                        l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        h = -2 * e.offset[0];
                    r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        i = i.isWindow ? i.scrollTop : i.offset.top,
                        s = t.top - e.collisionPosition.marginTop,
                        r = s - i,
                        s = s + e.collisionHeight - o - i,
                        l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        h = -2 * e.offset[1];
                    r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, x.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = (i = i || e.body).nodeName ? i : e.body
        }, x.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        },
        /*!
         * jQuery UI Scroll Parent 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
         * jQuery UI Tabbable 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr.pseudos, {
            tabbable: function(t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
         * jQuery UI Unique ID 1.13.2
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            uniqueId: (u = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
     * jQuery UI Widget 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var f, c = 0,
        d = Array.prototype.hasOwnProperty,
        p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)(e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }), x.widget = function(t, i, e) {
        var n, o, s, r = {},
            l = t.split(".")[0],
            a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            }
        }), o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o]) i = n[o][e], d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i,
                n = p.call(arguments, 1),
                o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function() {}, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = [],
                r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? (function() {
                    var i = [];
                    o.element.each(function(t, e) {
                        x.map(r.classesElementLookup, function(t) {
                            return t
                        }).some(function(t) {
                            return t.is(e)
                        }) || i.push(e)
                    }), r._on(x(i), {
                        remove: "_untrackClassesElement"
                    })
                }(), x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }), this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t,
                e = {
                    extra: o ? e : i,
                    keys: o ? t : e,
                    element: o ? this.element : t,
                    add: n = "boolean" == typeof n ? n : i
                };
            return e.element.toggleClass(this._classes(e), n), this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/),
                    n = t[1] + l.eventNamespace,
                    t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof(t = t || {}) ? t = {
                duration: t
            }: !0 === t && (t = {}), n = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*! elementor - v3.12.1 - 02-04-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
    [819], {
        9220: (e, t, n) => {
            "use strict";
            var s = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(8135));
            class _default extends elementorModules.ViewModule {
                constructor() {
                    super(...arguments), this.documents = {}, this.initDocumentClasses(), this.attachDocumentsClasses()
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            document: ".elementor"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors");
                    return {
                        $documents: jQuery(e.document)
                    }
                }
                initDocumentClasses() {
                    this.documentClasses = {
                        base: i.default
                    }, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
                }
                addDocumentClass(e, t) {
                    this.documentClasses[e] = t
                }
                attachDocumentsClasses() {
                    this.elements.$documents.each(((e, t) => this.attachDocumentClass(jQuery(t))))
                }
                attachDocumentClass(e) {
                    const t = e.data(),
                        n = t.elementorId,
                        s = t.elementorType,
                        i = this.documentClasses[s] || this.documentClasses.base;
                    this.documents[n] = new i({
                        $element: e,
                        id: n
                    })
                }
            }
            t.default = _default
        },
        9804: (e, t, n) => {
            "use strict";
            var s = n(3203),
                i = s(n(6397)),
                o = s(n(8704)),
                r = s(n(4985)),
                a = s(n(7537)),
                l = s(n(355)),
                d = s(n(2804)),
                c = s(n(3384));
            e.exports = function(e) {
                var t = this;
                const s = {};
                this.elementsHandlers = {
                    "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
                    "alert.default": () => n.e(745).then(n.bind(n, 9269)),
                    "counter.default": () => n.e(120).then(n.bind(n, 7884)),
                    "progress.default": () => n.e(192).then(n.bind(n, 1351)),
                    "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
                    "toggle.default": () => n.e(181).then(n.bind(n, 2)),
                    "video.default": () => n.e(791).then(n.bind(n, 5363)),
                    "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
                    "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
                    "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602))
                }, elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = () => Promise.resolve().then(n.bind(n, 7323)));
                const addElementsHandlers = () => {
                        this.elementsHandlers.section = [d.default, ...o.default, l.default, c.default], this.elementsHandlers.container = [...o.default], elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default), this.elementsHandlers.column = a.default, e.each(this.elementsHandlers, ((e, t) => {
                            const n = e.split(".");
                            e = n[0];
                            const s = n[1] || null;
                            this.attachHandler(e, t, s)
                        }))
                    },
                    isClassHandler = e => e.prototype ? .getUniqueHandlerID;
                this.addHandler = function(t, n) {
                    const i = n.$element.data("model-cid");
                    let o;
                    if (i) {
                        o = t.prototype.getConstructorID(), s[i] || (s[i] = {});
                        const e = s[i][o];
                        e && e.onDestroy()
                    }
                    const r = new t(n);
                    elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e), i && (s[i][o] = r)
                }, this.attachHandler = (e, n, s) => {
                    Array.isArray(n) || (n = [n]), n.forEach((n => function(e, n) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                        s = s ? "." + s : "";
                        const i = e + s;
                        elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`, (e => {
                            if (isClassHandler(n)) t.addHandler(n, {
                                $element: e,
                                elementName: i
                            }, !0);
                            else {
                                const s = n();
                                if (!s) return;
                                s instanceof Promise ? s.then((n => {
                                    let {
                                        default: s
                                    } = n;
                                    t.addHandler(s, {
                                        $element: e,
                                        elementName: i
                                    }, !0)
                                })) : t.addHandler(s, {
                                    $element: e,
                                    elementName: i
                                }, !0)
                            }
                        }))
                    }(e, n, s)))
                }, this.getHandler = function(e) {
                    const t = this.elementsHandlers[e];
                    return isClassHandler(t) ? t : new Promise((e => {
                        t().then((t => {
                            let {
                                default: n
                            } = t;
                            e(n)
                        }))
                    }))
                }, this.getHandlers = function(e) {
                    return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"), e ? this.getHandler(e) : this.elementsHandlers
                }, this.runReadyTrigger = function(t) {
                    if (elementorFrontend.config.is_static) return;
                    const n = jQuery(t),
                        s = n.attr("data-element_type");
                    if (s && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction(`frontend/element_ready/${s}`, n, e), "widget" === s)) {
                        const t = n.attr("data-widget_type");
                        elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                    }
                }, this.init = () => {
                    elementorFrontend.hooks.addAction("frontend/element_ready/global", i.default), addElementsHandlers()
                }
            }
        },
        5654: (e, t, n) => {
            "use strict";
            var s = n(3203);
            n(59);
            var i = s(n(9220)),
                o = s(n(5107)),
                r = s(n(3308)),
                a = s(n(1604)),
                l = s(n(1911)),
                d = s(n(4773)),
                c = s(n(2064)),
                u = s(n(8628)),
                h = s(n(8646)),
                m = s(n(6866)),
                g = s(n(4375)),
                p = s(n(6404)),
                f = s(n(6046)),
                v = s(n(1322)),
                b = n(6028);
            const _ = n(9469),
                y = n(9804),
                w = n(3346);
            class Frontend extends elementorModules.ViewModule {
                constructor() {
                    super(...arguments), this.config = elementorFrontendConfig, this.config.legacyMode = {
                        get elementWrappers() {
                            return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0", "elementorFrontend.config.experimentalFeatures.e_dom_optimization"), !elementorFrontend.config.experimentalFeatures.e_dom_optimization
                        }
                    }, this.populateActiveBreakpointsConfig()
                }
                get Module() {
                    return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            elementor: ".elementor",
                            adminBar: "#wpadminbar"
                        }
                    }
                }
                getDefaultElements() {
                    const e = {
                        window,
                        $window: jQuery(window),
                        $document: jQuery(document),
                        $head: jQuery(document.head),
                        $body: jQuery(document.body),
                        $deviceMode: jQuery("<span>", {
                            id: "elementor-device-mode",
                            class: "elementor-screen-only"
                        })
                    };
                    return e.$body.append(e.$deviceMode), e
                }
                bindEvents() {
                    this.elements.$window.on("resize", (() => this.setDeviceModeData()))
                }
                getElements(e) {
                    return this.getItems(this.elements, e)
                }
                getPageSettings(e) {
                    const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                    return this.getItems(t, e)
                }
                getGeneralSettings(e) {
                    return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings", "3.0.0", "getKitSettings and remove the `elementor_` prefix"), this.getKitSettings(`elementor_${e}`)
                }
                getKitSettings(e) {
                    return this.getItems(this.config.kit, e)
                }
                getCurrentDeviceMode() {
                    return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
                }
                getDeviceSetting(e, t, n) {
                    if ("widescreen" === e) return this.getWidescreenSetting(t, n);
                    const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                        largeToSmall: !0,
                        withDesktop: !0
                    });
                    let i = s.indexOf(e);
                    for (; i > 0;) {
                        const e = t[n + "_" + s[i]];
                        if (e || 0 === e) return e;
                        i--
                    }
                    return t[n]
                }
                getWidescreenSetting(e, t) {
                    const n = t + "_widescreen";
                    let s;
                    return s = e[n] ? e[n] : e[t], s
                }
                getCurrentDeviceSetting(e, t) {
                    return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
                }
                isEditMode() {
                    return this.config.environmentMode.edit
                }
                isWPPreviewMode() {
                    return this.config.environmentMode.wpPreview
                }
                initDialogsManager() {
                    let e;
                    this.getDialogsManager = () => (e || (e = new DialogsManager.Instance), e)
                }
                initOnReadyComponents() {
                    this.utils = {
                        youtube: new a.default,
                        vimeo: new l.default,
                        baseVideoLoader: new d.default,
                        anchors: new w,
                        get lightbox() {
                            return h.default.getLightbox()
                        },
                        urlActions: new c.default,
                        swiper: u.default,
                        environment: r.default,
                        assetsLoader: new m.default,
                        escapeHTML: b.escapeHTML,
                        events: p.default,
                        controls: new v.default
                    }, this.modules = {
                        StretchElement: elementorModules.frontend.tools.StretchElement,
                        Masonry: elementorModules.utils.Masonry
                    }, this.elementsHandler.init(), this.isEditMode() ? elementor.once("document:loaded", (() => this.onDocumentLoaded())) : this.onDocumentLoaded()
                }
                initOnReadyElements() {
                    this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
                }
                addUserAgentClasses() {
                    for (const [e, t] of Object.entries(r.default)) t && this.elements.$body.addClass("e--ua-" + e)
                }
                setDeviceModeData() {
                    this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
                }
                addListenerOnce(e, t, n, s) {
                    if (s || (s = this.elements.$window), this.isEditMode())
                        if (this.removeListeners(e, t, s), s instanceof jQuery) {
                            const i = t + "." + e;
                            s.on(i, n)
                        } else s.on(t, n, e);
                    else s.on(t, n)
                }
                removeListeners(e, t, n, s) {
                    if (s || (s = this.elements.$window), s instanceof jQuery) {
                        const i = t + "." + e;
                        s.off(i, n)
                    } else s.off(t, n, e)
                }
                debounce(e, t) {
                    let n;
                    return function() {
                        const s = this,
                            i = arguments,
                            o = !n;
                        clearTimeout(n), n = setTimeout((() => {
                            n = null, e.apply(s, i)
                        }), t), o && e.apply(s, i)
                    }
                }
                waypoint(e, t, n) {
                    n = jQuery.extend({
                        offset: "100%",
                        triggerOnce: !0
                    }, n);
                    return e.elementorWaypoint((function() {
                        const e = this.element || this,
                            s = t.apply(e, arguments);
                        return n.triggerOnce && this.destroy && this.destroy(), s
                    }), n)
                }
                muteMigrationTraces() {
                    jQuery.migrateMute = !0, jQuery.migrateTrace = !1
                }
                initModules() {
                    const e = {
                        shapes: f.default
                    };
                    elementorFrontend.trigger("elementor/modules/init:before"), elementorFrontend.trigger("elementor/modules/init/before"), Object.entries(e).forEach((e => {
                        let [t, n] = e;
                        this.modulesHandlers[t] = new n
                    }))
                }
                populateActiveBreakpointsConfig() {
                    this.config.responsive.activeBreakpoints = {}, Object.entries(this.config.responsive.breakpoints).forEach((e => {
                        let [t, n] = e;
                        n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                    }))
                }
                init() {
                    this.hooks = new _, this.breakpoints = new g.default(this.config.responsive), this.storage = new o.default, this.elementsHandler = new y(jQuery), this.modulesHandlers = {}, this.addUserAgentClasses(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), p.default.dispatch(this.elements.$window, "elementor/frontend/init"), this.initModules(), this.initOnReadyElements(), this.initOnReadyComponents()
                }
                onDocumentLoaded() {
                    this.documentsManager = new i.default, this.trigger("components:init"), new h.default
                }
            }
            window.elementorFrontend = new Frontend, elementorFrontend.isEditMode() || jQuery((() => elementorFrontend.init()))
        },
        4058: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
                getDefaultSettings() {
                    return {
                        classes: {
                            swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                            swiperWrapper: "swiper-wrapper",
                            swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                            swiperPreloader: "swiper-lazy-preloader",
                            slideBackground: "elementor-background-slideshow__slide__image",
                            kenBurns: "elementor-ken-burns",
                            kenBurnsActive: "elementor-ken-burns--active",
                            kenBurnsIn: "elementor-ken-burns--in",
                            kenBurnsOut: "elementor-ken-burns--out"
                        }
                    }
                }
                getSwiperOptions() {
                    const e = this.getElementSettings(),
                        t = {
                            grabCursor: !1,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            loop: "yes" === e.background_slideshow_loop,
                            speed: e.background_slideshow_transition_duration,
                            autoplay: {
                                delay: e.background_slideshow_slide_duration,
                                stopOnLastSlide: !e.background_slideshow_loop
                            },
                            handleElementorBreakpoints: !0,
                            on: {
                                slideChange: () => {
                                    e.background_slideshow_ken_burns && this.handleKenBurns()
                                }
                            }
                        };
                    switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()), e.background_slideshow_slide_transition) {
                        case "fade":
                            t.effect = "fade", t.fadeEffect = {
                                crossFade: !0
                            };
                            break;
                        case "slide_down":
                            t.autoplay.reverseDirection = !0, t.direction = "vertical";
                            break;
                        case "slide_up":
                            t.direction = "vertical"
                    }
                    return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                        loadPrevNext: !0,
                        loadPrevNextAmount: 1
                    }), t
                }
                buildSwiperElements() {
                    const e = this.getSettings("classes"),
                        t = this.getElementSettings(),
                        n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl",
                        s = jQuery("<div>", {
                            class: e.swiperContainer,
                            dir: n
                        }),
                        i = jQuery("<div>", {
                            class: e.swiperWrapper
                        }),
                        o = t.background_slideshow_ken_burns,
                        r = "yes" === t.background_slideshow_lazyload;
                    let a = e.slideBackground;
                    if (o) {
                        a += " " + e.kenBurns;
                        const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                        a += " " + e[n]
                    }
                    r && (a += " swiper-lazy"), this.elements.$slides = jQuery(), t.background_slideshow_gallery.forEach((t => {
                        const n = jQuery("<div>", {
                            class: e.swiperSlide
                        });
                        let s;
                        if (r) {
                            const n = jQuery("<div>", {
                                class: e.swiperPreloader
                            });
                            s = jQuery("<div>", {
                                class: a,
                                "data-background": t.url
                            }), s.append(n)
                        } else s = jQuery("<div>", {
                            class: a,
                            style: 'background-image: url("' + t.url + '");'
                        });
                        n.append(s), i.append(n), this.elements.$slides = this.elements.$slides.add(n)
                    })), s.append(i), this.$element.prepend(s), this.elements.$backgroundSlideShowContainer = s
                }
                async initSlider() {
                    if (1 >= this.getSlidesCount()) return;
                    const e = this.getElementSettings(),
                        t = elementorFrontend.utils.swiper;
                    this.swiper = await new t(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()), this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper), e.background_slideshow_ken_burns && this.handleKenBurns()
                }
                activate() {
                    this.buildSwiperElements(), this.initSlider()
                }
                deactivate() {
                    this.swiper && (this.swiper.destroy(), this.elements.$backgroundSlideShowContainer.remove())
                }
                run() {
                    "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
                }
                onInit() {
                    super.onInit(), this.getElementSettings("background_slideshow_gallery") && this.run()
                }
                onDestroy() {
                    super.onDestroy(), this.deactivate()
                }
                onElementChange(e) {
                    "background_background" === e && this.run()
                }
            }
            t.default = BackgroundSlideshow
        },
        9501: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BackgroundVideo extends elementorModules.frontend.handlers.Base {
                getDefaultSettings() {
                    return {
                        selectors: {
                            backgroundVideoContainer: ".elementor-background-video-container",
                            backgroundVideoEmbed: ".elementor-background-video-embed",
                            backgroundVideoHosted: ".elementor-background-video-hosted"
                        }
                    }
                }
                getDefaultElements() {
                    const e = this.getSettings("selectors"),
                        t = {
                            $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                        };
                    return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
                }
                calcVideosSize(e) {
                    let t = "16:9";
                    "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                    const n = this.elements.$backgroundVideoContainer.outerWidth(),
                        s = this.elements.$backgroundVideoContainer.outerHeight(),
                        i = t.split(":"),
                        o = i[0] / i[1],
                        r = n / s > o;
                    return {
                        width: r ? n : s * o,
                        height: r ? n / o : s
                    }
                }
                changeVideoSize() {
                    if ("hosted" !== this.videoType && !this.player) return;
                    let e;
                    if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted), !e) return;
                    const t = this.calcVideosSize(e);
                    e.width(t.width).height(t.height)
                }
                startVideoLoop(e) {
                    if (!this.player.getIframe().contentWindow) return;
                    const t = this.getElementSettings(),
                        n = t.background_video_start || 0,
                        s = t.background_video_end;
                    if (!t.background_play_once || e) {
                        if (this.player.seekTo(n), s) {
                            setTimeout((() => {
                                this.startVideoLoop(!1)
                            }), 1e3 * (s - n + 1))
                        }
                    } else this.player.stopVideo()
                }
                prepareVimeoVideo(e, t) {
                    const n = this.getElementSettings(),
                        s = {
                            url: t,
                            width: this.elements.$backgroundVideoContainer.outerWidth().width,
                            autoplay: !0,
                            loop: !n.background_play_once,
                            transparent: !1,
                            background: !0,
                            muted: !0
                        };
                    n.background_privacy_mode && (s.dnt = !0), this.player = new e.Player(this.elements.$backgroundVideoContainer, s), this.handleVimeoStartEndTimes(n), this.player.ready().then((() => {
                        jQuery(this.player.element).addClass("elementor-background-video-embed"), this.changeVideoSize()
                    }))
                }
                handleVimeoStartEndTimes(e) {
                    e.background_video_start && this.player.on("play", (t => {
                        0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                    })), this.player.on("timeupdate", (t => {
                        e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)), this.player.getDuration().then((n => {
                            e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                        }))
                    }))
                }
                prepareYTVideo(e, t) {
                    const n = this.elements.$backgroundVideoContainer,
                        s = this.getElementSettings();
                    let i = e.PlayerState.PLAYING;
                    window.chrome && (i = e.PlayerState.UNSTARTED);
                    const o = {
                        videoId: t,
                        events: {
                            onReady: () => {
                                this.player.mute(), this.changeVideoSize(), this.startVideoLoop(!0), this.player.playVideo()
                            },
                            onStateChange: t => {
                                switch (t.data) {
                                    case i:
                                        n.removeClass("elementor-invisible elementor-loading");
                                        break;
                                    case e.PlayerState.ENDED:
                                        "function" == typeof this.player.seekTo && this.player.seekTo(s.background_video_start || 0), s.background_play_once && this.player.destroy()
                                }
                            }
                        },
                        playerVars: {
                            controls: 0,
                            rel: 0,
                            playsinline: 1
                        }
                    };
                    s.background_privacy_mode && (o.host = "https://www.youtube-nocookie.com", o.origin = window.location.hostname), n.addClass("elementor-loading elementor-invisible"), this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], o)
                }
                activate() {
                    let e, t = this.getElementSettings("background_video_link");
                    const n = this.getElementSettings("background_play_once");
                    if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo", this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube", this.apiProvider = elementorFrontend.utils.youtube), this.apiProvider) e = this.apiProvider.getVideoIDFromURL(t), this.apiProvider.onApiReady((n => {
                        "youtube" === this.videoType && this.prepareYTVideo(n, e), "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                    }));
                    else {
                        this.videoType = "hosted";
                        const e = this.getElementSettings("background_video_start"),
                            s = this.getElementSettings("background_video_end");
                        (e || s) && (t += "#t=" + (e || 0) + (s ? "," + s : "")), this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)), n && this.elements.$backgroundVideoHosted.on("ended", (() => {
                            this.elements.$backgroundVideoHosted.hide()
                        }))
                    }
                    elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
                }
                deactivate() {
                    "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"), elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
                }
                run() {
                    const e = this.getElementSettings();
                    (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
                }
                onInit() {
                    super.onInit(...arguments), this.changeVideoSize = this.changeVideoSize.bind(this), this.run()
                }
                onElementChange(e) {
                    "background_background" === e && this.run()
                }
            }
            t.default = BackgroundVideo
        },
        8704: (e, t, n) => {
            "use strict";
            var s = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(4058)),
                o = s(n(9501)),
                r = [i.default, o.default];
            t.default = r
        },
        7537: (e, t, n) => {
            "use strict";
            var s = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = [s(n(4058)).default];
            t.default = i
        },
        4985: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = [() => n.e(413).then(n.bind(n, 2929)), () => n.e(413).then(n.bind(n, 343))];
            t.default = s
        },
        6397: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class GlobalHandler extends elementorModules.frontend.handlers.Base {
                getWidgetType() {
                    return "global"
                }
                animate() {
                    const e = this.$element,
                        t = this.getAnimation();
                    if ("none" === t) return void e.removeClass("elementor-invisible");
                    const n = this.getElementSettings(),
                        s = n._animation_delay || n.animation_delay || 0;
                    e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout((() => {
                        e.removeClass("elementor-invisible").addClass("animated " + t)
                    }), s)
                }
                getAnimation() {
                    return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
                }
                onInit() {
                    if (super.onInit(...arguments), this.getAnimation()) {
                        const e = elementorModules.utils.Scroll.scrollObserver({
                            callback: t => {
                                t.isInViewport && (this.animate(), e.unobserve(this.$element[0]))
                            }
                        });
                        e.observe(this.$element[0])
                    }
                }
                onElementChange(e) {
                    /^_?animation/.test(e) && this.animate()
                }
            }
            t.default = e => {
                elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                    $element: e
                })
            }
        },
        355: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class HandlesPosition extends elementorModules.frontend.handlers.Base {
                isActive() {
                    return elementorFrontend.isEditMode()
                }
                isFirstSection() {
                    return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
                }
                isOverflowHidden() {
                    return "hidden" === this.$element.css("overflow")
                }
                getOffset() {
                    if ("body" === elementor.config.document.container) return this.$element.offset().top;
                    const e = jQuery(elementor.config.document.container);
                    return this.$element.offset().top - e.offset().top
                }
                setHandlesPosition() {
                    const e = elementor.documents.getCurrent();
                    if (!e || !e.container.isEditable()) return;
                    const t = "elementor-section--handles-inside";
                    if (elementor.settings.page.model.attributes.scroll_snap) return void this.$element.addClass(t);
                    const n = this.isOverflowHidden();
                    if (!n && !this.isFirstSection()) return;
                    const s = n ? 0 : this.getOffset();
                    if (s < 25) {
                        this.$element.addClass(t);
                        const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                        s < -5 ? e.css("top", -s) : e.css("top", "")
                    } else this.$element.removeClass(t)
                }
                onInit() {
                    this.isActive() && (this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
                }
            }
            t.default = HandlesPosition
        },
        3384: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class Shapes extends elementorModules.frontend.handlers.Base {
                getDefaultSettings() {
                    return {
                        selectors: {
                            container: "> .elementor-shape-%s"
                        },
                        svgURL: elementorFrontend.config.urls.assets + "shapes/"
                    }
                }
                getDefaultElements() {
                    const e = {},
                        t = this.getSettings("selectors");
                    return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
                }
                isActive() {
                    return elementorFrontend.isEditMode()
                }
                getSvgURL(e, t) {
                    let n = this.getSettings("svgURL") + t + ".svg";
                    return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e], -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))), n
                }
                buildSVG(e) {
                    const t = "shape_divider_" + e,
                        n = this.getElementSettings(t),
                        s = this.elements["$" + e + "Container"];
                    if (s.attr("data-shape", n), !n) return void s.empty();
                    let i = n;
                    this.getElementSettings(t + "_negative") && (i += "-negative");
                    const o = this.getSvgURL(n, i);
                    jQuery.get(o, (e => {
                        s.empty().append(e.childNodes[0])
                    })), this.setNegative(e)
                }
                setNegative(e) {
                    this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
                }
                onInit() {
                    this.isActive(this.getSettings()) && (super.onInit(...arguments), ["top", "bottom"].forEach((e => {
                        this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                    })))
                }
                onElementChange(e) {
                    const t = e.match(/^shape_divider_(top|bottom)$/);
                    if (t) return void this.buildSVG(t[1]);
                    const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                    n && (this.buildSVG(n[1]), this.setNegative(n[1]))
                }
            }
            t.default = Shapes
        },
        2804: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
                getStretchedClass() {
                    return "elementor-section-stretched"
                }
                getStretchSettingName() {
                    return "stretch_section"
                }
                getStretchActiveValue() {
                    return "section-stretched"
                }
            }
            t.default = StretchedSection
        },
        3346: (e, t, n) => {
            "use strict";
            var s = n(6028);
            e.exports = elementorModules.ViewModule.extend({
                getDefaultSettings: () => ({
                    scrollDuration: 500,
                    selectors: {
                        links: 'a[href*="#"]',
                        targets: ".elementor-element, .elementor-menu-anchor",
                        scrollable: (0, s.isScrollSnapActive)() ? "body" : "html, body"
                    }
                }),
                getDefaultElements() {
                    return {
                        $scrollable: jQuery(this.getSettings("selectors").scrollable)
                    }
                },
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
                },
                handleAnchorLinks(e) {
                    var t, n = e.currentTarget,
                        i = location.pathname === n.pathname;
                    if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                        try {
                            t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                        } catch (e) {
                            return
                        }
                        if (t.length) {
                            var o = t.offset().top,
                                r = elementorFrontend.elements.$wpAdminBar,
                                a = jQuery(".elementor-section.elementor-sticky--active:visible");
                            r.length > 0 && (o -= r.height()), a.length > 0 && (o -= Math.max.apply(null, a.map((function() {
                                return jQuery(this).outerHeight()
                            })).get())), e.preventDefault(), o = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", o), (0, s.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"), this.elements.$scrollable.animate({
                                scrollTop: o
                            }, this.getSettings("scrollDuration"), "linear", (() => {
                                (0, s.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                            }))
                        }
                    }
                },
                onInit() {
                    elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
                }
            })
        },
        6866: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class AssetsLoader {
                getScriptElement(e) {
                    const t = document.createElement("script");
                    return t.src = e, t
                }
                getStyleElement(e) {
                    const t = document.createElement("link");
                    return t.rel = "stylesheet", t.href = e, t
                }
                load(e, t) {
                    const n = AssetsLoader.assets[e][t];
                    return n.loader || (n.loader = new Promise((t => {
                        const s = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                        s.onload = () => t(!0);
                        const i = "head" === n.parent ? n.parent : "body";
                        document[i].appendChild(s)
                    }))), n.loader
                }
            }
            t.default = AssetsLoader;
            const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min",
                s = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
            AssetsLoader.assets = {
                script: {
                    dialog: {
                        src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                    },
                    "share-link": {
                        src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                    },
                    swiper: {
                        src: s
                    }
                },
                style: {}
            }
        },
        1322: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Controls {
                getControlValue(e, t, n) {
                    let s;
                    return s = "object" == typeof e[t] && n ? e[t][n] : e[t], s
                }
                getResponsiveControlValue(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    const s = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode(),
                        i = this.getControlValue(e, t, n);
                    if ("widescreen" === s) {
                        const s = this.getControlValue(e, `${t}_widescreen`, n);
                        return s || 0 === s ? s : i
                    }
                    const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                        withDesktop: !0
                    });
                    let r = s,
                        a = o.indexOf(s),
                        l = "";
                    for (; a <= o.length;) {
                        if ("desktop" === r) {
                            l = i;
                            break
                        }
                        const s = `${t}_${r}`,
                            d = this.getControlValue(e, s, n);
                        if (d || 0 === d) {
                            l = d;
                            break
                        }
                        a++, r = o[a]
                    }
                    return l
                }
            }
        },
        8646: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class LightboxManager extends elementorModules.ViewModule {
                static getLightbox() {
                    const e = new Promise((e => {
                            n.e(723).then(n.t.bind(n, 3896, 23)).then((t => {
                                let {
                                    default: n
                                } = t;
                                return e(new n)
                            }))
                        })),
                        t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                        s = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                    return Promise.all([e, t, s]).then((() => e))
                }
                getDefaultSettings() {
                    return {
                        selectors: {
                            links: "a, [data-elementor-lightbox]"
                        }
                    }
                }
                getDefaultElements() {
                    return {
                        $links: jQuery(this.getSettings("selectors.links"))
                    }
                }
                isLightboxLink(e) {
                    if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo) return !1;
                    const t = elementorFrontend.getKitSettings("global_image_lightbox"),
                        n = e.dataset.elementorOpenLightbox;
                    return "yes" === n || t && "no" !== n
                }
                async onLinkClick(e) {
                    const t = e.currentTarget,
                        n = jQuery(e.target),
                        s = elementorFrontend.isEditMode(),
                        i = s && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),
                        o = !!n.closest(".elementor-edit-area").length;
                    if (!this.isLightboxLink(t)) return void(s && o && e.preventDefault());
                    if (e.preventDefault(), s && !elementor.getPreferences("lightbox_in_editor")) return;
                    if (i) return;
                    (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
                }
                isOptimizedAssetsLoading() {
                    return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
                }
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e => this.onLinkClick(e)))
                }
                onInit() {
                    super.onInit(...arguments), this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e, t) => {
                        if (this.isLightboxLink(t)) return LightboxManager.getLightbox(), !1
                    }))
                }
            }
            t.default = LightboxManager
        },
        8628: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = class Swiper {
                constructor(e, t) {
                    return this.config = t, this.config.breakpoints && (this.config = this.adjustConfig(t)), e instanceof jQuery && (e = e[0]), e.closest(".elementor-widget-wrap") ? .classList.add("e-swiper-container"), e.closest(".elementor-widget") ? .classList.add("e-widget-swiper"), new Promise((t => {
                        if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading) return t(this.createSwiperInstance(e, this.config));
                        elementorFrontend.utils.assetsLoader.load("script", "swiper").then((() => t(this.createSwiperInstance(e, this.config))))
                    }))
                }
                createSwiperInstance(e, t) {
                    const n = window.Swiper;
                    return n.prototype.adjustConfig = this.adjustConfig, new n(e, t)
                }
                adjustConfig(e) {
                    if (!e.handleElementorBreakpoints) return e;
                    const t = elementorFrontend.config.responsive.activeBreakpoints,
                        n = elementorFrontend.breakpoints.getBreakpointValues();
                    return Object.keys(e.breakpoints).forEach((s => {
                        const i = parseInt(s);
                        let o;
                        if (i === t.mobile.value || i + 1 === t.mobile.value) o = 0;
                        else if (!t.widescreen || i !== t.widescreen.value && i + 1 !== t.widescreen.value) {
                            const e = n.findIndex((e => i === e || i + 1 === e));
                            o = n[e - 1]
                        } else o = i;
                        e.breakpoints[o] = e.breakpoints[s], e.breakpoints[s] = {
                            slidesPerView: e.slidesPerView,
                            slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                        }
                    })), e
                }
            }
        },
        2064: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(5719);
            class _default extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        selectors: {
                            links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                        }
                    }
                }
                bindEvents() {
                    elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
                }
                initActions() {
                    this.actions = {
                        lightbox: async e => {
                            const t = await elementorFrontend.utils.lightbox;
                            e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"), t.showModal(e))
                        }
                    }
                }
                addAction(e, t) {
                    this.actions[e] = t
                }
                runAction(e) {
                    const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                    if (!t) return;
                    const n = this.actions[t[1]];
                    if (!n) return;
                    let s = {};
                    const i = e.match(/settings=(.+)/);
                    i && (s = JSON.parse(atob(i[1])));
                    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                    n(s, ...r)
                }
                runLinkAction(e) {
                    e.preventDefault(), this.runAction(jQuery(e.currentTarget).attr("href"), e)
                }
                runHashAction() {
                    if (!location.hash) return;
                    const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                    e && this.runAction(e.getAttribute("data-e-action-hash"))
                }
                createActionHash(e, t) {
                    return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
                }
                onInit() {
                    super.onInit(), this.initActions(), elementorFrontend.on("components:init", this.runHashAction.bind(this))
                }
            }
            t.default = _default
        },
        6028: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isScrollSnapActive = t.escapeHTML = void 0;
            t.escapeHTML = e => {
                const t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;"
                };
                return e.replace(/[&<>'"]/g, (e => t[e] || e))
            };
            t.isScrollSnapActive = () => "yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes ? .scroll_snap : elementorFrontend.config.settings.page ? .scroll_snap)
        },
        4773: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class BaseLoader extends elementorModules.ViewModule {
                getDefaultSettings() {
                    return {
                        isInserted: !1,
                        selectors: {
                            firstScript: "script:first"
                        }
                    }
                }
                getDefaultElements() {
                    return {
                        $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                    }
                }
                insertAPI() {
                    this.elements.$firstScript.before(jQuery("<script>", {
                        src: this.getApiURL()
                    })), this.setSettings("isInserted", !0)
                }
                getVideoIDFromURL(e) {
                    const t = e.match(this.getURLRegex());
                    return t && t[1]
                }
                onApiReady(e) {
                    this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((() => {
                        this.onApiReady(e)
                    }), 350)
                }
                getAutoplayURL(e) {
                    return e.replace("&autoplay=0", "") + "&autoplay=1"
                }
            }
            t.default = BaseLoader
        },
        1911: (e, t, n) => {
            "use strict";
            var s = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(4773));
            class VimeoLoader extends i.default {
                getApiURL() {
                    return "https://player.vimeo.com/api/player.js"
                }
                getURLRegex() {
                    return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
                }
                isApiLoaded() {
                    return window.Vimeo
                }
                getApiObject() {
                    return Vimeo
                }
                getAutoplayURL(e) {
                    const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                    return e.replace(t[0], "") + t
                }
            }
            t.default = VimeoLoader
        },
        1604: (e, t, n) => {
            "use strict";
            var s = n(3203);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(4773));
            class YoutubeLoader extends i.default {
                getApiURL() {
                    return "https://www.youtube.com/iframe_api"
                }
                getURLRegex() {
                    return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
                }
                isApiLoaded() {
                    return window.YT && YT.loaded
                }
                getApiObject() {
                    return YT
                }
            }
            t.default = YoutubeLoader
        },
        59: (e, t, n) => {
            "use strict";
            n.p = elementorFrontendConfig.urls.assets + "js/"
        },
        4375: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class Breakpoints extends elementorModules.Module {
                constructor(e) {
                    super(), this.responsiveConfig = e
                }
                getActiveBreakpointsList() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e = {
                        largeToSmall: !1,
                        withDesktop: !1,
                        ...e
                    };
                    const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                    if (e.withDesktop) {
                        const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                        t.splice(e, 0, "desktop")
                    }
                    return e.largeToSmall && t.reverse(), t
                }
                getBreakpointValues() {
                    const {
                        activeBreakpoints: e
                    } = this.responsiveConfig, t = [];
                    return Object.values(e).forEach((e => {
                        t.push(e.value)
                    })), t
                }
                getDesktopPreviousDeviceKey() {
                    let e = "";
                    const {
                        activeBreakpoints: t
                    } = this.responsiveConfig, n = Object.keys(t), s = n.length;
                    return e = "min" === t[n[s - 1]].direction ? n[s - 2] : n[s - 1], e
                }
                getDesktopMinPoint() {
                    const {
                        activeBreakpoints: e
                    } = this.responsiveConfig;
                    return e[this.getDesktopPreviousDeviceKey()].value + 1
                }
                getDeviceMinBreakpoint(e) {
                    if ("desktop" === e) return this.getDesktopMinPoint();
                    const {
                        activeBreakpoints: t
                    } = this.responsiveConfig, n = Object.keys(t);
                    let s;
                    if (n[0] === e) s = 320;
                    else if ("widescreen" === e) s = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                    else {
                        const i = n.indexOf(e);
                        s = t[n[i - 1]].value + 1
                    }
                    return s
                }
                getActiveMatchRegex() {
                    return new RegExp(this.getActiveBreakpointsList().map((e => "_" + e)).join("|") + "$")
                }
            }
            t.default = Breakpoints
        },
        6404: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.Events = void 0;
            class Events {
                static dispatch(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e = e instanceof jQuery ? e[0] : e, s && e.dispatchEvent(new CustomEvent(s, {
                        detail: n
                    })), e.dispatchEvent(new CustomEvent(t, {
                        detail: n
                    }))
                }
            }
            t.Events = Events;
            var n = Events;
            t.default = n
        },
        9469: e => {
            "use strict";
            e.exports = function() {
                var e, t = Array.prototype.slice,
                    n = {
                        actions: {},
                        filters: {}
                    };

                function _removeHook(e, t, s, i) {
                    var o, r, a;
                    if (n[e][t])
                        if (s)
                            if (o = n[e][t], i)
                                for (a = o.length; a--;)(r = o[a]).callback === s && r.context === i && o.splice(a, 1);
                            else
                                for (a = o.length; a--;) o[a].callback === s && o.splice(a, 1);
                    else n[e][t] = []
                }

                function _addHook(e, t, s, i, o) {
                    var r = {
                            callback: s,
                            priority: i,
                            context: o
                        },
                        a = n[e][t];
                    if (a) {
                        var l = !1;
                        if (jQuery.each(a, (function() {
                                if (this.callback === s) return l = !0, !1
                            })), l) return;
                        a.push(r), a = function _hookInsertSort(e) {
                            for (var t, n, s, i = 1, o = e.length; i < o; i++) {
                                for (t = e[i], n = i;
                                    (s = e[n - 1]) && s.priority > t.priority;) e[n] = e[n - 1], --n;
                                e[n] = t
                            }
                            return e
                        }(a)
                    } else a = [r];
                    n[e][t] = a
                }

                function _runHook(e, t, s) {
                    var i, o, r = n[e][t];
                    if (!r) return "filters" === e && s[0];
                    if (o = r.length, "filters" === e)
                        for (i = 0; i < o; i++) s[0] = r[i].callback.apply(r[i].context, s);
                    else
                        for (i = 0; i < o; i++) r[i].callback.apply(r[i].context, s);
                    return "filters" !== e || s[0]
                }
                return e = {
                    removeFilter: function removeFilter(t, n) {
                        return "string" == typeof t && _removeHook("filters", t, n), e
                    },
                    applyFilters: function applyFilters() {
                        var n = t.call(arguments),
                            s = n.shift();
                        return "string" == typeof s ? _runHook("filters", s, n) : e
                    },
                    addFilter: function addFilter(t, n, s, i) {
                        return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, s = parseInt(s || 10, 10), i), e
                    },
                    removeAction: function removeAction(t, n) {
                        return "string" == typeof t && _removeHook("actions", t, n), e
                    },
                    doAction: function doAction() {
                        var n = t.call(arguments),
                            s = n.shift();
                        return "string" == typeof s && _runHook("actions", s, n), e
                    },
                    addAction: function addAction(t, n, s, i) {
                        return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, s = parseInt(s || 10, 10), i), e
                    }
                }, e
            }
        },
        3308: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            const matchUserAgent = e => n.indexOf(e) >= 0,
                n = navigator.userAgent,
                s = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/"),
                i = matchUserAgent("Firefox"),
                o = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
                r = /Trident|MSIE/.test(n) && !!document.documentMode,
                a = !r && !!window.StyleMedia || matchUserAgent("Edg"),
                l = !!window.chrome && matchUserAgent("Chrome") && !(a || s),
                d = matchUserAgent("Chrome") && !!window.CSS,
                c = matchUserAgent("AppleWebKit") && !d;
            var u = {
                isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                appleWebkit: c,
                blink: d,
                chrome: l,
                edge: a,
                firefox: i,
                ie: r,
                mac: matchUserAgent("Macintosh"),
                opera: s,
                safari: o,
                webkit: matchUserAgent("AppleWebKit")
            };
            t.default = u
        },
        5107: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.Module {
                get(e, t) {
                    let n;
                    t = t || {};
                    try {
                        n = t.session ? sessionStorage : localStorage
                    } catch (t) {
                        return e ? void 0 : {}
                    }
                    let s = n.getItem("elementor");
                    s = s ? JSON.parse(s) : {}, s.__expiration || (s.__expiration = {});
                    const i = s.__expiration;
                    let o = [];
                    e ? i[e] && (o = [e]) : o = Object.keys(i);
                    let r = !1;
                    return o.forEach((e => {
                        new Date(i[e]) < new Date && (delete s[e], delete i[e], r = !0)
                    })), r && this.save(s, t.session), e ? s[e] : s
                }
                set(e, t, n) {
                    n = n || {};
                    const s = this.get(null, n);
                    if (s[e] = t, n.lifetimeInSeconds) {
                        const t = new Date;
                        t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds), s.__expiration[e] = t.getTime()
                    }
                    this.save(s, n.session)
                }
                save(e, t) {
                    let n;
                    try {
                        n = t ? sessionStorage : localStorage
                    } catch (e) {
                        return
                    }
                    n.setItem("elementor", JSON.stringify(e))
                }
            }
            t.default = _default
        },
        6046: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            class _default extends elementorModules.Module {
                constructor() {
                    super(), elementorFrontend.elementsHandler.attachHandler("text-path", (() => n.e(48).then(n.bind(n, 6468))))
                }
            }
            t.default = _default
        },
        1855: (e, t, n) => {
            var s = n(5516),
                i = TypeError;
            e.exports = function(e, t) {
                if (s(t, e)) return e;
                throw i("Incorrect invocation")
            }
        },
        3621: e => {
            e.exports = {
                IndexSizeError: {
                    s: "INDEX_SIZE_ERR",
                    c: 1,
                    m: 1
                },
                DOMStringSizeError: {
                    s: "DOMSTRING_SIZE_ERR",
                    c: 2,
                    m: 0
                },
                HierarchyRequestError: {
                    s: "HIERARCHY_REQUEST_ERR",
                    c: 3,
                    m: 1
                },
                WrongDocumentError: {
                    s: "WRONG_DOCUMENT_ERR",
                    c: 4,
                    m: 1
                },
                InvalidCharacterError: {
                    s: "INVALID_CHARACTER_ERR",
                    c: 5,
                    m: 1
                },
                NoDataAllowedError: {
                    s: "NO_DATA_ALLOWED_ERR",
                    c: 6,
                    m: 0
                },
                NoModificationAllowedError: {
                    s: "NO_MODIFICATION_ALLOWED_ERR",
                    c: 7,
                    m: 1
                },
                NotFoundError: {
                    s: "NOT_FOUND_ERR",
                    c: 8,
                    m: 1
                },
                NotSupportedError: {
                    s: "NOT_SUPPORTED_ERR",
                    c: 9,
                    m: 1
                },
                InUseAttributeError: {
                    s: "INUSE_ATTRIBUTE_ERR",
                    c: 10,
                    m: 1
                },
                InvalidStateError: {
                    s: "INVALID_STATE_ERR",
                    c: 11,
                    m: 1
                },
                SyntaxError: {
                    s: "SYNTAX_ERR",
                    c: 12,
                    m: 1
                },
                InvalidModificationError: {
                    s: "INVALID_MODIFICATION_ERR",
                    c: 13,
                    m: 1
                },
                NamespaceError: {
                    s: "NAMESPACE_ERR",
                    c: 14,
                    m: 1
                },
                InvalidAccessError: {
                    s: "INVALID_ACCESS_ERR",
                    c: 15,
                    m: 1
                },
                ValidationError: {
                    s: "VALIDATION_ERR",
                    c: 16,
                    m: 0
                },
                TypeMismatchError: {
                    s: "TYPE_MISMATCH_ERR",
                    c: 17,
                    m: 1
                },
                SecurityError: {
                    s: "SECURITY_ERR",
                    c: 18,
                    m: 1
                },
                NetworkError: {
                    s: "NETWORK_ERR",
                    c: 19,
                    m: 1
                },
                AbortError: {
                    s: "ABORT_ERR",
                    c: 20,
                    m: 1
                },
                URLMismatchError: {
                    s: "URL_MISMATCH_ERR",
                    c: 21,
                    m: 1
                },
                QuotaExceededError: {
                    s: "QUOTA_EXCEEDED_ERR",
                    c: 22,
                    m: 1
                },
                TimeoutError: {
                    s: "TIMEOUT_ERR",
                    c: 23,
                    m: 1
                },
                InvalidNodeTypeError: {
                    s: "INVALID_NODE_TYPE_ERR",
                    c: 24,
                    m: 1
                },
                DataCloneError: {
                    s: "DATA_CLONE_ERR",
                    c: 25,
                    m: 1
                }
            }
        },
        5719: (e, t, n) => {
            "use strict";
            var s = n(1695),
                i = n(2086),
                o = n(563),
                r = n(5736),
                a = n(7826).f,
                l = n(9606),
                d = n(1855),
                c = n(5070),
                u = n(1879),
                h = n(3621),
                m = n(79),
                g = n(5283),
                p = n(3296),
                f = "DOMException",
                v = o("Error"),
                b = o(f),
                _ = function DOMException() {
                    d(this, y);
                    var e = arguments.length,
                        t = u(e < 1 ? void 0 : arguments[0]),
                        n = u(e < 2 ? void 0 : arguments[1], "Error"),
                        s = new b(t, n),
                        i = v(t);
                    return i.name = f, a(s, "stack", r(1, m(i.stack, 1))), c(s, this, _), s
                },
                y = _.prototype = b.prototype,
                w = "stack" in v(f),
                k = "stack" in new b(1, 2),
                S = b && g && Object.getOwnPropertyDescriptor(i, f),
                E = !(!S || S.writable && S.configurable),
                M = w && !E && !k;
            s({
                global: !0,
                constructor: !0,
                forced: p || M
            }, {
                DOMException: M ? _ : b
            });
            var C = o(f),
                A = C.prototype;
            if (A.constructor !== C)
                for (var D in p || a(A, "constructor", r(1, C)), h)
                    if (l(h, D)) {
                        var $ = h[D],
                            R = $.s;
                        l(C, R) || a(C, R, r(6, $.c))
                    }
        }
    },
    e => {
        e.O(0, [354], (() => {
            return t = 5654, e(e.s = t);
            var t
        }));
        e.O()
    }
]);



