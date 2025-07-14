var kd = Object.defineProperty;
var Sd = (t, e, n) => (e in t ? kd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var Ad = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Z = (t, e, n) => Sd(t, typeof e != "symbol" ? e + "" : e, n);
var Tj = Ad((Rt, jt) => {
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
   * @vue/shared v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function Fi(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const pt = {},
    Ln = [],
    ke = () => {},
    Td = () => !1,
    Ro = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    Bi = (t) => t.startsWith("onUpdate:"),
    Ht = Object.assign,
    Ui = (t, e) => {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    },
    Ed = Object.prototype.hasOwnProperty,
    gt = (t, e) => Ed.call(t, e),
    tt = Array.isArray,
    Dn = (t) => zr(t) === "[object Map]",
    jo = (t) => zr(t) === "[object Set]",
    Ua = (t) => zr(t) === "[object Date]",
    it = (t) => typeof t == "function",
    Dt = (t) => typeof t == "string",
    pe = (t) => typeof t == "symbol",
    Et = (t) => t !== null && typeof t == "object",
    yf = (t) => (Et(t) || it(t)) && it(t.then) && it(t.catch),
    _f = Object.prototype.toString,
    zr = (t) => _f.call(t),
    Od = (t) => zr(t).slice(8, -1),
    wf = (t) => zr(t) === "[object Object]",
    Vi = (t) => Dt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    fr = Fi(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    $o = (t) => {
      const e = Object.create(null);
      return (n) => e[n] || (e[n] = t(n));
    },
    Cd = /-(\w)/g,
    ee = $o((t) => t.replace(Cd, (e, n) => (n ? n.toUpperCase() : ""))),
    Rd = /\B([A-Z])/g,
    tn = $o((t) => t.replace(Rd, "-$1").toLowerCase()),
    Po = $o((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    hr = $o((t) => (t ? `on${Po(t)}` : "")),
    te = (t, e) => !Object.is(t, e),
    no = (t, ...e) => {
      for (let n = 0; n < t.length; n++) t[n](...e);
    },
    xf = (t, e, n, r = !1) => {
      Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n });
    },
    ci = (t) => {
      const e = parseFloat(t);
      return isNaN(e) ? t : e;
    };
  let Va;
  const Io = () =>
    Va ||
    (Va =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function en(t) {
    if (tt(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          o = Dt(r) ? Id(r) : en(r);
        if (o) for (const s in o) e[s] = o[s];
      }
      return e;
    } else if (Dt(t) || Et(t)) return t;
  }
  const jd = /;(?![^(]*\))/g,
    $d = /:([^]+)/,
    Pd = /\/\*[^]*?\*\//g;
  function Id(t) {
    const e = {};
    return (
      t
        .replace(Pd, "")
        .split(jd)
        .forEach((n) => {
          if (n) {
            const r = n.split($d);
            r.length > 1 && (e[r[0].trim()] = r[1].trim());
          }
        }),
      e
    );
  }
  function Lt(t) {
    let e = "";
    if (Dt(t)) e = t;
    else if (tt(t))
      for (let n = 0; n < t.length; n++) {
        const r = Lt(t[n]);
        r && (e += r + " ");
      }
    else if (Et(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const Md = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Ld = Fi(Md);
  function kf(t) {
    return !!t || t === "";
  }
  function Dd(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = Mo(t[r], e[r]);
    return n;
  }
  function Mo(t, e) {
    if (t === e) return !0;
    let n = Ua(t),
      r = Ua(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = pe(t)), (r = pe(e)), n || r)) return t === e;
    if (((n = tt(t)), (r = tt(e)), n || r)) return n && r ? Dd(t, e) : !1;
    if (((n = Et(t)), (r = Et(e)), n || r)) {
      if (!n || !r) return !1;
      const o = Object.keys(t).length,
        s = Object.keys(e).length;
      if (o !== s) return !1;
      for (const i in t) {
        const a = t.hasOwnProperty(i),
          l = e.hasOwnProperty(i);
        if ((a && !l) || (!a && l) || !Mo(t[i], e[i])) return !1;
      }
    }
    return String(t) === String(e);
  }
  function Sf(t, e) {
    return t.findIndex((n) => Mo(n, e));
  }
  const Af = (t) => !!(t && t.__v_isRef === !0),
    yt = (t) =>
      Dt(t)
        ? t
        : t == null
          ? ""
          : tt(t) || (Et(t) && (t.toString === _f || !it(t.toString)))
            ? Af(t)
              ? yt(t.value)
              : JSON.stringify(t, Tf, 2)
            : String(t),
    Tf = (t, e) =>
      Af(e)
        ? Tf(t, e.value)
        : Dn(e)
          ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o], s) => ((n[us(r, s) + " =>"] = o), n), {}) }
          : jo(e)
            ? { [`Set(${e.size})`]: [...e.values()].map((n) => us(n)) }
            : pe(e)
              ? us(e)
              : Et(e) && !tt(e) && !wf(e)
                ? String(e)
                : e,
    us = (t, e = "") => {
      var n;
      return pe(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
    };
  /**
   * @vue/reactivity v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Jt;
  class Ef {
    constructor(e = !1) {
      (this.detached = e),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = Jt),
        !e && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(this) - 1);
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
        const n = Jt;
        try {
          return (Jt = this), e();
        } finally {
          Jt = n;
        }
      }
    }
    on() {
      Jt = this;
    }
    off() {
      Jt = this.parent;
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
          const o = this.parent.scopes.pop();
          o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index));
        }
        this.parent = void 0;
      }
    }
  }
  function Of(t) {
    return new Ef(t);
  }
  function Hi() {
    return Jt;
  }
  function Cf(t, e = !1) {
    Jt && Jt.cleanups.push(t);
  }
  let Tt;
  const fs = new WeakSet();
  class Rf {
    constructor(e) {
      (this.fn = e),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        Jt && Jt.active && Jt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && ((this.flags &= -65), fs.has(this) && (fs.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || $f(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), Ha(this), Pf(this);
      const e = Tt,
        n = he;
      (Tt = this), (he = !0);
      try {
        return this.fn();
      } finally {
        If(this), (Tt = e), (he = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Wi(e);
        (this.deps = this.depsTail = void 0), Ha(this), this.onStop && this.onStop(), (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ui(this) && this.run();
    }
    get dirty() {
      return ui(this);
    }
  }
  let jf = 0,
    pr,
    dr;
  function $f(t, e = !1) {
    if (((t.flags |= 8), e)) {
      (t.next = dr), (dr = t);
      return;
    }
    (t.next = pr), (pr = t);
  }
  function qi() {
    jf++;
  }
  function Ki() {
    if (--jf > 0) return;
    if (dr) {
      let e = dr;
      for (dr = void 0; e; ) {
        const n = e.next;
        (e.next = void 0), (e.flags &= -9), (e = n);
      }
    }
    let t;
    for (; pr; ) {
      let e = pr;
      for (pr = void 0; e; ) {
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
  function Pf(t) {
    for (let e = t.deps; e; e = e.nextDep)
      (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e);
  }
  function If(t) {
    let e,
      n = t.depsTail,
      r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Wi(r), zd(r)) : (e = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = o);
    }
    (t.deps = e), (t.depsTail = n);
  }
  function ui(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || (e.dep.computed && (Mf(e.dep.computed) || e.dep.version !== e.version)))
        return !0;
    return !!t._dirty;
  }
  function Mf(t) {
    if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === Ar)) return;
    t.globalVersion = Ar;
    const e = t.dep;
    if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !ui(t))) {
      t.flags &= -3;
      return;
    }
    const n = Tt,
      r = he;
    (Tt = t), (he = !0);
    try {
      Pf(t);
      const o = t.fn(t._value);
      (e.version === 0 || te(o, t._value)) && ((t._value = o), e.version++);
    } catch (o) {
      throw (e.version++, o);
    } finally {
      (Tt = n), (he = r), If(t), (t.flags &= -3);
    }
  }
  function Wi(t, e = !1) {
    const { dep: n, prevSub: r, nextSub: o } = t;
    if (
      (r && ((r.nextSub = o), (t.prevSub = void 0)),
      o && ((o.prevSub = r), (t.nextSub = void 0)),
      n.subs === t && ((n.subs = r), !r && n.computed))
    ) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) Wi(s, !0);
    }
    !e && !--n.sc && n.map && n.map.delete(n.key);
  }
  function zd(t) {
    const { prevDep: e, nextDep: n } = t;
    e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0));
  }
  let he = !0;
  const Lf = [];
  function nn() {
    Lf.push(he), (he = !1);
  }
  function rn() {
    const t = Lf.pop();
    he = t === void 0 ? !0 : t;
  }
  function Ha(t) {
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
  let Ar = 0;
  class Nd {
    constructor(e, n) {
      (this.sub = e),
        (this.dep = n),
        (this.version = n.version),
        (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
  }
  class Lo {
    constructor(e) {
      (this.computed = e),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0);
    }
    track(e) {
      if (!Tt || !he || Tt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Tt)
        (n = this.activeLink = new Nd(Tt, this)),
          Tt.deps
            ? ((n.prevDep = Tt.depsTail), (Tt.depsTail.nextDep = n), (Tt.depsTail = n))
            : (Tt.deps = Tt.depsTail = n),
          Df(n);
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
      this.version++, Ar++, this.notify(e);
    }
    notify(e) {
      qi();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ki();
      }
    }
  }
  function Df(t) {
    if ((t.dep.sc++, t.sub.flags & 4)) {
      const e = t.dep.computed;
      if (e && !t.dep.subs) {
        e.flags |= 20;
        for (let r = e.deps; r; r = r.nextDep) Df(r);
      }
      const n = t.dep.subs;
      n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
    }
  }
  const uo = new WeakMap(),
    gn = Symbol(""),
    fi = Symbol(""),
    Tr = Symbol("");
  function Kt(t, e, n) {
    if (he && Tt) {
      let r = uo.get(t);
      r || uo.set(t, (r = new Map()));
      let o = r.get(n);
      o || (r.set(n, (o = new Lo())), (o.map = r), (o.key = n)), o.track();
    }
  }
  function De(t, e, n, r, o, s) {
    const i = uo.get(t);
    if (!i) {
      Ar++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((qi(), e === "clear")) i.forEach(a);
    else {
      const l = tt(t),
        c = l && Vi(n);
      if (l && n === "length") {
        const u = Number(r);
        i.forEach((p, h) => {
          (h === "length" || h === Tr || (!pe(h) && h >= u)) && a(p);
        });
      } else
        switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), c && a(i.get(Tr)), e)) {
          case "add":
            l ? c && a(i.get("length")) : (a(i.get(gn)), Dn(t) && a(i.get(fi)));
            break;
          case "delete":
            l || (a(i.get(gn)), Dn(t) && a(i.get(fi)));
            break;
          case "set":
            Dn(t) && a(i.get(gn));
            break;
        }
    }
    Ki();
  }
  function Fd(t, e) {
    const n = uo.get(t);
    return n && n.get(e);
  }
  function $n(t) {
    const e = ht(t);
    return e === t ? e : (Kt(e, "iterate", Tr), ce(t) ? e : e.map(Wt));
  }
  function Do(t) {
    return Kt((t = ht(t)), "iterate", Tr), t;
  }
  const Bd = {
    __proto__: null,
    [Symbol.iterator]() {
      return hs(this, Symbol.iterator, Wt);
    },
    concat(...t) {
      return $n(this).concat(...t.map((e) => (tt(e) ? $n(e) : e)));
    },
    entries() {
      return hs(this, "entries", (t) => ((t[1] = Wt(t[1])), t));
    },
    every(t, e) {
      return $e(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return $e(this, "filter", t, e, (n) => n.map(Wt), arguments);
    },
    find(t, e) {
      return $e(this, "find", t, e, Wt, arguments);
    },
    findIndex(t, e) {
      return $e(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return $e(this, "findLast", t, e, Wt, arguments);
    },
    findLastIndex(t, e) {
      return $e(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return $e(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return ps(this, "includes", t);
    },
    indexOf(...t) {
      return ps(this, "indexOf", t);
    },
    join(t) {
      return $n(this).join(t);
    },
    lastIndexOf(...t) {
      return ps(this, "lastIndexOf", t);
    },
    map(t, e) {
      return $e(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return er(this, "pop");
    },
    push(...t) {
      return er(this, "push", t);
    },
    reduce(t, ...e) {
      return qa(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return qa(this, "reduceRight", t, e);
    },
    shift() {
      return er(this, "shift");
    },
    some(t, e) {
      return $e(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return er(this, "splice", t);
    },
    toReversed() {
      return $n(this).toReversed();
    },
    toSorted(t) {
      return $n(this).toSorted(t);
    },
    toSpliced(...t) {
      return $n(this).toSpliced(...t);
    },
    unshift(...t) {
      return er(this, "unshift", t);
    },
    values() {
      return hs(this, "values", Wt);
    },
  };
  function hs(t, e, n) {
    const r = Do(t),
      o = r[e]();
    return (
      r !== t &&
        !ce(t) &&
        ((o._next = o.next),
        (o.next = () => {
          const s = o._next();
          return s.value && (s.value = n(s.value)), s;
        })),
      o
    );
  }
  const Ud = Array.prototype;
  function $e(t, e, n, r, o, s) {
    const i = Do(t),
      a = i !== t && !ce(t),
      l = i[e];
    if (l !== Ud[e]) {
      const p = l.apply(t, s);
      return a ? Wt(p) : p;
    }
    let c = n;
    i !== t &&
      (a
        ? (c = function (p, h) {
            return n.call(this, Wt(p), h, t);
          })
        : n.length > 2 &&
          (c = function (p, h) {
            return n.call(this, p, h, t);
          }));
    const u = l.call(i, c, r);
    return a && o ? o(u) : u;
  }
  function qa(t, e, n, r) {
    const o = Do(t);
    let s = n;
    return (
      o !== t &&
        (ce(t)
          ? n.length > 3 &&
            (s = function (i, a, l) {
              return n.call(this, i, a, l, t);
            })
          : (s = function (i, a, l) {
              return n.call(this, i, Wt(a), l, t);
            })),
      o[e](s, ...r)
    );
  }
  function ps(t, e, n) {
    const r = ht(t);
    Kt(r, "iterate", Tr);
    const o = r[e](...n);
    return (o === -1 || o === !1) && Ji(n[0]) ? ((n[0] = ht(n[0])), r[e](...n)) : o;
  }
  function er(t, e, n = []) {
    nn(), qi();
    const r = ht(t)[e].apply(t, n);
    return Ki(), rn(), r;
  }
  const Vd = Fi("__proto__,__v_isRef,__isVue"),
    zf = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((t) => t !== "arguments" && t !== "caller")
        .map((t) => Symbol[t])
        .filter(pe),
    );
  function Hd(t) {
    pe(t) || (t = String(t));
    const e = ht(this);
    return Kt(e, "has", t), e.hasOwnProperty(t);
  }
  class Nf {
    constructor(e = !1, n = !1) {
      (this._isReadonly = e), (this._isShallow = n);
    }
    get(e, n, r) {
      if (n === "__v_skip") return e.__v_skip;
      const o = this._isReadonly,
        s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw")
        return r === (o ? (s ? tg : Vf) : s ? Uf : Bf).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
          ? e
          : void 0;
      const i = tt(e);
      if (!o) {
        let l;
        if (i && (l = Bd[n])) return l;
        if (n === "hasOwnProperty") return Hd;
      }
      const a = Reflect.get(e, n, It(e) ? e : r);
      return (pe(n) ? zf.has(n) : Vd(n)) || (o || Kt(e, "get", n), s)
        ? a
        : It(a)
          ? i && Vi(n)
            ? a
            : a.value
          : Et(a)
            ? o
              ? qf(a)
              : Gn(a)
            : a;
    }
  }
  class Ff extends Nf {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, n, r, o) {
      let s = e[n];
      if (!this._isShallow) {
        const l = vn(s);
        if ((!ce(r) && !vn(r) && ((s = ht(s)), (r = ht(r))), !tt(e) && It(s) && !It(r)))
          return l ? !1 : ((s.value = r), !0);
      }
      const i = tt(e) && Vi(n) ? Number(n) < e.length : gt(e, n),
        a = Reflect.set(e, n, r, It(e) ? e : o);
      return e === ht(o) && (i ? te(r, s) && De(e, "set", n, r) : De(e, "add", n, r)), a;
    }
    deleteProperty(e, n) {
      const r = gt(e, n);
      e[n];
      const o = Reflect.deleteProperty(e, n);
      return o && r && De(e, "delete", n, void 0), o;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!pe(n) || !zf.has(n)) && Kt(e, "has", n), r;
    }
    ownKeys(e) {
      return Kt(e, "iterate", tt(e) ? "length" : gn), Reflect.ownKeys(e);
    }
  }
  class qd extends Nf {
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
  const Kd = new Ff(),
    Wd = new qd(),
    Gd = new Ff(!0),
    hi = (t) => t,
    Vr = (t) => Reflect.getPrototypeOf(t);
  function Zd(t, e, n) {
    return function (...r) {
      const o = this.__v_raw,
        s = ht(o),
        i = Dn(s),
        a = t === "entries" || (t === Symbol.iterator && i),
        l = t === "keys" && i,
        c = o[t](...r),
        u = n ? hi : e ? pi : Wt;
      return (
        !e && Kt(s, "iterate", l ? fi : gn),
        {
          next() {
            const { value: p, done: h } = c.next();
            return h ? { value: p, done: h } : { value: a ? [u(p[0]), u(p[1])] : u(p), done: h };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function Hr(t) {
    return function (...e) {
      return t === "delete" ? !1 : t === "clear" ? void 0 : this;
    };
  }
  function Jd(t, e) {
    const n = {
      get(o) {
        const s = this.__v_raw,
          i = ht(s),
          a = ht(o);
        t || (te(o, a) && Kt(i, "get", o), Kt(i, "get", a));
        const { has: l } = Vr(i),
          c = e ? hi : t ? pi : Wt;
        if (l.call(i, o)) return c(s.get(o));
        if (l.call(i, a)) return c(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !t && Kt(ht(o), "iterate", gn), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw,
          i = ht(s),
          a = ht(o);
        return t || (te(o, a) && Kt(i, "has", o), Kt(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this,
          a = i.__v_raw,
          l = ht(a),
          c = e ? hi : t ? pi : Wt;
        return !t && Kt(l, "iterate", gn), a.forEach((u, p) => o.call(s, c(u), c(p), i));
      },
    };
    return (
      Ht(
        n,
        t
          ? { add: Hr("add"), set: Hr("set"), delete: Hr("delete"), clear: Hr("clear") }
          : {
              add(o) {
                !e && !ce(o) && !vn(o) && (o = ht(o));
                const s = ht(this);
                return Vr(s).has.call(s, o) || (s.add(o), De(s, "add", o, o)), this;
              },
              set(o, s) {
                !e && !ce(s) && !vn(s) && (s = ht(s));
                const i = ht(this),
                  { has: a, get: l } = Vr(i);
                let c = a.call(i, o);
                c || ((o = ht(o)), (c = a.call(i, o)));
                const u = l.call(i, o);
                return i.set(o, s), c ? te(s, u) && De(i, "set", o, s) : De(i, "add", o, s), this;
              },
              delete(o) {
                const s = ht(this),
                  { has: i, get: a } = Vr(s);
                let l = i.call(s, o);
                l || ((o = ht(o)), (l = i.call(s, o))), a && a.call(s, o);
                const c = s.delete(o);
                return l && De(s, "delete", o, void 0), c;
              },
              clear() {
                const o = ht(this),
                  s = o.size !== 0,
                  i = o.clear();
                return s && De(o, "clear", void 0, void 0), i;
              },
            },
      ),
      ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
        n[o] = Zd(o, t, e);
      }),
      n
    );
  }
  function Gi(t, e) {
    const n = Jd(t, e);
    return (r, o, s) =>
      o === "__v_isReactive"
        ? !t
        : o === "__v_isReadonly"
          ? t
          : o === "__v_raw"
            ? r
            : Reflect.get(gt(n, o) && o in r ? n : r, o, s);
  }
  const Qd = { get: Gi(!1, !1) },
    Xd = { get: Gi(!1, !0) },
    Yd = { get: Gi(!0, !1) },
    Bf = new WeakMap(),
    Uf = new WeakMap(),
    Vf = new WeakMap(),
    tg = new WeakMap();
  function eg(t) {
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
  function ng(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : eg(Od(t));
  }
  function Gn(t) {
    return vn(t) ? t : Zi(t, !1, Kd, Qd, Bf);
  }
  function Hf(t) {
    return Zi(t, !1, Gd, Xd, Uf);
  }
  function qf(t) {
    return Zi(t, !0, Wd, Yd, Vf);
  }
  function Zi(t, e, n, r, o) {
    if (!Et(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const s = o.get(t);
    if (s) return s;
    const i = ng(t);
    if (i === 0) return t;
    const a = new Proxy(t, i === 2 ? r : n);
    return o.set(t, a), a;
  }
  function Je(t) {
    return vn(t) ? Je(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function vn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function ce(t) {
    return !!(t && t.__v_isShallow);
  }
  function Ji(t) {
    return t ? !!t.__v_raw : !1;
  }
  function ht(t) {
    const e = t && t.__v_raw;
    return e ? ht(e) : t;
  }
  function Qi(t) {
    return !gt(t, "__v_skip") && Object.isExtensible(t) && xf(t, "__v_skip", !0), t;
  }
  const Wt = (t) => (Et(t) ? Gn(t) : t),
    pi = (t) => (Et(t) ? qf(t) : t);
  function It(t) {
    return t ? t.__v_isRef === !0 : !1;
  }
  function ut(t) {
    return Wf(t, !1);
  }
  function Kf(t) {
    return Wf(t, !0);
  }
  function Wf(t, e) {
    return It(t) ? t : new rg(t, e);
  }
  class rg {
    constructor(e, n) {
      (this.dep = new Lo()),
        (this.__v_isRef = !0),
        (this.__v_isShallow = !1),
        (this._rawValue = n ? e : ht(e)),
        (this._value = n ? e : Wt(e)),
        (this.__v_isShallow = n);
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue,
        r = this.__v_isShallow || ce(e) || vn(e);
      (e = r ? e : ht(e)), te(e, n) && ((this._rawValue = e), (this._value = r ? e : Wt(e)), this.dep.trigger());
    }
  }
  function F(t) {
    return It(t) ? t.value : t;
  }
  const og = {
    get: (t, e, n) => (e === "__v_raw" ? t : F(Reflect.get(t, e, n))),
    set: (t, e, n, r) => {
      const o = t[e];
      return It(o) && !It(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, r);
    },
  };
  function Gf(t) {
    return Je(t) ? t : new Proxy(t, og);
  }
  class sg {
    constructor(e) {
      (this.__v_isRef = !0), (this._value = void 0);
      const n = (this.dep = new Lo()),
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
  function ig(t) {
    return new sg(t);
  }
  function ag(t) {
    const e = tt(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = cg(t, n);
    return e;
  }
  class lg {
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
      return Fd(ht(this._object), this._key);
    }
  }
  function cg(t, e, n) {
    const r = t[e];
    return It(r) ? r : new lg(t, e, n);
  }
  class ug {
    constructor(e, n, r) {
      (this.fn = e),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new Lo(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = Ar - 1),
        (this.next = void 0),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && Tt !== this)) return $f(this, !0), !0;
    }
    get value() {
      const e = this.dep.track();
      return Mf(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function fg(t, e, n = !1) {
    let r, o;
    return it(t) ? (r = t) : ((r = t.get), (o = t.set)), new ug(r, o, n);
  }
  const qr = {},
    fo = new WeakMap();
  let fn;
  function hg(t, e = !1, n = fn) {
    if (n) {
      let r = fo.get(n);
      r || fo.set(n, (r = [])), r.push(t);
    }
  }
  function pg(t, e, n = pt) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n,
      c = (k) => (o ? k : ce(k) || o === !1 || o === 0 ? ze(k, 1) : ze(k));
    let u,
      p,
      h,
      f,
      g = !1,
      m = !1;
    if (
      (It(t)
        ? ((p = () => t.value), (g = ce(t)))
        : Je(t)
          ? ((p = () => c(t)), (g = !0))
          : tt(t)
            ? ((m = !0),
              (g = t.some((k) => Je(k) || ce(k))),
              (p = () =>
                t.map((k) => {
                  if (It(k)) return k.value;
                  if (Je(k)) return c(k);
                  if (it(k)) return l ? l(k, 2) : k();
                })))
            : it(t)
              ? e
                ? (p = l ? () => l(t, 2) : t)
                : (p = () => {
                    if (h) {
                      nn();
                      try {
                        h();
                      } finally {
                        rn();
                      }
                    }
                    const k = fn;
                    fn = u;
                    try {
                      return l ? l(t, 3, [f]) : t(f);
                    } finally {
                      fn = k;
                    }
                  })
              : (p = ke),
      e && o)
    ) {
      const k = p,
        T = o === !0 ? 1 / 0 : o;
      p = () => ze(k(), T);
    }
    const _ = Hi(),
      x = () => {
        u.stop(), _ && _.active && Ui(_.effects, u);
      };
    if (s && e) {
      const k = e;
      e = (...T) => {
        k(...T), x();
      };
    }
    let b = m ? new Array(t.length).fill(qr) : qr;
    const w = (k) => {
      if (!(!(u.flags & 1) || (!u.dirty && !k)))
        if (e) {
          const T = u.run();
          if (o || g || (m ? T.some((z, V) => te(z, b[V])) : te(T, b))) {
            h && h();
            const z = fn;
            fn = u;
            try {
              const V = [T, b === qr ? void 0 : m && b[0] === qr ? [] : b, f];
              l ? l(e, 3, V) : e(...V), (b = T);
            } finally {
              fn = z;
            }
          }
        } else u.run();
    };
    return (
      a && a(w),
      (u = new Rf(p)),
      (u.scheduler = i ? () => i(w, !1) : w),
      (f = (k) => hg(k, !1, u)),
      (h = u.onStop =
        () => {
          const k = fo.get(u);
          if (k) {
            if (l) l(k, 4);
            else for (const T of k) T();
            fo.delete(u);
          }
        }),
      e ? (r ? w(!0) : (b = u.run())) : i ? i(w.bind(null, !0), !0) : u.run(),
      (x.pause = u.pause.bind(u)),
      (x.resume = u.resume.bind(u)),
      (x.stop = x),
      x
    );
  }
  function ze(t, e = 1 / 0, n) {
    if (e <= 0 || !Et(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
    if ((n.add(t), e--, It(t))) ze(t.value, e, n);
    else if (tt(t)) for (let r = 0; r < t.length; r++) ze(t[r], e, n);
    else if (jo(t) || Dn(t))
      t.forEach((r) => {
        ze(r, e, n);
      });
    else if (wf(t)) {
      for (const r in t) ze(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && ze(t[r], e, n);
    }
    return t;
  }
  /**
   * @vue/runtime-core v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function Nr(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (o) {
      zo(o, e, n);
    }
  }
  function Te(t, e, n, r) {
    if (it(t)) {
      const o = Nr(t, e, n, r);
      return (
        o &&
          yf(o) &&
          o.catch((s) => {
            zo(s, e, n);
          }),
        o
      );
    }
    if (tt(t)) {
      const o = [];
      for (let s = 0; s < t.length; s++) o.push(Te(t[s], e, n, r));
      return o;
    }
  }
  function zo(t, e, n, r = !0) {
    const o = e ? e.vnode : null,
      { errorHandler: s, throwUnhandledErrorInProduction: i } = (e && e.appContext.config) || pt;
    if (e) {
      let a = e.parent;
      const l = e.proxy,
        c = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; a; ) {
        const u = a.ec;
        if (u) {
          for (let p = 0; p < u.length; p++) if (u[p](t, l, c) === !1) return;
        }
        a = a.parent;
      }
      if (s) {
        nn(), Nr(s, null, 10, [t, l, c]), rn();
        return;
      }
    }
    dg(t, n, o, r, i);
  }
  function dg(t, e, n, r = !0, o = !1) {
    if (o) throw t;
    console.error(t);
  }
  const Qt = [];
  let we = -1;
  const zn = [];
  let We = null,
    In = 0;
  const Zf = Promise.resolve();
  let ho = null;
  function No(t) {
    const e = ho || Zf;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function gg(t) {
    let e = we + 1,
      n = Qt.length;
    for (; e < n; ) {
      const r = (e + n) >>> 1,
        o = Qt[r],
        s = Er(o);
      s < t || (s === t && o.flags & 2) ? (e = r + 1) : (n = r);
    }
    return e;
  }
  function Xi(t) {
    if (!(t.flags & 1)) {
      const e = Er(t),
        n = Qt[Qt.length - 1];
      !n || (!(t.flags & 2) && e >= Er(n)) ? Qt.push(t) : Qt.splice(gg(e), 0, t), (t.flags |= 1), Jf();
    }
  }
  function Jf() {
    ho || (ho = Zf.then(Xf));
  }
  function mg(t) {
    tt(t) ? zn.push(...t) : We && t.id === -1 ? We.splice(In + 1, 0, t) : t.flags & 1 || (zn.push(t), (t.flags |= 1)),
      Jf();
  }
  function Ka(t, e, n = we + 1) {
    for (; n < Qt.length; n++) {
      const r = Qt[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        Qt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Qf(t) {
    if (zn.length) {
      const e = [...new Set(zn)].sort((n, r) => Er(n) - Er(r));
      if (((zn.length = 0), We)) {
        We.push(...e);
        return;
      }
      for (We = e, In = 0; In < We.length; In++) {
        const n = We[In];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (We = null), (In = 0);
    }
  }
  const Er = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
  function Xf(t) {
    try {
      for (we = 0; we < Qt.length; we++) {
        const e = Qt[we];
        e &&
          !(e.flags & 8) &&
          (e.flags & 4 && (e.flags &= -2), Nr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
      }
    } finally {
      for (; we < Qt.length; we++) {
        const e = Qt[we];
        e && (e.flags &= -2);
      }
      (we = -1), (Qt.length = 0), Qf(), (ho = null), (Qt.length || zn.length) && Xf();
    }
  }
  let Nt = null,
    Yf = null;
  function po(t) {
    const e = Nt;
    return (Nt = t), (Yf = (t && t.type.__scopeId) || null), e;
  }
  function Ee(t, e = Nt, n) {
    if (!e || t._n) return t;
    const r = (...o) => {
      r._d && el(-1);
      const s = po(e);
      let i;
      try {
        i = t(...o);
      } finally {
        po(s), r._d && el(1);
      }
      return i;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Fo(t, e) {
    if (Nt === null) return t;
    const n = qo(Nt),
      r = t.dirs || (t.dirs = []);
    for (let o = 0; o < e.length; o++) {
      let [s, i, a, l = pt] = e[o];
      s &&
        (it(s) && (s = { mounted: s, updated: s }),
        s.deep && ze(i),
        r.push({ dir: s, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
    }
    return t;
  }
  function ln(t, e, n, r) {
    const o = t.dirs,
      s = e && e.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (nn(), Te(l, n, 8, [t.el, a, t, e]), rn());
    }
  }
  const vg = Symbol("_vte"),
    bg = (t) => t.__isTeleport;
  function Yi(t, e) {
    t.shapeFlag & 6 && t.component
      ? ((t.transition = e), Yi(t.component.subTree, e))
      : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Mt(t, e) {
    return it(t) ? Ht({ name: t.name }, e, { setup: t }) : t;
  }
  function th(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function go(t, e, n, r, o = !1) {
    if (tt(t)) {
      t.forEach((g, m) => go(g, e && (tt(e) ? e[m] : e), n, r, o));
      return;
    }
    if (Nn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && go(t, e, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? qo(r.component) : r.el,
      i = o ? null : s,
      { i: a, r: l } = t,
      c = e && e.r,
      u = a.refs === pt ? (a.refs = {}) : a.refs,
      p = a.setupState,
      h = ht(p),
      f = p === pt ? () => !1 : (g) => gt(h, g);
    if ((c != null && c !== l && (Dt(c) ? ((u[c] = null), f(c) && (p[c] = null)) : It(c) && (c.value = null)), it(l)))
      Nr(l, a, 12, [i, u]);
    else {
      const g = Dt(l),
        m = It(l);
      if (g || m) {
        const _ = () => {
          if (t.f) {
            const x = g ? (f(l) ? p[l] : u[l]) : l.value;
            o
              ? tt(x) && Ui(x, s)
              : tt(x)
                ? x.includes(s) || x.push(s)
                : g
                  ? ((u[l] = [s]), f(l) && (p[l] = u[l]))
                  : ((l.value = [s]), t.k && (u[t.k] = l.value));
          } else g ? ((u[l] = i), f(l) && (p[l] = i)) : m && ((l.value = i), t.k && (u[t.k] = i));
        };
        i ? ((_.id = -1), oe(_, n)) : _();
      }
    }
  }
  Io().requestIdleCallback;
  Io().cancelIdleCallback;
  const Nn = (t) => !!t.type.__asyncLoader,
    eh = (t) => t.type.__isKeepAlive;
  function yg(t, e) {
    nh(t, "a", e);
  }
  function _g(t, e) {
    nh(t, "da", e);
  }
  function nh(t, e, n = Ft) {
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
    if ((Bo(e, r, n), n)) {
      let o = n.parent;
      for (; o && o.parent; ) eh(o.parent.vnode) && wg(r, e, n, o), (o = o.parent);
    }
  }
  function wg(t, e, n, r) {
    const o = Bo(e, t, r, !0);
    oh(() => {
      Ui(r[e], o);
    }, n);
  }
  function Bo(t, e, n = Ft, r = !1) {
    if (n) {
      const o = n[t] || (n[t] = []),
        s =
          e.__weh ||
          (e.__weh = (...i) => {
            nn();
            const a = Fr(n),
              l = Te(e, n, t, i);
            return a(), rn(), l;
          });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  const Be =
      (t) =>
      (e, n = Ft) => {
        (!Rr || t === "sp") && Bo(t, (...r) => e(...r), n);
      },
    xg = Be("bm"),
    ta = Be("m"),
    rh = Be("bu"),
    kg = Be("u"),
    Sg = Be("bum"),
    oh = Be("um"),
    Ag = Be("sp"),
    Tg = Be("rtg"),
    Eg = Be("rtc");
  function Og(t, e = Ft) {
    Bo("ec", t, e);
  }
  const Cg = "components";
  function sh(t, e) {
    return jg(Cg, t, !0, e) || t;
  }
  const Rg = Symbol.for("v-ndc");
  function jg(t, e, n = !0, r = !1) {
    const o = Nt || Ft;
    if (o) {
      const s = o.type;
      {
        const a = ym(s, !1);
        if (a && (a === e || a === ee(e) || a === Po(ee(e)))) return s;
      }
      const i = Wa(o[t] || s[t], e) || Wa(o.appContext[t], e);
      return !i && r ? s : i;
    }
  }
  function Wa(t, e) {
    return t && (t[e] || t[ee(e)] || t[Po(ee(e))]);
  }
  function Bt(t, e, n, r) {
    let o;
    const s = n,
      i = tt(t);
    if (i || Dt(t)) {
      const a = i && Je(t);
      let l = !1;
      a && ((l = !ce(t)), (t = Do(t))), (o = new Array(t.length));
      for (let c = 0, u = t.length; c < u; c++) o[c] = e(l ? Wt(t[c]) : t[c], c, void 0, s);
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
  function Ne(t, e, n = {}, r, o) {
    if (Nt.ce || (Nt.parent && Nn(Nt.parent) && Nt.parent.ce))
      return e !== "default" && (n.name = e), P(), Bn(lt, null, [st("slot", n, r)], 64);
    let s = t[e];
    s && s._c && (s._d = !1), P();
    const i = s && ih(s(n)),
      a = n.key || (i && i.key),
      l = Bn(lt, { key: (a && !pe(a) ? a : `_${e}`) + "" }, i || [], i && t._ === 1 ? 64 : -2);
    return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
  }
  function ih(t) {
    return t.some((e) => (Cr(e) ? !(e.type === Xe || (e.type === lt && !ih(e.children))) : !0)) ? t : null;
  }
  const di = (t) => (t ? (Ch(t) ? qo(t) : di(t.parent)) : null),
    gr = Ht(Object.create(null), {
      $: (t) => t,
      $el: (t) => t.vnode.el,
      $data: (t) => t.data,
      $props: (t) => t.props,
      $attrs: (t) => t.attrs,
      $slots: (t) => t.slots,
      $refs: (t) => t.refs,
      $parent: (t) => di(t.parent),
      $root: (t) => di(t.root),
      $host: (t) => t.ce,
      $emit: (t) => t.emit,
      $options: (t) => lh(t),
      $forceUpdate: (t) =>
        t.f ||
        (t.f = () => {
          Xi(t.update);
        }),
      $nextTick: (t) => t.n || (t.n = No.bind(t.proxy)),
      $watch: (t) => em.bind(t),
    }),
    ds = (t, e) => t !== pt && !t.__isScriptSetup && gt(t, e),
    $g = {
      get({ _: t }, e) {
        if (e === "__v_skip") return !0;
        const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = t;
        let c;
        if (e[0] !== "$") {
          const f = i[e];
          if (f !== void 0)
            switch (f) {
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
            if (o !== pt && gt(o, e)) return (i[e] = 2), o[e];
            if ((c = t.propsOptions[0]) && gt(c, e)) return (i[e] = 3), s[e];
            if (n !== pt && gt(n, e)) return (i[e] = 4), n[e];
            gi && (i[e] = 0);
          }
        }
        const u = gr[e];
        let p, h;
        if (u) return e === "$attrs" && Kt(t.attrs, "get", ""), u(t);
        if ((p = a.__cssModules) && (p = p[e])) return p;
        if (n !== pt && gt(n, e)) return (i[e] = 4), n[e];
        if (((h = l.config.globalProperties), gt(h, e))) return h[e];
      },
      set({ _: t }, e, n) {
        const { data: r, setupState: o, ctx: s } = t;
        return ds(o, e)
          ? ((o[e] = n), !0)
          : r !== pt && gt(r, e)
            ? ((r[e] = n), !0)
            : gt(t.props, e) || (e[0] === "$" && e.slice(1) in t)
              ? !1
              : ((s[e] = n), !0);
      },
      has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
        let a;
        return (
          !!n[i] ||
          (t !== pt && gt(t, i)) ||
          ds(e, i) ||
          ((a = s[0]) && gt(a, i)) ||
          gt(r, i) ||
          gt(gr, i) ||
          gt(o.config.globalProperties, i)
        );
      },
      defineProperty(t, e, n) {
        return (
          n.get != null ? (t._.accessCache[e] = 0) : gt(n, "value") && this.set(t, e, n.value, null),
          Reflect.defineProperty(t, e, n)
        );
      },
    };
  function mo(t) {
    return tt(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
  }
  function Pg(t, e) {
    return !t || !e ? t || e : tt(t) && tt(e) ? t.concat(e) : Ht({}, mo(t), mo(e));
  }
  let gi = !0;
  function Ig(t) {
    const e = lh(t),
      n = t.proxy,
      r = t.ctx;
    (gi = !1), e.beforeCreate && Ga(e.beforeCreate, t, "bc");
    const {
      data: o,
      computed: s,
      methods: i,
      watch: a,
      provide: l,
      inject: c,
      created: u,
      beforeMount: p,
      mounted: h,
      beforeUpdate: f,
      updated: g,
      activated: m,
      deactivated: _,
      beforeDestroy: x,
      beforeUnmount: b,
      destroyed: w,
      unmounted: k,
      render: T,
      renderTracked: z,
      renderTriggered: V,
      errorCaptured: H,
      serverPrefetch: X,
      expose: I,
      inheritAttrs: d,
      components: S,
      directives: C,
      filters: J,
    } = e;
    if ((c && Mg(c, r, null), i))
      for (const q in i) {
        const at = i[q];
        it(at) && (r[q] = at.bind(n));
      }
    if (o) {
      const q = o.call(n, n);
      Et(q) && (t.data = Gn(q));
    }
    if (((gi = !0), s))
      for (const q in s) {
        const at = s[q],
          Ut = it(at) ? at.bind(n, n) : it(at.get) ? at.get.bind(n, n) : ke,
          $t = !it(at) && it(at.set) ? at.set.bind(n) : ke,
          Gt = rt({ get: Ut, set: $t });
        Object.defineProperty(r, q, {
          enumerable: !0,
          configurable: !0,
          get: () => Gt.value,
          set: (wt) => (Gt.value = wt),
        });
      }
    if (a) for (const q in a) ah(a[q], r, n, q);
    if (l) {
      const q = it(l) ? l.call(n) : l;
      Reflect.ownKeys(q).forEach((at) => {
        ro(at, q[at]);
      });
    }
    u && Ga(u, t, "c");
    function K(q, at) {
      tt(at) ? at.forEach((Ut) => q(Ut.bind(n))) : at && q(at.bind(n));
    }
    if (
      (K(xg, p),
      K(ta, h),
      K(rh, f),
      K(kg, g),
      K(yg, m),
      K(_g, _),
      K(Og, H),
      K(Eg, z),
      K(Tg, V),
      K(Sg, b),
      K(oh, k),
      K(Ag, X),
      tt(I))
    )
      if (I.length) {
        const q = t.exposed || (t.exposed = {});
        I.forEach((at) => {
          Object.defineProperty(q, at, { get: () => n[at], set: (Ut) => (n[at] = Ut) });
        });
      } else t.exposed || (t.exposed = {});
    T && t.render === ke && (t.render = T),
      d != null && (t.inheritAttrs = d),
      S && (t.components = S),
      C && (t.directives = C),
      X && th(t);
  }
  function Mg(t, e, n = ke) {
    tt(t) && (t = mi(t));
    for (const r in t) {
      const o = t[r];
      let s;
      Et(o) ? ("default" in o ? (s = ue(o.from || r, o.default, !0)) : (s = ue(o.from || r))) : (s = ue(o)),
        It(s)
          ? Object.defineProperty(e, r, {
              enumerable: !0,
              configurable: !0,
              get: () => s.value,
              set: (i) => (s.value = i),
            })
          : (e[r] = s);
    }
  }
  function Ga(t, e, n) {
    Te(tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function ah(t, e, n, r) {
    let o = r.includes(".") ? xh(n, r) : () => n[r];
    if (Dt(t)) {
      const s = e[t];
      it(s) && Se(o, s);
    } else if (it(t)) Se(o, t.bind(n));
    else if (Et(t))
      if (tt(t)) t.forEach((s) => ah(s, e, n, r));
      else {
        const s = it(t.handler) ? t.handler.bind(n) : e[t.handler];
        it(s) && Se(o, s, t);
      }
  }
  function lh(t) {
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
        const a = Lg[i] || (n && n[i]);
        t[i] = a ? a(t[i], e[i]) : e[i];
      }
    return t;
  }
  const Lg = {
    data: Za,
    props: Ja,
    emits: Ja,
    methods: cr,
    computed: cr,
    beforeCreate: Zt,
    created: Zt,
    beforeMount: Zt,
    mounted: Zt,
    beforeUpdate: Zt,
    updated: Zt,
    beforeDestroy: Zt,
    beforeUnmount: Zt,
    destroyed: Zt,
    unmounted: Zt,
    activated: Zt,
    deactivated: Zt,
    errorCaptured: Zt,
    serverPrefetch: Zt,
    components: cr,
    directives: cr,
    watch: zg,
    provide: Za,
    inject: Dg,
  };
  function Za(t, e) {
    return e
      ? t
        ? function () {
            return Ht(it(t) ? t.call(this, this) : t, it(e) ? e.call(this, this) : e);
          }
        : e
      : t;
  }
  function Dg(t, e) {
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
  function Zt(t, e) {
    return t ? [...new Set([].concat(t, e))] : e;
  }
  function cr(t, e) {
    return t ? Ht(Object.create(null), t, e) : e;
  }
  function Ja(t, e) {
    return t ? (tt(t) && tt(e) ? [...new Set([...t, ...e])] : Ht(Object.create(null), mo(t), mo(e ?? {}))) : e;
  }
  function zg(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Ht(Object.create(null), t);
    for (const r in e) n[r] = Zt(t[r], e[r]);
    return n;
  }
  function ch() {
    return {
      app: null,
      config: {
        isNativeTag: Td,
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
  let Ng = 0;
  function Fg(t, e) {
    return function (r, o = null) {
      it(r) || (r = Ht({}, r)), o != null && !Et(o) && (o = null);
      const s = ch(),
        i = new WeakSet(),
        a = [];
      let l = !1;
      const c = (s.app = {
        _uid: Ng++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: wm,
        get config() {
          return s.config;
        },
        set config(u) {},
        use(u, ...p) {
          return i.has(u) || (u && it(u.install) ? (i.add(u), u.install(c, ...p)) : it(u) && (i.add(u), u(c, ...p))), c;
        },
        mixin(u) {
          return s.mixins.includes(u) || s.mixins.push(u), c;
        },
        component(u, p) {
          return p ? ((s.components[u] = p), c) : s.components[u];
        },
        directive(u, p) {
          return p ? ((s.directives[u] = p), c) : s.directives[u];
        },
        mount(u, p, h) {
          if (!l) {
            const f = c._ceVNode || st(r, o);
            return (
              (f.appContext = s),
              h === !0 ? (h = "svg") : h === !1 && (h = void 0),
              t(f, u, h),
              (l = !0),
              (c._container = u),
              (u.__vue_app__ = c),
              qo(f.component)
            );
          }
        },
        onUnmount(u) {
          a.push(u);
        },
        unmount() {
          l && (Te(a, c._instance, 16), t(null, c._container), delete c._container.__vue_app__);
        },
        provide(u, p) {
          return (s.provides[u] = p), c;
        },
        runWithContext(u) {
          const p = mn;
          mn = c;
          try {
            return u();
          } finally {
            mn = p;
          }
        },
      });
      return c;
    };
  }
  let mn = null;
  function ro(t, e) {
    if (Ft) {
      let n = Ft.provides;
      const r = Ft.parent && Ft.parent.provides;
      r === n && (n = Ft.provides = Object.create(r)), (n[t] = e);
    }
  }
  function ue(t, e, n = !1) {
    const r = Ft || Nt;
    if (r || mn) {
      const o = mn
        ? mn._context.provides
        : r
          ? r.parent == null
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (o && t in o) return o[t];
      if (arguments.length > 1) return n && it(e) ? e.call(r && r.proxy) : e;
    }
  }
  function Bg() {
    return !!(Ft || Nt || mn);
  }
  const uh = {},
    fh = () => Object.create(uh),
    hh = (t) => Object.getPrototypeOf(t) === uh;
  function Ug(t, e, n, r = !1) {
    const o = {},
      s = fh();
    (t.propsDefaults = Object.create(null)), ph(t, e, o, s);
    for (const i in t.propsOptions[0]) i in o || (o[i] = void 0);
    n ? (t.props = r ? o : Hf(o)) : t.type.props ? (t.props = o) : (t.props = s), (t.attrs = s);
  }
  function Vg(t, e, n, r) {
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
        for (let p = 0; p < u.length; p++) {
          let h = u[p];
          if (Vo(t.emitsOptions, h)) continue;
          const f = e[h];
          if (l)
            if (gt(s, h)) f !== s[h] && ((s[h] = f), (c = !0));
            else {
              const g = ee(h);
              o[g] = vi(l, a, g, f, t, !1);
            }
          else f !== s[h] && ((s[h] = f), (c = !0));
        }
      }
    } else {
      ph(t, e, o, s) && (c = !0);
      let u;
      for (const p in a)
        (!e || (!gt(e, p) && ((u = tn(p)) === p || !gt(e, u)))) &&
          (l ? n && (n[p] !== void 0 || n[u] !== void 0) && (o[p] = vi(l, a, p, void 0, t, !0)) : delete o[p]);
      if (s !== a) for (const p in s) (!e || !gt(e, p)) && (delete s[p], (c = !0));
    }
    c && De(t.attrs, "set", "");
  }
  function ph(t, e, n, r) {
    const [o, s] = t.propsOptions;
    let i = !1,
      a;
    if (e)
      for (let l in e) {
        if (fr(l)) continue;
        const c = e[l];
        let u;
        o && gt(o, (u = ee(l)))
          ? !s || !s.includes(u)
            ? (n[u] = c)
            : ((a || (a = {}))[u] = c)
          : Vo(t.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
      }
    if (s) {
      const l = ht(n),
        c = a || pt;
      for (let u = 0; u < s.length; u++) {
        const p = s[u];
        n[p] = vi(o, l, p, c[p], t, !gt(c, p));
      }
    }
    return i;
  }
  function vi(t, e, n, r, o, s) {
    const i = t[n];
    if (i != null) {
      const a = gt(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && it(l)) {
          const { propsDefaults: c } = o;
          if (n in c) r = c[n];
          else {
            const u = Fr(o);
            (r = c[n] = l.call(null, e)), u();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? (r = !1) : i[1] && (r === "" || r === tn(n)) && (r = !0));
    }
    return r;
  }
  const Hg = new WeakMap();
  function dh(t, e, n = !1) {
    const r = n ? Hg : e.propsCache,
      o = r.get(t);
    if (o) return o;
    const s = t.props,
      i = {},
      a = [];
    let l = !1;
    if (!it(t)) {
      const u = (p) => {
        l = !0;
        const [h, f] = dh(p, e, !0);
        Ht(i, h), f && a.push(...f);
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    if (!s && !l) return Et(t) && r.set(t, Ln), Ln;
    if (tt(s))
      for (let u = 0; u < s.length; u++) {
        const p = ee(s[u]);
        Qa(p) && (i[p] = pt);
      }
    else if (s)
      for (const u in s) {
        const p = ee(u);
        if (Qa(p)) {
          const h = s[u],
            f = (i[p] = tt(h) || it(h) ? { type: h } : Ht({}, h)),
            g = f.type;
          let m = !1,
            _ = !0;
          if (tt(g))
            for (let x = 0; x < g.length; ++x) {
              const b = g[x],
                w = it(b) && b.name;
              if (w === "Boolean") {
                m = !0;
                break;
              } else w === "String" && (_ = !1);
            }
          else m = it(g) && g.name === "Boolean";
          (f[0] = m), (f[1] = _), (m || gt(f, "default")) && a.push(p);
        }
      }
    const c = [i, a];
    return Et(t) && r.set(t, c), c;
  }
  function Qa(t) {
    return t[0] !== "$" && !fr(t);
  }
  const gh = (t) => t[0] === "_" || t === "$stable",
    ea = (t) => (tt(t) ? t.map(xe) : [xe(t)]),
    qg = (t, e, n) => {
      if (e._n) return e;
      const r = Ee((...o) => ea(e(...o)), n);
      return (r._c = !1), r;
    },
    mh = (t, e, n) => {
      const r = t._ctx;
      for (const o in t) {
        if (gh(o)) continue;
        const s = t[o];
        if (it(s)) e[o] = qg(o, s, r);
        else if (s != null) {
          const i = ea(s);
          e[o] = () => i;
        }
      }
    },
    vh = (t, e) => {
      const n = ea(e);
      t.slots.default = () => n;
    },
    bh = (t, e, n) => {
      for (const r in e) (n || r !== "_") && (t[r] = e[r]);
    },
    Kg = (t, e, n) => {
      const r = (t.slots = fh());
      if (t.vnode.shapeFlag & 32) {
        const o = e._;
        o ? (bh(r, e, n), n && xf(r, "_", o, !0)) : mh(e, r);
      } else e && vh(t, e);
    },
    Wg = (t, e, n) => {
      const { vnode: r, slots: o } = t;
      let s = !0,
        i = pt;
      if (r.shapeFlag & 32) {
        const a = e._;
        a ? (n && a === 1 ? (s = !1) : bh(o, e, n)) : ((s = !e.$stable), mh(e, o)), (i = e);
      } else e && (vh(t, e), (i = { default: 1 }));
      if (s) for (const a in o) !gh(a) && i[a] == null && delete o[a];
    },
    oe = am;
  function Gg(t) {
    return Zg(t);
  }
  function Zg(t, e) {
    const n = Io();
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
        parentNode: p,
        nextSibling: h,
        setScopeId: f = ke,
        insertStaticContent: g,
      } = t,
      m = (v, y, A, E = null, $ = null, R = null, B = void 0, N = null, D = !!y.dynamicChildren) => {
        if (v === y) return;
        v && !nr(v, y) && ((E = O(v)), wt(v, $, R, !0), (v = null)),
          y.patchFlag === -2 && ((D = !1), (y.dynamicChildren = null));
        const { type: M, ref: nt, shapeFlag: W } = y;
        switch (M) {
          case Ho:
            _(v, y, A, E);
            break;
          case Xe:
            x(v, y, A, E);
            break;
          case ms:
            v == null && b(y, A, E, B);
            break;
          case lt:
            S(v, y, A, E, $, R, B, N, D);
            break;
          default:
            W & 1
              ? T(v, y, A, E, $, R, B, N, D)
              : W & 6
                ? C(v, y, A, E, $, R, B, N, D)
                : (W & 64 || W & 128) && M.process(v, y, A, E, $, R, B, N, D, Q);
        }
        nt != null && $ && go(nt, v && v.ref, R, y || v, !y);
      },
      _ = (v, y, A, E) => {
        if (v == null) r((y.el = a(y.children)), A, E);
        else {
          const $ = (y.el = v.el);
          y.children !== v.children && c($, y.children);
        }
      },
      x = (v, y, A, E) => {
        v == null ? r((y.el = l(y.children || "")), A, E) : (y.el = v.el);
      },
      b = (v, y, A, E) => {
        [v.el, v.anchor] = g(v.children, y, A, E, v.el, v.anchor);
      },
      w = ({ el: v, anchor: y }, A, E) => {
        let $;
        for (; v && v !== y; ) ($ = h(v)), r(v, A, E), (v = $);
        r(y, A, E);
      },
      k = ({ el: v, anchor: y }) => {
        let A;
        for (; v && v !== y; ) (A = h(v)), o(v), (v = A);
        o(y);
      },
      T = (v, y, A, E, $, R, B, N, D) => {
        y.type === "svg" ? (B = "svg") : y.type === "math" && (B = "mathml"),
          v == null ? z(y, A, E, $, R, B, N, D) : X(v, y, $, R, B, N, D);
      },
      z = (v, y, A, E, $, R, B, N) => {
        let D, M;
        const { props: nt, shapeFlag: W, transition: Y, dirs: ot } = v;
        if (
          ((D = v.el = i(v.type, R, nt && nt.is, nt)),
          W & 8 ? u(D, v.children) : W & 16 && H(v.children, D, null, E, $, gs(v, R), B, N),
          ot && ln(v, null, E, "created"),
          V(D, v, v.scopeId, B, E),
          nt)
        ) {
          for (const kt in nt) kt !== "value" && !fr(kt) && s(D, kt, null, nt[kt], R, E);
          "value" in nt && s(D, "value", null, nt.value, R), (M = nt.onVnodeBeforeMount) && ye(M, E, v);
        }
        ot && ln(v, null, E, "beforeMount");
        const ft = Jg($, Y);
        ft && Y.beforeEnter(D),
          r(D, y, A),
          ((M = nt && nt.onVnodeMounted) || ft || ot) &&
            oe(() => {
              M && ye(M, E, v), ft && Y.enter(D), ot && ln(v, null, E, "mounted");
            }, $);
      },
      V = (v, y, A, E, $) => {
        if ((A && f(v, A), E)) for (let R = 0; R < E.length; R++) f(v, E[R]);
        if ($) {
          let R = $.subTree;
          if (y === R || (Th(R.type) && (R.ssContent === y || R.ssFallback === y))) {
            const B = $.vnode;
            V(v, B, B.scopeId, B.slotScopeIds, $.parent);
          }
        }
      },
      H = (v, y, A, E, $, R, B, N, D = 0) => {
        for (let M = D; M < v.length; M++) {
          const nt = (v[M] = N ? Ge(v[M]) : xe(v[M]));
          m(null, nt, y, A, E, $, R, B, N);
        }
      },
      X = (v, y, A, E, $, R, B) => {
        const N = (y.el = v.el);
        let { patchFlag: D, dynamicChildren: M, dirs: nt } = y;
        D |= v.patchFlag & 16;
        const W = v.props || pt,
          Y = y.props || pt;
        let ot;
        if (
          (A && cn(A, !1),
          (ot = Y.onVnodeBeforeUpdate) && ye(ot, A, y, v),
          nt && ln(y, v, A, "beforeUpdate"),
          A && cn(A, !0),
          ((W.innerHTML && Y.innerHTML == null) || (W.textContent && Y.textContent == null)) && u(N, ""),
          M ? I(v.dynamicChildren, M, N, A, E, gs(y, $), R) : B || at(v, y, N, null, A, E, gs(y, $), R, !1),
          D > 0)
        ) {
          if (D & 16) d(N, W, Y, A, $);
          else if (
            (D & 2 && W.class !== Y.class && s(N, "class", null, Y.class, $),
            D & 4 && s(N, "style", W.style, Y.style, $),
            D & 8)
          ) {
            const ft = y.dynamicProps;
            for (let kt = 0; kt < ft.length; kt++) {
              const vt = ft[kt],
                ne = W[vt],
                Yt = Y[vt];
              (Yt !== ne || vt === "value") && s(N, vt, ne, Yt, $, A);
            }
          }
          D & 1 && v.children !== y.children && u(N, y.children);
        } else !B && M == null && d(N, W, Y, A, $);
        ((ot = Y.onVnodeUpdated) || nt) &&
          oe(() => {
            ot && ye(ot, A, y, v), nt && ln(y, v, A, "updated");
          }, E);
      },
      I = (v, y, A, E, $, R, B) => {
        for (let N = 0; N < y.length; N++) {
          const D = v[N],
            M = y[N],
            nt = D.el && (D.type === lt || !nr(D, M) || D.shapeFlag & 70) ? p(D.el) : A;
          m(D, M, nt, null, E, $, R, B, !0);
        }
      },
      d = (v, y, A, E, $) => {
        if (y !== A) {
          if (y !== pt) for (const R in y) !fr(R) && !(R in A) && s(v, R, y[R], null, $, E);
          for (const R in A) {
            if (fr(R)) continue;
            const B = A[R],
              N = y[R];
            B !== N && R !== "value" && s(v, R, N, B, $, E);
          }
          "value" in A && s(v, "value", y.value, A.value, $);
        }
      },
      S = (v, y, A, E, $, R, B, N, D) => {
        const M = (y.el = v ? v.el : a("")),
          nt = (y.anchor = v ? v.anchor : a(""));
        let { patchFlag: W, dynamicChildren: Y, slotScopeIds: ot } = y;
        ot && (N = N ? N.concat(ot) : ot),
          v == null
            ? (r(M, A, E), r(nt, A, E), H(y.children || [], A, nt, $, R, B, N, D))
            : W > 0 && W & 64 && Y && v.dynamicChildren
              ? (I(v.dynamicChildren, Y, A, $, R, B, N), (y.key != null || ($ && y === $.subTree)) && yh(v, y, !0))
              : at(v, y, A, nt, $, R, B, N, D);
      },
      C = (v, y, A, E, $, R, B, N, D) => {
        (y.slotScopeIds = N),
          v == null ? (y.shapeFlag & 512 ? $.ctx.activate(y, A, E, B, D) : J(y, A, E, $, R, B, D)) : et(v, y, D);
      },
      J = (v, y, A, E, $, R, B) => {
        const N = (v.component = dm(v, E, $));
        if ((eh(v) && (N.ctx.renderer = Q), gm(N, !1, B), N.asyncDep)) {
          if (($ && $.registerDep(N, K, B), !v.el)) {
            const D = (N.subTree = st(Xe));
            x(null, D, y, A);
          }
        } else K(N, v, y, A, $, R, B);
      },
      et = (v, y, A) => {
        const E = (y.component = v.component);
        if (sm(v, y, A))
          if (E.asyncDep && !E.asyncResolved) {
            q(E, y, A);
            return;
          } else (E.next = y), E.update();
        else (y.el = v.el), (E.vnode = y);
      },
      K = (v, y, A, E, $, R, B) => {
        const N = () => {
          if (v.isMounted) {
            let { next: W, bu: Y, u: ot, parent: ft, vnode: kt } = v;
            {
              const ve = _h(v);
              if (ve) {
                W && ((W.el = kt.el), q(v, W, B)),
                  ve.asyncDep.then(() => {
                    v.isUnmounted || N();
                  });
                return;
              }
            }
            let vt = W,
              ne;
            cn(v, !1),
              W ? ((W.el = kt.el), q(v, W, B)) : (W = kt),
              Y && no(Y),
              (ne = W.props && W.props.onVnodeBeforeUpdate) && ye(ne, ft, W, kt),
              cn(v, !0);
            const Yt = Ya(v),
              me = v.subTree;
            (v.subTree = Yt),
              m(me, Yt, p(me.el), O(me), v, $, R),
              (W.el = Yt.el),
              vt === null && im(v, Yt.el),
              ot && oe(ot, $),
              (ne = W.props && W.props.onVnodeUpdated) && oe(() => ye(ne, ft, W, kt), $);
          } else {
            let W;
            const { el: Y, props: ot } = y,
              { bm: ft, m: kt, parent: vt, root: ne, type: Yt } = v,
              me = Nn(y);
            cn(v, !1), ft && no(ft), !me && (W = ot && ot.onVnodeBeforeMount) && ye(W, vt, y), cn(v, !0);
            {
              ne.ce && ne.ce._injectChildStyle(Yt);
              const ve = (v.subTree = Ya(v));
              m(null, ve, A, E, v, $, R), (y.el = ve.el);
            }
            if ((kt && oe(kt, $), !me && (W = ot && ot.onVnodeMounted))) {
              const ve = y;
              oe(() => ye(W, vt, ve), $);
            }
            (y.shapeFlag & 256 || (vt && Nn(vt.vnode) && vt.vnode.shapeFlag & 256)) && v.a && oe(v.a, $),
              (v.isMounted = !0),
              (y = A = E = null);
          }
        };
        v.scope.on();
        const D = (v.effect = new Rf(N));
        v.scope.off();
        const M = (v.update = D.run.bind(D)),
          nt = (v.job = D.runIfDirty.bind(D));
        (nt.i = v), (nt.id = v.uid), (D.scheduler = () => Xi(nt)), cn(v, !0), M();
      },
      q = (v, y, A) => {
        y.component = v;
        const E = v.vnode.props;
        (v.vnode = y), (v.next = null), Vg(v, y.props, E, A), Wg(v, y.children, A), nn(), Ka(v), rn();
      },
      at = (v, y, A, E, $, R, B, N, D = !1) => {
        const M = v && v.children,
          nt = v ? v.shapeFlag : 0,
          W = y.children,
          { patchFlag: Y, shapeFlag: ot } = y;
        if (Y > 0) {
          if (Y & 128) {
            $t(M, W, A, E, $, R, B, N, D);
            return;
          } else if (Y & 256) {
            Ut(M, W, A, E, $, R, B, N, D);
            return;
          }
        }
        ot & 8
          ? (nt & 16 && ie(M, $, R), W !== M && u(A, W))
          : nt & 16
            ? ot & 16
              ? $t(M, W, A, E, $, R, B, N, D)
              : ie(M, $, R, !0)
            : (nt & 8 && u(A, ""), ot & 16 && H(W, A, E, $, R, B, N, D));
      },
      Ut = (v, y, A, E, $, R, B, N, D) => {
        (v = v || Ln), (y = y || Ln);
        const M = v.length,
          nt = y.length,
          W = Math.min(M, nt);
        let Y;
        for (Y = 0; Y < W; Y++) {
          const ot = (y[Y] = D ? Ge(y[Y]) : xe(y[Y]));
          m(v[Y], ot, A, null, $, R, B, N, D);
        }
        M > nt ? ie(v, $, R, !0, !1, W) : H(y, A, E, $, R, B, N, D, W);
      },
      $t = (v, y, A, E, $, R, B, N, D) => {
        let M = 0;
        const nt = y.length;
        let W = v.length - 1,
          Y = nt - 1;
        for (; M <= W && M <= Y; ) {
          const ot = v[M],
            ft = (y[M] = D ? Ge(y[M]) : xe(y[M]));
          if (nr(ot, ft)) m(ot, ft, A, null, $, R, B, N, D);
          else break;
          M++;
        }
        for (; M <= W && M <= Y; ) {
          const ot = v[W],
            ft = (y[Y] = D ? Ge(y[Y]) : xe(y[Y]));
          if (nr(ot, ft)) m(ot, ft, A, null, $, R, B, N, D);
          else break;
          W--, Y--;
        }
        if (M > W) {
          if (M <= Y) {
            const ot = Y + 1,
              ft = ot < nt ? y[ot].el : E;
            for (; M <= Y; ) m(null, (y[M] = D ? Ge(y[M]) : xe(y[M])), A, ft, $, R, B, N, D), M++;
          }
        } else if (M > Y) for (; M <= W; ) wt(v[M], $, R, !0), M++;
        else {
          const ot = M,
            ft = M,
            kt = new Map();
          for (M = ft; M <= Y; M++) {
            const re = (y[M] = D ? Ge(y[M]) : xe(y[M]));
            re.key != null && kt.set(re.key, M);
          }
          let vt,
            ne = 0;
          const Yt = Y - ft + 1;
          let me = !1,
            ve = 0;
          const tr = new Array(Yt);
          for (M = 0; M < Yt; M++) tr[M] = 0;
          for (M = ot; M <= W; M++) {
            const re = v[M];
            if (ne >= Yt) {
              wt(re, $, R, !0);
              continue;
            }
            let be;
            if (re.key != null) be = kt.get(re.key);
            else
              for (vt = ft; vt <= Y; vt++)
                if (tr[vt - ft] === 0 && nr(re, y[vt])) {
                  be = vt;
                  break;
                }
            be === void 0
              ? wt(re, $, R, !0)
              : ((tr[be - ft] = M + 1), be >= ve ? (ve = be) : (me = !0), m(re, y[be], A, null, $, R, B, N, D), ne++);
          }
          const Fa = me ? Qg(tr) : Ln;
          for (vt = Fa.length - 1, M = Yt - 1; M >= 0; M--) {
            const re = ft + M,
              be = y[re],
              Ba = re + 1 < nt ? y[re + 1].el : E;
            tr[M] === 0 ? m(null, be, A, Ba, $, R, B, N, D) : me && (vt < 0 || M !== Fa[vt] ? Gt(be, A, Ba, 2) : vt--);
          }
        }
      },
      Gt = (v, y, A, E, $ = null) => {
        const { el: R, type: B, transition: N, children: D, shapeFlag: M } = v;
        if (M & 6) {
          Gt(v.component.subTree, y, A, E);
          return;
        }
        if (M & 128) {
          v.suspense.move(y, A, E);
          return;
        }
        if (M & 64) {
          B.move(v, y, A, Q);
          return;
        }
        if (B === lt) {
          r(R, y, A);
          for (let W = 0; W < D.length; W++) Gt(D[W], y, A, E);
          r(v.anchor, y, A);
          return;
        }
        if (B === ms) {
          w(v, y, A);
          return;
        }
        if (E !== 2 && M & 1 && N)
          if (E === 0) N.beforeEnter(R), r(R, y, A), oe(() => N.enter(R), $);
          else {
            const { leave: W, delayLeave: Y, afterLeave: ot } = N,
              ft = () => r(R, y, A),
              kt = () => {
                W(R, () => {
                  ft(), ot && ot();
                });
              };
            Y ? Y(R, ft, kt) : kt();
          }
        else r(R, y, A);
      },
      wt = (v, y, A, E = !1, $ = !1) => {
        const {
          type: R,
          props: B,
          ref: N,
          children: D,
          dynamicChildren: M,
          shapeFlag: nt,
          patchFlag: W,
          dirs: Y,
          cacheIndex: ot,
        } = v;
        if (
          (W === -2 && ($ = !1),
          N != null && go(N, null, A, v, !0),
          ot != null && (y.renderCache[ot] = void 0),
          nt & 256)
        ) {
          y.ctx.deactivate(v);
          return;
        }
        const ft = nt & 1 && Y,
          kt = !Nn(v);
        let vt;
        if ((kt && (vt = B && B.onVnodeBeforeUnmount) && ye(vt, y, v), nt & 6)) jn(v.component, A, E);
        else {
          if (nt & 128) {
            v.suspense.unmount(A, E);
            return;
          }
          ft && ln(v, null, y, "beforeUnmount"),
            nt & 64
              ? v.type.remove(v, y, A, Q, E)
              : M && !M.hasOnce && (R !== lt || (W > 0 && W & 64))
                ? ie(M, y, A, !1, !0)
                : ((R === lt && W & 384) || (!$ && nt & 16)) && ie(D, y, A),
            E && qt(v);
        }
        ((kt && (vt = B && B.onVnodeUnmounted)) || ft) &&
          oe(() => {
            vt && ye(vt, y, v), ft && ln(v, null, y, "unmounted");
          }, A);
      },
      qt = (v) => {
        const { type: y, el: A, anchor: E, transition: $ } = v;
        if (y === lt) {
          je(A, E);
          return;
        }
        if (y === ms) {
          k(v);
          return;
        }
        const R = () => {
          o(A), $ && !$.persisted && $.afterLeave && $.afterLeave();
        };
        if (v.shapeFlag & 1 && $ && !$.persisted) {
          const { leave: B, delayLeave: N } = $,
            D = () => B(A, R);
          N ? N(v.el, R, D) : D();
        } else R();
      },
      je = (v, y) => {
        let A;
        for (; v !== y; ) (A = h(v)), o(v), (v = A);
        o(y);
      },
      jn = (v, y, A) => {
        const { bum: E, scope: $, job: R, subTree: B, um: N, m: D, a: M } = v;
        Xa(D),
          Xa(M),
          E && no(E),
          $.stop(),
          R && ((R.flags |= 8), wt(B, v, y, A)),
          N && oe(N, y),
          oe(() => {
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
      ie = (v, y, A, E = !1, $ = !1, R = 0) => {
        for (let B = R; B < v.length; B++) wt(v[B], y, A, E, $);
      },
      O = (v) => {
        if (v.shapeFlag & 6) return O(v.component.subTree);
        if (v.shapeFlag & 128) return v.suspense.next();
        const y = h(v.anchor || v.el),
          A = y && y[vg];
        return A ? h(A) : y;
      };
    let G = !1;
    const U = (v, y, A) => {
        v == null ? y._vnode && wt(y._vnode, null, null, !0) : m(y._vnode || null, v, y, null, null, null, A),
          (y._vnode = v),
          G || ((G = !0), Ka(), Qf(), (G = !1));
      },
      Q = { p: m, um: wt, m: Gt, r: qt, mt: J, mc: H, pc: at, pbc: I, n: O, o: t };
    return { render: U, hydrate: void 0, createApp: Fg(U) };
  }
  function gs({ type: t, props: e }, n) {
    return (n === "svg" && t === "foreignObject") ||
      (n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html"))
      ? void 0
      : n;
  }
  function cn({ effect: t, job: e }, n) {
    n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
  }
  function Jg(t, e) {
    return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
  }
  function yh(t, e, n = !1) {
    const r = t.children,
      o = e.children;
    if (tt(r) && tt(o))
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        let a = o[s];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = o[s] = Ge(o[s])), (a.el = i.el)),
          !n && a.patchFlag !== -2 && yh(i, a)),
          a.type === Ho && (a.el = i.el);
      }
  }
  function Qg(t) {
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
  function _h(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : _h(e);
  }
  function Xa(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const Xg = Symbol.for("v-scx"),
    Yg = () => ue(Xg);
  function wh(t, e) {
    return Uo(t, null, e);
  }
  function tm(t, e) {
    return Uo(t, null, { flush: "sync" });
  }
  function Se(t, e, n) {
    return Uo(t, e, n);
  }
  function Uo(t, e, n = pt) {
    const { immediate: r, deep: o, flush: s, once: i } = n,
      a = Ht({}, n),
      l = (e && r) || (!e && s !== "post");
    let c;
    if (Rr) {
      if (s === "sync") {
        const f = Yg();
        c = f.__watcherHandles || (f.__watcherHandles = []);
      } else if (!l) {
        const f = () => {};
        return (f.stop = ke), (f.resume = ke), (f.pause = ke), f;
      }
    }
    const u = Ft;
    a.call = (f, g, m) => Te(f, u, g, m);
    let p = !1;
    s === "post"
      ? (a.scheduler = (f) => {
          oe(f, u && u.suspense);
        })
      : s !== "sync" &&
        ((p = !0),
        (a.scheduler = (f, g) => {
          g ? f() : Xi(f);
        })),
      (a.augmentJob = (f) => {
        e && (f.flags |= 4), p && ((f.flags |= 2), u && ((f.id = u.uid), (f.i = u)));
      });
    const h = pg(t, e, a);
    return Rr && (c ? c.push(h) : l && h()), h;
  }
  function em(t, e, n) {
    const r = this.proxy,
      o = Dt(t) ? (t.includes(".") ? xh(r, t) : () => r[t]) : t.bind(r, r);
    let s;
    it(e) ? (s = e) : ((s = e.handler), (n = e));
    const i = Fr(this),
      a = Uo(o, s.bind(r), n);
    return i(), a;
  }
  function xh(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  function kh(t, e, n = pt) {
    const r = ra(),
      o = ee(e),
      s = tn(e),
      i = Sh(t, o),
      a = ig((l, c) => {
        let u,
          p = pt,
          h;
        return (
          tm(() => {
            const f = t[o];
            te(u, f) && ((u = f), c());
          }),
          {
            get() {
              return l(), n.get ? n.get(u) : u;
            },
            set(f) {
              const g = n.set ? n.set(f) : f;
              if (!te(g, u) && !(p !== pt && te(f, p))) return;
              const m = r.vnode.props;
              (m &&
                (e in m || o in m || s in m) &&
                (`onUpdate:${e}` in m || `onUpdate:${o}` in m || `onUpdate:${s}` in m)) ||
                ((u = f), c()),
                r.emit(`update:${e}`, g),
                te(f, g) && te(f, p) && !te(g, h) && c(),
                (p = f),
                (h = g);
            },
          }
        );
      });
    return (
      (a[Symbol.iterator] = () => {
        let l = 0;
        return {
          next() {
            return l < 2 ? { value: l++ ? i || pt : a, done: !1 } : { done: !0 };
          },
        };
      }),
      a
    );
  }
  const Sh = (t, e) =>
    e === "modelValue" || e === "model-value"
      ? t.modelModifiers
      : t[`${e}Modifiers`] || t[`${ee(e)}Modifiers`] || t[`${tn(e)}Modifiers`];
  function nm(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || pt;
    let o = n;
    const s = e.startsWith("update:"),
      i = s && Sh(r, e.slice(7));
    i && (i.trim && (o = n.map((u) => (Dt(u) ? u.trim() : u))), i.number && (o = n.map(ci)));
    let a,
      l = r[(a = hr(e))] || r[(a = hr(ee(e)))];
    !l && s && (l = r[(a = hr(tn(e)))]), l && Te(l, t, 6, o);
    const c = r[a + "Once"];
    if (c) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[a]) return;
      (t.emitted[a] = !0), Te(c, t, 6, o);
    }
  }
  function Ah(t, e, n = !1) {
    const r = e.emitsCache,
      o = r.get(t);
    if (o !== void 0) return o;
    const s = t.emits;
    let i = {},
      a = !1;
    if (!it(t)) {
      const l = (c) => {
        const u = Ah(c, e, !0);
        u && ((a = !0), Ht(i, u));
      };
      !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
    }
    return !s && !a
      ? (Et(t) && r.set(t, null), null)
      : (tt(s) ? s.forEach((l) => (i[l] = null)) : Ht(i, s), Et(t) && r.set(t, i), i);
  }
  function Vo(t, e) {
    return !t || !Ro(e)
      ? !1
      : ((e = e.slice(2).replace(/Once$/, "")), gt(t, e[0].toLowerCase() + e.slice(1)) || gt(t, tn(e)) || gt(t, e));
  }
  function Ya(t) {
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
        props: p,
        data: h,
        setupState: f,
        ctx: g,
        inheritAttrs: m,
      } = t,
      _ = po(t);
    let x, b;
    try {
      if (n.shapeFlag & 4) {
        const k = o || r,
          T = k;
        (x = xe(c.call(T, k, u, p, f, h, g))), (b = a);
      } else {
        const k = e;
        (x = xe(k.length > 1 ? k(p, { attrs: a, slots: i, emit: l }) : k(p, null))), (b = e.props ? a : rm(a));
      }
    } catch (k) {
      (mr.length = 0), zo(k, t, 1), (x = st(Xe));
    }
    let w = x;
    if (b && m !== !1) {
      const k = Object.keys(b),
        { shapeFlag: T } = w;
      k.length && T & 7 && (s && k.some(Bi) && (b = om(b, s)), (w = Un(w, b, !1, !0)));
    }
    return (
      n.dirs && ((w = Un(w, null, !1, !0)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
      n.transition && Yi(w, n.transition),
      (x = w),
      po(_),
      x
    );
  }
  const rm = (t) => {
      let e;
      for (const n in t) (n === "class" || n === "style" || Ro(n)) && ((e || (e = {}))[n] = t[n]);
      return e;
    },
    om = (t, e) => {
      const n = {};
      for (const r in t) (!Bi(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
      return n;
    };
  function sm(t, e, n) {
    const { props: r, children: o, component: s } = t,
      { props: i, children: a, patchFlag: l } = e,
      c = s.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? tl(r, i, c) : !!i;
      if (l & 8) {
        const u = e.dynamicProps;
        for (let p = 0; p < u.length; p++) {
          const h = u[p];
          if (i[h] !== r[h] && !Vo(c, h)) return !0;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? tl(r, i, c) : !0) : !!i;
    return !1;
  }
  function tl(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (e[s] !== t[s] && !Vo(n, s)) return !0;
    }
    return !1;
  }
  function im({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
        ((t = e.vnode).el = n), (e = e.parent);
      else break;
    }
  }
  const Th = (t) => t.__isSuspense;
  function am(t, e) {
    e && e.pendingBranch ? (tt(t) ? e.effects.push(...t) : e.effects.push(t)) : mg(t);
  }
  const lt = Symbol.for("v-fgt"),
    Ho = Symbol.for("v-txt"),
    Xe = Symbol.for("v-cmt"),
    ms = Symbol.for("v-stc"),
    mr = [];
  let se = null;
  function P(t = !1) {
    mr.push((se = t ? null : []));
  }
  function lm() {
    mr.pop(), (se = mr[mr.length - 1] || null);
  }
  let Or = 1;
  function el(t, e = !1) {
    (Or += t), t < 0 && se && e && (se.hasOnce = !0);
  }
  function Eh(t) {
    return (t.dynamicChildren = Or > 0 ? se || Ln : null), lm(), Or > 0 && se && se.push(t), t;
  }
  function L(t, e, n, r, o, s) {
    return Eh(j(t, e, n, r, o, s, !0));
  }
  function Bn(t, e, n, r, o) {
    return Eh(st(t, e, n, r, o, !0));
  }
  function Cr(t) {
    return t ? t.__v_isVNode === !0 : !1;
  }
  function nr(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const Oh = ({ key: t }) => t ?? null,
    oo = ({ ref: t, ref_key: e, ref_for: n }) => (
      typeof t == "number" && (t = "" + t),
      t != null ? (Dt(t) || It(t) || it(t) ? { i: Nt, r: t, k: e, f: !!n } : t) : null
    );
  function j(t, e = null, n = null, r = 0, o = null, s = t === lt ? 0 : 1, i = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t,
      props: e,
      key: e && Oh(e),
      ref: e && oo(e),
      scopeId: Yf,
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
      ctx: Nt,
    };
    return (
      a ? (na(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Dt(n) ? 8 : 16),
      Or > 0 && !i && se && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && se.push(l),
      l
    );
  }
  const st = cm;
  function cm(t, e = null, n = null, r = 0, o = null, s = !1) {
    if (((!t || t === Rg) && (t = Xe), Cr(t))) {
      const a = Un(t, e, !0);
      return (
        n && na(a, n),
        Or > 0 && !s && se && (a.shapeFlag & 6 ? (se[se.indexOf(t)] = a) : se.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((_m(t) && (t = t.__vccOpts), e)) {
      e = um(e);
      let { class: a, style: l } = e;
      a && !Dt(a) && (e.class = Lt(a)), Et(l) && (Ji(l) && !tt(l) && (l = Ht({}, l)), (e.style = en(l)));
    }
    const i = Dt(t) ? 1 : Th(t) ? 128 : bg(t) ? 64 : Et(t) ? 4 : it(t) ? 2 : 0;
    return j(t, e, n, r, o, i, s, !0);
  }
  function um(t) {
    return t ? (Ji(t) || hh(t) ? Ht({}, t) : t) : null;
  }
  function Un(t, e, n = !1, r = !1) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = t,
      c = e ? fm(o || {}, e) : o,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: c,
        key: c && Oh(c),
        ref: e && e.ref ? (n && s ? (tt(s) ? s.concat(oo(e)) : [s, oo(e)]) : oo(e)) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== lt ? (i === -1 ? 16 : i | 16) : i,
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
    return l && r && Yi(u, l.clone(u)), u;
  }
  function Fe(t = " ", e = 0) {
    return st(Ho, null, t, e);
  }
  function Pt(t = "", e = !1) {
    return e ? (P(), Bn(Xe, null, t)) : st(Xe, null, t);
  }
  function xe(t) {
    return t == null || typeof t == "boolean"
      ? st(Xe)
      : tt(t)
        ? st(lt, null, t.slice())
        : Cr(t)
          ? Ge(t)
          : st(Ho, null, String(t));
  }
  function Ge(t) {
    return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Un(t);
  }
  function na(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (tt(e)) n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const o = e.default;
        o && (o._c && (o._d = !1), na(t, o()), o._c && (o._d = !0));
        return;
      } else {
        n = 32;
        const o = e._;
        !o && !hh(e)
          ? (e._ctx = Nt)
          : o === 3 && Nt && (Nt.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
      }
    else
      it(e)
        ? ((e = { default: e, _ctx: Nt }), (n = 32))
        : ((e = String(e)), r & 64 ? ((n = 16), (e = [Fe(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
  }
  function fm(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const o in r)
        if (o === "class") e.class !== r.class && (e.class = Lt([e.class, r.class]));
        else if (o === "style") e.style = en([e.style, r.style]);
        else if (Ro(o)) {
          const s = e[o],
            i = r[o];
          i && s !== i && !(tt(s) && s.includes(i)) && (e[o] = s ? [].concat(s, i) : i);
        } else o !== "" && (e[o] = r[o]);
    }
    return e;
  }
  function ye(t, e, n, r = null) {
    Te(t, e, 7, [n, r]);
  }
  const hm = ch();
  let pm = 0;
  function dm(t, e, n) {
    const r = t.type,
      o = (e ? e.appContext : t.appContext) || hm,
      s = {
        uid: pm++,
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
        scope: new Ef(!0),
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
        propsOptions: dh(r, o),
        emitsOptions: Ah(r, o),
        emit: null,
        emitted: null,
        propsDefaults: pt,
        inheritAttrs: r.inheritAttrs,
        ctx: pt,
        data: pt,
        props: pt,
        attrs: pt,
        slots: pt,
        refs: pt,
        setupState: pt,
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
    return (s.ctx = { _: s }), (s.root = e ? e.root : s), (s.emit = nm.bind(null, s)), t.ce && t.ce(s), s;
  }
  let Ft = null;
  const ra = () => Ft || Nt;
  let bo, bi;
  {
    const t = Io(),
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
    (bo = e("__VUE_INSTANCE_SETTERS__", (n) => (Ft = n))), (bi = e("__VUE_SSR_SETTERS__", (n) => (Rr = n)));
  }
  const Fr = (t) => {
      const e = Ft;
      return (
        bo(t),
        t.scope.on(),
        () => {
          t.scope.off(), bo(e);
        }
      );
    },
    nl = () => {
      Ft && Ft.scope.off(), bo(null);
    };
  function Ch(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Rr = !1;
  function gm(t, e = !1, n = !1) {
    e && bi(e);
    const { props: r, children: o } = t.vnode,
      s = Ch(t);
    Ug(t, r, s, e), Kg(t, o, n);
    const i = s ? mm(t, e) : void 0;
    return e && bi(!1), i;
  }
  function mm(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, $g));
    const { setup: r } = n;
    if (r) {
      nn();
      const o = (t.setupContext = r.length > 1 ? bm(t) : null),
        s = Fr(t),
        i = Nr(r, t, 0, [t.props, o]),
        a = yf(i);
      if ((rn(), s(), (a || t.sp) && !Nn(t) && th(t), a)) {
        if ((i.then(nl, nl), e))
          return i
            .then((l) => {
              rl(t, l);
            })
            .catch((l) => {
              zo(l, t, 0);
            });
        t.asyncDep = i;
      } else rl(t, i);
    } else Rh(t);
  }
  function rl(t, e, n) {
    it(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : Et(e) && (t.setupState = Gf(e)), Rh(t);
  }
  function Rh(t, e, n) {
    const r = t.type;
    t.render || (t.render = r.render || ke);
    {
      const o = Fr(t);
      nn();
      try {
        Ig(t);
      } finally {
        rn(), o();
      }
    }
  }
  const vm = {
    get(t, e) {
      return Kt(t, "get", ""), t[e];
    },
  };
  function bm(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return { attrs: new Proxy(t.attrs, vm), slots: t.slots, emit: t.emit, expose: e };
  }
  function qo(t) {
    return t.exposed
      ? t.exposeProxy ||
          (t.exposeProxy = new Proxy(Gf(Qi(t.exposed)), {
            get(e, n) {
              if (n in e) return e[n];
              if (n in gr) return gr[n](t);
            },
            has(e, n) {
              return n in e || n in gr;
            },
          }))
      : t.proxy;
  }
  function ym(t, e = !0) {
    return it(t) ? t.displayName || t.name : t.name || (e && t.__name);
  }
  function _m(t) {
    return it(t) && "__vccOpts" in t;
  }
  const rt = (t, e) => fg(t, e, Rr);
  function jh(t, e, n) {
    const r = arguments.length;
    return r === 2
      ? Et(e) && !tt(e)
        ? Cr(e)
          ? st(t, null, [e])
          : st(t, e)
        : st(t, null, e)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Cr(n) && (n = [n]), st(t, e, n));
  }
  const wm = "3.5.13";
  /**
   * @vue/runtime-dom v3.5.13
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let yi;
  const ol = typeof window < "u" && window.trustedTypes;
  if (ol)
    try {
      yi = ol.createPolicy("vue", { createHTML: (t) => t });
    } catch {}
  const $h = yi ? (t) => yi.createHTML(t) : (t) => t,
    xm = "http://www.w3.org/2000/svg",
    km = "http://www.w3.org/1998/Math/MathML",
    Me = typeof document < "u" ? document : null,
    sl = Me && Me.createElement("template"),
    Sm = {
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
            ? Me.createElementNS(xm, t)
            : e === "mathml"
              ? Me.createElementNS(km, t)
              : n
                ? Me.createElement(t, { is: n })
                : Me.createElement(t);
        return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
      },
      createText: (t) => Me.createTextNode(t),
      createComment: (t) => Me.createComment(t),
      setText: (t, e) => {
        t.nodeValue = e;
      },
      setElementText: (t, e) => {
        t.textContent = e;
      },
      parentNode: (t) => t.parentNode,
      nextSibling: (t) => t.nextSibling,
      querySelector: (t) => Me.querySelector(t),
      setScopeId(t, e) {
        t.setAttribute(e, "");
      },
      insertStaticContent(t, e, n, r, o, s) {
        const i = n ? n.previousSibling : e.lastChild;
        if (o && (o === s || o.nextSibling))
          for (; e.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); );
        else {
          sl.innerHTML = $h(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
          const a = sl.content;
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
    Am = Symbol("_vtc");
  function Tm(t, e, n) {
    const r = t[Am];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
      e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : (t.className = e);
  }
  const il = Symbol("_vod"),
    Em = Symbol("_vsh"),
    Om = Symbol(""),
    Cm = /(^|;)\s*display\s*:/;
  function Rm(t, e, n) {
    const r = t.style,
      o = Dt(n);
    let s = !1;
    if (n && !o) {
      if (e)
        if (Dt(e))
          for (const i of e.split(";")) {
            const a = i.slice(0, i.indexOf(":")).trim();
            n[a] == null && so(r, a, "");
          }
        else for (const i in e) n[i] == null && so(r, i, "");
      for (const i in n) i === "display" && (s = !0), so(r, i, n[i]);
    } else if (o) {
      if (e !== n) {
        const i = r[Om];
        i && (n += ";" + i), (r.cssText = n), (s = Cm.test(n));
      }
    } else e && t.removeAttribute("style");
    il in t && ((t[il] = s ? r.display : ""), t[Em] && (r.display = "none"));
  }
  const al = /\s*!important$/;
  function so(t, e, n) {
    if (tt(n)) n.forEach((r) => so(t, e, r));
    else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
    else {
      const r = jm(t, e);
      al.test(n) ? t.setProperty(tn(r), n.replace(al, ""), "important") : (t[r] = n);
    }
  }
  const ll = ["Webkit", "Moz", "ms"],
    vs = {};
  function jm(t, e) {
    const n = vs[e];
    if (n) return n;
    let r = ee(e);
    if (r !== "filter" && r in t) return (vs[e] = r);
    r = Po(r);
    for (let o = 0; o < ll.length; o++) {
      const s = ll[o] + r;
      if (s in t) return (vs[e] = s);
    }
    return e;
  }
  const cl = "http://www.w3.org/1999/xlink";
  function ul(t, e, n, r, o, s = Ld(e)) {
    r && e.startsWith("xlink:")
      ? n == null
        ? t.removeAttributeNS(cl, e.slice(6, e.length))
        : t.setAttributeNS(cl, e, n)
      : n == null || (s && !kf(n))
        ? t.removeAttribute(e)
        : t.setAttribute(e, s ? "" : pe(n) ? String(n) : n);
  }
  function fl(t, e, n, r, o) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? $h(n) : n);
      return;
    }
    const s = t.tagName;
    if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const a = s === "OPTION" ? t.getAttribute("value") || "" : t.value,
        l = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
      (a !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), (t._value = n);
      return;
    }
    let i = !1;
    if (n === "" || n == null) {
      const a = typeof t[e];
      a === "boolean"
        ? (n = kf(n))
        : n == null && a === "string"
          ? ((n = ""), (i = !0))
          : a === "number" && ((n = 0), (i = !0));
    }
    try {
      t[e] = n;
    } catch {}
    i && t.removeAttribute(o || e);
  }
  function pn(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function $m(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const hl = Symbol("_vei");
  function Pm(t, e, n, r, o = null) {
    const s = t[hl] || (t[hl] = {}),
      i = s[e];
    if (r && i) i.value = r;
    else {
      const [a, l] = Im(e);
      if (r) {
        const c = (s[e] = Dm(r, o));
        pn(t, a, c, l);
      } else i && ($m(t, a, i, l), (s[e] = void 0));
    }
  }
  const pl = /(?:Once|Passive|Capture)$/;
  function Im(t) {
    let e;
    if (pl.test(t)) {
      e = {};
      let r;
      for (; (r = t.match(pl)); ) (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
    }
    return [t[2] === ":" ? t.slice(3) : tn(t.slice(2)), e];
  }
  let bs = 0;
  const Mm = Promise.resolve(),
    Lm = () => bs || (Mm.then(() => (bs = 0)), (bs = Date.now()));
  function Dm(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      Te(zm(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = Lm()), n;
  }
  function zm(t, e) {
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
  const dl = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    Nm = (t, e, n, r, o, s) => {
      const i = o === "svg";
      e === "class"
        ? Tm(t, r, i)
        : e === "style"
          ? Rm(t, n, r)
          : Ro(e)
            ? Bi(e) || Pm(t, e, n, r, s)
            : (e[0] === "." ? ((e = e.slice(1)), !0) : e[0] === "^" ? ((e = e.slice(1)), !1) : Fm(t, e, r, i))
              ? (fl(t, e, r),
                !t.tagName.includes("-") &&
                  (e === "value" || e === "checked" || e === "selected") &&
                  ul(t, e, r, i, s, e !== "value"))
              : t._isVueCE && (/[A-Z]/.test(e) || !Dt(r))
                ? fl(t, ee(e), r, s, e)
                : (e === "true-value" ? (t._trueValue = r) : e === "false-value" && (t._falseValue = r),
                  ul(t, e, r, i));
    };
  function Fm(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || (e in t && dl(e) && it(n)));
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
    return dl(e) && Dt(n) ? !1 : e in t;
  }
  const yo = (t) => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return tt(e) ? (n) => no(e, n) : e;
  };
  function Bm(t) {
    t.target.composing = !0;
  }
  function gl(t) {
    const e = t.target;
    e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
  }
  const Fn = Symbol("_assign"),
    Um = {
      created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
        t[Fn] = yo(o);
        const s = r || (o.props && o.props.type === "number");
        pn(t, e ? "change" : "input", (i) => {
          if (i.target.composing) return;
          let a = t.value;
          n && (a = a.trim()), s && (a = ci(a)), t[Fn](a);
        }),
          n &&
            pn(t, "change", () => {
              t.value = t.value.trim();
            }),
          e || (pn(t, "compositionstart", Bm), pn(t, "compositionend", gl), pn(t, "change", gl));
      },
      mounted(t, { value: e }) {
        t.value = e ?? "";
      },
      beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
        if (((t[Fn] = yo(i)), t.composing)) return;
        const a = (s || t.type === "number") && !/^0\d/.test(t.value) ? ci(t.value) : t.value,
          l = e ?? "";
        a !== l &&
          ((document.activeElement === t && t.type !== "range" && ((r && e === n) || (o && t.value.trim() === l))) ||
            (t.value = l));
      },
    },
    oa = {
      deep: !0,
      created(t, e, n) {
        (t[Fn] = yo(n)),
          pn(t, "change", () => {
            const r = t._modelValue,
              o = Vm(t),
              s = t.checked,
              i = t[Fn];
            if (tt(r)) {
              const a = Sf(r, o),
                l = a !== -1;
              if (s && !l) i(r.concat(o));
              else if (!s && l) {
                const c = [...r];
                c.splice(a, 1), i(c);
              }
            } else if (jo(r)) {
              const a = new Set(r);
              s ? a.add(o) : a.delete(o), i(a);
            } else i(Ph(t, s));
          });
      },
      mounted: ml,
      beforeUpdate(t, e, n) {
        (t[Fn] = yo(n)), ml(t, e, n);
      },
    };
  function ml(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let o;
    if (tt(e)) o = Sf(e, r.props.value) > -1;
    else if (jo(e)) o = e.has(r.props.value);
    else {
      if (e === n) return;
      o = Mo(e, Ph(t, !0));
    }
    t.checked !== o && (t.checked = o);
  }
  function Vm(t) {
    return "_value" in t ? t._value : t.value;
  }
  function Ph(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const Hm = ["ctrl", "shift", "alt", "meta"],
    qm = {
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
      exact: (t, e) => Hm.some((n) => t[`${n}Key`] && !e.includes(n)),
    },
    Kr = (t, e) => {
      const n = t._withMods || (t._withMods = {}),
        r = e.join(".");
      return (
        n[r] ||
        (n[r] = (o, ...s) => {
          for (let i = 0; i < e.length; i++) {
            const a = qm[e[i]];
            if (a && a(o, e)) return;
          }
          return t(o, ...s);
        })
      );
    },
    Km = Ht({ patchProp: Nm }, Sm);
  let vl;
  function Wm() {
    return vl || (vl = Gg(Km));
  }
  const Gm = (...t) => {
    const e = Wm().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (r) => {
        const o = Jm(r);
        if (!o) return;
        const s = e._component;
        !it(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
        const i = n(o, !1, Zm(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
      }),
      e
    );
  };
  function Zm(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function Jm(t) {
    return Dt(t) ? document.querySelector(t) : t;
  }
  /*!
   * pinia v2.3.1
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */ let Ih;
  const Ko = (t) => (Ih = t),
    Mh = Symbol();
  function _i(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Object]" &&
      typeof t.toJSON != "function"
    );
  }
  var vr;
  (function (t) {
    (t.direct = "direct"), (t.patchObject = "patch object"), (t.patchFunction = "patch function");
  })(vr || (vr = {}));
  function Qm() {
    const t = Of(!0),
      e = t.run(() => ut({}));
    let n = [],
      r = [];
    const o = Qi({
      install(s) {
        Ko(o),
          (o._a = s),
          s.provide(Mh, o),
          (s.config.globalProperties.$pinia = o),
          r.forEach((i) => n.push(i)),
          (r = []);
      },
      use(s) {
        return this._a ? n.push(s) : r.push(s), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e,
    });
    return o;
  }
  const Lh = () => {};
  function bl(t, e, n, r = Lh) {
    t.push(e);
    const o = () => {
      const s = t.indexOf(e);
      s > -1 && (t.splice(s, 1), r());
    };
    return !n && Hi() && Cf(o), o;
  }
  function Pn(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const Xm = (t) => t(),
    yl = Symbol(),
    ys = Symbol();
  function wi(t, e) {
    t instanceof Map && e instanceof Map
      ? e.forEach((n, r) => t.set(r, n))
      : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n],
        o = t[n];
      _i(o) && _i(r) && t.hasOwnProperty(n) && !It(r) && !Je(r) ? (t[n] = wi(o, r)) : (t[n] = r);
    }
    return t;
  }
  const Ym = Symbol();
  function tv(t) {
    return !_i(t) || !t.hasOwnProperty(Ym);
  }
  const { assign: Ke } = Object;
  function ev(t) {
    return !!(It(t) && t.effect);
  }
  function nv(t, e, n, r) {
    const { state: o, actions: s, getters: i } = e,
      a = n.state.value[t];
    let l;
    function c() {
      a || (n.state.value[t] = o ? o() : {});
      const u = ag(n.state.value[t]);
      return Ke(
        u,
        s,
        Object.keys(i || {}).reduce(
          (p, h) => (
            (p[h] = Qi(
              rt(() => {
                Ko(n);
                const f = n._s.get(t);
                return i[h].call(f, f);
              }),
            )),
            p
          ),
          {},
        ),
      );
    }
    return (l = Dh(t, c, e, n, r, !0)), l;
  }
  function Dh(t, e, n = {}, r, o, s) {
    let i;
    const a = Ke({ actions: {} }, n),
      l = { deep: !0 };
    let c,
      u,
      p = [],
      h = [],
      f;
    const g = r.state.value[t];
    !s && !g && (r.state.value[t] = {}), ut({});
    let m;
    function _(H) {
      let X;
      (c = u = !1),
        typeof H == "function"
          ? (H(r.state.value[t]), (X = { type: vr.patchFunction, storeId: t, events: f }))
          : (wi(r.state.value[t], H), (X = { type: vr.patchObject, payload: H, storeId: t, events: f }));
      const I = (m = Symbol());
      No().then(() => {
        m === I && (c = !0);
      }),
        (u = !0),
        Pn(p, X, r.state.value[t]);
    }
    const x = s
      ? function () {
          const { state: X } = n,
            I = X ? X() : {};
          this.$patch((d) => {
            Ke(d, I);
          });
        }
      : Lh;
    function b() {
      i.stop(), (p = []), (h = []), r._s.delete(t);
    }
    const w = (H, X = "") => {
        if (yl in H) return (H[ys] = X), H;
        const I = function () {
          Ko(r);
          const d = Array.from(arguments),
            S = [],
            C = [];
          function J(q) {
            S.push(q);
          }
          function et(q) {
            C.push(q);
          }
          Pn(h, { args: d, name: I[ys], store: T, after: J, onError: et });
          let K;
          try {
            K = H.apply(this && this.$id === t ? this : T, d);
          } catch (q) {
            throw (Pn(C, q), q);
          }
          return K instanceof Promise
            ? K.then((q) => (Pn(S, q), q)).catch((q) => (Pn(C, q), Promise.reject(q)))
            : (Pn(S, K), K);
        };
        return (I[yl] = !0), (I[ys] = X), I;
      },
      k = {
        _p: r,
        $id: t,
        $onAction: bl.bind(null, h),
        $patch: _,
        $reset: x,
        $subscribe(H, X = {}) {
          const I = bl(p, H, X.detached, () => d()),
            d = i.run(() =>
              Se(
                () => r.state.value[t],
                (S) => {
                  (X.flush === "sync" ? u : c) && H({ storeId: t, type: vr.direct, events: f }, S);
                },
                Ke({}, l, X),
              ),
            );
          return I;
        },
        $dispose: b,
      },
      T = Gn(k);
    r._s.set(t, T);
    const V = ((r._a && r._a.runWithContext) || Xm)(() => r._e.run(() => (i = Of()).run(() => e({ action: w }))));
    for (const H in V) {
      const X = V[H];
      if ((It(X) && !ev(X)) || Je(X))
        s || (g && tv(X) && (It(X) ? (X.value = g[H]) : wi(X, g[H])), (r.state.value[t][H] = X));
      else if (typeof X == "function") {
        const I = w(X, H);
        (V[H] = I), (a.actions[H] = X);
      }
    }
    return (
      Ke(T, V),
      Ke(ht(T), V),
      Object.defineProperty(T, "$state", {
        get: () => r.state.value[t],
        set: (H) => {
          _((X) => {
            Ke(X, H);
          });
        },
      }),
      r._p.forEach((H) => {
        Ke(
          T,
          i.run(() => H({ store: T, app: r._a, pinia: r, options: a })),
        );
      }),
      g && s && n.hydrate && n.hydrate(T.$state, g),
      (c = !0),
      (u = !0),
      T
    );
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Wo(t, e, n) {
    let r, o;
    const s = typeof e == "function";
    typeof t == "string" ? ((r = t), (o = s ? n : e)) : ((o = t), (r = t.id));
    function i(a, l) {
      const c = Bg();
      return (
        (a = a || (c ? ue(Mh, null) : null)),
        a && Ko(a),
        (a = Ih),
        a._s.has(r) || (s ? Dh(r, e, o, a) : nv(r, o, a)),
        a._s.get(r)
      );
    }
    return (i.$id = r), i;
  }
  /*!
   * vue-router v4.5.1
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */ const Mn = typeof document < "u";
  function zh(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function rv(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || (t.default && zh(t.default));
  }
  const dt = Object.assign;
  function _s(t, e) {
    const n = {};
    for (const r in e) {
      const o = e[r];
      n[r] = de(o) ? o.map(t) : t(o);
    }
    return n;
  }
  const br = () => {},
    de = Array.isArray,
    Nh = /#/g,
    ov = /&/g,
    sv = /\//g,
    iv = /=/g,
    av = /\?/g,
    Fh = /\+/g,
    lv = /%5B/g,
    cv = /%5D/g,
    Bh = /%5E/g,
    uv = /%60/g,
    Uh = /%7B/g,
    fv = /%7C/g,
    Vh = /%7D/g,
    hv = /%20/g;
  function sa(t) {
    return encodeURI("" + t)
      .replace(fv, "|")
      .replace(lv, "[")
      .replace(cv, "]");
  }
  function pv(t) {
    return sa(t).replace(Uh, "{").replace(Vh, "}").replace(Bh, "^");
  }
  function xi(t) {
    return sa(t)
      .replace(Fh, "%2B")
      .replace(hv, "+")
      .replace(Nh, "%23")
      .replace(ov, "%26")
      .replace(uv, "`")
      .replace(Uh, "{")
      .replace(Vh, "}")
      .replace(Bh, "^");
  }
  function dv(t) {
    return xi(t).replace(iv, "%3D");
  }
  function gv(t) {
    return sa(t).replace(Nh, "%23").replace(av, "%3F");
  }
  function mv(t) {
    return t == null ? "" : gv(t).replace(sv, "%2F");
  }
  function jr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {}
    return "" + t;
  }
  const vv = /\/$/,
    bv = (t) => t.replace(vv, "");
  function ws(t, e, n = "/") {
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
      (r = xv(r ?? e, n)),
      { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: jr(i) }
    );
  }
  function yv(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function _l(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function _v(t, e, n) {
    const r = e.matched.length - 1,
      o = n.matched.length - 1;
    return (
      r > -1 &&
      r === o &&
      Vn(e.matched[r], n.matched[o]) &&
      Hh(e.params, n.params) &&
      t(e.query) === t(n.query) &&
      e.hash === n.hash
    );
  }
  function Vn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function Hh(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t) if (!wv(t[n], e[n])) return !1;
    return !0;
  }
  function wv(t, e) {
    return de(t) ? wl(t, e) : de(e) ? wl(e, t) : t === e;
  }
  function wl(t, e) {
    return de(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function xv(t, e) {
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
  const qe = {
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
  var $r;
  (function (t) {
    (t.pop = "pop"), (t.push = "push");
  })($r || ($r = {}));
  var yr;
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(yr || (yr = {}));
  function kv(t) {
    if (!t)
      if (Mn) {
        const e = document.querySelector("base");
        (t = (e && e.getAttribute("href")) || "/"), (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
      } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), bv(t);
  }
  const Sv = /^[^#]+#/;
  function Av(t, e) {
    return t.replace(Sv, "#") + e;
  }
  function Tv(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
      r = t.getBoundingClientRect();
    return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) };
  }
  const Go = () => ({ left: window.scrollX, top: window.scrollY });
  function Ev(t) {
    let e;
    if ("el" in t) {
      const n = t.el,
        r = typeof n == "string" && n.startsWith("#"),
        o = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!o) return;
      e = Tv(o, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(e)
      : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function xl(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const ki = new Map();
  function Ov(t, e) {
    ki.set(t, e);
  }
  function Cv(t) {
    const e = ki.get(t);
    return ki.delete(t), e;
  }
  let Rv = () => location.protocol + "//" + location.host;
  function qh(t, e) {
    const { pathname: n, search: r, hash: o } = e,
      s = t.indexOf("#");
    if (s > -1) {
      let a = o.includes(t.slice(s)) ? t.slice(s).length : 1,
        l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), _l(l, "");
    }
    return _l(n, t) + r + o;
  }
  function jv(t, e, n, r) {
    let o = [],
      s = [],
      i = null;
    const a = ({ state: h }) => {
      const f = qh(t, location),
        g = n.value,
        m = e.value;
      let _ = 0;
      if (h) {
        if (((n.value = f), (e.value = h), i && i === g)) {
          i = null;
          return;
        }
        _ = m ? h.position - m.position : 0;
      } else r(f);
      o.forEach((x) => {
        x(n.value, g, { delta: _, type: $r.pop, direction: _ ? (_ > 0 ? yr.forward : yr.back) : yr.unknown });
      });
    };
    function l() {
      i = n.value;
    }
    function c(h) {
      o.push(h);
      const f = () => {
        const g = o.indexOf(h);
        g > -1 && o.splice(g, 1);
      };
      return s.push(f), f;
    }
    function u() {
      const { history: h } = window;
      h.state && h.replaceState(dt({}, h.state, { scroll: Go() }), "");
    }
    function p() {
      for (const h of s) h();
      (s = []), window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
    }
    return (
      window.addEventListener("popstate", a),
      window.addEventListener("beforeunload", u, { passive: !0 }),
      { pauseListeners: l, listen: c, destroy: p }
    );
  }
  function kl(t, e, n, r = !1, o = !1) {
    return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: o ? Go() : null };
  }
  function $v(t) {
    const { history: e, location: n } = window,
      r = { value: qh(t, n) },
      o = { value: e.state };
    o.value ||
      s(
        r.value,
        { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function s(l, c, u) {
      const p = t.indexOf("#"),
        h = p > -1 ? (n.host && document.querySelector("base") ? t : t.slice(p)) + l : Rv() + t + l;
      try {
        e[u ? "replaceState" : "pushState"](c, "", h), (o.value = c);
      } catch (f) {
        console.error(f), n[u ? "replace" : "assign"](h);
      }
    }
    function i(l, c) {
      const u = dt({}, e.state, kl(o.value.back, l, o.value.forward, !0), c, { position: o.value.position });
      s(l, u, !0), (r.value = l);
    }
    function a(l, c) {
      const u = dt({}, o.value, e.state, { forward: l, scroll: Go() });
      s(u.current, u, !0);
      const p = dt({}, kl(r.value, l, null), { position: u.position + 1 }, c);
      s(l, p, !1), (r.value = l);
    }
    return { location: r, state: o, push: a, replace: i };
  }
  function Pv(t) {
    t = kv(t);
    const e = $v(t),
      n = jv(t, e.state, e.location, e.replace);
    function r(s, i = !0) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = dt({ location: "", base: t, go: r, createHref: Av.bind(null, t) }, e, n);
    return (
      Object.defineProperty(o, "location", { enumerable: !0, get: () => e.location.value }),
      Object.defineProperty(o, "state", { enumerable: !0, get: () => e.state.value }),
      o
    );
  }
  function Iv(t) {
    return typeof t == "string" || (t && typeof t == "object");
  }
  function Kh(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const Wh = Symbol("");
  var Sl;
  (function (t) {
    (t[(t.aborted = 4)] = "aborted"), (t[(t.cancelled = 8)] = "cancelled"), (t[(t.duplicated = 16)] = "duplicated");
  })(Sl || (Sl = {}));
  function Hn(t, e) {
    return dt(new Error(), { type: t, [Wh]: !0 }, e);
  }
  function Pe(t, e) {
    return t instanceof Error && Wh in t && (e == null || !!(t.type & e));
  }
  const Al = "[^/]+?",
    Mv = { sensitive: !1, strict: !1, start: !0, end: !0 },
    Lv = /[.+*?^${}()[\]/\\]/g;
  function Dv(t, e) {
    const n = dt({}, Mv, e),
      r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of t) {
      const u = c.length ? [] : [90];
      n.strict && !c.length && (o += "/");
      for (let p = 0; p < c.length; p++) {
        const h = c[p];
        let f = 40 + (n.sensitive ? 0.25 : 0);
        if (h.type === 0) p || (o += "/"), (o += h.value.replace(Lv, "\\$&")), (f += 40);
        else if (h.type === 1) {
          const { value: g, repeatable: m, optional: _, regexp: x } = h;
          s.push({ name: g, repeatable: m, optional: _ });
          const b = x || Al;
          if (b !== Al) {
            f += 10;
            try {
              new RegExp(`(${b})`);
            } catch (k) {
              throw new Error(`Invalid custom RegExp for param "${g}" (${b}): ` + k.message);
            }
          }
          let w = m ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
          p || (w = _ && c.length < 2 ? `(?:/${w})` : "/" + w),
            _ && (w += "?"),
            (o += w),
            (f += 20),
            _ && (f += -8),
            m && (f += -20),
            b === ".*" && (f += -50);
        }
        u.push(f);
      }
      r.push(u);
    }
    if (n.strict && n.end) {
      const c = r.length - 1;
      r[c][r[c].length - 1] += 0.7000000000000001;
    }
    n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");
    function a(c) {
      const u = c.match(i),
        p = {};
      if (!u) return null;
      for (let h = 1; h < u.length; h++) {
        const f = u[h] || "",
          g = s[h - 1];
        p[g.name] = f && g.repeatable ? f.split("/") : f;
      }
      return p;
    }
    function l(c) {
      let u = "",
        p = !1;
      for (const h of t) {
        (!p || !u.endsWith("/")) && (u += "/"), (p = !1);
        for (const f of h)
          if (f.type === 0) u += f.value;
          else if (f.type === 1) {
            const { value: g, repeatable: m, optional: _ } = f,
              x = g in c ? c[g] : "";
            if (de(x) && !m)
              throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
            const b = de(x) ? x.join("/") : x;
            if (!b)
              if (_) h.length < 2 && (u.endsWith("/") ? (u = u.slice(0, -1)) : (p = !0));
              else throw new Error(`Missing required param "${g}"`);
            u += b;
          }
      }
      return u || "/";
    }
    return { re: i, score: r, keys: s, parse: a, stringify: l };
  }
  function zv(t, e) {
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
  function Gh(t, e) {
    let n = 0;
    const r = t.score,
      o = e.score;
    for (; n < r.length && n < o.length; ) {
      const s = zv(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Tl(r)) return 1;
      if (Tl(o)) return -1;
    }
    return o.length - r.length;
  }
  function Tl(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const Nv = { type: 0, value: "" },
    Fv = /[a-zA-Z0-9_]/;
  function Bv(t) {
    if (!t) return [[]];
    if (t === "/") return [[Nv]];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
    function e(f) {
      throw new Error(`ERR (${n})/"${c}": ${f}`);
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
    function p() {
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
    function h() {
      c += l;
    }
    for (; a < t.length; ) {
      if (((l = t[a++]), l === "\\" && n !== 2)) {
        (r = n), (n = 4);
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (c && p(), i()) : l === ":" ? (p(), (n = 1)) : h();
          break;
        case 4:
          h(), (n = r);
          break;
        case 1:
          l === "(" ? (n = 2) : Fv.test(l) ? h() : (p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
          break;
        case 2:
          l === ")" ? (u[u.length - 1] == "\\" ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
          break;
        case 3:
          p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
          break;
        default:
          e("Unknown state");
          break;
      }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), p(), i(), o;
  }
  function Uv(t, e, n) {
    const r = Dv(Bv(t.path), n),
      o = dt(r, { record: t, parent: e, children: [], alias: [] });
    return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
  }
  function Vv(t, e) {
    const n = [],
      r = new Map();
    e = Rl({ strict: !1, end: !0, sensitive: !1 }, e);
    function o(p) {
      return r.get(p);
    }
    function s(p, h, f) {
      const g = !f,
        m = Ol(p);
      m.aliasOf = f && f.record;
      const _ = Rl(e, p),
        x = [m];
      if ("alias" in p) {
        const k = typeof p.alias == "string" ? [p.alias] : p.alias;
        for (const T of k)
          x.push(
            Ol(dt({}, m, { components: f ? f.record.components : m.components, path: T, aliasOf: f ? f.record : m })),
          );
      }
      let b, w;
      for (const k of x) {
        const { path: T } = k;
        if (h && T[0] !== "/") {
          const z = h.record.path,
            V = z[z.length - 1] === "/" ? "" : "/";
          k.path = h.record.path + (T && V + T);
        }
        if (
          ((b = Uv(k, h, _)),
          f ? f.alias.push(b) : ((w = w || b), w !== b && w.alias.push(b), g && p.name && !Cl(b) && i(p.name)),
          Zh(b) && l(b),
          m.children)
        ) {
          const z = m.children;
          for (let V = 0; V < z.length; V++) s(z[V], b, f && f.children[V]);
        }
        f = f || b;
      }
      return w
        ? () => {
            i(w);
          }
        : br;
    }
    function i(p) {
      if (Kh(p)) {
        const h = r.get(p);
        h && (r.delete(p), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
      } else {
        const h = n.indexOf(p);
        h > -1 && (n.splice(h, 1), p.record.name && r.delete(p.record.name), p.children.forEach(i), p.alias.forEach(i));
      }
    }
    function a() {
      return n;
    }
    function l(p) {
      const h = Kv(p, n);
      n.splice(h, 0, p), p.record.name && !Cl(p) && r.set(p.record.name, p);
    }
    function c(p, h) {
      let f,
        g = {},
        m,
        _;
      if ("name" in p && p.name) {
        if (((f = r.get(p.name)), !f)) throw Hn(1, { location: p });
        (_ = f.record.name),
          (g = dt(
            El(
              h.params,
              f.keys
                .filter((w) => !w.optional)
                .concat(f.parent ? f.parent.keys.filter((w) => w.optional) : [])
                .map((w) => w.name),
            ),
            p.params &&
              El(
                p.params,
                f.keys.map((w) => w.name),
              ),
          )),
          (m = f.stringify(g));
      } else if (p.path != null)
        (m = p.path), (f = n.find((w) => w.re.test(m))), f && ((g = f.parse(m)), (_ = f.record.name));
      else {
        if (((f = h.name ? r.get(h.name) : n.find((w) => w.re.test(h.path))), !f))
          throw Hn(1, { location: p, currentLocation: h });
        (_ = f.record.name), (g = dt({}, h.params, p.params)), (m = f.stringify(g));
      }
      const x = [];
      let b = f;
      for (; b; ) x.unshift(b.record), (b = b.parent);
      return { name: _, path: m, params: g, matched: x, meta: qv(x) };
    }
    t.forEach((p) => s(p));
    function u() {
      (n.length = 0), r.clear();
    }
    return { addRoute: s, resolve: c, removeRoute: i, clearRoutes: u, getRoutes: a, getRecordMatcher: o };
  }
  function El(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function Ol(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: Hv(t),
      children: t.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && { default: t.component },
    };
    return Object.defineProperty(e, "mods", { value: {} }), e;
  }
  function Hv(t) {
    const e = {},
      n = t.props || !1;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function Cl(t) {
    for (; t; ) {
      if (t.record.aliasOf) return !0;
      t = t.parent;
    }
    return !1;
  }
  function qv(t) {
    return t.reduce((e, n) => dt(e, n.meta), {});
  }
  function Rl(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function Kv(t, e) {
    let n = 0,
      r = e.length;
    for (; n !== r; ) {
      const s = (n + r) >> 1;
      Gh(t, e[s]) < 0 ? (r = s) : (n = s + 1);
    }
    const o = Wv(t);
    return o && (r = e.lastIndexOf(o, r - 1)), r;
  }
  function Wv(t) {
    let e = t;
    for (; (e = e.parent); ) if (Zh(e) && Gh(t, e) === 0) return e;
  }
  function Zh({ record: t }) {
    return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect);
  }
  function Gv(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(Fh, " "),
        i = s.indexOf("="),
        a = jr(i < 0 ? s : s.slice(0, i)),
        l = i < 0 ? null : jr(s.slice(i + 1));
      if (a in e) {
        let c = e[a];
        de(c) || (c = e[a] = [c]), c.push(l);
      } else e[a] = l;
    }
    return e;
  }
  function jl(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (((n = dv(n)), r == null)) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (de(r) ? r.map((s) => s && xi(s)) : [r && xi(r)]).forEach((s) => {
        s !== void 0 && ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
      });
    }
    return e;
  }
  function Zv(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = de(r) ? r.map((o) => (o == null ? null : "" + o)) : r == null ? r : "" + r);
    }
    return e;
  }
  const Jv = Symbol(""),
    $l = Symbol(""),
    Zo = Symbol(""),
    ia = Symbol(""),
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
  function Ze(t, e, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
      new Promise((a, l) => {
        const c = (h) => {
            h === !1
              ? l(Hn(4, { from: n, to: e }))
              : h instanceof Error
                ? l(h)
                : Iv(h)
                  ? l(Hn(2, { from: e, to: h }))
                  : (i && r.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
          },
          u = s(() => t.call(r && r.instances[o], e, n, c));
        let p = Promise.resolve(u);
        t.length < 3 && (p = p.then(c)), p.catch((h) => l(h));
      });
  }
  function xs(t, e, n, r, o = (s) => s()) {
    const s = [];
    for (const i of t)
      for (const a in i.components) {
        let l = i.components[a];
        if (!(e !== "beforeRouteEnter" && !i.instances[a]))
          if (zh(l)) {
            const u = (l.__vccOpts || l)[e];
            u && s.push(Ze(u, n, r, i, a, o));
          } else {
            let c = l();
            s.push(() =>
              c.then((u) => {
                if (!u) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                const p = rv(u) ? u.default : u;
                (i.mods[a] = u), (i.components[a] = p);
                const f = (p.__vccOpts || p)[e];
                return f && Ze(f, n, r, i, a, o)();
              }),
            );
          }
      }
    return s;
  }
  function Pl(t) {
    const e = ue(Zo),
      n = ue(ia),
      r = rt(() => {
        const l = F(t.to);
        return e.resolve(l);
      }),
      o = rt(() => {
        const { matched: l } = r.value,
          { length: c } = l,
          u = l[c - 1],
          p = n.matched;
        if (!u || !p.length) return -1;
        const h = p.findIndex(Vn.bind(null, u));
        if (h > -1) return h;
        const f = Il(l[c - 2]);
        return c > 1 && Il(u) === f && p[p.length - 1].path !== f ? p.findIndex(Vn.bind(null, l[c - 2])) : h;
      }),
      s = rt(() => o.value > -1 && eb(n.params, r.value.params)),
      i = rt(() => o.value > -1 && o.value === n.matched.length - 1 && Hh(n.params, r.value.params));
    function a(l = {}) {
      if (tb(l)) {
        const c = e[F(t.replace) ? "replace" : "push"](F(t.to)).catch(br);
        return (
          t.viewTransition &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            document.startViewTransition(() => c),
          c
        );
      }
      return Promise.resolve();
    }
    return { route: r, href: rt(() => r.value.href), isActive: s, isExactActive: i, navigate: a };
  }
  function Qv(t) {
    return t.length === 1 ? t[0] : t;
  }
  const Xv = Mt({
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
      useLink: Pl,
      setup(t, { slots: e }) {
        const n = Gn(Pl(t)),
          { options: r } = ue(Zo),
          o = rt(() => ({
            [Ml(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Ml(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
          }));
        return () => {
          const s = e.default && Qv(e.default(n));
          return t.custom
            ? s
            : jh(
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
    Yv = Xv;
  function tb(t) {
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
  function eb(t, e) {
    for (const n in e) {
      const r = e[n],
        o = t[n];
      if (typeof r == "string") {
        if (r !== o) return !1;
      } else if (!de(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1;
    }
    return !0;
  }
  function Il(t) {
    return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
  }
  const Ml = (t, e, n) => t ?? e ?? n,
    nb = Mt({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(t, { attrs: e, slots: n }) {
        const r = ue(Si),
          o = rt(() => t.route || r.value),
          s = ue($l, 0),
          i = rt(() => {
            let c = F(s);
            const { matched: u } = o.value;
            let p;
            for (; (p = u[c]) && !p.components; ) c++;
            return c;
          }),
          a = rt(() => o.value.matched[i.value]);
        ro(
          $l,
          rt(() => i.value + 1),
        ),
          ro(Jv, a),
          ro(Si, o);
        const l = ut();
        return (
          Se(
            () => [l.value, a.value, t.name],
            ([c, u, p], [h, f, g]) => {
              u &&
                ((u.instances[p] = c),
                f &&
                  f !== u &&
                  c &&
                  c === h &&
                  (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
                  u.updateGuards.size || (u.updateGuards = f.updateGuards))),
                c && u && (!f || !Vn(u, f) || !h) && (u.enterCallbacks[p] || []).forEach((m) => m(c));
            },
            { flush: "post" },
          ),
          () => {
            const c = o.value,
              u = t.name,
              p = a.value,
              h = p && p.components[u];
            if (!h) return Ll(n.default, { Component: h, route: c });
            const f = p.props[u],
              g = f ? (f === !0 ? c.params : typeof f == "function" ? f(c) : f) : null,
              _ = jh(
                h,
                dt({}, g, e, {
                  onVnodeUnmounted: (x) => {
                    x.component.isUnmounted && (p.instances[u] = null);
                  },
                  ref: l,
                }),
              );
            return Ll(n.default, { Component: _, route: c }) || _;
          }
        );
      },
    });
  function Ll(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const Jh = nb;
  function rb(t) {
    const e = Vv(t.routes, t),
      n = t.parseQuery || Gv,
      r = t.stringifyQuery || jl,
      o = t.history,
      s = rr(),
      i = rr(),
      a = rr(),
      l = Kf(qe);
    let c = qe;
    Mn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = _s.bind(null, (O) => "" + O),
      p = _s.bind(null, mv),
      h = _s.bind(null, jr);
    function f(O, G) {
      let U, Q;
      return Kh(O) ? ((U = e.getRecordMatcher(O)), (Q = G)) : (Q = O), e.addRoute(Q, U);
    }
    function g(O) {
      const G = e.getRecordMatcher(O);
      G && e.removeRoute(G);
    }
    function m() {
      return e.getRoutes().map((O) => O.record);
    }
    function _(O) {
      return !!e.getRecordMatcher(O);
    }
    function x(O, G) {
      if (((G = dt({}, G || l.value)), typeof O == "string")) {
        const A = ws(n, O, G.path),
          E = e.resolve({ path: A.path }, G),
          $ = o.createHref(A.fullPath);
        return dt(A, E, { params: h(E.params), hash: jr(A.hash), redirectedFrom: void 0, href: $ });
      }
      let U;
      if (O.path != null) U = dt({}, O, { path: ws(n, O.path, G.path).path });
      else {
        const A = dt({}, O.params);
        for (const E in A) A[E] == null && delete A[E];
        (U = dt({}, O, { params: p(A) })), (G.params = p(G.params));
      }
      const Q = e.resolve(U, G),
        xt = O.hash || "";
      Q.params = u(h(Q.params));
      const v = yv(r, dt({}, O, { hash: pv(xt), path: Q.path })),
        y = o.createHref(v);
      return dt({ fullPath: v, hash: xt, query: r === jl ? Zv(O.query) : O.query || {} }, Q, {
        redirectedFrom: void 0,
        href: y,
      });
    }
    function b(O) {
      return typeof O == "string" ? ws(n, O, l.value.path) : dt({}, O);
    }
    function w(O, G) {
      if (c !== O) return Hn(8, { from: G, to: O });
    }
    function k(O) {
      return V(O);
    }
    function T(O) {
      return k(dt(b(O), { replace: !0 }));
    }
    function z(O) {
      const G = O.matched[O.matched.length - 1];
      if (G && G.redirect) {
        const { redirect: U } = G;
        let Q = typeof U == "function" ? U(O) : U;
        return (
          typeof Q == "string" &&
            ((Q = Q.includes("?") || Q.includes("#") ? (Q = b(Q)) : { path: Q }), (Q.params = {})),
          dt({ query: O.query, hash: O.hash, params: Q.path != null ? {} : O.params }, Q)
        );
      }
    }
    function V(O, G) {
      const U = (c = x(O)),
        Q = l.value,
        xt = O.state,
        v = O.force,
        y = O.replace === !0,
        A = z(U);
      if (A)
        return V(dt(b(A), { state: typeof A == "object" ? dt({}, xt, A.state) : xt, force: v, replace: y }), G || U);
      const E = U;
      E.redirectedFrom = G;
      let $;
      return (
        !v && _v(r, Q, U) && (($ = Hn(16, { to: E, from: Q })), Gt(Q, Q, !0, !1)),
        ($ ? Promise.resolve($) : I(E, Q))
          .catch((R) => (Pe(R) ? (Pe(R, 2) ? R : $t(R)) : at(R, E, Q)))
          .then((R) => {
            if (R) {
              if (Pe(R, 2))
                return V(
                  dt({ replace: y }, b(R.to), {
                    state: typeof R.to == "object" ? dt({}, xt, R.to.state) : xt,
                    force: v,
                  }),
                  G || E,
                );
            } else R = S(E, Q, !0, y, xt);
            return d(E, Q, R), R;
          })
      );
    }
    function H(O, G) {
      const U = w(O, G);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function X(O) {
      const G = je.values().next().value;
      return G && typeof G.runWithContext == "function" ? G.runWithContext(O) : O();
    }
    function I(O, G) {
      let U;
      const [Q, xt, v] = ob(O, G);
      U = xs(Q.reverse(), "beforeRouteLeave", O, G);
      for (const A of Q)
        A.leaveGuards.forEach((E) => {
          U.push(Ze(E, O, G));
        });
      const y = H.bind(null, O, G);
      return (
        U.push(y),
        ie(U)
          .then(() => {
            U = [];
            for (const A of s.list()) U.push(Ze(A, O, G));
            return U.push(y), ie(U);
          })
          .then(() => {
            U = xs(xt, "beforeRouteUpdate", O, G);
            for (const A of xt)
              A.updateGuards.forEach((E) => {
                U.push(Ze(E, O, G));
              });
            return U.push(y), ie(U);
          })
          .then(() => {
            U = [];
            for (const A of v)
              if (A.beforeEnter)
                if (de(A.beforeEnter)) for (const E of A.beforeEnter) U.push(Ze(E, O, G));
                else U.push(Ze(A.beforeEnter, O, G));
            return U.push(y), ie(U);
          })
          .then(
            () => (
              O.matched.forEach((A) => (A.enterCallbacks = {})),
              (U = xs(v, "beforeRouteEnter", O, G, X)),
              U.push(y),
              ie(U)
            ),
          )
          .then(() => {
            U = [];
            for (const A of i.list()) U.push(Ze(A, O, G));
            return U.push(y), ie(U);
          })
          .catch((A) => (Pe(A, 8) ? A : Promise.reject(A)))
      );
    }
    function d(O, G, U) {
      a.list().forEach((Q) => X(() => Q(O, G, U)));
    }
    function S(O, G, U, Q, xt) {
      const v = w(O, G);
      if (v) return v;
      const y = G === qe,
        A = Mn ? history.state : {};
      U && (Q || y ? o.replace(O.fullPath, dt({ scroll: y && A && A.scroll }, xt)) : o.push(O.fullPath, xt)),
        (l.value = O),
        Gt(O, G, U, y),
        $t();
    }
    let C;
    function J() {
      C ||
        (C = o.listen((O, G, U) => {
          if (!jn.listening) return;
          const Q = x(O),
            xt = z(Q);
          if (xt) {
            V(dt(xt, { replace: !0, force: !0 }), Q).catch(br);
            return;
          }
          c = Q;
          const v = l.value;
          Mn && Ov(xl(v.fullPath, U.delta), Go()),
            I(Q, v)
              .catch((y) =>
                Pe(y, 12)
                  ? y
                  : Pe(y, 2)
                    ? (V(dt(b(y.to), { force: !0 }), Q)
                        .then((A) => {
                          Pe(A, 20) && !U.delta && U.type === $r.pop && o.go(-1, !1);
                        })
                        .catch(br),
                      Promise.reject())
                    : (U.delta && o.go(-U.delta, !1), at(y, Q, v)),
              )
              .then((y) => {
                (y = y || S(Q, v, !1)),
                  y && (U.delta && !Pe(y, 8) ? o.go(-U.delta, !1) : U.type === $r.pop && Pe(y, 20) && o.go(-1, !1)),
                  d(Q, v, y);
              })
              .catch(br);
        }));
    }
    let et = rr(),
      K = rr(),
      q;
    function at(O, G, U) {
      $t(O);
      const Q = K.list();
      return Q.length ? Q.forEach((xt) => xt(O, G, U)) : console.error(O), Promise.reject(O);
    }
    function Ut() {
      return q && l.value !== qe
        ? Promise.resolve()
        : new Promise((O, G) => {
            et.add([O, G]);
          });
    }
    function $t(O) {
      return q || ((q = !O), J(), et.list().forEach(([G, U]) => (O ? U(O) : G())), et.reset()), O;
    }
    function Gt(O, G, U, Q) {
      const { scrollBehavior: xt } = t;
      if (!Mn || !xt) return Promise.resolve();
      const v = (!U && Cv(xl(O.fullPath, 0))) || ((Q || !U) && history.state && history.state.scroll) || null;
      return No()
        .then(() => xt(O, G, v))
        .then((y) => y && Ev(y))
        .catch((y) => at(y, O, G));
    }
    const wt = (O) => o.go(O);
    let qt;
    const je = new Set(),
      jn = {
        currentRoute: l,
        listening: !0,
        addRoute: f,
        removeRoute: g,
        clearRoutes: e.clearRoutes,
        hasRoute: _,
        getRoutes: m,
        resolve: x,
        options: t,
        push: k,
        replace: T,
        go: wt,
        back: () => wt(-1),
        forward: () => wt(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: K.add,
        isReady: Ut,
        install(O) {
          const G = this;
          O.component("RouterLink", Yv),
            O.component("RouterView", Jh),
            (O.config.globalProperties.$router = G),
            Object.defineProperty(O.config.globalProperties, "$route", { enumerable: !0, get: () => F(l) }),
            Mn && !qt && l.value === qe && ((qt = !0), k(o.location).catch((xt) => {}));
          const U = {};
          for (const xt in qe) Object.defineProperty(U, xt, { get: () => l.value[xt], enumerable: !0 });
          O.provide(Zo, G), O.provide(ia, Hf(U)), O.provide(Si, l);
          const Q = O.unmount;
          je.add(O),
            (O.unmount = function () {
              je.delete(O), je.size < 1 && ((c = qe), C && C(), (C = null), (l.value = qe), (qt = !1), (q = !1)), Q();
            });
        },
      };
    function ie(O) {
      return O.reduce((G, U) => G.then(() => X(U)), Promise.resolve());
    }
    return jn;
  }
  function ob(t, e) {
    const n = [],
      r = [],
      o = [],
      s = Math.max(e.matched.length, t.matched.length);
    for (let i = 0; i < s; i++) {
      const a = e.matched[i];
      a && (t.matched.find((c) => Vn(c, a)) ? r.push(a) : n.push(a));
      const l = t.matched[i];
      l && (e.matched.find((c) => Vn(c, l)) || o.push(l));
    }
    return [n, r, o];
  }
  function Jo() {
    return ue(Zo);
  }
  function Qo(t) {
    return ue(ia);
  }
  const Dl = 1e3 * 60,
    sb = Wo("alive", () => {
      const t = ut(0);
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
        }, Dl),
        console.log("Ping store created, timeout: ", Dl),
        { isAlive: t }
      );
    }),
    ib = Mt({
      __name: "App",
      setup(t) {
        return sb(), (e, n) => (P(), L("main", null, [st(F(Jh))]));
      },
    });
  var ab = Object.defineProperty,
    lb = (t, e, n) => (e in t ? ab(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    ct = (t, e, n) => (lb(t, typeof e != "symbol" ? e + "" : e, n), n),
    Vt = [];
  for (var ks = 0; ks < 256; ++ks) Vt.push((ks + 256).toString(16).slice(1));
  function cb(t, e = 0) {
    return (
      Vt[t[e + 0]] +
      Vt[t[e + 1]] +
      Vt[t[e + 2]] +
      Vt[t[e + 3]] +
      "-" +
      Vt[t[e + 4]] +
      Vt[t[e + 5]] +
      "-" +
      Vt[t[e + 6]] +
      Vt[t[e + 7]] +
      "-" +
      Vt[t[e + 8]] +
      Vt[t[e + 9]] +
      "-" +
      Vt[t[e + 10]] +
      Vt[t[e + 11]] +
      Vt[t[e + 12]] +
      Vt[t[e + 13]] +
      Vt[t[e + 14]] +
      Vt[t[e + 15]]
    ).toLowerCase();
  }
  var Wr,
    ub = new Uint8Array(16);
  function fb() {
    if (!Wr && ((Wr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Wr))
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return Wr(ub);
  }
  var hb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  const zl = { randomUUID: hb };
  function pb(t, e, n) {
    if (zl.randomUUID && !t) return zl.randomUUID();
    t = t || {};
    var r = t.random || (t.rng || fb)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), cb(r);
  }
  function db(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var gb = function () {},
    mb = gb(),
    xn = function (t) {
      return t !== mb && t !== null;
    },
    vb = xn,
    bb = Array.prototype.forEach,
    yb = Object.create,
    _b = function (t, e) {
      var n;
      for (n in t) e[n] = t[n];
    },
    Qh = function (t) {
      var e = yb(null);
      return (
        bb.call(arguments, function (n) {
          vb(n) && _b(Object(n), e);
        }),
        e
      );
    },
    wb = function () {
      var t = Math.sign;
      return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
    },
    Nl,
    Fl;
  function xb() {
    return (
      Fl ||
        ((Fl = 1),
        (Nl = function (t) {
          return (t = Number(t)), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
        })),
      Nl
    );
  }
  var kb = wb() ? Math.sign : xb(),
    Sb = kb,
    Ab = Math.abs,
    Tb = Math.floor,
    Eb = function (t) {
      return isNaN(t) ? 0 : ((t = Number(t)), t === 0 || !isFinite(t) ? t : Sb(t) * Tb(Ab(t)));
    },
    Ob = Eb,
    Cb = Math.max,
    kn = function (t) {
      return Cb(0, Ob(t));
    },
    Rb = kn,
    Xh = function (t, e, n) {
      var r;
      return isNaN(t) ? ((r = e), r >= 0 ? (n && r ? r - 1 : r) : 1) : t === !1 ? !1 : Rb(t);
    },
    on = function (t) {
      if (typeof t != "function") throw new TypeError(t + " is not a function");
      return t;
    },
    jb = xn,
    Zn = function (t) {
      if (!jb(t)) throw new TypeError("Cannot use null or undefined");
      return t;
    },
    $b = on,
    Pb = Zn,
    Ib = Function.prototype.bind,
    Bl = Function.prototype.call,
    Mb = Object.keys,
    Lb = Object.prototype.propertyIsEnumerable,
    Db = function (t, e) {
      return function (n, r) {
        var o,
          s = arguments[2],
          i = arguments[3];
        return (
          (n = Object(Pb(n))),
          $b(r),
          (o = Mb(n)),
          i && o.sort(typeof i == "function" ? Ib.call(i, n) : void 0),
          typeof t != "function" && (t = o[t]),
          Bl.call(t, o, function (a, l) {
            return Lb.call(n, a) ? Bl.call(r, s, n[a], a, n, l) : e;
          })
        );
      };
    },
    Xo = Db("forEach"),
    Sn = {},
    Yh = { exports: {} },
    zb = function () {
      var t = Object.assign,
        e;
      return typeof t != "function"
        ? !1
        : ((e = { foo: "raz" }), t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
    },
    Ul,
    Vl;
  function Nb() {
    return (
      Vl ||
        ((Vl = 1),
        (Ul = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        })),
      Ul
    );
  }
  var Ss, Hl;
  function Fb() {
    if (Hl) return Ss;
    Hl = 1;
    var t = xn,
      e = Object.keys;
    return (
      (Ss = function (n) {
        return e(t(n) ? Object(n) : n);
      }),
      Ss
    );
  }
  var ql, Kl;
  function Bb() {
    return Kl || ((Kl = 1), (ql = Nb()() ? Object.keys : Fb())), ql;
  }
  var As, Wl;
  function Ub() {
    if (Wl) return As;
    Wl = 1;
    var t = Bb(),
      e = Zn,
      n = Math.max;
    return (
      (As = function (r, o) {
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
      As
    );
  }
  var tp = zb() ? Object.assign : Ub(),
    Vb = xn,
    Hb = { function: !0, object: !0 },
    qb = function (t) {
      return (Vb(t) && Hb[typeof t]) || !1;
    };
  (function (t) {
    var e = tp,
      n = qb,
      r = xn,
      o = Error.captureStackTrace;
    t.exports = function (s) {
      var i = new Error(s),
        a = arguments[1],
        l = arguments[2];
      return r(l) || (n(a) && ((l = a), (a = null))), r(l) && e(i, l), r(a) && (i.code = a), o && o(i, t.exports), i;
    };
  })(Yh);
  var Kb = Yh.exports,
    Ai = { exports: {} },
    Ts,
    Gl;
  function ep() {
    if (Gl) return Ts;
    Gl = 1;
    var t = Zn,
      e = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      r = Object.getOwnPropertyNames,
      o = Object.getOwnPropertySymbols;
    return (
      (Ts = function (s, i) {
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
      Ts
    );
  }
  var Zl = kn,
    np = function (t, e) {
      return e;
    },
    Es,
    Jl,
    Ql,
    Xl;
  try {
    Object.defineProperty(np, "length", { configurable: !0, writable: !1, enumerable: !1, value: 1 });
  } catch {}
  np.length === 1
    ? ((Es = { configurable: !0, writable: !1, enumerable: !1 }),
      (Jl = Object.defineProperty),
      (Ai.exports = function (t, e) {
        return (e = Zl(e)), t.length === e ? t : ((Es.value = e), Jl(t, "length", Es));
      }))
    : ((Xl = ep()),
      (Ql = (function () {
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
        if (((e = Zl(e)), t.length === e)) return t;
        n = Ql(e)(t);
        try {
          Xl(n, t);
        } catch {}
        return n;
      }));
  var rp = Ai.exports,
    op = { exports: {} },
    Wb = void 0,
    sp = function (t) {
      return t !== Wb && t !== null;
    },
    Gb = sp,
    Zb = { object: !0, function: !0, undefined: !0 },
    Jb = function (t) {
      return Gb(t) ? hasOwnProperty.call(Zb, typeof t) : !1;
    },
    Qb = Jb,
    Xb = function (t) {
      if (!Qb(t)) return !1;
      try {
        return t.constructor ? t.constructor.prototype === t : !1;
      } catch {
        return !1;
      }
    },
    Yb = Xb,
    ty = function (t) {
      if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
      try {
        if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
      } catch {
        return !1;
      }
      return !Yb(t);
    },
    ey = ty,
    ny = /^\s*class[\s{/}]/,
    ry = Function.prototype.toString,
    oy = function (t) {
      return !(!ey(t) || ny.test(ry.call(t)));
    },
    Os = "razdwatrzy",
    sy = function () {
      return typeof Os.contains != "function" ? !1 : Os.contains("dwa") === !0 && Os.contains("foo") === !1;
    },
    Cs,
    Yl;
  function iy() {
    if (Yl) return Cs;
    Yl = 1;
    var t = String.prototype.indexOf;
    return (
      (Cs = function (e) {
        return t.call(this, e, arguments[1]) > -1;
      }),
      Cs
    );
  }
  var ay = sy() ? String.prototype.contains : iy(),
    io = sp,
    tc = oy,
    ip = tp,
    ap = Qh,
    _r = ay,
    ly = (op.exports = function (t, e) {
      var n, r, o, s, i;
      return (
        arguments.length < 2 || typeof t != "string" ? ((s = e), (e = t), (t = null)) : (s = arguments[2]),
        io(t) ? ((n = _r.call(t, "c")), (r = _r.call(t, "e")), (o = _r.call(t, "w"))) : ((n = o = !0), (r = !1)),
        (i = { value: e, configurable: n, enumerable: r, writable: o }),
        s ? ip(ap(s), i) : i
      );
    });
  ly.gs = function (t, e, n) {
    var r, o, s, i;
    return (
      typeof t != "string" ? ((s = n), (n = e), (e = t), (t = null)) : (s = arguments[3]),
      io(e)
        ? tc(e)
          ? io(n)
            ? tc(n) || ((s = n), (n = void 0))
            : (n = void 0)
          : ((s = e), (e = n = void 0))
        : (e = void 0),
      io(t) ? ((r = _r.call(t, "c")), (o = _r.call(t, "e"))) : ((r = !0), (o = !1)),
      (i = { get: e, set: n, configurable: r, enumerable: o }),
      s ? ip(ap(s), i) : i
    );
  };
  var An = op.exports,
    Ti = { exports: {} };
  (function (t, e) {
    var n = An,
      r = on,
      o = Function.prototype.apply,
      s = Function.prototype.call,
      i = Object.create,
      a = Object.defineProperty,
      l = Object.defineProperties,
      c = Object.prototype.hasOwnProperty,
      u = { configurable: !0, enumerable: !1, writable: !0 },
      p,
      h,
      f,
      g,
      m,
      _,
      x;
    (p = function (b, w) {
      var k;
      return (
        r(w),
        c.call(this, "__ee__") ? (k = this.__ee__) : ((k = u.value = i(null)), a(this, "__ee__", u), (u.value = null)),
        k[b] ? (typeof k[b] == "object" ? k[b].push(w) : (k[b] = [k[b], w])) : (k[b] = w),
        this
      );
    }),
      (h = function (b, w) {
        var k, T;
        return (
          r(w),
          (T = this),
          p.call(
            this,
            b,
            (k = function () {
              f.call(T, b, k), o.call(w, this, arguments);
            }),
          ),
          (k.__eeOnceListener__ = w),
          this
        );
      }),
      (f = function (b, w) {
        var k, T, z, V;
        if ((r(w), !c.call(this, "__ee__"))) return this;
        if (((k = this.__ee__), !k[b])) return this;
        if (((T = k[b]), typeof T == "object"))
          for (V = 0; (z = T[V]); ++V)
            (z === w || z.__eeOnceListener__ === w) && (T.length === 2 ? (k[b] = T[V ? 0 : 1]) : T.splice(V, 1));
        else (T === w || T.__eeOnceListener__ === w) && delete k[b];
        return this;
      }),
      (g = function (b) {
        var w, k, T, z, V;
        if (c.call(this, "__ee__") && ((z = this.__ee__[b]), !!z))
          if (typeof z == "object") {
            for (k = arguments.length, V = new Array(k - 1), w = 1; w < k; ++w) V[w - 1] = arguments[w];
            for (z = z.slice(), w = 0; (T = z[w]); ++w) o.call(T, this, V);
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
                for (k = arguments.length, V = new Array(k - 1), w = 1; w < k; ++w) V[w - 1] = arguments[w];
                o.call(z, this, V);
            }
      }),
      (m = { on: p, once: h, off: f, emit: g }),
      (_ = { on: n(p), once: n(h), off: n(f), emit: n(g) }),
      (x = l({}, _)),
      (t.exports = e =
        function (b) {
          return b == null ? i(x) : l(Object(b), _);
        }),
      (e.methods = m);
  })(Ti, Ti.exports);
  var cy = Ti.exports,
    ec,
    nc;
  function uy() {
    return (
      nc ||
        ((nc = 1),
        (ec = function () {
          var t = Array.from,
            e,
            n;
          return typeof t != "function" ? !1 : ((e = ["raz", "dwa"]), (n = t(e)), !!(n && n !== e && n[1] === "dwa"));
        })),
      ec
    );
  }
  var rc, oc;
  function fy() {
    return (
      oc ||
        ((oc = 1),
        (rc = function () {
          return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
        })),
      rc
    );
  }
  var Rs, sc;
  function hy() {
    if (sc) return Rs;
    sc = 1;
    var t = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    return (
      (Rs = (function () {
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
      Rs
    );
  }
  var ic, ac;
  function Yo() {
    return ac || ((ac = 1), (ic = fy()() ? globalThis : hy())), ic;
  }
  var js, lc;
  function py() {
    if (lc) return js;
    lc = 1;
    var t = Yo(),
      e = { object: !0, symbol: !0 };
    return (
      (js = function () {
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
      js
    );
  }
  var cc, uc;
  function dy() {
    return (
      uc ||
        ((uc = 1),
        (cc = function (t) {
          return t
            ? typeof t == "symbol"
              ? !0
              : !t.constructor || t.constructor.name !== "Symbol"
                ? !1
                : t[t.constructor.toStringTag] === "Symbol"
            : !1;
        })),
      cc
    );
  }
  var $s, fc;
  function lp() {
    if (fc) return $s;
    fc = 1;
    var t = dy();
    return (
      ($s = function (e) {
        if (!t(e)) throw new TypeError(e + " is not a symbol");
        return e;
      }),
      $s
    );
  }
  var Ps, hc;
  function gy() {
    if (hc) return Ps;
    hc = 1;
    var t = An,
      e = Object.create,
      n = Object.defineProperty,
      r = Object.prototype,
      o = e(null);
    return (
      (Ps = function (s) {
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
      Ps
    );
  }
  var Is, pc;
  function my() {
    if (pc) return Is;
    pc = 1;
    var t = An,
      e = Yo().Symbol;
    return (
      (Is = function (n) {
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
      Is
    );
  }
  var Ms, dc;
  function vy() {
    if (dc) return Ms;
    dc = 1;
    var t = An,
      e = lp(),
      n = Object.create(null);
    return (
      (Ms = function (r) {
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
      Ms
    );
  }
  var Ls, gc;
  function by() {
    if (gc) return Ls;
    gc = 1;
    var t = An,
      e = lp(),
      n = Yo().Symbol,
      r = gy(),
      o = my(),
      s = vy(),
      i = Object.create,
      a = Object.defineProperties,
      l = Object.defineProperty,
      c,
      u,
      p;
    if (typeof n == "function")
      try {
        String(n()), (p = !0);
      } catch {}
    else n = null;
    return (
      (u = function (h) {
        if (this instanceof u) throw new TypeError("Symbol is not a constructor");
        return c(h);
      }),
      (Ls = c =
        function h(f) {
          var g;
          if (this instanceof h) throw new TypeError("Symbol is not a constructor");
          return p
            ? n(f)
            : ((g = i(u.prototype)),
              (f = f === void 0 ? "" : String(f)),
              a(g, { __description__: t("", f), __name__: t("", r(f)) }));
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
          var h = e(this);
          return typeof h == "symbol" ? h : h.toString();
        }),
      ),
      l(c.prototype, c.toStringTag, t("c", "Symbol")),
      l(u.prototype, c.toStringTag, t("c", c.prototype[c.toStringTag])),
      l(u.prototype, c.toPrimitive, t("c", c.prototype[c.toPrimitive])),
      Ls
    );
  }
  var mc, vc;
  function yy() {
    return vc || ((vc = 1), (mc = py()() ? Yo().Symbol : by())), mc;
  }
  var Ds, bc;
  function _y() {
    if (bc) return Ds;
    bc = 1;
    var t = Object.prototype.toString,
      e = t.call(
        (function () {
          return arguments;
        })(),
      );
    return (
      (Ds = function (n) {
        return t.call(n) === e;
      }),
      Ds
    );
  }
  var zs, yc;
  function wy() {
    if (yc) return zs;
    yc = 1;
    var t = Object.prototype.toString,
      e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    return (
      (zs = function (n) {
        return typeof n == "function" && e(t.call(n));
      }),
      zs
    );
  }
  var Ns, _c;
  function xy() {
    if (_c) return Ns;
    _c = 1;
    var t = Object.prototype.toString,
      e = t.call("");
    return (
      (Ns = function (n) {
        return typeof n == "string" || (n && typeof n == "object" && (n instanceof String || t.call(n) === e)) || !1;
      }),
      Ns
    );
  }
  var Fs, wc;
  function ky() {
    if (wc) return Fs;
    wc = 1;
    var t = yy().iterator,
      e = _y(),
      n = wy(),
      r = kn,
      o = on,
      s = Zn,
      i = xn,
      a = xy(),
      l = Array.isArray,
      c = Function.prototype.call,
      u = { configurable: !0, enumerable: !0, writable: !0, value: null },
      p = Object.defineProperty;
    return (
      (Fs = function (h) {
        var f = arguments[1],
          g = arguments[2],
          m,
          _,
          x,
          b,
          w,
          k,
          T,
          z,
          V,
          H;
        if (((h = Object(s(h))), i(f) && o(f), !this || this === Array || !n(this))) {
          if (!f) {
            if (e(h)) return (w = h.length), w !== 1 ? Array.apply(null, h) : ((b = new Array(1)), (b[0] = h[0]), b);
            if (l(h)) {
              for (b = new Array((w = h.length)), _ = 0; _ < w; ++_) b[_] = h[_];
              return b;
            }
          }
          b = [];
        } else m = this;
        if (!l(h)) {
          if ((V = h[t]) !== void 0) {
            for (T = o(V).call(h), m && (b = new m()), z = T.next(), _ = 0; !z.done; )
              (H = f ? c.call(f, g, z.value, _) : z.value),
                m ? ((u.value = H), p(b, _, u)) : (b[_] = H),
                (z = T.next()),
                ++_;
            w = _;
          } else if (a(h)) {
            for (w = h.length, m && (b = new m()), _ = 0, x = 0; _ < w; ++_)
              (H = h[_]),
                _ + 1 < w && ((k = H.charCodeAt(0)), k >= 55296 && k <= 56319 && (H += h[++_])),
                (H = f ? c.call(f, g, H, x) : H),
                m ? ((u.value = H), p(b, x, u)) : (b[x] = H),
                ++x;
            w = x;
          }
        }
        if (w === void 0)
          for (w = r(h.length), m && (b = new m(w)), _ = 0; _ < w; ++_)
            (H = f ? c.call(f, g, h[_], _) : h[_]), m ? ((u.value = H), p(b, _, u)) : (b[_] = H);
        return m && ((u.value = null), (b.length = w)), b;
      }),
      Fs
    );
  }
  var xc, kc;
  function aa() {
    return kc || ((kc = 1), (xc = uy()() ? Array.from : ky())), xc;
  }
  var Sy = aa(),
    Ay = Array.isArray,
    Ty = function (t) {
      return Ay(t) ? t : Sy(t);
    },
    Ey = Ty,
    Oy = xn,
    Cy = on,
    Ry = Array.prototype.slice,
    cp;
  cp = function (t) {
    return this.map(function (e, n) {
      return e ? e(t[n]) : t[n];
    }).concat(Ry.call(t, this.length));
  };
  var jy = function (t) {
      return (
        (t = Ey(t)),
        t.forEach(function (e) {
          Oy(e) && Cy(e);
        }),
        cp.bind(t)
      );
    },
    Gr = on,
    $y = function (t) {
      var e;
      return typeof t == "function"
        ? { set: t, get: t }
        : ((e = { get: Gr(t.get) }),
          t.set !== void 0
            ? ((e.set = Gr(t.set)), t.delete && (e.delete = Gr(t.delete)), t.clear && (e.clear = Gr(t.clear)), e)
            : ((e.set = e.get), e));
    },
    Zr = Kb,
    Jr = rp,
    or = An,
    up = cy.methods,
    Py = jy,
    Iy = $y,
    Bs = Function.prototype.apply,
    Us = Function.prototype.call,
    Sc = Object.create,
    My = Object.defineProperties,
    Ly = up.on,
    Dy = up.emit,
    zy = function (t, e, n) {
      var r = Sc(null),
        o,
        s,
        i,
        a,
        l,
        c,
        u,
        p,
        h,
        f,
        g,
        m,
        _,
        x,
        b;
      return (
        e !== !1 ? (s = e) : isNaN(t.length) ? (s = 1) : (s = t.length),
        n.normalizer && ((f = Iy(n.normalizer)), (i = f.get), (a = f.set), (l = f.delete), (c = f.clear)),
        n.resolvers != null && (b = Py(n.resolvers)),
        i
          ? (x = Jr(function (w) {
              var k,
                T,
                z = arguments;
              if ((b && (z = b(z)), (k = i(z)), k !== null && hasOwnProperty.call(r, k)))
                return g && o.emit("get", k, z, this), r[k];
              if ((z.length === 1 ? (T = Us.call(t, this, z[0])) : (T = Bs.call(t, this, z)), k === null)) {
                if (((k = i(z)), k !== null)) throw Zr("Circular invocation", "CIRCULAR_INVOCATION");
                k = a(z);
              } else if (hasOwnProperty.call(r, k)) throw Zr("Circular invocation", "CIRCULAR_INVOCATION");
              return (r[k] = T), m && o.emit("set", k, null, T), T;
            }, s))
          : e === 0
            ? (x = function () {
                var w;
                if (hasOwnProperty.call(r, "data")) return g && o.emit("get", "data", arguments, this), r.data;
                if (
                  (arguments.length ? (w = Bs.call(t, this, arguments)) : (w = Us.call(t, this)),
                  hasOwnProperty.call(r, "data"))
                )
                  throw Zr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r.data = w), m && o.emit("set", "data", null, w), w;
              })
            : (x = function (w) {
                var k,
                  T = arguments,
                  z;
                if ((b && (T = b(arguments)), (z = String(T[0])), hasOwnProperty.call(r, z)))
                  return g && o.emit("get", z, T, this), r[z];
                if (
                  (T.length === 1 ? (k = Us.call(t, this, T[0])) : (k = Bs.call(t, this, T)), hasOwnProperty.call(r, z))
                )
                  throw Zr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r[z] = k), m && o.emit("set", z, null, k), k;
              }),
        (o = {
          original: t,
          memoized: x,
          profileName: n.profileName,
          get: function (w) {
            return b && (w = b(w)), i ? i(w) : String(w[0]);
          },
          has: function (w) {
            return hasOwnProperty.call(r, w);
          },
          delete: function (w) {
            var k;
            hasOwnProperty.call(r, w) && (l && l(w), (k = r[w]), delete r[w], _ && o.emit("delete", w, k));
          },
          clear: function () {
            var w = r;
            c && c(), (r = Sc(null)), o.emit("clear", w);
          },
          on: function (w, k) {
            return w === "get" ? (g = !0) : w === "set" ? (m = !0) : w === "delete" && (_ = !0), Ly.call(this, w, k);
          },
          emit: Dy,
          updateEnv: function () {
            t = o.original;
          },
        }),
        i
          ? (u = Jr(function (w) {
              var k,
                T = arguments;
              b && (T = b(T)), (k = i(T)), k !== null && o.delete(k);
            }, s))
          : e === 0
            ? (u = function () {
                return o.delete("data");
              })
            : (u = function (w) {
                return b && (w = b(arguments)[0]), o.delete(w);
              }),
        (p = Jr(function () {
          var w,
            k = arguments;
          return e === 0 ? r.data : (b && (k = b(k)), i ? (w = i(k)) : (w = String(k[0])), r[w]);
        })),
        (h = Jr(function () {
          var w,
            k = arguments;
          return e === 0
            ? o.has("data")
            : (b && (k = b(k)), i ? (w = i(k)) : (w = String(k[0])), w === null ? !1 : o.has(w));
        })),
        My(x, { __memoized__: or(!0), delete: or(u), clear: or(o.clear), _get: or(p), _has: or(h) }),
        o
      );
    },
    Ny = on,
    Fy = Xo,
    Ac = Sn,
    By = zy,
    Uy = Xh,
    Vy = function t(e) {
      var n, r, o;
      if ((Ny(e), (n = Object(arguments[1])), n.async && n.promise))
        throw new Error("Options 'async' and 'promise' cannot be used together");
      return hasOwnProperty.call(e, "__memoized__") && !n.force
        ? e
        : ((r = Uy(n.length, e.length, n.async && Ac.async)),
          (o = By(e, r, n)),
          Fy(Ac, function (s, i) {
            n[i] && s(n[i], o, n);
          }),
          t.__profiler__ && t.__profiler__(o),
          o.updateEnv(),
          o.memoized);
    },
    Tc,
    Ec;
  function Hy() {
    return (
      Ec ||
        ((Ec = 1),
        (Tc = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        })),
      Tc
    );
  }
  var Oc, Cc;
  function qy() {
    return (
      Cc ||
        ((Cc = 1),
        (Oc = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, o = t; --o; ) n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        })),
      Oc
    );
  }
  var Rc, jc;
  function Ky() {
    return (
      jc ||
        ((jc = 1),
        (Rc = function () {
          var t = Number.isNaN;
          return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
        })),
      Rc
    );
  }
  var $c, Pc;
  function Wy() {
    return (
      Pc ||
        ((Pc = 1),
        ($c = function (t) {
          return t !== t;
        })),
      $c
    );
  }
  var Ic, Mc;
  function Gy() {
    return Mc || ((Mc = 1), (Ic = Ky()() ? Number.isNaN : Wy())), Ic;
  }
  var Vs, Lc;
  function la() {
    if (Lc) return Vs;
    Lc = 1;
    var t = Gy(),
      e = kn,
      n = Zn,
      r = Array.prototype.indexOf,
      o = Object.prototype.hasOwnProperty,
      s = Math.abs,
      i = Math.floor;
    return (
      (Vs = function (a) {
        var l, c, u, p;
        if (!t(a)) return r.apply(this, arguments);
        for (
          c = e(n(this).length),
            u = arguments[1],
            isNaN(u) ? (u = 0) : u >= 0 ? (u = i(u)) : (u = e(this.length) - i(s(u))),
            l = u;
          l < c;
          ++l
        )
          if (o.call(this, l) && ((p = this[l]), t(p))) return l;
        return -1;
      }),
      Vs
    );
  }
  var Hs, Dc;
  function Zy() {
    if (Dc) return Hs;
    Dc = 1;
    var t = la(),
      e = Object.create;
    return (
      (Hs = function () {
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
              p = [];
            if (u === 0) delete a[u];
            else if ((a = a[u])) {
              for (; i < u - 1; ) {
                if (((l = t.call(a[0], c[i])), l === -1)) return;
                p.push(a, l), (a = a[1][l]), ++i;
              }
              if (((l = t.call(a[0], c[i])), l === -1)) return;
              for (s = a[1][l], a[0].splice(l, 1), a[1].splice(l, 1); !a[0].length && p.length; )
                (l = p.pop()), (a = p.pop()), a[0].splice(l, 1), a[1].splice(l, 1);
            }
            delete o[s];
          },
          clear: function () {
            (r = []), (o = e(null));
          },
        };
      }),
      Hs
    );
  }
  var qs, zc;
  function Jy() {
    if (zc) return qs;
    zc = 1;
    var t = la();
    return (
      (qs = function () {
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
      qs
    );
  }
  var Ks, Nc;
  function Qy() {
    if (Nc) return Ks;
    Nc = 1;
    var t = la(),
      e = Object.create;
    return (
      (Ks = function (n) {
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
            for (var a = 0, l = o, c, u = [], p = s[i]; a < n - 1; ) {
              if (((c = t.call(l[0], p[a])), c === -1)) return;
              u.push(l, c), (l = l[1][c]), ++a;
            }
            if (((c = t.call(l[0], p[a])), c !== -1)) {
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
      Ks
    );
  }
  var Fc = {},
    Ws,
    Bc;
  function fp() {
    if (Bc) return Ws;
    Bc = 1;
    var t = on,
      e = Xo,
      n = Function.prototype.call;
    return (
      (Ws = function (r, o) {
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
      Ws
    );
  }
  var Gs, Uc;
  function ca() {
    if (Uc) return Gs;
    Uc = 1;
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
      (Gs = (function () {
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
      Gs
    );
  }
  var Vc;
  function Xy() {
    if (Vc) return Fc;
    Vc = 1;
    var t = aa(),
      e = fp(),
      n = ep(),
      r = rp,
      o = ca(),
      s = Array.prototype.slice,
      i = Function.prototype.apply,
      a = Object.create;
    return (
      (Sn.async = function (l, c) {
        var u = a(null),
          p = a(null),
          h = c.memoized,
          f = c.original,
          g,
          m,
          _;
        c.memoized = r(function (x) {
          var b = arguments,
            w = b[b.length - 1];
          return typeof w == "function" && ((g = w), (b = s.call(b, 0, -1))), h.apply((m = this), (_ = b));
        }, h);
        try {
          n(c.memoized, h);
        } catch {}
        c.on("get", function (x) {
          var b, w, k;
          if (g) {
            if (u[x]) {
              typeof u[x] == "function" ? (u[x] = [u[x], g]) : u[x].push(g), (g = null);
              return;
            }
            (b = g),
              (w = m),
              (k = _),
              (g = m = _ = null),
              o(function () {
                var T;
                hasOwnProperty.call(p, x)
                  ? ((T = p[x]), c.emit("getasync", x, k, w), i.call(b, T.context, T.args))
                  : ((g = b), (m = w), (_ = k), h.apply(w, k));
              });
          }
        }),
          (c.original = function () {
            var x, b, w, k;
            return g
              ? ((x = t(arguments)),
                (b = function T(z) {
                  var V,
                    H,
                    X = T.id;
                  if (X == null) {
                    o(i.bind(T, this, arguments));
                    return;
                  }
                  if ((delete T.id, (V = u[X]), delete u[X], !!V))
                    return (
                      (H = t(arguments)),
                      c.has(X) &&
                        (z
                          ? c.delete(X)
                          : ((p[X] = { context: this, args: H }),
                            c.emit("setasync", X, typeof V == "function" ? 1 : V.length))),
                      typeof V == "function"
                        ? (k = i.call(V, this, H))
                        : V.forEach(function (I) {
                            k = i.call(I, this, H);
                          }, this),
                      k
                    );
                }),
                (w = g),
                (g = m = _ = null),
                x.push(b),
                (k = i.call(f, this, x)),
                (b.cb = w),
                (g = b),
                k)
              : i.call(f, this, arguments);
          }),
          c.on("set", function (x) {
            if (!g) {
              c.delete(x);
              return;
            }
            u[x] ? (typeof u[x] == "function" ? (u[x] = [u[x], g.cb]) : u[x].push(g.cb)) : (u[x] = g.cb),
              delete g.cb,
              (g.id = x),
              (g = null);
          }),
          c.on("delete", function (x) {
            var b;
            hasOwnProperty.call(u, x) ||
              (p[x] && ((b = p[x]), delete p[x], c.emit("deleteasync", x, s.call(b.args, 1))));
          }),
          c.on("clear", function () {
            var x = p;
            (p = a(null)),
              c.emit(
                "clearasync",
                e(x, function (b) {
                  return s.call(b.args, 1);
                }),
              );
          });
      }),
      Fc
    );
  }
  var Hc = {},
    Zs,
    qc;
  function Yy() {
    if (qc) return Zs;
    qc = 1;
    var t = Array.prototype.forEach,
      e = Object.create;
    return (
      (Zs = function (n) {
        var r = e(null);
        return (
          t.call(arguments, function (o) {
            r[o] = !0;
          }),
          r
        );
      }),
      Zs
    );
  }
  var Kc, Wc;
  function hp() {
    return (
      Wc ||
        ((Wc = 1),
        (Kc = function (t) {
          return typeof t == "function";
        })),
      Kc
    );
  }
  var Js, Gc;
  function t_() {
    if (Gc) return Js;
    Gc = 1;
    var t = hp();
    return (
      (Js = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          throw new TypeError("Passed argument cannot be stringifed");
        }
      }),
      Js
    );
  }
  var Qs, Zc;
  function e_() {
    if (Zc) return Qs;
    Zc = 1;
    var t = Zn,
      e = t_();
    return (
      (Qs = function (n) {
        return e(t(n));
      }),
      Qs
    );
  }
  var Xs, Jc;
  function n_() {
    if (Jc) return Xs;
    Jc = 1;
    var t = hp();
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
  var Ys, Qc;
  function r_() {
    if (Qc) return Ys;
    Qc = 1;
    var t = n_(),
      e = /[\n\r\u2028\u2029]/g;
    return (
      (Ys = function (n) {
        var r = t(n);
        return (
          r.length > 100 && (r = r.slice(0, 99) + "…"),
          (r = r.replace(e, function (o) {
            return JSON.stringify(o).slice(1, -1);
          })),
          r
        );
      }),
      Ys
    );
  }
  var Qr = { exports: {} },
    Xc;
  function pp() {
    if (Xc) return Qr.exports;
    (Xc = 1), (Qr.exports = t), (Qr.exports.default = t);
    function t(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
    }
    return Qr.exports;
  }
  var Yc;
  function o_() {
    if (Yc) return Hc;
    Yc = 1;
    var t = fp(),
      e = Yy(),
      n = e_(),
      r = r_(),
      o = pp(),
      s = ca(),
      i = Object.create,
      a = e("then", "then:finally", "done", "done:finally");
    return (
      (Sn.promise = function (l, c) {
        var u = i(null),
          p = i(null),
          h = i(null);
        if (l === !0) l = null;
        else if (((l = n(l)), !a[l])) throw new TypeError("'" + r(l) + "' is not valid promise mode");
        c.on("set", function (f, g, m) {
          var _ = !1;
          if (!o(m)) {
            (p[f] = m), c.emit("setasync", f, 1);
            return;
          }
          (u[f] = 1), (h[f] = m);
          var x = function (T) {
              var z = u[f];
              if (_)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              z && (delete u[f], (p[f] = T), c.emit("setasync", f, z));
            },
            b = function () {
              (_ = !0), u[f] && (delete u[f], delete h[f], c.delete(f));
            },
            w = l;
          if ((w || (w = "then"), w === "then")) {
            var k = function () {
              s(b);
            };
            (m = m.then(function (T) {
              s(x.bind(this, T));
            }, k)),
              typeof m.finally == "function" && m.finally(k);
          } else if (w === "done") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            m.done(x, b);
          } else if (w === "done:finally") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            if (typeof m.finally != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            m.done(x), m.finally(b);
          }
        }),
          c.on("get", function (f, g, m) {
            var _;
            if (u[f]) {
              ++u[f];
              return;
            }
            _ = h[f];
            var x = function () {
              c.emit("getasync", f, g, m);
            };
            o(_)
              ? typeof _.done == "function"
                ? _.done(x)
                : _.then(function () {
                    s(x);
                  })
              : x();
          }),
          c.on("delete", function (f) {
            if ((delete h[f], u[f])) {
              delete u[f];
              return;
            }
            if (hasOwnProperty.call(p, f)) {
              var g = p[f];
              delete p[f], c.emit("deleteasync", f, [g]);
            }
          }),
          c.on("clear", function () {
            var f = p;
            (p = i(null)),
              (u = i(null)),
              (h = i(null)),
              c.emit(
                "clearasync",
                t(f, function (g) {
                  return [g];
                }),
              );
          });
      }),
      Hc
    );
  }
  var tu = {},
    eu;
  function s_() {
    if (eu) return tu;
    eu = 1;
    var t = on,
      e = Xo,
      n = Sn,
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
      tu
    );
  }
  var nu = {},
    ru,
    ou;
  function i_() {
    return ou || ((ou = 1), (ru = 2147483647)), ru;
  }
  var ti, su;
  function a_() {
    if (su) return ti;
    su = 1;
    var t = kn,
      e = i_();
    return (
      (ti = function (n) {
        if (((n = t(n)), n > e)) throw new TypeError(n + " exceeds maximum possible timeout");
        return n;
      }),
      ti
    );
  }
  var iu;
  function l_() {
    if (iu) return nu;
    iu = 1;
    var t = aa(),
      e = Xo,
      n = ca(),
      r = pp(),
      o = a_(),
      s = Sn,
      i = Function.prototype,
      a = Math.max,
      l = Math.min,
      c = Object.create;
    return (
      (s.maxAge = function (u, p, h) {
        var f, g, m, _;
        (u = o(u)),
          u &&
            ((f = c(null)),
            (g = (h.async && s.async) || (h.promise && s.promise) ? "async" : ""),
            p.on("set" + g, function (x) {
              (f[x] = setTimeout(function () {
                p.delete(x);
              }, u)),
                typeof f[x].unref == "function" && f[x].unref(),
                _ &&
                  (_[x] && _[x] !== "nextTick" && clearTimeout(_[x]),
                  (_[x] = setTimeout(function () {
                    delete _[x];
                  }, m)),
                  typeof _[x].unref == "function" && _[x].unref());
            }),
            p.on("delete" + g, function (x) {
              clearTimeout(f[x]), delete f[x], _ && (_[x] !== "nextTick" && clearTimeout(_[x]), delete _[x]);
            }),
            h.preFetch &&
              (h.preFetch === !0 || isNaN(h.preFetch) ? (m = 0.333) : (m = a(l(Number(h.preFetch), 1), 0)),
              m &&
                ((_ = {}),
                (m = (1 - m) * u),
                p.on("get" + g, function (x, b, w) {
                  _[x] ||
                    ((_[x] = "nextTick"),
                    n(function () {
                      var k;
                      _[x] === "nextTick" &&
                        (delete _[x],
                        p.delete(x),
                        h.async && ((b = t(b)), b.push(i)),
                        (k = p.memoized.apply(w, b)),
                        h.promise && r(k) && (typeof k.done == "function" ? k.done(i, i) : k.then(i, i)));
                    }));
                }))),
            p.on("clear" + g, function () {
              e(f, function (x) {
                clearTimeout(x);
              }),
                (f = {}),
                _ &&
                  (e(_, function (x) {
                    x !== "nextTick" && clearTimeout(x);
                  }),
                  (_ = {}));
            }));
      }),
      nu
    );
  }
  var au = {},
    ei,
    lu;
  function c_() {
    if (lu) return ei;
    lu = 1;
    var t = kn,
      e = Object.create,
      n = Object.prototype.hasOwnProperty;
    return (
      (ei = function (r) {
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
              var p = a[u],
                h = ++l;
              if (((i[h] = u), (a[u] = h), !p)) return ++o, o <= r ? void 0 : ((u = i[s]), c(u), u);
              if ((delete i[p], s === p)) for (; !n.call(i, ++s); );
            },
            delete: (c = function (u) {
              var p = a[u];
              if (p && (delete i[p], delete a[u], --o, s === p)) {
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
      ei
    );
  }
  var cu;
  function u_() {
    if (cu) return au;
    cu = 1;
    var t = kn,
      e = c_(),
      n = Sn;
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
      au
    );
  }
  var uu = {},
    fu;
  function f_() {
    if (fu) return uu;
    fu = 1;
    var t = An,
      e = Sn,
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
      uu
    );
  }
  var h_ = Qh,
    p_ = Xh,
    d_ = Vy,
    g_ = function (t) {
      var e = h_(arguments[1]),
        n;
      return (
        e.normalizer ||
          ((n = e.length = p_(e.length, t.length, e.async)),
          n !== 0 &&
            (e.primitive
              ? n === !1
                ? (e.normalizer = Hy())
                : n > 1 && (e.normalizer = qy()(n))
              : n === !1
                ? (e.normalizer = Zy()())
                : n === 1
                  ? (e.normalizer = Jy()())
                  : (e.normalizer = Qy()(n)))),
        e.async && Xy(),
        e.promise && o_(),
        e.dispose && s_(),
        e.maxAge && l_(),
        e.max && u_(),
        e.refCounter && f_(),
        d_(t, e)
      );
    };
  const ts = db(g_),
    m_ = (t) => {
      if (!t) return [];
      const { border: e, background: n, borderActive: r, backgroundActive: o } = t;
      return [
        `--annotation-bg-color: ${n}`,
        `--annotation-border-color: ${e}`,
        `--annotation-bg-color--active: ${o}`,
        `--annotation-border-color--active: ${r}`,
      ];
    },
    v_ = ts(m_),
    b_ = { key: 0, class: "annotation-slot annotation-slot--before" },
    y_ = { key: 1 },
    __ = { key: 2, class: "text" },
    w_ = { key: 3, class: "annotation-slot annotation-slot--after" },
    dp = Mt({
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
          i = (h, f, g) => {
            c(h, { startOffset: f, annotation: r.value, action: g });
          },
          a = (h, f, g) => {
            u(h, { startOffset: f, annotation: r.value, action: g });
          },
          l = (h, f) => {
            p(h, { startOffset: f, annotation: r.value });
          },
          c = (h, f) => {
            s("annotation-click", h, f);
          },
          u = (h, f) => {
            s("annotation-double-click", h, f);
          },
          p = (h, f) => {
            s("annotation-mouse-move", h, f);
          };
        return (h, f) => {
          var g, m, _, x;
          return (
            P(),
            L(
              lt,
              null,
              [
                h.start === ((g = r.value) == null ? void 0 : g.start)
                  ? (P(), L("span", b_, [Ne(h.$slots, "annotation-before", { annotation: r.value })]))
                  : Pt("", !0),
                h.annotations.length
                  ? (P(),
                    L(
                      "span",
                      {
                        key: 1,
                        class: Lt(n.annotationClassHandler(r.value, h.start, h.end, n.allowCreate)),
                        style: en(F(v_)(r.value.color)),
                        onMousedown: f[2] || (f[2] = Kr((b) => i(b, h.wordPartStart, "move"), ["stop"])),
                        onMousemove: f[3] || (f[3] = Kr((b) => l(b, h.wordPartStart), ["stop"])),
                        onDblclick: f[4] || (f[4] = (b) => a(b, h.wordPartStart)),
                      },
                      [
                        o.value && h.start === ((m = r.value) == null ? void 0 : m.start)
                          ? (P(),
                            L(
                              "span",
                              {
                                key: 0,
                                class: "handle handle--start",
                                onMousedown: f[0] || (f[0] = Kr((b) => i(b, h.wordPartStart, "moveStart"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                        st(
                          dp,
                          {
                            annotations: h.annotations.slice(1),
                            text: h.text,
                            start: h.start,
                            end: h.end,
                            "allow-edit": h.allowEdit,
                            "word-part-start": h.wordPartStart,
                            "annotation-class-handler": n.annotationClassHandler,
                            onAnnotationClick: c,
                            onAnnotationDoubleClick: u,
                            onAnnotationMouseMove: p,
                          },
                          {
                            "annotation-before": Ee((b) => [
                              Ne(h.$slots, "annotation-before", { annotation: b.annotation }),
                            ]),
                            "annotation-after": Ee((b) => [
                              Ne(h.$slots, "annotation-after", { annotation: b.annotation }),
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
                        h.annotations[0].label ? (P(), L("label", y_, yt(h.annotations[0].label), 1)) : Pt("", !0),
                        o.value && h.end === ((_ = h.annotations[0]) == null ? void 0 : _.end)
                          ? (P(),
                            L(
                              "span",
                              {
                                key: 2,
                                class: "handle handle--end",
                                onMousedown: f[1] || (f[1] = Kr((b) => i(b, h.wordPartStart, "moveEnd"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                      ],
                      38,
                    ))
                  : (P(), L("span", __, yt(h.text), 1)),
                h.end === ((x = r.value) == null ? void 0 : x.end)
                  ? (P(), L("span", w_, [Ne(h.$slots, "annotation-after", { annotation: r.value })]))
                  : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    x_ = Mt({
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
          P(),
          L(
            "span",
            {
              class: Lt({ text: !0, "create-anno-text": s.allowCreate }),
              onDblclick: i[0] || (i[0] = (a) => o(a, s.wordPart)),
              onMousedown: i[1] || (i[1] = (a) => r(a, s.wordPart)),
            },
            yt(s.wordPart.text),
            35,
          )
        );
      },
    }),
    k_ = ["onMousemove"],
    S_ = { class: "text" },
    A_ = ["onMousedown", "onMousemove", "onDblclick"],
    T_ = { key: 0 },
    E_ = Mt({
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
        function s(f) {
          return f.sort((g, m) => m.weight - g.weight);
        }
        const i = e,
          a = (f, g, m, _) => {
            u(f, { startOffset: g == null ? void 0 : g.start, annotation: m, action: _ });
          },
          l = (f, g, m, _) => {
            p(f, { startOffset: g == null ? void 0 : g.start, annotation: m, action: _ });
          },
          c = (f, g, m) => {
            h(f, { startOffset: g == null ? void 0 : g.start, annotation: m });
          },
          u = (f, g) => {
            i("annotation-click", f, g);
          },
          p = (f, g) => {
            i("annotation-double-click", f, g);
          },
          h = (f, g) => {
            i("annotation-mouse-move", f, g);
          };
        return (f, g) => (
          P(!0),
          L(
            lt,
            null,
            Bt(
              f.line.words,
              (m) => (
                P(),
                L("span", { key: m.text, class: "token" }, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(
                      m.parts,
                      (_) => (
                        P(),
                        L(
                          "span",
                          {
                            key: _.text,
                            class: Lt(["token-segment", `token-segment--m${_.maxAnnotationWeight}`]),
                            onMousemove: (x) => c(x, _),
                          },
                          [
                            o.value
                              ? (P(),
                                L(
                                  lt,
                                  { key: 0 },
                                  [
                                    j("span", S_, yt(_.text), 1),
                                    (P(!0),
                                    L(
                                      lt,
                                      null,
                                      Bt(
                                        _.annotations,
                                        (x) => (
                                          P(),
                                          L(
                                            "span",
                                            {
                                              key: x.id,
                                              class: Lt(f.annotationClasses(x, _.start, _.end, n.allowCreate)),
                                              style: en(n.annotationStyle(x.color)),
                                              onMousedown: (b) => a(b, _, x, "move"),
                                              onMousemove: (b) => c(b, _, x),
                                              onDblclick: (b) => l(b, _, x),
                                            },
                                            [x.label ? (P(), L("label", T_, yt(x.label), 1)) : Pt("", !0)],
                                            46,
                                            A_,
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
                              ? (P(),
                                L(
                                  lt,
                                  { key: 1 },
                                  [
                                    _.annotations.length
                                      ? (P(),
                                        Bn(
                                          dp,
                                          {
                                            key: 0,
                                            text: _.text,
                                            start: _.start,
                                            end: _.end,
                                            "allow-edit": f.allowEdit,
                                            "allow-create": f.allowCreate,
                                            "word-part-start": _.start,
                                            annotations: s(_.annotations),
                                            "annotation-class-handler": f.annotationClasses,
                                            onAnnotationClick: u,
                                            onAnnotationDoubleClick: p,
                                            onAnnotationMouseMove: h,
                                          },
                                          {
                                            "annotation-before": Ee((x) => [
                                              Ne(f.$slots, "annotation-before", { annotation: x.annotation }),
                                            ]),
                                            "annotation-after": Ee((x) => [
                                              Ne(f.$slots, "annotation-after", { annotation: x.annotation }),
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
                                      : (P(),
                                        Bn(
                                          x_,
                                          {
                                            key: 1,
                                            "word-part": _,
                                            "allow-create": f.allowCreate,
                                            onAnnotationClick: u,
                                            onAnnotationDoubleClick: p,
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
                          k_,
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
  var O_ = typeof global == "object" && global && global.Object === Object && global;
  const gp = O_;
  var C_ = typeof self == "object" && self && self.Object === Object && self,
    R_ = gp || C_ || Function("return this")();
  const Ce = R_;
  var j_ = Ce.Symbol;
  const fe = j_;
  var mp = Object.prototype,
    $_ = mp.hasOwnProperty,
    P_ = mp.toString,
    sr = fe ? fe.toStringTag : void 0;
  function I_(t) {
    var e = $_.call(t, sr),
      n = t[sr];
    try {
      t[sr] = void 0;
      var r = !0;
    } catch {}
    var o = P_.call(t);
    return r && (e ? (t[sr] = n) : delete t[sr]), o;
  }
  var M_ = Object.prototype,
    L_ = M_.toString;
  function D_(t) {
    return L_.call(t);
  }
  var z_ = "[object Null]",
    N_ = "[object Undefined]",
    hu = fe ? fe.toStringTag : void 0;
  function Jn(t) {
    return t == null ? (t === void 0 ? N_ : z_) : hu && hu in Object(t) ? I_(t) : D_(t);
  }
  function Ye(t) {
    return t != null && typeof t == "object";
  }
  var F_ = "[object Symbol]";
  function es(t) {
    return typeof t == "symbol" || (Ye(t) && Jn(t) == F_);
  }
  function B_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var U_ = Array.isArray;
  const ge = U_;
  var pu = fe ? fe.prototype : void 0,
    du = pu ? pu.toString : void 0;
  function vp(t) {
    if (typeof t == "string") return t;
    if (ge(t)) return B_(t, vp) + "";
    if (es(t)) return du ? du.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function bn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function bp(t) {
    return t;
  }
  var V_ = "[object AsyncFunction]",
    H_ = "[object Function]",
    q_ = "[object GeneratorFunction]",
    K_ = "[object Proxy]";
  function yp(t) {
    if (!bn(t)) return !1;
    var e = Jn(t);
    return e == H_ || e == q_ || e == V_ || e == K_;
  }
  var W_ = Ce["__core-js_shared__"];
  const ni = W_;
  var gu = (function () {
    var t = /[^.]+$/.exec((ni && ni.keys && ni.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function G_(t) {
    return !!gu && gu in t;
  }
  var Z_ = Function.prototype,
    J_ = Z_.toString;
  function Tn(t) {
    if (t != null) {
      try {
        return J_.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var Q_ = /[\\^$.*+?()[\]{}|]/g,
    X_ = /^\[object .+?Constructor\]$/,
    Y_ = Function.prototype,
    t0 = Object.prototype,
    e0 = Y_.toString,
    n0 = t0.hasOwnProperty,
    r0 = RegExp(
      "^" +
        e0
          .call(n0)
          .replace(Q_, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function o0(t) {
    if (!bn(t) || G_(t)) return !1;
    var e = yp(t) ? r0 : X_;
    return e.test(Tn(t));
  }
  function s0(t, e) {
    return t == null ? void 0 : t[e];
  }
  function En(t, e) {
    var n = s0(t, e);
    return o0(n) ? n : void 0;
  }
  var i0 = En(Ce, "WeakMap");
  const Ei = i0;
  var mu = Object.create,
    a0 = (function () {
      function t() {}
      return function (e) {
        if (!bn(e)) return {};
        if (mu) return mu(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  const l0 = a0;
  function c0(t, e, n) {
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
  var u0 = 800,
    f0 = 16,
    h0 = Date.now;
  function p0(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = h0(),
        o = f0 - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= u0) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function d0(t) {
    return function () {
      return t;
    };
  }
  var g0 = (function () {
    try {
      var t = En(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {}
  })();
  const _o = g0;
  var m0 = _o
    ? function (t, e) {
        return _o(t, "toString", { configurable: !0, enumerable: !1, value: d0(e), writable: !0 });
      }
    : bp;
  const v0 = m0;
  var b0 = p0(v0);
  const y0 = b0;
  function _0(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var w0 = 9007199254740991,
    x0 = /^(?:0|[1-9]\d*)$/;
  function ua(t, e) {
    var n = typeof t;
    return (e = e ?? w0), !!e && (n == "number" || (n != "symbol" && x0.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function k0(t, e, n) {
    e == "__proto__" && _o ? _o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function fa(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var S0 = Object.prototype,
    A0 = S0.hasOwnProperty;
  function _p(t, e, n) {
    var r = t[e];
    (!(A0.call(t, e) && fa(r, n)) || (n === void 0 && !(e in t))) && k0(t, e, n);
  }
  var vu = Math.max;
  function T0(t, e, n) {
    return (
      (e = vu(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = vu(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), c0(t, this, a);
      }
    );
  }
  var E0 = 9007199254740991;
  function ha(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= E0;
  }
  function O0(t) {
    return t != null && ha(t.length) && !yp(t);
  }
  var C0 = Object.prototype;
  function wp(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || C0;
    return t === n;
  }
  function R0(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var j0 = "[object Arguments]";
  function bu(t) {
    return Ye(t) && Jn(t) == j0;
  }
  var xp = Object.prototype,
    $0 = xp.hasOwnProperty,
    P0 = xp.propertyIsEnumerable,
    I0 = bu(
      (function () {
        return arguments;
      })(),
    )
      ? bu
      : function (t) {
          return Ye(t) && $0.call(t, "callee") && !P0.call(t, "callee");
        };
  const pa = I0;
  function M0() {
    return !1;
  }
  var kp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    yu = kp && typeof jt == "object" && jt && !jt.nodeType && jt,
    L0 = yu && yu.exports === kp,
    _u = L0 ? Ce.Buffer : void 0,
    D0 = _u ? _u.isBuffer : void 0,
    z0 = D0 || M0;
  const wo = z0;
  var N0 = "[object Arguments]",
    F0 = "[object Array]",
    B0 = "[object Boolean]",
    U0 = "[object Date]",
    V0 = "[object Error]",
    H0 = "[object Function]",
    q0 = "[object Map]",
    K0 = "[object Number]",
    W0 = "[object Object]",
    G0 = "[object RegExp]",
    Z0 = "[object Set]",
    J0 = "[object String]",
    Q0 = "[object WeakMap]",
    X0 = "[object ArrayBuffer]",
    Y0 = "[object DataView]",
    tw = "[object Float32Array]",
    ew = "[object Float64Array]",
    nw = "[object Int8Array]",
    rw = "[object Int16Array]",
    ow = "[object Int32Array]",
    sw = "[object Uint8Array]",
    iw = "[object Uint8ClampedArray]",
    aw = "[object Uint16Array]",
    lw = "[object Uint32Array]",
    Ot = {};
  Ot[tw] = Ot[ew] = Ot[nw] = Ot[rw] = Ot[ow] = Ot[sw] = Ot[iw] = Ot[aw] = Ot[lw] = !0;
  Ot[N0] =
    Ot[F0] =
    Ot[X0] =
    Ot[B0] =
    Ot[Y0] =
    Ot[U0] =
    Ot[V0] =
    Ot[H0] =
    Ot[q0] =
    Ot[K0] =
    Ot[W0] =
    Ot[G0] =
    Ot[Z0] =
    Ot[J0] =
    Ot[Q0] =
      !1;
  function cw(t) {
    return Ye(t) && ha(t.length) && !!Ot[Jn(t)];
  }
  function da(t) {
    return function (e) {
      return t(e);
    };
  }
  var Sp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    wr = Sp && typeof jt == "object" && jt && !jt.nodeType && jt,
    uw = wr && wr.exports === Sp,
    ri = uw && gp.process,
    fw = (function () {
      try {
        var t = wr && wr.require && wr.require("util").types;
        return t || (ri && ri.binding && ri.binding("util"));
      } catch {}
    })();
  const qn = fw;
  var wu = qn && qn.isTypedArray,
    hw = wu ? da(wu) : cw;
  const Ap = hw;
  var pw = Object.prototype,
    dw = pw.hasOwnProperty;
  function gw(t, e) {
    var n = ge(t),
      r = !n && pa(t),
      o = !n && !r && wo(t),
      s = !n && !r && !o && Ap(t),
      i = n || r || o || s,
      a = i ? R0(t.length, String) : [],
      l = a.length;
    for (var c in t)
      dw.call(t, c) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            ua(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function Tp(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var mw = Tp(Object.keys, Object);
  const vw = mw;
  var bw = Object.prototype,
    yw = bw.hasOwnProperty;
  function _w(t) {
    if (!wp(t)) return vw(t);
    var e = [];
    for (var n in Object(t)) yw.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function Ep(t) {
    return O0(t) ? gw(t) : _w(t);
  }
  var ww = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    xw = /^\w*$/;
  function ga(t, e) {
    if (ge(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || es(t)
      ? !0
      : xw.test(t) || !ww.test(t) || (e != null && t in Object(e));
  }
  var kw = En(Object, "create");
  const Pr = kw;
  function Sw() {
    (this.__data__ = Pr ? Pr(null) : {}), (this.size = 0);
  }
  function Aw(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var Tw = "__lodash_hash_undefined__",
    Ew = Object.prototype,
    Ow = Ew.hasOwnProperty;
  function Cw(t) {
    var e = this.__data__;
    if (Pr) {
      var n = e[t];
      return n === Tw ? void 0 : n;
    }
    return Ow.call(e, t) ? e[t] : void 0;
  }
  var Rw = Object.prototype,
    jw = Rw.hasOwnProperty;
  function $w(t) {
    var e = this.__data__;
    return Pr ? e[t] !== void 0 : jw.call(e, t);
  }
  var Pw = "__lodash_hash_undefined__";
  function Iw(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Pr && e === void 0 ? Pw : e), this;
  }
  function yn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  yn.prototype.clear = Sw;
  yn.prototype.delete = Aw;
  yn.prototype.get = Cw;
  yn.prototype.has = $w;
  yn.prototype.set = Iw;
  function Mw() {
    (this.__data__ = []), (this.size = 0);
  }
  function ns(t, e) {
    for (var n = t.length; n--; ) if (fa(t[n][0], e)) return n;
    return -1;
  }
  var Lw = Array.prototype,
    Dw = Lw.splice;
  function zw(t) {
    var e = this.__data__,
      n = ns(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : Dw.call(e, n, 1), --this.size, !0;
  }
  function Nw(t) {
    var e = this.__data__,
      n = ns(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function Fw(t) {
    return ns(this.__data__, t) > -1;
  }
  function Bw(t, e) {
    var n = this.__data__,
      r = ns(n, t);
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
  Ue.prototype.clear = Mw;
  Ue.prototype.delete = zw;
  Ue.prototype.get = Nw;
  Ue.prototype.has = Fw;
  Ue.prototype.set = Bw;
  var Uw = En(Ce, "Map");
  const Ir = Uw;
  function Vw() {
    (this.size = 0), (this.__data__ = { hash: new yn(), map: new (Ir || Ue)(), string: new yn() });
  }
  function Hw(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function rs(t, e) {
    var n = t.__data__;
    return Hw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function qw(t) {
    var e = rs(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function Kw(t) {
    return rs(this, t).get(t);
  }
  function Ww(t) {
    return rs(this, t).has(t);
  }
  function Gw(t, e) {
    var n = rs(this, t),
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
  Ve.prototype.clear = Vw;
  Ve.prototype.delete = qw;
  Ve.prototype.get = Kw;
  Ve.prototype.has = Ww;
  Ve.prototype.set = Gw;
  var Zw = "Expected a function";
  function ma(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(Zw);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (ma.Cache || Ve)()), n;
  }
  ma.Cache = Ve;
  var Jw = 500;
  function Qw(t) {
    var e = ma(t, function (r) {
        return n.size === Jw && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var Xw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Yw = /\\(\\)?/g,
    t1 = Qw(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(Xw, function (n, r, o, s) {
          e.push(o ? s.replace(Yw, "$1") : r || n);
        }),
        e
      );
    });
  const e1 = t1;
  function n1(t) {
    return t == null ? "" : vp(t);
  }
  function os(t, e) {
    return ge(t) ? t : ga(t, e) ? [t] : e1(n1(t));
  }
  function Br(t) {
    if (typeof t == "string" || es(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function va(t, e) {
    e = os(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Br(e[n++])];
    return n && n == r ? t : void 0;
  }
  function r1(t, e, n) {
    var r = t == null ? void 0 : va(t, e);
    return r === void 0 ? n : r;
  }
  function Op(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var xu = fe ? fe.isConcatSpreadable : void 0;
  function o1(t) {
    return ge(t) || pa(t) || !!(xu && t && t[xu]);
  }
  function s1(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = o1), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? Op(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function i1(t) {
    var e = t == null ? 0 : t.length;
    return e ? s1(t) : [];
  }
  function a1(t) {
    return y0(T0(t, void 0, i1), t + "");
  }
  var l1 = Tp(Object.getPrototypeOf, Object);
  const c1 = l1;
  function u1() {
    (this.__data__ = new Ue()), (this.size = 0);
  }
  function f1(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function h1(t) {
    return this.__data__.get(t);
  }
  function p1(t) {
    return this.__data__.has(t);
  }
  var d1 = 200;
  function g1(t, e) {
    var n = this.__data__;
    if (n instanceof Ue) {
      var r = n.__data__;
      if (!Ir || r.length < d1 - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new Ve(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Ae(t) {
    var e = (this.__data__ = new Ue(t));
    this.size = e.size;
  }
  Ae.prototype.clear = u1;
  Ae.prototype.delete = f1;
  Ae.prototype.get = h1;
  Ae.prototype.has = p1;
  Ae.prototype.set = g1;
  var Cp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    ku = Cp && typeof jt == "object" && jt && !jt.nodeType && jt,
    m1 = ku && ku.exports === Cp,
    Su = m1 ? Ce.Buffer : void 0;
  Su && Su.allocUnsafe;
  function v1(t, e) {
    return t.slice();
  }
  function b1(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function y1() {
    return [];
  }
  var _1 = Object.prototype,
    w1 = _1.propertyIsEnumerable,
    Au = Object.getOwnPropertySymbols,
    x1 = Au
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              b1(Au(t), function (e) {
                return w1.call(t, e);
              }));
        }
      : y1;
  const k1 = x1;
  function S1(t, e, n) {
    var r = e(t);
    return ge(t) ? r : Op(r, n(t));
  }
  function Oi(t) {
    return S1(t, Ep, k1);
  }
  var A1 = En(Ce, "DataView");
  const Ci = A1;
  var T1 = En(Ce, "Promise");
  const Ri = T1;
  var E1 = En(Ce, "Set");
  const ji = E1;
  var Tu = "[object Map]",
    O1 = "[object Object]",
    Eu = "[object Promise]",
    Ou = "[object Set]",
    Cu = "[object WeakMap]",
    Ru = "[object DataView]",
    C1 = Tn(Ci),
    R1 = Tn(Ir),
    j1 = Tn(Ri),
    $1 = Tn(ji),
    P1 = Tn(Ei),
    hn = Jn;
  ((Ci && hn(new Ci(new ArrayBuffer(1))) != Ru) ||
    (Ir && hn(new Ir()) != Tu) ||
    (Ri && hn(Ri.resolve()) != Eu) ||
    (ji && hn(new ji()) != Ou) ||
    (Ei && hn(new Ei()) != Cu)) &&
    (hn = function (t) {
      var e = Jn(t),
        n = e == O1 ? t.constructor : void 0,
        r = n ? Tn(n) : "";
      if (r)
        switch (r) {
          case C1:
            return Ru;
          case R1:
            return Tu;
          case j1:
            return Eu;
          case $1:
            return Ou;
          case P1:
            return Cu;
        }
      return e;
    });
  const Mr = hn;
  var I1 = Object.prototype,
    M1 = I1.hasOwnProperty;
  function L1(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && M1.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var D1 = Ce.Uint8Array;
  const xo = D1;
  function ba(t) {
    var e = new t.constructor(t.byteLength);
    return new xo(e).set(new xo(t)), e;
  }
  function z1(t, e) {
    var n = ba(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var N1 = /\w*$/;
  function F1(t) {
    var e = new t.constructor(t.source, N1.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var ju = fe ? fe.prototype : void 0,
    $u = ju ? ju.valueOf : void 0;
  function B1(t) {
    return $u ? Object($u.call(t)) : {};
  }
  function U1(t, e) {
    var n = ba(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var V1 = "[object Boolean]",
    H1 = "[object Date]",
    q1 = "[object Map]",
    K1 = "[object Number]",
    W1 = "[object RegExp]",
    G1 = "[object Set]",
    Z1 = "[object String]",
    J1 = "[object Symbol]",
    Q1 = "[object ArrayBuffer]",
    X1 = "[object DataView]",
    Y1 = "[object Float32Array]",
    tx = "[object Float64Array]",
    ex = "[object Int8Array]",
    nx = "[object Int16Array]",
    rx = "[object Int32Array]",
    ox = "[object Uint8Array]",
    sx = "[object Uint8ClampedArray]",
    ix = "[object Uint16Array]",
    ax = "[object Uint32Array]";
  function lx(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case Q1:
        return ba(t);
      case V1:
      case H1:
        return new r(+t);
      case X1:
        return z1(t);
      case Y1:
      case tx:
      case ex:
      case nx:
      case rx:
      case ox:
      case sx:
      case ix:
      case ax:
        return U1(t);
      case q1:
        return new r();
      case K1:
      case Z1:
        return new r(t);
      case W1:
        return F1(t);
      case G1:
        return new r();
      case J1:
        return B1(t);
    }
  }
  function cx(t) {
    return typeof t.constructor == "function" && !wp(t) ? l0(c1(t)) : {};
  }
  var ux = "[object Map]";
  function fx(t) {
    return Ye(t) && Mr(t) == ux;
  }
  var Pu = qn && qn.isMap,
    hx = Pu ? da(Pu) : fx;
  const px = hx;
  var dx = "[object Set]";
  function gx(t) {
    return Ye(t) && Mr(t) == dx;
  }
  var Iu = qn && qn.isSet,
    mx = Iu ? da(Iu) : gx;
  const vx = mx;
  var Rp = "[object Arguments]",
    bx = "[object Array]",
    yx = "[object Boolean]",
    _x = "[object Date]",
    wx = "[object Error]",
    jp = "[object Function]",
    xx = "[object GeneratorFunction]",
    kx = "[object Map]",
    Sx = "[object Number]",
    $p = "[object Object]",
    Ax = "[object RegExp]",
    Tx = "[object Set]",
    Ex = "[object String]",
    Ox = "[object Symbol]",
    Cx = "[object WeakMap]",
    Rx = "[object ArrayBuffer]",
    jx = "[object DataView]",
    $x = "[object Float32Array]",
    Px = "[object Float64Array]",
    Ix = "[object Int8Array]",
    Mx = "[object Int16Array]",
    Lx = "[object Int32Array]",
    Dx = "[object Uint8Array]",
    zx = "[object Uint8ClampedArray]",
    Nx = "[object Uint16Array]",
    Fx = "[object Uint32Array]",
    St = {};
  St[Rp] =
    St[bx] =
    St[Rx] =
    St[jx] =
    St[yx] =
    St[_x] =
    St[$x] =
    St[Px] =
    St[Ix] =
    St[Mx] =
    St[Lx] =
    St[kx] =
    St[Sx] =
    St[$p] =
    St[Ax] =
    St[Tx] =
    St[Ex] =
    St[Ox] =
    St[Dx] =
    St[zx] =
    St[Nx] =
    St[Fx] =
      !0;
  St[wx] = St[jp] = St[Cx] = !1;
  function ao(t, e, n, r, o, s) {
    var i;
    if (i !== void 0) return i;
    if (!bn(t)) return t;
    var a = ge(t);
    if (a) i = L1(t);
    else {
      var l = Mr(t),
        c = l == jp || l == xx;
      if (wo(t)) return v1(t);
      if (l == $p || l == Rp || (c && !o)) i = c ? {} : cx(t);
      else {
        if (!St[l]) return o ? t : {};
        i = lx(t, l);
      }
    }
    s || (s = new Ae());
    var u = s.get(t);
    if (u) return u;
    s.set(t, i),
      vx(t)
        ? t.forEach(function (f) {
            i.add(ao(f, e, n, f, t, s));
          })
        : px(t) &&
          t.forEach(function (f, g) {
            i.set(g, ao(f, e, n, g, t, s));
          });
    var p = Oi,
      h = a ? void 0 : p(t);
    return (
      _0(h || t, function (f, g) {
        h && ((g = f), (f = t[g])), _p(i, g, ao(f, e, n, g, t, s));
      }),
      i
    );
  }
  var Bx = 1,
    Ux = 4;
  function $i(t) {
    return ao(t, Bx | Ux);
  }
  var Vx = "__lodash_hash_undefined__";
  function Hx(t) {
    return this.__data__.set(t, Vx), this;
  }
  function qx(t) {
    return this.__data__.has(t);
  }
  function ko(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.__data__ = new Ve(); ++e < n; ) this.add(t[e]);
  }
  ko.prototype.add = ko.prototype.push = Hx;
  ko.prototype.has = qx;
  function Kx(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function Wx(t, e) {
    return t.has(e);
  }
  var Gx = 1,
    Zx = 2;
  function Pp(t, e, n, r, o, s) {
    var i = n & Gx,
      a = t.length,
      l = e.length;
    if (a != l && !(i && l > a)) return !1;
    var c = s.get(t),
      u = s.get(e);
    if (c && u) return c == e && u == t;
    var p = -1,
      h = !0,
      f = n & Zx ? new ko() : void 0;
    for (s.set(t, e), s.set(e, t); ++p < a; ) {
      var g = t[p],
        m = e[p];
      if (r) var _ = i ? r(m, g, p, e, t, s) : r(g, m, p, t, e, s);
      if (_ !== void 0) {
        if (_) continue;
        h = !1;
        break;
      }
      if (f) {
        if (
          !Kx(e, function (x, b) {
            if (!Wx(f, b) && (g === x || o(g, x, n, r, s))) return f.push(b);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(g === m || o(g, m, n, r, s))) {
        h = !1;
        break;
      }
    }
    return s.delete(t), s.delete(e), h;
  }
  function Jx(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r, o) {
        n[++e] = [o, r];
      }),
      n
    );
  }
  function Qx(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r) {
        n[++e] = r;
      }),
      n
    );
  }
  var Xx = 1,
    Yx = 2,
    tk = "[object Boolean]",
    ek = "[object Date]",
    nk = "[object Error]",
    rk = "[object Map]",
    ok = "[object Number]",
    sk = "[object RegExp]",
    ik = "[object Set]",
    ak = "[object String]",
    lk = "[object Symbol]",
    ck = "[object ArrayBuffer]",
    uk = "[object DataView]",
    Mu = fe ? fe.prototype : void 0,
    oi = Mu ? Mu.valueOf : void 0;
  function fk(t, e, n, r, o, s, i) {
    switch (n) {
      case uk:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case ck:
        return !(t.byteLength != e.byteLength || !s(new xo(t), new xo(e)));
      case tk:
      case ek:
      case ok:
        return fa(+t, +e);
      case nk:
        return t.name == e.name && t.message == e.message;
      case sk:
      case ak:
        return t == e + "";
      case rk:
        var a = Jx;
      case ik:
        var l = r & Xx;
        if ((a || (a = Qx), t.size != e.size && !l)) return !1;
        var c = i.get(t);
        if (c) return c == e;
        (r |= Yx), i.set(t, e);
        var u = Pp(a(t), a(e), r, o, s, i);
        return i.delete(t), u;
      case lk:
        if (oi) return oi.call(t) == oi.call(e);
    }
    return !1;
  }
  var hk = 1,
    pk = Object.prototype,
    dk = pk.hasOwnProperty;
  function gk(t, e, n, r, o, s) {
    var i = n & hk,
      a = Oi(t),
      l = a.length,
      c = Oi(e),
      u = c.length;
    if (l != u && !i) return !1;
    for (var p = l; p--; ) {
      var h = a[p];
      if (!(i ? h in e : dk.call(e, h))) return !1;
    }
    var f = s.get(t),
      g = s.get(e);
    if (f && g) return f == e && g == t;
    var m = !0;
    s.set(t, e), s.set(e, t);
    for (var _ = i; ++p < l; ) {
      h = a[p];
      var x = t[h],
        b = e[h];
      if (r) var w = i ? r(b, x, h, e, t, s) : r(x, b, h, t, e, s);
      if (!(w === void 0 ? x === b || o(x, b, n, r, s) : w)) {
        m = !1;
        break;
      }
      _ || (_ = h == "constructor");
    }
    if (m && !_) {
      var k = t.constructor,
        T = e.constructor;
      k != T &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof k == "function" && k instanceof k && typeof T == "function" && T instanceof T) &&
        (m = !1);
    }
    return s.delete(t), s.delete(e), m;
  }
  var mk = 1,
    Lu = "[object Arguments]",
    Du = "[object Array]",
    Xr = "[object Object]",
    vk = Object.prototype,
    zu = vk.hasOwnProperty;
  function bk(t, e, n, r, o, s) {
    var i = ge(t),
      a = ge(e),
      l = i ? Du : Mr(t),
      c = a ? Du : Mr(e);
    (l = l == Lu ? Xr : l), (c = c == Lu ? Xr : c);
    var u = l == Xr,
      p = c == Xr,
      h = l == c;
    if (h && wo(t)) {
      if (!wo(e)) return !1;
      (i = !0), (u = !1);
    }
    if (h && !u) return s || (s = new Ae()), i || Ap(t) ? Pp(t, e, n, r, o, s) : fk(t, e, l, n, r, o, s);
    if (!(n & mk)) {
      var f = u && zu.call(t, "__wrapped__"),
        g = p && zu.call(e, "__wrapped__");
      if (f || g) {
        var m = f ? t.value() : t,
          _ = g ? e.value() : e;
        return s || (s = new Ae()), o(m, _, n, r, s);
      }
    }
    return h ? (s || (s = new Ae()), gk(t, e, n, r, o, s)) : !1;
  }
  function ya(t, e, n, r, o) {
    return t === e ? !0 : t == null || e == null || (!Ye(t) && !Ye(e)) ? t !== t && e !== e : bk(t, e, n, r, ya, o);
  }
  var yk = 1,
    _k = 2;
  function wk(t, e, n, r) {
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
          p;
        if (!(p === void 0 ? ya(c, l, yk | _k, r, u) : p)) return !1;
      }
    }
    return !0;
  }
  function Ip(t) {
    return t === t && !bn(t);
  }
  function xk(t) {
    for (var e = Ep(t), n = e.length; n--; ) {
      var r = e[n],
        o = t[r];
      e[n] = [r, o, Ip(o)];
    }
    return e;
  }
  function Mp(t, e) {
    return function (n) {
      return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
  }
  function kk(t) {
    var e = xk(t);
    return e.length == 1 && e[0][2]
      ? Mp(e[0][0], e[0][1])
      : function (n) {
          return n === t || wk(n, t, e);
        };
  }
  function Sk(t, e) {
    return t != null && e in Object(t);
  }
  function Ak(t, e, n) {
    e = os(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = Br(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && ha(o) && ua(i, o) && (ge(t) || pa(t)));
  }
  function Lp(t, e) {
    return t != null && Ak(t, e, Sk);
  }
  var Tk = 1,
    Ek = 2;
  function Ok(t, e) {
    return ga(t) && Ip(e)
      ? Mp(Br(t), e)
      : function (n) {
          var r = r1(n, t);
          return r === void 0 && r === e ? Lp(n, t) : ya(e, r, Tk | Ek);
        };
  }
  function Ck(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function Rk(t) {
    return function (e) {
      return va(e, t);
    };
  }
  function jk(t) {
    return ga(t) ? Ck(Br(t)) : Rk(t);
  }
  function $k(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? bp
        : typeof t == "object"
          ? ge(t)
            ? Ok(t[0], t[1])
            : kk(t)
          : jk(t);
  }
  function Pk(t, e) {
    return t > e;
  }
  function Ik(t, e, n) {
    for (var r = -1, o = t.length; ++r < o; ) {
      var s = t[r],
        i = e(s);
      if (i != null && (a === void 0 ? i === i && !es(i) : n(i, a)))
        var a = i,
          l = s;
    }
    return l;
  }
  function Mk(t, e) {
    return t && t.length ? Ik(t, $k(e), Pk) : void 0;
  }
  function Lk(t, e, n, r) {
    if (!bn(t)) return t;
    e = os(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = Br(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = bn(u) ? u : ua(e[o + 1]) ? [] : {});
      }
      _p(a, l, c), (a = a[l]);
    }
    return t;
  }
  function Dk(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = va(t, i);
      n(a, i) && Lk(s, os(i, t), a);
    }
    return s;
  }
  function zk(t, e) {
    return Dk(t, e, function (n, r) {
      return Lp(t, r);
    });
  }
  var Nk = a1(function (t, e) {
    return t == null ? {} : zk(t, e);
  });
  const Pi = Nk,
    Fk = ["weight", "class", "color", "startsOnLine", "endsOnLine"],
    Bk = ["defaultClass", "weightClass", "endClass", "startClass"],
    Uk = (t, e) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        t.startsOnLine ? e.startClass : null,
        t.endsOnLine ? e.endClass : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((n) => !!n),
    Vk = ts(Uk, { normalizer: (t) => JSON.stringify(t) }),
    Hk = (t, e) => Vk(Pi(t, Fk), Pi(e, Bk)),
    qk = { class: "gutter-annotations" },
    Kk = ["onClick", "onDblclick"],
    Wk = { key: 0 },
    Gk = { key: 0, class: "gutter text" },
    Zk = Mt({
      __name: "AnnotatedGutters",
      props: { gutter: { default: null }, annotationStyle: { default: null } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = Hk,
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
            P(),
            L(
              lt,
              null,
              [
                j("div", qk, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt((l = i.gutter) == null ? void 0 : l.annotations, (u) => {
                      var p;
                      return (
                        P(),
                        L(
                          "span",
                          {
                            key: u,
                            class: Lt(F(n)(u, i.annotationStyle)),
                            style: en({ "--gutter-bg-color": (p = u.color) == null ? void 0 : p.background }),
                            onClick: (h) => o(h, u),
                            onDblclick: (h) => s(h, u),
                          },
                          [u.label ? (P(), L("label", Wk, yt(u.label), 1)) : Pt("", !0)],
                          46,
                          Kk,
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                i.gutter ? (P(), L("div", Gk, yt((c = i.gutter) == null ? void 0 : c.text), 1)) : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    Yr = (t, e) => {
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
  function Jk(t) {
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
  const Dp = class ur {
    constructor() {
      ct(this, "_verboseEnabled"), ct(this, "_debugEnabled");
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
  ct(Dp, "_instance");
  let bt = Dp;
  const Qk = 1,
    Nu = (t, e) => {
      const n = t[0] < e[0] ? t : e,
        r = n == t ? e : t;
      return n[1] < r[0] ? null : [r[0], n[1] < r[1] ? n[1] : r[1]];
    };
  class Xk {
    constructor(e, n, r) {
      ct(this, "props"),
        ct(this, "editState"),
        ct(this, "createState"),
        ct(
          this,
          "allAnnotations",
          rt(() => {
            bt.debug("** refresh annotations");
            const o = $i(this.props.annotations);
            return (
              this.editState.annotation && o.push(this.editState.annotation),
              this.createState.annotation && o.push(this.createState.annotation),
              o
            );
          }),
        ),
        ct(
          this,
          "gutterAnnotations",
          rt(() => {
            bt.debug("** refresh gutterAnnotations **");
            const o = this.allAnnotations.value.filter((s) => s.target === "gutter");
            return bt.debug(o), o;
          }),
        ),
        ct(this, "prepareRanges", (o) => {
          bt.debug("** prepare ranges for_annotations **"), bt.debug(o);
          const s = o.filter((i) => i.target === "text");
          return (
            this.props.autoAnnotationWeights &&
              (this.calculateAnnotationWeights(s), this.calculateGutterAnnotationWeights(this.gutterAnnotations.value)),
            bt.debug("** weighted span annotations **"),
            bt.debug(s),
            bt.debug("** weighted gutter annotations **"),
            bt.debug(this.gutterAnnotations.value),
            o.map((i) => [
              Math.max(0, i.start - this.props.annotationOffset),
              i.end + Qk - this.props.annotationOffset,
              i,
            ])
          );
        }),
        ct(this, "calculateAnnotationWeights", function (o) {
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
        ct(this, "calculateGutterAnnotationWeights", (o) => {
          const s = function (l, c) {
            const u = l.end - l.start,
              p = c.end - c.start;
            return u - p;
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
        ct(
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
                    p = c < i.length - 1 ? u + l.length + 1 : u + l.length;
                  o.push([u, p + 1, null]), (a += l.length + 1);
                });
              }),
              (o = o.sort((s, i) =>
                Number(s[0]) - Number(i[0]) === 0 ? Number(s[1]) - Number(i[1]) : Number(s[0]) - Number(i[0]),
              )),
              Jk(o)
            );
          }),
        ),
        ct(this, "createAnnotatedWord", (o) => {
          let s = this.flattenedRanges.value.filter((l) => Nu([l[0], l[1] - 1], [o.start, o.end]));
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
              maxAnnotationWeight: ((c = Mk(u, (p) => p.weight)) == null ? void 0 : c.weight) ?? 0,
            };
          });
          return { start: o.start, end: o.end, text: o.text, parts: a };
        }),
        ct(this, "createAnnotatedLine", (o) => {
          let s = [];
          const i = this.flattenedRanges.value.filter((h) => Nu([h[0], h[1] - 1], [o.start, o.end]));
          for (const h of i)
            h[2]
              .filter((f) => f)
              .filter((f) => (f == null ? void 0 : f.target) === "gutter")
              .sort((f, g) => (Number(f == null ? void 0 : f.weight) < Number(g == null ? void 0 : g.weight) ? -1 : 1))
              .forEach((f) => s.push(f));
          s = [...new Set(s)];
          const a = Math.max(...this.gutterAnnotations.value.map((h) => h.weight));
          for (let h = 0; h <= a; h++)
            if (s.filter((f) => f.weight === h).length == 0) {
              const f = {
                start: o.start,
                end: o.start,
                target: "gutter",
                class: "annotation--gutter-spacer",
                weight: h,
              };
              s.push(f);
            }
          s.map((h) => {
            const f = $i(h);
            return (
              (h.startsOnLine = o.start <= h.start && o.end >= h.start),
              (h.endsOnLine = o.start <= h.end && o.end >= h.end),
              f
            );
          }).sort((h, f) => (Number(h == null ? void 0 : h.weight) < Number(f == null ? void 0 : f.weight) ? -1 : 1));
          const l = [];
          let c = 0;
          const u = o.text.split(" ");
          u.forEach((h, f) => {
            l.push({ start: o.start + c, end: o.start + c + h.length, text: f < u.length - 1 ? h + " " : h }),
              (c += f < u.length - 1 ? h.length + 1 : h.length);
          });
          const p = [];
          return (
            l.forEach((h) => {
              p.push(this.createAnnotatedWord(h));
            }),
            { start: o.start, end: o.end, words: p, gutter: { text: o.gutter, annotations: s } }
          );
        }),
        ct(
          this,
          "annotatedLines",
          rt(() => {
            const o = this.props.lines.map((s) => this.createAnnotatedLine(s));
            return bt.debug("** annotated lines **"), bt.debug(o), o;
          }),
        ),
        (this.props = e),
        (this.editState = n),
        (this.createState = r);
    }
  }
  const Yk = (t, e, n, r) =>
      [
        "annotated-text",
        `theme-${t}`,
        `annotated-text--render-${e}`,
        r ? `action--active action--${r}` : null,
        n ? "annotated-text--show-labels" : null,
      ].filter((o) => o),
    tS = ts(Yk),
    eS = ["weight", "color", "class"],
    nS = (t, e, n, r, o, s, i, a, l) =>
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
    rS = ts(nS, { normalizer: (t) => JSON.stringify(t) }),
    oS = (t, e, n, r, o, s, i, a) => {
      const l = e && t === e,
        c = e && t.id === e.id && t !== e,
        u = a.includes(t.id),
        p = i.includes(t.id);
      return rS(Pi(t, eS), n, (t == null ? void 0 : t.start) === r, (t == null ? void 0 : t.end) === o, c, l, u, p, s);
    };
  class sS {
    constructor(e, n) {
      ct(this, "props"),
        ct(this, "editAnnotationState"),
        ct(
          this,
          "componentClasses",
          rt(() => {
            const { theme: r, render: o, showLabels: s } = this.props,
              { action: i } = this.editAnnotationState;
            return tS(r, o, s, i);
          }),
        ),
        ct(this, "annotationClasses", (r, o, s, i) => {
          const { style: a, selectedAnnotations: l, hoveredAnnotations: c } = this.props;
          return oS(r, this.editAnnotationState.annotation, a, o, s, i, l, c);
        }),
        (this.props = e),
        (this.editAnnotationState = n);
    }
  }
  var zt = ((t) => (
    (t.IDLE = "idle"),
    (t.SELECTING = "selecting"),
    (t.UPDATING = "updating"),
    (t.CREATING = "creating"),
    (t.START_SELECT = "start-selecting"),
    (t.START_CREATE = "start-creating"),
    t
  ))(zt || {});
  class iS {
    constructor(e) {
      ct(this, "newEnd"),
        ct(this, "newStart"),
        ct(this, "annotation"),
        ct(this, "creating"),
        ct(this, "userState"),
        (this.userState = e),
        this.resetCreating();
    }
    resetCreating() {
      (this.creating = !1),
        (this.annotation = null),
        (this.newEnd = null),
        (this.newStart = null),
        (this.creating = !1),
        (this.userState.state = zt.IDLE);
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
  class aS {
    constructor() {
      ct(this, "hoveredAnnotations"), ct(this, "mouseEvent"), (this.hoveredAnnotations = []), (this.mouseEvent = null);
    }
  }
  class lS {
    constructor(e) {
      ct(this, "action"),
        ct(this, "handlePosition"),
        ct(this, "annotation"),
        ct(this, "origAnnotation"),
        ct(this, "origEnd"),
        ct(this, "origStart"),
        ct(this, "newEnd"),
        ct(this, "newStart"),
        ct(this, "updating", !1),
        ct(this, "userState"),
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
        (this.userState.state = zt.IDLE),
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
      (this.userState.state = zt.UPDATING), (this.updating = !0), this.confirmUpdate();
    }
    confirmUpdate() {
      this.updating && ((this.annotation.start = this.newStart), (this.annotation.end = this.newEnd));
    }
  }
  class cS {
    constructor() {
      ct(this, "state"), ct(this, "payload"), (this.state = zt.IDLE), (this.payload = null);
    }
    reset() {
      (this.state = zt.IDLE), (this.payload = null);
    }
  }
  const uS = () => {
    const t = ut(new cS()),
      e = ut(new lS(t.value)),
      n = ut(new iS(t.value)),
      r = ut(new aS());
    return { updateState: e, createState: n, hoverState: r, userState: t };
  };
  function Ie(t) {
    const e = ra();
    if (!e) return !1;
    const n = e.vnode.props;
    return n ? !!(n[hr(t)] || n[hr(ee(t))]) : !1;
  }
  const fS = { class: "content" },
    So = Mt({
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
          o = uS(),
          { updateState: s, createState: i, userState: a, hoverState: l } = o,
          c = rt(() => a.value.state),
          u = new Xk(n, s.value, i.value);
        wh(() => {
          bt.setDebug(n.debug), bt.setVerbose(n.verbose);
        });
        const p = Ie("annotationUpdateBegin"),
          h = Ie("annotationUpdating");
        Ie("annotationUpdateEnd");
        const f = Ie("annotationCreateBegin"),
          g = Ie("annotationCreating");
        Ie("annotationCreateEnd");
        const m = Ie("keyPressed");
        Ie("annotationClick"), Ie("annotationDoubleClick");
        const _ = new sS(n, s.value),
          x = _.annotationClasses,
          b = _.componentClasses;
        Se(c, (d, S) => {
          bt.verbose("user-action-state-change", S, d), r("user-action-state-change", S, d);
        }),
          typeof window < "u" &&
            window.addEventListener("keyup", (d) => {
              if (m) bt.verbose("key-pressed", d.key, s.value, i.value), r("key-pressed", d, s.value, i.value, a.value);
              else
                switch (d.key) {
                  case "Escape":
                    s.value.resetUpdate();
                }
            });
        const w = new Map(),
          k = new Map(),
          T = new Map();
        function z(d, S) {
          var C;
          bt.verbose("@onClick", "userState:", a.value.state, S),
            (C = w.get(a.value.state)) == null || C(d, S),
            r("annotation-click", S);
        }
        function V(d, S) {
          bt.verbose("@onDoubleClick", "userState:", a.value.state, S),
            d.preventDefault(),
            r("annotation-double-click", S);
        }
        function H(d, S) {
          var C;
          bt.verbose(
            "@onMouseMove",
            "userState:",
            d,
            a.value.state,
            S,
            (C = S == null ? void 0 : S.annotation) == null ? void 0 : C.id,
          ),
            T.get(a.value.state) && T.get(a.value.state)(d, S);
        }
        function X(d) {
          bt.verbose("@onMouseUp", "userState:", a.value.state), k.get(a.value.state) && k.get(a.value.state)(d);
        }
        function I(d, S) {
          bt.verbose("@onMouseLeave", "userState:", a.value.state),
            s.value.updating && s.value.resetUpdate(),
            i.value.creating && i.value.resetCreating();
        }
        return (
          w.set(zt.IDLE, (d, S) => {
            if (S != null && S.annotation) {
              (a.value.state = zt.START_SELECT), (a.value.payload = S);
              return;
            }
            if (S != null && S.startOffset) {
              (a.value.state = zt.START_CREATE), (a.value.payload = S);
              return;
            }
          }),
          k.set(zt.START_SELECT, (d) => {
            bt.verbose("annotation-select", a.value.payload.annotation),
              r("annotation-select", a.value.payload.annotation, d),
              a.value.reset();
          }),
          k.set(zt.START_CREATE, (d) => {
            a.value.reset();
          }),
          T.set(zt.START_CREATE, (d, S) => {
            if (n.allowCreate) {
              const C = S.startOffset + Yr(d.x, d.y).offset;
              if ((i.value.startCreating(C), f))
                bt.verbose("*emit annotation-create-begin", i.value), r("annotation-create-begin", i.value);
              else {
                const J = {
                  id: pb(),
                  start: i.value.newStart,
                  end: i.value.newStart,
                  class: "annotation annotation--color-1",
                  target: "text",
                };
                i.value.initAnnotation(J);
              }
              a.value.state = zt.CREATING;
            }
          }),
          T.set(zt.CREATING, (d, S) => {
            const C = Yr(d.x, d.y);
            if (C) {
              const J = S.startOffset + C.offset;
              i.value.newStart <= J &&
                ((i.value.newEnd = J),
                g
                  ? (bt.verbose("*emit annotation-creating", i.value), r("annotation-creating", i.value))
                  : i.value.updateCreating());
            }
          }),
          k.set(zt.CREATING, (d) => {
            bt.verbose("*emit annotation-create-end", i.value),
              r("annotation-create-end", i.value),
              i.value.resetCreating();
          }),
          T.set(zt.START_SELECT, (d, S) => {
            if (!n.allowEdit) return;
            const C = Yr(d.x, d.y);
            C &&
              (s.value.startUpdating(
                a.value.payload.action,
                a.value.payload.startOffset + C.offset,
                a.value.payload.annotation,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
              ),
              p
                ? (bt.verbose("*emit annotation-update-begin", s.value), r("annotation-update-begin", s.value))
                : s.value.confirmStartUpdating());
          }),
          T.set(zt.UPDATING, (d, S) => {
            const C = Yr(d.x, d.y);
            let J = !1;
            if (C) {
              const et = S.startOffset + C.offset,
                K = et - s.value.handlePosition;
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
                  s.value.newStart != s.value.origStart + K &&
                    ((s.value.newStart = s.value.origStart + K), (s.value.newEnd = s.value.origEnd + K), (J = !0));
                  break;
              }
              J &&
                (h
                  ? (bt.verbose("*emit annotation-updating", s.value), r("annotation-updating", s.value))
                  : s.value.confirmUpdate());
            }
          }),
          k.set(zt.UPDATING, (d) => {
            bt.verbose("*emit annotation-update-end", s.value),
              r("annotation-update-end", s.value),
              s.value.resetUpdate();
          }),
          T.set(zt.IDLE, (d, S) => {
            if (S != null && S.annotation) {
              const C = S.annotation;
              l.value.hoveredAnnotations.some((J) => J.id === C.id) ||
                (l.value.hoveredAnnotations.push(C),
                bt.verbose("annotation-mouse-over", C.id),
                r("annotation-mouse-over", C, d));
            } else
              l.value.hoveredAnnotations.map((C) => {
                bt.verbose("annotation-mouse-leave", C.id), r("annotation-mouse-leave", C, d);
              }),
                (l.value.hoveredAnnotations = []);
          }),
          (d, S) =>
            F(u).annotatedLines.value.length
              ? (P(),
                L(
                  "div",
                  {
                    key: 0,
                    class: Lt(F(b)),
                    onMouseleave: S[0] || (S[0] = (C) => I()),
                    onMouseup: S[1] || (S[1] = (C) => X(C)),
                  },
                  [
                    (P(!0),
                    L(
                      lt,
                      null,
                      Bt(
                        F(u).annotatedLines.value,
                        (C) => (
                          P(),
                          L(
                            lt,
                            { key: C },
                            [
                              st(
                                Zk,
                                {
                                  gutter: C.gutter,
                                  "annotation-style": d.style,
                                  onAnnotationClick: z,
                                  onAnnotationDoubleClick: V,
                                },
                                null,
                                8,
                                ["gutter", "annotation-style"],
                              ),
                              j("div", fS, [
                                st(
                                  E_,
                                  {
                                    line: C,
                                    "allow-edit": d.allowEdit,
                                    "allow-create": d.allowCreate,
                                    "annotation-classes": F(x),
                                    render: d.render,
                                    onAnnotationClick: z,
                                    onAnnotationDoubleClick: V,
                                    onAnnotationMouseMove: H,
                                  },
                                  {
                                    "annotation-before": Ee((J) => [
                                      Ne(d.$slots, "annotation-before", { annotation: J.annotation }),
                                    ]),
                                    "annotation-after": Ee((J) => [
                                      Ne(d.$slots, "annotation-after", { annotation: J.annotation }),
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
    hS = { opacity: { background: 0.3, border: 0.3, backgroundActive: 0.3, borderActive: 0.9, gutter: 0.8 } },
    pS = (t) => {
      const e = parseInt(t.slice(1), 16),
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        o = e & 255;
      return `${n},${r},${o}`;
    },
    dS = (t, e) => {
      const n = { ...hS.opacity },
        r = pS(t);
      return {
        border: `rgba(${r},${n.border})`,
        background: `rgba(${r},${n.border})`,
        borderActive: `rgba(${r},${n.border})`,
        backgroundActive: `color-mix(in srgb, white, ${t} ${n.backgroundActive * 100})`,
        gutterColor: `rgba(${r},${n.gutter})`,
      };
    },
    gS = (t, e) => {
      const n = {};
      return (
        Object.entries(t).forEach(([r, o]) => {
          n[r] = dS(o);
        }),
        n
      );
    };
  function mS(t, e) {
    return (
      P(),
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
  function vS(t, e) {
    return (
      P(),
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
  function bS(t, e) {
    return (
      P(),
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
  function yS(t, e) {
    return (
      P(),
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
  function Fu(t, e) {
    return (
      P(),
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
  function _S(t, e) {
    return (
      P(),
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
  var zp = typeof global == "object" && global && global.Object === Object && global,
    wS = typeof self == "object" && self && self.Object === Object && self,
    Re = zp || wS || Function("return this")(),
    Oe = Re.Symbol,
    Np = Object.prototype,
    xS = Np.hasOwnProperty,
    kS = Np.toString,
    ir = Oe ? Oe.toStringTag : void 0;
  function SS(t) {
    var e = xS.call(t, ir),
      n = t[ir];
    try {
      t[ir] = void 0;
      var r = !0;
    } catch {}
    var o = kS.call(t);
    return r && (e ? (t[ir] = n) : delete t[ir]), o;
  }
  var AS = Object.prototype,
    TS = AS.toString;
  function ES(t) {
    return TS.call(t);
  }
  var OS = "[object Null]",
    CS = "[object Undefined]",
    Bu = Oe ? Oe.toStringTag : void 0;
  function Qn(t) {
    return t == null ? (t === void 0 ? CS : OS) : Bu && Bu in Object(t) ? SS(t) : ES(t);
  }
  function Xn(t) {
    return t != null && typeof t == "object";
  }
  var RS = "[object Symbol]";
  function _a(t) {
    return typeof t == "symbol" || (Xn(t) && Qn(t) == RS);
  }
  function jS(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var sn = Array.isArray,
    Uu = Oe ? Oe.prototype : void 0,
    Vu = Uu ? Uu.toString : void 0;
  function Fp(t) {
    if (typeof t == "string") return t;
    if (sn(t)) return jS(t, Fp) + "";
    if (_a(t)) return Vu ? Vu.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function Kn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function $S(t) {
    return t;
  }
  var PS = "[object AsyncFunction]",
    IS = "[object Function]",
    MS = "[object GeneratorFunction]",
    LS = "[object Proxy]";
  function Bp(t) {
    if (!Kn(t)) return !1;
    var e = Qn(t);
    return e == IS || e == MS || e == PS || e == LS;
  }
  var si = Re["__core-js_shared__"],
    Hu = (function () {
      var t = /[^.]+$/.exec((si && si.keys && si.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function DS(t) {
    return !!Hu && Hu in t;
  }
  var zS = Function.prototype,
    NS = zS.toString;
  function On(t) {
    if (t != null) {
      try {
        return NS.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var FS = /[\\^$.*+?()[\]{}|]/g,
    BS = /^\[object .+?Constructor\]$/,
    US = Function.prototype,
    VS = Object.prototype,
    HS = US.toString,
    qS = VS.hasOwnProperty,
    KS = RegExp(
      "^" +
        HS.call(qS)
          .replace(FS, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function WS(t) {
    if (!Kn(t) || DS(t)) return !1;
    var e = Bp(t) ? KS : BS;
    return e.test(On(t));
  }
  function GS(t, e) {
    return t == null ? void 0 : t[e];
  }
  function Cn(t, e) {
    var n = GS(t, e);
    return WS(n) ? n : void 0;
  }
  var Ii = Cn(Re, "WeakMap"),
    qu = Object.create,
    ZS = (function () {
      function t() {}
      return function (e) {
        if (!Kn(e)) return {};
        if (qu) return qu(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function JS(t, e, n) {
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
  var QS = 800,
    XS = 16,
    YS = Date.now;
  function tA(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = YS(),
        o = XS - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= QS) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function eA(t) {
    return function () {
      return t;
    };
  }
  var Ao = (function () {
      try {
        var t = Cn(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    nA = Ao
      ? function (t, e) {
          return Ao(t, "toString", { configurable: !0, enumerable: !1, value: eA(e), writable: !0 });
        }
      : $S,
    rA = tA(nA);
  function oA(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var sA = 9007199254740991,
    iA = /^(?:0|[1-9]\d*)$/;
  function wa(t, e) {
    var n = typeof t;
    return (e = e ?? sA), !!e && (n == "number" || (n != "symbol" && iA.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function aA(t, e, n) {
    e == "__proto__" && Ao ? Ao(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function Up(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var lA = Object.prototype,
    cA = lA.hasOwnProperty;
  function Vp(t, e, n) {
    var r = t[e];
    (!(cA.call(t, e) && Up(r, n)) || (n === void 0 && !(e in t))) && aA(t, e, n);
  }
  var Ku = Math.max;
  function uA(t, e, n) {
    return (
      (e = Ku(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = Ku(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), JS(t, this, a);
      }
    );
  }
  var fA = 9007199254740991;
  function xa(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= fA;
  }
  function hA(t) {
    return t != null && xa(t.length) && !Bp(t);
  }
  var pA = Object.prototype;
  function Hp(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || pA;
    return t === n;
  }
  function dA(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var gA = "[object Arguments]";
  function Wu(t) {
    return Xn(t) && Qn(t) == gA;
  }
  var qp = Object.prototype,
    mA = qp.hasOwnProperty,
    vA = qp.propertyIsEnumerable,
    ka = Wu(
      (function () {
        return arguments;
      })(),
    )
      ? Wu
      : function (t) {
          return Xn(t) && mA.call(t, "callee") && !vA.call(t, "callee");
        };
  function bA() {
    return !1;
  }
  var Kp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Gu = Kp && typeof jt == "object" && jt && !jt.nodeType && jt,
    yA = Gu && Gu.exports === Kp,
    Zu = yA ? Re.Buffer : void 0,
    _A = Zu ? Zu.isBuffer : void 0,
    Wp = _A || bA,
    wA = "[object Arguments]",
    xA = "[object Array]",
    kA = "[object Boolean]",
    SA = "[object Date]",
    AA = "[object Error]",
    TA = "[object Function]",
    EA = "[object Map]",
    OA = "[object Number]",
    CA = "[object Object]",
    RA = "[object RegExp]",
    jA = "[object Set]",
    $A = "[object String]",
    PA = "[object WeakMap]",
    IA = "[object ArrayBuffer]",
    MA = "[object DataView]",
    LA = "[object Float32Array]",
    DA = "[object Float64Array]",
    zA = "[object Int8Array]",
    NA = "[object Int16Array]",
    FA = "[object Int32Array]",
    BA = "[object Uint8Array]",
    UA = "[object Uint8ClampedArray]",
    VA = "[object Uint16Array]",
    HA = "[object Uint32Array]",
    Ct = {};
  Ct[LA] = Ct[DA] = Ct[zA] = Ct[NA] = Ct[FA] = Ct[BA] = Ct[UA] = Ct[VA] = Ct[HA] = !0;
  Ct[wA] =
    Ct[xA] =
    Ct[IA] =
    Ct[kA] =
    Ct[MA] =
    Ct[SA] =
    Ct[AA] =
    Ct[TA] =
    Ct[EA] =
    Ct[OA] =
    Ct[CA] =
    Ct[RA] =
    Ct[jA] =
    Ct[$A] =
    Ct[PA] =
      !1;
  function qA(t) {
    return Xn(t) && xa(t.length) && !!Ct[Qn(t)];
  }
  function Sa(t) {
    return function (e) {
      return t(e);
    };
  }
  var Gp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    xr = Gp && typeof jt == "object" && jt && !jt.nodeType && jt,
    KA = xr && xr.exports === Gp,
    ii = KA && zp.process,
    Wn = (function () {
      try {
        var t = xr && xr.require && xr.require("util").types;
        return t || (ii && ii.binding && ii.binding("util"));
      } catch {}
    })(),
    Ju = Wn && Wn.isTypedArray,
    WA = Ju ? Sa(Ju) : qA,
    GA = Object.prototype,
    ZA = GA.hasOwnProperty;
  function JA(t, e) {
    var n = sn(t),
      r = !n && ka(t),
      o = !n && !r && Wp(t),
      s = !n && !r && !o && WA(t),
      i = n || r || o || s,
      a = i ? dA(t.length, String) : [],
      l = a.length;
    for (var c in t)
      ZA.call(t, c) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            wa(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function Zp(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var QA = Zp(Object.keys, Object),
    XA = Object.prototype,
    YA = XA.hasOwnProperty;
  function tT(t) {
    if (!Hp(t)) return QA(t);
    var e = [];
    for (var n in Object(t)) YA.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function eT(t) {
    return hA(t) ? JA(t) : tT(t);
  }
  var nT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    rT = /^\w*$/;
  function oT(t, e) {
    if (sn(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || _a(t)
      ? !0
      : rT.test(t) || !nT.test(t) || (e != null && t in Object(e));
  }
  var Lr = Cn(Object, "create");
  function sT() {
    (this.__data__ = Lr ? Lr(null) : {}), (this.size = 0);
  }
  function iT(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var aT = "__lodash_hash_undefined__",
    lT = Object.prototype,
    cT = lT.hasOwnProperty;
  function uT(t) {
    var e = this.__data__;
    if (Lr) {
      var n = e[t];
      return n === aT ? void 0 : n;
    }
    return cT.call(e, t) ? e[t] : void 0;
  }
  var fT = Object.prototype,
    hT = fT.hasOwnProperty;
  function pT(t) {
    var e = this.__data__;
    return Lr ? e[t] !== void 0 : hT.call(e, t);
  }
  var dT = "__lodash_hash_undefined__";
  function gT(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Lr && e === void 0 ? dT : e), this;
  }
  function _n(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  _n.prototype.clear = sT;
  _n.prototype.delete = iT;
  _n.prototype.get = uT;
  _n.prototype.has = pT;
  _n.prototype.set = gT;
  function mT() {
    (this.__data__ = []), (this.size = 0);
  }
  function ss(t, e) {
    for (var n = t.length; n--; ) if (Up(t[n][0], e)) return n;
    return -1;
  }
  var vT = Array.prototype,
    bT = vT.splice;
  function yT(t) {
    var e = this.__data__,
      n = ss(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : bT.call(e, n, 1), --this.size, !0;
  }
  function _T(t) {
    var e = this.__data__,
      n = ss(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function wT(t) {
    return ss(this.__data__, t) > -1;
  }
  function xT(t, e) {
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
  He.prototype.clear = mT;
  He.prototype.delete = yT;
  He.prototype.get = _T;
  He.prototype.has = wT;
  He.prototype.set = xT;
  var Dr = Cn(Re, "Map");
  function kT() {
    (this.size = 0), (this.__data__ = { hash: new _n(), map: new (Dr || He)(), string: new _n() });
  }
  function ST(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function is(t, e) {
    var n = t.__data__;
    return ST(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function AT(t) {
    var e = is(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function TT(t) {
    return is(this, t).get(t);
  }
  function ET(t) {
    return is(this, t).has(t);
  }
  function OT(t, e) {
    var n = is(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function an(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  an.prototype.clear = kT;
  an.prototype.delete = AT;
  an.prototype.get = TT;
  an.prototype.has = ET;
  an.prototype.set = OT;
  var CT = "Expected a function";
  function Aa(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(CT);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (Aa.Cache || an)()), n;
  }
  Aa.Cache = an;
  var RT = 500;
  function jT(t) {
    var e = Aa(t, function (r) {
        return n.size === RT && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var $T = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    PT = /\\(\\)?/g,
    IT = jT(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace($T, function (n, r, o, s) {
          e.push(o ? s.replace(PT, "$1") : r || n);
        }),
        e
      );
    });
  function MT(t) {
    return t == null ? "" : Fp(t);
  }
  function as(t, e) {
    return sn(t) ? t : oT(t, e) ? [t] : IT(MT(t));
  }
  function Ta(t) {
    if (typeof t == "string" || _a(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
  }
  function LT(t, e) {
    e = as(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Ta(e[n++])];
    return n && n == r ? t : void 0;
  }
  function Jp(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var Qu = Oe ? Oe.isConcatSpreadable : void 0;
  function DT(t) {
    return sn(t) || ka(t) || !!(Qu && t && t[Qu]);
  }
  function zT(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = DT), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? Jp(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function NT(t) {
    var e = t == null ? 0 : t.length;
    return e ? zT(t) : [];
  }
  function FT(t) {
    return rA(uA(t, void 0, NT), t + "");
  }
  var BT = Zp(Object.getPrototypeOf, Object);
  function UT() {
    (this.__data__ = new He()), (this.size = 0);
  }
  function VT(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function HT(t) {
    return this.__data__.get(t);
  }
  function qT(t) {
    return this.__data__.has(t);
  }
  var KT = 200;
  function WT(t, e) {
    var n = this.__data__;
    if (n instanceof He) {
      var r = n.__data__;
      if (!Dr || r.length < KT - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new an(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Yn(t) {
    var e = (this.__data__ = new He(t));
    this.size = e.size;
  }
  Yn.prototype.clear = UT;
  Yn.prototype.delete = VT;
  Yn.prototype.get = HT;
  Yn.prototype.has = qT;
  Yn.prototype.set = WT;
  var Qp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Xu = Qp && typeof jt == "object" && jt && !jt.nodeType && jt,
    GT = Xu && Xu.exports === Qp,
    Yu = GT ? Re.Buffer : void 0;
  Yu && Yu.allocUnsafe;
  function ZT(t, e) {
    return t.slice();
  }
  function JT(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function QT() {
    return [];
  }
  var XT = Object.prototype,
    YT = XT.propertyIsEnumerable,
    tf = Object.getOwnPropertySymbols,
    tE = tf
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              JT(tf(t), function (e) {
                return YT.call(t, e);
              }));
        }
      : QT;
  function eE(t, e, n) {
    var r = e(t);
    return sn(t) ? r : Jp(r, n(t));
  }
  function nE(t) {
    return eE(t, eT, tE);
  }
  var Mi = Cn(Re, "DataView"),
    Li = Cn(Re, "Promise"),
    Di = Cn(Re, "Set"),
    ef = "[object Map]",
    rE = "[object Object]",
    nf = "[object Promise]",
    rf = "[object Set]",
    of = "[object WeakMap]",
    sf = "[object DataView]",
    oE = On(Mi),
    sE = On(Dr),
    iE = On(Li),
    aE = On(Di),
    lE = On(Ii),
    Le = Qn;
  ((Mi && Le(new Mi(new ArrayBuffer(1))) != sf) ||
    (Dr && Le(new Dr()) != ef) ||
    (Li && Le(Li.resolve()) != nf) ||
    (Di && Le(new Di()) != rf) ||
    (Ii && Le(new Ii()) != of)) &&
    (Le = function (t) {
      var e = Qn(t),
        n = e == rE ? t.constructor : void 0,
        r = n ? On(n) : "";
      if (r)
        switch (r) {
          case oE:
            return sf;
          case sE:
            return ef;
          case iE:
            return nf;
          case aE:
            return rf;
          case lE:
            return of;
        }
      return e;
    });
  var cE = Object.prototype,
    uE = cE.hasOwnProperty;
  function fE(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && uE.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var af = Re.Uint8Array;
  function Ea(t) {
    var e = new t.constructor(t.byteLength);
    return new af(e).set(new af(t)), e;
  }
  function hE(t, e) {
    var n = Ea(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var pE = /\w*$/;
  function dE(t) {
    var e = new t.constructor(t.source, pE.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var lf = Oe ? Oe.prototype : void 0,
    cf = lf ? lf.valueOf : void 0;
  function gE(t) {
    return cf ? Object(cf.call(t)) : {};
  }
  function mE(t, e) {
    var n = Ea(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var vE = "[object Boolean]",
    bE = "[object Date]",
    yE = "[object Map]",
    _E = "[object Number]",
    wE = "[object RegExp]",
    xE = "[object Set]",
    kE = "[object String]",
    SE = "[object Symbol]",
    AE = "[object ArrayBuffer]",
    TE = "[object DataView]",
    EE = "[object Float32Array]",
    OE = "[object Float64Array]",
    CE = "[object Int8Array]",
    RE = "[object Int16Array]",
    jE = "[object Int32Array]",
    $E = "[object Uint8Array]",
    PE = "[object Uint8ClampedArray]",
    IE = "[object Uint16Array]",
    ME = "[object Uint32Array]";
  function LE(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case AE:
        return Ea(t);
      case vE:
      case bE:
        return new r(+t);
      case TE:
        return hE(t);
      case EE:
      case OE:
      case CE:
      case RE:
      case jE:
      case $E:
      case PE:
      case IE:
      case ME:
        return mE(t);
      case yE:
        return new r();
      case _E:
      case kE:
        return new r(t);
      case wE:
        return dE(t);
      case xE:
        return new r();
      case SE:
        return gE(t);
    }
  }
  function DE(t) {
    return typeof t.constructor == "function" && !Hp(t) ? ZS(BT(t)) : {};
  }
  var zE = "[object Map]";
  function NE(t) {
    return Xn(t) && Le(t) == zE;
  }
  var uf = Wn && Wn.isMap,
    FE = uf ? Sa(uf) : NE,
    BE = "[object Set]";
  function UE(t) {
    return Xn(t) && Le(t) == BE;
  }
  var ff = Wn && Wn.isSet,
    VE = ff ? Sa(ff) : UE,
    Xp = "[object Arguments]",
    HE = "[object Array]",
    qE = "[object Boolean]",
    KE = "[object Date]",
    WE = "[object Error]",
    Yp = "[object Function]",
    GE = "[object GeneratorFunction]",
    ZE = "[object Map]",
    JE = "[object Number]",
    td = "[object Object]",
    QE = "[object RegExp]",
    XE = "[object Set]",
    YE = "[object String]",
    tO = "[object Symbol]",
    eO = "[object WeakMap]",
    nO = "[object ArrayBuffer]",
    rO = "[object DataView]",
    oO = "[object Float32Array]",
    sO = "[object Float64Array]",
    iO = "[object Int8Array]",
    aO = "[object Int16Array]",
    lO = "[object Int32Array]",
    cO = "[object Uint8Array]",
    uO = "[object Uint8ClampedArray]",
    fO = "[object Uint16Array]",
    hO = "[object Uint32Array]",
    At = {};
  At[Xp] =
    At[HE] =
    At[nO] =
    At[rO] =
    At[qE] =
    At[KE] =
    At[oO] =
    At[sO] =
    At[iO] =
    At[aO] =
    At[lO] =
    At[ZE] =
    At[JE] =
    At[td] =
    At[QE] =
    At[XE] =
    At[YE] =
    At[tO] =
    At[cO] =
    At[uO] =
    At[fO] =
    At[hO] =
      !0;
  At[WE] = At[Yp] = At[eO] = !1;
  function lo(t, e, n, r, o, s) {
    var i;
    if (i !== void 0) return i;
    if (!Kn(t)) return t;
    var a = sn(t);
    if (a) i = fE(t);
    else {
      var l = Le(t),
        c = l == Yp || l == GE;
      if (Wp(t)) return ZT(t);
      if (l == td || l == Xp || (c && !o)) i = c ? {} : DE(t);
      else {
        if (!At[l]) return o ? t : {};
        i = LE(t, l);
      }
    }
    s || (s = new Yn());
    var u = s.get(t);
    if (u) return u;
    s.set(t, i),
      VE(t)
        ? t.forEach(function (f) {
            i.add(lo(f, e, n, f, t, s));
          })
        : FE(t) &&
          t.forEach(function (f, g) {
            i.set(g, lo(f, e, n, g, t, s));
          });
    var p = nE,
      h = a ? void 0 : p(t);
    return (
      oA(h || t, function (f, g) {
        h && ((g = f), (f = t[g])), Vp(i, g, lo(f, e, n, g, t, s));
      }),
      i
    );
  }
  var pO = 1,
    dO = 4;
  function Qe(t) {
    return lo(t, pO | dO);
  }
  function gO(t, e) {
    return t != null && e in Object(t);
  }
  function mO(t, e, n) {
    e = as(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = Ta(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && xa(o) && wa(i, o) && (sn(t) || ka(t)));
  }
  function vO(t, e) {
    return t != null && mO(t, e, gO);
  }
  function bO(t, e, n, r) {
    if (!Kn(t)) return t;
    e = as(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = Ta(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = Kn(u) ? u : wa(e[o + 1]) ? [] : {});
      }
      Vp(a, l, c), (a = a[l]);
    }
    return t;
  }
  function yO(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = LT(t, i);
      n(a, i) && bO(s, as(i, t), a);
    }
    return s;
  }
  function _O(t, e) {
    return yO(t, e, function (n, r) {
      return vO(t, r);
    });
  }
  var Oa = FT(function (t, e) {
    return t == null ? {} : _O(t, e);
  });
  const ed = (t, e) => {
      const n = t.__vccOpts || t;
      for (const [r, o] of e) n[r] = o;
      return n;
    },
    wO = {},
    xO = {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "h-6 w-6",
    };
  function kO(t, e) {
    return (
      P(),
      L(
        "svg",
        xO,
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
  const SO = ed(wO, [["render", kO]]),
    Ca = (t, e, n) => {
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
  function AO(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function to(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var nd = { exports: {} };
  (function (t, e) {
    (function (n) {
      t.exports = n();
    })(function () {
      return (function () {
        function n(r, o, s) {
          function i(c, u) {
            if (!o[c]) {
              if (!r[c]) {
                var p = typeof to == "function" && to;
                if (!u && p) return p(c, !0);
                if (a) return a(c, !0);
                var h = new Error("Cannot find module '" + c + "'");
                throw ((h.code = "MODULE_NOT_FOUND"), h);
              }
              var f = (o[c] = { exports: {} });
              r[c][0].call(
                f.exports,
                function (g) {
                  var m = r[c][1][g];
                  return i(m || g);
                },
                f,
                f.exports,
                n,
                r,
                o,
                s,
              );
            }
            return o[c].exports;
          }
          for (var a = typeof to == "function" && to, l = 0; l < s.length; l++) i(s[l]);
          return i;
        }
        return n;
      })()(
        {
          1: [
            function (n, r, o) {
              function s(I, d, S) {
                return (d = g(d)), i(I, p() ? Reflect.construct(d, S || [], g(I).constructor) : d.apply(I, S));
              }
              function i(I, d) {
                if (d && (m(d) === "object" || typeof d == "function")) return d;
                if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return a(I);
              }
              function a(I) {
                if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return I;
              }
              function l(I, d) {
                if (typeof d != "function" && d !== null)
                  throw new TypeError("Super expression must either be null or a function");
                (I.prototype = Object.create(d && d.prototype, {
                  constructor: { value: I, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(I, "prototype", { writable: !1 }),
                  d && f(I, d);
              }
              function c(I) {
                var d = typeof Map == "function" ? new Map() : void 0;
                return (c = function (S) {
                  if (S === null || !h(S)) return S;
                  if (typeof S != "function") throw new TypeError("Super expression must either be null or a function");
                  if (d !== void 0) {
                    if (d.has(S)) return d.get(S);
                    d.set(S, C);
                  }
                  function C() {
                    return u(S, arguments, g(this).constructor);
                  }
                  return (
                    (C.prototype = Object.create(S.prototype, {
                      constructor: { value: C, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    f(C, S)
                  );
                })(I);
              }
              function u(I, d, S) {
                if (p()) return Reflect.construct.apply(null, arguments);
                var C = [null];
                C.push.apply(C, d);
                var J = new (I.bind.apply(I, C))();
                return S && f(J, S.prototype), J;
              }
              function p() {
                try {
                  var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch {}
                return (p = function () {
                  return !!I;
                })();
              }
              function h(I) {
                try {
                  return Function.toString.call(I).indexOf("[native code]") !== -1;
                } catch {
                  return typeof I == "function";
                }
              }
              function f(I, d) {
                return (f = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (S, C) {
                      return (S.__proto__ = C), S;
                    })(I, d);
              }
              function g(I) {
                return (g = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (d) {
                      return d.__proto__ || Object.getPrototypeOf(d);
                    })(I);
              }
              function m(I) {
                return (m =
                  typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                    ? function (d) {
                        return typeof d;
                      }
                    : function (d) {
                        return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype
                          ? "symbol"
                          : typeof d;
                      })(I);
              }
              function _(I, d) {
                if (!(I instanceof d)) throw new TypeError("Cannot call a class as a function");
              }
              function x(I, d) {
                for (var S = 0; S < d.length; S++) {
                  var C = d[S];
                  (C.enumerable = C.enumerable || !1),
                    (C.configurable = !0),
                    "value" in C && (C.writable = !0),
                    Object.defineProperty(I, w(C.key), C);
                }
              }
              function b(I, d, S) {
                return d && x(I.prototype, d), Object.defineProperty(I, "prototype", { writable: !1 }), I;
              }
              function w(I) {
                var d = k(I, "string");
                return m(d) == "symbol" ? d : String(d);
              }
              function k(I, d) {
                if (m(I) != "object" || !I) return I;
                var S = I[Symbol.toPrimitive];
                if (S !== void 0) {
                  var C = S.call(I, d);
                  if (m(C) != "object") return C;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(I);
              }
              var T = function (I, d) {
                  var S = I.length,
                    C = d - 20;
                  C < 0 && (C = 0);
                  var J = d + 20;
                  J > S && (J = S);
                  var et = function (q) {
                      return q.charCodeAt(0).toString(16).toUpperCase();
                    },
                    K = function (q, at, Ut) {
                      return q
                        .substr(at, Ut)
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
                    prologTrunc: C > 0,
                    prologText: K(I, C, d - C),
                    tokenText: K(I, d, 1),
                    epilogText: K(I, d + 1, J - (d + 1)),
                    epilogTrunc: J < S,
                  };
                },
                z = (function () {
                  function I(d, S, C) {
                    var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                      et = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                      K = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                    _(this, I),
                      (this.type = d),
                      (this.value = S),
                      (this.text = C),
                      (this.pos = J),
                      (this.line = et),
                      (this.column = K);
                  }
                  return (
                    b(I, [
                      {
                        key: "toString",
                        value: function () {
                          var d =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : function (S, C) {
                                  return C;
                                };
                          return (
                            "".concat(d("type", this.type), " ") +
                            "(value: ".concat(d("value", JSON.stringify(this.value)), ", ") +
                            "text: ".concat(d("text", JSON.stringify(this.text)), ", ") +
                            "pos: ".concat(d("pos", this.pos), ", ") +
                            "line: ".concat(d("line", this.line), ", ") +
                            "column: ".concat(d("column", this.column), ")")
                          );
                        },
                      },
                      {
                        key: "isA",
                        value: function (d, S) {
                          return d === this.type && (arguments.length !== 2 || S === this.value);
                        },
                      },
                    ]),
                    I
                  );
                })(),
                V = (function (I) {
                  function d(S, C, J, et, K) {
                    var q;
                    return (
                      _(this, d),
                      ((q = s(this, d, [S])).name = "ParsingError"),
                      (q.message = S),
                      (q.pos = C),
                      (q.line = J),
                      (q.column = et),
                      (q.input = K),
                      q
                    );
                  }
                  return (
                    l(d, c(Error)),
                    b(d, [
                      {
                        key: "toString",
                        value: function () {
                          for (
                            var S = T(this.input, this.pos),
                              C = "line ".concat(this.line, " (column ").concat(this.column, "): "),
                              J = "",
                              et = 0;
                            et < C.length + S.prologText.length;
                            et++
                          )
                            J += " ";
                          return (
                            "Parsing Error: " +
                            this.message +
                            `
` +
                            C +
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
                    d
                  );
                })(),
                H = (function () {
                  function I(d) {
                    _(this, I),
                      (this._tokenizr = d),
                      (this._data = {}),
                      (this._repeat = !1),
                      (this._reject = !1),
                      (this._ignore = !1),
                      (this._match = null);
                  }
                  return (
                    b(I, [
                      {
                        key: "data",
                        value: function (d, S) {
                          var C = this._data[d];
                          return arguments.length === 2 && (this._data[d] = S), C;
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
                          var d;
                          return (d = this._tokenizr).push.apply(d, arguments), this;
                        },
                      },
                      {
                        key: "pop",
                        value: function () {
                          var d;
                          return (d = this._tokenizr).pop.apply(d, arguments);
                        },
                      },
                      {
                        key: "state",
                        value: function () {
                          var d, S;
                          return arguments.length > 0
                            ? ((S = this._tokenizr).state.apply(S, arguments), this)
                            : (d = this._tokenizr).state.apply(d, arguments);
                        },
                      },
                      {
                        key: "tag",
                        value: function () {
                          var d;
                          return (d = this._tokenizr).tag.apply(d, arguments), this;
                        },
                      },
                      {
                        key: "tagged",
                        value: function () {
                          var d;
                          return (d = this._tokenizr).tagged.apply(d, arguments);
                        },
                      },
                      {
                        key: "untag",
                        value: function () {
                          var d;
                          return (d = this._tokenizr).untag.apply(d, arguments), this;
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
                        value: function (d, S) {
                          return (
                            arguments.length < 2 && (S = this._match[0]),
                            this._tokenizr._log(
                              "    ACCEPT: type: ".concat(d, ", value: ") +
                                ""
                                  .concat(JSON.stringify(S), " (")
                                  .concat(m(S), '), text: "')
                                  .concat(this._match[0], '"'),
                            ),
                            this._tokenizr._pending.push(
                              new z(
                                d,
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
                    I
                  );
                })(),
                X = (function () {
                  function I() {
                    _(this, I),
                      (this._before = null),
                      (this._after = null),
                      (this._finish = null),
                      (this._rules = []),
                      (this._debug = !1),
                      this.reset();
                  }
                  return (
                    b(I, [
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
                            (this._ctx = new H(this)),
                            this
                          );
                        },
                      },
                      {
                        key: "error",
                        value: function (d) {
                          return new V(d, this._pos, this._line, this._column, this._input);
                        },
                      },
                      {
                        key: "debug",
                        value: function (d) {
                          return (this._debug = d), this;
                        },
                      },
                      {
                        key: "_log",
                        value: function (d) {
                          this._debug && console.log("tokenizr: ".concat(d));
                        },
                      },
                      {
                        key: "input",
                        value: function (d) {
                          if (typeof d != "string") throw new Error('parameter "input" not a String');
                          return this.reset(), (this._input = d), (this._len = d.length), this;
                        },
                      },
                      {
                        key: "push",
                        value: function (d) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof d != "string") throw new Error('parameter "state" not a String');
                          return (
                            this._log(
                              "    STATE (PUSH): " +
                                "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                "new: <".concat(d, ">"),
                            ),
                            this._state.push(d),
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
                        value: function (d) {
                          if (arguments.length === 1) {
                            if (typeof d != "string") throw new Error('parameter "state" not a String');
                            return (
                              this._log(
                                "    STATE (SET): " +
                                  "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                  "new: <".concat(d, ">"),
                              ),
                              (this._state[this._state.length - 1] = d),
                              this
                            );
                          }
                          if (arguments.length === 0) return this._state[this._state.length - 1];
                          throw new Error("invalid number of arguments");
                        },
                      },
                      {
                        key: "tag",
                        value: function (d) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof d != "string") throw new Error('parameter "tag" not a String');
                          return this._log("    TAG (ADD): ".concat(d)), (this._tag[d] = !0), this;
                        },
                      },
                      {
                        key: "tagged",
                        value: function (d) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof d != "string") throw new Error('parameter "tag" not a String');
                          return this._tag[d] === !0;
                        },
                      },
                      {
                        key: "untag",
                        value: function (d) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof d != "string") throw new Error('parameter "tag" not a String');
                          return this._log("    TAG (DEL): ".concat(d)), delete this._tag[d], this;
                        },
                      },
                      {
                        key: "before",
                        value: function (d) {
                          return (this._before = d), this;
                        },
                      },
                      {
                        key: "after",
                        value: function (d) {
                          return (this._after = d), this;
                        },
                      },
                      {
                        key: "finish",
                        value: function (d) {
                          return (this._finish = d), this;
                        },
                      },
                      {
                        key: "rule",
                        value: function (d, S, C) {
                          var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                          if (arguments.length === 2 && typeof S == "function") {
                            var et = [d, S];
                            (S = et[0]), (C = et[1]), (d = "*");
                          } else if (arguments.length === 3 && typeof S == "function") {
                            var K = [d, S, C];
                            (S = K[0]), (C = K[1]), (J = K[2]), (d = "*");
                          }
                          if (typeof d != "string") throw new Error('parameter "state" not a String');
                          if (!(m(S) === "object" && S instanceof RegExp))
                            throw new Error('parameter "pattern" not a RegExp');
                          if (typeof C != "function") throw new Error('parameter "action" not a Function');
                          if (typeof J != "string") throw new Error('parameter "name" not a String');
                          d = d.split(/\s*,\s*/g).map(function (at) {
                            var Ut = at.split(/\s+/g),
                              $t = Ut.filter(function (wt) {
                                return wt.match(/^#/) === null;
                              }),
                              Gt = Ut.filter(function (wt) {
                                return wt.match(/^#/) !== null;
                              }).map(function (wt) {
                                return wt.replace(/^#/, "");
                              });
                            if ($t.length !== 1) throw new Error("exactly one state required");
                            return { state: $t[0], tags: Gt };
                          });
                          var q = "g";
                          try {
                            typeof new RegExp("", "y").sticky == "boolean" && (q = "y");
                          } catch {}
                          return (
                            typeof S.multiline == "boolean" && S.multiline && (q += "m"),
                            typeof S.dotAll == "boolean" && S.dotAll && (q += "s"),
                            typeof S.ignoreCase == "boolean" && S.ignoreCase && (q += "i"),
                            typeof S.unicode == "boolean" && S.unicode && (q += "u"),
                            (S = new RegExp(S.source, q)),
                            this._log("rule: configure rule (state: ".concat(d, ", pattern: ").concat(S.source, ")")),
                            this._rules.push({ state: d, pattern: S, action: C, name: J }),
                            this
                          );
                        },
                      },
                      {
                        key: "_progress",
                        value: function (d, S) {
                          for (var C = this._line, J = this._column, et = this._input, K = d; K < S; K++) {
                            var q = et.charAt(K);
                            q === "\r"
                              ? (this._column = 1)
                              : q ===
                                  `
`
                                ? (this._line++, (this._column = 1))
                                : q === "	"
                                  ? (this._column += 8 - (this._column % 8))
                                  : this._column++;
                          }
                          this._log(
                            "    PROGRESS: characters: ".concat(S - d, ", ") +
                              "from: <line ".concat(C, ", column ").concat(J, ">, ") +
                              "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                          );
                        },
                      },
                      {
                        key: "_tokenize",
                        value: function () {
                          var d = this,
                            S = function () {
                              d._eof ||
                                (d._finish !== null && d._finish.call(d._ctx, d._ctx),
                                (d._eof = !0),
                                d._pending.push(new z("EOF", "", "", d._pos, d._line, d._column)));
                            };
                          if (!(this._stopped || this._pos >= this._len)) {
                            for (var C = !0; C; ) {
                              if (((C = !1), this._debug)) {
                                var J = T(this._input, this._pos),
                                  et = Object.keys(this._tag)
                                    .map(function (qt) {
                                      return "#".concat(qt);
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
                              for (var K = 0; K < this._rules.length; K++) {
                                if (this._debug) {
                                  var q = this._rules[K].state
                                    .map(function (qt) {
                                      var je = qt.state;
                                      return (
                                        qt.tags.length > 0 &&
                                          (je +=
                                            " " +
                                            qt.tags
                                              .map(function (jn) {
                                                return "#".concat(jn);
                                              })
                                              .join(" ")),
                                        je
                                      );
                                    })
                                    .join(", ");
                                  this._log(
                                    "  RULE: state(s): <".concat(q, ">, ") +
                                      "pattern: ".concat(this._rules[K].pattern.source),
                                  );
                                }
                                var at = !1,
                                  Ut = this._rules[K].state.map(function (qt) {
                                    return qt.state;
                                  }),
                                  $t = Ut.indexOf("*");
                                if (($t < 0 && ($t = Ut.indexOf(this._state[this._state.length - 1])), $t >= 0)) {
                                  at = !0;
                                  var Gt = this._rules[K].state[$t].tags;
                                  (Gt = Gt.filter(function (qt) {
                                    return !d._tag[qt];
                                  })).length > 0 && (at = !1);
                                }
                                if (at) {
                                  this._rules[K].pattern.lastIndex = this._pos;
                                  var wt = this._rules[K].pattern.exec(this._input);
                                  if (
                                    ((this._rules[K].pattern.lastIndex = this._pos),
                                    (wt = this._rules[K].pattern.exec(this._input)) !== null && wt.index === this._pos)
                                  ) {
                                    if (
                                      (this._debug && this._log("    MATCHED: " + JSON.stringify(wt)),
                                      (this._ctx._match = wt),
                                      (this._ctx._repeat = !1),
                                      (this._ctx._reject = !1),
                                      (this._ctx._ignore = !1),
                                      this._before !== null &&
                                        this._before.call(this._ctx, this._ctx, wt, this._rules[K]),
                                      this._rules[K].action.call(this._ctx, this._ctx, wt),
                                      this._after !== null &&
                                        this._after.call(this._ctx, this._ctx, wt, this._rules[K]),
                                      this._ctx._reject)
                                    )
                                      continue;
                                    if (this._ctx._repeat) {
                                      C = !0;
                                      break;
                                    }
                                    if (this._ctx._ignore) {
                                      if (
                                        (this._progress(this._pos, this._rules[K].pattern.lastIndex),
                                        (this._pos = this._rules[K].pattern.lastIndex),
                                        this._pos >= this._len)
                                      )
                                        return void S();
                                      C = !0;
                                      break;
                                    }
                                    if (this._pending.length > 0)
                                      return (
                                        this._progress(this._pos, this._rules[K].pattern.lastIndex),
                                        (this._pos = this._rules[K].pattern.lastIndex),
                                        void (this._pos >= this._len && S())
                                      );
                                    throw new Error(
                                      'action of pattern "' +
                                        this._rules[K].pattern.source +
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
                            var d = this._pending.shift();
                            return (
                              this._transaction.length > 0 && this._transaction[0].push(d),
                              this._log("TOKEN: ".concat(d.toString())),
                              d
                            );
                          }
                          return null;
                        },
                      },
                      {
                        key: "tokens",
                        value: function () {
                          for (var d, S = []; (d = this.token()) !== null; ) S.push(d);
                          return S;
                        },
                      },
                      {
                        key: "peek",
                        value: function (d) {
                          if ((d === void 0 && (d = 0), d >= this._pending.length)) {
                            this._pending.length === 0 && this._tokenize();
                            for (var S = 0; S < d - this._pending.length; S++) this._tokenize();
                          }
                          if (d >= this._pending.length)
                            throw new Error("not enough tokens available for peek operation");
                          return this._log("PEEK: ".concat(this._pending[d].toString())), this._pending[d];
                        },
                      },
                      {
                        key: "skip",
                        value: function (d) {
                          d === void 0 && (d = 1);
                          for (var S = 0; S < this._pending.length + d; S++) this._tokenize();
                          if (d > this._pending.length)
                            throw new Error("not enough tokens available for skip operation");
                          for (; d-- > 0; ) this.token();
                          return this;
                        },
                      },
                      {
                        key: "consume",
                        value: function (d, S) {
                          for (var C = this, J = 0; J < this._pending.length + 1; J++) this._tokenize();
                          if (this._pending.length === 0)
                            throw new Error("not enough tokens available for consume operation");
                          var et = this.token();
                          this._log("CONSUME: ".concat(et.toString()));
                          var K = function () {
                            throw new V(
                              "expected: <type: "
                                .concat(d, ", value: ")
                                .concat(JSON.stringify(S), " (")
                                .concat(m(S), ")>, ") +
                                "found: <type: "
                                  .concat(et.type, ", value: ")
                                  .concat(JSON.stringify(et.value), " (")
                                  .concat(m(et.value), ")>"),
                              et.pos,
                              et.line,
                              et.column,
                              C._input,
                            );
                          };
                          return (
                            arguments.length !== 2 || et.isA(d, S) ? et.isA(d) || K() : K(JSON.stringify(S), m(S)), et
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
                          var d = this._transaction.shift();
                          return (
                            this._transaction.length > 0 && (this._transaction[0] = this._transaction[0].concat(d)),
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
                          var d = this._transaction.shift();
                          return (
                            (this._pending = d.concat(this._pending)),
                            this._log("ROLLBACK: level ".concat(this._transaction.length)),
                            this
                          );
                        },
                      },
                      {
                        key: "alternatives",
                        value: function () {
                          for (var d = null, S = [], C = arguments.length, J = new Array(C), et = 0; et < C; et++)
                            J[et] = arguments[et];
                          for (var K = 0; K < J.length; K++)
                            try {
                              this.begin(), (d = J[K].call(this)), this.commit();
                              break;
                            } catch (q) {
                              this._log("EXCEPTION: ".concat(q.toString())),
                                S.push({ ex: q, depth: this.depth() }),
                                this.rollback();
                              continue;
                            }
                          if (d === null && S.length > 0)
                            throw (S = S.sort(function (q, at) {
                              return q.depth - at.depth;
                            }))[0].ex;
                          return d;
                        },
                      },
                    ]),
                    I
                  );
                })();
              (X.Token = z), (X.ParsingError = V), (X.ActionContext = H), (r.exports = X);
            },
            {},
          ],
        },
        {},
        [1],
      )(1);
    });
  })(nd);
  var TO = nd.exports;
  const EO = AO(TO);
  function rd(t) {
    const e = new EO();
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
  function OO(t, e) {
    if (!t || !e || typeof t != "string" || typeof e != "string" || t.length == 0 || e.length == 0) return [];
    let n = [],
      r = t.indexOf(e, 0);
    for (; r != -1; ) n.push(r), (r = t.indexOf(e, r + 1));
    return n;
  }
  function CO(t, e, n, r, o) {
    const s = r - n;
    s != e.length &&
      console.log("Warning: annotation text length", e.length, ": ", e, " and annotation length do not match", s);
    let a = OO(t, e).filter((l) => Math.abs(l - n) <= o);
    return a.length == 1 ? { start: a[0], end: a[0] + e.length - 1, modified: !0 } : { start: n, end: r, modified: !1 };
  }
  function RO(t, e, n, r) {
    const o = r,
      s = {},
      i = {};
    rd(t).forEach((h) => {
      (s[h.pos] = h), (i[h.pos + h.value.length - 1] = h);
    });
    let a = -1,
      l = -1;
    for (let h = 0; h < o; h++)
      a == -1 && s[e + h] && (a = e + h),
        a == -1 && s[e - h] && (a = e - h),
        l == -1 && i[n + h] && (l = n + h),
        l == -1 && i[n - h] && (l = n - h);
    let c = !0,
      u = !0,
      p = !0;
    return (
      a == -1 && ((a = e), (u = !1)), l == -1 && ((l = n), (p = !1)), (c = u || p), { start: a, end: l, modified: c }
    );
  }
  const jO = (t) => {
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
  class $O {
    constructor(e) {
      Z(this, "mapStartCharIndexToToken", {});
      Z(this, "mapStopCharIndexToToken", {});
      (this.text = e),
        rd(e).forEach((n) => {
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
      const r = this.mapStartCharIndexToToken[e] ?? this.mapStartCharIndexToToken[n],
        o = this.mapStopCharIndexToToken[n] ?? this.mapStopCharIndexToToken[e];
      return { start: r, end: o, modified: r !== e || o !== n };
    }
  }
  const PO = { key: 0 },
    IO = { class: "label cursor-pointer gap-2" },
    MO = ["name", "disabled", "checked"],
    LO = { class: "w-full" },
    DO = ["disabled", "data-tip"],
    hf = Mt({
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
            const p = n.snapper.fixOffset(u.newStart, u.newEnd);
            (u.newStart = p.start),
              (u.newEnd = p.end),
              p.modified && r("modifyAnnotations", { ...p, id: u.annotation.id });
          },
          a = function (u) {
            i(u), u.confirmStartUpdating();
          },
          l = function (u) {
            i(u), u.confirmUpdate();
          },
          c = function (u) {
            r("processesAnnotation", Oa(u.annotation, ["id", "start", "end"]));
          };
        return (u, p) =>
          u.annotation
            ? (P(),
              L("div", PO, [
                j("label", IO, [
                  u.annotation
                    ? (P(),
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
                        MO,
                      ))
                    : Pt("", !0),
                  j("div", LO, [
                    st(
                      F(So),
                      {
                        annotations: [u.annotation],
                        lines: F(Ca)(u.textLines, u.annotation.start, u.annotation.end).lines,
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
                    ? (P(),
                      L(
                        "button",
                        {
                          key: 1,
                          disabled: u.disabled,
                          class: "btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]",
                          "data-tip": u.tip,
                          onClick: o,
                        },
                        [st(SO)],
                        8,
                        DO,
                      ))
                    : Pt("", !0),
                ]),
              ]))
            : Pt("", !0);
      },
    }),
    zO = { class: "py-2" },
    NO = { class: "text-sm text-content" },
    od = Mt({
      __name: "AnnotationMetadata",
      props: { annotation: {} },
      setup(t) {
        return (e, n) => {
          var r;
          return (
            P(),
            L(
              lt,
              null,
              [
                j("p", zO, [
                  n[0] || (n[0] = j("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                  Fe(" " + yt((r = e.annotation.metadata) == null ? void 0 : r.lineLinguisticCharacteristic), 1),
                ]),
                n[1] || (n[1] = j("strong", { class: "underline" }, "Metadata", -1)),
                j("ul", NO, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(
                      e.annotation.properties,
                      (o) => (
                        P(),
                        L("li", { key: o.id_name }, [j("strong", null, yt(o.label) + ":", 1), Fe(" " + yt(o.name), 1)])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              64,
            )
          );
        };
      },
    }),
    sd = {
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
    id = gS(sd),
    FO = () => {
      const t = {};
      return (
        Object.entries(id).forEach(([e, n]) => {
          t[e] = n ? { ...n, border: "rgb(0, 128, 0)" } : null;
        }),
        t
      );
    },
    BO = FO(),
    UO = { class: "card-body p-2" },
    VO = { key: 0, role: "alert", class: "alert alert-error" },
    HO = { class: "flex justify-between items-center" },
    qO = { class: "flex gap-2 justify-center" },
    KO = { class: "flex gap-2" },
    WO = ["disabled"],
    GO = { class: "annotation-body" },
    ZO = { class: "flex items-center" },
    JO = { class: "flex-grow" },
    QO = { class: "pt-2 text-sm text-gray-400" },
    XO = { key: 0 },
    YO = Mt({
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
        const n = ut(),
          r = t,
          { originalAnnotation: o } = r,
          s = e;
        Se(
          () => r.selected,
          (h) => {
            n.value = h;
          },
        );
        const i = (h) => {
            s("confirmAnnotation", o, h);
          },
          a = () => {
            s("deleteAnnotation", o);
          },
          l = () => {
            const h = o.type;
            return `--text-color-custom:${sd[h]}`;
          },
          c = (h) => {
            (n.value = h === n.value ? null : h), s("changeSelected", o, h);
          },
          u = () => {
            s("onHighlight", r.duplicates);
          },
          p = () => {
            s("highlightAnnotation", r.originalAnnotation);
          };
        return (h, f) => {
          var m;
          const g = sh("router-link");
          return (
            P(),
            L(
              "div",
              { class: Lt(["grid gap-2 ", { "grid-cols-1": !h.showMetadata, "grid-cols-2": h.showMetadata }]) },
              [
                j(
                  "div",
                  {
                    class: Lt([
                      "card border rounded-md w-full",
                      { "border-black": h.highlight, shadow: h.highlight, "opacity-20": h.disabled },
                    ]),
                  },
                  [
                    j("div", UO, [
                      h.error ? (P(), L("div", VO, "Annotatie niet bewaard, probeer opnieuw.")) : Pt("", !0),
                      j("div", HO, [
                        j("div", qO, [
                          j(
                            "button",
                            {
                              class: "badge badge-outline badge-sm text-color-custom cursor-pointer",
                              style: en(l()),
                              onClick: p,
                            },
                            yt(F(o).type),
                            5,
                          ),
                          h.duplicates.length > 1
                            ? (P(),
                              L(
                                "button",
                                {
                                  key: 0,
                                  class: "badge badge-sm badge-warning cursor-pointer",
                                  onClick: f[0] || (f[0] = (_) => u()),
                                },
                                " Duplicaat? (" + yt(F(o).id) + ") ",
                                1,
                              ))
                            : Pt("", !0),
                        ]),
                        j("div", KO, [
                          j(
                            "button",
                            {
                              disabled: h.disabled,
                              class: "btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left",
                              "data-tip": "Verwijder annotatie",
                              onClick: f[1] || (f[1] = (_) => a()),
                            },
                            [st(F(_S))],
                            8,
                            WO,
                          ),
                        ]),
                      ]),
                      j("div", null, [
                        j("div", GO, [
                          h.annotation
                            ? (P(),
                              Bn(
                                hf,
                                {
                                  key: 0,
                                  annotation: h.annotation,
                                  tip: "Bewaar gewijzigde annotatie",
                                  "selected-annotation": n.value === "modified",
                                  disabled: h.disabled,
                                  "text-lines": h.textLines,
                                  "allow-edit": !0,
                                  snapper: h.snapper,
                                  onChangeSelected: f[2] || (f[2] = (_) => c("modified")),
                                  onConfirmAnnotation: f[3] || (f[3] = (_) => i("modified")),
                                  onModifyAnnotations: f[4] || (f[4] = (_) => s("modifyAnnotations", _)),
                                  onProcessesAnnotation: f[5] || (f[5] = (_) => s("processesAnnotation", _)),
                                },
                                null,
                                8,
                                ["annotation", "selected-annotation", "disabled", "text-lines", "snapper"],
                              ))
                            : Pt("", !0),
                          f[8] || (f[8] = j("hr", null, null, -1)),
                          st(
                            hf,
                            {
                              annotation: F(o),
                              tip: "Bewaar originele annotatie",
                              "selected-annotation": n.value === "original",
                              disabled: h.disabled,
                              "text-lines": h.textLines,
                              onChangeSelected: f[6] || (f[6] = (_) => c("original")),
                              onConfirmAnnotation: f[7] || (f[7] = (_) => i("original")),
                            },
                            null,
                            8,
                            ["annotation", "selected-annotation", "disabled", "text-lines"],
                          ),
                        ]),
                        j("div", ZO, [
                          j("ul", JO, [
                            (P(!0),
                            L(
                              lt,
                              null,
                              Bt(h.appliedRules, (_) => (P(), L("li", { class: "badge badge-xs", key: _ }, yt(_), 1))),
                              128,
                            )),
                          ]),
                          st(
                            g,
                            {
                              class: "badge badge-info badge-xs badge-outline tooltip tooltip-left",
                              "data-tip": "Info over regels",
                              to: { name: "docs" },
                              target: "_blank",
                            },
                            { default: Ee(() => f[9] || (f[9] = [Fe(" i ")])), _: 1 },
                          ),
                        ]),
                        j("p", QO, [
                          f[10] || (f[10] = j("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                          Fe(" " + yt((m = F(o).metadata) == null ? void 0 : m.lineLinguisticCharacteristic), 1),
                        ]),
                      ]),
                    ]),
                  ],
                  2,
                ),
                h.showMetadata
                  ? (P(), L("div", XO, [st(od, { annotation: F(o) }, null, 8, ["annotation"])]))
                  : Pt("", !0),
              ],
              2,
            )
          );
        };
      },
    });
  function tC(t) {
    return Hi() ? (Cf(t), !0) : !1;
  }
  function ad(t) {
    return typeof t == "function" ? t() : F(t);
  }
  const eC = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const nC = (t) => t != null,
    co = () => {};
  function dn(t, e, n) {
    let r;
    It(n) ? (r = { evaluating: n }) : (r = {});
    const { lazy: o = !1, evaluating: s = void 0, shallow: i = !0, onError: a = co } = r,
      l = ut(!o),
      c = i ? Kf(e) : ut(e);
    let u = 0;
    return (
      wh(async (p) => {
        if (!l.value) return;
        u++;
        const h = u;
        let f = !1;
        s &&
          Promise.resolve().then(() => {
            s.value = !0;
          });
        try {
          const g = await t((m) => {
            p(() => {
              s && (s.value = !1), f || m();
            });
          });
          h === u && (c.value = g);
        } catch (g) {
          a(g);
        } finally {
          s && h === u && (s.value = !1), (f = !0);
        }
      }),
      o ? rt(() => ((l.value = !0), c.value)) : c
    );
  }
  const rC = eC ? window : void 0;
  function ai(t) {
    var e;
    const n = ad(t);
    return (e = n == null ? void 0 : n.$el) != null ? e : n;
  }
  function oC() {
    const t = ut(!1),
      e = ra();
    return (
      e &&
        ta(() => {
          t.value = !0;
        }, e),
      t
    );
  }
  function sC(t) {
    const e = oC();
    return rt(() => (e.value, !!t()));
  }
  function iC(t, e, n = {}) {
    const { root: r, rootMargin: o = "0px", threshold: s = 0, window: i = rC, immediate: a = !0 } = n,
      l = sC(() => i && "IntersectionObserver" in i),
      c = rt(() => {
        const g = ad(t);
        return (Array.isArray(g) ? g : [g]).map(ai).filter(nC);
      });
    let u = co;
    const p = ut(a),
      h = l.value
        ? Se(
            () => [c.value, ai(r), p.value],
            ([g, m]) => {
              if ((u(), !p.value || !g.length)) return;
              const _ = new IntersectionObserver(e, { root: ai(m), rootMargin: o, threshold: s });
              g.forEach((x) => x && _.observe(x)),
                (u = () => {
                  _.disconnect(), (u = co);
                });
            },
            { immediate: a, flush: "post" },
          )
        : co,
      f = () => {
        u(), h(), (p.value = !1);
      };
    return (
      tC(f),
      {
        isSupported: l,
        isActive: p,
        pause() {
          u(), (p.value = !1);
        },
        resume() {
          p.value = !0;
        },
        stop: f,
      }
    );
  }
  function aC(t = () => {}) {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(t)
      : setTimeout(() => {
          No(t);
        }, 300);
  }
  const lC = {
    props: {
      renderOnIdle: Boolean,
      unrender: Boolean,
      minHeight: Number,
      unrenderDelay: { type: Number, default: 1e4 },
    },
    setup(t) {
      const e = ut(!1),
        n = ut(),
        r = ut(0);
      let o, s;
      const { stop: i } = iC(
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
          aC(() => {
            (e.value = !0), t.unrender || i();
          }),
        { targetEl: n, shouldRender: e, fixedMinHeight: r }
      );
    },
  };
  function cC(t, e, n, r, o, s) {
    return (
      P(),
      L(
        "div",
        { ref: "targetEl", style: en(`min-height:${r.fixedMinHeight ? r.fixedMinHeight : n.minHeight}px`) },
        [r.shouldRender ? Ne(t.$slots, "default", { key: 0 }) : Pt("", !0)],
        4,
      )
    );
  }
  const uC = ed(lC, [["render", cC]]),
    fC = { class: "flex flex-col gap-3 h-full" },
    hC = { class: "card-title flex justify-between" },
    pC = { class: "gap-2 text-right" },
    dC = { class: "flex flex-col gap-2 overflow-auto" },
    gC = ["data-annotation"],
    mC = { class: "flex justify-end gap-2" },
    vC = Mt({
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
        const n = ut([]),
          r = ut(new Map());
        Se(
          () => t.highlightAnnotationIds,
          (p) => {
            u(p);
          },
        );
        const o = function (p, h) {
            h ? r.value.set(p.id, h) : r.value.delete(p.id);
          },
          s = (p) => {
            t.modifiedAnnotations.forEach((h) => {
              o(h.original, p);
            });
          },
          i = e,
          a = () => {
            i("confirmAnnotations", r.value);
          },
          l = (p, h) => {
            i("confirmAnnotation", p.id, h);
          },
          c = (p) => {
            i("deleteAnnotation", p.id);
          },
          u = (p) => {
            n.value = p;
          };
        return (p, h) => (
          P(),
          L("div", fC, [
            j("div", hC, [
              h[7] || (h[7] = j("div", { class: "flex-grow" }, "Aangepaste Annotaties", -1)),
              j("div", pC, [
                j(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: h[0] || (h[0] = (f) => s("modified")) },
                  " Selecteer alle aangepaste ",
                ),
                j(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: h[1] || (h[1] = (f) => s("original")) },
                  " Selecteer alle originele ",
                ),
              ]),
            ]),
            j("ul", dC, [
              (P(!0),
              L(
                lt,
                null,
                Bt(
                  p.modifiedAnnotations,
                  (f) => (
                    P(),
                    L(
                      "li",
                      { key: f.id, "data-annotation": f.id, ref_for: !0, ref: `annotation-${f.id}` },
                      [
                        st(
                          uC,
                          null,
                          {
                            default: Ee(() => [
                              st(
                                YO,
                                {
                                  annotation: f.modified,
                                  originalAnnotation: f.original,
                                  textLines: p.textLines,
                                  selected: r.value.get(f.id),
                                  duplicates: f.duplicates,
                                  highlight: n.value.includes(f.id),
                                  appliedRules: f.appliedRules,
                                  disabled: f.saving,
                                  error: f.error,
                                  showMetadata: p.showMetadata,
                                  snapper: p.snapper,
                                  onConfirmAnnotation: l,
                                  onDeleteAnnotation: c,
                                  onChangeSelected: o,
                                  onOnHighlight: u,
                                  onHighlightAnnotation: h[2] || (h[2] = (g) => i("highlightAnnotation", g)),
                                  onModifyAnnotations: h[3] || (h[3] = (g) => i("modifyAnnotations", g)),
                                  onProcessesAnnotation: h[4] || (h[4] = (g) => i("processesAnnotation", g)),
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
                      gC,
                    )
                  ),
                ),
                128,
              )),
            ]),
            h[8] || (h[8] = j("hr", null, null, -1)),
            j("div", mC, [
              j(
                "button",
                { class: "btn", onClick: h[5] || (h[5] = (f) => i("needsAttention")) },
                "Text heeft extra aandacht nodig",
              ),
              j("button", { class: "btn", onClick: h[6] || (h[6] = (f) => i("reviewDone")) }, "Text Verwerkt"),
              j("button", { class: "btn", onClick: a }, "Bevestig Selectie"),
            ]),
          ])
        );
      },
    }),
    bC = { class: "grid grid-cols-2 gap-2 overflow-auto h-full" },
    yC = { class: "border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed" },
    _C = Mt({
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
            n("processesAnnotation", Oa(l.annotation, ["id", "start", "end"]));
          },
          a = function (l) {
            n("showAnnotation", l.annotation);
          };
        return (l, c) => (
          P(),
          L("div", bC, [
            j("div", yC, [
              c[0] || (c[0] = j("div", { class: "text-lg font-bold" }, "Originele Tekst", -1)),
              st(F(So), { annotations: l.originalAnnotations, lines: l.textLines }, null, 8, ["annotations", "lines"]),
            ]),
            j("div", null, [
              c[1] || (c[1] = j("div", { class: "text-lg font-bold" }, "Verwerkte Tekst", -1)),
              st(
                F(So),
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
    wC = [
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
    xC = { class: "flex justify-center items-center gap-4" },
    kC = ["for"],
    SC = ["id", "value"],
    AC = { class: "pl-2 label-text" },
    TC = Mt({
      __name: "TypeFilter",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(t) {
        const e = kh(t, "modelValue");
        return (n, r) => (
          P(),
          L("div", xC, [
            r[1] || (r[1] = j("div", { class: "font-bold" }, "Filter:", -1)),
            (P(!0),
            L(
              lt,
              null,
              Bt(
                F(wC),
                (o) => (
                  P(),
                  L("div", { key: o, class: "form-control" }, [
                    j(
                      "label",
                      { for: o, class: "label cursor-pointer" },
                      [
                        Fo(
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
                            SC,
                          ),
                          [[oa, e.value]],
                        ),
                        j("span", AC, yt(o), 1),
                      ],
                      8,
                      kC,
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
  class Ra {
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
            c.forEach((u, p) => {
              i.append(`filters[${l}][${p}]`, `${u}`);
            });
        }),
        i
      );
    }
  }
  const EC = (t) => `${t.type}-${t.start}-${t.end}`;
  class OC {
    constructor(e, n) {
      Z(this, "name", "Duplicate rule");
      Z(this, "duplicateRuleSet", new Map());
      Z(this, "duplicates", new Map());
      (this.text = e), (this.annotations = n), this.mapAnnotations(n);
    }
    addAnnotationToRules(e) {
      const n = EC(e),
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
  class CC {
    constructor(e) {
      Z(this, "name");
      Z(this, "text");
      (this.name = "sanitize_annotation_rule"), (this.text = e);
    }
    apply(e) {
      const n = Qe(e);
      e.start < 0 && (n.start = 0), e.end >= this.text.length && (n.end = this.text.length - 1);
      const r = e.start != n.start || e.end != n.end;
      return { annotation: n, rule_applied: r };
    }
  }
  class un {
    constructor(e, n, r = !1, o = !1) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "rules");
      Z(this, "alwaysApplyFirstRule");
      Z(this, "stopWhenRuleApplied");
      var s;
      (this.annotationType = e),
        (this.name = "annotation_rule_set"),
        (this.rules = n),
        (this.text = ((s = n[0]) == null ? void 0 : s.text) || ""),
        (this.alwaysApplyFirstRule = r),
        (this.stopWhenRuleApplied = o);
    }
    apply(e, n = !1) {
      const r = (...a) => {
        n && console.log(...a);
      };
      r("apply ruleset", this.annotationType, this.rules),
        r(Oa(this, "rules", "alwaysApplyFirstRule", "stopWhenRuleApplied"));
      let o = !1;
      const s = [],
        i = (a) => {
          const l = this.rules[a],
            c = l.apply(e);
          return (
            r("	 -- apply: ", l.name, c.rule_applied),
            c.rule_applied && (s.push(l.name), (e = c.annotation), (o = c.rule_applied), this.stopWhenRuleApplied)
              ? { annotation: e, rule_applied: o, appliedRules: s }
              : null
          );
        };
      if (this.alwaysApplyFirstRule) {
        const a = i(0);
        if (a) return a;
      }
      for (let a = this.alwaysApplyFirstRule ? 1 : 0; a < this.rules.length; a++) {
        const l = i(a);
        if (l) return l;
      }
      return { annotation: e, rule_applied: o, appliedRules: s };
    }
  }
  class RC {
    constructor(e, n) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "max_shift");
      (this.name = "tokenize_rule"), (this.text = e), (this.max_shift = n);
    }
    apply(e) {
      const n = Qe(e);
      let r = this.max_shift;
      r < 0 && (r = 2 + Math.floor((e.end - e.start) / 3));
      const o = RO(this.text, e.start, e.end, r);
      return o.modified && ((n.start = o.start), (n.end = o.end)), { annotation: n, rule_applied: o.modified };
    }
  }
  const jC = (t, e, n) => {
      if (!n || !n.id) return console.warn("No property object", e, n), null;
      const r = e
        .substring(t.length + 1)
        .split(/(?=[A-Z])/)
        .map((o) => `${o.charAt(0).toUpperCase()}${o.slice(1)}`)
        .join(" ");
      return { id: n.id, id_name: n.id_name, label: r, name: n.name };
    },
    $C = (t, e) =>
      Object.keys(e)
        .map((n) => jC(t, n, e[n]))
        .filter((n) => !!n),
    PC = (t, e) => {
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
        metadata: { text: s, id: t.id, index: t.id, lineLinguisticCharacteristic: t.text_selection.text },
        color: id[i],
        hasOverride: t.hasOverride,
        properties: $C(i, t.properties),
      };
    };
  class IC {
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
          s = CO(this.text, o, e.start, e.end, this.maxShift);
        s.modified && ((r = !0), (n = Qe(e)), (n.start = s.start), (n.end = s.end));
      }
      return { annotation: n, rule_applied: r };
    }
  }
  class MC {
    constructor(e) {
      Z(this, "languageRuleSet");
      Z(this, "typographyRuleSet");
      Z(this, "orthographyRuleSet");
      Z(this, "lexisRuleSet");
      Z(this, "morphoSyntacticalRuleSet");
      Z(this, "handshiftRuleSet");
      Z(this, "defaultRuleSet");
      this.text = e;
      const n = new RC(e, 3),
        r = new IC(e, 3),
        o = new CC(e);
      (this.languageRuleSet = new un("language", [o, n], !0, !0)),
        (this.typographyRuleSet = new un("typography", [o, r, n], !0, !0)),
        (this.orthographyRuleSet = new un("orthography", [o, n, r], !0, !0)),
        (this.lexisRuleSet = new un("lexis", [o, n], !0, !0)),
        (this.morphoSyntacticalRuleSet = new un("morpho_syntactical", [o, r, n], !0, !1)),
        (this.handshiftRuleSet = new un("handshift", [o, n], !0, !0)),
        (this.defaultRuleSet = new un("default", [o], !0, !1));
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
        const r = PC(e, this.text);
        if (!r) {
          n(null);
          return;
        }
        n(this.runRules(r));
      });
    }
    runRules(e, n = !1) {
      const r = this._applyRules(e, n),
        o = r.rule_applied ? r.annotation : e;
      return (
        r.rule_applied && (o.color = BO[o.type]),
        {
          id: e.id,
          processed: o,
          original: e,
          modified: r.rule_applied ? r.annotation : null,
          appliedRules: r.appliedRules,
          saving: !1,
          error: !1,
        }
      );
    }
  }
  class LC {
    constructor() {
      Z(this, "annotationRepository", new Ra());
      Z(this, "annotationRuleSets");
      Z(this, "duplicateRule");
      Z(this, "id");
      Z(this, "text", "");
      Z(this, "annotations", ut(new Map()));
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
      (this.duplicateRule = new OC(this.text, n)),
        e.forEach((r) => {
          r.duplicates = this.duplicateRule.hasDuplicate(r.processed);
        });
    }
    createRulesSet(e) {
      (this.text = e), (this.annotationRuleSets = new MC(e));
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
      const o = this.annotations.value.get(r),
        { processed: s } = o;
      (s.end = e), (s.start = n);
    }
    modifyAnnotation({ start: e, end: n, id: r }) {
      const o = this.annotations.value.get(r),
        { processed: s, modified: i } = o;
      i || (o.modified = Qe(s)), (o.modified.end = n), (o.modified.start = e);
    }
    async confirmAnnotationLocal(e, n) {
      const r = this.annotations.value.get(e),
        o = Qe(n === "modified" ? r.modified : r.original);
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
  const li = (t) => {
      const e = Number(t);
      return isNaN(e) ? null : e;
    },
    DC = 25,
    To = Wo("searchStore", () => {
      const t = Qo(),
        e = Jo(),
        n = ut(li(t.query.pageSize) ?? DC),
        r = ut(li(t.query.page) ?? 1),
        o = ut(Date.now()),
        s = ut({ orderBy: t.query.orderBy ?? "title", ascending: t.query.ascending === "0" ? 0 : 1 }),
        i = { project: [3] };
      Object.entries(t.query).forEach(([b, w]) => {
        ["pageSize", "page"].includes(b) || (Array.isArray(w) ? (i[b] = w.map((k) => k)) : (i[b] = [w]));
      });
      const a = ut(Qe(i)),
        l = new Ra(),
        c = dn(async () => l.filters()),
        u = dn(async () => {
          const b = a.value,
            w = r.value,
            { ascending: k, orderBy: T } = s.value,
            z = o.value;
          return console.log("refresh", z), w ? l.listTexts(b, w, n.value, T, k) : { count: 0, results: [] };
        }),
        p = rt(() => {
          var b;
          return ((b = u.value) == null ? void 0 : b.data) ?? [];
        }),
        h = rt(() => {
          var b;
          return ((b = u.value) == null ? void 0 : b.count) ?? 0;
        }),
        f = rt(() => {
          var b;
          return ((b = u.value) == null ? void 0 : b.filters) ?? [];
        }),
        g = (b) => ((a.value = Qe(b)), e.replace({ query: { ...t.query, ...b } })),
        m = rt(() => Math.ceil(h.value / n.value)),
        _ = (b = 1) => {
          const w = li(b) ?? 1;
          let k = w < 1 ? 1 : w;
          const T = m.value;
          return (
            k > T && (k = T),
            (r.value = k),
            console.log("change page", m, k),
            e.replace({ query: { ...t.query, page: r.value } })
          );
        },
        x = (b, w) => (
          (s.value = { orderBy: b, ascending: w }), e.replace({ query: { ...t.query, orderBy: b, ascending: w } })
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
          data: p,
          searchFilters: f,
          count: h,
          searchResult: u,
          maxPage: m,
          refresh: () => (o.value = Date.now()),
          changePage: _,
          onSearch: g,
          changeOrder: x,
        }
      );
    }),
    ld = (t, e) => {
      const n = (t ?? 0) / e;
      return Math.ceil(n);
    },
    zi = Wo("paginationStore", () => {
      const t = To(),
        e = cd(),
        n = new Ra(),
        r = ut([]),
        o = async () => {
          const { ascending: f, orderBy: g } = t.sort,
            m = await n.paginate(t.filterValues, t.page, t.pageSize, g, f);
          return (r.value = m), m;
        },
        s = dn(async () => {
          const { ascending: f, orderBy: g } = t.sort;
          return (await n.paginate(t.filterValues, 1, 1, g, f))[0];
        }),
        i = dn(async () => {
          const { ascending: f, orderBy: g } = t.sort;
          return (await n.listTexts(t.filterValues, 1, 1, g, f)).count;
        }),
        a = dn(async () => {
          const { ascending: f, orderBy: g } = t.sort;
          return (await n.paginate(t.filterValues, i.value, 1, g, f))[0];
        });
      dn(() => o());
      const l = rt(() => r.value.findIndex((f) => f === e.id));
      return {
        firstId: s,
        lastId: a,
        next: async () => {
          const f = l.value;
          let g = f < 0 ? void 0 : r.value[f + 1];
          if (g) await e.changeId(g);
          else {
            if (t.page >= t.maxPage) return;
            if ((await t.changePage(t.page + 1), await o(), (g = r.value[0]), g == a.value)) {
              await t.changePage(t.page + 1);
              return;
            }
            g && g !== a.value && (await e.changeId(g));
          }
        },
        previous: async () => {
          const f = l.value,
            g = r.value.length;
          let m = f < 0 ? void 0 : r.value[f - 1];
          if (m) await e.changeId(m);
          else {
            if (t.page === 1 || (await t.changePage(t.page - 1), await o(), (m = r.value[g]), m == s.value)) return;
            m && (await e.changeId(m));
          }
        },
        toFirst: async () => {
          await e.changeId(s.value), await t.changePage(1);
        },
        toLast: async () => {
          const f = ld(i.value, t.pageSize);
          await e.changeId(a.value), await t.changePage(f);
        },
      };
    }),
    zC = (t, e, n, r) => {
      var s;
      if ((r && e.duplicates.length < 1) || (n && (!e.modified || e.hasOverride))) return !1;
      const o = ((s = e == null ? void 0 : e.original) == null ? void 0 : s.type) ?? "";
      return t.length === 0 || t.includes(o);
    },
    pf = (t, e) => (t.processed.start < e.processed.start ? -1 : 1),
    NC = (t, e, n, r) => (t.length === 0 && !n && !r ? e.sort(pf) : e.filter((s) => zC(t, s, n, r)).sort(pf)),
    cd = Wo("annotationStore", () => {
      const t = Qo(),
        e = Jo(),
        n = ut(Number(t.params.id)),
        r = dn(async () => {
          console.log("id", n.value);
          const d = new LC();
          if (!n.value) return null;
          try {
            const S = await d.getAnnotation(n.value);
            return { annotationStore: d, ...S };
          } catch (S) {
            console.error(S), console.error("Fout bij het laden van de annotaties");
          } finally {
            console.log("Total processed annotations", g.value.length),
              console.log("Total modified annotations", m.value.length),
              console.log("Total original annotations", f.value.length);
          }
          return null;
        }),
        o = rt(() => {
          var d;
          return ((d = r.value) == null ? void 0 : d.text) || "";
        }),
        s = rt(() => {
          var d;
          return ((d = r.value) == null ? void 0 : d.annotationStore) || null;
        }),
        i = rt(() => {
          var d;
          return ((d = r.value) == null ? void 0 : d.flags) || { needs_attention: !1, review_done: !1 };
        }),
        a = ut(!1),
        l = ut(!1),
        c = ut([]),
        u = rt(() => {
          var d, S;
          return ((S = (d = s.value) == null ? void 0 : d.annotationValues) == null ? void 0 : S.value) || [];
        }),
        p = rt(() => NC(c.value, u.value, a.value, l.value)),
        h = rt(() => u.value.length),
        f = rt(() => p.value.map((d) => d.original)),
        g = rt(() => p.value.map((d) => d.processed)),
        m = rt(() => p.value.filter((d) => !!d.modified || d.duplicates.length > 1)),
        _ = rt(() => p.value.filter((d) => d.duplicates.length > 1)),
        x = rt(() => u.value.filter((d) => d.hasOverride || !d.modified).length),
        b = rt(() => jO(o.value)),
        w = rt(() => new $O(o.value)),
        k = rt(() => {
          const d = r.value;
          return !d || d.id !== n.value;
        }),
        T = (d) => ((n.value = d), e.push({ name: "annotation", params: { id: d }, query: t.query }));
      return (
        Se(
          () => t.params.id,
          (d, S) => {
            const C = Number(d);
            C && n.value !== C && T(C);
          },
        ),
        {
          id: n,
          loading: k,
          changeId: T,
          fetchNewValue: r,
          textLines: b,
          snapper: w,
          originalAnnotations: f,
          processedAnnotations: g,
          modifiedAnnotations: m,
          selectedFilters: c,
          duplicates: _,
          totalAnnotations: h,
          flags: i,
          totalProcessedAnnotation: x,
          debugRule: (d) => {
            var S;
            return (S = s.value) == null ? void 0 : S.debugRule(d);
          },
          changeShowModified: (d) => (a.value = d),
          changeShowOnlyDuplicates: (d) => (l.value = d),
          processAnnotation: (d) => {
            var S;
            return (S = s.value) == null ? void 0 : S.processAnnotation(d);
          },
          modifyAnnotation: (d) => {
            var S;
            return (S = s.value) == null ? void 0 : S.modifyAnnotation(d);
          },
          confirmAnnotation: (d, S) => {
            var C;
            return (C = s.value) == null ? void 0 : C.confirmAnnotation(d, S);
          },
          confirmAnnotations: (d) => {
            var S;
            return (S = s.value) == null ? void 0 : S.confirmAnnotations(d);
          },
          deleteAnnotation: (d) => {
            var S;
            return (S = s.value) == null ? void 0 : S.deleteAnnotation(d);
          },
          needsAttention: async () => {
            var d;
            await ((d = s.value) == null ? void 0 : d.needsAttention()), zi().next(), To().refresh();
          },
          reviewDone: async () => {
            var d;
            await ((d = s.value) == null ? void 0 : d.reviewDone()), zi().next(), To().refresh();
          },
        }
      );
    }),
    FC = { class: "flex flex-col gap-2 align-items" },
    BC = { class: "flex gap-1 items-center" },
    UC = ["href"],
    VC = Mt({
      __name: "SearchPaginator",
      props: { activeId: {} },
      setup(t) {
        const e = zi(),
          n = Qo();
        return (r, o) => {
          const s = sh("router-link");
          return (
            P(),
            L("div", FC, [
              j("div", BC, [
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).firstId }]),
                    onClick: o[0] || (o[0] = (...i) => F(e).toFirst && F(e).toFirst(...i)),
                  },
                  [st(F(mS), { class: "h-3" })],
                  2,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs ", { "btn-disabled": r.activeId === F(e).firstId }]),
                    onClick: o[1] || (o[1] = (...i) => F(e).previous && F(e).previous(...i)),
                  },
                  [st(F(bS), { class: "h-3" })],
                  2,
                ),
                j(
                  "a",
                  {
                    href: `https://dev.evwrit.ugent.be/text/${r.activeId}`,
                    target: "_blank",
                    class: "text-sm w-16 text-center hover:underline",
                  },
                  yt(r.activeId),
                  9,
                  UC,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).lastId }]),
                    onClick: o[2] || (o[2] = (...i) => F(e).next && F(e).next(...i)),
                  },
                  [st(F(yS), { class: "h-3" })],
                  2,
                ),
                j(
                  "button",
                  {
                    class: Lt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).lastId }]),
                    onClick: o[3] || (o[3] = (...i) => F(e).toLast && F(e).toLast(...i)),
                  },
                  [st(F(vS), { class: "h-3" })],
                  2,
                ),
              ]),
              st(
                s,
                { class: "link btn-ghost btn-icon", to: { name: "search", query: F(n).query } },
                { default: Ee(() => o[4] || (o[4] = [Fe(" Terug naar zoeken ")])), _: 1 },
                8,
                ["to"],
              ),
            ])
          );
        };
      },
    }),
    HC = Mt({
      __name: "selected-annotation",
      props: { textLines: {}, annotation: {} },
      setup(t) {
        return (e, n) => (
          P(),
          L(
            lt,
            null,
            [
              st(
                F(So),
                {
                  annotations: [e.annotation],
                  lines: F(Ca)(e.textLines, e.annotation.start, e.annotation.end).lines,
                  "allow-edit": !1,
                },
                null,
                8,
                ["annotations", "lines"],
              ),
              st(od, { annotation: e.annotation }, null, 8, ["annotation"]),
            ],
            64,
          )
        );
      },
    }),
    qC = { class: "navbar bg-base-100" },
    KC = { class: "flex-none" },
    WC = { class: "flex flex-row gap-4 items-center" },
    GC = { class: "label cursor-pointer gap-2" },
    ZC = ["checked"],
    JC = { class: "label-text" },
    QC = { class: "label cursor-pointer gap-2" },
    XC = ["checked"],
    YC = { class: "label-text" },
    tR = { class: "label cursor-pointer gap-2" },
    eR = { class: "flex flex-row gap-2" },
    nR = { key: 0, class: "badge badge-success badge-outline" },
    rR = { key: 1, class: "badge badge-error badge-outline" },
    oR = { key: 0, class: "absolute left-1/2 top-1/2 loading loading-bars loading-lg" },
    sR = Mt({
      __name: "AnnotationView",
      setup(t) {
        const e = ut(!1),
          n = ut(!1),
          r = ut(!1),
          o = ut([]),
          s = rt(() => {
            const _ = o.value;
            return _.length === 0
              ? null
              : _.filter((b) => !l.modifiedAnnotations.some((w) => w.id === b))
                  .map((b) => l.originalAnnotations.find((w) => w.id === b) ?? null)
                  .filter((b) => b !== null);
          }),
          i = () => {
            (o.value = []), (e.value = !e.value), l.changeShowModified(e.value);
          },
          a = () => {
            (o.value = []), (n.value = !n.value), l.changeShowOnlyDuplicates(n.value);
          },
          l = cd(),
          c = (_) => {
            l.processAnnotation(_);
          },
          u = (_) => {
            l.modifyAnnotation(_);
          },
          p = (_, x) => {
            l.confirmAnnotation(_, x);
          },
          h = (_) => {
            l.deleteAnnotation(_);
          },
          f = (_) => {
            l.confirmAnnotations(_);
          },
          g = (_) => {
            var x;
            (o.value = []),
              _ &&
                (console.group("Debugging applied rules: "),
                l.debugRule(_),
                console.groupEnd(),
                (x = document.querySelector(`[data-annotation="${_.id}"]`)) == null || x.scrollIntoView(),
                (o.value = [_.id]));
          },
          m = (_) => {
            var w, k, T;
            const x = Ca(l.textLines, _.start, _.end).lines,
              b = (k = (w = x == null ? void 0 : x[0]) == null ? void 0 : w.gutter) == null ? void 0 : k.trim();
            b &&
              ((T = Array.from(document.querySelectorAll(".gutter.text")).find((z) => {
                var V;
                return ((V = z.textContent) == null ? void 0 : V.trim()) === b;
              })) == null ||
                T.scrollIntoView());
          };
        return (_, x) => (
          P(),
          L(
            lt,
            null,
            [
              j("div", qC, [
                st(VC, { "active-id": F(l).id }, null, 8, ["active-id"]),
                j("div", KC, [
                  st(
                    TC,
                    {
                      modelValue: F(l).selectedFilters,
                      "onUpdate:modelValue": x[0] || (x[0] = (b) => (F(l).selectedFilters = b)),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ]),
              ]),
              j(
                "div",
                { class: Lt(["flex p-1 gap-1 viewer", { "opacity-30": F(l).loading }]) },
                [
                  j(
                    "div",
                    { class: Lt(["p-4 border flex flex-col", { "w-1/2": r.value, "w-2/3": !r.value }]) },
                    [
                      j("div", WC, [
                        j("label", GC, [
                          j(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: e.value, onClick: i },
                            null,
                            8,
                            ZC,
                          ),
                          j(
                            "span",
                            JC,
                            " Enkel Gewijzigde annotaties (" + yt(F(l).modifiedAnnotations.length) + ")",
                            1,
                          ),
                        ]),
                        j("label", QC, [
                          j(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: n.value, onClick: a },
                            null,
                            8,
                            XC,
                          ),
                          j("span", YC, " Enkel Duplicaten (" + yt(F(l).duplicates.length) + ")", 1),
                        ]),
                        j("label", tR, [
                          Fo(
                            j(
                              "input",
                              {
                                type: "checkbox",
                                class: "toggle toggle-sm",
                                "onUpdate:modelValue": x[1] || (x[1] = (b) => (r.value = b)),
                              },
                              null,
                              512,
                            ),
                            [[oa, r.value]],
                          ),
                          x[2] || (x[2] = j("span", { class: "label-text" }, "Toon metadata", -1)),
                        ]),
                      ]),
                      st(
                        _C,
                        {
                          originalAnnotations: F(l).originalAnnotations,
                          processedAnnotations: F(l).processedAnnotations,
                          "text-lines": F(l).textLines,
                          snapper: F(l).snapper,
                          onModifyAnnotations: u,
                          onProcessesAnnotation: c,
                          onShowAnnotation: g,
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
                      (P(!0),
                      L(
                        lt,
                        null,
                        Bt(
                          s.value,
                          (b) => (
                            P(),
                            L("div", { class: "card border mb-2 p-2", key: b.id }, [
                              st(HC, { annotation: b, "text-lines": F(l).textLines }, null, 8, [
                                "annotation",
                                "text-lines",
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                      j("div", eR, [
                        j(
                          "div",
                          null,
                          " Verwerkte annotaties: " +
                            yt(F(l).totalProcessedAnnotation) +
                            "/" +
                            yt(F(l).totalAnnotations),
                          1,
                        ),
                        F(l).flags.review_done ? (P(), L("div", nR, "Text verwerkt")) : Pt("", !0),
                        F(l).flags.needs_attention ? (P(), L("div", rR, "Aandacht vereist")) : Pt("", !0),
                      ]),
                      st(
                        vC,
                        {
                          modifiedAnnotations: F(l).modifiedAnnotations,
                          "text-lines": F(l).textLines,
                          highlightAnnotationIds: o.value,
                          "show-metadata": r.value,
                          snapper: F(l).snapper,
                          onConfirmAnnotation: p,
                          onDeleteAnnotation: h,
                          onConfirmAnnotations: f,
                          onModifyAnnotations: u,
                          onProcessesAnnotation: c,
                          onHighlightAnnotation: m,
                          onNeedsAttention: F(l).needsAttention,
                          onReviewDone: F(l).reviewDone,
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
                  F(l).loading ? (P(), L("span", oR)) : Pt("", !0),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    iR = { class: "table" },
    aR = ["onClick"],
    lR = { class: "flex justify-between" },
    cR = { class: "flex-grow" },
    uR = { class: "" },
    fR = {
      key: 0,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    hR = {
      key: 1,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    pR = {
      key: 2,
      class: "h-3",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    dR = ["onClick"],
    gR = { key: 0 },
    mR = {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "{1.5}",
      stroke: "currentColor",
      class: "w-4 m-auto",
    },
    vR = { key: 1 },
    bR = { class: "flex justify-around py-2" },
    yR = { class: "join" },
    _R = ["onClick"],
    wR = Mt({
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
          o = ut([]),
          s = (f, g = !1) => {
            const m = f;
            return { page: m, label: m, disabled: g, key: f };
          },
          i = (f) => {
            var k, T, z, V;
            const g = ld(f.count, f.pageSize);
            if (g < 1) return [];
            const m = 14,
              _ = g < m ? g : m;
            let x = 1;
            g > m && ((x = f.activePage - m / 2), x < 1 ? (x = 1) : x + m > g && (x = g - m + 1));
            const b = (H) => ({ page: 0, label: "...", disabled: !0, key: H }),
              w = Array.from({ length: _ }).map((H, X) => s(X + x));
            ((k = w[0]) == null ? void 0 : k.page) > 2 && w.unshift(b(-1)),
              ((T = w[0]) == null ? void 0 : T.page) !== 1 && w.unshift(s(1)),
              ((z = w[w.length - 1]) == null ? void 0 : z.page) < g - 1 && w.push(b(-2)),
              ((V = w[w.length - 1]) == null ? void 0 : V.page) !== g && w.push(s(g)),
              (o.value = w.flat());
          };
        ta(() => {
          i(r);
        }),
          rh(() => {
            i(r);
          });
        const a = e,
          l = (f) => {
            a("changePage", f);
          },
          c = Jo(),
          u = Qo(),
          p = (f) => {
            c.push({ name: "annotation", params: { id: f.id }, query: u.query });
          },
          h = (f) => {
            let g = 1;
            r.sort.orderBy === f.id && (g = r.sort.ascending === 0 ? 1 : 0), a("changeOrder", f.id, g);
          };
        return (f, g) => (
          P(),
          L(
            lt,
            null,
            [
              j("table", iR, [
                j("thead", null, [
                  j("tr", null, [
                    (P(),
                    L(
                      lt,
                      null,
                      Bt(n, (m) =>
                        j(
                          "th",
                          { key: m.id, onClick: (_) => h(m), class: "cursor-pointer" },
                          [
                            j("span", lR, [
                              j("span", cR, yt(m.label), 1),
                              j("button", uR, [
                                f.sort.orderBy !== m.id
                                  ? (P(),
                                    L(
                                      "svg",
                                      fR,
                                      g[0] ||
                                        (g[0] = [
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
                                  : f.sort.ascending == 0
                                    ? (P(),
                                      L(
                                        "svg",
                                        hR,
                                        g[1] ||
                                          (g[1] = [
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
                                    : f.sort.ascending === 1
                                      ? (P(),
                                        L(
                                          "svg",
                                          pR,
                                          g[2] ||
                                            (g[2] = [
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
                          aR,
                        ),
                      ),
                      64,
                    )),
                  ]),
                ]),
                j("tbody", null, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(
                      f.data,
                      (m) => (
                        P(),
                        L(
                          "tr",
                          { key: m.id, class: "hover hover:cursor-pointer", onClick: (_) => p(m) },
                          [
                            (P(),
                            L(
                              lt,
                              null,
                              Bt(n, (_) =>
                                j(
                                  "td",
                                  { key: _.id, class: Lt({ "text-center": _.type === "boolean" }) },
                                  [
                                    _.type === "boolean"
                                      ? (P(),
                                        L("span", gR, [
                                          m[_.id]
                                            ? (P(),
                                              L(
                                                "svg",
                                                mR,
                                                g[3] ||
                                                  (g[3] = [
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
                                      : (P(), L("span", vR, yt(m[_.id]), 1)),
                                  ],
                                  2,
                                ),
                              ),
                              64,
                            )),
                          ],
                          8,
                          dR,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              j("div", bR, [
                j("div", yR, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(
                      o.value,
                      (m) => (
                        P(),
                        L(
                          "button",
                          {
                            key: m.key,
                            class: Lt([
                              "join-item btn btn-xs btn-outline w-8",
                              { "btn-active": m.page === f.activePage, "btn-disabled": m.disabled },
                            ]),
                            onClick: (_) => l(m.page),
                          },
                          yt(m.label),
                          11,
                          _R,
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
    xR = {
      key: 0,
      class: "dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center",
    },
    kR = { tabindex: "0", role: "button", class: "h-full w-full" },
    SR = { tabindex: "0", class: "dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow" },
    AR = { class: "form-control" },
    TR = ["value"],
    ER = { key: 1 },
    OR = { class: "border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center" },
    CR = { class: "w-full" },
    RR = ["selected", "value", "onClick"],
    jR = Mt({
      __name: "SearchField",
      props: Pg(
        { title: {}, id: {}, multi: { type: Boolean }, filterValues: {} },
        { modelValue: {}, modelModifiers: {} },
      ),
      emits: ["update:modelValue"],
      setup(t) {
        const e = t,
          n = kh(t, "modelValue"),
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
            ? (P(),
              L("div", xR, [
                j("div", kR, [
                  Fe(yt(s.title) + ": ", 1),
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(r.value, (a) => (P(), L("span", { class: "badge badge-ghost m-1", key: a.id }, yt(a.name), 1))),
                    128,
                  )),
                ]),
                j("ul", SR, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Bt(
                      s.filterValues,
                      (a) => (
                        P(),
                        L("li", { key: a.id }, [
                          j("label", AR, [
                            Fo(
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
                                TR,
                              ),
                              [[oa, n.value]],
                            ),
                            j("span", null, yt(a.name), 1),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ]))
            : (P(),
              L("div", ER, [
                j("label", OR, [
                  j("div", CR, yt(s.title) + ":", 1),
                  j(
                    "select",
                    { class: "select s w-full max-w-xs", onChange: i[1] || (i[1] = (a) => o(a)) },
                    [
                      (P(!0),
                      L(
                        lt,
                        null,
                        Bt(s.filterValues, (a) => {
                          var l;
                          return (
                            P(),
                            L(
                              "option",
                              {
                                key: a.id,
                                selected: ((l = n.value) == null ? void 0 : l[0]) == a.id,
                                value: a.id,
                                onClick: (c) => o(a.id),
                              },
                              yt(a.name),
                              9,
                              RR,
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
    $R = { class: "p-2 flex flex-col gap-2" },
    PR = { class: "grid grid-cols-2 gap-2" },
    IR = { class: "flex gap-2 items-center" },
    MR = {
      class: "input input-sm input-bordered border w-64 rounded px-2 py-1 text-sm min-h-12 flex items-center gap-2",
    },
    LR = ["disabled"],
    DR = Mt({
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
          o = ut(Object.keys(r).reduce((p, h) => ((p[h] = []), p), {})),
          s = ut(null),
          i = rt(() =>
            Object.values(r).map((p) => {
              var x, b, w;
              const h = p.id,
                f =
                  ((b = (x = n.searchFilters) == null ? void 0 : x.find((k) => k.id === h)) == null
                    ? void 0
                    : b.value) ?? [],
                g = ((w = n.filters) == null ? void 0 : w[h]) ?? [],
                m = ut(f),
                _ = p.type || null;
              return (o.value[p.id] = f), { ...p, type: _, model: m, filterValues: g };
            }),
          ),
          a = e,
          l = () => {
            const p = o.value;
            a("search", p);
          },
          c = Jo(),
          u = () => {
            c.push({ name: "annotation", params: { id: s.value } });
          };
        return (p, h) => (
          P(),
          L("div", $R, [
            j("div", PR, [
              (P(!0),
              L(
                lt,
                null,
                Bt(
                  i.value,
                  (f) => (
                    P(),
                    L(
                      "div",
                      { key: f.id, class: Lt({ "col-span-2": f.multi }) },
                      [
                        st(
                          jR,
                          {
                            id: f.id,
                            title: f.title,
                            filterValues: f.filterValues,
                            multi: f.multi,
                            modelValue: o.value[f.id],
                            "onUpdate:modelValue": (g) => (o.value[f.id] = g),
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
              j("button", { class: "btn btn-sm", onClick: l }, [
                st(F(Fu), { class: "h-6" }),
                h[1] || (h[1] = Fe(" Search ")),
              ]),
            ]),
            j("div", IR, [
              j("label", MR, [
                h[2] || (h[2] = j("span", null, "EvwritId: ", -1)),
                Fo(
                  j(
                    "input",
                    { "onUpdate:modelValue": h[0] || (h[0] = (f) => (s.value = f)), type: "number", class: "grow" },
                    null,
                    512,
                  ),
                  [[Um, s.value]],
                ),
              ]),
              j(
                "button",
                { class: "btn btn-sm", onClick: u, disabled: !s.value },
                [st(F(Fu), { class: "h-6" }), h[3] || (h[3] = Fe(" Zoek op id "))],
                8,
                LR,
              ),
            ]),
          ])
        );
      },
    }),
    zR = { class: "m-auto max-w-2xl" },
    NR = Mt({
      __name: "SearchView",
      setup(t) {
        const e = To();
        return (n, r) => (
          P(),
          L("div", zR, [
            st(DR, { searchFilters: F(e).searchFilters, filters: F(e).filters, onSearch: F(e).onSearch }, null, 8, [
              "searchFilters",
              "filters",
              "onSearch",
            ]),
            r[0] || (r[0] = j("hr", null, null, -1)),
            st(
              wR,
              {
                sort: F(e).sort,
                data: F(e).data,
                count: F(e).count,
                activePage: F(e).page,
                pageSize: F(e).pageSize,
                onChangePage: F(e).changePage,
                onChangeOrder: F(e).changeOrder,
              },
              null,
              8,
              ["sort", "data", "count", "activePage", "pageSize", "onChangePage", "onChangeOrder"],
            ),
          ])
        );
      },
    });
  function ja() {
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
  let Rn = ja();
  function ud(t) {
    Rn = t;
  }
  const kr = { exec: () => null };
  function mt(t, e = "") {
    let n = typeof t == "string" ? t : t.source;
    const r = {
      replace: (o, s) => {
        let i = typeof s == "string" ? s : s.source;
        return (i = i.replace(Xt.caret, "$1")), (n = n.replace(o, i)), r;
      },
      getRegex: () => new RegExp(n, e),
    };
    return r;
  }
  const Xt = {
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
    FR = /^(?:[ \t]*(?:\n|$))+/,
    BR = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    UR = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Ur = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    VR = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    $a = /(?:[*+-]|\d{1,9}[.)])/,
    fd =
      /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    hd = mt(fd)
      .replace(/bull/g, $a)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/\|table/g, "")
      .getRegex(),
    HR = mt(fd)
      .replace(/bull/g, $a)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
      .getRegex(),
    Pa = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    qR = /^[^\n]+/,
    Ia = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    KR = mt(
      /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
      .replace("label", Ia)
      .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
      .getRegex(),
    WR = mt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, $a)
      .getRegex(),
    ls =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Ma = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    GR = mt(
      "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
      "i",
    )
      .replace("comment", Ma)
      .replace("tag", ls)
      .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
      .getRegex(),
    pd = mt(Pa)
      .replace("hr", Ur)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ls)
      .getRegex(),
    ZR = mt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", pd)
      .getRegex(),
    La = {
      blockquote: ZR,
      code: BR,
      def: KR,
      fences: UR,
      heading: VR,
      hr: Ur,
      html: GR,
      lheading: hd,
      list: WR,
      newline: FR,
      paragraph: pd,
      table: kr,
      text: qR,
    },
    df = mt(
      "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
      .replace("hr", Ur)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("blockquote", " {0,3}>")
      .replace("code", "(?: {4}| {0,3}	)[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ls)
      .getRegex(),
    JR = {
      ...La,
      lheading: HR,
      table: df,
      paragraph: mt(Pa)
        .replace("hr", Ur)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("table", df)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", ls)
        .getRegex(),
    },
    QR = {
      ...La,
      html: mt(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace("comment", Ma)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: kr,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: mt(Pa)
        .replace("hr", Ur)
        .replace(
          "heading",
          ` *#{1,6} *[^
]`,
        )
        .replace("lheading", hd)
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .replace("|tag", "")
        .getRegex(),
    },
    XR = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    YR = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    dd = /^( {2,}|\\)\n(?!\s*$)/,
    tj = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    cs = /[\p{P}\p{S}]/u,
    Da = /[\s\p{P}\p{S}]/u,
    gd = /[^\s\p{P}\p{S}]/u,
    ej = mt(/^((?![*_])punctSpace)/, "u")
      .replace(/punctSpace/g, Da)
      .getRegex(),
    md = /(?!~)[\p{P}\p{S}]/u,
    nj = /(?!~)[\s\p{P}\p{S}]/u,
    rj = /(?:[^\s\p{P}\p{S}]|~)/u,
    oj = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    vd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    sj = mt(vd, "u").replace(/punct/g, cs).getRegex(),
    ij = mt(vd, "u").replace(/punct/g, md).getRegex(),
    bd =
      "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    aj = mt(bd, "gu")
      .replace(/notPunctSpace/g, gd)
      .replace(/punctSpace/g, Da)
      .replace(/punct/g, cs)
      .getRegex(),
    lj = mt(bd, "gu")
      .replace(/notPunctSpace/g, rj)
      .replace(/punctSpace/g, nj)
      .replace(/punct/g, md)
      .getRegex(),
    cj = mt(
      "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
      "gu",
    )
      .replace(/notPunctSpace/g, gd)
      .replace(/punctSpace/g, Da)
      .replace(/punct/g, cs)
      .getRegex(),
    uj = mt(/\\(punct)/, "gu")
      .replace(/punct/g, cs)
      .getRegex(),
    fj = mt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        "email",
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
      )
      .getRegex(),
    hj = mt(Ma).replace("(?:-->|$)", "-->").getRegex(),
    pj = mt(
      "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
      .replace("comment", hj)
      .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
      .getRegex(),
    Eo = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    dj = mt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
      .replace("label", Eo)
      .replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
      .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
      .getRegex(),
    yd = mt(/^!?\[(label)\]\[(ref)\]/)
      .replace("label", Eo)
      .replace("ref", Ia)
      .getRegex(),
    _d = mt(/^!?\[(ref)\](?:\[\])?/)
      .replace("ref", Ia)
      .getRegex(),
    gj = mt("reflink|nolink(?!\\()", "g").replace("reflink", yd).replace("nolink", _d).getRegex(),
    za = {
      _backpedal: kr,
      anyPunctuation: uj,
      autolink: fj,
      blockSkip: oj,
      br: dd,
      code: YR,
      del: kr,
      emStrongLDelim: sj,
      emStrongRDelimAst: aj,
      emStrongRDelimUnd: cj,
      escape: XR,
      link: dj,
      nolink: _d,
      punctuation: ej,
      reflink: yd,
      reflinkSearch: gj,
      tag: pj,
      text: tj,
      url: kr,
    },
    mj = {
      ...za,
      link: mt(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", Eo)
        .getRegex(),
      reflink: mt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", Eo)
        .getRegex(),
    },
    Ni = {
      ...za,
      emStrongRDelimAst: lj,
      emStrongLDelim: ij,
      url: mt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
        .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    vj = {
      ...Ni,
      br: mt(dd).replace("{2,}", "*").getRegex(),
      text: mt(Ni.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    },
    eo = { normal: La, gfm: JR, pedantic: QR },
    ar = { normal: za, gfm: Ni, breaks: vj, pedantic: mj },
    bj = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    gf = (t) => bj[t];
  function _e(t, e) {
    if (e) {
      if (Xt.escapeTest.test(t)) return t.replace(Xt.escapeReplace, gf);
    } else if (Xt.escapeTestNoEncode.test(t)) return t.replace(Xt.escapeReplaceNoEncode, gf);
    return t;
  }
  function mf(t) {
    try {
      t = encodeURI(t).replace(Xt.percentDecode, "%");
    } catch {
      return null;
    }
    return t;
  }
  function vf(t, e) {
    var s;
    const n = t.replace(Xt.findPipe, (i, a, l) => {
        let c = !1,
          u = a;
        for (; --u >= 0 && l[u] === "\\"; ) c = !c;
        return c ? "|" : " |";
      }),
      r = n.split(Xt.splitPipe);
    let o = 0;
    if ((r[0].trim() || r.shift(), r.length > 0 && !((s = r.at(-1)) != null && s.trim()) && r.pop(), e))
      if (r.length > e) r.splice(e);
      else for (; r.length < e; ) r.push("");
    for (; o < r.length; o++) r[o] = r[o].trim().replace(Xt.slashPipe, "|");
    return r;
  }
  function lr(t, e, n) {
    const r = t.length;
    if (r === 0) return "";
    let o = 0;
    for (; o < r && t.charAt(r - o - 1) === e; ) o++;
    return t.slice(0, r - o);
  }
  function yj(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for (let r = 0; r < t.length; r++)
      if (t[r] === "\\") r++;
      else if (t[r] === e[0]) n++;
      else if (t[r] === e[1] && (n--, n < 0)) return r;
    return n > 0 ? -2 : -1;
  }
  function bf(t, e, n, r, o) {
    const s = e.href,
      i = e.title || null,
      a = t[1].replace(o.other.outputLinkReplace, "$1");
    r.state.inLink = !0;
    const l = {
      type: t[0].charAt(0) === "!" ? "image" : "link",
      raw: n,
      href: s,
      title: i,
      text: a,
      tokens: r.inlineTokens(a),
    };
    return (r.state.inLink = !1), l;
  }
  function _j(t, e, n) {
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
  class Oo {
    constructor(e) {
      Z(this, "options");
      Z(this, "rules");
      Z(this, "lexer");
      this.options = e || Rn;
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
          o = _j(r, n[3] || "", this.rules);
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
            p = u
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
${p}`
              : p);
          const h = this.lexer.state.top;
          if (
            ((this.lexer.state.top = !0), this.lexer.blockTokens(p, i, !0), (this.lexer.state.top = h), r.length === 0)
          )
            break;
          const f = i.at(-1);
          if ((f == null ? void 0 : f.type) === "code") break;
          if ((f == null ? void 0 : f.type) === "blockquote") {
            const g = f,
              m =
                g.raw +
                `
` +
                r.join(`
`),
              _ = this.blockquote(m);
            (i[i.length - 1] = _),
              (o = o.substring(0, o.length - g.raw.length) + _.raw),
              (s = s.substring(0, s.length - g.text.length) + _.text);
            break;
          } else if ((f == null ? void 0 : f.type) === "list") {
            const g = f,
              m =
                g.raw +
                `
` +
                r.join(`
`),
              _ = this.list(m);
            (i[i.length - 1] = _),
              (o = o.substring(0, o.length - f.raw.length) + _.raw),
              (s = s.substring(0, s.length - g.raw.length) + _.raw),
              (r = m.substring(i.at(-1).raw.length).split(`
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
            p = "";
          if (!(n = i.exec(e)) || this.rules.block.hr.test(e)) break;
          (u = n[0]), (e = e.substring(u.length));
          let h = n[2]
              .split(
                `
`,
                1,
              )[0]
              .replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)),
            f = e.split(
              `
`,
              1,
            )[0],
            g = !h.trim(),
            m = 0;
          if (
            (this.options.pedantic
              ? ((m = 2), (p = h.trimStart()))
              : g
                ? (m = n[1].length + 1)
                : ((m = n[2].search(this.rules.other.nonSpaceChar)),
                  (m = m > 4 ? 1 : m),
                  (p = h.slice(m)),
                  (m += n[1].length)),
            g &&
              this.rules.other.blankLine.test(f) &&
              ((u +=
                f +
                `
`),
              (e = e.substring(f.length + 1)),
              (c = !0)),
            !c)
          ) {
            const b = this.rules.other.nextBulletRegex(m),
              w = this.rules.other.hrRegex(m),
              k = this.rules.other.fencesBeginRegex(m),
              T = this.rules.other.headingBeginRegex(m),
              z = this.rules.other.htmlBeginRegex(m);
            for (; e; ) {
              const V = e.split(
                `
`,
                1,
              )[0];
              let H;
              if (
                ((f = V),
                this.options.pedantic
                  ? ((f = f.replace(this.rules.other.listReplaceNesting, "  ")), (H = f))
                  : (H = f.replace(this.rules.other.tabCharGlobal, "    ")),
                k.test(f) || T.test(f) || z.test(f) || b.test(f) || w.test(f))
              )
                break;
              if (H.search(this.rules.other.nonSpaceChar) >= m || !f.trim())
                p +=
                  `
` + H.slice(m);
              else {
                if (
                  g ||
                  h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 ||
                  k.test(h) ||
                  T.test(h) ||
                  w.test(h)
                )
                  break;
                p +=
                  `
` + f;
              }
              !g && !f.trim() && (g = !0),
                (u +=
                  V +
                  `
`),
                (e = e.substring(V.length + 1)),
                (h = H.slice(m));
            }
          }
          s.loose || (a ? (s.loose = !0) : this.rules.other.doubleBlankLine.test(u) && (a = !0));
          let _ = null,
            x;
          this.options.gfm &&
            ((_ = this.rules.other.listIsTask.exec(p)),
            _ && ((x = _[0] !== "[ ] "), (p = p.replace(this.rules.other.listReplaceTask, "")))),
            s.items.push({ type: "list_item", raw: u, task: !!_, checked: x, loose: !1, text: p, tokens: [] }),
            (s.raw += u);
        }
        const l = s.items.at(-1);
        if (l) (l.raw = l.raw.trimEnd()), (l.text = l.text.trimEnd());
        else return;
        s.raw = s.raw.trimEnd();
        for (let c = 0; c < s.items.length; c++)
          if (
            ((this.lexer.state.top = !1), (s.items[c].tokens = this.lexer.blockTokens(s.items[c].text, [])), !s.loose)
          ) {
            const u = s.items[c].tokens.filter((h) => h.type === "space"),
              p = u.length > 0 && u.some((h) => this.rules.other.anyLine.test(h.raw));
            s.loose = p;
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
      const r = vf(n[1]),
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
            vf(l, i.header.length).map((c, u) => ({
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
          const i = yj(n[2], "()");
          if (i === -2) return;
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
          bf(
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
        return bf(r, s, r[0], this.lexer, this.rules);
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
        const p = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (p.lastIndex = 0, n = n.slice(-1 * e.length + i); (o = p.exec(n)) != null; ) {
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
          const h = [...o[0]][0].length,
            f = e.slice(0, i + o.index + h + l);
          if (Math.min(i, l) % 2) {
            const m = f.slice(1, -1);
            return { type: "em", raw: f, text: m, tokens: this.lexer.inlineTokens(m) };
          }
          const g = f.slice(2, -2);
          return { type: "strong", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
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
  class ae {
    constructor(e) {
      Z(this, "tokens");
      Z(this, "options");
      Z(this, "state");
      Z(this, "tokenizer");
      Z(this, "inlineQueue");
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || Rn),
        (this.options.tokenizer = this.options.tokenizer || new Oo()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      const n = { other: Xt, block: eo.normal, inline: ar.normal };
      this.options.pedantic
        ? ((n.block = eo.pedantic), (n.inline = ar.pedantic))
        : this.options.gfm && ((n.block = eo.gfm), this.options.breaks ? (n.inline = ar.breaks) : (n.inline = ar.gfm)),
        (this.tokenizer.rules = n);
    }
    static get rules() {
      return { block: eo, inline: ar };
    }
    static lex(e, n) {
      return new ae(n).lex(e);
    }
    static lexInline(e, n) {
      return new ae(n).inlineTokens(e);
    }
    lex(e) {
      (e = e.replace(
        Xt.carriageReturn,
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
      for (this.options.pedantic && (e = e.replace(Xt.tabCharGlobal, "    ").replace(Xt.spaceLine, "")); e; ) {
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
          let p;
          this.options.extensions.startBlock.forEach((h) => {
            (p = h.call({ lexer: this }, u)), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
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
      for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
        r = r.slice(0, o.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; (o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
        r =
          r.slice(0, o.index) +
          "[" +
          "a".repeat(o[0].length - 2) +
          "]" +
          r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      let s = !1,
        i = "";
      for (; e; ) {
        s || (i = ""), (s = !1);
        let u;
        if (
          (l = (a = this.options.extensions) == null ? void 0 : a.inline) != null &&
          l.some((h) => ((u = h.call({ lexer: this }, e, n)) ? ((e = e.substring(u.raw.length)), n.push(u), !0) : !1))
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
          const h = n.at(-1);
          u.type === "text" && (h == null ? void 0 : h.type) === "text"
            ? ((h.raw += u.raw), (h.text += u.text))
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
        let p = e;
        if ((c = this.options.extensions) != null && c.startInline) {
          let h = 1 / 0;
          const f = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach((m) => {
            (g = m.call({ lexer: this }, f)), typeof g == "number" && g >= 0 && (h = Math.min(h, g));
          }),
            h < 1 / 0 && h >= 0 && (p = e.substring(0, h + 1));
        }
        if ((u = this.tokenizer.inlineText(p))) {
          (e = e.substring(u.raw.length)), u.raw.slice(-1) !== "_" && (i = u.raw.slice(-1)), (s = !0);
          const h = n.at(-1);
          (h == null ? void 0 : h.type) === "text" ? ((h.raw += u.raw), (h.text += u.text)) : n.push(u);
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
  }
  class Co {
    constructor(e) {
      Z(this, "options");
      Z(this, "parser");
      this.options = e || Rn;
    }
    space(e) {
      return "";
    }
    code({ text: e, lang: n, escaped: r }) {
      var i;
      const o = (i = (n || "").match(Xt.notSpaceStart)) == null ? void 0 : i[0],
        s =
          e.replace(Xt.endingNewline, "") +
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
        s = mf(e);
      if (s === null) return o;
      e = s;
      let i = '<a href="' + e + '"';
      return n && (i += ' title="' + _e(n) + '"'), (i += ">" + o + "</a>"), i;
    }
    image({ href: e, title: n, text: r, tokens: o }) {
      o && (r = this.parser.parseInline(o, this.parser.textRenderer));
      const s = mf(e);
      if (s === null) return _e(r);
      e = s;
      let i = `<img src="${e}" alt="${r}"`;
      return n && (i += ` title="${_e(n)}"`), (i += ">"), i;
    }
    text(e) {
      return "tokens" in e && e.tokens
        ? this.parser.parseInline(e.tokens)
        : "escaped" in e && e.escaped
          ? e.text
          : _e(e.text);
    }
  }
  class Na {
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
  class le {
    constructor(e) {
      Z(this, "options");
      Z(this, "renderer");
      Z(this, "textRenderer");
      (this.options = e || Rn),
        (this.options.renderer = this.options.renderer || new Co()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new Na());
    }
    static parse(e, n) {
      return new le(n).parse(e);
    }
    static parseInline(e, n) {
      return new le(n).parseInline(e);
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
  class Sr {
    constructor(e) {
      Z(this, "options");
      Z(this, "block");
      this.options = e || Rn;
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
      return this.block ? ae.lex : ae.lexInline;
    }
    provideParser() {
      return this.block ? le.parse : le.parseInline;
    }
  }
  Z(Sr, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"]));
  class wj {
    constructor(...e) {
      Z(this, "defaults", ja());
      Z(this, "options", this.setOptions);
      Z(this, "parse", this.parseMarkdown(!0));
      Z(this, "parseInline", this.parseMarkdown(!1));
      Z(this, "Parser", le);
      Z(this, "Renderer", Co);
      Z(this, "TextRenderer", Na);
      Z(this, "Lexer", ae);
      Z(this, "Tokenizer", Oo);
      Z(this, "Hooks", Sr);
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
            const s = this.defaults.renderer || new Co(this.defaults);
            for (const i in r.renderer) {
              if (!(i in s)) throw new Error(`renderer '${i}' does not exist`);
              if (["options", "parser"].includes(i)) continue;
              const a = i,
                l = r.renderer[a],
                c = s[a];
              s[a] = (...u) => {
                let p = l.apply(s, u);
                return p === !1 && (p = c.apply(s, u)), p || "";
              };
            }
            o.renderer = s;
          }
          if (r.tokenizer) {
            const s = this.defaults.tokenizer || new Oo(this.defaults);
            for (const i in r.tokenizer) {
              if (!(i in s)) throw new Error(`tokenizer '${i}' does not exist`);
              if (["options", "rules", "lexer"].includes(i)) continue;
              const a = i,
                l = r.tokenizer[a],
                c = s[a];
              s[a] = (...u) => {
                let p = l.apply(s, u);
                return p === !1 && (p = c.apply(s, u)), p;
              };
            }
            o.tokenizer = s;
          }
          if (r.hooks) {
            const s = this.defaults.hooks || new Sr();
            for (const i in r.hooks) {
              if (!(i in s)) throw new Error(`hook '${i}' does not exist`);
              if (["options", "block"].includes(i)) continue;
              const a = i,
                l = r.hooks[a],
                c = s[a];
              Sr.passThroughHooks.has(i)
                ? (s[a] = (u) => {
                    if (this.defaults.async) return Promise.resolve(l.call(s, u)).then((h) => c.call(s, h));
                    const p = l.call(s, u);
                    return c.call(s, p);
                  })
                : (s[a] = (...u) => {
                    let p = l.apply(s, u);
                    return p === !1 && (p = c.apply(s, u)), p;
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
      return ae.lex(e, n ?? this.defaults);
    }
    parser(e, n) {
      return le.parse(e, n ?? this.defaults);
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
        const l = i.hooks ? i.hooks.provideLexer() : e ? ae.lex : ae.lexInline,
          c = i.hooks ? i.hooks.provideParser() : e ? le.parse : le.parseInline;
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
          let p = c(u, i);
          return i.hooks && (p = i.hooks.postprocess(p)), p;
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
  const wn = new wj();
  function _t(t, e) {
    return wn.parse(t, e);
  }
  _t.options = _t.setOptions = function (t) {
    return wn.setOptions(t), (_t.defaults = wn.defaults), ud(_t.defaults), _t;
  };
  _t.getDefaults = ja;
  _t.defaults = Rn;
  _t.use = function (...t) {
    return wn.use(...t), (_t.defaults = wn.defaults), ud(_t.defaults), _t;
  };
  _t.walkTokens = function (t, e) {
    return wn.walkTokens(t, e);
  };
  _t.parseInline = wn.parseInline;
  _t.Parser = le;
  _t.parser = le.parse;
  _t.Renderer = Co;
  _t.TextRenderer = Na;
  _t.Lexer = ae;
  _t.lexer = ae.lex;
  _t.Tokenizer = Oo;
  _t.Hooks = Sr;
  _t.parse = _t;
  _t.options;
  _t.setOptions;
  _t.use;
  _t.walkTokens;
  _t.parseInline;
  le.parse;
  ae.lex;
  const xj = { class: "m-4 prose" },
    kj = ["innerHTML"],
    Sj = Mt({
      __name: "DocsView",
      setup(t) {
        const e = ut("");
        return (
          fetch("/annotation_flow/assets/docs/rules.md")
            .then((n) => n.text())
            .then((n) => _t(n))
            .then((n) => {
              e.value = n;
            }),
          (n, r) => (P(), L("div", xj, [j("div", { innerHTML: e.value }, null, 8, kj)]))
        );
      },
    }),
    Aj = [
      { path: "/", name: "search", component: NR, meta: { title: "Zoeken" } },
      { path: "/docs", name: "docs", component: Sj, meta: { title: "Docs" } },
      { path: "/detail/:id", name: "annotation", component: sR, meta: { title: "Annotatie: {id}" } },
    ],
    wd = rb({ history: Pv("/annotation_flow/"), routes: Aj });
  wd.beforeEach((t) => {
    let e = t.meta.title ?? "";
    Object.entries(t.params ?? {}).forEach(([r, o]) => {
      e = e.replace(`{${r}}`, o.toString());
    });
    const n = "Evwrite Annotation Flow";
    window.document.title = `${n} - ${e}`;
  });
  const xd = Gm(ib);
  xd.use(Qm()).use(wd);
  xd.mount("#app");
});
export default Tj();
