webpackJsonp([7],{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(672)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(603),
  /* template */
  __webpack_require__(652),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/carousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] carousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ef9ea03", Component.options)
  } else {
    hotAPI.reload("data-v-7ef9ea03", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            currentIndex: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            remove: false,
            pushItem: [],
            arrow: 'hover',
            trigger: 'click',
            dots: 'inside',
            height: 'auto',
            log: []
        };
    },

    methods: {
        push: function push() {
            this.pushItem.push('test');
        },
        slideChange: function slideChange(from, to) {
            this.log.push('From ' + from + ' To ' + to);
        }
    }
};

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Row', [_c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_vm._v("\n            Current Index\n            "), _c('p', [_vm._v(_vm._s(_vm.currentIndex))])]), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('p', [_vm._v("Autoplay")]), _vm._v(" "), _c('i-switch', {
      attrs: {
        "checked": _vm.autoplay,
        "size": "small"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n            Speed "), _c('Slider', {
      attrs: {
        "value": _vm.autoplaySpeed,
        "min": 300,
        "max": 5000
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n            Switch To\n            "), _c('Button-group', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.currentIndex = 0;
        }
      }
    }, [_vm._v("0")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.currentIndex = 1;
        }
      }
    }, [_vm._v("1")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.currentIndex = 2;
        }
      }
    }, [_vm._v("2")])], 1)], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.push($event);
        }
      }
    }, [_vm._v("Push")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.remove = true;
        }
      }
    }, [_vm._v("Remove Front")])], 1)], 1), _vm._v(" "), _c('Row', [_c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_c('p', [_vm._v("Dots")]), _vm._v(" "), _c('Button-group', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.dots = 'inside';
        }
      }
    }, [_vm._v("Inside")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.dots = 'outside';
        }
      }
    }, [_vm._v("Outside")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.dots = 'none';
        }
      }
    }, [_vm._v("None")])], 1)], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_c('p', [_vm._v("Trigger")]), _vm._v(" "), _c('Button-group', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.trigger = 'click';
        }
      }
    }, [_vm._v("Click")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.trigger = 'hover';
        }
      }
    }, [_vm._v("Hover")])], 1)], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n            Arrow\n            "), _c('Button-group', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.arrow = 'hover';
        }
      }
    }, [_vm._v("Hover")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.arrow = 'always';
        }
      }
    }, [_vm._v("Always")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.arrow = 'never';
        }
      }
    }, [_vm._v("Never")])], 1)], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "4"
      }
    }, [_vm._v("\n            Height\n            "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.height = 'auto';
        }
      }
    }, [_vm._v("Auto")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.height = 80;
        }
      }
    }, [_vm._v("Manual")]), _vm._v(" "), _vm.height !== 'auto' ? _c('Slider', {
      attrs: {
        "value": _vm.height,
        "min": 50,
        "max": 200
      }
    }) : _vm._e()], 1)], 1), _vm._v(" "), _c('Carousel', {
      staticStyle: {
        "width": "50%",
        "border": "solid 1px #000",
        "margin-top": "20px"
      },
      attrs: {
        "current-index": _vm.currentIndex,
        "autoplay": _vm.autoplay,
        "autoplay-speed": _vm.autoplaySpeed,
        "dots": _vm.dots,
        "trigger": _vm.trigger,
        "arrow": _vm.arrow,
        "height": _vm.height,
        "easing": "linear"
      },
      on: {
        "on-change": _vm.slideChange
      }
    }, [!_vm.remove ? _c('Carousel-item', [_c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": ""
      }
    }, [_vm._v("\n                警告提示文案\n                "), _c('template', {
      slot: "desc"
    }, [_vm._v("\n                    警告的提示描述文案警告的提示描述文案警告的提示描述文案\n                ")])], 2)], 1) : _vm._e(), _vm._v(" "), _c('Carousel-item', [_c('div', {
      staticStyle: {
        "height": "150px",
        "background": "#f50",
        "position": "relative"
      }
    }, [_c('p', {
      staticStyle: {
        "position": "absolute",
        "width": "100%",
        "color": "#fff",
        "top": "50%",
        "height": "20px",
        "line-height": "20px",
        "margin-top": "-10px",
        "text-align": "center"
      }
    }, [_vm._v("test font 定高测试")])])]), _vm._v(" "), _c('Carousel-item', [_c('div', {
      staticStyle: {
        "height": "100%",
        "min-height": "20px",
        "background": "#f50",
        "position": "relative"
      }
    }, [_c('p', {
      staticStyle: {
        "position": "absolute",
        "width": "100%",
        "color": "#fff",
        "top": "50%",
        "height": "20px",
        "line-height": "20px",
        "margin-top": "-10px",
        "text-align": "center"
      }
    }, [_vm._v("test font 居中测试")])])]), _vm._v(" "), _c('Carousel-item', [_c('Card', {
      staticStyle: {
        "width": "350px"
      }
    }, [_c('p', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-film-outline"
      }
    }), _vm._v("\n                    经典电影\n                ")], 1), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#"
      },
      slot: "extra"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-loop-strong"
      }
    }), _vm._v("\n                    换一换\n                ")], 1), _vm._v(" "), _c('ul')])], 1), _vm._v(" "), _c('Carousel-item', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('Icon', {
      staticStyle: {
        "font-size": "5em"
      },
      attrs: {
        "type": "checkmark"
      }
    })], 1), _vm._v(" "), _c('Carousel-item', [_vm._v("test3")]), _vm._v(" "), _vm._l(_vm.pushItem, function (item) {
      return _c('Carousel-item', {
        attrs: {
          "track-by": "$index"
        }
      }, [_c('Icon', {
        staticStyle: {
          "font-size": "5em"
        },
        attrs: {
          "type": "checkmark"
        }
      }), _vm._v(_vm._s(item) + "\n        ")], 1);
    })], 2), _vm._v(" "), _c('div', {
      staticStyle: {
        "max-height": "200px",
        "overflow-y": "scroll"
      }
    }, _vm._l(_vm.log, function (item) {
      return _c('p', {
        attrs: {
          "track-by": "$index"
        }
      }, [_vm._v(_vm._s(item))]);
    })), _vm._v(" "), _c('div', {
      staticClass: "bar-placeholder"
    }), _vm._v(" "), _c('Card', {
      staticStyle: {
        "width": "350px"
      }
    }, [_c('p', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-film-outline"
      }
    }), _vm._v("\n            经典电影\n        ")], 1), _vm._v(" "), _c('Carousel', [!_vm.remove ? _c('Carousel-item', [_c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": ""
      }
    }, [_vm._v("\n                    警告提示文案\n                    "), _c('template', {
      slot: "desc"
    }, [_vm._v("\n                        警告的提示描述文案警告的提示描述文案警告的提示描述文案\n                    ")])], 2)], 1) : _vm._e(), _vm._v(" "), _c('Carousel-item', [_c('div', {
      staticStyle: {
        "height": "100%",
        "min-height": "20px",
        "background": "#f50",
        "position": "relative"
      }
    }, [_c('p', {
      staticStyle: {
        "position": "absolute",
        "width": "100%",
        "color": "#fff",
        "top": "50%",
        "height": "20px",
        "line-height": "20px",
        "margin-top": "-10px",
        "text-align": "center"
      }
    }, [_vm._v("test font 定高测试")])])]), _vm._v(" "), _c('Carousel-item', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('Icon', {
      staticStyle: {
        "font-size": "5em"
      },
      attrs: {
        "type": "checkmark"
      }
    })], 1)], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "bar-placeholder"
    }), _vm._v(" "), _c('Tabs', [_c('Tab-pane', {
      attrs: {
        "label": "标签一"
      }
    }, [_c('Carousel', [!_vm.remove ? _c('Carousel-item', [_c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": ""
      }
    }, [_vm._v("\n                        警告提示文案\n                        "), _c('template', {
      slot: "desc"
    }, [_vm._v("\n                            警告的提示描述文案警告的提示描述文案警告的提示描述文案\n                        ")])], 2)], 1) : _vm._e(), _vm._v(" "), _c('Carousel-item', [_c('div', {
      staticStyle: {
        "height": "100%",
        "min-height": "20px",
        "background": "#f50",
        "position": "relative"
      }
    }, [_c('p', {
      staticStyle: {
        "position": "absolute",
        "width": "100%",
        "color": "#fff",
        "top": "50%",
        "height": "20px",
        "line-height": "20px",
        "margin-top": "-10px",
        "text-align": "center"
      }
    }, [_vm._v("test font 定高测试")])])]), _vm._v(" "), _c('Carousel-item', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('Icon', {
      staticStyle: {
        "font-size": "5em"
      },
      attrs: {
        "type": "checkmark"
      }
    })], 1)], 1)], 1), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签二",
        "disabled": ""
      }
    }, [_vm._v("标签二的内容")]), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签三"
      }
    }, [_c('Carousel', [!_vm.remove ? _c('Carousel-item', [_c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": ""
      }
    }, [_vm._v("\n                        警告提示文案\n                        "), _c('template', {
      slot: "desc"
    }, [_vm._v("\n                            警告的提示描述文案警告的提示描述文案警告的提示描述文案\n                        ")])], 2)], 1) : _vm._e(), _vm._v(" "), _c('Carousel-item', [_c('div', {
      staticStyle: {
        "height": "100%",
        "min-height": "20px",
        "background": "#f50",
        "position": "relative"
      }
    }, [_c('p', {
      staticStyle: {
        "position": "absolute",
        "width": "100%",
        "color": "#fff",
        "top": "50%",
        "height": "20px",
        "line-height": "20px",
        "margin-top": "-10px",
        "text-align": "center"
      }
    }, [_vm._v("test font 定高测试")])])]), _vm._v(" "), _c('Carousel-item', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('Icon', {
      staticStyle: {
        "font-size": "5em"
      },
      attrs: {
        "type": "checkmark"
      }
    })], 1)], 1)], 1)], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7ef9ea03", module.exports);
  }
}

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});