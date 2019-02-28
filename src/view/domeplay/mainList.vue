
<template>
    <!-- 试玩赚列表 -->
    <div class="quest_window">
        <header class="fixed_header">
            <div class="header">
                <a href="javascript:history.back();" class="width1">
                    <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png">
                </a>
                <span>试玩赚钱</span>
                <a href="javascript:location.reload();" class="width1">
                    <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png">
                </a>
            </div>
        </header>
        <div class="content" id="task-list">
            <div
                class="current_tasks"
                id="current-task-box"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
            >
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="646f783d29686db981c01d00272960c44182c2c1400003808d493b3cf7b9cb84"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="cf7a635e84070353814041c30787b2094200010041400003cf893bfcf7bac8c7"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/8e/53/30/8e533075-dc80-8aec-7476-c5571dd84cd2/source/100x100bb.jpg"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="27" data-message="" @click="callApp">
                        <p class="app_title">
                            口袋记账
                            <i class="three_kinds_red border2">付费</i>
                        </p>
                        <p>剩余27份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">2.1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1" @click="downApp">
                    <input
                        class="task_id"
                        type="hidden"
                        value="cac2328cd9d47e9bc2411f00dce8d258c203000043c0c1424f893afc36f80947"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="1ae18ed5d3ac9575038340808e05be6c00408002804242c20f093bfc34f9c9c4"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/45/09/84/4509841d-5f9f-a705-eaf3-3f7b2b0f1ecb/source/100x100bb.jpg"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="1" data-message="">
                        <p class="app_title">三国</p>
                        <p>剩余1份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="0f7e9647219fb2d9c2c29ec1a1eaa4420042820282c301818f08397d767b49c4"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="3f1dff1f13695e220083c3819d82a1190042c383838043408ec8babff7ba8904"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple124/v4/99/b2/54/99b2546c-2c03-1fac-815d-b1385abbdc28/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="19" data-message="">
                        <p class="app_title">邮政信用卡</p>
                        <p>剩余19份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="376dfe715616579642429e43deeaef7242c04200c38140c0cf8af83db53bca07"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="eb8afbf1bd386fca838240c0b0408b9140828083c18280c04ec9b9fff77a8b85"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple114/v4/cf/12/97/cf129767-4df3-3d48-d272-ce9c881af7b7/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="574" data-message="">
                        <p class="app_title">动作手游</p>
                        <p>剩余574份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="bcb8fe96a8869deec342dfc321ea3c268000c2c381814341cc4b79bdb7b848c7"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="09d8ddc13ad600b08340c20294c11fe381c3034100c383c10d4a7a7ff5fb89c5"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple114/v4/e2/1b/4f/e21b4fa8-5a2c-2888-4f4d-b0d1555b215f/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="883" data-message="">
                        <p class="app_title">可可英语</p>
                        <p>剩余883份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="120df08bf82101fdc3c01f00dfaaac8601408001018183c14e09b9bd767bc8c6"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="74d2e0425293f95e838000c1338275ca83028341038040420c48bb3f75bac885"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple114/v4/d3/3c/9d/d33c9d7d-40d5-e5f9-ffaa-0b8e32c41f04/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="1014" data-message="">
                        <p class="app_title">白条</p>
                        <p>剩余1014份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="69f3477c07f270fdc3811e82612b7b7a014201c383c2c0438c0a797db43ac887"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="2fc35d091196637ac0c18141ed4214cd0200830040024380cf8b7b7ff4784844"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple114/v4/b3/3f/db/b33fdb4d-2dd8-8a53-7501-b49091a85be1/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="1388" data-message="">
                        <p class="app_title">租房app</p>
                        <p>剩余1388份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">1</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="3434cbf57e14b2d7c2805fc022abd7d8c341c1c2428300c18f09b9ff37f8c945"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="49a7190b3f4c5399c342c1c1b3c29cb2c04103818381c0c00d097abdb47b0a47"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple114/v4/dc/dd/e8/dcdde89c-ffd9-d8ea-a344-e29440574040/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="15" data-message="">
                        <p class="app_title">成人直播</p>
                        <p>剩余15份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">0.9</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="6ba1779a093441f083819d81a0ab34d381024040c1c180404dca7abf34b9ca87"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="5aa19328c787304ec14241414e82a699c3414282838281034f0838bf377b4a47"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/24/44/e92444f2-efa1-79b7-ae3d-4ee97da73d33/source/100x100bb.jpg"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="23" data-message="">
                        <p class="app_title">陪聊</p>
                        <p>剩余23份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">0.9</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="12a218b073bfe0a382439e0162ab5d940381038183c04080cc083bff37398904"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="268f9166e280a28382c10302cec3cc798102c083c3830202ccc879bdb7f90a84"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple124/v4/47/2f/c9/472fc9c3-dc0b-954c-8e11-a6ad26b0f2dd/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="1631" data-message="">
                        <p class="app_title">借款</p>
                        <p>剩余1631份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">0.9</span>元
                        </div>
                    </div>
                </div>
                <div class="list list1 list_padding1">
                    <input
                        class="task_id"
                        type="hidden"
                        value="7fe58b5b915852f781411c42246aff4981420003810103438f8a397ff57a4b44"
                        readonly
                    >
                    <input
                        class="app_id"
                        type="hidden"
                        value="c9b25cf39a2010330381418380c63faf00c3c3c0010041c28c4b78bff539c904"
                        readonly
                    >
                    <div class="left_img1 MZ-blur">
                        <img
                            src="http://a2.mzstatic.com/us/r30/Purple128/v4/ff/28/24/ff2824e8-84c3-e15a-cd10-626bf6b7209a/icon200x200.png"
                            class="left_img"
                        >
                    </div>
                    <div class="flex1 task-info" data-restnum="1" data-message="">
                        <p class="app_title">斗牛娱乐</p>
                        <p>剩余1份</p>
                    </div>
                    <div class="red">
                        <div class="font1 red2">
                            +
                            <span class="font2">0.88</span>元
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分类 -->
            <div class="sliptType">以下
                <span>50</span>个任务即将开始,总共
                <span>46.74</span>元,准时来抢
            </div>
            <div class="loadMore">
                <div class="loadImage"></div>
                <span>加载中</span>
            </div>
        </div>
        <!-- layer -->
        <div class="layer">
            <div class="signDevive">
                <div class="signDeviveText">验证设备后才能正常进行任务</div>
                <div class="btns">
                    <div class="signDeviveBtn">取消</div>
                    <div class="signDeviveBtn">验证</div>
                </div>
            </div>

            <div class="signDevive">
                <div class="signDeviveText">请验证设备,避免影响您做任务</div>
                <div class="btns">
                    <div class="signDeviveBtn">取消</div>
                    <div class="signDeviveBtn">验证</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";
