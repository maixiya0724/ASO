<template>
  <div class="teacher">
    <div class="header">
      <a href="javascript:history.back(-1)">
        <div class="headerLeft"></div>
      </a>
      <div class="headerCenter">收徒明细</div>
      <div class="appList" @click="goTuList">徒弟列表</div>
    </div>
    <div class="teacherTitle"></div>
    <div class="teacherSubTitle">每收徒1人赚 20 元现金</div>
    <div class="teacherMain">
      <div class="mainTitle">
        <div class="mainTitleImg"></div>
        <p>收徒奖励规则</p>
      </div>
      <div class="mainList">
        <div class="mainListItem">
          <div class="itemImage">
            <img src="../../assets/img/share_icon.png" alt="">
          </div>
          <div class="itemText">师傅分享专属链接</div>
        </div>
        <div class="next"></div>
        <div class="mainListItem">
          <div class="itemImage">
            <img src="../../assets/img/sw_icon.png" alt="">
          </div>
          <div class="itemText">师傅分享专属链接</div>
        </div>
        <div class="next"></div>
        <div class="mainListItem">
          <div class="itemImage">
            <img src="../../assets/img/rw_icon.png" alt="">
          </div>
          <div class="itemText">师傅分享专属链接</div>
        </div>
      </div>
      <div class="shareInfo">
        <div class="shareInfoItem">
          <div class="text">收徒人数</div>
          <div class="num">
            <span>3</span>人
          </div>
        </div>
        <div class="line"></div>
        <div class="shareInfoItem">
          <div class="text">收徒奖励</div>
          <div class="num">
            <span>10</span>人
          </div>
        </div>
      </div>
      <div class="shareBtn" @click="showShare"></div>
      <p class="textInfoTwo">徒弟完成一个试玩任务，师傅获得0.5元分红</p>
      <p class="textInfoTwo">每名徒弟贡献提成上限20元，收入更快更稳定</p>
    </div>
    <div class="layer" v-show="shareType" @click="hideShare">
      <div class="sharemain" @click.stop>
        <div class="sharemainTitle">分享方式</div>
        <div class="shareList">
          <div class="shareItem">
            <div class="hot">
              <img src="../../assets/img/hot_icon.png" alt="">
            </div>
            <img class="icon" src="../../assets/img/wx_icon.png" alt="">
            <div class="shareItemText">微信好友</div>
          </div>
          <div class="shareItem">
            <img class="icon" src="../../assets/img/ql_icon.png" alt="">
            <div class="shareItemText">朋友圈</div>
          </div>
          <div class="shareItem" @click="copyLink">
            <img class="icon" src="../../assets/img/qq_icon.png" alt="">
            <div class="shareItemText">复制链接</div>
          </div>
          <div class="shareItem" style="width:3.75rem;" @click="qrShwo">
            <img class="icon" src="../../assets/img/sm_icon.png" alt="">
            <div class="shareItemText">面对面扫码</div>
          </div>
        </div>
      </div>
    </div>
    <!-- qr -->
    <div id="qr" v-if="qr" @click="closeLayer">
      <div class="qr" @click.stop>
        <div class="title">我的邀请二维码</div>
        <vue-qr :logoSrc="config.logo" :text="config.value" :size="160" :margin="10"></vue-qr>
        <div class="qrInfo">扫码加入钱多多，瓜分每天20w现金</div>
      </div>
    </div>
    <!-- 复制链接弹窗 -->
    <div id="qr" v-show="linkCopy" @click="closeLayer">
      <div class="copyLink" @click.stop>
        <div class="copyLinkMain">
          <div class="linkTitle">我的收徒链接</div>
          <div class="linkText">{{copyValue}}</div>
          <div class="linkTextInfo">将链接粘贴到任何地方,他人点击链接如钱多多，即可成为您的徒弟。</div>
        </div>
        <div class="copyBtn" @click="copy" id="copy_keyword" :data-clipboard-text="copyValue">复制链接</div>
      </div>
    </div>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import VueQr from "vue-qr";
