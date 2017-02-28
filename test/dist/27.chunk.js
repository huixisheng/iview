webpackJsonp([27],{

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(607),
  /* template */
  __webpack_require__(650),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d37fe32", Component.options)
  } else {
    hotAPI.reload("data-v-7d37fe32", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            formValidate: {
                input: '123',
                ajax: true
            },
            ruleValidate: {}
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            var _this = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this.$Message.success('提交成功!');
                } else {
                    _this.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('i-form', {
      ref: "form-validate",
      attrs: {
        "model": _vm.formValidate,
        "rules": _vm.ruleValidate,
        "label-width": 100
      }
    }, [_c('Form-item', {
      attrs: {
        "label": "输入框",
        "prop": "input"
      }
    }, [_c('i-input', {
      attrs: {
        "value": _vm.formValidate.input,
        "placeholder": "请输入"
      }
    })], 1), _vm._v(" "), _c('Form-item', {
      attrs: {
        "label": "Ajax：",
        "prop": "ajax"
      }
    }, [_c('div', {
      slot: "label"
    }, [_c('span', [_vm._v("Ajax")]), _vm._v(" "), _c('Tooltip', {
      attrs: {
        "content": "基于 axios"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-help",
        "size": "14",
        "color": "#3399ff"
      }
    })], 1), _vm._v(" "), _c('span', [_vm._v("：")])], 1), _vm._v(" "), _c('i-switch', {
      attrs: {
        "checked": _vm.formValidate.ajax
      }
    })], 1), _vm._v(" "), _c('Form-item', [_c('i-button', {
      attrs: {
        "type": "primary"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.handleSubmit('form-validate');
        }
      }
    }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
      staticStyle: {
        "margin-left": "8px"
      },
      attrs: {
        "type": "ghost"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.handleReset('form-validate');
        }
      }
    }, [_vm._v("重置")])], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d37fe32", module.exports);
  }
}

/***/ })

});