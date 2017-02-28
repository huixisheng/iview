webpackJsonp([0],{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(675)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(611),
  /* template */
  __webpack_require__(658),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/more.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] more.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfc90210", Component.options)
  } else {
    hotAPI.reload("data-v-cfc90210", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            modal9: false,
            modal10: false,
            modal1: false,
            scrollable: false
        };
    },

    methods: {
        showModal1: function showModal1() {
            this.$refs.modal1.visible = true;
        },
        showModal2: function showModal2() {
            this.$refs.modal2.visible = true;
        },
        ok: function ok() {
            var _this = this;

            this.$nextTick(function () {
                return _this.modal1 = true;
            });
            this.$Message.info('点击了确定');
        },
        cancel: function cancel() {
            this.$Message.info('点击了取消');
        },
        instance: function instance(scrollable) {
            this.$Modal.info({
                title: 'test',
                content: 'test',
                scrollable: scrollable
            });
        }
    }
};

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.showModal1($event);
        }
      }
    }, [_vm._v("距离顶部 20px")]), _vm._v(" "), _c('Modal', {
      ref: "modal1",
      attrs: {
        "title": "对话框标题",
        "visible": _vm.modal9,
        "prop-style": {
          top: '20px'
        }
      }
    }, [_c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")])]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.showModal2($event);
        }
      }
    }, [_vm._v("垂直居中")]), _vm._v(" "), _c('Modal', {
      ref: "modal2",
      attrs: {
        "title": "对话框标题",
        "visible": _vm.modal10,
        "class-name": "vertical-center-modal"
      }
    }, [_c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")])]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.instance(true);
        }
      }
    }, [_vm._v("Create Instance Scrollable")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.instance(false);
        }
      }
    }, [_vm._v("Create Instance Non-scrollable")]), _vm._v(" "), _c('div', {
      staticClass: "placeholder"
    })], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cfc90210", module.exports);
  }
}

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)();
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.ivu-modal {\n  top: 0;\n}\n.placeholder {\n  min-height: 2000px;\n  width: 1px;\n}\n.ivu-btn {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(108)("584e9db3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-cfc90210\",\"scoped\":false,\"hasInlineConfig\":false}!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./more.vue", function() {
     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-cfc90210\",\"scoped\":false,\"hasInlineConfig\":false}!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./more.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});