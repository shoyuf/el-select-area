import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElFormRenderer from '@femessage/el-form-renderer'
import ElDataTable from '@femessage/el-data-table'
import axios from 'axios'
Vue.use(ElementUI)
Vue.component('el-form-renderer', ElFormRenderer)
Vue.component(ElDataTable.name, ElDataTable)
Vue.prototype.$axios = axios
