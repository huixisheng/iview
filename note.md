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
# 最好换淘宝的镜像 --registry=https://registry.npm.taobao.org
$ sudo npm install
# 项目跑起来
$ npm run dev
# 构建项目
$ npm run build
```
如果没有意外的话，项目顺利的跑起来了。如果有错的话，具体错误具体分析，一般错误跟`nodejs`的版本有很大关系。


## 升级为webpack2.x

修改`package.json`vue和webpack的版本。然后`npm run dev`，项目已经不能跑起来了。

```
"devDependencies": {
  "vue": "^2.2.1",
  "webpack": "^2.2.1",
},
```
然后注释了`src/index.js`代码，剩下简单完全不会有问题的代码。然后对照[webpack 从 v1 迁移到 v2](https://doc.webpack-china.org/guides/migrating/)修改相关配置配置，还有就是根据报错灵活处理错误。还有就是涉及`webpack`周边的插件的版本的升级。

[build/webpack.dev.config.js相关的修改看这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-ba41bb69761f93318d458231fcc239a6) [package.json修改看这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)


## webpack2.x升级注意点

### module.loaders 改成了 module.rules
> 旧的 loader 配置被更强大的 rules 系统取代，后者允许配置 loader 以及其他更多项。为了兼容旧版，module.loaders 语法被保留，旧的属性名依然可以被解析。新的命名约定更易于理解并且是升级配置使用 module.rules 的好理由。
```
module: {
-        loaders: [
-            { test: /\.vue$/, loader: 'vue' },
-            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
-            { test: /\.css$/, loader: 'style!css!autoprefixer'},
-            { test: /\.less$/, loader: 'style!css!less' },
-            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
+        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
+        rules: [
+            {
+                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
+                test: /\.vue$/,
+                loader: 'vue-loader',
+                options: {
+                    loaders: {
+                        css: ExtractTextPlugin.extract({
+                          use: 'css-loader',
+                          fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
+                        })
+                    },
+                    postLoaders: {
+                        html: 'babel-loader'
+                    }
+                }
+            },
+            // { test: /\.vue$/, loader: 'vue' },
+            // Module build failed: Error: The node API for `babel` has been moved to `babel-core`.
+            // https://github.com/babel/babel-loader/blob/master/README.md#the-node-api-for-babel-has-been-moved-to-babel-core
+            {
+                test: /\.js$/,
+                loader: 'babel-loader', exclude: /node_modules/
+            },
+            {
+                test: /\.css$/,
+                use: [
+                    'style-loader',
+                    'css-loader',
+                    'autoprefixer-loader'
+                ]
+            },
+            {
+                test: /\.less$/,
+                use: [
+                    'style-loader',
+                    'css-loader',
+                    'less-loader'
+                ]
+                // loader: 'style!css!less'
+            },
+            {
+                test: /\.scss$/,
+                use: [
+                    'style-loader',
+                    'css-loader',
+                    'sass-loader?sourceMap'
+                ]
+                // loader: 'style!css!sass?sourceMap'
+            },
         { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
         { test: /\.(html|tpl)$/, loader: 'html-loader' }
     ]
 },
 ```


### resolve.extensions 不支持为空的配置
```
resolve: {
     // require时省略的扩展名，如：require('module') 不需要module.js
-        extensions: ['', '.js', '.vue'],
+        extensions: ['.js', '.vue']
 },
```
## 只使用了vue runtime的版本

```
You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build
```
需要设置vue的alias。

```
         alias: {
 -            iview: '../../src/index'
 +            iview: '../../src/index',
 +            vue: 'vue/dist/vue.js'
          }
```
参考：
- https://segmentfault.com/a/1190000006435886
- https://github.com/vuejs-templates/webpack/issues/215

### plugins 插件的方法的参数修改了对象 ###

记得当时有这个报错的`webpackJsonp is not defined  webpack2`。具体升级哪个插件有点忘记了。

```
Webpack 2: TypeError: _webpack2.default.optimize.OccurenceOrderPlugin is not a function
webpack.optimize.OccurenceOrderPlugin is not a constructor
```
webpack2默认支持`webpack.optimize.OccurenceOrderPlugin`[见这里](https://github.com/webpack/webpack/issues/1964)

```
     plugins: [
 -        new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
 -        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),                           // 提取第三方库
 +        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
 +        // new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
 +        // https://doc.webpack-china.org/plugins/commons-chunk-plugin/
 +        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
 +        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),                           // 提取第三方库
      ]
