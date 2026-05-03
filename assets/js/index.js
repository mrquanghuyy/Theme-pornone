if (((e, t) => {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (e.document) return t(e);
      throw new Error("jQuery requires a window with a document")
  } : t(e)
})("undefined" != typeof window ? window : this, function(h, O) {
  function q(e, t) {
      return t.toUpperCase()
  }
  var d = [],
      c = d.slice,
      W = d.concat,
      F = d.push,
      I = d.indexOf,
      n = {},
      B = n.toString,
      g = n.hasOwnProperty,
      m = {},
      e = "1.11.1",
      x = function(e, t) {
          return new x.fn.init(e, t)
      },
      M = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      R = /^-ms-/,
      z = /-([\da-z])/gi;

  function V(e) {
      var t = e.length,
          n = x.type(e);
      return "function" !== n && !x.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  x.fn = x.prototype = {
      jquery: e,
      constructor: x,
      selector: "",
      length: 0,
      toArray: function() {
          return c.call(this)
      },
      get: function(e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
      },
      pushStack: function(e) {
          e = x.merge(this.constructor(), e);
          return e.prevObject = this, e.context = this.context, e
      },
      each: function(e, t) {
          return x.each(this, e, t)
      },
      map: function(n) {
          return this.pushStack(x.map(this, function(e, t) {
              return n.call(e, t, e)
          }))
      },
      slice: function() {
          return this.pushStack(c.apply(this, arguments))
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
          return this.prevObject || this.constructor(null)
      },
      push: F,
      sort: d.sort,
      splice: d.splice
  }, x.extend = x.fn.extend = function() {
      var e, t, n, i, o, r = arguments[0] || {},
          s = 1,
          a = arguments.length,
          l = !1;
      for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || x.isFunction(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
          if (null != (i = arguments[s]))
              for (n in i) o = r[n], t = i[n], r !== t && (l && t && (x.isPlainObject(t) || (e = x.isArray(t))) ? (o = e ? (e = !1, o && x.isArray(o) ? o : []) : o && x.isPlainObject(o) ? o : {}, r[n] = x.extend(l, o, t)) : void 0 !== t && (r[n] = t));
      return r
  }, x.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === x.type(e)
      },
      isArray: Array.isArray || function(e) {
          return "array" === x.type(e)
      },
      isWindow: function(e) {
          return null != e && e == e.window
      },
      isNumeric: function(e) {
          return !x.isArray(e) && 0 <= e - parseFloat(e)
      },
      isEmptyObject: function(e) {
          for (var t in e) return !1;
          return !0
      },
      isPlainObject: function(e) {
          if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
          try {
              if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
          } catch (e) {
              return !1
          }
          if (m.ownLast)
              for (var t in e) return g.call(e, t);
          for (t in e);
          return void 0 === t || g.call(e, t)
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[B.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          e && x.trim(e) && (h.execScript || function(e) {
              h.eval.call(h, e)
          })(e)
      },
      camelCase: function(e) {
          return e.replace(R, "ms-").replace(z, q)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, n) {
          var i, o = 0,
              r = e.length,
              s = V(e);
          if (n) {
              if (s)
                  for (; o < r && !1 !== (i = t.apply(e[o], n)); o++);
              else
                  for (o in e)
                      if (i = t.apply(e[o], n), !1 === i) break
          } else if (s)
              for (; o < r && !1 !== (i = t.call(e[o], o, e[o])); o++);
          else
              for (o in e)
                  if (i = t.call(e[o], o, e[o]), !1 === i) break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(M, "")
      },
      makeArray: function(e, t) {
          t = t || [];
          return null != e && (V(Object(e)) ? x.merge(t, "string" == typeof e ? [e] : e) : F.call(t, e)), t
      },
      inArray: function(e, t, n) {
          var i;
          if (t) {
              if (I) return I.call(t, e, n);
              for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                  if (n in t && t[n] === e) return n
          }
          return -1
      },
      merge: function(e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
          if (n != n)
              for (; void 0 !== t[i];) e[o++] = t[i++];
          return e.length = o, e
      },
      grep: function(e, t, n) {
          for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
          return i
      },
      map: function(e, t, n) {
          var i, o = 0,
              r = e.length,
              s = [];
          if (V(e))
              for (; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
          else
              for (o in e) i = t(e[o], o, n), null != i && s.push(i);
          return W.apply([], s)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, i;
          return "string" == typeof t && (i = e[t], t = e, e = i), x.isFunction(e) ? (n = c.call(arguments, 2), (i = function() {
              return e.apply(t || this, n.concat(c.call(arguments)))
          }).guid = e.guid = e.guid || x.guid++, i) : void 0
      },
      now: function() {
          return +new Date
      },
      support: m
  }), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
  });
  var e = (O => {
          function d(e, t, n) {
              var i = "0x" + t - 65536;
              return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
          }
          var e, p, w, r, q, f, W, F, x, u, c, h, C, t, g, m, i, o, v, b = "sizzle" + -new Date,
              y = O.document,
              T = 0,
              I = 0,
              B = ue(),
              M = ue(),
              R = ue(),
              z = function(e, t) {
                  return e === t && (c = !0), 0
              },
              n = "undefined",
              V = {}.hasOwnProperty,
              s = [],
              X = s.pop,
              U = s.push,
              k = s.push,
              Q = s.slice,
              N = s.indexOf || function(e) {
                  for (var t = 0, n = this.length; t < n; t++)
                      if (this[t] === e) return t;
                  return -1
              },
              J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              a = "[\\x20\\t\\r\\n\\f]",
              l = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
              Y = l.replace("w", "w#"),
              G = "\\[" + a + "*(" + l + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + a + "*\\]",
              K = ":(" + l + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + G + ")*)|.*)\\)|)",
              S = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
              Z = new RegExp("^" + a + "*," + a + "*"),
              ee = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
              te = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
              ne = new RegExp(K),
              ie = new RegExp("^" + Y + "$"),
              E = {
                  ID: new RegExp("^#(" + l + ")"),
                  CLASS: new RegExp("^\\.(" + l + ")"),
                  TAG: new RegExp("^(" + l.replace("w", "w*") + ")"),
                  ATTR: new RegExp("^" + G),
                  PSEUDO: new RegExp("^" + K),
                  CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                  bool: new RegExp("^(?:" + J + ")$", "i"),
                  needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
              },
              oe = /^(?:input|select|textarea|button)$/i,
              re = /^h\d$/i,
              j = /^[^{]+\{\s*\[native \w/,
              se = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ae = /[+~]/,
              le = /'|\\/g,
              A = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig");
          try {
              k.apply(s = Q.call(y.childNodes), y.childNodes), s[y.childNodes.length].nodeType
          } catch (e) {
              k = {
                  apply: s.length ? function(e, t) {
                      U.apply(e, Q.call(t))
                  } : function(e, t) {
                      for (var n = e.length, i = 0; e[n++] = t[i++];);
                      e.length = n - 1
                  }
              }
          }

          function L(e, t, n, i) {
              var o, r, s, a, l, u, c;
              if ((t ? t.ownerDocument || t : y) !== C && h(t), n = n || [], !e || "string" != typeof e) return n;
              if (1 !== (o = (t = t || C).nodeType) && 9 !== o) return [];
              if (g && !i) {
                  if (u = se.exec(e))
                      if (c = u[1]) {
                          if (9 === o) {
                              if (!(a = t.getElementById(c)) || !a.parentNode) return n;
                              if (a.id === c) return n.push(a), n
                          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && v(t, a) && a.id === c) return n.push(a), n
                      } else {
                          if (u[2]) return k.apply(n, t.getElementsByTagName(e)), n;
                          if ((c = u[3]) && p.getElementsByClassName && t.getElementsByClassName) return k.apply(n, t.getElementsByClassName(c)), n
                      } if (p.qsa && (!m || !m.test(e))) {
                      if (l = a = b, u = t, c = 9 === o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                          for (s = f(e), (a = t.getAttribute("id")) ? l = a.replace(le, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", r = s.length; r--;) s[r] = l + _(s[r]);
                          u = ae.test(e) && pe(t.parentNode) || t, c = s.join(",")
                      }
                      if (c) try {
                          return k.apply(n, u.querySelectorAll(c)), n
                      } catch (e) {} finally {
                          a || t.removeAttribute("id")
                      }
                  }
              }
              return F(e.replace(S, "$1"), t, n, i)
          }

          function ue() {
              var n = [];

              function i(e, t) {
                  return n.push(e + " ") > w.cacheLength && delete i[n.shift()], i[e + " "] = t
              }
              return i
          }

          function D(e) {
              return e[b] = !0, e
          }

          function H(e) {
              var t = C.createElement("div");
              try {
                  return !!e(t)
              } catch (e) {
                  return !1
              } finally {
                  t.parentNode && t.parentNode.removeChild(t)
              }
          }

          function ce(e, t) {
              for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
          }

          function de(e, t) {
              var n = t && e,
                  i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
              if (i) return i;
              if (n)
                  for (; n = n.nextSibling;)
                      if (n === t) return -1;
              return e ? 1 : -1
          }

          function $(s) {
              return D(function(r) {
                  return r = +r, D(function(e, t) {
                      for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                  })
              })
          }

          function pe(e) {
              return e && typeof e.getElementsByTagName !== n && e
          }
          for (e in p = L.support = {}, q = L.isXML = function(e) {
                  e = e && (e.ownerDocument || e).documentElement;
                  return !!e && "HTML" !== e.nodeName
              }, h = L.setDocument = function(e) {
                  var l = e ? e.ownerDocument || e : y,
                      e = l.defaultView;
                  return l !== C && 9 === l.nodeType && l.documentElement ? (t = (C = l).documentElement, g = !q(l), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
                      h()
                  }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
                      h()
                  })), p.attributes = H(function(e) {
                      return e.className = "i", !e.getAttribute("className")
                  }), p.getElementsByTagName = H(function(e) {
                      return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                  }), p.getElementsByClassName = j.test(l.getElementsByClassName) && H(function(e) {
                      return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                  }), p.getById = H(function(e) {
                      return t.appendChild(e).id = b, !l.getElementsByName || !l.getElementsByName(b).length
                  }), p.getById ? (w.find.ID = function(e, t) {
                      if (typeof t.getElementById !== n && g) return (t = t.getElementById(e)) && t.parentNode ? [t] : []
                  }, w.filter.ID = function(e) {
                      var t = e.replace(A, d);
                      return function(e) {
                          return e.getAttribute("id") === t
                      }
                  }) : (delete w.find.ID, w.filter.ID = function(e) {
                      var t = e.replace(A, d);
                      return function(e) {
                          e = typeof e.getAttributeNode !== n && e.getAttributeNode("id");
                          return e && e.value === t
                      }
                  }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                      return typeof t.getElementsByTagName !== n ? t.getElementsByTagName(e) : void 0
                  } : function(e, t) {
                      var n, i = [],
                          o = 0,
                          r = t.getElementsByTagName(e);
                      if ("*" !== e) return r;
                      for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                      return i
                  }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                      return typeof t.getElementsByClassName !== n && g ? t.getElementsByClassName(e) : void 0
                  }, i = [], m = [], (p.qsa = j.test(l.querySelectorAll)) && (H(function(e) {
                      e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + a + "*(?:value|" + J + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
                  }), H(function(e) {
                      var t = l.createElement("input");
                      t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + a + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                  })), (p.matchesSelector = j.test(o = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)) && H(function(e) {
                      p.disconnectedMatch = o.call(e, "div"), o.call(e, "[s!='']:x"), i.push("!=", K)
                  }), m = m.length && new RegExp(m.join("|")), i = i.length && new RegExp(i.join("|")), e = j.test(t.compareDocumentPosition), v = e || j.test(t.contains) ? function(e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                          t = t && t.parentNode;
                      return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                  } : function(e, t) {
                      if (t)
                          for (; t = t.parentNode;)
                              if (t === e) return !0;
                      return !1
                  }, z = e ? function(e, t) {
                      var n;
                      return e === t ? (c = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === y && v(y, e) ? -1 : t === l || t.ownerDocument === y && v(y, t) ? 1 : u ? N.call(u, e) - N.call(u, t) : 0 : 4 & n ? -1 : 1)
                  } : function(e, t) {
                      if (e === t) return c = !0, 0;
                      var n, i = 0,
                          o = e.parentNode,
                          r = t.parentNode,
                          s = [e],
                          a = [t];
                      if (!o || !r) return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : u ? N.call(u, e) - N.call(u, t) : 0;
                      if (o === r) return de(e, t);
                      for (n = e; n = n.parentNode;) s.unshift(n);
                      for (n = t; n = n.parentNode;) a.unshift(n);
                      for (; s[i] === a[i];) i++;
                      return i ? de(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                  }, l) : C
              }, L.matches = function(e, t) {
                  return L(e, null, null, t)
              }, L.matchesSelector = function(e, t) {
                  if ((e.ownerDocument || e) !== C && h(e), t = t.replace(te, "='$1']"), !(!p.matchesSelector || !g || i && i.test(t) || m && m.test(t))) try {
                      var n = o.call(e, t);
                      if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                  } catch (e) {}
                  return 0 < L(t, C, null, [e]).length
              }, L.contains = function(e, t) {
                  return (e.ownerDocument || e) !== C && h(e), v(e, t)
              }, L.attr = function(e, t) {
                  (e.ownerDocument || e) !== C && h(e);
                  var n = w.attrHandle[t.toLowerCase()],
                      n = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !g) : void 0;
                  return void 0 !== n ? n : p.attributes || !g ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
              }, L.error = function(e) {
                  throw new Error("Syntax error, unrecognized expression: " + e)
              }, L.uniqueSort = function(e) {
                  var t, n = [],
                      i = 0,
                      o = 0;
                  if (c = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(z), c) {
                      for (; t = e[o++];) t === e[o] && (i = n.push(o));
                      for (; i--;) e.splice(n[i], 1)
                  }
                  return u = null, e
              }, r = L.getText = function(e) {
                  var t, n = "",
                      i = 0,
                      o = e.nodeType;
                  if (o) {
                      if (1 === o || 9 === o || 11 === o) {
                          if ("string" == typeof e.textContent) return e.textContent;
                          for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                      } else if (3 === o || 4 === o) return e.nodeValue
                  } else
                      for (; t = e[i++];) n += r(t);
                  return n
              }, (w = L.selectors = {
                  cacheLength: 50,
                  createPseudo: D,
                  match: E,
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
                          return e[1] = e[1].replace(A, d), e[3] = (e[3] || e[4] || e[5] || "").replace(A, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                      },
                      CHILD: function(e) {
                          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || L.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && L.error(e[0]), e
                      },
                      PSEUDO: function(e) {
                          var t, n = !e[6] && e[2];
                          return E.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ne.test(n) && (t = (t = f(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                      }
                  },
                  filter: {
                      TAG: function(e) {
                          var t = e.replace(A, d).toLowerCase();
                          return "*" === e ? function() {
                              return !0
                          } : function(e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t
                          }
                      },
                      CLASS: function(e) {
                          var t = B[e + " "];
                          return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && B(e, function(e) {
                              return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== n && e.getAttribute("class") || "")
                          })
                      },
                      ATTR: function(t, n, i) {
                          return function(e) {
                              e = L.attr(e, t);
                              return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                          }
                      },
                      CHILD: function(f, e, t, h, g) {
                          var m = "nth" !== f.slice(0, 3),
                              v = "last" !== f.slice(-4),
                              y = "of-type" === e;
                          return 1 === h && 0 === g ? function(e) {
                              return !!e.parentNode
                          } : function(e, t, n) {
                              var i, o, r, s, a, l, u = m != v ? "nextSibling" : "previousSibling",
                                  c = e.parentNode,
                                  d = y && e.nodeName.toLowerCase(),
                                  p = !n && !y;
                              if (c) {
                                  if (m) {
                                      for (; u;) {
                                          for (r = e; r = r[u];)
                                              if (y ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                          l = u = "only" === f && !l && "nextSibling"
                                      }
                                      return !0
                                  }
                                  if (l = [v ? c.firstChild : c.lastChild], v && p) {
                                      for (a = (i = (o = c[b] || (c[b] = {}))[f] || [])[0] === T && i[1], s = i[0] === T && i[2], r = a && c.childNodes[a]; r = ++a && r && r[u] || (s = a = 0, l.pop());)
                                          if (1 === r.nodeType && ++s && r === e) {
                                              o[f] = [T, a, s];
                                              break
                                          }
                                  } else if (p && (i = (e[b] || (e[b] = {}))[f]) && i[0] === T) s = i[1];
                                  else
                                      for (;
                                          (r = ++a && r && r[u] || (s = a = 0, l.pop())) && ((y ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++s || (p && ((r[b] || (r[b] = {}))[f] = [T, s]), r !== e)););
                                  return (s -= g) === h || s % h == 0 && 0 <= s / h
                              }
                          }
                      },
                      PSEUDO: function(e, r) {
                          var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || L.error("unsupported pseudo: " + e);
                          return s[b] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? D(function(e, t) {
                              for (var n, i = s(e, r), o = i.length; o--;) e[n = N.call(e, i[o])] = !(t[n] = i[o])
                          }) : function(e) {
                              return s(e, 0, t)
                          }) : s
                      }
                  },
                  pseudos: {
                      not: D(function(e) {
                          var i = [],
                              o = [],
                              a = W(e.replace(S, "$1"));
                          return a[b] ? D(function(e, t, n, i) {
                              for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                          }) : function(e, t, n) {
                              return i[0] = e, a(i, null, n, o), !o.pop()
                          }
                      }),
                      has: D(function(t) {
                          return function(e) {
                              return 0 < L(t, e).length
                          }
                      }),
                      contains: D(function(t) {
                          return function(e) {
                              return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                          }
                      }),
                      lang: D(function(n) {
                          return ie.test(n || "") || L.error("unsupported lang: " + n), n = n.replace(A, d).toLowerCase(),
                              function(e) {
                                  var t;
                                  do {
                                      if (t = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                  } while ((e = e.parentNode) && 1 === e.nodeType);
                                  return !1
                              }
                      }),
                      target: function(e) {
                          var t = O.location && O.location.hash;
                          return t && t.slice(1) === e.id
                      },
                      root: function(e) {
                          return e === t
                      },
                      focus: function(e) {
                          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                      },
                      enabled: function(e) {
                          return !1 === e.disabled
                      },
                      disabled: function(e) {
                          return !0 === e.disabled
                      },
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
                          return !w.pseudos.empty(e)
                      },
                      header: function(e) {
                          return re.test(e.nodeName)
                      },
                      input: function(e) {
                          return oe.test(e.nodeName)
                      },
                      button: function(e) {
                          var t = e.nodeName.toLowerCase();
                          return "input" === t && "button" === e.type || "button" === t
                      },
                      text: function(e) {
                          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                      },
                      first: $(function() {
                          return [0]
                      }),
                      last: $(function(e, t) {
                          return [t - 1]
                      }),
                      eq: $(function(e, t, n) {
                          return [n < 0 ? n + t : n]
                      }),
                      even: $(function(e, t) {
                          for (var n = 0; n < t; n += 2) e.push(n);
                          return e
                      }),
                      odd: $(function(e, t) {
                          for (var n = 1; n < t; n += 2) e.push(n);
                          return e
                      }),
                      lt: $(function(e, t, n) {
                          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                          return e
                      }),
                      gt: $(function(e, t, n) {
                          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                          return e
                      })
                  }
              }).pseudos.nth = w.pseudos.eq, {
                  radio: !0,
                  checkbox: !0,
                  file: !0,
                  password: !0,
                  image: !0
              }) w.pseudos[e] = (t => function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
          })(e);
          for (e in {
                  submit: !0,
                  reset: !0
              }) w.pseudos[e] = (n => function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n
          })(e);

          function fe() {}

          function _(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i
          }

          function he(s, e, t) {
              var a = e.dir,
                  l = t && "parentNode" === a,
                  u = I++;
              return e.first ? function(e, t, n) {
                  for (; e = e[a];)
                      if (1 === e.nodeType || l) return s(e, t, n)
              } : function(e, t, n) {
                  var i, o, r = [T, u];
                  if (n) {
                      for (; e = e[a];)
                          if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                  } else
                      for (; e = e[a];)
                          if (1 === e.nodeType || l) {
                              if ((i = (o = e[b] || (e[b] = {}))[a]) && i[0] === T && i[1] === u) return r[2] = i[2];
                              if ((o[a] = r)[2] = s(e, t, n)) return !0
                          }
              }
          }

          function ge(o) {
              return 1 < o.length ? function(e, t, n) {
                  for (var i = o.length; i--;)
                      if (!o[i](e, t, n)) return !1;
                  return !0
              } : o[0]
          }

          function P(e, t, n, i, o) {
              for (var r, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), u) && t.push(a);
              return s
          }

          function me(f, h, g, m, v, e) {
              return m && !m[b] && (m = me(m)), v && !v[b] && (v = me(v, e)), D(function(e, t, n, i) {
                  var o, r, s, a = [],
                      l = [],
                      u = t.length,
                      c = e || ((e, t, n) => {
                          for (var i = 0, o = t.length; i < o; i++) L(e, t[i], n);
                          return n
                      })(h || "*", n.nodeType ? [n] : n, []),
                      d = !f || !e && h ? c : P(c, a, f, n, i),
                      p = g ? v || (e ? f : u || m) ? [] : t : d;
                  if (g && g(d, p, n, i), m)
                      for (o = P(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                  if (e) {
                      if (v || f) {
                          if (v) {
                              for (o = [], r = p.length; r--;)(s = p[r]) && o.push(d[r] = s);
                              v(null, p = [], o, i)
                          }
                          for (r = p.length; r--;)(s = p[r]) && -1 < (o = v ? N.call(e, s) : a[r]) && (e[o] = !(t[o] = s))
                      }
                  } else p = P(p === t ? p.splice(u, p.length) : p), v ? v(null, t, p, i) : k.apply(t, p)
              })
          }

          function ve(m, v) {
              function e(e, t, n, i, o) {
                  var r, s, a, l = 0,
                      u = "0",
                      c = e && [],
                      d = [],
                      p = x,
                      f = e || b && w.find.TAG("*", o),
                      h = T += null == p ? 1 : Math.random() || .1,
                      g = f.length;
                  for (o && (x = t !== C && t); u !== g && null != (r = f[u]); u++) {
                      if (b && r) {
                          for (s = 0; a = m[s++];)
                              if (a(r, t, n)) {
                                  i.push(r);
                                  break
                              } o && (T = h)
                      }
                      y && ((r = !a && r) && l--, e) && c.push(r)
                  }
                  if (l += u, y && u !== l) {
                      for (s = 0; a = v[s++];) a(c, d, t, n);
                      if (e) {
                          if (0 < l)
                              for (; u--;) c[u] || d[u] || (d[u] = X.call(i));
                          d = P(d)
                      }
                      k.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && L.uniqueSort(i)
                  }
                  return o && (T = h, x = p), c
              }
              var y = 0 < v.length,
                  b = 0 < m.length;
              return y ? D(e) : e
          }
          return fe.prototype = w.filters = w.pseudos, w.setFilters = new fe, f = L.tokenize = function(e, t) {
              var n, i, o, r, s, a, l, u = M[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (s = e, a = [], l = w.preFilter; s;) {
                  for (r in n && !(i = Z.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = ee.exec(s)) && (n = i.shift(), o.push({
                          value: n,
                          type: i[0].replace(S, " ")
                      }), s = s.slice(n.length)), w.filter) !(i = E[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                      value: n,
                      type: r,
                      matches: i
                  }), s = s.slice(n.length));
                  if (!n) break
              }
              return t ? s.length : s ? L.error(e) : M(e, a).slice(0)
          }, W = L.compile = function(e, t) {
              var n, i = [],
                  o = [],
                  r = R[e + " "];
              if (!r) {
                  for (n = (t = t || f(e)).length; n--;)((r = function e(t) {
                      for (var i, n, o, r = t.length, s = w.relative[t[0].type], a = s || w.relative[" "], l = s ? 1 : 0, u = he(function(e) {
                              return e === i
                          }, a, !0), c = he(function(e) {
                              return -1 < N.call(i, e)
                          }, a, !0), d = [function(e, t, n) {
                              return !s && (n || t !== x) || ((i = t).nodeType ? u : c)(e, t, n)
                          }]; l < r; l++)
                          if (n = w.relative[t[l].type]) d = [he(ge(d), n)];
                          else {
                              if ((n = w.filter[t[l].type].apply(null, t[l].matches))[b]) {
                                  for (o = ++l; o < r && !w.relative[t[o].type]; o++);
                                  return me(1 < l && ge(d), 1 < l && _(t.slice(0, l - 1).concat({
                                      value: " " === t[l - 2].type ? "*" : ""
                                  })).replace(S, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && _(t))
                              }
                              d.push(n)
                          } return ge(d)
                  }(t[n]))[b] ? i : o).push(r);
                  (r = R(e, ve(o, i))).selector = e
              }
              return r
          }, F = L.select = function(e, t, n, i) {
              var o, r, s, a, l, u = "function" == typeof e && e,
                  c = !i && f(e = u.selector || e);
              if (n = n || [], 1 === c.length) {
                  if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && p.getById && 9 === t.nodeType && g && w.relative[r[1].type]) {
                      if (!(t = (w.find.ID(s.matches[0].replace(A, d), t) || [])[0])) return n;
                      u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                  }
                  for (o = E.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                      if ((l = w.find[a]) && (i = l(s.matches[0].replace(A, d), ae.test(r[0].type) && pe(t.parentNode) || t))) {
                          if (r.splice(o, 1), e = i.length && _(r)) break;
                          return k.apply(n, i), n
                      }
              }
              return (u || W(e, c))(i, t, !g, n, ae.test(e) && pe(t.parentNode) || t), n
          }, p.sortStable = b.split("").sort(z).join("") === b, p.detectDuplicates = !!c, h(), p.sortDetached = H(function(e) {
              return 1 & e.compareDocumentPosition(C.createElement("div"))
          }), H(function(e) {
              return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          }) || ce("type|href|height|width", function(e, t, n) {
              return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          }), p.attributes && H(function(e) {
              return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          }) || ce("value", function(e, t, n) {
              return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
          }), H(function(e) {
              return null == e.getAttribute("disabled")
          }) || ce(J, function(e, t, n) {
              return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
          }), L
      })(h),
      X = (x.find = e, x.expr = e.selectors, x.expr[":"] = x.expr.pseudos, x.unique = e.uniqueSort, x.text = e.getText, x.isXMLDoc = e.isXML, x.contains = e.contains, x.expr.match.needsContext),
      U = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Q = /^.[^:#\[\.,]*$/;

  function J(e, n, i) {
      if (x.isFunction(n)) return x.grep(e, function(e, t) {
          return !!n.call(e, t, e) !== i
      });
      if (n.nodeType) return x.grep(e, function(e) {
          return e === n !== i
      });
      if ("string" == typeof n) {
          if (Q.test(n)) return x.filter(n, e, i);
          n = x.filter(n, e)
      }
      return x.grep(e, function(e) {
          return 0 <= x.inArray(e, n) !== i
      })
  }
  x.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, x.fn.extend({
      find: function(e) {
          var t, n = [],
              i = this,
              o = i.length;
          if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
              for (t = 0; t < o; t++)
                  if (x.contains(i[t], this)) return !0
          }));
          for (t = 0; t < o; t++) x.find(e, i[t], n);
          return (n = this.pushStack(1 < o ? x.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
      },
      filter: function(e) {
          return this.pushStack(J(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(J(this, e || [], !0))
      },
      is: function(e) {
          return !!J(this, "string" == typeof e && X.test(e) ? x(e) : e || [], !1).length
      }
  });
  var o, v = h.document,
      Y = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      G = ((x.fn.init = function(e, t) {
          var n, i;
          if (e) {
              if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? void 0 !== o.ready ? o.ready(e) : e(x) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
              if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Y.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || o : this.constructor(t)).find(e);
              if (n[1]) {
                  if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), U.test(n[1]) && x.isPlainObject(t))
                      for (n in t) x.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
              } else {
                  if ((i = v.getElementById(n[2])) && i.parentNode) {
                      if (i.id !== n[2]) return o.find(e);
                      this.length = 1, this[0] = i
                  }
                  this.context = v, this.selector = e
              }
          }
          return this
      }).prototype = x.fn, o = x(v), /^(?:parents|prev(?:Until|All))/),
      K = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function Z(e, t) {
      for (;
          (e = e[t]) && 1 !== e.nodeType;);
      return e
  }
  x.extend({
      dir: function(e, t, n) {
          for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !x(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
          return i
      },
      sibling: function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      }
  }), x.fn.extend({
      has: function(e) {
          var t, n = x(e, this),
              i = n.length;
          return this.filter(function() {
              for (t = 0; t < i; t++)
                  if (x.contains(this, n[t])) return !0
          })
      },
      closest: function(e, t) {
          for (var n, i = 0, o = this.length, r = [], s = X.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                      r.push(n);
                      break
                  } return this.pushStack(1 < r.length ? x.unique(r) : r)
      },
      index: function(e) {
          return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(x.unique(x.merge(this.get(), x(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), x.each({
      parent: function(e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(e) {
          return x.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return x.dir(e, "parentNode", n)
      },
      next: function(e) {
          return Z(e, "nextSibling")
      },
      prev: function(e) {
          return Z(e, "previousSibling")
      },
      nextAll: function(e) {
          return x.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return x.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return x.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return x.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
          return x.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return x.sibling(e.firstChild)
      },
      contents: function(e) {
          return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
      }
  }, function(i, o) {
      x.fn[i] = function(e, t) {
          var n = x.map(this, o, e);
          return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = x.filter(t, n)), 1 < this.length && (K[i] || (n = x.unique(n)), G.test(i)) && (n = n.reverse()), this.pushStack(n)
      }
  });
  var t, C = /\S+/g,
      ee = {};

  function te() {
      v.addEventListener ? (v.removeEventListener("DOMContentLoaded", i, !1), h.removeEventListener("load", i, !1)) : (v.detachEvent("onreadystatechange", i), h.detachEvent("onload", i))
  }

  function i() {
      !v.addEventListener && "load" !== event.type && "complete" !== v.readyState || (te(), x.ready())
  }
  x.Callbacks = function(o) {
      var e, n;
      o = "string" == typeof o ? ee[o] || (n = ee[e = o] = {}, x.each(e.match(C) || [], function(e, t) {
          n[t] = !0
      }), n) : x.extend({}, o);

      function i(e) {
          for (t = o.memory && e, s = !0, l = u || 0, u = 0, a = c.length, r = !0; c && l < a; l++)
              if (!1 === c[l].apply(e[0], e[1]) && o.stopOnFalse) {
                  t = !1;
                  break
              } r = !1, c && (d ? d.length && i(d.shift()) : t ? c = [] : p.disable())
      }
      var r, t, s, a, l, u, c = [],
          d = !o.once && [],
          p = {
              add: function() {
                  var e;
                  return c && (e = c.length, function i(e) {
                      x.each(e, function(e, t) {
                          var n = x.type(t);
                          "function" === n ? o.unique && p.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                      })
                  }(arguments), r ? a = c.length : t && (u = e, i(t))), this
              },
              remove: function() {
                  return c && x.each(arguments, function(e, t) {
                      for (var n; - 1 < (n = x.inArray(t, c, n));) c.splice(n, 1), r && (n <= a && a--, n <= l) && l--
                  }), this
              },
              has: function(e) {
                  return e ? -1 < x.inArray(e, c) : !(!c || !c.length)
              },
              empty: function() {
                  return c = [], a = 0, this
              },
              disable: function() {
                  return c = d = t = void 0, this
              },
              disabled: function() {
                  return !c
              },
              lock: function() {
                  return d = void 0, t || p.disable(), this
              },
              locked: function() {
                  return !d
              },
              fireWith: function(e, t) {
                  return !c || s && !d || (t = [e, (t = t || []).slice ? t.slice() : t], r ? d.push(t) : i(t)), this
              },
              fire: function() {
                  return p.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!s
              }
          };
      return p
  }, x.extend({
      Deferred: function(e) {
          var r = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
              o = "pending",
              s = {
                  state: function() {
                      return o
                  },
                  always: function() {
                      return a.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var o = arguments;
                      return x.Deferred(function(i) {
                          x.each(r, function(e, t) {
                              var n = x.isFunction(o[e]) && o[e];
                              a[t[1]](function() {
                                  var e = n && n.apply(this, arguments);
                                  e && x.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                              })
                          }), o = null
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? x.extend(e, s) : s
                  }
              },
              a = {};
          return s.pipe = s.then, x.each(r, function(e, t) {
              var n = t[2],
                  i = t[3];
              s[t[1]] = n.add, i && n.add(function() {
                  o = i
              }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                  return a[t[0] + "With"](this === a ? s : this, arguments), this
              }, a[t[0] + "With"] = n.fireWith
          }), s.promise(a), e && e.call(a, a), a
      },
      when: function(e) {
          function t(t, n, i) {
              return function(e) {
                  n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === o ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
              }
          }
          var o, n, i, r = 0,
              s = c.call(arguments),
              a = s.length,
              l = 1 !== a || e && x.isFunction(e.promise) ? a : 0,
              u = 1 === l ? e : x.Deferred();
          if (1 < a)
              for (o = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) s[r] && x.isFunction(s[r].promise) ? s[r].promise().done(t(r, i, s)).fail(u.reject).progress(t(r, n, o)) : --l;
          return l || u.resolveWith(i, s), u.promise()
      }
  }), x.fn.ready = function(e) {
      return x.ready.promise().done(e), this
  }, x.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? x.readyWait++ : x.ready(!0)
      },
      ready: function(e) {
          if (!0 === e ? !--x.readyWait : !x.isReady) {
              if (!v.body) return setTimeout(x.ready);
              (x.isReady = !0) !== e && 0 < --x.readyWait || (t.resolveWith(v, [x]), x.fn.triggerHandler && (x(v).triggerHandler("ready"), x(v).off("ready")))
          }
      }
  }), x.ready.promise = function(e) {
      if (!t)
          if (t = x.Deferred(), "complete" === v.readyState) setTimeout(x.ready);
          else if (v.addEventListener) v.addEventListener("DOMContentLoaded", i, !1), h.addEventListener("load", i, !1);
      else {
          v.attachEvent("onreadystatechange", i), h.attachEvent("onload", i);
          var n = !1;
          try {
              n = null == h.frameElement && v.documentElement
          } catch (e) {}
          n && n.doScroll && ! function t() {
              if (!x.isReady) {
                  try {
                      n.doScroll("left")
                  } catch (e) {
                      return setTimeout(t, 50)
                  }
                  te(), x.ready()
              }
          }()
      }
      return t.promise(e)
  };
  var ne, y = "undefined";
  for (ne in x(m)) break;
  m.ownLast = "0" !== ne, m.inlineBlockNeedsLayout = !1, x(function() {
      var e, t, n = v.getElementsByTagName("body")[0];
      n && n.style && (e = v.createElement("div"), (t = v.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t).appendChild(e), typeof e.style.zoom != y && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", m.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e) && (n.style.zoom = 1), n.removeChild(t))
  });
  e = v.createElement("div");
  if (null == m.deleteExpando) {
      m.deleteExpando = !0;
      try {
          delete e.test
      } catch (e) {
          m.deleteExpando = !1
      }
  }
  x.acceptData = function(e) {
      var t = x.noData[(e.nodeName + " ").toLowerCase()],
          n = +e.nodeType || 1;
      return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
  };
  var ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      oe = /([A-Z])/g;

  function re(e, t, n) {
      if (void 0 === n && 1 === e.nodeType) {
          var i = "data-" + t.replace(oe, "-$1").toLowerCase();
          if ("string" == typeof(n = e.getAttribute(i))) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ie.test(n) ? x.parseJSON(n) : n)
              } catch (e) {}
              x.data(e, t, n)
          } else n = void 0
      }
      return n
  }

  function se(e) {
      for (var t in e)
          if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return;
      return 1
  }

  function ae(e, t, n, i) {
      if (x.acceptData(e)) {
          var o, r = x.expando,
              s = e.nodeType,
              a = s ? x.cache : e,
              l = s ? e[r] : e[r] && r;
          if (l && a[l] && (i || a[l].data) || void 0 !== n || "string" != typeof t) return a[l = l || (s ? e[r] = d.pop() || x.guid++ : r)] || (a[l] = s ? {} : {
              toJSON: x.noop
          }), "object" != typeof t && "function" != typeof t || (i ? a[l] = x.extend(a[l], t) : a[l].data = x.extend(a[l].data, t)), e = a[l], i || (e.data || (e.data = {}), e = e.data), void 0 !== n && (e[x.camelCase(t)] = n), "string" == typeof t ? null == (o = e[t]) && (o = e[x.camelCase(t)]) : o = e, o
      }
  }

  function le(e, t, n) {
      if (x.acceptData(e)) {
          var i, o, r = e.nodeType,
              s = r ? x.cache : e,
              a = r ? e[x.expando] : x.expando;
          if (s[a]) {
              if (t && (i = n ? s[a] : s[a].data)) {
                  o = (t = x.isArray(t) ? t.concat(x.map(t, x.camelCase)) : t in i || (t = x.camelCase(t)) in i ? [t] : t.split(" ")).length;
                  for (; o--;) delete i[t[o]];
                  if (n ? !se(i) : !x.isEmptyObject(i)) return
              }(n || (delete s[a].data, se(s[a]))) && (r ? x.cleanData([e], !0) : m.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
          }
      }
  }
  x.extend({
      cache: {},
      noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
          return !!(e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]) && !se(e)
      },
      data: function(e, t, n) {
          return ae(e, t, n)
      },
      removeData: function(e, t) {
          return le(e, t)
      },
      _data: function(e, t, n) {
          return ae(e, t, n, !0)
      },
      _removeData: function(e, t) {
          return le(e, t, !0)
      }
  }), x.fn.extend({
      data: function(e, t) {
          var n, i, o, r = this[0],
              s = r && r.attributes;
          if (void 0 !== e) return "object" == typeof e ? this.each(function() {
              x.data(this, e)
          }) : 1 < arguments.length ? this.each(function() {
              x.data(this, e, t)
          }) : r ? re(r, e, x.data(r, e)) : void 0;
          if (this.length && (o = x.data(r), 1 === r.nodeType) && !x._data(r, "parsedAttrs")) {
              for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && re(r, i = x.camelCase(i.slice(5)), o[i]);
              x._data(r, "parsedAttrs", !0)
          }
          return o
      },
      removeData: function(e) {
          return this.each(function() {
              x.removeData(this, e)
          })
      }
  }), x.extend({
      queue: function(e, t, n) {
          var i;
          return e ? (i = x._data(e, t = (t || "fx") + "queue"), n && (!i || x.isArray(n) ? i = x._data(e, t, x.makeArray(n)) : i.push(n)), i || []) : void 0
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = x.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = x._queueHooks(e, t);
          "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
              x.dequeue(e, t)
          }, r)), !i && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return x._data(e, n) || x._data(e, n, {
              empty: x.Callbacks("once memory").add(function() {
                  x._removeData(e, t + "queue"), x._removeData(e, n)
              })
          })
      }
  }), x.fn.extend({
      queue: function(t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? x.queue(this[0], t) : void 0 === n ? this : this.each(function() {
              var e = x.queue(this, t, n);
              x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              x.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          function n() {
              --o || r.resolveWith(s, [s])
          }
          var i, o = 1,
              r = x.Deferred(),
              s = this,
              a = this.length;
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = x._data(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
          return n(), r.promise(t)
      }
  });

  function b(e, t) {
      return "none" === x.css(e = t || e, "display") || !x.contains(e.ownerDocument, e)
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      a = ["Top", "Right", "Bottom", "Left"],
      l = x.access = function(e, t, n, i, o, r, s) {
          var a = 0,
              l = e.length,
              u = null == n;
          if ("object" === x.type(n))
              for (a in o = !0, n) x.access(e, t, a, n[a], !0, r, s);
          else if (void 0 !== i && (o = !0, x.isFunction(i) || (s = !0), t = u ? s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                  return u.call(x(e), n)
              }) : t))
              for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
      },
      ue = /^(?:checkbox|radio)$/i,
      r = v.createElement("input"),
      s = v.createElement("div"),
      u = v.createDocumentFragment();
  if (s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", m.leadingWhitespace = 3 === s.firstChild.nodeType, m.tbody = !s.getElementsByTagName("tbody").length, m.htmlSerialize = !!s.getElementsByTagName("link").length, m.html5Clone = "<:nav></:nav>" !== v.createElement("nav").cloneNode(!0).outerHTML, r.type = "checkbox", r.checked = !0, u.appendChild(r), m.appendChecked = r.checked, s.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, u.appendChild(s), s.innerHTML = "<input type='radio' checked='checked' name='t'/>", m.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, m.noCloneEvent = !0, s.attachEvent && (s.attachEvent("onclick", function() {
          m.noCloneEvent = !1
      }), s.cloneNode(!0).click()), null == m.deleteExpando) {
      m.deleteExpando = !0;
      try {
          delete s.test
      } catch (e) {
          m.deleteExpando = !1
      }
  }
  var p, ce, de = v.createElement("div");
  for (p in {
          submit: !0,
          change: !0,
          focusin: !0
      }) ce = "on" + p, (m[p + "Bubbles"] = ce in h) || (de.setAttribute(ce, "t"), m[p + "Bubbles"] = !1 === de.attributes[ce].expando);
  var pe = /^(?:input|select|textarea)$/i,
      fe = /^key/,
      he = /^(?:mouse|pointer|contextmenu)|click/,
      ge = /^(?:focusinfocus|focusoutblur)$/,
      me = /^([^.]*)(?:\.(.+)|)$/;

  function ve() {
      return !0
  }

  function f() {
      return !1
  }

  function ye() {
      try {
          return v.activeElement
      } catch (e) {}
  }

  function be(e) {
      var t = we.split("|"),
          n = e.createDocumentFragment();
      if (n.createElement)
          for (; t.length;) n.createElement(t.pop());
      return n
  }
  x.event = {
      global: {},
      add: function(e, t, n, i, o) {
          var r, s, a, l, u, c, d, p, f, h = x._data(e);
          if (h)
              for (n.handler && (n = (a = n).handler, o = a.selector), n.guid || (n.guid = x.guid++), r = (r = h.events) || (h.events = {}), (u = h.handle) || ((u = h.handle = function(e) {
                      return typeof x == y || e && x.event.triggered === e.type ? void 0 : x.event.dispatch.apply(u.elem, arguments)
                  }).elem = e), s = (t = (t || "").match(C) || [""]).length; s--;) d = f = (p = me.exec(t[s]) || [])[1], p = (p[2] || "").split(".").sort(), d && (l = x.event.special[d] || {}, d = (o ? l.delegateType : l.bindType) || d, l = x.event.special[d] || {}, f = x.extend({
                  type: d,
                  origType: f,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && x.expr.match.needsContext.test(o),
                  namespace: p.join(".")
              }, a), (c = r[d]) || ((c = r[d] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, i, p, u)) || (e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u)), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? c.splice(c.delegateCount++, 0, f) : c.push(f), x.event.global[d] = !0)
      },
      remove: function(e, t, n, i, o) {
          var r, s, a, l, u, c, d, p, f, h, g, m = x.hasData(e) && x._data(e);
          if (m && (c = m.events)) {
              for (u = (t = (t || "").match(C) || [""]).length; u--;)
                  if (f = g = (a = me.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                      for (d = x.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(e, s));
                      l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || x.removeEvent(e, f, m.handle), delete c[f])
                  } else
                      for (f in c) x.event.remove(e, f + t[u], n, i, !0);
              x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
          }
      },
      trigger: function(e, t, n, i) {
          var o, r, s, a, l, u, c = [n || v],
              d = g.call(e, "type") ? e.type : e,
              p = g.call(e, "namespace") ? e.namespace.split(".") : [],
              f = l = n = n || v;
          if (3 !== n.nodeType && 8 !== n.nodeType && !ge.test(d + x.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), r = d.indexOf(":") < 0 && "on" + d, (e = e[x.expando] ? e : new x.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : x.makeArray(t, [e]), a = x.event.special[d] || {}, i || !a.trigger || !1 !== a.trigger.apply(n, t))) {
              if (!i && !a.noBubble && !x.isWindow(n)) {
                  for (s = a.delegateType || d, ge.test(s + d) || (f = f.parentNode); f; f = f.parentNode) c.push(f), l = f;
                  l === (n.ownerDocument || v) && c.push(l.defaultView || l.parentWindow || h)
              }
              for (u = 0;
                  (f = c[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? s : a.bindType || d, (o = (x._data(f, "events") || {})[e.type] && x._data(f, "handle")) && o.apply(f, t), (o = r && f[r]) && o.apply && x.acceptData(f) && (e.result = o.apply(f, t), !1 === e.result) && e.preventDefault();
              if (e.type = d, !i && !e.isDefaultPrevented() && (!a._default || !1 === a._default.apply(c.pop(), t)) && x.acceptData(n) && r && n[d] && !x.isWindow(n)) {
                  (l = n[r]) && (n[r] = null), x.event.triggered = d;
                  try {
                      n[d]()
                  } catch (e) {}
                  x.event.triggered = void 0, l && (n[r] = l)
              }
              return e.result
          }
      },
      dispatch: function(e) {
          e = x.event.fix(e);
          var t, n, i, o, r, s = c.call(arguments),
              a = (x._data(this, "events") || {})[e.type] || [],
              l = x.event.special[e.type] || {};
          if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
              for (r = x.event.handlers.call(this, e, a), t = 0;
                  (i = r[t++]) && !e.isPropagationStopped();)
                  for (e.currentTarget = i.elem, o = 0;
                      (n = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, void 0 === (n = ((x.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, s))) || !1 !== (e.result = n) || (e.preventDefault(), e.stopPropagation());
              return l.postDispatch && l.postDispatch.call(this, e), e.result
          }
      },
      handlers: function(e, t) {
          var n, i, o, r, s = [],
              a = t.delegateCount,
              l = e.target;
          if (a && l.nodeType && (!e.button || "click" !== e.type))
              for (; l != this; l = l.parentNode || this)
                  if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                      for (o = [], r = 0; r < a; r++) void 0 === o[n = (i = t[r]).selector + " "] && (o[n] = i.needsContext ? 0 <= x(n, this).index(l) : x.find(n, this, null, [l]).length), o[n] && o.push(i);
                      o.length && s.push({
                          elem: l,
                          handlers: o
                      })
                  } return a < t.length && s.push({
              elem: this,
              handlers: t.slice(a)
          }), s
      },
      fix: function(e) {
          if (e[x.expando]) return e;
          var t, n, i, o = e.type,
              r = e,
              s = this.fixHooks[o];
          for (s || (this.fixHooks[o] = s = he.test(o) ? this.mouseHooks : fe.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
          return e.target || (e.target = r.srcElement || v), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var n, i, o = t.button,
                  r = t.fromElement;
              return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || v).documentElement, n = n.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
          }
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== ye() && this.focus) try {
                      return this.focus(), !1
                  } catch (e) {}
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  return this === ye() && this.blur ? (this.blur(), !1) : void 0
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
              },
              _default: function(e) {
                  return x.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, n, i) {
          e = x.extend(new x.Event, n, {
              type: e,
              isSimulated: !0,
              originalEvent: {}
          });
          i ? x.event.trigger(e, null, t) : x.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
      }
  }, x.removeEvent = v.removeEventListener ? function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
      t = "on" + t;
      e.detachEvent && (typeof e[t] == y && (e[t] = null), e.detachEvent(t, n))
  }, x.Event = function(e, t) {
      return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : f) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), void(this[x.expando] = !0)) : new x.Event(e, t)
  }, x.Event.prototype = {
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = ve, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = ve, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = ve, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, x.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, o) {
      x.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function(e) {
              var t, n = e.relatedTarget,
                  i = e.handleObj;
              return n && (n === this || x.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
          }
      }
  }), m.submitBubbles || (x.event.special.submit = {
      setup: function() {
          return !x.nodeName(this, "form") && void x.event.add(this, "click._submit keypress._submit", function(e) {
              e = e.target, e = x.nodeName(e, "input") || x.nodeName(e, "button") ? e.form : void 0;
              e && !x._data(e, "submitBubbles") && (x.event.add(e, "submit._submit", function(e) {
                  e._submit_bubble = !0
              }), x._data(e, "submitBubbles", !0))
          })
      },
      postDispatch: function(e) {
          e._submit_bubble && (delete e._submit_bubble, this.parentNode) && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)
      },
      teardown: function() {
          return !x.nodeName(this, "form") && void x.event.remove(this, "._submit")
      }
  }), m.changeBubbles || (x.event.special.change = {
      setup: function() {
          return pe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (x.event.add(this, "propertychange._change", function(e) {
              "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
          }), x.event.add(this, "click._change", function(e) {
              this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
          })), !1) : void x.event.add(this, "beforeactivate._change", function(e) {
              e = e.target;
              pe.test(e.nodeName) && !x._data(e, "changeBubbles") && (x.event.add(e, "change._change", function(e) {
                  !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
              }), x._data(e, "changeBubbles", !0))
          })
      },
      handle: function(e) {
          var t = e.target;
          return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function() {
          return x.event.remove(this, "._change"), !pe.test(this.nodeName)
      }
  }), m.focusinBubbles || x.each({
      focus: "focusin",
      blur: "focusout"
  }, function(n, i) {
      function o(e) {
          x.event.simulate(i, e.target, x.event.fix(e), !0)
      }
      x.event.special[i] = {
          setup: function() {
              var e = this.ownerDocument || this,
                  t = x._data(e, i);
              t || e.addEventListener(n, o, !0), x._data(e, i, (t || 0) + 1)
          },
          teardown: function() {
              var e = this.ownerDocument || this,
                  t = x._data(e, i) - 1;
              t ? x._data(e, i, t) : (e.removeEventListener(n, o, !0), x._removeData(e, i))
          }
      }
  }), x.fn.extend({
      on: function(e, t, n, i, o) {
          var r, s;
          if ("object" == typeof e) {
              for (r in "string" != typeof t && (n = n || t, t = void 0), e) this.on(r, t, n, e[r], o);
              return this
          }
          if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = f;
          else if (!i) return this;
          return 1 === o && (s = i, (i = function(e) {
              return x().off(e), s.apply(this, arguments)
          }).guid = s.guid || (s.guid = x.guid++)), this.each(function() {
              x.event.add(this, e, i, n, t)
          })
      },
      one: function(e, t, n, i) {
          return this.on(e, t, n, i, 1)
      },
      off: function(e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj) i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
          else {
              if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = f), this.each(function() {
                  x.event.remove(this, e, n, t)
              });
              for (o in e) this.off(o, t, e[o])
          }
          return this
      },
      trigger: function(e, t) {
          return this.each(function() {
              x.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          return n ? x.event.trigger(e, t, n, !0) : void 0
      }
  });
  var we = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      xe = / jQuery\d+="(?:null|\d+)"/g,
      Ce = new RegExp("<(?:" + we + ")[\\s/>]", "i"),
      Te = /^\s+/,
      ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ne = /<([\w:]+)/,
      Se = /<tbody/i,
      Ee = /<|&#?\w+;/,
      je = /<(?:script|style|link)/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Le = /^$|\/(?:java|ecma)script/i,
      De = /^true\/(.*)/,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      w = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: m.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      $e = be(v).appendChild(v.createElement("div"));

  function T(e, t) {
      var n, i, o = 0,
          r = typeof e.getElementsByTagName != y ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != y ? e.querySelectorAll(t || "*") : void 0;
      if (!r)
          for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || x.nodeName(i, t) ? r.push(i) : x.merge(r, T(i, t));
      return void 0 === t || t && x.nodeName(e, t) ? x.merge([e], r) : r
  }

  function _e(e) {
      ue.test(e.type) && (e.defaultChecked = e.checked)
  }

  function Pe(e, t) {
      return x.nodeName(e, "table") && x.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function Oe(e) {
      return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
  }

  function qe(e) {
      var t = De.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function We(e, t) {
      for (var n, i = 0; null != (n = e[i]); i++) x._data(n, "globalEval", !t || x._data(t[i], "globalEval"))
  }

  function Fe(e, t) {
      if (1 === t.nodeType && x.hasData(e)) {
          var n, i, o, e = x._data(e),
              r = x._data(t, e),
              s = e.events;
          if (s)
              for (n in delete r.handle, r.events = {}, s)
                  for (i = 0, o = s[n].length; i < o; i++) x.event.add(t, n, s[n][i]);
          r.data && (r.data = x.extend({}, r.data))
      }
  }
  w.optgroup = w.option, w.tbody = w.tfoot = w.colgroup = w.caption = w.thead, w.th = w.td, x.extend({
      clone: function(e, t, n) {
          var i, o, r, s, a, l, u, c, d = x.contains(e.ownerDocument, e);
          if (m.html5Clone || x.isXMLDoc(e) || !Ce.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : ($e.innerHTML = e.outerHTML, $e.removeChild(r = $e.firstChild)), !(m.noCloneEvent && m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
              for (i = T(r), a = T(e), s = 0; null != (o = a[s]); ++s)
                  if (i[s]) {
                      p = void 0;
                      f = void 0;
                      l = void 0;
                      u = void 0;
                      c = void 0;
                      var p = o;
                      var f = i[s];
                      if (1 === f.nodeType) {
                          if (l = f.nodeName.toLowerCase(), !m.noCloneEvent && f[x.expando]) {
                              for (u in (c = x._data(f)).events) x.removeEvent(f, u, c.handle);
                              f.removeAttribute(x.expando)
                          }
                          "script" === l && f.text !== p.text ? (Oe(f).text = p.text, qe(f)) : "object" === l ? (f.parentNode && (f.outerHTML = p.outerHTML), m.html5Clone && p.innerHTML && !x.trim(f.innerHTML) && (f.innerHTML = p.innerHTML)) : "input" === l && ue.test(p.type) ? (f.defaultChecked = f.checked = p.checked, f.value !== p.value && (f.value = p.value)) : "option" === l ? f.defaultSelected = f.selected = p.defaultSelected : "input" !== l && "textarea" !== l || (f.defaultValue = p.defaultValue)
                      }
                  } if (t)
              if (n)
                  for (a = a || T(e), i = i || T(r), s = 0; null != (o = a[s]); s++) Fe(o, i[s]);
              else Fe(e, r);
          return 0 < (i = T(r, "script")).length && We(i, !d && T(e, "script")), i = a = o = null, r
      },
      buildFragment: function(e, t, n, i) {
          for (var o, r, s, a, l, u, c, d = e.length, p = be(t), f = [], h = 0; h < d; h++)
              if ((r = e[h]) || 0 === r)
                  if ("object" === x.type(r)) x.merge(f, r.nodeType ? [r] : r);
                  else if (Ee.test(r)) {
              for (a = a || p.appendChild(t.createElement("div")), l = (Ne.exec(r) || ["", ""])[1].toLowerCase(), a.innerHTML = (c = w[l] || w._default)[1] + r.replace(ke, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
              if (!m.leadingWhitespace && Te.test(r) && f.push(t.createTextNode(Te.exec(r)[0])), !m.tbody)
                  for (o = (r = "table" !== l || Se.test(r) ? "<table>" !== c[1] || Se.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; o--;) x.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
              for (x.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
              a = p.lastChild
          } else f.push(t.createTextNode(r));
          for (a && p.removeChild(a), m.appendChecked || x.grep(T(f, "input"), _e), h = 0; r = f[h++];)
              if ((!i || -1 === x.inArray(r, i)) && (s = x.contains(r.ownerDocument, r), a = T(p.appendChild(r), "script"), s && We(a), n))
                  for (o = 0; r = a[o++];) Le.test(r.type || "") && n.push(r);
          return a = null, p
      },
      cleanData: function(e, t) {
          for (var n, i, o, r, s = 0, a = x.expando, l = x.cache, u = m.deleteExpando, c = x.event.special; null != (n = e[s]); s++)
              if ((t || x.acceptData(n)) && (r = (o = n[a]) && l[o])) {
                  if (r.events)
                      for (i in r.events) c[i] ? x.event.remove(n, i) : x.removeEvent(n, i, r.handle);
                  l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute != y ? n.removeAttribute(a) : n[a] = null, d.push(o))
              }
      }
  }), x.fn.extend({
      text: function(e) {
          return l(this, function(e) {
              return void 0 === e ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || v).createTextNode(e))
          }, null, e, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(e) {
              var t;
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Pe(this, e)).insertBefore(e, t.firstChild)
          })
      },
      before: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          for (var n, i = e ? x.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || x.cleanData(T(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && We(T(n, "script")), n.parentNode.removeChild(n));
          return this
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) {
              for (1 === e.nodeType && x.cleanData(T(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
              e.options && x.nodeName(e, "select") && (e.options.length = 0)
          }
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return x.clone(this, e, t)
          })
      },
      html: function(e) {
          return l(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  i = this.length;
              if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(xe, "") : void 0;
              if (!("string" != typeof e || je.test(e) || !m.htmlSerialize && Ce.test(e) || !m.leadingWhitespace && Te.test(e) || w[(Ne.exec(e) || ["", ""])[1].toLowerCase()])) {
                  e = e.replace(ke, "<$1></$2>");
                  try {
                      for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(T(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var t = arguments[0];
          return this.domManip(arguments, function(e) {
              t = this.parentNode, x.cleanData(T(this)), t && t.replaceChild(e, this)
          }), t && (t.length || t.nodeType) ? this : this.remove()
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(n, i) {
          n = W.apply([], n);
          var e, t, o, r, s, a, l = 0,
              u = this.length,
              c = this,
              d = u - 1,
              p = n[0],
              f = x.isFunction(p);
          if (f || 1 < u && "string" == typeof p && !m.checkClone && Ae.test(p)) return this.each(function(e) {
              var t = c.eq(e);
              f && (n[0] = p.call(this, e, t.html())), t.domManip(n, i)
          });
          if (u && (e = (a = x.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === a.childNodes.length && (a = e), e)) {
              for (o = (r = x.map(T(a, "script"), Oe)).length; l < u; l++) t = a, l !== d && (t = x.clone(t, !0, !0), o) && x.merge(r, T(t, "script")), i.call(this[l], t, l);
              if (o)
                  for (s = r[r.length - 1].ownerDocument, x.map(r, qe), l = 0; l < o; l++) t = r[l], Le.test(t.type || "") && !x._data(t, "globalEval") && x.contains(s, t) && (t.src ? x._evalUrl && x._evalUrl(t.src) : x.globalEval((t.text || t.textContent || t.innerHTML || "").replace(He, "")));
              a = e = null
          }
          return this
      }
  }), x.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, s) {
      x.fn[e] = function(e) {
          for (var t, n = 0, i = [], o = x(e), r = o.length - 1; n <= r; n++) t = n === r ? this : this.clone(!0), x(o[n])[s](t), F.apply(i, t.get());
          return this.pushStack(i)
      }
  });
  var Ie, k, Be = {};

  function Me(e, t) {
      e = x(t.createElement(e)).appendTo(t.body), t = h.getDefaultComputedStyle && (t = h.getDefaultComputedStyle(e[0])) ? t.display : x.css(e[0], "display");
      return e.detach(), t
  }

  function Re(e) {
      var t = v,
          n = Be[e];
      return n || ("none" !== (n = Me(e, t)) && n || ((t = ((Ie = (Ie || x("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ie[0].contentDocument).document).write(), t.close(), n = Me(e, t), Ie.detach()), Be[e] = n), n
  }
  m.shrinkWrapBlocks = function() {
      var e, t, n;
      return null != k ? k : (k = !1, (t = v.getElementsByTagName("body")[0]) && t.style ? (e = v.createElement("div"), (n = v.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom != y && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(v.createElement("div")).style.width = "5px", k = 3 !== e.offsetWidth), t.removeChild(n), k) : void 0)
  };
  var N, S, ze, Ve, Xe, Ue, Qe = /^margin/,
      Je = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
      Ye = /^(top|right|bottom|left)$/;

  function Ge(t, n) {
      return {
          get: function() {
              var e = t();
              if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments)
          }
      }
  }

  function Ke() {
      var e, t, n, i = v.getElementsByTagName("body")[0];
      i && i.style && (e = v.createElement("div"), (t = v.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(t).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", ze = Ve = !1, Ue = !0, h.getComputedStyle && (ze = "1%" !== (h.getComputedStyle(e, null) || {}).top, Ve = "4px" === (h.getComputedStyle(e, null) || {
          width: "4px"
      }).width, (n = e.appendChild(v.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", e.style.width = "1px", Ue = !parseFloat((h.getComputedStyle(n, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (Xe = 0 === n[0].offsetHeight) && (n[0].style.display = "", n[1].style.display = "none", Xe = 0 === n[0].offsetHeight), i.removeChild(t))
  }
  h.getComputedStyle ? (N = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
  }, S = function(e, t, n) {
      var i, o = e.style,
          r = (n = n || N(e)) ? n.getPropertyValue(t) || n[t] : void 0;
      return n && ("" !== r || x.contains(e.ownerDocument, e) || (r = x.style(e, t)), Je.test(r)) && Qe.test(t) && (e = o.width, t = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = e, o.minWidth = t, o.maxWidth = i), void 0 === r ? r : r + ""
  }) : v.documentElement.currentStyle && (N = function(e) {
      return e.currentStyle
  }, S = function(e, t, n) {
      var i, o, r, s = e.style;
      return null == (n = (n = n || N(e)) ? n[t] : void 0) && s && s[t] && (n = s[t]), Je.test(n) && !Ye.test(t) && (i = s.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : n, n = s.pixelLeft + "px", s.left = i, r) && (o.left = r), void 0 === n ? n : n + "" || "auto"
  }), (r = v.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (u = (u = r.getElementsByTagName("a")[0]) && u.style) && (u.cssText = "float:left;opacity:.5", m.opacity = "0.5" === u.opacity, m.cssFloat = !!u.cssFloat, r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === r.style.backgroundClip, m.boxSizing = "" === u.boxSizing || "" === u.MozBoxSizing || "" === u.WebkitBoxSizing, x.extend(m, {
      reliableHiddenOffsets: function() {
          return null == Xe && Ke(), Xe
      },
      boxSizingReliable: function() {
          return null == Ve && Ke(), Ve
      },
      pixelPosition: function() {
          return null == ze && Ke(), ze
      },
      reliableMarginRight: function() {
          return null == Ue && Ke(), Ue
      }
  })), x.swap = function(e, t, n, i) {
      var o, r = {};
      for (o in t) r[o] = e.style[o], e.style[o] = t[o];
      for (o in n = n.apply(e, i || []), t) e.style[o] = r[o];
      return n
  };
  var Ze = /alpha\([^)]*\)/i,
      et = /opacity\s*=\s*([^)]*)/,
      tt = /^(none|table(?!-c[ea]).+)/,
      nt = new RegExp("^(" + e + ")(.*)$", "i"),
      it = new RegExp("^([+-])=(" + e + ")", "i"),
      ot = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      rt = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      st = ["Webkit", "O", "Moz", "ms"];

  function at(e, t) {
      if (t in e) return t;
      for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = st.length; o--;)
          if ((t = st[o] + n) in e) return t;
      return i
  }

  function lt(e, t) {
      for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (r[s] = x._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && b(i) && (r[s] = x._data(i, "olddisplay", Re(i.nodeName)))) : (o = b(i), (n && "none" !== n || !o) && x._data(i, "olddisplay", o ? n : x.css(i, "display"))));
      for (s = 0; s < a; s++) !(i = e[s]).style || t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none");
      return e
  }

  function ut(e, t, n) {
      var i = nt.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }

  function ct(e, t, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += x.css(e, n + a[r], !0, o)), i ? ("content" === n && (s -= x.css(e, "padding" + a[r], !0, o)), "margin" !== n && (s -= x.css(e, "border" + a[r] + "Width", !0, o))) : (s += x.css(e, "padding" + a[r], !0, o), "padding" !== n && (s += x.css(e, "border" + a[r] + "Width", !0, o)));
      return s
  }

  function dt(e, t, n) {
      var i = !0,
          o = "width" === t ? e.offsetWidth : e.offsetHeight,
          r = N(e),
          s = m.boxSizing && "border-box" === x.css(e, "boxSizing", !1, r);
      if (o <= 0 || null == o) {
          if (((o = S(e, t, r)) < 0 || null == o) && (o = e.style[t]), Je.test(o)) return o;
          i = s && (m.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
      }
      return o + ct(e, t, n || (s ? "border" : "content"), i, r) + "px"
  }

  function E(e, t, n, i, o) {
      return new E.prototype.init(e, t, n, i, o)
  }
  x.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) return "" === (t = S(e, "opacity")) ? "1" : t
              }
          }
      },
      cssNumber: {
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
          float: m.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o, r, s, a = x.camelCase(t),
                  l = e.style;
              if (t = x.cssProps[a] || (x.cssProps[a] = at(l, a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
              if ("string" === (r = typeof n) && (o = it.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(x.css(e, t)), r = "number"), null != n && n == n && ("number" !== r || x.cssNumber[a] || (n += "px"), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                  l[t] = n
              } catch (e) {}
          }
      },
      css: function(e, t, n, i) {
          var o, r = x.camelCase(t);
          return t = x.cssProps[r] || (x.cssProps[r] = at(e.style, r)), "normal" === (o = void 0 === (o = (r = x.cssHooks[t] || x.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? S(e, t, i) : o) && t in rt && (o = rt[t]), ("" === n || n) && (r = parseFloat(o), !0 === n || x.isNumeric(r)) ? r || 0 : o
      }
  }), x.each(["height", "width"], function(e, o) {
      x.cssHooks[o] = {
          get: function(e, t, n) {
              return t ? tt.test(x.css(e, "display")) && 0 === e.offsetWidth ? x.swap(e, ot, function() {
                  return dt(e, o, n)
              }) : dt(e, o, n) : void 0
          },
          set: function(e, t, n) {
              var i = n && N(e);
              return ut(0, t, n ? ct(e, o, n, m.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
          }
      }
  }), m.opacity || (x.cssHooks.opacity = {
      get: function(e, t) {
          return et.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
          var n = e.style,
              e = e.currentStyle,
              i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              o = e && e.filter || n.filter || "";
          ((n.zoom = 1) <= t || "" === t) && "" === x.trim(o.replace(Ze, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = Ze.test(o) ? o.replace(Ze, i) : o + " " + i)
      }
  }), x.cssHooks.marginRight = Ge(m.reliableMarginRight, function(e, t) {
      return t ? x.swap(e, {
          display: "inline-block"
      }, S, [e, "marginRight"]) : void 0
  }), x.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(o, r) {
      x.cssHooks[o + r] = {
          expand: function(e) {
              for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + a[t] + r] = i[t] || i[t - 2] || i[0];
              return n
          }
      }, Qe.test(o) || (x.cssHooks[o + r].set = ut)
  }), x.fn.extend({
      css: function(e, t) {
          return l(this, function(e, t, n) {
              var i, o, r = {},
                  s = 0;
              if (x.isArray(t)) {
                  for (i = N(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
                  return r
              }
              return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
          }, e, t, 1 < arguments.length)
      },
      show: function() {
          return lt(this, !0)
      },
      hide: function() {
          return lt(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              b(this) ? x(this).show() : x(this).hide()
          })
      }
  }), ((x.Tween = E).prototype = {
      constructor: E,
      init: function(e, t, n, i, o, r) {
          this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = E.propHooks[this.prop];
          return (e && e.get ? e : E.propHooks._default).get(this)
      },
      run: function(e) {
          var t = E.propHooks[this.prop];
          return this.pos = e = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (t && t.set ? t : E.propHooks._default).set(this), this
      }
  }).init.prototype = E.prototype, (E.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
          },
          set: function(e) {
              x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  }).scrollTop = E.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, x.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  }, x.fx = E.prototype.init, x.fx.step = {};
  var j, pt, A, ft = /^(?:toggle|show|hide)$/,
      ht = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
      gt = /queueHooks$/,
      mt = [function(t, e, n) {
          var i, o, r, s, a, l, u, c = this,
              d = {},
              p = t.style,
              f = t.nodeType && b(t),
              h = x._data(t, "fxshow");
          for (i in n.queue || (null == (a = x._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                  a.unqueued || l()
              }), a.unqueued++, c.always(function() {
                  c.always(function() {
                      a.unqueued--, x.queue(t, "fx").length || a.empty.fire()
                  })
              })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = x.css(t, "display"), "inline" === ("none" === u ? x._data(t, "olddisplay") || Re(t.nodeName) : u)) && "none" === x.css(t, "float") && (m.inlineBlockNeedsLayout && "inline" !== Re(t.nodeName) ? p.zoom = 1 : p.display = "inline-block"), n.overflow && (p.overflow = "hidden", m.shrinkWrapBlocks() || c.always(function() {
                  p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
              })), e)
              if (o = e[i], ft.exec(o)) {
                  if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                      if ("show" !== o || !h || void 0 === h[i]) continue;
                      f = !0
                  }
                  d[i] = h && h[i] || x.style(t, i)
              } else u = void 0;
          if (x.isEmptyObject(d)) "inline" === ("none" === u ? Re(t.nodeName) : u) && (p.display = u);
          else
              for (i in h ? "hidden" in h && (f = h.hidden) : h = x._data(t, "fxshow", {}), r && (h.hidden = !f), f ? x(t).show() : c.done(function() {
                      x(t).hide()
                  }), c.done(function() {
                      for (var e in x._removeData(t, "fxshow"), d) x.style(t, e, d[e])
                  }), d) s = bt(f ? h[i] : 0, i, c), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
      }],
      L = {
          "*": [function(e, t) {
              var n = this.createTween(e, t),
                  i = n.cur(),
                  t = ht.exec(t),
                  o = t && t[3] || (x.cssNumber[e] ? "" : "px"),
                  r = (x.cssNumber[e] || "px" !== o && +i) && ht.exec(x.css(n.elem, e)),
                  s = 1,
                  a = 20;
              if (r && r[3] !== o)
                  for (o = o || r[3], t = t || [], r = +i || 1; x.style(n.elem, e, (r /= s = s || ".5") + o), s !== (s = n.cur() / i) && 1 !== s && --a;);
              return t && (r = n.start = +r || +i || 0, n.unit = o, n.end = t[1] ? r + (t[1] + 1) * t[2] : +t[2]), n
          }]
      };

  function vt() {
      return setTimeout(function() {
          j = void 0
      }), j = x.now()
  }

  function yt(e, t) {
      var n, i = {
              height: e
          },
          o = 0;
      for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = a[o])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
  }

  function bt(e, t, n) {
      for (var i, o = (L[t] || []).concat(L["*"]), r = 0, s = o.length; r < s; r++)
          if (i = o[r].call(n, t, e)) return i
  }

  function wt(o, e, t) {
      var n, r, i, s, a, l, u, c = 0,
          d = mt.length,
          p = x.Deferred().always(function() {
              delete f.elem
          }),
          f = function() {
              if (r) return !1;
              for (var e = j || vt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, i = h.tweens.length; n < i; n++) h.tweens[n].run(t);
              return p.notifyWith(o, [h, t, e]), t < 1 && i ? e : (p.resolveWith(o, [h]), !1)
          },
          h = p.promise({
              elem: o,
              props: x.extend({}, e),
              opts: x.extend(!0, {
                  specialEasing: {}
              }, t),
              originalProperties: e,
              originalOptions: t,
              startTime: j || vt(),
              duration: t.duration,
              tweens: [],
              createTween: function(e, t) {
                  t = x.Tween(o, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                  return h.tweens.push(t), t
              },
              stop: function(e) {
                  var t = 0,
                      n = e ? h.tweens.length : 0;
                  if (!r) {
                      for (r = !0; t < n; t++) h.tweens[t].run(1);
                      e ? p.resolveWith(o, [h, e]) : p.rejectWith(o, [h, e])
                  }
                  return this
              }
          }),
          g = h.props,
          m = g,
          v = h.opts.specialEasing;
      for (i in m)
          if (s = x.camelCase(i), a = v[s], l = m[i], x.isArray(l) && (a = l[1], l = m[i] = l[0]), i !== s && (m[s] = l, delete m[i]), u = x.cssHooks[s], u && "expand" in u)
              for (i in l = u.expand(l), delete m[s], l) i in m || (m[i] = l[i], v[i] = a);
          else v[s] = a;
      for (; c < d; c++)
          if (n = mt[c].call(h, o, g, h.opts)) return n;
      return x.map(g, bt, h), x.isFunction(h.opts.start) && h.opts.start.call(o, h), x.fx.timer(x.extend(f, {
          elem: o,
          anim: h,
          queue: h.opts.queue
      })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
  }
  x.Animation = x.extend(wt, {
      tweener: function(e, t) {
          for (var n, i = 0, o = (e = x.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < o; i++) n = e[i], L[n] = L[n] || [], L[n].unshift(t)
      },
      prefilter: function(e, t) {
          t ? mt.unshift(e) : mt.push(e)
      }
  }), x.speed = function(e, t, n) {
      var i = e && "object" == typeof e ? x.extend({}, e) : {
          complete: n || !n && t || x.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !x.isFunction(t) && t
      };
      return i.duration = x.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in x.fx.speeds ? x.fx.speeds[i.duration] : x.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          x.isFunction(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
      }, i
  }, x.fn.extend({
      fadeTo: function(e, t, n, i) {
          return this.filter(b).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, i)
      },
      animate: function(t, e, n, i) {
          function o() {
              var e = wt(this, x.extend({}, t), s);
              (r || x._data(this, "finish")) && e.stop(!0)
          }
          var r = x.isEmptyObject(t),
              s = x.speed(e, n, i);
          return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
      },
      stop: function(o, e, r) {
          function s(e) {
              var t = e.stop;
              delete e.stop, t(r)
          }
          return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
              var e = !0,
                  t = null != o && o + "queueHooks",
                  n = x.timers,
                  i = x._data(this);
              if (t) i[t] && i[t].stop && s(i[t]);
              else
                  for (t in i) i[t] && i[t].stop && gt.test(t) && s(i[t]);
              for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
              !e && r || x.dequeue(this, o)
          })
      },
      finish: function(s) {
          return !1 !== s && (s = s || "fx"), this.each(function() {
              var e, t = x._data(this),
                  n = t[s + "queue"],
                  i = t[s + "queueHooks"],
                  o = x.timers,
                  r = n ? n.length : 0;
              for (t.finish = !0, x.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish
          })
      }
  }), x.each(["toggle", "show", "hide"], function(e, i) {
      var o = x.fn[i];
      x.fn[i] = function(e, t, n) {
          return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(yt(i, !0), e, t, n)
      }
  }), x.each({
      slideDown: yt("show"),
      slideUp: yt("hide"),
      slideToggle: yt("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, i) {
      x.fn[e] = function(e, t, n) {
          return this.animate(i, e, t, n)
      }
  }), x.timers = [], x.fx.tick = function() {
      var e, t = x.timers,
          n = 0;
      for (j = x.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || x.fx.stop(), j = void 0
  }, x.fx.timer = function(e) {
      x.timers.push(e), e() ? x.fx.start() : x.timers.pop()
  }, x.fx.interval = 13, x.fx.start = function() {
      pt = pt || setInterval(x.fx.tick, x.fx.interval)
  }, x.fx.stop = function() {
      clearInterval(pt), pt = null
  }, x.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  }, x.fn.delay = function(i, e) {
      return i = x.fx && x.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
          var n = setTimeout(e, i);
          t.stop = function() {
              clearTimeout(n)
          }
      })
  }, (s = v.createElement("div")).setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = s.getElementsByTagName("a")[0], e = (u = v.createElement("select")).appendChild(v.createElement("option")), A = s.getElementsByTagName("input")[0], r.style.cssText = "top:1px", m.getSetAttribute = "t" !== s.className, m.style = /top/.test(r.getAttribute("style")), m.hrefNormalized = "/a" === r.getAttribute("href"), m.checkOn = !!A.value, m.optSelected = e.selected, m.enctype = !!v.createElement("form").enctype, u.disabled = !0, m.optDisabled = !e.disabled, (A = v.createElement("input")).setAttribute("value", ""), m.input = "" === A.getAttribute("value"), A.value = "t", A.setAttribute("type", "radio"), m.radioValue = "t" === A.value;
  var xt = /\r/g;
  x.fn.extend({
      val: function(t) {
          var n, e, i, o = this[0];
          return arguments.length ? (i = x.isFunction(t), this.each(function(e) {
              1 === this.nodeType && (null == (e = i ? t.call(this, e, x(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : x.isArray(e) && (e = x.map(e, function(e) {
                  return null == e ? "" : e + ""
              })), (n = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
          })) : o ? (n = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
      }
  }), x.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = x.find.attr(e, "value");
                  return null != t ? t : x.trim(x.text(e))
              }
          },
          select: {
              get: function(e) {
                  for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                      if (!(!(t = n[a]).selected && a !== i || (m.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && x.nodeName(t.parentNode, "optgroup"))) {
                          if (t = x(t).val(), o) return t;
                          r.push(t)
                      } return r
              },
              set: function(e, t) {
                  for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)
                      if (i = o[s], 0 <= x.inArray(x.valHooks.option.get(i), r)) try {
                          i.selected = n = !0
                      } catch (e) {
                          i.scrollHeight
                      } else i.selected = !1;
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), x.each(["radio", "checkbox"], function() {
      x.valHooks[this] = {
          set: function(e, t) {
              return x.isArray(t) ? e.checked = 0 <= x.inArray(x(e).val(), t) : void 0
          }
      }, m.checkOn || (x.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  });
  var D, Ct, H = x.expr.attrHandle,
      Tt = /^(?:checked|selected)$/i,
      $ = m.getSetAttribute,
      kt = m.input,
      Nt = (x.fn.extend({
          attr: function(e, t) {
              return l(this, x.attr, e, t, 1 < arguments.length)
          },
          removeAttr: function(e) {
              return this.each(function() {
                  x.removeAttr(this, e)
              })
          }
      }), x.extend({
          attr: function(e, t, n) {
              var i, o, r = e.nodeType;
              if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute == y ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? Ct : D)), void 0 === n ? !(i && "get" in i && null !== (o = i.get(e, t))) && null == (o = x.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void x.removeAttr(e, t))
          },
          removeAttr: function(e, t) {
              var n, i, o = 0,
                  r = t && t.match(C);
              if (r && 1 === e.nodeType)
                  for (; n = r[o++];) i = x.propFix[n] || n, x.expr.match.bool.test(n) ? kt && $ || !Tt.test(n) ? e[i] = !1 : e[x.camelCase("default-" + n)] = e[i] = !1 : x.attr(e, n, ""), e.removeAttribute($ ? n : i)
          },
          attrHooks: {
              type: {
                  set: function(e, t) {
                      var n;
                      if (!m.radioValue && "radio" === t && x.nodeName(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      }), Ct = {
          set: function(e, t, n) {
              return !1 === t ? x.removeAttr(e, n) : kt && $ || !Tt.test(n) ? e.setAttribute(!$ && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
          }
      }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var r = H[t] || x.find.attr;
          H[t] = kt && $ || !Tt.test(t) ? function(e, t, n) {
              var i, o;
              return n || (o = H[t], H[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, H[t] = o), i
          } : function(e, t, n) {
              return n ? void 0 : e[x.camelCase("default-" + t)] ? t.toLowerCase() : null
          }
      }), kt && $ || (x.attrHooks.value = {
          set: function(e, t, n) {
              return x.nodeName(e, "input") ? void(e.defaultValue = t) : D && D.set(e, t, n)
          }
      }), $ || (D = {
          set: function(e, t, n) {
              var i = e.getAttributeNode(n);
              return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
          }
      }, H.id = H.name = H.coords = function(e, t, n) {
          return n ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
      }, x.valHooks.button = {
          get: function(e, t) {
              e = e.getAttributeNode(t);
              return e && e.specified ? e.value : void 0
          },
          set: D.set
      }, x.attrHooks.contenteditable = {
          set: function(e, t, n) {
              D.set(e, "" !== t && t, n)
          }
      }, x.each(["width", "height"], function(e, n) {
          x.attrHooks[n] = {
              set: function(e, t) {
                  return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
              }
          }
      })), m.style || (x.attrHooks.style = {
          get: function(e) {
              return e.style.cssText || void 0
          },
          set: function(e, t) {
              return e.style.cssText = t + ""
          }
      }), /^(?:input|select|textarea|button|object)$/i),
      St = /^(?:a|area)$/i,
      Et = (x.fn.extend({
          prop: function(e, t) {
              return l(this, x.prop, e, t, 1 < arguments.length)
          },
          removeProp: function(e) {
              return e = x.propFix[e] || e, this.each(function() {
                  try {
                      this[e] = void 0, delete this[e]
                  } catch (e) {}
              })
          }
      }), x.extend({
          propFix: {
              for: "htmlFor",
              class: "className"
          },
          prop: function(e, t, n) {
              var i, o, r = e.nodeType;
              if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !x.isXMLDoc(e)) && (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
          },
          propHooks: {
              tabIndex: {
                  get: function(e) {
                      var t = x.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : Nt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                  }
              }
          }
      }), m.hrefNormalized || x.each(["href", "src"], function(e, t) {
          x.propHooks[t] = {
              get: function(e) {
                  return e.getAttribute(t, 4)
              }
          }
      }), m.optSelected || (x.propHooks.selected = {
          get: function(e) {
              e = e.parentNode;
              return e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex, null
          }
      }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          x.propFix[this.toLowerCase()] = this
      }), m.enctype || (x.propFix.enctype = "encoding"), /[\t\r\n\f]/g),
      jt = (x.fn.extend({
          addClass: function(t) {
              var e, n, i, o, r, s, a = 0,
                  l = this.length,
                  u = "string" == typeof t && t;
              if (x.isFunction(t)) return this.each(function(e) {
                  x(this).addClass(t.call(this, e, this.className))
              });
              if (u)
                  for (e = (t || "").match(C) || []; a < l; a++)
                      if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                          for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                          s = x.trim(i), n.className !== s && (n.className = s)
                      } return this
          },
          removeClass: function(t) {
              var e, n, i, o, r, s, a = 0,
                  l = this.length,
                  u = 0 === arguments.length || "string" == typeof t && t;
              if (x.isFunction(t)) return this.each(function(e) {
                  x(this).removeClass(t.call(this, e, this.className))
              });
              if (u)
                  for (e = (t || "").match(C) || []; a < l; a++)
                      if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                          for (r = 0; o = e[r++];)
                              for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                          s = t ? x.trim(i) : "", n.className !== s && (n.className = s)
                      } return this
          },
          toggleClass: function(o, t) {
              var r = typeof o;
              return "boolean" == typeof t && "string" == r ? t ? this.addClass(o) : this.removeClass(o) : this.each(x.isFunction(o) ? function(e) {
                  x(this).toggleClass(o.call(this, e, this.className, t), t)
              } : function() {
                  if ("string" == r)
                      for (var e, t = 0, n = x(this), i = o.match(C) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else r != y && "boolean" != r || (this.className && x._data(this, "__className__", this.className), this.className = !this.className && !1 !== o && x._data(this, "__className__") || "")
              })
          },
          hasClass: function(e) {
              for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                  if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Et, " ").indexOf(t)) return !0;
              return !1
          }
      }), x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
          x.fn[n] = function(e, t) {
              return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
          }
      }), x.fn.extend({
          hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e)
          },
          bind: function(e, t, n) {
              return this.on(e, null, t, n)
          },
          unbind: function(e, t) {
              return this.off(e, null, t)
          },
          delegate: function(e, t, n, i) {
              return this.on(t, e, n, i)
          },
          undelegate: function(e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
          }
      }), x.now()),
      At = /\?/,
      Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  x.parseJSON = function(e) {
      var o, r, t;
      return h.JSON && h.JSON.parse ? h.JSON.parse(e + "") : (r = null, (t = x.trim(e + "")) && !x.trim(t.replace(Lt, function(e, t, n, i) {
          return 0 === (r = o && t ? 0 : r) ? e : (o = n || t, r += !i - !n, "")
      })) ? Function("return " + t)() : x.error("Invalid JSON: " + e))
  }, x.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
          h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
      } catch (e) {
          t = void 0
      }
      return t && t.documentElement && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
  };
  var _, P, Dt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      _t = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      qt = {},
      Wt = {},
      Ft = "*/".concat("*");
  try {
      P = location.href
  } catch (e) {
      (P = v.createElement("a")).href = "", P = P.href
  }

  function It(r) {
      return function(e, t) {
          "string" != typeof e && (t = e, e = "*");
          var n, i = 0,
              o = e.toLowerCase().match(C) || [];
          if (x.isFunction(t))
              for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
      }
  }

  function Bt(t, i, o, r) {
      var s = {},
          a = t === Wt;

      function l(e) {
          var n;
          return s[e] = !0, x.each(t[e] || [], function(e, t) {
              t = t(i, o, r);
              return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
          }), n
      }
      return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function Mt(e, t) {
      var n, i, o = x.ajaxSettings.flatOptions || {};
      for (i in t) void 0 !== t[i] && ((o[i] ? e : n = n || {})[i] = t[i]);
      return n && x.extend(!0, e, n), e
  }
  _ = Ot.exec(P.toLowerCase()) || [], x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: P,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": x.parseJSON,
              "text xml": x.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? Mt(Mt(e, x.ajaxSettings), t) : Mt(x.ajaxSettings, e)
      },
      ajaxPrefilter: It(qt),
      ajaxTransport: It(Wt),
      ajax: function(e, t) {
          "object" == typeof e && (t = e, e = void 0);
          var n, l, u, c, d, p, i, f = x.ajaxSetup({}, t = t || {}),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? x(h) : x.event,
              m = x.Deferred(),
              v = x.Callbacks("once memory"),
              y = f.statusCode || {},
              o = {},
              r = {},
              b = 0,
              s = "canceled",
              w = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (2 === b) {
                          if (!i)
                              for (i = {}; t = $t.exec(u);) i[t[1].toLowerCase()] = t[2];
                          t = i[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return 2 === b ? u : null
                  },
                  setRequestHeader: function(e, t) {
                      var n = e.toLowerCase();
                      return b || (e = r[n] = r[n] || e, o[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return b || (f.mimeType = e), this
                  },
                  statusCode: function(e) {
                      if (e)
                          if (b < 2)
                              for (var t in e) y[t] = [y[t], e[t]];
                          else w.always(e[w.status]);
                      return this
                  },
                  abort: function(e) {
                      e = e || s;
                      return p && p.abort(e), a(0, e), this
                  }
              };
          if (m.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || P) + "").replace(Dt, "").replace(Pt, _[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = x.trim(f.dataType || "*").toLowerCase().match(C) || [""], null == f.crossDomain && (e = Ot.exec(f.url.toLowerCase()), f.crossDomain = !(!e || e[1] === _[1] && e[2] === _[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (_[3] || ("http:" === _[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), Bt(qt, f, t, w), 2 !== b) {
              for (n in (d = f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_t.test(f.type), l = f.url, f.hasContent || (f.data && (l = f.url += (At.test(l) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Ht.test(l) ? l.replace(Ht, "$1_=" + jt++) : l + (At.test(l) ? "&" : "?") + "_=" + jt++)), f.ifModified && (x.lastModified[l] && w.setRequestHeader("If-Modified-Since", x.lastModified[l]), x.etag[l]) && w.setRequestHeader("If-None-Match", x.etag[l]), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), f.headers) w.setRequestHeader(n, f.headers[n]);
              if (f.beforeSend && (!1 === f.beforeSend.call(h, w, f) || 2 === b)) return w.abort();
              for (n in s = "abort", {
                      success: 1,
                      error: 1,
                      complete: 1
                  }) w[n](f[n]);
              if (p = Bt(Wt, f, t, w)) {
                  w.readyState = 1, d && g.trigger("ajaxSend", [w, f]), f.async && 0 < f.timeout && (c = setTimeout(function() {
                      w.abort("timeout")
                  }, f.timeout));
                  try {
                      b = 1, p.send(o, a)
                  } catch (e) {
                      if (!(b < 2)) throw e;
                      a(-1, e)
                  }
              } else a(-1, "No Transport")
          }
          return w;

          function a(e, t, n, i) {
              var o, r, s, a = t;
              2 !== b && (b = 2, c && clearTimeout(c), p = void 0, u = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = ((e, t, n) => {
                  for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (o)
                      for (s in a)
                          if (a[s] && a[s].test(o)) {
                              l.unshift(s);
                              break
                          } if (l[0] in n) r = l[0];
                  else {
                      for (s in n) {
                          if (!l[0] || e.converters[s + " " + l[0]]) {
                              r = s;
                              break
                          }
                          i = i || s
                      }
                      r = r || i
                  }
                  return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
              })(f, w, n)), s = ((e, t, n, i) => {
                  var o, r, s, a, l, u = {},
                      c = e.dataTypes.slice();
                  if (c[1])
                      for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                  for (r = c.shift(); r;)
                      if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                      if (!(s = u[l + " " + r] || u["* " + r]))
                          for (o in u)
                              if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                  !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                                  break
                              } if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else try {
                              t = s(t)
                          } catch (e) {
                              return {
                                  state: "parsererror",
                                  error: s ? e : "No conversion from " + l + " to " + r
                              }
                          }
                  }
                  return {
                      state: "success",
                      data: t
                  }
              })(f, s, w, i), i ? (f.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (x.lastModified[l] = n), n = w.getResponseHeader("etag")) && (x.etag[l] = n), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, (e || !a) && (a = "error", e < 0) && (e = 0)), w.status = e, w.statusText = (t || a) + "", i ? m.resolveWith(h, [o, a, w]) : m.rejectWith(h, [w, a, r]), w.statusCode(y), y = void 0, d && g.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? o : r]), v.fireWith(h, [w, a]), d) && (g.trigger("ajaxComplete", [w, f]), --x.active || x.event.trigger("ajaxStop"))
          }
      },
      getJSON: function(e, t, n) {
          return x.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return x.get(e, void 0, t, "script")
      }
  }), x.each(["get", "post"], function(e, o) {
      x[o] = function(e, t, n, i) {
          return x.isFunction(t) && (i = i || n, n = t, t = void 0), x.ajax({
              url: e,
              type: o,
              dataType: i,
              data: t,
              success: n
          })
      }
  }), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      x.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), x._evalUrl = function(e) {
      return x.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0
      })
  }, x.fn.extend({
      wrapAll: function(t) {
          var e;
          return x.isFunction(t) ? this.each(function(e) {
              x(this).wrapAll(t.call(this, e))
          }) : (this[0] && (e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
              for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
              return e
          }).append(this)), this)
      },
      wrapInner: function(n) {
          return this.each(x.isFunction(n) ? function(e) {
              x(this).wrapInner(n.call(this, e))
          } : function() {
              var e = x(this),
                  t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n)
          })
      },
      wrap: function(t) {
          var n = x.isFunction(t);
          return this.each(function(e) {
              x(this).wrapAll(n ? t.call(this, e) : t)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
          }).end()
      }
  }), x.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !m.reliableHiddenOffsets() && "none" === (e.style && e.style.display || x.css(e, "display"))
  }, x.expr.filters.visible = function(e) {
      return !x.expr.filters.hidden(e)
  };
  var Rt = /%20/g,
      zt = /\[\]$/,
      Vt = /\r?\n/g,
      Xt = /^(?:submit|button|image|reset|file)$/i,
      Ut = /^(?:input|select|textarea|keygen)/i;
  x.param = function(e, t) {
      function n(e, t) {
          t = x.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      }
      var i, o = [];
      if (void 0 === t && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
          n(this.name, this.value)
      });
      else
          for (i in e) ! function n(i, e, o, r) {
              if (x.isArray(e)) x.each(e, function(e, t) {
                  o || zt.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t ? e : "") + "]", t, o, r)
              });
              else if (o || "object" !== x.type(e)) r(i, e);
              else
                  for (var t in e) n(i + "[" + t + "]", e[t], o, r)
          }(i, e[i], t, n);
      return o.join("&").replace(Rt, "+")
  }, x.fn.extend({
      serialize: function() {
          return x.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = x.prop(this, "elements");
              return e ? x.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !x(this).is(":disabled") && Ut.test(this.nodeName) && !Xt.test(e) && (this.checked || !ue.test(e))
          }).map(function(e, t) {
              var n = x(this).val();
              return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Vt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Vt, "\r\n")
              }
          }).get()
      }
  }), x.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yt() || (() => {
          try {
              return new h.ActiveXObject("Microsoft.XMLHTTP")
          } catch (e) {}
      })()
  } : Yt;
  var Qt = 0,
      Jt = {},
      s = x.ajaxSettings.xhr();

  function Yt() {
      try {
          return new h.XMLHttpRequest
      } catch (e) {}
  }
  h.ActiveXObject && x(h).on("unload", function() {
      for (var e in Jt) Jt[e](void 0, !0)
  }), m.cors = !!s && "withCredentials" in s, (m.ajax = !!s) && x.ajaxTransport(function(l) {
      var u;
      if (!l.crossDomain || m.cors) return {
          send: function(e, r) {
              var t, s = l.xhr(),
                  a = ++Qt;
              if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                  for (t in l.xhrFields) s[t] = l.xhrFields[t];
              for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && s.setRequestHeader(t, e[t] + "");
              s.send(l.hasContent && l.data || null), u = function(e, t) {
                  var n, i, o;
                  if (u && (t || 4 === s.readyState))
                      if (delete Jt[a], u = void 0, s.onreadystatechange = x.noop, t) 4 !== s.readyState && s.abort();
                      else {
                          o = {}, n = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                          try {
                              i = s.statusText
                          } catch (e) {
                              i = ""
                          }
                          n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                      } o && r(n, i, o, s.getAllResponseHeaders())
              }, l.async ? 4 === s.readyState ? setTimeout(u) : s.onreadystatechange = Jt[a] = u : u()
          },
          abort: function() {
              u && u(void 0, !0)
          }
      }
  }), x.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return x.globalEval(e), e
          }
      }
  }), x.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), x.ajaxTransport("script", function(t) {
      var i, o;
      if (t.crossDomain) return o = v.head || x("head")[0] || v.documentElement, {
          send: function(e, n) {
              (i = v.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                  !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t) || n(200, "success")
              }, o.insertBefore(i, o.firstChild)
          },
          abort: function() {
              i && i.onload(void 0, !0)
          }
      }
  });
  var Gt = [],
      Kt = /(=)\?(?=&|$)|\?\?/,
      Zt = (x.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
              var e = Gt.pop() || x.expando + "_" + jt++;
              return this[e] = !0, e
          }
      }), x.ajaxPrefilter("json jsonp", function(e, t, n) {
          var i, o, r, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
          return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = x.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
              return r || x.error(i + " was not called"), r[0]
          }, e.dataTypes[0] = "json", o = h[i], h[i] = function() {
              r = arguments
          }, n.always(function() {
              h[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), r && x.isFunction(o) && o(r[0]), r = o = void 0
          }), "script") : void 0
      }), x.parseHTML = function(e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && (n = t, t = !1), t = t || v;
          var i = U.exec(e),
              n = !n && [];
          return i ? [t.createElement(i[1])] : (i = x.buildFragment([e], t, n), n && n.length && x(n).remove(), x.merge([], i.childNodes))
      }, x.fn.load),
      en = (x.fn.load = function(e, t, n) {
          var i, o, r, s, a;
          return "string" != typeof e && Zt ? Zt.apply(this, arguments) : (s = this, 0 <= (a = e.indexOf(" ")) && (i = x.trim(e.slice(a, e.length)), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && x.ajax({
              url: e,
              type: r,
              dataType: "html",
              data: t
          }).done(function(e) {
              o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
          }).complete(n && function(e, t) {
              s.each(n, o || [e.responseText, t, e])
          }), this)
      }, x.expr.filters.animated = function(t) {
          return x.grep(x.timers, function(e) {
              return t === e.elem
          }).length
      }, h.document.documentElement);

  function tn(e) {
      return x.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  x.offset = {
      setOffset: function(e, t, n) {
          var i, o, r, s, a = x.css(e, "position"),
              l = x(e),
              u = {};
          "static" === a && (e.style.position = "relative"), r = l.offset(), i = x.css(e, "top"), s = x.css(e, "left"), a = ("absolute" === a || "fixed" === a) && -1 < x.inArray("auto", [i, s]) ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = x.isFunction(t) ? t.call(e, n, r) : t).top && (u.top = t.top - r.top + o), null != t.left && (u.left = t.left - r.left + a), "using" in t ? t.using.call(e, u) : l.css(u)
      }
  }, x.fn.extend({
      offset: function(t) {
          var e, n, i, o;
          return arguments.length ? void 0 === t ? this : this.each(function(e) {
              x.offset.setOffset(this, t, e)
          }) : (n = {
              top: 0,
              left: 0
          }, (o = (i = this[0]) && i.ownerDocument) ? (e = o.documentElement, x.contains(e, i) ? (typeof i.getBoundingClientRect != y && (n = i.getBoundingClientRect()), i = tn(o), {
              top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
              left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
          }) : n) : void 0)
      },
      position: function() {
          var e, t, n, i;
          if (this[0]) return n = {
              top: 0,
              left: 0
          }, i = this[0], "fixed" === x.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (n = x.nodeName(e[0], "html") ? n : e.offset()).top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
              top: t.top - n.top - x.css(i, "marginTop", !0),
              left: t.left - n.left - x.css(i, "marginLeft", !0)
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent || en; e && !x.nodeName(e, "html") && "static" === x.css(e, "position");) e = e.offsetParent;
              return e || en
          })
      }
  }), x.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, o) {
      var r = /Y/.test(o);
      x.fn[t] = function(e) {
          return l(this, function(e, t, n) {
              var i = tn(e);
              return void 0 === n ? i ? o in i ? i[o] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(r ? x(i).scrollLeft() : n, r ? n : x(i).scrollTop()) : e[t] = n)
          }, t, e, arguments.length, null)
      }
  }), x.each(["top", "left"], function(e, n) {
      x.cssHooks[n] = Ge(m.pixelPosition, function(e, t) {
          return t ? (t = S(e, n), Je.test(t) ? x(e).position()[n] + "px" : t) : void 0
      })
  }), x.each({
      Height: "height",
      Width: "width"
  }, function(r, s) {
      x.each({
          padding: "inner" + r,
          content: s,
          "": "outer" + r
      }, function(i, e) {
          x.fn[e] = function(e, t) {
              var n = arguments.length && (i || "boolean" != typeof e),
                  o = i || (!0 === e || !0 === t ? "margin" : "border");
              return l(this, function(e, t, n) {
                  var i;
                  return x.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? x.css(e, t, o) : x.style(e, t, n, o)
              }, s, n ? e : void 0, n, null)
          }
      })
  }), x.fn.size = function() {
      return this.length
  }, x.fn.andSelf = x.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return x
  });
  var nn = h.jQuery,
      on = h.$;
  return x.noConflict = function(e) {
      return h.$ === x && (h.$ = on), e && h.jQuery === x && (h.jQuery = nn), x
  }, typeof O == y && (h.jQuery = h.$ = x), x
}), ! function() {
  var i = {};
  this.tmpl = function e(t, n) {
      t = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t] || e(document.getElementById(t).innerHTML);
      return n ? t(n) : t
  }
}(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
async function initLivePreviewJasmin(i) {
let o = $(i);
if (!o.hasClass("is_rotating")) {
  o.addClass("is_rotating"), o.css("overflow", "hidden");
  let e = o.attr("data-live"),
      t = o.attr("id"),
      n = (o.append(`<span id="join-${t}" class="text-center text-red1 animate-pulse absolute w-full h-full bg-opacity-70 bg-white top-0 left-0 z-1 pt-[25%]">JOIN ME!</span>`), !1);
  try {
      await videojs, n = !0
  } catch (e) {}
  n || ((i = document.createElement("script")).setAttribute("type", "text/javascript"), i.setAttribute("src", "https://th-eu3.pornone.com/js/video.min.js"), i.async = !0, $("head").append(i), await new Promise(e => setTimeout(e, 1e3)));
  i = $("<video>").attr("id", "vid_" + t).addClass("absolute hidden top-0 left-[-15%] max-w-[130%] w-[130%] h-full bg-white-two dark:bg-black-darkest z-2");
  o.append(i), window.player_mp4t_live = videojs("vid_" + t, {
      controls: !1,
      playsinline: !0,
      loop: !0,
      autoplay: !0,
      loadingSpinner: !1,
      muted: !0
  }, function() {
      $(`#vid_${t}_html5_api`).hover(function() {
          window.player_mp4t_live.pause(), window.player_mp4t_live = videojs(`#vid_${t}_html5_api`), window.player_mp4t_live.play()
      }), this.on("loadeddata", function() {
          $("#join-" + t).remove(), $(`#vid_${t}, #vid_${t}_html5_api`).fadeIn(100);
          var e = o.attr("href");
          void 0 !== e && o.append(`<a href="${e}" target="_blank" rel="noopener noreferrer sponsored nofollow" id="mask_${t}" class="absolute w-full h-full top-0 left-0 z-3"></a>`)
      }), this.one("error", function() {
          $("#join-" + t).remove(), o.find(".live-badge").removeClass("bg-red1").addClass("bg-black-d1")
      }), this.src({
          src: e,
          type: "video/mp4"
      })
  }), $(`#join-${t}, #vid_${t} .vjs-modal-dialog`).remove()
}
}

function endLivePreviewJasmin(e) {
void 0 !== window.player_mp4t_live && window.player_mp4t_live.dispose();
var t = $("#" + e);
t.hasClass("is_rotating") && t.removeClass("is_rotating"), $("#join-" + e + ", #vid_" + e + ", #mask_" + e).remove()
}

function startPreview(e) {
Boolean($("#" + e).data("thumbs")) && Boolean($("#" + e).data("thumbs").length) && (startpreload(e, 1), showing[e] = setTimeout("showImage(" + e + ", 1);", 800), startpreload(e, 0))
}

function stopPreview(e) {
var t;
(t = showing[e]) && (showing[e] = null, clearTimeout(t), showImage(e, 0, 1))
}

function showImage(e, t, n) {
var i = $("#" + e),
  o = i.data("thumbs");
if (void 0 !== o) {
  if (n) return $("#" + e).attr("src", i.data("path") + "b" + i.data("thumbs")[t] + ".jpg");
  if (showing[e] && o[t]) {
      if (!isloaded(preloadArr[e][t])) return showing[e] = setTimeout("showImage(" + e + ", " + t + ");", 50);
      $("#" + e).attr("src", preloadArr[e][t].src), $("#" + e).attr("srcset", preloadArr[e][t].srcset);
      n = o[t + 1] ? t + 1 : 1;
      startpreload(e, n), showing[e] = setTimeout("showImage(" + e + ", " + n + ");", 800)
  }
}
}

function startpreload(e, t) {
var n = $("#" + e);
if (preloadArr[e] || (preloadArr[e] = []), preloadArr[e][t]) return !0;
preloadArr[e][t] = new Image, preloadArr[e][t].src = n.data("path") + "d" + n.data("thumbs")[t] + ".jpg", preloadArr[e][t].srcset = n.data("path") + "b" + n.data("thumbs")[t] + ".jpg 2x"
}

function isloaded(e) {
return !!e.complete && (void 0 === e.naturalWidth || 0 != e.naturalWidth)
}(() => {
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
})(), (l => {
function u(e, t) {
  this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
}
u.VERSION = "3.3.1", u.TRANSITION_DURATION = 150, u.DEFAULTS = {
  animation: !0,
  placement: "top",
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  container: !1,
  viewport: {
      selector: "body",
      padding: 0
  }
}, u.prototype.init = function(e, t, n) {
  this.enabled = !0, this.type = e, this.$element = l(t), this.options = this.getOptions(n), this.$viewport = this.options.viewport && l(this.options.viewport.selector || this.options.viewport);
  for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
      var r, s = i[o];
      "click" == s ? this.$element.on("click." + this.type, this.options.selector, l.proxy(this.toggle, this)) : "manual" != s && (r = "hover" == s ? "mouseleave" : "focusout", this.$element.on(("hover" == s ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, l.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, l.proxy(this.leave, this)))
  }
  this.options.selector ? this._options = l.extend({}, this.options, {
      trigger: "manual",
      selector: ""
  }) : this.fixTitle()
}, u.prototype.getDefaults = function() {
  return u.DEFAULTS
}, u.prototype.getOptions = function(e) {
  return (e = l.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
  }), e
}, u.prototype.getDelegateOptions = function() {
  var n = {},
      i = this.getDefaults();
  return this._options && l.each(this._options, function(e, t) {
      i[e] != t && (n[e] = t)
  }), n
}, u.prototype.enter = function(e) {
  var t = e instanceof this.constructor ? e : l(e.currentTarget).data("bs." + this.type);
  return t && t.$tip && t.$tip.is(":visible") ? void(t.hoverState = "in") : (t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), l(e.currentTarget).data("bs." + this.type, t)), clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
      "in" == t.hoverState && t.show()
  }, t.options.delay.show)) : t.show())
}, u.prototype.leave = function(e) {
  var t = e instanceof this.constructor ? e : l(e.currentTarget).data("bs." + this.type);
  return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), l(e.currentTarget).data("bs." + this.type, t)), clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
      "out" == t.hoverState && t.hide()
  }, t.options.delay.hide)) : t.hide()
}, u.prototype.show = function() {
  var t, e, n, i, o, r, s, a = l.Event("show.bs." + this.type);
  this.hasContent() && this.enabled && (this.$element.trigger(a), o = l.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), !a.isDefaultPrevented()) && o && (a = (t = this).tip(), o = this.getUID(this.type), this.setContent(), a.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && a.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, (s = (e = /\s?auto?\s?/i).test(o)) && (o = o.replace(e, "") || "top"), a.detach().css({
      top: 0,
      left: 0,
      display: "block"
  }).addClass(o).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), e = this.getPosition(), n = a[0].offsetWidth, i = a[0].offsetHeight, s && (s = o, r = this.options.container ? l(this.options.container) : this.$element.parent(), r = this.getPosition(r), o = "bottom" == o && e.bottom + i > r.bottom ? "top" : "top" == o && e.top - i < r.top ? "bottom" : "right" == o && e.right + n > r.width ? "left" : "left" == o && e.left - n < r.left ? "right" : o, a.removeClass(s).addClass(o)), r = this.getCalculatedOffset(o, e, n, i), this.applyPlacement(r, o), s = function() {
      var e = t.hoverState;
      t.$element.trigger("shown.bs." + t.type), t.hoverState = null, "out" == e && t.leave(t)
  }, l.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", s).emulateTransitionEnd(u.TRANSITION_DURATION) : s())
}, u.prototype.applyPlacement = function(e, t) {
  var n = this.tip(),
      i = n[0].offsetWidth,
      o = n[0].offsetHeight,
      r = parseInt(n.css("margin-top"), 10),
      s = parseInt(n.css("margin-left"), 10),
      r = (isNaN(r) && (r = 0), isNaN(s) && (s = 0), e.top = e.top + r, e.left = e.left + s, l.offset.setOffset(n[0], l.extend({
          using: function(e) {
              n.css({
                  top: Math.round(e.top),
                  left: Math.round(e.left)
              })
          }
      }, e), 0), n.addClass("in"), n[0].offsetWidth),
      s = n[0].offsetHeight,
      a = ("top" == t && s != o && (e.top = e.top + o - s), this.getViewportAdjustedDelta(t, e, r, s)),
      t = (a.left ? e.left += a.left : e.top += a.top, /top|bottom/.test(t)),
      i = t ? 2 * a.left - i + r : 2 * a.top - o + s,
      r = t ? "offsetWidth" : "offsetHeight";
  n.offset(e), this.replaceArrow(i, n[0][r], t)
}, u.prototype.replaceArrow = function(e, t, n) {
  this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
}, u.prototype.setContent = function() {
  var e = this.tip(),
      t = this.getTitle();
  e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
}, u.prototype.hide = function(e) {
  function t() {
      "in" != n.hoverState && i.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
  }
  var n = this,
      i = this.tip(),
      o = l.Event("hide.bs." + this.type);
  return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), l.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(u.TRANSITION_DURATION) : t(), this.hoverState = null, this)
}, u.prototype.fixTitle = function() {
  var e = this.$element;
  !e.attr("title") && "string" == typeof e.attr("data-original-title") || e.attr("data-original-title", e.attr("title") || "").attr("title", "")
}, u.prototype.hasContent = function() {
  return this.getTitle()
}, u.prototype.getPosition = function(e) {
  var t = (e = e || this.$element)[0],
      n = "BODY" == t.tagName,
      t = t.getBoundingClientRect(),
      i = (null == t.width && (t = l.extend({}, t, {
          width: t.right - t.left,
          height: t.bottom - t.top
      })), n ? {
          top: 0,
          left: 0
      } : e.offset()),
      e = {
          scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      n = n ? {
          width: l(window).width(),
          height: l(window).height()
      } : null;
  return l.extend({}, t, e, n, i)
}, u.prototype.getCalculatedOffset = function(e, t, n, i) {
  return "bottom" == e ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - n / 2
  } : "top" == e ? {
      top: t.top - i,
      left: t.left + t.width / 2 - n / 2
  } : "left" == e ? {
      top: t.top + t.height / 2 - i / 2,
      left: t.left - n
  } : {
      top: t.top + t.height / 2 - i / 2,
      left: t.left + t.width
  }
}, u.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
  var o, r, s = {
      top: 0,
      left: 0
  };
  return this.$viewport && (o = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport), /right|left/.test(e) ? (e = t.top - o - r.scroll, i = t.top + o - r.scroll + i, e < r.top ? s.top = r.top - e : i > r.top + r.height && (s.top = r.top + r.height - i)) : (e = t.left - o, i = t.left + o + n, e < r.left ? s.left = r.left - e : i > r.width && (s.left = r.left + r.width - i))), s
}, u.prototype.getTitle = function() {
  var e = this.$element,
      t = this.options;
  return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
}, u.prototype.getUID = function(e) {
  for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
  return e
}, u.prototype.tip = function() {
  return this.$tip = this.$tip || l(this.options.template)
}, u.prototype.arrow = function() {
  return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, u.prototype.enable = function() {
  this.enabled = !0
}, u.prototype.disable = function() {
  this.enabled = !1
}, u.prototype.toggleEnabled = function() {
  this.enabled = !this.enabled
}, u.prototype.toggle = function(e) {
  var t = this;
  e && !(t = l(e.currentTarget).data("bs." + this.type)) && (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), l(e.currentTarget).data("bs." + this.type, t)), t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
}, u.prototype.destroy = function() {
  var e = this;
  clearTimeout(this.timeout), this.hide(function() {
      e.$element.off("." + e.type).removeData("bs." + e.type)
  })
};
var e = l.fn.tooltip;
l.fn.tooltip = function(o) {
  return this.each(function() {
      var e = l(this),
          t = e.data("bs.tooltip"),
          n = "object" == typeof o && o,
          i = n && n.selector;
      !t && "destroy" == o || (i ? (t || e.data("bs.tooltip", t = {}), t[i] || (t[i] = new u(this, n))) : t || e.data("bs.tooltip", t = new u(this, n)), "string" != typeof o) || t[o]()
  })
}, l.fn.tooltip.Constructor = u, l.fn.tooltip.noConflict = function() {
  return l.fn.tooltip = e, this
}
})(jQuery), (e => {
"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
})(function(e) {
function t(e) {
  e = (e = void 0 === e ? window.navigator.userAgent : e).toLowerCase();
  var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 <= e.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
      e = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [],
      n = {},
      t = {
          browser: t[5] || t[3] || t[1] || "",
          version: t[2] || t[4] || "0",
          versionNumber: t[4] || t[2] || "0",
          platform: e[0] || ""
      };
  return t.browser && (n[t.browser] = !0, n.version = t.version, n.versionNumber = parseInt(t.versionNumber, 10)), t.platform && (n[t.platform] = !0), (n.android || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"]) && (n.mobile = !0), (n.cros || n.mac || n.linux || n.win) && (n.desktop = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), (n.rv || n.iemobile) && (t.browser = "msie", n.msie = !0), n.edge && (delete n.edge, t.browser = "msedge", n.msedge = !0), n.safari && n.blackberry && (n[t.browser = "blackberry"] = !0), n.safari && n.playbook && (n[t.browser = "playbook"] = !0), n.bb && (n[t.browser = "blackberry"] = !0), n.opr && (t.browser = "opera", n.opera = !0), n.safari && n.android && (n[t.browser = "android"] = !0), n.safari && n.kindle && (t.browser = "kindle", n.kindle = !0), n.safari && n.silk && (t.browser = "silk", n.silk = !0), n.name = t.browser, n.platform = t.platform, n
}
return window.jQBrowser = t(window.navigator.userAgent), window.jQBrowser.uaMatch = t, e && (e.browser = window.jQBrowser), window.jQBrowser
}), (e => {
"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
})(function(p) {
function r(e, t) {
  var n = this;
  n.element = e, n.el = p(e), n.suggestions = [], n.badQueries = [], n.selectedIndex = -1, n.currentValue = n.element.value, n.timeoutId = null, n.cachedResponse = {}, n.onChangeTimeout = null, n.onChange = null, n.isLocal = !1, n.suggestionsContainer = null, n.noSuggestionsContainer = null, n.options = p.extend({}, r.defaults, t), n.classes = {
      selected: "autocomplete-selected",
      suggestion: "autocomplete-suggestion"
  }, n.hint = null, n.hintValue = "", n.selection = null, n.initialize(), n.setOptions(t)
}
var n = {
      escapeRegExChars: function(e) {
          return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
      },
      createNode: function(e) {
          var t = document.createElement("div");
          return t.className = e, t.style.position = "absolute", t.style.display = "none", t
      }
  },
  i = 27,
  o = 9,
  s = 13,
  a = 38,
  l = 39,
  u = 40,
  e = p.noop;
r.utils = n, (p.Autocomplete = r).defaults = {
  ajaxSettings: {},
  autoSelectFirst: !1,
  appendTo: "body",
  serviceUrl: null,
  lookup: null,
  onSelect: null,
  width: "auto",
  minChars: 1,
  maxHeight: 300,
  deferRequestBy: 0,
  params: {},
  formatResult: function(e, t) {
      return t ? (t = "(" + n.escapeRegExChars(t) + ")", e.value.replace(new RegExp(t, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")) : e.value
  },
  formatGroup: function(e, t) {
      return '<div class="autocomplete-group">' + t + "</div>"
  },
  delimiter: null,
  zIndex: 9999,
  type: "GET",
  noCache: !1,
  onSearchStart: e,
  onSearchComplete: e,
  onSearchError: e,
  preserveInput: !1,
  containerClass: "autocomplete-suggestions",
  tabDisabled: !1,
  dataType: "text",
  currentRequest: null,
  triggerSelectOnValidInput: !0,
  preventBadQueries: !0,
  lookupFilter: function(e, t, n) {
      return -1 !== e.value.toLowerCase().indexOf(n)
  },
  paramName: "query",
  transformResult: function(e) {
      return "string" == typeof e ? p.parseJSON(e) : e
  },
  showNoSuggestionNotice: !1,
  noSuggestionNotice: "No results",
  orientation: "bottom",
  forceFixPosition: !1
}, r.prototype = {
  initialize: function() {
      var e, t = this,
          n = "." + t.classes.suggestion,
          i = t.classes.selected,
          o = t.options;
      t.element.setAttribute("autocomplete", "off"), t.noSuggestionsContainer = p('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), t.suggestionsContainer = r.utils.createNode(o.containerClass), (e = p(t.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && e.css("width", o.width), e.on("mouseover.autocomplete", n, function() {
          t.activate(p(this).data("index"))
      }), e.on("mouseout.autocomplete", function() {
          t.selectedIndex = -1, e.children("." + i).removeClass(i)
      }), e.on("click.autocomplete", n, function() {
          t.select(p(this).data("index"))
      }), e.on("click.autocomplete", function() {
          clearTimeout(t.blurTimeoutId)
      }), t.fixPositionCapture = function() {
          t.visible && t.fixPosition()
      }, p(window).on("resize.autocomplete", t.fixPositionCapture), t.el.on("keydown.autocomplete", function(e) {
          t.onKeyPress(e)
      }), t.el.on("keyup.autocomplete", function(e) {
          t.onKeyUp(e)
      }), t.el.on("blur.autocomplete", function() {
          t.onBlur()
      }), t.el.on("focus.autocomplete", function() {
          t.onFocus()
      }), t.el.on("change.autocomplete", function(e) {
          t.onKeyUp(e)
      }), t.el.on("input.autocomplete", function(e) {
          t.onKeyUp(e)
      })
  },
  onFocus: function() {
      this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange()
  },
  onBlur: function() {
      var e = this;
      e.blurTimeoutId = setTimeout(function() {
          e.hide()
      }, 200)
  },
  abortAjax: function() {
      this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null)
  },
  setOptions: function(e) {
      var t = this,
          e = p.extend({}, t.options, e);
      t.isLocal = Array.isArray(e.lookup), t.isLocal && (e.lookup = t.verifySuggestionsFormat(e.lookup)), e.orientation = t.validateOrientation(e.orientation, "bottom"), p(t.suggestionsContainer).css({
          "max-height": e.maxHeight + "px",
          width: e.width + "px",
          "z-index": e.zIndex
      }), this.options = e
  },
  clearCache: function() {
      this.cachedResponse = {}, this.badQueries = []
  },
  clear: function() {
      this.clearCache(), this.currentValue = "", this.suggestions = []
  },
  disable: function() {
      this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax()
  },
  enable: function() {
      this.disabled = !1
  },
  fixPosition: function() {
      var e, t, n, i, o, r, s, a, l = this,
          u = p(l.suggestionsContainer),
          c = u.parent().get(0);
      c !== document.body && !l.options.forceFixPosition || (r = l.options.orientation, e = u.outerHeight(), t = l.el.outerHeight(), n = {
          top: (s = l.el.offset()).top,
          left: s.left
      }, "auto" === r && (a = p(window).height(), i = -(o = p(window).scrollTop()) + s.top - e, o = o + a - (s.top + t + e), r = Math.max(i, o) === i ? "top" : "bottom"), n.top += "top" === r ? -e : t, c !== document.body && (a = u.css("opacity"), l.visible || u.css("opacity", 0).show(), s = u.offsetParent().offset(), n.top -= s.top, n.top += c.scrollTop, n.left -= s.left, l.visible || u.css("opacity", a).hide()), "auto" === l.options.width && (n.width = l.el.outerWidth() + "px"), u.css(n))
  },
  isCursorAtEnd: function() {
      var e = this.el.val().length,
          t = this.element.selectionStart;
      return "number" == typeof t ? t === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length)
  },
  onKeyPress: function(e) {
      var t = this;
      if (t.disabled || t.visible || e.which !== u || !t.currentValue) {
          if (!t.disabled && t.visible) {
              switch (e.which) {
                  case i:
                      t.el.val(t.currentValue), t.hide();
                      break;
                  case l:
                      if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                          t.selectHint();
                          break
                      }
                      return;
                  case o:
                      if (t.hint && t.options.onHint) return void t.selectHint();
                      if (-1 === t.selectedIndex) return void t.hide();
                      if (t.select(t.selectedIndex), !1 === t.options.tabDisabled) return;
                      break;
                  case s:
                      if (-1 === t.selectedIndex) return void t.hide();
                      t.select(t.selectedIndex);
                      break;
                  case a:
                      t.moveUp();
                      break;
                  case u:
                      t.moveDown();
                      break;
                  default:
                      return
              }
              e.stopImmediatePropagation(), e.preventDefault()
          }
      } else t.suggest()
  },
  onKeyUp: function(e) {
      var t = this;
      if (!t.disabled) {
          switch (e.which) {
              case a:
              case u:
                  return
          }
          clearTimeout(t.onChangeTimeout), t.currentValue !== t.el.val() && (t.findBestHint(), 0 < t.options.deferRequestBy ? t.onChangeTimeout = setTimeout(function() {
              t.onValueChange()
          }, t.options.deferRequestBy) : t.onValueChange())
      }
  },
  onValueChange: function() {
      var e, t, n, i;
      if (!this.ignoreValueChange) return t = (e = this).options, n = e.el.val(), i = e.getQuery(n), e.selection && e.currentValue !== i && (e.selection = null, (t.onInvalidateSelection || p.noop).call(e.element)), clearTimeout(e.onChangeTimeout), e.currentValue = n, e.selectedIndex = -1, t.triggerSelectOnValidInput && e.isExactMatch(i) ? void e.select(0) : void(i.length < t.minChars ? e.hide() : e.getSuggestions(i));
      this.ignoreValueChange = !1
  },
  isExactMatch: function(e) {
      var t = this.suggestions;
      return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase()
  },
  getQuery: function(e) {
      var t = this.options.delimiter;
      return t ? (t = e.split(t), p.trim(t[t.length - 1])) : e
  },
  getSuggestionsLocal: function(t) {
      var e = this.options,
          n = t.toLowerCase(),
          i = e.lookupFilter,
          o = parseInt(e.lookupLimit, 10),
          e = {
              suggestions: p.grep(e.lookup, function(e) {
                  return i(e, t, n)
              })
          };
      return o && e.suggestions.length > o && (e.suggestions = e.suggestions.slice(0, o)), e
  },
  getSuggestions: function(i) {
      var e, t, n, o = this,
          r = o.options,
          s = r.serviceUrl;
      r.params[r.paramName] = i, !1 !== r.onSearchStart.call(o.element, r.params) && (e = r.ignoreParams ? null : r.params, p.isFunction(r.lookup) ? r.lookup(i, function(e) {
          o.suggestions = e.suggestions, o.suggest(), r.onSearchComplete.call(o.element, i, e.suggestions)
      }) : (n = o.isLocal ? o.getSuggestionsLocal(i) : (p.isFunction(s) && (s = s.call(o.element, i)), t = s + "?" + p.param(e || {}), o.cachedResponse[t])) && Array.isArray(n.suggestions) ? (o.suggestions = n.suggestions, o.suggest(), r.onSearchComplete.call(o.element, i, n.suggestions)) : o.isBadQuery(i) ? r.onSearchComplete.call(o.element, i, []) : (o.abortAjax(), n = {
          url: s,
          data: e,
          type: r.type,
          dataType: r.dataType
      }, p.extend(n, r.ajaxSettings), o.currentRequest = p.ajax(n).done(function(e) {
          o.currentRequest = null, e = r.transformResult(e, i), o.processResponse(e, i, t), r.onSearchComplete.call(o.element, i, e.suggestions)
      }).fail(function(e, t, n) {
          r.onSearchError.call(o.element, i, e, t, n)
      })))
  },
  isBadQuery: function(e) {
      if (this.options.preventBadQueries)
          for (var t = this.badQueries, n = t.length; n--;)
              if (0 === e.indexOf(t[n])) return !0;
      return !1
  },
  hide: function() {
      var e = this,
          t = p(e.suggestionsContainer);
      p.isFunction(e.options.onHide) && e.visible && e.options.onHide.call(e.element, t), e.visible = !1, e.selectedIndex = -1, clearTimeout(e.onChangeTimeout), p(e.suggestionsContainer).hide(), e.signalHint(null)
  },
  suggest: function() {
      var o, e, r, s, a, l, u, t, n, i, c, d;
      if (this.suggestions.length) return r = (e = this).options, s = r.groupBy, a = r.formatResult, l = e.getQuery(e.currentValue), u = e.classes.suggestion, t = e.classes.selected, n = p(e.suggestionsContainer), i = p(e.noSuggestionsContainer), c = r.beforeRender, d = "", r.triggerSelectOnValidInput && e.isExactMatch(l) ? void e.select(0) : (p.each(e.suggestions, function(e, t) {
          var n, i;
          s && (d += (i = (n = t).data[s], o === i ? "" : (o = i, r.formatGroup(n, o)))), d += '<div class="' + u + '" data-index="' + e + '">' + a(t, l, e) + "</div>"
      }), this.adjustContainerWidth(), i.detach(), n.html(d), p.isFunction(c) && c.call(e.element, n, e.suggestions), e.fixPosition(), n.show(), r.autoSelectFirst && (e.selectedIndex = 0, n.scrollTop(0), n.children("." + u).first().addClass(t)), e.visible = !0, void e.findBestHint());
      this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
  },
  noSuggestions: function() {
      var e = this,
          t = e.options.beforeRender,
          n = p(e.suggestionsContainer),
          i = p(e.noSuggestionsContainer);
      this.adjustContainerWidth(), i.detach(), n.empty(), n.append(i), p.isFunction(t) && t.call(e.element, n, e.suggestions), e.fixPosition(), n.show(), e.visible = !0
  },
  adjustContainerWidth: function() {
      var e, t = this.options,
          n = p(this.suggestionsContainer);
      "auto" === t.width ? (e = this.el.outerWidth(), n.css("width", 0 < e ? e : 300)) : "flex" === t.width && n.css("width", "")
  },
  findBestHint: function() {
      var i = this.el.val().toLowerCase(),
          o = null;
      i && (p.each(this.suggestions, function(e, t) {
          var n = 0 === t.value.toLowerCase().indexOf(i);
          return n && (o = t), !n
      }), this.signalHint(o))
  },
  signalHint: function(e) {
      var t = "",
          n = this;
      e && (t = n.currentValue + e.value.substr(n.currentValue.length)), n.hintValue !== t && (n.hintValue = t, n.hint = e, (this.options.onHint || p.noop)(t))
  },
  verifySuggestionsFormat: function(e) {
      return e.length && "string" == typeof e[0] ? p.map(e, function(e) {
          return {
              value: e,
              data: null
          }
      }) : e
  },
  validateOrientation: function(e, t) {
      return e = p.trim(e || "").toLowerCase(), e = -1 === p.inArray(e, ["auto", "bottom", "top"]) ? t : e
  },
  processResponse: function(e, t, n) {
      var i = this,
          o = i.options;
      e.suggestions = i.verifySuggestionsFormat(e.suggestions), o.noCache || (i.cachedResponse[n] = e, o.preventBadQueries && !e.suggestions.length && i.badQueries.push(t)), t === i.getQuery(i.currentValue) && (i.suggestions = e.suggestions, i.suggest())
  },
  activate: function(e) {
      var t = this,
          n = t.classes.selected,
          i = p(t.suggestionsContainer),
          o = i.find("." + t.classes.suggestion);
      return i.find("." + n).removeClass(n), t.selectedIndex = e, -1 !== t.selectedIndex && o.length > t.selectedIndex ? (i = o.get(t.selectedIndex), p(i).addClass(n), i) : null
  },
  selectHint: function() {
      var e = p.inArray(this.hint, this.suggestions);
      this.select(e)
  },
  select: function(e) {
      this.hide(), this.onSelect(e)
  },
  moveUp: function() {
      var e = this;
      if (-1 !== e.selectedIndex) return 0 === e.selectedIndex ? (p(e.suggestionsContainer).children("." + e.classes.suggestion).first().removeClass(e.classes.selected), e.selectedIndex = -1, e.ignoreValueChange = !1, e.el.val(e.currentValue), void e.findBestHint()) : void e.adjustScroll(e.selectedIndex - 1)
  },
  moveDown: function() {
      this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
  },
  adjustScroll: function(e) {
      var t, n, i, o = this,
          r = o.activate(e);
      r && (t = p(r).outerHeight(), r = r.offsetTop, i = (n = p(o.suggestionsContainer).scrollTop()) + o.options.maxHeight - t, r < n ? p(o.suggestionsContainer).scrollTop(r) : i < r && p(o.suggestionsContainer).scrollTop(r - o.options.maxHeight + t), o.options.preserveInput || (o.ignoreValueChange = !0, o.el.val(o.getValue(o.suggestions[e].value))), o.signalHint(null))
  },
  onSelect: function(e) {
      var t = this,
          n = t.options.onSelect,
          e = t.suggestions[e];
      t.currentValue = t.getValue(e.value), t.currentValue === t.el.val() || t.options.preserveInput || t.el.val(t.currentValue), t.signalHint(null), t.suggestions = [], t.selection = e, p.isFunction(n) && n.call(t.element, e)
  },
  getValue: function(e) {
      var t, n = this.options.delimiter;
      return !n || 1 === (n = (t = this.currentValue).split(n)).length ? e : t.substr(0, t.length - n[n.length - 1].length) + e
  },
  dispose: function() {
      this.el.off(".autocomplete").removeData("autocomplete"), p(window).off("resize.autocomplete", this.fixPositionCapture), p(this.suggestionsContainer).remove()
  }
}, p.fn.devbridgeAutocomplete = function(n, i) {
  var o = "autocomplete";
  return arguments.length ? this.each(function() {
      var e = p(this),
          t = e.data(o);
      "string" == typeof n ? t && "function" == typeof t[n] && t[n](i) : (t && t.dispose && t.dispose(), t = new r(this, n), e.data(o, t))
  }) : this.first().data(o)
}, p.fn.autocomplete || (p.fn.autocomplete = p.fn.devbridgeAutocomplete)
}), (e => {
"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(C) {
function T(e, t, n) {
  return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
}

function k(e, t) {
  return parseInt(C.css(e, t), 10) || 0
}
var i, N, S, o, r, s, a, l, n;
C.ui = C.ui || {}, C.ui.version = "1.12.1", N = Math.max, S = Math.abs, o = /left|center|right/, r = /top|center|bottom/, s = /[\+\-]\d+(\.[\d]+)?%?/, a = /^\w+/, l = /%$/, n = C.fn.position, C.position = {
  scrollbarWidth: function() {
      var e, t, n;
      return void 0 !== i ? i : (n = (t = C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>")).children()[0], C("body").append(t), e = n.offsetWidth, t.css("overflow", "scroll"), e === (n = n.offsetWidth) && (n = t[0].clientWidth), t.remove(), i = e - n)
  },
  getScrollInfo: function(e) {
      var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
          n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
          t = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
      return {
          width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? C.position.scrollbarWidth() : 0,
          height: t ? C.position.scrollbarWidth() : 0
      }
  },
  getWithinInfo: function(e) {
      var t = C(e || window),
          n = C.isWindow(t[0]),
          i = !!t[0] && 9 === t[0].nodeType;
      return {
          element: t,
          isWindow: n,
          isDocument: i,
          offset: !n && !i ? C(e).offset() : {
              left: 0,
              top: 0
          },
          scrollLeft: t.scrollLeft(),
          scrollTop: t.scrollTop(),
          width: t.outerWidth(),
          height: t.outerHeight()
      }
  }
}, C.fn.position = function(d) {
  if (!d || !d.of) return n.apply(this, arguments);
  d = C.extend({}, d);
  var p, f, h, g, m, e, v = C(d.of),
      y = C.position.getWithinInfo(d.within),
      b = C.position.getScrollInfo(y),
      w = (d.collision || "flip").split(" "),
      x = {},
      t = 9 === (t = (e = v)[0]).nodeType ? {
          width: e.width(),
          height: e.height(),
          offset: {
              top: 0,
              left: 0
          }
      } : C.isWindow(t) ? {
          width: e.width(),
          height: e.height(),
          offset: {
              top: e.scrollTop(),
              left: e.scrollLeft()
          }
      } : t.preventDefault ? {
          width: 0,
          height: 0,
          offset: {
              top: t.pageY,
              left: t.pageX
          }
      } : {
          width: e.outerWidth(),
          height: e.outerHeight(),
          offset: e.offset()
      };
  return v[0].preventDefault && (d.at = "left top"), f = t.width, h = t.height, m = C.extend({}, g = t.offset), C.each(["my", "at"], function() {
      var e, t, n = (d[this] || "").split(" ");
      (n = 1 === n.length ? o.test(n[0]) ? n.concat(["center"]) : r.test(n[0]) ? ["center"].concat(n) : ["center", "center"] : n)[0] = o.test(n[0]) ? n[0] : "center", n[1] = r.test(n[1]) ? n[1] : "center", e = s.exec(n[0]), t = s.exec(n[1]), x[this] = [e ? e[0] : 0, t ? t[0] : 0], d[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]
  }), 1 === w.length && (w[1] = w[0]), "right" === d.at[0] ? m.left += f : "center" === d.at[0] && (m.left += f / 2), "bottom" === d.at[1] ? m.top += h : "center" === d.at[1] && (m.top += h / 2), p = T(x.at, f, h), m.left += p[0], m.top += p[1], this.each(function() {
      var n, e, s = C(this),
          a = s.outerWidth(),
          l = s.outerHeight(),
          t = k(this, "marginLeft"),
          i = k(this, "marginTop"),
          o = a + t + k(this, "marginRight") + b.width,
          r = l + i + k(this, "marginBottom") + b.height,
          u = C.extend({}, m),
          c = T(x.my, s.outerWidth(), s.outerHeight());
      "right" === d.my[0] ? u.left -= a : "center" === d.my[0] && (u.left -= a / 2), "bottom" === d.my[1] ? u.top -= l : "center" === d.my[1] && (u.top -= l / 2), u.left += c[0], u.top += c[1], n = {
          marginLeft: t,
          marginTop: i
      }, C.each(["left", "top"], function(e, t) {
          C.ui.position[w[e]] && C.ui.position[w[e]][t](u, {
              targetWidth: f,
              targetHeight: h,
              elemWidth: a,
              elemHeight: l,
              collisionPosition: n,
              collisionWidth: o,
              collisionHeight: r,
              offset: [p[0] + c[0], p[1] + c[1]],
              my: d.my,
              at: d.at,
              within: y,
              elem: s
          })
      }), d.using && (e = function(e) {
          var t = g.left - u.left,
              n = t + f - a,
              i = g.top - u.top,
              o = i + h - l,
              r = {
                  target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: f,
                      height: h
                  },
                  element: {
                      element: s,
                      left: u.left,
                      top: u.top,
                      width: a,
                      height: l
                  },
                  horizontal: n < 0 ? "left" : 0 < t ? "right" : "center",
                  vertical: o < 0 ? "top" : 0 < i ? "bottom" : "middle"
              };
          f < a && f > S(t + n) && (r.horizontal = "center"), h < l && h > S(i + o) && (r.vertical = "middle"), r.important = N(S(t), S(n)) > N(S(i), S(o)) ? "horizontal" : "vertical", d.using.call(this, e, r)
      }), s.offset(C.extend(u, {
          using: e
      }))
  })
}, C.ui.position = {
  fit: {
      left: function(e, t) {
          var n, i = t.within,
              o = i.isWindow ? i.scrollLeft : i.offset.left,
              i = i.width,
              r = e.left - t.collisionPosition.marginLeft,
              s = o - r,
              a = r + t.collisionWidth - i - o;
          i < t.collisionWidth ? 0 < s && a <= 0 ? (n = e.left + s + t.collisionWidth - i - o, e.left += s - n) : e.left = !(0 < a && s <= 0) && a < s ? o + i - t.collisionWidth : o : 0 < s ? e.left += s : 0 < a ? e.left -= a : e.left = N(e.left - r, e.left)
      },
      top: function(e, t) {
          var n, i = t.within,
              i = i.isWindow ? i.scrollTop : i.offset.top,
              o = t.within.height,
              r = e.top - t.collisionPosition.marginTop,
              s = i - r,
              a = r + t.collisionHeight - o - i;
          o < t.collisionHeight ? 0 < s && a <= 0 ? (n = e.top + s + t.collisionHeight - o - i, e.top += s - n) : e.top = !(0 < a && s <= 0) && a < s ? i + o - t.collisionHeight : i : 0 < s ? e.top += s : 0 < a ? e.top -= a : e.top = N(e.top - r, e.top)
      }
  },
  flip: {
      left: function(e, t) {
          var n = t.within,
              i = n.offset.left + n.scrollLeft,
              o = n.width,
              n = n.isWindow ? n.scrollLeft : n.offset.left,
              r = e.left - t.collisionPosition.marginLeft,
              s = r - n,
              r = r + t.collisionWidth - o - n,
              a = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
              l = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
              u = -2 * t.offset[0];
          s < 0 ? ((o = e.left + a + l + u + t.collisionWidth - o - i) < 0 || S(s) > o) && (e.left += a + l + u) : 0 < r && (0 < (i = e.left - t.collisionPosition.marginLeft + a + l + u - n) || r > S(i)) && (e.left += a + l + u)
      },
      top: function(e, t) {
          var n = t.within,
              i = n.offset.top + n.scrollTop,
              o = n.height,
              n = n.isWindow ? n.scrollTop : n.offset.top,
              r = e.top - t.collisionPosition.marginTop,
              s = r - n,
              r = r + t.collisionHeight - o - n,
              a = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
              l = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
              u = -2 * t.offset[1];
          s < 0 ? ((o = e.top + a + l + u + t.collisionHeight - o - i) < 0 || S(s) > o) && (e.top += a + l + u) : 0 < r && (0 < (i = e.top - t.collisionPosition.marginTop + a + l + u - n) || r > S(i)) && (e.top += a + l + u)
      }
  },
  flipfit: {
      left: function() {
          C.ui.position.flip.left.apply(this, arguments), C.ui.position.fit.left.apply(this, arguments)
      },
      top: function() {
          C.ui.position.flip.top.apply(this, arguments), C.ui.position.fit.top.apply(this, arguments)
      }
  }
}, C.ui.position
}), $(document).ready(function() {
if (ismobile) {
  var n = !1;
  $("body").on("touchmove", ".imgvideo", function(e) {
      var t;
      n || (n = !0, startPreview($(this).attr("id")), $(this).parent().next().css("display", "flex"), (t = $(this).parent().children(".preloadLine")).css({
          opacity: 1
      }), t.animate({
          width: "100%"
      }, 800), new Promise(e => setTimeout(e, 1e3)).then(() => {
          t.css({
              opacity: 0,
              width: 0
          })
      }))
  }), $(document).on("touchend", ".imgvideo", function() {
      n = !1, stopPreview($(this).attr("id")), $(this).parent().next().hide(), $(this).parent().children(".preloadLine").css({
          opacity: 0,
          width: 0
      })
  })
} else {
  $(document).on({
      mouseenter: function() {
          var e = $(this).parent().children(".preloadLine");
          e.css({
              opacity: 1
          }), e.animate({
              width: "100%"
          }, 800), startPreview(this.id), new Promise(e => setTimeout(e, 1e3)).then(() => {
              e.css({
                  opacity: 0,
                  width: 0
              })
          })
      },
      mouseleave: function() {
          $(this).parent().children(".preloadLine").css({
              opacity: 0,
              width: 0
          }), stopPreview(this.id)
      }
  }, ".imgvideo, .imglist, .livevideo");
  let t = null;
  $(".livecam").hover(function() {
      var e = $(this).attr("data-hls_id");
      t && t !== e && endLivePreviewJasmin(t), t !== e && (t = e), initLivePreviewJasmin(this)
  })
}
});
var Popup = {
  cache: {},
  config: {
      ajax: !1,
      hasClose: !0,
      closeBtnSelector: !1,
      className: "",
      fadeSpeed: 250,
      overlay: !0,
      innerlay: "",
      cssPosition: "fixed",
      onEscClose: !0,
      clickClose: !0,
      business: !1,
      size: !1,
      overridePosition: !1
  },
  instanceConfig: {},
  overlay: null,
  wrapper: null,
  loading: !1,
  extraclass: "",
  init: function() {
      this.overlay && this.close(!1, !0), this.overlay = $("<div></div>").addClass("overlay popup").hide().appendTo(document.body), this.wrapper = $("<div>").addClass("modal").append($('<div class="modal-inner"></div>').append('<div class="modal-content"></div>')).appendTo(document.body).hide(), "" !== this.extraclass && this.wrapper.addClass(this.extraclass);
      var t = this;
      this.instanceConfig.clickClose && this.overlay.on("click", function(e) {
          $(e.target).hasClass("overlay") && t.overlay.fadeOut(250, function() {
              t.close()
          })
      }), this.instanceConfig.customClass && this.wrapper.addClass(this.instanceConfig.customClass), $("<a>", {
          href: "javascript: void(0);",
          class: "modal-close"
      }).click(function() {
          Popup.close()
      }).appendTo(this.wrapper), this.loaded = !0
  },
  resize: function() {
      this.wrapper.animate({
          height: this.wrapper.find(".modal-content").outerHeight(),
          width: this.wrapper.find(".modal-content").outerWidth()
      }, function() {
          Popup.setPosition()
      })
  },
  setTitle: function(e) {
      this.wrapper.find(".modal-title").text(e)
  },
  open: function(t, e, n) {
      n = this.instanceConfig = $.extend({}, this.config, n), this.extraclass = e, this.init(), this.overlay.show(), this.wrapper.find(".modal-inner .modal-title").remove(), n.title && (e = n.title, n.dont_escape_title || (e = htmlentities(e)), this.wrapper.find(".modal-inner").prepend($('<div class="modal-title"></div>').append($('<div class="modal-title-text cwrap2"></div>').html(e).attr("title", strip_tags(e))))), n.business ? this.wrapper.addClass("businessmodal") : this.wrapper.removeClass("businessmodal"), n.className && this.wrapper.addClass(n.className), n.onEscClose && $(window).off("keyup.popup").on("keyup.popup", function(e) {
          console.log("closing popup"), 27 === e.keyCode && Popup.close(), 13 === e.keyCode && (e.preventDefault(), $("#register-modal").hasClass("hide") ? trylogin("") : tryregister())
      }), $(".modal .modal-close").show(), n.hasClose ? $(".modal-close").show() : $(".modal-close").hide(), n.ajax ? (this.contents(""), this.loading(), this.cache[t] ? this.show(Popup.cache[t]) : $.get(t, {}, function(e) {
          Popup.cache[t] = e, Popup.show(e)
      })) : "string" != typeof t || "#" != t.substring(0, 1) && "." != t.substring(0, 1) ? this.show(t, n.fadeSpeed) : this.show($(t).clone().css("display", ""), n.fadeSpeed)
  },
  show: function(e, t) {
      this.contents(e), ("function" == typeof this.instanceConfig.setPosition ? this.instanceConfig : this).setPosition(), this.instanceConfig.closeBtnSelector && $(this.instanceConfig.closeBtnSelector).click(function() {
          Popup.close()
      }), this.wrapper.fadeIn(250), $("html").addClass("modal-open")
  },
  setPosition: function() {
      this.wrapper.outerWidth(), this.wrapper.outerHeight();
      this.instanceConfig.overridePosition && this.wrapper.css(this.instanceConfig.overridePosition)
  },
  animateTo: function(e, t) {
      this.wrapper.css("position", "fixed"), this.wrapper.animate({
          width: e,
          height: t
      }, 500, function() {})
  },
  prepAnimate: function() {
      null != this.wrapper && this.wrapper.css({
          width: this.wrapper.width(),
          height: this.wrapper.height()
      })
  },
  hideClose: function() {
      null != this.wrapper && this.wrapper.find(".modal-close").hide()
  },
  showClose: function() {
      this.wrapper.find(".modal-close").show()
  },
  hideModalCont: function() {
      null != this.wrapper && this.wrapper.find(".modal-inner").hide()
  },
  showModalCont: function() {
      null != this.wrapper && this.wrapper.find(".modal-inner").show()
  },
  startLoading: function(e) {
      if (null == this.wrapper) return !1;
      this.stopLoading(!0), e = $.extend({}, {
          processExplain: "Loading ...",
          processStopText: "Stop",
          stopCallback: !1,
          fast: !1
      }, e), this.prepAnimate(), this.hideModalCont(), this.hideClose(), this.wrapper.append('<div class="processing"><div class="information"></div></div>'), e.stopCallback ? this.wrapper.find(".information").text(e.processExplain).after($('<div class="stopprocess"></div>').append($('<div class="button smallbut stopbut"></div>').append('<img src="/ZCDNURL/img/stop-process.png" width="9" height="9"> ' + e.processStopText).on("click", e.stopCallback))) : e.processExplain && this.wrapper.find(".information").text(e.processExplain);
      var t = this.wrapper.find(".processing"),
          n = [t.outerWidth(), t.outerHeight()];
      this.loading = !0, e.now ? (this.wrapper.css({
          width: n[0],
          height: [n[1]]
      }), t.show()) : this.wrapper.animate({
          width: n[0],
          height: [n[1]]
      }, 450, function() {
          t.show()
      })
  },
  updateExplain: function(e) {
      this.wrapper.find(".information").text(e)
  },
  stopLoading: function(e) {
      var t, n;
      return null != this.wrapper && (this.wrapper.stop(!0, !0), this.wrapper.find(".processing").remove(), e ? (this.wrapper.css({
          width: "",
          height: ""
      }), this.wrapper.find(".modal-inner").show(), this.showClose()) : (e = [(t = this.wrapper.find(".modal-inner")).outerWidth(), t.outerHeight()], n = this, console.log("Starting Animation"), e[0] && e[1] ? this.wrapper.animate({
          width: e[0],
          height: [e[1]]
      }, 450, function() {
          t.show(), n.showClose(), n.loading = !1, n.onFinishLoad && (n.onFinishLoad(), n.onFinishLoad = null), n.wrapper.css("height", "")
      }) : (this.wrapper.css({
          width: "",
          height: ""
      }), this.showClose(), this.loading = !1, this.onFinishLoad && (this.onFinishLoad(), this.onFinishLoad = null)))), this
  },
  onLoad: function(e) {
      this.onFinishLoad = e
  },
  contents: function(e) {
      e || this.wrapper.find(".modal-content").empty(), this.wrapper.find(".modal-content").html(e)
  },
  close: function(e, t) {
      var n, i;
      null != this.wrapper && (this.onFinishLoad = null, this.instanceConfig && this.instanceConfig.closeCallback && this.instanceConfig.closeCallback(), this.stopLoading(!0), this.wrapper.css({
          width: "",
          height: ""
      }), this.wrapper.find(".modal-content").empty(), this.wrapper.find(".modal-title").remove(), this.wrapper.hide(), this.wrapper.remove(), n = this, i = function() {
          n.overlay && (n.overlay.stop().remove(), n.overlay = null), $(n).trigger("mclose"), e && e()
      }, !t && this.overlay ? this.overlay.fadeOut(250, function() {
          i()
      }) : i(), this.instanceConfig = {}, $(document).off("keyup.popup"), $("html").removeClass("modal-open"))
  },
  setOpt: function(e, t) {
      this.instanceConfig[e] = t
  }
},
Overlay = {
  obj: null,
  loaded: null,
  init: function() {
      this.loaded || (this.obj = $("<div/>").addClass("overlay").appendTo(document.body).hide(), this.loaded = !0)
  },
  show: function(e, t, n) {
      null == n && (n = !0), e = e || 250, this.init(), this.obj.fadeIn(e).off("click.overlay").on("click.overlay", function() {
          t && t(), n && Overlay.hide()
      })
  },
  hide: function() {
      this.obj && (this.obj.stop(), this.obj.hide(), this.obj.off("click.overlay"))
  },
  isShowed: function() {
      return "block" == this.obj.css("display")
  }
};

function renderTemplate(e, t, n) {
n = $.extend({}, {
  escape: !0
}, n);

function i(e) {
  return n.escape ? htmlentities(e) : e
}
t = t || {};
var raw = $(e).html();
if (raw == null || raw === undefined) {
  raw = "";
}
var o, r = String(raw).trim();
for (o in t) {
  if (!Object.prototype.hasOwnProperty.call(t, o)) continue;
  for (; -1 != r.indexOf("{{foreach:");) {
      var s = r.match(/{{foreach::([^}]+)}}\s*([\s\S]+?)\s*{{\/foreach}}/i);
      if (!s || !t[s[1]]) break;
      for (var a = s[1], l = s[2], u = "", c = 0, d = t[a].length; c < d; c++) {
          var p, f = l;
          for (p in t[a][c]) t[a][c].hasOwnProperty(p) && (f = f.replace("{{item::" + p + "}}", i(t[a][c][p])));
          u += f
      }
      r = r.replace(s[0], u)
  }
  for (var h = 0; h < 20; h++) r = r.replace("{{" + o + "}}", i(t[o]))
}
return $(r)
}