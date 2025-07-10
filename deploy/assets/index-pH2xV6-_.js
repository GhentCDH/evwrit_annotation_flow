var Pb = Object.defineProperty;
var Ib = (t, e, n) => (e in t ? Pb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var jb = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var et = (t, e, n) => Ib(t, typeof e != "symbol" ? e + "" : e, n);
var y7 = jb((Pt, It) => {
  (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : i.crossOrigin === "anonymous"
            ? (o.credentials = "omit")
            : (o.credentials = "same-origin"),
        o
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  /**
   * @vue/shared v3.5.17
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function Zu(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const gt = {},
    Ar = [],
    We = () => {},
    Mb = () => !1,
    ks = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    Vu = (t) => t.startsWith("onUpdate:"),
    Qt = Object.assign,
    Hu = (t, e) => {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    },
    Nb = Object.prototype.hasOwnProperty,
    vt = (t, e) => Nb.call(t, e),
    ot = Array.isArray,
    Er = (t) => Yi(t) === "[object Map]",
    As = (t) => Yi(t) === "[object Set]",
    yf = (t) => Yi(t) === "[object Date]",
    ct = (t) => typeof t == "function",
    Ht = (t) => typeof t == "string",
    Je = (t) => typeof t == "symbol",
    Ot = (t) => t !== null && typeof t == "object",
    qm = (t) => (Ot(t) || ct(t)) && ct(t.then) && ct(t.catch),
    Um = Object.prototype.toString,
    Yi = (t) => Um.call(t),
    Lb = (t) => Yi(t).slice(8, -1),
    Zm = (t) => Yi(t) === "[object Object]",
    Gu = (t) => Ht(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    hi = Zu(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    Es = (t) => {
      const e = Object.create(null);
      return (n) => e[n] || (e[n] = t(n));
    },
    Bb = /-(\w)/g,
    ve = Es((t) => t.replace(Bb, (e, n) => (n ? n.toUpperCase() : ""))),
    qb = /\B([A-Z])/g,
    Bn = Es((t) => t.replace(qb, "-$1").toLowerCase()),
    Cs = Es((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    ga = Es((t) => (t ? `on${Cs(t)}` : "")),
    ue = (t, e) => !Object.is(t, e),
    Io = (t, ...e) => {
      for (let n = 0; n < t.length; n++) t[n](...e);
    },
    Gl = (t, e, n, r = !1) => {
      Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n });
    },
    Wl = (t) => {
      const e = parseFloat(t);
      return isNaN(e) ? t : e;
    };
  let bf;
  const Ss = () =>
    bf ||
    (bf =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function Ts(t) {
    if (ot(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          i = Ht(r) ? Hb(r) : Ts(r);
        if (i) for (const o in i) e[o] = i[o];
      }
      return e;
    } else if (Ht(t) || Ot(t)) return t;
  }
  const Ub = /;(?![^(]*\))/g,
    Zb = /:([^]+)/,
    Vb = /\/\*[^]*?\*\//g;
  function Hb(t) {
    const e = {};
    return (
      t
        .replace(Vb, "")
        .split(Ub)
        .forEach((n) => {
          if (n) {
            const r = n.split(Zb);
            r.length > 1 && (e[r[0].trim()] = r[1].trim());
          }
        }),
      e
    );
  }
  function Vt(t) {
    let e = "";
    if (Ht(t)) e = t;
    else if (ot(t))
      for (let n = 0; n < t.length; n++) {
        const r = Vt(t[n]);
        r && (e += r + " ");
      }
    else if (Ot(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const Gb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Wb = Zu(Gb);
  function Vm(t) {
    return !!t || t === "";
  }
  function Kb(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = $s(t[r], e[r]);
    return n;
  }
  function $s(t, e) {
    if (t === e) return !0;
    let n = yf(t),
      r = yf(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = Je(t)), (r = Je(e)), n || r)) return t === e;
    if (((n = ot(t)), (r = ot(e)), n || r)) return n && r ? Kb(t, e) : !1;
    if (((n = Ot(t)), (r = Ot(e)), n || r)) {
      if (!n || !r) return !1;
      const i = Object.keys(t).length,
        o = Object.keys(e).length;
      if (i !== o) return !1;
      for (const s in t) {
        const a = t.hasOwnProperty(s),
          l = e.hasOwnProperty(s);
        if ((a && !l) || (!a && l) || !$s(t[s], e[s])) return !1;
      }
    }
    return String(t) === String(e);
  }
  function Hm(t, e) {
    return t.findIndex((n) => $s(n, e));
  }
  const Gm = (t) => !!(t && t.__v_isRef === !0),
    jt = (t) =>
      Ht(t)
        ? t
        : t == null
          ? ""
          : ot(t) || (Ot(t) && (t.toString === Um || !ct(t.toString)))
            ? Gm(t)
              ? jt(t.value)
              : JSON.stringify(t, Wm, 2)
            : String(t),
    Wm = (t, e) =>
      Gm(e)
        ? Wm(t, e.value)
        : Er(e)
          ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, i], o) => ((n[ma(r, o) + " =>"] = i), n), {}) }
          : As(e)
            ? { [`Set(${e.size})`]: [...e.values()].map((n) => ma(n)) }
            : Je(e)
              ? ma(e)
              : Ot(e) && !ot(e) && !Zm(e)
                ? String(e)
                : e,
    ma = (t, e = "") => {
      var n;
      return Je(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
    };
  /**
   * @vue/reactivity v3.5.17
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let te;
  class Km {
    constructor(e = !1) {
      (this.detached = e),
        (this._active = !0),
        (this._on = 0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = te),
        !e && te && (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = !0;
        let e, n;
        if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = !1;
        let e, n;
        if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
      }
    }
    run(e) {
      if (this._active) {
        const n = te;
        try {
          return (te = this), e();
        } finally {
          te = n;
        }
      }
    }
    on() {
      ++this._on === 1 && ((this.prevScope = te), (te = this));
    }
    off() {
      this._on > 0 && --this._on === 0 && ((te = this.prevScope), (this.prevScope = void 0));
    }
    stop(e) {
      if (this._active) {
        this._active = !1;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (((this.cleanups.length = 0), this.scopes)) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !e) {
          const i = this.parent.scopes.pop();
          i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index));
        }
        this.parent = void 0;
      }
    }
  }
  function Jm(t) {
    return new Km(t);
  }
  function Xm() {
    return te;
  }
  function Jb(t, e = !1) {
    te && te.cleanups.push(t);
  }
  let Tt;
  const _a = new WeakSet();
  class Ym {
    constructor(e) {
      (this.fn = e),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        te && te.active && te.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && ((this.flags &= -65), _a.has(this) && (_a.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || t_(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), wf(this), e_(this);
      const e = Tt,
        n = Oe;
      (Tt = this), (Oe = !0);
      try {
        return this.fn();
      } finally {
        n_(this), (Tt = e), (Oe = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Ju(e);
        (this.deps = this.depsTail = void 0), wf(this), this.onStop && this.onStop(), (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64 ? _a.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Kl(this) && this.run();
    }
    get dirty() {
      return Kl(this);
    }
  }
  let Qm = 0,
    pi,
    di;
  function t_(t, e = !1) {
    if (((t.flags |= 8), e)) {
      (t.next = di), (di = t);
      return;
    }
    (t.next = pi), (pi = t);
  }
  function Wu() {
    Qm++;
  }
  function Ku() {
    if (--Qm > 0) return;
    if (di) {
      let e = di;
      for (di = void 0; e; ) {
        const n = e.next;
        (e.next = void 0), (e.flags &= -9), (e = n);
      }
    }
    let t;
    for (; pi; ) {
      let e = pi;
      for (pi = void 0; e; ) {
        const n = e.next;
        if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
          try {
            e.trigger();
          } catch (r) {
            t || (t = r);
          }
        e = n;
      }
    }
    if (t) throw t;
  }
  function e_(t) {
    for (let e = t.deps; e; e = e.nextDep)
      (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e);
  }
  function n_(t) {
    let e,
      n = t.depsTail,
      r = n;
    for (; r; ) {
      const i = r.prevDep;
      r.version === -1 ? (r === n && (n = i), Ju(r), Xb(r)) : (e = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = i);
    }
    (t.deps = e), (t.depsTail = n);
  }
  function Kl(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || (e.dep.computed && (r_(e.dep.computed) || e.dep.version !== e.version)))
        return !0;
    return !!t._dirty;
  }
  function r_(t) {
    if (
      (t.flags & 4 && !(t.flags & 16)) ||
      ((t.flags &= -17), t.globalVersion === Si) ||
      ((t.globalVersion = Si), !t.isSSR && t.flags & 128 && ((!t.deps && !t._dirty) || !Kl(t)))
    )
      return;
    t.flags |= 2;
    const e = t.dep,
      n = Tt,
      r = Oe;
    (Tt = t), (Oe = !0);
    try {
      e_(t);
      const i = t.fn(t._value);
      (e.version === 0 || ue(i, t._value)) && ((t.flags |= 128), (t._value = i), e.version++);
    } catch (i) {
      throw (e.version++, i);
    } finally {
      (Tt = n), (Oe = r), n_(t), (t.flags &= -3);
    }
  }
  function Ju(t, e = !1) {
    const { dep: n, prevSub: r, nextSub: i } = t;
    if (
      (r && ((r.nextSub = i), (t.prevSub = void 0)),
      i && ((i.prevSub = r), (t.nextSub = void 0)),
      n.subs === t && ((n.subs = r), !r && n.computed))
    ) {
      n.computed.flags &= -5;
      for (let o = n.computed.deps; o; o = o.nextDep) Ju(o, !0);
    }
    !e && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Xb(t) {
    const { prevDep: e, nextDep: n } = t;
    e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0));
  }
  let Oe = !0;
  const i_ = [];
  function _n() {
    i_.push(Oe), (Oe = !1);
  }
  function vn() {
    const t = i_.pop();
    Oe = t === void 0 ? !0 : t;
  }
  function wf(t) {
    const { cleanup: e } = t;
    if (((t.cleanup = void 0), e)) {
      const n = Tt;
      Tt = void 0;
      try {
        e();
      } finally {
        Tt = n;
      }
    }
  }
  let Si = 0;
  class Yb {
    constructor(e, n) {
      (this.sub = e),
        (this.dep = n),
        (this.version = n.version),
        (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
  }
  class Ds {
    constructor(e) {
      (this.computed = e),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0),
        (this.__v_skip = !0);
    }
    track(e) {
      if (!Tt || !Oe || Tt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Tt)
        (n = this.activeLink = new Yb(Tt, this)),
          Tt.deps
            ? ((n.prevDep = Tt.depsTail), (Tt.depsTail.nextDep = n), (Tt.depsTail = n))
            : (Tt.deps = Tt.depsTail = n),
          o_(n);
      else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
        const r = n.nextDep;
        (r.prevDep = n.prevDep),
          n.prevDep && (n.prevDep.nextDep = r),
          (n.prevDep = Tt.depsTail),
          (n.nextDep = void 0),
          (Tt.depsTail.nextDep = n),
          (Tt.depsTail = n),
          Tt.deps === n && (Tt.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, Si++, this.notify(e);
    }
    notify(e) {
      Wu();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ku();
      }
    }
  }
  function o_(t) {
    if ((t.dep.sc++, t.sub.flags & 4)) {
      const e = t.dep.computed;
      if (e && !t.dep.subs) {
        e.flags |= 20;
        for (let r = e.deps; r; r = r.nextDep) o_(r);
      }
      const n = t.dep.subs;
      n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
    }
  }
  const Go = new WeakMap(),
    Yn = Symbol(""),
    Jl = Symbol(""),
    Ti = Symbol("");
  function ee(t, e, n) {
    if (Oe && Tt) {
      let r = Go.get(t);
      r || Go.set(t, (r = new Map()));
      let i = r.get(n);
      i || (r.set(n, (i = new Ds())), (i.map = r), (i.key = n)), i.track();
    }
  }
  function pn(t, e, n, r, i, o) {
    const s = Go.get(t);
    if (!s) {
      Si++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((Wu(), e === "clear")) s.forEach(a);
    else {
      const l = ot(t),
        u = l && Gu(n);
      if (l && n === "length") {
        const c = Number(r);
        s.forEach((f, h) => {
          (h === "length" || h === Ti || (!Je(h) && h >= c)) && a(f);
        });
      } else
        switch (((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Ti)), e)) {
          case "add":
            l ? u && a(s.get("length")) : (a(s.get(Yn)), Er(t) && a(s.get(Jl)));
            break;
          case "delete":
            l || (a(s.get(Yn)), Er(t) && a(s.get(Jl)));
            break;
          case "set":
            Er(t) && a(s.get(Yn));
            break;
        }
    }
    Ku();
  }
  function Qb(t, e) {
    const n = Go.get(t);
    return n && n.get(e);
  }
  function vr(t) {
    const e = dt(t);
    return e === t ? e : (ee(e, "iterate", Ti), Ae(t) ? e : e.map(Yt));
  }
  function Os(t) {
    return ee((t = dt(t)), "iterate", Ti), t;
  }
  const t1 = {
    __proto__: null,
    [Symbol.iterator]() {
      return va(this, Symbol.iterator, Yt);
    },
    concat(...t) {
      return vr(this).concat(...t.map((e) => (ot(e) ? vr(e) : e)));
    },
    entries() {
      return va(this, "entries", (t) => ((t[1] = Yt(t[1])), t));
    },
    every(t, e) {
      return ln(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return ln(this, "filter", t, e, (n) => n.map(Yt), arguments);
    },
    find(t, e) {
      return ln(this, "find", t, e, Yt, arguments);
    },
    findIndex(t, e) {
      return ln(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return ln(this, "findLast", t, e, Yt, arguments);
    },
    findLastIndex(t, e) {
      return ln(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return ln(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return ya(this, "includes", t);
    },
    indexOf(...t) {
      return ya(this, "indexOf", t);
    },
    join(t) {
      return vr(this).join(t);
    },
    lastIndexOf(...t) {
      return ya(this, "lastIndexOf", t);
    },
    map(t, e) {
      return ln(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return Jr(this, "pop");
    },
    push(...t) {
      return Jr(this, "push", t);
    },
    reduce(t, ...e) {
      return xf(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return xf(this, "reduceRight", t, e);
    },
    shift() {
      return Jr(this, "shift");
    },
    some(t, e) {
      return ln(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return Jr(this, "splice", t);
    },
    toReversed() {
      return vr(this).toReversed();
    },
    toSorted(t) {
      return vr(this).toSorted(t);
    },
    toSpliced(...t) {
      return vr(this).toSpliced(...t);
    },
    unshift(...t) {
      return Jr(this, "unshift", t);
    },
    values() {
      return va(this, "values", Yt);
    },
  };
  function va(t, e, n) {
    const r = Os(t),
      i = r[e]();
    return (
      r !== t &&
        !Ae(t) &&
        ((i._next = i.next),
        (i.next = () => {
          const o = i._next();
          return o.value && (o.value = n(o.value)), o;
        })),
      i
    );
  }
  const e1 = Array.prototype;
  function ln(t, e, n, r, i, o) {
    const s = Os(t),
      a = s !== t && !Ae(t),
      l = s[e];
    if (l !== e1[e]) {
      const f = l.apply(t, o);
      return a ? Yt(f) : f;
    }
    let u = n;
    s !== t &&
      (a
        ? (u = function (f, h) {
            return n.call(this, Yt(f), h, t);
          })
        : n.length > 2 &&
          (u = function (f, h) {
            return n.call(this, f, h, t);
          }));
    const c = l.call(s, u, r);
    return a && i ? i(c) : c;
  }
  function xf(t, e, n, r) {
    const i = Os(t);
    let o = n;
    return (
      i !== t &&
        (Ae(t)
          ? n.length > 3 &&
            (o = function (s, a, l) {
              return n.call(this, s, a, l, t);
            })
          : (o = function (s, a, l) {
              return n.call(this, s, Yt(a), l, t);
            })),
      i[e](o, ...r)
    );
  }
  function ya(t, e, n) {
    const r = dt(t);
    ee(r, "iterate", Ti);
    const i = r[e](...n);
    return (i === -1 || i === !1) && Qu(n[0]) ? ((n[0] = dt(n[0])), r[e](...n)) : i;
  }
  function Jr(t, e, n = []) {
    _n(), Wu();
    const r = dt(t)[e].apply(t, n);
    return Ku(), vn(), r;
  }
  const n1 = Zu("__proto__,__v_isRef,__isVue"),
    s_ = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((t) => t !== "arguments" && t !== "caller")
        .map((t) => Symbol[t])
        .filter(Je),
    );
  function r1(t) {
    Je(t) || (t = String(t));
    const e = dt(this);
    return ee(e, "has", t), e.hasOwnProperty(t);
  }
  class a_ {
    constructor(e = !1, n = !1) {
      (this._isReadonly = e), (this._isShallow = n);
    }
    get(e, n, r) {
      if (n === "__v_skip") return e.__v_skip;
      const i = this._isReadonly,
        o = this._isShallow;
      if (n === "__v_isReactive") return !i;
      if (n === "__v_isReadonly") return i;
      if (n === "__v_isShallow") return o;
      if (n === "__v_raw")
        return r === (i ? (o ? p1 : f_) : o ? c_ : u_).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
          ? e
          : void 0;
      const s = ot(e);
      if (!i) {
        let l;
        if (s && (l = t1[n])) return l;
        if (n === "hasOwnProperty") return r1;
      }
      const a = Reflect.get(e, n, qt(e) ? e : r);
      return (Je(n) ? s_.has(n) : n1(n)) || (i || ee(e, "get", n), o)
        ? a
        : qt(a)
          ? s && Gu(n)
            ? a
            : a.value
          : Ot(a)
            ? i
              ? p_(a)
              : Qi(a)
            : a;
    }
  }
  class l_ extends a_ {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, n, r, i) {
      let o = e[n];
      if (!this._isShallow) {
        const l = Mn(o);
        if ((!Ae(r) && !Mn(r) && ((o = dt(o)), (r = dt(r))), !ot(e) && qt(o) && !qt(r)))
          return l ? !1 : ((o.value = r), !0);
      }
      const s = ot(e) && Gu(n) ? Number(n) < e.length : vt(e, n),
        a = Reflect.set(e, n, r, qt(e) ? e : i);
      return e === dt(i) && (s ? ue(r, o) && pn(e, "set", n, r) : pn(e, "add", n, r)), a;
    }
    deleteProperty(e, n) {
      const r = vt(e, n);
      e[n];
      const i = Reflect.deleteProperty(e, n);
      return i && r && pn(e, "delete", n, void 0), i;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!Je(n) || !s_.has(n)) && ee(e, "has", n), r;
    }
    ownKeys(e) {
      return ee(e, "iterate", ot(e) ? "length" : Yn), Reflect.ownKeys(e);
    }
  }
  class i1 extends a_ {
    constructor(e = !1) {
      super(!0, e);
    }
    set(e, n) {
      return !0;
    }
    deleteProperty(e, n) {
      return !0;
    }
  }
  const o1 = new l_(),
    s1 = new i1(),
    a1 = new l_(!0),
    Xl = (t) => t,
    go = (t) => Reflect.getPrototypeOf(t);
  function l1(t, e, n) {
    return function (...r) {
      const i = this.__v_raw,
        o = dt(i),
        s = Er(o),
        a = t === "entries" || (t === Symbol.iterator && s),
        l = t === "keys" && s,
        u = i[t](...r),
        c = n ? Xl : e ? Wo : Yt;
      return (
        !e && ee(o, "iterate", l ? Jl : Yn),
        {
          next() {
            const { value: f, done: h } = u.next();
            return h ? { value: f, done: h } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: h };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function mo(t) {
    return function (...e) {
      return t === "delete" ? !1 : t === "clear" ? void 0 : this;
    };
  }
  function u1(t, e) {
    const n = {
      get(i) {
        const o = this.__v_raw,
          s = dt(o),
          a = dt(i);
        t || (ue(i, a) && ee(s, "get", i), ee(s, "get", a));
        const { has: l } = go(s),
          u = e ? Xl : t ? Wo : Yt;
        if (l.call(s, i)) return u(o.get(i));
        if (l.call(s, a)) return u(o.get(a));
        o !== s && o.get(i);
      },
      get size() {
        const i = this.__v_raw;
        return !t && ee(dt(i), "iterate", Yn), Reflect.get(i, "size", i);
      },
      has(i) {
        const o = this.__v_raw,
          s = dt(o),
          a = dt(i);
        return t || (ue(i, a) && ee(s, "has", i), ee(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
      },
      forEach(i, o) {
        const s = this,
          a = s.__v_raw,
          l = dt(a),
          u = e ? Xl : t ? Wo : Yt;
        return !t && ee(l, "iterate", Yn), a.forEach((c, f) => i.call(o, u(c), u(f), s));
      },
    };
    return (
      Qt(
        n,
        t
          ? { add: mo("add"), set: mo("set"), delete: mo("delete"), clear: mo("clear") }
          : {
              add(i) {
                !e && !Ae(i) && !Mn(i) && (i = dt(i));
                const o = dt(this);
                return go(o).has.call(o, i) || (o.add(i), pn(o, "add", i, i)), this;
              },
              set(i, o) {
                !e && !Ae(o) && !Mn(o) && (o = dt(o));
                const s = dt(this),
                  { has: a, get: l } = go(s);
                let u = a.call(s, i);
                u || ((i = dt(i)), (u = a.call(s, i)));
                const c = l.call(s, i);
                return s.set(i, o), u ? ue(o, c) && pn(s, "set", i, o) : pn(s, "add", i, o), this;
              },
              delete(i) {
                const o = dt(this),
                  { has: s, get: a } = go(o);
                let l = s.call(o, i);
                l || ((i = dt(i)), (l = s.call(o, i))), a && a.call(o, i);
                const u = o.delete(i);
                return l && pn(o, "delete", i, void 0), u;
              },
              clear() {
                const i = dt(this),
                  o = i.size !== 0,
                  s = i.clear();
                return o && pn(i, "clear", void 0, void 0), s;
              },
            },
      ),
      ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
        n[i] = l1(i, t, e);
      }),
      n
    );
  }
  function Xu(t, e) {
    const n = u1(t, e);
    return (r, i, o) =>
      i === "__v_isReactive"
        ? !t
        : i === "__v_isReadonly"
          ? t
          : i === "__v_raw"
            ? r
            : Reflect.get(vt(n, i) && i in r ? n : r, i, o);
  }
  const c1 = { get: Xu(!1, !1) },
    f1 = { get: Xu(!1, !0) },
    h1 = { get: Xu(!0, !1) },
    u_ = new WeakMap(),
    c_ = new WeakMap(),
    f_ = new WeakMap(),
    p1 = new WeakMap();
  function d1(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function g1(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : d1(Lb(t));
  }
  function Qi(t) {
    return Mn(t) ? t : Yu(t, !1, o1, c1, u_);
  }
  function h_(t) {
    return Yu(t, !1, a1, f1, c_);
  }
  function p_(t) {
    return Yu(t, !0, s1, h1, f_);
  }
  function Yu(t, e, n, r, i) {
    if (!Ot(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const o = g1(t);
    if (o === 0) return t;
    const s = i.get(t);
    if (s) return s;
    const a = new Proxy(t, o === 2 ? r : n);
    return i.set(t, a), a;
  }
  function Pn(t) {
    return Mn(t) ? Pn(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function Mn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function Ae(t) {
    return !!(t && t.__v_isShallow);
  }
  function Qu(t) {
    return t ? !!t.__v_raw : !1;
  }
  function dt(t) {
    const e = t && t.__v_raw;
    return e ? dt(e) : t;
  }
  function tc(t) {
    return !vt(t, "__v_skip") && Object.isExtensible(t) && Gl(t, "__v_skip", !0), t;
  }
  const Yt = (t) => (Ot(t) ? Qi(t) : t),
    Wo = (t) => (Ot(t) ? p_(t) : t);
  function qt(t) {
    return t ? t.__v_isRef === !0 : !1;
  }
  function mt(t) {
    return d_(t, !1);
  }
  function Yl(t) {
    return d_(t, !0);
  }
  function d_(t, e) {
    return qt(t) ? t : new m1(t, e);
  }
  class m1 {
    constructor(e, n) {
      (this.dep = new Ds()),
        (this.__v_isRef = !0),
        (this.__v_isShallow = !1),
        (this._rawValue = n ? e : dt(e)),
        (this._value = n ? e : Yt(e)),
        (this.__v_isShallow = n);
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue,
        r = this.__v_isShallow || Ae(e) || Mn(e);
      (e = r ? e : dt(e)), ue(e, n) && ((this._rawValue = e), (this._value = r ? e : Yt(e)), this.dep.trigger());
    }
  }
  function V(t) {
    return qt(t) ? t.value : t;
  }
  const _1 = {
    get: (t, e, n) => (e === "__v_raw" ? t : V(Reflect.get(t, e, n))),
    set: (t, e, n, r) => {
      const i = t[e];
      return qt(i) && !qt(n) ? ((i.value = n), !0) : Reflect.set(t, e, n, r);
    },
  };
  function g_(t) {
    return Pn(t) ? t : new Proxy(t, _1);
  }
  class v1 {
    constructor(e) {
      (this.__v_isRef = !0), (this._value = void 0);
      const n = (this.dep = new Ds()),
        { get: r, set: i } = e(n.track.bind(n), n.trigger.bind(n));
      (this._get = r), (this._set = i);
    }
    get value() {
      return (this._value = this._get());
    }
    set value(e) {
      this._set(e);
    }
  }
  function y1(t) {
    return new v1(t);
  }
  function b1(t) {
    const e = ot(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = x1(t, n);
    return e;
  }
  class w1 {
    constructor(e, n, r) {
      (this._object = e), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0), (this._value = void 0);
    }
    get value() {
      const e = this._object[this._key];
      return (this._value = e === void 0 ? this._defaultValue : e);
    }
    set value(e) {
      this._object[this._key] = e;
    }
    get dep() {
      return Qb(dt(this._object), this._key);
    }
  }
  function x1(t, e, n) {
    const r = t[e];
    return qt(r) ? r : new w1(t, e, n);
  }
  class k1 {
    constructor(e, n, r) {
      (this.fn = e),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new Ds(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = Si - 1),
        (this.next = void 0),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && Tt !== this)) return t_(this, !0), !0;
    }
    get value() {
      const e = this.dep.track();
      return r_(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function A1(t, e, n = !1) {
    let r, i;
    return ct(t) ? (r = t) : ((r = t.get), (i = t.set)), new k1(r, i, n);
  }
  const _o = {},
    Ko = new WeakMap();
  let Wn;
  function E1(t, e = !1, n = Wn) {
    if (n) {
      let r = Ko.get(n);
      r || Ko.set(n, (r = [])), r.push(t);
    }
  }
  function C1(t, e, n = gt) {
    const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n,
      u = (v) => (i ? v : Ae(v) || i === !1 || i === 0 ? dn(v, 1) : dn(v));
    let c,
      f,
      h,
      p,
      d = !1,
      m = !1;
    if (
      (qt(t)
        ? ((f = () => t.value), (d = Ae(t)))
        : Pn(t)
          ? ((f = () => u(t)), (d = !0))
          : ot(t)
            ? ((m = !0),
              (d = t.some((v) => Pn(v) || Ae(v))),
              (f = () =>
                t.map((v) => {
                  if (qt(v)) return v.value;
                  if (Pn(v)) return u(v);
                  if (ct(v)) return l ? l(v, 2) : v();
                })))
            : ct(t)
              ? e
                ? (f = l ? () => l(t, 2) : t)
                : (f = () => {
                    if (h) {
                      _n();
                      try {
                        h();
                      } finally {
                        vn();
                      }
                    }
                    const v = Wn;
                    Wn = c;
                    try {
                      return l ? l(t, 3, [p]) : t(p);
                    } finally {
                      Wn = v;
                    }
                  })
              : (f = We),
      e && i)
    ) {
      const v = f,
        C = i === !0 ? 1 / 0 : i;
      f = () => dn(v(), C);
    }
    const y = Xm(),
      b = () => {
        c.stop(), y && y.active && Hu(y.effects, c);
      };
    if (o && e) {
      const v = e;
      e = (...C) => {
        v(...C), b();
      };
    }
    let _ = m ? new Array(t.length).fill(_o) : _o;
    const w = (v) => {
      if (!(!(c.flags & 1) || (!c.dirty && !v)))
        if (e) {
          const C = c.run();
          if (i || d || (m ? C.some((R, z) => ue(R, _[z])) : ue(C, _))) {
            h && h();
            const R = Wn;
            Wn = c;
            try {
              const z = [C, _ === _o ? void 0 : m && _[0] === _o ? [] : _, p];
              (_ = C), l ? l(e, 3, z) : e(...z);
            } finally {
              Wn = R;
            }
          }
        } else c.run();
    };
    return (
      a && a(w),
      (c = new Ym(f)),
      (c.scheduler = s ? () => s(w, !1) : w),
      (p = (v) => E1(v, !1, c)),
      (h = c.onStop =
        () => {
          const v = Ko.get(c);
          if (v) {
            if (l) l(v, 4);
            else for (const C of v) C();
            Ko.delete(c);
          }
        }),
      e ? (r ? w(!0) : (_ = c.run())) : s ? s(w.bind(null, !0), !0) : c.run(),
      (b.pause = c.pause.bind(c)),
      (b.resume = c.resume.bind(c)),
      (b.stop = b),
      b
    );
  }
  function dn(t, e = 1 / 0, n) {
    if (e <= 0 || !Ot(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
    if ((n.add(t), e--, qt(t))) dn(t.value, e, n);
    else if (ot(t)) for (let r = 0; r < t.length; r++) dn(t[r], e, n);
    else if (As(t) || Er(t))
      t.forEach((r) => {
        dn(r, e, n);
      });
    else if (Zm(t)) {
      for (const r in t) dn(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && dn(t[r], e, n);
    }
    return t;
  }
  /**
   * @vue/runtime-core v3.5.17
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function to(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (i) {
      Rs(i, e, n);
    }
  }
  function Xe(t, e, n, r) {
    if (ct(t)) {
      const i = to(t, e, n, r);
      return (
        i &&
          qm(i) &&
          i.catch((o) => {
            Rs(o, e, n);
          }),
        i
      );
    }
    if (ot(t)) {
      const i = [];
      for (let o = 0; o < t.length; o++) i.push(Xe(t[o], e, n, r));
      return i;
    }
  }
  function Rs(t, e, n, r = !0) {
    const i = e ? e.vnode : null,
      { errorHandler: o, throwUnhandledErrorInProduction: s } = (e && e.appContext.config) || gt;
    if (e) {
      let a = e.parent;
      const l = e.proxy,
        u = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; a; ) {
        const c = a.ec;
        if (c) {
          for (let f = 0; f < c.length; f++) if (c[f](t, l, u) === !1) return;
        }
        a = a.parent;
      }
      if (o) {
        _n(), to(o, null, 10, [t, l, u]), vn();
        return;
      }
    }
    S1(t, n, i, r, s);
  }
  function S1(t, e, n, r = !0, i = !1) {
    if (i) throw t;
    console.error(t);
  }
  const re = [];
  let Ze = -1;
  const Cr = [];
  let Tn = null,
    wr = 0;
  const m_ = Promise.resolve();
  let Jo = null;
  function ec(t) {
    const e = Jo || m_;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function T1(t) {
    let e = Ze + 1,
      n = re.length;
    for (; e < n; ) {
      const r = (e + n) >>> 1,
        i = re[r],
        o = $i(i);
      o < t || (o === t && i.flags & 2) ? (e = r + 1) : (n = r);
    }
    return e;
  }
  function nc(t) {
    if (!(t.flags & 1)) {
      const e = $i(t),
        n = re[re.length - 1];
      !n || (!(t.flags & 2) && e >= $i(n)) ? re.push(t) : re.splice(T1(e), 0, t), (t.flags |= 1), __();
    }
  }
  function __() {
    Jo || (Jo = m_.then(y_));
  }
  function $1(t) {
    ot(t) ? Cr.push(...t) : Tn && t.id === -1 ? Tn.splice(wr + 1, 0, t) : t.flags & 1 || (Cr.push(t), (t.flags |= 1)),
      __();
  }
  function kf(t, e, n = Ze + 1) {
    for (; n < re.length; n++) {
      const r = re[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        re.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function v_(t) {
    if (Cr.length) {
      const e = [...new Set(Cr)].sort((n, r) => $i(n) - $i(r));
      if (((Cr.length = 0), Tn)) {
        Tn.push(...e);
        return;
      }
      for (Tn = e, wr = 0; wr < Tn.length; wr++) {
        const n = Tn[wr];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (Tn = null), (wr = 0);
    }
  }
  const $i = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
  function y_(t) {
    try {
      for (Ze = 0; Ze < re.length; Ze++) {
        const e = re[Ze];
        e &&
          !(e.flags & 8) &&
          (e.flags & 4 && (e.flags &= -2), to(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
      }
    } finally {
      for (; Ze < re.length; Ze++) {
        const e = re[Ze];
        e && (e.flags &= -2);
      }
      (Ze = -1), (re.length = 0), v_(), (Jo = null), (re.length || Cr.length) && y_();
    }
  }
  let ie = null,
    b_ = null;
  function Xo(t) {
    const e = ie;
    return (ie = t), (b_ = (t && t.type.__scopeId) || null), e;
  }
  function rc(t, e = ie, n) {
    if (!e || t._n) return t;
    const r = (...i) => {
      r._d && Rf(-1);
      const o = Xo(e);
      let s;
      try {
        s = t(...i);
      } finally {
        Xo(o), r._d && Rf(1);
      }
      return s;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Fs(t, e) {
    if (ie === null) return t;
    const n = Ms(ie),
      r = t.dirs || (t.dirs = []);
    for (let i = 0; i < e.length; i++) {
      let [o, s, a, l = gt] = e[i];
      o &&
        (ct(o) && (o = { mounted: o, updated: o }),
        o.deep && dn(s),
        r.push({ dir: o, instance: n, value: s, oldValue: void 0, arg: a, modifiers: l }));
    }
    return t;
  }
  function Vn(t, e, n, r) {
    const i = t.dirs,
      o = e && e.dirs;
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      o && (a.oldValue = o[s].value);
      let l = a.dir[r];
      l && (_n(), Xe(l, n, 8, [t.el, a, t, e]), vn());
    }
  }
  const D1 = Symbol("_vte"),
    O1 = (t) => t.__isTeleport;
  function ic(t, e) {
    t.shapeFlag & 6 && t.component
      ? ((t.transition = e), ic(t.component.subTree, e))
      : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Gt(t, e) {
    return ct(t) ? Qt({ name: t.name }, e, { setup: t }) : t;
  }
  function w_(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function gi(t, e, n, r, i = !1) {
    if (ot(t)) {
      t.forEach((d, m) => gi(d, e && (ot(e) ? e[m] : e), n, r, i));
      return;
    }
    if (mi(r) && !i) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && gi(t, e, n, r.component.subTree);
      return;
    }
    const o = r.shapeFlag & 4 ? Ms(r.component) : r.el,
      s = i ? null : o,
      { i: a, r: l } = t,
      u = e && e.r,
      c = a.refs === gt ? (a.refs = {}) : a.refs,
      f = a.setupState,
      h = dt(f),
      p = f === gt ? () => !1 : (d) => vt(h, d);
    if ((u != null && u !== l && (Ht(u) ? ((c[u] = null), p(u) && (f[u] = null)) : qt(u) && (u.value = null)), ct(l)))
      to(l, a, 12, [s, c]);
    else {
      const d = Ht(l),
        m = qt(l);
      if (d || m) {
        const y = () => {
          if (t.f) {
            const b = d ? (p(l) ? f[l] : c[l]) : l.value;
            i
              ? ot(b) && Hu(b, o)
              : ot(b)
                ? b.includes(o) || b.push(o)
                : d
                  ? ((c[l] = [o]), p(l) && (f[l] = c[l]))
                  : ((l.value = [o]), t.k && (c[t.k] = l.value));
          } else d ? ((c[l] = s), p(l) && (f[l] = s)) : m && ((l.value = s), t.k && (c[t.k] = s));
        };
        s ? ((y.id = -1), ge(y, n)) : y();
      }
    }
  }
  Ss().requestIdleCallback;
  Ss().cancelIdleCallback;
  const mi = (t) => !!t.type.__asyncLoader,
    x_ = (t) => t.type.__isKeepAlive;
  function R1(t, e) {
    k_(t, "a", e);
  }
  function F1(t, e) {
    k_(t, "da", e);
  }
  function k_(t, e, n = Kt) {
    const r =
      t.__wdc ||
      (t.__wdc = () => {
        let i = n;
        for (; i; ) {
          if (i.isDeactivated) return;
          i = i.parent;
        }
        return t();
      });
    if ((zs(e, r, n), n)) {
      let i = n.parent;
      for (; i && i.parent; ) x_(i.parent.vnode) && z1(r, e, n, i), (i = i.parent);
    }
  }
  function z1(t, e, n, r) {
    const i = zs(e, t, r, !0);
    sc(() => {
      Hu(r[e], i);
    }, n);
  }
  function zs(t, e, n = Kt, r = !1) {
    if (n) {
      const i = n[t] || (n[t] = []),
        o =
          e.__weh ||
          (e.__weh = (...s) => {
            _n();
            const a = eo(n),
              l = Xe(e, n, t, s);
            return a(), vn(), l;
          });
      return r ? i.unshift(o) : i.push(o), o;
    }
  }
  const wn =
      (t) =>
      (e, n = Kt) => {
        (!Oi || t === "sp") && zs(t, (...r) => e(...r), n);
      },
    P1 = wn("bm"),
    oc = wn("m"),
    A_ = wn("bu"),
    I1 = wn("u"),
    j1 = wn("bum"),
    sc = wn("um"),
    M1 = wn("sp"),
    N1 = wn("rtg"),
    L1 = wn("rtc");
  function B1(t, e = Kt) {
    zs("ec", t, e);
  }
  const q1 = "components";
  function E_(t, e) {
    return Z1(q1, t, !0, e) || t;
  }
  const U1 = Symbol.for("v-ndc");
  function Z1(t, e, n = !0, r = !1) {
    const i = ie || Kt;
    if (i) {
      const o = i.type;
      {
        const a = zw(o, !1);
        if (a && (a === e || a === ve(e) || a === Cs(ve(e)))) return o;
      }
      const s = Af(i[t] || o[t], e) || Af(i.appContext[t], e);
      return !s && r ? o : s;
    }
  }
  function Af(t, e) {
    return t && (t[e] || t[ve(e)] || t[Cs(ve(e))]);
  }
  function me(t, e, n, r) {
    let i;
    const o = n,
      s = ot(t);
    if (s || Ht(t)) {
      const a = s && Pn(t);
      let l = !1,
        u = !1;
      a && ((l = !Ae(t)), (u = Mn(t)), (t = Os(t))), (i = new Array(t.length));
      for (let c = 0, f = t.length; c < f; c++) i[c] = e(l ? (u ? Wo(Yt(t[c])) : Yt(t[c])) : t[c], c, void 0, o);
    } else if (typeof t == "number") {
      i = new Array(t);
      for (let a = 0; a < t; a++) i[a] = e(a + 1, a, void 0, o);
    } else if (Ot(t))
      if (t[Symbol.iterator]) i = Array.from(t, (a, l) => e(a, l, void 0, o));
      else {
        const a = Object.keys(t);
        i = new Array(a.length);
        for (let l = 0, u = a.length; l < u; l++) {
          const c = a[l];
          i[l] = e(t[c], c, l, o);
        }
      }
    else i = [];
    return i;
  }
  const Ql = (t) => (t ? (G_(t) ? Ms(t) : Ql(t.parent)) : null),
    _i = Qt(Object.create(null), {
      $: (t) => t,
      $el: (t) => t.vnode.el,
      $data: (t) => t.data,
      $props: (t) => t.props,
      $attrs: (t) => t.attrs,
      $slots: (t) => t.slots,
      $refs: (t) => t.refs,
      $parent: (t) => Ql(t.parent),
      $root: (t) => Ql(t.root),
      $host: (t) => t.ce,
      $emit: (t) => t.emit,
      $options: (t) => S_(t),
      $forceUpdate: (t) =>
        t.f ||
        (t.f = () => {
          nc(t.update);
        }),
      $nextTick: (t) => t.n || (t.n = ec.bind(t.proxy)),
      $watch: (t) => gw.bind(t),
    }),
    ba = (t, e) => t !== gt && !t.__isScriptSetup && vt(t, e),
    V1 = {
      get({ _: t }, e) {
        if (e === "__v_skip") return !0;
        const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: a, appContext: l } = t;
        let u;
        if (e[0] !== "$") {
          const p = s[e];
          if (p !== void 0)
            switch (p) {
              case 1:
                return r[e];
              case 2:
                return i[e];
              case 4:
                return n[e];
              case 3:
                return o[e];
            }
          else {
            if (ba(r, e)) return (s[e] = 1), r[e];
            if (i !== gt && vt(i, e)) return (s[e] = 2), i[e];
            if ((u = t.propsOptions[0]) && vt(u, e)) return (s[e] = 3), o[e];
            if (n !== gt && vt(n, e)) return (s[e] = 4), n[e];
            tu && (s[e] = 0);
          }
        }
        const c = _i[e];
        let f, h;
        if (c) return e === "$attrs" && ee(t.attrs, "get", ""), c(t);
        if ((f = a.__cssModules) && (f = f[e])) return f;
        if (n !== gt && vt(n, e)) return (s[e] = 4), n[e];
        if (((h = l.config.globalProperties), vt(h, e))) return h[e];
      },
      set({ _: t }, e, n) {
        const { data: r, setupState: i, ctx: o } = t;
        return ba(i, e)
          ? ((i[e] = n), !0)
          : r !== gt && vt(r, e)
            ? ((r[e] = n), !0)
            : vt(t.props, e) || (e[0] === "$" && e.slice(1) in t)
              ? !1
              : ((o[e] = n), !0);
      },
      has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: o } }, s) {
        let a;
        return (
          !!n[s] ||
          (t !== gt && vt(t, s)) ||
          ba(e, s) ||
          ((a = o[0]) && vt(a, s)) ||
          vt(r, s) ||
          vt(_i, s) ||
          vt(i.config.globalProperties, s)
        );
      },
      defineProperty(t, e, n) {
        return (
          n.get != null ? (t._.accessCache[e] = 0) : vt(n, "value") && this.set(t, e, n.value, null),
          Reflect.defineProperty(t, e, n)
        );
      },
    };
  function Yo(t) {
    return ot(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
  }
  function H1(t, e) {
    return !t || !e ? t || e : ot(t) && ot(e) ? t.concat(e) : Qt({}, Yo(t), Yo(e));
  }
  let tu = !0;
  function G1(t) {
    const e = S_(t),
      n = t.proxy,
      r = t.ctx;
    (tu = !1), e.beforeCreate && Ef(e.beforeCreate, t, "bc");
    const {
      data: i,
      computed: o,
      methods: s,
      watch: a,
      provide: l,
      inject: u,
      created: c,
      beforeMount: f,
      mounted: h,
      beforeUpdate: p,
      updated: d,
      activated: m,
      deactivated: y,
      beforeDestroy: b,
      beforeUnmount: _,
      destroyed: w,
      unmounted: v,
      render: C,
      renderTracked: R,
      renderTriggered: z,
      errorCaptured: B,
      serverPrefetch: $,
      expose: E,
      inheritAttrs: g,
      components: k,
      directives: D,
      filters: q,
    } = e;
    if ((u && W1(u, r, null), s))
      for (const F in s) {
        const J = s[F];
        ct(J) && (r[F] = J.bind(n));
      }
    if (i) {
      const F = i.call(n, n);
      Ot(F) && (t.data = Qi(F));
    }
    if (((tu = !0), o))
      for (const F in o) {
        const J = o[F],
          xt = ct(J) ? J.bind(n, n) : ct(J.get) ? J.get.bind(n, n) : We,
          ut = !ct(J) && ct(J.set) ? J.set.bind(n) : We,
          Zt = ht({ get: xt, set: ut });
        Object.defineProperty(r, F, {
          enumerable: !0,
          configurable: !0,
          get: () => Zt.value,
          set: (ft) => (Zt.value = ft),
        });
      }
    if (a) for (const F in a) C_(a[F], r, n, F);
    if (l) {
      const F = ct(l) ? l.call(n) : l;
      Reflect.ownKeys(F).forEach((J) => {
        jo(J, F[J]);
      });
    }
    c && Ef(c, t, "c");
    function T(F, J) {
      ot(J) ? J.forEach((xt) => F(xt.bind(n))) : J && F(J.bind(n));
    }
    if (
      (T(P1, f),
      T(oc, h),
      T(A_, p),
      T(I1, d),
      T(R1, m),
      T(F1, y),
      T(B1, B),
      T(L1, R),
      T(N1, z),
      T(j1, _),
      T(sc, v),
      T(M1, $),
      ot(E))
    )
      if (E.length) {
        const F = t.exposed || (t.exposed = {});
        E.forEach((J) => {
          Object.defineProperty(F, J, { get: () => n[J], set: (xt) => (n[J] = xt) });
        });
      } else t.exposed || (t.exposed = {});
    C && t.render === We && (t.render = C),
      g != null && (t.inheritAttrs = g),
      k && (t.components = k),
      D && (t.directives = D),
      $ && w_(t);
  }
  function W1(t, e, n = We) {
    ot(t) && (t = eu(t));
    for (const r in t) {
      const i = t[r];
      let o;
      Ot(i) ? ("default" in i ? (o = Ee(i.from || r, i.default, !0)) : (o = Ee(i.from || r))) : (o = Ee(i)),
        qt(o)
          ? Object.defineProperty(e, r, {
              enumerable: !0,
              configurable: !0,
              get: () => o.value,
              set: (s) => (o.value = s),
            })
          : (e[r] = o);
    }
  }
  function Ef(t, e, n) {
    Xe(ot(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function C_(t, e, n, r) {
    let i = r.includes(".") ? N_(n, r) : () => n[r];
    if (Ht(t)) {
      const o = e[t];
      ct(o) && Re(i, o);
    } else if (ct(t)) Re(i, t.bind(n));
    else if (Ot(t))
      if (ot(t)) t.forEach((o) => C_(o, e, n, r));
      else {
        const o = ct(t.handler) ? t.handler.bind(n) : e[t.handler];
        ct(o) && Re(i, o, t);
      }
  }
  function S_(t) {
    const e = t.type,
      { mixins: n, extends: r } = e,
      {
        mixins: i,
        optionsCache: o,
        config: { optionMergeStrategies: s },
      } = t.appContext,
      a = o.get(e);
    let l;
    return (
      a
        ? (l = a)
        : !i.length && !n && !r
          ? (l = e)
          : ((l = {}), i.length && i.forEach((u) => Qo(l, u, s, !0)), Qo(l, e, s)),
      Ot(e) && o.set(e, l),
      l
    );
  }
  function Qo(t, e, n, r = !1) {
    const { mixins: i, extends: o } = e;
    o && Qo(t, o, n, !0), i && i.forEach((s) => Qo(t, s, n, !0));
    for (const s in e)
      if (!(r && s === "expose")) {
        const a = K1[s] || (n && n[s]);
        t[s] = a ? a(t[s], e[s]) : e[s];
      }
    return t;
  }
  const K1 = {
    data: Cf,
    props: Sf,
    emits: Sf,
    methods: oi,
    computed: oi,
    beforeCreate: ne,
    created: ne,
    beforeMount: ne,
    mounted: ne,
    beforeUpdate: ne,
    updated: ne,
    beforeDestroy: ne,
    beforeUnmount: ne,
    destroyed: ne,
    unmounted: ne,
    activated: ne,
    deactivated: ne,
    errorCaptured: ne,
    serverPrefetch: ne,
    components: oi,
    directives: oi,
    watch: X1,
    provide: Cf,
    inject: J1,
  };
  function Cf(t, e) {
    return e
      ? t
        ? function () {
            return Qt(ct(t) ? t.call(this, this) : t, ct(e) ? e.call(this, this) : e);
          }
        : e
      : t;
  }
  function J1(t, e) {
    return oi(eu(t), eu(e));
  }
  function eu(t) {
    if (ot(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
      return e;
    }
    return t;
  }
  function ne(t, e) {
    return t ? [...new Set([].concat(t, e))] : e;
  }
  function oi(t, e) {
    return t ? Qt(Object.create(null), t, e) : e;
  }
  function Sf(t, e) {
    return t ? (ot(t) && ot(e) ? [...new Set([...t, ...e])] : Qt(Object.create(null), Yo(t), Yo(e ?? {}))) : e;
  }
  function X1(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Qt(Object.create(null), t);
    for (const r in e) n[r] = ne(t[r], e[r]);
    return n;
  }
  function T_() {
    return {
      app: null,
      config: {
        isNativeTag: Mb,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let Y1 = 0;
  function Q1(t, e) {
    return function (r, i = null) {
      ct(r) || (r = Qt({}, r)), i != null && !Ot(i) && (i = null);
      const o = T_(),
        s = new WeakSet(),
        a = [];
      let l = !1;
      const u = (o.app = {
        _uid: Y1++,
        _component: r,
        _props: i,
        _container: null,
        _context: o,
        _instance: null,
        version: Iw,
        get config() {
          return o.config;
        },
        set config(c) {},
        use(c, ...f) {
          return s.has(c) || (c && ct(c.install) ? (s.add(c), c.install(u, ...f)) : ct(c) && (s.add(c), c(u, ...f))), u;
        },
        mixin(c) {
          return o.mixins.includes(c) || o.mixins.push(c), u;
        },
        component(c, f) {
          return f ? ((o.components[c] = f), u) : o.components[c];
        },
        directive(c, f) {
          return f ? ((o.directives[c] = f), u) : o.directives[c];
        },
        mount(c, f, h) {
          if (!l) {
            const p = u._ceVNode || at(r, i);
            return (
              (p.appContext = o),
              h === !0 ? (h = "svg") : h === !1 && (h = void 0),
              t(p, c, h),
              (l = !0),
              (u._container = c),
              (c.__vue_app__ = u),
              Ms(p.component)
            );
          }
        },
        onUnmount(c) {
          a.push(c);
        },
        unmount() {
          l && (Xe(a, u._instance, 16), t(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return (o.provides[c] = f), u;
        },
        runWithContext(c) {
          const f = Qn;
          Qn = u;
          try {
            return c();
          } finally {
            Qn = f;
          }
        },
      });
      return u;
    };
  }
  let Qn = null;
  function jo(t, e) {
    if (Kt) {
      let n = Kt.provides;
      const r = Kt.parent && Kt.parent.provides;
      r === n && (n = Kt.provides = Object.create(r)), (n[t] = e);
    }
  }
  function Ee(t, e, n = !1) {
    const r = Kt || ie;
    if (r || Qn) {
      let i = Qn
        ? Qn._context.provides
        : r
          ? r.parent == null || r.ce
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (i && t in i) return i[t];
      if (arguments.length > 1) return n && ct(e) ? e.call(r && r.proxy) : e;
    }
  }
  function tw() {
    return !!(Kt || ie || Qn);
  }
  const $_ = {},
    D_ = () => Object.create($_),
    O_ = (t) => Object.getPrototypeOf(t) === $_;
  function ew(t, e, n, r = !1) {
    const i = {},
      o = D_();
    (t.propsDefaults = Object.create(null)), R_(t, e, i, o);
    for (const s in t.propsOptions[0]) s in i || (i[s] = void 0);
    n ? (t.props = r ? i : h_(i)) : t.type.props ? (t.props = i) : (t.props = o), (t.attrs = o);
  }
  function nw(t, e, n, r) {
    const {
        props: i,
        attrs: o,
        vnode: { patchFlag: s },
      } = t,
      a = dt(i),
      [l] = t.propsOptions;
    let u = !1;
    if ((r || s > 0) && !(s & 16)) {
      if (s & 8) {
        const c = t.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          if (Is(t.emitsOptions, h)) continue;
          const p = e[h];
          if (l)
            if (vt(o, h)) p !== o[h] && ((o[h] = p), (u = !0));
            else {
              const d = ve(h);
              i[d] = nu(l, a, d, p, t, !1);
            }
          else p !== o[h] && ((o[h] = p), (u = !0));
        }
      }
    } else {
      R_(t, e, i, o) && (u = !0);
      let c;
      for (const f in a)
        (!e || (!vt(e, f) && ((c = Bn(f)) === f || !vt(e, c)))) &&
          (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = nu(l, a, f, void 0, t, !0)) : delete i[f]);
      if (o !== a) for (const f in o) (!e || !vt(e, f)) && (delete o[f], (u = !0));
    }
    u && pn(t.attrs, "set", "");
  }
  function R_(t, e, n, r) {
    const [i, o] = t.propsOptions;
    let s = !1,
      a;
    if (e)
      for (let l in e) {
        if (hi(l)) continue;
        const u = e[l];
        let c;
        i && vt(i, (c = ve(l)))
          ? !o || !o.includes(c)
            ? (n[c] = u)
            : ((a || (a = {}))[c] = u)
          : Is(t.emitsOptions, l) || ((!(l in r) || u !== r[l]) && ((r[l] = u), (s = !0)));
      }
    if (o) {
      const l = dt(n),
        u = a || gt;
      for (let c = 0; c < o.length; c++) {
        const f = o[c];
        n[f] = nu(i, l, f, u[f], t, !vt(u, f));
      }
    }
    return s;
  }
  function nu(t, e, n, r, i, o) {
    const s = t[n];
    if (s != null) {
      const a = vt(s, "default");
      if (a && r === void 0) {
        const l = s.default;
        if (s.type !== Function && !s.skipFactory && ct(l)) {
          const { propsDefaults: u } = i;
          if (n in u) r = u[n];
          else {
            const c = eo(i);
            (r = u[n] = l.call(null, e)), c();
          }
        } else r = l;
        i.ce && i.ce._setProp(n, r);
      }
      s[0] && (o && !a ? (r = !1) : s[1] && (r === "" || r === Bn(n)) && (r = !0));
    }
    return r;
  }
  const rw = new WeakMap();
  function F_(t, e, n = !1) {
    const r = n ? rw : e.propsCache,
      i = r.get(t);
    if (i) return i;
    const o = t.props,
      s = {},
      a = [];
    let l = !1;
    if (!ct(t)) {
      const c = (f) => {
        l = !0;
        const [h, p] = F_(f, e, !0);
        Qt(s, h), p && a.push(...p);
      };
      !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    if (!o && !l) return Ot(t) && r.set(t, Ar), Ar;
    if (ot(o))
      for (let c = 0; c < o.length; c++) {
        const f = ve(o[c]);
        Tf(f) && (s[f] = gt);
      }
    else if (o)
      for (const c in o) {
        const f = ve(c);
        if (Tf(f)) {
          const h = o[c],
            p = (s[f] = ot(h) || ct(h) ? { type: h } : Qt({}, h)),
            d = p.type;
          let m = !1,
            y = !0;
          if (ot(d))
            for (let b = 0; b < d.length; ++b) {
              const _ = d[b],
                w = ct(_) && _.name;
              if (w === "Boolean") {
                m = !0;
                break;
              } else w === "String" && (y = !1);
            }
          else m = ct(d) && d.name === "Boolean";
          (p[0] = m), (p[1] = y), (m || vt(p, "default")) && a.push(f);
        }
      }
    const u = [s, a];
    return Ot(t) && r.set(t, u), u;
  }
  function Tf(t) {
    return t[0] !== "$" && !hi(t);
  }
  const ac = (t) => t[0] === "_" || t === "$stable",
    lc = (t) => (ot(t) ? t.map(Ve) : [Ve(t)]),
    iw = (t, e, n) => {
      if (e._n) return e;
      const r = rc((...i) => lc(e(...i)), n);
      return (r._c = !1), r;
    },
    z_ = (t, e, n) => {
      const r = t._ctx;
      for (const i in t) {
        if (ac(i)) continue;
        const o = t[i];
        if (ct(o)) e[i] = iw(i, o, r);
        else if (o != null) {
          const s = lc(o);
          e[i] = () => s;
        }
      }
    },
    P_ = (t, e) => {
      const n = lc(e);
      t.slots.default = () => n;
    },
    I_ = (t, e, n) => {
      for (const r in e) (n || !ac(r)) && (t[r] = e[r]);
    },
    ow = (t, e, n) => {
      const r = (t.slots = D_());
      if (t.vnode.shapeFlag & 32) {
        const i = e.__;
        i && Gl(r, "__", i, !0);
        const o = e._;
        o ? (I_(r, e, n), n && Gl(r, "_", o, !0)) : z_(e, r);
      } else e && P_(t, e);
    },
    sw = (t, e, n) => {
      const { vnode: r, slots: i } = t;
      let o = !0,
        s = gt;
      if (r.shapeFlag & 32) {
        const a = e._;
        a ? (n && a === 1 ? (o = !1) : I_(i, e, n)) : ((o = !e.$stable), z_(e, i)), (s = e);
      } else e && (P_(t, e), (s = { default: 1 }));
      if (o) for (const a in i) !ac(a) && s[a] == null && delete i[a];
    },
    ge = ww;
  function aw(t) {
    return lw(t);
  }
  function lw(t, e) {
    const n = Ss();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: i,
        patchProp: o,
        createElement: s,
        createText: a,
        createComment: l,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: h,
        setScopeId: p = We,
        insertStaticContent: d,
      } = t,
      m = (x, A, S, I = null, L = null, M = null, G = void 0, H = null, Z = !!A.dynamicChildren) => {
        if (x === A) return;
        x && !Xr(x, A) && ((I = j(x)), ft(x, L, M, !0), (x = null)),
          A.patchFlag === -2 && ((Z = !1), (A.dynamicChildren = null));
        const { type: U, ref: it, shapeFlag: K } = A;
        switch (U) {
          case js:
            y(x, A, S, I);
            break;
          case Nn:
            b(x, A, S, I);
            break;
          case xa:
            x == null && _(A, S, I, G);
            break;
          case $t:
            k(x, A, S, I, L, M, G, H, Z);
            break;
          default:
            K & 1
              ? C(x, A, S, I, L, M, G, H, Z)
              : K & 6
                ? D(x, A, S, I, L, M, G, H, Z)
                : (K & 64 || K & 128) && U.process(x, A, S, I, L, M, G, H, Z, tt);
        }
        it != null && L
          ? gi(it, x && x.ref, M, A || x, !A)
          : it == null && x && x.ref != null && gi(x.ref, null, M, x, !0);
      },
      y = (x, A, S, I) => {
        if (x == null) r((A.el = a(A.children)), S, I);
        else {
          const L = (A.el = x.el);
          A.children !== x.children && u(L, A.children);
        }
      },
      b = (x, A, S, I) => {
        x == null ? r((A.el = l(A.children || "")), S, I) : (A.el = x.el);
      },
      _ = (x, A, S, I) => {
        [x.el, x.anchor] = d(x.children, A, S, I, x.el, x.anchor);
      },
      w = ({ el: x, anchor: A }, S, I) => {
        let L;
        for (; x && x !== A; ) (L = h(x)), r(x, S, I), (x = L);
        r(A, S, I);
      },
      v = ({ el: x, anchor: A }) => {
        let S;
        for (; x && x !== A; ) (S = h(x)), i(x), (x = S);
        i(A);
      },
      C = (x, A, S, I, L, M, G, H, Z) => {
        A.type === "svg" ? (G = "svg") : A.type === "math" && (G = "mathml"),
          x == null ? R(A, S, I, L, M, G, H, Z) : $(x, A, L, M, G, H, Z);
      },
      R = (x, A, S, I, L, M, G, H) => {
        let Z, U;
        const { props: it, shapeFlag: K, transition: rt, dirs: lt } = x;
        if (
          ((Z = x.el = s(x.type, M, it && it.is, it)),
          K & 8 ? c(Z, x.children) : K & 16 && B(x.children, Z, null, I, L, wa(x, M), G, H),
          lt && Vn(x, null, I, "created"),
          z(Z, x, x.scopeId, G, I),
          it)
        ) {
          for (const Et in it) Et !== "value" && !hi(Et) && o(Z, Et, null, it[Et], M, I);
          "value" in it && o(Z, "value", null, it.value, M), (U = it.onVnodeBeforeMount) && qe(U, I, x);
        }
        lt && Vn(x, null, I, "beforeMount");
        const pt = uw(L, rt);
        pt && rt.beforeEnter(Z),
          r(Z, A, S),
          ((U = it && it.onVnodeMounted) || pt || lt) &&
            ge(() => {
              U && qe(U, I, x), pt && rt.enter(Z), lt && Vn(x, null, I, "mounted");
            }, L);
      },
      z = (x, A, S, I, L) => {
        if ((S && p(x, S), I)) for (let M = 0; M < I.length; M++) p(x, I[M]);
        if (L) {
          let M = L.subTree;
          if (A === M || (U_(M.type) && (M.ssContent === A || M.ssFallback === A))) {
            const G = L.vnode;
            z(x, G, G.scopeId, G.slotScopeIds, L.parent);
          }
        }
      },
      B = (x, A, S, I, L, M, G, H, Z = 0) => {
        for (let U = Z; U < x.length; U++) {
          const it = (x[U] = H ? $n(x[U]) : Ve(x[U]));
          m(null, it, A, S, I, L, M, G, H);
        }
      },
      $ = (x, A, S, I, L, M, G) => {
        const H = (A.el = x.el);
        let { patchFlag: Z, dynamicChildren: U, dirs: it } = A;
        Z |= x.patchFlag & 16;
        const K = x.props || gt,
          rt = A.props || gt;
        let lt;
        if (
          (S && Hn(S, !1),
          (lt = rt.onVnodeBeforeUpdate) && qe(lt, S, A, x),
          it && Vn(A, x, S, "beforeUpdate"),
          S && Hn(S, !0),
          ((K.innerHTML && rt.innerHTML == null) || (K.textContent && rt.textContent == null)) && c(H, ""),
          U ? E(x.dynamicChildren, U, H, S, I, wa(A, L), M) : G || J(x, A, H, null, S, I, wa(A, L), M, !1),
          Z > 0)
        ) {
          if (Z & 16) g(H, K, rt, S, L);
          else if (
            (Z & 2 && K.class !== rt.class && o(H, "class", null, rt.class, L),
            Z & 4 && o(H, "style", K.style, rt.style, L),
            Z & 8)
          ) {
            const pt = A.dynamicProps;
            for (let Et = 0; Et < pt.length; Et++) {
              const bt = pt[Et],
                ae = K[bt],
                le = rt[bt];
              (le !== ae || bt === "value") && o(H, bt, ae, le, L, S);
            }
          }
          Z & 1 && x.children !== A.children && c(H, A.children);
        } else !G && U == null && g(H, K, rt, S, L);
        ((lt = rt.onVnodeUpdated) || it) &&
          ge(() => {
            lt && qe(lt, S, A, x), it && Vn(A, x, S, "updated");
          }, I);
      },
      E = (x, A, S, I, L, M, G) => {
        for (let H = 0; H < A.length; H++) {
          const Z = x[H],
            U = A[H],
            it = Z.el && (Z.type === $t || !Xr(Z, U) || Z.shapeFlag & 198) ? f(Z.el) : S;
          m(Z, U, it, null, I, L, M, G, !0);
        }
      },
      g = (x, A, S, I, L) => {
        if (A !== S) {
          if (A !== gt) for (const M in A) !hi(M) && !(M in S) && o(x, M, A[M], null, L, I);
          for (const M in S) {
            if (hi(M)) continue;
            const G = S[M],
              H = A[M];
            G !== H && M !== "value" && o(x, M, H, G, L, I);
          }
          "value" in S && o(x, "value", A.value, S.value, L);
        }
      },
      k = (x, A, S, I, L, M, G, H, Z) => {
        const U = (A.el = x ? x.el : a("")),
          it = (A.anchor = x ? x.anchor : a(""));
        let { patchFlag: K, dynamicChildren: rt, slotScopeIds: lt } = A;
        lt && (H = H ? H.concat(lt) : lt),
          x == null
            ? (r(U, S, I), r(it, S, I), B(A.children || [], S, it, L, M, G, H, Z))
            : K > 0 && K & 64 && rt && x.dynamicChildren
              ? (E(x.dynamicChildren, rt, S, L, M, G, H), (A.key != null || (L && A === L.subTree)) && j_(x, A, !0))
              : J(x, A, S, it, L, M, G, H, Z);
      },
      D = (x, A, S, I, L, M, G, H, Z) => {
        (A.slotScopeIds = H),
          x == null ? (A.shapeFlag & 512 ? L.ctx.activate(A, S, I, G, Z) : q(A, S, I, L, M, G, Z)) : O(x, A, Z);
      },
      q = (x, A, S, I, L, M, G) => {
        const H = (x.component = Tw(x, I, L));
        if ((x_(x) && (H.ctx.renderer = tt), Dw(H, !1, G), H.asyncDep)) {
          if ((L && L.registerDep(H, T, G), !x.el)) {
            const Z = (H.subTree = at(Nn));
            b(null, Z, A, S);
          }
        } else T(H, x, A, S, L, M, G);
      },
      O = (x, A, S) => {
        const I = (A.component = x.component);
        if (yw(x, A, S))
          if (I.asyncDep && !I.asyncResolved) {
            F(I, A, S);
            return;
          } else (I.next = A), I.update();
        else (A.el = x.el), (I.vnode = A);
      },
      T = (x, A, S, I, L, M, G) => {
        const H = () => {
          if (x.isMounted) {
            let { next: K, bu: rt, u: lt, parent: pt, vnode: Et } = x;
            {
              const Le = M_(x);
              if (Le) {
                K && ((K.el = Et.el), F(x, K, G)),
                  Le.asyncDep.then(() => {
                    x.isUnmounted || H();
                  });
                return;
              }
            }
            let bt = K,
              ae;
            Hn(x, !1),
              K ? ((K.el = Et.el), F(x, K, G)) : (K = Et),
              rt && Io(rt),
              (ae = K.props && K.props.onVnodeBeforeUpdate) && qe(ae, pt, K, Et),
              Hn(x, !0);
            const le = Df(x),
              Ne = x.subTree;
            (x.subTree = le),
              m(Ne, le, f(Ne.el), j(Ne), x, L, M),
              (K.el = le.el),
              bt === null && bw(x, le.el),
              lt && ge(lt, L),
              (ae = K.props && K.props.onVnodeUpdated) && ge(() => qe(ae, pt, K, Et), L);
          } else {
            let K;
            const { el: rt, props: lt } = A,
              { bm: pt, m: Et, parent: bt, root: ae, type: le } = x,
              Ne = mi(A);
            Hn(x, !1), pt && Io(pt), !Ne && (K = lt && lt.onVnodeBeforeMount) && qe(K, bt, A), Hn(x, !0);
            {
              ae.ce && ae.ce._def.shadowRoot !== !1 && ae.ce._injectChildStyle(le);
              const Le = (x.subTree = Df(x));
              m(null, Le, S, I, x, L, M), (A.el = Le.el);
            }
            if ((Et && ge(Et, L), !Ne && (K = lt && lt.onVnodeMounted))) {
              const Le = A;
              ge(() => qe(K, bt, Le), L);
            }
            (A.shapeFlag & 256 || (bt && mi(bt.vnode) && bt.vnode.shapeFlag & 256)) && x.a && ge(x.a, L),
              (x.isMounted = !0),
              (A = S = I = null);
          }
        };
        x.scope.on();
        const Z = (x.effect = new Ym(H));
        x.scope.off();
        const U = (x.update = Z.run.bind(Z)),
          it = (x.job = Z.runIfDirty.bind(Z));
        (it.i = x), (it.id = x.uid), (Z.scheduler = () => nc(it)), Hn(x, !0), U();
      },
      F = (x, A, S) => {
        A.component = x;
        const I = x.vnode.props;
        (x.vnode = A), (x.next = null), nw(x, A.props, I, S), sw(x, A.children, S), _n(), kf(x), vn();
      },
      J = (x, A, S, I, L, M, G, H, Z = !1) => {
        const U = x && x.children,
          it = x ? x.shapeFlag : 0,
          K = A.children,
          { patchFlag: rt, shapeFlag: lt } = A;
        if (rt > 0) {
          if (rt & 128) {
            ut(U, K, S, I, L, M, G, H, Z);
            return;
          } else if (rt & 256) {
            xt(U, K, S, I, L, M, G, H, Z);
            return;
          }
        }
        lt & 8
          ? (it & 16 && ke(U, L, M), K !== U && c(S, K))
          : it & 16
            ? lt & 16
              ? ut(U, K, S, I, L, M, G, H, Z)
              : ke(U, L, M, !0)
            : (it & 8 && c(S, ""), lt & 16 && B(K, S, I, L, M, G, H, Z));
      },
      xt = (x, A, S, I, L, M, G, H, Z) => {
        (x = x || Ar), (A = A || Ar);
        const U = x.length,
          it = A.length,
          K = Math.min(U, it);
        let rt;
        for (rt = 0; rt < K; rt++) {
          const lt = (A[rt] = Z ? $n(A[rt]) : Ve(A[rt]));
          m(x[rt], lt, S, null, L, M, G, H, Z);
        }
        U > it ? ke(x, L, M, !0, !1, K) : B(A, S, I, L, M, G, H, Z, K);
      },
      ut = (x, A, S, I, L, M, G, H, Z) => {
        let U = 0;
        const it = A.length;
        let K = x.length - 1,
          rt = it - 1;
        for (; U <= K && U <= rt; ) {
          const lt = x[U],
            pt = (A[U] = Z ? $n(A[U]) : Ve(A[U]));
          if (Xr(lt, pt)) m(lt, pt, S, null, L, M, G, H, Z);
          else break;
          U++;
        }
        for (; U <= K && U <= rt; ) {
          const lt = x[K],
            pt = (A[rt] = Z ? $n(A[rt]) : Ve(A[rt]));
          if (Xr(lt, pt)) m(lt, pt, S, null, L, M, G, H, Z);
          else break;
          K--, rt--;
        }
        if (U > K) {
          if (U <= rt) {
            const lt = rt + 1,
              pt = lt < it ? A[lt].el : I;
            for (; U <= rt; ) m(null, (A[U] = Z ? $n(A[U]) : Ve(A[U])), S, pt, L, M, G, H, Z), U++;
          }
        } else if (U > rt) for (; U <= K; ) ft(x[U], L, M, !0), U++;
        else {
          const lt = U,
            pt = U,
            Et = new Map();
          for (U = pt; U <= rt; U++) {
            const de = (A[U] = Z ? $n(A[U]) : Ve(A[U]));
            de.key != null && Et.set(de.key, U);
          }
          let bt,
            ae = 0;
          const le = rt - pt + 1;
          let Ne = !1,
            Le = 0;
          const Kr = new Array(le);
          for (U = 0; U < le; U++) Kr[U] = 0;
          for (U = lt; U <= K; U++) {
            const de = x[U];
            if (ae >= le) {
              ft(de, L, M, !0);
              continue;
            }
            let Be;
            if (de.key != null) Be = Et.get(de.key);
            else
              for (bt = pt; bt <= rt; bt++)
                if (Kr[bt - pt] === 0 && Xr(de, A[bt])) {
                  Be = bt;
                  break;
                }
            Be === void 0
              ? ft(de, L, M, !0)
              : ((Kr[Be - pt] = U + 1), Be >= Le ? (Le = Be) : (Ne = !0), m(de, A[Be], S, null, L, M, G, H, Z), ae++);
          }
          const _f = Ne ? cw(Kr) : Ar;
          for (bt = _f.length - 1, U = le - 1; U >= 0; U--) {
            const de = pt + U,
              Be = A[de],
              vf = de + 1 < it ? A[de + 1].el : I;
            Kr[U] === 0 ? m(null, Be, S, vf, L, M, G, H, Z) : Ne && (bt < 0 || U !== _f[bt] ? Zt(Be, S, vf, 2) : bt--);
          }
        }
      },
      Zt = (x, A, S, I, L = null) => {
        const { el: M, type: G, transition: H, children: Z, shapeFlag: U } = x;
        if (U & 6) {
          Zt(x.component.subTree, A, S, I);
          return;
        }
        if (U & 128) {
          x.suspense.move(A, S, I);
          return;
        }
        if (U & 64) {
          G.move(x, A, S, tt);
          return;
        }
        if (G === $t) {
          r(M, A, S);
          for (let K = 0; K < Z.length; K++) Zt(Z[K], A, S, I);
          r(x.anchor, A, S);
          return;
        }
        if (G === xa) {
          w(x, A, S);
          return;
        }
        if (I !== 2 && U & 1 && H)
          if (I === 0) H.beforeEnter(M), r(M, A, S), ge(() => H.enter(M), L);
          else {
            const { leave: K, delayLeave: rt, afterLeave: lt } = H,
              pt = () => {
                x.ctx.isUnmounted ? i(M) : r(M, A, S);
              },
              Et = () => {
                K(M, () => {
                  pt(), lt && lt();
                });
              };
            rt ? rt(M, pt, Et) : Et();
          }
        else r(M, A, S);
      },
      ft = (x, A, S, I = !1, L = !1) => {
        const {
          type: M,
          props: G,
          ref: H,
          children: Z,
          dynamicChildren: U,
          shapeFlag: it,
          patchFlag: K,
          dirs: rt,
          cacheIndex: lt,
        } = x;
        if (
          (K === -2 && (L = !1),
          H != null && (_n(), gi(H, null, S, x, !0), vn()),
          lt != null && (A.renderCache[lt] = void 0),
          it & 256)
        ) {
          A.ctx.deactivate(x);
          return;
        }
        const pt = it & 1 && rt,
          Et = !mi(x);
        let bt;
        if ((Et && (bt = G && G.onVnodeBeforeUnmount) && qe(bt, A, x), it & 6)) En(x.component, S, I);
        else {
          if (it & 128) {
            x.suspense.unmount(S, I);
            return;
          }
          pt && Vn(x, null, A, "beforeUnmount"),
            it & 64
              ? x.type.remove(x, A, S, tt, I)
              : U && !U.hasOnce && (M !== $t || (K > 0 && K & 64))
                ? ke(U, A, S, !1, !0)
                : ((M === $t && K & 384) || (!L && it & 16)) && ke(Z, A, S),
            I && At(x);
        }
        ((Et && (bt = G && G.onVnodeUnmounted)) || pt) &&
          ge(() => {
            bt && qe(bt, A, x), pt && Vn(x, null, A, "unmounted");
          }, S);
      },
      At = (x) => {
        const { type: A, el: S, anchor: I, transition: L } = x;
        if (A === $t) {
          xe(S, I);
          return;
        }
        if (A === xa) {
          v(x);
          return;
        }
        const M = () => {
          i(S), L && !L.persisted && L.afterLeave && L.afterLeave();
        };
        if (x.shapeFlag & 1 && L && !L.persisted) {
          const { leave: G, delayLeave: H } = L,
            Z = () => G(S, M);
          H ? H(x.el, M, Z) : Z();
        } else M();
      },
      xe = (x, A) => {
        let S;
        for (; x !== A; ) (S = h(x)), i(x), (x = S);
        i(A);
      },
      En = (x, A, S) => {
        const {
          bum: I,
          scope: L,
          job: M,
          subTree: G,
          um: H,
          m: Z,
          a: U,
          parent: it,
          slots: { __: K },
        } = x;
        $f(Z),
          $f(U),
          I && Io(I),
          it &&
            ot(K) &&
            K.forEach((rt) => {
              it.renderCache[rt] = void 0;
            }),
          L.stop(),
          M && ((M.flags |= 8), ft(G, x, A, S)),
          H && ge(H, A),
          ge(() => {
            x.isUnmounted = !0;
          }, A),
          A &&
            A.pendingBranch &&
            !A.isUnmounted &&
            x.asyncDep &&
            !x.asyncResolved &&
            x.suspenseId === A.pendingId &&
            (A.deps--, A.deps === 0 && A.resolve());
      },
      ke = (x, A, S, I = !1, L = !1, M = 0) => {
        for (let G = M; G < x.length; G++) ft(x[G], A, S, I, L);
      },
      j = (x) => {
        if (x.shapeFlag & 6) return j(x.component.subTree);
        if (x.shapeFlag & 128) return x.suspense.next();
        const A = h(x.anchor || x.el),
          S = A && A[D1];
        return S ? h(S) : A;
      };
    let X = !1;
    const W = (x, A, S) => {
        x == null ? A._vnode && ft(A._vnode, null, null, !0) : m(A._vnode || null, x, A, null, null, null, S),
          (A._vnode = x),
          X || ((X = !0), kf(), v_(), (X = !1));
      },
      tt = { p: m, um: ft, m: Zt, r: At, mt: q, mc: B, pc: J, pbc: E, n: j, o: t };
    return { render: W, hydrate: void 0, createApp: Q1(W) };
  }
  function wa({ type: t, props: e }, n) {
    return (n === "svg" && t === "foreignObject") ||
      (n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html"))
      ? void 0
      : n;
  }
  function Hn({ effect: t, job: e }, n) {
    n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
  }
  function uw(t, e) {
    return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
  }
  function j_(t, e, n = !1) {
    const r = t.children,
      i = e.children;
    if (ot(r) && ot(i))
      for (let o = 0; o < r.length; o++) {
        const s = r[o];
        let a = i[o];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = i[o] = $n(i[o])), (a.el = s.el)),
          !n && a.patchFlag !== -2 && j_(s, a)),
          a.type === js && (a.el = s.el),
          a.type === Nn && !a.el && (a.el = s.el);
      }
  }
  function cw(t) {
    const e = t.slice(),
      n = [0];
    let r, i, o, s, a;
    const l = t.length;
    for (r = 0; r < l; r++) {
      const u = t[r];
      if (u !== 0) {
        if (((i = n[n.length - 1]), t[i] < u)) {
          (e[r] = i), n.push(r);
          continue;
        }
        for (o = 0, s = n.length - 1; o < s; ) (a = (o + s) >> 1), t[n[a]] < u ? (o = a + 1) : (s = a);
        u < t[n[o]] && (o > 0 && (e[r] = n[o - 1]), (n[o] = r));
      }
    }
    for (o = n.length, s = n[o - 1]; o-- > 0; ) (n[o] = s), (s = e[s]);
    return n;
  }
  function M_(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : M_(e);
  }
  function $f(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const fw = Symbol.for("v-scx"),
    hw = () => Ee(fw);
  function pw(t, e) {
    return Ps(t, null, e);
  }
  function dw(t, e) {
    return Ps(t, null, { flush: "sync" });
  }
  function Re(t, e, n) {
    return Ps(t, e, n);
  }
  function Ps(t, e, n = gt) {
    const { immediate: r, deep: i, flush: o, once: s } = n,
      a = Qt({}, n),
      l = (e && r) || (!e && o !== "post");
    let u;
    if (Oi) {
      if (o === "sync") {
        const p = hw();
        u = p.__watcherHandles || (p.__watcherHandles = []);
      } else if (!l) {
        const p = () => {};
        return (p.stop = We), (p.resume = We), (p.pause = We), p;
      }
    }
    const c = Kt;
    a.call = (p, d, m) => Xe(p, c, d, m);
    let f = !1;
    o === "post"
      ? (a.scheduler = (p) => {
          ge(p, c && c.suspense);
        })
      : o !== "sync" &&
        ((f = !0),
        (a.scheduler = (p, d) => {
          d ? p() : nc(p);
        })),
      (a.augmentJob = (p) => {
        e && (p.flags |= 4), f && ((p.flags |= 2), c && ((p.id = c.uid), (p.i = c)));
      });
    const h = C1(t, e, a);
    return Oi && (u ? u.push(h) : l && h()), h;
  }
  function gw(t, e, n) {
    const r = this.proxy,
      i = Ht(t) ? (t.includes(".") ? N_(r, t) : () => r[t]) : t.bind(r, r);
    let o;
    ct(e) ? (o = e) : ((o = e.handler), (n = e));
    const s = eo(this),
      a = Ps(i, o.bind(r), n);
    return s(), a;
  }
  function N_(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let i = 0; i < n.length && r; i++) r = r[n[i]];
      return r;
    };
  }
  function L_(t, e, n = gt) {
    const r = $w(),
      i = ve(e),
      o = Bn(e),
      s = B_(t, i),
      a = y1((l, u) => {
        let c,
          f = gt,
          h;
        return (
          dw(() => {
            const p = t[i];
            ue(c, p) && ((c = p), u());
          }),
          {
            get() {
              return l(), n.get ? n.get(c) : c;
            },
            set(p) {
              const d = n.set ? n.set(p) : p;
              if (!ue(d, c) && !(f !== gt && ue(p, f))) return;
              const m = r.vnode.props;
              (m &&
                (e in m || i in m || o in m) &&
                (`onUpdate:${e}` in m || `onUpdate:${i}` in m || `onUpdate:${o}` in m)) ||
                ((c = p), u()),
                r.emit(`update:${e}`, d),
                ue(p, d) && ue(p, f) && !ue(d, h) && u(),
                (f = p),
                (h = d);
            },
          }
        );
      });
    return (
      (a[Symbol.iterator] = () => {
        let l = 0;
        return {
          next() {
            return l < 2 ? { value: l++ ? s || gt : a, done: !1 } : { done: !0 };
          },
        };
      }),
      a
    );
  }
  const B_ = (t, e) =>
    e === "modelValue" || e === "model-value"
      ? t.modelModifiers
      : t[`${e}Modifiers`] || t[`${ve(e)}Modifiers`] || t[`${Bn(e)}Modifiers`];
  function mw(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || gt;
    let i = n;
    const o = e.startsWith("update:"),
      s = o && B_(r, e.slice(7));
    s && (s.trim && (i = n.map((c) => (Ht(c) ? c.trim() : c))), s.number && (i = n.map(Wl)));
    let a,
      l = r[(a = ga(e))] || r[(a = ga(ve(e)))];
    !l && o && (l = r[(a = ga(Bn(e)))]), l && Xe(l, t, 6, i);
    const u = r[a + "Once"];
    if (u) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[a]) return;
      (t.emitted[a] = !0), Xe(u, t, 6, i);
    }
  }
  function q_(t, e, n = !1) {
    const r = e.emitsCache,
      i = r.get(t);
    if (i !== void 0) return i;
    const o = t.emits;
    let s = {},
      a = !1;
    if (!ct(t)) {
      const l = (u) => {
        const c = q_(u, e, !0);
        c && ((a = !0), Qt(s, c));
      };
      !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
    }
    return !o && !a
      ? (Ot(t) && r.set(t, null), null)
      : (ot(o) ? o.forEach((l) => (s[l] = null)) : Qt(s, o), Ot(t) && r.set(t, s), s);
  }
  function Is(t, e) {
    return !t || !ks(e)
      ? !1
      : ((e = e.slice(2).replace(/Once$/, "")), vt(t, e[0].toLowerCase() + e.slice(1)) || vt(t, Bn(e)) || vt(t, e));
  }
  function Df(t) {
    const {
        type: e,
        vnode: n,
        proxy: r,
        withProxy: i,
        propsOptions: [o],
        slots: s,
        attrs: a,
        emit: l,
        render: u,
        renderCache: c,
        props: f,
        data: h,
        setupState: p,
        ctx: d,
        inheritAttrs: m,
      } = t,
      y = Xo(t);
    let b, _;
    try {
      if (n.shapeFlag & 4) {
        const v = i || r,
          C = v;
        (b = Ve(u.call(C, v, c, f, p, h, d))), (_ = a);
      } else {
        const v = e;
        (b = Ve(v.length > 1 ? v(f, { attrs: a, slots: s, emit: l }) : v(f, null))), (_ = e.props ? a : _w(a));
      }
    } catch (v) {
      (vi.length = 0), Rs(v, t, 1), (b = at(Nn));
    }
    let w = b;
    if (_ && m !== !1) {
      const v = Object.keys(_),
        { shapeFlag: C } = w;
      v.length && C & 7 && (o && v.some(Vu) && (_ = vw(_, o)), (w = Rr(w, _, !1, !0)));
    }
    return (
      n.dirs && ((w = Rr(w, null, !1, !0)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
      n.transition && ic(w, n.transition),
      (b = w),
      Xo(y),
      b
    );
  }
  const _w = (t) => {
      let e;
      for (const n in t) (n === "class" || n === "style" || ks(n)) && ((e || (e = {}))[n] = t[n]);
      return e;
    },
    vw = (t, e) => {
      const n = {};
      for (const r in t) (!Vu(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
      return n;
    };
  function yw(t, e, n) {
    const { props: r, children: i, component: o } = t,
      { props: s, children: a, patchFlag: l } = e,
      u = o.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? Of(r, s, u) : !!s;
      if (l & 8) {
        const c = e.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          if (s[h] !== r[h] && !Is(u, h)) return !0;
        }
      }
    } else return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? (s ? Of(r, s, u) : !0) : !!s;
    return !1;
  }
  function Of(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      if (e[o] !== t[o] && !Is(n, o)) return !0;
    }
    return !1;
  }
  function bw({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
        ((t = e.vnode).el = n), (e = e.parent);
      else break;
    }
  }
  const U_ = (t) => t.__isSuspense;
  function ww(t, e) {
    e && e.pendingBranch ? (ot(t) ? e.effects.push(...t) : e.effects.push(t)) : $1(t);
  }
  const $t = Symbol.for("v-fgt"),
    js = Symbol.for("v-txt"),
    Nn = Symbol.for("v-cmt"),
    xa = Symbol.for("v-stc"),
    vi = [];
  let _e = null;
  function Y(t = !1) {
    vi.push((_e = t ? null : []));
  }
  function xw() {
    vi.pop(), (_e = vi[vi.length - 1] || null);
  }
  let Di = 1;
  function Rf(t, e = !1) {
    (Di += t), t < 0 && _e && e && (_e.hasOnce = !0);
  }
  function Z_(t) {
    return (t.dynamicChildren = Di > 0 ? _e || Ar : null), xw(), Di > 0 && _e && _e.push(t), t;
  }
  function Q(t, e, n, r, i, o) {
    return Z_(N(t, e, n, r, i, o, !0));
  }
  function V_(t, e, n, r, i) {
    return Z_(at(t, e, n, r, i, !0));
  }
  function ts(t) {
    return t ? t.__v_isVNode === !0 : !1;
  }
  function Xr(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const H_ = ({ key: t }) => t ?? null,
    Mo = ({ ref: t, ref_key: e, ref_for: n }) => (
      typeof t == "number" && (t = "" + t),
      t != null ? (Ht(t) || qt(t) || ct(t) ? { i: ie, r: t, k: e, f: !!n } : t) : null
    );
  function N(t, e = null, n = null, r = 0, i = null, o = t === $t ? 0 : 1, s = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t,
      props: e,
      key: e && H_(e),
      ref: e && Mo(e),
      scopeId: b_,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: o,
      patchFlag: r,
      dynamicProps: i,
      dynamicChildren: null,
      appContext: null,
      ctx: ie,
    };
    return (
      a ? (uc(l, n), o & 128 && t.normalize(l)) : n && (l.shapeFlag |= Ht(n) ? 8 : 16),
      Di > 0 && !s && _e && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && _e.push(l),
      l
    );
  }
  const at = kw;
  function kw(t, e = null, n = null, r = 0, i = null, o = !1) {
    if (((!t || t === U1) && (t = Nn), ts(t))) {
      const a = Rr(t, e, !0);
      return (
        n && uc(a, n),
        Di > 0 && !o && _e && (a.shapeFlag & 6 ? (_e[_e.indexOf(t)] = a) : _e.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((Pw(t) && (t = t.__vccOpts), e)) {
      e = Aw(e);
      let { class: a, style: l } = e;
      a && !Ht(a) && (e.class = Vt(a)), Ot(l) && (Qu(l) && !ot(l) && (l = Qt({}, l)), (e.style = Ts(l)));
    }
    const s = Ht(t) ? 1 : U_(t) ? 128 : O1(t) ? 64 : Ot(t) ? 4 : ct(t) ? 2 : 0;
    return N(t, e, n, r, i, s, o, !0);
  }
  function Aw(t) {
    return t ? (Qu(t) || O_(t) ? Qt({}, t) : t) : null;
  }
  function Rr(t, e, n = !1, r = !1) {
    const { props: i, ref: o, patchFlag: s, children: a, transition: l } = t,
      u = e ? Ew(i || {}, e) : i,
      c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: u,
        key: u && H_(u),
        ref: e && e.ref ? (n && o ? (ot(o) ? o.concat(Mo(e)) : [o, Mo(e)]) : Mo(e)) : o,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== $t ? (s === -1 ? 16 : s | 16) : s,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: l,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Rr(t.ssContent),
        ssFallback: t.ssFallback && Rr(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce,
      };
    return l && r && ic(c, l.clone(c)), c;
  }
  function yn(t = " ", e = 0) {
    return at(js, null, t, e);
  }
  function oe(t = "", e = !1) {
    return e ? (Y(), V_(Nn, null, t)) : at(Nn, null, t);
  }
  function Ve(t) {
    return t == null || typeof t == "boolean"
      ? at(Nn)
      : ot(t)
        ? at($t, null, t.slice())
        : ts(t)
          ? $n(t)
          : at(js, null, String(t));
  }
  function $n(t) {
    return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Rr(t);
  }
  function uc(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (ot(e)) n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const i = e.default;
        i && (i._c && (i._d = !1), uc(t, i()), i._c && (i._d = !0));
        return;
      } else {
        n = 32;
        const i = e._;
        !i && !O_(e)
          ? (e._ctx = ie)
          : i === 3 && ie && (ie.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
      }
    else
      ct(e)
        ? ((e = { default: e, _ctx: ie }), (n = 32))
        : ((e = String(e)), r & 64 ? ((n = 16), (e = [yn(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
  }
  function Ew(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const i in r)
        if (i === "class") e.class !== r.class && (e.class = Vt([e.class, r.class]));
        else if (i === "style") e.style = Ts([e.style, r.style]);
        else if (ks(i)) {
          const o = e[i],
            s = r[i];
          s && o !== s && !(ot(o) && o.includes(s)) && (e[i] = o ? [].concat(o, s) : s);
        } else i !== "" && (e[i] = r[i]);
    }
    return e;
  }
  function qe(t, e, n, r = null) {
    Xe(t, e, 7, [n, r]);
  }
  const Cw = T_();
  let Sw = 0;
  function Tw(t, e, n) {
    const r = t.type,
      i = (e ? e.appContext : t.appContext) || Cw,
      o = {
        uid: Sw++,
        vnode: t,
        type: r,
        parent: e,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Km(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(i.provides),
        ids: e ? e.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: F_(r, i),
        emitsOptions: q_(r, i),
        emit: null,
        emitted: null,
        propsDefaults: gt,
        inheritAttrs: r.inheritAttrs,
        ctx: gt,
        data: gt,
        props: gt,
        attrs: gt,
        slots: gt,
        refs: gt,
        setupState: gt,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (o.ctx = { _: o }), (o.root = e ? e.root : o), (o.emit = mw.bind(null, o)), t.ce && t.ce(o), o;
  }
  let Kt = null;
  const $w = () => Kt || ie;
  let es, ru;
  {
    const t = Ss(),
      e = (n, r) => {
        let i;
        return (
          (i = t[n]) || (i = t[n] = []),
          i.push(r),
          (o) => {
            i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
          }
        );
      };
    (es = e("__VUE_INSTANCE_SETTERS__", (n) => (Kt = n))), (ru = e("__VUE_SSR_SETTERS__", (n) => (Oi = n)));
  }
  const eo = (t) => {
      const e = Kt;
      return (
        es(t),
        t.scope.on(),
        () => {
          t.scope.off(), es(e);
        }
      );
    },
    Ff = () => {
      Kt && Kt.scope.off(), es(null);
    };
  function G_(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Oi = !1;
  function Dw(t, e = !1, n = !1) {
    e && ru(e);
    const { props: r, children: i } = t.vnode,
      o = G_(t);
    ew(t, r, o, e), ow(t, i, n || e);
    const s = o ? Ow(t, e) : void 0;
    return e && ru(!1), s;
  }
  function Ow(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, V1));
    const { setup: r } = n;
    if (r) {
      _n();
      const i = (t.setupContext = r.length > 1 ? Fw(t) : null),
        o = eo(t),
        s = to(r, t, 0, [t.props, i]),
        a = qm(s);
      if ((vn(), o(), (a || t.sp) && !mi(t) && w_(t), a)) {
        if ((s.then(Ff, Ff), e))
          return s
            .then((l) => {
              zf(t, l);
            })
            .catch((l) => {
              Rs(l, t, 0);
            });
        t.asyncDep = s;
      } else zf(t, s);
    } else W_(t);
  }
  function zf(t, e, n) {
    ct(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : Ot(e) && (t.setupState = g_(e)), W_(t);
  }
  function W_(t, e, n) {
    const r = t.type;
    t.render || (t.render = r.render || We);
    {
      const i = eo(t);
      _n();
      try {
        G1(t);
      } finally {
        vn(), i();
      }
    }
  }
  const Rw = {
    get(t, e) {
      return ee(t, "get", ""), t[e];
    },
  };
  function Fw(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return { attrs: new Proxy(t.attrs, Rw), slots: t.slots, emit: t.emit, expose: e };
  }
  function Ms(t) {
    return t.exposed
      ? t.exposeProxy ||
          (t.exposeProxy = new Proxy(g_(tc(t.exposed)), {
            get(e, n) {
              if (n in e) return e[n];
              if (n in _i) return _i[n](t);
            },
            has(e, n) {
              return n in e || n in _i;
            },
          }))
      : t.proxy;
  }
  function zw(t, e = !0) {
    return ct(t) ? t.displayName || t.name : t.name || (e && t.__name);
  }
  function Pw(t) {
    return ct(t) && "__vccOpts" in t;
  }
  const ht = (t, e) => A1(t, e, Oi);
  function K_(t, e, n) {
    const r = arguments.length;
    return r === 2
      ? Ot(e) && !ot(e)
        ? ts(e)
          ? at(t, null, [e])
          : at(t, e)
        : at(t, null, e)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && ts(n) && (n = [n]), at(t, e, n));
  }
  const Iw = "3.5.17";
  /**
   * @vue/runtime-dom v3.5.17
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let iu;
  const Pf = typeof window < "u" && window.trustedTypes;
  if (Pf)
    try {
      iu = Pf.createPolicy("vue", { createHTML: (t) => t });
    } catch {}
  const J_ = iu ? (t) => iu.createHTML(t) : (t) => t,
    jw = "http://www.w3.org/2000/svg",
    Mw = "http://www.w3.org/1998/Math/MathML",
    fn = typeof document < "u" ? document : null,
    If = fn && fn.createElement("template"),
    Nw = {
      insert: (t, e, n) => {
        e.insertBefore(t, n || null);
      },
      remove: (t) => {
        const e = t.parentNode;
        e && e.removeChild(t);
      },
      createElement: (t, e, n, r) => {
        const i =
          e === "svg"
            ? fn.createElementNS(jw, t)
            : e === "mathml"
              ? fn.createElementNS(Mw, t)
              : n
                ? fn.createElement(t, { is: n })
                : fn.createElement(t);
        return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
      },
      createText: (t) => fn.createTextNode(t),
      createComment: (t) => fn.createComment(t),
      setText: (t, e) => {
        t.nodeValue = e;
      },
      setElementText: (t, e) => {
        t.textContent = e;
      },
      parentNode: (t) => t.parentNode,
      nextSibling: (t) => t.nextSibling,
      querySelector: (t) => fn.querySelector(t),
      setScopeId(t, e) {
        t.setAttribute(e, "");
      },
      insertStaticContent(t, e, n, r, i, o) {
        const s = n ? n.previousSibling : e.lastChild;
        if (i && (i === o || i.nextSibling))
          for (; e.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); );
        else {
          If.innerHTML = J_(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
          const a = If.content;
          if (r === "svg" || r === "mathml") {
            const l = a.firstChild;
            for (; l.firstChild; ) a.appendChild(l.firstChild);
            a.removeChild(l);
          }
          e.insertBefore(a, n);
        }
        return [s ? s.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
      },
    },
    Lw = Symbol("_vtc");
  function Bw(t, e, n) {
    const r = t[Lw];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
      e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : (t.className = e);
  }
  const jf = Symbol("_vod"),
    qw = Symbol("_vsh"),
    Uw = Symbol(""),
    Zw = /(^|;)\s*display\s*:/;
  function Vw(t, e, n) {
    const r = t.style,
      i = Ht(n);
    let o = !1;
    if (n && !i) {
      if (e)
        if (Ht(e))
          for (const s of e.split(";")) {
            const a = s.slice(0, s.indexOf(":")).trim();
            n[a] == null && No(r, a, "");
          }
        else for (const s in e) n[s] == null && No(r, s, "");
      for (const s in n) s === "display" && (o = !0), No(r, s, n[s]);
    } else if (i) {
      if (e !== n) {
        const s = r[Uw];
        s && (n += ";" + s), (r.cssText = n), (o = Zw.test(n));
      }
    } else e && t.removeAttribute("style");
    jf in t && ((t[jf] = o ? r.display : ""), t[qw] && (r.display = "none"));
  }
  const Mf = /\s*!important$/;
  function No(t, e, n) {
    if (ot(n)) n.forEach((r) => No(t, e, r));
    else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
    else {
      const r = Hw(t, e);
      Mf.test(n) ? t.setProperty(Bn(r), n.replace(Mf, ""), "important") : (t[r] = n);
    }
  }
  const Nf = ["Webkit", "Moz", "ms"],
    ka = {};
  function Hw(t, e) {
    const n = ka[e];
    if (n) return n;
    let r = ve(e);
    if (r !== "filter" && r in t) return (ka[e] = r);
    r = Cs(r);
    for (let i = 0; i < Nf.length; i++) {
      const o = Nf[i] + r;
      if (o in t) return (ka[e] = o);
    }
    return e;
  }
  const Lf = "http://www.w3.org/1999/xlink";
  function Bf(t, e, n, r, i, o = Wb(e)) {
    r && e.startsWith("xlink:")
      ? n == null
        ? t.removeAttributeNS(Lf, e.slice(6, e.length))
        : t.setAttributeNS(Lf, e, n)
      : n == null || (o && !Vm(n))
        ? t.removeAttribute(e)
        : t.setAttribute(e, o ? "" : Je(n) ? String(n) : n);
  }
  function qf(t, e, n, r, i) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? J_(n) : n);
      return;
    }
    const o = t.tagName;
    if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const a = o === "OPTION" ? t.getAttribute("value") || "" : t.value,
        l = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
      (a !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), (t._value = n);
      return;
    }
    let s = !1;
    if (n === "" || n == null) {
      const a = typeof t[e];
      a === "boolean"
        ? (n = Vm(n))
        : n == null && a === "string"
          ? ((n = ""), (s = !0))
          : a === "number" && ((n = 0), (s = !0));
    }
    try {
      t[e] = n;
    } catch {}
    s && t.removeAttribute(i || e);
  }
  function Kn(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function Gw(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const Uf = Symbol("_vei");
  function Ww(t, e, n, r, i = null) {
    const o = t[Uf] || (t[Uf] = {}),
      s = o[e];
    if (r && s) s.value = r;
    else {
      const [a, l] = Kw(e);
      if (r) {
        const u = (o[e] = Yw(r, i));
        Kn(t, a, u, l);
      } else s && (Gw(t, a, s, l), (o[e] = void 0));
    }
  }
  const Zf = /(?:Once|Passive|Capture)$/;
  function Kw(t) {
    let e;
    if (Zf.test(t)) {
      e = {};
      let r;
      for (; (r = t.match(Zf)); ) (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
    }
    return [t[2] === ":" ? t.slice(3) : Bn(t.slice(2)), e];
  }
  let Aa = 0;
  const Jw = Promise.resolve(),
    Xw = () => Aa || (Jw.then(() => (Aa = 0)), (Aa = Date.now()));
  function Yw(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      Xe(Qw(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = Xw()), n;
  }
  function Qw(t, e) {
    if (ot(e)) {
      const n = t.stopImmediatePropagation;
      return (
        (t.stopImmediatePropagation = () => {
          n.call(t), (t._stopped = !0);
        }),
        e.map((r) => (i) => !i._stopped && r && r(i))
      );
    } else return e;
  }
  const Vf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    tx = (t, e, n, r, i, o) => {
      const s = i === "svg";
      e === "class"
        ? Bw(t, r, s)
        : e === "style"
          ? Vw(t, n, r)
          : ks(e)
            ? Vu(e) || Ww(t, e, n, r, o)
            : (e[0] === "." ? ((e = e.slice(1)), !0) : e[0] === "^" ? ((e = e.slice(1)), !1) : ex(t, e, r, s))
              ? (qf(t, e, r),
                !t.tagName.includes("-") &&
                  (e === "value" || e === "checked" || e === "selected") &&
                  Bf(t, e, r, s, o, e !== "value"))
              : t._isVueCE && (/[A-Z]/.test(e) || !Ht(r))
                ? qf(t, ve(e), r, o, e)
                : (e === "true-value" ? (t._trueValue = r) : e === "false-value" && (t._falseValue = r),
                  Bf(t, e, r, s));
    };
  function ex(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || (e in t && Vf(e) && ct(n)));
    if (
      e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "autocorrect" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA")
    )
      return !1;
    if (e === "width" || e === "height") {
      const i = t.tagName;
      if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1;
    }
    return Vf(e) && Ht(n) ? !1 : e in t;
  }
  const ns = (t) => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return ot(e) ? (n) => Io(e, n) : e;
  };
  function nx(t) {
    t.target.composing = !0;
  }
  function Hf(t) {
    const e = t.target;
    e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
  }
  const Sr = Symbol("_assign"),
    rx = {
      created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
        t[Sr] = ns(i);
        const o = r || (i.props && i.props.type === "number");
        Kn(t, e ? "change" : "input", (s) => {
          if (s.target.composing) return;
          let a = t.value;
          n && (a = a.trim()), o && (a = Wl(a)), t[Sr](a);
        }),
          n &&
            Kn(t, "change", () => {
              t.value = t.value.trim();
            }),
          e || (Kn(t, "compositionstart", nx), Kn(t, "compositionend", Hf), Kn(t, "change", Hf));
      },
      mounted(t, { value: e }) {
        t.value = e ?? "";
      },
      beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
        if (((t[Sr] = ns(s)), t.composing)) return;
        const a = (o || t.type === "number") && !/^0\d/.test(t.value) ? Wl(t.value) : t.value,
          l = e ?? "";
        a !== l &&
          ((document.activeElement === t && t.type !== "range" && ((r && e === n) || (i && t.value.trim() === l))) ||
            (t.value = l));
      },
    },
    cc = {
      deep: !0,
      created(t, e, n) {
        (t[Sr] = ns(n)),
          Kn(t, "change", () => {
            const r = t._modelValue,
              i = ix(t),
              o = t.checked,
              s = t[Sr];
            if (ot(r)) {
              const a = Hm(r, i),
                l = a !== -1;
              if (o && !l) s(r.concat(i));
              else if (!o && l) {
                const u = [...r];
                u.splice(a, 1), s(u);
              }
            } else if (As(r)) {
              const a = new Set(r);
              o ? a.add(i) : a.delete(i), s(a);
            } else s(X_(t, o));
          });
      },
      mounted: Gf,
      beforeUpdate(t, e, n) {
        (t[Sr] = ns(n)), Gf(t, e, n);
      },
    };
  function Gf(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let i;
    if (ot(e)) i = Hm(e, r.props.value) > -1;
    else if (As(e)) i = e.has(r.props.value);
    else {
      if (e === n) return;
      i = $s(e, X_(t, !0));
    }
    t.checked !== i && (t.checked = i);
  }
  function ix(t) {
    return "_value" in t ? t._value : t.value;
  }
  function X_(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const ox = Qt({ patchProp: tx }, Nw);
  let Wf;
  function sx() {
    return Wf || (Wf = aw(ox));
  }
  const ax = (...t) => {
    const e = sx().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (r) => {
        const i = ux(r);
        if (!i) return;
        const o = e._component;
        !ct(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
        const s = n(i, !1, lx(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
      }),
      e
    );
  };
  function lx(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function ux(t) {
    return Ht(t) ? document.querySelector(t) : t;
  }
  /*!
   * pinia v3.0.3
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */ let Y_;
  const Ns = (t) => (Y_ = t),
    Q_ = Symbol();
  function ou(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Object]" &&
      typeof t.toJSON != "function"
    );
  }
  var yi;
  (function (t) {
    (t.direct = "direct"), (t.patchObject = "patch object"), (t.patchFunction = "patch function");
  })(yi || (yi = {}));
  function cx() {
    const t = Jm(!0),
      e = t.run(() => mt({}));
    let n = [],
      r = [];
    const i = tc({
      install(o) {
        Ns(i),
          (i._a = o),
          o.provide(Q_, i),
          (o.config.globalProperties.$pinia = i),
          r.forEach((s) => n.push(s)),
          (r = []);
      },
      use(o) {
        return this._a ? n.push(o) : r.push(o), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e,
    });
    return i;
  }
  const tv = () => {};
  function Kf(t, e, n, r = tv) {
    t.push(e);
    const i = () => {
      const o = t.indexOf(e);
      o > -1 && (t.splice(o, 1), r());
    };
    return !n && Xm() && Jb(i), i;
  }
  function yr(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const fx = (t) => t(),
    Jf = Symbol(),
    Ea = Symbol();
  function su(t, e) {
    t instanceof Map && e instanceof Map
      ? e.forEach((n, r) => t.set(r, n))
      : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n],
        i = t[n];
      ou(i) && ou(r) && t.hasOwnProperty(n) && !qt(r) && !Pn(r) ? (t[n] = su(i, r)) : (t[n] = r);
    }
    return t;
  }
  const hx = Symbol();
  function px(t) {
    return !ou(t) || !Object.prototype.hasOwnProperty.call(t, hx);
  }
  const { assign: Sn } = Object;
  function dx(t) {
    return !!(qt(t) && t.effect);
  }
  function gx(t, e, n, r) {
    const { state: i, actions: o, getters: s } = e,
      a = n.state.value[t];
    let l;
    function u() {
      a || (n.state.value[t] = i ? i() : {});
      const c = b1(n.state.value[t]);
      return Sn(
        c,
        o,
        Object.keys(s || {}).reduce(
          (f, h) => (
            (f[h] = tc(
              ht(() => {
                Ns(n);
                const p = n._s.get(t);
                return s[h].call(p, p);
              }),
            )),
            f
          ),
          {},
        ),
      );
    }
    return (l = ev(t, u, e, n, r, !0)), l;
  }
  function ev(t, e, n = {}, r, i, o) {
    let s;
    const a = Sn({ actions: {} }, n),
      l = { deep: !0 };
    let u,
      c,
      f = [],
      h = [],
      p;
    const d = r.state.value[t];
    !o && !d && (r.state.value[t] = {}), mt({});
    let m;
    function y(B) {
      let $;
      (u = c = !1),
        typeof B == "function"
          ? (B(r.state.value[t]), ($ = { type: yi.patchFunction, storeId: t, events: p }))
          : (su(r.state.value[t], B), ($ = { type: yi.patchObject, payload: B, storeId: t, events: p }));
      const E = (m = Symbol());
      ec().then(() => {
        m === E && (u = !0);
      }),
        (c = !0),
        yr(f, $, r.state.value[t]);
    }
    const b = o
      ? function () {
          const { state: $ } = n,
            E = $ ? $() : {};
          this.$patch((g) => {
            Sn(g, E);
          });
        }
      : tv;
    function _() {
      s.stop(), (f = []), (h = []), r._s.delete(t);
    }
    const w = (B, $ = "") => {
        if (Jf in B) return (B[Ea] = $), B;
        const E = function () {
          Ns(r);
          const g = Array.from(arguments),
            k = [],
            D = [];
          function q(F) {
            k.push(F);
          }
          function O(F) {
            D.push(F);
          }
          yr(h, { args: g, name: E[Ea], store: C, after: q, onError: O });
          let T;
          try {
            T = B.apply(this && this.$id === t ? this : C, g);
          } catch (F) {
            throw (yr(D, F), F);
          }
          return T instanceof Promise
            ? T.then((F) => (yr(k, F), F)).catch((F) => (yr(D, F), Promise.reject(F)))
            : (yr(k, T), T);
        };
        return (E[Jf] = !0), (E[Ea] = $), E;
      },
      v = {
        _p: r,
        $id: t,
        $onAction: Kf.bind(null, h),
        $patch: y,
        $reset: b,
        $subscribe(B, $ = {}) {
          const E = Kf(f, B, $.detached, () => g()),
            g = s.run(() =>
              Re(
                () => r.state.value[t],
                (k) => {
                  ($.flush === "sync" ? c : u) && B({ storeId: t, type: yi.direct, events: p }, k);
                },
                Sn({}, l, $),
              ),
            );
          return E;
        },
        $dispose: _,
      },
      C = Qi(v);
    r._s.set(t, C);
    const z = ((r._a && r._a.runWithContext) || fx)(() => r._e.run(() => (s = Jm()).run(() => e({ action: w }))));
    for (const B in z) {
      const $ = z[B];
      if ((qt($) && !dx($)) || Pn($))
        o || (d && px($) && (qt($) ? ($.value = d[B]) : su($, d[B])), (r.state.value[t][B] = $));
      else if (typeof $ == "function") {
        const E = w($, B);
        (z[B] = E), (a.actions[B] = $);
      }
    }
    return (
      Sn(C, z),
      Sn(dt(C), z),
      Object.defineProperty(C, "$state", {
        get: () => r.state.value[t],
        set: (B) => {
          y(($) => {
            Sn($, B);
          });
        },
      }),
      r._p.forEach((B) => {
        Sn(
          C,
          s.run(() => B({ store: C, app: r._a, pinia: r, options: a })),
        );
      }),
      d && o && n.hydrate && n.hydrate(C.$state, d),
      (u = !0),
      (c = !0),
      C
    );
  }
  /*! #__NO_SIDE_EFFECTS__ */ function no(t, e, n) {
    let r;
    const i = typeof e == "function";
    r = i ? n : e;
    function o(s, a) {
      const l = tw();
      return (
        (s = s || (l ? Ee(Q_, null) : null)),
        s && Ns(s),
        (s = Y_),
        s._s.has(t) || (i ? ev(t, e, r, s) : gx(t, r, s)),
        s._s.get(t)
      );
    }
    return (o.$id = t), o;
  }
  /*!
   * vue-router v4.5.1
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */ const xr = typeof document < "u";
  function nv(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function mx(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || (t.default && nv(t.default));
  }
  const _t = Object.assign;
  function Ca(t, e) {
    const n = {};
    for (const r in e) {
      const i = e[r];
      n[r] = Pe(i) ? i.map(t) : t(i);
    }
    return n;
  }
  const bi = () => {},
    Pe = Array.isArray,
    rv = /#/g,
    _x = /&/g,
    vx = /\//g,
    yx = /=/g,
    bx = /\?/g,
    iv = /\+/g,
    wx = /%5B/g,
    xx = /%5D/g,
    ov = /%5E/g,
    kx = /%60/g,
    sv = /%7B/g,
    Ax = /%7C/g,
    av = /%7D/g,
    Ex = /%20/g;
  function fc(t) {
    return encodeURI("" + t)
      .replace(Ax, "|")
      .replace(wx, "[")
      .replace(xx, "]");
  }
  function Cx(t) {
    return fc(t).replace(sv, "{").replace(av, "}").replace(ov, "^");
  }
  function au(t) {
    return fc(t)
      .replace(iv, "%2B")
      .replace(Ex, "+")
      .replace(rv, "%23")
      .replace(_x, "%26")
      .replace(kx, "`")
      .replace(sv, "{")
      .replace(av, "}")
      .replace(ov, "^");
  }
  function Sx(t) {
    return au(t).replace(yx, "%3D");
  }
  function Tx(t) {
    return fc(t).replace(rv, "%23").replace(bx, "%3F");
  }
  function $x(t) {
    return t == null ? "" : Tx(t).replace(vx, "%2F");
  }
  function Ri(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {}
    return "" + t;
  }
  const Dx = /\/$/,
    Ox = (t) => t.replace(Dx, "");
  function Sa(t, e, n = "/") {
    let r,
      i = {},
      o = "",
      s = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return (
      a < l && a >= 0 && (l = -1),
      l > -1 && ((r = e.slice(0, l)), (o = e.slice(l + 1, a > -1 ? a : e.length)), (i = t(o))),
      a > -1 && ((r = r || e.slice(0, a)), (s = e.slice(a, e.length))),
      (r = Px(r ?? e, n)),
      { fullPath: r + (o && "?") + o + s, path: r, query: i, hash: Ri(s) }
    );
  }
  function Rx(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function Xf(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function Fx(t, e, n) {
    const r = e.matched.length - 1,
      i = n.matched.length - 1;
    return (
      r > -1 &&
      r === i &&
      Fr(e.matched[r], n.matched[i]) &&
      lv(e.params, n.params) &&
      t(e.query) === t(n.query) &&
      e.hash === n.hash
    );
  }
  function Fr(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function lv(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t) if (!zx(t[n], e[n])) return !1;
    return !0;
  }
  function zx(t, e) {
    return Pe(t) ? Yf(t, e) : Pe(e) ? Yf(e, t) : t === e;
  }
  function Yf(t, e) {
    return Pe(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function Px(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"),
      r = t.split("/"),
      i = r[r.length - 1];
    (i === ".." || i === ".") && r.push("");
    let o = n.length - 1,
      s,
      a;
    for (s = 0; s < r.length; s++)
      if (((a = r[s]), a !== "."))
        if (a === "..") o > 1 && o--;
        else break;
    return n.slice(0, o).join("/") + "/" + r.slice(s).join("/");
  }
  const Cn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  };
  var Fi;
  (function (t) {
    (t.pop = "pop"), (t.push = "push");
  })(Fi || (Fi = {}));
  var wi;
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(wi || (wi = {}));
  function Ix(t) {
    if (!t)
      if (xr) {
        const e = document.querySelector("base");
        (t = (e && e.getAttribute("href")) || "/"), (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
      } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Ox(t);
  }
  const jx = /^[^#]+#/;
  function Mx(t, e) {
    return t.replace(jx, "#") + e;
  }
  function Nx(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
      r = t.getBoundingClientRect();
    return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) };
  }
  const Ls = () => ({ left: window.scrollX, top: window.scrollY });
  function Lx(t) {
    let e;
    if ("el" in t) {
      const n = t.el,
        r = typeof n == "string" && n.startsWith("#"),
        i = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!i) return;
      e = Nx(i, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(e)
      : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function Qf(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const lu = new Map();
  function Bx(t, e) {
    lu.set(t, e);
  }
  function qx(t) {
    const e = lu.get(t);
    return lu.delete(t), e;
  }
  let Ux = () => location.protocol + "//" + location.host;
  function uv(t, e) {
    const { pathname: n, search: r, hash: i } = e,
      o = t.indexOf("#");
    if (o > -1) {
      let a = i.includes(t.slice(o)) ? t.slice(o).length : 1,
        l = i.slice(a);
      return l[0] !== "/" && (l = "/" + l), Xf(l, "");
    }
    return Xf(n, t) + r + i;
  }
  function Zx(t, e, n, r) {
    let i = [],
      o = [],
      s = null;
    const a = ({ state: h }) => {
      const p = uv(t, location),
        d = n.value,
        m = e.value;
      let y = 0;
      if (h) {
        if (((n.value = p), (e.value = h), s && s === d)) {
          s = null;
          return;
        }
        y = m ? h.position - m.position : 0;
      } else r(p);
      i.forEach((b) => {
        b(n.value, d, { delta: y, type: Fi.pop, direction: y ? (y > 0 ? wi.forward : wi.back) : wi.unknown });
      });
    };
    function l() {
      s = n.value;
    }
    function u(h) {
      i.push(h);
      const p = () => {
        const d = i.indexOf(h);
        d > -1 && i.splice(d, 1);
      };
      return o.push(p), p;
    }
    function c() {
      const { history: h } = window;
      h.state && h.replaceState(_t({}, h.state, { scroll: Ls() }), "");
    }
    function f() {
      for (const h of o) h();
      (o = []), window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
    }
    return (
      window.addEventListener("popstate", a),
      window.addEventListener("beforeunload", c, { passive: !0 }),
      { pauseListeners: l, listen: u, destroy: f }
    );
  }
  function th(t, e, n, r = !1, i = !1) {
    return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: i ? Ls() : null };
  }
  function Vx(t) {
    const { history: e, location: n } = window,
      r = { value: uv(t, n) },
      i = { value: e.state };
    i.value ||
      o(
        r.value,
        { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function o(l, u, c) {
      const f = t.indexOf("#"),
        h = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : Ux() + t + l;
      try {
        e[c ? "replaceState" : "pushState"](u, "", h), (i.value = u);
      } catch (p) {
        console.error(p), n[c ? "replace" : "assign"](h);
      }
    }
    function s(l, u) {
      const c = _t({}, e.state, th(i.value.back, l, i.value.forward, !0), u, { position: i.value.position });
      o(l, c, !0), (r.value = l);
    }
    function a(l, u) {
      const c = _t({}, i.value, e.state, { forward: l, scroll: Ls() });
      o(c.current, c, !0);
      const f = _t({}, th(r.value, l, null), { position: c.position + 1 }, u);
      o(l, f, !1), (r.value = l);
    }
    return { location: r, state: i, push: a, replace: s };
  }
  function Hx(t) {
    t = Ix(t);
    const e = Vx(t),
      n = Zx(t, e.state, e.location, e.replace);
    function r(o, s = !0) {
      s || n.pauseListeners(), history.go(o);
    }
    const i = _t({ location: "", base: t, go: r, createHref: Mx.bind(null, t) }, e, n);
    return (
      Object.defineProperty(i, "location", { enumerable: !0, get: () => e.location.value }),
      Object.defineProperty(i, "state", { enumerable: !0, get: () => e.state.value }),
      i
    );
  }
  function Gx(t) {
    return typeof t == "string" || (t && typeof t == "object");
  }
  function cv(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const fv = Symbol("");
  var eh;
  (function (t) {
    (t[(t.aborted = 4)] = "aborted"), (t[(t.cancelled = 8)] = "cancelled"), (t[(t.duplicated = 16)] = "duplicated");
  })(eh || (eh = {}));
  function zr(t, e) {
    return _t(new Error(), { type: t, [fv]: !0 }, e);
  }
  function un(t, e) {
    return t instanceof Error && fv in t && (e == null || !!(t.type & e));
  }
  const nh = "[^/]+?",
    Wx = { sensitive: !1, strict: !1, start: !0, end: !0 },
    Kx = /[.+*?^${}()[\]/\\]/g;
  function Jx(t, e) {
    const n = _t({}, Wx, e),
      r = [];
    let i = n.start ? "^" : "";
    const o = [];
    for (const u of t) {
      const c = u.length ? [] : [90];
      n.strict && !u.length && (i += "/");
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        let p = 40 + (n.sensitive ? 0.25 : 0);
        if (h.type === 0) f || (i += "/"), (i += h.value.replace(Kx, "\\$&")), (p += 40);
        else if (h.type === 1) {
          const { value: d, repeatable: m, optional: y, regexp: b } = h;
          o.push({ name: d, repeatable: m, optional: y });
          const _ = b || nh;
          if (_ !== nh) {
            p += 10;
            try {
              new RegExp(`(${_})`);
            } catch (v) {
              throw new Error(`Invalid custom RegExp for param "${d}" (${_}): ` + v.message);
            }
          }
          let w = m ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          f || (w = y && u.length < 2 ? `(?:/${w})` : "/" + w),
            y && (w += "?"),
            (i += w),
            (p += 20),
            y && (p += -8),
            m && (p += -20),
            _ === ".*" && (p += -50);
        }
        c.push(p);
      }
      r.push(c);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += 0.7000000000000001;
    }
    n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
    const s = new RegExp(i, n.sensitive ? "" : "i");
    function a(u) {
      const c = u.match(s),
        f = {};
      if (!c) return null;
      for (let h = 1; h < c.length; h++) {
        const p = c[h] || "",
          d = o[h - 1];
        f[d.name] = p && d.repeatable ? p.split("/") : p;
      }
      return f;
    }
    function l(u) {
      let c = "",
        f = !1;
      for (const h of t) {
        (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
        for (const p of h)
          if (p.type === 0) c += p.value;
          else if (p.type === 1) {
            const { value: d, repeatable: m, optional: y } = p,
              b = d in u ? u[d] : "";
            if (Pe(b) && !m)
              throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);
            const _ = Pe(b) ? b.join("/") : b;
            if (!_)
              if (y) h.length < 2 && (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
              else throw new Error(`Missing required param "${d}"`);
            c += _;
          }
      }
      return c || "/";
    }
    return { re: s, score: r, keys: o, parse: a, stringify: l };
  }
  function Xx(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
      const r = e[n] - t[n];
      if (r) return r;
      n++;
    }
    return t.length < e.length
      ? t.length === 1 && t[0] === 80
        ? -1
        : 1
      : t.length > e.length
        ? e.length === 1 && e[0] === 80
          ? 1
          : -1
        : 0;
  }
  function hv(t, e) {
    let n = 0;
    const r = t.score,
      i = e.score;
    for (; n < r.length && n < i.length; ) {
      const o = Xx(r[n], i[n]);
      if (o) return o;
      n++;
    }
    if (Math.abs(i.length - r.length) === 1) {
      if (rh(r)) return 1;
      if (rh(i)) return -1;
    }
    return i.length - r.length;
  }
  function rh(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const Yx = { type: 0, value: "" },
    Qx = /[a-zA-Z0-9_]/;
  function tk(t) {
    if (!t) return [[]];
    if (t === "/") return [[Yx]];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
    function e(p) {
      throw new Error(`ERR (${n})/"${u}": ${p}`);
    }
    let n = 0,
      r = n;
    const i = [];
    let o;
    function s() {
      o && i.push(o), (o = []);
    }
    let a = 0,
      l,
      u = "",
      c = "";
    function f() {
      u &&
        (n === 0
          ? o.push({ type: 0, value: u })
          : n === 1 || n === 2 || n === 3
            ? (o.length > 1 &&
                (l === "*" || l === "+") &&
                e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
              o.push({
                type: 1,
                value: u,
                regexp: c,
                repeatable: l === "*" || l === "+",
                optional: l === "*" || l === "?",
              }))
            : e("Invalid state to consume buffer"),
        (u = ""));
    }
    function h() {
      u += l;
    }
    for (; a < t.length; ) {
      if (((l = t[a++]), l === "\\" && n !== 2)) {
        (r = n), (n = 4);
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (u && f(), s()) : l === ":" ? (f(), (n = 1)) : h();
          break;
        case 4:
          h(), (n = r);
          break;
        case 1:
          l === "(" ? (n = 2) : Qx.test(l) ? h() : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
          break;
        case 2:
          l === ")" ? (c[c.length - 1] == "\\" ? (c = c.slice(0, -1) + l) : (n = 3)) : (c += l);
          break;
        case 3:
          f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = "");
          break;
        default:
          e("Unknown state");
          break;
      }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${u}"`), f(), s(), i;
  }
  function ek(t, e, n) {
    const r = Jx(tk(t.path), n),
      i = _t(r, { record: t, parent: e, children: [], alias: [] });
    return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
  }
  function nk(t, e) {
    const n = [],
      r = new Map();
    e = ah({ strict: !1, end: !0, sensitive: !1 }, e);
    function i(f) {
      return r.get(f);
    }
    function o(f, h, p) {
      const d = !p,
        m = oh(f);
      m.aliasOf = p && p.record;
      const y = ah(e, f),
        b = [m];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [f.alias] : f.alias;
        for (const C of v)
          b.push(
            oh(_t({}, m, { components: p ? p.record.components : m.components, path: C, aliasOf: p ? p.record : m })),
          );
      }
      let _, w;
      for (const v of b) {
        const { path: C } = v;
        if (h && C[0] !== "/") {
          const R = h.record.path,
            z = R[R.length - 1] === "/" ? "" : "/";
          v.path = h.record.path + (C && z + C);
        }
        if (
          ((_ = ek(v, h, y)),
          p ? p.alias.push(_) : ((w = w || _), w !== _ && w.alias.push(_), d && f.name && !sh(_) && s(f.name)),
          pv(_) && l(_),
          m.children)
        ) {
          const R = m.children;
          for (let z = 0; z < R.length; z++) o(R[z], _, p && p.children[z]);
        }
        p = p || _;
      }
      return w
        ? () => {
            s(w);
          }
        : bi;
    }
    function s(f) {
      if (cv(f)) {
        const h = r.get(f);
        h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(s), h.alias.forEach(s));
      } else {
        const h = n.indexOf(f);
        h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(s), f.alias.forEach(s));
      }
    }
    function a() {
      return n;
    }
    function l(f) {
      const h = ok(f, n);
      n.splice(h, 0, f), f.record.name && !sh(f) && r.set(f.record.name, f);
    }
    function u(f, h) {
      let p,
        d = {},
        m,
        y;
      if ("name" in f && f.name) {
        if (((p = r.get(f.name)), !p)) throw zr(1, { location: f });
        (y = p.record.name),
          (d = _t(
            ih(
              h.params,
              p.keys
                .filter((w) => !w.optional)
                .concat(p.parent ? p.parent.keys.filter((w) => w.optional) : [])
                .map((w) => w.name),
            ),
            f.params &&
              ih(
                f.params,
                p.keys.map((w) => w.name),
              ),
          )),
          (m = p.stringify(d));
      } else if (f.path != null)
        (m = f.path), (p = n.find((w) => w.re.test(m))), p && ((d = p.parse(m)), (y = p.record.name));
      else {
        if (((p = h.name ? r.get(h.name) : n.find((w) => w.re.test(h.path))), !p))
          throw zr(1, { location: f, currentLocation: h });
        (y = p.record.name), (d = _t({}, h.params, f.params)), (m = p.stringify(d));
      }
      const b = [];
      let _ = p;
      for (; _; ) b.unshift(_.record), (_ = _.parent);
      return { name: y, path: m, params: d, matched: b, meta: ik(b) };
    }
    t.forEach((f) => o(f));
    function c() {
      (n.length = 0), r.clear();
    }
    return { addRoute: o, resolve: u, removeRoute: s, clearRoutes: c, getRoutes: a, getRecordMatcher: i };
  }
  function ih(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function oh(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: rk(t),
      children: t.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && { default: t.component },
    };
    return Object.defineProperty(e, "mods", { value: {} }), e;
  }
  function rk(t) {
    const e = {},
      n = t.props || !1;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function sh(t) {
    for (; t; ) {
      if (t.record.aliasOf) return !0;
      t = t.parent;
    }
    return !1;
  }
  function ik(t) {
    return t.reduce((e, n) => _t(e, n.meta), {});
  }
  function ah(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function ok(t, e) {
    let n = 0,
      r = e.length;
    for (; n !== r; ) {
      const o = (n + r) >> 1;
      hv(t, e[o]) < 0 ? (r = o) : (n = o + 1);
    }
    const i = sk(t);
    return i && (r = e.lastIndexOf(i, r - 1)), r;
  }
  function sk(t) {
    let e = t;
    for (; (e = e.parent); ) if (pv(e) && hv(t, e) === 0) return e;
  }
  function pv({ record: t }) {
    return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect);
  }
  function ak(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let i = 0; i < r.length; ++i) {
      const o = r[i].replace(iv, " "),
        s = o.indexOf("="),
        a = Ri(s < 0 ? o : o.slice(0, s)),
        l = s < 0 ? null : Ri(o.slice(s + 1));
      if (a in e) {
        let u = e[a];
        Pe(u) || (u = e[a] = [u]), u.push(l);
      } else e[a] = l;
    }
    return e;
  }
  function lh(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (((n = Sx(n)), r == null)) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (Pe(r) ? r.map((o) => o && au(o)) : [r && au(r)]).forEach((o) => {
        o !== void 0 && ((e += (e.length ? "&" : "") + n), o != null && (e += "=" + o));
      });
    }
    return e;
  }
  function lk(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = Pe(r) ? r.map((i) => (i == null ? null : "" + i)) : r == null ? r : "" + r);
    }
    return e;
  }
  const uk = Symbol(""),
    uh = Symbol(""),
    Bs = Symbol(""),
    hc = Symbol(""),
    uu = Symbol("");
  function Yr() {
    let t = [];
    function e(r) {
      return (
        t.push(r),
        () => {
          const i = t.indexOf(r);
          i > -1 && t.splice(i, 1);
        }
      );
    }
    function n() {
      t = [];
    }
    return { add: e, list: () => t.slice(), reset: n };
  }
  function Dn(t, e, n, r, i, o = (s) => s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return () =>
      new Promise((a, l) => {
        const u = (h) => {
            h === !1
              ? l(zr(4, { from: n, to: e }))
              : h instanceof Error
                ? l(h)
                : Gx(h)
                  ? l(zr(2, { from: e, to: h }))
                  : (s && r.enterCallbacks[i] === s && typeof h == "function" && s.push(h), a());
          },
          c = o(() => t.call(r && r.instances[i], e, n, u));
        let f = Promise.resolve(c);
        t.length < 3 && (f = f.then(u)), f.catch((h) => l(h));
      });
  }
  function Ta(t, e, n, r, i = (o) => o()) {
    const o = [];
    for (const s of t)
      for (const a in s.components) {
        let l = s.components[a];
        if (!(e !== "beforeRouteEnter" && !s.instances[a]))
          if (nv(l)) {
            const c = (l.__vccOpts || l)[e];
            c && o.push(Dn(c, n, r, s, a, i));
          } else {
            let u = l();
            o.push(() =>
              u.then((c) => {
                if (!c) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
                const f = mx(c) ? c.default : c;
                (s.mods[a] = c), (s.components[a] = f);
                const p = (f.__vccOpts || f)[e];
                return p && Dn(p, n, r, s, a, i)();
              }),
            );
          }
      }
    return o;
  }
  function ch(t) {
    const e = Ee(Bs),
      n = Ee(hc),
      r = ht(() => {
        const l = V(t.to);
        return e.resolve(l);
      }),
      i = ht(() => {
        const { matched: l } = r.value,
          { length: u } = l,
          c = l[u - 1],
          f = n.matched;
        if (!c || !f.length) return -1;
        const h = f.findIndex(Fr.bind(null, c));
        if (h > -1) return h;
        const p = fh(l[u - 2]);
        return u > 1 && fh(c) === p && f[f.length - 1].path !== p ? f.findIndex(Fr.bind(null, l[u - 2])) : h;
      }),
      o = ht(() => i.value > -1 && dk(n.params, r.value.params)),
      s = ht(() => i.value > -1 && i.value === n.matched.length - 1 && lv(n.params, r.value.params));
    function a(l = {}) {
      if (pk(l)) {
        const u = e[V(t.replace) ? "replace" : "push"](V(t.to)).catch(bi);
        return (
          t.viewTransition &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            document.startViewTransition(() => u),
          u
        );
      }
      return Promise.resolve();
    }
    return { route: r, href: ht(() => r.value.href), isActive: o, isExactActive: s, navigate: a };
  }
  function ck(t) {
    return t.length === 1 ? t[0] : t;
  }
  const fk = Gt({
      name: "RouterLink",
      compatConfig: { MODE: 3 },
      props: {
        to: { type: [String, Object], required: !0 },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: { type: String, default: "page" },
        viewTransition: Boolean,
      },
      useLink: ch,
      setup(t, { slots: e }) {
        const n = Qi(ch(t)),
          { options: r } = Ee(Bs),
          i = ht(() => ({
            [hh(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [hh(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
          }));
        return () => {
          const o = e.default && ck(e.default(n));
          return t.custom
            ? o
            : K_(
                "a",
                {
                  "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                  href: n.href,
                  onClick: n.navigate,
                  class: i.value,
                },
                o,
              );
        };
      },
    }),
    hk = fk;
  function pk(t) {
    if (
      !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
      !t.defaultPrevented &&
      !(t.button !== void 0 && t.button !== 0)
    ) {
      if (t.currentTarget && t.currentTarget.getAttribute) {
        const e = t.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(e)) return;
      }
      return t.preventDefault && t.preventDefault(), !0;
    }
  }
  function dk(t, e) {
    for (const n in e) {
      const r = e[n],
        i = t[n];
      if (typeof r == "string") {
        if (r !== i) return !1;
      } else if (!Pe(i) || i.length !== r.length || r.some((o, s) => o !== i[s])) return !1;
    }
    return !0;
  }
  function fh(t) {
    return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
  }
  const hh = (t, e, n) => t ?? e ?? n,
    gk = Gt({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(t, { attrs: e, slots: n }) {
        const r = Ee(uu),
          i = ht(() => t.route || r.value),
          o = Ee(uh, 0),
          s = ht(() => {
            let u = V(o);
            const { matched: c } = i.value;
            let f;
            for (; (f = c[u]) && !f.components; ) u++;
            return u;
          }),
          a = ht(() => i.value.matched[s.value]);
        jo(
          uh,
          ht(() => s.value + 1),
        ),
          jo(uk, a),
          jo(uu, i);
        const l = mt();
        return (
          Re(
            () => [l.value, a.value, t.name],
            ([u, c, f], [h, p, d]) => {
              c &&
                ((c.instances[f] = u),
                p &&
                  p !== c &&
                  u &&
                  u === h &&
                  (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards),
                  c.updateGuards.size || (c.updateGuards = p.updateGuards))),
                u && c && (!p || !Fr(c, p) || !h) && (c.enterCallbacks[f] || []).forEach((m) => m(u));
            },
            { flush: "post" },
          ),
          () => {
            const u = i.value,
              c = t.name,
              f = a.value,
              h = f && f.components[c];
            if (!h) return ph(n.default, { Component: h, route: u });
            const p = f.props[c],
              d = p ? (p === !0 ? u.params : typeof p == "function" ? p(u) : p) : null,
              y = K_(
                h,
                _t({}, d, e, {
                  onVnodeUnmounted: (b) => {
                    b.component.isUnmounted && (f.instances[c] = null);
                  },
                  ref: l,
                }),
              );
            return ph(n.default, { Component: y, route: u }) || y;
          }
        );
      },
    });
  function ph(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const dv = gk;
  function mk(t) {
    const e = nk(t.routes, t),
      n = t.parseQuery || ak,
      r = t.stringifyQuery || lh,
      i = t.history,
      o = Yr(),
      s = Yr(),
      a = Yr(),
      l = Yl(Cn);
    let u = Cn;
    xr && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ca.bind(null, (j) => "" + j),
      f = Ca.bind(null, $x),
      h = Ca.bind(null, Ri);
    function p(j, X) {
      let W, tt;
      return cv(j) ? ((W = e.getRecordMatcher(j)), (tt = X)) : (tt = j), e.addRoute(tt, W);
    }
    function d(j) {
      const X = e.getRecordMatcher(j);
      X && e.removeRoute(X);
    }
    function m() {
      return e.getRoutes().map((j) => j.record);
    }
    function y(j) {
      return !!e.getRecordMatcher(j);
    }
    function b(j, X) {
      if (((X = _t({}, X || l.value)), typeof j == "string")) {
        const S = Sa(n, j, X.path),
          I = e.resolve({ path: S.path }, X),
          L = i.createHref(S.fullPath);
        return _t(S, I, { params: h(I.params), hash: Ri(S.hash), redirectedFrom: void 0, href: L });
      }
      let W;
      if (j.path != null) W = _t({}, j, { path: Sa(n, j.path, X.path).path });
      else {
        const S = _t({}, j.params);
        for (const I in S) S[I] == null && delete S[I];
        (W = _t({}, j, { params: f(S) })), (X.params = f(X.params));
      }
      const tt = e.resolve(W, X),
        kt = j.hash || "";
      tt.params = c(h(tt.params));
      const x = Rx(r, _t({}, j, { hash: Cx(kt), path: tt.path })),
        A = i.createHref(x);
      return _t({ fullPath: x, hash: kt, query: r === lh ? lk(j.query) : j.query || {} }, tt, {
        redirectedFrom: void 0,
        href: A,
      });
    }
    function _(j) {
      return typeof j == "string" ? Sa(n, j, l.value.path) : _t({}, j);
    }
    function w(j, X) {
      if (u !== j) return zr(8, { from: X, to: j });
    }
    function v(j) {
      return z(j);
    }
    function C(j) {
      return v(_t(_(j), { replace: !0 }));
    }
    function R(j) {
      const X = j.matched[j.matched.length - 1];
      if (X && X.redirect) {
        const { redirect: W } = X;
        let tt = typeof W == "function" ? W(j) : W;
        return (
          typeof tt == "string" &&
            ((tt = tt.includes("?") || tt.includes("#") ? (tt = _(tt)) : { path: tt }), (tt.params = {})),
          _t({ query: j.query, hash: j.hash, params: tt.path != null ? {} : j.params }, tt)
        );
      }
    }
    function z(j, X) {
      const W = (u = b(j)),
        tt = l.value,
        kt = j.state,
        x = j.force,
        A = j.replace === !0,
        S = R(W);
      if (S)
        return z(_t(_(S), { state: typeof S == "object" ? _t({}, kt, S.state) : kt, force: x, replace: A }), X || W);
      const I = W;
      I.redirectedFrom = X;
      let L;
      return (
        !x && Fx(r, tt, W) && ((L = zr(16, { to: I, from: tt })), Zt(tt, tt, !0, !1)),
        (L ? Promise.resolve(L) : E(I, tt))
          .catch((M) => (un(M) ? (un(M, 2) ? M : ut(M)) : J(M, I, tt)))
          .then((M) => {
            if (M) {
              if (un(M, 2))
                return z(
                  _t({ replace: A }, _(M.to), {
                    state: typeof M.to == "object" ? _t({}, kt, M.to.state) : kt,
                    force: x,
                  }),
                  X || I,
                );
            } else M = k(I, tt, !0, A, kt);
            return g(I, tt, M), M;
          })
      );
    }
    function B(j, X) {
      const W = w(j, X);
      return W ? Promise.reject(W) : Promise.resolve();
    }
    function $(j) {
      const X = xe.values().next().value;
      return X && typeof X.runWithContext == "function" ? X.runWithContext(j) : j();
    }
    function E(j, X) {
      let W;
      const [tt, kt, x] = _k(j, X);
      W = Ta(tt.reverse(), "beforeRouteLeave", j, X);
      for (const S of tt)
        S.leaveGuards.forEach((I) => {
          W.push(Dn(I, j, X));
        });
      const A = B.bind(null, j, X);
      return (
        W.push(A),
        ke(W)
          .then(() => {
            W = [];
            for (const S of o.list()) W.push(Dn(S, j, X));
            return W.push(A), ke(W);
          })
          .then(() => {
            W = Ta(kt, "beforeRouteUpdate", j, X);
            for (const S of kt)
              S.updateGuards.forEach((I) => {
                W.push(Dn(I, j, X));
              });
            return W.push(A), ke(W);
          })
          .then(() => {
            W = [];
            for (const S of x)
              if (S.beforeEnter)
                if (Pe(S.beforeEnter)) for (const I of S.beforeEnter) W.push(Dn(I, j, X));
                else W.push(Dn(S.beforeEnter, j, X));
            return W.push(A), ke(W);
          })
          .then(
            () => (
              j.matched.forEach((S) => (S.enterCallbacks = {})),
              (W = Ta(x, "beforeRouteEnter", j, X, $)),
              W.push(A),
              ke(W)
            ),
          )
          .then(() => {
            W = [];
            for (const S of s.list()) W.push(Dn(S, j, X));
            return W.push(A), ke(W);
          })
          .catch((S) => (un(S, 8) ? S : Promise.reject(S)))
      );
    }
    function g(j, X, W) {
      a.list().forEach((tt) => $(() => tt(j, X, W)));
    }
    function k(j, X, W, tt, kt) {
      const x = w(j, X);
      if (x) return x;
      const A = X === Cn,
        S = xr ? history.state : {};
      W && (tt || A ? i.replace(j.fullPath, _t({ scroll: A && S && S.scroll }, kt)) : i.push(j.fullPath, kt)),
        (l.value = j),
        Zt(j, X, W, A),
        ut();
    }
    let D;
    function q() {
      D ||
        (D = i.listen((j, X, W) => {
          if (!En.listening) return;
          const tt = b(j),
            kt = R(tt);
          if (kt) {
            z(_t(kt, { replace: !0, force: !0 }), tt).catch(bi);
            return;
          }
          u = tt;
          const x = l.value;
          xr && Bx(Qf(x.fullPath, W.delta), Ls()),
            E(tt, x)
              .catch((A) =>
                un(A, 12)
                  ? A
                  : un(A, 2)
                    ? (z(_t(_(A.to), { force: !0 }), tt)
                        .then((S) => {
                          un(S, 20) && !W.delta && W.type === Fi.pop && i.go(-1, !1);
                        })
                        .catch(bi),
                      Promise.reject())
                    : (W.delta && i.go(-W.delta, !1), J(A, tt, x)),
              )
              .then((A) => {
                (A = A || k(tt, x, !1)),
                  A && (W.delta && !un(A, 8) ? i.go(-W.delta, !1) : W.type === Fi.pop && un(A, 20) && i.go(-1, !1)),
                  g(tt, x, A);
              })
              .catch(bi);
        }));
    }
    let O = Yr(),
      T = Yr(),
      F;
    function J(j, X, W) {
      ut(j);
      const tt = T.list();
      return tt.length ? tt.forEach((kt) => kt(j, X, W)) : console.error(j), Promise.reject(j);
    }
    function xt() {
      return F && l.value !== Cn
        ? Promise.resolve()
        : new Promise((j, X) => {
            O.add([j, X]);
          });
    }
    function ut(j) {
      return F || ((F = !j), q(), O.list().forEach(([X, W]) => (j ? W(j) : X())), O.reset()), j;
    }
    function Zt(j, X, W, tt) {
      const { scrollBehavior: kt } = t;
      if (!xr || !kt) return Promise.resolve();
      const x = (!W && qx(Qf(j.fullPath, 0))) || ((tt || !W) && history.state && history.state.scroll) || null;
      return ec()
        .then(() => kt(j, X, x))
        .then((A) => A && Lx(A))
        .catch((A) => J(A, j, X));
    }
    const ft = (j) => i.go(j);
    let At;
    const xe = new Set(),
      En = {
        currentRoute: l,
        listening: !0,
        addRoute: p,
        removeRoute: d,
        clearRoutes: e.clearRoutes,
        hasRoute: y,
        getRoutes: m,
        resolve: b,
        options: t,
        push: v,
        replace: C,
        go: ft,
        back: () => ft(-1),
        forward: () => ft(1),
        beforeEach: o.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: T.add,
        isReady: xt,
        install(j) {
          const X = this;
          j.component("RouterLink", hk),
            j.component("RouterView", dv),
            (j.config.globalProperties.$router = X),
            Object.defineProperty(j.config.globalProperties, "$route", { enumerable: !0, get: () => V(l) }),
            xr && !At && l.value === Cn && ((At = !0), v(i.location).catch((kt) => {}));
          const W = {};
          for (const kt in Cn) Object.defineProperty(W, kt, { get: () => l.value[kt], enumerable: !0 });
          j.provide(Bs, X), j.provide(hc, h_(W)), j.provide(uu, l);
          const tt = j.unmount;
          xe.add(j),
            (j.unmount = function () {
              xe.delete(j), xe.size < 1 && ((u = Cn), D && D(), (D = null), (l.value = Cn), (At = !1), (F = !1)), tt();
            });
        },
      };
    function ke(j) {
      return j.reduce((X, W) => X.then(() => $(W)), Promise.resolve());
    }
    return En;
  }
  function _k(t, e) {
    const n = [],
      r = [],
      i = [],
      o = Math.max(e.matched.length, t.matched.length);
    for (let s = 0; s < o; s++) {
      const a = e.matched[s];
      a && (t.matched.find((u) => Fr(u, a)) ? r.push(a) : n.push(a));
      const l = t.matched[s];
      l && (e.matched.find((u) => Fr(u, l)) || i.push(l));
    }
    return [n, r, i];
  }
  function qs() {
    return Ee(Bs);
  }
  function Us(t) {
    return Ee(hc);
  }
  const dh = 1e3 * 60,
    vk = no("alive", () => {
      const t = mt(0);
      return (
        setInterval(async () => {
          const e = "/health";
          try {
            const n = await fetch(e, { method: "GET", headers: { "Content-Type": "application/json" } });
            if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
            return n.json();
          } catch (n) {
            throw (window.location.reload(), new Error(n));
          }
          t.value = t.value + 1;
        }, dh),
        console.log("Ping store created, timeout: ", dh),
        { isAlive: t }
      );
    }),
    yk = Gt({
      __name: "App",
      setup(t) {
        return vk(), (e, n) => (Y(), Q("main", null, [at(V(dv))]));
      },
    });
  function gv(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function mv(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function _v(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function vv(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function gh(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function bk(t, e) {
    return (
      Y(),
      Q(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          N("path", {
            "fill-rule": "evenodd",
            d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  var wk = Object.defineProperty,
    xk = (t, e, n) => (e in t ? wk(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    st = (t, e, n) => xk(t, typeof e != "symbol" ? e + "" : e, n);
  const Xt = [];
  for (let t = 0; t < 256; ++t) Xt.push((t + 256).toString(16).slice(1));
  function kk(t, e = 0) {
    return (
      Xt[t[e + 0]] +
      Xt[t[e + 1]] +
      Xt[t[e + 2]] +
      Xt[t[e + 3]] +
      "-" +
      Xt[t[e + 4]] +
      Xt[t[e + 5]] +
      "-" +
      Xt[t[e + 6]] +
      Xt[t[e + 7]] +
      "-" +
      Xt[t[e + 8]] +
      Xt[t[e + 9]] +
      "-" +
      Xt[t[e + 10]] +
      Xt[t[e + 11]] +
      Xt[t[e + 12]] +
      Xt[t[e + 13]] +
      Xt[t[e + 14]] +
      Xt[t[e + 15]]
    ).toLowerCase();
  }
  let $a;
  const Ak = new Uint8Array(16);
  function Ek() {
    if (!$a) {
      if (typeof crypto > "u" || !crypto.getRandomValues)
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
        );
      $a = crypto.getRandomValues.bind(crypto);
    }
    return $a(Ak);
  }
  const Ck = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    mh = { randomUUID: Ck };
  function Zs(t, e, n) {
    var r;
    if (mh.randomUUID && !e && !t) return mh.randomUUID();
    t = t || {};
    const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? Ek();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), e)) {
      if (((n = n || 0), n < 0 || n + 16 > e.length))
        throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
      for (let o = 0; o < 16; ++o) e[n + o] = i[o];
      return e;
    }
    return kk(i);
  }
  const Sk = { opacity: { background: 0.3, border: 0.6, backgroundActive: 0.8, borderActive: 0.9, gutter: 0.3 } },
    Tk = (t) => {
      const e = parseInt(t.slice(1), 16),
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        i = e & 255;
      return `${n},${r},${i}`;
    },
    pc = (t, e) => {
      const n = { ...Sk.opacity },
        r = Tk(t);
      return {
        border: `rgba(${r},${n.border})`,
        background: `rgba(${r},${n.background})`,
        borderActive: `rgba(${r},${n.borderActive})`,
        backgroundActive: `rgba(${r},${n.backgroundActive})`,
        gutterColor: `rgba(${r},${n.gutter})`,
        color: t,
      };
    },
    $k = (t, e) => {
      const n = {};
      return (
        Object.entries(t).forEach(([r, i]) => {
          n[r] = pc(i);
        }),
        n
      );
    },
    _h = { INVALID_ANNOTATION: "Invalid annotation", INVALID_LINE: "Invalid line" },
    yv = class si {
      constructor() {
        st(this, "_verboseEnabled"), st(this, "_debugEnabled");
      }
      static get instance() {
        return si._instance || (si._instance = new si()), si._instance;
      }
      static setDebug(e) {
        this.instance._debugEnabled = e;
      }
      static setVerbose(e) {
        this.instance._verboseEnabled = e;
      }
      static get verboseEnabled() {
        return this.instance._verboseEnabled;
      }
      static get debugEnabled() {
        return this.instance._debugEnabled;
      }
      static warn(...e) {
        console.warn(...e);
      }
      static time(e, n) {
        const r = Date.now() - e,
          i = `TIMER: ${n} took ${r} ms , ${r / 1e3} s`;
        r > 1e3 ? console.warn(i) : console.debug(i);
      }
      static debug(...e) {
        this.debugEnabled && console.log(e);
      }
      static verbose(...e) {
        this.verboseEnabled && console.debug(e);
      }
    };
  st(yv, "_instance");
  let Ce = yv;
  class bv {
    constructor() {
      st(this, "eventMap", new Map()), st(this, "errorSet", []), this.eventMap.set("all", []);
    }
    register(e, n) {
      this.eventMap.has(e) || this.eventMap.set(e, []), this.eventMap.get(e).push(n);
    }
    registerError(e) {
      this.errorSet.push(e);
    }
    sendError(e, n, ...r) {
      Ce.warn(`[${_h[e]}] - `, n, ...r),
        this.errorSet.forEach((i) => i({ code: e, error: _h[e], message: n, params: r }));
    }
    sendEvent(e, n, r) {
      const i = [this.eventMap.get(e), this.eventMap.get("all")].flat();
      for (const o of i) o && o({ event: e, mouseEvent: n, data: r });
    }
  }
  var wv = typeof global == "object" && global && global.Object === Object && global,
    Dk = typeof self == "object" && self && self.Object === Object && self,
    tn = wv || Dk || Function("return this")(),
    Se = tn.Symbol,
    xv = Object.prototype,
    Ok = xv.hasOwnProperty,
    Rk = xv.toString,
    Qr = Se ? Se.toStringTag : void 0;
  function Fk(t) {
    var e = Ok.call(t, Qr),
      n = t[Qr];
    try {
      t[Qr] = void 0;
      var r = !0;
    } catch {}
    var i = Rk.call(t);
    return r && (e ? (t[Qr] = n) : delete t[Qr]), i;
  }
  var zk = Object.prototype,
    Pk = zk.toString;
  function Ik(t) {
    return Pk.call(t);
  }
  var jk = "[object Null]",
    Mk = "[object Undefined]",
    vh = Se ? Se.toStringTag : void 0;
  function ar(t) {
    return t == null ? (t === void 0 ? Mk : jk) : vh && vh in Object(t) ? Fk(t) : Ik(t);
  }
  function Ye(t) {
    return t != null && typeof t == "object";
  }
  var Nk = "[object Symbol]";
  function Pr(t) {
    return typeof t == "symbol" || (Ye(t) && ar(t) == Nk);
  }
  function Lo(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
    return i;
  }
  var fe = Array.isArray,
    yh = Se ? Se.prototype : void 0,
    bh = yh ? yh.toString : void 0;
  function kv(t) {
    if (typeof t == "string") return t;
    if (fe(t)) return Lo(t, kv) + "";
    if (Pr(t)) return bh ? bh.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function Ie(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function Vs(t) {
    return t;
  }
  var Lk = "[object AsyncFunction]",
    Bk = "[object Function]",
    qk = "[object GeneratorFunction]",
    Uk = "[object Proxy]";
  function dc(t) {
    if (!Ie(t)) return !1;
    var e = ar(t);
    return e == Bk || e == qk || e == Lk || e == Uk;
  }
  var Da = tn["__core-js_shared__"],
    wh = (function () {
      var t = /[^.]+$/.exec((Da && Da.keys && Da.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function Zk(t) {
    return !!wh && wh in t;
  }
  var Vk = Function.prototype,
    Hk = Vk.toString;
  function lr(t) {
    if (t != null) {
      try {
        return Hk.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var Gk = /[\\^$.*+?()[\]{}|]/g,
    Wk = /^\[object .+?Constructor\]$/,
    Kk = Function.prototype,
    Jk = Object.prototype,
    Xk = Kk.toString,
    Yk = Jk.hasOwnProperty,
    Qk = RegExp(
      "^" +
        Xk.call(Yk)
          .replace(Gk, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function tA(t) {
    if (!Ie(t) || Zk(t)) return !1;
    var e = dc(t) ? Qk : Wk;
    return e.test(lr(t));
  }
  function eA(t, e) {
    return t == null ? void 0 : t[e];
  }
  function ur(t, e) {
    var n = eA(t, e);
    return tA(n) ? n : void 0;
  }
  var cu = ur(tn, "WeakMap"),
    xh = Object.create,
    nA = (function () {
      function t() {}
      return function (e) {
        if (!Ie(e)) return {};
        if (xh) return xh(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function rA(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }
    return t.apply(e, n);
  }
  function iA(t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
    return e;
  }
  var oA = 800,
    sA = 16,
    aA = Date.now;
  function lA(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = aA(),
        i = sA - (r - n);
      if (((n = r), i > 0)) {
        if (++e >= oA) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function uA(t) {
    return function () {
      return t;
    };
  }
  var rs = (function () {
      try {
        var t = ur(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    cA = rs
      ? function (t, e) {
          return rs(t, "toString", { configurable: !0, enumerable: !1, value: uA(e), writable: !0 });
        }
      : Vs,
    Av = lA(cA);
  function fA(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var hA = 9007199254740991,
    pA = /^(?:0|[1-9]\d*)$/;
  function Hs(t, e) {
    var n = typeof t;
    return (e = e ?? hA), !!e && (n == "number" || (n != "symbol" && pA.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function gc(t, e, n) {
    e == "__proto__" && rs ? rs(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function ro(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var dA = Object.prototype,
    gA = dA.hasOwnProperty;
  function mc(t, e, n) {
    var r = t[e];
    (!(gA.call(t, e) && ro(r, n)) || (n === void 0 && !(e in t))) && gc(t, e, n);
  }
  function mA(t, e, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = e.length; ++o < s; ) {
      var a = e[o],
        l = void 0;
      l === void 0 && (l = t[a]), i ? gc(n, a, l) : mc(n, a, l);
    }
    return n;
  }
  var kh = Math.max;
  function Ev(t, e, n) {
    return (
      (e = kh(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, i = -1, o = kh(r.length - e, 0), s = Array(o); ++i < o; ) s[i] = r[e + i];
        i = -1;
        for (var a = Array(e + 1); ++i < e; ) a[i] = r[i];
        return (a[e] = n(s)), rA(t, this, a);
      }
    );
  }
  function Cv(t, e) {
    return Av(Ev(t, e, Vs), t + "");
  }
  var _A = 9007199254740991;
  function _c(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _A;
  }
  function Ur(t) {
    return t != null && _c(t.length) && !dc(t);
  }
  function fu(t, e, n) {
    if (!Ie(n)) return !1;
    var r = typeof e;
    return (r == "number" ? Ur(n) && Hs(e, n.length) : r == "string" && e in n) ? ro(n[e], t) : !1;
  }
  function vA(t) {
    return Cv(function (e, n) {
      var r = -1,
        i = n.length,
        o = i > 1 ? n[i - 1] : void 0,
        s = i > 2 ? n[2] : void 0;
      for (
        o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0,
          s && fu(n[0], n[1], s) && ((o = i < 3 ? void 0 : o), (i = 1)),
          e = Object(e);
        ++r < i;

      ) {
        var a = n[r];
        a && t(e, a, r, o);
      }
      return e;
    });
  }
  var yA = Object.prototype;
  function vc(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || yA;
    return t === n;
  }
  function bA(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var wA = "[object Arguments]";
  function Ah(t) {
    return Ye(t) && ar(t) == wA;
  }
  var Sv = Object.prototype,
    xA = Sv.hasOwnProperty,
    kA = Sv.propertyIsEnumerable,
    zi = Ah(
      (function () {
        return arguments;
      })(),
    )
      ? Ah
      : function (t) {
          return Ye(t) && xA.call(t, "callee") && !kA.call(t, "callee");
        };
  function AA() {
    return !1;
  }
  var Tv = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    Eh = Tv && typeof It == "object" && It && !It.nodeType && It,
    EA = Eh && Eh.exports === Tv,
    Ch = EA ? tn.Buffer : void 0,
    CA = Ch ? Ch.isBuffer : void 0,
    Pi = CA || AA,
    SA = "[object Arguments]",
    TA = "[object Array]",
    $A = "[object Boolean]",
    DA = "[object Date]",
    OA = "[object Error]",
    RA = "[object Function]",
    FA = "[object Map]",
    zA = "[object Number]",
    PA = "[object Object]",
    IA = "[object RegExp]",
    jA = "[object Set]",
    MA = "[object String]",
    NA = "[object WeakMap]",
    LA = "[object ArrayBuffer]",
    BA = "[object DataView]",
    qA = "[object Float32Array]",
    UA = "[object Float64Array]",
    ZA = "[object Int8Array]",
    VA = "[object Int16Array]",
    HA = "[object Int32Array]",
    GA = "[object Uint8Array]",
    WA = "[object Uint8ClampedArray]",
    KA = "[object Uint16Array]",
    JA = "[object Uint32Array]",
    Rt = {};
  Rt[qA] = Rt[UA] = Rt[ZA] = Rt[VA] = Rt[HA] = Rt[GA] = Rt[WA] = Rt[KA] = Rt[JA] = !0;
  Rt[SA] =
    Rt[TA] =
    Rt[LA] =
    Rt[$A] =
    Rt[BA] =
    Rt[DA] =
    Rt[OA] =
    Rt[RA] =
    Rt[FA] =
    Rt[zA] =
    Rt[PA] =
    Rt[IA] =
    Rt[jA] =
    Rt[MA] =
    Rt[NA] =
      !1;
  function XA(t) {
    return Ye(t) && _c(t.length) && !!Rt[ar(t)];
  }
  function Gs(t) {
    return function (e) {
      return t(e);
    };
  }
  var $v = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    xi = $v && typeof It == "object" && It && !It.nodeType && It,
    YA = xi && xi.exports === $v,
    Oa = YA && wv.process,
    Ir = (function () {
      try {
        var t = xi && xi.require && xi.require("util").types;
        return t || (Oa && Oa.binding && Oa.binding("util"));
      } catch {}
    })(),
    Sh = Ir && Ir.isTypedArray,
    yc = Sh ? Gs(Sh) : XA,
    QA = Object.prototype,
    tE = QA.hasOwnProperty;
  function Dv(t, e) {
    var n = fe(t),
      r = !n && zi(t),
      i = !n && !r && Pi(t),
      o = !n && !r && !i && yc(t),
      s = n || r || i || o,
      a = s ? bA(t.length, String) : [],
      l = a.length;
    for (var u in t)
      (e || tE.call(t, u)) &&
        !(
          s &&
          (u == "length" ||
            (i && (u == "offset" || u == "parent")) ||
            (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            Hs(u, l))
        ) &&
        a.push(u);
    return a;
  }
  function Ov(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var eE = Ov(Object.keys, Object),
    nE = Object.prototype,
    rE = nE.hasOwnProperty;
  function iE(t) {
    if (!vc(t)) return eE(t);
    var e = [];
    for (var n in Object(t)) rE.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function bc(t) {
    return Ur(t) ? Dv(t) : iE(t);
  }
  function oE(t) {
    var e = [];
    if (t != null) for (var n in Object(t)) e.push(n);
    return e;
  }
  var sE = Object.prototype,
    aE = sE.hasOwnProperty;
  function lE(t) {
    if (!Ie(t)) return oE(t);
    var e = vc(t),
      n = [];
    for (var r in t) (r == "constructor" && (e || !aE.call(t, r))) || n.push(r);
    return n;
  }
  function Rv(t) {
    return Ur(t) ? Dv(t, !0) : lE(t);
  }
  var uE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    cE = /^\w*$/;
  function wc(t, e) {
    if (fe(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || Pr(t)
      ? !0
      : cE.test(t) || !uE.test(t) || (e != null && t in Object(e));
  }
  var Ii = ur(Object, "create");
  function fE() {
    (this.__data__ = Ii ? Ii(null) : {}), (this.size = 0);
  }
  function hE(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var pE = "__lodash_hash_undefined__",
    dE = Object.prototype,
    gE = dE.hasOwnProperty;
  function mE(t) {
    var e = this.__data__;
    if (Ii) {
      var n = e[t];
      return n === pE ? void 0 : n;
    }
    return gE.call(e, t) ? e[t] : void 0;
  }
  var _E = Object.prototype,
    vE = _E.hasOwnProperty;
  function yE(t) {
    var e = this.__data__;
    return Ii ? e[t] !== void 0 : vE.call(e, t);
  }
  var bE = "__lodash_hash_undefined__";
  function wE(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Ii && e === void 0 ? bE : e), this;
  }
  function er(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  er.prototype.clear = fE;
  er.prototype.delete = hE;
  er.prototype.get = mE;
  er.prototype.has = yE;
  er.prototype.set = wE;
  function xE() {
    (this.__data__ = []), (this.size = 0);
  }
  function Ws(t, e) {
    for (var n = t.length; n--; ) if (ro(t[n][0], e)) return n;
    return -1;
  }
  var kE = Array.prototype,
    AE = kE.splice;
  function EE(t) {
    var e = this.__data__,
      n = Ws(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : AE.call(e, n, 1), --this.size, !0;
  }
  function CE(t) {
    var e = this.__data__,
      n = Ws(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function SE(t) {
    return Ws(this.__data__, t) > -1;
  }
  function TE(t, e) {
    var n = this.__data__,
      r = Ws(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function xn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  xn.prototype.clear = xE;
  xn.prototype.delete = EE;
  xn.prototype.get = CE;
  xn.prototype.has = SE;
  xn.prototype.set = TE;
  var ji = ur(tn, "Map");
  function $E() {
    (this.size = 0), (this.__data__ = { hash: new er(), map: new (ji || xn)(), string: new er() });
  }
  function DE(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function Ks(t, e) {
    var n = t.__data__;
    return DE(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function OE(t) {
    var e = Ks(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function RE(t) {
    return Ks(this, t).get(t);
  }
  function FE(t) {
    return Ks(this, t).has(t);
  }
  function zE(t, e) {
    var n = Ks(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function kn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  kn.prototype.clear = $E;
  kn.prototype.delete = OE;
  kn.prototype.get = RE;
  kn.prototype.has = FE;
  kn.prototype.set = zE;
  var PE = "Expected a function";
  function xc(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(PE);
    var n = function () {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, r);
      return (n.cache = o.set(i, s) || o), s;
    };
    return (n.cache = new (xc.Cache || kn)()), n;
  }
  xc.Cache = kn;
  var IE = 500;
  function jE(t) {
    var e = xc(t, function (r) {
        return n.size === IE && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var ME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    NE = /\\(\\)?/g,
    LE = jE(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(ME, function (n, r, i, o) {
          e.push(i ? o.replace(NE, "$1") : r || n);
        }),
        e
      );
    });
  function BE(t) {
    return t == null ? "" : kv(t);
  }
  function Js(t, e) {
    return fe(t) ? t : wc(t, e) ? [t] : LE(BE(t));
  }
  function io(t) {
    if (typeof t == "string" || Pr(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function Xs(t, e) {
    e = Js(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[io(e[n++])];
    return n && n == r ? t : void 0;
  }
  function qE(t, e, n) {
    var r = t == null ? void 0 : Xs(t, e);
    return r === void 0 ? n : r;
  }
  function Fv(t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
    return t;
  }
  var Th = Se ? Se.isConcatSpreadable : void 0;
  function UE(t) {
    return fe(t) || zi(t) || !!(Th && t && t[Th]);
  }
  function zv(t, e, n, r, i) {
    var o = -1,
      s = t.length;
    for (n || (n = UE), i || (i = []); ++o < s; ) {
      var a = t[o];
      n(a) ? Fv(i, a) : (i[i.length] = a);
    }
    return i;
  }
  function ZE(t) {
    var e = t == null ? 0 : t.length;
    return e ? zv(t) : [];
  }
  function VE(t) {
    return Av(Ev(t, void 0, ZE), t + "");
  }
  var Pv = Ov(Object.getPrototypeOf, Object),
    HE = "[object Object]",
    GE = Function.prototype,
    WE = Object.prototype,
    Iv = GE.toString,
    KE = WE.hasOwnProperty,
    JE = Iv.call(Object);
  function XE(t) {
    if (!Ye(t) || ar(t) != HE) return !1;
    var e = Pv(t);
    if (e === null) return !0;
    var n = KE.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Iv.call(n) == JE;
  }
  function YE() {
    (this.__data__ = new xn()), (this.size = 0);
  }
  function QE(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function t2(t) {
    return this.__data__.get(t);
  }
  function e2(t) {
    return this.__data__.has(t);
  }
  var n2 = 200;
  function r2(t, e) {
    var n = this.__data__;
    if (n instanceof xn) {
      var r = n.__data__;
      if (!ji || r.length < n2 - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new kn(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Fe(t) {
    var e = (this.__data__ = new xn(t));
    this.size = e.size;
  }
  Fe.prototype.clear = YE;
  Fe.prototype.delete = QE;
  Fe.prototype.get = t2;
  Fe.prototype.has = e2;
  Fe.prototype.set = r2;
  var jv = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    $h = jv && typeof It == "object" && It && !It.nodeType && It,
    i2 = $h && $h.exports === jv,
    Dh = i2 ? tn.Buffer : void 0,
    Oh = Dh ? Dh.allocUnsafe : void 0;
  function Mv(t, e) {
    if (e) return t.slice();
    var n = t.length,
      r = Oh ? Oh(n) : new t.constructor(n);
    return t.copy(r), r;
  }
  function o2(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
      var s = t[n];
      e(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  function s2() {
    return [];
  }
  var a2 = Object.prototype,
    l2 = a2.propertyIsEnumerable,
    Rh = Object.getOwnPropertySymbols,
    u2 = Rh
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              o2(Rh(t), function (e) {
                return l2.call(t, e);
              }));
        }
      : s2;
  function c2(t, e, n) {
    var r = e(t);
    return fe(t) ? r : Fv(r, n(t));
  }
  function hu(t) {
    return c2(t, bc, u2);
  }
  var pu = ur(tn, "DataView"),
    du = ur(tn, "Promise"),
    gu = ur(tn, "Set"),
    Fh = "[object Map]",
    f2 = "[object Object]",
    zh = "[object Promise]",
    Ph = "[object Set]",
    Ih = "[object WeakMap]",
    jh = "[object DataView]",
    h2 = lr(pu),
    p2 = lr(ji),
    d2 = lr(du),
    g2 = lr(gu),
    m2 = lr(cu),
    $e = ar;
  ((pu && $e(new pu(new ArrayBuffer(1))) != jh) ||
    (ji && $e(new ji()) != Fh) ||
    (du && $e(du.resolve()) != zh) ||
    (gu && $e(new gu()) != Ph) ||
    (cu && $e(new cu()) != Ih)) &&
    ($e = function (t) {
      var e = ar(t),
        n = e == f2 ? t.constructor : void 0,
        r = n ? lr(n) : "";
      if (r)
        switch (r) {
          case h2:
            return jh;
          case p2:
            return Fh;
          case d2:
            return zh;
          case g2:
            return Ph;
          case m2:
            return Ih;
        }
      return e;
    });
  var _2 = Object.prototype,
    v2 = _2.hasOwnProperty;
  function y2(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && v2.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var is = tn.Uint8Array;
  function kc(t) {
    var e = new t.constructor(t.byteLength);
    return new is(e).set(new is(t)), e;
  }
  function b2(t, e) {
    var n = kc(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var w2 = /\w*$/;
  function x2(t) {
    var e = new t.constructor(t.source, w2.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Mh = Se ? Se.prototype : void 0,
    Nh = Mh ? Mh.valueOf : void 0;
  function k2(t) {
    return Nh ? Object(Nh.call(t)) : {};
  }
  function Nv(t, e) {
    var n = e ? kc(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var A2 = "[object Boolean]",
    E2 = "[object Date]",
    C2 = "[object Map]",
    S2 = "[object Number]",
    T2 = "[object RegExp]",
    $2 = "[object Set]",
    D2 = "[object String]",
    O2 = "[object Symbol]",
    R2 = "[object ArrayBuffer]",
    F2 = "[object DataView]",
    z2 = "[object Float32Array]",
    P2 = "[object Float64Array]",
    I2 = "[object Int8Array]",
    j2 = "[object Int16Array]",
    M2 = "[object Int32Array]",
    N2 = "[object Uint8Array]",
    L2 = "[object Uint8ClampedArray]",
    B2 = "[object Uint16Array]",
    q2 = "[object Uint32Array]";
  function U2(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case R2:
        return kc(t);
      case A2:
      case E2:
        return new r(+t);
      case F2:
        return b2(t);
      case z2:
      case P2:
      case I2:
      case j2:
      case M2:
      case N2:
      case L2:
      case B2:
      case q2:
        return Nv(t, n);
      case C2:
        return new r();
      case S2:
      case D2:
        return new r(t);
      case T2:
        return x2(t);
      case $2:
        return new r();
      case O2:
        return k2(t);
    }
  }
  function Lv(t) {
    return typeof t.constructor == "function" && !vc(t) ? nA(Pv(t)) : {};
  }
  var Z2 = "[object Map]";
  function V2(t) {
    return Ye(t) && $e(t) == Z2;
  }
  var Lh = Ir && Ir.isMap,
    H2 = Lh ? Gs(Lh) : V2,
    G2 = "[object Set]";
  function W2(t) {
    return Ye(t) && $e(t) == G2;
  }
  var Bh = Ir && Ir.isSet,
    K2 = Bh ? Gs(Bh) : W2,
    J2 = 1,
    Bv = "[object Arguments]",
    X2 = "[object Array]",
    Y2 = "[object Boolean]",
    Q2 = "[object Date]",
    tC = "[object Error]",
    qv = "[object Function]",
    eC = "[object GeneratorFunction]",
    nC = "[object Map]",
    rC = "[object Number]",
    Uv = "[object Object]",
    iC = "[object RegExp]",
    oC = "[object Set]",
    sC = "[object String]",
    aC = "[object Symbol]",
    lC = "[object WeakMap]",
    uC = "[object ArrayBuffer]",
    cC = "[object DataView]",
    fC = "[object Float32Array]",
    hC = "[object Float64Array]",
    pC = "[object Int8Array]",
    dC = "[object Int16Array]",
    gC = "[object Int32Array]",
    mC = "[object Uint8Array]",
    _C = "[object Uint8ClampedArray]",
    vC = "[object Uint16Array]",
    yC = "[object Uint32Array]",
    Ct = {};
  Ct[Bv] =
    Ct[X2] =
    Ct[uC] =
    Ct[cC] =
    Ct[Y2] =
    Ct[Q2] =
    Ct[fC] =
    Ct[hC] =
    Ct[pC] =
    Ct[dC] =
    Ct[gC] =
    Ct[nC] =
    Ct[rC] =
    Ct[Uv] =
    Ct[iC] =
    Ct[oC] =
    Ct[sC] =
    Ct[aC] =
    Ct[mC] =
    Ct[_C] =
    Ct[vC] =
    Ct[yC] =
      !0;
  Ct[tC] = Ct[qv] = Ct[lC] = !1;
  function Bo(t, e, n, r, i, o) {
    var s,
      a = e & J2;
    if (s !== void 0) return s;
    if (!Ie(t)) return t;
    var l = fe(t);
    if (l) s = y2(t);
    else {
      var u = $e(t),
        c = u == qv || u == eC;
      if (Pi(t)) return Mv(t, a);
      if (u == Uv || u == Bv || (c && !i)) s = c ? {} : Lv(t);
      else {
        if (!Ct[u]) return i ? t : {};
        s = U2(t, u, a);
      }
    }
    o || (o = new Fe());
    var f = o.get(t);
    if (f) return f;
    o.set(t, s),
      K2(t)
        ? t.forEach(function (d) {
            s.add(Bo(d, e, n, d, t, o));
          })
        : H2(t) &&
          t.forEach(function (d, m) {
            s.set(m, Bo(d, e, n, m, t, o));
          });
    var h = hu,
      p = l ? void 0 : h(t);
    return (
      fA(p || t, function (d, m) {
        p && ((m = d), (d = t[m])), mc(s, m, Bo(d, e, n, m, t, o));
      }),
      s
    );
  }
  var bC = 1,
    wC = 4;
  function Zv(t) {
    return Bo(t, bC | wC);
  }
  var xC = "__lodash_hash_undefined__";
  function kC(t) {
    return this.__data__.set(t, xC), this;
  }
  function AC(t) {
    return this.__data__.has(t);
  }
  function os(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.__data__ = new kn(); ++e < n; ) this.add(t[e]);
  }
  os.prototype.add = os.prototype.push = kC;
  os.prototype.has = AC;
  function EC(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function CC(t, e) {
    return t.has(e);
  }
  var SC = 1,
    TC = 2;
  function Vv(t, e, n, r, i, o) {
    var s = n & SC,
      a = t.length,
      l = e.length;
    if (a != l && !(s && l > a)) return !1;
    var u = o.get(t),
      c = o.get(e);
    if (u && c) return u == e && c == t;
    var f = -1,
      h = !0,
      p = n & TC ? new os() : void 0;
    for (o.set(t, e), o.set(e, t); ++f < a; ) {
      var d = t[f],
        m = e[f];
      if (r) var y = s ? r(m, d, f, e, t, o) : r(d, m, f, t, e, o);
      if (y !== void 0) {
        if (y) continue;
        h = !1;
        break;
      }
      if (p) {
        if (
          !EC(e, function (b, _) {
            if (!CC(p, _) && (d === b || i(d, b, n, r, o))) return p.push(_);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(d === m || i(d, m, n, r, o))) {
        h = !1;
        break;
      }
    }
    return o.delete(t), o.delete(e), h;
  }
  function $C(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r, i) {
        n[++e] = [i, r];
      }),
      n
    );
  }
  function DC(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r) {
        n[++e] = r;
      }),
      n
    );
  }
  var OC = 1,
    RC = 2,
    FC = "[object Boolean]",
    zC = "[object Date]",
    PC = "[object Error]",
    IC = "[object Map]",
    jC = "[object Number]",
    MC = "[object RegExp]",
    NC = "[object Set]",
    LC = "[object String]",
    BC = "[object Symbol]",
    qC = "[object ArrayBuffer]",
    UC = "[object DataView]",
    qh = Se ? Se.prototype : void 0,
    Ra = qh ? qh.valueOf : void 0;
  function ZC(t, e, n, r, i, o, s) {
    switch (n) {
      case UC:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case qC:
        return !(t.byteLength != e.byteLength || !o(new is(t), new is(e)));
      case FC:
      case zC:
      case jC:
        return ro(+t, +e);
      case PC:
        return t.name == e.name && t.message == e.message;
      case MC:
      case LC:
        return t == e + "";
      case IC:
        var a = $C;
      case NC:
        var l = r & OC;
        if ((a || (a = DC), t.size != e.size && !l)) return !1;
        var u = s.get(t);
        if (u) return u == e;
        (r |= RC), s.set(t, e);
        var c = Vv(a(t), a(e), r, i, o, s);
        return s.delete(t), c;
      case BC:
        if (Ra) return Ra.call(t) == Ra.call(e);
    }
    return !1;
  }
  var VC = 1,
    HC = Object.prototype,
    GC = HC.hasOwnProperty;
  function WC(t, e, n, r, i, o) {
    var s = n & VC,
      a = hu(t),
      l = a.length,
      u = hu(e),
      c = u.length;
    if (l != c && !s) return !1;
    for (var f = l; f--; ) {
      var h = a[f];
      if (!(s ? h in e : GC.call(e, h))) return !1;
    }
    var p = o.get(t),
      d = o.get(e);
    if (p && d) return p == e && d == t;
    var m = !0;
    o.set(t, e), o.set(e, t);
    for (var y = s; ++f < l; ) {
      h = a[f];
      var b = t[h],
        _ = e[h];
      if (r) var w = s ? r(_, b, h, e, t, o) : r(b, _, h, t, e, o);
      if (!(w === void 0 ? b === _ || i(b, _, n, r, o) : w)) {
        m = !1;
        break;
      }
      y || (y = h == "constructor");
    }
    if (m && !y) {
      var v = t.constructor,
        C = e.constructor;
      v != C &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof v == "function" && v instanceof v && typeof C == "function" && C instanceof C) &&
        (m = !1);
    }
    return o.delete(t), o.delete(e), m;
  }
  var KC = 1,
    Uh = "[object Arguments]",
    Zh = "[object Array]",
    vo = "[object Object]",
    JC = Object.prototype,
    Vh = JC.hasOwnProperty;
  function XC(t, e, n, r, i, o) {
    var s = fe(t),
      a = fe(e),
      l = s ? Zh : $e(t),
      u = a ? Zh : $e(e);
    (l = l == Uh ? vo : l), (u = u == Uh ? vo : u);
    var c = l == vo,
      f = u == vo,
      h = l == u;
    if (h && Pi(t)) {
      if (!Pi(e)) return !1;
      (s = !0), (c = !1);
    }
    if (h && !c) return o || (o = new Fe()), s || yc(t) ? Vv(t, e, n, r, i, o) : ZC(t, e, l, n, r, i, o);
    if (!(n & KC)) {
      var p = c && Vh.call(t, "__wrapped__"),
        d = f && Vh.call(e, "__wrapped__");
      if (p || d) {
        var m = p ? t.value() : t,
          y = d ? e.value() : e;
        return o || (o = new Fe()), i(m, y, n, r, o);
      }
    }
    return h ? (o || (o = new Fe()), WC(t, e, n, r, i, o)) : !1;
  }
  function Ac(t, e, n, r, i) {
    return t === e ? !0 : t == null || e == null || (!Ye(t) && !Ye(e)) ? t !== t && e !== e : XC(t, e, n, r, Ac, i);
  }
  var YC = 1,
    QC = 2;
  function tS(t, e, n, r) {
    var i = n.length,
      o = i;
    if (t == null) return !o;
    for (t = Object(t); i--; ) {
      var s = n[i];
      if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
    }
    for (; ++i < o; ) {
      s = n[i];
      var a = s[0],
        l = t[a],
        u = s[1];
      if (s[2]) {
        if (l === void 0 && !(a in t)) return !1;
      } else {
        var c = new Fe(),
          f;
        if (!(f === void 0 ? Ac(u, l, YC | QC, r, c) : f)) return !1;
      }
    }
    return !0;
  }
  function Hv(t) {
    return t === t && !Ie(t);
  }
  function eS(t) {
    for (var e = bc(t), n = e.length; n--; ) {
      var r = e[n],
        i = t[r];
      e[n] = [r, i, Hv(i)];
    }
    return e;
  }
  function Gv(t, e) {
    return function (n) {
      return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
  }
  function nS(t) {
    var e = eS(t);
    return e.length == 1 && e[0][2]
      ? Gv(e[0][0], e[0][1])
      : function (n) {
          return n === t || tS(n, t, e);
        };
  }
  function rS(t, e) {
    return t != null && e in Object(t);
  }
  function iS(t, e, n) {
    e = Js(e, t);
    for (var r = -1, i = e.length, o = !1; ++r < i; ) {
      var s = io(e[r]);
      if (!(o = t != null && n(t, s))) break;
      t = t[s];
    }
    return o || ++r != i ? o : ((i = t == null ? 0 : t.length), !!i && _c(i) && Hs(s, i) && (fe(t) || zi(t)));
  }
  function Wv(t, e) {
    return t != null && iS(t, e, rS);
  }
  var oS = 1,
    sS = 2;
  function aS(t, e) {
    return wc(t) && Hv(e)
      ? Gv(io(t), e)
      : function (n) {
          var r = qE(n, t);
          return r === void 0 && r === e ? Wv(n, t) : Ac(e, r, oS | sS);
        };
  }
  function lS(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function uS(t) {
    return function (e) {
      return Xs(e, t);
    };
  }
  function cS(t) {
    return wc(t) ? lS(io(t)) : uS(t);
  }
  function Kv(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? Vs
        : typeof t == "object"
          ? fe(t)
            ? aS(t[0], t[1])
            : nS(t)
          : cS(t);
  }
  function fS(t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
        var l = s[++i];
        if (n(o[l], l, o) === !1) break;
      }
      return e;
    };
  }
  var Jv = fS();
  function hS(t, e) {
    return t && Jv(t, e, bc);
  }
  function pS(t, e) {
    return function (n, r) {
      if (n == null) return n;
      if (!Ur(n)) return t(n, r);
      for (var i = n.length, o = -1, s = Object(n); ++o < i && r(s[o], o, s) !== !1; );
      return n;
    };
  }
  var dS = pS(hS);
  function mu(t, e, n) {
    ((n !== void 0 && !ro(t[e], n)) || (n === void 0 && !(e in t))) && gc(t, e, n);
  }
  function gS(t) {
    return Ye(t) && Ur(t);
  }
  function _u(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e];
  }
  function mS(t) {
    return mA(t, Rv(t));
  }
  function _S(t, e, n, r, i, o, s) {
    var a = _u(t, n),
      l = _u(e, n),
      u = s.get(l);
    if (u) {
      mu(t, n, u);
      return;
    }
    var c = o ? o(a, l, n + "", t, e, s) : void 0,
      f = c === void 0;
    if (f) {
      var h = fe(l),
        p = !h && Pi(l),
        d = !h && !p && yc(l);
      (c = l),
        h || p || d
          ? fe(a)
            ? (c = a)
            : gS(a)
              ? (c = iA(a))
              : p
                ? ((f = !1), (c = Mv(l, !0)))
                : d
                  ? ((f = !1), (c = Nv(l, !0)))
                  : (c = [])
          : XE(l) || zi(l)
            ? ((c = a), zi(a) ? (c = mS(a)) : (!Ie(a) || dc(a)) && (c = Lv(l)))
            : (f = !1);
    }
    f && (s.set(l, c), i(c, l, r, o, s), s.delete(l)), mu(t, n, c);
  }
  function Xv(t, e, n, r, i) {
    t !== e &&
      Jv(
        e,
        function (o, s) {
          if ((i || (i = new Fe()), Ie(o))) _S(t, e, s, n, Xv, r, i);
          else {
            var a = r ? r(_u(t, s), o, s + "", t, e, i) : void 0;
            a === void 0 && (a = o), mu(t, s, a);
          }
        },
        Rv,
      );
  }
  function vS(t, e) {
    var n = -1,
      r = Ur(t) ? Array(t.length) : [];
    return (
      dS(t, function (i, o, s) {
        r[++n] = e(i, o, s);
      }),
      r
    );
  }
  function yS(t, e) {
    return t > e;
  }
  function bS(t, e, n) {
    for (var r = -1, i = t.length; ++r < i; ) {
      var o = t[r],
        s = e(o);
      if (s != null && (a === void 0 ? s === s && !Pr(s) : n(s, a)))
        var a = s,
          l = o;
    }
    return l;
  }
  function Yv(t, e) {
    return t && t.length ? bS(t, Kv(e), yS) : void 0;
  }
  var Qv = vA(function (t, e, n) {
    Xv(t, e, n);
  });
  function wS(t, e, n, r) {
    if (!Ie(t)) return t;
    e = Js(e, t);
    for (var i = -1, o = e.length, s = o - 1, a = t; a != null && ++i < o; ) {
      var l = io(e[i]),
        u = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (i != s) {
        var c = a[l];
        (u = void 0), u === void 0 && (u = Ie(c) ? c : Hs(e[i + 1]) ? [] : {});
      }
      mc(a, l, u), (a = a[l]);
    }
    return t;
  }
  function xS(t, e, n) {
    for (var r = -1, i = e.length, o = {}; ++r < i; ) {
      var s = e[r],
        a = Xs(t, s);
      n(a, s) && wS(o, Js(s, t), a);
    }
    return o;
  }
  function kS(t, e) {
    var n = t.length;
    for (t.sort(e); n--; ) t[n] = t[n].value;
    return t;
  }
  function AS(t, e) {
    if (t !== e) {
      var n = t !== void 0,
        r = t === null,
        i = t === t,
        o = Pr(t),
        s = e !== void 0,
        a = e === null,
        l = e === e,
        u = Pr(e);
      if ((!a && !u && !o && t > e) || (o && s && l && !a && !u) || (r && s && l) || (!n && l) || !i) return 1;
      if ((!r && !o && !u && t < e) || (u && n && i && !r && !o) || (a && n && i) || (!s && i) || !l) return -1;
    }
    return 0;
  }
  function ES(t, e, n) {
    for (var r = -1, i = t.criteria, o = e.criteria, s = i.length, a = n.length; ++r < s; ) {
      var l = AS(i[r], o[r]);
      if (l) {
        if (r >= a) return l;
        var u = n[r];
        return l * (u == "desc" ? -1 : 1);
      }
    }
    return t.index - e.index;
  }
  function CS(t, e, n) {
    e.length
      ? (e = Lo(e, function (o) {
          return fe(o)
            ? function (s) {
                return Xs(s, o.length === 1 ? o[0] : o);
              }
            : o;
        }))
      : (e = [Vs]);
    var r = -1;
    e = Lo(e, Gs(Kv));
    var i = vS(t, function (o, s, a) {
      var l = Lo(e, function (u) {
        return u(o);
      });
      return { criteria: l, index: ++r, value: o };
    });
    return kS(i, function (o, s) {
      return ES(o, s, n);
    });
  }
  function SS(t, e) {
    return xS(t, e, function (n, r) {
      return Wv(t, r);
    });
  }
  var t0 = VE(function (t, e) {
      return t == null ? {} : SS(t, e);
    }),
    TS = Cv(function (t, e) {
      if (t == null) return [];
      var n = e.length;
      return n > 1 && fu(t, e[0], e[1]) ? (e = []) : n > 2 && fu(e[0], e[1], e[2]) && (e = [e[0]]), CS(t, zv(e), []);
    });
  function e0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Hh, Gh;
  function $S() {
    return Gh || ((Gh = 1), (Hh = function () {})), Hh;
  }
  var Fa, Wh;
  function cr() {
    if (Wh) return Fa;
    Wh = 1;
    var t = $S()();
    return (
      (Fa = function (e) {
        return e !== t && e !== null;
      }),
      Fa
    );
  }
  var za, Kh;
  function n0() {
    if (Kh) return za;
    Kh = 1;
    var t = cr(),
      e = Array.prototype.forEach,
      n = Object.create,
      r = function (i, o) {
        var s;
        for (s in i) o[s] = i[s];
      };
    return (
      (za = function (i) {
        var o = n(null);
        return (
          e.call(arguments, function (s) {
            t(s) && r(Object(s), o);
          }),
          o
        );
      }),
      za
    );
  }
  var Jh, Xh;
  function DS() {
    return (
      Xh ||
        ((Xh = 1),
        (Jh = function () {
          var t = Math.sign;
          return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
        })),
      Jh
    );
  }
  var Yh, Qh;
  function OS() {
    return (
      Qh ||
        ((Qh = 1),
        (Yh = function (t) {
          return (t = Number(t)), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
        })),
      Yh
    );
  }
  var tp, ep;
  function RS() {
    return ep || ((ep = 1), (tp = DS()() ? Math.sign : OS())), tp;
  }
  var Pa, np;
  function FS() {
    if (np) return Pa;
    np = 1;
    var t = RS(),
      e = Math.abs,
      n = Math.floor;
    return (
      (Pa = function (r) {
        return isNaN(r) ? 0 : ((r = Number(r)), r === 0 || !isFinite(r) ? r : t(r) * n(e(r)));
      }),
      Pa
    );
  }
  var Ia, rp;
  function fr() {
    if (rp) return Ia;
    rp = 1;
    var t = FS(),
      e = Math.max;
    return (
      (Ia = function (n) {
        return e(0, t(n));
      }),
      Ia
    );
  }
  var ja, ip;
  function r0() {
    if (ip) return ja;
    ip = 1;
    var t = fr();
    return (
      (ja = function (e, n, r) {
        var i;
        return isNaN(e) ? ((i = n), i >= 0 ? (r && i ? i - 1 : i) : 1) : e === !1 ? !1 : t(e);
      }),
      ja
    );
  }
  var op, sp;
  function qn() {
    return (
      sp ||
        ((sp = 1),
        (op = function (t) {
          if (typeof t != "function") throw new TypeError(t + " is not a function");
          return t;
        })),
      op
    );
  }
  var Ma, ap;
  function Zr() {
    if (ap) return Ma;
    ap = 1;
    var t = cr();
    return (
      (Ma = function (e) {
        if (!t(e)) throw new TypeError("Cannot use null or undefined");
        return e;
      }),
      Ma
    );
  }
  var Na, lp;
  function zS() {
    if (lp) return Na;
    lp = 1;
    var t = qn(),
      e = Zr(),
      n = Function.prototype.bind,
      r = Function.prototype.call,
      i = Object.keys,
      o = Object.prototype.propertyIsEnumerable;
    return (
      (Na = function (s, a) {
        return function (l, u) {
          var c,
            f = arguments[2],
            h = arguments[3];
          return (
            (l = Object(e(l))),
            t(u),
            (c = i(l)),
            h && c.sort(typeof h == "function" ? n.call(h, l) : void 0),
            typeof s != "function" && (s = c[s]),
            r.call(s, c, function (p, d) {
              return o.call(l, p) ? r.call(u, f, l[p], p, l, d) : a;
            })
          );
        };
      }),
      Na
    );
  }
  var up, cp;
  function Ys() {
    return cp || ((cp = 1), (up = zS()("forEach"))), up;
  }
  var PS = {};
  function hr() {
    return PS;
  }
  var fp = { exports: {} },
    hp,
    pp;
  function IS() {
    return (
      pp ||
        ((pp = 1),
        (hp = function () {
          var t = Object.assign,
            e;
          return typeof t != "function"
            ? !1
            : ((e = { foo: "raz" }), t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
        })),
      hp
    );
  }
  var dp, gp;
  function jS() {
    return (
      gp ||
        ((gp = 1),
        (dp = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        })),
      dp
    );
  }
  var La, mp;
  function MS() {
    if (mp) return La;
    mp = 1;
    var t = cr(),
      e = Object.keys;
    return (
      (La = function (n) {
        return e(t(n) ? Object(n) : n);
      }),
      La
    );
  }
  var _p, vp;
  function NS() {
    return vp || ((vp = 1), (_p = jS()() ? Object.keys : MS())), _p;
  }
  var Ba, yp;
  function LS() {
    if (yp) return Ba;
    yp = 1;
    var t = NS(),
      e = Zr(),
      n = Math.max;
    return (
      (Ba = function (r, i) {
        var o,
          s,
          a = n(arguments.length, 2),
          l;
        for (
          r = Object(e(r)),
            l = function (u) {
              try {
                r[u] = i[u];
              } catch (c) {
                o || (o = c);
              }
            },
            s = 1;
          s < a;
          ++s
        )
          (i = arguments[s]), t(i).forEach(l);
        if (o !== void 0) throw o;
        return r;
      }),
      Ba
    );
  }
  var bp, wp;
  function i0() {
    return wp || ((wp = 1), (bp = IS()() ? Object.assign : LS())), bp;
  }
  var qa, xp;
  function BS() {
    if (xp) return qa;
    xp = 1;
    var t = cr(),
      e = { function: !0, object: !0 };
    return (
      (qa = function (n) {
        return (t(n) && e[typeof n]) || !1;
      }),
      qa
    );
  }
  var kp;
  function qS() {
    return (
      kp ||
        ((kp = 1),
        (function (t) {
          var e = i0(),
            n = BS(),
            r = cr(),
            i = Error.captureStackTrace;
          t.exports = function (o) {
            var s = new Error(o),
              a = arguments[1],
              l = arguments[2];
            return (
              r(l) || (n(a) && ((l = a), (a = null))), r(l) && e(s, l), r(a) && (s.code = a), i && i(s, t.exports), s
            );
          };
        })(fp)),
      fp.exports
    );
  }
  var yo = { exports: {} },
    Ua,
    Ap;
  function o0() {
    if (Ap) return Ua;
    Ap = 1;
    var t = Zr(),
      e = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      r = Object.getOwnPropertyNames,
      i = Object.getOwnPropertySymbols;
    return (
      (Ua = function (o, s) {
        var a,
          l = Object(t(s));
        if (
          ((o = Object(t(o))),
          r(l).forEach(function (u) {
            try {
              e(o, u, n(s, u));
            } catch (c) {
              a = c;
            }
          }),
          typeof i == "function" &&
            i(l).forEach(function (u) {
              try {
                e(o, u, n(s, u));
              } catch (c) {
                a = c;
              }
            }),
          a !== void 0)
        )
          throw a;
        return o;
      }),
      Ua
    );
  }
  var Ep;
  function s0() {
    if (Ep) return yo.exports;
    Ep = 1;
    var t = fr(),
      e = function (s, a) {
        return a;
      },
      n,
      r,
      i,
      o;
    try {
      Object.defineProperty(e, "length", { configurable: !0, writable: !1, enumerable: !1, value: 1 });
    } catch {}
    return (
      e.length === 1
        ? ((n = { configurable: !0, writable: !1, enumerable: !1 }),
          (r = Object.defineProperty),
          (yo.exports = function (s, a) {
            return (a = t(a)), s.length === a ? s : ((n.value = a), r(s, "length", n));
          }))
        : ((o = o0()),
          (i = (function () {
            var s = [];
            return function (a) {
              var l,
                u = 0;
              if (s[a]) return s[a];
              for (l = []; a--; ) l.push("a" + (++u).toString(36));
              return new Function(
                "fn",
                "return function (" + l.join(", ") + ") { return fn.apply(this, arguments); };",
              );
            };
          })()),
          (yo.exports = function (s, a) {
            var l;
            if (((a = t(a)), s.length === a)) return s;
            l = i(a)(s);
            try {
              o(l, s);
            } catch {}
            return l;
          })),
      yo.exports
    );
  }
  var Za = { exports: {} },
    Va,
    Cp;
  function a0() {
    if (Cp) return Va;
    Cp = 1;
    var t = void 0;
    return (
      (Va = function (e) {
        return e !== t && e !== null;
      }),
      Va
    );
  }
  var Ha, Sp;
  function US() {
    if (Sp) return Ha;
    Sp = 1;
    var t = a0(),
      e = { object: !0, function: !0, undefined: !0 };
    return (
      (Ha = function (n) {
        return t(n) ? hasOwnProperty.call(e, typeof n) : !1;
      }),
      Ha
    );
  }
  var Ga, Tp;
  function ZS() {
    if (Tp) return Ga;
    Tp = 1;
    var t = US();
    return (
      (Ga = function (e) {
        if (!t(e)) return !1;
        try {
          return e.constructor ? e.constructor.prototype === e : !1;
        } catch {
          return !1;
        }
      }),
      Ga
    );
  }
  var Wa, $p;
  function VS() {
    if ($p) return Wa;
    $p = 1;
    var t = ZS();
    return (
      (Wa = function (e) {
        if (typeof e != "function" || !hasOwnProperty.call(e, "length")) return !1;
        try {
          if (typeof e.length != "number" || typeof e.call != "function" || typeof e.apply != "function") return !1;
        } catch {
          return !1;
        }
        return !t(e);
      }),
      Wa
    );
  }
  var Ka, Dp;
  function HS() {
    if (Dp) return Ka;
    Dp = 1;
    var t = VS(),
      e = /^\s*class[\s{/}]/,
      n = Function.prototype.toString;
    return (
      (Ka = function (r) {
        return !(!t(r) || e.test(n.call(r)));
      }),
      Ka
    );
  }
  var Ja, Op;
  function GS() {
    if (Op) return Ja;
    Op = 1;
    var t = "razdwatrzy";
    return (
      (Ja = function () {
        return typeof t.contains != "function" ? !1 : t.contains("dwa") === !0 && t.contains("foo") === !1;
      }),
      Ja
    );
  }
  var Xa, Rp;
  function WS() {
    if (Rp) return Xa;
    Rp = 1;
    var t = String.prototype.indexOf;
    return (
      (Xa = function (e) {
        return t.call(this, e, arguments[1]) > -1;
      }),
      Xa
    );
  }
  var Fp, zp;
  function KS() {
    return zp || ((zp = 1), (Fp = GS()() ? String.prototype.contains : WS())), Fp;
  }
  var Pp;
  function pr() {
    if (Pp) return Za.exports;
    Pp = 1;
    var t = a0(),
      e = HS(),
      n = i0(),
      r = n0(),
      i = KS(),
      o = (Za.exports = function (s, a) {
        var l, u, c, f, h;
        return (
          arguments.length < 2 || typeof s != "string" ? ((f = a), (a = s), (s = null)) : (f = arguments[2]),
          t(s) ? ((l = i.call(s, "c")), (u = i.call(s, "e")), (c = i.call(s, "w"))) : ((l = c = !0), (u = !1)),
          (h = { value: a, configurable: l, enumerable: u, writable: c }),
          f ? n(r(f), h) : h
        );
      });
    return (
      (o.gs = function (s, a, l) {
        var u, c, f, h;
        return (
          typeof s != "string" ? ((f = l), (l = a), (a = s), (s = null)) : (f = arguments[3]),
          t(a)
            ? e(a)
              ? t(l)
                ? e(l) || ((f = l), (l = void 0))
                : (l = void 0)
              : ((f = a), (a = l = void 0))
            : (a = void 0),
          t(s) ? ((u = i.call(s, "c")), (c = i.call(s, "e"))) : ((u = !0), (c = !1)),
          (h = { get: a, set: l, configurable: u, enumerable: c }),
          f ? n(r(f), h) : h
        );
      }),
      Za.exports
    );
  }
  var Ya = { exports: {} },
    Ip;
  function JS() {
    return (
      Ip ||
        ((Ip = 1),
        (function (t, e) {
          var n = pr(),
            r = qn(),
            i = Function.prototype.apply,
            o = Function.prototype.call,
            s = Object.create,
            a = Object.defineProperty,
            l = Object.defineProperties,
            u = Object.prototype.hasOwnProperty,
            c = { configurable: !0, enumerable: !1, writable: !0 },
            f,
            h,
            p,
            d,
            m,
            y,
            b;
          (f = function (_, w) {
            var v;
            return (
              r(w),
              u.call(this, "__ee__")
                ? (v = this.__ee__)
                : ((v = c.value = s(null)), a(this, "__ee__", c), (c.value = null)),
              v[_] ? (typeof v[_] == "object" ? v[_].push(w) : (v[_] = [v[_], w])) : (v[_] = w),
              this
            );
          }),
            (h = function (_, w) {
              var v, C;
              return (
                r(w),
                (C = this),
                f.call(
                  this,
                  _,
                  (v = function () {
                    p.call(C, _, v), i.call(w, this, arguments);
                  }),
                ),
                (v.__eeOnceListener__ = w),
                this
              );
            }),
            (p = function (_, w) {
              var v, C, R, z;
              if ((r(w), !u.call(this, "__ee__"))) return this;
              if (((v = this.__ee__), !v[_])) return this;
              if (((C = v[_]), typeof C == "object"))
                for (z = 0; (R = C[z]); ++z)
                  (R === w || R.__eeOnceListener__ === w) && (C.length === 2 ? (v[_] = C[z ? 0 : 1]) : C.splice(z, 1));
              else (C === w || C.__eeOnceListener__ === w) && delete v[_];
              return this;
            }),
            (d = function (_) {
              var w, v, C, R, z;
              if (u.call(this, "__ee__") && ((R = this.__ee__[_]), !!R))
                if (typeof R == "object") {
                  for (v = arguments.length, z = new Array(v - 1), w = 1; w < v; ++w) z[w - 1] = arguments[w];
                  for (R = R.slice(), w = 0; (C = R[w]); ++w) i.call(C, this, z);
                } else
                  switch (arguments.length) {
                    case 1:
                      o.call(R, this);
                      break;
                    case 2:
                      o.call(R, this, arguments[1]);
                      break;
                    case 3:
                      o.call(R, this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (v = arguments.length, z = new Array(v - 1), w = 1; w < v; ++w) z[w - 1] = arguments[w];
                      i.call(R, this, z);
                  }
            }),
            (m = { on: f, once: h, off: p, emit: d }),
            (y = { on: n(f), once: n(h), off: n(p), emit: n(d) }),
            (b = l({}, y)),
            (t.exports = e =
              function (_) {
                return _ == null ? s(b) : l(Object(_), y);
              }),
            (e.methods = m);
        })(Ya, Ya.exports)),
      Ya.exports
    );
  }
  var jp, Mp;
  function XS() {
    return (
      Mp ||
        ((Mp = 1),
        (jp = function () {
          var t = Array.from,
            e,
            n;
          return typeof t != "function" ? !1 : ((e = ["raz", "dwa"]), (n = t(e)), !!(n && n !== e && n[1] === "dwa"));
        })),
      jp
    );
  }
  var Np, Lp;
  function YS() {
    return (
      Lp ||
        ((Lp = 1),
        (Np = function () {
          return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
        })),
      Np
    );
  }
  var Qa, Bp;
  function QS() {
    if (Bp) return Qa;
    Bp = 1;
    var t = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    return (
      (Qa = (function () {
        if (this) return this;
        try {
          Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
              return this;
            },
            configurable: !0,
          });
        } catch {
          return t();
        }
        try {
          return __global__ || t();
        } finally {
          delete Object.prototype.__global__;
        }
      })()),
      Qa
    );
  }
  var qp, Up;
  function Qs() {
    return Up || ((Up = 1), (qp = YS()() ? globalThis : QS())), qp;
  }
  var tl, Zp;
  function tT() {
    if (Zp) return tl;
    Zp = 1;
    var t = Qs(),
      e = { object: !0, symbol: !0 };
    return (
      (tl = function () {
        var n = t.Symbol,
          r;
        if (typeof n != "function") return !1;
        r = n("test symbol");
        try {
          String(r);
        } catch {
          return !1;
        }
        return !(!e[typeof n.iterator] || !e[typeof n.toPrimitive] || !e[typeof n.toStringTag]);
      }),
      tl
    );
  }
  var Vp, Hp;
  function eT() {
    return (
      Hp ||
        ((Hp = 1),
        (Vp = function (t) {
          return t
            ? typeof t == "symbol"
              ? !0
              : !t.constructor || t.constructor.name !== "Symbol"
                ? !1
                : t[t.constructor.toStringTag] === "Symbol"
            : !1;
        })),
      Vp
    );
  }
  var el, Gp;
  function l0() {
    if (Gp) return el;
    Gp = 1;
    var t = eT();
    return (
      (el = function (e) {
        if (!t(e)) throw new TypeError(e + " is not a symbol");
        return e;
      }),
      el
    );
  }
  var nl, Wp;
  function nT() {
    if (Wp) return nl;
    Wp = 1;
    var t = pr(),
      e = Object.create,
      n = Object.defineProperty,
      r = Object.prototype,
      i = e(null);
    return (
      (nl = function (o) {
        for (var s = 0, a, l; i[o + (s || "")]; ) ++s;
        return (
          (o += s || ""),
          (i[o] = !0),
          (a = "@@" + o),
          n(
            r,
            a,
            t.gs(null, function (u) {
              l || ((l = !0), n(this, a, t(u)), (l = !1));
            }),
          ),
          a
        );
      }),
      nl
    );
  }
  var rl, Kp;
  function rT() {
    if (Kp) return rl;
    Kp = 1;
    var t = pr(),
      e = Qs().Symbol;
    return (
      (rl = function (n) {
        return Object.defineProperties(n, {
          hasInstance: t("", (e && e.hasInstance) || n("hasInstance")),
          isConcatSpreadable: t("", (e && e.isConcatSpreadable) || n("isConcatSpreadable")),
          iterator: t("", (e && e.iterator) || n("iterator")),
          match: t("", (e && e.match) || n("match")),
          replace: t("", (e && e.replace) || n("replace")),
          search: t("", (e && e.search) || n("search")),
          species: t("", (e && e.species) || n("species")),
          split: t("", (e && e.split) || n("split")),
          toPrimitive: t("", (e && e.toPrimitive) || n("toPrimitive")),
          toStringTag: t("", (e && e.toStringTag) || n("toStringTag")),
          unscopables: t("", (e && e.unscopables) || n("unscopables")),
        });
      }),
      rl
    );
  }
  var il, Jp;
  function iT() {
    if (Jp) return il;
    Jp = 1;
    var t = pr(),
      e = l0(),
      n = Object.create(null);
    return (
      (il = function (r) {
        return Object.defineProperties(r, {
          for: t(function (i) {
            return n[i] ? n[i] : (n[i] = r(String(i)));
          }),
          keyFor: t(function (i) {
            var o;
            e(i);
            for (o in n) if (n[o] === i) return o;
          }),
        });
      }),
      il
    );
  }
  var ol, Xp;
  function oT() {
    if (Xp) return ol;
    Xp = 1;
    var t = pr(),
      e = l0(),
      n = Qs().Symbol,
      r = nT(),
      i = rT(),
      o = iT(),
      s = Object.create,
      a = Object.defineProperties,
      l = Object.defineProperty,
      u,
      c,
      f;
    if (typeof n == "function")
      try {
        String(n()), (f = !0);
      } catch {}
    else n = null;
    return (
      (c = function (h) {
        if (this instanceof c) throw new TypeError("Symbol is not a constructor");
        return u(h);
      }),
      (ol = u =
        function h(p) {
          var d;
          if (this instanceof h) throw new TypeError("Symbol is not a constructor");
          return f
            ? n(p)
            : ((d = s(c.prototype)),
              (p = p === void 0 ? "" : String(p)),
              a(d, { __description__: t("", p), __name__: t("", r(p)) }));
        }),
      i(u),
      o(u),
      a(c.prototype, {
        constructor: t(u),
        toString: t("", function () {
          return this.__name__;
        }),
      }),
      a(u.prototype, {
        toString: t(function () {
          return "Symbol (" + e(this).__description__ + ")";
        }),
        valueOf: t(function () {
          return e(this);
        }),
      }),
      l(
        u.prototype,
        u.toPrimitive,
        t("", function () {
          var h = e(this);
          return typeof h == "symbol" ? h : h.toString();
        }),
      ),
      l(u.prototype, u.toStringTag, t("c", "Symbol")),
      l(c.prototype, u.toStringTag, t("c", u.prototype[u.toStringTag])),
      l(c.prototype, u.toPrimitive, t("c", u.prototype[u.toPrimitive])),
      ol
    );
  }
  var Yp, Qp;
  function sT() {
    return Qp || ((Qp = 1), (Yp = tT()() ? Qs().Symbol : oT())), Yp;
  }
  var sl, td;
  function aT() {
    if (td) return sl;
    td = 1;
    var t = Object.prototype.toString,
      e = t.call(
        (function () {
          return arguments;
        })(),
      );
    return (
      (sl = function (n) {
        return t.call(n) === e;
      }),
      sl
    );
  }
  var al, ed;
  function lT() {
    if (ed) return al;
    ed = 1;
    var t = Object.prototype.toString,
      e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    return (
      (al = function (n) {
        return typeof n == "function" && e(t.call(n));
      }),
      al
    );
  }
  var ll, nd;
  function uT() {
    if (nd) return ll;
    nd = 1;
    var t = Object.prototype.toString,
      e = t.call("");
    return (
      (ll = function (n) {
        return typeof n == "string" || (n && typeof n == "object" && (n instanceof String || t.call(n) === e)) || !1;
      }),
      ll
    );
  }
  var ul, rd;
  function cT() {
    if (rd) return ul;
    rd = 1;
    var t = sT().iterator,
      e = aT(),
      n = lT(),
      r = fr(),
      i = qn(),
      o = Zr(),
      s = cr(),
      a = uT(),
      l = Array.isArray,
      u = Function.prototype.call,
      c = { configurable: !0, enumerable: !0, writable: !0, value: null },
      f = Object.defineProperty;
    return (
      (ul = function (h) {
        var p = arguments[1],
          d = arguments[2],
          m,
          y,
          b,
          _,
          w,
          v,
          C,
          R,
          z,
          B;
        if (((h = Object(o(h))), s(p) && i(p), !this || this === Array || !n(this))) {
          if (!p) {
            if (e(h)) return (w = h.length), w !== 1 ? Array.apply(null, h) : ((_ = new Array(1)), (_[0] = h[0]), _);
            if (l(h)) {
              for (_ = new Array((w = h.length)), y = 0; y < w; ++y) _[y] = h[y];
              return _;
            }
          }
          _ = [];
        } else m = this;
        if (!l(h)) {
          if ((z = h[t]) !== void 0) {
            for (C = i(z).call(h), m && (_ = new m()), R = C.next(), y = 0; !R.done; )
              (B = p ? u.call(p, d, R.value, y) : R.value),
                m ? ((c.value = B), f(_, y, c)) : (_[y] = B),
                (R = C.next()),
                ++y;
            w = y;
          } else if (a(h)) {
            for (w = h.length, m && (_ = new m()), y = 0, b = 0; y < w; ++y)
              (B = h[y]),
                y + 1 < w && ((v = B.charCodeAt(0)), v >= 55296 && v <= 56319 && (B += h[++y])),
                (B = p ? u.call(p, d, B, b) : B),
                m ? ((c.value = B), f(_, b, c)) : (_[b] = B),
                ++b;
            w = b;
          }
        }
        if (w === void 0)
          for (w = r(h.length), m && (_ = new m(w)), y = 0; y < w; ++y)
            (B = p ? u.call(p, d, h[y], y) : h[y]), m ? ((c.value = B), f(_, y, c)) : (_[y] = B);
        return m && ((c.value = null), (_.length = w)), _;
      }),
      ul
    );
  }
  var id, od;
  function Ec() {
    return od || ((od = 1), (id = XS()() ? Array.from : cT())), id;
  }
  var cl, sd;
  function fT() {
    if (sd) return cl;
    sd = 1;
    var t = Ec(),
      e = Array.isArray;
    return (
      (cl = function (n) {
        return e(n) ? n : t(n);
      }),
      cl
    );
  }
  var fl, ad;
  function hT() {
    if (ad) return fl;
    ad = 1;
    var t = fT(),
      e = cr(),
      n = qn(),
      r = Array.prototype.slice,
      i;
    return (
      (i = function (o) {
        return this.map(function (s, a) {
          return s ? s(o[a]) : o[a];
        }).concat(r.call(o, this.length));
      }),
      (fl = function (o) {
        return (
          (o = t(o)),
          o.forEach(function (s) {
            e(s) && n(s);
          }),
          i.bind(o)
        );
      }),
      fl
    );
  }
  var hl, ld;
  function pT() {
    if (ld) return hl;
    ld = 1;
    var t = qn();
    return (
      (hl = function (e) {
        var n;
        return typeof e == "function"
          ? { set: e, get: e }
          : ((n = { get: t(e.get) }),
            e.set !== void 0
              ? ((n.set = t(e.set)), e.delete && (n.delete = t(e.delete)), e.clear && (n.clear = t(e.clear)), n)
              : ((n.set = n.get), n));
      }),
      hl
    );
  }
  var pl, ud;
  function dT() {
    if (ud) return pl;
    ud = 1;
    var t = qS(),
      e = s0(),
      n = pr(),
      r = JS().methods,
      i = hT(),
      o = pT(),
      s = Function.prototype.apply,
      a = Function.prototype.call,
      l = Object.create,
      u = Object.defineProperties,
      c = r.on,
      f = r.emit;
    return (
      (pl = function (h, p, d) {
        var m = l(null),
          y,
          b,
          _,
          w,
          v,
          C,
          R,
          z,
          B,
          $,
          E,
          g,
          k,
          D,
          q;
        return (
          p !== !1 ? (b = p) : isNaN(h.length) ? (b = 1) : (b = h.length),
          d.normalizer && (($ = o(d.normalizer)), (_ = $.get), (w = $.set), (v = $.delete), (C = $.clear)),
          d.resolvers != null && (q = i(d.resolvers)),
          _
            ? (D = e(function (O) {
                var T,
                  F,
                  J = arguments;
                if ((q && (J = q(J)), (T = _(J)), T !== null && hasOwnProperty.call(m, T)))
                  return E && y.emit("get", T, J, this), m[T];
                if ((J.length === 1 ? (F = a.call(h, this, J[0])) : (F = s.call(h, this, J)), T === null)) {
                  if (((T = _(J)), T !== null)) throw t("Circular invocation", "CIRCULAR_INVOCATION");
                  T = w(J);
                } else if (hasOwnProperty.call(m, T)) throw t("Circular invocation", "CIRCULAR_INVOCATION");
                return (m[T] = F), g && y.emit("set", T, null, F), F;
              }, b))
            : p === 0
              ? (D = function () {
                  var O;
                  if (hasOwnProperty.call(m, "data")) return E && y.emit("get", "data", arguments, this), m.data;
                  if (
                    (arguments.length ? (O = s.call(h, this, arguments)) : (O = a.call(h, this)),
                    hasOwnProperty.call(m, "data"))
                  )
                    throw t("Circular invocation", "CIRCULAR_INVOCATION");
                  return (m.data = O), g && y.emit("set", "data", null, O), O;
                })
              : (D = function (O) {
                  var T,
                    F = arguments,
                    J;
                  if ((q && (F = q(arguments)), (J = String(F[0])), hasOwnProperty.call(m, J)))
                    return E && y.emit("get", J, F, this), m[J];
                  if (
                    (F.length === 1 ? (T = a.call(h, this, F[0])) : (T = s.call(h, this, F)), hasOwnProperty.call(m, J))
                  )
                    throw t("Circular invocation", "CIRCULAR_INVOCATION");
                  return (m[J] = T), g && y.emit("set", J, null, T), T;
                }),
          (y = {
            original: h,
            memoized: D,
            profileName: d.profileName,
            get: function (O) {
              return q && (O = q(O)), _ ? _(O) : String(O[0]);
            },
            has: function (O) {
              return hasOwnProperty.call(m, O);
            },
            delete: function (O) {
              var T;
              hasOwnProperty.call(m, O) && (v && v(O), (T = m[O]), delete m[O], k && y.emit("delete", O, T));
            },
            clear: function () {
              var O = m;
              C && C(), (m = l(null)), y.emit("clear", O);
            },
            on: function (O, T) {
              return O === "get" ? (E = !0) : O === "set" ? (g = !0) : O === "delete" && (k = !0), c.call(this, O, T);
            },
            emit: f,
            updateEnv: function () {
              h = y.original;
            },
          }),
          _
            ? (R = e(function (O) {
                var T,
                  F = arguments;
                q && (F = q(F)), (T = _(F)), T !== null && y.delete(T);
              }, b))
            : p === 0
              ? (R = function () {
                  return y.delete("data");
                })
              : (R = function (O) {
                  return q && (O = q(arguments)[0]), y.delete(O);
                }),
          (z = e(function () {
            var O,
              T = arguments;
            return p === 0 ? m.data : (q && (T = q(T)), _ ? (O = _(T)) : (O = String(T[0])), m[O]);
          })),
          (B = e(function () {
            var O,
              T = arguments;
            return p === 0
              ? y.has("data")
              : (q && (T = q(T)), _ ? (O = _(T)) : (O = String(T[0])), O === null ? !1 : y.has(O));
          })),
          u(D, { __memoized__: n(!0), delete: n(R), clear: n(y.clear), _get: n(z), _has: n(B) }),
          y
        );
      }),
      pl
    );
  }
  var dl, cd;
  function gT() {
    if (cd) return dl;
    cd = 1;
    var t = qn(),
      e = Ys(),
      n = hr(),
      r = dT(),
      i = r0();
    return (
      (dl = function o(s) {
        var a, l, u;
        if ((t(s), (a = Object(arguments[1])), a.async && a.promise))
          throw new Error("Options 'async' and 'promise' cannot be used together");
        return hasOwnProperty.call(s, "__memoized__") && !a.force
          ? s
          : ((l = i(a.length, s.length, a.async && n.async)),
            (u = r(s, l, a)),
            e(n, function (c, f) {
              a[f] && c(a[f], u, a);
            }),
            o.__profiler__ && o.__profiler__(u),
            u.updateEnv(),
            u.memoized);
      }),
      dl
    );
  }
  var fd, hd;
  function mT() {
    return (
      hd ||
        ((hd = 1),
        (fd = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        })),
      fd
    );
  }
  var pd, dd;
  function _T() {
    return (
      dd ||
        ((dd = 1),
        (pd = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, i = t; --i; ) n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        })),
      pd
    );
  }
  var gd, md;
  function vT() {
    return (
      md ||
        ((md = 1),
        (gd = function () {
          var t = Number.isNaN;
          return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
        })),
      gd
    );
  }
  var _d, vd;
  function yT() {
    return (
      vd ||
        ((vd = 1),
        (_d = function (t) {
          return t !== t;
        })),
      _d
    );
  }
  var yd, bd;
  function bT() {
    return bd || ((bd = 1), (yd = vT()() ? Number.isNaN : yT())), yd;
  }
  var gl, wd;
  function Cc() {
    if (wd) return gl;
    wd = 1;
    var t = bT(),
      e = fr(),
      n = Zr(),
      r = Array.prototype.indexOf,
      i = Object.prototype.hasOwnProperty,
      o = Math.abs,
      s = Math.floor;
    return (
      (gl = function (a) {
        var l, u, c, f;
        if (!t(a)) return r.apply(this, arguments);
        for (
          u = e(n(this).length),
            c = arguments[1],
            isNaN(c) ? (c = 0) : c >= 0 ? (c = s(c)) : (c = e(this.length) - s(o(c))),
            l = c;
          l < u;
          ++l
        )
          if (i.call(this, l) && ((f = this[l]), t(f))) return l;
        return -1;
      }),
      gl
    );
  }
  var ml, xd;
  function wT() {
    if (xd) return ml;
    xd = 1;
    var t = Cc(),
      e = Object.create;
    return (
      (ml = function () {
        var n = 0,
          r = [],
          i = e(null);
        return {
          get: function (o) {
            var s = 0,
              a = r,
              l,
              u = o.length;
            if (u === 0) return a[u] || null;
            if ((a = a[u])) {
              for (; s < u - 1; ) {
                if (((l = t.call(a[0], o[s])), l === -1)) return null;
                (a = a[1][l]), ++s;
              }
              return (l = t.call(a[0], o[s])), l === -1 ? null : a[1][l] || null;
            }
            return null;
          },
          set: function (o) {
            var s = 0,
              a = r,
              l,
              u = o.length;
            if (u === 0) a[u] = ++n;
            else {
              for (a[u] || (a[u] = [[], []]), a = a[u]; s < u - 1; )
                (l = t.call(a[0], o[s])),
                  l === -1 && ((l = a[0].push(o[s]) - 1), a[1].push([[], []])),
                  (a = a[1][l]),
                  ++s;
              (l = t.call(a[0], o[s])), l === -1 && (l = a[0].push(o[s]) - 1), (a[1][l] = ++n);
            }
            return (i[n] = o), n;
          },
          delete: function (o) {
            var s = 0,
              a = r,
              l,
              u = i[o],
              c = u.length,
              f = [];
            if (c === 0) delete a[c];
            else if ((a = a[c])) {
              for (; s < c - 1; ) {
                if (((l = t.call(a[0], u[s])), l === -1)) return;
                f.push(a, l), (a = a[1][l]), ++s;
              }
              if (((l = t.call(a[0], u[s])), l === -1)) return;
              for (o = a[1][l], a[0].splice(l, 1), a[1].splice(l, 1); !a[0].length && f.length; )
                (l = f.pop()), (a = f.pop()), a[0].splice(l, 1), a[1].splice(l, 1);
            }
            delete i[o];
          },
          clear: function () {
            (r = []), (i = e(null));
          },
        };
      }),
      ml
    );
  }
  var _l, kd;
  function xT() {
    if (kd) return _l;
    kd = 1;
    var t = Cc();
    return (
      (_l = function () {
        var e = 0,
          n = [],
          r = [];
        return {
          get: function (i) {
            var o = t.call(n, i[0]);
            return o === -1 ? null : r[o];
          },
          set: function (i) {
            return n.push(i[0]), r.push(++e), e;
          },
          delete: function (i) {
            var o = t.call(r, i);
            o !== -1 && (n.splice(o, 1), r.splice(o, 1));
          },
          clear: function () {
            (n = []), (r = []);
          },
        };
      }),
      _l
    );
  }
  var vl, Ad;
  function kT() {
    if (Ad) return vl;
    Ad = 1;
    var t = Cc(),
      e = Object.create;
    return (
      (vl = function (n) {
        var r = 0,
          i = [[], []],
          o = e(null);
        return {
          get: function (s) {
            for (var a = 0, l = i, u; a < n - 1; ) {
              if (((u = t.call(l[0], s[a])), u === -1)) return null;
              (l = l[1][u]), ++a;
            }
            return (u = t.call(l[0], s[a])), u === -1 ? null : l[1][u] || null;
          },
          set: function (s) {
            for (var a = 0, l = i, u; a < n - 1; )
              (u = t.call(l[0], s[a])),
                u === -1 && ((u = l[0].push(s[a]) - 1), l[1].push([[], []])),
                (l = l[1][u]),
                ++a;
            return (u = t.call(l[0], s[a])), u === -1 && (u = l[0].push(s[a]) - 1), (l[1][u] = ++r), (o[r] = s), r;
          },
          delete: function (s) {
            for (var a = 0, l = i, u, c = [], f = o[s]; a < n - 1; ) {
              if (((u = t.call(l[0], f[a])), u === -1)) return;
              c.push(l, u), (l = l[1][u]), ++a;
            }
            if (((u = t.call(l[0], f[a])), u !== -1)) {
              for (s = l[1][u], l[0].splice(u, 1), l[1].splice(u, 1); !l[0].length && c.length; )
                (u = c.pop()), (l = c.pop()), l[0].splice(u, 1), l[1].splice(u, 1);
              delete o[s];
            }
          },
          clear: function () {
            (i = [[], []]), (o = e(null));
          },
        };
      }),
      vl
    );
  }
  var Ed = {},
    yl,
    Cd;
  function u0() {
    if (Cd) return yl;
    Cd = 1;
    var t = qn(),
      e = Ys(),
      n = Function.prototype.call;
    return (
      (yl = function (r, i) {
        var o = {},
          s = arguments[2];
        return (
          t(i),
          e(r, function (a, l, u, c) {
            o[l] = n.call(i, s, a, l, u, c);
          }),
          o
        );
      }),
      yl
    );
  }
  var bl, Sd;
  function Sc() {
    if (Sd) return bl;
    Sd = 1;
    var t = function (n) {
        if (typeof n != "function") throw new TypeError(n + " is not a function");
        return n;
      },
      e = function (n) {
        var r = document.createTextNode(""),
          i,
          o,
          s = 0;
        return (
          new n(function () {
            var a;
            if (i) o && (i = o.concat(i));
            else {
              if (!o) return;
              i = o;
            }
            if (((o = i), (i = null), typeof o == "function")) {
              (a = o), (o = null), a();
              return;
            }
            for (r.data = s = ++s % 2; o; ) (a = o.shift()), o.length || (o = null), a();
          }).observe(r, { characterData: !0 }),
          function (a) {
            if ((t(a), i)) {
              typeof i == "function" ? (i = [i, a]) : i.push(a);
              return;
            }
            (i = a), (r.data = s = ++s % 2);
          }
        );
      };
    return (
      (bl = (function () {
        if (typeof process == "object" && process && typeof process.nextTick == "function") return process.nextTick;
        if (typeof queueMicrotask == "function")
          return function (n) {
            queueMicrotask(t(n));
          };
        if (typeof document == "object" && document) {
          if (typeof MutationObserver == "function") return e(MutationObserver);
          if (typeof WebKitMutationObserver == "function") return e(WebKitMutationObserver);
        }
        return typeof setImmediate == "function"
          ? function (n) {
              setImmediate(t(n));
            }
          : typeof setTimeout == "function" || typeof setTimeout == "object"
            ? function (n) {
                setTimeout(t(n), 0);
              }
            : null;
      })()),
      bl
    );
  }
  var Td;
  function AT() {
    if (Td) return Ed;
    Td = 1;
    var t = Ec(),
      e = u0(),
      n = o0(),
      r = s0(),
      i = Sc(),
      o = Array.prototype.slice,
      s = Function.prototype.apply,
      a = Object.create;
    return (
      (hr().async = function (l, u) {
        var c = a(null),
          f = a(null),
          h = u.memoized,
          p = u.original,
          d,
          m,
          y;
        u.memoized = r(function (b) {
          var _ = arguments,
            w = _[_.length - 1];
          return typeof w == "function" && ((d = w), (_ = o.call(_, 0, -1))), h.apply((m = this), (y = _));
        }, h);
        try {
          n(u.memoized, h);
        } catch {}
        u.on("get", function (b) {
          var _, w, v;
          if (d) {
            if (c[b]) {
              typeof c[b] == "function" ? (c[b] = [c[b], d]) : c[b].push(d), (d = null);
              return;
            }
            (_ = d),
              (w = m),
              (v = y),
              (d = m = y = null),
              i(function () {
                var C;
                hasOwnProperty.call(f, b)
                  ? ((C = f[b]), u.emit("getasync", b, v, w), s.call(_, C.context, C.args))
                  : ((d = _), (m = w), (y = v), h.apply(w, v));
              });
          }
        }),
          (u.original = function () {
            var b, _, w, v;
            return d
              ? ((b = t(arguments)),
                (_ = function C(R) {
                  var z,
                    B,
                    $ = C.id;
                  if ($ == null) {
                    i(s.bind(C, this, arguments));
                    return;
                  }
                  if ((delete C.id, (z = c[$]), delete c[$], !!z))
                    return (
                      (B = t(arguments)),
                      u.has($) &&
                        (R
                          ? u.delete($)
                          : ((f[$] = { context: this, args: B }),
                            u.emit("setasync", $, typeof z == "function" ? 1 : z.length))),
                      typeof z == "function"
                        ? (v = s.call(z, this, B))
                        : z.forEach(function (E) {
                            v = s.call(E, this, B);
                          }, this),
                      v
                    );
                }),
                (w = d),
                (d = m = y = null),
                b.push(_),
                (v = s.call(p, this, b)),
                (_.cb = w),
                (d = _),
                v)
              : s.call(p, this, arguments);
          }),
          u.on("set", function (b) {
            if (!d) {
              u.delete(b);
              return;
            }
            c[b] ? (typeof c[b] == "function" ? (c[b] = [c[b], d.cb]) : c[b].push(d.cb)) : (c[b] = d.cb),
              delete d.cb,
              (d.id = b),
              (d = null);
          }),
          u.on("delete", function (b) {
            var _;
            hasOwnProperty.call(c, b) ||
              (f[b] && ((_ = f[b]), delete f[b], u.emit("deleteasync", b, o.call(_.args, 1))));
          }),
          u.on("clear", function () {
            var b = f;
            (f = a(null)),
              u.emit(
                "clearasync",
                e(b, function (_) {
                  return o.call(_.args, 1);
                }),
              );
          });
      }),
      Ed
    );
  }
  var $d = {},
    wl,
    Dd;
  function ET() {
    if (Dd) return wl;
    Dd = 1;
    var t = Array.prototype.forEach,
      e = Object.create;
    return (
      (wl = function (n) {
        var r = e(null);
        return (
          t.call(arguments, function (i) {
            r[i] = !0;
          }),
          r
        );
      }),
      wl
    );
  }
  var Od, Rd;
  function c0() {
    return (
      Rd ||
        ((Rd = 1),
        (Od = function (t) {
          return typeof t == "function";
        })),
      Od
    );
  }
  var xl, Fd;
  function CT() {
    if (Fd) return xl;
    Fd = 1;
    var t = c0();
    return (
      (xl = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          throw new TypeError("Passed argument cannot be stringifed");
        }
      }),
      xl
    );
  }
  var kl, zd;
  function ST() {
    if (zd) return kl;
    zd = 1;
    var t = Zr(),
      e = CT();
    return (
      (kl = function (n) {
        return e(t(n));
      }),
      kl
    );
  }
  var Al, Pd;
  function TT() {
    if (Pd) return Al;
    Pd = 1;
    var t = c0();
    return (
      (Al = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          return "<Non-coercible to string value>";
        }
      }),
      Al
    );
  }
  var El, Id;
  function $T() {
    if (Id) return El;
    Id = 1;
    var t = TT(),
      e = /[\n\r\u2028\u2029]/g;
    return (
      (El = function (n) {
        var r = t(n);
        return (
          r.length > 100 && (r = r.slice(0, 99) + "…"),
          (r = r.replace(e, function (i) {
            return JSON.stringify(i).slice(1, -1);
          })),
          r
        );
      }),
      El
    );
  }
  var bo = { exports: {} },
    jd;
  function f0() {
    if (jd) return bo.exports;
    (jd = 1), (bo.exports = t), (bo.exports.default = t);
    function t(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
    }
    return bo.exports;
  }
  var Md;
  function DT() {
    if (Md) return $d;
    Md = 1;
    var t = u0(),
      e = ET(),
      n = ST(),
      r = $T(),
      i = f0(),
      o = Sc(),
      s = Object.create,
      a = e("then", "then:finally", "done", "done:finally");
    return (
      (hr().promise = function (l, u) {
        var c = s(null),
          f = s(null),
          h = s(null);
        if (l === !0) l = null;
        else if (((l = n(l)), !a[l])) throw new TypeError("'" + r(l) + "' is not valid promise mode");
        u.on("set", function (p, d, m) {
          var y = !1;
          if (!i(m)) {
            (f[p] = m), u.emit("setasync", p, 1);
            return;
          }
          (c[p] = 1), (h[p] = m);
          var b = function (C) {
              var R = c[p];
              if (y)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              R && (delete c[p], (f[p] = C), u.emit("setasync", p, R));
            },
            _ = function () {
              (y = !0), c[p] && (delete c[p], delete h[p], u.delete(p));
            },
            w = l;
          if ((w || (w = "then"), w === "then")) {
            var v = function () {
              o(_);
            };
            (m = m.then(function (C) {
              o(b.bind(this, C));
            }, v)),
              typeof m.finally == "function" && m.finally(v);
          } else if (w === "done") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            m.done(b, _);
          } else if (w === "done:finally") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            if (typeof m.finally != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            m.done(b), m.finally(_);
          }
        }),
          u.on("get", function (p, d, m) {
            var y;
            if (c[p]) {
              ++c[p];
              return;
            }
            y = h[p];
            var b = function () {
              u.emit("getasync", p, d, m);
            };
            i(y)
              ? typeof y.done == "function"
                ? y.done(b)
                : y.then(function () {
                    o(b);
                  })
              : b();
          }),
          u.on("delete", function (p) {
            if ((delete h[p], c[p])) {
              delete c[p];
              return;
            }
            if (hasOwnProperty.call(f, p)) {
              var d = f[p];
              delete f[p], u.emit("deleteasync", p, [d]);
            }
          }),
          u.on("clear", function () {
            var p = f;
            (f = s(null)),
              (c = s(null)),
              (h = s(null)),
              u.emit(
                "clearasync",
                t(p, function (d) {
                  return [d];
                }),
              );
          });
      }),
      $d
    );
  }
  var Nd = {},
    Ld;
  function OT() {
    if (Ld) return Nd;
    Ld = 1;
    var t = qn(),
      e = Ys(),
      n = hr(),
      r = Function.prototype.apply;
    return (
      (n.dispose = function (i, o, s) {
        var a;
        if ((t(i), (s.async && n.async) || (s.promise && n.promise))) {
          o.on(
            "deleteasync",
            (a = function (l, u) {
              r.call(i, null, u);
            }),
          ),
            o.on("clearasync", function (l) {
              e(l, function (u, c) {
                a(c, u);
              });
            });
          return;
        }
        o.on(
          "delete",
          (a = function (l, u) {
            i(u);
          }),
        ),
          o.on("clear", function (l) {
            e(l, function (u, c) {
              a(c, u);
            });
          });
      }),
      Nd
    );
  }
  var Bd = {},
    qd,
    Ud;
  function RT() {
    return Ud || ((Ud = 1), (qd = 2147483647)), qd;
  }
  var Cl, Zd;
  function FT() {
    if (Zd) return Cl;
    Zd = 1;
    var t = fr(),
      e = RT();
    return (
      (Cl = function (n) {
        if (((n = t(n)), n > e)) throw new TypeError(n + " exceeds maximum possible timeout");
        return n;
      }),
      Cl
    );
  }
  var Vd;
  function zT() {
    if (Vd) return Bd;
    Vd = 1;
    var t = Ec(),
      e = Ys(),
      n = Sc(),
      r = f0(),
      i = FT(),
      o = hr(),
      s = Function.prototype,
      a = Math.max,
      l = Math.min,
      u = Object.create;
    return (
      (o.maxAge = function (c, f, h) {
        var p, d, m, y;
        (c = i(c)),
          c &&
            ((p = u(null)),
            (d = (h.async && o.async) || (h.promise && o.promise) ? "async" : ""),
            f.on("set" + d, function (b) {
              (p[b] = setTimeout(function () {
                f.delete(b);
              }, c)),
                typeof p[b].unref == "function" && p[b].unref(),
                y &&
                  (y[b] && y[b] !== "nextTick" && clearTimeout(y[b]),
                  (y[b] = setTimeout(function () {
                    delete y[b];
                  }, m)),
                  typeof y[b].unref == "function" && y[b].unref());
            }),
            f.on("delete" + d, function (b) {
              clearTimeout(p[b]), delete p[b], y && (y[b] !== "nextTick" && clearTimeout(y[b]), delete y[b]);
            }),
            h.preFetch &&
              (h.preFetch === !0 || isNaN(h.preFetch) ? (m = 0.333) : (m = a(l(Number(h.preFetch), 1), 0)),
              m &&
                ((y = {}),
                (m = (1 - m) * c),
                f.on("get" + d, function (b, _, w) {
                  y[b] ||
                    ((y[b] = "nextTick"),
                    n(function () {
                      var v;
                      y[b] === "nextTick" &&
                        (delete y[b],
                        f.delete(b),
                        h.async && ((_ = t(_)), _.push(s)),
                        (v = f.memoized.apply(w, _)),
                        h.promise && r(v) && (typeof v.done == "function" ? v.done(s, s) : v.then(s, s)));
                    }));
                }))),
            f.on("clear" + d, function () {
              e(p, function (b) {
                clearTimeout(b);
              }),
                (p = {}),
                y &&
                  (e(y, function (b) {
                    b !== "nextTick" && clearTimeout(b);
                  }),
                  (y = {}));
            }));
      }),
      Bd
    );
  }
  var Hd = {},
    Sl,
    Gd;
  function PT() {
    if (Gd) return Sl;
    Gd = 1;
    var t = fr(),
      e = Object.create,
      n = Object.prototype.hasOwnProperty;
    return (
      (Sl = function (r) {
        var i = 0,
          o = 1,
          s = e(null),
          a = e(null),
          l = 0,
          u;
        return (
          (r = t(r)),
          {
            hit: function (c) {
              var f = a[c],
                h = ++l;
              if (((s[h] = c), (a[c] = h), !f)) return ++i, i <= r ? void 0 : ((c = s[o]), u(c), c);
              if ((delete s[f], o === f)) for (; !n.call(s, ++o); );
            },
            delete: (u = function (c) {
              var f = a[c];
              if (f && (delete s[f], delete a[c], --i, o === f)) {
                if (!i) {
                  (l = 0), (o = 1);
                  return;
                }
                for (; !n.call(s, ++o); );
              }
            }),
            clear: function () {
              (i = 0), (o = 1), (s = e(null)), (a = e(null)), (l = 0);
            },
          }
        );
      }),
      Sl
    );
  }
  var Wd;
  function IT() {
    if (Wd) return Hd;
    Wd = 1;
    var t = fr(),
      e = PT(),
      n = hr();
    return (
      (n.max = function (r, i, o) {
        var s, a, l;
        (r = t(r)),
          r &&
            ((a = e(r)),
            (s = (o.async && n.async) || (o.promise && n.promise) ? "async" : ""),
            i.on(
              "set" + s,
              (l = function (u) {
                (u = a.hit(u)), u !== void 0 && i.delete(u);
              }),
            ),
            i.on("get" + s, l),
            i.on("delete" + s, a.delete),
            i.on("clear" + s, a.clear));
      }),
      Hd
    );
  }
  var Kd = {},
    Jd;
  function jT() {
    if (Jd) return Kd;
    Jd = 1;
    var t = pr(),
      e = hr(),
      n = Object.create,
      r = Object.defineProperties;
    return (
      (e.refCounter = function (i, o, s) {
        var a, l;
        (a = n(null)),
          (l = (s.async && e.async) || (s.promise && e.promise) ? "async" : ""),
          o.on("set" + l, function (u, c) {
            a[u] = c || 1;
          }),
          o.on("get" + l, function (u) {
            ++a[u];
          }),
          o.on("delete" + l, function (u) {
            delete a[u];
          }),
          o.on("clear" + l, function () {
            a = {};
          }),
          r(o.memoized, {
            deleteRef: t(function () {
              var u = o.get(arguments);
              return u === null || !a[u] ? null : --a[u] ? !1 : (o.delete(u), !0);
            }),
            getRefCount: t(function () {
              var u = o.get(arguments);
              return u === null || !a[u] ? 0 : a[u];
            }),
          });
      }),
      Kd
    );
  }
  var Tl, Xd;
  function MT() {
    if (Xd) return Tl;
    Xd = 1;
    var t = n0(),
      e = r0(),
      n = gT();
    return (
      (Tl = function (r) {
        var i = t(arguments[1]),
          o;
        return (
          i.normalizer ||
            ((o = i.length = e(i.length, r.length, i.async)),
            o !== 0 &&
              (i.primitive
                ? o === !1
                  ? (i.normalizer = mT())
                  : o > 1 && (i.normalizer = _T()(o))
                : o === !1
                  ? (i.normalizer = wT()())
                  : o === 1
                    ? (i.normalizer = xT()())
                    : (i.normalizer = kT()(o)))),
          i.async && AT(),
          i.promise && DT(),
          i.dispose && OT(),
          i.maxAge && zT(),
          i.max && IT(),
          i.refCounter && jT(),
          n(r, i)
        );
      }),
      Tl
    );
  }
  var NT = MT();
  const en = e0(NT),
    LT = en((t, e, n, r) => {
      const i = Math.max(t, n),
        o = Math.min(e, r);
      return i < o;
    }),
    ta = (t, e) => LT(t.start, t.end, e.start, e.end),
    BT = (t, e, n = !0) => {
      if (t.start === e.start) {
        const r = n ? -1 : 1,
          i = n ? 1 : -1;
        return e.end < t.end ? r : i;
      }
      return t.start < e.start ? -1 : 1;
    },
    qT = (t, e) => {
      const n = new Map();
      e.forEach((i) => {
        const o = t.getLinesForAnnotation(i.id),
          s = o.length;
        o.forEach((a, l) => {
          const u = n.get(a.uuid) ?? [];
          u.push({ annotation: i, height: s, index: l }), n.set(a.uuid, u);
        });
      });
      let r = 0;
      return (
        t.lines.forEach((i) => {
          if (!n.has(i.uuid)) return;
          const o = TS(n.get(i.uuid), (a) => -a.height),
            s = o.map((a) => a.annotation.weight).filter((a) => a !== void 0);
          o.forEach((a) => {
            if (a.index > 0) {
              !a.annotation.weight === void 0 && console.warn("no weight for annotation", a.annotation);
              return;
            }
            if (a.annotation.weight !== void 0) {
              console.warn("!!! weight for annotation already set?", a.annotation);
              return;
            }
            let l = 0;
            for (; a.annotation.weight === void 0; )
              s.includes(l) ? l++ : (s.push(l), (a.annotation.weight = l)), r < l && (r = l);
          });
        }),
        r
      );
    },
    UT = (t, e) => t.filter((n) => (n.id === e.id ? !1 : ta(n, e))),
    ZT = (t) => {
      let e = 0;
      return (
        t.sort(BT).forEach((n) => {
          var r;
          if (n.weight) return;
          const i = UT(t, n);
          if (n.weight === void 0)
            if (i.length === 0) n.weight = 0;
            else {
              const o = ((r = Yv(i, (s) => s.weight)) == null ? void 0 : r.weight) ?? -1;
              (n.weight = o + 1), (e = e + 1), e < n.weight && (e = n.weight);
            }
        }),
        e
      );
    },
    VT = (t, e) => {
      let n = 0;
      return (
        t.forEach((r) => {
          const i = e.get(r.lineNumber) ?? [];
          ZT(i);
        }),
        t.forEach((r) => {
          var i;
          const o = e.get(r.lineNumber) ?? [],
            s = ((i = Yv(o, (a) => a.weight)) == null ? void 0 : i.weight) ?? 0;
          (r.maxLineWeight = s), n < s && (n = s);
        }),
        n
      );
    };
  class HT {
    constructor(e, n) {
      st(this, "textDirection"),
        st(this, "blockEvents", !1),
        st(this, "annotationLineMap", new Map()),
        st(this, "annotationsMap", new Map()),
        st(this, "maxGutterWeight", 0),
        st(this, "maxLineWeight", 0),
        st(this, "gutterAnnotationIds", new Set()),
        st(this, "textLength", 0),
        st(this, "drawAnnotations", []),
        st(this, "lineAnnotationMap", new Map()),
        st(this, "lineGutterMap", new Map()),
        (this.lines = e),
        (this.eventListener = n),
        this.resetAnnotations();
    }
    resetAnnotations() {
      this.annotationLineMap.clear(),
        this.annotationsMap.clear(),
        (this.maxGutterWeight = 0),
        (this.maxLineWeight = 0),
        this.gutterAnnotationIds.clear(),
        (this.drawAnnotations = []),
        (this.textLength = 0),
        this.lines.forEach((e) => {
          this.lineAnnotationMap.set(e.lineNumber, []),
            this.lineGutterMap.set(e.lineNumber, []),
            this.textLength < e.end && (this.textLength = e.end);
        });
    }
    get gutterAnnotations() {
      return Array.from(this.gutterAnnotationIds).map((e) => this.annotationsMap.get(e));
    }
    get annotations() {
      return Array.from(this.annotationsMap.values());
    }
    getDrawAnnotations(e) {
      return this.drawAnnotations.filter((n) => n.annotationUuid === e);
    }
    getAnnotation(e) {
      return this.annotationsMap.get(e);
    }
    getAnnotationDraw(e) {
      return this.drawAnnotations.filter((n) => n.annotationUuid === e);
    }
    clearDrawAnnotation() {
      this.drawAnnotations = [];
    }
    addDrawAnnotation(e) {
      this.drawAnnotations.push(e);
    }
    getLine(e) {
      return this.lines.find((n) => n.uuid === e);
    }
    getAnnotations(e) {
      return this.lineAnnotationMap.get(e) || [];
    }
    getLinesForAnnotation(e) {
      return this.annotationLineMap.get(e) ?? [];
    }
    setAnnotation(e, n, r = !0) {
      this.annotationLineMap.set(e.id, n),
        e.isGutter ? this.setGutterAnntoation(e, n) : this.annotationsMap.set(e.id, e);
      const i = e.isGutter ? this.lineGutterMap : this.lineAnnotationMap;
      n.forEach((o) => i.get(o.lineNumber).push(e)),
        r && (e.isGutter ? this.calculateMaxGutterWeight() : this.calculateLinesWeights());
    }
    setGutterAnntoation(e, n) {
      this.gutterAnnotationIds.add(e.id), this.annotationsMap.set(e.id, e);
    }
    removeAnnotation(e, n = !0) {
      const r = this.annotationLineMap.get(e.id) ?? [];
      this.annotationsMap.delete(e.id),
        e.isGutter
          ? (this.gutterAnnotationIds.delete(e.id), this.removeAnnotationGutter(r, e))
          : this.removeAnnotationFromLine(r, e),
        this.annotationLineMap.delete(e.id),
        n && (e.isGutter ? this.calculateMaxGutterWeight() : this.calculateLinesWeights()),
        (this.drawAnnotations = this.drawAnnotations.filter((i) => i.annotationUuid !== e.id));
    }
    removeAnnotationFromLine(e, n) {
      e.forEach((r) => {
        const i = this.lineAnnotationMap.get(r.lineNumber).filter((o) => o.id !== n.id);
        this.lineAnnotationMap.set(r.lineNumber, i);
      });
    }
    removeAnnotationGutter(e, n) {
      e.forEach((r) => {
        const i = this.lineGutterMap.get(r.lineNumber).filter((o) => o.id !== n.id);
        this.lineGutterMap.set(r.lineNumber, i);
      });
    }
    calculateMaxGutterWeight() {
      this.maxGutterWeight = qT(this, this.gutterAnnotations);
    }
    calculateLinesWeights() {
      this.maxLineWeight = VT(this.lines, this.lineAnnotationMap);
    }
    calculateAllWeights() {
      this.calculateMaxGutterWeight(), this.calculateLinesWeights();
    }
  }
  const GT = (t, e, n) => {
    Ce.debug("Use lineadapter", e.name);
    const r = e.parse(t),
      i = new HT(r, n ?? new bv());
    return (i.textDirection = e.textDirection), i;
  };
  var WT = { value: () => {} };
  function Tc() {
    for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
      if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
      n[r] = [];
    }
    return new qo(n);
  }
  function qo(t) {
    this._ = t;
  }
  function KT(t, e) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (n) {
        var r = "",
          i = n.indexOf(".");
        if ((i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))), n && !e.hasOwnProperty(n)))
          throw new Error("unknown type: " + n);
        return { type: n, name: r };
      });
  }
  qo.prototype = Tc.prototype = {
    constructor: qo,
    on: function (t, e) {
      var n = this._,
        r = KT(t + "", n),
        i,
        o = -1,
        s = r.length;
      if (arguments.length < 2) {
        for (; ++o < s; ) if ((i = (t = r[o]).type) && (i = JT(n[i], t.name))) return i;
        return;
      }
      if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
      for (; ++o < s; )
        if ((i = (t = r[o]).type)) n[i] = Yd(n[i], t.name, e);
        else if (e == null) for (i in n) n[i] = Yd(n[i], t.name, null);
      return this;
    },
    copy: function () {
      var t = {},
        e = this._;
      for (var n in e) t[n] = e[n].slice();
      return new qo(t);
    },
    call: function (t, e) {
      if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
    },
    apply: function (t, e, n) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
    },
  };
  function JT(t, e) {
    for (var n = 0, r = t.length, i; n < r; ++n) if ((i = t[n]).name === e) return i.value;
  }
  function Yd(t, e, n) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === e) {
        (t[r] = WT), (t = t.slice(0, r).concat(t.slice(r + 1)));
        break;
      }
    return n != null && t.push({ name: e, value: n }), t;
  }
  var vu = "http://www.w3.org/1999/xhtml";
  const Qd = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: vu,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  function ea(t) {
    var e = (t += ""),
      n = e.indexOf(":");
    return (
      n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)),
      Qd.hasOwnProperty(e) ? { space: Qd[e], local: t } : t
    );
  }
  function XT(t) {
    return function () {
      var e = this.ownerDocument,
        n = this.namespaceURI;
      return n === vu && e.documentElement.namespaceURI === vu ? e.createElement(t) : e.createElementNS(n, t);
    };
  }
  function YT(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function h0(t) {
    var e = ea(t);
    return (e.local ? YT : XT)(e);
  }
  function QT() {}
  function $c(t) {
    return t == null
      ? QT
      : function () {
          return this.querySelector(t);
        };
  }
  function t$(t) {
    typeof t != "function" && (t = $c(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var o = e[i], s = o.length, a = (r[i] = new Array(s)), l, u, c = 0; c < s; ++c)
        (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), (a[c] = u));
    return new ye(r, this._parents);
  }
  function e$(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
  }
  function n$() {
    return [];
  }
  function p0(t) {
    return t == null
      ? n$
      : function () {
          return this.querySelectorAll(t);
        };
  }
  function r$(t) {
    return function () {
      return e$(t.apply(this, arguments));
    };
  }
  function i$(t) {
    typeof t == "function" ? (t = r$(t)) : (t = p0(t));
    for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
      for (var s = e[o], a = s.length, l, u = 0; u < a; ++u)
        (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), i.push(l));
    return new ye(r, i);
  }
  function d0(t) {
    return function () {
      return this.matches(t);
    };
  }
  function g0(t) {
    return function (e) {
      return e.matches(t);
    };
  }
  var o$ = Array.prototype.find;
  function s$(t) {
    return function () {
      return o$.call(this.children, t);
    };
  }
  function a$() {
    return this.firstElementChild;
  }
  function l$(t) {
    return this.select(t == null ? a$ : s$(typeof t == "function" ? t : g0(t)));
  }
  var u$ = Array.prototype.filter;
  function c$() {
    return Array.from(this.children);
  }
  function f$(t) {
    return function () {
      return u$.call(this.children, t);
    };
  }
  function h$(t) {
    return this.selectAll(t == null ? c$ : f$(typeof t == "function" ? t : g0(t)));
  }
  function p$(t) {
    typeof t != "function" && (t = d0(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var o = e[i], s = o.length, a = (r[i] = []), l, u = 0; u < s; ++u)
        (l = o[u]) && t.call(l, l.__data__, u, o) && a.push(l);
    return new ye(r, this._parents);
  }
  function m0(t) {
    return new Array(t.length);
  }
  function d$() {
    return new ye(this._enter || this._groups.map(m0), this._parents);
  }
  function ss(t, e) {
    (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = e);
  }
  ss.prototype = {
    constructor: ss,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, e) {
      return this._parent.insertBefore(t, e);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    },
  };
  function g$(t) {
    return function () {
      return t;
    };
  }
  function m$(t, e, n, r, i, o) {
    for (var s = 0, a, l = e.length, u = o.length; s < u; ++s)
      (a = e[s]) ? ((a.__data__ = o[s]), (r[s] = a)) : (n[s] = new ss(t, o[s]));
    for (; s < l; ++s) (a = e[s]) && (i[s] = a);
  }
  function _$(t, e, n, r, i, o, s) {
    var a,
      l,
      u = new Map(),
      c = e.length,
      f = o.length,
      h = new Array(c),
      p;
    for (a = 0; a < c; ++a)
      (l = e[a]) && ((h[a] = p = s.call(l, l.__data__, a, e) + ""), u.has(p) ? (i[a] = l) : u.set(p, l));
    for (a = 0; a < f; ++a)
      (p = s.call(t, o[a], a, o) + ""),
        (l = u.get(p)) ? ((r[a] = l), (l.__data__ = o[a]), u.delete(p)) : (n[a] = new ss(t, o[a]));
    for (a = 0; a < c; ++a) (l = e[a]) && u.get(h[a]) === l && (i[a] = l);
  }
  function v$(t) {
    return t.__data__;
  }
  function y$(t, e) {
    if (!arguments.length) return Array.from(this, v$);
    var n = e ? _$ : m$,
      r = this._parents,
      i = this._groups;
    typeof t != "function" && (t = g$(t));
    for (var o = i.length, s = new Array(o), a = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
      var c = r[u],
        f = i[u],
        h = f.length,
        p = b$(t.call(c, c && c.__data__, u, r)),
        d = p.length,
        m = (a[u] = new Array(d)),
        y = (s[u] = new Array(d)),
        b = (l[u] = new Array(h));
      n(c, f, m, y, b, p, e);
      for (var _ = 0, w = 0, v, C; _ < d; ++_)
        if ((v = m[_])) {
          for (_ >= w && (w = _ + 1); !(C = y[w]) && ++w < d; );
          v._next = C || null;
        }
    }
    return (s = new ye(s, r)), (s._enter = a), (s._exit = l), s;
  }
  function b$(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
  }
  function w$() {
    return new ye(this._exit || this._groups.map(m0), this._parents);
  }
  function x$(t, e, n) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      typeof t == "function" ? ((r = t(r)), r && (r = r.selection())) : (r = r.append(t + "")),
      e != null && ((i = e(i)), i && (i = i.selection())),
      n == null ? o.remove() : n(o),
      r && i ? r.merge(i).order() : i
    );
  }
  function k$(t) {
    for (
      var e = t.selection ? t.selection() : t,
        n = this._groups,
        r = e._groups,
        i = n.length,
        o = r.length,
        s = Math.min(i, o),
        a = new Array(i),
        l = 0;
      l < s;
      ++l
    )
      for (var u = n[l], c = r[l], f = u.length, h = (a[l] = new Array(f)), p, d = 0; d < f; ++d)
        (p = u[d] || c[d]) && (h[d] = p);
    for (; l < i; ++l) a[l] = n[l];
    return new ye(a, this._parents);
  }
  function A$() {
    for (var t = this._groups, e = -1, n = t.length; ++e < n; )
      for (var r = t[e], i = r.length - 1, o = r[i], s; --i >= 0; )
        (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), (o = s));
    return this;
  }
  function E$(t) {
    t || (t = C$);
    function e(f, h) {
      return f && h ? t(f.__data__, h.__data__) : !f - !h;
    }
    for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
      for (var s = n[o], a = s.length, l = (i[o] = new Array(a)), u, c = 0; c < a; ++c) (u = s[c]) && (l[c] = u);
      l.sort(e);
    }
    return new ye(i, this._parents).order();
  }
  function C$(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
  }
  function S$() {
    var t = arguments[0];
    return (arguments[0] = this), t.apply(null, arguments), this;
  }
  function T$() {
    return Array.from(this);
  }
  function $$() {
    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
      for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
        var s = r[i];
        if (s) return s;
      }
    return null;
  }
  function D$() {
    let t = 0;
    for (const e of this) ++t;
    return t;
  }
  function O$() {
    return !this.node();
  }
  function R$(t) {
    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
      for (var i = e[n], o = 0, s = i.length, a; o < s; ++o) (a = i[o]) && t.call(a, a.__data__, o, i);
    return this;
  }
  function F$(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function z$(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function P$(t, e) {
    return function () {
      this.setAttribute(t, e);
    };
  }
  function I$(t, e) {
    return function () {
      this.setAttributeNS(t.space, t.local, e);
    };
  }
  function j$(t, e) {
    return function () {
      var n = e.apply(this, arguments);
      n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
    };
  }
  function M$(t, e) {
    return function () {
      var n = e.apply(this, arguments);
      n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
    };
  }
  function N$(t, e) {
    var n = ea(t);
    if (arguments.length < 2) {
      var r = this.node();
      return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
    }
    return this.each(
      (e == null ? (n.local ? z$ : F$) : typeof e == "function" ? (n.local ? M$ : j$) : n.local ? I$ : P$)(n, e),
    );
  }
  function _0(t) {
    return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
  }
  function L$(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function B$(t, e, n) {
    return function () {
      this.style.setProperty(t, e, n);
    };
  }
  function q$(t, e, n) {
    return function () {
      var r = e.apply(this, arguments);
      r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
    };
  }
  function U$(t, e, n) {
    return arguments.length > 1
      ? this.each((e == null ? L$ : typeof e == "function" ? q$ : B$)(t, e, n ?? ""))
      : jr(this.node(), t);
  }
  function jr(t, e) {
    return t.style.getPropertyValue(e) || _0(t).getComputedStyle(t, null).getPropertyValue(e);
  }
  function Z$(t) {
    return function () {
      delete this[t];
    };
  }
  function V$(t, e) {
    return function () {
      this[t] = e;
    };
  }
  function H$(t, e) {
    return function () {
      var n = e.apply(this, arguments);
      n == null ? delete this[t] : (this[t] = n);
    };
  }
  function G$(t, e) {
    return arguments.length > 1 ? this.each((e == null ? Z$ : typeof e == "function" ? H$ : V$)(t, e)) : this.node()[t];
  }
  function v0(t) {
    return t.trim().split(/^|\s+/);
  }
  function Dc(t) {
    return t.classList || new y0(t);
  }
  function y0(t) {
    (this._node = t), (this._names = v0(t.getAttribute("class") || ""));
  }
  y0.prototype = {
    add: function (t) {
      var e = this._names.indexOf(t);
      e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (t) {
      var e = this._names.indexOf(t);
      e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  };
  function b0(t, e) {
    for (var n = Dc(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
  }
  function w0(t, e) {
    for (var n = Dc(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
  }
  function W$(t) {
    return function () {
      b0(this, t);
    };
  }
  function K$(t) {
    return function () {
      w0(this, t);
    };
  }
  function J$(t, e) {
    return function () {
      (e.apply(this, arguments) ? b0 : w0)(this, t);
    };
  }
  function X$(t, e) {
    var n = v0(t + "");
    if (arguments.length < 2) {
      for (var r = Dc(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
      return !0;
    }
    return this.each((typeof e == "function" ? J$ : e ? W$ : K$)(n, e));
  }
  function Y$() {
    this.textContent = "";
  }
  function Q$(t) {
    return function () {
      this.textContent = t;
    };
  }
  function t3(t) {
    return function () {
      var e = t.apply(this, arguments);
      this.textContent = e ?? "";
    };
  }
  function e3(t) {
    return arguments.length
      ? this.each(t == null ? Y$ : (typeof t == "function" ? t3 : Q$)(t))
      : this.node().textContent;
  }
  function n3() {
    this.innerHTML = "";
  }
  function r3(t) {
    return function () {
      this.innerHTML = t;
    };
  }
  function i3(t) {
    return function () {
      var e = t.apply(this, arguments);
      this.innerHTML = e ?? "";
    };
  }
  function o3(t) {
    return arguments.length ? this.each(t == null ? n3 : (typeof t == "function" ? i3 : r3)(t)) : this.node().innerHTML;
  }
  function s3() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function a3() {
    return this.each(s3);
  }
  function l3() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function u3() {
    return this.each(l3);
  }
  function c3(t) {
    var e = typeof t == "function" ? t : h0(t);
    return this.select(function () {
      return this.appendChild(e.apply(this, arguments));
    });
  }
  function f3() {
    return null;
  }
  function h3(t, e) {
    var n = typeof t == "function" ? t : h0(t),
      r = e == null ? f3 : typeof e == "function" ? e : $c(e);
    return this.select(function () {
      return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
    });
  }
  function p3() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function d3() {
    return this.each(p3);
  }
  function g3() {
    var t = this.cloneNode(!1),
      e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
  }
  function m3() {
    var t = this.cloneNode(!0),
      e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
  }
  function _3(t) {
    return this.select(t ? m3 : g3);
  }
  function v3(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
  }
  function y3(t) {
    return function (e) {
      t.call(this, e, this.__data__);
    };
  }
  function b3(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (e) {
        var n = "",
          r = e.indexOf(".");
        return r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))), { type: e, name: n };
      });
  }
  function w3(t) {
    return function () {
      var e = this.__on;
      if (e) {
        for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
          (o = e[n]),
            (!t.type || o.type === t.type) && o.name === t.name
              ? this.removeEventListener(o.type, o.listener, o.options)
              : (e[++r] = o);
        ++r ? (e.length = r) : delete this.__on;
      }
    };
  }
  function x3(t, e, n) {
    return function () {
      var r = this.__on,
        i,
        o = y3(e);
      if (r) {
        for (var s = 0, a = r.length; s < a; ++s)
          if ((i = r[s]).type === t.type && i.name === t.name) {
            this.removeEventListener(i.type, i.listener, i.options),
              this.addEventListener(i.type, (i.listener = o), (i.options = n)),
              (i.value = e);
            return;
          }
      }
      this.addEventListener(t.type, o, n),
        (i = { type: t.type, name: t.name, value: e, listener: o, options: n }),
        r ? r.push(i) : (this.__on = [i]);
    };
  }
  function k3(t, e, n) {
    var r = b3(t + ""),
      i,
      o = r.length,
      s;
    if (arguments.length < 2) {
      var a = this.node().__on;
      if (a) {
        for (var l = 0, u = a.length, c; l < u; ++l)
          for (i = 0, c = a[l]; i < o; ++i) if ((s = r[i]).type === c.type && s.name === c.name) return c.value;
      }
      return;
    }
    for (a = e ? x3 : w3, i = 0; i < o; ++i) this.each(a(r[i], e, n));
    return this;
  }
  function x0(t, e, n) {
    var r = _0(t),
      i = r.CustomEvent;
    typeof i == "function"
      ? (i = new i(e, n))
      : ((i = r.document.createEvent("Event")),
        n ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail)) : i.initEvent(e, !1, !1)),
      t.dispatchEvent(i);
  }
  function A3(t, e) {
    return function () {
      return x0(this, t, e);
    };
  }
  function E3(t, e) {
    return function () {
      return x0(this, t, e.apply(this, arguments));
    };
  }
  function C3(t, e) {
    return this.each((typeof e == "function" ? E3 : A3)(t, e));
  }
  function* S3() {
    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
      for (var r = t[e], i = 0, o = r.length, s; i < o; ++i) (s = r[i]) && (yield s);
  }
  var k0 = [null];
  function ye(t, e) {
    (this._groups = t), (this._parents = e);
  }
  function oo() {
    return new ye([[document.documentElement]], k0);
  }
  function T3() {
    return this;
  }
  ye.prototype = oo.prototype = {
    constructor: ye,
    select: t$,
    selectAll: i$,
    selectChild: l$,
    selectChildren: h$,
    filter: p$,
    data: y$,
    enter: d$,
    exit: w$,
    join: x$,
    merge: k$,
    selection: T3,
    order: A$,
    sort: E$,
    call: S$,
    nodes: T$,
    node: $$,
    size: D$,
    empty: O$,
    each: R$,
    attr: N$,
    style: U$,
    property: G$,
    classed: X$,
    text: e3,
    html: o3,
    raise: a3,
    lower: u3,
    append: c3,
    insert: h3,
    remove: d3,
    clone: _3,
    datum: v3,
    on: k3,
    dispatch: C3,
    [Symbol.iterator]: S3,
  };
  function Mi(t) {
    return typeof t == "string" ? new ye([[document.querySelector(t)]], [document.documentElement]) : new ye([[t]], k0);
  }
  function $3(t) {
    let e;
    for (; (e = t.sourceEvent); ) t = e;
    return t;
  }
  function yu(t, e) {
    if (((t = $3(t)), e === void 0 && (e = t.currentTarget), e)) {
      var n = e.ownerSVGElement || e;
      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return (r.x = t.clientX), (r.y = t.clientY), (r = r.matrixTransform(e.getScreenCTM().inverse())), [r.x, r.y];
      }
      if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect();
        return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
      }
    }
    return [t.pageX, t.pageY];
  }
  const D3 = { passive: !1 },
    Ni = { capture: !0, passive: !1 };
  function $l(t) {
    t.stopImmediatePropagation();
  }
  function Tr(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }
  function O3(t) {
    var e = t.document.documentElement,
      n = Mi(t).on("dragstart.drag", Tr, Ni);
    "onselectstart" in e
      ? n.on("selectstart.drag", Tr, Ni)
      : ((e.__noselect = e.style.MozUserSelect), (e.style.MozUserSelect = "none"));
  }
  function R3(t, e) {
    var n = t.document.documentElement,
      r = Mi(t).on("dragstart.drag", null);
    e &&
      (r.on("click.drag", Tr, Ni),
      setTimeout(function () {
        r.on("click.drag", null);
      }, 0)),
      "onselectstart" in n
        ? r.on("selectstart.drag", null)
        : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
  }
  const wo = (t) => () => t;
  function bu(
    t,
    { sourceEvent: e, subject: n, target: r, identifier: i, active: o, x: s, y: a, dx: l, dy: u, dispatch: c },
  ) {
    Object.defineProperties(this, {
      type: { value: t, enumerable: !0, configurable: !0 },
      sourceEvent: { value: e, enumerable: !0, configurable: !0 },
      subject: { value: n, enumerable: !0, configurable: !0 },
      target: { value: r, enumerable: !0, configurable: !0 },
      identifier: { value: i, enumerable: !0, configurable: !0 },
      active: { value: o, enumerable: !0, configurable: !0 },
      x: { value: s, enumerable: !0, configurable: !0 },
      y: { value: a, enumerable: !0, configurable: !0 },
      dx: { value: l, enumerable: !0, configurable: !0 },
      dy: { value: u, enumerable: !0, configurable: !0 },
      _: { value: c },
    });
  }
  bu.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);
    return t === this._ ? this : t;
  };
  function F3(t) {
    return !t.ctrlKey && !t.button;
  }
  function z3() {
    return this.parentNode;
  }
  function P3(t, e) {
    return e ?? { x: t.x, y: t.y };
  }
  function I3() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function j3() {
    var t = F3,
      e = z3,
      n = P3,
      r = I3,
      i = {},
      o = Tc("start", "drag", "end"),
      s = 0,
      a,
      l,
      u,
      c,
      f = 0;
    function h(v) {
      v.on("mousedown.drag", p)
        .filter(r)
        .on("touchstart.drag", y)
        .on("touchmove.drag", b, D3)
        .on("touchend.drag touchcancel.drag", _)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function p(v, C) {
      if (!(c || !t.call(this, v, C))) {
        var R = w(this, e.call(this, v, C), v, C, "mouse");
        R &&
          (Mi(v.view).on("mousemove.drag", d, Ni).on("mouseup.drag", m, Ni),
          O3(v.view),
          $l(v),
          (u = !1),
          (a = v.clientX),
          (l = v.clientY),
          R("start", v));
      }
    }
    function d(v) {
      if ((Tr(v), !u)) {
        var C = v.clientX - a,
          R = v.clientY - l;
        u = C * C + R * R > f;
      }
      i.mouse("drag", v);
    }
    function m(v) {
      Mi(v.view).on("mousemove.drag mouseup.drag", null), R3(v.view, u), Tr(v), i.mouse("end", v);
    }
    function y(v, C) {
      if (t.call(this, v, C)) {
        var R = v.changedTouches,
          z = e.call(this, v, C),
          B = R.length,
          $,
          E;
        for ($ = 0; $ < B; ++$) (E = w(this, z, v, C, R[$].identifier, R[$])) && ($l(v), E("start", v, R[$]));
      }
    }
    function b(v) {
      var C = v.changedTouches,
        R = C.length,
        z,
        B;
      for (z = 0; z < R; ++z) (B = i[C[z].identifier]) && (Tr(v), B("drag", v, C[z]));
    }
    function _(v) {
      var C = v.changedTouches,
        R = C.length,
        z,
        B;
      for (
        c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, 500),
          z = 0;
        z < R;
        ++z
      )
        (B = i[C[z].identifier]) && ($l(v), B("end", v, C[z]));
    }
    function w(v, C, R, z, B, $) {
      var E = o.copy(),
        g = yu($ || R, C),
        k,
        D,
        q;
      if (
        (q = n.call(
          v,
          new bu("beforestart", {
            sourceEvent: R,
            target: h,
            identifier: B,
            active: s,
            x: g[0],
            y: g[1],
            dx: 0,
            dy: 0,
            dispatch: E,
          }),
          z,
        )) != null
      )
        return (
          (k = q.x - g[0] || 0),
          (D = q.y - g[1] || 0),
          function O(T, F, J) {
            var xt = g,
              ut;
            switch (T) {
              case "start":
                (i[B] = O), (ut = s++);
                break;
              case "end":
                delete i[B], --s;
              case "drag":
                (g = yu(J || F, C)), (ut = s);
                break;
            }
            E.call(
              T,
              v,
              new bu(T, {
                sourceEvent: F,
                subject: q,
                target: h,
                identifier: B,
                active: ut,
                x: g[0] + k,
                y: g[1] + D,
                dx: g[0] - xt[0],
                dy: g[1] - xt[1],
                dispatch: E,
              }),
              z,
            );
          }
        );
    }
    return (
      (h.filter = function (v) {
        return arguments.length ? ((t = typeof v == "function" ? v : wo(!!v)), h) : t;
      }),
      (h.container = function (v) {
        return arguments.length ? ((e = typeof v == "function" ? v : wo(v)), h) : e;
      }),
      (h.subject = function (v) {
        return arguments.length ? ((n = typeof v == "function" ? v : wo(v)), h) : n;
      }),
      (h.touchable = function (v) {
        return arguments.length ? ((r = typeof v == "function" ? v : wo(!!v)), h) : r;
      }),
      (h.on = function () {
        var v = o.on.apply(o, arguments);
        return v === o ? h : v;
      }),
      (h.clickDistance = function (v) {
        return arguments.length ? ((f = (v = +v) * v), h) : Math.sqrt(f);
      }),
      h
    );
  }
  function Oc(t, e, n) {
    (t.prototype = e.prototype = n), (n.constructor = t);
  }
  function A0(t, e) {
    var n = Object.create(t.prototype);
    for (var r in e) n[r] = e[r];
    return n;
  }
  function so() {}
  var Li = 0.7,
    as = 1 / Li,
    $r = "\\s*([+-]?\\d+)\\s*",
    Bi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    M3 = /^#([0-9a-f]{3,8})$/,
    N3 = new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`),
    L3 = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`),
    B3 = new RegExp(`^rgba\\(${$r},${$r},${$r},${Bi}\\)$`),
    q3 = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${Bi}\\)$`),
    U3 = new RegExp(`^hsl\\(${Bi},${Ke},${Ke}\\)$`),
    Z3 = new RegExp(`^hsla\\(${Bi},${Ke},${Ke},${Bi}\\)$`),
    tg = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  Oc(so, qi, {
    copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: eg,
    formatHex: eg,
    formatHex8: V3,
    formatHsl: H3,
    formatRgb: ng,
    toString: ng,
  });
  function eg() {
    return this.rgb().formatHex();
  }
  function V3() {
    return this.rgb().formatHex8();
  }
  function H3() {
    return E0(this).formatHsl();
  }
  function ng() {
    return this.rgb().formatRgb();
  }
  function qi(t) {
    var e, n;
    return (
      (t = (t + "").trim().toLowerCase()),
      (e = M3.exec(t))
        ? ((n = e[1].length),
          (e = parseInt(e[1], 16)),
          n === 6
            ? rg(e)
            : n === 3
              ? new ce(((e >> 8) & 15) | ((e >> 4) & 240), ((e >> 4) & 15) | (e & 240), ((e & 15) << 4) | (e & 15), 1)
              : n === 8
                ? xo((e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, (e & 255) / 255)
                : n === 4
                  ? xo(
                      ((e >> 12) & 15) | ((e >> 8) & 240),
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (e & 240),
                      (((e & 15) << 4) | (e & 15)) / 255,
                    )
                  : null)
        : (e = N3.exec(t))
          ? new ce(e[1], e[2], e[3], 1)
          : (e = L3.exec(t))
            ? new ce((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, 1)
            : (e = B3.exec(t))
              ? xo(e[1], e[2], e[3], e[4])
              : (e = q3.exec(t))
                ? xo((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, e[4])
                : (e = U3.exec(t))
                  ? sg(e[1], e[2] / 100, e[3] / 100, 1)
                  : (e = Z3.exec(t))
                    ? sg(e[1], e[2] / 100, e[3] / 100, e[4])
                    : tg.hasOwnProperty(t)
                      ? rg(tg[t])
                      : t === "transparent"
                        ? new ce(NaN, NaN, NaN, 0)
                        : null
    );
  }
  function rg(t) {
    return new ce((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
  }
  function xo(t, e, n, r) {
    return r <= 0 && (t = e = n = NaN), new ce(t, e, n, r);
  }
  function G3(t) {
    return t instanceof so || (t = qi(t)), t ? ((t = t.rgb()), new ce(t.r, t.g, t.b, t.opacity)) : new ce();
  }
  function wu(t, e, n, r) {
    return arguments.length === 1 ? G3(t) : new ce(t, e, n, r ?? 1);
  }
  function ce(t, e, n, r) {
    (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
  }
  Oc(
    ce,
    wu,
    A0(so, {
      brighter(t) {
        return (t = t == null ? as : Math.pow(as, t)), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      darker(t) {
        return (t = t == null ? Li : Math.pow(Li, t)), new ce(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new ce(tr(this.r), tr(this.g), tr(this.b), ls(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: ig,
      formatHex: ig,
      formatHex8: W3,
      formatRgb: og,
      toString: og,
    }),
  );
  function ig() {
    return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}`;
  }
  function W3() {
    return `#${Jn(this.r)}${Jn(this.g)}${Jn(this.b)}${Jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function og() {
    const t = ls(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${tr(this.r)}, ${tr(this.g)}, ${tr(this.b)}${t === 1 ? ")" : `, ${t})`}`;
  }
  function ls(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }
  function tr(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }
  function Jn(t) {
    return (t = tr(t)), (t < 16 ? "0" : "") + t.toString(16);
  }
  function sg(t, e, n, r) {
    return r <= 0 ? (t = e = n = NaN) : n <= 0 || n >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN), new De(t, e, n, r);
  }
  function E0(t) {
    if (t instanceof De) return new De(t.h, t.s, t.l, t.opacity);
    if ((t instanceof so || (t = qi(t)), !t)) return new De();
    if (t instanceof De) return t;
    t = t.rgb();
    var e = t.r / 255,
      n = t.g / 255,
      r = t.b / 255,
      i = Math.min(e, n, r),
      o = Math.max(e, n, r),
      s = NaN,
      a = o - i,
      l = (o + i) / 2;
    return (
      a
        ? (e === o ? (s = (n - r) / a + (n < r) * 6) : n === o ? (s = (r - e) / a + 2) : (s = (e - n) / a + 4),
          (a /= l < 0.5 ? o + i : 2 - o - i),
          (s *= 60))
        : (a = l > 0 && l < 1 ? 0 : s),
      new De(s, a, l, t.opacity)
    );
  }
  function K3(t, e, n, r) {
    return arguments.length === 1 ? E0(t) : new De(t, e, n, r ?? 1);
  }
  function De(t, e, n, r) {
    (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
  }
  Oc(
    De,
    K3,
    A0(so, {
      brighter(t) {
        return (t = t == null ? as : Math.pow(as, t)), new De(this.h, this.s, this.l * t, this.opacity);
      },
      darker(t) {
        return (t = t == null ? Li : Math.pow(Li, t)), new De(this.h, this.s, this.l * t, this.opacity);
      },
      rgb() {
        var t = (this.h % 360) + (this.h < 0) * 360,
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < 0.5 ? n : 1 - n) * e,
          i = 2 * n - r;
        return new ce(
          Dl(t >= 240 ? t - 240 : t + 120, i, r),
          Dl(t, i, r),
          Dl(t < 120 ? t + 240 : t - 120, i, r),
          this.opacity,
        );
      },
      clamp() {
        return new De(ag(this.h), ko(this.s), ko(this.l), ls(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const t = ls(this.opacity);
        return `${t === 1 ? "hsl(" : "hsla("}${ag(this.h)}, ${ko(this.s) * 100}%, ${ko(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
      },
    }),
  );
  function ag(t) {
    return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
  }
  function ko(t) {
    return Math.max(0, Math.min(1, t || 0));
  }
  function Dl(t, e, n) {
    return (t < 60 ? e + ((n - e) * t) / 60 : t < 180 ? n : t < 240 ? e + ((n - e) * (240 - t)) / 60 : e) * 255;
  }
  const C0 = (t) => () => t;
  function J3(t, e) {
    return function (n) {
      return t + n * e;
    };
  }
  function X3(t, e, n) {
    return (
      (t = Math.pow(t, n)),
      (e = Math.pow(e, n) - t),
      (n = 1 / n),
      function (r) {
        return Math.pow(t + r * e, n);
      }
    );
  }
  function Y3(t) {
    return (t = +t) == 1
      ? S0
      : function (e, n) {
          return n - e ? X3(e, n, t) : C0(isNaN(e) ? n : e);
        };
  }
  function S0(t, e) {
    var n = e - t;
    return n ? J3(t, n) : C0(isNaN(t) ? e : t);
  }
  const lg = (function t(e) {
    var n = Y3(e);
    function r(i, o) {
      var s = n((i = wu(i)).r, (o = wu(o)).r),
        a = n(i.g, o.g),
        l = n(i.b, o.b),
        u = S0(i.opacity, o.opacity);
      return function (c) {
        return (i.r = s(c)), (i.g = a(c)), (i.b = l(c)), (i.opacity = u(c)), i + "";
      };
    }
    return (r.gamma = t), r;
  })(1);
  function On(t, e) {
    return (
      (t = +t),
      (e = +e),
      function (n) {
        return t * (1 - n) + e * n;
      }
    );
  }
  var xu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Ol = new RegExp(xu.source, "g");
  function Q3(t) {
    return function () {
      return t;
    };
  }
  function tD(t) {
    return function (e) {
      return t(e) + "";
    };
  }
  function eD(t, e) {
    var n = (xu.lastIndex = Ol.lastIndex = 0),
      r,
      i,
      o,
      s = -1,
      a = [],
      l = [];
    for (t = t + "", e = e + ""; (r = xu.exec(t)) && (i = Ol.exec(e)); )
      (o = i.index) > n && ((o = e.slice(n, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
        (r = r[0]) === (i = i[0])
          ? a[s]
            ? (a[s] += i)
            : (a[++s] = i)
          : ((a[++s] = null), l.push({ i: s, x: On(r, i) })),
        (n = Ol.lastIndex);
    return (
      n < e.length && ((o = e.slice(n)), a[s] ? (a[s] += o) : (a[++s] = o)),
      a.length < 2
        ? l[0]
          ? tD(l[0].x)
          : Q3(e)
        : ((e = l.length),
          function (u) {
            for (var c = 0, f; c < e; ++c) a[(f = l[c]).i] = f.x(u);
            return a.join("");
          })
    );
  }
  var ug = 180 / Math.PI,
    T0 = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
  function $0(t, e, n, r, i, o) {
    var s, a, l;
    return (
      (s = Math.sqrt(t * t + e * e)) && ((t /= s), (e /= s)),
      (l = t * n + e * r) && ((n -= t * l), (r -= e * l)),
      (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (l /= a)),
      t * r < e * n && ((t = -t), (e = -e), (l = -l), (s = -s)),
      { translateX: i, translateY: o, rotate: Math.atan2(e, t) * ug, skewX: Math.atan(l) * ug, scaleX: s, scaleY: a }
    );
  }
  var Ao;
  function nD(t) {
    const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? T0 : $0(e.a, e.b, e.c, e.d, e.e, e.f);
  }
  function rD(t) {
    return t == null ||
      (Ao || (Ao = document.createElementNS("http://www.w3.org/2000/svg", "g")),
      Ao.setAttribute("transform", t),
      !(t = Ao.transform.baseVal.consolidate()))
      ? T0
      : ((t = t.matrix), $0(t.a, t.b, t.c, t.d, t.e, t.f));
  }
  function D0(t, e, n, r) {
    function i(u) {
      return u.length ? u.pop() + " " : "";
    }
    function o(u, c, f, h, p, d) {
      if (u !== f || c !== h) {
        var m = p.push("translate(", null, e, null, n);
        d.push({ i: m - 4, x: On(u, f) }, { i: m - 2, x: On(c, h) });
      } else (f || h) && p.push("translate(" + f + e + h + n);
    }
    function s(u, c, f, h) {
      u !== c
        ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
          h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: On(u, c) }))
        : c && f.push(i(f) + "rotate(" + c + r);
    }
    function a(u, c, f, h) {
      u !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: On(u, c) }) : c && f.push(i(f) + "skewX(" + c + r);
    }
    function l(u, c, f, h, p, d) {
      if (u !== f || c !== h) {
        var m = p.push(i(p) + "scale(", null, ",", null, ")");
        d.push({ i: m - 4, x: On(u, f) }, { i: m - 2, x: On(c, h) });
      } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
    }
    return function (u, c) {
      var f = [],
        h = [];
      return (
        (u = t(u)),
        (c = t(c)),
        o(u.translateX, u.translateY, c.translateX, c.translateY, f, h),
        s(u.rotate, c.rotate, f, h),
        a(u.skewX, c.skewX, f, h),
        l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, h),
        (u = c = null),
        function (p) {
          for (var d = -1, m = h.length, y; ++d < m; ) f[(y = h[d]).i] = y.x(p);
          return f.join("");
        }
      );
    };
  }
  var iD = D0(nD, "px, ", "px)", "deg)"),
    oD = D0(rD, ", ", ")", ")"),
    Mr = 0,
    ai = 0,
    ti = 0,
    O0 = 1e3,
    us,
    li,
    cs = 0,
    nr = 0,
    na = 0,
    Ui = typeof performance == "object" && performance.now ? performance : Date,
    R0 =
      typeof window == "object" && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            setTimeout(t, 17);
          };
  function Rc() {
    return nr || (R0(sD), (nr = Ui.now() + na));
  }
  function sD() {
    nr = 0;
  }
  function fs() {
    this._call = this._time = this._next = null;
  }
  fs.prototype = F0.prototype = {
    constructor: fs,
    restart: function (t, e, n) {
      if (typeof t != "function") throw new TypeError("callback is not a function");
      (n = (n == null ? Rc() : +n) + (e == null ? 0 : +e)),
        !this._next && li !== this && (li ? (li._next = this) : (us = this), (li = this)),
        (this._call = t),
        (this._time = n),
        ku();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), ku());
    },
  };
  function F0(t, e, n) {
    var r = new fs();
    return r.restart(t, e, n), r;
  }
  function aD() {
    Rc(), ++Mr;
    for (var t = us, e; t; ) (e = nr - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
    --Mr;
  }
  function cg() {
    (nr = (cs = Ui.now()) + na), (Mr = ai = 0);
    try {
      aD();
    } finally {
      (Mr = 0), uD(), (nr = 0);
    }
  }
  function lD() {
    var t = Ui.now(),
      e = t - cs;
    e > O0 && ((na -= e), (cs = t));
  }
  function uD() {
    for (var t, e = us, n, r = 1 / 0; e; )
      e._call
        ? (r > e._time && (r = e._time), (t = e), (e = e._next))
        : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (us = n)));
    (li = t), ku(r);
  }
  function ku(t) {
    if (!Mr) {
      ai && (ai = clearTimeout(ai));
      var e = t - nr;
      e > 24
        ? (t < 1 / 0 && (ai = setTimeout(cg, t - Ui.now() - na)), ti && (ti = clearInterval(ti)))
        : (ti || ((cs = Ui.now()), (ti = setInterval(lD, O0))), (Mr = 1), R0(cg));
    }
  }
  function fg(t, e, n) {
    var r = new fs();
    return (
      (e = e == null ? 0 : +e),
      r.restart(
        (i) => {
          r.stop(), t(i + e);
        },
        e,
        n,
      ),
      r
    );
  }
  var cD = Tc("start", "end", "cancel", "interrupt"),
    fD = [],
    z0 = 0,
    hg = 1,
    Au = 2,
    Uo = 3,
    pg = 4,
    Eu = 5,
    Zo = 6;
  function ra(t, e, n, r, i, o) {
    var s = t.__transition;
    if (!s) t.__transition = {};
    else if (n in s) return;
    hD(t, n, {
      name: e,
      index: r,
      group: i,
      on: cD,
      tween: fD,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: z0,
    });
  }
  function Fc(t, e) {
    var n = je(t, e);
    if (n.state > z0) throw new Error("too late; already scheduled");
    return n;
  }
  function nn(t, e) {
    var n = je(t, e);
    if (n.state > Uo) throw new Error("too late; already running");
    return n;
  }
  function je(t, e) {
    var n = t.__transition;
    if (!n || !(n = n[e])) throw new Error("transition not found");
    return n;
  }
  function hD(t, e, n) {
    var r = t.__transition,
      i;
    (r[e] = n), (n.timer = F0(o, 0, n.time));
    function o(u) {
      (n.state = hg), n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
    }
    function s(u) {
      var c, f, h, p;
      if (n.state !== hg) return l();
      for (c in r)
        if (((p = r[c]), p.name === n.name)) {
          if (p.state === Uo) return fg(s);
          p.state === pg
            ? ((p.state = Zo), p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c])
            : +c < e &&
              ((p.state = Zo), p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
        }
      if (
        (fg(function () {
          n.state === Uo && ((n.state = pg), n.timer.restart(a, n.delay, n.time), a(u));
        }),
        (n.state = Au),
        n.on.call("start", t, t.__data__, n.index, n.group),
        n.state === Au)
      ) {
        for (n.state = Uo, i = new Array((h = n.tween.length)), c = 0, f = -1; c < h; ++c)
          (p = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = p);
        i.length = f + 1;
      }
    }
    function a(u) {
      for (
        var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), (n.state = Eu), 1),
          f = -1,
          h = i.length;
        ++f < h;

      )
        i[f].call(t, c);
      n.state === Eu && (n.on.call("end", t, t.__data__, n.index, n.group), l());
    }
    function l() {
      (n.state = Zo), n.timer.stop(), delete r[e];
      for (var u in r) return;
      delete t.__transition;
    }
  }
  function pD(t, e) {
    var n = t.__transition,
      r,
      i,
      o = !0,
      s;
    if (n) {
      e = e == null ? null : e + "";
      for (s in n) {
        if ((r = n[s]).name !== e) {
          o = !1;
          continue;
        }
        (i = r.state > Au && r.state < Eu),
          (r.state = Zo),
          r.timer.stop(),
          r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group),
          delete n[s];
      }
      o && delete t.__transition;
    }
  }
  function dD(t) {
    return this.each(function () {
      pD(this, t);
    });
  }
  function gD(t, e) {
    var n, r;
    return function () {
      var i = nn(this, t),
        o = i.tween;
      if (o !== n) {
        r = n = o;
        for (var s = 0, a = r.length; s < a; ++s)
          if (r[s].name === e) {
            (r = r.slice()), r.splice(s, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function mD(t, e, n) {
    var r, i;
    if (typeof n != "function") throw new Error();
    return function () {
      var o = nn(this, t),
        s = o.tween;
      if (s !== r) {
        i = (r = s).slice();
        for (var a = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
          if (i[l].name === e) {
            i[l] = a;
            break;
          }
        l === u && i.push(a);
      }
      o.tween = i;
    };
  }
  function _D(t, e) {
    var n = this._id;
    if (((t += ""), arguments.length < 2)) {
      for (var r = je(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
        if ((s = r[i]).name === t) return s.value;
      return null;
    }
    return this.each((e == null ? gD : mD)(n, t, e));
  }
  function zc(t, e, n) {
    var r = t._id;
    return (
      t.each(function () {
        var i = nn(this, r);
        (i.value || (i.value = {}))[e] = n.apply(this, arguments);
      }),
      function (i) {
        return je(i, r).value[e];
      }
    );
  }
  function P0(t, e) {
    var n;
    return (typeof e == "number" ? On : e instanceof qi ? lg : (n = qi(e)) ? ((e = n), lg) : eD)(t, e);
  }
  function vD(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function yD(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function bD(t, e, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = this.getAttribute(t);
      return s === i ? null : s === r ? o : (o = e((r = s), n));
    };
  }
  function wD(t, e, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = this.getAttributeNS(t.space, t.local);
      return s === i ? null : s === r ? o : (o = e((r = s), n));
    };
  }
  function xD(t, e, n) {
    var r, i, o;
    return function () {
      var s,
        a = n(this),
        l;
      return a == null
        ? void this.removeAttribute(t)
        : ((s = this.getAttribute(t)),
          (l = a + ""),
          s === l ? null : s === r && l === i ? o : ((i = l), (o = e((r = s), a))));
    };
  }
  function kD(t, e, n) {
    var r, i, o;
    return function () {
      var s,
        a = n(this),
        l;
      return a == null
        ? void this.removeAttributeNS(t.space, t.local)
        : ((s = this.getAttributeNS(t.space, t.local)),
          (l = a + ""),
          s === l ? null : s === r && l === i ? o : ((i = l), (o = e((r = s), a))));
    };
  }
  function AD(t, e) {
    var n = ea(t),
      r = n === "transform" ? oD : P0;
    return this.attrTween(
      t,
      typeof e == "function"
        ? (n.local ? kD : xD)(n, r, zc(this, "attr." + t, e))
        : e == null
          ? (n.local ? yD : vD)(n)
          : (n.local ? wD : bD)(n, r, e),
    );
  }
  function ED(t, e) {
    return function (n) {
      this.setAttribute(t, e.call(this, n));
    };
  }
  function CD(t, e) {
    return function (n) {
      this.setAttributeNS(t.space, t.local, e.call(this, n));
    };
  }
  function SD(t, e) {
    var n, r;
    function i() {
      var o = e.apply(this, arguments);
      return o !== r && (n = (r = o) && CD(t, o)), n;
    }
    return (i._value = e), i;
  }
  function TD(t, e) {
    var n, r;
    function i() {
      var o = e.apply(this, arguments);
      return o !== r && (n = (r = o) && ED(t, o)), n;
    }
    return (i._value = e), i;
  }
  function $D(t, e) {
    var n = "attr." + t;
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (e == null) return this.tween(n, null);
    if (typeof e != "function") throw new Error();
    var r = ea(t);
    return this.tween(n, (r.local ? SD : TD)(r, e));
  }
  function DD(t, e) {
    return function () {
      Fc(this, t).delay = +e.apply(this, arguments);
    };
  }
  function OD(t, e) {
    return (
      (e = +e),
      function () {
        Fc(this, t).delay = e;
      }
    );
  }
  function RD(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? DD : OD)(e, t)) : je(this.node(), e).delay;
  }
  function FD(t, e) {
    return function () {
      nn(this, t).duration = +e.apply(this, arguments);
    };
  }
  function zD(t, e) {
    return (
      (e = +e),
      function () {
        nn(this, t).duration = e;
      }
    );
  }
  function PD(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? FD : zD)(e, t)) : je(this.node(), e).duration;
  }
  function ID(t, e) {
    if (typeof e != "function") throw new Error();
    return function () {
      nn(this, t).ease = e;
    };
  }
  function jD(t) {
    var e = this._id;
    return arguments.length ? this.each(ID(e, t)) : je(this.node(), e).ease;
  }
  function MD(t, e) {
    return function () {
      var n = e.apply(this, arguments);
      if (typeof n != "function") throw new Error();
      nn(this, t).ease = n;
    };
  }
  function ND(t) {
    if (typeof t != "function") throw new Error();
    return this.each(MD(this._id, t));
  }
  function LD(t) {
    typeof t != "function" && (t = d0(t));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var o = e[i], s = o.length, a = (r[i] = []), l, u = 0; u < s; ++u)
        (l = o[u]) && t.call(l, l.__data__, u, o) && a.push(l);
    return new bn(r, this._parents, this._name, this._id);
  }
  function BD(t) {
    if (t._id !== this._id) throw new Error();
    for (
      var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), s = new Array(r), a = 0;
      a < o;
      ++a
    )
      for (var l = e[a], u = n[a], c = l.length, f = (s[a] = new Array(c)), h, p = 0; p < c; ++p)
        (h = l[p] || u[p]) && (f[p] = h);
    for (; a < r; ++a) s[a] = e[a];
    return new bn(s, this._parents, this._name, this._id);
  }
  function qD(t) {
    return (t + "")
      .trim()
      .split(/^|\s+/)
      .every(function (e) {
        var n = e.indexOf(".");
        return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
      });
  }
  function UD(t, e, n) {
    var r,
      i,
      o = qD(e) ? Fc : nn;
    return function () {
      var s = o(this, t),
        a = s.on;
      a !== r && (i = (r = a).copy()).on(e, n), (s.on = i);
    };
  }
  function ZD(t, e) {
    var n = this._id;
    return arguments.length < 2 ? je(this.node(), n).on.on(t) : this.each(UD(n, t, e));
  }
  function VD(t) {
    return function () {
      var e = this.parentNode;
      for (var n in this.__transition) if (+n !== t) return;
      e && e.removeChild(this);
    };
  }
  function HD() {
    return this.on("end.remove", VD(this._id));
  }
  function GD(t) {
    var e = this._name,
      n = this._id;
    typeof t != "function" && (t = $c(t));
    for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
      for (var a = r[s], l = a.length, u = (o[s] = new Array(l)), c, f, h = 0; h < l; ++h)
        (c = a[h]) &&
          (f = t.call(c, c.__data__, h, a)) &&
          ("__data__" in c && (f.__data__ = c.__data__), (u[h] = f), ra(u[h], e, n, h, u, je(c, n)));
    return new bn(o, this._parents, e, n);
  }
  function WD(t) {
    var e = this._name,
      n = this._id;
    typeof t != "function" && (t = p0(t));
    for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
      for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
        if ((c = l[f])) {
          for (var h = t.call(c, c.__data__, f, l), p, d = je(c, n), m = 0, y = h.length; m < y; ++m)
            (p = h[m]) && ra(p, e, n, m, h, d);
          o.push(h), s.push(c);
        }
    return new bn(o, s, e, n);
  }
  var KD = oo.prototype.constructor;
  function JD() {
    return new KD(this._groups, this._parents);
  }
  function XD(t, e) {
    var n, r, i;
    return function () {
      var o = jr(this, t),
        s = (this.style.removeProperty(t), jr(this, t));
      return o === s ? null : o === n && s === r ? i : (i = e((n = o), (r = s)));
    };
  }
  function I0(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function YD(t, e, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = jr(this, t);
      return s === i ? null : s === r ? o : (o = e((r = s), n));
    };
  }
  function QD(t, e, n) {
    var r, i, o;
    return function () {
      var s = jr(this, t),
        a = n(this),
        l = a + "";
      return (
        a == null && (l = a = (this.style.removeProperty(t), jr(this, t))),
        s === l ? null : s === r && l === i ? o : ((i = l), (o = e((r = s), a)))
      );
    };
  }
  function tO(t, e) {
    var n,
      r,
      i,
      o = "style." + e,
      s = "end." + o,
      a;
    return function () {
      var l = nn(this, t),
        u = l.on,
        c = l.value[o] == null ? a || (a = I0(e)) : void 0;
      (u !== n || i !== c) && (r = (n = u).copy()).on(s, (i = c)), (l.on = r);
    };
  }
  function eO(t, e, n) {
    var r = (t += "") == "transform" ? iD : P0;
    return e == null
      ? this.styleTween(t, XD(t, r)).on("end.style." + t, I0(t))
      : typeof e == "function"
        ? this.styleTween(t, QD(t, r, zc(this, "style." + t, e))).each(tO(this._id, t))
        : this.styleTween(t, YD(t, r, e), n).on("end.style." + t, null);
  }
  function nO(t, e, n) {
    return function (r) {
      this.style.setProperty(t, e.call(this, r), n);
    };
  }
  function rO(t, e, n) {
    var r, i;
    function o() {
      var s = e.apply(this, arguments);
      return s !== i && (r = (i = s) && nO(t, s, n)), r;
    }
    return (o._value = e), o;
  }
  function iO(t, e, n) {
    var r = "style." + (t += "");
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, rO(t, e, n ?? ""));
  }
  function oO(t) {
    return function () {
      this.textContent = t;
    };
  }
  function sO(t) {
    return function () {
      var e = t(this);
      this.textContent = e ?? "";
    };
  }
  function aO(t) {
    return this.tween("text", typeof t == "function" ? sO(zc(this, "text", t)) : oO(t == null ? "" : t + ""));
  }
  function lO(t) {
    return function (e) {
      this.textContent = t.call(this, e);
    };
  }
  function uO(t) {
    var e, n;
    function r() {
      var i = t.apply(this, arguments);
      return i !== n && (e = (n = i) && lO(i)), e;
    }
    return (r._value = t), r;
  }
  function cO(t) {
    var e = "text";
    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error();
    return this.tween(e, uO(t));
  }
  function fO() {
    for (var t = this._name, e = this._id, n = j0(), r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var s = r[o], a = s.length, l, u = 0; u < a; ++u)
        if ((l = s[u])) {
          var c = je(l, e);
          ra(l, t, n, u, s, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        }
    return new bn(r, this._parents, t, n);
  }
  function hO() {
    var t,
      e,
      n = this,
      r = n._id,
      i = n.size();
    return new Promise(function (o, s) {
      var a = { value: s },
        l = {
          value: function () {
            --i === 0 && o();
          },
        };
      n.each(function () {
        var u = nn(this, r),
          c = u.on;
        c !== t && ((e = (t = c).copy()), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), (u.on = e);
      }),
        i === 0 && o();
    });
  }
  var pO = 0;
  function bn(t, e, n, r) {
    (this._groups = t), (this._parents = e), (this._name = n), (this._id = r);
  }
  function j0() {
    return ++pO;
  }
  var cn = oo.prototype;
  bn.prototype = {
    constructor: bn,
    select: GD,
    selectAll: WD,
    selectChild: cn.selectChild,
    selectChildren: cn.selectChildren,
    filter: LD,
    merge: BD,
    selection: JD,
    transition: fO,
    call: cn.call,
    nodes: cn.nodes,
    node: cn.node,
    size: cn.size,
    empty: cn.empty,
    each: cn.each,
    on: ZD,
    attr: AD,
    attrTween: $D,
    style: eO,
    styleTween: iO,
    text: aO,
    textTween: cO,
    remove: HD,
    tween: _D,
    delay: RD,
    duration: PD,
    ease: jD,
    easeVarying: ND,
    end: hO,
    [Symbol.iterator]: cn[Symbol.iterator],
  };
  function dO(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var gO = { time: null, delay: 0, duration: 250, ease: dO };
  function mO(t, e) {
    for (var n; !(n = t.__transition) || !(n = n[e]); )
      if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return n;
  }
  function _O(t) {
    var e, n;
    t instanceof bn
      ? ((e = t._id), (t = t._name))
      : ((e = j0()), ((n = gO).time = Rc()), (t = t == null ? null : t + ""));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var s = r[o], a = s.length, l, u = 0; u < a; ++u) (l = s[u]) && ra(l, t, e, u, s, n || mO(l, e));
    return new bn(r, this._parents, t, e);
  }
  oo.prototype.interrupt = dD;
  oo.prototype.transition = _O;
  function ui(t, e, n) {
    (this.k = t), (this.x = e), (this.y = n);
  }
  ui.prototype = {
    constructor: ui,
    scale: function (t) {
      return t === 1 ? this : new ui(this.k * t, this.x, this.y);
    },
    translate: function (t, e) {
      return (t === 0) & (e === 0) ? this : new ui(this.k, this.x + this.k * t, this.y + this.k * e);
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  ui.prototype;
  const M0 = ["annotation-create--move", "annotation-create--start", "annotation-create--end"],
    vO = [...M0, "annotation-edit--move", "annotation-edit--start", "annotation-edit--end"],
    Rl = "ghent-cdh-annotation",
    ao = {
      text: `annotated-text ${Rl}-text`,
      svg: `${Rl}-svg`,
      wrapper: `${Rl}-wrapper`,
      line: { text: { wrapper: "content" }, gutter: { wrapper: "gutter text" } },
    },
    yO = (t, e, n) => (r) => {
      if (n.model.blockEvents) return;
      const i = n.sendEvent({
        event: "mouse-enter",
        mouseEvent: r,
        annotationUuid: (e == null ? void 0 : e.annotationUuid) || "",
      });
      n.annotationAdapter.hover(i) && n.colorAnnotation(e.annotationUuid, e.color.hover);
    },
    bO = (t, e, n) => (r) => {
      n.model.blockEvents ||
        (n.sendEvent({
          event: "mouse-leave",
          mouseEvent: r,
          annotationUuid: (e == null ? void 0 : e.annotationUuid) || "",
        }),
        n.colorAnnotation(e.annotationUuid, e.color.default));
    },
    wO = (t, e, n) => (r) => {
      n.model.blockEvents ||
        n.sendEvent({ event: "click", mouseEvent: r, annotationUuid: (e == null ? void 0 : e.annotationUuid) || "" });
    },
    xO = (t, e, n) => (r) => {
      n.model.blockEvents ||
        (r.preventDefault(),
        n.sendEvent({
          event: "double-click",
          mouseEvent: r,
          annotationUuid: (e == null ? void 0 : e.annotationUuid) || "",
        }));
    },
    kO = en((t, e, n) => n >= t && n < e),
    N0 = (t, e) => {
      const n = [],
        r = t.findIndex((i, o) => {
          if (kO(i.start, i.end, e.start)) return !0;
          const s = t[o + 1];
          return s && e.start < s.start;
        });
      if (!(r < 0)) {
        for (let i = r; i < t.length; i++) {
          const o = t[i];
          if ((e.end < o.start, ta(o, e) && n.push(o), e.end <= o.end)) {
            i = t.length;
            break;
          }
        }
        return n;
      }
    },
    L0 = (t, e, n = !0) => {
      const r = e;
      if (
        (r.start >= r.end &&
          t.eventListener.sendError("INVALID_ANNOTATION", `start (${r.start}) must be less than end (${r.end})`, r),
        t.textLength < r.start)
      )
        return (
          t.eventListener.sendError(
            "INVALID_ANNOTATION",
            `Invalid annotation: start (${r.start}) must be less than text length (${t.textLength})`,
            r,
          ),
          t
        );
      t.textLength < r.end &&
        t.eventListener.sendError(
          "INVALID_ANNOTATION",
          `Invalid annotation: end (${r.end}) must be less than text length (${t.textLength})`,
          r,
        );
      const i = N0(t.lines, r);
      if (!(i != null && i.length)) {
        Ce.warn("Invalid annotation: no lines found for annotation", r);
        return;
      }
      return t.setAnnotation(r, i, n), t;
    },
    AO = (t, e, n = !1) => (t.removeAnnotation(e, n), L0(t, e)),
    EO = (t, e, n, r, i = !1) => (
      t.resetAnnotations(),
      r == null ||
        r.forEach((o) => {
          const s = e.parse(o);
          s && ((n.limit && !ta(s, n.limit)) || L0(t, s, i));
        }),
      t
    ),
    Cu = en((t, e, n, r, i) => [
      `H${n - i}`,
      `A${i},${i} 0 0 1 ${n},${e + i}`,
      `V${r - i}`,
      `A${i},${i} 0 0 1 ${n - i},${r}`,
      `H${t}`,
    ]),
    Su = en((t, e, n, r) => [
      `H${t + r}`,
      `A${r},${r} 0 0 1 ${t},${n - r}`,
      `V${e + r}`,
      `A${r},${r} 0 0 1 ${t + r},${e}`,
    ]),
    CO = ({ x: t, y: e, width: n, height: r, r: i, leftBorder: o, rightBorder: s }) => {
      const a = t + n,
        l = e + r,
        u = [`M${t + (o ? i : 0)},${e}`];
      return (
        s ? u.push(Cu(t, e, a, l, i)) : u.push([`M${t},${e}`, `H${a}`, `M${a},${l}`]),
        o ? u.push(Su(t, e, l, i)) : u.push(`H${t}`),
        u.flat().join(" ")
      );
    },
    SO = ({ x: t, y: e, width: n, height: r, r: i, leftBorder: o, rightBorder: s }) => {
      const a = t + n,
        l = e + r,
        u = [`M${t + (o ? i : 0)},${e}`];
      return (
        s ? u.push(Cu(t, e, a, l, i)) : u.push(Cu(t, e, a, l, 0)),
        o ? u.push(Su(t, e, l, i)) : u.push(Su(t, e, l, 0)),
        u.flat().join(" ")
      );
    },
    TO = (t) => {
      const e = CO(t),
        n = SO(t);
      return { border: e, fill: n };
    },
    $O = (t, e, n, r) => ({
      fill: `M${t},${e} 
          H${t + n} 
          V${e + r} 
          H${t} 
          Z`,
    }),
    DO = (t, e) => {
      if (t.length === 0) throw new Error("Array must not be empty");
      let n = t[0],
        r = e(t[0]),
        i = t[0],
        o = e(t[0]);
      return (
        t.forEach((s) => {
          const a = e(s);
          a < r && ((n = s), (r = a)), a > o && ((i = s), (o = a));
        }),
        { min: n, max: i }
      );
    },
    OO = (t, e) => t.querySelector(`[data-line-uid="${e.uuid}"]`),
    RO = (t, e) => (
      t.lines.forEach((n) => {
        const r = OO(e, n);
        if (!r) {
          Ce.debug(`Text line with UUID ${n.uuid} not found in the text element.`);
          return;
        }
        n.element = r;
      }),
      t
    ),
    FO = (t, e) => e.x - t.x,
    Tu = (t, e) => e.y - t.y,
    zO = (t, e, n, r) => {
      const i = r.config,
        o = i.gutter.width,
        s = i.gutter.gap,
        a = t.getLinesForAnnotation(n.id),
        { min: l, max: u } = DO(a, (y) => y.lineNumber),
        c = Tu(e, l.element.getBoundingClientRect()),
        f = Tu(e, u.element.getBoundingClientRect()),
        h = u.element.getBoundingClientRect().height,
        p = t.maxGutterWeight - n.weight,
        d = (o + s) * p,
        m = f - c + h;
      t.addDrawAnnotation({
        weight: n.weight,
        uuid: Zs(),
        annotationUuid: n.id,
        lineNumber: l.lineNumber,
        path: $O(d, c, o, m),
        color: B0(r, n, !1),
        draggable: {},
      });
    },
    B0 = (t, e, n = !0) => {
      const r = t.config.hover.color,
        i = t.color(e);
      return {
        default: { fill: i.background, border: n ? i.border : void 0 },
        hover: r,
        active: { fill: i.backgroundActive, border: n ? i.borderActive : void 0 },
      };
    },
    q0 = (t, e, n, r, i, o) => {
      const { config: s } = o,
        a = s.text.borderRadius,
        l = [],
        u = s.text.padding * r.weight,
        c = s.text.lineHeight + u * 2;
      return (
        t.forEach((f, h) => {
          var p, d;
          const m = i.getRanges(r, f),
            y = (p = t[h - 1]) == null ? void 0 : p.end,
            b = !y || y <= r.start,
            _ = (d = t[h + 1]) == null ? void 0 : d.start,
            w = !_ || r.end < _;
          m == null ||
            m.forEach((v, C) => {
              const R = FO(e, v),
                z = Tu(e, v) - u;
              let B = b && C === 0,
                $ = C === m.length - 1 && w;
              if (n.textDirection === "rtl") {
                const E = $;
                ($ = B), (B = E);
              }
              l.push({
                weight: r.weight,
                uuid: Zs(),
                annotationUuid: r.id,
                lineNumber: f.lineNumber,
                path: TO({ x: R, y: z, width: v.width, height: c, r: a, leftBorder: B, rightBorder: $ }),
                draggable: {
                  start: B ? { x: R, y: z, height: c } : void 0,
                  end: $ ? { x: R + v.width, y: z, height: c } : void 0,
                },
                color: B0(o, r),
              });
            });
        }),
        l
      );
    },
    U0 = (t, e, n, r, i) => {
      const o = t0(e.getBoundingClientRect(), "width", "height", "x", "y");
      return q0(t.getLinesForAnnotation(n.id), o, t, n, i, r).forEach((s) => t.addDrawAnnotation(s)), t;
    },
    PO = (t, e, n, r) => (
      t.annotations.forEach((i) => {
        i.isGutter ? zO(t, e.getBoundingClientRect(), i, n) : U0(t, e, i, n, r);
      }),
      t
    ),
    IO = (t, e, n, r) => (t.clearDrawAnnotation(), PO(t, e, n, r), t),
    dg = (t, e, n) => t >= n.left && t <= n.right && e >= n.top && e <= n.bottom,
    Z0 = (t, e, n = 0) => {
      if (e.contains(t)) {
        let r = 0;
        for (let i = 0; i < e.childNodes.length; i++) {
          const o = e.childNodes[i];
          if (o.contains(t)) return o === t ? n + r : Z0(t, o, n + r);
          r += o.textContent.length;
        }
      }
    },
    jO = (t) => {
      let e = t.parentNode,
        n = e.getAttribute("data-line-uid"),
        r = 0;
      if (!n) for (; e && !n; ) (e = e.parentNode), e && (n = e.getAttribute("data-line-uid"));
      return (r = Z0(t, e)), { lineElement: e, lineUid: n, offset: r };
    };
  function V0(t, e, n) {
    const r = n.textElement,
      i = n.model,
      o = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, null);
    let s;
    for (; (s = o.nextNode()); ) {
      if (!s.textContent || !dg(t, e, s.parentElement.getBoundingClientRect())) continue;
      const { lineUid: a, offset: l } = jO(s);
      if (!a) {
        console.warn("no line found at", a);
        continue;
      }
      const u = i.getLine(a),
        c = s.textContent;
      for (let f = 0; f < c.length; f++) {
        const h = document.createRange();
        h.setStart(s, f), h.setEnd(s, f + 1);
        const p = [h.getBoundingClientRect()];
        for (const d of p)
          if (dg(t, e, d)) {
            const m = t0(r.getBoundingClientRect(), "width", NaN, "x", "y"),
              y = u.start + f + l,
              b = { x: d.x - m.x, y: d.y - m.y };
            return { offset: f, newIndex: y, dimensions: b, line: u };
          }
      }
    }
    return null;
  }
  const H0 = (t) => {
      t.removeAnnotations(ki);
    },
    G0 = (t, e, n) => {
      t.removeAnnotations(ki);
      const { model: r, textElement: i } = t,
        o = N0(r.lines, e);
      q0(o, i.getBoundingClientRect(), r, e, t.textAdapter, t.annotationAdapter).forEach((s) => {
        W0({ ...s, annotationUuid: ki }, t, t.annotationAdapter.config);
      }),
        t.colorAnnotation(ki, n);
    },
    hs = (t, e) => {
      const { model: n } = t;
      t.removeAnnotations(e.id),
        AO(n, e, !0),
        U0(n, t.textElement, e, t.annotationAdapter, t.textAdapter)
          .getDrawAnnotations(e.id)
          .forEach((r) => {
            K0(t, r);
          });
    },
    MO = (t, e, n, r, i, o, s) => {
      const { model: a } = t;
      a.blockEvents = !0;
      const l = t.annotationAdapter.config.text.handleRadius,
        u = V0(e, n, t);
      if (!u) return null;
      o.attr("x", u.dimensions.x - l / 2), o.attr("y", u.dimensions.y);
      const { newIndex: c } = u,
        f = a.getAnnotation(r.annotationUuid),
        h = i === "start" ? c : f == null ? void 0 : f.start,
        p = i === "end" ? c : f == null ? void 0 : f.end,
        d = Math.min(h, p),
        m = Math.max(h, p),
        y = { ...f, start: d, end: m, annotationUuid: ki },
        b = t.annotationAdapter.snapper.fixOffset(i === "start" ? "move-start" : "move-end", y);
      return (
        (y.start = b.start),
        (y.end = b.end),
        t.sendEvent({ event: s, annotationUuid: (y == null ? void 0 : y.id.toString()) || "" }, { annotation: y }),
        G0(t, y, r.color.hover),
        y
      );
    },
    NO = (t, e) => {
      t.path.border &&
        (t.draggable.start && gg(e, t, t.draggable.start, "start"),
        t.draggable.end && gg(e, t, t.draggable.end, "end"));
    },
    gg = (t, e, n, r) => {
      const i = t.model,
        o = t.annotationAdapter.config.text.handleRadius;
      let s = null;
      const a = (f) => {
          (i.blockEvents = !1),
            H0(t),
            t.sendEvent(
              { event: "annotation-edit--end", mouseEvent: f, annotationUuid: (e == null ? void 0 : e.uuid) || "" },
              { annotation: s },
            ),
            s && hs(t, s);
        },
        l = (f) => (h) => {
          if (!t.annotationAdapter.edit) return;
          const p = h.sourceEvent.clientX,
            d = h.sourceEvent.clientY;
          s = MO(t, p, d, e, r, c, f) ?? s;
        },
        u = o,
        c = t.handles
          .append("rect")
          .attr(kr.ANNOTATION_UID, e.annotationUuid)
          .attr(kr.ANNOTATION_ROLE, "handle")
          .attr("width", u)
          .attr("height", n.height)
          .attr("fill", "gray")
          .attr("opacity", 0)
          .attr("x", n.x - u / 2)
          .attr("y", n.y)
          .call(j3().on("drag", l("annotation-edit--move")).on("start", l("annotation-edit--start")).on("end", a));
      return (
        c.on("mouseenter", () => {
          c.attr("class", t.annotationAdapter.edit ? "handle" : "");
        }),
        c
      );
    },
    W0 = (t, e, n) => {
      let r = null;
      const i = e.annotations.append("g").attr("data-annotation-uid", t.annotationUuid),
        o = i
          .append("path")
          .attr("data-annotation-uid", t.annotationUuid)
          .attr("data-annotation-start", t.lineNumber)
          .attr("data-annotation-role", "fill")
          .attr("d", t.path.fill)
          .attr("border", "none")
          .attr("fill", t.color.default.fill);
      return (
        t.path.border &&
          (r = i
            .append("path")
            .attr("data-annotation-uid", t.annotationUuid)
            .attr("data-annotation-role", "border")
            .attr("stroke-width", n.text.border)
            .attr("d", t.path.border)
            .attr("fill", "none")
            .attr("stroke", t.color.default.border)),
        { rect: o, border: r }
      );
    },
    K0 = (t, e) => {
      const n = t.annotationAdapter.config,
        { rect: r } = W0(e, t, n);
      NO(e, t),
        r
          .on("mouseover", yO(r, e, t))
          .on("mouseleave", bO(r, e, t))
          .on("dblclick", xO(r, e, t))
          .on("click", wO(r, e, t));
    },
    LO = (t) => {
      const e = t.textElement,
        n = t.svg,
        r = t.annotationAdapter;
      let i,
        o = !1,
        s = !1,
        a = null;
      const l = (u, c = !1) => {
        const [f, h] = yu(u),
          p = f + e.getBoundingClientRect().x,
          d = h + e.getBoundingClientRect().y,
          m = V0(p, d, t);
        if (!m) return;
        const y = m.newIndex;
        a || ((a = { ...r.createAnnotation(), weight: 1, start: y, end: y + 5 }), (i = y));
        const b = y > i,
          _ = b ? y : i,
          w = b ? i : y;
        (a.start = Math.min(_, w)), (a.end = Math.max(_, w));
        const v = t.annotationAdapter.snapper.fixOffset(_ < w ? "move-start" : "move-end", a);
        return (
          (a.start = v.start),
          (a.end = v.end),
          c && G0(t, a, { border: a.color.border, fill: a.color.background }),
          { x: p, y: d }
        );
      };
      n.on("mousedown", (u) => {
        if (!t.annotationAdapter.create) return null;
        if (!(t.model.blockEvents || o)) {
          if (((a = null), (o = !0), l(u), !a)) {
            console.warn("no character found");
            return;
          }
          t.sendEvent(
            { event: "annotation-create--start", mouseEvent: u, annotationUuid: (a == null ? void 0 : a.id) || "" },
            { annotation: a },
          );
        }
      }),
        n.on("mousemove", (u) => {
          o &&
            ((t.model.blockEvents = !0),
            (s = !0),
            l(u, !0),
            t.sendEvent(
              { event: "annotation-create--move", mouseEvent: u, annotationUuid: (a == null ? void 0 : a.id) || "" },
              { annotation: a },
            ));
        }),
        n.on("mouseup", (u) => {
          if (((o = !1), !!s)) {
            if (((s = !1), (t.model.blockEvents = !1), H0(t), !a)) {
              Ce.warn("no dummy annotation found, canceling");
              return;
            }
            hs(t, a),
              t.sendEvent(
                { event: "annotation-create--end", mouseEvent: u, annotationUuid: (a == null ? void 0 : a.id) || "" },
                { annotation: a },
              ),
              (a = null);
          }
        });
    },
    ki = "dummy-uid",
    kr = { ANNOTATION_UID: "data-annotation-uid", ANNOTATION_ROLE: "data-annotation-role" },
    Eo = { BORDER: "border", FILL: "fill", HANDLE: "handle", ANNOTATIONS: "annotations" };
  class BO {
    constructor(e, n, r, i, o) {
      st(this, "annotations"),
        st(this, "handles"),
        st(this, "svg"),
        (this.textElement = e),
        (this.model = n),
        (this.eventListener = r),
        (this.annotationAdapter = i),
        (this.textAdapter = o);
      const s = e.getBoundingClientRect().width,
        a = e.getBoundingClientRect().height;
      (this.svg = Mi("body")
        .append("svg")
        .attr("class", ao.svg)
        .attr("width", s)
        .attr("height", a)
        .style("font-family", "sans-serif")
        .style("font-size", "16px")),
        (this.annotations = this.svg.append("g").attr(kr.ANNOTATION_ROLE, Eo.ANNOTATIONS)),
        (this.handles = this.svg.append("g").attr(kr.ANNOTATION_ROLE, Eo.HANDLE)),
        LO(this);
    }
    removeAnnotations(e, n = "") {
      var r;
      return (r = this.findRelatedAnnotations(e, n)) == null || r.remove(), this;
    }
    findRelatedAnnotations(e, n = "") {
      const r = this.svg.selectAll(`[data-annotation-uid="${e}"]${n}`);
      return r.empty() ? null : r;
    }
    findFills(e) {
      return this.findRelatedAnnotations(e, `[${kr.ANNOTATION_ROLE}="${Eo.FILL}"]`);
    }
    findBorders(e) {
      return this.findRelatedAnnotations(e, `[${kr.ANNOTATION_ROLE}="${Eo.BORDER}"]`);
    }
    colorAnnotation(e, n) {
      var r, i;
      if (!n) {
        Ce.warn("No color provided for annotation", e);
        return;
      }
      (r = this.findFills(e)) == null || r.attr("fill", n.fill).attr("stroke", "none"),
        (i = this.findBorders(e)) == null || i.attr("fill", "none").attr("stroke", n.border);
    }
    node() {
      return this.svg.node();
    }
    drawAnnotations() {
      const e = Date.now();
      this.model.drawAnnotations.sort((n, r) => (n.weight > r.weight ? -1 : 1)).forEach((n) => K0(this, n)),
        Ce.time(e, "--- drawComputedAnnotations ");
    }
    sendEvent({ event: e, mouseEvent: n, annotationUuid: r }, i = {}) {
      const o = this.model.getAnnotation(r),
        s = { annotation: o, ...i },
        a = M0.includes(e),
        l = vO.includes(e);
      return (
        (s.annotation = this.annotationAdapter.format(s.annotation, a, l)), this.eventListener.sendEvent(e, n, s), o
      );
    }
  }
  class mg {
    constructor(e) {
      st(this, "ids", new Map()), (this.color = e);
    }
    removeId(e) {
      e == null ||
        e.forEach((n) => {
          var r;
          return (r = this.ids) == null ? void 0 : r.delete(n);
        });
    }
    changeIds(e, n, r) {
      this.ids
        .keys()
        .filter((i) => !n.some((o) => (o == null ? void 0 : o.annotationUuid) === i && !r.includes(o.annotationUuid)))
        .forEach((i) => {
          const o = this.ids.get(i);
          e.colorAnnotation(i, o.default);
        }),
        this.ids.clear(),
        n.forEach((i) => {
          if (!i) return;
          const o = i.color[this.color];
          this.ids.set(i.annotationUuid, { selected: i.color[this.color], default: i.color.default }),
            e.colorAnnotation(i.annotationUuid, o);
        });
    }
    colorIds(e) {
      this.ids.forEach((n, r) => {
        e.colorAnnotation(r, n.selected);
      });
    }
  }
  const qO = (t) => (t.calculateAllWeights(), t),
    Dr = globalThis.document || null,
    UO = (t) => {
      const e = Dr == null ? void 0 : Dr.createElement("div");
      return (
        (e.className = ao.line.gutter.wrapper),
        (e.innerHTML = t.gutter ?? ""),
        e.setAttribute("data-gutter-uid", t.uuid),
        e
      );
    },
    ZO = en((t, e, n) => {
      const r = t * e,
        i = r + n + t * 2;
      return { linePadding: r, lineHeight: i };
    }),
    VO = (t, e, n, r) => {
      const i = Dr.createElement("div"),
        { text: o } = r.config,
        { linePadding: s, lineHeight: a } = ZO(o.padding, t.maxLineWeight, o.lineHeight);
      return (
        i.style.setProperty("--line-padding", `${s}px`),
        i.style.setProperty("--line-height", `${a}px`),
        (i.className = `${ao.line.text.wrapper} ${e}`),
        (i.innerHTML = n != null && n.flatText ? t.flatText : t.html),
        i.setAttribute("data-line-uid", t.uuid),
        i.setAttribute("data-annotation-role", "line"),
        i
      );
    },
    HO = (t, e, n) => {
      if (!Dr) return;
      const { gutter: r } = n.config,
        i = (r.width + r.gap) * t.maxGutterWeight,
        o = Dr == null ? void 0 : Dr.createElement("div");
      return (
        (o.className = `${ao.text} `),
        o.style.setProperty("--gutter-left", `${i}px`),
        t.lines.forEach((s) => {
          o.appendChild(UO(s)), o.appendChild(VO(s, t.textDirection, e, n));
        }),
        o
      );
    },
    Co = globalThis.document || null;
  class GO {
    constructor(e, n, r) {
      st(this, "textAnnotationModel"),
        st(this, "annotationsMap", new Map()),
        st(this, "element"),
        st(this, "textElement"),
        st(this, "svgModel"),
        st(this, "svgNode"),
        st(this, "resizeObserver"),
        st(this, "text"),
        st(this, "eventListener", new bv()),
        st(this, "highlightedIds", new mg("hover")),
        st(this, "activeIds", new mg("active")),
        (this.id = e),
        (this.textAdapter = n),
        (this.annotationAdapter = r),
        this.init(),
        this.annotationAdapter.setConfigListener(this.configListener()),
        this.textAdapter.setConfigListener(this.configListener());
    }
    configListener() {
      return () => {
        this.recreateAnnotationModel();
      };
    }
    createAnnotationModel() {
      return (
        (this.textAnnotationModel = GT(this.text, this.textAdapter, this.eventListener)),
        this.annotationAdapter.setText(this.text),
        this
      );
    }
    annotations() {
      return Array.from(this.annotationsMap.values());
    }
    setText(e, n = !0) {
      return (this.text = e || ""), this.createAnnotationModel(), this.setAnnotations(this.annotations(), n), this;
    }
    setAnnotations(e, n = !0) {
      return (
        this.annotationsMap.clear(),
        e.forEach((r) => {
          this.annotationsMap.set(r.id, r);
        }),
        this.textAnnotationModel
          ? this.text
            ? ((this.textAnnotationModel = EO(this.textAnnotationModel, this.annotationAdapter, this.textAdapter, e)),
              (this.textAnnotationModel = qO(this.textAnnotationModel)),
              n && this.redrawSvg(),
              this)
            : (Ce.debug("------ no lines set, cannot set annotations"), this)
          : (Ce.debug("Annotations set before lines, cannot set annotations"), this)
      );
    }
    on(e, n) {
      return this.eventListener.register(e, n), this;
    }
    onError(e) {
      return this.eventListener.registerError(e), this;
    }
    drawText() {
      this.textElement = HO(this.textAnnotationModel, this.textAdapter, this.annotationAdapter);
    }
    drawSvg() {
      this.svgModel.drawAnnotations(),
        this.highlightedIds.colorIds(this.svgModel),
        this.activeIds.colorIds(this.svgModel);
    }
    init() {
      if (!Co) return;
      const e = this.id;
      if (
        (this.textElement && console.warn("element already initialized, clear and reainitialize"),
        (this.element = Co == null ? void 0 : Co.getElementById(e)),
        !this.element)
      ) {
        console.error("element not found", e);
        return;
      }
      (this.element.innerHTML = ""), this.element.classList.add(ao.wrapper);
      let n = !1;
      (this.resizeObserver = new ResizeObserver((r) => {
        Ce.debug("resize detected", n), n && this.redrawSvg(), (n = !0);
      })),
        this.element && this.resizeObserver.observe(this.element),
        this.textAnnotationModel && this.redrawSvg();
    }
    redrawSvg() {
      var e, n, r, i;
      Co &&
        (this.svgNode && ((e = this.element) == null || e.removeChild(this.svgNode)),
        this.textElement && ((n = this.element) == null || n.removeChild(this.textElement)),
        this.drawText(),
        (r = this.element) == null || r.append(this.textElement),
        (this.textAnnotationModel = RO(this.textAnnotationModel, this.textElement)),
        (this.textAnnotationModel = IO(
          this.textAnnotationModel,
          this.textElement,
          this.annotationAdapter,
          this.textAdapter,
        )),
        (this.svgModel = new BO(
          this.textElement,
          this.textAnnotationModel,
          this.eventListener,
          this.annotationAdapter,
          this.textAdapter,
        )),
        (this.svgNode = this.svgModel.node()),
        (i = this.element) == null || i.prepend(this.svgNode),
        this.drawSvg());
    }
    destroy() {
      var e, n;
      return (
        this.eventListener.sendEvent("destroy", null, null),
        this.element && ((e = this.resizeObserver) == null || e.unobserve(this.element), (this.element.innerHTML = "")),
        (n = this.resizeObserver) == null || n.disconnect(),
        (this.textElement = null),
        (this.svgNode = null),
        (this.textAnnotationModel = null),
        this
      );
    }
    highlightAnnotations(e) {
      return (
        this.highlightedIds.changeIds(
          this.svgModel,
          (e == null ? void 0 : e.map((n) => this.textAnnotationModel.getAnnotationDraw(n)[0])) ?? [],
          [],
        ),
        this.activeIds.colorIds(this.svgModel),
        this
      );
    }
    selectAnnotations(e) {
      return (
        this.highlightedIds.removeId(e),
        this.activeIds.changeIds(
          this.svgModel,
          (e == null ? void 0 : e.map((n) => this.textAnnotationModel.getAnnotationDraw(n)[0])) ?? [],
          [],
        ),
        this
      );
    }
    recreateAnnotationModel() {
      return (
        this.destroy(),
        this.createAnnotationModel(),
        this.annotationsMap.clear(),
        this.annotations().forEach((e) => {
          this.annotationsMap.set(e.id, e);
        }),
        this
      );
    }
    changeAnnotationAdapterConfig(e, n) {
      return this.annotationAdapter.setConfig(e, n), this;
    }
    changeTextAdapterConfig(e, n) {
      return this.textAdapter.setConfig(e, n), this;
    }
    scrollToAnnotation(e) {
      const n = this.textAnnotationModel.getLinesForAnnotation(e);
      if (!n) return console.warn("No lines found for annotation", e), this;
      const r = n[0].element;
      return r
        ? (r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }), this)
        : (console.warn("No line element found for annotation", e), this);
    }
    addAnnotation(e) {
      return this.annotationsMap.has(e.id)
        ? this.updateAnnotation(e.id, e)
        : (hs(this.svgModel, this.annotationAdapter.parse(e)), this);
    }
    updateAnnotation(e, n) {
      return this.annotationsMap.has(n.id)
        ? (hs(this.svgModel, this.annotationAdapter.parse(n)), this)
        : this.addAnnotation(n);
    }
    deleteAnnotation(e) {
      const n = this.textAnnotationModel.getAnnotation(e);
      return (
        this.textAnnotationModel.removeAnnotation(n, !0),
        this.svgModel.removeAnnotations(n.id),
        this.annotationsMap.delete(n.id),
        this
      );
    }
  }
  class J0 {
    constructor() {
      st(this, "configListener", null);
    }
    setConfigListener(e) {
      this.configListener = e;
    }
    changeConfig() {
      var e;
      (e = this.configListener) == null || e.call(this);
    }
  }
  const WO = (t, e) => {
      let n = t.start - e.start;
      const r = t.end - e.start + 1;
      return n < 0 && (n = 0), { start: n, end: r };
    },
    KO = (t, e) => {
      const n = e.element;
      if (!n) return Ce.debug("No textelement for line", e.lineNumber, "found for annotation", t.id), null;
      const { start: r, end: i } = WO(t, e);
      return i < 0 ? null : JO(X0(n, r, i));
    },
    JO = (t) => t.flat(),
    X0 = (t, e, n) => {
      var r;
      if (!t) return [];
      if (((r = t.childNodes) == null ? void 0 : r.length) > 0) {
        let l = 0;
        const u = [];
        for (const c of t.childNodes) {
          if (l > n) break;
          const f = c.textContent.length,
            h = X0(c, e - l, n - l);
          (l += f), u.push(...h);
        }
        return u;
      }
      const i = t.textContent.length;
      if ((e < 0 && (e = 0), e >= i)) return [];
      const o = Math.min(i, n),
        s = document.createRange();
      s.setStart(t, e), s.setEnd(t, o);
      const a = s.getClientRects();
      return Array.from(a).flat();
    };
  class Pc extends J0 {
    constructor() {
      super(...arguments), st(this, "textDirection", "ltr"), st(this, "flatText", !1), st(this, "_limit", null);
    }
    getRanges(e, n) {
      return KO(e, n);
    }
    set limit(e) {
      this._limit = e ?? null;
    }
    get limit() {
      return this._limit;
    }
    setConfig(e, n) {
      switch (e) {
        case "textDirection":
          (this.textDirection = n), this.changeConfig();
          break;
        case "flatText":
          (this.flatText = !!n), this.changeConfig();
          break;
        case "limit":
          (this.limit = n), this.changeConfig();
          break;
        default:
          console.warn("Unsupported config key:", n);
      }
    }
  }
  const Y0 = (t, e) => (
    e.textDirection && (t.textDirection = e.textDirection), (t.flatText = !!e.flatText), (t.limit = e.limit), t
  );
  function P(t, e, n) {
    function r(a, l) {
      var u;
      Object.defineProperty(a, "_zod", { value: a._zod ?? {}, enumerable: !1 }),
        (u = a._zod).traits ?? (u.traits = new Set()),
        a._zod.traits.add(t),
        e(a, l);
      for (const c in s.prototype) c in a || Object.defineProperty(a, c, { value: s.prototype[c].bind(a) });
      (a._zod.constr = s), (a._zod.def = l);
    }
    const i = (n == null ? void 0 : n.Parent) ?? Object;
    class o extends i {}
    Object.defineProperty(o, "name", { value: t });
    function s(a) {
      var l;
      const u = n != null && n.Parent ? new o() : this;
      r(u, a), (l = u._zod).deferred ?? (l.deferred = []);
      for (const c of u._zod.deferred) c();
      return u;
    }
    return (
      Object.defineProperty(s, "init", { value: r }),
      Object.defineProperty(s, Symbol.hasInstance, {
        value: (a) => {
          var l, u;
          return n != null && n.Parent && a instanceof n.Parent
            ? !0
            : (u = (l = a == null ? void 0 : a._zod) == null ? void 0 : l.traits) == null
              ? void 0
              : u.has(t);
        },
      }),
      Object.defineProperty(s, "name", { value: t }),
      s
    );
  }
  class Zi extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  const Q0 = {};
  function rr(t) {
    return Q0;
  }
  function XO(t) {
    const e = Object.values(t).filter((n) => typeof n == "number");
    return Object.entries(t)
      .filter(([n, r]) => e.indexOf(+n) === -1)
      .map(([n, r]) => r);
  }
  function YO(t, e) {
    return typeof e == "bigint" ? e.toString() : e;
  }
  function ty(t) {
    return {
      get value() {
        {
          const e = t();
          return Object.defineProperty(this, "value", { value: e }), e;
        }
      },
    };
  }
  function Ic(t) {
    return t == null;
  }
  function jc(t) {
    const e = t.startsWith("^") ? 1 : 0,
      n = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(e, n);
  }
  function QO(t, e) {
    const n = (t.toString().split(".")[1] || "").length,
      r = (e.toString().split(".")[1] || "").length,
      i = n > r ? n : r,
      o = Number.parseInt(t.toFixed(i).replace(".", "")),
      s = Number.parseInt(e.toFixed(i).replace(".", ""));
    return (o % s) / 10 ** i;
  }
  function Lt(t, e, n) {
    Object.defineProperty(t, e, {
      get() {
        {
          const r = n();
          return (t[e] = r), r;
        }
      },
      set(r) {
        Object.defineProperty(t, e, { value: r });
      },
      configurable: !0,
    });
  }
  function Mc(t, e, n) {
    Object.defineProperty(t, e, { value: n, writable: !0, enumerable: !0, configurable: !0 });
  }
  function ey(t = 10) {
    const e = "abcdefghijklmnopqrstuvwxyz";
    let n = "";
    for (let r = 0; r < t; r++) n += e[Math.floor(Math.random() * e.length)];
    return n;
  }
  function ei(t) {
    return JSON.stringify(t);
  }
  const ny = Error.captureStackTrace ? Error.captureStackTrace : (...t) => {};
  function $u(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  const tR = ty(() => {
    var t;
    if (
      typeof navigator < "u" &&
      (t = navigator == null ? void 0 : navigator.userAgent) != null &&
      t.includes("Cloudflare")
    )
      return !1;
    try {
      const e = Function;
      return new e(""), !0;
    } catch {
      return !1;
    }
  });
  function _g(t) {
    if ($u(t) === !1) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const n = e.prototype;
    return !($u(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
  }
  const eR = new Set(["string", "number", "symbol"]);
  function lo(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function dr(t, e, n) {
    const r = new t._zod.constr(e ?? t._zod.def);
    return (!e || (n != null && n.parent)) && (r._zod.parent = t), r;
  }
  function nt(t) {
    const e = t;
    if (!e) return {};
    if (typeof e == "string") return { error: () => e };
    if ((e == null ? void 0 : e.message) !== void 0) {
      if ((e == null ? void 0 : e.error) !== void 0)
        throw new Error("Cannot specify both `message` and `error` params");
      e.error = e.message;
    }
    return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
  }
  function nR(t) {
    return Object.keys(t).filter((e) => t[e]._zod.optin === "optional" && t[e]._zod.optout === "optional");
  }
  const rR = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  };
  function iR(t, e) {
    const n = {},
      r = t._zod.def;
    for (const i in e) {
      if (!(i in r.shape)) throw new Error(`Unrecognized key: "${i}"`);
      e[i] && (n[i] = r.shape[i]);
    }
    return dr(t, { ...t._zod.def, shape: n, checks: [] });
  }
  function oR(t, e) {
    const n = { ...t._zod.def.shape },
      r = t._zod.def;
    for (const i in e) {
      if (!(i in r.shape)) throw new Error(`Unrecognized key: "${i}"`);
      e[i] && delete n[i];
    }
    return dr(t, { ...t._zod.def, shape: n, checks: [] });
  }
  function sR(t, e) {
    const n = {
      ...t._zod.def,
      get shape() {
        const r = { ...t._zod.def.shape, ...e };
        return Mc(this, "shape", r), r;
      },
      checks: [],
    };
    return dr(t, n);
  }
  function aR(t, e) {
    return dr(t, {
      ...t._zod.def,
      get shape() {
        const n = { ...t._zod.def.shape, ...e._zod.def.shape };
        return Mc(this, "shape", n), n;
      },
      catchall: e._zod.def.catchall,
      checks: [],
    });
  }
  function lR(t, e, n) {
    const r = e._zod.def.shape,
      i = { ...r };
    if (n)
      for (const o in n) {
        if (!(o in r)) throw new Error(`Unrecognized key: "${o}"`);
        n[o] && (i[o] = t ? new t({ type: "optional", innerType: r[o] }) : r[o]);
      }
    else for (const o in r) i[o] = t ? new t({ type: "optional", innerType: r[o] }) : r[o];
    return dr(e, { ...e._zod.def, shape: i, checks: [] });
  }
  function uR(t, e, n) {
    const r = e._zod.def.shape,
      i = { ...r };
    if (n)
      for (const o in n) {
        if (!(o in i)) throw new Error(`Unrecognized key: "${o}"`);
        n[o] && (i[o] = new t({ type: "nonoptional", innerType: r[o] }));
      }
    else for (const o in r) i[o] = new t({ type: "nonoptional", innerType: r[o] });
    return dr(e, { ...e._zod.def, shape: i, checks: [] });
  }
  function Ai(t, e = 0) {
    for (let n = e; n < t.issues.length; n++) if (t.issues[n].continue !== !0) return !0;
    return !1;
  }
  function Nc(t, e) {
    return e.map((n) => {
      var r;
      return (r = n).path ?? (r.path = []), n.path.unshift(t), n;
    });
  }
  function So(t) {
    return typeof t == "string" ? t : t == null ? void 0 : t.message;
  }
  function ir(t, e, n) {
    var r, i, o, s, a, l;
    const u = { ...t, path: t.path ?? [] };
    if (!t.message) {
      const c =
        So(
          (o = (i = (r = t.inst) == null ? void 0 : r._zod.def) == null ? void 0 : i.error) == null
            ? void 0
            : o.call(i, t),
        ) ??
        So((s = e == null ? void 0 : e.error) == null ? void 0 : s.call(e, t)) ??
        So((a = n.customError) == null ? void 0 : a.call(n, t)) ??
        So((l = n.localeError) == null ? void 0 : l.call(n, t)) ??
        "Invalid input";
      u.message = c;
    }
    return delete u.inst, delete u.continue, (e != null && e.reportInput) || delete u.input, u;
  }
  function Lc(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
  }
  function Vi(...t) {
    const [e, n, r] = t;
    return typeof e == "string" ? { message: e, code: "custom", input: n, inst: r } : { ...e };
  }
  const ry = (t, e) => {
      (t.name = "$ZodError"),
        Object.defineProperty(t, "_zod", { value: t._zod, enumerable: !1 }),
        Object.defineProperty(t, "issues", { value: e, enumerable: !1 }),
        Object.defineProperty(t, "message", {
          get() {
            return JSON.stringify(e, YO, 2);
          },
          enumerable: !0,
        });
    },
    iy = P("$ZodError", ry),
    oy = P("$ZodError", ry, { Parent: Error });
  function cR(t, e = (n) => n.message) {
    const n = {},
      r = [];
    for (const i of t.issues)
      i.path.length > 0 ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(e(i))) : r.push(e(i));
    return { formErrors: r, fieldErrors: n };
  }
  function fR(t, e) {
    const n =
        e ||
        function (o) {
          return o.message;
        },
      r = { _errors: [] },
      i = (o) => {
        for (const s of o.issues)
          if (s.code === "invalid_union" && s.errors.length) s.errors.map((a) => i({ issues: a }));
          else if (s.code === "invalid_key") i({ issues: s.issues });
          else if (s.code === "invalid_element") i({ issues: s.issues });
          else if (s.path.length === 0) r._errors.push(n(s));
          else {
            let a = r,
              l = 0;
            for (; l < s.path.length; ) {
              const u = s.path[l];
              l === s.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(s)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++;
            }
          }
      };
    return i(t), r;
  }
  const hR = (t) => (e, n, r, i) => {
      const o = r ? Object.assign(r, { async: !1 }) : { async: !1 },
        s = e._zod.run({ value: n, issues: [] }, o);
      if (s instanceof Promise) throw new Zi();
      if (s.issues.length) {
        const a = new ((i == null ? void 0 : i.Err) ?? t)(s.issues.map((l) => ir(l, o, rr())));
        throw (ny(a, i == null ? void 0 : i.callee), a);
      }
      return s.value;
    },
    pR = (t) => async (e, n, r, i) => {
      const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
      let s = e._zod.run({ value: n, issues: [] }, o);
      if ((s instanceof Promise && (s = await s), s.issues.length)) {
        const a = new ((i == null ? void 0 : i.Err) ?? t)(s.issues.map((l) => ir(l, o, rr())));
        throw (ny(a, i == null ? void 0 : i.callee), a);
      }
      return s.value;
    },
    sy = (t) => (e, n, r) => {
      const i = r ? { ...r, async: !1 } : { async: !1 },
        o = e._zod.run({ value: n, issues: [] }, i);
      if (o instanceof Promise) throw new Zi();
      return o.issues.length
        ? { success: !1, error: new (t ?? iy)(o.issues.map((s) => ir(s, i, rr()))) }
        : { success: !0, data: o.value };
    },
    dR = sy(oy),
    ay = (t) => async (e, n, r) => {
      const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
      let o = e._zod.run({ value: n, issues: [] }, i);
      return (
        o instanceof Promise && (o = await o),
        o.issues.length
          ? { success: !1, error: new t(o.issues.map((s) => ir(s, i, rr()))) }
          : { success: !0, data: o.value }
      );
    },
    gR = ay(oy),
    mR = /^[cC][^\s-]{8,}$/,
    _R = /^[0-9a-z]+$/,
    vR = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    yR = /^[0-9a-vA-V]{20}$/,
    bR = /^[A-Za-z0-9]{27}$/,
    wR = /^[a-zA-Z0-9_-]{21}$/,
    xR = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    kR = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    vg = (t) =>
      t
        ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
        : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
    AR = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    ER = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function CR() {
    return new RegExp(ER, "u");
  }
  const SR =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    TR = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
    $R =
      /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    DR =
      /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    OR = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    ly = /^[A-Za-z0-9_-]*$/,
    RR = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
    FR = /^\+(?:[0-9]){6,14}[0-9]$/,
    uy =
      "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    zR = new RegExp(`^${uy}$`);
  function cy(t) {
    const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number"
      ? t.precision === -1
        ? `${e}`
        : t.precision === 0
          ? `${e}:[0-5]\\d`
          : `${e}:[0-5]\\d\\.\\d{${t.precision}}`
      : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function PR(t) {
    return new RegExp(`^${cy(t)}$`);
  }
  function IR(t) {
    const e = cy({ precision: t.precision }),
      n = ["Z"];
    t.local && n.push(""), t.offset && n.push("([+-]\\d{2}:\\d{2})");
    const r = `${e}(?:${n.join("|")})`;
    return new RegExp(`^${uy}T(?:${r})$`);
  }
  const jR = (t) => {
      const e = t
        ? `[\\s\\S]{${(t == null ? void 0 : t.minimum) ?? 0},${(t == null ? void 0 : t.maximum) ?? ""}}`
        : "[\\s\\S]*";
      return new RegExp(`^${e}$`);
    },
    MR = /^\d+$/,
    NR = /^-?\d+(?:\.\d+)?/i,
    LR = /true|false/i,
    BR = /^[^A-Z]*$/,
    qR = /^[^a-z]*$/,
    pe = P("$ZodCheck", (t, e) => {
      var n;
      t._zod ?? (t._zod = {}), (t._zod.def = e), (n = t._zod).onattach ?? (n.onattach = []);
    }),
    fy = { number: "number", bigint: "bigint", object: "date" },
    hy = P("$ZodCheckLessThan", (t, e) => {
      pe.init(t, e);
      const n = fy[typeof e.value];
      t._zod.onattach.push((r) => {
        const i = r._zod.bag,
          o = (e.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        e.value < o && (e.inclusive ? (i.maximum = e.value) : (i.exclusiveMaximum = e.value));
      }),
        (t._zod.check = (r) => {
          (e.inclusive ? r.value <= e.value : r.value < e.value) ||
            r.issues.push({
              origin: n,
              code: "too_big",
              maximum: e.value,
              input: r.value,
              inclusive: e.inclusive,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    py = P("$ZodCheckGreaterThan", (t, e) => {
      pe.init(t, e);
      const n = fy[typeof e.value];
      t._zod.onattach.push((r) => {
        const i = r._zod.bag,
          o = (e.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        e.value > o && (e.inclusive ? (i.minimum = e.value) : (i.exclusiveMinimum = e.value));
      }),
        (t._zod.check = (r) => {
          (e.inclusive ? r.value >= e.value : r.value > e.value) ||
            r.issues.push({
              origin: n,
              code: "too_small",
              minimum: e.value,
              input: r.value,
              inclusive: e.inclusive,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    UR = P("$ZodCheckMultipleOf", (t, e) => {
      pe.init(t, e),
        t._zod.onattach.push((n) => {
          var r;
          (r = n._zod.bag).multipleOf ?? (r.multipleOf = e.value);
        }),
        (t._zod.check = (n) => {
          if (typeof n.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
          (typeof n.value == "bigint" ? n.value % e.value === BigInt(0) : QO(n.value, e.value) === 0) ||
            n.issues.push({
              origin: typeof n.value,
              code: "not_multiple_of",
              divisor: e.value,
              input: n.value,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    ZR = P("$ZodCheckNumberFormat", (t, e) => {
      var n;
      pe.init(t, e), (e.format = e.format || "float64");
      const r = (n = e.format) == null ? void 0 : n.includes("int"),
        i = r ? "int" : "number",
        [o, s] = rR[e.format];
      t._zod.onattach.push((a) => {
        const l = a._zod.bag;
        (l.format = e.format), (l.minimum = o), (l.maximum = s), r && (l.pattern = MR);
      }),
        (t._zod.check = (a) => {
          const l = a.value;
          if (r) {
            if (!Number.isInteger(l)) {
              a.issues.push({ expected: i, format: e.format, code: "invalid_type", input: l, inst: t });
              return;
            }
            if (!Number.isSafeInteger(l)) {
              l > 0
                ? a.issues.push({
                    input: l,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: i,
                    continue: !e.abort,
                  })
                : a.issues.push({
                    input: l,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: i,
                    continue: !e.abort,
                  });
              return;
            }
          }
          l < o &&
            a.issues.push({
              origin: "number",
              input: l,
              code: "too_small",
              minimum: o,
              inclusive: !0,
              inst: t,
              continue: !e.abort,
            }),
            l > s && a.issues.push({ origin: "number", input: l, code: "too_big", maximum: s, inst: t });
        });
    }),
    VR = P("$ZodCheckMaxLength", (t, e) => {
      pe.init(t, e),
        (t._zod.when = (n) => {
          const r = n.value;
          return !Ic(r) && r.length !== void 0;
        }),
        t._zod.onattach.push((n) => {
          const r = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
          e.maximum < r && (n._zod.bag.maximum = e.maximum);
        }),
        (t._zod.check = (n) => {
          const r = n.value;
          if (r.length <= e.maximum) return;
          const i = Lc(r);
          n.issues.push({
            origin: i,
            code: "too_big",
            maximum: e.maximum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort,
          });
        });
    }),
    HR = P("$ZodCheckMinLength", (t, e) => {
      pe.init(t, e),
        (t._zod.when = (n) => {
          const r = n.value;
          return !Ic(r) && r.length !== void 0;
        }),
        t._zod.onattach.push((n) => {
          const r = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
          e.minimum > r && (n._zod.bag.minimum = e.minimum);
        }),
        (t._zod.check = (n) => {
          const r = n.value;
          if (r.length >= e.minimum) return;
          const i = Lc(r);
          n.issues.push({
            origin: i,
            code: "too_small",
            minimum: e.minimum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort,
          });
        });
    }),
    GR = P("$ZodCheckLengthEquals", (t, e) => {
      pe.init(t, e),
        (t._zod.when = (n) => {
          const r = n.value;
          return !Ic(r) && r.length !== void 0;
        }),
        t._zod.onattach.push((n) => {
          const r = n._zod.bag;
          (r.minimum = e.length), (r.maximum = e.length), (r.length = e.length);
        }),
        (t._zod.check = (n) => {
          const r = n.value,
            i = r.length;
          if (i === e.length) return;
          const o = Lc(r),
            s = i > e.length;
          n.issues.push({
            origin: o,
            ...(s ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length }),
            input: n.value,
            inst: t,
            continue: !e.abort,
          });
        });
    }),
    ia = P("$ZodCheckStringFormat", (t, e) => {
      var n;
      pe.init(t, e),
        t._zod.onattach.push((r) => {
          const i = r._zod.bag;
          (i.format = e.format), e.pattern && (i.patterns ?? (i.patterns = new Set()), i.patterns.add(e.pattern));
        }),
        (n = t._zod).check ??
          (n.check = (r) => {
            if (!e.pattern) throw new Error("Not implemented.");
            (e.pattern.lastIndex = 0),
              !e.pattern.test(r.value) &&
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: e.format,
                  input: r.value,
                  ...(e.pattern ? { pattern: e.pattern.toString() } : {}),
                  inst: t,
                  continue: !e.abort,
                });
          });
    }),
    WR = P("$ZodCheckRegex", (t, e) => {
      ia.init(t, e),
        (t._zod.check = (n) => {
          (e.pattern.lastIndex = 0),
            !e.pattern.test(n.value) &&
              n.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "regex",
                input: n.value,
                pattern: e.pattern.toString(),
                inst: t,
                continue: !e.abort,
              });
        });
    }),
    KR = P("$ZodCheckLowerCase", (t, e) => {
      e.pattern ?? (e.pattern = BR), ia.init(t, e);
    }),
    JR = P("$ZodCheckUpperCase", (t, e) => {
      e.pattern ?? (e.pattern = qR), ia.init(t, e);
    }),
    XR = P("$ZodCheckIncludes", (t, e) => {
      pe.init(t, e);
      const n = lo(e.includes),
        r = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${n}` : n);
      (e.pattern = r),
        t._zod.onattach.push((i) => {
          const o = i._zod.bag;
          o.patterns ?? (o.patterns = new Set()), o.patterns.add(r);
        }),
        (t._zod.check = (i) => {
          i.value.includes(e.includes, e.position) ||
            i.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "includes",
              includes: e.includes,
              input: i.value,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    YR = P("$ZodCheckStartsWith", (t, e) => {
      pe.init(t, e);
      const n = new RegExp(`^${lo(e.prefix)}.*`);
      e.pattern ?? (e.pattern = n),
        t._zod.onattach.push((r) => {
          const i = r._zod.bag;
          i.patterns ?? (i.patterns = new Set()), i.patterns.add(n);
        }),
        (t._zod.check = (r) => {
          r.value.startsWith(e.prefix) ||
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "starts_with",
              prefix: e.prefix,
              input: r.value,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    QR = P("$ZodCheckEndsWith", (t, e) => {
      pe.init(t, e);
      const n = new RegExp(`.*${lo(e.suffix)}$`);
      e.pattern ?? (e.pattern = n),
        t._zod.onattach.push((r) => {
          const i = r._zod.bag;
          i.patterns ?? (i.patterns = new Set()), i.patterns.add(n);
        }),
        (t._zod.check = (r) => {
          r.value.endsWith(e.suffix) ||
            r.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "ends_with",
              suffix: e.suffix,
              input: r.value,
              inst: t,
              continue: !e.abort,
            });
        });
    }),
    t5 = P("$ZodCheckOverwrite", (t, e) => {
      pe.init(t, e),
        (t._zod.check = (n) => {
          n.value = e.tx(n.value);
        });
    });
  class e5 {
    constructor(e = []) {
      (this.content = []), (this.indent = 0), this && (this.args = e);
    }
    indented(e) {
      (this.indent += 1), e(this), (this.indent -= 1);
    }
    write(e) {
      if (typeof e == "function") {
        e(this, { execution: "sync" }), e(this, { execution: "async" });
        return;
      }
      const n = e
          .split(
            `
`,
          )
          .filter((o) => o),
        r = Math.min(...n.map((o) => o.length - o.trimStart().length)),
        i = n.map((o) => o.slice(r)).map((o) => " ".repeat(this.indent * 2) + o);
      for (const o of i) this.content.push(o);
    }
    compile() {
      const e = Function,
        n = this == null ? void 0 : this.args,
        r = [...((this == null ? void 0 : this.content) ?? [""]).map((i) => `  ${i}`)];
      return new e(
        ...n,
        r.join(`
`),
      );
    }
  }
  const n5 = { major: 4, minor: 0, patch: 0 },
    Mt = P("$ZodType", (t, e) => {
      var n, r;
      t ?? (t = {}),
        Lt(t._zod, "id", () => e.type + "_" + ey(10)),
        (t._zod.def = e),
        (t._zod.bag = t._zod.bag || {}),
        (t._zod.version = n5);
      const i = [...(t._zod.def.checks ?? [])];
      t._zod.traits.has("$ZodCheck") && i.unshift(t);
      for (const o of i) for (const s of o._zod.onattach) s(t);
      if (i.length === 0)
        (r = t._zod).deferred ?? (r.deferred = []),
          (n = t._zod.deferred) == null ||
            n.push(() => {
              t._zod.run = t._zod.parse;
            });
      else {
        const o = (s, a, l) => {
          let u = Ai(s),
            c;
          for (const f of a) {
            if (f._zod.when) {
              if (!f._zod.when(s)) continue;
            } else if (u) continue;
            const h = s.issues.length,
              p = f._zod.check(s);
            if (p instanceof Promise && (l == null ? void 0 : l.async) === !1) throw new Zi();
            if (c || p instanceof Promise)
              c = (c ?? Promise.resolve()).then(async () => {
                await p, s.issues.length !== h && (u || (u = Ai(s, h)));
              });
            else {
              if (s.issues.length === h) continue;
              u || (u = Ai(s, h));
            }
          }
          return c ? c.then(() => s) : s;
        };
        t._zod.run = (s, a) => {
          const l = t._zod.parse(s, a);
          if (l instanceof Promise) {
            if (a.async === !1) throw new Zi();
            return l.then((u) => o(u, i, a));
          }
          return o(l, i, a);
        };
      }
      t["~standard"] = {
        validate: (o) => {
          var s;
          try {
            const a = dR(t, o);
            return a.success ? { value: a.data } : { issues: (s = a.error) == null ? void 0 : s.issues };
          } catch {
            return gR(t, o).then((a) => {
              var l;
              return a.success ? { value: a.data } : { issues: (l = a.error) == null ? void 0 : l.issues };
            });
          }
        },
        vendor: "zod",
        version: 1,
      };
    }),
    Bc = P("$ZodString", (t, e) => {
      var n;
      Mt.init(t, e),
        (t._zod.pattern =
          [...(((n = t == null ? void 0 : t._zod.bag) == null ? void 0 : n.patterns) ?? [])].pop() ?? jR(t._zod.bag)),
        (t._zod.parse = (r, i) => {
          if (e.coerce)
            try {
              r.value = String(r.value);
            } catch {}
          return (
            typeof r.value == "string" ||
              r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: t }),
            r
          );
        });
    }),
    Nt = P("$ZodStringFormat", (t, e) => {
      ia.init(t, e), Bc.init(t, e);
    }),
    r5 = P("$ZodGUID", (t, e) => {
      e.pattern ?? (e.pattern = kR), Nt.init(t, e);
    }),
    i5 = P("$ZodUUID", (t, e) => {
      if (e.version) {
        const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e.version];
        if (n === void 0) throw new Error(`Invalid UUID version: "${e.version}"`);
        e.pattern ?? (e.pattern = vg(n));
      } else e.pattern ?? (e.pattern = vg());
      Nt.init(t, e);
    }),
    o5 = P("$ZodEmail", (t, e) => {
      e.pattern ?? (e.pattern = AR), Nt.init(t, e);
    }),
    s5 = P("$ZodURL", (t, e) => {
      Nt.init(t, e),
        (t._zod.check = (n) => {
          try {
            const r = new URL(n.value);
            e.hostname &&
              ((e.hostname.lastIndex = 0),
              e.hostname.test(r.hostname) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid hostname",
                  pattern: RR.source,
                  input: n.value,
                  inst: t,
                  continue: !e.abort,
                })),
              e.protocol &&
                ((e.protocol.lastIndex = 0),
                e.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) ||
                  n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: e.protocol.source,
                    input: n.value,
                    inst: t,
                    continue: !e.abort,
                  }));
            return;
          } catch {
            n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: t, continue: !e.abort });
          }
        });
    }),
    a5 = P("$ZodEmoji", (t, e) => {
      e.pattern ?? (e.pattern = CR()), Nt.init(t, e);
    }),
    l5 = P("$ZodNanoID", (t, e) => {
      e.pattern ?? (e.pattern = wR), Nt.init(t, e);
    }),
    u5 = P("$ZodCUID", (t, e) => {
      e.pattern ?? (e.pattern = mR), Nt.init(t, e);
    }),
    c5 = P("$ZodCUID2", (t, e) => {
      e.pattern ?? (e.pattern = _R), Nt.init(t, e);
    }),
    f5 = P("$ZodULID", (t, e) => {
      e.pattern ?? (e.pattern = vR), Nt.init(t, e);
    }),
    h5 = P("$ZodXID", (t, e) => {
      e.pattern ?? (e.pattern = yR), Nt.init(t, e);
    }),
    p5 = P("$ZodKSUID", (t, e) => {
      e.pattern ?? (e.pattern = bR), Nt.init(t, e);
    }),
    d5 = P("$ZodISODateTime", (t, e) => {
      e.pattern ?? (e.pattern = IR(e)), Nt.init(t, e), t._zod.check;
    }),
    g5 = P("$ZodISODate", (t, e) => {
      e.pattern ?? (e.pattern = zR), Nt.init(t, e);
    }),
    m5 = P("$ZodISOTime", (t, e) => {
      e.pattern ?? (e.pattern = PR(e)), Nt.init(t, e), t._zod.check;
    }),
    _5 = P("$ZodISODuration", (t, e) => {
      e.pattern ?? (e.pattern = xR), Nt.init(t, e);
    }),
    v5 = P("$ZodIPv4", (t, e) => {
      e.pattern ?? (e.pattern = SR),
        Nt.init(t, e),
        t._zod.onattach.push((n) => {
          const r = n._zod.bag;
          r.format = "ipv4";
        });
    }),
    y5 = P("$ZodIPv6", (t, e) => {
      e.pattern ?? (e.pattern = TR),
        Nt.init(t, e),
        t._zod.onattach.push((n) => {
          const r = n._zod.bag;
          r.format = "ipv6";
        }),
        (t._zod.check = (n) => {
          try {
            new URL(`http://[${n.value}]`);
          } catch {
            n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: t, continue: !e.abort });
          }
        });
    }),
    b5 = P("$ZodCIDRv4", (t, e) => {
      e.pattern ?? (e.pattern = $R), Nt.init(t, e);
    }),
    w5 = P("$ZodCIDRv6", (t, e) => {
      e.pattern ?? (e.pattern = DR),
        Nt.init(t, e),
        (t._zod.check = (n) => {
          const [r, i] = n.value.split("/");
          try {
            if (!i) throw new Error();
            const o = Number(i);
            if (`${o}` !== i) throw new Error();
            if (o < 0 || o > 128) throw new Error();
            new URL(`http://[${r}]`);
          } catch {
            n.issues.push({ code: "invalid_format", format: "cidrv6", input: n.value, inst: t, continue: !e.abort });
          }
        });
    });
  function dy(t) {
    if (t === "") return !0;
    if (t.length % 4 !== 0) return !1;
    try {
      return atob(t), !0;
    } catch {
      return !1;
    }
  }
  const x5 = P("$ZodBase64", (t, e) => {
    e.pattern ?? (e.pattern = OR),
      Nt.init(t, e),
      t._zod.onattach.push((n) => {
        n._zod.bag.contentEncoding = "base64";
      }),
      (t._zod.check = (n) => {
        dy(n.value) ||
          n.issues.push({ code: "invalid_format", format: "base64", input: n.value, inst: t, continue: !e.abort });
      });
  });
  function k5(t) {
    if (!ly.test(t)) return !1;
    const e = t.replace(/[-_]/g, (r) => (r === "-" ? "+" : "/")),
      n = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
    return dy(n);
  }
  const A5 = P("$ZodBase64URL", (t, e) => {
      e.pattern ?? (e.pattern = ly),
        Nt.init(t, e),
        t._zod.onattach.push((n) => {
          n._zod.bag.contentEncoding = "base64url";
        }),
        (t._zod.check = (n) => {
          k5(n.value) ||
            n.issues.push({ code: "invalid_format", format: "base64url", input: n.value, inst: t, continue: !e.abort });
        });
    }),
    E5 = P("$ZodE164", (t, e) => {
      e.pattern ?? (e.pattern = FR), Nt.init(t, e);
    });
  function C5(t, e = null) {
    try {
      const n = t.split(".");
      if (n.length !== 3) return !1;
      const [r] = n,
        i = JSON.parse(atob(r));
      return !(
        ("typ" in i && (i == null ? void 0 : i.typ) !== "JWT") ||
        !i.alg ||
        (e && (!("alg" in i) || i.alg !== e))
      );
    } catch {
      return !1;
    }
  }
  const S5 = P("$ZodJWT", (t, e) => {
      Nt.init(t, e),
        (t._zod.check = (n) => {
          C5(n.value, e.alg) ||
            n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: t, continue: !e.abort });
        });
    }),
    gy = P("$ZodNumber", (t, e) => {
      Mt.init(t, e),
        (t._zod.pattern = t._zod.bag.pattern ?? NR),
        (t._zod.parse = (n, r) => {
          if (e.coerce)
            try {
              n.value = Number(n.value);
            } catch {}
          const i = n.value;
          if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
          const o =
            typeof i == "number" ? (Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity") : void 0;
          return (
            n.issues.push({
              expected: "number",
              code: "invalid_type",
              input: i,
              inst: t,
              ...(o ? { received: o } : {}),
            }),
            n
          );
        });
    }),
    T5 = P("$ZodNumber", (t, e) => {
      ZR.init(t, e), gy.init(t, e);
    }),
    $5 = P("$ZodBoolean", (t, e) => {
      Mt.init(t, e),
        (t._zod.pattern = LR),
        (t._zod.parse = (n, r) => {
          if (e.coerce)
            try {
              n.value = !!n.value;
            } catch {}
          const i = n.value;
          return (
            typeof i == "boolean" || n.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: t }), n
          );
        });
    }),
    D5 = P("$ZodAny", (t, e) => {
      Mt.init(t, e), (t._zod.parse = (n) => n);
    }),
    O5 = P("$ZodUnknown", (t, e) => {
      Mt.init(t, e), (t._zod.parse = (n) => n);
    }),
    R5 = P("$ZodNever", (t, e) => {
      Mt.init(t, e),
        (t._zod.parse = (n, r) => (
          n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: t }), n
        ));
    });
  function yg(t, e, n) {
    t.issues.length && e.issues.push(...Nc(n, t.issues)), (e.value[n] = t.value);
  }
  const F5 = P("$ZodArray", (t, e) => {
    Mt.init(t, e),
      (t._zod.parse = (n, r) => {
        const i = n.value;
        if (!Array.isArray(i)) return n.issues.push({ expected: "array", code: "invalid_type", input: i, inst: t }), n;
        n.value = Array(i.length);
        const o = [];
        for (let s = 0; s < i.length; s++) {
          const a = i[s],
            l = e.element._zod.run({ value: a, issues: [] }, r);
          l instanceof Promise ? o.push(l.then((u) => yg(u, n, s))) : yg(l, n, s);
        }
        return o.length ? Promise.all(o).then(() => n) : n;
      });
  });
  function To(t, e, n) {
    t.issues.length && e.issues.push(...Nc(n, t.issues)), (e.value[n] = t.value);
  }
  function bg(t, e, n, r) {
    t.issues.length
      ? r[n] === void 0
        ? n in r
          ? (e.value[n] = void 0)
          : (e.value[n] = t.value)
        : e.issues.push(...Nc(n, t.issues))
      : t.value === void 0
        ? n in r && (e.value[n] = void 0)
        : (e.value[n] = t.value);
  }
  const z5 = P("$ZodObject", (t, e) => {
    Mt.init(t, e);
    const n = ty(() => {
      const c = Object.keys(e.shape);
      for (const h of c)
        if (!(e.shape[h] instanceof Mt)) throw new Error(`Invalid element at key "${h}": expected a Zod schema`);
      const f = nR(e.shape);
      return { shape: e.shape, keys: c, keySet: new Set(c), numKeys: c.length, optionalKeys: new Set(f) };
    });
    Lt(t._zod, "propValues", () => {
      const c = e.shape,
        f = {};
      for (const h in c) {
        const p = c[h]._zod;
        if (p.values) {
          f[h] ?? (f[h] = new Set());
          for (const d of p.values) f[h].add(d);
        }
      }
      return f;
    });
    const r = (c) => {
      const f = new e5(["shape", "payload", "ctx"]),
        { keys: h, optionalKeys: p } = n.value,
        d = (b) => {
          const _ = ei(b);
          return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
        };
      f.write("const input = payload.value;");
      const m = Object.create(null);
      for (const b of h) m[b] = ey(15);
      f.write("const newResult = {}");
      for (const b of h)
        if (p.has(b)) {
          const _ = m[b];
          f.write(`const ${_} = ${d(b)};`);
          const w = ei(b);
          f.write(`
        if (${_}.issues.length) {
          if (input[${w}] === undefined) {
            if (${w} in input) {
              newResult[${w}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${_}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${w}, ...iss.path] : [${w}],
              }))
            );
          }
        } else if (${_}.value === undefined) {
          if (${w} in input) newResult[${w}] = undefined;
        } else {
          newResult[${w}] = ${_}.value;
        }
        `);
        } else {
          const _ = m[b];
          f.write(`const ${_} = ${d(b)};`),
            f.write(`
          if (${_}.issues.length) payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ei(b)}, ...iss.path] : [${ei(b)}]
          })));`),
            f.write(`newResult[${ei(b)}] = ${_}.value`);
        }
      f.write("payload.value = newResult;"), f.write("return payload;");
      const y = f.compile();
      return (b, _) => y(c, b, _);
    };
    let i;
    const o = $u,
      s = !Q0.jitless,
      a = s && tR.value,
      { catchall: l } = e;
    let u;
    t._zod.parse = (c, f) => {
      u ?? (u = n.value);
      const h = c.value;
      if (!o(h)) return c.issues.push({ expected: "object", code: "invalid_type", input: h, inst: t }), c;
      const p = [];
      if (s && a && (f == null ? void 0 : f.async) === !1 && f.jitless !== !0) i || (i = r(e.shape)), (c = i(c, f));
      else {
        c.value = {};
        const _ = u.shape;
        for (const w of u.keys) {
          const v = _[w],
            C = v._zod.run({ value: h[w], issues: [] }, f),
            R = v._zod.optin === "optional" && v._zod.optout === "optional";
          C instanceof Promise
            ? p.push(C.then((z) => (R ? bg(z, c, w, h) : To(z, c, w))))
            : R
              ? bg(C, c, w, h)
              : To(C, c, w);
        }
      }
      if (!l) return p.length ? Promise.all(p).then(() => c) : c;
      const d = [],
        m = u.keySet,
        y = l._zod,
        b = y.def.type;
      for (const _ of Object.keys(h)) {
        if (m.has(_)) continue;
        if (b === "never") {
          d.push(_);
          continue;
        }
        const w = y.run({ value: h[_], issues: [] }, f);
        w instanceof Promise ? p.push(w.then((v) => To(v, c, _))) : To(w, c, _);
      }
      return (
        d.length && c.issues.push({ code: "unrecognized_keys", keys: d, input: h, inst: t }),
        p.length ? Promise.all(p).then(() => c) : c
      );
    };
  });
  function wg(t, e, n, r) {
    for (const i of t) if (i.issues.length === 0) return (e.value = i.value), e;
    return (
      e.issues.push({
        code: "invalid_union",
        input: e.value,
        inst: n,
        errors: t.map((i) => i.issues.map((o) => ir(o, r, rr()))),
      }),
      e
    );
  }
  const P5 = P("$ZodUnion", (t, e) => {
      Mt.init(t, e),
        Lt(t._zod, "values", () => {
          if (e.options.every((n) => n._zod.values))
            return new Set(e.options.flatMap((n) => Array.from(n._zod.values)));
        }),
        Lt(t._zod, "pattern", () => {
          if (e.options.every((n) => n._zod.pattern)) {
            const n = e.options.map((r) => r._zod.pattern);
            return new RegExp(`^(${n.map((r) => jc(r.source)).join("|")})$`);
          }
        }),
        (t._zod.parse = (n, r) => {
          let i = !1;
          const o = [];
          for (const s of e.options) {
            const a = s._zod.run({ value: n.value, issues: [] }, r);
            if (a instanceof Promise) o.push(a), (i = !0);
            else {
              if (a.issues.length === 0) return a;
              o.push(a);
            }
          }
          return i ? Promise.all(o).then((s) => wg(s, n, t, r)) : wg(o, n, t, r);
        });
    }),
    I5 = P("$ZodIntersection", (t, e) => {
      Mt.init(t, e),
        (t._zod.parse = (n, r) => {
          const { value: i } = n,
            o = e.left._zod.run({ value: i, issues: [] }, r),
            s = e.right._zod.run({ value: i, issues: [] }, r);
          return o instanceof Promise || s instanceof Promise
            ? Promise.all([o, s]).then(([a, l]) => xg(n, a, l))
            : xg(n, o, s);
        });
    });
  function Du(t, e) {
    if (t === e) return { valid: !0, data: t };
    if (t instanceof Date && e instanceof Date && +t == +e) return { valid: !0, data: t };
    if (_g(t) && _g(e)) {
      const n = Object.keys(e),
        r = Object.keys(t).filter((o) => n.indexOf(o) !== -1),
        i = { ...t, ...e };
      for (const o of r) {
        const s = Du(t[o], e[o]);
        if (!s.valid) return { valid: !1, mergeErrorPath: [o, ...s.mergeErrorPath] };
        i[o] = s.data;
      }
      return { valid: !0, data: i };
    }
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length) return { valid: !1, mergeErrorPath: [] };
      const n = [];
      for (let r = 0; r < t.length; r++) {
        const i = t[r],
          o = e[r],
          s = Du(i, o);
        if (!s.valid) return { valid: !1, mergeErrorPath: [r, ...s.mergeErrorPath] };
        n.push(s.data);
      }
      return { valid: !0, data: n };
    }
    return { valid: !1, mergeErrorPath: [] };
  }
  function xg(t, e, n) {
    if ((e.issues.length && t.issues.push(...e.issues), n.issues.length && t.issues.push(...n.issues), Ai(t))) return t;
    const r = Du(e.value, n.value);
    if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
    return (t.value = r.data), t;
  }
  const j5 = P("$ZodEnum", (t, e) => {
      Mt.init(t, e);
      const n = XO(e.entries);
      (t._zod.values = new Set(n)),
        (t._zod.pattern = new RegExp(
          `^(${n
            .filter((r) => eR.has(typeof r))
            .map((r) => (typeof r == "string" ? lo(r) : r.toString()))
            .join("|")})$`,
        )),
        (t._zod.parse = (r, i) => {
          const o = r.value;
          return t._zod.values.has(o) || r.issues.push({ code: "invalid_value", values: n, input: o, inst: t }), r;
        });
    }),
    M5 = P("$ZodLiteral", (t, e) => {
      Mt.init(t, e),
        (t._zod.values = new Set(e.values)),
        (t._zod.pattern = new RegExp(
          `^(${e.values.map((n) => (typeof n == "string" ? lo(n) : n ? n.toString() : String(n))).join("|")})$`,
        )),
        (t._zod.parse = (n, r) => {
          const i = n.value;
          return (
            t._zod.values.has(i) || n.issues.push({ code: "invalid_value", values: e.values, input: i, inst: t }), n
          );
        });
    }),
    N5 = P("$ZodTransform", (t, e) => {
      Mt.init(t, e),
        (t._zod.parse = (n, r) => {
          const i = e.transform(n.value, n);
          if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((o) => ((n.value = o), n));
          if (i instanceof Promise) throw new Zi();
          return (n.value = i), n;
        });
    }),
    L5 = P("$ZodOptional", (t, e) => {
      Mt.init(t, e),
        (t._zod.optin = "optional"),
        (t._zod.optout = "optional"),
        Lt(t._zod, "values", () => (e.innerType._zod.values ? new Set([...e.innerType._zod.values, void 0]) : void 0)),
        Lt(t._zod, "pattern", () => {
          const n = e.innerType._zod.pattern;
          return n ? new RegExp(`^(${jc(n.source)})?$`) : void 0;
        }),
        (t._zod.parse = (n, r) => (n.value === void 0 ? n : e.innerType._zod.run(n, r)));
    }),
    B5 = P("$ZodNullable", (t, e) => {
      Mt.init(t, e),
        Lt(t._zod, "optin", () => e.innerType._zod.optin),
        Lt(t._zod, "optout", () => e.innerType._zod.optout),
        Lt(t._zod, "pattern", () => {
          const n = e.innerType._zod.pattern;
          return n ? new RegExp(`^(${jc(n.source)}|null)$`) : void 0;
        }),
        Lt(t._zod, "values", () => (e.innerType._zod.values ? new Set([...e.innerType._zod.values, null]) : void 0)),
        (t._zod.parse = (n, r) => (n.value === null ? n : e.innerType._zod.run(n, r)));
    }),
    q5 = P("$ZodDefault", (t, e) => {
      Mt.init(t, e),
        (t._zod.optin = "optional"),
        Lt(t._zod, "values", () => e.innerType._zod.values),
        (t._zod.parse = (n, r) => {
          if (n.value === void 0) return (n.value = e.defaultValue), n;
          const i = e.innerType._zod.run(n, r);
          return i instanceof Promise ? i.then((o) => kg(o, e)) : kg(i, e);
        });
    });
  function kg(t, e) {
    return t.value === void 0 && (t.value = e.defaultValue), t;
  }
  const U5 = P("$ZodPrefault", (t, e) => {
      Mt.init(t, e),
        (t._zod.optin = "optional"),
        Lt(t._zod, "values", () => e.innerType._zod.values),
        (t._zod.parse = (n, r) => (n.value === void 0 && (n.value = e.defaultValue), e.innerType._zod.run(n, r)));
    }),
    Z5 = P("$ZodNonOptional", (t, e) => {
      Mt.init(t, e),
        Lt(t._zod, "values", () => {
          const n = e.innerType._zod.values;
          return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
        }),
        (t._zod.parse = (n, r) => {
          const i = e.innerType._zod.run(n, r);
          return i instanceof Promise ? i.then((o) => Ag(o, t)) : Ag(i, t);
        });
    });
  function Ag(t, e) {
    return (
      !t.issues.length &&
        t.value === void 0 &&
        t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: e }),
      t
    );
  }
  const V5 = P("$ZodCatch", (t, e) => {
      Mt.init(t, e),
        Lt(t._zod, "optin", () => e.innerType._zod.optin),
        Lt(t._zod, "optout", () => e.innerType._zod.optout),
        Lt(t._zod, "values", () => e.innerType._zod.values),
        (t._zod.parse = (n, r) => {
          const i = e.innerType._zod.run(n, r);
          return i instanceof Promise
            ? i.then(
                (o) => (
                  (n.value = o.value),
                  o.issues.length &&
                    ((n.value = e.catchValue({
                      ...n,
                      error: { issues: o.issues.map((s) => ir(s, r, rr())) },
                      input: n.value,
                    })),
                    (n.issues = [])),
                  n
                ),
              )
            : ((n.value = i.value),
              i.issues.length &&
                ((n.value = e.catchValue({
                  ...n,
                  error: { issues: i.issues.map((o) => ir(o, r, rr())) },
                  input: n.value,
                })),
                (n.issues = [])),
              n);
        });
    }),
    H5 = P("$ZodPipe", (t, e) => {
      Mt.init(t, e),
        Lt(t._zod, "values", () => e.in._zod.values),
        Lt(t._zod, "optin", () => e.in._zod.optin),
        Lt(t._zod, "optout", () => e.out._zod.optout),
        (t._zod.parse = (n, r) => {
          const i = e.in._zod.run(n, r);
          return i instanceof Promise ? i.then((o) => Eg(o, e, r)) : Eg(i, e, r);
        });
    });
  function Eg(t, e, n) {
    return Ai(t) ? t : e.out._zod.run({ value: t.value, issues: t.issues }, n);
  }
  const G5 = P("$ZodReadonly", (t, e) => {
    Mt.init(t, e),
      Lt(t._zod, "propValues", () => e.innerType._zod.propValues),
      Lt(t._zod, "optin", () => e.innerType._zod.optin),
      Lt(t._zod, "optout", () => e.innerType._zod.optout),
      (t._zod.parse = (n, r) => {
        const i = e.innerType._zod.run(n, r);
        return i instanceof Promise ? i.then(Cg) : Cg(i);
      });
  });
  function Cg(t) {
    return (t.value = Object.freeze(t.value)), t;
  }
  const W5 = P("$ZodCustom", (t, e) => {
    pe.init(t, e),
      Mt.init(t, e),
      (t._zod.parse = (n, r) => n),
      (t._zod.check = (n) => {
        const r = n.value,
          i = e.fn(r);
        if (i instanceof Promise) return i.then((o) => Sg(o, n, r, t));
        Sg(i, n, r, t);
      });
  });
  function Sg(t, e, n, r) {
    if (!t) {
      const i = { code: "custom", input: n, inst: r, path: [...(r._zod.def.path ?? [])], continue: !r._zod.def.abort };
      r._zod.def.params && (i.params = r._zod.def.params), e.issues.push(Vi(i));
    }
  }
  class K5 {
    constructor() {
      (this._map = new WeakMap()), (this._idmap = new Map());
    }
    add(e, ...n) {
      const r = n[0];
      if ((this._map.set(e, r), r && typeof r == "object" && "id" in r)) {
        if (this._idmap.has(r.id)) throw new Error(`ID ${r.id} already exists in the registry`);
        this._idmap.set(r.id, e);
      }
      return this;
    }
    remove(e) {
      return this._map.delete(e), this;
    }
    get(e) {
      const n = e._zod.parent;
      if (n) {
        const r = { ...(this.get(n) ?? {}) };
        return delete r.id, { ...r, ...this._map.get(e) };
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  }
  function J5() {
    return new K5();
  }
  const $o = J5();
  function X5(t, e) {
    return new t({ type: "string", ...nt(e) });
  }
  function Y5(t, e) {
    return new t({ type: "string", format: "email", check: "string_format", abort: !1, ...nt(e) });
  }
  function Tg(t, e) {
    return new t({ type: "string", format: "guid", check: "string_format", abort: !1, ...nt(e) });
  }
  function Q5(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, ...nt(e) });
  }
  function tF(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...nt(e) });
  }
  function eF(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...nt(e) });
  }
  function nF(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...nt(e) });
  }
  function rF(t, e) {
    return new t({ type: "string", format: "url", check: "string_format", abort: !1, ...nt(e) });
  }
  function iF(t, e) {
    return new t({ type: "string", format: "emoji", check: "string_format", abort: !1, ...nt(e) });
  }
  function oF(t, e) {
    return new t({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...nt(e) });
  }
  function sF(t, e) {
    return new t({ type: "string", format: "cuid", check: "string_format", abort: !1, ...nt(e) });
  }
  function aF(t, e) {
    return new t({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...nt(e) });
  }
  function lF(t, e) {
    return new t({ type: "string", format: "ulid", check: "string_format", abort: !1, ...nt(e) });
  }
  function uF(t, e) {
    return new t({ type: "string", format: "xid", check: "string_format", abort: !1, ...nt(e) });
  }
  function cF(t, e) {
    return new t({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...nt(e) });
  }
  function fF(t, e) {
    return new t({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...nt(e) });
  }
  function hF(t, e) {
    return new t({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...nt(e) });
  }
  function pF(t, e) {
    return new t({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...nt(e) });
  }
  function dF(t, e) {
    return new t({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...nt(e) });
  }
  function gF(t, e) {
    return new t({ type: "string", format: "base64", check: "string_format", abort: !1, ...nt(e) });
  }
  function mF(t, e) {
    return new t({ type: "string", format: "base64url", check: "string_format", abort: !1, ...nt(e) });
  }
  function _F(t, e) {
    return new t({ type: "string", format: "e164", check: "string_format", abort: !1, ...nt(e) });
  }
  function vF(t, e) {
    return new t({ type: "string", format: "jwt", check: "string_format", abort: !1, ...nt(e) });
  }
  function yF(t, e) {
    return new t({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: !1,
      local: !1,
      precision: null,
      ...nt(e),
    });
  }
  function bF(t, e) {
    return new t({ type: "string", format: "date", check: "string_format", ...nt(e) });
  }
  function wF(t, e) {
    return new t({ type: "string", format: "time", check: "string_format", precision: null, ...nt(e) });
  }
  function xF(t, e) {
    return new t({ type: "string", format: "duration", check: "string_format", ...nt(e) });
  }
  function kF(t, e) {
    return new t({ type: "number", checks: [], ...nt(e) });
  }
  function AF(t, e) {
    return new t({ type: "number", check: "number_format", abort: !1, format: "safeint", ...nt(e) });
  }
  function EF(t, e) {
    return new t({ type: "boolean", ...nt(e) });
  }
  function CF(t) {
    return new t({ type: "any" });
  }
  function SF(t) {
    return new t({ type: "unknown" });
  }
  function TF(t, e) {
    return new t({ type: "never", ...nt(e) });
  }
  function $g(t, e) {
    return new hy({ check: "less_than", ...nt(e), value: t, inclusive: !1 });
  }
  function Fl(t, e) {
    return new hy({ check: "less_than", ...nt(e), value: t, inclusive: !0 });
  }
  function Dg(t, e) {
    return new py({ check: "greater_than", ...nt(e), value: t, inclusive: !1 });
  }
  function zl(t, e) {
    return new py({ check: "greater_than", ...nt(e), value: t, inclusive: !0 });
  }
  function Og(t, e) {
    return new UR({ check: "multiple_of", ...nt(e), value: t });
  }
  function my(t, e) {
    return new VR({ check: "max_length", ...nt(e), maximum: t });
  }
  function ps(t, e) {
    return new HR({ check: "min_length", ...nt(e), minimum: t });
  }
  function _y(t, e) {
    return new GR({ check: "length_equals", ...nt(e), length: t });
  }
  function $F(t, e) {
    return new WR({ check: "string_format", format: "regex", ...nt(e), pattern: t });
  }
  function DF(t) {
    return new KR({ check: "string_format", format: "lowercase", ...nt(t) });
  }
  function OF(t) {
    return new JR({ check: "string_format", format: "uppercase", ...nt(t) });
  }
  function RF(t, e) {
    return new XR({ check: "string_format", format: "includes", ...nt(e), includes: t });
  }
  function FF(t, e) {
    return new YR({ check: "string_format", format: "starts_with", ...nt(e), prefix: t });
  }
  function zF(t, e) {
    return new QR({ check: "string_format", format: "ends_with", ...nt(e), suffix: t });
  }
  function uo(t) {
    return new t5({ check: "overwrite", tx: t });
  }
  function PF(t) {
    return uo((e) => e.normalize(t));
  }
  function IF() {
    return uo((t) => t.trim());
  }
  function jF() {
    return uo((t) => t.toLowerCase());
  }
  function MF() {
    return uo((t) => t.toUpperCase());
  }
  function NF(t, e, n) {
    return new t({ type: "array", element: e, ...nt(n) });
  }
  function LF(t, e, n) {
    return new t({ type: "custom", check: "custom", fn: e, ...nt(n) });
  }
  const BF = P("ZodISODateTime", (t, e) => {
    d5.init(t, e), Bt.init(t, e);
  });
  function qF(t) {
    return yF(BF, t);
  }
  const UF = P("ZodISODate", (t, e) => {
    g5.init(t, e), Bt.init(t, e);
  });
  function ZF(t) {
    return bF(UF, t);
  }
  const VF = P("ZodISOTime", (t, e) => {
    m5.init(t, e), Bt.init(t, e);
  });
  function HF(t) {
    return wF(VF, t);
  }
  const GF = P("ZodISODuration", (t, e) => {
    _5.init(t, e), Bt.init(t, e);
  });
  function WF(t) {
    return xF(GF, t);
  }
  const KF = (t, e) => {
      iy.init(t, e),
        (t.name = "ZodError"),
        Object.defineProperties(t, {
          format: { value: (n) => fR(t, n) },
          flatten: { value: (n) => cR(t, n) },
          addIssue: { value: (n) => t.issues.push(n) },
          addIssues: { value: (n) => t.issues.push(...n) },
          isEmpty: {
            get() {
              return t.issues.length === 0;
            },
          },
        });
    },
    oa = P("ZodError", KF, { Parent: Error }),
    JF = hR(oa),
    XF = pR(oa),
    YF = sy(oa),
    QF = ay(oa),
    Ut = P(
      "ZodType",
      (t, e) => (
        Mt.init(t, e),
        (t.def = e),
        Object.defineProperty(t, "_def", { value: e }),
        (t.check = (...n) =>
          t.clone({
            ...e,
            checks: [
              ...(e.checks ?? []),
              ...n.map((r) =>
                typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r,
              ),
            ],
          })),
        (t.clone = (n, r) => dr(t, n, r)),
        (t.brand = () => t),
        (t.register = (n, r) => (n.add(t, r), t)),
        (t.parse = (n, r) => JF(t, n, r, { callee: t.parse })),
        (t.safeParse = (n, r) => YF(t, n, r)),
        (t.parseAsync = async (n, r) => XF(t, n, r, { callee: t.parseAsync })),
        (t.safeParseAsync = async (n, r) => QF(t, n, r)),
        (t.spa = t.safeParseAsync),
        (t.refine = (n, r) => t.check(Gz(n, r))),
        (t.superRefine = (n) => t.check(Wz(n))),
        (t.overwrite = (n) => t.check(uo(n))),
        (t.optional = () => Ig(t)),
        (t.nullable = () => jg(t)),
        (t.nullish = () => Ig(jg(t))),
        (t.nonoptional = (n) => Nz(t, n)),
        (t.array = () => Ou(t)),
        (t.or = (n) => qc([t, n])),
        (t.and = (n) => Dz(t, n)),
        (t.transform = (n) => Mg(t, Fz(n))),
        (t.default = (n) => Iz(t, n)),
        (t.prefault = (n) => Mz(t, n)),
        (t.catch = (n) => Bz(t, n)),
        (t.pipe = (n) => Mg(t, n)),
        (t.readonly = () => Zz(t)),
        (t.describe = (n) => {
          const r = t.clone();
          return $o.add(r, { description: n }), r;
        }),
        Object.defineProperty(t, "description", {
          get() {
            var n;
            return (n = $o.get(t)) == null ? void 0 : n.description;
          },
          configurable: !0,
        }),
        (t.meta = (...n) => {
          if (n.length === 0) return $o.get(t);
          const r = t.clone();
          return $o.add(r, n[0]), r;
        }),
        (t.isOptional = () => t.safeParse(void 0).success),
        (t.isNullable = () => t.safeParse(null).success),
        t
      ),
    ),
    vy = P("_ZodString", (t, e) => {
      Bc.init(t, e), Ut.init(t, e);
      const n = t._zod.bag;
      (t.format = n.format ?? null),
        (t.minLength = n.minimum ?? null),
        (t.maxLength = n.maximum ?? null),
        (t.regex = (...r) => t.check($F(...r))),
        (t.includes = (...r) => t.check(RF(...r))),
        (t.startsWith = (...r) => t.check(FF(...r))),
        (t.endsWith = (...r) => t.check(zF(...r))),
        (t.min = (...r) => t.check(ps(...r))),
        (t.max = (...r) => t.check(my(...r))),
        (t.length = (...r) => t.check(_y(...r))),
        (t.nonempty = (...r) => t.check(ps(1, ...r))),
        (t.lowercase = (r) => t.check(DF(r))),
        (t.uppercase = (r) => t.check(OF(r))),
        (t.trim = () => t.check(IF())),
        (t.normalize = (...r) => t.check(PF(...r))),
        (t.toLowerCase = () => t.check(jF())),
        (t.toUpperCase = () => t.check(MF()));
    }),
    tz = P("ZodString", (t, e) => {
      Bc.init(t, e),
        vy.init(t, e),
        (t.email = (n) => t.check(Y5(ez, n))),
        (t.url = (n) => t.check(rF(nz, n))),
        (t.jwt = (n) => t.check(vF(_z, n))),
        (t.emoji = (n) => t.check(iF(rz, n))),
        (t.guid = (n) => t.check(Tg(Rg, n))),
        (t.uuid = (n) => t.check(Q5(Do, n))),
        (t.uuidv4 = (n) => t.check(tF(Do, n))),
        (t.uuidv6 = (n) => t.check(eF(Do, n))),
        (t.uuidv7 = (n) => t.check(nF(Do, n))),
        (t.nanoid = (n) => t.check(oF(iz, n))),
        (t.guid = (n) => t.check(Tg(Rg, n))),
        (t.cuid = (n) => t.check(sF(oz, n))),
        (t.cuid2 = (n) => t.check(aF(sz, n))),
        (t.ulid = (n) => t.check(lF(az, n))),
        (t.base64 = (n) => t.check(gF(dz, n))),
        (t.base64url = (n) => t.check(mF(gz, n))),
        (t.xid = (n) => t.check(uF(lz, n))),
        (t.ksuid = (n) => t.check(cF(uz, n))),
        (t.ipv4 = (n) => t.check(fF(cz, n))),
        (t.ipv6 = (n) => t.check(hF(fz, n))),
        (t.cidrv4 = (n) => t.check(pF(hz, n))),
        (t.cidrv6 = (n) => t.check(dF(pz, n))),
        (t.e164 = (n) => t.check(_F(mz, n))),
        (t.datetime = (n) => t.check(qF(n))),
        (t.date = (n) => t.check(ZF(n))),
        (t.time = (n) => t.check(HF(n))),
        (t.duration = (n) => t.check(WF(n)));
    });
  function zt(t) {
    return X5(tz, t);
  }
  const Bt = P("ZodStringFormat", (t, e) => {
      Nt.init(t, e), vy.init(t, e);
    }),
    ez = P("ZodEmail", (t, e) => {
      o5.init(t, e), Bt.init(t, e);
    }),
    Rg = P("ZodGUID", (t, e) => {
      r5.init(t, e), Bt.init(t, e);
    }),
    Do = P("ZodUUID", (t, e) => {
      i5.init(t, e), Bt.init(t, e);
    }),
    nz = P("ZodURL", (t, e) => {
      s5.init(t, e), Bt.init(t, e);
    }),
    rz = P("ZodEmoji", (t, e) => {
      a5.init(t, e), Bt.init(t, e);
    }),
    iz = P("ZodNanoID", (t, e) => {
      l5.init(t, e), Bt.init(t, e);
    }),
    oz = P("ZodCUID", (t, e) => {
      u5.init(t, e), Bt.init(t, e);
    }),
    sz = P("ZodCUID2", (t, e) => {
      c5.init(t, e), Bt.init(t, e);
    }),
    az = P("ZodULID", (t, e) => {
      f5.init(t, e), Bt.init(t, e);
    }),
    lz = P("ZodXID", (t, e) => {
      h5.init(t, e), Bt.init(t, e);
    }),
    uz = P("ZodKSUID", (t, e) => {
      p5.init(t, e), Bt.init(t, e);
    }),
    cz = P("ZodIPv4", (t, e) => {
      v5.init(t, e), Bt.init(t, e);
    }),
    fz = P("ZodIPv6", (t, e) => {
      y5.init(t, e), Bt.init(t, e);
    }),
    hz = P("ZodCIDRv4", (t, e) => {
      b5.init(t, e), Bt.init(t, e);
    }),
    pz = P("ZodCIDRv6", (t, e) => {
      w5.init(t, e), Bt.init(t, e);
    }),
    dz = P("ZodBase64", (t, e) => {
      x5.init(t, e), Bt.init(t, e);
    }),
    gz = P("ZodBase64URL", (t, e) => {
      A5.init(t, e), Bt.init(t, e);
    }),
    mz = P("ZodE164", (t, e) => {
      E5.init(t, e), Bt.init(t, e);
    }),
    _z = P("ZodJWT", (t, e) => {
      S5.init(t, e), Bt.init(t, e);
    }),
    yy = P("ZodNumber", (t, e) => {
      gy.init(t, e),
        Ut.init(t, e),
        (t.gt = (r, i) => t.check(Dg(r, i))),
        (t.gte = (r, i) => t.check(zl(r, i))),
        (t.min = (r, i) => t.check(zl(r, i))),
        (t.lt = (r, i) => t.check($g(r, i))),
        (t.lte = (r, i) => t.check(Fl(r, i))),
        (t.max = (r, i) => t.check(Fl(r, i))),
        (t.int = (r) => t.check(Fg(r))),
        (t.safe = (r) => t.check(Fg(r))),
        (t.positive = (r) => t.check(Dg(0, r))),
        (t.nonnegative = (r) => t.check(zl(0, r))),
        (t.negative = (r) => t.check($g(0, r))),
        (t.nonpositive = (r) => t.check(Fl(0, r))),
        (t.multipleOf = (r, i) => t.check(Og(r, i))),
        (t.step = (r, i) => t.check(Og(r, i))),
        (t.finite = () => t);
      const n = t._zod.bag;
      (t.minValue =
        Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null),
        (t.maxValue =
          Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null),
        (t.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5)),
        (t.isFinite = !0),
        (t.format = n.format ?? null);
    });
  function ze(t) {
    return kF(yy, t);
  }
  const vz = P("ZodNumberFormat", (t, e) => {
    T5.init(t, e), yy.init(t, e);
  });
  function Fg(t) {
    return AF(vz, t);
  }
  const yz = P("ZodBoolean", (t, e) => {
    $5.init(t, e), Ut.init(t, e);
  });
  function bz(t) {
    return EF(yz, t);
  }
  const wz = P("ZodAny", (t, e) => {
    D5.init(t, e), Ut.init(t, e);
  });
  function xz() {
    return CF(wz);
  }
  const kz = P("ZodUnknown", (t, e) => {
    O5.init(t, e), Ut.init(t, e);
  });
  function zg() {
    return SF(kz);
  }
  const Az = P("ZodNever", (t, e) => {
    R5.init(t, e), Ut.init(t, e);
  });
  function Ez(t) {
    return TF(Az, t);
  }
  const Cz = P("ZodArray", (t, e) => {
    F5.init(t, e),
      Ut.init(t, e),
      (t.element = e.element),
      (t.min = (n, r) => t.check(ps(n, r))),
      (t.nonempty = (n) => t.check(ps(1, n))),
      (t.max = (n, r) => t.check(my(n, r))),
      (t.length = (n, r) => t.check(_y(n, r))),
      (t.unwrap = () => t.element);
  });
  function Ou(t, e) {
    return NF(Cz, t, e);
  }
  const Sz = P("ZodObject", (t, e) => {
    z5.init(t, e),
      Ut.init(t, e),
      Lt(t, "shape", () => e.shape),
      (t.keyof = () => be(Object.keys(t._zod.def.shape))),
      (t.catchall = (n) => t.clone({ ...t._zod.def, catchall: n })),
      (t.passthrough = () => t.clone({ ...t._zod.def, catchall: zg() })),
      (t.loose = () => t.clone({ ...t._zod.def, catchall: zg() })),
      (t.strict = () => t.clone({ ...t._zod.def, catchall: Ez() })),
      (t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 })),
      (t.extend = (n) => sR(t, n)),
      (t.merge = (n) => aR(t, n)),
      (t.pick = (n) => iR(t, n)),
      (t.omit = (n) => oR(t, n)),
      (t.partial = (...n) => lR(by, t, n[0])),
      (t.required = (...n) => uR(wy, t, n[0]));
  });
  function rn(t, e) {
    const n = {
      type: "object",
      get shape() {
        return Mc(this, "shape", { ...t }), this.shape;
      },
      ...nt(e),
    };
    return new Sz(n);
  }
  const Tz = P("ZodUnion", (t, e) => {
    P5.init(t, e), Ut.init(t, e), (t.options = e.options);
  });
  function qc(t, e) {
    return new Tz({ type: "union", options: t, ...nt(e) });
  }
  const $z = P("ZodIntersection", (t, e) => {
    I5.init(t, e), Ut.init(t, e);
  });
  function Dz(t, e) {
    return new $z({ type: "intersection", left: t, right: e });
  }
  const Ru = P("ZodEnum", (t, e) => {
    j5.init(t, e), Ut.init(t, e), (t.enum = e.entries), (t.options = Object.values(e.entries));
    const n = new Set(Object.keys(e.entries));
    (t.extract = (r, i) => {
      const o = {};
      for (const s of r)
        if (n.has(s)) o[s] = e.entries[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new Ru({ ...e, checks: [], ...nt(i), entries: o });
    }),
      (t.exclude = (r, i) => {
        const o = { ...e.entries };
        for (const s of r)
          if (n.has(s)) delete o[s];
          else throw new Error(`Key ${s} not found in enum`);
        return new Ru({ ...e, checks: [], ...nt(i), entries: o });
      });
  });
  function be(t, e) {
    const n = Array.isArray(t) ? Object.fromEntries(t.map((r) => [r, r])) : t;
    return new Ru({ type: "enum", entries: n, ...nt(e) });
  }
  const Oz = P("ZodLiteral", (t, e) => {
    M5.init(t, e),
      Ut.init(t, e),
      (t.values = new Set(e.values)),
      Object.defineProperty(t, "value", {
        get() {
          if (e.values.length > 1)
            throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
          return e.values[0];
        },
      });
  });
  function Pg(t, e) {
    return new Oz({ type: "literal", values: Array.isArray(t) ? t : [t], ...nt(e) });
  }
  const Rz = P("ZodTransform", (t, e) => {
    N5.init(t, e),
      Ut.init(t, e),
      (t._zod.parse = (n, r) => {
        n.addIssue = (o) => {
          if (typeof o == "string") n.issues.push(Vi(o, n.value, e));
          else {
            const s = o;
            s.fatal && (s.continue = !1),
              s.code ?? (s.code = "custom"),
              s.input ?? (s.input = n.value),
              s.inst ?? (s.inst = t),
              s.continue ?? (s.continue = !0),
              n.issues.push(Vi(s));
          }
        };
        const i = e.transform(n.value, n);
        return i instanceof Promise ? i.then((o) => ((n.value = o), n)) : ((n.value = i), n);
      });
  });
  function Fz(t) {
    return new Rz({ type: "transform", transform: t });
  }
  const by = P("ZodOptional", (t, e) => {
    L5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType);
  });
  function Ig(t) {
    return new by({ type: "optional", innerType: t });
  }
  const zz = P("ZodNullable", (t, e) => {
    B5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType);
  });
  function jg(t) {
    return new zz({ type: "nullable", innerType: t });
  }
  const Pz = P("ZodDefault", (t, e) => {
    q5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType), (t.removeDefault = t.unwrap);
  });
  function Iz(t, e) {
    return new Pz({
      type: "default",
      innerType: t,
      get defaultValue() {
        return typeof e == "function" ? e() : e;
      },
    });
  }
  const jz = P("ZodPrefault", (t, e) => {
    U5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType);
  });
  function Mz(t, e) {
    return new jz({
      type: "prefault",
      innerType: t,
      get defaultValue() {
        return typeof e == "function" ? e() : e;
      },
    });
  }
  const wy = P("ZodNonOptional", (t, e) => {
    Z5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType);
  });
  function Nz(t, e) {
    return new wy({ type: "nonoptional", innerType: t, ...nt(e) });
  }
  const Lz = P("ZodCatch", (t, e) => {
    V5.init(t, e), Ut.init(t, e), (t.unwrap = () => t._zod.def.innerType), (t.removeCatch = t.unwrap);
  });
  function Bz(t, e) {
    return new Lz({ type: "catch", innerType: t, catchValue: typeof e == "function" ? e : () => e });
  }
  const qz = P("ZodPipe", (t, e) => {
    H5.init(t, e), Ut.init(t, e), (t.in = e.in), (t.out = e.out);
  });
  function Mg(t, e) {
    return new qz({ type: "pipe", in: t, out: e });
  }
  const Uz = P("ZodReadonly", (t, e) => {
    G5.init(t, e), Ut.init(t, e);
  });
  function Zz(t) {
    return new Uz({ type: "readonly", innerType: t });
  }
  const Vz = P("ZodCustom", (t, e) => {
    W5.init(t, e), Ut.init(t, e);
  });
  function Hz(t, e) {
    const n = new pe({ check: "custom", ...nt(e) });
    return (n._zod.check = t), n;
  }
  function Gz(t, e = {}) {
    return LF(Vz, t, e);
  }
  function Wz(t, e) {
    const n = Hz(
      (r) => (
        (r.addIssue = (i) => {
          if (typeof i == "string") r.issues.push(Vi(i, r.value, n._zod.def));
          else {
            const o = i;
            o.fatal && (o.continue = !1),
              o.code ?? (o.code = "custom"),
              o.input ?? (o.input = r.value),
              o.inst ?? (o.inst = n),
              o.continue ?? (o.continue = !n._zod.def.abort),
              r.issues.push(Vi(o));
          }
        }),
        t(r.value, r)
      ),
      e,
    );
    return n;
  }
  const Kz = rn({ start: ze(), end: ze(), text: zt(), gutter: zt().optional() }),
    In = Kz.extend({
      lineNumber: ze(),
      uuid: zt().default(Zs),
      maxLineWeight: ze().default(0),
      flatText: zt(),
      html: zt(),
    }),
    Jz = rn({
      border: zt().optional(),
      background: zt().optional(),
      borderActive: zt().optional(),
      backgroundActive: zt().optional(),
      gutterColor: zt().optional(),
      color: zt().optional(),
    }),
    Xz = qc([Pg("gutter"), Pg("text")]),
    Yz = qc([zt(), ze()]),
    xy = rn({
      id: Yz,
      start: ze(),
      end: ze(),
      label: zt().optional(),
      weight: ze().optional(),
      target: Xz.optional(),
      color: Jz.nullish(),
      textSelection: zt().optional(),
    }),
    Qz = xy.extend({ weight: ze().optional(), isGutter: bz().default(!1) }),
    tP = en((t, e) => (e <= t ? 0 : e - t)),
    eP = en((t, e, n) => (e <= n ? e - t : n - t)),
    Ng = (t, e) => {
      const n = tP(t.start, e.start),
        r = eP(t.start, t.end, e.end);
      return { start: n, end: r };
    },
    nP = (t, e, n) => {
      if (!e) return In.parse(t);
      if (!ta(t, e)) return null;
      if (!e.ignoreLines) return In.parse(t);
      let r = t;
      if (r.start < e.start) {
        const i = Ng(r, e);
        r = n(r, e.start, r.end, i);
      }
      if (r.end > e.end) {
        const i = Ng(r, e);
        r = n(r, r.start, e.end, i);
      }
      return In.parse(r);
    },
    ky = (t, e, n) => t.map((r) => nP(r, e, n)).filter(Boolean),
    rP = en((t) => {
      const e = (t == null
        ? void 0
        : t.split(`
`)) ?? [""];
      let n = 0;
      return e.map((r, i) => {
        const o = n + r.length + 1,
          s = In.parse({ lineNumber: i, start: n, end: o, id: `line-${i}`, text: r, html: `${r}`, flatText: r });
        return (n = o), s;
      });
    }),
    iP = (t, e, n, r) => {
      const i = t.flatText.substring(r.start, r.end);
      return In.parse({ ...t, text: i, flatText: i, html: i, start: e, end: n });
    },
    oP = (t, e) => {
      const n = rP(t);
      return ky(n, e, iP);
    };
  class sP extends Pc {
    constructor() {
      super(...arguments), st(this, "name", "PlainTextAdapter");
    }
    parse(e) {
      return oP(e, this.limit);
    }
  }
  const aP = (t = {}) => Y0(new sP(), t),
    Lg = {};
  function lP(t) {
    let e = Lg[t];
    if (e) return e;
    e = Lg[t] = [];
    for (let n = 0; n < 128; n++) {
      const r = String.fromCharCode(n);
      e.push(r);
    }
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
    }
    return e;
  }
  function Nr(t, e) {
    typeof e != "string" && (e = Nr.defaultChars);
    const n = lP(e);
    return t.replace(/(%[a-f0-9]{2})+/gi, function (r) {
      let i = "";
      for (let o = 0, s = r.length; o < s; o += 3) {
        const a = parseInt(r.slice(o + 1, o + 3), 16);
        if (a < 128) {
          i += n[a];
          continue;
        }
        if ((a & 224) === 192 && o + 3 < s) {
          const l = parseInt(r.slice(o + 4, o + 6), 16);
          if ((l & 192) === 128) {
            const u = ((a << 6) & 1984) | (l & 63);
            u < 128 ? (i += "��") : (i += String.fromCharCode(u)), (o += 3);
            continue;
          }
        }
        if ((a & 240) === 224 && o + 6 < s) {
          const l = parseInt(r.slice(o + 4, o + 6), 16),
            u = parseInt(r.slice(o + 7, o + 9), 16);
          if ((l & 192) === 128 && (u & 192) === 128) {
            const c = ((a << 12) & 61440) | ((l << 6) & 4032) | (u & 63);
            c < 2048 || (c >= 55296 && c <= 57343) ? (i += "���") : (i += String.fromCharCode(c)), (o += 6);
            continue;
          }
        }
        if ((a & 248) === 240 && o + 9 < s) {
          const l = parseInt(r.slice(o + 4, o + 6), 16),
            u = parseInt(r.slice(o + 7, o + 9), 16),
            c = parseInt(r.slice(o + 10, o + 12), 16);
          if ((l & 192) === 128 && (u & 192) === 128 && (c & 192) === 128) {
            let f = ((a << 18) & 1835008) | ((l << 12) & 258048) | ((u << 6) & 4032) | (c & 63);
            f < 65536 || f > 1114111
              ? (i += "����")
              : ((f -= 65536), (i += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023)))),
              (o += 9);
            continue;
          }
        }
        i += "�";
      }
      return i;
    });
  }
  Nr.defaultChars = ";/?:@&=+$,#";
  Nr.componentChars = "";
  const Bg = {};
  function uP(t) {
    let e = Bg[t];
    if (e) return e;
    e = Bg[t] = [];
    for (let n = 0; n < 128; n++) {
      const r = String.fromCharCode(n);
      /^[0-9a-z]$/i.test(r) ? e.push(r) : e.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
    }
    for (let n = 0; n < t.length; n++) e[t.charCodeAt(n)] = t[n];
    return e;
  }
  function co(t, e, n) {
    typeof e != "string" && ((n = e), (e = co.defaultChars)), typeof n > "u" && (n = !0);
    const r = uP(e);
    let i = "";
    for (let o = 0, s = t.length; o < s; o++) {
      const a = t.charCodeAt(o);
      if (n && a === 37 && o + 2 < s && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) {
        (i += t.slice(o, o + 3)), (o += 2);
        continue;
      }
      if (a < 128) {
        i += r[a];
        continue;
      }
      if (a >= 55296 && a <= 57343) {
        if (a >= 55296 && a <= 56319 && o + 1 < s) {
          const l = t.charCodeAt(o + 1);
          if (l >= 56320 && l <= 57343) {
            (i += encodeURIComponent(t[o] + t[o + 1])), o++;
            continue;
          }
        }
        i += "%EF%BF%BD";
        continue;
      }
      i += encodeURIComponent(t[o]);
    }
    return i;
  }
  co.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  co.componentChars = "-_.!~*'()";
  function Uc(t) {
    let e = "";
    return (
      (e += t.protocol || ""),
      (e += t.slashes ? "//" : ""),
      (e += t.auth ? t.auth + "@" : ""),
      t.hostname && t.hostname.indexOf(":") !== -1 ? (e += "[" + t.hostname + "]") : (e += t.hostname || ""),
      (e += t.port ? ":" + t.port : ""),
      (e += t.pathname || ""),
      (e += t.search || ""),
      (e += t.hash || ""),
      e
    );
  }
  function ds() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.pathname = null);
  }
  const cP = /^([a-z0-9.+-]+:)/i,
    fP = /:[0-9]*$/,
    hP = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    pP = [
      "<",
      ">",
      '"',
      "`",
      " ",
      "\r",
      `
`,
      "	",
    ],
    dP = ["{", "}", "|", "\\", "^", "`"].concat(pP),
    gP = ["'"].concat(dP),
    qg = ["%", "/", "?", ";", "#"].concat(gP),
    Ug = ["/", "?", "#"],
    mP = 255,
    Zg = /^[+a-z0-9A-Z_-]{0,63}$/,
    _P = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    Vg = { javascript: !0, "javascript:": !0 },
    Hg = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0,
    };
  function Zc(t, e) {
    if (t && t instanceof ds) return t;
    const n = new ds();
    return n.parse(t, e), n;
  }
  ds.prototype.parse = function (t, e) {
    let n,
      r,
      i,
      o = t;
    if (((o = o.trim()), !e && t.split("#").length === 1)) {
      const u = hP.exec(o);
      if (u) return (this.pathname = u[1]), u[2] && (this.search = u[2]), this;
    }
    let s = cP.exec(o);
    if (
      (s && ((s = s[0]), (n = s.toLowerCase()), (this.protocol = s), (o = o.substr(s.length))),
      (e || s || o.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
        ((i = o.substr(0, 2) === "//"), i && !(s && Vg[s]) && ((o = o.substr(2)), (this.slashes = !0))),
      !Vg[s] && (i || (s && !Hg[s])))
    ) {
      let u = -1;
      for (let d = 0; d < Ug.length; d++) (r = o.indexOf(Ug[d])), r !== -1 && (u === -1 || r < u) && (u = r);
      let c, f;
      u === -1 ? (f = o.lastIndexOf("@")) : (f = o.lastIndexOf("@", u)),
        f !== -1 && ((c = o.slice(0, f)), (o = o.slice(f + 1)), (this.auth = c)),
        (u = -1);
      for (let d = 0; d < qg.length; d++) (r = o.indexOf(qg[d])), r !== -1 && (u === -1 || r < u) && (u = r);
      u === -1 && (u = o.length), o[u - 1] === ":" && u--;
      const h = o.slice(0, u);
      (o = o.slice(u)), this.parseHost(h), (this.hostname = this.hostname || "");
      const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!p) {
        const d = this.hostname.split(/\./);
        for (let m = 0, y = d.length; m < y; m++) {
          const b = d[m];
          if (b && !b.match(Zg)) {
            let _ = "";
            for (let w = 0, v = b.length; w < v; w++) b.charCodeAt(w) > 127 ? (_ += "x") : (_ += b[w]);
            if (!_.match(Zg)) {
              const w = d.slice(0, m),
                v = d.slice(m + 1),
                C = b.match(_P);
              C && (w.push(C[1]), v.unshift(C[2])), v.length && (o = v.join(".") + o), (this.hostname = w.join("."));
              break;
            }
          }
        }
      }
      this.hostname.length > mP && (this.hostname = ""),
        p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    const a = o.indexOf("#");
    a !== -1 && ((this.hash = o.substr(a)), (o = o.slice(0, a)));
    const l = o.indexOf("?");
    return (
      l !== -1 && ((this.search = o.substr(l)), (o = o.slice(0, l))),
      o && (this.pathname = o),
      Hg[n] && this.hostname && !this.pathname && (this.pathname = ""),
      this
    );
  };
  ds.prototype.parseHost = function (t) {
    let e = fP.exec(t);
    e && ((e = e[0]), e !== ":" && (this.port = e.substr(1)), (t = t.substr(0, t.length - e.length))),
      t && (this.hostname = t);
  };
  const vP = Object.freeze(
      Object.defineProperty({ __proto__: null, decode: Nr, encode: co, format: Uc, parse: Zc }, Symbol.toStringTag, {
        value: "Module",
      }),
    ),
    Ay =
      /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    Ey = /[\0-\x1F\x7F-\x9F]/,
    yP =
      /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
    Vc =
      /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
    Cy =
      /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
    Sy = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    bP = Object.freeze(
      Object.defineProperty({ __proto__: null, Any: Ay, Cc: Ey, Cf: yP, P: Vc, S: Cy, Z: Sy }, Symbol.toStringTag, {
        value: "Module",
      }),
    ),
    wP = new Uint16Array(
      'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
        .split("")
        .map((t) => t.charCodeAt(0)),
    ),
    xP = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t) => t.charCodeAt(0)));
  var Pl;
  const kP = new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376],
    ]),
    AP =
      (Pl = String.fromCodePoint) !== null && Pl !== void 0
        ? Pl
        : function (t) {
            let e = "";
            return (
              t > 65535 &&
                ((t -= 65536), (e += String.fromCharCode(((t >>> 10) & 1023) | 55296)), (t = 56320 | (t & 1023))),
              (e += String.fromCharCode(t)),
              e
            );
          };
  function EP(t) {
    var e;
    return (t >= 55296 && t <= 57343) || t > 1114111 ? 65533 : (e = kP.get(t)) !== null && e !== void 0 ? e : t;
  }
  var Jt;
  (function (t) {
    (t[(t.NUM = 35)] = "NUM"),
      (t[(t.SEMI = 59)] = "SEMI"),
      (t[(t.EQUALS = 61)] = "EQUALS"),
      (t[(t.ZERO = 48)] = "ZERO"),
      (t[(t.NINE = 57)] = "NINE"),
      (t[(t.LOWER_A = 97)] = "LOWER_A"),
      (t[(t.LOWER_F = 102)] = "LOWER_F"),
      (t[(t.LOWER_X = 120)] = "LOWER_X"),
      (t[(t.LOWER_Z = 122)] = "LOWER_Z"),
      (t[(t.UPPER_A = 65)] = "UPPER_A"),
      (t[(t.UPPER_F = 70)] = "UPPER_F"),
      (t[(t.UPPER_Z = 90)] = "UPPER_Z");
  })(Jt || (Jt = {}));
  const CP = 32;
  var zn;
  (function (t) {
    (t[(t.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
      (t[(t.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
      (t[(t.JUMP_TABLE = 127)] = "JUMP_TABLE");
  })(zn || (zn = {}));
  function Fu(t) {
    return t >= Jt.ZERO && t <= Jt.NINE;
  }
  function SP(t) {
    return (t >= Jt.UPPER_A && t <= Jt.UPPER_F) || (t >= Jt.LOWER_A && t <= Jt.LOWER_F);
  }
  function TP(t) {
    return (t >= Jt.UPPER_A && t <= Jt.UPPER_Z) || (t >= Jt.LOWER_A && t <= Jt.LOWER_Z) || Fu(t);
  }
  function $P(t) {
    return t === Jt.EQUALS || TP(t);
  }
  var Wt;
  (function (t) {
    (t[(t.EntityStart = 0)] = "EntityStart"),
      (t[(t.NumericStart = 1)] = "NumericStart"),
      (t[(t.NumericDecimal = 2)] = "NumericDecimal"),
      (t[(t.NumericHex = 3)] = "NumericHex"),
      (t[(t.NamedEntity = 4)] = "NamedEntity");
  })(Wt || (Wt = {}));
  var Fn;
  (function (t) {
    (t[(t.Legacy = 0)] = "Legacy"), (t[(t.Strict = 1)] = "Strict"), (t[(t.Attribute = 2)] = "Attribute");
  })(Fn || (Fn = {}));
  class DP {
    constructor(e, n, r) {
      (this.decodeTree = e),
        (this.emitCodePoint = n),
        (this.errors = r),
        (this.state = Wt.EntityStart),
        (this.consumed = 1),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.decodeMode = Fn.Strict);
    }
    startEntity(e) {
      (this.decodeMode = e),
        (this.state = Wt.EntityStart),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.consumed = 1);
    }
    write(e, n) {
      switch (this.state) {
        case Wt.EntityStart:
          return e.charCodeAt(n) === Jt.NUM
            ? ((this.state = Wt.NumericStart), (this.consumed += 1), this.stateNumericStart(e, n + 1))
            : ((this.state = Wt.NamedEntity), this.stateNamedEntity(e, n));
        case Wt.NumericStart:
          return this.stateNumericStart(e, n);
        case Wt.NumericDecimal:
          return this.stateNumericDecimal(e, n);
        case Wt.NumericHex:
          return this.stateNumericHex(e, n);
        case Wt.NamedEntity:
          return this.stateNamedEntity(e, n);
      }
    }
    stateNumericStart(e, n) {
      return n >= e.length
        ? -1
        : (e.charCodeAt(n) | CP) === Jt.LOWER_X
          ? ((this.state = Wt.NumericHex), (this.consumed += 1), this.stateNumericHex(e, n + 1))
          : ((this.state = Wt.NumericDecimal), this.stateNumericDecimal(e, n));
    }
    addToNumericResult(e, n, r, i) {
      if (n !== r) {
        const o = r - n;
        (this.result = this.result * Math.pow(i, o) + parseInt(e.substr(n, o), i)), (this.consumed += o);
      }
    }
    stateNumericHex(e, n) {
      const r = n;
      for (; n < e.length; ) {
        const i = e.charCodeAt(n);
        if (Fu(i) || SP(i)) n += 1;
        else return this.addToNumericResult(e, r, n, 16), this.emitNumericEntity(i, 3);
      }
      return this.addToNumericResult(e, r, n, 16), -1;
    }
    stateNumericDecimal(e, n) {
      const r = n;
      for (; n < e.length; ) {
        const i = e.charCodeAt(n);
        if (Fu(i)) n += 1;
        else return this.addToNumericResult(e, r, n, 10), this.emitNumericEntity(i, 2);
      }
      return this.addToNumericResult(e, r, n, 10), -1;
    }
    emitNumericEntity(e, n) {
      var r;
      if (this.consumed <= n)
        return (
          (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0
        );
      if (e === Jt.SEMI) this.consumed += 1;
      else if (this.decodeMode === Fn.Strict) return 0;
      return (
        this.emitCodePoint(EP(this.result), this.consumed),
        this.errors &&
          (e !== Jt.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
          this.errors.validateNumericCharacterReference(this.result)),
        this.consumed
      );
    }
    stateNamedEntity(e, n) {
      const { decodeTree: r } = this;
      let i = r[this.treeIndex],
        o = (i & zn.VALUE_LENGTH) >> 14;
      for (; n < e.length; n++, this.excess++) {
        const s = e.charCodeAt(n);
        if (((this.treeIndex = OP(r, i, this.treeIndex + Math.max(1, o), s)), this.treeIndex < 0))
          return this.result === 0 || (this.decodeMode === Fn.Attribute && (o === 0 || $P(s)))
            ? 0
            : this.emitNotTerminatedNamedEntity();
        if (((i = r[this.treeIndex]), (o = (i & zn.VALUE_LENGTH) >> 14), o !== 0)) {
          if (s === Jt.SEMI) return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
          this.decodeMode !== Fn.Strict &&
            ((this.result = this.treeIndex), (this.consumed += this.excess), (this.excess = 0));
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var e;
      const { result: n, decodeTree: r } = this,
        i = (r[n] & zn.VALUE_LENGTH) >> 14;
      return (
        this.emitNamedEntityData(n, i, this.consumed),
        (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(),
        this.consumed
      );
    }
    emitNamedEntityData(e, n, r) {
      const { decodeTree: i } = this;
      return (
        this.emitCodePoint(n === 1 ? i[e] & ~zn.VALUE_LENGTH : i[e + 1], r),
        n === 3 && this.emitCodePoint(i[e + 2], r),
        r
      );
    }
    end() {
      var e;
      switch (this.state) {
        case Wt.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== Fn.Attribute || this.result === this.treeIndex)
            ? this.emitNotTerminatedNamedEntity()
            : 0;
        case Wt.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case Wt.NumericHex:
          return this.emitNumericEntity(0, 3);
        case Wt.NumericStart:
          return (
            (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0
          );
        case Wt.EntityStart:
          return 0;
      }
    }
  }
  function Ty(t) {
    let e = "";
    const n = new DP(t, (r) => (e += AP(r)));
    return function (r, i) {
      let o = 0,
        s = 0;
      for (; (s = r.indexOf("&", s)) >= 0; ) {
        (e += r.slice(o, s)), n.startEntity(i);
        const l = n.write(r, s + 1);
        if (l < 0) {
          o = s + n.end();
          break;
        }
        (o = s + l), (s = l === 0 ? o + 1 : o);
      }
      const a = e + r.slice(o);
      return (e = ""), a;
    };
  }
  function OP(t, e, n, r) {
    const i = (e & zn.BRANCH_LENGTH) >> 7,
      o = e & zn.JUMP_TABLE;
    if (i === 0) return o !== 0 && r === o ? n : -1;
    if (o) {
      const l = r - o;
      return l < 0 || l >= i ? -1 : t[n + l] - 1;
    }
    let s = n,
      a = s + i - 1;
    for (; s <= a; ) {
      const l = (s + a) >>> 1,
        u = t[l];
      if (u < r) s = l + 1;
      else if (u > r) a = l - 1;
      else return t[l + i];
    }
    return -1;
  }
  const RP = Ty(wP);
  Ty(xP);
  function $y(t, e = Fn.Legacy) {
    return RP(t, e);
  }
  function FP(t) {
    return Object.prototype.toString.call(t);
  }
  function Hc(t) {
    return FP(t) === "[object String]";
  }
  const zP = Object.prototype.hasOwnProperty;
  function PP(t, e) {
    return zP.call(t, e);
  }
  function sa(t) {
    return (
      Array.prototype.slice.call(arguments, 1).forEach(function (e) {
        if (e) {
          if (typeof e != "object") throw new TypeError(e + "must be object");
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          });
        }
      }),
      t
    );
  }
  function Dy(t, e, n) {
    return [].concat(t.slice(0, e), n, t.slice(e + 1));
  }
  function Gc(t) {
    return !(
      (t >= 55296 && t <= 57343) ||
      (t >= 64976 && t <= 65007) ||
      (t & 65535) === 65535 ||
      (t & 65535) === 65534 ||
      (t >= 0 && t <= 8) ||
      t === 11 ||
      (t >= 14 && t <= 31) ||
      (t >= 127 && t <= 159) ||
      t > 1114111
    );
  }
  function gs(t) {
    if (t > 65535) {
      t -= 65536;
      const e = 55296 + (t >> 10),
        n = 56320 + (t & 1023);
      return String.fromCharCode(e, n);
    }
    return String.fromCharCode(t);
  }
  const Oy = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    IP = /&([a-z#][a-z0-9]{1,31});/gi,
    jP = new RegExp(Oy.source + "|" + IP.source, "gi"),
    MP = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
  function NP(t, e) {
    if (e.charCodeAt(0) === 35 && MP.test(e)) {
      const r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Gc(r) ? gs(r) : t;
    }
    const n = $y(t);
    return n !== t ? n : t;
  }
  function LP(t) {
    return t.indexOf("\\") < 0 ? t : t.replace(Oy, "$1");
  }
  function Lr(t) {
    return t.indexOf("\\") < 0 && t.indexOf("&") < 0
      ? t
      : t.replace(jP, function (e, n, r) {
          return n || NP(e, r);
        });
  }
  const BP = /[&<>"]/,
    qP = /[&<>"]/g,
    UP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function ZP(t) {
    return UP[t];
  }
  function Ln(t) {
    return BP.test(t) ? t.replace(qP, ZP) : t;
  }
  const VP = /[.?*+^$[\]\\(){}|-]/g;
  function HP(t) {
    return t.replace(VP, "\\$&");
  }
  function Dt(t) {
    switch (t) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function Hi(t) {
    if (t >= 8192 && t <= 8202) return !0;
    switch (t) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  function Gi(t) {
    return Vc.test(t) || Cy.test(t);
  }
  function Wi(t) {
    switch (t) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function aa(t) {
    return (
      (t = t.trim().replace(/\s+/g, " ")),
      "ẞ".toLowerCase() === "Ṿ" && (t = t.replace(/ẞ/g, "ß")),
      t.toLowerCase().toUpperCase()
    );
  }
  const GP = { mdurl: vP, ucmicro: bP },
    WP = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          arrayReplaceAt: Dy,
          assign: sa,
          escapeHtml: Ln,
          escapeRE: HP,
          fromCodePoint: gs,
          has: PP,
          isMdAsciiPunct: Wi,
          isPunctChar: Gi,
          isSpace: Dt,
          isString: Hc,
          isValidEntityCode: Gc,
          isWhiteSpace: Hi,
          lib: GP,
          normalizeReference: aa,
          unescapeAll: Lr,
          unescapeMd: LP,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    );
  function KP(t, e, n) {
    let r, i, o, s;
    const a = t.posMax,
      l = t.pos;
    for (t.pos = e + 1, r = 1; t.pos < a; ) {
      if (((o = t.src.charCodeAt(t.pos)), o === 93 && (r--, r === 0))) {
        i = !0;
        break;
      }
      if (((s = t.pos), t.md.inline.skipToken(t), o === 91)) {
        if (s === t.pos - 1) r++;
        else if (n) return (t.pos = l), -1;
      }
    }
    let u = -1;
    return i && (u = t.pos), (t.pos = l), u;
  }
  function JP(t, e, n) {
    let r,
      i = e;
    const o = { ok: !1, pos: 0, str: "" };
    if (t.charCodeAt(i) === 60) {
      for (i++; i < n; ) {
        if (((r = t.charCodeAt(i)), r === 10 || r === 60)) return o;
        if (r === 62) return (o.pos = i + 1), (o.str = Lr(t.slice(e + 1, i))), (o.ok = !0), o;
        if (r === 92 && i + 1 < n) {
          i += 2;
          continue;
        }
        i++;
      }
      return o;
    }
    let s = 0;
    for (; i < n && ((r = t.charCodeAt(i)), !(r === 32 || r < 32 || r === 127)); ) {
      if (r === 92 && i + 1 < n) {
        if (t.charCodeAt(i + 1) === 32) break;
        i += 2;
        continue;
      }
      if (r === 40 && (s++, s > 32)) return o;
      if (r === 41) {
        if (s === 0) break;
        s--;
      }
      i++;
    }
    return e === i || s !== 0 || ((o.str = Lr(t.slice(e, i))), (o.pos = i), (o.ok = !0)), o;
  }
  function XP(t, e, n, r) {
    let i,
      o = e;
    const s = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
    if (r) (s.str = r.str), (s.marker = r.marker);
    else {
      if (o >= n) return s;
      let a = t.charCodeAt(o);
      if (a !== 34 && a !== 39 && a !== 40) return s;
      e++, o++, a === 40 && (a = 41), (s.marker = a);
    }
    for (; o < n; ) {
      if (((i = t.charCodeAt(o)), i === s.marker)) return (s.pos = o + 1), (s.str += Lr(t.slice(e, o))), (s.ok = !0), s;
      if (i === 40 && s.marker === 41) return s;
      i === 92 && o + 1 < n && o++, o++;
    }
    return (s.can_continue = !0), (s.str += Lr(t.slice(e, o))), s;
  }
  const YP = Object.freeze(
      Object.defineProperty(
        { __proto__: null, parseLinkDestination: JP, parseLinkLabel: KP, parseLinkTitle: XP },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    on = {};
  on.code_inline = function (t, e, n, r, i) {
    const o = t[e];
    return "<code" + i.renderAttrs(o) + ">" + Ln(o.content) + "</code>";
  };
  on.code_block = function (t, e, n, r, i) {
    const o = t[e];
    return (
      "<pre" +
      i.renderAttrs(o) +
      "><code>" +
      Ln(t[e].content) +
      `</code></pre>
`
    );
  };
  on.fence = function (t, e, n, r, i) {
    const o = t[e],
      s = o.info ? Lr(o.info).trim() : "";
    let a = "",
      l = "";
    if (s) {
      const c = s.split(/(\s+)/g);
      (a = c[0]), (l = c.slice(2).join(""));
    }
    let u;
    if (
      (n.highlight ? (u = n.highlight(o.content, a, l) || Ln(o.content)) : (u = Ln(o.content)), u.indexOf("<pre") === 0)
    )
      return (
        u +
        `
`
      );
    if (s) {
      const c = o.attrIndex("class"),
        f = o.attrs ? o.attrs.slice() : [];
      c < 0 ? f.push(["class", n.langPrefix + a]) : ((f[c] = f[c].slice()), (f[c][1] += " " + n.langPrefix + a));
      const h = { attrs: f };
      return `<pre><code${i.renderAttrs(h)}>${u}</code></pre>
`;
    }
    return `<pre><code${i.renderAttrs(o)}>${u}</code></pre>
`;
  };
  on.image = function (t, e, n, r, i) {
    const o = t[e];
    return (o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r)), i.renderToken(t, e, n);
  };
  on.hardbreak = function (t, e, n) {
    return n.xhtmlOut
      ? `<br />
`
      : `<br>
`;
  };
  on.softbreak = function (t, e, n) {
    return n.breaks
      ? n.xhtmlOut
        ? `<br />
`
        : `<br>
`
      : `
`;
  };
  on.text = function (t, e) {
    return Ln(t[e].content);
  };
  on.html_block = function (t, e) {
    return t[e].content;
  };
  on.html_inline = function (t, e) {
    return t[e].content;
  };
  function Vr() {
    this.rules = sa({}, on);
  }
  Vr.prototype.renderAttrs = function (t) {
    let e, n, r;
    if (!t.attrs) return "";
    for (r = "", e = 0, n = t.attrs.length; e < n; e++) r += " " + Ln(t.attrs[e][0]) + '="' + Ln(t.attrs[e][1]) + '"';
    return r;
  };
  Vr.prototype.renderToken = function (t, e, n) {
    const r = t[e];
    let i = "";
    if (r.hidden) return "";
    r.block &&
      r.nesting !== -1 &&
      e &&
      t[e - 1].hidden &&
      (i += `
`),
      (i += (r.nesting === -1 ? "</" : "<") + r.tag),
      (i += this.renderAttrs(r)),
      r.nesting === 0 && n.xhtmlOut && (i += " /");
    let o = !1;
    if (r.block && ((o = !0), r.nesting === 1 && e + 1 < t.length)) {
      const s = t[e + 1];
      (s.type === "inline" || s.hidden || (s.nesting === -1 && s.tag === r.tag)) && (o = !1);
    }
    return (
      (i += o
        ? `>
`
        : ">"),
      i
    );
  };
  Vr.prototype.renderInline = function (t, e, n) {
    let r = "";
    const i = this.rules;
    for (let o = 0, s = t.length; o < s; o++) {
      const a = t[o].type;
      typeof i[a] < "u" ? (r += i[a](t, o, e, n, this)) : (r += this.renderToken(t, o, e));
    }
    return r;
  };
  Vr.prototype.renderInlineAsText = function (t, e, n) {
    let r = "";
    for (let i = 0, o = t.length; i < o; i++)
      switch (t[i].type) {
        case "text":
          r += t[i].content;
          break;
        case "image":
          r += this.renderInlineAsText(t[i].children, e, n);
          break;
        case "html_inline":
        case "html_block":
          r += t[i].content;
          break;
        case "softbreak":
        case "hardbreak":
          r += `
`;
          break;
      }
    return r;
  };
  Vr.prototype.render = function (t, e, n) {
    let r = "";
    const i = this.rules;
    for (let o = 0, s = t.length; o < s; o++) {
      const a = t[o].type;
      a === "inline"
        ? (r += this.renderInline(t[o].children, e, n))
        : typeof i[a] < "u"
          ? (r += i[a](t, o, e, n, this))
          : (r += this.renderToken(t, o, e, n));
    }
    return r;
  };
  function he() {
    (this.__rules__ = []), (this.__cache__ = null);
  }
  he.prototype.__find__ = function (t) {
    for (let e = 0; e < this.__rules__.length; e++) if (this.__rules__[e].name === t) return e;
    return -1;
  };
  he.prototype.__compile__ = function () {
    const t = this,
      e = [""];
    t.__rules__.forEach(function (n) {
      n.enabled &&
        n.alt.forEach(function (r) {
          e.indexOf(r) < 0 && e.push(r);
        });
    }),
      (t.__cache__ = {}),
      e.forEach(function (n) {
        (t.__cache__[n] = []),
          t.__rules__.forEach(function (r) {
            r.enabled && ((n && r.alt.indexOf(n) < 0) || t.__cache__[n].push(r.fn));
          });
      });
  };
  he.prototype.at = function (t, e, n) {
    const r = this.__find__(t),
      i = n || {};
    if (r === -1) throw new Error("Parser rule not found: " + t);
    (this.__rules__[r].fn = e), (this.__rules__[r].alt = i.alt || []), (this.__cache__ = null);
  };
  he.prototype.before = function (t, e, n, r) {
    const i = this.__find__(t),
      o = r || {};
    if (i === -1) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(i, 0, { name: e, enabled: !0, fn: n, alt: o.alt || [] }), (this.__cache__ = null);
  };
  he.prototype.after = function (t, e, n, r) {
    const i = this.__find__(t),
      o = r || {};
    if (i === -1) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(i + 1, 0, { name: e, enabled: !0, fn: n, alt: o.alt || [] }), (this.__cache__ = null);
  };
  he.prototype.push = function (t, e, n) {
    const r = n || {};
    this.__rules__.push({ name: t, enabled: !0, fn: e, alt: r.alt || [] }), (this.__cache__ = null);
  };
  he.prototype.enable = function (t, e) {
    Array.isArray(t) || (t = [t]);
    const n = [];
    return (
      t.forEach(function (r) {
        const i = this.__find__(r);
        if (i < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + r);
        }
        (this.__rules__[i].enabled = !0), n.push(r);
      }, this),
      (this.__cache__ = null),
      n
    );
  };
  he.prototype.enableOnly = function (t, e) {
    Array.isArray(t) || (t = [t]),
      this.__rules__.forEach(function (n) {
        n.enabled = !1;
      }),
      this.enable(t, e);
  };
  he.prototype.disable = function (t, e) {
    Array.isArray(t) || (t = [t]);
    const n = [];
    return (
      t.forEach(function (r) {
        const i = this.__find__(r);
        if (i < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + r);
        }
        (this.__rules__[i].enabled = !1), n.push(r);
      }, this),
      (this.__cache__ = null),
      n
    );
  };
  he.prototype.getRules = function (t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  };
  function Me(t, e, n) {
    (this.type = t),
      (this.tag = e),
      (this.attrs = null),
      (this.map = null),
      (this.nesting = n),
      (this.level = 0),
      (this.children = null),
      (this.content = ""),
      (this.markup = ""),
      (this.info = ""),
      (this.meta = null),
      (this.block = !1),
      (this.hidden = !1);
  }
  Me.prototype.attrIndex = function (t) {
    if (!this.attrs) return -1;
    const e = this.attrs;
    for (let n = 0, r = e.length; n < r; n++) if (e[n][0] === t) return n;
    return -1;
  };
  Me.prototype.attrPush = function (t) {
    this.attrs ? this.attrs.push(t) : (this.attrs = [t]);
  };
  Me.prototype.attrSet = function (t, e) {
    const n = this.attrIndex(t),
      r = [t, e];
    n < 0 ? this.attrPush(r) : (this.attrs[n] = r);
  };
  Me.prototype.attrGet = function (t) {
    const e = this.attrIndex(t);
    let n = null;
    return e >= 0 && (n = this.attrs[e][1]), n;
  };
  Me.prototype.attrJoin = function (t, e) {
    const n = this.attrIndex(t);
    n < 0 ? this.attrPush([t, e]) : (this.attrs[n][1] = this.attrs[n][1] + " " + e);
  };
  function Ry(t, e, n) {
    (this.src = t), (this.env = n), (this.tokens = []), (this.inlineMode = !1), (this.md = e);
  }
  Ry.prototype.Token = Me;
  const QP = /\r\n?|\n/g,
    tI = /\0/g;
  function eI(t) {
    let e;
    (e = t.src.replace(
      QP,
      `
`,
    )),
      (e = e.replace(tI, "�")),
      (t.src = e);
  }
  function nI(t) {
    let e;
    t.inlineMode
      ? ((e = new t.Token("inline", "", 0)), (e.content = t.src), (e.map = [0, 1]), (e.children = []), t.tokens.push(e))
      : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }
  function rI(t) {
    const e = t.tokens;
    for (let n = 0, r = e.length; n < r; n++) {
      const i = e[n];
      i.type === "inline" && t.md.inline.parse(i.content, t.md, t.env, i.children);
    }
  }
  function iI(t) {
    return /^<a[>\s]/i.test(t);
  }
  function oI(t) {
    return /^<\/a\s*>/i.test(t);
  }
  function sI(t) {
    const e = t.tokens;
    if (t.md.options.linkify)
      for (let n = 0, r = e.length; n < r; n++) {
        if (e[n].type !== "inline" || !t.md.linkify.pretest(e[n].content)) continue;
        let i = e[n].children,
          o = 0;
        for (let s = i.length - 1; s >= 0; s--) {
          const a = i[s];
          if (a.type === "link_close") {
            for (s--; i[s].level !== a.level && i[s].type !== "link_open"; ) s--;
            continue;
          }
          if (
            (a.type === "html_inline" && (iI(a.content) && o > 0 && o--, oI(a.content) && o++),
            !(o > 0) && a.type === "text" && t.md.linkify.test(a.content))
          ) {
            const l = a.content;
            let u = t.md.linkify.match(l);
            const c = [];
            let f = a.level,
              h = 0;
            u.length > 0 && u[0].index === 0 && s > 0 && i[s - 1].type === "text_special" && (u = u.slice(1));
            for (let p = 0; p < u.length; p++) {
              const d = u[p].url,
                m = t.md.normalizeLink(d);
              if (!t.md.validateLink(m)) continue;
              let y = u[p].text;
              u[p].schema
                ? u[p].schema === "mailto:" && !/^mailto:/i.test(y)
                  ? (y = t.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, ""))
                  : (y = t.md.normalizeLinkText(y))
                : (y = t.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, ""));
              const b = u[p].index;
              if (b > h) {
                const C = new t.Token("text", "", 0);
                (C.content = l.slice(h, b)), (C.level = f), c.push(C);
              }
              const _ = new t.Token("link_open", "a", 1);
              (_.attrs = [["href", m]]), (_.level = f++), (_.markup = "linkify"), (_.info = "auto"), c.push(_);
              const w = new t.Token("text", "", 0);
              (w.content = y), (w.level = f), c.push(w);
              const v = new t.Token("link_close", "a", -1);
              (v.level = --f), (v.markup = "linkify"), (v.info = "auto"), c.push(v), (h = u[p].lastIndex);
            }
            if (h < l.length) {
              const p = new t.Token("text", "", 0);
              (p.content = l.slice(h)), (p.level = f), c.push(p);
            }
            e[n].children = i = Dy(i, s, c);
          }
        }
      }
  }
  const Fy = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    aI = /\((c|tm|r)\)/i,
    lI = /\((c|tm|r)\)/gi,
    uI = { c: "©", r: "®", tm: "™" };
  function cI(t, e) {
    return uI[e.toLowerCase()];
  }
  function fI(t) {
    let e = 0;
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      r.type === "text" && !e && (r.content = r.content.replace(lI, cI)),
        r.type === "link_open" && r.info === "auto" && e--,
        r.type === "link_close" && r.info === "auto" && e++;
    }
  }
  function hI(t) {
    let e = 0;
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      r.type === "text" &&
        !e &&
        Fy.test(r.content) &&
        (r.content = r.content
          .replace(/\+-/g, "±")
          .replace(/\.{2,}/g, "…")
          .replace(/([?!])…/g, "$1..")
          .replace(/([?!]){4,}/g, "$1$1$1")
          .replace(/,{2,}/g, ",")
          .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—")
          .replace(/(^|\s)--(?=\s|$)/gm, "$1–")
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")),
        r.type === "link_open" && r.info === "auto" && e--,
        r.type === "link_close" && r.info === "auto" && e++;
    }
  }
  function pI(t) {
    let e;
    if (t.md.options.typographer)
      for (e = t.tokens.length - 1; e >= 0; e--)
        t.tokens[e].type === "inline" &&
          (aI.test(t.tokens[e].content) && fI(t.tokens[e].children),
          Fy.test(t.tokens[e].content) && hI(t.tokens[e].children));
  }
  const dI = /['"]/,
    Gg = /['"]/g,
    Wg = "’";
  function Oo(t, e, n) {
    return t.slice(0, e) + n + t.slice(e + 1);
  }
  function gI(t, e) {
    let n;
    const r = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i],
        s = t[i].level;
      for (n = r.length - 1; n >= 0 && !(r[n].level <= s); n--);
      if (((r.length = n + 1), o.type !== "text")) continue;
      let a = o.content,
        l = 0,
        u = a.length;
      t: for (; l < u; ) {
        Gg.lastIndex = l;
        const c = Gg.exec(a);
        if (!c) break;
        let f = !0,
          h = !0;
        l = c.index + 1;
        const p = c[0] === "'";
        let d = 32;
        if (c.index - 1 >= 0) d = a.charCodeAt(c.index - 1);
        else
          for (n = i - 1; n >= 0 && !(t[n].type === "softbreak" || t[n].type === "hardbreak"); n--)
            if (t[n].content) {
              d = t[n].content.charCodeAt(t[n].content.length - 1);
              break;
            }
        let m = 32;
        if (l < u) m = a.charCodeAt(l);
        else
          for (n = i + 1; n < t.length && !(t[n].type === "softbreak" || t[n].type === "hardbreak"); n++)
            if (t[n].content) {
              m = t[n].content.charCodeAt(0);
              break;
            }
        const y = Wi(d) || Gi(String.fromCharCode(d)),
          b = Wi(m) || Gi(String.fromCharCode(m)),
          _ = Hi(d),
          w = Hi(m);
        if (
          (w ? (f = !1) : b && (_ || y || (f = !1)),
          _ ? (h = !1) : y && (w || b || (h = !1)),
          m === 34 && c[0] === '"' && d >= 48 && d <= 57 && (h = f = !1),
          f && h && ((f = y), (h = b)),
          !f && !h)
        ) {
          p && (o.content = Oo(o.content, c.index, Wg));
          continue;
        }
        if (h)
          for (n = r.length - 1; n >= 0; n--) {
            let v = r[n];
            if (r[n].level < s) break;
            if (v.single === p && r[n].level === s) {
              v = r[n];
              let C, R;
              p
                ? ((C = e.md.options.quotes[2]), (R = e.md.options.quotes[3]))
                : ((C = e.md.options.quotes[0]), (R = e.md.options.quotes[1])),
                (o.content = Oo(o.content, c.index, R)),
                (t[v.token].content = Oo(t[v.token].content, v.pos, C)),
                (l += R.length - 1),
                v.token === i && (l += C.length - 1),
                (a = o.content),
                (u = a.length),
                (r.length = n);
              continue t;
            }
          }
        f
          ? r.push({ token: i, pos: c.index, single: p, level: s })
          : h && p && (o.content = Oo(o.content, c.index, Wg));
      }
    }
  }
  function mI(t) {
    if (t.md.options.typographer)
      for (let e = t.tokens.length - 1; e >= 0; e--)
        t.tokens[e].type !== "inline" || !dI.test(t.tokens[e].content) || gI(t.tokens[e].children, t);
  }
  function _I(t) {
    let e, n;
    const r = t.tokens,
      i = r.length;
    for (let o = 0; o < i; o++) {
      if (r[o].type !== "inline") continue;
      const s = r[o].children,
        a = s.length;
      for (e = 0; e < a; e++) s[e].type === "text_special" && (s[e].type = "text");
      for (e = n = 0; e < a; e++)
        s[e].type === "text" && e + 1 < a && s[e + 1].type === "text"
          ? (s[e + 1].content = s[e].content + s[e + 1].content)
          : (e !== n && (s[n] = s[e]), n++);
      e !== n && (s.length = n);
    }
  }
  const Il = [
    ["normalize", eI],
    ["block", nI],
    ["inline", rI],
    ["linkify", sI],
    ["replacements", pI],
    ["smartquotes", mI],
    ["text_join", _I],
  ];
  function Wc() {
    this.ruler = new he();
    for (let t = 0; t < Il.length; t++) this.ruler.push(Il[t][0], Il[t][1]);
  }
  Wc.prototype.process = function (t) {
    const e = this.ruler.getRules("");
    for (let n = 0, r = e.length; n < r; n++) e[n](t);
  };
  Wc.prototype.State = Ry;
  function sn(t, e, n, r) {
    (this.src = t),
      (this.md = e),
      (this.env = n),
      (this.tokens = r),
      (this.bMarks = []),
      (this.eMarks = []),
      (this.tShift = []),
      (this.sCount = []),
      (this.bsCount = []),
      (this.blkIndent = 0),
      (this.line = 0),
      (this.lineMax = 0),
      (this.tight = !1),
      (this.ddIndent = -1),
      (this.listIndent = -1),
      (this.parentType = "root"),
      (this.level = 0);
    const i = this.src;
    for (let o = 0, s = 0, a = 0, l = 0, u = i.length, c = !1; s < u; s++) {
      const f = i.charCodeAt(s);
      if (!c)
        if (Dt(f)) {
          a++, f === 9 ? (l += 4 - (l % 4)) : l++;
          continue;
        } else c = !0;
      (f === 10 || s === u - 1) &&
        (f !== 10 && s++,
        this.bMarks.push(o),
        this.eMarks.push(s),
        this.tShift.push(a),
        this.sCount.push(l),
        this.bsCount.push(0),
        (c = !1),
        (a = 0),
        (l = 0),
        (o = s + 1));
    }
    this.bMarks.push(i.length),
      this.eMarks.push(i.length),
      this.tShift.push(0),
      this.sCount.push(0),
      this.bsCount.push(0),
      (this.lineMax = this.bMarks.length - 1);
  }
  sn.prototype.push = function (t, e, n) {
    const r = new Me(t, e, n);
    return (r.block = !0), n < 0 && this.level--, (r.level = this.level), n > 0 && this.level++, this.tokens.push(r), r;
  };
  sn.prototype.isEmpty = function (t) {
    return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
  };
  sn.prototype.skipEmptyLines = function (t) {
    for (let e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
    return t;
  };
  sn.prototype.skipSpaces = function (t) {
    for (let e = this.src.length; t < e; t++) {
      const n = this.src.charCodeAt(t);
      if (!Dt(n)) break;
    }
    return t;
  };
  sn.prototype.skipSpacesBack = function (t, e) {
    if (t <= e) return t;
    for (; t > e; ) if (!Dt(this.src.charCodeAt(--t))) return t + 1;
    return t;
  };
  sn.prototype.skipChars = function (t, e) {
    for (let n = this.src.length; t < n && this.src.charCodeAt(t) === e; t++);
    return t;
  };
  sn.prototype.skipCharsBack = function (t, e, n) {
    if (t <= n) return t;
    for (; t > n; ) if (e !== this.src.charCodeAt(--t)) return t + 1;
    return t;
  };
  sn.prototype.getLines = function (t, e, n, r) {
    if (t >= e) return "";
    const i = new Array(e - t);
    for (let o = 0, s = t; s < e; s++, o++) {
      let a = 0;
      const l = this.bMarks[s];
      let u = l,
        c;
      for (s + 1 < e || r ? (c = this.eMarks[s] + 1) : (c = this.eMarks[s]); u < c && a < n; ) {
        const f = this.src.charCodeAt(u);
        if (Dt(f)) f === 9 ? (a += 4 - ((a + this.bsCount[s]) % 4)) : a++;
        else if (u - l < this.tShift[s]) a++;
        else break;
        u++;
      }
      a > n ? (i[o] = new Array(a - n + 1).join(" ") + this.src.slice(u, c)) : (i[o] = this.src.slice(u, c));
    }
    return i.join("");
  };
  sn.prototype.Token = Me;
  const vI = 65536;
  function jl(t, e) {
    const n = t.bMarks[e] + t.tShift[e],
      r = t.eMarks[e];
    return t.src.slice(n, r);
  }
  function Kg(t) {
    const e = [],
      n = t.length;
    let r = 0,
      i = t.charCodeAt(r),
      o = !1,
      s = 0,
      a = "";
    for (; r < n; )
      i === 124 &&
        (o ? ((a += t.substring(s, r - 1)), (s = r)) : (e.push(a + t.substring(s, r)), (a = ""), (s = r + 1))),
        (o = i === 92),
        r++,
        (i = t.charCodeAt(r));
    return e.push(a + t.substring(s)), e;
  }
  function yI(t, e, n, r) {
    if (e + 2 > n) return !1;
    let i = e + 1;
    if (t.sCount[i] < t.blkIndent || t.sCount[i] - t.blkIndent >= 4) return !1;
    let o = t.bMarks[i] + t.tShift[i];
    if (o >= t.eMarks[i]) return !1;
    const s = t.src.charCodeAt(o++);
    if ((s !== 124 && s !== 45 && s !== 58) || o >= t.eMarks[i]) return !1;
    const a = t.src.charCodeAt(o++);
    if ((a !== 124 && a !== 45 && a !== 58 && !Dt(a)) || (s === 45 && Dt(a))) return !1;
    for (; o < t.eMarks[i]; ) {
      const v = t.src.charCodeAt(o);
      if (v !== 124 && v !== 45 && v !== 58 && !Dt(v)) return !1;
      o++;
    }
    let l = jl(t, e + 1),
      u = l.split("|");
    const c = [];
    for (let v = 0; v < u.length; v++) {
      const C = u[v].trim();
      if (!C) {
        if (v === 0 || v === u.length - 1) continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(C)) return !1;
      C.charCodeAt(C.length - 1) === 58
        ? c.push(C.charCodeAt(0) === 58 ? "center" : "right")
        : C.charCodeAt(0) === 58
          ? c.push("left")
          : c.push("");
    }
    if (((l = jl(t, e).trim()), l.indexOf("|") === -1 || t.sCount[e] - t.blkIndent >= 4)) return !1;
    (u = Kg(l)), u.length && u[0] === "" && u.shift(), u.length && u[u.length - 1] === "" && u.pop();
    const f = u.length;
    if (f === 0 || f !== c.length) return !1;
    if (r) return !0;
    const h = t.parentType;
    t.parentType = "table";
    const p = t.md.block.ruler.getRules("blockquote"),
      d = t.push("table_open", "table", 1),
      m = [e, 0];
    d.map = m;
    const y = t.push("thead_open", "thead", 1);
    y.map = [e, e + 1];
    const b = t.push("tr_open", "tr", 1);
    b.map = [e, e + 1];
    for (let v = 0; v < u.length; v++) {
      const C = t.push("th_open", "th", 1);
      c[v] && (C.attrs = [["style", "text-align:" + c[v]]]);
      const R = t.push("inline", "", 0);
      (R.content = u[v].trim()), (R.children = []), t.push("th_close", "th", -1);
    }
    t.push("tr_close", "tr", -1), t.push("thead_close", "thead", -1);
    let _,
      w = 0;
    for (i = e + 2; i < n && !(t.sCount[i] < t.blkIndent); i++) {
      let v = !1;
      for (let R = 0, z = p.length; R < z; R++)
        if (p[R](t, i, n, !0)) {
          v = !0;
          break;
        }
      if (
        v ||
        ((l = jl(t, i).trim()), !l) ||
        t.sCount[i] - t.blkIndent >= 4 ||
        ((u = Kg(l)),
        u.length && u[0] === "" && u.shift(),
        u.length && u[u.length - 1] === "" && u.pop(),
        (w += f - u.length),
        w > vI)
      )
        break;
      if (i === e + 2) {
        const R = t.push("tbody_open", "tbody", 1);
        R.map = _ = [e + 2, 0];
      }
      const C = t.push("tr_open", "tr", 1);
      C.map = [i, i + 1];
      for (let R = 0; R < f; R++) {
        const z = t.push("td_open", "td", 1);
        c[R] && (z.attrs = [["style", "text-align:" + c[R]]]);
        const B = t.push("inline", "", 0);
        (B.content = u[R] ? u[R].trim() : ""), (B.children = []), t.push("td_close", "td", -1);
      }
      t.push("tr_close", "tr", -1);
    }
    return (
      _ && (t.push("tbody_close", "tbody", -1), (_[1] = i)),
      t.push("table_close", "table", -1),
      (m[1] = i),
      (t.parentType = h),
      (t.line = i),
      !0
    );
  }
  function bI(t, e, n) {
    if (t.sCount[e] - t.blkIndent < 4) return !1;
    let r = e + 1,
      i = r;
    for (; r < n; ) {
      if (t.isEmpty(r)) {
        r++;
        continue;
      }
      if (t.sCount[r] - t.blkIndent >= 4) {
        r++, (i = r);
        continue;
      }
      break;
    }
    t.line = i;
    const o = t.push("code_block", "code", 0);
    return (
      (o.content =
        t.getLines(e, i, 4 + t.blkIndent, !1) +
        `
`),
      (o.map = [e, t.line]),
      !0
    );
  }
  function wI(t, e, n, r) {
    let i = t.bMarks[e] + t.tShift[e],
      o = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || i + 3 > o) return !1;
    const s = t.src.charCodeAt(i);
    if (s !== 126 && s !== 96) return !1;
    let a = i;
    i = t.skipChars(i, s);
    let l = i - a;
    if (l < 3) return !1;
    const u = t.src.slice(a, i),
      c = t.src.slice(i, o);
    if (s === 96 && c.indexOf(String.fromCharCode(s)) >= 0) return !1;
    if (r) return !0;
    let f = e,
      h = !1;
    for (
      ;
      f++, !(f >= n || ((i = a = t.bMarks[f] + t.tShift[f]), (o = t.eMarks[f]), i < o && t.sCount[f] < t.blkIndent));

    )
      if (
        t.src.charCodeAt(i) === s &&
        !(t.sCount[f] - t.blkIndent >= 4) &&
        ((i = t.skipChars(i, s)), !(i - a < l) && ((i = t.skipSpaces(i)), !(i < o)))
      ) {
        h = !0;
        break;
      }
    (l = t.sCount[e]), (t.line = f + (h ? 1 : 0));
    const p = t.push("fence", "code", 0);
    return (p.info = c), (p.content = t.getLines(e + 1, f, l, !0)), (p.markup = u), (p.map = [e, t.line]), !0;
  }
  function xI(t, e, n, r) {
    let i = t.bMarks[e] + t.tShift[e],
      o = t.eMarks[e];
    const s = t.lineMax;
    if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(i) !== 62) return !1;
    if (r) return !0;
    const a = [],
      l = [],
      u = [],
      c = [],
      f = t.md.block.ruler.getRules("blockquote"),
      h = t.parentType;
    t.parentType = "blockquote";
    let p = !1,
      d;
    for (d = e; d < n; d++) {
      const w = t.sCount[d] < t.blkIndent;
      if (((i = t.bMarks[d] + t.tShift[d]), (o = t.eMarks[d]), i >= o)) break;
      if (t.src.charCodeAt(i++) === 62 && !w) {
        let C = t.sCount[d] + 1,
          R,
          z;
        t.src.charCodeAt(i) === 32
          ? (i++, C++, (z = !1), (R = !0))
          : t.src.charCodeAt(i) === 9
            ? ((R = !0), (t.bsCount[d] + C) % 4 === 3 ? (i++, C++, (z = !1)) : (z = !0))
            : (R = !1);
        let B = C;
        for (a.push(t.bMarks[d]), t.bMarks[d] = i; i < o; ) {
          const $ = t.src.charCodeAt(i);
          if (Dt($)) $ === 9 ? (B += 4 - ((B + t.bsCount[d] + (z ? 1 : 0)) % 4)) : B++;
          else break;
          i++;
        }
        (p = i >= o),
          l.push(t.bsCount[d]),
          (t.bsCount[d] = t.sCount[d] + 1 + (R ? 1 : 0)),
          u.push(t.sCount[d]),
          (t.sCount[d] = B - C),
          c.push(t.tShift[d]),
          (t.tShift[d] = i - t.bMarks[d]);
        continue;
      }
      if (p) break;
      let v = !1;
      for (let C = 0, R = f.length; C < R; C++)
        if (f[C](t, d, n, !0)) {
          v = !0;
          break;
        }
      if (v) {
        (t.lineMax = d),
          t.blkIndent !== 0 &&
            (a.push(t.bMarks[d]),
            l.push(t.bsCount[d]),
            c.push(t.tShift[d]),
            u.push(t.sCount[d]),
            (t.sCount[d] -= t.blkIndent));
        break;
      }
      a.push(t.bMarks[d]), l.push(t.bsCount[d]), c.push(t.tShift[d]), u.push(t.sCount[d]), (t.sCount[d] = -1);
    }
    const m = t.blkIndent;
    t.blkIndent = 0;
    const y = t.push("blockquote_open", "blockquote", 1);
    y.markup = ">";
    const b = [e, 0];
    (y.map = b), t.md.block.tokenize(t, e, d);
    const _ = t.push("blockquote_close", "blockquote", -1);
    (_.markup = ">"), (t.lineMax = s), (t.parentType = h), (b[1] = t.line);
    for (let w = 0; w < c.length; w++)
      (t.bMarks[w + e] = a[w]), (t.tShift[w + e] = c[w]), (t.sCount[w + e] = u[w]), (t.bsCount[w + e] = l[w]);
    return (t.blkIndent = m), !0;
  }
  function kI(t, e, n, r) {
    const i = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    let o = t.bMarks[e] + t.tShift[e];
    const s = t.src.charCodeAt(o++);
    if (s !== 42 && s !== 45 && s !== 95) return !1;
    let a = 1;
    for (; o < i; ) {
      const u = t.src.charCodeAt(o++);
      if (u !== s && !Dt(u)) return !1;
      u === s && a++;
    }
    if (a < 3) return !1;
    if (r) return !0;
    t.line = e + 1;
    const l = t.push("hr", "hr", 0);
    return (l.map = [e, t.line]), (l.markup = Array(a + 1).join(String.fromCharCode(s))), !0;
  }
  function Jg(t, e) {
    const n = t.eMarks[e];
    let r = t.bMarks[e] + t.tShift[e];
    const i = t.src.charCodeAt(r++);
    if (i !== 42 && i !== 45 && i !== 43) return -1;
    if (r < n) {
      const o = t.src.charCodeAt(r);
      if (!Dt(o)) return -1;
    }
    return r;
  }
  function Xg(t, e) {
    const n = t.bMarks[e] + t.tShift[e],
      r = t.eMarks[e];
    let i = n;
    if (i + 1 >= r) return -1;
    let o = t.src.charCodeAt(i++);
    if (o < 48 || o > 57) return -1;
    for (;;) {
      if (i >= r) return -1;
      if (((o = t.src.charCodeAt(i++)), o >= 48 && o <= 57)) {
        if (i - n >= 10) return -1;
        continue;
      }
      if (o === 41 || o === 46) break;
      return -1;
    }
    return i < r && ((o = t.src.charCodeAt(i)), !Dt(o)) ? -1 : i;
  }
  function AI(t, e) {
    const n = t.level + 2;
    for (let r = e + 2, i = t.tokens.length - 2; r < i; r++)
      t.tokens[r].level === n &&
        t.tokens[r].type === "paragraph_open" &&
        ((t.tokens[r + 2].hidden = !0), (t.tokens[r].hidden = !0), (r += 2));
  }
  function EI(t, e, n, r) {
    let i,
      o,
      s,
      a,
      l = e,
      u = !0;
    if (
      t.sCount[l] - t.blkIndent >= 4 ||
      (t.listIndent >= 0 && t.sCount[l] - t.listIndent >= 4 && t.sCount[l] < t.blkIndent)
    )
      return !1;
    let c = !1;
    r && t.parentType === "paragraph" && t.sCount[l] >= t.blkIndent && (c = !0);
    let f, h, p;
    if ((p = Xg(t, l)) >= 0) {
      if (((f = !0), (s = t.bMarks[l] + t.tShift[l]), (h = Number(t.src.slice(s, p - 1))), c && h !== 1)) return !1;
    } else if ((p = Jg(t, l)) >= 0) f = !1;
    else return !1;
    if (c && t.skipSpaces(p) >= t.eMarks[l]) return !1;
    if (r) return !0;
    const d = t.src.charCodeAt(p - 1),
      m = t.tokens.length;
    f
      ? ((a = t.push("ordered_list_open", "ol", 1)), h !== 1 && (a.attrs = [["start", h]]))
      : (a = t.push("bullet_list_open", "ul", 1));
    const y = [l, 0];
    (a.map = y), (a.markup = String.fromCharCode(d));
    let b = !1;
    const _ = t.md.block.ruler.getRules("list"),
      w = t.parentType;
    for (t.parentType = "list"; l < n; ) {
      (o = p), (i = t.eMarks[l]);
      const v = t.sCount[l] + p - (t.bMarks[l] + t.tShift[l]);
      let C = v;
      for (; o < i; ) {
        const O = t.src.charCodeAt(o);
        if (O === 9) C += 4 - ((C + t.bsCount[l]) % 4);
        else if (O === 32) C++;
        else break;
        o++;
      }
      const R = o;
      let z;
      R >= i ? (z = 1) : (z = C - v), z > 4 && (z = 1);
      const B = v + z;
      (a = t.push("list_item_open", "li", 1)), (a.markup = String.fromCharCode(d));
      const $ = [l, 0];
      (a.map = $), f && (a.info = t.src.slice(s, p - 1));
      const E = t.tight,
        g = t.tShift[l],
        k = t.sCount[l],
        D = t.listIndent;
      if (
        ((t.listIndent = t.blkIndent),
        (t.blkIndent = B),
        (t.tight = !0),
        (t.tShift[l] = R - t.bMarks[l]),
        (t.sCount[l] = C),
        R >= i && t.isEmpty(l + 1) ? (t.line = Math.min(t.line + 2, n)) : t.md.block.tokenize(t, l, n, !0),
        (!t.tight || b) && (u = !1),
        (b = t.line - l > 1 && t.isEmpty(t.line - 1)),
        (t.blkIndent = t.listIndent),
        (t.listIndent = D),
        (t.tShift[l] = g),
        (t.sCount[l] = k),
        (t.tight = E),
        (a = t.push("list_item_close", "li", -1)),
        (a.markup = String.fromCharCode(d)),
        (l = t.line),
        ($[1] = l),
        l >= n || t.sCount[l] < t.blkIndent || t.sCount[l] - t.blkIndent >= 4)
      )
        break;
      let q = !1;
      for (let O = 0, T = _.length; O < T; O++)
        if (_[O](t, l, n, !0)) {
          q = !0;
          break;
        }
      if (q) break;
      if (f) {
        if (((p = Xg(t, l)), p < 0)) break;
        s = t.bMarks[l] + t.tShift[l];
      } else if (((p = Jg(t, l)), p < 0)) break;
      if (d !== t.src.charCodeAt(p - 1)) break;
    }
    return (
      f ? (a = t.push("ordered_list_close", "ol", -1)) : (a = t.push("bullet_list_close", "ul", -1)),
      (a.markup = String.fromCharCode(d)),
      (y[1] = l),
      (t.line = l),
      (t.parentType = w),
      u && AI(t, m),
      !0
    );
  }
  function CI(t, e, n, r) {
    let i = t.bMarks[e] + t.tShift[e],
      o = t.eMarks[e],
      s = e + 1;
    if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(i) !== 91) return !1;
    function a(_) {
      const w = t.lineMax;
      if (_ >= w || t.isEmpty(_)) return null;
      let v = !1;
      if ((t.sCount[_] - t.blkIndent > 3 && (v = !0), t.sCount[_] < 0 && (v = !0), !v)) {
        const z = t.md.block.ruler.getRules("reference"),
          B = t.parentType;
        t.parentType = "reference";
        let $ = !1;
        for (let E = 0, g = z.length; E < g; E++)
          if (z[E](t, _, w, !0)) {
            $ = !0;
            break;
          }
        if (((t.parentType = B), $)) return null;
      }
      const C = t.bMarks[_] + t.tShift[_],
        R = t.eMarks[_];
      return t.src.slice(C, R + 1);
    }
    let l = t.src.slice(i, o + 1);
    o = l.length;
    let u = -1;
    for (i = 1; i < o; i++) {
      const _ = l.charCodeAt(i);
      if (_ === 91) return !1;
      if (_ === 93) {
        u = i;
        break;
      } else if (_ === 10) {
        const w = a(s);
        w !== null && ((l += w), (o = l.length), s++);
      } else if (_ === 92 && (i++, i < o && l.charCodeAt(i) === 10)) {
        const w = a(s);
        w !== null && ((l += w), (o = l.length), s++);
      }
    }
    if (u < 0 || l.charCodeAt(u + 1) !== 58) return !1;
    for (i = u + 2; i < o; i++) {
      const _ = l.charCodeAt(i);
      if (_ === 10) {
        const w = a(s);
        w !== null && ((l += w), (o = l.length), s++);
      } else if (!Dt(_)) break;
    }
    const c = t.md.helpers.parseLinkDestination(l, i, o);
    if (!c.ok) return !1;
    const f = t.md.normalizeLink(c.str);
    if (!t.md.validateLink(f)) return !1;
    i = c.pos;
    const h = i,
      p = s,
      d = i;
    for (; i < o; i++) {
      const _ = l.charCodeAt(i);
      if (_ === 10) {
        const w = a(s);
        w !== null && ((l += w), (o = l.length), s++);
      } else if (!Dt(_)) break;
    }
    let m = t.md.helpers.parseLinkTitle(l, i, o);
    for (; m.can_continue; ) {
      const _ = a(s);
      if (_ === null) break;
      (l += _), (i = o), (o = l.length), s++, (m = t.md.helpers.parseLinkTitle(l, i, o, m));
    }
    let y;
    for (i < o && d !== i && m.ok ? ((y = m.str), (i = m.pos)) : ((y = ""), (i = h), (s = p)); i < o; ) {
      const _ = l.charCodeAt(i);
      if (!Dt(_)) break;
      i++;
    }
    if (i < o && l.charCodeAt(i) !== 10 && y)
      for (y = "", i = h, s = p; i < o; ) {
        const _ = l.charCodeAt(i);
        if (!Dt(_)) break;
        i++;
      }
    if (i < o && l.charCodeAt(i) !== 10) return !1;
    const b = aa(l.slice(1, u));
    return b
      ? (r ||
          (typeof t.env.references > "u" && (t.env.references = {}),
          typeof t.env.references[b] > "u" && (t.env.references[b] = { title: y, href: f }),
          (t.line = s)),
        !0)
      : !1;
  }
  const SI = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "search",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ],
    TI = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
    $I = "[^\"'=<>`\\x00-\\x20]+",
    DI = "'[^']*'",
    OI = '"[^"]*"',
    RI = "(?:" + $I + "|" + DI + "|" + OI + ")",
    FI = "(?:\\s+" + TI + "(?:\\s*=\\s*" + RI + ")?)",
    zy = "<[A-Za-z][A-Za-z0-9\\-]*" + FI + "*\\s*\\/?>",
    Py = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    zI = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",
    PI = "<[?][\\s\\S]*?[?]>",
    II = "<![A-Za-z][^>]*>",
    jI = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    MI = new RegExp("^(?:" + zy + "|" + Py + "|" + zI + "|" + PI + "|" + II + "|" + jI + ")"),
    NI = new RegExp("^(?:" + zy + "|" + Py + ")"),
    br = [
      [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
      [/^<!--/, /-->/, !0],
      [/^<\?/, /\?>/, !0],
      [/^<![A-Z]/, />/, !0],
      [/^<!\[CDATA\[/, /\]\]>/, !0],
      [new RegExp("^</?(" + SI.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
      [new RegExp(NI.source + "\\s*$"), /^$/, !1],
    ];
  function LI(t, e, n, r) {
    let i = t.bMarks[e] + t.tShift[e],
      o = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || !t.md.options.html || t.src.charCodeAt(i) !== 60) return !1;
    let s = t.src.slice(i, o),
      a = 0;
    for (; a < br.length && !br[a][0].test(s); a++);
    if (a === br.length) return !1;
    if (r) return br[a][2];
    let l = e + 1;
    if (!br[a][1].test(s)) {
      for (; l < n && !(t.sCount[l] < t.blkIndent); l++)
        if (((i = t.bMarks[l] + t.tShift[l]), (o = t.eMarks[l]), (s = t.src.slice(i, o)), br[a][1].test(s))) {
          s.length !== 0 && l++;
          break;
        }
    }
    t.line = l;
    const u = t.push("html_block", "", 0);
    return (u.map = [e, l]), (u.content = t.getLines(e, l, t.blkIndent, !0)), !0;
  }
  function BI(t, e, n, r) {
    let i = t.bMarks[e] + t.tShift[e],
      o = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    let s = t.src.charCodeAt(i);
    if (s !== 35 || i >= o) return !1;
    let a = 1;
    for (s = t.src.charCodeAt(++i); s === 35 && i < o && a <= 6; ) a++, (s = t.src.charCodeAt(++i));
    if (a > 6 || (i < o && !Dt(s))) return !1;
    if (r) return !0;
    o = t.skipSpacesBack(o, i);
    const l = t.skipCharsBack(o, 35, i);
    l > i && Dt(t.src.charCodeAt(l - 1)) && (o = l), (t.line = e + 1);
    const u = t.push("heading_open", "h" + String(a), 1);
    (u.markup = "########".slice(0, a)), (u.map = [e, t.line]);
    const c = t.push("inline", "", 0);
    (c.content = t.src.slice(i, o).trim()), (c.map = [e, t.line]), (c.children = []);
    const f = t.push("heading_close", "h" + String(a), -1);
    return (f.markup = "########".slice(0, a)), !0;
  }
  function qI(t, e, n) {
    const r = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    const i = t.parentType;
    t.parentType = "paragraph";
    let o = 0,
      s,
      a = e + 1;
    for (; a < n && !t.isEmpty(a); a++) {
      if (t.sCount[a] - t.blkIndent > 3) continue;
      if (t.sCount[a] >= t.blkIndent) {
        let p = t.bMarks[a] + t.tShift[a];
        const d = t.eMarks[a];
        if (
          p < d &&
          ((s = t.src.charCodeAt(p)),
          (s === 45 || s === 61) && ((p = t.skipChars(p, s)), (p = t.skipSpaces(p)), p >= d))
        ) {
          o = s === 61 ? 1 : 2;
          break;
        }
      }
      if (t.sCount[a] < 0) continue;
      let h = !1;
      for (let p = 0, d = r.length; p < d; p++)
        if (r[p](t, a, n, !0)) {
          h = !0;
          break;
        }
      if (h) break;
    }
    if (!o) return !1;
    const l = t.getLines(e, a, t.blkIndent, !1).trim();
    t.line = a + 1;
    const u = t.push("heading_open", "h" + String(o), 1);
    (u.markup = String.fromCharCode(s)), (u.map = [e, t.line]);
    const c = t.push("inline", "", 0);
    (c.content = l), (c.map = [e, t.line - 1]), (c.children = []);
    const f = t.push("heading_close", "h" + String(o), -1);
    return (f.markup = String.fromCharCode(s)), (t.parentType = i), !0;
  }
  function UI(t, e, n) {
    const r = t.md.block.ruler.getRules("paragraph"),
      i = t.parentType;
    let o = e + 1;
    for (t.parentType = "paragraph"; o < n && !t.isEmpty(o); o++) {
      if (t.sCount[o] - t.blkIndent > 3 || t.sCount[o] < 0) continue;
      let u = !1;
      for (let c = 0, f = r.length; c < f; c++)
        if (r[c](t, o, n, !0)) {
          u = !0;
          break;
        }
      if (u) break;
    }
    const s = t.getLines(e, o, t.blkIndent, !1).trim();
    t.line = o;
    const a = t.push("paragraph_open", "p", 1);
    a.map = [e, t.line];
    const l = t.push("inline", "", 0);
    return (
      (l.content = s),
      (l.map = [e, t.line]),
      (l.children = []),
      t.push("paragraph_close", "p", -1),
      (t.parentType = i),
      !0
    );
  }
  const Ro = [
    ["table", yI, ["paragraph", "reference"]],
    ["code", bI],
    ["fence", wI, ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", xI, ["paragraph", "reference", "blockquote", "list"]],
    ["hr", kI, ["paragraph", "reference", "blockquote", "list"]],
    ["list", EI, ["paragraph", "reference", "blockquote"]],
    ["reference", CI],
    ["html_block", LI, ["paragraph", "reference", "blockquote"]],
    ["heading", BI, ["paragraph", "reference", "blockquote"]],
    ["lheading", qI],
    ["paragraph", UI],
  ];
  function la() {
    this.ruler = new he();
    for (let t = 0; t < Ro.length; t++) this.ruler.push(Ro[t][0], Ro[t][1], { alt: (Ro[t][2] || []).slice() });
  }
  la.prototype.tokenize = function (t, e, n) {
    const r = this.ruler.getRules(""),
      i = r.length,
      o = t.md.options.maxNesting;
    let s = e,
      a = !1;
    for (; s < n && ((t.line = s = t.skipEmptyLines(s)), !(s >= n || t.sCount[s] < t.blkIndent)); ) {
      if (t.level >= o) {
        t.line = n;
        break;
      }
      const l = t.line;
      let u = !1;
      for (let c = 0; c < i; c++)
        if (((u = r[c](t, s, n, !1)), u)) {
          if (l >= t.line) throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!u) throw new Error("none of the block rules matched");
      (t.tight = !a),
        t.isEmpty(t.line - 1) && (a = !0),
        (s = t.line),
        s < n && t.isEmpty(s) && ((a = !0), s++, (t.line = s));
    }
  };
  la.prototype.parse = function (t, e, n, r) {
    if (!t) return;
    const i = new this.State(t, e, n, r);
    this.tokenize(i, i.line, i.lineMax);
  };
  la.prototype.State = sn;
  function fo(t, e, n, r) {
    (this.src = t),
      (this.env = n),
      (this.md = e),
      (this.tokens = r),
      (this.tokens_meta = Array(r.length)),
      (this.pos = 0),
      (this.posMax = this.src.length),
      (this.level = 0),
      (this.pending = ""),
      (this.pendingLevel = 0),
      (this.cache = {}),
      (this.delimiters = []),
      (this._prev_delimiters = []),
      (this.backticks = {}),
      (this.backticksScanned = !1),
      (this.linkLevel = 0);
  }
  fo.prototype.pushPending = function () {
    const t = new Me("text", "", 0);
    return (t.content = this.pending), (t.level = this.pendingLevel), this.tokens.push(t), (this.pending = ""), t;
  };
  fo.prototype.push = function (t, e, n) {
    this.pending && this.pushPending();
    const r = new Me(t, e, n);
    let i = null;
    return (
      n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
      (r.level = this.level),
      n > 0 &&
        (this.level++,
        this._prev_delimiters.push(this.delimiters),
        (this.delimiters = []),
        (i = { delimiters: this.delimiters })),
      (this.pendingLevel = this.level),
      this.tokens.push(r),
      this.tokens_meta.push(i),
      r
    );
  };
  fo.prototype.scanDelims = function (t, e) {
    const n = this.posMax,
      r = this.src.charCodeAt(t),
      i = t > 0 ? this.src.charCodeAt(t - 1) : 32;
    let o = t;
    for (; o < n && this.src.charCodeAt(o) === r; ) o++;
    const s = o - t,
      a = o < n ? this.src.charCodeAt(o) : 32,
      l = Wi(i) || Gi(String.fromCharCode(i)),
      u = Wi(a) || Gi(String.fromCharCode(a)),
      c = Hi(i),
      f = Hi(a),
      h = !f && (!u || c || l),
      p = !c && (!l || f || u);
    return { can_open: h && (e || !p || l), can_close: p && (e || !h || u), length: s };
  };
  fo.prototype.Token = Me;
  function ZI(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function VI(t, e) {
    let n = t.pos;
    for (; n < t.posMax && !ZI(t.src.charCodeAt(n)); ) n++;
    return n === t.pos ? !1 : (e || (t.pending += t.src.slice(t.pos, n)), (t.pos = n), !0);
  }
  const HI = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  function GI(t, e) {
    if (!t.md.options.linkify || t.linkLevel > 0) return !1;
    const n = t.pos,
      r = t.posMax;
    if (n + 3 > r || t.src.charCodeAt(n) !== 58 || t.src.charCodeAt(n + 1) !== 47 || t.src.charCodeAt(n + 2) !== 47)
      return !1;
    const i = t.pending.match(HI);
    if (!i) return !1;
    const o = i[1],
      s = t.md.linkify.matchAtStart(t.src.slice(n - o.length));
    if (!s) return !1;
    let a = s.url;
    if (a.length <= o.length) return !1;
    a = a.replace(/\*+$/, "");
    const l = t.md.normalizeLink(a);
    if (!t.md.validateLink(l)) return !1;
    if (!e) {
      t.pending = t.pending.slice(0, -o.length);
      const u = t.push("link_open", "a", 1);
      (u.attrs = [["href", l]]), (u.markup = "linkify"), (u.info = "auto");
      const c = t.push("text", "", 0);
      c.content = t.md.normalizeLinkText(a);
      const f = t.push("link_close", "a", -1);
      (f.markup = "linkify"), (f.info = "auto");
    }
    return (t.pos += a.length - o.length), !0;
  }
  function WI(t, e) {
    let n = t.pos;
    if (t.src.charCodeAt(n) !== 10) return !1;
    const r = t.pending.length - 1,
      i = t.posMax;
    if (!e)
      if (r >= 0 && t.pending.charCodeAt(r) === 32)
        if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
          let o = r - 1;
          for (; o >= 1 && t.pending.charCodeAt(o - 1) === 32; ) o--;
          (t.pending = t.pending.slice(0, o)), t.push("hardbreak", "br", 0);
        } else (t.pending = t.pending.slice(0, -1)), t.push("softbreak", "br", 0);
      else t.push("softbreak", "br", 0);
    for (n++; n < i && Dt(t.src.charCodeAt(n)); ) n++;
    return (t.pos = n), !0;
  }
  const Kc = [];
  for (let t = 0; t < 256; t++) Kc.push(0);
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (t) {
    Kc[t.charCodeAt(0)] = 1;
  });
  function KI(t, e) {
    let n = t.pos;
    const r = t.posMax;
    if (t.src.charCodeAt(n) !== 92 || (n++, n >= r)) return !1;
    let i = t.src.charCodeAt(n);
    if (i === 10) {
      for (e || t.push("hardbreak", "br", 0), n++; n < r && ((i = t.src.charCodeAt(n)), !!Dt(i)); ) n++;
      return (t.pos = n), !0;
    }
    let o = t.src[n];
    if (i >= 55296 && i <= 56319 && n + 1 < r) {
      const a = t.src.charCodeAt(n + 1);
      a >= 56320 && a <= 57343 && ((o += t.src[n + 1]), n++);
    }
    const s = "\\" + o;
    if (!e) {
      const a = t.push("text_special", "", 0);
      i < 256 && Kc[i] !== 0 ? (a.content = o) : (a.content = s), (a.markup = s), (a.info = "escape");
    }
    return (t.pos = n + 1), !0;
  }
  function JI(t, e) {
    let n = t.pos;
    if (t.src.charCodeAt(n) !== 96) return !1;
    const r = n;
    n++;
    const i = t.posMax;
    for (; n < i && t.src.charCodeAt(n) === 96; ) n++;
    const o = t.src.slice(r, n),
      s = o.length;
    if (t.backticksScanned && (t.backticks[s] || 0) <= r) return e || (t.pending += o), (t.pos += s), !0;
    let a = n,
      l;
    for (; (l = t.src.indexOf("`", a)) !== -1; ) {
      for (a = l + 1; a < i && t.src.charCodeAt(a) === 96; ) a++;
      const u = a - l;
      if (u === s) {
        if (!e) {
          const c = t.push("code_inline", "code", 0);
          (c.markup = o),
            (c.content = t.src
              .slice(n, l)
              .replace(/\n/g, " ")
              .replace(/^ (.+) $/, "$1"));
        }
        return (t.pos = a), !0;
      }
      t.backticks[u] = l;
    }
    return (t.backticksScanned = !0), e || (t.pending += o), (t.pos += s), !0;
  }
  function XI(t, e) {
    const n = t.pos,
      r = t.src.charCodeAt(n);
    if (e || r !== 126) return !1;
    const i = t.scanDelims(t.pos, !0);
    let o = i.length;
    const s = String.fromCharCode(r);
    if (o < 2) return !1;
    let a;
    o % 2 && ((a = t.push("text", "", 0)), (a.content = s), o--);
    for (let l = 0; l < o; l += 2)
      (a = t.push("text", "", 0)),
        (a.content = s + s),
        t.delimiters.push({
          marker: r,
          length: 0,
          token: t.tokens.length - 1,
          end: -1,
          open: i.can_open,
          close: i.can_close,
        });
    return (t.pos += i.length), !0;
  }
  function Yg(t, e) {
    let n;
    const r = [],
      i = e.length;
    for (let o = 0; o < i; o++) {
      const s = e[o];
      if (s.marker !== 126 || s.end === -1) continue;
      const a = e[s.end];
      (n = t.tokens[s.token]),
        (n.type = "s_open"),
        (n.tag = "s"),
        (n.nesting = 1),
        (n.markup = "~~"),
        (n.content = ""),
        (n = t.tokens[a.token]),
        (n.type = "s_close"),
        (n.tag = "s"),
        (n.nesting = -1),
        (n.markup = "~~"),
        (n.content = ""),
        t.tokens[a.token - 1].type === "text" && t.tokens[a.token - 1].content === "~" && r.push(a.token - 1);
    }
    for (; r.length; ) {
      const o = r.pop();
      let s = o + 1;
      for (; s < t.tokens.length && t.tokens[s].type === "s_close"; ) s++;
      s--, o !== s && ((n = t.tokens[s]), (t.tokens[s] = t.tokens[o]), (t.tokens[o] = n));
    }
  }
  function YI(t) {
    const e = t.tokens_meta,
      n = t.tokens_meta.length;
    Yg(t, t.delimiters);
    for (let r = 0; r < n; r++) e[r] && e[r].delimiters && Yg(t, e[r].delimiters);
  }
  const Iy = { tokenize: XI, postProcess: YI };
  function QI(t, e) {
    const n = t.pos,
      r = t.src.charCodeAt(n);
    if (e || (r !== 95 && r !== 42)) return !1;
    const i = t.scanDelims(t.pos, r === 42);
    for (let o = 0; o < i.length; o++) {
      const s = t.push("text", "", 0);
      (s.content = String.fromCharCode(r)),
        t.delimiters.push({
          marker: r,
          length: i.length,
          token: t.tokens.length - 1,
          end: -1,
          open: i.can_open,
          close: i.can_close,
        });
    }
    return (t.pos += i.length), !0;
  }
  function Qg(t, e) {
    const n = e.length;
    for (let r = n - 1; r >= 0; r--) {
      const i = e[r];
      if ((i.marker !== 95 && i.marker !== 42) || i.end === -1) continue;
      const o = e[i.end],
        s =
          r > 0 &&
          e[r - 1].end === i.end + 1 &&
          e[r - 1].marker === i.marker &&
          e[r - 1].token === i.token - 1 &&
          e[i.end + 1].token === o.token + 1,
        a = String.fromCharCode(i.marker),
        l = t.tokens[i.token];
      (l.type = s ? "strong_open" : "em_open"),
        (l.tag = s ? "strong" : "em"),
        (l.nesting = 1),
        (l.markup = s ? a + a : a),
        (l.content = "");
      const u = t.tokens[o.token];
      (u.type = s ? "strong_close" : "em_close"),
        (u.tag = s ? "strong" : "em"),
        (u.nesting = -1),
        (u.markup = s ? a + a : a),
        (u.content = ""),
        s && ((t.tokens[e[r - 1].token].content = ""), (t.tokens[e[i.end + 1].token].content = ""), r--);
    }
  }
  function t6(t) {
    const e = t.tokens_meta,
      n = t.tokens_meta.length;
    Qg(t, t.delimiters);
    for (let r = 0; r < n; r++) e[r] && e[r].delimiters && Qg(t, e[r].delimiters);
  }
  const jy = { tokenize: QI, postProcess: t6 };
  function e6(t, e) {
    let n,
      r,
      i,
      o,
      s = "",
      a = "",
      l = t.pos,
      u = !0;
    if (t.src.charCodeAt(t.pos) !== 91) return !1;
    const c = t.pos,
      f = t.posMax,
      h = t.pos + 1,
      p = t.md.helpers.parseLinkLabel(t, t.pos, !0);
    if (p < 0) return !1;
    let d = p + 1;
    if (d < f && t.src.charCodeAt(d) === 40) {
      for (u = !1, d++; d < f && ((n = t.src.charCodeAt(d)), !(!Dt(n) && n !== 10)); d++);
      if (d >= f) return !1;
      if (((l = d), (i = t.md.helpers.parseLinkDestination(t.src, d, t.posMax)), i.ok)) {
        for (
          s = t.md.normalizeLink(i.str), t.md.validateLink(s) ? (d = i.pos) : (s = ""), l = d;
          d < f && ((n = t.src.charCodeAt(d)), !(!Dt(n) && n !== 10));
          d++
        );
        if (((i = t.md.helpers.parseLinkTitle(t.src, d, t.posMax)), d < f && l !== d && i.ok))
          for (a = i.str, d = i.pos; d < f && ((n = t.src.charCodeAt(d)), !(!Dt(n) && n !== 10)); d++);
      }
      (d >= f || t.src.charCodeAt(d) !== 41) && (u = !0), d++;
    }
    if (u) {
      if (typeof t.env.references > "u") return !1;
      if (
        (d < f && t.src.charCodeAt(d) === 91
          ? ((l = d + 1), (d = t.md.helpers.parseLinkLabel(t, d)), d >= 0 ? (r = t.src.slice(l, d++)) : (d = p + 1))
          : (d = p + 1),
        r || (r = t.src.slice(h, p)),
        (o = t.env.references[aa(r)]),
        !o)
      )
        return (t.pos = c), !1;
      (s = o.href), (a = o.title);
    }
    if (!e) {
      (t.pos = h), (t.posMax = p);
      const m = t.push("link_open", "a", 1),
        y = [["href", s]];
      (m.attrs = y),
        a && y.push(["title", a]),
        t.linkLevel++,
        t.md.inline.tokenize(t),
        t.linkLevel--,
        t.push("link_close", "a", -1);
    }
    return (t.pos = d), (t.posMax = f), !0;
  }
  function n6(t, e) {
    let n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      c = "";
    const f = t.pos,
      h = t.posMax;
    if (t.src.charCodeAt(t.pos) !== 33 || t.src.charCodeAt(t.pos + 1) !== 91) return !1;
    const p = t.pos + 2,
      d = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1);
    if (d < 0) return !1;
    if (((o = d + 1), o < h && t.src.charCodeAt(o) === 40)) {
      for (o++; o < h && ((n = t.src.charCodeAt(o)), !(!Dt(n) && n !== 10)); o++);
      if (o >= h) return !1;
      for (
        u = o,
          a = t.md.helpers.parseLinkDestination(t.src, o, t.posMax),
          a.ok && ((c = t.md.normalizeLink(a.str)), t.md.validateLink(c) ? (o = a.pos) : (c = "")),
          u = o;
        o < h && ((n = t.src.charCodeAt(o)), !(!Dt(n) && n !== 10));
        o++
      );
      if (((a = t.md.helpers.parseLinkTitle(t.src, o, t.posMax)), o < h && u !== o && a.ok))
        for (l = a.str, o = a.pos; o < h && ((n = t.src.charCodeAt(o)), !(!Dt(n) && n !== 10)); o++);
      else l = "";
      if (o >= h || t.src.charCodeAt(o) !== 41) return (t.pos = f), !1;
      o++;
    } else {
      if (typeof t.env.references > "u") return !1;
      if (
        (o < h && t.src.charCodeAt(o) === 91
          ? ((u = o + 1), (o = t.md.helpers.parseLinkLabel(t, o)), o >= 0 ? (i = t.src.slice(u, o++)) : (o = d + 1))
          : (o = d + 1),
        i || (i = t.src.slice(p, d)),
        (s = t.env.references[aa(i)]),
        !s)
      )
        return (t.pos = f), !1;
      (c = s.href), (l = s.title);
    }
    if (!e) {
      r = t.src.slice(p, d);
      const m = [];
      t.md.inline.parse(r, t.md, t.env, m);
      const y = t.push("image", "img", 0),
        b = [
          ["src", c],
          ["alt", ""],
        ];
      (y.attrs = b), (y.children = m), (y.content = r), l && b.push(["title", l]);
    }
    return (t.pos = o), (t.posMax = h), !0;
  }
  const r6 =
      /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    i6 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
  function o6(t, e) {
    let n = t.pos;
    if (t.src.charCodeAt(n) !== 60) return !1;
    const r = t.pos,
      i = t.posMax;
    for (;;) {
      if (++n >= i) return !1;
      const s = t.src.charCodeAt(n);
      if (s === 60) return !1;
      if (s === 62) break;
    }
    const o = t.src.slice(r + 1, n);
    if (i6.test(o)) {
      const s = t.md.normalizeLink(o);
      if (!t.md.validateLink(s)) return !1;
      if (!e) {
        const a = t.push("link_open", "a", 1);
        (a.attrs = [["href", s]]), (a.markup = "autolink"), (a.info = "auto");
        const l = t.push("text", "", 0);
        l.content = t.md.normalizeLinkText(o);
        const u = t.push("link_close", "a", -1);
        (u.markup = "autolink"), (u.info = "auto");
      }
      return (t.pos += o.length + 2), !0;
    }
    if (r6.test(o)) {
      const s = t.md.normalizeLink("mailto:" + o);
      if (!t.md.validateLink(s)) return !1;
      if (!e) {
        const a = t.push("link_open", "a", 1);
        (a.attrs = [["href", s]]), (a.markup = "autolink"), (a.info = "auto");
        const l = t.push("text", "", 0);
        l.content = t.md.normalizeLinkText(o);
        const u = t.push("link_close", "a", -1);
        (u.markup = "autolink"), (u.info = "auto");
      }
      return (t.pos += o.length + 2), !0;
    }
    return !1;
  }
  function s6(t) {
    return /^<a[>\s]/i.test(t);
  }
  function a6(t) {
    return /^<\/a\s*>/i.test(t);
  }
  function l6(t) {
    const e = t | 32;
    return e >= 97 && e <= 122;
  }
  function u6(t, e) {
    if (!t.md.options.html) return !1;
    const n = t.posMax,
      r = t.pos;
    if (t.src.charCodeAt(r) !== 60 || r + 2 >= n) return !1;
    const i = t.src.charCodeAt(r + 1);
    if (i !== 33 && i !== 63 && i !== 47 && !l6(i)) return !1;
    const o = t.src.slice(r).match(MI);
    if (!o) return !1;
    if (!e) {
      const s = t.push("html_inline", "", 0);
      (s.content = o[0]), s6(s.content) && t.linkLevel++, a6(s.content) && t.linkLevel--;
    }
    return (t.pos += o[0].length), !0;
  }
  const c6 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    f6 = /^&([a-z][a-z0-9]{1,31});/i;
  function h6(t, e) {
    const n = t.pos,
      r = t.posMax;
    if (t.src.charCodeAt(n) !== 38 || n + 1 >= r) return !1;
    if (t.src.charCodeAt(n + 1) === 35) {
      const i = t.src.slice(n).match(c6);
      if (i) {
        if (!e) {
          const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10),
            s = t.push("text_special", "", 0);
          (s.content = Gc(o) ? gs(o) : gs(65533)), (s.markup = i[0]), (s.info = "entity");
        }
        return (t.pos += i[0].length), !0;
      }
    } else {
      const i = t.src.slice(n).match(f6);
      if (i) {
        const o = $y(i[0]);
        if (o !== i[0]) {
          if (!e) {
            const s = t.push("text_special", "", 0);
            (s.content = o), (s.markup = i[0]), (s.info = "entity");
          }
          return (t.pos += i[0].length), !0;
        }
      }
    }
    return !1;
  }
  function tm(t) {
    const e = {},
      n = t.length;
    if (!n) return;
    let r = 0,
      i = -2;
    const o = [];
    for (let s = 0; s < n; s++) {
      const a = t[s];
      if (
        (o.push(0),
        (t[r].marker !== a.marker || i !== a.token - 1) && (r = s),
        (i = a.token),
        (a.length = a.length || 0),
        !a.close)
      )
        continue;
      e.hasOwnProperty(a.marker) || (e[a.marker] = [-1, -1, -1, -1, -1, -1]);
      const l = e[a.marker][(a.open ? 3 : 0) + (a.length % 3)];
      let u = r - o[r] - 1,
        c = u;
      for (; u > l; u -= o[u] + 1) {
        const f = t[u];
        if (f.marker === a.marker && f.open && f.end < 0) {
          let h = !1;
          if (
            ((f.close || a.open) &&
              (f.length + a.length) % 3 === 0 &&
              (f.length % 3 !== 0 || a.length % 3 !== 0) &&
              (h = !0),
            !h)
          ) {
            const p = u > 0 && !t[u - 1].open ? o[u - 1] + 1 : 0;
            (o[s] = s - u + p), (o[u] = p), (a.open = !1), (f.end = s), (f.close = !1), (c = -1), (i = -2);
            break;
          }
        }
      }
      c !== -1 && (e[a.marker][(a.open ? 3 : 0) + ((a.length || 0) % 3)] = c);
    }
  }
  function p6(t) {
    const e = t.tokens_meta,
      n = t.tokens_meta.length;
    tm(t.delimiters);
    for (let r = 0; r < n; r++) e[r] && e[r].delimiters && tm(e[r].delimiters);
  }
  function d6(t) {
    let e,
      n,
      r = 0;
    const i = t.tokens,
      o = t.tokens.length;
    for (e = n = 0; e < o; e++)
      i[e].nesting < 0 && r--,
        (i[e].level = r),
        i[e].nesting > 0 && r++,
        i[e].type === "text" && e + 1 < o && i[e + 1].type === "text"
          ? (i[e + 1].content = i[e].content + i[e + 1].content)
          : (e !== n && (i[n] = i[e]), n++);
    e !== n && (i.length = n);
  }
  const Ml = [
      ["text", VI],
      ["linkify", GI],
      ["newline", WI],
      ["escape", KI],
      ["backticks", JI],
      ["strikethrough", Iy.tokenize],
      ["emphasis", jy.tokenize],
      ["link", e6],
      ["image", n6],
      ["autolink", o6],
      ["html_inline", u6],
      ["entity", h6],
    ],
    Nl = [
      ["balance_pairs", p6],
      ["strikethrough", Iy.postProcess],
      ["emphasis", jy.postProcess],
      ["fragments_join", d6],
    ];
  function ho() {
    this.ruler = new he();
    for (let t = 0; t < Ml.length; t++) this.ruler.push(Ml[t][0], Ml[t][1]);
    this.ruler2 = new he();
    for (let t = 0; t < Nl.length; t++) this.ruler2.push(Nl[t][0], Nl[t][1]);
  }
  ho.prototype.skipToken = function (t) {
    const e = t.pos,
      n = this.ruler.getRules(""),
      r = n.length,
      i = t.md.options.maxNesting,
      o = t.cache;
    if (typeof o[e] < "u") {
      t.pos = o[e];
      return;
    }
    let s = !1;
    if (t.level < i) {
      for (let a = 0; a < r; a++)
        if ((t.level++, (s = n[a](t, !0)), t.level--, s)) {
          if (e >= t.pos) throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else t.pos = t.posMax;
    s || t.pos++, (o[e] = t.pos);
  };
  ho.prototype.tokenize = function (t) {
    const e = this.ruler.getRules(""),
      n = e.length,
      r = t.posMax,
      i = t.md.options.maxNesting;
    for (; t.pos < r; ) {
      const o = t.pos;
      let s = !1;
      if (t.level < i) {
        for (let a = 0; a < n; a++)
          if (((s = e[a](t, !1)), s)) {
            if (o >= t.pos) throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (s) {
        if (t.pos >= r) break;
        continue;
      }
      t.pending += t.src[t.pos++];
    }
    t.pending && t.pushPending();
  };
  ho.prototype.parse = function (t, e, n, r) {
    const i = new this.State(t, e, n, r);
    this.tokenize(i);
    const o = this.ruler2.getRules(""),
      s = o.length;
    for (let a = 0; a < s; a++) o[a](i);
  };
  ho.prototype.State = fo;
  function g6(t) {
    const e = {};
    (t = t || {}),
      (e.src_Any = Ay.source),
      (e.src_Cc = Ey.source),
      (e.src_Z = Sy.source),
      (e.src_P = Vc.source),
      (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|")),
      (e.src_ZCc = [e.src_Z, e.src_Cc].join("|"));
    const n = "[><｜]";
    return (
      (e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")"),
      (e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
      (e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
      (e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
      (e.src_host_terminator =
        "(?=$|" +
        n +
        "|" +
        e.src_ZPCc +
        ")(?!" +
        (t["---"] ? "-(?!--)|" : "-|") +
        "_|:\\d|\\.-|\\.(?!$|" +
        e.src_ZPCc +
        "))"),
      (e.src_path =
        "(?:[/?#](?:(?!" +
        e.src_ZCc +
        "|" +
        n +
        `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
        e.src_ZCc +
        "|\\]).)*\\]|\\((?:(?!" +
        e.src_ZCc +
        "|[)]).)*\\)|\\{(?:(?!" +
        e.src_ZCc +
        '|[}]).)*\\}|\\"(?:(?!' +
        e.src_ZCc +
        `|["]).)+\\"|\\'(?:(?!` +
        e.src_ZCc +
        "|[']).)+\\'|\\'(?=" +
        e.src_pseudo_letter +
        "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
        e.src_ZCc +
        "|[.]|$)|" +
        (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
        ",(?!" +
        e.src_ZCc +
        "|$)|;(?!" +
        e.src_ZCc +
        "|$)|\\!+(?!" +
        e.src_ZCc +
        "|[!]|$)|\\?(?!" +
        e.src_ZCc +
        "|[?]|$))+|\\/)?"),
      (e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
      (e.src_xn = "xn--[a-z0-9\\-]{1,59}"),
      (e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})"),
      (e.src_domain =
        "(?:" +
        e.src_xn +
        "|(?:" +
        e.src_pseudo_letter +
        ")|(?:" +
        e.src_pseudo_letter +
        "(?:-|" +
        e.src_pseudo_letter +
        "){0,61}" +
        e.src_pseudo_letter +
        "))"),
      (e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))"),
      (e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))"),
      (e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))"),
      (e.src_host_strict = e.src_host + e.src_host_terminator),
      (e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
      (e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator),
      (e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
      (e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
      (e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))"),
      (e.tpl_email_fuzzy =
        "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")"),
      (e.tpl_link_fuzzy =
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
        e.src_ZPCc +
        "))((?![$+<=>^`|｜])" +
        e.tpl_host_port_fuzzy_strict +
        e.src_path +
        ")"),
      (e.tpl_link_no_ip_fuzzy =
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
        e.src_ZPCc +
        "))((?![$+<=>^`|｜])" +
        e.tpl_host_port_no_ip_fuzzy_strict +
        e.src_path +
        ")"),
      e
    );
  }
  function zu(t) {
    return (
      Array.prototype.slice.call(arguments, 1).forEach(function (e) {
        e &&
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          });
      }),
      t
    );
  }
  function ua(t) {
    return Object.prototype.toString.call(t);
  }
  function m6(t) {
    return ua(t) === "[object String]";
  }
  function _6(t) {
    return ua(t) === "[object Object]";
  }
  function v6(t) {
    return ua(t) === "[object RegExp]";
  }
  function em(t) {
    return ua(t) === "[object Function]";
  }
  function y6(t) {
    return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  const My = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
  function b6(t) {
    return Object.keys(t || {}).reduce(function (e, n) {
      return e || My.hasOwnProperty(n);
    }, !1);
  }
  const w6 = {
      "http:": {
        validate: function (t, e, n) {
          const r = t.slice(e);
          return (
            n.re.http ||
              (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")),
            n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
          );
        },
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (t, e, n) {
          const r = t.slice(e);
          return (
            n.re.no_http ||
              (n.re.no_http = new RegExp(
                "^" +
                  n.re.src_auth +
                  "(?:localhost|(?:(?:" +
                  n.re.src_domain +
                  ")\\.)+" +
                  n.re.src_domain_root +
                  ")" +
                  n.re.src_port +
                  n.re.src_host_terminator +
                  n.re.src_path,
                "i",
              )),
            n.re.no_http.test(r)
              ? (e >= 3 && t[e - 3] === ":") || (e >= 3 && t[e - 3] === "/")
                ? 0
                : r.match(n.re.no_http)[0].length
              : 0
          );
        },
      },
      "mailto:": {
        validate: function (t, e, n) {
          const r = t.slice(e);
          return (
            n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")),
            n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
          );
        },
      },
    },
    x6 =
      "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    k6 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function A6(t) {
    (t.__index__ = -1), (t.__text_cache__ = "");
  }
  function E6(t) {
    return function (e, n) {
      const r = e.slice(n);
      return t.test(r) ? r.match(t)[0].length : 0;
    };
  }
  function nm() {
    return function (t, e) {
      e.normalize(t);
    };
  }
  function ms(t) {
    const e = (t.re = g6(t.__opts__)),
      n = t.__tlds__.slice();
    t.onCompile(), t.__tlds_replaced__ || n.push(x6), n.push(e.src_xn), (e.src_tlds = n.join("|"));
    function r(a) {
      return a.replace("%TLDS%", e.src_tlds);
    }
    (e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i")),
      (e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i")),
      (e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i")),
      (e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i"));
    const i = [];
    t.__compiled__ = {};
    function o(a, l) {
      throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + l);
    }
    Object.keys(t.__schemas__).forEach(function (a) {
      const l = t.__schemas__[a];
      if (l === null) return;
      const u = { validate: null, link: null };
      if (((t.__compiled__[a] = u), _6(l))) {
        v6(l.validate) ? (u.validate = E6(l.validate)) : em(l.validate) ? (u.validate = l.validate) : o(a, l),
          em(l.normalize) ? (u.normalize = l.normalize) : l.normalize ? o(a, l) : (u.normalize = nm());
        return;
      }
      if (m6(l)) {
        i.push(a);
        return;
      }
      o(a, l);
    }),
      i.forEach(function (a) {
        t.__compiled__[t.__schemas__[a]] &&
          ((t.__compiled__[a].validate = t.__compiled__[t.__schemas__[a]].validate),
          (t.__compiled__[a].normalize = t.__compiled__[t.__schemas__[a]].normalize));
      }),
      (t.__compiled__[""] = { validate: null, normalize: nm() });
    const s = Object.keys(t.__compiled__)
      .filter(function (a) {
        return a.length > 0 && t.__compiled__[a];
      })
      .map(y6)
      .join("|");
    (t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "i")),
      (t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "ig")),
      (t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i")),
      (t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i")),
      A6(t);
  }
  function C6(t, e) {
    const n = t.__index__,
      r = t.__last_index__,
      i = t.__text_cache__.slice(n, r);
    (this.schema = t.__schema__.toLowerCase()),
      (this.index = n + e),
      (this.lastIndex = r + e),
      (this.raw = i),
      (this.text = i),
      (this.url = i);
  }
  function Pu(t, e) {
    const n = new C6(t, e);
    return t.__compiled__[n.schema].normalize(n, t), n;
  }
  function we(t, e) {
    if (!(this instanceof we)) return new we(t, e);
    e || (b6(t) && ((e = t), (t = {}))),
      (this.__opts__ = zu({}, My, e)),
      (this.__index__ = -1),
      (this.__last_index__ = -1),
      (this.__schema__ = ""),
      (this.__text_cache__ = ""),
      (this.__schemas__ = zu({}, w6, t)),
      (this.__compiled__ = {}),
      (this.__tlds__ = k6),
      (this.__tlds_replaced__ = !1),
      (this.re = {}),
      ms(this);
  }
  we.prototype.add = function (t, e) {
    return (this.__schemas__[t] = e), ms(this), this;
  };
  we.prototype.set = function (t) {
    return (this.__opts__ = zu(this.__opts__, t)), this;
  };
  we.prototype.test = function (t) {
    if (((this.__text_cache__ = t), (this.__index__ = -1), !t.length)) return !1;
    let e, n, r, i, o, s, a, l, u;
    if (this.re.schema_test.test(t)) {
      for (a = this.re.schema_search, a.lastIndex = 0; (e = a.exec(t)) !== null; )
        if (((i = this.testSchemaAt(t, e[2], a.lastIndex)), i)) {
          (this.__schema__ = e[2]),
            (this.__index__ = e.index + e[1].length),
            (this.__last_index__ = e.index + e[0].length + i);
          break;
        }
    }
    return (
      this.__opts__.fuzzyLink &&
        this.__compiled__["http:"] &&
        ((l = t.search(this.re.host_fuzzy_test)),
        l >= 0 &&
          (this.__index__ < 0 || l < this.__index__) &&
          (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null &&
          ((o = n.index + n[1].length),
          (this.__index__ < 0 || o < this.__index__) &&
            ((this.__schema__ = ""), (this.__index__ = o), (this.__last_index__ = n.index + n[0].length)))),
      this.__opts__.fuzzyEmail &&
        this.__compiled__["mailto:"] &&
        ((u = t.indexOf("@")),
        u >= 0 &&
          (r = t.match(this.re.email_fuzzy)) !== null &&
          ((o = r.index + r[1].length),
          (s = r.index + r[0].length),
          (this.__index__ < 0 || o < this.__index__ || (o === this.__index__ && s > this.__last_index__)) &&
            ((this.__schema__ = "mailto:"), (this.__index__ = o), (this.__last_index__ = s)))),
      this.__index__ >= 0
    );
  };
  we.prototype.pretest = function (t) {
    return this.re.pretest.test(t);
  };
  we.prototype.testSchemaAt = function (t, e, n) {
    return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, n, this) : 0;
  };
  we.prototype.match = function (t) {
    const e = [];
    let n = 0;
    this.__index__ >= 0 && this.__text_cache__ === t && (e.push(Pu(this, n)), (n = this.__last_index__));
    let r = n ? t.slice(n) : t;
    for (; this.test(r); ) e.push(Pu(this, n)), (r = r.slice(this.__last_index__)), (n += this.__last_index__);
    return e.length ? e : null;
  };
  we.prototype.matchAtStart = function (t) {
    if (((this.__text_cache__ = t), (this.__index__ = -1), !t.length)) return null;
    const e = this.re.schema_at_start.exec(t);
    if (!e) return null;
    const n = this.testSchemaAt(t, e[2], e[0].length);
    return n
      ? ((this.__schema__ = e[2]),
        (this.__index__ = e.index + e[1].length),
        (this.__last_index__ = e.index + e[0].length + n),
        Pu(this, 0))
      : null;
  };
  we.prototype.tlds = function (t, e) {
    return (
      (t = Array.isArray(t) ? t : [t]),
      e
        ? ((this.__tlds__ = this.__tlds__
            .concat(t)
            .sort()
            .filter(function (n, r, i) {
              return n !== i[r - 1];
            })
            .reverse()),
          ms(this),
          this)
        : ((this.__tlds__ = t.slice()), (this.__tlds_replaced__ = !0), ms(this), this)
    );
  };
  we.prototype.normalize = function (t) {
    t.schema || (t.url = "http://" + t.url),
      t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
  };
  we.prototype.onCompile = function () {};
  const Or = 2147483647,
    He = 36,
    Jc = 1,
    Ki = 26,
    S6 = 38,
    T6 = 700,
    Ny = 72,
    Ly = 128,
    By = "-",
    $6 = /^xn--/,
    D6 = /[^\0-\x7F]/,
    O6 = /[\x2E\u3002\uFF0E\uFF61]/g,
    R6 = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input",
    },
    Ll = He - Jc,
    Ge = Math.floor,
    Bl = String.fromCharCode;
  function Rn(t) {
    throw new RangeError(R6[t]);
  }
  function F6(t, e) {
    const n = [];
    let r = t.length;
    for (; r--; ) n[r] = e(t[r]);
    return n;
  }
  function qy(t, e) {
    const n = t.split("@");
    let r = "";
    n.length > 1 && ((r = n[0] + "@"), (t = n[1])), (t = t.replace(O6, "."));
    const i = t.split("."),
      o = F6(i, e).join(".");
    return r + o;
  }
  function Uy(t) {
    const e = [];
    let n = 0;
    const r = t.length;
    for (; n < r; ) {
      const i = t.charCodeAt(n++);
      if (i >= 55296 && i <= 56319 && n < r) {
        const o = t.charCodeAt(n++);
        (o & 64512) == 56320 ? e.push(((i & 1023) << 10) + (o & 1023) + 65536) : (e.push(i), n--);
      } else e.push(i);
    }
    return e;
  }
  const z6 = (t) => String.fromCodePoint(...t),
    P6 = function (t) {
      return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : He;
    },
    rm = function (t, e) {
      return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
    },
    Zy = function (t, e, n) {
      let r = 0;
      for (t = n ? Ge(t / T6) : t >> 1, t += Ge(t / e); t > (Ll * Ki) >> 1; r += He) t = Ge(t / Ll);
      return Ge(r + ((Ll + 1) * t) / (t + S6));
    },
    Vy = function (t) {
      const e = [],
        n = t.length;
      let r = 0,
        i = Ly,
        o = Ny,
        s = t.lastIndexOf(By);
      s < 0 && (s = 0);
      for (let a = 0; a < s; ++a) t.charCodeAt(a) >= 128 && Rn("not-basic"), e.push(t.charCodeAt(a));
      for (let a = s > 0 ? s + 1 : 0; a < n; ) {
        const l = r;
        for (let c = 1, f = He; ; f += He) {
          a >= n && Rn("invalid-input");
          const h = P6(t.charCodeAt(a++));
          h >= He && Rn("invalid-input"), h > Ge((Or - r) / c) && Rn("overflow"), (r += h * c);
          const p = f <= o ? Jc : f >= o + Ki ? Ki : f - o;
          if (h < p) break;
          const d = He - p;
          c > Ge(Or / d) && Rn("overflow"), (c *= d);
        }
        const u = e.length + 1;
        (o = Zy(r - l, u, l == 0)),
          Ge(r / u) > Or - i && Rn("overflow"),
          (i += Ge(r / u)),
          (r %= u),
          e.splice(r++, 0, i);
      }
      return String.fromCodePoint(...e);
    },
    Hy = function (t) {
      const e = [];
      t = Uy(t);
      const n = t.length;
      let r = Ly,
        i = 0,
        o = Ny;
      for (const l of t) l < 128 && e.push(Bl(l));
      const s = e.length;
      let a = s;
      for (s && e.push(By); a < n; ) {
        let l = Or;
        for (const c of t) c >= r && c < l && (l = c);
        const u = a + 1;
        l - r > Ge((Or - i) / u) && Rn("overflow"), (i += (l - r) * u), (r = l);
        for (const c of t)
          if ((c < r && ++i > Or && Rn("overflow"), c === r)) {
            let f = i;
            for (let h = He; ; h += He) {
              const p = h <= o ? Jc : h >= o + Ki ? Ki : h - o;
              if (f < p) break;
              const d = f - p,
                m = He - p;
              e.push(Bl(rm(p + (d % m), 0))), (f = Ge(d / m));
            }
            e.push(Bl(rm(f, 0))), (o = Zy(i, u, a === s)), (i = 0), ++a;
          }
        ++i, ++r;
      }
      return e.join("");
    },
    I6 = function (t) {
      return qy(t, function (e) {
        return $6.test(e) ? Vy(e.slice(4).toLowerCase()) : e;
      });
    },
    j6 = function (t) {
      return qy(t, function (e) {
        return D6.test(e) ? "xn--" + Hy(e) : e;
      });
    },
    Gy = { version: "2.3.1", ucs2: { decode: Uy, encode: z6 }, decode: Vy, encode: Hy, toASCII: j6, toUnicode: I6 },
    M6 = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 100,
      },
      components: { core: {}, block: {}, inline: {} },
    },
    N6 = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20,
      },
      components: {
        core: { rules: ["normalize", "block", "inline", "text_join"] },
        block: { rules: ["paragraph"] },
        inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
      },
    },
    L6 = {
      options: {
        html: !0,
        xhtmlOut: !0,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        typographer: !1,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20,
      },
      components: {
        core: { rules: ["normalize", "block", "inline", "text_join"] },
        block: {
          rules: [
            "blockquote",
            "code",
            "fence",
            "heading",
            "hr",
            "html_block",
            "lheading",
            "list",
            "reference",
            "paragraph",
          ],
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "html_inline",
            "image",
            "link",
            "newline",
            "text",
          ],
          rules2: ["balance_pairs", "emphasis", "fragments_join"],
        },
      },
    },
    B6 = { default: M6, zero: N6, commonmark: L6 },
    q6 = /^(vbscript|javascript|file|data):/,
    U6 = /^data:image\/(gif|png|jpeg|webp);/;
  function Z6(t) {
    const e = t.trim().toLowerCase();
    return q6.test(e) ? U6.test(e) : !0;
  }
  const Wy = ["http:", "https:", "mailto:"];
  function V6(t) {
    const e = Zc(t, !0);
    if (e.hostname && (!e.protocol || Wy.indexOf(e.protocol) >= 0))
      try {
        e.hostname = Gy.toASCII(e.hostname);
      } catch {}
    return co(Uc(e));
  }
  function H6(t) {
    const e = Zc(t, !0);
    if (e.hostname && (!e.protocol || Wy.indexOf(e.protocol) >= 0))
      try {
        e.hostname = Gy.toUnicode(e.hostname);
      } catch {}
    return Nr(Uc(e), Nr.defaultChars + "%");
  }
  function Te(t, e) {
    if (!(this instanceof Te)) return new Te(t, e);
    e || Hc(t) || ((e = t || {}), (t = "default")),
      (this.inline = new ho()),
      (this.block = new la()),
      (this.core = new Wc()),
      (this.renderer = new Vr()),
      (this.linkify = new we()),
      (this.validateLink = Z6),
      (this.normalizeLink = V6),
      (this.normalizeLinkText = H6),
      (this.utils = WP),
      (this.helpers = sa({}, YP)),
      (this.options = {}),
      this.configure(t),
      e && this.set(e);
  }
  Te.prototype.set = function (t) {
    return sa(this.options, t), this;
  };
  Te.prototype.configure = function (t) {
    const e = this;
    if (Hc(t)) {
      const n = t;
      if (((t = B6[n]), !t)) throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
    }
    if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
    return (
      t.options && e.set(t.options),
      t.components &&
        Object.keys(t.components).forEach(function (n) {
          t.components[n].rules && e[n].ruler.enableOnly(t.components[n].rules),
            t.components[n].rules2 && e[n].ruler2.enableOnly(t.components[n].rules2);
        }),
      this
    );
  };
  Te.prototype.enable = function (t, e) {
    let n = [];
    Array.isArray(t) || (t = [t]),
      ["core", "block", "inline"].forEach(function (i) {
        n = n.concat(this[i].ruler.enable(t, !0));
      }, this),
      (n = n.concat(this.inline.ruler2.enable(t, !0)));
    const r = t.filter(function (i) {
      return n.indexOf(i) < 0;
    });
    if (r.length && !e) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
    return this;
  };
  Te.prototype.disable = function (t, e) {
    let n = [];
    Array.isArray(t) || (t = [t]),
      ["core", "block", "inline"].forEach(function (i) {
        n = n.concat(this[i].ruler.disable(t, !0));
      }, this),
      (n = n.concat(this.inline.ruler2.disable(t, !0)));
    const r = t.filter(function (i) {
      return n.indexOf(i) < 0;
    });
    if (r.length && !e) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
    return this;
  };
  Te.prototype.use = function (t) {
    const e = [this].concat(Array.prototype.slice.call(arguments, 1));
    return t.apply(t, e), this;
  };
  Te.prototype.parse = function (t, e) {
    if (typeof t != "string") throw new Error("Input data should be a String");
    const n = new this.core.State(t, this, e);
    return this.core.process(n), n.tokens;
  };
  Te.prototype.render = function (t, e) {
    return (e = e || {}), this.renderer.render(this.parse(t, e), this.options, e);
  };
  Te.prototype.parseInline = function (t, e) {
    const n = new this.core.State(t, this, e);
    return (n.inlineMode = !0), this.core.process(n), n.tokens;
  };
  Te.prototype.renderInline = function (t, e) {
    return (e = e || {}), this.renderer.render(this.parseInline(t, e), this.options, e);
  };
  const G6 = Te({ html: !1 }).disable("list"),
    W6 = {},
    K6 = (t) => G6.renderInline(t, W6),
    im = globalThis.document,
    J6 = (t) => {
      const e = (im == null ? void 0 : im.createElement("div")) ?? {};
      return e.textContent || e.innerText || "";
    };
  en((t) => {
    const e = (t == null
      ? void 0
      : t.split(`

`)) ?? [""];
    let n = 0;
    return e.map((r, i) => {
      const o = K6(r),
        s = J6(),
        a = n + r.length + 1,
        l = In.parse({ lineNumber: i, start: n, end: a, id: `line-${i}`, text: r, html: o, flatText: s });
      return (n = a), l;
    });
  });
  const X6 = en((t) => {
      t = t
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(
          /\u000b/g,
          `
`,
        );
      const e = /^([0-9/]+[a-z]?)\./g;
      let n = 0,
        r = 0,
        i = "";
      const o = t.split(`
`),
        s = [];
      for (let a = 0; a < o.length; a++) {
        r = n + (o[a].length - 1);
        const l = o[a].match(e);
        l ? (i = l[0]) : (i = "");
        const u = n + i.length,
          c = Math.max(r, u),
          f = o[a].replace(e, ""),
          h = In.parse({ gutter: i, text: f, start: u, end: c, id: `line-${a}`, html: f, flatText: f, lineNumber: a });
        s.push(h), (n = r + 2);
      }
      return s;
    }),
    Y6 = (t, e, n, r) => {
      const i = t.flatText.substring(r.start, r.end);
      return In.parse({ ...t, text: i, flatText: i, html: i, start: e, end: n });
    },
    Q6 = (t, e) => {
      const n = X6(t);
      return ky(n, e, Y6);
    };
  class tj extends Pc {
    constructor() {
      super(...arguments), st(this, "name", "TextLineAdapter");
    }
    parse(e) {
      return Q6(e, this.limit);
    }
  }
  const ej = (t = {}) => Y0(new tj(), t);
  class nj {
    setText(e) {}
  }
  class Ky extends nj {
    fixOffset(e, n) {
      return { start: n.start, end: n.end, modified: !1 };
    }
  }
  function Fo(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var om = { exports: {} },
    sm;
  function rj() {
    return (
      sm ||
        ((sm = 1),
        (function (t, e) {
          (function (n) {
            t.exports = n();
          })(function () {
            return (function () {
              function n(r, i, o) {
                function s(u, c) {
                  if (!i[u]) {
                    if (!r[u]) {
                      var f = typeof Fo == "function" && Fo;
                      if (!c && f) return f(u, !0);
                      if (a) return a(u, !0);
                      var h = new Error("Cannot find module '" + u + "'");
                      throw ((h.code = "MODULE_NOT_FOUND"), h);
                    }
                    var p = (i[u] = { exports: {} });
                    r[u][0].call(
                      p.exports,
                      function (d) {
                        var m = r[u][1][d];
                        return s(m || d);
                      },
                      p,
                      p.exports,
                      n,
                      r,
                      i,
                      o,
                    );
                  }
                  return i[u].exports;
                }
                for (var a = typeof Fo == "function" && Fo, l = 0; l < o.length; l++) s(o[l]);
                return s;
              }
              return n;
            })()(
              {
                1: [
                  function (n, r, i) {
                    function o(E, g, k) {
                      return (g = d(g)), s(E, f() ? Reflect.construct(g, k || [], d(E).constructor) : g.apply(E, k));
                    }
                    function s(E, g) {
                      if (g && (m(g) === "object" || typeof g == "function")) return g;
                      if (g !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                      return a(E);
                    }
                    function a(E) {
                      if (E === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return E;
                    }
                    function l(E, g) {
                      if (typeof g != "function" && g !== null)
                        throw new TypeError("Super expression must either be null or a function");
                      (E.prototype = Object.create(g && g.prototype, {
                        constructor: { value: E, writable: !0, configurable: !0 },
                      })),
                        Object.defineProperty(E, "prototype", { writable: !1 }),
                        g && p(E, g);
                    }
                    function u(E) {
                      var g = typeof Map == "function" ? new Map() : void 0;
                      return (u = function (k) {
                        if (k === null || !h(k)) return k;
                        if (typeof k != "function")
                          throw new TypeError("Super expression must either be null or a function");
                        if (g !== void 0) {
                          if (g.has(k)) return g.get(k);
                          g.set(k, D);
                        }
                        function D() {
                          return c(k, arguments, d(this).constructor);
                        }
                        return (
                          (D.prototype = Object.create(k.prototype, {
                            constructor: { value: D, enumerable: !1, writable: !0, configurable: !0 },
                          })),
                          p(D, k)
                        );
                      })(E);
                    }
                    function c(E, g, k) {
                      if (f()) return Reflect.construct.apply(null, arguments);
                      var D = [null];
                      D.push.apply(D, g);
                      var q = new (E.bind.apply(E, D))();
                      return k && p(q, k.prototype), q;
                    }
                    function f() {
                      try {
                        var E = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                      } catch {}
                      return (f = function () {
                        return !!E;
                      })();
                    }
                    function h(E) {
                      try {
                        return Function.toString.call(E).indexOf("[native code]") !== -1;
                      } catch {
                        return typeof E == "function";
                      }
                    }
                    function p(E, g) {
                      return (p = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (k, D) {
                            return (k.__proto__ = D), k;
                          })(E, g);
                    }
                    function d(E) {
                      return (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (g) {
                            return g.__proto__ || Object.getPrototypeOf(g);
                          })(E);
                    }
                    function m(E) {
                      return (m =
                        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                          ? function (g) {
                              return typeof g;
                            }
                          : function (g) {
                              return g &&
                                typeof Symbol == "function" &&
                                g.constructor === Symbol &&
                                g !== Symbol.prototype
                                ? "symbol"
                                : typeof g;
                            })(E);
                    }
                    function y(E, g) {
                      if (!(E instanceof g)) throw new TypeError("Cannot call a class as a function");
                    }
                    function b(E, g) {
                      for (var k = 0; k < g.length; k++) {
                        var D = g[k];
                        (D.enumerable = D.enumerable || !1),
                          (D.configurable = !0),
                          "value" in D && (D.writable = !0),
                          Object.defineProperty(E, w(D.key), D);
                      }
                    }
                    function _(E, g, k) {
                      return g && b(E.prototype, g), Object.defineProperty(E, "prototype", { writable: !1 }), E;
                    }
                    function w(E) {
                      var g = v(E, "string");
                      return m(g) == "symbol" ? g : String(g);
                    }
                    function v(E, g) {
                      if (m(E) != "object" || !E) return E;
                      var k = E[Symbol.toPrimitive];
                      if (k !== void 0) {
                        var D = k.call(E, g);
                        if (m(D) != "object") return D;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return String(E);
                    }
                    var C = function (E, g) {
                        var k = E.length,
                          D = g - 20;
                        D < 0 && (D = 0);
                        var q = g + 20;
                        q > k && (q = k);
                        var O = function (F) {
                            return F.charCodeAt(0).toString(16).toUpperCase();
                          },
                          T = function (F, J, xt) {
                            return F.substr(J, xt)
                              .replace(/\\/g, "\\\\")
                              .replace(/\x08/g, "\\b")
                              .replace(/\t/g, "\\t")
                              .replace(/\n/g, "\\n")
                              .replace(/\f/g, "\\f")
                              .replace(/\r/g, "\\r")
                              .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ut) {
                                return "\\x0" + O(ut);
                              })
                              .replace(/[\x10-\x1F\x80-\xFF]/g, function (ut) {
                                return "\\x" + O(ut);
                              })
                              .replace(/[\u0100-\u0FFF]/g, function (ut) {
                                return "\\u0" + O(ut);
                              })
                              .replace(/[\u1000-\uFFFF]/g, function (ut) {
                                return "\\u" + O(ut);
                              });
                          };
                        return {
                          prologTrunc: D > 0,
                          prologText: T(E, D, g - D),
                          tokenText: T(E, g, 1),
                          epilogText: T(E, g + 1, q - (g + 1)),
                          epilogTrunc: q < k,
                        };
                      },
                      R = (function () {
                        function E(g, k, D) {
                          var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                            O = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                            T = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                          y(this, E),
                            (this.type = g),
                            (this.value = k),
                            (this.text = D),
                            (this.pos = q),
                            (this.line = O),
                            (this.column = T);
                        }
                        return (
                          _(E, [
                            {
                              key: "toString",
                              value: function () {
                                var g =
                                  arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : function (k, D) {
                                        return D;
                                      };
                                return (
                                  "".concat(g("type", this.type), " ") +
                                  "(value: ".concat(g("value", JSON.stringify(this.value)), ", ") +
                                  "text: ".concat(g("text", JSON.stringify(this.text)), ", ") +
                                  "pos: ".concat(g("pos", this.pos), ", ") +
                                  "line: ".concat(g("line", this.line), ", ") +
                                  "column: ".concat(g("column", this.column), ")")
                                );
                              },
                            },
                            {
                              key: "isA",
                              value: function (g, k) {
                                return g === this.type && (arguments.length !== 2 || k === this.value);
                              },
                            },
                          ]),
                          E
                        );
                      })(),
                      z = (function (E) {
                        function g(k, D, q, O, T) {
                          var F;
                          return (
                            y(this, g),
                            ((F = o(this, g, [k])).name = "ParsingError"),
                            (F.message = k),
                            (F.pos = D),
                            (F.line = q),
                            (F.column = O),
                            (F.input = T),
                            F
                          );
                        }
                        return (
                          l(g, u(Error)),
                          _(g, [
                            {
                              key: "toString",
                              value: function () {
                                for (
                                  var k = C(this.input, this.pos),
                                    D = "line ".concat(this.line, " (column ").concat(this.column, "): "),
                                    q = "",
                                    O = 0;
                                  O < D.length + k.prologText.length;
                                  O++
                                )
                                  q += " ";
                                return (
                                  "Parsing Error: " +
                                  this.message +
                                  `
` +
                                  D +
                                  k.prologText +
                                  k.tokenText +
                                  k.epilogText +
                                  `
` +
                                  q +
                                  "^"
                                );
                              },
                            },
                          ]),
                          g
                        );
                      })(),
                      B = (function () {
                        function E(g) {
                          y(this, E),
                            (this._tokenizr = g),
                            (this._data = {}),
                            (this._repeat = !1),
                            (this._reject = !1),
                            (this._ignore = !1),
                            (this._match = null);
                        }
                        return (
                          _(E, [
                            {
                              key: "data",
                              value: function (g, k) {
                                var D = this._data[g];
                                return arguments.length === 2 && (this._data[g] = k), D;
                              },
                            },
                            {
                              key: "info",
                              value: function () {
                                return {
                                  line: this._tokenizr._line,
                                  column: this._tokenizr._column,
                                  pos: this._tokenizr._pos,
                                  len: this._match[0].length,
                                };
                              },
                            },
                            {
                              key: "push",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).push.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "pop",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).pop.apply(g, arguments);
                              },
                            },
                            {
                              key: "state",
                              value: function () {
                                var g, k;
                                return arguments.length > 0
                                  ? ((k = this._tokenizr).state.apply(k, arguments), this)
                                  : (g = this._tokenizr).state.apply(g, arguments);
                              },
                            },
                            {
                              key: "tag",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).tag.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "tagged",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).tagged.apply(g, arguments);
                              },
                            },
                            {
                              key: "untag",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).untag.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "repeat",
                              value: function () {
                                return this._tokenizr._log("    REPEAT"), (this._repeat = !0), this;
                              },
                            },
                            {
                              key: "reject",
                              value: function () {
                                return this._tokenizr._log("    REJECT"), (this._reject = !0), this;
                              },
                            },
                            {
                              key: "ignore",
                              value: function () {
                                return this._tokenizr._log("    IGNORE"), (this._ignore = !0), this;
                              },
                            },
                            {
                              key: "accept",
                              value: function (g, k) {
                                return (
                                  arguments.length < 2 && (k = this._match[0]),
                                  this._tokenizr._log(
                                    "    ACCEPT: type: ".concat(g, ", value: ") +
                                      ""
                                        .concat(JSON.stringify(k), " (")
                                        .concat(m(k), '), text: "')
                                        .concat(this._match[0], '"'),
                                  ),
                                  this._tokenizr._pending.push(
                                    new R(
                                      g,
                                      k,
                                      this._match[0],
                                      this._tokenizr._pos,
                                      this._tokenizr._line,
                                      this._tokenizr._column,
                                    ),
                                  ),
                                  this
                                );
                              },
                            },
                            {
                              key: "stop",
                              value: function () {
                                return (this._tokenizr._stopped = !0), this;
                              },
                            },
                          ]),
                          E
                        );
                      })(),
                      $ = (function () {
                        function E() {
                          y(this, E),
                            (this._before = null),
                            (this._after = null),
                            (this._finish = null),
                            (this._rules = []),
                            (this._debug = !1),
                            this.reset();
                        }
                        return (
                          _(E, [
                            {
                              key: "reset",
                              value: function () {
                                return (
                                  (this._input = ""),
                                  (this._len = 0),
                                  (this._eof = !1),
                                  (this._pos = 0),
                                  (this._line = 1),
                                  (this._column = 1),
                                  (this._state = ["default"]),
                                  (this._tag = {}),
                                  (this._transaction = []),
                                  (this._pending = []),
                                  (this._stopped = !1),
                                  (this._ctx = new B(this)),
                                  this
                                );
                              },
                            },
                            {
                              key: "error",
                              value: function (g) {
                                return new z(g, this._pos, this._line, this._column, this._input);
                              },
                            },
                            {
                              key: "debug",
                              value: function (g) {
                                return (this._debug = g), this;
                              },
                            },
                            {
                              key: "_log",
                              value: function (g) {
                                this._debug && console.log("tokenizr: ".concat(g));
                              },
                            },
                            {
                              key: "input",
                              value: function (g) {
                                if (typeof g != "string") throw new Error('parameter "input" not a String');
                                return this.reset(), (this._input = g), (this._len = g.length), this;
                              },
                            },
                            {
                              key: "push",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "state" not a String');
                                return (
                                  this._log(
                                    "    STATE (PUSH): " +
                                      "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                      "new: <".concat(g, ">"),
                                  ),
                                  this._state.push(g),
                                  this
                                );
                              },
                            },
                            {
                              key: "pop",
                              value: function () {
                                if (arguments.length !== 0) throw new Error("invalid number of arguments");
                                if (this._state.length < 2) throw new Error("no more custom states to pop");
                                return (
                                  this._log(
                                    "    STATE (POP): " +
                                      "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                      "new: <".concat(this._state[this._state.length - 2], ">"),
                                  ),
                                  this._state.pop()
                                );
                              },
                            },
                            {
                              key: "state",
                              value: function (g) {
                                if (arguments.length === 1) {
                                  if (typeof g != "string") throw new Error('parameter "state" not a String');
                                  return (
                                    this._log(
                                      "    STATE (SET): " +
                                        "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                        "new: <".concat(g, ">"),
                                    ),
                                    (this._state[this._state.length - 1] = g),
                                    this
                                  );
                                }
                                if (arguments.length === 0) return this._state[this._state.length - 1];
                                throw new Error("invalid number of arguments");
                              },
                            },
                            {
                              key: "tag",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._log("    TAG (ADD): ".concat(g)), (this._tag[g] = !0), this;
                              },
                            },
                            {
                              key: "tagged",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._tag[g] === !0;
                              },
                            },
                            {
                              key: "untag",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._log("    TAG (DEL): ".concat(g)), delete this._tag[g], this;
                              },
                            },
                            {
                              key: "before",
                              value: function (g) {
                                return (this._before = g), this;
                              },
                            },
                            {
                              key: "after",
                              value: function (g) {
                                return (this._after = g), this;
                              },
                            },
                            {
                              key: "finish",
                              value: function (g) {
                                return (this._finish = g), this;
                              },
                            },
                            {
                              key: "rule",
                              value: function (g, k, D) {
                                var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                                if (arguments.length === 2 && typeof k == "function") {
                                  var O = [g, k];
                                  (k = O[0]), (D = O[1]), (g = "*");
                                } else if (arguments.length === 3 && typeof k == "function") {
                                  var T = [g, k, D];
                                  (k = T[0]), (D = T[1]), (q = T[2]), (g = "*");
                                }
                                if (typeof g != "string") throw new Error('parameter "state" not a String');
                                if (!(m(k) === "object" && k instanceof RegExp))
                                  throw new Error('parameter "pattern" not a RegExp');
                                if (typeof D != "function") throw new Error('parameter "action" not a Function');
                                if (typeof q != "string") throw new Error('parameter "name" not a String');
                                g = g.split(/\s*,\s*/g).map(function (J) {
                                  var xt = J.split(/\s+/g),
                                    ut = xt.filter(function (ft) {
                                      return ft.match(/^#/) === null;
                                    }),
                                    Zt = xt
                                      .filter(function (ft) {
                                        return ft.match(/^#/) !== null;
                                      })
                                      .map(function (ft) {
                                        return ft.replace(/^#/, "");
                                      });
                                  if (ut.length !== 1) throw new Error("exactly one state required");
                                  return { state: ut[0], tags: Zt };
                                });
                                var F = "g";
                                try {
                                  typeof new RegExp("", "y").sticky == "boolean" && (F = "y");
                                } catch {}
                                return (
                                  typeof k.multiline == "boolean" && k.multiline && (F += "m"),
                                  typeof k.dotAll == "boolean" && k.dotAll && (F += "s"),
                                  typeof k.ignoreCase == "boolean" && k.ignoreCase && (F += "i"),
                                  typeof k.unicode == "boolean" && k.unicode && (F += "u"),
                                  (k = new RegExp(k.source, F)),
                                  this._log(
                                    "rule: configure rule (state: ".concat(g, ", pattern: ").concat(k.source, ")"),
                                  ),
                                  this._rules.push({ state: g, pattern: k, action: D, name: q }),
                                  this
                                );
                              },
                            },
                            {
                              key: "_progress",
                              value: function (g, k) {
                                for (var D = this._line, q = this._column, O = this._input, T = g; T < k; T++) {
                                  var F = O.charAt(T);
                                  F === "\r"
                                    ? (this._column = 1)
                                    : F ===
                                        `
`
                                      ? (this._line++, (this._column = 1))
                                      : F === "	"
                                        ? (this._column += 8 - (this._column % 8))
                                        : this._column++;
                                }
                                this._log(
                                  "    PROGRESS: characters: ".concat(k - g, ", ") +
                                    "from: <line ".concat(D, ", column ").concat(q, ">, ") +
                                    "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                );
                              },
                            },
                            {
                              key: "_tokenize",
                              value: function () {
                                var g = this,
                                  k = function () {
                                    g._eof ||
                                      (g._finish !== null && g._finish.call(g._ctx, g._ctx),
                                      (g._eof = !0),
                                      g._pending.push(new R("EOF", "", "", g._pos, g._line, g._column)));
                                  };
                                if (!(this._stopped || this._pos >= this._len)) {
                                  for (var D = !0; D; ) {
                                    if (((D = !1), this._debug)) {
                                      var q = C(this._input, this._pos),
                                        O = Object.keys(this._tag)
                                          .map(function (At) {
                                            return "#".concat(At);
                                          })
                                          .join(" ");
                                      this._log(
                                        "INPUT: state: <"
                                          .concat(this._state[this._state.length - 1], ">, tags: <")
                                          .concat(O, ">, text: ") +
                                          (q.prologTrunc ? "..." : '"') +
                                          "".concat(q.prologText, "<").concat(q.tokenText, ">").concat(q.epilogText) +
                                          (q.epilogTrunc ? "..." : '"') +
                                          ", at: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                      );
                                    }
                                    for (var T = 0; T < this._rules.length; T++) {
                                      if (this._debug) {
                                        var F = this._rules[T].state
                                          .map(function (At) {
                                            var xe = At.state;
                                            return (
                                              At.tags.length > 0 &&
                                                (xe +=
                                                  " " +
                                                  At.tags
                                                    .map(function (En) {
                                                      return "#".concat(En);
                                                    })
                                                    .join(" ")),
                                              xe
                                            );
                                          })
                                          .join(", ");
                                        this._log(
                                          "  RULE: state(s): <".concat(F, ">, ") +
                                            "pattern: ".concat(this._rules[T].pattern.source),
                                        );
                                      }
                                      var J = !1,
                                        xt = this._rules[T].state.map(function (At) {
                                          return At.state;
                                        }),
                                        ut = xt.indexOf("*");
                                      if ((ut < 0 && (ut = xt.indexOf(this._state[this._state.length - 1])), ut >= 0)) {
                                        J = !0;
                                        var Zt = this._rules[T].state[ut].tags;
                                        (Zt = Zt.filter(function (At) {
                                          return !g._tag[At];
                                        })).length > 0 && (J = !1);
                                      }
                                      if (J) {
                                        this._rules[T].pattern.lastIndex = this._pos;
                                        var ft = this._rules[T].pattern.exec(this._input);
                                        if (
                                          ((this._rules[T].pattern.lastIndex = this._pos),
                                          (ft = this._rules[T].pattern.exec(this._input)) !== null &&
                                            ft.index === this._pos)
                                        ) {
                                          if (
                                            (this._debug && this._log("    MATCHED: " + JSON.stringify(ft)),
                                            (this._ctx._match = ft),
                                            (this._ctx._repeat = !1),
                                            (this._ctx._reject = !1),
                                            (this._ctx._ignore = !1),
                                            this._before !== null &&
                                              this._before.call(this._ctx, this._ctx, ft, this._rules[T]),
                                            this._rules[T].action.call(this._ctx, this._ctx, ft),
                                            this._after !== null &&
                                              this._after.call(this._ctx, this._ctx, ft, this._rules[T]),
                                            this._ctx._reject)
                                          )
                                            continue;
                                          if (this._ctx._repeat) {
                                            D = !0;
                                            break;
                                          }
                                          if (this._ctx._ignore) {
                                            if (
                                              (this._progress(this._pos, this._rules[T].pattern.lastIndex),
                                              (this._pos = this._rules[T].pattern.lastIndex),
                                              this._pos >= this._len)
                                            )
                                              return void k();
                                            D = !0;
                                            break;
                                          }
                                          if (this._pending.length > 0)
                                            return (
                                              this._progress(this._pos, this._rules[T].pattern.lastIndex),
                                              (this._pos = this._rules[T].pattern.lastIndex),
                                              void (this._pos >= this._len && k())
                                            );
                                          throw new Error(
                                            'action of pattern "' +
                                              this._rules[T].pattern.source +
                                              '" neither rejected nor accepted any token(s)',
                                          );
                                        }
                                      }
                                    }
                                  }
                                  throw this.error("token not recognized");
                                }
                                k();
                              },
                            },
                            {
                              key: "token",
                              value: function () {
                                if ((this._pending.length === 0 && this._tokenize(), this._pending.length > 0)) {
                                  var g = this._pending.shift();
                                  return (
                                    this._transaction.length > 0 && this._transaction[0].push(g),
                                    this._log("TOKEN: ".concat(g.toString())),
                                    g
                                  );
                                }
                                return null;
                              },
                            },
                            {
                              key: "tokens",
                              value: function () {
                                for (var g, k = []; (g = this.token()) !== null; ) k.push(g);
                                return k;
                              },
                            },
                            {
                              key: "peek",
                              value: function (g) {
                                if ((g === void 0 && (g = 0), g >= this._pending.length)) {
                                  this._pending.length === 0 && this._tokenize();
                                  for (var k = 0; k < g - this._pending.length; k++) this._tokenize();
                                }
                                if (g >= this._pending.length)
                                  throw new Error("not enough tokens available for peek operation");
                                return this._log("PEEK: ".concat(this._pending[g].toString())), this._pending[g];
                              },
                            },
                            {
                              key: "skip",
                              value: function (g) {
                                g === void 0 && (g = 1);
                                for (var k = 0; k < this._pending.length + g; k++) this._tokenize();
                                if (g > this._pending.length)
                                  throw new Error("not enough tokens available for skip operation");
                                for (; g-- > 0; ) this.token();
                                return this;
                              },
                            },
                            {
                              key: "consume",
                              value: function (g, k) {
                                for (var D = this, q = 0; q < this._pending.length + 1; q++) this._tokenize();
                                if (this._pending.length === 0)
                                  throw new Error("not enough tokens available for consume operation");
                                var O = this.token();
                                this._log("CONSUME: ".concat(O.toString()));
                                var T = function () {
                                  throw new z(
                                    "expected: <type: "
                                      .concat(g, ", value: ")
                                      .concat(JSON.stringify(k), " (")
                                      .concat(m(k), ")>, ") +
                                      "found: <type: "
                                        .concat(O.type, ", value: ")
                                        .concat(JSON.stringify(O.value), " (")
                                        .concat(m(O.value), ")>"),
                                    O.pos,
                                    O.line,
                                    O.column,
                                    D._input,
                                  );
                                };
                                return (
                                  arguments.length !== 2 || O.isA(g, k) ? O.isA(g) || T() : T(JSON.stringify(k), m(k)),
                                  O
                                );
                              },
                            },
                            {
                              key: "begin",
                              value: function () {
                                return (
                                  this._log("BEGIN: level ".concat(this._transaction.length)),
                                  this._transaction.unshift([]),
                                  this
                                );
                              },
                            },
                            {
                              key: "depth",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot determine depth -- no active transaction");
                                return this._transaction[0].length;
                              },
                            },
                            {
                              key: "commit",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot commit transaction -- no active transaction");
                                var g = this._transaction.shift();
                                return (
                                  this._transaction.length > 0 &&
                                    (this._transaction[0] = this._transaction[0].concat(g)),
                                  this._log("COMMIT: level ".concat(this._transaction.length)),
                                  this
                                );
                              },
                            },
                            {
                              key: "rollback",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot rollback transaction -- no active transaction");
                                var g = this._transaction.shift();
                                return (
                                  (this._pending = g.concat(this._pending)),
                                  this._log("ROLLBACK: level ".concat(this._transaction.length)),
                                  this
                                );
                              },
                            },
                            {
                              key: "alternatives",
                              value: function () {
                                for (var g = null, k = [], D = arguments.length, q = new Array(D), O = 0; O < D; O++)
                                  q[O] = arguments[O];
                                for (var T = 0; T < q.length; T++)
                                  try {
                                    this.begin(), (g = q[T].call(this)), this.commit();
                                    break;
                                  } catch (F) {
                                    this._log("EXCEPTION: ".concat(F.toString())),
                                      k.push({ ex: F, depth: this.depth() }),
                                      this.rollback();
                                    continue;
                                  }
                                if (g === null && k.length > 0)
                                  throw (k = k.sort(function (F, J) {
                                    return F.depth - J.depth;
                                  }))[0].ex;
                                return g;
                              },
                            },
                          ]),
                          E
                        );
                      })();
                    ($.Token = R), ($.ParsingError = z), ($.ActionContext = B), (r.exports = $);
                  },
                  {},
                ],
              },
              {},
              [1],
            )(1);
          });
        })(om)),
      om.exports
    );
  }
  var ij = rj();
  const oj = e0(ij);
  function sj(t) {
    const e = new oj();
    return (
      e.rule(/†/, (n) => {
        n.accept("start");
      }),
      e.rule(/\d+\./, (n) => {
        n.ignore();
      }),
      e.rule(/(\s+)|(,)|\./, (n) => {
        n.ignore();
      }),
      e.rule(/[^\s,\.]+/, (n) => {
        n.accept("token");
      }),
      e.input(t),
      e.tokens()
    );
  }
  class aj {
    constructor() {
      st(this, "mapStartCharIndexToToken", {}), st(this, "mapStopCharIndexToToken", {});
    }
    setText(e) {
      sj(e).forEach((n) => {
        const r = n.pos,
          i = n.pos + n.value.length - 1;
        (this.mapStartCharIndexToToken[r] = r), (this.mapStopCharIndexToToken[i] = i);
      });
      for (let n = 0; n < e.length; n++)
        this.mapStartCharIndexToToken[n] ||
          (this.mapStartCharIndexToToken[n] = n > 0 ? this.mapStartCharIndexToToken[n - 1] : 0),
          this.mapStopCharIndexToToken[n] ||
            (this.mapStopCharIndexToToken[n] = n > 0 ? this.mapStopCharIndexToToken[n - 1] : 0);
    }
    fixOffset(e, n) {
      const { start: r, end: i } = n,
        o = this.mapStartCharIndexToToken[r] ?? this.mapStartCharIndexToToken[i],
        s = this.mapStopCharIndexToToken[i] ?? this.mapStopCharIndexToToken[r];
      return { start: o, end: s, modified: o !== r || s !== i };
    }
  }
  const lj = rn({ type: be(["AnnotationType"]).default("AnnotationType"), textType: zt() }),
    uj = rn({
      type: be(["TextualBody"]).default("TextualBody"),
      format: be(["text"]).default("text"),
      language: zt().optional(),
      value: zt(),
      source: zt().optional(),
    }),
    cj = be(["tagging"]),
    fj = rn({
      type: be(["TextualBody"]).default("TextualBody"),
      purpose: cj.default("tagging"),
      value: zt().optional(),
    }),
    hj = rn({
      id: zt().optional(),
      type: be(["SpecificResource"]).default("SpecificResource"),
      purpose: be(["describing"]).default("describing"),
      value: xz(),
      source: zt().optional(),
    }),
    am = lj.or(uj).or(fj).or(hj),
    pj = rn({ type: be(["TextPositionSelector"]).default("TextPositionSelector"), start: ze(), end: ze() }),
    dj = rn({
      source: zt().optional(),
      textDirection: be(["ltr", "rtl"]).optional(),
      type: be(["Text"]).default("Text"),
      processingLanguage: zt().optional(),
      selector: pj.optional(),
    }),
    lm = dj;
  be(["http://www.w3.org/ns/anno.jsonld"]).default("http://www.w3.org/ns/anno.jsonld");
  rn({
    id: zt(),
    "@context": zt().default("http://www.w3.org/ns/anno.jsonld"),
    motivation: be(["classifying", "tagging"]).default("classifying"),
    body: Ou(am).or(am),
    target: Ou(lm).or(lm),
  });
  const Jy = (t) => (t == null ? void 0 : t.color) || pc("#4B7BF5"),
    Xy = (t) => (t == null ? void 0 : t.target) === "gutter",
    Yy = {
      gutter: { width: 3, gap: 6 },
      text: { padding: 3, lineHeight: 22, borderRadius: 3, border: 2, handleRadius: 6 },
      hover: { color: { border: "rgba(100, 100, 100, 0.5)", fill: "rgba(1, 1, 1, 0.1)" } },
    };
  class Qy extends J0 {
    constructor() {
      super(...arguments),
        st(this, "originalAnnotations", new Map()),
        st(this, "create", !1),
        st(this, "edit", !1),
        st(this, "config"),
        st(this, "colorFn", Jy),
        st(this, "gutterFn", Xy),
        st(this, "text"),
        st(this, "snapper", new Ky());
    }
    setText(e) {
      (this.text = e), this.snapper.setText(e);
    }
    color(e) {
      return this.colorFn(this.getAnnotation(e.id));
    }
    isGutter(e) {
      return this.gutterFn(this.getAnnotation(e.id));
    }
    hover(e) {
      return !0;
    }
    createAnnotation() {
      return { id: Zs(), isGutter: !1, color: pc("#f51720") };
    }
    setConfig(e, n) {
      switch (e) {
        case "edit":
          this.edit = n;
          break;
        case "create":
          this.create = n;
          break;
        case "config":
          (this.config = Qv(Zv(Yy), n)), this.changeConfig();
          break;
        case "snapper":
          (this.snapper = n), this.snapper.setText(this.text);
          break;
        default:
          console.warn("Unsupported config key:", n);
      }
    }
    addAnnotation(e, n) {
      this.originalAnnotations.set(e, n);
    }
    getAnnotation(e) {
      return this.originalAnnotations.get(e);
    }
  }
  const gj = (t, e) => (
    e.edit && (t.edit = e.edit),
    e.create && (t.create = e.create),
    (t.config = Qv(Zv(Yy), e.config)),
    (t.snapper = e.snapper ?? new Ky()),
    (t.colorFn = e.colorFn ?? Jy),
    (t.gutterFn = e.gutterFn ?? Xy),
    t
  );
  class mj extends Qy {
    constructor() {
      super(...arguments), st(this, "name", "DefaultAnnotationAdapter");
    }
    parse(e) {
      const n = Qz.safeParse(e);
      let r;
      return (
        n.success ? (r = n.data) : (console.warn(e, n.error), (r = e)),
        (r.isGutter = this.gutterFn(r)),
        super.addAnnotation(r.id, e),
        r
      );
    }
    format(e, n, r) {
      if (!e) return null;
      if (!r) return this.getAnnotation(e.id);
      const i = xy.safeParse({ ...e, textSelection: this.text.substring(e.start, e.end + 1) });
      let o;
      return i.success ? (o = i.data) : (console.warn(e, i.error), (o = e)), super.addAnnotation(e.id, o), o;
    }
  }
  const _j = (t = {}) => gj(new mj(), t),
    ci = new Map(),
    vj = (t, e = {}) => {
      if (ci.has(t))
        return (
          console.warn(
            "AnnotatedText with this ID already exists:",
            t,
            "the original will be returned, params are ignored. ",
          ),
          ci.get(t)
        );
      let n;
      e.text instanceof Pc ? (n = e.text) : (n = aP(e.text ?? {}));
      let r;
      e.annotation instanceof Qy ? (r = e.annotation) : (r = _j(e.annotation ?? {}));
      const i = new GO(t, n, r);
      return (
        ci.set(t, i),
        i.on("destroy", () => {
          ci.delete(t), Ce.verbose("AnnotatedText with ID", t, "has been destroyed and removed from cache.");
        }),
        i
      );
    },
    yj = (t) => {
      const e = ci.get(t);
      if (!e) throw new Error("AnnotatedText with this ID does not exist");
      return e;
    };
  var tb = typeof global == "object" && global && global.Object === Object && global,
    bj = typeof self == "object" && self && self.Object === Object && self,
    an = tb || bj || Function("return this")(),
    Qe = an.Symbol,
    eb = Object.prototype,
    wj = eb.hasOwnProperty,
    xj = eb.toString,
    ni = Qe ? Qe.toStringTag : void 0;
  function kj(t) {
    var e = wj.call(t, ni),
      n = t[ni];
    try {
      t[ni] = void 0;
      var r = !0;
    } catch {}
    var i = xj.call(t);
    return r && (e ? (t[ni] = n) : delete t[ni]), i;
  }
  var Aj = Object.prototype,
    Ej = Aj.toString;
  function Cj(t) {
    return Ej.call(t);
  }
  var Sj = "[object Null]",
    Tj = "[object Undefined]",
    um = Qe ? Qe.toStringTag : void 0;
  function Hr(t) {
    return t == null ? (t === void 0 ? Tj : Sj) : um && um in Object(t) ? kj(t) : Cj(t);
  }
  function Gr(t) {
    return t != null && typeof t == "object";
  }
  var $j = "[object Symbol]";
  function Xc(t) {
    return typeof t == "symbol" || (Gr(t) && Hr(t) == $j);
  }
  function Dj(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
    return i;
  }
  var Un = Array.isArray,
    cm = Qe ? Qe.prototype : void 0,
    fm = cm ? cm.toString : void 0;
  function nb(t) {
    if (typeof t == "string") return t;
    if (Un(t)) return Dj(t, nb) + "";
    if (Xc(t)) return fm ? fm.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function Br(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function Oj(t) {
    return t;
  }
  var Rj = "[object AsyncFunction]",
    Fj = "[object Function]",
    zj = "[object GeneratorFunction]",
    Pj = "[object Proxy]";
  function rb(t) {
    if (!Br(t)) return !1;
    var e = Hr(t);
    return e == Fj || e == zj || e == Rj || e == Pj;
  }
  var ql = an["__core-js_shared__"],
    hm = (function () {
      var t = /[^.]+$/.exec((ql && ql.keys && ql.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function Ij(t) {
    return !!hm && hm in t;
  }
  var jj = Function.prototype,
    Mj = jj.toString;
  function gr(t) {
    if (t != null) {
      try {
        return Mj.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var Nj = /[\\^$.*+?()[\]{}|]/g,
    Lj = /^\[object .+?Constructor\]$/,
    Bj = Function.prototype,
    qj = Object.prototype,
    Uj = Bj.toString,
    Zj = qj.hasOwnProperty,
    Vj = RegExp(
      "^" +
        Uj.call(Zj)
          .replace(Nj, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function Hj(t) {
    if (!Br(t) || Ij(t)) return !1;
    var e = rb(t) ? Vj : Lj;
    return e.test(gr(t));
  }
  function Gj(t, e) {
    return t == null ? void 0 : t[e];
  }
  function mr(t, e) {
    var n = Gj(t, e);
    return Hj(n) ? n : void 0;
  }
  var Iu = mr(an, "WeakMap"),
    pm = Object.create,
    Wj = (function () {
      function t() {}
      return function (e) {
        if (!Br(e)) return {};
        if (pm) return pm(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function Kj(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }
    return t.apply(e, n);
  }
  var Jj = 800,
    Xj = 16,
    Yj = Date.now;
  function Qj(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = Yj(),
        i = Xj - (r - n);
      if (((n = r), i > 0)) {
        if (++e >= Jj) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function t4(t) {
    return function () {
      return t;
    };
  }
  var _s = (function () {
      try {
        var t = mr(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    e4 = _s
      ? function (t, e) {
          return _s(t, "toString", { configurable: !0, enumerable: !1, value: t4(e), writable: !0 });
        }
      : Oj,
    n4 = Qj(e4);
  function r4(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var i4 = 9007199254740991,
    o4 = /^(?:0|[1-9]\d*)$/;
  function Yc(t, e) {
    var n = typeof t;
    return (e = e ?? i4), !!e && (n == "number" || (n != "symbol" && o4.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function s4(t, e, n) {
    e == "__proto__" && _s ? _s(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function ib(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var a4 = Object.prototype,
    l4 = a4.hasOwnProperty;
  function ob(t, e, n) {
    var r = t[e];
    (!(l4.call(t, e) && ib(r, n)) || (n === void 0 && !(e in t))) && s4(t, e, n);
  }
  var dm = Math.max;
  function u4(t, e, n) {
    return (
      (e = dm(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, i = -1, o = dm(r.length - e, 0), s = Array(o); ++i < o; ) s[i] = r[e + i];
        i = -1;
        for (var a = Array(e + 1); ++i < e; ) a[i] = r[i];
        return (a[e] = n(s)), Kj(t, this, a);
      }
    );
  }
  var c4 = 9007199254740991;
  function Qc(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= c4;
  }
  function f4(t) {
    return t != null && Qc(t.length) && !rb(t);
  }
  var h4 = Object.prototype;
  function sb(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || h4;
    return t === n;
  }
  function p4(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var d4 = "[object Arguments]";
  function gm(t) {
    return Gr(t) && Hr(t) == d4;
  }
  var ab = Object.prototype,
    g4 = ab.hasOwnProperty,
    m4 = ab.propertyIsEnumerable,
    tf = gm(
      (function () {
        return arguments;
      })(),
    )
      ? gm
      : function (t) {
          return Gr(t) && g4.call(t, "callee") && !m4.call(t, "callee");
        };
  function _4() {
    return !1;
  }
  var lb = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    mm = lb && typeof It == "object" && It && !It.nodeType && It,
    v4 = mm && mm.exports === lb,
    _m = v4 ? an.Buffer : void 0,
    y4 = _m ? _m.isBuffer : void 0,
    ub = y4 || _4,
    b4 = "[object Arguments]",
    w4 = "[object Array]",
    x4 = "[object Boolean]",
    k4 = "[object Date]",
    A4 = "[object Error]",
    E4 = "[object Function]",
    C4 = "[object Map]",
    S4 = "[object Number]",
    T4 = "[object Object]",
    $4 = "[object RegExp]",
    D4 = "[object Set]",
    O4 = "[object String]",
    R4 = "[object WeakMap]",
    F4 = "[object ArrayBuffer]",
    z4 = "[object DataView]",
    P4 = "[object Float32Array]",
    I4 = "[object Float64Array]",
    j4 = "[object Int8Array]",
    M4 = "[object Int16Array]",
    N4 = "[object Int32Array]",
    L4 = "[object Uint8Array]",
    B4 = "[object Uint8ClampedArray]",
    q4 = "[object Uint16Array]",
    U4 = "[object Uint32Array]",
    Ft = {};
  Ft[P4] = Ft[I4] = Ft[j4] = Ft[M4] = Ft[N4] = Ft[L4] = Ft[B4] = Ft[q4] = Ft[U4] = !0;
  Ft[b4] =
    Ft[w4] =
    Ft[F4] =
    Ft[x4] =
    Ft[z4] =
    Ft[k4] =
    Ft[A4] =
    Ft[E4] =
    Ft[C4] =
    Ft[S4] =
    Ft[T4] =
    Ft[$4] =
    Ft[D4] =
    Ft[O4] =
    Ft[R4] =
      !1;
  function Z4(t) {
    return Gr(t) && Qc(t.length) && !!Ft[Hr(t)];
  }
  function ef(t) {
    return function (e) {
      return t(e);
    };
  }
  var cb = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    Ei = cb && typeof It == "object" && It && !It.nodeType && It,
    V4 = Ei && Ei.exports === cb,
    Ul = V4 && tb.process,
    qr = (function () {
      try {
        var t = Ei && Ei.require && Ei.require("util").types;
        return t || (Ul && Ul.binding && Ul.binding("util"));
      } catch {}
    })(),
    vm = qr && qr.isTypedArray,
    H4 = vm ? ef(vm) : Z4,
    G4 = Object.prototype,
    W4 = G4.hasOwnProperty;
  function K4(t, e) {
    var n = Un(t),
      r = !n && tf(t),
      i = !n && !r && ub(t),
      o = !n && !r && !i && H4(t),
      s = n || r || i || o,
      a = s ? p4(t.length, String) : [],
      l = a.length;
    for (var u in t)
      W4.call(t, u) &&
        !(
          s &&
          (u == "length" ||
            (i && (u == "offset" || u == "parent")) ||
            (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            Yc(u, l))
        ) &&
        a.push(u);
    return a;
  }
  function fb(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var J4 = fb(Object.keys, Object),
    X4 = Object.prototype,
    Y4 = X4.hasOwnProperty;
  function Q4(t) {
    if (!sb(t)) return J4(t);
    var e = [];
    for (var n in Object(t)) Y4.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function tM(t) {
    return f4(t) ? K4(t) : Q4(t);
  }
  var eM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    nM = /^\w*$/;
  function rM(t, e) {
    if (Un(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || Xc(t)
      ? !0
      : nM.test(t) || !eM.test(t) || (e != null && t in Object(e));
  }
  var Ji = mr(Object, "create");
  function iM() {
    (this.__data__ = Ji ? Ji(null) : {}), (this.size = 0);
  }
  function oM(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var sM = "__lodash_hash_undefined__",
    aM = Object.prototype,
    lM = aM.hasOwnProperty;
  function uM(t) {
    var e = this.__data__;
    if (Ji) {
      var n = e[t];
      return n === sM ? void 0 : n;
    }
    return lM.call(e, t) ? e[t] : void 0;
  }
  var cM = Object.prototype,
    fM = cM.hasOwnProperty;
  function hM(t) {
    var e = this.__data__;
    return Ji ? e[t] !== void 0 : fM.call(e, t);
  }
  var pM = "__lodash_hash_undefined__";
  function dM(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Ji && e === void 0 ? pM : e), this;
  }
  function or(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  or.prototype.clear = iM;
  or.prototype.delete = oM;
  or.prototype.get = uM;
  or.prototype.has = hM;
  or.prototype.set = dM;
  function gM() {
    (this.__data__ = []), (this.size = 0);
  }
  function ca(t, e) {
    for (var n = t.length; n--; ) if (ib(t[n][0], e)) return n;
    return -1;
  }
  var mM = Array.prototype,
    _M = mM.splice;
  function vM(t) {
    var e = this.__data__,
      n = ca(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : _M.call(e, n, 1), --this.size, !0;
  }
  function yM(t) {
    var e = this.__data__,
      n = ca(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function bM(t) {
    return ca(this.__data__, t) > -1;
  }
  function wM(t, e) {
    var n = this.__data__,
      r = ca(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function An(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  An.prototype.clear = gM;
  An.prototype.delete = vM;
  An.prototype.get = yM;
  An.prototype.has = bM;
  An.prototype.set = wM;
  var Xi = mr(an, "Map");
  function xM() {
    (this.size = 0), (this.__data__ = { hash: new or(), map: new (Xi || An)(), string: new or() });
  }
  function kM(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function fa(t, e) {
    var n = t.__data__;
    return kM(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function AM(t) {
    var e = fa(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function EM(t) {
    return fa(this, t).get(t);
  }
  function CM(t) {
    return fa(this, t).has(t);
  }
  function SM(t, e) {
    var n = fa(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function Zn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Zn.prototype.clear = xM;
  Zn.prototype.delete = AM;
  Zn.prototype.get = EM;
  Zn.prototype.has = CM;
  Zn.prototype.set = SM;
  var TM = "Expected a function";
  function nf(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(TM);
    var n = function () {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, r);
      return (n.cache = o.set(i, s) || o), s;
    };
    return (n.cache = new (nf.Cache || Zn)()), n;
  }
  nf.Cache = Zn;
  var $M = 500;
  function DM(t) {
    var e = nf(t, function (r) {
        return n.size === $M && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var OM = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    RM = /\\(\\)?/g,
    FM = DM(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(OM, function (n, r, i, o) {
          e.push(i ? o.replace(RM, "$1") : r || n);
        }),
        e
      );
    });
  function zM(t) {
    return t == null ? "" : nb(t);
  }
  function ha(t, e) {
    return Un(t) ? t : rM(t, e) ? [t] : FM(zM(t));
  }
  function rf(t) {
    if (typeof t == "string" || Xc(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function PM(t, e) {
    e = ha(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[rf(e[n++])];
    return n && n == r ? t : void 0;
  }
  function hb(t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
    return t;
  }
  var ym = Qe ? Qe.isConcatSpreadable : void 0;
  function IM(t) {
    return Un(t) || tf(t) || !!(ym && t && t[ym]);
  }
  function jM(t, e, n, r, i) {
    var o = -1,
      s = t.length;
    for (n || (n = IM), i || (i = []); ++o < s; ) {
      var a = t[o];
      n(a) ? hb(i, a) : (i[i.length] = a);
    }
    return i;
  }
  function MM(t) {
    var e = t == null ? 0 : t.length;
    return e ? jM(t) : [];
  }
  function NM(t) {
    return n4(u4(t, void 0, MM), t + "");
  }
  var LM = fb(Object.getPrototypeOf, Object);
  function BM() {
    (this.__data__ = new An()), (this.size = 0);
  }
  function qM(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function UM(t) {
    return this.__data__.get(t);
  }
  function ZM(t) {
    return this.__data__.has(t);
  }
  var VM = 200;
  function HM(t, e) {
    var n = this.__data__;
    if (n instanceof An) {
      var r = n.__data__;
      if (!Xi || r.length < VM - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new Zn(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Wr(t) {
    var e = (this.__data__ = new An(t));
    this.size = e.size;
  }
  Wr.prototype.clear = BM;
  Wr.prototype.delete = qM;
  Wr.prototype.get = UM;
  Wr.prototype.has = ZM;
  Wr.prototype.set = HM;
  var pb = typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
    bm = pb && typeof It == "object" && It && !It.nodeType && It,
    GM = bm && bm.exports === pb,
    wm = GM ? an.Buffer : void 0;
  wm && wm.allocUnsafe;
  function WM(t, e) {
    return t.slice();
  }
  function KM(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
      var s = t[n];
      e(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  function JM() {
    return [];
  }
  var XM = Object.prototype,
    YM = XM.propertyIsEnumerable,
    xm = Object.getOwnPropertySymbols,
    QM = xm
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              KM(xm(t), function (e) {
                return YM.call(t, e);
              }));
        }
      : JM;
  function tN(t, e, n) {
    var r = e(t);
    return Un(t) ? r : hb(r, n(t));
  }
  function eN(t) {
    return tN(t, tM, QM);
  }
  var ju = mr(an, "DataView"),
    Mu = mr(an, "Promise"),
    Nu = mr(an, "Set"),
    km = "[object Map]",
    nN = "[object Object]",
    Am = "[object Promise]",
    Em = "[object Set]",
    Cm = "[object WeakMap]",
    Sm = "[object DataView]",
    rN = gr(ju),
    iN = gr(Xi),
    oN = gr(Mu),
    sN = gr(Nu),
    aN = gr(Iu),
    hn = Hr;
  ((ju && hn(new ju(new ArrayBuffer(1))) != Sm) ||
    (Xi && hn(new Xi()) != km) ||
    (Mu && hn(Mu.resolve()) != Am) ||
    (Nu && hn(new Nu()) != Em) ||
    (Iu && hn(new Iu()) != Cm)) &&
    (hn = function (t) {
      var e = Hr(t),
        n = e == nN ? t.constructor : void 0,
        r = n ? gr(n) : "";
      if (r)
        switch (r) {
          case rN:
            return Sm;
          case iN:
            return km;
          case oN:
            return Am;
          case sN:
            return Em;
          case aN:
            return Cm;
        }
      return e;
    });
  var lN = Object.prototype,
    uN = lN.hasOwnProperty;
  function cN(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && uN.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var Tm = an.Uint8Array;
  function of(t) {
    var e = new t.constructor(t.byteLength);
    return new Tm(e).set(new Tm(t)), e;
  }
  function fN(t, e) {
    var n = of(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var hN = /\w*$/;
  function pN(t) {
    var e = new t.constructor(t.source, hN.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var $m = Qe ? Qe.prototype : void 0,
    Dm = $m ? $m.valueOf : void 0;
  function dN(t) {
    return Dm ? Object(Dm.call(t)) : {};
  }
  function gN(t, e) {
    var n = of(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var mN = "[object Boolean]",
    _N = "[object Date]",
    vN = "[object Map]",
    yN = "[object Number]",
    bN = "[object RegExp]",
    wN = "[object Set]",
    xN = "[object String]",
    kN = "[object Symbol]",
    AN = "[object ArrayBuffer]",
    EN = "[object DataView]",
    CN = "[object Float32Array]",
    SN = "[object Float64Array]",
    TN = "[object Int8Array]",
    $N = "[object Int16Array]",
    DN = "[object Int32Array]",
    ON = "[object Uint8Array]",
    RN = "[object Uint8ClampedArray]",
    FN = "[object Uint16Array]",
    zN = "[object Uint32Array]";
  function PN(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case AN:
        return of(t);
      case mN:
      case _N:
        return new r(+t);
      case EN:
        return fN(t);
      case CN:
      case SN:
      case TN:
      case $N:
      case DN:
      case ON:
      case RN:
      case FN:
      case zN:
        return gN(t);
      case vN:
        return new r();
      case yN:
      case xN:
        return new r(t);
      case bN:
        return pN(t);
      case wN:
        return new r();
      case kN:
        return dN(t);
    }
  }
  function IN(t) {
    return typeof t.constructor == "function" && !sb(t) ? Wj(LM(t)) : {};
  }
  var jN = "[object Map]";
  function MN(t) {
    return Gr(t) && hn(t) == jN;
  }
  var Om = qr && qr.isMap,
    NN = Om ? ef(Om) : MN,
    LN = "[object Set]";
  function BN(t) {
    return Gr(t) && hn(t) == LN;
  }
  var Rm = qr && qr.isSet,
    qN = Rm ? ef(Rm) : BN,
    db = "[object Arguments]",
    UN = "[object Array]",
    ZN = "[object Boolean]",
    VN = "[object Date]",
    HN = "[object Error]",
    gb = "[object Function]",
    GN = "[object GeneratorFunction]",
    WN = "[object Map]",
    KN = "[object Number]",
    mb = "[object Object]",
    JN = "[object RegExp]",
    XN = "[object Set]",
    YN = "[object String]",
    QN = "[object Symbol]",
    t8 = "[object WeakMap]",
    e8 = "[object ArrayBuffer]",
    n8 = "[object DataView]",
    r8 = "[object Float32Array]",
    i8 = "[object Float64Array]",
    o8 = "[object Int8Array]",
    s8 = "[object Int16Array]",
    a8 = "[object Int32Array]",
    l8 = "[object Uint8Array]",
    u8 = "[object Uint8ClampedArray]",
    c8 = "[object Uint16Array]",
    f8 = "[object Uint32Array]",
    St = {};
  St[db] =
    St[UN] =
    St[e8] =
    St[n8] =
    St[ZN] =
    St[VN] =
    St[r8] =
    St[i8] =
    St[o8] =
    St[s8] =
    St[a8] =
    St[WN] =
    St[KN] =
    St[mb] =
    St[JN] =
    St[XN] =
    St[YN] =
    St[QN] =
    St[l8] =
    St[u8] =
    St[c8] =
    St[f8] =
      !0;
  St[HN] = St[gb] = St[t8] = !1;
  function Vo(t, e, n, r, i, o) {
    var s;
    if (s !== void 0) return s;
    if (!Br(t)) return t;
    var a = Un(t);
    if (a) s = cN(t);
    else {
      var l = hn(t),
        u = l == gb || l == GN;
      if (ub(t)) return WM(t);
      if (l == mb || l == db || (u && !i)) s = u ? {} : IN(t);
      else {
        if (!St[l]) return i ? t : {};
        s = PN(t, l);
      }
    }
    o || (o = new Wr());
    var c = o.get(t);
    if (c) return c;
    o.set(t, s),
      qN(t)
        ? t.forEach(function (p) {
            s.add(Vo(p, e, n, p, t, o));
          })
        : NN(t) &&
          t.forEach(function (p, d) {
            s.set(d, Vo(p, e, n, d, t, o));
          });
    var f = eN,
      h = a ? void 0 : f(t);
    return (
      r4(h || t, function (p, d) {
        h && ((d = p), (p = t[d])), ob(s, d, Vo(p, e, n, d, t, o));
      }),
      s
    );
  }
  var h8 = 1,
    p8 = 4;
  function jn(t) {
    return Vo(t, h8 | p8);
  }
  function d8(t, e) {
    return t != null && e in Object(t);
  }
  function g8(t, e, n) {
    e = ha(e, t);
    for (var r = -1, i = e.length, o = !1; ++r < i; ) {
      var s = rf(e[r]);
      if (!(o = t != null && n(t, s))) break;
      t = t[s];
    }
    return o || ++r != i ? o : ((i = t == null ? 0 : t.length), !!i && Qc(i) && Yc(s, i) && (Un(t) || tf(t)));
  }
  function m8(t, e) {
    return t != null && g8(t, e, d8);
  }
  function _8(t, e, n, r) {
    if (!Br(t)) return t;
    e = ha(e, t);
    for (var i = -1, o = e.length, s = o - 1, a = t; a != null && ++i < o; ) {
      var l = rf(e[i]),
        u = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (i != s) {
        var c = a[l];
        (u = void 0), u === void 0 && (u = Br(c) ? c : Yc(e[i + 1]) ? [] : {});
      }
      ob(a, l, u), (a = a[l]);
    }
    return t;
  }
  function v8(t, e, n) {
    for (var r = -1, i = e.length, o = {}; ++r < i; ) {
      var s = e[r],
        a = PM(t, s);
      n(a, s) && _8(o, ha(s, t), a);
    }
    return o;
  }
  function y8(t, e) {
    return v8(t, e, function (n, r) {
      return m8(t, r);
    });
  }
  var fi = NM(function (t, e) {
    return t == null ? {} : y8(t, e);
  });
  const b8 = ["id"],
    vs = Gt({
      __name: "TextAnnotation",
      props: { fullTextId: {}, annotationId: {}, limit: {}, annotations: {}, text: {}, allowEdit: { type: Boolean } },
      emits: ["modifyAnnotations", "doubleClickAnnotation"],
      setup(t, { emit: e }) {
        const n = t,
          r = e,
          i = mt(!1),
          o = (l) => `annotated-edit--${l}`,
          s = o(n.annotationId ?? n.fullTextId);
        let a;
        return (
          oc(() => {
            const l = n.limit ? fi(n.limit, ["start", "end"]) : void 0;
            a = vj(s, { text: ej({ limit: l }), annotation: { edit: n.allowEdit, create: !1, snapper: new aj() } })
              .setText(n.text, !1)
              .setAnnotations(n.annotations)
              .on("double-click", ({ data: u }) => {
                r("doubleClickAnnotation", u.annotation);
              })
              .on("annotation-edit--start", ({}) => {
                i.value = !0;
              })
              .on("annotation-edit--move", ({ data: u }) => {
                const c = u.annotation,
                  f = o(n.annotationId ? n.fullTextId : c.id);
                try {
                  const h = yj(f);
                  if (!h) {
                    console.warn("No annotated text found for id:", f);
                    return;
                  }
                  if (!n.annotationId) {
                    const p = fi(c, ["start", "end"]);
                  }
                  h.updateAnnotation(c.id, c);
                } catch {}
              })
              .on("annotation-edit--end", ({ data: u }) => {
                (i.value = !1), r("modifyAnnotations", fi(u.annotation, ["id", "start", "end"]));
              });
          }),
          Re(
            () => n.text,
            (l) => {
              if (!i.value)
                try {
                  a == null || a.setText(l);
                } catch (u) {
                  console.error("Error setting text in textAnnotation:", u);
                }
            },
            { deep: !0 },
          ),
          Re(
            () => n.limit,
            (l, u) => {
              if (i.value) return;
              const c = n.limit ? fi(n.limit, ["start", "end"]) : void 0;
              a == null || a.changeTextAdapterConfig("limit", c);
            },
            { deep: !0 },
          ),
          Re(
            () => n.annotations,
            (l) => {
              i.value || a == null || a.setAnnotations(l);
            },
            { deep: !0 },
          ),
          sc(() => {
            a.destroy();
          }),
          (l, u) => (Y(), Q("div", { id: V(s) }, null, 8, b8))
        );
      },
    }),
    w8 = (t, e) => {
      const n = t.__vccOpts || t;
      for (const [r, i] of e) n[r] = i;
      return n;
    },
    x8 = {},
    k8 = {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "h-6 w-6",
    };
  function A8(t, e) {
    return (
      Y(),
      Q(
        "svg",
        k8,
        e[0] ||
          (e[0] = [
            N(
              "path",
              {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M3 3v18h18V6l-3-3H3ZM7.5 3v6h9V3M6 21v-9h12v9M14.25 5.25v1.5",
              },
              null,
              -1,
            ),
          ]),
      )
    );
  }
  const E8 = w8(x8, [["render", A8]]),
    C8 = { key: 0 },
    S8 = { class: "label cursor-pointer gap-2" },
    T8 = ["name", "disabled", "checked"],
    $8 = { class: "w-full" },
    D8 = ["disabled", "data-tip"],
    Fm = Gt({
      __name: "AnnotationEditItem",
      props: {
        textId: {},
        annotation: {},
        tip: {},
        selectedAnnotation: { type: Boolean },
        disabled: { type: Boolean },
        text: {},
        allowEdit: { type: Boolean },
      },
      emits: ["confirmAnnotation", "changeSelected", "modifyAnnotations"],
      setup(t, { emit: e }) {
        const n = e,
          r = () => {
            n("confirmAnnotation");
          },
          i = () => {
            n("changeSelected");
          };
        return (o, s) =>
          o.annotation
            ? (Y(),
              Q("div", C8, [
                N("label", S8, [
                  o.annotation
                    ? (Y(),
                      Q(
                        "input",
                        {
                          key: 0,
                          type: "radio",
                          name: o.annotation.id,
                          class: "radio radio-success",
                          disabled: o.disabled,
                          checked: o.selectedAnnotation,
                          onClick: i,
                        },
                        null,
                        8,
                        T8,
                      ))
                    : oe("", !0),
                  N("div", $8, [
                    at(
                      vs,
                      {
                        annotations: [o.annotation],
                        limit: o.annotation,
                        text: o.text,
                        "allow-edit": o.allowEdit ?? !1,
                        "annotation-id": o.allowEdit ? o.annotation.id : `read-only${o.annotation.id}`,
                        "full-text-id": o.textId,
                        onModifyAnnotations: s[0] || (s[0] = (a) => n("modifyAnnotations", a)),
                      },
                      null,
                      8,
                      ["annotations", "limit", "text", "allow-edit", "annotation-id", "full-text-id"],
                    ),
                  ]),
                  o.annotation
                    ? (Y(),
                      Q(
                        "button",
                        {
                          key: 1,
                          disabled: o.disabled,
                          class: "btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]",
                          "data-tip": o.tip,
                          onClick: r,
                        },
                        [at(E8)],
                        8,
                        D8,
                      ))
                    : oe("", !0),
                ]),
              ]))
            : oe("", !0);
      },
    }),
    O8 = { class: "py-2" },
    R8 = { class: "text-sm text-content" },
    _b = Gt({
      __name: "AnnotationMetadata",
      props: { annotation: {} },
      setup(t) {
        return (
          console.table(t.annotation.metadata),
          (n, r) => {
            var i;
            return (
              Y(),
              Q(
                $t,
                null,
                [
                  N("p", O8, [
                    r[0] || (r[0] = N("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                    yn(" " + jt((i = n.annotation.metadata) == null ? void 0 : i.lineLinguisticCharacteristic), 1),
                  ]),
                  r[1] || (r[1] = N("strong", { class: "underline" }, "Metadata", -1)),
                  N("ul", R8, [
                    (Y(!0),
                    Q(
                      $t,
                      null,
                      me(
                        n.annotation.properties,
                        (o) => (
                          Y(),
                          Q("li", { key: o.id_name }, [
                            N("strong", null, jt(o.label) + ":", 1),
                            yn(" " + jt(o.name), 1),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ],
                64,
              )
            );
          }
        );
      },
    }),
    vb = {
      orthography: "#f58231",
      typography: "#e61919",
      morpho_syntactical: "#18aa2a",
      lexis: "#f032e6",
      language: "#1E64C8",
      handshift: "#9e2a2b",
      ltsa: "#335c67",
      gtsa: "#bb4430",
      gts: "#6a4c93",
      lts: "#e9fff9",
    },
    yb = $k(vb),
    F8 = () => {
      const t = {};
      return (
        Object.entries(yb).forEach(([e, n]) => {
          n && (t[e] = { ...n, border: "rgb(0, 128, 0)" });
        }),
        t
      );
    },
    z8 = F8(),
    P8 = { class: "card-body p-2" },
    I8 = { key: 0, role: "alert", class: "alert alert-error" },
    j8 = { class: "flex justify-between items-center" },
    M8 = { class: "flex gap-2 justify-center" },
    N8 = { class: "flex gap-2" },
    L8 = ["disabled"],
    B8 = { class: "annotation-body" },
    q8 = { class: "flex items-center" },
    U8 = { class: "flex-grow" },
    Z8 = { class: "pt-2 text-sm text-gray-400" },
    V8 = { key: 0 },
    H8 = Gt({
      __name: "AnnotationEdit",
      props: {
        annotation: {},
        originalAnnotation: {},
        appliedRules: {},
        text: {},
        selected: {},
        duplicates: {},
        highlight: { type: Boolean },
        disabled: { type: Boolean },
        error: { type: Boolean },
        showMetadata: { type: Boolean },
        textId: {},
      },
      emits: [
        "confirmAnnotation",
        "deleteAnnotation",
        "changeSelected",
        "onHighlight",
        "modifyAnnotations",
        "highlightAnnotation",
      ],
      setup(t, { emit: e }) {
        const n = mt(),
          r = t,
          { originalAnnotation: i } = r,
          o = e;
        Re(
          () => r.selected,
          (h) => {
            n.value = h;
          },
        );
        const s = (h) => {
            o("confirmAnnotation", i, h);
          },
          a = () => {
            o("deleteAnnotation", i);
          },
          l = () => {
            const h = i.type;
            return `--text-color-custom:${vb[h]}`;
          },
          u = (h) => {
            (n.value = h === n.value ? null : h), o("changeSelected", i, h);
          },
          c = () => {
            o("onHighlight", r.duplicates);
          },
          f = () => {
            o("highlightAnnotation", r.originalAnnotation);
          };
        return (h, p) => {
          var m, y;
          const d = E_("router-link");
          return (
            Y(),
            Q(
              "div",
              { class: Vt(["grid gap-2 ", { "grid-cols-1": !h.showMetadata, "grid-cols-2": h.showMetadata }]) },
              [
                N(
                  "div",
                  {
                    class: Vt([
                      "card border rounded-md w-full",
                      { "border-black": h.highlight, shadow: h.highlight, "opacity-20": h.disabled },
                    ]),
                  },
                  [
                    N("div", P8, [
                      h.error ? (Y(), Q("div", I8, "Annotatie niet bewaard, probeer opnieuw.")) : oe("", !0),
                      N("div", j8, [
                        N("div", M8, [
                          N(
                            "button",
                            {
                              class: "badge badge-outline badge-sm text-color-custom cursor-pointer",
                              style: Ts(l()),
                              onClick: f,
                            },
                            jt(V(i).type),
                            5,
                          ),
                          h.duplicates.length > 1
                            ? (Y(),
                              Q(
                                "button",
                                {
                                  key: 0,
                                  class: "badge badge-sm badge-warning cursor-pointer",
                                  onClick: p[0] || (p[0] = (b) => c()),
                                },
                                " Duplicaat? (" + jt(V(i).id) + ") ",
                                1,
                              ))
                            : oe("", !0),
                        ]),
                        N("div", N8, [
                          N(
                            "button",
                            {
                              disabled: h.disabled,
                              class: "btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left",
                              "data-tip": "Verwijder annotatie",
                              onClick: p[1] || (p[1] = (b) => a()),
                            },
                            [at(V(bk))],
                            8,
                            L8,
                          ),
                        ]),
                      ]),
                      N("div", null, [
                        N("div", B8, [
                          h.annotation
                            ? (Y(),
                              V_(
                                Fm,
                                {
                                  key: 0,
                                  textId: h.textId,
                                  annotation: h.annotation,
                                  tip: "Bewaar gewijzigde annotatie",
                                  "selected-annotation": n.value === "modified",
                                  disabled: h.disabled,
                                  text: h.text,
                                  "allow-edit": !0,
                                  onChangeSelected: p[2] || (p[2] = (b) => u("modified")),
                                  onConfirmAnnotation: p[3] || (p[3] = (b) => s("modified")),
                                  onModifyAnnotations: p[4] || (p[4] = (b) => o("modifyAnnotations", b)),
                                },
                                null,
                                8,
                                ["textId", "annotation", "selected-annotation", "disabled", "text"],
                              ))
                            : oe("", !0),
                          p[7] || (p[7] = N("hr", null, null, -1)),
                          at(
                            Fm,
                            {
                              textId: h.textId,
                              annotation: V(i),
                              tip: "Bewaar originele annotatie",
                              "selected-annotation": n.value === "original",
                              disabled: h.disabled,
                              text: h.text,
                              onChangeSelected: p[5] || (p[5] = (b) => u("original")),
                              onConfirmAnnotation: p[6] || (p[6] = (b) => s("original")),
                            },
                            null,
                            8,
                            ["textId", "annotation", "selected-annotation", "disabled", "text"],
                          ),
                        ]),
                        N("div", q8, [
                          N("ul", U8, [
                            (Y(!0),
                            Q(
                              $t,
                              null,
                              me(h.appliedRules, (b) => (Y(), Q("li", { class: "badge badge-xs", key: b }, jt(b), 1))),
                              128,
                            )),
                          ]),
                          at(
                            d,
                            {
                              class: "badge badge-info badge-xs badge-outline tooltip tooltip-left",
                              "data-tip": "Info over regels",
                              to: { name: "docs" },
                              target: "_blank",
                            },
                            { default: rc(() => p[8] || (p[8] = [yn(" i ")])), _: 1, __: [8] },
                          ),
                        ]),
                        N("p", Z8, [
                          p[9] || (p[9] = N("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                          yn(
                            " " +
                              jt(
                                (y = (m = h.annotation) == null ? void 0 : m.metadata) == null
                                  ? void 0
                                  : y.lineLinguisticCharacteristic,
                              ),
                            1,
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  2,
                ),
                h.showMetadata
                  ? (Y(), Q("div", V8, [at(_b, { annotation: V(i) }, null, 8, ["annotation"])]))
                  : oe("", !0),
              ],
              2,
            )
          );
        };
      },
    });
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const G8 = () => {};
  function Xn(t, e, n) {
    let r;
    qt(n) ? (r = { evaluating: n }) : (r = {});
    const { lazy: i = !1, flush: o = "pre", evaluating: s = void 0, shallow: a = !0, onError: l = G8 } = r,
      u = Yl(!i),
      c = a ? Yl(e) : mt(e);
    let f = 0;
    return (
      pw(
        async (h) => {
          if (!u.value) return;
          f++;
          const p = f;
          let d = !1;
          s &&
            Promise.resolve().then(() => {
              s.value = !0;
            });
          try {
            const m = await t((y) => {
              h(() => {
                s && (s.value = !1), d || y();
              });
            });
            p === f && (c.value = m);
          } catch (m) {
            l(m);
          } finally {
            s && p === f && (s.value = !1), (d = !0);
          }
        },
        { flush: o },
      ),
      i ? ht(() => ((u.value = !0), c.value)) : c
    );
  }
  class sf {
    constructor() {}
    async fetchAnnotation(e) {
      return this.sendJsonRequest({ url: `/text/${e}/annotations`, method: "GET" });
    }
    async filters() {
      return this.sendJsonRequest({ url: "/text/search_flags/filters", method: "GET" });
    }
    async listTexts(e, n, r, i, o) {
      const s = this.buildSearchParams(e, n, r, i, o);
      return this.sendJsonRequest({ url: `/text/search_flags?${s.toString()}`, method: "GET" });
    }
    async paginate(e, n, r, i, o) {
      return (await this.listTexts(e, n, r, i, o)).data.map((a) => a.id);
    }
    async patchAnnotation(e, n, r) {
      return this.sendJsonRequest({ url: `/annotation/${n}/${e}/override`, method: "PATCH", body: r });
    }
    async reviewDone(e) {
      return this.sendJsonRequest({
        url: `/text/${e}/flags`,
        method: "PATCH",
        body: { review_done: !0, needs_attention: !1 },
      });
    }
    async needsAttention(e) {
      return this.sendJsonRequest({
        url: `/text/${e}/flags`,
        method: "PATCH",
        body: { review_done: !1, needs_attention: !0 },
      });
    }
    async sendJsonRequest({ url: e, method: n, body: r }) {
      try {
        const i = await fetch(e, {
          method: n,
          headers: { "Content-Type": "application/json" },
          body: r ? JSON.stringify(r) : void 0,
        });
        if ((i.status === 401 && window.location.reload(), !i.ok)) throw new Error(`HTTP error! status: ${i.status}`);
        return await i.json();
      } catch (i) {
        throw (console.error(i), new Error(i));
      }
    }
    buildSearchParams(e, n, r, i, o) {
      const s = new URLSearchParams();
      s.append("limit", `${r}`), s.append("ascending", `${o}`), s.append("page", `${n}`), s.append("orderBy", i);
      const a = ["page", "orderBy", "ascending"];
      return (
        Object.entries(e).forEach(([l, u]) => {
          a.includes(l) ||
            u.forEach((c, f) => {
              s.append(`filters[${l}][${f}]`, `${c}`);
            });
        }),
        s
      );
    }
  }
  const W8 = (t) => `${t.type}-${t.start}-${t.end}`;
  class K8 {
    constructor(e, n) {
      et(this, "name", "Duplicate rule");
      et(this, "duplicateRuleSet", new Map());
      et(this, "duplicates", new Map());
      (this.text = e), (this.annotations = n), this.mapAnnotations(n);
    }
    addAnnotationToRules(e) {
      const n = W8(e),
        r = this.duplicateRuleSet.get(n) ?? [];
      return r.push(e), this.duplicateRuleSet.set(n, r), { key: n, annotations: r };
    }
    updateDuplicates(e, n) {
      if (n.length < 2) {
        n.forEach((i) => {
          this.duplicateRuleSet.delete(i.id), this.duplicates.set(i.id, { duplicateKey: e, duplicates: [] });
        });
        return;
      }
      const r = n.map((i) => i.id);
      n.forEach((i) => {
        this.duplicates.set(i.id, { duplicateKey: e, duplicates: r });
      });
    }
    mapAnnotations(e) {
      this.duplicateRuleSet.clear(), this.duplicates.clear(), e.forEach((n) => this.addAnnotationToRules(n));
      for (const [n, r] of this.duplicateRuleSet.entries()) this.updateDuplicates(n, r);
    }
    removeAnnotation(e) {
      var i, o;
      const n = (i = this.duplicates.get(e.id)) == null ? void 0 : i.duplicateKey,
        r = ((o = this.duplicateRuleSet.get(n)) == null ? void 0 : o.filter((s) => s.id !== e.id)) ?? [];
      return this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r)), r;
    }
    updateAnnotation(e) {
      var s, a;
      const n = (s = this.duplicates.get(e.id)) == null ? void 0 : s.duplicateKey,
        r = ((a = this.duplicateRuleSet.get(n)) == null ? void 0 : a.filter((l) => l.id !== e.id)) ?? [];
      this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r));
      const { key: i, annotations: o } = this.addAnnotationToRules(e);
      return this.updateDuplicates(i, o), r;
    }
    hasDuplicate(e) {
      var n;
      return ((n = this.duplicates.get(e.id)) == null ? void 0 : n.duplicates) ?? [];
    }
  }
  const J8 = [
    "language",
    "typography",
    "orthography",
    "lexis",
    "morpho_syntactical",
    "handshift",
    "ltsa",
    "gtsa",
    "gts",
    "lts",
  ];
  function X8(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function zo(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var Zl = { exports: {} },
    zm;
  function Y8() {
    return (
      zm ||
        ((zm = 1),
        (function (t, e) {
          (function (n) {
            t.exports = n();
          })(function () {
            return (function () {
              function n(r, i, o) {
                function s(u, c) {
                  if (!i[u]) {
                    if (!r[u]) {
                      var f = typeof zo == "function" && zo;
                      if (!c && f) return f(u, !0);
                      if (a) return a(u, !0);
                      var h = new Error("Cannot find module '" + u + "'");
                      throw ((h.code = "MODULE_NOT_FOUND"), h);
                    }
                    var p = (i[u] = { exports: {} });
                    r[u][0].call(
                      p.exports,
                      function (d) {
                        var m = r[u][1][d];
                        return s(m || d);
                      },
                      p,
                      p.exports,
                      n,
                      r,
                      i,
                      o,
                    );
                  }
                  return i[u].exports;
                }
                for (var a = typeof zo == "function" && zo, l = 0; l < o.length; l++) s(o[l]);
                return s;
              }
              return n;
            })()(
              {
                1: [
                  function (n, r, i) {
                    function o(E, g, k) {
                      return (g = d(g)), s(E, f() ? Reflect.construct(g, k || [], d(E).constructor) : g.apply(E, k));
                    }
                    function s(E, g) {
                      if (g && (m(g) === "object" || typeof g == "function")) return g;
                      if (g !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                      return a(E);
                    }
                    function a(E) {
                      if (E === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return E;
                    }
                    function l(E, g) {
                      if (typeof g != "function" && g !== null)
                        throw new TypeError("Super expression must either be null or a function");
                      (E.prototype = Object.create(g && g.prototype, {
                        constructor: { value: E, writable: !0, configurable: !0 },
                      })),
                        Object.defineProperty(E, "prototype", { writable: !1 }),
                        g && p(E, g);
                    }
                    function u(E) {
                      var g = typeof Map == "function" ? new Map() : void 0;
                      return (u = function (k) {
                        if (k === null || !h(k)) return k;
                        if (typeof k != "function")
                          throw new TypeError("Super expression must either be null or a function");
                        if (g !== void 0) {
                          if (g.has(k)) return g.get(k);
                          g.set(k, D);
                        }
                        function D() {
                          return c(k, arguments, d(this).constructor);
                        }
                        return (
                          (D.prototype = Object.create(k.prototype, {
                            constructor: { value: D, enumerable: !1, writable: !0, configurable: !0 },
                          })),
                          p(D, k)
                        );
                      })(E);
                    }
                    function c(E, g, k) {
                      if (f()) return Reflect.construct.apply(null, arguments);
                      var D = [null];
                      D.push.apply(D, g);
                      var q = new (E.bind.apply(E, D))();
                      return k && p(q, k.prototype), q;
                    }
                    function f() {
                      try {
                        var E = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                      } catch {}
                      return (f = function () {
                        return !!E;
                      })();
                    }
                    function h(E) {
                      try {
                        return Function.toString.call(E).indexOf("[native code]") !== -1;
                      } catch {
                        return typeof E == "function";
                      }
                    }
                    function p(E, g) {
                      return (p = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (k, D) {
                            return (k.__proto__ = D), k;
                          })(E, g);
                    }
                    function d(E) {
                      return (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (g) {
                            return g.__proto__ || Object.getPrototypeOf(g);
                          })(E);
                    }
                    function m(E) {
                      return (m =
                        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                          ? function (g) {
                              return typeof g;
                            }
                          : function (g) {
                              return g &&
                                typeof Symbol == "function" &&
                                g.constructor === Symbol &&
                                g !== Symbol.prototype
                                ? "symbol"
                                : typeof g;
                            })(E);
                    }
                    function y(E, g) {
                      if (!(E instanceof g)) throw new TypeError("Cannot call a class as a function");
                    }
                    function b(E, g) {
                      for (var k = 0; k < g.length; k++) {
                        var D = g[k];
                        (D.enumerable = D.enumerable || !1),
                          (D.configurable = !0),
                          "value" in D && (D.writable = !0),
                          Object.defineProperty(E, w(D.key), D);
                      }
                    }
                    function _(E, g, k) {
                      return g && b(E.prototype, g), Object.defineProperty(E, "prototype", { writable: !1 }), E;
                    }
                    function w(E) {
                      var g = v(E, "string");
                      return m(g) == "symbol" ? g : String(g);
                    }
                    function v(E, g) {
                      if (m(E) != "object" || !E) return E;
                      var k = E[Symbol.toPrimitive];
                      if (k !== void 0) {
                        var D = k.call(E, g);
                        if (m(D) != "object") return D;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return String(E);
                    }
                    var C = function (E, g) {
                        var k = E.length,
                          D = g - 20;
                        D < 0 && (D = 0);
                        var q = g + 20;
                        q > k && (q = k);
                        var O = function (F) {
                            return F.charCodeAt(0).toString(16).toUpperCase();
                          },
                          T = function (F, J, xt) {
                            return F.substr(J, xt)
                              .replace(/\\/g, "\\\\")
                              .replace(/\x08/g, "\\b")
                              .replace(/\t/g, "\\t")
                              .replace(/\n/g, "\\n")
                              .replace(/\f/g, "\\f")
                              .replace(/\r/g, "\\r")
                              .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ut) {
                                return "\\x0" + O(ut);
                              })
                              .replace(/[\x10-\x1F\x80-\xFF]/g, function (ut) {
                                return "\\x" + O(ut);
                              })
                              .replace(/[\u0100-\u0FFF]/g, function (ut) {
                                return "\\u0" + O(ut);
                              })
                              .replace(/[\u1000-\uFFFF]/g, function (ut) {
                                return "\\u" + O(ut);
                              });
                          };
                        return {
                          prologTrunc: D > 0,
                          prologText: T(E, D, g - D),
                          tokenText: T(E, g, 1),
                          epilogText: T(E, g + 1, q - (g + 1)),
                          epilogTrunc: q < k,
                        };
                      },
                      R = (function () {
                        function E(g, k, D) {
                          var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                            O = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                            T = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                          y(this, E),
                            (this.type = g),
                            (this.value = k),
                            (this.text = D),
                            (this.pos = q),
                            (this.line = O),
                            (this.column = T);
                        }
                        return (
                          _(E, [
                            {
                              key: "toString",
                              value: function () {
                                var g =
                                  arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : function (k, D) {
                                        return D;
                                      };
                                return (
                                  "".concat(g("type", this.type), " ") +
                                  "(value: ".concat(g("value", JSON.stringify(this.value)), ", ") +
                                  "text: ".concat(g("text", JSON.stringify(this.text)), ", ") +
                                  "pos: ".concat(g("pos", this.pos), ", ") +
                                  "line: ".concat(g("line", this.line), ", ") +
                                  "column: ".concat(g("column", this.column), ")")
                                );
                              },
                            },
                            {
                              key: "isA",
                              value: function (g, k) {
                                return g === this.type && (arguments.length !== 2 || k === this.value);
                              },
                            },
                          ]),
                          E
                        );
                      })(),
                      z = (function (E) {
                        function g(k, D, q, O, T) {
                          var F;
                          return (
                            y(this, g),
                            ((F = o(this, g, [k])).name = "ParsingError"),
                            (F.message = k),
                            (F.pos = D),
                            (F.line = q),
                            (F.column = O),
                            (F.input = T),
                            F
                          );
                        }
                        return (
                          l(g, u(Error)),
                          _(g, [
                            {
                              key: "toString",
                              value: function () {
                                for (
                                  var k = C(this.input, this.pos),
                                    D = "line ".concat(this.line, " (column ").concat(this.column, "): "),
                                    q = "",
                                    O = 0;
                                  O < D.length + k.prologText.length;
                                  O++
                                )
                                  q += " ";
                                return (
                                  "Parsing Error: " +
                                  this.message +
                                  `
` +
                                  D +
                                  k.prologText +
                                  k.tokenText +
                                  k.epilogText +
                                  `
` +
                                  q +
                                  "^"
                                );
                              },
                            },
                          ]),
                          g
                        );
                      })(),
                      B = (function () {
                        function E(g) {
                          y(this, E),
                            (this._tokenizr = g),
                            (this._data = {}),
                            (this._repeat = !1),
                            (this._reject = !1),
                            (this._ignore = !1),
                            (this._match = null);
                        }
                        return (
                          _(E, [
                            {
                              key: "data",
                              value: function (g, k) {
                                var D = this._data[g];
                                return arguments.length === 2 && (this._data[g] = k), D;
                              },
                            },
                            {
                              key: "info",
                              value: function () {
                                return {
                                  line: this._tokenizr._line,
                                  column: this._tokenizr._column,
                                  pos: this._tokenizr._pos,
                                  len: this._match[0].length,
                                };
                              },
                            },
                            {
                              key: "push",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).push.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "pop",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).pop.apply(g, arguments);
                              },
                            },
                            {
                              key: "state",
                              value: function () {
                                var g, k;
                                return arguments.length > 0
                                  ? ((k = this._tokenizr).state.apply(k, arguments), this)
                                  : (g = this._tokenizr).state.apply(g, arguments);
                              },
                            },
                            {
                              key: "tag",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).tag.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "tagged",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).tagged.apply(g, arguments);
                              },
                            },
                            {
                              key: "untag",
                              value: function () {
                                var g;
                                return (g = this._tokenizr).untag.apply(g, arguments), this;
                              },
                            },
                            {
                              key: "repeat",
                              value: function () {
                                return this._tokenizr._log("    REPEAT"), (this._repeat = !0), this;
                              },
                            },
                            {
                              key: "reject",
                              value: function () {
                                return this._tokenizr._log("    REJECT"), (this._reject = !0), this;
                              },
                            },
                            {
                              key: "ignore",
                              value: function () {
                                return this._tokenizr._log("    IGNORE"), (this._ignore = !0), this;
                              },
                            },
                            {
                              key: "accept",
                              value: function (g, k) {
                                return (
                                  arguments.length < 2 && (k = this._match[0]),
                                  this._tokenizr._log(
                                    "    ACCEPT: type: ".concat(g, ", value: ") +
                                      ""
                                        .concat(JSON.stringify(k), " (")
                                        .concat(m(k), '), text: "')
                                        .concat(this._match[0], '"'),
                                  ),
                                  this._tokenizr._pending.push(
                                    new R(
                                      g,
                                      k,
                                      this._match[0],
                                      this._tokenizr._pos,
                                      this._tokenizr._line,
                                      this._tokenizr._column,
                                    ),
                                  ),
                                  this
                                );
                              },
                            },
                            {
                              key: "stop",
                              value: function () {
                                return (this._tokenizr._stopped = !0), this;
                              },
                            },
                          ]),
                          E
                        );
                      })(),
                      $ = (function () {
                        function E() {
                          y(this, E),
                            (this._before = null),
                            (this._after = null),
                            (this._finish = null),
                            (this._rules = []),
                            (this._debug = !1),
                            this.reset();
                        }
                        return (
                          _(E, [
                            {
                              key: "reset",
                              value: function () {
                                return (
                                  (this._input = ""),
                                  (this._len = 0),
                                  (this._eof = !1),
                                  (this._pos = 0),
                                  (this._line = 1),
                                  (this._column = 1),
                                  (this._state = ["default"]),
                                  (this._tag = {}),
                                  (this._transaction = []),
                                  (this._pending = []),
                                  (this._stopped = !1),
                                  (this._ctx = new B(this)),
                                  this
                                );
                              },
                            },
                            {
                              key: "error",
                              value: function (g) {
                                return new z(g, this._pos, this._line, this._column, this._input);
                              },
                            },
                            {
                              key: "debug",
                              value: function (g) {
                                return (this._debug = g), this;
                              },
                            },
                            {
                              key: "_log",
                              value: function (g) {
                                this._debug && console.log("tokenizr: ".concat(g));
                              },
                            },
                            {
                              key: "input",
                              value: function (g) {
                                if (typeof g != "string") throw new Error('parameter "input" not a String');
                                return this.reset(), (this._input = g), (this._len = g.length), this;
                              },
                            },
                            {
                              key: "push",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "state" not a String');
                                return (
                                  this._log(
                                    "    STATE (PUSH): " +
                                      "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                      "new: <".concat(g, ">"),
                                  ),
                                  this._state.push(g),
                                  this
                                );
                              },
                            },
                            {
                              key: "pop",
                              value: function () {
                                if (arguments.length !== 0) throw new Error("invalid number of arguments");
                                if (this._state.length < 2) throw new Error("no more custom states to pop");
                                return (
                                  this._log(
                                    "    STATE (POP): " +
                                      "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                      "new: <".concat(this._state[this._state.length - 2], ">"),
                                  ),
                                  this._state.pop()
                                );
                              },
                            },
                            {
                              key: "state",
                              value: function (g) {
                                if (arguments.length === 1) {
                                  if (typeof g != "string") throw new Error('parameter "state" not a String');
                                  return (
                                    this._log(
                                      "    STATE (SET): " +
                                        "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                        "new: <".concat(g, ">"),
                                    ),
                                    (this._state[this._state.length - 1] = g),
                                    this
                                  );
                                }
                                if (arguments.length === 0) return this._state[this._state.length - 1];
                                throw new Error("invalid number of arguments");
                              },
                            },
                            {
                              key: "tag",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._log("    TAG (ADD): ".concat(g)), (this._tag[g] = !0), this;
                              },
                            },
                            {
                              key: "tagged",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._tag[g] === !0;
                              },
                            },
                            {
                              key: "untag",
                              value: function (g) {
                                if (arguments.length !== 1) throw new Error("invalid number of arguments");
                                if (typeof g != "string") throw new Error('parameter "tag" not a String');
                                return this._log("    TAG (DEL): ".concat(g)), delete this._tag[g], this;
                              },
                            },
                            {
                              key: "before",
                              value: function (g) {
                                return (this._before = g), this;
                              },
                            },
                            {
                              key: "after",
                              value: function (g) {
                                return (this._after = g), this;
                              },
                            },
                            {
                              key: "finish",
                              value: function (g) {
                                return (this._finish = g), this;
                              },
                            },
                            {
                              key: "rule",
                              value: function (g, k, D) {
                                var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                                if (arguments.length === 2 && typeof k == "function") {
                                  var O = [g, k];
                                  (k = O[0]), (D = O[1]), (g = "*");
                                } else if (arguments.length === 3 && typeof k == "function") {
                                  var T = [g, k, D];
                                  (k = T[0]), (D = T[1]), (q = T[2]), (g = "*");
                                }
                                if (typeof g != "string") throw new Error('parameter "state" not a String');
                                if (!(m(k) === "object" && k instanceof RegExp))
                                  throw new Error('parameter "pattern" not a RegExp');
                                if (typeof D != "function") throw new Error('parameter "action" not a Function');
                                if (typeof q != "string") throw new Error('parameter "name" not a String');
                                g = g.split(/\s*,\s*/g).map(function (J) {
                                  var xt = J.split(/\s+/g),
                                    ut = xt.filter(function (ft) {
                                      return ft.match(/^#/) === null;
                                    }),
                                    Zt = xt
                                      .filter(function (ft) {
                                        return ft.match(/^#/) !== null;
                                      })
                                      .map(function (ft) {
                                        return ft.replace(/^#/, "");
                                      });
                                  if (ut.length !== 1) throw new Error("exactly one state required");
                                  return { state: ut[0], tags: Zt };
                                });
                                var F = "g";
                                try {
                                  typeof new RegExp("", "y").sticky == "boolean" && (F = "y");
                                } catch {}
                                return (
                                  typeof k.multiline == "boolean" && k.multiline && (F += "m"),
                                  typeof k.dotAll == "boolean" && k.dotAll && (F += "s"),
                                  typeof k.ignoreCase == "boolean" && k.ignoreCase && (F += "i"),
                                  typeof k.unicode == "boolean" && k.unicode && (F += "u"),
                                  (k = new RegExp(k.source, F)),
                                  this._log(
                                    "rule: configure rule (state: ".concat(g, ", pattern: ").concat(k.source, ")"),
                                  ),
                                  this._rules.push({ state: g, pattern: k, action: D, name: q }),
                                  this
                                );
                              },
                            },
                            {
                              key: "_progress",
                              value: function (g, k) {
                                for (var D = this._line, q = this._column, O = this._input, T = g; T < k; T++) {
                                  var F = O.charAt(T);
                                  F === "\r"
                                    ? (this._column = 1)
                                    : F ===
                                        `
`
                                      ? (this._line++, (this._column = 1))
                                      : F === "	"
                                        ? (this._column += 8 - (this._column % 8))
                                        : this._column++;
                                }
                                this._log(
                                  "    PROGRESS: characters: ".concat(k - g, ", ") +
                                    "from: <line ".concat(D, ", column ").concat(q, ">, ") +
                                    "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                );
                              },
                            },
                            {
                              key: "_tokenize",
                              value: function () {
                                var g = this,
                                  k = function () {
                                    g._eof ||
                                      (g._finish !== null && g._finish.call(g._ctx, g._ctx),
                                      (g._eof = !0),
                                      g._pending.push(new R("EOF", "", "", g._pos, g._line, g._column)));
                                  };
                                if (!(this._stopped || this._pos >= this._len)) {
                                  for (var D = !0; D; ) {
                                    if (((D = !1), this._debug)) {
                                      var q = C(this._input, this._pos),
                                        O = Object.keys(this._tag)
                                          .map(function (At) {
                                            return "#".concat(At);
                                          })
                                          .join(" ");
                                      this._log(
                                        "INPUT: state: <"
                                          .concat(this._state[this._state.length - 1], ">, tags: <")
                                          .concat(O, ">, text: ") +
                                          (q.prologTrunc ? "..." : '"') +
                                          "".concat(q.prologText, "<").concat(q.tokenText, ">").concat(q.epilogText) +
                                          (q.epilogTrunc ? "..." : '"') +
                                          ", at: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                      );
                                    }
                                    for (var T = 0; T < this._rules.length; T++) {
                                      if (this._debug) {
                                        var F = this._rules[T].state
                                          .map(function (At) {
                                            var xe = At.state;
                                            return (
                                              At.tags.length > 0 &&
                                                (xe +=
                                                  " " +
                                                  At.tags
                                                    .map(function (En) {
                                                      return "#".concat(En);
                                                    })
                                                    .join(" ")),
                                              xe
                                            );
                                          })
                                          .join(", ");
                                        this._log(
                                          "  RULE: state(s): <".concat(F, ">, ") +
                                            "pattern: ".concat(this._rules[T].pattern.source),
                                        );
                                      }
                                      var J = !1,
                                        xt = this._rules[T].state.map(function (At) {
                                          return At.state;
                                        }),
                                        ut = xt.indexOf("*");
                                      if ((ut < 0 && (ut = xt.indexOf(this._state[this._state.length - 1])), ut >= 0)) {
                                        J = !0;
                                        var Zt = this._rules[T].state[ut].tags;
                                        (Zt = Zt.filter(function (At) {
                                          return !g._tag[At];
                                        })).length > 0 && (J = !1);
                                      }
                                      if (J) {
                                        this._rules[T].pattern.lastIndex = this._pos;
                                        var ft = this._rules[T].pattern.exec(this._input);
                                        if (
                                          ((this._rules[T].pattern.lastIndex = this._pos),
                                          (ft = this._rules[T].pattern.exec(this._input)) !== null &&
                                            ft.index === this._pos)
                                        ) {
                                          if (
                                            (this._debug && this._log("    MATCHED: " + JSON.stringify(ft)),
                                            (this._ctx._match = ft),
                                            (this._ctx._repeat = !1),
                                            (this._ctx._reject = !1),
                                            (this._ctx._ignore = !1),
                                            this._before !== null &&
                                              this._before.call(this._ctx, this._ctx, ft, this._rules[T]),
                                            this._rules[T].action.call(this._ctx, this._ctx, ft),
                                            this._after !== null &&
                                              this._after.call(this._ctx, this._ctx, ft, this._rules[T]),
                                            this._ctx._reject)
                                          )
                                            continue;
                                          if (this._ctx._repeat) {
                                            D = !0;
                                            break;
                                          }
                                          if (this._ctx._ignore) {
                                            if (
                                              (this._progress(this._pos, this._rules[T].pattern.lastIndex),
                                              (this._pos = this._rules[T].pattern.lastIndex),
                                              this._pos >= this._len)
                                            )
                                              return void k();
                                            D = !0;
                                            break;
                                          }
                                          if (this._pending.length > 0)
                                            return (
                                              this._progress(this._pos, this._rules[T].pattern.lastIndex),
                                              (this._pos = this._rules[T].pattern.lastIndex),
                                              void (this._pos >= this._len && k())
                                            );
                                          throw new Error(
                                            'action of pattern "' +
                                              this._rules[T].pattern.source +
                                              '" neither rejected nor accepted any token(s)',
                                          );
                                        }
                                      }
                                    }
                                  }
                                  throw this.error("token not recognized");
                                }
                                k();
                              },
                            },
                            {
                              key: "token",
                              value: function () {
                                if ((this._pending.length === 0 && this._tokenize(), this._pending.length > 0)) {
                                  var g = this._pending.shift();
                                  return (
                                    this._transaction.length > 0 && this._transaction[0].push(g),
                                    this._log("TOKEN: ".concat(g.toString())),
                                    g
                                  );
                                }
                                return null;
                              },
                            },
                            {
                              key: "tokens",
                              value: function () {
                                for (var g, k = []; (g = this.token()) !== null; ) k.push(g);
                                return k;
                              },
                            },
                            {
                              key: "peek",
                              value: function (g) {
                                if ((g === void 0 && (g = 0), g >= this._pending.length)) {
                                  this._pending.length === 0 && this._tokenize();
                                  for (var k = 0; k < g - this._pending.length; k++) this._tokenize();
                                }
                                if (g >= this._pending.length)
                                  throw new Error("not enough tokens available for peek operation");
                                return this._log("PEEK: ".concat(this._pending[g].toString())), this._pending[g];
                              },
                            },
                            {
                              key: "skip",
                              value: function (g) {
                                g === void 0 && (g = 1);
                                for (var k = 0; k < this._pending.length + g; k++) this._tokenize();
                                if (g > this._pending.length)
                                  throw new Error("not enough tokens available for skip operation");
                                for (; g-- > 0; ) this.token();
                                return this;
                              },
                            },
                            {
                              key: "consume",
                              value: function (g, k) {
                                for (var D = this, q = 0; q < this._pending.length + 1; q++) this._tokenize();
                                if (this._pending.length === 0)
                                  throw new Error("not enough tokens available for consume operation");
                                var O = this.token();
                                this._log("CONSUME: ".concat(O.toString()));
                                var T = function () {
                                  throw new z(
                                    "expected: <type: "
                                      .concat(g, ", value: ")
                                      .concat(JSON.stringify(k), " (")
                                      .concat(m(k), ")>, ") +
                                      "found: <type: "
                                        .concat(O.type, ", value: ")
                                        .concat(JSON.stringify(O.value), " (")
                                        .concat(m(O.value), ")>"),
                                    O.pos,
                                    O.line,
                                    O.column,
                                    D._input,
                                  );
                                };
                                return (
                                  arguments.length !== 2 || O.isA(g, k) ? O.isA(g) || T() : T(JSON.stringify(k), m(k)),
                                  O
                                );
                              },
                            },
                            {
                              key: "begin",
                              value: function () {
                                return (
                                  this._log("BEGIN: level ".concat(this._transaction.length)),
                                  this._transaction.unshift([]),
                                  this
                                );
                              },
                            },
                            {
                              key: "depth",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot determine depth -- no active transaction");
                                return this._transaction[0].length;
                              },
                            },
                            {
                              key: "commit",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot commit transaction -- no active transaction");
                                var g = this._transaction.shift();
                                return (
                                  this._transaction.length > 0 &&
                                    (this._transaction[0] = this._transaction[0].concat(g)),
                                  this._log("COMMIT: level ".concat(this._transaction.length)),
                                  this
                                );
                              },
                            },
                            {
                              key: "rollback",
                              value: function () {
                                if (this._transaction.length === 0)
                                  throw new Error("cannot rollback transaction -- no active transaction");
                                var g = this._transaction.shift();
                                return (
                                  (this._pending = g.concat(this._pending)),
                                  this._log("ROLLBACK: level ".concat(this._transaction.length)),
                                  this
                                );
                              },
                            },
                            {
                              key: "alternatives",
                              value: function () {
                                for (var g = null, k = [], D = arguments.length, q = new Array(D), O = 0; O < D; O++)
                                  q[O] = arguments[O];
                                for (var T = 0; T < q.length; T++)
                                  try {
                                    this.begin(), (g = q[T].call(this)), this.commit();
                                    break;
                                  } catch (F) {
                                    this._log("EXCEPTION: ".concat(F.toString())),
                                      k.push({ ex: F, depth: this.depth() }),
                                      this.rollback();
                                    continue;
                                  }
                                if (g === null && k.length > 0)
                                  throw (k = k.sort(function (F, J) {
                                    return F.depth - J.depth;
                                  }))[0].ex;
                                return g;
                              },
                            },
                          ]),
                          E
                        );
                      })();
                    ($.Token = R), ($.ParsingError = z), ($.ActionContext = B), (r.exports = $);
                  },
                  {},
                ],
              },
              {},
              [1],
            )(1);
          });
        })(Zl)),
      Zl.exports
    );
  }
  var Q8 = Y8();
  const t9 = X8(Q8);
  function e9(t) {
    const e = new t9();
    return (
      e.rule(/†/, (n) => {
        n.accept("start");
      }),
      e.rule(/\d+\./, (n) => {
        n.ignore();
      }),
      e.rule(/(\s+)|(,)|\./, (n) => {
        n.ignore();
      }),
      e.rule(/[^\s,\.]+/, (n) => {
        n.accept("token");
      }),
      e.input(t),
      e.tokens()
    );
  }
  function n9(t, e) {
    if (!t || !e || typeof t != "string" || typeof e != "string" || t.length == 0 || e.length == 0) return [];
    let n = [],
      r = t.indexOf(e, 0);
    for (; r != -1; ) n.push(r), (r = t.indexOf(e, r + 1));
    return n;
  }
  function r9(t, e, n, r, i) {
    const o = r - n;
    o != e.length &&
      console.log("Warning: annotation text length", e.length, ": ", e, " and annotation length do not match", o);
    let a = n9(t, e).filter((l) => Math.abs(l - n) <= i);
    return a.length == 1 ? { start: a[0], end: a[0] + e.length - 1, modified: !0 } : { start: n, end: r, modified: !1 };
  }
  function i9(t, e, n, r) {
    const i = r,
      o = {},
      s = {};
    e9(t).forEach((h) => {
      (o[h.pos] = h), (s[h.pos + h.value.length - 1] = h);
    });
    let a = -1,
      l = -1;
    for (let h = 0; h < i; h++)
      a == -1 && o[e + h] && (a = e + h),
        a == -1 && o[e - h] && (a = e - h),
        l == -1 && s[n + h] && (l = n + h),
        l == -1 && s[n - h] && (l = n - h);
    let u = !0,
      c = !0,
      f = !0;
    return (
      a == -1 && ((a = e), (c = !1)), l == -1 && ((l = n), (f = !1)), (u = c || f), { start: a, end: l, modified: u }
    );
  }
  class o9 {
    constructor(e) {
      et(this, "name");
      et(this, "text");
      (this.name = "sanitize_annotation_rule"), (this.text = e);
    }
    apply(e) {
      const n = jn(e);
      e.start < 0 && (n.start = 0), e.end >= this.text.length && (n.end = this.text.length - 1);
      const r = e.start != n.start || e.end != n.end;
      return { annotation: n, rule_applied: r };
    }
  }
  class Gn {
    constructor(e, n, r = !1, i = !1) {
      et(this, "name");
      et(this, "text");
      et(this, "rules");
      et(this, "alwaysApplyFirstRule");
      et(this, "stopWhenRuleApplied");
      var o;
      (this.annotationType = e),
        (this.name = "annotation_rule_set"),
        (this.rules = n),
        (this.text = ((o = n[0]) == null ? void 0 : o.text) || ""),
        (this.alwaysApplyFirstRule = r),
        (this.stopWhenRuleApplied = i);
    }
    apply(e, n = !1) {
      const r = (...a) => {
        n && console.log(...a);
      };
      r("apply ruleset", this.annotationType, this.rules),
        r(fi(this, "rules", "alwaysApplyFirstRule", "stopWhenRuleApplied"));
      let i = !1;
      const o = [],
        s = (a) => {
          const l = this.rules[a],
            u = l.apply(e);
          return (
            r("	 -- apply: ", l.name, u.rule_applied),
            u.rule_applied && (o.push(l.name), (e = u.annotation), (i = u.rule_applied), this.stopWhenRuleApplied)
              ? { annotation: e, rule_applied: i, appliedRules: o }
              : null
          );
        };
      if (this.alwaysApplyFirstRule) {
        const a = s(0);
        if (a) return a;
      }
      for (let a = this.alwaysApplyFirstRule ? 1 : 0; a < this.rules.length; a++) {
        const l = s(a);
        if (l) return l;
      }
      return { annotation: e, rule_applied: i, appliedRules: o };
    }
  }
  class s9 {
    constructor(e, n) {
      et(this, "name");
      et(this, "text");
      et(this, "max_shift");
      (this.name = "tokenize_rule"), (this.text = e), (this.max_shift = n);
    }
    apply(e) {
      const n = jn(e);
      let r = this.max_shift;
      r < 0 && (r = 2 + Math.floor((e.end - e.start) / 3));
      const i = i9(this.text, e.start, e.end, r);
      return i.modified && ((n.start = i.start), (n.end = i.end)), { annotation: n, rule_applied: i.modified };
    }
  }
  const a9 = (t, e, n) => {
      if (!n || !n.id) return console.warn("No property object", e, n), null;
      const r = e
        .substring(t.length + 1)
        .split(/(?=[A-Z])/)
        .map((i) => `${i.charAt(0).toUpperCase()}${i.slice(1)}`)
        .join(" ");
      return { id: n.id, id_name: n.id_name, label: r, name: n.name };
    },
    l9 = (t, e) =>
      Object.keys(e)
        .map((n) => a9(t, n, e[n]))
        .filter((n) => !!n),
    u9 = (t, e) => {
      if (!t.text_selection) return console.error("Annotation error wrong format", t), null;
      const n = t.type === "handshift" ? "gutter" : "text",
        r = t.text_selection.selection_start - 1,
        i = t.text_selection.selection_end - 1,
        o = e ? e.slice(r, i) : "",
        s = t.type;
      return {
        id: t.id,
        start: t.text_selection.selection_start,
        end: t.text_selection.selection_end,
        text: t.text_selection.text,
        class: `annotation-${s}`,
        label: s,
        target: n,
        type: s,
        metadata: { lineLinguisticCharacteristic: t.text_selection.text, text: o, id: t.id, index: t.id },
        color: yb[s],
        hasOverride: t.hasOverride,
        properties: l9(s, t.properties),
      };
    };
  class c9 {
    constructor(e, n) {
      et(this, "name");
      et(this, "text");
      et(this, "maxShift");
      (this.name = "annotation_text_rule"), (this.text = e), (this.maxShift = n);
    }
    apply(e) {
      let n = e,
        r = !1;
      if (e.text) {
        const i = e.text.trim(),
          o = r9(this.text, i, e.start, e.end, this.maxShift);
        o.modified && ((r = !0), (n = jn(e)), (n.start = o.start), (n.end = o.end));
      }
      return { annotation: n, rule_applied: r };
    }
  }
  class f9 {
    constructor(e) {
      et(this, "languageRuleSet");
      et(this, "typographyRuleSet");
      et(this, "orthographyRuleSet");
      et(this, "lexisRuleSet");
      et(this, "morphoSyntacticalRuleSet");
      et(this, "handshiftRuleSet");
      et(this, "defaultRuleSet");
      this.text = e;
      const n = new s9(e, 3),
        r = new c9(e, 3),
        i = new o9(e);
      (this.languageRuleSet = new Gn("language", [i, n], !0, !0)),
        (this.typographyRuleSet = new Gn("typography", [i, r, n], !0, !0)),
        (this.orthographyRuleSet = new Gn("orthography", [i, n, r], !0, !0)),
        (this.lexisRuleSet = new Gn("lexis", [i, n], !0, !0)),
        (this.morphoSyntacticalRuleSet = new Gn("morpho_syntactical", [i, r, n], !0, !1)),
        (this.handshiftRuleSet = new Gn("handshift", [i, n], !0, !0)),
        (this.defaultRuleSet = new Gn("default", [i], !0, !1));
    }
    _applyRules(e, n = !1) {
      let r = { annotation: {}, rule_applied: !1, appliedRules: [] };
      if (e.hasOverride) return r;
      switch (e.type) {
        case "typography":
          r = this.typographyRuleSet.apply(e, n);
          break;
        case "orthography":
          r = this.orthographyRuleSet.apply(e, n);
          break;
        case "lexis":
          r = this.lexisRuleSet.apply(e, n);
          break;
        case "morpho_syntactical":
          r = this.morphoSyntacticalRuleSet.apply(e, n);
          break;
        case "handshift":
          r = this.handshiftRuleSet.apply(e, n);
          break;
        case "language":
          r = this.languageRuleSet.apply(e, n);
          break;
        default:
          console.warn("no default applied rule for", e.type);
          break;
      }
      return r;
    }
    applyRules(e) {
      return new Promise((n) => {
        const r = u9(e, this.text);
        if (!r) {
          n(null);
          return;
        }
        n(this.runRules(r));
      });
    }
    runRules(e, n = !1) {
      const r = this._applyRules(e, n),
        i = r.rule_applied ? r.annotation : e;
      return (
        r.rule_applied && (i.color = z8[i.type]),
        {
          id: e.id,
          processed: i,
          original: e,
          modified: r.rule_applied ? r.annotation : null,
          appliedRules: r.appliedRules,
          saving: !1,
          error: !1,
        }
      );
    }
  }
  class h9 {
    constructor() {
      et(this, "annotationRepository", new sf());
      et(this, "annotationRuleSets");
      et(this, "duplicateRule");
      et(this, "id");
      et(this, "text", "");
      et(this, "annotations", mt(new Map()));
      et(
        this,
        "annotationValues",
        ht(() => Array.from(this.annotations.value.values())),
      );
    }
    async getAnnotation(e) {
      this.reset();
      try {
        const n = await this.annotationRepository.fetchAnnotation(e),
          { text: r, flags: i, annotations: o } = n;
        (this.id = e),
          this.createRulesSet(r),
          console.group("Load annotations for ", e),
          console.log("Totaal aantal annotaties", o.length, "textlengte", r.length),
          console.time(`process_${e}`);
        const s = (await Promise.all(o.map((a) => this.applyRules(a)))).filter((a) => !!a);
        return (
          this.checkForDuplicates(s), console.timeEnd(`process_${e}`), console.groupEnd(), { text: r, id: e, flags: i }
        );
      } catch (n) {
        throw (console.error(n), new Error(n));
      }
    }
    reset() {
      this.annotations.value.clear();
    }
    checkForDuplicates(e) {
      const n = e.map((r) => r.processed);
      (this.duplicateRule = new K8(this.text, n)),
        e.forEach((r) => {
          r.duplicates = this.duplicateRule.hasDuplicate(r.processed);
        });
    }
    createRulesSet(e) {
      (this.text = e), (this.annotationRuleSets = new f9(e));
    }
    async applyRules(e) {
      const n = await this.annotationRuleSets.applyRules(e);
      return n ? (this.annotations.value.set(e.id, n), n) : null;
    }
    async debugRule(e) {
      const n = this.annotationRuleSets.runRules(e, !0);
      return n || null;
    }
    processAnnotation({ end: e, start: n, id: r }) {
      const i = this.annotations.value.get(r),
        { processed: o } = i;
      (o.end = e), (o.start = n);
    }
    modifyAnnotation({ start: e, end: n, id: r }) {
      const i = this.annotations.value.get(r),
        { processed: o, modified: s } = i;
      s || (i.modified = jn(o)), (i.modified.end = n), (i.modified.start = e);
    }
    async confirmAnnotationLocal(e, n) {
      const r = this.annotations.value.get(e),
        i = jn(n === "modified" ? r.modified : r.original);
      return (
        (r.saving = !0),
        (r.error = !1),
        await this.updateAnnotation(i).catch((o) => {
          throw (console.error(o), (r.saving = !1), (r.error = !0), Error(o));
        }),
        (r.modified = null),
        (r.hasOverride = !0),
        (r.processed = i),
        r
      );
    }
    async confirmAnnotation(e, n) {
      const r = await this.confirmAnnotationLocal(e, n);
      return (
        this.duplicateRule.updateAnnotation(r.processed).forEach((o) => this.updateDuplicates(o)),
        this.updateDuplicates(r.processed),
        r
      );
    }
    async deleteAnnotation(e) {
      const n = this.annotations.value.get(e);
      (n.saving = !0),
        (n.error = !1),
        await this.updateAnnotation(n.processed, !0).catch((i) => {
          throw (console.error(i), (n.saving = !1), (n.error = !0), Error(i));
        }),
        this.annotations.value.delete(e),
        this.duplicateRule.removeAnnotation(n.processed).forEach((i) => this.updateDuplicates(i));
    }
    updateAnnotation(e, n = !1) {
      const { start: r, end: i, type: o, id: s } = e;
      return this.annotationRepository.patchAnnotation(s, o, {
        selection_start: r,
        selection_end: i,
        selection_length: i - r,
        is_deleted: n,
      });
    }
    updateDuplicates(e) {
      const n = this.annotations.value.get(e.id);
      n && (n.duplicates = this.duplicateRule.hasDuplicate(e));
    }
    async confirmAnnotations(e) {
      const n = [];
      e.forEach((r, i) => n.push(this.confirmAnnotationLocal(i, r))),
        await Promise.all(n),
        this.checkForDuplicates(Array.from(this.annotations.value.values()));
    }
    reviewDone() {
      return this.annotationRepository.reviewDone(this.id);
    }
    needsAttention() {
      return this.annotationRepository.needsAttention(this.id);
    }
  }
  const Vl = (t) => {
      const e = Number(t);
      return isNaN(e) ? null : e;
    },
    p9 = 25,
    ys = no("searchStore", () => {
      const t = Us(),
        e = qs(),
        n = mt(Vl(t.query.pageSize) ?? p9),
        r = mt(Vl(t.query.page) ?? 1),
        i = mt(Date.now()),
        o = mt({ orderBy: t.query.orderBy ?? "title", ascending: t.query.ascending === "0" ? 0 : 1 }),
        s = { project: [3] };
      Object.entries(t.query).forEach(([_, w]) => {
        ["pageSize", "page"].includes(_) || (Array.isArray(w) ? (s[_] = w.map((v) => v)) : (s[_] = [w]));
      });
      const a = mt(jn(s)),
        l = new sf(),
        u = Xn(async () => l.filters()),
        c = Xn(async () => {
          const _ = a.value,
            w = r.value,
            { ascending: v, orderBy: C } = o.value,
            R = i.value;
          return console.log("refresh", R), w ? l.listTexts(_, w, n.value, C, v) : { count: 0, results: [] };
        }),
        f = ht(() => {
          var _;
          return ((_ = c.value) == null ? void 0 : _.data) ?? [];
        }),
        h = ht(() => {
          var _;
          return ((_ = c.value) == null ? void 0 : _.count) ?? 0;
        }),
        p = ht(() => {
          var _;
          return ((_ = c.value) == null ? void 0 : _.filters) ?? [];
        }),
        d = (_) => ((a.value = jn(_)), e.replace({ query: { ...t.query, ..._ } })),
        m = ht(() => Math.ceil(h.value / n.value)),
        y = (_ = 1) => {
          const w = Vl(_) ?? 1;
          let v = w < 1 ? 1 : w;
          const C = m.value;
          return (
            v > C && (v = C),
            (r.value = v),
            console.log("change page", m, v),
            e.replace({ query: { ...t.query, page: r.value } })
          );
        },
        b = (_, w) => (
          (o.value = { orderBy: _, ascending: w }), e.replace({ query: { ...t.query, orderBy: _, ascending: w } })
        );
      return (
        (!t.query.pageSize || !t.query.page || !t.query.orderBy || !t.query.ascending) &&
          e.replace({ query: { ...t.query, pageSize: n.value, page: r.value, ...o.value } }),
        {
          sort: o,
          pageSize: n,
          page: r,
          filters: u,
          filterValues: a,
          data: f,
          searchFilters: p,
          count: h,
          searchResult: c,
          maxPage: m,
          refresh: () => (i.value = Date.now()),
          changePage: y,
          onSearch: d,
          changeOrder: b,
        }
      );
    }),
    bb = (t, e) => {
      const n = (t ?? 0) / e;
      return Math.ceil(n);
    },
    Lu = no("paginationStore", () => {
      const t = ys(),
        e = af(),
        n = new sf(),
        r = mt([]),
        i = async () => {
          const { ascending: p, orderBy: d } = t.sort,
            m = await n.paginate(t.filterValues, t.page, t.pageSize, d, p);
          return (r.value = m), m;
        },
        o = Xn(async () => {
          const { ascending: p, orderBy: d } = t.sort;
          return (await n.paginate(t.filterValues, 1, 1, d, p))[0];
        }),
        s = Xn(async () => {
          const { ascending: p, orderBy: d } = t.sort;
          return (await n.listTexts(t.filterValues, 1, 1, d, p)).count;
        }),
        a = Xn(async () => {
          const { ascending: p, orderBy: d } = t.sort;
          return (await n.paginate(t.filterValues, s.value, 1, d, p))[0];
        });
      Xn(() => i());
      const l = ht(() => r.value.findIndex((p) => p === e.id));
      return {
        firstId: o,
        lastId: a,
        next: async () => {
          const p = l.value;
          let d = p < 0 ? void 0 : r.value[p + 1];
          if (d) await e.changeId(d);
          else {
            if (t.page >= t.maxPage) return;
            if ((await t.changePage(t.page + 1), await i(), (d = r.value[0]), d == a.value)) {
              await t.changePage(t.page + 1);
              return;
            }
            d && d !== a.value && (await e.changeId(d));
          }
        },
        previous: async () => {
          const p = l.value,
            d = r.value.length;
          let m = p < 0 ? void 0 : r.value[p - 1];
          if (m) await e.changeId(m);
          else {
            if (t.page === 1 || (await t.changePage(t.page - 1), await i(), (m = r.value[d]), m == o.value)) return;
            m && (await e.changeId(m));
          }
        },
        toFirst: async () => {
          await e.changeId(o.value), await t.changePage(1);
        },
        toLast: async () => {
          const p = bb(s.value, t.pageSize);
          await e.changeId(a.value), await t.changePage(p);
        },
      };
    }),
    d9 = (t, e, n, r) => {
      var o;
      if ((r && e.duplicates.length < 1) || (n && (!e.modified || e.hasOverride))) return !1;
      const i = ((o = e == null ? void 0 : e.original) == null ? void 0 : o.type) ?? "";
      return t.length === 0 || t.includes(i);
    },
    Pm = (t, e) => (t.processed.start < e.processed.start ? -1 : 1),
    g9 = (t, e, n, r) => (t.length === 0 && !n && !r ? e.sort(Pm) : e.filter((o) => d9(t, o, n, r)).sort(Pm)),
    af = no("annotationStore", () => {
      const t = Us(),
        e = qs(),
        n = mt(Number(t.params.id)),
        r = Xn(async () => {
          console.log("id", n.value);
          const $ = new h9();
          if (!n.value) return null;
          try {
            const E = await $.getAnnotation(n.value);
            return { annotationStore: $, ...E };
          } catch (E) {
            console.error(E), console.error("Fout bij het laden van de annotaties");
          } finally {
            console.log("Total processed annotations", d.value.length),
              console.log("Total modified annotations", m.value.length),
              console.log("Total original annotations", p.value.length);
          }
          return null;
        }),
        i = ht(() => {
          var $;
          return (($ = r.value) == null ? void 0 : $.text) || "";
        }),
        o = ht(() => {
          var $;
          return (($ = r.value) == null ? void 0 : $.annotationStore) || null;
        }),
        s = ht(() => {
          var $;
          return (($ = r.value) == null ? void 0 : $.flags) || { needs_attention: !1, review_done: !1 };
        }),
        a = mt(!1),
        l = mt(!1),
        u = mt(["language", "typography", "orthography", "lexis", "morpho_syntactical"]),
        c = ht(() => {
          var $, E;
          return ((E = ($ = o.value) == null ? void 0 : $.annotationValues) == null ? void 0 : E.value) || [];
        }),
        f = ht(() => g9(u.value, c.value, a.value, l.value)),
        h = ht(() => c.value.length),
        p = ht(() => f.value.map(($) => $.original)),
        d = ht(() => f.value.map(($) => $.processed)),
        m = ht(() => f.value.filter(($) => !!$.modified || $.duplicates.length > 1)),
        y = ht(() => f.value.filter(($) => $.duplicates.length > 1)),
        b = ht(() => c.value.filter(($) => $.hasOverride || !$.modified).length),
        _ = ht(() => {
          const $ = r.value;
          return !$ || $.id !== n.value;
        }),
        w = ($) => ((n.value = $), e.push({ name: "annotation", params: { id: $ }, query: t.query }));
      return (
        Re(
          () => t.params.id,
          ($, E) => {
            const g = Number($);
            g && n.value !== g && w(g);
          },
        ),
        {
          id: n,
          loading: _,
          changeId: w,
          fetchNewValue: r,
          originalAnnotations: p,
          processedAnnotations: d,
          modifiedAnnotations: m,
          selectedFilters: u,
          duplicates: y,
          totalAnnotations: h,
          flags: s,
          totalProcessedAnnotation: b,
          debugRule: ($) => {
            var E;
            return (E = o.value) == null ? void 0 : E.debugRule($);
          },
          changeShowModified: ($) => (a.value = $),
          changeShowOnlyDuplicates: ($) => (l.value = $),
          modifyAnnotation: ($) => {
            var E;
            return (E = o.value) == null ? void 0 : E.modifyAnnotation($);
          },
          confirmAnnotation: ($, E) => {
            var g;
            return (g = o.value) == null ? void 0 : g.confirmAnnotation($, E);
          },
          confirmAnnotations: ($) => {
            var E;
            return (E = o.value) == null ? void 0 : E.confirmAnnotations($);
          },
          deleteAnnotation: ($) => {
            var E;
            return (E = o.value) == null ? void 0 : E.deleteAnnotation($);
          },
          needsAttention: async () => {
            var $;
            await (($ = o.value) == null ? void 0 : $.needsAttention()), Lu().next(), ys().refresh();
          },
          reviewDone: async () => {
            var $;
            await (($ = o.value) == null ? void 0 : $.reviewDone()), Lu().next(), ys().refresh();
          },
          text: i,
        }
      );
    }),
    wb = no("editPaginationStore", () => {
      const t = af(),
        e = ht(() => t.modifiedAnnotations.length),
        n = mt(1),
        r = mt(10),
        i = ht(() => Math.ceil(e.value / r.value)),
        o = (l) => (l <= 1 ? 1 : l > i.value ? i.value : l),
        s = ht(() => {
          const l = (o(n.value) - 1) * r.value,
            u = l + r.value;
          return t.modifiedAnnotations.slice(l, u);
        }),
        a = (l) => {
          n.value = o(l);
        };
      return {
        items: s,
        next: () => a(n.value + 1),
        previous: () => a(n.value - 1),
        totalPages: i,
        activePage: n,
        toFirst: () => a(1),
        toLast: () => a(i.value),
      };
    }),
    m9 = { key: 0, class: "flex flex-col gap-2 align-items" },
    _9 = { class: "flex gap-1 items-center" },
    v9 = { class: "flex-grow text-center" },
    Im = Gt({
      __name: "AnnotationEditListPaginator",
      setup(t) {
        const e = wb(),
          n = ht(() => e.activePage === e.totalPages),
          r = ht(() => e.activePage === 1);
        return (i, o) =>
          V(e).totalPages > 1
            ? (Y(),
              Q("div", m9, [
                N("div", _9, [
                  N(
                    "button",
                    {
                      class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.value }]),
                      onClick: o[0] || (o[0] = (...s) => V(e).toFirst && V(e).toFirst(...s)),
                    },
                    [at(V(gv), { class: "h-3" })],
                    2,
                  ),
                  N(
                    "button",
                    {
                      class: Vt(["btn btn-ghost btn-icon btn-xs ", { "btn-disabled": r.value }]),
                      onClick: o[1] || (o[1] = (...s) => V(e).previous && V(e).previous(...s)),
                    },
                    [at(V(_v), { class: "h-3" })],
                    2,
                  ),
                  N("div", v9, "Page " + jt(V(e).activePage) + " of " + jt(V(e).totalPages), 1),
                  N(
                    "button",
                    {
                      class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": n.value }]),
                      onClick: o[2] || (o[2] = (...s) => V(e).next && V(e).next(...s)),
                    },
                    [at(V(vv), { class: "h-3" })],
                    2,
                  ),
                  N(
                    "button",
                    {
                      class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": n.value }]),
                      onClick: o[3] || (o[3] = (...s) => V(e).toLast && V(e).toLast(...s)),
                    },
                    [at(V(mv), { class: "h-3" })],
                    2,
                  ),
                ]),
              ]))
            : oe("", !0);
      },
    }),
    y9 = { class: "flex flex-col gap-3 h-full" },
    b9 = { class: "card-title flex justify-between" },
    w9 = { class: "flex flex-col gap-2 overflow-auto" },
    x9 = ["data-annotation"],
    k9 = { class: "flex justify-end gap-2" },
    A9 = Gt({
      __name: "AnnotationEditList",
      props: { highlightAnnotationIds: {}, showMetadata: { type: Boolean }, text: {}, textId: {} },
      emits: [
        "confirmAnnotations",
        "confirmAnnotation",
        "deleteAnnotation",
        "modifyAnnotations",
        "highlightAnnotation",
        "needsAttention",
        "reviewDone",
      ],
      setup(t, { emit: e }) {
        const n = mt([]),
          r = mt(new Map()),
          i = t;
        Re(
          () => i.highlightAnnotationIds,
          (h) => {
            f(h);
          },
        );
        const o = wb(),
          s = function (h, p) {
            p ? r.value.set(h.id, p) : r.value.delete(h.id);
          },
          a = e,
          l = () => {
            a("confirmAnnotations", r.value);
          },
          u = (h, p) => {
            a("confirmAnnotation", h.id, p);
          },
          c = (h) => {
            a("deleteAnnotation", h.id);
          },
          f = (h) => {
            n.value = h;
          };
        return (h, p) => (
          Y(),
          Q("div", y9, [
            N("div", b9, [p[6] || (p[6] = N("div", { class: "flex-grow" }, "Aangepaste Annotaties", -1)), oe("", !0)]),
            N("div", w9, [
              at(Im),
              (Y(!0),
              Q(
                $t,
                null,
                me(
                  V(o).items,
                  (d) => (
                    Y(),
                    Q(
                      "div",
                      {
                        key: d.id,
                        "data-annotation": d.id,
                        ref_for: !0,
                        ref: `annotation-${d.id}`,
                        class: Vt({ "min-h-[20px]": !1 }),
                      },
                      [
                        at(
                          H8,
                          {
                            annotation: d.modified,
                            originalAnnotation: d.original,
                            textId: h.textId,
                            text: h.text,
                            selected: r.value.get(d.id),
                            duplicates: d.duplicates,
                            highlight: n.value.includes(d.id),
                            appliedRules: d.appliedRules,
                            disabled: d.saving,
                            error: d.error,
                            showMetadata: h.showMetadata,
                            onConfirmAnnotation: u,
                            onDeleteAnnotation: c,
                            onChangeSelected: s,
                            onOnHighlight: f,
                            onHighlightAnnotation: p[2] || (p[2] = (m) => a("highlightAnnotation", m)),
                            onModifyAnnotations: p[3] || (p[3] = (m) => a("modifyAnnotations", m)),
                          },
                          null,
                          8,
                          [
                            "annotation",
                            "originalAnnotation",
                            "textId",
                            "text",
                            "selected",
                            "duplicates",
                            "highlight",
                            "appliedRules",
                            "disabled",
                            "error",
                            "showMetadata",
                          ],
                        ),
                      ],
                      8,
                      x9,
                    )
                  ),
                ),
                128,
              )),
              at(Im),
            ]),
            p[7] || (p[7] = N("hr", null, null, -1)),
            N("div", k9, [
              N(
                "button",
                { class: "btn", onClick: p[4] || (p[4] = (d) => a("needsAttention")) },
                "Text heeft extra aandacht nodig",
              ),
              N("button", { class: "btn", onClick: p[5] || (p[5] = (d) => a("reviewDone")) }, "Text Verwerkt"),
              N("button", { class: "btn", onClick: l }, "Bevestig Selectie"),
            ]),
          ])
        );
      },
    }),
    E9 = { key: 0, class: "grid grid-cols-2 gap-2 overflow-auto h-full" },
    C9 = { class: "border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed" },
    S9 = Gt({
      __name: "AnnotationTextCompare",
      props: { originalAnnotations: {}, processedAnnotations: {}, text: {}, textId: {} },
      emits: ["modifyAnnotations", "showAnnotation"],
      setup(t, { emit: e }) {
        const n = e;
        return (r, i) =>
          r.text
            ? (Y(),
              Q("div", E9, [
                N("div", C9, [
                  i[2] || (i[2] = N("div", { class: "text-lg font-bold" }, "Originele Tekst", -1)),
                  at(
                    vs,
                    {
                      "full-text-id": r.textId,
                      text: r.text,
                      annotations: r.originalAnnotations,
                      "allow-edit": !1,
                      "annotation-id": "original-text" + r.textId,
                    },
                    null,
                    8,
                    ["full-text-id", "text", "annotations", "annotation-id"],
                  ),
                ]),
                N("div", null, [
                  i[3] || (i[3] = N("div", { class: "text-lg font-bold" }, "Verwerkte Tekst", -1)),
                  at(
                    vs,
                    {
                      "full-text-id": r.textId,
                      text: r.text,
                      annotations: r.processedAnnotations,
                      "allow-edit": !0,
                      onDoubleClickAnnotation: i[0] || (i[0] = (o) => n("showAnnotation", o)),
                      onModifyAnnotations: i[1] || (i[1] = (o) => n("modifyAnnotations", o)),
                    },
                    null,
                    8,
                    ["full-text-id", "text", "annotations"],
                  ),
                ]),
              ]))
            : oe("", !0);
      },
    }),
    T9 = { class: "flex justify-center items-center gap-4" },
    $9 = ["for"],
    D9 = ["id", "value"],
    O9 = { class: "pl-2 label-text" },
    R9 = Gt({
      __name: "TypeFilter",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(t) {
        const e = L_(t, "modelValue");
        return (n, r) => (
          Y(),
          Q("div", T9, [
            r[1] || (r[1] = N("div", { class: "font-bold" }, "Filter:", -1)),
            (Y(!0),
            Q(
              $t,
              null,
              me(
                V(J8),
                (i) => (
                  Y(),
                  Q("div", { key: i, class: "form-control" }, [
                    N(
                      "label",
                      { for: i, class: "label cursor-pointer" },
                      [
                        Fs(
                          N(
                            "input",
                            {
                              class: "checkbox",
                              type: "checkbox",
                              id: i,
                              value: i,
                              "onUpdate:modelValue": r[0] || (r[0] = (o) => (e.value = o)),
                            },
                            null,
                            8,
                            D9,
                          ),
                          [[cc, e.value]],
                        ),
                        N("span", O9, jt(i), 1),
                      ],
                      8,
                      $9,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ])
        );
      },
    }),
    F9 = { class: "flex flex-col gap-2 align-items" },
    z9 = { class: "flex gap-1 items-center" },
    P9 = ["href"],
    I9 = Gt({
      __name: "SearchPaginator",
      props: { activeId: {} },
      setup(t) {
        const e = Lu(),
          n = Us();
        return (r, i) => {
          const o = E_("router-link");
          return (
            Y(),
            Q("div", F9, [
              N("div", z9, [
                N(
                  "button",
                  {
                    class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === V(e).firstId }]),
                    onClick: i[0] || (i[0] = (...s) => V(e).toFirst && V(e).toFirst(...s)),
                  },
                  [at(V(gv), { class: "h-3" })],
                  2,
                ),
                N(
                  "button",
                  {
                    class: Vt(["btn btn-ghost btn-icon btn-xs ", { "btn-disabled": r.activeId === V(e).firstId }]),
                    onClick: i[1] || (i[1] = (...s) => V(e).previous && V(e).previous(...s)),
                  },
                  [at(V(_v), { class: "h-3" })],
                  2,
                ),
                N(
                  "a",
                  {
                    href: `https://dev.evwrit.ugent.be/text/${r.activeId}`,
                    target: "_blank",
                    class: "text-sm w-16 text-center hover:underline",
                  },
                  jt(r.activeId),
                  9,
                  P9,
                ),
                N(
                  "button",
                  {
                    class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === V(e).lastId }]),
                    onClick: i[2] || (i[2] = (...s) => V(e).next && V(e).next(...s)),
                  },
                  [at(V(vv), { class: "h-3" })],
                  2,
                ),
                N(
                  "button",
                  {
                    class: Vt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === V(e).lastId }]),
                    onClick: i[3] || (i[3] = (...s) => V(e).toLast && V(e).toLast(...s)),
                  },
                  [at(V(mv), { class: "h-3" })],
                  2,
                ),
              ]),
              at(
                o,
                { class: "link btn-ghost btn-icon", to: { name: "search", query: V(n).query } },
                { default: rc(() => i[4] || (i[4] = [yn(" Terug naar zoeken ")])), _: 1, __: [4] },
                8,
                ["to"],
              ),
            ])
          );
        };
      },
    }),
    j9 = Gt({
      __name: "selected-annotation",
      props: { text: {}, annotation: {} },
      setup(t) {
        return (e, n) => (
          Y(),
          Q(
            $t,
            null,
            [
              at(
                vs,
                {
                  "annotation-id": `annotation-metatadata-${e.annotation.id}`,
                  annotations: [e.annotation],
                  text: e.text,
                  limit: e.annotation,
                  "allow-edit": !1,
                },
                null,
                8,
                ["annotation-id", "annotations", "text", "limit"],
              ),
              at(_b, { annotation: e.annotation }, null, 8, ["annotation"]),
            ],
            64,
          )
        );
      },
    }),
    M9 = { class: "navbar bg-base-100" },
    N9 = { class: "flex-none" },
    L9 = { class: "flex flex-row gap-4 items-center" },
    B9 = { class: "label cursor-pointer gap-2" },
    q9 = ["checked"],
    U9 = { class: "label-text" },
    Z9 = { class: "label cursor-pointer gap-2" },
    V9 = ["checked"],
    H9 = { class: "label-text" },
    G9 = { class: "label cursor-pointer gap-2" },
    W9 = { class: "flex flex-row gap-2" },
    K9 = { key: 0, class: "badge badge-success badge-outline" },
    J9 = { key: 1, class: "badge badge-error badge-outline" },
    X9 = { key: 0, class: "absolute left-1/2 top-1/2 loading loading-bars loading-lg" },
    Y9 = Gt({
      __name: "AnnotationView",
      setup(t) {
        const e = mt(!1),
          n = mt(!1),
          r = mt(!1),
          i = mt([]),
          o = ht(() => {
            const d = i.value;
            return d.length === 0
              ? null
              : d
                  .filter((y) => !l.modifiedAnnotations.some((b) => b.id === y))
                  .map((y) => l.originalAnnotations.find((b) => b.id === y) ?? null)
                  .filter((y) => y !== null);
          }),
          s = () => {
            (i.value = []), (e.value = !e.value), l.changeShowModified(e.value);
          },
          a = () => {
            (i.value = []), (n.value = !n.value), l.changeShowOnlyDuplicates(n.value);
          },
          l = af(),
          u = (d) => {
            console.log("modify annotations"), l.modifyAnnotation(d);
          },
          c = (d, m) => {
            l.confirmAnnotation(d, m);
          },
          f = (d) => {
            l.deleteAnnotation(d);
          },
          h = (d) => {
            l.confirmAnnotations(d);
          },
          p = (d) => {
            var m;
            (i.value = []),
              d &&
                (console.group("Debugging applied rules: "),
                console.log(d.id),
                l.debugRule(d),
                console.groupEnd(),
                (m = document.querySelector(`[data-annotation="${d.id}"]`)) == null || m.scrollIntoView(),
                (i.value = [d.id]));
          };
        return (d, m) => (
          Y(),
          Q(
            $t,
            null,
            [
              N("div", M9, [
                at(I9, { "active-id": V(l).id }, null, 8, ["active-id"]),
                N("div", N9, [
                  at(
                    R9,
                    {
                      modelValue: V(l).selectedFilters,
                      "onUpdate:modelValue": m[0] || (m[0] = (y) => (V(l).selectedFilters = y)),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ]),
              ]),
              N(
                "div",
                { class: Vt(["flex p-1 gap-1 viewer", { "opacity-30": V(l).loading }]) },
                [
                  N(
                    "div",
                    { class: Vt(["p-4 border flex flex-col", { "w-1/2": r.value, "w-2/3": !r.value }]) },
                    [
                      N("div", L9, [
                        N("label", B9, [
                          N(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: e.value, onClick: s },
                            null,
                            8,
                            q9,
                          ),
                          N(
                            "span",
                            U9,
                            " Enkel Gewijzigde annotaties (" + jt(V(l).modifiedAnnotations.length) + ")",
                            1,
                          ),
                        ]),
                        N("label", Z9, [
                          N(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: n.value, onClick: a },
                            null,
                            8,
                            V9,
                          ),
                          N("span", H9, " Enkel Duplicaten (" + jt(V(l).duplicates.length) + ")", 1),
                        ]),
                        N("label", G9, [
                          Fs(
                            N(
                              "input",
                              {
                                type: "checkbox",
                                class: "toggle toggle-sm",
                                "onUpdate:modelValue": m[1] || (m[1] = (y) => (r.value = y)),
                              },
                              null,
                              512,
                            ),
                            [[cc, r.value]],
                          ),
                          m[2] || (m[2] = N("span", { class: "label-text" }, "Toon metadata", -1)),
                        ]),
                      ]),
                      at(
                        S9,
                        {
                          text: V(l).text,
                          originalAnnotations: V(l).originalAnnotations,
                          processedAnnotations: V(l).processedAnnotations,
                          "text-id": V(l).id,
                          onModifyAnnotations: u,
                          onShowAnnotation: p,
                        },
                        null,
                        8,
                        ["text", "originalAnnotations", "processedAnnotations", "text-id"],
                      ),
                    ],
                    2,
                  ),
                  N(
                    "div",
                    { class: Vt([" border p-4", { "w-1/3": !r.value, "w-1/2": r.value }]) },
                    [
                      (Y(!0),
                      Q(
                        $t,
                        null,
                        me(
                          o.value,
                          (y) => (
                            Y(),
                            Q("div", { class: "card border mb-2 p-2", key: y.id }, [
                              at(j9, { annotation: y, text: V(l).text }, null, 8, ["annotation", "text"]),
                            ])
                          ),
                        ),
                        128,
                      )),
                      N("div", W9, [
                        N(
                          "div",
                          null,
                          " Verwerkte annotaties: " +
                            jt(V(l).totalProcessedAnnotation) +
                            "/" +
                            jt(V(l).totalAnnotations),
                          1,
                        ),
                        V(l).flags.review_done ? (Y(), Q("div", K9, "Text verwerkt")) : oe("", !0),
                        V(l).flags.needs_attention ? (Y(), Q("div", J9, "Aandacht vereist")) : oe("", !0),
                      ]),
                      at(
                        A9,
                        {
                          modifiedAnnotations: V(l).modifiedAnnotations,
                          text: V(l).text,
                          highlightAnnotationIds: i.value,
                          "show-metadata": r.value,
                          "text-id": V(l).id,
                          onConfirmAnnotation: c,
                          onDeleteAnnotation: f,
                          onConfirmAnnotations: h,
                          onModifyAnnotations: u,
                          onNeedsAttention: V(l).needsAttention,
                          onReviewDone: V(l).reviewDone,
                        },
                        null,
                        8,
                        [
                          "modifiedAnnotations",
                          "text",
                          "highlightAnnotationIds",
                          "show-metadata",
                          "text-id",
                          "onNeedsAttention",
                          "onReviewDone",
                        ],
                      ),
                    ],
                    2,
                  ),
                  V(l).loading ? (Y(), Q("span", X9)) : oe("", !0),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    Q9 = { class: "table" },
    tL = ["onClick"],
    eL = { class: "flex justify-between" },
    nL = { class: "flex-grow" },
    rL = { class: "" },
    iL = {
      key: 0,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    oL = {
      key: 1,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    sL = {
      key: 2,
      class: "h-3",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    aL = ["onClick"],
    lL = { key: 0 },
    uL = {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "{1.5}",
      stroke: "currentColor",
      class: "w-4 m-auto",
    },
    cL = { key: 1 },
    fL = { class: "flex justify-around py-2" },
    hL = { class: "join" },
    pL = ["onClick"],
    dL = Gt({
      __name: "SearchResult",
      props: { count: {}, data: {}, pageSize: {}, activePage: {}, sort: {} },
      emits: ["changePage", "changeOrder"],
      setup(t, { emit: e }) {
        const n = [
            { label: "Id", id: "id" },
            { label: "tm_id", id: "tm_id" },
            { label: "Title", id: "title" },
            { label: "Year begin", id: "year_begin" },
            { label: "Year end", id: "year_end" },
            { label: "Vereist aaandacht", id: "flag_needs_attention", type: "boolean" },
            { label: "Verwerkt", id: "flag_review_done", type: "boolean" },
          ],
          r = t,
          i = mt([]),
          o = (p, d = !1) => {
            const m = p;
            return { page: m, label: m, disabled: d, key: p };
          },
          s = (p) => {
            var v, C, R, z;
            const d = bb(p.count, p.pageSize);
            if (d < 1) return [];
            const m = 14,
              y = d < m ? d : m;
            let b = 1;
            d > m && ((b = p.activePage - m / 2), b < 1 ? (b = 1) : b + m > d && (b = d - m + 1));
            const _ = (B) => ({ page: 0, label: "...", disabled: !0, key: B }),
              w = Array.from({ length: y }).map((B, $) => o($ + b));
            ((v = w[0]) == null ? void 0 : v.page) > 2 && w.unshift(_(-1)),
              ((C = w[0]) == null ? void 0 : C.page) !== 1 && w.unshift(o(1)),
              ((R = w[w.length - 1]) == null ? void 0 : R.page) < d - 1 && w.push(_(-2)),
              ((z = w[w.length - 1]) == null ? void 0 : z.page) !== d && w.push(o(d)),
              (i.value = w.flat());
          };
        oc(() => {
          s(r);
        }),
          A_(() => {
            s(r);
          });
        const a = e,
          l = (p) => {
            a("changePage", p);
          },
          u = qs(),
          c = Us(),
          f = (p) => {
            u.push({ name: "annotation", params: { id: p.id }, query: c.query });
          },
          h = (p) => {
            let d = 1;
            r.sort.orderBy === p.id && (d = r.sort.ascending === 0 ? 1 : 0), a("changeOrder", p.id, d);
          };
        return (p, d) => (
          Y(),
          Q(
            $t,
            null,
            [
              N("table", Q9, [
                N("thead", null, [
                  N("tr", null, [
                    (Y(),
                    Q(
                      $t,
                      null,
                      me(n, (m) =>
                        N(
                          "th",
                          { key: m.id, onClick: (y) => h(m), class: "cursor-pointer" },
                          [
                            N("span", eL, [
                              N("span", nL, jt(m.label), 1),
                              N("button", rL, [
                                p.sort.orderBy !== m.id
                                  ? (Y(),
                                    Q(
                                      "svg",
                                      iL,
                                      d[0] ||
                                        (d[0] = [
                                          N(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9",
                                            },
                                            null,
                                            -1,
                                          ),
                                        ]),
                                    ))
                                  : p.sort.ascending == 0
                                    ? (Y(),
                                      Q(
                                        "svg",
                                        oL,
                                        d[1] ||
                                          (d[1] = [
                                            N(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "m19.5 8.25-7.5 7.5-7.5-7.5",
                                              },
                                              null,
                                              -1,
                                            ),
                                          ]),
                                      ))
                                    : p.sort.ascending === 1
                                      ? (Y(),
                                        Q(
                                          "svg",
                                          sL,
                                          d[2] ||
                                            (d[2] = [
                                              N(
                                                "path",
                                                {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  d: "m4.5 15.75 7.5-7.5 7.5 7.5",
                                                },
                                                null,
                                                -1,
                                              ),
                                            ]),
                                        ))
                                      : oe("", !0),
                              ]),
                            ]),
                          ],
                          8,
                          tL,
                        ),
                      ),
                      64,
                    )),
                  ]),
                ]),
                N("tbody", null, [
                  (Y(!0),
                  Q(
                    $t,
                    null,
                    me(
                      p.data,
                      (m) => (
                        Y(),
                        Q(
                          "tr",
                          { key: m.id, class: "hover hover:cursor-pointer", onClick: (y) => f(m) },
                          [
                            (Y(),
                            Q(
                              $t,
                              null,
                              me(n, (y) =>
                                N(
                                  "td",
                                  { key: y.id, class: Vt({ "text-center": y.type === "boolean" }) },
                                  [
                                    y.type === "boolean"
                                      ? (Y(),
                                        Q("span", lL, [
                                          m[y.id]
                                            ? (Y(),
                                              Q(
                                                "svg",
                                                uL,
                                                d[3] ||
                                                  (d[3] = [
                                                    N(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "m4.5 12.75 6 6 9-13.5",
                                                      },
                                                      null,
                                                      -1,
                                                    ),
                                                  ]),
                                              ))
                                            : oe("", !0),
                                        ]))
                                      : (Y(), Q("span", cL, jt(m[y.id]), 1)),
                                  ],
                                  2,
                                ),
                              ),
                              64,
                            )),
                          ],
                          8,
                          aL,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              N("div", fL, [
                N("div", hL, [
                  (Y(!0),
                  Q(
                    $t,
                    null,
                    me(
                      i.value,
                      (m) => (
                        Y(),
                        Q(
                          "button",
                          {
                            key: m.key,
                            class: Vt([
                              "join-item btn btn-xs btn-outline w-8",
                              { "btn-active": m.page === p.activePage, "btn-disabled": m.disabled },
                            ]),
                            onClick: (y) => l(m.page),
                          },
                          jt(m.label),
                          11,
                          pL,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ],
            64,
          )
        );
      },
    }),
    gL = {
      key: 0,
      class: "dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center",
    },
    mL = { tabindex: "0", role: "button", class: "h-full w-full" },
    _L = { tabindex: "0", class: "dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow" },
    vL = { class: "form-control" },
    yL = ["value"],
    bL = { key: 1 },
    wL = { class: "border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center" },
    xL = { class: "w-full" },
    kL = ["selected", "value", "onClick"],
    AL = Gt({
      __name: "SearchField",
      props: H1(
        { title: {}, id: {}, multi: { type: Boolean }, filterValues: {} },
        { modelValue: {}, modelModifiers: {} },
      ),
      emits: ["update:modelValue"],
      setup(t) {
        const e = t,
          n = L_(t, "modelValue"),
          r = ht(() => {
            var s, a;
            const o = e.filterValues ?? [];
            return (a = (s = n.value) == null ? void 0 : s.map) == null
              ? void 0
              : a.call(s, (l) => o.find((u) => u.id == l)).filter((l) => !!l);
          }),
          i = (o) => {
            const s = o.target.value;
            s === null ? (n.value = []) : (n.value = [s]);
          };
        return (o, s) =>
          o.multi
            ? (Y(),
              Q("div", gL, [
                N("div", mL, [
                  yn(jt(o.title) + ": ", 1),
                  (Y(!0),
                  Q(
                    $t,
                    null,
                    me(r.value, (a) => (Y(), Q("span", { class: "badge badge-ghost m-1", key: a.id }, jt(a.name), 1))),
                    128,
                  )),
                ]),
                N("ul", _L, [
                  (Y(!0),
                  Q(
                    $t,
                    null,
                    me(
                      o.filterValues,
                      (a) => (
                        Y(),
                        Q("li", { key: a.id }, [
                          N("label", vL, [
                            Fs(
                              N(
                                "input",
                                {
                                  value: a.id,
                                  "onUpdate:modelValue": s[0] || (s[0] = (l) => (n.value = l)),
                                  type: "checkbox",
                                  class: "checkbox checkbox-sm",
                                },
                                null,
                                8,
                                yL,
                              ),
                              [[cc, n.value]],
                            ),
                            N("span", null, jt(a.name), 1),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ]))
            : (Y(),
              Q("div", bL, [
                N("label", wL, [
                  N("div", xL, jt(o.title) + ":", 1),
                  N(
                    "select",
                    { class: "select s w-full max-w-xs", onChange: s[1] || (s[1] = (a) => i(a)) },
                    [
                      (Y(!0),
                      Q(
                        $t,
                        null,
                        me(o.filterValues, (a) => {
                          var l;
                          return (
                            Y(),
                            Q(
                              "option",
                              {
                                key: a.id,
                                selected: ((l = n.value) == null ? void 0 : l[0]) == a.id,
                                value: a.id,
                                onClick: (u) => i(a.id),
                              },
                              jt(a.name),
                              9,
                              kL,
                            )
                          );
                        }),
                        128,
                      )),
                    ],
                    32,
                  ),
                ]),
              ]));
      },
    }),
    EL = { class: "p-2 flex flex-col gap-2" },
    CL = { class: "grid grid-cols-2 gap-2" },
    SL = { class: "flex gap-2 items-center" },
    TL = {
      class: "input input-sm input-bordered border w-64 rounded px-2 py-1 text-sm min-h-12 flex items-center gap-2",
    },
    $L = ["disabled"],
    DL = Gt({
      __name: "SearchFilter",
      props: { searchFilters: {}, filters: {} },
      emits: ["search"],
      setup(t, { emit: e }) {
        const n = t,
          r = {
            project: { id: "project", title: "Project", multi: !0 },
            level_category_category: { id: "level_category_category", title: "Text type", multi: !0 },
            era: { id: "era", title: "Era", multi: !0 },
            flag_review_done: { id: "flag_review_done", title: "Tekst verwerkt" },
            flag_needs_attention: { id: "flag_needs_attention", title: "Vereist aandacht" },
          },
          i = mt(Object.keys(r).reduce((f, h) => ((f[h] = []), f), {})),
          o = mt(null),
          s = ht(() =>
            Object.values(r).map((f) => {
              var b, _, w;
              const h = f.id,
                p =
                  ((_ = (b = n.searchFilters) == null ? void 0 : b.find((v) => v.id === h)) == null
                    ? void 0
                    : _.value) ?? [],
                d = ((w = n.filters) == null ? void 0 : w[h]) ?? [],
                m = mt(p),
                y = f.type || null;
              return (i.value[f.id] = p), { ...f, type: y, model: m, filterValues: d };
            }),
          ),
          a = e,
          l = () => {
            const f = i.value;
            a("search", f);
          },
          u = qs(),
          c = () => {
            u.push({ name: "annotation", params: { id: o.value } });
          };
        return (f, h) => (
          Y(),
          Q("div", EL, [
            N("div", CL, [
              (Y(!0),
              Q(
                $t,
                null,
                me(
                  s.value,
                  (p) => (
                    Y(),
                    Q(
                      "div",
                      { key: p.id, class: Vt({ "col-span-2": p.multi }) },
                      [
                        at(
                          AL,
                          {
                            id: p.id,
                            title: p.title,
                            filterValues: p.filterValues,
                            multi: p.multi,
                            modelValue: i.value[p.id],
                            "onUpdate:modelValue": (d) => (i.value[p.id] = d),
                          },
                          null,
                          8,
                          ["id", "title", "filterValues", "multi", "modelValue", "onUpdate:modelValue"],
                        ),
                      ],
                      2,
                    )
                  ),
                ),
                128,
              )),
            ]),
            N("div", null, [
              N("button", { class: "btn btn-sm", onClick: l }, [
                at(V(gh), { class: "h-6" }),
                h[1] || (h[1] = yn(" Search ")),
              ]),
            ]),
            N("div", SL, [
              N("label", TL, [
                h[2] || (h[2] = N("span", null, "EvwritId: ", -1)),
                Fs(
                  N(
                    "input",
                    { "onUpdate:modelValue": h[0] || (h[0] = (p) => (o.value = p)), type: "number", class: "grow" },
                    null,
                    512,
                  ),
                  [[rx, o.value]],
                ),
              ]),
              N(
                "button",
                { class: "btn btn-sm", onClick: c, disabled: !o.value },
                [at(V(gh), { class: "h-6" }), h[3] || (h[3] = yn(" Zoek op id "))],
                8,
                $L,
              ),
            ]),
          ])
        );
      },
    }),
    OL = { class: "m-auto max-w-2xl" },
    RL = Gt({
      __name: "SearchView",
      setup(t) {
        const e = ys();
        return (n, r) => (
          Y(),
          Q("div", OL, [
            at(DL, { searchFilters: V(e).searchFilters, filters: V(e).filters, onSearch: V(e).onSearch }, null, 8, [
              "searchFilters",
              "filters",
              "onSearch",
            ]),
            r[0] || (r[0] = N("hr", null, null, -1)),
            at(
              dL,
              {
                sort: V(e).sort,
                data: V(e).data,
                count: V(e).count,
                activePage: V(e).page,
                pageSize: V(e).pageSize,
                onChangePage: V(e).changePage,
                onChangeOrder: V(e).changeOrder,
              },
              null,
              8,
              ["sort", "data", "count", "activePage", "pageSize", "onChangePage", "onChangeOrder"],
            ),
          ])
        );
      },
    });
  function lf() {
    return {
      async: !1,
      breaks: !1,
      extensions: null,
      gfm: !0,
      hooks: null,
      pedantic: !1,
      renderer: null,
      silent: !1,
      tokenizer: null,
      walkTokens: null,
    };
  }
  var _r = lf();
  function xb(t) {
    _r = t;
  }
  var Ci = { exec: () => null };
  function yt(t, e = "") {
    let n = typeof t == "string" ? t : t.source;
    const r = {
      replace: (i, o) => {
        let s = typeof o == "string" ? o : o.source;
        return (s = s.replace(se.caret, "$1")), (n = n.replace(i, s)), r;
      },
      getRegex: () => new RegExp(n, e),
    };
    return r;
  }
  var se = {
      codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
      outputLinkReplace: /\\([\[\]])/g,
      indentCodeCompensation: /^(\s+)(?:```)/,
      beginningSpace: /^\s+/,
      endingHash: /#$/,
      startingSpaceChar: /^ /,
      endingSpaceChar: / $/,
      nonSpaceChar: /[^ ]/,
      newLineCharGlobal: /\n/g,
      tabCharGlobal: /\t/g,
      multipleSpaceGlobal: /\s+/g,
      blankLine: /^[ \t]*$/,
      doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
      blockquoteStart: /^ {0,3}>/,
      blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
      blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
      listReplaceTabs: /^\t+/,
      listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
      listIsTask: /^\[[ xX]\] /,
      listReplaceTask: /^\[[ xX]\] +/,
      anyLine: /\n.*\n/,
      hrefBrackets: /^<(.*)>$/,
      tableDelimiter: /[:|]/,
      tableAlignChars: /^\||\| *$/g,
      tableRowBlankLine: /\n[ \t]*$/,
      tableAlignRight: /^ *-+: *$/,
      tableAlignCenter: /^ *:-+: *$/,
      tableAlignLeft: /^ *:-+ *$/,
      startATag: /^<a /i,
      endATag: /^<\/a>/i,
      startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
      endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
      startAngleBracket: /^</,
      endAngleBracket: />$/,
      pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
      unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
      escapeTest: /[&<>"']/,
      escapeReplace: /[&<>"']/g,
      escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
      escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
      unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
      caret: /(^|[^\[])\^/g,
      percentDecode: /%25/g,
      findPipe: /\|/g,
      splitPipe: / \|/,
      slashPipe: /\\\|/g,
      carriageReturn: /\r\n|\r/g,
      spaceLine: /^ +$/gm,
      notSpaceStart: /^\S*/,
      endingNewline: /\n$/,
      listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
      nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
      hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
      fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
      headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
      htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i"),
    },
    FL = /^(?:[ \t]*(?:\n|$))+/,
    zL = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    PL = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    po = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    IL = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    uf = /(?:[*+-]|\d{1,9}[.)])/,
    kb =
      /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    Ab = yt(kb)
      .replace(/bull/g, uf)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/\|table/g, "")
      .getRegex(),
    jL = yt(kb)
      .replace(/bull/g, uf)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
      .getRegex(),
    cf = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    ML = /^[^\n]+/,
    ff = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    NL = yt(
      /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
      .replace("label", ff)
      .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
      .getRegex(),
    LL = yt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, uf)
      .getRegex(),
    pa =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    hf = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    BL = yt(
      "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
      "i",
    )
      .replace("comment", hf)
      .replace("tag", pa)
      .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
      .getRegex(),
    Eb = yt(cf)
      .replace("hr", po)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", pa)
      .getRegex(),
    qL = yt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", Eb)
      .getRegex(),
    pf = {
      blockquote: qL,
      code: zL,
      def: NL,
      fences: PL,
      heading: IL,
      hr: po,
      html: BL,
      lheading: Ab,
      list: LL,
      newline: FL,
      paragraph: Eb,
      table: Ci,
      text: ML,
    },
    jm = yt(
      "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
      .replace("hr", po)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("blockquote", " {0,3}>")
      .replace("code", "(?: {4}| {0,3}	)[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", pa)
      .getRegex(),
    UL = {
      ...pf,
      lheading: jL,
      table: jm,
      paragraph: yt(cf)
        .replace("hr", po)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("table", jm)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", pa)
        .getRegex(),
    },
    ZL = {
      ...pf,
      html: yt(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace("comment", hf)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: Ci,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: yt(cf)
        .replace("hr", po)
        .replace(
          "heading",
          ` *#{1,6} *[^
]`,
        )
        .replace("lheading", Ab)
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .replace("|tag", "")
        .getRegex(),
    },
    VL = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    HL = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    Cb = /^( {2,}|\\)\n(?!\s*$)/,
    GL = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    da = /[\p{P}\p{S}]/u,
    df = /[\s\p{P}\p{S}]/u,
    Sb = /[^\s\p{P}\p{S}]/u,
    WL = yt(/^((?![*_])punctSpace)/, "u")
      .replace(/punctSpace/g, df)
      .getRegex(),
    Tb = /(?!~)[\p{P}\p{S}]/u,
    KL = /(?!~)[\s\p{P}\p{S}]/u,
    JL = /(?:[^\s\p{P}\p{S}]|~)/u,
    XL = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    $b = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    YL = yt($b, "u").replace(/punct/g, da).getRegex(),
    QL = yt($b, "u").replace(/punct/g, Tb).getRegex(),
    Db =
      "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    t7 = yt(Db, "gu")
      .replace(/notPunctSpace/g, Sb)
      .replace(/punctSpace/g, df)
      .replace(/punct/g, da)
      .getRegex(),
    e7 = yt(Db, "gu")
      .replace(/notPunctSpace/g, JL)
      .replace(/punctSpace/g, KL)
      .replace(/punct/g, Tb)
      .getRegex(),
    n7 = yt(
      "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
      "gu",
    )
      .replace(/notPunctSpace/g, Sb)
      .replace(/punctSpace/g, df)
      .replace(/punct/g, da)
      .getRegex(),
    r7 = yt(/\\(punct)/, "gu")
      .replace(/punct/g, da)
      .getRegex(),
    i7 = yt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        "email",
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
      )
      .getRegex(),
    o7 = yt(hf).replace("(?:-->|$)", "-->").getRegex(),
    s7 = yt(
      "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
      .replace("comment", o7)
      .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
      .getRegex(),
    bs = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    a7 = yt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
      .replace("label", bs)
      .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
      .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
      .getRegex(),
    Ob = yt(/^!?\[(label)\]\[(ref)\]/)
      .replace("label", bs)
      .replace("ref", ff)
      .getRegex(),
    Rb = yt(/^!?\[(ref)\](?:\[\])?/)
      .replace("ref", ff)
      .getRegex(),
    l7 = yt("reflink|nolink(?!\\()", "g").replace("reflink", Ob).replace("nolink", Rb).getRegex(),
    gf = {
      _backpedal: Ci,
      anyPunctuation: r7,
      autolink: i7,
      blockSkip: XL,
      br: Cb,
      code: HL,
      del: Ci,
      emStrongLDelim: YL,
      emStrongRDelimAst: t7,
      emStrongRDelimUnd: n7,
      escape: VL,
      link: a7,
      nolink: Rb,
      punctuation: WL,
      reflink: Ob,
      reflinkSearch: l7,
      tag: s7,
      text: GL,
      url: Ci,
    },
    u7 = {
      ...gf,
      link: yt(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", bs)
        .getRegex(),
      reflink: yt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", bs)
        .getRegex(),
    },
    Bu = {
      ...gf,
      emStrongRDelimAst: e7,
      emStrongLDelim: QL,
      url: yt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
        .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    c7 = {
      ...Bu,
      br: yt(Cb).replace("{2,}", "*").getRegex(),
      text: yt(Bu.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    },
    Po = { normal: pf, gfm: UL, pedantic: ZL },
    ri = { normal: gf, gfm: Bu, breaks: c7, pedantic: u7 },
    f7 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    Mm = (t) => f7[t];
  function Ue(t, e) {
    if (e) {
      if (se.escapeTest.test(t)) return t.replace(se.escapeReplace, Mm);
    } else if (se.escapeTestNoEncode.test(t)) return t.replace(se.escapeReplaceNoEncode, Mm);
    return t;
  }
  function Nm(t) {
    try {
      t = encodeURI(t).replace(se.percentDecode, "%");
    } catch {
      return null;
    }
    return t;
  }
  function Lm(t, e) {
    var o;
    const n = t.replace(se.findPipe, (s, a, l) => {
        let u = !1,
          c = a;
        for (; --c >= 0 && l[c] === "\\"; ) u = !u;
        return u ? "|" : " |";
      }),
      r = n.split(se.splitPipe);
    let i = 0;
    if ((r[0].trim() || r.shift(), r.length > 0 && !((o = r.at(-1)) != null && o.trim()) && r.pop(), e))
      if (r.length > e) r.splice(e);
      else for (; r.length < e; ) r.push("");
    for (; i < r.length; i++) r[i] = r[i].trim().replace(se.slashPipe, "|");
    return r;
  }
  function ii(t, e, n) {
    const r = t.length;
    if (r === 0) return "";
    let i = 0;
    for (; i < r && t.charAt(r - i - 1) === e; ) i++;
    return t.slice(0, r - i);
  }
  function h7(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for (let r = 0; r < t.length; r++)
      if (t[r] === "\\") r++;
      else if (t[r] === e[0]) n++;
      else if (t[r] === e[1] && (n--, n < 0)) return r;
    return n > 0 ? -2 : -1;
  }
  function Bm(t, e, n, r, i) {
    const o = e.href,
      s = e.title || null,
      a = t[1].replace(i.other.outputLinkReplace, "$1");
    r.state.inLink = !0;
    const l = {
      type: t[0].charAt(0) === "!" ? "image" : "link",
      raw: n,
      href: o,
      title: s,
      text: a,
      tokens: r.inlineTokens(a),
    };
    return (r.state.inLink = !1), l;
  }
  function p7(t, e, n) {
    const r = t.match(n.other.indentCodeCompensation);
    if (r === null) return e;
    const i = r[1];
    return e
      .split(
        `
`,
      )
      .map((o) => {
        const s = o.match(n.other.beginningSpace);
        if (s === null) return o;
        const [a] = s;
        return a.length >= i.length ? o.slice(i.length) : o;
      }).join(`
`);
  }
  var ws = class {
      constructor(t) {
        et(this, "options");
        et(this, "rules");
        et(this, "lexer");
        this.options = t || _r;
      }
      space(t) {
        const e = this.rules.block.newline.exec(t);
        if (e && e[0].length > 0) return { type: "space", raw: e[0] };
      }
      code(t) {
        const e = this.rules.block.code.exec(t);
        if (e) {
          const n = e[0].replace(this.rules.other.codeRemoveIndent, "");
          return {
            type: "code",
            raw: e[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic
              ? n
              : ii(
                  n,
                  `
`,
                ),
          };
        }
      }
      fences(t) {
        const e = this.rules.block.fences.exec(t);
        if (e) {
          const n = e[0],
            r = p7(n, e[3] || "", this.rules);
          return {
            type: "code",
            raw: n,
            lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
            text: r,
          };
        }
      }
      heading(t) {
        const e = this.rules.block.heading.exec(t);
        if (e) {
          let n = e[2].trim();
          if (this.rules.other.endingHash.test(n)) {
            const r = ii(n, "#");
            (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
          }
          return { type: "heading", raw: e[0], depth: e[1].length, text: n, tokens: this.lexer.inline(n) };
        }
      }
      hr(t) {
        const e = this.rules.block.hr.exec(t);
        if (e)
          return {
            type: "hr",
            raw: ii(
              e[0],
              `
`,
            ),
          };
      }
      blockquote(t) {
        const e = this.rules.block.blockquote.exec(t);
        if (e) {
          let n = ii(
              e[0],
              `
`,
            ).split(`
`),
            r = "",
            i = "";
          const o = [];
          for (; n.length > 0; ) {
            let s = !1;
            const a = [];
            let l;
            for (l = 0; l < n.length; l++)
              if (this.rules.other.blockquoteStart.test(n[l])) a.push(n[l]), (s = !0);
              else if (!s) a.push(n[l]);
              else break;
            n = n.slice(l);
            const u = a.join(`
`),
              c = u
                .replace(
                  this.rules.other.blockquoteSetextReplace,
                  `
    $1`,
                )
                .replace(this.rules.other.blockquoteSetextReplace2, "");
            (r = r
              ? `${r}
${u}`
              : u),
              (i = i
                ? `${i}
${c}`
                : c);
            const f = this.lexer.state.top;
            if (
              ((this.lexer.state.top = !0),
              this.lexer.blockTokens(c, o, !0),
              (this.lexer.state.top = f),
              n.length === 0)
            )
              break;
            const h = o.at(-1);
            if ((h == null ? void 0 : h.type) === "code") break;
            if ((h == null ? void 0 : h.type) === "blockquote") {
              const p = h,
                d =
                  p.raw +
                  `
` +
                  n.join(`
`),
                m = this.blockquote(d);
              (o[o.length - 1] = m),
                (r = r.substring(0, r.length - p.raw.length) + m.raw),
                (i = i.substring(0, i.length - p.text.length) + m.text);
              break;
            } else if ((h == null ? void 0 : h.type) === "list") {
              const p = h,
                d =
                  p.raw +
                  `
` +
                  n.join(`
`),
                m = this.list(d);
              (o[o.length - 1] = m),
                (r = r.substring(0, r.length - h.raw.length) + m.raw),
                (i = i.substring(0, i.length - p.raw.length) + m.raw),
                (n = d.substring(o.at(-1).raw.length).split(`
`));
              continue;
            }
          }
          return { type: "blockquote", raw: r, tokens: o, text: i };
        }
      }
      list(t) {
        let e = this.rules.block.list.exec(t);
        if (e) {
          let n = e[1].trim();
          const r = n.length > 1,
            i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: !1, items: [] };
          (n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`), this.options.pedantic && (n = r ? n : "[*+-]");
          const o = this.rules.other.listItemRegex(n);
          let s = !1;
          for (; t; ) {
            let l = !1,
              u = "",
              c = "";
            if (!(e = o.exec(t)) || this.rules.block.hr.test(t)) break;
            (u = e[0]), (t = t.substring(u.length));
            let f = e[2]
                .split(
                  `
`,
                  1,
                )[0]
                .replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)),
              h = t.split(
                `
`,
                1,
              )[0],
              p = !f.trim(),
              d = 0;
            if (
              (this.options.pedantic
                ? ((d = 2), (c = f.trimStart()))
                : p
                  ? (d = e[1].length + 1)
                  : ((d = e[2].search(this.rules.other.nonSpaceChar)),
                    (d = d > 4 ? 1 : d),
                    (c = f.slice(d)),
                    (d += e[1].length)),
              p &&
                this.rules.other.blankLine.test(h) &&
                ((u +=
                  h +
                  `
`),
                (t = t.substring(h.length + 1)),
                (l = !0)),
              !l)
            ) {
              const b = this.rules.other.nextBulletRegex(d),
                _ = this.rules.other.hrRegex(d),
                w = this.rules.other.fencesBeginRegex(d),
                v = this.rules.other.headingBeginRegex(d),
                C = this.rules.other.htmlBeginRegex(d);
              for (; t; ) {
                const R = t.split(
                  `
`,
                  1,
                )[0];
                let z;
                if (
                  ((h = R),
                  this.options.pedantic
                    ? ((h = h.replace(this.rules.other.listReplaceNesting, "  ")), (z = h))
                    : (z = h.replace(this.rules.other.tabCharGlobal, "    ")),
                  w.test(h) || v.test(h) || C.test(h) || b.test(h) || _.test(h))
                )
                  break;
                if (z.search(this.rules.other.nonSpaceChar) >= d || !h.trim())
                  c +=
                    `
` + z.slice(d);
                else {
                  if (
                    p ||
                    f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 ||
                    w.test(f) ||
                    v.test(f) ||
                    _.test(f)
                  )
                    break;
                  c +=
                    `
` + h;
                }
                !p && !h.trim() && (p = !0),
                  (u +=
                    R +
                    `
`),
                  (t = t.substring(R.length + 1)),
                  (f = z.slice(d));
              }
            }
            i.loose || (s ? (i.loose = !0) : this.rules.other.doubleBlankLine.test(u) && (s = !0));
            let m = null,
              y;
            this.options.gfm &&
              ((m = this.rules.other.listIsTask.exec(c)),
              m && ((y = m[0] !== "[ ] "), (c = c.replace(this.rules.other.listReplaceTask, "")))),
              i.items.push({ type: "list_item", raw: u, task: !!m, checked: y, loose: !1, text: c, tokens: [] }),
              (i.raw += u);
          }
          const a = i.items.at(-1);
          if (a) (a.raw = a.raw.trimEnd()), (a.text = a.text.trimEnd());
          else return;
          i.raw = i.raw.trimEnd();
          for (let l = 0; l < i.items.length; l++)
            if (
              ((this.lexer.state.top = !1), (i.items[l].tokens = this.lexer.blockTokens(i.items[l].text, [])), !i.loose)
            ) {
              const u = i.items[l].tokens.filter((f) => f.type === "space"),
                c = u.length > 0 && u.some((f) => this.rules.other.anyLine.test(f.raw));
              i.loose = c;
            }
          if (i.loose) for (let l = 0; l < i.items.length; l++) i.items[l].loose = !0;
          return i;
        }
      }
      html(t) {
        const e = this.rules.block.html.exec(t);
        if (e)
          return {
            type: "html",
            block: !0,
            raw: e[0],
            pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
            text: e[0],
          };
      }
      def(t) {
        const e = this.rules.block.def.exec(t);
        if (e) {
          const n = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
            r = e[2]
              ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1")
              : "",
            i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
          return { type: "def", tag: n, raw: e[0], href: r, title: i };
        }
      }
      table(t) {
        var s;
        const e = this.rules.block.table.exec(t);
        if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
        const n = Lm(e[1]),
          r = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
          i =
            (s = e[3]) != null && s.trim()
              ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
              : [],
          o = { type: "table", raw: e[0], header: [], align: [], rows: [] };
        if (n.length === r.length) {
          for (const a of r)
            this.rules.other.tableAlignRight.test(a)
              ? o.align.push("right")
              : this.rules.other.tableAlignCenter.test(a)
                ? o.align.push("center")
                : this.rules.other.tableAlignLeft.test(a)
                  ? o.align.push("left")
                  : o.align.push(null);
          for (let a = 0; a < n.length; a++)
            o.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: !0, align: o.align[a] });
          for (const a of i)
            o.rows.push(
              Lm(a, o.header.length).map((l, u) => ({
                text: l,
                tokens: this.lexer.inline(l),
                header: !1,
                align: o.align[u],
              })),
            );
          return o;
        }
      }
      lheading(t) {
        const e = this.rules.block.lheading.exec(t);
        if (e)
          return {
            type: "heading",
            raw: e[0],
            depth: e[2].charAt(0) === "=" ? 1 : 2,
            text: e[1],
            tokens: this.lexer.inline(e[1]),
          };
      }
      paragraph(t) {
        const e = this.rules.block.paragraph.exec(t);
        if (e) {
          const n =
            e[1].charAt(e[1].length - 1) ===
            `
`
              ? e[1].slice(0, -1)
              : e[1];
          return { type: "paragraph", raw: e[0], text: n, tokens: this.lexer.inline(n) };
        }
      }
      text(t) {
        const e = this.rules.block.text.exec(t);
        if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
      }
      escape(t) {
        const e = this.rules.inline.escape.exec(t);
        if (e) return { type: "escape", raw: e[0], text: e[1] };
      }
      tag(t) {
        const e = this.rules.inline.tag.exec(t);
        if (e)
          return (
            !this.lexer.state.inLink && this.rules.other.startATag.test(e[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                this.rules.other.endPreScriptTag.test(e[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: "html",
              raw: e[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              block: !1,
              text: e[0],
            }
          );
      }
      link(t) {
        const e = this.rules.inline.link.exec(t);
        if (e) {
          const n = e[2].trim();
          if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
            if (!this.rules.other.endAngleBracket.test(n)) return;
            const o = ii(n.slice(0, -1), "\\");
            if ((n.length - o.length) % 2 === 0) return;
          } else {
            const o = h7(e[2], "()");
            if (o === -2) return;
            if (o > -1) {
              const a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + o;
              (e[2] = e[2].substring(0, o)), (e[0] = e[0].substring(0, a).trim()), (e[3] = "");
            }
          }
          let r = e[2],
            i = "";
          if (this.options.pedantic) {
            const o = this.rules.other.pedanticHrefTitle.exec(r);
            o && ((r = o[1]), (i = o[3]));
          } else i = e[3] ? e[3].slice(1, -1) : "";
          return (
            (r = r.trim()),
            this.rules.other.startAngleBracket.test(r) &&
              (this.options.pedantic && !this.rules.other.endAngleBracket.test(n)
                ? (r = r.slice(1))
                : (r = r.slice(1, -1))),
            Bm(
              e,
              {
                href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                title: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
              },
              e[0],
              this.lexer,
              this.rules,
            )
          );
        }
      }
      reflink(t, e) {
        let n;
        if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
          const r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
            i = e[r.toLowerCase()];
          if (!i) {
            const o = n[0].charAt(0);
            return { type: "text", raw: o, text: o };
          }
          return Bm(n, i, n[0], this.lexer, this.rules);
        }
      }
      emStrong(t, e, n = "") {
        let r = this.rules.inline.emStrongLDelim.exec(t);
        if (!r || (r[3] && n.match(this.rules.other.unicodeAlphaNumeric))) return;
        if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
          const o = [...r[0]].length - 1;
          let s,
            a,
            l = o,
            u = 0;
          const c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
          for (c.lastIndex = 0, e = e.slice(-1 * t.length + o); (r = c.exec(e)) != null; ) {
            if (((s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !s)) continue;
            if (((a = [...s].length), r[3] || r[4])) {
              l += a;
              continue;
            } else if ((r[5] || r[6]) && o % 3 && !((o + a) % 3)) {
              u += a;
              continue;
            }
            if (((l -= a), l > 0)) continue;
            a = Math.min(a, a + l + u);
            const f = [...r[0]][0].length,
              h = t.slice(0, o + r.index + f + a);
            if (Math.min(o, a) % 2) {
              const d = h.slice(1, -1);
              return { type: "em", raw: h, text: d, tokens: this.lexer.inlineTokens(d) };
            }
            const p = h.slice(2, -2);
            return { type: "strong", raw: h, text: p, tokens: this.lexer.inlineTokens(p) };
          }
        }
      }
      codespan(t) {
        const e = this.rules.inline.code.exec(t);
        if (e) {
          let n = e[2].replace(this.rules.other.newLineCharGlobal, " ");
          const r = this.rules.other.nonSpaceChar.test(n),
            i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
          return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: e[0], text: n };
        }
      }
      br(t) {
        const e = this.rules.inline.br.exec(t);
        if (e) return { type: "br", raw: e[0] };
      }
      del(t) {
        const e = this.rules.inline.del.exec(t);
        if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
      }
      autolink(t) {
        const e = this.rules.inline.autolink.exec(t);
        if (e) {
          let n, r;
          return (
            e[2] === "@" ? ((n = e[1]), (r = "mailto:" + n)) : ((n = e[1]), (r = n)),
            { type: "link", raw: e[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] }
          );
        }
      }
      url(t) {
        var n;
        let e;
        if ((e = this.rules.inline.url.exec(t))) {
          let r, i;
          if (e[2] === "@") (r = e[0]), (i = "mailto:" + r);
          else {
            let o;
            do (o = e[0]), (e[0] = ((n = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : n[0]) ?? "");
            while (o !== e[0]);
            (r = e[0]), e[1] === "www." ? (i = "http://" + e[0]) : (i = e[0]);
          }
          return { type: "link", raw: e[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
        }
      }
      inlineText(t) {
        const e = this.rules.inline.text.exec(t);
        if (e) {
          const n = this.lexer.state.inRawBlock;
          return { type: "text", raw: e[0], text: e[0], escaped: n };
        }
      }
    },
    gn = class qu {
      constructor(e) {
        et(this, "tokens");
        et(this, "options");
        et(this, "state");
        et(this, "tokenizer");
        et(this, "inlineQueue");
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || _r),
          (this.options.tokenizer = this.options.tokenizer || new ws()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        const n = { other: se, block: Po.normal, inline: ri.normal };
        this.options.pedantic
          ? ((n.block = Po.pedantic), (n.inline = ri.pedantic))
          : this.options.gfm &&
            ((n.block = Po.gfm), this.options.breaks ? (n.inline = ri.breaks) : (n.inline = ri.gfm)),
          (this.tokenizer.rules = n);
      }
      static get rules() {
        return { block: Po, inline: ri };
      }
      static lex(e, n) {
        return new qu(n).lex(e);
      }
      static lexInline(e, n) {
        return new qu(n).inlineTokens(e);
      }
      lex(e) {
        (e = e.replace(
          se.carriageReturn,
          `
`,
        )),
          this.blockTokens(e, this.tokens);
        for (let n = 0; n < this.inlineQueue.length; n++) {
          const r = this.inlineQueue[n];
          this.inlineTokens(r.src, r.tokens);
        }
        return (this.inlineQueue = []), this.tokens;
      }
      blockTokens(e, n = [], r = !1) {
        var i, o, s;
        for (this.options.pedantic && (e = e.replace(se.tabCharGlobal, "    ").replace(se.spaceLine, "")); e; ) {
          let a;
          if (
            (o = (i = this.options.extensions) == null ? void 0 : i.block) != null &&
            o.some((u) => ((a = u.call({ lexer: this }, e, n)) ? ((e = e.substring(a.raw.length)), n.push(a), !0) : !1))
          )
            continue;
          if ((a = this.tokenizer.space(e))) {
            e = e.substring(a.raw.length);
            const u = n.at(-1);
            a.raw.length === 1 && u !== void 0
              ? (u.raw += `
`)
              : n.push(a);
            continue;
          }
          if ((a = this.tokenizer.code(e))) {
            e = e.substring(a.raw.length);
            const u = n.at(-1);
            (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text"
              ? ((u.raw +=
                  `
` + a.raw),
                (u.text +=
                  `
` + a.text),
                (this.inlineQueue.at(-1).src = u.text))
              : n.push(a);
            continue;
          }
          if ((a = this.tokenizer.fences(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.heading(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.hr(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.blockquote(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.list(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.html(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.def(e))) {
            e = e.substring(a.raw.length);
            const u = n.at(-1);
            (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text"
              ? ((u.raw +=
                  `
` + a.raw),
                (u.text +=
                  `
` + a.raw),
                (this.inlineQueue.at(-1).src = u.text))
              : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = { href: a.href, title: a.title });
            continue;
          }
          if ((a = this.tokenizer.table(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          if ((a = this.tokenizer.lheading(e))) {
            (e = e.substring(a.raw.length)), n.push(a);
            continue;
          }
          let l = e;
          if ((s = this.options.extensions) != null && s.startBlock) {
            let u = 1 / 0;
            const c = e.slice(1);
            let f;
            this.options.extensions.startBlock.forEach((h) => {
              (f = h.call({ lexer: this }, c)), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
            }),
              u < 1 / 0 && u >= 0 && (l = e.substring(0, u + 1));
          }
          if (this.state.top && (a = this.tokenizer.paragraph(l))) {
            const u = n.at(-1);
            r && (u == null ? void 0 : u.type) === "paragraph"
              ? ((u.raw +=
                  `
` + a.raw),
                (u.text +=
                  `
` + a.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = u.text))
              : n.push(a),
              (r = l.length !== e.length),
              (e = e.substring(a.raw.length));
            continue;
          }
          if ((a = this.tokenizer.text(e))) {
            e = e.substring(a.raw.length);
            const u = n.at(-1);
            (u == null ? void 0 : u.type) === "text"
              ? ((u.raw +=
                  `
` + a.raw),
                (u.text +=
                  `
` + a.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = u.text))
              : n.push(a);
            continue;
          }
          if (e) {
            const u = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(u);
              break;
            } else throw new Error(u);
          }
        }
        return (this.state.top = !0), n;
      }
      inline(e, n = []) {
        return this.inlineQueue.push({ src: e, tokens: n }), n;
      }
      inlineTokens(e, n = []) {
        var a, l, u;
        let r = e,
          i = null;
        if (this.tokens.links) {
          const c = Object.keys(this.tokens.links);
          if (c.length > 0)
            for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
              c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) &&
                (r =
                  r.slice(0, i.index) +
                  "[" +
                  "a".repeat(i[0].length - 2) +
                  "]" +
                  r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
          r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
          r =
            r.slice(0, i.index) +
            "[" +
            "a".repeat(i[0].length - 2) +
            "]" +
            r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        let o = !1,
          s = "";
        for (; e; ) {
          o || (s = ""), (o = !1);
          let c;
          if (
            (l = (a = this.options.extensions) == null ? void 0 : a.inline) != null &&
            l.some((h) => ((c = h.call({ lexer: this }, e, n)) ? ((e = e.substring(c.raw.length)), n.push(c), !0) : !1))
          )
            continue;
          if ((c = this.tokenizer.escape(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.tag(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.link(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.reflink(e, this.tokens.links))) {
            e = e.substring(c.raw.length);
            const h = n.at(-1);
            c.type === "text" && (h == null ? void 0 : h.type) === "text"
              ? ((h.raw += c.raw), (h.text += c.text))
              : n.push(c);
            continue;
          }
          if ((c = this.tokenizer.emStrong(e, r, s))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.codespan(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.br(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.del(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if ((c = this.tokenizer.autolink(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          if (!this.state.inLink && (c = this.tokenizer.url(e))) {
            (e = e.substring(c.raw.length)), n.push(c);
            continue;
          }
          let f = e;
          if ((u = this.options.extensions) != null && u.startInline) {
            let h = 1 / 0;
            const p = e.slice(1);
            let d;
            this.options.extensions.startInline.forEach((m) => {
              (d = m.call({ lexer: this }, p)), typeof d == "number" && d >= 0 && (h = Math.min(h, d));
            }),
              h < 1 / 0 && h >= 0 && (f = e.substring(0, h + 1));
          }
          if ((c = this.tokenizer.inlineText(f))) {
            (e = e.substring(c.raw.length)), c.raw.slice(-1) !== "_" && (s = c.raw.slice(-1)), (o = !0);
            const h = n.at(-1);
            (h == null ? void 0 : h.type) === "text" ? ((h.raw += c.raw), (h.text += c.text)) : n.push(c);
            continue;
          }
          if (e) {
            const h = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(h);
              break;
            } else throw new Error(h);
          }
        }
        return n;
      }
    },
    xs = class {
      constructor(t) {
        et(this, "options");
        et(this, "parser");
        this.options = t || _r;
      }
      space(t) {
        return "";
      }
      code({ text: t, lang: e, escaped: n }) {
        var o;
        const r = (o = (e || "").match(se.notSpaceStart)) == null ? void 0 : o[0],
          i =
            t.replace(se.endingNewline, "") +
            `
`;
        return r
          ? '<pre><code class="language-' +
              Ue(r) +
              '">' +
              (n ? i : Ue(i, !0)) +
              `</code></pre>
`
          : "<pre><code>" +
              (n ? i : Ue(i, !0)) +
              `</code></pre>
`;
      }
      blockquote({ tokens: t }) {
        return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
      }
      html({ text: t }) {
        return t;
      }
      heading({ tokens: t, depth: e }) {
        return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
      }
      hr(t) {
        return `<hr>
`;
      }
      list(t) {
        const e = t.ordered,
          n = t.start;
        let r = "";
        for (let s = 0; s < t.items.length; s++) {
          const a = t.items[s];
          r += this.listitem(a);
        }
        const i = e ? "ol" : "ul",
          o = e && n !== 1 ? ' start="' + n + '"' : "";
        return (
          "<" +
          i +
          o +
          `>
` +
          r +
          "</" +
          i +
          `>
`
        );
      }
      listitem(t) {
        var n;
        let e = "";
        if (t.task) {
          const r = this.checkbox({ checked: !!t.checked });
          t.loose
            ? ((n = t.tokens[0]) == null ? void 0 : n.type) === "paragraph"
              ? ((t.tokens[0].text = r + " " + t.tokens[0].text),
                t.tokens[0].tokens &&
                  t.tokens[0].tokens.length > 0 &&
                  t.tokens[0].tokens[0].type === "text" &&
                  ((t.tokens[0].tokens[0].text = r + " " + Ue(t.tokens[0].tokens[0].text)),
                  (t.tokens[0].tokens[0].escaped = !0)))
              : t.tokens.unshift({ type: "text", raw: r + " ", text: r + " ", escaped: !0 })
            : (e += r + " ");
        }
        return (
          (e += this.parser.parse(t.tokens, !!t.loose)),
          `<li>${e}</li>
`
        );
      }
      checkbox({ checked: t }) {
        return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
      }
      paragraph({ tokens: t }) {
        return `<p>${this.parser.parseInline(t)}</p>
`;
      }
      table(t) {
        let e = "",
          n = "";
        for (let i = 0; i < t.header.length; i++) n += this.tablecell(t.header[i]);
        e += this.tablerow({ text: n });
        let r = "";
        for (let i = 0; i < t.rows.length; i++) {
          const o = t.rows[i];
          n = "";
          for (let s = 0; s < o.length; s++) n += this.tablecell(o[s]);
          r += this.tablerow({ text: n });
        }
        return (
          r && (r = `<tbody>${r}</tbody>`),
          `<table>
<thead>
` +
            e +
            `</thead>
` +
            r +
            `</table>
`
        );
      }
      tablerow({ text: t }) {
        return `<tr>
${t}</tr>
`;
      }
      tablecell(t) {
        const e = this.parser.parseInline(t.tokens),
          n = t.header ? "th" : "td";
        return (
          (t.align ? `<${n} align="${t.align}">` : `<${n}>`) +
          e +
          `</${n}>
`
        );
      }
      strong({ tokens: t }) {
        return `<strong>${this.parser.parseInline(t)}</strong>`;
      }
      em({ tokens: t }) {
        return `<em>${this.parser.parseInline(t)}</em>`;
      }
      codespan({ text: t }) {
        return `<code>${Ue(t, !0)}</code>`;
      }
      br(t) {
        return "<br>";
      }
      del({ tokens: t }) {
        return `<del>${this.parser.parseInline(t)}</del>`;
      }
      link({ href: t, title: e, tokens: n }) {
        const r = this.parser.parseInline(n),
          i = Nm(t);
        if (i === null) return r;
        t = i;
        let o = '<a href="' + t + '"';
        return e && (o += ' title="' + Ue(e) + '"'), (o += ">" + r + "</a>"), o;
      }
      image({ href: t, title: e, text: n, tokens: r }) {
        r && (n = this.parser.parseInline(r, this.parser.textRenderer));
        const i = Nm(t);
        if (i === null) return Ue(n);
        t = i;
        let o = `<img src="${t}" alt="${n}"`;
        return e && (o += ` title="${Ue(e)}"`), (o += ">"), o;
      }
      text(t) {
        return "tokens" in t && t.tokens
          ? this.parser.parseInline(t.tokens)
          : "escaped" in t && t.escaped
            ? t.text
            : Ue(t.text);
      }
    },
    mf = class {
      strong({ text: t }) {
        return t;
      }
      em({ text: t }) {
        return t;
      }
      codespan({ text: t }) {
        return t;
      }
      del({ text: t }) {
        return t;
      }
      html({ text: t }) {
        return t;
      }
      text({ text: t }) {
        return t;
      }
      link({ text: t }) {
        return "" + t;
      }
      image({ text: t }) {
        return "" + t;
      }
      br() {
        return "";
      }
    },
    mn = class Uu {
      constructor(e) {
        et(this, "options");
        et(this, "renderer");
        et(this, "textRenderer");
        (this.options = e || _r),
          (this.options.renderer = this.options.renderer || new xs()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.renderer.parser = this),
          (this.textRenderer = new mf());
      }
      static parse(e, n) {
        return new Uu(n).parse(e);
      }
      static parseInline(e, n) {
        return new Uu(n).parseInline(e);
      }
      parse(e, n = !0) {
        var i, o;
        let r = "";
        for (let s = 0; s < e.length; s++) {
          const a = e[s];
          if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[a.type]) {
            const u = a,
              c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
            if (
              c !== !1 ||
              !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(
                u.type,
              )
            ) {
              r += c || "";
              continue;
            }
          }
          const l = a;
          switch (l.type) {
            case "space": {
              r += this.renderer.space(l);
              continue;
            }
            case "hr": {
              r += this.renderer.hr(l);
              continue;
            }
            case "heading": {
              r += this.renderer.heading(l);
              continue;
            }
            case "code": {
              r += this.renderer.code(l);
              continue;
            }
            case "table": {
              r += this.renderer.table(l);
              continue;
            }
            case "blockquote": {
              r += this.renderer.blockquote(l);
              continue;
            }
            case "list": {
              r += this.renderer.list(l);
              continue;
            }
            case "html": {
              r += this.renderer.html(l);
              continue;
            }
            case "paragraph": {
              r += this.renderer.paragraph(l);
              continue;
            }
            case "text": {
              let u = l,
                c = this.renderer.text(u);
              for (; s + 1 < e.length && e[s + 1].type === "text"; )
                (u = e[++s]),
                  (c +=
                    `
` + this.renderer.text(u));
              n
                ? (r += this.renderer.paragraph({
                    type: "paragraph",
                    raw: c,
                    text: c,
                    tokens: [{ type: "text", raw: c, text: c, escaped: !0 }],
                  }))
                : (r += c);
              continue;
            }
            default: {
              const u = 'Token with "' + l.type + '" type was not found.';
              if (this.options.silent) return console.error(u), "";
              throw new Error(u);
            }
          }
        }
        return r;
      }
      parseInline(e, n = this.renderer) {
        var i, o;
        let r = "";
        for (let s = 0; s < e.length; s++) {
          const a = e[s];
          if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[a.type]) {
            const u = this.options.extensions.renderers[a.type].call({ parser: this }, a);
            if (
              u !== !1 ||
              !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)
            ) {
              r += u || "";
              continue;
            }
          }
          const l = a;
          switch (l.type) {
            case "escape": {
              r += n.text(l);
              break;
            }
            case "html": {
              r += n.html(l);
              break;
            }
            case "link": {
              r += n.link(l);
              break;
            }
            case "image": {
              r += n.image(l);
              break;
            }
            case "strong": {
              r += n.strong(l);
              break;
            }
            case "em": {
              r += n.em(l);
              break;
            }
            case "codespan": {
              r += n.codespan(l);
              break;
            }
            case "br": {
              r += n.br(l);
              break;
            }
            case "del": {
              r += n.del(l);
              break;
            }
            case "text": {
              r += n.text(l);
              break;
            }
            default: {
              const u = 'Token with "' + l.type + '" type was not found.';
              if (this.options.silent) return console.error(u), "";
              throw new Error(u);
            }
          }
        }
        return r;
      }
    },
    Hl,
    Ho =
      ((Hl = class {
        constructor(t) {
          et(this, "options");
          et(this, "block");
          this.options = t || _r;
        }
        preprocess(t) {
          return t;
        }
        postprocess(t) {
          return t;
        }
        processAllTokens(t) {
          return t;
        }
        provideLexer() {
          return this.block ? gn.lex : gn.lexInline;
        }
        provideParser() {
          return this.block ? mn.parse : mn.parseInline;
        }
      }),
      et(Hl, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"])),
      Hl),
    d7 = class {
      constructor(...t) {
        et(this, "defaults", lf());
        et(this, "options", this.setOptions);
        et(this, "parse", this.parseMarkdown(!0));
        et(this, "parseInline", this.parseMarkdown(!1));
        et(this, "Parser", mn);
        et(this, "Renderer", xs);
        et(this, "TextRenderer", mf);
        et(this, "Lexer", gn);
        et(this, "Tokenizer", ws);
        et(this, "Hooks", Ho);
        this.use(...t);
      }
      walkTokens(t, e) {
        var r, i;
        let n = [];
        for (const o of t)
          switch (((n = n.concat(e.call(this, o))), o.type)) {
            case "table": {
              const s = o;
              for (const a of s.header) n = n.concat(this.walkTokens(a.tokens, e));
              for (const a of s.rows) for (const l of a) n = n.concat(this.walkTokens(l.tokens, e));
              break;
            }
            case "list": {
              const s = o;
              n = n.concat(this.walkTokens(s.items, e));
              break;
            }
            default: {
              const s = o;
              (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[s.type]
                ? this.defaults.extensions.childTokens[s.type].forEach((a) => {
                    const l = s[a].flat(1 / 0);
                    n = n.concat(this.walkTokens(l, e));
                  })
                : s.tokens && (n = n.concat(this.walkTokens(s.tokens, e)));
            }
          }
        return n;
      }
      use(...t) {
        const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
        return (
          t.forEach((n) => {
            const r = { ...n };
            if (
              ((r.async = this.defaults.async || r.async || !1),
              n.extensions &&
                (n.extensions.forEach((i) => {
                  if (!i.name) throw new Error("extension name required");
                  if ("renderer" in i) {
                    const o = e.renderers[i.name];
                    o
                      ? (e.renderers[i.name] = function (...s) {
                          let a = i.renderer.apply(this, s);
                          return a === !1 && (a = o.apply(this, s)), a;
                        })
                      : (e.renderers[i.name] = i.renderer);
                  }
                  if ("tokenizer" in i) {
                    if (!i.level || (i.level !== "block" && i.level !== "inline"))
                      throw new Error("extension level must be 'block' or 'inline'");
                    const o = e[i.level];
                    o ? o.unshift(i.tokenizer) : (e[i.level] = [i.tokenizer]),
                      i.start &&
                        (i.level === "block"
                          ? e.startBlock
                            ? e.startBlock.push(i.start)
                            : (e.startBlock = [i.start])
                          : i.level === "inline" &&
                            (e.startInline ? e.startInline.push(i.start) : (e.startInline = [i.start])));
                  }
                  "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
                }),
                (r.extensions = e)),
              n.renderer)
            ) {
              const i = this.defaults.renderer || new xs(this.defaults);
              for (const o in n.renderer) {
                if (!(o in i)) throw new Error(`renderer '${o}' does not exist`);
                if (["options", "parser"].includes(o)) continue;
                const s = o,
                  a = n.renderer[s],
                  l = i[s];
                i[s] = (...u) => {
                  let c = a.apply(i, u);
                  return c === !1 && (c = l.apply(i, u)), c || "";
                };
              }
              r.renderer = i;
            }
            if (n.tokenizer) {
              const i = this.defaults.tokenizer || new ws(this.defaults);
              for (const o in n.tokenizer) {
                if (!(o in i)) throw new Error(`tokenizer '${o}' does not exist`);
                if (["options", "rules", "lexer"].includes(o)) continue;
                const s = o,
                  a = n.tokenizer[s],
                  l = i[s];
                i[s] = (...u) => {
                  let c = a.apply(i, u);
                  return c === !1 && (c = l.apply(i, u)), c;
                };
              }
              r.tokenizer = i;
            }
            if (n.hooks) {
              const i = this.defaults.hooks || new Ho();
              for (const o in n.hooks) {
                if (!(o in i)) throw new Error(`hook '${o}' does not exist`);
                if (["options", "block"].includes(o)) continue;
                const s = o,
                  a = n.hooks[s],
                  l = i[s];
                Ho.passThroughHooks.has(o)
                  ? (i[s] = (u) => {
                      if (this.defaults.async) return Promise.resolve(a.call(i, u)).then((f) => l.call(i, f));
                      const c = a.call(i, u);
                      return l.call(i, c);
                    })
                  : (i[s] = (...u) => {
                      let c = a.apply(i, u);
                      return c === !1 && (c = l.apply(i, u)), c;
                    });
              }
              r.hooks = i;
            }
            if (n.walkTokens) {
              const i = this.defaults.walkTokens,
                o = n.walkTokens;
              r.walkTokens = function (s) {
                let a = [];
                return a.push(o.call(this, s)), i && (a = a.concat(i.call(this, s))), a;
              };
            }
            this.defaults = { ...this.defaults, ...r };
          }),
          this
        );
      }
      setOptions(t) {
        return (this.defaults = { ...this.defaults, ...t }), this;
      }
      lexer(t, e) {
        return gn.lex(t, e ?? this.defaults);
      }
      parser(t, e) {
        return mn.parse(t, e ?? this.defaults);
      }
      parseMarkdown(t) {
        return (n, r) => {
          const i = { ...r },
            o = { ...this.defaults, ...i },
            s = this.onError(!!o.silent, !!o.async);
          if (this.defaults.async === !0 && i.async === !1)
            return s(
              new Error(
                "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
              ),
            );
          if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
          if (typeof n != "string")
            return s(
              new Error(
                "marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected",
              ),
            );
          o.hooks && ((o.hooks.options = o), (o.hooks.block = t));
          const a = o.hooks ? o.hooks.provideLexer() : t ? gn.lex : gn.lexInline,
            l = o.hooks ? o.hooks.provideParser() : t ? mn.parse : mn.parseInline;
          if (o.async)
            return Promise.resolve(o.hooks ? o.hooks.preprocess(n) : n)
              .then((u) => a(u, o))
              .then((u) => (o.hooks ? o.hooks.processAllTokens(u) : u))
              .then((u) => (o.walkTokens ? Promise.all(this.walkTokens(u, o.walkTokens)).then(() => u) : u))
              .then((u) => l(u, o))
              .then((u) => (o.hooks ? o.hooks.postprocess(u) : u))
              .catch(s);
          try {
            o.hooks && (n = o.hooks.preprocess(n));
            let u = a(n, o);
            o.hooks && (u = o.hooks.processAllTokens(u)), o.walkTokens && this.walkTokens(u, o.walkTokens);
            let c = l(u, o);
            return o.hooks && (c = o.hooks.postprocess(c)), c;
          } catch (u) {
            return s(u);
          }
        };
      }
      onError(t, e) {
        return (n) => {
          if (
            ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
            t)
          ) {
            const r = "<p>An error occurred:</p><pre>" + Ue(n.message + "", !0) + "</pre>";
            return e ? Promise.resolve(r) : r;
          }
          if (e) return Promise.reject(n);
          throw n;
        };
      }
    },
    sr = new d7();
  function wt(t, e) {
    return sr.parse(t, e);
  }
  wt.options = wt.setOptions = function (t) {
    return sr.setOptions(t), (wt.defaults = sr.defaults), xb(wt.defaults), wt;
  };
  wt.getDefaults = lf;
  wt.defaults = _r;
  wt.use = function (...t) {
    return sr.use(...t), (wt.defaults = sr.defaults), xb(wt.defaults), wt;
  };
  wt.walkTokens = function (t, e) {
    return sr.walkTokens(t, e);
  };
  wt.parseInline = sr.parseInline;
  wt.Parser = mn;
  wt.parser = mn.parse;
  wt.Renderer = xs;
  wt.TextRenderer = mf;
  wt.Lexer = gn;
  wt.lexer = gn.lex;
  wt.Tokenizer = ws;
  wt.Hooks = Ho;
  wt.parse = wt;
  wt.options;
  wt.setOptions;
  wt.use;
  wt.walkTokens;
  wt.parseInline;
  mn.parse;
  gn.lex;
  const g7 = { class: "m-4 prose" },
    m7 = ["innerHTML"],
    _7 = Gt({
      __name: "DocsView",
      setup(t) {
        const e = mt("");
        return (
          fetch("/annotation_flow/assets/docs/rules.md")
            .then((n) => n.text())
            .then((n) => wt(n))
            .then((n) => {
              e.value = n;
            }),
          (n, r) => (Y(), Q("div", g7, [N("div", { innerHTML: e.value }, null, 8, m7)]))
        );
      },
    }),
    v7 = [
      { path: "/", name: "search", component: RL, meta: { title: "Zoeken" } },
      { path: "/docs", name: "docs", component: _7, meta: { title: "Docs" } },
      { path: "/detail/:id", name: "annotation", component: Y9, meta: { title: "Annotatie: {id}" } },
    ],
    Fb = mk({ history: Hx("/annotation_flow/"), routes: v7 });
  Fb.beforeEach((t) => {
    let e = t.meta.title ?? "";
    Object.entries(t.params ?? {}).forEach(([r, i]) => {
      e = e.replace(`{${r}}`, i.toString());
    });
    const n = "Evwrite Annotation Flow";
    window.document.title = `${n} - ${e}`;
  });
  const zb = ax(yk);
  zb.use(cx()).use(Fb);
  zb.mount("#app");
});
export default y7();
