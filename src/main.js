import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import './axios'
import './mock/'

const app = createApp(App)
app.mount("#app");
app.config.globalProperties.$axios=axios;  //配置axios的全局引用