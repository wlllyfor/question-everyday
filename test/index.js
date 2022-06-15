const { createApp, reactive, effect, ref } = Vue;
createApp().mount("#app")

// const userInfo = reactive({
//   name: 'lin'
// })

// let name
// effect(() => {
//   name = userInfo.name
// })

// let a = ref(5)
// let b

// effect(() => {
//   b = a.value * 10
// })
// const p = new Proxy({
//   a: 5
// }, {
//   set(obj, key, val) {
//     obj[key] = val
//     updateB(val) // 在 set 方法里执行 updateB 方法
//   }
// })
// let b = p.a * 10

// function updateB(val) {
//   b = val * 10
//   console.log(`b的值为：${b}`)
// }


