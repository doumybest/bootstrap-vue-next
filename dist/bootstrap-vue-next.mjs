var Hn = Object.defineProperty;
var zn = (e, t, o) => t in e ? Hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var De = (e, t, o) => (zn(e, typeof t != "symbol" ? t + "" : t, o), o);
import { unref as v, computed as w, ref as W, shallowRef as ua, watch as ue, getCurrentScope as el, onScopeDispose as tl, shallowReadonly as Tt, effectScope as al, isRef as ol, toRef as E, readonly as Xe, customRef as Rn, getCurrentInstance as Ht, onMounted as st, nextTick as Ne, reactive as da, watchEffect as Xt, toValue as it, onActivated as xn, defineComponent as q, onBeforeUnmount as Wa, openBlock as m, createElementBlock as N, Fragment as ge, createElementVNode as ee, renderSlot as A, createBlock as x, Teleport as zt, mergeProps as Q, normalizeClass as j, normalizeStyle as ze, createTextVNode as ne, toDisplayString as Z, createCommentVNode as J, createApp as Mn, h as Le, provide as at, resolveDynamicComponent as se, withCtx as R, useAttrs as Kt, inject as Ge, createVNode as ye, Transition as Dn, normalizeProps as Se, guardReactiveProps as Ee, useSlots as Me, renderList as Te, TransitionGroup as jn, withDirectives as ht, vShow as ha, withModifiers as Bt, vModelCheckbox as qn, vModelRadio as Gn, vModelSelect as Wn, createSlots as Ua, onUnmounted as Un, withKeys as Qt } from "vue";
class dt {
  constructor(t, o = {}) {
    De(this, "cancelable", !0);
    De(this, "componentId", null);
    De(this, "_defaultPrevented", !1);
    De(this, "eventType", "");
    De(this, "nativeEvent", null);
    De(this, "_preventDefault");
    De(this, "relatedTarget", null);
    De(this, "target", null);
    if (!t)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, dt.Defaults, o, { eventType: t }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = !0);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(t) {
    this._defaultPrevented = t;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(t) {
    this._preventDefault = t;
  }
  static get Defaults() {
    return {
      cancelable: !0,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class Rt extends dt {
  constructor(o, a = {}) {
    super(o, a);
    De(this, "trigger", null);
    Object.assign(this, dt.Defaults, a, { eventType: o });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null
    };
  }
}
class ll extends dt {
  constructor(o, a) {
    super(o, a);
    De(this, "from");
    De(this, "to");
    De(this, "direction");
    Object.assign(this, dt.Defaults, a, { eventType: o });
    const { from: l, direction: n, to: i } = a;
    this.from = l, this.to = i, this.direction = n;
  }
  static get Defaults() {
    return {
      ...super.Defaults
    };
  }
}
const nl = /_/g, sl = /([a-z])([A-Z])/g, Xn = /(\s|^)(\w)/g, Kn = /(\s|^)(\w)/, sa = /\s+/, Yn = /^#/, Zn = /^#[A-Za-z]+[\w\-:.]*$/, Jn = /-u-.+/, Qn = /[-/\\^$*+?.()|[\]{}]/g, es = /[\s\uFEFF\xA0]+/g, ca = (e, t = 2) => typeof e == "string" ? e : e == null ? "" : Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]" && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e), _a = (e) => e.replace(nl, " ").replace(sl, (t, o, a) => `${o} ${a}`).replace(Kn, (t, o, a) => o + a.toUpperCase()), bo = (e) => e.replace(nl, " ").replace(sl, (t, o, a) => `${o} ${a}`).replace(Xn, (t, o, a) => o + a.toUpperCase()), ts = (e) => {
  const t = e.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}, as = (e) => e.replace(Qn, "\\$&"), os = (e) => as(e).replace(es, "\\s"), Va = (e) => `\\${e}`, ls = (e) => {
  const t = ca(e), { length: o } = t, a = t.charCodeAt(0);
  return t.split("").reduce((l, n, i) => {
    const s = t.charCodeAt(i);
    return s === 0 ? `${l}�` : (
      // ... is U+007F OR
      s === 127 || // ... is in the range [\1-\1F] (U+0001 to U+001F) OR ...
      s >= 1 && s <= 31 || // ... is the first character and is in the range [0-9] (U+0030 to U+0039) OR ...
      i === 0 && s >= 48 && s <= 57 || // ... is the second character and is in the range [0-9] (U+0030 to U+0039)
      // and the first character is a `-` (U+002D) ...
      i === 1 && s >= 48 && s <= 57 && a === 45 ? l + Va(`${s.toString(16)} `) : (
        // ... is the first character AND ...
        i === 0 && // ... is a `-` (U+002D) AND ...
        s === 45 && // ... there is no second character ...
        o === 1 ? l + Va(n) : (
          // ... is greater than or equal to U+0080 OR ...
          s >= 128 || // ... is `-` (U+002D) OR ...
          s === 45 || // ... is `_` (U+005F) OR ...
          s === 95 || // ... is in the range [0-9] (U+0030 to U+0039) OR ...
          s >= 48 && s <= 57 || // ... is in the range [A-Z] (U+0041 to U+005A) OR ...
          s >= 65 && s <= 90 || // ... is in the range [a-z] (U+0061 to U+007A) ...
          s >= 97 && s <= 122 ? l + n : l + Va(n)
        )
      )
    );
  }, "");
}, il = typeof window < "u", rl = typeof document < "u", ns = typeof Element < "u", ss = typeof navigator < "u", is = il && rl && ss, _t = il ? window : {}, Xa = rl ? document : {};
(() => {
  let e = !1;
  if (!is)
    return e;
  try {
    const t = {
      // This function will be called when the browser
      // attempts to access the passive property
      get passive() {
        return e = !0, e;
      }
    };
    "addEventListener" in _t && typeof _t.addEventListener == "function" && _t.addEventListener("test", t, t), "removeEventListener" in _t && typeof _t.removeEventListener == "function" && _t.removeEventListener("test", t, t);
  } catch {
    e = !1;
  }
})();
const ul = typeof window < "u", rs = typeof document < "u", us = typeof navigator < "u", Ka = ul && rs && us, yo = ul ? window : {}, ds = (() => {
  let e = !1;
  if (Ka)
    try {
      const t = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          e = !0;
        }
      };
      yo.addEventListener("test", t, t), yo.removeEventListener("test", t, t);
    } catch {
      e = !1;
    }
  return e;
})(), Aa = ns ? Element.prototype : void 0, ot = (e) => !!(e && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE), cs = (e) => ot(e) ? e.getBoundingClientRect() : null, fs = (e = []) => {
  const { activeElement: t } = document;
  return t && !e.some((o) => o === t) ? t : null;
}, vs = (e) => ot(e) && e === fs(), ps = (e, t = {}) => {
  try {
    e.focus(t);
  } catch (o) {
    console.error(o);
  }
  return vs(e);
}, ms = (e, t) => t && ot(e) && e.getAttribute(t) || null, gs = (e) => {
  if (ms(e, "display") === "none")
    return !1;
  const t = cs(e);
  return !!(t && t.height > 0 && t.width > 0);
}, Ie = (e) => ((e == null ? void 0 : e()) ?? []).length === 0, dl = (e, t) => (ot(t) ? t : Xa).querySelector(e) || null, bs = (e, t) => Array.from([(ot(t) ? t : Xa).querySelectorAll(e)]), Ya = (e, t) => t && ot(e) ? e.getAttribute(t) : null, ys = (e) => Xa.getElementById(/^#/.test(e) ? e.slice(1) : e) || null, hs = (e, t, o) => {
  t && ot(e) && e.setAttribute(t, o);
}, Bs = (e, t) => {
  t && ot(e) && e.removeAttribute(t);
}, Ss = (e, t) => ca(e).toLowerCase() === ca(t).toLowerCase(), Cs = (e, t) => ot(e) ? e.matches(t) : !1, ws = (Aa == null ? void 0 : Aa.closest) || function(e) {
  let t = this;
  if (!t)
    return null;
  do {
    if (ot(t) && t.matches(e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === Node.ELEMENT_NODE);
  return null;
}, ho = (e, t, o = !1) => {
  if (!ot(t))
    return null;
  const a = ws.call(t, e);
  return o ? a : a === t ? null : a;
}, La = (e) => {
  const t = window.getComputedStyle(e), o = t.transitionDelay.split(",")[0] || "", a = t.transitionDuration.split(",")[0] || "", l = Number(o.slice(0, -1)) * 1e3, n = Number(a.slice(0, -1)) * 1e3;
  return l + n;
}, ks = ["TD", "TH", "TR"], $s = [
  "a",
  "a *",
  // Include content inside links
  "button",
  "button *",
  // Include content inside buttons
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(","), ea = (e) => {
  if (!e || !e.target)
    return !1;
  const t = e.target;
  if ("disabled" in t && t.disabled || ks.indexOf(t.tagName) !== -1)
    return !1;
  if (ho(".dropdown-menu", t))
    return !0;
  const o = t.tagName === "LABEL" ? t : ho("label", t);
  if (o) {
    const a = Ya(o, "for"), l = a ? ys(a) : dl("input, select, textarea", o);
    if (l && !l.disabled)
      return !0;
  }
  return Cs(t, $s);
}, cl = ["top", "right", "bottom", "left"], Bo = ["start", "end"], So = /* @__PURE__ */ cl.reduce((e, t) => e.concat(t, t + "-" + Bo[0], t + "-" + Bo[1]), []), et = Math.min, Fe = Math.max, fa = Math.round, ta = Math.floor, mt = (e) => ({
  x: e,
  y: e
}), Ts = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _s = {
  start: "end",
  end: "start"
};
function Fa(e, t, o) {
  return Fe(e, et(t, o));
}
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ye(e) {
  return e.split("-")[0];
}
function Je(e) {
  return e.split("-")[1];
}
function fl(e) {
  return e === "x" ? "y" : "x";
}
function Za(e) {
  return e === "y" ? "height" : "width";
}
function xt(e) {
  return ["top", "bottom"].includes(Ye(e)) ? "y" : "x";
}
function Ja(e) {
  return fl(xt(e));
}
function vl(e, t, o) {
  o === void 0 && (o = !1);
  const a = Je(e), l = Ja(e), n = Za(l);
  let i = l === "x" ? a === (o ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (i = pa(i)), [i, pa(i)];
}
function Vs(e) {
  const t = pa(e);
  return [va(e), t, va(t)];
}
function va(e) {
  return e.replace(/start|end/g, (t) => _s[t]);
}
function As(e, t, o) {
  const a = ["left", "right"], l = ["right", "left"], n = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? l : a : t ? a : l;
    case "left":
    case "right":
      return t ? n : i;
    default:
      return [];
  }
}
function Os(e, t, o, a) {
  const l = Je(e);
  let n = As(Ye(e), o === "start", a);
  return l && (n = n.map((i) => i + "-" + l), t && (n = n.concat(n.map(va)))), n;
}
function pa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ts[t]);
}
function Es(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qa(e) {
  return typeof e != "number" ? Es(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Co(e, t, o) {
  let {
    reference: a,
    floating: l
  } = e;
  const n = xt(t), i = Ja(t), s = Za(i), u = Ye(t), d = n === "y", f = a.x + a.width / 2 - l.width / 2, g = a.y + a.height / 2 - l.height / 2, p = a[s] / 2 - l[s] / 2;
  let y;
  switch (u) {
    case "top":
      y = {
        x: f,
        y: a.y - l.height
      };
      break;
    case "bottom":
      y = {
        x: f,
        y: a.y + a.height
      };
      break;
    case "right":
      y = {
        x: a.x + a.width,
        y: g
      };
      break;
    case "left":
      y = {
        x: a.x - l.width,
        y: g
      };
      break;
    default:
      y = {
        x: a.x,
        y: a.y
      };
  }
  switch (Je(t)) {
    case "start":
      y[i] -= p * (o && d ? -1 : 1);
      break;
    case "end":
      y[i] += p * (o && d ? -1 : 1);
      break;
  }
  return y;
}
const Ps = async (e, t, o) => {
  const {
    placement: a = "bottom",
    strategy: l = "absolute",
    middleware: n = [],
    platform: i
  } = o, s = n.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: l
  }), {
    x: f,
    y: g
  } = Co(d, a, u), p = a, y = {}, b = 0;
  for (let V = 0; V < s.length; V++) {
    const {
      name: C,
      fn: c
    } = s[V], {
      x: h,
      y: B,
      data: _,
      reset: k
    } = await c({
      x: f,
      y: g,
      initialPlacement: a,
      placement: p,
      strategy: l,
      middlewareData: y,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = h ?? f, g = B ?? g, y = {
      ...y,
      [C]: {
        ...y[C],
        ..._
      }
    }, k && b <= 50) {
      b++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (d = k.rects === !0 ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: l
      }) : k.rects), {
        x: f,
        y: g
      } = Co(d, p, u)), V = -1;
      continue;
    }
  }
  return {
    x: f,
    y: g,
    placement: p,
    strategy: l,
    middlewareData: y
  };
};
async function Lt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: a,
    y: l,
    platform: n,
    rects: i,
    elements: s,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: g = "floating",
    altBoundary: p = !1,
    padding: y = 0
  } = ft(t, e), b = Qa(y), C = s[p ? g === "floating" ? "reference" : "floating" : g], c = It(await n.getClippingRect({
    element: (o = await (n.isElement == null ? void 0 : n.isElement(C))) == null || o ? C : C.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: u
  })), h = g === "floating" ? {
    ...i.floating,
    x: a,
    y: l
  } : i.reference, B = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), _ = await (n.isElement == null ? void 0 : n.isElement(B)) ? await (n.getScale == null ? void 0 : n.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = It(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: h,
    offsetParent: B,
    strategy: u
  }) : h);
  return {
    top: (c.top - k.top + b.top) / _.y,
    bottom: (k.bottom - c.bottom + b.bottom) / _.y,
    left: (c.left - k.left + b.left) / _.x,
    right: (k.right - c.right + b.right) / _.x
  };
}
const Ns = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: a,
      placement: l,
      rects: n,
      platform: i,
      elements: s,
      middlewareData: u
    } = t, {
      element: d,
      padding: f = 0
    } = ft(e, t) || {};
    if (d == null)
      return {};
    const g = Qa(f), p = {
      x: o,
      y: a
    }, y = Ja(l), b = Za(y), V = await i.getDimensions(d), C = y === "y", c = C ? "top" : "left", h = C ? "bottom" : "right", B = C ? "clientHeight" : "clientWidth", _ = n.reference[b] + n.reference[y] - p[y] - n.floating[b], k = p[y] - n.reference[y], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let $ = S ? S[B] : 0;
    (!$ || !await (i.isElement == null ? void 0 : i.isElement(S))) && ($ = s.floating[B] || n.floating[b]);
    const I = _ / 2 - k / 2, T = $ / 2 - V[b] / 2 - 1, O = et(g[c], T), F = et(g[h], T), K = O, z = $ - V[b] - F, P = $ / 2 - V[b] / 2 + I, D = Fa(K, P, z), ae = !u.arrow && Je(l) != null && P != D && n.reference[b] / 2 - (P < K ? O : F) - V[b] / 2 < 0, le = ae ? P < K ? P - K : P - z : 0;
    return {
      [y]: p[y] + le,
      data: {
        [y]: D,
        centerOffset: P - D - le,
        ...ae && {
          alignmentOffset: le
        }
      },
      reset: ae
    };
  }
});
function Is(e, t, o) {
  return (e ? [...o.filter((l) => Je(l) === e), ...o.filter((l) => Je(l) !== e)] : o.filter((l) => Ye(l) === l)).filter((l) => e ? Je(l) === e || (t ? va(l) !== l : !1) : !0);
}
const Ls = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, a, l;
      const {
        rects: n,
        middlewareData: i,
        placement: s,
        platform: u,
        elements: d
      } = t, {
        crossAxis: f = !1,
        alignment: g,
        allowedPlacements: p = So,
        autoAlignment: y = !0,
        ...b
      } = ft(e, t), V = g !== void 0 || p === So ? Is(g || null, y, p) : p, C = await Lt(t, b), c = ((o = i.autoPlacement) == null ? void 0 : o.index) || 0, h = V[c];
      if (h == null)
        return {};
      const B = vl(h, n, await (u.isRTL == null ? void 0 : u.isRTL(d.floating)));
      if (s !== h)
        return {
          reset: {
            placement: V[0]
          }
        };
      const _ = [C[Ye(h)], C[B[0]], C[B[1]]], k = [...((a = i.autoPlacement) == null ? void 0 : a.overflows) || [], {
        placement: h,
        overflows: _
      }], S = V[c + 1];
      if (S)
        return {
          data: {
            index: c + 1,
            overflows: k
          },
          reset: {
            placement: S
          }
        };
      const $ = k.map((O) => {
        const F = Je(O.placement);
        return [O.placement, F && f ? (
          // Check along the mainAxis and main crossAxis side.
          O.overflows.slice(0, 2).reduce((K, z) => K + z, 0)
        ) : (
          // Check only the mainAxis.
          O.overflows[0]
        ), O.overflows];
      }).sort((O, F) => O[1] - F[1]), T = ((l = $.filter((O) => O[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Je(O[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : l[0]) || $[0][0];
      return T !== s ? {
        data: {
          index: c + 1,
          overflows: k
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
}, pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, a;
      const {
        placement: l,
        middlewareData: n,
        rects: i,
        initialPlacement: s,
        platform: u,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: g = !0,
        fallbackPlacements: p,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: V = !0,
        ...C
      } = ft(e, t);
      if ((o = n.arrow) != null && o.alignmentOffset)
        return {};
      const c = Ye(l), h = Ye(s) === s, B = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), _ = p || (h || !V ? [pa(s)] : Vs(s));
      !p && b !== "none" && _.push(...Os(s, V, b, B));
      const k = [s, ..._], S = await Lt(t, C), $ = [];
      let I = ((a = n.flip) == null ? void 0 : a.overflows) || [];
      if (f && $.push(S[c]), g) {
        const K = vl(l, i, B);
        $.push(S[K[0]], S[K[1]]);
      }
      if (I = [...I, {
        placement: l,
        overflows: $
      }], !$.every((K) => K <= 0)) {
        var T, O;
        const K = (((T = n.flip) == null ? void 0 : T.index) || 0) + 1, z = k[K];
        if (z)
          return {
            data: {
              index: K,
              overflows: I
            },
            reset: {
              placement: z
            }
          };
        let P = (O = I.filter((D) => D.overflows[0] <= 0).sort((D, ae) => D.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!P)
          switch (y) {
            case "bestFit": {
              var F;
              const D = (F = I.map((ae) => [ae.placement, ae.overflows.filter((le) => le > 0).reduce((le, ve) => le + ve, 0)]).sort((ae, le) => ae[1] - le[1])[0]) == null ? void 0 : F[0];
              D && (P = D);
              break;
            }
            case "initialPlacement":
              P = s;
              break;
          }
        if (l !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function wo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ko(e) {
  return cl.some((t) => e[t] >= 0);
}
const Fs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: a = "referenceHidden",
        ...l
      } = ft(e, t);
      switch (a) {
        case "referenceHidden": {
          const n = await Lt(t, {
            ...l,
            elementContext: "reference"
          }), i = wo(n, o.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ko(i)
            }
          };
        }
        case "escaped": {
          const n = await Lt(t, {
            ...l,
            altBoundary: !0
          }), i = wo(n, o.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ko(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function ml(e) {
  const t = et(...e.map((n) => n.left)), o = et(...e.map((n) => n.top)), a = Fe(...e.map((n) => n.right)), l = Fe(...e.map((n) => n.bottom));
  return {
    x: t,
    y: o,
    width: a - t,
    height: l - o
  };
}
function Hs(e) {
  const t = e.slice().sort((l, n) => l.y - n.y), o = [];
  let a = null;
  for (let l = 0; l < t.length; l++) {
    const n = t[l];
    !a || n.y - a.y > a.height / 2 ? o.push([n]) : o[o.length - 1].push(n), a = n;
  }
  return o.map((l) => It(ml(l)));
}
const zs = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: o,
        elements: a,
        rects: l,
        platform: n,
        strategy: i
      } = t, {
        padding: s = 2,
        x: u,
        y: d
      } = ft(e, t), f = Array.from(await (n.getClientRects == null ? void 0 : n.getClientRects(a.reference)) || []), g = Hs(f), p = It(ml(f)), y = Qa(s);
      function b() {
        if (g.length === 2 && g[0].left > g[1].right && u != null && d != null)
          return g.find((C) => u > C.left - y.left && u < C.right + y.right && d > C.top - y.top && d < C.bottom + y.bottom) || p;
        if (g.length >= 2) {
          if (xt(o) === "y") {
            const O = g[0], F = g[g.length - 1], K = Ye(o) === "top", z = O.top, P = F.bottom, D = K ? O.left : F.left, ae = K ? O.right : F.right, le = ae - D, ve = P - z;
            return {
              top: z,
              bottom: P,
              left: D,
              right: ae,
              width: le,
              height: ve,
              x: D,
              y: z
            };
          }
          const C = Ye(o) === "left", c = Fe(...g.map((O) => O.right)), h = et(...g.map((O) => O.left)), B = g.filter((O) => C ? O.left === h : O.right === c), _ = B[0].top, k = B[B.length - 1].bottom, S = h, $ = c, I = $ - S, T = k - _;
          return {
            top: _,
            bottom: k,
            left: S,
            right: $,
            width: I,
            height: T,
            x: S,
            y: _
          };
        }
        return p;
      }
      const V = await n.getElementRects({
        reference: {
          getBoundingClientRect: b
        },
        floating: a.floating,
        strategy: i
      });
      return l.reference.x !== V.reference.x || l.reference.y !== V.reference.y || l.reference.width !== V.reference.width || l.reference.height !== V.reference.height ? {
        reset: {
          rects: V
        }
      } : {};
    }
  };
};
async function Rs(e, t) {
  const {
    placement: o,
    platform: a,
    elements: l
  } = e, n = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), i = Ye(o), s = Je(o), u = xt(o) === "y", d = ["left", "top"].includes(i) ? -1 : 1, f = n && u ? -1 : 1, g = ft(t, e);
  let {
    mainAxis: p,
    crossAxis: y,
    alignmentAxis: b
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...g
  };
  return s && typeof b == "number" && (y = s === "end" ? b * -1 : b), u ? {
    x: y * f,
    y: p * d
  } : {
    x: p * d,
    y: y * f
  };
}
const gl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: a
      } = t, l = await Rs(t, e);
      return {
        x: o + l.x,
        y: a + l.y,
        data: l
      };
    }
  };
}, bl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: a,
        placement: l
      } = t, {
        mainAxis: n = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (C) => {
            let {
              x: c,
              y: h
            } = C;
            return {
              x: c,
              y: h
            };
          }
        },
        ...u
      } = ft(e, t), d = {
        x: o,
        y: a
      }, f = await Lt(t, u), g = xt(Ye(l)), p = fl(g);
      let y = d[p], b = d[g];
      if (n) {
        const C = p === "y" ? "top" : "left", c = p === "y" ? "bottom" : "right", h = y + f[C], B = y - f[c];
        y = Fa(h, y, B);
      }
      if (i) {
        const C = g === "y" ? "top" : "left", c = g === "y" ? "bottom" : "right", h = b + f[C], B = b - f[c];
        b = Fa(h, b, B);
      }
      const V = s.fn({
        ...t,
        [p]: y,
        [g]: b
      });
      return {
        ...V,
        data: {
          x: V.x - o,
          y: V.y - a
        }
      };
    }
  };
}, yl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: a,
        platform: l,
        elements: n
      } = t, {
        apply: i = () => {
        },
        ...s
      } = ft(e, t), u = await Lt(t, s), d = Ye(o), f = Je(o), g = xt(o) === "y", {
        width: p,
        height: y
      } = a.floating;
      let b, V;
      d === "top" || d === "bottom" ? (b = d, V = f === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (V = d, b = f === "end" ? "top" : "bottom");
      const C = y - u[b], c = p - u[V], h = !t.middlewareData.shift;
      let B = C, _ = c;
      if (g) {
        const S = p - u.left - u.right;
        _ = f || h ? et(c, S) : S;
      } else {
        const S = y - u.top - u.bottom;
        B = f || h ? et(C, S) : S;
      }
      if (h && !f) {
        const S = Fe(u.left, 0), $ = Fe(u.right, 0), I = Fe(u.top, 0), T = Fe(u.bottom, 0);
        g ? _ = p - 2 * (S !== 0 || $ !== 0 ? S + $ : Fe(u.left, u.right)) : B = y - 2 * (I !== 0 || T !== 0 ? I + T : Fe(u.top, u.bottom));
      }
      await i({
        ...t,
        availableWidth: _,
        availableHeight: B
      });
      const k = await l.getDimensions(n.floating);
      return p !== k.width || y !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gt(e) {
  return hl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vt(e) {
  var t;
  return (t = (hl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hl(e) {
  return e instanceof Node || e instanceof We(e).Node;
}
function ct(e) {
  return e instanceof Element || e instanceof We(e).Element;
}
function nt(e) {
  return e instanceof HTMLElement || e instanceof We(e).HTMLElement;
}
function $o(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Yt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: a,
    display: l
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + o) && !["inline", "contents"].includes(l);
}
function xs(e) {
  return ["table", "td", "th"].includes(gt(e));
}
function eo(e) {
  const t = to(), o = Ze(e);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((a) => (o.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (o.contain || "").includes(a));
}
function Ms(e) {
  let t = Ft(e);
  for (; nt(t) && !Ba(t); ) {
    if (eo(t))
      return t;
    t = Ft(t);
  }
  return null;
}
function to() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ba(e) {
  return ["html", "body", "#document"].includes(gt(e));
}
function Ze(e) {
  return We(e).getComputedStyle(e);
}
function Sa(e) {
  return ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ft(e) {
  if (gt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $o(e) && e.host || // Fallback.
    vt(e)
  );
  return $o(t) ? t.host : t;
}
function Bl(e) {
  const t = Ft(e);
  return Ba(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nt(t) && Yt(t) ? t : Bl(t);
}
function Wt(e, t, o) {
  var a;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const l = Bl(e), n = l === ((a = e.ownerDocument) == null ? void 0 : a.body), i = We(l);
  return n ? t.concat(i, i.visualViewport || [], Yt(l) ? l : [], i.frameElement && o ? Wt(i.frameElement) : []) : t.concat(l, Wt(l, [], o));
}
function Sl(e) {
  const t = Ze(e);
  let o = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const l = nt(e), n = l ? e.offsetWidth : o, i = l ? e.offsetHeight : a, s = fa(o) !== n || fa(a) !== i;
  return s && (o = n, a = i), {
    width: o,
    height: a,
    $: s
  };
}
function ao(e) {
  return ct(e) ? e : e.contextElement;
}
function Pt(e) {
  const t = ao(e);
  if (!nt(t))
    return mt(1);
  const o = t.getBoundingClientRect(), {
    width: a,
    height: l,
    $: n
  } = Sl(t);
  let i = (n ? fa(o.width) : o.width) / a, s = (n ? fa(o.height) : o.height) / l;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Ds = /* @__PURE__ */ mt(0);
function Cl(e) {
  const t = We(e);
  return !to() || !t.visualViewport ? Ds : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function js(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== We(e) ? !1 : t;
}
function St(e, t, o, a) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const l = e.getBoundingClientRect(), n = ao(e);
  let i = mt(1);
  t && (a ? ct(a) && (i = Pt(a)) : i = Pt(e));
  const s = js(n, o, a) ? Cl(n) : mt(0);
  let u = (l.left + s.x) / i.x, d = (l.top + s.y) / i.y, f = l.width / i.x, g = l.height / i.y;
  if (n) {
    const p = We(n), y = a && ct(a) ? We(a) : a;
    let b = p.frameElement;
    for (; b && a && y !== p; ) {
      const V = Pt(b), C = b.getBoundingClientRect(), c = Ze(b), h = C.left + (b.clientLeft + parseFloat(c.paddingLeft)) * V.x, B = C.top + (b.clientTop + parseFloat(c.paddingTop)) * V.y;
      u *= V.x, d *= V.y, f *= V.x, g *= V.y, u += h, d += B, b = We(b).frameElement;
    }
  }
  return It({
    width: f,
    height: g,
    x: u,
    y: d
  });
}
function qs(e) {
  let {
    rect: t,
    offsetParent: o,
    strategy: a
  } = e;
  const l = nt(o), n = vt(o);
  if (o === n)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = mt(1);
  const u = mt(0);
  if ((l || !l && a !== "fixed") && ((gt(o) !== "body" || Yt(n)) && (i = Sa(o)), nt(o))) {
    const d = St(o);
    s = Pt(o), u.x = d.x + o.clientLeft, u.y = d.y + o.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - i.scrollLeft * s.x + u.x,
    y: t.y * s.y - i.scrollTop * s.y + u.y
  };
}
function Gs(e) {
  return Array.from(e.getClientRects());
}
function wl(e) {
  return St(vt(e)).left + Sa(e).scrollLeft;
}
function Ws(e) {
  const t = vt(e), o = Sa(e), a = e.ownerDocument.body, l = Fe(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), n = Fe(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let i = -o.scrollLeft + wl(e);
  const s = -o.scrollTop;
  return Ze(a).direction === "rtl" && (i += Fe(t.clientWidth, a.clientWidth) - l), {
    width: l,
    height: n,
    x: i,
    y: s
  };
}
function Us(e, t) {
  const o = We(e), a = vt(e), l = o.visualViewport;
  let n = a.clientWidth, i = a.clientHeight, s = 0, u = 0;
  if (l) {
    n = l.width, i = l.height;
    const d = to();
    (!d || d && t === "fixed") && (s = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: n,
    height: i,
    x: s,
    y: u
  };
}
function Xs(e, t) {
  const o = St(e, !0, t === "fixed"), a = o.top + e.clientTop, l = o.left + e.clientLeft, n = nt(e) ? Pt(e) : mt(1), i = e.clientWidth * n.x, s = e.clientHeight * n.y, u = l * n.x, d = a * n.y;
  return {
    width: i,
    height: s,
    x: u,
    y: d
  };
}
function To(e, t, o) {
  let a;
  if (t === "viewport")
    a = Us(e, o);
  else if (t === "document")
    a = Ws(vt(e));
  else if (ct(t))
    a = Xs(t, o);
  else {
    const l = Cl(e);
    a = {
      ...t,
      x: t.x - l.x,
      y: t.y - l.y
    };
  }
  return It(a);
}
function kl(e, t) {
  const o = Ft(e);
  return o === t || !ct(o) || Ba(o) ? !1 : Ze(o).position === "fixed" || kl(o, t);
}
function Ks(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let a = Wt(e, [], !1).filter((s) => ct(s) && gt(s) !== "body"), l = null;
  const n = Ze(e).position === "fixed";
  let i = n ? Ft(e) : e;
  for (; ct(i) && !Ba(i); ) {
    const s = Ze(i), u = eo(i);
    !u && s.position === "fixed" && (l = null), (n ? !u && !l : !u && s.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || Yt(i) && !u && kl(e, i)) ? a = a.filter((f) => f !== i) : l = s, i = Ft(i);
  }
  return t.set(e, a), a;
}
function Ys(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: a,
    strategy: l
  } = e;
  const i = [...o === "clippingAncestors" ? Ks(t, this._c) : [].concat(o), a], s = i[0], u = i.reduce((d, f) => {
    const g = To(t, f, l);
    return d.top = Fe(g.top, d.top), d.right = et(g.right, d.right), d.bottom = et(g.bottom, d.bottom), d.left = Fe(g.left, d.left), d;
  }, To(t, s, l));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Zs(e) {
  return Sl(e);
}
function Js(e, t, o) {
  const a = nt(t), l = vt(t), n = o === "fixed", i = St(e, !0, n, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = mt(0);
  if (a || !a && !n)
    if ((gt(t) !== "body" || Yt(l)) && (s = Sa(t)), a) {
      const d = St(t, !0, n, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      l && (u.x = wl(l));
  return {
    x: i.left + s.scrollLeft - u.x,
    y: i.top + s.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function _o(e, t) {
  return !nt(e) || Ze(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $l(e, t) {
  const o = We(e);
  if (!nt(e))
    return o;
  let a = _o(e, t);
  for (; a && xs(a) && Ze(a).position === "static"; )
    a = _o(a, t);
  return a && (gt(a) === "html" || gt(a) === "body" && Ze(a).position === "static" && !eo(a)) ? o : a || Ms(e) || o;
}
const Qs = async function(e) {
  let {
    reference: t,
    floating: o,
    strategy: a
  } = e;
  const l = this.getOffsetParent || $l, n = this.getDimensions;
  return {
    reference: Js(t, await l(o), a),
    floating: {
      x: 0,
      y: 0,
      ...await n(o)
    }
  };
};
function ei(e) {
  return Ze(e).direction === "rtl";
}
const ti = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qs,
  getDocumentElement: vt,
  getClippingRect: Ys,
  getOffsetParent: $l,
  getElementRects: Qs,
  getClientRects: Gs,
  getDimensions: Zs,
  getScale: Pt,
  isElement: ct,
  isRTL: ei
};
function ai(e, t) {
  let o = null, a;
  const l = vt(e);
  function n() {
    clearTimeout(a), o && o.disconnect(), o = null;
  }
  function i(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), n();
    const {
      left: d,
      top: f,
      width: g,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !g || !p)
      return;
    const y = ta(f), b = ta(l.clientWidth - (d + g)), V = ta(l.clientHeight - (f + p)), C = ta(d), h = {
      rootMargin: -y + "px " + -b + "px " + -V + "px " + -C + "px",
      threshold: Fe(0, et(1, u)) || 1
    };
    let B = !0;
    function _(k) {
      const S = k[0].intersectionRatio;
      if (S !== u) {
        if (!B)
          return i();
        S ? i(!1, S) : a = setTimeout(() => {
          i(!1, 1e-7);
        }, 100);
      }
      B = !1;
    }
    try {
      o = new IntersectionObserver(_, {
        ...h,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(_, h);
    }
    o.observe(e);
  }
  return i(!0), n;
}
function Tl(e, t, o, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: n = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = ao(e), f = l || n ? [...d ? Wt(d) : [], ...Wt(t)] : [];
  f.forEach((c) => {
    l && c.addEventListener("scroll", o, {
      passive: !0
    }), n && c.addEventListener("resize", o);
  });
  const g = d && s ? ai(d, o) : null;
  let p = -1, y = null;
  i && (y = new ResizeObserver((c) => {
    let [h] = c;
    h && h.target === d && y && (y.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      y && y.observe(t);
    })), o();
  }), d && !u && y.observe(d), y.observe(t));
  let b, V = u ? St(e) : null;
  u && C();
  function C() {
    const c = St(e);
    V && (c.x !== V.x || c.y !== V.y || c.width !== V.width || c.height !== V.height) && o(), V = c, b = requestAnimationFrame(C);
  }
  return o(), () => {
    f.forEach((c) => {
      l && c.removeEventListener("scroll", o), n && c.removeEventListener("resize", o);
    }), g && g(), y && y.disconnect(), y = null, u && cancelAnimationFrame(b);
  };
}
const oi = (e, t, o) => {
  const a = /* @__PURE__ */ new Map(), l = {
    platform: ti,
    ...o
  }, n = {
    ...l.platform,
    _c: a
  };
  return Ps(e, t, {
    ...l,
    platform: n
  });
};
function Ha(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function li(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = Ha(v(e.element));
      return o == null ? {} : Ns({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function _l(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vo(e, t) {
  const o = _l(e);
  return Math.round(t * o) / o;
}
function Vl(e, t, o) {
  o === void 0 && (o = {});
  const a = o.whileElementsMounted, l = w(() => {
    var $;
    return ($ = v(o.open)) != null ? $ : !0;
  }), n = w(() => v(o.middleware)), i = w(() => {
    var $;
    return ($ = v(o.placement)) != null ? $ : "bottom";
  }), s = w(() => {
    var $;
    return ($ = v(o.strategy)) != null ? $ : "absolute";
  }), u = w(() => {
    var $;
    return ($ = v(o.transform)) != null ? $ : !0;
  }), d = w(() => Ha(e.value)), f = w(() => Ha(t.value)), g = W(0), p = W(0), y = W(s.value), b = W(i.value), V = ua({}), C = W(!1), c = w(() => {
    const $ = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return $;
    const I = Vo(f.value, g.value), T = Vo(f.value, p.value);
    return u.value ? {
      ...$,
      transform: "translate(" + I + "px, " + T + "px)",
      ..._l(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: I + "px",
      top: T + "px"
    };
  });
  let h;
  function B() {
    d.value == null || f.value == null || oi(d.value, f.value, {
      middleware: n.value,
      placement: i.value,
      strategy: s.value
    }).then(($) => {
      g.value = $.x, p.value = $.y, y.value = $.strategy, b.value = $.placement, V.value = $.middlewareData, C.value = !0;
    });
  }
  function _() {
    typeof h == "function" && (h(), h = void 0);
  }
  function k() {
    if (_(), a === void 0) {
      B();
      return;
    }
    if (d.value != null && f.value != null) {
      h = a(d.value, f.value, B);
      return;
    }
  }
  function S() {
    l.value || (C.value = !1);
  }
  return ue([n, i, s], B, {
    flush: "sync"
  }), ue([d, f], k, {
    flush: "sync"
  }), ue(l, S, {
    flush: "sync"
  }), el() && tl(_), {
    x: Tt(g),
    y: Tt(p),
    strategy: Tt(y),
    placement: Tt(b),
    middlewareData: Tt(V),
    isPositioned: Tt(C),
    floatingStyles: c,
    update: B
  };
}
const ni = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), si = /^aria-[\w-]*$/i, ii = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, ri = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, ui = (e, t) => {
  const o = e.nodeName.toLowerCase();
  return t.includes(o) ? ni.has(o) ? !!(ii.test(e.nodeValue || "") || ri.test(e.nodeValue || "")) : !0 : t.filter((a) => a instanceof RegExp).some((a) => a.test(o));
}, At = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", si],
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
}, Ot = (e, t, o) => {
  if (!e.length)
    return e;
  if (o && typeof o == "function")
    return o(e);
  const l = new window.DOMParser().parseFromString(e, "text/html"), n = l.body.querySelectorAll("*");
  for (const i of n) {
    const s = i.nodeName.toLowerCase();
    if (!Object.keys(t).includes(s)) {
      i.remove();
      continue;
    }
    const u = i.attributes, d = [...t["*"] || [], ...t[s] || []];
    for (const f of u)
      ui(f, d) || i.removeAttribute(f.nodeName);
  }
  return l.body.innerHTML;
};
function bt(e) {
  return el() ? (tl(e), !0) : !1;
}
function Al(e) {
  let t = !1, o;
  const a = al(!0);
  return (...l) => (t || (o = a.run(() => e(...l)), t = !0), o);
}
function di(e) {
  let t = 0, o, a;
  const l = () => {
    t -= 1, a && t <= 0 && (a.stop(), o = void 0, a = void 0);
  };
  return (...n) => (t += 1, o || (a = al(!0), o = a.run(() => e(...n))), bt(l), o);
}
function Ke(e) {
  return typeof e == "function" ? e() : v(e);
}
const ma = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ci = (e) => typeof e < "u", fi = Object.prototype.toString, vi = (e) => fi.call(e) === "[object Object]", yt = () => {
}, za = /* @__PURE__ */ pi();
function pi() {
  var e;
  return ma && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Ol(e, t) {
  function o(...a) {
    return new Promise((l, n) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(l).catch(n);
    });
  }
  return o;
}
const El = (e) => e();
function mi(e, t = {}) {
  let o, a, l = yt;
  const n = (s) => {
    clearTimeout(s), l(), l = yt;
  };
  return (s) => {
    const u = Ke(e), d = Ke(t.maxWait);
    return o && n(o), u <= 0 || d !== void 0 && d <= 0 ? (a && (n(a), a = null), Promise.resolve(s())) : new Promise((f, g) => {
      l = t.rejectOnCancel ? g : f, d && !a && (a = setTimeout(() => {
        o && n(o), a = null, f(s());
      }, d)), o = setTimeout(() => {
        a && n(a), a = null, f(s());
      }, u);
    });
  };
}
function gi(e = El) {
  const t = W(!0);
  function o() {
    t.value = !1;
  }
  function a() {
    t.value = !0;
  }
  const l = (...n) => {
    t.value && e(...n);
  };
  return { isActive: Xe(t), pause: o, resume: a, eventFilter: l };
}
function Pl(...e) {
  if (e.length !== 1)
    return E(...e);
  const t = e[0];
  return typeof t == "function" ? Xe(Rn(() => ({ get: t, set: yt }))) : W(t);
}
function bi(e, t = 200, o = {}) {
  return Ol(
    mi(t, o),
    e
  );
}
function yi(e, t, o = {}) {
  const {
    eventFilter: a = El,
    ...l
  } = o;
  return ue(
    e,
    Ol(
      a,
      t
    ),
    l
  );
}
function hi(e, t, o = {}) {
  const {
    eventFilter: a,
    ...l
  } = o, { eventFilter: n, pause: i, resume: s, isActive: u } = gi(a);
  return { stop: yi(
    e,
    t,
    {
      ...l,
      eventFilter: n
    }
  ), pause: i, resume: s, isActive: u };
}
function Nl(e, t = !0) {
  Ht() ? st(e) : t ? e() : Ne(e);
}
function Il(e, t = 1e3, o = {}) {
  const {
    immediate: a = !0,
    immediateCallback: l = !1
  } = o;
  let n = null;
  const i = W(!1);
  function s() {
    n && (clearInterval(n), n = null);
  }
  function u() {
    i.value = !1, s();
  }
  function d() {
    const f = Ke(t);
    f <= 0 || (i.value = !0, l && e(), s(), n = setInterval(e, f));
  }
  if (a && ma && d(), ol(t) || typeof t == "function") {
    const f = ue(t, () => {
      i.value && ma && d();
    });
    bt(f);
  }
  return bt(u), {
    isActive: i,
    pause: u,
    resume: d
  };
}
function he(e, t = {}) {
  const {
    method: o = "parseFloat",
    radix: a,
    nanToZero: l
  } = t;
  return w(() => {
    let n = Ke(e);
    return typeof n == "string" && (n = Number[o](n, a)), l && Number.isNaN(n) && (n = 0), n;
  });
}
function ut(e) {
  var t;
  const o = Ke(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const tt = ma ? window : void 0;
function Oe(...e) {
  let t, o, a, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, a, l] = e, t = tt) : [t, o, a, l] = e, !t)
    return yt;
  Array.isArray(o) || (o = [o]), Array.isArray(a) || (a = [a]);
  const n = [], i = () => {
    n.forEach((f) => f()), n.length = 0;
  }, s = (f, g, p, y) => (f.addEventListener(g, p, y), () => f.removeEventListener(g, p, y)), u = ue(
    () => [ut(t), Ke(l)],
    ([f, g]) => {
      if (i(), !f)
        return;
      const p = vi(g) ? { ...g } : g;
      n.push(
        ...o.flatMap((y) => a.map((b) => s(f, y, b, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), i();
  };
  return bt(d), d;
}
let Ao = !1;
function Ll(e, t, o = {}) {
  const { window: a = tt, ignore: l = [], capture: n = !0, detectIframe: i = !1 } = o;
  if (!a)
    return;
  za && !Ao && (Ao = !0, Array.from(a.document.body.children).forEach((p) => p.addEventListener("click", yt)), a.document.documentElement.addEventListener("click", yt));
  let s = !0;
  const u = (p) => l.some((y) => {
    if (typeof y == "string")
      return Array.from(a.document.querySelectorAll(y)).some((b) => b === p.target || p.composedPath().includes(b));
    {
      const b = ut(y);
      return b && (p.target === b || p.composedPath().includes(b));
    }
  }), f = [
    Oe(a, "click", (p) => {
      const y = ut(e);
      if (!(!y || y === p.target || p.composedPath().includes(y))) {
        if (p.detail === 0 && (s = !u(p)), !s) {
          s = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: n }),
    Oe(a, "pointerdown", (p) => {
      const y = ut(e);
      s = !u(p) && !!(y && !p.composedPath().includes(y));
    }, { passive: !0 }),
    i && Oe(a, "blur", (p) => {
      setTimeout(() => {
        var y;
        const b = ut(e);
        ((y = a.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(b != null && b.contains(a.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function Bi(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function qe(...e) {
  let t, o, a = {};
  e.length === 3 ? (t = e[0], o = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], a = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: l = tt,
    eventName: n = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = a, u = Bi(t);
  return Oe(l, n, (f) => {
    f.repeat && Ke(s) || u(f) && o(f);
  }, i);
}
function Si() {
  const e = W(!1);
  return Ht() && st(() => {
    e.value = !0;
  }), e;
}
function Ci(e) {
  const t = Si();
  return w(() => (t.value, !!e()));
}
function wi(e, t = {}) {
  const { window: o = tt } = t, a = Ci(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let l;
  const n = W(!1), i = (d) => {
    n.value = d.matches;
  }, s = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", i) : l.removeListener(i));
  }, u = Xt(() => {
    a.value && (s(), l = o.matchMedia(Ke(e)), "addEventListener" in l ? l.addEventListener("change", i) : l.addListener(i), n.value = l.matches);
  });
  return bt(() => {
    u(), s(), l = void 0;
  }), n;
}
function ki(e) {
  return JSON.parse(JSON.stringify(e));
}
const aa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oa = "__vueuse_ssr_handlers__", $i = /* @__PURE__ */ Ti();
function Ti() {
  return oa in aa || (aa[oa] = aa[oa] || {}), aa[oa];
}
function oo(e, t) {
  return $i[e] || t;
}
function _i(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Vi = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Oo = "vueuse-storage";
function Ai(e, t, o, a = {}) {
  var l;
  const {
    flush: n = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: f,
    window: g = tt,
    eventFilter: p,
    onError: y = (T) => {
      console.error(T);
    },
    initOnMounted: b
  } = a, V = (f ? ua : W)(typeof t == "function" ? t() : t);
  if (!o)
    try {
      o = oo("getDefaultStorage", () => {
        var T;
        return (T = tt) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      y(T);
    }
  if (!o)
    return V;
  const C = Ke(t), c = _i(C), h = (l = a.serializer) != null ? l : Vi[c], { pause: B, resume: _ } = hi(
    V,
    () => k(V.value),
    { flush: n, deep: i, eventFilter: p }
  );
  return g && s && Nl(() => {
    Oe(g, "storage", I), Oe(g, Oo, $), b && I();
  }), b || I(), V;
  function k(T) {
    try {
      if (T == null)
        o.removeItem(e);
      else {
        const O = h.write(T), F = o.getItem(e);
        F !== O && (o.setItem(e, O), g && g.dispatchEvent(new CustomEvent(Oo, {
          detail: {
            key: e,
            oldValue: F,
            newValue: O,
            storageArea: o
          }
        })));
      }
    } catch (O) {
      y(O);
    }
  }
  function S(T) {
    const O = T ? T.newValue : o.getItem(e);
    if (O == null)
      return u && C !== null && o.setItem(e, h.write(C)), C;
    if (!T && d) {
      const F = h.read(O);
      return typeof d == "function" ? d(F, C) : c === "object" && !Array.isArray(F) ? { ...C, ...F } : F;
    } else
      return typeof O != "string" ? O : h.read(O);
  }
  function $(T) {
    I(T.detail);
  }
  function I(T) {
    if (!(T && T.storageArea !== o)) {
      if (T && T.key == null) {
        V.value = C;
        return;
      }
      if (!(T && T.key !== e)) {
        B();
        try {
          (T == null ? void 0 : T.newValue) !== h.write(V.value) && (V.value = S(T));
        } catch (O) {
          y(O);
        } finally {
          T ? Ne(_) : _();
        }
      }
    }
  }
}
function Oi(e) {
  return wi("(prefers-color-scheme: dark)", e);
}
function Ei(e = {}) {
  const {
    selector: t = "html",
    attribute: o = "class",
    initialValue: a = "auto",
    window: l = tt,
    storage: n,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: s = !0,
    storageRef: u,
    emitAuto: d,
    disableTransition: f = !0
  } = e, g = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, p = Oi({ window: l }), y = w(() => p.value ? "dark" : "light"), b = u || (i == null ? Pl(a) : Ai(i, a, n, { window: l, listenToStorageChanges: s })), V = w(() => b.value === "auto" ? y.value : b.value), C = oo(
    "updateHTMLAttrs",
    (_, k, S) => {
      const $ = typeof _ == "string" ? l == null ? void 0 : l.document.querySelector(_) : ut(_);
      if (!$)
        return;
      let I;
      if (f) {
        I = l.document.createElement("style");
        const T = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        I.appendChild(document.createTextNode(T)), l.document.head.appendChild(I);
      }
      if (k === "class") {
        const T = S.split(/\s/g);
        Object.values(g).flatMap((O) => (O || "").split(/\s/g)).filter(Boolean).forEach((O) => {
          T.includes(O) ? $.classList.add(O) : $.classList.remove(O);
        });
      } else
        $.setAttribute(k, S);
      f && (l.getComputedStyle(I).opacity, document.head.removeChild(I));
    }
  );
  function c(_) {
    var k;
    C(t, o, (k = g[_]) != null ? k : _);
  }
  function h(_) {
    e.onChanged ? e.onChanged(_, c) : c(_);
  }
  ue(V, h, { flush: "post", immediate: !0 }), Nl(() => h(V.value));
  const B = w({
    get() {
      return d ? b.value : V.value;
    },
    set(_) {
      b.value = _;
    }
  });
  try {
    return Object.assign(B, { store: b, system: y, state: V });
  } catch {
    return B;
  }
}
function lo(e, t = {}) {
  const {
    delayEnter: o = 0,
    delayLeave: a = 0,
    window: l = tt
  } = t, n = W(!1);
  let i;
  const s = (u) => {
    const d = u ? o : a;
    i && (clearTimeout(i), i = void 0), d ? i = setTimeout(() => n.value = u, d) : n.value = u;
  };
  return l && (Oe(e, "mouseenter", () => s(!0), { passive: !0 }), Oe(e, "mouseleave", () => s(!1), { passive: !0 })), n;
}
function xe(e, t = {}) {
  const { initialValue: o = !1, focusVisible: a = !1 } = t, l = W(!1), n = w(() => ut(e));
  Oe(n, "focus", (s) => {
    var u, d;
    (!a || (d = (u = s.target).matches) != null && d.call(u, ":focus-visible")) && (l.value = !0);
  }), Oe(n, "blur", () => l.value = !1);
  const i = w({
    get: () => l.value,
    set(s) {
      var u, d;
      !s && l.value ? (u = n.value) == null || u.blur() : s && !l.value && ((d = n.value) == null || d.focus());
    }
  });
  return ue(
    n,
    () => {
      i.value = o;
    },
    { immediate: !0, flush: "post" }
  ), { focused: i };
}
function Oa(e) {
  return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
const Pi = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Ni(e = {}) {
  const {
    type: t = "page",
    touch: o = !0,
    resetOnTouchEnds: a = !1,
    initialValue: l = { x: 0, y: 0 },
    window: n = tt,
    target: i = n,
    scroll: s = !0,
    eventFilter: u
  } = e;
  let d = null;
  const f = W(l.x), g = W(l.y), p = W(null), y = typeof t == "function" ? t : Pi[t], b = (k) => {
    const S = y(k);
    d = k, S && ([f.value, g.value] = S, p.value = "mouse");
  }, V = (k) => {
    if (k.touches.length > 0) {
      const S = y(k.touches[0]);
      S && ([f.value, g.value] = S, p.value = "touch");
    }
  }, C = () => {
    if (!d || !n)
      return;
    const k = y(d);
    d instanceof MouseEvent && k && (f.value = k[0] + n.scrollX, g.value = k[1] + n.scrollY);
  }, c = () => {
    f.value = l.x, g.value = l.y;
  }, h = u ? (k) => u(() => b(k), {}) : (k) => b(k), B = u ? (k) => u(() => V(k), {}) : (k) => V(k), _ = u ? () => u(() => C(), {}) : () => C();
  if (i) {
    const k = { passive: !0 };
    Oe(i, ["mousemove", "dragover"], h, k), o && t !== "movement" && (Oe(i, ["touchstart", "touchmove"], B, k), a && Oe(i, "touchend", c, k)), s && t === "page" && Oe(n, "scroll", _, { passive: !0 });
  }
  return {
    x: f,
    y: g,
    sourceType: p
  };
}
function Eo(e, t = {}) {
  const {
    handleOutside: o = !0,
    window: a = tt
  } = t, l = t.type || "page", { x: n, y: i, sourceType: s } = Ni(t), u = W(e ?? (a == null ? void 0 : a.document.body)), d = W(0), f = W(0), g = W(0), p = W(0), y = W(0), b = W(0), V = W(!0);
  let C = () => {
  };
  return a && (C = ue(
    [u, n, i],
    () => {
      const c = ut(u);
      if (!c)
        return;
      const {
        left: h,
        top: B,
        width: _,
        height: k
      } = c.getBoundingClientRect();
      g.value = h + (l === "page" ? a.pageXOffset : 0), p.value = B + (l === "page" ? a.pageYOffset : 0), y.value = k, b.value = _;
      const S = n.value - g.value, $ = i.value - p.value;
      V.value = _ === 0 || k === 0 || S < 0 || $ < 0 || S > _ || $ > k, (o || !V.value) && (d.value = S, f.value = $);
    },
    { immediate: !0 }
  ), Oe(document, "mouseleave", () => {
    V.value = !0;
  })), {
    x: n,
    y: i,
    sourceType: s,
    elementX: d,
    elementY: f,
    elementPositionX: g,
    elementPositionY: p,
    elementHeight: y,
    elementWidth: b,
    isOutside: V,
    stop: C
  };
}
function Fl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const o = e.parentNode;
    return !o || o.tagName === "BODY" ? !1 : Fl(o);
  }
}
function Ii(e) {
  const t = e || window.event, o = t.target;
  return Fl(o) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const la = /* @__PURE__ */ new WeakMap();
function Li(e, t = !1) {
  const o = W(t);
  let a = null, l;
  ue(Pl(e), (s) => {
    const u = Oa(Ke(s));
    if (u) {
      const d = u;
      la.get(d) || la.set(d, l), o.value && (d.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const n = () => {
    const s = Oa(Ke(e));
    !s || o.value || (za && (a = Oe(
      s,
      "touchmove",
      (u) => {
        Ii(u);
      },
      { passive: !1 }
    )), s.style.overflow = "hidden", o.value = !0);
  }, i = () => {
    var s;
    const u = Oa(Ke(e));
    !u || !o.value || (za && (a == null || a()), u.style.overflow = (s = la.get(u)) != null ? s : "", la.delete(u), o.value = !1);
  };
  return bt(i), w({
    get() {
      return o.value;
    },
    set(s) {
      s ? n() : i();
    }
  });
}
function Fi(e, t = {}) {
  const {
    threshold: o = 50,
    onSwipe: a,
    onSwipeEnd: l,
    onSwipeStart: n,
    passive: i = !0,
    window: s = tt
  } = t, u = da({ x: 0, y: 0 }), d = da({ x: 0, y: 0 }), f = w(() => u.x - d.x), g = w(() => u.y - d.y), { max: p, abs: y } = Math, b = w(() => p(y(f.value), y(g.value)) >= o), V = W(!1), C = w(() => b.value ? y(f.value) > y(g.value) ? f.value > 0 ? "left" : "right" : g.value > 0 ? "up" : "down" : "none"), c = (T) => [T.touches[0].clientX, T.touches[0].clientY], h = (T, O) => {
    u.x = T, u.y = O;
  }, B = (T, O) => {
    d.x = T, d.y = O;
  };
  let _;
  const k = Hi(s == null ? void 0 : s.document);
  i ? _ = k ? { passive: !0 } : { capture: !1 } : _ = k ? { passive: !1, capture: !0 } : { capture: !0 };
  const S = (T) => {
    V.value && (l == null || l(T, C.value)), V.value = !1;
  }, $ = [
    Oe(e, "touchstart", (T) => {
      if (T.touches.length !== 1)
        return;
      _.capture && !_.passive && T.preventDefault();
      const [O, F] = c(T);
      h(O, F), B(O, F), n == null || n(T);
    }, _),
    Oe(e, "touchmove", (T) => {
      if (T.touches.length !== 1)
        return;
      const [O, F] = c(T);
      B(O, F), !V.value && b.value && (V.value = !0), V.value && (a == null || a(T));
    }, _),
    Oe(e, ["touchend", "touchcancel"], S, _)
  ];
  return {
    isPassiveEventSupported: k,
    isSwiping: V,
    direction: C,
    coordsStart: u,
    coordsEnd: d,
    lengthX: f,
    lengthY: g,
    stop: () => $.forEach((T) => T())
  };
}
function Hi(e) {
  if (!e)
    return !1;
  let t = !1;
  const o = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", yt, o), e.removeEventListener("x", yt), t;
}
function ke(e, t, o, a = {}) {
  var l, n, i;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: d,
    deep: f = !1,
    defaultValue: g,
    shouldEmit: p
  } = a, y = Ht(), b = o || (y == null ? void 0 : y.emit) || ((l = y == null ? void 0 : y.$emit) == null ? void 0 : l.bind(y)) || ((i = (n = y == null ? void 0 : y.proxy) == null ? void 0 : n.$emit) == null ? void 0 : i.bind(y == null ? void 0 : y.proxy));
  let V = d;
  t || (t = "modelValue"), V = V || `update:${t.toString()}`;
  const C = (B) => s ? typeof s == "function" ? s(B) : ki(B) : B, c = () => ci(e[t]) ? C(e[t]) : g, h = (B) => {
    p ? p(B) && b(V, B) : b(V, B);
  };
  if (u) {
    const B = c(), _ = W(B);
    let k = !1;
    return ue(
      () => e[t],
      (S) => {
        k || (k = !0, _.value = C(S), Ne(() => k = !1));
      }
    ), ue(
      _,
      (S) => {
        !k && (S !== e[t] || f) && h(S);
      },
      { deep: f }
    ), _;
  } else
    return w({
      get() {
        return c();
      },
      set(B) {
        h(B);
      }
    });
}
const Zt = (e) => w(() => {
  const t = it(e);
  return t ? `justify-content-${t}` : "";
}), zi = (e) => typeof e == "boolean" || e === "" || e === "true" || e === "false", r = (e) => w(() => {
  const t = it(e);
  return zi(t) ? typeof t == "boolean" ? t : t === "" || t === "true" : t;
}), Ca = (e, t) => {
  const o = r(e), a = E(t);
  return w(
    () => o.value === !0 ? "true" : typeof o.value == "string" ? o.value : a.value === !1 ? "true" : o.value === !1 ? "false" : void 0
  );
}, Ct = (e, t) => {
  const o = E(t), a = E(e), l = E(() => Ji(a.value)), n = w(
    () => l.value ? fo(
      a.value,
      o.value ?? [
        "active",
        "activeClass",
        "append",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover"
      ]
    ) : {}
  );
  return { computedLink: l, computedLinkProps: n };
}, Hl = Al(() => {
  const e = da([]);
  return { items: e, reset: () => {
    e.splice(0, e.length);
  } };
}), Ri = (e = {}) => {
  const t = e.persist ?? !1, o = "data-bs-theme", a = "body";
  return Ei({
    attribute: o,
    selector: a,
    storageKey: t === !0 ? `bv-color-${e.attribute ?? o}-${e.selector ?? a}` : null,
    ...e
  });
}, Qe = (e) => w(() => {
  const t = it(e);
  return {
    [`text-bg-${t.variant}`]: t.variant !== null,
    [`text-${t.textVariant}`]: t.textVariant !== null && t.variant === null,
    [`bg-${t.bgVariant}`]: t.bgVariant !== null && t.variant === null
  };
}), xi = (e) => w(() => {
  const t = it(e);
  return {
    container: t === !0,
    [`container-${t}`]: typeof t == "string"
  };
}), zl = (e, t = W(1e3), o = {}) => {
  const a = Xe(E(e)), l = Xe(E(t)), n = W(!1), i = W(0), s = E(() => Math.ceil(a.value / l.value)), u = E(
    () => g.value || n.value ? Math.round(a.value - i.value * l.value) : 0
  ), { pause: d, resume: f, isActive: g } = Il(
    () => {
      i.value = i.value + 1;
    },
    t,
    o
  ), p = () => {
    n.value = !1, i.value = 0, f();
  }, y = () => {
    n.value = !1, i.value = s.value;
  };
  Xt(() => {
    i.value > s.value && (i.value = s.value), i.value === s.value && d();
  }), ue([l, a], () => {
    y(), p();
  });
  const b = () => {
    g.value !== !1 && (n.value = !0, d());
  }, V = () => {
    i.value !== s.value && (n.value = !1, f());
  };
  return {
    isActive: Xe(g),
    isPaused: Xe(n),
    restart: p,
    stop: y,
    pause: b,
    resume: V,
    value: u
  };
}, wt = (e) => w(() => {
  const t = it(e);
  return t === !0 ? "is-valid" : t === !1 ? "is-invalid" : null;
}), Rl = (e) => w(() => {
  const t = it(e);
  return {
    "form-check": t.plain === !1 && t.button === !1,
    "form-check-inline": t.inline === !0,
    "form-switch": t.switch === !0,
    [`form-control-${t.size}`]: t.size !== void 0 && t.size !== "md" && t.button === !1
  };
}), xl = (e) => {
  const t = E(e), o = wt(() => t.value.state ?? null);
  return w(() => [
    o.value,
    {
      "form-check-input": t.value.plain === !1 && t.value.button === !1,
      "btn-check": t.value.button === !0
    }
  ]);
}, Ml = (e) => w(() => {
  const t = it(e);
  return {
    "form-check-label": t.plain === !1 && t.button === !1,
    btn: t.button === !0,
    [`btn-${t.buttonVariant}`]: t.button === !0 && t.buttonVariant !== void 0 && t.buttonVariant !== null,
    [`btn-${t.size}`]: t.button && t.size && t.size !== "md"
  };
}), Dl = (e) => {
  const t = E(e), o = Ca(
    () => t.value.ariaInvalid,
    () => t.value.state
  );
  return w(() => ({
    "aria-invalid": o.value,
    "aria-required": t.value.required === !0 ? !0 : void 0
  }));
}, jl = (e) => w(() => {
  const t = it(e);
  return {
    "was-validated": t.validated === !0,
    "btn-group": t.buttons === !0 && t.stacked === !1,
    "btn-group-vertical": t.stacked === !0 && t.buttons === !0,
    [`btn-group-${t.size}`]: t.size !== void 0
  };
}), _e = (e, t) => w(() => it(e) || qt(t)), ql = (e, t) => {
  const o = W(null), a = ke(e, "modelValue", t), l = _e(() => e.id, "input"), n = r(() => e.autofocus), i = r(() => e.disabled), s = r(() => e.lazy), u = r(() => e.lazyFormatter), d = r(() => e.number), f = r(() => e.state), g = r(() => e.trim), p = he(() => e.debounce ?? 0), y = he(() => e.debounceMaxWait ?? NaN), b = bi(
    (T) => {
      a.value = T;
    },
    () => s.value === !0 ? 0 : p.value,
    { maxWait: () => s.value === !0 ? NaN : y.value }
  ), V = (T, O = !1) => {
    s.value === !0 && O === !1 || b(T);
  }, { focused: C } = xe(o, {
    initialValue: n.value
  }), c = (T, O, F = !1) => e.formatter !== void 0 && (!u.value || F) ? e.formatter(T, O) : T, h = (T) => g.value ? T.trim() : d.value ? Number.parseFloat(T) : T;
  st(() => {
    var T;
    o.value && (o.value.value = ((T = a.value) == null ? void 0 : T.toString()) ?? "");
  }), xn(() => {
    Ne(() => {
      n.value && (C.value = !0);
    });
  });
  const B = Ca(() => e.ariaInvalid, f);
  return {
    input: o,
    computedId: l,
    computedAriaInvalid: B,
    onInput: (T) => {
      const { value: O } = T.target, F = c(O, T);
      if (T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      const K = h(F);
      V(K), t("input", F);
    },
    onChange: (T) => {
      const { value: O } = T.target, F = c(O, T);
      if (T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      const K = h(F);
      a.value !== K && V(F, !0), t("change", F);
    },
    onBlur: (T) => {
      if (t("blur", T), !s.value && !u.value)
        return;
      const { value: O } = T.target, F = c(O, T, !0), K = h(F);
      a.value !== K && V(F, !0);
    },
    focus: () => {
      i.value || (C.value = !0);
    },
    blur: () => {
      i.value || (C.value = !1);
    }
  };
}, Vt = (e, t) => {
  if (!e)
    return e;
  if (t in e)
    return e[t];
  const o = t.split(".");
  return Vt(e[o[0]], o.splice(1).join("."));
}, Ea = (e, t = null, o, a) => {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    const l = Vt(e, a.valueField), n = Vt(e, a.textField), i = Vt(e, a.htmlField), s = Vt(e, a.disabledField), u = e[a.optionsField] || null;
    return u !== null ? {
      label: String(Vt(e, a.labelField) || n),
      options: no(u, o, a)
    } : {
      value: typeof l > "u" ? t || n : l,
      text: String(typeof n > "u" ? t : n),
      html: i,
      disabled: !!s
    };
  }
  return {
    value: t || e,
    text: String(e),
    disabled: !1
  };
}, no = (e, t, o) => Array.isArray(e) ? e.map((a) => Ea(a, null, t, o)) : Object.prototype.toString.call(e) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(e).map((a) => {
  const l = e[a];
  switch (typeof l) {
    case "object":
      return Ea(l.text, String(l.value), t, o);
    default:
      return Ea(l, String(a), t, o);
  }
})) : [], Pa = "modal-open", so = di(() => {
  const e = ua([]), t = E(() => e.value.length), o = E(() => e.value[e.value.length - 1]), a = (f) => {
    e.value = [...e.value, f];
  }, l = (f) => {
    e.value = e.value.filter((g) => g.uid !== f.uid);
  }, n = ua([]), i = (f) => {
    n.value = [...n.value, f];
  }, s = (f) => {
    n.value = n.value.filter((g) => g.uid !== f.uid);
  }, u = (f) => {
    l(f), s(f);
  }, d = oo("updateHTMLAttrs", (f, g, p) => {
    const y = typeof f == "string" ? window == null ? void 0 : window.document.querySelector(f) : ut(f);
    y && (g === "class" ? y.classList.toggle(Pa, p === Pa) : y.setAttribute(g, p));
  });
  return bt(() => {
    d("body", "class", "");
  }), ue(t, (f) => {
    d("body", "class", f > 0 ? Pa : "");
  }), {
    registry: n,
    stack: e,
    lastStack: o,
    countStack: t,
    pushStack: a,
    removeStack: l,
    pushRegistry: i,
    removeRegistry: s,
    dispose: u
  };
}), Mi = (e) => {
  const { pushRegistry: t, pushStack: o, removeStack: a, stack: l, dispose: n, countStack: i } = so(), s = Ht();
  if (!s || s.type.__name !== "BModal")
    throw new Error("useModalManager must only use in BModal component");
  return t(s), bt(() => {
    n(s);
  }), ue(
    e,
    (u, d) => {
      u ? o(s) : d && !u && a(s);
    },
    { immediate: !0 }
  ), {
    activePosition: w(
      () => l.value.findIndex((u) => {
        var d, f;
        return ((d = u.exposed) == null ? void 0 : d.id) === ((f = s.exposed) == null ? void 0 : f.id);
      })
    ),
    activeModalCount: i
  };
}, Di = (e = void 0) => {
  const { registry: t } = so(), o = Ht(), a = w(() => {
    const n = it(e);
    return n ? t.value.find((i) => {
      var s;
      return ((s = i.exposed) == null ? void 0 : s.id.value) === n;
    }) || null : o ? Gl(o) : null;
  }), l = E(() => {
    var n;
    return (n = a.value) == null ? void 0 : n.proxy;
  });
  return {
    show() {
      var n, i;
      (i = (n = a.value) == null ? void 0 : n.exposed) == null || i.show();
    },
    hide(n = "") {
      var i, s;
      (s = (i = a.value) == null ? void 0 : i.exposed) == null || s.hide(n);
    },
    modal: l
  };
}, Gl = (e) => e.parent ? e.parent.type.__name === "BModal" ? e.parent : Gl(e.parent) : null, ji = () => {
  const { lastStack: e, stack: t } = so();
  return {
    hide: (l = "") => {
      var n;
      e.value && ((n = e.value.exposed) == null || n.hide(l));
    },
    hideAll: (l = "") => {
      var n;
      for (const i of t.value)
        (n = i.exposed) == null || n.hide(l);
    }
    // Todo: Supports listening events globally in the future
  };
}, io = (e) => {
  const t = (u, d) => {
    const f = d === null ? "" : `${d}-`;
    return u === "circle" ? `${f}rounded-circle` : u === "pill" ? `${f}rounded-pill` : typeof u == "number" || u === "0" || u === "1" || u === "2" || u === "3" || u === "4" || u === "5" ? `${f}rounded-${u}` : u === "none" ? `${f}rounded-0` : u === "sm" ? `${f}rounded-1` : u === "lg" ? `${f}rounded-5` : `${f}rounded`;
  }, o = Xe(E(e)), a = r(() => o.value.rounded), l = r(() => o.value.roundedTop), n = r(() => o.value.roundedBottom), i = r(() => o.value.roundedStart), s = r(() => o.value.roundedEnd);
  return w(() => ({
    [`${t(a.value, null)}`]: !!a.value,
    [`${t(l.value, "top")}`]: !!l.value,
    [`${t(n.value, "bottom")}`]: !!n.value,
    [`${t(i.value, "start")}`]: !!i.value,
    [`${t(s.value, "end")}`]: !!s.value
  }));
}, Wl = (e, t) => {
  const o = Xe(E(e)), a = Xe(E(t)), l = E(() => !a.value);
  st(() => {
    const n = Li(
      document.body,
      o.value && l.value
    );
    ue([o, l], ([i, s]) => {
      n.value = i && s;
    });
  });
}, qi = "top-right", Ul = Al(() => {
  const e = W([]);
  return { toasts: e, show: (...[a, l]) => {
    const n = { pos: qi };
    typeof a == "string" ? Object.assign(n, l, {
      body: a,
      value: (l == null ? void 0 : l.value) || 5e3
    }) : Object.assign(n, a, { value: a.value || 5e3 });
    const i = Symbol();
    return e.value.push({ ...n, self: i }), i;
  }, hide: (a) => {
    const l = e.value.findIndex((n) => n.self === a);
    l !== -1 && e.value.splice(l, 1);
  } };
}), Gi = ["id"], Wi = ["innerHTML"], Ui = ["innerHTML"], ro = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BPopover",
  props: {
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    click: { type: [String, Boolean], default: !1 },
    container: { default: void 0 },
    content: { default: void 0 },
    customClass: { default: "" },
    delay: { default: () => ({ show: 100, hide: 300 }) },
    floatingMiddleware: { default: void 0 },
    hide: { type: [String, Boolean], default: void 0 },
    html: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: !1 },
    manual: { type: [String, Boolean], default: !1 },
    modelValue: { type: [String, Boolean], default: !1 },
    noAutoClose: { type: [String, Boolean], default: !1 },
    noFade: { type: [String, Boolean], default: !1 },
    noFlip: { type: [String, Boolean], default: !1 },
    noHide: { type: [String, Boolean], default: !1 },
    noShift: { type: [String, Boolean], default: !1 },
    noSize: { type: [String, Boolean], default: !1 },
    noninteractive: { type: [String, Boolean], default: !1 },
    offset: { default: null },
    placement: { default: "top" },
    persistent: { type: [String, Boolean], default: !1 },
    realtime: { type: [String, Boolean], default: !1 },
    reference: { default: null },
    strategy: { default: "absolute" },
    target: { default: null },
    title: { default: void 0 },
    tooltip: { type: [String, Boolean], default: !1 },
    variant: { default: null }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = r(() => a.modelValue), i = W(n.value), s = W(n.value);
    Xt(() => {
      l("update:modelValue", i.value);
    }), ue(n, () => {
      n.value !== i.value && (n.value ? me() : de(new Event("update:modelValue")));
    });
    const u = _e(() => a.id, "popover"), d = r(() => a.click), f = r(() => a.manual), g = r(() => a.noShift), p = r(() => a.noSize), y = r(() => a.noFlip), b = r(() => a.noFade), V = r(() => a.noAutoClose), C = r(() => a.noHide), c = r(() => a.realtime), h = r(() => a.inline), B = r(() => a.persistent), _ = r(() => a.tooltip), k = r(() => a.noninteractive), S = r(() => a.html), $ = W(!1), I = W(null), T = W(null), O = W(null), F = W(null), K = W(null), z = w(
      () => a.title ? Ot(a.title, At) : ""
    ), P = w(
      () => a.content ? Ot(a.content, At) : ""
    ), D = E(() => a.placement.startsWith("auto")), ae = he(() => a.offset ?? NaN), le = w(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), ve = w(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), Be = W({}), Ve = w(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const Y = a.offset !== null ? ae.value : _.value ? 6 : 8, re = [gl(Y)];
      return y.value === !1 && !D.value && re.push(
        pl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), D.value && re.push(
        Ls({
          alignment: a.placement.split("-")[1] || void 0,
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), g.value === !1 && re.push(
        bl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), C.value === !1 && re.push(
        Fs({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), h.value === !0 && re.push(zs()), re.push(li({ element: O, padding: 10 })), p.value === !1 && re.push(
        yl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: Ae, availableHeight: He }) {
            Be.value = {
              maxHeight: He ? `${He}px` : void 0,
              maxWidth: Ae ? `${Ae}px` : void 0
            };
          }
        })
      ), re;
    }), oe = E(
      () => D.value ? void 0 : a.placement
    ), { floatingStyles: fe, middlewareData: $e, placement: we, update: M } = Vl(T, I, {
      placement: oe,
      middleware: Ve,
      strategy: E(() => a.strategy),
      whileElementsMounted: (...Y) => Tl(...Y, { animationFrame: c.value })
    }), L = W({ position: "absolute" });
    ue($e, () => {
      var Y;
      if (C.value === !1 && ((Y = $e.value.hide) != null && Y.referenceHidden ? $.value = !0 : $.value = !1), $e.value.arrow) {
        const { x: re, y: Ae } = $e.value.arrow;
        L.value = {
          position: "absolute",
          top: Ae ? `${Ae}px` : "",
          left: re ? `${re}px` : ""
        };
      }
    });
    const U = w(() => {
      const Y = _.value ? "tooltip" : "popover";
      return [
        Y,
        `b-${Y}`,
        {
          [`b-${Y}-${a.variant}`]: a.variant !== null,
          show: i.value && !$.value,
          "pe-none": !i.value,
          fade: !b.value,
          "d-none": !i.value && b.value,
          [`${a.customClass}`]: a.customClass !== void 0,
          [`bs-${Y}-${Ki(we.value)}`]: we.value !== void 0
        }
      ];
    }), { isOutside: H } = Eo(I), { isOutside: G } = Eo(F), X = (Y) => {
      const re = Y ?? new Event("click");
      i.value ? de(re) : me();
    }, te = (Y, re = {}) => new Rt(Y, {
      cancelable: !1,
      target: I.value || null,
      relatedTarget: null,
      trigger: null,
      ...re,
      componentId: u.value
    });
    let be;
    const me = () => {
      const Y = te("show", { cancelable: !0 });
      if (l("show", Y), Y.defaultPrevented) {
        l("show-prevented");
        return;
      }
      s.value = !0, Ne(() => {
        var re;
        M(), be = setTimeout(
          () => {
            M(), i.value = !0, Ne(() => {
              l("shown", te("shown"));
            });
          },
          typeof a.delay == "number" ? a.delay : ((re = a.delay) == null ? void 0 : re.show) || 0
        );
      });
    }, de = (Y) => {
      var He;
      const re = te("hide", { cancelable: !0 });
      if (l("hide", re), re.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      be && (clearTimeout(be), be = void 0);
      const Ae = typeof a.delay == "number" ? a.delay : ((He = a.delay) == null ? void 0 : He.hide) || 0;
      setTimeout(() => {
        var Re, kt;
        (Y == null ? void 0 : Y.type) === "click" || (Y == null ? void 0 : Y.type) === "forceHide" || (Y == null ? void 0 : Y.type) === "update:modelValue" && f.value || !k.value && H.value && G.value && !((Re = I.value) != null && Re.contains(document == null ? void 0 : document.activeElement)) && !((kt = F.value) != null && kt.contains(document == null ? void 0 : document.activeElement)) || k.value && G.value ? (i.value = !1, Ne(() => {
          setTimeout(
            () => {
              s.value = !1;
            },
            I.value ? La(I.value) : 150
          ), l("hidden", te("hidden"));
        })) : setTimeout(
          () => {
            de(Y);
          },
          Ae < 50 ? 50 : Ae
        );
      }, Ae);
    };
    t({
      hide: de,
      show: me,
      toggle: X
    });
    const ie = (Y) => {
      const re = v(Y);
      if (re) {
        if (typeof re == "string") {
          const Ae = document.getElementById(re);
          return Ae || void 0;
        }
        return re.$el ? re.$el : re;
      }
    }, ce = () => {
      var Y;
      if (a.target) {
        const re = ie(a.target);
        re ? F.value = re : console.warn("Target element not found", a.target);
      } else
        F.value = (Y = K.value) == null ? void 0 : Y.nextElementSibling;
      if (a.reference) {
        const re = ie(a.reference);
        re ? T.value = re : console.warn("Reference element not found", a.reference);
      } else
        T.value = F.value;
      if (!(!F.value || f.value) && Ka) {
        if (F.value.addEventListener("forceHide", de), d.value) {
          F.value.addEventListener("click", X);
          return;
        }
        F.value.addEventListener("pointerenter", me), F.value.addEventListener("pointerleave", de), F.value.addEventListener("focus", me), F.value.addEventListener("blur", de);
      }
    }, Ce = () => {
      F.value && (F.value.removeEventListener("forceHide", de), F.value.removeEventListener("click", X), F.value.removeEventListener("pointerenter", me), F.value.removeEventListener("pointerleave", de), F.value.removeEventListener("focus", me), F.value.removeEventListener("blur", de));
    };
    return Ll(
      I,
      () => {
        i.value && d.value && !V.value && !f.value && de(new Event("clickOutside"));
      },
      { ignore: [F] }
    ), ue([() => a.click, () => a.target, () => a.reference], () => {
      Ce(), ce();
    }), st(ce), Wa(Ce), (Y, re) => (m(), N(ge, null, [
      ee("span", {
        ref_key: "placeholder",
        ref: K
      }, null, 512),
      A(Y.$slots, "target", {
        show: me,
        hide: de,
        toggle: X,
        showState: i.value
      }),
      (m(), x(zt, {
        to: Y.container,
        disabled: !Y.container
      }, [
        s.value || v(B) ? (m(), N("div", Q({
          key: 0,
          id: Y.id
        }, Y.$attrs, {
          ref_key: "element",
          ref: I,
          class: U.value,
          role: "tooltip",
          tabindex: "-1",
          style: v(fe)
        }), [
          ee("div", {
            ref_key: "arrow",
            ref: O,
            class: j(`${v(_) ? "tooltip" : "popover"}-arrow`),
            style: ze(L.value),
            "data-popper-arrow": ""
          }, null, 6),
          ee("div", {
            class: "overflow-auto",
            style: ze(Be.value)
          }, [
            Y.title || Y.$slots.title ? (m(), N(ge, { key: 0 }, [
              v(S) ? (m(), N("div", {
                key: 1,
                class: j(["position-sticky top-0", v(_) ? "tooltip-inner" : "popover-header"]),
                innerHTML: z.value
              }, null, 10, Wi)) : (m(), N("div", {
                key: 0,
                class: j(["position-sticky top-0", v(_) ? "tooltip-inner" : "popover-header"])
              }, [
                A(Y.$slots, "title", {}, () => [
                  ne(Z(Y.title), 1)
                ])
              ], 2))
            ], 64)) : J("", !0),
            v(_) && !Y.$slots.title && !Y.title || !v(_) ? (m(), N(ge, { key: 1 }, [
              v(S) ? (m(), N("div", {
                key: 1,
                class: j(v(_) ? "tooltip-inner" : "popover-body"),
                innerHTML: P.value
              }, null, 10, Ui)) : (m(), N("div", {
                key: 0,
                class: j(v(_) ? "tooltip-inner" : "popover-body")
              }, [
                A(Y.$slots, "default", {}, () => [
                  ne(Z(Y.content), 1)
                ])
              ], 2))
            ], 64)) : J("", !0)
          ], 4)
        ], 16, Gi)) : J("", !0)
      ], 8, ["to", "disabled"]))
    ], 64));
  }
}), Xi = ({
  top: e,
  end: t,
  start: o,
  alignCenter: a,
  alignEnd: l
}) => {
  const n = e ? "top" : o ? "left" : t ? "right" : "bottom", i = l ? "end" : a ? null : "start";
  return `${n}${i ? `-${i}` : ""}`;
}, Ki = (e) => {
  const [t] = e.split("-");
  switch (t) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return t;
  }
}, Ut = (e) => typeof e != "object" || e.active !== !1, ga = (e, t) => {
  if (!Ut(e))
    return {};
  const a = typeof e > "u" || typeof e == "object" && !e.title && !e.content, l = t.getAttribute("title") || t.getAttribute("data-original-title");
  return a ? l ? (t.removeAttribute("title"), t.setAttribute("data-original-title", l), {
    content: Ot(l, At)
  }) : {} : typeof e == "string" ? {
    content: Ot(e, At)
  } : {
    title: e != null && e.title ? Ot(e == null ? void 0 : e.title, At) : void 0,
    content: e != null && e.content ? Ot(e == null ? void 0 : e.content, At) : void 0
  };
}, Nt = (e, t) => ({
  target: t,
  modelValue: e.modifiers.show,
  inline: e.modifiers.inline,
  click: e.modifiers.click,
  realtime: e.modifiers.realtime,
  persistent: e.modifiers.persistent,
  placement: e.modifiers.left ? "left" : e.modifiers.right ? "right" : e.modifiers.bottom ? "bottom" : e.modifiers.top ? "top" : void 0,
  html: !0,
  ...typeof e.value == "object" ? e.value : {},
  title: null,
  content: null
}), ba = (e, t) => {
  var a;
  const o = document.createElement("span");
  t.modifiers.body ? document.body.appendChild(o) : t.modifiers.child ? e.appendChild(o) : (a = e.parentNode) == null || a.insertBefore(o, e.nextSibling), e.$__app = Mn({ render: () => {
    var l;
    return Le(ro, { ...(l = e.$__state) == null ? void 0 : l.value });
  } }), e.$__app.mount(o), e.$__element = o;
}, Xl = (e) => {
  var o;
  const t = e.$__element;
  (o = e.$__app) == null || o.unmount(), delete e.$__app, delete e.$__state, setTimeout(() => {
    t == null || t.remove();
  }, 0), delete e.$__element;
}, wa = (e, t, o) => t.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((a, l) => (a[e ? `${e}${l.charAt(0).toUpperCase() + l.slice(1)}` : l] = o, a), /* @__PURE__ */ Object.create(null)), Kl = (e, t, o, a = o) => Object.keys(t).reduce((l, n) => (e[n] && l.push(
  [a, n.replace(o, ""), e[n]].filter((i) => i && typeof i != "boolean").join("-").toLowerCase()
), l), []), ia = (e) => typeof e == "string" ? bo(e) : e.label !== void 0 ? e.label : typeof e.key == "string" ? bo(e.key) : e.key, qt = (e = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${e}__`, Yi = (e, t) => ((e == null ? void 0 : e()) ?? []).reduce((o, a) => (typeof a.type == "symbol" ? o = o.concat(a.children) : o.push(a), o), []).filter((o) => {
  var a;
  return ((a = o.type) == null ? void 0 : a.__name) === t;
}), Po = (e) => e !== null && typeof e == "object", Zi = (e) => /^[0-9]*\.?[0-9]+$/.test(String(e)), Ji = (e) => !!(e.href || e.to), Yl = Symbol("carousel"), Zl = Symbol("tabs"), Jl = Symbol("progress"), Ql = Symbol("listGroup"), en = Symbol("avatarGroup"), tn = Symbol("accordion"), an = Symbol("checkboxGroup"), on = Symbol("radioGroup"), uo = Symbol("collapse"), ln = Symbol("collapse"), co = Symbol("navbar"), jt = (e, t = {}, o = {}) => {
  const a = [e];
  let l;
  for (let n = 0; n < a.length && !l; n++) {
    const i = a[n];
    l = o[i];
  }
  return l && typeof l == "function" ? l(t) : l;
}, Qi = (e, t = NaN) => {
  const o = Number.parseInt(e, 10);
  return Number.isNaN(o) ? t : o;
}, er = (e, t = NaN) => {
  const o = Number.parseFloat(e.toString());
  return Number.isNaN(o) ? t : o;
}, nn = (e, t) => Object.keys(e).filter((o) => !t.map((a) => a.toString()).includes(o)).reduce((o, a) => ({ ...o, [a]: e[a] }), {}), fo = (e, t) => [...t].reduce(
  (o, a) => (o[a] = e[a], o),
  {}
), No = (e, t, o) => {
  const a = t.split(/[.[\]]/g);
  let l = e;
  for (const n of a) {
    if (l === null || l === void 0)
      return o;
    n.trim() !== "" && (l = l[n]);
  }
  return l === void 0 ? o : l;
}, Io = (e, t) => {
  const { all: o, ...a } = e, l = {};
  o && t.forEach((i) => {
    l[i] = o;
  });
  const n = { ...l, ...a };
  return Object.entries(n).filter(([i, s]) => !!s && t.includes(i)).map(([i]) => i);
}, Lo = (e, t) => t + (e ? ts(e) : ""), tr = ["id"], ar = /* @__PURE__ */ q({
  __name: "BAccordion",
  props: {
    flush: { type: [String, Boolean], default: !1 },
    free: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    modelValue: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = ke(o, "modelValue", t, { passive: !0 }), n = _e(() => o.id, "accordion"), i = r(() => o.flush), s = r(() => o.free), u = w(() => ({
      "accordion-flush": i.value
    }));
    return at(tn, {
      openItem: Xe(l),
      free: s,
      setOpenItem: (d) => {
        l.value = d;
      }
    }), (d, f) => (m(), N("div", {
      id: v(n),
      class: j(["accordion", u.value])
    }, [
      A(d.$slots, "default")
    ], 10, tr));
  }
}), sn = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BCollapse",
  props: {
    horizontal: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: !1 },
    modelValue: { type: [String, Boolean], default: !1 },
    skipAnimation: { type: [String, Boolean], default: !1 },
    tag: { default: "div" },
    toggle: { type: [String, Boolean], default: !1 },
    visible: { type: [String, Boolean], default: !1 }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = (O, F = {}) => new Rt(O, {
      cancelable: !1,
      target: b.value || null,
      relatedTarget: null,
      trigger: null,
      ...F,
      componentId: y.value
    }), i = ke(a, "modelValue", l, { passive: !0 }), s = r(i), u = r(() => a.toggle), d = r(() => a.horizontal), f = r(() => a.isNav), g = r(() => a.visible), p = r(() => a.skipAnimation), y = _e(() => a.id, "collapse"), b = W(null), V = W(!1), C = W(s.value), c = w(() => ({
      show: C.value,
      "navbar-collapse": f.value,
      collapsing: V.value,
      closing: C.value && !s.value,
      "collapse-horizontal": d.value
    })), h = () => {
      i.value = !1;
    }, B = () => {
      i.value = !0;
    }, _ = () => {
      i.value = !s.value;
    };
    let k, S, $ = p.value;
    const I = () => {
      const O = n("show", { cancelable: !0 });
      if (l("show", O), O.defaultPrevented) {
        l("show-prevented");
        return;
      }
      clearTimeout(S), clearTimeout(k), C.value = !0, !$ && (V.value = !0, Ne(() => {
        b.value !== null && (d.value ? b.value.style.width = `${b.value.scrollWidth}px` : b.value.style.height = `${b.value.scrollHeight}px`, k = setTimeout(() => {
          V.value = !1, l("shown"), b.value !== null && (b.value.style.height = "", b.value.style.width = "");
        }, La(b.value)));
      }));
    }, T = () => {
      const O = n("hide", { cancelable: !0 });
      if (l("hide", O), O.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      if (clearTimeout(k), clearTimeout(S), b.value !== null) {
        if ($) {
          C.value = !1;
          return;
        }
        V.value ? (b.value.style.height = "", b.value.style.width = "") : d.value ? b.value.style.width = `${b.value.scrollWidth}px` : b.value.style.height = `${b.value.scrollHeight}px`, b.value.offsetHeight, V.value = !0, Ne(() => {
          b.value !== null && (b.value.style.height = "", b.value.style.width = "", S = setTimeout(() => {
            C.value = !1, V.value = !1, l("hidden");
          }, La(b.value)));
        });
      }
    };
    return ue(i, () => {
      s.value ? I() : T();
    }), st(() => {
      b.value !== null && !s.value && u.value && Ne(() => {
        i.value = !0;
      });
    }), ue(p, (O) => {
      $ = O;
    }), g.value && ($ = !0, i.value = !0, Ne(() => {
      $ = p.value;
    })), ue(g, (O) => {
      $ = !0, O ? B() : h(), Ne(() => {
        $ = p.value;
      });
    }), Oe(b, "bv-toggle", () => {
      i.value = !s.value;
    }), t({
      close: h,
      isNav: f,
      open: B,
      toggle: _,
      visible: Xe(C)
    }), at(uo, {
      id: y,
      close: h,
      open: B,
      toggle: _,
      visible: Xe(C),
      isNav: f
    }), (O, F) => (m(), N(ge, null, [
      A(O.$slots, "header", {
        id: v(y),
        visible: v(s),
        toggle: _,
        open: B,
        close: h
      }),
      (m(), x(se(O.tag), Q({
        id: v(y),
        ref_key: "element",
        ref: b,
        class: ["collapse", c.value],
        "is-nav": v(f)
      }, O.$attrs), {
        default: R(() => [
          A(O.$slots, "default", {
            visible: v(s),
            toggle: _,
            open: B,
            close: h
          })
        ]),
        _: 3
      }, 16, ["id", "class", "is-nav"])),
      A(O.$slots, "footer", {
        id: v(y),
        visible: v(s),
        toggle: _,
        open: B,
        close: h
      })
    ], 64));
  }
}), or = ["aria-expanded", "aria-controls", "onClick"], lr = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BAccordionItem",
  props: {
    bodyAttrs: { default: void 0 },
    bodyClass: { default: void 0 },
    buttonAttrs: { default: void 0 },
    buttonClass: { default: void 0 },
    collapseClass: { default: void 0 },
    headerAttrs: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "h2" },
    horizontal: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: void 0 },
    modelValue: { type: Boolean, default: !1 },
    tag: { default: void 0 },
    title: { default: void 0 },
    toggle: { type: [String, Boolean], default: void 0 },
    visible: { type: [String, Boolean], default: !1 },
    wrapperAttrs: { default: void 0 }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { emit: t }) {
    const { class: o, ...a } = Kt(), l = e, n = t, i = ke(l, "modelValue", n, { passive: !0 }), s = Ge(tn, null), u = _e(() => l.id, "accordion_item");
    return st(() => {
      i.value && !(s != null && s.free.value) && (s == null || s.setOpenItem(u.value)), !i.value && (s == null ? void 0 : s.openItem.value) === u.value && (i.value = !0);
    }), ue(
      () => s == null ? void 0 : s.openItem.value,
      () => i.value = (s == null ? void 0 : s.openItem.value) === u.value && !(s != null && s.free.value)
    ), ue(i, () => {
      i.value && !(s != null && s.free.value) && (s == null || s.setOpenItem(u.value));
    }), (d, f) => (m(), N("div", Q({ class: "accordion-item" }, d.wrapperAttrs, { class: v(o) }), [
      ye(sn, Q({
        id: v(u),
        modelValue: v(i),
        "onUpdate:modelValue": f[0] || (f[0] = (g) => ol(i) ? i.value = g : null),
        class: ["accordion-collapse", d.collapseClass],
        "aria-labelledby": `${v(u)}-heading`
      }, a, {
        tag: d.tag,
        toggle: d.toggle,
        horizontal: d.horizontal,
        visible: d.visible,
        "is-nav": d.isNav,
        onShow: f[1] || (f[1] = (g) => n("show", g)),
        onShown: f[2] || (f[2] = (g) => n("shown")),
        onHide: f[3] || (f[3] = (g) => n("hide", g)),
        onHidden: f[4] || (f[4] = (g) => n("hidden")),
        onHidePrevented: f[5] || (f[5] = (g) => n("hide-prevented")),
        onShowPrevented: f[6] || (f[6] = (g) => n("show-prevented"))
      }), {
        header: R(({ visible: g, toggle: p }) => [
          (m(), x(se(d.headerTag), Q({
            id: `${v(u)}-heading`,
            class: ["accordion-header", d.headerClass]
          }, d.headerAttrs), {
            default: R(() => [
              ee("button", Q({ class: "accordion-button" }, d.buttonAttrs, {
                class: [{ collapsed: !g }, d.buttonClass],
                type: "button",
                "aria-expanded": g ? "true" : "false",
                "aria-controls": v(u),
                onClick: p
              }), [
                A(d.$slots, "title", {}, () => [
                  ne(Z(d.title), 1)
                ])
              ], 16, or)
            ]),
            _: 2
          }, 1040, ["id", "class"]))
        ]),
        default: R(() => [
          ee("div", Q({ class: "accordion-body" }, d.bodyAttrs, { class: d.bodyClass }), [
            A(d.$slots, "default")
          ], 16)
        ]),
        _: 3
      }, 16, ["id", "modelValue", "class", "aria-labelledby", "tag", "toggle", "horizontal", "visible", "is-nav"])
    ], 16));
  }
}), Mt = /* @__PURE__ */ q({
  __name: "BTransition",
  props: {
    appear: { type: [String, Boolean], default: !1 },
    mode: { default: void 0 },
    noFade: { type: [String, Boolean], default: !1 },
    transProps: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.appear), a = r(() => t.noFade), l = w(() => {
      const s = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, u = {
        ...s,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return a.value ? s : u;
    }), n = w(() => ({ mode: t.mode, css: !0, ...l.value })), i = w(
      () => t.transProps !== void 0 ? {
        // Order matters here since the props.transProps would get overwritten if it came first
        // But the goal of props.transProps is to overwrite base properties
        ...n.value,
        ...t.transProps
      } : o.value ? {
        ...n.value,
        appear: !0,
        appearActiveClass: l.value.enterActiveClass,
        appearToClass: l.value.enterToClass
      } : n.value
    );
    return (s, u) => (m(), x(Dn, Se(Ee(i.value)), {
      default: R(() => [
        A(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
const nr = ["type", "disabled", "aria-label"], Dt = /* @__PURE__ */ q({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { type: [String, Boolean], default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled);
    return (n, i) => (m(), N("button", {
      type: n.type,
      class: "btn-close",
      disabled: v(l),
      "aria-label": n.ariaLabel,
      onClick: i[0] || (i[0] = (s) => a("click", s))
    }, null, 8, nr));
  }
}), sr = {
  key: 0,
  class: "visually-hidden"
}, ka = /* @__PURE__ */ q({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: [String, Boolean], default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = Me(), a = r(() => t.small), l = w(() => [
      `spinner-${t.type}`,
      {
        [`spinner-${t.type}-sm`]: a.value,
        [`text-${t.variant}`]: t.variant !== null
      }
    ]), n = E(() => !Ie(o.label));
    return (i, s) => (m(), x(se(i.tag), {
      class: j(l.value),
      role: i.label || n.value ? i.role : null,
      "aria-hidden": i.label || n.value ? null : !0
    }, {
      default: R(() => [
        i.label || n.value ? (m(), N("span", sr, [
          A(i.$slots, "label", {}, () => [
            ne(Z(i.label), 1)
          ])
        ])) : J("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), Fo = "active", rt = /* @__PURE__ */ q({
  __name: "BLink",
  props: {
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: "router-link-active" },
    append: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    exactActiveClass: { default: "router-link-exact-active" },
    event: { default: "click" },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: !1 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: !1 },
    routerComponentName: { default: "router-link" },
    routerTag: { default: "a" },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null },
    variant: { default: null }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = Kt(), n = r(() => o.active), i = r(() => o.icon);
    r(() => o.append);
    const s = r(() => o.disabled);
    r(() => o.replace);
    const u = Ge(uo, null), d = Ge(co, null), f = Ht(), g = w(() => {
      const c = o.routerComponentName.split("-").map((B) => B.charAt(0).toUpperCase() + B.slice(1)).join("");
      return !((f == null ? void 0 : f.appContext.app.component(c)) !== void 0) || s.value || !o.to ? "a" : o.routerComponentName;
    }), p = w(() => {
      const c = "#";
      if (o.href)
        return o.href;
      if (typeof o.to == "string")
        return o.to || c;
      const { to: h } = o;
      if (h !== void 0 && "path" in h) {
        const B = h.path || "", _ = h.query ? `?${Object.keys(h.query).map((S) => {
          var $;
          return `${S}=${($ = h.query) == null ? void 0 : $[S]}`;
        }).join("=")}` : "", k = !h.hash || h.hash.charAt(0) === "#" ? h.hash || "" : `#${h.hash}`;
        return `${B}${_}${k}` || c;
      }
      return c;
    }), y = w(() => ({
      [`link-${o.variant}`]: o.variant !== null,
      [`link-opacity-${o.opacity}`]: o.opacity !== void 0,
      [`link-opacity-${o.opacityHover}-hover`]: o.opacityHover !== void 0,
      [`link-underline-${o.underlineVariant}`]: o.underlineVariant !== null,
      [`link-offset-${o.underlineOffset}`]: o.underlineOffset !== void 0,
      [`link-offset-${o.underlineOffsetHover}-hover`]: o.underlineOffsetHover !== void 0,
      [`link-underline-opacity-${o.underlineOpacity}`]: o.underlineOpacity !== void 0,
      [`link-underline-opacity-${o.underlineOpacityHover}-hover`]: o.underlineOpacityHover !== void 0,
      "icon-link": i.value === !0
    })), b = w(() => ({
      class: y.value,
      to: o.to,
      href: p.value,
      target: o.target,
      rel: o.target === "_blank" ? o.rel ?? "noopener" : void 0,
      tabindex: s.value ? "-1" : typeof l.tabindex > "u" ? null : l.tabindex,
      "aria-disabled": s.value ? !0 : null
    })), V = w(() => ({
      [Fo]: n.value,
      disabled: s.value
    })), C = (c) => {
      var h, B, _;
      if (s.value) {
        c.preventDefault(), c.stopImmediatePropagation();
        return;
      }
      (((h = u == null ? void 0 : u.isNav) == null ? void 0 : h.value) === !0 && d === null || d !== null && ((B = d.autoClose) == null ? void 0 : B.value) === !0) && ((_ = u == null ? void 0 : u.close) == null || _.call(u)), a("click", c);
    };
    return (c, h) => g.value === "router-link" ? (m(), x(se(g.value), Q({ key: 0 }, b.value, { custom: "" }), {
      default: R(({ href: B, navigate: _, isActive: k, isExactActive: S }) => [
        (m(), x(se(c.routerTag), Q({
          href: B,
          class: {
            [Fo]: v(n),
            [c.activeClass]: k,
            [c.exactActiveClass]: S
          }
        }, c.$attrs, {
          onClick: ($) => {
            _($), C($);
          }
        }), {
          default: R(() => [
            A(c.$slots, "default")
          ]),
          _: 2
        }, 1040, ["href", "class", "onClick"]))
      ]),
      _: 3
    }, 16)) : (m(), x(se(g.value), Q({
      key: 1,
      class: V.value
    }, b.value, { onClick: C }), {
      default: R(() => [
        A(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pt = /* @__PURE__ */ q({
  __name: "BButton",
  props: {
    loading: { type: [String, Boolean], default: !1 },
    loadingFill: { type: [String, Boolean], default: !1 },
    loadingText: { default: "Loading..." },
    pill: { type: [String, Boolean], default: !1 },
    pressed: { type: [String, Boolean], default: void 0 },
    size: { default: "md" },
    squared: { type: [String, Boolean], default: !1 },
    tag: { default: "button" },
    type: { default: "button" },
    variant: { default: "secondary" },
    active: { type: [String, Boolean], default: !1 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    event: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    routerTag: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = ke(o, "pressed", a), n = r(() => o.active), i = r(() => o.disabled), s = r(() => o.pill), u = r(() => o.pressed), d = r(() => o.squared), f = r(() => o.loading), g = r(() => o.loadingFill), { computedLink: p, computedLinkProps: y } = Ct(o, [
      "active-class",
      "exact-active-class",
      "event",
      "replace",
      "router-component-name",
      "router-tag"
    ]), b = E(() => typeof u.value == "boolean"), V = E(
      () => o.tag === "button" && o.href === void 0 && o.to === void 0
    ), C = E(() => o.to !== void 0), c = E(() => o.href !== void 0 ? !1 : !V.value), h = w(() => C.value ? y.value : []), B = w(() => [
      [`btn-${o.size}`],
      {
        [`btn-${o.variant}`]: o.variant !== null,
        active: n.value || u.value,
        "rounded-pill": s.value,
        "rounded-0": d.value,
        disabled: i.value
      }
    ]), _ = E(() => C.value ? rt : o.href ? "a" : o.tag), k = (S) => {
      if (i.value) {
        S.preventDefault(), S.stopPropagation();
        return;
      }
      a("click", S), b.value && (l.value = !u.value);
    };
    return (S, $) => (m(), x(se(_.value), Q({ class: "btn" }, h.value, {
      class: B.value,
      "aria-disabled": c.value ? v(i) : null,
      "aria-pressed": b.value ? v(u) : null,
      autocomplete: b.value ? "off" : null,
      disabled: V.value ? v(i) : null,
      href: S.href,
      rel: v(p) ? S.rel : null,
      role: c.value || v(p) ? "button" : null,
      target: v(p) ? S.target : null,
      type: V.value ? S.type : null,
      to: V.value ? null : S.to,
      append: v(p) ? S.append : null,
      onClick: k
    }), {
      default: R(() => [
        v(f) ? A(S.$slots, "loading", { key: 0 }, () => [
          v(g) ? J("", !0) : (m(), N(ge, { key: 0 }, [
            ne(Z(S.loadingText), 1)
          ], 64)),
          A(S.$slots, "loading-spinner", {}, () => [
            ye(ka, {
              small: S.size !== "lg",
              label: v(g) ? S.loadingText : void 0
            }, null, 8, ["small", "label"])
          ])
        ]) : A(S.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to", "append"]));
  }
}), ir = /* @__PURE__ */ q({
  __name: "BAlert",
  props: {
    closeClass: { default: void 0 },
    closeContent: { default: void 0 },
    closeLabel: { default: "Close" },
    closeVariant: { default: "secondary" },
    dismissible: { type: [String, Boolean], default: !1 },
    fade: { type: [String, Boolean], default: !1 },
    immediate: { type: [String, Boolean], default: !0 },
    interval: { default: 1e3 },
    modelValue: { type: [Boolean, Number], default: !1 },
    noHoverPause: { type: [String, Boolean], default: !1 },
    showOnPause: { type: [String, Boolean], default: !0 },
    variant: { default: "info" }
  },
  emits: ["close", "close-countdown", "closed", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = W(null), s = ke(a, "modelValue", l), u = lo(i), d = r(() => a.dismissible), f = r(() => a.fade), g = r(() => a.immediate), p = r(() => a.showOnPause), y = r(() => a.noHoverPause), b = he(() => a.interval), V = E(() => !Ie(n.close)), C = E(() => typeof s.value == "boolean" ? 0 : s.value), c = w(() => ({
      [`alert-${a.variant}`]: a.variant !== null,
      "alert-dismissible": d.value
    })), h = w(() => [a.closeClass, { "btn-close-custom": V.value }]), {
      isActive: B,
      pause: _,
      restart: k,
      resume: S,
      stop: $,
      isPaused: I,
      value: T
    } = zl(C, b, {
      immediate: typeof s.value == "number" && g.value
    }), O = E(
      () => typeof s.value == "boolean" ? s.value : B.value || p.value && I.value
    ), F = w(() => ({
      variant: V.value ? a.closeVariant : void 0,
      class: h.value
    }));
    Xt(() => {
      l("close-countdown", T.value);
    });
    const K = () => {
      l("close"), typeof s.value == "boolean" ? s.value = !1 : (s.value = 0, $()), l("closed");
    }, z = () => {
      y.value || _();
    };
    return ue(u, (P) => {
      if (P) {
        z();
        return;
      }
      S();
    }), Wa($), t({
      pause: _,
      restart: k,
      resume: S,
      stop: $
    }), (P, D) => (m(), x(Mt, {
      "no-fade": !v(f),
      "trans-props": { enterToClass: "show" }
    }, {
      default: R(() => [
        O.value ? (m(), N("div", {
          key: 0,
          ref_key: "element",
          ref: i,
          class: j(["alert", c.value]),
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true"
        }, [
          A(P.$slots, "default", {}, void 0, !0),
          v(d) ? (m(), N(ge, { key: 0 }, [
            V.value || P.closeContent ? (m(), x(pt, Q({ key: 0 }, F.value, { onClick: K }), {
              default: R(() => [
                A(P.$slots, "close", {}, () => [
                  ne(Z(P.closeContent), 1)
                ], !0)
              ]),
              _: 3
            }, 16)) : (m(), x(Dt, Q({
              key: 1,
              "aria-label": P.closeLabel
            }, F.value, { onClick: K }), null, 16, ["aria-label"]))
          ], 64)) : J("", !0)
        ], 2)) : J("", !0)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
});
const $a = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, rr = /* @__PURE__ */ $a(ir, [["__scopeId", "data-v-5c1cb500"]]), ur = {
  key: 0,
  class: "b-avatar-custom"
}, dr = {
  key: 1,
  class: "b-avatar-img"
}, cr = ["src", "alt"], Ra = (e) => {
  const t = typeof e == "string" && Zi(e) ? er(e, 0) : e;
  return typeof t == "number" ? `${t}px` : t || null;
}, fr = /* @__PURE__ */ q({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    badge: { type: [Boolean, String], default: !1 },
    badgeBgVariant: { default: null },
    badgeOffset: { default: void 0 },
    badgeStart: { type: [String, Boolean], default: !1 },
    badgeTextVariant: { default: null },
    badgeTop: { type: [String, Boolean], default: !1 },
    badgeVariant: { default: "primary" },
    button: { type: [String, Boolean], default: !1 },
    buttonType: { default: "button" },
    icon: { type: [String, Boolean], default: void 0 },
    size: { default: void 0 },
    square: { type: [String, Boolean], default: !1 },
    src: { default: void 0 },
    text: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [String, Number, Boolean], default: !1 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  emits: ["click", "img-error"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = Me(), { computedLink: n, computedLinkProps: i } = Ct(o), s = Ge(en, null), u = ["sm", null, "lg"], d = 0.4, f = d * 0.7, g = r(() => o.badgeStart), p = r(() => o.badgeTop), y = r(() => o.button), b = r(() => o.disabled), V = r(() => o.square), C = r(() => o.rounded), c = r(() => o.roundedTop), h = r(() => o.roundedBottom), B = r(() => o.roundedStart), _ = r(() => o.roundedEnd), k = E(() => !Ie(l.default)), S = E(() => !Ie(l.badge)), $ = E(() => !!o.badge || o.badge === "" || S.value), I = E(() => (s == null ? void 0 : s.size.value) ?? V.value), T = E(() => (s == null ? void 0 : s.size.value) ?? Ra(o.size)), O = E(() => (s == null ? void 0 : s.variant.value) ?? o.variant), F = E(() => (s == null ? void 0 : s.rounded.value) ?? C.value), K = E(() => (s == null ? void 0 : s.roundedTop.value) ?? c.value), z = E(
      () => (s == null ? void 0 : s.roundedBottom.value) ?? h.value
    ), P = E(
      () => (s == null ? void 0 : s.roundedStart.value) ?? B.value
    ), D = E(() => (s == null ? void 0 : s.roundedEnd.value) ?? _.value), ae = io(() => ({
      rounded: F.value,
      roundedTop: K.value,
      roundedBottom: z.value,
      roundedStart: P.value,
      roundedEnd: D.value
    })), le = Qe(() => ({
      variant: o.badgeVariant,
      bgVariant: o.badgeBgVariant,
      textVariant: o.badgeTextVariant
    })), ve = E(() => o.badge === !0 ? "" : o.badge), Be = E(() => (s == null ? void 0 : s.textVariant.value) ?? o.textVariant), Ve = E(() => (s == null ? void 0 : s.bgVariant.value) ?? o.bgVariant), oe = Qe(() => ({
      bgVariant: Ve.value,
      textVariant: Be.value,
      variant: O.value
    })), fe = w(() => [
      oe.value,
      // Square overwrites all else
      I.value === !0 ? void 0 : ae.value,
      {
        [`b-avatar-${o.size}`]: !!o.size && u.indexOf(Ra(o.size)) !== -1,
        [`btn-${O.value}`]: y.value ? O.value !== null : !1,
        badge: !y.value && O.value !== null && k.value,
        btn: y.value,
        // Square is the same as rounded-0 class
        "rounded-0": I.value === !0
      }
    ]), $e = w(() => {
      const X = o.badgeOffset || "0px";
      return {
        fontSize: (u.indexOf(T.value || null) === -1 ? `calc(${T.value} * ${f})` : "") || "",
        top: p.value ? X : "",
        bottom: p.value ? "" : X,
        left: g.value ? X : "",
        right: g.value ? "" : X
      };
    }), we = w(() => {
      const X = u.indexOf(T.value || null) === -1 ? `calc(${T.value} * ${d})` : null;
      return X ? { fontSize: X } : {};
    }), M = w(() => {
      var be;
      const X = ((be = s == null ? void 0 : s.overlapScale) == null ? void 0 : be.value) || 0, te = T.value && X ? `calc(${T.value} * -${X})` : null;
      return te ? { marginLeft: te, marginRight: te } : {};
    }), L = E(
      () => n.value ? rt : y.value ? "button" : "span"
    ), U = w(() => ({
      ...M.value,
      width: T.value ?? void 0,
      height: T.value ?? void 0
    })), H = (X) => {
      !b.value && (n.value || y.value) && a("click", X);
    }, G = (X) => {
      a("img-error", X);
    };
    return (X, te) => (m(), x(se(L.value), Q({
      class: ["b-avatar", fe.value],
      style: U.value
    }, v(i), {
      type: v(y) && !v(n) ? o.buttonType : void 0,
      disabled: v(b) || null,
      onClick: H
    }), {
      default: R(() => [
        k.value ? (m(), N("span", ur, [
          A(X.$slots, "default")
        ])) : X.src ? (m(), N("span", dr, [
          ee("img", {
            src: X.src,
            alt: X.alt,
            onError: G
          }, null, 40, cr)
        ])) : X.text ? (m(), N("span", {
          key: 2,
          class: "b-avatar-text",
          style: ze(we.value)
        }, Z(X.text), 5)) : J("", !0),
        $.value ? (m(), N("span", {
          key: 3,
          class: j(["b-avatar-badge", v(le)]),
          style: ze($e.value)
        }, [
          A(X.$slots, "badge", {}, () => [
            ne(Z(ve.value), 1)
          ])
        ], 6)) : J("", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "type", "disabled"]));
  }
}), vr = /* @__PURE__ */ q({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    size: { default: void 0 },
    square: { type: [String, Boolean], default: !1 },
    tag: { default: "div" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [String, Number, Boolean], default: !1 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.square), a = r(() => t.rounded), l = r(() => t.roundedTop), n = r(() => t.roundedBottom), i = r(() => t.roundedStart), s = r(() => t.roundedEnd), u = he(() => t.overlap), d = w(() => Ra(t.size)), f = E(() => Math.min(Math.max(u.value, 0), 1) / 2), g = w(() => {
      const p = d.value ? `calc(${d.value} * ${f.value})` : null;
      return p ? { paddingLeft: p, paddingRight: p } : {};
    });
    return at(en, {
      overlapScale: f,
      size: E(() => t.size),
      square: o,
      rounded: a,
      roundedTop: l,
      roundedBottom: n,
      roundedStart: i,
      roundedEnd: s,
      variant: E(() => t.variant),
      bgVariant: E(() => t.bgVariant),
      textVariant: E(() => t.textVariant)
    }), (p, y) => (m(), x(se(p.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: R(() => [
        ee("div", {
          class: "b-avatar-group-inner",
          style: ze(g.value)
        }, [
          A(p.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), pr = /* @__PURE__ */ q({
  __name: "BBadge",
  props: {
    dotIndicator: { type: [String, Boolean], default: !1 },
    pill: { type: [String, Boolean], default: !1 },
    tag: { default: "span" },
    textIndicator: { type: [String, Boolean], default: !1 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.pill), a = r(() => t.textIndicator), l = r(() => t.dotIndicator), n = r(() => t.active), i = r(() => t.disabled), s = Qe(t), { computedLink: u, computedLinkProps: d } = Ct(t, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), f = E(() => u.value ? rt : t.tag), g = w(() => [
      s.value,
      {
        active: n.value,
        disabled: i.value,
        "rounded-pill": o.value,
        "position-absolute top-0 start-100 translate-middle": a.value || l.value,
        "p-2 border border-light rounded-circle": l.value,
        "text-decoration-none": u.value
      }
    ]);
    return (p, y) => (m(), x(se(f.value), Q({
      class: ["badge", g.value]
    }, v(d)), {
      default: R(() => [
        A(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rn = /* @__PURE__ */ q({
  __name: "BBreadcrumbItem",
  props: {
    ariaCurrent: { default: "location" },
    text: { default: void 0 },
    active: { type: [String, Boolean], default: !1 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.active), n = r(() => o.disabled), i = w(() => ({
      active: l.value
    })), s = E(() => l.value ? "span" : rt), u = E(() => l.value ? o.ariaCurrent : void 0), d = w(
      () => s.value !== "span" ? fo(o, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "icon"
      ]) : {}
    ), f = (g) => {
      if (n.value || l.value) {
        g.preventDefault(), g.stopImmediatePropagation();
        return;
      }
      n.value || a("click", g);
    };
    return (g, p) => (m(), N("li", {
      class: j(["breadcrumb-item", i.value])
    }, [
      (m(), x(se(s.value), Q({ "aria-current": u.value }, d.value, { onClick: f }), {
        default: R(() => [
          A(g.$slots, "default", {}, () => [
            ne(Z(g.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["aria-current"]))
    ], 2));
  }
}), mr = { "aria-label": "breadcrumb" }, gr = { class: "breadcrumb" }, br = /* @__PURE__ */ q({
  __name: "BBreadcrumb",
  props: {
    items: { default: void 0 }
  },
  setup(e) {
    const t = e, o = Hl(), a = w(() => {
      const l = t.items || (o == null ? void 0 : o.items) || [];
      let n = !1;
      return l.map((s, u) => (typeof s == "string" && (s = { text: s }, u < l.length - 1 && (s.href = "#")), s.active && (n = !0), !s.active && !n && (s.active = u + 1 === l.length), s));
    });
    return (l, n) => (m(), N("nav", mr, [
      ee("ol", gr, [
        A(l.$slots, "prepend"),
        (m(!0), N(ge, null, Te(a.value, (i, s) => (m(), x(rn, Q({ key: s }, i), {
          default: R(() => [
            ne(Z(i.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        A(l.$slots, "default"),
        A(l.$slots, "append")
      ])
    ]));
  }
}), yr = /* @__PURE__ */ q({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: { default: "md" },
    tag: { default: "div" },
    vertical: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.vertical), a = w(() => ({
      "btn-group": !o.value,
      [`btn-group-${t.size}`]: t.size !== "md",
      "btn-group-vertical": o.value
    }));
    return (l, n) => (m(), x(se(l.tag), {
      class: j(a.value),
      role: "group",
      "aria-label": l.ariaLabel
    }, {
      default: R(() => [
        A(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), hr = ["role", "aria-label"], Br = /* @__PURE__ */ q({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { type: [String, Boolean], default: !1 },
    role: { default: "toolbar" }
  },
  setup(e) {
    const t = e, o = r(() => t.justify), a = w(() => ({
      "justify-content-between": o.value
    }));
    return (l, n) => (m(), N("div", {
      class: j([a.value, "btn-toolbar"]),
      role: l.role,
      "aria-label": l.ariaLabel
    }, [
      A(l.$slots, "default")
    ], 10, hr));
  }
}), Sr = ["src", "width", "height", "srcset", "sizes", "loading"], vo = /* @__PURE__ */ q({
  __name: "BImg",
  props: {
    blank: { type: [String, Boolean], default: !1 },
    blankColor: { default: "transparent" },
    block: { type: [String, Boolean], default: !1 },
    center: { type: [String, Boolean], default: !1 },
    end: { type: [String, Boolean], default: !1 },
    fluid: { type: [String, Boolean], default: !1 },
    fluidGrow: { type: [String, Boolean], default: !1 },
    height: { default: void 0 },
    lazy: { type: [String, Boolean], default: !1 },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    start: { type: [String, Boolean], default: !1 },
    thumbnail: { type: [String, Boolean], default: !1 },
    width: { default: void 0 },
    rounded: { type: [String, Number, Boolean], default: !1 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.lazy), a = r(() => t.blank), l = r(() => t.block), n = r(() => t.center), i = r(() => t.fluid), s = r(() => t.fluidGrow), u = r(() => t.start), d = r(() => t.end), f = r(() => t.thumbnail), g = he(() => t.height ?? NaN), p = he(() => t.width ?? NaN), y = r(() => t.rounded), b = r(() => t.roundedTop), V = r(() => t.roundedBottom), C = r(() => t.roundedStart), c = r(() => t.roundedEnd), h = io(() => ({
      rounded: y.value,
      roundedTop: b.value,
      roundedBottom: V.value,
      roundedStart: C.value,
      roundedEnd: c.value
    })), B = w(
      () => typeof t.srcset == "string" ? t.srcset.split(",").filter((O) => O).join(",") : Array.isArray(t.srcset) ? t.srcset.filter((O) => O).join(",") : void 0
    ), _ = w(
      () => typeof t.sizes == "string" ? t.sizes.split(",").filter((O) => O).join(",") : Array.isArray(t.sizes) ? t.sizes.filter((O) => O).join(",") : void 0
    ), k = w(() => {
      const O = Number.isNaN(p.value) ? void 0 : p.value, F = Number.isNaN(g.value) ? void 0 : g.value;
      return a.value ? O !== void 0 && F === void 0 ? { height: O, width: O } : O === void 0 && F !== void 0 ? { height: F, width: F } : { height: 1, width: 1 } : {
        width: O,
        height: F
      };
    }), S = E(
      () => T(k.value.width, k.value.height, t.blankColor)
    ), $ = E(
      () => u.value ? "float-start" : d.value ? "float-end" : n.value ? "mx-auto" : void 0
    ), I = w(() => [
      h.value,
      {
        "img-thumbnail": f.value,
        "img-fluid": i.value || s.value,
        "w-100": s.value,
        [`${$.value}`]: $.value !== void 0,
        "d-block": l.value || n.value
      }
    ]), T = (O, F, K) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${O}" height="${F}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${O} ${F}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${K};"></rect>
    </svg>`)}`;
    return (O, F) => (m(), N("img", {
      class: j(I.value),
      src: v(a) ? S.value : O.src,
      width: k.value.width || void 0,
      height: k.value.height || void 0,
      srcset: v(a) ? void 0 : B.value,
      sizes: v(a) ? void 0 : _.value,
      loading: v(o) ? "lazy" : "eager"
    }, null, 10, Sr));
  }
}), ya = /* @__PURE__ */ q({
  __name: "BCardImg",
  props: {
    bottom: { type: [String, Boolean], default: !1 },
    top: { type: [String, Boolean], default: !1 },
    blank: { type: [String, Boolean], default: void 0 },
    blankColor: { default: void 0 },
    block: { type: [String, Boolean], default: void 0 },
    center: { type: [String, Boolean], default: void 0 },
    end: { type: [String, Boolean], default: void 0 },
    fluid: { type: [String, Boolean], default: void 0 },
    fluidGrow: { type: [String, Boolean], default: void 0 },
    height: { default: void 0 },
    lazy: { type: [String, Boolean], default: void 0 },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    start: { type: [String, Boolean], default: void 0 },
    thumbnail: { type: [String, Boolean], default: void 0 },
    width: { default: void 0 },
    rounded: { type: [String, Number, Boolean], default: void 0 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.bottom), a = r(() => t.end), l = r(() => t.start), n = r(() => t.top), i = E(
      () => n.value ? "card-img-top" : a.value ? "card-img-right" : o.value ? "card-img-bottom" : l.value ? "card-img-left" : "card-img"
    ), s = w(() => nn(t, ["bottom", "top", "end", "start"]));
    return (u, d) => (m(), x(vo, Q(s.value, { class: i.value }), null, 16, ["class"]));
  }
}), Cr = ["innerHTML"], un = /* @__PURE__ */ q({
  __name: "BCardHeadFoot",
  props: {
    borderVariant: { default: null },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = Qe(t), a = w(() => [
      o.value,
      {
        [`border-${t.borderVariant}`]: t.borderVariant !== null
      }
    ]);
    return (l, n) => (m(), x(se(l.tag), {
      class: j(a.value)
    }, {
      default: R(() => [
        l.html ? (m(), N("div", {
          key: 0,
          innerHTML: l.html
        }, null, 8, Cr)) : A(l.$slots, "default", { key: 1 }, () => [
          ne(Z(l.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dn = /* @__PURE__ */ q({
  __name: "BCardHeader",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e;
    return (o, a) => (m(), x(un, Q({ class: "card-header" }, t), {
      default: R(() => [
        A(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cn = /* @__PURE__ */ q({
  __name: "BCardTitle",
  props: {
    tag: { default: "h4" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (m(), x(se(t.tag), { class: "card-title" }, {
      default: R(() => [
        A(t.$slots, "default", {}, () => [
          ne(Z(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), fn = /* @__PURE__ */ q({
  __name: "BCardSubtitle",
  props: {
    text: { default: void 0 },
    tag: { default: "h6" },
    textVariant: { default: "body-secondary" }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== null
    }));
    return (a, l) => (m(), x(se(a.tag), {
      class: j(["card-subtitle mb-2", o.value])
    }, {
      default: R(() => [
        A(a.$slots, "default", {}, () => [
          ne(Z(a.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vn = /* @__PURE__ */ q({
  __name: "BCardBody",
  props: {
    overlay: { type: [String, Boolean], default: !1 },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h4" },
    subtitleTextVariant: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = Me(), a = r(() => t.overlay), l = Qe(t), n = E(() => !Ie(o.title)), i = E(() => !Ie(o.subtitle)), s = w(() => [
      l.value,
      {
        "card-img-overlay": a.value
      }
    ]);
    return (u, d) => (m(), x(se(u.tag), {
      class: j(["card-body", s.value])
    }, {
      default: R(() => [
        u.title || n.value ? (m(), x(cn, {
          key: 0,
          tag: u.titleTag
        }, {
          default: R(() => [
            A(u.$slots, "title", {}, () => [
              ne(Z(u.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : J("", !0),
        u.subtitle || i.value ? (m(), x(fn, {
          key: 1,
          tag: u.subtitleTag,
          "text-variant": u.subtitleTextVariant
        }, {
          default: R(() => [
            A(u.$slots, "subtitle", {}, () => [
              ne(Z(u.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : J("", !0),
        A(u.$slots, "default", {}, () => [
          ne(Z(u.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pn = /* @__PURE__ */ q({
  __name: "BCardFooter",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e;
    return (o, a) => (m(), x(un, Q({ class: "card-footer" }, t), {
      default: R(() => [
        A(o.$slots, "default", {}, () => [
          ne(Z(o.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), mn = /* @__PURE__ */ q({
  __name: "BCard",
  props: {
    align: { default: void 0 },
    bodyBgVariant: { default: void 0 },
    bodyClass: { default: void 0 },
    bodyTag: { default: "div" },
    bodyText: { default: "" },
    bodyTextVariant: { default: void 0 },
    borderVariant: { default: null },
    footer: { default: void 0 },
    footerBgVariant: { default: void 0 },
    footerBorderVariant: { default: void 0 },
    footerClass: { default: void 0 },
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: { default: void 0 },
    footerVariant: { default: null },
    header: { default: void 0 },
    headerBgVariant: { default: void 0 },
    headerBorderVariant: { default: void 0 },
    headerClass: { default: void 0 },
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: { default: void 0 },
    headerVariant: { default: null },
    imgAlt: { default: void 0 },
    imgBottom: { type: [String, Boolean], default: !1 },
    imgEnd: { type: [String, Boolean], default: !1 },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgStart: { type: [String, Boolean], default: !1 },
    imgTop: { type: [String, Boolean], default: !1 },
    imgWidth: { default: void 0 },
    noBody: { type: [String, Boolean], default: !1 },
    overlay: { type: [String, Boolean], default: !1 },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "body-secondary" },
    tag: { default: "div" },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = Me(), a = r(() => t.imgBottom), l = r(() => t.imgEnd), n = r(() => t.imgStart), i = r(() => t.noBody), s = E(() => !Ie(o.header)), u = E(() => !Ie(o.footer)), d = Qe(t), f = w(() => [
      d.value,
      {
        [`text-${t.align}`]: t.align !== void 0,
        [`border-${t.borderVariant}`]: t.borderVariant !== null,
        "flex-row": n.value,
        "flex-row-reverse": l.value
      }
    ]), g = w(() => ({
      src: t.imgSrc,
      alt: t.imgAlt,
      height: t.imgHeight,
      width: t.imgWidth,
      bottom: t.imgBottom,
      end: t.imgEnd,
      start: t.imgStart,
      top: t.imgTop
    }));
    return (p, y) => (m(), x(se(p.tag), {
      class: j(["card", f.value])
    }, {
      default: R(() => [
        v(a) ? J("", !0) : A(p.$slots, "img", { key: 0 }, () => [
          p.imgSrc ? (m(), x(ya, Se(Q({ key: 0 }, g.value)), null, 16)) : J("", !0)
        ]),
        p.header || s.value || p.headerHtml ? (m(), x(dn, {
          key: 1,
          "bg-variant": p.headerBgVariant,
          variant: p.headerVariant,
          "border-variant": p.headerBorderVariant,
          html: p.headerHtml,
          tag: p.headerTag,
          "text-variant": p.headerTextVariant,
          class: j(p.headerClass)
        }, {
          default: R(() => [
            A(p.$slots, "header", {}, () => [
              ne(Z(p.header), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "variant", "border-variant", "html", "tag", "text-variant", "class"])) : J("", !0),
        v(i) ? A(p.$slots, "default", { key: 3 }, () => [
          ne(Z(p.bodyText), 1)
        ]) : (m(), x(vn, {
          key: 2,
          overlay: p.overlay,
          "bg-variant": p.bodyBgVariant,
          tag: p.bodyTag,
          "text-variant": p.bodyTextVariant,
          subtitle: p.subtitle,
          "subtitle-tag": p.subtitleTag,
          "subtitle-text-variant": p.subtitleTextVariant,
          title: p.title,
          "title-tag": p.titleTag,
          class: j(p.bodyClass)
        }, {
          default: R(() => [
            A(p.$slots, "default", {}, () => [
              ne(Z(p.bodyText), 1)
            ])
          ]),
          _: 3
        }, 8, ["overlay", "bg-variant", "tag", "text-variant", "subtitle", "subtitle-tag", "subtitle-text-variant", "title", "title-tag", "class"])),
        p.footer || u.value || p.footerHtml ? (m(), x(pn, {
          key: 4,
          "bg-variant": p.footerBgVariant,
          "border-variant": p.footerBorderVariant,
          variant: p.footerVariant,
          html: p.footerHtml,
          tag: p.footerTag,
          "text-variant": p.footerTextVariant,
          class: j(p.footerClass)
        }, {
          default: R(() => [
            A(p.$slots, "footer", {}, () => [
              ne(Z(p.footer), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "border-variant", "variant", "html", "tag", "text-variant", "class"])) : J("", !0),
        v(a) ? A(p.$slots, "img", { key: 5 }, () => [
          p.imgSrc ? (m(), x(ya, Se(Q({ key: 0 }, g.value)), null, 16)) : J("", !0)
        ]) : J("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wr = /* @__PURE__ */ q({
  __name: "BCardGroup",
  props: {
    columns: { type: [String, Boolean], default: !1 },
    deck: { type: [String, Boolean], default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = r(() => t.columns), a = r(() => t.deck), l = E(
      () => a.value ? "card-deck" : o.value ? "card-columns" : "card-group"
    );
    return (n, i) => (m(), x(se(n.tag), {
      class: j(l.value)
    }, {
      default: R(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), kr = /* @__PURE__ */ q({
  __name: "BCardText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (m(), x(se(t.tag), { class: "card-text" }, {
      default: R(() => [
        A(t.$slots, "default", {}, () => [
          ne(Z(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), $r = ["id"], Tr = {
  key: 0,
  class: "carousel-indicators"
}, _r = ["aria-current", "aria-label", "onClick"], Vr = /* @__PURE__ */ ee("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), Ar = { class: "visually-hidden" }, Or = /* @__PURE__ */ ee("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), Er = { class: "visually-hidden" }, Pr = /* @__PURE__ */ q({
  __name: "BCarousel",
  props: {
    background: { default: void 0 },
    controls: { type: [String, Boolean], default: !1 },
    controlsNextText: { default: "Next" },
    controlsPrevText: { default: "Previous" },
    fade: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    imgHeight: { default: void 0 },
    imgWidth: { default: void 0 },
    indicators: { type: [String, Boolean], default: !1 },
    indicatorsButtonLabel: { default: "Slide" },
    interval: { default: 5e3 },
    keyboard: { type: [String, Boolean], default: !0 },
    modelValue: { default: 0 },
    noHoverPause: { type: [String, Boolean], default: !1 },
    noTouch: { type: [String, Boolean], default: !1 },
    noWrap: { type: [String, Boolean], default: !1 },
    ride: { type: [String, Boolean], default: !1 },
    rideReverse: { type: [String, Boolean], default: !1 },
    touchThreshold: { default: 50 }
  },
  emits: ["slide", "slid", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = _e(() => a.id, "carousel"), s = ke(a, "modelValue", l, { passive: !0 }), u = r(() => a.keyboard), d = r(() => a.rideReverse), f = r(() => a.noHoverPause), g = r(() => a.fade), p = r(() => a.controls), y = r(() => a.indicators), b = r(() => a.noTouch), V = r(() => a.noWrap), C = he(() => a.touchThreshold), c = he(() => a.interval), h = r(() => a.ride), B = W(!1), _ = W(!1), k = W(!0), S = W(null), $ = W(null), I = W(s.value), T = lo($), O = E(
      () => `carousel-item carousel-item-${k.value ? "prev" : "next"} carousel-item-${k.value ? "end" : "start"}`
    ), F = E(
      () => `carousel-item active carousel-item-${k.value ? "start" : "end"}`
    ), { pause: K, resume: z } = Il(
      () => {
        d.value ? Be() : Ve();
      },
      c,
      { immediate: h.value === "carousel" }
    ), P = E(
      () => h.value === !0 && _.value === !0 || h.value === "carousel"
    ), D = w(() => Yi(n.default, "BCarouselSlide")), ae = w(() => ({ "carousel-fade": g.value })), le = (H) => {
      var G;
      return new ll(H, {
        componentId: i.value,
        cancelable: !1,
        target: $.value,
        direction: k.value ? "right" : "left",
        from: I.value,
        to: s.value,
        relatedTarget: ((G = S.value) == null ? void 0 : G.children[s.value]) ?? null
      });
    }, ve = (H) => {
      if (B.value !== !0) {
        if (h.value === !0 && (_.value = !0), P.value === !0 && z(), k.value = !(H < s.value), H >= D.value.length) {
          if (V.value)
            return;
          s.value = 0;
          return;
        }
        if (H < 0) {
          if (V.value)
            return;
          s.value = D.value.length - 1;
          return;
        }
        I.value = s.value, s.value = H;
      }
    }, Be = () => {
      ve(s.value - 1);
    }, Ve = () => {
      ve(s.value + 1);
    }, oe = (H) => {
      u.value !== !1 && H();
    }, fe = () => {
      f.value || K();
    }, $e = () => {
      P.value && z();
    }, { lengthX: we } = Fi($, {
      passive: !0,
      onSwipeStart() {
        b.value !== !0 && K();
      },
      onSwipeEnd() {
        if (b.value === !0)
          return;
        const H = () => {
          P.value !== !1 && z();
        };
        if (we.value >= C.value) {
          Ve(), H();
          return;
        }
        we.value <= -C.value && (Be(), H());
      }
    }), M = () => {
      l("slide", le("slide")), B.value = !0;
    }, L = () => {
      l("slid", le("slid")), B.value = !1;
    }, U = (H) => {
      s.value !== 0 && H.classList.add("carousel-item");
    };
    return qe(
      "ArrowLeft",
      () => {
        oe(Be);
      },
      { target: $ }
    ), qe(
      "ArrowRight",
      () => {
        oe(Ve);
      },
      { target: $ }
    ), ue(h, () => {
      _.value = !1;
    }), ue(T, (H) => {
      if (H) {
        fe();
        return;
      }
      $e();
    }), t({
      next: Ve,
      pause: K,
      prev: Be,
      resume: z
    }), at(Yl, {
      background: E(() => a.background),
      width: E(() => a.imgWidth),
      height: E(() => a.imgHeight)
    }), (H, G) => (m(), N("div", {
      id: v(i),
      ref_key: "element",
      ref: $,
      class: j(["carousel slide pointer-event", ae.value])
    }, [
      v(y) ? (m(), N("div", Tr, [
        (m(!0), N(ge, null, Te(D.value.length, (X, te) => (m(), N("button", {
          key: te,
          type: "button",
          "data-bs-target": "",
          class: j(te === v(s) ? "active" : ""),
          "aria-current": te === v(s) ? !0 : void 0,
          "aria-label": `${H.indicatorsButtonLabel} ${te}`,
          onClick: (be) => ve(te)
        }, null, 10, _r))), 128))
      ])) : J("", !0),
      ee("div", {
        ref_key: "relatedTarget",
        ref: S,
        class: "carousel-inner"
      }, [
        ye(jn, {
          "enter-from-class": O.value,
          "enter-active-class": O.value,
          "enter-to-class": O.value,
          "leave-from-class": F.value,
          "leave-active-class": F.value,
          "leave-to-class": F.value,
          onBeforeLeave: M,
          onAfterLeave: L,
          onAfterEnter: U
        }, {
          default: R(() => [
            (m(!0), N(ge, null, Te(D.value, (X, te) => ht((m(), x(se(X), {
              key: te,
              class: j({ active: te === v(s) && B.value === !1 })
            }, null, 8, ["class"])), [
              [ha, te === v(s)]
            ])), 128))
          ]),
          _: 1
        }, 8, ["enter-from-class", "enter-active-class", "enter-to-class", "leave-from-class", "leave-active-class", "leave-to-class"])
      ], 512),
      v(p) ? (m(), N(ge, { key: 1 }, [
        ee("button", {
          class: "carousel-control-prev",
          type: "button",
          onClick: Be
        }, [
          Vr,
          ee("span", Ar, Z(H.controlsPrevText), 1)
        ]),
        ee("button", {
          class: "carousel-control-next",
          type: "button",
          onClick: Ve
        }, [
          Or,
          ee("span", Er, Z(H.controlsNextText), 1)
        ])
      ], 64)) : J("", !0)
    ], 10, $r));
  }
}), Nr = ["innerHTML"], Ir = { key: 1 }, Lr = ["innerHTML"], Fr = { key: 1 }, Hr = /* @__PURE__ */ q({
  __name: "BCarouselSlide",
  props: {
    background: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: { default: void 0 },
    id: { default: void 0 },
    imgAlt: { default: void 0 },
    imgBlank: { type: [String, Boolean], default: !1 },
    imgBlankColor: { default: "transparent" },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgSrcset: { default: void 0 },
    imgWidth: { default: void 0 },
    interval: { default: void 0 },
    text: { default: void 0 },
    textHtml: { default: void 0 },
    textTag: { default: "p" }
  },
  setup(e) {
    const t = e, o = Me(), a = Ge(Yl, null), l = E(() => t.text || t.textHtml || !Ie(o.text)), n = E(() => t.caption || t.captionHtml || !Ie(o.caption)), i = E(() => l.value || n.value || !Ie(o.default)), s = w(() => ({
      background: `${t.background || (a == null ? void 0 : a.background.value) || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), u = w(() => ({
      "d-none": t.contentVisibleUp !== void 0,
      [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
    }));
    return (d, f) => (m(), N("div", {
      class: "carousel-item",
      style: ze(s.value)
    }, [
      A(d.$slots, "img", {}, () => {
        var g, p;
        return [
          ye(vo, {
            class: "d-block w-100",
            alt: d.imgAlt,
            srcset: d.imgSrcset,
            src: d.imgSrc,
            width: d.imgWidth || ((g = v(a)) == null ? void 0 : g.width.value),
            height: d.imgHeight || ((p = v(a)) == null ? void 0 : p.height.value),
            blank: d.imgBlank,
            "blank-color": d.imgBlankColor
          }, null, 8, ["alt", "srcset", "src", "width", "height", "blank", "blank-color"])
        ];
      }),
      i.value ? (m(), x(se(d.contentTag), {
        key: 0,
        class: j(["carousel-caption", u.value])
      }, {
        default: R(() => [
          n.value ? (m(), x(se(d.captionTag), { key: 0 }, {
            default: R(() => [
              A(d.$slots, "caption", {}, () => [
                d.captionHtml ? (m(), N("span", {
                  key: 0,
                  innerHTML: d.captionHtml
                }, null, 8, Nr)) : (m(), N("span", Ir, Z(d.caption), 1))
              ])
            ]),
            _: 3
          })) : J("", !0),
          l.value ? (m(), x(se(d.textTag), { key: 1 }, {
            default: R(() => [
              A(d.$slots, "text", {}, () => [
                d.textHtml ? (m(), N("span", {
                  key: 0,
                  innerHTML: d.textHtml
                }, null, 8, Lr)) : (m(), N("span", Fr, Z(d.text), 1))
              ])
            ]),
            _: 3
          })) : J("", !0),
          A(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : J("", !0)
    ], 4));
  }
}), Ho = wa("", [], { type: [Boolean, String, Number], default: !1 }), zo = wa("offset", [""], { type: [String, Number], default: null }), Ro = wa("order", [""], { type: [String, Number], default: null }), zr = q({
  name: "BCol",
  slots: Object,
  props: {
    col: { type: [Boolean, String], default: !1 },
    // Generic flexbox .col (xs)
    cols: { type: [String, Number], default: null },
    // .col-[1-12]|auto (xs)
    ...Ho,
    offset: { type: [String, Number], default: null },
    ...zo,
    order: { type: [String, Number], default: null },
    ...Ro,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(e) {
    const t = [
      { content: Ho, propPrefix: "cols", classPrefix: "col" },
      { content: zo, propPrefix: "offset" },
      { content: Ro, propPrefix: "order" }
    ], o = r(() => e.col), a = w(
      () => t.flatMap((n) => Kl(e, n.content, n.propPrefix, n.classPrefix))
    );
    return {
      computedClasses: w(() => [
        a.value,
        {
          col: o.value || !a.value.some((n) => /^col-/.test(n)) && !e.cols,
          [`col-${e.cols}`]: !!e.cols,
          [`offset-${e.offset}`]: !!e.offset,
          [`order-${e.order}`]: !!e.order,
          [`align-self-${e.alignSelf}`]: !!e.alignSelf
        }
      ])
    };
  }
});
function Rr(e, t, o, a, l, n) {
  return m(), x(se(e.tag), {
    class: j(e.computedClasses)
  }, {
    default: R(() => [
      A(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Gt = /* @__PURE__ */ $a(zr, [["render", Rr]]), xr = /* @__PURE__ */ q({
  __name: "BContainer",
  props: {
    fluid: { type: [String, Boolean], default: !1 },
    gutterX: { default: void 0 },
    gutterY: { default: void 0 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = he(() => t.gutterX ?? NaN, { method: "parseInt" }), a = he(() => t.gutterY ?? NaN, { method: "parseInt" }), l = r(() => t.fluid), n = w(() => ({
      container: l.value === !1,
      "container-fluid": l.value === !0,
      [`container-${l.value}`]: typeof l.value == "string",
      [`gx-${o.value}`]: !Number.isNaN(o.value),
      [`gy-${a.value}`]: !Number.isNaN(a.value)
    }));
    return (i, s) => (m(), x(se(i.tag), {
      class: j(n.value)
    }, {
      default: R(() => [
        A(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mr = { class: "visually-hidden" }, Dr = ["aria-labelledby", "role"], gn = /* @__PURE__ */ q({
  __name: "BDropdown",
  props: {
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: !0 },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: [String, Boolean], default: !1 },
    container: { default: void 0 },
    disabled: { type: [String, Boolean], default: !1 },
    dropend: { type: [String, Boolean], default: !1 },
    dropstart: { type: [String, Boolean], default: !1 },
    dropup: { type: [String, Boolean], default: !1 },
    end: { type: [String, Boolean], default: !1 },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: !1 },
    lazy: { type: [String, Boolean], default: !1 },
    menuClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: !1 },
    noCaret: { type: [String, Boolean], default: !1 },
    noFlip: { type: [String, Boolean], default: !1 },
    noShift: { type: [String, Boolean], default: !1 },
    noSize: { type: [String, Boolean], default: !1 },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: [String, Boolean], default: !1 },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: [String, Boolean], default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" }
  },
  emits: ["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = _e(() => a.id, "dropdown"), i = ke(a, "modelValue", l, { passive: !0 }), s = r(i), u = r(() => a.dropup), d = r(() => a.dropend), f = r(() => a.isNav), g = r(() => a.dropstart), p = r(() => a.center), y = r(() => a.end), b = r(() => a.split), V = r(() => a.noCaret), C = r(() => a.noFlip), c = r(() => a.noShift), h = r(() => a.noSize), B = r(() => a.lazy), _ = r(() => a.splitDisabled), k = E(
      () => typeof a.offset == "string" || typeof a.offset == "number" ? a.offset : NaN
    ), S = he(k), $ = W(null), I = W(null), T = W(null), O = W(null), F = w(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), K = w(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), z = E(() => b.value ? I.value : T.value);
    qe(
      "Escape",
      () => {
        i.value = !s;
      },
      { target: z }
    ), qe(
      "Escape",
      () => {
        i.value = !s;
      },
      { target: $ }
    );
    const P = (H, G) => {
      var te, be, me, de;
      if (H.preventDefault(), !s.value) {
        L(), Ne(() => P(H, G));
        return;
      }
      const X = (te = $.value) == null ? void 0 : te.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)");
      if (X)
        if ((be = $.value) != null && be.contains(document.activeElement)) {
          const ie = $.value.querySelector(".dropdown-item:focus"), ce = Array.prototype.indexOf.call(X, ie) + G;
          ce >= 0 && ce < (X == null ? void 0 : X.length) && ((me = X[ce]) == null || me.focus());
        } else
          (de = X[G === -1 ? X.length - 1 : 0]) == null || de.focus();
    };
    qe("ArrowUp", (H) => P(H, -1), { target: z }), qe("ArrowDown", (H) => P(H, 1), { target: z }), qe("ArrowUp", (H) => P(H, -1), { target: $ }), qe("ArrowDown", (H) => P(H, 1), { target: $ });
    const D = w(
      () => Xi({
        top: u.value,
        start: g.value,
        end: d.value,
        alignCenter: p.value,
        alignEnd: y.value
      })
    ), ae = W({}), le = w(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const H = typeof a.offset == "string" || typeof a.offset == "number" ? S.value : a.offset, G = [gl(H)];
      return C.value === !1 && G.push(
        pl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding
        })
      ), c.value === !1 && G.push(
        bl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding
        })
      ), h.value === !1 && G.push(
        yl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: X, availableHeight: te }) {
            ae.value = {
              maxHeight: te ? `${te}px` : void 0,
              maxWidth: X ? `${X}px` : void 0
            };
          }
        })
      ), G;
    }), { update: ve, floatingStyles: Be } = Vl(z, $, {
      placement: D,
      middleware: le,
      strategy: E(() => a.strategy),
      whileElementsMounted: Tl
    }), Ve = w(() => ({
      dropup: u.value,
      dropend: d.value,
      dropstart: g.value,
      "position-static": a.boundary !== "clippingAncestors" && !f.value
    })), oe = w(() => [
      b.value ? a.splitClass : a.toggleClass,
      {
        "nav-link": f.value,
        "dropdown-toggle": !b.value,
        "dropdown-toggle-no-caret": V.value && !b.value,
        show: b.value ? void 0 : s.value
      }
    ]), fe = () => {
      U();
    }, $e = (H) => {
      b.value ? l("click", H) : fe();
    };
    Ll(
      $,
      () => {
        s.value && (a.autoClose === !0 || a.autoClose === "outside") && U();
      },
      { ignore: [I, T] }
    );
    const we = () => {
      s.value && (a.autoClose === !0 || a.autoClose === "inside") && U();
    }, M = () => {
      i.value && U();
    }, L = () => {
      i.value || U();
    }, U = () => {
      l("toggle");
      const H = s.value, G = new Rt(H ? "hide" : "show");
      if (l(H ? "hide" : "show", G), G.defaultPrevented) {
        l(H ? "hide-prevented" : "show-prevented");
        return;
      }
      i.value = !H, l(H ? "hidden" : "shown"), Ne(() => {
        var X;
        (X = O.value) == null || X.dispatchEvent(new Event("forceHide"));
      });
    };
    return ue(s, () => {
      ve();
    }), t({
      close: M,
      open: L,
      toggle: U
    }), at(ln, {
      id: n,
      open: L,
      close: M,
      toggle: U,
      visible: s,
      isNav: f
    }), (H, G) => v(s) ? (m(), N("div", {
      key: 0,
      ref_key: "wrapper",
      ref: O,
      class: j([Ve.value, "btn-group"])
    }, [
      ye(pt, {
        id: v(n),
        ref_key: "splitButton",
        ref: T,
        variant: H.splitVariant || H.variant,
        size: H.size,
        class: j(oe.value),
        disabled: v(_) || H.disabled,
        type: H.splitButtonType,
        "aria-label": H.ariaLabel,
        "aria-expanded": v(b) ? void 0 : v(s),
        "aria-haspopup": v(b) ? void 0 : "menu",
        href: v(b) ? H.splitHref : void 0,
        to: v(b) && H.splitTo ? H.splitTo : void 0,
        onClick: $e
      }, {
        default: R(() => [
          A(H.$slots, "button-content", {}, () => [
            ne(Z(H.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "variant", "size", "class", "disabled", "type", "aria-label", "aria-expanded", "aria-haspopup", "href", "to"]),
      v(b) ? (m(), x(pt, {
        key: 0,
        ref_key: "button",
        ref: I,
        variant: H.variant,
        size: H.size,
        disabled: H.disabled,
        class: j([[H.toggleClass, v(s) ? "show" : void 0], "dropdown-toggle-split dropdown-toggle"]),
        "aria-expanded": v(s),
        "aria-haspopup": "menu",
        onClick: fe
      }, {
        default: R(() => [
          ee("span", Mr, [
            A(H.$slots, "toggle-text", {}, () => [
              ne(Z(H.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled", "class", "aria-expanded"])) : J("", !0),
      (m(), x(zt, {
        to: H.container,
        disabled: !H.container
      }, [
        !v(B) || v(s) ? ht((m(), N("ul", {
          key: 0,
          ref_key: "floating",
          ref: $,
          style: ze([v(Be), ae.value]),
          class: j(["dropdown-menu show overflow-auto", H.menuClass]),
          "aria-labelledby": v(n),
          role: H.role,
          onClick: we
        }, [
          A(H.$slots, "default", {
            hide: M,
            show: L
          })
        ], 14, Dr)), [
          [ha, v(B) || v(s)]
        ]) : J("", !0)
      ], 8, ["to", "disabled"]))
    ], 2)) : J("", !0);
  }
}), jr = { role: "presentation" }, qr = /* @__PURE__ */ q({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(e) {
    return (t, o) => (m(), N("li", jr, [
      (m(), x(se(t.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), Gr = { role: "presentation" }, Wr = { class: "px-4 py-3" }, Ur = /* @__PURE__ */ q({
  __name: "BDropdownForm",
  setup(e) {
    return (t, o) => (m(), N("li", Gr, [
      ee("form", Wr, [
        A(t.$slots, "default")
      ])
    ]));
  }
}), Xr = { role: "presentation" }, Kr = ["id", "aria-describedby"], Yr = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BDropdownGroup",
  props: {
    ariaDescribedby: { default: void 0 },
    header: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "header" },
    headerVariant: { default: null },
    id: { default: void 0 }
  },
  setup(e) {
    const t = e, o = E(() => t.id ? `${t.id}_group_dd_header` : void 0), a = E(() => t.headerTag === "header" ? void 0 : "heading"), l = w(() => [
      t.headerClass,
      {
        [`text-${t.headerVariant}`]: t.headerVariant !== null
      }
    ]);
    return (n, i) => (m(), N("li", Xr, [
      (m(), x(se(n.headerTag), {
        id: o.value,
        class: j(["dropdown-header", l.value]),
        role: a.value
      }, {
        default: R(() => [
          A(n.$slots, "header", {}, () => [
            ne(Z(n.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      ee("ul", Q({
        id: n.id,
        role: "group",
        class: "list-unstyled"
      }, n.$attrs, {
        "aria-describedby": n.ariaDescribedby || o.value
      }), [
        A(n.$slots, "default")
      ], 16, Kr)
    ]));
  }
}), Zr = { class: "dropdown-header" }, Jr = /* @__PURE__ */ q({
  __name: "BDropdownHeader",
  setup(e) {
    return (t, o) => (m(), N("li", null, [
      ee("h6", Zr, [
        A(t.$slots, "default")
      ])
    ]));
  }
}), Qr = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BDropdownItem",
  props: {
    linkClass: { default: void 0 },
    wrapperAttrs: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, { class: l, ...n } = Kt(), i = r(() => o.active), s = r(() => o.disabled), { computedLink: u, computedLinkProps: d } = Ct(o), f = w(() => [
      o.linkClass,
      {
        active: i.value,
        disabled: s.value,
        [`text-${o.variant}`]: o.variant !== null
      }
    ]), g = E(() => u.value ? rt : o.href ? "a" : "button"), p = Ge(uo, null), y = Ge(ln, null), b = Ge(co, null), V = (C) => {
      var c, h, B;
      a("click", C), b !== null && ((c = b == null ? void 0 : b.autoClose) == null ? void 0 : c.value) === !0 && ((h = p == null ? void 0 : p.close) == null || h.call(p)), (B = y == null ? void 0 : y.close) == null || B.call(y);
    };
    return (C, c) => (m(), N("li", Q({
      role: "presentation",
      class: v(l)
    }, C.wrapperAttrs), [
      (m(), x(se(g.value), Q({
        class: ["dropdown-item", f.value],
        disabled: v(s),
        "aria-disabled": v(s) ? !0 : null,
        "aria-current": v(i) ? !0 : null,
        href: g.value === "a" ? C.href : null,
        rel: C.rel,
        role: "menuitem",
        type: g.value === "button" ? "button" : null,
        target: C.target
      }, { ...v(d), ...n }, { onClick: V }), {
        default: R(() => [
          A(C.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "disabled", "aria-disabled", "aria-current", "href", "rel", "type", "target"]))
    ], 16));
  }
}), eu = { role: "presentation" }, tu = ["disabled"], au = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BDropdownItemButton",
  props: {
    active: { type: [String, Boolean], default: !1 },
    activeClass: { default: "active" },
    buttonClass: { default: void 0 },
    disabled: { type: [String, Boolean], default: !1 },
    variant: { default: null }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.active), n = r(() => o.disabled), i = w(() => [
      o.buttonClass,
      {
        [o.activeClass]: l.value,
        disabled: n.value,
        [`text-${o.variant}`]: o.variant !== null
      }
    ]), s = (u) => {
      a("click", u);
    };
    return (u, d) => (m(), N("li", eu, [
      ee("button", {
        role: "menu",
        type: "button",
        class: j(["dropdown-item", i.value]),
        disabled: v(n),
        onClick: s
      }, [
        A(u.$slots, "default")
      ], 10, tu)
    ]));
  }
}), ou = { role: "presentation" }, lu = { class: "px-4 py-1 mb-0 text-body-secondary" }, nu = /* @__PURE__ */ q({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(e) {
    return (t, o) => (m(), N("li", ou, [
      ee("p", lu, [
        A(t.$slots, "default", {}, () => [
          ne(Z(t.text), 1)
        ])
      ])
    ]));
  }
}), su = ["id", "novalidate", "onSubmit"], bn = /* @__PURE__ */ q({
  __name: "BForm",
  props: {
    floating: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    novalidate: { type: [String, Boolean], default: !1 },
    validated: { type: [String, Boolean], default: !1 }
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = W(null), i = r(() => a.floating), s = r(() => a.novalidate), u = r(() => a.validated), d = w(() => ({
      "form-floating": i.value,
      "was-validated": u.value
    })), f = (g) => {
      l("submit", g);
    };
    return t({
      element: n
    }), (g, p) => (m(), N("form", {
      id: g.id,
      ref_key: "element",
      ref: n,
      novalidate: v(s),
      class: j(d.value),
      onSubmit: Bt(f, ["prevent"])
    }, [
      A(g.$slots, "default")
    ], 42, su));
  }
}), iu = { class: "form-floating" }, ru = ["for"], uu = /* @__PURE__ */ q({
  __name: "BFormFloatingLabel",
  props: {
    label: { default: void 0 },
    labelFor: { default: void 0 },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (m(), N("div", iu, [
      A(t.$slots, "default", {}, () => [
        ne(Z(t.text), 1)
      ]),
      ee("label", { for: t.labelFor }, [
        A(t.$slots, "label", {}, () => [
          ne(Z(t.label), 1)
        ])
      ], 8, ru)
    ]));
  }
}), xa = /* @__PURE__ */ q({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.forceShow), a = r(() => t.state), l = r(() => t.tooltip), n = E(() => o.value === !0 || a.value === !1), i = w(() => ({
      "d-block": n.value,
      "invalid-feedback": !l.value,
      "invalid-tooltip": l.value
    }));
    return (s, u) => (m(), x(se(s.tag), {
      id: s.id,
      role: s.role,
      "aria-live": s.ariaLive,
      "aria-atomic": s.ariaLive ? !0 : void 0,
      class: j(i.value)
    }, {
      default: R(() => [
        A(s.$slots, "default", {}, () => [
          ne(Z(s.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), ra = /* @__PURE__ */ q({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, o) => (m(), x(se(t.tag), { class: "row d-flex flex-wrap" }, {
      default: R(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ma = /* @__PURE__ */ q({
  __name: "BFormText",
  props: {
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: !1 },
    tag: { default: "small" },
    text: { default: void 0 },
    textVariant: { default: "body-secondary" }
  },
  setup(e) {
    const t = e, o = r(() => t.inline), a = w(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== null,
      "form-text": !o.value
    }));
    return (l, n) => (m(), x(se(l.tag), {
      id: l.id,
      class: j(a.value)
    }, {
      default: R(() => [
        A(l.$slots, "default", {}, () => [
          ne(Z(l.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Da = /* @__PURE__ */ q({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.forceShow), a = r(() => t.state), l = r(() => t.tooltip), n = E(() => o.value === !0 || a.value === !0), i = w(() => ({
      "d-block": n.value,
      "valid-feedback": !l.value,
      "valid-tooltip": l.value
    }));
    return (s, u) => (m(), x(se(s.tag), {
      id: s.id,
      role: s.role,
      "aria-live": s.ariaLive,
      "aria-atomic": s.ariaLive ? !0 : void 0,
      class: j(i.value)
    }, {
      default: R(() => [
        A(s.$slots, "default", {}, () => [
          ne(Z(s.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), yn = q({
  name: "ComponentOrEmpty",
  slots: Object,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    to: {
      type: [String, Object],
      default: null
    },
    skip: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { slots: t, attrs: o }) {
    return () => {
      var a, l, n;
      return e.skip ? (a = t.default) == null ? void 0 : a.call(t) : e.tag === "Teleport" ? Le(zt, { to: e.to }, [(l = t.default) == null ? void 0 : l.call(t)]) : Le(e.tag, { ...o }, [(n = t.default) == null ? void 0 : n.call(t)]);
    };
  }
}), du = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "true-value", "false-value", "indeterminate"], cu = ["for"], hn = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: { default: void 0 },
    ariaLabelledBy: { default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    button: { type: [String, Boolean], default: !1 },
    buttonGroup: { type: [String, Boolean], default: !1 },
    buttonVariant: { default: null },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    indeterminate: { type: [String, Boolean], default: void 0 },
    inline: { type: [String, Boolean], default: !1 },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number, null], default: void 0 },
    name: { default: void 0 },
    plain: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: void 0 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    switch: { type: [String, Boolean], default: !1 },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number, null], default: !1 },
    value: { type: [Array, Set, Boolean, String, Object, Number, null], default: !0 }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = ke(a, "modelValue", l, { passive: !0 }), s = _e(() => a.id, "form-check"), u = r(() => a.indeterminate), d = r(() => a.autofocus), f = r(() => a.plain), g = r(() => a.button), p = r(() => a.buttonGroup), y = r(() => a.switch), b = r(() => a.disabled), V = r(() => a.inline), C = r(() => a.required), c = r(() => a.state), h = Ge(an, null), B = W(null), { focused: _ } = xe(B, {
      initialValue: d.value
    }), k = E(() => !Ie(n.default)), S = w({
      get: () => (h == null ? void 0 : h.modelValue.value) ?? i.value,
      set: (z) => {
        if (z !== void 0) {
          if (h !== null && Array.isArray(z)) {
            h.modelValue.value = z;
            return;
          }
          i.value = z;
        }
      }
    }), $ = E(
      () => !!(a.name ?? (h == null ? void 0 : h.name.value)) && (C.value || (h == null ? void 0 : h.required.value))
    ), I = E(() => p.value || ((h == null ? void 0 : h.buttons.value) ?? !1)), T = w(() => ({
      plain: f.value || ((h == null ? void 0 : h.plain.value) ?? !1),
      button: g.value || ((h == null ? void 0 : h.buttons.value) ?? !1),
      inline: V.value || ((h == null ? void 0 : h.inline.value) ?? !1),
      switch: y.value || ((h == null ? void 0 : h.switch.value) ?? !1),
      state: c.value || (h == null ? void 0 : h.state.value),
      size: a.size ?? (h == null ? void 0 : h.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: a.buttonVariant ?? (h == null ? void 0 : h.buttonVariant.value) ?? "secondary"
      // This is where the true default is made
    })), O = Rl(T), F = xl(T), K = Ml(T);
    return t({
      blur: () => {
        _.value = !1;
      },
      element: B,
      focus: () => {
        _.value = !0;
      }
    }), (z, P) => (m(), x(yn, {
      skip: I.value,
      class: j(v(O))
    }, {
      default: R(() => {
        var D, ae, le;
        return [
          ht(ee("input", Q({ id: v(s) }, z.$attrs, {
            ref_key: "input",
            ref: B,
            "onUpdate:modelValue": P[0] || (P[0] = (ve) => S.value = ve),
            class: v(F),
            type: "checkbox",
            disabled: v(b) || ((D = v(h)) == null ? void 0 : D.disabled.value),
            required: $.value || void 0,
            name: z.name || ((ae = v(h)) == null ? void 0 : ae.name.value),
            form: z.form || ((le = v(h)) == null ? void 0 : le.form.value),
            "aria-label": z.ariaLabel,
            "aria-labelledby": z.ariaLabelledBy,
            "aria-required": $.value || void 0,
            value: z.value,
            "true-value": z.value,
            "false-value": z.uncheckedValue,
            indeterminate: v(u),
            onChange: P[1] || (P[1] = (ve) => v(i) !== void 0 && l("change", v(i))),
            onInput: P[2] || (P[2] = (ve) => v(i) !== void 0 && l("input", v(i)))
          }), null, 16, du), [
            [qn, S.value]
          ]),
          k.value || v(f) === !1 ? (m(), N("label", {
            key: 0,
            for: v(s),
            class: j(v(K))
          }, [
            A(z.$slots, "default")
          ], 10, cu)) : J("", !0)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
}), fu = ["id"], vu = ["innerHTML"], pu = ["textContent"], mu = /* @__PURE__ */ q({
  __name: "BFormCheckboxGroup",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: { default: () => [] },
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: "md" },
    stacked: { type: [String, Boolean], default: !1 },
    state: { type: [String, Boolean, null], default: null },
    switches: { type: [String, Boolean], default: !1 },
    textField: { default: "text" },
    validated: { type: [String, Boolean], default: !1 },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "checkbox"), s = _e(() => a.name, "checkbox"), u = r(() => a.autofocus), d = r(() => a.buttons), f = r(() => a.disabled), g = r(() => a.plain), p = r(() => a.required), y = r(() => a.stacked), b = r(() => a.state), V = r(() => a.switches), C = r(() => a.validated), c = W(null), { focused: h } = xe(c, {
      initialValue: u.value
    });
    at(an, {
      modelValue: n,
      switch: V,
      buttonVariant: E(() => a.buttonVariant),
      form: E(() => a.form),
      name: s,
      state: b,
      plain: g,
      size: E(() => a.size),
      inline: E(() => !y.value),
      required: p,
      buttons: d,
      disabled: f
    }), ue(n, ($) => {
      l("input", $), Ne(() => {
        l("change", $);
      });
    });
    const B = w(
      () => a.options.map(
        ($, I) => typeof $ == "string" || typeof $ == "number" ? {
          props: {
            value: $,
            disabled: f.value
          },
          text: $.toString(),
          html: void 0,
          self: Symbol(`checkboxGroupOptionItem${I}`)
        } : {
          props: {
            value: $[a.valueField],
            disabled: $[a.disabledField],
            ...$.props ? $.props : {}
          },
          text: $[a.textField],
          html: $[a.htmlField],
          self: Symbol(`checkboxGroupOptionItem${I}`)
        }
      )
    ), _ = w(() => ({
      required: p.value,
      ariaInvalid: a.ariaInvalid,
      state: b.value,
      validated: C.value,
      buttons: d.value,
      stacked: y.value,
      size: a.size
    })), k = Dl(_), S = jl(_);
    return t({
      blur: () => {
        h.value = !1;
      },
      focus: () => {
        h.value = !0;
      }
    }), ($, I) => (m(), N("div", Q(v(k), {
      id: v(i),
      ref_key: "element",
      ref: c,
      role: "group",
      class: [v(S), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      A($.$slots, "first"),
      (m(!0), N(ge, null, Te(B.value, (T) => (m(), x(hn, Q({
        key: T.self
      }, T.props), {
        default: R(() => [
          T.html ? (m(), N("span", {
            key: 0,
            innerHTML: T.html
          }, null, 8, vu)) : (m(), N("span", {
            key: 1,
            textContent: Z(T.text)
          }, null, 8, pu))
        ]),
        _: 2
      }, 1040))), 128)),
      A($.$slots, "default")
    ], 16, fu));
  }
}), gu = ["for"], bu = ["id", "form", "name", "multiple", "disabled", "capture", "accept", "required", "aria-required", "directory", "webkitdirectory"], yu = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BFormFile",
  props: {
    accept: { default: "" },
    autofocus: { type: [String, Boolean], default: !1 },
    capture: { type: [String, Boolean], default: !1 },
    directory: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    label: { default: "" },
    labelClass: { default: void 0 },
    modelValue: { default: null },
    multiple: { type: [String, Boolean], default: !1 },
    name: { default: void 0 },
    noDrop: { type: [String, Boolean], default: !1 },
    noTraverse: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = Me(), l = e, n = o, i = ke(l, "modelValue", n), s = _e(() => l.id), u = r(() => l.autofocus), d = r(() => l.directory), f = r(() => l.disabled), g = r(() => l.multiple), p = r(() => l.noDrop);
    r(() => l.noTraverse);
    const y = r(() => l.required), b = r(() => l.state), V = r(() => l.capture), C = wt(b), c = W(null), { focused: h } = xe(c, { initialValue: u.value }), B = E(() => !Ie(a.label)), _ = E(
      () => typeof l.accept == "string" ? l.accept : l.accept.join(",")
    ), k = w(() => [
      C.value,
      {
        [`form-control-${l.size}`]: l.size !== void 0
      }
    ]), S = (T) => {
      var F, K;
      const O = ((F = c.value) == null ? void 0 : F.files) === null || ((K = c.value) == null ? void 0 : K.files) === void 0 ? null : [...c.value.files];
      i.value = O === null ? null : g.value === !0 ? O : O[0], n("change", T);
    }, $ = (T) => {
      p.value === !0 && T.preventDefault();
    }, I = () => {
      i.value = null;
    };
    return ue(i, (T) => {
      T === null && c.value !== null && (c.value.value = "");
    }), t({
      blur: () => {
        h.value = !1;
      },
      element: c,
      focus: () => {
        h.value = !0;
      },
      reset: I
    }), (T, O) => (m(), N(ge, null, [
      B.value || T.label ? (m(), N("label", {
        key: 0,
        for: v(s),
        class: j(["form-label", T.labelClass])
      }, [
        A(T.$slots, "label", {}, () => [
          ne(Z(T.label), 1)
        ])
      ], 10, gu)) : J("", !0),
      ee("input", Q({ id: v(s) }, T.$attrs, {
        ref_key: "input",
        ref: c,
        type: "file",
        class: ["form-control", k.value],
        form: T.form,
        name: T.name,
        multiple: v(g),
        disabled: v(f),
        capture: v(V),
        accept: _.value || void 0,
        required: v(y) || void 0,
        "aria-required": v(y) || void 0,
        directory: v(d),
        webkitdirectory: v(d),
        onChange: S,
        onDrop: $
      }), null, 16, bu)
    ], 64));
  }
}), Bn = ["input", "select", "textarea"], hu = Bn.map((e) => `${e}:not([disabled])`).join(), Bu = [...Bn, "a", "button", "label"], Su = "label", Cu = "invalid-feedback", wu = "valid-feedback", ku = "description", $u = "default", Tu = q({
  components: { BCol: Gt, BFormInvalidFeedback: xa, BFormRow: ra, BFormText: Ma, BFormValidFeedback: Da },
  props: {
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    contentCols: { type: [Boolean, String, Number], default: void 0 },
    contentColsLg: { type: [Boolean, String, Number], default: void 0 },
    contentColsMd: { type: [Boolean, String, Number], default: void 0 },
    contentColsSm: { type: [Boolean, String, Number], default: void 0 },
    contentColsXl: { type: [Boolean, String, Number], default: void 0 },
    description: { type: [String], default: void 0 },
    disabled: { type: [Boolean, String], default: !1 },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, default: void 0 },
    invalidFeedback: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    labelAlign: { type: [Boolean, String, Number], default: void 0 },
    labelAlignLg: { type: [Boolean, String, Number], default: void 0 },
    labelAlignMd: { type: [Boolean, String, Number], default: void 0 },
    labelAlignSm: { type: [Boolean, String, Number], default: void 0 },
    labelAlignXl: { type: [Boolean, String, Number], default: void 0 },
    labelClass: { type: [Array, Object, String], default: void 0 },
    labelCols: { type: [Boolean, String, Number], default: void 0 },
    labelColsLg: { type: [Boolean, String, Number], default: void 0 },
    labelColsMd: { type: [Boolean, String, Number], default: void 0 },
    labelColsSm: { type: [Boolean, String, Number], default: void 0 },
    labelColsXl: { type: [Boolean, String, Number], default: void 0 },
    labelFor: { type: String, default: void 0 },
    labelSize: { type: String, default: void 0 },
    labelSrOnly: { type: [Boolean, String], default: !1 },
    state: { type: [Boolean, String], default: null },
    tooltip: { type: [Boolean, String], default: !1 },
    validFeedback: { type: String, default: void 0 },
    validated: { type: [Boolean, String], default: !1 },
    floating: { type: [Boolean, String], default: !1 }
  },
  setup(e) {
    const t = r(() => e.disabled), o = r(() => e.labelSrOnly), a = r(() => e.state), l = r(() => e.tooltip), n = r(() => e.validated), i = r(() => e.floating), s = null, u = ["xs", "sm", "md", "lg", "xl"], d = (_, k) => u.reduce((S, $) => {
      const I = Lo($ === "xs" ? "" : $, `${k}Align`), T = _[I] || null;
      return T && ($ === "xs" ? S.push(`text-${T}`) : S.push(`text-${$}-${T}`)), S;
    }, []), f = (_, k) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      u.reduce((S, $) => {
        const I = Lo($ === "xs" ? "" : $, `${k}Cols`);
        let T = _[I];
        return T = T === "" ? !0 : T || !1, typeof T != "boolean" && T !== "auto" && (T = Qi(T, 0), T = T > 0 ? T : !1), T && ($ === "xs" ? S[typeof T == "boolean" ? "col" : "cols"] = T : S[$ || (typeof T == "boolean" ? "col" : "cols")] = T), S;
      }, {})
    ), g = W(null), p = (_, k = null) => {
      if (Ka && e.labelFor && g.value !== null) {
        const S = dl(`#${ls(e.labelFor)}`, g.value);
        if (S) {
          const $ = "aria-describedby", I = (_ || "").split(sa), T = (k || "").split(sa), O = (Ya(S, $) || "").split(sa).filter((F) => !T.includes(F)).concat(I).filter((F, K, z) => z.indexOf(F) === K).filter((F) => F).join(" ").trim();
          O ? hs(S, $, O) : Bs(S, $);
        }
      }
    }, y = w(() => f(e, "content")), b = w(() => d(e, "label")), V = w(() => f(e, "label")), C = w(
      () => (
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys(y.value).length > 0 || Object.keys(V.value).length > 0
      )
    ), c = wt(a), h = Ca(() => e.ariaInvalid, a);
    return ue(
      () => s,
      (_, k) => {
        _ !== k && p(_, k);
      }
    ), st(() => {
      Ne(() => {
        p(s);
      });
    }), {
      disabledBoolean: t,
      labelSrOnlyBoolean: o,
      stateBoolean: a,
      tooltipBoolean: l,
      validatedBoolean: n,
      floatingBoolean: i,
      ariaDescribedby: s,
      computedAriaInvalid: h,
      contentColProps: y,
      isHorizontal: C,
      labelAlignClasses: b,
      labelColProps: V,
      onLegendClick: (_) => {
        if (e.labelFor || g.value === null)
          return;
        const { target: k } = _, S = k ? k.tagName : "";
        if (Bu.indexOf(S) !== -1)
          return;
        const $ = bs(hu, g.value).filter(gs);
        $.length === 1 && ps($[0]);
      },
      stateClass: c
    };
  },
  render() {
    const e = this.$props, t = this.$slots, o = _e(), a = !e.labelFor;
    let l = null;
    const n = jt(Su, {}, t) || e.label, i = n ? qt("_BV_label_") : null;
    if (n || this.isHorizontal) {
      const _ = a ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        n && (l = Le(
          _,
          {
            class: "visually-hidden",
            id: i,
            for: e.labelFor || null
          },
          n
        )), this.isHorizontal ? l = Le(Gt, this.labelColProps, { default: () => l }) : l = Le("div", {}, [l]);
      else {
        const k = {
          onClick: a ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? _ : null,
          id: i,
          for: e.labelFor || null,
          tabIndex: a ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": a,
              "col-form-label": this.isHorizontal || a,
              "pt-0": !this.isHorizontal && a,
              "d-block": !this.isHorizontal && !a,
              [`col-form-label-${e.labelSize}`]: !!e.labelSize
            },
            this.labelAlignClasses,
            e.labelClass
          ]
        };
        this.isHorizontal ? l = Le(Gt, k, { default: () => n }) : l = Le(_, k, n);
      }
    }
    let s = null;
    const u = jt(Cu, {}, t) || this.invalidFeedback, d = u ? qt("_BV_feedback_invalid_") : void 0;
    u && (s = Le(
      xa,
      {
        ariaLive: e.feedbackAriaLive,
        id: d,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => u }
    ));
    let f = null;
    const g = jt(wu, {}, t) || this.validFeedback, p = g ? qt("_BV_feedback_valid_") : void 0;
    g && (f = Le(
      Da,
      {
        ariaLive: e.feedbackAriaLive,
        id: p,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => g }
      // validFeedbackContent
    ));
    let y = null;
    const b = jt(ku, {}, t) || this.description, V = b ? qt("_BV_description_") : void 0;
    b && (y = Le(
      Ma,
      {
        id: V
      },
      { default: () => b }
    ));
    const C = this.ariaDescribedby = [
      V,
      this.stateBoolean === !1 ? d : null,
      this.stateBoolean === !0 ? p : null
    ].filter((_) => _).join(" ") || null, c = [
      jt($u, { ariaDescribedby: C, descriptionId: V, id: o, labelId: i }, t) || "",
      s,
      f,
      y
    ];
    !this.isHorizontal && this.floatingBoolean && c.push(l);
    let h = Le(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      c
    );
    this.isHorizontal && (h = Le(Gt, { ref: "content", ...this.contentColProps }, { default: () => c }));
    const B = {
      class: [
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: _e(() => e.id).value,
      disabled: a ? this.disabledBoolean : null,
      role: a ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      "aria-labelledby": a && this.isHorizontal ? i : null
    };
    return this.isHorizontal && !a ? Le(ra, B, { default: () => [l, h] }) : Le(
      a ? "fieldset" : "div",
      B,
      this.isHorizontal && a ? [Le(ra, null, { default: () => [l, h] })] : this.isHorizontal || !this.floatingBoolean ? [l, h] : [h]
    );
  }
}), _u = ["id", "value", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"], Vu = /* @__PURE__ */ q({
  __name: "BFormInput",
  props: {
    max: { default: void 0 },
    min: { default: void 0 },
    step: { default: void 0 },
    type: { default: "text" },
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: !1 },
    lazyFormatter: { type: [String, Boolean], default: !1 },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    number: { type: [String, Boolean], default: !1 },
    placeholder: { default: void 0 },
    plaintext: { type: [String, Boolean], default: !1 },
    readonly: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    trim: { type: [String, Boolean], default: !1 }
  },
  emits: ["blur", "change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { input: n, computedId: i, computedAriaInvalid: s, onInput: u, onChange: d, onBlur: f, focus: g, blur: p } = ql(a, l), y = r(() => a.disabled), b = r(() => a.required), V = r(() => a.readonly), C = r(() => a.plaintext), c = r(() => a.state), h = wt(c), B = W(!1), _ = w(() => {
      const k = a.type === "range", S = a.type === "color";
      return [
        h.value,
        {
          "form-control-highlighted": B.value,
          "form-range": k,
          "form-control": S || !a.plaintext && !k,
          "form-control-color": S,
          "form-control-plaintext": a.plaintext && !k && !S,
          [`form-control-${a.size}`]: !!a.size
        }
      ];
    });
    return t({
      blur: p,
      element: n,
      focus: g
    }), (k, S) => (m(), N("input", {
      id: v(i),
      ref_key: "input",
      ref: n,
      value: k.modelValue,
      class: j(_.value),
      name: k.name || void 0,
      form: k.form || void 0,
      type: k.type,
      disabled: v(y),
      placeholder: k.placeholder,
      required: v(b) || void 0,
      autocomplete: k.autocomplete || void 0,
      readonly: v(V) || v(C),
      min: k.min,
      max: k.max,
      step: k.step,
      list: k.type !== "password" ? k.list : void 0,
      "aria-required": v(b) || void 0,
      "aria-invalid": v(s),
      onInput: S[0] || (S[0] = ($) => v(u)($)),
      onChange: S[1] || (S[1] = ($) => v(d)($)),
      onBlur: S[2] || (S[2] = ($) => v(f)($))
    }, null, 42, _u));
  }
}), Au = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], Ou = ["for"], Sn = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BFormRadio",
  props: {
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    button: { type: [String, Boolean], default: !1 },
    buttonGroup: { type: [String, Boolean], default: !1 },
    buttonVariant: { default: null },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: !1 },
    modelValue: { type: [String, Boolean, Array, Object, Number, null], default: void 0 },
    name: { default: void 0 },
    plain: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    value: { type: [String, Boolean, Array, Object, Number, null], default: !0 }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = ke(a, "modelValue", l, { passive: !0 }), s = _e(() => a.id, "form-check"), u = r(() => a.autofocus), d = r(() => a.plain), f = r(() => a.button), g = r(() => a.buttonGroup), p = r(() => a.disabled), y = r(() => a.inline), b = r(() => a.required), V = r(() => a.state), C = Ge(on, null), c = W(null), { focused: h } = xe(c, {
      initialValue: u.value
    }), B = E(() => !Ie(n.default)), _ = w({
      get: () => (C == null ? void 0 : C.modelValue.value) ?? i.value,
      set: (F) => {
        if (F !== void 0) {
          if (C !== null) {
            C.modelValue.value = F;
            return;
          }
          i.value = F;
        }
      }
    }), k = E(
      () => !!(a.name ?? (C == null ? void 0 : C.name.value)) && (b.value || (C == null ? void 0 : C.required.value))
    ), S = E(() => g.value || ((C == null ? void 0 : C.buttons.value) ?? !1)), $ = w(() => ({
      plain: d.value || ((C == null ? void 0 : C.plain.value) ?? !1),
      button: f.value || ((C == null ? void 0 : C.buttons.value) ?? !1),
      inline: y.value || ((C == null ? void 0 : C.inline.value) ?? !1),
      state: V.value || (C == null ? void 0 : C.state.value),
      size: a.size ?? (C == null ? void 0 : C.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: a.buttonVariant ?? (C == null ? void 0 : C.buttonVariant.value) ?? "secondary"
      // This is where the true default is made
    })), I = Rl($), T = xl($), O = Ml($);
    return t({
      blur: () => {
        h.value = !1;
      },
      element: c,
      focus: () => {
        h.value = !0;
      }
    }), (F, K) => (m(), x(yn, {
      skip: S.value,
      class: j(v(I))
    }, {
      default: R(() => {
        var z, P, D;
        return [
          ht(ee("input", Q({ id: v(s) }, F.$attrs, {
            ref_key: "input",
            ref: c,
            "onUpdate:modelValue": K[0] || (K[0] = (ae) => _.value = ae),
            class: v(T),
            type: "radio",
            disabled: v(p) || ((z = v(C)) == null ? void 0 : z.disabled.value),
            required: k.value || void 0,
            name: F.name || ((P = v(C)) == null ? void 0 : P.name.value),
            form: F.form || ((D = v(C)) == null ? void 0 : D.form.value),
            "aria-label": F.ariaLabel,
            "aria-labelledby": F.ariaLabelledby,
            value: F.value,
            "aria-required": k.value || void 0,
            onChange: K[1] || (K[1] = (ae) => v(i) !== void 0 && l("change", v(i))),
            onInput: K[2] || (K[2] = (ae) => v(i) !== void 0 && l("input", v(i)))
          }), null, 16, Au), [
            [Gn, _.value]
          ]),
          B.value || v(d) === !1 ? (m(), N("label", {
            key: 0,
            for: v(s),
            class: j(v(O))
          }, [
            A(F.$slots, "default")
          ], 10, Ou)) : J("", !0)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
}), Eu = ["id"], Pu = ["innerHTML"], Nu = ["textContent"], Iu = /* @__PURE__ */ q({
  __name: "BFormRadioGroup",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: { type: [String, Boolean, Array, Object, Number, null], default: null },
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: "md" },
    stacked: { type: [String, Boolean], default: !1 },
    state: { type: [String, Boolean, null], default: null },
    textField: { default: "text" },
    validated: { type: [String, Boolean], default: !1 },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "radio"), s = _e(() => a.name, "checkbox"), u = r(() => a.autofocus), d = r(() => a.buttons), f = r(() => a.disabled), g = r(() => a.plain), p = r(() => a.required), y = r(() => a.stacked), b = r(() => a.state), V = r(() => a.validated), C = W(null), { focused: c } = xe(C, {
      initialValue: u.value
    });
    at(on, {
      modelValue: n,
      buttonVariant: E(() => a.buttonVariant),
      form: E(() => a.form),
      name: s,
      buttons: d,
      state: b,
      plain: g,
      size: E(() => a.size),
      inline: E(() => !y.value),
      required: p,
      disabled: f
    }), ue(n, (S) => {
      l("input", S), Ne(() => {
        l("change", S);
      });
    });
    const h = w(
      () => a.options.map(
        (S, $) => typeof S == "string" || typeof S == "number" ? {
          props: {
            value: S,
            disabled: f.value
          },
          text: S.toString(),
          html: void 0,
          self: Symbol(`radioGroupOptionItem${$}`)
        } : {
          props: {
            value: S[a.valueField],
            disabled: S[a.disabledField],
            ...S.props ? S.props : {}
          },
          text: S[a.textField],
          html: S[a.htmlField],
          self: Symbol(`radioGroupOptionItem${$}`)
        }
      )
    ), B = w(() => ({
      required: p.value,
      ariaInvalid: a.ariaInvalid,
      state: b.value,
      validated: V.value,
      buttons: d.value,
      stacked: y.value,
      size: a.size
    })), _ = Dl(B), k = jl(B);
    return t({
      blur: () => {
        c.value = !1;
      },
      focus: () => {
        c.value = !0;
      }
    }), (S, $) => (m(), N("div", Q(v(_), {
      id: v(i),
      ref_key: "element",
      ref: C,
      role: "radiogroup",
      class: [v(k), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      A(S.$slots, "first"),
      (m(!0), N(ge, null, Te(h.value, (I) => (m(), x(Sn, Q({
        key: I.self
      }, I.props), {
        default: R(() => [
          I.html ? (m(), N("span", {
            key: 0,
            innerHTML: I.html
          }, null, 8, Pu)) : (m(), N("span", {
            key: 1,
            textContent: Z(I.text)
          }, null, 8, Nu))
        ]),
        _: 2
      }, 1040))), 128)),
      A(S.$slots, "default")
    ], 16, Eu));
  }
}), Lu = ["value", "disabled"], po = /* @__PURE__ */ q({
  __name: "BFormSelectOption",
  props: {
    disabled: { type: [String, Boolean], default: !1 },
    value: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.disabled);
    return (a, l) => (m(), N("option", {
      value: a.value,
      disabled: v(o)
    }, [
      A(a.$slots, "default")
    ], 8, Lu));
  }
}), Fu = ["label"], Cn = /* @__PURE__ */ q({
  __name: "BFormSelectOptionGroup",
  props: {
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    label: { default: void 0 },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(e) {
    const t = e, o = w(
      () => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        no(t.options, "BFormSelectOptionGroup", t)
      )
    );
    return (a, l) => (m(), N("optgroup", { label: a.label }, [
      A(a.$slots, "first"),
      (m(!0), N(ge, null, Te(o.value, (n, i) => (m(), x(po, Q({
        key: i,
        value: n.value,
        disabled: n.disabled
      }, a.$attrs, {
        innerHTML: n.html || n.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      A(a.$slots, "default")
    ], 8, Fu));
  }
}), Hu = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], zu = /* @__PURE__ */ q({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    labelField: { default: "label" },
    modelValue: { default: "" },
    multiple: { type: [String, Boolean], default: !1 },
    name: { default: void 0 },
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    selectSize: { default: 0 },
    size: { default: "md" },
    state: { type: [String, Boolean, null], default: null },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "input"), s = r(() => a.autofocus), u = r(() => a.disabled), d = r(() => a.multiple), f = r(() => a.plain), g = r(() => a.required), p = r(() => a.state), y = he(() => a.selectSize), b = wt(p), V = W(null), { focused: C } = xe(V, {
      initialValue: s.value
    }), c = w(() => [
      b.value,
      {
        "form-control": f.value,
        [`form-control-${a.size}`]: a.size !== "md" && f.value,
        "form-select": !f.value,
        [`form-select-${a.size}`]: a.size !== "md" && !f.value
      }
    ]), h = E(
      () => y.value || f.value ? y.value : void 0
    ), B = Ca(() => a.ariaInvalid, p), _ = w(() => no(a.options, "BFormSelect", a)), k = w({
      get: () => n.value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set: (S) => {
        l("input", S), n.value = S, Ne(() => {
          l("change", S);
        });
      }
    });
    return t({
      blur: () => {
        C.value = !1;
      },
      element: V,
      focus: () => {
        C.value = !0;
      }
    }), (S, $) => ht((m(), N("select", {
      id: v(i),
      ref_key: "input",
      ref: V,
      "onUpdate:modelValue": $[0] || ($[0] = (I) => k.value = I),
      class: j(c.value),
      name: S.name,
      form: S.form || void 0,
      multiple: v(d) || void 0,
      size: h.value,
      disabled: v(u),
      required: v(g) || void 0,
      "aria-required": v(g) || void 0,
      "aria-invalid": v(B)
    }, [
      A(S.$slots, "first"),
      (m(!0), N(ge, null, Te(_.value, (I, T) => (m(), N(ge, { key: T }, [
        Array.isArray(I.options) ? (m(), x(Cn, {
          key: 0,
          label: I.label,
          options: I.options
        }, null, 8, ["label", "options"])) : (m(), x(po, {
          key: 1,
          value: I.value,
          disabled: I.disabled,
          innerHTML: I.html || I.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      A(S.$slots, "default")
    ], 10, Hu)), [
      [Wn, k.value]
    ]);
  }
}), xo = [
  "ar",
  "az",
  "ckb",
  "fa",
  "he",
  "ks",
  "lrc",
  "mzn",
  "ps",
  "sd",
  "te",
  "ug",
  "ur",
  "yi"
].map((e) => e.toLowerCase()), Ru = (e) => {
  const t = ca(e).toLowerCase().replace(Jn, "").split("-"), o = t.slice(0, 2).join("-"), [a] = t;
  return xo.includes(o) || xo.includes(a);
}, xu = (e) => ds ? Po(e) ? e : { capture: !!e || !1 } : !!(Po(e) ? e.capture : e), Mu = (e, t, o, a) => {
  e && e.addEventListener && e.addEventListener(t, o, xu(a));
}, Du = (e, t, o, a) => {
  e && e.removeEventListener && e.removeEventListener(t, o, a);
}, Mo = (e, t) => {
  (e ? Mu : Du)(...t);
}, na = (e, { preventDefault: t = !0, propagation: o = !0, immediatePropagation: a = !1 } = {}) => {
  t && e.preventDefault(), o && e.stopPropagation(), a && e.stopImmediatePropagation();
}, Na = "ArrowDown", Do = "End", jo = "Home", qo = "PageDown", Go = "PageUp", Ia = "ArrowUp", ju = ["lang", "tabindex", "title"], qu = ["name", "form", "value"], Gu = ["id", "dir", "tabindex", "aria-label", "aria-invalid", "aria-required", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"], je = {
  min: 1,
  max: 100,
  step: 1,
  repeatDelay: 500,
  repeatInterval: 100,
  repeatThreshold: 10,
  repeatMultiplier: 4
}, Wu = /* @__PURE__ */ q({
  __name: "BFormSpinbutton",
  props: {
    ariaControls: { default: void 0 },
    ariaLabel: { default: void 0 },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    formatterFn: { type: Function, default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: !1 },
    labelDecrement: { default: "Decrement" },
    labelIncrement: { default: "Increment" },
    locale: { default: "locale" },
    max: { default: je.max },
    min: { default: je.min },
    modelValue: { default: null },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: [String, Boolean], default: !1 },
    repeatDelay: { default: je.repeatDelay },
    repeatInterval: { default: je.repeatInterval },
    repeatStepMultiplier: { default: je.repeatMultiplier },
    repeatThreshold: { default: je.repeatThreshold },
    required: { type: [String, Boolean], default: !1 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    step: { default: je.step },
    vertical: { type: [String, Boolean], default: !1 },
    wrap: { type: [String, Boolean], default: !1 }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = [Ia, Na, jo, Do, Go, qo], a = e, l = t, n = ke(a, "modelValue", l, { passive: !0 }), i = W(null), { focused: s } = xe(i), u = _e(() => a.id, "spinbutton"), d = r(() => a.disabled), f = r(() => a.inline), g = r(() => a.readonly), p = r(() => a.vertical), y = r(() => a.required), b = r(() => a.wrap), V = r(() => a.state), C = w(() => ({
      disabled: d.value,
      readonly: g.value,
      focus: s.value,
      "d-inline-flex": f.value || p.value,
      "d-flex": !f.value && !p.value,
      "align-items-stretch": !p.value,
      "flex-column": p.value,
      [`form-control-${a.size}`]: a.size !== void 0
    })), c = w(() => ({
      "d-flex": p.value,
      "align-self-center": !p.value,
      "align-items-center": p.value,
      "border-top": p.value,
      "border-bottom": p.value,
      "border-start": !p.value,
      "border-end": !p.value
    }));
    let h, B, _ = !1;
    const k = he(() => a.step), S = E(
      () => Number.isNaN(k.value) ? je.step : k.value
    ), $ = he(() => a.min), I = E(
      () => Number.isNaN($.value) ? je.min : $.value
    ), T = he(() => a.max), O = E(() => {
      const ie = S.value, ce = I.value;
      return Math.floor((T.value - ce) / ie) * ie + ce;
    }), F = he(() => a.repeatDelay, {
      nanToZero: !0,
      method: "parseInt"
    }), K = E(
      () => F.value > 0 ? F.value : je.repeatDelay
    ), z = he(() => a.repeatInterval, {
      nanToZero: !0,
      method: "parseInt"
    }), P = E(
      () => z.value > 0 ? z.value : je.repeatInterval
    ), D = he(() => a.repeatThreshold, {
      nanToZero: !0,
      method: "parseInt"
    }), ae = E(
      () => Math.max(
        Number.isNaN(D.value) ? je.repeatThreshold : D.value,
        1
      )
    ), le = he(() => a.repeatStepMultiplier, {
      nanToZero: !0,
      method: "parseInt"
    }), ve = E(
      () => Math.max(
        Number.isNaN(le.value) ? je.repeatMultiplier : le.value,
        1
      )
    ), Be = E(() => {
      const ie = S.value;
      return Math.floor(ie) === ie ? 0 : (ie.toString().split(".")[1] || "").length;
    }), Ve = E(() => Math.pow(10, Be.value || 0)), oe = E(
      () => n.value === null ? "" : n.value.toFixed(Be.value)
    ), fe = w(() => {
      const ie = [a.locale];
      return new Intl.NumberFormat(ie).resolvedOptions().locale;
    }), $e = w(
      () => (
        // TODO
        Ru(fe.value)
      )
    ), we = () => new Intl.NumberFormat(fe.value, {
      style: "decimal",
      useGrouping: !1,
      minimumIntegerDigits: 1,
      minimumFractionDigits: Be.value,
      maximumFractionDigits: Be.value,
      notation: "standard"
    }).format, M = E(() => a.formatterFn ?? we()), L = (ie) => {
      let { value: ce } = n;
      if (!d.value && ce !== null) {
        const Ce = S.value * ie, Y = I.value, re = O.value, Ae = Ve.value, { wrap: He } = a;
        ce = Math.round((ce - Y) / Ce) * Ce + Y + Ce, ce = Math.round(ce * Ae) / Ae, n.value = ce > re ? He ? Y : re : ce < Y ? He ? re : Y : ce;
      }
    }, U = (ie = 1) => {
      if (n.value === null) {
        n.value = I.value;
        return;
      }
      L(1 * ie);
    }, H = (ie = 1) => {
      if (n.value === null) {
        n.value = b.value ? O.value : I.value;
        return;
      }
      L(-1 * ie);
    };
    qe(
      o,
      (ie) => {
        const { code: ce, altKey: Ce, ctrlKey: Y, metaKey: re } = ie;
        if (!(d.value || g.value || Ce || Y || re) && (na(ie, { propagation: !1 }), !_)) {
          if (me(), [Ia, Na].includes(ce)) {
            if (_ = !0, ce === Ia) {
              G(ie, U);
              return;
            }
            ce === Na && G(ie, H);
            return;
          }
          if (ce === Go) {
            U(ve.value);
            return;
          }
          if (ce === qo) {
            H(ve.value);
            return;
          }
          if (ce === jo) {
            n.value = I.value;
            return;
          }
          ce === Do && (n.value = O.value);
        }
      },
      { target: i, eventName: "keydown" }
    ), qe(
      o,
      (ie) => {
        const { altKey: ce, ctrlKey: Ce, metaKey: Y } = ie;
        d.value || g.value || ce || Ce || Y || (na(ie, { propagation: !1 }), me(), _ = !1, l("change", n.value));
      },
      { target: i, eventName: "keyup" }
    );
    const G = (ie, ce) => {
      const { type: Ce } = ie || {};
      if (!d.value && !g.value) {
        if (X(ie) && Ce === "mousedown" && ie.button)
          return;
        me(), ce(1);
        const Y = ae.value, re = ve.value, Ae = K.value, He = P.value;
        h = setTimeout(() => {
          let Re = 0;
          B = setInterval(() => {
            ce(Re < Y ? 1 : re), Re++;
          }, He);
        }, Ae);
      }
    }, X = (ie) => ie.type === "mouseup" || ie.type === "mousedown", te = (ie) => {
      X(ie) && ie.type === "mouseup" && ie.button || (na(ie, { propagation: !1 }), me(), be(!1), l("change", n.value));
    }, be = (ie) => {
      try {
        Mo(ie, [document.body, "mouseup", te, !1]), Mo(ie, [document.body, "touchend", te, !1]);
      } catch {
      }
    }, me = () => {
      clearTimeout(h), clearInterval(B), h = void 0, B = void 0;
    }, de = w(() => {
      const ie = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-plus",
          viewBox: "0 0 16 16"
        },
        path: {
          d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        }
      }, ce = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-dash",
          viewBox: "0 0 16 16"
        },
        path: { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }
      }, Ce = {
        class: [{ "py-0": !p.value }, "btn", "btn-sm", "border-0", "rounded-0"],
        tabindex: "-1",
        type: "button",
        disabled: d.value || g.value,
        "aria-disabled": d.value || g.value ? !0 : void 0,
        "aria-controls": u.value
      }, Y = {
        "aria-hidden": !0,
        scale: s.value ? 1.5 : 1.25
      }, re = (Re, kt) => {
        !d.value && !g.value && (na(Re, { propagation: !1 }), be(!0), s.value = !0, G(Re, kt));
      }, Ae = {
        button: {
          ...Ce,
          "aria-label": a.labelIncrement || void 0,
          "aria-keyshortcuts": "ArrowUp"
        },
        svg: {
          ...Y,
          ...ie.svg
        },
        path: {
          ...ie.path
        },
        slot: {
          name: "increment"
        },
        handler: (Re) => re(Re, U)
      }, He = {
        button: {
          ...Ce,
          "aria-label": a.labelDecrement || void 0,
          "aria-keyshortcuts": "ArrowDown"
        },
        svg: {
          ...Y,
          ...ce.svg
        },
        path: {
          ...ce.path
        },
        slot: {
          name: "decrement"
        },
        handler: (Re) => re(Re, H)
      };
      return {
        top: {
          ...p.value ? Ae : He
        },
        bottom: {
          ...p.value ? He : Ae
        }
      };
    });
    return (ie, ce) => (m(), N("div", {
      ref_key: "element",
      ref: i,
      class: j(["b-form-spinbutton form-control", C.value]),
      role: "group",
      lang: fe.value,
      tabindex: v(d) ? void 0 : "-1",
      title: ie.ariaLabel,
      onClick: ce[4] || (ce[4] = (Ce) => s.value = !0)
    }, [
      A(ie.$slots, de.value.top.slot.name, { hasFocus: v(s) }, () => [
        ee("button", Q(de.value.top.button, {
          onMousedown: ce[0] || (ce[0] = //@ts-ignore
          (...Ce) => de.value.top.handler && de.value.top.handler(...Ce)),
          onTouchstart: ce[1] || (ce[1] = //@ts-ignore
          (...Ce) => de.value.top.handler && de.value.top.handler(...Ce))
        }), [
          (m(), N("svg", Se(Ee(de.value.top.svg)), [
            ee("path", Se(Ee(de.value.top.path)), null, 16)
          ], 16))
        ], 16)
      ]),
      ie.name && !v(d) ? (m(), N("input", {
        key: "hidden",
        type: "hidden",
        name: ie.name,
        form: ie.form,
        value: oe.value
      }, null, 8, qu)) : J("", !0),
      ee("output", {
        id: v(u),
        key: "output",
        class: j(["flex-grow-1", c.value]),
        dir: $e.value ? "rtl" : "ltr",
        tabindex: v(d) ? void 0 : "0",
        role: "spinbutton",
        "aria-live": "off",
        "aria-label": ie.ariaLabel || void 0,
        "aria-invalid": v(V) === !1 || !v(n) !== null && v(y) ? !0 : void 0,
        "aria-required": v(y) ? !0 : void 0,
        "aria-valuemin": I.value,
        "aria-valuemax": O.value,
        "aria-valuenow": v(n) !== null ? v(n) : void 0,
        "aria-valuetext": v(n) !== null ? M.value(v(n)) : void 0
      }, [
        ee("bdi", null, Z((v(n) !== null ? M.value(v(n)) : ie.placeholder) || ""), 1)
      ], 10, Gu),
      A(ie.$slots, de.value.bottom.slot.name, { hasFocus: v(s) }, () => [
        ee("button", Q(de.value.bottom.button, {
          onMousedown: ce[2] || (ce[2] = //@ts-ignore
          (...Ce) => de.value.bottom.handler && de.value.bottom.handler(...Ce)),
          onTouchstart: ce[3] || (ce[3] = //@ts-ignore
          (...Ce) => de.value.bottom.handler && de.value.bottom.handler(...Ce))
        }), [
          (m(), N("svg", Se(Ee(de.value.bottom.svg)), [
            ee("path", Se(Ee(de.value.bottom.path)), null, 16)
          ], 16))
        ], 16)
      ])
    ], 10, ju));
  }
}), Uu = ["id"], wn = /* @__PURE__ */ q({
  __name: "BFormTag",
  props: {
    disabled: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    noRemove: { type: [String, Boolean], default: !1 },
    pill: { type: [String, Boolean], default: !1 },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    title: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = Me(), n = _e(() => o.id), i = r(() => o.disabled), s = r(() => o.noRemove), u = r(() => o.pill), d = w(
      () => {
        var p;
        return ((((p = l.default) == null ? void 0 : p.call(l, {})[0].children) ?? "").toString() || o.title) ?? "";
      }
    ), f = E(() => `${n.value}taglabel__`), g = w(() => ({
      [`text-bg-${o.variant}`]: o.variant !== null,
      "rounded-pill": u.value,
      disabled: i.value
    }));
    return (p, y) => (m(), x(se(p.tag), {
      id: v(n),
      title: d.value,
      class: j(["badge b-form-tag d-inline-flex align-items-center mw-100", g.value]),
      "aria-labelledby": f.value
    }, {
      default: R(() => [
        ee("span", {
          id: f.value,
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          A(p.$slots, "default", {}, () => [
            ne(Z(d.value), 1)
          ])
        ], 8, Uu),
        !v(i) && !v(s) ? (m(), x(Dt, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": p.removeLabel,
          class: "b-form-tag-remove",
          "aria-describedby": f.value,
          "aria-controls": p.id,
          onClick: y[0] || (y[0] = (b) => a("remove", d.value))
        }, null, 8, ["aria-label", "aria-describedby", "aria-controls"])) : J("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), Xu = ["id"], Ku = ["id", "for", "aria-live"], Yu = ["id", "aria-live"], Zu = ["id"], Ju = ["aria-controls"], Qu = {
  role: "group",
  class: "d-flex"
}, ed = ["id", "disabled", "value", "type", "placeholder", "form", "required", "aria-required"], td = ["disabled"], ad = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, od = {
  key: 0,
  class: "d-block invalid-feedback"
}, ld = {
  key: 1,
  class: "form-text text-body-secondary"
}, nd = {
  key: 2,
  class: "form-text text-body-secondary"
}, sd = ["name", "value"], id = /* @__PURE__ */ q({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { type: [String, Boolean], default: !1 },
    autofocus: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    duplicateTagText: { default: "Duplicate tag(s)" },
    form: { default: void 0 },
    inputAttrs: { default: void 0 },
    inputClass: { default: void 0 },
    inputId: { default: void 0 },
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    limit: { default: void 0 },
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: { default: void 0 },
    noAddOnEnter: { type: [String, Boolean], default: !1 },
    noOuterFocus: { type: [String, Boolean], default: !1 },
    noTagRemove: { type: [String, Boolean], default: !1 },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    separator: { default: void 0 },
    size: { default: "md" },
    state: { type: [String, Boolean, null], default: null },
    tagClass: { default: void 0 },
    tagPills: { type: [String, Boolean], default: !1 },
    tagRemoveLabel: { default: void 0 },
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => !0 },
    tagVariant: { default: "secondary" }
  },
  emits: ["blur", "focus", "focusin", "focusout", "input", "tag-state", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(), s = r(() => a.addOnChange), u = r(() => a.autofocus), d = r(() => a.disabled), f = r(() => a.noAddOnEnter), g = r(() => a.noOuterFocus), p = r(() => a.noTagRemove), y = r(() => a.removeOnDelete), b = r(() => a.required), V = r(() => a.state), C = r(() => a.tagPills), c = he(() => a.limit ?? NaN), h = wt(V), B = W(null), { focused: _ } = xe(B, {
      initialValue: u.value
    }), k = E(() => a.inputId || `${i.value}input__`), S = W(n.value), $ = W(""), I = W(n.value.length > 0), T = W(""), O = W([]), F = W([]), K = W([]), z = w(() => [
      h.value,
      {
        [`form-control-${a.size}`]: a.size !== "md",
        disabled: d.value,
        focus: _.value
      }
    ]), P = w(() => S.value.includes($.value)), D = w(
      () => $.value === "" ? !1 : !a.tagValidator($.value)
    ), ae = E(() => S.value.length === c.value), le = E(() => !D.value && !P.value), ve = w(() => ({
      addButtonText: a.addButtonText,
      addButtonVariant: a.addButtonVariant,
      addTag: U,
      disableAddButton: le.value,
      disabled: d.value,
      duplicateTagText: a.duplicateTagText,
      duplicateTags: K.value,
      form: a.form,
      inputAttrs: {
        ...a.inputAttrs,
        disabled: d.value,
        form: a.form,
        id: k,
        value: $
      },
      inputHandlers: {
        input: fe,
        keydown: we,
        change: $e
      },
      inputId: k,
      inputType: a.inputType,
      invalidTagText: a.invalidTagText,
      invalidTags: F.value,
      isDuplicate: P.value,
      isInvalid: D.value,
      isLimitReached: ae.value,
      limitTagsText: a.limitTagsText,
      limit: c.value,
      noTagRemove: p.value,
      placeholder: a.placeholder,
      removeTag: H,
      required: b.value,
      separator: a.separator,
      size: a.size,
      state: V.value,
      tagClass: a.tagClass,
      tagPills: C.value,
      tagRemoveLabel: a.tagRemoveLabel,
      tagVariant: a.tagVariant,
      tags: S.value
    }));
    ue(n, (G) => {
      S.value = G;
    });
    const Be = (G) => {
      if (d.value) {
        G.target.blur();
        return;
      }
      l("focusin", G);
    }, Ve = (G) => {
      d.value || g.value || (_.value = !0, l("focus", G));
    }, oe = (G) => {
      _.value = !1, l("blur", G);
    }, fe = (G) => {
      var te, be;
      const X = typeof G == "string" ? G : G.target.value;
      if (I.value = !1, (te = a.separator) != null && te.includes(X.charAt(0)) && X.length > 0) {
        B.value && (B.value.value = "");
        return;
      }
      if ($.value = X, (be = a.separator) != null && be.includes(X.charAt(X.length - 1))) {
        U(X.slice(0, X.length - 1));
        return;
      }
      O.value = a.tagValidator(X) && !P.value ? [X] : [], F.value = a.tagValidator(X) ? [] : [X], K.value = P.value ? [X] : [], l("tag-state", O.value, F.value, K.value);
    }, $e = (G) => {
      s.value && (fe(G), P.value || U($.value));
    }, we = (G) => {
      if (G.key === "Enter" && !f.value) {
        U($.value);
        return;
      }
      (G.key === "Backspace" || G.key === "Delete") && y.value && $.value === "" && I.value && S.value.length > 0 ? H(S.value[S.value.length - 1]) : I.value = !0;
    };
    qe(we, { target: B });
    const M = w(() => {
      if (a.separator)
        return typeof a.separator == "string" ? a.separator : a.separator.join("");
    }), L = w(() => {
      if (M.value)
        return new RegExp(`[${os(M.value)}]+`);
    }), U = (G) => {
      G = (G ?? $.value).trim();
      const X = L.value ? G.split(L.value).map((me) => me.trim()) : [G], te = [];
      for (const me of X)
        if (!(me === "" || P.value || !a.tagValidator(me))) {
          if (c.value && ae.value)
            break;
          te.push(me);
        }
      const be = [...n.value, ...te];
      $.value = "", I.value = !0, n.value = be, l("input", be), _.value = !0;
    }, H = (G) => {
      const X = S.value.indexOf((G == null ? void 0 : G.toString()) ?? "");
      T.value = S.value.splice(X, 1).toString(), n.value = S.value;
    };
    return t({
      blur: () => {
        _.value = !1;
      },
      element: B,
      focus: () => {
        _.value = !0;
      }
    }), (G, X) => (m(), N("div", {
      id: v(i),
      class: j(["b-form-tags form-control h-auto", z.value]),
      role: "group",
      tabindex: "-1",
      onFocusin: Be,
      onFocusout: X[1] || (X[1] = (te) => l("focusout", te))
    }, [
      ee("output", {
        id: `${v(i)}selected_tags__`,
        class: "visually-hidden",
        for: k.value,
        "aria-live": v(_) ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, Z(S.value.join(", ")), 9, Ku),
      ee("div", {
        id: `${v(i)}removed_tags__`,
        role: "status",
        "aria-live": v(_) ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + Z(G.tagRemovedLabel) + ") " + Z(T.value), 9, Yu),
      A(G.$slots, "default", Se(Ee(ve.value)), () => [
        ee("ul", {
          id: `${v(i)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (m(!0), N(ge, null, Te(S.value, (te, be) => A(G.$slots, "tag", {
            key: be,
            tag: te,
            tagClass: G.tagClass,
            tagVariant: G.tagVariant,
            tagPills: v(C),
            removeTag: H
          }, () => [
            (m(), x(wn, {
              key: te,
              class: j(G.tagClass),
              tag: "li",
              variant: G.tagVariant,
              pill: G.tagPills,
              onRemove: H
            }, {
              default: R(() => [
                ne(Z(te), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"]))
          ])), 128)),
          ee("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${v(i)}tag_list__`
          }, [
            ee("div", Qu, [
              ee("input", Q({
                id: k.value,
                ref_key: "input",
                ref: B,
                disabled: v(d),
                value: $.value,
                type: G.inputType,
                placeholder: G.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, G.inputAttrs, {
                form: G.form,
                required: v(b) || void 0,
                "aria-required": v(b) || void 0,
                onInput: fe,
                onChange: $e,
                onFocus: Ve,
                onBlur: oe
              }), null, 16, ed),
              le.value ? (m(), N("button", {
                key: 0,
                type: "button",
                class: j(["btn b-form-tags-button py-0", [
                  G.inputClass,
                  {
                    [`btn-${G.addButtonVariant}`]: G.addButtonVariant !== null,
                    "disabled invisible": $.value.length === 0
                  }
                ]]),
                style: { "font-size": "90%" },
                disabled: v(d) || $.value.length === 0 || ae.value,
                onClick: X[0] || (X[0] = (te) => U($.value))
              }, [
                A(G.$slots, "add-button-text", {}, () => [
                  ne(Z(G.addButtonText), 1)
                ])
              ], 10, td)) : J("", !0)
            ])
          ], 8, Ju)
        ], 8, Zu),
        ee("div", ad, [
          D.value ? (m(), N("div", od, Z(G.invalidTagText) + ": " + Z($.value), 1)) : J("", !0),
          P.value ? (m(), N("small", ld, Z(G.duplicateTagText) + ": " + Z($.value), 1)) : J("", !0),
          S.value.length === G.limit ? (m(), N("small", nd, "Tag limit reached")) : J("", !0)
        ])
      ]),
      G.name ? (m(!0), N(ge, { key: 0 }, Te(S.value, (te, be) => (m(), N("input", {
        key: be,
        type: "hidden",
        name: G.name,
        value: te
      }, null, 8, sd))), 128)) : J("", !0)
    ], 42, Xu));
  }
}), rd = ["id", "name", "form", "value", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"], ud = /* @__PURE__ */ q({
  __name: "BFormTextarea",
  props: {
    noResize: { type: [String, Boolean], default: !1 },
    rows: { default: 2 },
    wrap: { default: "soft" },
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: [String, Boolean], default: !1 },
    disabled: { type: [String, Boolean], default: !1 },
    form: { default: void 0 },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: !1 },
    lazyFormatter: { type: [String, Boolean], default: !1 },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    number: { type: [String, Boolean], default: !1 },
    placeholder: { default: void 0 },
    plaintext: { type: [String, Boolean], default: !1 },
    readonly: { type: [String, Boolean], default: !1 },
    required: { type: [String, Boolean], default: !1 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    trim: { type: [String, Boolean], default: !1 }
  },
  emits: ["blur", "change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { input: n, computedId: i, computedAriaInvalid: s, onInput: u, onChange: d, onBlur: f, focus: g, blur: p } = ql(a, l), y = r(() => a.disabled), b = r(() => a.required), V = r(() => a.readonly), C = r(() => a.plaintext), c = r(() => a.noResize), h = r(() => a.state), B = wt(h), _ = w(() => [
      B.value,
      {
        "form-control": !a.plaintext,
        "form-control-plaintext": a.plaintext,
        [`form-control-${a.size}`]: !!a.size
      }
    ]), k = w(() => ({
      resize: c.value ? "none" : void 0
    }));
    return t({
      blur: p,
      element: n,
      focus: g
    }), (S, $) => (m(), N("textarea", {
      id: v(i),
      ref_key: "input",
      ref: n,
      class: j(_.value),
      name: S.name || void 0,
      form: S.form || void 0,
      value: S.modelValue,
      disabled: v(y),
      placeholder: S.placeholder,
      required: v(b) || void 0,
      autocomplete: S.autocomplete || void 0,
      readonly: v(V) || v(C),
      "aria-required": S.required || void 0,
      "aria-invalid": v(s),
      rows: S.rows,
      style: ze(k.value),
      wrap: S.wrap || void 0,
      onInput: $[0] || ($[0] = (I) => v(u)(I)),
      onChange: $[1] || ($[1] = (I) => v(d)(I)),
      onBlur: $[2] || ($[2] = (I) => v(f)(I))
    }, null, 46, rd));
  }
}), dd = {
  key: 0,
  class: "input-group-text"
}, cd = ["innerHTML"], fd = { key: 1 }, vd = {
  key: 0,
  class: "input-group-text"
}, pd = ["innerHTML"], md = { key: 1 }, gd = /* @__PURE__ */ q({
  __name: "BInputGroup",
  props: {
    append: { default: void 0 },
    appendHtml: { default: void 0 },
    id: { default: void 0 },
    prepend: { default: void 0 },
    prependHtml: { default: void 0 },
    size: { default: "md" },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`input-group-${t.size}`]: t.size !== "md"
    })), a = E(() => !!t.append || !!t.appendHtml), l = E(() => !!t.prepend || !!t.prependHtml);
    return (n, i) => (m(), x(se(n.tag), {
      id: n.id,
      class: j(["input-group", o.value]),
      role: "group"
    }, {
      default: R(() => [
        A(n.$slots, "prepend", {}, () => [
          l.value ? (m(), N("span", dd, [
            n.prependHtml ? (m(), N("span", {
              key: 0,
              innerHTML: n.prependHtml
            }, null, 8, cd)) : (m(), N("span", fd, Z(n.prepend), 1))
          ])) : J("", !0)
        ]),
        A(n.$slots, "default"),
        A(n.$slots, "append", {}, () => [
          a.value ? (m(), N("span", vd, [
            n.appendHtml ? (m(), N("span", {
              key: 0,
              innerHTML: n.appendHtml
            }, null, 8, pd)) : (m(), N("span", md, Z(n.append), 1))
          ])) : J("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), kn = /* @__PURE__ */ q({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (m(), x(se(t.tag), { class: "input-group-text" }, {
      default: R(() => [
        A(t.$slots, "default", {}, () => [
          ne(Z(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), mo = /* @__PURE__ */ q({
  __name: "BInputGroupAddon",
  props: {
    isText: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.isText);
    return (a, l) => v(o) ? (m(), x(kn, { key: 0 }, {
      default: R(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    })) : A(a.$slots, "default", { key: 1 });
  }
}), bd = /* @__PURE__ */ q({
  __name: "BInputGroupAppend",
  props: {
    isText: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    return (t, o) => (m(), x(mo, Se(Ee(t.$props)), {
      default: R(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yd = /* @__PURE__ */ q({
  __name: "BInputGroupPrepend",
  props: {
    isText: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    return (t, o) => (m(), x(mo, Se(Ee(t.$props)), {
      default: R(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hd = /* @__PURE__ */ q({
  __name: "BListGroup",
  props: {
    flush: { type: [String, Boolean], default: !1 },
    horizontal: { type: [String, Boolean], default: !1 },
    numbered: { type: [String, Boolean], default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = r(() => t.flush), a = r(() => t.numbered), l = r(() => t.horizontal), n = w(() => {
      const s = o.value ? !1 : l.value;
      return {
        "list-group-flush": o.value,
        "list-group-horizontal": s === !0,
        [`list-group-horizontal-${s}`]: typeof s == "string",
        "list-group-numbered": a.value
      };
    }), i = E(() => a.value === !0 ? "ol" : t.tag);
    return at(Ql, {
      numbered: a
    }), (s, u) => (m(), x(se(i.value), {
      class: j(["list-group", n.value])
    }, {
      default: R(() => [
        A(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bd = /* @__PURE__ */ q({
  __name: "BListGroupItem",
  props: {
    action: { type: [String, Boolean], default: !1 },
    button: { type: [String, Boolean], default: !1 },
    tag: { default: "div" },
    active: { type: [String, Boolean], default: !1 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = Kt(), a = Ge(Ql, null), l = r(() => t.action), n = r(() => t.active), i = r(() => t.button), s = r(() => t.disabled), { computedLink: u } = Ct(t), d = E(() => !i.value && u.value), f = E(
      () => a != null && a.numbered.value ? "li" : i.value ? "button" : d.value ? rt : t.tag
    ), g = w(
      () => l.value || d.value || i.value || ["a", "router-link", "button", "b-link"].includes(t.tag)
    ), p = w(() => ({
      [`list-group-item-${t.variant}`]: t.variant !== null && t.variant !== void 0,
      "list-group-item-action": g.value,
      active: n.value,
      disabled: s.value
    })), y = w(() => {
      const b = {};
      return i.value && ((!o || !o.type) && (b.type = "button"), s.value && (b.disabled = !0)), b;
    });
    return (b, V) => (m(), x(se(f.value), Q({
      class: ["list-group-item", p.value],
      "aria-current": v(n) ? !0 : void 0,
      "aria-disabled": v(s) ? !0 : void 0,
      target: d.value ? b.target : void 0,
      href: v(i) ? void 0 : b.href,
      to: v(i) ? void 0 : b.to
    }, y.value), {
      default: R(() => [
        A(b.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), Ta = /* @__PURE__ */ q({
  __name: "BOverlay",
  props: {
    bgColor: { default: void 0 },
    blur: { default: "2px" },
    fixed: { type: [String, Boolean], default: !1 },
    noCenter: { type: [String, Boolean], default: !1 },
    noFade: { type: [String, Boolean], default: !1 },
    noSpinner: { type: [String, Boolean], default: !1 },
    noWrap: { type: [String, Boolean], default: !1 },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    show: { type: [String, Boolean], default: !1 },
    spinnerSmall: { type: [String, Boolean], default: !1 },
    spinnerType: { default: "border" },
    spinnerVariant: { default: void 0 },
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 },
    rounded: { type: [String, Number, Boolean], default: !1 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  emits: ["click", "hidden", "shown"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = { top: 0, left: 0, bottom: 0, right: 0 }, n = r(() => o.fixed), i = r(() => o.noSpinner), s = r(() => o.noCenter), u = r(() => o.noWrap), d = r(() => o.show), f = r(() => o.spinnerSmall), g = r(() => o.rounded), p = r(() => o.roundedTop), y = r(() => o.roundedBottom), b = r(() => o.roundedStart), V = r(() => o.roundedEnd), C = io(() => ({
      rounded: g.value,
      roundedTop: p.value,
      roundedBottom: y.value,
      roundedStart: b.value,
      roundedEnd: V.value
    })), c = E(
      () => o.variant !== null && !o.bgColor ? `bg-${o.variant}` : ""
    ), h = E(() => d.value ? !0 : null), B = w(() => ({
      type: o.spinnerType,
      variant: o.spinnerVariant,
      small: f.value
    })), _ = w(() => ({
      ...l,
      zIndex: o.zIndex || 10
    })), k = w(() => ({
      "position-absolute": !u.value || !n.value,
      "position-fixed": u.value && n.value
    })), S = w(() => [c.value, C.value]), $ = w(() => ({
      ...l,
      opacity: o.opacity,
      backgroundColor: o.bgColor || void 0,
      backdropFilter: o.blur ? `blur(${o.blur})` : void 0
    })), I = w(
      () => s.value ? l : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (T, O) => (m(), x(se(T.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": h.value
    }, {
      default: R(() => [
        A(T.$slots, "default"),
        ye(Mt, {
          "no-fade": T.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: O[1] || (O[1] = (F) => a("shown")),
          onOnAfterLeave: O[2] || (O[2] = (F) => a("hidden"))
        }, {
          default: R(() => [
            v(d) ? (m(), x(se(T.overlayTag), {
              key: 0,
              class: j(["b-overlay", k.value]),
              style: ze(_.value),
              onClick: O[0] || (O[0] = (F) => a("click", F))
            }, {
              default: R(() => [
                ee("div", {
                  class: j(["position-absolute", S.value]),
                  style: ze($.value)
                }, null, 6),
                ee("div", {
                  class: "position-absolute",
                  style: ze(I.value)
                }, [
                  A(T.$slots, "overlay", Se(Ee(B.value)), () => [
                    v(i) ? J("", !0) : (m(), x(ka, Se(Q({ key: 0 }, B.value)), null, 16))
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : J("", !0)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), Sd = ["id", "aria-labelledby", "aria-describedby"], Cd = ["id"], Wo = 1056, wd = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BModal",
  props: {
    autoFocus: { type: [String, Boolean], default: !0 },
    autoFocusButton: { default: void 0 },
    backdropVariant: { default: void 0 },
    bodyBgVariant: { default: null },
    bodyClass: { default: void 0 },
    bodyScrolling: { type: [String, Boolean], default: !1 },
    bodyTextVariant: { default: null },
    bodyVariant: { default: null },
    busy: { type: [String, Boolean], default: !1 },
    buttonSize: { default: "md" },
    cancelDisabled: { type: [String, Boolean], default: !1 },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { type: [String, Boolean], default: !1 },
    contentClass: { default: void 0 },
    dialogClass: { default: void 0 },
    footerBgVariant: { default: null },
    footerBorderVariant: { default: null },
    footerClass: { default: void 0 },
    footerTextVariant: { default: null },
    footerVariant: { default: null },
    fullscreen: { type: [String, Boolean], default: !1 },
    headerBgVariant: { default: null },
    headerBorderVariant: { default: null },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    headerTextVariant: { default: null },
    headerVariant: { default: null },
    hideBackdrop: { type: [String, Boolean], default: !1 },
    hideFooter: { type: [String, Boolean], default: !1 },
    hideHeader: { type: [String, Boolean], default: !1 },
    hideHeaderClose: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: !1 },
    modalClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: !1 },
    noCloseOnBackdrop: { type: [String, Boolean], default: !1 },
    noCloseOnEsc: { type: [String, Boolean], default: !1 },
    noFade: { type: [String, Boolean], default: !1 },
    okDisabled: { type: [String, Boolean], default: !1 },
    okOnly: { type: [String, Boolean], default: !1 },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { type: [String, Boolean], default: !1 },
    size: { default: "md" },
    teleportDisabled: { type: [String, Boolean], default: !1 },
    teleportTo: { default: "body" },
    title: { default: void 0 },
    titleClass: { default: void 0 },
    titleSrOnly: { type: [String, Boolean], default: !1 },
    titleTag: { default: "h5" }
  },
  emits: ["cancel", "close", "hidden", "hide", "hide-prevented", "ok", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = _e(() => a.id, "modal"), s = ke(a, "modelValue", l, { passive: !0 }), u = r(() => a.busy), d = r(() => a.lazy), f = r(() => a.cancelDisabled), g = r(() => a.centered), p = r(() => a.hideBackdrop), y = r(() => a.hideFooter), b = r(() => a.hideHeader), V = r(() => a.hideHeaderClose), C = r(s), c = r(() => a.noCloseOnBackdrop), h = r(() => a.noCloseOnEsc), B = r(() => a.noFade), _ = r(() => a.autoFocus), k = r(() => a.okDisabled), S = r(() => a.okOnly), $ = r(() => a.scrollable), I = r(() => a.titleSrOnly), T = r(() => a.teleportDisabled), O = r(() => a.bodyScrolling), F = r(() => a.fullscreen), K = W(null), z = W(null), P = W(null), D = W(null), ae = W(C.value), le = W(!1);
    qe(
      "Escape",
      () => {
        Y("esc");
      },
      { target: K }
    ), Wl(C, O);
    const { focused: ve } = xe(K, {
      initialValue: C.value && a.autoFocusButton === void 0
    }), { focused: Be } = xe(z, {
      initialValue: C.value && a.autoFocusButton === "ok"
    }), { focused: Ve } = xe(P, {
      initialValue: C.value && a.autoFocusButton === "cancel"
    }), { focused: oe } = xe(D, {
      initialValue: C.value && a.autoFocusButton === "close"
    }), fe = w(() => [
      a.modalClass,
      {
        fade: !B.value,
        show: ae.value
      }
    ]), $e = E(
      () => d.value === !1 || d.value === !0 && le.value === !0 || d.value === !0 && C.value === !0
    ), we = E(
      () => a.backdropVariant !== void 0 ? a.backdropVariant : p.value ? "transparent" : "dark"
    ), M = E(() => !Ie(n["header-close"])), L = w(() => [
      a.dialogClass,
      {
        "modal-fullscreen": F.value === !0,
        [`modal-fullscreen-${F.value}-down`]: typeof F.value == "string",
        [`modal-${a.size}`]: a.size !== "md",
        "modal-dialog-centered": g.value,
        "modal-dialog-scrollable": $.value
      }
    ]), U = Qe(() => ({
      bgVariant: a.bodyBgVariant,
      textVariant: a.bodyTextVariant,
      variant: a.bodyVariant
    })), H = w(() => [a.bodyClass, U.value]), G = Qe(() => ({
      bgVariant: a.headerBgVariant,
      textVariant: a.headerTextVariant,
      variant: a.headerVariant
    })), X = w(() => [
      a.headerClass,
      G.value,
      {
        [`border-${a.headerBorderVariant}`]: a.headerBorderVariant !== null
      }
    ]), te = w(() => ({
      variant: M.value ? a.headerCloseVariant : void 0,
      class: a.headerCloseClass
    })), be = Qe(() => ({
      bgVariant: a.footerBgVariant,
      textVariant: a.footerTextVariant,
      variant: a.footerVariant
    })), me = w(() => [
      a.footerClass,
      be.value,
      {
        [`border-${a.footerBorderVariant}`]: a.footerBorderVariant !== null
      }
    ]), de = w(() => [
      a.titleClass,
      {
        "visually-hidden": I.value
      }
    ]), ie = E(() => f.value || u.value), ce = E(() => k.value || u.value), Ce = (pe, Pe = {}) => new Rt(pe, {
      cancelable: !1,
      target: K.value || null,
      relatedTarget: null,
      trigger: null,
      ...Pe,
      componentId: i.value
    });
    ue(C, (pe, Pe) => {
      pe !== Pe && (pe === !0 ? re() : Y());
    });
    const Y = (pe = "") => {
      if (pe === "backdrop" && c.value || pe === "esc" && h.value) {
        l("hide-prevented");
        return;
      }
      const Pe = Ce("hide", { cancelable: pe !== "", trigger: pe });
      if (pe === "ok" && l(pe, Pe), pe === "cancel" && l(pe, Pe), pe === "close" && l(pe, Pe), l("hide", Pe), Pe.defaultPrevented) {
        l("hide-prevented"), s.value || (s.value = !0);
        return;
      }
      s.value && (s.value = !1);
    }, re = () => {
      const pe = Ce("show", { cancelable: !0 });
      if (l("show", pe), pe.defaultPrevented) {
        s.value && (s.value = !1), l("show-prevented");
        return;
      }
      s.value || (s.value = !0);
    }, Ae = () => {
      _.value !== !1 && (a.autoFocusButton === "ok" ? Be.value = !0 : a.autoFocusButton === "close" ? oe.value = !0 : a.autoFocusButton === "cancel" ? Ve.value = !0 : ve.value = !0);
    }, He = () => re(), Re = () => {
      ae.value = !0, Ae(), l("shown", Ce("shown")), d.value === !0 && (le.value = !0);
    }, kt = () => {
      ae.value = !1;
    }, Nn = () => {
      l("hidden", Ce("hidden")), d.value === !0 && (le.value = !1);
    }, { activePosition: In, activeModalCount: Ln } = Mi(ae), Fn = w(() => ({
      // Make sure that newly opened modals have a higher z-index than currently active ones.
      // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
      //
      // This means inactive modals will already be higher than active ones when opened.
      "z-index": ae.value ? Wo - (Ln.value - In.value) : Wo
    }));
    Oe(K, "bv-toggle", () => {
      C.value ? Y() : re();
    });
    const $t = da({
      cancel: () => {
        Y("cancel");
      },
      close: () => {
        Y("close");
      },
      hide: Y,
      ok: () => {
        Y("ok");
      },
      visible: C
    });
    return t({
      hide: Y,
      id: i,
      show: re
    }), (pe, Pe) => (m(), x(zt, {
      to: pe.teleportTo,
      disabled: v(T)
    }, [
      ye(Mt, {
        "no-fade": !0,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: He,
        onAfterEnter: Re,
        onLeave: kt,
        onAfterLeave: Nn
      }, {
        default: R(() => [
          ht(ee("div", Q({
            id: v(i),
            ref_key: "element",
            ref: K,
            class: ["modal", fe.value],
            role: "dialog",
            "aria-labelledby": v(b) ? void 0 : `${v(i)}-label`,
            "aria-describedby": `${v(i)}-body`,
            tabindex: "-1"
          }, pe.$attrs, { style: Fn.value }), [
            ee("div", {
              class: j(["modal-dialog", L.value])
            }, [
              $e.value ? (m(), N("div", {
                key: 0,
                class: j(["modal-content", pe.contentClass])
              }, [
                v(b) ? J("", !0) : (m(), N("div", {
                  key: 0,
                  class: j(["modal-header", X.value])
                }, [
                  A(pe.$slots, "header", Se(Ee($t)), () => [
                    (m(), x(se(pe.titleTag), {
                      id: `${v(i)}-label`,
                      class: j(["modal-title", de.value])
                    }, {
                      default: R(() => [
                        A(pe.$slots, "title", Se(Ee($t)), () => [
                          ne(Z(pe.title), 1)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    v(V) ? J("", !0) : (m(), N(ge, { key: 0 }, [
                      M.value ? (m(), x(pt, Q({ key: 0 }, te.value, {
                        onClick: Pe[0] || (Pe[0] = (Jt) => Y("close"))
                      }), {
                        default: R(() => [
                          A(pe.$slots, "header-close", {}, void 0, !0)
                        ]),
                        _: 3
                      }, 16)) : (m(), x(Dt, Q({
                        key: 1,
                        "aria-label": pe.headerCloseLabel
                      }, te.value, {
                        onClick: Pe[1] || (Pe[1] = (Jt) => Y("close"))
                      }), null, 16, ["aria-label"]))
                    ], 64))
                  ], !0)
                ], 2)),
                ee("div", {
                  id: `${v(i)}-body`,
                  class: j(["modal-body", H.value])
                }, [
                  A(pe.$slots, "default", Se(Ee($t)), void 0, !0)
                ], 10, Cd),
                v(y) ? J("", !0) : (m(), N("div", {
                  key: 1,
                  class: j(["modal-footer", me.value])
                }, [
                  A(pe.$slots, "footer", Se(Ee($t)), () => [
                    A(pe.$slots, "cancel", Se(Ee($t)), () => [
                      v(S) ? J("", !0) : (m(), x(pt, {
                        key: 0,
                        ref_key: "cancelButton",
                        ref: P,
                        disabled: ie.value,
                        size: pe.buttonSize,
                        variant: pe.cancelVariant,
                        onClick: Pe[2] || (Pe[2] = (Jt) => Y("cancel"))
                      }, {
                        default: R(() => [
                          ne(Z(pe.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], !0),
                    A(pe.$slots, "ok", Se(Ee($t)), () => [
                      ye(pt, {
                        ref_key: "okButton",
                        ref: z,
                        disabled: ce.value,
                        size: pe.buttonSize,
                        variant: pe.okVariant,
                        onClick: Pe[3] || (Pe[3] = (Jt) => Y("ok"))
                      }, {
                        default: R(() => [
                          ne(Z(pe.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], !0)
                  ], !0)
                ], 2))
              ], 2)) : J("", !0)
            ], 2),
            A(pe.$slots, "backdrop", {}, () => [
              ye(Ta, {
                variant: we.value,
                show: v(C),
                "no-spinner": "",
                fixed: "",
                "no-wrap": "",
                blur: null,
                onClick: Pe[4] || (Pe[4] = (Jt) => Y("backdrop"))
              }, null, 8, ["variant", "show"])
            ], !0)
          ], 16, Sd), [
            [ha, v(C)]
          ])
        ]),
        _: 3
      })
    ], 8, ["to", "disabled"]));
  }
});
const kd = /* @__PURE__ */ $a(wd, [["__scopeId", "data-v-5729d26a"]]), $d = /* @__PURE__ */ q({
  __name: "BNav",
  props: {
    align: { default: void 0 },
    cardHeader: { type: [String, Boolean], default: !1 },
    fill: { type: [String, Boolean], default: !1 },
    justified: { type: [String, Boolean], default: !1 },
    pills: { type: [String, Boolean], default: !1 },
    small: { type: [String, Boolean], default: !1 },
    tabs: { type: [String, Boolean], default: !1 },
    tag: { default: "ul" },
    underline: { type: [String, Boolean], default: !1 },
    vertical: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.cardHeader), a = r(() => t.fill), l = r(() => t.justified), n = r(() => t.pills), i = r(() => t.small), s = r(() => t.tabs), u = r(() => t.vertical), d = Zt(() => t.align), f = r(() => t.underline), g = w(() => ({
      "nav-tabs": s.value,
      "nav-pills": n.value && !s.value,
      "card-header-tabs": !u.value && o.value && s.value,
      "card-header-pills": !u.value && o.value && n.value && !s.value,
      "flex-column": u.value,
      "nav-fill": !u.value && a.value,
      "nav-justified": !u.value && l.value,
      [d.value]: !u.value && t.align !== void 0,
      small: i.value,
      "nav-underline": f.value
    }));
    return (p, y) => (m(), x(se(p.tag), {
      class: j(["nav", g.value])
    }, {
      default: R(() => [
        A(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Td = { class: "d-flex flex-row align-items-center flex-wrap" }, _d = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BNavForm",
  props: {
    role: { default: void 0 },
    floating: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    novalidate: { type: [String, Boolean], default: void 0 },
    validated: { type: [String, Boolean], default: void 0 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const o = t, a = (l) => {
      o("submit", l);
    };
    return (l, n) => (m(), N("li", Td, [
      ye(bn, Q(l.$attrs, {
        id: l.id,
        floating: l.floating,
        role: l.role,
        novalidate: l.novalidate,
        validated: l.validated,
        class: "d-flex",
        onSubmit: Bt(a, ["prevent"])
      }), {
        default: R(() => [
          A(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "floating", "role", "novalidate", "validated", "onSubmit"])
    ]));
  }
}), Vd = { class: "nav-item" }, Ad = /* @__PURE__ */ q({
  __name: "BNavItem",
  props: {
    linkAttrs: { default: void 0 },
    linkClass: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled), n = w(
      () => fo(o, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "icon",
        "opacity",
        "opacityHover",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "underlineVariant",
        "variant"
      ])
    );
    return n.value.activeClass, (i, s) => (m(), N("li", Vd, [
      ye(rt, Q({
        class: ["nav-link", i.linkClass],
        tabindex: v(l) ? -1 : void 0,
        "aria-disabled": v(l) ? !0 : void 0
      }, { ...n.value, ...i.linkAttrs }, {
        onClick: s[0] || (s[0] = (u) => a("click", u))
      }), {
        default: R(() => [
          A(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "tabindex", "aria-disabled"])
    ]));
  }
}), Od = { class: "nav-item dropdown" }, Ed = /* @__PURE__ */ q({
  __name: "BNavItemDropdown",
  props: {
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: !0 },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: [String, Boolean], default: !1 },
    container: { default: void 0 },
    disabled: { type: [String, Boolean], default: !1 },
    dropend: { type: [String, Boolean], default: !1 },
    dropstart: { type: [String, Boolean], default: !1 },
    dropup: { type: [String, Boolean], default: !1 },
    end: { type: [String, Boolean], default: !1 },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: !0 },
    lazy: { type: [String, Boolean], default: !1 },
    menuClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: !1 },
    noCaret: { type: [String, Boolean], default: !1 },
    noFlip: { type: [String, Boolean], default: !1 },
    noShift: { type: [String, Boolean], default: !1 },
    noSize: { type: [String, Boolean], default: !1 },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: [String, Boolean], default: !1 },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: [String, Boolean], default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "link" }
  },
  emits: ["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = W(null), i = () => {
      var d;
      (d = n.value) == null || d.close();
    }, s = () => {
      var d;
      (d = n.value) == null || d.open();
    };
    return t({
      close: i,
      open: s,
      toggle: () => {
        var d;
        (d = n.value) == null || d.toggle();
      }
    }), (d, f) => (m(), N("li", Od, [
      ye(gn, Q({
        ref_key: "dropdown",
        ref: n
      }, a, {
        "is-nav": "",
        onShow: f[0] || (f[0] = (g) => l("show", g)),
        onShown: f[1] || (f[1] = (g) => l("shown")),
        onHide: f[2] || (f[2] = (g) => l("hide", g)),
        onHidden: f[3] || (f[3] = (g) => l("hidden")),
        onHidePrevented: f[4] || (f[4] = (g) => l("hide-prevented")),
        onShowPrevented: f[5] || (f[5] = (g) => l("show-prevented")),
        onClick: f[6] || (f[6] = (g) => l("click", g)),
        onToggle: f[7] || (f[7] = (g) => l("toggle")),
        "onUpdate:modelValue": f[8] || (f[8] = (g) => l("update:modelValue", g))
      }), {
        "button-content": R(() => [
          A(d.$slots, "button-content")
        ]),
        "toggle-text": R(() => [
          A(d.$slots, "toggle-text")
        ]),
        default: R(() => [
          A(d.$slots, "default", {
            hide: i,
            show: s
          })
        ]),
        _: 3
      }, 16)
    ]));
  }
}), Pd = { class: "navbar-text" }, Nd = /* @__PURE__ */ q({
  __name: "BNavText",
  props: {
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (m(), N("li", Pd, [
      A(t.$slots, "default", {}, () => [
        ne(Z(t.text), 1)
      ])
    ]));
  }
}), Id = /* @__PURE__ */ q({
  __name: "BNavbar",
  props: {
    autoClose: { type: [String, Boolean], default: !0 },
    container: { type: [String, Boolean], default: "fluid" },
    fixed: { default: void 0 },
    print: { type: [String, Boolean], default: !1 },
    sticky: { default: void 0 },
    tag: { default: "nav" },
    toggleable: { type: [String, Boolean], default: !1 },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.container), a = r(() => t.autoClose), l = r(() => t.print), n = r(() => t.toggleable), i = E(() => t.tag === "nav" ? void 0 : "navigation"), s = xi(o), u = w(() => ({
      "d-print": l.value,
      [`sticky-${t.sticky}`]: t.sticky !== void 0,
      [`bg-${t.variant}`]: t.variant !== null,
      [`fixed-${t.fixed}`]: t.fixed !== void 0,
      "navbar-expand": n.value === !1,
      [`navbar-expand-${n.value}`]: typeof n.value == "string"
    }));
    return at(co, {
      tag: E(() => t.tag),
      autoClose: a
    }), (d, f) => (m(), x(se(d.tag), {
      class: j(["navbar", u.value]),
      role: i.value
    }, {
      default: R(() => [
        d.container !== !1 ? (m(), N("div", {
          key: 0,
          class: j(v(s))
        }, [
          A(d.$slots, "default")
        ], 2)) : A(d.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), Ld = /* @__PURE__ */ q({
  __name: "BNavbarBrand",
  props: {
    tag: { default: "div" },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, { computedLink: o, computedLinkProps: a } = Ct(t, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "variant",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), l = E(() => o.value ? rt : t.tag);
    return (n, i) => (m(), x(se(l.value), Q({ class: "navbar-brand" }, v(a)), {
      default: R(() => [
        A(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fd = /* @__PURE__ */ q({
  __name: "BNavbarNav",
  props: {
    align: { default: void 0 },
    fill: { type: [String, Boolean], default: !1 },
    justified: { type: [String, Boolean], default: !1 },
    small: { type: [String, Boolean], default: !1 },
    tag: { default: "ul" }
  },
  setup(e) {
    const t = e, o = r(() => t.fill), a = r(() => t.justified), l = r(() => t.small), n = Zt(() => t.align), i = w(() => ({
      "nav-fill": o.value,
      "nav-justified": a.value,
      [n.value]: t.align !== void 0,
      small: l.value
    }));
    return (s, u) => (m(), N("ul", {
      class: j(["navbar-nav", i.value])
    }, [
      A(s.$slots, "default")
    ], 2));
  }
}), Uo = (e, t) => e.setAttribute("data-bs-theme", t), Hd = {
  mounted(e, t) {
    Uo(e, t.value);
  },
  updated(e, t) {
    Uo(e, t.value);
  }
}, zd = (e, t) => {
  const { modifiers: o, arg: a, value: l } = e, n = Object.keys(o || {}), i = typeof l == "string" ? l.split(sa) : l;
  if (Ss(t.tagName, "a")) {
    const s = Ya(t, "href") || "";
    Zn.test(s) && n.push(s.replace(Yn, ""));
  }
  return Array.prototype.concat.apply([], [a, i]).forEach((s) => typeof s == "string" && n.push(s)), n.filter((s, u, d) => s && d.indexOf(s) === u);
}, Rd = (e, t) => {
  e.forEach((o) => {
    const a = document.getElementById(o);
    a !== null && a.dispatchEvent(new Event("bv-toggle"));
  }), setTimeout(() => $n(e, t), 50);
}, $n = (e, t) => {
  let o = !1;
  e.forEach((a) => {
    const l = document.getElementById(a);
    l != null && l.classList.contains("show") && (o = !0), l != null && l.classList.contains("closing") && (o = !1);
  }), t.setAttribute("aria-expanded", o ? "true" : "false"), t.classList.remove(o ? "collapsed" : "not-collapsed"), t.classList.add(o ? "not-collapsed" : "collapsed");
}, Xo = (e, t) => {
  if (t.value === void 0 && Object.keys(t.modifiers || {}).length === 0)
    return;
  const o = zd(t, e);
  e.__toggle && e.removeEventListener("click", e.__toggle), e.__toggle = () => Rd(o, e), e.addEventListener("click", e.__toggle), e.setAttribute("aria-controls", o.join(" ")), $n(o, e);
}, ja = {
  mounted: Xo,
  updated: Xo,
  unmounted(e) {
    e.removeEventListener("click", e.__toggle), e.removeAttribute("aria-controls"), e.removeAttribute("aria-expanded");
  }
}, xd = {
  mounted(e, t) {
    if (!Ut(t.value))
      return;
    const a = ga(t.value, e);
    !a.content && !a.title || (e.$__state = W({
      ...Nt(t, e),
      ...a
    }), ba(e, t));
  },
  updated(e, t) {
    if (!Ut(t.value))
      return;
    const a = ga(t.value, e);
    if (!(!a.content && !a.title)) {
      if (!e.$__state) {
        e.$__state = W({
          ...Nt(t, e),
          ...a
        }), ba(e, t);
        return;
      }
      e.$__state.value = {
        ...Nt(t, e),
        ...a
      };
    }
  },
  beforeUnmount(e) {
    Xl(e);
  }
}, Md = {
  mounted(e, t) {
    const o = Ut(t.value);
    if (!o)
      return;
    const a = ga(t.value, e);
    !a.content && !a.title || (e.$__state = W({
      noninteractive: !0,
      ...Nt(t, e),
      title: a.title ?? a.content ?? "",
      tooltip: o
    }), ba(e, t));
  },
  updated(e, t) {
    const o = Ut(t.value);
    if (!o)
      return;
    const a = ga(t.value, e);
    if (!(!a.content && !a.title)) {
      if (!e.$__state) {
        e.$__state = W({
          noninteractive: !0,
          ...Nt(t, e),
          title: a.title ?? a.content ?? "",
          tooltip: o
        }), ba(e, t);
        return;
      }
      e.$__state.value = {
        noninteractive: !0,
        ...Nt(t, e),
        title: a.title ?? a.content ?? "",
        tooltip: o
      };
    }
  },
  beforeUnmount(e) {
    Xl(e);
  }
}, Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  vBColorMode: Hd,
  vBModal: ja,
  vBPopover: xd,
  vBToggle: ja,
  vBTooltip: Md
}, Symbol.toStringTag, { value: "Module" })), Dd = ["disabled", "aria-label"], jd = /* @__PURE__ */ ee("span", { class: "navbar-toggler-icon" }, null, -1), qd = /* @__PURE__ */ q({
  __name: "BNavbarToggle",
  props: {
    disabled: { type: [String, Boolean], default: !1 },
    label: { default: "Toggle navigation" },
    target: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled), n = w(() => ({
      disabled: l.value
    })), i = (s) => {
      l.value || a("click", s);
    };
    return (s, u) => ht((m(), N("button", {
      class: j(["navbar-toggler", n.value]),
      type: "button",
      disabled: v(l),
      "aria-label": s.label,
      onClick: i
    }, [
      A(s.$slots, "default", {}, () => [
        jd
      ])
    ], 10, Dd)), [
      [v(ja), v(l) ? void 0 : s.target]
    ]);
  }
}), Gd = ["id", "aria-labelledby"], Wd = ["id"], Ud = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BOffcanvas",
  props: {
    backdrop: { type: [String, Boolean], default: !0 },
    backdropVariant: { default: "dark" },
    bodyClass: { default: void 0 },
    bodyScrolling: { type: [String, Boolean], default: !1 },
    footerClass: { default: void 0 },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: !1 },
    modelValue: { type: [String, Boolean], default: !1 },
    noCloseOnBackdrop: { type: [String, Boolean], default: !1 },
    noCloseOnEsc: { type: [String, Boolean], default: !1 },
    noFocus: { type: [String, Boolean], default: !1 },
    noHeader: { type: [String, Boolean], default: !1 },
    noHeaderClose: { type: [String, Boolean], default: !1 },
    placement: { default: "start" },
    teleportDisabled: { type: [String, Boolean], default: !1 },
    teleportTo: { default: "body" },
    title: { default: void 0 }
  },
  emits: ["close", "esc", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = Me(), i = ke(a, "modelValue", l, { passive: !0 }), s = r(i), u = r(() => a.bodyScrolling), d = r(() => a.backdrop), f = r(() => a.noHeaderClose), g = r(() => a.noHeader), p = r(() => a.noFocus), y = r(() => a.noCloseOnBackdrop), b = r(() => a.noCloseOnEsc), V = r(() => a.lazy), C = r(() => a.teleportDisabled), c = _e(() => a.id, "offcanvas");
    Wl(s, u);
    const h = W(null);
    qe(
      "Escape",
      () => {
        P("esc");
      },
      { target: h }
    );
    const { focused: B } = xe(h, {
      initialValue: s.value && p.value === !1
    }), _ = W(s.value), k = W(!1), S = E(() => d.value === !0 && s.value === !0), $ = E(
      () => V.value === !1 || V.value === !0 && k.value === !0 || V.value === !0 && s.value === !0
    ), I = E(() => !Ie(n["header-close"])), T = w(() => [
      { "text-reset": !I.value },
      a.headerCloseClass
    ]), O = w(() => ({
      variant: I.value ? a.headerCloseVariant : void 0,
      class: T.value
    })), F = E(() => !Ie(n.footer)), K = w(() => [
      // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
      "offcanvas",
      // Remove when above check is fixed
      `offcanvas-${a.placement}`,
      {
        show: s.value && _.value === !0
      }
    ]), z = (oe, fe = {}) => new Rt(oe, {
      cancelable: !1,
      target: h.value || null,
      relatedTarget: null,
      trigger: null,
      ...fe,
      componentId: c.value
    }), P = (oe = "") => {
      if (oe === "backdrop" && y.value || oe === "esc" && b.value) {
        l("hide-prevented");
        return;
      }
      const fe = z("hide", { cancelable: oe !== "", trigger: oe });
      if (oe === "close" && l(oe, fe), oe === "esc" && l(oe, fe), l("hide", fe), fe.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      i.value = !1;
    }, D = () => {
      const oe = z("show", { cancelable: !0 });
      if (l("show", oe), oe.defaultPrevented) {
        i.value = !1, l("show-prevented");
        return;
      }
      i.value = !0;
    }, ae = () => {
      Ne(() => {
        p.value === !1 && (B.value = !0);
      });
    }, le = () => D(), ve = () => {
      _.value = !0, ae(), l("shown", z("shown")), V.value === !0 && (k.value = !0);
    }, Be = () => {
      _.value = !1;
    }, Ve = () => {
      l("hidden", z("hidden")), V.value === !0 && (k.value = !1);
    };
    return Oe(h, "bv-toggle", () => {
      s.value ? P() : D();
    }), t({
      hide: P,
      show: D
    }), (oe, fe) => (m(), x(zt, {
      to: oe.teleportTo,
      disabled: v(C)
    }, [
      ye(Mt, {
        "no-fade": !0,
        "trans-props": {
          enterToClass: "showing",
          enterFromClass: "",
          leaveToClass: "hiding show",
          leaveFromClass: "show"
        },
        onBeforeEnter: le,
        onAfterEnter: ve,
        onLeave: Be,
        onAfterLeave: Ve
      }, {
        default: R(() => [
          ht(ee("div", Q({
            id: v(c),
            ref_key: "element",
            ref: h,
            "aria-modal": "true",
            role: "dialog",
            class: K.value,
            tabindex: "-1",
            "aria-labelledby": `${v(c)}-offcanvas-label`,
            "data-bs-backdrop": "false"
          }, oe.$attrs), [
            $.value ? (m(), N(ge, { key: 0 }, [
              v(g) ? J("", !0) : (m(), N("div", {
                key: 0,
                class: j(["offcanvas-header", oe.headerClass])
              }, [
                A(oe.$slots, "header", {
                  visible: v(s),
                  placement: oe.placement,
                  hide: P
                }, () => [
                  ee("h5", {
                    id: `${v(c)}-offcanvas-label`,
                    class: "offcanvas-title"
                  }, [
                    A(oe.$slots, "title", {
                      visible: v(s),
                      placement: oe.placement,
                      hide: P
                    }, () => [
                      ne(Z(oe.title), 1)
                    ])
                  ], 8, Wd),
                  v(f) ? J("", !0) : (m(), N(ge, { key: 0 }, [
                    I.value ? (m(), x(pt, Q({ key: 0 }, O.value, {
                      onClick: fe[0] || (fe[0] = ($e) => P("close"))
                    }), {
                      default: R(() => [
                        A(oe.$slots, "header-close")
                      ]),
                      _: 3
                    }, 16)) : (m(), x(Dt, Q({
                      key: 1,
                      "aria-label": oe.headerCloseLabel
                    }, O.value, {
                      onClick: fe[1] || (fe[1] = ($e) => P("close"))
                    }), null, 16, ["aria-label"]))
                  ], 64))
                ])
              ], 2)),
              ee("div", {
                class: j(["offcanvas-body", oe.bodyClass])
              }, [
                A(oe.$slots, "default", {
                  visible: v(s),
                  placement: oe.placement,
                  hide: P
                })
              ], 2),
              F.value ? (m(), N("div", {
                key: 1,
                class: j(oe.footerClass)
              }, [
                A(oe.$slots, "footer", {
                  visible: v(s),
                  placement: oe.placement,
                  hide: P
                })
              ], 2)) : J("", !0)
            ], 64)) : J("", !0)
          ], 16, Gd), [
            [ha, v(i)]
          ])
        ]),
        _: 3
      }),
      A(oe.$slots, "backdrop", {}, () => [
        ye(Ta, {
          variant: oe.backdropVariant,
          show: S.value,
          fixed: "",
          "no-wrap": "",
          "no-spinner": "",
          onClick: fe[2] || (fe[2] = ($e) => P("backdrop"))
        }, null, 8, ["variant", "show"])
      ])
    ], 8, ["to", "disabled"]));
  }
}), Xd = ["aria-disabled", "aria-label"], Kd = ["aria-hidden"], Yo = 20, Zo = 0, Yd = /* @__PURE__ */ q({
  __name: "BPagination",
  props: {
    align: { default: "start" },
    ariaControls: { default: void 0 },
    ariaLabel: { default: "Pagination" },
    disabled: { type: [String, Boolean], default: !1 },
    ellipsisClass: { default: void 0 },
    ellipsisText: { default: "…" },
    firstClass: { default: void 0 },
    firstNumber: { type: [String, Boolean], default: !1 },
    firstText: { default: "«" },
    hideEllipsis: { type: [String, Boolean], default: !1 },
    hideGotoEndButtons: { type: [String, Boolean], default: !1 },
    labelFirstPage: { default: "Go to first page" },
    labelLastPage: { default: "Go to last page" },
    labelNextPage: { default: "Go to next page" },
    labelPage: { default: "Go to page" },
    labelPrevPage: { default: "Go to previous page" },
    lastClass: { default: void 0 },
    lastNumber: { type: [String, Boolean], default: !1 },
    lastText: { default: "»" },
    limit: { default: 5 },
    modelValue: { default: 1 },
    nextClass: { default: void 0 },
    nextText: { default: "›" },
    pageClass: { default: void 0 },
    perPage: { default: Yo },
    pills: { type: [String, Boolean], default: !1 },
    prevClass: { default: void 0 },
    prevText: { default: "‹" },
    size: { default: void 0 },
    totalRows: { default: Zo }
  },
  emits: ["update:modelValue", "page-click"],
  setup(e, { emit: t }) {
    const a = e, l = t, n = ke(a, "modelValue", l), i = r(() => a.disabled), s = r(() => a.firstNumber), u = r(() => a.hideEllipsis), d = r(() => a.hideGotoEndButtons), f = r(() => a.lastNumber), g = r(() => a.pills), p = he(() => a.perPage, { nanToZero: !0, method: "parseInt" }), y = he(() => a.totalRows, { nanToZero: !0, method: "parseInt" }), b = he(n, { nanToZero: !0, method: "parseInt" }), V = E(() => Math.max(p.value || Yo, 1)), C = E(() => Math.max(y.value || Zo, 0)), c = E(() => Math.ceil(C.value / V.value)), h = E(() => a.align === "fill"), B = E(() => a.align === "fill" ? "start" : a.align), _ = Zt(B), k = (L) => L === b.value, S = (L) => i.value ? null : k(L) ? "0" : "-1", $ = (L) => i.value || k(L) || b.value < 1 || // Check if the number is out of bounds
    L < 1 || L > c.value, I = w(() => $(1)), T = w(() => $(b.value - 1)), O = w(() => $(c.value)), F = w(() => $(b.value + 1)), K = (L, U) => ({
      li: {
        class: [
          "page-item",
          {
            disabled: L,
            "flex-fill": h.value,
            "d-flex": h.value && !L
          },
          U
        ]
      },
      button: {
        is: L ? "span" : "button",
        class: ["page-link", { "flex-grow-1": !L && h.value }],
        "aria-label": a.labelFirstPage,
        "aria-controls": a.ariaControls || void 0,
        "aria-disabled": L ? !0 : void 0,
        role: "menuitem",
        type: L ? void 0 : "button",
        tabindex: L ? void 0 : "-1"
      }
    }), z = w(() => K(I.value, a.firstClass)), P = w(() => K(T.value, a.prevClass)), D = w(() => K(F.value, a.nextClass)), ae = w(() => K(O.value, a.lastClass)), le = w(() => ({
      li: {
        class: [
          "page-item",
          "disabled",
          "bv-d-xs-down-none",
          h.value ? "flex-fill" : "",
          a.ellipsisClass
        ],
        role: "separator"
      },
      span: {
        class: ["page-link"]
      }
    })), ve = w(() => [
      _.value,
      {
        [`pagination-${a.size}`]: a.size !== void 0,
        "b-pagination-pills": g.value
      }
    ]), Be = w(() => {
      let L;
      return c.value - b.value + 2 < a.limit && a.limit > 3 ? L = c.value - oe.value + 1 : L = b.value - Math.floor(oe.value / 2), L < 1 ? L = 1 : L > c.value - oe.value && (L = c.value - oe.value + 1), a.limit <= 3 && f.value && c.value === L + oe.value - 1 && (L = Math.max(L - 1, 1)), L;
    }), Ve = w(() => {
      const L = c.value - b.value;
      let U = !1;
      return L + 2 < a.limit && a.limit > 3 ? a.limit > 3 && (U = !0) : a.limit > 3 && (U = !!(!u.value || s.value)), Be.value <= 1 && (U = !1), U && s.value && Be.value < 4 && (U = !1), U;
    }), oe = w(() => {
      let L = a.limit;
      return c.value <= a.limit ? L = c.value : b.value < a.limit - 1 && a.limit > 3 ? ((!u.value || f.value) && (L = a.limit - (s.value ? 0 : 1)), L = Math.min(L, a.limit)) : c.value - b.value + 2 < a.limit && a.limit > 3 ? (!u.value || s.value) && (L = a.limit - (f.value ? 0 : 1)) : a.limit > 3 && (L = a.limit - (u.value ? 0 : 2)), L;
    }), fe = w(() => {
      const L = c.value - oe.value;
      let U = !1;
      b.value < a.limit - 1 && a.limit > 3 ? (!u.value || f.value) && (U = !0) : a.limit > 3 && (U = !!(!u.value || f.value)), Be.value > L && (U = !1);
      const H = Be.value + oe.value - 1;
      return U && f.value && H > c.value - 3 && (U = !1), U;
    }), $e = w(() => ({
      pageSize: V.value,
      totalRows: y.value,
      numberOfPages: c.value
    })), we = (L, U) => {
      if (U === b.value)
        return;
      const H = new dt("page-click", {
        cancelable: !0,
        target: L.target
      });
      l("page-click", H, U), !H.defaultPrevented && (n.value = U);
    };
    ue(b, (L) => {
      const H = ((G, X) => {
        const te = G || 1;
        return te > X ? X : te < 1 ? 1 : te;
      })(L, c.value);
      H !== n.value && (n.value = H);
    }), ue($e, (L, U) => {
      (U.pageSize !== L.pageSize && U.totalRows === L.totalRows || U.numberOfPages !== L.numberOfPages && b.value > U.numberOfPages) && (n.value = 1);
    });
    const M = w(
      () => Array.from({ length: oe.value }, (L, U) => ({
        number: Be.value + U
      }))
    );
    return (L, U) => (m(), N("ul", {
      class: j(["pagination", ve.value]),
      role: "menubar",
      "aria-disabled": v(i),
      "aria-label": L.ariaLabel || void 0
    }, [
      !v(d) && !v(s) ? (m(), N("li", Se(Q({ key: 0 }, z.value.li)), [
        (m(), x(se(z.value.button.is), Q(z.value.button, {
          onClick: U[0] || (U[0] = (H) => we(H, 1))
        }), {
          default: R(() => [
            A(L.$slots, "first-text", {}, () => [
              ne(Z(L.firstText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16)) : J("", !0),
      ee("li", Se(Ee(P.value.li)), [
        (m(), x(se(P.value.button.is), Q(P.value.button, {
          onClick: U[1] || (U[1] = (H) => we(H, v(b) - 1))
        }), {
          default: R(() => [
            A(L.$slots, "prev-text", {}, () => [
              ne(Z(L.prevText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16),
      Ve.value ? (m(), N("li", Se(Q({ key: 1 }, le.value.li)), [
        ee("span", Se(Ee(le.value.span)), [
          A(L.$slots, "ellipsis-text", {}, () => [
            ne(Z(L.ellipsisText || "..."), 1)
          ])
        ], 16)
      ], 16)) : J("", !0),
      (m(!0), N(ge, null, Te(M.value, (H) => (m(), N("li", {
        key: `page-${H.number}`,
        class: j([
          "page-item",
          {
            disabled: v(i),
            active: k(H.number),
            "flex-fill": h.value,
            "d-flex": h.value && !v(i)
          },
          L.pageClass
        ]),
        role: "presentation",
        "aria-hidden": v(i) || void 0
      }, [
        (m(), x(se(v(i) ? "span" : "button"), {
          key: `page-${H.number}`,
          class: j(["page-link", { "flex-grow-1": !v(i) && h.value }]),
          "aria-controls": L.ariaControls || void 0,
          "aria-disabled": v(i) ? !0 : void 0,
          "aria-label": L.labelPage ? `${L.labelPage} ${H.number}` : void 0,
          "aria-posinset": H.number,
          "aria-checked": k(H.number),
          "aria-setsize": c.value,
          role: "menuitemradio",
          type: v(i) ? void 0 : "button",
          tabindex: S(H.number),
          onClick: (G) => we(G, H.number)
        }, {
          default: R(() => [
            A(L.$slots, "page", {
              active: k(H.number),
              disabled: v(i),
              page: H.number,
              index: H.number - 1,
              content: H.number
            }, () => [
              ne(Z(H.number), 1)
            ])
          ]),
          _: 2
        }, 1032, ["class", "aria-controls", "aria-disabled", "aria-label", "aria-posinset", "aria-checked", "aria-setsize", "type", "tabindex", "onClick"]))
      ], 10, Kd))), 128)),
      fe.value ? (m(), N("li", Se(Q({ key: 2 }, le.value.li)), [
        ee("span", Se(Ee(le.value.span)), [
          A(L.$slots, "ellipsis-text", {}, () => [
            ne(Z(L.ellipsisText || "..."), 1)
          ])
        ], 16)
      ], 16)) : J("", !0),
      ee("li", Se(Ee(D.value.li)), [
        (m(), x(se(D.value.button.is), Q(D.value.button, {
          onClick: U[2] || (U[2] = (H) => we(H, v(b) + 1))
        }), {
          default: R(() => [
            A(L.$slots, "next-text", {}, () => [
              ne(Z(L.nextText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16),
      !v(f) && !v(d) ? (m(), N("li", Se(Q({ key: 3 }, ae.value.li)), [
        (m(), x(se(ae.value.button.is), Q(ae.value.button, {
          onClick: U[3] || (U[3] = (H) => we(H, c.value))
        }), {
          default: R(() => [
            A(L.$slots, "last-text", {}, () => [
              ne(Z(L.lastText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16)) : J("", !0)
    ], 10, Xd));
  }
}), Ue = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BPlaceholder",
  props: {
    animation: { default: void 0 },
    cols: { default: 12 },
    size: { default: "md" },
    tag: { default: "span" },
    variant: { default: null },
    width: { default: void 0 },
    wrapperTag: { default: "span" }
  },
  setup(e) {
    const t = e, o = E(
      () => t.width === void 0 ? void 0 : typeof t.width == "number" ? t.width.toString() : t.width.replace("%", "")
    ), a = E(
      () => t.cols === void 0 ? void 0 : typeof t.cols == "number" ? t.cols.toString() : t.cols
    ), l = w(() => ({
      [`col-${a.value}`]: a.value !== void 0 && o.value === void 0,
      [`bg-${t.variant}`]: t.variant !== null,
      [`placeholder-${t.size}`]: t.size !== "md"
    })), n = w(() => ({
      [`placeholder-${t.animation}`]: t.animation !== void 0
    })), i = w(() => ({
      width: o.value === void 0 ? void 0 : `${o.value}%`
    }));
    return (s, u) => (m(), x(se(s.wrapperTag), {
      class: j(n.value)
    }, {
      default: R(() => [
        (m(), x(se(s.tag), Q(s.$attrs, {
          class: ["placeholder", l.value],
          style: i.value
        }), null, 16, ["class", "style"]))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Tn = /* @__PURE__ */ q({
  __name: "BPlaceholderButton",
  props: {
    animation: { default: void 0 },
    cols: { default: void 0 },
    tag: { default: "div" },
    variant: { default: "primary" },
    width: { default: void 0 }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`btn-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (m(), x(Ue, {
      class: j(["btn disabled", o.value]),
      animation: a.animation,
      width: a.width,
      cols: a.cols,
      tag: a.tag,
      style: { cursor: "wait", "pointer-events": "auto" }
    }, null, 8, ["class", "animation", "width", "cols", "tag"]));
  }
}), Zd = /* @__PURE__ */ q({
  __name: "BPlaceholderCard",
  props: {
    animation: { default: void 0 },
    footerAnimation: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    footerWidth: { default: 100 },
    headerAnimation: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    headerWidth: { default: 100 },
    imgBlankColor: { default: "#868e96" },
    imgBottom: { type: [String, Boolean], default: !1 },
    imgHeight: { default: 100 },
    imgSrc: { default: void 0 },
    noButton: { type: [String, Boolean], default: !1 },
    noFooter: { type: [String, Boolean], default: !1 },
    noHeader: { type: [String, Boolean], default: !1 },
    noImg: { type: [String, Boolean], default: !1 },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.noButton), a = r(() => t.noHeader), l = r(() => t.noFooter), n = r(() => t.noImg), i = w(() => ({
      animation: t.animation,
      size: t.size,
      variant: t.variant
    })), s = E(() => o.value ? Ue : Tn);
    return (u, d) => (m(), x(mn, { "img-bottom": u.imgBottom }, Ua({
      default: R(() => [
        A(u.$slots, "default", {}, () => [
          ye(Ue, Q({ cols: "7" }, i.value), null, 16),
          ye(Ue, Q({ cols: "4" }, i.value), null, 16),
          ye(Ue, Q({ cols: "4" }, i.value), null, 16),
          ye(Ue, Q({ cols: "6" }, i.value), null, 16),
          ye(Ue, Q({ cols: "8" }, i.value), null, 16)
        ])
      ]),
      _: 2
    }, [
      v(n) ? void 0 : {
        name: "img",
        fn: R(() => [
          A(u.$slots, "img", {}, () => [
            ye(ya, {
              blank: !u.imgSrc,
              "blank-color": u.imgBlankColor,
              height: u.imgSrc ? void 0 : u.imgHeight,
              src: u.imgSrc,
              top: !u.imgBottom,
              bottom: u.imgBottom,
              style: { cursor: "wait" }
            }, null, 8, ["blank", "blank-color", "height", "src", "top", "bottom"])
          ])
        ]),
        key: "0"
      },
      v(a) ? void 0 : {
        name: "header",
        fn: R(() => [
          A(u.$slots, "header", {}, () => [
            ye(Ue, {
              width: u.headerWidth,
              variant: u.headerVariant,
              animation: u.headerAnimation,
              size: u.headerSize
            }, null, 8, ["width", "variant", "animation", "size"])
          ])
        ]),
        key: "1"
      },
      v(l) ? void 0 : {
        name: "footer",
        fn: R(() => [
          A(u.$slots, "footer", {}, () => [
            (m(), x(se(s.value), {
              width: u.footerWidth,
              animation: u.footerAnimation,
              size: v(o) ? u.footerSize : void 0,
              variant: u.footerVariant
            }, null, 8, ["width", "animation", "size", "variant"]))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
}), go = /* @__PURE__ */ q({
  __name: "BTableSimple",
  props: {
    bordered: { type: [String, Boolean], default: !1 },
    borderless: { type: [String, Boolean], default: !1 },
    borderVariant: { default: null },
    captionTop: { type: [String, Boolean], default: !1 },
    dark: { type: [String, Boolean], default: !1 },
    fixed: { type: [String, Boolean], default: !1 },
    hover: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: !1 },
    outlined: { type: [String, Boolean], default: !1 },
    responsive: { type: [String, Boolean], default: !1 },
    small: { type: [String, Boolean], default: !1 },
    stacked: { type: [String, Boolean], default: !1 },
    stickyHeader: { type: [String, Boolean], default: !1 },
    striped: { type: [String, Boolean], default: !1 },
    stripedColumns: { type: [String, Boolean], default: !1 },
    tableClass: { default: void 0 },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.captionTop), a = r(() => t.borderless), l = r(() => t.bordered), n = r(() => t.dark), i = r(() => t.hover), s = r(() => t.small), u = r(() => t.striped), d = r(() => t.stickyHeader), f = r(() => t.stripedColumns), g = r(() => t.responsive), p = r(() => t.stacked), y = w(() => [
      t.tableClass,
      "table",
      "b-table",
      {
        "table-bordered": l.value,
        "table-borderless": a.value,
        [`border-${t.borderVariant}`]: t.borderVariant !== null,
        "caption-top": o.value,
        "table-dark": n.value,
        "table-hover": i.value,
        "b-table-stacked": p.value === !0,
        [`b-table-stacked-${p.value}`]: typeof p.value == "string",
        "table-striped": u.value,
        "table-sm": s.value,
        [`table-${t.variant}`]: t.variant !== null,
        "table-striped-columns": f.value
      }
    ]), b = w(() => ({
      "table-responsive": g.value === !0,
      [`table-responsive-${g.value}`]: typeof g.value == "string",
      "b-table-sticky-header": d.value
    }));
    return (V, C) => V.responsive ? (m(), N("div", {
      key: 1,
      class: j(b.value)
    }, [
      ee("table", {
        class: j(y.value)
      }, [
        A(V.$slots, "default")
      ], 2)
    ], 2)) : (m(), N("table", {
      key: 0,
      class: j(y.value)
    }, [
      A(V.$slots, "default")
    ], 2));
  }
}), Jd = /* @__PURE__ */ q({
  __name: "BPlaceholderTable",
  props: {
    animation: { default: void 0 },
    cellWidth: { default: 100 },
    columns: { default: 5 },
    footerAnimation: { default: void 0 },
    footerCellWidth: { default: 100 },
    footerColumns: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    headerAnimation: { default: void 0 },
    headerCellWidth: { default: 100 },
    headerColumns: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    hideHeader: { type: [String, Boolean], default: !1 },
    rows: { default: 3 },
    showFooter: { type: [String, Boolean], default: !1 },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = he(() => t.columns), a = he(() => t.rows), l = E(() => t.headerColumns ?? NaN), n = E(() => t.footerColumns ?? NaN), i = he(l), s = he(n), u = E(() => o.value || 5), d = E(() => a.value || 3), f = E(
      () => t.headerColumns === void 0 ? u.value : i.value
    ), g = E(
      () => t.footerColumns === void 0 ? u.value : s.value
    ), p = r(() => t.hideHeader), y = r(() => t.showFooter);
    return (b, V) => (m(), x(go, null, {
      default: R(() => [
        v(p) ? J("", !0) : A(b.$slots, "thead", { key: 0 }, () => [
          ee("thead", null, [
            ee("tr", null, [
              (m(!0), N(ge, null, Te(f.value, (C, c) => (m(), N("th", { key: c }, [
                ye(Ue, {
                  size: b.headerSize,
                  variant: b.headerVariant,
                  animation: b.headerAnimation,
                  width: b.headerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]),
        A(b.$slots, "default", {}, () => [
          ee("tbody", null, [
            (m(!0), N(ge, null, Te(d.value, (C, c) => (m(), N("tr", { key: c }, [
              (m(!0), N(ge, null, Te(u.value, (h, B) => (m(), N("td", { key: B }, [
                ye(Ue, {
                  size: b.size,
                  variant: b.variant,
                  animation: b.animation,
                  width: b.cellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ]))), 128))
          ])
        ]),
        v(y) ? A(b.$slots, "tfoot", { key: 1 }, () => [
          ee("tfoot", null, [
            ee("tr", null, [
              (m(!0), N(ge, null, Te(g.value, (C, c) => (m(), N("th", { key: c }, [
                ye(Ue, {
                  size: b.footerSize,
                  variant: b.footerVariant,
                  animation: b.footerAnimation,
                  width: b.footerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]) : J("", !0)
      ]),
      _: 3
    }));
  }
}), Qd = /* @__PURE__ */ q({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { type: [String, Boolean], default: !1 }
  },
  setup(e) {
    const t = e, o = r(() => t.loading);
    return (a, l) => v(o) ? A(a.$slots, "loading", { key: 0 }) : A(a.$slots, "default", { key: 1 });
  }
}), ec = ["aria-valuenow", "aria-valuemax"], _n = /* @__PURE__ */ q({
  __name: "BProgressBar",
  props: {
    animated: { type: [String, Boolean], default: !1 },
    label: { default: void 0 },
    labelHtml: { default: void 0 },
    max: { default: void 0 },
    precision: { default: 0 },
    showProgress: { type: [String, Boolean], default: !1 },
    showValue: { type: [String, Boolean], default: !1 },
    striped: { type: [String, Boolean], default: !1 },
    value: { default: 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = Ge(Jl, null), a = r(() => t.animated), l = r(() => t.showProgress), n = r(() => t.showValue), i = r(() => t.striped), s = Qe(t), u = w(() => [
      s.value,
      {
        "progress-bar-animated": a.value || (o == null ? void 0 : o.animated.value),
        "progress-bar-striped": i.value || (o == null ? void 0 : o.striped.value) || a.value || (o == null ? void 0 : o.animated.value)
      }
    ]), d = he(() => t.precision), f = he(() => t.value), g = he(() => t.max ?? NaN), p = he(() => (o == null ? void 0 : o.max.value) ?? NaN), y = w(
      () => t.labelHtml !== void 0 ? t.labelHtml : n.value || o != null && o.showValue.value ? f.value.toFixed(d.value) : l.value || o != null && o.showProgress.value ? (f.value * 100 / (g.value || 100)).toFixed(d.value) : t.label !== void 0 ? t.label : ""
    ), b = w(
      () => p.value ? `${f.value * 100 / p.value}%` : g.value ? `${f.value * 100 / g.value}%` : typeof t.value == "string" ? t.value : `${t.value}%`
    );
    return (V, C) => (m(), N("div", {
      class: j(["progress-bar", u.value]),
      role: "progressbar",
      "aria-valuenow": V.value,
      "aria-valuemin": "0",
      "aria-valuemax": V.max,
      style: ze({ width: b.value })
    }, [
      A(V.$slots, "default", {}, () => [
        ne(Z(y.value), 1)
      ])
    ], 14, ec));
  }
}), Vn = /* @__PURE__ */ q({
  __name: "BProgress",
  props: {
    height: { default: void 0 },
    animated: { type: [String, Boolean], default: void 0 },
    max: { default: 100 },
    precision: { default: void 0 },
    showProgress: { type: [String, Boolean], default: void 0 },
    showValue: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    value: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.animated), a = r(() => t.showProgress), l = r(() => t.showValue), n = r(() => t.striped);
    return at(Jl, {
      animated: o,
      max: E(() => t.max),
      showProgress: a,
      showValue: l,
      striped: n
    }), (i, s) => (m(), N("div", {
      class: "progress",
      style: ze({ height: i.height })
    }, [
      A(i.$slots, "default", {}, () => [
        ye(_n, {
          animated: i.animated,
          max: i.max,
          precision: i.precision,
          "show-progress": i.showProgress,
          "show-value": i.showValue,
          striped: i.striped,
          value: i.value,
          variant: i.variant,
          "text-variant": i.textVariant,
          "bg-variant": i.bgVariant
        }, null, 8, ["animated", "max", "precision", "show-progress", "show-value", "striped", "value", "variant", "text-variant", "bg-variant"])
      ])
    ], 4));
  }
}), Jo = wa("cols", [""], { type: [String, Number], default: null }), tc = q({
  name: "BRow",
  slots: Object,
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: !1 },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...Jo
  },
  setup(e) {
    const t = r(() => e.noGutters), o = Zt(() => e.alignH), a = w(() => Kl(e, Jo, "cols", "row-cols"));
    return {
      computedClasses: w(() => [
        a.value,
        {
          [`gx-${e.gutterX}`]: e.gutterX !== null,
          [`gy-${e.gutterY}`]: e.gutterY !== null,
          "g-0": t.value,
          [`align-items-${e.alignV}`]: e.alignV !== null,
          [o.value]: e.alignH !== null,
          [`align-content-${e.alignContent}`]: e.alignContent !== null
        }
      ])
    };
  }
});
function ac(e, t, o, a, l, n) {
  return m(), x(se(e.tag), {
    class: j(["row", e.computedClasses])
  }, {
    default: R(() => [
      A(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const oc = /* @__PURE__ */ $a(tc, [["render", ac]]), An = /* @__PURE__ */ q({
  __name: "BTbody",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`thead-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (m(), N("tbody", {
      class: j(o.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), lc = ["scope", "colspan", "rowspan", "data-label"], nc = { key: 0 }, Et = /* @__PURE__ */ q({
  __name: "BTd",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: [String, Boolean], default: !1 },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.stickyColumn), a = w(() => ({
      [`table-${t.variant}`]: t.variant !== null,
      "b-table-sticky-column": o.value,
      "table-b-table-default": o.value && t.variant === null
    })), l = E(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (n, i) => (m(), N("td", {
      scope: l.value,
      class: j(a.value),
      colspan: n.colspan,
      rowspan: n.rowspan,
      "data-label": n.stackedHeading
    }, [
      n.stackedHeading ? (m(), N("div", nc, [
        A(n.$slots, "default")
      ])) : A(n.$slots, "default", { key: 1 })
    ], 10, lc));
  }
}), qa = /* @__PURE__ */ q({
  __name: "BTfoot",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (m(), N("tfoot", {
      class: j(o.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), sc = ["scope", "colspan", "rowspan", "data-label"], ic = { key: 0 }, Ga = /* @__PURE__ */ q({
  __name: "BTh",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: [String, Boolean], default: !1 },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.stickyColumn), a = w(() => ({
      [`table-${t.variant}`]: t.variant !== null,
      "b-table-sticky-column": o.value,
      "table-b-table-default": o.value && t.variant === null
    })), l = E(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (n, i) => (m(), N("th", {
      scope: l.value,
      class: j(a.value),
      colspan: n.colspan,
      rowspan: n.rowspan,
      "data-label": n.stackedHeading
    }, [
      n.stackedHeading !== void 0 ? (m(), N("div", ic, [
        A(n.$slots, "default")
      ])) : A(n.$slots, "default", { key: 1 })
    ], 10, sc));
  }
}), On = /* @__PURE__ */ q({
  __name: "BThead",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (m(), N("thead", {
      class: j(o.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), lt = /* @__PURE__ */ q({
  __name: "BTr",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = w(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (m(), N("tr", {
      class: j(o.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), rc = {
  key: 0,
  class: "b-table-stacked-label"
}, uc = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, dc = { key: 2 }, En = /* @__PURE__ */ q({
  __name: "BTableLite",
  props: {
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: "There are no records matching your request" },
    emptyText: { default: "There are no records to show" },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: [String, Boolean], default: !1 },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: [String, Boolean], default: !1 },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: [String, Boolean], default: !1 },
    tbodyClass: { default: void 0 },
    tbodyTrAttr: { default: void 0 },
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: [String, Boolean], default: void 0 },
    borderless: { type: [String, Boolean], default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: [String, Boolean], default: void 0 },
    dark: { type: [String, Boolean], default: void 0 },
    fixed: { type: [String, Boolean], default: void 0 },
    hover: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: void 0 },
    outlined: { type: [String, Boolean], default: void 0 },
    responsive: { type: [String, Boolean], default: void 0 },
    small: { type: [String, Boolean], default: void 0 },
    stacked: { type: [String, Boolean], default: void 0 },
    stickyHeader: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    stripedColumns: { type: [String, Boolean], default: void 0 },
    tableClass: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.footClone), n = r(() => o.labelStacked), i = r(() => o.showEmpty), s = r(() => o.stacked), u = w(() => [
      o.tableClass,
      {
        [`align-${o.align}`]: o.align !== void 0
      }
    ]), d = w(() => !o.fields.length && o.items.length ? Object.keys(o.items[0]).map((c) => {
      const h = _a(c);
      return {
        key: c,
        label: h,
        tdAttr: s.value === !0 ? { "data-label": h } : void 0
      };
    }) : o.fields.map((c) => {
      if (typeof c == "string") {
        const h = _a(c);
        return {
          key: c,
          label: h,
          tdAttr: s.value === !0 ? { "data-label": h } : void 0
        };
      }
      return {
        ...c,
        tdAttr: s.value === !0 ? { "data-label": _a(c.key), ...c.tdAttr } : c.tdAttr
      };
    })), f = E(() => d.value.length), g = (c, h, B) => {
      const _ = No(c, h);
      return B && typeof B == "function" ? B(_, h, c) : _;
    }, p = (c, h, B = !1) => {
      const _ = typeof c == "string" ? c : c.key;
      a("head-clicked", _, c, h, B);
    }, y = (c) => {
      c._showDetails = !c._showDetails;
    }, b = (c) => [
      c.class,
      c.thClass,
      {
        "b-table-sticky-column": c.stickyColumn
      },
      o.fieldColumnClass ? typeof o.fieldColumnClass == "function" ? o.fieldColumnClass(c) : o.fieldColumnClass : null
    ], V = (c, h) => {
      var B;
      return [
        c.class,
        c.tdClass,
        (B = h._cellVariants) != null && B[c.key] ? `table-${h._cellVariants[c.key]}` : null,
        {
          "b-table-sticky-column": c.stickyColumn
        }
      ];
    }, C = (c, h) => o.tbodyTrClass ? typeof o.tbodyTrClass == "function" ? o.tbodyTrClass(c, h) : o.tbodyTrClass : null;
    return (c, h) => (m(), x(go, {
      id: c.id,
      bordered: c.bordered,
      borderless: c.borderless,
      "border-variant": c.borderVariant,
      "caption-top": c.captionTop,
      dark: c.dark,
      fixed: c.fixed,
      hover: c.hover,
      "no-border-collapse": c.noBorderCollapse,
      outlined: c.outlined,
      responsive: c.responsive,
      small: c.small,
      stacked: v(s),
      "sticky-header": c.stickyHeader,
      striped: c.striped,
      "table-class": u.value,
      variant: c.variant,
      "striped-columns": c.stripedColumns
    }, {
      default: R(() => [
        ye(On, {
          variant: c.headVariant,
          class: j(c.theadClass)
        }, {
          default: R(() => [
            c.$slots["thead-top"] ? A(c.$slots, "thead-top", { key: 0 }) : J("", !0),
            ye(lt, {
              variant: c.headRowVariant,
              class: j(c.theadTrClass)
            }, {
              default: R(() => [
                (m(!0), N(ge, null, Te(d.value, (B) => (m(), x(Ga, Q({
                  key: B.key,
                  scope: "col",
                  class: b(B),
                  title: B.headerTitle,
                  variant: B.variant,
                  abbr: B.headerAbbr,
                  style: B.thStyle
                }, B.thAttr, {
                  onClick: (_) => p(B, _)
                }), {
                  default: R(() => [
                    A(c.$slots, c.$slots[`head(${B.key})`] ? `head(${B.key})` : "head()", {
                      label: B.label,
                      column: B.key,
                      field: B,
                      isFoot: !1
                    }, () => [
                      ne(Z(v(ia)(B)), 1)
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "variant", "abbr", "style", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"]),
            c.$slots["thead-sub"] ? (m(), x(lt, { key: 1 }, {
              default: R(() => [
                (m(!0), N(ge, null, Te(d.value, (B) => (m(), x(Et, {
                  key: B.key,
                  scope: "col",
                  variant: B.variant,
                  class: j([B.class, B.thClass])
                }, {
                  default: R(() => [
                    A(c.$slots, "thead-sub", Q({ items: d.value }, B), () => [
                      ne(Z(B.label), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["variant", "class"]))), 128))
              ]),
              _: 3
            })) : J("", !0)
          ]),
          _: 3
        }, 8, ["variant", "class"]),
        ye(An, {
          class: j(c.tbodyClass)
        }, {
          default: R(() => [
            A(c.$slots, "custom-body", {
              fields: d.value,
              items: c.items,
              columns: d.value.length
            }, () => [
              !v(s) && c.$slots["top-row"] ? (m(), x(lt, { key: 0 }, {
                default: R(() => [
                  A(c.$slots, "top-row")
                ]),
                _: 3
              })) : J("", !0),
              (m(!0), N(ge, null, Te(c.items, (B, _) => (m(), N(ge, { key: _ }, [
                ye(lt, {
                  class: j(C(B, "row")),
                  variant: B._rowVariant,
                  onClick: (k) => !v(ea)(k) && a("row-clicked", B, _, k),
                  onDblclick: (k) => !v(ea)(k) && a("row-dbl-clicked", B, _, k),
                  onMouseenter: (k) => !v(ea)(k) && a("row-hovered", B, _, k),
                  onMouseleave: (k) => !v(ea)(k) && a("row-unhovered", B, _, k)
                }, {
                  default: R(() => [
                    (m(!0), N(ge, null, Te(d.value, (k) => {
                      var S;
                      return m(), x(Et, Q({
                        key: k.key,
                        variant: (S = B._cellVariants) != null && S[k.key] ? null : k.variant,
                        class: V(k, B)
                      }, k.tdAttr), {
                        default: R(() => [
                          v(s) && v(n) ? (m(), N("label", rc, Z(v(ia)(k)), 1)) : J("", !0),
                          A(c.$slots, c.$slots[`cell(${k.key})`] ? `cell(${k.key})` : "cell()", {
                            value: v(No)(B, k.key),
                            index: _,
                            item: B,
                            field: k,
                            items: c.items,
                            toggleDetails: () => {
                              y(B);
                            },
                            detailsShowing: B._showDetails ?? !1
                          }, () => [
                            ne(Z(g(B, k.key, k.formatter)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["variant", "class"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "variant", "onClick", "onDblclick", "onMouseenter", "onMouseleave"]),
                B._showDetails === !0 && c.$slots["row-details"] ? (m(), x(lt, {
                  key: 0,
                  class: j(C(B, "row-details")),
                  variant: B._rowVariant
                }, {
                  default: R(() => [
                    ye(Et, { colspan: f.value }, {
                      default: R(() => [
                        A(c.$slots, "row-details", {
                          item: B,
                          toggleDetails: () => {
                            y(B);
                          },
                          fields: c.fields,
                          index: _
                        })
                      ]),
                      _: 2
                    }, 1032, ["colspan"])
                  ]),
                  _: 2
                }, 1032, ["class", "variant"])) : J("", !0)
              ], 64))), 128)),
              v(i) && c.items.length === 0 ? (m(), x(lt, {
                key: 1,
                class: "b-table-empty-slot"
              }, {
                default: R(() => [
                  ye(Et, { colspan: f.value }, {
                    default: R(() => [
                      A(c.$slots, "empty", { items: c.items }, () => [
                        ne(Z(c.emptyText), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["colspan"])
                ]),
                _: 3
              })) : J("", !0),
              !v(s) && c.$slots["bottom-row"] ? (m(), x(lt, { key: 2 }, {
                default: R(() => [
                  A(c.$slots, "bottom-row")
                ]),
                _: 3
              })) : J("", !0)
            ])
          ]),
          _: 3
        }, 8, ["class"]),
        v(l) ? (m(), x(qa, {
          key: 0,
          variant: c.footVariant,
          class: j(c.tfootClass)
        }, {
          default: R(() => [
            ye(lt, {
              variant: c.footRowVariant,
              class: j(c.tfootTrClass)
            }, {
              default: R(() => [
                (m(!0), N(ge, null, Te(d.value, (B) => (m(), x(Ga, Q({
                  key: B.key,
                  scope: "col",
                  class: b(B),
                  title: B.headerTitle,
                  abbr: B.headerAbbr,
                  style: B.thStyle,
                  variant: B.variant
                }, B.thAttr, {
                  onClick: (_) => p(B, _, !0)
                }), {
                  default: R(() => [
                    ee("div", uc, [
                      ee("div", null, [
                        A(c.$slots, c.$slots[`foot(${B.key})`] ? `foot(${B.key})` : "foot()", {
                          label: B.label,
                          column: B.key,
                          field: B,
                          isFoot: !0
                        }, () => [
                          ne(Z(v(ia)(B)), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "abbr", "style", "variant", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"])
          ]),
          _: 3
        }, 8, ["variant", "class"])) : c.$slots["custom-foot"] ? (m(), x(qa, { key: 1 }, {
          default: R(() => [
            A(c.$slots, "custom-foot", {
              fields: d.value,
              items: c.items,
              columns: d.value.length
            })
          ]),
          _: 3
        })) : J("", !0),
        c.$slots["table-caption"] || c.caption ? (m(), N("caption", dc, [
          A(c.$slots, "table-caption", {}, () => [
            ne(Z(c.caption), 1)
          ])
        ])) : J("", !0)
      ]),
      _: 3
    }, 8, ["id", "bordered", "borderless", "border-variant", "caption-top", "dark", "fixed", "hover", "no-border-collapse", "outlined", "responsive", "small", "stacked", "sticky-header", "striped", "table-class", "variant", "striped-columns"]));
  }
}), cc = /* @__PURE__ */ ee("path", {
  "fill-rule": "evenodd",
  d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
}, null, -1), fc = [
  cc
], vc = /* @__PURE__ */ ee("path", {
  "fill-rule": "evenodd",
  d: "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
}, null, -1), pc = [
  vc
], mc = { class: "d-flex align-items-center gap-2 mt-5" }, gc = /* @__PURE__ */ q({
  __name: "BTable",
  props: {
    provider: { type: Function, default: void 0 },
    sortCompare: { type: Function, default: void 0 },
    noProvider: { default: void 0 },
    noProviderPaging: { type: [String, Boolean], default: !1 },
    noProviderSorting: { type: [String, Boolean], default: !1 },
    noProviderFiltering: { type: [String, Boolean], default: !1 },
    sortBy: { default: void 0 },
    sortDesc: { type: [String, Boolean], default: !1 },
    selectable: { type: [String, Boolean], default: !1 },
    stickySelect: { type: [String, Boolean], default: !1 },
    selectHead: { type: [Boolean, String], default: !0 },
    selectMode: { default: "multi" },
    selectionVariant: { default: "primary" },
    busy: { type: [String, Boolean], default: !1 },
    busyLoadingText: { default: "Loading..." },
    perPage: { default: 1 / 0 },
    currentPage: { default: 1 },
    filter: { default: void 0 },
    filterable: { default: void 0 },
    selectedItems: { default: () => [] },
    noSortableIcon: { type: [String, Boolean], default: !1 },
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: void 0 },
    emptyText: { default: void 0 },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: [String, Boolean], default: void 0 },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: [String, Boolean], default: void 0 },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: [String, Boolean], default: void 0 },
    tbodyClass: { default: void 0 },
    tbodyTrAttr: { default: void 0 },
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: [String, Boolean], default: void 0 },
    borderless: { type: [String, Boolean], default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: [String, Boolean], default: void 0 },
    dark: { type: [String, Boolean], default: void 0 },
    fixed: { type: [String, Boolean], default: void 0 },
    hover: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: void 0 },
    outlined: { type: [String, Boolean], default: void 0 },
    responsive: { type: [String, Boolean], default: void 0 },
    small: { type: [String, Boolean], default: void 0 },
    stacked: { type: [String, Boolean], default: void 0 },
    stickyHeader: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    stripedColumns: { type: [String, Boolean], default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["filtered", "head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-selected", "row-unhovered", "row-unselected", "selection", "sorted", "update:busy", "update:selectedItems", "update:sortDesc", "update:sortBy"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "sortBy", l, { passive: !0 }), i = ke(a, "busy", l, { passive: !0 }), s = ke(a, "sortDesc", l, { passive: !0 }), u = ke(a, "selectedItems", l, { passive: !0 }), d = w({
      get: () => /* @__PURE__ */ new Set([...u.value]),
      set: (M) => {
        u.value = [...M];
      }
    }), f = {
      add: (M) => {
        const L = new Set(d.value);
        L.add(M), d.value = L, l("row-selected", M);
      },
      clear: () => {
        d.value.forEach((M) => {
          l("row-unselected", M);
        }), d.value = /* @__PURE__ */ new Set();
      },
      delete: (M) => {
        const L = new Set(d.value);
        L.delete(M), d.value = L, l("row-unselected", M);
      },
      /* TODO
      This has method and the delete method suffer from an error when using a non-reactive source as the items prop
      ```ts
      const items = [{first_name: 'Geneva', last_name: 'Wilson', age: 89},{first_name: 'Jami', last_name: 'Carney', age: 38}]
      ```
      For some reason, the reference of the object gets lost. However, when you use an actual ref(), it works just fine
      Getting the reference properly will fix all outstanding issues
      */
      has: (M) => d.value.has(M)
    }, g = W([]), p = r(s), y = r(i), b = r(() => a.noProviderPaging), V = r(() => a.noProviderSorting), C = r(() => a.noProviderFiltering), c = r(() => a.selectable), h = r(() => a.noSortableIcon), B = he(() => a.perPage, { method: "parseInt" }), _ = he(() => a.currentPage, { method: "parseInt" }), k = E(() => !!a.filter), S = E(() => a.provider !== void 0), $ = E(() => d.value.size > 0), I = w(
      () => n.value !== void 0 || a.fields.some((M) => typeof M == "string" ? !1 : M.sortable)
    ), T = w(
      () => a.fields.map(
        (M) => typeof M == "string" ? M : {
          ...M,
          thAttr: {
            "aria-sort": I.value === !1 ? void 0 : n.value !== M.key ? "none" : p.value === !0 ? "descending" : "ascending",
            ...M.thAttr
          }
        }
      )
    ), O = w(() => ({
      "b-table-busy": y.value,
      "b-table-selectable": c.value,
      "user-select-none": c.value && $.value
    })), F = w(() => [
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(null, "table-busy") : a.tbodyTrClass : null
    ]), K = (M) => [
      {
        "b-table-sortable-column": I.value && M.sortable
      }
    ], z = (M, L) => [
      {
        [`selected table-${a.selectionVariant}`]: c.value && M && f.has(M)
      },
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(M, L) : a.tbodyTrClass : null
    ], P = (M) => n.value !== M.key ? { opacity: 0.5 } : {}, D = w(() => {
      const M = (H) => {
        const G = n.value;
        if (G === void 0)
          return H;
        const X = T.value.find((te) => typeof te == "string" ? !1 : te.key === G);
        return typeof X != "string" && (X == null ? void 0 : X.sortable) === !1 ? H : [...H].sort((te, be) => {
          if (a.sortCompare !== void 0)
            return a.sortCompare(te, be, G, p.value);
          const me = (de) => typeof de == "object" && de !== null ? JSON.stringify(de) : (de == null ? void 0 : de.toString()) ?? "";
          return me(te[G]) > me(be[G]) ? p.value ? -1 : 1 : me(be[G]) > me(te[G]) ? p.value ? 1 : -1 : 0;
        });
      }, L = (H) => H.filter(
        (G) => Object.entries(G).some(([X, te]) => {
          var me, de;
          return !te || X[0] === "_" || !((me = a.filterable) != null && me.includes(X)) ? !1 : (typeof te == "object" ? JSON.stringify(Object.values(te)) : te.toString()).toLowerCase().includes(((de = a.filter) == null ? void 0 : de.toLowerCase()) ?? "");
        })
      );
      let U = S.value ? g.value : a.items;
      return (k.value === !0 && !S.value || k.value === !0 && S.value && C.value) && (U = L(U)), (I.value === !0 && !S.value || I.value === !0 && S.value && V.value) && (U = M(U)), U;
    }), ae = w(() => Number.isNaN(B.value) || S.value && !b.value ? D.value : D.value.slice(
      (_.value - 1) * (B.value || 1 / 0),
      _.value * (B.value || 1 / 0)
    )), le = (M, L, U = !1, H = !1, G = !1) => {
      if (c.value) {
        if (a.selectMode === "single" || a.selectMode === "multi") {
          if (U || H)
            return;
          f.has(M) ? f.delete(M) : (a.selectMode === "single" && f.clear(), f.add(M));
        } else if (H || G)
          f.has(M) ? f.delete(M) : f.add(M);
        else if (U) {
          const X = [...d.value].pop(), te = a.items.findIndex((de) => de === X), be = Math.min(te, L), me = Math.max(te, L);
          a.items.slice(be, me + 1).forEach((de) => {
            f.has(de) || f.add(de);
          });
        } else
          f.clear(), f.add(M);
        fe();
      }
    }, ve = (M, L, U) => {
      le(M, L, U.shiftKey, U.ctrlKey, U.metaKey), l("row-clicked", M, L, U);
    }, Be = (M) => {
      if (!I.value)
        return;
      const L = typeof M == "string" ? M : M.key, U = typeof M == "string" ? !1 : M.sortable;
      I.value === !0 && U === !0 && (n.value !== L ? (n.value = L, s.value = !1) : p.value === !1 ? s.value = !0 : (n.value = void 0, s.value = !1), l("sorted", L, n.value === void 0 ? !1 : !p.value));
    }, Ve = (M, L, U, H = !1) => {
      l("head-clicked", M, L, U, H), Be(L);
    }, oe = async () => {
      if (!S.value || a.provider === void 0 || y.value)
        return;
      i.value = !0;
      const M = a.provider({
        currentPage: _.value,
        filter: a.filter,
        sortBy: n.value,
        sortDesc: a.sortDesc,
        perPage: B.value
      });
      try {
        const L = M instanceof Promise ? await M : M;
        if (L === void 0)
          return;
        g.value = L;
      } finally {
        i.value = !1;
      }
    }, fe = () => {
      c.value && l("selection", [...d.value]);
    }, $e = async () => {
      if (S.value) {
        await oe();
        return;
      }
      l("filtered", D.value);
    }, we = async (M, L, U) => {
      if (L === U)
        return;
      const H = (be) => {
        var me;
        return ((me = a.noProvider) == null ? void 0 : me.includes(be)) === !0;
      }, G = (M === "currentPage" || M === "perPage") && (H("paging") || b.value === !0), X = M === "filter" && (H("filtering") || C.value === !0), te = (M === "sortBy" || M === "sortDesc") && (H("sorting") || V.value === !0);
      G || X || te || (await oe(), M === "currentPage" || M === "perPage" || $e());
    };
    return ue(
      () => a.filter,
      (M, L) => {
        we("filter", M, L), !(M === L || S.value) && (M || l("filtered", D.value));
      }
    ), ue(_, (M, L) => {
      we("currentPage", M, L);
    }), ue(B, (M, L) => {
      we("perPage", M, L);
    }), ue(n, (M, L) => {
      we("sortBy", M, L);
    }), ue(p, (M, L) => {
      we("sortDesc", M, L);
    }), ue(
      () => a.provider,
      (M) => {
        if (M === void 0) {
          g.value = [];
          return;
        }
        oe();
      }
    ), st(oe), t({
      // The row selection methods are really for compat. Users should probably use the v-model though
      clearSelected: () => {
        c.value && (f.clear(), fe());
      },
      refresh: oe,
      selectAllRows: () => {
        if (!c.value)
          return;
        const M = d.value.size > 0 ? [...d.value] : [];
        d.value = /* @__PURE__ */ new Set([...D.value]), d.value.forEach((L) => {
          M.includes(L) || l("row-selected", L);
        }), fe();
      },
      selectRow: (M) => {
        if (!c.value)
          return;
        const L = D.value[M];
        !L || f.has(L) || (f.add(L), fe());
      },
      unselectRow: (M) => {
        if (!c.value)
          return;
        const L = D.value[M];
        !L || !f.has(L) || (f.delete(L), fe());
      }
    }), (M, L) => (m(), x(En, Q(a, {
      "aria-busy": v(y),
      items: ae.value,
      fields: T.value,
      "table-class": O.value,
      "tbody-tr-class": z,
      "field-column-class": K,
      onHeadClicked: Ve,
      onRowClicked: ve
    }), Ua({
      "head()": R((U) => [
        ne(Z(v(ia)(U.field)) + " ", 1),
        I.value && U.field.sortable && v(h) === !1 ? (m(), N(ge, { key: 0 }, [
          v(p) ? A(M.$slots, "sortDesc", Se(Q({ key: 1 }, { ...U })), () => [
            (m(), N("svg", {
              style: ze(P(U.field)),
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              class: "bi bi-arrow-down-short",
              viewBox: "0 0 16 16",
              "aria-hidden": ""
            }, pc, 4))
          ]) : A(M.$slots, "sortAsc", Se(Q({ key: 0 }, { ...U })), () => [
            (m(), N("svg", {
              style: ze(P(U.field)),
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              class: "bi bi-arrow-up-short",
              viewBox: "0 0 16 16",
              "aria-hidden": ""
            }, fc, 4))
          ])
        ], 64)) : J("", !0)
      ]),
      "custom-body": R((U) => [
        v(y) ? (m(), x(lt, {
          key: 0,
          class: j(["b-table-busy-slot", F.value])
        }, {
          default: R(() => [
            ye(Et, {
              colspan: U.fields.length
            }, {
              default: R(() => [
                A(M.$slots, "table-busy", {}, () => [
                  ye(Ta, { show: "" }, {
                    overlay: R(() => [
                      ee("div", mc, [
                        ye(ka),
                        ee("strong", null, Z(M.busyLoadingText), 1)
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 2
            }, 1032, ["colspan"])
          ]),
          _: 2
        }, 1032, ["class"])) : J("", !0)
      ]),
      _: 2
    }, [
      Te(M.$slots, (U, H) => ({
        name: H,
        fn: R((G) => [
          A(M.$slots, H, Se(Ee(G)))
        ])
      }))
    ]), 1040, ["aria-busy", "items", "fields", "table-class"]));
  }
}), bc = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "BTab",
  props: {
    active: { type: [String, Boolean], default: !1 },
    buttonId: { default: void 0 },
    disabled: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: void 0 },
    lazyOnce: { type: [String, Boolean], default: void 0 },
    noBody: { type: [String, Boolean], default: !1 },
    tag: { default: "div" },
    title: { default: void 0 },
    titleItemClass: { default: void 0 },
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: { default: void 0 }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const o = e, a = Me(), l = t, n = Ge(Zl, null), i = _e(() => o.id, "tabpane"), s = _e(() => o.buttonId, "tab"), u = r(() => o.active), d = r(() => o.disabled), f = r(() => o.lazyOnce ?? o.lazy), g = r(() => o.noBody), p = W(!1), y = W(null), { onClick: b, ...V } = Kt(), C = w(
      () => ({
        id: i.value,
        buttonId: s.value,
        disabled: d.value,
        title: o.title,
        titleComponent: a.title,
        titleItemClass: o.titleItemClass,
        titleLinkAttributes: o.titleLinkAttributes,
        titleLinkClass: o.titleLinkClass,
        onClick: b,
        el: y.value
      })
    );
    st(() => {
      n && (n.registerTab(C), u.value && n.activateTab(i.value));
    }), Un(() => {
      n && n.unregisterTab(i.value);
    });
    const c = E(() => (n == null ? void 0 : n.activeId.value) === i.value), h = W(c.value), B = E(() => !!(n != null && n.lazy.value || f.value)), _ = E(() => o.lazyOnce !== void 0), k = E(() => c.value && !d.value), S = E(
      () => k.value || !B.value || B.value && _.value && p.value
    );
    ue(c, (I) => {
      if (I) {
        l("update:active", !0), setTimeout(() => {
          h.value = !0;
        }, 0);
        return;
      }
      h.value = !1, l("update:active", !1);
    }), ue(u, (I) => {
      if (n) {
        if (!I) {
          c.value && n.activateTab(void 0);
          return;
        }
        n.activateTab(i.value);
      }
    });
    const $ = w(() => [
      {
        active: c.value,
        show: h.value,
        "card-body": (n == null ? void 0 : n.card.value) && g.value === !1,
        fade: !(n != null && n.noFade.value)
      },
      h.value && (n != null && n.activeTabClass) ? n.activeTabClass : null
    ]);
    return ue(S, (I) => {
      I && !p.value && (p.value = !0);
    }), (I, T) => (m(), x(se(I.tag), Q({
      id: v(i),
      ref_key: "el",
      ref: y,
      class: ["tab-pane", $.value],
      role: "tabpanel",
      "aria-labelledby": v(s)
    }, V), {
      default: R(() => [
        S.value ? A(I.$slots, "default", { key: 0 }) : J("", !0)
      ]),
      _: 3
    }, 16, ["id", "class", "aria-labelledby"]));
  }
}), yc = ["aria-orientation"], hc = ["id", "aria-controls", "aria-selected", "onClick"], Bc = /* @__PURE__ */ q({
  __name: "BTabs",
  props: {
    activeId: { default: void 0 },
    activeNavItemClass: { default: void 0 },
    activeTabClass: { default: void 0 },
    align: { default: void 0 },
    card: { type: [String, Boolean], default: !1 },
    contentClass: { default: void 0 },
    end: { type: [String, Boolean], default: !1 },
    fill: { type: [String, Boolean], default: !1 },
    id: { default: void 0 },
    justified: { type: [String, Boolean], default: !1 },
    lazy: { type: [String, Boolean], default: !1 },
    modelValue: { default: -1 },
    navClass: { default: void 0 },
    navWrapperClass: { default: void 0 },
    noFade: { type: [String, Boolean], default: !1 },
    noNavStyle: { type: [String, Boolean], default: !1 },
    pills: { type: [String, Boolean], default: !1 },
    small: { type: [String, Boolean], default: !1 },
    tag: { default: "div" },
    vertical: { type: [String, Boolean], default: !1 }
  },
  emits: ["activate-tab", "click", "update:activeId", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = ke(o, "modelValue", a, { passive: !0 }), n = ke(o, "activeId", a, { passive: !0 }), i = r(() => o.card), s = r(() => o.end), u = r(() => o.fill), d = r(() => o.justified), f = r(() => o.lazy), g = r(() => o.noFade), p = r(() => o.noNavStyle), y = r(() => o.pills), b = r(() => o.small), V = r(() => o.vertical), C = W([]), c = w(
      () => C.value.map((z) => {
        const P = v(z), D = P.id === n.value;
        return {
          ...P,
          active: D,
          navItemClasses: [
            {
              active: D,
              disabled: P.disabled
            },
            D && o.activeNavItemClass ? o.activeNavItemClass : null,
            P.titleLinkClass
          ]
        };
      })
    ), h = E(() => !(c != null && c.value && c.value.length > 0)), B = w(() => ({
      "d-flex": V.value,
      "align-items-start": V.value
    })), _ = Zt(() => o.align), k = w(() => ({
      "nav-pills": y.value,
      "flex-column me-3": V.value,
      [_.value]: o.align !== void 0,
      "nav-fill": u.value,
      "card-header-tabs": i.value,
      "nav-justified": d.value,
      "nav-tabs": !p.value && !y.value,
      small: b.value
    })), S = (z) => {
      var P;
      if (z !== void 0) {
        const D = (P = c.value[z]) == null ? void 0 : P.id;
        if (z > -1 && z < c.value.length && !c.value[z].disabled && (l.value < 0 || n.value !== D || l.value !== z)) {
          const ae = new dt("activate-tab", { cancelable: !0 });
          a("activate-tab", z, l.value, ae), ae.defaultPrevented || (n.value !== D && (n.value = D), l.value !== z && (l.value = z));
        }
      }
    }, $ = (z, P) => {
      var D, ae, le;
      S(P), P >= 0 && !c.value[P].disabled && ((D = c.value[P]) != null && D.onClick) && typeof c.value[P].onClick == "function" && ((le = (ae = c.value[P]).onClick) == null || le.call(ae, z));
    }, I = (z) => {
      var P, D;
      c.value.length <= 0 || (l.value = T(l.value + z, z), (D = document.getElementById((P = c.value[l.value]) == null ? void 0 : P.buttonId)) == null || D.focus());
    }, T = (z, P) => {
      if (c.value.length <= 0)
        return -1;
      let D = z;
      const ae = c.value.map((ve) => !ve.disabled).lastIndexOf(!0), le = c.value.map((ve) => !ve.disabled).indexOf(!0);
      for (; D >= le && D <= ae && c.value[D].disabled; )
        D += P;
      return D < le && (D = le), D >= ae && (D = ae), D;
    };
    ue(l, (z, P) => {
      if (z === P || c.value.length <= 0)
        return;
      const D = T(z, z > P ? 1 : -1);
      Ne(() => {
        S(D);
      });
    }), ue(n, (z, P) => {
      const D = c.value.findIndex((ae) => ae.id === z);
      if (z !== P && !(c.value.length <= 0)) {
        if (D === -1) {
          S(T(0, 1));
          return;
        }
        S(D);
      }
    });
    const O = (z) => {
      C.value.find((P) => P.value.id === z.value.id) ? C.value[C.value.findIndex((P) => P.value.id === z.value.id)] = z : C.value.push(z), C.value = C.value.sort((P, D) => {
        if (!Node || !P.value.el || !D.value.el)
          return 0;
        const ae = P.value.el.compareDocumentPosition(D.value.el);
        return ae & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : ae & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      });
    }, F = (z) => {
      C.value.find((P) => P.value.id === z) && C.value.splice(
        C.value.findIndex((P) => P.value.id === z),
        1
      );
    };
    ue(
      C,
      () => {
        K();
      },
      { deep: !0 }
    );
    const K = () => {
      var z;
      if (c.value.length === 0) {
        l.value = -1, n.value = void 0;
        return;
      }
      if (l.value >= 0 && !n.value && (n.value = (z = c.value[l.value]) == null ? void 0 : z.id), c.value.find((P) => P.id === n.value)) {
        S(c.value.findIndex((P) => P.id === n.value));
        return;
      }
      S(c.value.map((P) => !P.disabled).indexOf(!0));
    };
    return at(Zl, {
      lazy: f,
      card: i,
      noFade: g,
      activeTabClass: E(() => o.activeTabClass),
      registerTab: O,
      unregisterTab: F,
      activeId: n,
      activateTab: (z) => {
        const P = c.value.findIndex((D) => D.id === z);
        if (z === void 0 || P === -1) {
          S(T(0, 1));
          return;
        }
        S(P);
      }
    }), (z, P) => (m(), x(se(z.tag), {
      id: z.id,
      class: j(["tabs", B.value])
    }, {
      default: R(() => [
        v(s) ? (m(), N("div", {
          key: 0,
          class: j(["tab-content", z.contentClass])
        }, [
          A(z.$slots, "default"),
          h.value ? (m(), N("div", {
            key: "bv-empty-tab",
            class: j(["tab-pane active", { "card-body": v(i) }])
          }, [
            A(z.$slots, "empty")
          ], 2)) : J("", !0)
        ], 2)) : J("", !0),
        ee("div", {
          class: j([z.navWrapperClass, { "card-header": v(i), "ms-auto": z.vertical && v(s) }])
        }, [
          ee("ul", {
            class: j(["nav", [k.value, z.navClass]]),
            role: "tablist",
            "aria-orientation": z.vertical ? "vertical" : "horizontal"
          }, [
            A(z.$slots, "tabs-start"),
            (m(!0), N(ge, null, Te(c.value, (D, ae) => (m(), N("li", {
              key: D.id,
              class: j(["nav-item", D.titleItemClass]),
              role: "presentation"
            }, [
              ee("button", Q({
                id: D.buttonId,
                class: ["nav-link", D.navItemClasses],
                role: "tab",
                "aria-controls": D.id,
                "aria-selected": D.active
              }, D.titleLinkAttributes, {
                onKeydown: [
                  P[0] || (P[0] = Qt(Bt((le) => I(-1), ["stop", "prevent"]), ["left"])),
                  P[1] || (P[1] = Qt(Bt((le) => I(1), ["stop", "prevent"]), ["right"])),
                  P[2] || (P[2] = Qt(Bt((le) => I(-999), ["stop", "prevent"]), ["page-up"])),
                  P[3] || (P[3] = Qt(Bt((le) => I(999), ["stop", "prevent"]), ["page-down"]))
                ],
                onClick: Bt((le) => $(le, ae), ["stop", "prevent"])
              }), [
                D.titleComponent ? (m(), x(se(D.titleComponent), { key: 0 })) : (m(), N(ge, { key: 1 }, [
                  ne(Z(D.title), 1)
                ], 64))
              ], 16, hc)
            ], 2))), 128)),
            A(z.$slots, "tabs-end")
          ], 10, yc)
        ], 2),
        v(s) ? J("", !0) : (m(), N("div", {
          key: 1,
          class: j(["tab-content", z.contentClass])
        }, [
          A(z.$slots, "default"),
          h.value ? (m(), N("div", {
            key: "bv-empty-tab",
            class: j(["tab-pane active", { "card-body": v(i) }])
          }, [
            A(z.$slots, "empty")
          ], 2)) : J("", !0)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Sc = ["id", "role", "aria-live", "aria-atomic"], Cc = { class: "me-auto" }, Pn = /* @__PURE__ */ q({
  __name: "BToast",
  props: {
    animation: { type: [String, Boolean], default: !0 },
    autoHide: { type: [String, Boolean], default: !0 },
    body: { default: void 0 },
    bodyClass: { default: void 0 },
    delay: { default: 5e3 },
    headerClass: { default: void 0 },
    headerTag: { default: "div" },
    id: { default: void 0 },
    interval: { default: 1e3 },
    isStatus: { type: [String, Boolean], default: !1 },
    modelValue: { type: [Boolean, Number], default: !1 },
    noCloseButton: { type: [String, Boolean], default: !1 },
    noFade: { type: [String, Boolean], default: !1 },
    noHoverPause: { type: [String, Boolean], default: !1 },
    progressProps: { default: void 0 },
    showOnPause: { type: [String, Boolean], default: !0 },
    solid: { type: [String, Boolean], default: !1 },
    title: { default: void 0 },
    toastClass: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: null },
    textVariant: { default: null },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  },
  emits: ["close", "close-countdown", "closed", "destroyed", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = W(null), i = lo(n), s = ke(a, "modelValue", l), { computedLink: u, computedLinkProps: d } = Ct(a);
    r(() => a.animation);
    const f = r(() => a.isStatus);
    r(() => a.autoHide);
    const g = r(() => a.noCloseButton), p = r(() => a.noFade), y = r(() => a.noHoverPause), b = r(() => a.showOnPause), V = he(() => a.interval);
    r(() => a.solid);
    const C = Qe(a), c = E(() => typeof s.value == "boolean" ? 0 : s.value), {
      isActive: h,
      pause: B,
      restart: _,
      resume: k,
      stop: S,
      isPaused: $,
      value: I
    } = zl(c, V, {
      immediate: typeof s.value == "number"
    });
    Xt(() => {
      l("close-countdown", I.value);
    });
    const T = E(() => u.value ? rt : "div"), O = E(
      () => typeof s.value == "boolean" ? s.value : h.value || b.value && $.value
    );
    ue(h, (P) => {
      P === !1 && $.value === !1 && l("destroyed");
    });
    const F = w(() => [
      C.value,
      {
        show: O.value
      }
    ]), K = () => {
      l("close"), typeof s.value == "boolean" ? s.value = !1 : (s.value = 0, S()), l("closed");
    }, z = () => {
      y.value || B();
    };
    return ue(i, (P) => {
      if (P) {
        z();
        return;
      }
      k();
    }), Wa(S), t({
      pause: B,
      restart: _,
      resume: k,
      stop: S
    }), (P, D) => (m(), x(Mt, { "no-fade": v(p) }, {
      default: R(() => [
        O.value ? (m(), N("div", {
          key: 0,
          id: P.id,
          ref_key: "element",
          ref: n,
          class: j(["toast", [P.toastClass, F.value]]),
          tabindex: "0",
          role: O.value ? v(f) ? "status" : "alert" : void 0,
          "aria-live": O.value ? v(f) ? "polite" : "assertive" : void 0,
          "aria-atomic": O.value ? !0 : void 0
        }, [
          P.$slots.title || P.title ? (m(), x(se(P.headerTag), {
            key: 0,
            class: "toast-header"
          }, {
            default: R(() => [
              A(P.$slots, "title", { hide: K }, () => [
                ee("strong", Cc, Z(P.title), 1)
              ]),
              v(g) ? J("", !0) : (m(), x(Dt, {
                key: 0,
                onClick: K
              }))
            ]),
            _: 3
          })) : J("", !0),
          P.$slots.default || P.body ? (m(), x(se(T.value), Q({
            key: 1,
            class: ["toast-body", P.bodyClass],
            style: { display: "block" }
          }, v(d), {
            onClick: D[0] || (D[0] = (ae) => v(u) ? K : () => {
            })
          }), {
            default: R(() => [
              A(P.$slots, "default", { hide: K }, () => [
                ne(Z(P.body), 1)
              ])
            ]),
            _: 3
          }, 16, ["class"])) : J("", !0),
          typeof v(s) == "number" && P.progressProps !== void 0 ? (m(), x(Vn, {
            key: 2,
            animated: P.progressProps.animated,
            precision: P.progressProps.precision,
            "show-progress": P.progressProps.showProgress,
            "show-value": P.progressProps.showValue,
            striped: P.progressProps.striped,
            variant: P.progressProps.variant,
            max: v(s),
            value: v(I),
            height: "4px"
          }, null, 8, ["animated", "precision", "show-progress", "show-value", "striped", "variant", "max", "value"])) : J("", !0)
        ], 10, Sc)) : J("", !0)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
}), wc = { id: "__BVID__toaster-container" }, kc = /* @__PURE__ */ q({
  __name: "BToaster",
  props: {
    teleportDisabled: { type: [String, Boolean], default: !1 },
    teleportTo: { default: "body" }
  },
  setup(e, { expose: t }) {
    const o = e, a = r(() => o.teleportDisabled), l = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, { hide: n, toasts: i, show: s } = Ul(), u = (d) => nn(d, ["value", "self", "pos"]);
    return t({
      hide: n,
      show: s
    }), (d, f) => (m(), x(zt, {
      to: d.teleportTo,
      disabled: v(a)
    }, [
      ee("div", wc, [
        (m(), N(ge, null, Te(l, (g, p) => ee("div", {
          key: p,
          class: j([g, "toast-container position-fixed p-3"])
        }, [
          (m(!0), N(ge, null, Te(v(i).filter((y) => y.pos === p), (y) => (m(), x(Pn, Q({
            key: y.self,
            modelValue: y.value,
            "onUpdate:modelValue": (b) => y.value = b
          }, u(y), {
            onDestroyed: (b) => v(n)(y.self)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "onDestroyed"]))), 128))
        ], 2)), 64))
      ])
    ], 8, ["to", "disabled"]));
  }
}), $c = /* @__PURE__ */ q({
  __name: "BTooltip",
  props: {
    boundary: {},
    boundaryPadding: {},
    click: { type: [String, Boolean], default: void 0 },
    container: { default: void 0 },
    content: { default: void 0 },
    customClass: { default: void 0 },
    delay: { default: void 0 },
    floatingMiddleware: { default: void 0 },
    hide: { type: [String, Boolean], default: void 0 },
    html: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: void 0 },
    manual: { type: [String, Boolean], default: void 0 },
    modelValue: { type: [String, Boolean], default: void 0 },
    noAutoClose: { type: [String, Boolean], default: void 0 },
    noFade: { type: [String, Boolean], default: void 0 },
    noFlip: { type: [String, Boolean], default: void 0 },
    noHide: { type: [String, Boolean], default: void 0 },
    noShift: { type: [String, Boolean], default: void 0 },
    noSize: { type: [String, Boolean] },
    noninteractive: { type: [String, Boolean], default: !0 },
    offset: { default: void 0 },
    placement: { default: void 0 },
    persistent: { type: [String, Boolean] },
    realtime: { type: [String, Boolean], default: void 0 },
    reference: { default: void 0 },
    strategy: { default: void 0 },
    target: { default: void 0 },
    title: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e, { expose: t }) {
    var a, l, n;
    const o = W(null);
    return t({
      hide: (a = o.value) == null ? void 0 : a.hide,
      show: (l = o.value) == null ? void 0 : l.show,
      toggle: (n = o.value) == null ? void 0 : n.toggle
    }), (i, s) => (m(), x(ro, Q({
      ref_key: "popover",
      ref: o,
      tooltip: ""
    }, i.$props), Ua({ _: 2 }, [
      Te(i.$slots, (u, d) => ({
        name: d,
        fn: R((f) => [
          A(i.$slots, d, Se(Ee(f)))
        ])
      }))
    ]), 1040));
  }
}), Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BAccordion: ar,
  BAccordionItem: lr,
  BAlert: rr,
  BAvatar: fr,
  BAvatarGroup: vr,
  BBadge: pr,
  BBreadcrumb: br,
  BBreadcrumbItem: rn,
  BButton: pt,
  BButtonGroup: yr,
  BButtonToolbar: Br,
  BCard: mn,
  BCardBody: vn,
  BCardFooter: pn,
  BCardGroup: wr,
  BCardHeader: dn,
  BCardImg: ya,
  BCardSubtitle: fn,
  BCardText: kr,
  BCardTitle: cn,
  BCarousel: Pr,
  BCarouselSlide: Hr,
  BCloseButton: Dt,
  BCol: Gt,
  BCollapse: sn,
  BContainer: xr,
  BDropdown: gn,
  BDropdownDivider: qr,
  BDropdownForm: Ur,
  BDropdownGroup: Yr,
  BDropdownHeader: Jr,
  BDropdownItem: Qr,
  BDropdownItemButton: au,
  BDropdownText: nu,
  BForm: bn,
  BFormCheckbox: hn,
  BFormCheckboxGroup: mu,
  BFormFile: yu,
  BFormFloatingLabel: uu,
  BFormGroup: Tu,
  BFormInput: Vu,
  BFormInvalidFeedback: xa,
  BFormRadio: Sn,
  BFormRadioGroup: Iu,
  BFormRow: ra,
  BFormSelect: zu,
  BFormSelectOption: po,
  BFormSelectOptionGroup: Cn,
  BFormSpinbutton: Wu,
  BFormTag: wn,
  BFormTags: id,
  BFormText: Ma,
  BFormTextarea: ud,
  BFormValidFeedback: Da,
  BImg: vo,
  BInputGroup: gd,
  BInputGroupAddon: mo,
  BInputGroupAppend: bd,
  BInputGroupPrepend: yd,
  BInputGroupText: kn,
  BLink: rt,
  BListGroup: hd,
  BListGroupItem: Bd,
  BModal: kd,
  BNav: $d,
  BNavForm: _d,
  BNavItem: Ad,
  BNavItemDropdown: Ed,
  BNavText: Nd,
  BNavbar: Id,
  BNavbarBrand: Ld,
  BNavbarNav: Fd,
  BNavbarToggle: qd,
  BOffcanvas: Ud,
  BOverlay: Ta,
  BPagination: Yd,
  BPlaceholder: Ue,
  BPlaceholderButton: Tn,
  BPlaceholderCard: Zd,
  BPlaceholderTable: Jd,
  BPlaceholderWrapper: Qd,
  BPopover: ro,
  BProgress: Vn,
  BProgressBar: _n,
  BRow: oc,
  BSpinner: ka,
  BTab: bc,
  BTable: gc,
  BTableLite: En,
  BTableSimple: go,
  BTabs: Bc,
  BTbody: An,
  BTd: Et,
  BTfoot: qa,
  BTh: Ga,
  BThead: On,
  BToast: Pn,
  BToaster: kc,
  BTooltip: $c,
  BTr: lt,
  BTransition: Mt
}, Symbol.toStringTag, { value: "Module" })), Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useBreadcrumb: Hl,
  useColorMode: Ri,
  useModal: Di,
  useModalController: ji,
  useToast: Ul
}, Symbol.toStringTag, { value: "Module" })), Ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BvCarouselEvent: ll,
  BvEvent: dt,
  BvTriggerableEvent: Rt
}, Symbol.toStringTag, { value: "Module" })), Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ec = {
  install(e, t = { components: !0, directives: !0 }) {
    const o = typeof t.components == "boolean" || typeof t.components > "u" ? { all: !0 } : t.components, a = Object.keys(Qo);
    Io(o, a).forEach((i) => {
      const s = Qo[i];
      e.component(i, s);
    });
    const l = typeof (t == null ? void 0 : t.directives) == "boolean" || typeof t.directives > "u" ? { all: !0 } : t == null ? void 0 : t.directives, n = Object.keys(Ko);
    Io(l, n).forEach((i) => {
      const s = i.toLowerCase().startsWith("v") ? i.slice(1) : i, u = Ko[i];
      e.directive(s, u);
    });
  }
};
export {
  ar as BAccordion,
  lr as BAccordionItem,
  rr as BAlert,
  fr as BAvatar,
  vr as BAvatarGroup,
  pr as BBadge,
  br as BBreadcrumb,
  rn as BBreadcrumbItem,
  pt as BButton,
  yr as BButtonGroup,
  Br as BButtonToolbar,
  mn as BCard,
  vn as BCardBody,
  pn as BCardFooter,
  wr as BCardGroup,
  dn as BCardHeader,
  ya as BCardImg,
  fn as BCardSubtitle,
  kr as BCardText,
  cn as BCardTitle,
  Pr as BCarousel,
  Hr as BCarouselSlide,
  Dt as BCloseButton,
  Gt as BCol,
  sn as BCollapse,
  xr as BContainer,
  gn as BDropdown,
  qr as BDropdownDivider,
  Ur as BDropdownForm,
  Yr as BDropdownGroup,
  Jr as BDropdownHeader,
  Qr as BDropdownItem,
  au as BDropdownItemButton,
  nu as BDropdownText,
  bn as BForm,
  hn as BFormCheckbox,
  mu as BFormCheckboxGroup,
  yu as BFormFile,
  uu as BFormFloatingLabel,
  Tu as BFormGroup,
  Vu as BFormInput,
  xa as BFormInvalidFeedback,
  Sn as BFormRadio,
  Iu as BFormRadioGroup,
  ra as BFormRow,
  zu as BFormSelect,
  po as BFormSelectOption,
  Cn as BFormSelectOptionGroup,
  Wu as BFormSpinbutton,
  wn as BFormTag,
  id as BFormTags,
  Ma as BFormText,
  ud as BFormTextarea,
  Da as BFormValidFeedback,
  vo as BImg,
  gd as BInputGroup,
  mo as BInputGroupAddon,
  bd as BInputGroupAppend,
  yd as BInputGroupPrepend,
  kn as BInputGroupText,
  rt as BLink,
  hd as BListGroup,
  Bd as BListGroupItem,
  kd as BModal,
  $d as BNav,
  _d as BNavForm,
  Ad as BNavItem,
  Ed as BNavItemDropdown,
  Nd as BNavText,
  Id as BNavbar,
  Ld as BNavbarBrand,
  Fd as BNavbarNav,
  qd as BNavbarToggle,
  Ud as BOffcanvas,
  Ta as BOverlay,
  Yd as BPagination,
  Ue as BPlaceholder,
  Tn as BPlaceholderButton,
  Zd as BPlaceholderCard,
  Jd as BPlaceholderTable,
  Qd as BPlaceholderWrapper,
  ro as BPopover,
  Vn as BProgress,
  _n as BProgressBar,
  oc as BRow,
  ka as BSpinner,
  bc as BTab,
  gc as BTable,
  En as BTableLite,
  go as BTableSimple,
  Bc as BTabs,
  An as BTbody,
  Et as BTd,
  qa as BTfoot,
  Ga as BTh,
  On as BThead,
  Pn as BToast,
  kc as BToaster,
  $c as BTooltip,
  lt as BTr,
  Mt as BTransition,
  Ec as BootstrapVueNext,
  ll as BvCarouselEvent,
  dt as BvEvent,
  Rt as BvTriggerableEvent,
  Qo as Components,
  Vc as Composables,
  Ko as Directives,
  Oc as Types,
  Ac as Utils,
  Ec as default,
  Hl as useBreadcrumb,
  Ri as useColorMode,
  Di as useModal,
  ji as useModalController,
  Ul as useToast,
  Hd as vBColorMode,
  ja as vBModal,
  xd as vBPopover,
  ja as vBToggle,
  Md as vBTooltip
};
//# sourceMappingURL=bootstrap-vue-next.mjs.map
