webpackJsonp([6],{

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(674)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(613),
  /* template */
  __webpack_require__(659),
  /* scopeId */
  "data-v-e43b5106",
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/other.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] other.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e43b5106", Component.options)
  } else {
    hotAPI.reload("data-v-e43b5106", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Affix', [_c('span', {
      staticClass: "demo-affix"
    }, [_vm._v("固定在最顶部")])]), _vm._v(" "), _c('Back-top', {
      attrs: {
        "height": 100,
        "bottom": 100
      }
    }, [_c('div', {
      staticClass: "top"
    }, [_vm._v("返回顶端")])]), _vm._v(" "), _c('Spin', {
      attrs: {
        "size": "small"
      }
    }), _vm._v(" "), _c('Spin'), _vm._v(" "), _c('Spin', {
      attrs: {
        "size": "large"
      }
    }), _vm._v(" "), _c('Row', [_c('i-col', {
      staticClass: "demo-spin-col",
      attrs: {
        "span": "8"
      }
    }, [_c('Spin', {
      attrs: {
        "fix": ""
      }
    }, [_vm._v("加载中...")])], 1), _vm._v(" "), _c('i-col', {
      staticClass: "demo-spin-col",
      attrs: {
        "span": "8"
      }
    }, [_c('Spin', {
      attrs: {
        "fix": ""
      }
    }, [_c('Icon', {
      staticClass: "demo-spin-icon-load",
      attrs: {
        "type": "load-c",
        "size": "18"
      }
    }), _vm._v(" "), _c('div', [_vm._v("Loading")])], 1)], 1), _vm._v(" "), _c('i-col', {
      staticClass: "demo-spin-col",
      attrs: {
        "span": "8"
      }
    }, [_c('Spin', {
      attrs: {
        "fix": ""
      }
    }, [_c('div', {
      staticClass: "loader"
    }, [_c('svg', {
      staticClass: "circular",
      attrs: {
        "viewBox": "25 25 50 50"
      }
    }, [_c('i-circle', {
      pre: true,
      attrs: {
        "class": "path",
        "cx": "50",
        "cy": "50",
        "r": "20",
        "fill": "none",
        "stroke-width": "5",
        "stroke-miterlimit": "10"
      }
    })], 1)])])], 1)], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e43b5106", module.exports);
  }
}

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});