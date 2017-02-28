webpackJsonp([14],{

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(623),
  /* template */
  __webpack_require__(647),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70243aa1", Component.options)
  } else {
    hotAPI.reload("data-v-70243aa1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Tabs', {
      attrs: {
        "active-key": "key1"
      }
    }, [_c('Tab-pane', {
      attrs: {
        "label": "标签一",
        "ikey": "key1"
      }
    }, [_vm._v("标签一的内容")]), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签二",
        "ikey": "key2"
      }
    }, [_vm._v("标签二的内容")]), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签三",
        "ikey": "key3"
      }
    }, [_vm._v("标签三的内容")])], 1), _vm._v(" "), _c('Tabs', {
      attrs: {
        "type": "card"
      }
    }, [_c('Tab-pane', {
      attrs: {
        "label": "标签一"
      }
    }, [_vm._v("标签一的内容")]), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签二",
        "closable": true
      }
    }, [_vm._v("标签二的内容")]), _vm._v(" "), _c('Tab-pane', {
      attrs: {
        "label": "标签三"
      }
    }, [_vm._v("标签三的内容")])], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-70243aa1", module.exports);
  }
}

/***/ })

});