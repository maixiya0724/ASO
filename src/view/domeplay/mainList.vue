
<template>
  <!-- 试玩赚列表 -->
  <div class="quest_window">
    <header class="fixed_header">
      <div class="header">
        <a href="javascript:history.back(-1)" class="width1">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png">
        </a>
        <span id="code">限时任务</span>
        <a href="javascript:location.reload();" class="width1">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png">
        </a>
      </div>
    </header>
    <div class="content" id="task-list">
      <div class="imageNext">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_top_strategy.png" alt="">
      </div>
      <div
        class="current_tasks"
        id="current-task-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <!-- <div class="list list1 list_padding1" @click="goTeacher">
          <div class="left_img1 MZ-blur">
            <img src="" class="left_img">
          </div>
          <div class="flex1 task-info" data-restnum="27" data-message="">
            <p class="app_title">
              收徒赚钱
              <span style="color:#999;font-size:12px;">（月入万元的秘诀）</span>
            </p>
            <p>
              <i class="three_kinds_red border2">付费</i>
              <i class="three_kinds_red border2">剩余100+份</i>
            </p>
          </div>
          <div class="red">
            <div class="font1 red2">
              +
              <span class="font2">200</span>元
            </div>
          </div>
        </div>-->
        <div
          class="list list1 list_padding1"
          v-for="(item,index) in myTaskList.doing_list"
          :key="index+'1'"
          v-if="myTaskList.doing_list.length>0"
          @click="goMyTask(item.id)"
        >
          <div class="left_img1 MZ-blur">
            <img :src="item.thumb" class="left_img">
          </div>
          <div class="flex1 task-info" data-restnum="27" data-message="">
            <p class="app_title">
              {{item.app_name}}
              <!-- <i class="three_kinds_red border2">付费</i> -->
            </p>
            <p>剩余{{item.quantity-item.doing_num-item.completed_num}}份</p>
          </div>
          <div class="red">
            <div class="font1 red2">
              <span class="font2" style="font-size:16px;">进行中</span>
            </div>
          </div>
        </div>
        <div
          class="list list1 list_padding1"
          v-for="(item,indexs) in myTaskList.not_do_list"
          :key="indexs"
          @click="checkScoket(item)"
        >
          <div class="left_img1 MZ-blur">
            <img :src="item.thumb" class="left_img">
          </div>
          <div class="flex1 task-info" data-restnum="27" data-message="">
            <p class="app_title">
              {{item.app_name}}
            </p>
            <p>剩余{{item.quantity-item.doing_num-item.completed_num}}份</p>
          </div>
          <div class="red">
            <div class="font1 red2">
              +
              <span class="font2">{{item.price}}</span>元
            </div>
          </div>
        </div>
        <!-- <div class="taskAll">
          以下
          <span>63</span>个任务即将开始,总共
          <span>57.28</span>元,准时来抢
        </div>-->
        <!-- 可接的任务 -->
      </div>
      <div class="loadMore" v-if="loadMoreData">
        <div class="loadImage"></div>
        <span>加载中</span>
      </div>
      <p class="want_to_make">每日15点发放大量任务，反馈问题奖励丰厚。</p>
      <!-- <div class="footer_btn">
        <button class="btn1" id="invite_friend" @click="goTeacher">邀请好友</button>
      </div>-->
    </div>
    <!-- 验证码 -->
    <div id="veCode"></div>
    <div class="keyBox" id="launch_key" v-if="openKey">
      <div class="dialog_flex"></div>
      <div class="dialog_flex1">
        <div class="not_open_key">
          <img src="https://res.youth.cn/ASO/img/icon4-75.png">
          <p>钱多多未开启</p>
          <p>未开启钱多多，无法保障收益到账</p>
          <div class="key_button goto_link" data-link="bmyaoshi://" @click="callApp">启动钥匙</div>
          <p>
            如遇问题，
            <span class="download_app" @click="downloadKey">请重新下载钱多多</span>
          </p>
        </div>
      </div>
    </div>
    <div class="keyBox" id="download_key" v-if="downApp">
      <div class="dialog_flex"></div>
      <div class="dialog_flex1">
        <div class="helper_key">
          <p>
            请下载任务助手钱多多
          </p>
          <p>任务期间需开启钱多多</p>
          <img src="https://res.youth.cn/ASO/img/icon4-75.png">
          <button class="download_app" @click="download_app">
            <span>立即下载</span>
          </button>
          <p>每个人的助手可能不同</p>
          <img
            src="https://mirror.erbicun.cn/2018/images/toast_btn_close.png"
            @click="closeDownloadKey"
            class="close_btn"
          >
        </div>
      </div>
    </div>
    <div class="keyBox" v-if="trustKey" id="trust_key">
      <div class="dialog_flex"></div>
      <div class="dialog_flex1">
        <div class="trust_key">
          <h2>设置信任钱多多</h2>
          <div class="trust_key_wrap">
            <div class="step_num">
              <div>1</div>
              <div></div>
              <div>2</div>
              <div></div>
              <div>3</div>
              <div></div>
              <div>4</div>
            </div>
            <div class="step_content">
              <p>安装完成后，点击“信任钱多多”</p>
              <p>无法跳转，请打开 设置>通用>设备管理</p>
              <p>
                信任“
                <span>Rudraksh Woodtech</span>”
              </p>
              <p>点击“打开钱多多”</p>
              <p>打开失败，请返回桌面手动打开</p>
              <p>如安装失败，请卸载老钥匙后重试</p>
            </div>
          </div>
          <button class="trust_app" v-if="!downFiveTime">
            信任钱多多
            <span class="time">{{fiveTime}}s</span>
          </button>
          <button
            class="trust_app"
            style="background: #fe6631;color: rgba(255, 255, 255, 0.5);box-shadow: 0 0.25rem 0.5rem 0 rgba(254, 102, 49, 1)"
            v-if="downFiveTime" @click="trustApp"
          >信任钱多多</button>
          <button class="launch_app open_key_button" @click="callApp">打开钱多多</button>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="alert" style="display:none;">
      <div class="alertMain">
        <div class="alertText">
          <p>争抢失败,任务已被抢光</p>
          <p>请您再试试其他任务</p>
        </div>
        <div class="alertBtn">确定</div>
      </div>
    </div>
    <!-- 已经领取过 -->
    <div class="alert" style="display:none;">
      <div class="alertMain">
        <div class="alertText">
          <p>您已试用过该APP</p>
        </div>
        <div class="alertBtn">确定</div>
      </div>
    </div>
    <!-- 放弃任务 -->
    <div class="layer" v-if="giveUpTask">
      <div class="signDevive">
        <div class="signDeviveText">确定要放弃正在进行的任务么</div>
        <div class="btns">
          <div class="signDeviveBtn" @click="closeLayer">取消</div>
          <div class="signDeviveBtn" @click="giveUpTaskBtn(myTaskList.doing_list)">确定</div>
        </div>
      </div>
    </div>
  <!-- 新增验证弹窗 -->
    <div class="layer" v-if="validate" @click="closeLayer">
      <div class="trushLayer">
        <div class="trushLayerTitle">苹果官方认证</div>
        <div class="trushImg"></div>
        <p class="textInfo">为了您的账户安全，首次领取奖励需要安装证书通过设备验证~</p>
        <div class="layerBtn" @click="signDevice">安装证书</div>
      </div>
    </div>
  </div>
