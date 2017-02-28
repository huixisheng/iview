webpackJsonp([2],{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(671)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(627),
  /* template */
  __webpack_require__(648),
  /* scopeId */
  "data-v-74bfd5b0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/tooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74bfd5b0", Component.options)
  } else {
    hotAPI.reload("data-v-74bfd5b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { Tooltip: _iview.Tooltip, iButton: _iview.iButton },
    methods: {
        hide: function hide() {
            _iview.Message.info('hide');
        }
    }
};

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('div', {
      staticClass: "top"
    }, [_c('Tooltip', {
      attrs: {
        "content": "Top Left 文字提示",
        "placement": "top-start"
      },
      on: {
        "on-popper-hide": _vm.hide
      }
    }, [_c('i-button', [_vm._v("上左")])], 1), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Top Center 文字提示",
        "placement": "top"
      }
    }, [_c('i-button', [_vm._v("上边")])], 1), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Top Right 文字提示",
        "placement": "top-end"
      }
    }, [_c('i-button', [_vm._v("上右")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "center"
    }, [_c('div', {
      staticClass: "center-left"
    }, [_c('Tooltip', {
      attrs: {
        "content": "Left Top 文字提示",
        "placement": "left-start"
      }
    }, [_c('i-button', [_vm._v("左上")])], 1), _c('br'), _c('br'), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Left Center 文字提示",
        "placement": "left"
      }
    }, [_c('i-button', [_vm._v("左边")])], 1), _c('br'), _c('br'), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Left Bottom 文字提示",
        "placement": "left-end"
      }
    }, [_c('i-button', [_vm._v("左下")])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "center-right"
    }, [_c('Tooltip', {
      attrs: {
        "content": "Right Top 文字提示",
        "placement": "right-start"
      }
    }, [_c('i-button', [_vm._v("右上")])], 1), _c('br'), _c('br'), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Right Center 文字提示",
        "placement": "right"
      }
    }, [_c('i-button', [_vm._v("右边")])], 1), _c('br'), _c('br'), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Right Bottom 文字提示",
        "placement": "right-end"
      }
    }, [_c('i-button', [_vm._v("右下")])], 1)], 1)]), _vm._v(" "), _c('div', {
      staticClass: "bottom"
    }, [_c('Tooltip', {
      attrs: {
        "content": "Bottom Left 文字提示",
        "placement": "bottom-start"
      }
    }, [_c('i-button', [_vm._v("下左")])], 1), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Bottom Center 文字提示",
        "placement": "bottom"
      }
    }, [_c('i-button', [_vm._v("下边")])], 1), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "Bottom Right 文字提示",
        "placement": "bottom-end"
      }
    }, [_c('i-button', [_vm._v("下右")])], 1)], 1)]);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-74bfd5b0", module.exports);
  }
}

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});