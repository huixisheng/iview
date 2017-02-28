webpackJsonp([24],{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(610),
  /* template */
  __webpack_require__(632),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ebf63b4", Component.options)
  } else {
    hotAPI.reload("data-v-0ebf63b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {
        confirm: function confirm() {
            var _this = this;

            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                onOk: function onOk() {
                    _this.$Message.info('点击了确定');
                },
                onCancel: function onCancel() {
                    _this.$Message.info('点击了取消');
                }
            });
        },
        custom: function custom() {
            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                okText: 'OK',
                cancelText: 'Cancel'
            });
        },
        async: function async() {
            var _this2 = this;

            this.$Modal.confirm({
                title: '确认对话框标题',
                content: '<p>对话框将在 2秒 后关闭</p>',
                loading: true,
                onOk: function onOk() {
                    setTimeout(function () {
                        _this2.$Modal.remove();
                        _this2.$Message.info('异步关闭了对话框');
                    }, 2000);
                }
            });
        }
    }
};

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.confirm($event);
        }
      }
    }, [_vm._v("标准")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.custom($event);
        }
      }
    }, [_vm._v("自定义按钮文字")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.async($event);
        }
      }
    }, [_vm._v("异步关闭")])], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0ebf63b4", module.exports);
  }
}

/***/ })

});