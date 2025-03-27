! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function(L, x) {
    "use strict";
    var e = [],
        q = L.document,
        R = Object.getPrototypeOf,
        r = e.slice,
        k = e.concat,
        D = e.push,
        o = e.indexOf,
        c = {},
        P = c.toString,
        H = c.hasOwnProperty,
        I = H.toString,
        j = I.call(Object),
        A = {};

    function U(e, t) {
        var c = (t = t || q).createElement("script");
        c.text = e, t.head.appendChild(c).parentNode.removeChild(c)
    }

    function F(e, t) {
        return t.toUpperCase()
    }
    var t = "3.1.1",
        N = function(e, t) {
            return new N.fn.init(e, t)
        },
        Y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        G = /^-ms-/,
        K = /-([a-z])/g;

    function V(e) {
        var t = !!e && "length" in e && e.length,
            c = N.type(e);
        return "function" !== c && !N.isWindow(e) && ("array" === c || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    N.fn = N.prototype = {
        jquery: t,
        constructor: N,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = N.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return N.each(this, e)
        },
        map: function(c) {
            return this.pushStack(N.map(this, function(e, t) {
                return c.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: D,
        sort: e.sort,
        splice: e.splice
    }, N.extend = N.fn.extend = function() {
        var e, t, c, n, o, i = arguments[0] || {},
            a = 1,
            r = arguments.length,
            M = !1;
        for ("boolean" == typeof i && (M = i, i = arguments[a] || {}, a++), "object" == typeof i || N.isFunction(i) || (i = {}), a === r && (i = this, a--); a < r; a++)
            if (null != (e = arguments[a]))
                for (t in e) o = i[t], i !== (c = e[t]) && (M && c && (N.isPlainObject(c) || (n = N.isArray(c))) ? (o = n ? (n = !1, o && N.isArray(o) ? o : []) : o && N.isPlainObject(o) ? o : {}, i[t] = N.extend(M, o, c)) : void 0 !== c && (i[t] = c));
        return i
    }, N.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === N.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = N.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== P.call(e) || (e = R(e)) && ("function" != typeof(e = H.call(e, "constructor") && e.constructor) || I.call(e) !== j))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[P.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            U(e)
        },
        camelCase: function(e) {
            return e.replace(G, "ms-").replace(K, F)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var c, n = 0;
            if (V(e))
                for (c = e.length; n < c && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Y, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (V(Object(e)) ? N.merge(t, "string" == typeof e ? [e] : e) : D.call(t, e)), t
        },
        inArray: function(e, t, c) {
            return null == t ? -1 : o.call(t, e, c)
        },
        merge: function(e, t) {
            for (var c = +t.length, n = 0, o = e.length; n < c; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, c) {
            for (var n = [], o = 0, i = e.length, a = !c; o < i; o++) !t(e[o], o) != a && n.push(e[o]);
            return n
        },
        map: function(e, t, c) {
            var n, o, i = 0,
                a = [];
            if (V(e))
                for (n = e.length; i < n; i++) null != (o = t(e[i], i, c)) && a.push(o);
            else
                for (i in e) null != (o = t(e[i], i, c)) && a.push(o);
            return k.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var c, n;
            if ("string" == typeof t && (n = e[t], t = e, e = n), N.isFunction(e)) return c = r.call(arguments, 2), (n = function() {
                return e.apply(t || this, c.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || N.guid++, n
        },
        now: Date.now,
        support: A
    }), "function" == typeof Symbol && (N.fn[Symbol.iterator] = e[Symbol.iterator]), N.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function n(e, t, c) {
        for (var n = [], o = void 0 !== c;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && N(e).is(c)) break;
                n.push(e)
            }
        return n
    }

    function Q(e, t) {
        for (var c = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && c.push(e);
        return c
    }
    var t = function(x) {
            function p(e, t, c) {
                var n = "0x" + t - 65536;
                return n != n || c ? t : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }

            function R(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }

            function k() {
                q()
            }
            var e, d, O, i, D, f, P, H, L, M, s, q, N, c, g, A, n, o, b, W = "sizzle" + +new Date,
                z = x.document,
                T = 0,
                I = 0,
                j = p0(),
                U = p0(),
                h = p0(),
                F = function(e, t) {
                    return e === t && (s = !0), 0
                },
                Y = {}.hasOwnProperty,
                t = [],
                G = t.pop,
                K = t.push,
                y = t.push,
                V = t.slice,
                m = function(e, t) {
                    for (var c = 0, n = e.length; c < n; c++)
                        if (e[c] === t) return c;
                    return -1
                },
                Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                a = "[\\x20\\t\\r\\n\\f]",
                r = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                J = "\\[" + a + "*(" + r + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + r + "))|)" + a + "*\\]",
                Z = ":(" + r + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)",
                $ = new RegExp(a + "+", "g"),
                v = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
                e0 = new RegExp("^" + a + "*," + a + "*"),
                t0 = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
                c0 = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
                n0 = new RegExp(Z),
                o0 = new RegExp("^" + r + "$"),
                l = {
                    ID: new RegExp("^#(" + r + ")"),
                    CLASS: new RegExp("^\\.(" + r + ")"),
                    TAG: new RegExp("^(" + r + "|[*])"),
                    ATTR: new RegExp("^" + J),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Q + ")$", "i"),
                    needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
                },
                i0 = /^(?:input|select|textarea|button)$/i,
                a0 = /^h\d$/i,
                u = /^[^{]+\{\s*\[native \w/,
                r0 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                M0 = /[+~]/,
                X = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"),
                s0 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                u0 = _(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                y.apply(t = V.call(z.childNodes), z.childNodes), t[z.childNodes.length].nodeType
            } catch (e) {
                y = {
                    apply: t.length ? function(e, t) {
                        K.apply(e, V.call(t))
                    } : function(e, t) {
                        for (var c = e.length, n = 0; e[c++] = t[n++];);
                        e.length = c - 1
                    }
                }
            }

            function B(e, t, c, n) {
                var o, i, a, r, M, s, u, p = t && t.ownerDocument,
                    l = t ? t.nodeType : 9;
                if (c = c || [], "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l) return c;
                if (!n && ((t ? t.ownerDocument || t : z) !== N && q(t), t = t || N, g)) {
                    if (11 !== l && (M = r0.exec(e)))
                        if (o = M[1]) {
                            if (9 === l) {
                                if (!(a = t.getElementById(o))) return c;
                                if (a.id === o) return c.push(a), c
                            } else if (p && (a = p.getElementById(o)) && b(t, a) && a.id === o) return c.push(a), c
                        } else {
                            if (M[2]) return y.apply(c, t.getElementsByTagName(e)), c;
                            if ((o = M[3]) && d.getElementsByClassName && t.getElementsByClassName) return y.apply(c, t.getElementsByClassName(o)), c
                        }
                    if (d.qsa && !h[e + " "] && (!A || !A.test(e))) {
                        if (1 !== l) p = t, u = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((r = t.getAttribute("id")) ? r = r.replace(s0, R) : t.setAttribute("id", r = W), i = (s = f(e)).length; i--;) s[i] = "#" + r + " " + E(s[i]);
                            u = s.join(","), p = M0.test(e) && A0(t.parentNode) || t
                        }
                        if (u) try {
                            return y.apply(c, p.querySelectorAll(u)), c
                        } catch (e) {} finally {
                            r === W && t.removeAttribute("id")
                        }
                    }
                }
                return H(e.replace(v, "$1"), t, c, n)
            }

            function p0() {
                var c = [];

                function n(e, t) {
                    return c.push(e + " ") > O.cacheLength && delete n[c.shift()], n[e + " "] = t
                }
                return n
            }

            function S(e) {
                return e[W] = !0, e
            }

            function C(e) {
                var t = N.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }

            function l0(e, t) {
                for (var c = e.split("|"), n = c.length; n--;) O.attrHandle[c[n]] = t
            }

            function d0(e, t) {
                var c = t && e,
                    n = c && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n) return n;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === t) return -1;
                return e ? 1 : -1
            }

            function f0(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && u0(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function w(a) {
                return S(function(i) {
                    return i = +i, S(function(e, t) {
                        for (var c, n = a([], e.length, i), o = n.length; o--;) e[c = n[o]] && (e[c] = !(t[c] = e[c]))
                    })
                })
            }

            function A0(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in d = B.support = {}, D = B.isXML = function(e) {
                    e = e && (e.ownerDocument || e).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, q = B.setDocument = function(e) {
                    var e = e ? e.ownerDocument || e : z;
                    return e !== N && 9 === e.nodeType && e.documentElement && (c = (N = e).documentElement, g = !D(N), z !== N && (e = N.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", k, !1) : e.attachEvent && e.attachEvent("onunload", k)), d.attributes = C(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), d.getElementsByTagName = C(function(e) {
                        return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                    }), d.getElementsByClassName = u.test(N.getElementsByClassName), d.getById = C(function(e) {
                        return c.appendChild(e).id = W, !N.getElementsByName || !N.getElementsByName(W).length
                    }), d.getById ? (O.filter.ID = function(e) {
                        var t = e.replace(X, p);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, O.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) return (t = t.getElementById(e)) ? [t] : []
                    }) : (O.filter.ID = function(e) {
                        var t = e.replace(X, p);
                        return function(e) {
                            e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return e && e.value === t
                        }
                    }, O.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var c, n, o, i = t.getElementById(e);
                            if (i) {
                                if ((c = i.getAttributeNode("id")) && c.value === e) return [i];
                                for (o = t.getElementsByName(e), n = 0; i = o[n++];)
                                    if ((c = i.getAttributeNode("id")) && c.value === e) return [i]
                            }
                            return []
                        }
                    }), O.find.TAG = d.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var c, n = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" !== e) return i;
                        for (; c = i[o++];) 1 === c.nodeType && n.push(c);
                        return n
                    }, O.find.CLASS = d.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, n = [], A = [], (d.qsa = u.test(N.querySelectorAll)) && (C(function(e) {
                        c.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + a + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + W + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || A.push(".#.+[+~]")
                    }), C(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = N.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + a + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && A.push(":enabled", ":disabled"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
                    })), (d.matchesSelector = u.test(o = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.oMatchesSelector || c.msMatchesSelector)) && C(function(e) {
                        d.disconnectedMatch = o.call(e, "*"), o.call(e, "[s!='']:x"), n.push("!=", Z)
                    }), A = A.length && new RegExp(A.join("|")), n = n.length && new RegExp(n.join("|")), e = u.test(c.compareDocumentPosition), b = e || u.test(c.contains) ? function(e, t) {
                        var c = 9 === e.nodeType ? e.documentElement : e,
                            t = t && t.parentNode;
                        return e === t || !(!t || 1 !== t.nodeType || !(c.contains ? c.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, F = e ? function(e, t) {
                        var c;
                        return e === t ? (s = !0, 0) : (c = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (c = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === c ? e === N || e.ownerDocument === z && b(z, e) ? -1 : t === N || t.ownerDocument === z && b(z, t) ? 1 : M ? m(M, e) - m(M, t) : 0 : 4 & c ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return s = !0, 0;
                        var c, n = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            r = [t];
                        if (!o || !i) return e === N ? -1 : t === N ? 1 : o ? -1 : i ? 1 : M ? m(M, e) - m(M, t) : 0;
                        if (o === i) return d0(e, t);
                        for (c = e; c = c.parentNode;) a.unshift(c);
                        for (c = t; c = c.parentNode;) r.unshift(c);
                        for (; a[n] === r[n];) n++;
                        return n ? d0(a[n], r[n]) : a[n] === z ? -1 : r[n] === z ? 1 : 0
                    }), N
                }, B.matches = function(e, t) {
                    return B(e, null, null, t)
                }, B.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== N && q(e), t = t.replace(c0, "='$1']"), d.matchesSelector && g && !h[t + " "] && (!n || !n.test(t)) && (!A || !A.test(t))) try {
                        var c = o.call(e, t);
                        if (c || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return c
                    } catch (e) {}
                    return 0 < B(t, N, null, [e]).length
                }, B.contains = function(e, t) {
                    return (e.ownerDocument || e) !== N && q(e), b(e, t)
                }, B.attr = function(e, t) {
                    (e.ownerDocument || e) !== N && q(e);
                    var c = O.attrHandle[t.toLowerCase()],
                        c = c && Y.call(O.attrHandle, t.toLowerCase()) ? c(e, t, !g) : void 0;
                    return void 0 !== c ? c : d.attributes || !g ? e.getAttribute(t) : (c = e.getAttributeNode(t)) && c.specified ? c.value : null
                }, B.escape = function(e) {
                    return (e + "").replace(s0, R)
                }, B.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, B.uniqueSort = function(e) {
                    var t, c = [],
                        n = 0,
                        o = 0;
                    if (s = !d.detectDuplicates, M = !d.sortStable && e.slice(0), e.sort(F), s) {
                        for (; t = e[o++];) t === e[o] && (n = c.push(o));
                        for (; n--;) e.splice(c[n], 1)
                    }
                    return M = null, e
                }, i = B.getText = function(e) {
                    var t, c = "",
                        n = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) c += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[n++];) c += i(t);
                    return c
                }, (O = B.selectors = {
                    cacheLength: 50,
                    createPseudo: S,
                    match: l,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(X, p), e[3] = (e[3] || e[4] || e[5] || "").replace(X, p), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || B.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && B.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, c = !e[6] && e[2];
                            return l.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : c && n0.test(c) && (t = (t = f(c, !0)) && c.indexOf(")", c.length - t) - c.length) && (e[0] = e[0].slice(0, t), e[2] = c.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(X, p).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = j[e + " "];
                            return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && j(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, c, n) {
                            return function(e) {
                                e = B.attr(e, t);
                                return null == e ? "!=" === c : !c || (e += "", "=" === c ? e === n : "!=" === c ? e !== n : "^=" === c ? n && 0 === e.indexOf(n) : "*=" === c ? n && -1 < e.indexOf(n) : "$=" === c ? n && e.slice(-n.length) === n : "~=" === c ? -1 < (" " + e.replace($, " ") + " ").indexOf(n) : "|=" === c && (e === n || e.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(f, e, t, A, b) {
                            var z = "nth" !== f.slice(0, 3),
                                h = "last" !== f.slice(-4),
                                m = "of-type" === e;
                            return 1 === A && 0 === b ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, c) {
                                var n, o, i, a, r, M, s = z != h ? "nextSibling" : "previousSibling",
                                    u = e.parentNode,
                                    p = m && e.nodeName.toLowerCase(),
                                    l = !c && !m,
                                    d = !1;
                                if (u) {
                                    if (z) {
                                        for (; s;) {
                                            for (a = e; a = a[s];)
                                                if (m ? a.nodeName.toLowerCase() === p : 1 === a.nodeType) return !1;
                                            M = s = "only" === f && !M && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (M = [h ? u.firstChild : u.lastChild], h && l) {
                                        for (d = (r = (n = (o = (i = (a = u)[W] || (a[W] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] || [])[0] === T && n[1]) && n[2], a = r && u.childNodes[r]; a = ++r && a && a[s] || (d = r = 0, M.pop());)
                                            if (1 === a.nodeType && ++d && a === e) {
                                                o[f] = [T, r, d];
                                                break
                                            }
                                    } else if (!1 === (d = l ? r = (n = (o = (i = (a = e)[W] || (a[W] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] || [])[0] === T && n[1] : d))
                                        for (;
                                            (a = ++r && a && a[s] || (d = r = 0, M.pop())) && ((m ? a.nodeName.toLowerCase() !== p : 1 !== a.nodeType) || !++d || (l && ((o = (i = a[W] || (a[W] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[f] = [T, d]), a !== e)););
                                    return (d -= b) === A || d % A == 0 && 0 <= d / A
                                }
                            }
                        },
                        PSEUDO: function(e, i) {
                            var t, a = O.pseudos[e] || O.setFilters[e.toLowerCase()] || B.error("unsupported pseudo: " + e);
                            return a[W] ? a(i) : 1 < a.length ? (t = [e, e, "", i], O.setFilters.hasOwnProperty(e.toLowerCase()) ? S(function(e, t) {
                                for (var c, n = a(e, i), o = n.length; o--;) e[c = m(e, n[o])] = !(t[c] = n[o])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: S(function(e) {
                            var n = [],
                                o = [],
                                r = P(e.replace(v, "$1"));
                            return r[W] ? S(function(e, t, c, n) {
                                for (var o, i = r(e, null, n, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, t, c) {
                                return n[0] = e, r(n, null, c, o), n[0] = null, !o.pop()
                            }
                        }),
                        has: S(function(t) {
                            return function(e) {
                                return 0 < B(t, e).length
                            }
                        }),
                        contains: S(function(t) {
                            return t = t.replace(X, p),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || i(e)).indexOf(t)
                                }
                        }),
                        lang: S(function(c) {
                            return o0.test(c || "") || B.error("unsupported lang: " + c), c = c.replace(X, p).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === c || 0 === t.indexOf(c + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = x.location && x.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === c
                        },
                        focus: function(e) {
                            return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: f0(!1),
                        disabled: f0(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !O.pseudos.empty(e)
                        },
                        header: function(e) {
                            return a0.test(e.nodeName)
                        },
                        input: function(e) {
                            return i0.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: w(function() {
                            return [0]
                        }),
                        last: w(function(e, t) {
                            return [t - 1]
                        }),
                        eq: w(function(e, t, c) {
                            return [c < 0 ? c + t : c]
                        }),
                        even: w(function(e, t) {
                            for (var c = 0; c < t; c += 2) e.push(c);
                            return e
                        }),
                        odd: w(function(e, t) {
                            for (var c = 1; c < t; c += 2) e.push(c);
                            return e
                        }),
                        lt: w(function(e, t, c) {
                            for (var n = c < 0 ? c + t : c; 0 <= --n;) e.push(n);
                            return e
                        }),
                        gt: w(function(e, t, c) {
                            for (var n = c < 0 ? c + t : c; ++n < t;) e.push(n);
                            return e
                        })
                    }
                }).pseudos.nth = O.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) O.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) O.pseudos[e] = function(c) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === c
                }
            }(e);

            function b0() {}

            function E(e) {
                for (var t = 0, c = e.length, n = ""; t < c; t++) n += e[t].value;
                return n
            }

            function _(a, e, t) {
                var r = e.dir,
                    M = e.next,
                    s = M || r,
                    u = t && "parentNode" === s,
                    p = I++;
                return e.first ? function(e, t, c) {
                    for (; e = e[r];)
                        if (1 === e.nodeType || u) return a(e, t, c);
                    return !1
                } : function(e, t, c) {
                    var n, o, i = [T, p];
                    if (c) {
                        for (; e = e[r];)
                            if ((1 === e.nodeType || u) && a(e, t, c)) return !0
                    } else
                        for (; e = e[r];)
                            if (1 === e.nodeType || u)
                                if (o = (o = e[W] || (e[W] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), M && M === e.nodeName.toLowerCase()) e = e[r] || e;
                                else {
                                    if ((n = o[s]) && n[0] === T && n[1] === p) return i[2] = n[2];
                                    if ((o[s] = i)[2] = a(e, t, c)) return !0
                                } return !1
                }
            }

            function z0(o) {
                return 1 < o.length ? function(e, t, c) {
                    for (var n = o.length; n--;)
                        if (!o[n](e, t, c)) return !1;
                    return !0
                } : o[0]
            }

            function h0(e, t, c, n, o) {
                for (var i, a = [], r = 0, M = e.length, s = null != t; r < M; r++) !(i = e[r]) || c && !c(i, n, o) || (a.push(i), s && t.push(r));
                return a
            }

            function m0(d, f, A, b, z, e) {
                return b && !b[W] && (b = m0(b)), z && !z[W] && (z = m0(z, e)), S(function(e, t, c, n) {
                    var o, i, a, r = [],
                        M = [],
                        s = t.length,
                        u = e || function(e, t, c) {
                            for (var n = 0, o = t.length; n < o; n++) B(e, t[n], c);
                            return c
                        }(f || "*", c.nodeType ? [c] : c, []),
                        p = !d || !e && f ? u : h0(u, r, d, c, n),
                        l = A ? z || (e ? d : s || b) ? [] : t : p;
                    if (A && A(p, l, c, n), b)
                        for (o = h0(l, M), b(o, [], c, n), i = o.length; i--;)(a = o[i]) && (l[M[i]] = !(p[M[i]] = a));
                    if (e) {
                        if (z || d) {
                            if (z) {
                                for (o = [], i = l.length; i--;)(a = l[i]) && o.push(p[i] = a);
                                z(null, l = [], o, n)
                            }
                            for (i = l.length; i--;)(a = l[i]) && -1 < (o = z ? m(e, a) : r[i]) && (e[o] = !(t[o] = a))
                        }
                    } else l = h0(l === t ? l.splice(s, l.length) : l), z ? z(null, t, l, n) : y.apply(t, l)
                })
            }

            function O0(b, z) {
                function e(e, t, c, n, o) {
                    var i, a, r, M = 0,
                        s = "0",
                        u = e && [],
                        p = [],
                        l = L,
                        d = e || m && O.find.TAG("*", o),
                        f = T += null == l ? 1 : Math.random() || .1,
                        A = d.length;
                    for (o && (L = t === N || t || o); s !== A && null != (i = d[s]); s++) {
                        if (m && i) {
                            for (a = 0, t || i.ownerDocument === N || (q(i), c = !g); r = b[a++];)
                                if (r(i, t || N, c)) {
                                    n.push(i);
                                    break
                                }
                            o && (T = f)
                        }
                        h && ((i = !r && i) && M--, e) && u.push(i)
                    }
                    if (M += s, h && s !== M) {
                        for (a = 0; r = z[a++];) r(u, p, t, c);
                        if (e) {
                            if (0 < M)
                                for (; s--;) u[s] || p[s] || (p[s] = G.call(n));
                            p = h0(p)
                        }
                        y.apply(n, p), o && !e && 0 < p.length && 1 < M + z.length && B.uniqueSort(n)
                    }
                    return o && (T = f, L = l), u
                }
                var h = 0 < z.length,
                    m = 0 < b.length;
                return h ? S(e) : e
            }
            return b0.prototype = O.filters = O.pseudos, O.setFilters = new b0, f = B.tokenize = function(e, t) {
                var c, n, o, i, a, r, M, s = U[e + " "];
                if (s) return t ? 0 : s.slice(0);
                for (a = e, r = [], M = O.preFilter; a;) {
                    for (i in c && !(n = e0.exec(a)) || (n && (a = a.slice(n[0].length) || a), r.push(o = [])), c = !1, (n = t0.exec(a)) && (c = n.shift(), o.push({
                            value: c,
                            type: n[0].replace(v, " ")
                        }), a = a.slice(c.length)), O.filter) !(n = l[i].exec(a)) || M[i] && !(n = M[i](n)) || (c = n.shift(), o.push({
                        value: c,
                        type: i,
                        matches: n
                    }), a = a.slice(c.length));
                    if (!c) break
                }
                return t ? a.length : a ? B.error(e) : U(e, r).slice(0)
            }, P = B.compile = function(e, t) {
                var c, n = [],
                    o = [],
                    i = h[e + " "];
                if (!i) {
                    for (c = (t = t || f(e)).length; c--;)((i = function e(t) {
                        for (var n, c, o, i = t.length, a = O.relative[t[0].type], r = a || O.relative[" "], M = a ? 1 : 0, s = _(function(e) {
                                return e === n
                            }, r, !0), u = _(function(e) {
                                return -1 < m(n, e)
                            }, r, !0), p = [function(e, t, c) {
                                return e = !a && (c || t !== L) || ((n = t).nodeType ? s : u)(e, t, c), n = null, e
                            }]; M < i; M++)
                            if (c = O.relative[t[M].type]) p = [_(z0(p), c)];
                            else {
                                if ((c = O.filter[t[M].type].apply(null, t[M].matches))[W]) {
                                    for (o = ++M; o < i && !O.relative[t[o].type]; o++);
                                    return m0(1 < M && z0(p), 1 < M && E(t.slice(0, M - 1).concat({
                                        value: " " === t[M - 2].type ? "*" : ""
                                    })).replace(v, "$1"), c, M < o && e(t.slice(M, o)), o < i && e(t = t.slice(o)), o < i && E(t))
                                }
                                p.push(c)
                            }
                        return z0(p)
                    }(t[c]))[W] ? n : o).push(i);
                    (i = h(e, O0(o, n))).selector = e
                }
                return i
            }, H = B.select = function(e, t, c, n) {
                var o, i, a, r, M, s = "function" == typeof e && e,
                    u = !n && f(e = s.selector || e);
                if (c = c || [], 1 === u.length) {
                    if (2 < (i = u[0] = u[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && g && O.relative[i[1].type]) {
                        if (!(t = (O.find.ID(a.matches[0].replace(X, p), t) || [])[0])) return c;
                        s && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = l.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !O.relative[r = a.type]);)
                        if ((M = O.find[r]) && (n = M(a.matches[0].replace(X, p), M0.test(i[0].type) && A0(t.parentNode) || t))) {
                            if (i.splice(o, 1), e = n.length && E(i)) break;
                            return y.apply(c, n), c
                        }
                }
                return (s || P(e, u))(n, t, !g, c, !t || M0.test(e) && A0(t.parentNode) || t), c
            }, d.sortStable = W.split("").sort(F).join("") === W, d.detectDuplicates = !!s, q(), d.sortDetached = C(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
            }), C(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || l0("type|href|height|width", function(e, t, c) {
                if (!c) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), d.attributes && C(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || l0("value", function(e, t, c) {
                if (!c && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), C(function(e) {
                return null == e.getAttribute("disabled")
            }) || l0(Q, function(e, t, c) {
                if (!c) return !0 === e[t] ? t.toLowerCase() : (c = e.getAttributeNode(t)) && c.specified ? c.value : null
            }), B
        }(L),
        J = (N.find = t, N.expr = t.selectors, N.expr[":"] = N.expr.pseudos, N.uniqueSort = N.unique = t.uniqueSort, N.text = t.getText, N.isXMLDoc = t.isXML, N.contains = t.contains, N.escapeSelector = t.escape, N.expr.match.needsContext),
        Z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        $ = /^.[^:#\[\.,]*$/;

    function e0(e, c, n) {
        return N.isFunction(c) ? N.grep(e, function(e, t) {
            return !!c.call(e, t, e) !== n
        }) : c.nodeType ? N.grep(e, function(e) {
            return e === c !== n
        }) : "string" != typeof c ? N.grep(e, function(e) {
            return -1 < o.call(c, e) !== n
        }) : $.test(c) ? N.filter(c, e, n) : (c = N.filter(c, e), N.grep(e, function(e) {
            return -1 < o.call(c, e) !== n && 1 === e.nodeType
        }))
    }
    N.filter = function(e, t, c) {
        var n = t[0];
        return c && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? N.find.matchesSelector(n, e) ? [n] : [] : N.find.matches(e, N.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, N.fn.extend({
        find: function(e) {
            var t, c, n = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(N(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (N.contains(o[t], this)) return !0
            }));
            for (c = this.pushStack([]), t = 0; t < n; t++) N.find(e, o[t], c);
            return 1 < n ? N.uniqueSort(c) : c
        },
        filter: function(e) {
            return this.pushStack(e0(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(e0(this, e || [], !0))
        },
        is: function(e) {
            return !!e0(this, "string" == typeof e && J.test(e) ? N(e) : e || [], !1).length
        }
    });
    var t0, c0 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        n0 = ((N.fn.init = function(e, t, c) {
            if (e) {
                if (c = c || t0, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : N.isFunction(e) ? void 0 !== c.ready ? c.ready(e) : e(N) : N.makeArray(e, this);
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : c0.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || c : this.constructor(t)).find(e);
                if (n[1]) {
                    if (t = t instanceof N ? t[0] : t, N.merge(this, N.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : q, !0)), Z.test(n[1]) && N.isPlainObject(t))
                        for (var n in t) N.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
                } else(c = q.getElementById(n[2])) && (this[0] = c, this.length = 1)
            }
            return this
        }).prototype = N.fn, t0 = N(q), /^(?:parents|prev(?:Until|All))/),
        o0 = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function i0(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    N.fn.extend({
        has: function(e) {
            var t = N(e, this),
                c = t.length;
            return this.filter(function() {
                for (var e = 0; e < c; e++)
                    if (N.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var c, n = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && N(e);
            if (!J.test(e))
                for (; n < o; n++)
                    for (c = this[n]; c && c !== t; c = c.parentNode)
                        if (c.nodeType < 11 && (a ? -1 < a.index(c) : 1 === c.nodeType && N.find.matchesSelector(c, e))) {
                            i.push(c);
                            break
                        }
            return this.pushStack(1 < i.length ? N.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(N(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(N.uniqueSort(N.merge(this.get(), N(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), N.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return n(e, "parentNode")
        },
        parentsUntil: function(e, t, c) {
            return n(e, "parentNode", c)
        },
        next: function(e) {
            return i0(e, "nextSibling")
        },
        prev: function(e) {
            return i0(e, "previousSibling")
        },
        nextAll: function(e) {
            return n(e, "nextSibling")
        },
        prevAll: function(e) {
            return n(e, "previousSibling")
        },
        nextUntil: function(e, t, c) {
            return n(e, "nextSibling", c)
        },
        prevUntil: function(e, t, c) {
            return n(e, "previousSibling", c)
        },
        siblings: function(e) {
            return Q((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Q(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || N.merge([], e.childNodes)
        }
    }, function(n, o) {
        N.fn[n] = function(e, t) {
            var c = N.map(this, o, e);
            return (t = "Until" !== n.slice(-5) ? e : t) && "string" == typeof t && (c = N.filter(t, c)), 1 < this.length && (o0[n] || N.uniqueSort(c), n0.test(n)) && c.reverse(), this.pushStack(c)
        }
    });
    var g = /[^\x20\t\r\n\f]+/g;

    function u(e) {
        return e
    }

    function a0(e) {
        throw e
    }

    function r0(e, t, c) {
        var n;
        try {
            e && N.isFunction(n = e.promise) ? n.call(e).done(t).fail(c) : e && N.isFunction(n = e.then) ? n.call(e, t, c) : t.call(void 0, e)
        } catch (e) {
            c.call(void 0, e)
        }
    }
    N.Callbacks = function(n) {
        var e, c;
        n = "string" == typeof n ? (e = n, c = {}, N.each(e.match(g) || [], function(e, t) {
            c[t] = !0
        }), c) : N.extend({}, n);

        function o() {
            for (r = n.once, a = i = !0; s.length; u = -1)
                for (t = s.shift(); ++u < M.length;) !1 === M[u].apply(t[0], t[1]) && n.stopOnFalse && (u = M.length, t = !1);
            n.memory || (t = !1), i = !1, r && (M = t ? [] : "")
        }
        var i, t, a, r, M = [],
            s = [],
            u = -1,
            p = {
                add: function() {
                    return M && (t && !i && (u = M.length - 1, s.push(t)), function c(e) {
                        N.each(e, function(e, t) {
                            N.isFunction(t) ? n.unique && p.has(t) || M.push(t) : t && t.length && "string" !== N.type(t) && c(t)
                        })
                    }(arguments), t) && !i && o(), this
                },
                remove: function() {
                    return N.each(arguments, function(e, t) {
                        for (var c; - 1 < (c = N.inArray(t, M, c));) M.splice(c, 1), c <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < N.inArray(e, M) : 0 < M.length
                },
                empty: function() {
                    return M = M && [], this
                },
                disable: function() {
                    return r = s = [], M = t = "", this
                },
                disabled: function() {
                    return !M
                },
                lock: function() {
                    return r = s = [], t || i || (M = t = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), i) || o(), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return p
    }, N.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", N.Callbacks("memory"), N.Callbacks("memory"), 2],
                    ["resolve", "done", N.Callbacks("once memory"), N.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", N.Callbacks("once memory"), N.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                a = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return N.Deferred(function(n) {
                            N.each(i, function(e, t) {
                                var c = N.isFunction(o[t[4]]) && o[t[4]];
                                r[t[1]](function() {
                                    var e = c && c.apply(this, arguments);
                                    e && N.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, c ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, c, n) {
                        var M = 0;

                        function s(o, i, a, r) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < M)) {
                                        if ((e = a.apply(c, n)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, N.isFunction(t) ? r ? t.call(e, s(M, i, u, r), s(M, i, a0, r)) : (M++, t.call(e, s(M, i, u, r), s(M, i, a0, r), s(M, i, u, i.notifyWith))) : (a !== u && (c = void 0, n = [e]), (r || i.resolveWith)(c, n))
                                    }
                                }
                                var c = this,
                                    n = arguments,
                                    t = r ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            N.Deferred.exceptionHook && N.Deferred.exceptionHook(e, t.stackTrace), M <= o + 1 && (a !== a0 && (c = void 0, n = [e]), i.rejectWith(c, n))
                                        }
                                    };
                                o ? t() : (N.Deferred.getStackHook && (t.stackTrace = N.Deferred.getStackHook()), L.setTimeout(t))
                            }
                        }
                        return N.Deferred(function(e) {
                            i[0][3].add(s(0, e, N.isFunction(n) ? n : u, e.notifyWith)), i[1][3].add(s(0, e, N.isFunction(t) ? t : u)), i[2][3].add(s(0, e, N.isFunction(c) ? c : a0))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? N.extend(e, a) : a
                    }
                },
                r = {};
            return N.each(i, function(e, t) {
                var c = t[2],
                    n = t[5];
                a[t[1]] = c.add, n && c.add(function() {
                    o = n
                }, i[3 - e][2].disable, i[0][2].lock), c.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = c.fireWith
            }), a.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, i[t] = 1 < arguments.length ? r.call(arguments) : e, --c || a.resolveWith(o, i)
                }
            }
            var c = arguments.length,
                n = c,
                o = Array(n),
                i = r.call(arguments),
                a = N.Deferred();
            if (c <= 1 && (r0(e, a.done(t(n)).resolve, a.reject), "pending" === a.state() || N.isFunction(i[n] && i[n].then))) return a.then();
            for (; n--;) r0(i[n], t(n), a.reject);
            return a.promise()
        }
    });
    var M0 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        s0 = (N.Deferred.exceptionHook = function(e, t) {
            L.console && L.console.warn && e && M0.test(e.name) && L.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, N.readyException = function(e) {
            L.setTimeout(function() {
                throw e
            })
        }, N.Deferred());

    function u0() {
        q.removeEventListener("DOMContentLoaded", u0), L.removeEventListener("load", u0), N.ready()
    }
    N.fn.ready = function(e) {
        return s0.then(e).catch(function(e) {
            N.readyException(e)
        }), this
    }, N.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? N.readyWait++ : N.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --N.readyWait : N.isReady) || (N.isReady = !0) !== e && 0 < --N.readyWait || s0.resolveWith(q, [N])
        }
    }), N.ready.then = s0.then, "complete" === q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? L.setTimeout(N.ready) : (q.addEventListener("DOMContentLoaded", u0), L.addEventListener("load", u0));

    function p(e, t, c, n, o, i, a) {
        var r = 0,
            M = e.length,
            s = null == c;
        if ("object" === N.type(c))
            for (r in o = !0, c) p(e, t, r, c[r], !0, i, a);
        else if (void 0 !== n && (o = !0, N.isFunction(n) || (a = !0), t = s ? a ? (t.call(e, n), null) : (s = t, function(e, t, c) {
                return s.call(N(e), c)
            }) : t))
            for (; r < M; r++) t(e[r], c, a ? n : n.call(e[r], r, t(e[r], c)));
        return o ? e : s ? t.call(e) : M ? t(e[0], c) : i
    }

    function p0(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function i() {
        this.expando = N.expando + i.uid++
    }
    i.uid = 1, i.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, p0(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, c) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[N.camelCase(t)] = c;
            else
                for (n in t) o[N.camelCase(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][N.camelCase(t)]
        },
        access: function(e, t, c) {
            return void 0 === t || t && "string" == typeof t && void 0 === c ? this.get(e, t) : (this.set(e, t, c), void 0 !== c ? c : t)
        },
        remove: function(e, t) {
            var c, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    c = (t = N.isArray(t) ? t.map(N.camelCase) : (t = N.camelCase(t)) in n ? [t] : t.match(g) || []).length;
                    for (; c--;) delete n[t[c]]
                }
                void 0 !== t && !N.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !N.isEmptyObject(e)
        }
    };
    var z = new i,
        M = new i,
        l0 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        d0 = /[A-Z]/g;

    function f0(e, t, c) {
        var n, o;
        if (void 0 === c && 1 === e.nodeType)
            if (n = "data-" + t.replace(d0, "-$&").toLowerCase(), "string" == typeof(c = e.getAttribute(n))) {
                try {
                    c = "true" === (o = c) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : l0.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                M.set(e, t, c)
            } else c = void 0;
        return c
    }
    N.extend({
        hasData: function(e) {
            return M.hasData(e) || z.hasData(e)
        },
        data: function(e, t, c) {
            return M.access(e, t, c)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, c) {
            return z.access(e, t, c)
        },
        _removeData: function(e, t) {
            z.remove(e, t)
        }
    }), N.fn.extend({
        data: function(c, e) {
            var t, n, o, i = this[0],
                a = i && i.attributes;
            if (void 0 !== c) return "object" == typeof c ? this.each(function() {
                M.set(this, c)
            }) : p(this, function(e) {
                var t;
                if (i && void 0 === e) return void 0 !== (t = M.get(i, c)) || void 0 !== (t = f0(i, c)) ? t : void 0;
                this.each(function() {
                    M.set(this, c, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = M.get(i), 1 === i.nodeType) && !z.get(i, "hasDataAttrs")) {
                for (t = a.length; t--;) a[t] && 0 === (n = a[t].name).indexOf("data-") && (n = N.camelCase(n.slice(5)), f0(i, n, o[n]));
                z.set(i, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), N.extend({
        queue: function(e, t, c) {
            var n;
            if (e) return n = z.get(e, t = (t || "fx") + "queue"), c && (!n || N.isArray(c) ? n = z.access(e, t, N.makeArray(c)) : n.push(c)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var c = N.queue(e, t),
                n = c.length,
                o = c.shift(),
                i = N._queueHooks(e, t);
            "inprogress" === o && (o = c.shift(), n--), o && ("fx" === t && c.unshift("inprogress"), delete i.stop, o.call(e, function() {
                N.dequeue(e, t)
            }, i)), !n && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var c = t + "queueHooks";
            return z.get(e, c) || z.access(e, c, {
                empty: N.Callbacks("once memory").add(function() {
                    z.remove(e, [t + "queue", c])
                })
            })
        }
    }), N.fn.extend({
        queue: function(t, c) {
            var e = 2;
            return "string" != typeof t && (c = t, t = "fx", e--), arguments.length < e ? N.queue(this[0], t) : void 0 === c ? this : this.each(function() {
                var e = N.queue(this, t, c);
                N._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && N.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                N.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function c() {
                --o || i.resolveWith(a, [a])
            }
            var n, o = 1,
                i = N.Deferred(),
                a = this,
                r = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = z.get(a[r], e + "queueHooks")) && n.empty && (o++, n.empty.add(c));
            return c(), i.promise(t)
        }
    });

    function A0(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && N.contains(e.ownerDocument, e) && "none" === N.css(e, "display")
    }

    function b0(e, t, c, n) {
        var o, i = {};
        for (o in t) i[o] = e.style[o], e.style[o] = t[o];
        for (o in c = c.apply(e, n || []), t) e.style[o] = i[o];
        return c
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        l = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        s = ["Top", "Right", "Bottom", "Left"];

    function z0(e, t, c, n) {
        var o, i = 1,
            a = 20,
            r = n ? function() {
                return n.cur()
            } : function() {
                return N.css(e, t, "")
            },
            M = r(),
            s = c && c[3] || (N.cssNumber[t] ? "" : "px"),
            u = (N.cssNumber[t] || "px" !== s && +M) && l.exec(N.css(e, t));
        if (u && u[3] !== s)
            for (s = s || u[3], c = c || [], u = +M || 1; u /= i = i || ".5", N.style(e, t, u + s), i !== (i = r() / M) && 1 !== i && --a;);
        return c && (u = +u || +M || 0, o = c[1] ? u + (c[1] + 1) * c[2] : +c[2], n) && (n.unit = s, n.start = u, n.end = o), o
    }
    var h0 = {};

    function b(e, t) {
        for (var c, n, o, i, a, r = [], M = 0, s = e.length; M < s; M++)(n = e[M]).style && (c = n.style.display, t ? ("none" === c && (r[M] = z.get(n, "display") || null, r[M] || (n.style.display = "")), "" === n.style.display && A0(n) && (r[M] = (a = i = void 0, i = (o = n).ownerDocument, o = o.nodeName, (a = h0[o]) || (i = i.body.appendChild(i.createElement(o)), a = N.css(i, "display"), i.parentNode.removeChild(i), h0[o] = a = "none" === a ? "block" : a), a))) : "none" !== c && (r[M] = "none", z.set(n, "display", c)));
        for (M = 0; M < s; M++) null != r[M] && (e[M].style.display = r[M]);
        return e
    }
    N.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                A0(this) ? N(this).show() : N(this).hide()
            })
        }
    });
    var m0 = /^(?:checkbox|radio)$/i,
        O0 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        L0 = /^$|\/(?:java|ecma)script/i,
        f = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function h(e, t) {
        var c = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && N.nodeName(e, t) ? N.merge([e], c) : c
    }

    function q0(e, t) {
        for (var c = 0, n = e.length; c < n; c++) z.set(e[c], "globalEval", !t || z.get(t[c], "globalEval"))
    }
    f.optgroup = f.option, f.tbody = f.tfoot = f.colgroup = f.caption = f.thead, f.th = f.td;
    var N0 = /<|&#?\w+;/;

    function g0(e, t, c, n, o) {
        for (var i, a, r, M, s, u = t.createDocumentFragment(), p = [], l = 0, d = e.length; l < d; l++)
            if ((i = e[l]) || 0 === i)
                if ("object" === N.type(i)) N.merge(p, i.nodeType ? [i] : i);
                else if (N0.test(i)) {
            for (a = a || u.appendChild(t.createElement("div")), r = (O0.exec(i) || ["", ""])[1].toLowerCase(), r = f[r] || f._default, a.innerHTML = r[1] + N.htmlPrefilter(i) + r[2], s = r[0]; s--;) a = a.lastChild;
            N.merge(p, a.childNodes), (a = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(i));
        for (u.textContent = "", l = 0; i = p[l++];)
            if (n && -1 < N.inArray(i, n)) o && o.push(i);
            else if (M = N.contains(i.ownerDocument, i), a = h(u.appendChild(i), "script"), M && q0(a), c)
            for (s = 0; i = a[s++];) L0.test(i.type || "") && c.push(i);
        return u
    }
    t = q.createDocumentFragment().appendChild(q.createElement("div")), (X = q.createElement("input")).setAttribute("type", "radio"), X.setAttribute("checked", "checked"), X.setAttribute("name", "t"), t.appendChild(X), A.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", A.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var W0 = q.documentElement,
        T0 = /^key/,
        y0 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        v0 = /^([^.]*)(?:\.(.+)|)/;

    function X0() {
        return !0
    }

    function d() {
        return !1
    }

    function B0() {
        try {
            return q.activeElement
        } catch (e) {}
    }

    function S0(e, t, c, n, o, i) {
        var a, r;
        if ("object" == typeof t) {
            for (r in "string" != typeof c && (n = n || c, c = void 0), t) S0(e, r, c, n, t[r], i);
            return e
        }
        if (null == n && null == o ? (o = c, n = c = void 0) : null == o && ("string" == typeof c ? (o = n, n = void 0) : (o = n, n = c, c = void 0)), !1 === o) o = d;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return N().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = N.guid++)), e.each(function() {
            N.event.add(this, t, o, n, c)
        })
    }
    N.event = {
        global: {},
        add: function(t, e, c, n, o) {
            var i, a, r, M, s, u, p, l, d, f = z.get(t);
            if (f)
                for (c.handler && (c = (i = c).handler, o = i.selector), o && N.find.matchesSelector(W0, o), c.guid || (c.guid = N.guid++), r = (r = f.events) || (f.events = {}), a = (a = f.handle) || (f.handle = function(e) {
                        return void 0 !== N && N.event.triggered !== e.type ? N.event.dispatch.apply(t, arguments) : void 0
                    }), M = (e = (e || "").match(g) || [""]).length; M--;) p = d = (l = v0.exec(e[M]) || [])[1], l = (l[2] || "").split(".").sort(), p && (s = N.event.special[p] || {}, p = (o ? s.delegateType : s.bindType) || p, s = N.event.special[p] || {}, d = N.extend({
                    type: p,
                    origType: d,
                    data: n,
                    handler: c,
                    guid: c.guid,
                    selector: o,
                    needsContext: o && N.expr.match.needsContext.test(o),
                    namespace: l.join(".")
                }, i), (u = r[p]) || ((u = r[p] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(t, n, l, a)) || t.addEventListener && t.addEventListener(p, a), s.add && (s.add.call(t, d), d.handler.guid || (d.handler.guid = c.guid)), o ? u.splice(u.delegateCount++, 0, d) : u.push(d), N.event.global[p] = !0)
        },
        remove: function(e, t, c, n, o) {
            var i, a, r, M, s, u, p, l, d, f, A, b = z.hasData(e) && z.get(e);
            if (b && (M = b.events)) {
                for (s = (t = (t || "").match(g) || [""]).length; s--;)
                    if (d = A = (r = v0.exec(t[s]) || [])[1], f = (r[2] || "").split(".").sort(), d) {
                        for (p = N.event.special[d] || {}, l = M[d = (n ? p.delegateType : p.bindType) || d] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = l.length; i--;) u = l[i], !o && A !== u.origType || c && c.guid !== u.guid || r && !r.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (l.splice(i, 1), u.selector && l.delegateCount--, p.remove && p.remove.call(e, u));
                        a && !l.length && (p.teardown && !1 !== p.teardown.call(e, f, b.handle) || N.removeEvent(e, d, b.handle), delete M[d])
                    } else
                        for (d in M) N.event.remove(e, d + t[s], c, n, !0);
                N.isEmptyObject(M) && z.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, c, n, o, i, a = N.event.fix(e),
                r = new Array(arguments.length),
                e = (z.get(this, "events") || {})[a.type] || [],
                M = N.event.special[a.type] || {};
            for (r[0] = a, t = 1; t < arguments.length; t++) r[t] = arguments[t];
            if (a.delegateTarget = this, !M.preDispatch || !1 !== M.preDispatch.call(this, a)) {
                for (i = N.event.handlers.call(this, a, e), t = 0;
                    (n = i[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = n.elem, c = 0;
                        (o = n.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((N.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, r)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return M.postDispatch && M.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var c, n, o, i, a, r = [],
                M = t.delegateCount,
                s = e.target;
            if (M && s.nodeType && !("click" === e.type && 1 <= e.button))
                for (; s !== this; s = s.parentNode || this)
                    if (1 === s.nodeType && ("click" !== e.type || !0 !== s.disabled)) {
                        for (i = [], a = {}, c = 0; c < M; c++) void 0 === a[o = (n = t[c]).selector + " "] && (a[o] = n.needsContext ? -1 < N(o, this).index(s) : N.find(o, this, null, [s]).length), a[o] && i.push(n);
                        i.length && r.push({
                            elem: s,
                            handlers: i
                        })
                    }
            return s = this, M < t.length && r.push({
                elem: s,
                handlers: t.slice(M)
            }), r
        },
        addProp: function(t, e) {
            Object.defineProperty(N.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: N.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[N.expando] ? e : new N.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== B0() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === B0() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return N.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, N.removeEvent = function(e, t, c) {
        e.removeEventListener && e.removeEventListener(t, c)
    }, N.Event = function(e, t) {
        if (!(this instanceof N.Event)) return new N.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? X0 : d, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && N.extend(this, t), this.timeStamp = e && e.timeStamp || N.now(), this[N.expando] = !0
    }, N.Event.prototype = {
        constructor: N.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = X0, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = X0, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = X0, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, N.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && T0.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && y0.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, N.event.addProp), N.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        N.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, c = e.relatedTarget,
                    n = e.handleObj;
                return c && (c === this || N.contains(this, c)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), N.fn.extend({
        on: function(e, t, c, n) {
            return S0(this, e, t, c, n)
        },
        one: function(e, t, c, n) {
            return S0(this, e, t, c, n, 1)
        },
        off: function(e, t, c) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) n = e.handleObj, N(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
            else {
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (c = t, t = void 0), !1 === c && (c = d), this.each(function() {
                    N.event.remove(this, e, c, t)
                });
                for (o in e) this.off(o, t, e[o])
            }
            return this
        }
    });
    var C0 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        w0 = /<script|<style|<link/i,
        E0 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _0 = /^true\/(.*)/,
        x0 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function R0(e, t) {
        return N.nodeName(e, "table") && N.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function k0(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function D0(e) {
        var t = _0.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function P0(e, t) {
        var c, n, o, i, a, r;
        if (1 === t.nodeType) {
            if (z.hasData(e) && (i = z.access(e), a = z.set(t, i), r = i.events))
                for (o in delete a.handle, a.events = {}, r)
                    for (c = 0, n = r[o].length; c < n; c++) N.event.add(t, o, r[o][c]);
            M.hasData(e) && (i = M.access(e), a = N.extend({}, i), M.set(t, a))
        }
    }

    function m(c, n, o, i) {
        n = k.apply([], n);
        var e, t, a, r, M, s, u = 0,
            p = c.length,
            l = p - 1,
            d = n[0],
            f = N.isFunction(d);
        if (f || 1 < p && "string" == typeof d && !A.checkClone && E0.test(d)) return c.each(function(e) {
            var t = c.eq(e);
            f && (n[0] = d.call(this, e, t.html())), m(t, n, o, i)
        });
        if (p && (t = (e = g0(n, c[0].ownerDocument, !1, c, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (r = (a = N.map(h(e, "script"), k0)).length; u < p; u++) M = e, u !== l && (M = N.clone(M, !0, !0), r) && N.merge(a, h(M, "script")), o.call(c[u], M, u);
            if (r)
                for (s = a[a.length - 1].ownerDocument, N.map(a, D0), u = 0; u < r; u++) M = a[u], L0.test(M.type || "") && !z.access(M, "globalEval") && N.contains(s, M) && (M.src ? N._evalUrl && N._evalUrl(M.src) : U(M.textContent.replace(x0, ""), s))
        }
        return c
    }

    function H0(e, t, c) {
        for (var n, o = t ? N.filter(t, e) : e, i = 0; null != (n = o[i]); i++) c || 1 !== n.nodeType || N.cleanData(h(n)), n.parentNode && (c && N.contains(n.ownerDocument, n) && q0(h(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    N.extend({
        htmlPrefilter: function(e) {
            return e.replace(C0, "<$1></$2>")
        },
        clone: function(e, t, c) {
            var n, o, i, a, r, M, s, u = e.cloneNode(!0),
                p = N.contains(e.ownerDocument, e);
            if (!(A.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || N.isXMLDoc(e)))
                for (a = h(u), n = 0, o = (i = h(e)).length; n < o; n++) r = i[n], M = a[n], s = void 0, "input" === (s = M.nodeName.toLowerCase()) && m0.test(r.type) ? M.checked = r.checked : "input" !== s && "textarea" !== s || (M.defaultValue = r.defaultValue);
            if (t)
                if (c)
                    for (i = i || h(e), a = a || h(u), n = 0, o = i.length; n < o; n++) P0(i[n], a[n]);
                else P0(e, u);
            return 0 < (a = h(u, "script")).length && q0(a, !p && h(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, c, n, o = N.event.special, i = 0; void 0 !== (c = e[i]); i++)
                if (p0(c)) {
                    if (t = c[z.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? N.event.remove(c, n) : N.removeEvent(c, n, t.handle);
                        c[z.expando] = void 0
                    }
                    c[M.expando] && (c[M.expando] = void 0)
                }
        }
    }), N.fn.extend({
        detach: function(e) {
            return H0(this, e, !0)
        },
        remove: function(e) {
            return H0(this, e)
        },
        text: function(e) {
            return p(this, function(e) {
                return void 0 === e ? N.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return m(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || R0(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return m(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = R0(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return m(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return m(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (N.cleanData(h(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return N.clone(this, e, t)
            })
        },
        html: function(e) {
            return p(this, function(e) {
                var t = this[0] || {},
                    c = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !w0.test(e) && !f[(O0.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = N.htmlPrefilter(e);
                    try {
                        for (; c < n; c++) 1 === (t = this[c] || {}).nodeType && (N.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var c = [];
            return m(this, arguments, function(e) {
                var t = this.parentNode;
                N.inArray(this, c) < 0 && (N.cleanData(h(this)), t) && t.replaceChild(e, this)
            }, c)
        }
    }), N.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        N.fn[e] = function(e) {
            for (var t, c = [], n = N(e), o = n.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), N(n[i])[a](t), D.apply(c, t.get());
            return this.pushStack(c)
        }
    });

    function I0(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : L).getComputedStyle(e)
    }
    var j0, U0, F0, Y0, a, O, G0 = /^margin/,
        K0 = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i");

    function V0() {
        var e;
        O && (O.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", O.innerHTML = "", W0.appendChild(a), e = L.getComputedStyle(O), j0 = "1%" !== e.top, Y0 = "2px" === e.marginLeft, U0 = "4px" === e.width, O.style.marginRight = "50%", F0 = "4px" === e.marginRight, W0.removeChild(a), O = null)
    }

    function W(e, t, c) {
        var n, o, i = e.style;
        return (c = c || I0(e)) && ("" !== (o = c.getPropertyValue(t) || c[t]) || N.contains(e.ownerDocument, e) || (o = N.style(e, t)), !A.pixelMarginRight()) && K0.test(o) && G0.test(t) && (e = i.width, t = i.minWidth, n = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = c.width, i.width = e, i.minWidth = t, i.maxWidth = n), void 0 !== o ? o + "" : o
    }

    function Q0(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    a = q.createElement("div"), (O = q.createElement("div")).style && (O.style.backgroundClip = "content-box", O.cloneNode(!0).style.backgroundClip = "", A.clearCloneStyle = "content-box" === O.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(O), N.extend(A, {
        pixelPosition: function() {
            return V0(), j0
        },
        boxSizingReliable: function() {
            return V0(), U0
        },
        pixelMarginRight: function() {
            return V0(), F0
        },
        reliableMarginLeft: function() {
            return V0(), Y0
        }
    }));
    var J0 = /^(none|table(?!-c[ea]).+)/,
        Z0 = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $0 = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        e1 = ["Webkit", "Moz", "ms"],
        t1 = q.createElement("div").style;

    function c1(e) {
        if (e in t1) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), c = e1.length; c--;)
            if ((e = e1[c] + t) in t1) return e
    }

    function n1(e, t, c) {
        var n = l.exec(t);
        return n ? Math.max(0, n[2] - (c || 0)) + (n[3] || "px") : t
    }

    function o1(e, t, c, n, o) {
        for (var i = 0, a = c === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2) "margin" === c && (i += N.css(e, c + s[a], !0, o)), n ? ("content" === c && (i -= N.css(e, "padding" + s[a], !0, o)), "margin" !== c && (i -= N.css(e, "border" + s[a] + "Width", !0, o))) : (i += N.css(e, "padding" + s[a], !0, o), "padding" !== c && (i += N.css(e, "border" + s[a] + "Width", !0, o)));
        return i
    }

    function i1(e, t, c) {
        var n, o = !0,
            i = I0(e),
            a = "border-box" === N.css(e, "boxSizing", !1, i);
        if ((n = e.getClientRects().length ? e.getBoundingClientRect()[t] : n) <= 0 || null == n) {
            if (((n = W(e, t, i)) < 0 || null == n) && (n = e.style[t]), K0.test(n)) return n;
            o = a && (A.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + o1(e, t, c || (a ? "border" : "content"), o, i) + "px"
    }

    function T(e, t, c, n, o) {
        return new T.prototype.init(e, t, c, n, o)
    }
    N.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) return "" === (t = W(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, c, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, r = N.camelCase(t),
                    M = e.style;
                if (t = N.cssProps[r] || (N.cssProps[r] = c1(r) || r), a = N.cssHooks[t] || N.cssHooks[r], void 0 === c) return a && "get" in a && void 0 !== (o = a.get(e, !1, n)) ? o : M[t];
                "string" === (i = typeof c) && (o = l.exec(c)) && o[1] && (c = z0(e, t, o), i = "number"), null == c || c != c || ("number" === i && (c += o && o[3] || (N.cssNumber[r] ? "" : "px")), A.clearCloneStyle || "" !== c || 0 !== t.indexOf("background") || (M[t] = "inherit"), a && "set" in a && void 0 === (c = a.set(e, c, n))) || (M[t] = c)
            }
        },
        css: function(e, t, c, n) {
            var o, i = N.camelCase(t);
            return t = N.cssProps[i] || (N.cssProps[i] = c1(i) || i), "normal" === (o = void 0 === (o = (i = N.cssHooks[t] || N.cssHooks[i]) && "get" in i ? i.get(e, !0, c) : o) ? W(e, t, n) : o) && t in $0 && (o = $0[t]), ("" === c || c) && (i = parseFloat(o), !0 === c || isFinite(i)) ? i || 0 : o
        }
    }), N.each(["height", "width"], function(e, o) {
        N.cssHooks[o] = {
            get: function(e, t, c) {
                if (t) return !J0.test(N.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? i1(e, o, c) : b0(e, Z0, function() {
                    return i1(e, o, c)
                })
            },
            set: function(e, t, c) {
                var n = c && I0(e),
                    c = c && o1(e, o, c, "border-box" === N.css(e, "boxSizing", !1, n), n);
                return c && (n = l.exec(t)) && "px" !== (n[3] || "px") && (e.style[o] = t, t = N.css(e, o)), n1(0, t, c)
            }
        }
    }), N.cssHooks.marginLeft = Q0(A.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(W(e, "marginLeft")) || e.getBoundingClientRect().left - b0(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), N.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, i) {
        N.cssHooks[o + i] = {
            expand: function(e) {
                for (var t = 0, c = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) c[o + s[t] + i] = n[t] || n[t - 2] || n[0];
                return c
            }
        }, G0.test(o) || (N.cssHooks[o + i].set = n1)
    }), N.fn.extend({
        css: function(e, t) {
            return p(this, function(e, t, c) {
                var n, o, i = {},
                    a = 0;
                if (N.isArray(t)) {
                    for (n = I0(e), o = t.length; a < o; a++) i[t[a]] = N.css(e, t[a], !1, n);
                    return i
                }
                return void 0 !== c ? N.style(e, t, c) : N.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((N.Tween = T).prototype = {
        constructor: T,
        init: function(e, t, c, n, o, i) {
            this.elem = e, this.prop = c, this.easing = o || N.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = i || (N.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var e = T.propHooks[this.prop];
            return (e && e.get ? e : T.propHooks._default).get(this)
        },
        run: function(e) {
            var t, c = T.propHooks[this.prop];
            return this.options.duration ? this.pos = t = N.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (c && c.set ? c : T.propHooks._default).set(this), this
        }
    }).init.prototype = T.prototype, (T.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = N.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                N.fx.step[e.prop] ? N.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[N.cssProps[e.prop]] && !N.cssHooks[e.prop] ? e.elem[e.prop] = e.now : N.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = T.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, N.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, N.fx = T.prototype.init, N.fx.step = {};
    var y, v, X, a1 = /^(?:toggle|show|hide)$/,
        r1 = /queueHooks$/;

    function M1() {
        v && (L.requestAnimationFrame(M1), N.fx.tick())
    }

    function s1() {
        return L.setTimeout(function() {
            y = void 0
        }), y = N.now()
    }

    function u1(e, t) {
        var c, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (c = s[n])] = o["padding" + c] = e;
        return t && (o.opacity = o.width = e), o
    }

    function p1(e, t, c) {
        for (var n, o = (B.tweeners[t] || []).concat(B.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (n = o[i].call(c, t, e)) return n
    }

    function B(o, e, t) {
        var c, i, n, a, r, M, s, u = 0,
            p = B.prefilters.length,
            l = N.Deferred().always(function() {
                delete d.elem
            }),
            d = function() {
                if (i) return !1;
                for (var e = y || s1(), e = Math.max(0, f.startTime + f.duration - e), t = 1 - (e / f.duration || 0), c = 0, n = f.tweens.length; c < n; c++) f.tweens[c].run(t);
                return l.notifyWith(o, [f, t, e]), t < 1 && n ? e : (l.resolveWith(o, [f]), !1)
            },
            f = l.promise({
                elem: o,
                props: N.extend({}, e),
                opts: N.extend(!0, {
                    specialEasing: {},
                    easing: N.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: y || s1(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    t = N.Tween(o, f.opts, e, t, f.opts.specialEasing[e] || f.opts.easing);
                    return f.tweens.push(t), t
                },
                stop: function(e) {
                    var t = 0,
                        c = e ? f.tweens.length : 0;
                    if (!i) {
                        for (i = !0; t < c; t++) f.tweens[t].run(1);
                        e ? (l.notifyWith(o, [f, 1, 0]), l.resolveWith(o, [f, e])) : l.rejectWith(o, [f, e])
                    }
                    return this
                }
            }),
            A = f.props,
            b = A,
            z = f.opts.specialEasing;
        for (n in b)
            if (r = z[a = N.camelCase(n)], M = b[n], N.isArray(M) && (r = M[1], M = b[n] = M[0]), n !== a && (b[a] = M, delete b[n]), (s = N.cssHooks[a]) && "expand" in s)
                for (n in M = s.expand(M), delete b[a], M) n in b || (b[n] = M[n], z[n] = r);
            else z[a] = r;
        for (; u < p; u++)
            if (c = B.prefilters[u].call(f, o, A, f.opts)) return N.isFunction(c.stop) && (N._queueHooks(f.elem, f.opts.queue).stop = N.proxy(c.stop, c)), c;
        return N.map(A, p1, f), N.isFunction(f.opts.start) && f.opts.start.call(o, f), N.fx.timer(N.extend(d, {
            elem: o,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    N.Animation = N.extend(B, {
        tweeners: {
            "*": [function(e, t) {
                var c = this.createTween(e, t);
                return z0(c.elem, e, l.exec(t), c), c
            }]
        },
        tweener: function(e, t) {
            for (var c, n = 0, o = (e = N.isFunction(e) ? (t = e, ["*"]) : e.match(g)).length; n < o; n++) c = e[n], B.tweeners[c] = B.tweeners[c] || [], B.tweeners[c].unshift(t)
        },
        prefilters: [function(e, t, c) {
            var n, o, i, a, r, M, s, u = "width" in t || "height" in t,
                p = this,
                l = {},
                d = e.style,
                f = e.nodeType && A0(e),
                A = z.get(e, "fxshow");
            for (n in c.queue || (null == (a = N._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || r()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, N.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (o = t[n], a1.test(o)) {
                    if (delete t[n], i = i || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !A || void 0 === A[n]) continue;
                        f = !0
                    }
                    l[n] = A && A[n] || N.style(e, n)
                }
            if ((M = !N.isEmptyObject(t)) || !N.isEmptyObject(l))
                for (n in u && 1 === e.nodeType && (c.overflow = [d.overflow, d.overflowX, d.overflowY], null == (s = A && A.display) && (s = z.get(e, "display")), "none" === (u = N.css(e, "display")) && (s ? u = s : (b([e], !0), s = e.style.display || s, u = N.css(e, "display"), b([e]))), "inline" === u || "inline-block" === u && null != s) && "none" === N.css(e, "float") && (M || (p.done(function() {
                        d.display = s
                    }), null == s && (u = d.display, s = "none" === u ? "" : u)), d.display = "inline-block"), c.overflow && (d.overflow = "hidden", p.always(function() {
                        d.overflow = c.overflow[0], d.overflowX = c.overflow[1], d.overflowY = c.overflow[2]
                    })), M = !1, l) M || (A ? "hidden" in A && (f = A.hidden) : A = z.access(e, "fxshow", {
                    display: s
                }), i && (A.hidden = !f), f && b([e], !0), p.done(function() {
                    for (n in f || b([e]), z.remove(e, "fxshow"), l) N.style(e, n, l[n])
                })), M = p1(f ? A[n] : 0, n, p), n in A || (A[n] = M.start, f && (M.end = M.start, M.start = 0))
        }],
        prefilter: function(e, t) {
            t ? B.prefilters.unshift(e) : B.prefilters.push(e)
        }
    }), N.speed = function(e, t, c) {
        var n = e && "object" == typeof e ? N.extend({}, e) : {
            complete: c || !c && t || N.isFunction(e) && e,
            duration: e,
            easing: c && t || t && !N.isFunction(t) && t
        };
        return N.fx.off || q.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in N.fx.speeds ? n.duration = N.fx.speeds[n.duration] : n.duration = N.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            N.isFunction(n.old) && n.old.call(this), n.queue && N.dequeue(this, n.queue)
        }, n
    }, N.fn.extend({
        fadeTo: function(e, t, c, n) {
            return this.filter(A0).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, c, n)
        },
        animate: function(t, e, c, n) {
            function o() {
                var e = B(this, N.extend({}, t), a);
                (i || z.get(this, "finish")) && e.stop(!0)
            }
            var i = N.isEmptyObject(t),
                a = N.speed(e, c, n);
            return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(o, e, i) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(i)
            }
            return "string" != typeof o && (i = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    c = N.timers,
                    n = z.get(this);
                if (t) n[t] && n[t].stop && a(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && r1.test(t) && a(n[t]);
                for (t = c.length; t--;) c[t].elem !== this || null != o && c[t].queue !== o || (c[t].anim.stop(i), e = !1, c.splice(t, 1));
                !e && i || N.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = z.get(this),
                    c = t[a + "queue"],
                    n = t[a + "queueHooks"],
                    o = N.timers,
                    i = c ? c.length : 0;
                for (t.finish = !0, N.queue(this, a, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) c[e] && c[e].finish && c[e].finish.call(this);
                delete t.finish
            })
        }
    }), N.each(["toggle", "show", "hide"], function(e, n) {
        var o = N.fn[n];
        N.fn[n] = function(e, t, c) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(u1(n, !0), e, t, c)
        }
    }), N.each({
        slideDown: u1("show"),
        slideUp: u1("hide"),
        slideToggle: u1("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        N.fn[e] = function(e, t, c) {
            return this.animate(n, e, t, c)
        }
    }), N.timers = [], N.fx.tick = function() {
        var e, t = 0,
            c = N.timers;
        for (y = N.now(); t < c.length; t++)(e = c[t])() || c[t] !== e || c.splice(t--, 1);
        c.length || N.fx.stop(), y = void 0
    }, N.fx.timer = function(e) {
        N.timers.push(e), e() ? N.fx.start() : N.timers.pop()
    }, N.fx.interval = 13, N.fx.start = function() {
        v = v || (L.requestAnimationFrame ? L.requestAnimationFrame(M1) : L.setInterval(N.fx.tick, N.fx.interval))
    }, N.fx.stop = function() {
        L.cancelAnimationFrame ? L.cancelAnimationFrame(v) : L.clearInterval(v), v = null
    }, N.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, N.fn.delay = function(n, e) {
        return n = N.fx && N.fx.speeds[n] || n, this.queue(e = e || "fx", function(e, t) {
            var c = L.setTimeout(e, n);
            t.stop = function() {
                L.clearTimeout(c)
            }
        })
    }, X = q.createElement("input"), t = q.createElement("select").appendChild(q.createElement("option")), X.type = "checkbox", A.checkOn = "" !== X.value, A.optSelected = t.selected, (X = q.createElement("input")).value = "t", X.type = "radio", A.radioValue = "t" === X.value;
    var l1, S = N.expr.attrHandle,
        d1 = (N.fn.extend({
            attr: function(e, t) {
                return p(this, N.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    N.removeAttr(this, e)
                })
            }
        }), N.extend({
            attr: function(e, t, c) {
                var n, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? N.prop(e, t, c) : (1 === i && N.isXMLDoc(e) || (o = N.attrHooks[t.toLowerCase()] || (N.expr.match.bool.test(t) ? l1 : void 0)), void 0 !== c ? null === c ? void N.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, c, t)) ? n : (e.setAttribute(t, c + ""), c) : !(o && "get" in o && null !== (n = o.get(e, t))) && null == (n = N.find.attr(e, t)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        var c;
                        if (!A.radioValue && "radio" === t && N.nodeName(e, "input")) return c = e.value, e.setAttribute("type", t), c && (e.value = c), t
                    }
                }
            },
            removeAttr: function(e, t) {
                var c, n = 0,
                    o = t && t.match(g);
                if (o && 1 === e.nodeType)
                    for (; c = o[n++];) e.removeAttribute(c)
            }
        }), l1 = {
            set: function(e, t, c) {
                return !1 === t ? N.removeAttr(e, c) : e.setAttribute(c, c), c
            }
        }, N.each(N.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = S[t] || N.find.attr;
            S[t] = function(e, t, c) {
                var n, o, i = t.toLowerCase();
                return c || (o = S[i], S[i] = n, n = null != a(e, t, c) ? i : null, S[i] = o), n
            }
        }), /^(?:input|select|textarea|button)$/i),
        f1 = /^(?:a|area)$/i;

    function C(e) {
        return (e.match(g) || []).join(" ")
    }

    function w(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    N.fn.extend({
        prop: function(e, t) {
            return p(this, N.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[N.propFix[e] || e]
            })
        }
    }), N.extend({
        prop: function(e, t, c) {
            var n, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && N.isXMLDoc(e) || (t = N.propFix[t] || t, o = N.propHooks[t]), void 0 !== c ? o && "set" in o && void 0 !== (n = o.set(e, c, t)) ? n : e[t] = c : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = N.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : d1.test(e.nodeName) || f1.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), A.optSelected || (N.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex
        }
    }), N.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        N.propFix[this.toLowerCase()] = this
    }), N.fn.extend({
        addClass: function(t) {
            var e, c, n, o, i, a, r = 0;
            if (N.isFunction(t)) return this.each(function(e) {
                N(this).addClass(t.call(this, e, w(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(g) || []; c = this[r++];)
                    if (a = w(c), n = 1 === c.nodeType && " " + C(a) + " ") {
                        for (i = 0; o = e[i++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        a !== (a = C(n)) && c.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, c, n, o, i, a, r = 0;
            if (N.isFunction(t)) return this.each(function(e) {
                N(this).removeClass(t.call(this, e, w(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(g) || []; c = this[r++];)
                    if (a = w(c), n = 1 === c.nodeType && " " + C(a) + " ") {
                        for (i = 0; o = e[i++];)
                            for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        a !== (a = C(n)) && c.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var i = typeof o;
            return "boolean" == typeof t && "string" == i ? t ? this.addClass(o) : this.removeClass(o) : N.isFunction(o) ? this.each(function(e) {
                N(this).toggleClass(o.call(this, e, w(this), t), t)
            }) : this.each(function() {
                var e, t, c, n;
                if ("string" == i)
                    for (t = 0, c = N(this), n = o.match(g) || []; e = n[t++];) c.hasClass(e) ? c.removeClass(e) : c.addClass(e);
                else void 0 !== o && "boolean" != i || ((e = w(this)) && z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && z.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, c = 0, n = " " + e + " "; t = this[c++];)
                if (1 === t.nodeType && -1 < (" " + C(w(t)) + " ").indexOf(n)) return !0;
            return !1
        }
    });
    var A1 = /\r/g,
        b1 = (N.fn.extend({
            val: function(t) {
                var c, e, n, o = this[0];
                return arguments.length ? (n = N.isFunction(t), this.each(function(e) {
                    1 !== this.nodeType || (null == (e = n ? t.call(this, e, N(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : N.isArray(e) && (e = N.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (c = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()]) && "set" in c && void 0 !== c.set(this, e, "value")) || (this.value = e)
                })) : o ? (c = N.valHooks[o.type] || N.valHooks[o.nodeName.toLowerCase()]) && "get" in c && void 0 !== (e = c.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(A1, "") : null == e ? "" : e : void 0
            }
        }), N.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = N.find.attr(e, "value");
                        return null != t ? t : C(N.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, c = e.options, n = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? n + 1 : c.length, r = n < 0 ? a : o ? n : 0; r < a; r++)
                            if (((t = c[r]).selected || r === n) && !t.disabled && (!t.parentNode.disabled || !N.nodeName(t.parentNode, "optgroup"))) {
                                if (t = N(t).val(), o) return t;
                                i.push(t)
                            }
                        return i
                    },
                    set: function(e, t) {
                        for (var c, n, o = e.options, i = N.makeArray(t), a = o.length; a--;)((n = o[a]).selected = -1 < N.inArray(N.valHooks.option.get(n), i)) && (c = !0);
                        return c || (e.selectedIndex = -1), i
                    }
                }
            }
        }), N.each(["radio", "checkbox"], function() {
            N.valHooks[this] = {
                set: function(e, t) {
                    if (N.isArray(t)) return e.checked = -1 < N.inArray(N(e).val(), t)
                }
            }, A.checkOn || (N.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), /^(?:focusinfocus|focusoutblur)$/),
        E = (N.extend(N.event, {
            trigger: function(e, t, c, n) {
                var o, i, a, r, M, s, u = [c || q],
                    p = H.call(e, "type") ? e.type : e,
                    l = H.call(e, "namespace") ? e.namespace.split(".") : [],
                    d = i = c = c || q;
                if (3 !== c.nodeType && 8 !== c.nodeType && !b1.test(p + N.event.triggered) && (-1 < p.indexOf(".") && (p = (l = p.split(".")).shift(), l.sort()), r = p.indexOf(":") < 0 && "on" + p, (e = e[N.expando] ? e : new N.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = l.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = c), t = null == t ? [e] : N.makeArray(t, [e]), s = N.event.special[p] || {}, n || !s.trigger || !1 !== s.trigger.apply(c, t))) {
                    if (!n && !s.noBubble && !N.isWindow(c)) {
                        for (a = s.delegateType || p, b1.test(a + p) || (d = d.parentNode); d; d = d.parentNode) u.push(d), i = d;
                        i === (c.ownerDocument || q) && u.push(i.defaultView || i.parentWindow || L)
                    }
                    for (o = 0;
                        (d = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : s.bindType || p, (M = (z.get(d, "events") || {})[e.type] && z.get(d, "handle")) && M.apply(d, t), (M = r && d[r]) && M.apply && p0(d) && (e.result = M.apply(d, t), !1 === e.result) && e.preventDefault();
                    return e.type = p, n || e.isDefaultPrevented() || s._default && !1 !== s._default.apply(u.pop(), t) || !p0(c) || r && N.isFunction(c[p]) && !N.isWindow(c) && ((i = c[r]) && (c[r] = null), c[N.event.triggered = p](), N.event.triggered = void 0, i) && (c[r] = i), e.result
                }
            },
            simulate: function(e, t, c) {
                c = N.extend(new N.Event, c, {
                    type: e,
                    isSimulated: !0
                });
                N.event.trigger(c, null, t)
            }
        }), N.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    N.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var c = this[0];
                if (c) return N.event.trigger(e, t, c, !0)
            }
        }), N.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, c) {
            N.fn[c] = function(e, t) {
                return 0 < arguments.length ? this.on(c, null, e, t) : this.trigger(c)
            }
        }), N.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), A.focusin = "onfocusin" in L, A.focusin || N.each({
            focus: "focusin",
            blur: "focusout"
        }, function(c, n) {
            function o(e) {
                N.event.simulate(n, e.target, N.event.fix(e))
            }
            N.event.special[n] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = z.access(e, n);
                    t || e.addEventListener(c, o, !0), z.access(e, n, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = z.access(e, n) - 1;
                    t ? z.access(e, n, t) : (e.removeEventListener(c, o, !0), z.remove(e, n))
                }
            }
        }), L.location),
        z1 = N.now(),
        h1 = /\?/,
        m1 = (N.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new L.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || N.error("Invalid XML: " + e), t
        }, /\[\]$/),
        O1 = /\r?\n/g,
        L1 = /^(?:submit|button|image|reset|file)$/i,
        q1 = /^(?:input|select|textarea|keygen)/i;
    N.param = function(e, t) {
        function c(e, t) {
            t = N.isFunction(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var n, o = [];
        if (N.isArray(e) || e.jquery && !N.isPlainObject(e)) N.each(e, function() {
            c(this.name, this.value)
        });
        else
            for (n in e) ! function c(n, e, o, i) {
                if (N.isArray(e)) N.each(e, function(e, t) {
                    o || m1.test(n) ? i(n, t) : c(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
                });
                else if (o || "object" !== N.type(e)) i(n, e);
                else
                    for (var t in e) c(n + "[" + t + "]", e[t], o, i)
            }(n, e[n], t, c);
        return o.join("&")
    }, N.fn.extend({
        serialize: function() {
            return N.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = N.prop(this, "elements");
                return e ? N.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !N(this).is(":disabled") && q1.test(this.nodeName) && !L1.test(e) && (this.checked || !m0.test(e))
            }).map(function(e, t) {
                var c = N(this).val();
                return null == c ? null : N.isArray(c) ? N.map(c, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(O1, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: c.replace(O1, "\r\n")
                }
            }).get()
        }
    });
    var N1 = /%20/g,
        g1 = /#.*$/,
        W1 = /([?&])_=[^&]*/,
        T1 = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        y1 = /^(?:GET|HEAD)$/,
        v1 = /^\/\//,
        X1 = {},
        B1 = {},
        S1 = "*/".concat("*"),
        C1 = q.createElement("a");

    function w1(i) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var c, n = 0,
                o = e.toLowerCase().match(g) || [];
            if (N.isFunction(t))
                for (; c = o[n++];) "+" === c[0] ? (c = c.slice(1) || "*", (i[c] = i[c] || []).unshift(t)) : (i[c] = i[c] || []).push(t)
        }
    }

    function E1(t, n, o, i) {
        var a = {},
            r = t === B1;

        function M(e) {
            var c;
            return a[e] = !0, N.each(t[e] || [], function(e, t) {
                t = t(n, o, i);
                return "string" != typeof t || r || a[t] ? r ? !(c = t) : void 0 : (n.dataTypes.unshift(t), M(t), !1)
            }), c
        }
        return M(n.dataTypes[0]) || !a["*"] && M("*")
    }

    function _1(e, t) {
        var c, n, o = N.ajaxSettings.flatOptions || {};
        for (c in t) void 0 !== t[c] && ((o[c] ? e : n = n || {})[c] = t[c]);
        return n && N.extend(!0, e, n), e
    }
    C1.href = E.href, N.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: E.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(E.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": S1,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": N.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _1(_1(e, N.ajaxSettings), t) : _1(N.ajaxSettings, e)
        },
        ajaxPrefilter: w1(X1),
        ajaxTransport: w1(B1),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var M, s, u, c, p, l, d, n, f = N.ajaxSetup({}, t = t || {}),
                A = f.context || f,
                b = f.context && (A.nodeType || A.jquery) ? N(A) : N.event,
                z = N.Deferred(),
                h = N.Callbacks("once memory"),
                m = f.statusCode || {},
                o = {},
                i = {},
                a = "canceled",
                O = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!c)
                                for (c = {}; t = T1.exec(u);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return l ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = i[e.toLowerCase()] = i[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (l) O.always(e[O.status]);
                            else
                                for (var t in e) m[t] = [m[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return M && M.abort(e), r(0, e), this
                    }
                };
            if (z.promise(O), f.url = ((e || f.url || E.href) + "").replace(v1, E.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(g) || [""], null == f.crossDomain) {
                e = q.createElement("a");
                try {
                    e.href = f.url, e.href = e.href, f.crossDomain = C1.protocol + "//" + C1.host != e.protocol + "//" + e.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = N.param(f.data, f.traditional)), E1(X1, f, t, O), !l) {
                for (n in (d = N.event && f.global) && 0 == N.active++ && N.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !y1.test(f.type), s = f.url.replace(g1, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(N1, "+")) : (e = f.url.slice(s.length), f.data && (s += (h1.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(W1, "$1"), e = (h1.test(s) ? "&" : "?") + "_=" + z1++ + e), f.url = s + e), f.ifModified && (N.lastModified[s] && O.setRequestHeader("If-Modified-Since", N.lastModified[s]), N.etag[s]) && O.setRequestHeader("If-None-Match", N.etag[s]), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && O.setRequestHeader("Content-Type", f.contentType), O.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + S1 + "; q=0.01" : "") : f.accepts["*"]), f.headers) O.setRequestHeader(n, f.headers[n]);
                if (f.beforeSend && (!1 === f.beforeSend.call(A, O, f) || l)) return O.abort();
                if (a = "abort", h.add(f.complete), O.done(f.success), O.fail(f.error), M = E1(B1, f, t, O)) {
                    if (O.readyState = 1, d && b.trigger("ajaxSend", [O, f]), l) return O;
                    f.async && 0 < f.timeout && (p = L.setTimeout(function() {
                        O.abort("timeout")
                    }, f.timeout));
                    try {
                        l = !1, M.send(o, r)
                    } catch (e) {
                        if (l) throw e;
                        r(-1, e)
                    }
                } else r(-1, "No Transport")
            }
            return O;

            function r(e, t, c, n) {
                var o, i, a, r = t;
                l || (l = !0, p && L.clearTimeout(p), M = void 0, u = n || "", O.readyState = 0 < e ? 4 : 0, n = 200 <= e && e < 300 || 304 === e, c && (a = function(e, t, c) {
                    for (var n, o, i, a, r = e.contents, M = e.dataTypes;
                        "*" === M[0];) M.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in r)
                            if (r[o] && r[o].test(n)) {
                                M.unshift(o);
                                break
                            }
                    if (M[0] in c) i = M[0];
                    else {
                        for (o in c) {
                            if (!M[0] || e.converters[o + " " + M[0]]) {
                                i = o;
                                break
                            }
                            a = a || o
                        }
                        i = i || a
                    }
                    if (i) return i !== M[0] && M.unshift(i), c[i]
                }(f, O, c)), a = function(e, t, c, n) {
                    var o, i, a, r, M, s = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) s[a.toLowerCase()] = e.converters[a];
                    for (i = u.shift(); i;)
                        if (e.responseFields[i] && (c[e.responseFields[i]] = t), !M && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), M = i, i = u.shift())
                            if ("*" === i) i = M;
                            else if ("*" !== M && M !== i) {
                        if (!(a = s[M + " " + i] || s["* " + i]))
                            for (o in s)
                                if ((r = o.split(" "))[1] === i && (a = s[M + " " + r[0]] || s["* " + r[0]])) {
                                    !0 === a ? a = s[o] : !0 !== s[o] && (i = r[0], u.unshift(r[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + M + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, a, O, n), n ? (f.ifModified && ((c = O.getResponseHeader("Last-Modified")) && (N.lastModified[s] = c), c = O.getResponseHeader("etag")) && (N.etag[s] = c), 204 === e || "HEAD" === f.type ? r = "nocontent" : 304 === e ? r = "notmodified" : (r = a.state, o = a.data, n = !(i = a.error))) : (i = r, !e && r || (r = "error", e < 0 && (e = 0))), O.status = e, O.statusText = (t || r) + "", n ? z.resolveWith(A, [o, r, O]) : z.rejectWith(A, [O, r, i]), O.statusCode(m), m = void 0, d && b.trigger(n ? "ajaxSuccess" : "ajaxError", [O, f, n ? o : i]), h.fireWith(A, [O, r]), d && (b.trigger("ajaxComplete", [O, f]), --N.active || N.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, c) {
            return N.get(e, t, c, "json")
        },
        getScript: function(e, t) {
            return N.get(e, void 0, t, "script")
        }
    }), N.each(["get", "post"], function(e, o) {
        N[o] = function(e, t, c, n) {
            return N.isFunction(t) && (n = n || c, c = t, t = void 0), N.ajax(N.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: c
            }, N.isPlainObject(e) && e))
        }
    }), N._evalUrl = function(e) {
        return N.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, N.fn.extend({
        wrapAll: function(e) {
            return this[0] && (N.isFunction(e) && (e = e.call(this[0])), e = N(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(c) {
            return N.isFunction(c) ? this.each(function(e) {
                N(this).wrapInner(c.call(this, e))
            }) : this.each(function() {
                var e = N(this),
                    t = e.contents();
                t.length ? t.wrapAll(c) : e.append(c)
            })
        },
        wrap: function(t) {
            var c = N.isFunction(t);
            return this.each(function(e) {
                N(this).wrapAll(c ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                N(this).replaceWith(this.childNodes)
            }), this
        }
    }), N.expr.pseudos.hidden = function(e) {
        return !N.expr.pseudos.visible(e)
    }, N.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, N.ajaxSettings.xhr = function() {
        try {
            return new L.XMLHttpRequest
        } catch (e) {}
    };
    var x1 = {
            0: 200,
            1223: 204
        },
        _ = N.ajaxSettings.xhr(),
        R1 = (A.cors = !!_ && "withCredentials" in _, A.ajax = _ = !!_, N.ajaxTransport(function(o) {
            var i, a;
            if (A.cors || _ && !o.crossDomain) return {
                send: function(e, t) {
                    var c, n = o.xhr();
                    if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (c in o.xhrFields) n[c] = o.xhrFields[c];
                    for (c in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(c, e[c]);
                    i = function(e) {
                        return function() {
                            i && (i = a = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(x1[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }, n.onload = i(), a = n.onerror = i("error"), void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function() {
                        4 === n.readyState && L.setTimeout(function() {
                            i && a()
                        })
                    }, i = i("abort");
                    try {
                        n.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (i) throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), N.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), N.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return N.globalEval(e), e
                }
            }
        }), N.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), N.ajaxTransport("script", function(c) {
            var n, o;
            if (c.crossDomain) return {
                send: function(e, t) {
                    n = N("<script>").prop({
                        charset: c.scriptCharset,
                        src: c.url
                    }).on("load error", o = function(e) {
                        n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), q.head.appendChild(n[0])
                },
                abort: function() {
                    o && o()
                }
            }
        }), []),
        k1 = /(=)\?(?=&|$)|\?\?/;

    function D1(e) {
        return N.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    N.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = R1.pop() || N.expando + "_" + z1++;
            return this[e] = !0, e
        }
    }), N.ajaxPrefilter("json jsonp", function(e, t, c) {
        var n, o, i, a = !1 !== e.jsonp && (k1.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && k1.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = N.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(k1, "$1" + n) : !1 !== e.jsonp && (e.url += (h1.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return i || N.error(n + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = L[n], L[n] = function() {
            i = arguments
        }, c.always(function() {
            void 0 === o ? N(L).removeProp(n) : L[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, R1.push(n)), i && N.isFunction(o) && o(i[0]), i = o = void 0
        }), "script"
    }), A.createHTMLDocument = ((e = q.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), N.parseHTML = function(e, t, c) {
        var n;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (c = t, t = !1), t || (A.createHTMLDocument ? ((n = (t = q.implementation.createHTMLDocument("")).createElement("base")).href = q.location.href, t.head.appendChild(n)) : t = q), n = !c && [], (c = Z.exec(e)) ? [t.createElement(c[1])] : (c = g0([e], t, n), n && n.length && N(n).remove(), N.merge([], c.childNodes)))
    }, N.fn.load = function(e, t, c) {
        var n, o, i, a = this,
            r = e.indexOf(" ");
        return -1 < r && (n = C(e.slice(r)), e = e.slice(0, r)), N.isFunction(t) ? (c = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && N.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(n ? N("<div>").append(N.parseHTML(e)).find(n) : e)
        }).always(c && function(e, t) {
            a.each(function() {
                c.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, N.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        N.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), N.expr.pseudos.animated = function(t) {
        return N.grep(N.timers, function(e) {
            return t === e.elem
        }).length
    }, N.offset = {
        setOffset: function(e, t, c) {
            var n, o, i, a, r = N.css(e, "position"),
                M = N(e),
                s = {};
            "static" === r && (e.style.position = "relative"), i = M.offset(), n = N.css(e, "top"), a = N.css(e, "left"), r = ("absolute" === r || "fixed" === r) && -1 < (n + a).indexOf("auto") ? (o = (r = M.position()).top, r.left) : (o = parseFloat(n) || 0, parseFloat(a) || 0), null != (t = N.isFunction(t) ? t.call(e, c, N.extend({}, i)) : t).top && (s.top = t.top - i.top + o), null != t.left && (s.left = t.left - i.left + r), "using" in t ? t.using.call(e, s) : M.css(s)
        }
    }, N.fn.extend({
        offset: function(t) {
            var e, c, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                N.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (c = n.getBoundingClientRect()).width || c.height ? (e = D1(n = n.ownerDocument), n = n.documentElement, {
                top: c.top + e.pageYOffset - n.clientTop,
                left: c.left + e.pageXOffset - n.clientLeft
            }) : c : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            var e, t, c, n;
            if (this[0]) return c = this[0], n = {
                top: 0,
                left: 0
            }, "fixed" === N.css(c, "position") ? t = c.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), n = {
                top: (n = N.nodeName(e[0], "html") ? n : e.offset()).top + N.css(e[0], "borderTopWidth", !0),
                left: n.left + N.css(e[0], "borderLeftWidth", !0)
            }), {
                top: t.top - n.top - N.css(c, "marginTop", !0),
                left: t.left - n.left - N.css(c, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === N.css(e, "position");) e = e.offsetParent;
                return e || W0
            })
        }
    }), N.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var i = "pageYOffset" === o;
        N.fn[t] = function(e) {
            return p(this, function(e, t, c) {
                var n = D1(e);
                if (void 0 === c) return n ? n[o] : e[t];
                n ? n.scrollTo(i ? n.pageXOffset : c, i ? c : n.pageYOffset) : e[t] = c
            }, t, e, arguments.length)
        }
    }), N.each(["top", "left"], function(e, c) {
        N.cssHooks[c] = Q0(A.pixelPosition, function(e, t) {
            if (t) return t = W(e, c), K0.test(t) ? N(e).position()[c] + "px" : t
        })
    }), N.each({
        Height: "height",
        Width: "width"
    }, function(a, r) {
        N.each({
            padding: "inner" + a,
            content: r,
            "": "outer" + a
        }, function(n, i) {
            N.fn[i] = function(e, t) {
                var c = arguments.length && (n || "boolean" != typeof e),
                    o = n || (!0 === e || !0 === t ? "margin" : "border");
                return p(this, function(e, t, c) {
                    var n;
                    return N.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + a], n["scroll" + a], e.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === c ? N.css(e, t, o) : N.style(e, t, c, o)
                }, r, c ? e : void 0, c)
            }
        })
    }), N.fn.extend({
        bind: function(e, t, c) {
            return this.on(e, null, t, c)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, c, n) {
            return this.on(t, e, c, n)
        },
        undelegate: function(e, t, c) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", c)
        }
    }), N.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return N
    });
    var P1 = L.jQuery,
        H1 = L.$;
    return N.noConflict = function(e) {
        return L.$ === N && (L.$ = H1), e && L.jQuery === N && (L.jQuery = P1), N
    }, x || (L.jQuery = L.$ = N), N
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var x;

    function d() {
        return x.apply(null, arguments)
    }

    function M(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function R(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function i(e) {
        return void 0 === e
    }

    function k(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function D(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function P(e, t) {
        for (var c = [], n = 0; n < e.length; ++n) c.push(t(e[n], n));
        return c
    }

    function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function r(e, t) {
        for (var c in t) f(t, c) && (e[c] = t[c]);
        return f(t, "toString") && (e.toString = t.toString), f(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function s(e, t, c, n) {
        return B1(e, t, c, n, !0).utc()
    }

    function A(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function H(e) {
        if (null == e._isValid) {
            var t = A(e),
                c = j.call(t.parsedDateParts, function(e) {
                    return null != e
                }),
                c = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && c);
            if (e._strict && (c = c && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return c;
            e._isValid = c
        }
        return e._isValid
    }

    function I(e) {
        var t = s(NaN);
        return null != e ? r(A(t), e) : A(t).userInvalidated = !0, t
    }
    var j = Array.prototype.some || function(e) {
            for (var t = Object(this), c = t.length >>> 0, n = 0; n < c; n++)
                if (n in t && e.call(this, t[n], n, t)) return !0;
            return !1
        },
        U = d.momentProperties = [];

    function F(e, t) {
        var c, n, o;
        if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = A(t)), i(t._locale) || (e._locale = t._locale), 0 < U.length)
            for (c = 0; c < U.length; c++) i(o = t[n = U[c]]) || (e[n] = o);
        return e
    }
    var Y = !1;

    function G(e) {
        F(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Y && (Y = !0, d.updateOffset(this), Y = !1)
    }

    function a(e) {
        return e instanceof G || null != e && null != e._isAMomentObject
    }

    function u(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function p(e) {
        var e = +e,
            t = 0;
        return t = 0 != e && isFinite(e) ? u(e) : t
    }

    function K(e, t, c) {
        for (var n = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), i = 0, a = 0; a < n; a++)(c && e[a] !== t[a] || !c && p(e[a]) !== p(t[a])) && i++;
        return i + o
    }

    function V(e) {
        !1 === d.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function e(o, i) {
        var a = !0;
        return r(function() {
            if (null != d.deprecationHandler && d.deprecationHandler(null, o), a) {
                for (var e, t = [], c = 0; c < arguments.length; c++) {
                    if (e = "", "object" == typeof arguments[c]) {
                        for (var n in e += "\n[" + c + "] ", arguments[0]) e += n + ": " + arguments[0][n] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[c];
                    t.push(e)
                }
                V(o + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
            }
            return i.apply(this, arguments)
        }, i)
    }
    var Q = {};

    function J(e, t) {
        null != d.deprecationHandler && d.deprecationHandler(e, t), Q[e] || (V(t), Q[e] = !0)
    }

    function l(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function Z(e, t) {
        var c, n = r({}, e);
        for (c in t) f(t, c) && (R(e[c]) && R(t[c]) ? (n[c] = {}, r(n[c], e[c]), r(n[c], t[c])) : null != t[c] ? n[c] = t[c] : delete n[c]);
        for (c in e) f(e, c) && !f(t, c) && R(e[c]) && (n[c] = r({}, n[c]));
        return n
    }

    function $(e) {
        null != e && this.set(e)
    }
    d.suppressDeprecationWarnings = !1, d.deprecationHandler = null;
    var e0 = Object.keys || function(e) {
            var t, c = [];
            for (t in e) f(e, t) && c.push(t);
            return c
        },
        t0 = {};

    function t(e, t) {
        var c = e.toLowerCase();
        t0[c] = t0[c + "s"] = t0[t] = e
    }

    function b(e) {
        return "string" == typeof e ? t0[e] || t0[e.toLowerCase()] : void 0
    }

    function c0(e) {
        var t, c, n = {};
        for (c in e) f(e, c) && (t = b(c)) && (n[t] = e[c]);
        return n
    }
    var n0 = {};

    function c(e, t) {
        n0[e] = t
    }

    function z(e, t, c) {
        var n = "" + Math.abs(e);
        return (0 <= e ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - n.length)).toString().substr(1) + n
    }
    var o0 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        i0 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        a0 = {},
        r0 = {};

    function n(e, t, c, n) {
        var o = "string" == typeof n ? function() {
            return this[n]()
        } : n;
        e && (r0[e] = o), t && (r0[t[0]] = function() {
            return z(o.apply(this, arguments), t[1], t[2])
        }), c && (r0[c] = function() {
            return this.localeData().ordinal(o.apply(this, arguments), e)
        })
    }

    function M0(e, t) {
        return e.isValid() ? (t = s0(t, e.localeData()), a0[t] = a0[t] || function(n) {
            for (var e, o = n.match(o0), t = 0, i = o.length; t < i; t++) r0[o[t]] ? o[t] = r0[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function(e) {
                for (var t = "", c = 0; c < i; c++) t += l(o[c]) ? o[c].call(e, n) : o[c];
                return t
            }
        }(t), a0[t](e)) : e.localeData().invalidDate()
    }

    function s0(e, t) {
        var c = 5;

        function n(e) {
            return t.longDateFormat(e) || e
        }
        for (i0.lastIndex = 0; 0 <= c && i0.test(e);) e = e.replace(i0, n), i0.lastIndex = 0, --c;
        return e
    }
    var o = /\d/,
        h = /\d\d/,
        u0 = /\d{3}/,
        p0 = /\d{4}/,
        l0 = /[+-]?\d{6}/,
        m = /\d\d?/,
        d0 = /\d\d\d\d?/,
        f0 = /\d\d\d\d\d\d?/,
        A0 = /\d{1,3}/,
        b0 = /\d{1,4}/,
        z0 = /[+-]?\d{1,6}/,
        h0 = /\d+/,
        m0 = /[+-]?\d+/,
        O0 = /Z|[+-]\d\d:?\d\d/gi,
        L0 = /Z|[+-]\d\d(?::?\d\d)?/gi,
        q0 = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        N0 = {};

    function O(e, c, n) {
        N0[e] = l(c) ? c : function(e, t) {
            return e && n ? n : c
        }
    }

    function g0(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var W0 = {};

    function L(e, c) {
        var t, n = c;
        for ("string" == typeof e && (e = [e]), k(c) && (n = function(e, t) {
                t[c] = p(e)
            }), t = 0; t < e.length; t++) W0[e[t]] = n
    }

    function T0(e, o) {
        L(e, function(e, t, c, n) {
            c._w = c._w || {}, o(e, c._w, c, n)
        })
    }
    var q = 0,
        N = 1,
        g = 2,
        W = 3,
        T = 4,
        y = 5,
        y0 = 6,
        v0 = 7,
        X0 = 8;

    function B0(e) {
        return S0(e) ? 366 : 365
    }

    function S0(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    n("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), n(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), n(0, ["YYYY", 4], 0, "year"), n(0, ["YYYYY", 5], 0, "year"), n(0, ["YYYYYY", 6, !0], 0, "year"), t("year", "y"), c("year", 1), O("Y", m0), O("YY", m, h), O("YYYY", b0, p0), O("YYYYY", z0, l0), O("YYYYYY", z0, l0), L(["YYYYY", "YYYYYY"], q), L("YYYY", function(e, t) {
        t[q] = 2 === e.length ? d.parseTwoDigitYear(e) : p(e)
    }), L("YY", function(e, t) {
        t[q] = d.parseTwoDigitYear(e)
    }), L("Y", function(e, t) {
        t[q] = parseInt(e, 10)
    }), d.parseTwoDigitYear = function(e) {
        return p(e) + (68 < p(e) ? 1900 : 2e3)
    };
    var v, C0 = w0("FullYear", !0);

    function w0(t, c) {
        return function(e) {
            return null != e ? (_0(this, t, e), d.updateOffset(this, c), this) : E0(this, t)
        }
    }

    function E0(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function _0(e, t, c) {
        e.isValid() && !isNaN(c) && ("FullYear" === t && S0(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](c, e.month(), x0(c, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](c))
    }

    function x0(e, t) {
        return isNaN(e) || isNaN(t) ? NaN : (e += (t - (t = (t % 12 + 12) % 12)) / 12, 1 == t ? S0(e) ? 29 : 28 : 31 - t % 7 % 2)
    }
    v = Array.prototype.indexOf || function(e) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1
    }, n("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), n("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }), n("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }), t("month", "M"), c("month", 8), O("M", m), O("MM", m, h), O("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }), O("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }), L(["M", "MM"], function(e, t) {
        t[N] = p(e) - 1
    }), L(["MMM", "MMMM"], function(e, t, c, n) {
        n = c._locale.monthsParse(e, n, c._strict);
        null != n ? t[N] = n : A(c).invalidMonth = e
    });
    var R0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        k0 = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        D0 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function P0(e, t) {
        var c;
        if (e.isValid()) {
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = p(t);
                else if (!k(t = e.localeData().monthsParse(t))) return;
            c = Math.min(e.date(), x0(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, c)
        }
    }

    function H0(e) {
        return null != e ? (P0(this, e), d.updateOffset(this, !0), this) : E0(this, "Month")
    }
    var I0 = q0,
        j0 = q0;

    function U0() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, c = [], n = [], o = [], i = 0; i < 12; i++) t = s([2e3, i]), c.push(this.monthsShort(t, "")), n.push(this.months(t, "")), o.push(this.months(t, "")), o.push(this.monthsShort(t, ""));
        for (c.sort(e), n.sort(e), o.sort(e), i = 0; i < 12; i++) c[i] = g0(c[i]), n[i] = g0(n[i]);
        for (i = 0; i < 24; i++) o[i] = g0(o[i]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i")
    }

    function F0(e) {
        var t;
        return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function Y0(e, t, c) {
        c = 7 + t - c;
        return -(7 + F0(e, 0, c).getUTCDay() - t) % 7 + c - 1
    }

    function G0(e, t, c, n, o) {
        var i, t = 1 + 7 * (t - 1) + (7 + c - n) % 7 + Y0(e, n, o),
            c = t <= 0 ? B0(i = e - 1) + t : t > B0(e) ? (i = e + 1, t - B0(e)) : (i = e, t);
        return {
            year: i,
            dayOfYear: c
        }
    }

    function K0(e, t, c) {
        var n, o, i = Y0(e.year(), t, c),
            i = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return i < 1 ? n = i + V0(o = e.year() - 1, t, c) : i > V0(e.year(), t, c) ? (n = i - V0(e.year(), t, c), o = e.year() + 1) : (o = e.year(), n = i), {
            week: n,
            year: o
        }
    }

    function V0(e, t, c) {
        var n = Y0(e, t, c),
            t = Y0(e + 1, t, c);
        return (B0(e) - n + t) / 7
    }

    function Q0(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    n("w", ["ww", 2], "wo", "week"), n("W", ["WW", 2], "Wo", "isoWeek"), t("week", "w"), t("isoWeek", "W"), c("week", 5), c("isoWeek", 5), O("w", m), O("ww", m, h), O("W", m), O("WW", m, h), T0(["w", "ww", "W", "WW"], function(e, t, c, n) {
        t[n.substr(0, 1)] = p(e)
    }), n("d", 0, "do", "day"), n("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }), n("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }), n("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }), n("e", 0, 0, "weekday"), n("E", 0, 0, "isoWeekday"), t("day", "d"), t("weekday", "e"), t("isoWeekday", "E"), c("day", 11), c("weekday", 11), c("isoWeekday", 11), O("d", m), O("e", m), O("E", m), O("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }), O("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }), O("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }), T0(["dd", "ddd", "dddd"], function(e, t, c, n) {
        n = c._locale.weekdaysParse(e, n, c._strict);
        null != n ? t.d = n : A(c).invalidWeekday = e
    }), T0(["d", "e", "E"], function(e, t, c, n) {
        t[n] = p(e)
    });
    var J0 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Z0 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        $0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        e1 = q0,
        t1 = q0,
        c1 = q0;

    function n1() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, c, n, o = [], i = [], a = [], r = [], M = 0; M < 7; M++) n = s([2e3, 1]).day(M), t = this.weekdaysMin(n, ""), c = this.weekdaysShort(n, ""), n = this.weekdays(n, ""), o.push(t), i.push(c), a.push(n), r.push(t), r.push(c), r.push(n);
        for (o.sort(e), i.sort(e), a.sort(e), r.sort(e), M = 0; M < 7; M++) i[M] = g0(i[M]), a[M] = g0(a[M]), r[M] = g0(r[M]);
        this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
    }

    function o1() {
        return this.hours() % 12 || 12
    }

    function i1(e, t) {
        n(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function a1(e, t) {
        return t._meridiemParse
    }
    n("H", ["HH", 2], 0, "hour"), n("h", ["hh", 2], 0, o1), n("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), n("hmm", 0, 0, function() {
        return "" + o1.apply(this) + z(this.minutes(), 2)
    }), n("hmmss", 0, 0, function() {
        return "" + o1.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
    }), n("Hmm", 0, 0, function() {
        return "" + this.hours() + z(this.minutes(), 2)
    }), n("Hmmss", 0, 0, function() {
        return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
    }), i1("a", !0), i1("A", !1), t("hour", "h"), c("hour", 13), O("a", a1), O("A", a1), O("H", m), O("h", m), O("k", m), O("HH", m, h), O("hh", m, h), O("kk", m, h), O("hmm", d0), O("hmmss", f0), O("Hmm", d0), O("Hmmss", f0), L(["H", "HH"], W), L(["k", "kk"], function(e, t, c) {
        e = p(e);
        t[W] = 24 === e ? 0 : e
    }), L(["a", "A"], function(e, t, c) {
        c._isPm = c._locale.isPM(e), c._meridiem = e
    }), L(["h", "hh"], function(e, t, c) {
        t[W] = p(e), A(c).bigHour = !0
    }), L("hmm", function(e, t, c) {
        var n = e.length - 2;
        t[W] = p(e.substr(0, n)), t[T] = p(e.substr(n)), A(c).bigHour = !0
    }), L("hmmss", function(e, t, c) {
        var n = e.length - 4,
            o = e.length - 2;
        t[W] = p(e.substr(0, n)), t[T] = p(e.substr(n, 2)), t[y] = p(e.substr(o)), A(c).bigHour = !0
    }), L("Hmm", function(e, t, c) {
        var n = e.length - 2;
        t[W] = p(e.substr(0, n)), t[T] = p(e.substr(n))
    }), L("Hmmss", function(e, t, c) {
        var n = e.length - 4,
            o = e.length - 2;
        t[W] = p(e.substr(0, n)), t[T] = p(e.substr(n, 2)), t[y] = p(e.substr(o))
    });
    var r1, q0 = w0("Hours", !0),
        M1 = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: k0,
            monthsShort: D0,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: J0,
            weekdaysMin: $0,
            weekdaysShort: Z0,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        X = {},
        s1 = {};

    function u1(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function p1(e) {
        var t;
        if (!X[e] && "undefined" != typeof module && module && module.exports) try {
            t = r1._abbr, require("./locale/" + e), l1(t)
        } catch (e) {}
        return X[e]
    }

    function l1(e, t) {
        return e && ((t = i(t) ? f1(e) : d1(e, t)) ? r1 = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), r1._abbr
    }

    function d1(e, t) {
        if (null === t) return delete X[e], null;
        var c, n = M1;
        if (t.abbr = e, null != X[e]) J("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = X[e]._config;
        else if (null != t.parentLocale)
            if (null != X[t.parentLocale]) n = X[t.parentLocale]._config;
            else {
                if (null == (c = p1(t.parentLocale))) return s1[t.parentLocale] || (s1[t.parentLocale] = []), s1[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                n = c._config
            }
        return X[e] = new $(Z(n, t)), s1[e] && s1[e].forEach(function(e) {
            d1(e.name, e.config)
        }), l1(e), X[e]
    }

    function f1(e) {
        var t;
        if (e = e && e._locale && e._locale._abbr ? e._locale._abbr : e) {
            if (!M(e)) {
                if (t = p1(e)) return t;
                e = [e]
            }
            for (var c, n, o, i, a = e, r = 0; r < a.length;) {
                for (c = (i = u1(a[r]).split("-")).length, n = (n = u1(a[r + 1])) ? n.split("-") : null; 0 < c;) {
                    if (o = p1(i.slice(0, c).join("-"))) return o;
                    if (n && n.length >= c && K(i, n, !0) >= c - 1) break;
                    c--
                }
                r++
            }
        }
        return r1
    }

    function A1(e) {
        var t = e._a;
        return t && -2 === A(e).overflow && (t = t[N] < 0 || 11 < t[N] ? N : t[g] < 1 || t[g] > x0(t[q], t[N]) ? g : t[W] < 0 || 24 < t[W] || 24 === t[W] && (0 !== t[T] || 0 !== t[y] || 0 !== t[y0]) ? W : t[T] < 0 || 59 < t[T] ? T : t[y] < 0 || 59 < t[y] ? y : t[y0] < 0 || 999 < t[y0] ? y0 : -1, A(e)._overflowDayOfYear && (t < q || g < t) && (t = g), A(e)._overflowWeeks && -1 === t && (t = v0), A(e)._overflowWeekday && -1 === t && (t = X0), A(e).overflow = t), e
    }

    function b1(e, t, c) {
        return null != e ? e : null != t ? t : c
    }

    function z1(e) {
        var t, c, n, o, i, a, r, M, s = [];
        if (!e._d) {
            var u = e,
                p = new Date(d.now()),
                l = u._useUTC ? [p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()] : [p.getFullYear(), p.getMonth(), p.getDate()];
            for (e._w && null == e._a[g] && null == e._a[N] && (null != (p = (u = e)._w).GG || null != p.W || null != p.E ? (o = 1, i = 4, r = b1(p.GG, u._a[q], K0(B(), 1, 4).year), M = b1(p.W, 1), ((c = b1(p.E, 1)) < 1 || 7 < c) && (n = !0)) : (o = u._locale._week.dow, i = u._locale._week.doy, a = K0(B(), o, i), r = b1(p.gg, u._a[q], a.year), M = b1(p.w, a.week), null != p.d ? ((c = p.d) < 0 || 6 < c) && (n = !0) : null != p.e ? (c = p.e + o, (p.e < 0 || 6 < p.e) && (n = !0)) : c = o), M < 1 || M > V0(r, o, i) ? A(u)._overflowWeeks = !0 : null != n ? A(u)._overflowWeekday = !0 : (a = G0(r, M, c, o, i), u._a[q] = a.year, u._dayOfYear = a.dayOfYear)), null != e._dayOfYear && (p = b1(e._a[q], l[q]), (e._dayOfYear > B0(p) || 0 === e._dayOfYear) && (A(e)._overflowDayOfYear = !0), n = F0(p, 0, e._dayOfYear), e._a[N] = n.getUTCMonth(), e._a[g] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = l[t];
            for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[W] && 0 === e._a[T] && 0 === e._a[y] && 0 === e._a[y0] && (e._nextDay = !0, e._a[W] = 0), e._d = (e._useUTC ? F0 : function(e, t, c, n, o, i, a) {
                var r;
                return e < 100 && 0 <= e ? (r = new Date(e + 400, t, c, n, o, i, a), isFinite(r.getFullYear()) && r.setFullYear(e)) : r = new Date(e, t, c, n, o, i, a), r
            }).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[W] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (A(e).weekdayMismatch = !0)
        }
    }
    var h1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        m1 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        O1 = /Z|[+-]\d\d(?::?\d\d)?/,
        L1 = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        q1 = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        N1 = /^\/?Date\((\-?\d+)/i;

    function g1(e) {
        var t, c, n, o, i, a, r = e._i,
            M = h1.exec(r) || m1.exec(r);
        if (M) {
            for (A(e).iso = !0, t = 0, c = L1.length; t < c; t++)
                if (L1[t][1].exec(M[1])) {
                    o = L1[t][0], n = !1 !== L1[t][2];
                    break
                }
            if (null == o) return e._isValid = !1;
            if (M[3]) {
                for (t = 0, c = q1.length; t < c; t++)
                    if (q1[t][1].exec(M[3])) {
                        i = (M[2] || " ") + q1[t][0];
                        break
                    }
                if (null == i) return e._isValid = !1
            }
            if (!n && null != i) return e._isValid = !1;
            if (M[4]) {
                if (!O1.exec(M[4])) return e._isValid = !1;
                a = "Z"
            }
            e._f = o + (i || "") + (a || ""), v1(e)
        } else e._isValid = !1
    }
    var W1 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    var T1 = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };

    function y1(e) {
        var t, c, n, o, i, a, r = W1.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        r ? (t = r[4], c = r[3], n = r[2], o = r[5], i = r[6], a = r[7], t = [(t = parseInt(t, 10)) <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t, D0.indexOf(c), parseInt(n, 10), parseInt(o, 10), parseInt(i, 10)], a && t.push(parseInt(a, 10)), n = c = t, o = e, (i = r[1]) && Z0.indexOf(i) !== new Date(n[0], n[1], n[2]).getDay() ? (A(o).weekdayMismatch = !0, o._isValid = !1) : (e._a = c, e._tzm = (a = r[8], t = r[9], i = r[10], a ? T1[a] : t ? 0 : ((a = parseInt(i, 10)) - (t = a % 100)) / 100 * 60 + t), e._d = F0.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), A(e).rfc2822 = !0)) : e._isValid = !1
    }

    function v1(e) {
        if (e._f !== d.ISO_8601)
            if (e._f !== d.RFC_2822) {
                e._a = [], A(e).empty = !0;
                for (var t, c, n, o = "" + e._i, i = o.length, a = 0, r = s0(e._f, e._locale).match(o0) || [], M = 0; M < r.length; M++) t = r[M], (l = (o.match((l = e, f(N0, p = t) ? N0[p](l._strict, l._locale) : new RegExp(g0(p.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, c, n, o) {
                    return t || c || n || o
                }))))) || [])[0]) && (0 < (p = o.substr(0, o.indexOf(l))).length && A(e).unusedInput.push(p), o = o.slice(o.indexOf(l) + l.length), a += l.length), r0[t] ? (l ? A(e).empty = !1 : A(e).unusedTokens.push(t), p = t, n = e, null != (c = l) && f(W0, p) && W0[p](c, n._a, n, p)) : e._strict && !l && A(e).unusedTokens.push(t);
                A(e).charsLeftOver = i - a, 0 < o.length && A(e).unusedInput.push(o), e._a[W] <= 12 && !0 === A(e).bigHour && 0 < e._a[W] && (A(e).bigHour = void 0), A(e).parsedDateParts = e._a.slice(0), A(e).meridiem = e._meridiem, e._a[W] = (i = e._locale, s = e._a[W], null == (u = e._meridiem) ? s : null != i.meridiemHour ? i.meridiemHour(s, u) : (null != i.isPM && ((i = i.isPM(u)) && s < 12 && (s += 12), i || 12 !== s || (s = 0)), s)), z1(e), A1(e)
            } else y1(e);
        else g1(e);
        var s, u, p, l
    }

    function X1(e) {
        var t, c, n = e._i,
            o = e._f;
        return e._locale = e._locale || f1(e._l), null === n || void 0 === o && "" === n ? I({
            nullInput: !0
        }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), a(n) ? new G(A1(n)) : (D(n) ? e._d = n : M(o) ? function(e) {
            var t, c, n, o, i;
            if (0 === e._f.length) return A(e).invalidFormat = !0, e._d = new Date(NaN);
            for (o = 0; o < e._f.length; o++) i = 0, t = F({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[o], v1(t), H(t) && (i = (i += A(t).charsLeftOver) + 10 * A(t).unusedTokens.length, A(t).score = i, null == n || i < n) && (n = i, c = t);
            r(e, c || t)
        }(e) : o ? v1(e) : i(o = (n = e)._i) ? n._d = new Date(d.now()) : D(o) ? n._d = new Date(o.valueOf()) : "string" == typeof o ? (t = n, null === (c = N1.exec(t._i)) ? (g1(t), !1 === t._isValid && (delete t._isValid, y1(t), !1 === t._isValid) && (delete t._isValid, d.createFromInputFallback(t))) : t._d = new Date(+c[1])) : M(o) ? (n._a = P(o.slice(0), function(e) {
            return parseInt(e, 10)
        }), z1(n)) : R(o) ? (t = n)._d || (c = c0(t._i), t._a = P([c.year, c.month, c.day || c.date, c.hour, c.minute, c.second, c.millisecond], function(e) {
            return e && parseInt(e, 10)
        }), z1(t)) : k(o) ? n._d = new Date(o) : d.createFromInputFallback(n), H(e) || (e._d = null), e))
    }

    function B1(e, t, c, n, o) {
        var i = {};
        return !0 !== c && !1 !== c || (n = c, c = void 0), (R(e) && function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            for (var t in e)
                if (e.hasOwnProperty(t)) return;
            return 1
        }(e) || M(e) && 0 === e.length) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = o, i._l = c, i._i = e, i._f = t, i._strict = n, (o = new G(A1(X1(i))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
    }

    function B(e, t, c, n) {
        return B1(e, t, c, n, !1)
    }
    d.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), d.ISO_8601 = function() {}, d.RFC_2822 = function() {};
    d0 = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = B.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : I()
    }), f0 = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = B.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : I()
    });

    function S1(e, t) {
        var c, n;
        if (!(t = 1 === t.length && M(t[0]) ? t[0] : t).length) return B();
        for (c = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](c) || (c = t[n]);
        return c
    }
    var C1 = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function w1(e) {
        var e = c0(e),
            t = e.year || 0,
            c = e.quarter || 0,
            n = e.month || 0,
            o = e.week || e.isoWeek || 0,
            i = e.day || 0,
            a = e.hour || 0,
            r = e.minute || 0,
            M = e.second || 0,
            s = e.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === v.call(C1, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var c = !1, n = 0; n < C1.length; ++n)
                if (e[C1[n]]) {
                    if (c) return !1;
                    parseFloat(e[C1[n]]) !== p(e[C1[n]]) && (c = !0)
                }
            return !0
        }(e), this._milliseconds = +s + 1e3 * M + 6e4 * r + 1e3 * a * 60 * 60, this._days = +i + 7 * o, this._months = +n + 3 * c + 12 * t, this._data = {}, this._locale = f1(), this._bubble()
    }

    function E1(e) {
        return e instanceof w1
    }

    function _1(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function x1(e, c) {
        n(e, 0, 0, function() {
            var e = this.utcOffset(),
                t = "+";
            return e < 0 && (e = -e, t = "-"), t + z(~~(e / 60), 2) + c + z(~~e % 60, 2)
        })
    }
    x1("Z", ":"), x1("ZZ", ""), O("Z", L0), O("ZZ", L0), L(["Z", "ZZ"], function(e, t, c) {
        c._useUTC = !0, c._tzm = k1(L0, e)
    });
    var R1 = /([\+\-]|\d\d)/gi;

    function k1(e, t) {
        var t = (t || "").match(e);
        return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(R1) || ["-", 0, 0])[1] + p(e[2])) ? 0 : "+" === e[0] ? t : -t
    }

    function D1(e, t) {
        var c;
        return t._isUTC ? (t = t.clone(), c = (a(e) || D(e) ? e : B(e)).valueOf() - t.valueOf(), t._d.setTime(t._d.valueOf() + c), d.updateOffset(t, !1), t) : B(e).local()
    }

    function P1(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function H1() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    d.updateOffset = function() {};
    var I1 = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        j1 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function S(e, t) {
        var c, n, o = e;
        return E1(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : k(e) ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (t = I1.exec(e)) ? (c = "-" === t[1] ? -1 : 1, o = {
            y: 0,
            d: p(t[g]) * c,
            h: p(t[W]) * c,
            m: p(t[T]) * c,
            s: p(t[y]) * c,
            ms: p(_1(1e3 * t[y0])) * c
        }) : (t = j1.exec(e)) ? (c = "-" === t[1] ? -1 : 1, o = {
            y: U1(t[2], c),
            M: U1(t[3], c),
            w: U1(t[4], c),
            d: U1(t[5], c),
            h: U1(t[6], c),
            m: U1(t[7], c),
            s: U1(t[8], c)
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (t = B(o.from), c = B(o.to), t = t.isValid() && c.isValid() ? (c = D1(c, t), t.isBefore(c) ? n = F1(t, c) : ((n = F1(c, t)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }, (o = {}).ms = t.milliseconds, o.M = t.months), n = new w1(o), E1(e) && f(e, "_locale") && (n._locale = e._locale), n
    }

    function U1(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }

    function F1(e, t) {
        var c = {};
        return c.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(c.months, "M").isAfter(t) && --c.months, c.milliseconds = +t - +e.clone().add(c.months, "M"), c
    }

    function Y1(n, o) {
        return function(e, t) {
            var c;
            return null === t || isNaN(+t) || (J(o, "moment()." + o + "(period, number) is deprecated. Please use moment()." + o + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), c = e, e = t, t = c), G1(this, S(e = "string" == typeof e ? +e : e, t), n), this
        }
    }

    function G1(e, t, c, n) {
        var o = t._milliseconds,
            i = _1(t._days),
            t = _1(t._months);
        e.isValid() && (n = null == n || n, t && P0(e, E0(e, "Month") + t * c), i && _0(e, "Date", E0(e, "Date") + i * c), o && e._d.setTime(e._d.valueOf() + o * c), n) && d.updateOffset(e, i || t)
    }
    S.fn = w1.prototype, S.invalid = function() {
        return S(NaN)
    };
    k0 = Y1(1, "add"), J0 = Y1(-1, "subtract");

    function K1(e, t) {
        var c = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            n = e.clone().add(c, "months");
        return -(c + (t - n < 0 ? (t - n) / (n - e.clone().add(c - 1, "months")) : (t - n) / (e.clone().add(1 + c, "months") - n))) || 0
    }

    function V1(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = f1(e)) && (this._locale = e), this)
    }
    d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    $0 = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function Q1() {
        return this._locale
    }
    var J1 = 126227808e5;

    function Z1(e, t) {
        return (e % t + t) % t
    }

    function $1(e, t, c) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, c) - J1 : new Date(e, t, c).valueOf()
    }

    function ee(e, t, c) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, c) - J1 : Date.UTC(e, t, c)
    }

    function te(e, t) {
        n(0, [e, e.length], 0, t)
    }

    function ce(e, t, c, n, o) {
        var i;
        return null == e ? K0(this, n, o).year : ((i = V0(e, n, o)) < t && (t = i), function(e, t, c, n, o) {
            e = G0(e, t, c, n, o), t = F0(e.year, 0, e.dayOfYear);
            return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this
        }.call(this, e, t, c, n, o))
    }
    n(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), n(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), te("gggg", "weekYear"), te("ggggg", "weekYear"), te("GGGG", "isoWeekYear"), te("GGGGG", "isoWeekYear"), t("weekYear", "gg"), t("isoWeekYear", "GG"), c("weekYear", 1), c("isoWeekYear", 1), O("G", m0), O("g", m0), O("GG", m, h), O("gg", m, h), O("GGGG", b0, p0), O("gggg", b0, p0), O("GGGGG", z0, l0), O("ggggg", z0, l0), T0(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, c, n) {
        t[n.substr(0, 2)] = p(e)
    }), T0(["gg", "GG"], function(e, t, c, n) {
        t[n] = d.parseTwoDigitYear(e)
    }), n("Q", 0, "Qo", "quarter"), t("quarter", "Q"), c("quarter", 7), O("Q", o), L("Q", function(e, t) {
        t[N] = 3 * (p(e) - 1)
    }), n("D", ["DD", 2], "Do", "date"), t("date", "D"), c("date", 9), O("D", m), O("DD", m, h), O("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), L(["D", "DD"], g), L("Do", function(e, t) {
        t[g] = p(e.match(m)[0])
    });
    b0 = w0("Date", !0), n("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), t("dayOfYear", "DDD"), c("dayOfYear", 4), O("DDD", A0), O("DDDD", u0), L(["DDD", "DDDD"], function(e, t, c) {
        c._dayOfYear = p(e)
    }), n("m", ["mm", 2], 0, "minute"), t("minute", "m"), c("minute", 14), O("m", m), O("mm", m, h), L(["m", "mm"], T), p0 = w0("Minutes", !1);
    n("s", ["ss", 2], 0, "second"), t("second", "s"), c("second", 15), O("s", m), O("ss", m, h), L(["s", "ss"], y);
    var ne, z0 = w0("Seconds", !1);
    for (n("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), n(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), n(0, ["SSS", 3], 0, "millisecond"), n(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), n(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), n(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), n(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), n(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), n(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), t("millisecond", "ms"), c("millisecond", 16), O("S", A0, o), O("SS", A0, h), O("SSS", A0, u0), ne = "SSSS"; ne.length <= 9; ne += "S") O(ne, h0);

    function oe(e, t) {
        t[y0] = p(1e3 * ("0." + e))
    }
    for (ne = "S"; ne.length <= 9; ne += "S") L(ne, oe);
    l0 = w0("Milliseconds", !1), n("z", 0, 0, "zoneAbbr"), n("zz", 0, 0, "zoneName"), o = G.prototype;

    function ie(e) {
        return e
    }
    o.add = k0, o.calendar = function(e, t) {
        var e = e || B(),
            c = D1(e, this).startOf("day"),
            c = d.calendarFormat(this, c) || "sameElse",
            t = t && (l(t[c]) ? t[c].call(this, e) : t[c]);
        return this.format(t || this.localeData().calendar(c, this, B(e)))
    }, o.clone = function() {
        return new G(this)
    }, o.diff = function(e, t, c) {
        var n, o, i;
        if (!this.isValid()) return NaN;
        if (!(n = D1(e, this)).isValid()) return NaN;
        switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), t = b(t)) {
            case "year":
                i = K1(this, n) / 12;
                break;
            case "month":
                i = K1(this, n);
                break;
            case "quarter":
                i = K1(this, n) / 3;
                break;
            case "second":
                i = (this - n) / 1e3;
                break;
            case "minute":
                i = (this - n) / 6e4;
                break;
            case "hour":
                i = (this - n) / 36e5;
                break;
            case "day":
                i = (this - n - o) / 864e5;
                break;
            case "week":
                i = (this - n - o) / 6048e5;
                break;
            default:
                i = this - n
        }
        return c ? i : u(i)
    }, o.endOf = function(e) {
        var t;
        if (void 0 !== (e = b(e)) && "millisecond" !== e && this.isValid()) {
            var c = this._isUTC ? ee : $1;
            switch (e) {
                case "year":
                    t = c(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    t = c(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    t = c(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    t = c(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    t = c(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    t = c(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    t = this._d.valueOf(), t += 36e5 - Z1(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case "minute":
                    t = this._d.valueOf(), t += 6e4 - Z1(t, 6e4) - 1;
                    break;
                case "second":
                    t = this._d.valueOf(), t += 1e3 - Z1(t, 1e3) - 1
            }
            this._d.setTime(t), d.updateOffset(this, !0)
        }
        return this
    }, o.format = function(e) {
        e = e || (this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
        e = M0(this, e);
        return this.localeData().postformat(e)
    }, o.from = function(e, t) {
        return this.isValid() && (a(e) && e.isValid() || B(e).isValid()) ? S({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, o.fromNow = function(e) {
        return this.from(B(), e)
    }, o.to = function(e, t) {
        return this.isValid() && (a(e) && e.isValid() || B(e).isValid()) ? S({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, o.toNow = function(e) {
        return this.to(B(), e)
    }, o.get = function(e) {
        return l(this[e = b(e)]) ? this[e]() : this
    }, o.invalidAt = function() {
        return A(this).overflow
    }, o.isAfter = function(e, t) {
        e = a(e) ? e : B(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = b(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }, o.isBefore = function(e, t) {
        e = a(e) ? e : B(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = b(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }, o.isBetween = function(e, t, c, n) {
        e = a(e) ? e : B(e), t = a(t) ? t : B(t);
        return !!(this.isValid() && e.isValid() && t.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(e, c) : !this.isBefore(e, c)) && (")" === n[1] ? this.isBefore(t, c) : !this.isAfter(t, c))
    }, o.isSame = function(e, t) {
        var e = a(e) ? e : B(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = b(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }, o.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, o.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, o.isValid = function() {
        return H(this)
    }, o.lang = $0, o.locale = V1, o.localeData = Q1, o.max = f0, o.min = d0, o.parsingFlags = function() {
        return r({}, A(this))
    }, o.set = function(c, e) {
        if ("object" == typeof c)
            for (var t = function() {
                    var e, t = [];
                    for (e in c) t.push({
                        unit: e,
                        priority: n0[e]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }(c = c0(c)), n = 0; n < t.length; n++) this[t[n].unit](c[t[n].unit]);
        else if (l(this[c = b(c)])) return this[c](e);
        return this
    }, o.startOf = function(e) {
        var t;
        if (void 0 !== (e = b(e)) && "millisecond" !== e && this.isValid()) {
            var c = this._isUTC ? ee : $1;
            switch (e) {
                case "year":
                    t = c(this.year(), 0, 1);
                    break;
                case "quarter":
                    t = c(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    t = c(this.year(), this.month(), 1);
                    break;
                case "week":
                    t = c(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    t = c(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    t = c(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    t = this._d.valueOf(), t -= Z1(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case "minute":
                    t = this._d.valueOf(), t -= Z1(t, 6e4);
                    break;
                case "second":
                    t = this._d.valueOf(), t -= Z1(t, 1e3)
            }
            this._d.setTime(t), d.updateOffset(this, !0)
        }
        return this
    }, o.subtract = J0, o.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, o.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, o.toDate = function() {
        return new Date(this.valueOf())
    }, o.toISOString = function(e) {
        var t;
        return this.isValid() ? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 || 9999 < t.year() ? M0(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : l(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", M0(t, "Z")) : M0(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") : null
    }, o.inspect = function() {
        var e, t, c;
        return this.isValid() ? (t = "moment", e = "", this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z"), t = "[" + t + '("]', c = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(t + c + "-MM-DD[T]HH:mm:ss.SSS" + (e + '[")]'))) : "moment.invalid(/* " + this._i + " */)"
    }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, o.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, o.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, o.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, o.year = C0, o.isLeapYear = function() {
        return S0(this.year())
    }, o.weekYear = function(e) {
        return ce.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, o.isoWeekYear = function(e) {
        return ce.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, o.quarter = o.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, o.month = H0, o.daysInMonth = function() {
        return x0(this.year(), this.month())
    }, o.week = o.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, o.isoWeek = o.isoWeeks = function(e) {
        var t = K0(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, o.weeksInYear = function() {
        var e = this.localeData()._week;
        return V0(this.year(), e.dow, e.doy)
    }, o.isoWeeksInYear = function() {
        return V0(this.year(), 1, 4)
    }, o.date = b0, o.day = o.days = function(e) {
        var t, c, n;
        return this.isValid() ? (n = this._isUTC ? this._d.getUTCDay() : this._d.getDay(), null != e ? (t = e, c = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = c.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - n, "d")) : n) : null != e ? this : NaN
    }, o.weekday = function(e) {
        var t;
        return this.isValid() ? (t = (this.day() + 7 - this.localeData()._week.dow) % 7, null == e ? t : this.add(e - t, "d")) : null != e ? this : NaN
    }, o.isoWeekday = function(e) {
        var t, c;
        return this.isValid() ? null == e ? this.day() || 7 : (t = e, c = this.localeData(), c = "string" == typeof t ? c.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? c : c - 7)) : null != e ? this : NaN
    }, o.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, o.hour = o.hours = q0, o.minute = o.minutes = p0, o.second = o.seconds = z0, o.millisecond = o.milliseconds = l0, o.utcOffset = function(e, t, c) {
        var n, o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? o : P1(this);
        if ("string" == typeof e) {
            if (null === (e = k1(L0, e))) return this
        } else Math.abs(e) < 16 && !c && (e *= 60);
        return !this._isUTC && t && (n = P1(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), o !== e && (!t || this._changeInProgress ? G1(this, S(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this
    }, o.utc = function(e) {
        return this.utcOffset(0, e)
    }, o.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e) && this.subtract(P1(this), "m"), this
    }, o.parseZone = function() {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = k1(O0, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
    }, o.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? B(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, o.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, o.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, o.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, o.isUtc = H1, o.isUTC = H1, o.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, o.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, o.dates = e("dates accessor is deprecated. Use date instead.", b0), o.months = e("months accessor is deprecated. Use month instead", H0), o.years = e("years accessor is deprecated. Use year instead", C0), o.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
    }), o.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        var e, t;
        return i(this._isDSTShifted) && (F(e = {}, this), (e = X1(e))._a ? (t = (e._isUTC ? s : B)(e._a), this._isDSTShifted = this.isValid() && 0 < K(e._a, t.toArray())) : this._isDSTShifted = !1), this._isDSTShifted
    });
    h = $.prototype;

    function ae(e, t, c, n) {
        var o = f1(),
            n = s().set(n, t);
        return o[c](n, e)
    }

    function re(e, t, c) {
        if (k(e) && (t = e, e = void 0), e = e || "", null != t) return ae(e, t, c, "month");
        for (var n = [], o = 0; o < 12; o++) n[o] = ae(e, o, c, "month");
        return n
    }

    function Me(e, t, c, n) {
        "boolean" == typeof e ? k(t) && (c = t, t = void 0) : (t = e, e = !1, k(c = t) && (c = t, t = void 0)), t = t || "";
        var o = f1(),
            i = e ? o._week.dow : 0;
        if (null != c) return ae(t, (c + i) % 7, n, "day");
        for (var a = [], r = 0; r < 7; r++) a[r] = ae(t, (r + i) % 7, n, "day");
        return a
    }
    h.calendar = function(e, t, c) {
        e = this._calendar[e] || this._calendar.sameElse;
        return l(e) ? e.call(t, c) : e
    }, h.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
            c = this._longDateFormat[e.toUpperCase()];
        return t || !c ? t : (this._longDateFormat[e] = c.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, h.invalidDate = function() {
        return this._invalidDate
    }, h.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }, h.preparse = ie, h.postformat = ie, h.relativeTime = function(e, t, c, n) {
        var o = this._relativeTime[c];
        return l(o) ? o(e, t, c, n) : o.replace(/%d/i, e)
    }, h.pastFuture = function(e, t) {
        e = this._relativeTime[0 < e ? "future" : "past"];
        return l(e) ? e(t) : e.replace(/%s/i, t)
    }, h.set = function(e) {
        var t, c;
        for (c in e) l(t = e[c]) ? this[c] = t : this["_" + c] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, h.months = function(e, t) {
        return e ? (M(this._months) ? this._months : this._months[(this._months.isFormat || R0).test(t) ? "format" : "standalone"])[e.month()] : M(this._months) ? this._months : this._months.standalone
    }, h.monthsShort = function(e, t) {
        return e ? (M(this._monthsShort) ? this._monthsShort : this._monthsShort[R0.test(t) ? "format" : "standalone"])[e.month()] : M(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, h.monthsParse = function(e, t, c) {
        var n, o;
        if (this._monthsParseExact) return function(e, t, c) {
            var n, o, i, e = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = s([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
            return c ? "MMM" === t ? -1 !== (o = v.call(this._shortMonthsParse, e)) ? o : null : -1 !== (o = v.call(this._longMonthsParse, e)) ? o : null : "MMM" === t ? -1 !== (o = v.call(this._shortMonthsParse, e)) || -1 !== (o = v.call(this._longMonthsParse, e)) ? o : null : -1 !== (o = v.call(this._longMonthsParse, e)) || -1 !== (o = v.call(this._shortMonthsParse, e)) ? o : null
        }.call(this, e, t, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (o = s([2e3, n]), c && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), c || this._monthsParse[n] || (o = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), c && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
            if (c && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
            if (!c && this._monthsParse[n].test(e)) return n
        }
    }, h.monthsRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || U0.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = j0), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, h.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || U0.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = I0), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, h.week = function(e) {
        return K0(e, this._week.dow, this._week.doy).week
    }, h.firstDayOfYear = function() {
        return this._week.doy
    }, h.firstDayOfWeek = function() {
        return this._week.dow
    }, h.weekdays = function(e, t) {
        t = M(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Q0(t, this._week.dow) : e ? t[e.day()] : t
    }, h.weekdaysMin = function(e) {
        return !0 === e ? Q0(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, h.weekdaysShort = function(e) {
        return !0 === e ? Q0(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, h.weekdaysParse = function(e, t, c) {
        var n, o;
        if (this._weekdaysParseExact) return function(e, t, c) {
            var n, o, i, e = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = s([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
            return c ? "dddd" === t ? -1 !== (o = v.call(this._weekdaysParse, e)) ? o : null : "ddd" === t ? -1 !== (o = v.call(this._shortWeekdaysParse, e)) ? o : null : -1 !== (o = v.call(this._minWeekdaysParse, e)) ? o : null : "dddd" === t ? -1 !== (o = v.call(this._weekdaysParse, e)) || -1 !== (o = v.call(this._shortWeekdaysParse, e)) || -1 !== (o = v.call(this._minWeekdaysParse, e)) ? o : null : "ddd" === t ? -1 !== (o = v.call(this._shortWeekdaysParse, e)) || -1 !== (o = v.call(this._weekdaysParse, e)) || -1 !== (o = v.call(this._minWeekdaysParse, e)) ? o : null : -1 !== (o = v.call(this._minWeekdaysParse, e)) || -1 !== (o = v.call(this._weekdaysParse, e)) || -1 !== (o = v.call(this._shortWeekdaysParse, e)) ? o : null
        }.call(this, e, t, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (o = s([2e3, 1]).day(n), c && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), c && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
            if (c && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
            if (c && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
            if (!c && this._weekdaysParse[n].test(e)) return n
        }
    }, h.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || n1.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = e1), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, h.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || n1.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = t1), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, h.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || n1.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = c1), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, h.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, h.meridiem = function(e, t, c) {
        return 11 < e ? c ? "pm" : "PM" : c ? "am" : "AM"
    }, l1("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === p(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }), d.lang = e("moment.lang is deprecated. Use moment.locale instead.", l1), d.langData = e("moment.langData is deprecated. Use moment.localeData instead.", f1);
    var C = Math.abs;

    function se(e, t, c, n) {
        t = S(t, c);
        return e._milliseconds += n * t._milliseconds, e._days += n * t._days, e._months += n * t._months, e._bubble()
    }

    function ue(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function pe(e) {
        return 4800 * e / 146097
    }

    function le(e) {
        return 146097 * e / 4800
    }

    function w(e) {
        return function() {
            return this.as(e)
        }
    }
    A0 = w("ms"), u0 = w("s"), k0 = w("m"), f0 = w("h"), d0 = w("d"), J0 = w("w"), q0 = w("M"), p0 = w("Q"), z0 = w("y");

    function de(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var l0 = de("milliseconds"),
        b0 = de("seconds"),
        C0 = de("minutes"),
        h = de("hours"),
        fe = de("days"),
        Ae = de("months"),
        be = de("years"),
        ze = Math.round,
        E = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        he = Math.abs;

    function me(e) {
        return (0 < e) - (e < 0) || +e
    }

    function Oe() {
        var e, t, c, n, o, i, a, r, M, s;
        return this.isValid() ? (i = he(this._milliseconds) / 1e3, c = he(this._days), t = he(this._months), n = u((o = u(i / 60)) / 60), i %= 60, o %= 60, e = u(t / 12), t = t %= 12, c = c, n = n, o = o, i = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", (a = this.asSeconds()) ? (r = me(this._months) !== me(a) ? "-" : "", M = me(this._days) !== me(a) ? "-" : "", s = me(this._milliseconds) !== me(a) ? "-" : "", (a < 0 ? "-" : "") + "P" + (e ? r + e + "Y" : "") + (t ? r + t + "M" : "") + (c ? M + c + "D" : "") + (n || o || i ? "T" : "") + (n ? s + n + "H" : "") + (o ? s + o + "M" : "") + (i ? s + i + "S" : "")) : "P0D") : this.localeData().invalidDate()
    }
    var _ = w1.prototype;
    return _.isValid = function() {
        return this._isValid
    }, _.abs = function() {
        var e = this._data;
        return this._milliseconds = C(this._milliseconds), this._days = C(this._days), this._months = C(this._months), e.milliseconds = C(e.milliseconds), e.seconds = C(e.seconds), e.minutes = C(e.minutes), e.hours = C(e.hours), e.months = C(e.months), e.years = C(e.years), this
    }, _.add = function(e, t) {
        return se(this, e, t, 1)
    }, _.subtract = function(e, t) {
        return se(this, e, t, -1)
    }, _.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, c, n = this._milliseconds;
        if ("month" === (e = b(e)) || "quarter" === e || "year" === e) switch (t = this._days + n / 864e5, c = this._months + pe(t), e) {
            case "month":
                return c;
            case "quarter":
                return c / 3;
            case "year":
                return c / 12
        } else switch (t = this._days + Math.round(le(this._months)), e) {
            case "week":
                return t / 7 + n / 6048e5;
            case "day":
                return t + n / 864e5;
            case "hour":
                return 24 * t + n / 36e5;
            case "minute":
                return 1440 * t + n / 6e4;
            case "second":
                return 86400 * t + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + n;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, _.asMilliseconds = A0, _.asSeconds = u0, _.asMinutes = k0, _.asHours = f0, _.asDays = d0, _.asWeeks = J0, _.asMonths = q0, _.asQuarters = p0, _.asYears = z0, _.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12) : NaN
    }, _._bubble = function() {
        var e = this._milliseconds,
            t = this._days,
            c = this._months,
            n = this._data;
        return 0 <= e && 0 <= t && 0 <= c || e <= 0 && t <= 0 && c <= 0 || (e += 864e5 * ue(le(c) + t), c = t = 0), n.milliseconds = e % 1e3, e = u(e / 1e3), n.seconds = e % 60, e = u(e / 60), n.minutes = e % 60, e = u(e / 60), n.hours = e % 24, c += e = u(pe(t += u(e / 24))), t -= ue(le(e)), e = u(c / 12), c %= 12, n.days = t, n.months = c, n.years = e, this
    }, _.clone = function() {
        return S(this)
    }, _.get = function(e) {
        return e = b(e), this.isValid() ? this[e + "s"]() : NaN
    }, _.milliseconds = l0, _.seconds = b0, _.minutes = C0, _.hours = h, _.days = fe, _.weeks = function() {
        return u(this.days() / 7)
    }, _.months = Ae, _.years = be, _.humanize = function(e) {
        var t, c, n, o, i, a, r, M, s;
        return this.isValid() ? (t = !e, c = M = this.localeData(), a = S(this).abs(), r = ze(a.as("s")), s = ze(a.as("m")), n = ze(a.as("h")), o = ze(a.as("d")), i = ze(a.as("M")), a = ze(a.as("y")), (r = (r <= E.ss ? ["s", r] : r < E.s && ["ss", r]) || (s <= 1 ? ["m"] : s < E.m && ["mm", s]) || (n <= 1 ? ["h"] : n < E.h && ["hh", n]) || (o <= 1 ? ["d"] : o < E.d && ["dd", o]) || (i <= 1 ? ["M"] : i < E.M && ["MM", i]) || (a <= 1 ? ["y"] : ["yy", a]))[2] = t, r[3] = 0 < +this, r[4] = c, s = function(e, t, c, n, o) {
            return o.relativeTime(t || 1, !!c, e, n)
        }.apply(null, r), e && (s = M.pastFuture(+this, s)), M.postformat(s)) : this.localeData().invalidDate()
    }, _.toISOString = Oe, _.toString = Oe, _.toJSON = Oe, _.locale = V1, _.localeData = Q1, _.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Oe), _.lang = $0, n("X", 0, 0, "unix"), n("x", 0, 0, "valueOf"), O("x", m0), O("X", /[+-]?\d+(\.\d{1,3})?/), L("X", function(e, t, c) {
        c._d = new Date(1e3 * parseFloat(e, 10))
    }), L("x", function(e, t, c) {
        c._d = new Date(p(e))
    }), d.version = "2.24.0", x = B, d.fn = o, d.min = function() {
        return S1("isBefore", [].slice.call(arguments, 0))
    }, d.max = function() {
        return S1("isAfter", [].slice.call(arguments, 0))
    }, d.now = function() {
        return Date.now ? Date.now() : +new Date
    }, d.utc = s, d.unix = function(e) {
        return B(1e3 * e)
    }, d.months = function(e, t) {
        return re(e, t, "months")
    }, d.isDate = D, d.locale = l1, d.invalid = I, d.duration = S, d.isMoment = a, d.weekdays = function(e, t, c) {
        return Me(e, t, c, "weekdays")
    }, d.parseZone = function() {
        return B.apply(null, arguments).parseZone()
    }, d.localeData = f1, d.isDuration = E1, d.monthsShort = function(e, t) {
        return re(e, t, "monthsShort")
    }, d.weekdaysMin = function(e, t, c) {
        return Me(e, t, c, "weekdaysMin")
    }, d.defineLocale = d1, d.updateLocale = function(e, t) {
        var c, n;
        return null != t ? (n = M1, (c = new $(t = Z(n = null != (c = p1(e)) ? c._config : n, t))).parentLocale = X[e], X[e] = c, l1(e)) : null != X[e] && (null != X[e].parentLocale ? X[e] = X[e].parentLocale : null != X[e] && delete X[e]), X[e]
    }, d.locales = function() {
        return e0(X)
    }, d.weekdaysShort = function(e, t, c) {
        return Me(e, t, c, "weekdaysShort")
    }, d.normalizeUnits = b, d.relativeTimeRounding = function(e) {
        return void 0 === e ? ze : "function" == typeof e && (ze = e, !0)
    }, d.relativeTimeThreshold = function(e, t) {
        return void 0 !== E[e] && (void 0 === t ? E[e] : (E[e] = t, "s" === e && (E.ss = t - 1), !0))
    }, d.calendarFormat = function(e, t) {
        e = e.diff(t, "days", !0);
        return e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse"
    }, d.prototype = o, d.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, d
}),
function(e, t) {
    "use strict";
    "object" == typeof module && module.exports ? module.exports = t(require("moment")) : "function" == typeof define && define.amd ? define(["moment"], t) : t(e.moment)
}(this, function(o) {
    "use strict";
    void 0 === o.version && o.default && (o = o.default);
    var t, s = {},
        i = {},
        a = {},
        u = {},
        p = {},
        e = (o && "string" == typeof o.version || v("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"), o.version.split(".")),
        c = +e[0],
        n = +e[1];

    function r(e) {
        return 96 < e ? e - 87 : 64 < e ? e - 29 : e - 48
    }

    function M(e) {
        var t = 0,
            c = e.split("."),
            n = c[0],
            o = c[1] || "",
            i = 1,
            a = 0,
            c = 1;
        for (45 === e.charCodeAt(0) && (c = -(t = 1)); t < n.length; t++) a = 60 * a + r(n.charCodeAt(t));
        for (t = 0; t < o.length; t++) i /= 60, a += r(o.charCodeAt(t)) * i;
        return a * c
    }

    function l(e) {
        for (var t = 0; t < e.length; t++) e[t] = M(e[t])
    }

    function d(e, t) {
        for (var c = [], n = 0; n < t.length; n++) c[n] = e[t[n]];
        return c
    }

    function f(e) {
        for (var e = e.split("|"), t = e[2].split(" "), c = e[3].split(""), n = e[4].split(" "), o = (l(t), l(c), l(n), n), i = c.length, a = 0; a < i; a++) o[a] = Math.round((o[a - 1] || 0) + 6e4 * o[a]);
        return o[i - 1] = 1 / 0, {
            name: e[0],
            abbrs: d(e[1].split(" "), c),
            offsets: d(t, c),
            untils: n,
            population: 0 | e[5]
        }
    }

    function A(e) {
        e && this._set(f(e))
    }

    function b(e, t) {
        this.name = e, this.zones = t
    }

    function z(e) {
        var t = e.toTimeString(),
            c = t.match(/\([a-z ]+\)/i);
        "GMT" === (c = c && c[0] ? (c = c[0].match(/[A-Z]/g)) ? c.join("") : void 0 : (c = t.match(/[A-Z]{3,5}/g)) ? c[0] : void 0) && (c = void 0), this.at = +e, this.abbr = c, this.offset = e.getTimezoneOffset()
    }

    function h(e) {
        this.zone = e, this.offsetScore = 0, this.abbrScore = 0
    }

    function m(e, t) {
        return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : e.zone.population !== t.zone.population ? t.zone.population - e.zone.population : t.zone.name.localeCompare(e.zone.name)
    }

    function O() {
        try {
            var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (e && 3 < e.length) {
                var t = u[L(e)];
                if (t) return t;
                v("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
            }
        } catch (e) {}
        for (var c, n, o = function() {
                for (var e, t, c = (new Date).getFullYear() - 2, n = new z(new Date(c, 0, 1)), o = [n], i = 1; i < 48; i++)(t = new z(new Date(c, i, 1))).offset !== n.offset && (e = function(e, t) {
                    for (var c; c = 6e4 * ((t.at - e.at) / 12e4 | 0);)(c = new z(new Date(e.at + c))).offset === e.offset ? e = c : t = c;
                    return e
                }(n, t), o.push(e), o.push(new z(new Date(e.at + 6e4)))), n = t;
                for (i = 0; i < 4; i++) o.push(new z(new Date(c + i, 0, 1))), o.push(new z(new Date(c + i, 6, 1)));
                return o
            }(), i = o.length, a = function(e) {
                for (var t, c, n = e.length, o = {}, i = [], a = 0; a < n; a++)
                    for (t in c = p[e[a].offset] || {}) c.hasOwnProperty(t) && (o[t] = !0);
                for (a in o) o.hasOwnProperty(a) && i.push(u[a]);
                return i
            }(o), r = [], M = 0; M < a.length; M++) {
            for (c = new h(N(a[M])), n = 0; n < i; n++) c.scoreOffsetAt(o[n]);
            r.push(c)
        }
        return r.sort(m), 0 < r.length ? r[0].zone.name : void 0
    }

    function L(e) {
        return (e || "").toLowerCase().replace(/\//g, "_")
    }

    function q(e) {
        var t, c, n, o, i, a;
        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) {
            o = L(c = (n = e[t].split("|"))[0]), s[o] = e[t], u[o] = c; {
                i = void 0;
                a = void 0;
                var r = o;
                var M = n[2].split(" ");
                for (l(M), i = 0; i < M.length; i++) a = M[i], p[a] = p[a] || {}, p[a][r] = !0
            }
        }
    }

    function N(e, t) {
        e = L(e);
        var c = s[e];
        return c instanceof A ? c : "string" == typeof c ? (c = new A(c), s[e] = c) : i[e] && t !== N && (t = N(i[e], N)) ? ((c = s[e] = new A)._set(t), c.name = u[e], c) : null
    }

    function g(e) {
        var t, c, n, o;
        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = L((c = e[t].split("|"))[0]), o = L(c[1]), i[n] = o, u[n] = c[0], i[o] = n, u[o] = c[1]
    }

    function W(e) {
        q(e.zones), g(e.links);
        var t, c, n, o = e.countries;
        if (o && o.length)
            for (t = 0; t < o.length; t++) c = (n = o[t].split("|"))[0].toUpperCase(), n = n[1].split(" "), a[c] = new b(c, n);
        X.dataVersion = e.version
    }

    function T(e) {
        return T.didShowError || (T.didShowError = !0, v("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!N(e)
    }

    function y(e) {
        var t = "X" === e._f || "x" === e._f;
        return !(!e._a || void 0 !== e._tzm || t)
    }

    function v(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e)
    }

    function X(e) {
        var t = Array.prototype.slice.call(arguments, 0, -1),
            c = arguments[arguments.length - 1],
            n = N(c),
            t = o.utc.apply(null, t);
        return n && !o.isMoment(e) && y(t) && t.add(n.parse(t), "minutes"), t.tz(c), t
    }(c < 2 || 2 == c && n < 6) && v("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + o.version + ". See momentjs.com"), A.prototype = {
        _set: function(e) {
            this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
        },
        _index: function(e) {
            for (var t = +e, c = this.untils, n = 0; n < c.length; n++)
                if (t < c[n]) return n
        },
        countries: function() {
            var t = this.name;
            return Object.keys(a).filter(function(e) {
                return -1 !== a[e].zones.indexOf(t)
            })
        },
        parse: function(e) {
            for (var t, c, n, o = +e, i = this.offsets, a = this.untils, r = a.length - 1, M = 0; M < r; M++)
                if (t = i[M], c = i[M + 1], n = i[M && M - 1], t < c && X.moveAmbiguousForward ? t = c : n < t && X.moveInvalidForward && (t = n), o < a[M] - 6e4 * t) return i[M];
            return i[r]
        },
        abbr: function(e) {
            return this.abbrs[this._index(e)]
        },
        offset: function(e) {
            return v("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
        },
        utcOffset: function(e) {
            return this.offsets[this._index(e)]
        }
    }, h.prototype.scoreOffsetAt = function(e) {
        this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
    }, X.version = "0.5.33", X.dataVersion = "", X._zones = s, X._links = i, X._names = u, X._countries = a, X.add = q, X.link = g, X.load = W, X.zone = N, X.zoneExists = T, X.guess = function(e) {
        return t = t && !e ? t : O()
    }, X.names = function() {
        var e, t = [];
        for (e in u) u.hasOwnProperty(e) && (s[e] || s[i[e]]) && u[e] && t.push(u[e]);
        return t.sort()
    }, X.Zone = A, X.unpack = f, X.unpackBase60 = M, X.needsOffset = y, X.moveInvalidForward = !0, X.moveAmbiguousForward = !1, X.countries = function() {
        return Object.keys(a)
    }, X.zonesForCountry = function(e, t) {
        var c = (c = e).toUpperCase();
        return (e = a[c] || null) ? (c = e.zones.sort(), t ? c.map(function(e) {
            return {
                name: e,
                offset: N(e).utcOffset(new Date)
            }
        }) : c) : null
    };
    var B, e = o.fn;

    function S(e) {
        return function() {
            return this._z ? this._z.abbr(this) : e.call(this)
        }
    }

    function C(e) {
        return function() {
            return this._z = null, e.apply(this, arguments)
        }
    }
    o.tz = X, o.defaultZone = null, o.updateOffset = function(e, t) {
        var c, n = o.defaultZone;
        void 0 === e._z && (n && y(e) && !e._isUTC && (e._d = o.utc(e._a)._d, e.utc().add(n.parse(e), "minutes")), e._z = n), e._z && (n = e._z.utcOffset(e), Math.abs(n) < 16 && (n /= 60), void 0 !== e.utcOffset ? (c = e._z, e.utcOffset(-n, t), e._z = c) : e.zone(n, t))
    }, e.tz = function(e, t) {
        if (e) {
            if ("string" != typeof e) throw new Error("Time zone name must be a string, got " + e + " [" + typeof e + "]");
            return this._z = N(e), this._z ? o.updateOffset(this, t) : v("Moment Timezone has no data for " + e + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
        }
        if (this._z) return this._z.name
    }, e.zoneName = S(e.zoneName), e.zoneAbbr = S(e.zoneAbbr), e.utc = C(e.utc), e.local = C(e.local), e.utcOffset = (B = e.utcOffset, function() {
        return 0 < arguments.length && (this._z = null), B.apply(this, arguments)
    }), o.tz.setDefault = function(e) {
        return (c < 2 || 2 == c && n < 9) && v("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + o.version + "."), o.defaultZone = e ? N(e) : null, o
    };
    e = o.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(e) ? (e.push("_z"), e.push("_a")) : e && (e._z = null), W({
        version: "2021a",
        zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT +0020 +0030|.Q 0 -k -u|01212121212121212121212121212121212121212121212131313131313131|-2bRzX.8 9RbX.8 fdE 1BAk MLE 1Bck MLE 1Bck MLE 1Bck MLE 1BAk MLE 1Bck MLE 1Bck MLE 1Bck MLE 1BAk MLE 1Bck MLE 1Bck MLE 1Bck MLE 1BAk MLE 1Bck MLE 1Bck MLE 1Bck MLE 1BAk MLE 1Bck MLE 1Bck MLE 1Bck MLE Mok 1BXE M0k 1BXE fak 9vbu bjCu MLu 1Bcu MLu 1BAu MLu 1Bcu MLu 1Bcu MLu 1Bcu MLu|41e5", "Africa/Nairobi|LMT +0230 EAT +0245|-2r.g -2u -30 -2J|012132|-2ua2r.g N6nV.g 3Fbu h1cu dzbJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT GMT +0030 WAT|-d.z 0 -u -10|01023|-2B40d.z 7iod.z dnXK.p dLzH.z|17e6", "Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|012121212121212121212121212121212131|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 PeX0|", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5", "Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|", "America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|", "America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|", "America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|", "America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|", "America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|", "America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|", "America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST -0530 CWT CPT CDT|5Q.M 60 5u 50 50 50|012121212121212121212121212121212121212121212121213412121212121212121212121212121212121212121215151|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu Rcu 7Bt0 Ni0 4nd0 Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu e9Au qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4", "America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Dawson|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|010102304056565656565656565656565656565656565656565656565656565656565656565656565656565656567|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1z90|13e2", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212132121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 7jA0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5", "America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EWT EPT EDT|59.u 50 40 40 40|01212314141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2kNuO.u 1drbO.u 6tX0 cp0 1hS0 pF0 J630 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5", "America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6", "America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|010102304056565656565656565656565656565656565656565656565656565656565656565656565656565656567|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1z90|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212121212|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10 1o30 14k0 1kr0 12l0 1o01|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00|-a0 -b0 0|010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 1a00 4SK0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 3Co0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010101010101010|-23uw0 18n0 OjB0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4", "Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2o0 MM0 iM0 4JA0 10o0 1pA0 10M0 1pA0 16o0 1jA0 16o0 1jA0 pBa0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXB0 gM0 8Q00 IM0 1wo0 TX0 1HB0 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nA0 1210 1qL0 WN0 1qL0 WN0 1qL0 11c0 1on0 11B0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2o0 MM0 iM0 4JA0 10o0 1pA0 10M0 1pA0 16o0 1jA0 16o0 1jA0 pBa0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXB0 gM0 8Q00 IM0 1wo0 TX0 1HB0 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nA0 1210 1qL0 WN0 1qL0 WN0 1qL0 11c0 1on0 11B0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyOk.E MM0 iM0 4JA0 10o0 1pA0 10M0 1pA0 16o0 1jA0 16o0 1jA0 3LA0 Eo0 oo0 1co0 1dA0 16o0 10M0 1jc0 1tA0 14o0 1cM0 1a00 11A0 1Nc0 Ao0 1Nc0 Ao0 1Ko0 LA0 1o00 WM0 EQK0 Db0 1fB0 Rb0 bXB0 gM0 8Q00 IM0 1wo0 TX0 1HB0 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4", "Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5", "Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4", "Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|BMT BST AST ADT|4j.i 3j.i 40 30|010102323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28p7E.G 1bb0 1i10 11X0 ru30 thbE.G 1PX0 11B0 1tz0 Rd0 1zb0 Op0 1zb0 3I10 Lz0 1EN0 FX0 1HB0 FX0 1Kp0 Db0 1Kp0 Db0 1Kp0 FX0 93d0 11z0 GAp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|-02|20|0||30", "Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293k0 xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293ju xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293k0 xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293ju xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Hobart|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 1a00 1qM0 Oo0 1zc0 Oo0 TAo0 yM0 1cM0 1cM0 1fA0 1a00 VfA0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293ju xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00|12e4", "Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293iJ xc0 10jc0 yM0 1cM0 1cM0 1gSo0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293k0 xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293k0 xc0 10jc0 yM0 1cM0 1cM0 1fA0 1a00 17c00 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293i0 xc0 10jc0 yM0 1cM0 1cM0 1gSo0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "EST|EST|50|0||", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Etc/GMT-0|GMT|0|0||", "Etc/GMT-1|+01|-10|0||", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Etc/GMT-11|+11|-b0|0||", "Pacific/Tarawa|+12|-c0|0||29e3", "Etc/GMT-13|+13|-d0|0||", "Etc/GMT-14|+14|-e0|0||", "Etc/GMT-2|+02|-20|0||", "Etc/GMT-3|+03|-30|0||", "Etc/GMT-4|+04|-40|0||", "Etc/GMT-5|+05|-50|0||", "Etc/GMT-6|+06|-60|0||", "Indian/Christmas|+07|-70|0||21e2", "Etc/GMT-8|+08|-80|0||", "Pacific/Palau|+09|-90|0||21e3", "Etc/GMT+1|-01|10|0||", "Etc/GMT+10|-10|a0|0||", "Etc/GMT+11|-11|b0|0||", "Etc/GMT+12|-12|c0|0||", "Etc/GMT+3|-03|30|0||", "Etc/GMT+4|-04|40|0||", "Etc/GMT+5|-05|50|0||", "Etc/GMT+6|-06|60|0||", "Etc/GMT+7|-07|70|0||", "Etc/GMT+8|-08|80|0||", "Etc/GMT+9|-09|90|0||", "Etc/UTC|UTC|0|0||", "Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 1oo0 11c0 1lc0 17c0 O1V0 3Nf0 WM0 1fA0 1cM0 1cM0 1oJ0 1dd0 1020 1fX0 1cp0 1cM0 1cM0 1cM0 1fA0 1a00 bhy0 Rb0 1wr0 Rc0 1C00 LA0 1C00 LA0 SNW0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cO0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2n5c9.l cFX9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|0123232323232323212121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0 5gn0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0||", "Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Cocos|+0630|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT +04|-3F.M -40|01|-2xorF.M|79e3", "Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "MST|MST|70|0||", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3", "Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|012121212121212121212121|-2l9nd.g 2uNXd.g Dc0 n610 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1", "Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 2hc0 bc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4", "Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3", "Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4", "Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4", "Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2", "Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2", "Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3", "Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2", "Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3", "Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4", "Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56", "Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3", "Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|"],
        links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Godthab|America/Nuuk", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Currie", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT-0|Etc/GMT", "Etc/GMT-0|Etc/GMT+0", "Etc/GMT-0|Etc/GMT0", "Etc/GMT-0|Etc/Greenwich", "Etc/GMT-0|GMT", "Etc/GMT-0|GMT+0", "Etc/GMT-0|GMT-0", "Etc/GMT-0|GMT0", "Etc/GMT-0|Greenwich", "Etc/UTC|Etc/UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UCT", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis"],
        countries: ["AD|Europe/Andorra", "AE|Asia/Dubai", "AF|Asia/Kabul", "AG|America/Port_of_Spain America/Antigua", "AI|America/Port_of_Spain America/Anguilla", "AL|Europe/Tirane", "AM|Asia/Yerevan", "AO|Africa/Lagos Africa/Luanda", "AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo", "AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia", "AS|Pacific/Pago_Pago", "AT|Europe/Vienna", "AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla", "AW|America/Curacao America/Aruba", "AX|Europe/Helsinki Europe/Mariehamn", "AZ|Asia/Baku", "BA|Europe/Belgrade Europe/Sarajevo", "BB|America/Barbados", "BD|Asia/Dhaka", "BE|Europe/Brussels", "BF|Africa/Abidjan Africa/Ouagadougou", "BG|Europe/Sofia", "BH|Asia/Qatar Asia/Bahrain", "BI|Africa/Maputo Africa/Bujumbura", "BJ|Africa/Lagos Africa/Porto-Novo", "BL|America/Port_of_Spain America/St_Barthelemy", "BM|Atlantic/Bermuda", "BN|Asia/Brunei", "BO|America/La_Paz", "BQ|America/Curacao America/Kralendijk", "BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco", "BS|America/Nassau", "BT|Asia/Thimphu", "BW|Africa/Maputo Africa/Gaborone", "BY|Europe/Minsk", "BZ|America/Belize", "CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson", "CC|Indian/Cocos", "CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi", "CF|Africa/Lagos Africa/Bangui", "CG|Africa/Lagos Africa/Brazzaville", "CH|Europe/Zurich", "CI|Africa/Abidjan", "CK|Pacific/Rarotonga", "CL|America/Santiago America/Punta_Arenas Pacific/Easter", "CM|Africa/Lagos Africa/Douala", "CN|Asia/Shanghai Asia/Urumqi", "CO|America/Bogota", "CR|America/Costa_Rica", "CU|America/Havana", "CV|Atlantic/Cape_Verde", "CW|America/Curacao", "CX|Indian/Christmas", "CY|Asia/Nicosia Asia/Famagusta", "CZ|Europe/Prague", "DE|Europe/Zurich Europe/Berlin Europe/Busingen", "DJ|Africa/Nairobi Africa/Djibouti", "DK|Europe/Copenhagen", "DM|America/Port_of_Spain America/Dominica", "DO|America/Santo_Domingo", "DZ|Africa/Algiers", "EC|America/Guayaquil Pacific/Galapagos", "EE|Europe/Tallinn", "EG|Africa/Cairo", "EH|Africa/El_Aaiun", "ER|Africa/Nairobi Africa/Asmara", "ES|Europe/Madrid Africa/Ceuta Atlantic/Canary", "ET|Africa/Nairobi Africa/Addis_Ababa", "FI|Europe/Helsinki", "FJ|Pacific/Fiji", "FK|Atlantic/Stanley", "FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae", "FO|Atlantic/Faroe", "FR|Europe/Paris", "GA|Africa/Lagos Africa/Libreville", "GB|Europe/London", "GD|America/Port_of_Spain America/Grenada", "GE|Asia/Tbilisi", "GF|America/Cayenne", "GG|Europe/London Europe/Guernsey", "GH|Africa/Accra", "GI|Europe/Gibraltar", "GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule", "GM|Africa/Abidjan Africa/Banjul", "GN|Africa/Abidjan Africa/Conakry", "GP|America/Port_of_Spain America/Guadeloupe", "GQ|Africa/Lagos Africa/Malabo", "GR|Europe/Athens", "GS|Atlantic/South_Georgia", "GT|America/Guatemala", "GU|Pacific/Guam", "GW|Africa/Bissau", "GY|America/Guyana", "HK|Asia/Hong_Kong", "HN|America/Tegucigalpa", "HR|Europe/Belgrade Europe/Zagreb", "HT|America/Port-au-Prince", "HU|Europe/Budapest", "ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura", "IE|Europe/Dublin", "IL|Asia/Jerusalem", "IM|Europe/London Europe/Isle_of_Man", "IN|Asia/Kolkata", "IO|Indian/Chagos", "IQ|Asia/Baghdad", "IR|Asia/Tehran", "IS|Atlantic/Reykjavik", "IT|Europe/Rome", "JE|Europe/London Europe/Jersey", "JM|America/Jamaica", "JO|Asia/Amman", "JP|Asia/Tokyo", "KE|Africa/Nairobi", "KG|Asia/Bishkek", "KH|Asia/Bangkok Asia/Phnom_Penh", "KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati", "KM|Africa/Nairobi Indian/Comoro", "KN|America/Port_of_Spain America/St_Kitts", "KP|Asia/Pyongyang", "KR|Asia/Seoul", "KW|Asia/Riyadh Asia/Kuwait", "KY|America/Panama America/Cayman", "KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral", "LA|Asia/Bangkok Asia/Vientiane", "LB|Asia/Beirut", "LC|America/Port_of_Spain America/St_Lucia", "LI|Europe/Zurich Europe/Vaduz", "LK|Asia/Colombo", "LR|Africa/Monrovia", "LS|Africa/Johannesburg Africa/Maseru", "LT|Europe/Vilnius", "LU|Europe/Luxembourg", "LV|Europe/Riga", "LY|Africa/Tripoli", "MA|Africa/Casablanca", "MC|Europe/Monaco", "MD|Europe/Chisinau", "ME|Europe/Belgrade Europe/Podgorica", "MF|America/Port_of_Spain America/Marigot", "MG|Africa/Nairobi Indian/Antananarivo", "MH|Pacific/Majuro Pacific/Kwajalein", "MK|Europe/Belgrade Europe/Skopje", "ML|Africa/Abidjan Africa/Bamako", "MM|Asia/Yangon", "MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan", "MO|Asia/Macau", "MP|Pacific/Guam Pacific/Saipan", "MQ|America/Martinique", "MR|Africa/Abidjan Africa/Nouakchott", "MS|America/Port_of_Spain America/Montserrat", "MT|Europe/Malta", "MU|Indian/Mauritius", "MV|Indian/Maldives", "MW|Africa/Maputo Africa/Blantyre", "MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas", "MY|Asia/Kuala_Lumpur Asia/Kuching", "MZ|Africa/Maputo", "NA|Africa/Windhoek", "NC|Pacific/Noumea", "NE|Africa/Lagos Africa/Niamey", "NF|Pacific/Norfolk", "NG|Africa/Lagos", "NI|America/Managua", "NL|Europe/Amsterdam", "NO|Europe/Oslo", "NP|Asia/Kathmandu", "NR|Pacific/Nauru", "NU|Pacific/Niue", "NZ|Pacific/Auckland Pacific/Chatham", "OM|Asia/Dubai Asia/Muscat", "PA|America/Panama", "PE|America/Lima", "PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier", "PG|Pacific/Port_Moresby Pacific/Bougainville", "PH|Asia/Manila", "PK|Asia/Karachi", "PL|Europe/Warsaw", "PM|America/Miquelon", "PN|Pacific/Pitcairn", "PR|America/Puerto_Rico", "PS|Asia/Gaza Asia/Hebron", "PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores", "PW|Pacific/Palau", "PY|America/Asuncion", "QA|Asia/Qatar", "RE|Indian/Reunion", "RO|Europe/Bucharest", "RS|Europe/Belgrade", "RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr", "RW|Africa/Maputo Africa/Kigali", "SA|Asia/Riyadh", "SB|Pacific/Guadalcanal", "SC|Indian/Mahe", "SD|Africa/Khartoum", "SE|Europe/Stockholm", "SG|Asia/Singapore", "SH|Africa/Abidjan Atlantic/St_Helena", "SI|Europe/Belgrade Europe/Ljubljana", "SJ|Europe/Oslo Arctic/Longyearbyen", "SK|Europe/Prague Europe/Bratislava", "SL|Africa/Abidjan Africa/Freetown", "SM|Europe/Rome Europe/San_Marino", "SN|Africa/Abidjan Africa/Dakar", "SO|Africa/Nairobi Africa/Mogadishu", "SR|America/Paramaribo", "SS|Africa/Juba", "ST|Africa/Sao_Tome", "SV|America/El_Salvador", "SX|America/Curacao America/Lower_Princes", "SY|Asia/Damascus", "SZ|Africa/Johannesburg Africa/Mbabane", "TC|America/Grand_Turk", "TD|Africa/Ndjamena", "TF|Indian/Reunion Indian/Kerguelen", "TG|Africa/Abidjan Africa/Lome", "TH|Asia/Bangkok", "TJ|Asia/Dushanbe", "TK|Pacific/Fakaofo", "TL|Asia/Dili", "TM|Asia/Ashgabat", "TN|Africa/Tunis", "TO|Pacific/Tongatapu", "TR|Europe/Istanbul", "TT|America/Port_of_Spain", "TV|Pacific/Funafuti", "TW|Asia/Taipei", "TZ|Africa/Nairobi Africa/Dar_es_Salaam", "UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye", "UG|Africa/Nairobi Africa/Kampala", "UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway", "US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu", "UY|America/Montevideo", "UZ|Asia/Samarkand Asia/Tashkent", "VA|Europe/Rome Europe/Vatican", "VC|America/Port_of_Spain America/St_Vincent", "VE|America/Caracas", "VG|America/Port_of_Spain America/Tortola", "VI|America/Port_of_Spain America/St_Thomas", "VN|Asia/Bangkok Asia/Ho_Chi_Minh", "VU|Pacific/Efate", "WF|Pacific/Wallis", "WS|Pacific/Apia", "YE|Asia/Riyadh Asia/Aden", "YT|Africa/Nairobi Indian/Mayotte", "ZA|Africa/Johannesburg", "ZM|Africa/Maputo Africa/Lusaka", "ZW|Africa/Maputo Africa/Harare"]
    }), o
}),
function(i) {
    i.easing.jswing = i.easing.swing, i.extend(i.easing, {
        def: "easeOutQuad",
        swing: function(e, t, c, n, o) {
            return i.easing[i.easing.def](e, t, c, n, o)
        },
        easeInQuad: function(e, t, c, n, o) {
            return n * (t /= o) * t + c
        },
        easeOutQuad: function(e, t, c, n, o) {
            return -n * (t /= o) * (t - 2) + c
        },
        easeInOutQuad: function(e, t, c, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t + c : -n / 2 * (--t * (t - 2) - 1) + c
        },
        easeInCubic: function(e, t, c, n, o) {
            return n * (t /= o) * t * t + c
        },
        easeOutCubic: function(e, t, c, n, o) {
            return n * ((t = t / o - 1) * t * t + 1) + c
        },
        easeInOutCubic: function(e, t, c, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t + c : n / 2 * ((t -= 2) * t * t + 2) + c
        },
        easeInQuart: function(e, t, c, n, o) {
            return n * (t /= o) * t * t * t + c
        },
        easeOutQuart: function(e, t, c, n, o) {
            return -n * ((t = t / o - 1) * t * t * t - 1) + c
        },
        easeInOutQuart: function(e, t, c, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + c : -n / 2 * ((t -= 2) * t * t * t - 2) + c
        },
        easeInQuint: function(e, t, c, n, o) {
            return n * (t /= o) * t * t * t * t + c
        },
        easeOutQuint: function(e, t, c, n, o) {
            return n * ((t = t / o - 1) * t * t * t * t + 1) + c
        },
        easeInOutQuint: function(e, t, c, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + c : n / 2 * ((t -= 2) * t * t * t * t + 2) + c
        },
        easeInSine: function(e, t, c, n, o) {
            return -n * Math.cos(t / o * (Math.PI / 2)) + n + c
        },
        easeOutSine: function(e, t, c, n, o) {
            return n * Math.sin(t / o * (Math.PI / 2)) + c
        },
        easeInOutSine: function(e, t, c, n, o) {
            return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + c
        },
        easeInExpo: function(e, t, c, n, o) {
            return 0 == t ? c : n * Math.pow(2, 10 * (t / o - 1)) + c
        },
        easeOutExpo: function(e, t, c, n, o) {
            return t == o ? c + n : n * (1 - Math.pow(2, -10 * t / o)) + c
        },
        easeInOutExpo: function(e, t, c, n, o) {
            return 0 == t ? c : t == o ? c + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + c : n / 2 * (2 - Math.pow(2, -10 * --t)) + c
        },
        easeInCirc: function(e, t, c, n, o) {
            return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + c
        },
        easeOutCirc: function(e, t, c, n, o) {
            return n * Math.sqrt(1 - (t = t / o - 1) * t) + c
        },
        easeInOutCirc: function(e, t, c, n, o) {
            return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + c : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + c
        },
        easeInElastic: function(e, t, c, n, o) {
            var i = 1.70158,
                a = 0,
                r = n;
            return 0 == t ? c : 1 == (t /= o) ? c + n : (a = a || .3 * o, i = r < Math.abs(n) ? (r = n, a / 4) : a / (2 * Math.PI) * Math.asin(n / r), -(r * Math.pow(2, 10 * --t) * Math.sin(2 * (t * o - i) * Math.PI / a)) + c)
        },
        easeOutElastic: function(e, t, c, n, o) {
            var i = 1.70158,
                a = 0,
                r = n;
            return 0 == t ? c : 1 == (t /= o) ? c + n : (a = a || .3 * o, i = r < Math.abs(n) ? (r = n, a / 4) : a / (2 * Math.PI) * Math.asin(n / r), r * Math.pow(2, -10 * t) * Math.sin(2 * (t * o - i) * Math.PI / a) + n + c)
        },
        easeInOutElastic: function(e, t, c, n, o) {
            var i = 1.70158,
                a = 0,
                r = n;
            return 0 == t ? c : 2 == (t /= o / 2) ? c + n : (a = a || .3 * o * 1.5, i = r < Math.abs(n) ? (r = n, a / 4) : a / (2 * Math.PI) * Math.asin(n / r), t < 1 ? -.5 * r * Math.pow(2, 10 * --t) * Math.sin(2 * (t * o - i) * Math.PI / a) + c : r * Math.pow(2, -10 * --t) * Math.sin(2 * (t * o - i) * Math.PI / a) * .5 + n + c)
        },
        easeInBack: function(e, t, c, n, o, i) {
            return n * (t /= o) * t * (((i = null == i ? 1.70158 : i) + 1) * t - i) + c
        },
        easeOutBack: function(e, t, c, n, o, i) {
            return n * ((t = t / o - 1) * t * (((i = null == i ? 1.70158 : i) + 1) * t + i) + 1) + c
        },
        easeInOutBack: function(e, t, c, n, o, i) {
            return null == i && (i = 1.70158), (t /= o / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + c : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + c
        },
        easeInBounce: function(e, t, c, n, o) {
            return n - i.easing.easeOutBounce(e, o - t, 0, n, o) + c
        },
        easeOutBounce: function(e, t, c, n, o) {
            return (t /= o) < 1 / 2.75 ? 7.5625 * n * t * t + c : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + c : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + c : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + c
        },
        easeInOutBounce: function(e, t, c, n, o) {
            return t < o / 2 ? .5 * i.easing.easeInBounce(e, 2 * t, 0, n, o) + c : .5 * i.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + c
        }
    }), i.fn.animatescroll = function(e) {
        var t = i.extend({}, i.fn.animatescroll.defaults, e);
        "function" == typeof t.onScrollStart && t.onScrollStart.call(this), "html,body" == t.element ? (e = this.offset().top, i(t.element).stop().animate({
            scrollTop: e - t.padding
        }, t.scrollSpeed, t.easing)) : i(t.element).stop().animate({
            scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - t.padding
        }, t.scrollSpeed, t.easing), setTimeout(function() {
            "function" == typeof t.onScrollEnd && t.onScrollEnd.call(this)
        }, t.scrollSpeed)
    }, i.fn.animatescroll.defaults = {
        easing: "swing",
        scrollSpeed: 800,
        padding: 0,
        element: "html,body"
    }
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define(["exports"], t) : "undefined" != typeof exports ? t(exports) : (t(t = {}), e.bodyScrollLock = t)
}(this, function(e) {
    "use strict";

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, c = Array(e.length); t < e.length; t++) c[t] = e[t];
            return c
        }
        return Array.from(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function i(t) {
        return s.some(function(e) {
            return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
        })
    }

    function a(e) {
        return e = e || window.event, !!i(e.target) || 1 < e.touches.length || (e.preventDefault && e.preventDefault(), !1)
    }

    function c() {
        setTimeout(function() {
            void 0 !== d && (document.body.style.paddingRight = d, d = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
        })
    }
    var t, r = !1,
        M = ("undefined" != typeof window && (window.addEventListener("testPassive", null, t = {
            get passive() {
                r = !0
            }
        }), window.removeEventListener("testPassive", null, t)), "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform)),
        s = [],
        u = !1,
        p = -1,
        l = void 0,
        d = void 0;
    e.disableBodyScroll = function(n, e) {
        var t, c;
        M ? n ? n && !s.some(function(e) {
            return e.targetElement === n
        }) && (t = {
            targetElement: n,
            options: e || {}
        }, s = [].concat(o(s), [t]), n.ontouchstart = function(e) {
            1 === e.targetTouches.length && (p = e.targetTouches[0].clientY)
        }, n.ontouchmove = function(e) {
            var t, c;
            1 !== e.targetTouches.length || (t = n, c = (e = e).targetTouches[0].clientY - p, i(e.target)) || (t && 0 === t.scrollTop && 0 < c || t && t.scrollHeight - t.scrollTop <= t.clientHeight && c < 0 ? a(e) : e.stopPropagation())
        }, u || (document.addEventListener("touchmove", a, r ? {
            passive: !1
        } : void 0), u = !0)) : console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.") : (c = e, setTimeout(function() {
            var e, t;
            void 0 === d && (e = !!c && !0 === c.reserveScrollBarGap, t = window.innerWidth - document.documentElement.clientWidth, e) && 0 < t && (d = document.body.style.paddingRight, document.body.style.paddingRight = t + "px"), void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
        }), t = {
            targetElement: n,
            options: e || {}
        }, s = [].concat(o(s), [t]))
    }, e.clearAllBodyScrollLocks = function() {
        M ? (s.forEach(function(e) {
            e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
        }), u && (document.removeEventListener("touchmove", a, r ? {
            passive: !1
        } : void 0), u = !1), s = [], p = -1) : (c(), s = [])
    }, e.enableBodyScroll = function(t) {
        M ? t ? (t.ontouchstart = null, t.ontouchmove = null, s = s.filter(function(e) {
            return e.targetElement !== t
        }), u && 0 === s.length && (document.removeEventListener("touchmove", a, r ? {
            passive: !1
        } : void 0), u = !1)) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.") : (s = s.filter(function(e) {
            return e.targetElement !== t
        })).length || c()
    }
}),
function(e) {
    "use strict";

    function t(e) {
        if (!e) throw Error("No options passed to Waypoint constructor");
        if (!e.element) throw Error("No element option passed to Waypoint constructor");
        if (!e.handler) throw Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + c, this.options = t.Adapter.extend({}, t.defaults, e), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, c += 1
    }
    var c = 0,
        i = {};
    t.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }, t.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(e) {
        var t, c = [];
        for (t in i) c.push(i[t]);
        for (var n = 0, o = c.length; n < o; n++) c[n][e]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        for (var e in t.Context.refreshAll(), i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return e.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: e,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, e.Waypoint = t
}(window),
function(t) {
    "use strict";

    function c(e) {
        t.setTimeout(e, 1e3 / 60)
    }

    function n(e) {
        this.element = e, this.Adapter = d.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + o, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, o += 1, d.windowContext || (d.windowContext = !0, d.windowContext = new n(t)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var o = 0,
        i = {},
        d = t.Waypoint,
        e = t.onload;
    n.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, n.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
            c = this.element == this.element.window;
        e && t && !c && (this.adapter.off(".waypoints"), delete i[this.key])
    }, n.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, d.requestAnimationFrame(e))
        })
    }, n.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !d.isTouch || (t.didScroll = !0, d.requestAnimationFrame(e))
        })
    }, n.prototype.handleResize = function() {
        d.Context.refreshAll()
    }, n.prototype.handleScroll = function() {
        var e, t, c = {},
            n = {
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
        for (e in n) {
            var o, i = n[e],
                a = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (o in this.waypoints[e]) {
                var r, M, s = this.waypoints[e][o];
                null !== s.triggerPoint && (r = i.oldScroll < s.triggerPoint, M = i.newScroll >= s.triggerPoint, r && M || !r && !M) && (s.queueTrigger(a), c[s.group.id] = s.group)
            }
        }
        for (t in c) c[t].flushTriggers();
        this.oldScroll = {
            x: n.horizontal.newScroll,
            y: n.vertical.newScroll
        }
    }, n.prototype.innerHeight = function() {
        return this.element == this.element.window ? d.viewportHeight() : this.adapter.innerHeight()
    }, n.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, n.prototype.innerWidth = function() {
        return this.element == this.element.window ? d.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function() {
        var e, t = [];
        for (e in this.waypoints)
            for (var c in this.waypoints[e]) t.push(this.waypoints[e][c]);
        for (var n = 0, o = t.length; n < o; n++) t[n].destroy()
    }, n.prototype.refresh = function() {
        var e, t, c = this.element == this.element.window,
            n = c ? void 0 : this.adapter.offset(),
            o = {};
        for (t in this.handleScroll(), e = {
                horizontal: {
                    contextOffset: c ? 0 : n.left,
                    contextScroll: c ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: c ? 0 : n.top,
                    contextScroll: c ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var i, a = e[t];
            for (i in this.waypoints[t]) {
                var r, M = this.waypoints[t][i],
                    s = M.options.offset,
                    u = M.triggerPoint,
                    p = 0,
                    l = null == u;
                M.element !== M.element.window && (p = M.adapter.offset()[a.offsetProp]), "function" == typeof s ? s = s.apply(M) : "string" == typeof s && (s = parseFloat(s), -1 < M.options.offset.indexOf("%")) && (s = Math.ceil(a.contextDimension * s / 100)), r = a.contextScroll - a.contextOffset, M.triggerPoint = Math.floor(p + r - s), p = u < a.oldScroll, r = M.triggerPoint >= a.oldScroll, s = !p && !r, !l && (p && r) ? (M.queueTrigger(a.backward), o[M.group.id] = M.group) : (!l && s || l && a.oldScroll >= M.triggerPoint) && (M.queueTrigger(a.forward), o[M.group.id] = M.group)
            }
        }
        return d.requestAnimationFrame(function() {
            for (var e in o) o[e].flushTriggers()
        }), this
    }, n.findOrCreateByElement = function(e) {
        return n.findByElement(e) || new n(e)
    }, n.refreshAll = function() {
        for (var e in i) i[e].refresh()
    }, n.findByElement = function(e) {
        return i[e.waypointContextKey]
    }, t.onload = function() {
        e && e(), n.refreshAll()
    }, d.requestAnimationFrame = function(e) {
        (t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || c).call(t, e)
    }, d.Context = n
}(window),
function(e) {
    "use strict";

    function i(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function a(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function t(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), c[this.axis][this.name] = this
    }
    var c = {
            vertical: {},
            horizontal: {}
        },
        n = e.Waypoint;
    t.prototype.add = function(e) {
        this.waypoints.push(e)
    }, t.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, t.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e];
            t.sort("up" === e || "left" === e ? a : i);
            for (var c = 0, n = t.length; c < n; c += 1) {
                var o = t[c];
                !o.options.continuous && c !== t.length - 1 || o.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }, t.prototype.next = function(e) {
        this.waypoints.sort(i);
        e = n.Adapter.inArray(e, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, t.prototype.previous = function(e) {
        this.waypoints.sort(i);
        e = n.Adapter.inArray(e, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }, t.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }, t.prototype.remove = function(e) {
        e = n.Adapter.inArray(e, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
    }, t.prototype.first = function() {
        return this.waypoints[0]
    }, t.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, t.findOrCreate = function(e) {
        return c[e.axis][e.name] || new t(e)
    }, n.Group = t
}(window),
function(e) {
    "use strict";

    function c(e) {
        this.$element = n(e)
    }
    var n = e.jQuery,
        e = e.Waypoint;
    n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
        c.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e)
        }
    }), n.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
        c[t] = n[t]
    }), e.adapters.push({
        name: "jquery",
        Adapter: c
    }), e.Adapter = c
}(window),
function(e) {
    "use strict";

    function t(n) {
        return function() {
            var t = [],
                c = arguments[0];
            return n.isFunction(arguments[0]) && ((c = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                var e = n.extend({}, c, {
                    element: this
                });
                "string" == typeof e.context && (e.context = n(this).closest(e.context)[0]), t.push(new o(e))
            }), t
        }
    }
    var o = e.Waypoint;
    e.jQuery && (e.jQuery.fn.waypoint = t(e.jQuery)), e.Zepto && (e.Zepto.fn.waypoint = t(e.Zepto))
}(window);
var List = function(c) {
    var n = {};

    function o(e) {
        var t;
        return (n[e] || (t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        }, c[e].call(t.exports, t, t.exports, o), t.l = !0, t)).exports
    }
    return o.m = c, o.c = n, o.i = function(e) {
        return e
    }, o.d = function(e, t, c) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: c
        })
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 8)
}([function(e, t, c) {
    var n = c(4),
        o = /\s+/;
    Object.prototype.toString;

    function i(e) {
        if (!e || !e.nodeType) throw new Error("A DOM element reference is required");
        this.el = e, this.list = e.classList
    }
    e.exports = function(e) {
        return new i(e)
    }, i.prototype.add = function(e) {
        var t;
        return this.list ? this.list.add(e) : (t = this.array(), ~n(t, e) || t.push(e), this.el.className = t.join(" ")), this
    }, i.prototype.remove = function(e) {
        var t;
        return this.list ? this.list.remove(e) : (t = this.array(), ~(e = n(t, e)) && t.splice(e, 1), this.el.className = t.join(" ")), this
    }, i.prototype.toggle = function(e, t) {
        return this.list ? void 0 !== t && t === this.list.toggle(e, t) || this.list.toggle(e) : void 0 !== t ? t ? this.add(e) : this.remove(e) : this.has(e) ? this.remove(e) : this.add(e), this
    }, i.prototype.array = function() {
        var e = (this.el.getAttribute("class") || "").replace(/^\s+|\s+$/g, "").split(o);
        return "" === e[0] && e.shift(), e
    }, i.prototype.has = i.prototype.contains = function(e) {
        return this.list ? this.list.contains(e) : !!~n(this.array(), e)
    }
}, function(e, t, c) {
    var i = window.addEventListener ? "addEventListener" : "attachEvent",
        a = window.removeEventListener ? "removeEventListener" : "detachEvent",
        r = "addEventListener" != i ? "on" : "",
        M = c(5);
    t.bind = function(e, t, c, n) {
        e = M(e);
        for (var o = 0; o < e.length; o++) e[o][i](r + t, c, n || !1)
    }, t.unbind = function(e, t, c, n) {
        e = M(e);
        for (var o = 0; o < e.length; o++) e[o][a](r + t, c, n || !1)
    }
}, function(e, t) {
    e.exports = function(o) {
        return function(e, t, c) {
            var n = this;
            this._values = {}, this.found = !1, this.filtered = !1;
            this.values = function(e, t) {
                if (void 0 === e) return n._values;
                for (var c in e) n._values[c] = e[c];
                !0 !== t && o.templater.set(n, n.values())
            }, this.show = function() {
                o.templater.show(n)
            }, this.hide = function() {
                o.templater.hide(n)
            }, this.matching = function() {
                return o.filtered && o.searched && n.found && n.filtered || o.filtered && !o.searched && n.filtered || !o.filtered && o.searched && n.found || !o.filtered && !o.searched
            }, this.visible = function() {
                return !(!n.elm || n.elm.parentNode != o.list)
            }, e = e, c = c, void 0 === (t = t) ? c ? n.values(e, c) : n.values(e) : (n.elm = t, c = o.templater.get(n, e), n.values(c))
        }
    }
}, function(e, t) {
    e.exports = function(e, t, c, n) {
        if ((n = n || {}).test && n.getElementsByClassName || !n.test && document.getElementsByClassName) return o = e, i = t, c ? o.getElementsByClassName(i)[0] : o.getElementsByClassName(i);
        if (n.test && n.querySelector || !n.test && document.querySelector) return o = e, i = "." + (i = t), c ? o.querySelector(i) : o.querySelectorAll(i);
        for (var o, i, n = t, a = c, r = [], M = e.getElementsByTagName("*"), s = M.length, u = new RegExp("(^|\\s)" + n + "(\\s|$)"), p = 0, l = 0; p < s; p++)
            if (u.test(M[p].className)) {
                if (a) return M[p];
                r[l] = M[p], l++
            }
        return r
    }
}, function(e, t) {
    var n = [].indexOf;
    e.exports = function(e, t) {
        if (n) return e.indexOf(t);
        for (var c = 0; c < e.length; ++c)
            if (e[c] === t) return c;
        return -1
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) return [];
        if (null === e) return [null];
        if (e === window) return [window];
        if ("string" == typeof e) return [e];
        if ("[object Array]" === Object.prototype.toString.call(e)) return e;
        if ("number" != typeof e.length) return [e];
        if ("function" == typeof e && e instanceof Function) return [e];
        for (var t = [], c = 0; c < e.length; c++)(Object.prototype.hasOwnProperty.call(e, c) || c in e) && t.push(e[c]);
        return t.length ? t : []
    }
}, function(e, t) {
    e.exports = function(e) {
        return e = (e = null === (e = void 0 === e ? "" : e) ? "" : e).toString()
    }
}, function(e, t) {
    e.exports = function(e) {
        for (var t, c = Array.prototype.slice.call(arguments, 1), n = 0; t = c[n]; n++)
            if (t)
                for (var o in t) e[o] = t[o];
        return e
    }
}, function(e, t, i) {
    var s = i(18),
        u = i(3),
        p = i(7),
        l = i(4),
        d = i(1),
        f = i(6),
        A = i(0),
        b = i(17),
        z = i(5);
    e.exports = function(e, c, t) {
        var a = this,
            r = i(2)(a),
            M = i(9)(a),
            n = i(12)(a),
            o = {
                start: function() {
                    a.listClass = "list", a.searchClass = "search", a.sortClass = "sort", a.page = 1e4, a.i = 1, a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.searchColumns = void 0, a.handlers = {
                        updated: []
                    }, a.valueNames = [], a.utils = {
                        getByClass: u,
                        extend: p,
                        indexOf: l,
                        events: d,
                        toString: f,
                        naturalSort: s,
                        classes: A,
                        getAttribute: b,
                        toArray: z
                    }, a.utils.extend(a, c), a.listContainer = "string" == typeof e ? document.getElementById(e) : e, a.listContainer && (a.list = u(a.listContainer, a.listClass, !0), a.parse = i(13)(a), a.templater = i(16)(a), a.search = i(14)(a), a.filter = i(10)(a), a.sort = i(15)(a), a.fuzzySearch = i(11)(a, c.fuzzySearch), this.handlers(), this.items(), this.pagination(), a.update())
                },
                handlers: function() {
                    for (var e in a.handlers) a[e] && a.on(e, a[e])
                },
                items: function() {
                    a.parse(a.list), void 0 !== t && a.add(t)
                },
                pagination: function() {
                    if (void 0 !== c.pagination) {
                        !0 === c.pagination && (c.pagination = [{}]), void 0 === c.pagination[0] && (c.pagination = [c.pagination]);
                        for (var e = 0, t = c.pagination.length; e < t; e++) n(c.pagination[e])
                    }
                }
            };
        this.reIndex = function() {
            a.items = [], a.visibleItems = [], a.matchingItems = [], a.searched = !1, a.filtered = !1, a.parse(a.list)
        }, this.toJSON = function() {
            for (var e = [], t = 0, c = a.items.length; t < c; t++) e.push(a.items[t].values());
            return e
        }, this.add = function(e, t) {
            if (0 !== e.length) {
                if (!t) {
                    for (var c = [], n = 0, o = (e = void 0 === e[0] ? [e] : e).length; n < o; n++) {
                        var i = a.items.length > a.page,
                            i = new r(e[n], void 0, i);
                        a.items.push(i), c.push(i)
                    }
                    return a.update(), c
                }
                M(e, t)
            }
        }, this.show = function(e, t) {
            return this.i = e, this.page = t, a.update(), a
        }, this.remove = function(e, t, c) {
            for (var n = 0, o = 0, i = a.items.length; o < i; o++) a.items[o].values()[e] == t && (a.templater.remove(a.items[o], c), a.items.splice(o, 1), i--, o--, n++);
            return a.update(), n
        }, this.get = function(e, t) {
            for (var c = [], n = 0, o = a.items.length; n < o; n++) {
                var i = a.items[n];
                i.values()[e] == t && c.push(i)
            }
            return c
        }, this.size = function() {
            return a.items.length
        }, this.clear = function() {
            return a.templater.clear(), a.items = [], a
        }, this.on = function(e, t) {
            return a.handlers[e].push(t), a
        }, this.off = function(e, t) {
            e = a.handlers[e], t = l(e, t);
            return -1 < t && e.splice(t, 1), a
        }, this.trigger = function(e) {
            for (var t = a.handlers[e].length; t--;) a.handlers[e][t](a);
            return a
        }, this.reset = {
            filter: function() {
                for (var e = a.items, t = e.length; t--;) e[t].filtered = !1;
                return a
            },
            search: function() {
                for (var e = a.items, t = e.length; t--;) e[t].found = !1;
                return a
            }
        }, this.update = function() {
            var e = a.items,
                t = e.length;
            a.visibleItems = [], a.matchingItems = [], a.templater.clear();
            for (var c = 0; c < t; c++) e[c].matching() && a.matchingItems.length + 1 >= a.i && a.visibleItems.length < a.page ? (e[c].show(), a.visibleItems.push(e[c]), a.matchingItems.push(e[c])) : (e[c].matching() && a.matchingItems.push(e[c]), e[c].hide());
            return a.trigger("updated"), a
        }, o.start()
    }
}, function(e, t) {
    e.exports = function(o) {
        function i(e, t, c) {
            var n = e.splice(0, 50);
            c = (c = c || []).concat(o.add(n)), 0 < e.length ? setTimeout(function() {
                i(e, t, c)
            }, 1) : (o.update(), t(c))
        }
        return i
    }
}, function(e, t) {
    e.exports = function(i) {
        return i.handlers.filterStart = i.handlers.filterStart || [], i.handlers.filterComplete = i.handlers.filterComplete || [],
            function(e) {
                if (i.trigger("filterStart"), i.i = 1, i.reset.filter(), void 0 === e) i.filtered = !1;
                else {
                    i.filtered = !0;
                    for (var t = i.items, c = 0, n = t.length; c < n; c++) {
                        var o = t[c];
                        e(o) ? o.filtered = !0 : o.filtered = !1
                    }
                }
                return i.update(), i.trigger("filterComplete"), i.visibleItems
            }
    }
}, function(e, t, c) {
    c(0);
    var n = c(1),
        o = c(7),
        r = c(6),
        s = c(3),
        u = c(19);
    e.exports = function(i, a) {
        a = o({
            location: 0,
            distance: 100,
            threshold: .4,
            multiSearch: !0,
            searchClass: "fuzzy-search"
        }, a = a || {});
        var M = {
            search: function(e, t) {
                for (var c = a.multiSearch ? e.replace(/ +$/, "").split(/ +/) : [e], n = 0, o = i.items.length; n < o; n++) M.item(i.items[n], t, c)
            },
            item: function(e, t, c) {
                for (var n = !0, o = 0; o < c.length; o++) {
                    for (var i = !1, a = 0, r = t.length; a < r; a++) M.values(e.values(), t[a], c[o]) && (i = !0);
                    i || (n = !1)
                }
                e.found = n
            },
            values: function(e, t, c) {
                if (e.hasOwnProperty(t)) {
                    e = r(e[t]).toLowerCase();
                    if (u(e, c, a)) return !0
                }
                return !1
            }
        };
        return n.bind(s(i.listContainer, a.searchClass), "keyup", function(e) {
                e = e.target || e.srcElement;
                i.search(e.value, M.search)
            }),
            function(e, t) {
                i.search(e, t, M.search)
            }
    }
}, function(e, t, c) {
    var b = c(0),
        n = c(1),
        o = c(8);
    e.exports = function(d) {
        function c(e, t) {
            if (d.page < 1) d.listContainer.style.display = "none", f = !0;
            else {
                f && (d.listContainer.style.display = "block");
                var c, n = d.matchingItems.length,
                    o = d.i,
                    i = d.page,
                    a = Math.ceil(n / i),
                    r = Math.ceil(o / i),
                    M = t.innerWindow || 2,
                    s = t.left || t.outerWindow || 0,
                    u = t.right || t.outerWindow || 0,
                    n = t.prev || !1,
                    o = t.next || !1,
                    u = a - u;
                e.clear(), n && 1 < a && 1 < r && (c = e.add({
                    page: "Prev",
                    dotted: !1
                })[0], b(c.elm.firstChild).add("prevBtn"), c.elm.firstChild.setAttribute("data-i", r - 1), c.elm.firstChild.setAttribute("data-page", i));
                for (var p = 1; p <= a; p++) {
                    var l = r === p ? "active" : "";
                    A.number(p, s, u, r, M) ? (c = e.add({
                        page: p,
                        dotted: !1
                    })[0], l && b(c.elm).add(l), c.elm.firstChild.setAttribute("data-i", p), c.elm.firstChild.setAttribute("data-page", i)) : A.dotted(e, p, s, u, r, M, e.size()) && (c = e.add({
                        page: "...",
                        dotted: !0
                    })[0], b(c.elm.firstChild).add("disabled"))
                }
                o && 1 < a && r < a && (c = e.add({
                    page: "Next",
                    dotted: !1
                })[0], b(c.elm.firstChild).add("nextBtn"), c.elm.firstChild.setAttribute("data-i", r + 1), c.elm.firstChild.setAttribute("data-page", i))
            }
        }
        var f = !1,
            A = {
                number: function(e, t, c, n, o) {
                    return this.left(e, t) || this.right(e, c) || this.innerWindow(e, n, o)
                },
                left: function(e, t) {
                    return e <= t
                },
                right: function(e, t) {
                    return t < e
                },
                innerWindow: function(e, t, c) {
                    return t - c <= e && e <= t + c
                },
                dotted: function(e, t, c, n, o, i, a) {
                    return this.dottedLeft(e, t, c, n, o, i) || this.dottedRight(e, t, c, n, o, i, a)
                },
                dottedLeft: function(e, t, c, n, o, i) {
                    return t == c + 1 && !this.innerWindow(t, o, i) && !this.right(t, n)
                },
                dottedRight: function(e, t, c, n, o, i, a) {
                    return !e.items[a - 1].values().dotted && t == n && !this.innerWindow(t, o, i) && !this.right(t, n)
                }
            };
        return function(e) {
            var t = new o(d.listContainer.id, {
                listClass: e.paginationClass || "pagination",
                item: "<li><button class='page'></button></li>",
                valueNames: ["page", "dotted"],
                searchClass: "pagination-search-that-is-not-supposed-to-exist",
                sortClass: "pagination-sort-that-is-not-supposed-to-exist"
            });
            n.bind(t.listContainer, "click", function(e) {
                var e = e.target || e.srcElement,
                    t = d.utils.getAttribute(e, "data-page"),
                    e = d.utils.getAttribute(e, "data-i");
                e && d.show((e - 1) * t + 1, t)
            }), d.on("updated", function() {
                c(t, e)
            }), c(t, e)
        }
    }
}, function(e, t, c) {
    e.exports = function(o) {
        function n(e, t) {
            for (var c = 0, n = e.length; c < n; c++) o.items.push(new a(t, e[c]))
        }

        function i(e, t) {
            var c = e.splice(0, 50);
            n(c, t), 0 < e.length ? setTimeout(function() {
                i(e, t)
            }, 1) : (o.update(), o.trigger("parseComplete"))
        }
        var a = c(2)(o);
        return o.handlers.parseComplete = o.handlers.parseComplete || [],
            function() {
                var e = function(e) {
                        for (var t = e.childNodes, c = [], n = 0, o = t.length; n < o; n++) void 0 === t[n].data && c.push(t[n]);
                        return c
                    }(o.list),
                    t = o.valueNames;
                (o.indexAsync ? i : n)(e, t)
            }
    }
}, function(e, t) {
    e.exports = function(c) {
        function t(e) {
            return c.trigger("searchStart"), r.resetList(), r.setSearchString(e), r.setOptions(arguments), r.setColumns(), "" === i ? M.reset() : (c.searched = !0, a ? a(i, o) : M.list()), c.update(), c.trigger("searchComplete"), c.visibleItems
        }
        var n, o, i, a, r = {
                resetList: function() {
                    c.i = 1, c.templater.clear(), a = void 0
                },
                setOptions: function(e) {
                    2 == e.length && e[1] instanceof Array ? o = e[1] : 2 == e.length && "function" == typeof e[1] ? (o = void 0, a = e[1]) : 3 == e.length ? (o = e[1], a = e[2]) : o = void 0
                },
                setColumns: function() {
                    0 !== c.items.length && void 0 === o && (o = void 0 === c.searchColumns ? r.toArray(c.items[0].values()) : c.searchColumns)
                },
                setSearchString: function(e) {
                    e = (e = c.utils.toString(e).toLowerCase()).replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), i = e
                },
                toArray: function(e) {
                    var t, c = [];
                    for (t in e) c.push(t);
                    return c
                }
            },
            M = {
                list: function() {
                    for (var e = 0, t = c.items.length; e < t; e++) M.item(c.items[e])
                },
                item: function(e) {
                    e.found = !1;
                    for (var t = 0, c = o.length; t < c; t++)
                        if (M.values(e.values(), o[t])) return void(e.found = !0)
                },
                values: function(e, t) {
                    return !!(e.hasOwnProperty(t) && (n = c.utils.toString(e[t]).toLowerCase(), "" !== i) && -1 < n.search(i))
                },
                reset: function() {
                    c.reset.search(), c.searched = !1
                }
            };
        return c.handlers.searchStart = c.handlers.searchStart || [], c.handlers.searchComplete = c.handlers.searchComplete || [], c.utils.events.bind(c.utils.getByClass(c.listContainer, c.searchClass), "keyup", function(e) {
            e = e.target || e.srcElement;
            "" === e.value && !c.searched || t(e.value)
        }), c.utils.events.bind(c.utils.getByClass(c.listContainer, c.searchClass), "input", function(e) {
            "" === (e.target || e.srcElement).value && t("")
        }), t
    }
}, function(e, t) {
    e.exports = function(i) {
        function e() {
            i.trigger("sortStart");
            var n = {},
                c = ((e = arguments[0].currentTarget || arguments[0].srcElement || void 0) ? (n.valueName = i.utils.getAttribute(e, "data-sort"), a.getInSensitive(e, n), n.order = a.getOrder(e)) : ((n = arguments[1] || n).valueName = arguments[0], n.order = n.order || "asc", n.insensitive = void 0 === n.insensitive || n.insensitive), a.clear(), a.setOrder(n), n.sortFunction || i.sortFunction || null),
                o = "desc" === n.order ? -1 : 1,
                e = c ? function(e, t) {
                    return c(e, t, n) * o
                } : function(e, t) {
                    var c = i.utils.naturalSort;
                    return c.alphabet = i.alphabet || n.alphabet || void 0, (c = !c.alphabet && n.insensitive ? i.utils.naturalSort.caseInsensitive : c)(e.values()[n.valueName], t.values()[n.valueName]) * o
                };
            i.items.sort(e), i.update(), i.trigger("sortComplete")
        }
        var a = {
            els: void 0,
            clear: function() {
                for (var e = 0, t = a.els.length; e < t; e++) i.utils.classes(a.els[e]).remove("asc"), i.utils.classes(a.els[e]).remove("desc")
            },
            getOrder: function(e) {
                var t = i.utils.getAttribute(e, "data-order");
                return "asc" == t || "desc" == t ? t : !i.utils.classes(e).has("desc") && i.utils.classes(e).has("asc") ? "desc" : "asc"
            },
            getInSensitive: function(e, t) {
                e = i.utils.getAttribute(e, "data-insensitive");
                t.insensitive = "false" !== e
            },
            setOrder: function(e) {
                for (var t = 0, c = a.els.length; t < c; t++) {
                    var n, o = a.els[t];
                    i.utils.getAttribute(o, "data-sort") === e.valueName && ("asc" != (n = i.utils.getAttribute(o, "data-order")) && "desc" != n || n == e.order) && i.utils.classes(o).add(e.order)
                }
            }
        };
        return i.handlers.sortStart = i.handlers.sortStart || [], i.handlers.sortComplete = i.handlers.sortComplete || [], a.els = i.utils.getByClass(i.listContainer, i.sortClass), i.utils.events.bind(a.els, "click", e), i.on("searchStart", a.clear), i.on("filterStart", a.clear), e
    }
}, function(e, t) {
    function c(M) {
        var c, s = this;
        this.clearSourceItem = function(e, t) {
            for (var c, n = 0, o = t.length; n < o; n++) {
                if (t[n].data)
                    for (var i = 0, a = t[n].data.length; i < a; i++) e.setAttribute("data-" + t[n].data[i], "");
                else t[n].attr && t[n].name ? (c = M.utils.getByClass(e, t[n].name, !0)) && c.setAttribute(t[n].attr, "") : (c = M.utils.getByClass(e, t[n], !0)) && (c.innerHTML = "");
                c = void 0
            }
            return e
        }, this.getItemSource = function(e) {
            if (void 0 === e) {
                for (var t = M.list.childNodes, c = 0, n = t.length; c < n; c++)
                    if (void 0 === t[c].data) return t[c].cloneNode(!0)
            } else {
                var o;
                if (/<tr[\s>]/g.exec(e)) return (o = document.createElement("tbody")).innerHTML = e, o.firstChild;
                if (-1 !== e.indexOf("<")) return (o = document.createElement("div")).innerHTML = e, o.firstChild;
                e = document.getElementById(M.item);
                if (e) return e
            }
        }, this.get = function(e, t) {
            s.create(e);
            for (var c, n = {}, o = 0, i = t.length; o < i; o++) {
                if (t[o].data)
                    for (var a = 0, r = t[o].data.length; a < r; a++) n[t[o].data[a]] = M.utils.getAttribute(e.elm, "data-" + t[o].data[a]);
                else t[o].attr && t[o].name ? (c = M.utils.getByClass(e.elm, t[o].name, !0), n[t[o].name] = c ? M.utils.getAttribute(c, t[o].attr) : "") : (c = M.utils.getByClass(e.elm, t[o], !0), n[t[o]] = c ? c.innerHTML : "");
                c = void 0
            }
            return n
        }, this.set = function(e, t) {
            var c, n, o = function(e) {
                for (var t = 0, c = M.valueNames.length; t < c; t++)
                    if (M.valueNames[t].data) {
                        for (var n = M.valueNames[t].data, o = 0, i = n.length; o < i; o++)
                            if (n[o] === e) return {
                                data: e
                            }
                    } else {
                        if (M.valueNames[t].attr && M.valueNames[t].name && M.valueNames[t].name == e) return M.valueNames[t];
                        if (M.valueNames[t] === e) return e
                    }
            };
            if (!s.create(e))
                for (var i in t) t.hasOwnProperty(i) && (c = t[i = i], n = void 0, i = o(i)) && (i.data ? e.elm.setAttribute("data-" + i.data, c) : i.attr && i.name ? (n = M.utils.getByClass(e.elm, i.name, !0)) && n.setAttribute(i.attr, c) : (n = M.utils.getByClass(e.elm, i, !0)) && (n.innerHTML = c))
        }, this.create = function(e) {
            if (void 0 !== e.elm) return !1;
            if (void 0 === c) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
            var t = c.cloneNode(!0);
            return t.removeAttribute("id"), e.elm = t, s.set(e, e.values()), !0
        }, this.remove = function(e) {
            e.elm.parentNode === M.list && M.list.removeChild(e.elm)
        }, this.show = function(e) {
            s.create(e), M.list.appendChild(e.elm)
        }, this.hide = function(e) {
            void 0 !== e.elm && e.elm.parentNode === M.list && M.list.removeChild(e.elm)
        }, this.clear = function() {
            if (M.list.hasChildNodes())
                for (; 1 <= M.list.childNodes.length;) M.list.removeChild(M.list.firstChild)
        }, c = (c = s.getItemSource(M.item)) && s.clearSourceItem(c, M.valueNames)
    }
    e.exports = function(e) {
        return new c(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var c = e.getAttribute && e.getAttribute(t) || null;
        if (!c)
            for (var n = e.attributes.length, o = 0; o < n; o++) void 0 !== t[o] && t[o].nodeName === t && (c = t[o].nodeValue);
        return c
    }
}, function(e, t, c) {
    "use strict";
    var n, d, f = 0;

    function A(e) {
        return 48 <= e && e <= 57
    }

    function o(e, t) {
        for (var c = (e += "").length, n = (t += "").length, o = 0, i = 0; o < c && i < n;) {
            var a = e.charCodeAt(o),
                r = t.charCodeAt(i);
            if (A(a)) {
                if (!A(r)) return a - r;
                for (var M = o, s = i; 48 === a && ++M < c;) a = e.charCodeAt(M);
                for (; 48 === r && ++s < n;) r = t.charCodeAt(s);
                for (var u = M, p = s; u < c && A(e.charCodeAt(u));) ++u;
                for (; p < n && A(t.charCodeAt(p));) ++p;
                var l = u - M - p + s;
                if (l) return l;
                for (; M < u;)
                    if (l = e.charCodeAt(M++) - t.charCodeAt(s++)) return l;
                o = u, i = p
            } else {
                if (a !== r) return a < f && r < f && -1 !== d[a] && -1 !== d[r] ? d[a] - d[r] : a - r;
                ++o, ++i
            }
        }
        return c - n
    }
    o.caseInsensitive = o.i = function(e, t) {
        return o(("" + e).toLowerCase(), ("" + t).toLowerCase())
    }, Object.defineProperties(o, {
        alphabet: {
            get: function() {
                return n
            },
            set: function(e) {
                d = [];
                var t = 0;
                if (n = e)
                    for (; t < n.length; t++) d[n.charCodeAt(t)] = t;
                for (f = d.length, t = 0; t < f; t++) void 0 === d[t] && (d[t] = -1)
            }
        }
    }), e.exports = o
}, function(e, t) {
    e.exports = function(e, c, t) {
        var n = t.location || 0,
            o = t.distance || 100,
            t = t.threshold || .4;
        if (c === e) return !0;
        if (32 < c.length) return !1;
        var i = n,
            a = function() {
                for (var e = {}, t = 0; t < c.length; t++) e[c.charAt(t)] = 0;
                for (t = 0; t < c.length; t++) e[c.charAt(t)] |= 1 << c.length - t - 1;
                return e
            }();

        function r(e, t) {
            e /= c.length, t = Math.abs(i - t);
            return o ? e + t / o : t ? 1 : e
        }
        for (var M, s, u, p = t, l = (-1 != (d = e.indexOf(c, i)) && (p = Math.min(r(0, d), p), -1 != (d = e.lastIndexOf(c, i + c.length))) && (p = Math.min(r(0, d), p)), 1 << c.length - 1), d = -1, f = c.length + e.length, A = 0; A < c.length; A++) {
            for (M = 0, s = f; M < s;) r(A, i + s) <= p ? M = s : f = s, s = Math.floor((f - M) / 2 + M);
            var f = s,
                b = Math.max(1, i - s + 1),
                z = Math.min(i + s, e.length) + c.length,
                h = Array(z + 2);
            h[z + 1] = (1 << A) - 1;
            for (var m = z; b <= m; m--) {
                var O = a[e.charAt(m - 1)];
                if (h[m] = 0 === A ? (h[m + 1] << 1 | 1) & O : (h[m + 1] << 1 | 1) & O | (u[m + 1] | u[m]) << 1 | 1 | u[m + 1], h[m] & l) {
                    O = r(A, m - 1);
                    if (O <= p) {
                        if (p = O, !(i < (d = m - 1))) break;
                        b = Math.max(1, 2 * i - d)
                    }
                }
            }
            if (r(A + 1, i) > p) break;
            u = h
        }
        return !(d < 0)
    }
}]);
//# sourceMappingURL=maps/vendor.js.map