```


### 如何提取`.vue`文件的css

```
+        rules: [
 +            {
 +                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
 +                test: /\.vue$/,
 +                loader: 'vue-loader',
 +                options: {
 +                    loaders: {
 +                        css: ExtractTextPlugin.extract({
 +                          use: 'css-loader',
 +                          fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
 +                        })
 +                    },
 +                    postLoaders: {
 +                        html: 'babel-loader'
 +                    }
 +                }
 +            },
```
```
     plugins: [
 -        new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
 +        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
```

具体plugins的变动最好看相关的文档。


参考:

- [Webpack 2: How to extract CSS/LESS modules into CSS files?](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/250)
- https://www.google.co.jp/search?newwindow=1&safe=strict&q=extract-text-webpack-plugin++webpack+2++vue2.0&oq=extract-text-webpack-plugin++webpack+2++vue2.0&gs_l=serp.3...29285.31625.0.31967.7.7.0.0.0.0.209.560.0j2j1.3.0....0...1c.1.64.serp..4.0.0.CsIgev7a4n0
- http://www.qinshenxue.com/article/20161106163608.html


### 社区反映的打包的源码中含有`.vue`的路径

[见issues/374](https://github.com/iview/iview/issues/374)
>npm安装的iview里的iview.js源码里有Component.options.__file = "/Users/aresn/develop/iview/src/components/icon/icon.vue"
>请问是否是bug？
>浏览器提示找不到模块（chrome dev，macOS）

当时我是一脸蒙的，主要修改的是`wepback1.x`到`webpack2.x`兼容性的api,主要的修改是提取了`webpack.base.config.js`打包通用的配置。可是看[源码](https://unpkg.com/iview@2.0.0-rc.2/dist/iview.min.js)中确实含有`options.__file="/User"`。第一想到的是`vue-loader`版本是否不对？用的确实是最新版本。于是搜索下`vue-loader`是否含有`Component.options.__file`?确实有，见[这里](https://github.com/vuejs/vue-loader/blob/1d63e9ec610490767b447cee5cf53e00faf905fa/lib/loader.js#L376-L395)。

```
  // development-only code
  if (!isProduction) {
    // add filename in dev
    output += 'Component.options.__file = ' + JSON.stringify(filePath) + '\n'
    // check named exports
    output +=
      'if (Component.esModule && Object.keys(Component.esModule).some(function (key) {' +
        'return key !== "default" && key !== "__esModule"' +
      '})) {' +
        'console.error("named exports are not supported in *.vue files.")' +
      '}\n'
    // check functional components used with templates
    if (template) {
      output +=
        'if (Component.options.functional) {' +
          'console.error("' +
          '[vue-loader] ' + fileName + ': functional components are not ' +
          'supported with templates, they should use render functions.' +
        '")}\n'
    }
  }
```

` var isProduction = this.minimize || process.env.NODE_ENV === 'production'`。`isProduction`怎么会是`false`?明明设置了

```
new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"production"'
    }
})
```

没有生效吗？相关文档的配置[Vue Production Deployment Tips](https://vuejs.org/v2/guide/deployment.html#With-Build-Tools) [vue-loader](https://vue-loader.vuejs.org/en/workflow/production.html) [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)也确实是这么写的。于是硬着头皮读了一篇[DefinePlugin源码](https://github.com/webpack/webpack/blob/93ac8e9c3699bf704068eaccaceec57b3dd45a14/lib/DefinePlugin.js)，代码有点hold不住。又看了[DefinePlugin测试用例](https://github.com/webpack/webpack/blob/master/test/configCases/plugins/define-plugin/webpack.config.js)怎么写。webpack的配置没什么问题。现在的问题是要让`isProduction`为true。于是进行了一方尝试:


### 直接设置`process.env.NODE_ENV = 'production'`

`npm run build-process.env`

[https://github.com/vuejs-templates/webpack](https://github.com/vuejs-templates/webpack/blob/master/template/build/build.js)就是这么实现的


`npm run build` -> `node build/build.js`->`build.js`直接设置了`process.env.NODE_ENV = 'production'`。

此外还有[cooking](https://github.com/ElemeFE/cooking/blob/671353156818d2016595b2cf303113e04d0986ac/packages/cooking/bin/cooking-build)也是这么实现的。

```
#!/usr/bin/env node
'use strict'