</template>
<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";
import { Indicator } from "mint-ui";
import { setTimeout, setInterval, clearInterval } from "timers";
Vue.use(InfiniteScroll);
import $http from "../../tool/url.js";
import { Toast } from "mint-ui";
import Axios from "axios";

// import socketIo from "socket.io"
// var Io = new socketIo()
export default {
  data() {
    return {
      issafariBrowser: false,
      params: this.$route.query,
      openKey: false,
      trustKey: false,
      downApp: false,
      fiveTime: 5,
      downFiveTime: false,
      loadMoreData: false,
      myTaskAll: [],
      myTaskList: {},
      websocket: {},
      giveUpTask: false,
      captchaIns: {},
      taskId: "",
      validate: false,
      taskInfo: {}
    };
  },
  created() {},

  mounted() {
    this.onload();
    //this.resizeTask();
  },
  methods: {
    async onload() {
      this.myAdList();
      this.veCode();
      this.setUDID();
    },
    closeLayer() {
      this.giveUpTask = false;
      this.validate = false;
    },
    // 验证设备
    signDevice() {
      location.href = "https://view.youth.cn/ASO/getUDIDSigned.mobileconfig";
    },

    closeDownloadKey() {
      this.downApp = false;
    },
    // 检查webscoket状态
    checkScoket(item) {
      console.log("检查状态");
      if (localStorage.getItem("UDID")) {
        console.log("以获取手机ID");
        if (window.newWebsocket.readyState != "1") {
          this.openKey = true;
        } else {
          this.grubTask(item);
        }
      } else {
        this.validate = true;
      }
    },

    // 下载钥匙
    download_app() {
      location.href="itms-services://?action=download-manifest&url=https://aso.baertt.com/1.plist";
      this.downApp = false;
      this.trustKey = true;
      // 倒计时去信任
      clearInterval(timer);
      var timer = setInterval(() => {
        this.fiveTime--;
        if (this.fiveTime <= 0) {
          clearInterval(timer);
          this.downFiveTime = true;
        }
      }, 1000);
    },
    // 下载钥匙
    downloadKey() {
      location.href="itms-services://?action=download-manifest&url=https://aso.baertt.com/1.plist";
      // 下载钥匙应用
      this.openKey = false;
      this.trustKey = true;
      clearInterval(timer);
      var timer = setInterval(() => {
        this.fiveTime--;
        if (this.fiveTime <= 0) {
          clearInterval(timer);
          this.downFiveTime = true;
        }
      }, 1000);
    },
    callApp: function() {
      let IosUrl = "CYRead://";
      location.href = IosUrl;
    },

    // 去收徒页面
    goTeacher() {
      this.$router.push({
        path: "/teacher",
        query: {
          cookie: localStorage.getItem("cookie"),
          cookie_id: localStorage.getItem("cookie_id")
        }
      });
    },
    // 我的任务详情
    goMyTask(id) {
      if (localStorage.getItem("UDID")) {
        this.$router.push({
          path: "/domeplay",
          query: {
            cookie: localStorage.getItem("cookie"),
            cookie_id: localStorage.getItem("cookie_id"),
            id: id
          }
        });
      } else {
        this.validate = true;
      }
    },
    // 抢任务
    async grubTask(item) {
      // 抢任务之前先判断是否有在做的任务
      let that = this;
      this.taskId = item.id;
      this.taskInfo = item;

      if (this.myTaskList.doing_list[0]) {
        this.giveUpTask = true;
      } else {
        // 没有正在进行的任务 并且没有验证过弹窗
        if (!localStorage.getItem("code")) {
          this.captchaIns && this.captchaIns.popUp();
        } else {
          that.grubTaskAjax();
        }
      }
    },
    grubTaskAjax() {
      Indicator.open({
        text: "争抢任务中...",
        spinnerType: "fading-circle"
      });
      // 抢任务之前先检查任务是否领取过
      console.log(this.taskInfo)
    
      return $http
        .get(
          `/Ad/grabAd?id=${this.taskInfo.id}&ad=${this.taskInfo.ad_id}&channel=103&plan=${this.taskInfo.plan_detail_id}&idfa=G229697E-7F09-4I02-A9E7-418G68742652&systemversion=ios10&devicemodel=iPhone7&udid=${localStorage.getItem("UDID")}&keyword=${this.taskInfo.keyword}&cookie=${localStorage.getItem("cookie")}&cookie_id=${localStorage.getItem("cookie_id")}&callback=`
        )
        .then(res => {
          Indicator.close();
          if (res.data.status == "1") {
            // 争抢任务成功
            Toast({
              message: "成功抢到任务！请在30分钟内完成",
              position: "center",
              duration: 2000
            });
            //争抢成功后更新数据
            this.myAdList();
            this.goMyTask(this.taskId);
          } else if(res.data.status == "2"){
            Toast({
              message: "已安装该APP",
              position: "center",
              duration: 2000
            });
          }
          else {
            Toast({
              message: "争抢失败," + res.data.message,
              position: "center",
              duration: 2000
            });
          }
        });
    },
    giveUpTaskBtn(list) {
      let taskInfo = "";
      taskInfo = list[0];
      $http
        .get(
          `/Ad/giveUpAd/id/${taskInfo.id}?&ad=${taskInfo.ad_id}&channel=103&plan=${taskInfo.plan_detail_id}&idfa=G229697E-7F09-4I02-A9E7-418G68742652&systemversion=ios10&devicemodel=iPhone7&udid=${localStorage.getItem("UDID")}&keyword=${taskInfo.keyword}&cookie=${localStorage.getItem("cookie")}&cookie_id=${localStorage.getItem("cookie_id")}&callback=`
        )
        .then(res => {
          if (res.data.status == "1") {
            Toast({
              message: "放弃任务成功",
              position: "center",
              duration: 2000
            });
            this.closeLayer();
            this.myAdList();
          } else {
            Toast({
              message: res.data.message,
              position: "center",
              duration: 2000
            });
          }
        });
    },

    // 获取我的任务列表
    async myAdList() {
      return $http
        .get(
          `/Ad/getUserAdList?cookie=${localStorage.getItem(
            "cookie"
          )}&cookie_id=${localStorage.getItem("cookie_id")}`
        )
        .then(res => {
          if (res.data.status == "1") {
            this.myTaskList = res.data.data;
          } else {
            Toast({
              message: "请求任务列表失败",
              position: "center",
              duration: 2000
            });
          }
        });
    },

    // 刷新任务
    async resizeTask() {
      return $http.get("/Ad/get_list_old/id/1 ").then(res => {
        if (res.data.status == "1") {
          this.myTaskList = res.data.data;
        } else {
          Toast({
            message: "请求任务列表失败",
            position: "center",
            duration: 2000
          });
        }
      });
    },

    veCode() {
      let that = this;
      initNECaptcha(
        {
          element: "#veCode",
          captchaId: "d7cced91c5c545fba3383794adff9d44",
          mode: "popup",
          width: "320px",
          onClose: function() {
            // 弹出关闭结束后将会触发该函数
            that.captchaIns.destroy();
          },
          onload() {
            that.captchaIns.refresh();
          },
          // 成功时出发的回调
          onVerify() {
            that.grubTaskAjax();
            localStorage.setItem("code", true);
          }
        },
        function(instance) {
          // 初始化成功后得到验证实例instance，可以调用实例的方法
          that.captchaIns = instance;
        },
        function(err) {
          // 初始化失败后触发该函数，err对象描述当前错误信息
        }
      );
      // 监听button的点击事件，弹出验证码
      document.getElementById("code").addEventListener("click", function() {});
    },

    loadMore() {
      // 加载更多
      this.loadMoreData = false;
      return false;
    },

    showLoading() {
      Indicator.open({
        text: "加载中",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        Indicator.close();
      }, 2000);
    },
    setUDID() {
      let UDID = localStorage.getItem("UDID");
      // 验证设备完成
      if (UDID) {
        this.validate = false;
      } else {
        this.validate = true;
      }
    },
    trustApp(){
      localStorage.setItem("trustKey", true);
      location.href="http://file.weixinkd.com/ASO/embedded.mobileprovision"
    },
  }
};
/*
  1.新用户 下载第一次进来点击下载
*/
</script>

