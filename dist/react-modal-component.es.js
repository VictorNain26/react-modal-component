import ae, { useEffect as Xr } from "react";
import Oe from "react-dom";
var Ae = {}, Kr = {
  get exports() {
    return Ae;
  },
  set exports(n) {
    Ae = n;
  }
}, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Hr() {
  if (ur)
    return _e;
  ur = 1;
  var n = ae, f = Symbol.for("react.element"), y = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(o, c, p) {
    var h, m = {}, P = null, M = null;
    p !== void 0 && (P = "" + p), c.key !== void 0 && (P = "" + c.key), c.ref !== void 0 && (M = c.ref);
    for (h in c)
      r.call(c, h) && !t.hasOwnProperty(h) && (m[h] = c[h]);
    if (o && o.defaultProps)
      for (h in c = o.defaultProps, c)
        m[h] === void 0 && (m[h] = c[h]);
    return { $$typeof: f, type: o, key: P, ref: M, props: m, _owner: a.current };
  }
  return _e.Fragment = y, _e.jsx = u, _e.jsxs = u, _e;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Zr() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, f = Symbol.for("react.element"), y = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), B = Symbol.iterator, L = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = B && e[B] || e[L];
      return typeof i == "function" ? i : null;
    }
    var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), g = 1; g < i; g++)
          l[g - 1] = arguments[g];
        V("error", e, l);
      }
    }
    function V(e, i, l) {
      {
        var g = U.ReactDebugCurrentFrame, D = g.getStackAddendum();
        D !== "" && (i += "%s", l = l.concat([D]));
        var $ = l.map(function(j) {
          return String(j);
        });
        $.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var W = !1, v = !1, re = !1, be = !1, Te = !1, le;
    le = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === t || Te || e === a || e === p || e === h || be || e === M || W || v || re || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === m || e.$$typeof === u || e.$$typeof === o || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function de(e, i, l) {
      var g = e.displayName;
      if (g)
        return g;
      var D = i.displayName || i.name || "";
      return D !== "" ? l + "(" + D + ")" : l;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case y:
          return "Portal";
        case t:
          return "Profiler";
        case a:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var i = e;
            return pe(i) + ".Consumer";
          case u:
            var l = e;
            return pe(l._context) + ".Provider";
          case c:
            return de(e, e.render, "ForwardRef");
          case m:
            var g = e.displayName || null;
            return g !== null ? g : K(e.type) || "Memo";
          case P: {
            var D = e, $ = D._payload, j = D._init;
            try {
              return K(j($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, te = 0, H, ee, ie, ve, s, E, C;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function T() {
      {
        if (te === 0) {
          H = console.log, ee = console.info, ie = console.warn, ve = console.error, s = console.group, E = console.groupCollapsed, C = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _,
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
        te++;
      }
    }
    function A() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: H
            }),
            info: X({}, e, {
              value: ee
            }),
            warn: X({}, e, {
              value: ie
            }),
            error: X({}, e, {
              value: ve
            }),
            group: X({}, e, {
              value: s
            }),
            groupCollapsed: X({}, e, {
              value: E
            }),
            groupEnd: X({}, e, {
              value: C
            })
          });
        }
        te < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = U.ReactCurrentDispatcher, R;
    function O(e, i, l) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (D) {
            var g = D.stack.trim().match(/\n( *(at )?)/);
            R = g && g[1] || "";
          }
        return `
` + R + e;
      }
    }
    var N = !1, S;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      S = new G();
    }
    function d(e, i) {
      if (!e || N)
        return "";
      {
        var l = S.get(e);
        if (l !== void 0)
          return l;
      }
      var g;
      N = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = x.current, x.current = null, T();
      try {
        if (i) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (ne) {
              g = ne;
            }
            Reflect.construct(e, [], j);
          } else {
            try {
              j.call();
            } catch (ne) {
              g = ne;
            }
            e.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            g = ne;
          }
          e();
        }
      } catch (ne) {
        if (ne && g && typeof ne.stack == "string") {
          for (var w = ne.stack.split(`
`), J = g.stack.split(`
`), Y = w.length - 1, q = J.length - 1; Y >= 1 && q >= 0 && w[Y] !== J[q]; )
            q--;
          for (; Y >= 1 && q >= 0; Y--, q--)
            if (w[Y] !== J[q]) {
              if (Y !== 1 || q !== 1)
                do
                  if (Y--, q--, q < 0 || w[Y] !== J[q]) {
                    var Q = `
` + w[Y].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, Q), Q;
                  }
                while (Y >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        N = !1, x.current = $, A(), Error.prepareStackTrace = D;
      }
      var he = e ? e.displayName || e.name : "", sr = he ? O(he) : "";
      return typeof e == "function" && S.set(e, sr), sr;
    }
    function Z(e, i, l) {
      return d(e, !1);
    }
    function ye(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function se(e, i, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return d(e, ye(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case p:
          return O("Suspense");
        case h:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Z(e.render);
          case m:
            return se(e.type, i, l);
          case P: {
            var g = e, D = g._payload, $ = g._init;
            try {
              return se($(D), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Xe = {}, Ke = U.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var i = e._owner, l = se(e.type, e._source, i ? i.type : null);
        Ke.setExtraStackFrame(l);
      } else
        Ke.setExtraStackFrame(null);
    }
    function wr(e, i, l, g, D) {
      {
        var $ = Function.call.bind(Pe);
        for (var j in e)
          if ($(e, j)) {
            var w = void 0;
            try {
              if (typeof e[j] != "function") {
                var J = Error((g || "React class") + ": " + l + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              w = e[j](i, j, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              w = Y;
            }
            w && !(w instanceof Error) && (we(D), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, j, typeof w), we(null)), w instanceof Error && !(w.message in Xe) && (Xe[w.message] = !0, we(D), F("Failed %s type: %s", l, w.message), we(null));
          }
      }
    }
    var Ar = Array.isArray;
    function De(e) {
      return Ar(e);
    }
    function jr(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Nr(e) {
      try {
        return He(e), !1;
      } catch {
        return !0;
      }
    }
    function He(e) {
      return "" + e;
    }
    function Ze(e) {
      if (Nr(e))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(e)), He(e);
    }
    var Re = U.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, er, ke;
    ke = {};
    function kr(e) {
      if (Pe.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ir(e) {
      if (Pe.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $r(e, i) {
      if (typeof e.ref == "string" && Re.current && i && Re.current.stateNode !== i) {
        var l = K(Re.current.type);
        ke[l] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Re.current.type), e.ref), ke[l] = !0);
      }
    }
    function Mr(e, i) {
      {
        var l = function() {
          Qe || (Qe = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Lr(e, i) {
      {
        var l = function() {
          er || (er = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Fr = function(e, i, l, g, D, $, j) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: l,
        props: j,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Yr(e, i, l, g, D) {
      {
        var $, j = {}, w = null, J = null;
        l !== void 0 && (Ze(l), w = "" + l), Ir(i) && (Ze(i.key), w = "" + i.key), kr(i) && (J = i.ref, $r(i, D));
        for ($ in i)
          Pe.call(i, $) && !Dr.hasOwnProperty($) && (j[$] = i[$]);
        if (e && e.defaultProps) {
          var Y = e.defaultProps;
          for ($ in Y)
            j[$] === void 0 && (j[$] = Y[$]);
        }
        if (w || J) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Mr(j, q), J && Lr(j, q);
        }
        return Fr(e, w, J, D, g, Re.current, j);
      }
    }
    var Ie = U.ReactCurrentOwner, rr = U.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var i = e._owner, l = se(e.type, e._source, i ? i.type : null);
        rr.setExtraStackFrame(l);
      } else
        rr.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function tr() {
      {
        if (Ie.current) {
          var e = K(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Wr(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
    }
    var nr = {};
    function qr(e) {
      {
        var i = tr();
        if (!i) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function ar(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = qr(i);
        if (nr[l])
          return;
        nr[l] = !0;
        var g = "";
        e && e._owner && e._owner !== Ie.current && (g = " It was passed a child from " + K(e._owner.type) + "."), Ee(e), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Ee(null);
      }
    }
    function or(e, i) {
      {
        if (typeof e != "object")
          return;
        if (De(e))
          for (var l = 0; l < e.length; l++) {
            var g = e[l];
            Me(g) && ar(g, i);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = z(e);
          if (typeof D == "function" && D !== e.entries)
            for (var $ = D.call(e), j; !(j = $.next()).done; )
              Me(j.value) && ar(j.value, i);
        }
      }
    }
    function Ur(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === m))
          l = i.propTypes;
        else
          return;
        if (l) {
          var g = K(i);
          wr(l, e.props, "prop", g, e);
        } else if (i.PropTypes !== void 0 && !$e) {
          $e = !0;
          var D = K(i);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vr(e) {
      {
        for (var i = Object.keys(e.props), l = 0; l < i.length; l++) {
          var g = i[l];
          if (g !== "children" && g !== "key") {
            Ee(e), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Ee(null);
            break;
          }
        }
        e.ref !== null && (Ee(e), F("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function ir(e, i, l, g, D, $) {
      {
        var j = xe(e);
        if (!j) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Wr(D);
          J ? w += J : w += tr();
          var Y;
          e === null ? Y = "null" : De(e) ? Y = "array" : e !== void 0 && e.$$typeof === f ? (Y = "<" + (K(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof e, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, w);
        }
        var q = Yr(e, i, l, D, $);
        if (q == null)
          return q;
        if (j) {
          var Q = i.children;
          if (Q !== void 0)
            if (g)
              if (De(Q)) {
                for (var he = 0; he < Q.length; he++)
                  or(Q[he], e);
                Object.freeze && Object.freeze(Q);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(Q, e);
        }
        return e === r ? Vr(q) : Ur(q), q;
      }
    }
    function zr(e, i, l) {
      return ir(e, i, l, !0);
    }
    function Br(e, i, l) {
      return ir(e, i, l, !1);
    }
    var Gr = Br, Jr = zr;
    Ce.Fragment = r, Ce.jsx = Gr, Ce.jsxs = Jr;
  }()), Ce;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Hr() : n.exports = Zr();
})(Kr);
const ue = Ae.jsx, Qr = Ae.jsxs;
function je() {
  return je = Object.assign ? Object.assign.bind() : function(n) {
    for (var f = 1; f < arguments.length; f++) {
      var y = arguments[f];
      for (var r in y)
        Object.prototype.hasOwnProperty.call(y, r) && (n[r] = y[r]);
    }
    return n;
  }, je.apply(this, arguments);
}
function xr(n, f) {
  if (n == null)
    return {};
  var y = {}, r = Object.keys(n), a, t;
  for (t = 0; t < r.length; t++)
    a = r[t], !(f.indexOf(a) >= 0) && (y[a] = n[a]);
  return y;
}
function ze(n, f) {
  return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ze(n, f);
}
function Rr(n, f) {
  n.prototype = Object.create(f.prototype), n.prototype.constructor = n, ze(n, f);
}
var b = {}, fr = {
  get exports() {
    return b;
  },
  set exports(n) {
    b = n;
  }
}, Ne = {}, et = {
  get exports() {
    return Ne;
  },
  set exports(n) {
    Ne = n;
  }
}, k = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function rt() {
  if (lr)
    return k;
  lr = 1;
  var n = typeof Symbol == "function" && Symbol.for, f = n ? Symbol.for("react.element") : 60103, y = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, t = n ? Symbol.for("react.profiler") : 60114, u = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, M = n ? Symbol.for("react.memo") : 60115, B = n ? Symbol.for("react.lazy") : 60116, L = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
  function V(v) {
    if (typeof v == "object" && v !== null) {
      var re = v.$$typeof;
      switch (re) {
        case f:
          switch (v = v.type, v) {
            case c:
            case p:
            case r:
            case t:
            case a:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case o:
                case h:
                case B:
                case M:
                case u:
                  return v;
                default:
                  return re;
              }
          }
        case y:
          return re;
      }
    }
  }
  function W(v) {
    return V(v) === p;
  }
  return k.AsyncMode = c, k.ConcurrentMode = p, k.ContextConsumer = o, k.ContextProvider = u, k.Element = f, k.ForwardRef = h, k.Fragment = r, k.Lazy = B, k.Memo = M, k.Portal = y, k.Profiler = t, k.StrictMode = a, k.Suspense = m, k.isAsyncMode = function(v) {
    return W(v) || V(v) === c;
  }, k.isConcurrentMode = W, k.isContextConsumer = function(v) {
    return V(v) === o;
  }, k.isContextProvider = function(v) {
    return V(v) === u;
  }, k.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === f;
  }, k.isForwardRef = function(v) {
    return V(v) === h;
  }, k.isFragment = function(v) {
    return V(v) === r;
  }, k.isLazy = function(v) {
    return V(v) === B;
  }, k.isMemo = function(v) {
    return V(v) === M;
  }, k.isPortal = function(v) {
    return V(v) === y;
  }, k.isProfiler = function(v) {
    return V(v) === t;
  }, k.isStrictMode = function(v) {
    return V(v) === a;
  }, k.isSuspense = function(v) {
    return V(v) === m;
  }, k.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === p || v === t || v === a || v === m || v === P || typeof v == "object" && v !== null && (v.$$typeof === B || v.$$typeof === M || v.$$typeof === u || v.$$typeof === o || v.$$typeof === h || v.$$typeof === z || v.$$typeof === U || v.$$typeof === F || v.$$typeof === L);
  }, k.typeOf = V, k;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function tt() {
  return dr || (dr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, f = n ? Symbol.for("react.element") : 60103, y = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, a = n ? Symbol.for("react.strict_mode") : 60108, t = n ? Symbol.for("react.profiler") : 60114, u = n ? Symbol.for("react.provider") : 60109, o = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, M = n ? Symbol.for("react.memo") : 60115, B = n ? Symbol.for("react.lazy") : 60116, L = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
    function V(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === r || d === p || d === t || d === a || d === m || d === P || typeof d == "object" && d !== null && (d.$$typeof === B || d.$$typeof === M || d.$$typeof === u || d.$$typeof === o || d.$$typeof === h || d.$$typeof === z || d.$$typeof === U || d.$$typeof === F || d.$$typeof === L);
    }
    function W(d) {
      if (typeof d == "object" && d !== null) {
        var Z = d.$$typeof;
        switch (Z) {
          case f:
            var ye = d.type;
            switch (ye) {
              case c:
              case p:
              case r:
              case t:
              case a:
              case m:
                return ye;
              default:
                var se = ye && ye.$$typeof;
                switch (se) {
                  case o:
                  case h:
                  case B:
                  case M:
                  case u:
                    return se;
                  default:
                    return Z;
                }
            }
          case y:
            return Z;
        }
      }
    }
    var v = c, re = p, be = o, Te = u, le = f, xe = h, de = r, pe = B, K = M, X = y, te = t, H = a, ee = m, ie = !1;
    function ve(d) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(d) || W(d) === c;
    }
    function s(d) {
      return W(d) === p;
    }
    function E(d) {
      return W(d) === o;
    }
    function C(d) {
      return W(d) === u;
    }
    function _(d) {
      return typeof d == "object" && d !== null && d.$$typeof === f;
    }
    function T(d) {
      return W(d) === h;
    }
    function A(d) {
      return W(d) === r;
    }
    function x(d) {
      return W(d) === B;
    }
    function R(d) {
      return W(d) === M;
    }
    function O(d) {
      return W(d) === y;
    }
    function N(d) {
      return W(d) === t;
    }
    function S(d) {
      return W(d) === a;
    }
    function G(d) {
      return W(d) === m;
    }
    I.AsyncMode = v, I.ConcurrentMode = re, I.ContextConsumer = be, I.ContextProvider = Te, I.Element = le, I.ForwardRef = xe, I.Fragment = de, I.Lazy = pe, I.Memo = K, I.Portal = X, I.Profiler = te, I.StrictMode = H, I.Suspense = ee, I.isAsyncMode = ve, I.isConcurrentMode = s, I.isContextConsumer = E, I.isContextProvider = C, I.isElement = _, I.isForwardRef = T, I.isFragment = A, I.isLazy = x, I.isMemo = R, I.isPortal = O, I.isProfiler = N, I.isStrictMode = S, I.isSuspense = G, I.isValidElementType = V, I.typeOf = W;
  }()), I;
}
var pr;
function _r() {
  return pr || (pr = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = rt() : n.exports = tt();
  }(et)), Ne;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, vr;
function nt() {
  if (vr)
    return Le;
  vr = 1;
  var n = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function r(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var u = {}, o = 0; o < 10; o++)
        u["_" + String.fromCharCode(o)] = o;
      var c = Object.getOwnPropertyNames(u).map(function(h) {
        return u[h];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = a() ? Object.assign : function(t, u) {
    for (var o, c = r(t), p, h = 1; h < arguments.length; h++) {
      o = Object(arguments[h]);
      for (var m in o)
        f.call(o, m) && (c[m] = o[m]);
      if (n) {
        p = n(o);
        for (var P = 0; P < p.length; P++)
          y.call(o, p[P]) && (c[p[P]] = o[p[P]]);
      }
    }
    return c;
  }, Le;
}
var Fe, yr;
function Ge() {
  if (yr)
    return Fe;
  yr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = n, Fe;
}
var Ye, Er;
function Cr() {
  return Er || (Er = 1, Ye = Function.call.bind(Object.prototype.hasOwnProperty)), Ye;
}
var We, hr;
function at() {
  if (hr)
    return We;
  hr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var f = Ge(), y = {}, r = Cr();
    n = function(t) {
      var u = "Warning: " + t;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function a(t, u, o, c, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in t)
        if (r(t, h)) {
          var m;
          try {
            if (typeof t[h] != "function") {
              var P = Error(
                (c || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            m = t[h](u, h, c, o, null, f);
          } catch (B) {
            m = B;
          }
          if (m && !(m instanceof Error) && n(
            (c || "React class") + ": type specification of " + o + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in y)) {
            y[m.message] = !0;
            var M = p ? p() : "";
            n(
              "Failed " + o + " type: " + m.message + (M ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (y = {});
  }, We = a, We;
}
var qe, mr;
function ot() {
  if (mr)
    return qe;
  mr = 1;
  var n = _r(), f = nt(), y = Ge(), r = Cr(), a = at(), t = function() {
  };
  process.env.NODE_ENV !== "production" && (t = function(o) {
    var c = "Warning: " + o;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return qe = function(o, c) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(s) {
      var E = s && (p && s[p] || s[h]);
      if (typeof E == "function")
        return E;
    }
    var P = "<<anonymous>>", M = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: F(),
      arrayOf: V,
      element: W(),
      elementType: v(),
      instanceOf: re,
      node: xe(),
      objectOf: Te,
      oneOf: be,
      oneOfType: le,
      shape: pe,
      exact: K
    };
    function B(s, E) {
      return s === E ? s !== 0 || 1 / s === 1 / E : s !== s && E !== E;
    }
    function L(s, E) {
      this.message = s, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    L.prototype = Error.prototype;
    function z(s) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, C = 0;
      function _(A, x, R, O, N, S, G) {
        if (O = O || P, S = S || R, G !== y) {
          if (c) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = O + ":" + R;
            !E[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (t(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[Z] = !0, C++);
          }
        }
        return x[R] == null ? A ? x[R] === null ? new L("The " + N + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new L("The " + N + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : s(x, R, O, N, S);
      }
      var T = _.bind(null, !1);
      return T.isRequired = _.bind(null, !0), T;
    }
    function U(s) {
      function E(C, _, T, A, x, R) {
        var O = C[_], N = H(O);
        if (N !== s) {
          var S = ee(O);
          return new L(
            "Invalid " + A + " `" + x + "` of type " + ("`" + S + "` supplied to `" + T + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return z(E);
    }
    function F() {
      return z(u);
    }
    function V(s) {
      function E(C, _, T, A, x) {
        if (typeof s != "function")
          return new L("Property `" + x + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var R = C[_];
        if (!Array.isArray(R)) {
          var O = H(R);
          return new L("Invalid " + A + " `" + x + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected an array."));
        }
        for (var N = 0; N < R.length; N++) {
          var S = s(R, N, T, A, x + "[" + N + "]", y);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return z(E);
    }
    function W() {
      function s(E, C, _, T, A) {
        var x = E[C];
        if (!o(x)) {
          var R = H(x);
          return new L("Invalid " + T + " `" + A + "` of type " + ("`" + R + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(s);
    }
    function v() {
      function s(E, C, _, T, A) {
        var x = E[C];
        if (!n.isValidElementType(x)) {
          var R = H(x);
          return new L("Invalid " + T + " `" + A + "` of type " + ("`" + R + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(s);
    }
    function re(s) {
      function E(C, _, T, A, x) {
        if (!(C[_] instanceof s)) {
          var R = s.name || P, O = ve(C[_]);
          return new L("Invalid " + A + " `" + x + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return z(E);
    }
    function be(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? t(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : t("Invalid argument supplied to oneOf, expected an array.")), u;
      function E(C, _, T, A, x) {
        for (var R = C[_], O = 0; O < s.length; O++)
          if (B(R, s[O]))
            return null;
        var N = JSON.stringify(s, function(G, d) {
          var Z = ee(d);
          return Z === "symbol" ? String(d) : d;
        });
        return new L("Invalid " + A + " `" + x + "` of value `" + String(R) + "` " + ("supplied to `" + T + "`, expected one of " + N + "."));
      }
      return z(E);
    }
    function Te(s) {
      function E(C, _, T, A, x) {
        if (typeof s != "function")
          return new L("Property `" + x + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var R = C[_], O = H(R);
        if (O !== "object")
          return new L("Invalid " + A + " `" + x + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected an object."));
        for (var N in R)
          if (r(R, N)) {
            var S = s(R, N, T, A, x + "." + N, y);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return z(E);
    }
    function le(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && t("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var E = 0; E < s.length; E++) {
        var C = s[E];
        if (typeof C != "function")
          return t(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(C) + " at index " + E + "."
          ), u;
      }
      function _(T, A, x, R, O) {
        for (var N = [], S = 0; S < s.length; S++) {
          var G = s[S], d = G(T, A, x, R, O, y);
          if (d == null)
            return null;
          d.data && r(d.data, "expectedType") && N.push(d.data.expectedType);
        }
        var Z = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new L("Invalid " + R + " `" + O + "` supplied to " + ("`" + x + "`" + Z + "."));
      }
      return z(_);
    }
    function xe() {
      function s(E, C, _, T, A) {
        return X(E[C]) ? null : new L("Invalid " + T + " `" + A + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return z(s);
    }
    function de(s, E, C, _, T) {
      return new L(
        (s || "React class") + ": " + E + " type `" + C + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function pe(s) {
      function E(C, _, T, A, x) {
        var R = C[_], O = H(R);
        if (O !== "object")
          return new L("Invalid " + A + " `" + x + "` of type `" + O + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var N in s) {
          var S = s[N];
          if (typeof S != "function")
            return de(T, A, x, N, ee(S));
          var G = S(R, N, T, A, x + "." + N, y);
          if (G)
            return G;
        }
        return null;
      }
      return z(E);
    }
    function K(s) {
      function E(C, _, T, A, x) {
        var R = C[_], O = H(R);
        if (O !== "object")
          return new L("Invalid " + A + " `" + x + "` of type `" + O + "` " + ("supplied to `" + T + "`, expected `object`."));
        var N = f({}, C[_], s);
        for (var S in N) {
          var G = s[S];
          if (r(s, S) && typeof G != "function")
            return de(T, A, x, S, ee(G));
          if (!G)
            return new L(
              "Invalid " + A + " `" + x + "` key `" + S + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(C[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var d = G(R, S, T, A, x + "." + S, y);
          if (d)
            return d;
        }
        return null;
      }
      return z(E);
    }
    function X(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(X);
          if (s === null || o(s))
            return !0;
          var E = m(s);
          if (E) {
            var C = E.call(s), _;
            if (E !== s.entries) {
              for (; !(_ = C.next()).done; )
                if (!X(_.value))
                  return !1;
            } else
              for (; !(_ = C.next()).done; ) {
                var T = _.value;
                if (T && !X(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(s, E) {
      return s === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function H(s) {
      var E = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : te(E, s) ? "symbol" : E;
    }
    function ee(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var E = H(s);
      if (E === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function ie(s) {
      var E = ee(s);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function ve(s) {
      return !s.constructor || !s.constructor.name ? P : s.constructor.name;
    }
    return M.checkPropTypes = a, M.resetWarningCache = a.resetWarningCache, M.PropTypes = M, M;
  }, qe;
}
var Ue, gr;
function it() {
  if (gr)
    return Ue;
  gr = 1;
  var n = Ge();
  function f() {
  }
  function y() {
  }
  return y.resetWarningCache = f, Ue = function() {
    function r(u, o, c, p, h, m) {
      if (m !== n) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var t = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: y,
      resetWarningCache: f
    };
    return t.PropTypes = t, t;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var st = _r(), ut = !0;
  fr.exports = ot()(st.isElement, ut);
} else
  fr.exports = it()();
function ct(n, f) {
  return n.classList ? !!f && n.classList.contains(f) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + f + " ") !== -1;
}
function ft(n, f) {
  n.classList ? n.classList.add(f) : ct(n, f) || (typeof n.className == "string" ? n.className = n.className + " " + f : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + f));
}
function br(n, f) {
  return n.replace(new RegExp("(^|\\s)" + f + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function lt(n, f) {
  n.classList ? n.classList.remove(f) : typeof n.className == "string" ? n.className = br(n.className, f) : n.setAttribute("class", br(n.className && n.className.baseVal || "", f));
}
const Tr = {
  disabled: !1
};
var dt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.shape({
  enter: b.number,
  exit: b.number,
  appear: b.number
}).isRequired]) : null, pt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.string, b.shape({
  enter: b.string,
  exit: b.string,
  active: b.string
}), b.shape({
  enter: b.string,
  enterDone: b.string,
  enterActive: b.string,
  exit: b.string,
  exitDone: b.string,
  exitActive: b.string
})]) : null;
const Or = ae.createContext(null);
var Sr = function(f) {
  return f.scrollTop;
}, Se = "unmounted", ce = "exited", fe = "entering", ge = "entered", Be = "exiting", oe = /* @__PURE__ */ function(n) {
  Rr(f, n);
  function f(r, a) {
    var t;
    t = n.call(this, r, a) || this;
    var u = a, o = u && !u.isMounting ? r.enter : r.appear, c;
    return t.appearStatus = null, r.in ? o ? (c = ce, t.appearStatus = fe) : c = ge : r.unmountOnExit || r.mountOnEnter ? c = Se : c = ce, t.state = {
      status: c
    }, t.nextCallback = null, t;
  }
  f.getDerivedStateFromProps = function(a, t) {
    var u = a.in;
    return u && t.status === Se ? {
      status: ce
    } : null;
  };
  var y = f.prototype;
  return y.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, y.componentDidUpdate = function(a) {
    var t = null;
    if (a !== this.props) {
      var u = this.state.status;
      this.props.in ? u !== fe && u !== ge && (t = fe) : (u === fe || u === ge) && (t = Be);
    }
    this.updateStatus(!1, t);
  }, y.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, y.getTimeouts = function() {
    var a = this.props.timeout, t, u, o;
    return t = u = o = a, a != null && typeof a != "number" && (t = a.exit, u = a.enter, o = a.appear !== void 0 ? a.appear : u), {
      exit: t,
      enter: u,
      appear: o
    };
  }, y.updateStatus = function(a, t) {
    if (a === void 0 && (a = !1), t !== null)
      if (this.cancelNextCallback(), t === fe) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var u = this.props.nodeRef ? this.props.nodeRef.current : Oe.findDOMNode(this);
          u && Sr(u);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === ce && this.setState({
        status: Se
      });
  }, y.performEnter = function(a) {
    var t = this, u = this.props.enter, o = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [o] : [Oe.findDOMNode(this), o], p = c[0], h = c[1], m = this.getTimeouts(), P = o ? m.appear : m.enter;
    if (!a && !u || Tr.disabled) {
      this.safeSetState({
        status: ge
      }, function() {
        t.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, h), this.safeSetState({
      status: fe
    }, function() {
      t.props.onEntering(p, h), t.onTransitionEnd(P, function() {
        t.safeSetState({
          status: ge
        }, function() {
          t.props.onEntered(p, h);
        });
      });
    });
  }, y.performExit = function() {
    var a = this, t = this.props.exit, u = this.getTimeouts(), o = this.props.nodeRef ? void 0 : Oe.findDOMNode(this);
    if (!t || Tr.disabled) {
      this.safeSetState({
        status: ce
      }, function() {
        a.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({
      status: Be
    }, function() {
      a.props.onExiting(o), a.onTransitionEnd(u.exit, function() {
        a.safeSetState({
          status: ce
        }, function() {
          a.props.onExited(o);
        });
      });
    });
  }, y.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, y.safeSetState = function(a, t) {
    t = this.setNextCallback(t), this.setState(a, t);
  }, y.setNextCallback = function(a) {
    var t = this, u = !0;
    return this.nextCallback = function(o) {
      u && (u = !1, t.nextCallback = null, a(o));
    }, this.nextCallback.cancel = function() {
      u = !1;
    }, this.nextCallback;
  }, y.onTransitionEnd = function(a, t) {
    this.setNextCallback(t);
    var u = this.props.nodeRef ? this.props.nodeRef.current : Oe.findDOMNode(this), o = a == null && !this.props.addEndListener;
    if (!u || o) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [u, this.nextCallback], p = c[0], h = c[1];
      this.props.addEndListener(p, h);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, y.render = function() {
    var a = this.state.status;
    if (a === Se)
      return null;
    var t = this.props, u = t.children;
    t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
    var o = xr(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ae.createElement(Or.Provider, {
        value: null
      }, typeof u == "function" ? u(a, o) : ae.cloneElement(ae.Children.only(u), o))
    );
  }, f;
}(ae.Component);
oe.contextType = Or;
oe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: b.shape({
    current: typeof Element > "u" ? b.any : function(n, f, y, r, a, t) {
      var u = n[f];
      return b.instanceOf(u && "ownerDocument" in u ? u.ownerDocument.defaultView.Element : Element)(n, f, y, r, a, t);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: b.oneOfType([b.func.isRequired, b.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: b.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: b.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: b.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: b.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: b.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: b.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(f) {
    var y = dt;
    f.addEndListener || (y = y.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
      a[t - 1] = arguments[t];
    return y.apply(void 0, [f].concat(a));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: b.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: b.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: b.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: b.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: b.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: b.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: b.func
} : {};
function me() {
}
oe.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: me,
  onEntering: me,
  onEntered: me,
  onExit: me,
  onExiting: me,
  onExited: me
};
oe.UNMOUNTED = Se;
oe.EXITED = ce;
oe.ENTERING = fe;
oe.ENTERED = ge;
oe.EXITING = Be;
const Pr = oe;
var vt = function(f, y) {
  return f && y && y.split(" ").forEach(function(r) {
    return ft(f, r);
  });
}, Ve = function(f, y) {
  return f && y && y.split(" ").forEach(function(r) {
    return lt(f, r);
  });
}, Je = /* @__PURE__ */ function(n) {
  Rr(f, n);
  function f() {
    for (var r, a = arguments.length, t = new Array(a), u = 0; u < a; u++)
      t[u] = arguments[u];
    return r = n.call.apply(n, [this].concat(t)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(o, c) {
      var p = r.resolveArguments(o, c), h = p[0], m = p[1];
      r.removeClasses(h, "exit"), r.addClass(h, m ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(o, c);
    }, r.onEntering = function(o, c) {
      var p = r.resolveArguments(o, c), h = p[0], m = p[1], P = m ? "appear" : "enter";
      r.addClass(h, P, "active"), r.props.onEntering && r.props.onEntering(o, c);
    }, r.onEntered = function(o, c) {
      var p = r.resolveArguments(o, c), h = p[0], m = p[1], P = m ? "appear" : "enter";
      r.removeClasses(h, P), r.addClass(h, P, "done"), r.props.onEntered && r.props.onEntered(o, c);
    }, r.onExit = function(o) {
      var c = r.resolveArguments(o), p = c[0];
      r.removeClasses(p, "appear"), r.removeClasses(p, "enter"), r.addClass(p, "exit", "base"), r.props.onExit && r.props.onExit(o);
    }, r.onExiting = function(o) {
      var c = r.resolveArguments(o), p = c[0];
      r.addClass(p, "exit", "active"), r.props.onExiting && r.props.onExiting(o);
    }, r.onExited = function(o) {
      var c = r.resolveArguments(o), p = c[0];
      r.removeClasses(p, "exit"), r.addClass(p, "exit", "done"), r.props.onExited && r.props.onExited(o);
    }, r.resolveArguments = function(o, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, o] : [o, c];
    }, r.getClassNames = function(o) {
      var c = r.props.classNames, p = typeof c == "string", h = p && c ? c + "-" : "", m = p ? "" + h + o : c[o], P = p ? m + "-active" : c[o + "Active"], M = p ? m + "-done" : c[o + "Done"];
      return {
        baseClassName: m,
        activeClassName: P,
        doneClassName: M
      };
    }, r;
  }
  var y = f.prototype;
  return y.addClass = function(a, t, u) {
    var o = this.getClassNames(t)[u + "ClassName"], c = this.getClassNames("enter"), p = c.doneClassName;
    t === "appear" && u === "done" && p && (o += " " + p), u === "active" && a && Sr(a), o && (this.appliedClasses[t][u] = o, vt(a, o));
  }, y.removeClasses = function(a, t) {
    var u = this.appliedClasses[t], o = u.base, c = u.active, p = u.done;
    this.appliedClasses[t] = {}, o && Ve(a, o), c && Ve(a, c), p && Ve(a, p);
  }, y.render = function() {
    var a = this.props;
    a.classNames;
    var t = xr(a, ["classNames"]);
    return /* @__PURE__ */ ae.createElement(Pr, je({}, t, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, f;
}(ae.Component);
Je.defaultProps = {
  classNames: ""
};
Je.propTypes = process.env.NODE_ENV !== "production" ? je({}, Pr.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: pt,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: b.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: b.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: b.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: b.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: b.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: b.func
}) : {};
const yt = Je;
function mt({ show: n, title: f, children: y, onClose: r }) {
  const a = (t) => {
    (t.charcode || t.keyCode) === 27 && r();
  };
  return Xr(() => (document.body.addEventListener("keydown", a), function() {
    document.body.removeEventListener("keydown", a);
  }), []), Oe.createPortal(
    /* @__PURE__ */ ue(yt, { in: n, unmountOnExit: !0, timeout: { enter: 0, exit: 300 }, children: /* @__PURE__ */ ue("div", { className: "modal", onClick: r, onKeyDown: r, children: /* @__PURE__ */ Qr(
      "div",
      {
        className: "modal-content",
        onClick: (t) => t.stopPropagation(),
        onKeyDown: (t) => t.stopPropagation(),
        children: [
          f && /* @__PURE__ */ ue("div", { className: "modal-header", children: /* @__PURE__ */ ue("h4", { className: "modal-title", children: f }) }),
          /* @__PURE__ */ ue("div", { className: "modal-body", children: y }),
          /* @__PURE__ */ ue("div", { className: "modal-footer", children: /* @__PURE__ */ ue("button", { onClick: r, className: "close" }) })
        ]
      }
    ) }) }),
    document.body
  );
}
export {
  mt as Modal
};
