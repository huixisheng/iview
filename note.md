iView升级Vue2.x和webpack2.x记录
---


在逛iView的issue的时候发现很多人吐槽[不支持Vue2.x](https://github.com/iview/iview/search?q=vue2&type=Issues&utf8=%E2%9C%93)。于是[开了个分支](https://github.com/huixisheng/iview/tree/feature-2.0)对Vue2.x做了支持。待迁移功能基本完成之际，给iView作者[@icarusion](https://github.com/icarusion)发了一封邮件，大致内容是完成了iView对Vue2.x的支持，请求提交pr合并。[@icarusion](https://github.com/icarusion)回复邮件非常及时。当然作者没有采取完全合并`feature-2.0`分支，希望把控代码质量，所有的代码都希望自己review一篇，这是对社区的负责，我很钦佩作者的当时的做法，也很庆幸[@icarusion](https://github.com/icarusion)没有完全合并我的代码。后来单独提交pr的时候看了[@icarusion](https://github.com/icarusion)提交的代码，发现自己部分功能代码仅仅只是对Vue2.x做了支持，并没有利用好Vue2.x特性，而且代码中还有部分隐藏的功能没有实现。于是作者把支持Vue2.x提上日程。相信这是社区的力量的支持和驱动吧。

## iView代码结构

下面简单的整理下升级过程中碰到的问题吧。首先你要让项目跑起来，需要大致了解iView代码结构。

```
.
|- .github 用了提issue的模板
|- assets 图片资源，跟iView项目没什么关系
|- build 构建脚本。gulp构建less写的css,webpack打包js
|- test 组件的demo。后面我提了pr修改为exmaples。test目录放单元测试用例
|- src
   |- components 组件
      |- affix
        |- affix.vue
        |- affix.js
   |- directives 自定义指令
   |- locale 语言支持
   |- mixins Vue混合方法
   |- styles 样式,less写的
   |- utils 我的理解是通用工具
   |- index.js 所有的组件的入口
|- .babelrc
|- .editorconfig
|- .eslintrc.json
|- .gitattributes
|- .npmignore
|- .travis.yml
|- LICENSE
|- README.md
|- package.json 这个是关键
```
## iView项目构建

项目跑起来步骤:
```
$ git clone git@github.com:iview/iview.git
$ cd ivew
# 最好换淘宝的镜像
$ sudo npm install
# 项目跑起来
$ npm run dev
# 构建项目
$ npm run build
```
如果没有意外的话，项目顺利的跑起来了。如果有错的话，具体错误具体分析，一般错误跟`nodejs`的版本有很大关系。


## 升级为webpack2.x

于是开始升级Vue的版本。然后`npm run dev`，项目已经不能跑起来了。webpack2.x 也出了，索性一起升级吧。

```
"devDependencies": {  
  "vue": "^2.2.1",
  "webpack": "^2.2.1",
},
```
然后注释了`src/index.js`代码，剩下简单完全不会有问题的代码。然后对照[webpack 从 v1 迁移到 v2](https://doc.webpack-china.org/guides/migrating/)修改相关配置配置，还有就是根据报错灵活处理错误。还有就是涉及`webpack`周边的插件的版本的升级。

[build/webpack.dev.config.js相关的修改看这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-ba41bb69761f93318d458231fcc239a6) [package.json修改看这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)

webpack主要的修改

- loaders->rules
- resolve.extensions 不支持为空的配置
- 需要设置vue的alias。 vue的package.json的main指向的是runtime的版本
- plugins 插件的方法的参数修改了对象

https://github.com/iview/iview/issues/374
>npm安装的iview里的iview.js源码里有Component.options.__file = "/Users/aresn/develop/iview/src/components/icon/icon.vue"
请问是否是bug？
浏览器提示找不到模块（chrome dev，macOS）

webpackJsonp is not defined  webpack2

```
You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build
```
- https://segmentfault.com/a/1190000006435886
- https://github.com/vuejs-templates/webpack/issues/215


Webpack 2: How to extract CSS/LESS modules into CSS files?
- https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/250
- https://www.google.co.jp/search?newwindow=1&safe=strict&q=extract-text-webpack-plugin++webpack+2++vue2.0&oq=extract-text-webpack-plugin++webpack+2++vue2.0&gs_l=serp.3...29285.31625.0.31967.7.7.0.0.0.0.209.560.0j2j1.3.0....0...1c.1.64.serp..4.0.0.CsIgev7a4n0

提取CSS http://www.qinshenxue.com/article/20161106163608.html

webpack2默认支持`webpack.optimize.OccurenceOrderPlugin`
```
Webpack 2: TypeError: _webpack2.default.optimize.OccurenceOrderPlugin is not a function
webpack.optimize.OccurenceOrderPlugin is not a constructor
```
https://github.com/webpack/webpack/issues/1964


## 升级Vue2.x

以上都修改完了，访问页面是空白，同时有几个请求链接不对。这就奇怪了，我没改什么啊，怎么会不行啊。`new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'), ` 引起了`test/index.html`路径的变动，具体看[这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-ab32b98942d40992faa2e5e3f8ac9563)。

于是一行行打开`src/index.js`注释的代码，根据报错一个个处理。但是这样处理是不是太慢了，于是下载了[迁移工具](https://github.com/vuejs/vue-migration-helper)根据报错全局替换。嘿嘿，这样是快了很多。然后对引入组件的注释一个个打开，报错单独处理。

大致报错整理如下:

迁移工具报错：
```
➜  iview git:(feature-2.0) ✗ vue-migration-helper src/components/button/button.vue

1. Update v-el:slot to ref="slot"
  Line 5: src/components/button/button.vue
  Reason: v-el and v-ref merged into ref attribute
  More info: http://vuejs.org/guide/migration.html#v-el-and-v-ref
...
265. Replace this.$dispatch('on-form-change', _file) to use a global event bus or vuex (see link below for implementation details)
  Line 279: src/components/upload/upload.vue
  Reason: $dispatch and $broadcast have been removed because the pattern doesn't scale well
  More info: http://vuejs.org/guide/migration.html#dispatch-and-broadcast
...
```


```
<input :type="type" v-model="value">:
v-model does not support dynamic input types. Use v-if branches instead.
```
https://forum.vuejs.org/t/v-model-does-not-support-dynamic-input-types/2180
https://github.com/vuejs/vue/issues/3915

v-else必要要有v-if
v-else used on element <ul> without corresponding v-if.
https://cn.vuejs.org/v2/guide/migration.html#v-show后面使用v-else-移除

prop属性不支持吸怪
```
vendor.bundle.js:3207 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "model"
(found in component <iSelect> at iview/src/components/select/select.vue)
```

transtions 升级需要修改less

ERROR LOG: '[Vue warn]: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
(found in <Root>)'
LOG LOG: <!---->
vendor.bundle.js:1319 [Vue warn]: "key" is a reserved attribute and cannot be used as component prop.
vendor.bundle.js:1319 [Vue warn]: Missing required prop: "key"

 Do not use built-in or reserved HTML elements as component id: Switch
this.$dispatch is not a function


modal 没有触发显示的动画


-----
Cannot create property 'true' on string 'data[0].isLeaf'
    at VueComponent.set$1 [as $set]

默认路由 https://github.com/vuejs/vue-router/issues/866  How can I set a default route on page load #866




记录下webpack2 在webpack1 基础上需要修改的内容 2016.09.07
https://github.com/dingyiming/example-vue2/issues/9



Object.entries

## 参考
- https://developer.mozilla.org/zh-CN/search?q=of
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- http://www.cnblogs.com/xxcanghai/p/6382607.html
- https://teng2015.gitbooks.io/vue2-0/content/
- https://segmentfault.com/a/1190000006435886
- http://www.cnblogs.com/xxcanghai/p/6124699.html
- http://slides.com/awee/vue2#/
- http://www.cnblogs.com/xxcanghai/p/6098663.html
