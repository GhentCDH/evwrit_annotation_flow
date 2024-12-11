var zp = Object.defineProperty;
var Np = (t, e, n) => (e in t ? zp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var Dp = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Z = (t, e, n) => Np(t, typeof e != "symbol" ? e + "" : e, n);
var Vj = Dp((Rt, jt) => {
  (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const s of o)
        if (s.type === "childList")
          for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const s = {};
      return (
        o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (s.credentials = "include")
          : o.crossOrigin === "anonymous"
            ? (s.credentials = "omit")
            : (s.credentials = "same-origin"),
        s
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const s = n(o);
      fetch(o.href, s);
    }
  })();
  /**
   * @vue/shared v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function Bi(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const dt = {},
    zn = [],
    ke = () => {},
    Fp = () => !1,
    Co = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    Ui = (t) => t.startsWith("onUpdate:"),
    Ut = Object.assign,
    Vi = (t, e) => {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    },
    Bp = Object.prototype.hasOwnProperty,
    pt = (t, e) => Bp.call(t, e),
    tt = Array.isArray,
    Nn = (t) => Lr(t) === "[object Map]",
    Ro = (t) => Lr(t) === "[object Set]",
    Ja = (t) => Lr(t) === "[object Date]",
    st = (t) => typeof t == "function",
    zt = (t) => typeof t == "string",
    Te = (t) => typeof t == "symbol",
    Et = (t) => t !== null && typeof t == "object",
    Rf = (t) => (Et(t) || st(t)) && st(t.then) && st(t.catch),
    jf = Object.prototype.toString,
    Lr = (t) => jf.call(t),
    Up = (t) => Lr(t).slice(8, -1),
    $f = (t) => Lr(t) === "[object Object]",
    Hi = (t) => zt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    fr = Bi(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    jo = (t) => {
      const e = Object.create(null);
      return (n) => e[n] || (e[n] = t(n));
    },
    Vp = /-(\w)/g,
    ae = jo((t) => t.replace(Vp, (e, n) => (n ? n.toUpperCase() : ""))),
    Hp = /\B([A-Z])/g,
    en = jo((t) => t.replace(Hp, "-$1").toLowerCase()),
    $o = jo((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    hr = jo((t) => (t ? `on${$o(t)}` : "")),
    ee = (t, e) => !Object.is(t, e),
    oo = (t, ...e) => {
      for (let n = 0; n < t.length; n++) t[n](...e);
    },
    Pf = (t, e, n, r = !1) => {
      Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n });
    },
    qp = (t) => {
      const e = parseFloat(t);
      return isNaN(e) ? t : e;
    };
  let Qa;
  const If = () =>
    Qa ||
    (Qa =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function nn(t) {
    if (tt(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          o = zt(r) ? Zp(r) : nn(r);
        if (o) for (const s in o) e[s] = o[s];
      }
      return e;
    } else if (zt(t) || Et(t)) return t;
  }
  const Kp = /;(?![^(]*\))/g,
    Wp = /:([^]+)/,
    Gp = /\/\*[^]*?\*\//g;
  function Zp(t) {
    const e = {};
    return (
      t
        .replace(Gp, "")
        .split(Kp)
        .forEach((n) => {
          if (n) {
            const r = n.split(Wp);
            r.length > 1 && (e[r[0].trim()] = r[1].trim());
          }
        }),
      e
    );
  }
  function Lt(t) {
    let e = "";
    if (zt(t)) e = t;
    else if (tt(t))
      for (let n = 0; n < t.length; n++) {
        const r = Lt(t[n]);
        r && (e += r + " ");
      }
    else if (Et(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const Jp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Qp = Bi(Jp);
  function Mf(t) {
    return !!t || t === "";
  }
  function Yp(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = Po(t[r], e[r]);
    return n;
  }
  function Po(t, e) {
    if (t === e) return !0;
    let n = Ja(t),
      r = Ja(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = Te(t)), (r = Te(e)), n || r)) return t === e;
    if (((n = tt(t)), (r = tt(e)), n || r)) return n && r ? Yp(t, e) : !1;
    if (((n = Et(t)), (r = Et(e)), n || r)) {
      if (!n || !r) return !1;
      const o = Object.keys(t).length,
        s = Object.keys(e).length;
      if (o !== s) return !1;
      for (const i in t) {
        const a = t.hasOwnProperty(i),
          l = e.hasOwnProperty(i);
        if ((a && !l) || (!a && l) || !Po(t[i], e[i])) return !1;
      }
    }
    return String(t) === String(e);
  }
  function Lf(t, e) {
    return t.findIndex((n) => Po(n, e));
  }
  const zf = (t) => !!(t && t.__v_isRef === !0),
    kt = (t) =>
      zt(t)
        ? t
        : t == null
          ? ""
          : tt(t) || (Et(t) && (t.toString === jf || !st(t.toString)))
            ? zf(t)
              ? kt(t.value)
              : JSON.stringify(t, Nf, 2)
            : String(t),
    Nf = (t, e) =>
      zf(e)
        ? Nf(t, e.value)
        : Nn(e)
          ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o], s) => ((n[cs(r, s) + " =>"] = o), n), {}) }
          : Ro(e)
            ? { [`Set(${e.size})`]: [...e.values()].map((n) => cs(n)) }
            : Te(e)
              ? cs(e)
              : Et(e) && !tt(e) && !$f(e)
                ? String(e)
                : e,
    cs = (t, e = "") => {
      var n;
      return Te(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
    };
  /**
   * @vue/reactivity v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Yt;
  class Df {
    constructor(e = !1) {
      (this.detached = e),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = Yt),
        !e && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(this) - 1);
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
        const n = Yt;
        try {
          return (Yt = this), e();
        } finally {
          Yt = n;
        }
      }
    }
    on() {
      Yt = this;
    }
    off() {
      Yt = this.parent;
    }
    stop(e) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !e) {
          const o = this.parent.scopes.pop();
          o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  function Ff(t) {
    return new Df(t);
  }
  function qi() {
    return Yt;
  }
  function Bf(t, e = !1) {
    Yt && Yt.cleanups.push(t);
  }
  let xt;
  const us = new WeakSet();
  class Uf {
    constructor(e) {
      (this.fn = e),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        Yt && Yt.active && Yt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && ((this.flags &= -65), us.has(this) && (us.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Hf(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), Ya(this), qf(this);
      const e = xt,
        n = ge;
      (xt = this), (ge = !0);
      try {
        return this.fn();
      } finally {
        Kf(this), (xt = e), (ge = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Gi(e);
        (this.deps = this.depsTail = void 0), Ya(this), this.onStop && this.onStop(), (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ui(this) && this.run();
    }
    get dirty() {
      return ui(this);
    }
  }
  let Vf = 0,
    dr;
  function Hf(t) {
    (t.flags |= 8), (t.next = dr), (dr = t);
  }
  function Ki() {
    Vf++;
  }
  function Wi() {
    if (--Vf > 0) return;
    let t;
    for (; dr; ) {
      let e = dr;
      for (dr = void 0; e; ) {
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
  function qf(t) {
    for (let e = t.deps; e; e = e.nextDep)
      (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e);
  }
  function Kf(t) {
    let e,
      n = t.depsTail,
      r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Gi(r), Xp(r)) : (e = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = o);
    }
    (t.deps = e), (t.depsTail = n);
  }
  function ui(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || (e.dep.computed && (Wf(e.dep.computed) || e.dep.version !== e.version)))
        return !0;
    return !!t._dirty;
  }
  function Wf(t) {
    if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === Sr)) return;
    t.globalVersion = Sr;
    const e = t.dep;
    if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !ui(t))) {
      t.flags &= -3;
      return;
    }
    const n = xt,
      r = ge;
    (xt = t), (ge = !0);
    try {
      qf(t);
      const o = t.fn(t._value);
      (e.version === 0 || ee(o, t._value)) && ((t._value = o), e.version++);
    } catch (o) {
      throw (e.version++, o);
    } finally {
      (xt = n), (ge = r), Kf(t), (t.flags &= -3);
    }
  }
  function Gi(t) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (
      (n && ((n.nextSub = r), (t.prevSub = void 0)),
      r && ((r.prevSub = n), (t.nextSub = void 0)),
      e.subs === t && (e.subs = n),
      !e.subs && e.computed)
    ) {
      e.computed.flags &= -5;
      for (let o = e.computed.deps; o; o = o.nextDep) Gi(o);
    }
  }
  function Xp(t) {
    const { prevDep: e, nextDep: n } = t;
    e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0));
  }
  let ge = !0;
  const Gf = [];
  function rn() {
    Gf.push(ge), (ge = !1);
  }
  function on() {
    const t = Gf.pop();
    ge = t === void 0 ? !0 : t;
  }
  function Ya(t) {
    const { cleanup: e } = t;
    if (((t.cleanup = void 0), e)) {
      const n = xt;
      xt = void 0;
      try {
        e();
      } finally {
        xt = n;
      }
    }
  }
  let Sr = 0;
  class tg {
    constructor(e, n) {
      (this.sub = e),
        (this.dep = n),
        (this.version = n.version),
        (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
  }
  class Io {
    constructor(e) {
      (this.computed = e), (this.version = 0), (this.activeLink = void 0), (this.subs = void 0);
    }
    track(e) {
      if (!xt || !ge || xt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== xt)
        (n = this.activeLink = new tg(xt, this)),
          xt.deps
            ? ((n.prevDep = xt.depsTail), (xt.depsTail.nextDep = n), (xt.depsTail = n))
            : (xt.deps = xt.depsTail = n),
          xt.flags & 4 && Zf(n);
      else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
        const r = n.nextDep;
        (r.prevDep = n.prevDep),
          n.prevDep && (n.prevDep.nextDep = r),
          (n.prevDep = xt.depsTail),
          (n.nextDep = void 0),
          (xt.depsTail.nextDep = n),
          (xt.depsTail = n),
          xt.deps === n && (xt.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, Sr++, this.notify(e);
    }
    notify(e) {
      Ki();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Wi();
      }
    }
  }
  function Zf(t) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) Zf(r);
    }
    const n = t.dep.subs;
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
  }
  const ho = new WeakMap(),
    gn = Symbol(""),
    fi = Symbol(""),
    Ar = Symbol("");
  function Zt(t, e, n) {
    if (ge && xt) {
      let r = ho.get(t);
      r || ho.set(t, (r = new Map()));
      let o = r.get(n);
      o || r.set(n, (o = new Io())), o.track();
    }
  }
  function Fe(t, e, n, r, o, s) {
    const i = ho.get(t);
    if (!i) {
      Sr++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((Ki(), e === "clear")) i.forEach(a);
    else {
      const l = tt(t),
        c = l && Hi(n);
      if (l && n === "length") {
        const u = Number(r);
        i.forEach((d, f) => {
          (f === "length" || f === Ar || (!Te(f) && f >= u)) && a(d);
        });
      } else
        switch ((n !== void 0 && a(i.get(n)), c && a(i.get(Ar)), e)) {
          case "add":
            l ? c && a(i.get("length")) : (a(i.get(gn)), Nn(t) && a(i.get(fi)));
            break;
          case "delete":
            l || (a(i.get(gn)), Nn(t) && a(i.get(fi)));
            break;
          case "set":
            Nn(t) && a(i.get(gn));
            break;
        }
    }
    Wi();
  }
  function eg(t, e) {
    var n;
    return (n = ho.get(t)) == null ? void 0 : n.get(e);
  }
  function Pn(t) {
    const e = ht(t);
    return e === t ? e : (Zt(e, "iterate", Ar), fe(t) ? e : e.map(Gt));
  }
  function Mo(t) {
    return Zt((t = ht(t)), "iterate", Ar), t;
  }
  const ng = {
    __proto__: null,
    [Symbol.iterator]() {
      return fs(this, Symbol.iterator, Gt);
    },
    concat(...t) {
      return Pn(this).concat(...t.map((e) => (tt(e) ? Pn(e) : e)));
    },
    entries() {
      return fs(this, "entries", (t) => ((t[1] = Gt(t[1])), t));
    },
    every(t, e) {
      return Pe(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return Pe(this, "filter", t, e, (n) => n.map(Gt), arguments);
    },
    find(t, e) {
      return Pe(this, "find", t, e, Gt, arguments);
    },
    findIndex(t, e) {
      return Pe(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return Pe(this, "findLast", t, e, Gt, arguments);
    },
    findLastIndex(t, e) {
      return Pe(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return Pe(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return hs(this, "includes", t);
    },
    indexOf(...t) {
      return hs(this, "indexOf", t);
    },
    join(t) {
      return Pn(this).join(t);
    },
    lastIndexOf(...t) {
      return hs(this, "lastIndexOf", t);
    },
    map(t, e) {
      return Pe(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return er(this, "pop");
    },
    push(...t) {
      return er(this, "push", t);
    },
    reduce(t, ...e) {
      return Xa(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return Xa(this, "reduceRight", t, e);
    },
    shift() {
      return er(this, "shift");
    },
    some(t, e) {
      return Pe(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return er(this, "splice", t);
    },
    toReversed() {
      return Pn(this).toReversed();
    },
    toSorted(t) {
      return Pn(this).toSorted(t);
    },
    toSpliced(...t) {
      return Pn(this).toSpliced(...t);
    },
    unshift(...t) {
      return er(this, "unshift", t);
    },
    values() {
      return fs(this, "values", Gt);
    },
  };
  function fs(t, e, n) {
    const r = Mo(t),
      o = r[e]();
    return (
      r !== t &&
        !fe(t) &&
        ((o._next = o.next),
        (o.next = () => {
          const s = o._next();
          return s.value && (s.value = n(s.value)), s;
        })),
      o
    );
  }
  const rg = Array.prototype;
  function Pe(t, e, n, r, o, s) {
    const i = Mo(t),
      a = i !== t && !fe(t),
      l = i[e];
    if (l !== rg[e]) {
      const d = l.apply(t, s);
      return a ? Gt(d) : d;
    }
    let c = n;
    i !== t &&
      (a
        ? (c = function (d, f) {
            return n.call(this, Gt(d), f, t);
          })
        : n.length > 2 &&
          (c = function (d, f) {
            return n.call(this, d, f, t);
          }));
    const u = l.call(i, c, r);
    return a && o ? o(u) : u;
  }
  function Xa(t, e, n, r) {
    const o = Mo(t);
    let s = n;
    return (
      o !== t &&
        (fe(t)
          ? n.length > 3 &&
            (s = function (i, a, l) {
              return n.call(this, i, a, l, t);
            })
          : (s = function (i, a, l) {
              return n.call(this, i, Gt(a), l, t);
            })),
      o[e](s, ...r)
    );
  }
  function hs(t, e, n) {
    const r = ht(t);
    Zt(r, "iterate", Ar);
    const o = r[e](...n);
    return (o === -1 || o === !1) && Yi(n[0]) ? ((n[0] = ht(n[0])), r[e](...n)) : o;
  }
  function er(t, e, n = []) {
    rn(), Ki();
    const r = ht(t)[e].apply(t, n);
    return Wi(), on(), r;
  }
  const og = Bi("__proto__,__v_isRef,__isVue"),
    Jf = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((t) => t !== "arguments" && t !== "caller")
        .map((t) => Symbol[t])
        .filter(Te),
    );
  function sg(t) {
    Te(t) || (t = String(t));
    const e = ht(this);
    return Zt(e, "has", t), e.hasOwnProperty(t);
  }
  class Qf {
    constructor(e = !1, n = !1) {
      (this._isReadonly = e), (this._isShallow = n);
    }
    get(e, n, r) {
      const o = this._isReadonly,
        s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw")
        return r === (o ? (s ? yg : eh) : s ? th : Xf).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
          ? e
          : void 0;
      const i = tt(e);
      if (!o) {
        let l;
        if (i && (l = ng[n])) return l;
        if (n === "hasOwnProperty") return sg;
      }
      const a = Reflect.get(e, n, Mt(e) ? e : r);
      return (Te(n) ? Jf.has(n) : og(n)) || (o || Zt(e, "get", n), s)
        ? a
        : Mt(a)
          ? i && Hi(n)
            ? a
            : a.value
          : Et(a)
            ? o
              ? rh(a)
              : Gn(a)
            : a;
    }
  }
  class Yf extends Qf {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, n, r, o) {
      let s = e[n];
      if (!this._isShallow) {
        const l = vn(s);
        if ((!fe(r) && !vn(r) && ((s = ht(s)), (r = ht(r))), !tt(e) && Mt(s) && !Mt(r)))
          return l ? !1 : ((s.value = r), !0);
      }
      const i = tt(e) && Hi(n) ? Number(n) < e.length : pt(e, n),
        a = Reflect.set(e, n, r, Mt(e) ? e : o);
      return e === ht(o) && (i ? ee(r, s) && Fe(e, "set", n, r) : Fe(e, "add", n, r)), a;
    }
    deleteProperty(e, n) {
      const r = pt(e, n);
      e[n];
      const o = Reflect.deleteProperty(e, n);
      return o && r && Fe(e, "delete", n, void 0), o;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!Te(n) || !Jf.has(n)) && Zt(e, "has", n), r;
    }
    ownKeys(e) {
      return Zt(e, "iterate", tt(e) ? "length" : gn), Reflect.ownKeys(e);
    }
  }
  class ig extends Qf {
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
  const ag = new Yf(),
    lg = new ig(),
    cg = new Yf(!0),
    Zi = (t) => t,
    Lo = (t) => Reflect.getPrototypeOf(t);
  function Ur(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const o = ht(t),
      s = ht(e);
    n || (ee(e, s) && Zt(o, "get", e), Zt(o, "get", s));
    const { has: i } = Lo(o),
      a = r ? Zi : n ? ta : Gt;
    if (i.call(o, e)) return a(t.get(e));
    if (i.call(o, s)) return a(t.get(s));
    t !== o && t.get(e);
  }
  function Vr(t, e = !1) {
    const n = this.__v_raw,
      r = ht(n),
      o = ht(t);
    return e || (ee(t, o) && Zt(r, "has", t), Zt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
  }
  function Hr(t, e = !1) {
    return (t = t.__v_raw), !e && Zt(ht(t), "iterate", gn), Reflect.get(t, "size", t);
  }
  function tl(t, e = !1) {
    !e && !fe(t) && !vn(t) && (t = ht(t));
    const n = ht(this);
    return Lo(n).has.call(n, t) || (n.add(t), Fe(n, "add", t, t)), this;
  }
  function el(t, e, n = !1) {
    !n && !fe(e) && !vn(e) && (e = ht(e));
    const r = ht(this),
      { has: o, get: s } = Lo(r);
    let i = o.call(r, t);
    i || ((t = ht(t)), (i = o.call(r, t)));
    const a = s.call(r, t);
    return r.set(t, e), i ? ee(e, a) && Fe(r, "set", t, e) : Fe(r, "add", t, e), this;
  }
  function nl(t) {
    const e = ht(this),
      { has: n, get: r } = Lo(e);
    let o = n.call(e, t);
    o || ((t = ht(t)), (o = n.call(e, t))), r && r.call(e, t);
    const s = e.delete(t);
    return o && Fe(e, "delete", t, void 0), s;
  }
  function rl() {
    const t = ht(this),
      e = t.size !== 0,
      n = t.clear();
    return e && Fe(t, "clear", void 0, void 0), n;
  }
  function qr(t, e) {
    return function (r, o) {
      const s = this,
        i = s.__v_raw,
        a = ht(i),
        l = e ? Zi : t ? ta : Gt;
      return !t && Zt(a, "iterate", gn), i.forEach((c, u) => r.call(o, l(c), l(u), s));
    };
  }
  function Kr(t, e, n) {
    return function (...r) {
      const o = this.__v_raw,
        s = ht(o),
        i = Nn(s),
        a = t === "entries" || (t === Symbol.iterator && i),
        l = t === "keys" && i,
        c = o[t](...r),
        u = n ? Zi : e ? ta : Gt;
      return (
        !e && Zt(s, "iterate", l ? fi : gn),
        {
          next() {
            const { value: d, done: f } = c.next();
            return f ? { value: d, done: f } : { value: a ? [u(d[0]), u(d[1])] : u(d), done: f };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function qe(t) {
    return function (...e) {
      return t === "delete" ? !1 : t === "clear" ? void 0 : this;
    };
  }
  function ug() {
    const t = {
        get(s) {
          return Ur(this, s);
        },
        get size() {
          return Hr(this);
        },
        has: Vr,
        add: tl,
        set: el,
        delete: nl,
        clear: rl,
        forEach: qr(!1, !1),
      },
      e = {
        get(s) {
          return Ur(this, s, !1, !0);
        },
        get size() {
          return Hr(this);
        },
        has: Vr,
        add(s) {
          return tl.call(this, s, !0);
        },
        set(s, i) {
          return el.call(this, s, i, !0);
        },
        delete: nl,
        clear: rl,
        forEach: qr(!1, !0),
      },
      n = {
        get(s) {
          return Ur(this, s, !0);
        },
        get size() {
          return Hr(this, !0);
        },
        has(s) {
          return Vr.call(this, s, !0);
        },
        add: qe("add"),
        set: qe("set"),
        delete: qe("delete"),
        clear: qe("clear"),
        forEach: qr(!0, !1),
      },
      r = {
        get(s) {
          return Ur(this, s, !0, !0);
        },
        get size() {
          return Hr(this, !0);
        },
        has(s) {
          return Vr.call(this, s, !0);
        },
        add: qe("add"),
        set: qe("set"),
        delete: qe("delete"),
        clear: qe("clear"),
        forEach: qr(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
        (t[s] = Kr(s, !1, !1)), (n[s] = Kr(s, !0, !1)), (e[s] = Kr(s, !1, !0)), (r[s] = Kr(s, !0, !0));
      }),
      [t, n, e, r]
    );
  }
  const [fg, hg, dg, pg] = ug();
  function Ji(t, e) {
    const n = e ? (t ? pg : dg) : t ? hg : fg;
    return (r, o, s) =>
      o === "__v_isReactive"
        ? !t
        : o === "__v_isReadonly"
          ? t
          : o === "__v_raw"
            ? r
            : Reflect.get(pt(n, o) && o in r ? n : r, o, s);
  }
  const gg = { get: Ji(!1, !1) },
    mg = { get: Ji(!1, !0) },
    vg = { get: Ji(!0, !1) },
    Xf = new WeakMap(),
    th = new WeakMap(),
    eh = new WeakMap(),
    yg = new WeakMap();
  function bg(t) {
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
  function _g(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : bg(Up(t));
  }
  function Gn(t) {
    return vn(t) ? t : Qi(t, !1, ag, gg, Xf);
  }
  function nh(t) {
    return Qi(t, !1, cg, mg, th);
  }
  function rh(t) {
    return Qi(t, !0, lg, vg, eh);
  }
  function Qi(t, e, n, r, o) {
    if (!Et(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const s = o.get(t);
    if (s) return s;
    const i = _g(t);
    if (i === 0) return t;
    const a = new Proxy(t, i === 2 ? r : n);
    return o.set(t, a), a;
  }
  function Qe(t) {
    return vn(t) ? Qe(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function vn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function fe(t) {
    return !!(t && t.__v_isShallow);
  }
  function Yi(t) {
    return t ? !!t.__v_raw : !1;
  }
  function ht(t) {
    const e = t && t.__v_raw;
    return e ? ht(e) : t;
  }
  function Xi(t) {
    return !pt(t, "__v_skip") && Object.isExtensible(t) && Pf(t, "__v_skip", !0), t;
  }
  const Gt = (t) => (Et(t) ? Gn(t) : t),
    ta = (t) => (Et(t) ? rh(t) : t);
  function Mt(t) {
    return t ? t.__v_isRef === !0 : !1;
  }
  function ct(t) {
    return sh(t, !1);
  }
  function oh(t) {
    return sh(t, !0);
  }
  function sh(t, e) {
    return Mt(t) ? t : new wg(t, e);
  }
  class wg {
    constructor(e, n) {
      (this.dep = new Io()),
        (this.__v_isRef = !0),
        (this.__v_isShallow = !1),
        (this._rawValue = n ? e : ht(e)),
        (this._value = n ? e : Gt(e)),
        (this.__v_isShallow = n);
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue,
        r = this.__v_isShallow || fe(e) || vn(e);
      (e = r ? e : ht(e)), ee(e, n) && ((this._rawValue = e), (this._value = r ? e : Gt(e)), this.dep.trigger());
    }
  }
  function U(t) {
    return Mt(t) ? t.value : t;
  }
  const xg = {
    get: (t, e, n) => (e === "__v_raw" ? t : U(Reflect.get(t, e, n))),
    set: (t, e, n, r) => {
      const o = t[e];
      return Mt(o) && !Mt(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, r);
    },
  };
  function ih(t) {
    return Qe(t) ? t : new Proxy(t, xg);
  }
  class kg {
    constructor(e) {
      (this.__v_isRef = !0), (this._value = void 0);
      const n = (this.dep = new Io()),
        { get: r, set: o } = e(n.track.bind(n), n.trigger.bind(n));
      (this._get = r), (this._set = o);
    }
    get value() {
      return (this._value = this._get());
    }
    set value(e) {
      this._set(e);
    }
  }
  function Sg(t) {
    return new kg(t);
  }
  function Ag(t) {
    const e = tt(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = Eg(t, n);
    return e;
  }
  class Tg {
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
      return eg(ht(this._object), this._key);
    }
  }
  function Eg(t, e, n) {
    const r = t[e];
    return Mt(r) ? r : new Tg(t, e, n);
  }
  class Og {
    constructor(e, n, r) {
      (this.fn = e),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new Io(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = Sr - 1),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && xt !== this)) return Hf(this), !0;
    }
    get value() {
      const e = this.dep.track();
      return Wf(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function Cg(t, e, n = !1) {
    let r, o;
    return st(t) ? (r = t) : ((r = t.get), (o = t.set)), new Og(r, o, n);
  }
  const Wr = {},
    po = new WeakMap();
  let hn;
  function Rg(t, e = !1, n = hn) {
    if (n) {
      let r = po.get(n);
      r || po.set(n, (r = [])), r.push(t);
    }
  }
  function jg(t, e, n = dt) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n,
      c = (k) => (o ? k : fe(k) || o === !1 || o === 0 ? Ne(k, 1) : Ne(k));
    let u,
      d,
      f,
      h,
      m = !1,
      p = !1;
    if (
      (Mt(t)
        ? ((d = () => t.value), (m = fe(t)))
        : Qe(t)
          ? ((d = () => c(t)), (m = !0))
          : tt(t)
            ? ((p = !0),
              (m = t.some((k) => Qe(k) || fe(k))),
              (d = () =>
                t.map((k) => {
                  if (Mt(k)) return k.value;
                  if (Qe(k)) return c(k);
                  if (st(k)) return l ? l(k, 2) : k();
                })))
            : st(t)
              ? e
                ? (d = l ? () => l(t, 2) : t)
                : (d = () => {
                    if (f) {
                      rn();
                      try {
                        f();
                      } finally {
                        on();
                      }
                    }
                    const k = hn;
                    hn = u;
                    try {
                      return l ? l(t, 3, [h]) : t(h);
                    } finally {
                      hn = k;
                    }
                  })
              : (d = ke),
      e && o)
    ) {
      const k = d,
        E = o === !0 ? 1 / 0 : o;
      d = () => Ne(k(), E);
    }
    const b = qi(),
      w = () => {
        u.stop(), b && Vi(b.effects, u);
      };
    if (s && e) {
      const k = e;
      e = (...E) => {
        k(...E), w();
      };
    }
    let _ = p ? new Array(t.length).fill(Wr) : Wr;
    const x = (k) => {
      if (!(!(u.flags & 1) || (!u.dirty && !k)))
        if (e) {
          const E = u.run();
          if (o || m || (p ? E.some((z, W) => ee(z, _[W])) : ee(E, _))) {
            f && f();
            const z = hn;
            hn = u;
            try {
              const W = [E, _ === Wr ? void 0 : p && _[0] === Wr ? [] : _, h];
              l ? l(e, 3, W) : e(...W), (_ = E);
            } finally {
              hn = z;
            }
          }
        } else u.run();
    };
    return (
      a && a(x),
      (u = new Uf(d)),
      (u.scheduler = i ? () => i(x, !1) : x),
      (h = (k) => Rg(k, !1, u)),
      (f = u.onStop =
        () => {
          const k = po.get(u);
          if (k) {
            if (l) l(k, 4);
            else for (const E of k) E();
            po.delete(u);
          }
        }),
      e ? (r ? x(!0) : (_ = u.run())) : i ? i(x.bind(null, !0), !0) : u.run(),
      (w.pause = u.pause.bind(u)),
      (w.resume = u.resume.bind(u)),
      (w.stop = w),
      w
    );
  }
  function Ne(t, e = 1 / 0, n) {
    if (e <= 0 || !Et(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
    if ((n.add(t), e--, Mt(t))) Ne(t.value, e, n);
    else if (tt(t)) for (let r = 0; r < t.length; r++) Ne(t[r], e, n);
    else if (Ro(t) || Nn(t))
      t.forEach((r) => {
        Ne(r, e, n);
      });
    else if ($f(t)) {
      for (const r in t) Ne(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && Ne(t[r], e, n);
    }
    return t;
  }
  /**
   * @vue/runtime-core v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function zr(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (o) {
      zo(o, e, n);
    }
  }
  function Ee(t, e, n, r) {
    if (st(t)) {
      const o = zr(t, e, n, r);
      return (
        o &&
          Rf(o) &&
          o.catch((s) => {
            zo(s, e, n);
          }),
        o
      );
    }
    if (tt(t)) {
      const o = [];
      for (let s = 0; s < t.length; s++) o.push(Ee(t[s], e, n, r));
      return o;
    }
  }
  function zo(t, e, n, r = !0) {
    const o = e ? e.vnode : null,
      { errorHandler: s, throwUnhandledErrorInProduction: i } = (e && e.appContext.config) || dt;
    if (e) {
      let a = e.parent;
      const l = e.proxy,
        c = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; a; ) {
        const u = a.ec;
        if (u) {
          for (let d = 0; d < u.length; d++) if (u[d](t, l, c) === !1) return;
        }
        a = a.parent;
      }
      if (s) {
        rn(), zr(s, null, 10, [t, l, c]), on();
        return;
      }
    }
    $g(t, n, o, r, i);
  }
  function $g(t, e, n, r = !0, o = !1) {
    if (o) throw t;
    console.error(t);
  }
  let Tr = !1,
    hi = !1;
  const Xt = [];
  let we = 0;
  const Dn = [];
  let Ge = null,
    Mn = 0;
  const ah = Promise.resolve();
  let ea = null;
  function No(t) {
    const e = ea || ah;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function Pg(t) {
    let e = Tr ? we + 1 : 0,
      n = Xt.length;
    for (; e < n; ) {
      const r = (e + n) >>> 1,
        o = Xt[r],
        s = Er(o);
      s < t || (s === t && o.flags & 2) ? (e = r + 1) : (n = r);
    }
    return e;
  }
  function na(t) {
    if (!(t.flags & 1)) {
      const e = Er(t),
        n = Xt[Xt.length - 1];
      !n || (!(t.flags & 2) && e >= Er(n)) ? Xt.push(t) : Xt.splice(Pg(e), 0, t), (t.flags |= 1), lh();
    }
  }
  function lh() {
    !Tr && !hi && ((hi = !0), (ea = ah.then(uh)));
  }
  function Ig(t) {
    tt(t) ? Dn.push(...t) : Ge && t.id === -1 ? Ge.splice(Mn + 1, 0, t) : t.flags & 1 || (Dn.push(t), (t.flags |= 1)),
      lh();
  }
  function ol(t, e, n = Tr ? we + 1 : 0) {
    for (; n < Xt.length; n++) {
      const r = Xt[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        Xt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), (r.flags &= -2);
      }
    }
  }
  function ch(t) {
    if (Dn.length) {
      const e = [...new Set(Dn)].sort((n, r) => Er(n) - Er(r));
      if (((Dn.length = 0), Ge)) {
        Ge.push(...e);
        return;
      }
      for (Ge = e, Mn = 0; Mn < Ge.length; Mn++) {
        const n = Ge[Mn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (Ge = null), (Mn = 0);
    }
  }
  const Er = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
  function uh(t) {
    (hi = !1), (Tr = !0);
    try {
      for (we = 0; we < Xt.length; we++) {
        const e = Xt[we];
        e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), zr(e, e.i, e.i ? 15 : 14), (e.flags &= -2));
      }
    } finally {
      for (; we < Xt.length; we++) {
        const e = Xt[we];
        e && (e.flags &= -2);
      }
      (we = 0), (Xt.length = 0), ch(), (Tr = !1), (ea = null), (Xt.length || Dn.length) && uh();
    }
  }
  let Ft = null,
    fh = null;
  function go(t) {
    const e = Ft;
    return (Ft = t), (fh = (t && t.type.__scopeId) || null), e;
  }
  function Oe(t, e = Ft, n) {
    if (!e || t._n) return t;
    const r = (...o) => {
      r._d && hl(-1);
      const s = go(e);
      let i;
      try {
        i = t(...o);
      } finally {
        go(s), r._d && hl(1);
      }
      return i;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function ra(t, e) {
    if (Ft === null) return t;
    const n = Ho(Ft),
      r = t.dirs || (t.dirs = []);
    for (let o = 0; o < e.length; o++) {
      let [s, i, a, l = dt] = e[o];
      s &&
        (st(s) && (s = { mounted: s, updated: s }),
        s.deep && Ne(i),
        r.push({ dir: s, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
    }
    return t;
  }
  function cn(t, e, n, r) {
    const o = t.dirs,
      s = e && e.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (rn(), Ee(l, n, 8, [t.el, a, t, e]), on());
    }
  }
  const Mg = Symbol("_vte"),
    Lg = (t) => t.__isTeleport;
  function oa(t, e) {
    t.shapeFlag & 6 && t.component
      ? ((t.transition = e), oa(t.component.subTree, e))
      : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Nt(t, e) {
    return st(t) ? Ut({ name: t.name }, e, { setup: t }) : t;
  }
  function hh(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function di(t, e, n, r, o = !1) {
    if (tt(t)) {
      t.forEach((m, p) => di(m, e && (tt(e) ? e[p] : e), n, r, o));
      return;
    }
    if (Fn(r) && !o) return;
    const s = r.shapeFlag & 4 ? Ho(r.component) : r.el,
      i = o ? null : s,
      { i: a, r: l } = t,
      c = e && e.r,
      u = a.refs === dt ? (a.refs = {}) : a.refs,
      d = a.setupState,
      f = ht(d),
      h = d === dt ? () => !1 : (m) => pt(f, m);
    if ((c != null && c !== l && (zt(c) ? ((u[c] = null), h(c) && (d[c] = null)) : Mt(c) && (c.value = null)), st(l)))
      zr(l, a, 12, [i, u]);
    else {
      const m = zt(l),
        p = Mt(l);
      if (m || p) {
        const b = () => {
          if (t.f) {
            const w = m ? (h(l) ? d[l] : u[l]) : l.value;
            o
              ? tt(w) && Vi(w, s)
              : tt(w)
                ? w.includes(s) || w.push(s)
                : m
                  ? ((u[l] = [s]), h(l) && (d[l] = u[l]))
                  : ((l.value = [s]), t.k && (u[t.k] = l.value));
          } else m ? ((u[l] = i), h(l) && (d[l] = i)) : p && ((l.value = i), t.k && (u[t.k] = i));
        };
        i ? ((b.id = -1), se(b, n)) : b();
      }
    }
  }
  const Fn = (t) => !!t.type.__asyncLoader,
    dh = (t) => t.type.__isKeepAlive;
  function zg(t, e) {
    ph(t, "a", e);
  }
  function Ng(t, e) {
    ph(t, "da", e);
  }
  function ph(t, e, n = Bt) {
    const r =
      t.__wdc ||
      (t.__wdc = () => {
        let o = n;
        for (; o; ) {
          if (o.isDeactivated) return;
          o = o.parent;
        }
        return t();
      });
    if ((Do(e, r, n), n)) {
      let o = n.parent;
      for (; o && o.parent; ) dh(o.parent.vnode) && Dg(r, e, n, o), (o = o.parent);
    }
  }
  function Dg(t, e, n, r) {
    const o = Do(e, t, r, !0);
    mh(() => {
      Vi(r[e], o);
    }, n);
  }
  function Do(t, e, n = Bt, r = !1) {
    if (n) {
      const o = n[t] || (n[t] = []),
        s =
          e.__weh ||
          (e.__weh = (...i) => {
            rn();
            const a = Nr(n),
              l = Ee(e, n, t, i);
            return a(), on(), l;
          });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  const Be =
      (t) =>
      (e, n = Bt) => {
        (!Vo || t === "sp") && Do(t, (...r) => e(...r), n);
      },
    Fg = Be("bm"),
    sa = Be("m"),
    gh = Be("bu"),
    Bg = Be("u"),
    Ug = Be("bum"),
    mh = Be("um"),
    Vg = Be("sp"),
    Hg = Be("rtg"),
    qg = Be("rtc");
  function Kg(t, e = Bt) {
    Do("ec", t, e);
  }
  const Wg = "components";
  function vh(t, e) {
    return Zg(Wg, t, !0, e) || t;
  }
  const Gg = Symbol.for("v-ndc");
  function Zg(t, e, n = !0, r = !1) {
    const o = Ft || Bt;
    if (o) {
      const s = o.type;
      {
        const a = zm(s, !1);
        if (a && (a === e || a === ae(e) || a === $o(ae(e)))) return s;
      }
      const i = sl(o[t] || s[t], e) || sl(o.appContext[t], e);
      return !i && r ? s : i;
    }
  }
  function sl(t, e) {
    return t && (t[e] || t[ae(e)] || t[$o(ae(e))]);
  }
  function qt(t, e, n, r) {
    let o;
    const s = n,
      i = tt(t);
    if (i || zt(t)) {
      const a = i && Qe(t);
      let l = !1;
      a && ((l = !fe(t)), (t = Mo(t))), (o = new Array(t.length));
      for (let c = 0, u = t.length; c < u; c++) o[c] = e(l ? Gt(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      o = new Array(t);
      for (let a = 0; a < t; a++) o[a] = e(a + 1, a, void 0, s);
    } else if (Et(t))
      if (t[Symbol.iterator]) o = Array.from(t, (a, l) => e(a, l, void 0, s));
      else {
        const a = Object.keys(t);
        o = new Array(a.length);
        for (let l = 0, c = a.length; l < c; l++) {
          const u = a[l];
          o[l] = e(t[u], u, l, s);
        }
      }
    else o = [];
    return o;
  }
  function De(t, e, n = {}, r, o) {
    if (Ft.ce || (Ft.parent && Fn(Ft.parent) && Ft.parent.ce))
      return e !== "default" && (n.name = e), M(), Bn(ut, null, [at("slot", n, r)], 64);
    let s = t[e];
    s && s._c && (s._d = !1), M();
    const i = s && yh(s(n)),
      a = Bn(
        ut,
        { key: (n.key || (i && i.key) || `_${e}`) + (!i && r ? "_fb" : "") },
        i || [],
        i && t._ === 1 ? 64 : -2,
      );
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
  }
  function yh(t) {
    return t.some((e) => (yo(e) ? !(e.type === Xe || (e.type === ut && !yh(e.children))) : !0)) ? t : null;
  }
  const pi = (t) => (t ? (Fh(t) ? Ho(t) : pi(t.parent)) : null),
    pr = Ut(Object.create(null), {
      $: (t) => t,
      $el: (t) => t.vnode.el,
      $data: (t) => t.data,
      $props: (t) => t.props,
      $attrs: (t) => t.attrs,
      $slots: (t) => t.slots,
      $refs: (t) => t.refs,
      $parent: (t) => pi(t.parent),
      $root: (t) => pi(t.root),
      $host: (t) => t.ce,
      $emit: (t) => t.emit,
      $options: (t) => ia(t),
      $forceUpdate: (t) =>
        t.f ||
        (t.f = () => {
          na(t.update);
        }),
      $nextTick: (t) => t.n || (t.n = No.bind(t.proxy)),
      $watch: (t) => bm.bind(t),
    }),
    ds = (t, e) => t !== dt && !t.__isScriptSetup && pt(t, e),
    Jg = {
      get({ _: t }, e) {
        if (e === "__v_skip") return !0;
        const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = t;
        let c;
        if (e[0] !== "$") {
          const h = i[e];
          if (h !== void 0)
            switch (h) {
              case 1:
                return r[e];
              case 2:
                return o[e];
              case 4:
                return n[e];
              case 3:
                return s[e];
            }
          else {
            if (ds(r, e)) return (i[e] = 1), r[e];
            if (o !== dt && pt(o, e)) return (i[e] = 2), o[e];
            if ((c = t.propsOptions[0]) && pt(c, e)) return (i[e] = 3), s[e];
            if (n !== dt && pt(n, e)) return (i[e] = 4), n[e];
            gi && (i[e] = 0);
          }
        }
        const u = pr[e];
        let d, f;
        if (u) return e === "$attrs" && Zt(t.attrs, "get", ""), u(t);
        if ((d = a.__cssModules) && (d = d[e])) return d;
        if (n !== dt && pt(n, e)) return (i[e] = 4), n[e];
        if (((f = l.config.globalProperties), pt(f, e))) return f[e];
      },
      set({ _: t }, e, n) {
        const { data: r, setupState: o, ctx: s } = t;
        return ds(o, e)
          ? ((o[e] = n), !0)
          : r !== dt && pt(r, e)
            ? ((r[e] = n), !0)
            : pt(t.props, e) || (e[0] === "$" && e.slice(1) in t)
              ? !1
              : ((s[e] = n), !0);
      },
      has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
        let a;
        return (
          !!n[i] ||
          (t !== dt && pt(t, i)) ||
          ds(e, i) ||
          ((a = s[0]) && pt(a, i)) ||
          pt(r, i) ||
          pt(pr, i) ||
          pt(o.config.globalProperties, i)
        );
      },
      defineProperty(t, e, n) {
        return (
          n.get != null ? (t._.accessCache[e] = 0) : pt(n, "value") && this.set(t, e, n.value, null),
          Reflect.defineProperty(t, e, n)
        );
      },
    };
  function mo(t) {
    return tt(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
  }
  function Qg(t, e) {
    return !t || !e ? t || e : tt(t) && tt(e) ? t.concat(e) : Ut({}, mo(t), mo(e));
  }
  let gi = !0;
  function Yg(t) {
    const e = ia(t),
      n = t.proxy,
      r = t.ctx;
    (gi = !1), e.beforeCreate && il(e.beforeCreate, t, "bc");
    const {
      data: o,
      computed: s,
      methods: i,
      watch: a,
      provide: l,
      inject: c,
      created: u,
      beforeMount: d,
      mounted: f,
      beforeUpdate: h,
      updated: m,
      activated: p,
      deactivated: b,
      beforeDestroy: w,
      beforeUnmount: _,
      destroyed: x,
      unmounted: k,
      render: E,
      renderTracked: z,
      renderTriggered: W,
      errorCaptured: V,
      serverPrefetch: X,
      expose: A,
      inheritAttrs: g,
      components: S,
      directives: R,
      filters: J,
    } = e;
    if ((c && Xg(c, r, null), i))
      for (const H in i) {
        const it = i[H];
        st(it) && (r[H] = it.bind(n));
      }
    if (o) {
      const H = o.call(n, n);
      Et(H) && (t.data = Gn(H));
    }
    if (((gi = !0), s))
      for (const H in s) {
        const it = s[H],
          Vt = st(it) ? it.bind(n, n) : st(it.get) ? it.get.bind(n, n) : ke,
          $t = !st(it) && st(it.set) ? it.set.bind(n) : ke,
          Jt = rt({ get: Vt, set: $t });
        Object.defineProperty(r, H, {
          enumerable: !0,
          configurable: !0,
          get: () => Jt.value,
          set: (_t) => (Jt.value = _t),
        });
      }
    if (a) for (const H in a) bh(a[H], r, n, H);
    if (l) {
      const H = st(l) ? l.call(n) : l;
      Reflect.ownKeys(H).forEach((it) => {
        so(it, H[it]);
      });
    }
    u && il(u, t, "c");
    function q(H, it) {
      tt(it) ? it.forEach((Vt) => H(Vt.bind(n))) : it && H(it.bind(n));
    }
    if (
      (q(Fg, d),
      q(sa, f),
      q(gh, h),
      q(Bg, m),
      q(zg, p),
      q(Ng, b),
      q(Kg, V),
      q(qg, z),
      q(Hg, W),
      q(Ug, _),
      q(mh, k),
      q(Vg, X),
      tt(A))
    )
      if (A.length) {
        const H = t.exposed || (t.exposed = {});
        A.forEach((it) => {
          Object.defineProperty(H, it, { get: () => n[it], set: (Vt) => (n[it] = Vt) });
        });
      } else t.exposed || (t.exposed = {});
    E && t.render === ke && (t.render = E),
      g != null && (t.inheritAttrs = g),
      S && (t.components = S),
      R && (t.directives = R),
      X && hh(t);
  }
  function Xg(t, e, n = ke) {
    tt(t) && (t = mi(t));
    for (const r in t) {
      const o = t[r];
      let s;
      Et(o) ? ("default" in o ? (s = he(o.from || r, o.default, !0)) : (s = he(o.from || r))) : (s = he(o)),
        Mt(s)
          ? Object.defineProperty(e, r, {
              enumerable: !0,
              configurable: !0,
              get: () => s.value,
              set: (i) => (s.value = i),
            })
          : (e[r] = s);
    }
  }
  function il(t, e, n) {
    Ee(tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function bh(t, e, n, r) {
    let o = r.includes(".") ? Ph(n, r) : () => n[r];
    if (zt(t)) {
      const s = e[t];
      st(s) && Se(o, s);
    } else if (st(t)) Se(o, t.bind(n));
    else if (Et(t))
      if (tt(t)) t.forEach((s) => bh(s, e, n, r));
      else {
        const s = st(t.handler) ? t.handler.bind(n) : e[t.handler];
        st(s) && Se(o, s, t);
      }
  }
  function ia(t) {
    const e = t.type,
      { mixins: n, extends: r } = e,
      {
        mixins: o,
        optionsCache: s,
        config: { optionMergeStrategies: i },
      } = t.appContext,
      a = s.get(e);
    let l;
    return (
      a
        ? (l = a)
        : !o.length && !n && !r
          ? (l = e)
          : ((l = {}), o.length && o.forEach((c) => vo(l, c, i, !0)), vo(l, e, i)),
      Et(e) && s.set(e, l),
      l
    );
  }
  function vo(t, e, n, r = !1) {
    const { mixins: o, extends: s } = e;
    s && vo(t, s, n, !0), o && o.forEach((i) => vo(t, i, n, !0));
    for (const i in e)
      if (!(r && i === "expose")) {
        const a = tm[i] || (n && n[i]);
        t[i] = a ? a(t[i], e[i]) : e[i];
      }
    return t;
  }
  const tm = {
    data: al,
    props: ll,
    emits: ll,
    methods: cr,
    computed: cr,
    beforeCreate: Qt,
    created: Qt,
    beforeMount: Qt,
    mounted: Qt,
    beforeUpdate: Qt,
    updated: Qt,
    beforeDestroy: Qt,
    beforeUnmount: Qt,
    destroyed: Qt,
    unmounted: Qt,
    activated: Qt,
    deactivated: Qt,
    errorCaptured: Qt,
    serverPrefetch: Qt,
    components: cr,
    directives: cr,
    watch: nm,
    provide: al,
    inject: em,
  };
  function al(t, e) {
    return e
      ? t
        ? function () {
            return Ut(st(t) ? t.call(this, this) : t, st(e) ? e.call(this, this) : e);
          }
        : e
      : t;
  }
  function em(t, e) {
    return cr(mi(t), mi(e));
  }
  function mi(t) {
    if (tt(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
      return e;
    }
    return t;
  }
  function Qt(t, e) {
    return t ? [...new Set([].concat(t, e))] : e;
  }
  function cr(t, e) {
    return t ? Ut(Object.create(null), t, e) : e;
  }
  function ll(t, e) {
    return t ? (tt(t) && tt(e) ? [...new Set([...t, ...e])] : Ut(Object.create(null), mo(t), mo(e ?? {}))) : e;
  }
  function nm(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Ut(Object.create(null), t);
    for (const r in e) n[r] = Qt(t[r], e[r]);
    return n;
  }
  function _h() {
    return {
      app: null,
      config: {
        isNativeTag: Fp,
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
  let rm = 0;
  function om(t, e) {
    return function (r, o = null) {
      st(r) || (r = Ut({}, r)), o != null && !Et(o) && (o = null);
      const s = _h(),
        i = new WeakSet(),
        a = [];
      let l = !1;
      const c = (s.app = {
        _uid: rm++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Dm,
        get config() {
          return s.config;
        },
        set config(u) {},
        use(u, ...d) {
          return i.has(u) || (u && st(u.install) ? (i.add(u), u.install(c, ...d)) : st(u) && (i.add(u), u(c, ...d))), c;
        },
        mixin(u) {
          return s.mixins.includes(u) || s.mixins.push(u), c;
        },
        component(u, d) {
          return d ? ((s.components[u] = d), c) : s.components[u];
        },
        directive(u, d) {
          return d ? ((s.directives[u] = d), c) : s.directives[u];
        },
        mount(u, d, f) {
          if (!l) {
            const h = c._ceVNode || at(r, o);
            return (
              (h.appContext = s),
              f === !0 ? (f = "svg") : f === !1 && (f = void 0),
              d && e ? e(h, u) : t(h, u, f),
              (l = !0),
              (c._container = u),
              (u.__vue_app__ = c),
              Ho(h.component)
            );
          }
        },
        onUnmount(u) {
          a.push(u);
        },
        unmount() {
          l && (Ee(a, c._instance, 16), t(null, c._container), delete c._container.__vue_app__);
        },
        provide(u, d) {
          return (s.provides[u] = d), c;
        },
        runWithContext(u) {
          const d = mn;
          mn = c;
          try {
            return u();
          } finally {
            mn = d;
          }
        },
      });
      return c;
    };
  }
  let mn = null;
  function so(t, e) {
    if (Bt) {
      let n = Bt.provides;
      const r = Bt.parent && Bt.parent.provides;
      r === n && (n = Bt.provides = Object.create(r)), (n[t] = e);
    }
  }
  function he(t, e, n = !1) {
    const r = Bt || Ft;
    if (r || mn) {
      const o = mn
        ? mn._context.provides
        : r
          ? r.parent == null
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (o && t in o) return o[t];
      if (arguments.length > 1) return n && st(e) ? e.call(r && r.proxy) : e;
    }
  }
  function sm() {
    return !!(Bt || Ft || mn);
  }
  const wh = {},
    xh = () => Object.create(wh),
    kh = (t) => Object.getPrototypeOf(t) === wh;
  function im(t, e, n, r = !1) {
    const o = {},
      s = xh();
    (t.propsDefaults = Object.create(null)), Sh(t, e, o, s);
    for (const i in t.propsOptions[0]) i in o || (o[i] = void 0);
    n ? (t.props = r ? o : nh(o)) : t.type.props ? (t.props = o) : (t.props = s), (t.attrs = s);
  }
  function am(t, e, n, r) {
    const {
        props: o,
        attrs: s,
        vnode: { patchFlag: i },
      } = t,
      a = ht(o),
      [l] = t.propsOptions;
    let c = !1;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const u = t.vnode.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          let f = u[d];
          if (Bo(t.emitsOptions, f)) continue;
          const h = e[f];
          if (l)
            if (pt(s, f)) h !== s[f] && ((s[f] = h), (c = !0));
            else {
              const m = ae(f);
              o[m] = vi(l, a, m, h, t, !1);
            }
          else h !== s[f] && ((s[f] = h), (c = !0));
        }
      }
    } else {
      Sh(t, e, o, s) && (c = !0);
      let u;
      for (const d in a)
        (!e || (!pt(e, d) && ((u = en(d)) === d || !pt(e, u)))) &&
          (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (o[d] = vi(l, a, d, void 0, t, !0)) : delete o[d]);
      if (s !== a) for (const d in s) (!e || !pt(e, d)) && (delete s[d], (c = !0));
    }
    c && Fe(t.attrs, "set", "");
  }
  function Sh(t, e, n, r) {
    const [o, s] = t.propsOptions;
    let i = !1,
      a;
    if (e)
      for (let l in e) {
        if (fr(l)) continue;
        const c = e[l];
        let u;
        o && pt(o, (u = ae(l)))
          ? !s || !s.includes(u)
            ? (n[u] = c)
            : ((a || (a = {}))[u] = c)
          : Bo(t.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
      }
    if (s) {
      const l = ht(n),
        c = a || dt;
      for (let u = 0; u < s.length; u++) {
        const d = s[u];
        n[d] = vi(o, l, d, c[d], t, !pt(c, d));
      }
    }
    return i;
  }
  function vi(t, e, n, r, o, s) {
    const i = t[n];
    if (i != null) {
      const a = pt(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && st(l)) {
          const { propsDefaults: c } = o;
          if (n in c) r = c[n];
          else {
            const u = Nr(o);
            (r = c[n] = l.call(null, e)), u();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? (r = !1) : i[1] && (r === "" || r === en(n)) && (r = !0));
    }
    return r;
  }
  const lm = new WeakMap();
  function Ah(t, e, n = !1) {
    const r = n ? lm : e.propsCache,
      o = r.get(t);
    if (o) return o;
    const s = t.props,
      i = {},
      a = [];
    let l = !1;
    if (!st(t)) {
      const u = (d) => {
        l = !0;
        const [f, h] = Ah(d, e, !0);
        Ut(i, f), h && a.push(...h);
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    if (!s && !l) return Et(t) && r.set(t, zn), zn;
    if (tt(s))
      for (let u = 0; u < s.length; u++) {
        const d = ae(s[u]);
        cl(d) && (i[d] = dt);
      }
    else if (s)
      for (const u in s) {
        const d = ae(u);
        if (cl(d)) {
          const f = s[u],
            h = (i[d] = tt(f) || st(f) ? { type: f } : Ut({}, f)),
            m = h.type;
          let p = !1,
            b = !0;
          if (tt(m))
            for (let w = 0; w < m.length; ++w) {
              const _ = m[w],
                x = st(_) && _.name;
              if (x === "Boolean") {
                p = !0;
                break;
              } else x === "String" && (b = !1);
            }
          else p = st(m) && m.name === "Boolean";
          (h[0] = p), (h[1] = b), (p || pt(h, "default")) && a.push(d);
        }
      }
    const c = [i, a];
    return Et(t) && r.set(t, c), c;
  }
  function cl(t) {
    return t[0] !== "$" && !fr(t);
  }
  const Th = (t) => t[0] === "_" || t === "$stable",
    aa = (t) => (tt(t) ? t.map(xe) : [xe(t)]),
    cm = (t, e, n) => {
      if (e._n) return e;
      const r = Oe((...o) => aa(e(...o)), n);
      return (r._c = !1), r;
    },
    Eh = (t, e, n) => {
      const r = t._ctx;
      for (const o in t) {
        if (Th(o)) continue;
        const s = t[o];
        if (st(s)) e[o] = cm(o, s, r);
        else if (s != null) {
          const i = aa(s);
          e[o] = () => i;
        }
      }
    },
    Oh = (t, e) => {
      const n = aa(e);
      t.slots.default = () => n;
    },
    Ch = (t, e, n) => {
      for (const r in e) (n || r !== "_") && (t[r] = e[r]);
    },
    um = (t, e, n) => {
      const r = (t.slots = xh());
      if (t.vnode.shapeFlag & 32) {
        const o = e._;
        o ? (Ch(r, e, n), n && Pf(r, "_", o, !0)) : Eh(e, r);
      } else e && Oh(t, e);
    },
    fm = (t, e, n) => {
      const { vnode: r, slots: o } = t;
      let s = !0,
        i = dt;
      if (r.shapeFlag & 32) {
        const a = e._;
        a ? (n && a === 1 ? (s = !1) : Ch(o, e, n)) : ((s = !e.$stable), Eh(e, o)), (i = e);
      } else e && (Oh(t, e), (i = { default: 1 }));
      if (s) for (const a in o) !Th(a) && i[a] == null && delete o[a];
    },
    se = Am;
  function hm(t) {
    return dm(t);
  }
  function dm(t, e) {
    const n = If();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: s,
        createElement: i,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: f,
        setScopeId: h = ke,
        insertStaticContent: m,
      } = t,
      p = (v, y, T, $ = null, O = null, P = null, F = void 0, D = null, N = !!y.dynamicChildren) => {
        if (v === y) return;
        v && !nr(v, y) && (($ = C(v)), _t(v, O, P, !0), (v = null)),
          y.patchFlag === -2 && ((N = !1), (y.dynamicChildren = null));
        const { type: I, ref: nt, shapeFlag: K } = y;
        switch (I) {
          case Uo:
            b(v, y, T, $);
            break;
          case Xe:
            w(v, y, T, $);
            break;
          case ms:
            v == null && _(y, T, $, F);
            break;
          case ut:
            S(v, y, T, $, O, P, F, D, N);
            break;
          default:
            K & 1
              ? E(v, y, T, $, O, P, F, D, N)
              : K & 6
                ? R(v, y, T, $, O, P, F, D, N)
                : (K & 64 || K & 128) && I.process(v, y, T, $, O, P, F, D, N, Q);
        }
        nt != null && O && di(nt, v && v.ref, P, y || v, !y);
      },
      b = (v, y, T, $) => {
        if (v == null) r((y.el = a(y.children)), T, $);
        else {
          const O = (y.el = v.el);
          y.children !== v.children && c(O, y.children);
        }
      },
      w = (v, y, T, $) => {
        v == null ? r((y.el = l(y.children || "")), T, $) : (y.el = v.el);
      },
      _ = (v, y, T, $) => {
        [v.el, v.anchor] = m(v.children, y, T, $, v.el, v.anchor);
      },
      x = ({ el: v, anchor: y }, T, $) => {
        let O;
        for (; v && v !== y; ) (O = f(v)), r(v, T, $), (v = O);
        r(y, T, $);
      },
      k = ({ el: v, anchor: y }) => {
        let T;
        for (; v && v !== y; ) (T = f(v)), o(v), (v = T);
        o(y);
      },
      E = (v, y, T, $, O, P, F, D, N) => {
        y.type === "svg" ? (F = "svg") : y.type === "math" && (F = "mathml"),
          v == null ? z(y, T, $, O, P, F, D, N) : X(v, y, O, P, F, D, N);
      },
      z = (v, y, T, $, O, P, F, D) => {
        let N, I;
        const { props: nt, shapeFlag: K, transition: Y, dirs: ot } = v;
        if (
          ((N = v.el = i(v.type, P, nt && nt.is, nt)),
          K & 8 ? u(N, v.children) : K & 16 && V(v.children, N, null, $, O, ps(v, P), F, D),
          ot && cn(v, null, $, "created"),
          W(N, v, v.scopeId, F, $),
          nt)
        ) {
          for (const St in nt) St !== "value" && !fr(St) && s(N, St, null, nt[St], P, $);
          "value" in nt && s(N, "value", null, nt.value, P), (I = nt.onVnodeBeforeMount) && be(I, $, v);
        }
        ot && cn(v, null, $, "beforeMount");
        const ft = pm(O, Y);
        ft && Y.beforeEnter(N),
          r(N, y, T),
          ((I = nt && nt.onVnodeMounted) || ft || ot) &&
            se(() => {
              I && be(I, $, v), ft && Y.enter(N), ot && cn(v, null, $, "mounted");
            }, O);
      },
      W = (v, y, T, $, O) => {
        if ((T && h(v, T), $)) for (let P = 0; P < $.length; P++) h(v, $[P]);
        if (O) {
          let P = O.subTree;
          if (y === P || (zh(P.type) && (P.ssContent === y || P.ssFallback === y))) {
            const F = O.vnode;
            W(v, F, F.scopeId, F.slotScopeIds, O.parent);
          }
        }
      },
      V = (v, y, T, $, O, P, F, D, N = 0) => {
        for (let I = N; I < v.length; I++) {
          const nt = (v[I] = D ? Ze(v[I]) : xe(v[I]));
          p(null, nt, y, T, $, O, P, F, D);
        }
      },
      X = (v, y, T, $, O, P, F) => {
        const D = (y.el = v.el);
        let { patchFlag: N, dynamicChildren: I, dirs: nt } = y;
        N |= v.patchFlag & 16;
        const K = v.props || dt,
          Y = y.props || dt;
        let ot;
        if (
          (T && un(T, !1),
          (ot = Y.onVnodeBeforeUpdate) && be(ot, T, y, v),
          nt && cn(y, v, T, "beforeUpdate"),
          T && un(T, !0),
          ((K.innerHTML && Y.innerHTML == null) || (K.textContent && Y.textContent == null)) && u(D, ""),
          I ? A(v.dynamicChildren, I, D, T, $, ps(y, O), P) : F || it(v, y, D, null, T, $, ps(y, O), P, !1),
          N > 0)
        ) {
          if (N & 16) g(D, K, Y, T, O);
          else if (
            (N & 2 && K.class !== Y.class && s(D, "class", null, Y.class, O),
            N & 4 && s(D, "style", K.style, Y.style, O),
            N & 8)
          ) {
            const ft = y.dynamicProps;
            for (let St = 0; St < ft.length; St++) {
              const mt = ft[St],
                ne = K[mt],
                Wt = Y[mt];
              (Wt !== ne || mt === "value") && s(D, mt, ne, Wt, O, T);
            }
          }
          N & 1 && v.children !== y.children && u(D, y.children);
        } else !F && I == null && g(D, K, Y, T, O);
        ((ot = Y.onVnodeUpdated) || nt) &&
          se(() => {
            ot && be(ot, T, y, v), nt && cn(y, v, T, "updated");
          }, $);
      },
      A = (v, y, T, $, O, P, F) => {
        for (let D = 0; D < y.length; D++) {
          const N = v[D],
            I = y[D],
            nt = N.el && (N.type === ut || !nr(N, I) || N.shapeFlag & 70) ? d(N.el) : T;
          p(N, I, nt, null, $, O, P, F, !0);
        }
      },
      g = (v, y, T, $, O) => {
        if (y !== T) {
          if (y !== dt) for (const P in y) !fr(P) && !(P in T) && s(v, P, y[P], null, O, $);
          for (const P in T) {
            if (fr(P)) continue;
            const F = T[P],
              D = y[P];
            F !== D && P !== "value" && s(v, P, D, F, O, $);
          }
          "value" in T && s(v, "value", y.value, T.value, O);
        }
      },
      S = (v, y, T, $, O, P, F, D, N) => {
        const I = (y.el = v ? v.el : a("")),
          nt = (y.anchor = v ? v.anchor : a(""));
        let { patchFlag: K, dynamicChildren: Y, slotScopeIds: ot } = y;
        ot && (D = D ? D.concat(ot) : ot),
          v == null
            ? (r(I, T, $), r(nt, T, $), V(y.children || [], T, nt, O, P, F, D, N))
            : K > 0 && K & 64 && Y && v.dynamicChildren
              ? (A(v.dynamicChildren, Y, T, O, P, F, D), (y.key != null || (O && y === O.subTree)) && Rh(v, y, !0))
              : it(v, y, T, nt, O, P, F, D, N);
      },
      R = (v, y, T, $, O, P, F, D, N) => {
        (y.slotScopeIds = D),
          v == null ? (y.shapeFlag & 512 ? O.ctx.activate(y, T, $, F, N) : J(y, T, $, O, P, F, N)) : et(v, y, N);
      },
      J = (v, y, T, $, O, P, F) => {
        const D = (v.component = $m(v, $, O));
        if ((dh(v) && (D.ctx.renderer = Q), Pm(D, !1, F), D.asyncDep)) {
          if ((O && O.registerDep(D, q, F), !v.el)) {
            const N = (D.subTree = at(Xe));
            w(null, N, y, T);
          }
        } else q(D, v, y, T, O, P, F);
      },
      et = (v, y, T) => {
        const $ = (y.component = v.component);
        if (km(v, y, T))
          if ($.asyncDep && !$.asyncResolved) {
            H($, y, T);
            return;
          } else ($.next = y), $.update();
        else (y.el = v.el), ($.vnode = y);
      },
      q = (v, y, T, $, O, P, F) => {
        const D = () => {
          if (v.isMounted) {
            let { next: K, bu: Y, u: ot, parent: ft, vnode: St } = v;
            {
              const re = jh(v);
              if (re) {
                K && ((K.el = St.el), H(v, K, F)),
                  re.asyncDep.then(() => {
                    v.isUnmounted || D();
                  });
                return;
              }
            }
            let mt = K,
              ne;
            un(v, !1),
              K ? ((K.el = St.el), H(v, K, F)) : (K = St),
              Y && oo(Y),
              (ne = K.props && K.props.onVnodeBeforeUpdate) && be(ne, ft, K, St),
              un(v, !0);
            const Wt = gs(v),
              pe = v.subTree;
            (v.subTree = Wt),
              p(pe, Wt, d(pe.el), C(pe), v, O, P),
              (K.el = Wt.el),
              mt === null && Sm(v, Wt.el),
              ot && se(ot, O),
              (ne = K.props && K.props.onVnodeUpdated) && se(() => be(ne, ft, K, St), O);
          } else {
            let K;
            const { el: Y, props: ot } = y,
              { bm: ft, m: St, parent: mt, root: ne, type: Wt } = v,
              pe = Fn(y);
            if (
              (un(v, !1), ft && oo(ft), !pe && (K = ot && ot.onVnodeBeforeMount) && be(K, mt, y), un(v, !0), Y && It)
            ) {
              const re = () => {
                (v.subTree = gs(v)), It(Y, v.subTree, v, O, null);
              };
              pe && Wt.__asyncHydrate ? Wt.__asyncHydrate(Y, v, re) : re();
            } else {
              ne.ce && ne.ce._injectChildStyle(Wt);
              const re = (v.subTree = gs(v));
              p(null, re, T, $, v, O, P), (y.el = re.el);
            }
            if ((St && se(St, O), !pe && (K = ot && ot.onVnodeMounted))) {
              const re = y;
              se(() => be(K, mt, re), O);
            }
            (y.shapeFlag & 256 || (mt && Fn(mt.vnode) && mt.vnode.shapeFlag & 256)) && v.a && se(v.a, O),
              (v.isMounted = !0),
              (y = T = $ = null);
          }
        };
        v.scope.on();
        const N = (v.effect = new Uf(D));
        v.scope.off();
        const I = (v.update = N.run.bind(N)),
          nt = (v.job = N.runIfDirty.bind(N));
        (nt.i = v), (nt.id = v.uid), (N.scheduler = () => na(nt)), un(v, !0), I();
      },
      H = (v, y, T) => {
        y.component = v;
        const $ = v.vnode.props;
        (v.vnode = y), (v.next = null), am(v, y.props, $, T), fm(v, y.children, T), rn(), ol(v), on();
      },
      it = (v, y, T, $, O, P, F, D, N = !1) => {
        const I = v && v.children,
          nt = v ? v.shapeFlag : 0,
          K = y.children,
          { patchFlag: Y, shapeFlag: ot } = y;
        if (Y > 0) {
          if (Y & 128) {
            $t(I, K, T, $, O, P, F, D, N);
            return;
          } else if (Y & 256) {
            Vt(I, K, T, $, O, P, F, D, N);
            return;
          }
        }
        ot & 8
          ? (nt & 16 && le(I, O, P), K !== I && u(T, K))
          : nt & 16
            ? ot & 16
              ? $t(I, K, T, $, O, P, F, D, N)
              : le(I, O, P, !0)
            : (nt & 8 && u(T, ""), ot & 16 && V(K, T, $, O, P, F, D, N));
      },
      Vt = (v, y, T, $, O, P, F, D, N) => {
        (v = v || zn), (y = y || zn);
        const I = v.length,
          nt = y.length,
          K = Math.min(I, nt);
        let Y;
        for (Y = 0; Y < K; Y++) {
          const ot = (y[Y] = N ? Ze(y[Y]) : xe(y[Y]));
          p(v[Y], ot, T, null, O, P, F, D, N);
        }
        I > nt ? le(v, O, P, !0, !1, K) : V(y, T, $, O, P, F, D, N, K);
      },
      $t = (v, y, T, $, O, P, F, D, N) => {
        let I = 0;
        const nt = y.length;
        let K = v.length - 1,
          Y = nt - 1;
        for (; I <= K && I <= Y; ) {
          const ot = v[I],
            ft = (y[I] = N ? Ze(y[I]) : xe(y[I]));
          if (nr(ot, ft)) p(ot, ft, T, null, O, P, F, D, N);
          else break;
          I++;
        }
        for (; I <= K && I <= Y; ) {
          const ot = v[K],
            ft = (y[Y] = N ? Ze(y[Y]) : xe(y[Y]));
          if (nr(ot, ft)) p(ot, ft, T, null, O, P, F, D, N);
          else break;
          K--, Y--;
        }
        if (I > K) {
          if (I <= Y) {
            const ot = Y + 1,
              ft = ot < nt ? y[ot].el : $;
            for (; I <= Y; ) p(null, (y[I] = N ? Ze(y[I]) : xe(y[I])), T, ft, O, P, F, D, N), I++;
          }
        } else if (I > Y) for (; I <= K; ) _t(v[I], O, P, !0), I++;
        else {
          const ot = I,
            ft = I,
            St = new Map();
          for (I = ft; I <= Y; I++) {
            const oe = (y[I] = N ? Ze(y[I]) : xe(y[I]));
            oe.key != null && St.set(oe.key, I);
          }
          let mt,
            ne = 0;
          const Wt = Y - ft + 1;
          let pe = !1,
            re = 0;
          const tr = new Array(Wt);
          for (I = 0; I < Wt; I++) tr[I] = 0;
          for (I = ot; I <= K; I++) {
            const oe = v[I];
            if (ne >= Wt) {
              _t(oe, O, P, !0);
              continue;
            }
            let ye;
            if (oe.key != null) ye = St.get(oe.key);
            else
              for (mt = ft; mt <= Y; mt++)
                if (tr[mt - ft] === 0 && nr(oe, y[mt])) {
                  ye = mt;
                  break;
                }
            ye === void 0
              ? _t(oe, O, P, !0)
              : ((tr[ye - ft] = I + 1), ye >= re ? (re = ye) : (pe = !0), p(oe, y[ye], T, null, O, P, F, D, N), ne++);
          }
          const Ga = pe ? gm(tr) : zn;
          for (mt = Ga.length - 1, I = Wt - 1; I >= 0; I--) {
            const oe = ft + I,
              ye = y[oe],
              Za = oe + 1 < nt ? y[oe + 1].el : $;
            tr[I] === 0 ? p(null, ye, T, Za, O, P, F, D, N) : pe && (mt < 0 || I !== Ga[mt] ? Jt(ye, T, Za, 2) : mt--);
          }
        }
      },
      Jt = (v, y, T, $, O = null) => {
        const { el: P, type: F, transition: D, children: N, shapeFlag: I } = v;
        if (I & 6) {
          Jt(v.component.subTree, y, T, $);
          return;
        }
        if (I & 128) {
          v.suspense.move(y, T, $);
          return;
        }
        if (I & 64) {
          F.move(v, y, T, Q);
          return;
        }
        if (F === ut) {
          r(P, y, T);
          for (let K = 0; K < N.length; K++) Jt(N[K], y, T, $);
          r(v.anchor, y, T);
          return;
        }
        if (F === ms) {
          x(v, y, T);
          return;
        }
        if ($ !== 2 && I & 1 && D)
          if ($ === 0) D.beforeEnter(P), r(P, y, T), se(() => D.enter(P), O);
          else {
            const { leave: K, delayLeave: Y, afterLeave: ot } = D,
              ft = () => r(P, y, T),
              St = () => {
                K(P, () => {
                  ft(), ot && ot();
                });
              };
            Y ? Y(P, ft, St) : St();
          }
        else r(P, y, T);
      },
      _t = (v, y, T, $ = !1, O = !1) => {
        const {
          type: P,
          props: F,
          ref: D,
          children: N,
          dynamicChildren: I,
          shapeFlag: nt,
          patchFlag: K,
          dirs: Y,
          cacheIndex: ot,
        } = v;
        if (
          (K === -2 && (O = !1),
          D != null && di(D, null, T, v, !0),
          ot != null && (y.renderCache[ot] = void 0),
          nt & 256)
        ) {
          y.ctx.deactivate(v);
          return;
        }
        const ft = nt & 1 && Y,
          St = !Fn(v);
        let mt;
        if ((St && (mt = F && F.onVnodeBeforeUnmount) && be(mt, y, v), nt & 6)) $n(v.component, T, $);
        else {
          if (nt & 128) {
            v.suspense.unmount(T, $);
            return;
          }
          ft && cn(v, null, y, "beforeUnmount"),
            nt & 64
              ? v.type.remove(v, y, T, Q, $)
              : I && !I.hasOnce && (P !== ut || (K > 0 && K & 64))
                ? le(I, y, T, !1, !0)
                : ((P === ut && K & 384) || (!O && nt & 16)) && le(N, y, T),
            $ && Kt(v);
        }
        ((St && (mt = F && F.onVnodeUnmounted)) || ft) &&
          se(() => {
            mt && be(mt, y, v), ft && cn(v, null, y, "unmounted");
          }, T);
      },
      Kt = (v) => {
        const { type: y, el: T, anchor: $, transition: O } = v;
        if (y === ut) {
          $e(T, $);
          return;
        }
        if (y === ms) {
          k(v);
          return;
        }
        const P = () => {
          o(T), O && !O.persisted && O.afterLeave && O.afterLeave();
        };
        if (v.shapeFlag & 1 && O && !O.persisted) {
          const { leave: F, delayLeave: D } = O,
            N = () => F(T, P);
          D ? D(v.el, P, N) : N();
        } else P();
      },
      $e = (v, y) => {
        let T;
        for (; v !== y; ) (T = f(v)), o(v), (v = T);
        o(y);
      },
      $n = (v, y, T) => {
        const { bum: $, scope: O, job: P, subTree: F, um: D, m: N, a: I } = v;
        ul(N),
          ul(I),
          $ && oo($),
          O.stop(),
          P && ((P.flags |= 8), _t(F, v, y, T)),
          D && se(D, y),
          se(() => {
            v.isUnmounted = !0;
          }, y),
          y &&
            y.pendingBranch &&
            !y.isUnmounted &&
            v.asyncDep &&
            !v.asyncResolved &&
            v.suspenseId === y.pendingId &&
            (y.deps--, y.deps === 0 && y.resolve());
      },
      le = (v, y, T, $ = !1, O = !1, P = 0) => {
        for (let F = P; F < v.length; F++) _t(v[F], y, T, $, O);
      },
      C = (v) => {
        if (v.shapeFlag & 6) return C(v.component.subTree);
        if (v.shapeFlag & 128) return v.suspense.next();
        const y = f(v.anchor || v.el),
          T = y && y[Mg];
        return T ? f(T) : y;
      };
    let G = !1;
    const B = (v, y, T) => {
        v == null ? y._vnode && _t(y._vnode, null, null, !0) : p(y._vnode || null, v, y, null, null, null, T),
          (y._vnode = v),
          G || ((G = !0), ol(), ch(), (G = !1));
      },
      Q = { p, um: _t, m: Jt, r: Kt, mt: J, mc: V, pc: it, pbc: A, n: C, o: t };
    let gt, It;
    return { render: B, hydrate: gt, createApp: om(B, gt) };
  }
  function ps({ type: t, props: e }, n) {
    return (n === "svg" && t === "foreignObject") ||
      (n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html"))
      ? void 0
      : n;
  }
  function un({ effect: t, job: e }, n) {
    n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
  }
  function pm(t, e) {
    return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
  }
  function Rh(t, e, n = !1) {
    const r = t.children,
      o = e.children;
    if (tt(r) && tt(o))
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        let a = o[s];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = o[s] = Ze(o[s])), (a.el = i.el)),
          !n && a.patchFlag !== -2 && Rh(i, a)),
          a.type === Uo && (a.el = i.el);
      }
  }
  function gm(t) {
    const e = t.slice(),
      n = [0];
    let r, o, s, i, a;
    const l = t.length;
    for (r = 0; r < l; r++) {
      const c = t[r];
      if (c !== 0) {
        if (((o = n[n.length - 1]), t[o] < c)) {
          (e[r] = o), n.push(r);
          continue;
        }
        for (s = 0, i = n.length - 1; s < i; ) (a = (s + i) >> 1), t[n[a]] < c ? (s = a + 1) : (i = a);
        c < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), (n[s] = r));
      }
    }
    for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = e[i]);
    return n;
  }
  function jh(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : jh(e);
  }
  function ul(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const mm = Symbol.for("v-scx"),
    vm = () => he(mm);
  function $h(t, e) {
    return Fo(t, null, e);
  }
  function ym(t, e) {
    return Fo(t, null, { flush: "sync" });
  }
  function Se(t, e, n) {
    return Fo(t, e, n);
  }
  function Fo(t, e, n = dt) {
    const { immediate: r, deep: o, flush: s, once: i } = n,
      a = Ut({}, n);
    let l;
    if (Vo)
      if (s === "sync") {
        const f = vm();
        l = f.__watcherHandles || (f.__watcherHandles = []);
      } else if (!e || r) a.once = !0;
      else {
        const f = () => {};
        return (f.stop = ke), (f.resume = ke), (f.pause = ke), f;
      }
    const c = Bt;
    a.call = (f, h, m) => Ee(f, c, h, m);
    let u = !1;
    s === "post"
      ? (a.scheduler = (f) => {
          se(f, c && c.suspense);
        })
      : s !== "sync" &&
        ((u = !0),
        (a.scheduler = (f, h) => {
          h ? f() : na(f);
        })),
      (a.augmentJob = (f) => {
        e && (f.flags |= 4), u && ((f.flags |= 2), c && ((f.id = c.uid), (f.i = c)));
      });
    const d = jg(t, e, a);
    return l && l.push(d), d;
  }
  function bm(t, e, n) {
    const r = this.proxy,
      o = zt(t) ? (t.includes(".") ? Ph(r, t) : () => r[t]) : t.bind(r, r);
    let s;
    st(e) ? (s = e) : ((s = e.handler), (n = e));
    const i = Nr(this),
      a = Fo(o, s.bind(r), n);
    return i(), a;
  }
  function Ph(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  function Ih(t, e, n = dt) {
    const r = ca(),
      o = ae(e),
      s = en(e),
      i = Mh(t, e),
      a = Sg((l, c) => {
        let u,
          d = dt,
          f;
        return (
          ym(() => {
            const h = t[e];
            ee(u, h) && ((u = h), c());
          }),
          {
            get() {
              return l(), n.get ? n.get(u) : u;
            },
            set(h) {
              const m = n.set ? n.set(h) : h;
              if (!ee(m, u) && !(d !== dt && ee(h, d))) return;
              const p = r.vnode.props;
              (p &&
                (e in p || o in p || s in p) &&
                (`onUpdate:${e}` in p || `onUpdate:${o}` in p || `onUpdate:${s}` in p)) ||
                ((u = h), c()),
                r.emit(`update:${e}`, m),
                ee(h, m) && ee(h, d) && !ee(m, f) && c(),
                (d = h),
                (f = m);
            },
          }
        );
      });
    return (
      (a[Symbol.iterator] = () => {
        let l = 0;
        return {
          next() {
            return l < 2 ? { value: l++ ? i || dt : a, done: !1 } : { done: !0 };
          },
        };
      }),
      a
    );
  }
  const Mh = (t, e) =>
    e === "modelValue" || e === "model-value"
      ? t.modelModifiers
      : t[`${e}Modifiers`] || t[`${ae(e)}Modifiers`] || t[`${en(e)}Modifiers`];
  function _m(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || dt;
    let o = n;
    const s = e.startsWith("update:"),
      i = s && Mh(r, e.slice(7));
    i && (i.trim && (o = n.map((u) => (zt(u) ? u.trim() : u))), i.number && (o = n.map(qp)));
    let a,
      l = r[(a = hr(e))] || r[(a = hr(ae(e)))];
    !l && s && (l = r[(a = hr(en(e)))]), l && Ee(l, t, 6, o);
    const c = r[a + "Once"];
    if (c) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[a]) return;
      (t.emitted[a] = !0), Ee(c, t, 6, o);
    }
  }
  function Lh(t, e, n = !1) {
    const r = e.emitsCache,
      o = r.get(t);
    if (o !== void 0) return o;
    const s = t.emits;
    let i = {},
      a = !1;
    if (!st(t)) {
      const l = (c) => {
        const u = Lh(c, e, !0);
        u && ((a = !0), Ut(i, u));
      };
      !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
    }
    return !s && !a
      ? (Et(t) && r.set(t, null), null)
      : (tt(s) ? s.forEach((l) => (i[l] = null)) : Ut(i, s), Et(t) && r.set(t, i), i);
  }
  function Bo(t, e) {
    return !t || !Co(e)
      ? !1
      : ((e = e.slice(2).replace(/Once$/, "")), pt(t, e[0].toLowerCase() + e.slice(1)) || pt(t, en(e)) || pt(t, e));
  }
  function gs(t) {
    const {
        type: e,
        vnode: n,
        proxy: r,
        withProxy: o,
        propsOptions: [s],
        slots: i,
        attrs: a,
        emit: l,
        render: c,
        renderCache: u,
        props: d,
        data: f,
        setupState: h,
        ctx: m,
        inheritAttrs: p,
      } = t,
      b = go(t);
    let w, _;
    try {
      if (n.shapeFlag & 4) {
        const k = o || r,
          E = k;
        (w = xe(c.call(E, k, u, d, h, f, m))), (_ = a);
      } else {
        const k = e;
        (w = xe(k.length > 1 ? k(d, { attrs: a, slots: i, emit: l }) : k(d, null))), (_ = e.props ? a : wm(a));
      }
    } catch (k) {
      (gr.length = 0), zo(k, t, 1), (w = at(Xe));
    }
    let x = w;
    if (_ && p !== !1) {
      const k = Object.keys(_),
        { shapeFlag: E } = x;
      k.length && E & 7 && (s && k.some(Ui) && (_ = xm(_, s)), (x = Un(x, _, !1, !0)));
    }
    return (
      n.dirs && ((x = Un(x, null, !1, !0)), (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
      n.transition && oa(x, n.transition),
      (w = x),
      go(b),
      w
    );
  }
  const wm = (t) => {
      let e;
      for (const n in t) (n === "class" || n === "style" || Co(n)) && ((e || (e = {}))[n] = t[n]);
      return e;
    },
    xm = (t, e) => {
      const n = {};
      for (const r in t) (!Ui(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
      return n;
    };
  function km(t, e, n) {
    const { props: r, children: o, component: s } = t,
      { props: i, children: a, patchFlag: l } = e,
      c = s.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? fl(r, i, c) : !!i;
      if (l & 8) {
        const u = e.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          const f = u[d];
          if (i[f] !== r[f] && !Bo(c, f)) return !0;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? fl(r, i, c) : !0) : !!i;
    return !1;
  }
  function fl(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (e[s] !== t[s] && !Bo(n, s)) return !0;
    }
    return !1;
  }
  function Sm({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
        ((t = e.vnode).el = n), (e = e.parent);
      else break;
    }
  }
  const zh = (t) => t.__isSuspense;
  function Am(t, e) {
    e && e.pendingBranch ? (tt(t) ? e.effects.push(...t) : e.effects.push(t)) : Ig(t);
  }
  const ut = Symbol.for("v-fgt"),
    Uo = Symbol.for("v-txt"),
    Xe = Symbol.for("v-cmt"),
    ms = Symbol.for("v-stc"),
    gr = [];
  let ie = null;
  function M(t = !1) {
    gr.push((ie = t ? null : []));
  }
  function Tm() {
    gr.pop(), (ie = gr[gr.length - 1] || null);
  }
  let Or = 1;
  function hl(t) {
    (Or += t), t < 0 && ie && (ie.hasOnce = !0);
  }
  function Nh(t) {
    return (t.dynamicChildren = Or > 0 ? ie || zn : null), Tm(), Or > 0 && ie && ie.push(t), t;
  }
  function L(t, e, n, r, o, s) {
    return Nh(j(t, e, n, r, o, s, !0));
  }
  function Bn(t, e, n, r, o) {
    return Nh(at(t, e, n, r, o, !0));
  }
  function yo(t) {
    return t ? t.__v_isVNode === !0 : !1;
  }
  function nr(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const Dh = ({ key: t }) => t ?? null,
    io = ({ ref: t, ref_key: e, ref_for: n }) => (
      typeof t == "number" && (t = "" + t),
      t != null ? (zt(t) || Mt(t) || st(t) ? { i: Ft, r: t, k: e, f: !!n } : t) : null
    );
  function j(t, e = null, n = null, r = 0, o = null, s = t === ut ? 0 : 1, i = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t,
      props: e,
      key: e && Dh(e),
      ref: e && io(e),
      scopeId: fh,
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
      shapeFlag: s,
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Ft,
    };
    return (
      a ? (la(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= zt(n) ? 8 : 16),
      Or > 0 && !i && ie && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && ie.push(l),
      l
    );
  }
  const at = Em;
  function Em(t, e = null, n = null, r = 0, o = null, s = !1) {
    if (((!t || t === Gg) && (t = Xe), yo(t))) {
      const a = Un(t, e, !0);
      return (
        n && la(a, n),
        Or > 0 && !s && ie && (a.shapeFlag & 6 ? (ie[ie.indexOf(t)] = a) : ie.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((Nm(t) && (t = t.__vccOpts), e)) {
      e = Om(e);
      let { class: a, style: l } = e;
      a && !zt(a) && (e.class = Lt(a)), Et(l) && (Yi(l) && !tt(l) && (l = Ut({}, l)), (e.style = nn(l)));
    }
    const i = zt(t) ? 1 : zh(t) ? 128 : Lg(t) ? 64 : Et(t) ? 4 : st(t) ? 2 : 0;
    return j(t, e, n, r, o, i, s, !0);
  }
  function Om(t) {
    return t ? (Yi(t) || kh(t) ? Ut({}, t) : t) : null;
  }
  function Un(t, e, n = !1, r = !1) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = t,
      c = e ? Cm(o || {}, e) : o,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: c,
        key: c && Dh(c),
        ref: e && e.ref ? (n && s ? (tt(s) ? s.concat(io(e)) : [s, io(e)]) : io(e)) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ut ? (i === -1 ? 16 : i | 16) : i,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: l,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Un(t.ssContent),
        ssFallback: t.ssFallback && Un(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce,
      };
    return l && r && oa(u, l.clone(u)), u;
  }
  function Vn(t = " ", e = 0) {
    return at(Uo, null, t, e);
  }
  function Pt(t = "", e = !1) {
    return e ? (M(), Bn(Xe, null, t)) : at(Xe, null, t);
  }
  function xe(t) {
    return t == null || typeof t == "boolean"
      ? at(Xe)
      : tt(t)
        ? at(ut, null, t.slice())
        : typeof t == "object"
          ? Ze(t)
          : at(Uo, null, String(t));
  }
  function Ze(t) {
    return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Un(t);
  }
  function la(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (tt(e)) n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const o = e.default;
        o && (o._c && (o._d = !1), la(t, o()), o._c && (o._d = !0));
        return;
      } else {
        n = 32;
        const o = e._;
        !o && !kh(e)
          ? (e._ctx = Ft)
          : o === 3 && Ft && (Ft.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
      }
    else
      st(e)
        ? ((e = { default: e, _ctx: Ft }), (n = 32))
        : ((e = String(e)), r & 64 ? ((n = 16), (e = [Vn(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
  }
  function Cm(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const o in r)
        if (o === "class") e.class !== r.class && (e.class = Lt([e.class, r.class]));
        else if (o === "style") e.style = nn([e.style, r.style]);
        else if (Co(o)) {
          const s = e[o],
            i = r[o];
          i && s !== i && !(tt(s) && s.includes(i)) && (e[o] = s ? [].concat(s, i) : i);
        } else o !== "" && (e[o] = r[o]);
    }
    return e;
  }
  function be(t, e, n, r = null) {
    Ee(t, e, 7, [n, r]);
  }
  const Rm = _h();
  let jm = 0;
  function $m(t, e, n) {
    const r = t.type,
      o = (e ? e.appContext : t.appContext) || Rm,
      s = {
        uid: jm++,
        vnode: t,
        type: r,
        parent: e,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Df(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(o.provides),
        ids: e ? e.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ah(r, o),
        emitsOptions: Lh(r, o),
        emit: null,
        emitted: null,
        propsDefaults: dt,
        inheritAttrs: r.inheritAttrs,
        ctx: dt,
        data: dt,
        props: dt,
        attrs: dt,
        slots: dt,
        refs: dt,
        setupState: dt,
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
    return (s.ctx = { _: s }), (s.root = e ? e.root : s), (s.emit = _m.bind(null, s)), t.ce && t.ce(s), s;
  }
  let Bt = null;
  const ca = () => Bt || Ft;
  let bo, yi;
  {
    const t = If(),
      e = (n, r) => {
        let o;
        return (
          (o = t[n]) || (o = t[n] = []),
          o.push(r),
          (s) => {
            o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
          }
        );
      };
    (bo = e("__VUE_INSTANCE_SETTERS__", (n) => (Bt = n))), (yi = e("__VUE_SSR_SETTERS__", (n) => (Vo = n)));
  }
  const Nr = (t) => {
      const e = Bt;
      return (
        bo(t),
        t.scope.on(),
        () => {
          t.scope.off(), bo(e);
        }
      );
    },
    dl = () => {
      Bt && Bt.scope.off(), bo(null);
    };
  function Fh(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Vo = !1;
  function Pm(t, e = !1, n = !1) {
    e && yi(e);
    const { props: r, children: o } = t.vnode,
      s = Fh(t);
    im(t, r, s, e), um(t, o, n);
    const i = s ? Im(t, e) : void 0;
    return e && yi(!1), i;
  }
  function Im(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Jg));
    const { setup: r } = n;
    if (r) {
      const o = (t.setupContext = r.length > 1 ? Lm(t) : null),
        s = Nr(t);
      rn();
      const i = zr(r, t, 0, [t.props, o]);
      if ((on(), s(), Rf(i))) {
        if ((Fn(t) || hh(t), i.then(dl, dl), e))
          return i
            .then((a) => {
              pl(t, a, e);
            })
            .catch((a) => {
              zo(a, t, 0);
            });
        t.asyncDep = i;
      } else pl(t, i, e);
    } else Bh(t, e);
  }
  function pl(t, e, n) {
    st(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : Et(e) && (t.setupState = ih(e)), Bh(t, n);
  }
  let gl;
  function Bh(t, e, n) {
    const r = t.type;
    if (!t.render) {
      if (!e && gl && !r.render) {
        const o = r.template || ia(t).template;
        if (o) {
          const { isCustomElement: s, compilerOptions: i } = t.appContext.config,
            { delimiters: a, compilerOptions: l } = r,
            c = Ut(Ut({ isCustomElement: s, delimiters: a }, i), l);
          r.render = gl(o, c);
        }
      }
      t.render = r.render || ke;
    }
    {
      const o = Nr(t);
      rn();
      try {
        Yg(t);
      } finally {
        on(), o();
      }
    }
  }
  const Mm = {
    get(t, e) {
      return Zt(t, "get", ""), t[e];
    },
  };
  function Lm(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return { attrs: new Proxy(t.attrs, Mm), slots: t.slots, emit: t.emit, expose: e };
  }
  function Ho(t) {
    return t.exposed
      ? t.exposeProxy ||
          (t.exposeProxy = new Proxy(ih(Xi(t.exposed)), {
            get(e, n) {
              if (n in e) return e[n];
              if (n in pr) return pr[n](t);
            },
            has(e, n) {
              return n in e || n in pr;
            },
          }))
      : t.proxy;
  }
  function zm(t, e = !0) {
    return st(t) ? t.displayName || t.name : t.name || (e && t.__name);
  }
  function Nm(t) {
    return st(t) && "__vccOpts" in t;
  }
  const rt = (t, e) => Cg(t, e, Vo);
  function Uh(t, e, n) {
    const r = arguments.length;
    return r === 2
      ? Et(e) && !tt(e)
        ? yo(e)
          ? at(t, null, [e])
          : at(t, e)
        : at(t, null, e)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && yo(n) && (n = [n]), at(t, e, n));
  }
  const Dm = "3.5.6";
  /**
   * @vue/runtime-dom v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let bi;
  const ml = typeof window < "u" && window.trustedTypes;
  if (ml)
    try {
      bi = ml.createPolicy("vue", { createHTML: (t) => t });
    } catch {}
  const Vh = bi ? (t) => bi.createHTML(t) : (t) => t,
    Fm = "http://www.w3.org/2000/svg",
    Bm = "http://www.w3.org/1998/Math/MathML",
    Le = typeof document < "u" ? document : null,
    vl = Le && Le.createElement("template"),
    Um = {
      insert: (t, e, n) => {
        e.insertBefore(t, n || null);
      },
      remove: (t) => {
        const e = t.parentNode;
        e && e.removeChild(t);
      },
      createElement: (t, e, n, r) => {
        const o =
          e === "svg"
            ? Le.createElementNS(Fm, t)
            : e === "mathml"
              ? Le.createElementNS(Bm, t)
              : n
                ? Le.createElement(t, { is: n })
                : Le.createElement(t);
        return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
      },
      createText: (t) => Le.createTextNode(t),
      createComment: (t) => Le.createComment(t),
      setText: (t, e) => {
        t.nodeValue = e;
      },
      setElementText: (t, e) => {
        t.textContent = e;
      },
      parentNode: (t) => t.parentNode,
      nextSibling: (t) => t.nextSibling,
      querySelector: (t) => Le.querySelector(t),
      setScopeId(t, e) {
        t.setAttribute(e, "");
      },
      insertStaticContent(t, e, n, r, o, s) {
        const i = n ? n.previousSibling : e.lastChild;
        if (o && (o === s || o.nextSibling))
          for (; e.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); );
        else {
          vl.innerHTML = Vh(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
          const a = vl.content;
          if (r === "svg" || r === "mathml") {
            const l = a.firstChild;
            for (; l.firstChild; ) a.appendChild(l.firstChild);
            a.removeChild(l);
          }
          e.insertBefore(a, n);
        }
        return [i ? i.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
      },
    },
    Vm = Symbol("_vtc");
  function Hm(t, e, n) {
    const r = t[Vm];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
      e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : (t.className = e);
  }
  const yl = Symbol("_vod"),
    qm = Symbol("_vsh"),
    Km = Symbol(""),
    Wm = /(^|;)\s*display\s*:/;
  function Gm(t, e, n) {
    const r = t.style,
      o = zt(n);
    let s = !1;
    if (n && !o) {
      if (e)
        if (zt(e))
          for (const i of e.split(";")) {
            const a = i.slice(0, i.indexOf(":")).trim();
            n[a] == null && ao(r, a, "");
          }
        else for (const i in e) n[i] == null && ao(r, i, "");
      for (const i in n) i === "display" && (s = !0), ao(r, i, n[i]);
    } else if (o) {
      if (e !== n) {
        const i = r[Km];
        i && (n += ";" + i), (r.cssText = n), (s = Wm.test(n));
      }
    } else e && t.removeAttribute("style");
    yl in t && ((t[yl] = s ? r.display : ""), t[qm] && (r.display = "none"));
  }
  const bl = /\s*!important$/;
  function ao(t, e, n) {
    if (tt(n)) n.forEach((r) => ao(t, e, r));
    else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
    else {
      const r = Zm(t, e);
      bl.test(n) ? t.setProperty(en(r), n.replace(bl, ""), "important") : (t[r] = n);
    }
  }
  const _l = ["Webkit", "Moz", "ms"],
    vs = {};
  function Zm(t, e) {
    const n = vs[e];
    if (n) return n;
    let r = ae(e);
    if (r !== "filter" && r in t) return (vs[e] = r);
    r = $o(r);
    for (let o = 0; o < _l.length; o++) {
      const s = _l[o] + r;
      if (s in t) return (vs[e] = s);
    }
    return e;
  }
  const wl = "http://www.w3.org/1999/xlink";
  function xl(t, e, n, r, o, s = Qp(e)) {
    r && e.startsWith("xlink:")
      ? n == null
        ? t.removeAttributeNS(wl, e.slice(6, e.length))
        : t.setAttributeNS(wl, e, n)
      : n == null || (s && !Mf(n))
        ? t.removeAttribute(e)
        : t.setAttribute(e, s ? "" : Te(n) ? String(n) : n);
  }
  function Jm(t, e, n, r) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? Vh(n) : n);
      return;
    }
    const o = t.tagName;
    if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const i = o === "OPTION" ? t.getAttribute("value") || "" : t.value,
        a = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
      (i !== a || !("_value" in t)) && (t.value = a), n == null && t.removeAttribute(e), (t._value = n);
      return;
    }
    let s = !1;
    if (n === "" || n == null) {
      const i = typeof t[e];
      i === "boolean"
        ? (n = Mf(n))
        : n == null && i === "string"
          ? ((n = ""), (s = !0))
          : i === "number" && ((n = 0), (s = !0));
    }
    try {
      t[e] = n;
    } catch {}
    s && t.removeAttribute(e);
  }
  function Hh(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function Qm(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const kl = Symbol("_vei");
  function Ym(t, e, n, r, o = null) {
    const s = t[kl] || (t[kl] = {}),
      i = s[e];
    if (r && i) i.value = r;
    else {
      const [a, l] = Xm(e);
      if (r) {
        const c = (s[e] = nv(r, o));
        Hh(t, a, c, l);
      } else i && (Qm(t, a, i, l), (s[e] = void 0));
    }
  }
  const Sl = /(?:Once|Passive|Capture)$/;
  function Xm(t) {
    let e;
    if (Sl.test(t)) {
      e = {};
      let r;
      for (; (r = t.match(Sl)); ) (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
    }
    return [t[2] === ":" ? t.slice(3) : en(t.slice(2)), e];
  }
  let ys = 0;
  const tv = Promise.resolve(),
    ev = () => ys || (tv.then(() => (ys = 0)), (ys = Date.now()));
  function nv(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      Ee(rv(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = ev()), n;
  }
  function rv(t, e) {
    if (tt(e)) {
      const n = t.stopImmediatePropagation;
      return (
        (t.stopImmediatePropagation = () => {
          n.call(t), (t._stopped = !0);
        }),
        e.map((r) => (o) => !o._stopped && r && r(o))
      );
    } else return e;
  }
  const Al = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    ov = (t, e, n, r, o, s) => {
      const i = o === "svg";
      e === "class"
        ? Hm(t, r, i)
        : e === "style"
          ? Gm(t, n, r)
          : Co(e)
            ? Ui(e) || Ym(t, e, n, r, s)
            : (e[0] === "." ? ((e = e.slice(1)), !0) : e[0] === "^" ? ((e = e.slice(1)), !1) : sv(t, e, r, i))
              ? (Jm(t, e, r),
                !t.tagName.includes("-") &&
                  (e === "value" || e === "checked" || e === "selected") &&
                  xl(t, e, r, i, s, e !== "value"))
              : (e === "true-value" ? (t._trueValue = r) : e === "false-value" && (t._falseValue = r), xl(t, e, r, i));
    };
  function sv(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || (e in t && Al(e) && st(n)));
    if (
      e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA")
    )
      return !1;
    if (e === "width" || e === "height") {
      const o = t.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1;
    }
    return Al(e) && zt(n) ? !1 : !!(e in t || (t._isVueCE && (/[A-Z]/.test(e) || !zt(n))));
  }
  const Tl = (t) => {
      const e = t.props["onUpdate:modelValue"] || !1;
      return tt(e) ? (n) => oo(e, n) : e;
    },
    bs = Symbol("_assign"),
    ua = {
      deep: !0,
      created(t, e, n) {
        (t[bs] = Tl(n)),
          Hh(t, "change", () => {
            const r = t._modelValue,
              o = iv(t),
              s = t.checked,
              i = t[bs];
            if (tt(r)) {
              const a = Lf(r, o),
                l = a !== -1;
              if (s && !l) i(r.concat(o));
              else if (!s && l) {
                const c = [...r];
                c.splice(a, 1), i(c);
              }
            } else if (Ro(r)) {
              const a = new Set(r);
              s ? a.add(o) : a.delete(o), i(a);
            } else i(qh(t, s));
          });
      },
      mounted: El,
      beforeUpdate(t, e, n) {
        (t[bs] = Tl(n)), El(t, e, n);
      },
    };
  function El(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let o;
    tt(e) ? (o = Lf(e, r.props.value) > -1) : Ro(e) ? (o = e.has(r.props.value)) : (o = Po(e, qh(t, !0))),
      t.checked !== o && (t.checked = o);
  }
  function iv(t) {
    return "_value" in t ? t._value : t.value;
  }
  function qh(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const av = ["ctrl", "shift", "alt", "meta"],
    lv = {
      stop: (t) => t.stopPropagation(),
      prevent: (t) => t.preventDefault(),
      self: (t) => t.target !== t.currentTarget,
      ctrl: (t) => !t.ctrlKey,
      shift: (t) => !t.shiftKey,
      alt: (t) => !t.altKey,
      meta: (t) => !t.metaKey,
      left: (t) => "button" in t && t.button !== 0,
      middle: (t) => "button" in t && t.button !== 1,
      right: (t) => "button" in t && t.button !== 2,
      exact: (t, e) => av.some((n) => t[`${n}Key`] && !e.includes(n)),
    },
    Gr = (t, e) => {
      const n = t._withMods || (t._withMods = {}),
        r = e.join(".");
      return (
        n[r] ||
        (n[r] = (o, ...s) => {
          for (let i = 0; i < e.length; i++) {
            const a = lv[e[i]];
            if (a && a(o, e)) return;
          }
          return t(o, ...s);
        })
      );
    },
    cv = Ut({ patchProp: ov }, Um);
  let Ol;
  function uv() {
    return Ol || (Ol = hm(cv));
  }
  const fv = (...t) => {
    const e = uv().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (r) => {
        const o = dv(r);
        if (!o) return;
        const s = e._component;
        !st(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
        const i = n(o, !1, hv(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
      }),
      e
    );
  };
  function hv(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function dv(t) {
    return zt(t) ? document.querySelector(t) : t;
  }
  var pv = !1;
  /*!
   * pinia v2.2.2
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ let Kh;
  const qo = (t) => (Kh = t),
    Wh = Symbol();
  function _i(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Object]" &&
      typeof t.toJSON != "function"
    );
  }
  var mr;
  (function (t) {
    (t.direct = "direct"), (t.patchObject = "patch object"), (t.patchFunction = "patch function");
  })(mr || (mr = {}));
  function gv() {
    const t = Ff(!0),
      e = t.run(() => ct({}));
    let n = [],
      r = [];
    const o = Xi({
      install(s) {
        qo(o),
          (o._a = s),
          s.provide(Wh, o),
          (s.config.globalProperties.$pinia = o),
          r.forEach((i) => n.push(i)),
          (r = []);
      },
      use(s) {
        return !this._a && !pv ? r.push(s) : n.push(s), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e,
    });
    return o;
  }
  const Gh = () => {};
  function Cl(t, e, n, r = Gh) {
    t.push(e);
    const o = () => {
      const s = t.indexOf(e);
      s > -1 && (t.splice(s, 1), r());
    };
    return !n && qi() && Bf(o), o;
  }
  function In(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const mv = (t) => t(),
    Rl = Symbol(),
    _s = Symbol();
  function wi(t, e) {
    t instanceof Map && e instanceof Map
      ? e.forEach((n, r) => t.set(r, n))
      : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n],
        o = t[n];
      _i(o) && _i(r) && t.hasOwnProperty(n) && !Mt(r) && !Qe(r) ? (t[n] = wi(o, r)) : (t[n] = r);
    }
    return t;
  }
  const vv = Symbol();
  function yv(t) {
    return !_i(t) || !t.hasOwnProperty(vv);
  }
  const { assign: We } = Object;
  function bv(t) {
    return !!(Mt(t) && t.effect);
  }
  function _v(t, e, n, r) {
    const { state: o, actions: s, getters: i } = e,
      a = n.state.value[t];
    let l;
    function c() {
      a || (n.state.value[t] = o ? o() : {});
      const u = Ag(n.state.value[t]);
      return We(
        u,
        s,
        Object.keys(i || {}).reduce(
          (d, f) => (
            (d[f] = Xi(
              rt(() => {
                qo(n);
                const h = n._s.get(t);
                return i[f].call(h, h);
              }),
            )),
            d
          ),
          {},
        ),
      );
    }
    return (l = Zh(t, c, e, n, r, !0)), l;
  }
  function Zh(t, e, n = {}, r, o, s) {
    let i;
    const a = We({ actions: {} }, n),
      l = { deep: !0 };
    let c,
      u,
      d = [],
      f = [],
      h;
    const m = r.state.value[t];
    !s && !m && (r.state.value[t] = {}), ct({});
    let p;
    function b(V) {
      let X;
      (c = u = !1),
        typeof V == "function"
          ? (V(r.state.value[t]), (X = { type: mr.patchFunction, storeId: t, events: h }))
          : (wi(r.state.value[t], V), (X = { type: mr.patchObject, payload: V, storeId: t, events: h }));
      const A = (p = Symbol());
      No().then(() => {
        p === A && (c = !0);
      }),
        (u = !0),
        In(d, X, r.state.value[t]);
    }
    const w = s
      ? function () {
          const { state: X } = n,
            A = X ? X() : {};
          this.$patch((g) => {
            We(g, A);
          });
        }
      : Gh;
    function _() {
      i.stop(), (d = []), (f = []), r._s.delete(t);
    }
    const x = (V, X = "") => {
        if (Rl in V) return (V[_s] = X), V;
        const A = function () {
          qo(r);
          const g = Array.from(arguments),
            S = [],
            R = [];
          function J(H) {
            S.push(H);
          }
          function et(H) {
            R.push(H);
          }
          In(f, { args: g, name: A[_s], store: E, after: J, onError: et });
          let q;
          try {
            q = V.apply(this && this.$id === t ? this : E, g);
          } catch (H) {
            throw (In(R, H), H);
          }
          return q instanceof Promise
            ? q.then((H) => (In(S, H), H)).catch((H) => (In(R, H), Promise.reject(H)))
            : (In(S, q), q);
        };
        return (A[Rl] = !0), (A[_s] = X), A;
      },
      k = {
        _p: r,
        $id: t,
        $onAction: Cl.bind(null, f),
        $patch: b,
        $reset: w,
        $subscribe(V, X = {}) {
          const A = Cl(d, V, X.detached, () => g()),
            g = i.run(() =>
              Se(
                () => r.state.value[t],
                (S) => {
                  (X.flush === "sync" ? u : c) && V({ storeId: t, type: mr.direct, events: h }, S);
                },
                We({}, l, X),
              ),
            );
          return A;
        },
        $dispose: _,
      },
      E = Gn(k);
    r._s.set(t, E);
    const W = ((r._a && r._a.runWithContext) || mv)(() => r._e.run(() => (i = Ff()).run(() => e({ action: x }))));
    for (const V in W) {
      const X = W[V];
      if ((Mt(X) && !bv(X)) || Qe(X))
        s || (m && yv(X) && (Mt(X) ? (X.value = m[V]) : wi(X, m[V])), (r.state.value[t][V] = X));
      else if (typeof X == "function") {
        const A = x(X, V);
        (W[V] = A), (a.actions[V] = X);
      }
    }
    return (
      We(E, W),
      We(ht(E), W),
      Object.defineProperty(E, "$state", {
        get: () => r.state.value[t],
        set: (V) => {
          b((X) => {
            We(X, V);
          });
        },
      }),
      r._p.forEach((V) => {
        We(
          E,
          i.run(() => V({ store: E, app: r._a, pinia: r, options: a })),
        );
      }),
      m && s && n.hydrate && n.hydrate(E.$state, m),
      (c = !0),
      (u = !0),
      E
    );
  }
  function Ko(t, e, n) {
    let r, o;
    const s = typeof e == "function";
    typeof t == "string" ? ((r = t), (o = s ? n : e)) : ((o = t), (r = t.id));
    function i(a, l) {
      const c = sm();
      return (
        (a = a || (c ? he(Wh, null) : null)),
        a && qo(a),
        (a = Kh),
        a._s.has(r) || (s ? Zh(r, e, o, a) : _v(r, o, a)),
        a._s.get(r)
      );
    }
    return (i.$id = r), i;
  }
  /*!
   * vue-router v4.4.5
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ const Ln = typeof document < "u";
  function Jh(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function wv(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || (t.default && Jh(t.default));
  }
  const yt = Object.assign;
  function ws(t, e) {
    const n = {};
    for (const r in e) {
      const o = e[r];
      n[r] = me(o) ? o.map(t) : t(o);
    }
    return n;
  }
  const vr = () => {},
    me = Array.isArray,
    Qh = /#/g,
    xv = /&/g,
    kv = /\//g,
    Sv = /=/g,
    Av = /\?/g,
    Yh = /\+/g,
    Tv = /%5B/g,
    Ev = /%5D/g,
    Xh = /%5E/g,
    Ov = /%60/g,
    td = /%7B/g,
    Cv = /%7C/g,
    ed = /%7D/g,
    Rv = /%20/g;
  function fa(t) {
    return encodeURI("" + t)
      .replace(Cv, "|")
      .replace(Tv, "[")
      .replace(Ev, "]");
  }
  function jv(t) {
    return fa(t).replace(td, "{").replace(ed, "}").replace(Xh, "^");
  }
  function xi(t) {
    return fa(t)
      .replace(Yh, "%2B")
      .replace(Rv, "+")
      .replace(Qh, "%23")
      .replace(xv, "%26")
      .replace(Ov, "`")
      .replace(td, "{")
      .replace(ed, "}")
      .replace(Xh, "^");
  }
  function $v(t) {
    return xi(t).replace(Sv, "%3D");
  }
  function Pv(t) {
    return fa(t).replace(Qh, "%23").replace(Av, "%3F");
  }
  function Iv(t) {
    return t == null ? "" : Pv(t).replace(kv, "%2F");
  }
  function Cr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {}
    return "" + t;
  }
  const Mv = /\/$/,
    Lv = (t) => t.replace(Mv, "");
  function xs(t, e, n = "/") {
    let r,
      o = {},
      s = "",
      i = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return (
      a < l && a >= 0 && (l = -1),
      l > -1 && ((r = e.slice(0, l)), (s = e.slice(l + 1, a > -1 ? a : e.length)), (o = t(s))),
      a > -1 && ((r = r || e.slice(0, a)), (i = e.slice(a, e.length))),
      (r = Fv(r ?? e, n)),
      { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: Cr(i) }
    );
  }
  function zv(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function jl(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function Nv(t, e, n) {
    const r = e.matched.length - 1,
      o = n.matched.length - 1;
    return (
      r > -1 &&
      r === o &&
      Hn(e.matched[r], n.matched[o]) &&
      nd(e.params, n.params) &&
      t(e.query) === t(n.query) &&
      e.hash === n.hash
    );
  }
  function Hn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function nd(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t) if (!Dv(t[n], e[n])) return !1;
    return !0;
  }
  function Dv(t, e) {
    return me(t) ? $l(t, e) : me(e) ? $l(e, t) : t === e;
  }
  function $l(t, e) {
    return me(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function Fv(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"),
      r = t.split("/"),
      o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1,
      i,
      a;
    for (i = 0; i < r.length; i++)
      if (((a = r[i]), a !== "."))
        if (a === "..") s > 1 && s--;
        else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
  }
  const Ke = {
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
  var Rr;
  (function (t) {
    (t.pop = "pop"), (t.push = "push");
  })(Rr || (Rr = {}));
  var yr;
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(yr || (yr = {}));
  function Bv(t) {
    if (!t)
      if (Ln) {
        const e = document.querySelector("base");
        (t = (e && e.getAttribute("href")) || "/"), (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
      } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Lv(t);
  }
  const Uv = /^[^#]+#/;
  function Vv(t, e) {
    return t.replace(Uv, "#") + e;
  }
  function Hv(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
      r = t.getBoundingClientRect();
    return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) };
  }
  const Wo = () => ({ left: window.scrollX, top: window.scrollY });
  function qv(t) {
    let e;
    if ("el" in t) {
      const n = t.el,
        r = typeof n == "string" && n.startsWith("#"),
        o = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!o) return;
      e = Hv(o, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(e)
      : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function Pl(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const ki = new Map();
  function Kv(t, e) {
    ki.set(t, e);
  }
  function Wv(t) {
    const e = ki.get(t);
    return ki.delete(t), e;
  }
  let Gv = () => location.protocol + "//" + location.host;
  function rd(t, e) {
    const { pathname: n, search: r, hash: o } = e,
      s = t.indexOf("#");
    if (s > -1) {
      let a = o.includes(t.slice(s)) ? t.slice(s).length : 1,
        l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), jl(l, "");
    }
    return jl(n, t) + r + o;
  }
  function Zv(t, e, n, r) {
    let o = [],
      s = [],
      i = null;
    const a = ({ state: f }) => {
      const h = rd(t, location),
        m = n.value,
        p = e.value;
      let b = 0;
      if (f) {
        if (((n.value = h), (e.value = f), i && i === m)) {
          i = null;
          return;
        }
        b = p ? f.position - p.position : 0;
      } else r(h);
      o.forEach((w) => {
        w(n.value, m, { delta: b, type: Rr.pop, direction: b ? (b > 0 ? yr.forward : yr.back) : yr.unknown });
      });
    };
    function l() {
      i = n.value;
    }
    function c(f) {
      o.push(f);
      const h = () => {
        const m = o.indexOf(f);
        m > -1 && o.splice(m, 1);
      };
      return s.push(h), h;
    }
    function u() {
      const { history: f } = window;
      f.state && f.replaceState(yt({}, f.state, { scroll: Wo() }), "");
    }
    function d() {
      for (const f of s) f();
      (s = []), window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
    }
    return (
      window.addEventListener("popstate", a),
      window.addEventListener("beforeunload", u, { passive: !0 }),
      { pauseListeners: l, listen: c, destroy: d }
    );
  }
  function Il(t, e, n, r = !1, o = !1) {
    return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: o ? Wo() : null };
  }
  function Jv(t) {
    const { history: e, location: n } = window,
      r = { value: rd(t, n) },
      o = { value: e.state };
    o.value ||
      s(
        r.value,
        { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function s(l, c, u) {
      const d = t.indexOf("#"),
        f = d > -1 ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l : Gv() + t + l;
      try {
        e[u ? "replaceState" : "pushState"](c, "", f), (o.value = c);
      } catch (h) {
        console.error(h), n[u ? "replace" : "assign"](f);
      }
    }
    function i(l, c) {
      const u = yt({}, e.state, Il(o.value.back, l, o.value.forward, !0), c, { position: o.value.position });
      s(l, u, !0), (r.value = l);
    }
    function a(l, c) {
      const u = yt({}, o.value, e.state, { forward: l, scroll: Wo() });
      s(u.current, u, !0);
      const d = yt({}, Il(r.value, l, null), { position: u.position + 1 }, c);
      s(l, d, !1), (r.value = l);
    }
    return { location: r, state: o, push: a, replace: i };
  }
  function Qv(t) {
    t = Bv(t);
    const e = Jv(t),
      n = Zv(t, e.state, e.location, e.replace);
    function r(s, i = !0) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = yt({ location: "", base: t, go: r, createHref: Vv.bind(null, t) }, e, n);
    return (
      Object.defineProperty(o, "location", { enumerable: !0, get: () => e.location.value }),
      Object.defineProperty(o, "state", { enumerable: !0, get: () => e.state.value }),
      o
    );
  }
  function Yv(t) {
    return typeof t == "string" || (t && typeof t == "object");
  }
  function od(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const sd = Symbol("");
  var Ml;
  (function (t) {
    (t[(t.aborted = 4)] = "aborted"), (t[(t.cancelled = 8)] = "cancelled"), (t[(t.duplicated = 16)] = "duplicated");
  })(Ml || (Ml = {}));
  function qn(t, e) {
    return yt(new Error(), { type: t, [sd]: !0 }, e);
  }
  function Ie(t, e) {
    return t instanceof Error && sd in t && (e == null || !!(t.type & e));
  }
  const Ll = "[^/]+?",
    Xv = { sensitive: !1, strict: !1, start: !0, end: !0 },
    ty = /[.+*?^${}()[\]/\\]/g;
  function ey(t, e) {
    const n = yt({}, Xv, e),
      r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of t) {
      const u = c.length ? [] : [90];
      n.strict && !c.length && (o += "/");
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        let h = 40 + (n.sensitive ? 0.25 : 0);
        if (f.type === 0) d || (o += "/"), (o += f.value.replace(ty, "\\$&")), (h += 40);
        else if (f.type === 1) {
          const { value: m, repeatable: p, optional: b, regexp: w } = f;
          s.push({ name: m, repeatable: p, optional: b });
          const _ = w || Ll;
          if (_ !== Ll) {
            h += 10;
            try {
              new RegExp(`(${_})`);
            } catch (k) {
              throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + k.message);
            }
          }
          let x = p ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          d || (x = b && c.length < 2 ? `(?:/${x})` : "/" + x),
            b && (x += "?"),
            (o += x),
            (h += 20),
            b && (h += -8),
            p && (h += -20),
            _ === ".*" && (h += -50);
        }
        u.push(h);
      }
      r.push(u);
    }
    if (n.strict && n.end) {
      const c = r.length - 1;
      r[c][r[c].length - 1] += 0.7000000000000001;
    }
    n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");
    function a(c) {
      const u = c.match(i),
        d = {};
      if (!u) return null;
      for (let f = 1; f < u.length; f++) {
        const h = u[f] || "",
          m = s[f - 1];
        d[m.name] = h && m.repeatable ? h.split("/") : h;
      }
      return d;
    }
    function l(c) {
      let u = "",
        d = !1;
      for (const f of t) {
        (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
        for (const h of f)
          if (h.type === 0) u += h.value;
          else if (h.type === 1) {
            const { value: m, repeatable: p, optional: b } = h,
              w = m in c ? c[m] : "";
            if (me(w) && !p)
              throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
            const _ = me(w) ? w.join("/") : w;
            if (!_)
              if (b) f.length < 2 && (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
              else throw new Error(`Missing required param "${m}"`);
            u += _;
          }
      }
      return u || "/";
    }
    return { re: i, score: r, keys: s, parse: a, stringify: l };
  }
  function ny(t, e) {
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
  function id(t, e) {
    let n = 0;
    const r = t.score,
      o = e.score;
    for (; n < r.length && n < o.length; ) {
      const s = ny(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (zl(r)) return 1;
      if (zl(o)) return -1;
    }
    return o.length - r.length;
  }
  function zl(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const ry = { type: 0, value: "" },
    oy = /[a-zA-Z0-9_]/;
  function sy(t) {
    if (!t) return [[]];
    if (t === "/") return [[ry]];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
    function e(h) {
      throw new Error(`ERR (${n})/"${c}": ${h}`);
    }
    let n = 0,
      r = n;
    const o = [];
    let s;
    function i() {
      s && o.push(s), (s = []);
    }
    let a = 0,
      l,
      c = "",
      u = "";
    function d() {
      c &&
        (n === 0
          ? s.push({ type: 0, value: c })
          : n === 1 || n === 2 || n === 3
            ? (s.length > 1 &&
                (l === "*" || l === "+") &&
                e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
              s.push({
                type: 1,
                value: c,
                regexp: u,
                repeatable: l === "*" || l === "+",
                optional: l === "*" || l === "?",
              }))
            : e("Invalid state to consume buffer"),
        (c = ""));
    }
    function f() {
      c += l;
    }
    for (; a < t.length; ) {
      if (((l = t[a++]), l === "\\" && n !== 2)) {
        (r = n), (n = 4);
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (c && d(), i()) : l === ":" ? (d(), (n = 1)) : f();
          break;
        case 4:
          f(), (n = r);
          break;
        case 1:
          l === "(" ? (n = 2) : oy.test(l) ? f() : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
          break;
        case 2:
          l === ")" ? (u[u.length - 1] == "\\" ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
          break;
        case 3:
          d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
          break;
        default:
          e("Unknown state");
          break;
      }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), i(), o;
  }
  function iy(t, e, n) {
    const r = ey(sy(t.path), n),
      o = yt(r, { record: t, parent: e, children: [], alias: [] });
    return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
  }
  function ay(t, e) {
    const n = [],
      r = new Map();
    e = Bl({ strict: !1, end: !0, sensitive: !1 }, e);
    function o(d) {
      return r.get(d);
    }
    function s(d, f, h) {
      const m = !h,
        p = Dl(d);
      p.aliasOf = h && h.record;
      const b = Bl(e, d),
        w = [p];
      if ("alias" in d) {
        const k = typeof d.alias == "string" ? [d.alias] : d.alias;
        for (const E of k)
          w.push(
            Dl(yt({}, p, { components: h ? h.record.components : p.components, path: E, aliasOf: h ? h.record : p })),
          );
      }
      let _, x;
      for (const k of w) {
        const { path: E } = k;
        if (f && E[0] !== "/") {
          const z = f.record.path,
            W = z[z.length - 1] === "/" ? "" : "/";
          k.path = f.record.path + (E && W + E);
        }
        if (
          ((_ = iy(k, f, b)),
          h ? h.alias.push(_) : ((x = x || _), x !== _ && x.alias.push(_), m && d.name && !Fl(_) && i(d.name)),
          ad(_) && l(_),
          p.children)
        ) {
          const z = p.children;
          for (let W = 0; W < z.length; W++) s(z[W], _, h && h.children[W]);
        }
        h = h || _;
      }
      return x
        ? () => {
            i(x);
          }
        : vr;
    }
    function i(d) {
      if (od(d)) {
        const f = r.get(d);
        f && (r.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
      } else {
        const f = n.indexOf(d);
        f > -1 && (n.splice(f, 1), d.record.name && r.delete(d.record.name), d.children.forEach(i), d.alias.forEach(i));
      }
    }
    function a() {
      return n;
    }
    function l(d) {
      const f = uy(d, n);
      n.splice(f, 0, d), d.record.name && !Fl(d) && r.set(d.record.name, d);
    }
    function c(d, f) {
      let h,
        m = {},
        p,
        b;
      if ("name" in d && d.name) {
        if (((h = r.get(d.name)), !h)) throw qn(1, { location: d });
        (b = h.record.name),
          (m = yt(
            Nl(
              f.params,
              h.keys
                .filter((x) => !x.optional)
                .concat(h.parent ? h.parent.keys.filter((x) => x.optional) : [])
                .map((x) => x.name),
            ),
            d.params &&
              Nl(
                d.params,
                h.keys.map((x) => x.name),
              ),
          )),
          (p = h.stringify(m));
      } else if (d.path != null)
        (p = d.path), (h = n.find((x) => x.re.test(p))), h && ((m = h.parse(p)), (b = h.record.name));
      else {
        if (((h = f.name ? r.get(f.name) : n.find((x) => x.re.test(f.path))), !h))
          throw qn(1, { location: d, currentLocation: f });
        (b = h.record.name), (m = yt({}, f.params, d.params)), (p = h.stringify(m));
      }
      const w = [];
      let _ = h;
      for (; _; ) w.unshift(_.record), (_ = _.parent);
      return { name: b, path: p, params: m, matched: w, meta: cy(w) };
    }
    t.forEach((d) => s(d));
    function u() {
      (n.length = 0), r.clear();
    }
    return { addRoute: s, resolve: c, removeRoute: i, clearRoutes: u, getRoutes: a, getRecordMatcher: o };
  }
  function Nl(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function Dl(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: ly(t),
      children: t.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && { default: t.component },
    };
    return Object.defineProperty(e, "mods", { value: {} }), e;
  }
  function ly(t) {
    const e = {},
      n = t.props || !1;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function Fl(t) {
    for (; t; ) {
      if (t.record.aliasOf) return !0;
      t = t.parent;
    }
    return !1;
  }
  function cy(t) {
    return t.reduce((e, n) => yt(e, n.meta), {});
  }
  function Bl(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function uy(t, e) {
    let n = 0,
      r = e.length;
    for (; n !== r; ) {
      const s = (n + r) >> 1;
      id(t, e[s]) < 0 ? (r = s) : (n = s + 1);
    }
    const o = fy(t);
    return o && (r = e.lastIndexOf(o, r - 1)), r;
  }
  function fy(t) {
    let e = t;
    for (; (e = e.parent); ) if (ad(e) && id(t, e) === 0) return e;
  }
  function ad({ record: t }) {
    return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect);
  }
  function hy(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(Yh, " "),
        i = s.indexOf("="),
        a = Cr(i < 0 ? s : s.slice(0, i)),
        l = i < 0 ? null : Cr(s.slice(i + 1));
      if (a in e) {
        let c = e[a];
        me(c) || (c = e[a] = [c]), c.push(l);
      } else e[a] = l;
    }
    return e;
  }
  function Ul(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (((n = $v(n)), r == null)) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (me(r) ? r.map((s) => s && xi(s)) : [r && xi(r)]).forEach((s) => {
        s !== void 0 && ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
      });
    }
    return e;
  }
  function dy(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = me(r) ? r.map((o) => (o == null ? null : "" + o)) : r == null ? r : "" + r);
    }
    return e;
  }
  const py = Symbol(""),
    Vl = Symbol(""),
    Go = Symbol(""),
    ha = Symbol(""),
    Si = Symbol("");
  function rr() {
    let t = [];
    function e(r) {
      return (
        t.push(r),
        () => {
          const o = t.indexOf(r);
          o > -1 && t.splice(o, 1);
        }
      );
    }
    function n() {
      t = [];
    }
    return { add: e, list: () => t.slice(), reset: n };
  }
  function Je(t, e, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
      new Promise((a, l) => {
        const c = (f) => {
            f === !1
              ? l(qn(4, { from: n, to: e }))
              : f instanceof Error
                ? l(f)
                : Yv(f)
                  ? l(qn(2, { from: e, to: f }))
                  : (i && r.enterCallbacks[o] === i && typeof f == "function" && i.push(f), a());
          },
          u = s(() => t.call(r && r.instances[o], e, n, c));
        let d = Promise.resolve(u);
        t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
      });
  }
  function ks(t, e, n, r, o = (s) => s()) {
    const s = [];
    for (const i of t)
      for (const a in i.components) {
        let l = i.components[a];
        if (!(e !== "beforeRouteEnter" && !i.instances[a]))
          if (Jh(l)) {
            const u = (l.__vccOpts || l)[e];
            u && s.push(Je(u, n, r, i, a, o));
          } else {
            let c = l();
            s.push(() =>
              c.then((u) => {
                if (!u) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                const d = wv(u) ? u.default : u;
                (i.mods[a] = u), (i.components[a] = d);
                const h = (d.__vccOpts || d)[e];
                return h && Je(h, n, r, i, a, o)();
              }),
            );
          }
      }
    return s;
  }
  function Hl(t) {
    const e = he(Go),
      n = he(ha),
      r = rt(() => {
        const l = U(t.to);
        return e.resolve(l);
      }),
      o = rt(() => {
        const { matched: l } = r.value,
          { length: c } = l,
          u = l[c - 1],
          d = n.matched;
        if (!u || !d.length) return -1;
        const f = d.findIndex(Hn.bind(null, u));
        if (f > -1) return f;
        const h = ql(l[c - 2]);
        return c > 1 && ql(u) === h && d[d.length - 1].path !== h ? d.findIndex(Hn.bind(null, l[c - 2])) : f;
      }),
      s = rt(() => o.value > -1 && yy(n.params, r.value.params)),
      i = rt(() => o.value > -1 && o.value === n.matched.length - 1 && nd(n.params, r.value.params));
    function a(l = {}) {
      return vy(l) ? e[U(t.replace) ? "replace" : "push"](U(t.to)).catch(vr) : Promise.resolve();
    }
    return { route: r, href: rt(() => r.value.href), isActive: s, isExactActive: i, navigate: a };
  }
  const gy = Nt({
      name: "RouterLink",
      compatConfig: { MODE: 3 },
      props: {
        to: { type: [String, Object], required: !0 },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: { type: String, default: "page" },
      },
      useLink: Hl,
      setup(t, { slots: e }) {
        const n = Gn(Hl(t)),
          { options: r } = he(Go),
          o = rt(() => ({
            [Kl(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Kl(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
          }));
        return () => {
          const s = e.default && e.default(n);
          return t.custom
            ? s
            : Uh(
                "a",
                {
                  "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                  href: n.href,
                  onClick: n.navigate,
                  class: o.value,
                },
                s,
              );
        };
      },
    }),
    my = gy;
  function vy(t) {
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
  function yy(t, e) {
    for (const n in e) {
      const r = e[n],
        o = t[n];
      if (typeof r == "string") {
        if (r !== o) return !1;
      } else if (!me(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1;
    }
    return !0;
  }
  function ql(t) {
    return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
  }
  const Kl = (t, e, n) => t ?? e ?? n,
    by = Nt({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(t, { attrs: e, slots: n }) {
        const r = he(Si),
          o = rt(() => t.route || r.value),
          s = he(Vl, 0),
          i = rt(() => {
            let c = U(s);
            const { matched: u } = o.value;
            let d;
            for (; (d = u[c]) && !d.components; ) c++;
            return c;
          }),
          a = rt(() => o.value.matched[i.value]);
        so(
          Vl,
          rt(() => i.value + 1),
        ),
          so(py, a),
          so(Si, o);
        const l = ct();
        return (
          Se(
            () => [l.value, a.value, t.name],
            ([c, u, d], [f, h, m]) => {
              u &&
                ((u.instances[d] = c),
                h &&
                  h !== u &&
                  c &&
                  c === f &&
                  (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                  u.updateGuards.size || (u.updateGuards = h.updateGuards))),
                c && u && (!h || !Hn(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((p) => p(c));
            },
            { flush: "post" },
          ),
          () => {
            const c = o.value,
              u = t.name,
              d = a.value,
              f = d && d.components[u];
            if (!f) return Wl(n.default, { Component: f, route: c });
            const h = d.props[u],
              m = h ? (h === !0 ? c.params : typeof h == "function" ? h(c) : h) : null,
              b = Uh(
                f,
                yt({}, m, e, {
                  onVnodeUnmounted: (w) => {
                    w.component.isUnmounted && (d.instances[u] = null);
                  },
                  ref: l,
                }),
              );
            return Wl(n.default, { Component: b, route: c }) || b;
          }
        );
      },
    });
  function Wl(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const ld = by;
  function _y(t) {
    const e = ay(t.routes, t),
      n = t.parseQuery || hy,
      r = t.stringifyQuery || Ul,
      o = t.history,
      s = rr(),
      i = rr(),
      a = rr(),
      l = oh(Ke);
    let c = Ke;
    Ln && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = ws.bind(null, (C) => "" + C),
      d = ws.bind(null, Iv),
      f = ws.bind(null, Cr);
    function h(C, G) {
      let B, Q;
      return od(C) ? ((B = e.getRecordMatcher(C)), (Q = G)) : (Q = C), e.addRoute(Q, B);
    }
    function m(C) {
      const G = e.getRecordMatcher(C);
      G && e.removeRoute(G);
    }
    function p() {
      return e.getRoutes().map((C) => C.record);
    }
    function b(C) {
      return !!e.getRecordMatcher(C);
    }
    function w(C, G) {
      if (((G = yt({}, G || l.value)), typeof C == "string")) {
        const y = xs(n, C, G.path),
          T = e.resolve({ path: y.path }, G),
          $ = o.createHref(y.fullPath);
        return yt(y, T, { params: f(T.params), hash: Cr(y.hash), redirectedFrom: void 0, href: $ });
      }
      let B;
      if (C.path != null) B = yt({}, C, { path: xs(n, C.path, G.path).path });
      else {
        const y = yt({}, C.params);
        for (const T in y) y[T] == null && delete y[T];
        (B = yt({}, C, { params: d(y) })), (G.params = d(G.params));
      }
      const Q = e.resolve(B, G),
        gt = C.hash || "";
      Q.params = u(f(Q.params));
      const It = zv(r, yt({}, C, { hash: jv(gt), path: Q.path })),
        v = o.createHref(It);
      return yt({ fullPath: It, hash: gt, query: r === Ul ? dy(C.query) : C.query || {} }, Q, {
        redirectedFrom: void 0,
        href: v,
      });
    }
    function _(C) {
      return typeof C == "string" ? xs(n, C, l.value.path) : yt({}, C);
    }
    function x(C, G) {
      if (c !== C) return qn(8, { from: G, to: C });
    }
    function k(C) {
      return W(C);
    }
    function E(C) {
      return k(yt(_(C), { replace: !0 }));
    }
    function z(C) {
      const G = C.matched[C.matched.length - 1];
      if (G && G.redirect) {
        const { redirect: B } = G;
        let Q = typeof B == "function" ? B(C) : B;
        return (
          typeof Q == "string" &&
            ((Q = Q.includes("?") || Q.includes("#") ? (Q = _(Q)) : { path: Q }), (Q.params = {})),
          yt({ query: C.query, hash: C.hash, params: Q.path != null ? {} : C.params }, Q)
        );
      }
    }
    function W(C, G) {
      const B = (c = w(C)),
        Q = l.value,
        gt = C.state,
        It = C.force,
        v = C.replace === !0,
        y = z(B);
      if (y)
        return W(yt(_(y), { state: typeof y == "object" ? yt({}, gt, y.state) : gt, force: It, replace: v }), G || B);
      const T = B;
      T.redirectedFrom = G;
      let $;
      return (
        !It && Nv(r, Q, B) && (($ = qn(16, { to: T, from: Q })), Jt(Q, Q, !0, !1)),
        ($ ? Promise.resolve($) : A(T, Q))
          .catch((O) => (Ie(O) ? (Ie(O, 2) ? O : $t(O)) : it(O, T, Q)))
          .then((O) => {
            if (O) {
              if (Ie(O, 2))
                return W(
                  yt({ replace: v }, _(O.to), {
                    state: typeof O.to == "object" ? yt({}, gt, O.to.state) : gt,
                    force: It,
                  }),
                  G || T,
                );
            } else O = S(T, Q, !0, v, gt);
            return g(T, Q, O), O;
          })
      );
    }
    function V(C, G) {
      const B = x(C, G);
      return B ? Promise.reject(B) : Promise.resolve();
    }
    function X(C) {
      const G = $e.values().next().value;
      return G && typeof G.runWithContext == "function" ? G.runWithContext(C) : C();
    }
    function A(C, G) {
      let B;
      const [Q, gt, It] = wy(C, G);
      B = ks(Q.reverse(), "beforeRouteLeave", C, G);
      for (const y of Q)
        y.leaveGuards.forEach((T) => {
          B.push(Je(T, C, G));
        });
      const v = V.bind(null, C, G);
      return (
        B.push(v),
        le(B)
          .then(() => {
            B = [];
            for (const y of s.list()) B.push(Je(y, C, G));
            return B.push(v), le(B);
          })
          .then(() => {
            B = ks(gt, "beforeRouteUpdate", C, G);
            for (const y of gt)
              y.updateGuards.forEach((T) => {
                B.push(Je(T, C, G));
              });
            return B.push(v), le(B);
          })
          .then(() => {
            B = [];
            for (const y of It)
              if (y.beforeEnter)
                if (me(y.beforeEnter)) for (const T of y.beforeEnter) B.push(Je(T, C, G));
                else B.push(Je(y.beforeEnter, C, G));
            return B.push(v), le(B);
          })
          .then(
            () => (
              C.matched.forEach((y) => (y.enterCallbacks = {})),
              (B = ks(It, "beforeRouteEnter", C, G, X)),
              B.push(v),
              le(B)
            ),
          )
          .then(() => {
            B = [];
            for (const y of i.list()) B.push(Je(y, C, G));
            return B.push(v), le(B);
          })
          .catch((y) => (Ie(y, 8) ? y : Promise.reject(y)))
      );
    }
    function g(C, G, B) {
      a.list().forEach((Q) => X(() => Q(C, G, B)));
    }
    function S(C, G, B, Q, gt) {
      const It = x(C, G);
      if (It) return It;
      const v = G === Ke,
        y = Ln ? history.state : {};
      B && (Q || v ? o.replace(C.fullPath, yt({ scroll: v && y && y.scroll }, gt)) : o.push(C.fullPath, gt)),
        (l.value = C),
        Jt(C, G, B, v),
        $t();
    }
    let R;
    function J() {
      R ||
        (R = o.listen((C, G, B) => {
          if (!$n.listening) return;
          const Q = w(C),
            gt = z(Q);
          if (gt) {
            W(yt(gt, { replace: !0 }), Q).catch(vr);
            return;
          }
          c = Q;
          const It = l.value;
          Ln && Kv(Pl(It.fullPath, B.delta), Wo()),
            A(Q, It)
              .catch((v) =>
                Ie(v, 12)
                  ? v
                  : Ie(v, 2)
                    ? (W(v.to, Q)
                        .then((y) => {
                          Ie(y, 20) && !B.delta && B.type === Rr.pop && o.go(-1, !1);
                        })
                        .catch(vr),
                      Promise.reject())
                    : (B.delta && o.go(-B.delta, !1), it(v, Q, It)),
              )
              .then((v) => {
                (v = v || S(Q, It, !1)),
                  v && (B.delta && !Ie(v, 8) ? o.go(-B.delta, !1) : B.type === Rr.pop && Ie(v, 20) && o.go(-1, !1)),
                  g(Q, It, v);
              })
              .catch(vr);
        }));
    }
    let et = rr(),
      q = rr(),
      H;
    function it(C, G, B) {
      $t(C);
      const Q = q.list();
      return Q.length ? Q.forEach((gt) => gt(C, G, B)) : console.error(C), Promise.reject(C);
    }
    function Vt() {
      return H && l.value !== Ke
        ? Promise.resolve()
        : new Promise((C, G) => {
            et.add([C, G]);
          });
    }
    function $t(C) {
      return H || ((H = !C), J(), et.list().forEach(([G, B]) => (C ? B(C) : G())), et.reset()), C;
    }
    function Jt(C, G, B, Q) {
      const { scrollBehavior: gt } = t;
      if (!Ln || !gt) return Promise.resolve();
      const It = (!B && Wv(Pl(C.fullPath, 0))) || ((Q || !B) && history.state && history.state.scroll) || null;
      return No()
        .then(() => gt(C, G, It))
        .then((v) => v && qv(v))
        .catch((v) => it(v, C, G));
    }
    const _t = (C) => o.go(C);
    let Kt;
    const $e = new Set(),
      $n = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: m,
        clearRoutes: e.clearRoutes,
        hasRoute: b,
        getRoutes: p,
        resolve: w,
        options: t,
        push: k,
        replace: E,
        go: _t,
        back: () => _t(-1),
        forward: () => _t(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: q.add,
        isReady: Vt,
        install(C) {
          const G = this;
          C.component("RouterLink", my),
            C.component("RouterView", ld),
            (C.config.globalProperties.$router = G),
            Object.defineProperty(C.config.globalProperties, "$route", { enumerable: !0, get: () => U(l) }),
            Ln && !Kt && l.value === Ke && ((Kt = !0), k(o.location).catch((gt) => {}));
          const B = {};
          for (const gt in Ke) Object.defineProperty(B, gt, { get: () => l.value[gt], enumerable: !0 });
          C.provide(Go, G), C.provide(ha, nh(B)), C.provide(Si, l);
          const Q = C.unmount;
          $e.add(C),
            (C.unmount = function () {
              $e.delete(C), $e.size < 1 && ((c = Ke), R && R(), (R = null), (l.value = Ke), (Kt = !1), (H = !1)), Q();
            });
        },
      };
    function le(C) {
      return C.reduce((G, B) => G.then(() => X(B)), Promise.resolve());
    }
    return $n;
  }
  function wy(t, e) {
    const n = [],
      r = [],
      o = [],
      s = Math.max(e.matched.length, t.matched.length);
    for (let i = 0; i < s; i++) {
      const a = e.matched[i];
      a && (t.matched.find((c) => Hn(c, a)) ? r.push(a) : n.push(a));
      const l = t.matched[i];
      l && (e.matched.find((c) => Hn(c, l)) || o.push(l));
    }
    return [n, r, o];
  }
  function Zo() {
    return he(Go);
  }
  function Jo(t) {
    return he(ha);
  }
  const Gl = 1e3 * 60,
    xy = Ko("alive", () => {
      const t = ct(0);
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
        }, Gl),
        console.log("Ping store created, timeout: ", Gl),
        { isAlive: t }
      );
    }),
    ky = Nt({
      __name: "App",
      setup(t) {
        return xy(), (e, n) => (M(), L("main", null, [at(U(ld))]));
      },
    });
  var Sy = Object.defineProperty,
    Ay = (t, e, n) => (e in t ? Sy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    lt = (t, e, n) => (Ay(t, typeof e != "symbol" ? e + "" : e, n), n),
    Ht = [];
  for (var Ss = 0; Ss < 256; ++Ss) Ht.push((Ss + 256).toString(16).slice(1));
  function Ty(t, e = 0) {
    return (
      Ht[t[e + 0]] +
      Ht[t[e + 1]] +
      Ht[t[e + 2]] +
      Ht[t[e + 3]] +
      "-" +
      Ht[t[e + 4]] +
      Ht[t[e + 5]] +
      "-" +
      Ht[t[e + 6]] +
      Ht[t[e + 7]] +
      "-" +
      Ht[t[e + 8]] +
      Ht[t[e + 9]] +
      "-" +
      Ht[t[e + 10]] +
      Ht[t[e + 11]] +
      Ht[t[e + 12]] +
      Ht[t[e + 13]] +
      Ht[t[e + 14]] +
      Ht[t[e + 15]]
    ).toLowerCase();
  }
  var Zr,
    Ey = new Uint8Array(16);
  function Oy() {
    if (!Zr && ((Zr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Zr))
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return Zr(Ey);
  }
  var Cy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  const Zl = { randomUUID: Cy };
  function Ry(t, e, n) {
    if (Zl.randomUUID && !e && !t) return Zl.randomUUID();
    t = t || {};
    var r = t.random || (t.rng || Oy)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Ty(r);
  }
  function jy(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var $y = function () {},
    Py = $y(),
    kn = function (t) {
      return t !== Py && t !== null;
    },
    Iy = kn,
    My = Array.prototype.forEach,
    Ly = Object.create,
    zy = function (t, e) {
      var n;
      for (n in t) e[n] = t[n];
    },
    cd = function (t) {
      var e = Ly(null);
      return (
        My.call(arguments, function (n) {
          Iy(n) && zy(Object(n), e);
        }),
        e
      );
    },
    Ny = function () {
      var t = Math.sign;
      return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
    },
    Jl,
    Ql;
  function Dy() {
    return (
      Ql ||
        ((Ql = 1),
        (Jl = function (t) {
          return (t = Number(t)), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
        })),
      Jl
    );
  }
  var Fy = Ny() ? Math.sign : Dy(),
    By = Fy,
    Uy = Math.abs,
    Vy = Math.floor,
    Hy = function (t) {
      return isNaN(t) ? 0 : ((t = Number(t)), t === 0 || !isFinite(t) ? t : By(t) * Vy(Uy(t)));
    },
    qy = Hy,
    Ky = Math.max,
    Sn = function (t) {
      return Ky(0, qy(t));
    },
    Wy = Sn,
    ud = function (t, e, n) {
      var r;
      return isNaN(t) ? ((r = e), r >= 0 ? (n && r ? r - 1 : r) : 1) : t === !1 ? !1 : Wy(t);
    },
    sn = function (t) {
      if (typeof t != "function") throw new TypeError(t + " is not a function");
      return t;
    },
    Gy = kn,
    Zn = function (t) {
      if (!Gy(t)) throw new TypeError("Cannot use null or undefined");
      return t;
    },
    Zy = sn,
    Jy = Zn,
    Qy = Function.prototype.bind,
    Yl = Function.prototype.call,
    Yy = Object.keys,
    Xy = Object.prototype.propertyIsEnumerable,
    tb = function (t, e) {
      return function (n, r) {
        var o,
          s = arguments[2],
          i = arguments[3];
        return (
          (n = Object(Jy(n))),
          Zy(r),
          (o = Yy(n)),
          i && o.sort(typeof i == "function" ? Qy.call(i, n) : void 0),
          typeof t != "function" && (t = o[t]),
          Yl.call(t, o, function (a, l) {
            return Xy.call(n, a) ? Yl.call(r, s, n[a], a, n, l) : e;
          })
        );
      };
    },
    Qo = tb("forEach"),
    An = {},
    fd = { exports: {} },
    eb = function () {
      var t = Object.assign,
        e;
      return typeof t != "function"
        ? !1
        : ((e = { foo: "raz" }), t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
    },
    Xl,
    tc;
  function nb() {
    return (
      tc ||
        ((tc = 1),
        (Xl = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        })),
      Xl
    );
  }
  var As, ec;
  function rb() {
    if (ec) return As;
    ec = 1;
    var t = kn,
      e = Object.keys;
    return (
      (As = function (n) {
        return e(t(n) ? Object(n) : n);
      }),
      As
    );
  }
  var nc, rc;
  function ob() {
    return rc || ((rc = 1), (nc = nb()() ? Object.keys : rb())), nc;
  }
  var Ts, oc;
  function sb() {
    if (oc) return Ts;
    oc = 1;
    var t = ob(),
      e = Zn,
      n = Math.max;
    return (
      (Ts = function (r, o) {
        var s,
          i,
          a = n(arguments.length, 2),
          l;
        for (
          r = Object(e(r)),
            l = function (c) {
              try {
                r[c] = o[c];
              } catch (u) {
                s || (s = u);
              }
            },
            i = 1;
          i < a;
          ++i
        )
          (o = arguments[i]), t(o).forEach(l);
        if (s !== void 0) throw s;
        return r;
      }),
      Ts
    );
  }
  var hd = eb() ? Object.assign : sb(),
    ib = kn,
    ab = { function: !0, object: !0 },
    lb = function (t) {
      return (ib(t) && ab[typeof t]) || !1;
    };
  (function (t) {
    var e = hd,
      n = lb,
      r = kn,
      o = Error.captureStackTrace;
    t.exports = function (s) {
      var i = new Error(s),
        a = arguments[1],
        l = arguments[2];
      return r(l) || (n(a) && ((l = a), (a = null))), r(l) && e(i, l), r(a) && (i.code = a), o && o(i, t.exports), i;
    };
  })(fd);
  var cb = fd.exports,
    Ai = { exports: {} },
    Es,
    sc;
  function dd() {
    if (sc) return Es;
    sc = 1;
    var t = Zn,
      e = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      r = Object.getOwnPropertyNames,
      o = Object.getOwnPropertySymbols;
    return (
      (Es = function (s, i) {
        var a,
          l = Object(t(i));
        if (
          ((s = Object(t(s))),
          r(l).forEach(function (c) {
            try {
              e(s, c, n(i, c));
            } catch (u) {
              a = u;
            }
          }),
          typeof o == "function" &&
            o(l).forEach(function (c) {
              try {
                e(s, c, n(i, c));
              } catch (u) {
                a = u;
              }
            }),
          a !== void 0)
        )
          throw a;
        return s;
      }),
      Es
    );
  }
  var ic = Sn,
    pd = function (t, e) {
      return e;
    },
    Os,
    ac,
    lc,
    cc;
  try {
    Object.defineProperty(pd, "length", { configurable: !0, writable: !1, enumerable: !1, value: 1 });
  } catch {}
  pd.length === 1
    ? ((Os = { configurable: !0, writable: !1, enumerable: !1 }),
      (ac = Object.defineProperty),
      (Ai.exports = function (t, e) {
        return (e = ic(e)), t.length === e ? t : ((Os.value = e), ac(t, "length", Os));
      }))
    : ((cc = dd()),
      (lc = (function () {
        var t = [];
        return function (e) {
          var n,
            r = 0;
          if (t[e]) return t[e];
          for (n = []; e--; ) n.push("a" + (++r).toString(36));
          return new Function("fn", "return function (" + n.join(", ") + ") { return fn.apply(this, arguments); };");
        };
      })()),
      (Ai.exports = function (t, e) {
        var n;
        if (((e = ic(e)), t.length === e)) return t;
        n = lc(e)(t);
        try {
          cc(n, t);
        } catch {}
        return n;
      }));
  var gd = Ai.exports,
    md = { exports: {} },
    ub = void 0,
    vd = function (t) {
      return t !== ub && t !== null;
    },
    fb = vd,
    hb = { object: !0, function: !0, undefined: !0 },
    db = function (t) {
      return fb(t) ? hasOwnProperty.call(hb, typeof t) : !1;
    },
    pb = db,
    gb = function (t) {
      if (!pb(t)) return !1;
      try {
        return t.constructor ? t.constructor.prototype === t : !1;
      } catch {
        return !1;
      }
    },
    mb = gb,
    vb = function (t) {
      if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
      try {
        if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
      } catch {
        return !1;
      }
      return !mb(t);
    },
    yb = vb,
    bb = /^\s*class[\s{/}]/,
    _b = Function.prototype.toString,
    wb = function (t) {
      return !(!yb(t) || bb.test(_b.call(t)));
    },
    Cs = "razdwatrzy",
    xb = function () {
      return typeof Cs.contains != "function" ? !1 : Cs.contains("dwa") === !0 && Cs.contains("foo") === !1;
    },
    Rs,
    uc;
  function kb() {
    if (uc) return Rs;
    uc = 1;
    var t = String.prototype.indexOf;
    return (
      (Rs = function (e) {
        return t.call(this, e, arguments[1]) > -1;
      }),
      Rs
    );
  }
  var Sb = xb() ? String.prototype.contains : kb(),
    lo = vd,
    fc = wb,
    yd = hd,
    bd = cd,
    br = Sb,
    Ab = (md.exports = function (t, e) {
      var n, r, o, s, i;
      return (
        arguments.length < 2 || typeof t != "string" ? ((s = e), (e = t), (t = null)) : (s = arguments[2]),
        lo(t) ? ((n = br.call(t, "c")), (r = br.call(t, "e")), (o = br.call(t, "w"))) : ((n = o = !0), (r = !1)),
        (i = { value: e, configurable: n, enumerable: r, writable: o }),
        s ? yd(bd(s), i) : i
      );
    });
  Ab.gs = function (t, e, n) {
    var r, o, s, i;
    return (
      typeof t != "string" ? ((s = n), (n = e), (e = t), (t = null)) : (s = arguments[3]),
      lo(e)
        ? fc(e)
          ? lo(n)
            ? fc(n) || ((s = n), (n = void 0))
            : (n = void 0)
          : ((s = e), (e = n = void 0))
        : (e = void 0),
      lo(t) ? ((r = br.call(t, "c")), (o = br.call(t, "e"))) : ((r = !0), (o = !1)),
      (i = { get: e, set: n, configurable: r, enumerable: o }),
      s ? yd(bd(s), i) : i
    );
  };
  var Tn = md.exports,
    Ti = { exports: {} };
  (function (t, e) {
    var n = Tn,
      r = sn,
      o = Function.prototype.apply,
      s = Function.prototype.call,
      i = Object.create,
      a = Object.defineProperty,
      l = Object.defineProperties,
      c = Object.prototype.hasOwnProperty,
      u = { configurable: !0, enumerable: !1, writable: !0 },
      d,
      f,
      h,
      m,
      p,
      b,
      w;
    (d = function (_, x) {
      var k;
      return (
        r(x),
        c.call(this, "__ee__") ? (k = this.__ee__) : ((k = u.value = i(null)), a(this, "__ee__", u), (u.value = null)),
        k[_] ? (typeof k[_] == "object" ? k[_].push(x) : (k[_] = [k[_], x])) : (k[_] = x),
        this
      );
    }),
      (f = function (_, x) {
        var k, E;
        return (
          r(x),
          (E = this),
          d.call(
            this,
            _,
            (k = function () {
              h.call(E, _, k), o.call(x, this, arguments);
            }),
          ),
          (k.__eeOnceListener__ = x),
          this
        );
      }),
      (h = function (_, x) {
        var k, E, z, W;
        if ((r(x), !c.call(this, "__ee__"))) return this;
        if (((k = this.__ee__), !k[_])) return this;
        if (((E = k[_]), typeof E == "object"))
          for (W = 0; (z = E[W]); ++W)
            (z === x || z.__eeOnceListener__ === x) && (E.length === 2 ? (k[_] = E[W ? 0 : 1]) : E.splice(W, 1));
        else (E === x || E.__eeOnceListener__ === x) && delete k[_];
        return this;
      }),
      (m = function (_) {
        var x, k, E, z, W;
        if (c.call(this, "__ee__") && ((z = this.__ee__[_]), !!z))
          if (typeof z == "object") {
            for (k = arguments.length, W = new Array(k - 1), x = 1; x < k; ++x) W[x - 1] = arguments[x];
            for (z = z.slice(), x = 0; (E = z[x]); ++x) o.call(E, this, W);
          } else
            switch (arguments.length) {
              case 1:
                s.call(z, this);
                break;
              case 2:
                s.call(z, this, arguments[1]);
                break;
              case 3:
                s.call(z, this, arguments[1], arguments[2]);
                break;
              default:
                for (k = arguments.length, W = new Array(k - 1), x = 1; x < k; ++x) W[x - 1] = arguments[x];
                o.call(z, this, W);
            }
      }),
      (p = { on: d, once: f, off: h, emit: m }),
      (b = { on: n(d), once: n(f), off: n(h), emit: n(m) }),
      (w = l({}, b)),
      (t.exports = e =
        function (_) {
          return _ == null ? i(w) : l(Object(_), b);
        }),
      (e.methods = p);
  })(Ti, Ti.exports);
  var Tb = Ti.exports,
    hc,
    dc;
  function Eb() {
    return (
      dc ||
        ((dc = 1),
        (hc = function () {
          var t = Array.from,
            e,
            n;
          return typeof t != "function" ? !1 : ((e = ["raz", "dwa"]), (n = t(e)), !!(n && n !== e && n[1] === "dwa"));
        })),
      hc
    );
  }
  var pc, gc;
  function Ob() {
    return (
      gc ||
        ((gc = 1),
        (pc = function () {
          return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
        })),
      pc
    );
  }
  var js, mc;
  function Cb() {
    if (mc) return js;
    mc = 1;
    var t = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    return (
      (js = (function () {
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
      js
    );
  }
  var vc, yc;
  function Yo() {
    return yc || ((yc = 1), (vc = Ob()() ? globalThis : Cb())), vc;
  }
  var $s, bc;
  function Rb() {
    if (bc) return $s;
    bc = 1;
    var t = Yo(),
      e = { object: !0, symbol: !0 };
    return (
      ($s = function () {
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
      $s
    );
  }
  var _c, wc;
  function jb() {
    return (
      wc ||
        ((wc = 1),
        (_c = function (t) {
          return t
            ? typeof t == "symbol"
              ? !0
              : !t.constructor || t.constructor.name !== "Symbol"
                ? !1
                : t[t.constructor.toStringTag] === "Symbol"
            : !1;
        })),
      _c
    );
  }
  var Ps, xc;
  function _d() {
    if (xc) return Ps;
    xc = 1;
    var t = jb();
    return (
      (Ps = function (e) {
        if (!t(e)) throw new TypeError(e + " is not a symbol");
        return e;
      }),
      Ps
    );
  }
  var Is, kc;
  function $b() {
    if (kc) return Is;
    kc = 1;
    var t = Tn,
      e = Object.create,
      n = Object.defineProperty,
      r = Object.prototype,
      o = e(null);
    return (
      (Is = function (s) {
        for (var i = 0, a, l; o[s + (i || "")]; ) ++i;
        return (
          (s += i || ""),
          (o[s] = !0),
          (a = "@@" + s),
          n(
            r,
            a,
            t.gs(null, function (c) {
              l || ((l = !0), n(this, a, t(c)), (l = !1));
            }),
          ),
          a
        );
      }),
      Is
    );
  }
  var Ms, Sc;
  function Pb() {
    if (Sc) return Ms;
    Sc = 1;
    var t = Tn,
      e = Yo().Symbol;
    return (
      (Ms = function (n) {
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
      Ms
    );
  }
  var Ls, Ac;
  function Ib() {
    if (Ac) return Ls;
    Ac = 1;
    var t = Tn,
      e = _d(),
      n = Object.create(null);
    return (
      (Ls = function (r) {
        return Object.defineProperties(r, {
          for: t(function (o) {
            return n[o] ? n[o] : (n[o] = r(String(o)));
          }),
          keyFor: t(function (o) {
            var s;
            e(o);
            for (s in n) if (n[s] === o) return s;
          }),
        });
      }),
      Ls
    );
  }
  var zs, Tc;
  function Mb() {
    if (Tc) return zs;
    Tc = 1;
    var t = Tn,
      e = _d(),
      n = Yo().Symbol,
      r = $b(),
      o = Pb(),
      s = Ib(),
      i = Object.create,
      a = Object.defineProperties,
      l = Object.defineProperty,
      c,
      u,
      d;
    if (typeof n == "function")
      try {
        String(n()), (d = !0);
      } catch {}
    else n = null;
    return (
      (u = function (f) {
        if (this instanceof u) throw new TypeError("Symbol is not a constructor");
        return c(f);
      }),
      (zs = c =
        function f(h) {
          var m;
          if (this instanceof f) throw new TypeError("Symbol is not a constructor");
          return d
            ? n(h)
            : ((m = i(u.prototype)),
              (h = h === void 0 ? "" : String(h)),
              a(m, { __description__: t("", h), __name__: t("", r(h)) }));
        }),
      o(c),
      s(c),
      a(u.prototype, {
        constructor: t(c),
        toString: t("", function () {
          return this.__name__;
        }),
      }),
      a(c.prototype, {
        toString: t(function () {
          return "Symbol (" + e(this).__description__ + ")";
        }),
        valueOf: t(function () {
          return e(this);
        }),
      }),
      l(
        c.prototype,
        c.toPrimitive,
        t("", function () {
          var f = e(this);
          return typeof f == "symbol" ? f : f.toString();
        }),
      ),
      l(c.prototype, c.toStringTag, t("c", "Symbol")),
      l(u.prototype, c.toStringTag, t("c", c.prototype[c.toStringTag])),
      l(u.prototype, c.toPrimitive, t("c", c.prototype[c.toPrimitive])),
      zs
    );
  }
  var Ec, Oc;
  function Lb() {
    return Oc || ((Oc = 1), (Ec = Rb()() ? Yo().Symbol : Mb())), Ec;
  }
  var Ns, Cc;
  function zb() {
    if (Cc) return Ns;
    Cc = 1;
    var t = Object.prototype.toString,
      e = t.call(
        (function () {
          return arguments;
        })(),
      );
    return (
      (Ns = function (n) {
        return t.call(n) === e;
      }),
      Ns
    );
  }
  var Ds, Rc;
  function Nb() {
    if (Rc) return Ds;
    Rc = 1;
    var t = Object.prototype.toString,
      e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    return (
      (Ds = function (n) {
        return typeof n == "function" && e(t.call(n));
      }),
      Ds
    );
  }
  var Fs, jc;
  function Db() {
    if (jc) return Fs;
    jc = 1;
    var t = Object.prototype.toString,
      e = t.call("");
    return (
      (Fs = function (n) {
        return typeof n == "string" || (n && typeof n == "object" && (n instanceof String || t.call(n) === e)) || !1;
      }),
      Fs
    );
  }
  var Bs, $c;
  function Fb() {
    if ($c) return Bs;
    $c = 1;
    var t = Lb().iterator,
      e = zb(),
      n = Nb(),
      r = Sn,
      o = sn,
      s = Zn,
      i = kn,
      a = Db(),
      l = Array.isArray,
      c = Function.prototype.call,
      u = { configurable: !0, enumerable: !0, writable: !0, value: null },
      d = Object.defineProperty;
    return (
      (Bs = function (f) {
        var h = arguments[1],
          m = arguments[2],
          p,
          b,
          w,
          _,
          x,
          k,
          E,
          z,
          W,
          V;
        if (((f = Object(s(f))), i(h) && o(h), !this || this === Array || !n(this))) {
          if (!h) {
            if (e(f)) return (x = f.length), x !== 1 ? Array.apply(null, f) : ((_ = new Array(1)), (_[0] = f[0]), _);
            if (l(f)) {
              for (_ = new Array((x = f.length)), b = 0; b < x; ++b) _[b] = f[b];
              return _;
            }
          }
          _ = [];
        } else p = this;
        if (!l(f)) {
          if ((W = f[t]) !== void 0) {
            for (E = o(W).call(f), p && (_ = new p()), z = E.next(), b = 0; !z.done; )
              (V = h ? c.call(h, m, z.value, b) : z.value),
                p ? ((u.value = V), d(_, b, u)) : (_[b] = V),
                (z = E.next()),
                ++b;
            x = b;
          } else if (a(f)) {
            for (x = f.length, p && (_ = new p()), b = 0, w = 0; b < x; ++b)
              (V = f[b]),
                b + 1 < x && ((k = V.charCodeAt(0)), k >= 55296 && k <= 56319 && (V += f[++b])),
                (V = h ? c.call(h, m, V, w) : V),
                p ? ((u.value = V), d(_, w, u)) : (_[w] = V),
                ++w;
            x = w;
          }
        }
        if (x === void 0)
          for (x = r(f.length), p && (_ = new p(x)), b = 0; b < x; ++b)
            (V = h ? c.call(h, m, f[b], b) : f[b]), p ? ((u.value = V), d(_, b, u)) : (_[b] = V);
        return p && ((u.value = null), (_.length = x)), _;
      }),
      Bs
    );
  }
  var Pc, Ic;
  function da() {
    return Ic || ((Ic = 1), (Pc = Eb()() ? Array.from : Fb())), Pc;
  }
  var Bb = da(),
    Ub = Array.isArray,
    Vb = function (t) {
      return Ub(t) ? t : Bb(t);
    },
    Hb = Vb,
    qb = kn,
    Kb = sn,
    Wb = Array.prototype.slice,
    wd;
  wd = function (t) {
    return this.map(function (e, n) {
      return e ? e(t[n]) : t[n];
    }).concat(Wb.call(t, this.length));
  };
  var Gb = function (t) {
      return (
        (t = Hb(t)),
        t.forEach(function (e) {
          qb(e) && Kb(e);
        }),
        wd.bind(t)
      );
    },
    Jr = sn,
    Zb = function (t) {
      var e;
      return typeof t == "function"
        ? { set: t, get: t }
        : ((e = { get: Jr(t.get) }),
          t.set !== void 0
            ? ((e.set = Jr(t.set)), t.delete && (e.delete = Jr(t.delete)), t.clear && (e.clear = Jr(t.clear)), e)
            : ((e.set = e.get), e));
    },
    Qr = cb,
    Yr = gd,
    or = Tn,
    xd = Tb.methods,
    Jb = Gb,
    Qb = Zb,
    Us = Function.prototype.apply,
    Vs = Function.prototype.call,
    Mc = Object.create,
    Yb = Object.defineProperties,
    Xb = xd.on,
    t0 = xd.emit,
    e0 = function (t, e, n) {
      var r = Mc(null),
        o,
        s,
        i,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        m,
        p,
        b,
        w,
        _;
      return (
        e !== !1 ? (s = e) : isNaN(t.length) ? (s = 1) : (s = t.length),
        n.normalizer && ((h = Qb(n.normalizer)), (i = h.get), (a = h.set), (l = h.delete), (c = h.clear)),
        n.resolvers != null && (_ = Jb(n.resolvers)),
        i
          ? (w = Yr(function (x) {
              var k,
                E,
                z = arguments;
              if ((_ && (z = _(z)), (k = i(z)), k !== null && hasOwnProperty.call(r, k)))
                return m && o.emit("get", k, z, this), r[k];
              if ((z.length === 1 ? (E = Vs.call(t, this, z[0])) : (E = Us.call(t, this, z)), k === null)) {
                if (((k = i(z)), k !== null)) throw Qr("Circular invocation", "CIRCULAR_INVOCATION");
                k = a(z);
              } else if (hasOwnProperty.call(r, k)) throw Qr("Circular invocation", "CIRCULAR_INVOCATION");
              return (r[k] = E), p && o.emit("set", k, null, E), E;
            }, s))
          : e === 0
            ? (w = function () {
                var x;
                if (hasOwnProperty.call(r, "data")) return m && o.emit("get", "data", arguments, this), r.data;
                if (
                  (arguments.length ? (x = Us.call(t, this, arguments)) : (x = Vs.call(t, this)),
                  hasOwnProperty.call(r, "data"))
                )
                  throw Qr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r.data = x), p && o.emit("set", "data", null, x), x;
              })
            : (w = function (x) {
                var k,
                  E = arguments,
                  z;
                if ((_ && (E = _(arguments)), (z = String(E[0])), hasOwnProperty.call(r, z)))
                  return m && o.emit("get", z, E, this), r[z];
                if (
                  (E.length === 1 ? (k = Vs.call(t, this, E[0])) : (k = Us.call(t, this, E)), hasOwnProperty.call(r, z))
                )
                  throw Qr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r[z] = k), p && o.emit("set", z, null, k), k;
              }),
        (o = {
          original: t,
          memoized: w,
          profileName: n.profileName,
          get: function (x) {
            return _ && (x = _(x)), i ? i(x) : String(x[0]);
          },
          has: function (x) {
            return hasOwnProperty.call(r, x);
          },
          delete: function (x) {
            var k;
            hasOwnProperty.call(r, x) && (l && l(x), (k = r[x]), delete r[x], b && o.emit("delete", x, k));
          },
          clear: function () {
            var x = r;
            c && c(), (r = Mc(null)), o.emit("clear", x);
          },
          on: function (x, k) {
            return x === "get" ? (m = !0) : x === "set" ? (p = !0) : x === "delete" && (b = !0), Xb.call(this, x, k);
          },
          emit: t0,
          updateEnv: function () {
            t = o.original;
          },
        }),
        i
          ? (u = Yr(function (x) {
              var k,
                E = arguments;
              _ && (E = _(E)), (k = i(E)), k !== null && o.delete(k);
            }, s))
          : e === 0
            ? (u = function () {
                return o.delete("data");
              })
            : (u = function (x) {
                return _ && (x = _(arguments)[0]), o.delete(x);
              }),
        (d = Yr(function () {
          var x,
            k = arguments;
          return e === 0 ? r.data : (_ && (k = _(k)), i ? (x = i(k)) : (x = String(k[0])), r[x]);
        })),
        (f = Yr(function () {
          var x,
            k = arguments;
          return e === 0
            ? o.has("data")
            : (_ && (k = _(k)), i ? (x = i(k)) : (x = String(k[0])), x === null ? !1 : o.has(x));
        })),
        Yb(w, { __memoized__: or(!0), delete: or(u), clear: or(o.clear), _get: or(d), _has: or(f) }),
        o
      );
    },
    n0 = sn,
    r0 = Qo,
    Lc = An,
    o0 = e0,
    s0 = ud,
    i0 = function t(e) {
      var n, r, o;
      if ((n0(e), (n = Object(arguments[1])), n.async && n.promise))
        throw new Error("Options 'async' and 'promise' cannot be used together");
      return hasOwnProperty.call(e, "__memoized__") && !n.force
        ? e
        : ((r = s0(n.length, e.length, n.async && Lc.async)),
          (o = o0(e, r, n)),
          r0(Lc, function (s, i) {
            n[i] && s(n[i], o, n);
          }),
          t.__profiler__ && t.__profiler__(o),
          o.updateEnv(),
          o.memoized);
    },
    zc,
    Nc;
  function a0() {
    return (
      Nc ||
        ((Nc = 1),
        (zc = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        })),
      zc
    );
  }
  var Dc, Fc;
  function l0() {
    return (
      Fc ||
        ((Fc = 1),
        (Dc = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, o = t; --o; ) n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        })),
      Dc
    );
  }
  var Bc, Uc;
  function c0() {
    return (
      Uc ||
        ((Uc = 1),
        (Bc = function () {
          var t = Number.isNaN;
          return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
        })),
      Bc
    );
  }
  var Vc, Hc;
  function u0() {
    return (
      Hc ||
        ((Hc = 1),
        (Vc = function (t) {
          return t !== t;
        })),
      Vc
    );
  }
  var qc, Kc;
  function f0() {
    return Kc || ((Kc = 1), (qc = c0()() ? Number.isNaN : u0())), qc;
  }
  var Hs, Wc;
  function pa() {
    if (Wc) return Hs;
    Wc = 1;
    var t = f0(),
      e = Sn,
      n = Zn,
      r = Array.prototype.indexOf,
      o = Object.prototype.hasOwnProperty,
      s = Math.abs,
      i = Math.floor;
    return (
      (Hs = function (a) {
        var l, c, u, d;
        if (!t(a)) return r.apply(this, arguments);
        for (
          c = e(n(this).length),
            u = arguments[1],
            isNaN(u) ? (u = 0) : u >= 0 ? (u = i(u)) : (u = e(this.length) - i(s(u))),
            l = u;
          l < c;
          ++l
        )
          if (o.call(this, l) && ((d = this[l]), t(d))) return l;
        return -1;
      }),
      Hs
    );
  }
  var qs, Gc;
  function h0() {
    if (Gc) return qs;
    Gc = 1;
    var t = pa(),
      e = Object.create;
    return (
      (qs = function () {
        var n = 0,
          r = [],
          o = e(null);
        return {
          get: function (s) {
            var i = 0,
              a = r,
              l,
              c = s.length;
            if (c === 0) return a[c] || null;
            if ((a = a[c])) {
              for (; i < c - 1; ) {
                if (((l = t.call(a[0], s[i])), l === -1)) return null;
                (a = a[1][l]), ++i;
              }
              return (l = t.call(a[0], s[i])), l === -1 ? null : a[1][l] || null;
            }
            return null;
          },
          set: function (s) {
            var i = 0,
              a = r,
              l,
              c = s.length;
            if (c === 0) a[c] = ++n;
            else {
              for (a[c] || (a[c] = [[], []]), a = a[c]; i < c - 1; )
                (l = t.call(a[0], s[i])),
                  l === -1 && ((l = a[0].push(s[i]) - 1), a[1].push([[], []])),
                  (a = a[1][l]),
                  ++i;
              (l = t.call(a[0], s[i])), l === -1 && (l = a[0].push(s[i]) - 1), (a[1][l] = ++n);
            }
            return (o[n] = s), n;
          },
          delete: function (s) {
            var i = 0,
              a = r,
              l,
              c = o[s],
              u = c.length,
              d = [];
            if (u === 0) delete a[u];
            else if ((a = a[u])) {
              for (; i < u - 1; ) {
                if (((l = t.call(a[0], c[i])), l === -1)) return;
                d.push(a, l), (a = a[1][l]), ++i;
              }
              if (((l = t.call(a[0], c[i])), l === -1)) return;
              for (s = a[1][l], a[0].splice(l, 1), a[1].splice(l, 1); !a[0].length && d.length; )
                (l = d.pop()), (a = d.pop()), a[0].splice(l, 1), a[1].splice(l, 1);
            }
            delete o[s];
          },
          clear: function () {
            (r = []), (o = e(null));
          },
        };
      }),
      qs
    );
  }
  var Ks, Zc;
  function d0() {
    if (Zc) return Ks;
    Zc = 1;
    var t = pa();
    return (
      (Ks = function () {
        var e = 0,
          n = [],
          r = [];
        return {
          get: function (o) {
            var s = t.call(n, o[0]);
            return s === -1 ? null : r[s];
          },
          set: function (o) {
            return n.push(o[0]), r.push(++e), e;
          },
          delete: function (o) {
            var s = t.call(r, o);
            s !== -1 && (n.splice(s, 1), r.splice(s, 1));
          },
          clear: function () {
            (n = []), (r = []);
          },
        };
      }),
      Ks
    );
  }
  var Ws, Jc;
  function p0() {
    if (Jc) return Ws;
    Jc = 1;
    var t = pa(),
      e = Object.create;
    return (
      (Ws = function (n) {
        var r = 0,
          o = [[], []],
          s = e(null);
        return {
          get: function (i) {
            for (var a = 0, l = o, c; a < n - 1; ) {
              if (((c = t.call(l[0], i[a])), c === -1)) return null;
              (l = l[1][c]), ++a;
            }
            return (c = t.call(l[0], i[a])), c === -1 ? null : l[1][c] || null;
          },
          set: function (i) {
            for (var a = 0, l = o, c; a < n - 1; )
              (c = t.call(l[0], i[a])),
                c === -1 && ((c = l[0].push(i[a]) - 1), l[1].push([[], []])),
                (l = l[1][c]),
                ++a;
            return (c = t.call(l[0], i[a])), c === -1 && (c = l[0].push(i[a]) - 1), (l[1][c] = ++r), (s[r] = i), r;
          },
          delete: function (i) {
            for (var a = 0, l = o, c, u = [], d = s[i]; a < n - 1; ) {
              if (((c = t.call(l[0], d[a])), c === -1)) return;
              u.push(l, c), (l = l[1][c]), ++a;
            }
            if (((c = t.call(l[0], d[a])), c !== -1)) {
              for (i = l[1][c], l[0].splice(c, 1), l[1].splice(c, 1); !l[0].length && u.length; )
                (c = u.pop()), (l = u.pop()), l[0].splice(c, 1), l[1].splice(c, 1);
              delete s[i];
            }
          },
          clear: function () {
            (o = [[], []]), (s = e(null));
          },
        };
      }),
      Ws
    );
  }
  var Qc = {},
    Gs,
    Yc;
  function kd() {
    if (Yc) return Gs;
    Yc = 1;
    var t = sn,
      e = Qo,
      n = Function.prototype.call;
    return (
      (Gs = function (r, o) {
        var s = {},
          i = arguments[2];
        return (
          t(o),
          e(r, function (a, l, c, u) {
            s[l] = n.call(o, i, a, l, c, u);
          }),
          s
        );
      }),
      Gs
    );
  }
  var Zs, Xc;
  function ga() {
    if (Xc) return Zs;
    Xc = 1;
    var t = function (n) {
        if (typeof n != "function") throw new TypeError(n + " is not a function");
        return n;
      },
      e = function (n) {
        var r = document.createTextNode(""),
          o,
          s,
          i = 0;
        return (
          new n(function () {
            var a;
            if (o) s && (o = s.concat(o));
            else {
              if (!s) return;
              o = s;
            }
            if (((s = o), (o = null), typeof s == "function")) {
              (a = s), (s = null), a();
              return;
            }
            for (r.data = i = ++i % 2; s; ) (a = s.shift()), s.length || (s = null), a();
          }).observe(r, { characterData: !0 }),
          function (a) {
            if ((t(a), o)) {
              typeof o == "function" ? (o = [o, a]) : o.push(a);
              return;
            }
            (o = a), (r.data = i = ++i % 2);
          }
        );
      };
    return (
      (Zs = (function () {
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
      Zs
    );
  }
  var tu;
  function g0() {
    if (tu) return Qc;
    tu = 1;
    var t = da(),
      e = kd(),
      n = dd(),
      r = gd,
      o = ga(),
      s = Array.prototype.slice,
      i = Function.prototype.apply,
      a = Object.create;
    return (
      (An.async = function (l, c) {
        var u = a(null),
          d = a(null),
          f = c.memoized,
          h = c.original,
          m,
          p,
          b;
        c.memoized = r(function (w) {
          var _ = arguments,
            x = _[_.length - 1];
          return typeof x == "function" && ((m = x), (_ = s.call(_, 0, -1))), f.apply((p = this), (b = _));
        }, f);
        try {
          n(c.memoized, f);
        } catch {}
        c.on("get", function (w) {
          var _, x, k;
          if (m) {
            if (u[w]) {
              typeof u[w] == "function" ? (u[w] = [u[w], m]) : u[w].push(m), (m = null);
              return;
            }
            (_ = m),
              (x = p),
              (k = b),
              (m = p = b = null),
              o(function () {
                var E;
                hasOwnProperty.call(d, w)
                  ? ((E = d[w]), c.emit("getasync", w, k, x), i.call(_, E.context, E.args))
                  : ((m = _), (p = x), (b = k), f.apply(x, k));
              });
          }
        }),
          (c.original = function () {
            var w, _, x, k;
            return m
              ? ((w = t(arguments)),
                (_ = function E(z) {
                  var W,
                    V,
                    X = E.id;
                  if (X == null) {
                    o(i.bind(E, this, arguments));
                    return;
                  }
                  if ((delete E.id, (W = u[X]), delete u[X], !!W))
                    return (
                      (V = t(arguments)),
                      c.has(X) &&
                        (z
                          ? c.delete(X)
                          : ((d[X] = { context: this, args: V }),
                            c.emit("setasync", X, typeof W == "function" ? 1 : W.length))),
                      typeof W == "function"
                        ? (k = i.call(W, this, V))
                        : W.forEach(function (A) {
                            k = i.call(A, this, V);
                          }, this),
                      k
                    );
                }),
                (x = m),
                (m = p = b = null),
                w.push(_),
                (k = i.call(h, this, w)),
                (_.cb = x),
                (m = _),
                k)
              : i.call(h, this, arguments);
          }),
          c.on("set", function (w) {
            if (!m) {
              c.delete(w);
              return;
            }
            u[w] ? (typeof u[w] == "function" ? (u[w] = [u[w], m.cb]) : u[w].push(m.cb)) : (u[w] = m.cb),
              delete m.cb,
              (m.id = w),
              (m = null);
          }),
          c.on("delete", function (w) {
            var _;
            hasOwnProperty.call(u, w) ||
              (d[w] && ((_ = d[w]), delete d[w], c.emit("deleteasync", w, s.call(_.args, 1))));
          }),
          c.on("clear", function () {
            var w = d;
            (d = a(null)),
              c.emit(
                "clearasync",
                e(w, function (_) {
                  return s.call(_.args, 1);
                }),
              );
          });
      }),
      Qc
    );
  }
  var eu = {},
    Js,
    nu;
  function m0() {
    if (nu) return Js;
    nu = 1;
    var t = Array.prototype.forEach,
      e = Object.create;
    return (
      (Js = function (n) {
        var r = e(null);
        return (
          t.call(arguments, function (o) {
            r[o] = !0;
          }),
          r
        );
      }),
      Js
    );
  }
  var ru, ou;
  function Sd() {
    return (
      ou ||
        ((ou = 1),
        (ru = function (t) {
          return typeof t == "function";
        })),
      ru
    );
  }
  var Qs, su;
  function v0() {
    if (su) return Qs;
    su = 1;
    var t = Sd();
    return (
      (Qs = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          throw new TypeError("Passed argument cannot be stringifed");
        }
      }),
      Qs
    );
  }
  var Ys, iu;
  function y0() {
    if (iu) return Ys;
    iu = 1;
    var t = Zn,
      e = v0();
    return (
      (Ys = function (n) {
        return e(t(n));
      }),
      Ys
    );
  }
  var Xs, au;
  function b0() {
    if (au) return Xs;
    au = 1;
    var t = Sd();
    return (
      (Xs = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          return "<Non-coercible to string value>";
        }
      }),
      Xs
    );
  }
  var ti, lu;
  function _0() {
    if (lu) return ti;
    lu = 1;
    var t = b0(),
      e = /[\n\r\u2028\u2029]/g;
    return (
      (ti = function (n) {
        var r = t(n);
        return (
          r.length > 100 && (r = r.slice(0, 99) + "…"),
          (r = r.replace(e, function (o) {
            return JSON.stringify(o).slice(1, -1);
          })),
          r
        );
      }),
      ti
    );
  }
  var Xr = { exports: {} },
    cu;
  function Ad() {
    if (cu) return Xr.exports;
    (cu = 1), (Xr.exports = t), (Xr.exports.default = t);
    function t(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
    }
    return Xr.exports;
  }
  var uu;
  function w0() {
    if (uu) return eu;
    uu = 1;
    var t = kd(),
      e = m0(),
      n = y0(),
      r = _0(),
      o = Ad(),
      s = ga(),
      i = Object.create,
      a = e("then", "then:finally", "done", "done:finally");
    return (
      (An.promise = function (l, c) {
        var u = i(null),
          d = i(null),
          f = i(null);
        if (l === !0) l = null;
        else if (((l = n(l)), !a[l])) throw new TypeError("'" + r(l) + "' is not valid promise mode");
        c.on("set", function (h, m, p) {
          var b = !1;
          if (!o(p)) {
            (d[h] = p), c.emit("setasync", h, 1);
            return;
          }
          (u[h] = 1), (f[h] = p);
          var w = function (E) {
              var z = u[h];
              if (b)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              z && (delete u[h], (d[h] = E), c.emit("setasync", h, z));
            },
            _ = function () {
              (b = !0), u[h] && (delete u[h], delete f[h], c.delete(h));
            },
            x = l;
          if ((x || (x = "then"), x === "then")) {
            var k = function () {
              s(_);
            };
            (p = p.then(function (E) {
              s(w.bind(this, E));
            }, k)),
              typeof p.finally == "function" && p.finally(k);
          } else if (x === "done") {
            if (typeof p.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            p.done(w, _);
          } else if (x === "done:finally") {
            if (typeof p.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            if (typeof p.finally != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            p.done(w), p.finally(_);
          }
        }),
          c.on("get", function (h, m, p) {
            var b;
            if (u[h]) {
              ++u[h];
              return;
            }
            b = f[h];
            var w = function () {
              c.emit("getasync", h, m, p);
            };
            o(b)
              ? typeof b.done == "function"
                ? b.done(w)
                : b.then(function () {
                    s(w);
                  })
              : w();
          }),
          c.on("delete", function (h) {
            if ((delete f[h], u[h])) {
              delete u[h];
              return;
            }
            if (hasOwnProperty.call(d, h)) {
              var m = d[h];
              delete d[h], c.emit("deleteasync", h, [m]);
            }
          }),
          c.on("clear", function () {
            var h = d;
            (d = i(null)),
              (u = i(null)),
              (f = i(null)),
              c.emit(
                "clearasync",
                t(h, function (m) {
                  return [m];
                }),
              );
          });
      }),
      eu
    );
  }
  var fu = {},
    hu;
  function x0() {
    if (hu) return fu;
    hu = 1;
    var t = sn,
      e = Qo,
      n = An,
      r = Function.prototype.apply;
    return (
      (n.dispose = function (o, s, i) {
        var a;
        if ((t(o), (i.async && n.async) || (i.promise && n.promise))) {
          s.on(
            "deleteasync",
            (a = function (l, c) {
              r.call(o, null, c);
            }),
          ),
            s.on("clearasync", function (l) {
              e(l, function (c, u) {
                a(u, c);
              });
            });
          return;
        }
        s.on(
          "delete",
          (a = function (l, c) {
            o(c);
          }),
        ),
          s.on("clear", function (l) {
            e(l, function (c, u) {
              a(u, c);
            });
          });
      }),
      fu
    );
  }
  var du = {},
    pu,
    gu;
  function k0() {
    return gu || ((gu = 1), (pu = 2147483647)), pu;
  }
  var ei, mu;
  function S0() {
    if (mu) return ei;
    mu = 1;
    var t = Sn,
      e = k0();
    return (
      (ei = function (n) {
        if (((n = t(n)), n > e)) throw new TypeError(n + " exceeds maximum possible timeout");
        return n;
      }),
      ei
    );
  }
  var vu;
  function A0() {
    if (vu) return du;
    vu = 1;
    var t = da(),
      e = Qo,
      n = ga(),
      r = Ad(),
      o = S0(),
      s = An,
      i = Function.prototype,
      a = Math.max,
      l = Math.min,
      c = Object.create;
    return (
      (s.maxAge = function (u, d, f) {
        var h, m, p, b;
        (u = o(u)),
          u &&
            ((h = c(null)),
            (m = (f.async && s.async) || (f.promise && s.promise) ? "async" : ""),
            d.on("set" + m, function (w) {
              (h[w] = setTimeout(function () {
                d.delete(w);
              }, u)),
                typeof h[w].unref == "function" && h[w].unref(),
                b &&
                  (b[w] && b[w] !== "nextTick" && clearTimeout(b[w]),
                  (b[w] = setTimeout(function () {
                    delete b[w];
                  }, p)),
                  typeof b[w].unref == "function" && b[w].unref());
            }),
            d.on("delete" + m, function (w) {
              clearTimeout(h[w]), delete h[w], b && (b[w] !== "nextTick" && clearTimeout(b[w]), delete b[w]);
            }),
            f.preFetch &&
              (f.preFetch === !0 || isNaN(f.preFetch) ? (p = 0.333) : (p = a(l(Number(f.preFetch), 1), 0)),
              p &&
                ((b = {}),
                (p = (1 - p) * u),
                d.on("get" + m, function (w, _, x) {
                  b[w] ||
                    ((b[w] = "nextTick"),
                    n(function () {
                      var k;
                      b[w] === "nextTick" &&
                        (delete b[w],
                        d.delete(w),
                        f.async && ((_ = t(_)), _.push(i)),
                        (k = d.memoized.apply(x, _)),
                        f.promise && r(k) && (typeof k.done == "function" ? k.done(i, i) : k.then(i, i)));
                    }));
                }))),
            d.on("clear" + m, function () {
              e(h, function (w) {
                clearTimeout(w);
              }),
                (h = {}),
                b &&
                  (e(b, function (w) {
                    w !== "nextTick" && clearTimeout(w);
                  }),
                  (b = {}));
            }));
      }),
      du
    );
  }
  var yu = {},
    ni,
    bu;
  function T0() {
    if (bu) return ni;
    bu = 1;
    var t = Sn,
      e = Object.create,
      n = Object.prototype.hasOwnProperty;
    return (
      (ni = function (r) {
        var o = 0,
          s = 1,
          i = e(null),
          a = e(null),
          l = 0,
          c;
        return (
          (r = t(r)),
          {
            hit: function (u) {
              var d = a[u],
                f = ++l;
              if (((i[f] = u), (a[u] = f), !d)) return ++o, o <= r ? void 0 : ((u = i[s]), c(u), u);
              if ((delete i[d], s === d)) for (; !n.call(i, ++s); );
            },
            delete: (c = function (u) {
              var d = a[u];
              if (d && (delete i[d], delete a[u], --o, s === d)) {
                if (!o) {
                  (l = 0), (s = 1);
                  return;
                }
                for (; !n.call(i, ++s); );
              }
            }),
            clear: function () {
              (o = 0), (s = 1), (i = e(null)), (a = e(null)), (l = 0);
            },
          }
        );
      }),
      ni
    );
  }
  var _u;
  function E0() {
    if (_u) return yu;
    _u = 1;
    var t = Sn,
      e = T0(),
      n = An;
    return (
      (n.max = function (r, o, s) {
        var i, a, l;
        (r = t(r)),
          r &&
            ((a = e(r)),
            (i = (s.async && n.async) || (s.promise && n.promise) ? "async" : ""),
            o.on(
              "set" + i,
              (l = function (c) {
                (c = a.hit(c)), c !== void 0 && o.delete(c);
              }),
            ),
            o.on("get" + i, l),
            o.on("delete" + i, a.delete),
            o.on("clear" + i, a.clear));
      }),
      yu
    );
  }
  var wu = {},
    xu;
  function O0() {
    if (xu) return wu;
    xu = 1;
    var t = Tn,
      e = An,
      n = Object.create,
      r = Object.defineProperties;
    return (
      (e.refCounter = function (o, s, i) {
        var a, l;
        (a = n(null)),
          (l = (i.async && e.async) || (i.promise && e.promise) ? "async" : ""),
          s.on("set" + l, function (c, u) {
            a[c] = u || 1;
          }),
          s.on("get" + l, function (c) {
            ++a[c];
          }),
          s.on("delete" + l, function (c) {
            delete a[c];
          }),
          s.on("clear" + l, function () {
            a = {};
          }),
          r(s.memoized, {
            deleteRef: t(function () {
              var c = s.get(arguments);
              return c === null || !a[c] ? null : --a[c] ? !1 : (s.delete(c), !0);
            }),
            getRefCount: t(function () {
              var c = s.get(arguments);
              return c === null || !a[c] ? 0 : a[c];
            }),
          });
      }),
      wu
    );
  }
  var C0 = cd,
    R0 = ud,
    j0 = i0,
    $0 = function (t) {
      var e = C0(arguments[1]),
        n;
      return (
        e.normalizer ||
          ((n = e.length = R0(e.length, t.length, e.async)),
          n !== 0 &&
            (e.primitive
              ? n === !1
                ? (e.normalizer = a0())
                : n > 1 && (e.normalizer = l0()(n))
              : n === !1
                ? (e.normalizer = h0()())
                : n === 1
                  ? (e.normalizer = d0()())
                  : (e.normalizer = p0()(n)))),
        e.async && g0(),
        e.promise && w0(),
        e.dispose && x0(),
        e.maxAge && A0(),
        e.max && E0(),
        e.refCounter && O0(),
        j0(t, e)
      );
    };
  const Xo = jy($0),
    P0 = (t) => {
      if (!t) return [];
      const { border: e, background: n, borderActive: r, backgroundActive: o } = t;
      return [
        `--annotation-bg-color: ${n}`,
        `--annotation-border-color: ${e}`,
        `--annotation-bg-color--active: ${o}`,
        `--annotation-border-color--active: ${r}`,
      ];
    },
    I0 = Xo(P0),
    M0 = { key: 0, class: "annotation-slot annotation-slot--before" },
    L0 = { key: 1 },
    z0 = { key: 2, class: "text" },
    N0 = { key: 3, class: "annotation-slot annotation-slot--after" },
    Td = Nt({
      __name: "RecursiveAnnotatedTokenPartText",
      props: {
        text: {},
        start: {},
        end: {},
        annotations: { default: () => [] },
        annotationClassHandler: { type: Function, default: () => [] },
        wordPartStart: {},
        allowEdit: { type: Boolean },
        allowCreate: { type: Boolean },
      },
      emits: ["annotation-click", "annotation-double-click", "annotation-mouse-move"],
      setup(t, { emit: e }) {
        const n = t,
          r = rt(() => n.annotations[0]),
          o = rt(() => n.allowEdit || n.allowCreate),
          s = e,
          i = (f, h, m) => {
            c(f, { startOffset: h, annotation: r.value, action: m });
          },
          a = (f, h, m) => {
            u(f, { startOffset: h, annotation: r.value, action: m });
          },
          l = (f, h) => {
            d(f, { startOffset: h, annotation: r.value });
          },
          c = (f, h) => {
            s("annotation-click", f, h);
          },
          u = (f, h) => {
            s("annotation-double-click", f, h);
          },
          d = (f, h) => {
            s("annotation-mouse-move", f, h);
          };
        return (f, h) => {
          var m, p, b, w;
          return (
            M(),
            L(
              ut,
              null,
              [
                f.start === ((m = r.value) == null ? void 0 : m.start)
                  ? (M(), L("span", M0, [De(f.$slots, "annotation-before", { annotation: r.value })]))
                  : Pt("", !0),
                f.annotations.length
                  ? (M(),
                    L(
                      "span",
                      {
                        key: 1,
                        class: Lt(n.annotationClassHandler(r.value, f.start, f.end, n.allowCreate)),
                        style: nn(U(I0)(r.value.color)),
                        onMousedown: h[2] || (h[2] = Gr((_) => i(_, f.wordPartStart, "move"), ["stop"])),
                        onMousemove: h[3] || (h[3] = Gr((_) => l(_, f.wordPartStart), ["stop"])),
                        onDblclick: h[4] || (h[4] = (_) => a(_, f.wordPartStart)),
                      },
                      [
                        o.value && f.start === ((p = r.value) == null ? void 0 : p.start)
                          ? (M(),
                            L(
                              "span",
                              {
                                key: 0,
                                class: "handle handle--start",
                                onMousedown: h[0] || (h[0] = Gr((_) => i(_, f.wordPartStart, "moveStart"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                        at(
                          Td,
                          {
                            annotations: f.annotations.slice(1),
                            text: f.text,
                            start: f.start,
                            end: f.end,
                            "allow-edit": f.allowEdit,
                            "word-part-start": f.wordPartStart,
                            "annotation-class-handler": n.annotationClassHandler,
                            onAnnotationClick: c,
                            onAnnotationDoubleClick: u,
                            onAnnotationMouseMove: d,
                          },
                          {
                            "annotation-before": Oe((_) => [
                              De(f.$slots, "annotation-before", { annotation: _.annotation }),
                            ]),
                            "annotation-after": Oe((_) => [
                              De(f.$slots, "annotation-after", { annotation: _.annotation }),
                            ]),
                            _: 3,
                          },
                          8,
                          [
                            "annotations",
                            "text",
                            "start",
                            "end",
                            "allow-edit",
                            "word-part-start",
                            "annotation-class-handler",
                          ],
                        ),
                        f.annotations[0].label ? (M(), L("label", L0, kt(f.annotations[0].label), 1)) : Pt("", !0),
                        o.value && f.end === ((b = f.annotations[0]) == null ? void 0 : b.end)
                          ? (M(),
                            L(
                              "span",
                              {
                                key: 2,
                                class: "handle handle--end",
                                onMousedown: h[1] || (h[1] = Gr((_) => i(_, f.wordPartStart, "moveEnd"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                      ],
                      38,
                    ))
                  : (M(), L("span", z0, kt(f.text), 1)),
                f.end === ((w = r.value) == null ? void 0 : w.end)
                  ? (M(), L("span", N0, [De(f.$slots, "annotation-after", { annotation: r.value })]))
                  : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    D0 = Nt({
      __name: "TextOnly",
      props: { wordPart: {}, allowCreate: { type: Boolean, default: !1 } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = e,
          r = (s, i) => {
            n("annotation-click", s, { startOffset: i == null ? void 0 : i.start });
          },
          o = (s, i) => {
            n("annotation-double-click", s, { startOffset: i == null ? void 0 : i.start });
          };
        return (s, i) => (
          M(),
          L(
            "span",
            {
              class: Lt({ text: !0, "create-anno-text": s.allowCreate }),
              onDblclick: i[0] || (i[0] = (a) => o(a, s.wordPart)),
              onMousedown: i[1] || (i[1] = (a) => r(a, s.wordPart)),
            },
            kt(s.wordPart.text),
            35,
          )
        );
      },
    }),
    F0 = ["onMousemove"],
    B0 = { class: "text" },
    U0 = ["onMousedown", "onMousemove", "onDblclick"],
    V0 = { key: 0 },
    H0 = Nt({
      __name: "AnnotatedLine",
      props: {
        line: {},
        render: { default: "nested" },
        annotationClasses: { type: Function, default: () => [] },
        annotationStyle: {},
        allowEdit: { type: Boolean },
        allowCreate: { type: Boolean },
      },
      emits: ["annotation-click", "annotation-double-click", "annotation-mouse-move"],
      setup(t, { emit: e }) {
        const n = t,
          r = rt(() => n.render === "nested"),
          o = rt(() => n.render === "flat");
        function s(h) {
          return h.sort((m, p) => p.weight - m.weight);
        }
        const i = e,
          a = (h, m, p, b) => {
            u(h, { startOffset: m == null ? void 0 : m.start, annotation: p, action: b });
          },
          l = (h, m, p, b) => {
            d(h, { startOffset: m == null ? void 0 : m.start, annotation: p, action: b });
          },
          c = (h, m, p) => {
            f(h, { startOffset: m == null ? void 0 : m.start, annotation: p });
          },
          u = (h, m) => {
            i("annotation-click", h, m);
          },
          d = (h, m) => {
            i("annotation-double-click", h, m);
          },
          f = (h, m) => {
            i("annotation-mouse-move", h, m);
          };
        return (h, m) => (
          M(!0),
          L(
            ut,
            null,
            qt(
              h.line.words,
              (p) => (
                M(),
                L("span", { key: p.text, class: "token" }, [
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt(
                      p.parts,
                      (b) => (
                        M(),
                        L(
                          "span",
                          {
                            key: b.text,
                            class: Lt(["token-segment", `token-segment--m${b.maxAnnotationWeight}`]),
                            onMousemove: (w) => c(w, b),
                          },
                          [
                            o.value
                              ? (M(),
                                L(
                                  ut,
                                  { key: 0 },
                                  [
                                    j("span", B0, kt(b.text), 1),
                                    (M(!0),
                                    L(
                                      ut,
                                      null,
                                      qt(
                                        b.annotations,
                                        (w) => (
                                          M(),
                                          L(
                                            "span",
                                            {
                                              key: w.id,
                                              class: Lt(h.annotationClasses(w, b.start, b.end, n.allowCreate)),
                                              style: nn(n.annotationStyle(w.color)),
                                              onMousedown: (_) => a(_, b, w, "move"),
                                              onMousemove: (_) => c(_, b, w),
                                              onDblclick: (_) => l(_, b, w),
                                            },
                                            [w.label ? (M(), L("label", V0, kt(w.label), 1)) : Pt("", !0)],
                                            46,
                                            U0,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  64,
                                ))
                              : Pt("", !0),
                            r.value
                              ? (M(),
                                L(
                                  ut,
                                  { key: 1 },
                                  [
                                    b.annotations.length
                                      ? (M(),
                                        Bn(
                                          Td,
                                          {
                                            key: 0,
                                            text: b.text,
                                            start: b.start,
                                            end: b.end,
                                            "allow-edit": h.allowEdit,
                                            "allow-create": h.allowCreate,
                                            "word-part-start": b.start,
                                            annotations: s(b.annotations),
                                            "annotation-class-handler": h.annotationClasses,
                                            onAnnotationClick: u,
                                            onAnnotationDoubleClick: d,
                                            onAnnotationMouseMove: f,
                                          },
                                          {
                                            "annotation-before": Oe((w) => [
                                              De(h.$slots, "annotation-before", { annotation: w.annotation }),
                                            ]),
                                            "annotation-after": Oe((w) => [
                                              De(h.$slots, "annotation-after", { annotation: w.annotation }),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          [
                                            "text",
                                            "start",
                                            "end",
                                            "allow-edit",
                                            "allow-create",
                                            "word-part-start",
                                            "annotations",
                                            "annotation-class-handler",
                                          ],
                                        ))
                                      : (M(),
                                        Bn(
                                          D0,
                                          {
                                            key: 1,
                                            "word-part": b,
                                            "allow-create": h.allowCreate,
                                            onAnnotationClick: u,
                                            onAnnotationDoubleClick: d,
                                          },
                                          null,
                                          8,
                                          ["word-part", "allow-create"],
                                        )),
                                  ],
                                  64,
                                ))
                              : Pt("", !0),
                          ],
                          42,
                          F0,
                        )
                      ),
                    ),
                    128,
                  )),
                ])
              ),
            ),
            128,
          )
        );
      },
    });
  var q0 = typeof global == "object" && global && global.Object === Object && global;
  const Ed = q0;
  var K0 = typeof self == "object" && self && self.Object === Object && self,
    W0 = Ed || K0 || Function("return this")();
  const Re = W0;
  var G0 = Re.Symbol;
  const de = G0;
  var Od = Object.prototype,
    Z0 = Od.hasOwnProperty,
    J0 = Od.toString,
    sr = de ? de.toStringTag : void 0;
  function Q0(t) {
    var e = Z0.call(t, sr),
      n = t[sr];
    try {
      t[sr] = void 0;
      var r = !0;
    } catch {}
    var o = J0.call(t);
    return r && (e ? (t[sr] = n) : delete t[sr]), o;
  }
  var Y0 = Object.prototype,
    X0 = Y0.toString;
  function t_(t) {
    return X0.call(t);
  }
  var e_ = "[object Null]",
    n_ = "[object Undefined]",
    ku = de ? de.toStringTag : void 0;
  function Jn(t) {
    return t == null ? (t === void 0 ? n_ : e_) : ku && ku in Object(t) ? Q0(t) : t_(t);
  }
  function tn(t) {
    return t != null && typeof t == "object";
  }
  var r_ = "[object Symbol]";
  function ts(t) {
    return typeof t == "symbol" || (tn(t) && Jn(t) == r_);
  }
  function o_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var s_ = Array.isArray;
  const ve = s_;
  var i_ = 1 / 0,
    Su = de ? de.prototype : void 0,
    Au = Su ? Su.toString : void 0;
  function Cd(t) {
    if (typeof t == "string") return t;
    if (ve(t)) return o_(t, Cd) + "";
    if (ts(t)) return Au ? Au.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -i_ ? "-0" : e;
  }
  function yn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function Rd(t) {
    return t;
  }
  var a_ = "[object AsyncFunction]",
    l_ = "[object Function]",
    c_ = "[object GeneratorFunction]",
    u_ = "[object Proxy]";
  function jd(t) {
    if (!yn(t)) return !1;
    var e = Jn(t);
    return e == l_ || e == c_ || e == a_ || e == u_;
  }
  var f_ = Re["__core-js_shared__"];
  const ri = f_;
  var Tu = (function () {
    var t = /[^.]+$/.exec((ri && ri.keys && ri.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function h_(t) {
    return !!Tu && Tu in t;
  }
  var d_ = Function.prototype,
    p_ = d_.toString;
  function En(t) {
    if (t != null) {
      try {
        return p_.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var g_ = /[\\^$.*+?()[\]{}|]/g,
    m_ = /^\[object .+?Constructor\]$/,
    v_ = Function.prototype,
    y_ = Object.prototype,
    b_ = v_.toString,
    __ = y_.hasOwnProperty,
    w_ = RegExp(
      "^" +
        b_
          .call(__)
          .replace(g_, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function x_(t) {
    if (!yn(t) || h_(t)) return !1;
    var e = jd(t) ? w_ : m_;
    return e.test(En(t));
  }
  function k_(t, e) {
    return t == null ? void 0 : t[e];
  }
  function On(t, e) {
    var n = k_(t, e);
    return x_(n) ? n : void 0;
  }
  var S_ = On(Re, "WeakMap");
  const Ei = S_;
  var Eu = Object.create,
    A_ = (function () {
      function t() {}
      return function (e) {
        if (!yn(e)) return {};
        if (Eu) return Eu(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  const T_ = A_;
  function E_(t, e, n) {
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
  var O_ = 800,
    C_ = 16,
    R_ = Date.now;
  function j_(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = R_(),
        o = C_ - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= O_) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function $_(t) {
    return function () {
      return t;
    };
  }
  var P_ = (function () {
    try {
      var t = On(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {}
  })();
  const _o = P_;
  var I_ = _o
    ? function (t, e) {
        return _o(t, "toString", { configurable: !0, enumerable: !1, value: $_(e), writable: !0 });
      }
    : Rd;
  const M_ = I_;
  var L_ = j_(M_);
  const z_ = L_;
  function N_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var D_ = 9007199254740991,
    F_ = /^(?:0|[1-9]\d*)$/;
  function ma(t, e) {
    var n = typeof t;
    return (e = e ?? D_), !!e && (n == "number" || (n != "symbol" && F_.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function B_(t, e, n) {
    e == "__proto__" && _o ? _o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function va(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var U_ = Object.prototype,
    V_ = U_.hasOwnProperty;
  function $d(t, e, n) {
    var r = t[e];
    (!(V_.call(t, e) && va(r, n)) || (n === void 0 && !(e in t))) && B_(t, e, n);
  }
  var Ou = Math.max;
  function H_(t, e, n) {
    return (
      (e = Ou(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = Ou(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), E_(t, this, a);
      }
    );
  }
  var q_ = 9007199254740991;
  function ya(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= q_;
  }
  function K_(t) {
    return t != null && ya(t.length) && !jd(t);
  }
  var W_ = Object.prototype;
  function Pd(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || W_;
    return t === n;
  }
  function G_(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var Z_ = "[object Arguments]";
  function Cu(t) {
    return tn(t) && Jn(t) == Z_;
  }
  var Id = Object.prototype,
    J_ = Id.hasOwnProperty,
    Q_ = Id.propertyIsEnumerable,
    Y_ = Cu(
      (function () {
        return arguments;
      })(),
    )
      ? Cu
      : function (t) {
          return tn(t) && J_.call(t, "callee") && !Q_.call(t, "callee");
        };
  const ba = Y_;
  function X_() {
    return !1;
  }
  var Md = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Ru = Md && typeof jt == "object" && jt && !jt.nodeType && jt,
    t1 = Ru && Ru.exports === Md,
    ju = t1 ? Re.Buffer : void 0,
    e1 = ju ? ju.isBuffer : void 0,
    n1 = e1 || X_;
  const wo = n1;
  var r1 = "[object Arguments]",
    o1 = "[object Array]",
    s1 = "[object Boolean]",
    i1 = "[object Date]",
    a1 = "[object Error]",
    l1 = "[object Function]",
    c1 = "[object Map]",
    u1 = "[object Number]",
    f1 = "[object Object]",
    h1 = "[object RegExp]",
    d1 = "[object Set]",
    p1 = "[object String]",
    g1 = "[object WeakMap]",
    m1 = "[object ArrayBuffer]",
    v1 = "[object DataView]",
    y1 = "[object Float32Array]",
    b1 = "[object Float64Array]",
    _1 = "[object Int8Array]",
    w1 = "[object Int16Array]",
    x1 = "[object Int32Array]",
    k1 = "[object Uint8Array]",
    S1 = "[object Uint8ClampedArray]",
    A1 = "[object Uint16Array]",
    T1 = "[object Uint32Array]",
    Ot = {};
  Ot[y1] = Ot[b1] = Ot[_1] = Ot[w1] = Ot[x1] = Ot[k1] = Ot[S1] = Ot[A1] = Ot[T1] = !0;
  Ot[r1] =
    Ot[o1] =
    Ot[m1] =
    Ot[s1] =
    Ot[v1] =
    Ot[i1] =
    Ot[a1] =
    Ot[l1] =
    Ot[c1] =
    Ot[u1] =
    Ot[f1] =
    Ot[h1] =
    Ot[d1] =
    Ot[p1] =
    Ot[g1] =
      !1;
  function E1(t) {
    return tn(t) && ya(t.length) && !!Ot[Jn(t)];
  }
  function _a(t) {
    return function (e) {
      return t(e);
    };
  }
  var Ld = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    _r = Ld && typeof jt == "object" && jt && !jt.nodeType && jt,
    O1 = _r && _r.exports === Ld,
    oi = O1 && Ed.process,
    C1 = (function () {
      try {
        var t = _r && _r.require && _r.require("util").types;
        return t || (oi && oi.binding && oi.binding("util"));
      } catch {}
    })();
  const Kn = C1;
  var $u = Kn && Kn.isTypedArray,
    R1 = $u ? _a($u) : E1;
  const zd = R1;
  var j1 = Object.prototype,
    $1 = j1.hasOwnProperty;
  function P1(t, e) {
    var n = ve(t),
      r = !n && ba(t),
      o = !n && !r && wo(t),
      s = !n && !r && !o && zd(t),
      i = n || r || o || s,
      a = i ? G_(t.length, String) : [],
      l = a.length;
    for (var c in t)
      $1.call(t, c) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            ma(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function Nd(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var I1 = Nd(Object.keys, Object);
  const M1 = I1;
  var L1 = Object.prototype,
    z1 = L1.hasOwnProperty;
  function N1(t) {
    if (!Pd(t)) return M1(t);
    var e = [];
    for (var n in Object(t)) z1.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function Dd(t) {
    return K_(t) ? P1(t) : N1(t);
  }
  var D1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    F1 = /^\w*$/;
  function wa(t, e) {
    if (ve(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || ts(t)
      ? !0
      : F1.test(t) || !D1.test(t) || (e != null && t in Object(e));
  }
  var B1 = On(Object, "create");
  const jr = B1;
  function U1() {
    (this.__data__ = jr ? jr(null) : {}), (this.size = 0);
  }
  function V1(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var H1 = "__lodash_hash_undefined__",
    q1 = Object.prototype,
    K1 = q1.hasOwnProperty;
  function W1(t) {
    var e = this.__data__;
    if (jr) {
      var n = e[t];
      return n === H1 ? void 0 : n;
    }
    return K1.call(e, t) ? e[t] : void 0;
  }
  var G1 = Object.prototype,
    Z1 = G1.hasOwnProperty;
  function J1(t) {
    var e = this.__data__;
    return jr ? e[t] !== void 0 : Z1.call(e, t);
  }
  var Q1 = "__lodash_hash_undefined__";
  function Y1(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = jr && e === void 0 ? Q1 : e), this;
  }
  function bn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  bn.prototype.clear = U1;
  bn.prototype.delete = V1;
  bn.prototype.get = W1;
  bn.prototype.has = J1;
  bn.prototype.set = Y1;
  function X1() {
    (this.__data__ = []), (this.size = 0);
  }
  function es(t, e) {
    for (var n = t.length; n--; ) if (va(t[n][0], e)) return n;
    return -1;
  }
  var tw = Array.prototype,
    ew = tw.splice;
  function nw(t) {
    var e = this.__data__,
      n = es(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : ew.call(e, n, 1), --this.size, !0;
  }
  function rw(t) {
    var e = this.__data__,
      n = es(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function ow(t) {
    return es(this.__data__, t) > -1;
  }
  function sw(t, e) {
    var n = this.__data__,
      r = es(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function Ue(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Ue.prototype.clear = X1;
  Ue.prototype.delete = nw;
  Ue.prototype.get = rw;
  Ue.prototype.has = ow;
  Ue.prototype.set = sw;
  var iw = On(Re, "Map");
  const $r = iw;
  function aw() {
    (this.size = 0), (this.__data__ = { hash: new bn(), map: new ($r || Ue)(), string: new bn() });
  }
  function lw(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function ns(t, e) {
    var n = t.__data__;
    return lw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function cw(t) {
    var e = ns(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function uw(t) {
    return ns(this, t).get(t);
  }
  function fw(t) {
    return ns(this, t).has(t);
  }
  function hw(t, e) {
    var n = ns(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function Ve(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Ve.prototype.clear = aw;
  Ve.prototype.delete = cw;
  Ve.prototype.get = uw;
  Ve.prototype.has = fw;
  Ve.prototype.set = hw;
  var dw = "Expected a function";
  function xa(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(dw);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (xa.Cache || Ve)()), n;
  }
  xa.Cache = Ve;
  var pw = 500;
  function gw(t) {
    var e = xa(t, function (r) {
        return n.size === pw && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var mw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    vw = /\\(\\)?/g,
    yw = gw(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(mw, function (n, r, o, s) {
          e.push(o ? s.replace(vw, "$1") : r || n);
        }),
        e
      );
    });
  const bw = yw;
  function _w(t) {
    return t == null ? "" : Cd(t);
  }
  function rs(t, e) {
    return ve(t) ? t : wa(t, e) ? [t] : bw(_w(t));
  }
  var ww = 1 / 0;
  function Dr(t) {
    if (typeof t == "string" || ts(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -ww ? "-0" : e;
  }
  function ka(t, e) {
    e = rs(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Dr(e[n++])];
    return n && n == r ? t : void 0;
  }
  function xw(t, e, n) {
    var r = t == null ? void 0 : ka(t, e);
    return r === void 0 ? n : r;
  }
  function Fd(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var Pu = de ? de.isConcatSpreadable : void 0;
  function kw(t) {
    return ve(t) || ba(t) || !!(Pu && t && t[Pu]);
  }
  function Sw(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = kw), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? Fd(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function Aw(t) {
    var e = t == null ? 0 : t.length;
    return e ? Sw(t) : [];
  }
  function Tw(t) {
    return z_(H_(t, void 0, Aw), t + "");
  }
  var Ew = Nd(Object.getPrototypeOf, Object);
  const Ow = Ew;
  function Cw() {
    (this.__data__ = new Ue()), (this.size = 0);
  }
  function Rw(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function jw(t) {
    return this.__data__.get(t);
  }
  function $w(t) {
    return this.__data__.has(t);
  }
  var Pw = 200;
  function Iw(t, e) {
    var n = this.__data__;
    if (n instanceof Ue) {
      var r = n.__data__;
      if (!$r || r.length < Pw - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new Ve(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Ae(t) {
    var e = (this.__data__ = new Ue(t));
    this.size = e.size;
  }
  Ae.prototype.clear = Cw;
  Ae.prototype.delete = Rw;
  Ae.prototype.get = jw;
  Ae.prototype.has = $w;
  Ae.prototype.set = Iw;
  var Bd = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Iu = Bd && typeof jt == "object" && jt && !jt.nodeType && jt,
    Mw = Iu && Iu.exports === Bd,
    Mu = Mw ? Re.Buffer : void 0;
  Mu && Mu.allocUnsafe;
  function Lw(t, e) {
    return t.slice();
  }
  function zw(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function Nw() {
    return [];
  }
  var Dw = Object.prototype,
    Fw = Dw.propertyIsEnumerable,
    Lu = Object.getOwnPropertySymbols,
    Bw = Lu
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              zw(Lu(t), function (e) {
                return Fw.call(t, e);
              }));
        }
      : Nw;
  const Uw = Bw;
  function Vw(t, e, n) {
    var r = e(t);
    return ve(t) ? r : Fd(r, n(t));
  }
  function Oi(t) {
    return Vw(t, Dd, Uw);
  }
  var Hw = On(Re, "DataView");
  const Ci = Hw;
  var qw = On(Re, "Promise");
  const Ri = qw;
  var Kw = On(Re, "Set");
  const ji = Kw;
  var zu = "[object Map]",
    Ww = "[object Object]",
    Nu = "[object Promise]",
    Du = "[object Set]",
    Fu = "[object WeakMap]",
    Bu = "[object DataView]",
    Gw = En(Ci),
    Zw = En($r),
    Jw = En(Ri),
    Qw = En(ji),
    Yw = En(Ei),
    dn = Jn;
  ((Ci && dn(new Ci(new ArrayBuffer(1))) != Bu) ||
    ($r && dn(new $r()) != zu) ||
    (Ri && dn(Ri.resolve()) != Nu) ||
    (ji && dn(new ji()) != Du) ||
    (Ei && dn(new Ei()) != Fu)) &&
    (dn = function (t) {
      var e = Jn(t),
        n = e == Ww ? t.constructor : void 0,
        r = n ? En(n) : "";
      if (r)
        switch (r) {
          case Gw:
            return Bu;
          case Zw:
            return zu;
          case Jw:
            return Nu;
          case Qw:
            return Du;
          case Yw:
            return Fu;
        }
      return e;
    });
  const Pr = dn;
  var Xw = Object.prototype,
    tx = Xw.hasOwnProperty;
  function ex(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && tx.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var nx = Re.Uint8Array;
  const xo = nx;
  function Sa(t) {
    var e = new t.constructor(t.byteLength);
    return new xo(e).set(new xo(t)), e;
  }
  function rx(t, e) {
    var n = Sa(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var ox = /\w*$/;
  function sx(t) {
    var e = new t.constructor(t.source, ox.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Uu = de ? de.prototype : void 0,
    Vu = Uu ? Uu.valueOf : void 0;
  function ix(t) {
    return Vu ? Object(Vu.call(t)) : {};
  }
  function ax(t, e) {
    var n = Sa(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var lx = "[object Boolean]",
    cx = "[object Date]",
    ux = "[object Map]",
    fx = "[object Number]",
    hx = "[object RegExp]",
    dx = "[object Set]",
    px = "[object String]",
    gx = "[object Symbol]",
    mx = "[object ArrayBuffer]",
    vx = "[object DataView]",
    yx = "[object Float32Array]",
    bx = "[object Float64Array]",
    _x = "[object Int8Array]",
    wx = "[object Int16Array]",
    xx = "[object Int32Array]",
    kx = "[object Uint8Array]",
    Sx = "[object Uint8ClampedArray]",
    Ax = "[object Uint16Array]",
    Tx = "[object Uint32Array]";
  function Ex(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case mx:
        return Sa(t);
      case lx:
      case cx:
        return new r(+t);
      case vx:
        return rx(t);
      case yx:
      case bx:
      case _x:
      case wx:
      case xx:
      case kx:
      case Sx:
      case Ax:
      case Tx:
        return ax(t);
      case ux:
        return new r();
      case fx:
      case px:
        return new r(t);
      case hx:
        return sx(t);
      case dx:
        return new r();
      case gx:
        return ix(t);
    }
  }
  function Ox(t) {
    return typeof t.constructor == "function" && !Pd(t) ? T_(Ow(t)) : {};
  }
  var Cx = "[object Map]";
  function Rx(t) {
    return tn(t) && Pr(t) == Cx;
  }
  var Hu = Kn && Kn.isMap,
    jx = Hu ? _a(Hu) : Rx;
  const $x = jx;
  var Px = "[object Set]";
  function Ix(t) {
    return tn(t) && Pr(t) == Px;
  }
  var qu = Kn && Kn.isSet,
    Mx = qu ? _a(qu) : Ix;
  const Lx = Mx;
  var zx = 1,
    Ud = "[object Arguments]",
    Nx = "[object Array]",
    Dx = "[object Boolean]",
    Fx = "[object Date]",
    Bx = "[object Error]",
    Vd = "[object Function]",
    Ux = "[object GeneratorFunction]",
    Vx = "[object Map]",
    Hx = "[object Number]",
    Hd = "[object Object]",
    qx = "[object RegExp]",
    Kx = "[object Set]",
    Wx = "[object String]",
    Gx = "[object Symbol]",
    Zx = "[object WeakMap]",
    Jx = "[object ArrayBuffer]",
    Qx = "[object DataView]",
    Yx = "[object Float32Array]",
    Xx = "[object Float64Array]",
    tk = "[object Int8Array]",
    ek = "[object Int16Array]",
    nk = "[object Int32Array]",
    rk = "[object Uint8Array]",
    ok = "[object Uint8ClampedArray]",
    sk = "[object Uint16Array]",
    ik = "[object Uint32Array]",
    At = {};
  At[Ud] =
    At[Nx] =
    At[Jx] =
    At[Qx] =
    At[Dx] =
    At[Fx] =
    At[Yx] =
    At[Xx] =
    At[tk] =
    At[ek] =
    At[nk] =
    At[Vx] =
    At[Hx] =
    At[Hd] =
    At[qx] =
    At[Kx] =
    At[Wx] =
    At[Gx] =
    At[rk] =
    At[ok] =
    At[sk] =
    At[ik] =
      !0;
  At[Bx] = At[Vd] = At[Zx] = !1;
  function co(t, e, n, r, o, s) {
    var i,
      a = e & zx;
    if (i !== void 0) return i;
    if (!yn(t)) return t;
    var l = ve(t);
    if (l) i = ex(t);
    else {
      var c = Pr(t),
        u = c == Vd || c == Ux;
      if (wo(t)) return Lw(t);
      if (c == Hd || c == Ud || (u && !o)) i = u ? {} : Ox(t);
      else {
        if (!At[c]) return o ? t : {};
        i = Ex(t, c);
      }
    }
    s || (s = new Ae());
    var d = s.get(t);
    if (d) return d;
    s.set(t, i),
      Lx(t)
        ? t.forEach(function (m) {
            i.add(co(m, e, n, m, t, s));
          })
        : $x(t) &&
          t.forEach(function (m, p) {
            i.set(p, co(m, e, n, p, t, s));
          });
    var f = Oi,
      h = l ? void 0 : f(t);
    return (
      N_(h || t, function (m, p) {
        h && ((p = m), (m = t[p])), $d(i, p, co(m, e, n, p, t, s));
      }),
      i
    );
  }
  var ak = 1,
    lk = 4;
  function $i(t) {
    return co(t, ak | lk);
  }
  var ck = "__lodash_hash_undefined__";
  function uk(t) {
    return this.__data__.set(t, ck), this;
  }
  function fk(t) {
    return this.__data__.has(t);
  }
  function ko(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.__data__ = new Ve(); ++e < n; ) this.add(t[e]);
  }
  ko.prototype.add = ko.prototype.push = uk;
  ko.prototype.has = fk;
  function hk(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function dk(t, e) {
    return t.has(e);
  }
  var pk = 1,
    gk = 2;
  function qd(t, e, n, r, o, s) {
    var i = n & pk,
      a = t.length,
      l = e.length;
    if (a != l && !(i && l > a)) return !1;
    var c = s.get(t),
      u = s.get(e);
    if (c && u) return c == e && u == t;
    var d = -1,
      f = !0,
      h = n & gk ? new ko() : void 0;
    for (s.set(t, e), s.set(e, t); ++d < a; ) {
      var m = t[d],
        p = e[d];
      if (r) var b = i ? r(p, m, d, e, t, s) : r(m, p, d, t, e, s);
      if (b !== void 0) {
        if (b) continue;
        f = !1;
        break;
      }
      if (h) {
        if (
          !hk(e, function (w, _) {
            if (!dk(h, _) && (m === w || o(m, w, n, r, s))) return h.push(_);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(m === p || o(m, p, n, r, s))) {
        f = !1;
        break;
      }
    }
    return s.delete(t), s.delete(e), f;
  }
  function mk(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r, o) {
        n[++e] = [o, r];
      }),
      n
    );
  }
  function vk(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r) {
        n[++e] = r;
      }),
      n
    );
  }
  var yk = 1,
    bk = 2,
    _k = "[object Boolean]",
    wk = "[object Date]",
    xk = "[object Error]",
    kk = "[object Map]",
    Sk = "[object Number]",
    Ak = "[object RegExp]",
    Tk = "[object Set]",
    Ek = "[object String]",
    Ok = "[object Symbol]",
    Ck = "[object ArrayBuffer]",
    Rk = "[object DataView]",
    Ku = de ? de.prototype : void 0,
    si = Ku ? Ku.valueOf : void 0;
  function jk(t, e, n, r, o, s, i) {
    switch (n) {
      case Rk:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case Ck:
        return !(t.byteLength != e.byteLength || !s(new xo(t), new xo(e)));
      case _k:
      case wk:
      case Sk:
        return va(+t, +e);
      case xk:
        return t.name == e.name && t.message == e.message;
      case Ak:
      case Ek:
        return t == e + "";
      case kk:
        var a = mk;
      case Tk:
        var l = r & yk;
        if ((a || (a = vk), t.size != e.size && !l)) return !1;
        var c = i.get(t);
        if (c) return c == e;
        (r |= bk), i.set(t, e);
        var u = qd(a(t), a(e), r, o, s, i);
        return i.delete(t), u;
      case Ok:
        if (si) return si.call(t) == si.call(e);
    }
    return !1;
  }
  var $k = 1,
    Pk = Object.prototype,
    Ik = Pk.hasOwnProperty;
  function Mk(t, e, n, r, o, s) {
    var i = n & $k,
      a = Oi(t),
      l = a.length,
      c = Oi(e),
      u = c.length;
    if (l != u && !i) return !1;
    for (var d = l; d--; ) {
      var f = a[d];
      if (!(i ? f in e : Ik.call(e, f))) return !1;
    }
    var h = s.get(t),
      m = s.get(e);
    if (h && m) return h == e && m == t;
    var p = !0;
    s.set(t, e), s.set(e, t);
    for (var b = i; ++d < l; ) {
      f = a[d];
      var w = t[f],
        _ = e[f];
      if (r) var x = i ? r(_, w, f, e, t, s) : r(w, _, f, t, e, s);
      if (!(x === void 0 ? w === _ || o(w, _, n, r, s) : x)) {
        p = !1;
        break;
      }
      b || (b = f == "constructor");
    }
    if (p && !b) {
      var k = t.constructor,
        E = e.constructor;
      k != E &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof k == "function" && k instanceof k && typeof E == "function" && E instanceof E) &&
        (p = !1);
    }
    return s.delete(t), s.delete(e), p;
  }
  var Lk = 1,
    Wu = "[object Arguments]",
    Gu = "[object Array]",
    to = "[object Object]",
    zk = Object.prototype,
    Zu = zk.hasOwnProperty;
  function Nk(t, e, n, r, o, s) {
    var i = ve(t),
      a = ve(e),
      l = i ? Gu : Pr(t),
      c = a ? Gu : Pr(e);
    (l = l == Wu ? to : l), (c = c == Wu ? to : c);
    var u = l == to,
      d = c == to,
      f = l == c;
    if (f && wo(t)) {
      if (!wo(e)) return !1;
      (i = !0), (u = !1);
    }
    if (f && !u) return s || (s = new Ae()), i || zd(t) ? qd(t, e, n, r, o, s) : jk(t, e, l, n, r, o, s);
    if (!(n & Lk)) {
      var h = u && Zu.call(t, "__wrapped__"),
        m = d && Zu.call(e, "__wrapped__");
      if (h || m) {
        var p = h ? t.value() : t,
          b = m ? e.value() : e;
        return s || (s = new Ae()), o(p, b, n, r, s);
      }
    }
    return f ? (s || (s = new Ae()), Mk(t, e, n, r, o, s)) : !1;
  }
  function Aa(t, e, n, r, o) {
    return t === e ? !0 : t == null || e == null || (!tn(t) && !tn(e)) ? t !== t && e !== e : Nk(t, e, n, r, Aa, o);
  }
  var Dk = 1,
    Fk = 2;
  function Bk(t, e, n, r) {
    var o = n.length,
      s = o;
    if (t == null) return !s;
    for (t = Object(t); o--; ) {
      var i = n[o];
      if (i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
    }
    for (; ++o < s; ) {
      i = n[o];
      var a = i[0],
        l = t[a],
        c = i[1];
      if (i[2]) {
        if (l === void 0 && !(a in t)) return !1;
      } else {
        var u = new Ae(),
          d;
        if (!(d === void 0 ? Aa(c, l, Dk | Fk, r, u) : d)) return !1;
      }
    }
    return !0;
  }
  function Kd(t) {
    return t === t && !yn(t);
  }
  function Uk(t) {
    for (var e = Dd(t), n = e.length; n--; ) {
      var r = e[n],
        o = t[r];
      e[n] = [r, o, Kd(o)];
    }
    return e;
  }
  function Wd(t, e) {
    return function (n) {
      return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
  }
  function Vk(t) {
    var e = Uk(t);
    return e.length == 1 && e[0][2]
      ? Wd(e[0][0], e[0][1])
      : function (n) {
          return n === t || Bk(n, t, e);
        };
  }
  function Hk(t, e) {
    return t != null && e in Object(t);
  }
  function qk(t, e, n) {
    e = rs(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = Dr(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && ya(o) && ma(i, o) && (ve(t) || ba(t)));
  }
  function Gd(t, e) {
    return t != null && qk(t, e, Hk);
  }
  var Kk = 1,
    Wk = 2;
  function Gk(t, e) {
    return wa(t) && Kd(e)
      ? Wd(Dr(t), e)
      : function (n) {
          var r = xw(n, t);
          return r === void 0 && r === e ? Gd(n, t) : Aa(e, r, Kk | Wk);
        };
  }
  function Zk(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function Jk(t) {
    return function (e) {
      return ka(e, t);
    };
  }
  function Qk(t) {
    return wa(t) ? Zk(Dr(t)) : Jk(t);
  }
  function Yk(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? Rd
        : typeof t == "object"
          ? ve(t)
            ? Gk(t[0], t[1])
            : Vk(t)
          : Qk(t);
  }
  function Xk(t, e) {
    return t > e;
  }
  function tS(t, e, n) {
    for (var r = -1, o = t.length; ++r < o; ) {
      var s = t[r],
        i = e(s);
      if (i != null && (a === void 0 ? i === i && !ts(i) : n(i, a)))
        var a = i,
          l = s;
    }
    return l;
  }
  function eS(t, e) {
    return t && t.length ? tS(t, Yk(e), Xk) : void 0;
  }
  function nS(t, e, n, r) {
    if (!yn(t)) return t;
    e = rs(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = Dr(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = yn(u) ? u : ma(e[o + 1]) ? [] : {});
      }
      $d(a, l, c), (a = a[l]);
    }
    return t;
  }
  function rS(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = ka(t, i);
      n(a, i) && nS(s, rs(i, t), a);
    }
    return s;
  }
  function oS(t, e) {
    return rS(t, e, function (n, r) {
      return Gd(t, r);
    });
  }
  var sS = Tw(function (t, e) {
    return t == null ? {} : oS(t, e);
  });
  const Pi = sS,
    iS = ["weight", "class", "color", "startsOnLine", "endsOnLine"],
    aS = ["defaultClass", "weightClass", "endClass", "startClass"],
    lS = (t, e) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        t.startsOnLine ? e.startClass : null,
        t.endsOnLine ? e.endClass : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((n) => !!n),
    cS = Xo(lS, { normalizer: (t) => JSON.stringify(t) }),
    uS = (t, e) => cS(Pi(t, iS), Pi(e, aS)),
    fS = { class: "gutter-annotations" },
    hS = ["onClick", "onDblclick"],
    dS = { key: 0 },
    pS = { key: 0, class: "gutter text" },
    gS = Nt({
      __name: "AnnotatedGutters",
      props: { gutter: { default: null }, annotationStyle: { default: null } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = uS,
          r = e,
          o = (i, a) => {
            r("annotation-click", i, { startOffset: 0, annotation: a });
          },
          s = (i, a) => {
            r("annotation-double-click", i, { startOffset: 0, annotation: a });
          };
        return (i, a) => {
          var l, c;
          return (
            M(),
            L(
              ut,
              null,
              [
                j("div", fS, [
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt((l = i.gutter) == null ? void 0 : l.annotations, (u) => {
                      var d;
                      return (
                        M(),
                        L(
                          "span",
                          {
                            key: u,
                            class: Lt(U(n)(u, i.annotationStyle)),
                            style: nn({ "--gutter-bg-color": (d = u.color) == null ? void 0 : d.background }),
                            onClick: (f) => o(f, u),
                            onDblclick: (f) => s(f, u),
                          },
                          [u.label ? (M(), L("label", dS, kt(u.label), 1)) : Pt("", !0)],
                          46,
                          hS,
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                i.gutter ? (M(), L("div", pS, kt((c = i.gutter) == null ? void 0 : c.text), 1)) : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    eo = (t, e) => {
      if (document.caretPositionFromPoint) {
        const n = document.caretPositionFromPoint(t, e);
        return n
          ? {
              offsetNode: n.offsetNode,
              offset: n.offset,
              getClientRect() {
                return n.getClientRect();
              },
            }
          : null;
      } else {
        const n = document.caretRangeFromPoint(t, e);
        return n
          ? {
              offsetNode: n.startContainer,
              offset: n.startOffset,
              getClientRect() {
                return n.getClientRects()[0];
              },
            }
          : null;
      }
    };
  function mS(t) {
    const e = [[0, []]];
    for (const r of t) {
      let o = e.length - 1;
      for (; o >= 0; --o) {
        const i = e[o];
        if (i[0] <= r[0]) {
          i[0] < r[0] && (e.splice(o + 1, 0, [r[0], e[o][1].slice()]), (o += 1));
          break;
        }
      }
      let s = e.length - 1;
      for (; s >= 0; --s) {
        const i = e[s];
        if (i[0] <= r[1]) {
          i[0] < r[1] && (e.splice(s + 1, 0, [r[1], i[1].slice()]), (s += 1));
          break;
        }
      }
      for (let i = o; i < s; ++i) e[i][1].push(r[2]);
    }
    const n = [];
    for (let r = 0; r < e.length - 1; ++r) e[r][1].length > 0 && n.push([e[r][0], e[r + 1][0], e[r][1]]);
    return n;
  }
  const Zd = class ur {
    constructor() {
      lt(this, "_verboseEnabled"), lt(this, "_debugEnabled");
    }
    static get instance() {
      return ur._instance || (ur._instance = new ur()), ur._instance;
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
    static debug(...e) {
      this.debugEnabled && console.log(e);
    }
    static verbose(...e) {
      this.verboseEnabled && console.debug(e);
    }
  };
  lt(Zd, "_instance");
  let vt = Zd;
  const vS = 1,
    Ju = (t, e) => {
      const n = t[0] < e[0] ? t : e,
        r = n == t ? e : t;
      return n[1] < r[0] ? null : [r[0], n[1] < r[1] ? n[1] : r[1]];
    };
  class yS {
    constructor(e, n, r) {
      lt(this, "props"),
        lt(this, "editState"),
        lt(this, "createState"),
        lt(
          this,
          "allAnnotations",
          rt(() => {
            vt.debug("** refresh annotations");
            const o = $i(this.props.annotations);
            return (
              this.editState.annotation && o.push(this.editState.annotation),
              this.createState.annotation && o.push(this.createState.annotation),
              o
            );
          }),
        ),
        lt(
          this,
          "gutterAnnotations",
          rt(() => {
            vt.debug("** refresh gutterAnnotations **");
            const o = this.allAnnotations.value.filter((s) => s.target === "gutter");
            return vt.debug(o), o;
          }),
        ),
        lt(this, "prepareRanges", (o) => {
          vt.debug("** prepare ranges for_annotations **"), vt.debug(o);
          const s = o.filter((i) => i.target === "text");
          return (
            this.props.autoAnnotationWeights &&
              (this.calculateAnnotationWeights(s), this.calculateGutterAnnotationWeights(this.gutterAnnotations.value)),
            vt.debug("** weighted span annotations **"),
            vt.debug(s),
            vt.debug("** weighted gutter annotations **"),
            vt.debug(this.gutterAnnotations.value),
            o.map((i) => [
              Math.max(0, i.start - this.props.annotationOffset),
              i.end + vS - this.props.annotationOffset,
              i,
            ])
          );
        }),
        lt(this, "calculateAnnotationWeights", function (o) {
          const s = function (a, l) {
            return a.start - l.start === 0 ? l.end - a.end : a.start - l.start;
          };
          o = o.sort(s);
          const i = [];
          o.forEach((a) => {
            let l = 0;
            for (;;) {
              if (!(i != null && i[l])) {
                (a.weight = l), (i[l] = a);
                return;
              }
              if (a.start > i[l].end) {
                (a.weight = l), (i[l] = a);
                return;
              }
              l++;
            }
          });
        }),
        lt(this, "calculateGutterAnnotationWeights", (o) => {
          const s = function (l, c) {
            const u = l.end - l.start,
              d = c.end - c.start;
            return u - d;
          };
          o = o.sort(s);
          let i = 0;
          o.forEach(function (l) {
            (l.weight = i), i++;
          });
          const a = Math.max(...this.gutterAnnotations.value.map((l) => l.weight));
          o.forEach(function (l) {
            l.weight = a - l.weight;
          });
        }),
        lt(
          this,
          "flattenedRanges",
          rt(() => {
            let o = this.prepareRanges(this.allAnnotations.value);
            return (
              this.props.lines.forEach((s) => {
                o.push([s.start, s.end + 1, null]);
                const i = s.text.split(" ");
                let a = 0;
                i.forEach((l, c) => {
                  const u = s.start + a,
                    d = c < i.length - 1 ? u + l.length + 1 : u + l.length;
                  o.push([u, d + 1, null]), (a += l.length + 1);
                });
              }),
              (o = o.sort((s, i) =>
                Number(s[0]) - Number(i[0]) === 0 ? Number(s[1]) - Number(i[1]) : Number(s[0]) - Number(i[0]),
              )),
              mS(o)
            );
          }),
        ),
        lt(this, "createAnnotatedWord", (o) => {
          let s = this.flattenedRanges.value.filter((l) => Ju([l[0], l[1] - 1], [o.start, o.end]));
          const i = this.props.display;
          s = s.map(function (l) {
            return (
              (l[2] = l[2]
                .filter((c) => c)
                .filter((c) => (c == null ? void 0 : c.target) === i)
                .sort((c, u) =>
                  Number(c == null ? void 0 : c.start) > Number(u == null ? void 0 : u.start) ? 1 : -1,
                )),
              l
            );
          });
          const a = s.map((l) => {
            var c;
            const u = l[2];
            return {
              start: l[0],
              end: l[1] - 1,
              text: typeof o.text == "string" ? o.text.substring(l[0] - o.start, l[1] - o.start) : "",
              annotations: u,
              maxAnnotationWeight: ((c = eS(u, (d) => d.weight)) == null ? void 0 : c.weight) ?? 0,
            };
          });
          return { start: o.start, end: o.end, text: o.text, parts: a };
        }),
        lt(this, "createAnnotatedLine", (o) => {
          let s = [];
          const i = this.flattenedRanges.value.filter((f) => Ju([f[0], f[1] - 1], [o.start, o.end]));
          for (const f of i)
            f[2]
              .filter((h) => h)
              .filter((h) => (h == null ? void 0 : h.target) === "gutter")
              .sort((h, m) => (Number(h == null ? void 0 : h.weight) < Number(m == null ? void 0 : m.weight) ? -1 : 1))
              .forEach((h) => s.push(h));
          s = [...new Set(s)];
          const a = Math.max(...this.gutterAnnotations.value.map((f) => f.weight));
          for (let f = 0; f <= a; f++)
            if (s.filter((h) => h.weight === f).length == 0) {
              const h = {
                start: o.start,
                end: o.start,
                target: "gutter",
                class: "annotation--gutter-spacer",
                weight: f,
              };
              s.push(h);
            }
          s.map((f) => {
            const h = $i(f);
            return (
              (f.startsOnLine = o.start <= f.start && o.end >= f.start),
              (f.endsOnLine = o.start <= f.end && o.end >= f.end),
              h
            );
          }).sort((f, h) => (Number(f == null ? void 0 : f.weight) < Number(h == null ? void 0 : h.weight) ? -1 : 1));
          const l = [];
          let c = 0;
          const u = o.text.split(" ");
          u.forEach((f, h) => {
            l.push({ start: o.start + c, end: o.start + c + f.length, text: h < u.length - 1 ? f + " " : f }),
              (c += h < u.length - 1 ? f.length + 1 : f.length);
          });
          const d = [];
          return (
            l.forEach((f) => {
              d.push(this.createAnnotatedWord(f));
            }),
            { start: o.start, end: o.end, words: d, gutter: { text: o.gutter, annotations: s } }
          );
        }),
        lt(
          this,
          "annotatedLines",
          rt(() => {
            const o = this.props.lines.map((s) => this.createAnnotatedLine(s));
            return vt.debug("** annotated lines **"), vt.debug(o), o;
          }),
        ),
        (this.props = e),
        (this.editState = n),
        (this.createState = r);
    }
  }
  const bS = (t, e, n, r) =>
      [
        "annotated-text",
        `theme-${t}`,
        `annotated-text--render-${e}`,
        r ? `action--active action--${r}` : null,
        n ? "annotated-text--show-labels" : null,
      ].filter((o) => o),
    _S = Xo(bS),
    wS = ["weight", "color", "class"],
    xS = (t, e, n, r, o, s, i, a, l) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        n ? e.startClass : null,
        r ? e.endClass : null,
        o ? e.transitioningClass : null,
        s ? e.shadowClass : null,
        i ? e.hoveredClass : null,
        a ? e.activeClass : null,
        l ? "create-anno-text" : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((c) => c),
    kS = Xo(xS, { normalizer: (t) => JSON.stringify(t) }),
    SS = (t, e, n, r, o, s, i, a) => {
      const l = e && t === e,
        c = e && t.id === e.id && t !== e,
        u = a.includes(t.id),
        d = i.includes(t.id);
      return kS(Pi(t, wS), n, (t == null ? void 0 : t.start) === r, (t == null ? void 0 : t.end) === o, c, l, u, d, s);
    };
  class AS {
    constructor(e, n) {
      lt(this, "props"),
        lt(this, "editAnnotationState"),
        lt(
          this,
          "componentClasses",
          rt(() => {
            const { theme: r, render: o, showLabels: s } = this.props,
              { action: i } = this.editAnnotationState;
            return _S(r, o, s, i);
          }),
        ),
        lt(this, "annotationClasses", (r, o, s, i) => {
          const { style: a, selectedAnnotations: l, hoveredAnnotations: c } = this.props;
          return SS(r, this.editAnnotationState.annotation, a, o, s, i, l, c);
        }),
        (this.props = e),
        (this.editAnnotationState = n);
    }
  }
  var Dt = ((t) => (
    (t.IDLE = "idle"),
    (t.SELECTING = "selecting"),
    (t.UPDATING = "updating"),
    (t.CREATING = "creating"),
    (t.START_SELECT = "start-selecting"),
    (t.START_CREATE = "start-creating"),
    t
  ))(Dt || {});
  class TS {
    constructor(e) {
      lt(this, "newEnd"),
        lt(this, "newStart"),
        lt(this, "annotation"),
        lt(this, "creating"),
        lt(this, "userState"),
        (this.userState = e),
        this.resetCreating();
    }
    resetCreating() {
      (this.creating = !1),
        (this.annotation = null),
        (this.newEnd = null),
        (this.newStart = null),
        (this.creating = !1),
        (this.userState.state = Dt.IDLE);
    }
    startCreating(e) {
      (this.creating = !0), (this.newStart = e), (this.newEnd = e);
    }
    initAnnotation(e) {
      (this.annotation = e), (this.annotation.start = this.newStart), (this.annotation.end = this.newEnd);
    }
    updateCreating() {
      (this.annotation.start = this.newStart), (this.annotation.end = this.newEnd);
    }
  }
  class ES {
    constructor() {
      lt(this, "hoveredAnnotations"), lt(this, "mouseEvent"), (this.hoveredAnnotations = []), (this.mouseEvent = null);
    }
  }
  class OS {
    constructor(e) {
      lt(this, "action"),
        lt(this, "handlePosition"),
        lt(this, "annotation"),
        lt(this, "origAnnotation"),
        lt(this, "origEnd"),
        lt(this, "origStart"),
        lt(this, "newEnd"),
        lt(this, "newStart"),
        lt(this, "updating", !1),
        lt(this, "userState"),
        (this.userState = e),
        this.resetUpdate();
    }
    resetUpdate() {
      (this.action = null),
        (this.handlePosition = null),
        (this.annotation = null),
        (this.origAnnotation = null),
        (this.origEnd = null),
        (this.origStart = null),
        (this.newEnd = null),
        (this.newStart = null),
        (this.updating = !1),
        (this.userState.state = Dt.IDLE),
        (this.updating = !1);
    }
    startUpdating(e, n, r, o = null, s = null, i, a) {
      (this.action = e),
        (this.handlePosition = n),
        (this.origAnnotation = r),
        (this.annotation = $i(r)),
        (this.origEnd = o),
        (this.origStart = s),
        (this.newEnd = i),
        (this.newStart = a);
    }
    confirmStartUpdating() {
      (this.userState.state = Dt.UPDATING), (this.updating = !0), this.confirmUpdate();
    }
    confirmUpdate() {
      this.updating && ((this.annotation.start = this.newStart), (this.annotation.end = this.newEnd));
    }
  }
  class CS {
    constructor() {
      lt(this, "state"), lt(this, "payload"), (this.state = Dt.IDLE), (this.payload = null);
    }
    reset() {
      (this.state = Dt.IDLE), (this.payload = null);
    }
  }
  const RS = () => {
    const t = ct(new CS()),
      e = ct(new OS(t.value)),
      n = ct(new TS(t.value)),
      r = ct(new ES());
    return { updateState: e, createState: n, hoverState: r, userState: t };
  };
  function Me(t) {
    const e = ca();
    if (!e) return !1;
    const n = e.vnode.props;
    return n ? !!(n[hr(t)] || n[hr(ae(t))]) : !1;
  }
  const jS = { class: "content" },
    Ii = Nt({
      __name: "AnnotatedText",
      props: {
        annotations: { default: () => [] },
        selectedAnnotations: { default: () => [] },
        hoveredAnnotations: { default: () => [] },
        lines: { default: () => [] },
        annotationOffset: { default: 0 },
        debug: { type: Boolean, default: !1 },
        verbose: { type: Boolean, default: !1 },
        theme: { default: "default" },
        render: { default: "nested" },
        display: { default: "text" },
        showLabels: { type: Boolean, default: !1 },
        autoAnnotationWeights: { type: Boolean, default: !0 },
        style: {
          default: () => ({
            defaultClass: "annotation",
            activeClass: "annotation--active",
            startClass: "annotation--start",
            endClass: "annotation--end",
            weightClass: "annotation--weight-",
            transitioningClass: "annotation--transitioning",
            shadowClass: "annotation--shadow",
            hoveredClass: "annotation--hover",
          }),
        },
        allowEdit: { type: Boolean, default: !1 },
        allowCreate: { type: Boolean, default: !1 },
      },
      emits: [
        "annotation-select",
        "annotation-click",
        "annotation-double-click",
        "annotation-update-begin",
        "annotation-updating",
        "annotation-update-end",
        "annotation-create-begin",
        "annotation-creating",
        "annotation-create-end",
        "key-pressed",
        "annotation-mouse-over",
        "annotation-mouse-leave",
        "user-action-state-change",
      ],
      setup(t, { emit: e }) {
        let n = t;
        n = Gn(n);
        const r = e,
          o = RS(),
          { updateState: s, createState: i, userState: a, hoverState: l } = o,
          c = rt(() => a.value.state),
          u = new yS(n, s.value, i.value);
        $h(() => {
          vt.setDebug(n.debug), vt.setVerbose(n.verbose);
        });
        const d = Me("annotationUpdateBegin"),
          f = Me("annotationUpdating");
        Me("annotationUpdateEnd");
        const h = Me("annotationCreateBegin"),
          m = Me("annotationCreating");
        Me("annotationCreateEnd");
        const p = Me("keyPressed");
        Me("annotationClick"), Me("annotationDoubleClick");
        const b = new AS(n, s.value),
          w = b.annotationClasses,
          _ = b.componentClasses;
        Se(c, (g, S) => {
          vt.verbose("user-action-state-change", S, g), r("user-action-state-change", S, g);
        }),
          typeof window < "u" &&
            window.addEventListener("keyup", (g) => {
              if (p) vt.verbose("key-pressed", g.key, s.value, i.value), r("key-pressed", g, s.value, i.value, a.value);
              else
                switch (g.key) {
                  case "Escape":
                    s.value.resetUpdate();
                }
            });
        const x = new Map(),
          k = new Map(),
          E = new Map();
        function z(g, S) {
          var R;
          vt.verbose("@onClick", "userState:", a.value.state, S),
            (R = x.get(a.value.state)) == null || R(g, S),
            r("annotation-click", S);
        }
        function W(g, S) {
          vt.verbose("@onDoubleClick", "userState:", a.value.state, S),
            g.preventDefault(),
            r("annotation-double-click", S);
        }
        function V(g, S) {
          var R;
          vt.verbose(
            "@onMouseMove",
            "userState:",
            g,
            a.value.state,
            S,
            (R = S == null ? void 0 : S.annotation) == null ? void 0 : R.id,
          ),
            E.get(a.value.state) && E.get(a.value.state)(g, S);
        }
        function X(g) {
          vt.verbose("@onMouseUp", "userState:", a.value.state), k.get(a.value.state) && k.get(a.value.state)(g);
        }
        function A(g, S) {
          vt.verbose("@onMouseLeave", "userState:", a.value.state),
            s.value.updating && s.value.resetUpdate(),
            i.value.creating && i.value.resetCreating();
        }
        return (
          x.set(Dt.IDLE, (g, S) => {
            if (S != null && S.annotation) {
              (a.value.state = Dt.START_SELECT), (a.value.payload = S);
              return;
            }
            if (S != null && S.startOffset) {
              (a.value.state = Dt.START_CREATE), (a.value.payload = S);
              return;
            }
          }),
          k.set(Dt.START_SELECT, (g) => {
            vt.verbose("annotation-select", a.value.payload.annotation),
              r("annotation-select", a.value.payload.annotation, g),
              a.value.reset();
          }),
          k.set(Dt.START_CREATE, (g) => {
            a.value.reset();
          }),
          E.set(Dt.START_CREATE, (g, S) => {
            if (n.allowCreate) {
              const R = S.startOffset + eo(g.x, g.y).offset;
              if ((i.value.startCreating(R), h))
                vt.verbose("*emit annotation-create-begin", i.value), r("annotation-create-begin", i.value);
              else {
                const J = {
                  id: Ry(),
                  start: i.value.newStart,
                  end: i.value.newStart,
                  class: "annotation annotation--color-1",
                  target: "text",
                };
                i.value.initAnnotation(J);
              }
              a.value.state = Dt.CREATING;
            }
          }),
          E.set(Dt.CREATING, (g, S) => {
            const R = eo(g.x, g.y);
            if (R) {
              const J = S.startOffset + R.offset;
              i.value.newStart <= J &&
                ((i.value.newEnd = J),
                m
                  ? (vt.verbose("*emit annotation-creating", i.value), r("annotation-creating", i.value))
                  : i.value.updateCreating());
            }
          }),
          k.set(Dt.CREATING, (g) => {
            vt.verbose("*emit annotation-create-end", i.value),
              r("annotation-create-end", i.value),
              i.value.resetCreating();
          }),
          E.set(Dt.START_SELECT, (g, S) => {
            if (!n.allowEdit) return;
            const R = eo(g.x, g.y);
            R &&
              (s.value.startUpdating(
                a.value.payload.action,
                a.value.payload.startOffset + R.offset,
                a.value.payload.annotation,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
              ),
              d
                ? (vt.verbose("*emit annotation-update-begin", s.value), r("annotation-update-begin", s.value))
                : s.value.confirmStartUpdating());
          }),
          E.set(Dt.UPDATING, (g, S) => {
            const R = eo(g.x, g.y);
            let J = !1;
            if (R) {
              const et = S.startOffset + R.offset,
                q = et - s.value.handlePosition;
              switch (
                ((s.value.newStart = s.value.annotation.start),
                (s.value.newEnd = s.value.annotation.end),
                s.value.action)
              ) {
                case "moveEnd":
                  et >= s.value.annotation.start && ((s.value.newEnd = et), (J = !0));
                  break;
                case "moveStart":
                  et <= s.value.annotation.end && ((s.value.newStart = et), (J = !0));
                  break;
                default:
                case "move":
                  s.value.newStart != s.value.origStart + q &&
                    ((s.value.newStart = s.value.origStart + q), (s.value.newEnd = s.value.origEnd + q), (J = !0));
                  break;
              }
              J &&
                (f
                  ? (vt.verbose("*emit annotation-updating", s.value), r("annotation-updating", s.value))
                  : s.value.confirmUpdate());
            }
          }),
          k.set(Dt.UPDATING, (g) => {
            vt.verbose("*emit annotation-update-end", s.value),
              r("annotation-update-end", s.value),
              s.value.resetUpdate();
          }),
          E.set(Dt.IDLE, (g, S) => {
            if (S != null && S.annotation) {
              const R = S.annotation;
              l.value.hoveredAnnotations.some((J) => J.id === R.id) ||
                (l.value.hoveredAnnotations.push(R),
                vt.verbose("annotation-mouse-over", R.id),
                r("annotation-mouse-over", R, g));
            } else
              l.value.hoveredAnnotations.map((R) => {
                vt.verbose("annotation-mouse-leave", R.id), r("annotation-mouse-leave", R, g);
              }),
                (l.value.hoveredAnnotations = []);
          }),
          (g, S) =>
            U(u).annotatedLines.value.length
              ? (M(),
                L(
                  "div",
                  {
                    key: 0,
                    class: Lt(U(_)),
                    onMouseleave: S[0] || (S[0] = (R) => A()),
                    onMouseup: S[1] || (S[1] = (R) => X(R)),
                  },
                  [
                    (M(!0),
                    L(
                      ut,
                      null,
                      qt(
                        U(u).annotatedLines.value,
                        (R) => (
                          M(),
                          L(
                            ut,
                            { key: R },
                            [
                              at(
                                gS,
                                {
                                  gutter: R.gutter,
                                  "annotation-style": g.style,
                                  onAnnotationClick: z,
                                  onAnnotationDoubleClick: W,
                                },
                                null,
                                8,
                                ["gutter", "annotation-style"],
                              ),
                              j("div", jS, [
                                at(
                                  H0,
                                  {
                                    line: R,
                                    "allow-edit": g.allowEdit,
                                    "allow-create": g.allowCreate,
                                    "annotation-classes": U(w),
                                    render: g.render,
                                    onAnnotationClick: z,
                                    onAnnotationDoubleClick: W,
                                    onAnnotationMouseMove: V,
                                  },
                                  {
                                    "annotation-before": Oe((J) => [
                                      De(g.$slots, "annotation-before", { annotation: J.annotation }),
                                    ]),
                                    "annotation-after": Oe((J) => [
                                      De(g.$slots, "annotation-after", { annotation: J.annotation }),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["line", "allow-edit", "allow-create", "annotation-classes", "render"],
                                ),
                              ]),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  34,
                ))
              : Pt("", !0)
        );
      },
    }),
    $S = { opacity: { background: 0.3, border: 0.3, backgroundActive: 0.3, borderActive: 0.9, gutter: 0.8 } },
    PS = (t) => {
      const e = parseInt(t.slice(1), 16),
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        o = e & 255;
      return `${n},${r},${o}`;
    },
    IS = (t, e) => {
      const n = { ...$S.opacity },
        r = PS(t);
      return {
        border: `rgba(${r},${n.border})`,
        background: `rgba(${r},${n.border})`,
        borderActive: `rgba(${r},${n.border})`,
        backgroundActive: `color-mix(in srgb, white, ${t} ${n.backgroundActive * 100})`,
        gutterColor: `rgba(${r},${n.gutter})`,
      };
    },
    MS = (t, e) => {
      const n = {};
      return (
        Object.entries(t).forEach(([r, o]) => {
          n[r] = IS(o);
        }),
        n
      );
    };
  function LS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function zS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function NS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function DS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function FS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function BS(t, e) {
    return (
      M(),
      L(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          j("path", {
            "fill-rule": "evenodd",
            d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  var Jd = typeof global == "object" && global && global.Object === Object && global,
    US = typeof self == "object" && self && self.Object === Object && self,
    je = Jd || US || Function("return this")(),
    Ce = je.Symbol,
    Qd = Object.prototype,
    VS = Qd.hasOwnProperty,
    HS = Qd.toString,
    ir = Ce ? Ce.toStringTag : void 0;
  function qS(t) {
    var e = VS.call(t, ir),
      n = t[ir];
    try {
      t[ir] = void 0;
      var r = !0;
    } catch {}
    var o = HS.call(t);
    return r && (e ? (t[ir] = n) : delete t[ir]), o;
  }
  var KS = Object.prototype,
    WS = KS.toString;
  function GS(t) {
    return WS.call(t);
  }
  var ZS = "[object Null]",
    JS = "[object Undefined]",
    Qu = Ce ? Ce.toStringTag : void 0;
  function Qn(t) {
    return t == null ? (t === void 0 ? JS : ZS) : Qu && Qu in Object(t) ? qS(t) : GS(t);
  }
  function Yn(t) {
    return t != null && typeof t == "object";
  }
  var QS = "[object Symbol]";
  function Ta(t) {
    return typeof t == "symbol" || (Yn(t) && Qn(t) == QS);
  }
  function YS(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var an = Array.isArray,
    XS = 1 / 0,
    Yu = Ce ? Ce.prototype : void 0,
    Xu = Yu ? Yu.toString : void 0;
  function Yd(t) {
    if (typeof t == "string") return t;
    if (an(t)) return YS(t, Yd) + "";
    if (Ta(t)) return Xu ? Xu.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -XS ? "-0" : e;
  }
  function _n(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function tA(t) {
    return t;
  }
  var eA = "[object AsyncFunction]",
    nA = "[object Function]",
    rA = "[object GeneratorFunction]",
    oA = "[object Proxy]";
  function Xd(t) {
    if (!_n(t)) return !1;
    var e = Qn(t);
    return e == nA || e == rA || e == eA || e == oA;
  }
  var ii = je["__core-js_shared__"],
    tf = (function () {
      var t = /[^.]+$/.exec((ii && ii.keys && ii.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function sA(t) {
    return !!tf && tf in t;
  }
  var iA = Function.prototype,
    aA = iA.toString;
  function Cn(t) {
    if (t != null) {
      try {
        return aA.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var lA = /[\\^$.*+?()[\]{}|]/g,
    cA = /^\[object .+?Constructor\]$/,
    uA = Function.prototype,
    fA = Object.prototype,
    hA = uA.toString,
    dA = fA.hasOwnProperty,
    pA = RegExp(
      "^" +
        hA
          .call(dA)
          .replace(lA, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function gA(t) {
    if (!_n(t) || sA(t)) return !1;
    var e = Xd(t) ? pA : cA;
    return e.test(Cn(t));
  }
  function mA(t, e) {
    return t == null ? void 0 : t[e];
  }
  function Rn(t, e) {
    var n = mA(t, e);
    return gA(n) ? n : void 0;
  }
  var Mi = Rn(je, "WeakMap"),
    ef = Object.create,
    vA = (function () {
      function t() {}
      return function (e) {
        if (!_n(e)) return {};
        if (ef) return ef(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function yA(t, e, n) {
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
  function bA(t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
    return e;
  }
  var _A = 800,
    wA = 16,
    xA = Date.now;
  function kA(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = xA(),
        o = wA - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= _A) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function SA(t) {
    return function () {
      return t;
    };
  }
  var So = (function () {
      try {
        var t = Rn(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    AA = So
      ? function (t, e) {
          return So(t, "toString", { configurable: !0, enumerable: !1, value: SA(e), writable: !0 });
        }
      : tA,
    TA = kA(AA);
  function EA(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var OA = 9007199254740991,
    CA = /^(?:0|[1-9]\d*)$/;
  function Ea(t, e) {
    var n = typeof t;
    return (e = e ?? OA), !!e && (n == "number" || (n != "symbol" && CA.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function tp(t, e, n) {
    e == "__proto__" && So ? So(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function ep(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var RA = Object.prototype,
    jA = RA.hasOwnProperty;
  function Oa(t, e, n) {
    var r = t[e];
    (!(jA.call(t, e) && ep(r, n)) || (n === void 0 && !(e in t))) && tp(t, e, n);
  }
  function os(t, e, n, r) {
    var o = !n;
    n || (n = {});
    for (var s = -1, i = e.length; ++s < i; ) {
      var a = e[s],
        l = void 0;
      l === void 0 && (l = t[a]), o ? tp(n, a, l) : Oa(n, a, l);
    }
    return n;
  }
  var nf = Math.max;
  function $A(t, e, n) {
    return (
      (e = nf(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = nf(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), yA(t, this, a);
      }
    );
  }
  var PA = 9007199254740991;
  function Ca(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= PA;
  }
  function np(t) {
    return t != null && Ca(t.length) && !Xd(t);
  }
  var IA = Object.prototype;
  function Ra(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || IA;
    return t === n;
  }
  function MA(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var LA = "[object Arguments]";
  function rf(t) {
    return Yn(t) && Qn(t) == LA;
  }
  var rp = Object.prototype,
    zA = rp.hasOwnProperty,
    NA = rp.propertyIsEnumerable,
    ja = rf(
      (function () {
        return arguments;
      })(),
    )
      ? rf
      : function (t) {
          return Yn(t) && zA.call(t, "callee") && !NA.call(t, "callee");
        };
  function DA() {
    return !1;
  }
  var op = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    of = op && typeof jt == "object" && jt && !jt.nodeType && jt,
    FA = of && of.exports === op,
    sf = FA ? je.Buffer : void 0,
    BA = sf ? sf.isBuffer : void 0,
    sp = BA || DA,
    UA = "[object Arguments]",
    VA = "[object Array]",
    HA = "[object Boolean]",
    qA = "[object Date]",
    KA = "[object Error]",
    WA = "[object Function]",
    GA = "[object Map]",
    ZA = "[object Number]",
    JA = "[object Object]",
    QA = "[object RegExp]",
    YA = "[object Set]",
    XA = "[object String]",
    tT = "[object WeakMap]",
    eT = "[object ArrayBuffer]",
    nT = "[object DataView]",
    rT = "[object Float32Array]",
    oT = "[object Float64Array]",
    sT = "[object Int8Array]",
    iT = "[object Int16Array]",
    aT = "[object Int32Array]",
    lT = "[object Uint8Array]",
    cT = "[object Uint8ClampedArray]",
    uT = "[object Uint16Array]",
    fT = "[object Uint32Array]",
    Ct = {};
  Ct[rT] = Ct[oT] = Ct[sT] = Ct[iT] = Ct[aT] = Ct[lT] = Ct[cT] = Ct[uT] = Ct[fT] = !0;
  Ct[UA] =
    Ct[VA] =
    Ct[eT] =
    Ct[HA] =
    Ct[nT] =
    Ct[qA] =
    Ct[KA] =
    Ct[WA] =
    Ct[GA] =
    Ct[ZA] =
    Ct[JA] =
    Ct[QA] =
    Ct[YA] =
    Ct[XA] =
    Ct[tT] =
      !1;
  function hT(t) {
    return Yn(t) && Ca(t.length) && !!Ct[Qn(t)];
  }
  function $a(t) {
    return function (e) {
      return t(e);
    };
  }
  var ip = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    wr = ip && typeof jt == "object" && jt && !jt.nodeType && jt,
    dT = wr && wr.exports === ip,
    ai = dT && Jd.process,
    Wn = (function () {
      try {
        var t = wr && wr.require && wr.require("util").types;
        return t || (ai && ai.binding && ai.binding("util"));
      } catch {}
    })(),
    af = Wn && Wn.isTypedArray,
    pT = af ? $a(af) : hT,
    gT = Object.prototype,
    mT = gT.hasOwnProperty;
  function ap(t, e) {
    var n = an(t),
      r = !n && ja(t),
      o = !n && !r && sp(t),
      s = !n && !r && !o && pT(t),
      i = n || r || o || s,
      a = i ? MA(t.length, String) : [],
      l = a.length;
    for (var c in t)
      (e || mT.call(t, c)) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            Ea(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function lp(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var vT = lp(Object.keys, Object),
    yT = Object.prototype,
    bT = yT.hasOwnProperty;
  function _T(t) {
    if (!Ra(t)) return vT(t);
    var e = [];
    for (var n in Object(t)) bT.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function Pa(t) {
    return np(t) ? ap(t) : _T(t);
  }
  function wT(t) {
    var e = [];
    if (t != null) for (var n in Object(t)) e.push(n);
    return e;
  }
  var xT = Object.prototype,
    kT = xT.hasOwnProperty;
  function ST(t) {
    if (!_n(t)) return wT(t);
    var e = Ra(t),
      n = [];
    for (var r in t) (r == "constructor" && (e || !kT.call(t, r))) || n.push(r);
    return n;
  }
  function Ia(t) {
    return np(t) ? ap(t, !0) : ST(t);
  }
  var AT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    TT = /^\w*$/;
  function ET(t, e) {
    if (an(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || Ta(t)
      ? !0
      : TT.test(t) || !AT.test(t) || (e != null && t in Object(e));
  }
  var Ir = Rn(Object, "create");
  function OT() {
    (this.__data__ = Ir ? Ir(null) : {}), (this.size = 0);
  }
  function CT(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var RT = "__lodash_hash_undefined__",
    jT = Object.prototype,
    $T = jT.hasOwnProperty;
  function PT(t) {
    var e = this.__data__;
    if (Ir) {
      var n = e[t];
      return n === RT ? void 0 : n;
    }
    return $T.call(e, t) ? e[t] : void 0;
  }
  var IT = Object.prototype,
    MT = IT.hasOwnProperty;
  function LT(t) {
    var e = this.__data__;
    return Ir ? e[t] !== void 0 : MT.call(e, t);
  }
  var zT = "__lodash_hash_undefined__";
  function NT(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Ir && e === void 0 ? zT : e), this;
  }
  function wn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  wn.prototype.clear = OT;
  wn.prototype.delete = CT;
  wn.prototype.get = PT;
  wn.prototype.has = LT;
  wn.prototype.set = NT;
  function DT() {
    (this.__data__ = []), (this.size = 0);
  }
  function ss(t, e) {
    for (var n = t.length; n--; ) if (ep(t[n][0], e)) return n;
    return -1;
  }
  var FT = Array.prototype,
    BT = FT.splice;
  function UT(t) {
    var e = this.__data__,
      n = ss(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : BT.call(e, n, 1), --this.size, !0;
  }
  function VT(t) {
    var e = this.__data__,
      n = ss(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function HT(t) {
    return ss(this.__data__, t) > -1;
  }
  function qT(t, e) {
    var n = this.__data__,
      r = ss(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function He(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  He.prototype.clear = DT;
  He.prototype.delete = UT;
  He.prototype.get = VT;
  He.prototype.has = HT;
  He.prototype.set = qT;
  var Mr = Rn(je, "Map");
  function KT() {
    (this.size = 0), (this.__data__ = { hash: new wn(), map: new (Mr || He)(), string: new wn() });
  }
  function WT(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function is(t, e) {
    var n = t.__data__;
    return WT(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function GT(t) {
    var e = is(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function ZT(t) {
    return is(this, t).get(t);
  }
  function JT(t) {
    return is(this, t).has(t);
  }
  function QT(t, e) {
    var n = is(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function ln(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  ln.prototype.clear = KT;
  ln.prototype.delete = GT;
  ln.prototype.get = ZT;
  ln.prototype.has = JT;
  ln.prototype.set = QT;
  var YT = "Expected a function";
  function Ma(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(YT);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (Ma.Cache || ln)()), n;
  }
  Ma.Cache = ln;
  var XT = 500;
  function tE(t) {
    var e = Ma(t, function (r) {
        return n.size === XT && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var eE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    nE = /\\(\\)?/g,
    rE = tE(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(eE, function (n, r, o, s) {
          e.push(o ? s.replace(nE, "$1") : r || n);
        }),
        e
      );
    });
  function oE(t) {
    return t == null ? "" : Yd(t);
  }
  function as(t, e) {
    return an(t) ? t : ET(t, e) ? [t] : rE(oE(t));
  }
  var sE = 1 / 0;
  function La(t) {
    if (typeof t == "string" || Ta(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -sE ? "-0" : e;
  }
  function iE(t, e) {
    e = as(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[La(e[n++])];
    return n && n == r ? t : void 0;
  }
  function za(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var lf = Ce ? Ce.isConcatSpreadable : void 0;
  function aE(t) {
    return an(t) || ja(t) || !!(lf && t && t[lf]);
  }
  function lE(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = aE), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? za(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function cE(t) {
    var e = t == null ? 0 : t.length;
    return e ? lE(t) : [];
  }
  function uE(t) {
    return TA($A(t, void 0, cE), t + "");
  }
  var cp = lp(Object.getPrototypeOf, Object);
  function fE() {
    (this.__data__ = new He()), (this.size = 0);
  }
  function hE(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function dE(t) {
    return this.__data__.get(t);
  }
  function pE(t) {
    return this.__data__.has(t);
  }
  var gE = 200;
  function mE(t, e) {
    var n = this.__data__;
    if (n instanceof He) {
      var r = n.__data__;
      if (!Mr || r.length < gE - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new ln(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Xn(t) {
    var e = (this.__data__ = new He(t));
    this.size = e.size;
  }
  Xn.prototype.clear = fE;
  Xn.prototype.delete = hE;
  Xn.prototype.get = dE;
  Xn.prototype.has = pE;
  Xn.prototype.set = mE;
  function vE(t, e) {
    return t && os(e, Pa(e), t);
  }
  function yE(t, e) {
    return t && os(e, Ia(e), t);
  }
  var up = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    cf = up && typeof jt == "object" && jt && !jt.nodeType && jt,
    bE = cf && cf.exports === up,
    uf = bE ? je.Buffer : void 0,
    ff = uf ? uf.allocUnsafe : void 0;
  function _E(t, e) {
    if (e) return t.slice();
    var n = t.length,
      r = ff ? ff(n) : new t.constructor(n);
    return t.copy(r), r;
  }
  function wE(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function fp() {
    return [];
  }
  var xE = Object.prototype,
    kE = xE.propertyIsEnumerable,
    hf = Object.getOwnPropertySymbols,
    Na = hf
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              wE(hf(t), function (e) {
                return kE.call(t, e);
              }));
        }
      : fp;
  function SE(t, e) {
    return os(t, Na(t), e);
  }
  var AE = Object.getOwnPropertySymbols,
    hp = AE
      ? function (t) {
          for (var e = []; t; ) za(e, Na(t)), (t = cp(t));
          return e;
        }
      : fp;
  function TE(t, e) {
    return os(t, hp(t), e);
  }
  function dp(t, e, n) {
    var r = e(t);
    return an(t) ? r : za(r, n(t));
  }
  function EE(t) {
    return dp(t, Pa, Na);
  }
  function OE(t) {
    return dp(t, Ia, hp);
  }
  var Li = Rn(je, "DataView"),
    zi = Rn(je, "Promise"),
    Ni = Rn(je, "Set"),
    df = "[object Map]",
    CE = "[object Object]",
    pf = "[object Promise]",
    gf = "[object Set]",
    mf = "[object WeakMap]",
    vf = "[object DataView]",
    RE = Cn(Li),
    jE = Cn(Mr),
    $E = Cn(zi),
    PE = Cn(Ni),
    IE = Cn(Mi),
    ze = Qn;
  ((Li && ze(new Li(new ArrayBuffer(1))) != vf) ||
    (Mr && ze(new Mr()) != df) ||
    (zi && ze(zi.resolve()) != pf) ||
    (Ni && ze(new Ni()) != gf) ||
    (Mi && ze(new Mi()) != mf)) &&
    (ze = function (t) {
      var e = Qn(t),
        n = e == CE ? t.constructor : void 0,
        r = n ? Cn(n) : "";
      if (r)
        switch (r) {
          case RE:
            return vf;
          case jE:
            return df;
          case $E:
            return pf;
          case PE:
            return gf;
          case IE:
            return mf;
        }
      return e;
    });
  var ME = Object.prototype,
    LE = ME.hasOwnProperty;
  function zE(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && LE.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var yf = je.Uint8Array;
  function Da(t) {
    var e = new t.constructor(t.byteLength);
    return new yf(e).set(new yf(t)), e;
  }
  function NE(t, e) {
    var n = e ? Da(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var DE = /\w*$/;
  function FE(t) {
    var e = new t.constructor(t.source, DE.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var bf = Ce ? Ce.prototype : void 0,
    _f = bf ? bf.valueOf : void 0;
  function BE(t) {
    return _f ? Object(_f.call(t)) : {};
  }
  function UE(t, e) {
    var n = e ? Da(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var VE = "[object Boolean]",
    HE = "[object Date]",
    qE = "[object Map]",
    KE = "[object Number]",
    WE = "[object RegExp]",
    GE = "[object Set]",
    ZE = "[object String]",
    JE = "[object Symbol]",
    QE = "[object ArrayBuffer]",
    YE = "[object DataView]",
    XE = "[object Float32Array]",
    tO = "[object Float64Array]",
    eO = "[object Int8Array]",
    nO = "[object Int16Array]",
    rO = "[object Int32Array]",
    oO = "[object Uint8Array]",
    sO = "[object Uint8ClampedArray]",
    iO = "[object Uint16Array]",
    aO = "[object Uint32Array]";
  function lO(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case QE:
        return Da(t);
      case VE:
      case HE:
        return new r(+t);
      case YE:
        return NE(t, n);
      case XE:
      case tO:
      case eO:
      case nO:
      case rO:
      case oO:
      case sO:
      case iO:
      case aO:
        return UE(t, n);
      case qE:
        return new r();
      case KE:
      case ZE:
        return new r(t);
      case WE:
        return FE(t);
      case GE:
        return new r();
      case JE:
        return BE(t);
    }
  }
  function cO(t) {
    return typeof t.constructor == "function" && !Ra(t) ? vA(cp(t)) : {};
  }
  var uO = "[object Map]";
  function fO(t) {
    return Yn(t) && ze(t) == uO;
  }
  var wf = Wn && Wn.isMap,
    hO = wf ? $a(wf) : fO,
    dO = "[object Set]";
  function pO(t) {
    return Yn(t) && ze(t) == dO;
  }
  var xf = Wn && Wn.isSet,
    gO = xf ? $a(xf) : pO,
    mO = 1,
    vO = 2,
    yO = 4,
    pp = "[object Arguments]",
    bO = "[object Array]",
    _O = "[object Boolean]",
    wO = "[object Date]",
    xO = "[object Error]",
    gp = "[object Function]",
    kO = "[object GeneratorFunction]",
    SO = "[object Map]",
    AO = "[object Number]",
    mp = "[object Object]",
    TO = "[object RegExp]",
    EO = "[object Set]",
    OO = "[object String]",
    CO = "[object Symbol]",
    RO = "[object WeakMap]",
    jO = "[object ArrayBuffer]",
    $O = "[object DataView]",
    PO = "[object Float32Array]",
    IO = "[object Float64Array]",
    MO = "[object Int8Array]",
    LO = "[object Int16Array]",
    zO = "[object Int32Array]",
    NO = "[object Uint8Array]",
    DO = "[object Uint8ClampedArray]",
    FO = "[object Uint16Array]",
    BO = "[object Uint32Array]",
    Tt = {};
  Tt[pp] =
    Tt[bO] =
    Tt[jO] =
    Tt[$O] =
    Tt[_O] =
    Tt[wO] =
    Tt[PO] =
    Tt[IO] =
    Tt[MO] =
    Tt[LO] =
    Tt[zO] =
    Tt[SO] =
    Tt[AO] =
    Tt[mp] =
    Tt[TO] =
    Tt[EO] =
    Tt[OO] =
    Tt[CO] =
    Tt[NO] =
    Tt[DO] =
    Tt[FO] =
    Tt[BO] =
      !0;
  Tt[xO] = Tt[gp] = Tt[RO] = !1;
  function uo(t, e, n, r, o, s) {
    var i,
      a = e & mO,
      l = e & vO,
      c = e & yO;
    if (i !== void 0) return i;
    if (!_n(t)) return t;
    var u = an(t);
    if (u) {
      if (((i = zE(t)), !a)) return bA(t, i);
    } else {
      var d = ze(t),
        f = d == gp || d == kO;
      if (sp(t)) return _E(t, a);
      if (d == mp || d == pp || (f && !o)) {
        if (((i = l || f ? {} : cO(t)), !a)) return l ? TE(t, yE(i, t)) : SE(t, vE(i, t));
      } else {
        if (!Tt[d]) return o ? t : {};
        i = lO(t, d, a);
      }
    }
    s || (s = new Xn());
    var h = s.get(t);
    if (h) return h;
    s.set(t, i),
      gO(t)
        ? t.forEach(function (b) {
            i.add(uo(b, e, n, b, t, s));
          })
        : hO(t) &&
          t.forEach(function (b, w) {
            i.set(w, uo(b, e, n, w, t, s));
          });
    var m = c ? (l ? OE : EE) : l ? Ia : Pa,
      p = u ? void 0 : m(t);
    return (
      EA(p || t, function (b, w) {
        p && ((w = b), (b = t[w])), Oa(i, w, uo(b, e, n, w, t, s));
      }),
      i
    );
  }
  var UO = 1,
    VO = 4;
  function Ye(t) {
    return uo(t, UO | VO);
  }
  function HO(t, e) {
    return t != null && e in Object(t);
  }
  function qO(t, e, n) {
    e = as(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = La(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && Ca(o) && Ea(i, o) && (an(t) || ja(t)));
  }
  function KO(t, e) {
    return t != null && qO(t, e, HO);
  }
  function WO(t, e, n, r) {
    if (!_n(t)) return t;
    e = as(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = La(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = _n(u) ? u : Ea(e[o + 1]) ? [] : {});
      }
      Oa(a, l, c), (a = a[l]);
    }
    return t;
  }
  function GO(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = iE(t, i);
      n(a, i) && WO(s, as(i, t), a);
    }
    return s;
  }
  function ZO(t, e) {
    return GO(t, e, function (n, r) {
      return KO(t, r);
    });
  }
  var vp = uE(function (t, e) {
    return t == null ? {} : ZO(t, e);
  });
  const yp = (t, e) => {
      const n = t.__vccOpts || t;
      for (const [r, o] of e) n[r] = o;
      return n;
    },
    JO = {},
    QO = {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "h-6 w-6",
    };
  function YO(t, e) {
    return (
      M(),
      L(
        "svg",
        QO,
        e[0] ||
          (e[0] = [
            j(
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
  const XO = yp(JO, [["render", YO]]),
    bp = (t, e, n) => {
      const r = [];
      let o = 0;
      return (
        t.forEach((s) => {
          ((e >= s.start && e < s.end) || (n > s.start && n <= s.end) || (e < s.start && n > s.end)) &&
            (r.push(s), e >= s.start && e < s.end && (o = e - s.start));
        }),
        { lines: r, offset: o }
      );
    };
  function tC(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function no(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var _p = { exports: {} };
  (function (t, e) {
    (function (n) {
      t.exports = n();
    })(function () {
      return (function () {
        function n(r, o, s) {
          function i(c, u) {
            if (!o[c]) {
              if (!r[c]) {
                var d = typeof no == "function" && no;
                if (!u && d) return d(c, !0);
                if (a) return a(c, !0);
                var f = new Error("Cannot find module '" + c + "'");
                throw ((f.code = "MODULE_NOT_FOUND"), f);
              }
              var h = (o[c] = { exports: {} });
              r[c][0].call(
                h.exports,
                function (m) {
                  var p = r[c][1][m];
                  return i(p || m);
                },
                h,
                h.exports,
                n,
                r,
                o,
                s,
              );
            }
            return o[c].exports;
          }
          for (var a = typeof no == "function" && no, l = 0; l < s.length; l++) i(s[l]);
          return i;
        }
        return n;
      })()(
        {
          1: [
            function (n, r, o) {
              function s(A, g, S) {
                return (g = m(g)), i(A, d() ? Reflect.construct(g, S || [], m(A).constructor) : g.apply(A, S));
              }
              function i(A, g) {
                if (g && (p(g) === "object" || typeof g == "function")) return g;
                if (g !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return a(A);
              }
              function a(A) {
                if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return A;
              }
              function l(A, g) {
                if (typeof g != "function" && g !== null)
                  throw new TypeError("Super expression must either be null or a function");
                (A.prototype = Object.create(g && g.prototype, {
                  constructor: { value: A, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(A, "prototype", { writable: !1 }),
                  g && h(A, g);
              }
              function c(A) {
                var g = typeof Map == "function" ? new Map() : void 0;
                return (c = function (S) {
                  if (S === null || !f(S)) return S;
                  if (typeof S != "function") throw new TypeError("Super expression must either be null or a function");
                  if (g !== void 0) {
                    if (g.has(S)) return g.get(S);
                    g.set(S, R);
                  }
                  function R() {
                    return u(S, arguments, m(this).constructor);
                  }
                  return (
                    (R.prototype = Object.create(S.prototype, {
                      constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    h(R, S)
                  );
                })(A);
              }
              function u(A, g, S) {
                if (d()) return Reflect.construct.apply(null, arguments);
                var R = [null];
                R.push.apply(R, g);
                var J = new (A.bind.apply(A, R))();
                return S && h(J, S.prototype), J;
              }
              function d() {
                try {
                  var A = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch {}
                return (d = function () {
                  return !!A;
                })();
              }
              function f(A) {
                try {
                  return Function.toString.call(A).indexOf("[native code]") !== -1;
                } catch {
                  return typeof A == "function";
                }
              }
              function h(A, g) {
                return (h = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (S, R) {
                      return (S.__proto__ = R), S;
                    })(A, g);
              }
              function m(A) {
                return (m = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (g) {
                      return g.__proto__ || Object.getPrototypeOf(g);
                    })(A);
              }
              function p(A) {
                return (p =
                  typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                    ? function (g) {
                        return typeof g;
                      }
                    : function (g) {
                        return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype
                          ? "symbol"
                          : typeof g;
                      })(A);
              }
              function b(A, g) {
                if (!(A instanceof g)) throw new TypeError("Cannot call a class as a function");
              }
              function w(A, g) {
                for (var S = 0; S < g.length; S++) {
                  var R = g[S];
                  (R.enumerable = R.enumerable || !1),
                    (R.configurable = !0),
                    "value" in R && (R.writable = !0),
                    Object.defineProperty(A, x(R.key), R);
                }
              }
              function _(A, g, S) {
                return g && w(A.prototype, g), Object.defineProperty(A, "prototype", { writable: !1 }), A;
              }
              function x(A) {
                var g = k(A, "string");
                return p(g) == "symbol" ? g : String(g);
              }
              function k(A, g) {
                if (p(A) != "object" || !A) return A;
                var S = A[Symbol.toPrimitive];
                if (S !== void 0) {
                  var R = S.call(A, g);
                  if (p(R) != "object") return R;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(A);
              }
              var E = function (A, g) {
                  var S = A.length,
                    R = g - 20;
                  R < 0 && (R = 0);
                  var J = g + 20;
                  J > S && (J = S);
                  var et = function (H) {
                      return H.charCodeAt(0).toString(16).toUpperCase();
                    },
                    q = function (H, it, Vt) {
                      return H.substr(it, Vt)
                        .replace(/\\/g, "\\\\")
                        .replace(/\x08/g, "\\b")
                        .replace(/\t/g, "\\t")
                        .replace(/\n/g, "\\n")
                        .replace(/\f/g, "\\f")
                        .replace(/\r/g, "\\r")
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function ($t) {
                          return "\\x0" + et($t);
                        })
                        .replace(/[\x10-\x1F\x80-\xFF]/g, function ($t) {
                          return "\\x" + et($t);
                        })
                        .replace(/[\u0100-\u0FFF]/g, function ($t) {
                          return "\\u0" + et($t);
                        })
                        .replace(/[\u1000-\uFFFF]/g, function ($t) {
                          return "\\u" + et($t);
                        });
                    };
                  return {
                    prologTrunc: R > 0,
                    prologText: q(A, R, g - R),
                    tokenText: q(A, g, 1),
                    epilogText: q(A, g + 1, J - (g + 1)),
                    epilogTrunc: J < S,
                  };
                },
                z = (function () {
                  function A(g, S, R) {
                    var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                      et = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                      q = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                    b(this, A),
                      (this.type = g),
                      (this.value = S),
                      (this.text = R),
                      (this.pos = J),
                      (this.line = et),
                      (this.column = q);
                  }
                  return (
                    _(A, [
                      {
                        key: "toString",
                        value: function () {
                          var g =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : function (S, R) {
                                  return R;
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
                        value: function (g, S) {
                          return g === this.type && (arguments.length !== 2 || S === this.value);
                        },
                      },
                    ]),
                    A
                  );
                })(),
                W = (function (A) {
                  function g(S, R, J, et, q) {
                    var H;
                    return (
                      b(this, g),
                      ((H = s(this, g, [S])).name = "ParsingError"),
                      (H.message = S),
                      (H.pos = R),
                      (H.line = J),
                      (H.column = et),
                      (H.input = q),
                      H
                    );
                  }
                  return (
                    l(g, c(Error)),
                    _(g, [
                      {
                        key: "toString",
                        value: function () {
                          for (
                            var S = E(this.input, this.pos),
                              R = "line ".concat(this.line, " (column ").concat(this.column, "): "),
                              J = "",
                              et = 0;
                            et < R.length + S.prologText.length;
                            et++
                          )
                            J += " ";
                          return (
                            "Parsing Error: " +
                            this.message +
                            `
` +
                            R +
                            S.prologText +
                            S.tokenText +
                            S.epilogText +
                            `
` +
                            J +
                            "^"
                          );
                        },
                      },
                    ]),
                    g
                  );
                })(),
                V = (function () {
                  function A(g) {
                    b(this, A),
                      (this._tokenizr = g),
                      (this._data = {}),
                      (this._repeat = !1),
                      (this._reject = !1),
                      (this._ignore = !1),
                      (this._match = null);
                  }
                  return (
                    _(A, [
                      {
                        key: "data",
                        value: function (g, S) {
                          var R = this._data[g];
                          return arguments.length === 2 && (this._data[g] = S), R;
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
                          var g, S;
                          return arguments.length > 0
                            ? ((S = this._tokenizr).state.apply(S, arguments), this)
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
                        value: function (g, S) {
                          return (
                            arguments.length < 2 && (S = this._match[0]),
                            this._tokenizr._log(
                              "    ACCEPT: type: ".concat(g, ", value: ") +
                                ""
                                  .concat(JSON.stringify(S), " (")
                                  .concat(p(S), '), text: "')
                                  .concat(this._match[0], '"'),
                            ),
                            this._tokenizr._pending.push(
                              new z(
                                g,
                                S,
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
                    A
                  );
                })(),
                X = (function () {
                  function A() {
                    b(this, A),
                      (this._before = null),
                      (this._after = null),
                      (this._finish = null),
                      (this._rules = []),
                      (this._debug = !1),
                      this.reset();
                  }
                  return (
                    _(A, [
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
                            (this._ctx = new V(this)),
                            this
                          );
                        },
                      },
                      {
                        key: "error",
                        value: function (g) {
                          return new W(g, this._pos, this._line, this._column, this._input);
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
                        value: function (g, S, R) {
                          var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                          if (arguments.length === 2 && typeof S == "function") {
                            var et = [g, S];
                            (S = et[0]), (R = et[1]), (g = "*");
                          } else if (arguments.length === 3 && typeof S == "function") {
                            var q = [g, S, R];
                            (S = q[0]), (R = q[1]), (J = q[2]), (g = "*");
                          }
                          if (typeof g != "string") throw new Error('parameter "state" not a String');
                          if (!(p(S) === "object" && S instanceof RegExp))
                            throw new Error('parameter "pattern" not a RegExp');
                          if (typeof R != "function") throw new Error('parameter "action" not a Function');
                          if (typeof J != "string") throw new Error('parameter "name" not a String');
                          g = g.split(/\s*,\s*/g).map(function (it) {
                            var Vt = it.split(/\s+/g),
                              $t = Vt.filter(function (_t) {
                                return _t.match(/^#/) === null;
                              }),
                              Jt = Vt.filter(function (_t) {
                                return _t.match(/^#/) !== null;
                              }).map(function (_t) {
                                return _t.replace(/^#/, "");
                              });
                            if ($t.length !== 1) throw new Error("exactly one state required");
                            return { state: $t[0], tags: Jt };
                          });
                          var H = "g";
                          try {
                            typeof new RegExp("", "y").sticky == "boolean" && (H = "y");
                          } catch {}
                          return (
                            typeof S.multiline == "boolean" && S.multiline && (H += "m"),
                            typeof S.dotAll == "boolean" && S.dotAll && (H += "s"),
                            typeof S.ignoreCase == "boolean" && S.ignoreCase && (H += "i"),
                            typeof S.unicode == "boolean" && S.unicode && (H += "u"),
                            (S = new RegExp(S.source, H)),
                            this._log("rule: configure rule (state: ".concat(g, ", pattern: ").concat(S.source, ")")),
                            this._rules.push({ state: g, pattern: S, action: R, name: J }),
                            this
                          );
                        },
                      },
                      {
                        key: "_progress",
                        value: function (g, S) {
                          for (var R = this._line, J = this._column, et = this._input, q = g; q < S; q++) {
                            var H = et.charAt(q);
                            H === "\r"
                              ? (this._column = 1)
                              : H ===
                                  `
`
                                ? (this._line++, (this._column = 1))
                                : H === "	"
                                  ? (this._column += 8 - (this._column % 8))
                                  : this._column++;
                          }
                          this._log(
                            "    PROGRESS: characters: ".concat(S - g, ", ") +
                              "from: <line ".concat(R, ", column ").concat(J, ">, ") +
                              "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                          );
                        },
                      },
                      {
                        key: "_tokenize",
                        value: function () {
                          var g = this,
                            S = function () {
                              g._eof ||
                                (g._finish !== null && g._finish.call(g._ctx, g._ctx),
                                (g._eof = !0),
                                g._pending.push(new z("EOF", "", "", g._pos, g._line, g._column)));
                            };
                          if (!(this._stopped || this._pos >= this._len)) {
                            for (var R = !0; R; ) {
                              if (((R = !1), this._debug)) {
                                var J = E(this._input, this._pos),
                                  et = Object.keys(this._tag)
                                    .map(function (Kt) {
                                      return "#".concat(Kt);
                                    })
                                    .join(" ");
                                this._log(
                                  "INPUT: state: <"
                                    .concat(this._state[this._state.length - 1], ">, tags: <")
                                    .concat(et, ">, text: ") +
                                    (J.prologTrunc ? "..." : '"') +
                                    "".concat(J.prologText, "<").concat(J.tokenText, ">").concat(J.epilogText) +
                                    (J.epilogTrunc ? "..." : '"') +
                                    ", at: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                );
                              }
                              for (var q = 0; q < this._rules.length; q++) {
                                if (this._debug) {
                                  var H = this._rules[q].state
                                    .map(function (Kt) {
                                      var $e = Kt.state;
                                      return (
                                        Kt.tags.length > 0 &&
                                          ($e +=
                                            " " +
                                            Kt.tags
                                              .map(function ($n) {
                                                return "#".concat($n);
                                              })
                                              .join(" ")),
                                        $e
                                      );
                                    })
                                    .join(", ");
                                  this._log(
                                    "  RULE: state(s): <".concat(H, ">, ") +
                                      "pattern: ".concat(this._rules[q].pattern.source),
                                  );
                                }
                                var it = !1,
                                  Vt = this._rules[q].state.map(function (Kt) {
                                    return Kt.state;
                                  }),
                                  $t = Vt.indexOf("*");
                                if (($t < 0 && ($t = Vt.indexOf(this._state[this._state.length - 1])), $t >= 0)) {
                                  it = !0;
                                  var Jt = this._rules[q].state[$t].tags;
                                  (Jt = Jt.filter(function (Kt) {
                                    return !g._tag[Kt];
                                  })).length > 0 && (it = !1);
                                }
                                if (it) {
                                  this._rules[q].pattern.lastIndex = this._pos;
                                  var _t = this._rules[q].pattern.exec(this._input);
                                  if (
                                    ((this._rules[q].pattern.lastIndex = this._pos),
                                    (_t = this._rules[q].pattern.exec(this._input)) !== null && _t.index === this._pos)
                                  ) {
                                    if (
                                      (this._debug && this._log("    MATCHED: " + JSON.stringify(_t)),
                                      (this._ctx._match = _t),
                                      (this._ctx._repeat = !1),
                                      (this._ctx._reject = !1),
                                      (this._ctx._ignore = !1),
                                      this._before !== null &&
                                        this._before.call(this._ctx, this._ctx, _t, this._rules[q]),
                                      this._rules[q].action.call(this._ctx, this._ctx, _t),
                                      this._after !== null &&
                                        this._after.call(this._ctx, this._ctx, _t, this._rules[q]),
                                      this._ctx._reject)
                                    )
                                      continue;
                                    if (this._ctx._repeat) {
                                      R = !0;
                                      break;
                                    }
                                    if (this._ctx._ignore) {
                                      if (
                                        (this._progress(this._pos, this._rules[q].pattern.lastIndex),
                                        (this._pos = this._rules[q].pattern.lastIndex),
                                        this._pos >= this._len)
                                      )
                                        return void S();
                                      R = !0;
                                      break;
                                    }
                                    if (this._pending.length > 0)
                                      return (
                                        this._progress(this._pos, this._rules[q].pattern.lastIndex),
                                        (this._pos = this._rules[q].pattern.lastIndex),
                                        void (this._pos >= this._len && S())
                                      );
                                    throw new Error(
                                      'action of pattern "' +
                                        this._rules[q].pattern.source +
                                        '" neither rejected nor accepted any token(s)',
                                    );
                                  }
                                }
                              }
                            }
                            throw this.error("token not recognized");
                          }
                          S();
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
                          for (var g, S = []; (g = this.token()) !== null; ) S.push(g);
                          return S;
                        },
                      },
                      {
                        key: "peek",
                        value: function (g) {
                          if ((g === void 0 && (g = 0), g >= this._pending.length)) {
                            this._pending.length === 0 && this._tokenize();
                            for (var S = 0; S < g - this._pending.length; S++) this._tokenize();
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
                          for (var S = 0; S < this._pending.length + g; S++) this._tokenize();
                          if (g > this._pending.length)
                            throw new Error("not enough tokens available for skip operation");
                          for (; g-- > 0; ) this.token();
                          return this;
                        },
                      },
                      {
                        key: "consume",
                        value: function (g, S) {
                          for (var R = this, J = 0; J < this._pending.length + 1; J++) this._tokenize();
                          if (this._pending.length === 0)
                            throw new Error("not enough tokens available for consume operation");
                          var et = this.token();
                          this._log("CONSUME: ".concat(et.toString()));
                          var q = function () {
                            throw new W(
                              "expected: <type: "
                                .concat(g, ", value: ")
                                .concat(JSON.stringify(S), " (")
                                .concat(p(S), ")>, ") +
                                "found: <type: "
                                  .concat(et.type, ", value: ")
                                  .concat(JSON.stringify(et.value), " (")
                                  .concat(p(et.value), ")>"),
                              et.pos,
                              et.line,
                              et.column,
                              R._input,
                            );
                          };
                          return (
                            arguments.length !== 2 || et.isA(g, S) ? et.isA(g) || q() : q(JSON.stringify(S), p(S)), et
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
                            this._transaction.length > 0 && (this._transaction[0] = this._transaction[0].concat(g)),
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
                          for (var g = null, S = [], R = arguments.length, J = new Array(R), et = 0; et < R; et++)
                            J[et] = arguments[et];
                          for (var q = 0; q < J.length; q++)
                            try {
                              this.begin(), (g = J[q].call(this)), this.commit();
                              break;
                            } catch (H) {
                              this._log("EXCEPTION: ".concat(H.toString())),
                                S.push({ ex: H, depth: this.depth() }),
                                this.rollback();
                              continue;
                            }
                          if (g === null && S.length > 0)
                            throw (S = S.sort(function (H, it) {
                              return H.depth - it.depth;
                            }))[0].ex;
                          return g;
                        },
                      },
                    ]),
                    A
                  );
                })();
              (X.Token = z), (X.ParsingError = W), (X.ActionContext = V), (r.exports = X);
            },
            {},
          ],
        },
        {},
        [1],
      )(1);
    });
  })(_p);
  var eC = _p.exports;
  const nC = tC(eC);
  function wp(t) {
    const e = new nC();
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
  function rC(t, e) {
    if (!t || !e || typeof t != "string" || typeof e != "string" || t.length == 0 || e.length == 0) return [];
    let n = [],
      r = t.indexOf(e, 0);
    for (; r != -1; ) n.push(r), (r = t.indexOf(e, r + 1));
    return n;
  }
  function oC(t, e, n, r, o) {
    const s = r - n;
    s != e.length &&
      console.log("Warning: annotation text length", e.length, ": ", e, " and annotation length do not match", s);
    let a = rC(t, e).filter((l) => Math.abs(l - n) <= o);
    return a.length == 1 ? { start: a[0], end: a[0] + e.length - 1, modified: !0 } : { start: n, end: r, modified: !1 };
  }
  function sC(t, e, n, r) {
    const o = r,
      s = {},
      i = {};
    wp(t).forEach((f) => {
      (s[f.pos] = f), (i[f.pos + f.value.length - 1] = f);
    });
    let a = -1,
      l = -1;
    for (let f = 0; f < o; f++)
      a == -1 && s[e + f] && (a = e + f),
        a == -1 && s[e - f] && (a = e - f),
        l == -1 && i[n + f] && (l = n + f),
        l == -1 && i[n - f] && (l = n - f);
    let c = !0,
      u = !0,
      d = !0;
    return (
      a == -1 && ((a = e), (u = !1)), l == -1 && ((l = n), (d = !1)), (c = u || d), { start: a, end: l, modified: c }
    );
  }
  const iC = (t) => {
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
      o = "";
    const s = t.split(`
`),
      i = [];
    for (let a = 0; a < s.length; a++) {
      r = n + (s[a].length - 1);
      let l = s[a].match(e);
      l ? (o = l[0]) : (o = "");
      let c = { gutter: o, text: s[a].replace(e, ""), start: n + o.length, end: r };
      i.push(c), (n = r + 2), (i[a].end = Math.max(i[a].end, i[a].start));
    }
    return i;
  };
  class aC {
    constructor(e) {
      Z(this, "mapStartCharIndexToToken", {});
      Z(this, "mapStopCharIndexToToken", {});
      (this.text = e),
        wp(e).forEach((n) => {
          const r = n.pos,
            o = n.pos + n.value.length - 1;
          (this.mapStartCharIndexToToken[r] = r), (this.mapStopCharIndexToToken[o] = o);
        });
      for (let n = 0; n < e.length; n++)
        this.mapStartCharIndexToToken[n] ||
          (this.mapStartCharIndexToToken[n] = n > 0 ? this.mapStartCharIndexToToken[n - 1] : 0),
          this.mapStopCharIndexToToken[n] ||
            (this.mapStopCharIndexToToken[n] = n > 0 ? this.mapStopCharIndexToToken[n - 1] : 0);
    }
    fixOffset(e, n) {
      this.mapStartCharIndexToToken[e], this.mapStopCharIndexToToken[n];
      const r = this.mapStartCharIndexToToken[e] || this.mapStartCharIndexToToken[n],
        o = this.mapStopCharIndexToToken[n] || this.mapStopCharIndexToToken[e];
      return { start: r, end: o, modified: r !== e || o !== n };
    }
  }
  const lC = { key: 0 },
    cC = { class: "label cursor-pointer gap-2" },
    uC = ["name", "disabled", "checked"],
    fC = { class: "w-full" },
    hC = ["disabled", "data-tip"],
    kf = Nt({
      __name: "AnnotationEditItem",
      props: {
        annotation: {},
        tip: {},
        selectedAnnotation: { type: Boolean },
        disabled: { type: Boolean },
        textLines: {},
        allowEdit: { type: Boolean },
        snapper: {},
      },
      emits: ["confirmAnnotation", "changeSelected", "modifyAnnotations", "processesAnnotation"],
      setup(t, { emit: e }) {
        const n = t,
          r = e,
          o = () => {
            r("confirmAnnotation");
          },
          s = () => {
            r("changeSelected");
          },
          i = function (u) {
            const d = n.snapper.fixOffset(u.newStart, u.newEnd);
            (u.newStart = d.start),
              (u.newEnd = d.end),
              d.modified && r("modifyAnnotations", { ...d, id: u.annotation.id });
          },
          a = function (u) {
            i(u), u.confirmStartUpdating();
          },
          l = function (u) {
            i(u), u.confirmUpdate();
          },
          c = function (u) {
            r("processesAnnotation", vp(u.annotation, ["id", "start", "end"]));
          };
        return (u, d) =>
          u.annotation
            ? (M(),
              L("div", lC, [
                j("label", cC, [
                  u.annotation
                    ? (M(),
                      L(
                        "input",
                        {
                          key: 0,
                          type: "radio",
                          name: u.annotation.id,
                          class: "radio radio-success",
                          disabled: u.disabled,
                          checked: u.selectedAnnotation,
                          onClick: s,
                        },
                        null,
                        8,
                        uC,
                      ))
                    : Pt("", !0),
                  j("div", fC, [
                    at(
                      U(Ii),
                      {
                        annotations: [u.annotation],
                        lines: U(bp)(u.textLines, u.annotation.start, u.annotation.end).lines,
                        "allow-edit": u.allowEdit ?? !1,
                        "listen-to-on-update-start": !0,
                        "listen-to-on-updating": !0,
                        onAnnotationUpdateBegin: a,
                        onAnnotationUpdating: l,
                        onAnnotationUpdateEnd: c,
                      },
                      null,
                      8,
                      ["annotations", "lines", "allow-edit"],
                    ),
                  ]),
                  u.annotation
                    ? (M(),
                      L(
                        "button",
                        {
                          key: 1,
                          disabled: u.disabled,
                          class: "btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]",
                          "data-tip": u.tip,
                          onClick: o,
                        },
                        [at(XO)],
                        8,
                        hC,
                      ))
                    : Pt("", !0),
                ]),
              ]))
            : Pt("", !0);
      },
    }),
    xp = {
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
    kp = MS(xp),
    dC = () => {
      const t = {};
      return (
        Object.entries(kp).forEach(([e, n]) => {
          t[e] = n ? { ...n, border: "rgb(0, 128, 0)" } : null;
        }),
        t
      );
    },
    pC = dC(),
    gC = { class: "card-body p-2" },
    mC = { key: 0, role: "alert", class: "alert alert-error" },
    vC = { class: "flex justify-between items-center" },
    yC = { class: "flex gap-2 justify-center" },
    bC = { class: "flex gap-2" },
    _C = ["disabled"],
    wC = { class: "annotation-body" },
    xC = { class: "flex items-center" },
    kC = { class: "flex-grow" },
    SC = { key: 0 },
    AC = { class: "text-sm text-content" },
    TC = Nt({
      __name: "AnnotationEdit",
      props: {
        annotation: {},
        originalAnnotation: {},
        appliedRules: {},
        textLines: {},
        selected: {},
        duplicates: {},
        highlight: { type: Boolean },
        disabled: { type: Boolean },
        error: { type: Boolean },
        showMetadata: { type: Boolean },
        snapper: {},
      },
      emits: [
        "confirmAnnotation",
        "deleteAnnotation",
        "changeSelected",
        "onHighlight",
        "modifyAnnotations",
        "processesAnnotation",
        "highlightAnnotation",
      ],
      setup(t, { emit: e }) {
        const n = ct(),
          r = t,
          { originalAnnotation: o } = r,
          s = e;
        Se(
          () => r.selected,
          (f) => {
            n.value = f;
          },
        );
        const i = (f) => {
            s("confirmAnnotation", o, f);
          },
          a = () => {
            s("deleteAnnotation", o);
          },
          l = () => {
            const f = o.type;
            return `--text-color-custom:${xp[f]}`;
          },
          c = (f) => {
            (n.value = f === n.value ? null : f), s("changeSelected", o, f);
          },
          u = () => {
            s("onHighlight", r.duplicates);
          },
          d = () => {
            s("highlightAnnotation", r.originalAnnotation);
          };
        return (f, h) => {
          const m = vh("router-link");
          return (
            M(),
            L(
              "div",
              { class: Lt(["grid gap-2 ", { "grid-cols-1": !f.showMetadata, "grid-cols-2": f.showMetadata }]) },
              [
                j(
                  "div",
                  {
                    class: Lt([
                      "card border rounded-md w-full",
                      { "border-black": f.highlight, shadow: f.highlight, "opacity-20": f.disabled },
                    ]),
                  },
                  [
                    j("div", gC, [
                      f.error ? (M(), L("div", mC, "Annotatie niet bewaard, probeer opnieuw.")) : Pt("", !0),
                      j("div", vC, [
                        j("div", yC, [
                          j(
                            "button",
                            {
                              class: "badge badge-outline badge-sm text-color-custom cursor-pointer",
                              style: nn(l()),
                              onClick: d,
                            },
                            kt(U(o).type),
                            5,
                          ),
                          f.duplicates.length > 1
                            ? (M(),
                              L(
                                "button",
                                {
                                  key: 0,
                                  class: "badge badge-sm badge-warning cursor-pointer",
                                  onClick: h[0] || (h[0] = (p) => u()),
                                },
                                " Duplicaat? (" + kt(U(o).id) + ") ",
                                1,
                              ))
                            : Pt("", !0),
                        ]),
                        j("div", bC, [
                          j(
                            "button",
                            {
                              disabled: f.disabled,
                              class: "btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left",
                              "data-tip": "Verwijder annotatie",
                              onClick: h[1] || (h[1] = (p) => a()),
                            },
                            [at(U(BS))],
                            8,
                            _C,
                          ),
                        ]),
                      ]),
                      j("div", null, [
                        j("div", wC, [
                          f.annotation
                            ? (M(),
                              Bn(
                                kf,
                                {
                                  key: 0,
                                  annotation: f.annotation,
                                  tip: "Bewaar gewijzigde annotatie",
                                  "selected-annotation": n.value === "modified",
                                  disabled: f.disabled,
                                  "text-lines": f.textLines,
                                  "allow-edit": !0,
                                  snapper: f.snapper,
                                  onChangeSelected: h[2] || (h[2] = (p) => c("modified")),
                                  onConfirmAnnotation: h[3] || (h[3] = (p) => i("modified")),
                                  onModifyAnnotations: h[4] || (h[4] = (p) => s("modifyAnnotations", p)),
                                  onProcessesAnnotation: h[5] || (h[5] = (p) => s("processesAnnotation", p)),
                                },
                                null,
                                8,
                                ["annotation", "selected-annotation", "disabled", "text-lines", "snapper"],
                              ))
                            : Pt("", !0),
                          h[8] || (h[8] = j("hr", null, null, -1)),
                          at(
                            kf,
                            {
                              annotation: U(o),
                              tip: "Bewaar originele annotatie",
                              "selected-annotation": n.value === "original",
                              disabled: f.disabled,
                              "text-lines": f.textLines,
                              onChangeSelected: h[6] || (h[6] = (p) => c("original")),
                              onConfirmAnnotation: h[7] || (h[7] = (p) => i("original")),
                            },
                            null,
                            8,
                            ["annotation", "selected-annotation", "disabled", "text-lines"],
                          ),
                        ]),
                        j("div", xC, [
                          j("ul", kC, [
                            (M(!0),
                            L(
                              ut,
                              null,
                              qt(f.appliedRules, (p) => (M(), L("li", { class: "badge badge-xs", key: p }, kt(p), 1))),
                              128,
                            )),
                          ]),
                          at(
                            m,
                            {
                              class: "badge badge-info badge-xs badge-outline tooltip tooltip-left",
                              "data-tip": "Info over regels",
                              to: { name: "docs" },
                              target: "_blank",
                            },
                            { default: Oe(() => h[9] || (h[9] = [Vn(" i ")])), _: 1 },
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  2,
                ),
                f.showMetadata
                  ? (M(),
                    L("div", SC, [
                      h[10] || (h[10] = j("strong", { class: "underline" }, "Metadata", -1)),
                      j("ul", AC, [
                        (M(!0),
                        L(
                          ut,
                          null,
                          qt(
                            U(o).properties,
                            (p) => (
                              M(),
                              L("li", { key: p.id_name }, [
                                j("strong", null, kt(p.label) + ":", 1),
                                Vn(" " + kt(p.name), 1),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]))
                  : Pt("", !0),
              ],
              2,
            )
          );
        };
      },
    });
  function EC(t) {
    return qi() ? (Bf(t), !0) : !1;
  }
  function Sp(t) {
    return typeof t == "function" ? t() : U(t);
  }
  const OC = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const CC = (t) => t != null,
    fo = () => {};
  function pn(t, e, n) {
    let r;
    Mt(n) ? (r = { evaluating: n }) : (r = {});
    const { lazy: o = !1, evaluating: s = void 0, shallow: i = !0, onError: a = fo } = r,
      l = ct(!o),
      c = i ? oh(e) : ct(e);
    let u = 0;
    return (
      $h(async (d) => {
        if (!l.value) return;
        u++;
        const f = u;
        let h = !1;
        s &&
          Promise.resolve().then(() => {
            s.value = !0;
          });
        try {
          const m = await t((p) => {
            d(() => {
              s && (s.value = !1), h || p();
            });
          });
          f === u && (c.value = m);
        } catch (m) {
          a(m);
        } finally {
          s && f === u && (s.value = !1), (h = !0);
        }
      }),
      o ? rt(() => ((l.value = !0), c.value)) : c
    );
  }
  const RC = OC ? window : void 0;
  function li(t) {
    var e;
    const n = Sp(t);
    return (e = n == null ? void 0 : n.$el) != null ? e : n;
  }
  function jC() {
    const t = ct(!1),
      e = ca();
    return (
      e &&
        sa(() => {
          t.value = !0;
        }, e),
      t
    );
  }
  function $C(t) {
    const e = jC();
    return rt(() => (e.value, !!t()));
  }
  function PC(t, e, n = {}) {
    const { root: r, rootMargin: o = "0px", threshold: s = 0, window: i = RC, immediate: a = !0 } = n,
      l = $C(() => i && "IntersectionObserver" in i),
      c = rt(() => {
        const m = Sp(t);
        return (Array.isArray(m) ? m : [m]).map(li).filter(CC);
      });
    let u = fo;
    const d = ct(a),
      f = l.value
        ? Se(
            () => [c.value, li(r), d.value],
            ([m, p]) => {
              if ((u(), !d.value || !m.length)) return;
              const b = new IntersectionObserver(e, { root: li(p), rootMargin: o, threshold: s });
              m.forEach((w) => w && b.observe(w)),
                (u = () => {
                  b.disconnect(), (u = fo);
                });
            },
            { immediate: a, flush: "post" },
          )
        : fo,
      h = () => {
        u(), f(), (d.value = !1);
      };
    return (
      EC(h),
      {
        isSupported: l,
        isActive: d,
        pause() {
          u(), (d.value = !1);
        },
        resume() {
          d.value = !0;
        },
        stop: h,
      }
    );
  }
  function IC(t = () => {}) {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(t)
      : setTimeout(() => {
          No(t);
        }, 300);
  }
  const MC = {
    props: {
      renderOnIdle: Boolean,
      unrender: Boolean,
      minHeight: Number,
      unrenderDelay: { type: Number, default: 1e4 },
    },
    setup(t) {
      const e = ct(!1),
        n = ct(),
        r = ct(0);
      let o, s;
      const { stop: i } = PC(
        n,
        ([{ isIntersecting: a }]) => {
          a
            ? (clearTimeout(o),
              (s = setTimeout(() => (e.value = !0), t.unrender ? 200 : 0)),
              (e.value = !0),
              t.unrender || i())
            : t.unrender &&
              (clearTimeout(s),
              (o = setTimeout(() => {
                (r.value = n.value.clientHeight), (e.value = !1);
              }, t.unrenderDelay)));
        },
        { rootMargin: "600px" },
      );
      return (
        t.renderOnIdle &&
          IC(() => {
            (e.value = !0), t.unrender || i();
          }),
        { targetEl: n, shouldRender: e, fixedMinHeight: r }
      );
    },
  };
  function LC(t, e, n, r, o, s) {
    return (
      M(),
      L(
        "div",
        { ref: "targetEl", style: nn(`min-height:${r.fixedMinHeight ? r.fixedMinHeight : n.minHeight}px`) },
        [r.shouldRender ? De(t.$slots, "default", { key: 0 }) : Pt("", !0)],
        4,
      )
    );
  }
  const zC = yp(MC, [["render", LC]]),
    NC = { class: "flex flex-col gap-3 h-full" },
    DC = { class: "card-title flex justify-between" },
    FC = { class: "gap-2 text-right" },
    BC = { class: "flex flex-col gap-2 overflow-auto" },
    UC = ["data-annotation"],
    VC = { class: "flex justify-end gap-2" },
    HC = Nt({
      __name: "AnnotationEditList",
      props: {
        modifiedAnnotations: {},
        textLines: {},
        highlightAnnotationIds: {},
        showMetadata: { type: Boolean },
        snapper: {},
      },
      emits: [
        "confirmAnnotations",
        "confirmAnnotation",
        "deleteAnnotation",
        "modifyAnnotations",
        "processesAnnotation",
        "highlightAnnotation",
        "needsAttention",
        "reviewDone",
      ],
      setup(t, { emit: e }) {
        const n = ct([]),
          r = ct(new Map());
        Se(
          () => t.highlightAnnotationIds,
          (d) => {
            u(d);
          },
        );
        const o = function (d, f) {
            f ? r.value.set(d.id, f) : r.value.delete(d.id);
          },
          s = (d) => {
            t.modifiedAnnotations.forEach((f) => {
              o(f.original, d);
            });
          },
          i = e,
          a = () => {
            i("confirmAnnotations", r.value);
          },
          l = (d, f) => {
            i("confirmAnnotation", d.id, f);
          },
          c = (d) => {
            i("deleteAnnotation", d.id);
          },
          u = (d) => {
            n.value = d;
          };
        return (d, f) => (
          M(),
          L("div", NC, [
            j("div", DC, [
              f[7] || (f[7] = j("div", { class: "flex-grow" }, "Aangepaste Annotaties", -1)),
              j("div", FC, [
                j(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[0] || (f[0] = (h) => s("modified")) },
                  " Selecteer alle aangepaste ",
                ),
                j(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[1] || (f[1] = (h) => s("original")) },
                  " Selecteer alle originele ",
                ),
              ]),
            ]),
            j("ul", BC, [
              (M(!0),
              L(
                ut,
                null,
                qt(
                  d.modifiedAnnotations,
                  (h) => (
                    M(),
                    L(
                      "li",
                      { key: h.id, "data-annotation": h.id, ref_for: !0, ref: `annotation-${h.id}` },
                      [
                        at(
                          zC,
                          null,
                          {
                            default: Oe(() => [
                              at(
                                TC,
                                {
                                  annotation: h.modified,
                                  originalAnnotation: h.original,
                                  textLines: d.textLines,
                                  selected: r.value.get(h.id),
                                  duplicates: h.duplicates,
                                  highlight: n.value.includes(h.id),
                                  appliedRules: h.appliedRules,
                                  disabled: h.saving,
                                  error: h.error,
                                  showMetadata: d.showMetadata,
                                  snapper: d.snapper,
                                  onConfirmAnnotation: l,
                                  onDeleteAnnotation: c,
                                  onChangeSelected: o,
                                  onOnHighlight: u,
                                  onHighlightAnnotation: f[2] || (f[2] = (m) => i("highlightAnnotation", m)),
                                  onModifyAnnotations: f[3] || (f[3] = (m) => i("modifyAnnotations", m)),
                                  onProcessesAnnotation: f[4] || (f[4] = (m) => i("processesAnnotation", m)),
                                },
                                null,
                                8,
                                [
                                  "annotation",
                                  "originalAnnotation",
                                  "textLines",
                                  "selected",
                                  "duplicates",
                                  "highlight",
                                  "appliedRules",
                                  "disabled",
                                  "error",
                                  "showMetadata",
                                  "snapper",
                                ],
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        ),
                      ],
                      8,
                      UC,
                    )
                  ),
                ),
                128,
              )),
            ]),
            f[8] || (f[8] = j("hr", null, null, -1)),
            j("div", VC, [
              j(
                "button",
                { class: "btn", onClick: f[5] || (f[5] = (h) => i("needsAttention")) },
                "Text heeft extra aandacht nodig",
              ),
              j("button", { class: "btn", onClick: f[6] || (f[6] = (h) => i("reviewDone")) }, "Text Verwerkt"),
              j("button", { class: "btn", onClick: a }, "Bevestig Selectie"),
            ]),
          ])
        );
      },
    }),
    qC = { class: "grid grid-cols-2 gap-2 overflow-auto h-full" },
    KC = { class: "border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed" },
    WC = Nt({
      __name: "AnnotationTextCompare",
      props: { originalAnnotations: {}, processedAnnotations: {}, textLines: {}, snapper: {} },
      emits: ["modifyAnnotations", "processesAnnotation", "showAnnotation"],
      setup(t, { emit: e }) {
        const n = e,
          r = function (l) {
            const c = t.snapper.fixOffset(l.newStart, l.newEnd);
            (l.newStart = c.start),
              (l.newEnd = c.end),
              c.modified && n("modifyAnnotations", { ...c, id: l.annotation.id });
          },
          o = function (l) {
            r(l), l.confirmStartUpdating();
          },
          s = function (l) {
            r(l), l.confirmUpdate();
          },
          i = function (l) {
            n("processesAnnotation", vp(l.annotation, ["id", "start", "end"]));
          },
          a = function (l) {
            n("showAnnotation", l.annotation);
          };
        return (l, c) => (
          M(),
          L("div", qC, [
            j("div", KC, [
              c[0] || (c[0] = j("div", { class: "text-lg font-bold" }, "Originele Tekst", -1)),
              at(U(Ii), { annotations: l.originalAnnotations, lines: l.textLines }, null, 8, ["annotations", "lines"]),
            ]),
            j("div", null, [
              c[1] || (c[1] = j("div", { class: "text-lg font-bold" }, "Verwerkte Tekst", -1)),
              at(
                U(Ii),
                {
                  annotations: l.processedAnnotations,
                  lines: l.textLines,
                  "allow-edit": !0,
                  "listen-to-on-update-start": !0,
                  "listen-to-on-updating": !0,
                  onAnnotationUpdateBegin: o,
                  onAnnotationUpdating: s,
                  onAnnotationUpdateEnd: i,
                  onAnnotationDoubleClick: a,
                },
                null,
                8,
                ["annotations", "lines"],
              ),
            ]),
          ])
        );
      },
    }),
    GC = [
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
    ],
    ZC = { class: "flex justify-center items-center gap-4" },
    JC = ["for"],
    QC = ["id", "value"],
    YC = { class: "pl-2 label-text" },
    XC = Nt({
      __name: "TypeFilter",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(t) {
        const e = Ih(t, "modelValue");
        return (n, r) => (
          M(),
          L("div", ZC, [
            r[1] || (r[1] = j("div", { class: "font-bold" }, "Filter:", -1)),
            (M(!0),
            L(
              ut,
              null,
              qt(
                U(GC),
                (o) => (
                  M(),
                  L("div", { key: o, class: "form-control" }, [
                    j(
                      "label",
                      { for: o, class: "label cursor-pointer" },
                      [
                        ra(
                          j(
                            "input",
                            {
                              class: "checkbox",
                              type: "checkbox",
                              id: o,
                              value: o,
                              "onUpdate:modelValue": r[0] || (r[0] = (s) => (e.value = s)),
                            },
                            null,
                            8,
                            QC,
                          ),
                          [[ua, e.value]],
                        ),
                        j("span", YC, kt(o), 1),
                      ],
                      8,
                      JC,
                    ),
                  ])
                ),
              ),
              128,
            )),
          ])
        );
      },
    });
  class Fa {
    constructor() {}
    async fetchAnnotation(e) {
      return this.sendJsonRequest({ url: `/text/${e}/annotations`, method: "GET" });
    }
    async filters() {
      return this.sendJsonRequest({ url: "/text/search_flags/filters", method: "GET" });
    }
    async listTexts(e, n, r, o, s) {
      const i = this.buildSearchParams(e, n, r, o, s);
      return this.sendJsonRequest({ url: `/text/search_flags?${i.toString()}`, method: "GET" });
    }
    async paginate(e, n, r, o, s) {
      return (await this.listTexts(e, n, r, o, s)).data.map((a) => a.id);
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
        const o = await fetch(e, {
          method: n,
          headers: { "Content-Type": "application/json" },
          body: r ? JSON.stringify(r) : void 0,
        });
        if ((o.status === 401 && window.location.reload(), !o.ok)) throw new Error(`HTTP error! status: ${o.status}`);
        return await o.json();
      } catch (o) {
        throw (console.error(o), new Error(o));
      }
    }
    buildSearchParams(e, n, r, o, s) {
      const i = new URLSearchParams();
      i.append("limit", `${r}`), i.append("ascending", `${s}`), i.append("page", `${n}`), i.append("orderBy", o);
      const a = ["page", "orderBy", "ascending"];
      return (
        Object.entries(e).forEach(([l, c]) => {
          a.includes(l) ||
            c.forEach((u, d) => {
              i.append(`filters[${l}][${d}]`, `${u}`);
            });
        }),
        i
      );
    }
  }
  const tR = (t) => `${t.type}-${t.start}-${t.end}`;
  class eR {
    constructor(e, n) {
      Z(this, "name", "Duplicate rule");
      Z(this, "duplicateRuleSet", new Map());
      Z(this, "duplicates", new Map());
      (this.text = e), (this.annotations = n), this.mapAnnotations(n);
    }
    addAnnotationToRules(e) {
      const n = tR(e),
        r = this.duplicateRuleSet.get(n) ?? [];
      return r.push(e), this.duplicateRuleSet.set(n, r), { key: n, annotations: r };
    }
    updateDuplicates(e, n) {
      if (n.length < 2) {
        n.forEach((o) => {
          this.duplicateRuleSet.delete(o.id), this.duplicates.set(o.id, { duplicateKey: e, duplicates: [] });
        });
        return;
      }
      const r = n.map((o) => o.id);
      n.forEach((o) => {
        this.duplicates.set(o.id, { duplicateKey: e, duplicates: r });
      });
    }
    mapAnnotations(e) {
      this.duplicateRuleSet.clear(), this.duplicates.clear(), e.forEach((n) => this.addAnnotationToRules(n));
      for (const [n, r] of this.duplicateRuleSet.entries()) this.updateDuplicates(n, r);
    }
    removeAnnotation(e) {
      var o, s;
      const n = (o = this.duplicates.get(e.id)) == null ? void 0 : o.duplicateKey,
        r = ((s = this.duplicateRuleSet.get(n)) == null ? void 0 : s.filter((i) => i.id !== e.id)) ?? [];
      return this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r)), r;
    }
    updateAnnotation(e) {
      var i, a;
      const n = (i = this.duplicates.get(e.id)) == null ? void 0 : i.duplicateKey,
        r = ((a = this.duplicateRuleSet.get(n)) == null ? void 0 : a.filter((l) => l.id !== e.id)) ?? [];
      this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r));
      const { key: o, annotations: s } = this.addAnnotationToRules(e);
      return this.updateDuplicates(o, s), r;
    }
    hasDuplicate(e) {
      var n;
      return ((n = this.duplicates.get(e.id)) == null ? void 0 : n.duplicates) ?? [];
    }
  }
  class nR {
    constructor(e) {
      Z(this, "name");
      Z(this, "text");
      (this.name = "sanitize_annotation_rule"), (this.text = e);
    }
    apply(e) {
      const n = Ye(e);
      e.start < 0 && (n.start = 0), e.end >= this.text.length && (n.end = this.text.length - 1);
      const r = e.start != n.start || e.end != n.end;
      return { annotation: n, rule_applied: r };
    }
  }
  class fn {
    constructor(e, n = !1, r = !1) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "rules");
      Z(this, "alwaysApplyFirstRule");
      Z(this, "stopWhenRuleApplied");
      var o;
      (this.name = "annotation_rule_set"),
        (this.rules = e),
        (this.text = ((o = e[0]) == null ? void 0 : o.text) || ""),
        (this.alwaysApplyFirstRule = n),
        (this.stopWhenRuleApplied = r);
    }
    apply(e) {
      let n = !1;
      const r = [];
      if (this.alwaysApplyFirstRule) {
        const o = this.rules[0].apply(e);
        if (
          o.rule_applied &&
          (r.push(this.rules[0].name), (e = o.annotation), (n = o.rule_applied), this.stopWhenRuleApplied)
        )
          return { annotation: e, rule_applied: n, appliedRules: r };
      }
      for (let o = this.alwaysApplyFirstRule ? 1 : 0; o < this.rules.length; o++) {
        const s = this.rules[o].apply(e);
        if (
          s.rule_applied &&
          (r.push(this.rules[o].name), (e = s.annotation), (n = s.rule_applied), this.stopWhenRuleApplied)
        )
          return { annotation: e, rule_applied: n, appliedRules: r };
      }
      return { annotation: e, rule_applied: n, appliedRules: r };
    }
  }
  class rR {
    constructor(e, n) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "max_shift");
      (this.name = "tokenize_rule"), (this.text = e), (this.max_shift = n);
    }
    apply(e) {
      const n = Ye(e);
      let r = this.max_shift;
      r < 0 && (r = 2 + Math.floor((e.end - e.start) / 3));
      const o = sC(this.text, e.start, e.end, r);
      return o.modified && ((n.start = o.start), (n.end = o.end)), { annotation: n, rule_applied: o.modified };
    }
  }
  const oR = (t, e, n) => {
      if (!n || !n.id) return console.warn("No property object", e, n), null;
      const r = e
        .substring(t.length + 1)
        .split(/(?=[A-Z])/)
        .map((o) => `${o.charAt(0).toUpperCase()}${o.slice(1)}`)
        .join(" ");
      return { id: n.id, id_name: n.id_name, label: r, name: n.name };
    },
    sR = (t, e) =>
      Object.keys(e)
        .map((n) => oR(t, n, e[n]))
        .filter((n) => !!n),
    iR = (t, e) => {
      if (!t.text_selection) return console.error("Annotation error wrong format", t), null;
      const n = t.type === "handshift" ? "gutter" : "text",
        r = t.text_selection.selection_start - 1,
        o = t.text_selection.selection_end - 1,
        s = e ? e.slice(r, o) : "",
        i = t.type;
      return {
        id: t.id,
        start: t.text_selection.selection_start,
        end: t.text_selection.selection_end,
        text: t.text_selection.text,
        class: `annotation-${i}`,
        label: i,
        target: n,
        type: i,
        metadata: { text: s, id: t.id, index: t.id },
        color: kp[i],
        hasOverride: t.hasOverride,
        properties: sR(i, t.properties),
      };
    };
  class aR {
    constructor(e, n) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "maxShift");
      (this.name = "annotation_text_rule"), (this.text = e), (this.maxShift = n);
    }
    apply(e) {
      let n = e,
        r = !1;
      if (e.text) {
        const o = e.text.trim(),
          s = oC(this.text, o, e.start, e.end, this.maxShift);
        s.modified && ((r = !0), (n = Ye(e)), (n.start = s.start), (n.end = s.end));
      }
      return { annotation: n, rule_applied: r };
    }
  }
  class lR {
    constructor(e) {
      Z(this, "languageRuleSet");
      Z(this, "typographyRuleSet");
      Z(this, "orthographyRuleSet");
      Z(this, "lexisRuleSet");
      Z(this, "morphoSyntacticalRuleSet");
      Z(this, "handshiftRuleSet");
      Z(this, "defaultRuleSet");
      this.text = e;
      const n = new rR(e, 3),
        r = new aR(e, 3),
        o = new nR(e);
      (this.languageRuleSet = new fn([o, n], !0, !0)),
        (this.typographyRuleSet = new fn([o, r], !0, !0)),
        (this.orthographyRuleSet = new fn([o, n, r], !0, !0)),
        (this.lexisRuleSet = new fn([o, n], !0, !0)),
        (this.morphoSyntacticalRuleSet = new fn([o, r, n], !0, !1)),
        (this.handshiftRuleSet = new fn([o, n], !0, !0)),
        (this.defaultRuleSet = new fn([o], !0, !1));
    }
    _applyRules(e) {
      let n = { annotation: {}, rule_applied: !1, appliedRules: [] };
      if (e.hasOverride) return n;
      switch (e.type) {
        case "typography":
          n = this.typographyRuleSet.apply(e);
          break;
        case "orthography":
          n = this.orthographyRuleSet.apply(e);
          break;
        case "lexis":
          n = this.lexisRuleSet.apply(e);
          break;
        case "morpho_syntactical":
          n = this.morphoSyntacticalRuleSet.apply(e);
          break;
        case "handshift":
          n = this.handshiftRuleSet.apply(e);
          break;
        case "language":
          n = this.languageRuleSet.apply(e);
          break;
      }
      return n;
    }
    applyRules(e) {
      return new Promise((n) => {
        const r = iR(e, this.text);
        if (!r) {
          n(null);
          return;
        }
        const o = this._applyRules(r),
          s = o.rule_applied ? o.annotation : r;
        o.rule_applied && (s.color = pC[s.type]),
          n({
            id: r.id,
            processed: s,
            original: r,
            modified: o.rule_applied ? o.annotation : null,
            appliedRules: o.appliedRules,
            saving: !1,
            error: !1,
          });
      });
    }
  }
  class cR {
    constructor() {
      Z(this, "annotationRepository", new Fa());
      Z(this, "annotationRuleSets");
      Z(this, "duplicateRule");
      Z(this, "id");
      Z(this, "text", "");
      Z(this, "annotations", ct(new Map()));
      Z(
        this,
        "annotationValues",
        rt(() => Array.from(this.annotations.value.values())),
      );
    }
    async getAnnotation(e) {
      this.reset();
      try {
        const n = await this.annotationRepository.fetchAnnotation(e),
          { text: r, flags: o, annotations: s } = n;
        (this.id = e),
          this.createRulesSet(r),
          console.group("Load annotations for ", e),
          console.log("Totaal aantal annotaties", s.length, "textlengte", r.length),
          console.time(`process_${e}`);
        const i = (await Promise.all(s.map((a) => this.applyRules(a)))).filter((a) => !!a);
        return (
          this.checkForDuplicates(i), console.timeEnd(`process_${e}`), console.groupEnd(), { text: r, id: e, flags: o }
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
      (this.duplicateRule = new eR(this.text, n)),
        e.forEach((r) => {
          r.duplicates = this.duplicateRule.hasDuplicate(r.processed);
        });
    }
    createRulesSet(e) {
      (this.text = e), (this.annotationRuleSets = new lR(e));
    }
    async applyRules(e) {
      const n = await this.annotationRuleSets.applyRules(e);
      return n ? (this.annotations.value.set(e.id, n), n) : null;
    }
    processAnnotation({ end: e, start: n, id: r }) {
      const o = this.annotations.value.get(r),
        { processed: s } = o;
      (s.end = e), (s.start = n);
    }
    modifyAnnotation({ start: e, end: n, id: r }) {
      const o = this.annotations.value.get(r),
        { processed: s, modified: i } = o;
      i || (o.modified = Ye(s)), (o.modified.end = n), (o.modified.start = e);
    }
    async confirmAnnotationLocal(e, n) {
      const r = this.annotations.value.get(e),
        o = Ye(n === "modified" ? r.modified : r.original);
      return (
        (r.saving = !0),
        (r.error = !1),
        await this.updateAnnotation(o).catch((s) => {
          throw (console.error(s), (r.saving = !1), (r.error = !0), Error(s));
        }),
        (r.modified = null),
        (r.hasOverride = !0),
        (r.processed = o),
        r
      );
    }
    async confirmAnnotation(e, n) {
      const r = await this.confirmAnnotationLocal(e, n);
      return (
        this.duplicateRule.updateAnnotation(r.processed).forEach((s) => this.updateDuplicates(s)),
        this.updateDuplicates(r.processed),
        r
      );
    }
    async deleteAnnotation(e) {
      const n = this.annotations.value.get(e);
      (n.saving = !0),
        (n.error = !1),
        await this.updateAnnotation(n.processed, !0).catch((o) => {
          throw (console.error(o), (n.saving = !1), (n.error = !0), Error(o));
        }),
        this.annotations.value.delete(e),
        this.duplicateRule.removeAnnotation(n.processed).forEach((o) => this.updateDuplicates(o));
    }
    updateAnnotation(e, n = !1) {
      const { start: r, end: o, type: s, id: i } = e;
      return this.annotationRepository.patchAnnotation(i, s, {
        selection_start: r,
        selection_end: o,
        selection_length: o - r,
        is_deleted: n,
      });
    }
    updateDuplicates(e) {
      const n = this.annotations.value.get(e.id);
      n && (n.duplicates = this.duplicateRule.hasDuplicate(e));
    }
    async confirmAnnotations(e) {
      const n = [];
      e.forEach((r, o) => n.push(this.confirmAnnotationLocal(o, r))),
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
  const ci = (t) => {
      const e = Number(t);
      return isNaN(e) ? null : e;
    },
    uR = 25,
    Ao = Ko("searchStore", () => {
      const t = Jo(),
        e = Zo(),
        n = ct(ci(t.query.pageSize) ?? uR),
        r = ct(ci(t.query.page) ?? 1),
        o = ct(Date.now()),
        s = ct({ orderBy: t.query.orderBy ?? "title", ascending: t.query.ascending === "0" ? 0 : 1 }),
        i = { project: [3] };
      Object.entries(t.query).forEach(([_, x]) => {
        ["pageSize", "page"].includes(_) || (Array.isArray(x) ? (i[_] = x.map((k) => k)) : (i[_] = [x]));
      });
      const a = ct(Ye(i)),
        l = new Fa(),
        c = pn(async () => l.filters()),
        u = pn(async () => {
          const _ = a.value,
            x = r.value,
            { ascending: k, orderBy: E } = s.value,
            z = o.value;
          return console.log("refresh", z), x ? l.listTexts(_, x, n.value, E, k) : { count: 0, results: [] };
        }),
        d = rt(() => {
          var _;
          return ((_ = u.value) == null ? void 0 : _.data) ?? [];
        }),
        f = rt(() => {
          var _;
          return ((_ = u.value) == null ? void 0 : _.count) ?? 0;
        }),
        h = rt(() => {
          var _;
          return ((_ = u.value) == null ? void 0 : _.filters) ?? [];
        }),
        m = (_) => ((a.value = Ye(_)), e.replace({ query: { ...t.query, ..._ } })),
        p = rt(() => Math.ceil(f.value / n.value)),
        b = (_ = 1) => {
          const x = ci(_) ?? 1;
          let k = x < 1 ? 1 : x;
          const E = p.value;
          return (
            k > E && (k = E),
            (r.value = k),
            console.log("change page", p, k),
            e.replace({ query: { ...t.query, page: r.value } })
          );
        },
        w = (_, x) => (
          (s.value = { orderBy: _, ascending: x }), e.replace({ query: { ...t.query, orderBy: _, ascending: x } })
        );
      return (
        (!t.query.pageSize || !t.query.page || !t.query.orderBy || !t.query.ascending) &&
          e.replace({ query: { ...t.query, pageSize: n.value, page: r.value, ...s.value } }),
        {
          sort: s,
          pageSize: n,
          page: r,
          filters: c,
          filterValues: a,
          data: d,
          searchFilters: h,
          count: f,
          searchResult: u,
          maxPage: p,
          refresh: () => (o.value = Date.now()),
          changePage: b,
          onSearch: m,
          changeOrder: w,
        }
      );
    }),
    Ap = (t, e) => {
      const n = (t ?? 0) / e;
      return Math.ceil(n);
    },
    Di = Ko("paginationStore", () => {
      const t = Ao(),
        e = Tp(),
        n = new Fa(),
        r = ct([]),
        o = async () => {
          const { ascending: h, orderBy: m } = t.sort,
            p = await n.paginate(t.filterValues, t.page, t.pageSize, m, h);
          return (r.value = p), p;
        },
        s = pn(async () => {
          const { ascending: h, orderBy: m } = t.sort;
          return (await n.paginate(t.filterValues, 1, 1, m, h))[0];
        }),
        i = pn(async () => {
          const { ascending: h, orderBy: m } = t.sort;
          return (await n.listTexts(t.filterValues, 1, 1, m, h)).count;
        }),
        a = pn(async () => {
          const { ascending: h, orderBy: m } = t.sort;
          return (await n.paginate(t.filterValues, i.value, 1, m, h))[0];
        });
      pn(() => o());
      const l = rt(() => r.value.findIndex((h) => h === e.id));
      return {
        firstId: s,
        lastId: a,
        next: async () => {
          const h = l.value;
          let m = h < 0 ? void 0 : r.value[h + 1];
          if (m) await e.changeId(m);
          else {
            if (t.page >= t.maxPage) return;
            if ((await t.changePage(t.page + 1), await o(), (m = r.value[0]), m == a.value)) {
              await t.changePage(t.page + 1);
              return;
            }
            m && m !== a.value && (await e.changeId(m));
          }
        },
        previous: async () => {
          const h = l.value,
            m = r.value.length;
          let p = h < 0 ? void 0 : r.value[h - 1];
          if (p) await e.changeId(p);
          else {
            if (t.page === 1 || (await t.changePage(t.page - 1), await o(), (p = r.value[m]), p == s.value)) return;
            p && (await e.changeId(p));
          }
        },
        toFirst: async () => {
          await e.changeId(s.value), await t.changePage(1);
        },
        toLast: async () => {
          const h = Ap(i.value, t.pageSize);
          await e.changeId(a.value), await t.changePage(h);
        },
      };
    }),
    fR = (t, e, n, r) => {
      var s;
      if ((r && e.duplicates.length < 1) || (n && (!e.modified || e.hasOverride))) return !1;
      const o = ((s = e == null ? void 0 : e.original) == null ? void 0 : s.type) ?? "";
      return t.length === 0 || t.includes(o);
    },
    Sf = (t, e) => (t.processed.start < e.processed.start ? -1 : 1),
    hR = (t, e, n, r) => (t.length === 0 && !n && !r ? e.sort(Sf) : e.filter((s) => fR(t, s, n, r)).sort(Sf)),
    Tp = Ko("annotationStore", () => {
      const t = Jo(),
        e = Zo(),
        n = ct(Number(t.params.id)),
        r = pn(async () => {
          console.log("id", n.value);
          const A = new cR();
          if (!n.value) return null;
          try {
            const g = await A.getAnnotation(n.value);
            return { annotationStore: A, ...g };
          } catch (g) {
            console.error(g), console.error("Fout bij het laden van de annotaties");
          } finally {
            console.log("Total processed annotations", m.value.length),
              console.log("Total modified annotations", p.value.length),
              console.log("Total original annotations", h.value.length);
          }
          return null;
        }),
        o = rt(() => {
          var A;
          return ((A = r.value) == null ? void 0 : A.text) || "";
        }),
        s = rt(() => {
          var A;
          return ((A = r.value) == null ? void 0 : A.annotationStore) || null;
        }),
        i = rt(() => {
          var A;
          return ((A = r.value) == null ? void 0 : A.flags) || { needs_attention: !1, review_done: !1 };
        }),
        a = ct(!1),
        l = ct(!1),
        c = ct([]),
        u = rt(() => {
          var A, g;
          return ((g = (A = s.value) == null ? void 0 : A.annotationValues) == null ? void 0 : g.value) || [];
        }),
        d = rt(() => hR(c.value, u.value, a.value, l.value)),
        f = rt(() => u.value.length),
        h = rt(() => d.value.map((A) => A.original)),
        m = rt(() => d.value.map((A) => A.processed)),
        p = rt(() => d.value.filter((A) => !!A.modified || A.duplicates.length > 1)),
        b = rt(() => d.value.filter((A) => A.duplicates.length > 1)),
        w = rt(() => u.value.filter((A) => A.hasOverride || !A.modified).length),
        _ = rt(() => iC(o.value)),
        x = rt(() => new aC(o.value)),
        k = rt(() => {
          const A = r.value;
          return !A || A.id !== n.value;
        }),
        E = (A) => ((n.value = A), e.push({ name: "annotation", params: { id: A }, query: t.query }));
      return (
        Se(
          () => t.params.id,
          (A, g) => {
            const S = Number(A);
            S && n.value !== S && E(S);
          },
        ),
        {
          id: n,
          loading: k,
          changeId: E,
          fetchNewValue: r,
          textLines: _,
          snapper: x,
          originalAnnotations: h,
          processedAnnotations: m,
          modifiedAnnotations: p,
          selectedFilters: c,
          duplicates: b,
          totalAnnotations: f,
          flags: i,
          totalProcessedAnnotation: w,
          changeShowModified: (A) => (a.value = A),
          changeShowOnlyDuplicates: (A) => (l.value = A),
          processAnnotation: (A) => {
            var g;
            return (g = s.value) == null ? void 0 : g.processAnnotation(A);
          },
          modifyAnnotation: (A) => {
            var g;
            return (g = s.value) == null ? void 0 : g.modifyAnnotation(A);
          },
          confirmAnnotation: (A, g) => {
            var S;
            return (S = s.value) == null ? void 0 : S.confirmAnnotation(A, g);
          },
          confirmAnnotations: (A) => {
            var g;
            return (g = s.value) == null ? void 0 : g.confirmAnnotations(A);
          },
          deleteAnnotation: (A) => {
            var g;
            return (g = s.value) == null ? void 0 : g.deleteAnnotation(A);
          },
          needsAttention: async () => {
            var A;
            await ((A = s.value) == null ? void 0 : A.needsAttention()), Di().next(), Ao().refresh();
          },
          reviewDone: async () => {
            var A;
            await ((A = s.value) == null ? void 0 : A.reviewDone()), Di().next(), Ao().refresh();
          },
        }
      );
    }),
    dR = { class: "flex flex-col gap-2 align-items" },
    pR = { class: "flex gap-1 items-center" },
    gR = ["href"],
    mR = Nt({
      __name: "SearchPaginator",
      props: { activeId: {} },
      setup(t) {
        const e = Di(),
          n = Jo();
        return (r, o) => {
          const s = vh("router-link");
          return (
            M(),
            L("div", dR, [
              j("div", pR, [
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === U(e).firstId }]),
                    onClick: o[0] || (o[0] = (...i) => U(e).toFirst && U(e).toFirst(...i)),
                  },
                  [at(U(LS), { class: "h-3" })],
                  2,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs ", { "btn-disabled": r.activeId === U(e).firstId }]),
                    onClick: o[1] || (o[1] = (...i) => U(e).previous && U(e).previous(...i)),
                  },
                  [at(U(NS), { class: "h-3" })],
                  2,
                ),
                j(
                  "a",
                  {
                    href: `https://dev.evwrit.ugent.be/text/${r.activeId}`,
                    target: "_blank",
                    class: "text-sm w-16 text-center hover:underline",
                  },
                  kt(r.activeId),
                  9,
                  gR,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === U(e).lastId }]),
                    onClick: o[2] || (o[2] = (...i) => U(e).next && U(e).next(...i)),
                  },
                  [at(U(DS), { class: "h-3" })],
                  2,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === U(e).lastId }]),
                    onClick: o[3] || (o[3] = (...i) => U(e).toLast && U(e).toLast(...i)),
                  },
                  [at(U(zS), { class: "h-3" })],
                  2,
                ),
              ]),
              at(
                s,
                { class: "link btn-ghost btn-icon", to: { name: "search", query: U(n).query } },
                { default: Oe(() => o[4] || (o[4] = [Vn(" Terug naar zoeken ")])), _: 1 },
                8,
                ["to"],
              ),
            ])
          );
        };
      },
    }),
    vR = { class: "navbar bg-base-100" },
    yR = { class: "flex-none" },
    bR = { class: "flex flex-row gap-4 items-center" },
    _R = { class: "label cursor-pointer gap-2" },
    wR = ["checked"],
    xR = { class: "label-text" },
    kR = { class: "label cursor-pointer gap-2" },
    SR = ["checked"],
    AR = { class: "label-text" },
    TR = { class: "label cursor-pointer gap-2" },
    ER = { class: "flex flex-row gap-2" },
    OR = { key: 0, class: "badge badge-success badge-outline" },
    CR = { key: 1, class: "badge badge-error badge-outline" },
    RR = { key: 0, class: "absolute left-1/2 top-1/2 loading loading-bars loading-lg" },
    jR = Nt({
      __name: "AnnotationView",
      setup(t) {
        const e = ct(!1),
          n = ct(!1),
          r = ct(!1),
          o = ct([]);
        Zo();
        const s = () => {
            (e.value = !e.value), a.changeShowModified(e.value);
          },
          i = () => {
            (n.value = !n.value), a.changeShowOnlyDuplicates(n.value);
          },
          a = Tp(),
          l = (p) => {
            a.processAnnotation(p);
          },
          c = (p) => {
            a.modifyAnnotation(p);
          },
          u = (p, b) => {
            a.confirmAnnotation(p, b);
          },
          d = (p) => {
            a.deleteAnnotation(p);
          },
          f = (p) => {
            a.confirmAnnotations(p);
          },
          h = (p) => {
            var b;
            (o.value = []),
              p &&
                ((b = document.querySelector(`[data-annotation="${p.id}"]`)) == null || b.scrollIntoView(),
                (o.value = [p.id]));
          },
          m = (p) => {
            var _, x, k;
            const b = bp(a.textLines, p.start, p.end).lines,
              w = (x = (_ = b == null ? void 0 : b[0]) == null ? void 0 : _.gutter) == null ? void 0 : x.trim();
            w &&
              ((k = Array.from(document.querySelectorAll(".gutter.text")).find((E) => {
                var z;
                return ((z = E.textContent) == null ? void 0 : z.trim()) === w;
              })) == null ||
                k.scrollIntoView());
          };
        return (p, b) => (
          M(),
          L(
            ut,
            null,
            [
              j("div", vR, [
                at(mR, { "active-id": U(a).id }, null, 8, ["active-id"]),
                j("div", yR, [
                  at(
                    XC,
                    {
                      modelValue: U(a).selectedFilters,
                      "onUpdate:modelValue": b[0] || (b[0] = (w) => (U(a).selectedFilters = w)),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ]),
              ]),
              j(
                "div",
                { class: Lt(["flex p-1 gap-1 viewer", { "opacity-30": U(a).loading }]) },
                [
                  j(
                    "div",
                    { class: Lt(["p-4 border flex flex-col", { "w-1/2": r.value, "w-2/3": !r.value }]) },
                    [
                      j("div", bR, [
                        j("label", _R, [
                          j(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: e.value, onClick: s },
                            null,
                            8,
                            wR,
                          ),
                          j(
                            "span",
                            xR,
                            " Enkel Gewijzigde annotaties (" + kt(U(a).modifiedAnnotations.length) + ")",
                            1,
                          ),
                        ]),
                        j("label", kR, [
                          j(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: n.value, onClick: i },
                            null,
                            8,
                            SR,
                          ),
                          j("span", AR, " Enkel Duplicaten (" + kt(U(a).duplicates.length) + ")", 1),
                        ]),
                        j("label", TR, [
                          ra(
                            j(
                              "input",
                              {
                                type: "checkbox",
                                class: "toggle toggle-sm",
                                "onUpdate:modelValue": b[1] || (b[1] = (w) => (r.value = w)),
                              },
                              null,
                              512,
                            ),
                            [[ua, r.value]],
                          ),
                          b[2] || (b[2] = j("span", { class: "label-text" }, "Toon metadata", -1)),
                        ]),
                      ]),
                      at(
                        WC,
                        {
                          originalAnnotations: U(a).originalAnnotations,
                          processedAnnotations: U(a).processedAnnotations,
                          "text-lines": U(a).textLines,
                          snapper: U(a).snapper,
                          onModifyAnnotations: c,
                          onProcessesAnnotation: l,
                          onShowAnnotation: h,
                        },
                        null,
                        8,
                        ["originalAnnotations", "processedAnnotations", "text-lines", "snapper"],
                      ),
                    ],
                    2,
                  ),
                  j(
                    "div",
                    { class: Lt([" border p-4", { "w-1/3": !r.value, "w-1/2": r.value }]) },
                    [
                      j("div", ER, [
                        j(
                          "div",
                          null,
                          " Verwerkte annotaties: " +
                            kt(U(a).totalProcessedAnnotation) +
                            "/" +
                            kt(U(a).totalAnnotations),
                          1,
                        ),
                        U(a).flags.review_done ? (M(), L("div", OR, "Text verwerkt")) : Pt("", !0),
                        U(a).flags.needs_attention ? (M(), L("div", CR, "Aandacht vereist")) : Pt("", !0),
                      ]),
                      at(
                        HC,
                        {
                          modifiedAnnotations: U(a).modifiedAnnotations,
                          "text-lines": U(a).textLines,
                          highlightAnnotationIds: o.value,
                          "show-metadata": r.value,
                          snapper: U(a).snapper,
                          onConfirmAnnotation: u,
                          onDeleteAnnotation: d,
                          onConfirmAnnotations: f,
                          onModifyAnnotations: c,
                          onProcessesAnnotation: l,
                          onHighlightAnnotation: m,
                          onNeedsAttention: U(a).needsAttention,
                          onReviewDone: U(a).reviewDone,
                        },
                        null,
                        8,
                        [
                          "modifiedAnnotations",
                          "text-lines",
                          "highlightAnnotationIds",
                          "show-metadata",
                          "snapper",
                          "onNeedsAttention",
                          "onReviewDone",
                        ],
                      ),
                    ],
                    2,
                  ),
                  U(a).loading ? (M(), L("span", RR)) : Pt("", !0),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    $R = { class: "table" },
    PR = ["onClick"],
    IR = { class: "flex justify-between" },
    MR = { class: "flex-grow" },
    LR = { class: "" },
    zR = {
      key: 0,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    NR = {
      key: 1,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    DR = {
      key: 2,
      class: "h-3",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    FR = ["onClick"],
    BR = { key: 0 },
    UR = {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "{1.5}",
      stroke: "currentColor",
      class: "w-4 m-auto",
    },
    VR = { key: 1 },
    HR = { class: "flex justify-around py-2" },
    qR = { class: "join" },
    KR = ["onClick"],
    WR = Nt({
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
          o = ct([]),
          s = (h, m = !1) => {
            const p = h;
            return { page: p, label: p, disabled: m, key: h };
          },
          i = (h) => {
            var k, E, z, W;
            const m = Ap(h.count, h.pageSize);
            if (m < 1) return [];
            const p = 14,
              b = m < p ? m : p;
            let w = 1;
            m > p && ((w = h.activePage - p / 2), w < 1 ? (w = 1) : w + p > m && (w = m - p + 1));
            const _ = (V) => ({ page: 0, label: "...", disabled: !0, key: V }),
              x = Array.from({ length: b }).map((V, X) => s(X + w));
            ((k = x[0]) == null ? void 0 : k.page) > 2 && x.unshift(_(-1)),
              ((E = x[0]) == null ? void 0 : E.page) !== 1 && x.unshift(s(1)),
              ((z = x[x.length - 1]) == null ? void 0 : z.page) < m - 1 && x.push(_(-2)),
              ((W = x[x.length - 1]) == null ? void 0 : W.page) !== m && x.push(s(m)),
              (o.value = x.flat());
          };
        sa(() => {
          i(r);
        }),
          gh(() => {
            i(r);
          });
        const a = e,
          l = (h) => {
            a("changePage", h);
          },
          c = Zo(),
          u = Jo(),
          d = (h) => {
            c.push({ name: "annotation", params: { id: h.id }, query: u.query });
          },
          f = (h) => {
            let m = 1;
            r.sort.orderBy === h.id && (m = r.sort.ascending === 0 ? 1 : 0), a("changeOrder", h.id, m);
          };
        return (h, m) => (
          M(),
          L(
            ut,
            null,
            [
              j("table", $R, [
                j("thead", null, [
                  j("tr", null, [
                    (M(),
                    L(
                      ut,
                      null,
                      qt(n, (p) =>
                        j(
                          "th",
                          { key: p.id, onClick: (b) => f(p), class: "cursor-pointer" },
                          [
                            j("span", IR, [
                              j("span", MR, kt(p.label), 1),
                              j("button", LR, [
                                h.sort.orderBy !== p.id
                                  ? (M(),
                                    L(
                                      "svg",
                                      zR,
                                      m[0] ||
                                        (m[0] = [
                                          j(
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
                                  : h.sort.ascending == 0
                                    ? (M(),
                                      L(
                                        "svg",
                                        NR,
                                        m[1] ||
                                          (m[1] = [
                                            j(
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
                                    : h.sort.ascending === 1
                                      ? (M(),
                                        L(
                                          "svg",
                                          DR,
                                          m[2] ||
                                            (m[2] = [
                                              j(
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
                                      : Pt("", !0),
                              ]),
                            ]),
                          ],
                          8,
                          PR,
                        ),
                      ),
                      64,
                    )),
                  ]),
                ]),
                j("tbody", null, [
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt(
                      h.data,
                      (p) => (
                        M(),
                        L(
                          "tr",
                          { key: p.id, class: "hover hover:cursor-pointer", onClick: (b) => d(p) },
                          [
                            (M(),
                            L(
                              ut,
                              null,
                              qt(n, (b) =>
                                j(
                                  "td",
                                  { key: b.id, class: Lt({ "text-center": b.type === "boolean" }) },
                                  [
                                    b.type === "boolean"
                                      ? (M(),
                                        L("span", BR, [
                                          p[b.id]
                                            ? (M(),
                                              L(
                                                "svg",
                                                UR,
                                                m[3] ||
                                                  (m[3] = [
                                                    j(
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
                                            : Pt("", !0),
                                        ]))
                                      : (M(), L("span", VR, kt(p[b.id]), 1)),
                                  ],
                                  2,
                                ),
                              ),
                              64,
                            )),
                          ],
                          8,
                          FR,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              j("div", HR, [
                j("div", qR, [
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt(
                      o.value,
                      (p) => (
                        M(),
                        L(
                          "button",
                          {
                            key: p.key,
                            class: Lt([
                              "join-item btn btn-xs btn-outline w-8",
                              { "btn-active": p.page === h.activePage, "btn-disabled": p.disabled },
                            ]),
                            onClick: (b) => l(p.page),
                          },
                          kt(p.label),
                          11,
                          KR,
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
    GR = {
      key: 0,
      class: "dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center",
    },
    ZR = { tabindex: "0", role: "button", class: "h-full w-full" },
    JR = { tabindex: "0", class: "dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow" },
    QR = { class: "form-control" },
    YR = ["value"],
    XR = { key: 1 },
    tj = { class: "border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center" },
    ej = { class: "w-full" },
    nj = ["selected", "value", "onClick"],
    rj = Nt({
      __name: "SearchField",
      props: Qg(
        { title: {}, id: {}, multi: { type: Boolean }, filterValues: {} },
        { modelValue: {}, modelModifiers: {} },
      ),
      emits: ["update:modelValue"],
      setup(t) {
        const e = t,
          n = Ih(t, "modelValue"),
          r = rt(() => {
            var i, a;
            const s = e.filterValues ?? [];
            return (a = (i = n.value) == null ? void 0 : i.map) == null
              ? void 0
              : a.call(i, (l) => s.find((c) => c.id == l)).filter((l) => !!l);
          }),
          o = (s) => {
            const i = s.target.value;
            i === null ? (n.value = []) : (n.value = [i]);
          };
        return (s, i) =>
          s.multi
            ? (M(),
              L("div", GR, [
                j("div", ZR, [
                  Vn(kt(s.title) + ": ", 1),
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt(r.value, (a) => (M(), L("span", { class: "badge badge-ghost m-1", key: a.id }, kt(a.name), 1))),
                    128,
                  )),
                ]),
                j("ul", JR, [
                  (M(!0),
                  L(
                    ut,
                    null,
                    qt(
                      s.filterValues,
                      (a) => (
                        M(),
                        L("li", { key: a.id }, [
                          j("label", QR, [
                            ra(
                              j(
                                "input",
                                {
                                  value: a.id,
                                  "onUpdate:modelValue": i[0] || (i[0] = (l) => (n.value = l)),
                                  type: "checkbox",
                                  class: "checkbox checkbox-sm",
                                },
                                null,
                                8,
                                YR,
                              ),
                              [[ua, n.value]],
                            ),
                            j("span", null, kt(a.name), 1),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ]))
            : (M(),
              L("div", XR, [
                j("label", tj, [
                  j("div", ej, kt(s.title) + ":", 1),
                  j(
                    "select",
                    { class: "select s w-full max-w-xs", onChange: i[1] || (i[1] = (a) => o(a)) },
                    [
                      (M(!0),
                      L(
                        ut,
                        null,
                        qt(s.filterValues, (a) => {
                          var l;
                          return (
                            M(),
                            L(
                              "option",
                              {
                                key: a.id,
                                selected: ((l = n.value) == null ? void 0 : l[0]) == a.id,
                                value: a.id,
                                onClick: (c) => o(a.id),
                              },
                              kt(a.name),
                              9,
                              nj,
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
    oj = { class: "p-2 flex flex-col gap-2" },
    sj = { class: "grid grid-cols-2 gap-2" },
    ij = Nt({
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
          o = ct(Object.keys(r).reduce((l, c) => ((l[c] = []), l), {})),
          s = rt(() =>
            Object.values(r).map((l) => {
              var m, p, b;
              const c = l.id,
                u =
                  ((p = (m = n.searchFilters) == null ? void 0 : m.find((w) => w.id === c)) == null
                    ? void 0
                    : p.value) ?? [],
                d = ((b = n.filters) == null ? void 0 : b[c]) ?? [],
                f = ct(u),
                h = l.type || null;
              return (o.value[l.id] = u), { ...l, type: h, model: f, filterValues: d };
            }),
          ),
          i = e,
          a = () => {
            const l = o.value;
            i("search", l);
          };
        return (l, c) => (
          M(),
          L("div", oj, [
            j("div", sj, [
              (M(!0),
              L(
                ut,
                null,
                qt(
                  s.value,
                  (u) => (
                    M(),
                    L(
                      "div",
                      { key: u.id, class: Lt({ "col-span-2": u.multi }) },
                      [
                        at(
                          rj,
                          {
                            id: u.id,
                            title: u.title,
                            filterValues: u.filterValues,
                            multi: u.multi,
                            modelValue: o.value[u.id],
                            "onUpdate:modelValue": (d) => (o.value[u.id] = d),
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
            j("div", null, [
              j("button", { class: "btn btn-sm", onClick: a }, [
                at(U(FS), { class: "h-6" }),
                c[0] || (c[0] = Vn(" Search ")),
              ]),
            ]),
          ])
        );
      },
    }),
    aj = { class: "m-auto max-w-2xl" },
    lj = Nt({
      __name: "SearchView",
      setup(t) {
        const e = Ao();
        return (n, r) => (
          M(),
          L("div", aj, [
            at(ij, { searchFilters: U(e).searchFilters, filters: U(e).filters, onSearch: U(e).onSearch }, null, 8, [
              "searchFilters",
              "filters",
              "onSearch",
            ]),
            r[0] || (r[0] = j("hr", null, null, -1)),
            at(
              WR,
              {
                sort: U(e).sort,
                data: U(e).data,
                count: U(e).count,
                activePage: U(e).page,
                pageSize: U(e).pageSize,
                onChangePage: U(e).changePage,
                onChangeOrder: U(e).changeOrder,
              },
              null,
              8,
              ["sort", "data", "count", "activePage", "pageSize", "onChangePage", "onChangeOrder"],
            ),
          ])
        );
      },
    });
  function Ba() {
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
  let jn = Ba();
  function Ep(t) {
    jn = t;
  }
  const xr = { exec: () => null };
  function wt(t, e = "") {
    let n = typeof t == "string" ? t : t.source;
    const r = {
      replace: (o, s) => {
        let i = typeof s == "string" ? s : s.source;
        return (i = i.replace(te.caret, "$1")), (n = n.replace(o, i)), r;
      },
      getRegex: () => new RegExp(n, e),
    };
    return r;
  }
  const te = {
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
    cj = /^(?:[ \t]*(?:\n|$))+/,
    uj = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    fj = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Fr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    hj = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    Op = /(?:[*+-]|\d{1,9}[.)])/,
    Cp = wt(
      /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    )
      .replace(/bull/g, Op)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .getRegex(),
    Ua = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    dj = /^[^\n]+/,
    Va = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    pj = wt(
      /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
      .replace("label", Va)
      .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
      .getRegex(),
    gj = wt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, Op)
      .getRegex(),
    ls =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Ha = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    mj = wt(
      "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
      "i",
    )
      .replace("comment", Ha)
      .replace("tag", ls)
      .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
      .getRegex(),
    Rp = wt(Ua)
      .replace("hr", Fr)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ls)
      .getRegex(),
    vj = wt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", Rp)
      .getRegex(),
    qa = {
      blockquote: vj,
      code: uj,
      def: pj,
      fences: fj,
      heading: hj,
      hr: Fr,
      html: mj,
      lheading: Cp,
      list: gj,
      newline: cj,
      paragraph: Rp,
      table: xr,
      text: dj,
    },
    Af = wt(
      "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
      .replace("hr", Fr)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("blockquote", " {0,3}>")
      .replace("code", "(?: {4}| {0,3}	)[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ls)
      .getRegex(),
    yj = {
      ...qa,
      table: Af,
      paragraph: wt(Ua)
        .replace("hr", Fr)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("table", Af)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", ls)
        .getRegex(),
    },
    bj = {
      ...qa,
      html: wt(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace("comment", Ha)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: xr,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: wt(Ua)
        .replace("hr", Fr)
        .replace(
          "heading",
          ` *#{1,6} *[^
]`,
        )
        .replace("lheading", Cp)
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .replace("|tag", "")
        .getRegex(),
    },
    jp = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    _j = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    $p = /^( {2,}|\\)\n(?!\s*$)/,
    wj = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    Br = new RegExp("\\p{P}\\p{S}", "u"),
    xj = wt(/^((?![*_])[\spunctuation])/, "u")
      .replace(/punctuation/g, Br)
      .getRegex(),
    kj = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    Sj = wt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u")
      .replace(/punct/g, Br)
      .getRegex(),
    Aj = wt(
      "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
      "gu",
    )
      .replace(/punct/g, Br)
      .getRegex(),
    Tj = wt(
      "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
      "gu",
    )
      .replace(/punct/g, Br)
      .getRegex(),
    Ej = wt(/\\([punct])/, "gu")
      .replace(/punct/g, Br)
      .getRegex(),
    Oj = wt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        "email",
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
      )
      .getRegex(),
    Cj = wt(Ha).replace("(?:-->|$)", "-->").getRegex(),
    Rj = wt(
      "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
      .replace("comment", Cj)
      .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
      .getRegex(),
    To = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    jj = wt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
      .replace("label", To)
      .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
      .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
      .getRegex(),
    Pp = wt(/^!?\[(label)\]\[(ref)\]/)
      .replace("label", To)
      .replace("ref", Va)
      .getRegex(),
    Ip = wt(/^!?\[(ref)\](?:\[\])?/)
      .replace("ref", Va)
      .getRegex(),
    $j = wt("reflink|nolink(?!\\()", "g").replace("reflink", Pp).replace("nolink", Ip).getRegex(),
    Ka = {
      _backpedal: xr,
      anyPunctuation: Ej,
      autolink: Oj,
      blockSkip: kj,
      br: $p,
      code: _j,
      del: xr,
      emStrongLDelim: Sj,
      emStrongRDelimAst: Aj,
      emStrongRDelimUnd: Tj,
      escape: jp,
      link: jj,
      nolink: Ip,
      punctuation: xj,
      reflink: Pp,
      reflinkSearch: $j,
      tag: Rj,
      text: wj,
      url: xr,
    },
    Pj = {
      ...Ka,
      link: wt(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", To)
        .getRegex(),
      reflink: wt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", To)
        .getRegex(),
    },
    Fi = {
      ...Ka,
      escape: wt(jp).replace("])", "~|])").getRegex(),
      url: wt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
        .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    Ij = {
      ...Fi,
      br: wt($p).replace("{2,}", "*").getRegex(),
      text: wt(Fi.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    },
    ro = { normal: qa, gfm: yj, pedantic: bj },
    ar = { normal: Ka, gfm: Fi, breaks: Ij, pedantic: Pj },
    Mj = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    Tf = (t) => Mj[t];
  function _e(t, e) {
    if (e) {
      if (te.escapeTest.test(t)) return t.replace(te.escapeReplace, Tf);
    } else if (te.escapeTestNoEncode.test(t)) return t.replace(te.escapeReplaceNoEncode, Tf);
    return t;
  }
  function Ef(t) {
    try {
      t = encodeURI(t).replace(te.percentDecode, "%");
    } catch {
      return null;
    }
    return t;
  }
  function Of(t, e) {
    var s;
    const n = t.replace(te.findPipe, (i, a, l) => {
        let c = !1,
          u = a;
        for (; --u >= 0 && l[u] === "\\"; ) c = !c;
        return c ? "|" : " |";
      }),
      r = n.split(te.splitPipe);
    let o = 0;
    if ((r[0].trim() || r.shift(), r.length > 0 && !((s = r.at(-1)) != null && s.trim()) && r.pop(), e))
      if (r.length > e) r.splice(e);
      else for (; r.length < e; ) r.push("");
    for (; o < r.length; o++) r[o] = r[o].trim().replace(te.slashPipe, "|");
    return r;
  }
  function lr(t, e, n) {
    const r = t.length;
    if (r === 0) return "";
    let o = 0;
    for (; o < r; ) {
      const s = t.charAt(r - o - 1);
      if (s === e && !n) o++;
      else if (s !== e && n) o++;
      else break;
    }
    return t.slice(0, r - o);
  }
  function Lj(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for (let r = 0; r < t.length; r++)
      if (t[r] === "\\") r++;
      else if (t[r] === e[0]) n++;
      else if (t[r] === e[1] && (n--, n < 0)) return r;
    return -1;
  }
  function Cf(t, e, n, r, o) {
    const s = e.href,
      i = e.title || null,
      a = t[1].replace(o.other.outputLinkReplace, "$1");
    if (t[0].charAt(0) !== "!") {
      r.state.inLink = !0;
      const l = { type: "link", raw: n, href: s, title: i, text: a, tokens: r.inlineTokens(a) };
      return (r.state.inLink = !1), l;
    }
    return { type: "image", raw: n, href: s, title: i, text: a };
  }
  function zj(t, e, n) {
    const r = t.match(n.other.indentCodeCompensation);
    if (r === null) return e;
    const o = r[1];
    return e
      .split(
        `
`,
      )
      .map((s) => {
        const i = s.match(n.other.beginningSpace);
        if (i === null) return s;
        const [a] = i;
        return a.length >= o.length ? s.slice(o.length) : s;
      }).join(`
`);
  }
  class Eo {
    constructor(e) {
      Z(this, "options");
      Z(this, "rules");
      Z(this, "lexer");
      this.options = e || jn;
    }
    space(e) {
      const n = this.rules.block.newline.exec(e);
      if (n && n[0].length > 0) return { type: "space", raw: n[0] };
    }
    code(e) {
      const n = this.rules.block.code.exec(e);
      if (n) {
        const r = n[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: n[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic
            ? r
            : lr(
                r,
                `
`,
              ),
        };
      }
    }
    fences(e) {
      const n = this.rules.block.fences.exec(e);
      if (n) {
        const r = n[0],
          o = zj(r, n[3] || "", this.rules);
        return {
          type: "code",
          raw: r,
          lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
          text: o,
        };
      }
    }
    heading(e) {
      const n = this.rules.block.heading.exec(e);
      if (n) {
        let r = n[2].trim();
        if (this.rules.other.endingHash.test(r)) {
          const o = lr(r, "#");
          (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (r = o.trim());
        }
        return { type: "heading", raw: n[0], depth: n[1].length, text: r, tokens: this.lexer.inline(r) };
      }
    }
    hr(e) {
      const n = this.rules.block.hr.exec(e);
      if (n)
        return {
          type: "hr",
          raw: lr(
            n[0],
            `
`,
          ),
        };
    }
    blockquote(e) {
      const n = this.rules.block.blockquote.exec(e);
      if (n) {
        let r = lr(
            n[0],
            `
`,
          ).split(`
`),
          o = "",
          s = "";
        const i = [];
        for (; r.length > 0; ) {
          let a = !1;
          const l = [];
          let c;
          for (c = 0; c < r.length; c++)
            if (this.rules.other.blockquoteStart.test(r[c])) l.push(r[c]), (a = !0);
            else if (!a) l.push(r[c]);
            else break;
          r = r.slice(c);
          const u = l.join(`
`),
            d = u
              .replace(
                this.rules.other.blockquoteSetextReplace,
                `
    $1`,
              )
              .replace(this.rules.other.blockquoteSetextReplace2, "");
          (o = o
            ? `${o}
${u}`
            : u),
            (s = s
              ? `${s}
${d}`
              : d);
          const f = this.lexer.state.top;
          if (
            ((this.lexer.state.top = !0), this.lexer.blockTokens(d, i, !0), (this.lexer.state.top = f), r.length === 0)
          )
            break;
          const h = i.at(-1);
          if ((h == null ? void 0 : h.type) === "code") break;
          if ((h == null ? void 0 : h.type) === "blockquote") {
            const m = h,
              p =
                m.raw +
                `
` +
                r.join(`
`),
              b = this.blockquote(p);
            (i[i.length - 1] = b),
              (o = o.substring(0, o.length - m.raw.length) + b.raw),
              (s = s.substring(0, s.length - m.text.length) + b.text);
            break;
          } else if ((h == null ? void 0 : h.type) === "list") {
            const m = h,
              p =
                m.raw +
                `
` +
                r.join(`
`),
              b = this.list(p);
            (i[i.length - 1] = b),
              (o = o.substring(0, o.length - h.raw.length) + b.raw),
              (s = s.substring(0, s.length - m.raw.length) + b.raw),
              (r = p.substring(i.at(-1).raw.length).split(`
`));
            continue;
          }
        }
        return { type: "blockquote", raw: o, tokens: i, text: s };
      }
    }
    list(e) {
      let n = this.rules.block.list.exec(e);
      if (n) {
        let r = n[1].trim();
        const o = r.length > 1,
          s = { type: "list", raw: "", ordered: o, start: o ? +r.slice(0, -1) : "", loose: !1, items: [] };
        (r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`), this.options.pedantic && (r = o ? r : "[*+-]");
        const i = this.rules.other.listItemRegex(r);
        let a = !1;
        for (; e; ) {
          let c = !1,
            u = "",
            d = "";
          if (!(n = i.exec(e)) || this.rules.block.hr.test(e)) break;
          (u = n[0]), (e = e.substring(u.length));
          let f = n[2]
              .split(
                `
`,
                1,
              )[0]
              .replace(this.rules.other.listReplaceTabs, (_) => " ".repeat(3 * _.length)),
            h = e.split(
              `
`,
              1,
            )[0],
            m = !f.trim(),
            p = 0;
          if (
            (this.options.pedantic
              ? ((p = 2), (d = f.trimStart()))
              : m
                ? (p = n[1].length + 1)
                : ((p = n[2].search(this.rules.other.nonSpaceChar)),
                  (p = p > 4 ? 1 : p),
                  (d = f.slice(p)),
                  (p += n[1].length)),
            m &&
              this.rules.other.blankLine.test(h) &&
              ((u +=
                h +
                `
`),
              (e = e.substring(h.length + 1)),
              (c = !0)),
            !c)
          ) {
            const _ = this.rules.other.nextBulletRegex(p),
              x = this.rules.other.hrRegex(p),
              k = this.rules.other.fencesBeginRegex(p),
              E = this.rules.other.headingBeginRegex(p),
              z = this.rules.other.htmlBeginRegex(p);
            for (; e; ) {
              const W = e.split(
                `
`,
                1,
              )[0];
              let V;
              if (
                ((h = W),
                this.options.pedantic
                  ? ((h = h.replace(this.rules.other.listReplaceNesting, "  ")), (V = h))
                  : (V = h.replace(this.rules.other.tabCharGlobal, "    ")),
                k.test(h) || E.test(h) || z.test(h) || _.test(h) || x.test(h))
              )
                break;
              if (V.search(this.rules.other.nonSpaceChar) >= p || !h.trim())
                d +=
                  `
` + V.slice(p);
              else {
                if (
                  m ||
                  f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 ||
                  k.test(f) ||
                  E.test(f) ||
                  x.test(f)
                )
                  break;
                d +=
                  `
` + h;
              }
              !m && !h.trim() && (m = !0),
                (u +=
                  W +
                  `
`),
                (e = e.substring(W.length + 1)),
                (f = V.slice(p));
            }
          }
          s.loose || (a ? (s.loose = !0) : this.rules.other.doubleBlankLine.test(u) && (a = !0));
          let b = null,
            w;
          this.options.gfm &&
            ((b = this.rules.other.listIsTask.exec(d)),
            b && ((w = b[0] !== "[ ] "), (d = d.replace(this.rules.other.listReplaceTask, "")))),
            s.items.push({ type: "list_item", raw: u, task: !!b, checked: w, loose: !1, text: d, tokens: [] }),
            (s.raw += u);
        }
        const l = s.items.at(-1);
        l && ((l.raw = l.raw.trimEnd()), (l.text = l.text.trimEnd())), (s.raw = s.raw.trimEnd());
        for (let c = 0; c < s.items.length; c++)
          if (
            ((this.lexer.state.top = !1), (s.items[c].tokens = this.lexer.blockTokens(s.items[c].text, [])), !s.loose)
          ) {
            const u = s.items[c].tokens.filter((f) => f.type === "space"),
              d = u.length > 0 && u.some((f) => this.rules.other.anyLine.test(f.raw));
            s.loose = d;
          }
        if (s.loose) for (let c = 0; c < s.items.length; c++) s.items[c].loose = !0;
        return s;
      }
    }
    html(e) {
      const n = this.rules.block.html.exec(e);
      if (n)
        return {
          type: "html",
          block: !0,
          raw: n[0],
          pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
          text: n[0],
        };
    }
    def(e) {
      const n = this.rules.block.def.exec(e);
      if (n) {
        const r = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
          o = n[2]
            ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1")
            : "",
          s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
        return { type: "def", tag: r, raw: n[0], href: o, title: s };
      }
    }
    table(e) {
      var a;
      const n = this.rules.block.table.exec(e);
      if (!n || !this.rules.other.tableDelimiter.test(n[2])) return;
      const r = Of(n[1]),
        o = n[2].replace(this.rules.other.tableAlignChars, "").split("|"),
        s =
          (a = n[3]) != null && a.trim()
            ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
            : [],
        i = { type: "table", raw: n[0], header: [], align: [], rows: [] };
      if (r.length === o.length) {
        for (const l of o)
          this.rules.other.tableAlignRight.test(l)
            ? i.align.push("right")
            : this.rules.other.tableAlignCenter.test(l)
              ? i.align.push("center")
              : this.rules.other.tableAlignLeft.test(l)
                ? i.align.push("left")
                : i.align.push(null);
        for (let l = 0; l < r.length; l++)
          i.header.push({ text: r[l], tokens: this.lexer.inline(r[l]), header: !0, align: i.align[l] });
        for (const l of s)
          i.rows.push(
            Of(l, i.header.length).map((c, u) => ({
              text: c,
              tokens: this.lexer.inline(c),
              header: !1,
              align: i.align[u],
            })),
          );
        return i;
      }
    }
    lheading(e) {
      const n = this.rules.block.lheading.exec(e);
      if (n)
        return {
          type: "heading",
          raw: n[0],
          depth: n[2].charAt(0) === "=" ? 1 : 2,
          text: n[1],
          tokens: this.lexer.inline(n[1]),
        };
    }
    paragraph(e) {
      const n = this.rules.block.paragraph.exec(e);
      if (n) {
        const r =
          n[1].charAt(n[1].length - 1) ===
          `
`
            ? n[1].slice(0, -1)
            : n[1];
        return { type: "paragraph", raw: n[0], text: r, tokens: this.lexer.inline(r) };
      }
    }
    text(e) {
      const n = this.rules.block.text.exec(e);
      if (n) return { type: "text", raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) };
    }
    escape(e) {
      const n = this.rules.inline.escape.exec(e);
      if (n) return { type: "escape", raw: n[0], text: n[1] };
    }
    tag(e) {
      const n = this.rules.inline.tag.exec(e);
      if (n)
        return (
          !this.lexer.state.inLink && this.rules.other.startATag.test(n[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink && this.rules.other.endATag.test(n[0]) && (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              this.rules.other.endPreScriptTag.test(n[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: "html",
            raw: n[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: n[0],
          }
        );
    }
    link(e) {
      const n = this.rules.inline.link.exec(e);
      if (n) {
        const r = n[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
          if (!this.rules.other.endAngleBracket.test(r)) return;
          const i = lr(r.slice(0, -1), "\\");
          if ((r.length - i.length) % 2 === 0) return;
        } else {
          const i = Lj(n[2], "()");
          if (i > -1) {
            const l = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + i;
            (n[2] = n[2].substring(0, i)), (n[0] = n[0].substring(0, l).trim()), (n[3] = "");
          }
        }
        let o = n[2],
          s = "";
        if (this.options.pedantic) {
          const i = this.rules.other.pedanticHrefTitle.exec(o);
          i && ((o = i[1]), (s = i[3]));
        } else s = n[3] ? n[3].slice(1, -1) : "";
        return (
          (o = o.trim()),
          this.rules.other.startAngleBracket.test(o) &&
            (this.options.pedantic && !this.rules.other.endAngleBracket.test(r)
              ? (o = o.slice(1))
              : (o = o.slice(1, -1))),
          Cf(
            n,
            {
              href: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
              title: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
            },
            n[0],
            this.lexer,
            this.rules,
          )
        );
      }
    }
    reflink(e, n) {
      let r;
      if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
        const o = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
          s = n[o.toLowerCase()];
        if (!s) {
          const i = r[0].charAt(0);
          return { type: "text", raw: i, text: i };
        }
        return Cf(r, s, r[0], this.lexer, this.rules);
      }
    }
    emStrong(e, n, r = "") {
      let o = this.rules.inline.emStrongLDelim.exec(e);
      if (!o || (o[3] && r.match(this.rules.other.unicodeAlphaNumeric))) return;
      if (!(o[1] || o[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
        const i = [...o[0]].length - 1;
        let a,
          l,
          c = i,
          u = 0;
        const d = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (d.lastIndex = 0, n = n.slice(-1 * e.length + i); (o = d.exec(n)) != null; ) {
          if (((a = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !a)) continue;
          if (((l = [...a].length), o[3] || o[4])) {
            c += l;
            continue;
          } else if ((o[5] || o[6]) && i % 3 && !((i + l) % 3)) {
            u += l;
            continue;
          }
          if (((c -= l), c > 0)) continue;
          l = Math.min(l, l + c + u);
          const f = [...o[0]][0].length,
            h = e.slice(0, i + o.index + f + l);
          if (Math.min(i, l) % 2) {
            const p = h.slice(1, -1);
            return { type: "em", raw: h, text: p, tokens: this.lexer.inlineTokens(p) };
          }
          const m = h.slice(2, -2);
          return { type: "strong", raw: h, text: m, tokens: this.lexer.inlineTokens(m) };
        }
      }
    }
    codespan(e) {
      const n = this.rules.inline.code.exec(e);
      if (n) {
        let r = n[2].replace(this.rules.other.newLineCharGlobal, " ");
        const o = this.rules.other.nonSpaceChar.test(r),
          s = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
        return o && s && (r = r.substring(1, r.length - 1)), { type: "codespan", raw: n[0], text: r };
      }
    }
    br(e) {
      const n = this.rules.inline.br.exec(e);
      if (n) return { type: "br", raw: n[0] };
    }
    del(e) {
      const n = this.rules.inline.del.exec(e);
      if (n) return { type: "del", raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) };
    }
    autolink(e) {
      const n = this.rules.inline.autolink.exec(e);
      if (n) {
        let r, o;
        return (
          n[2] === "@" ? ((r = n[1]), (o = "mailto:" + r)) : ((r = n[1]), (o = r)),
          { type: "link", raw: n[0], text: r, href: o, tokens: [{ type: "text", raw: r, text: r }] }
        );
      }
    }
    url(e) {
      var r;
      let n;
      if ((n = this.rules.inline.url.exec(e))) {
        let o, s;
        if (n[2] === "@") (o = n[0]), (s = "mailto:" + o);
        else {
          let i;
          do (i = n[0]), (n[0] = ((r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) ?? "");
          while (i !== n[0]);
          (o = n[0]), n[1] === "www." ? (s = "http://" + n[0]) : (s = n[0]);
        }
        return { type: "link", raw: n[0], text: o, href: s, tokens: [{ type: "text", raw: o, text: o }] };
      }
    }
    inlineText(e) {
      const n = this.rules.inline.text.exec(e);
      if (n) {
        const r = this.lexer.state.inRawBlock;
        return { type: "text", raw: n[0], text: n[0], escaped: r };
      }
    }
  }
  class ce {
    constructor(e) {
      Z(this, "tokens");
      Z(this, "options");
      Z(this, "state");
      Z(this, "tokenizer");
      Z(this, "inlineQueue");
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || jn),
        (this.options.tokenizer = this.options.tokenizer || new Eo()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      const n = { other: te, block: ro.normal, inline: ar.normal };
      this.options.pedantic
        ? ((n.block = ro.pedantic), (n.inline = ar.pedantic))
        : this.options.gfm && ((n.block = ro.gfm), this.options.breaks ? (n.inline = ar.breaks) : (n.inline = ar.gfm)),
        (this.tokenizer.rules = n);
    }
    static get rules() {
      return { block: ro, inline: ar };
    }
    static lex(e, n) {
      return new ce(n).lex(e);
    }
    static lexInline(e, n) {
      return new ce(n).inlineTokens(e);
    }
    lex(e) {
      (e = e.replace(
        te.carriageReturn,
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
      var o, s, i;
      for (this.options.pedantic && (e = e.replace(te.tabCharGlobal, "    ").replace(te.spaceLine, "")); e; ) {
        let a;
        if (
          (s = (o = this.options.extensions) == null ? void 0 : o.block) != null &&
          s.some((c) => ((a = c.call({ lexer: this }, e, n)) ? ((e = e.substring(a.raw.length)), n.push(a), !0) : !1))
        )
          continue;
        if ((a = this.tokenizer.space(e))) {
          e = e.substring(a.raw.length);
          const c = n.at(-1);
          a.raw.length === 1 && c !== void 0
            ? (c.raw += `
`)
            : n.push(a);
          continue;
        }
        if ((a = this.tokenizer.code(e))) {
          e = e.substring(a.raw.length);
          const c = n.at(-1);
          (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text"
            ? ((c.raw +=
                `
` + a.raw),
              (c.text +=
                `
` + a.text),
              (this.inlineQueue.at(-1).src = c.text))
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
          const c = n.at(-1);
          (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text"
            ? ((c.raw +=
                `
` + a.raw),
              (c.text +=
                `
` + a.raw),
              (this.inlineQueue.at(-1).src = c.text))
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
        if ((i = this.options.extensions) != null && i.startBlock) {
          let c = 1 / 0;
          const u = e.slice(1);
          let d;
          this.options.extensions.startBlock.forEach((f) => {
            (d = f.call({ lexer: this }, u)), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
          }),
            c < 1 / 0 && c >= 0 && (l = e.substring(0, c + 1));
        }
        if (this.state.top && (a = this.tokenizer.paragraph(l))) {
          const c = n.at(-1);
          r && (c == null ? void 0 : c.type) === "paragraph"
            ? ((c.raw +=
                `
` + a.raw),
              (c.text +=
                `
` + a.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = c.text))
            : n.push(a),
            (r = l.length !== e.length),
            (e = e.substring(a.raw.length));
          continue;
        }
        if ((a = this.tokenizer.text(e))) {
          e = e.substring(a.raw.length);
          const c = n.at(-1);
          (c == null ? void 0 : c.type) === "text"
            ? ((c.raw +=
                `
` + a.raw),
              (c.text +=
                `
` + a.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = c.text))
            : n.push(a);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else throw new Error(c);
        }
      }
      return (this.state.top = !0), n;
    }
    inline(e, n = []) {
      return this.inlineQueue.push({ src: e, tokens: n }), n;
    }
    inlineTokens(e, n = []) {
      var a, l, c;
      let r = e,
        o = null;
      if (this.tokens.links) {
        const u = Object.keys(this.tokens.links);
        if (u.length > 0)
          for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
            u.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) &&
              (r =
                r.slice(0, o.index) +
                "[" +
                "a".repeat(o[0].length - 2) +
                "]" +
                r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
        r =
          r.slice(0, o.index) +
          "[" +
          "a".repeat(o[0].length - 2) +
          "]" +
          r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
        r = r.slice(0, o.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      let s = !1,
        i = "";
      for (; e; ) {
        s || (i = ""), (s = !1);
        let u;
        if (
          (l = (a = this.options.extensions) == null ? void 0 : a.inline) != null &&
          l.some((f) => ((u = f.call({ lexer: this }, e, n)) ? ((e = e.substring(u.raw.length)), n.push(u), !0) : !1))
        )
          continue;
        if ((u = this.tokenizer.escape(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.tag(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.link(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.reflink(e, this.tokens.links))) {
          e = e.substring(u.raw.length);
          const f = n.at(-1);
          u.type === "text" && (f == null ? void 0 : f.type) === "text"
            ? ((f.raw += u.raw), (f.text += u.text))
            : n.push(u);
          continue;
        }
        if ((u = this.tokenizer.emStrong(e, r, i))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.codespan(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.br(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.del(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if ((u = this.tokenizer.autolink(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        if (!this.state.inLink && (u = this.tokenizer.url(e))) {
          (e = e.substring(u.raw.length)), n.push(u);
          continue;
        }
        let d = e;
        if ((c = this.options.extensions) != null && c.startInline) {
          let f = 1 / 0;
          const h = e.slice(1);
          let m;
          this.options.extensions.startInline.forEach((p) => {
            (m = p.call({ lexer: this }, h)), typeof m == "number" && m >= 0 && (f = Math.min(f, m));
          }),
            f < 1 / 0 && f >= 0 && (d = e.substring(0, f + 1));
        }
        if ((u = this.tokenizer.inlineText(d))) {
          (e = e.substring(u.raw.length)), u.raw.slice(-1) !== "_" && (i = u.raw.slice(-1)), (s = !0);
          const f = n.at(-1);
          (f == null ? void 0 : f.type) === "text" ? ((f.raw += u.raw), (f.text += u.text)) : n.push(u);
          continue;
        }
        if (e) {
          const f = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else throw new Error(f);
        }
      }
      return n;
    }
  }
  class Oo {
    constructor(e) {
      Z(this, "options");
      Z(this, "parser");
      this.options = e || jn;
    }
    space(e) {
      return "";
    }
    code({ text: e, lang: n, escaped: r }) {
      var i;
      const o = (i = (n || "").match(te.notSpaceStart)) == null ? void 0 : i[0],
        s =
          e.replace(te.endingNewline, "") +
          `
`;
      return o
        ? '<pre><code class="language-' +
            _e(o) +
            '">' +
            (r ? s : _e(s, !0)) +
            `</code></pre>
`
        : "<pre><code>" +
            (r ? s : _e(s, !0)) +
            `</code></pre>
`;
    }
    blockquote({ tokens: e }) {
      return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html({ text: e }) {
      return e;
    }
    heading({ tokens: e, depth: n }) {
      return `<h${n}>${this.parser.parseInline(e)}</h${n}>
`;
    }
    hr(e) {
      return `<hr>
`;
    }
    list(e) {
      const n = e.ordered,
        r = e.start;
      let o = "";
      for (let a = 0; a < e.items.length; a++) {
        const l = e.items[a];
        o += this.listitem(l);
      }
      const s = n ? "ol" : "ul",
        i = n && r !== 1 ? ' start="' + r + '"' : "";
      return (
        "<" +
        s +
        i +
        `>
` +
        o +
        "</" +
        s +
        `>
`
      );
    }
    listitem(e) {
      var r;
      let n = "";
      if (e.task) {
        const o = this.checkbox({ checked: !!e.checked });
        e.loose
          ? ((r = e.tokens[0]) == null ? void 0 : r.type) === "paragraph"
            ? ((e.tokens[0].text = o + " " + e.tokens[0].text),
              e.tokens[0].tokens &&
                e.tokens[0].tokens.length > 0 &&
                e.tokens[0].tokens[0].type === "text" &&
                ((e.tokens[0].tokens[0].text = o + " " + _e(e.tokens[0].tokens[0].text)),
                (e.tokens[0].tokens[0].escaped = !0)))
            : e.tokens.unshift({ type: "text", raw: o + " ", text: o + " ", escaped: !0 })
          : (n += o + " ");
      }
      return (
        (n += this.parser.parse(e.tokens, !!e.loose)),
        `<li>${n}</li>
`
      );
    }
    checkbox({ checked: e }) {
      return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens: e }) {
      return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
      let n = "",
        r = "";
      for (let s = 0; s < e.header.length; s++) r += this.tablecell(e.header[s]);
      n += this.tablerow({ text: r });
      let o = "";
      for (let s = 0; s < e.rows.length; s++) {
        const i = e.rows[s];
        r = "";
        for (let a = 0; a < i.length; a++) r += this.tablecell(i[a]);
        o += this.tablerow({ text: r });
      }
      return (
        o && (o = `<tbody>${o}</tbody>`),
        `<table>
<thead>
` +
          n +
          `</thead>
` +
          o +
          `</table>
`
      );
    }
    tablerow({ text: e }) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
      const n = this.parser.parseInline(e.tokens),
        r = e.header ? "th" : "td";
      return (
        (e.align ? `<${r} align="${e.align}">` : `<${r}>`) +
        n +
        `</${r}>
`
      );
    }
    strong({ tokens: e }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
      return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
      return `<code>${_e(e, !0)}</code>`;
    }
    br(e) {
      return "<br>";
    }
    del({ tokens: e }) {
      return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: n, tokens: r }) {
      const o = this.parser.parseInline(r),
        s = Ef(e);
      if (s === null) return o;
      e = s;
      let i = '<a href="' + e + '"';
      return n && (i += ' title="' + _e(n) + '"'), (i += ">" + o + "</a>"), i;
    }
    image({ href: e, title: n, text: r }) {
      const o = Ef(e);
      if (o === null) return _e(r);
      e = o;
      let s = `<img src="${e}" alt="${r}"`;
      return n && (s += ` title="${_e(n)}"`), (s += ">"), s;
    }
    text(e) {
      return "tokens" in e && e.tokens
        ? this.parser.parseInline(e.tokens)
        : "escaped" in e && e.escaped
          ? e.text
          : _e(e.text);
    }
  }
  class Wa {
    strong({ text: e }) {
      return e;
    }
    em({ text: e }) {
      return e;
    }
    codespan({ text: e }) {
      return e;
    }
    del({ text: e }) {
      return e;
    }
    html({ text: e }) {
      return e;
    }
    text({ text: e }) {
      return e;
    }
    link({ text: e }) {
      return "" + e;
    }
    image({ text: e }) {
      return "" + e;
    }
    br() {
      return "";
    }
  }
  class ue {
    constructor(e) {
      Z(this, "options");
      Z(this, "renderer");
      Z(this, "textRenderer");
      (this.options = e || jn),
        (this.options.renderer = this.options.renderer || new Oo()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new Wa());
    }
    static parse(e, n) {
      return new ue(n).parse(e);
    }
    static parseInline(e, n) {
      return new ue(n).parseInline(e);
    }
    parse(e, n = !0) {
      var o, s;
      let r = "";
      for (let i = 0; i < e.length; i++) {
        const a = e[i];
        if ((s = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && s[a.type]) {
          const c = a,
            u = this.options.extensions.renderers[c.type].call({ parser: this }, c);
          if (
            u !== !1 ||
            !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(
              c.type,
            )
          ) {
            r += u || "";
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
            let c = l,
              u = this.renderer.text(c);
            for (; i + 1 < e.length && e[i + 1].type === "text"; )
              (c = e[++i]),
                (u +=
                  `
` + this.renderer.text(c));
            n
              ? (r += this.renderer.paragraph({
                  type: "paragraph",
                  raw: u,
                  text: u,
                  tokens: [{ type: "text", raw: u, text: u, escaped: !0 }],
                }))
              : (r += u);
            continue;
          }
          default: {
            const c = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent) return console.error(c), "";
            throw new Error(c);
          }
        }
      }
      return r;
    }
    parseInline(e, n = this.renderer) {
      var o, s;
      let r = "";
      for (let i = 0; i < e.length; i++) {
        const a = e[i];
        if ((s = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && s[a.type]) {
          const c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
          if (
            c !== !1 ||
            !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)
          ) {
            r += c || "";
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
            const c = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent) return console.error(c), "";
            throw new Error(c);
          }
        }
      }
      return r;
    }
  }
  class kr {
    constructor(e) {
      Z(this, "options");
      Z(this, "block");
      this.options = e || jn;
    }
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    provideLexer() {
      return this.block ? ce.lex : ce.lexInline;
    }
    provideParser() {
      return this.block ? ue.parse : ue.parseInline;
    }
  }
  Z(kr, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"]));
  class Nj {
    constructor(...e) {
      Z(this, "defaults", Ba());
      Z(this, "options", this.setOptions);
      Z(this, "parse", this.parseMarkdown(!0));
      Z(this, "parseInline", this.parseMarkdown(!1));
      Z(this, "Parser", ue);
      Z(this, "Renderer", Oo);
      Z(this, "TextRenderer", Wa);
      Z(this, "Lexer", ce);
      Z(this, "Tokenizer", Eo);
      Z(this, "Hooks", kr);
      this.use(...e);
    }
    walkTokens(e, n) {
      var o, s;
      let r = [];
      for (const i of e)
        switch (((r = r.concat(n.call(this, i))), i.type)) {
          case "table": {
            const a = i;
            for (const l of a.header) r = r.concat(this.walkTokens(l.tokens, n));
            for (const l of a.rows) for (const c of l) r = r.concat(this.walkTokens(c.tokens, n));
            break;
          }
          case "list": {
            const a = i;
            r = r.concat(this.walkTokens(a.items, n));
            break;
          }
          default: {
            const a = i;
            (s = (o = this.defaults.extensions) == null ? void 0 : o.childTokens) != null && s[a.type]
              ? this.defaults.extensions.childTokens[a.type].forEach((l) => {
                  const c = a[l].flat(1 / 0);
                  r = r.concat(this.walkTokens(c, n));
                })
              : a.tokens && (r = r.concat(this.walkTokens(a.tokens, n)));
          }
        }
      return r;
    }
    use(...e) {
      const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
      return (
        e.forEach((r) => {
          const o = { ...r };
          if (
            ((o.async = this.defaults.async || o.async || !1),
            r.extensions &&
              (r.extensions.forEach((s) => {
                if (!s.name) throw new Error("extension name required");
                if ("renderer" in s) {
                  const i = n.renderers[s.name];
                  i
                    ? (n.renderers[s.name] = function (...a) {
                        let l = s.renderer.apply(this, a);
                        return l === !1 && (l = i.apply(this, a)), l;
                      })
                    : (n.renderers[s.name] = s.renderer);
                }
                if ("tokenizer" in s) {
                  if (!s.level || (s.level !== "block" && s.level !== "inline"))
                    throw new Error("extension level must be 'block' or 'inline'");
                  const i = n[s.level];
                  i ? i.unshift(s.tokenizer) : (n[s.level] = [s.tokenizer]),
                    s.start &&
                      (s.level === "block"
                        ? n.startBlock
                          ? n.startBlock.push(s.start)
                          : (n.startBlock = [s.start])
                        : s.level === "inline" &&
                          (n.startInline ? n.startInline.push(s.start) : (n.startInline = [s.start])));
                }
                "childTokens" in s && s.childTokens && (n.childTokens[s.name] = s.childTokens);
              }),
              (o.extensions = n)),
            r.renderer)
          ) {
            const s = this.defaults.renderer || new Oo(this.defaults);
            for (const i in r.renderer) {
              if (!(i in s)) throw new Error(`renderer '${i}' does not exist`);
              if (["options", "parser"].includes(i)) continue;
              const a = i,
                l = r.renderer[a],
                c = s[a];
              s[a] = (...u) => {
                let d = l.apply(s, u);
                return d === !1 && (d = c.apply(s, u)), d || "";
              };
            }
            o.renderer = s;
          }
          if (r.tokenizer) {
            const s = this.defaults.tokenizer || new Eo(this.defaults);
            for (const i in r.tokenizer) {
              if (!(i in s)) throw new Error(`tokenizer '${i}' does not exist`);
              if (["options", "rules", "lexer"].includes(i)) continue;
              const a = i,
                l = r.tokenizer[a],
                c = s[a];
              s[a] = (...u) => {
                let d = l.apply(s, u);
                return d === !1 && (d = c.apply(s, u)), d;
              };
            }
            o.tokenizer = s;
          }
          if (r.hooks) {
            const s = this.defaults.hooks || new kr();
            for (const i in r.hooks) {
              if (!(i in s)) throw new Error(`hook '${i}' does not exist`);
              if (["options", "block"].includes(i)) continue;
              const a = i,
                l = r.hooks[a],
                c = s[a];
              kr.passThroughHooks.has(i)
                ? (s[a] = (u) => {
                    if (this.defaults.async) return Promise.resolve(l.call(s, u)).then((f) => c.call(s, f));
                    const d = l.call(s, u);
                    return c.call(s, d);
                  })
                : (s[a] = (...u) => {
                    let d = l.apply(s, u);
                    return d === !1 && (d = c.apply(s, u)), d;
                  });
            }
            o.hooks = s;
          }
          if (r.walkTokens) {
            const s = this.defaults.walkTokens,
              i = r.walkTokens;
            o.walkTokens = function (a) {
              let l = [];
              return l.push(i.call(this, a)), s && (l = l.concat(s.call(this, a))), l;
            };
          }
          this.defaults = { ...this.defaults, ...o };
        }),
        this
      );
    }
    setOptions(e) {
      return (this.defaults = { ...this.defaults, ...e }), this;
    }
    lexer(e, n) {
      return ce.lex(e, n ?? this.defaults);
    }
    parser(e, n) {
      return ue.parse(e, n ?? this.defaults);
    }
    parseMarkdown(e) {
      return (r, o) => {
        const s = { ...o },
          i = { ...this.defaults, ...s },
          a = this.onError(!!i.silent, !!i.async);
        if (this.defaults.async === !0 && s.async === !1)
          return a(
            new Error(
              "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
            ),
          );
        if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
        if (typeof r != "string")
          return a(
            new Error(
              "marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected",
            ),
          );
        i.hooks && ((i.hooks.options = i), (i.hooks.block = e));
        const l = i.hooks ? i.hooks.provideLexer() : e ? ce.lex : ce.lexInline,
          c = i.hooks ? i.hooks.provideParser() : e ? ue.parse : ue.parseInline;
        if (i.async)
          return Promise.resolve(i.hooks ? i.hooks.preprocess(r) : r)
            .then((u) => l(u, i))
            .then((u) => (i.hooks ? i.hooks.processAllTokens(u) : u))
            .then((u) => (i.walkTokens ? Promise.all(this.walkTokens(u, i.walkTokens)).then(() => u) : u))
            .then((u) => c(u, i))
            .then((u) => (i.hooks ? i.hooks.postprocess(u) : u))
            .catch(a);
        try {
          i.hooks && (r = i.hooks.preprocess(r));
          let u = l(r, i);
          i.hooks && (u = i.hooks.processAllTokens(u)), i.walkTokens && this.walkTokens(u, i.walkTokens);
          let d = c(u, i);
          return i.hooks && (d = i.hooks.postprocess(d)), d;
        } catch (u) {
          return a(u);
        }
      };
    }
    onError(e, n) {
      return (r) => {
        if (
          ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
          e)
        ) {
          const o = "<p>An error occurred:</p><pre>" + _e(r.message + "", !0) + "</pre>";
          return n ? Promise.resolve(o) : o;
        }
        if (n) return Promise.reject(r);
        throw r;
      };
    }
  }
  const xn = new Nj();
  function bt(t, e) {
    return xn.parse(t, e);
  }
  bt.options = bt.setOptions = function (t) {
    return xn.setOptions(t), (bt.defaults = xn.defaults), Ep(bt.defaults), bt;
  };
  bt.getDefaults = Ba;
  bt.defaults = jn;
  bt.use = function (...t) {
    return xn.use(...t), (bt.defaults = xn.defaults), Ep(bt.defaults), bt;
  };
  bt.walkTokens = function (t, e) {
    return xn.walkTokens(t, e);
  };
  bt.parseInline = xn.parseInline;
  bt.Parser = ue;
  bt.parser = ue.parse;
  bt.Renderer = Oo;
  bt.TextRenderer = Wa;
  bt.Lexer = ce;
  bt.lexer = ce.lex;
  bt.Tokenizer = Eo;
  bt.Hooks = kr;
  bt.parse = bt;
  bt.options;
  bt.setOptions;
  bt.use;
  bt.walkTokens;
  bt.parseInline;
  ue.parse;
  ce.lex;
  const Dj = { class: "m-4 prose" },
    Fj = ["innerHTML"],
    Bj = Nt({
      __name: "DocsView",
      setup(t) {
        const e = ct("");
        return (
          fetch("/annotation_flow/assets/docs/rules.md")
            .then((n) => n.text())
            .then((n) => bt(n))
            .then((n) => {
              e.value = n;
            }),
          (n, r) => (M(), L("div", Dj, [j("div", { innerHTML: e.value }, null, 8, Fj)]))
        );
      },
    }),
    Uj = [
      { path: "/", name: "search", component: lj, meta: { title: "Zoeken" } },
      { path: "/docs", name: "docs", component: Bj, meta: { title: "Docs" } },
      { path: "/detail/:id", name: "annotation", component: jR, meta: { title: "Annotatie: {id}" } },
    ],
    Mp = _y({ history: Qv("/annotation_flow/"), routes: Uj });
  Mp.beforeEach((t) => {
    let e = t.meta.title ?? "";
    Object.entries(t.params ?? {}).forEach(([r, o]) => {
      e = e.replace(`{${r}}`, o.toString());
    });
    const n = "Evwrite Annotation Flow";
    window.document.title = `${n} - ${e}`;
  });
  const Lp = fv(ky);
  Lp.use(gv()).use(Mp);
  Lp.mount("#app");
});
export default Vj();
