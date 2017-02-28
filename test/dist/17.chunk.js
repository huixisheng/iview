webpackJsonp([17],{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(619),
  /* template */
  __webpack_require__(651),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dd45fc4", Component.options)
  } else {
    hotAPI.reload("data-v-7dd45fc4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { Slider: _iview.Slider, Icon: _iview.Icon },
    data: function data() {
        return {
            value: [20, 50]
        };
    },

    methods: {
        format: function format(val) {
            return null;
            return '\u8FDB\u5EA6\uFF1A' + val + '%';
        },
        change: function change(data) {
            console.log(data);
        },
        input: function input(value) {
            console.log(value);
        }
    }
};

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticStyle: {
        "width": "140px",
        "margin": "100px"
      }
    }, [_c('div', {
      domProps: {
        "textContent": _vm._s(_vm.value)
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "step": 15
      },
      on: {
        "on-change": _vm.change,
        "on-input": _vm.input
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": 40,
        "tip-format": _vm.format
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": _vm.value,
        "show-input": "",
        "show-stops": "",
        "range": "",
        "step": 13
      },
      on: {
        "on-change": _vm.change,
        "on-input": _vm.input
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "max": 10
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "step": 13
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "step": 13,
        "max": 60
      }
    }), _vm._v(" "), _c('Icon', {
      attrs: {
        "type": "checkmark-circled",
        "size": "40",
        "color": "#f60"
      }
    }), _vm._v(" "), _c('p', [_vm._v("附近的首付款是东方红看就是")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": 75
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": [20, 50],
        "range": ""
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": [20, 50],
        "range": "",
        "show-tip": "always"
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": [20, 50],
        "range": "",
        "show-tip": "hover"
      }
    }), _vm._v(" "), _c('Slider', {
      attrs: {
        "value": [20, 50],
        "show-tip": "never"
      }
    })], 1);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "ivu-article"
    }, [_c('a', {
      attrs: {
        "href": "http://www.iviewui.com",
        "target": "_blank"
      }
    }, [_vm._v("iView")])]);
  }] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7dd45fc4", module.exports);
  }
}

/***/ })

});