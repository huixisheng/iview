webpackJsonp([26],{

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(608),
  /* template */
  __webpack_require__(644),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-679c4337", Component.options)
  } else {
    hotAPI.reload("data-v-679c4337", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: {
        iInput: _iview.iInput,
        Icon: _iview.Icon,
        iButton: _iview.iButton,
        iSelect: _iview.iSelect,
        iOption: _iview.iOption,
        InputNumber: _iview.InputNumber
    },
    props: {},
    data: function data() {
        return {
            v: 'hello',
            t: '',
            autosize: {
                minRows: 2,
                maxRows: 5
            },
            select1: 'http',
            select2: 'com'
        };
    },

    computed: {},
    methods: {
        enter: function enter() {
            console.log(123);
        },
        iconclick: function iconclick() {
            console.log('iconclicked');
        },
        change: function change(val) {
            console.log(val);
        },
        focus: function focus() {
            this.$Message.info('focus');
        },
        blur: function blur() {
            this.$Message.info('blur');
        }
    }
};

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Input-number', {
      attrs: {
        "max": 10,
        "min": 1,
        "value": 1
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "type": "textarea",
        "autosize": true,
        "placeholder": "请输入..."
      }
    }), _vm._v(" "), _c('i-input', {
      attrs: {
        "type": "textarea",
        "autosize": {
          minRows: 2,
          maxRows: 5
        },
        "placeholder": "请输入..."
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "name": "a",
        "icon": "ios-clock-outline",
        "readonly": "",
        "value": _vm.v,
        "size": "large",
        "placeholder": "请输入"
      },
      on: {
        "on-focus": _vm.focus,
        "on-blur": _vm.blur,
        "on-enter": _vm.enter,
        "on-click": _vm.iconclick
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "icon": "ios-clock-outline",
        "value": _vm.v,
        "placeholder": "请输入"
      },
      on: {
        "on-enter": _vm.enter
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "name": "b",
        "icon": "ios-clock-outline",
        "value": _vm.v,
        "size": "small",
        "placeholder": "请输入"
      },
      on: {
        "on-enter": _vm.enter
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "value": _vm.v,
        "size": "large",
        "placeholder": "请输入"
      },
      on: {
        "on-enter": _vm.enter
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "value": _vm.v,
        "placeholder": "请输入"
      },
      on: {
        "on-enter": _vm.enter
      }
    }), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "value": _vm.v,
        "size": "small",
        "placeholder": "请输入"
      },
      on: {
        "on-enter": _vm.enter,
        "on-change": _vm.change
      }
    }), _vm._v("\n    " + _vm._s(_vm.v) + "\n    "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "readonly": "",
        "placeholder": "this is something",
        "value": _vm.t,
        "type": "textarea",
        "autosize": _vm.autosize
      }
    }), _vm._v("\n    " + _vm._s(_vm.t) + "\n    "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
      staticStyle: {
        "width": "400px"
      }
    }, [_c('i-input', {
      attrs: {
        "value": _vm.v,
        "type": "password"
      }
    }, [_c('span', {
      slot: "prepend"
    }, [_vm._v("http://")]), _vm._v(" "), _c('span', {
      slot: "append"
    }, [_c('i-button', {
      attrs: {
        "icon": "ios-search"
      }
    })], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "value": _vm.v
      }
    }, [_c('span', {
      slot: "prepend"
    }, [_vm._v("http://")]), _vm._v(" "), _c('span', {
      slot: "append"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-search"
      }
    })], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "value": _vm.v,
        "size": "small"
      }
    }, [_c('span', {
      slot: "prepend"
    }, [_vm._v("http://")]), _vm._v(" "), _c('span', {
      slot: "append"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-search"
      }
    })], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "value": _vm.v,
        "size": "large"
      }
    }, [_c('i-select', {
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "model": _vm.select1
      },
      slot: "prepend"
    }, [_c('i-option', {
      attrs: {
        "value": "http"
      }
    }, [_vm._v("http://")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "https"
      }
    }, [_vm._v("https://")])], 1), _vm._v(" "), _c('i-select', {
      staticStyle: {
        "width": "70px"
      },
      attrs: {
        "model": _vm.select2
      },
      slot: "append"
    }, [_c('i-option', {
      attrs: {
        "value": "com"
      }
    }, [_vm._v(".com")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "cn"
      }
    }, [_vm._v(".cn")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "net"
      }
    }, [_vm._v(".net")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "io"
      }
    }, [_vm._v(".io")])], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "value": _vm.v
      }
    }, [_c('i-select', {
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "model": _vm.select1
      },
      slot: "prepend"
    }, [_c('i-option', {
      attrs: {
        "value": "http"
      }
    }, [_vm._v("http://")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "https"
      }
    }, [_vm._v("https://")])], 1), _vm._v(" "), _c('i-select', {
      staticStyle: {
        "width": "70px"
      },
      attrs: {
        "model": _vm.select2
      },
      slot: "append"
    }, [_c('i-option', {
      attrs: {
        "value": "com"
      }
    }, [_vm._v(".com")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "cn"
      }
    }, [_vm._v(".cn")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "net"
      }
    }, [_vm._v(".net")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "io"
      }
    }, [_vm._v(".io")])], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-input', {
      attrs: {
        "value": _vm.v,
        "size": "small"
      }
    }, [_c('i-select', {
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "model": _vm.select1
      },
      slot: "prepend"
    }, [_c('i-option', {
      attrs: {
        "value": "http"
      }
    }, [_vm._v("http://")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "https"
      }
    }, [_vm._v("https://")])], 1), _vm._v(" "), _c('i-select', {
      staticStyle: {
        "width": "70px"
      },
      attrs: {
        "model": _vm.select2
      },
      slot: "append"
    }, [_c('i-option', {
      attrs: {
        "value": "com"
      }
    }, [_vm._v(".com")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "cn"
      }
    }, [_vm._v(".cn")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "net"
      }
    }, [_vm._v(".net")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": "io"
      }
    }, [_vm._v(".io")])], 1)], 1), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2,
        "size": "small"
      }
    }), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2
      }
    }), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2,
        "size": "large"
      }
    }), _vm._v(" "), _c('i-input', {
      attrs: {
        "type": "password"
      }
    })], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-679c4337", module.exports);
  }
}

/***/ })

});