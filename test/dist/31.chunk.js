webpackJsonp([31],{

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(602),
  /* template */
  __webpack_require__(656),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6ab2d9a", Component.options)
  } else {
    hotAPI.reload("data-v-b6ab2d9a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

exports.default = {
    components: {
        Row: _iview.Row,
        iCol: _iview.Col,
        Card: _iview.Card
    },
    props: {},
    data: function data() {
        return {};
    },

    computed: {},
    methods: {}
};

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Card', {
      staticStyle: {
        "width": "300px"
      },
      attrs: {
        "bordered": true
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('p', [_vm._v("放寒假的发货会计师")])]), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#"
      },
      slot: "extra"
    }, [_vm._v("More")])], 2), _vm._v(" "), _c('Card', {
      staticStyle: {
        "width": "300px"
      }
    }, [_c('p', [_vm._v("hello")]), _vm._v(" "), _c('p', [_vm._v("hndshf")]), _vm._v(" "), _c('h3', [_vm._v("jfds")])])], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b6ab2d9a", module.exports);
  }
}

/***/ })

});