<style lang="less" scoped>
.imageNext {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
}

.download_app {
  span {
    width: 100%;
    height: 100%;
    color: #fff;
    line-height: 2.8125rem;
  }
}
.quest_window {
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
}
.quest_window .fixed_header {
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  box-shadow: 0 0.0625rem 0 0 #e2e2e2;
  background: #fff;
}
.quest_window .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.75rem;
}
.quest_window .header span {
  font-size: 1.0625rem;
  color: #333;
}
.quest_window .width1 {
  padding: 0.6875rem 0.9375rem;
}
.quest_window .width1 img {
  width: 1.375rem;
  height: 1.375rem;
}
.quest_window .content {
  margin-top: 2.75rem;
  padding: 0.4375rem 0.625rem;
}
.quest_window .left_img {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.625rem;
}
.quest_window .flex1 {
  margin-left: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.quest_window .flex1 i {
  display: inline-block;
  vertical-align: text-top;
  box-sizing: border-box;
  font-style: normal;
}
.quest_window .flex1 p:nth-child(1) {
  font-size: 1.0625rem;
  color: #333;
}
.quest_window .flex1 p:nth-child(2) {
  margin-top: 0.4rem;
  font-size: 0.8125rem;
  color: #666;
}
.quest_window .flex1 p:nth-child(2) img.type_bazaar {
  display: inline-block;
  vertical-align: middle;
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 0.125rem;
  margin: 0 0.3125rem;
  margin-top: -0.25rem;
}
.quest_window .red {
  display: flex;
  align-items: center;
}
.quest_window .left_img1 {
  display: flex;
  align-items: center;
}
.quest_window .content .list {
  position: relative;
  padding: 0rem 0.3125rem 0rem 0.625rem;
  border-radius: 0.5rem;
  height: 5rem;
  display: flex;
  background: #fff;
  justify-content: space-between;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
}
.quest_window .font2 {
  font-size: 1.75rem;
}
.quest_window .red2 {
  color: #fe6631;
}
.quest_window .flex1 p:first-child i {
  margin-left: 0.15rem;
}
.quest_window .exclusive img {
  width: 2.375rem;
  height: 2.375rem;
}
.quest_window .exclusive {
  position: absolute;
  top: 0;
  left: 0;
}
.quest_window .border2 {
  height: 1.0625rem;
  line-height: 1.0625rem;
  text-align: center;
  font-size: 0.625rem;
  padding: 0 0.1875rem;
  border-radius: 0.25rem;
}
.quest_window .three_kinds_red {
  color: #fe6631;
  border: 0.0625rem solid #fe6631;
}
.quest_window .three_kinds_green {
  color: green;
  border: 0.0625rem solid green;
}
.quest_window .three_kinds_blue {
  color: #00a3f2;
  border: 0.0625rem solid #00a3f2;
}
.quest_window .tomorrow_open {
  color: #f00;
  border: 0.0625rem solid #f00;
}
.quest_window .font1 {
  font-size: 0.8125rem;
}
.quest_window .content .list1 {
  margin-top: 0.4375rem;
}
.quest_window .content .list_padding {
  padding-right: 1.46875rem;
}
.quest_window .content .list_padding1 {
  padding-right: 0.71875rem;
}
.quest_window .content .list1 .img1 {
  width: 2.75rem;
  height: 2.75rem;
}
.quest_window .about_to_begin {
  margin: 0.65625rem auto;
  font-size: 0.9375rem;
  border-radius: 1.0625rem;
  color: #666;
  text-align: center;
  background: #fff;
  width: 22.1875rem;
  height: 2.125rem;
  line-height: 2.125rem;
  box-sizing: border-box;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.08);
}
.quest_window .red3 {
  color: #c1c1c1;
}
.quest_window .want_to_make {
  margin-bottom: 0.625rem;
  width: 100%;
  text-align: center;
  font-size: 0.8125rem;
  color: #666;
  margin: 1.25rem auto 0.625rem;
}
.quest_window .footer_btn {
  width: 100%;
  text-align: center;
  margin-bottom: 1.28125rem;
}
.quest_window .btn1 {
  width: 20.3125rem;
  height: 2.8125rem;
  background: #fe6631;
  border: 0;
  font-size: 1rem;
  color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
}
.quest_window .start_time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #feaf87;
  border-radius: 0.625rem;
}
.quest_window .left_img p {
  font-size: 0.8125rem;
  color: #fff;
}
.dialog_flex {
  position: fixed;
  opacity: 0.6;
  background: #000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog_flex1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog .wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 18.4375rem;
  min-height: 6.78125rem;
  background: #fff;
  border-radius: 0.625rem;
}
.dialog .wrapper .border_bottom:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0rem 0.9375rem;
  line-height: 1.5625rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.dialog .wrapper .sure:nth-child(2) {
  text-align: center;
  border-top: 0.0625rem solid #e2e2e2;
  font-size: 1.0625rem;
  color: #fe6631;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
}
.dialog .black_box {
  display: flex;
  justify-content: center;
  padding: 0rem 0.625rem;
  align-items: center;
  width: 18.4375rem;
  min-height: 4.0625rem;
  background: #000;
  border-radius: 0.625rem;
  opacity: 0.9;
  font-size: 0.9375rem;
  color: #fff;
}
.dialog .load_box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 7.5rem;
  height: 7.5rem;
  background: #000;
  border-radius: 0.3125rem;
  opacity: 0.7;
  font-size: 0.9375rem;
  color: #fff;
}
.dialog .load_icon {
  width: 1.875rem;
  height: 1.875rem;
  vertical-align: middle;
  margin-bottom: 0.625rem;
}
.dialog .warning_icon {
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.625rem;
  vertical-align: middle;
  margin-bottom: 0.125rem;
}
.dialog .wrapper_size {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 18.4375rem;
  background: #fff;
  padding: 0 1.25rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
}
.dialog .text_box {
  margin-top: 1.25rem;
  font-size: 1.0625rem;
  color: #333;
  margin-bottom: 1.25rem;
}
.dialog .flex_end {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0.9375rem;
}
.dialog .btn {
  height: 1.5rem;
  border: 0;
  font-size: 1.0625rem;
  text-align: center;
  background: transparent;
  white-space: nowrap;
  color: #fe6631;
}
.dialog .flex_end .btn:nth-child(2) {
  margin-left: 1.875rem;
}

