(this["webpackJsonprpsls-react"] = this["webpackJsonprpsls-react"] || []).push([
  [0],
  {
    24: function (n, e, t) {},
    32: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        i,
        a,
        s,
        o,
        c,
        l,
        d,
        m,
        p,
        x,
        h,
        j,
        b,
        u,
        f,
        g,
        O,
        w,
        k,
        v,
        y,
        C,
        z,
        S,
        Y,
        X,
        P,
        R,
        N,
        L,
        M,
        A,
        E,
        F,
        D,
        H,
        J,
        T,
        W,
        Z,
        _,
        B,
        I,
        q,
        G,
        K,
        Q,
        U,
        V,
        $,
        nn,
        en,
        tn,
        rn = t(1),
        an = t(7),
        sn = t(15),
        on = t.n(sn),
        cn = (t(24), t(4)),
        ln = t(2),
        dn = t(3),
        mn = t(0),
        pn = dn.a.header(
          r ||
            (r = Object(ln.a)([
              "\n  border: 4px solid hsl(217, 16%, 45%);\n  width: 90%;\n  max-width:704px;\n  margin: 1.875rem auto 0 auto;\n\n  border-radius: 6px;\n  padding: 1.15rem;\n\n  display: flex;\n  justify-content: space-between;\n  align-items:center;\n\n  @media(max-height:668px){\n    margin: 1.2rem auto 0 auto;\n    padding: .7rem;\n  }\n",
            ]))
        ),
        xn = dn.a.section(i || (i = Object(ln.a)(["\nwidth: auto;\n"]))),
        hn = dn.a.img(
          a || (a = Object(ln.a)(["\nwidth: auto;\nheight: 10vh;\n"]))
        ),
        jn = dn.a.section(
          s ||
            (s = Object(ln.a)([
              "\n  padding: 0.45rem 1.4rem;\n  background-color: #fff;\n  color: hsl(229, 64%, 46%);\n  border-radius: 5px;\n\n  span{\n    text-transform:uppercase;\n    font-size:1rem;\n    letter-spacing:2px;\n  }\n  @media(max-height:600px){\n    span{\n    font-size:.8rem;\n  }\n  }\n",
            ]))
        ),
        bn = dn.a.article(
          o ||
            (o = Object(ln.a)([
              "\n  color: hsl(229, 25%, 31%);\n  font-size: 3rem;\n  font-weight: 700;\n\n  @media(max-height:600px){\n    font-size: 2rem;\n  }\n",
            ]))
        ),
        un = function (n) {
          var e = n.score;
          return Object(mn.jsxs)(pn, {
            children: [
              Object(mn.jsx)(xn, {
                children: Object(mn.jsx)(hn, {
                  src: "./images/logo-bonus.svg",
                }),
              }),
              Object(mn.jsxs)(jn, {
                children: [
                  Object(mn.jsx)("span", { children: "Score" }),
                  Object(mn.jsx)(bn, { children: e }),
                ],
              }),
            ],
          });
        },
        fn = t(5),
        gn = dn.a.section(
          c ||
            (c = Object(ln.a)([
              "\n  width: 95%;\n  height: 70%;\n  margin: 80px auto 0 auto;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: 50% 50%;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 769px) {\n    width: 80%;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  @media (max-height: 668px) {\n    margin: 50px auto 0 auto;\n  }\n  \n",
            ]))
        ),
        On = dn.a.div(
          l ||
            (l = Object(ln.a)([
              "\n  grid-row: 1;\n  grid-column: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        wn = dn.a.span(
          d ||
            (d = Object(ln.a)([
              "\n  color: white;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    color: white;\n    z-index: 10;\n    margin-bottom: 50px;\n  }\n  @media (max-height: 668px) {\n    font-size: 1rem;\n  }\n",
            ]))
        ),
        kn = dn.a.div(
          m ||
            (m = Object(ln.a)([
              "\n  grid-row: 2;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  margin: 10% 0 0 0;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    margin: 0 6%;\n  }\n",
            ]))
        ),
        vn = dn.a.span(
          p ||
            (p = Object(ln.a)([
              "\n  color: white;\n  text-transform: uppercase;\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n\n  @media (min-width: 768px) {\n    font-size: 3.4rem;\n  }\n  @media (max-height: 668px) {\n    margin-top: 20px;\n    font-size: 2rem;\n  }\n",
            ]))
        ),
        yn = dn.a.div(
          x ||
            (x = Object(ln.a)([
              "\n  width: 220px;\n  background-color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 1rem;\n  color: hsl(237, 49%, 15%);\n  cursor: pointer;\n\n  &:hover {\n  background-color: transparent;\n  color: white;\n  border: 2px dashed white;\n  }\n\n  @media (min-width: 768px) {\n    background-color: white;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 10px 20px;\n    border-radius: 5px;\n    font-size: 0.8rem;\n    width: 15.277777777777779vw;\n  }\n  @media (max-height: 668px) {\n    width: 160px;\n    padding: 8px 15px;\n  }\n",
            ]))
        ),
        Cn = dn.a.div(
          h ||
            (h = Object(ln.a)([
              "\n  grid-row: 1;\n  grid-column: 2;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        zn = function (n) {
          var e,
            t,
            r,
            i = n.score,
            a = n.monChoix,
            s = n.setScore,
            o = n.handleChange,
            c = Object(rn.useState)(""),
            l = Object(cn.a)(c, 2),
            d = l[0],
            m = l[1],
            p = Object(rn.useState)(""),
            x = Object(cn.a)(p, 2),
            h = x[0],
            j = x[1];
          Object(rn.useEffect)(
            function () {
              m(
                ["rock", "paper", "scissors", "lizard", "spock"][
                  Math.floor(5 * Math.random())
                ]
              );
            },
            [m]
          );
          return (
            Object(rn.useEffect)(
              function () {
                ("rock" === a && "scissors" === d) ||
                ("rock" === a && "lizard" === d)
                  ? (j("win"), s(i + 1))
                  : ("rock" === a && "paper" === d) ||
                    ("rock" === a && "spock" === d)
                  ? (j("lose"), s(i - 1))
                  : ("paper" === a && "rock" === d) ||
                    ("paper" === a && "spock" === d)
                  ? (j("win"), s(i + 1))
                  : ("paper" === a && "scissors" === d) ||
                    ("paper" === a && "lizard" === d)
                  ? (j("lose"), s(i - 1))
                  : ("scissors" === a && "paper" === d) ||
                    ("scissors" === a && "lizard" === d)
                  ? (j("win"), s(i + 1))
                  : ("scissors" === a && "rock" === d) ||
                    ("scissors" === a && "spock" === d)
                  ? (j("lose"), s(i - 1))
                  : ("lizard" === a && "spock" === d) ||
                    ("lizard" === a && "paper" === d)
                  ? (j("win"), s(i + 1))
                  : ("lizard" === a && "rock" === d) ||
                    ("lizard" === a && "scissors" === d)
                  ? (j("lose"), s(i - 1))
                  : ("spock" === a && "scissors" === d) ||
                    ("spock" === a && "rock" === d)
                  ? (j("win"), s(i + 1))
                  : ("spock" === a && "lizard" === d) ||
                    ("spock" === a && "paper" === d)
                  ? (j("lose"), s(i - 1))
                  : j("draw");
              },
              [d]
            ),
            Object(mn.jsxs)(gn, {
              children: [
                Object(mn.jsxs)(On, {
                  children: [
                    Object(mn.jsx)(wn, { children: "You picked" }),
                    Object(mn.jsx)("div", {
                      className: "icon "
                        .concat(a, " ")
                        .concat(
                          "win" === h ? "icon ".concat(a, " winner") : ""
                        ),
                    }),
                  ],
                }),
                "win" === h &&
                  Object(mn.jsxs)(kn, {
                    children: [
                      Object(mn.jsx)(vn, { children: "You Win" }),
                      Object(mn.jsx)(
                        yn,
                        ((e = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(e, "onClick", o),
                        Object(fn.a)(e, "children", "Play Again"),
                        e)
                      ),
                    ],
                  }),
                "lose" === h &&
                  Object(mn.jsxs)(kn, {
                    children: [
                      Object(mn.jsx)(vn, { children: "You Lose" }),
                      Object(mn.jsx)(
                        yn,
                        ((t = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(t, "onClick", o),
                        Object(fn.a)(t, "children", "Play Again"),
                        t)
                      ),
                    ],
                  }),
                "draw" === h &&
                  Object(mn.jsxs)(kn, {
                    children: [
                      Object(mn.jsx)(vn, { children: "Draw" }),
                      Object(mn.jsx)(
                        yn,
                        ((r = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(r, "onClick", o),
                        Object(fn.a)(r, "children", "Play Again"),
                        r)
                      ),
                    ],
                  }),
                Object(mn.jsxs)(Cn, {
                  children: [
                    Object(mn.jsx)(wn, { children: "The House Picked" }),
                    Object(mn.jsx)("div", {
                      className: "icon "
                        .concat(d, " ")
                        .concat(
                          "lose" === h ? "icon ".concat(d, " winner") : ""
                        ),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Sn = dn.a.section(
          j ||
            (j = Object(ln.a)([
              "\n  width: 90%;\n  position: relative;\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    margin: 2rem auto 0 auto;\n  }\n  @media (min-height: 1024px) {\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  @media (max-height: 668px) {\n    margin: 1.5rem auto 0 auto;\n  }\n",
            ]))
        ),
        Yn = dn.a.img(
          b ||
            (b = Object(ln.a)([
              "\n  position: absolute;\n  align-self: center;\n  margin-top: 4.375rem;\n  width: 220px;\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n",
            ]))
        ),
        Xn = dn.a.div(
          u ||
            (u = Object(ln.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        Pn = dn.a.div(
          f ||
            (f = Object(ln.a)([
              "\n  transform: translateX(12.5rem) translateY(6.5rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(20rem) translateY(9rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(12rem) translateY(6.5rem);\n  }\n",
            ]))
        ),
        Rn = dn.a.div(
          g ||
            (g = Object(ln.a)([
              "\n  transform: translateX(12rem) translateY(1rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(18.25em) translateY(1.25rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(11.25rem) translateY(1.5rem);\n  }\n",
            ]))
        ),
        Nn = dn.a.div(
          O ||
            (O = Object(ln.a)([
              "\n  transform: translateX(-8rem) translateY(15rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(-10.5rem) translateY(22.25rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(-7.5rem) translateY(14rem);\n  }\n",
            ]))
        ),
        Ln = dn.a.div(
          w ||
            (w = Object(ln.a)([
              "\n  transform: translateX(-5rem) translateY(15rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(-8rem) translateY(22.25rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(-4rem) translateY(14rem);\n  }\n",
            ]))
        ),
        Mn = dn.a.div(
          k ||
            (k = Object(ln.a)([
              "\n  transform: translateX(-13rem) translateY(6.5rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(-20rem) translateY(9rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(-12rem) translateY(6.5rem);\n  }\n",
            ]))
        ),
        An = dn.a.div(
          v || (v = Object(ln.a)(["\n  transition: transform 0.2s;\n"]))
        ),
        En = function (n) {
          var e = n.handleChange,
            t = n.setMonChoix,
            r = function (n) {
              t(n.target.dataset.id);
            };
          return Object(mn.jsxs)(Sn, {
            children: [
              Object(mn.jsx)(Yn, {
                src: "./images/bg-pentagon.svg",
                alt: "triangle",
              }),
              Object(mn.jsxs)(Xn, {
                onClick: e,
                children: [
                  Object(mn.jsx)(Rn, {
                    children: Object(mn.jsx)(An, {
                      "data-id": "scissors",
                      onClick: r,
                      className: "scissors",
                      id: "scissors",
                    }),
                  }),
                  Object(mn.jsx)(Pn, {
                    children: Object(mn.jsx)(An, {
                      "data-id": "paper",
                      onClick: r,
                      className: "paper",
                      id: "paper",
                    }),
                  }),
                  Object(mn.jsx)(Ln, {
                    children: Object(mn.jsx)(An, {
                      "data-id": "lizard",
                      onClick: r,
                      className: "lizard",
                      id: "lizard",
                    }),
                  }),
                  Object(mn.jsx)(Mn, {
                    children: Object(mn.jsx)(An, {
                      "data-id": "spock",
                      onClick: r,
                      className: "spock",
                      id: "spock",
                    }),
                  }),
                  Object(mn.jsx)(Nn, {
                    children: Object(mn.jsx)(An, {
                      "data-id": "rock",
                      onClick: r,
                      className: "rock",
                      id: "rock",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Fn = dn.a.footer(y || (y = Object(ln.a)(["\n  width: 100vw;\n"]))),
        Dn = dn.a.div(
          C ||
            (C = Object(ln.a)([
              "\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  transform: translate(-50%);\n  bottom: 1rem;\n  font-size: 0.7rem;\n  color: white;\n\n  a {\n    font-size: 0.7rem;\n    color: hsl(39, 89%, 49%);\n    text-decoration: none;\n  }\n  a:hover {\n    color: hsl(349, 71%, 52%);\n  }\n",
            ]))
        ),
        Hn = dn.a.button(
          z ||
            (z = Object(ln.a)([
              "\n  position: absolute;\n  bottom: 3rem;\n  right: 1rem;\n  padding: 10px 25px;\n  border: 2px solid hsl(217, 16%, 45%);\n  border-radius: 0.4rem;\n  color: hsl(217, 16%, 45%);\n  background: none;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  &:hover {\n    border: 3px solid white;\n    background: hsl(230, 89%, 62%);\n    color: white;\n    cursor: pointer;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n  @media(min-width: 768px) {\n    right: 2rem;\n  }\n",
            ]))
        ),
        Jn = dn.a.section(
          S ||
            (S = Object(ln.a)([
              "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: hsl(229, 25%, 31%);\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 30px;\n  transition: 0.3s ease-in-out;\n\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 465px;\n  }\n",
            ]))
        ),
        Tn = dn.a.article(
          Y ||
            (Y = Object(ln.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  h1 {\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n    grid-raw: 1;\n  }\n  @media (max-width: 768px) {\n    h1 {\n      font-size: 2.1rem;\n      position: absolute;\n      top: 10%;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n  }\n",
            ]))
        ),
        Wn = dn.a.button(
          X ||
            (X = Object(ln.a)([
              "\n  background: none;\n  border: none;\n  align-self: center;\n  color: hsl(229, 25%, 31%);\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n\n  img:hover {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    -webkit-transition: -webkit-transform 500ms ease-in-out;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n\n  @media (max-width: 768px) {\n    position: absolute;\n    bottom: 7%;\n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n",
            ]))
        ),
        Zn = dn.a.img(
          P || (P = Object(ln.a)(["\n  width: 100%;\n  max-width: 400px;\n"]))
        ),
        _n = function () {
          var n = Object(rn.useState)(!1),
            e = Object(cn.a)(n, 2),
            t = e[0],
            r = e[1];
          return Object(mn.jsxs)(Fn, {
            children: [
              Object(mn.jsxs)(Dn, {
                class: "attribution",
                children: [
                  "Challenge by",
                  " ",
                  Object(mn.jsx)("a", {
                    href: "https://www.frontendmentor.io?ref=challenge",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Frontend Mentor",
                  }),
                  ". Coded by ",
                  Object(mn.jsx)("a", {
                    href: "https://github.com/Zepolimer?tab=repositories",
                    children: "Remi Lopez",
                  }),
                  ".",
                ],
              }),
              Object(mn.jsx)(Hn, {
                onClick: function () {
                  return r(!0);
                },
                children: "Rules",
              }),
              t
                ? Object(mn.jsxs)(Jn, {
                    children: [
                      Object(mn.jsxs)(Tn, {
                        children: [
                          Object(mn.jsx)("h1", { children: "Rules" }),
                          Object(mn.jsx)(Wn, {
                            onClick: function () {
                              return r(!1);
                            },
                            children: Object(mn.jsx)("img", {
                              src: "./images/icon-close.svg",
                              alt: "Close",
                            }),
                          }),
                        ],
                      }),
                      Object(mn.jsx)(Zn, {
                        src: "./images/image-rules-bonus.svg",
                        alt: "Rules",
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        Bn = function () {
          var n = Object(rn.useState)(0),
            e = Object(cn.a)(n, 2),
            t = e[0],
            r = e[1],
            i = Object(rn.useState)(""),
            a = Object(cn.a)(i, 2),
            s = a[0],
            o = a[1],
            c = Object(rn.useState)(!1),
            l = Object(cn.a)(c, 2),
            d = l[0],
            m = l[1],
            p = function () {
              m(!d);
            };
          return Object(mn.jsx)(an.a, {
            children: Object(mn.jsxs)(mn.Fragment, {
              children: [
                Object(mn.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(mn.jsx)(un, { score: t }),
                    d
                      ? Object(mn.jsx)(zn, {
                          monChoix: s,
                          score: t,
                          setScore: r,
                          handleChange: p,
                        })
                      : Object(mn.jsx)(En, { setMonChoix: o, handleChange: p }),
                  ],
                }),
                Object(mn.jsx)(_n, {}),
              ],
            }),
          });
        },
        In = dn.a.header(
          R ||
            (R = Object(ln.a)([
              "\n  border: 4px solid hsl(217, 16%, 45%);\n  width: 90%;\n  max-width:704px;\n  margin: 1.875rem auto 0 auto;\n\n  border-radius: 6px;\n  padding: 1.15rem;\n\n  display: flex;\n  justify-content: space-between;\n  align-items:center;\n\n  @media(max-height:668px){\n    margin: 1.2rem auto 0 auto;\n    padding: .7rem;\n  }\n",
            ]))
        ),
        qn = dn.a.section(
          N ||
            (N = Object(ln.a)([
              "\n  font-size: 2.5rem;\n  text-transform: uppercase;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.4rem;\n\n  span{\n    color:white;\n    font-size:1.6rem;\n  }\n  @media(max-height:600px){\n    span{\n    color:white;\n    font-size:1.2rem;\n    line-height: 1.2rem;\n  }\n  }\n",
            ]))
        ),
        Gn = dn.a.section(
          L ||
            (L = Object(ln.a)([
              "\n  padding: 0.45rem 1.4rem;\n  background-color: #fff;\n  color: hsl(229, 64%, 46%);\n  border-radius: 5px;\n\n  span{\n    text-transform:uppercase;\n    font-size:1rem;\n    letter-spacing:2px;\n  }\n  @media(max-height:600px){\n    span{\n    font-size:.8rem;\n  }\n  }\n",
            ]))
        ),
        Kn = dn.a.article(
          M ||
            (M = Object(ln.a)([
              "\n  color: hsl(229, 25%, 31%);\n  font-size: 3rem;\n  font-weight: 700;\n\n  @media(max-height:600px){\n    font-size: 2rem;\n  }\n",
            ]))
        ),
        Qn = function (n) {
          var e = n.score;
          return Object(mn.jsxs)(In, {
            children: [
              Object(mn.jsxs)(qn, {
                children: [
                  Object(mn.jsx)("span", { children: "Rock" }),
                  Object(mn.jsx)("span", { children: "Paper" }),
                  Object(mn.jsx)("span", { children: "Scissors" }),
                ],
              }),
              Object(mn.jsxs)(Gn, {
                children: [
                  Object(mn.jsx)("span", { children: "Score" }),
                  Object(mn.jsx)(Kn, { children: e }),
                ],
              }),
            ],
          });
        },
        Un = dn.a.section(
          A ||
            (A = Object(ln.a)([
              "\n  width: 90%;\n  position: relative;\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    margin: 4.5rem auto 0 auto;\n  }\n  @media (min-height: 1024px) {\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  @media (max-height: 668px) {\n    margin: 1.5rem auto 0 auto;\n  }\n",
            ]))
        ),
        Vn = dn.a.img(
          E ||
            (E = Object(ln.a)([
              "\n  position: absolute;\n  align-self: center;\n  margin-top: 4.375rem;\n  width: 250px;\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n  @media (max-height: 668px) {\n    width: 200px;\n  }\n",
            ]))
        ),
        $n = dn.a.div(
          F ||
            (F = Object(ln.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        ne = dn.a.div(
          D ||
            (D = Object(ln.a)([
              "\n  transform: translateY(2rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateY(2rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(1rem) translateY(2rem);\n  }\n",
            ]))
        ),
        ee = dn.a.div(
          H ||
            (H = Object(ln.a)([
              "\n  transform: translateX(6rem) translateY(2rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(8em) translateY(2rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(4.5rem) translateY(2rem);\n  }\n",
            ]))
        ),
        te = dn.a.div(
          J ||
            (J = Object(ln.a)([
              "\n  transform: translateX(-6.5rem) translateY(12.5rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(-9rem) translateY(18.5rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(-5.75rem) translateY(11rem);\n  }\n",
            ]))
        ),
        re = dn.a.div(
          T || (T = Object(ln.a)(["\n  transition: transform 0.2s;\n"]))
        ),
        ie = function (n) {
          var e = n.handleChange,
            t = n.setMonChoix,
            r = function (n) {
              t(n.target.dataset.id);
            };
          return Object(mn.jsxs)(Un, {
            children: [
              Object(mn.jsx)(Vn, {
                src: "./images/bg-triangle.svg",
                alt: "triangle",
              }),
              Object(mn.jsxs)($n, {
                onClick: e,
                children: [
                  Object(mn.jsx)(ne, {
                    children: Object(mn.jsx)(re, {
                      "data-id": "paper",
                      onClick: r,
                      className: "paper",
                      id: "paper",
                    }),
                  }),
                  Object(mn.jsx)(ee, {
                    children: Object(mn.jsx)(re, {
                      "data-id": "scissors",
                      onClick: r,
                      className: "scissors",
                      id: "scissors",
                    }),
                  }),
                  Object(mn.jsx)(te, {
                    children: Object(mn.jsx)(re, {
                      "data-id": "rock",
                      onClick: r,
                      className: "rock",
                      id: "rock",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ae = dn.a.section(
          W ||
            (W = Object(ln.a)([
              "\n  width: 95%;\n  height: 70%;\n  margin: 80px auto 0 auto;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: 50% 50%;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 769px) {\n    width: 80%;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        se = dn.a.div(
          Z ||
            (Z = Object(ln.a)([
              "\n  grid-row: 1;\n  grid-column: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        oe = dn.a.span(
          _ ||
            (_ = Object(ln.a)([
              "\n  color: white;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    color: white;\n    z-index: 10;\n    margin-bottom: 50px;\n  }\n",
            ]))
        ),
        ce = dn.a.div(
          B ||
            (B = Object(ln.a)([
              "\n  grid-row: 2;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  margin: 5% 0 0 0;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    margin: 0 6%;\n  }\n",
            ]))
        ),
        le = dn.a.span(
          I ||
            (I = Object(ln.a)([
              "\n  color: white;\n  text-transform: uppercase;\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n\n  @media (min-width: 768px) {\n    font-size: 3.4rem;\n  }\n  @media (max-height: 668px) {\n    margin-top: 20px;\n    font-size: 2.2rem;\n  }\n",
            ]))
        ),
        de = dn.a.div(
          q ||
            (q = Object(ln.a)([
              "\n  width: 220px;\n  background-color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 1rem;\n  color: hsl(237, 49%, 15%);\n  cursor: pointer;\n\n  &:hover {\n  background-color: transparent;\n  color: white;\n  border: 2px dashed white;\n  }\n\n  @media (min-width: 768px) {\n    background-color: white;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 10px 20px;\n    border-radius: 5px;\n    font-size: 0.8rem;\n  }\n",
            ]))
        ),
        me = dn.a.div(
          G ||
            (G = Object(ln.a)([
              "\n  grid-row: 1;\n  grid-column: 2;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        pe = function (n) {
          var e,
            t,
            r,
            i = n.score,
            a = n.monChoix,
            s = n.setScore,
            o = n.handleChange,
            c = Object(rn.useState)(""),
            l = Object(cn.a)(c, 2),
            d = l[0],
            m = l[1],
            p = Object(rn.useState)(""),
            x = Object(cn.a)(p, 2),
            h = x[0],
            j = x[1];
          Object(rn.useEffect)(
            function () {
              m(["rock", "paper", "scissors"][Math.floor(3 * Math.random())]);
            },
            [m]
          );
          return (
            Object(rn.useEffect)(
              function () {
                "rock" === a && "scissors" === d
                  ? (j("win"), s(i + 1))
                  : "rock" === a && "paper" === d
                  ? (j("lose"), s(i - 1))
                  : "paper" === a && "rock" === d
                  ? (j("win"), s(i + 1))
                  : "paper" === a && "scissors" === d
                  ? (j("lose"), s(i - 1))
                  : "scissors" === a && "paper" === d
                  ? (j("win"), s(i + 1))
                  : "scissors" === a && "rock" === d
                  ? (j("lose"), s(i - 1))
                  : j("draw");
              },
              [d]
            ),
            Object(mn.jsxs)(ae, {
              children: [
                Object(mn.jsxs)(se, {
                  children: [
                    Object(mn.jsx)(oe, { children: "You picked" }),
                    Object(mn.jsx)("div", {
                      className: "icon "
                        .concat(a, " ")
                        .concat(
                          "win" === h ? "icon ".concat(a, " winner") : ""
                        ),
                    }),
                  ],
                }),
                "win" === h &&
                  Object(mn.jsxs)(ce, {
                    children: [
                      Object(mn.jsx)(le, { children: "You Win" }),
                      Object(mn.jsx)(
                        de,
                        ((e = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(e, "onClick", o),
                        Object(fn.a)(e, "children", "Play Again"),
                        e)
                      ),
                    ],
                  }),
                "lose" === h &&
                  Object(mn.jsxs)(ce, {
                    children: [
                      Object(mn.jsx)(le, { children: "You Lose" }),
                      Object(mn.jsx)(
                        de,
                        ((t = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(t, "onClick", o),
                        Object(fn.a)(t, "children", "Play Again"),
                        t)
                      ),
                    ],
                  }),
                "draw" === h &&
                  Object(mn.jsxs)(ce, {
                    children: [
                      Object(mn.jsx)(le, { children: "Draw" }),
                      Object(mn.jsx)(
                        de,
                        ((r = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(fn.a)(r, "onClick", o),
                        Object(fn.a)(r, "children", "Play Again"),
                        r)
                      ),
                    ],
                  }),
                Object(mn.jsxs)(me, {
                  children: [
                    Object(mn.jsx)(oe, { children: "The House Picked" }),
                    Object(mn.jsx)("div", {
                      className: "icon "
                        .concat(d, " ")
                        .concat(
                          "lose" === h ? "icon ".concat(d, " winner") : ""
                        ),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        xe = dn.a.footer(K || (K = Object(ln.a)(["\n  width: 100vw;\n"]))),
        he = dn.a.div(
          Q ||
            (Q = Object(ln.a)([
              "\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  transform: translate(-50%);\n  bottom: 1rem;\n  font-size: 0.7rem;\n  color: white;\n\n  a {\n    font-size: 0.7rem;\n    color: hsl(39, 89%, 49%);\n    text-decoration: none;\n  }\n  a:hover {\n    color: hsl(349, 71%, 52%);\n  }\n",
            ]))
        ),
        je = dn.a.button(
          U ||
            (U = Object(ln.a)([
              "\n  position: absolute;\n  bottom: 3rem;\n  right: 1rem;\n  padding: 10px 25px;\n  border: 2px solid hsl(217, 16%, 45%);\n  border-radius: 0.4rem;\n  color: hsl(217, 16%, 45%);\n  background: none;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  &:hover {\n    border: 3px solid white;\n    background: hsl(230, 89%, 62%);\n    color: white;\n    cursor: pointer;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n  @media(min-width: 768px) {\n    right: 2rem;\n  }\n",
            ]))
        ),
        be = dn.a.section(
          V ||
            (V = Object(ln.a)([
              "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: hsl(229, 25%, 31%);\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 30px;\n  transition: 0.3s ease-in-out;\n\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 415px;\n  }\n",
            ]))
        ),
        ue = dn.a.article(
          $ ||
            ($ = Object(ln.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  h1 {\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n    grid-raw: 1;\n  }\n  @media (max-width: 768px) {\n    h1 {\n      font-size: 2.1rem;\n      position: absolute;\n      top: 10%;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n  }\n",
            ]))
        ),
        fe = dn.a.button(
          nn ||
            (nn = Object(ln.a)([
              "\n  background: none;\n  border: none;\n  align-self: center;\n  color: hsl(229, 25%, 31%);\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n\n  img:hover {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    -webkit-transition: -webkit-transform 500ms ease-in-out;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n\n  @media (max-width: 768px) {\n    position: absolute;\n    bottom: 7%;\n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n",
            ]))
        ),
        ge = dn.a.img(
          en || (en = Object(ln.a)(["\n  width: 100%;\n  max-width: 400px;\n"]))
        ),
        Oe = function () {
          var n = Object(rn.useState)(!1),
            e = Object(cn.a)(n, 2),
            t = e[0],
            r = e[1];
          return Object(mn.jsxs)(xe, {
            children: [
              Object(mn.jsxs)(he, {
                class: "attribution",
                children: [
                  "Challenge by",
                  " ",
                  Object(mn.jsx)("a", {
                    href: "https://www.frontendmentor.io?ref=challenge",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Frontend Mentor",
                  }),
                  ". Coded by ",
                  Object(mn.jsx)("a", {
                    href: "https://github.com/Zepolimer?tab=repositories",
                    children: "Remi Lopez",
                  }),
                  ".",
                ],
              }),
              Object(mn.jsx)(je, {
                onClick: function () {
                  return r(!0);
                },
                children: "Rules",
              }),
              t
                ? Object(mn.jsxs)(be, {
                    children: [
                      Object(mn.jsxs)(ue, {
                        children: [
                          Object(mn.jsx)("h1", { children: "Rules" }),
                          Object(mn.jsx)(fe, {
                            onClick: function () {
                              return r(!1);
                            },
                            children: Object(mn.jsx)("img", {
                              src: "./images/icon-close.svg",
                              alt: "Close",
                            }),
                          }),
                        ],
                      }),
                      Object(mn.jsx)(ge, {
                        src: "./images/image-rules.svg",
                        alt: "Rules",
                      }),
                    ],
                  })
                : null,
            ],
          });
        },
        we = function () {
          var n = Object(rn.useState)(0),
            e = Object(cn.a)(n, 2),
            t = e[0],
            r = e[1],
            i = Object(rn.useState)(""),
            a = Object(cn.a)(i, 2),
            s = a[0],
            o = a[1],
            c = Object(rn.useState)(!1),
            l = Object(cn.a)(c, 2),
            d = l[0],
            m = l[1],
            p = function () {
              m(!d);
            };
          return Object(mn.jsx)(an.a, {
            children: Object(mn.jsxs)(mn.Fragment, {
              children: [
                Object(mn.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(mn.jsx)(Qn, { score: t }),
                    d
                      ? Object(mn.jsx)(pe, {
                          monChoix: s,
                          score: t,
                          setScore: r,
                          handleChange: p,
                        })
                      : Object(mn.jsx)(ie, { setMonChoix: o, handleChange: p }),
                  ],
                }),
                Object(mn.jsx)(Oe, {}),
              ],
            }),
          });
        },
        ke = dn.a.button(
          tn ||
            (tn = Object(ln.a)([
              "\n  position: absolute;\n  bottom: 3rem;\n  left: 1rem;\n  padding: 10px 10px;\n  border: 2px solid hsl(217, 16%, 45%);\n  border-radius: 0.4rem;\n  color: hsl(217, 16%, 45%);\n  background: none;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  &:hover {\n    border: 3px solid white;\n    background: hsl(230, 89%, 62%);\n    color: white;\n    cursor: pointer;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n  @media(min-width: 768px) {\n    left: 2rem;\n  }\n",
            ]))
        ),
        ve = function () {
          var n = Object(rn.useState)(!0),
            e = Object(cn.a)(n, 2),
            t = e[0],
            r = e[1];
          return Object(mn.jsxs)(an.a, {
            children: [
              t && Object(mn.jsx)(Bn, { onClick: t }),
              !t && Object(mn.jsx)(we, {}),
              Object(mn.jsx)(ke, {
                onClick: function () {
                  return r(!t);
                },
                children: "Switch",
              }),
            ],
          });
        },
        ye = function () {
          return Object(mn.jsx)(mn.Fragment, {
            children: Object(mn.jsx)(ve, {}),
          });
        };
      on.a.render(
        Object(mn.jsx)(an.a, { children: Object(mn.jsx)(ye, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.f8ab4329.chunk.js.map
