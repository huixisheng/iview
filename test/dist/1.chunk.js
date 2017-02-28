webpackJsonp([1],{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(668)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(630),
  /* template */
  __webpack_require__(639),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d6864e4", Component.options)
  } else {
    hotAPI.reload("data-v-2d6864e4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            defaultList: [{
                'name': 'a42bdcc1178e62b4694c830f028db5c0',
                'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            }, {
                'name': 'bc7521e033abdd1e92222d733590f104',
                'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }],
            imgName: '',
            visible: false,
            uploadList: []
        };
    },

    computed: {},
    mounted: function mounted() {
        this.uploadList = this.$refs.upload ? this.$refs.upload.fileList : [];
    },

    methods: {
        handleView: function handleView(name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove: function handleRemove(file) {
            var fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess: function handleSuccess(res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError: function handleFormatError(file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize: function handleMaxSize(file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
        },
        handleBeforeUpload: function handleBeforeUpload() {
            var check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: '最多只能上传 5 张图片。'
                });
            }
            return check;
        }
    }
};

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', [_vm._l(_vm.uploadList, function (item) {
      return _c('div', {
        staticClass: "demo-upload-list"
      }, [item.status === 'finished' ? [_c('img', {
        attrs: {
          "src": item.url
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "demo-upload-list-cover"
      }, [_c('Icon', {
        attrs: {
          "type": "ios-eye-outline"
        },
        on: {
          "click": function click($event) {
            _vm.handleView(item.name);
          }
        }
      }), _vm._v(" "), _c('Icon', {
        attrs: {
          "type": "ios-trash-outline"
        },
        on: {
          "click": function click($event) {
            _vm.handleRemove(item);
          }
        }
      })], 1)] : [item.showProgress ? _c('i-progress', {
        attrs: {
          "percent": item.percentage,
          "hide-info": ""
        }
      }) : _vm._e()]], 2);
    }), _vm._v(" "), _c('Upload', {
      ref: "upload",
      staticStyle: {
        "display": "inline-block",
        "width": "58px"
      },
      attrs: {
        "show-upload-list": false,
        "default-file-list": _vm.defaultList,
        "on-success": _vm.handleSuccess,
        "format": ['jpg', 'jpeg', 'png'],
        "max-size": 2048,
        "on-format-error": _vm.handleFormatError,
        "on-exceeded-size": _vm.handleMaxSize,
        "before-upload": _vm.handleBeforeUpload,
        "multiple": "",
        "type": "drag",
        "action": "//jsonplaceholder.typicode.com/posts/"
      }
    }, [_c('div', {
      staticStyle: {
        "width": "58px",
        "height": "58px",
        "line-height": "58px"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "camera",
        "size": "20"
      }
    })], 1)]), _vm._v(" "), _c('Modal', {
      attrs: {
        "title": "查看图片",
        "visible": _vm.visible
      }
    }, [_vm.visible ? _c('img', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "src": 'https://o5wwk8baw.qnssl.com/' + _vm.imgName + '/large'
      }
    }) : _vm._e()])], 2);
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2d6864e4", module.exports);
  }
}

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});