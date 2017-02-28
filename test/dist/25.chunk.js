webpackJsonp([25],{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(609),
  /* template */
  __webpack_require__(663),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fda977fc", Component.options)
  } else {
    hotAPI.reload("data-v-fda977fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            theme1: 'light',
            ak: '1'
        };
    },

    methods: {
        modelChange: function modelChange(val) {
            this.theme1 = val;
        }
    }
};

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Menu', {
      attrs: {
        "mode": "horizontal",
        "theme": _vm.theme1,
        "active-key": _vm.ak
      }
    }, [_c('Menu-item', {
      attrs: {
        "ikey": "1"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-paper"
      }
    }), _vm._v("\n            内容管理\n        ")], 1), _vm._v(" "), _c('Menu-item', {
      attrs: {
        "ikey": "2"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-people"
      }
    }), _vm._v("\n            用户管理\n        ")], 1), _vm._v(" "), _c('Submenu', {
      attrs: {
        "ikey": "3"
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('Icon', {
      attrs: {
        "type": "stats-bars"
      }
    }), _vm._v("\n                统计分析\n            ")], 1), _vm._v(" "), [_c('Menu-group', {
      attrs: {
        "title": "使用"
      }
    }, [_c('Menu-item', {
      attrs: {
        "ikey": "3-1"
      }
    }, [_vm._v("新增和启动")]), _vm._v(" "), _c('Menu-item', {
      attrs: {
        "ikey": "3-2"
      }
    }, [_vm._v("活跃分析")]), _vm._v(" "), _c('Menu-item', {
      attrs: {
        "ikey": "3-3"
      }
    }, [_vm._v("时段分析")])], 1), _vm._v(" "), _c('Menu-group', {
      attrs: {
        "title": "留存"
      }
    }, [_c('Menu-item', {
      attrs: {
        "ikey": "3-4"
      }
    }, [_vm._v("用户留存")]), _vm._v(" "), _c('Menu-item', {
      attrs: {
        "ikey": "3-5"
      }
    }, [_vm._v("流失用户")])], 1)]], 2), _vm._v(" "), _c('Menu-item', {
      attrs: {
        "ikey": "4"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "settings"
      }
    }), _vm._v("\n            综合设置\n        ")], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("切换主题")]), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.theme1
      },
      on: {
        "prop-change-model": _vm.modelChange
      }
    }, [_c('Radio', {
      attrs: {
        "value": "light"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "dark"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "primary"
      }
    })], 1), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.ak = '2';
        }
      }
    }, [_vm._v("change next")])], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fda977fc", module.exports);
  }
}

/***/ })

});