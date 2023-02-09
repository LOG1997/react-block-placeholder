(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".placeholder-block{cursor:pointer;box-shadow:2px 2px 2px #0003}.line{position:absolute}.showText{padding:5;white-space:nowrap}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import C, { useRef as lr } from "react";
import { debounce as Le } from "lodash-es";
var J = {}, cr = {
  get exports() {
    return J;
  },
  set exports(E) {
    J = E;
  }
}, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function dr() {
  if (Ae)
    return q;
  Ae = 1;
  var E = C, k = Symbol.for("react.element"), M = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, _ = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(w, l, x) {
    var v, b = {}, h = null, F = null;
    x !== void 0 && (h = "" + x), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (v in l)
      R.call(l, v) && !I.hasOwnProperty(v) && (b[v] = l[v]);
    if (w && w.defaultProps)
      for (v in l = w.defaultProps, l)
        b[v] === void 0 && (b[v] = l[v]);
    return { $$typeof: k, type: w, key: h, ref: F, props: b, _owner: _.current };
  }
  return q.Fragment = M, q.jsx = T, q.jsxs = T, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function vr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var E = C, k = Symbol.for("react.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, ie = "@@iterator";
    function se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[ie];
      return typeof r == "function" ? r : null;
    }
    var P = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        L("error", e, t);
      }
    }
    function L(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var V = !1, ue = !1, ye = !1, Ee = !1, fe = !1, K;
    K = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === I || fe || e === _ || e === x || e === v || Ee || e === F || V || ue || ye || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === b || e.$$typeof === T || e.$$typeof === w || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case M:
          return "Portal";
        case I:
          return "Profiler";
        case _:
          return "StrictMode";
        case x:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return X(r) + ".Consumer";
          case T:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return le(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case h: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, j = 0, Z, $, U, B, S, Q, ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function We() {
      {
        if (j === 0) {
          Z = console.log, $ = console.info, U = console.warn, B = console.error, S = console.group, Q = console.groupCollapsed, ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        j++;
      }
    }
    function Ye() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: Z
            }),
            info: g({}, e, {
              value: $
            }),
            warn: g({}, e, {
              value: U
            }),
            error: g({}, e, {
              value: B
            }),
            group: g({}, e, {
              value: S
            }),
            groupCollapsed: g({}, e, {
              value: Q
            }),
            groupEnd: g({}, e, {
              value: ee
            })
          });
        }
        j < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = P.ReactCurrentDispatcher, de;
    function re(e, r, t) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            de = n && n[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ve = !1, te;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Me();
    }
    function _e(e, r) {
      if (!e || ve)
        return "";
      {
        var t = te.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ve = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ce.current, ce.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, f = p.length - 1; u >= 1 && f >= 0 && a[u] !== p[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (a[u] !== p[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || a[u] !== p[f]) {
                    var m = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, m), m;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ce.current = s, Ye(), Error.prepareStackTrace = i;
      }
      var W = e ? e.displayName || e.name : "", Fe = W ? re(W) : "";
      return typeof e == "function" && te.set(e, Fe), Fe;
    }
    function Ve(e, r, t) {
      return _e(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ne(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, Ue(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case x:
          return re("Suspense");
        case v:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ve(e.render);
          case b:
            return ne(e.type, r, t);
          case h: {
            var n = e, i = n._payload, s = n._init;
            try {
              return ne(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, Te = {}, we = P.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(ae);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (oe(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), oe(null)), a instanceof Error && !(a.message in Te) && (Te[a.message] = !0, oe(i), c("Failed %s type: %s", t, a.message), oe(null));
          }
      }
    }
    var He = Array.isArray;
    function pe(e) {
      return He(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Ge(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Se(e);
    }
    var H = P.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe, ge;
    ge = {};
    function ze(e) {
      if (ae.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (ae.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = y(H.current.type);
        ge[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(H.current.type), e.ref), ge[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          xe || (xe = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (Oe(t), a = "" + t), Ke(r) && (Oe(r.key), a = "" + r.key), ze(r) && (p = r.ref, Xe(r, i));
        for (s in r)
          ae.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), p && Qe(o, f);
        }
        return er(e, a, p, i, n, H.current, o);
      }
    }
    var he = P.ReactCurrentOwner, Pe = P.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function ke() {
      {
        if (he.current) {
          var e = y(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var je = {};
    function nr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function $e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== he.current && (n = " It was passed a child from " + y(e._owner.type) + "."), N(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (pe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            be(n) && $e(n, r);
          }
        else if (be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              be(o.value) && $e(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !me) {
          me = !0;
          var i = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Ie(e, r, t, n, i, s) {
      {
        var o = A(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(i);
          p ? a += p : a += ke();
          var u;
          e === null ? u = "null" : pe(e) ? u = "array" : e !== void 0 && e.$$typeof === k ? (u = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var f = rr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (pe(m)) {
                for (var W = 0; W < m.length; W++)
                  De(m[W], e);
                Object.freeze && Object.freeze(m);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(m, e);
        }
        return e === R ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var ur = sr, fr = ir;
    G.Fragment = R, G.jsx = ur, G.jsxs = fr;
  }()), G;
}
(function(E) {
  process.env.NODE_ENV === "production" ? E.exports = dr() : E.exports = vr();
})(cr);
const pr = J.Fragment, D = J.jsx, Y = J.jsxs;
function mr() {
  return /* @__PURE__ */ D("div", { children: /* @__PURE__ */ D("button", { children: "ne wbutton" }) });
}
const d = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function br(E) {
  let k = 0;
  const [M, R] = C.useState(!1), [_, I] = C.useState(0), [T, w] = C.useState(0), [l, x] = C.useState(0), [v, b] = C.useState(0), [h, F] = C.useState(0), [z, ie] = C.useState(0), se = lr(null);
  let P = `linear-gradient(120deg, ${d()} 0%,  ${d()} 100%)`;
  const { w: c = 200, h: L = 70, bgColor: V = P, color: ue = "#fff", isGuideLines: ye = !0, isCSSStyles: Ee = !0, text: fe = "placeholder", round: K = !0 } = E;
  let A = {
    width: c,
    height: L,
    backgroundColor: V,
    color: ue,
    borderRadius: k,
    lineHeight: L + "px",
    border: "none"
  };
  K && (A.borderRadius = c > L ? parseInt(L) / 9 : parseInt(c) / 9), V.substring(0, 6) === "linear" && (A.backgroundImage = V, delete A.backgroundColor);
  const le = Le((g) => {
    y(g), R(!0);
  }, 300), X = Le((g) => {
    R(!1);
  }), y = (g) => {
    if (g.target instanceof HTMLDivElement) {
      const { offsetWidth: j, offsetHeight: Z, parentNode: $ } = g.target, { offsetTop: U, offsetLeft: B } = $, S = $ == null ? void 0 : $.parentNode, Q = U - (S == null ? void 0 : S.offsetTop);
      F(Q);
      const ee = B - (S == null ? void 0 : S.offsetLeft);
      ie(ee), I(U), w(B), x(j), b(Z);
    }
  };
  return /* @__PURE__ */ Y("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ D("div", { ref: se, className: "placeholder-block", onMouseOver: le, onMouseLeave: X, style: A, children: fe }),
    M ? /* @__PURE__ */ Y(pr, { children: [
      /* @__PURE__ */ D("div", { className: "line topLine", style: { width: 1, height: _, backgroundImage: `linear-gradient(to top,${d()} 0%, ${d()} 100%)`, top: -_, left: l / 2 }, children: /* @__PURE__ */ Y("span", { className: "showText", style: { backgroundImage: `linear-gradient(120deg,${d()} 0%, ${d()} 100%)` }, children: [
        "offsetTop to root：",
        _
      ] }) }),
      /* @__PURE__ */ D("div", { className: "line rightLine", style: { width: T, height: 1, backgroundImage: `linear-gradient(to right,${d()} 0%, ${d()} 100%)`, top: v / 2, left: -T }, children: /* @__PURE__ */ Y("span", { className: "showText", style: { backgroundImage: `linear-gradient(120deg,${d()} 0%, ${d()} 100%)` }, children: [
        "offsetTop to root：",
        _
      ] }) }),
      /* @__PURE__ */ D("div", { className: "line parentTopLine", style: { width: 1, height: h, backgroundImage: `linear-gradient(to top,${d()} 0%, ${d()} 100%)`, top: -h, left: l / 3 }, children: /* @__PURE__ */ Y("span", { className: "showText", style: { backgroundImage: `linear-gradient(120deg,${d()} 0%, ${d()} 100%)` }, children: [
        "offsetTop to parent:",
        h
      ] }) }),
      /* @__PURE__ */ D("div", { className: "line parentLeftLine", style: { width: 1, height: h, backgroundImage: `linear-gradient(to right,${d()} 0%, ${d()} 100%)`, top: l / 3, left: -T }, children: /* @__PURE__ */ Y("span", { className: "showText", style: { backgroundImage: `linear-gradient(120deg,${d()} 0%, ${d()} 100%)` }, children: [
        "offsetLeft to parent:",
        z
      ] }) })
    ] }) : null
  ] });
}
export {
  mr as Button,
  br as PlaceholderBlock
};
