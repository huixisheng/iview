webpackJsonp([22],{

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(614),
  /* template */
  __webpack_require__(642),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f3b0d9c", Component.options)
  } else {
    hotAPI.reload("data-v-4f3b0d9c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { Page: _iview.Page },
    methods: {
        pc: function pc(page) {
            console.log(page);
        }
    }
};

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Page', {
      staticClass: "classr",
      style: {
        float: 'right'
      },
      attrs: {
        "total": 1000,
        "show-sizer": "",
        "show-elevator": "",
        "show-total": ""
      },
      on: {
        "on-page-size-change": _vm.pc
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Page', {
      staticClass: "classr2",
      attrs: {
        "total": 1000,
        "show-sizer": "",
        "show-elevator": "",
        "show-total": "",
        "size": "small"
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Page', {
      attrs: {
        "current": 2,
        "total": 50,
        "simple": ""
      }
    })], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4f3b0d9c", module.exports);
  }
}

/***/ })

});