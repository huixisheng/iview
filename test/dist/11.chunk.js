webpackJsonp([11],{

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(629),
  /* template */
  __webpack_require__(634),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/tree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10712a7e", Component.options)
  } else {
    hotAPI.reload("data-v-10712a7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            treeData: [{
                expand: true,
                title: 'parent 1',
                selected: false,
                children: [{
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true
                    }, {
                        title: 'leaf'
                    }]
                }, {
                    title: 'parent 1-1',
                    checked: true,
                    children: [{
                        title: '<span style="color: red">sss</span>'
                    }]
                }]
            }]
        };
    },
    methods: {
        selectFn: function selectFn(data) {
            console.log(data);
        },
        checkFn: function checkFn(data) {
            console.log(data);
        }
    }
};

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('Tree', {
      attrs: {
        "data": _vm.treeData,
        "show-checkbox": true,
        "multiple": true
      },
      on: {
        "on-select-change": _vm.selectFn,
        "on-check-change": _vm.checkFn
      }
    });
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-10712a7e", module.exports);
  }
}

/***/ })

});