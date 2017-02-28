webpackJsonp([3],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(667)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(626),
  /* template */
  __webpack_require__(637),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/timepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-255e2c04", Component.options)
  } else {
    hotAPI.reload("data-v-255e2c04", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            value1: '09:41:00',
            value2: ['09:41:00', '12:00:00']
        };
    }
};

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "type": "time",
        "placeholder": "选择时间"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "type": "timerange",
        "placement": "bottom-end",
        "placeholder": "选择时间"
      }
    })], 1)], 1), _vm._v(" "), _c('row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "value": _vm.value1,
        "format": "HH点mm分ss秒",
        "placeholder": "选择时间"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "value": _vm.value2,
        "format": "HH’mm’ss",
        "type": "timerange",
        "placement": "bottom-end",
        "placeholder": "选择时间"
      }
    })], 1)], 1), _vm._v(" "), _c('row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "112px"
      },
      attrs: {
        "format": "HH:mm",
        "placeholder": "选择时间"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "format": "HH:mm",
        "type": "timerange",
        "placement": "bottom-end",
        "placeholder": "选择时间"
      }
    })], 1)], 1), _vm._v(" "), _c('row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "disabled-hours": [1, 5, 10],
        "disabled-minutes": [0, 10, 20],
        "placeholder": "选择时间"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "hide-disabled-options": "",
        "disabled-hours": [1, 5, 10],
        "disabled-minutes": [0, 10, 20],
        "placeholder": "选择时间"
      }
    })], 1)], 1), _vm._v(" "), _c('row', [_c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "confirm": "",
        "placeholder": "选择时间"
      }
    })], 1), _vm._v(" "), _c('i-col', {
      attrs: {
        "span": "12"
      }
    }, [_c('Time-picker', {
      staticStyle: {
        "width": "168px"
      },
      attrs: {
        "confirm": "",
        "type": "timerange",
        "placement": "bottom-end",
        "placeholder": "选择时间"
      }
    })], 1)], 1)], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-255e2c04", module.exports);
  }
}

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});