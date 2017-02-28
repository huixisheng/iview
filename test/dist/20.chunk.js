webpackJsonp([20],{

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(616),
  /* template */
  __webpack_require__(646),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fed0230", Component.options)
  } else {
    hotAPI.reload("data-v-6fed0230", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iview = __webpack_require__(63);

var RadioGroup = _iview.Radio.Group;
var Panel = _iview.Collapse.Panel;
var CheckboxGroup = _iview.Checkbox.Group;
var BreadcrumbItem = _iview.Breadcrumb.Item;

exports.default = {
    components: {
        Radio: _iview.Radio,
        RadioGroup: RadioGroup,
        Alert: _iview.Alert,
        Icon: _iview.Icon,
        Collapse: _iview.Collapse,
        Panel: Panel,
        iButton: _iview.iButton,
        Checkbox: _iview.Checkbox,
        CheckboxGroup: CheckboxGroup,
        iSwitch: _iview.iSwitch,
        InputNumber: _iview.InputNumber,
        Breadcrumb: _iview.Breadcrumb,
        BreadcrumbItem: BreadcrumbItem,
        LoadingBar: _iview.LoadingBar
    },
    props: {},
    data: function data() {
        return {
            single: false,
            radio: false,
            radioGroup: '段模',
            activeKey: [1, 2],
            phone: 'apple',
            animal: '爪哇犀牛',
            social: ['facebook', 'github'],
            disabledSingle: true,
            disabledGroup: ['苹果']
        };
    },

    computed: {},
    methods: {
        changeRadio: function changeRadio() {
            this.$refs.radio1.checked = !this.radio;
            this.radio = !this.radio;
        },
        changeGroup: function changeGroup(data) {
            console.log(data);
        },
        closed: function closed(data) {
            console.log(data);
        },
        change: function change(status) {
            console.log(status);
        }
    },
    ready: function ready() {
        _iview.LoadingBar.start();
    }
};

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_c('div', [_c('Radio-group', {
      attrs: {
        "model": _vm.phone,
        "vertical": ""
      }
    }, [_c('Radio', {
      attrs: {
        "value": "apple"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-apple"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Apple")])], 1), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "android",
        "disabled": ""
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-android"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Android")])], 1), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "windows"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-windows"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Windows")])], 1)], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br')], 1), _vm._v(" "), _c('Radio', {
      ref: "radio1",
      attrs: {
        "checked": _vm.radio
      }
    }, [_vm._v("Radio")]), _vm._v(" "), _c('i-button', {
      nativeOn: {
        "click": function click($event) {
          _vm.changeRadio($event);
        }
      }
    }, [_vm._v("change radio")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.phone,
        "type": "button",
        "vertical": ""
      }
    }, [_c('Radio', {
      attrs: {
        "value": "apple"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-apple"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Apple")])], 1), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "android"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-android"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Android")])], 1), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "windows"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-windows"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Windows")])], 1)], 1), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal,
        "type": "button"
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal,
        "type": "button"
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶",
        "disabled": ""
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛",
        "disabled": ""
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal,
        "type": "button",
        "size": "large"
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal,
        "type": "button"
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('Radio-group', {
      attrs: {
        "model": _vm.animal,
        "type": "button",
        "size": "small"
      }
    }, [_c('Radio', {
      attrs: {
        "value": "金斑蝶"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "爪哇犀牛"
      }
    }), _vm._v(" "), _c('Radio', {
      attrs: {
        "value": "印度黑羚"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "checked": _vm.radio
      }
    }, [_vm._v("Checkbox")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Checkbox-group', {
      attrs: {
        "model": _vm.social
      }
    }, [_c('Checkbox', {
      attrs: {
        "value": "twitter"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-twitter"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Twitter")])], 1), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "value": "facebook"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-facebook"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Facebook")])], 1), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "value": "github"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-github"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Github")])], 1), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "value": "snapchat"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-snapchat"
      }
    }), _vm._v(" "), _c('span', [_vm._v("Snapchat")])], 1)], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "checked": _vm.disabledSingle,
        "disabled": ""
      }
    }, [_vm._v("Checkbox")]), _vm._v(" "), _c('Checkbox-group', {
      attrs: {
        "model": _vm.disabledGroup
      }
    }, [_c('Checkbox', {
      attrs: {
        "value": "香蕉",
        "disabled": ""
      }
    }), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "value": "苹果",
        "disabled": ""
      }
    }), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "value": "西瓜"
      }
    })], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-switch', {
      on: {
        "on-change": _vm.change
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-switch', [_c('span', {
      slot: "open"
    }, [_vm._v("开")]), _vm._v(" "), _c('span', {
      slot: "close"
    }, [_vm._v("关")])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('i-switch', [_c('Icon', {
      attrs: {
        "type": "android-done"
      },
      slot: "open"
    }), _vm._v(" "), _c('Icon', {
      attrs: {
        "type": "android-close"
      },
      slot: "close"
    })], 1), _vm._v(" "), _c('i-switch', {
      attrs: {
        "disabled": ""
      }
    }), _vm._v(" "), _c('i-switch', {
      attrs: {
        "size": "small"
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Input-number', {
      attrs: {
        "max": 10,
        "min": 1,
        "step": 1.2,
        "value": 1
      }
    }), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2,
        "size": "small"
      }
    }), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2
      }
    }), _vm._v(" "), _c('Input-number', {
      attrs: {
        "value": 2,
        "size": "large"
      }
    }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Breadcrumb', [_c('Breadcrumb-item', {
      attrs: {
        "href": "/"
      }
    }, [_vm._v("Home")]), _vm._v(" "), _c('Breadcrumb-item', {
      attrs: {
        "href": "/components/breadcrumb"
      }
    }, [_vm._v("Components")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("Breadcrumb")])], 1), _vm._v(" "), _c('Breadcrumb', [_c('Breadcrumb-item', {
      attrs: {
        "href": "/"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "ios-home-outline"
      }
    }), _vm._v(" Home\n        ")], 1), _vm._v(" "), _c('Breadcrumb-item', {
      attrs: {
        "href": "/components/breadcrumb"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "social-buffer-outline"
      }
    }), _vm._v(" Components\n        ")], 1), _vm._v(" "), _c('Breadcrumb-item', [_c('Icon', {
      attrs: {
        "type": "pound"
      }
    }), _vm._v(" Breadcrumb\n        ")], 1)], 1), _vm._v(" "), _c('Breadcrumb', {
      attrs: {
        "separator": ">"
      }
    }, [_c('Breadcrumb-item', {
      attrs: {
        "href": "/"
      }
    }, [_vm._v("Home")]), _vm._v(" "), _c('Breadcrumb-item', {
      attrs: {
        "href": "/components/breadcrumb"
      }
    }, [_vm._v("Components")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("Breadcrumb")])], 1), _vm._v(" "), _c('Breadcrumb', {
      attrs: {
        "separator": "<b class='demo-breadcrumb-separator'>=></b>"
      }
    }, [_c('Breadcrumb-item', {
      attrs: {
        "href": "/"
      }
    }, [_vm._v("Home")]), _vm._v(" "), _c('Breadcrumb-item', {
      attrs: {
        "href": "/components/breadcrumb"
      }
    }, [_vm._v("Components")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("Breadcrumb")])], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Checkbox', {
      attrs: {
        "checked": _vm.single
      }
    })], 1);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6fed0230", module.exports);
  }
}

/***/ })

});