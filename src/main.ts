import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/style/reset.scss'
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_buttom/index.vue"
import router from '@/router'//index.ts可以省略
//引入element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import pinia from '@/store'
import Login from '@/components/login/index.vue'
const app=createApp(App)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.use(pinia)
app.component('HospitalTop',HospitalTop)//全局组件
app.component('HospitalBottom',HospitalBottom)
app.component('Login',Login)
app.mount('#app')
