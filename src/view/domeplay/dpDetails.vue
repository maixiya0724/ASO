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
                <img
                    width="100%"
                    src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png"
                >
            </a>
        </header>
        <div class="wrapper"></div>
        <div class="wrap detail_new_v2">
            <div class="head_top">
                <div class="head_topCenter">
                    <p class="head_topCenterText">任务奖励=
                        <span>{{taskInfo.price}}</span>元限时 +
                        <span>0.2</span>元
                    </p>
                    <div class="downTime">剩余时间 {{downTimeNum}}</div>
                </div>
            </div>
            <div class="detail_new_v2Text">
                <span>专属任务:</span>完成限时任务后,后续再打开
                <span>1</span>天,每天获得
                <span>0.2</span>元
            </div>
            <div class="keyword_box">
                <img :src="taskInfo.thumb">
                <p class="txt_c">关键词：
                    <span>{{taskInfo.keyword}}</span>
                </p>
            </div>
            <div class="step">
                <p>1、点击
                    <i>复制关键词</i>，跳转AppStore粘贴搜索，约第
                    <i class="bigger">2</i>位，找到该图标应用下载安装。
                </p>
                <p>2、返回本页面，点击
                    <i>打开应用</i>，试玩该应用；打开应用时，请务必
                    <i>“允许使用数据”</i>。
                </p>
                <p>3、
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
            <div id="openApp" class="keyword_btn">
                <a style="">打开应用（必须在此打开）</a>
            </div>
            <div id="checkStatus" class="keyword_btn" style="overflow:scroll;margin: 0.93rem 0; ">
                <a class="border">检查完成状态</a>
            </div>
            <div id="abortTask" class="keyword_btn no_style">
                <a>放弃任务</a>
            </div>
        </div>
        <!--复制关键词弹窗-->
        <div id="copyDialog" class="bg" style="display: none">
            <div class="copy_succ_box">
                <p class="head">复制成功</p>
                <div class="app_box">
                    <div class="app_pic">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple124/v4/99/b2/54/99b2546c-2c03-1fac-815d-b1385abbdc28/icon200x200.png"
                        >
                    </div>
                    <div class="app_key">
                        <p>关键词: 浦发信用卡app</p>
                        <p>在第
                            <i class="bigger">2</i>名左右
                        </p>
                    </div>
                </div>
                <h4>1、在AppStore搜索框内粘贴关键词，找到该应用并下载</h4>
                <h4>2、打开应用请务必
                    <i>“允许使用数据”</i>，否则无法获得奖励！
                </h4>
                <div id="gotoAppStore" class="keyword_btn">前往AppStore</div>
                <p class="no_more_hint hint_gray not_tips">
                    <span class="on">
                        <img src="https://mirror.erbicun.cn/2018/images/tosat_icon_unchecked.png">
                    </span>不再提示
                </p>
            </div>
        </div>
        <!--完成弹窗-->
        <div id="finishDialog" class="bg" style="display: none">
            <div class="complete_pop">
                <div class="ba_wrap">
                    <p class="head txt_c">
                        <i>恭喜完成任务！</i>
                    </p>
                    <div class="inner">
                        <p class="txt_c">完成《浦发信用卡app》任务 </br> 获得奖励</p>
                        <p class="txt_c earn">
                            <i class="text_size">
                                <span>1</span>元
                            </i>
                        </p>
                    </div>
                    <div class="keyword_btn">OK，继续赚钱</div>
                </div>
            </div>
        </div>
        <!--未完成弹窗-->
        <div id="notCompletedDialog" class="bg" style="display: none">
            <div class="no_complete_pop">
                <em class="close">×</em>
                <p class="head txt_c">任务尚未完成请继续试玩！</p>
                <p class="tishi">温馨提示：需要“
                    <i>允许使用数据</i>”并试玩 3 分钟，才能获得奖励哦~
                </p>
                <div class="tishi_text">
                    <p>注意下列情况无法获得任务奖励：</p>
                    <p>1、非“首次”下载任务应用</p>
                    <p>2、未“允许使用数据”试玩应用</p>
                    <p>3、使用与他人共享的苹果账号</p>
                    <p>4、非“App Store"下载任务应用</p>
                </div>
                <div class="keyword_btn">OK，继续试玩</div>
            </div>
        </div>
        <!-- 打开应用弹窗 -->
        <div id="ios10Tan" class="bg" style="display: none">
            <div class="data_box">
                <div class="data_tishi">
                    <img
                        width="100%"
                        src="http://cdn.miaozhuandaqian.com/mz/static/images/data_tishi.png"
                    >
                </div>
                <div class="data_text">打开APP后请选择“
                    <i class="orange">允许</i>”使用数据 否则无法获得奖励
                </div>
                <div class="popup_btn">
                    <a>打开应用</a>
                </div>
            </div>
        </div>
        <div class="keyBox" id="launch_key" style="display: none">
            <div class="dialog_flex"></div>
            <div class="dialog_flex1">
                <div class="not_open_key">
                    <img src="https://mirror.erbicun.cn/2018/images/about_me_logo.png">
                    <p>钱多多未开启</p>
                    <p>未开启钱多多，无法保障收益到账</p>
                    <div class="key_button goto_link" data-link="bmyaoshi://">启动钥匙</div>
                    <p>如遇问题，
                        <span class="download_app">请重新下载钱多多</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="keyBox" style="display: none" id="download_key">
            <div class="dialog_flex"></div>
            <div class="dialog_flex1">
                <div class="helper_key">
                    <p>请下载任务助手钱多多
                        <span>8.6.1</span>
                    </p>
                    <p>任务期间需开启钱多多</p>
                    <img src="https://mirror.erbicun.cn/2018/images/about_me_logo.png">
                    <button class="download_app">立即下载</button>
                    <p>每个人的助手可能不同</p>
                    <img
                        src="https://mirror.erbicun.cn/2018/images/toast_btn_close.png"
                        class="close_btn"
                    >
                </div>
            </div>
        </div>
        <div class="keyBox" style="display: none" id="trust_key">
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
                            <p>信任“
                                <span>Beijing Chuangyi interact...</span>”
                            </p>
                            <p>点击“打开钱多多”</p>
                            <p>打开失败，请返回桌面手动打开</p>
                            <p>如安装失败，请卸载老钥匙后重试</p>
                        </div>
                    </div>
                    <button class="trust_app">信任钱多多
                        <span class="time">5s</span>
                    </button>
                    <button class="launch_app open_key_button">打开钱多多</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Clipboard from "clipboard";
