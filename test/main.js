/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView, { locale });

// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
  // history: true,
  routes: [{
      path: '/button',
      component: require('./routers/button.vue')
      // component: function (resolve) {
      //     require(['./routers/button.vue'], resolve);
      // }
    }, {
      path: '/card',
      component: function (resolve) {
        require(['./routers/card.vue'], resolve);
      }
    }, {
      path: '/message',
      component: require('./routers/message.vue')
      // component: function (resolve) {
      //   require(['./routers/message.vue'], resolve);
      // }
    },{
      path: '/more',
      component: function (resolve) {
          require(['./routers/more.vue'], resolve);
      }
    },{
      path: '/page',
      component: function (resolve) {
          require(['./routers/page.vue'], resolve);
      }
    },{
      path: '/poptip',
      component: function (resolve) {
          require(['./routers/poptip.vue'], resolve);
      }
    },{
      path: '/tooltip',
      component: function (resolve) {
          require(['./routers/tooltip.vue'], resolve);
      }
    },{
      path: '/radio',
      component: function (resolve) {
          require(['./routers/radio.vue'], resolve);
      }
    },{
      path: '/select',
      component: function (resolve) {
          require(['./routers/select.vue'], resolve);
      }
    },{
      path: '/slider',
      component: function (resolve) {
          require(['./routers/slider.vue'], resolve);
      }
    },{
      path: '/step',
      component: function (resolve) {
          require(['./routers/step.vue'], resolve);
      }
    },{
      path: '/switch',
      component: function (resolve) {
          require(['./routers/switch.vue'], resolve);
      }
    },{
      path: '/alert',
      component: function (resolve) {
          require(['./routers/alert.vue'], resolve);
      }
    },{
      path: '/tag',
      component: function (resolve) {
          require(['./routers/tag.vue'], resolve);
      }
    },{
      path: '/input',
      component: function (resolve) {
          require(['./routers/input.vue'], resolve);
      }
    },{
      path: '/cascader',
      component: function (resolve) {
          require(['./routers/cascader.vue'], resolve);
      }
    },{
      path: '/transfer',
      component: function (resolve) {
          require(['./routers/transfer.vue'], resolve);
      }
    },{
      path: '/table',
      component: function (resolve) {
          require(['./routers/table.vue'], resolve);
      }
    },{
      path: '/dropdown',
      component: function (resolve) {
          require(['./routers/dropdown.vue'], resolve);
      }
    },{
      path: '/tabs',
      component: function (resolve) {
          require(['./routers/tabs.vue'], resolve);
      }
    },{
      path: '/menu',
      component: function (resolve) {
          require(['./routers/menu.vue'], resolve);
      }
    },{
      path: '/date',
      component: function (resolve) {
          require(['./routers/date.vue'], resolve);
      }
    },{
      path: '/form',
      component: function (resolve) {
          require(['./routers/form.vue'], resolve);
      }
    },{
      path: '/carousel',
      component: function (resolve) {
          require(['./routers/carousel.vue'], resolve);
      }
    },{
      path: '/rate',
      component: function (resolve) {
          require(['./routers/rate.vue'], resolve);
      }
    },{
      path: '/upload',
      component: function (resolve) {
          require(['./routers/upload.vue'], resolve);
      }
    },{
      path: '/tree',
      component: function (resolve) {
          require(['./routers/tree.vue'], resolve);
      }
    },{
      path: '/notice',
      component: function (resolve) {
          require(['./routers/notice.vue'], resolve);
      }
    },{
      path: '/other',
      component: function (resolve) {
          require(['./routers/other.vue'], resolve);
      }
    },{
      path: '/breadcrumb',
      component: function (resolve) {
          require(['./routers/breadcrumb.vue'], resolve);
      }
    },{
      path: '/badge',
      component: function (resolve) {
          require(['./routers/badge.vue'], resolve);
      }
    },{
      path: '/timeline',
      component: function (resolve) {
          require(['./routers/timeline.vue'], resolve);
      }
    },{
      path: '/timepicker',
      component: function (resolve) {
          require(['./routers/timepicker.vue'], resolve);
      }
    }]
});
// https://cn.vuejs.org/v2/guide/migration-vue-router.html#router-map-替换


// router.beforeEach(function () {
//     window.scrollTo(0, 0);
// });

// router.afterEach(function (transition) {

// });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
  // template: '<router-view></router-view>'
})

// router.redirect({
//     '*': "/button"
// });
// router.start(App, '#app');
