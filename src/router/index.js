import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import DomePlayList from "../view/list.vue"
import Main from "../view/main.vue"
import Record from "../view/center/record.vue"
import DomePlay from "../view/domeplay/domeplay.vue"
import LoginOut from "../view/loginOut.vue"
import Center from "../view/center/center.vue"
import Sign from "../view/sign.vue"
import Teacher from "../view/teacher/teacher.vue"
import cashDe from "../view/center/cash/cashDetails.vue"
import Problem from "../view/center/problem.vue"
import BindPhone from "../view/center/bindPhone.vue"
import Cashlist from "../view/center/cash/cashlist.vue"
import Mainlist from "../view/domeplay/mainList.vue"
import TeacherDe from "../view/teacher/teacherDe.vue"
import Reward from "../view/teacher/reward.vue"
import Cash from "../view/center/cash/cash.vue"
import CashZfb from "../view/center/cash/cashZfb.vue"
import CashWx from "../view/center/cash/cashWx.vue"
import BindWx from "../view/center/bindWx.vue"
import WxQr from "../view/center/wxQr.vue"
import Affairs from "../view/center/affairs.vue"


Vue.use(Router)
export default new Router({
  mode: 'history',
  base:"/dist",
  routes: [
    {
      path: '/list',
      name: 'list',
      component: DomePlayList
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/record',
      name:'record',
      component:Record,
    },
    {
      path:'/domeplay',
      name:'domeplay',
      component:DomePlay,
    },
    {
      path:'/loginOut',
      name:'loginOut',
      component:LoginOut,
    },
    {
      path:'/center',
      name:'center',
      component:Center,
    },
    {
      path:'/sign',
      name:'sign',
      component:Sign,
    },
    {
      path:'/teacher',
      name:'teacher',
      component:Teacher,
    },
    {
      path:'/cashDe',
      name:'cashDe',
      component:cashDe,
    },
    {
      path:'/problem',
      name:'problem',
      component:Problem,
    },
    {
      path:'/bindphone',
      name:'bindphone',
      component:BindPhone,
    },
    {
      path:'/mainlist',
      name:'mainlist',
      component:Mainlist,
    },
    {
      path:'/teacherDe',
      name:'teacherDe',
      component:TeacherDe,
    },
    {
      path:'/reward',
      name:'reward',
      component:Reward,
    },
    {
      path:'/cashlist',
      name:'cashlist',
      component:Cashlist,
    },
    {
      path:'/cashzfb',
      name:'cashzfb',
      component:CashZfb,
    },
    {
      path:'/cash',
      name:'cash',
      component:Cash,
    },
    {
      path:'/cashwx',
      name:'cashwx',
      component:CashWx,
    },
    {
      path:'/bindwx',
      name:'bindwx',
      component:BindWx,
    },
    {
      path:'/wxQr',
      name:'wxQr',
      component:WxQr,
    },
    {
      path:'/main',
      name:'main',
      component:Main,
    },
    {
      path:'/affairs',
      name:'affairs',
      component:Affairs,
    }
  ]
})
