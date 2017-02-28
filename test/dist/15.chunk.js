webpackJsonp([15],{

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(622),
  /* template */
  __webpack_require__(660),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/huixisheng/Mzxd/cosmeshop/public/velocity/iview/test/routers/table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e950f58a", Component.options)
  } else {
    hotAPI.reload("data-v-e950f58a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            self: this,
            columns7: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '姓名',
                key: 'name',
                render: function render(row, column, index) {
                    var html = '<div><Icon type="person"></Icon> <strong>' + row.name + '</strong></div>';
                    return '<div><Icon type="person"></Icon> <strong>' + row.name + '</strong></div>';
                }
            }, {
                title: '年龄',
                key: 'age',
                sortable: true,
                sortMethod: function sortMethod(a, b, type) {
                    if (type === 'asc') {
                        return a < b ? 1 : -1;
                    } else if (type === 'desc') {
                        return a > b ? 1 : -1;
                    }
                }
            }, {
                title: '地址',
                key: 'address'
            }, {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: function render(row, column, index) {
                    return '<Poptip width="250" confirm placement="left" title="\u60A8\u786E\u8BA4\u5220\u9664\u5417\uFF1F" v-on:on-ok="remove(' + index + ')">\n                            <i-button size="small" type="error">\u5220\u9664</i-button>\n                            </Poptip>';
                }
            }],
            data6: [{
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居',
                _highlight: true,
                _checked: true
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗',
                _checked: true
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道',
                _checked: true
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道',
                _checked: true
            }]
        };
    },

    methods: {
        show: function show(index) {
            this.$Modal.info({
                title: '用户信息',
                content: '\u59D3\u540D\uFF1A' + this.data6[index].name + '<br>\u5E74\u9F84\uFF1A' + this.data6[index].age + '<br>\u5730\u5740\uFF1A' + this.data6[index].address
            });
        },
        remove: function remove(index) {
            this.data6.splice(index, 1);
        }
    }
};

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('i-table', {
      attrs: {
        "highlight-row": "",
        "border": "",
        "content": _vm.self,
        "columns": _vm.columns7,
        "data": _vm.data6
      }
    });
  }, staticRenderFns: [] };
module.exports.render._withStripped = true;
if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e950f58a", module.exports);
  }
}

/***/ })

});