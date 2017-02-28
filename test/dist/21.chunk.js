webpackJsonp([21],{

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(615),
  /* template */
  __webpack_require__(661),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/poptip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] poptip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebef09e6", Component.options)
  } else {
    hotAPI.reload("data-v-ebef09e6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticStyle: {
        "margin": "100px"
      }
    }, [_c('Poptip', {
      attrs: {
        "trigger": "hover",
        "placement": "bottom",
        "title": "提示标题",
        "content": "提示内容"
      }
    }, [_c('i-button', [_vm._v("hover 激活")])], 1), _vm._v(" "), _c('Poptip', {
      attrs: {
        "title": "提示标题",
        "placement": "bottom",
        "content": "提示内容"
      }
    }, [_c('i-button', [_vm._v("click 激活")])], 1), _vm._v(" "), _c('Poptip', {
      attrs: {
        "trigger": "focus",
        "title": "提示标题",
        "content": "提示内容"
      }
    }, [_c('i-input', {
      attrs: {
        "type": "textarea"
      }
    })], 1), _vm._v(" "), _c('Poptip', {
      attrs: {
        "trigger": "focus",
        "placement": "bottom",
        "title": "提示标题",
        "content": "提示内容"
      }
    }, [_c('i-input')], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ebef09e6", module.exports);
  }
}

/***/ })

});