import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      shareType: false,
      copyValue: "复制链接",
      qr: false,
      linkCopy: false,
      config: {
        value: "https://www.baidu.com",
        logo: ""
      },
      userInfo:{}
    };
  },
  components: {
    VueQr
  },
  mounted() {},
  methods: {

    // 显示分享弹窗
    showShare() {
      this.shareType = true;
    },
    // 隐藏分享弹窗
    hideShare() {
      this.shareType = false;
    },
    closeLayer() {
      this.qr = false;
      this.linkCopy = false;
    },
    qrShwo() {
      this.shareType = false;
      this.qr = true;
    },
    // 显示连接弹窗
    copyLink() {
      this.shareType = false;
      this.linkCopy = true;
    },
    // 复制文字
    copy() {
      const copy_keyword = document.getElementById("copy_keyword");
      const btnCopy = new Clipboard(copy_keyword);

      btnCopy.on("success", function(e) {
        console.log(e);
        Toast({
          message: "复制链接成功",
          position: "center",
          duration: 2000
        });
      });
    },
    //去徒弟列表
    goTuList(){
        this.$router.push({path:"/teacherDe",query:{uid:"2"}})
    },
    // 获取收徒详情
    async getInfo(){
        return $http.post("/WebApi/User/getUserInfo",{id:"3"}).then((res)=>{
            if(res.data.status=="1"){
                this.userInfo =  res.data.data
            }else{
                console.log("请求数据错误")
            }
        })
    }
    
  }
};
</script>
<style lang="less" scoped>
#qr {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  //生成二维码
  .qr {
    width: 15rem;
    height: 15rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 0.6rem;
    .title {
      font-size: 16px;
      color: #000;
      width: 100%;
      height: 2.5rem;
      text-align: center;
      line-height: 3rem;
    }
    .qrInfo {
      font-size: 12px;
      color: #666;
      margin-top: 0.5rem;
    }
  }

  .copyLink {
    width: 18rem;
    height: 18rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .copyLinkMain {
      width: 100%;
      height: 12rem;
      background: #fff;
      border-radius: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .linkTitle {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 14px;
      }
      .linkText {
        width: 16rem;
        height: 4.3rem;
        background: #eee;
        border: 1px dashed #999;
        border-radius: 0.4rem;
        color: #000;
        font-size: 14px;
        padding: 1rem;
      }
      .linkTextInfo {
        color: #ccc;
        font-size: 14px;
        margin: 1rem 1rem 0;
      }
    }
    .copyBtn {
      width: 100%;
      height: 2.5rem;
      background: #f8ae4d;
      text-align: center;
      line-height: 2.5rem;
      color: #fff;
      font-size: 14px;
      margin-top: 1rem;
      border-radius: 0.3rem;
    }
  }
}
.teacher {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bg.png");
  background-size: 100% 100%;
  .header {
    width: 100%;
    height: 0.9 * 3.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft {
      width: 0.8 * 3.125rem;
      height: 0.88 * 3.125rem;
      background: url("../../assets/img/back_icon.png");
      background-size: 100% 100%;
    }
    .headerCenter {
      font-size: 0.36 * 3.125rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-indent: 0.6 * 3.125rem;
    }
    .appList {
      width: 1.4 * 3.125rem;
      height: 0.5 * 3.125rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0.25 * 3.125rem 0 0 0.25 * 3.125rem;
      font-size: 0.26 * 3.125rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 0.5 * 3.125rem;
    }
  }
  .teacherTitle {
    width: 5.9 * 3.125rem;
    height: 0.9 * 3.125rem;
    margin: 0 auto;
    margin-top: 0.2 * 3.125rem;
    margin-bottom: 0.2 * 3.125rem;
    background: url("../../assets/img/banner_fonts.png");
    background-size: 100% 100%;
  }
  .teacherSubTitle {
    width: 5.1 * 3.125rem;
    height: 0.6 * 3.125rem;
    margin: 0 auto;
    background: url("../../assets/img/banner_fonts2.png");
    background-size: 100% 100%;
    margin-top: 0.3 * 3.125rem;
    font-size: 0.3 * 3.125rem;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.5 * 3.125rem;
    text-align: center;
  }
  .teacherMain {
    width: 6.8 * 3.125rem;
    height: 7.76 * 3.125rem;
    margin: 0 auto;
    background: url("../../assets/img/hb_bg.png");
    background-size: 100% 100%;
    .mainTitle {
      width: 3.4 * 3.125rem;
      height: 1.15 * 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      position: relative;
      .mainTitleImg {
        width: 100%;
        height: 0.04 * 3.125rem;
        background: url("../../assets/img/title_lines.png");
        background-size: 100% 100%;
      }
      p {
        font-size: 0.28 * 3.125rem;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(204, 162, 83, 1);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .mainList {
      width: 6 * 3.125rem;
      height: 1.65 * 3.125rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 0.2 * 3.125rem;
      .mainListItem {
        width: 1 * 3.125rem;
        height: 1.8 * 3.125rem;
        .itemImage {
          width: 1 * 3.125rem;
          height: 1 * 3.125rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .itemText {
          color: #bb9b5f;
          font-size: 0.24 * 3.125rem;
          font-family: SourceHanSansCN-Normal;
          font-weight: 400;
          color: rgba(187, 155, 95, 1);
          line-height: 0.3 * 3.125rem;
          margin-top: 0.1 * 3.125rem;
        }
      }
      .next {
        width: 0.4 * 3.125rem;
        height: 0.2 * 3.125rem;
        background: url("../../assets/img/next_jt_icon.png");
        background-size: 100% 100%;
        position: relative;
        top: -0.35 * 3.125rem;
      }
    }
    .shareInfo {
      width: 5.4 * 3.125rem;
      height: 1.3 * 3.125rem;
      background: rgba(254, 253, 253, 0.2);
      border: 0.01 * 3.125rem solid rgba(255, 255, 255, 1);
      border-radius: 0.1 * 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: 1 * 3.125rem;
      .line {
        width: 0.01 * 3.125rem;
        height: 0.87 * 3.125rem;
        background: url("../../assets/img/line.png");
        background-size: 100% 100%;
      }
      .shareInfoItem {
        display: flex;
        flex: 1;
        flex-direction: column;
        .text {
          text-align: center;
          font-size: 0.26 * 3.125rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .num {
          text-align: center;
          font-size: 0.26 * 3.125rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          span {
            font-size: 0.44 * 3.125rem;
          }
        }
      }
    }
    .shareBtn {
      width: 5.7 * 3.125rem;
      height: 1.45 * 3.125rem;
      background: url("../../assets/img/tc_button_bg.png");
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 0.1 * 3.125rem;
      margin-bottom: 0.1 * 3.125rem;
    }
    .textInfoTwo {
      font-size: 0.24 * 3.125rem;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: rgba(254, 227, 181, 1);
      text-align: center;
    }
  }
  .layer {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    .sharemain {
      width: 100%;
      height: 3 * 3.125rem;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      .sharemainTitle {
        width: 100%;
        height: 0.88 * 3.125rem;
        background: rgba(248, 248, 248, 1);
        text-align: center;
        line-height: 0.88 * 3.125rem;
        color: #666;
        font-size: 0.3 * 3.125rem;
      }
      .shareList {
        width: 100%;
        height: 2.07 * 3.125rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .shareItem {
        width: 1 * 3.125rem;
        height: 2.07 * 3.125rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .icon {
          width: 1 * 3.125rem;
          height: 1 * 3.125rem;
          margin: 0 auto;
        }
        .shareItemText {
          color: #666;
          font-size: 0.22 * 3.125rem;
          width: 1 * 3.125rem;
          text-align: center;
          width: 100%;
        }
        .hot {
          width: 0.38 * 3.125rem;
          height: 0.3 * 3.125rem;
          position: absolute;
          right: -0.15 * 3.125rem;
          top: 0.3 * 3.125rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>


