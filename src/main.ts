import { createApp } from 'vue'
import './style.css'
import "./assets/styles/myStyle.css"
import App from './App.vue'
import MyPlugin from './plugins/MyPlugin'
import router from './router'

const app = createApp(App)

app.use(router)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})


app.directive('color', {
  beforeMount(el, binding) {
    el.style.color = binding.value
  }
})

app.directive('resize', {
  mounted(el, binding) {
    const onResize = () => {
      binding.value(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    el._onResize = onResize; 
  },
  unmounted(el) {
    window.removeEventListener('resize', el._onResize);
  }
});


app.use(MyPlugin)


app.mount('#app')
