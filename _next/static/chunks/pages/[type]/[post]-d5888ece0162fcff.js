(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851], {
    9628: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/[type]/[post]", function() {
        return n(526)
      }])
    },
    3442: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return l
        }
      });
      var r = n(5893),
        o = n(723),
        i = n.n(o);

      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function s(e) {
        return function(e) {
          if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
          if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (!e) return;
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(n);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function l(e) {
        var t = (e.className || " ").split(" ").map((function(e) {
          return i()[e]
        })).filter(Boolean);
        return (0, r.jsx)("section", function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            })))), r.forEach((function(t) {
              c(e, t, n[t])
            }))
          }
          return e
        }({}, e, {
          className: [i().section].concat(s(t)).join(" "),
          children: e.children
        }))
      }
    },
    526: function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        __N_SSG: function() {
          return R
        },
        default: function() {
          return M
        }
      });
      var r = n(5893),
        o = (n(7294), n(9008)),
        i = n.n(o),
        a = n(5675),
        c = n.n(a),
        s = n(1216),
        l = n(3659),
        d = n(5843),
        p = n.n(d),
        m = n(9547),
        u = n.n(m),
        x = n(2004),
        h = n(8643),
        g = n.n(h),
        b = function(e) {
          var t = e.src;
          return (0, r.jsxs)("div", {
            className: "video-placeholder",
            children: [(0, r.jsx)("p", {
              children: "Loading Video..."
            }), (0, r.jsx)("p", {
              id: "sub",
              children: (0, r.jsx)("a", {
                href: t,
                target: "_blank",
                rel: "noreferrer",
                children: "If it takes too long, you can click here to see the video in a new tab."
              })
            })]
          })
        },
        f = "https://res.cloudinary.com/dq8xfyhu4/video/upload/l_logo_pke9dv,o_52,x_-1510,y_-900/",
        y = "v1609691928/CS%20Visualized/",
        j = function(e) {
          var t = e.src,
            n = e.crop;
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u(), {
              id: "2cb62b8d759e2a53",
              children: ".lazyload-wrapper.jsx-2cb62b8d759e2a53{margin:0px -30px;margin-bottom:50px;border-style:solid;border-width:2px;border-color:rgba(255,255,255,.16);-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;-webkit-box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important;-moz-box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important;box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important}video.jsx-2cb62b8d759e2a53{border-style:solid;border-width:2px;border-color:rgba(255,255,255,.16);-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;-webkit-box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important;-moz-box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important;box-shadow:0 10px 24px 0 rgb(0 0 0/65%)!important}"
            }), (0, r.jsx)("div", {
              className: "jsx-2cb62b8d759e2a53",
              children: (0, r.jsx)(s.ZP, {
                className: g()["lazyload-wrapper"],
                height: 600,
                width: "100%",
                offset: 1500,
                once: !0,
                placeholder: (0, r.jsx)(b, {
                  src: "https://res.cloudinary.com/dq8xfyhu4/video/upload/".concat(y, "/CS%20Visualized/").concat(t, ".jpg")
                }),
                children: (0, r.jsx)(x.Z, {
                  autoPlay: !0,
                  playing: !0,
                  controls: !0,
                  loop: !0,
                  width: "100%",
                  height: "auto",
                  muted: !0,
                  config: {
                    file: {
                      attributes: {
                        preload: "true",
                        controlsList: "nodownload",
                        disablePictureInPicture: "true",
                        playsInline: "true",
                        muted: "true",
                        autoPlay: "true"
                      }
                    }
                  },
                  fallback: (0, r.jsx)("img", {
                    alt: "fallback",
                    style: {
                      height: "600px",
                      width: "100%"
                    },
                    src: "".concat(f).concat(y).concat(t, ".jpg"),
                    className: "jsx-2cb62b8d759e2a53"
                  }),
                  url: [{
                    src: "".concat(f).concat(n ? "".concat(n, "/") : "", "ac_none/").concat(y).concat(t, ".webm"),
                    type: "video/webm"
                  }, {
                    src: "".concat(f).concat(n ? "".concat(n, "/") : "", "ac_none/").concat(y).concat(t, ".mp4"),
                    type: "video/mp4"
                  }]
                })
              })
            })]
          })
        },
        _ = n(3294),
        w = n.n(_),
        v = function() {
          return (0, r.jsx)("div", {
            className: w().divider
          })
        },
        N = n(2946),
        k = n(1664),
        O = n.n(k);

      function S() {
        return (0, r.jsx)(N.p, {
          as: "nav",
          className: "border-b-2 fixed w-screen",
          style: {
            borderColor: "#1d1a27",
            backgroundColor: "#13111A",
            zIndex: "100",
            position: "relative"
          },
          children: function(e) {
            e.open;
            return (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("div", {
                className: "max-w-7xl mx-auto py-2 sm:py-1 lg:py-1 container-default",
                children: (0, r.jsx)("div", {
                  className: "relative flex items-center justify-between h-12",
                  children: (0, r.jsx)("div", {
                    className: "flex items-center px-2 lg:px-0",
                    children: (0, r.jsx)(O(), {
                      passHref: !0,
                      href: "/",
                      children: (0, r.jsxs)("div", {
                        className: "flex-shrink-0",
                        style: {
                          cursor: "pointer"
                        },
                        children: [(0, r.jsx)("img", {
                          className: "block lg:hidden h-12 w-auto",
                          src: "/myname.png",
                          alt: "Logo"
                        }), (0, r.jsx)("img", {
                          className: "hidden lg:block h-16 w-auto",
                          src: "/myname.png",
                          alt: "Logo"
                        })]
                      })
                    })
                  })
                })
              })
            })
          }
        })
      }
      var C = n(3442),
        P = n(7819),
        z = n.n(P),
        L = n(7160),
        F = n.n(L),
        I = n(6929),
        A = (n(7313), ["Best Time", "Average Time", "Worst Time", "Space"]),
        E = ["Get", "Insertion", "Search", "Deletion"],
        T = function(e) {
          var t;
          return (0, r.jsx)("div", {
            className: "feature-comparison-wrapper",
            children: null === (t = e.time) || void 0 === t ? void 0 : t.map((function(t, n) {
              var o;
              return (0, r.jsxs)("div", {
                className: "feature-comparison-row-wrapper",
                children: [(0, r.jsx)("div", {
                  className: "feature-comparison-text",
                  children: A[n]
                }), (0, r.jsxs)("div", {
                  className: "w-layout-grid feature-comparison-grid",
                  children: [(0, r.jsxs)("div", {
                    className: "card-about-hero-achievement-text",
                    style: {
                      fontFamily: "Menlo",
                      backgroundImage: "linear-gradient(315deg, #434bff, #ff4b81)",
                      color: "#fff",
                      borderRadius: "7px",
                      padding: "5px 10px",
                      fontSize: "12px",
                      width: "100%",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: ["O(", t, ")"]
                  }), (0, r.jsx)("div", {
                    className: "card-about-hero-achievement-text",
                    children: (null === (o = e.explanation) || void 0 === o ? void 0 : o[n]) || (0, r.jsx)("span", {
                      style: {
                        opacity: .5,
                        fontStyle: "italic"
                      },
                      children: "No explanation provided"
                    })
                  })]
                })]
              }, n)
            }))
          })
        },
        D = function(e) {
          return (0, r.jsx)("div", {
            className: "feature-comparison-wrapper",
            children: (0, r.jsxs)(I.mQ, {
              children: [(0, r.jsx)(I.td, {
                children: E.map((function(e) {
                  return (0, r.jsx)(I.OK, {
                    children: e
                  })
                }))
              }), E.map((function(t, n) {
                var o;
                return (0, r.jsx)(I.x4, {
                  children: (0, r.jsx)(T, {
                    time: e[t.toLowerCase()],
                    explanation: null === (o = e.explanations) || void 0 === o ? void 0 : o[n]
                  })
                })
              }))]
            })
          })
        };

      function H(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          })))), r.forEach((function(t) {
            H(e, t, n[t])
          }))
        }
        return e
      }
      var R = !0,
        M = function(e) {
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(i(), {
              children: [(0, r.jsxs)("title", {
                children: ["Dana Yerlan | ", e.mdx.scope.title]
              }), (0, r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
              }), (0, r.jsx)("meta", {
                property: "og:image",
                content: "https://lydiahallie.io".concat(e.mdx.scope.ogImage)
              }), (0, r.jsx)("meta", {
                property: "og:title",
                content: e.mdx.scope.ogTitle
              }), (0, r.jsx)("meta", {
                property: "og:description",
                content: e.mdx.scope.ogDescription
              }, "description"), (0, r.jsx)("meta", {
                property: "og:url",
                content: "https://lydiahallie.io".concat(e.mdx.scope.pathName)
              }), (0, r.jsx)("meta", {
                property: "og:type",
                content: "article"
              }), (0, r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              }), (0, r.jsx)("meta", {
                name: "description",
                content: e.mdx.scope.ogDescription
              }), (0, r.jsx)("meta", {
                name: "author",
                content: "Dana Yerlan"
              }), (0, r.jsx)("meta", {
                property: "og:locale",
                content: "en_US"
              }), (0, r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }), (0, r.jsx)("meta", {
                name: "twitter:site",
                content: "@lydiahallie"
              }), (0, r.jsx)("meta", {
                name: "twitter:creator",
                content: "@lydiahallie"
              }), (0, r.jsx)("meta", {
                name: "twitter:title",
                content: e.mdx.scope.ogTitle
              }), (0, r.jsx)("meta", {
                name: "twitter:description",
                content: e.mdx.scope.ogDescription
              }), (0, r.jsx)("meta", {
                name: "twitter:image",
                content: "https://lydiahallie.io".concat(e.mdx.scope.ogImage)
              }), (0, r.jsx)("meta", {
                property: "og:image:width",
                content: "1200"
              }), (0, r.jsx)("meta", {
                property: "og:image:height",
                content: "692"
              })]
            }), (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(S, {}), (0, r.jsx)("div", {
                className: F().container,
                children: (0, r.jsxs)(C.Z, {
                  className: "wf-section",
                  children: [(0, r.jsxs)("div", {
                    className: z()["post-container"],
                    children: [(0, r.jsxs)("div", {
                      style: {
                        opacity: 1
                      },
                      className: z()["card-post-item-about-wrapper"],
                      children: [(0, r.jsxs)("div", {
                        className: z()["card-post-item-about-content"],
                        children: [(0, r.jsx)("div", {
                          className: z()["card-post-item-about-icon"],
                          children: (0, r.jsx)(c(), {
                            className: z()["img-logo"],
                            width: "18px",
                            height: "18px",
                            src: "/icons/date.svg",
                            loading: "eager",
                            alt: "Date"
                          })
                        }), "Last updated: ", e.mdx.scope.date]
                      }), (0, r.jsxs)("div", {
                        className: z()["card-post-item-about-content"],
                        children: [(0, r.jsx)("div", {
                          className: z()["card-post-item-about-icon"],
                          children: (0, r.jsx)(c(), {
                            className: z()["img-logo"],
                            width: "18px",
                            height: "18px",
                            src: "/icons/clock.svg",
                            loading: "eager",
                            alt: "Clock"
                          })
                        }), (0, r.jsx)("div", {
                          children: p()(e.mdx.compiledSource).text
                        })]
                      })]
                    }), (0, r.jsx)("h1", {
                      className: z().title,
                      children: e.mdx.scope.title
                    })]
                  }), (0, r.jsx)("div", {
                    className: z()["post-container"],
                    children: (0, r.jsx)(l.R, B({}, e.mdx, {
                      components: {
                        Video: j,
                        AlgoComplexityTable: T,
                        DSComplexityTable: D,
                        LocalImage: function(e) {
                          return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("style", {
                              jsx: !0,
                              children: "\n                      .image-container {\n                        width: 110%;\n                        margin-bottom: 50px;\n                      }\n\n                      @media screen and (max-width: 767px) {\n                        .image-container {\n                          width: 95vw;\n                        }\n                      }\n\n                    "
                            }), (0, r.jsx)("div", {
                              className: "image-container",
                              children: (0, r.jsx)(c(), B({
                                layout: "responsive",
                                objectFit: "contain",
                                objectPosition: "50% 50%",
                                height: 655,
                                width: 1175,
                                style: {
                                  backgroundColor: "#000"
                                },
                                lazyBoundary: "500px",
                                alt: "Flow chart"
                              }, e))
                            })]
                          })
                        },
                        Image: function(e) {
                          return (0, r.jsx)(c(), B({
                            loader: "cloudinary"
                          }, e))
                        },
                        LazyLoad: s.ZP,
                        hr: v,
                        ul: function(e) {
                          return (0, r.jsx)("ul", {
                            className: "text-gray-200 leading-9 text-lg py-4",
                            children: e.children
                          })
                        },
                        ol: function(e) {
                          return (0, r.jsx)("ol", {
                            className: "text-gray-200 leading-9 text-lg py-4",
                            children: e.children
                          })
                        },
                        li: function(e) {
                          return (0, r.jsx)("li", B({}, e, {
                            className: "m-2 ml-4",
                            children: e.children
                          }))
                        },
                        Blue: function(e) {
                          return (0, r.jsx)("strong", {
                            style: {
                              color: "#51B2F3",
                              background: "-webkit-linear-gradient(45deg, #51B2F3, #A8EAB1)",
                              "-webkit-background-clip": "text",
                              "-webkit-text-fill-color": "transparent"
                            },
                            children: e.children
                          })
                        },
                        strong: function(e) {
                          return (0, r.jsx)("strong", {
                            style: {
                              color: "#EDB658",
                              background: "-webkit-linear-gradient(45deg, #EDB658, #E7719B)",
                              "-webkit-background-clip": "text",
                              "-webkit-text-fill-color": "transparent"
                            },
                            children: e.children
                          })
                        },
                        Red: function(e) {
                          return (0, r.jsx)("strong", {
                            style: {
                              color: "#E7427A",
                              background: "-webkit-linear-gradient(45deg, #C585DC, #9055FF)",
                              "-webkit-background-clip": "text",
                              "-webkit-text-fill-color": "transparent"
                            },
                            children: e.children
                          })
                        },
                        code: function(e) {
                          return (0, r.jsxs)("span", B({
                            style: {
                              backgroundColor: "rgb(49 48 52 / 50%)",
                              padding: "0.2rem 0.4rem",
                              fontSize: "85%",
                              margin: "0.2rem",
                              borderRadius: "0.2em",
                              fontFamily: "Menlo",
                              fontWeight: "bolder"
                            }
                          }, e, {
                            children: [" ", e.children]
                          }))
                        },
                        InlineCode: function(e) {
                          return (0, r.jsxs)("span", B({
                            style: {
                              backgroundColor: "rgb(49 48 52 / 50%)",
                              padding: "0.2rem 0.4rem",
                              fontSize: "85%",
                              margin: "0.2rem",
                              borderRadius: "0.2em",
                              fontFamily: "Menlo"
                            }
                          }, e, {
                            children: [" ", e.children]
                          }))
                        }
                      }
                    }))
                  })]
                })
              })]
            })]
          })
        }
    },
    7819: function(e) {
      e.exports = {
        "card-post-item-about-content": "styles_card-post-item-about-content__lWKis",
        "card-post-item-about-wrapper": "styles_card-post-item-about-wrapper__CiyXF",
        "post-container": "styles_post-container__WsAnW",
        "card-post-item-about-icon": "styles_card-post-item-about-icon__lkcLB",
        title: "styles_title__5zTQ_",
        "img-logo": "styles_img-logo__scMsO",
        "rich-text": "styles_rich-text__YS1Lx"
      }
    },
    3294: function(e) {
      e.exports = {
        divider: "styles_divider__vbkkn"
      }
    },
    723: function(e) {
      e.exports = {
        section: "styles_section__2xJbu",
        "blog-post": "styles_blog-post__GLp2T"
      }
    },
    8643: function(e) {
      e.exports = {
        "lazyload-wrapper": "styles_lazyload-wrapper__iNCqt"
      }
    },
    7160: function(e) {
      e.exports = {
        container: "Home_container__bCOhY",
        main: "Home_main__nLjiQ",
        footer: "Home_footer____T7K",
        title: "Home_title__T09hD",
        description: "Home_description__41Owk",
        code: "Home_code__suPER",
        grid: "Home_grid__GxQ85",
        card: "Home_card___LpL1",
        logo: "Home_logo__27_tb"
      }
    }
  },
  function(e) {
    e.O(0, [547, 301, 774, 888, 179], (function() {
      return t = 9628, e(e.s = t);
      var t
    }));
    var t = e.O();
    _N_E = t
  }
]);