import { setTimeout } from "timers";

Vue.use(InfiniteScroll);
export default {
  data() {
    return {
      issafariBrowser: false
    };
  },
  mounted() {
    this.issafari();
    this.hybridAp();
    console.log(this.$route.query.uip);
  },
  methods: {
    
    // 判断是否是safari浏览器
    issafari: function() {
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
        ? (this.issafariBrowser = true)
        : (this.issafariBrowser = false);
    },
    loadMore() {
      // 加载更多
      this.loading = true;
      return false;
    },
    downApp() {
      /*
        先判断本地是否有应用 有就调取应用，没有出现去下载弹窗
        下载完成后 显示信任弹窗 没有 信任 继续信任 打开钱多多打开app 
      */
    },
    // 调取原生app
    callApp: function() {
      console.log("调取");
      let IosUrl = "CYRead://";
      let url_ios_download = "";
      let loadTime = new Date();
      location.href = IosUrl;
      setTimeout(function() {
        let outTime = new Date();
        if (outTime - loadTime > 800) {
          location.href = url_ios_download;
        }
      }, 1000);
    },
    hybridAp() {
      let that = this;
      window.WebSocket = window.WebSocket || window.MozWebSocket;
      var websocket = new WebSocket(
        "ws://" + that.$route.query.uip + ":9000",
        "echo-protocol"
      );
      //var websocket = new WebSocket("ws://172.16.2.65:9000", "echo-protocol");

      websocket.onopen = function() {
        //连接客户端触发的函数
        console.log("打开成功");
      };
      // 错误处理
      websocket.onerror = function(err) {
        console.log(err);
      };
      //接受客户端参数
      websocket.onmessage = function(message) {};

      setTimeout(() => {
        // 延时打开
        websocket.send(
          JSON.stringify({
            messageType: "echo",
            text: "打开成功了"
          })
        ); // 发送参数到客户端
      }, 2000);
      /*
      CONNECTING：值为0，表示正在连接；
      OPEN：值为1，表示连接成功，可以通信了；
      CLOSING：值为2，表示连接正在关闭；
      CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
      */
      console.log(websocket.readyState);

      /*
      胡金强 411522199212266614  13041085650
      杨霞   411523199508132427  15939763590
      贾圆圆 130431199004132163  18801725662
      毛细亚 410225199107246138  18236536168

      */
    }
  }
};
</script>


<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
}
.quest_window {
  display: block;
  box-sizing: border-box;
  height: 100%;
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
    background: url("../../assets/img/loading.png");
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

.sliptType {
  width: 100%;
  height: 1.8rem;
  background: #fff;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  text-align: left;
  line-height: 2rem;
  font-size: 14px;
  margin-top: 0.4rem;
  span {
    color: #fe6631;
  }
}

.signDevive {
  width: 18rem;
  padding: 0.5rem;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.6rem;
  overflow: hidden;
  .signDeviveText {
    font-size: 16px;
    color: #000;
    text-align: center;
    position: relative;
    top: 0.8rem;
  }
  .btns {
      width: auto;
    height: 1rem;
    margin: 1.5rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0.6rem;
    .signDeviveBtn{
        font-size: 16px;
        color: #fe6631;
        margin-left: 1.5rem;
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
</style>

