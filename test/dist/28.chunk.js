webpackJsonp([28],{

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(606),
  /* template */
  __webpack_require__(662),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2ebe798", Component.options)
  } else {
    hotAPI.reload("data-v-f2ebe798", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        v: function v(data) {
            console.log(data);
        }
    }
};

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('Dropdown', {
      attrs: {
        "trigger": "click"
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n        北京小吃\n        "), _c('Icon', {
      attrs: {
        "type": "arrow-down-b"
      }
    })], 1), _vm._v(" "), _c('Dropdown-menu', {
      slot: "list"
    }, [_c('Dropdown-item', [_vm._v("驴打滚")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("炸酱面")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("豆汁儿")]), _vm._v(" "), _c('Dropdown', {
      attrs: {
        "placement": "right-start"
      }
    }, [_c('Dropdown-item', [_vm._v("\n                北京烤鸭\n                "), _c('Icon', {
      attrs: {
        "type": "ios-arrow-right"
      }
    })], 1), _vm._v(" "), _c('Dropdown-menu', {
      slot: "list"
    }, [_c('Dropdown-item', [_vm._v("挂炉烤鸭")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("焖炉烤鸭")])], 1)], 1), _vm._v(" "), _c('Dropdown-item', [_vm._v("冰糖葫芦")])], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f2ebe798", module.exports);
  }
}

/***/ })

});