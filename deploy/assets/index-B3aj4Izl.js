var Bp = Object.defineProperty;
var Up = (t, e, n) => (e in t ? Bp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n));
var Vp = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var Z = (t, e, n) => Up(t, typeof e != "symbol" ? e + "" : e, n);
var Xj = Vp((Rt, jt) => {
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
   **/ /*! #__NO_SIDE_EFFECTS__ */ function qi(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return (n) => n in e;
  }
  const dt = {},
    Dn = [],
    ke = () => {},
    Hp = () => !1,
    Po = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    Ki = (t) => t.startsWith("onUpdate:"),
    Vt = Object.assign,
    Wi = (t, e) => {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1);
    },
    qp = Object.prototype.hasOwnProperty,
    pt = (t, e) => qp.call(t, e),
    tt = Array.isArray,
    Fn = (t) => zr(t) === "[object Map]",
    Io = (t) => zr(t) === "[object Set]",
    el = (t) => zr(t) === "[object Date]",
    it = (t) => typeof t == "function",
    zt = (t) => typeof t == "string",
    Ee = (t) => typeof t == "symbol",
    Tt = (t) => t !== null && typeof t == "object",
    Lf = (t) => (Tt(t) || it(t)) && it(t.then) && it(t.catch),
    Nf = Object.prototype.toString,
    zr = (t) => Nf.call(t),
    Kp = (t) => zr(t).slice(8, -1),
    zf = (t) => zr(t) === "[object Object]",
    Gi = (t) => zt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    dr = qi(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    Mo = (t) => {
      const e = Object.create(null);
      return (n) => e[n] || (e[n] = t(n));
    },
    Wp = /-(\w)/g,
    ae = Mo((t) => t.replace(Wp, (e, n) => (n ? n.toUpperCase() : ""))),
    Gp = /\B([A-Z])/g,
    nn = Mo((t) => t.replace(Gp, "-$1").toLowerCase()),
    Lo = Mo((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    pr = Mo((t) => (t ? `on${Lo(t)}` : "")),
    ee = (t, e) => !Object.is(t, e),
    io = (t, ...e) => {
      for (let n = 0; n < t.length; n++) t[n](...e);
    },
    Df = (t, e, n, r = !1) => {
      Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: r, value: n });
    },
    pi = (t) => {
      const e = parseFloat(t);
      return isNaN(e) ? t : e;
    };
  let nl;
  const Ff = () =>
    nl ||
    (nl =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});
  function rn(t) {
    if (tt(t)) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          o = zt(r) ? Yp(r) : rn(r);
        if (o) for (const s in o) e[s] = o[s];
      }
      return e;
    } else if (zt(t) || Tt(t)) return t;
  }
  const Zp = /;(?![^(]*\))/g,
    Jp = /:([^]+)/,
    Qp = /\/\*[^]*?\*\//g;
  function Yp(t) {
    const e = {};
    return (
      t
        .replace(Qp, "")
        .split(Zp)
        .forEach((n) => {
          if (n) {
            const r = n.split(Jp);
            r.length > 1 && (e[r[0].trim()] = r[1].trim());
          }
        }),
      e
    );
  }
  function Nt(t) {
    let e = "";
    if (zt(t)) e = t;
    else if (tt(t))
      for (let n = 0; n < t.length; n++) {
        const r = Nt(t[n]);
        r && (e += r + " ");
      }
    else if (Tt(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim();
  }
  const Xp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    tg = qi(Xp);
  function Bf(t) {
    return !!t || t === "";
  }
  function eg(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = No(t[r], e[r]);
    return n;
  }
  function No(t, e) {
    if (t === e) return !0;
    let n = el(t),
      r = el(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = Ee(t)), (r = Ee(e)), n || r)) return t === e;
    if (((n = tt(t)), (r = tt(e)), n || r)) return n && r ? eg(t, e) : !1;
    if (((n = Tt(t)), (r = Tt(e)), n || r)) {
      if (!n || !r) return !1;
      const o = Object.keys(t).length,
        s = Object.keys(e).length;
      if (o !== s) return !1;
      for (const i in t) {
        const a = t.hasOwnProperty(i),
          l = e.hasOwnProperty(i);
        if ((a && !l) || (!a && l) || !No(t[i], e[i])) return !1;
      }
    }
    return String(t) === String(e);
  }
  function Uf(t, e) {
    return t.findIndex((n) => No(n, e));
  }
  const Vf = (t) => !!(t && t.__v_isRef === !0),
    bt = (t) =>
      zt(t)
        ? t
        : t == null
          ? ""
          : tt(t) || (Tt(t) && (t.toString === Nf || !it(t.toString)))
            ? Vf(t)
              ? bt(t.value)
              : JSON.stringify(t, Hf, 2)
            : String(t),
    Hf = (t, e) =>
      Vf(e)
        ? Hf(t, e.value)
        : Fn(e)
          ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o], s) => ((n[ps(r, s) + " =>"] = o), n), {}) }
          : Io(e)
            ? { [`Set(${e.size})`]: [...e.values()].map((n) => ps(n)) }
            : Ee(e)
              ? ps(e)
              : Tt(e) && !tt(e) && !zf(e)
                ? String(e)
                : e,
    ps = (t, e = "") => {
      var n;
      return Ee(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
    };
  /**
   * @vue/reactivity v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Yt;
  class qf {
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
  function Kf(t) {
    return new qf(t);
  }
  function Zi() {
    return Yt;
  }
  function Wf(t, e = !1) {
    Yt && Yt.cleanups.push(t);
  }
  let kt;
  const gs = new WeakSet();
  class Gf {
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
      this.flags & 64 && ((this.flags &= -65), gs.has(this) && (gs.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Jf(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), rl(this), Qf(this);
      const e = kt,
        n = ge;
      (kt = this), (ge = !0);
      try {
        return this.fn();
      } finally {
        Yf(this), (kt = e), (ge = n), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Yi(e);
        (this.deps = this.depsTail = void 0), rl(this), this.onStop && this.onStop(), (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64 ? gs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      gi(this) && this.run();
    }
    get dirty() {
      return gi(this);
    }
  }
  let Zf = 0,
    gr;
  function Jf(t) {
    (t.flags |= 8), (t.next = gr), (gr = t);
  }
  function Ji() {
    Zf++;
  }
  function Qi() {
    if (--Zf > 0) return;
    let t;
    for (; gr; ) {
      let e = gr;
      for (gr = void 0; e; ) {
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
  function Qf(t) {
    for (let e = t.deps; e; e = e.nextDep)
      (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e);
  }
  function Yf(t) {
    let e,
      n = t.depsTail,
      r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Yi(r), ng(r)) : (e = r),
        (r.dep.activeLink = r.prevActiveLink),
        (r.prevActiveLink = void 0),
        (r = o);
    }
    (t.deps = e), (t.depsTail = n);
  }
  function gi(t) {
    for (let e = t.deps; e; e = e.nextDep)
      if (e.dep.version !== e.version || (e.dep.computed && (Xf(e.dep.computed) || e.dep.version !== e.version)))
        return !0;
    return !!t._dirty;
  }
  function Xf(t) {
    if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === Er)) return;
    t.globalVersion = Er;
    const e = t.dep;
    if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !gi(t))) {
      t.flags &= -3;
      return;
    }
    const n = kt,
      r = ge;
    (kt = t), (ge = !0);
    try {
      Qf(t);
      const o = t.fn(t._value);
      (e.version === 0 || ee(o, t._value)) && ((t._value = o), e.version++);
    } catch (o) {
      throw (e.version++, o);
    } finally {
      (kt = n), (ge = r), Yf(t), (t.flags &= -3);
    }
  }
  function Yi(t) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (
      (n && ((n.nextSub = r), (t.prevSub = void 0)),
      r && ((r.prevSub = n), (t.nextSub = void 0)),
      e.subs === t && (e.subs = n),
      !e.subs && e.computed)
    ) {
      e.computed.flags &= -5;
      for (let o = e.computed.deps; o; o = o.nextDep) Yi(o);
    }
  }
  function ng(t) {
    const { prevDep: e, nextDep: n } = t;
    e && ((e.nextDep = n), (t.prevDep = void 0)), n && ((n.prevDep = e), (t.nextDep = void 0));
  }
  let ge = !0;
  const th = [];
  function on() {
    th.push(ge), (ge = !1);
  }
  function sn() {
    const t = th.pop();
    ge = t === void 0 ? !0 : t;
  }
  function rl(t) {
    const { cleanup: e } = t;
    if (((t.cleanup = void 0), e)) {
      const n = kt;
      kt = void 0;
      try {
        e();
      } finally {
        kt = n;
      }
    }
  }
  let Er = 0;
  class rg {
    constructor(e, n) {
      (this.sub = e),
        (this.dep = n),
        (this.version = n.version),
        (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
  }
  class zo {
    constructor(e) {
      (this.computed = e), (this.version = 0), (this.activeLink = void 0), (this.subs = void 0);
    }
    track(e) {
      if (!kt || !ge || kt === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== kt)
        (n = this.activeLink = new rg(kt, this)),
          kt.deps
            ? ((n.prevDep = kt.depsTail), (kt.depsTail.nextDep = n), (kt.depsTail = n))
            : (kt.deps = kt.depsTail = n),
          kt.flags & 4 && eh(n);
      else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
        const r = n.nextDep;
        (r.prevDep = n.prevDep),
          n.prevDep && (n.prevDep.nextDep = r),
          (n.prevDep = kt.depsTail),
          (n.nextDep = void 0),
          (kt.depsTail.nextDep = n),
          (kt.depsTail = n),
          kt.deps === n && (kt.deps = r);
      }
      return n;
    }
    trigger(e) {
      this.version++, Er++, this.notify(e);
    }
    notify(e) {
      Ji();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Qi();
      }
    }
  }
  function eh(t) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) eh(r);
    }
    const n = t.dep.subs;
    n !== t && ((t.prevSub = n), n && (n.nextSub = t)), (t.dep.subs = t);
  }
  const go = new WeakMap(),
    vn = Symbol(""),
    mi = Symbol(""),
    Tr = Symbol("");
  function Zt(t, e, n) {
    if (ge && kt) {
      let r = go.get(t);
      r || go.set(t, (r = new Map()));
      let o = r.get(n);
      o || r.set(n, (o = new zo())), o.track();
    }
  }
  function Fe(t, e, n, r, o, s) {
    const i = go.get(t);
    if (!i) {
      Er++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((Ji(), e === "clear")) i.forEach(a);
    else {
      const l = tt(t),
        c = l && Gi(n);
      if (l && n === "length") {
        const u = Number(r);
        i.forEach((d, f) => {
          (f === "length" || f === Tr || (!Ee(f) && f >= u)) && a(d);
        });
      } else
        switch ((n !== void 0 && a(i.get(n)), c && a(i.get(Tr)), e)) {
          case "add":
            l ? c && a(i.get("length")) : (a(i.get(vn)), Fn(t) && a(i.get(mi)));
            break;
          case "delete":
            l || (a(i.get(vn)), Fn(t) && a(i.get(mi)));
            break;
          case "set":
            Fn(t) && a(i.get(vn));
            break;
        }
    }
    Qi();
  }
  function og(t, e) {
    var n;
    return (n = go.get(t)) == null ? void 0 : n.get(e);
  }
  function Mn(t) {
    const e = ht(t);
    return e === t ? e : (Zt(e, "iterate", Tr), fe(t) ? e : e.map(Gt));
  }
  function Do(t) {
    return Zt((t = ht(t)), "iterate", Tr), t;
  }
  const sg = {
    __proto__: null,
    [Symbol.iterator]() {
      return ms(this, Symbol.iterator, Gt);
    },
    concat(...t) {
      return Mn(this).concat(...t.map((e) => (tt(e) ? Mn(e) : e)));
    },
    entries() {
      return ms(this, "entries", (t) => ((t[1] = Gt(t[1])), t));
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
      return vs(this, "includes", t);
    },
    indexOf(...t) {
      return vs(this, "indexOf", t);
    },
    join(t) {
      return Mn(this).join(t);
    },
    lastIndexOf(...t) {
      return vs(this, "lastIndexOf", t);
    },
    map(t, e) {
      return Pe(this, "map", t, e, void 0, arguments);
    },
    pop() {
      return rr(this, "pop");
    },
    push(...t) {
      return rr(this, "push", t);
    },
    reduce(t, ...e) {
      return ol(this, "reduce", t, e);
    },
    reduceRight(t, ...e) {
      return ol(this, "reduceRight", t, e);
    },
    shift() {
      return rr(this, "shift");
    },
    some(t, e) {
      return Pe(this, "some", t, e, void 0, arguments);
    },
    splice(...t) {
      return rr(this, "splice", t);
    },
    toReversed() {
      return Mn(this).toReversed();
    },
    toSorted(t) {
      return Mn(this).toSorted(t);
    },
    toSpliced(...t) {
      return Mn(this).toSpliced(...t);
    },
    unshift(...t) {
      return rr(this, "unshift", t);
    },
    values() {
      return ms(this, "values", Gt);
    },
  };
  function ms(t, e, n) {
    const r = Do(t),
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
  const ig = Array.prototype;
  function Pe(t, e, n, r, o, s) {
    const i = Do(t),
      a = i !== t && !fe(t),
      l = i[e];
    if (l !== ig[e]) {
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
  function ol(t, e, n, r) {
    const o = Do(t);
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
  function vs(t, e, n) {
    const r = ht(t);
    Zt(r, "iterate", Tr);
    const o = r[e](...n);
    return (o === -1 || o === !1) && na(n[0]) ? ((n[0] = ht(n[0])), r[e](...n)) : o;
  }
  function rr(t, e, n = []) {
    on(), Ji();
    const r = ht(t)[e].apply(t, n);
    return Qi(), sn(), r;
  }
  const ag = qi("__proto__,__v_isRef,__isVue"),
    nh = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((t) => t !== "arguments" && t !== "caller")
        .map((t) => Symbol[t])
        .filter(Ee),
    );
  function lg(t) {
    Ee(t) || (t = String(t));
    const e = ht(this);
    return Zt(e, "has", t), e.hasOwnProperty(t);
  }
  class rh {
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
        return r === (o ? (s ? wg : ah) : s ? ih : sh).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
          ? e
          : void 0;
      const i = tt(e);
      if (!o) {
        let l;
        if (i && (l = sg[n])) return l;
        if (n === "hasOwnProperty") return lg;
      }
      const a = Reflect.get(e, n, Mt(e) ? e : r);
      return (Ee(n) ? nh.has(n) : ag(n)) || (o || Zt(e, "get", n), s)
        ? a
        : Mt(a)
          ? i && Gi(n)
            ? a
            : a.value
          : Tt(a)
            ? o
              ? ch(a)
              : Jn(a)
            : a;
    }
  }
  class oh extends rh {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, n, r, o) {
      let s = e[n];
      if (!this._isShallow) {
        const l = bn(s);
        if ((!fe(r) && !bn(r) && ((s = ht(s)), (r = ht(r))), !tt(e) && Mt(s) && !Mt(r)))
          return l ? !1 : ((s.value = r), !0);
      }
      const i = tt(e) && Gi(n) ? Number(n) < e.length : pt(e, n),
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
      return (!Ee(n) || !nh.has(n)) && Zt(e, "has", n), r;
    }
    ownKeys(e) {
      return Zt(e, "iterate", tt(e) ? "length" : vn), Reflect.ownKeys(e);
    }
  }
  class cg extends rh {
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
  const ug = new oh(),
    fg = new cg(),
    hg = new oh(!0),
    Xi = (t) => t,
    Fo = (t) => Reflect.getPrototypeOf(t);
  function Hr(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const o = ht(t),
      s = ht(e);
    n || (ee(e, s) && Zt(o, "get", e), Zt(o, "get", s));
    const { has: i } = Fo(o),
      a = r ? Xi : n ? oa : Gt;
    if (i.call(o, e)) return a(t.get(e));
    if (i.call(o, s)) return a(t.get(s));
    t !== o && t.get(e);
  }
  function qr(t, e = !1) {
    const n = this.__v_raw,
      r = ht(n),
      o = ht(t);
    return e || (ee(t, o) && Zt(r, "has", t), Zt(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
  }
  function Kr(t, e = !1) {
    return (t = t.__v_raw), !e && Zt(ht(t), "iterate", vn), Reflect.get(t, "size", t);
  }
  function sl(t, e = !1) {
    !e && !fe(t) && !bn(t) && (t = ht(t));
    const n = ht(this);
    return Fo(n).has.call(n, t) || (n.add(t), Fe(n, "add", t, t)), this;
  }
  function il(t, e, n = !1) {
    !n && !fe(e) && !bn(e) && (e = ht(e));
    const r = ht(this),
      { has: o, get: s } = Fo(r);
    let i = o.call(r, t);
    i || ((t = ht(t)), (i = o.call(r, t)));
    const a = s.call(r, t);
    return r.set(t, e), i ? ee(e, a) && Fe(r, "set", t, e) : Fe(r, "add", t, e), this;
  }
  function al(t) {
    const e = ht(this),
      { has: n, get: r } = Fo(e);
    let o = n.call(e, t);
    o || ((t = ht(t)), (o = n.call(e, t))), r && r.call(e, t);
    const s = e.delete(t);
    return o && Fe(e, "delete", t, void 0), s;
  }
  function ll() {
    const t = ht(this),
      e = t.size !== 0,
      n = t.clear();
    return e && Fe(t, "clear", void 0, void 0), n;
  }
  function Wr(t, e) {
    return function (r, o) {
      const s = this,
        i = s.__v_raw,
        a = ht(i),
        l = e ? Xi : t ? oa : Gt;
      return !t && Zt(a, "iterate", vn), i.forEach((c, u) => r.call(o, l(c), l(u), s));
    };
  }
  function Gr(t, e, n) {
    return function (...r) {
      const o = this.__v_raw,
        s = ht(o),
        i = Fn(s),
        a = t === "entries" || (t === Symbol.iterator && i),
        l = t === "keys" && i,
        c = o[t](...r),
        u = n ? Xi : e ? oa : Gt;
      return (
        !e && Zt(s, "iterate", l ? mi : vn),
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
  function Ke(t) {
    return function (...e) {
      return t === "delete" ? !1 : t === "clear" ? void 0 : this;
    };
  }
  function dg() {
    const t = {
        get(s) {
          return Hr(this, s);
        },
        get size() {
          return Kr(this);
        },
        has: qr,
        add: sl,
        set: il,
        delete: al,
        clear: ll,
        forEach: Wr(!1, !1),
      },
      e = {
        get(s) {
          return Hr(this, s, !1, !0);
        },
        get size() {
          return Kr(this);
        },
        has: qr,
        add(s) {
          return sl.call(this, s, !0);
        },
        set(s, i) {
          return il.call(this, s, i, !0);
        },
        delete: al,
        clear: ll,
        forEach: Wr(!1, !0),
      },
      n = {
        get(s) {
          return Hr(this, s, !0);
        },
        get size() {
          return Kr(this, !0);
        },
        has(s) {
          return qr.call(this, s, !0);
        },
        add: Ke("add"),
        set: Ke("set"),
        delete: Ke("delete"),
        clear: Ke("clear"),
        forEach: Wr(!0, !1),
      },
      r = {
        get(s) {
          return Hr(this, s, !0, !0);
        },
        get size() {
          return Kr(this, !0);
        },
        has(s) {
          return qr.call(this, s, !0);
        },
        add: Ke("add"),
        set: Ke("set"),
        delete: Ke("delete"),
        clear: Ke("clear"),
        forEach: Wr(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
        (t[s] = Gr(s, !1, !1)), (n[s] = Gr(s, !0, !1)), (e[s] = Gr(s, !1, !0)), (r[s] = Gr(s, !0, !0));
      }),
      [t, n, e, r]
    );
  }
  const [pg, gg, mg, vg] = dg();
  function ta(t, e) {
    const n = e ? (t ? vg : mg) : t ? gg : pg;
    return (r, o, s) =>
      o === "__v_isReactive"
        ? !t
        : o === "__v_isReadonly"
          ? t
          : o === "__v_raw"
            ? r
            : Reflect.get(pt(n, o) && o in r ? n : r, o, s);
  }
  const yg = { get: ta(!1, !1) },
    bg = { get: ta(!1, !0) },
    _g = { get: ta(!0, !1) },
    sh = new WeakMap(),
    ih = new WeakMap(),
    ah = new WeakMap(),
    wg = new WeakMap();
  function xg(t) {
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
  function kg(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : xg(Kp(t));
  }
  function Jn(t) {
    return bn(t) ? t : ea(t, !1, ug, yg, sh);
  }
  function lh(t) {
    return ea(t, !1, hg, bg, ih);
  }
  function ch(t) {
    return ea(t, !0, fg, _g, ah);
  }
  function ea(t, e, n, r, o) {
    if (!Tt(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const s = o.get(t);
    if (s) return s;
    const i = kg(t);
    if (i === 0) return t;
    const a = new Proxy(t, i === 2 ? r : n);
    return o.set(t, a), a;
  }
  function Ye(t) {
    return bn(t) ? Ye(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function bn(t) {
    return !!(t && t.__v_isReadonly);
  }
  function fe(t) {
    return !!(t && t.__v_isShallow);
  }
  function na(t) {
    return t ? !!t.__v_raw : !1;
  }
  function ht(t) {
    const e = t && t.__v_raw;
    return e ? ht(e) : t;
  }
  function ra(t) {
    return !pt(t, "__v_skip") && Object.isExtensible(t) && Df(t, "__v_skip", !0), t;
  }
  const Gt = (t) => (Tt(t) ? Jn(t) : t),
    oa = (t) => (Tt(t) ? ch(t) : t);
  function Mt(t) {
    return t ? t.__v_isRef === !0 : !1;
  }
  function ut(t) {
    return fh(t, !1);
  }
  function uh(t) {
    return fh(t, !0);
  }
  function fh(t, e) {
    return Mt(t) ? t : new Sg(t, e);
  }
  class Sg {
    constructor(e, n) {
      (this.dep = new zo()),
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
        r = this.__v_isShallow || fe(e) || bn(e);
      (e = r ? e : ht(e)), ee(e, n) && ((this._rawValue = e), (this._value = r ? e : Gt(e)), this.dep.trigger());
    }
  }
  function F(t) {
    return Mt(t) ? t.value : t;
  }
  const Ag = {
    get: (t, e, n) => (e === "__v_raw" ? t : F(Reflect.get(t, e, n))),
    set: (t, e, n, r) => {
      const o = t[e];
      return Mt(o) && !Mt(n) ? ((o.value = n), !0) : Reflect.set(t, e, n, r);
    },
  };
  function hh(t) {
    return Ye(t) ? t : new Proxy(t, Ag);
  }
  class Eg {
    constructor(e) {
      (this.__v_isRef = !0), (this._value = void 0);
      const n = (this.dep = new zo()),
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
  function Tg(t) {
    return new Eg(t);
  }
  function Og(t) {
    const e = tt(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = Rg(t, n);
    return e;
  }
  class Cg {
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
      return og(ht(this._object), this._key);
    }
  }
  function Rg(t, e, n) {
    const r = t[e];
    return Mt(r) ? r : new Cg(t, e, n);
  }
  class jg {
    constructor(e, n, r) {
      (this.fn = e),
        (this.setter = n),
        (this._value = void 0),
        (this.dep = new zo(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = Er - 1),
        (this.effect = this),
        (this.__v_isReadonly = !n),
        (this.isSSR = r);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && kt !== this)) return Jf(this), !0;
    }
    get value() {
      const e = this.dep.track();
      return Xf(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
      this.setter && this.setter(e);
    }
  }
  function $g(t, e, n = !1) {
    let r, o;
    return it(t) ? (r = t) : ((r = t.get), (o = t.set)), new jg(r, o, n);
  }
  const Zr = {},
    mo = new WeakMap();
  let dn;
  function Pg(t, e = !1, n = dn) {
    if (n) {
      let r = mo.get(n);
      r || mo.set(n, (r = [])), r.push(t);
    }
  }
  function Ig(t, e, n = dt) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n,
      c = (k) => (o ? k : fe(k) || o === !1 || o === 0 ? ze(k, 1) : ze(k));
    let u,
      d,
      f,
      h,
      g = !1,
      m = !1;
    if (
      (Mt(t)
        ? ((d = () => t.value), (g = fe(t)))
        : Ye(t)
          ? ((d = () => c(t)), (g = !0))
          : tt(t)
            ? ((m = !0),
              (g = t.some((k) => Ye(k) || fe(k))),
              (d = () =>
                t.map((k) => {
                  if (Mt(k)) return k.value;
                  if (Ye(k)) return c(k);
                  if (it(k)) return l ? l(k, 2) : k();
                })))
            : it(t)
              ? e
                ? (d = l ? () => l(t, 2) : t)
                : (d = () => {
                    if (f) {
                      on();
                      try {
                        f();
                      } finally {
                        sn();
                      }
                    }
                    const k = dn;
                    dn = u;
                    try {
                      return l ? l(t, 3, [h]) : t(h);
                    } finally {
                      dn = k;
                    }
                  })
              : (d = ke),
      e && o)
    ) {
      const k = d,
        E = o === !0 ? 1 / 0 : o;
      d = () => ze(k(), E);
    }
    const y = Zi(),
      w = () => {
        u.stop(), y && Wi(y.effects, u);
      };
    if (s && e) {
      const k = e;
      e = (...E) => {
        k(...E), w();
      };
    }
    let _ = m ? new Array(t.length).fill(Zr) : Zr;
    const x = (k) => {
      if (!(!(u.flags & 1) || (!u.dirty && !k)))
        if (e) {
          const E = u.run();
          if (o || g || (m ? E.some((z, V) => ee(z, _[V])) : ee(E, _))) {
            f && f();
            const z = dn;
            dn = u;
            try {
              const V = [E, _ === Zr ? void 0 : m && _[0] === Zr ? [] : _, h];
              l ? l(e, 3, V) : e(...V), (_ = E);
            } finally {
              dn = z;
            }
          }
        } else u.run();
    };
    return (
      a && a(x),
      (u = new Gf(d)),
      (u.scheduler = i ? () => i(x, !1) : x),
      (h = (k) => Pg(k, !1, u)),
      (f = u.onStop =
        () => {
          const k = mo.get(u);
          if (k) {
            if (l) l(k, 4);
            else for (const E of k) E();
            mo.delete(u);
          }
        }),
      e ? (r ? x(!0) : (_ = u.run())) : i ? i(x.bind(null, !0), !0) : u.run(),
      (w.pause = u.pause.bind(u)),
      (w.resume = u.resume.bind(u)),
      (w.stop = w),
      w
    );
  }
  function ze(t, e = 1 / 0, n) {
    if (e <= 0 || !Tt(t) || t.__v_skip || ((n = n || new Set()), n.has(t))) return t;
    if ((n.add(t), e--, Mt(t))) ze(t.value, e, n);
    else if (tt(t)) for (let r = 0; r < t.length; r++) ze(t[r], e, n);
    else if (Io(t) || Fn(t))
      t.forEach((r) => {
        ze(r, e, n);
      });
    else if (zf(t)) {
      for (const r in t) ze(t[r], e, n);
      for (const r of Object.getOwnPropertySymbols(t))
        Object.prototype.propertyIsEnumerable.call(t, r) && ze(t[r], e, n);
    }
    return t;
  }
  /**
   * @vue/runtime-core v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function Dr(t, e, n, r) {
    try {
      return r ? t(...r) : t();
    } catch (o) {
      Bo(o, e, n);
    }
  }
  function Te(t, e, n, r) {
    if (it(t)) {
      const o = Dr(t, e, n, r);
      return (
        o &&
          Lf(o) &&
          o.catch((s) => {
            Bo(s, e, n);
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
  function Bo(t, e, n, r = !0) {
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
        on(), Dr(s, null, 10, [t, l, c]), sn();
        return;
      }
    }
    Mg(t, n, o, r, i);
  }
  function Mg(t, e, n, r = !0, o = !1) {
    if (o) throw t;
    console.error(t);
  }
  let Or = !1,
    vi = !1;
  const Xt = [];
  let we = 0;
  const Bn = [];
  let Ze = null,
    Nn = 0;
  const dh = Promise.resolve();
  let sa = null;
  function Uo(t) {
    const e = sa || dh;
    return t ? e.then(this ? t.bind(this) : t) : e;
  }
  function Lg(t) {
    let e = Or ? we + 1 : 0,
      n = Xt.length;
    for (; e < n; ) {
      const r = (e + n) >>> 1,
        o = Xt[r],
        s = Cr(o);
      s < t || (s === t && o.flags & 2) ? (e = r + 1) : (n = r);
    }
    return e;
  }
  function ia(t) {
    if (!(t.flags & 1)) {
      const e = Cr(t),
        n = Xt[Xt.length - 1];
      !n || (!(t.flags & 2) && e >= Cr(n)) ? Xt.push(t) : Xt.splice(Lg(e), 0, t), (t.flags |= 1), ph();
    }
  }
  function ph() {
    !Or && !vi && ((vi = !0), (sa = dh.then(mh)));
  }
  function Ng(t) {
    tt(t) ? Bn.push(...t) : Ze && t.id === -1 ? Ze.splice(Nn + 1, 0, t) : t.flags & 1 || (Bn.push(t), (t.flags |= 1)),
      ph();
  }
  function cl(t, e, n = Or ? we + 1 : 0) {
    for (; n < Xt.length; n++) {
      const r = Xt[n];
      if (r && r.flags & 2) {
        if (t && r.id !== t.uid) continue;
        Xt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), (r.flags &= -2);
      }
    }
  }
  function gh(t) {
    if (Bn.length) {
      const e = [...new Set(Bn)].sort((n, r) => Cr(n) - Cr(r));
      if (((Bn.length = 0), Ze)) {
        Ze.push(...e);
        return;
      }
      for (Ze = e, Nn = 0; Nn < Ze.length; Nn++) {
        const n = Ze[Nn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
      }
      (Ze = null), (Nn = 0);
    }
  }
  const Cr = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
  function mh(t) {
    (vi = !1), (Or = !0);
    try {
      for (we = 0; we < Xt.length; we++) {
        const e = Xt[we];
        e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Dr(e, e.i, e.i ? 15 : 14), (e.flags &= -2));
      }
    } finally {
      for (; we < Xt.length; we++) {
        const e = Xt[we];
        e && (e.flags &= -2);
      }
      (we = 0), (Xt.length = 0), gh(), (Or = !1), (sa = null), (Xt.length || Bn.length) && mh();
    }
  }
  let Ft = null,
    vh = null;
  function vo(t) {
    const e = Ft;
    return (Ft = t), (vh = (t && t.type.__scopeId) || null), e;
  }
  function Oe(t, e = Ft, n) {
    if (!e || t._n) return t;
    const r = (...o) => {
      r._d && vl(-1);
      const s = vo(e);
      let i;
      try {
        i = t(...o);
      } finally {
        vo(s), r._d && vl(1);
      }
      return i;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Vo(t, e) {
    if (Ft === null) return t;
    const n = Zo(Ft),
      r = t.dirs || (t.dirs = []);
    for (let o = 0; o < e.length; o++) {
      let [s, i, a, l = dt] = e[o];
      s &&
        (it(s) && (s = { mounted: s, updated: s }),
        s.deep && ze(i),
        r.push({ dir: s, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
    }
    return t;
  }
  function un(t, e, n, r) {
    const o = t.dirs,
      s = e && e.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (on(), Te(l, n, 8, [t.el, a, t, e]), sn());
    }
  }
  const zg = Symbol("_vte"),
    Dg = (t) => t.__isTeleport;
  function aa(t, e) {
    t.shapeFlag & 6 && t.component
      ? ((t.transition = e), aa(t.component.subTree, e))
      : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Lt(t, e) {
    return it(t) ? Vt({ name: t.name }, e, { setup: t }) : t;
  }
  function yh(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function yi(t, e, n, r, o = !1) {
    if (tt(t)) {
      t.forEach((g, m) => yi(g, e && (tt(e) ? e[m] : e), n, r, o));
      return;
    }
    if (Un(r) && !o) return;
    const s = r.shapeFlag & 4 ? Zo(r.component) : r.el,
      i = o ? null : s,
      { i: a, r: l } = t,
      c = e && e.r,
      u = a.refs === dt ? (a.refs = {}) : a.refs,
      d = a.setupState,
      f = ht(d),
      h = d === dt ? () => !1 : (g) => pt(f, g);
    if ((c != null && c !== l && (zt(c) ? ((u[c] = null), h(c) && (d[c] = null)) : Mt(c) && (c.value = null)), it(l)))
      Dr(l, a, 12, [i, u]);
    else {
      const g = zt(l),
        m = Mt(l);
      if (g || m) {
        const y = () => {
          if (t.f) {
            const w = g ? (h(l) ? d[l] : u[l]) : l.value;
            o
              ? tt(w) && Wi(w, s)
              : tt(w)
                ? w.includes(s) || w.push(s)
                : g
                  ? ((u[l] = [s]), h(l) && (d[l] = u[l]))
                  : ((l.value = [s]), t.k && (u[t.k] = l.value));
          } else g ? ((u[l] = i), h(l) && (d[l] = i)) : m && ((l.value = i), t.k && (u[t.k] = i));
        };
        i ? ((y.id = -1), se(y, n)) : y();
      }
    }
  }
  const Un = (t) => !!t.type.__asyncLoader,
    bh = (t) => t.type.__isKeepAlive;
  function Fg(t, e) {
    _h(t, "a", e);
  }
  function Bg(t, e) {
    _h(t, "da", e);
  }
  function _h(t, e, n = Bt) {
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
    if ((Ho(e, r, n), n)) {
      let o = n.parent;
      for (; o && o.parent; ) bh(o.parent.vnode) && Ug(r, e, n, o), (o = o.parent);
    }
  }
  function Ug(t, e, n, r) {
    const o = Ho(e, t, r, !0);
    xh(() => {
      Wi(r[e], o);
    }, n);
  }
  function Ho(t, e, n = Bt, r = !1) {
    if (n) {
      const o = n[t] || (n[t] = []),
        s =
          e.__weh ||
          (e.__weh = (...i) => {
            on();
            const a = Fr(n),
              l = Te(e, n, t, i);
            return a(), sn(), l;
          });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  const Ue =
      (t) =>
      (e, n = Bt) => {
        (!Go || t === "sp") && Ho(t, (...r) => e(...r), n);
      },
    Vg = Ue("bm"),
    la = Ue("m"),
    wh = Ue("bu"),
    Hg = Ue("u"),
    qg = Ue("bum"),
    xh = Ue("um"),
    Kg = Ue("sp"),
    Wg = Ue("rtg"),
    Gg = Ue("rtc");
  function Zg(t, e = Bt) {
    Ho("ec", t, e);
  }
  const Jg = "components";
  function kh(t, e) {
    return Yg(Jg, t, !0, e) || t;
  }
  const Qg = Symbol.for("v-ndc");
  function Yg(t, e, n = !0, r = !1) {
    const o = Ft || Bt;
    if (o) {
      const s = o.type;
      {
        const a = Fm(s, !1);
        if (a && (a === e || a === ae(e) || a === Lo(ae(e)))) return s;
      }
      const i = ul(o[t] || s[t], e) || ul(o.appContext[t], e);
      return !i && r ? s : i;
    }
  }
  function ul(t, e) {
    return t && (t[e] || t[ae(e)] || t[Lo(ae(e))]);
  }
  function Ut(t, e, n, r) {
    let o;
    const s = n,
      i = tt(t);
    if (i || zt(t)) {
      const a = i && Ye(t);
      let l = !1;
      a && ((l = !fe(t)), (t = Do(t))), (o = new Array(t.length));
      for (let c = 0, u = t.length; c < u; c++) o[c] = e(l ? Gt(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      o = new Array(t);
      for (let a = 0; a < t; a++) o[a] = e(a + 1, a, void 0, s);
    } else if (Tt(t))
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
    if (Ft.ce || (Ft.parent && Un(Ft.parent) && Ft.parent.ce))
      return e !== "default" && (n.name = e), P(), Hn(lt, null, [st("slot", n, r)], 64);
    let s = t[e];
    s && s._c && (s._d = !1), P();
    const i = s && Sh(s(n)),
      a = Hn(
        lt,
        { key: (n.key || (i && i.key) || `_${e}`) + (!i && r ? "_fb" : "") },
        i || [],
        i && t._ === 1 ? 64 : -2,
      );
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
  }
  function Sh(t) {
    return t.some((e) => (_o(e) ? !(e.type === tn || (e.type === lt && !Sh(e.children))) : !0)) ? t : null;
  }
  const bi = (t) => (t ? (Kh(t) ? Zo(t) : bi(t.parent)) : null),
    mr = Vt(Object.create(null), {
      $: (t) => t,
      $el: (t) => t.vnode.el,
      $data: (t) => t.data,
      $props: (t) => t.props,
      $attrs: (t) => t.attrs,
      $slots: (t) => t.slots,
      $refs: (t) => t.refs,
      $parent: (t) => bi(t.parent),
      $root: (t) => bi(t.root),
      $host: (t) => t.ce,
      $emit: (t) => t.emit,
      $options: (t) => ca(t),
      $forceUpdate: (t) =>
        t.f ||
        (t.f = () => {
          ia(t.update);
        }),
      $nextTick: (t) => t.n || (t.n = Uo.bind(t.proxy)),
      $watch: (t) => xm.bind(t),
    }),
    ys = (t, e) => t !== dt && !t.__isScriptSetup && pt(t, e),
    Xg = {
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
            if (ys(r, e)) return (i[e] = 1), r[e];
            if (o !== dt && pt(o, e)) return (i[e] = 2), o[e];
            if ((c = t.propsOptions[0]) && pt(c, e)) return (i[e] = 3), s[e];
            if (n !== dt && pt(n, e)) return (i[e] = 4), n[e];
            _i && (i[e] = 0);
          }
        }
        const u = mr[e];
        let d, f;
        if (u) return e === "$attrs" && Zt(t.attrs, "get", ""), u(t);
        if ((d = a.__cssModules) && (d = d[e])) return d;
        if (n !== dt && pt(n, e)) return (i[e] = 4), n[e];
        if (((f = l.config.globalProperties), pt(f, e))) return f[e];
      },
      set({ _: t }, e, n) {
        const { data: r, setupState: o, ctx: s } = t;
        return ys(o, e)
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
          ys(e, i) ||
          ((a = s[0]) && pt(a, i)) ||
          pt(r, i) ||
          pt(mr, i) ||
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
  function yo(t) {
    return tt(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
  }
  function tm(t, e) {
    return !t || !e ? t || e : tt(t) && tt(e) ? t.concat(e) : Vt({}, yo(t), yo(e));
  }
  let _i = !0;
  function em(t) {
    const e = ca(t),
      n = t.proxy,
      r = t.ctx;
    (_i = !1), e.beforeCreate && fl(e.beforeCreate, t, "bc");
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
      updated: g,
      activated: m,
      deactivated: y,
      beforeDestroy: w,
      beforeUnmount: _,
      destroyed: x,
      unmounted: k,
      render: E,
      renderTracked: z,
      renderTriggered: V,
      errorCaptured: H,
      serverPrefetch: X,
      expose: I,
      inheritAttrs: p,
      components: S,
      directives: C,
      filters: J,
    } = e;
    if ((c && nm(c, r, null), i))
      for (const q in i) {
        const at = i[q];
        it(at) && (r[q] = at.bind(n));
      }
    if (o) {
      const q = o.call(n, n);
      Tt(q) && (t.data = Jn(q));
    }
    if (((_i = !0), s))
      for (const q in s) {
        const at = s[q],
          Ht = it(at) ? at.bind(n, n) : it(at.get) ? at.get.bind(n, n) : ke,
          $t = !it(at) && it(at.set) ? at.set.bind(n) : ke,
          Jt = rt({ get: Ht, set: $t });
        Object.defineProperty(r, q, {
          enumerable: !0,
          configurable: !0,
          get: () => Jt.value,
          set: (wt) => (Jt.value = wt),
        });
      }
    if (a) for (const q in a) Ah(a[q], r, n, q);
    if (l) {
      const q = it(l) ? l.call(n) : l;
      Reflect.ownKeys(q).forEach((at) => {
        ao(at, q[at]);
      });
    }
    u && fl(u, t, "c");
    function K(q, at) {
      tt(at) ? at.forEach((Ht) => q(Ht.bind(n))) : at && q(at.bind(n));
    }
    if (
      (K(Vg, d),
      K(la, f),
      K(wh, h),
      K(Hg, g),
      K(Fg, m),
      K(Bg, y),
      K(Zg, H),
      K(Gg, z),
      K(Wg, V),
      K(qg, _),
      K(xh, k),
      K(Kg, X),
      tt(I))
    )
      if (I.length) {
        const q = t.exposed || (t.exposed = {});
        I.forEach((at) => {
          Object.defineProperty(q, at, { get: () => n[at], set: (Ht) => (n[at] = Ht) });
        });
      } else t.exposed || (t.exposed = {});
    E && t.render === ke && (t.render = E),
      p != null && (t.inheritAttrs = p),
      S && (t.components = S),
      C && (t.directives = C),
      X && yh(t);
  }
  function nm(t, e, n = ke) {
    tt(t) && (t = wi(t));
    for (const r in t) {
      const o = t[r];
      let s;
      Tt(o) ? ("default" in o ? (s = he(o.from || r, o.default, !0)) : (s = he(o.from || r))) : (s = he(o)),
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
  function fl(t, e, n) {
    Te(tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
  }
  function Ah(t, e, n, r) {
    let o = r.includes(".") ? Dh(n, r) : () => n[r];
    if (zt(t)) {
      const s = e[t];
      it(s) && Se(o, s);
    } else if (it(t)) Se(o, t.bind(n));
    else if (Tt(t))
      if (tt(t)) t.forEach((s) => Ah(s, e, n, r));
      else {
        const s = it(t.handler) ? t.handler.bind(n) : e[t.handler];
        it(s) && Se(o, s, t);
      }
  }
  function ca(t) {
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
          : ((l = {}), o.length && o.forEach((c) => bo(l, c, i, !0)), bo(l, e, i)),
      Tt(e) && s.set(e, l),
      l
    );
  }
  function bo(t, e, n, r = !1) {
    const { mixins: o, extends: s } = e;
    s && bo(t, s, n, !0), o && o.forEach((i) => bo(t, i, n, !0));
    for (const i in e)
      if (!(r && i === "expose")) {
        const a = rm[i] || (n && n[i]);
        t[i] = a ? a(t[i], e[i]) : e[i];
      }
    return t;
  }
  const rm = {
    data: hl,
    props: dl,
    emits: dl,
    methods: fr,
    computed: fr,
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
    components: fr,
    directives: fr,
    watch: sm,
    provide: hl,
    inject: om,
  };
  function hl(t, e) {
    return e
      ? t
        ? function () {
            return Vt(it(t) ? t.call(this, this) : t, it(e) ? e.call(this, this) : e);
          }
        : e
      : t;
  }
  function om(t, e) {
    return fr(wi(t), wi(e));
  }
  function wi(t) {
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
  function fr(t, e) {
    return t ? Vt(Object.create(null), t, e) : e;
  }
  function dl(t, e) {
    return t ? (tt(t) && tt(e) ? [...new Set([...t, ...e])] : Vt(Object.create(null), yo(t), yo(e ?? {}))) : e;
  }
  function sm(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Vt(Object.create(null), t);
    for (const r in e) n[r] = Qt(t[r], e[r]);
    return n;
  }
  function Eh() {
    return {
      app: null,
      config: {
        isNativeTag: Hp,
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
  let im = 0;
  function am(t, e) {
    return function (r, o = null) {
      it(r) || (r = Vt({}, r)), o != null && !Tt(o) && (o = null);
      const s = Eh(),
        i = new WeakSet(),
        a = [];
      let l = !1;
      const c = (s.app = {
        _uid: im++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Um,
        get config() {
          return s.config;
        },
        set config(u) {},
        use(u, ...d) {
          return i.has(u) || (u && it(u.install) ? (i.add(u), u.install(c, ...d)) : it(u) && (i.add(u), u(c, ...d))), c;
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
            const h = c._ceVNode || st(r, o);
            return (
              (h.appContext = s),
              f === !0 ? (f = "svg") : f === !1 && (f = void 0),
              d && e ? e(h, u) : t(h, u, f),
              (l = !0),
              (c._container = u),
              (u.__vue_app__ = c),
              Zo(h.component)
            );
          }
        },
        onUnmount(u) {
          a.push(u);
        },
        unmount() {
          l && (Te(a, c._instance, 16), t(null, c._container), delete c._container.__vue_app__);
        },
        provide(u, d) {
          return (s.provides[u] = d), c;
        },
        runWithContext(u) {
          const d = yn;
          yn = c;
          try {
            return u();
          } finally {
            yn = d;
          }
        },
      });
      return c;
    };
  }
  let yn = null;
  function ao(t, e) {
    if (Bt) {
      let n = Bt.provides;
      const r = Bt.parent && Bt.parent.provides;
      r === n && (n = Bt.provides = Object.create(r)), (n[t] = e);
    }
  }
  function he(t, e, n = !1) {
    const r = Bt || Ft;
    if (r || yn) {
      const o = yn
        ? yn._context.provides
        : r
          ? r.parent == null
            ? r.vnode.appContext && r.vnode.appContext.provides
            : r.parent.provides
          : void 0;
      if (o && t in o) return o[t];
      if (arguments.length > 1) return n && it(e) ? e.call(r && r.proxy) : e;
    }
  }
  function lm() {
    return !!(Bt || Ft || yn);
  }
  const Th = {},
    Oh = () => Object.create(Th),
    Ch = (t) => Object.getPrototypeOf(t) === Th;
  function cm(t, e, n, r = !1) {
    const o = {},
      s = Oh();
    (t.propsDefaults = Object.create(null)), Rh(t, e, o, s);
    for (const i in t.propsOptions[0]) i in o || (o[i] = void 0);
    n ? (t.props = r ? o : lh(o)) : t.type.props ? (t.props = o) : (t.props = s), (t.attrs = s);
  }
  function um(t, e, n, r) {
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
          if (Ko(t.emitsOptions, f)) continue;
          const h = e[f];
          if (l)
            if (pt(s, f)) h !== s[f] && ((s[f] = h), (c = !0));
            else {
              const g = ae(f);
              o[g] = xi(l, a, g, h, t, !1);
            }
          else h !== s[f] && ((s[f] = h), (c = !0));
        }
      }
    } else {
      Rh(t, e, o, s) && (c = !0);
      let u;
      for (const d in a)
        (!e || (!pt(e, d) && ((u = nn(d)) === d || !pt(e, u)))) &&
          (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (o[d] = xi(l, a, d, void 0, t, !0)) : delete o[d]);
      if (s !== a) for (const d in s) (!e || !pt(e, d)) && (delete s[d], (c = !0));
    }
    c && Fe(t.attrs, "set", "");
  }
  function Rh(t, e, n, r) {
    const [o, s] = t.propsOptions;
    let i = !1,
      a;
    if (e)
      for (let l in e) {
        if (dr(l)) continue;
        const c = e[l];
        let u;
        o && pt(o, (u = ae(l)))
          ? !s || !s.includes(u)
            ? (n[u] = c)
            : ((a || (a = {}))[u] = c)
          : Ko(t.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
      }
    if (s) {
      const l = ht(n),
        c = a || dt;
      for (let u = 0; u < s.length; u++) {
        const d = s[u];
        n[d] = xi(o, l, d, c[d], t, !pt(c, d));
      }
    }
    return i;
  }
  function xi(t, e, n, r, o, s) {
    const i = t[n];
    if (i != null) {
      const a = pt(i, "default");
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
      i[0] && (s && !a ? (r = !1) : i[1] && (r === "" || r === nn(n)) && (r = !0));
    }
    return r;
  }
  const fm = new WeakMap();
  function jh(t, e, n = !1) {
    const r = n ? fm : e.propsCache,
      o = r.get(t);
    if (o) return o;
    const s = t.props,
      i = {},
      a = [];
    let l = !1;
    if (!it(t)) {
      const u = (d) => {
        l = !0;
        const [f, h] = jh(d, e, !0);
        Vt(i, f), h && a.push(...h);
      };
      !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    if (!s && !l) return Tt(t) && r.set(t, Dn), Dn;
    if (tt(s))
      for (let u = 0; u < s.length; u++) {
        const d = ae(s[u]);
        pl(d) && (i[d] = dt);
      }
    else if (s)
      for (const u in s) {
        const d = ae(u);
        if (pl(d)) {
          const f = s[u],
            h = (i[d] = tt(f) || it(f) ? { type: f } : Vt({}, f)),
            g = h.type;
          let m = !1,
            y = !0;
          if (tt(g))
            for (let w = 0; w < g.length; ++w) {
              const _ = g[w],
                x = it(_) && _.name;
              if (x === "Boolean") {
                m = !0;
                break;
              } else x === "String" && (y = !1);
            }
          else m = it(g) && g.name === "Boolean";
          (h[0] = m), (h[1] = y), (m || pt(h, "default")) && a.push(d);
        }
      }
    const c = [i, a];
    return Tt(t) && r.set(t, c), c;
  }
  function pl(t) {
    return t[0] !== "$" && !dr(t);
  }
  const $h = (t) => t[0] === "_" || t === "$stable",
    ua = (t) => (tt(t) ? t.map(xe) : [xe(t)]),
    hm = (t, e, n) => {
      if (e._n) return e;
      const r = Oe((...o) => ua(e(...o)), n);
      return (r._c = !1), r;
    },
    Ph = (t, e, n) => {
      const r = t._ctx;
      for (const o in t) {
        if ($h(o)) continue;
        const s = t[o];
        if (it(s)) e[o] = hm(o, s, r);
        else if (s != null) {
          const i = ua(s);
          e[o] = () => i;
        }
      }
    },
    Ih = (t, e) => {
      const n = ua(e);
      t.slots.default = () => n;
    },
    Mh = (t, e, n) => {
      for (const r in e) (n || r !== "_") && (t[r] = e[r]);
    },
    dm = (t, e, n) => {
      const r = (t.slots = Oh());
      if (t.vnode.shapeFlag & 32) {
        const o = e._;
        o ? (Mh(r, e, n), n && Df(r, "_", o, !0)) : Ph(e, r);
      } else e && Ih(t, e);
    },
    pm = (t, e, n) => {
      const { vnode: r, slots: o } = t;
      let s = !0,
        i = dt;
      if (r.shapeFlag & 32) {
        const a = e._;
        a ? (n && a === 1 ? (s = !1) : Mh(o, e, n)) : ((s = !e.$stable), Ph(e, o)), (i = e);
      } else e && (Ih(t, e), (i = { default: 1 }));
      if (s) for (const a in o) !$h(a) && i[a] == null && delete o[a];
    },
    se = Om;
  function gm(t) {
    return mm(t);
  }
  function mm(t, e) {
    const n = Ff();
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
        insertStaticContent: g,
      } = t,
      m = (v, b, A, j = null, T = null, $ = null, B = void 0, D = null, N = !!b.dynamicChildren) => {
        if (v === b) return;
        v && !or(v, b) && ((j = O(v)), wt(v, T, $, !0), (v = null)),
          b.patchFlag === -2 && ((N = !1), (b.dynamicChildren = null));
        const { type: M, ref: nt, shapeFlag: W } = b;
        switch (M) {
          case Wo:
            y(v, b, A, j);
            break;
          case tn:
            w(v, b, A, j);
            break;
          case ws:
            v == null && _(b, A, j, B);
            break;
          case lt:
            S(v, b, A, j, T, $, B, D, N);
            break;
          default:
            W & 1
              ? E(v, b, A, j, T, $, B, D, N)
              : W & 6
                ? C(v, b, A, j, T, $, B, D, N)
                : (W & 64 || W & 128) && M.process(v, b, A, j, T, $, B, D, N, Q);
        }
        nt != null && T && yi(nt, v && v.ref, $, b || v, !b);
      },
      y = (v, b, A, j) => {
        if (v == null) r((b.el = a(b.children)), A, j);
        else {
          const T = (b.el = v.el);
          b.children !== v.children && c(T, b.children);
        }
      },
      w = (v, b, A, j) => {
        v == null ? r((b.el = l(b.children || "")), A, j) : (b.el = v.el);
      },
      _ = (v, b, A, j) => {
        [v.el, v.anchor] = g(v.children, b, A, j, v.el, v.anchor);
      },
      x = ({ el: v, anchor: b }, A, j) => {
        let T;
        for (; v && v !== b; ) (T = f(v)), r(v, A, j), (v = T);
        r(b, A, j);
      },
      k = ({ el: v, anchor: b }) => {
        let A;
        for (; v && v !== b; ) (A = f(v)), o(v), (v = A);
        o(b);
      },
      E = (v, b, A, j, T, $, B, D, N) => {
        b.type === "svg" ? (B = "svg") : b.type === "math" && (B = "mathml"),
          v == null ? z(b, A, j, T, $, B, D, N) : X(v, b, T, $, B, D, N);
      },
      z = (v, b, A, j, T, $, B, D) => {
        let N, M;
        const { props: nt, shapeFlag: W, transition: Y, dirs: ot } = v;
        if (
          ((N = v.el = i(v.type, $, nt && nt.is, nt)),
          W & 8 ? u(N, v.children) : W & 16 && H(v.children, N, null, j, T, bs(v, $), B, D),
          ot && un(v, null, j, "created"),
          V(N, v, v.scopeId, B, j),
          nt)
        ) {
          for (const St in nt) St !== "value" && !dr(St) && s(N, St, null, nt[St], $, j);
          "value" in nt && s(N, "value", null, nt.value, $), (M = nt.onVnodeBeforeMount) && be(M, j, v);
        }
        ot && un(v, null, j, "beforeMount");
        const ft = vm(T, Y);
        ft && Y.beforeEnter(N),
          r(N, b, A),
          ((M = nt && nt.onVnodeMounted) || ft || ot) &&
            se(() => {
              M && be(M, j, v), ft && Y.enter(N), ot && un(v, null, j, "mounted");
            }, T);
      },
      V = (v, b, A, j, T) => {
        if ((A && h(v, A), j)) for (let $ = 0; $ < j.length; $++) h(v, j[$]);
        if (T) {
          let $ = T.subTree;
          if (b === $ || (Vh($.type) && ($.ssContent === b || $.ssFallback === b))) {
            const B = T.vnode;
            V(v, B, B.scopeId, B.slotScopeIds, T.parent);
          }
        }
      },
      H = (v, b, A, j, T, $, B, D, N = 0) => {
        for (let M = N; M < v.length; M++) {
          const nt = (v[M] = D ? Je(v[M]) : xe(v[M]));
          m(null, nt, b, A, j, T, $, B, D);
        }
      },
      X = (v, b, A, j, T, $, B) => {
        const D = (b.el = v.el);
        let { patchFlag: N, dynamicChildren: M, dirs: nt } = b;
        N |= v.patchFlag & 16;
        const W = v.props || dt,
          Y = b.props || dt;
        let ot;
        if (
          (A && fn(A, !1),
          (ot = Y.onVnodeBeforeUpdate) && be(ot, A, b, v),
          nt && un(b, v, A, "beforeUpdate"),
          A && fn(A, !0),
          ((W.innerHTML && Y.innerHTML == null) || (W.textContent && Y.textContent == null)) && u(D, ""),
          M ? I(v.dynamicChildren, M, D, A, j, bs(b, T), $) : B || at(v, b, D, null, A, j, bs(b, T), $, !1),
          N > 0)
        ) {
          if (N & 16) p(D, W, Y, A, T);
          else if (
            (N & 2 && W.class !== Y.class && s(D, "class", null, Y.class, T),
            N & 4 && s(D, "style", W.style, Y.style, T),
            N & 8)
          ) {
            const ft = b.dynamicProps;
            for (let St = 0; St < ft.length; St++) {
              const mt = ft[St],
                ne = W[mt],
                Wt = Y[mt];
              (Wt !== ne || mt === "value") && s(D, mt, ne, Wt, T, A);
            }
          }
          N & 1 && v.children !== b.children && u(D, b.children);
        } else !B && M == null && p(D, W, Y, A, T);
        ((ot = Y.onVnodeUpdated) || nt) &&
          se(() => {
            ot && be(ot, A, b, v), nt && un(b, v, A, "updated");
          }, j);
      },
      I = (v, b, A, j, T, $, B) => {
        for (let D = 0; D < b.length; D++) {
          const N = v[D],
            M = b[D],
            nt = N.el && (N.type === lt || !or(N, M) || N.shapeFlag & 70) ? d(N.el) : A;
          m(N, M, nt, null, j, T, $, B, !0);
        }
      },
      p = (v, b, A, j, T) => {
        if (b !== A) {
          if (b !== dt) for (const $ in b) !dr($) && !($ in A) && s(v, $, b[$], null, T, j);
          for (const $ in A) {
            if (dr($)) continue;
            const B = A[$],
              D = b[$];
            B !== D && $ !== "value" && s(v, $, D, B, T, j);
          }
          "value" in A && s(v, "value", b.value, A.value, T);
        }
      },
      S = (v, b, A, j, T, $, B, D, N) => {
        const M = (b.el = v ? v.el : a("")),
          nt = (b.anchor = v ? v.anchor : a(""));
        let { patchFlag: W, dynamicChildren: Y, slotScopeIds: ot } = b;
        ot && (D = D ? D.concat(ot) : ot),
          v == null
            ? (r(M, A, j), r(nt, A, j), H(b.children || [], A, nt, T, $, B, D, N))
            : W > 0 && W & 64 && Y && v.dynamicChildren
              ? (I(v.dynamicChildren, Y, A, T, $, B, D), (b.key != null || (T && b === T.subTree)) && Lh(v, b, !0))
              : at(v, b, A, nt, T, $, B, D, N);
      },
      C = (v, b, A, j, T, $, B, D, N) => {
        (b.slotScopeIds = D),
          v == null ? (b.shapeFlag & 512 ? T.ctx.activate(b, A, j, B, N) : J(b, A, j, T, $, B, N)) : et(v, b, N);
      },
      J = (v, b, A, j, T, $, B) => {
        const D = (v.component = Mm(v, j, T));
        if ((bh(v) && (D.ctx.renderer = Q), Lm(D, !1, B), D.asyncDep)) {
          if ((T && T.registerDep(D, K, B), !v.el)) {
            const N = (D.subTree = st(tn));
            w(null, N, b, A);
          }
        } else K(D, v, b, A, T, $, B);
      },
      et = (v, b, A) => {
        const j = (b.component = v.component);
        if (Em(v, b, A))
          if (j.asyncDep && !j.asyncResolved) {
            q(j, b, A);
            return;
          } else (j.next = b), j.update();
        else (b.el = v.el), (j.vnode = b);
      },
      K = (v, b, A, j, T, $, B) => {
        const D = () => {
          if (v.isMounted) {
            let { next: W, bu: Y, u: ot, parent: ft, vnode: St } = v;
            {
              const re = Nh(v);
              if (re) {
                W && ((W.el = St.el), q(v, W, B)),
                  re.asyncDep.then(() => {
                    v.isUnmounted || D();
                  });
                return;
              }
            }
            let mt = W,
              ne;
            fn(v, !1),
              W ? ((W.el = St.el), q(v, W, B)) : (W = St),
              Y && io(Y),
              (ne = W.props && W.props.onVnodeBeforeUpdate) && be(ne, ft, W, St),
              fn(v, !0);
            const Wt = _s(v),
              pe = v.subTree;
            (v.subTree = Wt),
              m(pe, Wt, d(pe.el), O(pe), v, T, $),
              (W.el = Wt.el),
              mt === null && Tm(v, Wt.el),
              ot && se(ot, T),
              (ne = W.props && W.props.onVnodeUpdated) && se(() => be(ne, ft, W, St), T);
          } else {
            let W;
            const { el: Y, props: ot } = b,
              { bm: ft, m: St, parent: mt, root: ne, type: Wt } = v,
              pe = Un(b);
            if (
              (fn(v, !1), ft && io(ft), !pe && (W = ot && ot.onVnodeBeforeMount) && be(W, mt, b), fn(v, !0), Y && It)
            ) {
              const re = () => {
                (v.subTree = _s(v)), It(Y, v.subTree, v, T, null);
              };
              pe && Wt.__asyncHydrate ? Wt.__asyncHydrate(Y, v, re) : re();
            } else {
              ne.ce && ne.ce._injectChildStyle(Wt);
              const re = (v.subTree = _s(v));
              m(null, re, A, j, v, T, $), (b.el = re.el);
            }
            if ((St && se(St, T), !pe && (W = ot && ot.onVnodeMounted))) {
              const re = b;
              se(() => be(W, mt, re), T);
            }
            (b.shapeFlag & 256 || (mt && Un(mt.vnode) && mt.vnode.shapeFlag & 256)) && v.a && se(v.a, T),
              (v.isMounted = !0),
              (b = A = j = null);
          }
        };
        v.scope.on();
        const N = (v.effect = new Gf(D));
        v.scope.off();
        const M = (v.update = N.run.bind(N)),
          nt = (v.job = N.runIfDirty.bind(N));
        (nt.i = v), (nt.id = v.uid), (N.scheduler = () => ia(nt)), fn(v, !0), M();
      },
      q = (v, b, A) => {
        b.component = v;
        const j = v.vnode.props;
        (v.vnode = b), (v.next = null), um(v, b.props, j, A), pm(v, b.children, A), on(), cl(v), sn();
      },
      at = (v, b, A, j, T, $, B, D, N = !1) => {
        const M = v && v.children,
          nt = v ? v.shapeFlag : 0,
          W = b.children,
          { patchFlag: Y, shapeFlag: ot } = b;
        if (Y > 0) {
          if (Y & 128) {
            $t(M, W, A, j, T, $, B, D, N);
            return;
          } else if (Y & 256) {
            Ht(M, W, A, j, T, $, B, D, N);
            return;
          }
        }
        ot & 8
          ? (nt & 16 && le(M, T, $), W !== M && u(A, W))
          : nt & 16
            ? ot & 16
              ? $t(M, W, A, j, T, $, B, D, N)
              : le(M, T, $, !0)
            : (nt & 8 && u(A, ""), ot & 16 && H(W, A, j, T, $, B, D, N));
      },
      Ht = (v, b, A, j, T, $, B, D, N) => {
        (v = v || Dn), (b = b || Dn);
        const M = v.length,
          nt = b.length,
          W = Math.min(M, nt);
        let Y;
        for (Y = 0; Y < W; Y++) {
          const ot = (b[Y] = N ? Je(b[Y]) : xe(b[Y]));
          m(v[Y], ot, A, null, T, $, B, D, N);
        }
        M > nt ? le(v, T, $, !0, !1, W) : H(b, A, j, T, $, B, D, N, W);
      },
      $t = (v, b, A, j, T, $, B, D, N) => {
        let M = 0;
        const nt = b.length;
        let W = v.length - 1,
          Y = nt - 1;
        for (; M <= W && M <= Y; ) {
          const ot = v[M],
            ft = (b[M] = N ? Je(b[M]) : xe(b[M]));
          if (or(ot, ft)) m(ot, ft, A, null, T, $, B, D, N);
          else break;
          M++;
        }
        for (; M <= W && M <= Y; ) {
          const ot = v[W],
            ft = (b[Y] = N ? Je(b[Y]) : xe(b[Y]));
          if (or(ot, ft)) m(ot, ft, A, null, T, $, B, D, N);
          else break;
          W--, Y--;
        }
        if (M > W) {
          if (M <= Y) {
            const ot = Y + 1,
              ft = ot < nt ? b[ot].el : j;
            for (; M <= Y; ) m(null, (b[M] = N ? Je(b[M]) : xe(b[M])), A, ft, T, $, B, D, N), M++;
          }
        } else if (M > Y) for (; M <= W; ) wt(v[M], T, $, !0), M++;
        else {
          const ot = M,
            ft = M,
            St = new Map();
          for (M = ft; M <= Y; M++) {
            const oe = (b[M] = N ? Je(b[M]) : xe(b[M]));
            oe.key != null && St.set(oe.key, M);
          }
          let mt,
            ne = 0;
          const Wt = Y - ft + 1;
          let pe = !1,
            re = 0;
          const nr = new Array(Wt);
          for (M = 0; M < Wt; M++) nr[M] = 0;
          for (M = ot; M <= W; M++) {
            const oe = v[M];
            if (ne >= Wt) {
              wt(oe, T, $, !0);
              continue;
            }
            let ye;
            if (oe.key != null) ye = St.get(oe.key);
            else
              for (mt = ft; mt <= Y; mt++)
                if (nr[mt - ft] === 0 && or(oe, b[mt])) {
                  ye = mt;
                  break;
                }
            ye === void 0
              ? wt(oe, T, $, !0)
              : ((nr[ye - ft] = M + 1), ye >= re ? (re = ye) : (pe = !0), m(oe, b[ye], A, null, T, $, B, D, N), ne++);
          }
          const Xa = pe ? ym(nr) : Dn;
          for (mt = Xa.length - 1, M = Wt - 1; M >= 0; M--) {
            const oe = ft + M,
              ye = b[oe],
              tl = oe + 1 < nt ? b[oe + 1].el : j;
            nr[M] === 0 ? m(null, ye, A, tl, T, $, B, D, N) : pe && (mt < 0 || M !== Xa[mt] ? Jt(ye, A, tl, 2) : mt--);
          }
        }
      },
      Jt = (v, b, A, j, T = null) => {
        const { el: $, type: B, transition: D, children: N, shapeFlag: M } = v;
        if (M & 6) {
          Jt(v.component.subTree, b, A, j);
          return;
        }
        if (M & 128) {
          v.suspense.move(b, A, j);
          return;
        }
        if (M & 64) {
          B.move(v, b, A, Q);
          return;
        }
        if (B === lt) {
          r($, b, A);
          for (let W = 0; W < N.length; W++) Jt(N[W], b, A, j);
          r(v.anchor, b, A);
          return;
        }
        if (B === ws) {
          x(v, b, A);
          return;
        }
        if (j !== 2 && M & 1 && D)
          if (j === 0) D.beforeEnter($), r($, b, A), se(() => D.enter($), T);
          else {
            const { leave: W, delayLeave: Y, afterLeave: ot } = D,
              ft = () => r($, b, A),
              St = () => {
                W($, () => {
                  ft(), ot && ot();
                });
              };
            Y ? Y($, ft, St) : St();
          }
        else r($, b, A);
      },
      wt = (v, b, A, j = !1, T = !1) => {
        const {
          type: $,
          props: B,
          ref: D,
          children: N,
          dynamicChildren: M,
          shapeFlag: nt,
          patchFlag: W,
          dirs: Y,
          cacheIndex: ot,
        } = v;
        if (
          (W === -2 && (T = !1),
          D != null && yi(D, null, A, v, !0),
          ot != null && (b.renderCache[ot] = void 0),
          nt & 256)
        ) {
          b.ctx.deactivate(v);
          return;
        }
        const ft = nt & 1 && Y,
          St = !Un(v);
        let mt;
        if ((St && (mt = B && B.onVnodeBeforeUnmount) && be(mt, b, v), nt & 6)) In(v.component, A, j);
        else {
          if (nt & 128) {
            v.suspense.unmount(A, j);
            return;
          }
          ft && un(v, null, b, "beforeUnmount"),
            nt & 64
              ? v.type.remove(v, b, A, Q, j)
              : M && !M.hasOnce && ($ !== lt || (W > 0 && W & 64))
                ? le(M, b, A, !1, !0)
                : (($ === lt && W & 384) || (!T && nt & 16)) && le(N, b, A),
            j && Kt(v);
        }
        ((St && (mt = B && B.onVnodeUnmounted)) || ft) &&
          se(() => {
            mt && be(mt, b, v), ft && un(v, null, b, "unmounted");
          }, A);
      },
      Kt = (v) => {
        const { type: b, el: A, anchor: j, transition: T } = v;
        if (b === lt) {
          $e(A, j);
          return;
        }
        if (b === ws) {
          k(v);
          return;
        }
        const $ = () => {
          o(A), T && !T.persisted && T.afterLeave && T.afterLeave();
        };
        if (v.shapeFlag & 1 && T && !T.persisted) {
          const { leave: B, delayLeave: D } = T,
            N = () => B(A, $);
          D ? D(v.el, $, N) : N();
        } else $();
      },
      $e = (v, b) => {
        let A;
        for (; v !== b; ) (A = f(v)), o(v), (v = A);
        o(b);
      },
      In = (v, b, A) => {
        const { bum: j, scope: T, job: $, subTree: B, um: D, m: N, a: M } = v;
        gl(N),
          gl(M),
          j && io(j),
          T.stop(),
          $ && (($.flags |= 8), wt(B, v, b, A)),
          D && se(D, b),
          se(() => {
            v.isUnmounted = !0;
          }, b),
          b &&
            b.pendingBranch &&
            !b.isUnmounted &&
            v.asyncDep &&
            !v.asyncResolved &&
            v.suspenseId === b.pendingId &&
            (b.deps--, b.deps === 0 && b.resolve());
      },
      le = (v, b, A, j = !1, T = !1, $ = 0) => {
        for (let B = $; B < v.length; B++) wt(v[B], b, A, j, T);
      },
      O = (v) => {
        if (v.shapeFlag & 6) return O(v.component.subTree);
        if (v.shapeFlag & 128) return v.suspense.next();
        const b = f(v.anchor || v.el),
          A = b && b[zg];
        return A ? f(A) : b;
      };
    let G = !1;
    const U = (v, b, A) => {
        v == null ? b._vnode && wt(b._vnode, null, null, !0) : m(b._vnode || null, v, b, null, null, null, A),
          (b._vnode = v),
          G || ((G = !0), cl(), gh(), (G = !1));
      },
      Q = { p: m, um: wt, m: Jt, r: Kt, mt: J, mc: H, pc: at, pbc: I, n: O, o: t };
    let gt, It;
    return { render: U, hydrate: gt, createApp: am(U, gt) };
  }
  function bs({ type: t, props: e }, n) {
    return (n === "svg" && t === "foreignObject") ||
      (n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html"))
      ? void 0
      : n;
  }
  function fn({ effect: t, job: e }, n) {
    n ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
  }
  function vm(t, e) {
    return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
  }
  function Lh(t, e, n = !1) {
    const r = t.children,
      o = e.children;
    if (tt(r) && tt(o))
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        let a = o[s];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = o[s] = Je(o[s])), (a.el = i.el)),
          !n && a.patchFlag !== -2 && Lh(i, a)),
          a.type === Wo && (a.el = i.el);
      }
  }
  function ym(t) {
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
  function Nh(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : Nh(e);
  }
  function gl(t) {
    if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
  }
  const bm = Symbol.for("v-scx"),
    _m = () => he(bm);
  function zh(t, e) {
    return qo(t, null, e);
  }
  function wm(t, e) {
    return qo(t, null, { flush: "sync" });
  }
  function Se(t, e, n) {
    return qo(t, e, n);
  }
  function qo(t, e, n = dt) {
    const { immediate: r, deep: o, flush: s, once: i } = n,
      a = Vt({}, n);
    let l;
    if (Go)
      if (s === "sync") {
        const f = _m();
        l = f.__watcherHandles || (f.__watcherHandles = []);
      } else if (!e || r) a.once = !0;
      else {
        const f = () => {};
        return (f.stop = ke), (f.resume = ke), (f.pause = ke), f;
      }
    const c = Bt;
    a.call = (f, h, g) => Te(f, c, h, g);
    let u = !1;
    s === "post"
      ? (a.scheduler = (f) => {
          se(f, c && c.suspense);
        })
      : s !== "sync" &&
        ((u = !0),
        (a.scheduler = (f, h) => {
          h ? f() : ia(f);
        })),
      (a.augmentJob = (f) => {
        e && (f.flags |= 4), u && ((f.flags |= 2), c && ((f.id = c.uid), (f.i = c)));
      });
    const d = Ig(t, e, a);
    return l && l.push(d), d;
  }
  function xm(t, e, n) {
    const r = this.proxy,
      o = zt(t) ? (t.includes(".") ? Dh(r, t) : () => r[t]) : t.bind(r, r);
    let s;
    it(e) ? (s = e) : ((s = e.handler), (n = e));
    const i = Fr(this),
      a = qo(o, s.bind(r), n);
    return i(), a;
  }
  function Dh(t, e) {
    const n = e.split(".");
    return () => {
      let r = t;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  function Fh(t, e, n = dt) {
    const r = ha(),
      o = ae(e),
      s = nn(e),
      i = Bh(t, e),
      a = Tg((l, c) => {
        let u,
          d = dt,
          f;
        return (
          wm(() => {
            const h = t[e];
            ee(u, h) && ((u = h), c());
          }),
          {
            get() {
              return l(), n.get ? n.get(u) : u;
            },
            set(h) {
              const g = n.set ? n.set(h) : h;
              if (!ee(g, u) && !(d !== dt && ee(h, d))) return;
              const m = r.vnode.props;
              (m &&
                (e in m || o in m || s in m) &&
                (`onUpdate:${e}` in m || `onUpdate:${o}` in m || `onUpdate:${s}` in m)) ||
                ((u = h), c()),
                r.emit(`update:${e}`, g),
                ee(h, g) && ee(h, d) && !ee(g, f) && c(),
                (d = h),
                (f = g);
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
  const Bh = (t, e) =>
    e === "modelValue" || e === "model-value"
      ? t.modelModifiers
      : t[`${e}Modifiers`] || t[`${ae(e)}Modifiers`] || t[`${nn(e)}Modifiers`];
  function km(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || dt;
    let o = n;
    const s = e.startsWith("update:"),
      i = s && Bh(r, e.slice(7));
    i && (i.trim && (o = n.map((u) => (zt(u) ? u.trim() : u))), i.number && (o = n.map(pi)));
    let a,
      l = r[(a = pr(e))] || r[(a = pr(ae(e)))];
    !l && s && (l = r[(a = pr(nn(e)))]), l && Te(l, t, 6, o);
    const c = r[a + "Once"];
    if (c) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[a]) return;
      (t.emitted[a] = !0), Te(c, t, 6, o);
    }
  }
  function Uh(t, e, n = !1) {
    const r = e.emitsCache,
      o = r.get(t);
    if (o !== void 0) return o;
    const s = t.emits;
    let i = {},
      a = !1;
    if (!it(t)) {
      const l = (c) => {
        const u = Uh(c, e, !0);
        u && ((a = !0), Vt(i, u));
      };
      !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
    }
    return !s && !a
      ? (Tt(t) && r.set(t, null), null)
      : (tt(s) ? s.forEach((l) => (i[l] = null)) : Vt(i, s), Tt(t) && r.set(t, i), i);
  }
  function Ko(t, e) {
    return !t || !Po(e)
      ? !1
      : ((e = e.slice(2).replace(/Once$/, "")), pt(t, e[0].toLowerCase() + e.slice(1)) || pt(t, nn(e)) || pt(t, e));
  }
  function _s(t) {
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
        ctx: g,
        inheritAttrs: m,
      } = t,
      y = vo(t);
    let w, _;
    try {
      if (n.shapeFlag & 4) {
        const k = o || r,
          E = k;
        (w = xe(c.call(E, k, u, d, h, f, g))), (_ = a);
      } else {
        const k = e;
        (w = xe(k.length > 1 ? k(d, { attrs: a, slots: i, emit: l }) : k(d, null))), (_ = e.props ? a : Sm(a));
      }
    } catch (k) {
      (vr.length = 0), Bo(k, t, 1), (w = st(tn));
    }
    let x = w;
    if (_ && m !== !1) {
      const k = Object.keys(_),
        { shapeFlag: E } = x;
      k.length && E & 7 && (s && k.some(Ki) && (_ = Am(_, s)), (x = qn(x, _, !1, !0)));
    }
    return (
      n.dirs && ((x = qn(x, null, !1, !0)), (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
      n.transition && aa(x, n.transition),
      (w = x),
      vo(y),
      w
    );
  }
  const Sm = (t) => {
      let e;
      for (const n in t) (n === "class" || n === "style" || Po(n)) && ((e || (e = {}))[n] = t[n]);
      return e;
    },
    Am = (t, e) => {
      const n = {};
      for (const r in t) (!Ki(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
      return n;
    };
  function Em(t, e, n) {
    const { props: r, children: o, component: s } = t,
      { props: i, children: a, patchFlag: l } = e,
      c = s.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return r ? ml(r, i, c) : !!i;
      if (l & 8) {
        const u = e.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          const f = u[d];
          if (i[f] !== r[f] && !Ko(c, f)) return !0;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? ml(r, i, c) : !0) : !!i;
    return !1;
  }
  function ml(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (e[s] !== t[s] && !Ko(n, s)) return !0;
    }
    return !1;
  }
  function Tm({ vnode: t, parent: e }, n) {
    for (; e; ) {
      const r = e.subTree;
      if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
        ((t = e.vnode).el = n), (e = e.parent);
      else break;
    }
  }
  const Vh = (t) => t.__isSuspense;
  function Om(t, e) {
    e && e.pendingBranch ? (tt(t) ? e.effects.push(...t) : e.effects.push(t)) : Ng(t);
  }
  const lt = Symbol.for("v-fgt"),
    Wo = Symbol.for("v-txt"),
    tn = Symbol.for("v-cmt"),
    ws = Symbol.for("v-stc"),
    vr = [];
  let ie = null;
  function P(t = !1) {
    vr.push((ie = t ? null : []));
  }
  function Cm() {
    vr.pop(), (ie = vr[vr.length - 1] || null);
  }
  let Rr = 1;
  function vl(t) {
    (Rr += t), t < 0 && ie && (ie.hasOnce = !0);
  }
  function Hh(t) {
    return (t.dynamicChildren = Rr > 0 ? ie || Dn : null), Cm(), Rr > 0 && ie && ie.push(t), t;
  }
  function L(t, e, n, r, o, s) {
    return Hh(R(t, e, n, r, o, s, !0));
  }
  function Hn(t, e, n, r, o) {
    return Hh(st(t, e, n, r, o, !0));
  }
  function _o(t) {
    return t ? t.__v_isVNode === !0 : !1;
  }
  function or(t, e) {
    return t.type === e.type && t.key === e.key;
  }
  const qh = ({ key: t }) => t ?? null,
    lo = ({ ref: t, ref_key: e, ref_for: n }) => (
      typeof t == "number" && (t = "" + t),
      t != null ? (zt(t) || Mt(t) || it(t) ? { i: Ft, r: t, k: e, f: !!n } : t) : null
    );
  function R(t, e = null, n = null, r = 0, o = null, s = t === lt ? 0 : 1, i = !1, a = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t,
      props: e,
      key: e && qh(e),
      ref: e && lo(e),
      scopeId: vh,
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
      a ? (fa(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= zt(n) ? 8 : 16),
      Rr > 0 && !i && ie && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && ie.push(l),
      l
    );
  }
  const st = Rm;
  function Rm(t, e = null, n = null, r = 0, o = null, s = !1) {
    if (((!t || t === Qg) && (t = tn), _o(t))) {
      const a = qn(t, e, !0);
      return (
        n && fa(a, n),
        Rr > 0 && !s && ie && (a.shapeFlag & 6 ? (ie[ie.indexOf(t)] = a) : ie.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((Bm(t) && (t = t.__vccOpts), e)) {
      e = jm(e);
      let { class: a, style: l } = e;
      a && !zt(a) && (e.class = Nt(a)), Tt(l) && (na(l) && !tt(l) && (l = Vt({}, l)), (e.style = rn(l)));
    }
    const i = zt(t) ? 1 : Vh(t) ? 128 : Dg(t) ? 64 : Tt(t) ? 4 : it(t) ? 2 : 0;
    return R(t, e, n, r, o, i, s, !0);
  }
  function jm(t) {
    return t ? (na(t) || Ch(t) ? Vt({}, t) : t) : null;
  }
  function qn(t, e, n = !1, r = !1) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = t,
      c = e ? $m(o || {}, e) : o,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: c,
        key: c && qh(c),
        ref: e && e.ref ? (n && s ? (tt(s) ? s.concat(lo(e)) : [s, lo(e)]) : lo(e)) : s,
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
        ssContent: t.ssContent && qn(t.ssContent),
        ssFallback: t.ssFallback && qn(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce,
      };
    return l && r && aa(u, l.clone(u)), u;
  }
  function Be(t = " ", e = 0) {
    return st(Wo, null, t, e);
  }
  function Pt(t = "", e = !1) {
    return e ? (P(), Hn(tn, null, t)) : st(tn, null, t);
  }
  function xe(t) {
    return t == null || typeof t == "boolean"
      ? st(tn)
      : tt(t)
        ? st(lt, null, t.slice())
        : typeof t == "object"
          ? Je(t)
          : st(Wo, null, String(t));
  }
  function Je(t) {
    return (t.el === null && t.patchFlag !== -1) || t.memo ? t : qn(t);
  }
  function fa(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (tt(e)) n = 16;
    else if (typeof e == "object")
      if (r & 65) {
        const o = e.default;
        o && (o._c && (o._d = !1), fa(t, o()), o._c && (o._d = !0));
        return;
      } else {
        n = 32;
        const o = e._;
        !o && !Ch(e)
          ? (e._ctx = Ft)
          : o === 3 && Ft && (Ft.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
      }
    else
      it(e)
        ? ((e = { default: e, _ctx: Ft }), (n = 32))
        : ((e = String(e)), r & 64 ? ((n = 16), (e = [Be(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
  }
  function $m(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      for (const o in r)
        if (o === "class") e.class !== r.class && (e.class = Nt([e.class, r.class]));
        else if (o === "style") e.style = rn([e.style, r.style]);
        else if (Po(o)) {
          const s = e[o],
            i = r[o];
          i && s !== i && !(tt(s) && s.includes(i)) && (e[o] = s ? [].concat(s, i) : i);
        } else o !== "" && (e[o] = r[o]);
    }
    return e;
  }
  function be(t, e, n, r = null) {
    Te(t, e, 7, [n, r]);
  }
  const Pm = Eh();
  let Im = 0;
  function Mm(t, e, n) {
    const r = t.type,
      o = (e ? e.appContext : t.appContext) || Pm,
      s = {
        uid: Im++,
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
        scope: new qf(!0),
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
        propsOptions: jh(r, o),
        emitsOptions: Uh(r, o),
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
    return (s.ctx = { _: s }), (s.root = e ? e.root : s), (s.emit = km.bind(null, s)), t.ce && t.ce(s), s;
  }
  let Bt = null;
  const ha = () => Bt || Ft;
  let wo, ki;
  {
    const t = Ff(),
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
    (wo = e("__VUE_INSTANCE_SETTERS__", (n) => (Bt = n))), (ki = e("__VUE_SSR_SETTERS__", (n) => (Go = n)));
  }
  const Fr = (t) => {
      const e = Bt;
      return (
        wo(t),
        t.scope.on(),
        () => {
          t.scope.off(), wo(e);
        }
      );
    },
    yl = () => {
      Bt && Bt.scope.off(), wo(null);
    };
  function Kh(t) {
    return t.vnode.shapeFlag & 4;
  }
  let Go = !1;
  function Lm(t, e = !1, n = !1) {
    e && ki(e);
    const { props: r, children: o } = t.vnode,
      s = Kh(t);
    cm(t, r, s, e), dm(t, o, n);
    const i = s ? Nm(t, e) : void 0;
    return e && ki(!1), i;
  }
  function Nm(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Xg));
    const { setup: r } = n;
    if (r) {
      const o = (t.setupContext = r.length > 1 ? Dm(t) : null),
        s = Fr(t);
      on();
      const i = Dr(r, t, 0, [t.props, o]);
      if ((sn(), s(), Lf(i))) {
        if ((Un(t) || yh(t), i.then(yl, yl), e))
          return i
            .then((a) => {
              bl(t, a, e);
            })
            .catch((a) => {
              Bo(a, t, 0);
            });
        t.asyncDep = i;
      } else bl(t, i, e);
    } else Wh(t, e);
  }
  function bl(t, e, n) {
    it(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : Tt(e) && (t.setupState = hh(e)), Wh(t, n);
  }
  let _l;
  function Wh(t, e, n) {
    const r = t.type;
    if (!t.render) {
      if (!e && _l && !r.render) {
        const o = r.template || ca(t).template;
        if (o) {
          const { isCustomElement: s, compilerOptions: i } = t.appContext.config,
            { delimiters: a, compilerOptions: l } = r,
            c = Vt(Vt({ isCustomElement: s, delimiters: a }, i), l);
          r.render = _l(o, c);
        }
      }
      t.render = r.render || ke;
    }
    {
      const o = Fr(t);
      on();
      try {
        em(t);
      } finally {
        sn(), o();
      }
    }
  }
  const zm = {
    get(t, e) {
      return Zt(t, "get", ""), t[e];
    },
  };
  function Dm(t) {
    const e = (n) => {
      t.exposed = n || {};
    };
    return { attrs: new Proxy(t.attrs, zm), slots: t.slots, emit: t.emit, expose: e };
  }
  function Zo(t) {
    return t.exposed
      ? t.exposeProxy ||
          (t.exposeProxy = new Proxy(hh(ra(t.exposed)), {
            get(e, n) {
              if (n in e) return e[n];
              if (n in mr) return mr[n](t);
            },
            has(e, n) {
              return n in e || n in mr;
            },
          }))
      : t.proxy;
  }
  function Fm(t, e = !0) {
    return it(t) ? t.displayName || t.name : t.name || (e && t.__name);
  }
  function Bm(t) {
    return it(t) && "__vccOpts" in t;
  }
  const rt = (t, e) => $g(t, e, Go);
  function Gh(t, e, n) {
    const r = arguments.length;
    return r === 2
      ? Tt(e) && !tt(e)
        ? _o(e)
          ? st(t, null, [e])
          : st(t, e)
        : st(t, null, e)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && _o(n) && (n = [n]), st(t, e, n));
  }
  const Um = "3.5.6";
  /**
   * @vue/runtime-dom v3.5.6
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ let Si;
  const wl = typeof window < "u" && window.trustedTypes;
  if (wl)
    try {
      Si = wl.createPolicy("vue", { createHTML: (t) => t });
    } catch {}
  const Zh = Si ? (t) => Si.createHTML(t) : (t) => t,
    Vm = "http://www.w3.org/2000/svg",
    Hm = "http://www.w3.org/1998/Math/MathML",
    Le = typeof document < "u" ? document : null,
    xl = Le && Le.createElement("template"),
    qm = {
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
            ? Le.createElementNS(Vm, t)
            : e === "mathml"
              ? Le.createElementNS(Hm, t)
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
          xl.innerHTML = Zh(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
          const a = xl.content;
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
    Km = Symbol("_vtc");
  function Wm(t, e, n) {
    const r = t[Km];
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
      e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : (t.className = e);
  }
  const kl = Symbol("_vod"),
    Gm = Symbol("_vsh"),
    Zm = Symbol(""),
    Jm = /(^|;)\s*display\s*:/;
  function Qm(t, e, n) {
    const r = t.style,
      o = zt(n);
    let s = !1;
    if (n && !o) {
      if (e)
        if (zt(e))
          for (const i of e.split(";")) {
            const a = i.slice(0, i.indexOf(":")).trim();
            n[a] == null && co(r, a, "");
          }
        else for (const i in e) n[i] == null && co(r, i, "");
      for (const i in n) i === "display" && (s = !0), co(r, i, n[i]);
    } else if (o) {
      if (e !== n) {
        const i = r[Zm];
        i && (n += ";" + i), (r.cssText = n), (s = Jm.test(n));
      }
    } else e && t.removeAttribute("style");
    kl in t && ((t[kl] = s ? r.display : ""), t[Gm] && (r.display = "none"));
  }
  const Sl = /\s*!important$/;
  function co(t, e, n) {
    if (tt(n)) n.forEach((r) => co(t, e, r));
    else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
    else {
      const r = Ym(t, e);
      Sl.test(n) ? t.setProperty(nn(r), n.replace(Sl, ""), "important") : (t[r] = n);
    }
  }
  const Al = ["Webkit", "Moz", "ms"],
    xs = {};
  function Ym(t, e) {
    const n = xs[e];
    if (n) return n;
    let r = ae(e);
    if (r !== "filter" && r in t) return (xs[e] = r);
    r = Lo(r);
    for (let o = 0; o < Al.length; o++) {
      const s = Al[o] + r;
      if (s in t) return (xs[e] = s);
    }
    return e;
  }
  const El = "http://www.w3.org/1999/xlink";
  function Tl(t, e, n, r, o, s = tg(e)) {
    r && e.startsWith("xlink:")
      ? n == null
        ? t.removeAttributeNS(El, e.slice(6, e.length))
        : t.setAttributeNS(El, e, n)
      : n == null || (s && !Bf(n))
        ? t.removeAttribute(e)
        : t.setAttribute(e, s ? "" : Ee(n) ? String(n) : n);
  }
  function Xm(t, e, n, r) {
    if (e === "innerHTML" || e === "textContent") {
      n != null && (t[e] = e === "innerHTML" ? Zh(n) : n);
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
        ? (n = Bf(n))
        : n == null && i === "string"
          ? ((n = ""), (s = !0))
          : i === "number" && ((n = 0), (s = !0));
    }
    try {
      t[e] = n;
    } catch {}
    s && t.removeAttribute(e);
  }
  function gn(t, e, n, r) {
    t.addEventListener(e, n, r);
  }
  function tv(t, e, n, r) {
    t.removeEventListener(e, n, r);
  }
  const Ol = Symbol("_vei");
  function ev(t, e, n, r, o = null) {
    const s = t[Ol] || (t[Ol] = {}),
      i = s[e];
    if (r && i) i.value = r;
    else {
      const [a, l] = nv(e);
      if (r) {
        const c = (s[e] = sv(r, o));
        gn(t, a, c, l);
      } else i && (tv(t, a, i, l), (s[e] = void 0));
    }
  }
  const Cl = /(?:Once|Passive|Capture)$/;
  function nv(t) {
    let e;
    if (Cl.test(t)) {
      e = {};
      let r;
      for (; (r = t.match(Cl)); ) (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
    }
    return [t[2] === ":" ? t.slice(3) : nn(t.slice(2)), e];
  }
  let ks = 0;
  const rv = Promise.resolve(),
    ov = () => ks || (rv.then(() => (ks = 0)), (ks = Date.now()));
  function sv(t, e) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      Te(iv(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = ov()), n;
  }
  function iv(t, e) {
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
  const Rl = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    av = (t, e, n, r, o, s) => {
      const i = o === "svg";
      e === "class"
        ? Wm(t, r, i)
        : e === "style"
          ? Qm(t, n, r)
          : Po(e)
            ? Ki(e) || ev(t, e, n, r, s)
            : (e[0] === "." ? ((e = e.slice(1)), !0) : e[0] === "^" ? ((e = e.slice(1)), !1) : lv(t, e, r, i))
              ? (Xm(t, e, r),
                !t.tagName.includes("-") &&
                  (e === "value" || e === "checked" || e === "selected") &&
                  Tl(t, e, r, i, s, e !== "value"))
              : (e === "true-value" ? (t._trueValue = r) : e === "false-value" && (t._falseValue = r), Tl(t, e, r, i));
    };
  function lv(t, e, n, r) {
    if (r) return !!(e === "innerHTML" || e === "textContent" || (e in t && Rl(e) && it(n)));
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
    return Rl(e) && zt(n) ? !1 : !!(e in t || (t._isVueCE && (/[A-Z]/.test(e) || !zt(n))));
  }
  const xo = (t) => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return tt(e) ? (n) => io(e, n) : e;
  };
  function cv(t) {
    t.target.composing = !0;
  }
  function jl(t) {
    const e = t.target;
    e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
  }
  const Vn = Symbol("_assign"),
    uv = {
      created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
        t[Vn] = xo(o);
        const s = r || (o.props && o.props.type === "number");
        gn(t, e ? "change" : "input", (i) => {
          if (i.target.composing) return;
          let a = t.value;
          n && (a = a.trim()), s && (a = pi(a)), t[Vn](a);
        }),
          n &&
            gn(t, "change", () => {
              t.value = t.value.trim();
            }),
          e || (gn(t, "compositionstart", cv), gn(t, "compositionend", jl), gn(t, "change", jl));
      },
      mounted(t, { value: e }) {
        t.value = e ?? "";
      },
      beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
        if (((t[Vn] = xo(i)), t.composing)) return;
        const a = (s || t.type === "number") && !/^0\d/.test(t.value) ? pi(t.value) : t.value,
          l = e ?? "";
        a !== l &&
          ((document.activeElement === t && t.type !== "range" && ((r && e === n) || (o && t.value.trim() === l))) ||
            (t.value = l));
      },
    },
    da = {
      deep: !0,
      created(t, e, n) {
        (t[Vn] = xo(n)),
          gn(t, "change", () => {
            const r = t._modelValue,
              o = fv(t),
              s = t.checked,
              i = t[Vn];
            if (tt(r)) {
              const a = Uf(r, o),
                l = a !== -1;
              if (s && !l) i(r.concat(o));
              else if (!s && l) {
                const c = [...r];
                c.splice(a, 1), i(c);
              }
            } else if (Io(r)) {
              const a = new Set(r);
              s ? a.add(o) : a.delete(o), i(a);
            } else i(Jh(t, s));
          });
      },
      mounted: $l,
      beforeUpdate(t, e, n) {
        (t[Vn] = xo(n)), $l(t, e, n);
      },
    };
  function $l(t, { value: e, oldValue: n }, r) {
    t._modelValue = e;
    let o;
    tt(e) ? (o = Uf(e, r.props.value) > -1) : Io(e) ? (o = e.has(r.props.value)) : (o = No(e, Jh(t, !0))),
      t.checked !== o && (t.checked = o);
  }
  function fv(t) {
    return "_value" in t ? t._value : t.value;
  }
  function Jh(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e;
  }
  const hv = ["ctrl", "shift", "alt", "meta"],
    dv = {
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
      exact: (t, e) => hv.some((n) => t[`${n}Key`] && !e.includes(n)),
    },
    Jr = (t, e) => {
      const n = t._withMods || (t._withMods = {}),
        r = e.join(".");
      return (
        n[r] ||
        (n[r] = (o, ...s) => {
          for (let i = 0; i < e.length; i++) {
            const a = dv[e[i]];
            if (a && a(o, e)) return;
          }
          return t(o, ...s);
        })
      );
    },
    pv = Vt({ patchProp: av }, qm);
  let Pl;
  function gv() {
    return Pl || (Pl = gm(pv));
  }
  const mv = (...t) => {
    const e = gv().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (r) => {
        const o = yv(r);
        if (!o) return;
        const s = e._component;
        !it(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
        const i = n(o, !1, vv(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
      }),
      e
    );
  };
  function vv(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function yv(t) {
    return zt(t) ? document.querySelector(t) : t;
  }
  var bv = !1;
  /*!
   * pinia v2.2.2
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ let Qh;
  const Jo = (t) => (Qh = t),
    Yh = Symbol();
  function Ai(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.toString.call(t) === "[object Object]" &&
      typeof t.toJSON != "function"
    );
  }
  var yr;
  (function (t) {
    (t.direct = "direct"), (t.patchObject = "patch object"), (t.patchFunction = "patch function");
  })(yr || (yr = {}));
  function _v() {
    const t = Kf(!0),
      e = t.run(() => ut({}));
    let n = [],
      r = [];
    const o = ra({
      install(s) {
        Jo(o),
          (o._a = s),
          s.provide(Yh, o),
          (s.config.globalProperties.$pinia = o),
          r.forEach((i) => n.push(i)),
          (r = []);
      },
      use(s) {
        return !this._a && !bv ? r.push(s) : n.push(s), this;
      },
      _p: n,
      _a: null,
      _e: t,
      _s: new Map(),
      state: e,
    });
    return o;
  }
  const Xh = () => {};
  function Il(t, e, n, r = Xh) {
    t.push(e);
    const o = () => {
      const s = t.indexOf(e);
      s > -1 && (t.splice(s, 1), r());
    };
    return !n && Zi() && Wf(o), o;
  }
  function Ln(t, ...e) {
    t.slice().forEach((n) => {
      n(...e);
    });
  }
  const wv = (t) => t(),
    Ml = Symbol(),
    Ss = Symbol();
  function Ei(t, e) {
    t instanceof Map && e instanceof Map
      ? e.forEach((n, r) => t.set(r, n))
      : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
      if (!e.hasOwnProperty(n)) continue;
      const r = e[n],
        o = t[n];
      Ai(o) && Ai(r) && t.hasOwnProperty(n) && !Mt(r) && !Ye(r) ? (t[n] = Ei(o, r)) : (t[n] = r);
    }
    return t;
  }
  const xv = Symbol();
  function kv(t) {
    return !Ai(t) || !t.hasOwnProperty(xv);
  }
  const { assign: Ge } = Object;
  function Sv(t) {
    return !!(Mt(t) && t.effect);
  }
  function Av(t, e, n, r) {
    const { state: o, actions: s, getters: i } = e,
      a = n.state.value[t];
    let l;
    function c() {
      a || (n.state.value[t] = o ? o() : {});
      const u = Og(n.state.value[t]);
      return Ge(
        u,
        s,
        Object.keys(i || {}).reduce(
          (d, f) => (
            (d[f] = ra(
              rt(() => {
                Jo(n);
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
    return (l = td(t, c, e, n, r, !0)), l;
  }
  function td(t, e, n = {}, r, o, s) {
    let i;
    const a = Ge({ actions: {} }, n),
      l = { deep: !0 };
    let c,
      u,
      d = [],
      f = [],
      h;
    const g = r.state.value[t];
    !s && !g && (r.state.value[t] = {}), ut({});
    let m;
    function y(H) {
      let X;
      (c = u = !1),
        typeof H == "function"
          ? (H(r.state.value[t]), (X = { type: yr.patchFunction, storeId: t, events: h }))
          : (Ei(r.state.value[t], H), (X = { type: yr.patchObject, payload: H, storeId: t, events: h }));
      const I = (m = Symbol());
      Uo().then(() => {
        m === I && (c = !0);
      }),
        (u = !0),
        Ln(d, X, r.state.value[t]);
    }
    const w = s
      ? function () {
          const { state: X } = n,
            I = X ? X() : {};
          this.$patch((p) => {
            Ge(p, I);
          });
        }
      : Xh;
    function _() {
      i.stop(), (d = []), (f = []), r._s.delete(t);
    }
    const x = (H, X = "") => {
        if (Ml in H) return (H[Ss] = X), H;
        const I = function () {
          Jo(r);
          const p = Array.from(arguments),
            S = [],
            C = [];
          function J(q) {
            S.push(q);
          }
          function et(q) {
            C.push(q);
          }
          Ln(f, { args: p, name: I[Ss], store: E, after: J, onError: et });
          let K;
          try {
            K = H.apply(this && this.$id === t ? this : E, p);
          } catch (q) {
            throw (Ln(C, q), q);
          }
          return K instanceof Promise
            ? K.then((q) => (Ln(S, q), q)).catch((q) => (Ln(C, q), Promise.reject(q)))
            : (Ln(S, K), K);
        };
        return (I[Ml] = !0), (I[Ss] = X), I;
      },
      k = {
        _p: r,
        $id: t,
        $onAction: Il.bind(null, f),
        $patch: y,
        $reset: w,
        $subscribe(H, X = {}) {
          const I = Il(d, H, X.detached, () => p()),
            p = i.run(() =>
              Se(
                () => r.state.value[t],
                (S) => {
                  (X.flush === "sync" ? u : c) && H({ storeId: t, type: yr.direct, events: h }, S);
                },
                Ge({}, l, X),
              ),
            );
          return I;
        },
        $dispose: _,
      },
      E = Jn(k);
    r._s.set(t, E);
    const V = ((r._a && r._a.runWithContext) || wv)(() => r._e.run(() => (i = Kf()).run(() => e({ action: x }))));
    for (const H in V) {
      const X = V[H];
      if ((Mt(X) && !Sv(X)) || Ye(X))
        s || (g && kv(X) && (Mt(X) ? (X.value = g[H]) : Ei(X, g[H])), (r.state.value[t][H] = X));
      else if (typeof X == "function") {
        const I = x(X, H);
        (V[H] = I), (a.actions[H] = X);
      }
    }
    return (
      Ge(E, V),
      Ge(ht(E), V),
      Object.defineProperty(E, "$state", {
        get: () => r.state.value[t],
        set: (H) => {
          y((X) => {
            Ge(X, H);
          });
        },
      }),
      r._p.forEach((H) => {
        Ge(
          E,
          i.run(() => H({ store: E, app: r._a, pinia: r, options: a })),
        );
      }),
      g && s && n.hydrate && n.hydrate(E.$state, g),
      (c = !0),
      (u = !0),
      E
    );
  }
  function Qo(t, e, n) {
    let r, o;
    const s = typeof e == "function";
    typeof t == "string" ? ((r = t), (o = s ? n : e)) : ((o = t), (r = t.id));
    function i(a, l) {
      const c = lm();
      return (
        (a = a || (c ? he(Yh, null) : null)),
        a && Jo(a),
        (a = Qh),
        a._s.has(r) || (s ? td(r, e, o, a) : Av(r, o, a)),
        a._s.get(r)
      );
    }
    return (i.$id = r), i;
  }
  /*!
   * vue-router v4.4.5
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ const zn = typeof document < "u";
  function ed(t) {
    return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
  }
  function Ev(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module" || (t.default && ed(t.default));
  }
  const yt = Object.assign;
  function As(t, e) {
    const n = {};
    for (const r in e) {
      const o = e[r];
      n[r] = me(o) ? o.map(t) : t(o);
    }
    return n;
  }
  const br = () => {},
    me = Array.isArray,
    nd = /#/g,
    Tv = /&/g,
    Ov = /\//g,
    Cv = /=/g,
    Rv = /\?/g,
    rd = /\+/g,
    jv = /%5B/g,
    $v = /%5D/g,
    od = /%5E/g,
    Pv = /%60/g,
    sd = /%7B/g,
    Iv = /%7C/g,
    id = /%7D/g,
    Mv = /%20/g;
  function pa(t) {
    return encodeURI("" + t)
      .replace(Iv, "|")
      .replace(jv, "[")
      .replace($v, "]");
  }
  function Lv(t) {
    return pa(t).replace(sd, "{").replace(id, "}").replace(od, "^");
  }
  function Ti(t) {
    return pa(t)
      .replace(rd, "%2B")
      .replace(Mv, "+")
      .replace(nd, "%23")
      .replace(Tv, "%26")
      .replace(Pv, "`")
      .replace(sd, "{")
      .replace(id, "}")
      .replace(od, "^");
  }
  function Nv(t) {
    return Ti(t).replace(Cv, "%3D");
  }
  function zv(t) {
    return pa(t).replace(nd, "%23").replace(Rv, "%3F");
  }
  function Dv(t) {
    return t == null ? "" : zv(t).replace(Ov, "%2F");
  }
  function jr(t) {
    try {
      return decodeURIComponent("" + t);
    } catch {}
    return "" + t;
  }
  const Fv = /\/$/,
    Bv = (t) => t.replace(Fv, "");
  function Es(t, e, n = "/") {
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
      (r = qv(r ?? e, n)),
      { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: jr(i) }
    );
  }
  function Uv(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "");
  }
  function Ll(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/";
  }
  function Vv(t, e, n) {
    const r = e.matched.length - 1,
      o = n.matched.length - 1;
    return (
      r > -1 &&
      r === o &&
      Kn(e.matched[r], n.matched[o]) &&
      ad(e.params, n.params) &&
      t(e.query) === t(n.query) &&
      e.hash === n.hash
    );
  }
  function Kn(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e);
  }
  function ad(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const n in t) if (!Hv(t[n], e[n])) return !1;
    return !0;
  }
  function Hv(t, e) {
    return me(t) ? Nl(t, e) : me(e) ? Nl(e, t) : t === e;
  }
  function Nl(t, e) {
    return me(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e;
  }
  function qv(t, e) {
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
  const We = {
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
  var _r;
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(_r || (_r = {}));
  function Kv(t) {
    if (!t)
      if (zn) {
        const e = document.querySelector("base");
        (t = (e && e.getAttribute("href")) || "/"), (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
      } else t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Bv(t);
  }
  const Wv = /^[^#]+#/;
  function Gv(t, e) {
    return t.replace(Wv, "#") + e;
  }
  function Zv(t, e) {
    const n = document.documentElement.getBoundingClientRect(),
      r = t.getBoundingClientRect();
    return { behavior: e.behavior, left: r.left - n.left - (e.left || 0), top: r.top - n.top - (e.top || 0) };
  }
  const Yo = () => ({ left: window.scrollX, top: window.scrollY });
  function Jv(t) {
    let e;
    if ("el" in t) {
      const n = t.el,
        r = typeof n == "string" && n.startsWith("#"),
        o = typeof n == "string" ? (r ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n;
      if (!o) return;
      e = Zv(o, t);
    } else e = t;
    "scrollBehavior" in document.documentElement.style
      ? window.scrollTo(e)
      : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY);
  }
  function zl(t, e) {
    return (history.state ? history.state.position - e : -1) + t;
  }
  const Oi = new Map();
  function Qv(t, e) {
    Oi.set(t, e);
  }
  function Yv(t) {
    const e = Oi.get(t);
    return Oi.delete(t), e;
  }
  let Xv = () => location.protocol + "//" + location.host;
  function ld(t, e) {
    const { pathname: n, search: r, hash: o } = e,
      s = t.indexOf("#");
    if (s > -1) {
      let a = o.includes(t.slice(s)) ? t.slice(s).length : 1,
        l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), Ll(l, "");
    }
    return Ll(n, t) + r + o;
  }
  function ty(t, e, n, r) {
    let o = [],
      s = [],
      i = null;
    const a = ({ state: f }) => {
      const h = ld(t, location),
        g = n.value,
        m = e.value;
      let y = 0;
      if (f) {
        if (((n.value = h), (e.value = f), i && i === g)) {
          i = null;
          return;
        }
        y = m ? f.position - m.position : 0;
      } else r(h);
      o.forEach((w) => {
        w(n.value, g, { delta: y, type: $r.pop, direction: y ? (y > 0 ? _r.forward : _r.back) : _r.unknown });
      });
    };
    function l() {
      i = n.value;
    }
    function c(f) {
      o.push(f);
      const h = () => {
        const g = o.indexOf(f);
        g > -1 && o.splice(g, 1);
      };
      return s.push(h), h;
    }
    function u() {
      const { history: f } = window;
      f.state && f.replaceState(yt({}, f.state, { scroll: Yo() }), "");
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
  function Dl(t, e, n, r = !1, o = !1) {
    return { back: t, current: e, forward: n, replaced: r, position: window.history.length, scroll: o ? Yo() : null };
  }
  function ey(t) {
    const { history: e, location: n } = window,
      r = { value: ld(t, n) },
      o = { value: e.state };
    o.value ||
      s(
        r.value,
        { back: null, current: r.value, forward: null, position: e.length - 1, replaced: !0, scroll: null },
        !0,
      );
    function s(l, c, u) {
      const d = t.indexOf("#"),
        f = d > -1 ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l : Xv() + t + l;
      try {
        e[u ? "replaceState" : "pushState"](c, "", f), (o.value = c);
      } catch (h) {
        console.error(h), n[u ? "replace" : "assign"](f);
      }
    }
    function i(l, c) {
      const u = yt({}, e.state, Dl(o.value.back, l, o.value.forward, !0), c, { position: o.value.position });
      s(l, u, !0), (r.value = l);
    }
    function a(l, c) {
      const u = yt({}, o.value, e.state, { forward: l, scroll: Yo() });
      s(u.current, u, !0);
      const d = yt({}, Dl(r.value, l, null), { position: u.position + 1 }, c);
      s(l, d, !1), (r.value = l);
    }
    return { location: r, state: o, push: a, replace: i };
  }
  function ny(t) {
    t = Kv(t);
    const e = ey(t),
      n = ty(t, e.state, e.location, e.replace);
    function r(s, i = !0) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = yt({ location: "", base: t, go: r, createHref: Gv.bind(null, t) }, e, n);
    return (
      Object.defineProperty(o, "location", { enumerable: !0, get: () => e.location.value }),
      Object.defineProperty(o, "state", { enumerable: !0, get: () => e.state.value }),
      o
    );
  }
  function ry(t) {
    return typeof t == "string" || (t && typeof t == "object");
  }
  function cd(t) {
    return typeof t == "string" || typeof t == "symbol";
  }
  const ud = Symbol("");
  var Fl;
  (function (t) {
    (t[(t.aborted = 4)] = "aborted"), (t[(t.cancelled = 8)] = "cancelled"), (t[(t.duplicated = 16)] = "duplicated");
  })(Fl || (Fl = {}));
  function Wn(t, e) {
    return yt(new Error(), { type: t, [ud]: !0 }, e);
  }
  function Ie(t, e) {
    return t instanceof Error && ud in t && (e == null || !!(t.type & e));
  }
  const Bl = "[^/]+?",
    oy = { sensitive: !1, strict: !1, start: !0, end: !0 },
    sy = /[.+*?^${}()[\]/\\]/g;
  function iy(t, e) {
    const n = yt({}, oy, e),
      r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of t) {
      const u = c.length ? [] : [90];
      n.strict && !c.length && (o += "/");
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        let h = 40 + (n.sensitive ? 0.25 : 0);
        if (f.type === 0) d || (o += "/"), (o += f.value.replace(sy, "\\$&")), (h += 40);
        else if (f.type === 1) {
          const { value: g, repeatable: m, optional: y, regexp: w } = f;
          s.push({ name: g, repeatable: m, optional: y });
          const _ = w || Bl;
          if (_ !== Bl) {
            h += 10;
            try {
              new RegExp(`(${_})`);
            } catch (k) {
              throw new Error(`Invalid custom RegExp for param "${g}" (${_}): ` + k.message);
            }
          }
          let x = m ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          d || (x = y && c.length < 2 ? `(?:/${x})` : "/" + x),
            y && (x += "?"),
            (o += x),
            (h += 20),
            y && (h += -8),
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
    const i = new RegExp(o, n.sensitive ? "" : "i");
    function a(c) {
      const u = c.match(i),
        d = {};
      if (!u) return null;
      for (let f = 1; f < u.length; f++) {
        const h = u[f] || "",
          g = s[f - 1];
        d[g.name] = h && g.repeatable ? h.split("/") : h;
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
            const { value: g, repeatable: m, optional: y } = h,
              w = g in c ? c[g] : "";
            if (me(w) && !m)
              throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
            const _ = me(w) ? w.join("/") : w;
            if (!_)
              if (y) f.length < 2 && (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
              else throw new Error(`Missing required param "${g}"`);
            u += _;
          }
      }
      return u || "/";
    }
    return { re: i, score: r, keys: s, parse: a, stringify: l };
  }
  function ay(t, e) {
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
  function fd(t, e) {
    let n = 0;
    const r = t.score,
      o = e.score;
    for (; n < r.length && n < o.length; ) {
      const s = ay(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Ul(r)) return 1;
      if (Ul(o)) return -1;
    }
    return o.length - r.length;
  }
  function Ul(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0;
  }
  const ly = { type: 0, value: "" },
    cy = /[a-zA-Z0-9_]/;
  function uy(t) {
    if (!t) return [[]];
    if (t === "/") return [[ly]];
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
          l === "(" ? (n = 2) : cy.test(l) ? f() : (d(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
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
  function fy(t, e, n) {
    const r = iy(uy(t.path), n),
      o = yt(r, { record: t, parent: e, children: [], alias: [] });
    return e && !o.record.aliasOf == !e.record.aliasOf && e.children.push(o), o;
  }
  function hy(t, e) {
    const n = [],
      r = new Map();
    e = Kl({ strict: !1, end: !0, sensitive: !1 }, e);
    function o(d) {
      return r.get(d);
    }
    function s(d, f, h) {
      const g = !h,
        m = Hl(d);
      m.aliasOf = h && h.record;
      const y = Kl(e, d),
        w = [m];
      if ("alias" in d) {
        const k = typeof d.alias == "string" ? [d.alias] : d.alias;
        for (const E of k)
          w.push(
            Hl(yt({}, m, { components: h ? h.record.components : m.components, path: E, aliasOf: h ? h.record : m })),
          );
      }
      let _, x;
      for (const k of w) {
        const { path: E } = k;
        if (f && E[0] !== "/") {
          const z = f.record.path,
            V = z[z.length - 1] === "/" ? "" : "/";
          k.path = f.record.path + (E && V + E);
        }
        if (
          ((_ = fy(k, f, y)),
          h ? h.alias.push(_) : ((x = x || _), x !== _ && x.alias.push(_), g && d.name && !ql(_) && i(d.name)),
          hd(_) && l(_),
          m.children)
        ) {
          const z = m.children;
          for (let V = 0; V < z.length; V++) s(z[V], _, h && h.children[V]);
        }
        h = h || _;
      }
      return x
        ? () => {
            i(x);
          }
        : br;
    }
    function i(d) {
      if (cd(d)) {
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
      const f = gy(d, n);
      n.splice(f, 0, d), d.record.name && !ql(d) && r.set(d.record.name, d);
    }
    function c(d, f) {
      let h,
        g = {},
        m,
        y;
      if ("name" in d && d.name) {
        if (((h = r.get(d.name)), !h)) throw Wn(1, { location: d });
        (y = h.record.name),
          (g = yt(
            Vl(
              f.params,
              h.keys
                .filter((x) => !x.optional)
                .concat(h.parent ? h.parent.keys.filter((x) => x.optional) : [])
                .map((x) => x.name),
            ),
            d.params &&
              Vl(
                d.params,
                h.keys.map((x) => x.name),
              ),
          )),
          (m = h.stringify(g));
      } else if (d.path != null)
        (m = d.path), (h = n.find((x) => x.re.test(m))), h && ((g = h.parse(m)), (y = h.record.name));
      else {
        if (((h = f.name ? r.get(f.name) : n.find((x) => x.re.test(f.path))), !h))
          throw Wn(1, { location: d, currentLocation: f });
        (y = h.record.name), (g = yt({}, f.params, d.params)), (m = h.stringify(g));
      }
      const w = [];
      let _ = h;
      for (; _; ) w.unshift(_.record), (_ = _.parent);
      return { name: y, path: m, params: g, matched: w, meta: py(w) };
    }
    t.forEach((d) => s(d));
    function u() {
      (n.length = 0), r.clear();
    }
    return { addRoute: s, resolve: c, removeRoute: i, clearRoutes: u, getRoutes: a, getRecordMatcher: o };
  }
  function Vl(t, e) {
    const n = {};
    for (const r of e) r in t && (n[r] = t[r]);
    return n;
  }
  function Hl(t) {
    const e = {
      path: t.path,
      redirect: t.redirect,
      name: t.name,
      meta: t.meta || {},
      aliasOf: t.aliasOf,
      beforeEnter: t.beforeEnter,
      props: dy(t),
      children: t.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in t ? t.components || null : t.component && { default: t.component },
    };
    return Object.defineProperty(e, "mods", { value: {} }), e;
  }
  function dy(t) {
    const e = {},
      n = t.props || !1;
    if ("component" in t) e.default = n;
    else for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
    return e;
  }
  function ql(t) {
    for (; t; ) {
      if (t.record.aliasOf) return !0;
      t = t.parent;
    }
    return !1;
  }
  function py(t) {
    return t.reduce((e, n) => yt(e, n.meta), {});
  }
  function Kl(t, e) {
    const n = {};
    for (const r in t) n[r] = r in e ? e[r] : t[r];
    return n;
  }
  function gy(t, e) {
    let n = 0,
      r = e.length;
    for (; n !== r; ) {
      const s = (n + r) >> 1;
      fd(t, e[s]) < 0 ? (r = s) : (n = s + 1);
    }
    const o = my(t);
    return o && (r = e.lastIndexOf(o, r - 1)), r;
  }
  function my(t) {
    let e = t;
    for (; (e = e.parent); ) if (hd(e) && fd(t, e) === 0) return e;
  }
  function hd({ record: t }) {
    return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect);
  }
  function vy(t) {
    const e = {};
    if (t === "" || t === "?") return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(rd, " "),
        i = s.indexOf("="),
        a = jr(i < 0 ? s : s.slice(0, i)),
        l = i < 0 ? null : jr(s.slice(i + 1));
      if (a in e) {
        let c = e[a];
        me(c) || (c = e[a] = [c]), c.push(l);
      } else e[a] = l;
    }
    return e;
  }
  function Wl(t) {
    let e = "";
    for (let n in t) {
      const r = t[n];
      if (((n = Nv(n)), r == null)) {
        r !== void 0 && (e += (e.length ? "&" : "") + n);
        continue;
      }
      (me(r) ? r.map((s) => s && Ti(s)) : [r && Ti(r)]).forEach((s) => {
        s !== void 0 && ((e += (e.length ? "&" : "") + n), s != null && (e += "=" + s));
      });
    }
    return e;
  }
  function yy(t) {
    const e = {};
    for (const n in t) {
      const r = t[n];
      r !== void 0 && (e[n] = me(r) ? r.map((o) => (o == null ? null : "" + o)) : r == null ? r : "" + r);
    }
    return e;
  }
  const by = Symbol(""),
    Gl = Symbol(""),
    Xo = Symbol(""),
    ga = Symbol(""),
    Ci = Symbol("");
  function sr() {
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
  function Qe(t, e, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () =>
      new Promise((a, l) => {
        const c = (f) => {
            f === !1
              ? l(Wn(4, { from: n, to: e }))
              : f instanceof Error
                ? l(f)
                : ry(f)
                  ? l(Wn(2, { from: e, to: f }))
                  : (i && r.enterCallbacks[o] === i && typeof f == "function" && i.push(f), a());
          },
          u = s(() => t.call(r && r.instances[o], e, n, c));
        let d = Promise.resolve(u);
        t.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
      });
  }
  function Ts(t, e, n, r, o = (s) => s()) {
    const s = [];
    for (const i of t)
      for (const a in i.components) {
        let l = i.components[a];
        if (!(e !== "beforeRouteEnter" && !i.instances[a]))
          if (ed(l)) {
            const u = (l.__vccOpts || l)[e];
            u && s.push(Qe(u, n, r, i, a, o));
          } else {
            let c = l();
            s.push(() =>
              c.then((u) => {
                if (!u) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                const d = Ev(u) ? u.default : u;
                (i.mods[a] = u), (i.components[a] = d);
                const h = (d.__vccOpts || d)[e];
                return h && Qe(h, n, r, i, a, o)();
              }),
            );
          }
      }
    return s;
  }
  function Zl(t) {
    const e = he(Xo),
      n = he(ga),
      r = rt(() => {
        const l = F(t.to);
        return e.resolve(l);
      }),
      o = rt(() => {
        const { matched: l } = r.value,
          { length: c } = l,
          u = l[c - 1],
          d = n.matched;
        if (!u || !d.length) return -1;
        const f = d.findIndex(Kn.bind(null, u));
        if (f > -1) return f;
        const h = Jl(l[c - 2]);
        return c > 1 && Jl(u) === h && d[d.length - 1].path !== h ? d.findIndex(Kn.bind(null, l[c - 2])) : f;
      }),
      s = rt(() => o.value > -1 && ky(n.params, r.value.params)),
      i = rt(() => o.value > -1 && o.value === n.matched.length - 1 && ad(n.params, r.value.params));
    function a(l = {}) {
      return xy(l) ? e[F(t.replace) ? "replace" : "push"](F(t.to)).catch(br) : Promise.resolve();
    }
    return { route: r, href: rt(() => r.value.href), isActive: s, isExactActive: i, navigate: a };
  }
  const _y = Lt({
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
      useLink: Zl,
      setup(t, { slots: e }) {
        const n = Jn(Zl(t)),
          { options: r } = he(Xo),
          o = rt(() => ({
            [Ql(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Ql(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive,
          }));
        return () => {
          const s = e.default && e.default(n);
          return t.custom
            ? s
            : Gh(
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
    wy = _y;
  function xy(t) {
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
  function ky(t, e) {
    for (const n in e) {
      const r = e[n],
        o = t[n];
      if (typeof r == "string") {
        if (r !== o) return !1;
      } else if (!me(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1;
    }
    return !0;
  }
  function Jl(t) {
    return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
  }
  const Ql = (t, e, n) => t ?? e ?? n,
    Sy = Lt({
      name: "RouterView",
      inheritAttrs: !1,
      props: { name: { type: String, default: "default" }, route: Object },
      compatConfig: { MODE: 3 },
      setup(t, { attrs: e, slots: n }) {
        const r = he(Ci),
          o = rt(() => t.route || r.value),
          s = he(Gl, 0),
          i = rt(() => {
            let c = F(s);
            const { matched: u } = o.value;
            let d;
            for (; (d = u[c]) && !d.components; ) c++;
            return c;
          }),
          a = rt(() => o.value.matched[i.value]);
        ao(
          Gl,
          rt(() => i.value + 1),
        ),
          ao(by, a),
          ao(Ci, o);
        const l = ut();
        return (
          Se(
            () => [l.value, a.value, t.name],
            ([c, u, d], [f, h, g]) => {
              u &&
                ((u.instances[d] = c),
                h &&
                  h !== u &&
                  c &&
                  c === f &&
                  (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                  u.updateGuards.size || (u.updateGuards = h.updateGuards))),
                c && u && (!h || !Kn(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((m) => m(c));
            },
            { flush: "post" },
          ),
          () => {
            const c = o.value,
              u = t.name,
              d = a.value,
              f = d && d.components[u];
            if (!f) return Yl(n.default, { Component: f, route: c });
            const h = d.props[u],
              g = h ? (h === !0 ? c.params : typeof h == "function" ? h(c) : h) : null,
              y = Gh(
                f,
                yt({}, g, e, {
                  onVnodeUnmounted: (w) => {
                    w.component.isUnmounted && (d.instances[u] = null);
                  },
                  ref: l,
                }),
              );
            return Yl(n.default, { Component: y, route: c }) || y;
          }
        );
      },
    });
  function Yl(t, e) {
    if (!t) return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n;
  }
  const dd = Sy;
  function Ay(t) {
    const e = hy(t.routes, t),
      n = t.parseQuery || vy,
      r = t.stringifyQuery || Wl,
      o = t.history,
      s = sr(),
      i = sr(),
      a = sr(),
      l = uh(We);
    let c = We;
    zn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = As.bind(null, (O) => "" + O),
      d = As.bind(null, Dv),
      f = As.bind(null, jr);
    function h(O, G) {
      let U, Q;
      return cd(O) ? ((U = e.getRecordMatcher(O)), (Q = G)) : (Q = O), e.addRoute(Q, U);
    }
    function g(O) {
      const G = e.getRecordMatcher(O);
      G && e.removeRoute(G);
    }
    function m() {
      return e.getRoutes().map((O) => O.record);
    }
    function y(O) {
      return !!e.getRecordMatcher(O);
    }
    function w(O, G) {
      if (((G = yt({}, G || l.value)), typeof O == "string")) {
        const b = Es(n, O, G.path),
          A = e.resolve({ path: b.path }, G),
          j = o.createHref(b.fullPath);
        return yt(b, A, { params: f(A.params), hash: jr(b.hash), redirectedFrom: void 0, href: j });
      }
      let U;
      if (O.path != null) U = yt({}, O, { path: Es(n, O.path, G.path).path });
      else {
        const b = yt({}, O.params);
        for (const A in b) b[A] == null && delete b[A];
        (U = yt({}, O, { params: d(b) })), (G.params = d(G.params));
      }
      const Q = e.resolve(U, G),
        gt = O.hash || "";
      Q.params = u(f(Q.params));
      const It = Uv(r, yt({}, O, { hash: Lv(gt), path: Q.path })),
        v = o.createHref(It);
      return yt({ fullPath: It, hash: gt, query: r === Wl ? yy(O.query) : O.query || {} }, Q, {
        redirectedFrom: void 0,
        href: v,
      });
    }
    function _(O) {
      return typeof O == "string" ? Es(n, O, l.value.path) : yt({}, O);
    }
    function x(O, G) {
      if (c !== O) return Wn(8, { from: G, to: O });
    }
    function k(O) {
      return V(O);
    }
    function E(O) {
      return k(yt(_(O), { replace: !0 }));
    }
    function z(O) {
      const G = O.matched[O.matched.length - 1];
      if (G && G.redirect) {
        const { redirect: U } = G;
        let Q = typeof U == "function" ? U(O) : U;
        return (
          typeof Q == "string" &&
            ((Q = Q.includes("?") || Q.includes("#") ? (Q = _(Q)) : { path: Q }), (Q.params = {})),
          yt({ query: O.query, hash: O.hash, params: Q.path != null ? {} : O.params }, Q)
        );
      }
    }
    function V(O, G) {
      const U = (c = w(O)),
        Q = l.value,
        gt = O.state,
        It = O.force,
        v = O.replace === !0,
        b = z(U);
      if (b)
        return V(yt(_(b), { state: typeof b == "object" ? yt({}, gt, b.state) : gt, force: It, replace: v }), G || U);
      const A = U;
      A.redirectedFrom = G;
      let j;
      return (
        !It && Vv(r, Q, U) && ((j = Wn(16, { to: A, from: Q })), Jt(Q, Q, !0, !1)),
        (j ? Promise.resolve(j) : I(A, Q))
          .catch((T) => (Ie(T) ? (Ie(T, 2) ? T : $t(T)) : at(T, A, Q)))
          .then((T) => {
            if (T) {
              if (Ie(T, 2))
                return V(
                  yt({ replace: v }, _(T.to), {
                    state: typeof T.to == "object" ? yt({}, gt, T.to.state) : gt,
                    force: It,
                  }),
                  G || A,
                );
            } else T = S(A, Q, !0, v, gt);
            return p(A, Q, T), T;
          })
      );
    }
    function H(O, G) {
      const U = x(O, G);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function X(O) {
      const G = $e.values().next().value;
      return G && typeof G.runWithContext == "function" ? G.runWithContext(O) : O();
    }
    function I(O, G) {
      let U;
      const [Q, gt, It] = Ey(O, G);
      U = Ts(Q.reverse(), "beforeRouteLeave", O, G);
      for (const b of Q)
        b.leaveGuards.forEach((A) => {
          U.push(Qe(A, O, G));
        });
      const v = H.bind(null, O, G);
      return (
        U.push(v),
        le(U)
          .then(() => {
            U = [];
            for (const b of s.list()) U.push(Qe(b, O, G));
            return U.push(v), le(U);
          })
          .then(() => {
            U = Ts(gt, "beforeRouteUpdate", O, G);
            for (const b of gt)
              b.updateGuards.forEach((A) => {
                U.push(Qe(A, O, G));
              });
            return U.push(v), le(U);
          })
          .then(() => {
            U = [];
            for (const b of It)
              if (b.beforeEnter)
                if (me(b.beforeEnter)) for (const A of b.beforeEnter) U.push(Qe(A, O, G));
                else U.push(Qe(b.beforeEnter, O, G));
            return U.push(v), le(U);
          })
          .then(
            () => (
              O.matched.forEach((b) => (b.enterCallbacks = {})),
              (U = Ts(It, "beforeRouteEnter", O, G, X)),
              U.push(v),
              le(U)
            ),
          )
          .then(() => {
            U = [];
            for (const b of i.list()) U.push(Qe(b, O, G));
            return U.push(v), le(U);
          })
          .catch((b) => (Ie(b, 8) ? b : Promise.reject(b)))
      );
    }
    function p(O, G, U) {
      a.list().forEach((Q) => X(() => Q(O, G, U)));
    }
    function S(O, G, U, Q, gt) {
      const It = x(O, G);
      if (It) return It;
      const v = G === We,
        b = zn ? history.state : {};
      U && (Q || v ? o.replace(O.fullPath, yt({ scroll: v && b && b.scroll }, gt)) : o.push(O.fullPath, gt)),
        (l.value = O),
        Jt(O, G, U, v),
        $t();
    }
    let C;
    function J() {
      C ||
        (C = o.listen((O, G, U) => {
          if (!In.listening) return;
          const Q = w(O),
            gt = z(Q);
          if (gt) {
            V(yt(gt, { replace: !0 }), Q).catch(br);
            return;
          }
          c = Q;
          const It = l.value;
          zn && Qv(zl(It.fullPath, U.delta), Yo()),
            I(Q, It)
              .catch((v) =>
                Ie(v, 12)
                  ? v
                  : Ie(v, 2)
                    ? (V(v.to, Q)
                        .then((b) => {
                          Ie(b, 20) && !U.delta && U.type === $r.pop && o.go(-1, !1);
                        })
                        .catch(br),
                      Promise.reject())
                    : (U.delta && o.go(-U.delta, !1), at(v, Q, It)),
              )
              .then((v) => {
                (v = v || S(Q, It, !1)),
                  v && (U.delta && !Ie(v, 8) ? o.go(-U.delta, !1) : U.type === $r.pop && Ie(v, 20) && o.go(-1, !1)),
                  p(Q, It, v);
              })
              .catch(br);
        }));
    }
    let et = sr(),
      K = sr(),
      q;
    function at(O, G, U) {
      $t(O);
      const Q = K.list();
      return Q.length ? Q.forEach((gt) => gt(O, G, U)) : console.error(O), Promise.reject(O);
    }
    function Ht() {
      return q && l.value !== We
        ? Promise.resolve()
        : new Promise((O, G) => {
            et.add([O, G]);
          });
    }
    function $t(O) {
      return q || ((q = !O), J(), et.list().forEach(([G, U]) => (O ? U(O) : G())), et.reset()), O;
    }
    function Jt(O, G, U, Q) {
      const { scrollBehavior: gt } = t;
      if (!zn || !gt) return Promise.resolve();
      const It = (!U && Yv(zl(O.fullPath, 0))) || ((Q || !U) && history.state && history.state.scroll) || null;
      return Uo()
        .then(() => gt(O, G, It))
        .then((v) => v && Jv(v))
        .catch((v) => at(v, O, G));
    }
    const wt = (O) => o.go(O);
    let Kt;
    const $e = new Set(),
      In = {
        currentRoute: l,
        listening: !0,
        addRoute: h,
        removeRoute: g,
        clearRoutes: e.clearRoutes,
        hasRoute: y,
        getRoutes: m,
        resolve: w,
        options: t,
        push: k,
        replace: E,
        go: wt,
        back: () => wt(-1),
        forward: () => wt(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: K.add,
        isReady: Ht,
        install(O) {
          const G = this;
          O.component("RouterLink", wy),
            O.component("RouterView", dd),
            (O.config.globalProperties.$router = G),
            Object.defineProperty(O.config.globalProperties, "$route", { enumerable: !0, get: () => F(l) }),
            zn && !Kt && l.value === We && ((Kt = !0), k(o.location).catch((gt) => {}));
          const U = {};
          for (const gt in We) Object.defineProperty(U, gt, { get: () => l.value[gt], enumerable: !0 });
          O.provide(Xo, G), O.provide(ga, lh(U)), O.provide(Ci, l);
          const Q = O.unmount;
          $e.add(O),
            (O.unmount = function () {
              $e.delete(O), $e.size < 1 && ((c = We), C && C(), (C = null), (l.value = We), (Kt = !1), (q = !1)), Q();
            });
        },
      };
    function le(O) {
      return O.reduce((G, U) => G.then(() => X(U)), Promise.resolve());
    }
    return In;
  }
  function Ey(t, e) {
    const n = [],
      r = [],
      o = [],
      s = Math.max(e.matched.length, t.matched.length);
    for (let i = 0; i < s; i++) {
      const a = e.matched[i];
      a && (t.matched.find((c) => Kn(c, a)) ? r.push(a) : n.push(a));
      const l = t.matched[i];
      l && (e.matched.find((c) => Kn(c, l)) || o.push(l));
    }
    return [n, r, o];
  }
  function ts() {
    return he(Xo);
  }
  function es(t) {
    return he(ga);
  }
  const Xl = 1e3 * 60,
    Ty = Qo("alive", () => {
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
        }, Xl),
        console.log("Ping store created, timeout: ", Xl),
        { isAlive: t }
      );
    }),
    Oy = Lt({
      __name: "App",
      setup(t) {
        return Ty(), (e, n) => (P(), L("main", null, [st(F(dd))]));
      },
    });
  var Cy = Object.defineProperty,
    Ry = (t, e, n) => (e in t ? Cy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    ct = (t, e, n) => (Ry(t, typeof e != "symbol" ? e + "" : e, n), n),
    qt = [];
  for (var Os = 0; Os < 256; ++Os) qt.push((Os + 256).toString(16).slice(1));
  function jy(t, e = 0) {
    return (
      qt[t[e + 0]] +
      qt[t[e + 1]] +
      qt[t[e + 2]] +
      qt[t[e + 3]] +
      "-" +
      qt[t[e + 4]] +
      qt[t[e + 5]] +
      "-" +
      qt[t[e + 6]] +
      qt[t[e + 7]] +
      "-" +
      qt[t[e + 8]] +
      qt[t[e + 9]] +
      "-" +
      qt[t[e + 10]] +
      qt[t[e + 11]] +
      qt[t[e + 12]] +
      qt[t[e + 13]] +
      qt[t[e + 14]] +
      qt[t[e + 15]]
    ).toLowerCase();
  }
  var Qr,
    $y = new Uint8Array(16);
  function Py() {
    if (!Qr && ((Qr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !Qr))
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return Qr($y);
  }
  var Iy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  const tc = { randomUUID: Iy };
  function My(t, e, n) {
    if (tc.randomUUID && !e && !t) return tc.randomUUID();
    t = t || {};
    var r = t.random || (t.rng || Py)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), jy(r);
  }
  function Ly(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Ny = function () {},
    zy = Ny(),
    An = function (t) {
      return t !== zy && t !== null;
    },
    Dy = An,
    Fy = Array.prototype.forEach,
    By = Object.create,
    Uy = function (t, e) {
      var n;
      for (n in t) e[n] = t[n];
    },
    pd = function (t) {
      var e = By(null);
      return (
        Fy.call(arguments, function (n) {
          Dy(n) && Uy(Object(n), e);
        }),
        e
      );
    },
    Vy = function () {
      var t = Math.sign;
      return typeof t != "function" ? !1 : t(10) === 1 && t(-20) === -1;
    },
    ec,
    nc;
  function Hy() {
    return (
      nc ||
        ((nc = 1),
        (ec = function (t) {
          return (t = Number(t)), isNaN(t) || t === 0 ? t : t > 0 ? 1 : -1;
        })),
      ec
    );
  }
  var qy = Vy() ? Math.sign : Hy(),
    Ky = qy,
    Wy = Math.abs,
    Gy = Math.floor,
    Zy = function (t) {
      return isNaN(t) ? 0 : ((t = Number(t)), t === 0 || !isFinite(t) ? t : Ky(t) * Gy(Wy(t)));
    },
    Jy = Zy,
    Qy = Math.max,
    En = function (t) {
      return Qy(0, Jy(t));
    },
    Yy = En,
    gd = function (t, e, n) {
      var r;
      return isNaN(t) ? ((r = e), r >= 0 ? (n && r ? r - 1 : r) : 1) : t === !1 ? !1 : Yy(t);
    },
    an = function (t) {
      if (typeof t != "function") throw new TypeError(t + " is not a function");
      return t;
    },
    Xy = An,
    Qn = function (t) {
      if (!Xy(t)) throw new TypeError("Cannot use null or undefined");
      return t;
    },
    tb = an,
    eb = Qn,
    nb = Function.prototype.bind,
    rc = Function.prototype.call,
    rb = Object.keys,
    ob = Object.prototype.propertyIsEnumerable,
    sb = function (t, e) {
      return function (n, r) {
        var o,
          s = arguments[2],
          i = arguments[3];
        return (
          (n = Object(eb(n))),
          tb(r),
          (o = rb(n)),
          i && o.sort(typeof i == "function" ? nb.call(i, n) : void 0),
          typeof t != "function" && (t = o[t]),
          rc.call(t, o, function (a, l) {
            return ob.call(n, a) ? rc.call(r, s, n[a], a, n, l) : e;
          })
        );
      };
    },
    ns = sb("forEach"),
    Tn = {},
    md = { exports: {} },
    ib = function () {
      var t = Object.assign,
        e;
      return typeof t != "function"
        ? !1
        : ((e = { foo: "raz" }), t(e, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy");
    },
    oc,
    sc;
  function ab() {
    return (
      sc ||
        ((sc = 1),
        (oc = function () {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        })),
      oc
    );
  }
  var Cs, ic;
  function lb() {
    if (ic) return Cs;
    ic = 1;
    var t = An,
      e = Object.keys;
    return (
      (Cs = function (n) {
        return e(t(n) ? Object(n) : n);
      }),
      Cs
    );
  }
  var ac, lc;
  function cb() {
    return lc || ((lc = 1), (ac = ab()() ? Object.keys : lb())), ac;
  }
  var Rs, cc;
  function ub() {
    if (cc) return Rs;
    cc = 1;
    var t = cb(),
      e = Qn,
      n = Math.max;
    return (
      (Rs = function (r, o) {
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
      Rs
    );
  }
  var vd = ib() ? Object.assign : ub(),
    fb = An,
    hb = { function: !0, object: !0 },
    db = function (t) {
      return (fb(t) && hb[typeof t]) || !1;
    };
  (function (t) {
    var e = vd,
      n = db,
      r = An,
      o = Error.captureStackTrace;
    t.exports = function (s) {
      var i = new Error(s),
        a = arguments[1],
        l = arguments[2];
      return r(l) || (n(a) && ((l = a), (a = null))), r(l) && e(i, l), r(a) && (i.code = a), o && o(i, t.exports), i;
    };
  })(md);
  var pb = md.exports,
    Ri = { exports: {} },
    js,
    uc;
  function yd() {
    if (uc) return js;
    uc = 1;
    var t = Qn,
      e = Object.defineProperty,
      n = Object.getOwnPropertyDescriptor,
      r = Object.getOwnPropertyNames,
      o = Object.getOwnPropertySymbols;
    return (
      (js = function (s, i) {
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
      js
    );
  }
  var fc = En,
    bd = function (t, e) {
      return e;
    },
    $s,
    hc,
    dc,
    pc;
  try {
    Object.defineProperty(bd, "length", { configurable: !0, writable: !1, enumerable: !1, value: 1 });
  } catch {}
  bd.length === 1
    ? (($s = { configurable: !0, writable: !1, enumerable: !1 }),
      (hc = Object.defineProperty),
      (Ri.exports = function (t, e) {
        return (e = fc(e)), t.length === e ? t : (($s.value = e), hc(t, "length", $s));
      }))
    : ((pc = yd()),
      (dc = (function () {
        var t = [];
        return function (e) {
          var n,
            r = 0;
          if (t[e]) return t[e];
          for (n = []; e--; ) n.push("a" + (++r).toString(36));
          return new Function("fn", "return function (" + n.join(", ") + ") { return fn.apply(this, arguments); };");
        };
      })()),
      (Ri.exports = function (t, e) {
        var n;
        if (((e = fc(e)), t.length === e)) return t;
        n = dc(e)(t);
        try {
          pc(n, t);
        } catch {}
        return n;
      }));
  var _d = Ri.exports,
    wd = { exports: {} },
    gb = void 0,
    xd = function (t) {
      return t !== gb && t !== null;
    },
    mb = xd,
    vb = { object: !0, function: !0, undefined: !0 },
    yb = function (t) {
      return mb(t) ? hasOwnProperty.call(vb, typeof t) : !1;
    },
    bb = yb,
    _b = function (t) {
      if (!bb(t)) return !1;
      try {
        return t.constructor ? t.constructor.prototype === t : !1;
      } catch {
        return !1;
      }
    },
    wb = _b,
    xb = function (t) {
      if (typeof t != "function" || !hasOwnProperty.call(t, "length")) return !1;
      try {
        if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") return !1;
      } catch {
        return !1;
      }
      return !wb(t);
    },
    kb = xb,
    Sb = /^\s*class[\s{/}]/,
    Ab = Function.prototype.toString,
    Eb = function (t) {
      return !(!kb(t) || Sb.test(Ab.call(t)));
    },
    Ps = "razdwatrzy",
    Tb = function () {
      return typeof Ps.contains != "function" ? !1 : Ps.contains("dwa") === !0 && Ps.contains("foo") === !1;
    },
    Is,
    gc;
  function Ob() {
    if (gc) return Is;
    gc = 1;
    var t = String.prototype.indexOf;
    return (
      (Is = function (e) {
        return t.call(this, e, arguments[1]) > -1;
      }),
      Is
    );
  }
  var Cb = Tb() ? String.prototype.contains : Ob(),
    uo = xd,
    mc = Eb,
    kd = vd,
    Sd = pd,
    wr = Cb,
    Rb = (wd.exports = function (t, e) {
      var n, r, o, s, i;
      return (
        arguments.length < 2 || typeof t != "string" ? ((s = e), (e = t), (t = null)) : (s = arguments[2]),
        uo(t) ? ((n = wr.call(t, "c")), (r = wr.call(t, "e")), (o = wr.call(t, "w"))) : ((n = o = !0), (r = !1)),
        (i = { value: e, configurable: n, enumerable: r, writable: o }),
        s ? kd(Sd(s), i) : i
      );
    });
  Rb.gs = function (t, e, n) {
    var r, o, s, i;
    return (
      typeof t != "string" ? ((s = n), (n = e), (e = t), (t = null)) : (s = arguments[3]),
      uo(e)
        ? mc(e)
          ? uo(n)
            ? mc(n) || ((s = n), (n = void 0))
            : (n = void 0)
          : ((s = e), (e = n = void 0))
        : (e = void 0),
      uo(t) ? ((r = wr.call(t, "c")), (o = wr.call(t, "e"))) : ((r = !0), (o = !1)),
      (i = { get: e, set: n, configurable: r, enumerable: o }),
      s ? kd(Sd(s), i) : i
    );
  };
  var On = wd.exports,
    ji = { exports: {} };
  (function (t, e) {
    var n = On,
      r = an,
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
      g,
      m,
      y,
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
        var k, E, z, V;
        if ((r(x), !c.call(this, "__ee__"))) return this;
        if (((k = this.__ee__), !k[_])) return this;
        if (((E = k[_]), typeof E == "object"))
          for (V = 0; (z = E[V]); ++V)
            (z === x || z.__eeOnceListener__ === x) && (E.length === 2 ? (k[_] = E[V ? 0 : 1]) : E.splice(V, 1));
        else (E === x || E.__eeOnceListener__ === x) && delete k[_];
        return this;
      }),
      (g = function (_) {
        var x, k, E, z, V;
        if (c.call(this, "__ee__") && ((z = this.__ee__[_]), !!z))
          if (typeof z == "object") {
            for (k = arguments.length, V = new Array(k - 1), x = 1; x < k; ++x) V[x - 1] = arguments[x];
            for (z = z.slice(), x = 0; (E = z[x]); ++x) o.call(E, this, V);
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
                for (k = arguments.length, V = new Array(k - 1), x = 1; x < k; ++x) V[x - 1] = arguments[x];
                o.call(z, this, V);
            }
      }),
      (m = { on: d, once: f, off: h, emit: g }),
      (y = { on: n(d), once: n(f), off: n(h), emit: n(g) }),
      (w = l({}, y)),
      (t.exports = e =
        function (_) {
          return _ == null ? i(w) : l(Object(_), y);
        }),
      (e.methods = m);
  })(ji, ji.exports);
  var jb = ji.exports,
    vc,
    yc;
  function $b() {
    return (
      yc ||
        ((yc = 1),
        (vc = function () {
          var t = Array.from,
            e,
            n;
          return typeof t != "function" ? !1 : ((e = ["raz", "dwa"]), (n = t(e)), !!(n && n !== e && n[1] === "dwa"));
        })),
      vc
    );
  }
  var bc, _c;
  function Pb() {
    return (
      _c ||
        ((_c = 1),
        (bc = function () {
          return typeof globalThis != "object" || !globalThis ? !1 : globalThis.Array === Array;
        })),
      bc
    );
  }
  var Ms, wc;
  function Ib() {
    if (wc) return Ms;
    wc = 1;
    var t = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
    };
    return (
      (Ms = (function () {
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
      Ms
    );
  }
  var xc, kc;
  function rs() {
    return kc || ((kc = 1), (xc = Pb()() ? globalThis : Ib())), xc;
  }
  var Ls, Sc;
  function Mb() {
    if (Sc) return Ls;
    Sc = 1;
    var t = rs(),
      e = { object: !0, symbol: !0 };
    return (
      (Ls = function () {
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
      Ls
    );
  }
  var Ac, Ec;
  function Lb() {
    return (
      Ec ||
        ((Ec = 1),
        (Ac = function (t) {
          return t
            ? typeof t == "symbol"
              ? !0
              : !t.constructor || t.constructor.name !== "Symbol"
                ? !1
                : t[t.constructor.toStringTag] === "Symbol"
            : !1;
        })),
      Ac
    );
  }
  var Ns, Tc;
  function Ad() {
    if (Tc) return Ns;
    Tc = 1;
    var t = Lb();
    return (
      (Ns = function (e) {
        if (!t(e)) throw new TypeError(e + " is not a symbol");
        return e;
      }),
      Ns
    );
  }
  var zs, Oc;
  function Nb() {
    if (Oc) return zs;
    Oc = 1;
    var t = On,
      e = Object.create,
      n = Object.defineProperty,
      r = Object.prototype,
      o = e(null);
    return (
      (zs = function (s) {
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
      zs
    );
  }
  var Ds, Cc;
  function zb() {
    if (Cc) return Ds;
    Cc = 1;
    var t = On,
      e = rs().Symbol;
    return (
      (Ds = function (n) {
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
      Ds
    );
  }
  var Fs, Rc;
  function Db() {
    if (Rc) return Fs;
    Rc = 1;
    var t = On,
      e = Ad(),
      n = Object.create(null);
    return (
      (Fs = function (r) {
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
      Fs
    );
  }
  var Bs, jc;
  function Fb() {
    if (jc) return Bs;
    jc = 1;
    var t = On,
      e = Ad(),
      n = rs().Symbol,
      r = Nb(),
      o = zb(),
      s = Db(),
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
      (Bs = c =
        function f(h) {
          var g;
          if (this instanceof f) throw new TypeError("Symbol is not a constructor");
          return d
            ? n(h)
            : ((g = i(u.prototype)),
              (h = h === void 0 ? "" : String(h)),
              a(g, { __description__: t("", h), __name__: t("", r(h)) }));
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
      Bs
    );
  }
  var $c, Pc;
  function Bb() {
    return Pc || ((Pc = 1), ($c = Mb()() ? rs().Symbol : Fb())), $c;
  }
  var Us, Ic;
  function Ub() {
    if (Ic) return Us;
    Ic = 1;
    var t = Object.prototype.toString,
      e = t.call(
        (function () {
          return arguments;
        })(),
      );
    return (
      (Us = function (n) {
        return t.call(n) === e;
      }),
      Us
    );
  }
  var Vs, Mc;
  function Vb() {
    if (Mc) return Vs;
    Mc = 1;
    var t = Object.prototype.toString,
      e = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    return (
      (Vs = function (n) {
        return typeof n == "function" && e(t.call(n));
      }),
      Vs
    );
  }
  var Hs, Lc;
  function Hb() {
    if (Lc) return Hs;
    Lc = 1;
    var t = Object.prototype.toString,
      e = t.call("");
    return (
      (Hs = function (n) {
        return typeof n == "string" || (n && typeof n == "object" && (n instanceof String || t.call(n) === e)) || !1;
      }),
      Hs
    );
  }
  var qs, Nc;
  function qb() {
    if (Nc) return qs;
    Nc = 1;
    var t = Bb().iterator,
      e = Ub(),
      n = Vb(),
      r = En,
      o = an,
      s = Qn,
      i = An,
      a = Hb(),
      l = Array.isArray,
      c = Function.prototype.call,
      u = { configurable: !0, enumerable: !0, writable: !0, value: null },
      d = Object.defineProperty;
    return (
      (qs = function (f) {
        var h = arguments[1],
          g = arguments[2],
          m,
          y,
          w,
          _,
          x,
          k,
          E,
          z,
          V,
          H;
        if (((f = Object(s(f))), i(h) && o(h), !this || this === Array || !n(this))) {
          if (!h) {
            if (e(f)) return (x = f.length), x !== 1 ? Array.apply(null, f) : ((_ = new Array(1)), (_[0] = f[0]), _);
            if (l(f)) {
              for (_ = new Array((x = f.length)), y = 0; y < x; ++y) _[y] = f[y];
              return _;
            }
          }
          _ = [];
        } else m = this;
        if (!l(f)) {
          if ((V = f[t]) !== void 0) {
            for (E = o(V).call(f), m && (_ = new m()), z = E.next(), y = 0; !z.done; )
              (H = h ? c.call(h, g, z.value, y) : z.value),
                m ? ((u.value = H), d(_, y, u)) : (_[y] = H),
                (z = E.next()),
                ++y;
            x = y;
          } else if (a(f)) {
            for (x = f.length, m && (_ = new m()), y = 0, w = 0; y < x; ++y)
              (H = f[y]),
                y + 1 < x && ((k = H.charCodeAt(0)), k >= 55296 && k <= 56319 && (H += f[++y])),
                (H = h ? c.call(h, g, H, w) : H),
                m ? ((u.value = H), d(_, w, u)) : (_[w] = H),
                ++w;
            x = w;
          }
        }
        if (x === void 0)
          for (x = r(f.length), m && (_ = new m(x)), y = 0; y < x; ++y)
            (H = h ? c.call(h, g, f[y], y) : f[y]), m ? ((u.value = H), d(_, y, u)) : (_[y] = H);
        return m && ((u.value = null), (_.length = x)), _;
      }),
      qs
    );
  }
  var zc, Dc;
  function ma() {
    return Dc || ((Dc = 1), (zc = $b()() ? Array.from : qb())), zc;
  }
  var Kb = ma(),
    Wb = Array.isArray,
    Gb = function (t) {
      return Wb(t) ? t : Kb(t);
    },
    Zb = Gb,
    Jb = An,
    Qb = an,
    Yb = Array.prototype.slice,
    Ed;
  Ed = function (t) {
    return this.map(function (e, n) {
      return e ? e(t[n]) : t[n];
    }).concat(Yb.call(t, this.length));
  };
  var Xb = function (t) {
      return (
        (t = Zb(t)),
        t.forEach(function (e) {
          Jb(e) && Qb(e);
        }),
        Ed.bind(t)
      );
    },
    Yr = an,
    t0 = function (t) {
      var e;
      return typeof t == "function"
        ? { set: t, get: t }
        : ((e = { get: Yr(t.get) }),
          t.set !== void 0
            ? ((e.set = Yr(t.set)), t.delete && (e.delete = Yr(t.delete)), t.clear && (e.clear = Yr(t.clear)), e)
            : ((e.set = e.get), e));
    },
    Xr = pb,
    to = _d,
    ir = On,
    Td = jb.methods,
    e0 = Xb,
    n0 = t0,
    Ks = Function.prototype.apply,
    Ws = Function.prototype.call,
    Fc = Object.create,
    r0 = Object.defineProperties,
    o0 = Td.on,
    s0 = Td.emit,
    i0 = function (t, e, n) {
      var r = Fc(null),
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
        g,
        m,
        y,
        w,
        _;
      return (
        e !== !1 ? (s = e) : isNaN(t.length) ? (s = 1) : (s = t.length),
        n.normalizer && ((h = n0(n.normalizer)), (i = h.get), (a = h.set), (l = h.delete), (c = h.clear)),
        n.resolvers != null && (_ = e0(n.resolvers)),
        i
          ? (w = to(function (x) {
              var k,
                E,
                z = arguments;
              if ((_ && (z = _(z)), (k = i(z)), k !== null && hasOwnProperty.call(r, k)))
                return g && o.emit("get", k, z, this), r[k];
              if ((z.length === 1 ? (E = Ws.call(t, this, z[0])) : (E = Ks.call(t, this, z)), k === null)) {
                if (((k = i(z)), k !== null)) throw Xr("Circular invocation", "CIRCULAR_INVOCATION");
                k = a(z);
              } else if (hasOwnProperty.call(r, k)) throw Xr("Circular invocation", "CIRCULAR_INVOCATION");
              return (r[k] = E), m && o.emit("set", k, null, E), E;
            }, s))
          : e === 0
            ? (w = function () {
                var x;
                if (hasOwnProperty.call(r, "data")) return g && o.emit("get", "data", arguments, this), r.data;
                if (
                  (arguments.length ? (x = Ks.call(t, this, arguments)) : (x = Ws.call(t, this)),
                  hasOwnProperty.call(r, "data"))
                )
                  throw Xr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r.data = x), m && o.emit("set", "data", null, x), x;
              })
            : (w = function (x) {
                var k,
                  E = arguments,
                  z;
                if ((_ && (E = _(arguments)), (z = String(E[0])), hasOwnProperty.call(r, z)))
                  return g && o.emit("get", z, E, this), r[z];
                if (
                  (E.length === 1 ? (k = Ws.call(t, this, E[0])) : (k = Ks.call(t, this, E)), hasOwnProperty.call(r, z))
                )
                  throw Xr("Circular invocation", "CIRCULAR_INVOCATION");
                return (r[z] = k), m && o.emit("set", z, null, k), k;
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
            hasOwnProperty.call(r, x) && (l && l(x), (k = r[x]), delete r[x], y && o.emit("delete", x, k));
          },
          clear: function () {
            var x = r;
            c && c(), (r = Fc(null)), o.emit("clear", x);
          },
          on: function (x, k) {
            return x === "get" ? (g = !0) : x === "set" ? (m = !0) : x === "delete" && (y = !0), o0.call(this, x, k);
          },
          emit: s0,
          updateEnv: function () {
            t = o.original;
          },
        }),
        i
          ? (u = to(function (x) {
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
        (d = to(function () {
          var x,
            k = arguments;
          return e === 0 ? r.data : (_ && (k = _(k)), i ? (x = i(k)) : (x = String(k[0])), r[x]);
        })),
        (f = to(function () {
          var x,
            k = arguments;
          return e === 0
            ? o.has("data")
            : (_ && (k = _(k)), i ? (x = i(k)) : (x = String(k[0])), x === null ? !1 : o.has(x));
        })),
        r0(w, { __memoized__: ir(!0), delete: ir(u), clear: ir(o.clear), _get: ir(d), _has: ir(f) }),
        o
      );
    },
    a0 = an,
    l0 = ns,
    Bc = Tn,
    c0 = i0,
    u0 = gd,
    f0 = function t(e) {
      var n, r, o;
      if ((a0(e), (n = Object(arguments[1])), n.async && n.promise))
        throw new Error("Options 'async' and 'promise' cannot be used together");
      return hasOwnProperty.call(e, "__memoized__") && !n.force
        ? e
        : ((r = u0(n.length, e.length, n.async && Bc.async)),
          (o = c0(e, r, n)),
          l0(Bc, function (s, i) {
            n[i] && s(n[i], o, n);
          }),
          t.__profiler__ && t.__profiler__(o),
          o.updateEnv(),
          o.memoized);
    },
    Uc,
    Vc;
  function h0() {
    return (
      Vc ||
        ((Vc = 1),
        (Uc = function (t) {
          var e,
            n,
            r = t.length;
          if (!r) return "";
          for (e = String(t[(n = 0)]); --r; ) e += "" + t[++n];
          return e;
        })),
      Uc
    );
  }
  var Hc, qc;
  function d0() {
    return (
      qc ||
        ((qc = 1),
        (Hc = function (t) {
          return t
            ? function (e) {
                for (var n = String(e[0]), r = 0, o = t; --o; ) n += "" + e[++r];
                return n;
              }
            : function () {
                return "";
              };
        })),
      Hc
    );
  }
  var Kc, Wc;
  function p0() {
    return (
      Wc ||
        ((Wc = 1),
        (Kc = function () {
          var t = Number.isNaN;
          return typeof t != "function" ? !1 : !t({}) && t(NaN) && !t(34);
        })),
      Kc
    );
  }
  var Gc, Zc;
  function g0() {
    return (
      Zc ||
        ((Zc = 1),
        (Gc = function (t) {
          return t !== t;
        })),
      Gc
    );
  }
  var Jc, Qc;
  function m0() {
    return Qc || ((Qc = 1), (Jc = p0()() ? Number.isNaN : g0())), Jc;
  }
  var Gs, Yc;
  function va() {
    if (Yc) return Gs;
    Yc = 1;
    var t = m0(),
      e = En,
      n = Qn,
      r = Array.prototype.indexOf,
      o = Object.prototype.hasOwnProperty,
      s = Math.abs,
      i = Math.floor;
    return (
      (Gs = function (a) {
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
      Gs
    );
  }
  var Zs, Xc;
  function v0() {
    if (Xc) return Zs;
    Xc = 1;
    var t = va(),
      e = Object.create;
    return (
      (Zs = function () {
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
      Zs
    );
  }
  var Js, tu;
  function y0() {
    if (tu) return Js;
    tu = 1;
    var t = va();
    return (
      (Js = function () {
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
      Js
    );
  }
  var Qs, eu;
  function b0() {
    if (eu) return Qs;
    eu = 1;
    var t = va(),
      e = Object.create;
    return (
      (Qs = function (n) {
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
      Qs
    );
  }
  var nu = {},
    Ys,
    ru;
  function Od() {
    if (ru) return Ys;
    ru = 1;
    var t = an,
      e = ns,
      n = Function.prototype.call;
    return (
      (Ys = function (r, o) {
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
      Ys
    );
  }
  var Xs, ou;
  function ya() {
    if (ou) return Xs;
    ou = 1;
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
      (Xs = (function () {
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
      Xs
    );
  }
  var su;
  function _0() {
    if (su) return nu;
    su = 1;
    var t = ma(),
      e = Od(),
      n = yd(),
      r = _d,
      o = ya(),
      s = Array.prototype.slice,
      i = Function.prototype.apply,
      a = Object.create;
    return (
      (Tn.async = function (l, c) {
        var u = a(null),
          d = a(null),
          f = c.memoized,
          h = c.original,
          g,
          m,
          y;
        c.memoized = r(function (w) {
          var _ = arguments,
            x = _[_.length - 1];
          return typeof x == "function" && ((g = x), (_ = s.call(_, 0, -1))), f.apply((m = this), (y = _));
        }, f);
        try {
          n(c.memoized, f);
        } catch {}
        c.on("get", function (w) {
          var _, x, k;
          if (g) {
            if (u[w]) {
              typeof u[w] == "function" ? (u[w] = [u[w], g]) : u[w].push(g), (g = null);
              return;
            }
            (_ = g),
              (x = m),
              (k = y),
              (g = m = y = null),
              o(function () {
                var E;
                hasOwnProperty.call(d, w)
                  ? ((E = d[w]), c.emit("getasync", w, k, x), i.call(_, E.context, E.args))
                  : ((g = _), (m = x), (y = k), f.apply(x, k));
              });
          }
        }),
          (c.original = function () {
            var w, _, x, k;
            return g
              ? ((w = t(arguments)),
                (_ = function E(z) {
                  var V,
                    H,
                    X = E.id;
                  if (X == null) {
                    o(i.bind(E, this, arguments));
                    return;
                  }
                  if ((delete E.id, (V = u[X]), delete u[X], !!V))
                    return (
                      (H = t(arguments)),
                      c.has(X) &&
                        (z
                          ? c.delete(X)
                          : ((d[X] = { context: this, args: H }),
                            c.emit("setasync", X, typeof V == "function" ? 1 : V.length))),
                      typeof V == "function"
                        ? (k = i.call(V, this, H))
                        : V.forEach(function (I) {
                            k = i.call(I, this, H);
                          }, this),
                      k
                    );
                }),
                (x = g),
                (g = m = y = null),
                w.push(_),
                (k = i.call(h, this, w)),
                (_.cb = x),
                (g = _),
                k)
              : i.call(h, this, arguments);
          }),
          c.on("set", function (w) {
            if (!g) {
              c.delete(w);
              return;
            }
            u[w] ? (typeof u[w] == "function" ? (u[w] = [u[w], g.cb]) : u[w].push(g.cb)) : (u[w] = g.cb),
              delete g.cb,
              (g.id = w),
              (g = null);
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
      nu
    );
  }
  var iu = {},
    ti,
    au;
  function w0() {
    if (au) return ti;
    au = 1;
    var t = Array.prototype.forEach,
      e = Object.create;
    return (
      (ti = function (n) {
        var r = e(null);
        return (
          t.call(arguments, function (o) {
            r[o] = !0;
          }),
          r
        );
      }),
      ti
    );
  }
  var lu, cu;
  function Cd() {
    return (
      cu ||
        ((cu = 1),
        (lu = function (t) {
          return typeof t == "function";
        })),
      lu
    );
  }
  var ei, uu;
  function x0() {
    if (uu) return ei;
    uu = 1;
    var t = Cd();
    return (
      (ei = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          throw new TypeError("Passed argument cannot be stringifed");
        }
      }),
      ei
    );
  }
  var ni, fu;
  function k0() {
    if (fu) return ni;
    fu = 1;
    var t = Qn,
      e = x0();
    return (
      (ni = function (n) {
        return e(t(n));
      }),
      ni
    );
  }
  var ri, hu;
  function S0() {
    if (hu) return ri;
    hu = 1;
    var t = Cd();
    return (
      (ri = function (e) {
        try {
          return e && t(e.toString) ? e.toString() : String(e);
        } catch {
          return "<Non-coercible to string value>";
        }
      }),
      ri
    );
  }
  var oi, du;
  function A0() {
    if (du) return oi;
    du = 1;
    var t = S0(),
      e = /[\n\r\u2028\u2029]/g;
    return (
      (oi = function (n) {
        var r = t(n);
        return (
          r.length > 100 && (r = r.slice(0, 99) + "…"),
          (r = r.replace(e, function (o) {
            return JSON.stringify(o).slice(1, -1);
          })),
          r
        );
      }),
      oi
    );
  }
  var eo = { exports: {} },
    pu;
  function Rd() {
    if (pu) return eo.exports;
    (pu = 1), (eo.exports = t), (eo.exports.default = t);
    function t(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
    }
    return eo.exports;
  }
  var gu;
  function E0() {
    if (gu) return iu;
    gu = 1;
    var t = Od(),
      e = w0(),
      n = k0(),
      r = A0(),
      o = Rd(),
      s = ya(),
      i = Object.create,
      a = e("then", "then:finally", "done", "done:finally");
    return (
      (Tn.promise = function (l, c) {
        var u = i(null),
          d = i(null),
          f = i(null);
        if (l === !0) l = null;
        else if (((l = n(l)), !a[l])) throw new TypeError("'" + r(l) + "' is not valid promise mode");
        c.on("set", function (h, g, m) {
          var y = !1;
          if (!o(m)) {
            (d[h] = m), c.emit("setasync", h, 1);
            return;
          }
          (u[h] = 1), (f[h] = m);
          var w = function (E) {
              var z = u[h];
              if (y)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              z && (delete u[h], (d[h] = E), c.emit("setasync", h, z));
            },
            _ = function () {
              (y = !0), u[h] && (delete u[h], delete f[h], c.delete(h));
            },
            x = l;
          if ((x || (x = "then"), x === "then")) {
            var k = function () {
              s(_);
            };
            (m = m.then(function (E) {
              s(w.bind(this, E));
            }, k)),
              typeof m.finally == "function" && m.finally(k);
          } else if (x === "done") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
            m.done(w, _);
          } else if (x === "done:finally") {
            if (typeof m.done != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
            if (typeof m.finally != "function")
              throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
            m.done(w), m.finally(_);
          }
        }),
          c.on("get", function (h, g, m) {
            var y;
            if (u[h]) {
              ++u[h];
              return;
            }
            y = f[h];
            var w = function () {
              c.emit("getasync", h, g, m);
            };
            o(y)
              ? typeof y.done == "function"
                ? y.done(w)
                : y.then(function () {
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
              var g = d[h];
              delete d[h], c.emit("deleteasync", h, [g]);
            }
          }),
          c.on("clear", function () {
            var h = d;
            (d = i(null)),
              (u = i(null)),
              (f = i(null)),
              c.emit(
                "clearasync",
                t(h, function (g) {
                  return [g];
                }),
              );
          });
      }),
      iu
    );
  }
  var mu = {},
    vu;
  function T0() {
    if (vu) return mu;
    vu = 1;
    var t = an,
      e = ns,
      n = Tn,
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
      mu
    );
  }
  var yu = {},
    bu,
    _u;
  function O0() {
    return _u || ((_u = 1), (bu = 2147483647)), bu;
  }
  var si, wu;
  function C0() {
    if (wu) return si;
    wu = 1;
    var t = En,
      e = O0();
    return (
      (si = function (n) {
        if (((n = t(n)), n > e)) throw new TypeError(n + " exceeds maximum possible timeout");
        return n;
      }),
      si
    );
  }
  var xu;
  function R0() {
    if (xu) return yu;
    xu = 1;
    var t = ma(),
      e = ns,
      n = ya(),
      r = Rd(),
      o = C0(),
      s = Tn,
      i = Function.prototype,
      a = Math.max,
      l = Math.min,
      c = Object.create;
    return (
      (s.maxAge = function (u, d, f) {
        var h, g, m, y;
        (u = o(u)),
          u &&
            ((h = c(null)),
            (g = (f.async && s.async) || (f.promise && s.promise) ? "async" : ""),
            d.on("set" + g, function (w) {
              (h[w] = setTimeout(function () {
                d.delete(w);
              }, u)),
                typeof h[w].unref == "function" && h[w].unref(),
                y &&
                  (y[w] && y[w] !== "nextTick" && clearTimeout(y[w]),
                  (y[w] = setTimeout(function () {
                    delete y[w];
                  }, m)),
                  typeof y[w].unref == "function" && y[w].unref());
            }),
            d.on("delete" + g, function (w) {
              clearTimeout(h[w]), delete h[w], y && (y[w] !== "nextTick" && clearTimeout(y[w]), delete y[w]);
            }),
            f.preFetch &&
              (f.preFetch === !0 || isNaN(f.preFetch) ? (m = 0.333) : (m = a(l(Number(f.preFetch), 1), 0)),
              m &&
                ((y = {}),
                (m = (1 - m) * u),
                d.on("get" + g, function (w, _, x) {
                  y[w] ||
                    ((y[w] = "nextTick"),
                    n(function () {
                      var k;
                      y[w] === "nextTick" &&
                        (delete y[w],
                        d.delete(w),
                        f.async && ((_ = t(_)), _.push(i)),
                        (k = d.memoized.apply(x, _)),
                        f.promise && r(k) && (typeof k.done == "function" ? k.done(i, i) : k.then(i, i)));
                    }));
                }))),
            d.on("clear" + g, function () {
              e(h, function (w) {
                clearTimeout(w);
              }),
                (h = {}),
                y &&
                  (e(y, function (w) {
                    w !== "nextTick" && clearTimeout(w);
                  }),
                  (y = {}));
            }));
      }),
      yu
    );
  }
  var ku = {},
    ii,
    Su;
  function j0() {
    if (Su) return ii;
    Su = 1;
    var t = En,
      e = Object.create,
      n = Object.prototype.hasOwnProperty;
    return (
      (ii = function (r) {
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
      ii
    );
  }
  var Au;
  function $0() {
    if (Au) return ku;
    Au = 1;
    var t = En,
      e = j0(),
      n = Tn;
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
      ku
    );
  }
  var Eu = {},
    Tu;
  function P0() {
    if (Tu) return Eu;
    Tu = 1;
    var t = On,
      e = Tn,
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
      Eu
    );
  }
  var I0 = pd,
    M0 = gd,
    L0 = f0,
    N0 = function (t) {
      var e = I0(arguments[1]),
        n;
      return (
        e.normalizer ||
          ((n = e.length = M0(e.length, t.length, e.async)),
          n !== 0 &&
            (e.primitive
              ? n === !1
                ? (e.normalizer = h0())
                : n > 1 && (e.normalizer = d0()(n))
              : n === !1
                ? (e.normalizer = v0()())
                : n === 1
                  ? (e.normalizer = y0()())
                  : (e.normalizer = b0()(n)))),
        e.async && _0(),
        e.promise && E0(),
        e.dispose && T0(),
        e.maxAge && R0(),
        e.max && $0(),
        e.refCounter && P0(),
        L0(t, e)
      );
    };
  const os = Ly(N0),
    z0 = (t) => {
      if (!t) return [];
      const { border: e, background: n, borderActive: r, backgroundActive: o } = t;
      return [
        `--annotation-bg-color: ${n}`,
        `--annotation-border-color: ${e}`,
        `--annotation-bg-color--active: ${o}`,
        `--annotation-border-color--active: ${r}`,
      ];
    },
    D0 = os(z0),
    F0 = { key: 0, class: "annotation-slot annotation-slot--before" },
    B0 = { key: 1 },
    U0 = { key: 2, class: "text" },
    V0 = { key: 3, class: "annotation-slot annotation-slot--after" },
    jd = Lt({
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
          i = (f, h, g) => {
            c(f, { startOffset: h, annotation: r.value, action: g });
          },
          a = (f, h, g) => {
            u(f, { startOffset: h, annotation: r.value, action: g });
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
          var g, m, y, w;
          return (
            P(),
            L(
              lt,
              null,
              [
                f.start === ((g = r.value) == null ? void 0 : g.start)
                  ? (P(), L("span", F0, [De(f.$slots, "annotation-before", { annotation: r.value })]))
                  : Pt("", !0),
                f.annotations.length
                  ? (P(),
                    L(
                      "span",
                      {
                        key: 1,
                        class: Nt(n.annotationClassHandler(r.value, f.start, f.end, n.allowCreate)),
                        style: rn(F(D0)(r.value.color)),
                        onMousedown: h[2] || (h[2] = Jr((_) => i(_, f.wordPartStart, "move"), ["stop"])),
                        onMousemove: h[3] || (h[3] = Jr((_) => l(_, f.wordPartStart), ["stop"])),
                        onDblclick: h[4] || (h[4] = (_) => a(_, f.wordPartStart)),
                      },
                      [
                        o.value && f.start === ((m = r.value) == null ? void 0 : m.start)
                          ? (P(),
                            L(
                              "span",
                              {
                                key: 0,
                                class: "handle handle--start",
                                onMousedown: h[0] || (h[0] = Jr((_) => i(_, f.wordPartStart, "moveStart"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                        st(
                          jd,
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
                        f.annotations[0].label ? (P(), L("label", B0, bt(f.annotations[0].label), 1)) : Pt("", !0),
                        o.value && f.end === ((y = f.annotations[0]) == null ? void 0 : y.end)
                          ? (P(),
                            L(
                              "span",
                              {
                                key: 2,
                                class: "handle handle--end",
                                onMousedown: h[1] || (h[1] = Jr((_) => i(_, f.wordPartStart, "moveEnd"), ["stop"])),
                              },
                              null,
                              32,
                            ))
                          : Pt("", !0),
                      ],
                      38,
                    ))
                  : (P(), L("span", U0, bt(f.text), 1)),
                f.end === ((w = r.value) == null ? void 0 : w.end)
                  ? (P(), L("span", V0, [De(f.$slots, "annotation-after", { annotation: r.value })]))
                  : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    H0 = Lt({
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
              class: Nt({ text: !0, "create-anno-text": s.allowCreate }),
              onDblclick: i[0] || (i[0] = (a) => o(a, s.wordPart)),
              onMousedown: i[1] || (i[1] = (a) => r(a, s.wordPart)),
            },
            bt(s.wordPart.text),
            35,
          )
        );
      },
    }),
    q0 = ["onMousemove"],
    K0 = { class: "text" },
    W0 = ["onMousedown", "onMousemove", "onDblclick"],
    G0 = { key: 0 },
    Z0 = Lt({
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
          return h.sort((g, m) => m.weight - g.weight);
        }
        const i = e,
          a = (h, g, m, y) => {
            u(h, { startOffset: g == null ? void 0 : g.start, annotation: m, action: y });
          },
          l = (h, g, m, y) => {
            d(h, { startOffset: g == null ? void 0 : g.start, annotation: m, action: y });
          },
          c = (h, g, m) => {
            f(h, { startOffset: g == null ? void 0 : g.start, annotation: m });
          },
          u = (h, g) => {
            i("annotation-click", h, g);
          },
          d = (h, g) => {
            i("annotation-double-click", h, g);
          },
          f = (h, g) => {
            i("annotation-mouse-move", h, g);
          };
        return (h, g) => (
          P(!0),
          L(
            lt,
            null,
            Ut(
              h.line.words,
              (m) => (
                P(),
                L("span", { key: m.text, class: "token" }, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(
                      m.parts,
                      (y) => (
                        P(),
                        L(
                          "span",
                          {
                            key: y.text,
                            class: Nt(["token-segment", `token-segment--m${y.maxAnnotationWeight}`]),
                            onMousemove: (w) => c(w, y),
                          },
                          [
                            o.value
                              ? (P(),
                                L(
                                  lt,
                                  { key: 0 },
                                  [
                                    R("span", K0, bt(y.text), 1),
                                    (P(!0),
                                    L(
                                      lt,
                                      null,
                                      Ut(
                                        y.annotations,
                                        (w) => (
                                          P(),
                                          L(
                                            "span",
                                            {
                                              key: w.id,
                                              class: Nt(h.annotationClasses(w, y.start, y.end, n.allowCreate)),
                                              style: rn(n.annotationStyle(w.color)),
                                              onMousedown: (_) => a(_, y, w, "move"),
                                              onMousemove: (_) => c(_, y, w),
                                              onDblclick: (_) => l(_, y, w),
                                            },
                                            [w.label ? (P(), L("label", G0, bt(w.label), 1)) : Pt("", !0)],
                                            46,
                                            W0,
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
                                    y.annotations.length
                                      ? (P(),
                                        Hn(
                                          jd,
                                          {
                                            key: 0,
                                            text: y.text,
                                            start: y.start,
                                            end: y.end,
                                            "allow-edit": h.allowEdit,
                                            "allow-create": h.allowCreate,
                                            "word-part-start": y.start,
                                            annotations: s(y.annotations),
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
                                      : (P(),
                                        Hn(
                                          H0,
                                          {
                                            key: 1,
                                            "word-part": y,
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
                          q0,
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
  var J0 = typeof global == "object" && global && global.Object === Object && global;
  const $d = J0;
  var Q0 = typeof self == "object" && self && self.Object === Object && self,
    Y0 = $d || Q0 || Function("return this")();
  const Re = Y0;
  var X0 = Re.Symbol;
  const de = X0;
  var Pd = Object.prototype,
    t_ = Pd.hasOwnProperty,
    e_ = Pd.toString,
    ar = de ? de.toStringTag : void 0;
  function n_(t) {
    var e = t_.call(t, ar),
      n = t[ar];
    try {
      t[ar] = void 0;
      var r = !0;
    } catch {}
    var o = e_.call(t);
    return r && (e ? (t[ar] = n) : delete t[ar]), o;
  }
  var r_ = Object.prototype,
    o_ = r_.toString;
  function s_(t) {
    return o_.call(t);
  }
  var i_ = "[object Null]",
    a_ = "[object Undefined]",
    Ou = de ? de.toStringTag : void 0;
  function Yn(t) {
    return t == null ? (t === void 0 ? a_ : i_) : Ou && Ou in Object(t) ? n_(t) : s_(t);
  }
  function en(t) {
    return t != null && typeof t == "object";
  }
  var l_ = "[object Symbol]";
  function ss(t) {
    return typeof t == "symbol" || (en(t) && Yn(t) == l_);
  }
  function c_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var u_ = Array.isArray;
  const ve = u_;
  var f_ = 1 / 0,
    Cu = de ? de.prototype : void 0,
    Ru = Cu ? Cu.toString : void 0;
  function Id(t) {
    if (typeof t == "string") return t;
    if (ve(t)) return c_(t, Id) + "";
    if (ss(t)) return Ru ? Ru.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -f_ ? "-0" : e;
  }
  function _n(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function Md(t) {
    return t;
  }
  var h_ = "[object AsyncFunction]",
    d_ = "[object Function]",
    p_ = "[object GeneratorFunction]",
    g_ = "[object Proxy]";
  function Ld(t) {
    if (!_n(t)) return !1;
    var e = Yn(t);
    return e == d_ || e == p_ || e == h_ || e == g_;
  }
  var m_ = Re["__core-js_shared__"];
  const ai = m_;
  var ju = (function () {
    var t = /[^.]+$/.exec((ai && ai.keys && ai.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function v_(t) {
    return !!ju && ju in t;
  }
  var y_ = Function.prototype,
    b_ = y_.toString;
  function Cn(t) {
    if (t != null) {
      try {
        return b_.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var __ = /[\\^$.*+?()[\]{}|]/g,
    w_ = /^\[object .+?Constructor\]$/,
    x_ = Function.prototype,
    k_ = Object.prototype,
    S_ = x_.toString,
    A_ = k_.hasOwnProperty,
    E_ = RegExp(
      "^" +
        S_.call(A_)
          .replace(__, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function T_(t) {
    if (!_n(t) || v_(t)) return !1;
    var e = Ld(t) ? E_ : w_;
    return e.test(Cn(t));
  }
  function O_(t, e) {
    return t == null ? void 0 : t[e];
  }
  function Rn(t, e) {
    var n = O_(t, e);
    return T_(n) ? n : void 0;
  }
  var C_ = Rn(Re, "WeakMap");
  const $i = C_;
  var $u = Object.create,
    R_ = (function () {
      function t() {}
      return function (e) {
        if (!_n(e)) return {};
        if ($u) return $u(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  const j_ = R_;
  function $_(t, e, n) {
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
  var P_ = 800,
    I_ = 16,
    M_ = Date.now;
  function L_(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = M_(),
        o = I_ - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= P_) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function N_(t) {
    return function () {
      return t;
    };
  }
  var z_ = (function () {
    try {
      var t = Rn(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {}
  })();
  const ko = z_;
  var D_ = ko
    ? function (t, e) {
        return ko(t, "toString", { configurable: !0, enumerable: !1, value: N_(e), writable: !0 });
      }
    : Md;
  const F_ = D_;
  var B_ = L_(F_);
  const U_ = B_;
  function V_(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var H_ = 9007199254740991,
    q_ = /^(?:0|[1-9]\d*)$/;
  function ba(t, e) {
    var n = typeof t;
    return (e = e ?? H_), !!e && (n == "number" || (n != "symbol" && q_.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function K_(t, e, n) {
    e == "__proto__" && ko ? ko(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function _a(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var W_ = Object.prototype,
    G_ = W_.hasOwnProperty;
  function Nd(t, e, n) {
    var r = t[e];
    (!(G_.call(t, e) && _a(r, n)) || (n === void 0 && !(e in t))) && K_(t, e, n);
  }
  var Pu = Math.max;
  function Z_(t, e, n) {
    return (
      (e = Pu(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = Pu(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), $_(t, this, a);
      }
    );
  }
  var J_ = 9007199254740991;
  function wa(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= J_;
  }
  function Q_(t) {
    return t != null && wa(t.length) && !Ld(t);
  }
  var Y_ = Object.prototype;
  function zd(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || Y_;
    return t === n;
  }
  function X_(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var t1 = "[object Arguments]";
  function Iu(t) {
    return en(t) && Yn(t) == t1;
  }
  var Dd = Object.prototype,
    e1 = Dd.hasOwnProperty,
    n1 = Dd.propertyIsEnumerable,
    r1 = Iu(
      (function () {
        return arguments;
      })(),
    )
      ? Iu
      : function (t) {
          return en(t) && e1.call(t, "callee") && !n1.call(t, "callee");
        };
  const xa = r1;
  function o1() {
    return !1;
  }
  var Fd = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Mu = Fd && typeof jt == "object" && jt && !jt.nodeType && jt,
    s1 = Mu && Mu.exports === Fd,
    Lu = s1 ? Re.Buffer : void 0,
    i1 = Lu ? Lu.isBuffer : void 0,
    a1 = i1 || o1;
  const So = a1;
  var l1 = "[object Arguments]",
    c1 = "[object Array]",
    u1 = "[object Boolean]",
    f1 = "[object Date]",
    h1 = "[object Error]",
    d1 = "[object Function]",
    p1 = "[object Map]",
    g1 = "[object Number]",
    m1 = "[object Object]",
    v1 = "[object RegExp]",
    y1 = "[object Set]",
    b1 = "[object String]",
    _1 = "[object WeakMap]",
    w1 = "[object ArrayBuffer]",
    x1 = "[object DataView]",
    k1 = "[object Float32Array]",
    S1 = "[object Float64Array]",
    A1 = "[object Int8Array]",
    E1 = "[object Int16Array]",
    T1 = "[object Int32Array]",
    O1 = "[object Uint8Array]",
    C1 = "[object Uint8ClampedArray]",
    R1 = "[object Uint16Array]",
    j1 = "[object Uint32Array]",
    Ot = {};
  Ot[k1] = Ot[S1] = Ot[A1] = Ot[E1] = Ot[T1] = Ot[O1] = Ot[C1] = Ot[R1] = Ot[j1] = !0;
  Ot[l1] =
    Ot[c1] =
    Ot[w1] =
    Ot[u1] =
    Ot[x1] =
    Ot[f1] =
    Ot[h1] =
    Ot[d1] =
    Ot[p1] =
    Ot[g1] =
    Ot[m1] =
    Ot[v1] =
    Ot[y1] =
    Ot[b1] =
    Ot[_1] =
      !1;
  function $1(t) {
    return en(t) && wa(t.length) && !!Ot[Yn(t)];
  }
  function ka(t) {
    return function (e) {
      return t(e);
    };
  }
  var Bd = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    xr = Bd && typeof jt == "object" && jt && !jt.nodeType && jt,
    P1 = xr && xr.exports === Bd,
    li = P1 && $d.process,
    I1 = (function () {
      try {
        var t = xr && xr.require && xr.require("util").types;
        return t || (li && li.binding && li.binding("util"));
      } catch {}
    })();
  const Gn = I1;
  var Nu = Gn && Gn.isTypedArray,
    M1 = Nu ? ka(Nu) : $1;
  const Ud = M1;
  var L1 = Object.prototype,
    N1 = L1.hasOwnProperty;
  function z1(t, e) {
    var n = ve(t),
      r = !n && xa(t),
      o = !n && !r && So(t),
      s = !n && !r && !o && Ud(t),
      i = n || r || o || s,
      a = i ? X_(t.length, String) : [],
      l = a.length;
    for (var c in t)
      N1.call(t, c) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            ba(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function Vd(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var D1 = Vd(Object.keys, Object);
  const F1 = D1;
  var B1 = Object.prototype,
    U1 = B1.hasOwnProperty;
  function V1(t) {
    if (!zd(t)) return F1(t);
    var e = [];
    for (var n in Object(t)) U1.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function Hd(t) {
    return Q_(t) ? z1(t) : V1(t);
  }
  var H1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    q1 = /^\w*$/;
  function Sa(t, e) {
    if (ve(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || ss(t)
      ? !0
      : q1.test(t) || !H1.test(t) || (e != null && t in Object(e));
  }
  var K1 = Rn(Object, "create");
  const Pr = K1;
  function W1() {
    (this.__data__ = Pr ? Pr(null) : {}), (this.size = 0);
  }
  function G1(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var Z1 = "__lodash_hash_undefined__",
    J1 = Object.prototype,
    Q1 = J1.hasOwnProperty;
  function Y1(t) {
    var e = this.__data__;
    if (Pr) {
      var n = e[t];
      return n === Z1 ? void 0 : n;
    }
    return Q1.call(e, t) ? e[t] : void 0;
  }
  var X1 = Object.prototype,
    tw = X1.hasOwnProperty;
  function ew(t) {
    var e = this.__data__;
    return Pr ? e[t] !== void 0 : tw.call(e, t);
  }
  var nw = "__lodash_hash_undefined__";
  function rw(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Pr && e === void 0 ? nw : e), this;
  }
  function wn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  wn.prototype.clear = W1;
  wn.prototype.delete = G1;
  wn.prototype.get = Y1;
  wn.prototype.has = ew;
  wn.prototype.set = rw;
  function ow() {
    (this.__data__ = []), (this.size = 0);
  }
  function is(t, e) {
    for (var n = t.length; n--; ) if (_a(t[n][0], e)) return n;
    return -1;
  }
  var sw = Array.prototype,
    iw = sw.splice;
  function aw(t) {
    var e = this.__data__,
      n = is(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : iw.call(e, n, 1), --this.size, !0;
  }
  function lw(t) {
    var e = this.__data__,
      n = is(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function cw(t) {
    return is(this.__data__, t) > -1;
  }
  function uw(t, e) {
    var n = this.__data__,
      r = is(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function Ve(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Ve.prototype.clear = ow;
  Ve.prototype.delete = aw;
  Ve.prototype.get = lw;
  Ve.prototype.has = cw;
  Ve.prototype.set = uw;
  var fw = Rn(Re, "Map");
  const Ir = fw;
  function hw() {
    (this.size = 0), (this.__data__ = { hash: new wn(), map: new (Ir || Ve)(), string: new wn() });
  }
  function dw(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function as(t, e) {
    var n = t.__data__;
    return dw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function pw(t) {
    var e = as(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function gw(t) {
    return as(this, t).get(t);
  }
  function mw(t) {
    return as(this, t).has(t);
  }
  function vw(t, e) {
    var n = as(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function He(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  He.prototype.clear = hw;
  He.prototype.delete = pw;
  He.prototype.get = gw;
  He.prototype.has = mw;
  He.prototype.set = vw;
  var yw = "Expected a function";
  function Aa(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(yw);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (Aa.Cache || He)()), n;
  }
  Aa.Cache = He;
  var bw = 500;
  function _w(t) {
    var e = Aa(t, function (r) {
        return n.size === bw && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var ww = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    xw = /\\(\\)?/g,
    kw = _w(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(ww, function (n, r, o, s) {
          e.push(o ? s.replace(xw, "$1") : r || n);
        }),
        e
      );
    });
  const Sw = kw;
  function Aw(t) {
    return t == null ? "" : Id(t);
  }
  function ls(t, e) {
    return ve(t) ? t : Sa(t, e) ? [t] : Sw(Aw(t));
  }
  var Ew = 1 / 0;
  function Br(t) {
    if (typeof t == "string" || ss(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -Ew ? "-0" : e;
  }
  function Ea(t, e) {
    e = ls(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Br(e[n++])];
    return n && n == r ? t : void 0;
  }
  function Tw(t, e, n) {
    var r = t == null ? void 0 : Ea(t, e);
    return r === void 0 ? n : r;
  }
  function qd(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var zu = de ? de.isConcatSpreadable : void 0;
  function Ow(t) {
    return ve(t) || xa(t) || !!(zu && t && t[zu]);
  }
  function Cw(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = Ow), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? qd(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function Rw(t) {
    var e = t == null ? 0 : t.length;
    return e ? Cw(t) : [];
  }
  function jw(t) {
    return U_(Z_(t, void 0, Rw), t + "");
  }
  var $w = Vd(Object.getPrototypeOf, Object);
  const Pw = $w;
  function Iw() {
    (this.__data__ = new Ve()), (this.size = 0);
  }
  function Mw(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function Lw(t) {
    return this.__data__.get(t);
  }
  function Nw(t) {
    return this.__data__.has(t);
  }
  var zw = 200;
  function Dw(t, e) {
    var n = this.__data__;
    if (n instanceof Ve) {
      var r = n.__data__;
      if (!Ir || r.length < zw - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new He(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function Ae(t) {
    var e = (this.__data__ = new Ve(t));
    this.size = e.size;
  }
  Ae.prototype.clear = Iw;
  Ae.prototype.delete = Mw;
  Ae.prototype.get = Lw;
  Ae.prototype.has = Nw;
  Ae.prototype.set = Dw;
  var Kd = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    Du = Kd && typeof jt == "object" && jt && !jt.nodeType && jt,
    Fw = Du && Du.exports === Kd,
    Fu = Fw ? Re.Buffer : void 0;
  Fu && Fu.allocUnsafe;
  function Bw(t, e) {
    return t.slice();
  }
  function Uw(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function Vw() {
    return [];
  }
  var Hw = Object.prototype,
    qw = Hw.propertyIsEnumerable,
    Bu = Object.getOwnPropertySymbols,
    Kw = Bu
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              Uw(Bu(t), function (e) {
                return qw.call(t, e);
              }));
        }
      : Vw;
  const Ww = Kw;
  function Gw(t, e, n) {
    var r = e(t);
    return ve(t) ? r : qd(r, n(t));
  }
  function Pi(t) {
    return Gw(t, Hd, Ww);
  }
  var Zw = Rn(Re, "DataView");
  const Ii = Zw;
  var Jw = Rn(Re, "Promise");
  const Mi = Jw;
  var Qw = Rn(Re, "Set");
  const Li = Qw;
  var Uu = "[object Map]",
    Yw = "[object Object]",
    Vu = "[object Promise]",
    Hu = "[object Set]",
    qu = "[object WeakMap]",
    Ku = "[object DataView]",
    Xw = Cn(Ii),
    tx = Cn(Ir),
    ex = Cn(Mi),
    nx = Cn(Li),
    rx = Cn($i),
    pn = Yn;
  ((Ii && pn(new Ii(new ArrayBuffer(1))) != Ku) ||
    (Ir && pn(new Ir()) != Uu) ||
    (Mi && pn(Mi.resolve()) != Vu) ||
    (Li && pn(new Li()) != Hu) ||
    ($i && pn(new $i()) != qu)) &&
    (pn = function (t) {
      var e = Yn(t),
        n = e == Yw ? t.constructor : void 0,
        r = n ? Cn(n) : "";
      if (r)
        switch (r) {
          case Xw:
            return Ku;
          case tx:
            return Uu;
          case ex:
            return Vu;
          case nx:
            return Hu;
          case rx:
            return qu;
        }
      return e;
    });
  const Mr = pn;
  var ox = Object.prototype,
    sx = ox.hasOwnProperty;
  function ix(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && sx.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var ax = Re.Uint8Array;
  const Ao = ax;
  function Ta(t) {
    var e = new t.constructor(t.byteLength);
    return new Ao(e).set(new Ao(t)), e;
  }
  function lx(t, e) {
    var n = Ta(t.buffer);
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var cx = /\w*$/;
  function ux(t) {
    var e = new t.constructor(t.source, cx.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Wu = de ? de.prototype : void 0,
    Gu = Wu ? Wu.valueOf : void 0;
  function fx(t) {
    return Gu ? Object(Gu.call(t)) : {};
  }
  function hx(t, e) {
    var n = Ta(t.buffer);
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var dx = "[object Boolean]",
    px = "[object Date]",
    gx = "[object Map]",
    mx = "[object Number]",
    vx = "[object RegExp]",
    yx = "[object Set]",
    bx = "[object String]",
    _x = "[object Symbol]",
    wx = "[object ArrayBuffer]",
    xx = "[object DataView]",
    kx = "[object Float32Array]",
    Sx = "[object Float64Array]",
    Ax = "[object Int8Array]",
    Ex = "[object Int16Array]",
    Tx = "[object Int32Array]",
    Ox = "[object Uint8Array]",
    Cx = "[object Uint8ClampedArray]",
    Rx = "[object Uint16Array]",
    jx = "[object Uint32Array]";
  function $x(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case wx:
        return Ta(t);
      case dx:
      case px:
        return new r(+t);
      case xx:
        return lx(t);
      case kx:
      case Sx:
      case Ax:
      case Ex:
      case Tx:
      case Ox:
      case Cx:
      case Rx:
      case jx:
        return hx(t);
      case gx:
        return new r();
      case mx:
      case bx:
        return new r(t);
      case vx:
        return ux(t);
      case yx:
        return new r();
      case _x:
        return fx(t);
    }
  }
  function Px(t) {
    return typeof t.constructor == "function" && !zd(t) ? j_(Pw(t)) : {};
  }
  var Ix = "[object Map]";
  function Mx(t) {
    return en(t) && Mr(t) == Ix;
  }
  var Zu = Gn && Gn.isMap,
    Lx = Zu ? ka(Zu) : Mx;
  const Nx = Lx;
  var zx = "[object Set]";
  function Dx(t) {
    return en(t) && Mr(t) == zx;
  }
  var Ju = Gn && Gn.isSet,
    Fx = Ju ? ka(Ju) : Dx;
  const Bx = Fx;
  var Ux = 1,
    Wd = "[object Arguments]",
    Vx = "[object Array]",
    Hx = "[object Boolean]",
    qx = "[object Date]",
    Kx = "[object Error]",
    Gd = "[object Function]",
    Wx = "[object GeneratorFunction]",
    Gx = "[object Map]",
    Zx = "[object Number]",
    Zd = "[object Object]",
    Jx = "[object RegExp]",
    Qx = "[object Set]",
    Yx = "[object String]",
    Xx = "[object Symbol]",
    tk = "[object WeakMap]",
    ek = "[object ArrayBuffer]",
    nk = "[object DataView]",
    rk = "[object Float32Array]",
    ok = "[object Float64Array]",
    sk = "[object Int8Array]",
    ik = "[object Int16Array]",
    ak = "[object Int32Array]",
    lk = "[object Uint8Array]",
    ck = "[object Uint8ClampedArray]",
    uk = "[object Uint16Array]",
    fk = "[object Uint32Array]",
    At = {};
  At[Wd] =
    At[Vx] =
    At[ek] =
    At[nk] =
    At[Hx] =
    At[qx] =
    At[rk] =
    At[ok] =
    At[sk] =
    At[ik] =
    At[ak] =
    At[Gx] =
    At[Zx] =
    At[Zd] =
    At[Jx] =
    At[Qx] =
    At[Yx] =
    At[Xx] =
    At[lk] =
    At[ck] =
    At[uk] =
    At[fk] =
      !0;
  At[Kx] = At[Gd] = At[tk] = !1;
  function fo(t, e, n, r, o, s) {
    var i,
      a = e & Ux;
    if (i !== void 0) return i;
    if (!_n(t)) return t;
    var l = ve(t);
    if (l) i = ix(t);
    else {
      var c = Mr(t),
        u = c == Gd || c == Wx;
      if (So(t)) return Bw(t);
      if (c == Zd || c == Wd || (u && !o)) i = u ? {} : Px(t);
      else {
        if (!At[c]) return o ? t : {};
        i = $x(t, c);
      }
    }
    s || (s = new Ae());
    var d = s.get(t);
    if (d) return d;
    s.set(t, i),
      Bx(t)
        ? t.forEach(function (g) {
            i.add(fo(g, e, n, g, t, s));
          })
        : Nx(t) &&
          t.forEach(function (g, m) {
            i.set(m, fo(g, e, n, m, t, s));
          });
    var f = Pi,
      h = l ? void 0 : f(t);
    return (
      V_(h || t, function (g, m) {
        h && ((m = g), (g = t[m])), Nd(i, m, fo(g, e, n, m, t, s));
      }),
      i
    );
  }
  var hk = 1,
    dk = 4;
  function Ni(t) {
    return fo(t, hk | dk);
  }
  var pk = "__lodash_hash_undefined__";
  function gk(t) {
    return this.__data__.set(t, pk), this;
  }
  function mk(t) {
    return this.__data__.has(t);
  }
  function Eo(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.__data__ = new He(); ++e < n; ) this.add(t[e]);
  }
  Eo.prototype.add = Eo.prototype.push = gk;
  Eo.prototype.has = mk;
  function vk(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1;
  }
  function yk(t, e) {
    return t.has(e);
  }
  var bk = 1,
    _k = 2;
  function Jd(t, e, n, r, o, s) {
    var i = n & bk,
      a = t.length,
      l = e.length;
    if (a != l && !(i && l > a)) return !1;
    var c = s.get(t),
      u = s.get(e);
    if (c && u) return c == e && u == t;
    var d = -1,
      f = !0,
      h = n & _k ? new Eo() : void 0;
    for (s.set(t, e), s.set(e, t); ++d < a; ) {
      var g = t[d],
        m = e[d];
      if (r) var y = i ? r(m, g, d, e, t, s) : r(g, m, d, t, e, s);
      if (y !== void 0) {
        if (y) continue;
        f = !1;
        break;
      }
      if (h) {
        if (
          !vk(e, function (w, _) {
            if (!yk(h, _) && (g === w || o(g, w, n, r, s))) return h.push(_);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(g === m || o(g, m, n, r, s))) {
        f = !1;
        break;
      }
    }
    return s.delete(t), s.delete(e), f;
  }
  function wk(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r, o) {
        n[++e] = [o, r];
      }),
      n
    );
  }
  function xk(t) {
    var e = -1,
      n = Array(t.size);
    return (
      t.forEach(function (r) {
        n[++e] = r;
      }),
      n
    );
  }
  var kk = 1,
    Sk = 2,
    Ak = "[object Boolean]",
    Ek = "[object Date]",
    Tk = "[object Error]",
    Ok = "[object Map]",
    Ck = "[object Number]",
    Rk = "[object RegExp]",
    jk = "[object Set]",
    $k = "[object String]",
    Pk = "[object Symbol]",
    Ik = "[object ArrayBuffer]",
    Mk = "[object DataView]",
    Qu = de ? de.prototype : void 0,
    ci = Qu ? Qu.valueOf : void 0;
  function Lk(t, e, n, r, o, s, i) {
    switch (n) {
      case Mk:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case Ik:
        return !(t.byteLength != e.byteLength || !s(new Ao(t), new Ao(e)));
      case Ak:
      case Ek:
      case Ck:
        return _a(+t, +e);
      case Tk:
        return t.name == e.name && t.message == e.message;
      case Rk:
      case $k:
        return t == e + "";
      case Ok:
        var a = wk;
      case jk:
        var l = r & kk;
        if ((a || (a = xk), t.size != e.size && !l)) return !1;
        var c = i.get(t);
        if (c) return c == e;
        (r |= Sk), i.set(t, e);
        var u = Jd(a(t), a(e), r, o, s, i);
        return i.delete(t), u;
      case Pk:
        if (ci) return ci.call(t) == ci.call(e);
    }
    return !1;
  }
  var Nk = 1,
    zk = Object.prototype,
    Dk = zk.hasOwnProperty;
  function Fk(t, e, n, r, o, s) {
    var i = n & Nk,
      a = Pi(t),
      l = a.length,
      c = Pi(e),
      u = c.length;
    if (l != u && !i) return !1;
    for (var d = l; d--; ) {
      var f = a[d];
      if (!(i ? f in e : Dk.call(e, f))) return !1;
    }
    var h = s.get(t),
      g = s.get(e);
    if (h && g) return h == e && g == t;
    var m = !0;
    s.set(t, e), s.set(e, t);
    for (var y = i; ++d < l; ) {
      f = a[d];
      var w = t[f],
        _ = e[f];
      if (r) var x = i ? r(_, w, f, e, t, s) : r(w, _, f, t, e, s);
      if (!(x === void 0 ? w === _ || o(w, _, n, r, s) : x)) {
        m = !1;
        break;
      }
      y || (y = f == "constructor");
    }
    if (m && !y) {
      var k = t.constructor,
        E = e.constructor;
      k != E &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof k == "function" && k instanceof k && typeof E == "function" && E instanceof E) &&
        (m = !1);
    }
    return s.delete(t), s.delete(e), m;
  }
  var Bk = 1,
    Yu = "[object Arguments]",
    Xu = "[object Array]",
    no = "[object Object]",
    Uk = Object.prototype,
    tf = Uk.hasOwnProperty;
  function Vk(t, e, n, r, o, s) {
    var i = ve(t),
      a = ve(e),
      l = i ? Xu : Mr(t),
      c = a ? Xu : Mr(e);
    (l = l == Yu ? no : l), (c = c == Yu ? no : c);
    var u = l == no,
      d = c == no,
      f = l == c;
    if (f && So(t)) {
      if (!So(e)) return !1;
      (i = !0), (u = !1);
    }
    if (f && !u) return s || (s = new Ae()), i || Ud(t) ? Jd(t, e, n, r, o, s) : Lk(t, e, l, n, r, o, s);
    if (!(n & Bk)) {
      var h = u && tf.call(t, "__wrapped__"),
        g = d && tf.call(e, "__wrapped__");
      if (h || g) {
        var m = h ? t.value() : t,
          y = g ? e.value() : e;
        return s || (s = new Ae()), o(m, y, n, r, s);
      }
    }
    return f ? (s || (s = new Ae()), Fk(t, e, n, r, o, s)) : !1;
  }
  function Oa(t, e, n, r, o) {
    return t === e ? !0 : t == null || e == null || (!en(t) && !en(e)) ? t !== t && e !== e : Vk(t, e, n, r, Oa, o);
  }
  var Hk = 1,
    qk = 2;
  function Kk(t, e, n, r) {
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
        if (!(d === void 0 ? Oa(c, l, Hk | qk, r, u) : d)) return !1;
      }
    }
    return !0;
  }
  function Qd(t) {
    return t === t && !_n(t);
  }
  function Wk(t) {
    for (var e = Hd(t), n = e.length; n--; ) {
      var r = e[n],
        o = t[r];
      e[n] = [r, o, Qd(o)];
    }
    return e;
  }
  function Yd(t, e) {
    return function (n) {
      return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
    };
  }
  function Gk(t) {
    var e = Wk(t);
    return e.length == 1 && e[0][2]
      ? Yd(e[0][0], e[0][1])
      : function (n) {
          return n === t || Kk(n, t, e);
        };
  }
  function Zk(t, e) {
    return t != null && e in Object(t);
  }
  function Jk(t, e, n) {
    e = ls(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = Br(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && wa(o) && ba(i, o) && (ve(t) || xa(t)));
  }
  function Xd(t, e) {
    return t != null && Jk(t, e, Zk);
  }
  var Qk = 1,
    Yk = 2;
  function Xk(t, e) {
    return Sa(t) && Qd(e)
      ? Yd(Br(t), e)
      : function (n) {
          var r = Tw(n, t);
          return r === void 0 && r === e ? Xd(n, t) : Oa(e, r, Qk | Yk);
        };
  }
  function tS(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function eS(t) {
    return function (e) {
      return Ea(e, t);
    };
  }
  function nS(t) {
    return Sa(t) ? tS(Br(t)) : eS(t);
  }
  function rS(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? Md
        : typeof t == "object"
          ? ve(t)
            ? Xk(t[0], t[1])
            : Gk(t)
          : nS(t);
  }
  function oS(t, e) {
    return t > e;
  }
  function sS(t, e, n) {
    for (var r = -1, o = t.length; ++r < o; ) {
      var s = t[r],
        i = e(s);
      if (i != null && (a === void 0 ? i === i && !ss(i) : n(i, a)))
        var a = i,
          l = s;
    }
    return l;
  }
  function iS(t, e) {
    return t && t.length ? sS(t, rS(e), oS) : void 0;
  }
  function aS(t, e, n, r) {
    if (!_n(t)) return t;
    e = ls(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = Br(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = _n(u) ? u : ba(e[o + 1]) ? [] : {});
      }
      Nd(a, l, c), (a = a[l]);
    }
    return t;
  }
  function lS(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = Ea(t, i);
      n(a, i) && aS(s, ls(i, t), a);
    }
    return s;
  }
  function cS(t, e) {
    return lS(t, e, function (n, r) {
      return Xd(t, r);
    });
  }
  var uS = jw(function (t, e) {
    return t == null ? {} : cS(t, e);
  });
  const zi = uS,
    fS = ["weight", "class", "color", "startsOnLine", "endsOnLine"],
    hS = ["defaultClass", "weightClass", "endClass", "startClass"],
    dS = (t, e) =>
      [
        e.defaultClass,
        e.weightClass + ((t == null ? void 0 : t.weight) ?? 0),
        (t == null ? void 0 : t.class) ?? null,
        t.startsOnLine ? e.startClass : null,
        t.endsOnLine ? e.endClass : null,
        t != null && t.color ? "annotation--color-custom" : null,
      ].filter((n) => !!n),
    pS = os(dS, { normalizer: (t) => JSON.stringify(t) }),
    gS = (t, e) => pS(zi(t, fS), zi(e, hS)),
    mS = { class: "gutter-annotations" },
    vS = ["onClick", "onDblclick"],
    yS = { key: 0 },
    bS = { key: 0, class: "gutter text" },
    _S = Lt({
      __name: "AnnotatedGutters",
      props: { gutter: { default: null }, annotationStyle: { default: null } },
      emits: ["annotation-click", "annotation-double-click"],
      setup(t, { emit: e }) {
        const n = gS,
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
                R("div", mS, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut((l = i.gutter) == null ? void 0 : l.annotations, (u) => {
                      var d;
                      return (
                        P(),
                        L(
                          "span",
                          {
                            key: u,
                            class: Nt(F(n)(u, i.annotationStyle)),
                            style: rn({ "--gutter-bg-color": (d = u.color) == null ? void 0 : d.background }),
                            onClick: (f) => o(f, u),
                            onDblclick: (f) => s(f, u),
                          },
                          [u.label ? (P(), L("label", yS, bt(u.label), 1)) : Pt("", !0)],
                          46,
                          vS,
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                i.gutter ? (P(), L("div", bS, bt((c = i.gutter) == null ? void 0 : c.text), 1)) : Pt("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    ro = (t, e) => {
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
  function wS(t) {
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
  const tp = class hr {
    constructor() {
      ct(this, "_verboseEnabled"), ct(this, "_debugEnabled");
    }
    static get instance() {
      return hr._instance || (hr._instance = new hr()), hr._instance;
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
  ct(tp, "_instance");
  let vt = tp;
  const xS = 1,
    ef = (t, e) => {
      const n = t[0] < e[0] ? t : e,
        r = n == t ? e : t;
      return n[1] < r[0] ? null : [r[0], n[1] < r[1] ? n[1] : r[1]];
    };
  class kS {
    constructor(e, n, r) {
      ct(this, "props"),
        ct(this, "editState"),
        ct(this, "createState"),
        ct(
          this,
          "allAnnotations",
          rt(() => {
            vt.debug("** refresh annotations");
            const o = Ni(this.props.annotations);
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
            vt.debug("** refresh gutterAnnotations **");
            const o = this.allAnnotations.value.filter((s) => s.target === "gutter");
            return vt.debug(o), o;
          }),
        ),
        ct(this, "prepareRanges", (o) => {
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
              i.end + xS - this.props.annotationOffset,
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
                    d = c < i.length - 1 ? u + l.length + 1 : u + l.length;
                  o.push([u, d + 1, null]), (a += l.length + 1);
                });
              }),
              (o = o.sort((s, i) =>
                Number(s[0]) - Number(i[0]) === 0 ? Number(s[1]) - Number(i[1]) : Number(s[0]) - Number(i[0]),
              )),
              wS(o)
            );
          }),
        ),
        ct(this, "createAnnotatedWord", (o) => {
          let s = this.flattenedRanges.value.filter((l) => ef([l[0], l[1] - 1], [o.start, o.end]));
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
              maxAnnotationWeight: ((c = iS(u, (d) => d.weight)) == null ? void 0 : c.weight) ?? 0,
            };
          });
          return { start: o.start, end: o.end, text: o.text, parts: a };
        }),
        ct(this, "createAnnotatedLine", (o) => {
          let s = [];
          const i = this.flattenedRanges.value.filter((f) => ef([f[0], f[1] - 1], [o.start, o.end]));
          for (const f of i)
            f[2]
              .filter((h) => h)
              .filter((h) => (h == null ? void 0 : h.target) === "gutter")
              .sort((h, g) => (Number(h == null ? void 0 : h.weight) < Number(g == null ? void 0 : g.weight) ? -1 : 1))
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
            const h = Ni(f);
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
        ct(
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
  const SS = (t, e, n, r) =>
      [
        "annotated-text",
        `theme-${t}`,
        `annotated-text--render-${e}`,
        r ? `action--active action--${r}` : null,
        n ? "annotated-text--show-labels" : null,
      ].filter((o) => o),
    AS = os(SS),
    ES = ["weight", "color", "class"],
    TS = (t, e, n, r, o, s, i, a, l) =>
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
    OS = os(TS, { normalizer: (t) => JSON.stringify(t) }),
    CS = (t, e, n, r, o, s, i, a) => {
      const l = e && t === e,
        c = e && t.id === e.id && t !== e,
        u = a.includes(t.id),
        d = i.includes(t.id);
      return OS(zi(t, ES), n, (t == null ? void 0 : t.start) === r, (t == null ? void 0 : t.end) === o, c, l, u, d, s);
    };
  class RS {
    constructor(e, n) {
      ct(this, "props"),
        ct(this, "editAnnotationState"),
        ct(
          this,
          "componentClasses",
          rt(() => {
            const { theme: r, render: o, showLabels: s } = this.props,
              { action: i } = this.editAnnotationState;
            return AS(r, o, s, i);
          }),
        ),
        ct(this, "annotationClasses", (r, o, s, i) => {
          const { style: a, selectedAnnotations: l, hoveredAnnotations: c } = this.props;
          return CS(r, this.editAnnotationState.annotation, a, o, s, i, l, c);
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
  class jS {
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
  class $S {
    constructor() {
      ct(this, "hoveredAnnotations"), ct(this, "mouseEvent"), (this.hoveredAnnotations = []), (this.mouseEvent = null);
    }
  }
  class PS {
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
        (this.userState.state = Dt.IDLE),
        (this.updating = !1);
    }
    startUpdating(e, n, r, o = null, s = null, i, a) {
      (this.action = e),
        (this.handlePosition = n),
        (this.origAnnotation = r),
        (this.annotation = Ni(r)),
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
  class IS {
    constructor() {
      ct(this, "state"), ct(this, "payload"), (this.state = Dt.IDLE), (this.payload = null);
    }
    reset() {
      (this.state = Dt.IDLE), (this.payload = null);
    }
  }
  const MS = () => {
    const t = ut(new IS()),
      e = ut(new PS(t.value)),
      n = ut(new jS(t.value)),
      r = ut(new $S());
    return { updateState: e, createState: n, hoverState: r, userState: t };
  };
  function Me(t) {
    const e = ha();
    if (!e) return !1;
    const n = e.vnode.props;
    return n ? !!(n[pr(t)] || n[pr(ae(t))]) : !1;
  }
  const LS = { class: "content" },
    To = Lt({
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
        n = Jn(n);
        const r = e,
          o = MS(),
          { updateState: s, createState: i, userState: a, hoverState: l } = o,
          c = rt(() => a.value.state),
          u = new kS(n, s.value, i.value);
        zh(() => {
          vt.setDebug(n.debug), vt.setVerbose(n.verbose);
        });
        const d = Me("annotationUpdateBegin"),
          f = Me("annotationUpdating");
        Me("annotationUpdateEnd");
        const h = Me("annotationCreateBegin"),
          g = Me("annotationCreating");
        Me("annotationCreateEnd");
        const m = Me("keyPressed");
        Me("annotationClick"), Me("annotationDoubleClick");
        const y = new RS(n, s.value),
          w = y.annotationClasses,
          _ = y.componentClasses;
        Se(c, (p, S) => {
          vt.verbose("user-action-state-change", S, p), r("user-action-state-change", S, p);
        }),
          typeof window < "u" &&
            window.addEventListener("keyup", (p) => {
              if (m) vt.verbose("key-pressed", p.key, s.value, i.value), r("key-pressed", p, s.value, i.value, a.value);
              else
                switch (p.key) {
                  case "Escape":
                    s.value.resetUpdate();
                }
            });
        const x = new Map(),
          k = new Map(),
          E = new Map();
        function z(p, S) {
          var C;
          vt.verbose("@onClick", "userState:", a.value.state, S),
            (C = x.get(a.value.state)) == null || C(p, S),
            r("annotation-click", S);
        }
        function V(p, S) {
          vt.verbose("@onDoubleClick", "userState:", a.value.state, S),
            p.preventDefault(),
            r("annotation-double-click", S);
        }
        function H(p, S) {
          var C;
          vt.verbose(
            "@onMouseMove",
            "userState:",
            p,
            a.value.state,
            S,
            (C = S == null ? void 0 : S.annotation) == null ? void 0 : C.id,
          ),
            E.get(a.value.state) && E.get(a.value.state)(p, S);
        }
        function X(p) {
          vt.verbose("@onMouseUp", "userState:", a.value.state), k.get(a.value.state) && k.get(a.value.state)(p);
        }
        function I(p, S) {
          vt.verbose("@onMouseLeave", "userState:", a.value.state),
            s.value.updating && s.value.resetUpdate(),
            i.value.creating && i.value.resetCreating();
        }
        return (
          x.set(Dt.IDLE, (p, S) => {
            if (S != null && S.annotation) {
              (a.value.state = Dt.START_SELECT), (a.value.payload = S);
              return;
            }
            if (S != null && S.startOffset) {
              (a.value.state = Dt.START_CREATE), (a.value.payload = S);
              return;
            }
          }),
          k.set(Dt.START_SELECT, (p) => {
            vt.verbose("annotation-select", a.value.payload.annotation),
              r("annotation-select", a.value.payload.annotation, p),
              a.value.reset();
          }),
          k.set(Dt.START_CREATE, (p) => {
            a.value.reset();
          }),
          E.set(Dt.START_CREATE, (p, S) => {
            if (n.allowCreate) {
              const C = S.startOffset + ro(p.x, p.y).offset;
              if ((i.value.startCreating(C), h))
                vt.verbose("*emit annotation-create-begin", i.value), r("annotation-create-begin", i.value);
              else {
                const J = {
                  id: My(),
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
          E.set(Dt.CREATING, (p, S) => {
            const C = ro(p.x, p.y);
            if (C) {
              const J = S.startOffset + C.offset;
              i.value.newStart <= J &&
                ((i.value.newEnd = J),
                g
                  ? (vt.verbose("*emit annotation-creating", i.value), r("annotation-creating", i.value))
                  : i.value.updateCreating());
            }
          }),
          k.set(Dt.CREATING, (p) => {
            vt.verbose("*emit annotation-create-end", i.value),
              r("annotation-create-end", i.value),
              i.value.resetCreating();
          }),
          E.set(Dt.START_SELECT, (p, S) => {
            if (!n.allowEdit) return;
            const C = ro(p.x, p.y);
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
              d
                ? (vt.verbose("*emit annotation-update-begin", s.value), r("annotation-update-begin", s.value))
                : s.value.confirmStartUpdating());
          }),
          E.set(Dt.UPDATING, (p, S) => {
            const C = ro(p.x, p.y);
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
                (f
                  ? (vt.verbose("*emit annotation-updating", s.value), r("annotation-updating", s.value))
                  : s.value.confirmUpdate());
            }
          }),
          k.set(Dt.UPDATING, (p) => {
            vt.verbose("*emit annotation-update-end", s.value),
              r("annotation-update-end", s.value),
              s.value.resetUpdate();
          }),
          E.set(Dt.IDLE, (p, S) => {
            if (S != null && S.annotation) {
              const C = S.annotation;
              l.value.hoveredAnnotations.some((J) => J.id === C.id) ||
                (l.value.hoveredAnnotations.push(C),
                vt.verbose("annotation-mouse-over", C.id),
                r("annotation-mouse-over", C, p));
            } else
              l.value.hoveredAnnotations.map((C) => {
                vt.verbose("annotation-mouse-leave", C.id), r("annotation-mouse-leave", C, p);
              }),
                (l.value.hoveredAnnotations = []);
          }),
          (p, S) =>
            F(u).annotatedLines.value.length
              ? (P(),
                L(
                  "div",
                  {
                    key: 0,
                    class: Nt(F(_)),
                    onMouseleave: S[0] || (S[0] = (C) => I()),
                    onMouseup: S[1] || (S[1] = (C) => X(C)),
                  },
                  [
                    (P(!0),
                    L(
                      lt,
                      null,
                      Ut(
                        F(u).annotatedLines.value,
                        (C) => (
                          P(),
                          L(
                            lt,
                            { key: C },
                            [
                              st(
                                _S,
                                {
                                  gutter: C.gutter,
                                  "annotation-style": p.style,
                                  onAnnotationClick: z,
                                  onAnnotationDoubleClick: V,
                                },
                                null,
                                8,
                                ["gutter", "annotation-style"],
                              ),
                              R("div", LS, [
                                st(
                                  Z0,
                                  {
                                    line: C,
                                    "allow-edit": p.allowEdit,
                                    "allow-create": p.allowCreate,
                                    "annotation-classes": F(w),
                                    render: p.render,
                                    onAnnotationClick: z,
                                    onAnnotationDoubleClick: V,
                                    onAnnotationMouseMove: H,
                                  },
                                  {
                                    "annotation-before": Oe((J) => [
                                      De(p.$slots, "annotation-before", { annotation: J.annotation }),
                                    ]),
                                    "annotation-after": Oe((J) => [
                                      De(p.$slots, "annotation-after", { annotation: J.annotation }),
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
    NS = { opacity: { background: 0.3, border: 0.3, backgroundActive: 0.3, borderActive: 0.9, gutter: 0.8 } },
    zS = (t) => {
      const e = parseInt(t.slice(1), 16),
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        o = e & 255;
      return `${n},${r},${o}`;
    },
    DS = (t, e) => {
      const n = { ...NS.opacity },
        r = zS(t);
      return {
        border: `rgba(${r},${n.border})`,
        background: `rgba(${r},${n.border})`,
        borderActive: `rgba(${r},${n.border})`,
        backgroundActive: `color-mix(in srgb, white, ${t} ${n.backgroundActive * 100})`,
        gutterColor: `rgba(${r},${n.gutter})`,
      };
    },
    FS = (t, e) => {
      const n = {};
      return (
        Object.entries(t).forEach(([r, o]) => {
          n[r] = DS(o);
        }),
        n
      );
    };
  function BS(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function US(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function VS(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function HS(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function nf(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  function qS(t, e) {
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
          R("path", {
            "fill-rule": "evenodd",
            d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
            "clip-rule": "evenodd",
          }),
        ],
      )
    );
  }
  var ep = typeof global == "object" && global && global.Object === Object && global,
    KS = typeof self == "object" && self && self.Object === Object && self,
    je = ep || KS || Function("return this")(),
    Ce = je.Symbol,
    np = Object.prototype,
    WS = np.hasOwnProperty,
    GS = np.toString,
    lr = Ce ? Ce.toStringTag : void 0;
  function ZS(t) {
    var e = WS.call(t, lr),
      n = t[lr];
    try {
      t[lr] = void 0;
      var r = !0;
    } catch {}
    var o = GS.call(t);
    return r && (e ? (t[lr] = n) : delete t[lr]), o;
  }
  var JS = Object.prototype,
    QS = JS.toString;
  function YS(t) {
    return QS.call(t);
  }
  var XS = "[object Null]",
    tA = "[object Undefined]",
    rf = Ce ? Ce.toStringTag : void 0;
  function Xn(t) {
    return t == null ? (t === void 0 ? tA : XS) : rf && rf in Object(t) ? ZS(t) : YS(t);
  }
  function tr(t) {
    return t != null && typeof t == "object";
  }
  var eA = "[object Symbol]";
  function Ca(t) {
    return typeof t == "symbol" || (tr(t) && Xn(t) == eA);
  }
  function nA(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
    return o;
  }
  var ln = Array.isArray,
    rA = 1 / 0,
    of = Ce ? Ce.prototype : void 0,
    sf = of ? of.toString : void 0;
  function rp(t) {
    if (typeof t == "string") return t;
    if (ln(t)) return nA(t, rp) + "";
    if (Ca(t)) return sf ? sf.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -rA ? "-0" : e;
  }
  function xn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function oA(t) {
    return t;
  }
  var sA = "[object AsyncFunction]",
    iA = "[object Function]",
    aA = "[object GeneratorFunction]",
    lA = "[object Proxy]";
  function op(t) {
    if (!xn(t)) return !1;
    var e = Xn(t);
    return e == iA || e == aA || e == sA || e == lA;
  }
  var ui = je["__core-js_shared__"],
    af = (function () {
      var t = /[^.]+$/.exec((ui && ui.keys && ui.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })();
  function cA(t) {
    return !!af && af in t;
  }
  var uA = Function.prototype,
    fA = uA.toString;
  function jn(t) {
    if (t != null) {
      try {
        return fA.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var hA = /[\\^$.*+?()[\]{}|]/g,
    dA = /^\[object .+?Constructor\]$/,
    pA = Function.prototype,
    gA = Object.prototype,
    mA = pA.toString,
    vA = gA.hasOwnProperty,
    yA = RegExp(
      "^" +
        mA
          .call(vA)
          .replace(hA, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function bA(t) {
    if (!xn(t) || cA(t)) return !1;
    var e = op(t) ? yA : dA;
    return e.test(jn(t));
  }
  function _A(t, e) {
    return t == null ? void 0 : t[e];
  }
  function $n(t, e) {
    var n = _A(t, e);
    return bA(n) ? n : void 0;
  }
  var Di = $n(je, "WeakMap"),
    lf = Object.create,
    wA = (function () {
      function t() {}
      return function (e) {
        if (!xn(e)) return {};
        if (lf) return lf(e);
        t.prototype = e;
        var n = new t();
        return (t.prototype = void 0), n;
      };
    })();
  function xA(t, e, n) {
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
  function kA(t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
    return e;
  }
  var SA = 800,
    AA = 16,
    EA = Date.now;
  function TA(t) {
    var e = 0,
      n = 0;
    return function () {
      var r = EA(),
        o = AA - (r - n);
      if (((n = r), o > 0)) {
        if (++e >= SA) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function OA(t) {
    return function () {
      return t;
    };
  }
  var Oo = (function () {
      try {
        var t = $n(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    CA = Oo
      ? function (t, e) {
          return Oo(t, "toString", { configurable: !0, enumerable: !1, value: OA(e), writable: !0 });
        }
      : oA,
    RA = TA(CA);
  function jA(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; );
    return t;
  }
  var $A = 9007199254740991,
    PA = /^(?:0|[1-9]\d*)$/;
  function Ra(t, e) {
    var n = typeof t;
    return (e = e ?? $A), !!e && (n == "number" || (n != "symbol" && PA.test(t))) && t > -1 && t % 1 == 0 && t < e;
  }
  function sp(t, e, n) {
    e == "__proto__" && Oo ? Oo(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
  }
  function ip(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var IA = Object.prototype,
    MA = IA.hasOwnProperty;
  function ja(t, e, n) {
    var r = t[e];
    (!(MA.call(t, e) && ip(r, n)) || (n === void 0 && !(e in t))) && sp(t, e, n);
  }
  function cs(t, e, n, r) {
    var o = !n;
    n || (n = {});
    for (var s = -1, i = e.length; ++s < i; ) {
      var a = e[s],
        l = void 0;
      l === void 0 && (l = t[a]), o ? sp(n, a, l) : ja(n, a, l);
    }
    return n;
  }
  var cf = Math.max;
  function LA(t, e, n) {
    return (
      (e = cf(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, o = -1, s = cf(r.length - e, 0), i = Array(s); ++o < s; ) i[o] = r[e + o];
        o = -1;
        for (var a = Array(e + 1); ++o < e; ) a[o] = r[o];
        return (a[e] = n(i)), xA(t, this, a);
      }
    );
  }
  var NA = 9007199254740991;
  function $a(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= NA;
  }
  function ap(t) {
    return t != null && $a(t.length) && !op(t);
  }
  var zA = Object.prototype;
  function Pa(t) {
    var e = t && t.constructor,
      n = (typeof e == "function" && e.prototype) || zA;
    return t === n;
  }
  function DA(t, e) {
    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r;
  }
  var FA = "[object Arguments]";
  function uf(t) {
    return tr(t) && Xn(t) == FA;
  }
  var lp = Object.prototype,
    BA = lp.hasOwnProperty,
    UA = lp.propertyIsEnumerable,
    Ia = uf(
      (function () {
        return arguments;
      })(),
    )
      ? uf
      : function (t) {
          return tr(t) && BA.call(t, "callee") && !UA.call(t, "callee");
        };
  function VA() {
    return !1;
  }
  var cp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    ff = cp && typeof jt == "object" && jt && !jt.nodeType && jt,
    HA = ff && ff.exports === cp,
    hf = HA ? je.Buffer : void 0,
    qA = hf ? hf.isBuffer : void 0,
    up = qA || VA,
    KA = "[object Arguments]",
    WA = "[object Array]",
    GA = "[object Boolean]",
    ZA = "[object Date]",
    JA = "[object Error]",
    QA = "[object Function]",
    YA = "[object Map]",
    XA = "[object Number]",
    tE = "[object Object]",
    eE = "[object RegExp]",
    nE = "[object Set]",
    rE = "[object String]",
    oE = "[object WeakMap]",
    sE = "[object ArrayBuffer]",
    iE = "[object DataView]",
    aE = "[object Float32Array]",
    lE = "[object Float64Array]",
    cE = "[object Int8Array]",
    uE = "[object Int16Array]",
    fE = "[object Int32Array]",
    hE = "[object Uint8Array]",
    dE = "[object Uint8ClampedArray]",
    pE = "[object Uint16Array]",
    gE = "[object Uint32Array]",
    Ct = {};
  Ct[aE] = Ct[lE] = Ct[cE] = Ct[uE] = Ct[fE] = Ct[hE] = Ct[dE] = Ct[pE] = Ct[gE] = !0;
  Ct[KA] =
    Ct[WA] =
    Ct[sE] =
    Ct[GA] =
    Ct[iE] =
    Ct[ZA] =
    Ct[JA] =
    Ct[QA] =
    Ct[YA] =
    Ct[XA] =
    Ct[tE] =
    Ct[eE] =
    Ct[nE] =
    Ct[rE] =
    Ct[oE] =
      !1;
  function mE(t) {
    return tr(t) && $a(t.length) && !!Ct[Xn(t)];
  }
  function Ma(t) {
    return function (e) {
      return t(e);
    };
  }
  var fp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    kr = fp && typeof jt == "object" && jt && !jt.nodeType && jt,
    vE = kr && kr.exports === fp,
    fi = vE && ep.process,
    Zn = (function () {
      try {
        var t = kr && kr.require && kr.require("util").types;
        return t || (fi && fi.binding && fi.binding("util"));
      } catch {}
    })(),
    df = Zn && Zn.isTypedArray,
    yE = df ? Ma(df) : mE,
    bE = Object.prototype,
    _E = bE.hasOwnProperty;
  function hp(t, e) {
    var n = ln(t),
      r = !n && Ia(t),
      o = !n && !r && up(t),
      s = !n && !r && !o && yE(t),
      i = n || r || o || s,
      a = i ? DA(t.length, String) : [],
      l = a.length;
    for (var c in t)
      (e || _E.call(t, c)) &&
        !(
          i &&
          (c == "length" ||
            (o && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            Ra(c, l))
        ) &&
        a.push(c);
    return a;
  }
  function dp(t, e) {
    return function (n) {
      return t(e(n));
    };
  }
  var wE = dp(Object.keys, Object),
    xE = Object.prototype,
    kE = xE.hasOwnProperty;
  function SE(t) {
    if (!Pa(t)) return wE(t);
    var e = [];
    for (var n in Object(t)) kE.call(t, n) && n != "constructor" && e.push(n);
    return e;
  }
  function La(t) {
    return ap(t) ? hp(t) : SE(t);
  }
  function AE(t) {
    var e = [];
    if (t != null) for (var n in Object(t)) e.push(n);
    return e;
  }
  var EE = Object.prototype,
    TE = EE.hasOwnProperty;
  function OE(t) {
    if (!xn(t)) return AE(t);
    var e = Pa(t),
      n = [];
    for (var r in t) (r == "constructor" && (e || !TE.call(t, r))) || n.push(r);
    return n;
  }
  function Na(t) {
    return ap(t) ? hp(t, !0) : OE(t);
  }
  var CE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    RE = /^\w*$/;
  function jE(t, e) {
    if (ln(t)) return !1;
    var n = typeof t;
    return n == "number" || n == "symbol" || n == "boolean" || t == null || Ca(t)
      ? !0
      : RE.test(t) || !CE.test(t) || (e != null && t in Object(e));
  }
  var Lr = $n(Object, "create");
  function $E() {
    (this.__data__ = Lr ? Lr(null) : {}), (this.size = 0);
  }
  function PE(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var IE = "__lodash_hash_undefined__",
    ME = Object.prototype,
    LE = ME.hasOwnProperty;
  function NE(t) {
    var e = this.__data__;
    if (Lr) {
      var n = e[t];
      return n === IE ? void 0 : n;
    }
    return LE.call(e, t) ? e[t] : void 0;
  }
  var zE = Object.prototype,
    DE = zE.hasOwnProperty;
  function FE(t) {
    var e = this.__data__;
    return Lr ? e[t] !== void 0 : DE.call(e, t);
  }
  var BE = "__lodash_hash_undefined__";
  function UE(t, e) {
    var n = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (n[t] = Lr && e === void 0 ? BE : e), this;
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
  kn.prototype.delete = PE;
  kn.prototype.get = NE;
  kn.prototype.has = FE;
  kn.prototype.set = UE;
  function VE() {
    (this.__data__ = []), (this.size = 0);
  }
  function us(t, e) {
    for (var n = t.length; n--; ) if (ip(t[n][0], e)) return n;
    return -1;
  }
  var HE = Array.prototype,
    qE = HE.splice;
  function KE(t) {
    var e = this.__data__,
      n = us(e, t);
    if (n < 0) return !1;
    var r = e.length - 1;
    return n == r ? e.pop() : qE.call(e, n, 1), --this.size, !0;
  }
  function WE(t) {
    var e = this.__data__,
      n = us(e, t);
    return n < 0 ? void 0 : e[n][1];
  }
  function GE(t) {
    return us(this.__data__, t) > -1;
  }
  function ZE(t, e) {
    var n = this.__data__,
      r = us(n, t);
    return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
  }
  function qe(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  qe.prototype.clear = VE;
  qe.prototype.delete = KE;
  qe.prototype.get = WE;
  qe.prototype.has = GE;
  qe.prototype.set = ZE;
  var Nr = $n(je, "Map");
  function JE() {
    (this.size = 0), (this.__data__ = { hash: new kn(), map: new (Nr || qe)(), string: new kn() });
  }
  function QE(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function fs(t, e) {
    var n = t.__data__;
    return QE(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
  }
  function YE(t) {
    var e = fs(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function XE(t) {
    return fs(this, t).get(t);
  }
  function tT(t) {
    return fs(this, t).has(t);
  }
  function eT(t, e) {
    var n = fs(this, t),
      r = n.size;
    return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
  }
  function cn(t) {
    var e = -1,
      n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  cn.prototype.clear = JE;
  cn.prototype.delete = YE;
  cn.prototype.get = XE;
  cn.prototype.has = tT;
  cn.prototype.set = eT;
  var nT = "Expected a function";
  function za(t, e) {
    if (typeof t != "function" || (e != null && typeof e != "function")) throw new TypeError(nT);
    var n = function () {
      var r = arguments,
        o = e ? e.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(o)) return s.get(o);
      var i = t.apply(this, r);
      return (n.cache = s.set(o, i) || s), i;
    };
    return (n.cache = new (za.Cache || cn)()), n;
  }
  za.Cache = cn;
  var rT = 500;
  function oT(t) {
    var e = za(t, function (r) {
        return n.size === rT && n.clear(), r;
      }),
      n = e.cache;
    return e;
  }
  var sT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    iT = /\\(\\)?/g,
    aT = oT(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(""),
        t.replace(sT, function (n, r, o, s) {
          e.push(o ? s.replace(iT, "$1") : r || n);
        }),
        e
      );
    });
  function lT(t) {
    return t == null ? "" : rp(t);
  }
  function hs(t, e) {
    return ln(t) ? t : jE(t, e) ? [t] : aT(lT(t));
  }
  var cT = 1 / 0;
  function Da(t) {
    if (typeof t == "string" || Ca(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -cT ? "-0" : e;
  }
  function uT(t, e) {
    e = hs(e, t);
    for (var n = 0, r = e.length; t != null && n < r; ) t = t[Da(e[n++])];
    return n && n == r ? t : void 0;
  }
  function Fa(t, e) {
    for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
    return t;
  }
  var pf = Ce ? Ce.isConcatSpreadable : void 0;
  function fT(t) {
    return ln(t) || Ia(t) || !!(pf && t && t[pf]);
  }
  function hT(t, e, n, r, o) {
    var s = -1,
      i = t.length;
    for (n || (n = fT), o || (o = []); ++s < i; ) {
      var a = t[s];
      n(a) ? Fa(o, a) : (o[o.length] = a);
    }
    return o;
  }
  function dT(t) {
    var e = t == null ? 0 : t.length;
    return e ? hT(t) : [];
  }
  function pT(t) {
    return RA(LA(t, void 0, dT), t + "");
  }
  var pp = dp(Object.getPrototypeOf, Object);
  function gT() {
    (this.__data__ = new qe()), (this.size = 0);
  }
  function mT(t) {
    var e = this.__data__,
      n = e.delete(t);
    return (this.size = e.size), n;
  }
  function vT(t) {
    return this.__data__.get(t);
  }
  function yT(t) {
    return this.__data__.has(t);
  }
  var bT = 200;
  function _T(t, e) {
    var n = this.__data__;
    if (n instanceof qe) {
      var r = n.__data__;
      if (!Nr || r.length < bT - 1) return r.push([t, e]), (this.size = ++n.size), this;
      n = this.__data__ = new cn(r);
    }
    return n.set(t, e), (this.size = n.size), this;
  }
  function er(t) {
    var e = (this.__data__ = new qe(t));
    this.size = e.size;
  }
  er.prototype.clear = gT;
  er.prototype.delete = mT;
  er.prototype.get = vT;
  er.prototype.has = yT;
  er.prototype.set = _T;
  function wT(t, e) {
    return t && cs(e, La(e), t);
  }
  function xT(t, e) {
    return t && cs(e, Na(e), t);
  }
  var gp = typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
    gf = gp && typeof jt == "object" && jt && !jt.nodeType && jt,
    kT = gf && gf.exports === gp,
    mf = kT ? je.Buffer : void 0,
    vf = mf ? mf.allocUnsafe : void 0;
  function ST(t, e) {
    if (e) return t.slice();
    var n = t.length,
      r = vf ? vf(n) : new t.constructor(n);
    return t.copy(r), r;
  }
  function AT(t, e) {
    for (var n = -1, r = t == null ? 0 : t.length, o = 0, s = []; ++n < r; ) {
      var i = t[n];
      e(i, n, t) && (s[o++] = i);
    }
    return s;
  }
  function mp() {
    return [];
  }
  var ET = Object.prototype,
    TT = ET.propertyIsEnumerable,
    yf = Object.getOwnPropertySymbols,
    Ba = yf
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              AT(yf(t), function (e) {
                return TT.call(t, e);
              }));
        }
      : mp;
  function OT(t, e) {
    return cs(t, Ba(t), e);
  }
  var CT = Object.getOwnPropertySymbols,
    vp = CT
      ? function (t) {
          for (var e = []; t; ) Fa(e, Ba(t)), (t = pp(t));
          return e;
        }
      : mp;
  function RT(t, e) {
    return cs(t, vp(t), e);
  }
  function yp(t, e, n) {
    var r = e(t);
    return ln(t) ? r : Fa(r, n(t));
  }
  function jT(t) {
    return yp(t, La, Ba);
  }
  function $T(t) {
    return yp(t, Na, vp);
  }
  var Fi = $n(je, "DataView"),
    Bi = $n(je, "Promise"),
    Ui = $n(je, "Set"),
    bf = "[object Map]",
    PT = "[object Object]",
    _f = "[object Promise]",
    wf = "[object Set]",
    xf = "[object WeakMap]",
    kf = "[object DataView]",
    IT = jn(Fi),
    MT = jn(Nr),
    LT = jn(Bi),
    NT = jn(Ui),
    zT = jn(Di),
    Ne = Xn;
  ((Fi && Ne(new Fi(new ArrayBuffer(1))) != kf) ||
    (Nr && Ne(new Nr()) != bf) ||
    (Bi && Ne(Bi.resolve()) != _f) ||
    (Ui && Ne(new Ui()) != wf) ||
    (Di && Ne(new Di()) != xf)) &&
    (Ne = function (t) {
      var e = Xn(t),
        n = e == PT ? t.constructor : void 0,
        r = n ? jn(n) : "";
      if (r)
        switch (r) {
          case IT:
            return kf;
          case MT:
            return bf;
          case LT:
            return _f;
          case NT:
            return wf;
          case zT:
            return xf;
        }
      return e;
    });
  var DT = Object.prototype,
    FT = DT.hasOwnProperty;
  function BT(t) {
    var e = t.length,
      n = new t.constructor(e);
    return e && typeof t[0] == "string" && FT.call(t, "index") && ((n.index = t.index), (n.input = t.input)), n;
  }
  var Sf = je.Uint8Array;
  function Ua(t) {
    var e = new t.constructor(t.byteLength);
    return new Sf(e).set(new Sf(t)), e;
  }
  function UT(t, e) {
    var n = e ? Ua(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.byteLength);
  }
  var VT = /\w*$/;
  function HT(t) {
    var e = new t.constructor(t.source, VT.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Af = Ce ? Ce.prototype : void 0,
    Ef = Af ? Af.valueOf : void 0;
  function qT(t) {
    return Ef ? Object(Ef.call(t)) : {};
  }
  function KT(t, e) {
    var n = e ? Ua(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length);
  }
  var WT = "[object Boolean]",
    GT = "[object Date]",
    ZT = "[object Map]",
    JT = "[object Number]",
    QT = "[object RegExp]",
    YT = "[object Set]",
    XT = "[object String]",
    tO = "[object Symbol]",
    eO = "[object ArrayBuffer]",
    nO = "[object DataView]",
    rO = "[object Float32Array]",
    oO = "[object Float64Array]",
    sO = "[object Int8Array]",
    iO = "[object Int16Array]",
    aO = "[object Int32Array]",
    lO = "[object Uint8Array]",
    cO = "[object Uint8ClampedArray]",
    uO = "[object Uint16Array]",
    fO = "[object Uint32Array]";
  function hO(t, e, n) {
    var r = t.constructor;
    switch (e) {
      case eO:
        return Ua(t);
      case WT:
      case GT:
        return new r(+t);
      case nO:
        return UT(t, n);
      case rO:
      case oO:
      case sO:
      case iO:
      case aO:
      case lO:
      case cO:
      case uO:
      case fO:
        return KT(t, n);
      case ZT:
        return new r();
      case JT:
      case XT:
        return new r(t);
      case QT:
        return HT(t);
      case YT:
        return new r();
      case tO:
        return qT(t);
    }
  }
  function dO(t) {
    return typeof t.constructor == "function" && !Pa(t) ? wA(pp(t)) : {};
  }
  var pO = "[object Map]";
  function gO(t) {
    return tr(t) && Ne(t) == pO;
  }
  var Tf = Zn && Zn.isMap,
    mO = Tf ? Ma(Tf) : gO,
    vO = "[object Set]";
  function yO(t) {
    return tr(t) && Ne(t) == vO;
  }
  var Of = Zn && Zn.isSet,
    bO = Of ? Ma(Of) : yO,
    _O = 1,
    wO = 2,
    xO = 4,
    bp = "[object Arguments]",
    kO = "[object Array]",
    SO = "[object Boolean]",
    AO = "[object Date]",
    EO = "[object Error]",
    _p = "[object Function]",
    TO = "[object GeneratorFunction]",
    OO = "[object Map]",
    CO = "[object Number]",
    wp = "[object Object]",
    RO = "[object RegExp]",
    jO = "[object Set]",
    $O = "[object String]",
    PO = "[object Symbol]",
    IO = "[object WeakMap]",
    MO = "[object ArrayBuffer]",
    LO = "[object DataView]",
    NO = "[object Float32Array]",
    zO = "[object Float64Array]",
    DO = "[object Int8Array]",
    FO = "[object Int16Array]",
    BO = "[object Int32Array]",
    UO = "[object Uint8Array]",
    VO = "[object Uint8ClampedArray]",
    HO = "[object Uint16Array]",
    qO = "[object Uint32Array]",
    Et = {};
  Et[bp] =
    Et[kO] =
    Et[MO] =
    Et[LO] =
    Et[SO] =
    Et[AO] =
    Et[NO] =
    Et[zO] =
    Et[DO] =
    Et[FO] =
    Et[BO] =
    Et[OO] =
    Et[CO] =
    Et[wp] =
    Et[RO] =
    Et[jO] =
    Et[$O] =
    Et[PO] =
    Et[UO] =
    Et[VO] =
    Et[HO] =
    Et[qO] =
      !0;
  Et[EO] = Et[_p] = Et[IO] = !1;
  function ho(t, e, n, r, o, s) {
    var i,
      a = e & _O,
      l = e & wO,
      c = e & xO;
    if (i !== void 0) return i;
    if (!xn(t)) return t;
    var u = ln(t);
    if (u) {
      if (((i = BT(t)), !a)) return kA(t, i);
    } else {
      var d = Ne(t),
        f = d == _p || d == TO;
      if (up(t)) return ST(t, a);
      if (d == wp || d == bp || (f && !o)) {
        if (((i = l || f ? {} : dO(t)), !a)) return l ? RT(t, xT(i, t)) : OT(t, wT(i, t));
      } else {
        if (!Et[d]) return o ? t : {};
        i = hO(t, d, a);
      }
    }
    s || (s = new er());
    var h = s.get(t);
    if (h) return h;
    s.set(t, i),
      bO(t)
        ? t.forEach(function (y) {
            i.add(ho(y, e, n, y, t, s));
          })
        : mO(t) &&
          t.forEach(function (y, w) {
            i.set(w, ho(y, e, n, w, t, s));
          });
    var g = c ? (l ? $T : jT) : l ? Na : La,
      m = u ? void 0 : g(t);
    return (
      jA(m || t, function (y, w) {
        m && ((w = y), (y = t[w])), ja(i, w, ho(y, e, n, w, t, s));
      }),
      i
    );
  }
  var KO = 1,
    WO = 4;
  function Xe(t) {
    return ho(t, KO | WO);
  }
  function GO(t, e) {
    return t != null && e in Object(t);
  }
  function ZO(t, e, n) {
    e = hs(e, t);
    for (var r = -1, o = e.length, s = !1; ++r < o; ) {
      var i = Da(e[r]);
      if (!(s = t != null && n(t, i))) break;
      t = t[i];
    }
    return s || ++r != o ? s : ((o = t == null ? 0 : t.length), !!o && $a(o) && Ra(i, o) && (ln(t) || Ia(t)));
  }
  function JO(t, e) {
    return t != null && ZO(t, e, GO);
  }
  function QO(t, e, n, r) {
    if (!xn(t)) return t;
    e = hs(e, t);
    for (var o = -1, s = e.length, i = s - 1, a = t; a != null && ++o < s; ) {
      var l = Da(e[o]),
        c = n;
      if (l === "__proto__" || l === "constructor" || l === "prototype") return t;
      if (o != i) {
        var u = a[l];
        (c = void 0), c === void 0 && (c = xn(u) ? u : Ra(e[o + 1]) ? [] : {});
      }
      ja(a, l, c), (a = a[l]);
    }
    return t;
  }
  function YO(t, e, n) {
    for (var r = -1, o = e.length, s = {}; ++r < o; ) {
      var i = e[r],
        a = uT(t, i);
      n(a, i) && QO(s, hs(i, t), a);
    }
    return s;
  }
  function XO(t, e) {
    return YO(t, e, function (n, r) {
      return JO(t, r);
    });
  }
  var Va = pT(function (t, e) {
    return t == null ? {} : XO(t, e);
  });
  const xp = (t, e) => {
      const n = t.__vccOpts || t;
      for (const [r, o] of e) n[r] = o;
      return n;
    },
    tC = {},
    eC = {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "h-6 w-6",
    };
  function nC(t, e) {
    return (
      P(),
      L(
        "svg",
        eC,
        e[0] ||
          (e[0] = [
            R(
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
  const rC = xp(tC, [["render", nC]]),
    Ha = (t, e, n) => {
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
  function oC(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function oo(t) {
    throw new Error(
      'Could not dynamically require "' +
        t +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
    );
  }
  var kp = { exports: {} };
  (function (t, e) {
    (function (n) {
      t.exports = n();
    })(function () {
      return (function () {
        function n(r, o, s) {
          function i(c, u) {
            if (!o[c]) {
              if (!r[c]) {
                var d = typeof oo == "function" && oo;
                if (!u && d) return d(c, !0);
                if (a) return a(c, !0);
                var f = new Error("Cannot find module '" + c + "'");
                throw ((f.code = "MODULE_NOT_FOUND"), f);
              }
              var h = (o[c] = { exports: {} });
              r[c][0].call(
                h.exports,
                function (g) {
                  var m = r[c][1][g];
                  return i(m || g);
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
          for (var a = typeof oo == "function" && oo, l = 0; l < s.length; l++) i(s[l]);
          return i;
        }
        return n;
      })()(
        {
          1: [
            function (n, r, o) {
              function s(I, p, S) {
                return (p = g(p)), i(I, d() ? Reflect.construct(p, S || [], g(I).constructor) : p.apply(I, S));
              }
              function i(I, p) {
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
                return (c = function (S) {
                  if (S === null || !f(S)) return S;
                  if (typeof S != "function") throw new TypeError("Super expression must either be null or a function");
                  if (p !== void 0) {
                    if (p.has(S)) return p.get(S);
                    p.set(S, C);
                  }
                  function C() {
                    return u(S, arguments, g(this).constructor);
                  }
                  return (
                    (C.prototype = Object.create(S.prototype, {
                      constructor: { value: C, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    h(C, S)
                  );
                })(I);
              }
              function u(I, p, S) {
                if (d()) return Reflect.construct.apply(null, arguments);
                var C = [null];
                C.push.apply(C, p);
                var J = new (I.bind.apply(I, C))();
                return S && h(J, S.prototype), J;
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
                  : function (S, C) {
                      return (S.__proto__ = C), S;
                    })(I, p);
              }
              function g(I) {
                return (g = Object.setPrototypeOf
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
              function y(I, p) {
                if (!(I instanceof p)) throw new TypeError("Cannot call a class as a function");
              }
              function w(I, p) {
                for (var S = 0; S < p.length; S++) {
                  var C = p[S];
                  (C.enumerable = C.enumerable || !1),
                    (C.configurable = !0),
                    "value" in C && (C.writable = !0),
                    Object.defineProperty(I, x(C.key), C);
                }
              }
              function _(I, p, S) {
                return p && w(I.prototype, p), Object.defineProperty(I, "prototype", { writable: !1 }), I;
              }
              function x(I) {
                var p = k(I, "string");
                return m(p) == "symbol" ? p : String(p);
              }
              function k(I, p) {
                if (m(I) != "object" || !I) return I;
                var S = I[Symbol.toPrimitive];
                if (S !== void 0) {
                  var C = S.call(I, p);
                  if (m(C) != "object") return C;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(I);
              }
              var E = function (I, p) {
                  var S = I.length,
                    C = p - 20;
                  C < 0 && (C = 0);
                  var J = p + 20;
                  J > S && (J = S);
                  var et = function (q) {
                      return q.charCodeAt(0).toString(16).toUpperCase();
                    },
                    K = function (q, at, Ht) {
                      return q
                        .substr(at, Ht)
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
                    prologText: K(I, C, p - C),
                    tokenText: K(I, p, 1),
                    epilogText: K(I, p + 1, J - (p + 1)),
                    epilogTrunc: J < S,
                  };
                },
                z = (function () {
                  function I(p, S, C) {
                    var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                      et = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                      K = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                    y(this, I),
                      (this.type = p),
                      (this.value = S),
                      (this.text = C),
                      (this.pos = J),
                      (this.line = et),
                      (this.column = K);
                  }
                  return (
                    _(I, [
                      {
                        key: "toString",
                        value: function () {
                          var p =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : function (S, C) {
                                  return C;
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
                        value: function (p, S) {
                          return p === this.type && (arguments.length !== 2 || S === this.value);
                        },
                      },
                    ]),
                    I
                  );
                })(),
                V = (function (I) {
                  function p(S, C, J, et, K) {
                    var q;
                    return (
                      y(this, p),
                      ((q = s(this, p, [S])).name = "ParsingError"),
                      (q.message = S),
                      (q.pos = C),
                      (q.line = J),
                      (q.column = et),
                      (q.input = K),
                      q
                    );
                  }
                  return (
                    l(p, c(Error)),
                    _(p, [
                      {
                        key: "toString",
                        value: function () {
                          for (
                            var S = E(this.input, this.pos),
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
                    p
                  );
                })(),
                H = (function () {
                  function I(p) {
                    y(this, I),
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
                        value: function (p, S) {
                          var C = this._data[p];
                          return arguments.length === 2 && (this._data[p] = S), C;
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
                          var p, S;
                          return arguments.length > 0
                            ? ((S = this._tokenizr).state.apply(S, arguments), this)
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
                        value: function (p, S) {
                          return (
                            arguments.length < 2 && (S = this._match[0]),
                            this._tokenizr._log(
                              "    ACCEPT: type: ".concat(p, ", value: ") +
                                ""
                                  .concat(JSON.stringify(S), " (")
                                  .concat(m(S), '), text: "')
                                  .concat(this._match[0], '"'),
                            ),
                            this._tokenizr._pending.push(
                              new z(
                                p,
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
                    y(this, I),
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
                            (this._ctx = new H(this)),
                            this
                          );
                        },
                      },
                      {
                        key: "error",
                        value: function (p) {
                          return new V(p, this._pos, this._line, this._column, this._input);
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
                        value: function (p, S, C) {
                          var J = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unknown";
                          if (arguments.length === 2 && typeof S == "function") {
                            var et = [p, S];
                            (S = et[0]), (C = et[1]), (p = "*");
                          } else if (arguments.length === 3 && typeof S == "function") {
                            var K = [p, S, C];
                            (S = K[0]), (C = K[1]), (J = K[2]), (p = "*");
                          }
                          if (typeof p != "string") throw new Error('parameter "state" not a String');
                          if (!(m(S) === "object" && S instanceof RegExp))
                            throw new Error('parameter "pattern" not a RegExp');
                          if (typeof C != "function") throw new Error('parameter "action" not a Function');
                          if (typeof J != "string") throw new Error('parameter "name" not a String');
                          p = p.split(/\s*,\s*/g).map(function (at) {
                            var Ht = at.split(/\s+/g),
                              $t = Ht.filter(function (wt) {
                                return wt.match(/^#/) === null;
                              }),
                              Jt = Ht.filter(function (wt) {
                                return wt.match(/^#/) !== null;
                              }).map(function (wt) {
                                return wt.replace(/^#/, "");
                              });
                            if ($t.length !== 1) throw new Error("exactly one state required");
                            return { state: $t[0], tags: Jt };
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
                            this._log("rule: configure rule (state: ".concat(p, ", pattern: ").concat(S.source, ")")),
                            this._rules.push({ state: p, pattern: S, action: C, name: J }),
                            this
                          );
                        },
                      },
                      {
                        key: "_progress",
                        value: function (p, S) {
                          for (var C = this._line, J = this._column, et = this._input, K = p; K < S; K++) {
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
                            "    PROGRESS: characters: ".concat(S - p, ", ") +
                              "from: <line ".concat(C, ", column ").concat(J, ">, ") +
                              "to: <line ".concat(this._line, ", column ").concat(this._column, ">"),
                          );
                        },
                      },
                      {
                        key: "_tokenize",
                        value: function () {
                          var p = this,
                            S = function () {
                              p._eof ||
                                (p._finish !== null && p._finish.call(p._ctx, p._ctx),
                                (p._eof = !0),
                                p._pending.push(new z("EOF", "", "", p._pos, p._line, p._column)));
                            };
                          if (!(this._stopped || this._pos >= this._len)) {
                            for (var C = !0; C; ) {
                              if (((C = !1), this._debug)) {
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
                              for (var K = 0; K < this._rules.length; K++) {
                                if (this._debug) {
                                  var q = this._rules[K].state
                                    .map(function (Kt) {
                                      var $e = Kt.state;
                                      return (
                                        Kt.tags.length > 0 &&
                                          ($e +=
                                            " " +
                                            Kt.tags
                                              .map(function (In) {
                                                return "#".concat(In);
                                              })
                                              .join(" ")),
                                        $e
                                      );
                                    })
                                    .join(", ");
                                  this._log(
                                    "  RULE: state(s): <".concat(q, ">, ") +
                                      "pattern: ".concat(this._rules[K].pattern.source),
                                  );
                                }
                                var at = !1,
                                  Ht = this._rules[K].state.map(function (Kt) {
                                    return Kt.state;
                                  }),
                                  $t = Ht.indexOf("*");
                                if (($t < 0 && ($t = Ht.indexOf(this._state[this._state.length - 1])), $t >= 0)) {
                                  at = !0;
                                  var Jt = this._rules[K].state[$t].tags;
                                  (Jt = Jt.filter(function (Kt) {
                                    return !p._tag[Kt];
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
                          for (var p, S = []; (p = this.token()) !== null; ) S.push(p);
                          return S;
                        },
                      },
                      {
                        key: "peek",
                        value: function (p) {
                          if ((p === void 0 && (p = 0), p >= this._pending.length)) {
                            this._pending.length === 0 && this._tokenize();
                            for (var S = 0; S < p - this._pending.length; S++) this._tokenize();
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
                          for (var S = 0; S < this._pending.length + p; S++) this._tokenize();
                          if (p > this._pending.length)
                            throw new Error("not enough tokens available for skip operation");
                          for (; p-- > 0; ) this.token();
                          return this;
                        },
                      },
                      {
                        key: "consume",
                        value: function (p, S) {
                          for (var C = this, J = 0; J < this._pending.length + 1; J++) this._tokenize();
                          if (this._pending.length === 0)
                            throw new Error("not enough tokens available for consume operation");
                          var et = this.token();
                          this._log("CONSUME: ".concat(et.toString()));
                          var K = function () {
                            throw new V(
                              "expected: <type: "
                                .concat(p, ", value: ")
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
                            arguments.length !== 2 || et.isA(p, S) ? et.isA(p) || K() : K(JSON.stringify(S), m(S)), et
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
                          for (var p = null, S = [], C = arguments.length, J = new Array(C), et = 0; et < C; et++)
                            J[et] = arguments[et];
                          for (var K = 0; K < J.length; K++)
                            try {
                              this.begin(), (p = J[K].call(this)), this.commit();
                              break;
                            } catch (q) {
                              this._log("EXCEPTION: ".concat(q.toString())),
                                S.push({ ex: q, depth: this.depth() }),
                                this.rollback();
                              continue;
                            }
                          if (p === null && S.length > 0)
                            throw (S = S.sort(function (q, at) {
                              return q.depth - at.depth;
                            }))[0].ex;
                          return p;
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
  })(kp);
  var sC = kp.exports;
  const iC = oC(sC);
  function Sp(t) {
    const e = new iC();
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
  function aC(t, e) {
    if (!t || !e || typeof t != "string" || typeof e != "string" || t.length == 0 || e.length == 0) return [];
    let n = [],
      r = t.indexOf(e, 0);
    for (; r != -1; ) n.push(r), (r = t.indexOf(e, r + 1));
    return n;
  }
  function lC(t, e, n, r, o) {
    const s = r - n;
    s != e.length &&
      console.log("Warning: annotation text length", e.length, ": ", e, " and annotation length do not match", s);
    let a = aC(t, e).filter((l) => Math.abs(l - n) <= o);
    return a.length == 1 ? { start: a[0], end: a[0] + e.length - 1, modified: !0 } : { start: n, end: r, modified: !1 };
  }
  function cC(t, e, n, r) {
    const o = r,
      s = {},
      i = {};
    Sp(t).forEach((f) => {
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
  const uC = (t) => {
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
  class fC {
    constructor(e) {
      Z(this, "mapStartCharIndexToToken", {});
      Z(this, "mapStopCharIndexToToken", {});
      (this.text = e),
        Sp(e).forEach((n) => {
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
  const hC = { key: 0 },
    dC = { class: "label cursor-pointer gap-2" },
    pC = ["name", "disabled", "checked"],
    gC = { class: "w-full" },
    mC = ["disabled", "data-tip"],
    Cf = Lt({
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
            r("processesAnnotation", Va(u.annotation, ["id", "start", "end"]));
          };
        return (u, d) =>
          u.annotation
            ? (P(),
              L("div", hC, [
                R("label", dC, [
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
                        pC,
                      ))
                    : Pt("", !0),
                  R("div", gC, [
                    st(
                      F(To),
                      {
                        annotations: [u.annotation],
                        lines: F(Ha)(u.textLines, u.annotation.start, u.annotation.end).lines,
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
                        [st(rC)],
                        8,
                        mC,
                      ))
                    : Pt("", !0),
                ]),
              ]))
            : Pt("", !0);
      },
    }),
    vC = { class: "py-2" },
    yC = { class: "text-sm text-content" },
    Ap = Lt({
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
                R("p", vC, [
                  n[0] || (n[0] = R("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                  Be(" " + bt((r = e.annotation.metadata) == null ? void 0 : r.text), 1),
                ]),
                n[1] || (n[1] = R("strong", { class: "underline" }, "Metadata", -1)),
                R("ul", yC, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(
                      e.annotation.properties,
                      (o) => (
                        P(),
                        L("li", { key: o.id_name }, [R("strong", null, bt(o.label) + ":", 1), Be(" " + bt(o.name), 1)])
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
    Ep = {
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
    Tp = FS(Ep),
    bC = () => {
      const t = {};
      return (
        Object.entries(Tp).forEach(([e, n]) => {
          t[e] = n ? { ...n, border: "rgb(0, 128, 0)" } : null;
        }),
        t
      );
    },
    _C = bC(),
    wC = { class: "card-body p-2" },
    xC = { key: 0, role: "alert", class: "alert alert-error" },
    kC = { class: "flex justify-between items-center" },
    SC = { class: "flex gap-2 justify-center" },
    AC = { class: "flex gap-2" },
    EC = ["disabled"],
    TC = { class: "annotation-body" },
    OC = { class: "flex items-center" },
    CC = { class: "flex-grow" },
    RC = { class: "pt-2 text-sm text-gray-400" },
    jC = { key: 0 },
    $C = Lt({
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
            return `--text-color-custom:${Ep[f]}`;
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
          var m;
          const g = kh("router-link");
          return (
            P(),
            L(
              "div",
              { class: Nt(["grid gap-2 ", { "grid-cols-1": !f.showMetadata, "grid-cols-2": f.showMetadata }]) },
              [
                R(
                  "div",
                  {
                    class: Nt([
                      "card border rounded-md w-full",
                      { "border-black": f.highlight, shadow: f.highlight, "opacity-20": f.disabled },
                    ]),
                  },
                  [
                    R("div", wC, [
                      f.error ? (P(), L("div", xC, "Annotatie niet bewaard, probeer opnieuw.")) : Pt("", !0),
                      R("div", kC, [
                        R("div", SC, [
                          R(
                            "button",
                            {
                              class: "badge badge-outline badge-sm text-color-custom cursor-pointer",
                              style: rn(l()),
                              onClick: d,
                            },
                            bt(F(o).type),
                            5,
                          ),
                          f.duplicates.length > 1
                            ? (P(),
                              L(
                                "button",
                                {
                                  key: 0,
                                  class: "badge badge-sm badge-warning cursor-pointer",
                                  onClick: h[0] || (h[0] = (y) => u()),
                                },
                                " Duplicaat? (" + bt(F(o).id) + ") ",
                                1,
                              ))
                            : Pt("", !0),
                        ]),
                        R("div", AC, [
                          R(
                            "button",
                            {
                              disabled: f.disabled,
                              class: "btn btn-circle btn-ghost text-red-900 btn-xs tooltip tooltip-left",
                              "data-tip": "Verwijder annotatie",
                              onClick: h[1] || (h[1] = (y) => a()),
                            },
                            [st(F(qS))],
                            8,
                            EC,
                          ),
                        ]),
                      ]),
                      R("div", null, [
                        R("div", TC, [
                          f.annotation
                            ? (P(),
                              Hn(
                                Cf,
                                {
                                  key: 0,
                                  annotation: f.annotation,
                                  tip: "Bewaar gewijzigde annotatie",
                                  "selected-annotation": n.value === "modified",
                                  disabled: f.disabled,
                                  "text-lines": f.textLines,
                                  "allow-edit": !0,
                                  snapper: f.snapper,
                                  onChangeSelected: h[2] || (h[2] = (y) => c("modified")),
                                  onConfirmAnnotation: h[3] || (h[3] = (y) => i("modified")),
                                  onModifyAnnotations: h[4] || (h[4] = (y) => s("modifyAnnotations", y)),
                                  onProcessesAnnotation: h[5] || (h[5] = (y) => s("processesAnnotation", y)),
                                },
                                null,
                                8,
                                ["annotation", "selected-annotation", "disabled", "text-lines", "snapper"],
                              ))
                            : Pt("", !0),
                          h[8] || (h[8] = R("hr", null, null, -1)),
                          st(
                            Cf,
                            {
                              annotation: F(o),
                              tip: "Bewaar originele annotatie",
                              "selected-annotation": n.value === "original",
                              disabled: f.disabled,
                              "text-lines": f.textLines,
                              onChangeSelected: h[6] || (h[6] = (y) => c("original")),
                              onConfirmAnnotation: h[7] || (h[7] = (y) => i("original")),
                            },
                            null,
                            8,
                            ["annotation", "selected-annotation", "disabled", "text-lines"],
                          ),
                        ]),
                        R("div", OC, [
                          R("ul", CC, [
                            (P(!0),
                            L(
                              lt,
                              null,
                              Ut(f.appliedRules, (y) => (P(), L("li", { class: "badge badge-xs", key: y }, bt(y), 1))),
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
                            { default: Oe(() => h[9] || (h[9] = [Be(" i ")])), _: 1 },
                          ),
                        ]),
                        R("p", RC, [
                          h[10] || (h[10] = R("strong", { class: "underline" }, "LineLinguisticCharacteristic:", -1)),
                          Be(" " + bt((m = F(o).metadata) == null ? void 0 : m.text), 1),
                        ]),
                      ]),
                    ]),
                  ],
                  2,
                ),
                f.showMetadata
                  ? (P(), L("div", jC, [st(Ap, { annotation: F(o) }, null, 8, ["annotation"])]))
                  : Pt("", !0),
              ],
              2,
            )
          );
        };
      },
    });
  function PC(t) {
    return Zi() ? (Wf(t), !0) : !1;
  }
  function Op(t) {
    return typeof t == "function" ? t() : F(t);
  }
  const IC = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  const MC = (t) => t != null,
    po = () => {};
  function mn(t, e, n) {
    let r;
    Mt(n) ? (r = { evaluating: n }) : (r = {});
    const { lazy: o = !1, evaluating: s = void 0, shallow: i = !0, onError: a = po } = r,
      l = ut(!o),
      c = i ? uh(e) : ut(e);
    let u = 0;
    return (
      zh(async (d) => {
        if (!l.value) return;
        u++;
        const f = u;
        let h = !1;
        s &&
          Promise.resolve().then(() => {
            s.value = !0;
          });
        try {
          const g = await t((m) => {
            d(() => {
              s && (s.value = !1), h || m();
            });
          });
          f === u && (c.value = g);
        } catch (g) {
          a(g);
        } finally {
          s && f === u && (s.value = !1), (h = !0);
        }
      }),
      o ? rt(() => ((l.value = !0), c.value)) : c
    );
  }
  const LC = IC ? window : void 0;
  function hi(t) {
    var e;
    const n = Op(t);
    return (e = n == null ? void 0 : n.$el) != null ? e : n;
  }
  function NC() {
    const t = ut(!1),
      e = ha();
    return (
      e &&
        la(() => {
          t.value = !0;
        }, e),
      t
    );
  }
  function zC(t) {
    const e = NC();
    return rt(() => (e.value, !!t()));
  }
  function DC(t, e, n = {}) {
    const { root: r, rootMargin: o = "0px", threshold: s = 0, window: i = LC, immediate: a = !0 } = n,
      l = zC(() => i && "IntersectionObserver" in i),
      c = rt(() => {
        const g = Op(t);
        return (Array.isArray(g) ? g : [g]).map(hi).filter(MC);
      });
    let u = po;
    const d = ut(a),
      f = l.value
        ? Se(
            () => [c.value, hi(r), d.value],
            ([g, m]) => {
              if ((u(), !d.value || !g.length)) return;
              const y = new IntersectionObserver(e, { root: hi(m), rootMargin: o, threshold: s });
              g.forEach((w) => w && y.observe(w)),
                (u = () => {
                  y.disconnect(), (u = po);
                });
            },
            { immediate: a, flush: "post" },
          )
        : po,
      h = () => {
        u(), f(), (d.value = !1);
      };
    return (
      PC(h),
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
  function FC(t = () => {}) {
    "requestIdleCallback" in window
      ? window.requestIdleCallback(t)
      : setTimeout(() => {
          Uo(t);
        }, 300);
  }
  const BC = {
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
      const { stop: i } = DC(
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
          FC(() => {
            (e.value = !0), t.unrender || i();
          }),
        { targetEl: n, shouldRender: e, fixedMinHeight: r }
      );
    },
  };
  function UC(t, e, n, r, o, s) {
    return (
      P(),
      L(
        "div",
        { ref: "targetEl", style: rn(`min-height:${r.fixedMinHeight ? r.fixedMinHeight : n.minHeight}px`) },
        [r.shouldRender ? De(t.$slots, "default", { key: 0 }) : Pt("", !0)],
        4,
      )
    );
  }
  const VC = xp(BC, [["render", UC]]),
    HC = { class: "flex flex-col gap-3 h-full" },
    qC = { class: "card-title flex justify-between" },
    KC = { class: "gap-2 text-right" },
    WC = { class: "flex flex-col gap-2 overflow-auto" },
    GC = ["data-annotation"],
    ZC = { class: "flex justify-end gap-2" },
    JC = Lt({
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
          P(),
          L("div", HC, [
            R("div", qC, [
              f[7] || (f[7] = R("div", { class: "flex-grow" }, "Aangepaste Annotaties", -1)),
              R("div", KC, [
                R(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[0] || (f[0] = (h) => s("modified")) },
                  " Selecteer alle aangepaste ",
                ),
                R(
                  "button",
                  { class: "btn btn-xs btn-outline text-gray-500", onClick: f[1] || (f[1] = (h) => s("original")) },
                  " Selecteer alle originele ",
                ),
              ]),
            ]),
            R("ul", WC, [
              (P(!0),
              L(
                lt,
                null,
                Ut(
                  d.modifiedAnnotations,
                  (h) => (
                    P(),
                    L(
                      "li",
                      { key: h.id, "data-annotation": h.id, ref_for: !0, ref: `annotation-${h.id}` },
                      [
                        st(
                          VC,
                          null,
                          {
                            default: Oe(() => [
                              st(
                                $C,
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
                                  onHighlightAnnotation: f[2] || (f[2] = (g) => i("highlightAnnotation", g)),
                                  onModifyAnnotations: f[3] || (f[3] = (g) => i("modifyAnnotations", g)),
                                  onProcessesAnnotation: f[4] || (f[4] = (g) => i("processesAnnotation", g)),
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
                      GC,
                    )
                  ),
                ),
                128,
              )),
            ]),
            f[8] || (f[8] = R("hr", null, null, -1)),
            R("div", ZC, [
              R(
                "button",
                { class: "btn", onClick: f[5] || (f[5] = (h) => i("needsAttention")) },
                "Text heeft extra aandacht nodig",
              ),
              R("button", { class: "btn", onClick: f[6] || (f[6] = (h) => i("reviewDone")) }, "Text Verwerkt"),
              R("button", { class: "btn", onClick: a }, "Bevestig Selectie"),
            ]),
          ])
        );
      },
    }),
    QC = { class: "grid grid-cols-2 gap-2 overflow-auto h-full" },
    YC = { class: "border border-x-0 border-y-0 border-l-0 border-r-2 border-dashed" },
    XC = Lt({
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
            n("processesAnnotation", Va(l.annotation, ["id", "start", "end"]));
          },
          a = function (l) {
            n("showAnnotation", l.annotation);
          };
        return (l, c) => (
          P(),
          L("div", QC, [
            R("div", YC, [
              c[0] || (c[0] = R("div", { class: "text-lg font-bold" }, "Originele Tekst", -1)),
              st(F(To), { annotations: l.originalAnnotations, lines: l.textLines }, null, 8, ["annotations", "lines"]),
            ]),
            R("div", null, [
              c[1] || (c[1] = R("div", { class: "text-lg font-bold" }, "Verwerkte Tekst", -1)),
              st(
                F(To),
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
    tR = [
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
    eR = { class: "flex justify-center items-center gap-4" },
    nR = ["for"],
    rR = ["id", "value"],
    oR = { class: "pl-2 label-text" },
    sR = Lt({
      __name: "TypeFilter",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(t) {
        const e = Fh(t, "modelValue");
        return (n, r) => (
          P(),
          L("div", eR, [
            r[1] || (r[1] = R("div", { class: "font-bold" }, "Filter:", -1)),
            (P(!0),
            L(
              lt,
              null,
              Ut(
                F(tR),
                (o) => (
                  P(),
                  L("div", { key: o, class: "form-control" }, [
                    R(
                      "label",
                      { for: o, class: "label cursor-pointer" },
                      [
                        Vo(
                          R(
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
                            rR,
                          ),
                          [[da, e.value]],
                        ),
                        R("span", oR, bt(o), 1),
                      ],
                      8,
                      nR,
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
  class qa {
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
  const iR = (t) => `${t.type}-${t.start}-${t.end}`;
  class aR {
    constructor(e, n) {
      Z(this, "name", "Duplicate rule");
      Z(this, "duplicateRuleSet", new Map());
      Z(this, "duplicates", new Map());
      (this.text = e), (this.annotations = n), this.mapAnnotations(n);
    }
    addAnnotationToRules(e) {
      const n = iR(e),
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
  class lR {
    constructor(e) {
      Z(this, "name");
      Z(this, "text");
      (this.name = "sanitize_annotation_rule"), (this.text = e);
    }
    apply(e) {
      const n = Xe(e);
      e.start < 0 && (n.start = 0), e.end >= this.text.length && (n.end = this.text.length - 1);
      const r = e.start != n.start || e.end != n.end;
      return { annotation: n, rule_applied: r };
    }
  }
  class hn {
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
        r(Va(this, "rules", "alwaysApplyFirstRule", "stopWhenRuleApplied"));
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
  class cR {
    constructor(e, n) {
      Z(this, "name");
      Z(this, "text");
      Z(this, "max_shift");
      (this.name = "tokenize_rule"), (this.text = e), (this.max_shift = n);
    }
    apply(e) {
      const n = Xe(e);
      let r = this.max_shift;
      r < 0 && (r = 2 + Math.floor((e.end - e.start) / 3));
      const o = cC(this.text, e.start, e.end, r);
      return o.modified && ((n.start = o.start), (n.end = o.end)), { annotation: n, rule_applied: o.modified };
    }
  }
  const uR = (t, e, n) => {
      if (!n || !n.id) return console.warn("No property object", e, n), null;
      const r = e
        .substring(t.length + 1)
        .split(/(?=[A-Z])/)
        .map((o) => `${o.charAt(0).toUpperCase()}${o.slice(1)}`)
        .join(" ");
      return { id: n.id, id_name: n.id_name, label: r, name: n.name };
    },
    fR = (t, e) =>
      Object.keys(e)
        .map((n) => uR(t, n, e[n]))
        .filter((n) => !!n),
    hR = (t, e) => {
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
        color: Tp[i],
        hasOverride: t.hasOverride,
        properties: fR(i, t.properties),
      };
    };
  class dR {
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
          s = lC(this.text, o, e.start, e.end, this.maxShift);
        s.modified && ((r = !0), (n = Xe(e)), (n.start = s.start), (n.end = s.end));
      }
      return { annotation: n, rule_applied: r };
    }
  }
  class pR {
    constructor(e) {
      Z(this, "languageRuleSet");
      Z(this, "typographyRuleSet");
      Z(this, "orthographyRuleSet");
      Z(this, "lexisRuleSet");
      Z(this, "morphoSyntacticalRuleSet");
      Z(this, "handshiftRuleSet");
      Z(this, "defaultRuleSet");
      this.text = e;
      const n = new cR(e, 3),
        r = new dR(e, 3),
        o = new lR(e);
      (this.languageRuleSet = new hn("language", [o, n], !0, !0)),
        (this.typographyRuleSet = new hn("typography", [o, r, n], !0, !0)),
        (this.orthographyRuleSet = new hn("orthography", [o, n, r], !0, !0)),
        (this.lexisRuleSet = new hn("lexis", [o, n], !0, !0)),
        (this.morphoSyntacticalRuleSet = new hn("morpho_syntactical", [o, r, n], !0, !1)),
        (this.handshiftRuleSet = new hn("handshift", [o, n], !0, !0)),
        (this.defaultRuleSet = new hn("default", [o], !0, !1));
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
        const r = hR(e, this.text);
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
        r.rule_applied && (o.color = _C[o.type]),
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
  class gR {
    constructor() {
      Z(this, "annotationRepository", new qa());
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
      (this.duplicateRule = new aR(this.text, n)),
        e.forEach((r) => {
          r.duplicates = this.duplicateRule.hasDuplicate(r.processed);
        });
    }
    createRulesSet(e) {
      (this.text = e), (this.annotationRuleSets = new pR(e));
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
      i || (o.modified = Xe(s)), (o.modified.end = n), (o.modified.start = e);
    }
    async confirmAnnotationLocal(e, n) {
      const r = this.annotations.value.get(e),
        o = Xe(n === "modified" ? r.modified : r.original);
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
  const di = (t) => {
      const e = Number(t);
      return isNaN(e) ? null : e;
    },
    mR = 25,
    Co = Qo("searchStore", () => {
      const t = es(),
        e = ts(),
        n = ut(di(t.query.pageSize) ?? mR),
        r = ut(di(t.query.page) ?? 1),
        o = ut(Date.now()),
        s = ut({ orderBy: t.query.orderBy ?? "title", ascending: t.query.ascending === "0" ? 0 : 1 }),
        i = { project: [3] };
      Object.entries(t.query).forEach(([_, x]) => {
        ["pageSize", "page"].includes(_) || (Array.isArray(x) ? (i[_] = x.map((k) => k)) : (i[_] = [x]));
      });
      const a = ut(Xe(i)),
        l = new qa(),
        c = mn(async () => l.filters()),
        u = mn(async () => {
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
        g = (_) => ((a.value = Xe(_)), e.replace({ query: { ...t.query, ..._ } })),
        m = rt(() => Math.ceil(f.value / n.value)),
        y = (_ = 1) => {
          const x = di(_) ?? 1;
          let k = x < 1 ? 1 : x;
          const E = m.value;
          return (
            k > E && (k = E),
            (r.value = k),
            console.log("change page", m, k),
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
          maxPage: m,
          refresh: () => (o.value = Date.now()),
          changePage: y,
          onSearch: g,
          changeOrder: w,
        }
      );
    }),
    Cp = (t, e) => {
      const n = (t ?? 0) / e;
      return Math.ceil(n);
    },
    Vi = Qo("paginationStore", () => {
      const t = Co(),
        e = Rp(),
        n = new qa(),
        r = ut([]),
        o = async () => {
          const { ascending: h, orderBy: g } = t.sort,
            m = await n.paginate(t.filterValues, t.page, t.pageSize, g, h);
          return (r.value = m), m;
        },
        s = mn(async () => {
          const { ascending: h, orderBy: g } = t.sort;
          return (await n.paginate(t.filterValues, 1, 1, g, h))[0];
        }),
        i = mn(async () => {
          const { ascending: h, orderBy: g } = t.sort;
          return (await n.listTexts(t.filterValues, 1, 1, g, h)).count;
        }),
        a = mn(async () => {
          const { ascending: h, orderBy: g } = t.sort;
          return (await n.paginate(t.filterValues, i.value, 1, g, h))[0];
        });
      mn(() => o());
      const l = rt(() => r.value.findIndex((h) => h === e.id));
      return {
        firstId: s,
        lastId: a,
        next: async () => {
          const h = l.value;
          let g = h < 0 ? void 0 : r.value[h + 1];
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
          const h = l.value,
            g = r.value.length;
          let m = h < 0 ? void 0 : r.value[h - 1];
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
          const h = Cp(i.value, t.pageSize);
          await e.changeId(a.value), await t.changePage(h);
        },
      };
    }),
    vR = (t, e, n, r) => {
      var s;
      if ((r && e.duplicates.length < 1) || (n && (!e.modified || e.hasOverride))) return !1;
      const o = ((s = e == null ? void 0 : e.original) == null ? void 0 : s.type) ?? "";
      return t.length === 0 || t.includes(o);
    },
    Rf = (t, e) => (t.processed.start < e.processed.start ? -1 : 1),
    yR = (t, e, n, r) => (t.length === 0 && !n && !r ? e.sort(Rf) : e.filter((s) => vR(t, s, n, r)).sort(Rf)),
    Rp = Qo("annotationStore", () => {
      const t = es(),
        e = ts(),
        n = ut(Number(t.params.id)),
        r = mn(async () => {
          console.log("id", n.value);
          const p = new gR();
          if (!n.value) return null;
          try {
            const S = await p.getAnnotation(n.value);
            return { annotationStore: p, ...S };
          } catch (S) {
            console.error(S), console.error("Fout bij het laden van de annotaties");
          } finally {
            console.log("Total processed annotations", g.value.length),
              console.log("Total modified annotations", m.value.length),
              console.log("Total original annotations", h.value.length);
          }
          return null;
        }),
        o = rt(() => {
          var p;
          return ((p = r.value) == null ? void 0 : p.text) || "";
        }),
        s = rt(() => {
          var p;
          return ((p = r.value) == null ? void 0 : p.annotationStore) || null;
        }),
        i = rt(() => {
          var p;
          return ((p = r.value) == null ? void 0 : p.flags) || { needs_attention: !1, review_done: !1 };
        }),
        a = ut(!1),
        l = ut(!1),
        c = ut([]),
        u = rt(() => {
          var p, S;
          return ((S = (p = s.value) == null ? void 0 : p.annotationValues) == null ? void 0 : S.value) || [];
        }),
        d = rt(() => yR(c.value, u.value, a.value, l.value)),
        f = rt(() => u.value.length),
        h = rt(() => d.value.map((p) => p.original)),
        g = rt(() => d.value.map((p) => p.processed)),
        m = rt(() => d.value.filter((p) => !!p.modified || p.duplicates.length > 1)),
        y = rt(() => d.value.filter((p) => p.duplicates.length > 1)),
        w = rt(() => u.value.filter((p) => p.hasOverride || !p.modified).length),
        _ = rt(() => uC(o.value)),
        x = rt(() => new fC(o.value)),
        k = rt(() => {
          const p = r.value;
          return !p || p.id !== n.value;
        }),
        E = (p) => ((n.value = p), e.push({ name: "annotation", params: { id: p }, query: t.query }));
      return (
        Se(
          () => t.params.id,
          (p, S) => {
            const C = Number(p);
            C && n.value !== C && E(C);
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
          processedAnnotations: g,
          modifiedAnnotations: m,
          selectedFilters: c,
          duplicates: y,
          totalAnnotations: f,
          flags: i,
          totalProcessedAnnotation: w,
          debugRule: (p) => {
            var S;
            return (S = s.value) == null ? void 0 : S.debugRule(p);
          },
          changeShowModified: (p) => (a.value = p),
          changeShowOnlyDuplicates: (p) => (l.value = p),
          processAnnotation: (p) => {
            var S;
            return (S = s.value) == null ? void 0 : S.processAnnotation(p);
          },
          modifyAnnotation: (p) => {
            var S;
            return (S = s.value) == null ? void 0 : S.modifyAnnotation(p);
          },
          confirmAnnotation: (p, S) => {
            var C;
            return (C = s.value) == null ? void 0 : C.confirmAnnotation(p, S);
          },
          confirmAnnotations: (p) => {
            var S;
            return (S = s.value) == null ? void 0 : S.confirmAnnotations(p);
          },
          deleteAnnotation: (p) => {
            var S;
            return (S = s.value) == null ? void 0 : S.deleteAnnotation(p);
          },
          needsAttention: async () => {
            var p;
            await ((p = s.value) == null ? void 0 : p.needsAttention()), Vi().next(), Co().refresh();
          },
          reviewDone: async () => {
            var p;
            await ((p = s.value) == null ? void 0 : p.reviewDone()), Vi().next(), Co().refresh();
          },
        }
      );
    }),
    bR = { class: "flex flex-col gap-2 align-items" },
    _R = { class: "flex gap-1 items-center" },
    wR = ["href"],
    xR = Lt({
      __name: "SearchPaginator",
      props: { activeId: {} },
      setup(t) {
        const e = Vi(),
          n = es();
        return (r, o) => {
          const s = kh("router-link");
          return (
            P(),
            L("div", bR, [
              R("div", _R, [
                R(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).firstId }]),
                    onClick: o[0] || (o[0] = (...i) => F(e).toFirst && F(e).toFirst(...i)),
                  },
                  [st(F(BS), { class: "h-3" })],
                  2,
                ),
                R(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs ", { "btn-disabled": r.activeId === F(e).firstId }]),
                    onClick: o[1] || (o[1] = (...i) => F(e).previous && F(e).previous(...i)),
                  },
                  [st(F(VS), { class: "h-3" })],
                  2,
                ),
                R(
                  "a",
                  {
                    href: `https://dev.evwrit.ugent.be/text/${r.activeId}`,
                    target: "_blank",
                    class: "text-sm w-16 text-center hover:underline",
                  },
                  bt(r.activeId),
                  9,
                  wR,
                ),
                R(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).lastId }]),
                    onClick: o[2] || (o[2] = (...i) => F(e).next && F(e).next(...i)),
                  },
                  [st(F(HS), { class: "h-3" })],
                  2,
                ),
                R(
                  "button",
                  {
                    class: Nt(["btn btn-ghost btn-icon btn-xs", { "btn-disabled": r.activeId === F(e).lastId }]),
                    onClick: o[3] || (o[3] = (...i) => F(e).toLast && F(e).toLast(...i)),
                  },
                  [st(F(US), { class: "h-3" })],
                  2,
                ),
              ]),
              st(
                s,
                { class: "link btn-ghost btn-icon", to: { name: "search", query: F(n).query } },
                { default: Oe(() => o[4] || (o[4] = [Be(" Terug naar zoeken ")])), _: 1 },
                8,
                ["to"],
              ),
            ])
          );
        };
      },
    }),
    kR = Lt({
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
                F(To),
                {
                  annotations: [e.annotation],
                  lines: F(Ha)(e.textLines, e.annotation.start, e.annotation.end).lines,
                  "allow-edit": !1,
                },
                null,
                8,
                ["annotations", "lines"],
              ),
              st(Ap, { annotation: e.annotation }, null, 8, ["annotation"]),
            ],
            64,
          )
        );
      },
    }),
    SR = { class: "navbar bg-base-100" },
    AR = { class: "flex-none" },
    ER = { class: "flex flex-row gap-4 items-center" },
    TR = { class: "label cursor-pointer gap-2" },
    OR = ["checked"],
    CR = { class: "label-text" },
    RR = { class: "label cursor-pointer gap-2" },
    jR = ["checked"],
    $R = { class: "label-text" },
    PR = { class: "label cursor-pointer gap-2" },
    IR = { class: "flex flex-row gap-2" },
    MR = { key: 0, class: "badge badge-success badge-outline" },
    LR = { key: 1, class: "badge badge-error badge-outline" },
    NR = { key: 0, class: "absolute left-1/2 top-1/2 loading loading-bars loading-lg" },
    zR = Lt({
      __name: "AnnotationView",
      setup(t) {
        const e = ut(!1),
          n = ut(!1),
          r = ut(!1),
          o = ut([]),
          s = rt(() => {
            const y = o.value;
            return y.length === 0
              ? null
              : y
                  .filter((_) => !l.modifiedAnnotations.some((x) => x.id === _))
                  .map((_) => l.originalAnnotations.find((x) => x.id === _) ?? null)
                  .filter((_) => _ !== null);
          }),
          i = () => {
            (o.value = []), (e.value = !e.value), l.changeShowModified(e.value);
          },
          a = () => {
            (o.value = []), (n.value = !n.value), l.changeShowOnlyDuplicates(n.value);
          },
          l = Rp(),
          c = (y) => {
            l.processAnnotation(y);
          },
          u = (y) => {
            l.modifyAnnotation(y);
          },
          d = (y, w) => {
            l.confirmAnnotation(y, w);
          },
          f = (y) => {
            l.deleteAnnotation(y);
          },
          h = (y) => {
            l.confirmAnnotations(y);
          },
          g = (y) => {
            var w;
            (o.value = []),
              y &&
                (console.group("Debugging applied rules: "),
                l.debugRule(y),
                console.groupEnd(),
                (w = document.querySelector(`[data-annotation="${y.id}"]`)) == null || w.scrollIntoView(),
                (o.value = [y.id]));
          },
          m = (y) => {
            var x, k, E;
            const w = Ha(l.textLines, y.start, y.end).lines,
              _ = (k = (x = w == null ? void 0 : w[0]) == null ? void 0 : x.gutter) == null ? void 0 : k.trim();
            _ &&
              ((E = Array.from(document.querySelectorAll(".gutter.text")).find((z) => {
                var V;
                return ((V = z.textContent) == null ? void 0 : V.trim()) === _;
              })) == null ||
                E.scrollIntoView());
          };
        return (y, w) => (
          P(),
          L(
            lt,
            null,
            [
              R("div", SR, [
                st(xR, { "active-id": F(l).id }, null, 8, ["active-id"]),
                R("div", AR, [
                  st(
                    sR,
                    {
                      modelValue: F(l).selectedFilters,
                      "onUpdate:modelValue": w[0] || (w[0] = (_) => (F(l).selectedFilters = _)),
                    },
                    null,
                    8,
                    ["modelValue"],
                  ),
                ]),
              ]),
              R(
                "div",
                { class: Nt(["flex p-1 gap-1 viewer", { "opacity-30": F(l).loading }]) },
                [
                  R(
                    "div",
                    { class: Nt(["p-4 border flex flex-col", { "w-1/2": r.value, "w-2/3": !r.value }]) },
                    [
                      R("div", ER, [
                        R("label", TR, [
                          R(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: e.value, onClick: i },
                            null,
                            8,
                            OR,
                          ),
                          R(
                            "span",
                            CR,
                            " Enkel Gewijzigde annotaties (" + bt(F(l).modifiedAnnotations.length) + ")",
                            1,
                          ),
                        ]),
                        R("label", RR, [
                          R(
                            "input",
                            { type: "checkbox", class: "toggle toggle-sm", checked: n.value, onClick: a },
                            null,
                            8,
                            jR,
                          ),
                          R("span", $R, " Enkel Duplicaten (" + bt(F(l).duplicates.length) + ")", 1),
                        ]),
                        R("label", PR, [
                          Vo(
                            R(
                              "input",
                              {
                                type: "checkbox",
                                class: "toggle toggle-sm",
                                "onUpdate:modelValue": w[1] || (w[1] = (_) => (r.value = _)),
                              },
                              null,
                              512,
                            ),
                            [[da, r.value]],
                          ),
                          w[2] || (w[2] = R("span", { class: "label-text" }, "Toon metadata", -1)),
                        ]),
                      ]),
                      st(
                        XC,
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
                  R(
                    "div",
                    { class: Nt([" border p-4", { "w-1/3": !r.value, "w-1/2": r.value }]) },
                    [
                      (P(!0),
                      L(
                        lt,
                        null,
                        Ut(
                          s.value,
                          (_) => (
                            P(),
                            L("div", { class: "card border mb-2 p-2", key: _.id }, [
                              st(kR, { annotation: _, "text-lines": F(l).textLines }, null, 8, [
                                "annotation",
                                "text-lines",
                              ]),
                            ])
                          ),
                        ),
                        128,
                      )),
                      R("div", IR, [
                        R(
                          "div",
                          null,
                          " Verwerkte annotaties: " +
                            bt(F(l).totalProcessedAnnotation) +
                            "/" +
                            bt(F(l).totalAnnotations),
                          1,
                        ),
                        F(l).flags.review_done ? (P(), L("div", MR, "Text verwerkt")) : Pt("", !0),
                        F(l).flags.needs_attention ? (P(), L("div", LR, "Aandacht vereist")) : Pt("", !0),
                      ]),
                      st(
                        JC,
                        {
                          modifiedAnnotations: F(l).modifiedAnnotations,
                          "text-lines": F(l).textLines,
                          highlightAnnotationIds: o.value,
                          "show-metadata": r.value,
                          snapper: F(l).snapper,
                          onConfirmAnnotation: d,
                          onDeleteAnnotation: f,
                          onConfirmAnnotations: h,
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
                  F(l).loading ? (P(), L("span", NR)) : Pt("", !0),
                ],
                2,
              ),
            ],
            64,
          )
        );
      },
    }),
    DR = { class: "table" },
    FR = ["onClick"],
    BR = { class: "flex justify-between" },
    UR = { class: "flex-grow" },
    VR = { class: "" },
    HR = {
      key: 0,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    qR = {
      key: 1,
      class: "h-4",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    KR = {
      key: 2,
      class: "h-3",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    WR = ["onClick"],
    GR = { key: 0 },
    ZR = {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "{1.5}",
      stroke: "currentColor",
      class: "w-4 m-auto",
    },
    JR = { key: 1 },
    QR = { class: "flex justify-around py-2" },
    YR = { class: "join" },
    XR = ["onClick"],
    tj = Lt({
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
          s = (h, g = !1) => {
            const m = h;
            return { page: m, label: m, disabled: g, key: h };
          },
          i = (h) => {
            var k, E, z, V;
            const g = Cp(h.count, h.pageSize);
            if (g < 1) return [];
            const m = 14,
              y = g < m ? g : m;
            let w = 1;
            g > m && ((w = h.activePage - m / 2), w < 1 ? (w = 1) : w + m > g && (w = g - m + 1));
            const _ = (H) => ({ page: 0, label: "...", disabled: !0, key: H }),
              x = Array.from({ length: y }).map((H, X) => s(X + w));
            ((k = x[0]) == null ? void 0 : k.page) > 2 && x.unshift(_(-1)),
              ((E = x[0]) == null ? void 0 : E.page) !== 1 && x.unshift(s(1)),
              ((z = x[x.length - 1]) == null ? void 0 : z.page) < g - 1 && x.push(_(-2)),
              ((V = x[x.length - 1]) == null ? void 0 : V.page) !== g && x.push(s(g)),
              (o.value = x.flat());
          };
        la(() => {
          i(r);
        }),
          wh(() => {
            i(r);
          });
        const a = e,
          l = (h) => {
            a("changePage", h);
          },
          c = ts(),
          u = es(),
          d = (h) => {
            c.push({ name: "annotation", params: { id: h.id }, query: u.query });
          },
          f = (h) => {
            let g = 1;
            r.sort.orderBy === h.id && (g = r.sort.ascending === 0 ? 1 : 0), a("changeOrder", h.id, g);
          };
        return (h, g) => (
          P(),
          L(
            lt,
            null,
            [
              R("table", DR, [
                R("thead", null, [
                  R("tr", null, [
                    (P(),
                    L(
                      lt,
                      null,
                      Ut(n, (m) =>
                        R(
                          "th",
                          { key: m.id, onClick: (y) => f(m), class: "cursor-pointer" },
                          [
                            R("span", BR, [
                              R("span", UR, bt(m.label), 1),
                              R("button", VR, [
                                h.sort.orderBy !== m.id
                                  ? (P(),
                                    L(
                                      "svg",
                                      HR,
                                      g[0] ||
                                        (g[0] = [
                                          R(
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
                                    ? (P(),
                                      L(
                                        "svg",
                                        qR,
                                        g[1] ||
                                          (g[1] = [
                                            R(
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
                                      ? (P(),
                                        L(
                                          "svg",
                                          KR,
                                          g[2] ||
                                            (g[2] = [
                                              R(
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
                          FR,
                        ),
                      ),
                      64,
                    )),
                  ]),
                ]),
                R("tbody", null, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(
                      h.data,
                      (m) => (
                        P(),
                        L(
                          "tr",
                          { key: m.id, class: "hover hover:cursor-pointer", onClick: (y) => d(m) },
                          [
                            (P(),
                            L(
                              lt,
                              null,
                              Ut(n, (y) =>
                                R(
                                  "td",
                                  { key: y.id, class: Nt({ "text-center": y.type === "boolean" }) },
                                  [
                                    y.type === "boolean"
                                      ? (P(),
                                        L("span", GR, [
                                          m[y.id]
                                            ? (P(),
                                              L(
                                                "svg",
                                                ZR,
                                                g[3] ||
                                                  (g[3] = [
                                                    R(
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
                                      : (P(), L("span", JR, bt(m[y.id]), 1)),
                                  ],
                                  2,
                                ),
                              ),
                              64,
                            )),
                          ],
                          8,
                          WR,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
              R("div", QR, [
                R("div", YR, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(
                      o.value,
                      (m) => (
                        P(),
                        L(
                          "button",
                          {
                            key: m.key,
                            class: Nt([
                              "join-item btn btn-xs btn-outline w-8",
                              { "btn-active": m.page === h.activePage, "btn-disabled": m.disabled },
                            ]),
                            onClick: (y) => l(m.page),
                          },
                          bt(m.label),
                          11,
                          XR,
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
    ej = {
      key: 0,
      class: "dropdown dropdown-bottom border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center",
    },
    nj = { tabindex: "0", role: "button", class: "h-full w-full" },
    rj = { tabindex: "0", class: "dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow" },
    oj = { class: "form-control" },
    sj = ["value"],
    ij = { key: 1 },
    aj = { class: "border w-full rounded px-2 py-1 text-sm min-h-12 flex items-center" },
    lj = { class: "w-full" },
    cj = ["selected", "value", "onClick"],
    uj = Lt({
      __name: "SearchField",
      props: tm(
        { title: {}, id: {}, multi: { type: Boolean }, filterValues: {} },
        { modelValue: {}, modelModifiers: {} },
      ),
      emits: ["update:modelValue"],
      setup(t) {
        const e = t,
          n = Fh(t, "modelValue"),
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
              L("div", ej, [
                R("div", nj, [
                  Be(bt(s.title) + ": ", 1),
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(r.value, (a) => (P(), L("span", { class: "badge badge-ghost m-1", key: a.id }, bt(a.name), 1))),
                    128,
                  )),
                ]),
                R("ul", rj, [
                  (P(!0),
                  L(
                    lt,
                    null,
                    Ut(
                      s.filterValues,
                      (a) => (
                        P(),
                        L("li", { key: a.id }, [
                          R("label", oj, [
                            Vo(
                              R(
                                "input",
                                {
                                  value: a.id,
                                  "onUpdate:modelValue": i[0] || (i[0] = (l) => (n.value = l)),
                                  type: "checkbox",
                                  class: "checkbox checkbox-sm",
                                },
                                null,
                                8,
                                sj,
                              ),
                              [[da, n.value]],
                            ),
                            R("span", null, bt(a.name), 1),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ]))
            : (P(),
              L("div", ij, [
                R("label", aj, [
                  R("div", lj, bt(s.title) + ":", 1),
                  R(
                    "select",
                    { class: "select s w-full max-w-xs", onChange: i[1] || (i[1] = (a) => o(a)) },
                    [
                      (P(!0),
                      L(
                        lt,
                        null,
                        Ut(s.filterValues, (a) => {
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
                              bt(a.name),
                              9,
                              cj,
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
    fj = { class: "p-2 flex flex-col gap-2" },
    hj = { class: "grid grid-cols-2 gap-2" },
    dj = { class: "flex gap-2 items-center" },
    pj = {
      class: "input input-sm input-bordered border w-64 rounded px-2 py-1 text-sm min-h-12 flex items-center gap-2",
    },
    gj = ["disabled"],
    mj = Lt({
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
          o = ut(Object.keys(r).reduce((d, f) => ((d[f] = []), d), {})),
          s = ut(null),
          i = rt(() =>
            Object.values(r).map((d) => {
              var w, _, x;
              const f = d.id,
                h =
                  ((_ = (w = n.searchFilters) == null ? void 0 : w.find((k) => k.id === f)) == null
                    ? void 0
                    : _.value) ?? [],
                g = ((x = n.filters) == null ? void 0 : x[f]) ?? [],
                m = ut(h),
                y = d.type || null;
              return (o.value[d.id] = h), { ...d, type: y, model: m, filterValues: g };
            }),
          ),
          a = e,
          l = () => {
            const d = o.value;
            a("search", d);
          },
          c = ts(),
          u = () => {
            c.push({ name: "annotation", params: { id: s.value } });
          };
        return (d, f) => (
          P(),
          L("div", fj, [
            R("div", hj, [
              (P(!0),
              L(
                lt,
                null,
                Ut(
                  i.value,
                  (h) => (
                    P(),
                    L(
                      "div",
                      { key: h.id, class: Nt({ "col-span-2": h.multi }) },
                      [
                        st(
                          uj,
                          {
                            id: h.id,
                            title: h.title,
                            filterValues: h.filterValues,
                            multi: h.multi,
                            modelValue: o.value[h.id],
                            "onUpdate:modelValue": (g) => (o.value[h.id] = g),
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
            R("div", null, [
              R("button", { class: "btn btn-sm", onClick: l }, [
                st(F(nf), { class: "h-6" }),
                f[1] || (f[1] = Be(" Search ")),
              ]),
            ]),
            R("div", dj, [
              R("label", pj, [
                f[2] || (f[2] = R("span", null, "EvwritId: ", -1)),
                Vo(
                  R(
                    "input",
                    { "onUpdate:modelValue": f[0] || (f[0] = (h) => (s.value = h)), type: "number", class: "grow" },
                    null,
                    512,
                  ),
                  [[uv, s.value]],
                ),
              ]),
              R(
                "button",
                { class: "btn btn-sm", onClick: u, disabled: !s.value },
                [st(F(nf), { class: "h-6" }), f[3] || (f[3] = Be(" Zoek op id "))],
                8,
                gj,
              ),
            ]),
          ])
        );
      },
    }),
    vj = { class: "m-auto max-w-2xl" },
    yj = Lt({
      __name: "SearchView",
      setup(t) {
        const e = Co();
        return (n, r) => (
          P(),
          L("div", vj, [
            st(mj, { searchFilters: F(e).searchFilters, filters: F(e).filters, onSearch: F(e).onSearch }, null, 8, [
              "searchFilters",
              "filters",
              "onSearch",
            ]),
            r[0] || (r[0] = R("hr", null, null, -1)),
            st(
              tj,
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
  function Ka() {
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
  let Pn = Ka();
  function jp(t) {
    Pn = t;
  }
  const Sr = { exec: () => null };
  function xt(t, e = "") {
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
    bj = /^(?:[ \t]*(?:\n|$))+/,
    _j = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    wj = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Ur = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    xj = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    $p = /(?:[*+-]|\d{1,9}[.)])/,
    Pp = xt(
      /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    )
      .replace(/bull/g, $p)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .getRegex(),
    Wa = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    kj = /^[^\n]+/,
    Ga = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    Sj = xt(
      /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
      .replace("label", Ga)
      .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
      .getRegex(),
    Aj = xt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, $p)
      .getRegex(),
    ds =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Za = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    Ej = xt(
      "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
      "i",
    )
      .replace("comment", Za)
      .replace("tag", ds)
      .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
      .getRegex(),
    Ip = xt(Wa)
      .replace("hr", Ur)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ds)
      .getRegex(),
    Tj = xt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", Ip)
      .getRegex(),
    Ja = {
      blockquote: Tj,
      code: _j,
      def: Sj,
      fences: wj,
      heading: xj,
      hr: Ur,
      html: Ej,
      lheading: Pp,
      list: Aj,
      newline: bj,
      paragraph: Ip,
      table: Sr,
      text: kj,
    },
    jf = xt(
      "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    )
      .replace("hr", Ur)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("blockquote", " {0,3}>")
      .replace("code", "(?: {4}| {0,3}	)[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
      .replace("tag", ds)
      .getRegex(),
    Oj = {
      ...Ja,
      table: jf,
      paragraph: xt(Wa)
        .replace("hr", Ur)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("table", jf)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", ds)
        .getRegex(),
    },
    Cj = {
      ...Ja,
      html: xt(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace("comment", Za)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: Sr,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: xt(Wa)
        .replace("hr", Ur)
        .replace(
          "heading",
          ` *#{1,6} *[^
]`,
        )
        .replace("lheading", Pp)
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .replace("|tag", "")
        .getRegex(),
    },
    Mp = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    Rj = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    Lp = /^( {2,}|\\)\n(?!\s*$)/,
    jj = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    Vr = new RegExp("\\p{P}\\p{S}", "u"),
    $j = xt(/^((?![*_])[\spunctuation])/, "u")
      .replace(/punctuation/g, Vr)
      .getRegex(),
    Pj = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    Ij = xt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u")
      .replace(/punct/g, Vr)
      .getRegex(),
    Mj = xt(
      "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
      "gu",
    )
      .replace(/punct/g, Vr)
      .getRegex(),
    Lj = xt(
      "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
      "gu",
    )
      .replace(/punct/g, Vr)
      .getRegex(),
    Nj = xt(/\\([punct])/, "gu")
      .replace(/punct/g, Vr)
      .getRegex(),
    zj = xt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        "email",
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
      )
      .getRegex(),
    Dj = xt(Za).replace("(?:-->|$)", "-->").getRegex(),
    Fj = xt(
      "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    )
      .replace("comment", Dj)
      .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
      .getRegex(),
    Ro = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    Bj = xt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
      .replace("label", Ro)
      .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
      .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
      .getRegex(),
    Np = xt(/^!?\[(label)\]\[(ref)\]/)
      .replace("label", Ro)
      .replace("ref", Ga)
      .getRegex(),
    zp = xt(/^!?\[(ref)\](?:\[\])?/)
      .replace("ref", Ga)
      .getRegex(),
    Uj = xt("reflink|nolink(?!\\()", "g").replace("reflink", Np).replace("nolink", zp).getRegex(),
    Qa = {
      _backpedal: Sr,
      anyPunctuation: Nj,
      autolink: zj,
      blockSkip: Pj,
      br: Lp,
      code: Rj,
      del: Sr,
      emStrongLDelim: Ij,
      emStrongRDelimAst: Mj,
      emStrongRDelimUnd: Lj,
      escape: Mp,
      link: Bj,
      nolink: zp,
      punctuation: $j,
      reflink: Np,
      reflinkSearch: Uj,
      tag: Fj,
      text: jj,
      url: Sr,
    },
    Vj = {
      ...Qa,
      link: xt(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", Ro)
        .getRegex(),
      reflink: xt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", Ro)
        .getRegex(),
    },
    Hi = {
      ...Qa,
      escape: xt(Mp).replace("])", "~|])").getRegex(),
      url: xt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
        .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    Hj = {
      ...Hi,
      br: xt(Lp).replace("{2,}", "*").getRegex(),
      text: xt(Hi.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    },
    so = { normal: Ja, gfm: Oj, pedantic: Cj },
    cr = { normal: Qa, gfm: Hi, breaks: Hj, pedantic: Vj },
    qj = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    $f = (t) => qj[t];
  function _e(t, e) {
    if (e) {
      if (te.escapeTest.test(t)) return t.replace(te.escapeReplace, $f);
    } else if (te.escapeTestNoEncode.test(t)) return t.replace(te.escapeReplaceNoEncode, $f);
    return t;
  }
  function Pf(t) {
    try {
      t = encodeURI(t).replace(te.percentDecode, "%");
    } catch {
      return null;
    }
    return t;
  }
  function If(t, e) {
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
  function ur(t, e, n) {
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
  function Kj(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let n = 0;
    for (let r = 0; r < t.length; r++)
      if (t[r] === "\\") r++;
      else if (t[r] === e[0]) n++;
      else if (t[r] === e[1] && (n--, n < 0)) return r;
    return -1;
  }
  function Mf(t, e, n, r, o) {
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
  function Wj(t, e, n) {
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
  class jo {
    constructor(e) {
      Z(this, "options");
      Z(this, "rules");
      Z(this, "lexer");
      this.options = e || Pn;
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
            : ur(
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
          o = Wj(r, n[3] || "", this.rules);
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
          const o = ur(r, "#");
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
          raw: ur(
            n[0],
            `
`,
          ),
        };
    }
    blockquote(e) {
      const n = this.rules.block.blockquote.exec(e);
      if (n) {
        let r = ur(
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
            const g = h,
              m =
                g.raw +
                `
` +
                r.join(`
`),
              y = this.blockquote(m);
            (i[i.length - 1] = y),
              (o = o.substring(0, o.length - g.raw.length) + y.raw),
              (s = s.substring(0, s.length - g.text.length) + y.text);
            break;
          } else if ((h == null ? void 0 : h.type) === "list") {
            const g = h,
              m =
                g.raw +
                `
` +
                r.join(`
`),
              y = this.list(m);
            (i[i.length - 1] = y),
              (o = o.substring(0, o.length - h.raw.length) + y.raw),
              (s = s.substring(0, s.length - g.raw.length) + y.raw),
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
            g = !f.trim(),
            m = 0;
          if (
            (this.options.pedantic
              ? ((m = 2), (d = f.trimStart()))
              : g
                ? (m = n[1].length + 1)
                : ((m = n[2].search(this.rules.other.nonSpaceChar)),
                  (m = m > 4 ? 1 : m),
                  (d = f.slice(m)),
                  (m += n[1].length)),
            g &&
              this.rules.other.blankLine.test(h) &&
              ((u +=
                h +
                `
`),
              (e = e.substring(h.length + 1)),
              (c = !0)),
            !c)
          ) {
            const _ = this.rules.other.nextBulletRegex(m),
              x = this.rules.other.hrRegex(m),
              k = this.rules.other.fencesBeginRegex(m),
              E = this.rules.other.headingBeginRegex(m),
              z = this.rules.other.htmlBeginRegex(m);
            for (; e; ) {
              const V = e.split(
                `
`,
                1,
              )[0];
              let H;
              if (
                ((h = V),
                this.options.pedantic
                  ? ((h = h.replace(this.rules.other.listReplaceNesting, "  ")), (H = h))
                  : (H = h.replace(this.rules.other.tabCharGlobal, "    ")),
                k.test(h) || E.test(h) || z.test(h) || _.test(h) || x.test(h))
              )
                break;
              if (H.search(this.rules.other.nonSpaceChar) >= m || !h.trim())
                d +=
                  `
` + H.slice(m);
              else {
                if (
                  g ||
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
              !g && !h.trim() && (g = !0),
                (u +=
                  V +
                  `
`),
                (e = e.substring(V.length + 1)),
                (f = H.slice(m));
            }
          }
          s.loose || (a ? (s.loose = !0) : this.rules.other.doubleBlankLine.test(u) && (a = !0));
          let y = null,
            w;
          this.options.gfm &&
            ((y = this.rules.other.listIsTask.exec(d)),
            y && ((w = y[0] !== "[ ] "), (d = d.replace(this.rules.other.listReplaceTask, "")))),
            s.items.push({ type: "list_item", raw: u, task: !!y, checked: w, loose: !1, text: d, tokens: [] }),
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
      const r = If(n[1]),
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
            If(l, i.header.length).map((c, u) => ({
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
          const i = ur(r.slice(0, -1), "\\");
          if ((r.length - i.length) % 2 === 0) return;
        } else {
          const i = Kj(n[2], "()");
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
          Mf(
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
        return Mf(r, s, r[0], this.lexer, this.rules);
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
            const m = h.slice(1, -1);
            return { type: "em", raw: h, text: m, tokens: this.lexer.inlineTokens(m) };
          }
          const g = h.slice(2, -2);
          return { type: "strong", raw: h, text: g, tokens: this.lexer.inlineTokens(g) };
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
        (this.options = e || Pn),
        (this.options.tokenizer = this.options.tokenizer || new jo()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      const n = { other: te, block: so.normal, inline: cr.normal };
      this.options.pedantic
        ? ((n.block = so.pedantic), (n.inline = cr.pedantic))
        : this.options.gfm && ((n.block = so.gfm), this.options.breaks ? (n.inline = cr.breaks) : (n.inline = cr.gfm)),
        (this.tokenizer.rules = n);
    }
    static get rules() {
      return { block: so, inline: cr };
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
          let g;
          this.options.extensions.startInline.forEach((m) => {
            (g = m.call({ lexer: this }, h)), typeof g == "number" && g >= 0 && (f = Math.min(f, g));
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
  class $o {
    constructor(e) {
      Z(this, "options");
      Z(this, "parser");
      this.options = e || Pn;
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
        s = Pf(e);
      if (s === null) return o;
      e = s;
      let i = '<a href="' + e + '"';
      return n && (i += ' title="' + _e(n) + '"'), (i += ">" + o + "</a>"), i;
    }
    image({ href: e, title: n, text: r }) {
      const o = Pf(e);
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
  class Ya {
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
      (this.options = e || Pn),
        (this.options.renderer = this.options.renderer || new $o()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new Ya());
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
  class Ar {
    constructor(e) {
      Z(this, "options");
      Z(this, "block");
      this.options = e || Pn;
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
  Z(Ar, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"]));
  class Gj {
    constructor(...e) {
      Z(this, "defaults", Ka());
      Z(this, "options", this.setOptions);
      Z(this, "parse", this.parseMarkdown(!0));
      Z(this, "parseInline", this.parseMarkdown(!1));
      Z(this, "Parser", ue);
      Z(this, "Renderer", $o);
      Z(this, "TextRenderer", Ya);
      Z(this, "Lexer", ce);
      Z(this, "Tokenizer", jo);
      Z(this, "Hooks", Ar);
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
            const s = this.defaults.renderer || new $o(this.defaults);
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
            const s = this.defaults.tokenizer || new jo(this.defaults);
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
            const s = this.defaults.hooks || new Ar();
            for (const i in r.hooks) {
              if (!(i in s)) throw new Error(`hook '${i}' does not exist`);
              if (["options", "block"].includes(i)) continue;
              const a = i,
                l = r.hooks[a],
                c = s[a];
              Ar.passThroughHooks.has(i)
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
  const Sn = new Gj();
  function _t(t, e) {
    return Sn.parse(t, e);
  }
  _t.options = _t.setOptions = function (t) {
    return Sn.setOptions(t), (_t.defaults = Sn.defaults), jp(_t.defaults), _t;
  };
  _t.getDefaults = Ka;
  _t.defaults = Pn;
  _t.use = function (...t) {
    return Sn.use(...t), (_t.defaults = Sn.defaults), jp(_t.defaults), _t;
  };
  _t.walkTokens = function (t, e) {
    return Sn.walkTokens(t, e);
  };
  _t.parseInline = Sn.parseInline;
  _t.Parser = ue;
  _t.parser = ue.parse;
  _t.Renderer = $o;
  _t.TextRenderer = Ya;
  _t.Lexer = ce;
  _t.lexer = ce.lex;
  _t.Tokenizer = jo;
  _t.Hooks = Ar;
  _t.parse = _t;
  _t.options;
  _t.setOptions;
  _t.use;
  _t.walkTokens;
  _t.parseInline;
  ue.parse;
  ce.lex;
  const Zj = { class: "m-4 prose" },
    Jj = ["innerHTML"],
    Qj = Lt({
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
          (n, r) => (P(), L("div", Zj, [R("div", { innerHTML: e.value }, null, 8, Jj)]))
        );
      },
    }),
    Yj = [
      { path: "/", name: "search", component: yj, meta: { title: "Zoeken" } },
      { path: "/docs", name: "docs", component: Qj, meta: { title: "Docs" } },
      { path: "/detail/:id", name: "annotation", component: zR, meta: { title: "Annotatie: {id}" } },
    ],
    Dp = Ay({ history: ny("/annotation_flow/"), routes: Yj });
  Dp.beforeEach((t) => {
    let e = t.meta.title ?? "";
    Object.entries(t.params ?? {}).forEach(([r, o]) => {
      e = e.replace(`{${r}}`, o.toString());
    });
    const n = "Evwrite Annotation Flow";
    window.document.title = `${n} - ${e}`;
  });
  const Fp = mv(Oy);
  Fp.use(_v()).use(Dp);
  Fp.mount("#app");
});
export default Xj();
