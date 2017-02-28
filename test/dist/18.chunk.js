webpackJsonp([18],{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(618),
  /* template */
  __webpack_require__(641),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d9cd342", Component.options)
  } else {
    hotAPI.reload("data-v-4d9cd342", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var cityList = [{
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
}];
exports.default = {
    data: function data() {
        return {
            cityList1: cityList,
            model111: '',

            cityList2: [],
            model112: 'beijing',

            model12: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.model111 = 'hangzhou';
        setTimeout(function () {
            _this.cityList2 = cityList;
        }, 500);
    }
};

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Row', [_c('i-col', {
      staticStyle: {
        "padding-right": "10px"
      },
      attrs: {
        "span": "12"
      }
    }, [_c('i-select', {
      attrs: {
        "model": _vm.model111,
        "filterable": ""
      }
    }, _vm._l(_vm.cityList1, function (item) {
      return _c('i-option', {
        attrs: {
          "value": item.value
        }
      }, [_vm._v(_vm._s(item.label))]);
    }))], 1)], 1), _vm._v(" "), _c('Row', [_c('i-col', {
      staticStyle: {
        "padding-right": "10px"
      },
      attrs: {
        "span": "12"
      }
    }, [_c('i-select', {
      attrs: {
        "model": _vm.model112,
        "filterable": ""
      }
    }, _vm._l(_vm.cityList2, function (item) {
      return _c('i-option', {
        attrs: {
          "value": item.value
        }
      }, [_vm._v(_vm._s(item.label))]);
    }))], 1)], 1), _vm._v(" "), _c('Row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('i-select', {
      attrs: {
        "model": _vm.model12,
        "filterable": "",
        "multiple": ""
      }
    }, _vm._l(_vm.cityList1, function (item) {
      return _c('i-option', {
        attrs: {
          "value": item.value
        }
      }, [_vm._v(_vm._s(item.label))]);
    }))], 1)], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4d9cd342", module.exports);
  }
}

/***/ })

});