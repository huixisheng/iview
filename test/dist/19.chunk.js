webpackJsonp([19],{

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(617),
  /* template */
  __webpack_require__(654),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/rate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-835859fa", Component.options)
  } else {
    hotAPI.reload("data-v-835859fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {},
    data: function data() {
        return {
            valueText: 3,
            valueCustomText: 3.8
        };
    },

    computed: {},
    methods: {}
};

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('Row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Rate', {
      attrs: {
        "show-text": "",
        "value": _vm.valueText
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Rate', {
      attrs: {
        "show-text": "",
        "value": _vm.valueCustomText
      }
    }, [_c('span', {
      staticStyle: {
        "color": "#f5a623"
      }
    }, [_vm._v(_vm._s(_vm.valueCustomText))])])], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-835859fa", module.exports);
  }
}

/***/ })

});