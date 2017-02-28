webpackJsonp([8],{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(669)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(601),
  /* template */
  __webpack_require__(643),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51447d95", Component.options)
  } else {
    hotAPI.reload("data-v-51447d95", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {},
    data: function data() {
        return {
            loading: false,
            loading2: false,
            model6: '',
            cityList: [{
                value: 'beijing',
                label: '北京市'
            }, {
                value: 'shanghai',
                label: '上海市'
            }, {
                value: 'shenzhen',
                label: '深圳市'
            }, {
                value: 'hangzhou',
                label: '杭州市'
            }, {
                value: 'nanjing',
                label: '南京市'
            }, {
                value: 'chongqing',
                label: '重庆市'
            }],
            model1: ''
        };
    },

    methods: {
        selected: function selected() {},
        toLoading: function toLoading() {
            this.loading = true;
        },
        toLoading2: function toLoading2() {
            this.loading2 = true;
        }
    }
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('h4', [_vm._v("基本")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "demo-basic"
    }, [_c('input-number'), _vm._v(" "), _c('Date-picker', {
      staticStyle: {
        "width": "160px",
        "display": "inline-block"
      },
      attrs: {
        "type": "date",
        "placeholder": "选择日期"
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "100px"
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "type": "text",
        "placeholder": "Username"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-person-outline"
      },
      slot: "prepend"
    })], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("按钮")]), _vm._v(" "), _c('i-select', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "model": _vm.model1
      }
    }, _vm._l(_vm.cityList, function (item) {
      return _c('i-option', {
        attrs: {
          "value": item.value
        },
        on: {
          "on-select-selected": _vm.selected
        }
      }, [_vm._v(_vm._s(item.label))]);
    }))], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "success"
      }
    }, [_vm._v("按钮")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "warning"
      }
    }, [_vm._v("按钮")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "error"
      }
    }, [_vm._v("按钮")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "info"
      }
    }, [_vm._v("按钮")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "icon": "ios-search",
        "type": "success"
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
      staticStyle: {
        "width": "400px"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "error",
        "long": "",
        "size": "small"
      }
    }, [_vm._v("按钮")])], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button-group', [_c('i-button', [_vm._v("取消")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")])], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("昨日")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("今日")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("明日")])], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("L")]), _vm._v(" "), _c('i-button', [_vm._v("M")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_vm._v("M")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed"
      }
    }, [_vm._v("R")])], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h4', [_vm._v("配合图标")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "chevron-left"
      }
    }), _vm._v("\n            前进\n        ")], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("\n            后退\n            "), _c('Icon', {
      attrs: {
        "type": "chevron-right"
      }
    })], 1)], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h4', [_vm._v("圆角")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "chevron-left"
      }
    }), _vm._v("\n            前进\n        ")], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("\n            后退\n            "), _c('Icon', {
      attrs: {
        "type": "chevron-right"
      }
    })], 1)], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "size": "large"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "size": "large"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "size": "small"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "size": "small"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h4', [_vm._v("Vertical")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', [_vm._v("取消")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")])], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', [_vm._v("取消")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")])], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("昨日")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("今日")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("明日")])], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("L")]), _vm._v(" "), _c('i-button', [_vm._v("M")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_vm._v("M")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed"
      }
    }, [_vm._v("R")])], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "chevron-left"
      }
    }), _vm._v("\n            前进\n        ")], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("\n            后退\n            "), _c('Icon', {
      attrs: {
        "type": "chevron-right"
      }
    })], 1)], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": ""
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "vertical": "",
        "size": "large"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "vertical": "",
        "size": "large"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "vertical": "",
        "size": "small"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipbackward"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-skipforward"
      }
    })], 1), _vm._v(" "), _c('Button-group', {
      attrs: {
        "shape": "circle",
        "vertical": "",
        "size": "small"
      }
    }, [_c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-wand-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-sunny-outline"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-crop"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "icon": "ios-color-filter-outline"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle",
        "size": "small"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle",
        "size": "large"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle",
        "size": "small"
      }
    }, [_vm._v("搜索")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle"
      }
    }, [_vm._v("搜索")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search",
        "shape": "circle",
        "size": "large"
      }
    }, [_vm._v("搜索")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', [_vm._v("Default")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("Primary")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_vm._v("Ghost")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed"
      }
    }, [_vm._v("Dashed")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "text"
      }
    }, [_vm._v("文字按钮")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "text",
        "disabled": ""
      }
    }, [_vm._v("文字按钮")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "size": "large"
      }
    }, [_vm._v("Large")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("Default")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "size": "small"
      }
    }, [_vm._v("Small")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', [_vm._v("Default")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("Default(Disabled)")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("Primary")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "disabled": ""
      }
    }, [_vm._v("Primary(Disabled)")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_vm._v("Ghost")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "disabled": ""
      }
    }, [_vm._v("Ghost(Disabled)")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed"
      }
    }, [_vm._v("dashed")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed",
        "disabled": ""
      }
    }, [_vm._v("dashed(Disabled)")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "shape": "circle",
        "icon": "ios-search"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "ios-search"
      }
    }, [_vm._v("搜索")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "shape": "circle"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "search"
      }
    })], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "search"
      }
    }), _vm._v("\n        搜索\n    ")], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "shape": "circle",
        "size": "large"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "search"
      }
    })], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost",
        "shape": "circle",
        "size": "small"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "search"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "loading": ""
      }
    }, [_vm._v("Loading...")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "loading": "",
        "size": "large"
      }
    }, [_vm._v("Loading...")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "loading": "",
        "size": "small"
      }
    }, [_vm._v("Loading...")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "loading": _vm.loading
      },
      on: {
        "click": _vm.toLoading
      }
    }, [!_vm.loading ? _c('span', [_vm._v("Click me!")]) : _c('span', [_vm._v("Loading...")])]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "loading": _vm.loading2,
        "icon": "checkmark-round"
      },
      on: {
        "click": _vm.toLoading2
      }
    }, [!_vm.loading2 ? _c('span', [_vm._v("Click me!")]) : _c('span', [_vm._v("Loading...")])]), _vm._v(" "), _c('h4', [_vm._v("基本")]), _vm._v(" "), _c('Button-group', {
      attrs: {
        "size": "large"
      }
    }, [_c('i-button', [_vm._v("取消")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("确定")])], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("L")]), _vm._v(" "), _c('i-button', [_vm._v("M")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "ghost"
      }
    }, [_vm._v("R")]), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "dashed"
      }
    }, [_vm._v("R")])], 1), _vm._v(" "), _c('h4', [_vm._v("配合图标")]), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "chevron-left"
      }
    }), _vm._v("\n            前进\n        ")], 1), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v("\n            后退\n            "), _c('Icon', {
      attrs: {
        "type": "chevron-right"
      }
    })], 1)], 1), _vm._v(" "), _c('Button-group', [_c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "cloud"
      }
    }), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary",
        "icon": "upload"
      }
    })], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-51447d95", module.exports);
  }
}

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});