.keyBox .dialog_flex {
  position: fixed;
  opacity: 0.6;
  background: #000;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.keyBox .dialog_flex1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  height: 100%;
}
.keyBox .not_open_key {
  width: 18.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 0.625rem;
}
.keyBox .not_open_key img {
  margin-top: 1.5625rem;
  width: 4.6875rem;
  height: 4.6875rem;
}
.keyBox .not_open_key p:nth-of-type(1) {
  font-size: 1.25rem;
  margin-top: 1.25rem;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
}
.keyBox .not_open_key p:nth-of-type(2) {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #c1c1c1;
}
.keyBox .not_open_key p:nth-of-type(3) {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #c1c1c1;
  margin-bottom: 1.25rem;
}
.keyBox .not_open_key p:nth-of-type(3) span {
  color: #fe6631;
}
.keyBox .not_open_key .key_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.9375rem;
  height: 2.8125rem;
  background: #fe6631;
  font-size: 1rem;
  color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(254, 102, 49, 0.5);
  border-radius: 0.25rem;
  margin-top: 1rem;
}
.keyBox .helper_key img {
  margin-top: 1.25rem;
  margin-top: 1.5625rem;
  width: 4.6875rem;
  height: 4.6875rem;
}
.keyBox .helper_key {
  position: relative;
  width: 18.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 0.625rem;
}
.keyBox .helper_key p:nth-of-type(1) {
  margin-top: 1.5625rem;
  font-weight: bold;
  font-size: 1.125rem;
  color: #333;
}
.keyBox .helper_key p:nth-of-type(2) {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #c1c1c1;
}
.keyBox .helper_key p:nth-of-type(3) {
  margin: 1rem 0 1.25rem;
  font-size: 0.875rem;
  color: #c1c1c1;
}
.keyBox .helper_key button:nth-of-type(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.9375rem;
  height: 2.8125rem;
  background: #fe6631;
  font-size: 1rem;
  color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(254, 102, 49, 0.5);
  border-radius: 0.25rem;
  margin-top: 1.25rem;
  outline: 0;
}
.keyBox .helper_key button:nth-of-type(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.9375rem;
  height: 2.8125rem;
  font-size: 1rem;
  color: #cdcdcd;
  background: transparent;
  outline: 0;
  border: 0.0625rem solid #cdcdcd;
  border-radius: 0.25rem;
  margin-top: 1.25rem;
}
.keyBox .helper_key button.open_key_button {
  border: 0.0625rem solid #fe6631;
  color: #fe6631;
}
.keyBox .helper_key .close_btn {
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  top: -4.375rem;
  right: 0rem;
}
.keyBox .trust_key {
  position: relative;
  width: 18.4375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 0.625rem;
}
.keyBox .trust_key h2 {
  font-size: 1.125rem;
  color: #333;
  margin-top: 1.5625rem;
  text-align: center;
}
.keyBox .trust_key_wrap {
  display: flex;
  flex-direction: row;
  margin-top: 1.25rem;
}
.keyBox .trust_key_wrap .step_num {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.keyBox .trust_key_wrap .step_num div:nth-child(odd) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #fe6631;
  font-size: 0.875rem;
  color: #fff;
}
.keyBox .trust_key_wrap .step_num div:nth-child(even) {
  width: 0.0625rem;
  height: 1.625rem;
  background: #fe6631;
  margin: 0.3125rem 0;
}
.keyBox .trust_key_wrap .step_content {
  margin-left: 0.5rem;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(1) {
  font-size: 0.875rem;
  color: #333;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(2) {
  font-size: 0.75rem;
  color: #c1c1c1;
  margin-top: 0.25rem;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(3) {
  font-size: 0.875rem;
  color: #333;
  margin-top: 1.0625rem;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(4) {
  font-size: 0.875rem;
  color: #333;
  margin-top: 2.44375rem;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(5) {
  font-size: 0.75rem;
  color: #c1c1c1;
  margin-top: 0.25rem;
}
.keyBox .trust_key_wrap .step_content p:nth-of-type(6) {
  font-size: 0.875rem;
  color: #333;
  margin-top: 1.1rem;
}
.keyBox .trust_key button {
  width: 15.9375rem;
  height: 2.8125rem;
}
.keyBox .trust_key button:nth-of-type(1) {
  background: rgba(254, 102, 49, 0.5);
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(254, 102, 49, 0.3);
  border-radius: 0.25rem;
  outline: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1.5625rem;
}
.keyBox .trust_key button:nth-of-type(2) {
  border: 0.0625rem solid #cdcdcd;
  border-radius: 0.25rem;
  background: transparent;
  outline: 0;
  font-size: 1rem;
  color: #cdcdcd;
  margin: 1rem 0 1.53125rem 0;
}
.keyBox .trust_key button.trust_key_button {
  background: #fe6631;
  border: 0.0625rem solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(254, 102, 49, 0.5);
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #fff;
}
.keyBox .trust_key button.open_key_button {
  border: 0.0625rem solid #fe6631;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #fe6631;
}

// 在浏览器里打开的引导
.external_open {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  opacity: 0.8;
  background: #000;
}
.external_open img {
  position: fixed;
  top: 0;
  right: 1.5625rem;
  width: 13.1875rem;
  height: 9.5rem;
}

#task-list {
  overflow: scroll;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.loadMore {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  .loadImage {
    width: 1.5rem;
    height: 1.5rem;
    background: url("https://res.youth.cn/ASO/img/loading.png");
    background-size: 100% 100%;
    animation: load 0.6s infinite linear;
    margin-right: 0.3rem;
  }
  span {
    font-size: 16px;
    color: #bfbfbf;
  }
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loadNext {
  width: 100%;
  height: 2rem;
  background: red;
}

.taskAll {
  width: 100%;
  height: 2rem;
  background: #fff;
  margin: 0.5rem auto;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
  span {
    color: #fe6631;
  }
}

#task-list {
  background: #f2f1f8;
}

.signDevive {
  width: 6 * 3.125rem;
  padding: 0.2 * 3.125rem;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.2 * 3.125rem;
  overflow: hidden;
  z-index: 100;
  .signDeviveText {
    font-size: 16px;
    color: #000;
    text-align: center;
    position: relative;
    top: 0.2 * 3.125rem;
  }
  .btns {
    width: auto;
    height: 0.3 * 3.125rem;
    margin: 0.4 * 3.125rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0.2 * 3.125rem;
    .signDeviveBtn {
      font-size: 16px;
      color: #fe6631;
      margin-left: 0.5 * 3.125rem;
    }
  }
}
.layer {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.trushLayer {
  width: 17.8rem;
  height: 19.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #fff;
  border-radius: 0.5rem;
  .trushLayerTitle {
    width: 100%;
    height: 3.125rem;
    background: #ff570d;
    text-align: center;
    line-height: 3.125rem;
    color: #fff;
    font-size: 16px;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .trushImg {
    margin: 1.875rem auto;
    width: 7.9rem;
    height: 4rem;
    background: url("https://res.youth.cn/ASO/img/openImg7.png");
    background-size: 100% auto;
  }
  .textInfo {
    color: #666;
    width: 15rem;
    text-align: center;
    margin: 0 auto;
  }
  .layerBtn {
    width: 11.25rem;
    height: 2.375rem;
    background: #ff570d;
    border-radius: 1.15rem;
    color: #fff;
    text-align: center;
    line-height: 2.375rem;
    margin: 0 auto;
    margin-top: 1.6rem;
  }
}
</style>

