var Wh = Object.defineProperty;
var qh = (t, e, n) => (e in t ? Wh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var Gh = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ft = (t, e, n) => qh(t, typeof e != "symbol" ? e + "" : e, n);
var rP = Gh((jt, Ct) => {
  (function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const i of o)
        if (i.type === "childList")
          for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const i = {};
      return (
        o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : o.crossOrigin === "anonymous"
            ? (i.credentials = "omit")
            : (i.credentials = "same-origin"),
        i
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  /**
   * @vue/shared v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ /*! #__NO_SIDE_EFFECTS__ */ function ms(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const ht = {},
    Cn = [],
    ye = () => {},
    Jh = () => !1,
    co = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    bs = (t) => t.startsWith("onUpdate:"),
    zt = Object.assign,
    _s = (t, e) => {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    },
    Zh = Object.prototype.hasOwnProperty,
    pt = (t, e) => Zh.call(t, e),
    X = Array.isArray,
    Pn = (t) => Sr(t) === "[object Map]",
    uo = (t) => Sr(t) === "[object Set]",
    wa = (t) => Sr(t) === "[object Date]",
    ot = (t) => typeof t == "function",
    It = (t) => typeof t == "string",
    _e = (t) => typeof t == "symbol",
    Et = (t) => t !== null && typeof t == "object",
    Gu = (t) => (Et(t) || ot(t)) && ot(t.then) && ot(t.catch),
    Ju = Object.prototype.toString,
    Sr = (t) => Ju.call(t),
    Yh = (t) => Sr(t).slice(8, -1),
    Zu = (t) => Sr(t) === "[object Object]",
    ws = (t) => It(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    tr = ms(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    fo = (t) => {
      const e = Object.create(null);
      return (n) => e[n] || (e[n] = t(n));
    },
    Qh = /-(\w)/g,
    oe = fo((t) => t.replace(Qh, (e, n) => (n ? n.toUpperCase() : ""))),
    Xh = /\B([A-Z])/g,
    Je = fo((t) => t.replace(Xh, "-$1").toLowerCase()),
    ho = fo((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    er = fo((t) => (t ? `on${ho(t)}` : "")),
    Yt = (t, e) => !Object.is(t, e),
    Vr = (t, ...e) => {
      for (let n = 0; n < t.length; n++) t[n](...e);
    },
    Yu = (t, e, n, r = !1) => {
      Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n });
    },
    tp = (t) => {
      const e = parseFloat(t);
      return isNaN(e) ? t : e;
    };
  let xa;
  const Qu = () =>
    xa ||
    (xa =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function Ze(t) {
    if (X(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          o = It(r) ? op(r) : Ze(r);
        if (o) for (const i in o) e[i] = o[i];
      }
      return e;
    } else if (It(t) || Et(t)) return t;
  }
  const ep = /;(?![^(]*\))/g,
    np = /:([^]+)/,
    rp = /\/\*[^]*?\*\//g;
  function op(t) {
    const e = {};
    return (
      t
        .replace(rp, "")
        .split(ep)
        .forEach((n) => {
          if (n) {
            const r = n.split(np);
            r.length > 1 && (e[r[0].trim()] = r[1].trim());
          }
        }),
      e
    );
  }
  function Nt(t) {
    let e = "";
    if (It(t)) e = t;
    else if (X(t))
      for (let n = 0; n < t.length; n++) {
        const r = Nt(t[n]);
        r && (e += r + " ");
      }
    else if (Et(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const ip = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    sp = ms(ip);
  function Xu(t) {
    return !!t || t === "";
  }
  function ap(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = po(t[r], e[r]);
    return n;
  }
  function po(t, e) {
    if (t === e) return !0;
    let n = wa(t),
      r = wa(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = _e(t)), (r = _e(e)), n || r)) return t === e;
    if (((n = X(t)), (r = X(e)), n || r)) return n && r ? ap(t, e) : !1;
    if (((n = Et(t)), (r = Et(e)), n || r)) {
      if (!n || !r) return !1;
      const o = Object.keys(t).length,
        i = Object.keys(e).length;
      if (o !== i) return !1;
      for (const s in t) {
        const a = t.hasOwnProperty(s),
          l = e.hasOwnProperty(s);
        if ((a && !l) || (!a && l) || !po(t[s], e[s])) return !1;
      }
    }
    return String(t) === String(e);
  }
  function tf(t, e) {
    return t.findIndex((n) => po(n, e));
  }
  const ef = (t) => !!(t && t.__v_isRef === !0),
    bt = (t) =>
      It(t)
        ? t
        : t == null
          ? ""
          : X(t) || (Et(t) && (t.toString === Ju || !ot(t.toString)))
            ? ef(t)
              ? bt(t.value)
              : JSON.stringify(t, nf, 2)
            : String(t),
    nf = (t, e) =>
      ef(e)
        ? nf(t, e.value)
        : Pn(e)
          ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o], i) => ((n[Bo(r, i) + " =>"] = o), n), {}) }
          : uo(e)
            ? { [`Set(${e.size})`]: [...e.values()].map((n) => Bo(n)) }
            : _e(e)
              ? Bo(e)
              : Et(e) && !X(e) && !Zu(e)
                ? String(e)
                : e,
    Bo = (t, e = "") => {
      var n;
      return _e(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
    };
  /**
   * @vue/reactivity v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Jt;
  class rf {
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
  function of(t) {
    return new rf(t);
  }
  function xs() {
    return Jt;
  }
  function sf(t, e = !1) {
    Jt && Jt.cleanups.push(t);
  }
  let wt;
  const Vo = new WeakSet();
  class af {
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
      this.flags & 64 && ((this.flags &= -65), Vo.has(this) && (Vo.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || cf(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), Sa(this), uf(this);
      const e = wt,
        n = ue;
      (wt = this), (ue = !0);
      try {
        return this.fn();
      } finally {
        ff(this), (wt = e), (ue = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Es(e);
        (this.deps = this.depsTail = void 0), Sa(this), this.onStop && this.onStop(), (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64 ? Vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Vi(this) && this.run();
    }
    get dirty() {
      return Vi(this);
    }
  }
  let lf = 0,
    nr;
  function cf(t) {
    (t.flags |= 8), (t.next = nr), (nr = t);
  }
  function Ss() {
    lf++;
  }
  function As() {
    if (--lf > 0) return;
    let t;
    for (; nr; ) {
      let e = nr;
      for (nr = void 0; e; ) {
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
  function uf(t) {
    for (let e = t.deps; e; e = e.nextDep)
      (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e);
  }
  function ff(t) {
    let e,
      n = t.depsTail,
      r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Es(r), lp(r)) : (e = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = o);
    }
    (t.deps = e), (t.depsTail = n);
  }
  function Vi(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || (e.dep.computed && (df(e.dep.computed) || e.dep.version !== e.version)))
        return !0;
    return !!t._dirty;
  }
  function df(t) {
    if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === fr)) return;
    t.globalVersion = fr;
    const e = t.dep;
    if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Vi(t))) {
      t.flags &= -3;
      return;
    }
    const n = wt,
      r = ue;
    (wt = t), (ue = !0);
    try {
      uf(t);
      const o = t.fn(t._value);
      (e.version === 0 || Yt(o, t._value)) && ((t._value = o), e.version++);
    } catch (o) {
      throw (e.version++, o);
    } finally {
      (wt = n), (ue = r), ff(t), (t.flags &= -3);
    }
  }
  function Es(t) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (
      (n && ((n.nextSub = r), (t.prevSub = void 0)),
      r && ((r.prevSub = n), (t.nextSub = void 0)),
      e.subs === t && (e.subs = n),
      !e.subs && e.computed)
    ) {
      e.computed.flags &= -5;
      for (let o = e.computed.deps; o; o = o.nextDep) Es(o);
    }
  }
  function lp(t) {
    const { prevDep: e, nextDep: n } = t;
    e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0));
  }
  let ue = !0;
  const hf = [];
  function Ye() {
    hf.push(ue), (ue = !1);
  }
  function Qe() {
    const t = hf.pop();
    ue = t === void 0 ? !0 : t;
  }
  function Sa(t) {
    const { cleanup: e } = t;
    if (((t.cleanup = void 0), e)) {
      const n = wt;
      wt = void 0;
      try {
        e();
      } finally {
        wt = n;
      }
    }
  }
  let fr = 0;
  class cp {
    constructor(e, n) {
      (this.sub = e),
        (this.dep = n),
        (this.version = n.version),
        (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
  }
  class go {
    constructor(e) {
      (this.computed = e), (this.version = 0), (this.activeLink = void 0), (this.subs = void 0);
    }
    track(e) {
      if (!wt || !ue || wt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== wt)
        (n = this.activeLink = new cp(wt, this)),
          wt.deps
            ? ((n.prevDep = wt.depsTail), (wt.depsTail.nextDep = n), (wt.depsTail = n))
            : (wt.deps = wt.depsTail = n),
          wt.flags & 4 && pf(n);
      else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
        const r = n.nextDep;
        (r.prevDep = n.prevDep),
          n.prevDep && (n.prevDep.nextDep = r),
          (n.prevDep = wt.depsTail),
          (n.nextDep = void 0),
          (wt.depsTail.nextDep = n),
          (wt.depsTail = n),
          wt.deps === n && (wt.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, fr++, this.notify(e);
    }
    notify(e) {
      Ss();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        As();
      }
    }
  }
  function pf(t) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) pf(r);
    }
    const n = t.dep.subs;
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
  }
  const Yr = new WeakMap(),
    ln = Symbol(""),
    Hi = Symbol(""),
    dr = Symbol("");
  function Wt(t, e, n) {
    if (ue && wt) {
      let r = Yr.get(t);
      r || Yr.set(t, (r = new Map()));
      let o = r.get(n);
      o || r.set(n, (o = new go())), o.track();
    }
  }
  function $e(t, e, n, r, o, i) {
    const s = Yr.get(t);
    if (!s) {
      fr++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((Ss(), e === "clear")) s.forEach(a);
    else {
      const l = X(t),
        c = l && ws(n);
      if (l && n === "length") {
        const u = Number(r);
        s.forEach((d, f) => {
          (f === "length" || f === dr || (!_e(f) && f >= u)) && a(d);
        });
      } else
        switch ((n !== void 0 && a(s.get(n)), c && a(s.get(dr)), e)) {
          case "add":
            l ? c && a(s.get("length")) : (a(s.get(ln)), Pn(t) && a(s.get(Hi)));
            break;
          case "delete":
            l || (a(s.get(ln)), Pn(t) && a(s.get(Hi)));
            break;
          case "set":
            Pn(t) && a(s.get(ln));
            break;
        }
    }
    As();
  }
  function up(t, e) {
    var n;
    return (n = Yr.get(t)) == null ? void 0 : n.get(e);
  }
  function An(t) {
    const e = dt(t);
    return e === t ? e : (Wt(e, "iterate", dr), se(t) ? e : e.map(Kt));
  }
  function vo(t) {
    return Wt((t = dt(t)), "iterate", dr), t;
  }
  const fp = {
    __proto__: null,
    [Symbol.iterator]() {
      return Ho(this, Symbol.iterator, Kt);
    },
    concat(...t) {
      return An(this).concat(...t.map((e) => (X(e) ? An(e) : e)));
    },
    entries() {
      return Ho(this, "entries", (t) => ((t[1] = Kt(t[1])), t));
    },
    every(t, e) {
      return Oe(this, "every", t, e, void 0, arguments);
    },
    filter(t, e) {
      return Oe(this, "filter", t, e, (n) => n.map(Kt), arguments);
    },
    find(t, e) {
      return Oe(this, "find", t, e, Kt, arguments);
    },
    findIndex(t, e) {
      return Oe(this, "findIndex", t, e, void 0, arguments);
    },
    findLast(t, e) {
      return Oe(this, "findLast", t, e, Kt, arguments);
    },
    findLastIndex(t, e) {
      return Oe(this, "findLastIndex", t, e, void 0, arguments);
    },
    forEach(t, e) {
      return Oe(this, "forEach", t, e, void 0, arguments);
    },
    includes(...t) {
      return Ko(this, "includes", t);
    },
    indexOf(...t) {
      return Ko(this, "indexOf", t);
    },
    join(t) {
      return An(this).join(t);
    },
    lastIndexOf(...t) {
      return Ko(this, "lastIndexOf", t);
    },
    map(t, e) {
      return Oe(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return Wn(this, "pop");
    },
    push(...t) {
      return Wn(this, "push", t);
    },
    reduce(t, ...e) {
      return Aa(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return Aa(this, "reduceRight", t, e);
    },
    shift() {
      return Wn(this, "shift");
    },
    some(t, e) {
      return Oe(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return Wn(this, "splice", t);
    },
    toReversed() {
      return An(this).toReversed();
    },
    toSorted(t) {
      return An(this).toSorted(t);
    },
    toSpliced(...t) {
      return An(this).toSpliced(...t);
    },
    unshift(...t) {
      return Wn(this, "unshift", t);
    },
    values() {
      return Ho(this, "values", Kt);
    },
  };
  function Ho(t, e, n) {
    const r = vo(t),
      o = r[e]();
    return (
      r !== t &&
        !se(t) &&
        ((o._next = o.next),
        (o.next = () => {
          const i = o._next();
          return i.value && (i.value = n(i.value)), i;
        })),
      o
    );
  }
  const dp = Array.prototype;
  function Oe(t, e, n, r, o, i) {
    const s = vo(t),
      a = s !== t && !se(t),
      l = s[e];
    if (l !== dp[e]) {
      const d = l.apply(t, i);
      return a ? Kt(d) : d;
    }
    let c = n;
    s !== t &&
      (a
        ? (c = function (d, f) {
            return n.call(this, Kt(d), f, t);
          })
        : n.length > 2 &&
          (c = function (d, f) {
            return n.call(this, d, f, t);
          }));
    const u = l.call(s, c, r);
    return a && o ? o(u) : u;
  }
  function Aa(t, e, n, r) {
    const o = vo(t);
    let i = n;
    return (
      o !== t &&
        (se(t)
          ? n.length > 3 &&
            (i = function (s, a, l) {
              return n.call(this, s, a, l, t);
            })
          : (i = function (s, a, l) {
              return n.call(this, s, Kt(a), l, t);
            })),
      o[e](i, ...r)
    );
  }
  function Ko(t, e, n) {
    const r = dt(t);
    Wt(r, "iterate", dr);
    const o = r[e](...n);
    return (o === -1 || o === !1) && Cs(n[0]) ? ((n[0] = dt(n[0])), r[e](...n)) : o;
  }
  function Wn(t, e, n = []) {
    Ye(), Ss();
    const r = dt(t)[e].apply(t, n);
    return As(), Qe(), r;
  }
  const hp = ms("__proto__,__v_isRef,__isVue"),
    gf = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((t) => t !== "arguments" && t !== "caller")
        .map((t) => Symbol[t])
        .filter(_e),
    );
  function pp(t) {
    _e(t) || (t = String(t));
    const e = dt(this);
    return Wt(e, "has", t), e.hasOwnProperty(t);
  }
  class vf {
    constructor(e = !1, n = !1) {
      (this._isReadonly = e), (this._isShallow = n);
    }
    get(e, n, r) {
      const o = this._isReadonly,
        i = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw")
        return r === (o ? (i ? Tp : _f) : i ? bf : mf).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
          ? e
          : void 0;
      const s = X(e);
      if (!o) {
        let l;
        if (s && (l = fp[n])) return l;
        if (n === "hasOwnProperty") return pp;
      }
      const a = Reflect.get(e, n, kt(e) ? e : r);
      return (_e(n) ? gf.has(n) : hp(n)) || (o || Wt(e, "get", n), i)
        ? a
        : kt(a)
          ? s && ws(n)
            ? a
            : a.value
          : Et(a)
            ? o
              ? xf(a)
              : Ln(a)
            : a;
    }
  }
  class yf extends vf {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, n, r, o) {
      let i = e[n];
      if (!this._isShallow) {
        const l = un(i);
        if ((!se(r) && !un(r) && ((i = dt(i)), (r = dt(r))), !X(e) && kt(i) && !kt(r)))
          return l ? !1 : ((i.value = r), !0);
      }
      const s = X(e) && ws(n) ? Number(n) < e.length : pt(e, n),
        a = Reflect.set(e, n, r, kt(e) ? e : o);
      return e === dt(o) && (s ? Yt(r, i) && $e(e, "set", n, r) : $e(e, "add", n, r)), a;
    }
    deleteProperty(e, n) {
      const r = pt(e, n);
      e[n];
      const o = Reflect.deleteProperty(e, n);
      return o && r && $e(e, "delete", n, void 0), o;
    }
    has(e, n) {
      const r = Reflect.has(e, n);
      return (!_e(n) || !gf.has(n)) && Wt(e, "has", n), r;
    }
    ownKeys(e) {
      return Wt(e, "iterate", X(e) ? "length" : ln), Reflect.ownKeys(e);
    }
  }
  class gp extends vf {
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
  const vp = new yf(),
    yp = new gp(),
    mp = new yf(!0),
    Os = (t) => t,
    yo = (t) => Reflect.getPrototypeOf(t);
  function jr(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const o = dt(t),
      i = dt(e);
    n || (Yt(e, i) && Wt(o, "get", e), Wt(o, "get", i));
    const { has: s } = yo(o),
      a = r ? Os : n ? Rs : Kt;
    if (s.call(o, e)) return a(t.get(e));
    if (s.call(o, i)) return a(t.get(i));
    t !== o && t.get(e);
  }
  function Cr(t, e = !1) {
    const n = this.__v_raw,
      r = dt(n),
      o = dt(t);
    return e || (Yt(t, o) && Wt(r, "has", t), Wt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
  }
  function Pr(t, e = !1) {
    return (t = t.__v_raw), !e && Wt(dt(t), "iterate", ln), Reflect.get(t, "size", t);
  }
  function Ea(t, e = !1) {
    !e && !se(t) && !un(t) && (t = dt(t));
    const n = dt(this);
    return yo(n).has.call(n, t) || (n.add(t), $e(n, "add", t, t)), this;
  }
  function Oa(t, e, n = !1) {
    !n && !se(e) && !un(e) && (e = dt(e));
    const r = dt(this),
      { has: o, get: i } = yo(r);
    let s = o.call(r, t);
    s || ((t = dt(t)), (s = o.call(r, t)));
    const a = i.call(r, t);
    return r.set(t, e), s ? Yt(e, a) && $e(r, "set", t, e) : $e(r, "add", t, e), this;
  }
  function Ta(t) {
    const e = dt(this),
      { has: n, get: r } = yo(e);
    let o = n.call(e, t);
    o || ((t = dt(t)), (o = n.call(e, t))), r && r.call(e, t);
    const i = e.delete(t);
    return o && $e(e, "delete", t, void 0), i;
  }
  function ja() {
    const t = dt(this),
      e = t.size !== 0,
      n = t.clear();
    return e && $e(t, "clear", void 0, void 0), n;
  }
  function Rr(t, e) {
    return function (r, o) {
      const i = this,
        s = i.__v_raw,
        a = dt(s),
        l = e ? Os : t ? Rs : Kt;
      return !t && Wt(a, "iterate", ln), s.forEach((c, u) => r.call(o, l(c), l(u), i));
    };
  }
  function kr(t, e, n) {
    return function (...r) {
      const o = this.__v_raw,
        i = dt(o),
        s = Pn(i),
        a = t === "entries" || (t === Symbol.iterator && s),
        l = t === "keys" && s,
        c = o[t](...r),
        u = n ? Os : e ? Rs : Kt;
      return (
        !e && Wt(i, "iterate", l ? Hi : ln),
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
  function Le(t) {
    return function (...e) {
      return t === "delete" ? !1 : t === "clear" ? void 0 : this;
    };
  }
  function bp() {
    const t = {
        get(i) {
          return jr(this, i);
        },
        get size() {
          return Pr(this);
        },
        has: Cr,
        add: Ea,
        set: Oa,
        delete: Ta,
        clear: ja,
        forEach: Rr(!1, !1),
      },
      e = {
        get(i) {
          return jr(this, i, !1, !0);
        },
        get size() {
          return Pr(this);
        },
        has: Cr,
        add(i) {
          return Ea.call(this, i, !0);
        },
        set(i, s) {
          return Oa.call(this, i, s, !0);
        },
        delete: Ta,
        clear: ja,
        forEach: Rr(!1, !0),
      },
      n = {
        get(i) {
          return jr(this, i, !0);
        },
        get size() {
          return Pr(this, !0);
        },
        has(i) {
          return Cr.call(this, i, !0);
        },
        add: Le("add"),
        set: Le("set"),
        delete: Le("delete"),
        clear: Le("clear"),
        forEach: Rr(!0, !1),
      },
      r = {
        get(i) {
          return jr(this, i, !0, !0);
        },
        get size() {
          return Pr(this, !0);
        },
        has(i) {
          return Cr.call(this, i, !0);
        },
        add: Le("add"),
        set: Le("set"),
        delete: Le("delete"),
        clear: Le("clear"),
        forEach: Rr(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
        (t[i] = kr(i, !1, !1)), (n[i] = kr(i, !0, !1)), (e[i] = kr(i, !1, !0)), (r[i] = kr(i, !0, !0));
      }),
      [t, n, e, r]
    );
  }
  const [_p, wp, xp, Sp] = bp();
  function Ts(t, e) {
    const n = e ? (t ? Sp : xp) : t ? wp : _p;
    return (r, o, i) =>
      o === "__v_isReactive"
        ? !t
        : o === "__v_isReadonly"
          ? t
          : o === "__v_raw"
            ? r
            : Reflect.get(pt(n, o) && o in r ? n : r, o, i);
  }
  const Ap = { get: Ts(!1, !1) },
    Ep = { get: Ts(!1, !0) },
    Op = { get: Ts(!0, !1) },
    mf = new WeakMap(),
    bf = new WeakMap(),
    _f = new WeakMap(),
    Tp = new WeakMap();
  function jp(t) {
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
  function Cp(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : jp(Yh(t));
  }
  function Ln(t) {
    return un(t) ? t : js(t, !1, vp, Ap, mf);
  }
  function wf(t) {
    return js(t, !1, mp, Ep, bf);
  }
  function xf(t) {
    return js(t, !0, yp, Op, _f);
  }
  function js(t, e, n, r, o) {
    if (!Et(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const i = o.get(t);
    if (i) return i;
    const s = Cp(t);
    if (s === 0) return t;
    const a = new Proxy(t, s === 2 ? r : n);
    return o.set(t, a), a;
  }
  function Ke(t) {
    return un(t) ? Ke(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function un(t) {
    return !!(t && t.__v_isReadonly);
  }
  function se(t) {
    return !!(t && t.__v_isShallow);
  }
  function Cs(t) {
    return t ? !!t.__v_raw : !1;
  }
  function dt(t) {
    const e = t && t.__v_raw;
    return e ? dt(e) : t;
  }
  function Ps(t) {
    return !pt(t, "__v_skip") && Object.isExtensible(t) && Yu(t, "__v_skip", !0), t;
  }
  const Kt = (t) => (Et(t) ? Ln(t) : t),
    Rs = (t) => (Et(t) ? xf(t) : t);
  function kt(t) {
    return t ? t.__v_isRef === !0 : !1;
  }
  function ct(t) {
    return Af(t, !1);
  }
  function Sf(t) {
    return Af(t, !0);
  }
  function Af(t, e) {
    return kt(t) ? t : new Pp(t, e);
  }
  class Pp {
    constructor(e, n) {
      (this.dep = new go()),
        (this.__v_isRef = !0),
        (this.__v_isShallow = !1),
        (this._rawValue = n ? e : dt(e)),
        (this._value = n ? e : Kt(e)),
        (this.__v_isShallow = n);
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(e) {
      const n = this._rawValue,
        r = this.__v_isShallow || se(e) || un(e);
      (e = r ? e : dt(e)), Yt(e, n) && ((this._rawValue = e), (this._value = r ? e : Kt(e)), this.dep.trigger());
    }
  }
  function G(t) {
    return kt(t) ? t.value : t;
  }
  const Rp = {
    get: (t, e, n) => (e === "__v_raw" ? t : G(Reflect.get(t, e, n))),
    set: (t, e, n, r) => {
      const o = t[e];
      return kt(o) && !kt(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, r);
    },
  };
  function Ef(t) {
    return Ke(t) ? t : new Proxy(t, Rp);
  }
  class kp {
    constructor(e) {
      (this.__v_isRef = !0), (this._value = void 0);
      const n = (this.dep = new go()),
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
  function $p(t) {
    return new kp(t);
  }
  function Ip(t) {
    const e = X(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = Np(t, n);
    return e;
  }
  class Mp {
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
      return up(dt(this._object), this._key);
    }
  }
  function Np(t, e, n) {
    const r = t[e];
    return kt(r) ? r : new Mp(t, e, n);
  }
  class Fp {
    constructor(e, n, r) {
      (this.fn = e),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new go(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = fr - 1),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && wt !== this)) return cf(this), !0;
    }
    get value() {
      const e = this.dep.track();
      return df(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function Dp(t, e, n = !1) {
    let r, o;
    return ot(t) ? (r = t) : ((r = t.get), (o = t.set)), new Fp(r, o, n);
  }
  const $r = {},
    Qr = new WeakMap();
  let sn;
  function Lp(t, e = !1, n = sn) {
    if (n) {
      let r = Qr.get(n);
      r || Qr.set(n, (r = [])), r.push(t);
    }
  }
  function zp(t, e, n = ht) {
    const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: l } = n,
      c = (S) => (o ? S : se(S) || o === !1 || o === 0 ? Re(S, 1) : Re(S));
    let u,
      d,
      f,
      h,
      v = !1,
      m = !1;
    if (
      (kt(t)
        ? ((d = () => t.value), (v = se(t)))
        : Ke(t)
          ? ((d = () => c(t)), (v = !0))
          : X(t)
            ? ((m = !0),
              (v = t.some((S) => Ke(S) || se(S))),
              (d = () =>
                t.map((S) => {
                  if (kt(S)) return S.value;
                  if (Ke(S)) return c(S);
                  if (ot(S)) return l ? l(S, 2) : S();
                })))
            : ot(t)
              ? e
                ? (d = l ? () => l(t, 2) : t)
                : (d = () => {
                    if (f) {
                      Ye();
                      try {
                        f();
                      } finally {
                        Qe();
                      }
                    }
                    const S = sn;
                    sn = u;
                    try {
                      return l ? l(t, 3, [h]) : t(h);
                    } finally {
                      sn = S;
                    }
                  })
              : (d = ye),
      e && o)
    ) {
      const S = d,
        C = o === !0 ? 1 / 0 : o;
      d = () => Re(S(), C);
    }
    const w = xs(),
      b = () => {
        u.stop(), w && _s(w.effects, u);
      };
    if (i && e) {
      const S = e;
      e = (...C) => {
        S(...C), b();
      };
    }
    let _ = m ? new Array(t.length).fill($r) : $r;
    const x = (S) => {
      if (!(!(u.flags & 1) || (!u.dirty && !S)))
        if (e) {
          const C = u.run();
          if (o || v || (m ? C.some((z, j) => Yt(z, _[j])) : Yt(C, _))) {
            f && f();
            const z = sn;
            sn = u;
            try {
              const j = [C, _ === $r ? void 0 : m && _[0] === $r ? [] : _, h];
              l ? l(e, 3, j) : e(...j), (_ = C);
            } finally {
              sn = z;
            }
          }
        } else u.run();
    };
    return (
      a && a(x),
      (u = new af(d)),
      (u.scheduler = s ? () => s(x, !1) : x),
      (h = (S) => Lp(S, !1, u)),
      (f = u.onStop =
        () => {
          const S = Qr.get(u);
          if (S) {
            if (l) l(S, 4);
            else for (const C of S) C();
            Qr.delete(u);
          }
        }),
      e ? (r ? x(!0) : (_ = u.run())) : s ? s(x.bind(null, !0), !0) : u.run(),
      (b.pause = u.pause.bind(u)),
      (b.resume = u.resume.bind(u)),
      (b.stop = b),
      b
    );
  }
  function Re(t, e = 1 / 0, n) {
    if (e <= 0 || !Et(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
    if ((n.add(t), e--, kt(t))) Re(t.value, e, n);
    else if (X(t)) for (let r = 0; r < t.length; r++) Re(t[r], e, n);
    else if (uo(t) || Pn(t))
      t.forEach((r) => {
        Re(r, e, n);
      });
    else if (Zu(t)) {
      for (const r in t) Re(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && Re(t[r], e, n);
    }
    return t;
  }
  /**
   * @vue/runtime-core v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function Ar(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (o) {
      mo(o, e, n);
    }
  }
  function we(t, e, n, r) {
    if (ot(t)) {
      const o = Ar(t, e, n, r);
      return (
        o &&
          Gu(o) &&
          o.catch((i) => {
            mo(i, e, n);
          }),
        o
      );
    }
    if (X(t)) {
      const o = [];
      for (let i = 0; i < t.length; i++) o.push(we(t[i], e, n, r));
      return o;
    }
  }
  function mo(t, e, n, r = !0) {
    const o = e ? e.vnode : null,
      { errorHandler: i, throwUnhandledErrorInProduction: s } = (e && e.appContext.config) || ht;
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
      if (i) {
        Ye(), Ar(i, null, 10, [t, l, c]), Qe();
        return;
      }
    }
    Up(t, n, o, r, s);
  }
  function Up(t, e, n, r = !0, o = !1) {
    if (o) throw t;
    console.error(t);
  }
  let hr = !1,
    Ki = !1;
  const Zt = [];
  let ge = 0;
  const Rn = [];
  let Be = null,
    On = 0;
  const Of = Promise.resolve();
  let ks = null;
  function bo(t) {
    const e = ks || Of;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function Bp(t) {
    let e = hr ? ge + 1 : 0,
      n = Zt.length;
    for (; e < n; ) {
      const r = (e + n) >>> 1,
        o = Zt[r],
        i = pr(o);
      i < t || (i === t && o.flags & 2) ? (e = r + 1) : (n = r);
    }
    return e;
  }
  function $s(t) {
    if (!(t.flags & 1)) {
      const e = pr(t),
        n = Zt[Zt.length - 1];
      !n || (!(t.flags & 2) && e >= pr(n)) ? Zt.push(t) : Zt.splice(Bp(e), 0, t), (t.flags |= 1), Tf();
    }
  }
  function Tf() {
    !hr && !Ki && ((Ki = !0), (ks = Of.then(Cf)));
  }
  function Vp(t) {
    X(t) ? Rn.push(...t) : Be && t.id === -1 ? Be.splice(On + 1, 0, t) : t.flags & 1 || (Rn.push(t), (t.flags |= 1)),
      Tf();
  }
  function Ca(t, e, n = hr ? ge + 1 : 0) {
    for (; n < Zt.length; n++) {
      const r = Zt[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        Zt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), (r.flags &= -2);
      }
    }
  }
  function jf(t) {
    if (Rn.length) {
      const e = [...new Set(Rn)].sort((n, r) => pr(n) - pr(r));
      if (((Rn.length = 0), Be)) {
        Be.push(...e);
        return;
      }
      for (Be = e, On = 0; On < Be.length; On++) {
        const n = Be[On];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (Be = null), (On = 0);
    }
  }
  const pr = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
  function Cf(t) {
    (Ki = !1), (hr = !0);
    try {
      for (ge = 0; ge < Zt.length; ge++) {
        const e = Zt[ge];
        e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Ar(e, e.i, e.i ? 15 : 14), (e.flags &= -2));
      }
    } finally {
      for (; ge < Zt.length; ge++) {
        const e = Zt[ge];
        e && (e.flags &= -2);
      }
      (ge = 0), (Zt.length = 0), jf(), (hr = !1), (ks = null), (Zt.length || Rn.length) && Cf();
    }
  }
  let Ft = null,
    Pf = null;
  function Xr(t) {
    const e = Ft;
    return (Ft = t), (Pf = (t && t.type.__scopeId) || null), e;
  }
  function Ie(t, e = Ft, n) {
    if (!e || t._n) return t;
    const r = (...o) => {
      r._d && Fa(-1);
      const i = Xr(e);
      let s;
      try {
        s = t(...o);
      } finally {
        Xr(i), r._d && Fa(1);
      }
      return s;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Is(t, e) {
    if (Ft === null) return t;
    const n = Eo(Ft),
      r = t.dirs || (t.dirs = []);
    for (let o = 0; o < e.length; o++) {
      let [i, s, a, l = ht] = e[o];
      i &&
        (ot(i) && (i = { mounted: i, updated: i }),
        i.deep && Re(s),
        r.push({ dir: i, instance: n, value: s, oldValue: void 0, arg: a, modifiers: l }));
    }
    return t;
  }
  function nn(t, e, n, r) {
    const o = t.dirs,
      i = e && e.dirs;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      i && (a.oldValue = i[s].value);
      let l = a.dir[r];
      l && (Ye(), we(l, n, 8, [t.el, a, t, e]), Qe());
    }
  }
  const Hp = Symbol("_vte"),
    Kp = (t) => t.__isTeleport;
  function Ms(t, e) {
    t.shapeFlag & 6 && t.component
      ? ((t.transition = e), Ms(t.component.subTree, e))
      : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Dt(t, e) {
    return ot(t) ? zt({ name: t.name }, e, { setup: t }) : t;
  }
  function Rf(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function Wi(t, e, n, r, o = !1) {
    if (X(t)) {
      t.forEach((v, m) => Wi(v, e && (X(e) ? e[m] : e), n, r, o));
      return;
    }
    if (kn(r) && !o) return;
    const i = r.shapeFlag & 4 ? Eo(r.component) : r.el,
      s = o ? null : i,
      { i: a, r: l } = t,
      c = e && e.r,
      u = a.refs === ht ? (a.refs = {}) : a.refs,
      d = a.setupState,
      f = dt(d),
      h = d === ht ? () => !1 : (v) => pt(f, v);
    if ((c != null && c !== l && (It(c) ? ((u[c] = null), h(c) && (d[c] = null)) : kt(c) && (c.value = null)), ot(l)))
      Ar(l, a, 12, [s, u]);
    else {
      const v = It(l),
        m = kt(l);
      if (v || m) {
        const w = () => {
          if (t.f) {
            const b = v ? (h(l) ? d[l] : u[l]) : l.value;
            o
              ? X(b) && _s(b, i)
              : X(b)
                ? b.includes(i) || b.push(i)
                : v
                  ? ((u[l] = [i]), h(l) && (d[l] = u[l]))
                  : ((l.value = [i]), t.k && (u[t.k] = l.value));
          } else v ? ((u[l] = s), h(l) && (d[l] = s)) : m && ((l.value = s), t.k && (u[t.k] = s));
        };
        s ? ((w.id = -1), ne(w, n)) : w();
      }
    }
  }
  const kn = (t) => !!t.type.__asyncLoader,
    kf = (t) => t.type.__isKeepAlive;
  function Wp(t, e) {
    $f(t, "a", e);
  }
  function qp(t, e) {
    $f(t, "da", e);
  }
  function $f(t, e, n = Lt) {
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
    if ((_o(e, r, n), n)) {
      let o = n.parent;
      for (; o && o.parent; ) kf(o.parent.vnode) && Gp(r, e, n, o), (o = o.parent);
    }
  }
  function Gp(t, e, n, r) {
    const o = _o(e, t, r, !0);
    Mf(() => {
      _s(r[e], o);
    }, n);
  }
  function _o(t, e, n = Lt, r = !1) {
    if (n) {
      const o = n[t] || (n[t] = []),
        i =
          e.__weh ||
          (e.__weh = (...s) => {
            Ye();
            const a = Or(n),
              l = we(e, n, t, s);
            return a(), Qe(), l;
          });
      return r ? o.unshift(i) : o.push(i), i;
    }
  }
  const Me =
      (t) =>
      (e, n = Lt) => {
        (!Ao || t === "sp") && _o(t, (...r) => e(...r), n);
      },
    Jp = Me("bm"),
    Ns = Me("m"),
    If = Me("bu"),
    Zp = Me("u"),
    Yp = Me("bum"),
    Mf = Me("um"),
    Qp = Me("sp"),
    Xp = Me("rtg"),
    tg = Me("rtc");
  function eg(t, e = Lt) {
    _o("ec", t, e);
  }
  const ng = "components";
  function rg(t, e) {
    return ig(ng, t, !0, e) || t;
  }
  const og = Symbol.for("v-ndc");
  function ig(t, e, n = !0, r = !1) {
    const o = Ft || Lt;
    if (o) {
      const i = o.type;
      {
        const a = qg(i, !1);
        if (a && (a === e || a === oe(e) || a === ho(oe(e)))) return i;
      }
      const s = Pa(o[t] || i[t], e) || Pa(o.appContext[t], e);
      return !s && r ? i : s;
    }
  }
  function Pa(t, e) {
    return t && (t[e] || t[oe(e)] || t[ho(oe(e))]);
  }
  function Qt(t, e, n, r) {
    let o;
    const i = n,
      s = X(t);
    if (s || It(t)) {
      const a = s && Ke(t);
      let l = !1;
      a && ((l = !se(t)), (t = vo(t))), (o = new Array(t.length));
      for (let c = 0, u = t.length; c < u; c++) o[c] = e(l ? Kt(t[c]) : t[c], c, void 0, i);
    } else if (typeof t == "number") {
      o = new Array(t);
      for (let a = 0; a < t; a++) o[a] = e(a + 1, a, void 0, i);
    } else if (Et(t))
      if (t[Symbol.iterator]) o = Array.from(t, (a, l) => e(a, l, void 0, i));
      else {
        const a = Object.keys(t);
        o = new Array(a.length);
        for (let l = 0, c = a.length; l < c; l++) {
          const u = a[l];
          o[l] = e(t[u], u, l, i);
        }
      }
    else o = [];
    return o;
  }
  function ke(t, e, n = {}, r, o) {
    if (Ft.ce || (Ft.parent && kn(Ft.parent) && Ft.parent.ce))
      return e !== "default" && (n.name = e), L(), $n(ut, null, [st("slot", n, r)], 64);
    let i = t[e];
    i && i._c && (i._d = !1), L();
    const s = i && Nf(i(n)),
      a = $n(
        ut,
        { key: (n.key || (s && s.key) || `_${e}`) + (!s && r ? "_fb" : "") },
        s || [],
        s && t._ === 1 ? 64 : -2,
      );
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
  }
  function Nf(t) {
    return t.some((e) => (no(e) ? !(e.type === qe || (e.type === ut && !Nf(e.children))) : !0)) ? t : null;
  }
  const qi = (t) => (t ? (od(t) ? Eo(t) : qi(t.parent)) : null),
    rr = zt(Object.create(null), {
      $: (t) => t,
      $el: (t) => t.vnode.el,
      $data: (t) => t.data,
      $props: (t) => t.props,
      $attrs: (t) => t.attrs,
      $slots: (t) => t.slots,
      $refs: (t) => t.refs,
      $parent: (t) => qi(t.parent),
      $root: (t) => qi(t.root),
      $host: (t) => t.ce,
      $emit: (t) => t.emit,
      $options: (t) => Fs(t),
      $forceUpdate: (t) =>
        t.f ||
        (t.f = () => {
          $s(t.update);
        }),
      $nextTick: (t) => t.n || (t.n = bo.bind(t.proxy)),
      $watch: (t) => Cg.bind(t),
    }),
    Wo = (t, e) => t !== ht && !t.__isScriptSetup && pt(t, e),
    sg = {
      get({ _: t }, e) {
        if (e === "__v_skip") return !0;
        const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: l } = t;
        let c;
        if (e[0] !== "$") {
          const h = s[e];
          if (h !== void 0)
            switch (h) {
              case 1:
                return r[e];
              case 2:
                return o[e];
              case 4:
                return n[e];
              case 3:
                return i[e];
            }
          else {
            if (Wo(r, e)) return (s[e] = 1), r[e];
            if (o !== ht && pt(o, e)) return (s[e] = 2), o[e];
            if ((c = t.propsOptions[0]) && pt(c, e)) return (s[e] = 3), i[e];
            if (n !== ht && pt(n, e)) return (s[e] = 4), n[e];
            Gi && (s[e] = 0);
          }
        }
        const u = rr[e];
        let d, f;
        if (u) return e === "$attrs" && Wt(t.attrs, "get", ""), u(t);
        if ((d = a.__cssModules) && (d = d[e])) return d;
        if (n !== ht && pt(n, e)) return (s[e] = 4), n[e];
        if (((f = l.config.globalProperties), pt(f, e))) return f[e];
      },
      set({ _: t }, e, n) {
        const { data: r, setupState: o, ctx: i } = t;
        return Wo(o, e)
          ? ((o[e] = n), !0)
          : r !== ht && pt(r, e)
            ? ((r[e] = n), !0)
            : pt(t.props, e) || (e[0] === "$" && e.slice(1) in t)
              ? !1
              : ((i[e] = n), !0);
      },
      has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: i } }, s) {
        let a;
        return (
          !!n[s] ||
          (t !== ht && pt(t, s)) ||
          Wo(e, s) ||
          ((a = i[0]) && pt(a, s)) ||
          pt(r, s) ||
          pt(rr, s) ||
          pt(o.config.globalProperties, s)
        );
      },
      defineProperty(t, e, n) {
        return (
          n.get != null ? (t._.accessCache[e] = 0) : pt(n, "value") && this.set(t, e, n.value, null),
          Reflect.defineProperty(t, e, n)
        );
      },
    };
  function to(t) {
    return X(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
  }
  function ag(t, e) {
    return !t || !e ? t || e : X(t) && X(e) ? t.concat(e) : zt({}, to(t), to(e));
  }
  let Gi = !0;
  function lg(t) {
    const e = Fs(t),
      n = t.proxy,
      r = t.ctx;
    (Gi = !1), e.beforeCreate && Ra(e.beforeCreate, t, "bc");
    const {
      data: o,
      computed: i,
      methods: s,
      watch: a,
      provide: l,
      inject: c,
      created: u,
      beforeMount: d,
      mounted: f,
      beforeUpdate: h,
      updated: v,
      activated: m,
      deactivated: w,
      beforeDestroy: b,
      beforeUnmount: _,
      destroyed: x,
      unmounted: S,
      render: C,
      renderTracked: z,
      renderTriggered: j,
      errorCaptured: N,
      serverPrefetch: J,
      expose: I,
      inheritAttrs: p,
      components: A,
      directives: P,
      filters: Z,
    } = e;
    if ((c && cg(c, r, null), s))
      for (const V in s) {
        const it = s[V];
        ot(it) && (r[V] = it.bind(n));
      }
    if (o) {
      const V = o.call(n, n);
      Et(V) && (t.data = Ln(V));
    }
    if (((Gi = !0), i))
      for (const V in i) {
        const it = i[V],
          Ut = ot(it) ? it.bind(n, n) : ot(it.get) ? it.get.bind(n, n) : ye,
          Pt = !ot(it) && ot(it.set) ? it.set.bind(n) : ye,
          qt = rt({ get: Ut, set: Pt });
        Object.defineProperty(r, V, {
          enumerable: !0,
          configurable: !0,
          get: () => qt.value,
          set: (_t) => (qt.value = _t),
        });
      }
    if (a) for (const V in a) Ff(a[V], r, n, V);
    if (l) {
      const V = ot(l) ? l.call(n) : l;
      Reflect.ownKeys(V).forEach((it) => {
        Hr(it, V[it]);
      });
    }
    u && Ra(u, t, "c");
    function H(V, it) {
      X(it) ? it.forEach((Ut) => V(Ut.bind(n))) : it && V(it.bind(n));
    }
    if (
      (H(Jp, d),
      H(Ns, f),
      H(If, h),
      H(Zp, v),
      H(Wp, m),
      H(qp, w),
      H(eg, N),
      H(tg, z),
      H(Xp, j),
      H(Yp, _),
      H(Mf, S),
      H(Qp, J),
      X(I))
    )
      if (I.length) {
        const V = t.exposed || (t.exposed = {});
        I.forEach((it) => {
          Object.defineProperty(V, it, { get: () => n[it], set: (Ut) => (n[it] = Ut) });
        });
      } else t.exposed || (t.exposed = {});
    C && t.render === ye && (t.render = C),
      p != null && (t.inheritAttrs = p),
      A && (t.components = A),
      P && (t.directives = P),
      J && Rf(t);
  }
  function cg(t, e, n = ye) {
    X(t) && (t = Ji(t));
    for (const r in t) {
      const o = t[r];
      let i;
      Et(o) ? ("default" in o ? (i = ae(o.from || r, o.default, !0)) : (i = ae(o.from || r))) : (i = ae(o)),
        kt(i)
          ? Object.defineProperty(e, r, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (s) => (i.value = s),
            })
          : (e[r] = i);
    }
  }
  function Ra(t, e, n) {
    we(X(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function Ff(t, e, n, r) {
    let o = r.includes(".") ? Yf(n, r) : () => n[r];
    if (It(t)) {
      const i = e[t];
      ot(i) && me(o, i);
    } else if (ot(t)) me(o, t.bind(n));
    else if (Et(t))
      if (X(t)) t.forEach((i) => Ff(i, e, n, r));
      else {
        const i = ot(t.handler) ? t.handler.bind(n) : e[t.handler];
        ot(i) && me(o, i, t);
      }
  }
  function Fs(t) {
    const e = t.type,
      { mixins: n, extends: r } = e,
      {
        mixins: o,
        optionsCache: i,
        config: { optionMergeStrategies: s },
      } = t.appContext,
      a = i.get(e);
    let l;
    return (
      a
        ? (l = a)
        : !o.length && !n && !r
          ? (l = e)
          : ((l = {}), o.length && o.forEach((c) => eo(l, c, s, !0)), eo(l, e, s)),
      Et(e) && i.set(e, l),
      l
    );
  }
  function eo(t, e, n, r = !1) {
    const { mixins: o, extends: i } = e;
    i && eo(t, i, n, !0), o && o.forEach((s) => eo(t, s, n, !0));
    for (const s in e)
      if (!(r && s === "expose")) {
        const a = ug[s] || (n && n[s]);
        t[s] = a ? a(t[s], e[s]) : e[s];
      }
    return t;
  }
  const ug = {
    data: ka,
    props: $a,
    emits: $a,
    methods: Qn,
    computed: Qn,
    beforeCreate: Gt,
    created: Gt,
    beforeMount: Gt,
    mounted: Gt,
    beforeUpdate: Gt,
    updated: Gt,
    beforeDestroy: Gt,
    beforeUnmount: Gt,
    destroyed: Gt,
    unmounted: Gt,
    activated: Gt,
    deactivated: Gt,
    errorCaptured: Gt,
    serverPrefetch: Gt,
    components: Qn,
    directives: Qn,
    watch: dg,
    provide: ka,
    inject: fg,
  };
  function ka(t, e) {
    return e
      ? t
        ? function () {
            return zt(ot(t) ? t.call(this, this) : t, ot(e) ? e.call(this, this) : e);
          }
        : e
      : t;
  }
  function fg(t, e) {
    return Qn(Ji(t), Ji(e));
  }
  function Ji(t) {
    if (X(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
      return e;
    }
    return t;
  }
  function Gt(t, e) {
    return t ? [...new Set([].concat(t, e))] : e;
  }
  function Qn(t, e) {
    return t ? zt(Object.create(null), t, e) : e;
  }
  function $a(t, e) {
    return t ? (X(t) && X(e) ? [...new Set([...t, ...e])] : zt(Object.create(null), to(t), to(e ?? {}))) : e;
  }
  function dg(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = zt(Object.create(null), t);
    for (const r in e) n[r] = Gt(t[r], e[r]);
    return n;
  }
  function Df() {
    return {
      app: null,
      config: {
        isNativeTag: Jh,
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
  let hg = 0;
  function pg(t, e) {
    return function (r, o = null) {
      ot(r) || (r = zt({}, r)), o != null && !Et(o) && (o = null);
      const i = Df(),
        s = new WeakSet(),
        a = [];
      let l = !1;
      const c = (i.app = {
        _uid: hg++,
        _component: r,
        _props: o,
        _container: null,
        _context: i,
        _instance: null,
        version: Jg,
        get config() {
          return i.config;
        },
        set config(u) {},
        use(u, ...d) {
          return s.has(u) || (u && ot(u.install) ? (s.add(u), u.install(c, ...d)) : ot(u) && (s.add(u), u(c, ...d))), c;
        },
        mixin(u) {
          return i.mixins.includes(u) || i.mixins.push(u), c;
        },
        component(u, d) {
          return d ? ((i.components[u] = d), c) : i.components[u];
        },
        directive(u, d) {
          return d ? ((i.directives[u] = d), c) : i.directives[u];
        },
        mount(u, d, f) {
          if (!l) {
            const h = c._ceVNode || st(r, o);
            return (
              (h.appContext = i),
              f === !0 ? (f = "svg") : f === !1 && (f = void 0),
              d && e ? e(h, u) : t(h, u, f),
              (l = !0),
              (c._container = u),
              (u.__vue_app__ = c),
              Eo(h.component)
            );
          }
        },
        onUnmount(u) {
          a.push(u);
        },
        unmount() {
          l && (we(a, c._instance, 16), t(null, c._container), delete c._container.__vue_app__);
        },
        provide(u, d) {
          return (i.provides[u] = d), c;
        },
        runWithContext(u) {
          const d = cn;
          cn = c;
          try {
            return u();
          } finally {
            cn = d;
          }
        },
      });
      return c;
    };
  }
  let cn = null;
  function Hr(t, e) {
    if (Lt) {
      let n = Lt.provides;
      const r = Lt.parent && Lt.parent.provides;
      r === n && (n = Lt.provides = Object.create(r)), (n[t] = e);
    }
  }
  function ae(t, e, n = !1) {
    const r = Lt || Ft;
    if (r || cn) {
      const o = cn
        ? cn._context.provides
        : r
          ? r.parent == null
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (o && t in o) return o[t];
      if (arguments.length > 1) return n && ot(e) ? e.call(r && r.proxy) : e;
    }
  }
  function gg() {
    return !!(Lt || Ft || cn);
  }
  const Lf = {},
    zf = () => Object.create(Lf),
    Uf = (t) => Object.getPrototypeOf(t) === Lf;
  function vg(t, e, n, r = !1) {
    const o = {},
      i = zf();
    (t.propsDefaults = Object.create(null)), Bf(t, e, o, i);
    for (const s in t.propsOptions[0]) s in o || (o[s] = void 0);
    n ? (t.props = r ? o : wf(o)) : t.type.props ? (t.props = o) : (t.props = i), (t.attrs = i);
  }
  function yg(t, e, n, r) {
    const {
        props: o,
        attrs: i,
        vnode: { patchFlag: s },
      } = t,
      a = dt(o),
      [l] = t.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
      if (s & 8) {
        const u = t.vnode.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          let f = u[d];
          if (xo(t.emitsOptions, f)) continue;
          const h = e[f];
          if (l)
            if (pt(i, f)) h !== i[f] && ((i[f] = h), (c = !0));
            else {
              const v = oe(f);
              o[v] = Zi(l, a, v, h, t, !1);
            }
          else h !== i[f] && ((i[f] = h), (c = !0));
        }
      }
    } else {
      Bf(t, e, o, i) && (c = !0);
      let u;
      for (const d in a)
        (!e || (!pt(e, d) && ((u = Je(d)) === d || !pt(e, u)))) &&
          (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (o[d] = Zi(l, a, d, void 0, t, !0)) : delete o[d]);
      if (i !== a) for (const d in i) (!e || !pt(e, d)) && (delete i[d], (c = !0));
    }
    c && $e(t.attrs, "set", "");
  }
  function Bf(t, e, n, r) {
    const [o, i] = t.propsOptions;
    let s = !1,
      a;
    if (e)
      for (let l in e) {
        if (tr(l)) continue;
        const c = e[l];
        let u;
        o && pt(o, (u = oe(l)))
          ? !i || !i.includes(u)
            ? (n[u] = c)
            : ((a || (a = {}))[u] = c)
          : xo(t.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (s = !0)));
      }
    if (i) {
      const l = dt(n),
        c = a || ht;
      for (let u = 0; u < i.length; u++) {
        const d = i[u];
        n[d] = Zi(o, l, d, c[d], t, !pt(c, d));
      }
    }
    return s;
  }
  function Zi(t, e, n, r, o, i) {
    const s = t[n];
    if (s != null) {
      const a = pt(s, "default");
      if (a && r === void 0) {
        const l = s.default;
        if (s.type !== Function && !s.skipFactory && ot(l)) {
          const { propsDefaults: c } = o;
          if (n in c) r = c[n];
          else {
            const u = Or(o);
            (r = c[n] = l.call(null, e)), u();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      s[0] && (i && !a ? (r = !1) : s[1] && (r === "" || r === Je(n)) && (r = !0));
    }
    return r;
  }
  const mg = new WeakMap();
  function Vf(t, e, n = !1) {
    const r = n ? mg : e.propsCache,
      o = r.get(t);
    if (o) return o;
    const i = t.props,
      s = {},
      a = [];
    let l = !1;
    if (!ot(t)) {
      const u = (d) => {
        l = !0;
        const [f, h] = Vf(d, e, !0);
        zt(s, f), h && a.push(...h);
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    if (!i && !l) return Et(t) && r.set(t, Cn), Cn;
    if (X(i))
      for (let u = 0; u < i.length; u++) {
        const d = oe(i[u]);
        Ia(d) && (s[d] = ht);
      }
    else if (i)
      for (const u in i) {
        const d = oe(u);
        if (Ia(d)) {
          const f = i[u],
            h = (s[d] = X(f) || ot(f) ? { type: f } : zt({}, f)),
            v = h.type;
          let m = !1,
            w = !0;
          if (X(v))
            for (let b = 0; b < v.length; ++b) {
              const _ = v[b],
                x = ot(_) && _.name;
              if (x === "Boolean") {
                m = !0;
                break;
              } else x === "String" && (w = !1);
            }
          else m = ot(v) && v.name === "Boolean";
          (h[0] = m), (h[1] = w), (m || pt(h, "default")) && a.push(d);
        }
      }
    const c = [s, a];
    return Et(t) && r.set(t, c), c;
  }
  function Ia(t) {
    return t[0] !== "$" && !tr(t);
  }
  const Hf = (t) => t[0] === "_" || t === "$stable",
    Ds = (t) => (X(t) ? t.map(ve) : [ve(t)]),
    bg = (t, e, n) => {
      if (e._n) return e;
      const r = Ie((...o) => Ds(e(...o)), n);
      return (r._c = !1), r;
    },
    Kf = (t, e, n) => {
      const r = t._ctx;
      for (const o in t) {
        if (Hf(o)) continue;
        const i = t[o];
        if (ot(i)) e[o] = bg(o, i, r);
        else if (i != null) {
          const s = Ds(i);
          e[o] = () => s;
        }
      }
    },
    Wf = (t, e) => {
      const n = Ds(e);
      t.slots.default = () => n;
    },
    qf = (t, e, n) => {
      for (const r in e) (n || r !== "_") && (t[r] = e[r]);
    },
    _g = (t, e, n) => {
      const r = (t.slots = zf());
      if (t.vnode.shapeFlag & 32) {
        const o = e._;
        o ? (qf(r, e, n), n && Yu(r, "_", o, !0)) : Kf(e, r);
      } else e && Wf(t, e);
    },
    wg = (t, e, n) => {
      const { vnode: r, slots: o } = t;
      let i = !0,
        s = ht;
      if (r.shapeFlag & 32) {
        const a = e._;
        a ? (n && a === 1 ? (i = !1) : qf(o, e, n)) : ((i = !e.$stable), Kf(e, o)), (s = e);
      } else e && (Wf(t, e), (s = { default: 1 }));
      if (i) for (const a in o) !Hf(a) && s[a] == null && delete o[a];
    },
    ne = Mg;
  function xg(t) {
    return Sg(t);
  }
  function Sg(t, e) {
    const n = Qu();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: i,
        createElement: s,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: f,
        setScopeId: h = ye,
        insertStaticContent: v,
      } = t,
      m = (g, y, E, R = null, O = null, k = null, U = void 0, D = null, F = !!y.dynamicChildren) => {
        if (g === y) return;
        g && !qn(g, y) && ((R = T(g)), _t(g, O, k, !0), (g = null)),
          y.patchFlag === -2 && ((F = !1), (y.dynamicChildren = null));
        const { type: M, ref: et, shapeFlag: W } = y;
        switch (M) {
          case So:
            w(g, y, E, R);
            break;
          case qe:
            b(g, y, E, R);
            break;
          case Jo:
            g == null && _(y, E, R, U);
            break;
          case ut:
            A(g, y, E, R, O, k, U, D, F);
            break;
          default:
            W & 1
              ? C(g, y, E, R, O, k, U, D, F)
              : W & 6
                ? P(g, y, E, R, O, k, U, D, F)
                : (W & 64 || W & 128) && M.process(g, y, E, R, O, k, U, D, F, Y);
        }
        et != null && O && Wi(et, g && g.ref, k, y || g, !y);
      },
      w = (g, y, E, R) => {
        if (g == null) r((y.el = a(y.children)), E, R);
        else {
          const O = (y.el = g.el);
          y.children !== g.children && c(O, y.children);
        }
      },
      b = (g, y, E, R) => {
        g == null ? r((y.el = l(y.children || "")), E, R) : (y.el = g.el);
      },
      _ = (g, y, E, R) => {
        [g.el, g.anchor] = v(g.children, y, E, R, g.el, g.anchor);
      },
      x = ({ el: g, anchor: y }, E, R) => {
        let O;
        for (; g && g !== y; ) (O = f(g)), r(g, E, R), (g = O);
        r(y, E, R);
      },
      S = ({ el: g, anchor: y }) => {
        let E;
        for (; g && g !== y; ) (E = f(g)), o(g), (g = E);
        o(y);
      },
      C = (g, y, E, R, O, k, U, D, F) => {
        y.type === "svg" ? (U = "svg") : y.type === "math" && (U = "mathml"),
          g == null ? z(y, E, R, O, k, U, D, F) : J(g, y, O, k, U, D, F);
      },
      z = (g, y, E, R, O, k, U, D) => {
        let F, M;
        const { props: et, shapeFlag: W, transition: Q, dirs: nt } = g;
        if (
          ((F = g.el = s(g.type, k, et && et.is, et)),
          W & 8 ? u(F, g.children) : W & 16 && N(g.children, F, null, R, O, qo(g, k), U, D),
          nt && nn(g, null, R, "created"),
          j(F, g, g.scopeId, U, R),
          et)
        ) {
          for (const xt in et) xt !== "value" && !tr(xt) && i(F, xt, null, et[xt], k, R);
          "value" in et && i(F, "value", null, et.value, k), (M = et.onVnodeBeforeMount) && pe(M, R, g);
        }
        nt && nn(g, null, R, "beforeMount");
        const lt = Ag(O, Q);
        lt && Q.beforeEnter(F),
          r(F, y, E),
          ((M = et && et.onVnodeMounted) || lt || nt) &&
            ne(() => {
              M && pe(M, R, g), lt && Q.enter(F), nt && nn(g, null, R, "mounted");
            }, O);
      },
      j = (g, y, E, R, O) => {
        if ((E && h(g, E), R)) for (let k = 0; k < R.length; k++) h(g, R[k]);
        if (O) {
          let k = O.subTree;
          if (y === k || (ed(k.type) && (k.ssContent === y || k.ssFallback === y))) {
            const U = O.vnode;
            j(g, U, U.scopeId, U.slotScopeIds, O.parent);
          }
        }
      },
      N = (g, y, E, R, O, k, U, D, F = 0) => {
        for (let M = F; M < g.length; M++) {
          const et = (g[M] = D ? Ve(g[M]) : ve(g[M]));
          m(null, et, y, E, R, O, k, U, D);
        }
      },
      J = (g, y, E, R, O, k, U) => {
        const D = (y.el = g.el);
        let { patchFlag: F, dynamicChildren: M, dirs: et } = y;
        F |= g.patchFlag & 16;
        const W = g.props || ht,
          Q = y.props || ht;
        let nt;
        if (
          (E && rn(E, !1),
          (nt = Q.onVnodeBeforeUpdate) && pe(nt, E, y, g),
          et && nn(y, g, E, "beforeUpdate"),
          E && rn(E, !0),
          ((W.innerHTML && Q.innerHTML == null) || (W.textContent && Q.textContent == null)) && u(D, ""),
          M ? I(g.dynamicChildren, M, D, E, R, qo(y, O), k) : U || it(g, y, D, null, E, R, qo(y, O), k, !1),
          F > 0)
        ) {
          if (F & 16) p(D, W, Q, E, O);
          else if (
            (F & 2 && W.class !== Q.class && i(D, "class", null, Q.class, O),
            F & 4 && i(D, "style", W.style, Q.style, O),
            F & 8)
          ) {
            const lt = y.dynamicProps;
            for (let xt = 0; xt < lt.length; xt++) {
              const vt = lt[xt],
                Xt = W[vt],
                Ht = Q[vt];
              (Ht !== Xt || vt === "value") && i(D, vt, Xt, Ht, O, E);
            }
          }
          F & 1 && g.children !== y.children && u(D, y.children);
        } else !U && M == null && p(D, W, Q, E, O);
        ((nt = Q.onVnodeUpdated) || et) &&
          ne(() => {
            nt && pe(nt, E, y, g), et && nn(y, g, E, "updated");
          }, R);
      },
      I = (g, y, E, R, O, k, U) => {
        for (let D = 0; D < y.length; D++) {
          const F = g[D],
            M = y[D],
            et = F.el && (F.type === ut || !qn(F, M) || F.shapeFlag & 70) ? d(F.el) : E;
          m(F, M, et, null, R, O, k, U, !0);
        }
      },
      p = (g, y, E, R, O) => {
        if (y !== E) {
          if (y !== ht) for (const k in y) !tr(k) && !(k in E) && i(g, k, y[k], null, O, R);
          for (const k in E) {
            if (tr(k)) continue;
            const U = E[k],
              D = y[k];
            U !== D && k !== "value" && i(g, k, D, U, O, R);
          }
          "value" in E && i(g, "value", y.value, E.value, O);
        }
      },
      A = (g, y, E, R, O, k, U, D, F) => {
        const M = (y.el = g ? g.el : a("")),
          et = (y.anchor = g ? g.anchor : a(""));
        let { patchFlag: W, dynamicChildren: Q, slotScopeIds: nt } = y;
        nt && (D = D ? D.concat(nt) : nt),
          g == null
            ? (r(M, E, R), r(et, E, R), N(y.children || [], E, et, O, k, U, D, F))
            : W > 0 && W & 64 && Q && g.dynamicChildren
              ? (I(g.dynamicChildren, Q, E, O, k, U, D), (y.key != null || (O && y === O.subTree)) && Gf(g, y, !0))
              : it(g, y, E, et, O, k, U, D, F);
      },
      P = (g, y, E, R, O, k, U, D, F) => {
        (y.slotScopeIds = D),
          g == null ? (y.shapeFlag & 512 ? O.ctx.activate(y, E, R, U, F) : Z(y, E, R, O, k, U, F)) : tt(g, y, F);
      },
      Z = (g, y, E, R, O, k, U) => {
        const D = (g.component = Bg(g, R, O));
        if ((kf(g) && (D.ctx.renderer = Y), Vg(D, !1, U), D.asyncDep)) {
          if ((O && O.registerDep(D, H, U), !g.el)) {
            const F = (D.subTree = st(qe));
            b(null, F, y, E);
          }
        } else H(D, g, y, E, O, k, U);
      },
      tt = (g, y, E) => {
        const R = (y.component = g.component);
        if ($g(g, y, E))
          if (R.asyncDep && !R.asyncResolved) {
            V(R, y, E);
            return;
          } else (R.next = y), R.update();
        else (y.el = g.el), (R.vnode = y);
      },
      H = (g, y, E, R, O, k, U) => {
        const D = () => {
          if (g.isMounted) {
            let { next: W, bu: Q, u: nt, parent: lt, vnode: xt } = g;
            {
              const te = Jf(g);
              if (te) {
                W && ((W.el = xt.el), V(g, W, U)),
                  te.asyncDep.then(() => {
                    g.isUnmounted || D();
                  });
                return;
              }
            }
            let vt = W,
              Xt;
            rn(g, !1),
              W ? ((W.el = xt.el), V(g, W, U)) : (W = xt),
              Q && Vr(Q),
              (Xt = W.props && W.props.onVnodeBeforeUpdate) && pe(Xt, lt, W, xt),
              rn(g, !0);
            const Ht = Go(g),
              ce = g.subTree;
            (g.subTree = Ht),
              m(ce, Ht, d(ce.el), T(ce), g, O, k),
              (W.el = Ht.el),
              vt === null && Ig(g, Ht.el),
              nt && ne(nt, O),
              (Xt = W.props && W.props.onVnodeUpdated) && ne(() => pe(Xt, lt, W, xt), O);
          } else {
            let W;
            const { el: Q, props: nt } = y,
              { bm: lt, m: xt, parent: vt, root: Xt, type: Ht } = g,
              ce = kn(y);
            if (
              (rn(g, !1), lt && Vr(lt), !ce && (W = nt && nt.onVnodeBeforeMount) && pe(W, vt, y), rn(g, !0), Q && Rt)
            ) {
              const te = () => {
                (g.subTree = Go(g)), Rt(Q, g.subTree, g, O, null);
              };
              ce && Ht.__asyncHydrate ? Ht.__asyncHydrate(Q, g, te) : te();
            } else {
              Xt.ce && Xt.ce._injectChildStyle(Ht);
              const te = (g.subTree = Go(g));
              m(null, te, E, R, g, O, k), (y.el = te.el);
            }
            if ((xt && ne(xt, O), !ce && (W = nt && nt.onVnodeMounted))) {
              const te = y;
              ne(() => pe(W, vt, te), O);
            }
            (y.shapeFlag & 256 || (vt && kn(vt.vnode) && vt.vnode.shapeFlag & 256)) && g.a && ne(g.a, O),
              (g.isMounted = !0),
              (y = E = R = null);
          }
        };
        g.scope.on();
        const F = (g.effect = new af(D));
        g.scope.off();
        const M = (g.update = F.run.bind(F)),
          et = (g.job = F.runIfDirty.bind(F));
        (et.i = g), (et.id = g.uid), (F.scheduler = () => $s(et)), rn(g, !0), M();
      },
      V = (g, y, E) => {
        y.component = g;
        const R = g.vnode.props;
        (g.vnode = y), (g.next = null), yg(g, y.props, R, E), wg(g, y.children, E), Ye(), Ca(g), Qe();
      },
      it = (g, y, E, R, O, k, U, D, F = !1) => {
        const M = g && g.children,
          et = g ? g.shapeFlag : 0,
          W = y.children,
          { patchFlag: Q, shapeFlag: nt } = y;
        if (Q > 0) {
          if (Q & 128) {
            Pt(M, W, E, R, O, k, U, D, F);
            return;
          } else if (Q & 256) {
            Ut(M, W, E, R, O, k, U, D, F);
            return;
          }
        }
        nt & 8
          ? (et & 16 && ie(M, O, k), W !== M && u(E, W))
          : et & 16
            ? nt & 16
              ? Pt(M, W, E, R, O, k, U, D, F)
              : ie(M, O, k, !0)
            : (et & 8 && u(E, ""), nt & 16 && N(W, E, R, O, k, U, D, F));
      },
      Ut = (g, y, E, R, O, k, U, D, F) => {
        (g = g || Cn), (y = y || Cn);
        const M = g.length,
          et = y.length,
          W = Math.min(M, et);
        let Q;
        for (Q = 0; Q < W; Q++) {
          const nt = (y[Q] = F ? Ve(y[Q]) : ve(y[Q]));
          m(g[Q], nt, E, null, O, k, U, D, F);
        }
        M > et ? ie(g, O, k, !0, !1, W) : N(y, E, R, O, k, U, D, F, W);
      },
      Pt = (g, y, E, R, O, k, U, D, F) => {
        let M = 0;
        const et = y.length;
        let W = g.length - 1,
          Q = et - 1;
        for (; M <= W && M <= Q; ) {
          const nt = g[M],
            lt = (y[M] = F ? Ve(y[M]) : ve(y[M]));
          if (qn(nt, lt)) m(nt, lt, E, null, O, k, U, D, F);
          else break;
          M++;
        }
        for (; M <= W && M <= Q; ) {
          const nt = g[W],
            lt = (y[Q] = F ? Ve(y[Q]) : ve(y[Q]));
          if (qn(nt, lt)) m(nt, lt, E, null, O, k, U, D, F);
          else break;
          W--, Q--;
        }
        if (M > W) {
          if (M <= Q) {
            const nt = Q + 1,
              lt = nt < et ? y[nt].el : R;
            for (; M <= Q; ) m(null, (y[M] = F ? Ve(y[M]) : ve(y[M])), E, lt, O, k, U, D, F), M++;
          }
        } else if (M > Q) for (; M <= W; ) _t(g[M], O, k, !0), M++;
        else {
          const nt = M,
            lt = M,
            xt = new Map();
          for (M = lt; M <= Q; M++) {
            const ee = (y[M] = F ? Ve(y[M]) : ve(y[M]));
            ee.key != null && xt.set(ee.key, M);
          }
          let vt,
            Xt = 0;
          const Ht = Q - lt + 1;
          let ce = !1,
            te = 0;
          const Kn = new Array(Ht);
          for (M = 0; M < Ht; M++) Kn[M] = 0;
          for (M = nt; M <= W; M++) {
            const ee = g[M];
            if (Xt >= Ht) {
              _t(ee, O, k, !0);
              continue;
            }
            let he;
            if (ee.key != null) he = xt.get(ee.key);
            else
              for (vt = lt; vt <= Q; vt++)
                if (Kn[vt - lt] === 0 && qn(ee, y[vt])) {
                  he = vt;
                  break;
                }
            he === void 0
              ? _t(ee, O, k, !0)
              : ((Kn[he - lt] = M + 1), he >= te ? (te = he) : (ce = !0), m(ee, y[he], E, null, O, k, U, D, F), Xt++);
          }
          const ba = ce ? Eg(Kn) : Cn;
          for (vt = ba.length - 1, M = Ht - 1; M >= 0; M--) {
            const ee = lt + M,
              he = y[ee],
              _a = ee + 1 < et ? y[ee + 1].el : R;
            Kn[M] === 0 ? m(null, he, E, _a, O, k, U, D, F) : ce && (vt < 0 || M !== ba[vt] ? qt(he, E, _a, 2) : vt--);
          }
        }
      },
      qt = (g, y, E, R, O = null) => {
        const { el: k, type: U, transition: D, children: F, shapeFlag: M } = g;
        if (M & 6) {
          qt(g.component.subTree, y, E, R);
          return;
        }
        if (M & 128) {
          g.suspense.move(y, E, R);
          return;
        }
        if (M & 64) {
          U.move(g, y, E, Y);
          return;
        }
        if (U === ut) {
          r(k, y, E);
          for (let W = 0; W < F.length; W++) qt(F[W], y, E, R);
          r(g.anchor, y, E);
          return;
        }
        if (U === Jo) {
          x(g, y, E);
          return;
        }
        if (R !== 2 && M & 1 && D)
          if (R === 0) D.beforeEnter(k), r(k, y, E), ne(() => D.enter(k), O);
          else {
            const { leave: W, delayLeave: Q, afterLeave: nt } = D,
              lt = () => r(k, y, E),
              xt = () => {
                W(k, () => {
                  lt(), nt && nt();
                });
              };
            Q ? Q(k, lt, xt) : xt();
          }
        else r(k, y, E);
      },
      _t = (g, y, E, R = !1, O = !1) => {
        const {
          type: k,
          props: U,
          ref: D,
          children: F,
          dynamicChildren: M,
          shapeFlag: et,
          patchFlag: W,
          dirs: Q,
          cacheIndex: nt,
        } = g;
        if (
          (W === -2 && (O = !1),
          D != null && Wi(D, null, E, g, !0),
          nt != null && (y.renderCache[nt] = void 0),
          et & 256)
        ) {
          y.ctx.deactivate(g);
          return;
        }
        const lt = et & 1 && Q,
          xt = !kn(g);
        let vt;
        if ((xt && (vt = U && U.onVnodeBeforeUnmount) && pe(vt, y, g), et & 6)) Sn(g.component, E, R);
        else {
          if (et & 128) {
            g.suspense.unmount(E, R);
            return;
          }
          lt && nn(g, null, y, "beforeUnmount"),
            et & 64
              ? g.type.remove(g, y, E, Y, R)
              : M && !M.hasOnce && (k !== ut || (W > 0 && W & 64))
                ? ie(M, y, E, !1, !0)
                : ((k === ut && W & 384) || (!O && et & 16)) && ie(F, y, E),
            R && Vt(g);
        }
        ((xt && (vt = U && U.onVnodeUnmounted)) || lt) &&
          ne(() => {
            vt && pe(vt, y, g), lt && nn(g, null, y, "unmounted");
          }, E);
      },
      Vt = (g) => {
        const { type: y, el: E, anchor: R, transition: O } = g;
        if (y === ut) {
          Ee(E, R);
          return;
        }
        if (y === Jo) {
          S(g);
          return;
        }
        const k = () => {
          o(E), O && !O.persisted && O.afterLeave && O.afterLeave();
        };
        if (g.shapeFlag & 1 && O && !O.persisted) {
          const { leave: U, delayLeave: D } = O,
            F = () => U(E, k);
          D ? D(g.el, k, F) : F();
        } else k();
      },
      Ee = (g, y) => {
        let E;
        for (; g !== y; ) (E = f(g)), o(g), (g = E);
        o(y);
      },
      Sn = (g, y, E) => {
        const { bum: R, scope: O, job: k, subTree: U, um: D, m: F, a: M } = g;
        Ma(F),
          Ma(M),
          R && Vr(R),
          O.stop(),
          k && ((k.flags |= 8), _t(U, g, y, E)),
          D && ne(D, y),
          ne(() => {
            g.isUnmounted = !0;
          }, y),
          y &&
            y.pendingBranch &&
            !y.isUnmounted &&
            g.asyncDep &&
            !g.asyncResolved &&
            g.suspenseId === y.pendingId &&
            (y.deps--, y.deps === 0 && y.resolve());
      },
      ie = (g, y, E, R = !1, O = !1, k = 0) => {
        for (let U = k; U < g.length; U++) _t(g[U], y, E, R, O);
      },
      T = (g) => {
        if (g.shapeFlag & 6) return T(g.component.subTree);
        if (g.shapeFlag & 128) return g.suspense.next();
        const y = f(g.anchor || g.el),
          E = y && y[Hp];
        return E ? f(E) : y;
      };
    let q = !1;
    const B = (g, y, E) => {
        g == null ? y._vnode && _t(y._vnode, null, null, !0) : m(y._vnode || null, g, y, null, null, null, E),
          (y._vnode = g),
          q || ((q = !0), Ca(), jf(), (q = !1));
      },
      Y = { p: m, um: _t, m: qt, r: Vt, mt: Z, mc: N, pc: it, pbc: I, n: T, o: t };
    let gt, Rt;
    return { render: B, hydrate: gt, createApp: pg(B, gt) };
  }
  function qo({ type: t, props: e }, n) {
    return (n === "svg" && t === "foreignObject") ||
      (n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html"))
      ? void 0
      : n;
  }
  function rn({ effect: t, job: e }, n) {
    n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
  }
  function Ag(t, e) {
    return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
  }
  function Gf(t, e, n = !1) {
    const r = t.children,
      o = e.children;
    if (X(r) && X(o))
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        let a = o[i];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = o[i] = Ve(o[i])), (a.el = s.el)),
          !n && a.patchFlag !== -2 && Gf(s, a)),
          a.type === So && (a.el = s.el);
      }
  }
  function Eg(t) {
    const e = t.slice(),
      n = [0];
    let r, o, i, s, a;
    const l = t.length;
    for (r = 0; r < l; r++) {
      const c = t[r];
      if (c !== 0) {
        if (((o = n[n.length - 1]), t[o] < c)) {
          (e[r] = o), n.push(r);
          continue;
        }
        for (i = 0, s = n.length - 1; i < s; ) (a = (i + s) >> 1), t[n[a]] < c ? (i = a + 1) : (s = a);
        c < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), (n[i] = r));
      }
    }
    for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = e[s]);
    return n;
  }
  function Jf(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : Jf(e);
  }
  function Ma(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const Og = Symbol.for("v-scx"),
    Tg = () => ae(Og);
  function Zf(t, e) {
    return wo(t, null, e);
  }
  function jg(t, e) {
    return wo(t, null, { flush: "sync" });
  }
  function me(t, e, n) {
    return wo(t, e, n);
  }
  function wo(t, e, n = ht) {
    const { immediate: r, deep: o, flush: i, once: s } = n,
      a = zt({}, n);
    let l;
    if (Ao)
      if (i === "sync") {
        const f = Tg();
        l = f.__watcherHandles || (f.__watcherHandles = []);
      } else if (!e || r) a.once = !0;
      else {
        const f = () => {};
        return (f.stop = ye), (f.resume = ye), (f.pause = ye), f;
      }
    const c = Lt;
    a.call = (f, h, v) => we(f, c, h, v);
    let u = !1;
    i === "post"
      ? (a.scheduler = (f) => {
          ne(f, c && c.suspense);
        })
      : i !== "sync" &&
        ((u = !0),
        (a.scheduler = (f, h) => {
          h ? f() : $s(f);
        })),
      (a.augmentJob = (f) => {
        e && (f.flags |= 4), u && ((f.flags |= 2), c && ((f.id = c.uid), (f.i = c)));
      });
    const d = zp(t, e, a);
    return l && l.push(d), d;
  }
  function Cg(t, e, n) {
    const r = this.proxy,
      o = It(t) ? (t.includes(".") ? Yf(r, t) : () => r[t]) : t.bind(r, r);
    let i;
    ot(e) ? (i = e) : ((i = e.handler), (n = e));
    const s = Or(this),
      a = wo(o, i.bind(r), n);
    return s(), a;
  }
  function Yf(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  function Qf(t, e, n = ht) {
    const r = zs(),
      o = oe(e),
      i = Je(e),
      s = Xf(t, e),
      a = $p((l, c) => {
        let u,
          d = ht,
          f;
        return (
          jg(() => {
            const h = t[e];
            Yt(u, h) && ((u = h), c());
          }),
          {
            get() {
              return l(), n.get ? n.get(u) : u;
            },
            set(h) {
              const v = n.set ? n.set(h) : h;
              if (!Yt(v, u) && !(d !== ht && Yt(h, d))) return;
              const m = r.vnode.props;
              (m &&
                (e in m || o in m || i in m) &&
                (`onUpdate:${e}` in m || `onUpdate:${o}` in m || `onUpdate:${i}` in m)) ||
                ((u = h), c()),
                r.emit(`update:${e}`, v),
                Yt(h, v) && Yt(h, d) && !Yt(v, f) && c(),
                (d = h),
                (f = v);
            },
          }
        );
      });
    return (
      (a[Symbol.iterator] = () => {
        let l = 0;
        return {
          next() {
            return l < 2 ? { value: l++ ? s || ht : a, done: !1 } : { done: !0 };
          },
        };
      }),
      a
    );
  }
  const Xf = (t, e) =>
    e === "modelValue" || e === "model-value"
      ? t.modelModifiers
      : t[`${e}Modifiers`] || t[`${oe(e)}Modifiers`] || t[`${Je(e)}Modifiers`];
  function Pg(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || ht;
    let o = n;
    const i = e.startsWith("update:"),
      s = i && Xf(r, e.slice(7));
    s && (s.trim && (o = n.map((u) => (It(u) ? u.trim() : u))), s.number && (o = n.map(tp)));
    let a,
      l = r[(a = er(e))] || r[(a = er(oe(e)))];
    !l && i && (l = r[(a = er(Je(e)))]), l && we(l, t, 6, o);
    const c = r[a + "Once"];
    if (c) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[a]) return;
      (t.emitted[a] = !0), we(c, t, 6, o);
    }
  }
  function td(t, e, n = !1) {
    const r = e.emitsCache,
      o = r.get(t);
    if (o !== void 0) return o;
    const i = t.emits;
    let s = {},
      a = !1;
    if (!ot(t)) {
      const l = (c) => {
        const u = td(c, e, !0);
        u && ((a = !0), zt(s, u));
      };
      !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
    }
    return !i && !a
      ? (Et(t) && r.set(t, null), null)
      : (X(i) ? i.forEach((l) => (s[l] = null)) : zt(s, i), Et(t) && r.set(t, s), s);
  }
  function xo(t, e) {
    return !t || !co(e)
      ? !1
      : ((e = e.slice(2).replace(/Once$/, "")), pt(t, e[0].toLowerCase() + e.slice(1)) || pt(t, Je(e)) || pt(t, e));
  }
  function Go(t) {
    const {
        type: e,
        vnode: n,
        proxy: r,
        withProxy: o,
        propsOptions: [i],
        slots: s,
        attrs: a,
        emit: l,
        render: c,
        renderCache: u,
        props: d,
        data: f,
        setupState: h,
        ctx: v,
        inheritAttrs: m,
      } = t,
      w = Xr(t);
    let b, _;
    try {
      if (n.shapeFlag & 4) {
        const S = o || r,
          C = S;
        (b = ve(c.call(C, S, u, d, h, f, v))), (_ = a);
      } else {
        const S = e;
        (b = ve(S.length > 1 ? S(d, { attrs: a, slots: s, emit: l }) : S(d, null))), (_ = e.props ? a : Rg(a));
      }
    } catch (S) {
      (or.length = 0), mo(S, t, 1), (b = st(qe));
    }
    let x = b;
    if (_ && m !== !1) {
      const S = Object.keys(_),
        { shapeFlag: C } = x;
      S.length && C & 7 && (i && S.some(bs) && (_ = kg(_, i)), (x = In(x, _, !1, !0)));
    }
    return (
      n.dirs && ((x = In(x, null, !1, !0)), (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
      n.transition && Ms(x, n.transition),
      (b = x),
      Xr(w),
      b
    );
  }
  const Rg = (t) => {
      let e;
      for (const n in t) (n === "class" || n === "style" || co(n)) && ((e || (e = {}))[n] = t[n]);
      return e;
    },
    kg = (t, e) => {
      const n = {};
      for (const r in t) (!bs(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
      return n;
    };
  function $g(t, e, n) {
    const { props: r, children: o, component: i } = t,
      { props: s, children: a, patchFlag: l } = e,
      c = i.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? Na(r, s, c) : !!s;
      if (l & 8) {
        const u = e.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          const f = u[d];
          if (s[f] !== r[f] && !xo(c, f)) return !0;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? (s ? Na(r, s, c) : !0) : !!s;
    return !1;
  }
  function Na(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (e[i] !== t[i] && !xo(n, i)) return !0;
    }
    return !1;
  }
  function Ig({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
        ((t = e.vnode).el = n), (e = e.parent);
      else break;
    }
  }
  const ed = (t) => t.__isSuspense;
  function Mg(t, e) {
    e && e.pendingBranch ? (X(t) ? e.effects.push(...t) : e.effects.push(t)) : Vp(t);
  }
  const ut = Symbol.for("v-fgt"),
    So = Symbol.for("v-txt"),
    qe = Symbol.for("v-cmt"),
    Jo = Symbol.for("v-stc"),
    or = [];
  let re = null;
  function L(t = !1) {
    or.push((re = t ? null : []));
  }
  function Ng() {
    or.pop(), (re = or[or.length - 1] || null);
  }
  let gr = 1;
  function Fa(t) {
    (gr += t), t < 0 && re && (re.hasOnce = !0);
  }
  function nd(t) {
    return (t.dynamicChildren = gr > 0 ? re || Cn : null), Ng(), gr > 0 && re && re.push(t), t;
  }
  function K(t, e, n, r, o, i) {
    return nd($(t, e, n, r, o, i, !0));
  }
  function $n(t, e, n, r, o) {
    return nd(st(t, e, n, r, o, !0));
  }
  function no(t) {
    return t ? t.__v_isVNode === !0 : !1;
  }
  function qn(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const rd = ({ key: t }) => t ?? null,
    Kr = ({ ref: t, ref_key: e, ref_for: n }) => (
      typeof t == "number" && (t = "" + t),
      t != null ? (It(t) || kt(t) || ot(t) ? { i: Ft, r: t, k: e, f: !!n } : t) : null
    );
  function $(t, e = null, n = null, r = 0, o = null, i = t === ut ? 0 : 1, s = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t,
      props: e,
      key: e && rd(e),
      ref: e && Kr(e),
      scopeId: Pf,
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
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Ft,
    };
    return (
      a ? (Ls(l, n), i & 128 && t.normalize(l)) : n && (l.shapeFlag |= It(n) ? 8 : 16),
      gr > 0 && !s && re && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && re.push(l),
      l
    );
  }
  const st = Fg;
  function Fg(t, e = null, n = null, r = 0, o = null, i = !1) {
    if (((!t || t === og) && (t = qe), no(t))) {
      const a = In(t, e, !0);
      return (
        n && Ls(a, n),
        gr > 0 && !i && re && (a.shapeFlag & 6 ? (re[re.indexOf(t)] = a) : re.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((Gg(t) && (t = t.__vccOpts), e)) {
      e = Dg(e);
      let { class: a, style: l } = e;
      a && !It(a) && (e.class = Nt(a)), Et(l) && (Cs(l) && !X(l) && (l = zt({}, l)), (e.style = Ze(l)));
    }
    const s = It(t) ? 1 : ed(t) ? 128 : Kp(t) ? 64 : Et(t) ? 4 : ot(t) ? 2 : 0;
    return $(t, e, n, r, o, s, i, !0);
  }
  function Dg(t) {
    return t ? (Cs(t) || Uf(t) ? zt({}, t) : t) : null;
  }
  function In(t, e, n = !1, r = !1) {
    const { props: o, ref: i, patchFlag: s, children: a, transition: l } = t,
      c = e ? Lg(o || {}, e) : o,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: c,
        key: c && rd(c),
        ref: e && e.ref ? (n && i ? (X(i) ? i.concat(Kr(e)) : [i, Kr(e)]) : Kr(e)) : i,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ut ? (s === -1 ? 16 : s | 16) : s,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: l,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && In(t.ssContent),
        ssFallback: t.ssFallback && In(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce,
      };
    return l && r && Ms(u, l.clone(u)), u;
  }
  function Er(t = " ", e = 0) {
    return st(So, null, t, e);
  }
  function $t(t = "", e = !1) {
    return e ? (L(), $n(qe, null, t)) : st(qe, null, t);
  }
  function ve(t) {
    return t == null || typeof t == "boolean"
      ? st(qe)
      : X(t)
        ? st(ut, null, t.slice())
        : typeof t == "object"
          ? Ve(t)
          : st(So, null, String(t));
  }
  function Ve(t) {
    return (t.el === null && t.patchFlag !== -1) || t.memo ? t : In(t);
  }
  function Ls(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (X(e)) n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const o = e.default;
        o && (o._c && (o._d = !1), Ls(t, o()), o._c && (o._d = !0));
        return;
      } else {
        n = 32;
        const o = e._;
        !o && !Uf(e)
          ? (e._ctx = Ft)
          : o === 3 && Ft && (Ft.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
      }
    else
      ot(e)
        ? ((e = { default: e, _ctx: Ft }), (n = 32))
        : ((e = String(e)), r & 64 ? ((n = 16), (e = [Er(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
  }
  function Lg(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const o in r)
        if (o === "class") e.class !== r.class && (e.class = Nt([e.class, r.class]));
        else if (o === "style") e.style = Ze([e.style, r.style]);
        else if (co(o)) {
          const i = e[o],
            s = r[o];
          s && i !== s && !(X(i) && i.includes(s)) && (e[o] = i ? [].concat(i, s) : s);
        } else o !== "" && (e[o] = r[o]);
    }
    return e;
  }
  function pe(t, e, n, r = null) {
    we(t, e, 7, [n, r]);
  }
  const zg = Df();
  let Ug = 0;
  function Bg(t, e, n) {
    const r = t.type,
      o = (e ? e.appContext : t.appContext) || zg,
      i = {
        uid: Ug++,
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
        scope: new rf(!0),
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
        propsOptions: Vf(r, o),
        emitsOptions: td(r, o),
        emit: null,
        emitted: null,
        propsDefaults: ht,
        inheritAttrs: r.inheritAttrs,
        ctx: ht,
        data: ht,
        props: ht,
        attrs: ht,
        slots: ht,
        refs: ht,
        setupState: ht,
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
    return (i.ctx = { _: i }), (i.root = e ? e.root : i), (i.emit = Pg.bind(null, i)), t.ce && t.ce(i), i;
  }
  let Lt = null;
  const zs = () => Lt || Ft;
  let ro, Yi;
  {
    const t = Qu(),
      e = (n, r) => {
        let o;
        return (
          (o = t[n]) || (o = t[n] = []),
          o.push(r),
          (i) => {
            o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
          }
        );
      };
    (ro = e("__VUE_INSTANCE_SETTERS__", (n) => (Lt = n))), (Yi = e("__VUE_SSR_SETTERS__", (n) => (Ao = n)));
  }
  const Or = (t) => {
      const e = Lt;
      return (
        ro(t),
        t.scope.on(),
        () => {
          t.scope.off(), ro(e);
        }
      );
    },
    Da = () => {
      Lt && Lt.scope.off(), ro(null);
    };
  function od(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Ao = !1;
  function Vg(t, e = !1, n = !1) {
    e && Yi(e);
    const { props: r, children: o } = t.vnode,
      i = od(t);
    vg(t, r, i, e), _g(t, o, n);
    const s = i ? Hg(t, e) : void 0;
    return e && Yi(!1), s;
  }
  function Hg(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, sg));
    const { setup: r } = n;
    if (r) {
      const o = (t.setupContext = r.length > 1 ? Wg(t) : null),
        i = Or(t);
      Ye();
      const s = Ar(r, t, 0, [t.props, o]);
      if ((Qe(), i(), Gu(s))) {
        if ((kn(t) || Rf(t), s.then(Da, Da), e))
          return s
            .then((a) => {
              La(t, a, e);
            })
            .catch((a) => {
              mo(a, t, 0);
            });
        t.asyncDep = s;
      } else La(t, s, e);
    } else id(t, e);
  }
  function La(t, e, n) {
    ot(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : Et(e) && (t.setupState = Ef(e)), id(t, n);
  }
  let za;
  function id(t, e, n) {
    const r = t.type;
    if (!t.render) {
      if (!e && za && !r.render) {
        const o = r.template || Fs(t).template;
        if (o) {
          const { isCustomElement: i, compilerOptions: s } = t.appContext.config,
            { delimiters: a, compilerOptions: l } = r,
            c = zt(zt({ isCustomElement: i, delimiters: a }, s), l);
          r.render = za(o, c);
        }
      }
      t.render = r.render || ye;
    }
    {
      const o = Or(t);
      Ye();
      try {
        lg(t);
      } finally {
        Qe(), o();
      }
    }
  }
  const Kg = {
    get(t, e) {
      return Wt(t, "get", ""), t[e];
    },
  };
  function Wg(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return { attrs: new Proxy(t.attrs, Kg), slots: t.slots, emit: t.emit, expose: e };
  }
  function Eo(t) {
    return t.exposed
      ? t.exposeProxy ||
          (t.exposeProxy = new Proxy(Ef(Ps(t.exposed)), {
            get(e, n) {
              if (n in e) return e[n];
              if (n in rr) return rr[n](t);
            },
            has(e, n) {
              return n in e || n in rr;
            },
          }))
      : t.proxy;
  }
  function qg(t, e = !0) {
    return ot(t) ? t.displayName || t.name : t.name || (e && t.__name);
  }
  function Gg(t) {
    return ot(t) && "__vccOpts" in t;
  }
  const rt = (t, e) => Dp(t, e, Ao);
  function sd(t, e, n) {
    const r = arguments.length;
    return r === 2
      ? Et(e) && !X(e)
        ? no(e)
          ? st(t, null, [e])
          : st(t, e)
        : st(t, null, e)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && no(n) && (n = [n]), st(t, e, n));
  }
  const Jg = "3.5.6";
  /**
   * @vue/runtime-dom v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Qi;
  const Ua = typeof window < "u" && window.trustedTypes;
  if (Ua)
    try {
      Qi = Ua.createPolicy("vue", { createHTML: (t) => t });
    } catch {}
  const ad = Qi ? (t) => Qi.createHTML(t) : (t) => t,
    Zg = "http://www.w3.org/2000/svg",
    Yg = "http://www.w3.org/1998/Math/MathML",
    Ce = typeof document < "u" ? document : null,
    Ba = Ce && Ce.createElement("template"),
    Qg = {
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
            ? Ce.createElementNS(Zg, t)
            : e === "mathml"
              ? Ce.createElementNS(Yg, t)
              : n
                ? Ce.createElement(t, { is: n })
                : Ce.createElement(t);
        return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
      },
      createText: (t) => Ce.createTextNode(t),
      createComment: (t) => Ce.createComment(t),
      setText: (t, e) => {
        t.nodeValue = e;
      },
      setElementText: (t, e) => {
        t.textContent = e;
      },
      parentNode: (t) => t.parentNode,
      nextSibling: (t) => t.nextSibling,
      querySelector: (t) => Ce.querySelector(t),
      setScopeId(t, e) {
        t.setAttribute(e, "");
      },
      insertStaticContent(t, e, n, r, o, i) {
        const s = n ? n.previousSibling : e.lastChild;
        if (o && (o === i || o.nextSibling))
          for (; e.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); );
        else {
          Ba.innerHTML = ad(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
          const a = Ba.content;
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
    Xg = Symbol("_vtc");
  function tv(t, e, n) {
    const r = t[Xg];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
      e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : (t.className = e);
  }
  const Va = Symbol("_vod"),
    ev = Symbol("_vsh"),
    nv = Symbol(""),
    rv = /(^|;)\s*display\s*:/;
  function ov(t, e, n) {
    const r = t.style,
      o = It(n);
    let i = !1;
    if (n && !o) {
      if (e)
        if (It(e))
          for (const s of e.split(";")) {
            const a = s.slice(0, s.indexOf(":")).trim();
            n[a] == null && Wr(r, a, "");
          }
        else for (const s in e) n[s] == null && Wr(r, s, "");
      for (const s in n) s === "display" && (i = !0), Wr(r, s, n[s]);
    } else if (o) {
      if (e !== n) {
        const s = r[nv];
        s && (n += ";" + s), (r.cssText = n), (i = rv.test(n));
      }
    } else e && t.removeAttribute("style");
    Va in t && ((t[Va] = i ? r.display : ""), t[ev] && (r.display = "none"));
  }
  const Ha = /\s*!important$/;
  function Wr(t, e, n) {
    if (X(n)) n.forEach((r) => Wr(t, e, r));
    else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
    else {
      const r = iv(t, e);
      Ha.test(n) ? t.setProperty(Je(r), n.replace(Ha, ""), "important") : (t[r] = n);
    }
  }
  const Ka = ["Webkit", "Moz", "ms"],
    Zo = {};
  function iv(t, e) {
    const n = Zo[e];
    if (n) return n;
    let r = oe(e);
    if (r !== "filter" && r in t) return (Zo[e] = r);
    r = ho(r);
    for (let o = 0; o < Ka.length; o++) {
      const i = Ka[o] + r;
      if (i in t) return (Zo[e] = i);
    }
    return e;
  }
  const Wa = "http://www.w3.org/1999/xlink";
  function qa(t, e, n, r, o, i = sp(e)) {
    r && e.startsWith("xlink:")
      ? n == null
        ? t.removeAttributeNS(Wa, e.slice(6, e.length))
        : t.setAttributeNS(Wa, e, n)
      : n == null || (i && !Xu(n))
        ? t.removeAttribute(e)
        : t.setAttribute(e, i ? "" : _e(n) ? String(n) : n);
  }
  function sv(t, e, n, r) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? ad(n) : n);
      return;
    }
    const o = t.tagName;
    if (e === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const s = o === "OPTION" ? t.getAttribute("value") || "" : t.value,
        a = n == null ? (t.type === "checkbox" ? "on" : "") : String(n);
      (s !== a || !("_value" in t)) && (t.value = a), n == null && t.removeAttribute(e), (t._value = n);
      return;
    }
    let i = !1;
    if (n === "" || n == null) {
      const s = typeof t[e];
      s === "boolean"
        ? (n = Xu(n))
        : n == null && s === "string"
          ? ((n = ""), (i = !0))
          : s === "number" && ((n = 0), (i = !0));
    }
    try {
      t[e] = n;
    } catch {}
    i && t.removeAttribute(e);
  }
  function ld(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function av(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const Ga = Symbol("_vei");
  function lv(t, e, n, r, o = null) {
    const i = t[Ga] || (t[Ga] = {}),
      s = i[e];
    if (r && s) s.value = r;
    else {
      const [a, l] = cv(e);
      if (r) {
        const c = (i[e] = dv(r, o));
        ld(t, a, c, l);
      } else s && (av(t, a, s, l), (i[e] = void 0));
    }
  }
  const Ja = /(?:Once|Passive|Capture)$/;
  function cv(t) {
    let e;
    if (Ja.test(t)) {
      e = {};
      let r;
      for (; (r = t.match(Ja)); ) (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
    }
    return [t[2] === ":" ? t.slice(3) : Je(t.slice(2)), e];
  }
  let Yo = 0;
  const uv = Promise.resolve(),
    fv = () => Yo || (uv.then(() => (Yo = 0)), (Yo = Date.now()));
  function dv(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      we(hv(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = fv()), n;
  }
  function hv(t, e) {
    if (X(e)) {
      const n = t.stopImmediatePropagation;
      return (
        (t.stopImmediatePropagation = () => {
          n.call(t), (t._stopped = !0);
        }),
        e.map((r) => (o) => !o._stopped && r && r(o))
      );
    } else return e;
  }
  const Za = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    pv = (t, e, n, r, o, i) => {
      const s = o === "svg";
      e === "class"
        ? tv(t, r, s)
        : e === "style"
          ? ov(t, n, r)
          : co(e)
            ? bs(e) || lv(t, e, n, r, i)
            : (e[0] === "." ? ((e = e.slice(1)), !0) : e[0] === "^" ? ((e = e.slice(1)), !1) : gv(t, e, r, s))
              ? (sv(t, e, r),
                !t.tagName.includes("-") &&
                  (e === "value" || e === "checked" || e === "selected") &&
                  qa(t, e, r, s, i, e !== "value"))
              : (e === "true-value" ? (t._trueValue = r) : e === "false-value" && (t._falseValue = r), qa(t, e, r, s));
    };
  function gv(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || (e in t && Za(e) && ot(n)));
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
    return Za(e) && It(n) ? !1 : !!(e in t || (t._isVueCE && (/[A-Z]/.test(e) || !It(n))));
  }
  const Ya = (t) => {
      const e = t.props["onUpdate:modelValue"] || !1;
      return X(e) ? (n) => Vr(e, n) : e;
    },
    Qo = Symbol("_assign"),
    Us = {
      deep: !0,
      created(t, e, n) {
        (t[Qo] = Ya(n)),
          ld(t, "change", () => {
            const r = t._modelValue,
              o = vv(t),
              i = t.checked,
              s = t[Qo];
            if (X(r)) {
              const a = tf(r, o),
                l = a !== -1;
              if (i && !l) s(r.concat(o));
              else if (!i && l) {
                const c = [...r];
                c.splice(a, 1), s(c);
              }
            } else if (uo(r)) {
              const a = new Set(r);
              i ? a.add(o) : a.delete(o), s(a);
            } else s(cd(t, i));
          });
      },
      mounted: Qa,
      beforeUpdate(t, e, n) {
        (t[Qo] = Ya(n)), Qa(t, e, n);
      },
    };
  function Qa(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let o;
    X(e) ? (o = tf(e, r.props.value) > -1) : uo(e) ? (o = e.has(r.props.value)) : (o = po(e, cd(t, !0))),
      t.checked !== o && (t.checked = o);
  }
  function vv(t) {
    return "_value" in t ? t._value : t.value;
  }
  function cd(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const yv = ["ctrl", "shift", "alt", "meta"],
    mv = {
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
      exact: (t, e) => yv.some((n) => t[`${n}Key`] && !e.includes(n)),
    },
    Ir = (t, e) => {
      const n = t._withMods || (t._withMods = {}),
        r = e.join(".");
      return (
        n[r] ||
        (n[r] = (o, ...i) => {
          for (let s = 0; s < e.length; s++) {
            const a = mv[e[s]];
            if (a && a(o, e)) return;
          }
          return t(o, ...i);
        })
      );
    },
    bv = zt({ patchProp: pv }, Qg);
  let Xa;
  function _v() {
    return Xa || (Xa = xg(bv));
  }
  const wv = (...t) => {
    const e = _v().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (r) => {
        const o = Sv(r);
        if (!o) return;
        const i = e._component;
        !ot(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
        const s = n(o, !1, xv(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
      }),
      e
    );
  };
  function xv(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function Sv(t) {
    return It(t) ? document.querySelector(t) : t;
  }
  var Av = !1;
  /*!
   * pinia v2.2.2
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ let ud;
  const Oo = (t) => (ud = t),
    fd = Symbol();
  function Xi(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Object]" &&
      typeof t.toJSON != "function"
    );
  }
  var ir;
  (function (t) {
    (t.direct = "direct"), (t.patchObject = "patch object"), (t.patchFunction = "patch function");
  })(ir || (ir = {}));
  function Ev() {
    const t = of(!0),
      e = t.run(() => ct({}));
    let n = [],
      r = [];
    const o = Ps({
      install(i) {
        Oo(o),
          (o._a = i),
          i.provide(fd, o),
          (i.config.globalProperties.$pinia = o),
          r.forEach((s) => n.push(s)),
          (r = []);
      },
      use(i) {
        return !this._a && !Av ? r.push(i) : n.push(i), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e,
    });
    return o;
  }
  const dd = () => {};
  function tl(t, e, n, r = dd) {
    t.push(e);
    const o = () => {
      const i = t.indexOf(e);
      i > -1 && (t.splice(i, 1), r());
    };
    return !n && xs() && sf(o), o;
  }
  function En(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const Ov = (t) => t(),
    el = Symbol(),
    Xo = Symbol();
  function ts(t, e) {
    t instanceof Map && e instanceof Map
      ? e.forEach((n, r) => t.set(r, n))
      : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n],
        o = t[n];
      Xi(o) && Xi(r) && t.hasOwnProperty(n) && !kt(r) && !Ke(r) ? (t[n] = ts(o, r)) : (t[n] = r);
    }
    return t;
  }
  const Tv = Symbol();
  function jv(t) {
    return !Xi(t) || !t.hasOwnProperty(Tv);
  }
  const { assign: Ue } = Object;
  function Cv(t) {
    return !!(kt(t) && t.effect);
  }
  function Pv(t, e, n, r) {
    const { state: o, actions: i, getters: s } = e,
      a = n.state.value[t];
    let l;
    function c() {
      a || (n.state.value[t] = o ? o() : {});
      const u = Ip(n.state.value[t]);
      return Ue(
        u,
        i,
        Object.keys(s || {}).reduce(
          (d, f) => (
            (d[f] = Ps(
              rt(() => {
                Oo(n);
                const h = n._s.get(t);
                return s[f].call(h, h);
              }),
            )),
            d
          ),
          {},
        ),
      );
    }
    return (l = hd(t, c, e, n, r, !0)), l;
  }
  function hd(t, e, n = {}, r, o, i) {
    let s;
    const a = Ue({ actions: {} }, n),
      l = { deep: !0 };
    let c,
      u,
      d = [],
      f = [],
      h;
    const v = r.state.value[t];
    !i && !v && (r.state.value[t] = {}), ct({});
    let m;
    function w(N) {
      let J;
      (c = u = !1),
        typeof N == "function"
          ? (N(r.state.value[t]), (J = { type: ir.patchFunction, storeId: t, events: h }))
          : (ts(r.state.value[t], N), (J = { type: ir.patchObject, payload: N, storeId: t, events: h }));
      const I = (m = Symbol());
      bo().then(() => {
        m === I && (c = !0);
      }),
        (u = !0),
        En(d, J, r.state.value[t]);
    }
    const b = i
      ? function () {
          const { state: J } = n,
            I = J ? J() : {};
          this.$patch((p) => {
            Ue(p, I);
          });
        }
      : dd;
    function _() {
      s.stop(), (d = []), (f = []), r._s.delete(t);
    }
    const x = (N, J = "") => {
        if (el in N) return (N[Xo] = J), N;
        const I = function () {
          Oo(r);
          const p = Array.from(arguments),
            A = [],
            P = [];
          function Z(V) {
            A.push(V);
          }
          function tt(V) {
            P.push(V);
          }
          En(f, { args: p, name: I[Xo], store: C, after: Z, onError: tt });
          let H;
          try {
            H = N.apply(this && this.$id === t ? this : C, p);
          } catch (V) {
            throw (En(P, V), V);
          }
          return H instanceof Promise
            ? H.then((V) => (En(A, V), V)).catch((V) => (En(P, V), Promise.reject(V)))
            : (En(A, H), H);
        };
        return (I[el] = !0), (I[Xo] = J), I;
      },
      S = {
        _p: r,
        $id: t,
        $onAction: tl.bind(null, f),
        $patch: w,
        $reset: b,
        $subscribe(N, J = {}) {
          const I = tl(d, N, J.detached, () => p()),
            p = s.run(() =>
              me(
                () => r.state.value[t],
                (A) => {
                  (J.flush === "sync" ? u : c) && N({ storeId: t, type: ir.direct, events: h }, A);
                },
                Ue({}, l, J),
              ),
            );
          return I;
        },
        $dispose: _,
      },
      C = Ln(S);
    r._s.set(t, C);
    const j = ((r._a && r._a.runWithContext) || Ov)(() => r._e.run(() => (s = of()).run(() => e({ action: x }))));
    for (const N in j) {
      const J = j[N];
      if ((kt(J) && !Cv(J)) || Ke(J))
        i || (v && jv(J) && (kt(J) ? (J.value = v[N]) : ts(J, v[N])), (r.state.value[t][N] = J));
      else if (typeof J == "function") {
        const I = x(J, N);
        (j[N] = I), (a.actions[N] = J);
      }
    }
    return (
      Ue(C, j),
      Ue(dt(C), j),
      Object.defineProperty(C, "$state", {
        get: () => r.state.value[t],
        set: (N) => {
          w((J) => {
            Ue(J, N);
          });
        },
      }),
      r._p.forEach((N) => {
        Ue(
          C,
          s.run(() => N({ store: C, app: r._a, pinia: r, options: a })),
        );
      }),
      v && i && n.hydrate && n.hydrate(C.$state, v),
      (c = !0),
      (u = !0),
      C
    );
  }
  function Bs(t, e, n) {
    let r, o;
    const i = typeof e == "function";
    typeof t == "string" ? ((r = t), (o = i ? n : e)) : ((o = t), (r = t.id));
    function s(a, l) {
      const c = gg();
      return (
        (a = a || (c ? ae(fd, null) : null)),
        a && Oo(a),
        (a = ud),
        a._s.has(r) || (i ? hd(r, e, o, a) : Pv(r, o, a)),
        a._s.get(r)
      );
    }
    return (s.$id = r), s;
  }
  /*!
   * vue-router v4.4.5
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ const Tn = typeof document < "u";
  function pd(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function Rv(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || (t.default && pd(t.default));
  }
  const mt = Object.assign;
  function ti(t, e) {
    const n = {};
    for (const r in e) {
      const o = e[r];
      n[r] = fe(o) ? o.map(t) : t(o);
    }
    return n;
  }
  const sr = () => {},
    fe = Array.isArray,
    gd = /#/g,
    kv = /&/g,
    $v = /\//g,
    Iv = /=/g,
    Mv = /\?/g,
    vd = /\+/g,
    Nv = /%5B/g,
    Fv = /%5D/g,
    yd = /%5E/g,
    Dv = /%60/g,
    md = /%7B/g,
    Lv = /%7C/g,
    bd = /%7D/g,
    zv = /%20/g;
  function Vs(t) {
    return encodeURI("" + t)
      .replace(Lv, "|")
      .replace(Nv, "[")
      .replace(Fv, "]");
  }
  function Uv(t) {
    return Vs(t).replace(md, "{").replace(bd, "}").replace(yd, "^");
  }
  function es(t) {
    return Vs(t)
      .replace(vd, "%2B")
      .replace(zv, "+")
      .replace(gd, "%23")
      .replace(kv, "%26")
      .replace(Dv, "`")
      .replace(md, "{")
      .replace(bd, "}")
      .replace(yd, "^");
  }
  function Bv(t) {
    return es(t).replace(Iv, "%3D");
  }
  function Vv(t) {
    return Vs(t).replace(gd, "%23").replace(Mv, "%3F");
  }
  function Hv(t) {
    return t == null ? "" : Vv(t).replace($v, "%2F");
  }
  function vr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {}
    return "" + t;
  }
  const Kv = /\/$/,
    Wv = (t) => t.replace(Kv, "");
  function ei(t, e, n = "/") {
    let r,
      o = {},
      i = "",
      s = "";
    const a = e.indexOf("#");
    let l = e.indexOf("?");
    return (
      a < l && a >= 0 && (l = -1),
      l > -1 && ((r = e.slice(0, l)), (i = e.slice(l + 1, a > -1 ? a : e.length)), (o = t(i))),
      a > -1 && ((r = r || e.slice(0, a)), (s = e.slice(a, e.length))),
      (r = Zv(r ?? e, n)),
      { fullPath: r + (i && "?") + i + s, path: r, query: o, hash: vr(s) }
    );
  }
  function qv(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function nl(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function Gv(t, e, n) {
    const r = e.matched.length - 1,
      o = n.matched.length - 1;
    return (
      r > -1 &&
      r === o &&
      Mn(e.matched[r], n.matched[o]) &&
      _d(e.params, n.params) &&
      t(e.query) === t(n.query) &&
      e.hash === n.hash
    );
  }
  function Mn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function _d(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t) if (!Jv(t[n], e[n])) return !1;
    return !0;
  }
  function Jv(t, e) {
    return fe(t) ? rl(t, e) : fe(e) ? rl(e, t) : t === e;
  }
  function rl(t, e) {
    return fe(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function Zv(t, e) {
    if (t.startsWith("/")) return t;
    if (!t) return e;
    const n = e.split("/"),
      r = t.split("/"),
      o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let i = n.length - 1,
      s,
      a;
    for (s = 0; s < r.length; s++)
      if (((a = r[s]), a !== "."))
        if (a === "..") i > 1 && i--;
        else break;
    return n.slice(0, i).join("/") + "/" + r.slice(s).join("/");
  }
  const ze = {
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
  var yr;
  (function (t) {
    (t.pop = "pop"), (t.push = "push");
  })(yr || (yr = {}));
  var ar;
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(ar || (ar = {}));
  function Yv(t) {
    if (!t)
      if (Tn) {
        const e = document.querySelector("base");
        (t = (e && e.getAttribute("href")) || "/"), (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
      } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Wv(t);
  }
  const Qv = /^[^#]+#/;
  function Xv(t, e) {
    return t.replace(Qv, "#") + e;
  }
  function ty(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
      r = t.getBoundingClientRect();
    return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) };
  }
  const To = () => ({ left: window.scrollX, top: window.scrollY });
  function ey(t) {
    let e;
    if ("el" in t) {
      const n = t.el,
        r = typeof n == "string" && n.startsWith("#"),
        o = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!o) return;
      e = ty(o, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(e)
      : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function ol(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const ns = new Map();
  function ny(t, e) {
    ns.set(t, e);
  }
  function ry(t) {
    const e = ns.get(t);
    return ns.delete(t), e;
  }
  let oy = () => location.protocol + "//" + location.host;
  function wd(t, e) {
    const { pathname: n, search: r, hash: o } = e,
      i = t.indexOf("#");
    if (i > -1) {
      let a = o.includes(t.slice(i)) ? t.slice(i).length : 1,
        l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), nl(l, "");
    }
    return nl(n, t) + r + o;
  }
  function iy(t, e, n, r) {
    let o = [],
      i = [],
      s = null;
    const a = ({ state: f }) => {
      const h = wd(t, location),
        v = n.value,
        m = e.value;
      let w = 0;
      if (f) {
        if (((n.value = h), (e.value = f), s && s === v)) {
          s = null;
          return;
        }
        w = m ? f.position - m.position : 0;
      } else r(h);
      o.forEach((b) => {
        b(n.value, v, { delta: w, type: yr.pop, direction: w ? (w > 0 ? ar.forward : ar.back) : ar.unknown });
      });
    };
    function l() {
      s = n.value;
    }
    function c(f) {
      o.push(f);
      const h = () => {
        const v = o.indexOf(f);
        v > -1 && o.splice(v, 1);
      };
      return i.push(h), h;
    }
    function u() {
      const { history: f } = window;
      f.state && f.replaceState(mt({}, f.state, { scroll: To() }), "");
    }
    function d() {
      for (const f of i) f();
      (i = []), window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
    }
    return (
      window.addEventListener("popstate", a),
      window.addEventListener("beforeunload", u, { passive: !0 }),
      { pauseListeners: l, listen: c, destroy: d }
    );
  }
  function il(t, e, n, r = !1, o = !1) {
    return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: o ? To() : null };
  }
  function sy(t) {
    const { history: e, location: n } = window,
      r = { value: wd(t, n) },
      o = { value: e.state };
    o.value ||
      i(
        r.value,
        { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function i(l, c, u) {
      const d = t.indexOf("#"),
        f = d > -1 ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l : oy() + t + l;
      try {
        e[u ? "replaceState" : "pushState"](c, "", f), (o.value = c);
      } catch (h) {
        console.error(h), n[u ? "replace" : "assign"](f);
      }
    }
    function s(l, c) {
      const u = mt({}, e.state, il(o.value.back, l, o.value.forward, !0), c, { position: o.value.position });
      i(l, u, !0), (r.value = l);
    }
    function a(l, c) {
      const u = mt({}, o.value, e.state, { forward: l, scroll: To() });
      i(u.current, u, !0);
      const d = mt({}, il(r.value, l, null), { position: u.position + 1 }, c);
      i(l, d, !1), (r.value = l);
    }
    return { location: r, state: o, push: a, replace: s };
  }
  function ay(t) {
    t = Yv(t);
    const e = sy(t),
      n = iy(t, e.state, e.location, e.replace);
    function r(i, s = !0) {
      s || n.pauseListeners(), history.go(i);
    }
    const o = mt({ location: "", base: t, go: r, createHref: Xv.bind(null, t) }, e, n);
    return (
      Object.defineProperty(o, "location", { enumerable: !0, get: () => e.location.value }),
      Object.defineProperty(o, "state", { enumerable: !0, get: () => e.state.value }),
      o
    );
  }
  function ly(t) {
    return typeof t == "string" || (t && typeof t == "object");
  }
  function xd(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const Sd = Symbol("");
  var sl;
  (function (t) {
    (t[(t.aborted = 4)] = "aborted"), (t[(t.cancelled = 8)] = "cancelled"), (t[(t.duplicated = 16)] = "duplicated");
  })(sl || (sl = {}));
  function Nn(t, e) {
    return mt(new Error(), { type: t, [Sd]: !0 }, e);
  }
  function Te(t, e) {
    return t instanceof Error && Sd in t && (e == null || !!(t.type & e));
  }
  const al = "[^/]+?",
    cy = { sensitive: !1, strict: !1, start: !0, end: !0 },
    uy = /[.+*?^${}()[\]/\\]/g;
  function fy(t, e) {
    const n = mt({}, cy, e),
      r = [];
    let o = n.start ? "^" : "";
    const i = [];
    for (const c of t) {
      const u = c.length ? [] : [90];
      n.strict && !c.length && (o += "/");
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        let h = 40 + (n.sensitive ? 0.25 : 0);
        if (f.type === 0) d || (o += "/"), (o += f.value.replace(uy, "\\$&")), (h += 40);
        else if (f.type === 1) {
          const { value: v, repeatable: m, optional: w, regexp: b } = f;
          i.push({ name: v, repeatable: m, optional: w });
          const _ = b || al;
          if (_ !== al) {
            h += 10;
            try {
              new RegExp(`(${_})`);
            } catch (S) {
              throw new Error(`Invalid custom RegExp for param "${v}" (${_}): ` + S.message);
            }
          }
          let x = m ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          d || (x = w && c.length < 2 ? `(?:/${x})` : "/" + x),
            w && (x += "?"),
            (o += x),
            (h += 20),
            w && (h += -8),
            m && (h += -20),
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
    const s = new RegExp(o, n.sensitive ? "" : "i");
    function a(c) {
      const u = c.match(s),
        d = {};
      if (!u) return null;
      for (let f = 1; f < u.length; f++) {
        const h = u[f] || "",
          v = i[f - 1];
        d[v.name] = h && v.repeatable ? h.split("/") : h;
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
            const { value: v, repeatable: m, optional: w } = h,
              b = v in c ? c[v] : "";
            if (fe(b) && !m)
              throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
            const _ = fe(b) ? b.join("/") : b;
            if (!_)
              if (w) f.length < 2 && (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
              else throw new Error(`Missing required param "${v}"`);
            u += _;
          }
      }
      return u || "/";
    }
    return { re: s, score: r, keys: i, parse: a, stringify: l };
  }
  function dy(t, e) {
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
  function Ad(t, e) {
    let n = 0;
    const r = t.score,
      o = e.score;
    for (; n < r.length && n < o.length; ) {
      const i = dy(r[n], o[n]);
      if (i) return i;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (ll(r)) return 1;
      if (ll(o)) return -1;
    }
    return o.length - r.length;
  }
  function ll(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const hy = { type: 0, value: "" },
    py = /[a-zA-Z0-9_]/;
  function gy(t) {
    if (!t) return [[]];
    if (t === "/") return [[hy]];
    if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
    function e(h) {
      throw new Error(`ERR (${n})/"${c}": ${h}`);
    }
    let n = 0,
      r = n;
    const o = [];
    let i;
    function s() {
      i && o.push(i), (i = []);
    }
    let a = 0,
      l,
      c = "",
      u = "";
    function d() {
      c &&
        (n === 0
          ? i.push({ type: 0, value: c })
          : n === 1 || n === 2 || n === 3
            ? (i.length > 1 &&
                (l === "*" || l === "+") &&
                e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
              i.push({
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
          l === "/" ? (c && d(), s()) : l === ":" ? (d(), (n = 1)) : f();
          break;
        case 4:
          f(), (n = r);
          break;
        case 1:
          l === "(" ? (n = 2) : py.test(l) ? f() : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
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
    return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), s(), o;
  }
  function vy(t, e, n) {
    const r = fy(gy(t.path), n),
      o = mt(r, { record: t, parent: e, children: [], alias: [] });
    return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
  }
  function yy(t, e) {
    const n = [],
      r = new Map();
    e = dl({ strict: !1, end: !0, sensitive: !1 }, e);
    function o(d) {
      return r.get(d);
    }
    function i(d, f, h) {
      const v = !h,
        m = ul(d);
      m.aliasOf = h && h.record;
      const w = dl(e, d),
        b = [m];
      if ("alias" in d) {
        const S = typeof d.alias == "string" ? [d.alias] : d.alias;
        for (const C of S)
          b.push(
            ul(mt({}, m, { components: h ? h.record.components : m.components, path: C, aliasOf: h ? h.record : m })),
          );
      }
      let _, x;
      for (const S of b) {
        const { path: C } = S;
        if (f && C[0] !== "/") {
          const z = f.record.path,
            j = z[z.length - 1] === "/" ? "" : "/";
          S.path = f.record.path + (C && j + C);
        }
        if (
          ((_ = vy(S, f, w)),
          h ? h.alias.push(_) : ((x = x || _), x !== _ && x.alias.push(_), v && d.name && !fl(_) && s(d.name)),
          Ed(_) && l(_),
          m.children)
        ) {
          const z = m.children;
          for (let j = 0; j < z.length; j++) i(z[j], _, h && h.children[j]);
        }
        h = h || _;
      }
      return x
        ? () => {
            s(x);
          }
        : sr;
    }
    function s(d) {
      if (xd(d)) {
        const f = r.get(d);
        f && (r.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(s), f.alias.forEach(s));
      } else {
        const f = n.indexOf(d);
        f > -1 && (n.splice(f, 1), d.record.name && r.delete(d.record.name), d.children.forEach(s), d.alias.forEach(s));
      }
    }
    function a() {
      return n;
    }
    function l(d) {
      const f = _y(d, n);
      n.splice(f, 0, d), d.record.name && !fl(d) && r.set(d.record.name, d);
    }
    function c(d, f) {
      let h,
        v = {},
        m,
        w;
      if ("name" in d && d.name) {
        if (((h = r.get(d.name)), !h)) throw Nn(1, { location: d });
        (w = h.record.name),
          (v = mt(
            cl(
              f.params,
              h.keys
                .filter((x) => !x.optional)
                .concat(h.parent ? h.parent.keys.filter((x) => x.optional) : [])
                .map((x) => x.name),
            ),
            d.params &&
              cl(
                d.params,
                h.keys.map((x) => x.name),
              ),
          )),
          (m = h.stringify(v));
      } else if (d.path != null)
        (m = d.path), (h = n.find((x) => x.re.test(m))), h && ((v = h.parse(m)), (w = h.record.name));
      else {
        if (((h = f.name ? r.get(f.name) : n.find((x) => x.re.test(f.path))), !h))
          throw Nn(1, { location: d, currentLocation: f });
        (w = h.record.name), (v = mt({}, f.params, d.params)), (m = h.stringify(v));
      }
      const b = [];
      let _ = h;
      for (; _; ) b.unshift(_.record), (_ = _.parent);
      return { name: w, path: m, params: v, matched: b, meta: by(b) };
    }
    t.forEach((d) => i(d));
    function u() {
      (n.length = 0), r.clear();
    }
    return { addRoute: i, resolve: c, removeRoute: s, clearRoutes: u, getRoutes: a, getRecordMatcher: o };
  }
  function cl(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function ul(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: my(t),
      children: t.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && { default: t.component },
    };
    return Object.defineProperty(e, "mods", { value: {} }), e;
  }
  function my(t) {
    const e = {},
      n = t.props || !1;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function fl(t) {
    for (; t; ) {
      if (t.record.aliasOf) return !0;
      t = t.parent;
    }
    return !1;
  }
  function by(t) {
    return t.reduce((e, n) => mt(e, n.meta), {});
  }
  function dl(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function _y(t, e) {
    let n = 0,
      r = e.length;
    for (; n !== r; ) {
      const i = (n + r) >> 1;
      Ad(t, e[i]) < 0 ? (r = i) : (n = i + 1);
    }
    const o = wy(t);
    return o && (r = e.lastIndexOf(o, r - 1)), r;
  }
  function wy(t) {
    let e = t;
    for (; (e = e.parent); ) if (Ed(e) && Ad(t, e) === 0) return e;
  }
  function Ed({ record: t }) {
    return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect);
  }
  function xy(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let o = 0; o < r.length; ++o) {
      const i = r[o].replace(vd, " "),
        s = i.indexOf("="),
        a = vr(s < 0 ? i : i.slice(0, s)),
        l = s < 0 ? null : vr(i.slice(s + 1));
      if (a in e) {
        let c = e[a];
        fe(c) || (c = e[a] = [c]), c.push(l);
      } else e[a] = l;
    }
    return e;
  }
  function hl(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (((n = Bv(n)), r == null)) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (fe(r) ? r.map((i) => i && es(i)) : [r && es(r)]).forEach((i) => {
        i !== void 0 && ((e += (e.length ? "&" : "") + n), i != null && (e += "=" + i));
      });
    }
    return e;
  }
  function Sy(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = fe(r) ? r.map((o) => (o == null ? null : "" + o)) : r == null ? r : "" + r);
    }
    return e;
  }
  const Ay = Symbol(""),
    pl = Symbol(""),
    jo = Symbol(""),
    Hs = Symbol(""),
    rs = Symbol("");
  function Gn() {
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
  function He(t, e, n, r, o, i = (s) => s()) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
      new Promise((a, l) => {
        const c = (f) => {
            f === !1
              ? l(Nn(4, { from: n, to: e }))
              : f instanceof Error
                ? l(f)
                : ly(f)
                  ? l(Nn(2, { from: e, to: f }))
                  : (s && r.enterCallbacks[o] === s && typeof f == "function" && s.push(f), a());
          },
          u = i(() => t.call(r && r.instances[o], e, n, c));
        let d = Promise.resolve(u);
        t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
      });
  }
  function ni(t, e, n, r, o = (i) => i()) {
    const i = [];
    for (const s of t)
      for (const a in s.components) {
        let l = s.components[a];
        if (!(e !== "beforeRouteEnter" && !s.instances[a]))
          if (pd(l)) {
            const u = (l.__vccOpts || l)[e];
            u && i.push(He(u, n, r, s, a, o));
          } else {
            let c = l();
            i.push(() =>
              c.then((u) => {
                if (!u) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
                const d = Rv(u) ? u.default : u;
                (s.mods[a] = u), (s.components[a] = d);
                const h = (d.__vccOpts || d)[e];
                return h && He(h, n, r, s, a, o)();
              }),
            );
          }
      }
    return i;
  }
  function gl(t) {
    const e = ae(jo),
      n = ae(Hs),
      r = rt(() => {
        const l = G(t.to);
        return e.resolve(l);
      }),
      o = rt(() => {
        const { matched: l } = r.value,
          { length: c } = l,
          u = l[c - 1],
          d = n.matched;
        if (!u || !d.length) return -1;
        const f = d.findIndex(Mn.bind(null, u));
        if (f > -1) return f;
        const h = vl(l[c - 2]);
        return c > 1 && vl(u) === h && d[d.length - 1].path !== h ? d.findIndex(Mn.bind(null, l[c - 2])) : f;
      }),
      i = rt(() => o.value > -1 && jy(n.params, r.value.params)),
      s = rt(() => o.value > -1 && o.value === n.matched.length - 1 && _d(n.params, r.value.params));
    function a(l = {}) {
      return Ty(l) ? e[G(t.replace) ? "replace" : "push"](G(t.to)).catch(sr) : Promise.resolve();
    }
    return { route: r, href: rt(() => r.value.href), isActive: i, isExactActive: s, navigate: a };
  }
  const Ey = Dt({
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
      useLink: gl,
      setup(t, { slots: e }) {
        const n = Ln(gl(t)),
          { options: r } = ae(jo),
          o = rt(() => ({
            [yl(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [yl(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
          }));
        return () => {
          const i = e.default && e.default(n);
          return t.custom
            ? i
            : sd(
                "a",
                {
                  "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                  href: n.href,
                  onClick: n.navigate,
                  class: o.value,
                },
                i,
              );
        };
      },
    }),
    Oy = Ey;
  function Ty(t) {
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
  function jy(t, e) {
    for (const n in e) {
      const r = e[n],
        o = t[n];
      if (typeof r == "string") {
        if (r !== o) return !1;
      } else if (!fe(o) || o.length !== r.length || r.some((i, s) => i !== o[s])) return !1;
    }
    return !0;
  }
  function vl(t) {
    return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
  }
  const yl = (t, e, n) => t ?? e ?? n,
    Cy = Dt({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(t, { attrs: e, slots: n }) {
        const r = ae(rs),
          o = rt(() => t.route || r.value),
          i = ae(pl, 0),
          s = rt(() => {
            let c = G(i);
            const { matched: u } = o.value;
            let d;
            for (; (d = u[c]) && !d.components; ) c++;
            return c;
          }),
          a = rt(() => o.value.matched[s.value]);
        Hr(
          pl,
          rt(() => s.value + 1),
        ),
          Hr(Ay, a),
          Hr(rs, o);
        const l = ct();
        return (
          me(
            () => [l.value, a.value, t.name],
            ([c, u, d], [f, h, v]) => {
              u &&
                ((u.instances[d] = c),
                h &&
                  h !== u &&
                  c &&
                  c === f &&
                  (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                  u.updateGuards.size || (u.updateGuards = h.updateGuards))),
                c && u && (!h || !Mn(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((m) => m(c));
            },
            { flush: "post" },
          ),
          () => {
            const c = o.value,
              u = t.name,
              d = a.value,
              f = d && d.components[u];
            if (!f) return ml(n.default, { Component: f, route: c });
            const h = d.props[u],
              v = h ? (h === !0 ? c.params : typeof h == "function" ? h(c) : h) : null,
              w = sd(
                f,
                mt({}, v, e, {
                  onVnodeUnmounted: (b) => {
                    b.component.isUnmounted && (d.instances[u] = null);
                  },
                  ref: l,
                }),
              );
            return ml(n.default, { Component: w, route: c }) || w;
          }
        );
      },
    });
  function ml(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const Od = Cy;
  function Py(t) {
    const e = yy(t.routes, t),
      n = t.parseQuery || xy,
      r = t.stringifyQuery || hl,
      o = t.history,
      i = Gn(),
      s = Gn(),
      a = Gn(),
      l = Sf(ze);
    let c = ze;
    Tn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = ti.bind(null, (T) => "" + T),
      d = ti.bind(null, Hv),
      f = ti.bind(null, vr);
    function h(T, q) {
      let B, Y;
      return xd(T) ? ((B = e.getRecordMatcher(T)), (Y = q)) : (Y = T), e.addRoute(Y, B);
    }
    function v(T) {
      const q = e.getRecordMatcher(T);
      q && e.removeRoute(q);
    }
    function m() {
      return e.getRoutes().map((T) => T.record);
    }
    function w(T) {
      return !!e.getRecordMatcher(T);
    }
    function b(T, q) {
      if (((q = mt({}, q || l.value)), typeof T == "string")) {
        const y = ei(n, T, q.path),
          E = e.resolve({ path: y.path }, q),
          R = o.createHref(y.fullPath);
        return mt(y, E, { params: f(E.params), hash: vr(y.hash), redirectedFrom: void 0, href: R });
      }
      let B;
      if (T.path != null) B = mt({}, T, { path: ei(n, T.path, q.path).path });
      else {
        const y = mt({}, T.params);
        for (const E in y) y[E] == null && delete y[E];
        (B = mt({}, T, { params: d(y) })), (q.params = d(q.params));
      }
      const Y = e.resolve(B, q),
        gt = T.hash || "";
      Y.params = u(f(Y.params));
      const Rt = qv(r, mt({}, T, { hash: Uv(gt), path: Y.path })),
        g = o.createHref(Rt);
      return mt({ fullPath: Rt, hash: gt, query: r === hl ? Sy(T.query) : T.query || {} }, Y, {
        redirectedFrom: void 0,
        href: g,
      });
    }
    function _(T) {
      return typeof T == "string" ? ei(n, T, l.value.path) : mt({}, T);
    }
    function x(T, q) {
      if (c !== T) return Nn(8, { from: q, to: T });
    }
    function S(T) {
      return j(T);
    }
    function C(T) {
      return S(mt(_(T), { replace: !0 }));
    }
    function z(T) {
      const q = T.matched[T.matched.length - 1];
      if (q && q.redirect) {
        const { redirect: B } = q;
        let Y = typeof B == "function" ? B(T) : B;
        return (
          typeof Y == "string" &&
            ((Y = Y.includes("?") || Y.includes("#") ? (Y = _(Y)) : { path: Y }), (Y.params = {})),
          mt({ query: T.query, hash: T.hash, params: Y.path != null ? {} : T.params }, Y)
        );
      }
    }
    function j(T, q) {
      const B = (c = b(T)),
        Y = l.value,
        gt = T.state,
        Rt = T.force,
        g = T.replace === !0,
        y = z(B);
      if (y)
        return j(mt(_(y), { state: typeof y == "object" ? mt({}, gt, y.state) : gt, force: Rt, replace: g }), q || B);
      const E = B;
      E.redirectedFrom = q;
      let R;
      return (
        !Rt && Gv(r, Y, B) && ((R = Nn(16, { to: E, from: Y })), qt(Y, Y, !0, !1)),
        (R ? Promise.resolve(R) : I(E, Y))
          .catch((O) => (Te(O) ? (Te(O, 2) ? O : Pt(O)) : it(O, E, Y)))
          .then((O) => {
            if (O) {
              if (Te(O, 2))
                return j(
                  mt({ replace: g }, _(O.to), {
                    state: typeof O.to == "object" ? mt({}, gt, O.to.state) : gt,
                    force: Rt,
                  }),
                  q || E,
                );
            } else O = A(E, Y, !0, g, gt);
            return p(E, Y, O), O;
          })
      );
    }
    function N(T, q) {
      const B = x(T, q);
      return B ? Promise.reject(B) : Promise.resolve();
    }
    function J(T) {
      const q = Ee.values().next().value;
      return q && typeof q.runWithContext == "function" ? q.runWithContext(T) : T();
    }
    function I(T, q) {
      let B;
      const [Y, gt, Rt] = Ry(T, q);
      B = ni(Y.reverse(), "beforeRouteLeave", T, q);
      for (const y of Y)
        y.leaveGuards.forEach((E) => {
          B.push(He(E, T, q));
        });
      const g = N.bind(null, T, q);
      return (
        B.push(g),
        ie(B)
          .then(() => {
            B = [];
            for (const y of i.list()) B.push(He(y, T, q));
            return B.push(g), ie(B);
          })
          .then(() => {
            B = ni(gt, "beforeRouteUpdate", T, q);
            for (const y of gt)
              y.updateGuards.forEach((E) => {
                B.push(He(E, T, q));
              });
            return B.push(g), ie(B);
          })
          .then(() => {
            B = [];
            for (const y of Rt)
              if (y.beforeEnter)
                if (fe(y.beforeEnter)) for (const E of y.beforeEnter) B.push(He(E, T, q));
                else B.push(He(y.beforeEnter, T, q));
            return B.push(g), ie(B);
          })
          .then(
            () => (
              T.matched.forEach((y) => (y.enterCallbacks = {})),
              (B = ni(Rt, "beforeRouteEnter", T, q, J)),
              B.push(g),
              ie(B)
            ),
          )
          .then(() => {
            B = [];
            for (const y of s.list()) B.push(He(y, T, q));
            return B.push(g), ie(B);
          })
          .catch((y) => (Te(y, 8) ? y : Promise.reject(y)))
      );
    }
    function p(T, q, B) {
      a.list().forEach((Y) => J(() => Y(T, q, B)));
    }
    function A(T, q, B, Y, gt) {
      const Rt = x(T, q);
      if (Rt) return Rt;
      const g = q === ze,
        y = Tn ? history.state : {};
      B && (Y || g ? o.replace(T.fullPath, mt({ scroll: g && y && y.scroll }, gt)) : o.push(T.fullPath, gt)),
        (l.value = T),
        qt(T, q, B, g),
        Pt();
    }
    let P;
    function Z() {
      P ||
        (P = o.listen((T, q, B) => {
          if (!Sn.listening) return;
          const Y = b(T),
            gt = z(Y);
          if (gt) {
            j(mt(gt, { replace: !0 }), Y).catch(sr);
            return;
          }
          c = Y;
          const Rt = l.value;
          Tn && ny(ol(Rt.fullPath, B.delta), To()),
            I(Y, Rt)
              .catch((g) =>
                Te(g, 12)
                  ? g
                  : Te(g, 2)
                    ? (j(g.to, Y)
                        .then((y) => {
                          Te(y, 20) && !B.delta && B.type === yr.pop && o.go(-1, !1);
                        })
                        .catch(sr),
                      Promise.reject())
                    : (B.delta && o.go(-B.delta, !1), it(g, Y, Rt)),
              )
              .then((g) => {
                (g = g || A(Y, Rt, !1)),
                  g && (B.delta && !Te(g, 8) ? o.go(-B.delta, !1) : B.type === yr.pop && Te(g, 20) && o.go(-1, !1)),
                  p(Y, Rt, g);
              })
              .catch(sr);
        }));
    }
    let tt = Gn(),
      H = Gn(),
      V;
    function it(T, q, B) {
      Pt(T);
      const Y = H.list();
      return Y.length ? Y.forEach((gt) => gt(T, q, B)) : console.error(T), Promise.reject(T);
    }
    function Ut() {
      return V && l.value !== ze
        ? Promise.resolve()
        : new Promise((T, q) => {
            tt.add([T, q]);
          });
    }
    function Pt(T) {
      return V || ((V = !T), Z(), tt.list().forEach(([q, B]) => (T ? B(T) : q())), tt.reset()), T;
    }
    function qt(T, q, B, Y) {
      const { scrollBehavior: gt } = t;
      if (!Tn || !gt) return Promise.resolve();
      const Rt = (!B && ry(ol(T.fullPath, 0))) || ((Y || !B) && history.state && history.state.scroll) || null;
      return bo()
        .then(() => gt(T, q, Rt))
        .then((g) => g && ey(g))
        .catch((g) => it(g, T, q));
    }
    const _t = (T) => o.go(T);
    let Vt;
    const Ee = new Set(),
      Sn = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: v,
        clearRoutes: e.clearRoutes,
        hasRoute: w,
        getRoutes: m,
        resolve: b,
        options: t,
        push: S,
        replace: C,
        go: _t,
        back: () => _t(-1),
        forward: () => _t(1),
        beforeEach: i.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: H.add,
        isReady: Ut,
        install(T) {
          const q = this;
          T.component("RouterLink", Oy),
            T.component("RouterView", Od),
            (T.config.globalProperties.$router = q),
            Object.defineProperty(T.config.globalProperties, "$route", { enumerable: !0, get: () => G(l) }),
            Tn && !Vt && l.value === ze && ((Vt = !0), S(o.location).catch((gt) => {}));
          const B = {};
          for (const gt in ze) Object.defineProperty(B, gt, { get: () => l.value[gt], enumerable: !0 });
          T.provide(jo, q), T.provide(Hs, wf(B)), T.provide(rs, l);
          const Y = T.unmount;
          Ee.add(T),
            (T.unmount = function () {
              Ee.delete(T), Ee.size < 1 && ((c = ze), P && P(), (P = null), (l.value = ze), (Vt = !1), (V = !1)), Y();
            });
        },
      };
    function ie(T) {
      return T.reduce((q, B) => q.then(() => J(B)), Promise.resolve());
    }
    return Sn;
  }
  function Ry(t, e) {
    const n = [],
      r = [],
      o = [],
      i = Math.max(e.matched.length, t.matched.length);
    for (let s = 0; s < i; s++) {
      const a = e.matched[s];
      a && (t.matched.find((c) => Mn(c, a)) ? r.push(a) : n.push(a));
      const l = t.matched[s];
      l && (e.matched.find((c) => Mn(c, l)) || o.push(l));
    }
    return [n, r, o];
  }
  function Co() {
    return ae(jo);
  }
  function Po(t) {
    return ae(Hs);
  }
  const ky = Dt({
    __name: "App",
    setup(t) {
      return (e, n) => (L(), K("main", null, [st(G(Od))]));
    },
  });
  var $y = Object.defineProperty,
    Iy = (t, e, n) => (e in t ? $y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    at = (t, e, n) => (Iy(t, typeof e != "symbol" ? e + "" : e, n), n),
    Bt = [];
  for (var ri = 0; ri < 256; ++ri) Bt.push((ri + 256).toString(16).slice(1));
  function My(t, e = 0) {
    return (
      Bt[t[e + 0]] +
      Bt[t[e + 1]] +
      Bt[t[e + 2]] +
      Bt[t[e + 3]] +
      "-" +
      Bt[t[e + 4]] +
      Bt[t[e + 5]] +
      "-" +
      Bt[t[e + 6]] +
      Bt[t[e + 7]] +
      "-" +
      Bt[t[e + 8]] +
      Bt[t[e + 9]] +
      "-" +
      Bt[t[e + 10]] +
      Bt[t[e + 11]] +
      Bt[t[e + 12]] +
      Bt[t[e + 13]] +
      Bt[t[e + 14]] +
      Bt[t[e + 15]]
    ).toLowerCase();
  }
  var Mr,
    Ny = new Uint8Array(16);
  function Fy() {
    if (!Mr && ((Mr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Mr))
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return Mr(Ny);
  }
  var Dy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  const bl = { randomUUID: Dy };
  function Ly(t, e, n) {
    if (bl.randomUUID && !e && !t) return bl.randomUUID();
    t = t || {};
    var r = t.random || (t.rng || Fy)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), My(r);
  }
  function zy(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Uy = function () {},
    By = Uy(),
    gn = function (t) {
      return t !== By && t !== null;
    },
    Vy = gn,
    Hy = Array.prototype.forEach,
    Ky = Object.create,
    Wy = function (t, e) {
      var n;
      for (n in t) e[n] = t[n];
    },
    Td = function (t) {
      var e = Ky(null);
      return (
        Hy.call(arguments, function (n) {
          Vy(n) && Wy(Object(n), e);
        }),
        e
      );
    },
    qy = function () {
      var t = Math.sign;
      return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
    },
    _l,
    wl;
  function Gy() {
    return (
      wl ||
        ((wl = 1),
        (_l = function (t) {
          return (t = Number(t)), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
        })),
      _l
    );
  }
  var Jy = qy() ? Math.sign : Gy(),
    Zy = Jy,
    Yy = Math.abs,
    Qy = Math.floor,
    Xy = function (t) {
      return isNaN(t) ? 0 : ((t = Number(t)), t === 0 || !isFinite(t) ? t : Zy(t) * Qy(Yy(t)));
    },
    tm = Xy,
    em = Math.max,
    vn = function (t) {
      return em(0, tm(t));
    },
    nm = vn,
    jd = function (t, e, n) {
      var r;
      return isNaN(t) ? ((r = e), r >= 0 ? (n && r ? r - 1 : r) : 1) : t === !1 ? !1 : nm(t);
    },
    Xe = function (t) {
      if (typeof t != "function") throw new TypeError(t + " is not a function");
      return t;
    },
    rm = gn,
    zn = function (t) {
      if (!rm(t)) throw new TypeError("Cannot use null or undefined");
      return t;
    },
    om = Xe,
    im = zn,
    sm = Function.prototype.bind,
    xl = Function.prototype.call,
    am = Object.keys,
    lm = Object.prototype.propertyIsEnumerable,
    cm = function (t, e) {
      return function (n, r) {
        var o,
          i = arguments[2],
          s = arguments[3];
        return (
          (n = Object(im(n))),
          om(r),
          (o = am(n)),
          s && o.sort(typeof s == "function" ? sm.call(s, n) : void 0),
          typeof t != "function" && (t = o[t]),
          xl.call(t, o, function (a, l) {
            return lm.call(n, a) ? xl.call(r, i, n[a], a, n, l) : e;
          })
        );
      };
    },
    Ro = cm("forEach"),
    yn = {},
    Cd = { exports: {} },
    um = function () {
      var t = Object.assign,
        e;
      return typeof t != "function"
        ? !1
        : ((e = { foo: "raz" }), t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
    },
    Sl,
    Al;
  function fm() {
    return (
      Al ||
        ((Al = 1),
        (Sl = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        })),
      Sl
    );
  }
  var oi, El;
  function dm() {
    if (El) return oi;
    El = 1;
    var t = gn,
      e = Object.keys;
    return (
      (oi = function (n) {
        return e(t(n) ? Object(n) : n);
      }),
      oi
    );
  }
  var Ol, Tl;
  function hm() {
    return Tl || ((Tl = 1), (Ol = fm()() ? Object.keys : dm())), Ol;
  }
  var ii, jl;
  function pm() {
    if (jl) return ii;
    jl = 1;
    var t = hm(),
      e = zn,
      n = Math.max;
    return (
      (ii = function (r, o) {
        var i,
          s,
          a = n(arguments.length, 2),
          l;
        for (
          r = Object(e(r)),
            l = function (c) {
              try {
                r[c] = o[c];
              } catch (u) {
                i || (i = u);
              }
            },
            s = 1;
          s < a;
          ++s
        )
          (o = arguments[s]), t(o).forEach(l);
        if (i !== void 0) throw i;
        return r;
      }),
      ii
    );
  }
  var Pd = um() ? Object.assign : pm(),
    gm = gn,
    vm = { function: !0, object: !0 },
    ym = function (t) {
      return (gm(t) && vm[typeof t]) || !1;
    };
  (function (t) {
    var e = Pd,
      n = ym,
      r = gn,
      o = Error.captureStackTrace;
    t.exports = function (i) {
      var s = new Error(i),
        a = arguments[1],
        l = arguments[2];
      return r(l) || (n(a) && ((l = a), (a = null))), r(l) && e(s, l), r(a) && (s.code = a), o && o(s, t.exports), s;
    };
  })(Cd);
  var mm = Cd.exports,
    os = { exports: {} },
    si,
    Cl;
  function Rd() {
    if (Cl) return si;
    Cl = 1;
    var t = zn,
      e = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      r = Object.getOwnPropertyNames,
      o = Object.getOwnPropertySymbols;
    return (
      (si = function (i, s) {
        var a,
          l = Object(t(s));
        if (
          ((i = Object(t(i))),
          r(l).forEach(function (c) {
            try {
              e(i, c, n(s, c));
            } catch (u) {
              a = u;
            }
          }),
          typeof o == "function" &&
            o(l).forEach(function (c) {
              try {
                e(i, c, n(s, c));
              } catch (u) {
                a = u;
              }
            }),
          a !== void 0)
        )
          throw a;
        return i;
      }),
      si
    );
  }
  var Pl = vn,
    kd = function (t, e) {
      return e;
    },
    ai,
    Rl,
    kl,
    $l;
  try {
    Object.defineProperty(kd, "length", { configurable: !0, writable: !1, enumerable: !1, value: 1 });
  } catch {}
  kd.length === 1
    ? ((ai = { configurable: !0, writable: !1, enumerable: !1 }),
      (Rl = Object.defineProperty),
      (os.exports = function (t, e) {
        return (e = Pl(e)), t.length === e ? t : ((ai.value = e), Rl(t, "length", ai));
      }))
    : (($l = Rd()),
      (kl = (function () {
        var t = [];
        return function (e) {
          var n,
            r = 0;
          if (t[e]) return t[e];
          for (n = []; e--; ) n.push("a" + (++r).toString(36));
          return new Function("fn", "return function (" + n.join(", ") + ") { return fn.apply(this, arguments); };");
        };
      })()),
      (os.exports = function (t, e) {
        var n;
        if (((e = Pl(e)), t.length === e)) return t;
        n = kl(e)(t);
        try {
          $l(n, t);
        } catch {}
        return n;
      }));
  var $d = os.exports,
    Id = { exports: {} },
    bm = void 0,
    Md = function (t) {
      return t !== bm && t !== null;
    },
    _m = Md,
    wm = { object: !0, function: !0, undefined: !0 },
    xm = function (t) {
      return _m(t) ? hasOwnProperty.call(wm, typeof t) : !1;
    },
    Sm = xm,
    Am = function (t) {
      if (!Sm(t)) return !1;
      try {
        return t.constructor ? t.constructor.prototype === t : !1;
      } catch {
        return !1;
      }
    },
    Em = Am,
    Om = function (t) {
      if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
      try {
        if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
      } catch {
        return !1;
      }
      return !Em(t);
    },
    Tm = Om,
    jm = /^\s*class[\s{/}]/,
    Cm = Function.prototype.toString,
    Pm = function (t) {
      return !(!Tm(t) || jm.test(Cm.call(t)));
    },
    li = "razdwatrzy",
    Rm = function () {
      return typeof li.contains != "function" ? !1 : li.contains("dwa") === !0 && li.contains("foo") === !1;
    },
    ci,
    Il;
  function km() {
    if (Il) return ci;
    Il = 1;
    var t = String.prototype.indexOf;
    return (
      (ci = function (e) {
        return t.call(this, e, arguments[1]) > -1;
      }),
      ci
    );
  }
  var $m = Rm() ? String.prototype.contains : km(),
    qr = Md,
    Ml = Pm,
    Nd = Pd,
    Fd = Td,
    lr = $m,
    Im = (Id.exports = function (t, e) {
      var n, r, o, i, s;
      return (
        arguments.length < 2 || typeof t != "string" ? ((i = e), (e = t), (t = null)) : (i = arguments[2]),
        qr(t) ? ((n = lr.call(t, "c")), (r = lr.call(t, "e")), (o = lr.call(t, "w"))) : ((n = o = !0), (r = !1)),
        (s = { value: e, configurable: n, enumerable: r, writable: o }),
        i ? Nd(Fd(i), s) : s
      );
    });
  Im.gs = function (t, e, n) {
    var r, o, i, s;
    return (
      typeof t != "string" ? ((i = n), (n = e), (e = t), (t = null)) : (i = arguments[3]),
      qr(e)
        ? Ml(e)
          ? qr(n)
            ? Ml(n) || ((i = n), (n = void 0))
            : (n = void 0)
          : ((i = e), (e = n = void 0))
        : (e = void 0),
      qr(t) ? ((r = lr.call(t, "c")), (o = lr.call(t, "e"))) : ((r = !0), (o = !1)),
      (s = { get: e, set: n, configurable: r, enumerable: o }),
      i ? Nd(Fd(i), s) : s
    );
  };
  var mn = Id.exports,
    is = { exports: {} };
  (function (t, e) {
    var n = mn,
      r = Xe,
      o = Function.prototype.apply,
      i = Function.prototype.call,
      s = Object.create,
      a = Object.defineProperty,
      l = Object.defineProperties,
      c = Object.prototype.hasOwnProperty,
      u = { configurable: !0, enumerable: !1, writable: !0 },
      d,
      f,
      h,
      v,
      m,
      w,
      b;
    (d = function (_, x) {
      var S;
      return (
        r(x),
        c.call(this, "__ee__") ? (S = this.__ee__) : ((S = u.value = s(null)), a(this, "__ee__", u), (u.value = null)),
        S[_] ? (typeof S[_] == "object" ? S[_].push(x) : (S[_] = [S[_], x])) : (S[_] = x),
        this
      );
    }),
      (f = function (_, x) {
        var S, C;
        return (
          r(x),
          (C = this),
          d.call(
            this,
            _,
            (S = function () {
              h.call(C, _, S), o.call(x, this, arguments);
            }),
          ),
          (S.__eeOnceListener__ = x),
          this
        );
      }),
      (h = function (_, x) {
        var S, C, z, j;
        if ((r(x), !c.call(this, "__ee__"))) return this;
        if (((S = this.__ee__), !S[_])) return this;
        if (((C = S[_]), typeof C == "object"))
          for (j = 0; (z = C[j]); ++j)
            (z === x || z.__eeOnceListener__ === x) && (C.length === 2 ? (S[_] = C[j ? 0 : 1]) : C.splice(j, 1));
        else (C === x || C.__eeOnceListener__ === x) && delete S[_];
        return this;
      }),
      (v = function (_) {
        var x, S, C, z, j;
        if (c.call(this, "__ee__") && ((z = this.__ee__[_]), !!z))
          if (typeof z == "object") {
            for (S = arguments.length, j = new Array(S - 1), x = 1; x < S; ++x) j[x - 1] = arguments[x];
            for (z = z.slice(), x = 0; (C = z[x]); ++x) o.call(C, this, j);
          } else
            switch (arguments.length) {
              case 1:
                i.call(z, this);
                break;
              case 2:
                i.call(z, this, arguments[1]);
                break;
              case 3:
                i.call(z, this, arguments[1], arguments[2]);
                break;
              default:
                for (S = arguments.length, j = new Array(S - 1), x = 1; x < S; ++x) j[x - 1] = arguments[x];
                o.call(z, this, j);
            }
      }),
      (m = { on: d, once: f, off: h, emit: v }),
      (w = { on: n(d), once: n(f), off: n(h), emit: n(v) }),
      (b = l({}, w)),
      (t.exports = e =
        function (_) {
          return _ == null ? s(b) : l(Object(_), w);
        }),
      (e.methods = m);
  })(is, is.exports);
  var Mm = is.exports,
    Nl,
    Fl;
  function Nm() {
    return (
      Fl ||
        ((Fl = 1),
        (Nl = function () {
          var t = Array.from,
            e,
            n;
          return typeof t != "function" ? !1 : ((e = ["raz", "dwa"]), (n = t(e)), !!(n && n !== e && n[1] === "dwa"));
        })),
      Nl
    );
  }
  var Dl, Ll;
  function Fm() {
    return (
      Ll ||
        ((Ll = 1),
        (Dl = function () {
          return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
        })),
      Dl
    );
  }
  var ui, zl;
  function Dm() {
    if (zl) return ui;
    zl = 1;
    var t = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    return (
      (ui = (function () {
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
      ui
    );
  }
  var Ul, Bl;
  function ko() {
    return Bl || ((Bl = 1), (Ul = Fm()() ? globalThis : Dm())), Ul;
  }
  var fi, Vl;
  function Lm() {
    if (Vl) return fi;
    Vl = 1;
    var t = ko(),
      e = { object: !0, symbol: !0 };
    return (
      (fi = function () {
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
      fi
    );
  }
  var Hl, Kl;
  function zm() {
    return (
      Kl ||
        ((Kl = 1),
        (Hl = function (t) {
          return t
            ? typeof t == "symbol"
              ? !0
              : !t.constructor || t.constructor.name !== "Symbol"
                ? !1
                : t[t.constructor.toStringTag] === "Symbol"
            : !1;
        })),
      Hl
    );
  }
  var di, Wl;
  function Dd() {
    if (Wl) return di;
    Wl = 1;
    var t = zm();
    return (
      (di = function (e) {
        if (!t(e)) throw new TypeError(e + " is not a symbol");
        return e;
      }),
      di
    );
  }
  var hi, ql;
  function Um() {
    if (ql) return hi;
    ql = 1;
    var t = mn,
      e = Object.create,
      n = Object.defineProperty,
      r = Object.prototype,
      o = e(null);
    return (
      (hi = function (i) {
        for (var s = 0, a, l; o[i + (s || "")]; ) ++s;
        return (
          (i += s || ""),
          (o[i] = !0),
          (a = "@@" + i),
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
      hi
    );
  }
  var pi, Gl;
  function Bm() {
    if (Gl) return pi;
    Gl = 1;
    var t = mn,
      e = ko().Symbol;
    return (
      (pi = function (n) {
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
      pi
    );
  }
  var gi, Jl;
  function Vm() {
    if (Jl) return gi;
    Jl = 1;
    var t = mn,
      e = Dd(),
      n = Object.create(null);
    return (
      (gi = function (r) {
        return Object.defineProperties(r, {
          for: t(function (o) {
            return n[o] ? n[o] : (n[o] = r(String(o)));
          }),
          keyFor: t(function (o) {
            var i;
            e(o);
            for (i in n) if (n[i] === o) return i;
          }),
        });
      }),
      gi
    );
  }
  var vi, Zl;
  function Hm() {
    if (Zl) return vi;
    Zl = 1;
    var t = mn,
      e = Dd(),
      n = ko().Symbol,
      r = Um(),
      o = Bm(),
      i = Vm(),
      s = Object.create,
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
      (vi = c =
        function f(h) {
          var v;
          if (this instanceof f) throw new TypeError("Symbol is not a constructor");
          return d
            ? n(h)
            : ((v = s(u.prototype)),
              (h = h === void 0 ? "" : String(h)),
              a(v, { __description__: t("", h), __name__: t("", r(h)) }));
        }),
      o(c),
      i(c),
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
      vi
    );
  }
  var Yl, Ql;
  function Km() {
    return Ql || ((Ql = 1), (Yl = Lm()() ? ko().Symbol : Hm())), Yl;
  }
  var yi, Xl;
  function Wm() {
    if (Xl) return yi;
    Xl = 1;
    var t = Object.prototype.toString,
      e = t.call(
        (function () {
          return arguments;
        })(),
      );
    return (
      (yi = function (n) {
        return t.call(n) === e;
      }),
      yi
    );
  }
  var mi, tc;
  function qm() {
    if (tc) return mi;
    tc = 1;
    var t = Object.prototype.toString,
      e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    return (
      (mi = function (n) {
        return typeof n == "function" && e(t.call(n));
      }),
      mi
    );
  }
  var bi, ec;
  function Gm() {
    if (ec) return bi;
    ec = 1;
    var t = Object.prototype.toString,
      e = t.call("");
    return (
      (bi = function (n) {
        return typeof n == "string" || (n && typeof n == "object" && (n instanceof String || t.call(n) === e)) || !1;
      }),
      bi
    );
  }
  var _i, nc;
  function Jm() {
    if (nc) return _i;
    nc = 1;
    var t = Km().iterator,
      e = Wm(),
      n = qm(),
      r = vn,
      o = Xe,
      i = zn,
      s = gn,
      a = Gm(),
      l = Array.isArray,
      c = Function.prototype.call,
      u = { configurable: !0, enumerable: !0, writable: !0, value: null },
      d = Object.defineProperty;
    return (
      (_i = function (f) {
        var h = arguments[1],
          v = arguments[2],
          m,
          w,
          b,
          _,
          x,
          S,
          C,
          z,
          j,
          N;
        if (((f = Object(i(f))), s(h) && o(h), !this || this === Array || !n(this))) {
          if (!h) {
            if (e(f)) return (x = f.length), x !== 1 ? Array.apply(null, f) : ((_ = new Array(1)), (_[0] = f[0]), _);
            if (l(f)) {
              for (_ = new Array((x = f.length)), w = 0; w < x; ++w) _[w] = f[w];
              return _;
            }
          }
          _ = [];
        } else m = this;
        if (!l(f)) {
          if ((j = f[t]) !== void 0) {
            for (C = o(j).call(f), m && (_ = new m()), z = C.next(), w = 0; !z.done; )
              (N = h ? c.call(h, v, z.value, w) : z.value),
                m ? ((u.value = N), d(_, w, u)) : (_[w] = N),
                (z = C.next()),
                ++w;
            x = w;
          } else if (a(f)) {
            for (x = f.length, m && (_ = new m()), w = 0, b = 0; w < x; ++w)
              (N = f[w]),
                w + 1 < x && ((S = N.charCodeAt(0)), S >= 55296 && S <= 56319 && (N += f[++w])),
                (N = h ? c.call(h, v, N, b) : N),
                m ? ((u.value = N), d(_, b, u)) : (_[b] = N),
                ++b;
            x = b;
          }
        }
        if (x === void 0)
          for (x = r(f.length), m && (_ = new m(x)), w = 0; w < x; ++w)
            (N = h ? c.call(h, v, f[w], w) : f[w]), m ? ((u.value = N), d(_, w, u)) : (_[w] = N);
        return m && ((u.value = null), (_.length = x)), _;
      }),
      _i
    );
  }
  var rc, oc;
  function Ks() {
    return oc || ((oc = 1), (rc = Nm()() ? Array.from : Jm())), rc;
  }
  var Zm = Ks(),
    Ym = Array.isArray,
    Qm = function (t) {
      return Ym(t) ? t : Zm(t);
    },
    Xm = Qm,
    tb = gn,
    eb = Xe,
    nb = Array.prototype.slice,
    Ld;
  Ld = function (t) {
    return this.map(function (e, n) {
      return e ? e(t[n]) : t[n];
    }).concat(nb.call(t, this.length));
  };
  var rb = function (t) {
      return (
        (t = Xm(t)),
        t.forEach(function (e) {
          tb(e) && eb(e);
        }),
        Ld.bind(t)
      );
    },
    Nr = Xe,
    ob = function (t) {
      var e;
      return typeof t == "function"
        ? { set: t, get: t }
        : ((e = { get: Nr(t.get) }),
          t.set !== void 0
            ? ((e.set = Nr(t.set)), t.delete && (e.delete = Nr(t.delete)), t.clear && (e.clear = Nr(t.clear)), e)
            : ((e.set = e.get), e));
    },
    Fr = mm,
    Dr = $d,
    Jn = mn,
    zd = Mm.methods,
    ib = rb,
    sb = ob,
    wi = Function.prototype.apply,
    xi = Function.prototype.call,
    ic = Object.create,
    ab = Object.defineProperties,
    lb = zd.on,
    cb = zd.emit,
    ub = function (t, e, n) {
      var r = ic(null),
        o,
        i,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        v,
        m,
        w,
        b,
        _;
      return (
        e !== !1 ? (i = e) : isNaN(t.length) ? (i = 1) : (i = t.length),
        n.normalizer && ((h = sb(n.normalizer)), (s = h.get), (a = h.set), (l = h.delete), (c = h.clear)),
        n.resolvers != null && (_ = ib(n.resolvers)),
        s
          ? (b = Dr(function (x) {
              var S,
                C,
                z = arguments;
              if ((_ && (z = _(z)), (S = s(z)), S !== null && hasOwnProperty.call(r, S)))
                return v && o.emit("get", S, z, this), r[S];
              if ((z.length === 1 ? (C = xi.call(t, this, z[0])) : (C = wi.call(t, this, z)), S === null)) {
                if (((S = s(z)), S !== null)) throw Fr("Circular invocation", "CIRCULAR_INVOCATION");
                S = a(z);
              } else if (hasOwnProperty.call(r, S)) throw Fr("Circular invocation", "CIRCULAR_INVOCATION");
              return (r[S] = C), m && o.emit("set", S, null, C), C;
            }, i))
          : e === 0
            ? (b = function () {
                var x;
                if (hasOwnProperty.call(r, "data")) return v && o.emit("get", "data", arguments, this), r.data;
                if (
                  (arguments.length ? (x = wi.call(t, this, arguments)) : (x = xi.call(t, this)),
                  hasOwnProperty.call(r, "data"))
                )
                  throw Fr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r.data = x), m && o.emit("set", "data", null, x), x;
              })
            : (b = function (x) {
                var S,
                  C = arguments,
                  z;
                if ((_ && (C = _(arguments)), (z = String(C[0])), hasOwnProperty.call(r, z)))
                  return v && o.emit("get", z, C, this), r[z];
                if (
                  (C.length === 1 ? (S = xi.call(t, this, C[0])) : (S = wi.call(t, this, C)), hasOwnProperty.call(r, z))
                )
                  throw Fr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r[z] = S), m && o.emit("set", z, null, S), S;
              }),
        (o = {
          original: t,
          memoized: b,
          profileName: n.profileName,
          get: function (x) {
            return _ && (x = _(x)), s ? s(x) : String(x[0]);
          },
          has: function (x) {
            return hasOwnProperty.call(r, x);
          },
          delete: function (x) {
            var S;
            hasOwnProperty.call(r, x) && (l && l(x), (S = r[x]), delete r[x], w && o.emit("delete", x, S));
          },
          clear: function () {
            var x = r;
            c && c(), (r = ic(null)), o.emit("clear", x);
          },
          on: function (x, S) {
            return x === "get" ? (v = !0) : x === "set" ? (m = !0) : x === "delete" && (w = !0), lb.call(this, x, S);
          },
          emit: cb,
          updateEnv: function () {
            t = o.original;
          },
        }),
        s
          ? (u = Dr(function (x) {
              var S,
                C = arguments;
              _ && (C = _(C)), (S = s(C)), S !== null && o.delete(S);
            }, i))
          : e === 0
            ? (u = function () {
                return o.delete("data");
              })
            : (u = function (x) {
                return _ && (x = _(arguments)[0]), o.delete(x);
              }),
        (d = Dr(function () {
          var x,
            S = arguments;
          return e === 0 ? r.data : (_ && (S = _(S)), s ? (x = s(S)) : (x = String(S[0])), r[x]);
        })),
        (f = Dr(function () {
          var x,
            S = arguments;
          return e === 0
            ? o.has("data")
            : (_ && (S = _(S)), s ? (x = s(S)) : (x = String(S[0])), x === null ? !1 : o.has(x));
        })),
        ab(b, { __memoized__: Jn(!0), delete: Jn(u), clear: Jn(o.clear), _get: Jn(d), _has: Jn(f) }),
        o
      );
    },
    fb = Xe,
    db = Ro,
    sc = yn,
    hb = ub,
    pb = jd,
    gb = function t(e) {
      var n, r, o;
      if ((fb(e), (n = Object(arguments[1])), n.async && n.promise))
        throw new Error("Options 'async' and 'promise' cannot be used together");
      return hasOwnProperty.call(e, "__memoized__") && !n.force
        ? e
        : ((r = pb(n.length, e.length, n.async && sc.async)),
          (o = hb(e, r, n)),
          db(sc, function (i, s) {
            n[s] && i(n[s], o, n);
          }),
          t.__profiler__ && t.__profiler__(o),
          o.updateEnv(),
          o.memoized);
    },
    ac,
    lc;
  function vb() {
    return (
      lc ||
        ((lc = 1),
        (ac = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        })),
      ac
    );
  }
  var cc, uc;
  function yb() {
    return (
      uc ||
        ((uc = 1),
        (cc = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, o = t; --o; ) n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        })),
      cc
    );
  }
  var fc, dc;
  function mb() {
    return (
      dc ||
        ((dc = 1),
        (fc = function () {
          var t = Number.isNaN;
          return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
        })),
      fc
    );
  }
  var hc, pc;
  function bb() {
    return (
      pc ||
        ((pc = 1),
        (hc = function (t) {
          return t !== t;
        })),
      hc
    );
  }
  var gc, vc;
  function _b() {
    return vc || ((vc = 1), (gc = mb()() ? Number.isNaN : bb())), gc;
  }
  var Si, yc;
  function Ws() {
    if (yc) return Si;
    yc = 1;
    var t = _b(),
      e = vn,
      n = zn,
      r = Array.prototype.indexOf,
      o = Object.prototype.hasOwnProperty,
      i = Math.abs,
      s = Math.floor;
    return (
      (Si = function (a) {
        var l, c, u, d;
        if (!t(a)) return r.apply(this, arguments);
        for (
          c = e(n(this).length),
            u = arguments[1],
            isNaN(u) ? (u = 0) : u >= 0 ? (u = s(u)) : (u = e(this.length) - s(i(u))),
            l = u;
          l < c;
          ++l
        )
          if (o.call(this, l) && ((d = this[l]), t(d))) return l;
        return -1;
      }),
      Si
    );
  }
  var Ai, mc;
  function wb() {
    if (mc) return Ai;
    mc = 1;
    var t = Ws(),
      e = Object.create;
    return (
      (Ai = function () {
        var n = 0,
          r = [],
          o = e(null);
        return {
          get: function (i) {
            var s = 0,
              a = r,
              l,
              c = i.length;
            if (c === 0) return a[c] || null;
            if ((a = a[c])) {
              for (; s < c - 1; ) {
                if (((l = t.call(a[0], i[s])), l === -1)) return null;
                (a = a[1][l]), ++s;
              }
              return (l = t.call(a[0], i[s])), l === -1 ? null : a[1][l] || null;
            }
            return null;
          },
          set: function (i) {
            var s = 0,
              a = r,
              l,
              c = i.length;
            if (c === 0) a[c] = ++n;
            else {
              for (a[c] || (a[c] = [[], []]), a = a[c]; s < c - 1; )
                (l = t.call(a[0], i[s])),
                  l === -1 && ((l = a[0].push(i[s]) - 1), a[1].push([[], []])),
                  (a = a[1][l]),
                  ++s;
              (l = t.call(a[0], i[s])), l === -1 && (l = a[0].push(i[s]) - 1), (a[1][l] = ++n);
            }
            return (o[n] = i), n;
          },
          delete: function (i) {
            var s = 0,
              a = r,
              l,
              c = o[i],
              u = c.length,
              d = [];
            if (u === 0) delete a[u];
            else if ((a = a[u])) {
              for (; s < u - 1; ) {
                if (((l = t.call(a[0], c[s])), l === -1)) return;
                d.push(a, l), (a = a[1][l]), ++s;
              }
              if (((l = t.call(a[0], c[s])), l === -1)) return;
              for (i = a[1][l], a[0].splice(l, 1), a[1].splice(l, 1); !a[0].length && d.length; )
                (l = d.pop()), (a = d.pop()), a[0].splice(l, 1), a[1].splice(l, 1);
            }
            delete o[i];
          },
          clear: function () {
            (r = []), (o = e(null));
          },
        };
      }),
      Ai
    );
  }
  var Ei, bc;
  function xb() {
    if (bc) return Ei;
    bc = 1;
    var t = Ws();
    return (
      (Ei = function () {
        var e = 0,
          n = [],
          r = [];
        return {
          get: function (o) {
            var i = t.call(n, o[0]);
            return i === -1 ? null : r[i];
          },
          set: function (o) {
            return n.push(o[0]), r.push(++e), e;
          },
          delete: function (o) {
            var i = t.call(r, o);
            i !== -1 && (n.splice(i, 1), r.splice(i, 1));
          },
          clear: function () {
            (n = []), (r = []);
          },
        };
      }),
      Ei
    );
  }
  var Oi, _c;
  function Sb() {
    if (_c) return Oi;
    _c = 1;
    var t = Ws(),
      e = Object.create;
    return (
      (Oi = function (n) {
        var r = 0,
          o = [[], []],
          i = e(null);
        return {
          get: function (s) {
            for (var a = 0, l = o, c; a < n - 1; ) {
              if (((c = t.call(l[0], s[a])), c === -1)) return null;
              (l = l[1][c]), ++a;
            }
            return (c = t.call(l[0], s[a])), c === -1 ? null : l[1][c] || null;
          },
          set: function (s) {
            for (var a = 0, l = o, c; a < n - 1; )
              (c = t.call(l[0], s[a])),
                c === -1 && ((c = l[0].push(s[a]) - 1), l[1].push([[], []])),
                (l = l[1][c]),
                ++a;
            return (c = t.call(l[0], s[a])), c === -1 && (c = l[0].push(s[a]) - 1), (l[1][c] = ++r), (i[r] = s), r;
          },
          delete: function (s) {
            for (var a = 0, l = o, c, u = [], d = i[s]; a < n - 1; ) {
              if (((c = t.call(l[0], d[a])), c === -1)) return;
              u.push(l, c), (l = l[1][c]), ++a;
            }
            if (((c = t.call(l[0], d[a])), c !== -1)) {
              for (s = l[1][c], l[0].splice(c, 1), l[1].splice(c, 1); !l[0].length && u.length; )
                (c = u.pop()), (l = u.pop()), l[0].splice(c, 1), l[1].splice(c, 1);
              delete i[s];
            }
          },
          clear: function () {
            (o = [[], []]), (i = e(null));
          },
        };
      }),
      Oi
    );
  }
  var wc = {},
    Ti,
    xc;
  function Ud() {
    if (xc) return Ti;
    xc = 1;
    var t = Xe,
      e = Ro,
      n = Function.prototype.call;
    return (
      (Ti = function (r, o) {
        var i = {},
          s = arguments[2];
        return (
          t(o),
          e(r, function (a, l, c, u) {
            i[l] = n.call(o, s, a, l, c, u);
          }),
          i
        );
      }),
      Ti
    );
  }
  var ji, Sc;
  function qs() {
    if (Sc) return ji;
    Sc = 1;
    var t = function (n) {
        if (typeof n != "function") throw new TypeError(n + " is not a function");
        return n;
      },
      e = function (n) {
        var r = document.createTextNode(""),
          o,
          i,
          s = 0;
        return (
          new n(function () {
            var a;
            if (o) i && (o = i.concat(o));
            else {
              if (!i) return;
              o = i;
            }
            if (((i = o), (o = null), typeof i == "function")) {
              (a = i), (i = null), a();
              return;
            }
            for (r.data = s = ++s % 2; i; ) (a = i.shift()), i.length || (i = null), a();
          }).observe(r, { characterData: !0 }),
          function (a) {
            if ((t(a), o)) {
              typeof o == "function" ? (o = [o, a]) : o.push(a);
              return;
            }
            (o = a), (r.data = s = ++s % 2);
          }
        );
      };
    return (
      (ji = (function () {
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
      ji
    );
  }
  var Ac;
  function Ab() {
    if (Ac) return wc;
    Ac = 1;
    var t = Ks(),
      e = Ud(),
      n = Rd(),
      r = $d,
      o = qs(),
      i = Array.prototype.slice,
      s = Function.prototype.apply,
      a = Object.create;
    return (
      (yn.async = function (l, c) {
        var u = a(null),
          d = a(null),
          f = c.memoized,
          h = c.original,
          v,
          m,
          w;
        c.memoized = r(function (b) {
          var _ = arguments,
            x = _[_.length - 1];
          return typeof x == "function" && ((v = x), (_ = i.call(_, 0, -1))), f.apply((m = this), (w = _));
        }, f);
        try {
          n(c.memoized, f);
        } catch {}
        c.on("get", function (b) {
          var _, x, S;
          if (v) {
            if (u[b]) {
              typeof u[b] == "function" ? (u[b] = [u[b], v]) : u[b].push(v), (v = null);
              return;
            }
            (_ = v),
              (x = m),
              (S = w),
              (v = m = w = null),
              o(function () {
                var C;
                hasOwnProperty.call(d, b)
                  ? ((C = d[b]), c.emit("getasync", b, S, x), s.call(_, C.context, C.args))
                  : ((v = _), (m = x), (w = S), f.apply(x, S));
              });
          }
        }),
          (c.original = function () {
            var b, _, x, S;
            return v
              ? ((b = t(arguments)),
                (_ = function C(z) {
                  var j,
                    N,
                    J = C.id;
                  if (J == null) {
                    o(s.bind(C, this, arguments));
                    return;
                  }
                  if ((delete C.id, (j = u[J]), delete u[J], !!j))
                    return (
                      (N = t(arguments)),
                      c.has(J) &&
                        (z
                          ? c.delete(J)
                          : ((d[J] = { context: this, args: N }),
                            c.emit("setasync", J, typeof j == "function" ? 1 : j.length))),
                      typeof j == "function"
                        ? (S = s.call(j, this, N))
                        : j.forEach(function (I) {
                            S = s.call(I, this, N);
                          }, this),
                      S
                    );
                }),
                (x = v),
                (v = m = w = null),
                b.push(_),
                (S = s.call(h, this, b)),
                (_.cb = x),
                (v = _),
                S)
              : s.call(h, this, arguments);
          }),
          c.on("set", function (b) {
            if (!v) {
              c.delete(b);
              return;
            }
            u[b] ? (typeof u[b] == "function" ? (u[b] = [u[b], v.cb]) : u[b].push(v.cb)) : (u[b] = v.cb),
              delete v.cb,
              (v.id = b),
              (v = null);
          }),
          c.on("delete", function (b) {
            var _;
            hasOwnProperty.call(u, b) ||
              (d[b] && ((_ = d[b]), delete d[b], c.emit("deleteasync", b, i.call(_.args, 1))));
          }),
          c.on("clear", function () {
            var b = d;
            (d = a(null)),
              c.emit(
                "clearasync",
                e(b, function (_) {
                  return i.call(_.args, 1);
                }),
              );
          });
      }),
      wc
    );
  }
  var Ec = {},
    Ci,
    Oc;
  function Eb() {
    if (Oc) return Ci;
    Oc = 1;
    var t = Array.prototype.forEach,
      e = Object.create;
    return (
      (Ci = function (n) {
        var r = e(null);
        return (
          t.call(arguments, function (o) {
            r[o] = !0;
          }),
          r
        );
      }),
      Ci
    );
  }
  var Tc, jc;
  function Bd() {
    return (
      jc ||
        ((jc = 1),
        (Tc = function (t) {
          return typeof t == "function";
        })),
      Tc
    );
  }
  var Pi, Cc;
  function Ob() {
    if (Cc) return Pi;
    Cc = 1;
    var t = Bd();
    return (
      (Pi = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          throw new TypeError("Passed argument cannot be stringifed");
        }
      }),
      Pi
    );
  }
  var Ri, Pc;
  function Tb() {
    if (Pc) return Ri;
    Pc = 1;
    var t = zn,
      e = Ob();
    return (
      (Ri = function (n) {
        return e(t(n));
      }),
      Ri
    );
  }
  var ki, Rc;
  function jb() {
    if (Rc) return ki;
    Rc = 1;
    var t = Bd();
    return (
      (ki = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          return "<Non-coercible to string value>";
        }
      }),
      ki
    );
  }
  var $i, kc;
  function Cb() {
    if (kc) return $i;
    kc = 1;
    var t = jb(),
      e = /[\n\r\u2028\u2029]/g;
    return (
      ($i = function (n) {
        var r = t(n);
        return (
          r.length > 100 && (r = r.slice(0, 99) + "…"),
          (r = r.replace(e, function (o) {
            return JSON.stringify(o).slice(1, -1);
          })),
          r
        );
      }),
      $i
    );
  }
  var Lr = { exports: {} },
    $c;
  function Vd() {
    if ($c) return Lr.exports;
    ($c = 1), (Lr.exports = t), (Lr.exports.default = t);
    function t(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
    }
    return Lr.exports;
  }
  var Ic;
  function Pb() {
    if (Ic) return Ec;
    Ic = 1;
    var t = Ud(),
      e = Eb(),
      n = Tb(),
      r = Cb(),
      o = Vd(),
      i = qs(),
      s = Object.create,
      a = e("then", "then:finally", "done", "done:finally");
    return (
      (yn.promise = function (l, c) {
        var u = s(null),
          d = s(null),
          f = s(null);
        if (l === !0) l = null;
        else if (((l = n(l)), !a[l])) throw new TypeError("'" + r(l) + "' is not valid promise mode");
        c.on("set", function (h, v, m) {
          var w = !1;
          if (!o(m)) {
            (d[h] = m), c.emit("setasync", h, 1);
            return;
          }
          (u[h] = 1), (f[h] = m);
          var b = function (C) {
              var z = u[h];
              if (w)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              z && (delete u[h], (d[h] = C), c.emit("setasync", h, z));
            },
            _ = function () {
              (w = !0), u[h] && (delete u[h], delete f[h], c.delete(h));
            },
            x = l;
          if ((x || (x = "then"), x === "then")) {
            var S = function () {
              i(_);
            };
            (m = m.then(function (C) {
              i(b.bind(this, C));
            }, S)),
              typeof m.finally == "function" && m.finally(S);
          } else if (x === "done") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            m.done(b, _);
          } else if (x === "done:finally") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            if (typeof m.finally != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            m.done(b), m.finally(_);
          }
        }),
          c.on("get", function (h, v, m) {
            var w;
            if (u[h]) {
              ++u[h];
              return;
            }
            w = f[h];
            var b = function () {
              c.emit("getasync", h, v, m);
            };
            o(w)
              ? typeof w.done == "function"
                ? w.done(b)
                : w.then(function () {
                    i(b);
                  })
              : b();
          }),
          c.on("delete", function (h) {
            if ((delete f[h], u[h])) {
              delete u[h];
              return;
            }
            if (hasOwnProperty.call(d, h)) {
              var v = d[h];
              delete d[h], c.emit("deleteasync", h, [v]);
            }
          }),
          c.on("clear", function () {
            var h = d;
            (d = s(null)),
              (u = s(null)),
              (f = s(null)),
              c.emit(
                "clearasync",
                t(h, function (v) {
                  return [v];
                }),
              );
          });
      }),
      Ec
    );
  }
  var Mc = {},
    Nc;
  function Rb() {
    if (Nc) return Mc;
    Nc = 1;
    var t = Xe,
      e = Ro,
      n = yn,
      r = Function.prototype.apply;
    return (
      (n.dispose = function (o, i, s) {
        var a;
        if ((t(o), (s.async && n.async) || (s.promise && n.promise))) {
          i.on(
            "deleteasync",
            (a = function (l, c) {
              r.call(o, null, c);
            }),
          ),
            i.on("clearasync", function (l) {
              e(l, function (c, u) {
                a(u, c);
              });
            });
          return;
        }
        i.on(
          "delete",
          (a = function (l, c) {
            o(c);
          }),
        ),
          i.on("clear", function (l) {
            e(l, function (c, u) {
              a(u, c);
            });
          });
      }),
      Mc
    );
  }
  var Fc = {},
    Dc,
    Lc;
  function kb() {
    return Lc || ((Lc = 1), (Dc = 2147483647)), Dc;
  }
  var Ii, zc;
  function $b() {
    if (zc) return Ii;
    zc = 1;
    var t = vn,
      e = kb();
    return (
      (Ii = function (n) {
        if (((n = t(n)), n > e)) throw new TypeError(n + " exceeds maximum possible timeout");
        return n;
      }),
      Ii
    );
  }
  var Uc;
  function Ib() {
    if (Uc) return Fc;
    Uc = 1;
    var t = Ks(),
      e = Ro,
      n = qs(),
      r = Vd(),
      o = $b(),
      i = yn,
      s = Function.prototype,
      a = Math.max,
      l = Math.min,
      c = Object.create;
    return (
      (i.maxAge = function (u, d, f) {
        var h, v, m, w;
        (u = o(u)),
          u &&
            ((h = c(null)),
            (v = (f.async && i.async) || (f.promise && i.promise) ? "async" : ""),
            d.on("set" + v, function (b) {
              (h[b] = setTimeout(function () {
                d.delete(b);
              }, u)),
                typeof h[b].unref == "function" && h[b].unref(),
                w &&
                  (w[b] && w[b] !== "nextTick" && clearTimeout(w[b]),
                  (w[b] = setTimeout(function () {
                    delete w[b];
                  }, m)),
                  typeof w[b].unref == "function" && w[b].unref());
            }),
            d.on("delete" + v, function (b) {
              clearTimeout(h[b]), delete h[b], w && (w[b] !== "nextTick" && clearTimeout(w[b]), delete w[b]);
            }),
            f.preFetch &&
              (f.preFetch === !0 || isNaN(f.preFetch) ? (m = 0.333) : (m = a(l(Number(f.preFetch), 1), 0)),
              m &&
                ((w = {}),
                (m = (1 - m) * u),
                d.on("get" + v, function (b, _, x) {
                  w[b] ||
                    ((w[b] = "nextTick"),
                    n(function () {
                      var S;
                      w[b] === "nextTick" &&
                        (delete w[b],
                        d.delete(b),
                        f.async && ((_ = t(_)), _.push(s)),
                        (S = d.memoized.apply(x, _)),
                        f.promise && r(S) && (typeof S.done == "function" ? S.done(s, s) : S.then(s, s)));
                    }));
                }))),
            d.on("clear" + v, function () {
              e(h, function (b) {
                clearTimeout(b);
              }),
                (h = {}),
                w &&
                  (e(w, function (b) {
                    b !== "nextTick" && clearTimeout(b);
                  }),
                  (w = {}));
            }));
      }),
      Fc
    );
  }
  var Bc = {},
    Mi,
    Vc;
  function Mb() {
    if (Vc) return Mi;
    Vc = 1;
    var t = vn,
      e = Object.create,
      n = Object.prototype.hasOwnProperty;
    return (
      (Mi = function (r) {
        var o = 0,
          i = 1,
          s = e(null),
          a = e(null),
          l = 0,
          c;
        return (
          (r = t(r)),
          {
            hit: function (u) {
              var d = a[u],
                f = ++l;
              if (((s[f] = u), (a[u] = f), !d)) return ++o, o <= r ? void 0 : ((u = s[i]), c(u), u);
              if ((delete s[d], i === d)) for (; !n.call(s, ++i); );
            },
            delete: (c = function (u) {
              var d = a[u];
              if (d && (delete s[d], delete a[u], --o, i === d)) {
                if (!o) {
                  (l = 0), (i = 1);
                  return;
                }
                for (; !n.call(s, ++i); );
              }
            }),
            clear: function () {
              (o = 0), (i = 1), (s = e(null)), (a = e(null)), (l = 0);
            },
          }
        );
      }),
      Mi
    );
  }
  var Hc;
  function Nb() {
    if (Hc) return Bc;
    Hc = 1;
    var t = vn,
      e = Mb(),
      n = yn;
    return (
      (n.max = function (r, o, i) {
        var s, a, l;
        (r = t(r)),
          r &&
            ((a = e(r)),
            (s = (i.async && n.async) || (i.promise && n.promise) ? "async" : ""),
            o.on(
              "set" + s,
              (l = function (c) {
                (c = a.hit(c)), c !== void 0 && o.delete(c);
              }),
            ),
            o.on("get" + s, l),
            o.on("delete" + s, a.delete),
            o.on("clear" + s, a.clear));
      }),
      Bc
    );
  }
  var Kc = {},
    Wc;
  function Fb() {
    if (Wc) return Kc;
    Wc = 1;
    var t = mn,
      e = yn,
      n = Object.create,
      r = Object.defineProperties;
    return (
      (e.refCounter = function (o, i, s) {
        var a, l;
        (a = n(null)),
          (l = (s.async && e.async) || (s.promise && e.promise) ? "async" : ""),
          i.on("set" + l, function (c, u) {
            a[c] = u || 1;
          }),
          i.on("get" + l, function (c) {
            ++a[c];
          }),
          i.on("delete" + l, function (c) {
            delete a[c];
          }),
          i.on("clear" + l, function () {
            a = {};
          }),
          r(i.memoized, {
            deleteRef: t(function () {
              var c = i.get(arguments);
              return c === null || !a[c] ? null : --a[c] ? !1 : (i.delete(c), !0);
            }),
            getRefCount: t(function () {
              var c = i.get(arguments);
              return c === null || !a[c] ? 0 : a[c];
            }),
          });
      }),
      Kc
    );
  }
  var Db = Td,
    Lb = jd,
    zb = gb,
    Ub = function (t) {
      var e = Db(arguments[1]),
        n;
      return (
        e.normalizer ||
          ((n = e.length = Lb(e.length, t.length, e.async)),
          n !== 0 &&
            (e.primitive
              ? n === !1
                ? (e.normalizer = vb())
                : n > 1 && (e.normalizer = yb()(n))
              : n === !1
                ? (e.normalizer = wb()())
                : n === 1
                  ? (e.normalizer = xb()())
                  : (e.normalizer = Sb()(n)))),
        e.async && Ab(),
        e.promise && Pb(),
        e.dispose && Rb(),
        e.maxAge && Ib(),
        e.max && Nb(),
        e.refCounter && Fb(),
        zb(t, e)
      );
    };
  const $o = zy(Ub),
    Bb = (t) => {
      if (!t) return [];
      const { border: e, background: n, borderActive: r, backgroundActive: o } = t;
      return [
        `--annotation-bg-color: ${n}`,
        `--annotation-border-color: ${e}`,
        `--annotation-bg-color--active: ${o}`,
        `--annotation-border-color--active: ${r}`,
      ];
    },
    Vb = $o(Bb),
    Hb = { key: 0, class: "annotation-slot annotation-slot--before" },
    Kb = { key: 1 },
    Wb = { key: 2, class: "text" },
    qb = { key: 3, class: "annotation-slot annotation-slot--after" },
    Hd = Dt({
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
          i = e,
          s = (f, h, v) => {
            c(f, { startOffset: h, annotation: r.value, action: v });
          },
          a = (f, h, v) => {
            u(f, { startOffset: h, annotation: r.value, action: v });
          },
          l = (f, h) => {
            d(f, { startOffset: h, annotation: r.value });
          },
          c = (f, h) => {
            i("annotation-click", f, h);
          },
          u = (f, h) => {
            i("annotation-double-click", f, h);
          },
          d = (f, h) => {
            i("annotation-mouse-move", f, h);
          };
        return (f, h) => {
          var v, m, w, b;
          return (
            L(),
            K(
              ut,
              null,
              [
                f.start === ((v = r.value) == null ? void 0 : v.start)
                  ? (L(), K("span", Hb, [ke(f.$slots, "annotation-before", { annotation: r.value })]))
                  : $t("", !0),
                f.annotations.length
                  ? (L(),
                    K(
                      "span",
                      {
                        key: 1,
                        class: Nt(n.annotationClassHandler(r.value, f.start, f.end, n.allowCreate)),
                        style: Ze(G(Vb)(r.value.color)),
                        onMousedown: h[2] || (h[2] = Ir((_) => s(_, f.wordPartStart, "move"), ["stop"])),
                        onMousemove: h[3] || (h[3] = Ir((_) => l(_, f.wordPartStart), ["stop"])),
                        onDblclick: h[4] || (h[4] = (_) => a(_, f.wordPartStart)),
                      },
                      [
                        o.value && f.start === ((m = r.value) == null ? void 0 : m.start)
                          ? (L(),
                            K(
                              "span",
                              {
                                key: 0,
                                class: "handle handle--start",
                                onMousedown: h[0] || (h[0] = Ir((_) => s(_, f.wordPartStart, "moveStart"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : $t("", !0),
                        st(
                          Hd,
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
                            "annotation-before": Ie((_) => [
                              ke(f.$slots, "annotation-before", { annotation: _.annotation }),
                            ]),
                            "annotation-after": Ie((_) => [
                              ke(f.$slots, "annotation-after", { annotation: _.annotation }),
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
                        f.annotations[0].label ? (L(), K("label", Kb, bt(f.annotations[0].label), 1)) : $t("", !0),
                        o.value && f.end === ((w = f.annotations[0]) == null ? void 0 : w.end)
                          ? (L(),
                            K(
                              "span",
                              {
                                key: 2,
                                class: "handle handle--end",
                                onMousedown: h[1] || (h[1] = Ir((_) => s(_, f.wordPartStart, "moveEnd"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : $t("", !0),
                      ],
                      38,
                    ))
                  : (L(), K("span", Wb, bt(f.text), 1)),
                f.end === ((b = r.value) == null ? void 0 : b.end)
                  ? (L(), K("span", qb, [ke(f.$slots, "annotation-after", { annotation: r.value })]))
                  : $t("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    Gb = Dt({
      __name: "TextOnly",
      props: { wordPart: {}, allowCreate: { type: Boolean, default: !1 } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = e,
          r = (i, s) => {
            n("annotation-click", i, { startOffset: s == null ? void 0 : s.start });
          },
          o = (i, s) => {
            n("annotation-double-click", i, { startOffset: s == null ? void 0 : s.start });
          };
        return (i, s) => (
          L(),
          K(
            "span",
            {
              class: Nt({ text: !0, "create-anno-text": i.allowCreate }),
              onDblclick: s[0] || (s[0] = (a) => o(a, i.wordPart)),
              onMousedown: s[1] || (s[1] = (a) => r(a, i.wordPart)),
            },
            bt(i.wordPart.text),
            35,
          )
        );
      },
    }),
    Jb = ["onMousemove"],
    Zb = { class: "text" },
    Yb = ["onMousedown", "onMousemove", "onDblclick"],
    Qb = { key: 0 },
    Xb = Dt({
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
        function i(h) {
          return h.sort((v, m) => m.weight - v.weight);
        }
        const s = e,
          a = (h, v, m, w) => {
            u(h, { startOffset: v == null ? void 0 : v.start, annotation: m, action: w });
          },
          l = (h, v, m, w) => {
            d(h, { startOffset: v == null ? void 0 : v.start, annotation: m, action: w });
          },
          c = (h, v, m) => {
            f(h, { startOffset: v == null ? void 0 : v.start, annotation: m });
          },
          u = (h, v) => {
            s("annotation-click", h, v);
          },
          d = (h, v) => {
            s("annotation-double-click", h, v);
          },
          f = (h, v) => {
            s("annotation-mouse-move", h, v);
          };
        return (h, v) => (
          L(!0),
          K(
            ut,
            null,
            Qt(
              h.line.words,
              (m) => (
                L(),
                K("span", { key: m.text, class: "token" }, [
                  (L(!0),
                  K(
                    ut,
                    null,
                    Qt(
                      m.parts,
                      (w) => (
                        L(),
                        K(
                          "span",
                          {
                            key: w.text,
                            class: Nt(["token-segment", `token-segment--m${w.maxAnnotationWeight}`]),
                            onMousemove: (b) => c(b, w),
                          },
                          [
                            o.value
                              ? (L(),
                                K(
                                  ut,
                                  { key: 0 },
                                  [
                                    $("span", Zb, bt(w.text), 1),
                                    (L(!0),
                                    K(
                                      ut,
                                      null,
                                      Qt(
                                        w.annotations,
                                        (b) => (
                                          L(),
                                          K(
                                            "span",
                                            {
                                              key: b.id,
                                              class: Nt(h.annotationClasses(b, w.start, w.end, n.allowCreate)),
                                              style: Ze(n.annotationStyle(b.color)),
                                              onMousedown: (_) => a(_, w, b, "move"),
                                              onMousemove: (_) => c(_, w, b),
                                              onDblclick: (_) => l(_, w, b),
                                            },
                                            [b.label ? (L(), K("label", Qb, bt(b.label), 1)) : $t("", !0)],
                                            46,
                                            Yb,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  64,
                                ))
                              : $t("", !0),
                            r.value
                              ? (L(),
                                K(
                                  ut,
                                  { key: 1 },
                                  [
                                    w.annotations.length
                                      ? (L(),
                                        $n(
                                          Hd,
                                          {
                                            key: 0,
                                            text: w.text,
                                            start: w.start,
                                            end: w.end,
                                            "allow-edit": h.allowEdit,
                                            "allow-create": h.allowCreate,
                                            "word-part-start": w.start,
                                            annotations: i(w.annotations),
                                            "annotation-class-handler": h.annotationClasses,
                                            onAnnotationClick: u,
                                            onAnnotationDoubleClick: d,
                                            onAnnotationMouseMove: f,
                                          },
                                          {
                                            "annotation-before": Ie((b) => [
                                              ke(h.$slots, "annotation-before", { annotation: b.annotation }),
                                            ]),
                                            "annotation-after": Ie((b) => [
                                              ke(h.$slots, "annotation-after", { annotation: b.annotation }),
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
                                      : (L(),
                                        $n(
                                          Gb,
                                          {
                                            key: 1,
                                            "word-part": w,
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
                              : $t("", !0),
                          ],
                          42,
                          Jb,
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
  var t_ = typeof global == "object" && global && global.Object === Object && global;
  const Kd = t_;
  var e_ = typeof self == "object" && self && self.Object === Object && self,
    n_ = Kd || e_ || Function("return this")();
  const Se = n_;
  var r_ = Se.Symbol;
  const le = r_;
  var Wd = Object.prototype,
    o_ = Wd.hasOwnProperty,
    i_ = Wd.toString,
    Zn = le ? le.toStringTag : void 0;
  function s_(t) {
    var e = o_.call(t, Zn),
      n = t[Zn];
    try {
      t[Zn] = void 0;
      var r = !0;
    } catch {}
    var o = i_.call(t);
    return r && (e ? (t[Zn] = n) : delete t[Zn]), o;
  }
  var a_ = Object.prototype,
    l_ = a_.toString;
  function c_(t) {
    return l_.call(t);
  }
  var u_ = "[object Null]",
    f_ = "[object Undefined]",
    qc = le ? le.toStringTag : void 0;
  function Un(t) {
    return t == null ? (t === void 0 ? f_ : u_) : qc && qc in Object(t) ? s_(t) : c_(t);
  }
  function Ge(t) {
    return t != null && typeof t == "object";
  }
  var d_ = "[object Symbol]";
  function Io(t) {
    return typeof t == "symbol" || (Ge(t) && Un(t) == d_);
  }
  function h_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var p_ = Array.isArray;
  const de = p_;
  var g_ = 1 / 0,
    Gc = le ? le.prototype : void 0,
    Jc = Gc ? Gc.toString : void 0;
  function qd(t) {
    if (typeof t == "string") return t;
    if (de(t)) return h_(t, qd) + "";
    if (Io(t)) return Jc ? Jc.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -g_ ? "-0" : e;
  }
  function fn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function Gd(t) {
    return t;
  }
  var v_ = "[object AsyncFunction]",
    y_ = "[object Function]",
    m_ = "[object GeneratorFunction]",
    b_ = "[object Proxy]";
  function Jd(t) {
    if (!fn(t)) return !1;
    var e = Un(t);
    return e == y_ || e == m_ || e == v_ || e == b_;
  }
  var __ = Se["__core-js_shared__"];
  const Ni = __;
  var Zc = (function () {
    var t = /[^.]+$/.exec((Ni && Ni.keys && Ni.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function w_(t) {
    return !!Zc && Zc in t;
  }
  var x_ = Function.prototype,
    S_ = x_.toString;
  function bn(t) {
    if (t != null) {
      try {
        return S_.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var A_ = /[\\^$.*+?()[\]{}|]/g,
    E_ = /^\[object .+?Constructor\]$/,
    O_ = Function.prototype,
    T_ = Object.prototype,
    j_ = O_.toString,
    C_ = T_.hasOwnProperty,
    P_ = RegExp(
      "^" +
        j_
          .call(C_)
          .replace(A_, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function R_(t) {
    if (!fn(t) || w_(t)) return !1;
    var e = Jd(t) ? P_ : E_;
    return e.test(bn(t));
  }
  function k_(t, e) {
    return t == null ? void 0 : t[e];
  }
  function _n(t, e) {
    var n = k_(t, e);
    return R_(n) ? n : void 0;
  }
  var $_ = _n(Se, "WeakMap");
  const ss = $_;
  var Yc = Object.create,
    I_ = (function () {
      function t() {}
      return function (e) {
        if (!fn(e)) return {};
        if (Yc) return Yc(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  const M_ = I_;
  function N_(t, e, n) {
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
  var F_ = 800,
    D_ = 16,
    L_ = Date.now;
  function z_(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = L_(),
        o = D_ - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= F_) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function U_(t) {
    return function () {
      return t;
    };
  }
  var B_ = (function () {
    try {
      var t = _n(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {}
  })();
  const oo = B_;
  var V_ = oo
    ? function (t, e) {
        return oo(t, "toString", { configurable: !0, enumerable: !1, value: U_(e), writable: !0 });
      }
    : Gd;
  const H_ = V_;
  var K_ = z_(H_);
  const W_ = K_;
  function q_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var G_ = 9007199254740991,
    J_ = /^(?:0|[1-9]\d*)$/;
  function Gs(t, e) {
    var n = typeof t;
    return (e = e ?? G_), !!e && (n == "number" || (n != "symbol" && J_.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function Z_(t, e, n) {
    e == "__proto__" && oo ? oo(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function Js(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var Y_ = Object.prototype,
    Q_ = Y_.hasOwnProperty;
  function Zd(t, e, n) {
    var r = t[e];
    (!(Q_.call(t, e) && Js(r, n)) || (n === void 0 && !(e in t))) && Z_(t, e, n);
  }
  var Qc = Math.max;
  function X_(t, e, n) {
    return (
      (e = Qc(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, i = Qc(r.length - e, 0), s = Array(i); ++o < i; ) s[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(s)), N_(t, this, a);
      }
    );
  }
  var t0 = 9007199254740991;
  function Zs(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= t0;
  }
  function e0(t) {
    return t != null && Zs(t.length) && !Jd(t);
  }
  var n0 = Object.prototype;
  function Yd(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || n0;
    return t === n;
  }
  function r0(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var o0 = "[object Arguments]";
  function Xc(t) {
    return Ge(t) && Un(t) == o0;
  }
  var Qd = Object.prototype,
    i0 = Qd.hasOwnProperty,
    s0 = Qd.propertyIsEnumerable,
    a0 = Xc(
      (function () {
        return arguments;
      })(),
    )
      ? Xc
      : function (t) {
          return Ge(t) && i0.call(t, "callee") && !s0.call(t, "callee");
        };
  const Ys = a0;
  function l0() {
    return !1;
  }
  var Xd = typeof jt == "object" && jt && !jt.nodeType && jt,
    tu = Xd && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    c0 = tu && tu.exports === Xd,
    eu = c0 ? Se.Buffer : void 0,
    u0 = eu ? eu.isBuffer : void 0,
    f0 = u0 || l0;
  const io = f0;
  var d0 = "[object Arguments]",
    h0 = "[object Array]",
    p0 = "[object Boolean]",
    g0 = "[object Date]",
    v0 = "[object Error]",
    y0 = "[object Function]",
    m0 = "[object Map]",
    b0 = "[object Number]",
    _0 = "[object Object]",
    w0 = "[object RegExp]",
    x0 = "[object Set]",
    S0 = "[object String]",
    A0 = "[object WeakMap]",
    E0 = "[object ArrayBuffer]",
    O0 = "[object DataView]",
    T0 = "[object Float32Array]",
    j0 = "[object Float64Array]",
    C0 = "[object Int8Array]",
    P0 = "[object Int16Array]",
    R0 = "[object Int32Array]",
    k0 = "[object Uint8Array]",
    $0 = "[object Uint8ClampedArray]",
    I0 = "[object Uint16Array]",
    M0 = "[object Uint32Array]",
    Ot = {};
  Ot[T0] = Ot[j0] = Ot[C0] = Ot[P0] = Ot[R0] = Ot[k0] = Ot[$0] = Ot[I0] = Ot[M0] = !0;
  Ot[d0] =
    Ot[h0] =
    Ot[E0] =
    Ot[p0] =
    Ot[O0] =
    Ot[g0] =
    Ot[v0] =
    Ot[y0] =
    Ot[m0] =
    Ot[b0] =
    Ot[_0] =
    Ot[w0] =
    Ot[x0] =
    Ot[S0] =
    Ot[A0] =
      !1;
  function N0(t) {
    return Ge(t) && Zs(t.length) && !!Ot[Un(t)];
  }
  function Qs(t) {
    return function (e) {
      return t(e);
    };
  }
  var th = typeof jt == "object" && jt && !jt.nodeType && jt,
    cr = th && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    F0 = cr && cr.exports === th,
    Fi = F0 && Kd.process,
    D0 = (function () {
      try {
        var t = cr && cr.require && cr.require("util").types;
        return t || (Fi && Fi.binding && Fi.binding("util"));
      } catch {}
    })();
  const Fn = D0;
  var nu = Fn && Fn.isTypedArray,
    L0 = nu ? Qs(nu) : N0;
  const eh = L0;
  var z0 = Object.prototype,
    U0 = z0.hasOwnProperty;
  function B0(t, e) {
    var n = de(t),
      r = !n && Ys(t),
      o = !n && !r && io(t),
      i = !n && !r && !o && eh(t),
      s = n || r || o || i,
      a = s ? r0(t.length, String) : [],
      l = a.length;
    for (var c in t)
      U0.call(t, c) &&
        !(
          s &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            Gs(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function nh(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var V0 = nh(Object.keys, Object);
  const H0 = V0;
  var K0 = Object.prototype,
    W0 = K0.hasOwnProperty;
  function q0(t) {
    if (!Yd(t)) return H0(t);
    var e = [];
    for (var n in Object(t)) W0.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function rh(t) {
    return e0(t) ? B0(t) : q0(t);
  }
  var G0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    J0 = /^\w*$/;
  function Xs(t, e) {
    if (de(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || Io(t)
      ? !0
      : J0.test(t) || !G0.test(t) || (e != null && t in Object(e));
  }
  var Z0 = _n(Object, "create");
  const mr = Z0;
  function Y0() {
    (this.__data__ = mr ? mr(null) : {}), (this.size = 0);
  }
  function Q0(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var X0 = "__lodash_hash_undefined__",
    t1 = Object.prototype,
    e1 = t1.hasOwnProperty;
  function n1(t) {
    var e = this.__data__;
    if (mr) {
      var n = e[t];
      return n === X0 ? void 0 : n;
    }
    return e1.call(e, t) ? e[t] : void 0;
  }
  var r1 = Object.prototype,
    o1 = r1.hasOwnProperty;
  function i1(t) {
    var e = this.__data__;
    return mr ? e[t] !== void 0 : o1.call(e, t);
  }
  var s1 = "__lodash_hash_undefined__";
  function a1(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = mr && e === void 0 ? s1 : e), this;
  }
  function dn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  dn.prototype.clear = Y0;
  dn.prototype.delete = Q0;
  dn.prototype.get = n1;
  dn.prototype.has = i1;
  dn.prototype.set = a1;
  function l1() {
    (this.__data__ = []), (this.size = 0);
  }
  function Mo(t, e) {
    for (var n = t.length; n--; ) if (Js(t[n][0], e)) return n;
    return -1;
  }
  var c1 = Array.prototype,
    u1 = c1.splice;
  function f1(t) {
    var e = this.__data__,
      n = Mo(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : u1.call(e, n, 1), --this.size, !0;
  }
  function d1(t) {
    var e = this.__data__,
      n = Mo(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function h1(t) {
    return Mo(this.__data__, t) > -1;
  }
  function p1(t, e) {
    var n = this.__data__,
      r = Mo(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function Ne(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Ne.prototype.clear = l1;
  Ne.prototype.delete = f1;
  Ne.prototype.get = d1;
  Ne.prototype.has = h1;
  Ne.prototype.set = p1;
  var g1 = _n(Se, "Map");
  const br = g1;
  function v1() {
    (this.size = 0), (this.__data__ = { hash: new dn(), map: new (br || Ne)(), string: new dn() });
  }
  function y1(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function No(t, e) {
    var n = t.__data__;
    return y1(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function m1(t) {
    var e = No(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function b1(t) {
    return No(this, t).get(t);
  }
  function _1(t) {
    return No(this, t).has(t);
  }
  function w1(t, e) {
    var n = No(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function Fe(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Fe.prototype.clear = v1;
  Fe.prototype.delete = m1;
  Fe.prototype.get = b1;
  Fe.prototype.has = _1;
  Fe.prototype.set = w1;
  var x1 = "Expected a function";
  function ta(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(x1);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var s = t.apply(this, r);
      return (n.cache = i.set(o, s) || i), s;
    };
    return (n.cache = new (ta.Cache || Fe)()), n;
  }
  ta.Cache = Fe;
  var S1 = 500;
  function A1(t) {
    var e = ta(t, function (r) {
        return n.size === S1 && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var E1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    O1 = /\\(\\)?/g,
    T1 = A1(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(E1, function (n, r, o, i) {
          e.push(o ? i.replace(O1, "$1") : r || n);
        }),
        e
      );
    });
  const j1 = T1;
  function C1(t) {
    return t == null ? "" : qd(t);
  }
  function Fo(t, e) {
    return de(t) ? t : Xs(t, e) ? [t] : j1(C1(t));
  }
  var P1 = 1 / 0;
  function Tr(t) {
    if (typeof t == "string" || Io(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -P1 ? "-0" : e;
  }
  function ea(t, e) {
    e = Fo(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Tr(e[n++])];
    return n && n == r ? t : void 0;
  }
  function R1(t, e, n) {
    var r = t == null ? void 0 : ea(t, e);
    return r === void 0 ? n : r;
  }
  function oh(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var ru = le ? le.isConcatSpreadable : void 0;
  function k1(t) {
    return de(t) || Ys(t) || !!(ru && t && t[ru]);
  }
  function $1(t, e, n, r, o) {
    var i = -1,
      s = t.length;
    for (n || (n = k1), o || (o = []); ++i < s; ) {
      var a = t[i];
      n(a) ? oh(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function I1(t) {
    var e = t == null ? 0 : t.length;
    return e ? $1(t) : [];
  }
  function M1(t) {
    return W_(X_(t, void 0, I1), t + "");
  }
  var N1 = nh(Object.getPrototypeOf, Object);
  const F1 = N1;
  function D1() {
    (this.__data__ = new Ne()), (this.size = 0);
  }
  function L1(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function z1(t) {
    return this.__data__.get(t);
  }
  function U1(t) {
    return this.__data__.has(t);
  }
  var B1 = 200;
  function V1(t, e) {
    var n = this.__data__;
    if (n instanceof Ne) {
      var r = n.__data__;
      if (!br || r.length < B1 - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new Fe(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function be(t) {
    var e = (this.__data__ = new Ne(t));
    this.size = e.size;
  }
  be.prototype.clear = D1;
  be.prototype.delete = L1;
  be.prototype.get = z1;
  be.prototype.has = U1;
  be.prototype.set = V1;
  var ih = typeof jt == "object" && jt && !jt.nodeType && jt,
    ou = ih && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    H1 = ou && ou.exports === ih,
    iu = H1 ? Se.Buffer : void 0;
  iu && iu.allocUnsafe;
  function K1(t, e) {
    return t.slice();
  }
  function W1(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r; ) {
      var s = t[n];
      e(s, n, t) && (i[o++] = s);
    }
    return i;
  }
  function q1() {
    return [];
  }
  var G1 = Object.prototype,
    J1 = G1.propertyIsEnumerable,
    su = Object.getOwnPropertySymbols,
    Z1 = su
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              W1(su(t), function (e) {
                return J1.call(t, e);
              }));
        }
      : q1;
  const Y1 = Z1;
  function Q1(t, e, n) {
    var r = e(t);
    return de(t) ? r : oh(r, n(t));
  }
  function as(t) {
    return Q1(t, rh, Y1);
  }
  var X1 = _n(Se, "DataView");
  const ls = X1;
  var tw = _n(Se, "Promise");
  const cs = tw;
  var ew = _n(Se, "Set");
  const us = ew;
  var au = "[object Map]",
    nw = "[object Object]",
    lu = "[object Promise]",
    cu = "[object Set]",
    uu = "[object WeakMap]",
    fu = "[object DataView]",
    rw = bn(ls),
    ow = bn(br),
    iw = bn(cs),
    sw = bn(us),
    aw = bn(ss),
    an = Un;
  ((ls && an(new ls(new ArrayBuffer(1))) != fu) ||
    (br && an(new br()) != au) ||
    (cs && an(cs.resolve()) != lu) ||
    (us && an(new us()) != cu) ||
    (ss && an(new ss()) != uu)) &&
    (an = function (t) {
      var e = Un(t),
        n = e == nw ? t.constructor : void 0,
        r = n ? bn(n) : "";
      if (r)
        switch (r) {
          case rw:
            return fu;
          case ow:
            return au;
          case iw:
            return lu;
          case sw:
            return cu;
          case aw:
            return uu;
        }
      return e;
    });
  const _r = an;
  var lw = Object.prototype,
    cw = lw.hasOwnProperty;
  function uw(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && cw.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var fw = Se.Uint8Array;
  const so = fw;
  function na(t) {
    var e = new t.constructor(t.byteLength);
    return new so(e).set(new so(t)), e;
  }
  function dw(t, e) {
    var n = na(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var hw = /\w*$/;
  function pw(t) {
    var e = new t.constructor(t.source, hw.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var du = le ? le.prototype : void 0,
    hu = du ? du.valueOf : void 0;
  function gw(t) {
    return hu ? Object(hu.call(t)) : {};
  }
  function vw(t, e) {
    var n = na(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var yw = "[object Boolean]",
    mw = "[object Date]",
    bw = "[object Map]",
    _w = "[object Number]",
    ww = "[object RegExp]",
    xw = "[object Set]",
    Sw = "[object String]",
    Aw = "[object Symbol]",
    Ew = "[object ArrayBuffer]",
    Ow = "[object DataView]",
    Tw = "[object Float32Array]",
    jw = "[object Float64Array]",
    Cw = "[object Int8Array]",
    Pw = "[object Int16Array]",
    Rw = "[object Int32Array]",
    kw = "[object Uint8Array]",
    $w = "[object Uint8ClampedArray]",
    Iw = "[object Uint16Array]",
    Mw = "[object Uint32Array]";
  function Nw(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case Ew:
        return na(t);
      case yw:
      case mw:
        return new r(+t);
      case Ow:
        return dw(t);
      case Tw:
      case jw:
      case Cw:
      case Pw:
      case Rw:
      case kw:
      case $w:
      case Iw:
      case Mw:
        return vw(t);
      case bw:
        return new r();
      case _w:
      case Sw:
        return new r(t);
      case ww:
        return pw(t);
      case xw:
        return new r();
      case Aw:
        return gw(t);
    }
  }
  function Fw(t) {
    return typeof t.constructor == "function" && !Yd(t) ? M_(F1(t)) : {};
  }
  var Dw = "[object Map]";
  function Lw(t) {
    return Ge(t) && _r(t) == Dw;
  }
  var pu = Fn && Fn.isMap,
    zw = pu ? Qs(pu) : Lw;
  const Uw = zw;
  var Bw = "[object Set]";
  function Vw(t) {
    return Ge(t) && _r(t) == Bw;
  }
  var gu = Fn && Fn.isSet,
    Hw = gu ? Qs(gu) : Vw;
  const Kw = Hw;
  var Ww = 1,
    sh = "[object Arguments]",
    qw = "[object Array]",
    Gw = "[object Boolean]",
    Jw = "[object Date]",
    Zw = "[object Error]",
    ah = "[object Function]",
    Yw = "[object GeneratorFunction]",
    Qw = "[object Map]",
    Xw = "[object Number]",
    lh = "[object Object]",
    tx = "[object RegExp]",
    ex = "[object Set]",
    nx = "[object String]",
    rx = "[object Symbol]",
    ox = "[object WeakMap]",
    ix = "[object ArrayBuffer]",
    sx = "[object DataView]",
    ax = "[object Float32Array]",
    lx = "[object Float64Array]",
    cx = "[object Int8Array]",
    ux = "[object Int16Array]",
    fx = "[object Int32Array]",
    dx = "[object Uint8Array]",
    hx = "[object Uint8ClampedArray]",
    px = "[object Uint16Array]",
    gx = "[object Uint32Array]",
    St = {};
  St[sh] =
    St[qw] =
    St[ix] =
    St[sx] =
    St[Gw] =
    St[Jw] =
    St[ax] =
    St[lx] =
    St[cx] =
    St[ux] =
    St[fx] =
    St[Qw] =
    St[Xw] =
    St[lh] =
    St[tx] =
    St[ex] =
    St[nx] =
    St[rx] =
    St[dx] =
    St[hx] =
    St[px] =
    St[gx] =
      !0;
  St[Zw] = St[ah] = St[ox] = !1;
  function Gr(t, e, n, r, o, i) {
    var s,
      a = e & Ww;
    if (s !== void 0) return s;
    if (!fn(t)) return t;
    var l = de(t);
    if (l) s = uw(t);
    else {
      var c = _r(t),
        u = c == ah || c == Yw;
      if (io(t)) return K1(t);
      if (c == lh || c == sh || (u && !o)) s = u ? {} : Fw(t);
      else {
        if (!St[c]) return o ? t : {};
        s = Nw(t, c);
      }
    }
    i || (i = new be());
    var d = i.get(t);
    if (d) return d;
    i.set(t, s),
      Kw(t)
        ? t.forEach(function (v) {
            s.add(Gr(v, e, n, v, t, i));
          })
        : Uw(t) &&
          t.forEach(function (v, m) {
            s.set(m, Gr(v, e, n, m, t, i));
          });
    var f = as,
      h = l ? void 0 : f(t);
    return (
      q_(h || t, function (v, m) {
        h && ((m = v), (v = t[m])), Zd(s, m, Gr(v, e, n, m, t, i));
      }),
      s
    );
  }
  var vx = 1,
    yx = 4;
  function fs(t) {
    return Gr(t, vx | yx);
  }
  var mx = "__lodash_hash_undefined__";
  function bx(t) {
    return this.__data__.set(t, mx), this;
  }
  function _x(t) {
    return this.__data__.has(t);
  }
  function ao(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.__data__ = new Fe(); ++e < n; ) this.add(t[e]);
  }
  ao.prototype.add = ao.prototype.push = bx;
  ao.prototype.has = _x;
  function wx(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function xx(t, e) {
    return t.has(e);
  }
  var Sx = 1,
    Ax = 2;
  function ch(t, e, n, r, o, i) {
    var s = n & Sx,
      a = t.length,
      l = e.length;
    if (a != l && !(s && l > a)) return !1;
    var c = i.get(t),
      u = i.get(e);
    if (c && u) return c == e && u == t;
    var d = -1,
      f = !0,
      h = n & Ax ? new ao() : void 0;
    for (i.set(t, e), i.set(e, t); ++d < a; ) {
      var v = t[d],
        m = e[d];
      if (r) var w = s ? r(m, v, d, e, t, i) : r(v, m, d, t, e, i);
      if (w !== void 0) {
        if (w) continue;
        f = !1;
        break;
      }
      if (h) {
        if (
          !wx(e, function (b, _) {
            if (!xx(h, _) && (v === b || o(v, b, n, r, i))) return h.push(_);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(v === m || o(v, m, n, r, i))) {
        f = !1;
        break;
      }
    }
    return i.delete(t), i.delete(e), f;
  }
  function Ex(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r, o) {
        n[++e] = [o, r];
      }),
      n
    );
  }
  function Ox(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r) {
        n[++e] = r;
      }),
      n
    );
  }
  var Tx = 1,
    jx = 2,
    Cx = "[object Boolean]",
    Px = "[object Date]",
    Rx = "[object Error]",
    kx = "[object Map]",
    $x = "[object Number]",
    Ix = "[object RegExp]",
    Mx = "[object Set]",
    Nx = "[object String]",
    Fx = "[object Symbol]",
    Dx = "[object ArrayBuffer]",
    Lx = "[object DataView]",
    vu = le ? le.prototype : void 0,
    Di = vu ? vu.valueOf : void 0;
  function zx(t, e, n, r, o, i, s) {
    switch (n) {
      case Lx:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case Dx:
        return !(t.byteLength != e.byteLength || !i(new so(t), new so(e)));
      case Cx:
      case Px:
      case $x:
        return Js(+t, +e);
      case Rx:
        return t.name == e.name && t.message == e.message;
      case Ix:
      case Nx:
        return t == e + "";
      case kx:
        var a = Ex;
      case Mx:
        var l = r & Tx;
        if ((a || (a = Ox), t.size != e.size && !l)) return !1;
        var c = s.get(t);
        if (c) return c == e;
        (r |= jx), s.set(t, e);
        var u = ch(a(t), a(e), r, o, i, s);
        return s.delete(t), u;
      case Fx:
        if (Di) return Di.call(t) == Di.call(e);
    }
    return !1;
  }
  var Ux = 1,
    Bx = Object.prototype,
    Vx = Bx.hasOwnProperty;
  function Hx(t, e, n, r, o, i) {
    var s = n & Ux,
      a = as(t),
      l = a.length,
      c = as(e),
      u = c.length;
    if (l != u && !s) return !1;
    for (var d = l; d--; ) {
      var f = a[d];
      if (!(s ? f in e : Vx.call(e, f))) return !1;
    }
    var h = i.get(t),
      v = i.get(e);
    if (h && v) return h == e && v == t;
    var m = !0;
    i.set(t, e), i.set(e, t);
    for (var w = s; ++d < l; ) {
      f = a[d];
      var b = t[f],
        _ = e[f];
      if (r) var x = s ? r(_, b, f, e, t, i) : r(b, _, f, t, e, i);
      if (!(x === void 0 ? b === _ || o(b, _, n, r, i) : x)) {
        m = !1;
        break;
      }
      w || (w = f == "constructor");
    }
    if (m && !w) {
      var S = t.constructor,
        C = e.constructor;
      S != C &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof S == "function" && S instanceof S && typeof C == "function" && C instanceof C) &&
        (m = !1);
    }
    return i.delete(t), i.delete(e), m;
  }
  var Kx = 1,
    yu = "[object Arguments]",
    mu = "[object Array]",
    zr = "[object Object]",
    Wx = Object.prototype,
    bu = Wx.hasOwnProperty;
  function qx(t, e, n, r, o, i) {
    var s = de(t),
      a = de(e),
      l = s ? mu : _r(t),
      c = a ? mu : _r(e);
    (l = l == yu ? zr : l), (c = c == yu ? zr : c);
    var u = l == zr,
      d = c == zr,
      f = l == c;
    if (f && io(t)) {
      if (!io(e)) return !1;
      (s = !0), (u = !1);
    }
    if (f && !u) return i || (i = new be()), s || eh(t) ? ch(t, e, n, r, o, i) : zx(t, e, l, n, r, o, i);
    if (!(n & Kx)) {
      var h = u && bu.call(t, "__wrapped__"),
        v = d && bu.call(e, "__wrapped__");
      if (h || v) {
        var m = h ? t.value() : t,
          w = v ? e.value() : e;
        return i || (i = new be()), o(m, w, n, r, i);
      }
    }
    return f ? (i || (i = new be()), Hx(t, e, n, r, o, i)) : !1;
  }
  function ra(t, e, n, r, o) {
    return t === e ? !0 : t == null || e == null || (!Ge(t) && !Ge(e)) ? t !== t && e !== e : qx(t, e, n, r, ra, o);
  }
  var Gx = 1,
    Jx = 2;
  function Zx(t, e, n, r) {
    var o = n.length,
      i = o;
    if (t == null) return !i;
    for (t = Object(t); o--; ) {
      var s = n[o];
      if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
    }
    for (; ++o < i; ) {
      s = n[o];
      var a = s[0],
        l = t[a],
        c = s[1];
      if (s[2]) {
        if (l === void 0 && !(a in t)) return !1;
      } else {
        var u = new be(),
          d;
        if (!(d === void 0 ? ra(c, l, Gx | Jx, r, u) : d)) return !1;
      }
    }
    return !0;
  }
  function uh(t) {
    return t === t && !fn(t);
  }
  function Yx(t) {
    for (var e = rh(t), n = e.length; n--; ) {
      var r = e[n],
        o = t[r];
      e[n] = [r, o, uh(o)];
    }
    return e;
  }
  function fh(t, e) {
    return function (n) {
      return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
  }
  function Qx(t) {
    var e = Yx(t);
    return e.length == 1 && e[0][2]
      ? fh(e[0][0], e[0][1])
      : function (n) {
          return n === t || Zx(n, t, e);
        };
  }
  function Xx(t, e) {
    return t != null && e in Object(t);
  }
  function tS(t, e, n) {
    e = Fo(e, t);
    for (var r = -1, o = e.length, i = !1; ++r < o; ) {
      var s = Tr(e[r]);
      if (!(i = t != null && n(t, s))) break;
      t = t[s];
    }
    return i || ++r != o ? i : ((o = t == null ? 0 : t.length), !!o && Zs(o) && Gs(s, o) && (de(t) || Ys(t)));
  }
  function dh(t, e) {
    return t != null && tS(t, e, Xx);
  }
  var eS = 1,
    nS = 2;
  function rS(t, e) {
    return Xs(t) && uh(e)
      ? fh(Tr(t), e)
      : function (n) {
          var r = R1(n, t);
          return r === void 0 && r === e ? dh(n, t) : ra(e, r, eS | nS);
        };
  }
  function oS(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function iS(t) {
    return function (e) {
      return ea(e, t);
    };
  }
  function sS(t) {
    return Xs(t) ? oS(Tr(t)) : iS(t);
  }
  function aS(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? Gd
        : typeof t == "object"
          ? de(t)
            ? rS(t[0], t[1])
            : Qx(t)
          : sS(t);
  }
  function lS(t, e) {
    return t > e;
  }
  function cS(t, e, n) {
    for (var r = -1, o = t.length; ++r < o; ) {
      var i = t[r],
        s = e(i);
      if (s != null && (a === void 0 ? s === s && !Io(s) : n(s, a)))
        var a = s,
          l = i;
    }
    return l;
  }
  function uS(t, e) {
    return t && t.length ? cS(t, aS(e), lS) : void 0;
  }
  function fS(t, e, n, r) {
    if (!fn(t)) return t;
    e = Fo(e, t);
    for (var o = -1, i = e.length, s = i - 1, a = t; a != null && ++o < i; ) {
      var l = Tr(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != s) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = fn(u) ? u : Gs(e[o + 1]) ? [] : {});
      }
      Zd(a, l, c), (a = a[l]);
    }
    return t;
  }
  function dS(t, e, n) {
    for (var r = -1, o = e.length, i = {}; ++r < o; ) {
      var s = e[r],
        a = ea(t, s);
      n(a, s) && fS(i, Fo(s, t), a);
    }
    return i;
  }
  function hS(t, e) {
    return dS(t, e, function (n, r) {
      return dh(t, r);
    });
  }
  var pS = M1(function (t, e) {
    return t == null ? {} : hS(t, e);
  });
  const ds = pS,
    gS = ["weight", "class", "color", "startsOnLine", "endsOnLine"],
    vS = ["defaultClass", "weightClass", "endClass", "startClass"],
    yS = (t, e) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        t.startsOnLine ? e.startClass : null,
        t.endsOnLine ? e.endClass : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((n) => !!n),
    mS = $o(yS, { normalizer: (t) => JSON.stringify(t) }),
    bS = (t, e) => mS(ds(t, gS), ds(e, vS)),
    _S = { class: "gutter-annotations" },
    wS = ["onClick", "onDblclick"],
    xS = { key: 0 },
    SS = { key: 0, class: "gutter text" },
    AS = Dt({
      __name: "AnnotatedGutters",
      props: { gutter: { default: null }, annotationStyle: { default: null } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = bS,
          r = e,
          o = (s, a) => {
            r("annotation-click", s, { startOffset: 0, annotation: a });
          },
          i = (s, a) => {
            r("annotation-double-click", s, { startOffset: 0, annotation: a });
          };
        return (s, a) => {
          var l, c;
          return (
            L(),
            K(
              ut,
              null,
              [
                $("div", _S, [
                  (L(!0),
                  K(
                    ut,
                    null,
                    Qt((l = s.gutter) == null ? void 0 : l.annotations, (u) => {
                      var d;
                      return (
                        L(),
                        K(
                          "span",
                          {
                            key: u,
                            class: Nt(G(n)(u, s.annotationStyle)),
                            style: Ze({ "--gutter-bg-color": (d = u.color) == null ? void 0 : d.background }),
                            onClick: (f) => o(f, u),
                            onDblclick: (f) => i(f, u),
                          },
                          [u.label ? (L(), K("label", xS, bt(u.label), 1)) : $t("", !0)],
                          46,
                          wS,
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                s.gutter ? (L(), K("div", SS, bt((c = s.gutter) == null ? void 0 : c.text), 1)) : $t("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    Ur = (t, e) => {
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
  function ES(t) {
    const e = [[0, []]];
    for (const r of t) {
      let o = e.length - 1;
      for (; o >= 0; --o) {
        const s = e[o];
        if (s[0] <= r[0]) {
          s[0] < r[0] && (e.splice(o + 1, 0, [r[0], e[o][1].slice()]), (o += 1));
          break;
        }
      }
      let i = e.length - 1;
      for (; i >= 0; --i) {
        const s = e[i];
        if (s[0] <= r[1]) {
          s[0] < r[1] && (e.splice(i + 1, 0, [r[1], s[1].slice()]), (i += 1));
          break;
        }
      }
      for (let s = o; s < i; ++s) e[s][1].push(r[2]);
    }
    const n = [];
    for (let r = 0; r < e.length - 1; ++r) e[r][1].length > 0 && n.push([e[r][0], e[r + 1][0], e[r][1]]);
    return n;
  }
  const hh = class Xn {
    constructor() {
      at(this, "_verboseEnabled"), at(this, "_debugEnabled");
    }
    static get instance() {
      return Xn._instance || (Xn._instance = new Xn()), Xn._instance;
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
  at(hh, "_instance");
  let yt = hh;
  const OS = 1,
    _u = (t, e) => {
      const n = t[0] < e[0] ? t : e,
        r = n == t ? e : t;
      return n[1] < r[0] ? null : [r[0], n[1] < r[1] ? n[1] : r[1]];
    };
  class TS {
    constructor(e, n, r) {
      at(this, "props"),
        at(this, "editState"),
        at(this, "createState"),
        at(
          this,
          "allAnnotations",
          rt(() => {
            yt.debug("** refresh annotations");
            const o = fs(this.props.annotations);
            return (
              this.editState.annotation && o.push(this.editState.annotation),
              this.createState.annotation && o.push(this.createState.annotation),
              o
            );
          }),
        ),
        at(
          this,
          "gutterAnnotations",
          rt(() => {
            yt.debug("** refresh gutterAnnotations **");
            const o = this.allAnnotations.value.filter((i) => i.target === "gutter");
            return yt.debug(o), o;
          }),
        ),
        at(this, "prepareRanges", (o) => {
          yt.debug("** prepare ranges for_annotations **"), yt.debug(o);
          const i = o.filter((s) => s.target === "text");
          return (
            this.props.autoAnnotationWeights &&
              (this.calculateAnnotationWeights(i), this.calculateGutterAnnotationWeights(this.gutterAnnotations.value)),
            yt.debug("** weighted span annotations **"),
            yt.debug(i),
            yt.debug("** weighted gutter annotations **"),
            yt.debug(this.gutterAnnotations.value),
            o.map((s) => [
              Math.max(0, s.start - this.props.annotationOffset),
              s.end + OS - this.props.annotationOffset,
              s,
            ])
          );
        }),
        at(this, "calculateAnnotationWeights", function (o) {
          const i = function (a, l) {
            return a.start - l.start === 0 ? l.end - a.end : a.start - l.start;
          };
          o = o.sort(i);
          const s = [];
          o.forEach((a) => {
            let l = 0;
            for (;;) {
              if (!(s != null && s[l])) {
                (a.weight = l), (s[l] = a);
                return;
              }
              if (a.start > s[l].end) {
                (a.weight = l), (s[l] = a);
                return;
              }
              l++;
            }
          });
        }),
        at(this, "calculateGutterAnnotationWeights", (o) => {
          const i = function (l, c) {
            const u = l.end - l.start,
              d = c.end - c.start;
            return u - d;
          };
          o = o.sort(i);
          let s = 0;
          o.forEach(function (l) {
            (l.weight = s), s++;
          });
          const a = Math.max(...this.gutterAnnotations.value.map((l) => l.weight));
          o.forEach(function (l) {
            l.weight = a - l.weight;
          });
        }),
        at(
          this,
          "flattenedRanges",
          rt(() => {
            let o = this.prepareRanges(this.allAnnotations.value);
            return (
              this.props.lines.forEach((i) => {
                o.push([i.start, i.end + 1, null]);
                const s = i.text.split(" ");
                let a = 0;
                s.forEach((l, c) => {
                  const u = i.start + a,
                    d = c < s.length - 1 ? u + l.length + 1 : u + l.length;
                  o.push([u, d + 1, null]), (a += l.length + 1);
                });
              }),
              (o = o.sort((i, s) =>
                Number(i[0]) - Number(s[0]) === 0 ? Number(i[1]) - Number(s[1]) : Number(i[0]) - Number(s[0]),
              )),
              ES(o)
            );
          }),
        ),
        at(this, "createAnnotatedWord", (o) => {
          let i = this.flattenedRanges.value.filter((l) => _u([l[0], l[1] - 1], [o.start, o.end]));
          const s = this.props.display;
          i = i.map(function (l) {
            return (
              (l[2] = l[2]
                .filter((c) => c)
                .filter((c) => (c == null ? void 0 : c.target) === s)
                .sort((c, u) =>
                  Number(c == null ? void 0 : c.start) > Number(u == null ? void 0 : u.start) ? 1 : -1,
                )),
              l
            );
          });
          const a = i.map((l) => {
            var c;
            const u = l[2];
            return {
              start: l[0],
              end: l[1] - 1,
              text: typeof o.text == "string" ? o.text.substring(l[0] - o.start, l[1] - o.start) : "",
              annotations: u,
              maxAnnotationWeight: ((c = uS(u, (d) => d.weight)) == null ? void 0 : c.weight) ?? 0,
            };
          });
          return { start: o.start, end: o.end, text: o.text, parts: a };
        }),
        at(this, "createAnnotatedLine", (o) => {
          let i = [];
          const s = this.flattenedRanges.value.filter((f) => _u([f[0], f[1] - 1], [o.start, o.end]));
          for (const f of s)
            f[2]
              .filter((h) => h)
              .filter((h) => (h == null ? void 0 : h.target) === "gutter")
              .sort((h, v) => (Number(h == null ? void 0 : h.weight) < Number(v == null ? void 0 : v.weight) ? -1 : 1))
              .forEach((h) => i.push(h));
          i = [...new Set(i)];
          const a = Math.max(...this.gutterAnnotations.value.map((f) => f.weight));
          for (let f = 0; f <= a; f++)
            if (i.filter((h) => h.weight === f).length == 0) {
              const h = {
                start: o.start,
                end: o.start,
                target: "gutter",
                class: "annotation--gutter-spacer",
                weight: f,
              };
              i.push(h);
            }
          i.map((f) => {
            const h = fs(f);
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
            { start: o.start, end: o.end, words: d, gutter: { text: o.gutter, annotations: i } }
          );
        }),
        at(
          this,
          "annotatedLines",
          rt(() => {
            const o = this.props.lines.map((i) => this.createAnnotatedLine(i));
            return yt.debug("** annotated lines **"), yt.debug(o), o;
          }),
        ),
        (this.props = e),
        (this.editState = n),
        (this.createState = r);
    }
  }
  const jS = (t, e, n, r) =>
      [
        "annotated-text",
        `theme-${t}`,
        `annotated-text--render-${e}`,
        r ? `action--active action--${r}` : null,
        n ? "annotated-text--show-labels" : null,
      ].filter((o) => o),
    CS = $o(jS),
    PS = ["weight", "color", "class"],
    RS = (t, e, n, r, o, i, s, a, l) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        n ? e.startClass : null,
        r ? e.endClass : null,
        o ? e.transitioningClass : null,
        i ? e.shadowClass : null,
        s ? e.hoveredClass : null,
        a ? e.activeClass : null,
        l ? "create-anno-text" : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((c) => c),
    kS = $o(RS, { normalizer: (t) => JSON.stringify(t) }),
    $S = (t, e, n, r, o, i, s, a) => {
      const l = e && t === e,
        c = e && t.id === e.id && t !== e,
        u = a.includes(t.id),
        d = s.includes(t.id);
      return kS(ds(t, PS), n, (t == null ? void 0 : t.start) === r, (t == null ? void 0 : t.end) === o, c, l, u, d, i);
    };
  class IS {
    constructor(e, n) {
      at(this, "props"),
        at(this, "editAnnotationState"),
        at(
          this,
          "componentClasses",
          rt(() => {
            const { theme: r, render: o, showLabels: i } = this.props,
              { action: s } = this.editAnnotationState;
            return CS(r, o, i, s);
          }),
        ),
        at(this, "annotationClasses", (r, o, i, s) => {
          const { style: a, selectedAnnotations: l, hoveredAnnotations: c } = this.props;
          return $S(r, this.editAnnotationState.annotation, a, o, i, s, l, c);
        }),
        (this.props = e),
        (this.editAnnotationState = n);
    }
  }
  var Mt = ((t) => (
    (t.IDLE = "idle"),
    (t.SELECTING = "selecting"),
    (t.UPDATING = "updating"),
    (t.CREATING = "creating"),
    (t.START_SELECT = "start-selecting"),
    (t.START_CREATE = "start-creating"),
    t
  ))(Mt || {});
  class MS {
    constructor(e) {
      at(this, "newEnd"),
        at(this, "newStart"),
        at(this, "annotation"),
        at(this, "creating"),
        at(this, "userState"),
        (this.userState = e),
        this.resetCreating();
    }
    resetCreating() {
      (this.creating = !1),
        (this.annotation = null),
        (this.newEnd = null),
        (this.newStart = null),
        (this.creating = !1),
        (this.userState.state = Mt.IDLE);
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
  class NS {
    constructor() {
      at(this, "hoveredAnnotations"), at(this, "mouseEvent"), (this.hoveredAnnotations = []), (this.mouseEvent = null);
    }
  }
  class FS {
    constructor(e) {
      at(this, "action"),
        at(this, "handlePosition"),
        at(this, "annotation"),
        at(this, "origAnnotation"),
        at(this, "origEnd"),
        at(this, "origStart"),
        at(this, "newEnd"),
        at(this, "newStart"),
        at(this, "updating", !1),
        at(this, "userState"),
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
        (this.userState.state = Mt.IDLE),
        (this.updating = !1);
    }
    startUpdating(e, n, r, o = null, i = null, s, a) {
      (this.action = e),
        (this.handlePosition = n),
        (this.origAnnotation = r),
        (this.annotation = fs(r)),
        (this.origEnd = o),
        (this.origStart = i),
        (this.newEnd = s),
        (this.newStart = a);
    }
    confirmStartUpdating() {
      (this.userState.state = Mt.UPDATING), (this.updating = !0), this.confirmUpdate();
    }
    confirmUpdate() {
      this.updating && ((this.annotation.start = this.newStart), (this.annotation.end = this.newEnd));
    }
  }
  class DS {
    constructor() {
      at(this, "state"), at(this, "payload"), (this.state = Mt.IDLE), (this.payload = null);
    }
    reset() {
      (this.state = Mt.IDLE), (this.payload = null);
    }
  }
  const LS = () => {
    const t = ct(new DS()),
      e = ct(new FS(t.value)),
      n = ct(new MS(t.value)),
      r = ct(new NS());
    return { updateState: e, createState: n, hoverState: r, userState: t };
  };
  function je(t) {
    const e = zs();
    if (!e) return !1;
    const n = e.vnode.props;
    return n ? !!(n[er(t)] || n[er(oe(t))]) : !1;
  }
  const zS = { class: "content" },
    hs = Dt({
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
        n = Ln(n);
        const r = e,
          o = LS(),
          { updateState: i, createState: s, userState: a, hoverState: l } = o,
          c = rt(() => a.value.state),
          u = new TS(n, i.value, s.value);
        Zf(() => {
          yt.setDebug(n.debug), yt.setVerbose(n.verbose);
        });
        const d = je("annotationUpdateBegin"),
          f = je("annotationUpdating");
        je("annotationUpdateEnd");
        const h = je("annotationCreateBegin"),
          v = je("annotationCreating");
        je("annotationCreateEnd");
        const m = je("keyPressed");
        je("annotationClick"), je("annotationDoubleClick");
        const w = new IS(n, i.value),
          b = w.annotationClasses,
          _ = w.componentClasses;
        me(c, (p, A) => {
          yt.verbose("user-action-state-change", A, p), r("user-action-state-change", A, p);
        }),
          typeof window < "u" &&
            window.addEventListener("keyup", (p) => {
              if (m) yt.verbose("key-pressed", p.key, i.value, s.value), r("key-pressed", p, i.value, s.value, a.value);
              else
                switch (p.key) {
                  case "Escape":
                    i.value.resetUpdate();
                }
            });
        const x = new Map(),
          S = new Map(),
          C = new Map();
        function z(p, A) {
          var P;
          yt.verbose("@onClick", "userState:", a.value.state, A),
            (P = x.get(a.value.state)) == null || P(p, A),
            r("annotation-click", A);
        }
        function j(p, A) {
          yt.verbose("@onDoubleClick", "userState:", a.value.state, A),
            p.preventDefault(),
            r("annotation-double-click", A);
        }
        function N(p, A) {
          var P;
          yt.verbose(
            "@onMouseMove",
            "userState:",
            p,
            a.value.state,
            A,
            (P = A == null ? void 0 : A.annotation) == null ? void 0 : P.id,
          ),
            C.get(a.value.state) && C.get(a.value.state)(p, A);
        }
        function J(p) {
          yt.verbose("@onMouseUp", "userState:", a.value.state), S.get(a.value.state) && S.get(a.value.state)(p);
        }
        function I(p, A) {
          yt.verbose("@onMouseLeave", "userState:", a.value.state),
            i.value.updating && i.value.resetUpdate(),
            s.value.creating && s.value.resetCreating();
        }
        return (
          x.set(Mt.IDLE, (p, A) => {
            if (A != null && A.annotation) {
              (a.value.state = Mt.START_SELECT), (a.value.payload = A);
              return;
            }
            if (A != null && A.startOffset) {
              (a.value.state = Mt.START_CREATE), (a.value.payload = A);
              return;
            }
          }),
          S.set(Mt.START_SELECT, (p) => {
            yt.verbose("annotation-select", a.value.payload.annotation),
              r("annotation-select", a.value.payload.annotation, p),
              a.value.reset();
          }),
          S.set(Mt.START_CREATE, (p) => {
            a.value.reset();
          }),
          C.set(Mt.START_CREATE, (p, A) => {
            if (n.allowCreate) {
              const P = A.startOffset + Ur(p.x, p.y).offset;
              if ((s.value.startCreating(P), h))
                yt.verbose("*emit annotation-create-begin", s.value), r("annotation-create-begin", s.value);
              else {
                const Z = {
                  id: Ly(),
                  start: s.value.newStart,
                  end: s.value.newStart,
                  class: "annotation annotation--color-1",
                  target: "text",
                };
                s.value.initAnnotation(Z);
              }
              a.value.state = Mt.CREATING;
            }
          }),
          C.set(Mt.CREATING, (p, A) => {
            const P = Ur(p.x, p.y);
            if (P) {
              const Z = A.startOffset + P.offset;
              s.value.newStart <= Z &&
                ((s.value.newEnd = Z),
                v
                  ? (yt.verbose("*emit annotation-creating", s.value), r("annotation-creating", s.value))
                  : s.value.updateCreating());
            }
          }),
          S.set(Mt.CREATING, (p) => {
            yt.verbose("*emit annotation-create-end", s.value),
              r("annotation-create-end", s.value),
              s.value.resetCreating();
          }),
          C.set(Mt.START_SELECT, (p, A) => {
            if (!n.allowEdit) return;
            const P = Ur(p.x, p.y);
            P &&
              (i.value.startUpdating(
                a.value.payload.action,
                a.value.payload.startOffset + P.offset,
                a.value.payload.annotation,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
                a.value.payload.annotation.end,
                a.value.payload.annotation.start,
              ),
              d
                ? (yt.verbose("*emit annotation-update-begin", i.value), r("annotation-update-begin", i.value))
                : i.value.confirmStartUpdating());
          }),
          C.set(Mt.UPDATING, (p, A) => {
            const P = Ur(p.x, p.y);
            let Z = !1;
            if (P) {
              const tt = A.startOffset + P.offset,
                H = tt - i.value.handlePosition;
              switch (
                ((i.value.newStart = i.value.annotation.start),
                (i.value.newEnd = i.value.annotation.end),
                i.value.action)
              ) {
                case "moveEnd":
                  tt >= i.value.annotation.start && ((i.value.newEnd = tt), (Z = !0));
                  break;
                case "moveStart":
                  tt <= i.value.annotation.end && ((i.value.newStart = tt), (Z = !0));
                  break;
                default:
                case "move":
                  i.value.newStart != i.value.origStart + H &&
                    ((i.value.newStart = i.value.origStart + H), (i.value.newEnd = i.value.origEnd + H), (Z = !0));
                  break;
              }
              Z &&
                (f
                  ? (yt.verbose("*emit annotation-updating", i.value), r("annotation-updating", i.value))
                  : i.value.confirmUpdate());
            }
          }),
          S.set(Mt.UPDATING, (p) => {
            yt.verbose("*emit annotation-update-end", i.value),
              r("annotation-update-end", i.value),
              i.value.resetUpdate();
          }),
          C.set(Mt.IDLE, (p, A) => {
            if (A != null && A.annotation) {
              const P = A.annotation;
              l.value.hoveredAnnotations.some((Z) => Z.id === P.id) ||
                (l.value.hoveredAnnotations.push(P),
                yt.verbose("annotation-mouse-over", P.id),
                r("annotation-mouse-over", P, p));
            } else
              l.value.hoveredAnnotations.map((P) => {
                yt.verbose("annotation-mouse-leave", P.id), r("annotation-mouse-leave", P, p);
              }),
                (l.value.hoveredAnnotations = []);
          }),
          (p, A) =>
            G(u).annotatedLines.value.length
              ? (L(),
                K(
                  "div",
                  {
                    key: 0,
                    class: Nt(G(_)),
                    onMouseleave: A[0] || (A[0] = (P) => I()),
                    onMouseup: A[1] || (A[1] = (P) => J(P)),
                  },
                  [
                    (L(!0),
                    K(
                      ut,
                      null,
                      Qt(
                        G(u).annotatedLines.value,
                        (P) => (
                          L(),
                          K(
                            ut,
                            { key: P },
                            [
                              st(
                                AS,
                                {
                                  gutter: P.gutter,
                                  "annotation-style": p.style,
                                  onAnnotationClick: z,
                                  onAnnotationDoubleClick: j,
                                },
                                null,
                                8,
                                ["gutter", "annotation-style"],
                              ),
                              $("div", zS, [
                                st(
                                  Xb,
                                  {
                                    line: P,
                                    "allow-edit": p.allowEdit,
                                    "allow-create": p.allowCreate,
                                    "annotation-classes": G(b),
                                    render: p.render,
                                    onAnnotationClick: z,
                                    onAnnotationDoubleClick: j,
                                    onAnnotationMouseMove: N,
                                  },
                                  {
                                    "annotation-before": Ie((Z) => [
                                      ke(p.$slots, "annotation-before", { annotation: Z.annotation }),
                                    ]),
                                    "annotation-after": Ie((Z) => [
                                      ke(p.$slots, "annotation-after", { annotation: Z.annotation }),
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
              : $t("", !0)
        );
      },
    }),
    US = { opacity: { background: 0.3, border: 0.3, backgroundActive: 0.3, borderActive: 0.9, gutter: 0.8 } },
    BS = (t) => {
      const e = parseInt(t.slice(1), 16),
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        o = e & 255;
      return `${n},${r},${o}`;
    },
    VS = (t, e) => {
      const n = { ...US.opacity },
        r = BS(t);
      return {
        border: `rgba(${r},${n.border})`,
        background: `rgba(${r},${n.border})`,
        borderActive: `rgba(${r},${n.border})`,
        backgroundActive: `color-mix(in srgb, white, ${t} ${n.backgroundActive * 100})`,
        gutterColor: `rgba(${r},${n.gutter})`,
      };
    },
    HS = (t, e) => {
      const n = {};
      return (
        Object.entries(t).forEach(([r, o]) => {
          n[r] = VS(o);
        }),
        n
      );
    };
  function KS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function WS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function qS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function GS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function JS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function ZS(t, e) {
    return (
      L(),
      K(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
        },
        [
          $("path", {
            "fill-rule": "evenodd",
            d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  const ph = (t, e) => {
      const n = t.__vccOpts || t;
      for (const [r, o] of e) n[r] = o;
      return n;
    },
    YS = {},
    QS = {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "h-6 w-6",
    };
  function XS(t, e) {
    return (
      L(),
      K(
        "svg",
        QS,
        e[0] ||
          (e[0] = [
            $(
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
  const tA = ph(YS, [["render", XS]]),
    eA = (t, e, n) => {
      const r = [];
      let o = 0;
      return (
        t.forEach((i) => {
          ((e >= i.start && e < i.end) || (n > i.start && n <= i.end) || (e < i.start && n > i.end)) &&
            (r.push(i), e >= i.start && e < i.end && (o = e - i.start));
        }),
        { lines: r, offset: o }
      );
    },
    nA = { key: 0 },
    rA = { class: "label cursor-pointer gap-2" },
    oA = ["name", "disabled", "checked"],
    iA = { class: "w-full" },
    sA = ["disabled", "data-tip"],
    wu = Dt({
      __name: "AnnotationEditItem",
      props: {
        annotation: {},
        tip: {},
        selectedAnnotation: { type: Boolean },
        disabled: { type: Boolean },
        textLines: {},
      },
      emits: ["confirmAnnotation", "changeSelected"],
      setup(t, { emit: e }) {
        const n = e,
          r = () => {
            n("confirmAnnotation");
          },
          o = () => {
            n("changeSelected");
          };
        return (i, s) =>
          i.annotation
            ? (L(),
              K("div", nA, [
                $("label", rA, [
                  i.annotation
                    ? (L(),
                      K(
                        "input",
                        {
                          key: 0,
                          type: "radio",
                          name: i.annotation.id,
                          class: "radio radio-success",
                          disabled: i.disabled,
                          checked: i.selectedAnnotation,
                          onClick: o,
                        },
                        null,
                        8,
                        oA,
                      ))
                    : $t("", !0),
                  $("div", iA, [
                    st(
                      G(hs),
                      {
                        annotations: [i.annotation],
                        lines: G(eA)(i.textLines, i.annotation.start, i.annotation.end).lines,
                        "allow-edit": !1,
                      },
                      null,
                      8,
                      ["annotations", "lines"],
                    ),
                  ]),
                  i.annotation
                    ? (L(),
                      K(
                        "button",
                        {
                          key: 1,
                          disabled: i.disabled,
                          class: "btn btn-xs btn-circle text-gray-500 btn-ghost tooltip tooltip-left z-[9999]",
                          "data-tip": i.tip,
                          onClick: r,
                        },
                        [st(tA)],
                        8,
                        sA,
                      ))
                    : $t("", !0),
                ]),
              ]))
            : $t("", !0);
      },
    }),
    gh = {
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
    vh = HS(gh),
    aA = () => {
      const t = {};
      return (
        Object.entries(vh).forEach(([e, n]) => {
          t[e] = n ? { ...n, border: "rgb(0, 128, 0)" } : null;
        }),
        t
      );
    },
    lA = aA(),
    cA = { class: "card-body p-2" },
    uA = { key: 0, role: "alert", class: "alert alert-error" },
    fA = { class: "flex justify-between items-center" },
    dA = { class: "flex gap-2 justify-center" },
    hA = { class: "flex gap-2" },
    pA = ["disabled"],
    gA = { class: "annotation-body" },
    vA = { key: 0 },
    yA = { class: "text-sm text-content" },
    mA = Dt({
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
      },
      emits: ["confirmAnnotation", "deleteAnnotation", "changeSelected", "onHighlight"],
      setup(t, { emit: e }) {
        const n = ct(),
          r = t,
          { originalAnnotation: o } = r,
          i = e;
        me(
          () => r.selected,
          (d) => {
            n.value = d;
          },
        );
        const s = (d) => {
            i("confirmAnnotation", o, d);
          },
          a = () => {
            i("deleteAnnotation", o);
          },
          l = () => {
            const d = o.type;
            return `--text-color-custom:${gh[d]}`;
          },
          c = (d) => {
            (n.value = d === n.value ? null : d), i("changeSelected", o, d);
          },
          u = () => {
            i("onHighlight", r.duplicates);
          };
        return (d, f) => (
          L(),
          K(
            "div",
            { class: Nt(["grid gap-2 ", { "grid-cols-1": !d.showMetadata, "grid-cols-2": d.showMetadata }]) },
            [
              $(
                "div",
                {
                  class: Nt([
                    "card border rounded-md w-full",
                    { "border-black": d.highlight, shadow: d.highlight, "opacity-20": d.disabled },
                  ]),
                },
                [
                  $("div", cA, [
                    d.error ? (L(), K("div", uA, "Annotatie niet bewaard, probeer opnieuw.")) : $t("", !0),
                    $("div", fA, [
                      $("div", dA, [
                        $(
                          "div",
                          { class: "badge badge-outline badge-sm text-color-custom", style: Ze(l()) },
                          bt(G(o).type),
                          5,
                        ),
                        d.duplicates.length > 1
                          ? (L(),
                            K(
                              "div",
                              {
                                key: 0,
                                class: "badge badge-sm badge-warning cursor-pointer",
                                onClick: f[0] || (f[0] = (h) => u()),
                              },
                              " Duplicaat? (" + bt(G(o).id) + ") ",
                              1,
                            ))
                          : $t("", !0),
                      ]),
                      $("div", hA, [
                        $(
                          "button",
                          {
                            disabled: d.disabled,
                            class: "btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left",
                            "data-tip": "Verwijder annotatie",
                            onClick: f[1] || (f[1] = (h) => a()),
                          },
                          [st(G(ZS))],
                          8,
                          pA,
                        ),
                      ]),
                    ]),
                    $("div", null, [
                      $("div", gA, [
                        d.annotation
                          ? (L(),
                            $n(
                              wu,
                              {
                                key: 0,
                                annotation: d.annotation,
                                tip: "Bewaar gewijzigde annotatie",
                                "selected-annotation": n.value === "modified",
                                disabled: d.disabled,
                                "text-lines": d.textLines,
                                onChangeSelected: f[2] || (f[2] = (h) => c("modified")),
                                onConfirmAnnotation: f[3] || (f[3] = (h) => s("modified")),
                              },
                              null,
                              8,
                              ["annotation", "selected-annotation", "disabled", "text-lines"],
                            ))
                          : $t("", !0),
                        f[6] || (f[6] = $("hr", null, null, -1)),
                        st(
                          wu,
                          {
                            annotation: G(o),
                            tip: "Bewaar originele annotatie",
                            "selected-annotation": n.value === "original",
                            disabled: d.disabled,
                            "text-lines": d.textLines,
                            onChangeSelected: f[4] || (f[4] = (h) => c("original")),
                            onConfirmAnnotation: f[5] || (f[5] = (h) => s("original")),
                          },
                          null,
                          8,
                          ["annotation", "selected-annotation", "disabled", "text-lines"],
                        ),
                      ]),
                      $("div", null, [
                        $("ul", null, [
                          (L(!0),
                          K(
                            ut,
                            null,
                            Qt(d.appliedRules, (h) => (L(), K("li", { class: "badge badge-xs", key: h }, bt(h), 1))),
                            128,
                          )),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
                2,
              ),
              d.showMetadata
                ? (L(),
                  K("div", vA, [
                    f[7] || (f[7] = $("strong", { class: "underline" }, "Metadata", -1)),
                    $("ul", yA, [
                      (L(!0),
                      K(
                        ut,
                        null,
                        Qt(
                          G(o).properties,
                          (h) => (
                            L(),
                            K("li", { key: h.id_name }, [
                              $("strong", null, bt(h.label) + ":", 1),
                              Er(" " + bt(h.name), 1),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]))
                : $t("", !0),
            ],
            2,
          )
        );
      },
    });
  function bA(t) {
    return xs() ? (sf(t), !0) : !1;
  }
  function yh(t) {
    return typeof t == "function" ? t() : G(t);
  }
  const _A = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const wA = (t) => t != null,
    Jr = () => {};
  function jn(t, e, n) {
    let r;
    kt(n) ? (r = { evaluating: n }) : (r = {});
    const { lazy: o = !1, evaluating: i = void 0, shallow: s = !0, onError: a = Jr } = r,
      l = ct(!o),
      c = s ? Sf(e) : ct(e);
    let u = 0;
    return (
      Zf(async (d) => {
        if (!l.value) return;
        u++;
        const f = u;
        let h = !1;
        i &&
          Promise.resolve().then(() => {
            i.value = !0;
          });
        try {
          const v = await t((m) => {
            d(() => {
              i && (i.value = !1), h || m();
            });
          });
          f === u && (c.value = v);
        } catch (v) {
          a(v);
        } finally {
          i && f === u && (i.value = !1), (h = !0);
        }
      }),
      o ? rt(() => ((l.value = !0), c.value)) : c
    );
  }
  const xA = _A ? window : void 0;
  function Li(t) {
    var e;
    const n = yh(t);
    return (e = n == null ? void 0 : n.$el) != null ? e : n;
  }
  function SA() {
    const t = ct(!1),
      e = zs();
    return (
      e &&
        Ns(() => {
          t.value = !0;
        }, e),
      t
    );
  }
  function AA(t) {
    const e = SA();
    return rt(() => (e.value, !!t()));
  }
  function EA(t, e, n = {}) {
    const { root: r, rootMargin: o = "0px", threshold: i = 0, window: s = xA, immediate: a = !0 } = n,
      l = AA(() => s && "IntersectionObserver" in s),
      c = rt(() => {
        const v = yh(t);
        return (Array.isArray(v) ? v : [v]).map(Li).filter(wA);
      });
    let u = Jr;
    const d = ct(a),
      f = l.value
        ? me(
            () => [c.value, Li(r), d.value],
            ([v, m]) => {
              if ((u(), !d.value || !v.length)) return;
              const w = new IntersectionObserver(e, { root: Li(m), rootMargin: o, threshold: i });
              v.forEach((b) => b && w.observe(b)),
                (u = () => {
                  w.disconnect(), (u = Jr);
                });
            },
            { immediate: a, flush: "post" },
          )
        : Jr,
      h = () => {
        u(), f(), (d.value = !1);
      };
    return (
      bA(h),
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
  function OA(t = () => {}) {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(t)
      : setTimeout(() => {
          bo(t);
        }, 300);
  }
  const TA = {
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
      let o, i;
      const { stop: s } = EA(
        n,
        ([{ isIntersecting: a }]) => {
          a
            ? (clearTimeout(o),
              (i = setTimeout(() => (e.value = !0), t.unrender ? 200 : 0)),
              (e.value = !0),
              t.unrender || s())
            : t.unrender &&
              (clearTimeout(i),
              (o = setTimeout(() => {
                (r.value = n.value.clientHeight), (e.value = !1);
              }, t.unrenderDelay)));
        },
        { rootMargin: "600px" },
      );
      return (
        t.renderOnIdle &&
          OA(() => {
            (e.value = !0), t.unrender || s();
          }),
        { targetEl: n, shouldRender: e, fixedMinHeight: r }
      );
    },
  };
  function jA(t, e, n, r, o, i) {
    return (
      L(),
      K(
        "div",
        { ref: "targetEl", style: Ze(`min-height:${r.fixedMinHeight ? r.fixedMinHeight : n.minHeight}px`) },
        [r.shouldRender ? ke(t.$slots, "default", { key: 0 }) : $t("", !0)],
        4,
      )
    );
  }
  const CA = ph(TA, [["render", jA]]),
    PA = { class: "flex flex-col gap-3 h-full" },
    RA = { class: "card-title flex justify-between" },
    kA = { class: "gap-2 text-right" },
    $A = { class: "flex flex-col gap-2 overflow-auto" },
    IA = ["data-annotation"],
    MA = Dt({
      __name: "AnnotationEditList",
      props: { modifiedAnnotations: {}, textLines: {}, highlightAnnotationIds: {}, showMetadata: { type: Boolean } },
      emits: ["confirmAnnotations", "confirmAnnotation", "deleteAnnotation"],
      setup(t, { emit: e }) {
        const n = ct([]),
          r = ct(new Map());
        me(
          () => t.highlightAnnotationIds,
          (d) => {
            u(d);
          },
        );
        const o = function (d, f) {
            f ? r.value.set(d.id, f) : r.value.delete(d.id);
          },
          i = (d) => {
            t.modifiedAnnotations.forEach((f) => {
              o(f.original, d);
            });
          },
          s = e,
          a = () => {
            s("confirmAnnotations", r.value);
          },
          l = (d, f) => {
            s("confirmAnnotation", d.id, f);
          },
          c = (d) => {
            s("deleteAnnotation", d.id);
          },
          u = (d) => {
            n.value = d;
          };
        return (d, f) => (
          L(),
          K("div", PA, [
            $("div", RA, [
              f[2] || (f[2] = $("div", { class: "flex-grow" }, "Aangepaste Annotaties", -1)),
              $("div", kA, [
                $(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[0] || (f[0] = (h) => i("modified")) },
                  " Selecteer alle aangepaste ",
                ),
                $(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[1] || (f[1] = (h) => i("original")) },
                  " Selecteer alle originele ",
                ),
              ]),
            ]),
            $("ul", $A, [
              (L(!0),
              K(
                ut,
                null,
                Qt(
                  d.modifiedAnnotations,
                  (h) => (
                    L(),
                    K(
                      "li",
                      { key: h.id, "data-annotation": h.id, ref_for: !0, ref: `annotation-${h.id}` },
                      [
                        st(
                          CA,
                          null,
                          {
                            default: Ie(() => [
                              st(
                                mA,
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
                                  onConfirmAnnotation: l,
                                  onDeleteAnnotation: c,
                                  onChangeSelected: o,
                                  onOnHighlight: u,
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
                                ],
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        ),
                      ],
                      8,
                      IA,
                    )
                  ),
                ),
                128,
              )),
            ]),
            f[3] || (f[3] = $("hr", null, null, -1)),
            $("div", { class: "flex justify-end" }, [$("button", { class: "btn", onClick: a }, "Bevestig Selectie")]),
          ])
        );
      },
    });
  function NA(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function Br(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var mh = { exports: {} };
  (function (t, e) {
    (function (n) {
      t.exports = n();
    })(function () {
      return (function () {
        function n(r, o, i) {
          function s(c, u) {
            if (!o[c]) {
              if (!r[c]) {
                var d = typeof Br == "function" && Br;
                if (!u && d) return d(c, !0);
                if (a) return a(c, !0);
                var f = new Error("Cannot find module '" + c + "'");
                throw ((f.code = "MODULE_NOT_FOUND"), f);
              }
              var h = (o[c] = { exports: {} });
              r[c][0].call(
                h.exports,
                function (v) {
                  var m = r[c][1][v];
                  return s(m || v);
                },
                h,
                h.exports,
                n,
                r,
                o,
                i,
              );
            }
            return o[c].exports;
          }
          for (var a = typeof Br == "function" && Br, l = 0; l < i.length; l++) s(i[l]);
          return s;
        }
        return n;
      })()(
        {
          1: [
            function (n, r, o) {
              function i(I, p, A) {
                return (p = v(p)), s(I, d() ? Reflect.construct(p, A || [], v(I).constructor) : p.apply(I, A));
              }
              function s(I, p) {
                if (p && (m(p) === "object" || typeof p == "function")) return p;
                if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                return a(I);
              }
              function a(I) {
                if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return I;
              }
              function l(I, p) {
                if (typeof p != "function" && p !== null)
                  throw new TypeError("Super expression must either be null or a function");
                (I.prototype = Object.create(p && p.prototype, {
                  constructor: { value: I, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(I, "prototype", { writable: !1 }),
                  p && h(I, p);
              }
              function c(I) {
                var p = typeof Map == "function" ? new Map() : void 0;
                return (c = function (A) {
                  if (A === null || !f(A)) return A;
                  if (typeof A != "function") throw new TypeError("Super expression must either be null or a function");
                  if (p !== void 0) {
                    if (p.has(A)) return p.get(A);
                    p.set(A, P);
                  }
                  function P() {
                    return u(A, arguments, v(this).constructor);
                  }
                  return (
                    (P.prototype = Object.create(A.prototype, {
                      constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    h(P, A)
                  );
                })(I);
              }
              function u(I, p, A) {
                if (d()) return Reflect.construct.apply(null, arguments);
                var P = [null];
                P.push.apply(P, p);
                var Z = new (I.bind.apply(I, P))();
                return A && h(Z, A.prototype), Z;
              }
              function d() {
                try {
                  var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch {}
                return (d = function () {
                  return !!I;
                })();
              }
              function f(I) {
                try {
                  return Function.toString.call(I).indexOf("[native code]") !== -1;
                } catch {
                  return typeof I == "function";
                }
              }
              function h(I, p) {
                return (h = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (A, P) {
                      return (A.__proto__ = P), A;
                    })(I, p);
              }
              function v(I) {
                return (v = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (p) {
                      return p.__proto__ || Object.getPrototypeOf(p);
                    })(I);
              }
              function m(I) {
                return (m =
                  typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                    ? function (p) {
                        return typeof p;
                      }
                    : function (p) {
                        return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype
                          ? "symbol"
                          : typeof p;
                      })(I);
              }
              function w(I, p) {
                if (!(I instanceof p)) throw new TypeError("Cannot call a class as a function");
              }
              function b(I, p) {
                for (var A = 0; A < p.length; A++) {
                  var P = p[A];
                  (P.enumerable = P.enumerable || !1),
                    (P.configurable = !0),
                    "value" in P && (P.writable = !0),
                    Object.defineProperty(I, x(P.key), P);
                }
              }
              function _(I, p, A) {
                return p && b(I.prototype, p), Object.defineProperty(I, "prototype", { writable: !1 }), I;
              }
              function x(I) {
                var p = S(I, "string");
                return m(p) == "symbol" ? p : String(p);
              }
              function S(I, p) {
                if (m(I) != "object" || !I) return I;
                var A = I[Symbol.toPrimitive];
                if (A !== void 0) {
                  var P = A.call(I, p);
                  if (m(P) != "object") return P;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(I);
              }
              var C = function (I, p) {
                  var A = I.length,
                    P = p - 20;
                  P < 0 && (P = 0);
                  var Z = p + 20;
                  Z > A && (Z = A);
                  var tt = function (V) {
                      return V.charCodeAt(0).toString(16).toUpperCase();
                    },
                    H = function (V, it, Ut) {
                      return V.substr(it, Ut)
                        .replace(/\\/g, "\\\\")
                        .replace(/\x08/g, "\\b")
                        .replace(/\t/g, "\\t")
                        .replace(/\n/g, "\\n")
                        .replace(/\f/g, "\\f")
                        .replace(/\r/g, "\\r")
                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (Pt) {
                          return "\\x0" + tt(Pt);
                        })
                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (Pt) {
                          return "\\x" + tt(Pt);
                        })
                        .replace(/[\u0100-\u0FFF]/g, function (Pt) {
                          return "\\u0" + tt(Pt);
                        })
                        .replace(/[\u1000-\uFFFF]/g, function (Pt) {
                          return "\\u" + tt(Pt);
                        });
                    };
                  return {
                    prologTrunc: P > 0,
                    prologText: H(I, P, p - P),
                    tokenText: H(I, p, 1),
                    epilogText: H(I, p + 1, Z - (p + 1)),
                    epilogTrunc: Z < A,
                  };
                },
                z = (function () {
                  function I(p, A, P) {
                    var Z = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                      tt = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                      H = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                    w(this, I),
                      (this.type = p),
                      (this.value = A),
                      (this.text = P),
                      (this.pos = Z),
                      (this.line = tt),
                      (this.column = H);
                  }
                  return (
                    _(I, [
                      {
                        key: "toString",
                        value: function () {
                          var p =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : function (A, P) {
                                  return P;
                                };
                          return (
                            "".concat(p("type", this.type), " ") +
                            "(value: ".concat(p("value", JSON.stringify(this.value)), ", ") +
                            "text: ".concat(p("text", JSON.stringify(this.text)), ", ") +
                            "pos: ".concat(p("pos", this.pos), ", ") +
                            "line: ".concat(p("line", this.line), ", ") +
                            "column: ".concat(p("column", this.column), ")")
                          );
                        },
                      },
                      {
                        key: "isA",
                        value: function (p, A) {
                          return p === this.type && (arguments.length !== 2 || A === this.value);
                        },
                      },
                    ]),
                    I
                  );
                })(),
                j = (function (I) {
                  function p(A, P, Z, tt, H) {
                    var V;
                    return (
                      w(this, p),
                      ((V = i(this, p, [A])).name = "ParsingError"),
                      (V.message = A),
                      (V.pos = P),
                      (V.line = Z),
                      (V.column = tt),
                      (V.input = H),
                      V
                    );
                  }
                  return (
                    l(p, c(Error)),
                    _(p, [
                      {
                        key: "toString",
                        value: function () {
                          for (
                            var A = C(this.input, this.pos),
                              P = "line ".concat(this.line, " (column ").concat(this.column, "): "),
                              Z = "",
                              tt = 0;
                            tt < P.length + A.prologText.length;
                            tt++
                          )
                            Z += " ";
                          return (
                            "Parsing Error: " +
                            this.message +
                            `
` +
                            P +
                            A.prologText +
                            A.tokenText +
                            A.epilogText +
                            `
` +
                            Z +
                            "^"
                          );
                        },
                      },
                    ]),
                    p
                  );
                })(),
                N = (function () {
                  function I(p) {
                    w(this, I),
                      (this._tokenizr = p),
                      (this._data = {}),
                      (this._repeat = !1),
                      (this._reject = !1),
                      (this._ignore = !1),
                      (this._match = null);
                  }
                  return (
                    _(I, [
                      {
                        key: "data",
                        value: function (p, A) {
                          var P = this._data[p];
                          return arguments.length === 2 && (this._data[p] = A), P;
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
                          var p;
                          return (p = this._tokenizr).push.apply(p, arguments), this;
                        },
                      },
                      {
                        key: "pop",
                        value: function () {
                          var p;
                          return (p = this._tokenizr).pop.apply(p, arguments);
                        },
                      },
                      {
                        key: "state",
                        value: function () {
                          var p, A;
                          return arguments.length > 0
                            ? ((A = this._tokenizr).state.apply(A, arguments), this)
                            : (p = this._tokenizr).state.apply(p, arguments);
                        },
                      },
                      {
                        key: "tag",
                        value: function () {
                          var p;
                          return (p = this._tokenizr).tag.apply(p, arguments), this;
                        },
                      },
                      {
                        key: "tagged",
                        value: function () {
                          var p;
                          return (p = this._tokenizr).tagged.apply(p, arguments);
                        },
                      },
                      {
                        key: "untag",
                        value: function () {
                          var p;
                          return (p = this._tokenizr).untag.apply(p, arguments), this;
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
                        value: function (p, A) {
                          return (
                            arguments.length < 2 && (A = this._match[0]),
                            this._tokenizr._log(
                              "    ACCEPT: type: ".concat(p, ", value: ") +
                                ""
                                  .concat(JSON.stringify(A), " (")
                                  .concat(m(A), '), text: "')
                                  .concat(this._match[0], '"'),
                            ),
                            this._tokenizr._pending.push(
                              new z(
                                p,
                                A,
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
                J = (function () {
                  function I() {
                    w(this, I),
                      (this._before = null),
                      (this._after = null),
                      (this._finish = null),
                      (this._rules = []),
                      (this._debug = !1),
                      this.reset();
                  }
                  return (
                    _(I, [
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
                            (this._ctx = new N(this)),
                            this
                          );
                        },
                      },
                      {
                        key: "error",
                        value: function (p) {
                          return new j(p, this._pos, this._line, this._column, this._input);
                        },
                      },
                      {
                        key: "debug",
                        value: function (p) {
                          return (this._debug = p), this;
                        },
                      },
                      {
                        key: "_log",
                        value: function (p) {
                          this._debug && console.log("tokenizr: ".concat(p));
                        },
                      },
                      {
                        key: "input",
                        value: function (p) {
                          if (typeof p != "string") throw new Error('parameter "input" not a String');
                          return this.reset(), (this._input = p), (this._len = p.length), this;
                        },
                      },
                      {
                        key: "push",
                        value: function (p) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof p != "string") throw new Error('parameter "state" not a String');
                          return (
                            this._log(
                              "    STATE (PUSH): " +
                                "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                "new: <".concat(p, ">"),
                            ),
                            this._state.push(p),
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
                        value: function (p) {
                          if (arguments.length === 1) {
                            if (typeof p != "string") throw new Error('parameter "state" not a String');
                            return (
                              this._log(
                                "    STATE (SET): " +
                                  "old: <".concat(this._state[this._state.length - 1], ">, ") +
                                  "new: <".concat(p, ">"),
                              ),
                              (this._state[this._state.length - 1] = p),
                              this
                            );
                          }
                          if (arguments.length === 0) return this._state[this._state.length - 1];
                          throw new Error("invalid number of arguments");
                        },
                      },
                      {
                        key: "tag",
                        value: function (p) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof p != "string") throw new Error('parameter "tag" not a String');
                          return this._log("    TAG (ADD): ".concat(p)), (this._tag[p] = !0), this;
                        },
                      },
                      {
                        key: "tagged",
                        value: function (p) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof p != "string") throw new Error('parameter "tag" not a String');
                          return this._tag[p] === !0;
                        },
                      },
                      {
                        key: "untag",
                        value: function (p) {
                          if (arguments.length !== 1) throw new Error("invalid number of arguments");
                          if (typeof p != "string") throw new Error('parameter "tag" not a String');
                          return this._log("    TAG (DEL): ".concat(p)), delete this._tag[p], this;
                        },
                      },
                      {
                        key: "before",
                        value: function (p) {
                          return (this._before = p), this;
                        },
                      },
                      {
                        key: "after",
                        value: function (p) {
                          return (this._after = p), this;
                        },
                      },
                      {
                        key: "finish",
                        value: function (p) {
                          return (this._finish = p), this;
                        },
                      },
                      {
                        key: "rule",
                        value: function (p, A, P) {
                          var Z = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                          if (arguments.length === 2 && typeof A == "function") {
                            var tt = [p, A];
                            (A = tt[0]), (P = tt[1]), (p = "*");
                          } else if (arguments.length === 3 && typeof A == "function") {
                            var H = [p, A, P];
                            (A = H[0]), (P = H[1]), (Z = H[2]), (p = "*");
                          }
                          if (typeof p != "string") throw new Error('parameter "state" not a String');
                          if (!(m(A) === "object" && A instanceof RegExp))
                            throw new Error('parameter "pattern" not a RegExp');
                          if (typeof P != "function") throw new Error('parameter "action" not a Function');
                          if (typeof Z != "string") throw new Error('parameter "name" not a String');
                          p = p.split(/\s*,\s*/g).map(function (it) {
                            var Ut = it.split(/\s+/g),
                              Pt = Ut.filter(function (_t) {
                                return _t.match(/^#/) === null;
                              }),
                              qt = Ut.filter(function (_t) {
                                return _t.match(/^#/) !== null;
                              }).map(function (_t) {
                                return _t.replace(/^#/, "");
                              });
                            if (Pt.length !== 1) throw new Error("exactly one state required");
                            return { state: Pt[0], tags: qt };
                          });
                          var V = "g";
                          try {
                            typeof new RegExp("", "y").sticky == "boolean" && (V = "y");
                          } catch {}
                          return (
                            typeof A.multiline == "boolean" && A.multiline && (V += "m"),
                            typeof A.dotAll == "boolean" && A.dotAll && (V += "s"),
                            typeof A.ignoreCase == "boolean" && A.ignoreCase && (V += "i"),
                            typeof A.unicode == "boolean" && A.unicode && (V += "u"),
                            (A = new RegExp(A.source, V)),
                            this._log("rule: configure rule (state: ".concat(p, ", pattern: ").concat(A.source, ")")),
                            this._rules.push({ state: p, pattern: A, action: P, name: Z }),
                            this
                          );
                        },
                      },
                      {
                        key: "_progress",
                        value: function (p, A) {
                          for (var P = this._line, Z = this._column, tt = this._input, H = p; H < A; H++) {
                            var V = tt.charAt(H);
                            V === "\r"
                              ? (this._column = 1)
                              : V ===
                                  `
`
                                ? (this._line++, (this._column = 1))
                                : V === "	"
                                  ? (this._column += 8 - (this._column % 8))
                                  : this._column++;
                          }
                          this._log(
                            "    PROGRESS: characters: ".concat(A - p, ", ") +
                              "from: <line ".concat(P, ", column ").concat(Z, ">, ") +
                              "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                          );
                        },
                      },
                      {
                        key: "_tokenize",
                        value: function () {
                          var p = this,
                            A = function () {
                              p._eof ||
                                (p._finish !== null && p._finish.call(p._ctx, p._ctx),
                                (p._eof = !0),
                                p._pending.push(new z("EOF", "", "", p._pos, p._line, p._column)));
                            };
                          if (!(this._stopped || this._pos >= this._len)) {
                            for (var P = !0; P; ) {
                              if (((P = !1), this._debug)) {
                                var Z = C(this._input, this._pos),
                                  tt = Object.keys(this._tag)
                                    .map(function (Vt) {
                                      return "#".concat(Vt);
                                    })
                                    .join(" ");
                                this._log(
                                  "INPUT: state: <"
                                    .concat(this._state[this._state.length - 1], ">, tags: <")
                                    .concat(tt, ">, text: ") +
                                    (Z.prologTrunc ? "..." : '"') +
                                    "".concat(Z.prologText, "<").concat(Z.tokenText, ">").concat(Z.epilogText) +
                                    (Z.epilogTrunc ? "..." : '"') +
                                    ", at: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                                );
                              }
                              for (var H = 0; H < this._rules.length; H++) {
                                if (this._debug) {
                                  var V = this._rules[H].state
                                    .map(function (Vt) {
                                      var Ee = Vt.state;
                                      return (
                                        Vt.tags.length > 0 &&
                                          (Ee +=
                                            " " +
                                            Vt.tags
                                              .map(function (Sn) {
                                                return "#".concat(Sn);
                                              })
                                              .join(" ")),
                                        Ee
                                      );
                                    })
                                    .join(", ");
                                  this._log(
                                    "  RULE: state(s): <".concat(V, ">, ") +
                                      "pattern: ".concat(this._rules[H].pattern.source),
                                  );
                                }
                                var it = !1,
                                  Ut = this._rules[H].state.map(function (Vt) {
                                    return Vt.state;
                                  }),
                                  Pt = Ut.indexOf("*");
                                if ((Pt < 0 && (Pt = Ut.indexOf(this._state[this._state.length - 1])), Pt >= 0)) {
                                  it = !0;
                                  var qt = this._rules[H].state[Pt].tags;
                                  (qt = qt.filter(function (Vt) {
                                    return !p._tag[Vt];
                                  })).length > 0 && (it = !1);
                                }
                                if (it) {
                                  this._rules[H].pattern.lastIndex = this._pos;
                                  var _t = this._rules[H].pattern.exec(this._input);
                                  if (
                                    ((this._rules[H].pattern.lastIndex = this._pos),
                                    (_t = this._rules[H].pattern.exec(this._input)) !== null && _t.index === this._pos)
                                  ) {
                                    if (
                                      (this._debug && this._log("    MATCHED: " + JSON.stringify(_t)),
                                      (this._ctx._match = _t),
                                      (this._ctx._repeat = !1),
                                      (this._ctx._reject = !1),
                                      (this._ctx._ignore = !1),
                                      this._before !== null &&
                                        this._before.call(this._ctx, this._ctx, _t, this._rules[H]),
                                      this._rules[H].action.call(this._ctx, this._ctx, _t),
                                      this._after !== null &&
                                        this._after.call(this._ctx, this._ctx, _t, this._rules[H]),
                                      this._ctx._reject)
                                    )
                                      continue;
                                    if (this._ctx._repeat) {
                                      P = !0;
                                      break;
                                    }
                                    if (this._ctx._ignore) {
                                      if (
                                        (this._progress(this._pos, this._rules[H].pattern.lastIndex),
                                        (this._pos = this._rules[H].pattern.lastIndex),
                                        this._pos >= this._len)
                                      )
                                        return void A();
                                      P = !0;
                                      break;
                                    }
                                    if (this._pending.length > 0)
                                      return (
                                        this._progress(this._pos, this._rules[H].pattern.lastIndex),
                                        (this._pos = this._rules[H].pattern.lastIndex),
                                        void (this._pos >= this._len && A())
                                      );
                                    throw new Error(
                                      'action of pattern "' +
                                        this._rules[H].pattern.source +
                                        '" neither rejected nor accepted any token(s)',
                                    );
                                  }
                                }
                              }
                            }
                            throw this.error("token not recognized");
                          }
                          A();
                        },
                      },
                      {
                        key: "token",
                        value: function () {
                          if ((this._pending.length === 0 && this._tokenize(), this._pending.length > 0)) {
                            var p = this._pending.shift();
                            return (
                              this._transaction.length > 0 && this._transaction[0].push(p),
                              this._log("TOKEN: ".concat(p.toString())),
                              p
                            );
                          }
                          return null;
                        },
                      },
                      {
                        key: "tokens",
                        value: function () {
                          for (var p, A = []; (p = this.token()) !== null; ) A.push(p);
                          return A;
                        },
                      },
                      {
                        key: "peek",
                        value: function (p) {
                          if ((p === void 0 && (p = 0), p >= this._pending.length)) {
                            this._pending.length === 0 && this._tokenize();
                            for (var A = 0; A < p - this._pending.length; A++) this._tokenize();
                          }
                          if (p >= this._pending.length)
                            throw new Error("not enough tokens available for peek operation");
                          return this._log("PEEK: ".concat(this._pending[p].toString())), this._pending[p];
                        },
                      },
                      {
                        key: "skip",
                        value: function (p) {
                          p === void 0 && (p = 1);
                          for (var A = 0; A < this._pending.length + p; A++) this._tokenize();
                          if (p > this._pending.length)
                            throw new Error("not enough tokens available for skip operation");
                          for (; p-- > 0; ) this.token();
                          return this;
                        },
                      },
                      {
                        key: "consume",
                        value: function (p, A) {
                          for (var P = this, Z = 0; Z < this._pending.length + 1; Z++) this._tokenize();
                          if (this._pending.length === 0)
                            throw new Error("not enough tokens available for consume operation");
                          var tt = this.token();
                          this._log("CONSUME: ".concat(tt.toString()));
                          var H = function () {
                            throw new j(
                              "expected: <type: "
                                .concat(p, ", value: ")
                                .concat(JSON.stringify(A), " (")
                                .concat(m(A), ")>, ") +
                                "found: <type: "
                                  .concat(tt.type, ", value: ")
                                  .concat(JSON.stringify(tt.value), " (")
                                  .concat(m(tt.value), ")>"),
                              tt.pos,
                              tt.line,
                              tt.column,
                              P._input,
                            );
                          };
                          return (
                            arguments.length !== 2 || tt.isA(p, A) ? tt.isA(p) || H() : H(JSON.stringify(A), m(A)), tt
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
                          var p = this._transaction.shift();
                          return (
                            this._transaction.length > 0 && (this._transaction[0] = this._transaction[0].concat(p)),
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
                          var p = this._transaction.shift();
                          return (
                            (this._pending = p.concat(this._pending)),
                            this._log("ROLLBACK: level ".concat(this._transaction.length)),
                            this
                          );
                        },
                      },
                      {
                        key: "alternatives",
                        value: function () {
                          for (var p = null, A = [], P = arguments.length, Z = new Array(P), tt = 0; tt < P; tt++)
                            Z[tt] = arguments[tt];
                          for (var H = 0; H < Z.length; H++)
                            try {
                              this.begin(), (p = Z[H].call(this)), this.commit();
                              break;
                            } catch (V) {
                              this._log("EXCEPTION: ".concat(V.toString())),
                                A.push({ ex: V, depth: this.depth() }),
                                this.rollback();
                              continue;
                            }
                          if (p === null && A.length > 0)
                            throw (A = A.sort(function (V, it) {
                              return V.depth - it.depth;
                            }))[0].ex;
                          return p;
                        },
                      },
                    ]),
                    I
                  );
                })();
              (J.Token = z), (J.ParsingError = j), (J.ActionContext = N), (r.exports = J);
            },
            {},
          ],
        },
        {},
        [1],
      )(1);
    });
  })(mh);
  var FA = mh.exports;
  const DA = NA(FA);
  function bh(t) {
    const e = new DA();
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
  function LA(t, e) {
    if (!t || !e || typeof t != "string" || typeof e != "string" || t.length == 0 || e.length == 0) return [];
    let n = [],
      r = t.indexOf(e, 0);
    for (; r != -1; ) n.push(r), (r = t.indexOf(e, r + 1));
    return n;
  }
  function zA(t, e, n, r, o) {
    const i = r - n;
    i != e.length &&
      console.log("Warning: annotation text length", e.length, ": ", e, " and annotation length do not match", i);
    let a = LA(t, e).filter((l) => Math.abs(l - n) <= o);
    return a.length == 1 ? { start: a[0], end: a[0] + e.length - 1, modified: !0 } : { start: n, end: r, modified: !1 };
  }
  function UA(t, e, n, r) {
    const o = r,
      i = {},
      s = {};
    bh(t).forEach((f) => {
      (i[f.pos] = f), (s[f.pos + f.value.length - 1] = f);
    });
    let a = -1,
      l = -1;
    for (let f = 0; f < o; f++)
      a == -1 && i[e + f] && (a = e + f),
        a == -1 && i[e - f] && (a = e - f),
        l == -1 && s[n + f] && (l = n + f),
        l == -1 && s[n - f] && (l = n - f);
    let c = !0,
      u = !0,
      d = !0;
    return (
      a == -1 && ((a = e), (u = !1)), l == -1 && ((l = n), (d = !1)), (c = u || d), { start: a, end: l, modified: c }
    );
  }
  const BA = (t) => {
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
    const i = t.split(`
`),
      s = [];
    for (let a = 0; a < i.length; a++) {
      r = n + (i[a].length - 1);
      let l = i[a].match(e);
      l ? (o = l[0]) : (o = "");
      let c = { gutter: o, text: i[a].replace(e, ""), start: n + o.length, end: r };
      s.push(c), (n = r + 2), (s[a].end = Math.max(s[a].end, s[a].start));
    }
    return s;
  };
  class VA {
    constructor(e) {
      ft(this, "mapStartCharIndexToToken", {});
      ft(this, "mapStopCharIndexToToken", {});
      (this.text = e),
        bh(e).forEach((n) => {
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
  var _h = typeof global == "object" && global && global.Object === Object && global,
    HA = typeof self == "object" && self && self.Object === Object && self,
    Ae = _h || HA || Function("return this")(),
    xe = Ae.Symbol,
    wh = Object.prototype,
    KA = wh.hasOwnProperty,
    WA = wh.toString,
    Yn = xe ? xe.toStringTag : void 0;
  function qA(t) {
    var e = KA.call(t, Yn),
      n = t[Yn];
    try {
      t[Yn] = void 0;
      var r = !0;
    } catch {}
    var o = WA.call(t);
    return r && (e ? (t[Yn] = n) : delete t[Yn]), o;
  }
  var GA = Object.prototype,
    JA = GA.toString;
  function ZA(t) {
    return JA.call(t);
  }
  var YA = "[object Null]",
    QA = "[object Undefined]",
    xu = xe ? xe.toStringTag : void 0;
  function Bn(t) {
    return t == null ? (t === void 0 ? QA : YA) : xu && xu in Object(t) ? qA(t) : ZA(t);
  }
  function Vn(t) {
    return t != null && typeof t == "object";
  }
  var XA = "[object Symbol]";
  function oa(t) {
    return typeof t == "symbol" || (Vn(t) && Bn(t) == XA);
  }
  function tE(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var tn = Array.isArray,
    eE = 1 / 0,
    Su = xe ? xe.prototype : void 0,
    Au = Su ? Su.toString : void 0;
  function xh(t) {
    if (typeof t == "string") return t;
    if (tn(t)) return tE(t, xh) + "";
    if (oa(t)) return Au ? Au.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -eE ? "-0" : e;
  }
  function hn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function nE(t) {
    return t;
  }
  var rE = "[object AsyncFunction]",
    oE = "[object Function]",
    iE = "[object GeneratorFunction]",
    sE = "[object Proxy]";
  function Sh(t) {
    if (!hn(t)) return !1;
    var e = Bn(t);
    return e == oE || e == iE || e == rE || e == sE;
  }
  var zi = Ae["__core-js_shared__"],
    Eu = (function () {
      var t = /[^.]+$/.exec((zi && zi.keys && zi.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function aE(t) {
    return !!Eu && Eu in t;
  }
  var lE = Function.prototype,
    cE = lE.toString;
  function wn(t) {
    if (t != null) {
      try {
        return cE.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var uE = /[\\^$.*+?()[\]{}|]/g,
    fE = /^\[object .+?Constructor\]$/,
    dE = Function.prototype,
    hE = Object.prototype,
    pE = dE.toString,
    gE = hE.hasOwnProperty,
    vE = RegExp(
      "^" +
        pE
          .call(gE)
          .replace(uE, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function yE(t) {
    if (!hn(t) || aE(t)) return !1;
    var e = Sh(t) ? vE : fE;
    return e.test(wn(t));
  }
  function mE(t, e) {
    return t == null ? void 0 : t[e];
  }
  function xn(t, e) {
    var n = mE(t, e);
    return yE(n) ? n : void 0;
  }
  var ps = xn(Ae, "WeakMap"),
    Ou = Object.create,
    bE = (function () {
      function t() {}
      return function (e) {
        if (!hn(e)) return {};
        if (Ou) return Ou(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function _E(t, e, n) {
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
  function wE(t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
    return e;
  }
  var xE = 800,
    SE = 16,
    AE = Date.now;
  function EE(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = AE(),
        o = SE - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= xE) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function OE(t) {
    return function () {
      return t;
    };
  }
  var lo = (function () {
      try {
        var t = xn(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    TE = lo
      ? function (t, e) {
          return lo(t, "toString", { configurable: !0, enumerable: !1, value: OE(e), writable: !0 });
        }
      : nE,
    jE = EE(TE);
  function CE(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var PE = 9007199254740991,
    RE = /^(?:0|[1-9]\d*)$/;
  function ia(t, e) {
    var n = typeof t;
    return (e = e ?? PE), !!e && (n == "number" || (n != "symbol" && RE.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function Ah(t, e, n) {
    e == "__proto__" && lo ? lo(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function Eh(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var kE = Object.prototype,
    $E = kE.hasOwnProperty;
  function sa(t, e, n) {
    var r = t[e];
    (!($E.call(t, e) && Eh(r, n)) || (n === void 0 && !(e in t))) && Ah(t, e, n);
  }
  function Do(t, e, n, r) {
    var o = !n;
    n || (n = {});
    for (var i = -1, s = e.length; ++i < s; ) {
      var a = e[i],
        l = void 0;
      l === void 0 && (l = t[a]), o ? Ah(n, a, l) : sa(n, a, l);
    }
    return n;
  }
  var Tu = Math.max;
  function IE(t, e, n) {
    return (
      (e = Tu(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, i = Tu(r.length - e, 0), s = Array(i); ++o < i; ) s[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(s)), _E(t, this, a);
      }
    );
  }
  var ME = 9007199254740991;
  function aa(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ME;
  }
  function Oh(t) {
    return t != null && aa(t.length) && !Sh(t);
  }
  var NE = Object.prototype;
  function la(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || NE;
    return t === n;
  }
  function FE(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var DE = "[object Arguments]";
  function ju(t) {
    return Vn(t) && Bn(t) == DE;
  }
  var Th = Object.prototype,
    LE = Th.hasOwnProperty,
    zE = Th.propertyIsEnumerable,
    ca = ju(
      (function () {
        return arguments;
      })(),
    )
      ? ju
      : function (t) {
          return Vn(t) && LE.call(t, "callee") && !zE.call(t, "callee");
        };
  function UE() {
    return !1;
  }
  var jh = typeof jt == "object" && jt && !jt.nodeType && jt,
    Cu = jh && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    BE = Cu && Cu.exports === jh,
    Pu = BE ? Ae.Buffer : void 0,
    VE = Pu ? Pu.isBuffer : void 0,
    Ch = VE || UE,
    HE = "[object Arguments]",
    KE = "[object Array]",
    WE = "[object Boolean]",
    qE = "[object Date]",
    GE = "[object Error]",
    JE = "[object Function]",
    ZE = "[object Map]",
    YE = "[object Number]",
    QE = "[object Object]",
    XE = "[object RegExp]",
    tO = "[object Set]",
    eO = "[object String]",
    nO = "[object WeakMap]",
    rO = "[object ArrayBuffer]",
    oO = "[object DataView]",
    iO = "[object Float32Array]",
    sO = "[object Float64Array]",
    aO = "[object Int8Array]",
    lO = "[object Int16Array]",
    cO = "[object Int32Array]",
    uO = "[object Uint8Array]",
    fO = "[object Uint8ClampedArray]",
    dO = "[object Uint16Array]",
    hO = "[object Uint32Array]",
    Tt = {};
  Tt[iO] = Tt[sO] = Tt[aO] = Tt[lO] = Tt[cO] = Tt[uO] = Tt[fO] = Tt[dO] = Tt[hO] = !0;
  Tt[HE] =
    Tt[KE] =
    Tt[rO] =
    Tt[WE] =
    Tt[oO] =
    Tt[qE] =
    Tt[GE] =
    Tt[JE] =
    Tt[ZE] =
    Tt[YE] =
    Tt[QE] =
    Tt[XE] =
    Tt[tO] =
    Tt[eO] =
    Tt[nO] =
      !1;
  function pO(t) {
    return Vn(t) && aa(t.length) && !!Tt[Bn(t)];
  }
  function ua(t) {
    return function (e) {
      return t(e);
    };
  }
  var Ph = typeof jt == "object" && jt && !jt.nodeType && jt,
    ur = Ph && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    gO = ur && ur.exports === Ph,
    Ui = gO && _h.process,
    Dn = (function () {
      try {
        var t = ur && ur.require && ur.require("util").types;
        return t || (Ui && Ui.binding && Ui.binding("util"));
      } catch {}
    })(),
    Ru = Dn && Dn.isTypedArray,
    vO = Ru ? ua(Ru) : pO,
    yO = Object.prototype,
    mO = yO.hasOwnProperty;
  function Rh(t, e) {
    var n = tn(t),
      r = !n && ca(t),
      o = !n && !r && Ch(t),
      i = !n && !r && !o && vO(t),
      s = n || r || o || i,
      a = s ? FE(t.length, String) : [],
      l = a.length;
    for (var c in t)
      (e || mO.call(t, c)) &&
        !(
          s &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            ia(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function kh(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var bO = kh(Object.keys, Object),
    _O = Object.prototype,
    wO = _O.hasOwnProperty;
  function xO(t) {
    if (!la(t)) return bO(t);
    var e = [];
    for (var n in Object(t)) wO.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function fa(t) {
    return Oh(t) ? Rh(t) : xO(t);
  }
  function SO(t) {
    var e = [];
    if (t != null) for (var n in Object(t)) e.push(n);
    return e;
  }
  var AO = Object.prototype,
    EO = AO.hasOwnProperty;
  function OO(t) {
    if (!hn(t)) return SO(t);
    var e = la(t),
      n = [];
    for (var r in t) (r == "constructor" && (e || !EO.call(t, r))) || n.push(r);
    return n;
  }
  function da(t) {
    return Oh(t) ? Rh(t, !0) : OO(t);
  }
  var TO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    jO = /^\w*$/;
  function CO(t, e) {
    if (tn(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || oa(t)
      ? !0
      : jO.test(t) || !TO.test(t) || (e != null && t in Object(e));
  }
  var wr = xn(Object, "create");
  function PO() {
    (this.__data__ = wr ? wr(null) : {}), (this.size = 0);
  }
  function RO(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var kO = "__lodash_hash_undefined__",
    $O = Object.prototype,
    IO = $O.hasOwnProperty;
  function MO(t) {
    var e = this.__data__;
    if (wr) {
      var n = e[t];
      return n === kO ? void 0 : n;
    }
    return IO.call(e, t) ? e[t] : void 0;
  }
  var NO = Object.prototype,
    FO = NO.hasOwnProperty;
  function DO(t) {
    var e = this.__data__;
    return wr ? e[t] !== void 0 : FO.call(e, t);
  }
  var LO = "__lodash_hash_undefined__";
  function zO(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = wr && e === void 0 ? LO : e), this;
  }
  function pn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  pn.prototype.clear = PO;
  pn.prototype.delete = RO;
  pn.prototype.get = MO;
  pn.prototype.has = DO;
  pn.prototype.set = zO;
  function UO() {
    (this.__data__ = []), (this.size = 0);
  }
  function Lo(t, e) {
    for (var n = t.length; n--; ) if (Eh(t[n][0], e)) return n;
    return -1;
  }
  var BO = Array.prototype,
    VO = BO.splice;
  function HO(t) {
    var e = this.__data__,
      n = Lo(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : VO.call(e, n, 1), --this.size, !0;
  }
  function KO(t) {
    var e = this.__data__,
      n = Lo(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function WO(t) {
    return Lo(this.__data__, t) > -1;
  }
  function qO(t, e) {
    var n = this.__data__,
      r = Lo(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function De(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  De.prototype.clear = UO;
  De.prototype.delete = HO;
  De.prototype.get = KO;
  De.prototype.has = WO;
  De.prototype.set = qO;
  var xr = xn(Ae, "Map");
  function GO() {
    (this.size = 0), (this.__data__ = { hash: new pn(), map: new (xr || De)(), string: new pn() });
  }
  function JO(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function zo(t, e) {
    var n = t.__data__;
    return JO(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function ZO(t) {
    var e = zo(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function YO(t) {
    return zo(this, t).get(t);
  }
  function QO(t) {
    return zo(this, t).has(t);
  }
  function XO(t, e) {
    var n = zo(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function en(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  en.prototype.clear = GO;
  en.prototype.delete = ZO;
  en.prototype.get = YO;
  en.prototype.has = QO;
  en.prototype.set = XO;
  var tT = "Expected a function";
  function ha(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(tT);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var s = t.apply(this, r);
      return (n.cache = i.set(o, s) || i), s;
    };
    return (n.cache = new (ha.Cache || en)()), n;
  }
  ha.Cache = en;
  var eT = 500;
  function nT(t) {
    var e = ha(t, function (r) {
        return n.size === eT && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var rT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    oT = /\\(\\)?/g,
    iT = nT(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(rT, function (n, r, o, i) {
          e.push(o ? i.replace(oT, "$1") : r || n);
        }),
        e
      );
    });
  function sT(t) {
    return t == null ? "" : xh(t);
  }
  function Uo(t, e) {
    return tn(t) ? t : CO(t, e) ? [t] : iT(sT(t));
  }
  var aT = 1 / 0;
  function pa(t) {
    if (typeof t == "string" || oa(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -aT ? "-0" : e;
  }
  function lT(t, e) {
    e = Uo(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[pa(e[n++])];
    return n && n == r ? t : void 0;
  }
  function ga(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var ku = xe ? xe.isConcatSpreadable : void 0;
  function cT(t) {
    return tn(t) || ca(t) || !!(ku && t && t[ku]);
  }
  function uT(t, e, n, r, o) {
    var i = -1,
      s = t.length;
    for (n || (n = cT), o || (o = []); ++i < s; ) {
      var a = t[i];
      n(a) ? ga(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function fT(t) {
    var e = t == null ? 0 : t.length;
    return e ? uT(t) : [];
  }
  function dT(t) {
    return jE(IE(t, void 0, fT), t + "");
  }
  var $h = kh(Object.getPrototypeOf, Object);
  function hT() {
    (this.__data__ = new De()), (this.size = 0);
  }
  function pT(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function gT(t) {
    return this.__data__.get(t);
  }
  function vT(t) {
    return this.__data__.has(t);
  }
  var yT = 200;
  function mT(t, e) {
    var n = this.__data__;
    if (n instanceof De) {
      var r = n.__data__;
      if (!xr || r.length < yT - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new en(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Hn(t) {
    var e = (this.__data__ = new De(t));
    this.size = e.size;
  }
  Hn.prototype.clear = hT;
  Hn.prototype.delete = pT;
  Hn.prototype.get = gT;
  Hn.prototype.has = vT;
  Hn.prototype.set = mT;
  function bT(t, e) {
    return t && Do(e, fa(e), t);
  }
  function _T(t, e) {
    return t && Do(e, da(e), t);
  }
  var Ih = typeof jt == "object" && jt && !jt.nodeType && jt,
    $u = Ih && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    wT = $u && $u.exports === Ih,
    Iu = wT ? Ae.Buffer : void 0,
    Mu = Iu ? Iu.allocUnsafe : void 0;
  function xT(t, e) {
    if (e) return t.slice();
    var n = t.length,
      r = Mu ? Mu(n) : new t.constructor(n);
    return t.copy(r), r;
  }
  function ST(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r; ) {
      var s = t[n];
      e(s, n, t) && (i[o++] = s);
    }
    return i;
  }
  function Mh() {
    return [];
  }
  var AT = Object.prototype,
    ET = AT.propertyIsEnumerable,
    Nu = Object.getOwnPropertySymbols,
    va = Nu
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              ST(Nu(t), function (e) {
                return ET.call(t, e);
              }));
        }
      : Mh;
  function OT(t, e) {
    return Do(t, va(t), e);
  }
  var TT = Object.getOwnPropertySymbols,
    Nh = TT
      ? function (t) {
          for (var e = []; t; ) ga(e, va(t)), (t = $h(t));
          return e;
        }
      : Mh;
  function jT(t, e) {
    return Do(t, Nh(t), e);
  }
  function Fh(t, e, n) {
    var r = e(t);
    return tn(t) ? r : ga(r, n(t));
  }
  function CT(t) {
    return Fh(t, fa, va);
  }
  function PT(t) {
    return Fh(t, da, Nh);
  }
  var gs = xn(Ae, "DataView"),
    vs = xn(Ae, "Promise"),
    ys = xn(Ae, "Set"),
    Fu = "[object Map]",
    RT = "[object Object]",
    Du = "[object Promise]",
    Lu = "[object Set]",
    zu = "[object WeakMap]",
    Uu = "[object DataView]",
    kT = wn(gs),
    $T = wn(xr),
    IT = wn(vs),
    MT = wn(ys),
    NT = wn(ps),
    Pe = Bn;
  ((gs && Pe(new gs(new ArrayBuffer(1))) != Uu) ||
    (xr && Pe(new xr()) != Fu) ||
    (vs && Pe(vs.resolve()) != Du) ||
    (ys && Pe(new ys()) != Lu) ||
    (ps && Pe(new ps()) != zu)) &&
    (Pe = function (t) {
      var e = Bn(t),
        n = e == RT ? t.constructor : void 0,
        r = n ? wn(n) : "";
      if (r)
        switch (r) {
          case kT:
            return Uu;
          case $T:
            return Fu;
          case IT:
            return Du;
          case MT:
            return Lu;
          case NT:
            return zu;
        }
      return e;
    });
  var FT = Object.prototype,
    DT = FT.hasOwnProperty;
  function LT(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && DT.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var Bu = Ae.Uint8Array;
  function ya(t) {
    var e = new t.constructor(t.byteLength);
    return new Bu(e).set(new Bu(t)), e;
  }
  function zT(t, e) {
    var n = e ? ya(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var UT = /\w*$/;
  function BT(t) {
    var e = new t.constructor(t.source, UT.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Vu = xe ? xe.prototype : void 0,
    Hu = Vu ? Vu.valueOf : void 0;
  function VT(t) {
    return Hu ? Object(Hu.call(t)) : {};
  }
  function HT(t, e) {
    var n = e ? ya(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var KT = "[object Boolean]",
    WT = "[object Date]",
    qT = "[object Map]",
    GT = "[object Number]",
    JT = "[object RegExp]",
    ZT = "[object Set]",
    YT = "[object String]",
    QT = "[object Symbol]",
    XT = "[object ArrayBuffer]",
    tj = "[object DataView]",
    ej = "[object Float32Array]",
    nj = "[object Float64Array]",
    rj = "[object Int8Array]",
    oj = "[object Int16Array]",
    ij = "[object Int32Array]",
    sj = "[object Uint8Array]",
    aj = "[object Uint8ClampedArray]",
    lj = "[object Uint16Array]",
    cj = "[object Uint32Array]";
  function uj(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case XT:
        return ya(t);
      case KT:
      case WT:
        return new r(+t);
      case tj:
        return zT(t, n);
      case ej:
      case nj:
      case rj:
      case oj:
      case ij:
      case sj:
      case aj:
      case lj:
      case cj:
        return HT(t, n);
      case qT:
        return new r();
      case GT:
      case YT:
        return new r(t);
      case JT:
        return BT(t);
      case ZT:
        return new r();
      case QT:
        return VT(t);
    }
  }
  function fj(t) {
    return typeof t.constructor == "function" && !la(t) ? bE($h(t)) : {};
  }
  var dj = "[object Map]";
  function hj(t) {
    return Vn(t) && Pe(t) == dj;
  }
  var Ku = Dn && Dn.isMap,
    pj = Ku ? ua(Ku) : hj,
    gj = "[object Set]";
  function vj(t) {
    return Vn(t) && Pe(t) == gj;
  }
  var Wu = Dn && Dn.isSet,
    yj = Wu ? ua(Wu) : vj,
    mj = 1,
    bj = 2,
    _j = 4,
    Dh = "[object Arguments]",
    wj = "[object Array]",
    xj = "[object Boolean]",
    Sj = "[object Date]",
    Aj = "[object Error]",
    Lh = "[object Function]",
    Ej = "[object GeneratorFunction]",
    Oj = "[object Map]",
    Tj = "[object Number]",
    zh = "[object Object]",
    jj = "[object RegExp]",
    Cj = "[object Set]",
    Pj = "[object String]",
    Rj = "[object Symbol]",
    kj = "[object WeakMap]",
    $j = "[object ArrayBuffer]",
    Ij = "[object DataView]",
    Mj = "[object Float32Array]",
    Nj = "[object Float64Array]",
    Fj = "[object Int8Array]",
    Dj = "[object Int16Array]",
    Lj = "[object Int32Array]",
    zj = "[object Uint8Array]",
    Uj = "[object Uint8ClampedArray]",
    Bj = "[object Uint16Array]",
    Vj = "[object Uint32Array]",
    At = {};
  At[Dh] =
    At[wj] =
    At[$j] =
    At[Ij] =
    At[xj] =
    At[Sj] =
    At[Mj] =
    At[Nj] =
    At[Fj] =
    At[Dj] =
    At[Lj] =
    At[Oj] =
    At[Tj] =
    At[zh] =
    At[jj] =
    At[Cj] =
    At[Pj] =
    At[Rj] =
    At[zj] =
    At[Uj] =
    At[Bj] =
    At[Vj] =
      !0;
  At[Aj] = At[Lh] = At[kj] = !1;
  function Zr(t, e, n, r, o, i) {
    var s,
      a = e & mj,
      l = e & bj,
      c = e & _j;
    if (s !== void 0) return s;
    if (!hn(t)) return t;
    var u = tn(t);
    if (u) {
      if (((s = LT(t)), !a)) return wE(t, s);
    } else {
      var d = Pe(t),
        f = d == Lh || d == Ej;
      if (Ch(t)) return xT(t, a);
      if (d == zh || d == Dh || (f && !o)) {
        if (((s = l || f ? {} : fj(t)), !a)) return l ? jT(t, _T(s, t)) : OT(t, bT(s, t));
      } else {
        if (!At[d]) return o ? t : {};
        s = uj(t, d, a);
      }
    }
    i || (i = new Hn());
    var h = i.get(t);
    if (h) return h;
    i.set(t, s),
      yj(t)
        ? t.forEach(function (w) {
            s.add(Zr(w, e, n, w, t, i));
          })
        : pj(t) &&
          t.forEach(function (w, b) {
            s.set(b, Zr(w, e, n, b, t, i));
          });
    var v = c ? (l ? PT : CT) : l ? da : fa,
      m = u ? void 0 : v(t);
    return (
      CE(m || t, function (w, b) {
        m && ((b = w), (w = t[b])), sa(s, b, Zr(w, e, n, b, t, i));
      }),
      s
    );
  }
  var Hj = 1,
    Kj = 4;
  function We(t) {
    return Zr(t, Hj | Kj);
  }
  function Wj(t, e) {
    return t != null && e in Object(t);
  }
  function qj(t, e, n) {
    e = Uo(e, t);
    for (var r = -1, o = e.length, i = !1; ++r < o; ) {
      var s = pa(e[r]);
      if (!(i = t != null && n(t, s))) break;
      t = t[s];
    }
    return i || ++r != o ? i : ((o = t == null ? 0 : t.length), !!o && aa(o) && ia(s, o) && (tn(t) || ca(t)));
  }
  function Gj(t, e) {
    return t != null && qj(t, e, Wj);
  }
  function Jj(t, e, n, r) {
    if (!hn(t)) return t;
    e = Uo(e, t);
    for (var o = -1, i = e.length, s = i - 1, a = t; a != null && ++o < i; ) {
      var l = pa(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != s) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = hn(u) ? u : ia(e[o + 1]) ? [] : {});
      }
      sa(a, l, c), (a = a[l]);
    }
    return t;
  }
  function Zj(t, e, n) {
    for (var r = -1, o = e.length, i = {}; ++r < o; ) {
      var s = e[r],
        a = lT(t, s);
      n(a, s) && Jj(i, Uo(s, t), a);
    }
    return i;
  }
  function Yj(t, e) {
    return Zj(t, e, function (n, r) {
      return Gj(t, r);
    });
  }
  var Qj = dT(function (t, e) {
    return t == null ? {} : Yj(t, e);
  });
  const Xj = { class: "grid grid-cols-2 gap-2 overflow-auto h-full" },
    tC = { class: "border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed" },
    eC = Dt({
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
          i = function (l) {
            r(l), l.confirmUpdate();
          },
          s = function (l) {
            n("processesAnnotation", Qj(l.annotation, ["id", "start", "end"]));
          },
          a = function (l) {
            n("showAnnotation", l.annotation);
          };
        return (l, c) => (
          L(),
          K("div", Xj, [
            $("div", tC, [
              c[0] || (c[0] = $("div", { class: "text-lg font-bold" }, "Originele Tekst", -1)),
              st(G(hs), { annotations: l.originalAnnotations, lines: l.textLines }, null, 8, ["annotations", "lines"]),
            ]),
            $("div", null, [
              c[1] || (c[1] = $("div", { class: "text-lg font-bold" }, "Verwerkte Tekst", -1)),
              st(
                G(hs),
                {
                  annotations: l.processedAnnotations,
                  lines: l.textLines,
                  "allow-edit": !0,
                  "listen-to-on-update-start": !0,
                  "listen-to-on-updating": !0,
                  onAnnotationUpdateBegin: o,
                  onAnnotationUpdating: i,
                  onAnnotationUpdateEnd: s,
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
    nC = [
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
    rC = { class: "flex justify-center items-center gap-4" },
    oC = ["for"],
    iC = ["id", "value"],
    sC = { class: "pl-2 label-text" },
    aC = Dt({
      __name: "TypeFilter",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(t) {
        const e = Qf(t, "modelValue");
        return (n, r) => (
          L(),
          K("div", rC, [
            r[1] || (r[1] = $("div", { class: "font-bold" }, "Filter:", -1)),
            (L(!0),
            K(
              ut,
              null,
              Qt(
                G(nC),
                (o) => (
                  L(),
                  K("div", { key: o, class: "form-control" }, [
                    $(
                      "label",
                      { for: o, class: "label cursor-pointer" },
                      [
                        Is(
                          $(
                            "input",
                            {
                              class: "checkbox",
                              type: "checkbox",
                              id: o,
                              value: o,
                              "onUpdate:modelValue": r[0] || (r[0] = (i) => (e.value = i)),
                            },
                            null,
                            8,
                            iC,
                          ),
                          [[Us, e.value]],
                        ),
                        $("span", sC, bt(o), 1),
                      ],
                      8,
                      oC,
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
  class ma {
    constructor() {}
    async fetchAnnotation(e) {
      return this.sendJsonRequest({ url: `/text/${e}/annotations`, method: "GET" });
    }
    async listTexts(e, n, r) {
      const o = this.buildSearchParams(e, n, r);
      return this.sendJsonRequest({ url: `/text/search_api?${o.toString()}`, method: "GET" });
    }
    async paginate(e, n, r) {
      const o = this.buildSearchParams(e, n, r);
      return this.sendJsonRequest({ url: `/text/paginate?${o.toString()}`, method: "GET" });
    }
    async patchAnnotation(e, n, r) {
      return this.sendJsonRequest({ url: `/annotation/${n}/${e}/override`, method: "PATCH", body: r });
    }
    async sendJsonRequest({ url: e, method: n, body: r }) {
      try {
        const o = await fetch(e, {
          method: n,
          headers: { "Content-Type": "application/json" },
          body: r ? JSON.stringify(r) : void 0,
        });
        if (!o.ok) throw new Error(`HTTP error! status: ${o.status}`);
        return await o.json();
      } catch (o) {
        throw (console.error(o), new Error(o));
      }
    }
    buildSearchParams(e, n, r) {
      const o = new URLSearchParams();
      return (
        o.append("limit", `${r}`),
        o.append("ascending", "25"),
        o.append("page", `${n}`),
        o.append("orderBy", "title"),
        o.append("filters[data_search_type]", "title"),
        Object.entries(e).forEach(([i, s]) => {
          s.forEach((a, l) => {
            o.append(`filters[${i}][${l}]`, `${a}`);
          });
        }),
        o
      );
    }
  }
  const lC = (t) => `${t.type}-${t.start}-${t.end}`;
  class cC {
    constructor(e, n) {
      ft(this, "name", "Duplicate rule");
      ft(this, "duplicateRuleSet", new Map());
      ft(this, "duplicates", new Map());
      (this.text = e), (this.annotations = n), this.mapAnnotations(n);
    }
    addAnnotationToRules(e) {
      const n = lC(e),
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
      var o, i;
      const n = (o = this.duplicates.get(e.id)) == null ? void 0 : o.duplicateKey,
        r = ((i = this.duplicateRuleSet.get(n)) == null ? void 0 : i.filter((s) => s.id !== e.id)) ?? [];
      return this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r)), r;
    }
    updateAnnotation(e) {
      var s, a;
      const n = (s = this.duplicates.get(e.id)) == null ? void 0 : s.duplicateKey,
        r = ((a = this.duplicateRuleSet.get(n)) == null ? void 0 : a.filter((l) => l.id !== e.id)) ?? [];
      this.duplicates.delete(e.id), n && (this.duplicateRuleSet.set(n, r), this.updateDuplicates(n, r));
      const { key: o, annotations: i } = this.addAnnotationToRules(e);
      return this.updateDuplicates(o, i), r;
    }
    hasDuplicate(e) {
      var n;
      return ((n = this.duplicates.get(e.id)) == null ? void 0 : n.duplicates) ?? [];
    }
  }
  class uC {
    constructor(e) {
      ft(this, "name");
      ft(this, "text");
      (this.name = "sanitize_annotation_rule"), (this.text = e);
    }
    apply(e) {
      const n = We(e);
      e.start < 0 && (n.start = 0), e.end >= this.text.length && (n.end = this.text.length - 1);
      const r = e.start != n.start || e.end != n.end;
      return { annotation: n, rule_applied: r };
    }
  }
  class on {
    constructor(e, n = !1, r = !1) {
      ft(this, "name");
      ft(this, "text");
      ft(this, "rules");
      ft(this, "alwaysApplyFirstRule");
      ft(this, "stopWhenRuleApplied");
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
        const i = this.rules[o].apply(e);
        if (
          i.rule_applied &&
          (r.push(this.rules[o].name), (e = i.annotation), (n = i.rule_applied), this.stopWhenRuleApplied)
        )
          return { annotation: e, rule_applied: n, appliedRules: r };
      }
      return { annotation: e, rule_applied: n, appliedRules: r };
    }
  }
  class fC {
    constructor(e, n) {
      ft(this, "name");
      ft(this, "text");
      ft(this, "max_shift");
      (this.name = "tokenize_rule"), (this.text = e), (this.max_shift = n);
    }
    apply(e) {
      const n = We(e);
      let r = this.max_shift;
      r < 0 && (r = 2 + Math.floor((e.end - e.start) / 3));
      const o = UA(this.text, e.start, e.end, r);
      return o.modified && ((n.start = o.start), (n.end = o.end)), { annotation: n, rule_applied: o.modified };
    }
  }
  const dC = (t, e, n) => {
      if (!n || !n.id) return console.warn("No property object", e, n), null;
      const r = e
        .substring(t.length + 1)
        .split(/(?=[A-Z])/)
        .map((o) => `${o.charAt(0).toUpperCase()}${o.slice(1)}`)
        .join(" ");
      return console.log(r), { id: n.id, id_name: n.id_name, label: r, name: n.name };
    },
    hC = (t, e) =>
      Object.keys(e)
        .map((n) => dC(t, n, e[n]))
        .filter((n) => !!n),
    pC = (t, e) => {
      if (!t.text_selection) return console.error("Annotation error wrong format", t), null;
      const n = t.type === "handshift" ? "gutter" : "text",
        r = t.text_selection.selection_start - 1,
        o = t.text_selection.selection_end - 1,
        i = e ? e.slice(r, o) : "",
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
        metadata: { text: i, id: t.id, index: t.id },
        color: vh[s],
        hasOverride: t.hasOverride,
        properties: hC(s, t.properties),
      };
    };
  class gC {
    constructor(e, n) {
      ft(this, "name");
      ft(this, "text");
      ft(this, "maxShift");
      (this.name = "annotation_text_rule"), (this.text = e), (this.maxShift = n);
    }
    apply(e) {
      let n = e,
        r = !1;
      if (e.text) {
        const o = e.text.trim(),
          i = zA(this.text, o, e.start, e.end, this.maxShift);
        i.modified && ((r = !0), (n = We(e)), (n.start = i.start), (n.end = i.end));
      }
      return { annotation: n, rule_applied: r };
    }
  }
  class vC {
    constructor(e) {
      ft(this, "languageRuleSet");
      ft(this, "typographyRuleSet");
      ft(this, "orthographyRuleSet");
      ft(this, "lexisRuleSet");
      ft(this, "morphoSyntacticalRuleSet");
      ft(this, "handshiftRuleSet");
      ft(this, "defaultRuleSet");
      this.text = e;
      const n = new fC(e, 3),
        r = new gC(e, 3),
        o = new uC(e);
      (this.languageRuleSet = new on([o, n], !0, !0)),
        (this.typographyRuleSet = new on([o, r], !0, !0)),
        (this.orthographyRuleSet = new on([o, n, r], !0, !0)),
        (this.lexisRuleSet = new on([o, n], !0, !0)),
        (this.morphoSyntacticalRuleSet = new on([o, r, n], !0, !1)),
        (this.handshiftRuleSet = new on([o, n], !0, !0)),
        (this.defaultRuleSet = new on([o], !0, !1));
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
        const r = pC(e, this.text);
        if (!r) {
          n(null);
          return;
        }
        const o = this._applyRules(r),
          i = o.rule_applied ? o.annotation : r;
        o.rule_applied && (i.color = lA[i.type]),
          n({
            id: r.id,
            processed: i,
            original: r,
            modified: o.rule_applied ? o.annotation : null,
            appliedRules: o.appliedRules,
            saving: !1,
            error: !1,
          });
      });
    }
  }
  class yC {
    constructor() {
      ft(this, "annotationRepository", new ma());
      ft(this, "annotationRuleSets");
      ft(this, "duplicateRule");
      ft(this, "text", ct(""));
      ft(this, "annotations", ct(new Map()));
      ft(
        this,
        "annotationValues",
        rt(() => Array.from(this.annotations.value.values())),
      );
    }
    async getAnnotation(e) {
      this.reset();
      try {
        const n = await this.annotationRepository.fetchAnnotation(e),
          { text: r } = n,
          o = n.annotations;
        this.createRulesSet(r),
          console.group("Load annotations for ", e),
          console.log("Totaal aantal annotaties", o.length, "textlengte", r.length),
          console.time(`process_${e}`);
        const i = (await Promise.all(o.map((s) => this.applyRules(s)))).filter((s) => !!s);
        return this.checkForDuplicates(i), console.timeEnd(`process_${e}`), console.groupEnd(), { text: r, id: e };
      } catch (n) {
        throw (console.error(n), new Error(n));
      }
    }
    reset() {
      (this.text.value = ""), this.annotations.value.clear();
    }
    checkForDuplicates(e) {
      const n = e.map((r) => r.processed);
      (this.duplicateRule = new cC(this.text.value, n)),
        e.forEach((r) => {
          r.duplicates = this.duplicateRule.hasDuplicate(r.processed);
        });
    }
    createRulesSet(e) {
      (this.text.value = e), (this.annotationRuleSets = new vC(e));
    }
    async applyRules(e) {
      const n = await this.annotationRuleSets.applyRules(e);
      return n ? (this.annotations.value.set(e.id, n), n) : null;
    }
    processAnnotation({ end: e, start: n, id: r }) {
      const o = this.annotations.value.get(r),
        { processed: i } = o;
      (i.end = e), (i.start = n);
    }
    modifyAnnotation({ start: e, end: n, id: r }) {
      const o = this.annotations.value.get(r),
        { processed: i, modified: s } = o;
      s || (o.modified = We(i)), (o.modified.end = n), (o.modified.start = e);
    }
    async confirmAnnotationLocal(e, n) {
      const r = this.annotations.value.get(e),
        o = We(n === "modified" ? r.modified : r.original);
      return (
        (r.saving = !0),
        (r.error = !1),
        await this.updateAnnotation(o).catch((i) => {
          throw (console.error(i), (r.saving = !1), (r.error = !0), Error(i));
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
        this.duplicateRule.updateAnnotation(r.processed).forEach((i) => this.updateDuplicates(i)),
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
      const { start: r, end: o, type: i, id: s } = e;
      return this.annotationRepository.patchAnnotation(s, i, {
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
  }
  const mC = (t, e, n, r) => {
      var i;
      if ((r && e.duplicates.length < 1) || (n && (!e.modified || e.hasOverride))) return !1;
      const o = ((i = e == null ? void 0 : e.original) == null ? void 0 : i.type) ?? "";
      return t.length === 0 || t.includes(o);
    },
    qu = (t, e) => (t.processed.start < e.processed.start ? -1 : 1),
    bC = (t, e, n, r) => (t.length === 0 && !n && !r ? e.sort(qu) : e.filter((i) => mC(t, i, n, r)).sort(qu)),
    Uh = Bs("annotationStore", () => {
      const t = Po(),
        e = Co(),
        n = ct(Number(t.params.id)),
        r = jn(async () => {
          console.log("id", n.value);
          const j = new yC();
          if (!n.value) return null;
          try {
            const N = await j.getAnnotation(n.value);
            return { annotationStore: j, ...N };
          } catch (N) {
            console.error(N), console.error("Fout bij het laden van de annotaties");
          } finally {
            console.log("Total processed annotations", h.value.length),
              console.log("Total modified annotations", v.value.length),
              console.log("Total original annotations", f.value.length);
          }
          return null;
        }),
        o = rt(() => {
          var j;
          return ((j = r.value) == null ? void 0 : j.text) || "";
        }),
        i = rt(() => {
          var j;
          return ((j = r.value) == null ? void 0 : j.annotationStore) || null;
        }),
        s = ct(!1),
        a = ct(!1),
        l = ct([]),
        c = rt(() => {
          var j, N;
          return ((N = (j = i.value) == null ? void 0 : j.annotationValues) == null ? void 0 : N.value) || [];
        }),
        u = rt(() => bC(l.value, c.value, s.value, a.value)),
        d = rt(() => c.value.length),
        f = rt(() => u.value.map((j) => j.original)),
        h = rt(() => u.value.map((j) => j.processed)),
        v = rt(() => u.value.filter((j) => !!j.modified || j.duplicates.length > 1)),
        m = rt(() => u.value.filter((j) => j.duplicates.length > 1)),
        w = rt(() => c.value.filter((j) => j.hasOverride || !j.modified).length),
        b = rt(() => BA(o.value)),
        _ = rt(() => new VA(o.value)),
        x = rt(() => {
          const j = r.value;
          return !j || j.id !== n.value;
        }),
        S = (j) => ((n.value = j), e.push({ name: "annotation", params: { id: j }, query: t.query }));
      return (
        me(
          () => t.params.id,
          (j, N) => {
            const J = Number(j);
            J && n.value !== J && S(J);
          },
        ),
        {
          id: n,
          loading: x,
          changeId: S,
          fetchNewValue: r,
          textLines: b,
          snapper: _,
          originalAnnotations: f,
          processedAnnotations: h,
          modifiedAnnotations: v,
          selectedFilters: l,
          duplicates: m,
          totalAnnotations: d,
          totalProcessedAnnotation: w,
          changeShowModified: (j) => (s.value = j),
          changeShowOnlyDuplicates: (j) => (a.value = j),
          processAnnotation: (j) => {
            var N;
            return (N = i.value) == null ? void 0 : N.processAnnotation(j);
          },
          modifyAnnotation: (j) => {
            var N;
            return (N = i.value) == null ? void 0 : N.modifyAnnotation(j);
          },
          confirmAnnotation: (j, N) => {
            var J;
            return (J = i.value) == null ? void 0 : J.confirmAnnotation(j, N);
          },
          confirmAnnotations: (j) => {
            var N;
            return (N = i.value) == null ? void 0 : N.confirmAnnotations(j);
          },
          deleteAnnotation: (j) => {
            var N;
            return (N = i.value) == null ? void 0 : N.deleteAnnotation(j);
          },
        }
      );
    }),
    Bi = (t) => {
      const e = Number(t);
      return isNaN(e) ? null : e;
    },
    _C = 25,
    Bh = Bs("searchStore", () => {
      const t = Po(),
        e = Co(),
        n = ct(Bi(t.query.pageSize) ?? _C),
        r = ct(Bi(t.query.page) ?? 1),
        o = {};
      Object.entries(t.query).forEach(([h, v]) => {
        ["pageSize", "page"].includes(h) ||
          (Array.isArray(v) ? (o[h] = v.map((m) => Number(m))) : (o[h] = [Number(v)]));
      });
      const i = ct(We(o)),
        s = new ma(),
        a = jn(async () => {
          const h = i.value,
            v = r.value;
          return v ? s.listTexts(h, v, n.value) : { count: 0, results: [] };
        }),
        l = rt(() => {
          var h;
          return ((h = a.value) == null ? void 0 : h.data) ?? [];
        }),
        c = rt(() => {
          var h;
          return ((h = a.value) == null ? void 0 : h.count) ?? 0;
        }),
        u = rt(() => {
          var h;
          return ((h = a.value) == null ? void 0 : h.aggregation) ?? {};
        }),
        d = (h) => ((i.value = We(h)), e.replace({ query: { ...t.query, ...h } })),
        f = (h = 1) => {
          const v = Bi(h) ?? 1;
          return (r.value = v < 1 ? 1 : v), e.replace({ query: { ...t.query, page: r.value } });
        };
      return (
        (!t.query.pageSize || !t.query.page) && e.replace({ query: { ...t.query, pageSize: n.value, page: r.value } }),
        {
          pageSize: n,
          page: r,
          filterValues: i,
          data: l,
          count: c,
          searchResult: a,
          aggregations: u,
          changePage: f,
          onSearch: d,
        }
      );
    }),
    Vh = (t, e) => {
      const n = (t ?? 0) / e;
      return Math.ceil(n);
    },
    wC = Bs("paginationStore", () => {
      const t = Bh(),
        e = Uh(),
        n = new ma(),
        r = ct([]),
        o = async () => {
          const h = await n.paginate(t.filterValues, t.page, t.pageSize);
          return (r.value = h), h;
        },
        i = jn(async () => (await n.paginate(t.filterValues, 1, 1))[0]),
        s = jn(async () => (await n.listTexts(t.filterValues, 1, 0)).count),
        a = jn(async () => (await n.paginate(t.filterValues, s.value, 1))[0]);
      jn(() => o());
      const l = rt(() => r.value.findIndex((h) => h === e.id));
      return {
        firstId: i,
        lastId: a,
        next: async () => {
          const h = l.value;
          let v = h < 0 ? void 0 : r.value[h + 1];
          v
            ? await e.changeId(v)
            : (await t.changePage(t.page + 1), await o(), (v = r.value[0]), v && (await e.changeId(v)));
        },
        previous: async () => {
          const h = l.value,
            v = r.value.length;
          let m = h < 0 ? void 0 : r.value[h - 1];
          m
            ? await e.changeId(m)
            : (await t.changePage(t.page - 1), await o(), (m = r.value[v]), m && (await e.changeId(m)));
        },
        toFirst: async () => {
          await e.changeId(i.value), await t.changePage(1);
        },
        toLast: async () => {
          const h = Vh(s.value, t.pageSize);
          await e.changeId(a.value), await t.changePage(h);
        },
      };
    }),
    xC = { class: "flex flex-col gap-2 align-items" },
    SC = { class: "flex gap-1 items-center" },
    AC = { class: "text-sm w-16 text-center" },
    EC = Dt({
      __name: "SearchPaginator",
      props: { activeId: {} },
      setup(t) {
        const e = wC(),
          n = Po();
        return (r, o) => {
          const i = rg("router-link");
          return (
            L(),
            K("div", xC, [
              $("div", SC, [
                $(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === G(e).firstId }]),
                    onClick: o[0] || (o[0] = (...s) => G(e).toFirst && G(e).toFirst(...s)),
                  },
                  [st(G(KS), { class: "h-3" })],
                  2,
                ),
                $(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === G(e).firstId }]),
                    onClick: o[1] || (o[1] = (...s) => G(e).previous && G(e).previous(...s)),
                  },
                  [st(G(qS), { class: "h-3" })],
                  2,
                ),
                $("div", AC, bt(r.activeId), 1),
                $(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === G(e).lastId }]),
                    onClick: o[2] || (o[2] = (...s) => G(e).next && G(e).next(...s)),
                  },
                  [st(G(GS), { class: "h-3" })],
                  2,
                ),
                $(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === G(e).lastId }]),
                    onClick: o[3] || (o[3] = (...s) => G(e).toLast && G(e).toLast(...s)),
                  },
                  [st(G(WS), { class: "h-3" })],
                  2,
                ),
              ]),
              st(
                i,
                { class: "link btn-ghost btn-icon", to: { name: "search", query: G(n).query } },
                { default: Ie(() => o[4] || (o[4] = [Er(" Terug naar zoeken ")])), _: 1 },
                8,
                ["to"],
              ),
            ])
          );
        };
      },
    }),
    OC = { class: "navbar bg-base-100" },
    TC = { class: "flex-none" },
    jC = { class: "flex flex-row gap-4 items-center" },
    CC = { class: "label cursor-pointer gap-2" },
    PC = ["checked"],
    RC = { class: "label-text" },
    kC = { class: "label cursor-pointer gap-2" },
    $C = ["checked"],
    IC = { class: "label-text" },
    MC = { class: "label cursor-pointer gap-2" },
    NC = { key: 0, class: "absolute left-1/2 top-1/2 loading loading-bars loading-lg" },
    FC = Dt({
      __name: "AnnotationView",
      setup(t) {
        const e = ct(!1),
          n = ct(!1),
          r = ct(!1),
          o = ct([]);
        Co();
        const i = () => {
            (e.value = !e.value), a.changeShowModified(e.value);
          },
          s = () => {
            (n.value = !n.value), a.changeShowOnlyDuplicates(n.value);
          },
          a = Uh(),
          l = (v) => {
            a.processAnnotation(v);
          },
          c = (v) => {
            a.modifyAnnotation(v);
          },
          u = (v, m) => {
            a.confirmAnnotation(v, m);
          },
          d = (v) => {
            a.deleteAnnotation(v);
          },
          f = (v) => {
            a.confirmAnnotations(v);
          },
          h = (v) => {
            var m;
            (o.value = []),
              v &&
                ((m = document.querySelector(`[data-annotation="${v.id}"]`)) == null || m.scrollIntoView(),
                (o.value = [v.id]));
          };
        return (v, m) => (
          L(),
          K(
            ut,
            null,
            [
              $("div", OC, [
                st(EC, { "active-id": G(a).id }, null, 8, ["active-id"]),
                $("div", TC, [
                  st(
                    aC,
                    {
                      modelValue: G(a).selectedFilters,
                      "onUpdate:modelValue": m[0] || (m[0] = (w) => (G(a).selectedFilters = w)),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ]),
              ]),
              $(
                "div",
                { class: Nt(["flex p-1 gap-1 viewer", { "opacity-30": G(a).loading }]) },
                [
                  $(
                    "div",
                    { class: Nt(["p-4 border flex flex-col", { "w-1/2": r.value, "w-2/3": !r.value }]) },
                    [
                      $("div", jC, [
                        $("label", CC, [
                          $(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: e.value, onClick: i },
                            null,
                            8,
                            PC,
                          ),
                          $(
                            "span",
                            RC,
                            " Enkel Gewijzigde annotaties (" + bt(G(a).modifiedAnnotations.length) + ")",
                            1,
                          ),
                        ]),
                        $("label", kC, [
                          $(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: n.value, onClick: s },
                            null,
                            8,
                            $C,
                          ),
                          $("span", IC, " Enkel Duplicaten (" + bt(G(a).duplicates.length) + ")", 1),
                        ]),
                        $("label", MC, [
                          Is(
                            $(
                              "input",
                              {
                                type: "checkbox",
                                class: "toggle toggle-sm",
                                "onUpdate:modelValue": m[1] || (m[1] = (w) => (r.value = w)),
                              },
                              null,
                              512,
                            ),
                            [[Us, r.value]],
                          ),
                          m[2] || (m[2] = $("span", { class: "label-text" }, "Toon metadata", -1)),
                        ]),
                      ]),
                      st(
                        eC,
                        {
                          originalAnnotations: G(a).originalAnnotations,
                          processedAnnotations: G(a).processedAnnotations,
                          "text-lines": G(a).textLines,
                          snapper: G(a).snapper,
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
                  $(
                    "div",
                    { class: Nt([" border p-4", { "w-1/3": !r.value, "w-1/2": r.value }]) },
                    [
                      $(
                        "div",
                        null,
                        " Verwerkte annotaties: " + bt(G(a).totalProcessedAnnotation) + "/" + bt(G(a).totalAnnotations),
                        1,
                      ),
                      st(
                        MA,
                        {
                          modifiedAnnotations: G(a).modifiedAnnotations,
                          "text-lines": G(a).textLines,
                          highlightAnnotationIds: o.value,
                          "show-metadata": r.value,
                          onConfirmAnnotation: u,
                          onDeleteAnnotation: d,
                          onConfirmAnnotations: f,
                        },
                        null,
                        8,
                        ["modifiedAnnotations", "text-lines", "highlightAnnotationIds", "show-metadata"],
                      ),
                    ],
                    2,
                  ),
                  G(a).loading ? (L(), K("span", NC)) : $t("", !0),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    DC = { class: "table" },
    LC = ["onClick"],
    zC = { class: "flex justify-around py-2" },
    UC = { class: "join" },
    BC = ["onClick"],
    VC = Dt({
      __name: "SearchResult",
      props: { count: {}, data: {}, pageSize: {}, activePage: {} },
      emits: ["changePage"],
      setup(t, { emit: e }) {
        const n = t,
          r = ct([]),
          o = (d, f = !1) => {
            const h = d;
            return { page: h, label: h, disabled: f, key: d };
          },
          i = (d) => {
            var _, x, S, C;
            const f = Vh(d.count, d.pageSize);
            if (f < 1) return [];
            const h = 14,
              v = f < h ? f : h;
            let m = 1;
            f > h && ((m = d.activePage - h / 2), m < 1 ? (m = 1) : m + h > f && (m = f - h + 1));
            const w = (z) => ({ page: 0, label: "...", disabled: !0, key: z }),
              b = Array.from({ length: v }).map((z, j) => o(j + m));
            ((_ = b[0]) == null ? void 0 : _.page) > 2 && b.unshift(w(-1)),
              ((x = b[0]) == null ? void 0 : x.page) !== 1 && b.unshift(o(1)),
              ((S = b[b.length - 1]) == null ? void 0 : S.page) < f - 1 && b.push(w(-2)),
              ((C = b[b.length - 1]) == null ? void 0 : C.page) !== f && b.push(o(f)),
              (r.value = b.flat());
          };
        Ns(() => {
          i(n);
        }),
          If(() => {
            i(n);
          });
        const s = e,
          a = (d) => {
            s("changePage", d);
          },
          l = Co(),
          c = Po(),
          u = (d) => {
            l.push({ name: "annotation", params: { id: d.id }, query: c.query });
          };
        return (d, f) => (
          L(),
          K(
            ut,
            null,
            [
              $("table", DC, [
                f[0] ||
                  (f[0] = $(
                    "thead",
                    null,
                    [
                      $("tr", null, [
                        $("th", null, "Id"),
                        $("th", null, "tm_id"),
                        $("th", null, "Title"),
                        $("th", null, "Year begin"),
                        $("th", null, "Year end"),
                      ]),
                    ],
                    -1,
                  )),
                $("tbody", null, [
                  (L(!0),
                  K(
                    ut,
                    null,
                    Qt(
                      d.data,
                      (h) => (
                        L(),
                        K(
                          "tr",
                          { key: h.id, class: "hover hover:cursor-pointer", onClick: (v) => u(h) },
                          [
                            $("th", null, bt(h.id), 1),
                            $("th", null, bt(h.tm_id), 1),
                            $("td", null, bt(h.title), 1),
                            $("td", null, bt(h.year_begin), 1),
                            $("td", null, bt(h.year_end), 1),
                          ],
                          8,
                          LC,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              $("div", zC, [
                $("div", UC, [
                  (L(!0),
                  K(
                    ut,
                    null,
                    Qt(
                      r.value,
                      (h) => (
                        L(),
                        K(
                          "button",
                          {
                            key: h.key,
                            class: Nt([
                              "join-item btn btn-xs btn-outline w-8",
                              { "btn-active": h.page === d.activePage, "btn-disabled": h.disabled },
                            ]),
                            onClick: (v) => a(h.page),
                          },
                          bt(h.label),
                          11,
                          BC,
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
    HC = { class: "dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center" },
    KC = { tabindex: "0", role: "button", class: "h-full w-full" },
    WC = { tabindex: "0", class: "dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow" },
    qC = { class: "form-control" },
    GC = ["value"],
    JC = { class: "badge badge-ghost" },
    ZC = Dt({
      __name: "SearchField",
      props: ag({ title: {}, id: {}, aggregations: {} }, { modelValue: {}, modelModifiers: {} }),
      emits: ["update:modelValue"],
      setup(t) {
        const e = t,
          n = Qf(t, "modelValue"),
          r = rt(() => {
            var i, s;
            const o = e.aggregations ?? [];
            return (s = (i = n.value) == null ? void 0 : i.map) == null
              ? void 0
              : s.call(i, (a) => o.find((l) => l.id === a));
          });
        return (o, i) => (
          L(),
          K("div", HC, [
            $("div", KC, [
              Er(bt(o.title) + ": ", 1),
              (L(!0),
              K(
                ut,
                null,
                Qt(r.value, (s) => (L(), K("span", { class: "badge badge-ghost m-1", key: s.id }, bt(s.name), 1))),
                128,
              )),
            ]),
            $("ul", WC, [
              (L(!0),
              K(
                ut,
                null,
                Qt(
                  o.aggregations,
                  (s) => (
                    L(),
                    K("li", { key: s.id }, [
                      $("label", qC, [
                        Is(
                          $(
                            "input",
                            {
                              value: s.id,
                              "onUpdate:modelValue": i[0] || (i[0] = (a) => (n.value = a)),
                              type: "checkbox",
                              class: "checkbox checkbox-sm",
                            },
                            null,
                            8,
                            GC,
                          ),
                          [[Us, n.value]],
                        ),
                        $("span", null, bt(s.name), 1),
                        $("span", JC, bt(s.count), 1),
                      ]),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      },
    }),
    YC = { class: "p-2 flex flex-col gap-2" },
    QC = { class: "grid grid-cols-2 gap-2" },
    XC = Dt({
      __name: "SearchFilter",
      props: { aggregations: {} },
      emits: ["search"],
      setup(t, { emit: e }) {
        const n = t,
          r = {
            project: { id: "project", title: "Project" },
            level_category_category: { id: "level_category_category", title: "Text type" },
            era: { id: "era", title: "Era" },
          },
          o = ct(Object.keys(r).reduce((l, c) => ((l[c] = []), l), {})),
          i = rt(() =>
            Object.values(r).map((l) => {
              var d;
              const c = ((d = n.aggregations) == null ? void 0 : d[l.id]) ?? [],
                u = ct(c.filter((f) => f.active).map((f) => f.id));
              return (
                (o.value[l.id] = c.filter((f) => f.active).map((f) => f.id)),
                { id: l.id, title: l.title, model: u, aggregations: c }
              );
            }),
          ),
          s = e,
          a = () => {
            const l = o.value;
            s("search", l);
          };
        return (l, c) => (
          L(),
          K("div", YC, [
            $("div", QC, [
              (L(!0),
              K(
                ut,
                null,
                Qt(
                  i.value,
                  (u) => (
                    L(),
                    K("div", { key: u.id }, [
                      st(
                        ZC,
                        {
                          id: u.id,
                          title: u.title,
                          aggregations: u.aggregations,
                          modelValue: o.value[u.id],
                          "onUpdate:modelValue": (d) => (o.value[u.id] = d),
                        },
                        null,
                        8,
                        ["id", "title", "aggregations", "modelValue", "onUpdate:modelValue"],
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            $("div", null, [
              $("button", { class: "btn btn-sm", onClick: a }, [
                st(G(JS), { class: "h-6" }),
                c[0] || (c[0] = Er(" Search ")),
              ]),
            ]),
          ])
        );
      },
    }),
    tP = { class: "m-auto max-w-2xl" },
    eP = Dt({
      __name: "SearchView",
      setup(t) {
        const e = Bh();
        return (n, r) => (
          L(),
          K("div", tP, [
            st(XC, { aggregations: G(e).aggregations, onSearch: G(e).onSearch }, null, 8, ["aggregations", "onSearch"]),
            r[0] || (r[0] = $("hr", null, null, -1)),
            st(
              VC,
              {
                data: G(e).data,
                count: G(e).count,
                activePage: G(e).page,
                pageSize: G(e).pageSize,
                onChangePage: G(e).changePage,
              },
              null,
              8,
              ["data", "count", "activePage", "pageSize", "onChangePage"],
            ),
          ])
        );
      },
    }),
    nP = [
      { path: "/", name: "search", component: eP, meta: { title: "Zoeken" } },
      { path: "/detail/:id", name: "annotation", component: FC, meta: { title: "Annotatie: {id}" } },
    ],
    Hh = Py({ history: ay("/annotation_flow/"), routes: nP });
  Hh.beforeEach((t) => {
    let e = t.meta.title ?? "";
    Object.entries(t.params ?? {}).forEach(([r, o]) => {
      e = e.replace(`{${r}}`, o.toString());
    });
    const n = "Evwrite Annotation Flow";
    window.document.title = `${n} - ${e}`;
  });
  const Kh = wv(ky);
  Kh.use(Ev()).use(Hh);
  Kh.mount("#app");
});
export default rP();
