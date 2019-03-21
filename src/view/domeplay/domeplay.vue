<template>
  <div class="task_details">
    <header class="header">
      <a id="back" class="size_btn" href="javascript:history.back(-1)">
        <img
          width="100%"
          src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png"
        >
      </a>
      <span class="txt_white">任务详情</span>
      <a class="size_btn" href="javascript:location.reload();">
        <img width="100%" src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png">
      </a>
    </header>
    <div class="wrapper"></div>
    <div class="wrap detail_new_v2">
      <div class="head_top">
        <div class="head_topCenter">
          <p class="head_topCenterText">
            任务奖励=
            <span>{{taskInfo.price}}</span>元
          </p>
          <div class="downTime">剩余时间 {{downTimeNum}}</div>
        </div>
      </div>
      <div class="detail_new_v2Text">
        <span>专属任务:</span>完成限时任务后,后续再打开
        <span>1</span>天,每天获得
      </div>
      <div class="keyword_box">
        <img :src="taskInfo.thumb">
        <p class="txt_c">
          关键词：
          <span>{{taskInfo.keyword}}</span>
        </p>
      </div>
      <div class="step">
        <p>
          1、点击
          <i>复制关键词</i>，跳转AppStore粘贴搜索，约第
          <i class="bigger">{{taskInfo.rankings}}</i>位，找到该图标应用下载安装。
        </p>
        <p>
          2、返回本页面，点击
          <i>打开应用</i>，试玩该应用；打开应用时，请务必
          <i>“允许使用数据”</i>。
        </p>
        <p>
          3、
          <i>首次下载，联网打开激活试玩3分钟，24小时内请勿删除，谢谢！</i>
        </p>
      </div>
      <div id="copyKeywords" class="keyword_btn">
        <a
          class="copy_keyword"
          id="copy_keyword"
          :data-clipboard-text="copyValue"
          @click="copy"
        >复制关键词</a>
      </div>
      <div
        id="openApp"
        class="keyword_btn"
        style="overflow:hidden;"
        @click="checkScoket(taskInfo.bundleid)"
      >
        <a class="copy_keyword">打开应用（必须在此打开）</a>
      </div>
      <div id="checkStatus" class="keyword_btn" style="overflow:hidden;" @click="checkTaskStatus">
        <a class="border">检查完成状态</a>
      </div>
      <div
        id="abortTask"
        class="keyword_btn no_style"
        style="overflow:hidden;"
        @click="giveUpClick"
      >
        <a>放弃任务</a>
      </div>
    </div>
    <!--复制关键词弹窗-->
    <div id="copyDialog" class="bg" v-if="copyText" @click="closeLayer">
      <div class="copy_succ_box" @click.stop>
        <p class="head">复制成功</p>
        <div class="app_box">
          <div class="app_pic">
            <img :src="taskInfo.thumb">
          </div>
          <div class="app_key">
            <p>关键词: {{taskInfo.keyword}}</p>
            <p>
              在第
              <i class="bigger">{{taskInfo.rankings}}</i>名左右
            </p>
          </div>
        </div>
        <h4>1、在AppStore搜索框内粘贴关键词，找到该应用并下载</h4>
        <h4>
          2、打开应用请务必
          <i>“允许使用数据”</i>，否则无法获得奖励！
        </h4>
        <div id="gotoAppStore" class="keyword_btn" @click="goAppStore">前往AppStore</div>
        <p class="no_more_hint hint_gray not_tips">
          <!-- <span class="on">
            <img src="https://mirror.erbicun.cn/2018/images/tosat_icon_unchecked.png">
          </span> -->
        </p>
      </div>
    </div>
    <!--完成弹窗-->
    <div id="finishDialog" class="bg" v-if="successLayer">
      <div class="complete_pop">
        <div class="ba_wrap">
          <p class="head txt_c">
            <i>恭喜完成任务！</i>
          </p>
          <div class="inner">
            <p class="txt_c">
              完成《{{taskInfo.app_name}}》任务
              <br>获得奖励
            </p>
            <p class="txt_c earn">
              <i class="text_size">
                <span>{{taskInfo.price}}</span>元
              </i>
            </p>
          </div>
          <div class="keyword_btn" @click="goMainlist">OK，继续赚钱</div>
        </div>
      </div>
    </div>
    <!--未完成弹窗-->
    <div id="notCompletedDialog" class="bg" v-if="goOnLayer">
      <div class="no_complete_pop">
        <em class="close" @click="closeLayer">×</em>
        <p class="head txt_c">任务尚未完成请继续试玩！</p>
        <p class="tishi">
          温馨提示：需要“
          <i>允许使用数据</i>”并试玩 3 分钟，才能获得奖励哦~
        </p>
        <div class="tishi_text">
          <p>注意下列情况无法获得任务奖励：</p>
          <p>1、非“首次”下载任务应用</p>
          <p>2、未“允许使用数据”试玩应用</p>
          <p>3、使用与他人共享的苹果账号</p>
          <p>4、非“App Store"下载任务应用</p>
        </div>
        <div class="keyword_btn" @click="closeLayer">OK，继续试玩</div>
      </div>
    </div>
    <!-- 打开应用弹窗 -->
    <div id="ios10Tan" class="bg" v-if="openApp">
      <div class="data_box">
        <div class="data_tishi">
          <img width="100%" src="http://cdn.miaozhuandaqian.com/mz/static/images/data_tishi.png">
        </div>
        <div class="data_text">
          打开APP后请选择“
          <i class="orange">允许</i>”使用数据 否则无法获得奖励
        </div>
        <div class="popup_btn" @click="closeLayer">
          <a>打开应用</a>
        </div>
      </div>
    </div>
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
            <span>8.5.1</span>
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
                <span>Beijing Chuangyi interact...</span>”
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
            v-if="downFiveTime"
          >信任钱多多</button>
          <button class="launch_app open_key_button" @click="callApp">打开钱多多</button>
        </div>
      </div>
    </div>
    <!-- 取消任务 -->
    <div class="layer" v-show="layerShow" @click="closeLayer">
      <div class="signDevive" @click.stop>
        <div class="signDeviveText">确定要放弃任务"{{taskInfo.app_name}}吗?"</div>
        <div class="btns">
          <div class="signDeviveBtn" @click="closeLayer">取消</div>
          <div class="signDeviveBtn" @click="giveUp">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import $http from "../../tool/url.js";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      copyValue: "",
      downTimeNum: "",
      taskInfo: {},
      btnCopy: {},
      copyText: false,
      successLayer: false,
      goOnLayer: false,
      openApp: false,
      trustKey: false,
      downFiveTime: false,
      downApp: false,
      openKey: false,
      fiveTime: 5,
      params: this.$route.query,
      layerShow: false,
      returnData: {},
      count_down: ""
    };
  },
  mounted() {
    this.getInfo();
    this.copy();
  },
  destroyed() {},
  watch: {
    count_down: function(newValue, oldValue) {
      if (newValue < 0) {
        Toast({
          message: "任务时间到,任务失败",
          position: "center",
          duration: 2000
        });

        setTimeout(() => {
          this.giveUp();
          this.$router.push({
            path: "/mainlist",
            query: {
              cookie: localStorage.getItem("cookie"),
              cookie_id: localStorage.getItem("cookie_id")
            }
          });
        }, 2000);
      }
    }
  },

  methods: {
    closeLayer() {
      this.copyText = false;
      this.successLayer = false;
      this.goOnLayer = false;
      this.openApp = false;
      this.trustKey = false;
      this.downApp = false;
      this.openKey = false;
      this.layerShow = false;
    },
    goMainlist(){
          this.$router.push({
            path: "/mainlist",
            query: {
              cookie: localStorage.getItem("cookie"),
              cookie_id: localStorage.getItem("cookie_id")
            }
          });
    },

    checkScoket(bundleid) {
      if (window.newWebsocket.readyState == "1") {
        this.inspectDome(bundleid);
      } else {
        this.openKey = true;
        console.log(window.newWebsocket.readyState, "第一次检测");
      }
    },
    // 下载钥匙
    downloadKey() {
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
    download_app() {
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
    closeDownloadKey() {
      this.downApp = false;
    },
    callApp: function() {
      let IosUrl = "CYRead://";
      location.href = IosUrl;
    },

    inspectDome(bundleid) {
      let that = this;
      this.trustKey = false;
      console.log(that.taskInfo.id)
      if (window.newWebsocket.readyState == "1") {
        window.newWebsocket.send(
          JSON.stringify({
            action: "isopenApp",
            appBuddleId: bundleid,
            appId:that.taskInfo.id,
            needTime: 1 //不需要0 需要 1;
          })
        ); // 发送参数到客户端

        window.newWebsocket.onmessage = function(event) {
          console.log(event);
          console.log(event.data);

          if (
            JSON.parse(event.data).isInstall == "0" &&
            JSON.parse(event.data).isInstall
          ) {
            //未安装
            Toast({
              message: "应用未安装,请安装后打开",
              position: "center",
              duration: 2000
            });
          } else {
            //已安装 打开app
          }
        };
      } else {
        console.log(window.newWebsocket.readyState, "第二次检测");
        this.openKey = true;
      }
    },

    //不再提示
    noAlert() {
      localStorage.setItem("noalert", true);
      this.copyText = false;
    },
    copy() {
      this.btnCopy = new Clipboard(document.getElementById("copy_keyword"));
      this.btnCopy.on("success", e => {
        console.log(e);
        if (!localStorage.getItem("noalert")) {
          this.copyText = true;
        } else {
          this.copyText = false;
        }
      });
    },
    getTime: function(endTime) {
      var startDate = new Date().getTime();
      var t = endTime * 1000 - startDate; //时间差的毫秒数
      this.count_down = t;
      var d = 0,
        h = 0,
        m = 0,
        s = 0;
      if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor((t / 1000 / 60 / 60) % 24);
        m = Math.floor((t / 1000 / 60) % 60);
        s = Math.floor((t / 1000) % 60);
      }
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }
      return h + ":" + m + ":" + s + "";
    },
    downTimeFn: function(time) {
      clearInterval(timer);
      var timer = setInterval(() => {
        if (this.count_down < 0) {
          clearInterval(timer);
        }
        this.downTimeNum = this.getTime(this.taskInfo.count_down);
        //this.downTimeNum = this.getTime(12323232689783);
      }, 1000);
    },
    //获取任务详情
    async getInfo() {
      return $http
        .get(
          `/Ad/getDetail?id=${this.params.id}&cookie=${localStorage.getItem(
            "cookie"
          )}&cookie_id=${localStorage.getItem("cookie_id")}`
        )
        .then(res => {
          if (res.data.status == "1") {
            this.taskInfo = res.data.data;
            this.copyValue = res.data.data.keyword;
            if (this.taskInfo.count_down) {
              this.downTimeFn();
            }
          } else {
            console.log("请求数据错误");
          }
        });
    },

    //激活接口 检查用户任务状态
    checkTaskStatus() {

      var url = `need_play_time=1&id=${this.taskInfo.id}&ad=${this.taskInfo.ad_id}&channel=103&plan=${this.taskInfo.plan_detail_id}&idfa=G229697E-7F09-4I02-A9E7-418G68742652&systemversion=ios10&devicemodel=iPhone7&udid=${localStorage.getItem("UDID")}&keyword=${this.taskInfo.keyword}&cookie=${localStorage.getItem("cookie")}&cookie_id=${localStorage.getItem("cookie_id")}&callback=`

      $http.get(`/Ad/activeAd?${url}`).then(res => {
        if (res.data.status == "1") {
          // 任务完成
          this.successLayer = true;
        } else if (res.data.status == "2") {
          // 任务未完成
          this.goOnLayer = true;

        } else {

          Toast({
            message: res.data.message,
            position: "center",
            duration: 2000
          });
        }
      });
    },
    //放弃任务
    giveUp() {
      $http
        .get(
          `/Ad/giveUpAd?id=${this.taskInfo.id}&ad=${this.taskInfo.ad_id}&channel=103&plan=${this.taskInfo.plan_detail_id}&idfa=G229697E-7F09-4I02-A9E7-418G68742652&systemversion=ios10&devicemodel=iPhone7&udid=${localStorage.getItem("UDID")}&keyword=${this.taskInfo.keyword}&cookie=${localStorage.getItem("cookie")}&cookie_id=${localStorage.getItem("cookie_id")}&callback=`
        )
        .then(res => {
          if (res.data.status == "1") {
            Toast({
              message: "放弃任务成功",
              position: "center",
              duration: 2000
            });
            this.$router.go(-1);
          } else {
            Toast({
              message: res.data.message,
              position: "center",
              duration: 2000
            });
          }
        });
    },
    giveUpClick() {
      this.layerShow = true;
    },
    goAppStore() {
      location.href =
        "https://itunes.apple.com/WebObjects/MZStore.woa/wa/search?mt=8#software";
    }
  }
};
</script>
<style lang="less" scpoed>
.task_details .copy_succ_box .hint_gray {
  display: flex;
  justify-content: center;
  align-items: center;
}
.head_top {
  background-image: url("https://res.youth.cn/ASO/img/xq_top_bg.png");
}
.head_topCenter {
  width: 90%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 12px 0px rgba(252, 73, 31, 0.2);
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.head_topCenterText {
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 16px;
  span {
    font-size: 20px;
  }
}
.downTime {
  width: 45%;
  height: 1.8rem;
  background: rgba(255, 153, 82, 1);
  border-radius: 28px;
  margin: 0 auto;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 254, 254, 1);
  line-height: 1.8rem;
  margin-top: 0.8rem;
}
.detail_new_v2Text {
  margin: 0 auto;
  margin-top: 2.5rem !important;
}
.detail_new_v2Text {
  width: 80%;
  height: auto;
  font-size: 15px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: #333;
  text-align: left;
  span {
    color: rgba(255, 87, 13, 1);
  }
}
.keyword_box {
  margin-top: 2rem !important;
}
.task_details .detail_new_v2 .keyword_btn .border {
  background: #fff;
  color: #ff9900;
  border: 1px solid #f90;
  height: 100%;
}

.keyword_btnActive {
  background: #ff9900;
  color: #fff;
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
  z-index: 99;
}
</style>


