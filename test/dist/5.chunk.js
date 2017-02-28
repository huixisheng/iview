webpackJsonp([5],{

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(665)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(620),
  /* template */
  __webpack_require__(631),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/step.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] step.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b649222", Component.options)
  } else {
    hotAPI.reload("data-v-0b649222", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

var Step = _iview.Steps.Step;

exports.default = {
    components: {
        Page: _iview.Page,
        Steps: _iview.Steps,
        Step: Step,
        iButton: _iview.iButton
    },
    props: {},
    data: function data() {
        return {
            total: 512,
            current: 0
        };
    },

    computed: {},
    methods: {
        setPage: function setPage(page) {
            console.log(page);
        },
        next: function next() {
            if (this.current == 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
};

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Steps', {
      attrs: {
        "current": 1,
        "size": "small"
      }
    }, [_c('Step', {
      attrs: {
        "title": "已完成",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "进行中",
        "content": "这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息"
      }
    })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 2
      }
    }, [_c('Step', {
      attrs: {
        "title": "已完成"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "进行中"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行"
      }
    })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 1,
        "size": "small"
      }
    }, [_c('Step', {
      attrs: {
        "title": "已完成"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "进行中"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行"
      }
    })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 1,
        "direction": "vertical",
        "size": "small"
      }
    }, [_c('Step', {
      attrs: {
        "title": "注册",
        "icon": "person-add"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "上传头像",
        "icon": "camera",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "验证邮箱",
        "icon": "email"
      }
    })], 1), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 1,
        "direction": "vertical"
      }
    }, [_c('Step', {
      attrs: {
        "title": "注册",
        "icon": "person-add"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "上传头像",
        "icon": "camera",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "验证邮箱",
        "icon": "email"
      }
    })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("当前正在进行第 " + _vm._s(_vm.current + 1) + " 步")]), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": _vm.current
      }
    }, [_c('Step', {
      attrs: {
        "title": "步骤1"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "步骤2"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "步骤3"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "步骤4"
      }
    })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('i-button', {
      attrs: {
        "type": "primary"
      },
      nativeOn: {
        "click": function click($event) {
          _vm.next($event);
        }
      }
    }, [_vm._v("下一步")]), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 1,
        "direction": "vertical",
        "size": "small"
      }
    }, [_c('Step', {
      attrs: {
        "title": "已完成",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "进行中",
        "content": "这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Steps', {
      attrs: {
        "current": 1,
        "status": "error"
      }
    }, [_c('Step', {
      attrs: {
        "title": "已完成",
        "content": "这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "进行中",
        "content": "这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息"
      }
    }), _vm._v(" "), _c('Step', {
      attrs: {
        "title": "待进行",
        "content": "这里是该步骤的描述信息"
      }
    })], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0b649222", module.exports);
  }
}

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});