// set env
process.env.NODE_ENV = 'production'

const path = require('path')
const program = require('commander')
const logger = require('../util/logger')
const loadConfig = require('../util/load-config')
const webpack = require('webpack')
let configs = []
let compiler
```

### 使用环境变量`cross-env` ###

可以运行`npm run build-cross-env`看下效果。生成的`dist/iview-cross-env.js`已经不存在调试代码了。

看到[webpack官方文档-使用环境变量](https://doc.webpack-china.org/guides/environment-variables/) [英文](https://webpack.js.org/guides/environment-variables/)。但是并没有指出是推荐写法。

[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0/blob/master/package.json)也是这个写法
```
{
  "name": "vue-hackernews-2.0",
  "scripts": {
    "dev": "node server",
    "start": "cross-env NODE_ENV=production node server",
    "build": "rimraf dist && npm run build:client && npm run build:server",
    "build:client": "cross-env NODE_ENV=production webpack --config build/webpack.client.config.js --progress --hide-modules",
    "build:server": "cross-env NODE_ENV=production webpack --config build/webpack.server.config.js --progress --hide-modules"
  }
}
```

### webpack -p ###
`webpack -p` 没添加调试代码。但是`--define process.env.NODE_ENV="'production'"`都是添加了调试代码。好奇怪。难道是文档出了问题？@todo

相当于`webpack --optimize-minimize --define process.env.NODE_ENV="'production'"`

没有设置`webpack.optimize.UglifyJsPlugin`已经默认压缩了代码。

```
webpack --define process.env.NODE_ENV='production' --config build/webpack-define.js --progress --profile --colors
或者
webpack --define process.env.NODE_ENV=\"'production'\" --config build/webpack-define.js --progress --profile --colors
或者
webpack --define process.env.NODE_ENV=production --config build/webpack-define.js --progress --profile --colors
```

添加
```
new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"production"'
}),
// 或者下面写法
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
 })
```
都是存在`Component.options.__file = "/Users/huixisheng/Workspaces/iview/src/components/icon/icon.vue"`

@todo `webpack.DefinePlugin`是否存在bug？


### NODE_ENV=production  ###

`NODE_ENV=production webpack --config build/webpack.NODE_ENV=production.js` Mac下是不会添加调试的代码的。但是win不兼容。

[@JiaxiangZheng](https://cnodejs.org/user/JiaxiangZheng)
>export NODE_ENV=production && node xxx.js  这样在当前命令行下后续的命令中读取 NODE_ENV，都会得到  production 值；
如果直接使用 NODE_ENV=production node xxx.js，则 NODE_ENV 的有效性仅限当前命令，不会对后续命令有影响。

win设置`process.env.NODE_ENV`
[@kelvv](https://cnodejs.org/user/kelvv)
```
“dev-mac”: " export NODE_ENV=development&& nodemon --harmony --use_strict index.js  -w ",
“dev-win”: " set NODE_ENV=development&& nodemon --harmony --use_strict index.js  -w ",
```

### 使用 `minimize`

`npm run build-minimize`

```
plugins: [
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    })
]
```
这样也是不会添加调试代码的

相关参考

- https://cnodejs.org/topic/5785b3ef3b501f7054982f69
- https://github.com/webpack/webpack/issues/2537
- https://github.com/vuejs/vue-hackernews-2.0/search?utf8=%E2%9C%93&q=NODE_ENV
- https://segmentfault.com/a/1190000002551952#articleHeader9
- https://github.com/webpack/webpack/search?p=1&q=DefinePlugin&utf8=%E2%9C%93
- https://github.com/webpack/webpack/issues/1720
- https://github.com/webpack/webpack/issues/2537
- https://github.com/webpack/webpack/issues/868

## 升级Vue2.x

以上都修改完了，访问页面是空白，同时有几个请求链接不对。这就奇怪了，我没改什么啊，怎么会不行啊。`new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'), ` 引起了`test/index.html`路径的变动，具体看[这里](https://github.com/huixisheng/iview/commit/810ea2014be5e7c2c7e5f5f1954730c0b4f71461#diff-ab32b98942d40992faa2e5e3f8ac9563)。

