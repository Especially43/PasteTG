!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    function g(e, t, n) {
        var r,
            i,
            o = (n = n || K).createElement("script");
        if (((o.text = e), t)) for (r in pe) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function v(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e;
    }
    function s(e) {
        var t = !!e && "length" in e && e.length,
            n = v(e);
        return !ce(e) && !fe(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function t(e, n, r) {
        return ce(n)
            ? he.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? he.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? he.grep(e, function (e) {
                  return -1 < re.call(n, e) !== r;
              })
            : he.filter(n, e, r);
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    function c(e) {
        return e;
    }
    function f(e) {
        throw e;
    }
    function u(e, t, n, r) {
        var i;
        try {
            e && ce((i = e.promise)) ? i.call(e).done(t).fail(n) : e && ce((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    function r() {
        K.removeEventListener("DOMContentLoaded", r), C.removeEventListener("load", r), he.ready();
    }
    function i(e, t) {
        return t.toUpperCase();
    }
    function p(e) {
        return e.replace(Ae, "ms-").replace(Ne, i);
    }
    function o() {
        this.expando = he.expando + o.uid++;
    }
    function d(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(He, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : Oe.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                qe.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function h(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return he.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (he.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (he.cssNumber[t] || ("px" !== l && +u)) && Re.exec(he.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; ) he.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), he.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    function m(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((l[c] = _e.get(r, "display") || null), l[c] || (r.style.display = "")),
                      "" === r.style.display &&
                          Be(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = Ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = he.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (Ue[s] = u)))))
                    : "none" !== n && ((l[c] = "none"), _e.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    function y(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && l(e, t)) ? he.merge([e], n) : n;
    }
    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _e.set(e[n], "globalEval", !t || _e.get(t[n], "globalEval"));
    }
    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === v(o)) he.merge(p, o.nodeType ? [o] : o);
                else if (Je.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[s] || Ge._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                    he.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = p[d++]); )
            if (r && -1 < he.inArray(o, r)) i && i.push(o);
            else if (((l = Ie(o)), (a = y(f.appendChild(o), "script")), l && x(a), n)) for (c = 0; (o = a[c++]); ) Ve.test(o.type || "") && n.push(o);
        return f;
    }
    function a() {
        return !0;
    }
    function w() {
        return !1;
    }
    function T(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return K.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function k(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) k(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = w;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return he().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = he.guid++))),
            e.each(function () {
                he.event.add(this, t, i, r, n);
            })
        );
    }
    function E(e, i, o) {
        o
            ? (_e.set(e, i, !1),
              he.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = _e.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length) (he.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (((r = ee.call(arguments)), _e.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = _e.get(this, i)) || t ? _e.set(this, i, !1) : (n = {}), r !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else r.length && (_e.set(this, i, { value: he.event.trigger(he.extend(r[0], he.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === _e.get(e, i) && he.event.add(e, i, a);
    }
    function D(e, t) {
        return (l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && he(e).children("tbody")[0]) || e;
    }
    function S(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function j(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function A(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (_e.hasData(e) && ((o = _e.access(e)), (a = _e.set(t, o)), (l = o.events))) for (i in (delete a.handle, (a.events = {}), l)) for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n]);
            qe.hasData(e) && ((s = qe.access(e)), (u = he.extend({}, s)), qe.set(t, u));
        }
    }
    function N(n, r, i, o) {
        r = te.apply([], r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = ce(d);
        if (h || (1 < f && "string" == typeof d && !le.checkClone && rt.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), N(t, r, i, o);
            });
        if (f && ((t = (e = b(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = he.map(y(e, "script"), S)).length; c < f; c++) (u = e), c !== p && ((u = he.clone(u, !0, !0)), s && he.merge(a, y(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, he.map(a, j), c = 0; c < s; c++)
                    (u = a[c]),
                        Ve.test(u.type || "") &&
                            !_e.access(u, "globalEval") &&
                            he.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? he._evalUrl && !u.noModule && he._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : g(u.textContent.replace(it, ""), u, l));
        }
        return n;
    }
    function L(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && Ie(r) && x(y(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function _(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || at(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || Ie(e) || (a = he.style(e, t)),
                !le.pixelBoxStyles() && ot.test(a) && st.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function q(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function O(e) {
        return (
            he.cssProps[e] ||
            ct[e] ||
            (e in lt
                ? e
                : (ct[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--; ) if ((e = ut[n] + t) in lt) return e;
                      })(e) || e))
        );
    }
    function H(e, t, n) {
        var r = Re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function P(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += he.css(e, n + Me[a], !0, i)),
                r
                    ? ("content" === n && (u -= he.css(e, "padding" + Me[a], !0, i)), "margin" !== n && (u -= he.css(e, "border" + Me[a] + "Width", !0, i)))
                    : ((u += he.css(e, "padding" + Me[a], !0, i)), "padding" !== n ? (u += he.css(e, "border" + Me[a] + "Width", !0, i)) : (s += he.css(e, "border" + Me[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function R(e, t, n) {
        var r = at(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === he.css(e, "boxSizing", !1, r),
            o = i,
            a = _(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ot.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!le.boxSizingReliable() && i) || "auto" === a || (!parseFloat(a) && "inline" === he.css(e, "display", !1, r))) && e.getClientRects().length && ((i = "border-box" === he.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + P(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i);
    }
    function $() {
        vt && (!1 === K.hidden && C.requestAnimationFrame ? C.requestAnimationFrame($) : C.setTimeout($, he.fx.interval), he.fx.tick());
    }
    function I() {
        return (
            C.setTimeout(function () {
                gt = void 0;
            }),
            (gt = Date.now())
        );
    }
    function W(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Me[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function B(e, t, n) {
        for (var r, i = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function F(o, e, t) {
        var n,
            a,
            r = 0,
            i = F.prefilters.length,
            s = he.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (a) return !1;
                for (var e = gt || I(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
            },
            l = s.promise({
                elem: o,
                props: he.extend({}, e),
                opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: gt || I(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = he.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
                },
            }),
            c = l.props;
        for (
            (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = p(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = he.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = F.prefilters[r].call(l, o, c, l.opts))) return ce(n.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            he.map(c, B, l),
            ce(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            he.fx.timer(he.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    function U(e) {
        return (e.match(Ee) || []).join(" ");
    }
    function z(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function X(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(Ee)) || [];
    }
    function V(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            he.each(e, function (e, t) {
                r || Lt.test(n) ? i(n, t) : V(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== v(e)) i(n, e);
        else for (t in e) V(n + "[" + t + "]", e[t], r, i);
    }
    function G(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(Ee) || [];
            if (ce(t)) for (; (n = i[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Y(t, i, o, a) {
        function s(e) {
            var r;
            return (
                (u[e] = !0),
                he.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || l || u[n] ? (l ? !(r = n) : void 0) : (i.dataTypes.unshift(n), s(n), !1);
                }),
                r
            );
        }
        var u = {},
            l = t === Bt;
        return s(i.dataTypes[0]) || (!u["*"] && s("*"));
    }
    function Q(e, t) {
        var n,
            r,
            i = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r), e;
    }
    var J = [],
        K = C.document,
        Z = Object.getPrototypeOf,
        ee = J.slice,
        te = J.concat,
        ne = J.push,
        re = J.indexOf,
        ie = {},
        oe = ie.toString,
        ae = ie.hasOwnProperty,
        se = ae.toString,
        ue = se.call(Object),
        le = {},
        ce = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        fe = function (e) {
            return null != e && e === e.window;
        },
        pe = { type: !0, src: !0, nonce: !0, noModule: !0 },
        de = "3.4.1",
        he = function (e, t) {
            return new he.fn.init(e, t);
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function () {
            return ee.call(this);
        },
        get: function (e) {
            return null == e ? ee.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return he.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                he.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(ee.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: ne,
        sort: J.sort,
        splice: J.splice,
    }),
        (he.extend = he.fn.extend = function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = e || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[u] || {}), u++), "object" == typeof s || ce(s) || (s = {}), u === l && ((s = this), u--); u < l; u++)
                if (null != (t = arguments[u]))
                    for (n in t)
                        (i = t[n]),
                            "__proto__" !== n &&
                                s !== i &&
                                (c && i && (he.isPlainObject(i) || (o = Array.isArray(i)))
                                    ? ((r = s[n]), (a = o && !Array.isArray(r) ? [] : o || he.isPlainObject(r) ? r : {}), (o = !1), (s[n] = he.extend(c, a, i)))
                                    : void 0 !== i && (s[n] = i));
            return s;
        }),
        he.extend({
            expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== oe.call(e) || ((t = Z(e)) && ("function" != typeof (n = ae.call(t, "constructor") && t.constructor) || se.call(n) !== ue)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t) {
                g(e, { nonce: t && t.nonce });
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (s(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ge, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : re.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (s(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return te.apply([], a);
            },
            guid: 1,
            support: le,
        }),
        "function" == typeof Symbol && (he.fn[Symbol.iterator] = J[Symbol.iterator]),
        he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            ie["[object " + t + "]"] = t.toLowerCase();
        });
    var ve = (function (n) {
        function b(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== L && N(t), (t = t || L), q)) {
                if (11 !== p && (u = me.exec(e)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && m.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n;
                    }
                if (m.qsa && !z[e + " "] && (!O || !O.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                    if (((c = e), (f = t), 1 === p && le.test(e))) {
                        for ((s = t.getAttribute("id")) ? (s = s.replace(we, Te)) : t.setAttribute("id", (s = M)), o = (l = k(e)).length; o--; ) l[o] = "#" + s + " " + h(l[o]);
                        (c = l.join(",")), (f = (ye.test(e) && d(t.parentNode)) || t);
                    }
                    try {
                        return J.apply(n, f.querySelectorAll(c)), n;
                    } catch (t) {
                        z(e, !0);
                    } finally {
                        s === M && t.removeAttribute("id");
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, r);
        }
        function e() {
            var n = [];
            return function r(e, t) {
                return n.push(e + " ") > T.cacheLength && delete r[n.shift()], (r[e + " "] = t);
            };
        }
        function u(e) {
            return (e[M] = !0), e;
        }
        function i(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) T.attrHandle[n[r]] = t;
        }
        function l(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function r(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function o(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function a(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ke(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function s(a) {
            return u(function (o) {
                return (
                    (o = +o),
                    u(function (e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function c() {}
        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function f(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = W++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var r,
                          i,
                          o,
                          a = [I, p];
                      if (n) {
                          for (; (e = e[u]); ) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                      } else
                          for (; (e = e[u]); )
                              if (1 === e.nodeType || f)
                                  if (((i = (o = e[M] || (e[M] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                                  else {
                                      if ((r = i[c]) && r[0] === I && r[1] === p) return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function p(i) {
            return 1 < i.length
                ? function (e, t, n) {
                      for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function w(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function y(d, h, g, v, m, e) {
            return (
                v && !v[M] && (v = y(v)),
                m && !m[M] && (m = y(m, e)),
                u(function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) b(e, t[r], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : w(c, s, d, n, r),
                        p = g ? (m || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) for (i = w(p, u), v(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (m || d) {
                            if (m) {
                                for (i = [], o = p.length; o--; ) (a = p[o]) && i.push((f[o] = a));
                                m(null, (p = []), i, r);
                            }
                            for (o = p.length; o--; ) (a = p[o]) && -1 < (i = m ? Z(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    } else (p = w(p === t ? p.splice(l, p.length) : p)), m ? m(null, t, p, r) : J.apply(t, p);
                })
            );
        }
        function g(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = T.relative[e[0].type],
                    a = o || T.relative[" "],
                    s = o ? 1 : 0,
                    u = f(
                        function (e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = f(
                        function (e) {
                            return -1 < Z(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (e, t, n) {
                            var r = (!o && (n || t !== S)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = T.relative[e[s].type])) c = [f(p(c), t)];
                else {
                    if ((t = T.filter[e[s].type].apply(null, e[s].matches))[M]) {
                        for (n = ++s; n < r && !T.relative[e[n].type]; n++);
                        return y(1 < s && p(c), 1 < s && h(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ae, "$1"), t, s < n && g(e.slice(s, n)), n < r && g((e = e.slice(n))), n < r && h(e));
                    }
                    c.push(t);
                }
            return p(c);
        }
        var v,
            m,
            T,
            x,
            C,
            k,
            E,
            D,
            S,
            j,
            A,
            N,
            L,
            _,
            q,
            O,
            H,
            P,
            R,
            M = "sizzle" + 1 * new Date(),
            $ = n.document,
            I = 0,
            W = 0,
            B = e(),
            F = e(),
            U = e(),
            z = e(),
            X = function (e, t) {
                return e === t && (A = !0), 0;
            },
            V = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            Q = G.push,
            J = G.push,
            K = G.slice,
            Z = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            te = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
            ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            oe = new RegExp(te + "+", "g"),
            ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
            se = new RegExp("^" + te + "*," + te + "*"),
            ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
            le = new RegExp(te + "|>"),
            ce = new RegExp(ie),
            fe = new RegExp("^" + ne + "$"),
            pe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i"),
            },
            de = /HTML$/i,
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
            be = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            Ce = function () {
                N();
            },
            ke = f(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            J.apply((G = K.call($.childNodes)), $.childNodes), G[$.childNodes.length].nodeType;
        } catch (v) {
            J = {
                apply: G.length
                    ? function (e, t) {
                          Q.apply(e, K.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        for (v in ((m = b.support = {}),
        (C = b.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !de.test(t || (n && n.nodeName) || "HTML");
        }),
        (N = b.setDocument = function (e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : $;
            return (
                r !== L &&
                    9 === r.nodeType &&
                    r.documentElement &&
                    ((_ = (L = r).documentElement),
                    (q = !C(L)),
                    $ !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                    (m.attributes = i(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (m.getElementsByTagName = i(function (e) {
                        return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (m.getElementsByClassName = ve.test(L.getElementsByClassName)),
                    (m.getById = i(function (e) {
                        return (_.appendChild(e).id = M), !L.getElementsByName || !L.getElementsByName(M).length;
                    })),
                    m.getById
                        ? ((T.filter.ID = function (e) {
                              var t = e.replace(xe, be);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (T.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && q) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((T.filter.ID = function (e) {
                              var n = e.replace(xe, be);
                              return function (e) {
                                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return t && t.value === n;
                              };
                          }),
                          (T.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && q) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (T.find.TAG = m.getElementsByTagName
                        ? function (e, t) {
                              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" !== e) return o;
                              for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                              return r;
                          }),
                    (T.find.CLASS =
                        m.getElementsByClassName &&
                        function (e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && q) return t.getElementsByClassName(e);
                        }),
                    (H = []),
                    (O = []),
                    (m.qsa = ve.test(L.querySelectorAll)) &&
                        (i(function (e) {
                            (_.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"),
                                e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="),
                                e.querySelectorAll(":checked").length || O.push(":checked"),
                                e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]");
                        }),
                        i(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = L.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                                (_.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                O.push(",.*:");
                        })),
                    (m.matchesSelector = ve.test((P = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector))) &&
                        i(function (e) {
                            (m.disconnectedMatch = P.call(e, "*")), P.call(e, "[s!='']:x"), H.push("!=", ie);
                        }),
                    (O = O.length && new RegExp(O.join("|"))),
                    (H = H.length && new RegExp(H.join("|"))),
                    (t = ve.test(_.compareDocumentPosition)),
                    (R =
                        t || ve.test(_.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      r = t && t.parentNode;
                                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (X = t
                        ? function (e, t) {
                              if (e === t) return (A = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!m.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e === L || (e.ownerDocument === $ && R($, e))
                                          ? -1
                                          : t === L || (t.ownerDocument === $ && R($, t))
                                          ? 1
                                          : j
                                          ? Z(j, e) - Z(j, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (A = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : j ? Z(j, e) - Z(j, t) : 0;
                              if (i === o) return l(e, t);
                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                              for (; a[r] === s[r]; ) r++;
                              return r ? l(a[r], s[r]) : a[r] === $ ? -1 : s[r] === $ ? 1 : 0;
                          })),
                L
            );
        }),
        (b.matches = function (e, t) {
            return b(e, null, null, t);
        }),
        (b.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== L && N(e), m.matchesSelector && q && !z[t + " "] && (!H || !H.test(t)) && (!O || !O.test(t))))
                try {
                    var n = P.call(e, t);
                    if (n || m.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    z(t, !0);
                }
            return 0 < b(t, L, null, [e]).length;
        }),
        (b.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && N(e), R(e, t);
        }),
        (b.attr = function (e, t) {
            (e.ownerDocument || e) !== L && N(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== r ? r : m.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
        (b.escape = function (e) {
            return (e + "").replace(we, Te);
        }),
        (b.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (b.uniqueSort = function (e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((A = !m.detectDuplicates), (j = !m.sortStable && e.slice(0)), e.sort(X), A)) {
                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                for (; r--; ) e.splice(n[r], 1);
            }
            return (j = null), e;
        }),
        (x = b.getText = function (e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += x(t);
            return n;
        }),
        ((T = b.selectors = {
            cacheLength: 50,
            createPseudo: u,
            match: pe,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(xe, be)), (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && b.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return pe.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = B[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
                            B(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, r, i) {
                    return function (e) {
                        var t = b.attr(e, n);
                        return null == t
                            ? "!=" === r
                            : !r ||
                                  ((t += ""),
                                  "=" === r
                                      ? t === i
                                      : "!=" === r
                                      ? t !== i
                                      : "^=" === r
                                      ? i && 0 === t.indexOf(i)
                                      : "*=" === r
                                      ? i && -1 < t.indexOf(i)
                                      : "$=" === r
                                      ? i && t.slice(-i.length) === i
                                      : "~=" === r
                                      ? -1 < (" " + t.replace(oe, " ") + " ").indexOf(i)
                                      : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (h, e, t, g, v) {
                    var m = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        x = "of-type" === e;
                    return 1 === g && 0 === v
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u,
                                  l = m !== y ? "nextSibling" : "previousSibling",
                                  c = e.parentNode,
                                  f = x && e.nodeName.toLowerCase(),
                                  p = !n && !x,
                                  d = !1;
                              if (c) {
                                  if (m) {
                                      for (; l; ) {
                                          for (a = e; (a = a[l]); ) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                          u = l = "only" === h && !u && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((u = [y ? c.firstChild : c.lastChild]), y && p)) {
                                      for (
                                          d = (s = (r = (i = (o = (a = c)[M] || (a[M] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === I && r[1]) && r[2], a = s && c.childNodes[s];
                                          (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                                      )
                                          if (1 === a.nodeType && ++d && a === e) {
                                              i[h] = [I, s, d];
                                              break;
                                          }
                                  } else if ((p && (d = s = (r = (i = (o = (a = e)[M] || (a[M] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === I && r[1]), !1 === d))
                                      for (
                                          ;
                                          (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                                          ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[M] || (a[M] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [I, d]), a !== e));

                                      );
                                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                              }
                          };
                },
                PSEUDO: function (e, o) {
                    var t,
                        a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                    return a[M]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, "", o]),
                          T.setFilters.hasOwnProperty(e.toLowerCase())
                              ? u(function (e, t) {
                                    for (var n, r = a(e, o), i = r.length; i--; ) e[(n = Z(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function (e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: u(function (e) {
                    var r = [],
                        i = [],
                        s = E(e.replace(ae, "$1"));
                    return s[M]
                        ? u(function (e, t, n, r) {
                              for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function (e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: u(function (t) {
                    return function (e) {
                        return 0 < b(t, e).length;
                    };
                }),
                contains: u(function (t) {
                    return (
                        (t = t.replace(xe, be)),
                        function (e) {
                            return -1 < (e.textContent || x(e)).indexOf(t);
                        }
                    );
                }),
                lang: u(function (n) {
                    return (
                        fe.test(n || "") || b.error("unsupported lang: " + n),
                        (n = n.replace(xe, be).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === _;
                },
                focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !T.pseudos.empty(e);
                },
                header: function (e) {
                    return ge.test(e.nodeName);
                },
                input: function (e) {
                    return he.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: s(function () {
                    return [0];
                }),
                last: s(function (e, t) {
                    return [t - 1];
                }),
                eq: s(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: s(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: s(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: s(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: s(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = T.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            T.pseudos[v] = r(v);
        for (v in { submit: !0, reset: !0 }) T.pseudos[v] = o(v);
        return (
            (c.prototype = T.filters = T.pseudos),
            (T.setFilters = new c()),
            (k = b.tokenize = function (e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = F[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = T.preFilter; a; ) {
                    for (o in ((n && !(r = se.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                    (n = !1),
                    (r = ue.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(ae, " ") }), (a = a.slice(n.length))),
                    T.filter))
                        !(r = pe[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? b.error(e) : F(e, s).slice(0);
            }),
            (E = b.compile = function (e, t) {
                var n,
                    v,
                    m,
                    y,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = U[e + " "];
                if (!a) {
                    for (t || (t = k(e)), n = t.length; n--; ) (a = g(t[n]))[M] ? i.push(a) : o.push(a);
                    (a = U(
                        e,
                        ((v = o),
                        (y = 0 < (m = i).length),
                        (x = 0 < v.length),
                        (r = function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u = 0,
                                l = "0",
                                c = e && [],
                                f = [],
                                p = S,
                                d = e || (x && T.find.TAG("*", i)),
                                h = (I += null == p ? 1 : Math.random() || 0.1),
                                g = d.length;
                            for (i && (S = t === L || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    for (a = 0, t || o.ownerDocument === L || (N(o), (n = !q)); (s = v[a++]); )
                                        if (s(o, t || L, n)) {
                                            r.push(o);
                                            break;
                                        }
                                    i && (I = h);
                                }
                                y && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (((u += l), y && l !== u)) {
                                for (a = 0; (s = m[a++]); ) s(c, f, t, n);
                                if (e) {
                                    if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = Y.call(r));
                                    f = w(f);
                                }
                                J.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && b.uniqueSort(r);
                            }
                            return i && ((I = h), (S = p)), c;
                        }),
                        y ? u(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (D = b.select = function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = "function" == typeof e && e,
                    c = !r && k((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && q && T.relative[o[1].type]) {
                        if (!(t = (T.find.ID(a.matches[0].replace(xe, be), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !T.relative[(s = a.type)]); )
                        if ((u = T.find[s]) && (r = u(a.matches[0].replace(xe, be), (ye.test(o[0].type) && d(t.parentNode)) || t))) {
                            if ((o.splice(i, 1), !(e = r.length && h(o)))) return J.apply(n, r), n;
                            break;
                        }
                }
                return (l || E(e, c))(r, t, !q, n, !t || (ye.test(e) && d(t.parentNode)) || t), n;
            }),
            (m.sortStable = M.split("").sort(X).join("") === M),
            (m.detectDuplicates = !!A),
            N(),
            (m.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
            })),
            i(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                t("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (m.attributes &&
                i(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                t("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            i(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                t(ee, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            b
        );
    })(C);
    (he.find = ve), (he.expr = ve.selectors), (he.expr[":"] = he.expr.pseudos), (he.uniqueSort = he.unique = ve.uniqueSort), (he.text = ve.getText), (he.isXMLDoc = ve.isXML), (he.contains = ve.contains), (he.escapeSelector = ve.escape);
    var me = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        ye = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        xe = he.expr.match.needsContext,
        be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    (he.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? he.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : he.find.matches(
                      e,
                      he.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        he.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        he(e).filter(function () {
                            for (t = 0; t < r; t++) if (he.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
                return 1 < r ? he.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(t(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(t(this, e || [], !0));
            },
            is: function (e) {
                return !!t(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length;
            },
        });
    var we,
        Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((he.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || we), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : ce(e) ? (void 0 !== n.ready ? n.ready(e) : e(he)) : he.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Te.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (((t = t instanceof he ? t[0] : t), he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), be.test(r[1]) && he.isPlainObject(t))) for (r in t) ce(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
        }
        return (i = K.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }).prototype = he.fn),
        (we = he(K));
    var Ce = /^(?:parents|prev(?:Until|All))/,
        ke = { children: !0, contents: !0, next: !0, prev: !0 };
    he.fn.extend({
        has: function (e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && he(e);
            if (!xe.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? he.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? re.call(he(e), this[0]) : re.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        he.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return me(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return me(e, "parentNode", n);
                },
                next: function (e) {
                    return n(e, "nextSibling");
                },
                prev: function (e) {
                    return n(e, "previousSibling");
                },
                nextAll: function (e) {
                    return me(e, "nextSibling");
                },
                prevAll: function (e) {
                    return me(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return me(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return me(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return ye((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return ye(e.firstChild);
                },
                contents: function (e) {
                    return "undefined" != typeof e.contentDocument ? e.contentDocument : (l(e, "template") && (e = e.content || e), he.merge([], e.childNodes));
                },
            },
            function (r, i) {
                he.fn[r] = function (e, t) {
                    var n = he.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = he.filter(t, n)), 1 < this.length && (ke[r] || he.uniqueSort(n), Ce.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var Ee = /[^\x20\t\r\n\f]+/g;
    (he.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  he.each(e.match(Ee) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : he.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length; ) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                he.each(e, function (e, t) {
                                    ce(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== v(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        he.each(arguments, function (e, t) {
                            for (var n; -1 < (n = he.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < he.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        he.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                        ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return he
                                .Deferred(function (r) {
                                    he.each(o, function (e, t) {
                                        var n = ce(i[t[4]]) && i[t[4]];
                                        s[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && ce(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                        });
                                    }),
                                        (i = null);
                                })
                                .promise();
                        },
                        then: function (t, n, r) {
                            function u(i, o, a, s) {
                                return function () {
                                    var n = this,
                                        r = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(i < l)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    ce(t)
                                                        ? s
                                                            ? t.call(e, u(l, o, c, s), u(l, o, f, s))
                                                            : (l++, t.call(e, u(l, o, c, s), u(l, o, f, s), u(l, o, c, o.notifyWith)))
                                                        : (a !== c && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (a !== f && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (he.Deferred.getStackHook && (t.stackTrace = he.Deferred.getStackHook()), C.setTimeout(t));
                                };
                            }
                            var l = 0;
                            return he
                                .Deferred(function (e) {
                                    o[0][3].add(u(0, e, ce(r) ? r : c, e.notifyWith)), o[1][3].add(u(0, e, ce(t) ? t : c)), o[2][3].add(u(0, e, ce(n) ? n : f));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? he.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    he.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = ee.call(arguments),
                    o = he.Deferred(),
                    a = function (t) {
                        return function (e) {
                            (r[t] = this), (i[t] = 1 < arguments.length ? ee.call(arguments) : e), --n || o.resolveWith(r, i);
                        };
                    };
                if (n <= 1 && (u(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || ce(i[t] && i[t].then))) return o.then();
                for (; t--; ) u(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (he.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && De.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (he.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var Se = he.Deferred();
    (he.fn.ready = function (e) {
        return (
            Se.then(e)["catch"](function (e) {
                he.readyException(e);
            }),
            this
        );
    }),
        he.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --he.readyWait : he.isReady) || ((he.isReady = !0) !== e && 0 < --he.readyWait) || Se.resolveWith(K, [he]);
            },
        }),
        (he.ready.then = Se.then),
        "complete" === K.readyState || ("loading" !== K.readyState && !K.documentElement.doScroll) ? C.setTimeout(he.ready) : (K.addEventListener("DOMContentLoaded", r), C.addEventListener("load", r));
    var je = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === v(n)) for (s in ((i = !0), n)) je(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                ce(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(he(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        Ae = /^-ms-/,
        Ne = /-([a-z])/g,
        Le = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
    (o.uid = 1),
        (o.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Le(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[p(t)] = n;
                else for (r in t) i[p(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in r ? [t] : t.match(Ee) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !he.isEmptyObject(t);
            },
        });
    var _e = new o(),
        qe = new o(),
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        He = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return qe.hasData(e) || _e.hasData(e);
        },
        data: function (e, t, n) {
            return qe.access(e, t, n);
        },
        removeData: function (e, t) {
            qe.remove(e, t);
        },
        _data: function (e, t, n) {
            return _e.access(e, t, n);
        },
        _removeData: function (e, t) {
            _e.remove(e, t);
        },
    }),
        he.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              qe.set(this, n);
                          })
                        : je(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e) return void 0 !== (t = qe.get(o, n)) ? t : void 0 !== (t = d(o, n)) ? t : void 0;
                                  this.each(function () {
                                      qe.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((i = qe.get(o)), 1 === o.nodeType && !_e.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--; ) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = p(r.slice(5))), d(o, r, i[r]));
                    _e.set(o, "hasDataAttrs", !0);
                }
                return i;
            },
            removeData: function (e) {
                return this.each(function () {
                    qe.remove(this, e);
                });
            },
        }),
        he.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = _e.get(e, t)), n && (!r || Array.isArray(n) ? (r = _e.access(e, t, he.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = he.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = he._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                he.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    _e.get(e, n) ||
                    _e.access(e, n, {
                        empty: he.Callbacks("once memory").add(function () {
                            _e.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        he.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? he.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = he.queue(this, t, n);
                              he._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    he.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = he.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = _e.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"],
        $e = K.documentElement,
        Ie = function (e) {
            return he.contains(e.ownerDocument, e);
        },
        We = { composed: !0 };
    $e.getRootNode &&
        (Ie = function (e) {
            return he.contains(e.ownerDocument, e) || e.getRootNode(We) === e.ownerDocument;
        });
    var Be = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && Ie(e) && "none" === he.css(e, "display"));
        },
        Fe = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
        },
        Ue = {};
    he.fn.extend({
        show: function () {
            return m(this, !0);
        },
        hide: function () {
            return m(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      Be(this) ? he(this).show() : he(this).hide();
                  });
        },
    });
    var ze = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ve = /^$|^module$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Ge.optgroup = Ge.option), (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead), (Ge.th = Ge.td);
    var Ye,
        Qe,
        Je = /<|&#?\w+;/;
    (Ye = K.createDocumentFragment().appendChild(K.createElement("div"))),
        (Qe = K.createElement("input")).setAttribute("type", "radio"),
        Qe.setAttribute("checked", "checked"),
        Qe.setAttribute("name", "t"),
        Ye.appendChild(Qe),
        (le.checkClone = Ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (Ye.innerHTML = "<textarea>x</textarea>"),
        (le.noCloneChecked = !!Ye.cloneNode(!0).lastChild.defaultValue);
    var Ke = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    (he.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = _e.get(t);
            if (v)
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && he.find.matchesSelector($e, i),
                        n.guid || (n.guid = he.guid++),
                        (u = v.events) || (u = v.events = {}),
                        (a = v.handle) ||
                            (a = v.handle = function (e) {
                                return void 0 !== he && he.event.triggered !== e.type ? he.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        l = (e = (e || "").match(Ee) || [""]).length;
                    l--;

                )
                    (d = g = (s = et.exec(e[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = he.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = he.event.special[d] || {}),
                            (c = he.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && he.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                            f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (he.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = _e.hasData(e) && _e.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(Ee) || [""]).length; l--; )
                    if (((d = g = (s = et.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        for (f = he.event.special[d] || {}, p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || he.removeEvent(e, d, v.handle), delete u[d]);
                    } else for (d in u) he.event.remove(e, d + t[l], n, r, !0);
                he.isEmptyObject(u) && _e.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = he.event.fix(e),
                u = new Array(arguments.length),
                l = (_e.get(this, "events") || {})[s.type] || [],
                c = he.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                for (a = he.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                            ((s.handleObj = o), (s.data = o.data), void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < he(i, this).index(l) : he.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(he.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ce(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[he.expando] ? e : new he.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return ze.test(t.type) && t.click && l(t, "input") && E(t, "click", a), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return ze.test(t.type) && t.click && l(t, "input") && E(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (ze.test(t.type) && t.click && l(t, "input") && _e.get(t, "click")) || l(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (he.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (he.Event = function (e, t) {
            if (!(this instanceof he.Event)) return new he.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? a : w),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && he.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[he.expando] = !0);
        }),
        (he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = a), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = a), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = a), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        he.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Ke.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ze.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            he.event.addProp
        ),
        he.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            he.event.special[e] = {
                setup: function () {
                    return E(this, e, T), !1;
                },
                trigger: function () {
                    return E(this, e), !0;
                },
                delegateType: t,
            };
        }),
        he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            he.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || he.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        he.fn.extend({
            on: function (e, t, n, r) {
                return k(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return k(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = w),
                        this.each(function () {
                            he.event.remove(this, e, n, t);
                        })
                    );
                for (i in e) this.off(i, t, e[i]);
                return this;
            },
        });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(tt, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = Ie(e);
            if (!(le.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || he.isXMLDoc(e)))
                for (a = y(c), r = 0, i = (o = y(e)).length; r < i; r++)
                    (s = o[r]), "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ze.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || y(e), a = a || y(c), r = 0, i = o.length; r < i; r++) A(o[r], a[r]);
                else A(e, c);
            return 0 < (a = y(c, "script")).length && x(a, !f && y(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Le(n)) {
                    if ((t = n[_e.expando])) {
                        if (t.events) for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[_e.expando] = void 0;
                    }
                    n[qe.expando] && (n[qe.expando] = void 0);
                }
        },
    }),
        he.fn.extend({
            detach: function (e) {
                return L(this, e, !0);
            },
            remove: function (e) {
                return L(this, e);
            },
            text: function (e) {
                return je(
                    this,
                    function (e) {
                        return void 0 === e
                            ? he.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return N(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || D(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return N(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return N(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return he.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return je(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !nt.test(e) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = he.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return N(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        he.inArray(this, n) < 0 && (he.cleanData(y(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            he.fn[e] = function (e) {
                for (var t, n = [], r = he(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), he(r[o])[a](t), ne.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var ot = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
        at = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        st = new RegExp(Me.join("|"), "i");
    !(function () {
        function e() {
            if (u) {
                (s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    $e.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                (n = "1%" !== e.top),
                    (a = 12 === t(e.marginLeft)),
                    (u.style.right = "60%"),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (u.style.position = "absolute"),
                    (i = 12 === t(u.offsetWidth / 3)),
                    $e.removeChild(s),
                    (u = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s = K.createElement("div"),
            u = K.createElement("div");
        u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (le.clearCloneStyle = "content-box" === u.style.backgroundClip),
            he.extend(le, {
                boxSizingReliable: function () {
                    return e(), r;
                },
                pixelBoxStyles: function () {
                    return e(), o;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), a;
                },
                scrollboxSize: function () {
                    return e(), i;
                },
            }));
    })();
    var ut = ["Webkit", "Moz", "ms"],
        lt = K.createElement("div").style,
        ct = {},
        ft = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        dt = { position: "absolute", visibility: "hidden", display: "block" },
        ht = { letterSpacing: "0", fontWeight: "400" };
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
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
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = p(t),
                    u = pt.test(t),
                    l = e.style;
                if ((u || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = Re.exec(n)) && i[1] && ((n = h(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (he.cssNumber[s] ? "" : "px")),
                        le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = p(t);
            return (
                pt.test(t) || (t = O(s)),
                (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = _(e, t, r)),
                "normal" === i && t in ht && (i = ht[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        he.each(["height", "width"], function (e, u) {
            he.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !ft.test(he.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? R(e, u, n)
                            : Fe(e, dt, function () {
                                  return R(e, u, n);
                              });
                },
                set: function (e, t, n) {
                    var r,
                        i = at(e),
                        o = !le.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === he.css(e, "boxSizing", !1, i),
                        s = n ? P(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - P(e, u, "border", !1, i) - 0.5)),
                        s && (r = Re.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = he.css(e, u))),
                        H(0, t, s)
                    );
                },
            };
        }),
        (he.cssHooks.marginLeft = q(le.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(_(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Fe(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        he.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (he.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Me[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (he.cssHooks[i + o].set = H);
        }),
        he.fn.extend({
            css: function (e, t) {
                return je(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? he.style(e, t, n) : he.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((he.Tween = M).prototype = {
            constructor: M,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || he.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (he.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = M.propHooks[this.prop];
                return e && e.get ? e.get(this) : M.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = M.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : M.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = M.prototype),
        ((M.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!he.cssHooks[e.prop] && null == e.elem.style[O(e.prop)]) ? (e.elem[e.prop] = e.now) : he.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = M.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (he.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (he.fx = M.prototype.init),
        (he.fx.step = {});
    var gt,
        vt,
        mt,
        yt,
        xt = /^(?:toggle|show|hide)$/,
        bt = /queueHooks$/;
    (he.Animation = he.extend(F, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Re.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            ce(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ee));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (F.tweeners[n] = F.tweeners[n] || []), F.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && Be(e),
                    v = _e.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = he._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            a.unqueued--, he.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), xt.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || he.style(e, r);
                    }
                if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) && (l = _e.get(e, "display")),
                        "none" === (c = he.css(e, "display")) && (l ? (c = l) : (m([e], !0), (l = e.style.display || l), (c = he.css(e, "display")), m([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === he.css(e, "float") &&
                            (u ||
                                (p.done(function () {
                                    h.display = l;
                                }),
                                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v ? "hidden" in v && (g = v.hidden) : (v = _e.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && m([e], !0),
                            p.done(function () {
                                for (r in (g || m([e]), _e.remove(e, "fxshow"), d)) he.style(e, r, d[r]);
                            })),
                            (u = B(g ? v[r] : 0, r, p)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? F.prefilters.unshift(e) : F.prefilters.push(e);
        },
    })),
        (he.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? he.extend({}, e) : { complete: n || (!n && t) || (ce(e) && e), duration: e, easing: (n && t) || (t && !ce(t) && t) };
            return (
                he.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in he.fx.speeds ? (r.duration = he.fx.speeds[r.duration]) : (r.duration = he.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    ce(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue);
                }),
                r
            );
        }),
        he.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Be).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                var i = he.isEmptyObject(t),
                    o = he.speed(e, n, r),
                    a = function () {
                        var e = F(this, he.extend({}, t), o);
                        (i || _e.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && !1 !== i && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = he.timers,
                            r = _e.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && bt.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || he.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = _e.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = he.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, he.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        he.each(["toggle", "show", "hide"], function (e, r) {
            var i = he.fn[r];
            he.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(W(r, !0), e, t, n);
            };
        }),
        he.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
            he.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (he.timers = []),
        (he.fx.tick = function () {
            var e,
                t = 0,
                n = he.timers;
            for (gt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), (gt = void 0);
        }),
        (he.fx.timer = function (e) {
            he.timers.push(e), he.fx.start();
        }),
        (he.fx.interval = 13),
        (he.fx.start = function () {
            vt || ((vt = !0), $());
        }),
        (he.fx.stop = function () {
            vt = null;
        }),
        (he.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (he.fn.delay = function (r, e) {
            return (
                (r = (he.fx && he.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (mt = K.createElement("input")),
        (yt = K.createElement("select").appendChild(K.createElement("option"))),
        (mt.type = "checkbox"),
        (le.checkOn = "" !== mt.value),
        (le.optSelected = yt.selected),
        ((mt = K.createElement("input")).value = "t"),
        (mt.type = "radio"),
        (le.radioValue = "t" === mt.value);
    var wt,
        Tt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return je(this, he.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e);
            });
        },
    }),
        he.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? he.prop(e, t, n)
                        : ((1 === o && he.isXMLDoc(e)) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? wt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void he.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = he.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!le.radioValue && "radio" === t && l(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(Ee);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
            },
        }),
        (wt = {
            set: function (e, t, n) {
                return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = Tt[t] || he.find.attr;
            Tt[t] = function (e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = Tt[o]), (Tt[o] = r), (r = null != a(e, t, n) ? o : null), (Tt[o] = i)), r;
            };
        });
    var Ct = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return je(this, he.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e];
            });
        },
    }),
        he.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && he.isXMLDoc(e)) || ((t = he.propFix[t] || t), (i = he.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ct.test(e.nodeName) || (kt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        le.optSelected ||
            (he.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            he.propFix[this.toLowerCase()] = this;
        }),
        he.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (ce(t))
                    return this.each(function (e) {
                        he(this).addClass(t.call(this, e, z(this)));
                    });
                if ((e = X(t)).length)
                    for (; (n = this[u++]); )
                        if (((i = z(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
                            for (a = 0; (o = e[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = U(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (ce(t))
                    return this.each(function (e) {
                        he(this).removeClass(t.call(this, e, z(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = X(t)).length)
                    for (; (n = this[u++]); )
                        if (((i = z(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
                            for (a = 0; (o = e[a++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                            i !== (s = U(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : ce(i)
                    ? this.each(function (e) {
                          he(this).toggleClass(i.call(this, e, z(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) for (t = 0, n = he(this), r = X(i); (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== i && "boolean" !== o) || ((e = z(this)) && _e.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : _e.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && -1 < (" " + U(z(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var Et = /\r/g;
    he.fn.extend({
        val: function (n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = ce(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, he(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = he.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((r = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (r = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(Et, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        he.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : U(he.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (((t = he(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < he.inArray(he.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        he.each(["radio", "checkbox"], function () {
            (he.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < he.inArray(he(e).val(), t));
                },
            }),
                le.checkOn ||
                    (he.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (le.focusin = "onfocusin" in C);
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
            e.stopPropagation();
        };
    he.extend(he.event, {
        trigger: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || K],
                d = ae.call(e, "type") ? e.type : e,
                h = ae.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((o = f = a = n = n || K),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Dt.test(d + he.event.triggered) &&
                    (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                    (u = d.indexOf(":") < 0 && "on" + d),
                    ((e = e[he.expando] ? e : new he.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : he.makeArray(t, [e])),
                    (c = he.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !fe(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                    a === (n.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || C);
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped(); )
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (_e.get(o, "events") || {})[e.type] && _e.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && Le(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !Le(n) ||
                        (u &&
                            ce(n[d]) &&
                            !fe(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (he.event.triggered = d),
                            e.isPropagationStopped() && f.addEventListener(d, St),
                            n[d](),
                            e.isPropagationStopped() && f.removeEventListener(d, St),
                            (he.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = he.extend(new he.Event(), n, { type: e, isSimulated: !0 });
            he.event.trigger(r, null, t);
        },
    }),
        he.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    he.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return he.event.trigger(e, t, n, !0);
            },
        }),
        le.focusin ||
            he.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                var i = function (e) {
                    he.event.simulate(r, e.target, he.event.fix(e));
                };
                he.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = _e.access(e, r);
                        t || e.addEventListener(n, i, !0), _e.access(e, r, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = _e.access(e, r) - 1;
                        t ? _e.access(e, r, t) : (e.removeEventListener(n, i, !0), _e.remove(e, r));
                    },
                };
            });
    var jt = C.location,
        At = Date.now(),
        Nt = /\?/;
    he.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || he.error("Invalid XML: " + e), t;
    };
    var Lt = /\[\]$/,
        _t = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    (he.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = ce(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !he.isPlainObject(e)))
            he.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) V(n, e[n], t, i);
        return r.join("&");
    }),
        he.fn.extend({
            serialize: function () {
                return he.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !he(this).is(":disabled") && Ot.test(this.nodeName) && !qt.test(e) && (this.checked || !ze.test(e));
                    })
                    .map(function (e, t) {
                        var n = he(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? he.map(n, function (e) {
                                  return { name: t.name, value: e.replace(_t, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(_t, "\r\n") };
                    })
                    .get();
            },
        });
    var Ht = /%20/g,
        Pt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Wt = {},
        Bt = {},
        Ft = "*/".concat("*"),
        Ut = K.createElement("a");
    (Ut.href = jt.href),
        he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e);
            },
            ajaxPrefilter: G(Wt),
            ajaxTransport: G(Bt),
            ajax: function (e, t) {
                function n(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ""),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        (s = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"]) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (he.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (he.etag[f] = u)),
                              204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                            : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ""),
                        i ? x.resolveWith(m, [o, l, T]) : x.rejectWith(m, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(m, [T, l]),
                        g && (y.trigger("ajaxComplete", [T, v]), --he.active || he.event.trigger("ajaxStop")));
                }
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    r,
                    d,
                    i,
                    h,
                    g,
                    o,
                    a,
                    v = he.ajaxSetup({}, t),
                    m = v.context || v,
                    y = v.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                    x = he.Deferred(),
                    b = he.Callbacks("once memory"),
                    w = v.statusCode || {},
                    s = {},
                    u = {},
                    l = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!r) for (r = {}; (t = Mt.exec(p)); ) r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = r[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == h && ((e = u[e.toLowerCase()] = u[e.toLowerCase()] || e), (s[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || l;
                            return c && c.abort(t), n(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || jt.href) + "").replace(It, jt.protocol + "//")),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || "*").toLowerCase().match(Ee) || [""]),
                    null == v.crossDomain)
                ) {
                    i = K.createElement("a");
                    try {
                        (i.href = v.url), (i.href = i.href), (v.crossDomain = Ut.protocol + "//" + Ut.host != i.protocol + "//" + i.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if ((v.data && v.processData && "string" != typeof v.data && (v.data = he.param(v.data, v.traditional)), Y(Wt, v, t, T), h)) return T;
                for (o in ((g = he.event && v.global) && 0 == he.active++ && he.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !$t.test(v.type)),
                (f = v.url.replace(Pt, "")),
                v.hasContent
                    ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Ht, "+"))
                    : ((a = v.url.slice(f.length)),
                      v.data && (v.processData || "string" == typeof v.data) && ((f += (Nt.test(f) ? "&" : "?") + v.data), delete v.data),
                      !1 === v.cache && ((f = f.replace(Rt, "$1")), (a = (Nt.test(f) ? "&" : "?") + "_=" + At++ + a)),
                      (v.url = f + a)),
                v.ifModified && (he.lastModified[f] && T.setRequestHeader("If-Modified-Since", he.lastModified[f]), he.etag[f] && T.setRequestHeader("If-None-Match", he.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : v.accepts["*"]),
                v.headers))
                    T.setRequestHeader(o, v.headers[o]);
                if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h)) return T.abort();
                if (((l = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Y(Bt, v, t, T)))) {
                    if (((T.readyState = 1), g && y.trigger("ajaxSend", [T, v]), h)) return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function () {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(s, n);
                    } catch (e) {
                        if (h) throw e;
                        n(-1, e);
                    }
                } else n(-1, "No Transport");
                return T;
            },
            getJSON: function (e, t, n) {
                return he.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return he.get(e, void 0, t, "script");
            },
        }),
        he.each(["get", "post"], function (e, i) {
            he[i] = function (e, t, n, r) {
                return ce(t) && ((r = r || n), (n = t), (t = void 0)), he.ajax(he.extend({ url: e, type: i, dataType: r, data: t, success: n }, he.isPlainObject(e) && e));
            };
        }),
        (he._evalUrl = function (e, t) {
            return he.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    he.globalEval(e, t);
                },
            });
        }),
        he.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (ce(e) && (e = e.call(this[0])),
                        (t = he(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return ce(n)
                    ? this.each(function (e) {
                          he(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = he(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = ce(t);
                return this.each(function (e) {
                    he(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            he(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (he.expr.pseudos.hidden = function (e) {
            return !he.expr.pseudos.visible(e);
        }),
        (he.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (he.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var zt = { 0: 200, 1223: 204 },
        Xt = he.ajaxSettings.xhr();
    (le.cors = !!Xt && "withCredentials" in Xt),
        (le.ajax = Xt = !!Xt),
        he.ajaxTransport(function (i) {
            var o, a;
            if (le.cors || (Xt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(zt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          C.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        he.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        he.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return he.globalEval(e), e;
                },
            },
        }),
        he.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        he.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = he("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            K.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Vt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Gt.pop() || he.expando + "_" + At++;
            return (this[e] = !0), e;
        },
    }),
        he.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = ce(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Yt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function () {
                        return o || he.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === i ? he(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)), o && ce(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (le.createHTMLDocument = (((Vt = K.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Vt.childNodes.length)),
        (he.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (le.createHTMLDocument ? (((r = (t = K.implementation.createHTMLDocument("")).createElement("base")).href = K.location.href), t.head.appendChild(r)) : (t = K)),
                  (o = !n && []),
                  (i = be.exec(e)) ? [t.createElement(i[1])] : ((i = b([e], t, o)), o && o.length && he(o).remove(), he.merge([], i.childNodes)));
            var r, i, o;
        }),
        (he.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((r = U(e.slice(s))), (e = e.slice(0, s))),
                ce(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                    he
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            he.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (he.expr.pseudos.animated = function (t) {
            return he.grep(he.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (he.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = he.css(e, "position"),
                    c = he(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = he.css(e, "top")),
                    (u = he.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    ce(t) && (t = t.call(e, n, he.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        he.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              he.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === he.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === he.css(e, "position"); ) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = he(e).offset()).top += he.css(e, "borderTopWidth", !0)), (i.left += he.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - he.css(r, "marginTop", !0), left: t.left - i.left - he.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === he.css(e, "position"); ) e = e.offsetParent;
                    return e || $e;
                });
            },
        }),
        he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
            var o = "pageYOffset" === i;
            he.fn[t] = function (e) {
                return je(
                    this,
                    function (e, t, n) {
                        var r;
                        if ((fe(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        he.each(["top", "left"], function (e, n) {
            he.cssHooks[n] = q(le.pixelPosition, function (e, t) {
                if (t) return (t = _(e, n)), ot.test(t) ? he(e).position()[n] + "px" : t;
            });
        }),
        he.each({ Height: "height", Width: "width" }, function (a, s) {
            he.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                he.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return je(
                        this,
                        function (e, t, n) {
                            var r;
                            return fe(e)
                                ? 0 === o.indexOf("outer")
                                    ? e["inner" + a]
                                    : e.document.documentElement["client" + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                : void 0 === n
                                ? he.css(e, t, i)
                                : he.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            he.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        }),
        he.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        he.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (he.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ce(e)))
                return (
                    (r = ee.call(arguments, 2)),
                    ((i = function () {
                        return e.apply(t || this, r.concat(ee.call(arguments)));
                    }).guid = e.guid = e.guid || he.guid++),
                    i
                );
        }),
        (he.holdReady = function (e) {
            e ? he.readyWait++ : he.ready(!0);
        }),
        (he.isArray = Array.isArray),
        (he.parseJSON = JSON.parse),
        (he.nodeName = l),
        (he.isFunction = ce),
        (he.isWindow = fe),
        (he.camelCase = p),
        (he.type = v),
        (he.now = Date.now),
        (he.isNumeric = function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return he;
            });
    var Qt = C.jQuery,
        Jt = C.$;
    return (
        (he.noConflict = function (e) {
            return C.$ === he && (C.$ = Jt), e && C.jQuery === he && (C.jQuery = Qt), he;
        }),
        e || (C.jQuery = C.$ = he),
        he
    );
}),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.clipboard = t()) : (e.clipboard = t());
    })("undefined" != typeof self ? self : this, function () {
        function i(e) {
            if (r[e]) return r[e].exports;
            var t = (r[e] = { i: e, l: !1, exports: {} });
            return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
        }
        return (
            (n = [
                function (e, t, n) {
                    "use strict";
                    function r(e) {
                        x = e;
                    }
                    function i() {
                        (b = !1), y.suppressDTWarnings();
                    }
                    function o(t) {
                        return v(this, void 0, void 0, function () {
                            var e;
                            return m(this, function () {
                                if (
                                    (b &&
                                        !t.getData(T) &&
                                        w("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),
                                    g())
                                ) {
                                    if (
                                        (function () {
                                            var e = t.getData(T);
                                            if (void 0 === e) throw "No `text/plain` value was specified.";
                                            return window.clipboardData.setData("Text", e);
                                        })()
                                    )
                                        return [2];
                                    throw "Copying failed, possibly because the user rejected it.";
                                }
                                if (c(t)) return x("regular execCopy worked"), [2];
                                if (-1 < navigator.userAgent.indexOf("Edge")) return x('UA "Edge" => assuming success'), [2];
                                if (f(document.body, t)) return x("copyUsingTempSelection worked"), [2];
                                if (
                                    (function (e) {
                                        var t = document.createElement("div");
                                        t.setAttribute("style", "-webkit-user-select: text !important"), (t.textContent = "temporary element"), document.body.appendChild(t);
                                        var n = f(t, e);
                                        return document.body.removeChild(t), n;
                                    })(t)
                                )
                                    return x("copyUsingTempElem worked"), [2];
                                if (
                                    void 0 !== (e = t.getData(T)) &&
                                    (function (e) {
                                        x("copyTextUsingDOM");
                                        var t = document.createElement("div");
                                        t.setAttribute("style", "-webkit-user-select: text !important");
                                        var n = t;
                                        t.attachShadow && (x("Using shadow DOM."), (n = t.attachShadow({ mode: "open" })));
                                        var r = document.createElement("span");
                                        (r.innerText = e), n.appendChild(r), document.body.appendChild(t), p(r);
                                        var i = document.execCommand("copy");
                                        return d(), document.body.removeChild(t), i;
                                    })(e)
                                )
                                    return x("copyTextUsingDOM worked"), [2];
                                throw "Copy command failed.";
                            });
                        });
                    }
                    function a(e) {
                        return v(this, void 0, void 0, function () {
                            return m(this, function () {
                                return navigator.clipboard && navigator.clipboard.writeText ? (x("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(e)]) : [2, o(h(e))];
                            });
                        });
                    }
                    function s() {
                        return v(this, void 0, void 0, function () {
                            var t;
                            return m(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return (t = h), [4, u()];
                                    case 1:
                                        return [2, t.apply(void 0, [e.sent()])];
                                }
                            });
                        });
                    }
                    function u() {
                        return v(this, void 0, void 0, function () {
                            return m(this, function () {
                                if (navigator.clipboard && navigator.clipboard.readText) return x("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()];
                                if (g())
                                    return (
                                        x("Reading text using IE strategy."),
                                        [
                                            2,
                                            (function () {
                                                return v(this, void 0, void 0, function () {
                                                    var e;
                                                    return m(this, function () {
                                                        if ("" === (e = window.clipboardData.getData("Text"))) throw "Empty clipboard or could not read plain text from clipboard";
                                                        return [2, e];
                                                    });
                                                });
                                            })(),
                                        ]
                                    );
                                throw "Read is not supported in your browser.";
                            });
                        });
                    }
                    function l() {
                        C ||
                            (b &&
                                w(
                                    'The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'
                                ),
                            (C = !0));
                    }
                    function c(e) {
                        var t = new E(),
                            n = function (r, e, i) {
                                x("listener called"),
                                    (r.success = !0),
                                    e.forEach(function (e, t) {
                                        var n = i.clipboardData;
                                        n.setData(t, e), t === T && n.getData(t) != e && (x("setting text/plain failed"), (r.success = !1));
                                    }),
                                    i.preventDefault();
                            }.bind(this, t, e);
                        document.addEventListener("copy", n);
                        try {
                            document.execCommand("copy");
                        } finally {
                            document.removeEventListener("copy", n);
                        }
                        return t.success;
                    }
                    function f(e, t) {
                        p(e);
                        var n = c(t);
                        return d(), n;
                    }
                    function p(e) {
                        var t = document.getSelection();
                        if (t) {
                            var n = document.createRange();
                            n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n);
                        }
                    }
                    function d() {
                        var e = document.getSelection();
                        e && e.removeAllRanges();
                    }
                    function h(e) {
                        var t = new y.DT();
                        return t.setData(T, e), t;
                    }
                    function g() {
                        return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData;
                    }
                    var v =
                            (this && this.__awaiter) ||
                            function (t, a, s, u) {
                                return new (s || (s = Promise))(function (e, n) {
                                    function r(e) {
                                        try {
                                            o(u.next(e));
                                        } catch (t) {
                                            n(t);
                                        }
                                    }
                                    function i(e) {
                                        try {
                                            o(u["throw"](e));
                                        } catch (t) {
                                            n(t);
                                        }
                                    }
                                    function o(t) {
                                        t.done
                                            ? e(t.value)
                                            : new s(function (e) {
                                                  e(t.value);
                                              }).then(r, i);
                                    }
                                    o((u = u.apply(t, a || [])).next());
                                });
                            },
                        m =
                            (this && this.__generator) ||
                            function (n, r) {
                                function e(t) {
                                    return function (e) {
                                        return (function (e) {
                                            if (i) throw new TypeError("Generator is already executing.");
                                            for (; s; )
                                                try {
                                                    if (((i = 1), o && (a = 2 & e[0] ? o["return"] : e[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done)) return a;
                                                    switch (((o = 0), a && (e = [2 & e[0], a.value]), e[0])) {
                                                        case 0:
                                                        case 1:
                                                            a = e;
                                                            break;
                                                        case 4:
                                                            return s.label++, { value: e[1], done: !1 };
                                                        case 5:
                                                            s.label++, (o = e[1]), (e = [0]);
                                                            continue;
                                                        case 7:
                                                            (e = s.ops.pop()), s.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                                                s = 0;
                                                                continue;
                                                            }
                                                            if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                                                                s.label = e[1];
                                                                break;
                                                            }
                                                            if (6 === e[0] && s.label < a[1]) {
                                                                (s.label = a[1]), (a = e);
                                                                break;
                                                            }
                                                            if (a && s.label < a[2]) {
                                                                (s.label = a[2]), s.ops.push(e);
                                                                break;
                                                            }
                                                            a[2] && s.ops.pop(), s.trys.pop();
                                                            continue;
                                                    }
                                                    e = r.call(n, s);
                                                } catch (t) {
                                                    (e = [6, t]), (o = 0);
                                                } finally {
                                                    i = a = 0;
                                                }
                                            if (5 & e[0]) throw e[1];
                                            return { value: e[0] ? e[1] : void 0, done: !0 };
                                        })([t, e]);
                                    };
                                }
                                var i,
                                    o,
                                    a,
                                    t,
                                    s = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & a[0]) throw a[1];
                                            return a[1];
                                        },
                                        trys: [],
                                        ops: [],
                                    };
                                return (
                                    (t = { next: e(0), throw: e(1), return: e(2) }),
                                    "function" == typeof Symbol &&
                                        (t[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                    t
                                );
                            };
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var y = n(1);
                    t.DT = y.DT;
                    var x = function () {},
                        b = !0,
                        w = function () {
                            (console.warn || console.log).apply(console, arguments);
                        }.bind("[clipboard-polyfill]"),
                        T = "text/plain";
                    (t.setDebugLog = r), (t.suppressWarnings = i), (t.write = o), (t.writeText = a), (t.read = s), (t.readText = u);
                    var C = !1,
                        k = (function () {
                            function e() {}
                            return (
                                (e.setDebugLog = function (e) {
                                    return l(), r(e);
                                }),
                                (e.suppressWarnings = function () {
                                    return l(), i();
                                }),
                                (e.write = function (e) {
                                    return v(this, void 0, void 0, function () {
                                        return m(this, function () {
                                            return l(), [2, o(e)];
                                        });
                                    });
                                }),
                                (e.writeText = function (e) {
                                    return v(this, void 0, void 0, function () {
                                        return m(this, function () {
                                            return l(), [2, a(e)];
                                        });
                                    });
                                }),
                                (e.read = function () {
                                    return v(this, void 0, void 0, function () {
                                        return m(this, function () {
                                            return l(), [2, s()];
                                        });
                                    });
                                }),
                                (e.readText = function () {
                                    return v(this, void 0, void 0, function () {
                                        return m(this, function () {
                                            return l(), [2, u()];
                                        });
                                    });
                                }),
                                (e.DT = y.DT),
                                e
                            );
                        })();
                    t["default"] = k;
                    var E = function () {
                        this.success = !1;
                    };
                },
                function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 });
                    var n = ["text/plain", "text/html"],
                        r = function () {
                            (console.warn || console.log).call(arguments);
                        }.bind(console, "[clipboard-polyfill]"),
                        i = !0;
                    t.suppressDTWarnings = function () {
                        i = !1;
                    };
                    var o = (function () {
                        function e() {
                            this.m = {};
                        }
                        return (
                            (e.prototype.setData = function (e, t) {
                                i && -1 === n.indexOf(e) && r("Unknown data type: " + e, "Call clipboard.suppressWarnings() to suppress this warning."), (this.m[e] = t);
                            }),
                            (e.prototype.getData = function (e) {
                                return this.m[e];
                            }),
                            (e.prototype.forEach = function (e) {
                                for (var t in this.m) e(this.m[t], t);
                            }),
                            e
                        );
                    })();
                    t.DT = o;
                },
            ]),
            (r = {}),
            (i.m = n),
            (i.c = r),
            (i.d = function (e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (i.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var r in t)
                        i.d(
                            n,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return n;
            }),
            (i.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e["default"];
                          }
                        : function () {
                              return e;
                          };
                return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            i((i.s = 0))
        );
        var n, r;
    }),
    (function () {
        function e() {
            $(".form-nav__link").on("click touch", function () {
                var e = $(this).index();
                $(".form-nav__link_active").removeClass("form-nav__link_active"),
                    $(this).addClass("form-nav__link_active"),
                    $(".form-box__item_active").removeClass("form-box__item_active"),
                    $(".form-box__item").eq(e).addClass("form-box__item_active");
            }),
                $(".form-nav__link").on("mouseenter", function () {
                    var e = $(this).index();
                    $(".form-slider__item").removeClass("form-slider__item_1, form-slider__item_2"), $(".form-slider__item").addClass("form-slider__item_" + (e + 1));
                }),
                $(".form-nav__link").on("mouseleave", function () {
                    var e = $(".form-nav__link_active").index();
                    $(".form-slider__item").removeClass("form-slider__item_1, form-slider__item_2"), $(".form-slider__item").addClass("form-slider__item_" + (e + 1));
                });
        }
        function t() {
            $(".free__button").on("click touch", function () {
                var e = $(".free__input").val(),
                    t = "";
                "" != e &&
                    ((t = "https://blimey.pro/" + (e = (e = (e = (e = (e = e.replace("t.me/", "")).replace("http://", "")).replace("https://", "")).replace("blimey.pro/", "")).replace("@", ""))),
                    $(".free__input").val(t),
                    $(".free__button").text("\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!"),
                    clipboard.writeText(t),
                    setTimeout(function () {
                        $(".free__button").text("\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443");
                    }, 1e3));
            });
        }
        $(document).ready(function () {
            e(), t(), ym(85948406, "init", { clickmap: !0, trackLinks: !0, accurateTrackBounce: !0 });
        });
    })();
