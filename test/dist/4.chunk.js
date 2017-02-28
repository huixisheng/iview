webpackJsonp([4],{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(670)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(625),
  /* template */
  __webpack_require__(645),
  /* scopeId */
  "data-v-6fe00464",
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fe00464", Component.options)
  } else {
    hotAPI.reload("data-v-6fe00464", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('Timeline', [_c('Timeline-item', [_c('p', {
      staticClass: "time"
    }, [_vm._v("1976年")]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_vm._v("Apple I 问世")])]), _vm._v(" "), _c('Timeline-item', [_c('p', {
      staticClass: "time"
    }, [_vm._v("1984年")]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_vm._v("发布 Macintosh")])]), _vm._v(" "), _c('Timeline-item', [_c('p', {
      staticClass: "time"
    }, [_vm._v("2007年")]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_vm._v("发布 iPhone")])]), _vm._v(" "), _c('Timeline-item', [_c('p', {
      staticClass: "time"
    }, [_vm._v("2010年")]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_vm._v("发布 iPad")])]), _vm._v(" "), _c('Timeline-item', [_c('p', {
      staticClass: "time"
    }, [_vm._v("2011年10月5日")]), _vm._v(" "), _c('p', {
      staticClass: "content"
    }, [_vm._v("史蒂夫·乔布斯去世")])])], 1), _vm._v(" "), _c('Timeline', [_c('Timeline-item', {
      attrs: {
        "color": "green"
      }
    }, [_vm._v("发布1.0版本")]), _vm._v(" "), _c('Timeline-item', {
      attrs: {
        "color": "green"
      }
    }, [_vm._v("发布2.0版本")]), _vm._v(" "), _c('Timeline-item', {
      attrs: {
        "color": "red"
      }
    }, [_vm._v("严重故障")]), _vm._v(" "), _c('Timeline-item', {
      attrs: {
        "color": "blue"
      }
    }, [_vm._v("发布3.0版本")])], 1), _vm._v(" "), _c('Timeline', {
      attrs: {
        "pending": ""
      }
    }, [_c('Timeline-item', [_vm._v("发布1.0版本")]), _vm._v(" "), _c('Timeline-item', [_vm._v("发布2.0版本")]), _vm._v(" "), _c('Timeline-item', [_vm._v("发布3.0版本")]), _vm._v(" "), _c('Timeline-item', [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v("查看更多")])])], 1), _vm._v(" "), _c('Timeline', [_c('Timeline-item', {
      attrs: {
        "color": "green"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "trophy"
      },
      slot: "dot"
    }), _vm._v(" "), _c('span', [_vm._v("发布里程碑版本")])], 1), _vm._v(" "), _c('Timeline-item', [_vm._v("发布1.0版本")]), _vm._v(" "), _c('Timeline-item', [_vm._v("发布2.0版本")]), _vm._v(" "), _c('Timeline-item', [_vm._v("发布3.0版本")])], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6fe00464", module.exports);
  }
}

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});