于是一行行打开`src/index.js`注释的代码，根据报错一个个处理。但是这样处理是不是太慢了，于是下载了[迁移工具](https://github.com/vuejs/vue-migration-helper)根据报错全局替换。嘿嘿，这样是快了很多。然后对引入组件的注释一个个打开，报错单独处理。



###  处理迁移工具报错 ###

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

### 使用内联value的v-model移除

```
<input :type="type" v-model="value">:
v-model does not support dynamic input types. Use v-if branches instead.
```
https://forum.vuejs.org/t/v-model-does-not-support-dynamic-input-types/2180
https://github.com/vuejs/vue/issues/3915

### v-else必要要有v-if ###

v-else used on element <ul> without corresponding v-if.
https://cn.vuejs.org/v2/guide/migration.html#v-show后面使用v-else-移除

### prop属性不支持修改, prop.sync移除 ###

```
vendor.bundle.js:3207 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "model"
(found in component <iSelect> at iview/src/components/select/select.vue)
```

### transtion修改  ###

发现的问题modal没有触发显示的动画

vue2.x
```
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
```

vue1.x
```
/* 必需 */
.fade-transition {
  transition: all .3s ease;
}
/* .fade-enter 定义进入的开始状态 */
/* .fade-leave 定义离开的结束状态 */
.fade-enter, .fade-leave {
  opacity: 0;
}
```
对比下就知道该怎么修改了。

### 入口vue修改 ###

ERROR LOG: '[Vue warn]: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
(found in <Root>)'
LOG LOG: <!---->

vue打包很多个版本，这里我们需要含有`compiler`的版本
```
resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
}
```

## 关键字不能作为自定义属性

vendor.bundle.js:1319 [Vue warn]: "key" is a reserved attribute and cannot be used as component prop.
vendor.bundle.js:1319 [Vue warn]: Missing required prop: "key"


### 如何设置默认路由

- [How can I set a default route on page load #866](https://github.com/vuejs/vue-router/issues/866)

```
},{
  path: '*',
  redirect: '/button'
}]
```

### vm.$set变更 ###

Cannot create property 'true' on string 'data[0].isLeaf'
    at VueComponent.set$1 [as $set]

### 用`v-on`监听原生事件变更
>现在在组件上使用 v-on 只会监听自定义事件（组件用 $emit 触发的事件）。如果要监听根元素的原生事件，可以使用 .native 修饰符，比如：
`<Button v-on:click.native="doSomething"></Button>`

@todo

### Object.entries

### $dispatch和$broadcast废弃

```
this.$dispatch is not a function
```

Do not use built-in or reserved HTML elements as component id: Switch
- https://github.com/vuejs/vue/commit/13a14d5a96860e454211351a92104f03dc980255

## 参考
- https://developer.mozilla.org/zh-CN/search?q=of
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- http://www.cnblogs.com/xxcanghai/p/6382607.html
- https://teng2015.gitbooks.io/vue2-0/content/
- https://segmentfault.com/a/1190000006435886
- http://www.cnblogs.com/xxcanghai/p/6124699.html
- http://slides.com/awee/vue2#/
- http://www.cnblogs.com/xxcanghai/p/6098663.html
- https://github.com/dingyiming/example-vue2/issues/9
