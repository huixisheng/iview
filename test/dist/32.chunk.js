webpackJsonp([32],{

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(598),
  /* template */
  __webpack_require__(655),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa99486e", Component.options)
  } else {
    hotAPI.reload("data-v-aa99486e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { Alert: _iview.Alert, Icon: _iview.Icon }
};

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Alert', {
      attrs: {
        "show-icon": "",
        "banner": "",
        "closable": ""
      }
    }, [_vm._v("消息提示文案")]), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "success",
        "show-icon": ""
      }
    }, [_vm._v("成功提示文案")]), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": "",
        "banner": ""
      }
    }, [_vm._v("警告提示文案")]), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "error",
        "show-icon": ""
      }
    }, [_vm._v("错误提示文案")]), _vm._v(" "), _c('Alert', {
      attrs: {
        "show-icon": ""
      }
    }, [_vm._v("\n        消息提示文案\n        "), _c('template', {
      slot: "desc"
    }, [_vm._v("消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案")])], 2), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "success",
        "show-icon": ""
      }
    }, [_vm._v("\n        成功提示文案\n        "), _c('span', {
      slot: "desc"
    }, [_vm._v("成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案")])]), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "warning",
        "show-icon": ""
      }
    }, [_vm._v("\n        警告提示文案\n        "), _c('template', {
      slot: "desc"
    }, [_vm._v("\n            警告的提示描述文案警告的提示描述文案警告的提示描述文案\n        ")])], 2), _vm._v(" "), _c('Alert', {
      attrs: {
        "type": "error",
        "show-icon": ""
      }
    }, [_vm._v("\n        错误提示文案\n        "), _c('span', {
      slot: "desc"
    }, [_vm._v("\n            自定义错误描述文案。\n        ")])]), _vm._v(" "), _c('Alert', {
      attrs: {
        "show-icon": ""
      }
    }, [_vm._v("\n        自定义图标\n        "), _c('Icon', {
      attrs: {
        "type": "ios-lightbulb-outline"
      },
      slot: "icon"
    }), _vm._v(" "), _c('template', {
      slot: "desc"
    }, [_vm._v("自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案")])], 2)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-aa99486e", module.exports);
  }
}

/***/ })

});