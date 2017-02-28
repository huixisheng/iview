webpackJsonp([30],{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(604),
  /* template */
  __webpack_require__(640),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/cascader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cascader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-494db9e1", Component.options)
  } else {
    hotAPI.reload("data-v-494db9e1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            text: '未选择',
            data: [{
                value: 'beijing',
                label: '北京',
                children: [{
                    value: 'gugong',
                    label: '故宫'
                }, {
                    value: 'tiantan',
                    label: '天坛'
                }, {
                    value: 'wangfujing',
                    label: '王府井'
                }]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [{
                    value: 'nanjing',
                    label: '南京',
                    children: [{
                        value: 'fuzimiao',
                        label: '夫子庙'
                    }]
                }, {
                    value: 'suzhou',
                    label: '苏州',
                    children: [{
                        value: 'zhuozhengyuan',
                        label: '拙政园'
                    }, {
                        value: 'shizilin',
                        label: '狮子林'
                    }]
                }]
            }]
        };
    },

    methods: {
        handleChange: function handleChange(value, selectedData) {
            this.text = selectedData.map(function (o) {
                return o.label;
            }).join(', ');
        }
    }
};

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('div', {
      domProps: {
        "textContent": _vm._s(_vm.text)
      }
    }), _vm._v(" "), _c('Cascader', {
      attrs: {
        "data": _vm.data
      },
      on: {
        "on-change": _vm.handleChange
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("选择")])])], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-494db9e1", module.exports);
  }
}

/***/ })

});