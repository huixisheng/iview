webpackJsonp([23],{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(612),
  /* template */
  __webpack_require__(635),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/notice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] notice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f84ab8a", Component.options)
  } else {
    hotAPI.reload("data-v-1f84ab8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        pop: function pop() {
            var _this = this;

            var _loop = function _loop(i) {
                setTimeout(function () {
                    _this.$Notice.open({
                        title: 'test',
                        duration: 1.5 + i
                    });
                }, i * 500);
            };

            for (var i = 0; i < 6; i++) {
                _loop(i);
            }
        }
    }
};

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.pop($event);
        }
      }
    }, [_vm._v("Pop")]);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1f84ab8a", module.exports);
  }
}

/***/ })

});