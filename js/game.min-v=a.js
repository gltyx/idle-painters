(function () {
    function Ea(a) {
        tb = a;
        t = tc[a];
        b.tutorial.lastClickEvent = "clickTab" + t;
        Fa();
        b.tutorial.lastClickEvent = ""
    }

    function Ga(a, c, d, e) {
        "undefined" === typeof c && (c = 0);
        "undefined" === typeof d && (d = 2);
        "undefined" === typeof e && (e = b.numberNotation);
        if ("sci" == e) {
            if (1E4 <= Math.abs(a)) return parseFloat(a).toPrecision(d + 1)
        } else
            for (e = Ha.length - 1; 0 <= e; e--) {
                var m = Math.pow(10, 3 * e + 3);
                if (Math.abs(a) >= .99999 * m) return 4 > e ? parseFloat(a / m).toFixed(d) + Ha[e] : parseFloat(a / m).toFixed(d) + " " + Ha[e]
            }
        return parseFloat(a).toFixed(c)
    }

    function uc(a) {
        if ("started" == a) g("AIAdOpened_" + J.getAdlId(), "Boosts", u);
        else if ("finished" == a) g("AIAdCompleted_" + J.getAdlId(), "Boosts", u), ub(), ba(!0);
        else if ("cancelled" == a || "error" == a) g("AIAdAbandoned_" + J.getAdlId(), "Boosts", u), u = ""
    }

    function Ia() {
        for (var a = 0, c = 0; c < ca; c++) 0 < b.pictureLevel[c] && (a += Ja(c) / da(c));
        return 1E3 + 900 * a
    }

    function vc(a) {
        u = a;
        Ka = !0
    }

    function wc() {
        return Ka
    }

    function xc() {
        return S() ? "观看广告以获得宝贵的提升" : "访问网站并点击任何游戏即可获得奖励"
    }

    function yc() {
        return u ?
            (S() ? "观看一个广告和 " : "访问一个网站 以及 点击任意游戏去 ") + La[u].dlgText() : ""
    }

    function zc() {
        return S() ? "观看一个广告" : "访问一个网站"
    }

    function Ac(a) {
        Ka = !1;
        a ? S() ? (g("Started", "Boosts", u), D.adsAvailable && z.mtx.showIncentivizedAd()) : (g("AIStarted_" + J.getAdlId(), "Boosts", u), J.openAdUrl()) : g("DialogCancel", "Boosts", u)
    }

    function ub() {
        u && (La[u].reward(), u = "")
    }

    function Ma(a) {
        return 0 < b.brushProps[a].strengthLevel
    }

    function vb(a) {
        return !Ma(a) && b.money >= B[a].price
    }

    function wb(a) {
        vb(a) && (b.money -= B[a].price,
            b.brushProps[a].strengthLevel = 1, 0 < a && g("Buy", "Upgrade", "Brush" + a))
    }

    function ea(a) {
        return b.brushProps[a].strength * b.achievementsMult[C.achClicker]
    }

    function xb(a) {
        return 400 > b.brushProps[a].strength ? 1 : Math.floor(b.brushProps[a].strength / 200)
    }

    function Bc(a) {
        return (b.brushProps[a].strength + xb(a)) * b.achievementsMult[C.achClicker]
    }

    function na(a) {
        return b.brushProps[a].consumption * ea(a)
    }

    function Cc(a) {
        return b.brushProps[a].consumption * B[a].consumptionUpgradeMult * ea(a)
    }

    function Na(a) {
        return B[a].strengthIncreasePrice(b.brushProps[a].strengthLevel +
            1)
    }

    function yb(a) {
        return b.money >= Na(a)
    }

    function Dc(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && yb(a); d++) b.money -= Na(a), b.brushProps[a].strengthLevel++, b.brushProps[a].strength += xb(a);
        g("Strength", "Upgrade", "Brush" + a, b.brushProps[a].strengthLevel)
    }

    function Oa(a) {
        return B[a].efficiencyIncreasePrice(b.brushProps[a].efficiencyLevel + 1)
    }

    function zb(a) {
        return (a = Oa(a)) ? b.money >= a : !1
    }

    function Ec(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && zb(a); d++) b.money -= Oa(a), b.brushProps[a].efficiencyLevel++,
            b.brushProps[a].consumption *= B[a].consumptionUpgradeMult;
        g("Efficiency", "Upgrade", "Brush" + a, b.brushProps[a].efficiencyLevel)
    }

    function Fc(a, b) {
        fa || (fa = !0, T = !1, U = a, b.get(Gc).then(function (a) {
            T = !0;
            Pa = a.data;
            a = (new Date).getTime() / 1E3;
            a = Math.max(.1, a - Pa);
            a < Hc || (U = Math.max(.1, U - a))
        }, function (a) {
            T = !0;
            Pa = 0
        }))
    }

    function Ab(a) {
        return Ic(M[a], "reqValue", b.achievementsLevel[a])
    }

    function Qa(a, c) {
        "undefined" === typeof c && (c = "");
        T = fa = !1;
        U = 0;
        null == ha && (ha = document.getElementById("canvas"), oa = ha.getContext("2d"), pa =
            document.getElementById("canvas-bottom"), Ra = pa.getContext("2d"), ha.width = v, ha.height = x, pa.width = v, pa.height = x);
        for (var d = b.currentBrush = 0; d < Jc; d++) b.brushProps[d] = {
            strengthLevel: 0,
            strength: B[d].strength,
            efficiencyLevel: 1,
            consumption: B[d].consumption
        };
        wb(0);
        for (d = 0; d < N; d++) K[d] = !1, b.workerLastActiveState[d] = !1, b.workerParams[d] = {
            active: !1,
            posX: f[d].startPosX,
            posY: f[d].startPosY,
            lastActionTime: 0,
            strengthLevel: 0,
            strength: f[d].strength,
            drawIntervalLevel: 1,
            drawInterval: f[d].drawInterval,
            efficiencyLevel: 1,
            consumption: f[d].consumption,
            areaSizeLevel: 1,
            areaSize: f[d].areaSize,
            expStrengthLevel: 0,
            expStrength: 0
        };
        b.currentPicture = 0;
        b.paintMax = qa;
        b.paint = qa;
        b.paintSpeed = 1;
        b.achPaintState = 1;
        for (d = 0; d < ca; d++) b.pictureLevel[d] = -1, b.managerHired[d] = !1, b.pictureSellTime[d] = !1, b.picturesFinished[d] = !1, b.picturesLayer[d] = -1, ra[d] = null;
        b.pictureLevel[0] = 0;
        b.picturesLayer[0] = 0;
        sa();
        V = !1;
        O = b.pictureAutoImproveIntervalSec;
        b.pictureAutoImproveIntervalSec = Bb;
        for (d = 0; d < Cb; d++) b.achievementsLevel[d] = 0, b.achievementsMult[d] =
            M[d].mult ? 1 : 0, b.achievementStats[d] = 0;
        b.tutorial = {
            enabled: !0,
            activeId: -1,
            finishedIds: [],
            lastClickEvent: ""
        };
        ta = {
            picturesSold: {
                name: "累计卖出的画"
            },
            money: {
                name: "累计赚取的金钱"
            },
            paintSpent: {
                name: "累计使用颜料"
            },
            pixels: {
                name: "累计画的像素"
            },
            pixelsClick: {
                name: "累计手动画的像素"
            },
            pixelsWorker0: {
                name: "累计画的像素通过 " + f[0].name
            },
            pixelsWorker1: {
                name: "累计画的像素通过 " + f[1].name
            },
            clicks: {
                name: "累计点击次数"
            },
            time: {
                name: "累计游戏时间"
            }
        };
        b.statistics = {};
        for (var e in ta) ta.hasOwnProperty(e) && (b.statistics[e] = 0);
        a || "ok" != Db(c) ? (b.lastUpdateTime = (new Date).getTime(), b.money = 0) : c || (Sa = !0, Eb = b.money, Fb = b.lastUpdateTime);
        if (b.pictureMapWidth != v || b.pictureMapHeight != x)
            for (sa(), e = 0; e < N; e++) b.workerParams[e].posX = f[e].startPosX, b.workerParams[e].posY = f[e].startPosY;
        Ta();
        window.parent && -1 != window.parent.location.hostname.toString().toLowerCase().indexOf("kongregate.com") || J || (e = new Kc, e.init(uc), J = e)
    }

    function Lc(a) {
        b.numberNotation = a;
        g("NumNotation", "Settings",
            a)
    }

    function ua(a) {
        var b = Math.floor(a / 3600).toString(),
            d = Math.floor(a % 3600 / 60).toString();
        a = (a % 60).toString();
        1 == a.length && (a = "0" + a);
        1 == d.length && (d = "0" + d);
        1 == b.length && (b = "0" + b);
        return b + ":" + d + ":" + a
    }

    function Ic(a, b, d) {
        var e = a[b],
            m = e.length;
        if (d < m) return e[d];
        a = a[b + "Fnc"];
        if (null !== a) return a(d);
        if (0 == m) return 0;
        if (1 == m) return e[0];
        a = e[m - 2];
        e = e[m - 1];
        return 0 == a ? e : e * Math.pow(e / a, d - m + 1)
    }

    function g(a, b, d, e, m) {
        b || (b = "Event");
        e && (e = parseInt(e, 10), e = isNaN(e) ? 0 : e);
        window.ga ? (a = {
                eventCategory: b,
                eventAction: a
            },
            d && (a.eventLabel = d), e && (a.eventValue = e), m && (a.nonInteraction = m), ga("send", "event", a)) : window._gaq && _gaq.push(["_trackEvent", b, a, d, e, m])
    }

    function S() {
        return z ? !0 : window.parent.kongregate ? (z = window.parent.kongregate, Gb(), z.services.addEventListener("login", Mc), z.mtx.addEventListener("adsAvailable", function (a) {
            D.adsAvailable = !0
        }), z.mtx.addEventListener("adsUnavailable", function (a) {
            D.adsAvailable = !1
        }), z.mtx.addEventListener("adOpened", function (a) {
            g("AdOpened", "Boosts", u)
        }), z.mtx.addEventListener("adCompleted",
            function (a) {
                g("AdCompleted", "Boosts", u);
                ub();
                ba(!0)
            }), z.mtx.addEventListener("adAbandoned", function (a) {
            g("AdAbandoned", "Boosts", u);
            u = ""
        }), z.mtx.initializeIncentivizedAds(), !0) : !1
    }

    function Mc(a) {
        Gb()
    }

    function Gb() {
        D.isGuest = z.services.isGuest();
        D.userId = z.services.getUserId();
        D.userName = z.services.getUsername();
        D.token = z.services.getGameAuthToken()
    }

    function Ua(a) {
        var b = 1 < a ? Math.log(a) / Nc : 0;
        return Math.max(0, Math.floor(a < b ? a : b))
    }

    function ia() {
        return b.paintMax * b.achievementsMult[C.achBucketSize]
    }

    function Va() {
        return b.paintSpeed *
            b.achievementsMult[C.achFillSpeed]
    }

    function Oc() {
        return (b.paintMax + 1E3) * b.achievementsMult[C.achBucketSize]
    }

    function Wa() {
        return b.paintMax
    }

    function Hb() {
        return b.money >= Wa()
    }

    function Pc(a) {
        "undefined" === typeof a && (a = 1);
        for (var c = 0; c < a && Hb(); c++) b.money -= Wa(), b.paintMax += 1E3;
        g("Capacity", "Upgrade", "PaintBucket", b.paintMax / 1E3)
    }

    function Qc() {
        return (b.paintSpeed + 1) * b.achievementsMult[C.achFillSpeed]
    }

    function Xa() {
        return 100 * b.paintSpeed
    }

    function Ib() {
        return b.money >= Xa()
    }

    function Rc(a) {
        "undefined" ===
        typeof a && (a = 1);
        for (var c = 0; c < a && Ib(); c++) b.money -= Xa(), b.paintSpeed += 1;
        g("FillSpeed", "Upgrade", "PaintBucket", b.paintSpeed)
    }

    function Jb() {
        return 0 < b.achievementsLevel[C.achQualityImprover]
    }

    function Sc() {
        return V
    }

    function Tc() {
        V = !V;
        O = b.pictureAutoImproveIntervalSec
    }

    function Uc() {
        return Math.ceil(O)
    }

    function I() {
        return b.picturesFinished[b.currentPicture]
    }

    function G() {
        return p[b.currentPicture].strengthMult
    }

    function E() {
        var a = b.pictureLevel[b.currentPicture];
        return p[b.currentPicture].complexity * (10 >=
            a ? a + 1 : 10 + Math.floor(Math.pow(1.5, a - 9)))
    }

    function A() {
        return b.picturesLayer[b.currentPicture]
    }

    function W() {
        return b.picturesFillCnt[b.currentPicture]
    }

    function Vc(a) {
        0 > b.pictureLevel[a] || (a != b.currentPicture && (ra[b.currentPicture] = b.pictureMap.slice(), b.currentPicture = a, null == ra[a] ? sa() : b.pictureMap = ra[a].slice(), va(A())), Kb())
    }

    function Kb() {
        P ? Ea(0) : setTimeout(Kb, 100)
    }

    function va(a) {
        -1 == a && (a = 0);
        A() != a && (b.picturesFinished[b.currentPicture] = !1, b.picturesLayer[b.currentPicture] = a, sa());
        Ta();
        Lb()
    }

    function sa() {
        var a =
            E() / Wc;
        b.pictureMap = [];
        for (var c = 0; c < x; c++) {
            b.pictureMap[c] = [];
            for (var d = 0; d < v; d++) b.pictureMap[c][d] = a
        }
        b.pictureMapWidth = v;
        b.pictureMapHeight = x;
        b.picturesFillCnt[b.currentPicture] = 0
    }

    function X(a, b) {
        return "pictures/" + (-2 == b ? "lock.jpg" : 0 > b ? "canvas.jpg" : p[a].file + Mb[b] + ".jpg")
    }

    function Ta() {
        P = !1;
        var a = new Image;
        a.onload = function () {
            oa.drawImage(a, 0, 0, v, x);
            if (I()) Ra.drawImage(a, 0, 0, v, x), P = !0;
            else {
                var c = new Image;
                c.onload = function () {
                    Ra.drawImage(c, 0, 0, v, x);
                    for (var a = 0; a < x; a++)
                        for (var e = 0; e < v; e++) 0 == b.pictureMap[a][e] &&
                            oa.clearRect(e, a, 1, 1);
                    P = !0
                };
                c.src = X(b.currentPicture, A())
            }
        };
        a.src = I() ? X(b.currentPicture, A()) : X(b.currentPicture, A() - 1)
    }

    function Nb() {
        P ? Ta() : setTimeout(Nb, 10)
    }

    function Ob(a, c, d, e, m) {
        if (Ya) return !1;
        Ya = !0;
        var H = !1;
        if (!I() && P && b.paint >= e && W() < E()) {
            H = !0;
            b.paint -= e;
            b.achievementStats[C.achBucketSize] += e;
            b.statistics.paintSpent += e;
            d *= G();
            for (var n, h, Pb = a, f = c; 0 < d;) {
                a = Pb;
                c = f;
                var l = a,
                    q = c,
                    k = a,
                    r = c,
                    w = 3;
                h = E() - W() + (L - A() - 1) * E();
                n = E() - W();
                e = E();
                if (0 == m && d >= h) d -= h, b.picturesLayer[b.currentPicture] = L - 1, b.picturesFillCnt[b.currentPicture] =
                    e, b.statistics.pixels += h / G();
                else if (0 == m && d >= n) d -= n, b.picturesFillCnt[b.currentPicture] = e, b.statistics.pixels += n / G(), c = Math.floor(d / e), 0 < c && (a = e * c, d -= a, c = A() + c, b.picturesLayer[b.currentPicture] = c, b.statistics.pixels += a / G());
                else {
                    do {
                        if (0 <= a && 0 <= c && a < v && c < x && 0 < b.pictureMap[c][a])
                            if (n = b.pictureMap[c][a] - d, 0 < n) {
                                b.picturesFillCnt[b.currentPicture] += d;
                                b.pictureMap[c][a] = n;
                                b.statistics.pixels += d / G();
                                d = 0;
                                break
                            } else b.picturesFillCnt[b.currentPicture] += b.pictureMap[c][a], d = -n, b.statistics.pixels += b.pictureMap[c][a] /
                                G(), b.pictureMap[c][a] = 0, oa.clearRect(a, c, 1, 1);
                        if (0 == w) 0 > c || a == k || a == Za ? (a = k, c = Math.max(q + 1, 0), w++) : a++;
                        else if (1 == w) a > Za || c == r || c == $a ? (a = Math.min(k - 1, Za), c = r, w++) : c++;
                        else if (2 == w) c > $a || a == l || 0 == a ? (a = l, c = Math.min(r - 1, $a), w++) : a--;
                        else if (3 == w)
                            if (0 > a || c == q || 0 == c) {
                                if (l--, q--, k++, r++, w = 0, a = Math.max(l, 0), c = q, 0 < m && Pb - l > m) {
                                    H = Math.floor(d / G());
                                    d = 0;
                                    break
                                }
                            } else c--
                    } while (0 <= l || 0 <= q || k < v || r < x)
                }
                if (0 < d || W() >= e) A() < L - 1 ? va(A() + 1) : (0 < d && (H = Math.floor(d / G()), d = 0), b.pictureLevel[b.currentPicture]++, b.picturesFinished[b.currentPicture] = !0, 10 == b.pictureLevel[b.currentPicture] && b.achievementStats[C.achQualityImprover]++, Qb(), Nb(), g("Improved", "Workshop", "Picture" + b.currentPicture, b.pictureLevel[b.currentPicture]))
            }
        }
        Ya = !1;
        return H
    }

    function Db(a, c) {
        "undefined" === typeof a && (a = "");
        "undefined" === typeof c && (c = !1);
        try {
            var d = a ? a : window.localStorage[Rb];
            if (d) {
                var e = LZString.decompressFromBase64(d);
                if (e) {
                    e = JSON.parse(e);
                    if (!c) {
                        if (e.saveVer != Sb && 0 == e.saveVer) {
                            e.saveVer = 1;
                            ab = !0;
                            e.brushProps[1].consumption /= 5;
                            for (var m, H, n, h, g = 2, k = 3, l = 0; l < ca; l++)
                                if (n =
                                    e.pictureLevel[l], 14 < n || 12 <= l && 1 < n) {
                                    m = (n + 1) * (n + 2) / 2;
                                    12 <= l ? (h = 2, H = 6, m = Math.floor(m * g / k), g *= 2, k *= l - 8) : (h = 14, H = 123);
                                    for (; m > H;) h++, H += 10 >= h ? h + 1 : 10 + Math.floor(Math.pow(1.5, h - 9));
                                    m < H && h--;
                                    e.pictureLevel[l] = h
                                }
                        }
                        b = e;
                        Y || (Y = d)
                    }
                    return "ok"
                }
            }
            return "empty"
        } catch (f) {
            return "error"
        }
    }

    function ba(a) {
        a && (bb = wa = 0);
        if (Z && (a = (new Date).getTime(), a >= bb && a >= wa)) {
            Z = !1;
            Tb = a;
            bb = a + cb;
            wa = a + Xc;
            a = JSON.stringify(b);
            var c = a.length;
            xa && c > db && (db = c);
            workerCompress.postMessage(a)
        }
    }

    function Yc(a) {
        !1 === b.pictureSellTime[a] && (b.pictureSellTime[a] =
            0, g("ManualSell", "Shop", "Picture" + a))
    }

    function Ja(a) {
        var c = b.pictureLevel[a];
        return 0 < c ? (1 + .25 * (c - 1)) * p[a].sellPrice : 0
    }

    function da(a) {
        return p[a].sellTime * (12 - Math.floor(Math.log(b.pictureLevel[a]) / Math.LN2)) / 12
    }

    function Zc(a) {
        return 2 > b.pictureLevel[a] ? 2 : Math.pow(2, Math.floor(Math.log(b.pictureLevel[a]) / Math.LN2) + 1)
    }

    function $c(a) {
        return 2 > b.pictureLevel[a] ? 0 : Math.pow(2, Math.floor(Math.log(b.pictureLevel[a]) / Math.LN2))
    }

    function eb() {
        return b.tutorial.enabled
    }

    function ja() {
        return eb() && -1 != b.tutorial.activeId
    }

    function ka() {
        return ja() ? aa[b.tutorial.activeId] : null
    }

    function Ub() {
        var a = ka();
        return null != a && a.activeTabName && t != a.activeTabName
    }

    function ad() {
        var a = ka();
        return null == a ? "" : Ub() ? "点击 " + cnText(a.activeTabName) + " 菜单。" : a.text
    }

    function bd() {
        var a = ka();
        return null == a ? !1 : a.continueButton && !Ub()
    }

    function cd(a) {
        return ja() && aa[b.tutorial.activeId].name == a && aa[b.tutorial.activeId].highlightElements
    }

    function k(a) {
        return -1 < b.tutorial.finishedIds.indexOf(a)
    }

    function dd() {
        var a = ka();
        return null != a && a.highlightElements
    }

    function ed() {
        Vb()
    }

    function Wb(a) {
        b.tutorial.enabled = !1;
        a ? g("ClickSkip", "Tutorial", "SkipOnStep" + b.tutorial.activeId, b.tutorial.activeId) : g("Finish", "Tutorial", "FullTutorial")
    }

    function Vb(a) {
        var c;
        "undefined" === typeof a ? (c = ka(), a = b.tutorial.activeId) : c = aa[a];
        null != c && (c.activateOnce && (b.tutorial.finishedIds[a] = c.name), b.tutorial.activeId = -1, a == Xb - 1 ? Wb(!1) : Fa())
    }

    function Yb(a) {
        var c = aa[a];
        if (ja()) c.finishFnc() && (g("FinishStep", "Tutorial", c.name, a), Vb(a));
        else if (c.activateFnc()) return b.tutorial.activeId =
            a, !0;
        return !1
    }

    function Fa() {
        if (eb())
            if (ja()) Yb(b.tutorial.activeId);
            else
                for (var a = 0; a < Xb && (a in b.tutorial.finishedIds || !Yb(a)); a++);
    }

    function la(a) {
        return 0 < b.workerParams[a].strengthLevel
    }

    function Zb(a) {
        return !la(a) && b.money >= f[a].price
    }

    function fd(a) {
        Zb(a) && (b.money -= f[a].price, b.workerParams[a].strengthLevel = 1, g("Buy", "Upgrade", "Worker" + a))
    }

    function ma(a) {
        return b.workerParams[a].strength
    }

    function gd(a) {
        return b.workerParams[a].strength + f[a].strengthIncreaseStep
    }

    function fb(a) {
        return b.workerParams[a].consumption *
            ma(a)
    }

    function hd(a) {
        return fb(a) / $b(a)
    }

    function id(a) {
        return b.workerParams[a].consumption * f[a].consumptionUpgradeMult * ma(a)
    }

    function gb(a) {
        return f[a].strengthIncreasePrice(b.workerParams[a].strengthLevel + 1)
    }

    function ac(a) {
        return b.money >= gb(a)
    }

    function jd(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && ac(a); d++) b.money -= gb(a), b.workerParams[a].strengthLevel++, b.workerParams[a].strength += f[a].strengthIncreaseStep;
        g("Strength", "Upgrade", "Worker" + a, b.workerParams[a].strengthLevel)
    }

    function $b(a) {
        return b.workerParams[a].drawInterval
    }

    function kd(a) {
        return b.workerParams[a].drawInterval * f[a].drawIntervalUpgradeMult
    }

    function hb(a) {
        return f[a].drawIntervalUpgradePrice(b.workerParams[a].drawIntervalLevel + 1)
    }

    function bc(a) {
        return b.money >= hb(a)
    }

    function ld(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && bc(a); d++) b.money -= hb(a), b.workerParams[a].drawIntervalLevel++, b.workerParams[a].drawInterval *= f[a].drawIntervalUpgradeMult;
        g("DrawInterval", "Upgrade", "Worker" + a, b.workerParams[a].drawIntervalLevel)
    }

    function ib(a) {
        return f[a].consumptionUpgradePrice(b.workerParams[a].efficiencyLevel +
            1)
    }

    function cc(a) {
        return b.money >= ib(a)
    }

    function md(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && cc(a); d++) b.money -= ib(a), b.workerParams[a].efficiencyLevel++, b.workerParams[a].consumption *= f[a].consumptionUpgradeMult;
        g("Efficiency", "Upgrade", "Worker" + a, b.workerParams[a].efficiencyLevel)
    }

    function dc(a) {
        return b.workerParams[a].areaSize
    }

    function nd(a) {
        return b.workerParams[a].areaSize + f[a].areaSizeIncreaseStep
    }

    function jb(a) {
        return f[a].areaSizeIncreasePrice(b.workerParams[a].areaSizeLevel + 1)
    }

    function ec(a) {
        return 0 < dc(a) ? b.money >= jb(a) : !1
    }

    function od(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && ec(a); d++) b.money -= jb(a), b.workerParams[a].areaSizeLevel++, b.workerParams[a].areaSize += f[a].areaSizeIncreaseStep, b.workerParams[a].areaSize >= Q && (b.workerParams[a].areaSize = 0, 0 < f[a].expStrength && (b.workerParams[a].expStrength = f[a].expStrength, b.workerParams[a].expStrengthLevel = 1));
        g("AreaSize", "Upgrade", "Worker" + a, b.workerParams[a].areaSizeLevel)
    }

    function kb(a) {
        return 0 < b.workerParams[a].expStrengthLevel
    }

    function lb(a) {
        return b.workerParams[a].expStrength
    }

    function pd(a) {
        return b.workerParams[a].expStrength + f[a].expStrengthIncreaseStep
    }

    function mb(a) {
        return f[a].expStrengthIncreasePrice(b.workerParams[a].expStrengthLevel + 1)
    }

    function fc(a) {
        return b.money >= mb(a)
    }

    function qd(a, c) {
        "undefined" === typeof c && (c = 1);
        for (var d = 0; d < c && fc(a); d++) b.money -= mb(a), b.workerParams[a].expStrengthLevel++, b.workerParams[a].expStrength += f[a].expStrengthIncreaseStep;
        g("ExpStrength", "Upgrade", "Worker" + a, b.workerParams[a].expStrengthLevel)
    }

    function rd(a) {
        return "pictures/" + f[a].icon
    }

    function gc(a) {
        la(a) && (b.workerParams[a].active = !b.workerParams[a].active, b.workerLastActiveState[a] = b.workerParams[a].active, b.workerParams[a].active && (b.workerParams[a].lastActionTime = 0))
    }

    function ya(a) {
        b.workerParams[a].active || gc(a)
    }

    function Qb() {
        for (var a = 0; a < N; a++) b.workerParams[a].active = !1
    }

    function Lb() {
        for (var a = 0; a < N; a++) b.workerParams[a].active = b.workerLastActiveState[a]
    }

    function sd(a) {
        if (la(a) && (K[a] = !K[a], K[a]))
            for (var b = 0; b < N; b++) b != a && (K[b] = !1)
    }

    function hc(a, c, d) {
        c = Math.min(v - nb, Math.max(0, c));
        d = Math.min(x - nb, Math.max(0, d));
        var e = 0;
        c != b.workerParams[a].posX && (b.workerParams[a].posX = c, e += 1);
        d != b.workerParams[a].posY && (b.workerParams[a].posY = d, e += 2);
        return e
    }

    function ic(a) {
        return b.workerParams[a].posX
    }

    function jc(a) {
        return b.workerParams[a].posY
    }

    function kc(a) {
        return b.workerParams[a].posX + za
    }

    function lc(a) {
        return b.workerParams[a].posY + za
    }

    function td(a, b) {
        ob = b.screenX;
        pb = b.screenY;
        R = a;
        Aa = !0;
        ya(R)
    }

    function ud(a) {
        if (Aa) {
            var b = a.screenX -
                ob,
                d = a.screenY - pb;
            if (b = hc(R, ic(R) + b, jc(R) + d)) b & 1 && (ob = a.screenX), b & 2 && (pb = a.screenY);
            ya(R)
        }
    }

    function vd(a) {
        Aa && (Aa = !1, ya(R))
    }

    function mc(a, c) {
        if (c || xa) b.lastUpdateTime = (new Date).getTime() - 1E3 * a
    }

    function Kc() {
        var a = this;
        a.adsUrl = "http://r.almostidle.com/";
        a.storageClientId = "AiAdsClientId";
        a.clientId = 0;
        a.adId = 0;
        a.adlId = 0;
        a.getAdIntervalMsec = 1E4;
        a.checkStatusIntervalMsec = 1E3;
        a.adStatus = "";
        a.cbStatusChanged = null;
        a.getAdlId = function () {
            return a.adlId
        };
        a.isAdAvailable = function () {
            return 0 < a.adId
        };
        a.getAdId =
            function () {
                var b = function (b, c, m) {
                    if (m) {
                        if (0 == a.clientId || a.clientId != m.cid) a.clientId = m.cid, window.localStorage[a.storageClientId] = a.clientId;
                        a.adId = m.aid;
                        a.adlId = m.adlid
                    } else a.adId = 0;
                    0 == a.adId && setTimeout(a.getAdId, a.getAdIntervalMsec)
                };
                a.isAdAvailable() || wd(a.adsUrl + "get.php?cid=" + a.clientId, b)
            };
        a.checkAdStatus = function () {
            var b = function (b, c, m) {
                a.adStatus != m && (a.adStatus = m, null != a.cbStatusChanged && a.cbStatusChanged(m));
                "init" == m || "started" == m ? setTimeout(a.checkAdStatus, a.checkStatusIntervalMsec) :
                    (a.adId = 0, a.getAdId())
            };
            a.isAdAvailable() && nc(a.adsUrl + "info.php?aid=" + a.adId, b)
        };
        a.init = function (b) {
            a.cbStatusChanged = b;
            b = window.localStorage[a.storageClientId];
            "undefined" !== b && (a.clientId = b);
            a.getAdId()
        };
        a.getAdUrl = function () {
            return a.isAdAvailable() ? a.adsUrl + "open.php?aid=" + a.adId : ""
        };
        a.openAdUrl = function () {
            var b = a.getAdUrl();
            b && (window.open(b, "_blank"), a.checkAdStatus())
        }
    }

    function xd() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (a) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        return "undefined" !=
            typeof XMLHttpRequest ? new XMLHttpRequest : !1
    }

    function nc(a, b) {
        var d = xd();
        d.onreadystatechange = function () {
            4 == d.readyState && b(d.status, d.getAllResponseHeaders(), d.responseText)
        };
        d.open("GET", a + (-1 == a.indexOf("?") ? "?" : "&") + "rnd=" + Math.random());
        d.send(null)
    }

    function wd(a, b) {
        nc(a, function (a, e, m) {
            var g;
            try {
                g = JSON.parse(m)
            } catch (n) {
                g = {}
            }
            b(a, e, g)
        })
    }
    var F = angular.module("game", ["ngAnimate", "ngSanitize", "ui.bootstrap.m"]);
    F.controller("AchievementsController", function () {
        this.achievementList = M;
        this.achievementsLevel =
            function () {
                return b.achievementsLevel
            };
        this.achievementsMult = function () {
            return b.achievementsMult
        };
        this.achievementStats = function () {
            return b.achievementStats
        };
        this.getAchievementReq = Ab;
        this.isAchievementLevelCap = function (a) {
            return 0 < M[a].levelMax && M[a].levelMax == b.achievementsLevel[a]
        }
    });
    F.controller("DebugController", function () {
        this.isDebugEnabled = xa;
        this.skipTime = mc;
        this.idleExecTimeLast = function () {
            return Ba
        };
        this.idleExecTimeMax = function () {
            return qb
        };
        this.getPicImprAch = function () {
            for (var a = 0; 10 >
                a; a++) b.pictureLevel[a] = 10;
            b.achievementStats[C.achQualityImprover] = 10
        };
        this.addMoney = function (a) {
            b.money += a
        };
        this.saveSizeMax = function () {
            return db
        };
        this.savePackedSizeMax = function () {
            return rb
        }
    });
    F.controller("GameController", ["$scope", "$interval", "$http", function (a, c, d) {
        Qa();
        a.gameVer = oc;
        a.gameMouseDown = function (a) {
            wa = 0
        };
        a.isSmallCanvas = v < Q;
        a.money = function () {
            return b.money
        };
        a.isNewAchievementAvailable = function () {
            return Ca
        };
        a.paint = function () {
            return b.paint
        };
        a.paintMax = ia;
        a.paintSpeed = Va;
        a.brushList =
            B;
        a.currentBrushId = function () {
            return b.currentBrush
        };
        a.brushProps = function (a) {
            return b.brushProps[a]
        };
        a.isBrushBought = Ma;
        a.selectBrush = function (c) {
            a.isBrushBought(c) && (b.currentBrush = c)
        };
        a.getBrushStrength = ea;
        a.getBrushConsumption = na;
        a.doClickCanvas = function (c) {
            var d = c.offsetX;
            c = c.offsetY;
            var g = b.statistics.pixels,
                n = na(b.currentBrush);
            0 < b.currentBrush && n > b.paint && (a.selectBrush(0), n = na(b.currentBrush));
            Ob(d, c, ea(b.currentBrush), n, 0) && (b.achievementStats[C.achClicker]++, b.statistics.clicks++, b.statistics.pixelsClick +=
                b.statistics.pixels - g);
            for (g = 0; g < N; g++)
                if (K[g]) {
                    K[g] && (K[g] = !1, hc(g, d - za, c - za), ya(g));
                    break
                }
        };
        a.getCurrentPictureId = function () {
            return b.currentPicture
        };
        a.getPictureLevel = function (a) {
            return b.pictureLevel[a]
        };
        a.getFillCnt = function () {
            return W() / G()
        };
        a.getFillMax = function () {
            return E() / G()
        };
        a.isCurrentPictureFinished = I;
        a.doNextPictureLevel = function () {
            va(0);
            g("Improve", "Workshop", "Picture" + b.currentPicture, b.pictureLevel[b.currentPicture])
        };
        a.isPictureQualityImproverActive = Jb;
        a.isPictureAutoImproveActive =
            Sc;
        a.pictureAutoImproveSwitchState = Tc;
        a.pictureAutoImproveTimeRemain = Uc;
        a.workerList = f;
        a.workerParams = function () {
            return b.workerParams
        };
        a.workerSettingNewPos = function () {
            return b.workerSettingNewPos
        };
        a.isWorkerBought = la;
        a.getWorkerStrength = ma;
        a.getWorkerConsumption = fb;
        a.getWorkerConsumptionPerSec = hd;
        a.getWorkerDrawInterval = $b;
        a.getWorkerAreaSize = dc;
        a.getWorkerExpStrength = lb;
        a.getWorkerIconURL = rd;
        a.switchWorkerActivity = gc;
        a.startCancelChangingWorkerPos = sd;
        a.getWorkerPosX = ic;
        a.getWorkerPosY = jc;
        a.getWorkerCenterPosX =
            kc;
        a.getWorkerCenterPosY = lc;
        a.startWorkerMove = td;
        a.onWorkerMove = ud;
        a.stopWorkerMove = vd;
        a.isShowOfflineStats = function () {
            return Sa
        };
        a.offlineMoneyEarned = function () {
            return Math.max(0, b.money - Eb)
        };
        a.offlineTime = function () {
            return ua(Math.floor(Math.max(0, (new Date).getTime() - Fb) / 1E3))
        };
        a.hideOfflineStats = function () {
            Sa = !1
        };
        a.isShowChangeLog = function () {
            return ab
        };
        a.hideChangeLog = function () {
            ab = !1
        };
        a.kongregateInfo = function () {
            return D
        };
        a.boostList = La;
        a.isAdsAvailable = function () {
            var a = S();
            return a && D.adsAvailable ||
                !a && J.isAdAvailable()
        };
        a.showBoostDialog = vc;
        a.isBoostDialogVisible = wc;
        a.getBoostDialogHeader = xc;
        a.getBoostDialogText = yc;
        a.getBoostDialogButtonText = zc;
        a.closeBoostDialog = Ac;
        a.isTutorialEnabled = eb;
        a.isTutorialAnyStepActive = ja;
        a.tutorialGetActiveStepText = ad;
        a.tutorialShowContinueButton = bd;
        a.tutorialOnClickContinue = ed;
        a.isTutorialShowShadow = dd;
        a.isTutorialStepNameHighlight = cd;
        a.tutorialFinish = function () {
            Wb(!0)
        };
        a.saveText = "";
        a.isSaveTextVisible = !1;
        a.isSaveDone = function () {
            return Z
        };
        a.timeFromLastSave =
            function () {
                return Math.floor(((new Date).getTime() - Tb) / 1E3)
            };
        a.saveIconState = function () {
            var b = (new Date).getTime() - pc;
            if (Z) {
                if (3E3 < b) return a.isSaveTextVisible = !1, "glyphicon-floppy-disk";
                a.isSaveTextVisible = !0;
                a.saveText = "已保存!";
                return "glyphicon-floppy-saved"
            }
            a.isSaveTextVisible = !0;
            a.saveText = "Saving...";
            return "glyphicon-floppy-save"
        };
        a.saveGameParams = function () {
            ba(!0);
            g("Save", "Game")
        };
        c(function () {
            if (P) {
                var a;
                a = (new Date).getTime();
                var c = Math.max(.1, (a - b.lastUpdateTime) / 1E3);
                d && c > yd && (Fc(c, d),
                    c = 100);
                var k;
                fa && T ? (k = U, T = fa = !1, U = 0) : k = !1;
                !1 !== k && (c = k);
                b.lastUpdateTime = a;
                a = c;
                c = Math.ceil(a / qc);
                c > rc ? (c = rc, c = a / c) : c = qc;
                k = (new Date).getTime();
                do {
                    c > a && (c = a);
                    for (var n = c, h = void 0, f = void 0, p = void 0, l = !1, q = 0; q < Cb; q++) {
                        do
                            if (h = M[q], 0 == h.levelMax || b.achievementsLevel[q] < h.levelMax)
                                if (p = Ab(q), f = h.updateStatFnc, null !== f && (b.achievementStats[q] = f()), b.achievementStats[q] >= p) b.achievementsMult[q] *= h.mult, b.achievementsLevel[q]++, l = !0, g("Get", "Achievement", h.name, b.achievementsLevel[q]);
                                else break;
                        else break;
                        while (1)
                    }
                    Ca || (Ca = l);
                    b.paint < .05 * ia() && (b.achPaintState = 0);
                    b.paint += Va() * n;
                    h = n;
                    for (f = 0; f < ca; f++) b.managerHired[f] && !1 === b.pictureSellTime[f] ? b.pictureSellTime[f] = 0 : !1 !== b.pictureSellTime[f] && (b.pictureSellTime[f] += h, l = b.pictureSellTime[f], q = da(f), l >= q && (b.managerHired[f] ? (p = Math.floor(l / q), b.pictureSellTime[f] = l - q * p) : (p = 1, b.pictureSellTime[f] = !1), l = p * Ja(f), b.money += l, b.statistics.picturesSold += p, b.statistics.money += l));
                    h = !1;
                    (f = Jb() && n >= Da) && I() && (h = !0, n -= Da, Lb());
                    for (var p = n, y = l = void 0, r = void 0, w =
                            q = void 0, u = void 0, v = void 0, x = void 0, y = void 0, A = [], t = void 0, B = 0, t = N - 1; 0 <= t; t--) b.workerParams[t].active && A.push(t);
                    for (var F = A.length, t = 0; t < F; t++)
                        if (r = A[t], l = b.workerParams[r], l.lastActionTime += p, y = Math.floor(l.lastActionTime / l.drawInterval), 0 < y) {
                            l.lastActionTime -= l.drawInterval * y;
                            if (kb(r))
                                for (var D = Math.floor(y / Math.min(100, y)), w = 1; w <= y; w += D) {
                                    v = ma(r) * w + lb(r) * w * (w - 1) / 2;
                                    q = l.consumption * v;
                                    if (q > b.paint) {
                                        y = w - D;
                                        break
                                    }
                                    x = v;
                                    u = q
                                } else q = fb(r), w = Math.floor(b.paint / q), y = Math.min(y, w);
                            0 < y && (kb(r) ? l.strength += lb(r) *
                                y : (u = q * y, x = ma(r) * y), w = b.statistics.pixels, y = Ob(kc(r), lc(r), x, u, l.areaSize / zd), b.statistics["pixelsWorker" + r] += b.statistics.pixels - w, !0 !== y && 0 < y ? (r = u * y / x, b.paint += r, b.achievementStats[C.achBucketSize] -= r, b.statistics.paintSpent -= r, 0 < l.areaSize ? l.active = !1 : B += y) : 0 == l.areaSize && !1 === y && (B += x))
                        }
                    p = B * G();
                    if (f && 0 < p && I())
                        for (f = E() * L, l = 3579; 0 < l && p >= f;) l--, p -= f, b.pictureLevel[b.currentPicture]++, f = E() * L;
                    h && (Qb(), n += Da);
                    h = ia();
                    b.paint > h && (b.paint = h);
                    b.paint == h && 0 == b.achPaintState && (b.achPaintState = 1, b.achievementStats[C.achFillSpeed]++);
                    I() && (V && (O = Math.max(0, O - n)), V && 0 == O && (O = b.pictureAutoImproveIntervalSec, va(0)));
                    n = (new Date).getTime();
                    0 < sb && (b.statistics.time += Math.max(0, n - sb));
                    sb = n;
                    ba(!1);
                    n = (new Date).getTime();
                    n > sc && S() && (z.stats.submit("Pictures", b.statistics.picturesSold), z.stats.submit("Money", Ua(b.statistics.money)), z.stats.submit("Pixels", Ua(b.statistics.pixels)), sc = n + Ad);
                    a -= c
                } while (0 < a);
                Ba = ((new Date).getTime() - k) / 1E3;
                qb < Ba && (qb = Ba)
            }
            Fa()
        }, 100);
        a.init = 1;
        g("Version", "Game", oc)
    }]);
    F.controller("SettingsController", function () {
        this.getNumNotation =
            function () {
                return b.numberNotation
            };
        this.setNumNotation = Lc;
        this.pictureAutoImproveIntervalList = [];
        for (var a = Bd; a <= Cd; a++) this.pictureAutoImproveIntervalList.push(a);
        this.pictureAutoImproveIntervalSec = b.pictureAutoImproveIntervalSec;
        this.onPictureAutoImproveIntervalChange = function () {
            b.pictureAutoImproveIntervalSec = this.pictureAutoImproveIntervalSec
        };
        this.showHardResetDlg = !1;
        this.hardResetDlg = function () {
            this.showHardResetDlg = !0
        };
        this.hardResetConfirm = function (a) {
            a && (Qa(!0), g("HardReset", "Settings"));
            this.showHardResetDlg = !1
        };
        this.selectOnClick = function (a) {
            a.target.select()
        };
        this.serializedSaveStr = "";
        this.saveStrOk = !0;
        this.requestNewSave = !1;
        this.updateSaveStr = function () {
            this.serializedSaveStr = Y;
            this.saveStrOk = !0
        };
        this.waitingSaveData = function () {
            this.requestNewSave && Z && (this.updateSaveStr(), this.requestNewSave = !1);
            return this.requestNewSave
        };
        this.buttonGetSaveStr = function () {
            ba(!0);
            this.requestNewSave = !0;
            this.serializedSaveStr = "Preparing game data, please wait ...";
            g("Export", "Settings")
        };
        this.buttonLoadFromStr =
            function () {
                this.serializedSaveStr && "ok" == Db(this.serializedSaveStr, !0) ? (this.saveStrOk = !0, g("ImportOK", "Settings"), Qa(!1, this.serializedSaveStr)) : (this.saveStrOk = !1, g("ImportFail", "Settings"))
            }
    });
    F.controller("ShopController", function () {
        this.pictureList = p;
        this.getPictureUrl = function (a) {
            return X(a, L - 1)
        };
        this.getCanvasImgUrl = function (a) {
            return X(a, -1)
        };
        this.getLockImgUrl = function (a) {
            return X(a, -2)
        };
        this.isOpened = function (a) {
            return 0 < b.pictureLevel[a]
        };
        this.showSellButton = function (a) {
            return this.isOpened(a) &&
                !1 === b.pictureSellTime[a]
        };
        this.showSellProgress = function (a) {
            return !1 !== b.pictureSellTime[a]
        };
        this.canBuy = function (a) {
            return b.money >= p[a].buyPrice
        };
        this.isBought = function (a) {
            return -1 < b.pictureLevel[a]
        };
        this.isManaged = function (a) {
            return b.managerHired[a]
        };
        this.canHire = function (a) {
            return 0 < b.pictureLevel[a] && b.money >= p[a].managerPrice
        };
        this.getPictureSellPrice = Ja;
        this.getSellTime = function (a) {
            a = da(a);
            var b = Math.floor(a / 3600),
                d = "";
            0 < b && (d += b + " hour" + (1 < b ? "s" : ""));
            b = Math.floor(a % 3600 / 60);
            0 < b && (d += " " +
                b + " minute" + (1 < b ? "s" : ""));
            b = a % 60;
            0 < b && (d += " " + b + " second" + (1 < b ? "s" : ""));
            return d.trim()
        };
        this.getSellTimeFromStart = function (a) {
            return !1 === b.pictureSellTime[a] ? 0 : Math.floor(b.pictureSellTime[a])
        };
        this.getSellTimeFromStartFormatted = function (a) {
            return ua(this.getSellTimeFromStart(a))
        };
        this.getSellTimeTotal = function (a) {
            return da(a)
        };
        this.getSellTimeTotalFormatted = function (a) {
            return ua(da(a))
        };
        this.getPictureSpeedUpNextLevel = Zc;
        this.getPictureSpeedUpPrevLevel = $c;
        this.paintedPercentRemain = function () {
            return I() ?
                100 : Math.ceil(100 * (E() - W() + (L - A() - 1) * E()) / (E() * L))
        };
        this.doBuy = function (a) {
            this.canBuy(a) && !this.isBought(a) && (b.money -= p[a].buyPrice, b.pictureLevel[a] = 0, g("Buy", "Shop", "Picture" + a))
        };
        this.startSellingPicture = Yc;
        this.selectPicture = Vc;
        this.doHire = function (a) {
            this.canHire(a) && !this.isManaged(a) && (b.money -= p[a].managerPrice, b.managerHired[a] = !0, g("HireManager", "Shop", "Picture" + a))
        }
    });
    F.controller("StatisticsController", function () {
        this.statisticsList = function () {
            return ta
        };
        this.statistics = function () {
            return b.statistics
        };
        this.getActiveTime = function () {
            return ua(Math.floor(b.statistics.time / 1E3))
        };
        this.getBigValueRank = Ua
    });
    var tb = 0,
        t = "",
        tc = ["Workshop", "Shop", "Upgrades", "Achievements", "Settings"];
    F.controller("TabsController", function () {
        Ea(1);
        this.select = Ea;
        this.isSelected = function (a) {
            "Achievements" == t && (Ca = 0);
            return tb == a
        }
    });
    F.controller("UpgradeController", function () {
        this.canBuyBrush = vb;
        this.buyBrush = wb;
        this.getBrushStrength = ea;
        this.getBrushNextStrength = Bc;
        this.isBrushStrengthUpgradeable = yb;
        this.getBrushUpgradeStrengthPrice =
            Na;
        this.brushUpgradeStrength = Dc;
        this.getBrushConsumption = na;
        this.getBrushNextConsumption = Cc;
        this.getBrushUpgradeEfficiencyPrice = Oa;
        this.isBrushEfficiencyUpgradeable = zb;
        this.brushUpgradeEfficiency = Ec;
        this.getPaintBucketNextRealSize = Oc;
        this.getPaintBucketNextRealSpeed = Qc;
        this.getPaintBucketSizeUpgradePrice = Wa;
        this.getPaintBucketSpeedUpgradePrice = Xa;
        this.isPaintBucketSizeUpgradeable = Hb;
        this.isPaintBucketSpeedUpgradeable = Ib;
        this.upgradePaintBucketSize = Pc;
        this.upgradePaintBucketSpeed = Rc;
        this.canBuyWorker =
            Zb;
        this.buyWorker = fd;
        this.getWorkerNextStrength = gd;
        this.getWorkerUpgradeStrengthPrice = gb;
        this.isWorkerStrengthUpgradeable = ac;
        this.workerUpgradeStrength = jd;
        this.getWorkerDrawNextInterval = kd;
        this.getWorkerUpgradeDrawIntervalPrice = hb;
        this.isWorkerDrawIntervalUpgradeable = bc;
        this.workerUpgradeDrawInterval = ld;
        this.getWorkerNextConsumption = id;
        this.getWorkerUpgradeEfficiencyPrice = ib;
        this.isWorkerEfficiencyUpgradeable = cc;
        this.workerUpgradeEfficiency = md;
        this.getWorkerAreaNextSize = nd;
        this.getWorkerUpgradeAreaSizePrice =
            jb;
        this.isWorkerAreaSizeUpgradeable = ec;
        this.workerUpgradeAreaSize = od;
        this.isWorkerExpStrengthActive = kb;
        this.getWorkerExpStrengthNextSize = pd;
        this.getWorkerUpgradeExpStrengthPrice = mb;
        this.isWorkerExpStrengthUpgradeable = fc;
        this.workerUpgradeExpStrength = qd
    });
    var Ha = "K M B T Qa Qt Sx Sp Oc Nn Dc UDc DDc TDc QaDc QtDc SxDc SpDc OcDc NnDc Vi UVi DVi TVi QaVi QtVi SxVi SpVi OcVi NnVi Tg UTg DTg TTg QaTg QtTg SxTg SpTg OcTg NnTg Qd UQd DQd TQd QaQd QtQd SxQd SpQd OcQd NnQd Qq UQq DQq TQq QaQq QtQq SxQq SpQq OcQq NnQq Sg USg DSg TSg QaSg QiSg SxSg SpSg OcSg NnSg St USt DSt TSt QaSt QtSt SxSt SpSt OcSt NnSt Og UOg DOg TOg QaOg QtOg SxOg SpOg OcOg NnOg".split(" ");
    F.filter("bignum", function () {
        function a(a, b, e) {
            return Ga(a, b, e)
        }
        a.$stateful = !0;
        return a
    });
    var J = null,
        Ka = !1,
        u = "",
        Hc = 3600,
        Gc = "http://almostidle.com/timestamp.html",
        fa = !1,
        T = !1,
        Pa = 0,
        U = 0,
        Sb = 1,
        oc = "1.2.0",
        cb = 2E4,
        Xc = 6E4,
        Rb = "IdlePainters",
        yd = 86400,
        qc = 1E10,
        rc = 1,
        Da = 1800,
        ra = [],
        qa = 1E3,
        K = [],
        Bd = 1,
        Cd = 9,
        Bb = 5,
        Sa = !1,
        Eb = 0,
        Fb = 0,
        ab = !1,
        b = {
            saveVer: Sb,
            numberNotation: "suffix",
            money: 0,
            paint: qa,
            paintMax: qa,
            paintSpeed: 1,
            achPaintState: 1,
            currentBrush: 0,
            brushProps: [],
            pictureAutoImproveIntervalSec: Bb,
            currentPicture: 0,
            pictureMap: [],
            pictureMapWidth: 0,
            pictureMapHeight: 0,
            picturesLayer: [],
            picturesFillCnt: [],
            pictureLevel: [],
            pictureSellTime: [],
            managerHired: [],
            picturesFinished: [],
            workerParams: [],
            isWorkerLastStateSaved: !1,
            workerLastActiveState: [],
            lastUpdateTime: (new Date).getTime(),
            achievementsLevel: [],
            achievementsMult: [],
            achievementStats: [],
            tutorial: {},
            statistics: {}
        },
        Ca = 0,
        Ad = 5E3,
        z = null,
        D = {
            isGuest: !0,
            userId: !1,
            userName: "",
            token: "",
            adsAvailable: !1
        },
        sc = 0,
        Nc = Math.log(1.0000005),
        V, O, Q = 600,
        Dd = Q * Q,
        v = Math.min(window.innerWidth, window.innerHeight) >
        Q ? Q : 300,
        x = v,
        Wc = v * x,
        Za = v - 1,
        $a = x - 1,
        zd = v == Q ? 1 : 2,
        ha = null,
        oa, pa, Ra, P, Ya = !1;
    workerCompress = new Worker(window.URL.createObjectURL(new Blob(['onmessage = function(e) {var params = e.data;var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);var s = LZString.compressToBase64(params);postMessage(s);}'])));
    workerCompress.onmessage = function (a) {
        Y = a.data;
        window.localStorage[Rb] = Y;
        pc = (new Date).getTime();
        a = Y.length;
        xa && a > rb && (rb = a);
        Z = !0
    };
    var Y = "",
        wa = (new Date).getTime() + cb,
        bb = (new Date).getTime() + cb,
        Tb = (new Date).getTime(),
        pc = 0,
        Z = !0,
        ta, sb = 0,
        Aa = !1,
        R = -1,
        ob = 0,
        pb = 0,
        xa = !1,
        Ba = 0,
        qb = 0,
        db = 0,
        rb = 0,
        C = {
            achClicker: 0,
            achBucketSize: 1,
            achFillSpeed: 2,
            achQualityImprover: 3
        },
        M = [{
            name: "Super clicker",
            descr: "It makes your clicks x2 stronger at each achievement level. Continue clicking to get this achievement.",
            reqValue: [],
            reqValueFnc: function (a) {
                return Math.pow(10,
                    a + 1)
            },
            levelMax: 0,
            updateStatFnc: null,
            mult: 2
        }, {
            name: "Big paint bucket",
            descr: "It makes the paint bucket x2 bigger at each achievement level. Continue using the paint to get this achievement.",
            reqValue: [],
            reqValueFnc: function (a) {
                return Math.pow(1E3, a + 1)
            },
            levelMax: 0,
            updateStatFnc: null,
            mult: 2
        }, {
            name: "Fast paint bucket replenishment",
            descr: "Your paint bucket is replenished x2 faster at each achievement level. To get this achievement empty the paint bucket to less than 5% and then wait until it is fully replenished.",
            reqValue: [],
            reqValueFnc: function (a) {
                return Math.pow(10, a)
            },
            levelMax: 0,
            updateStatFnc: null,
            mult: 2
        }, {
            name: "Picture quality improver",
            descr: 'Improve the quality of any <span class="num">10</span> pictures to level <span class="num">10</span> or greater to get this achievement. This will allow your helpers to improve the quality of the selected picture when the game is closed for more than <span class="num">' + Da / 60 + "</span> minutes.",
            reqValue: [10],
            reqValueFnc: null,
            levelMax: 1,
            updateStatFnc: null,
            mult: 0
        }],
        Cb = M.length,
        La = {
            money: {
                title: function () {
                    return '得到 <span class="num">$' + Ga(Ia()) + "</span> 金钱"
                },
                dlgText: function () {
                    return '得到 <span class="num">$' + Ga(Ia()) + "</span> 金钱"
                },
                available: function () {
                    return !0
                },
                unavailableText: "",
                reward: function () {
                    b.money += Ia()
                }
            },
            time: {
                title: function () {
                    return '时间扭曲 <span class="num">10</span> 分钟'
                },
                dlgText: function () {
                    return '跳跃到未来 <span class="num">10</span> 分钟'
                },
                available: function () {
                    return !0
                },
                unavailableText: "",
                reward: function () {
                    mc(600, !0)
                }
            },
            paint: {
                title: function () {
                    return "得到满桶的颜料"
                },
                dlgText: function () {
                    return "得到满桶的颜料"
                },
                available: function () {
                    return 60 < (ia() - b.paint) / Va()
                },
                unavailableText: "如果油漆修复需要超过1分钟，则可用",
                reward: function () {
                    b.paint = ia()
                }
            }
        },
        B = [{
            name: "简单的刷子",
            shortName: "简单",
            descr: "简单的薄刷使用非常少量的油漆。",
            price: 0,
            strength: 1,
            consumption: .001,
            strengthIncreasePrice: function (a) {
                return 1E3 * (a - 1)
            },
            consumptionUpgradeMult: .9,
            efficiencyIncreasePrice: function (a) {
                return 1E3 *
                    (a - 1)
            }
        }, {
            name: "魔术刷子",
            shortName: "魔术",
            descr: "酷炫的魔术笔使用了大量的颜料，但它可以同时创建大量的像素。",
            price: 100,
            strength: 5,
            consumption: .2,
            strengthIncreasePrice: function (a) {
                return 100 * (a - 1)
            },
            consumptionUpgradeMult: .95,
            efficiencyIncreasePrice: function (a) {
                return 1E3 * (a - 1)
            }
        }],
        Jc = B.length,
        Mb = ["sk", "bw", ""],
        L = Mb.length,
        p = [],
        ca = 33;
    (function () {
        for (var a = Dd, b = 4E3, d = 0, e = 100, f = 60, g = 3, n = 1, h = 0; h < ca; h++) p[h] = {}, p[h].file = "pic" + h, p[h].complexity = a, p[h].strengthMult = b,
            p[h].buyPrice = d, p[h].sellPrice = e, p[h].sellTime = f, p[h].managerPrice = 4 > h ? 10 * e : e * (9E3 + 600 * (h - 3)) / f, d = e, 0 == h ? (b /= 5, f *= 5) : 3 >= h ? (b /= 2, f += 300) : 4 == h ? (f += 300, b = 64) : (f += 300, 1 < b ? b /= 2 : (a *= g, n = Math.floor(g / 2), g++)), e = n * (h + 2) * f * 100 / 60
    })();
    var aa = [{
                name: "start",
                activeTabName: "Shop",
                activateFnc: function () {
                    return !0
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Workshop" == t
                },
                text: "最开始的时候你有一个空画布，一个简易画笔以及一小桶颜料。点击第一个画布，开始绘制你的第一个作品。",
                highlightElements: !0
            }, {
                name: "layer1",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("start")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 0 < b.achievementsLevel[C.achClicker]
                },
                text: "点击画布，来绘制你第一幅画的草图。",
                highlightElements: !0
            }, {
                name: "1stAch",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer1")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "clickTabAchievements" == b.tutorial.lastClickEvent
                },
                text: "恭喜你，你获得了第一个成就！点击成就页面来查看你的成就。",
                highlightElements: !0
            }, {
                name: "achSuperClicker",
                activeTabName: "Achievements",
                activateFnc: function () {
                    return k("1stAch")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: '你点击了 <span class="num">10</span> 次。所以你获得了“超级点击者”成就。你的点击效果现在变为原来的2倍！继续点击来获得更多成就。',
                highlightElements: !0
            }, {
                name: "achOther",
                activeTabName: "Achievements",
                activateFnc: function () {
                    return k("achSuperClicker")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "在这个页面能查看你所有成就的进度。每个成就都会给你一个有用的加成。",
                highlightElements: !0
            }, {
                name: "achQualImpr",
                activeTabName: "Achievements",
                activateFnc: function () {
                    return k("achOther")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "注意这个成就。 它允许您关闭游戏，并确保您的助手将继续处理您的画作，以提高其质量。 你返回后，你或你的经理将能够出售改进后的画作。",
                highlightElements: !0
            }, {
                name: "layer1AfterAch",
                activeTabName: "",
                activateFnc: function () {
                    return k("achQualImpr")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "clickTabWorkshop" == b.tutorial.lastClickEvent
                },
                text: "单击画室选项卡返回您的工作室并继续绘图。",
                highlightElements: !0
            }, {
                name: "layer1progress",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("layer1AfterAch")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "在这里，您可以看到当前图片层的进度。 现在您正在绘制草图，并且可以看到应绘制多少像素以进入下一个图片层。",
                highlightElements: !0
            }, {
                name: "layer1finish",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer1progress")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 1 == A()
                },
                text: "继续单击画布以完成草图。",
                highlightElements: !1
            }, {
                name: "layer2",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer1finish")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "现在草图已经完成了。你看到了魔法吗？ 简易画笔不仅可以在您点击的位置绘制新像素，还可以在该点附近绘制新像素。<br/>现在让我们绘制更多细节。",
                highlightElements: !0
            }, {
                name: "layer2finish",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer2")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 2 == A()
                },
                text: "继续点击以绘制所有细节。",
                highlightElements: !1
            }, {
                name: "layer3",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer2finish")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "您已经绘制了所有细节。 现在让我们在画作中着色！",
                highlightElements: !0
            }, {
                name: "layer3finish",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer3")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return b.picturesFinished[0]
                },
                text: "继续点击以完成此画作。",
                highlightElements: !1
            }, {
                name: "pictureFinish",
                activeTabName: "",
                activateFnc: function () {
                    return k("layer3finish")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Shop" == t
                },
                text: "恭喜！ 你已经完成了第一张画作。 现在我们去商店卖掉这幅画。",
                highlightElements: !0
            },
            {
                name: "sell1",
                activeTabName: "Shop",
                activateFnc: function () {
                    return k("pictureFinish")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return !1 !== b.pictureSellTime[0]
                },
                text: '点击“出售”按钮制作此画作的副本并出售。',
                highlightElements: !0
            }, {
                name: "pic1lvl2",
                activeTabName: "",
                activateFnc: function () {
                    return k("sell1")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Workshop" == t
                },
                text: "太好了！ 当你在等待你的画作出售时，让它变得更好，这样你就可以卖出 <b><i>更高的价格</i></b>. 点击画室",
                highlightElements: !0
            }, {
                name: "pic1lvl2up",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("pic1lvl2")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 0 == A()
                },
                text: '点击“将画作质量提高到2”按钮。',
                highlightElements: !0
            }, {
                name: "pic1lvl2finish",
                activeTabName: "",
                activateFnc: function () {
                    return k("pic1lvl2up")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 2 <= b.pictureLevel[0] && 0 < b.money
                },
                text: "再次绘制所有3个图层，然后等到画作出售。",
                highlightElements: !1
            }, {
                name: "upgrade",
                activeTabName: "",
                activateFnc: function () {
                    return k("pic1lvl2finish")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Upgrades" == t
                },
                text: '很好！ 现在切换到“升级”选项卡。',
                highlightElements: !0
            }, {
                name: "magicBrush",
                activeTabName: "Upgrades",
                activateFnc: function () {
                    return k("upgrade")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return Ma(1)
                },
                text: "购买一个魔术画笔。",
                highlightElements: !0
            }, {
                name: "magicBrushBought",
                activeTabName: "",
                activateFnc: function () {
                    return k("magicBrush")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Workshop" == t
                },
                text: '现在你有魔术画笔。 它比简易画笔强得多，但它使用了更多的油漆。 切换到“画室”并尝试使用新的魔术画笔改善画作。',
                highlightElements: !0
            }, {
                name: "paintBucket",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("magicBrushBought")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return !I()
                },
                text: '使用魔术画笔前，你应该检查你还剩下多少油漆。 如果油漆桶是空的，你就不能使用魔术画笔。 油漆量会自动补充。 要增加油漆桶容量和补油漆速度，请使用“升级”选项卡。<br/>现在单击“将图片质量提高到......”按钮。',
                highlightElements: !0
            }, {
                name: "selectMagicBrush",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("paintBucket")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 1 ==
                        b.currentBrush
                },
                text: "您可以使用这些按钮更改当前画笔。 选择魔术画笔。",
                highlightElements: !0
            }, {
                name: "pic1lvl3",
                activeTabName: "",
                activateFnc: function () {
                    return k("selectMagicBrush")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 3 <= b.pictureLevel[0] && 200 <= b.money
                },
                text: "绘制这张画作，卖掉它并赚取200元继续教程。",
                highlightElements: !1
            }, {
                name: "pic1lvl3finish",
                activeTabName: "",
                activateFnc: function () {
                    return k("pic1lvl3")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Upgrades" == t
                },
                text: '您可以雇佣助手来提高绘图速度。 切换到“升级”选项卡进行操作。',
                highlightElements: !0
            }, {
                name: "helper1",
                activeTabName: "Upgrades",
                activateFnc: function () {
                    return k("pic1lvl3finish")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return la(0)
                },
                text: '聘请“学生画家”来帮助你。',
                highlightElements: !0
            }, {
                name: "pic2buy",
                activeTabName: "",
                activateFnc: function () {
                    return k("helper1")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Shop" == t
                },
                text: '现在切换到“商店”标签。',
                highlightElements: !0
            }, {
                name: "pic2buy2",
                activeTabName: "Shop",
                activateFnc: function () {
                    return k("pic2buy")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return 0 === b.pictureLevel[1]
                },
                text: "购买第二个画布。",
                highlightElements: !0
            }, {
                name: "pic2select",
                activeTabName: "Shop",
                activateFnc: function () {
                    return k("pic2buy2")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return "Workshop" == t && 1 == b.currentPicture
                },
                text: "单击此新画布以选择它进行绘制。",
                highlightElements: !0
            }, {
                name: "helper1descr",
                activeTabName: "Workshop",
                activateFnc: function () {
                    return k("pic2select")
                },
                activateOnce: !0,
                continueButton: !1,
                finishFnc: function () {
                    return b.workerParams[0].active
                },
                text: "这是你的第一个助手 - 学生画家。 现在他处于不活跃状态。 单击相应的“激活”按钮或将其拖放到另一个位置以激活他。 这个助手可以在以他为起点的周围绘制一部分图片，当他完成它时他会停下来。 如果要让它继续绘画，就要在另一个地方激活他。 之后你可以雇佣另一名助手，他可以从任何一点开始绘制整幅画作。 你也可以升级这个助手，让他能画更大的部分。 现在激活这个助手。",
                highlightElements: !0
            }, {
                name: "tutorialEnd",
                activeTabName: "",
                activateFnc: function () {
                    return k("helper1descr")
                },
                activateOnce: !0,
                continueButton: !0,
                finishFnc: function () {
                    return !1
                },
                text: "恭喜！ 你已经完成了教程！<br/>不要忘记检查油漆量，如果你不能画，可能是因为你没有足够的油漆; 等待油漆补充。<br/>请记住你的画笔和助手使用多少油漆，必要时切换或停用它们。<br/>如果你有足够的钱，可以雇佣一个经理，他们可以出售你的副本画作，即使在离线的时候。<br/>您现在可以自己玩了。 祝你好运，玩得开心点！",
                highlightElements: !0
            }],
        Xb = aa.length,
        f = [{
            name: "学生画家",
            descr: '他可以使用少量油漆绘制图片的小方块部分。<i>他得到了一个 <b>额外技能</b> 在<b>面积大小</b>达到 <span class="num">51</span>级时。 </i>.',
            price: 100,
            icon: "painter1.png",
            startPosX: 250,
            startPosY: 40,
            strength: 3,
            strengthIncreaseStep: 1,
            strengthIncreasePrice: function (a) {
                return 100 * (a - 1)
            },
            drawInterval: .5,
            drawIntervalUpgradeMult: .99,
            drawIntervalUpgradePrice: function (a) {
                return 1E4 * (a - 1)
            },
            consumption: .1,
            consumptionUpgradeMult: .95,
            consumptionUpgradePrice: function (a) {
                return 1E3 * (a - 1)
            },
            areaSize: 100,
            areaSizeIncreaseStep: 10,
            areaSizeIncreasePrice: function (a) {
                return 1E4 * (a - 1)
            },
            expStrength: 1,
            expStrengthIncreaseStep: 1,
            expStrengthIncreasePrice: function (a) {
                return 1E5 * (a - 1)
            }
        }, {
            name: "画家的学徒",
            descr: "他可以画出整个画面，但是使用了大量的油漆。",
            price: 2E4,
            icon: "painter2.png",
            startPosX: 40,
            startPosY: 40,
            strength: 10,
            strengthIncreaseStep: 1,
            strengthIncreasePrice: function (a) {
                return 100 * (a -
                    1)
            },
            drawInterval: 1,
            drawIntervalUpgradeMult: .99,
            drawIntervalUpgradePrice: function (a) {
                return 200 * (a - 1)
            },
            consumption: 1,
            consumptionUpgradeMult: .95,
            consumptionUpgradePrice: function (a) {
                return 1E3 * (a - 1)
            },
            areaSize: 0,
            areaSizeIncreaseStep: 0,
            areaSizeIncreasePrice: function (a) {
                return 0
            },
            expStrength: 0,
            expStrengthIncreaseStep: 0,
            expStrengthIncreasePrice: function (a) {
                return 0
            }
        }],
        N = f.length,
        nb = 48,
        za = nb / 2;
    F.directive("mPreventDefault", function () {
        return function (a, b, d) {
            b.on("click", function (a) {
                a.preventDefault()
            })
        }
    });
    angular.module("ui.bootstrap.m", ["ui.bootstrap.m.tpls", "ui.bootstrap.m.progressbar"]);
    angular.module("ui.bootstrap.m.tpls", ["uibm/template/progressbar/progressbar.html"]);
    angular.module("ui.bootstrap.m.progressbar", []).constant("uibmProgressConfig", {
        animate: !0,
        max: 100
    }).controller("UibmProgressController", ["$scope", "$attrs", "uibmProgressConfig", function (a, b, d) {
        function e() {
            return angular.isDefined(a.maxParam) ? a.maxParam : d.max
        }
        var f = this,
            g = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : d.animate;
        this.bars = [];
        a.max = e();
        this.addBar = function (a, b, c) {
            g || b.css({
                transition: "none"
            });
            this.bars.push(a);
            a.max = e();
            a.title = c && angular.isDefined(c.title) ? c.title : "progressbar";
            a.$watch("value", function (b) {
                a.recalculatePercentage()
            });
            a.recalculatePercentage = function () {
                var b = f.bars.reduce(function (a, b) {
                    b.percent = +(100 * b.value / b.max).toFixed(2);
                    return a + b.percent
                }, 0);
                100 < b && (a.percent -= b - 100)
            };
            a.$on("$destroy", function () {
                b = null;
                f.removeBar(a)
            })
        };
        this.removeBar = function (a) {
            this.bars.splice(this.bars.indexOf(a),
                1);
            this.bars.forEach(function (a) {
                a.recalculatePercentage()
            })
        };
        a.$watch("maxParam", function (a) {
            f.bars.forEach(function (a) {
                a.max = e();
                a.recalculatePercentage()
            })
        })
    }]).directive("uibmProgressbar", function () {
        return {
            replace: !0,
            transclude: !0,
            controller: "UibmProgressController",
            scope: {
                value: "=",
                maxParam: "=?max",
                type: "@"
            },
            templateUrl: "uibm/template/progressbar/progressbar.html",
            link: function (a, b, d, e) {
                e.addBar(a, angular.element(b.children()[0]), {
                    title: d.title
                })
            }
        }
    });
    angular.module("uibm/template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
        a.put("uibm/template/progressbar/progressbar.html", '<div class="progress"><div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}"></div><div class="progress-text" ng-transclude></div></div>\n')
    }])
})();
//汉化xx
function cnText(text){
    var cntext="";
    var temp=text;
    if(temp=="Workshop"){
        cntext="画室"
    }else if(temp==""){
        cntext=""
    }else{
console.log("需汉化的英文："+text);
        return text;
    }
    return cntext;
}
                                    