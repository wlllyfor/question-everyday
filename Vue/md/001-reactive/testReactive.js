const { createApp, reactive, effect } = Vue
createApp().mount("#app")

const userInfo = reactive({
  name: 'lin'
})

let name
effect(() => {
  name = userInfo.name
})
