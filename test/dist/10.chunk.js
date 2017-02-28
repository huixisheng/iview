webpackJsonp([10],{

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(673)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(599),
  /* template */
  __webpack_require__(653),
  /* scopeId */
  "data-v-7fcbf290",
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fcbf290", Component.options)
  } else {
    hotAPI.reload("data-v-7fcbf290", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Row', [_c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "count": "3"
      }
    }, [_c('a', {
      staticClass: "demo-badge",
      attrs: {
        "href": "#"
      }
    })])], 1)], 1), _vm._v(" "), _c('Row', [_c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "dot": ""
      }
    }, [_c('a', {
      staticClass: "demo-badge",
      attrs: {
        "href": "#"
      }
    })])], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "dot": ""
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-bell-outline",
        "size": "26"
      }
    })], 1)], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "dot": ""
      }
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v("可以是一个链接")])])], 1)], 1), _vm._v(" "), _c('Row', [_c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "count": "100"
      }
    }, [_c('a', {
      staticClass: "demo-badge",
      attrs: {
        "href": "#"
      }
    })])], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "count": "1000",
        "overflow-count": "999"
      }
    }, [_c('a', {
      staticClass: "demo-badge",
      attrs: {
        "href": "#"
      }
    })])], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "2"
      }
    }, [_c('Badge', {
      attrs: {
        "count": "10"
      }
    }), _vm._v(" "), _c('Badge', {
      staticClass: "demo-badge-alone",
      attrs: {
        "count": "20"
      }
    })], 1)], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7fcbf290", module.exports);
  }
}

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});