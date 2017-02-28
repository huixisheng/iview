webpackJsonp([29],{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(605),
  /* template */
  __webpack_require__(633),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/date.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10035ed1", Component.options)
  } else {
    hotAPI.reload("data-v-10035ed1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Date-picker', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "type": "datetime",
        "placeholder": "选择日期和时间"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Date-picker', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "type": "datetime",
        "format": "yyyy-MM-dd HH:mm",
        "placeholder": "选择日期和时间（不含秒）"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Date-picker', {
      staticStyle: {
        "width": "300px"
      },
      attrs: {
        "type": "datetimerange",
        "placeholder": "选择日期和时间"
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('Date-picker', {
      staticStyle: {
        "width": "300px"
      },
      attrs: {
        "type": "datetimerange",
        "format": "yyyy-MM-dd HH:mm",
        "placeholder": "选择日期和时间（不含秒）"
      }
    })], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-10035ed1", module.exports);
  }
}

/***/ })

});