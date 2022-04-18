import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('成功');
//     reject('失败')
//   }, 1000)
// }).then(data => {
//   console.log(data);
// }, err => {
//   console.log(err);
// })


// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('第一次拿到的结果');
//   }, 1000);
// }).then(data => {
//   console.log(data);
//   console.log(data);
//   console.log(data);
//   console.log(data);
//   console.log(data);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('第二次拿到的结果')
//     }, 1000);
//   }).then(data => {
//     console.log(data);
//     console.log(data);
//     console.log(data);
//     console.log(data);
//     console.log(data);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('第三次拿到的结果')
//       }, 1000);
//     }).then(data => {
//       console.log(data);
//       console.log(data);
//       console.log(data);
//       console.log(data);
//       console.log(data);
//     })
//   })
// })