import $http from "../../tool/url.js";

export default {
  data() {
    return {
      copyValue: "及哦啊及",
      downTimeNum:"",
      taskInfo:{},
      btnCopy:{}
    };
  },
  mounted() {
      this.getInfo()
      this.copy()
  },
  methods: {
    copy() {
      this.btnCopy = new Clipboard(document.getElementById("copy_keyword"))
      console.log(this.btnCopy)
      this.btnCopy.on("success", function(e) {
        console.log(e);
      });
    },
   getTime: function getEndTime(endTime) {
    var startDate = new Date(); //开始时间，当前时间
    var t = endTime*1000 - startDate.getTime(); //时间差的毫秒数
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
    return (
      h +
      ":" +
      m +
      ":" +
      s +
      ''
    );
  },
    downTimeFn: function(time) {
      clearInterval(timer);
      var timer = setInterval(() => {
        this.downTimeNum = this.getTime(this.taskInfo.end_time);
      }, 1000);
    },
    //获取任务详情
    async getInfo(){
        return $http.post("Ad/getDetail/id/3",{id:"3"}).then((res)=>{
            if(res.data.status=="1"){
                this.taskInfo =  res.data.data
                this.downTimeFn()
            }else{
                console.log("请求数据错误")
            }
        })
    }

  }
};
</script>
<style lang="less">
.head_top {
  background-image: url("../../assets/img/xq_top_bg.png");
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
  overflow: hidden;
}
.head_topCenterText {
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 16px;
  margin-top: 0.8rem;
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
</style>


