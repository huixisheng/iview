webpackJsonp([12],{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(628),
  /* template */
  __webpack_require__(657),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/transfer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] transfer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce9bf9e4", Component.options)
  } else {
    hotAPI.reload("data-v-ce9bf9e4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            data2: this.getMockData(),
            targetKeys2: this.getTargetKeys()
        };
    },

    methods: {
        getMockData: function getMockData() {
            var mockData = [];
            for (var i = 1; i <= 20; i++) {
                mockData.push({
                    key: i.toString(),
                    label: '内容' + i,
                    description: '内容' + i + '的描述信息',
                    disabled: Math.random() * 3 < 1
                });
            }
            return mockData;
        },
        getTargetKeys: function getTargetKeys() {
            return this.getMockData().filter(function () {
                return Math.random() * 2 > 1;
            }).map(function (item) {
                return item.key;
            });
        },
        handleChange2: function handleChange2(newTargetKeys) {
            this.targetKeys2 = newTargetKeys;
        },
        filterMethod: function filterMethod(data, query) {
            return data.label.indexOf(query) > -1;
        },
        rf: function rf(data) {
            return '<i class="ivu-icon ivu-icon-alert"></i>' + data.label;
        }
    }
};

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('Transfer', {
      attrs: {
        "data": _vm.data2,
        "target-keys": _vm.targetKeys2,
        "filterable": "",
        "render-format": _vm.rf,
        "filter-method": _vm.filterMethod
      },
      on: {
        "on-change": _vm.handleChange2
      }
    });
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ce9bf9e4", module.exports);
  }
}

/***/ })

});