import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateEmp from '../components/CreateEmp.vue';
import FetchTable from "../components/FetchTable.vue";
import ChangeForm from "../components/ChangeForm.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: FetchTable,
  },
  {
    path: "/createemp",
    name: "CreateEmp",
    component: CreateEmp,
  },
  {
    path: "/change/:id",
    name: "ChangeForm",
    component: ChangeForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
