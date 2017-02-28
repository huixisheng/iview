webpackJsonp([16],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(621),
  /* template */
  __webpack_require__(638),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27323c97", Component.options)
  } else {
    hotAPI.reload("data-v-27323c97", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { iSwitch: _iview.iSwitch, Message: _iview.Message, iButton: _iview.iButton, Icon: _iview.Icon },
    data: function data() {
        return {
            disabled: true
        };
    },

    methods: {
        change: function change(status) {
            _iview.Message.info('开关状态：' + status);
        }
    }
};

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('i-switch', {
      on: {
        "on-change": _vm.change
      }
    }), _vm._v(" "), _c('i-switch', [_c('span', {
      slot: "open"
    }, [_vm._v("开")]), _vm._v(" "), _c('span', {
      slot: "close"
    }, [_vm._v("关")])]), _vm._v(" "), _c('i-switch', {
      attrs: {
        "size": "large"
      }
    }, [_c('span', {
      slot: "open"
    }, [_vm._v("ON")]), _vm._v(" "), _c('span', {
      slot: "close"
    }, [_vm._v("OFF")])]), _vm._v(" "), _c('i-switch', [_c('Icon', {
      attrs: {
        "type": "android-done"
      },
      slot: "open"
    }), _vm._v(" "), _c('Icon', {
      attrs: {
        "type": "android-close"
      },
      slot: "close"
    })], 1), _vm._v(" "), _c('i-switch', {
      attrs: {
        "disabled": _vm.disabled
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.disabled = !_vm.disabled;
        }
      }
    }, [_vm._v("Toggle Disabled")]), _vm._v(" "), _c('i-switch', {
      attrs: {
        "size": "small"
      }
    })], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27323c97", module.exports);
  }
}

/***/ })

});