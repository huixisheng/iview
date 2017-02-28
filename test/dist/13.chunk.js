webpackJsonp([13],{

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(624),
  /* template */
  __webpack_require__(649),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c949772", Component.options)
  } else {
    hotAPI.reload("data-v-7c949772", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: { Tag: _iview.Tag, Modal: _iview.Modal, iButton: _iview.iButton },
    data: function data() {
        return {
            modal1: false,
            loading: true
        };
    },

    methods: {
        showModal: function showModal() {
            this.$refs.modal1.visible = true;
        },
        ok: function ok() {
            var _this = this;

            setTimeout(function () {
                _this.modal1 = false;
            }, 2000);
        },
        clickTag: function clickTag() {
            console.log('click tag');
        },
        clickTagClose: function clickTagClose() {
            console.log('click tag close-icon');
        }
    }
};

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Tag', [_vm._v("标签一")]), _vm._v(" "), _c('Tag', [_vm._v("标签二")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "closable": ""
      }
    }, [_vm._v("标签三")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "closable": "",
        "color": "blue"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "closable": "",
        "color": "green"
      }
    }, [_vm._v("标签二")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "closable": "",
        "color": "red"
      }
    }, [_vm._v("标签三")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "closable": "",
        "color": "yellow"
      }
    }, [_vm._v("标签四")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "blue"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "blue",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "green"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "green",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "red"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "red",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "yellow"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "dot",
        "color": "yellow",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "blue"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "blue",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "green"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "green",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "red"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "red",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "yellow"
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "yellow",
        "closable": ""
      }
    }, [_vm._v("标签一")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.showModal($event);
        }
      }
    }, [_vm._v("显示对话框")]), _vm._v(" "), _c('Modal', {
      ref: "modal1",
      attrs: {
        "title": "普通的Modal对话框标题",
        "loading": _vm.loading
      },
      on: {
        "on-ok": _vm.ok
      }
    }, [_c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")]), _vm._v(" "), _c('p', [_vm._v("对话框内容")]), _vm._v("\n        " + _vm._s(_vm.loading) + "\n        "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.loading = true;
        }
      }
    }, [_vm._v("true")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.loading = false;
        }
      }
    }, [_vm._v("false")])], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Tag', {
      attrs: {
        "type": "border",
        "color": "yellow",
        "closable": ""
      },
      on: {
        "click": _vm.clickTag,
        "on-close": _vm.clickTagClose
      }
    }, [_vm._v("标签一")])], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7c949772", module.exports);
  }
}

/***/ })

});