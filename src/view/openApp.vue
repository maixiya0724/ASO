<template>
    <div class="openAppMain">
  <div class="openApp">
    <div class="openAppBtn" @click="downApp"></div>
    <div class="listItem">
      <div class="item">
        <img src="https://res.youth.cn/ASO/img/openOne.png" alt="">
        <p>领取福利</p>
      </div>
      <div class="item">
        <img src="https://res.youth.cn/ASO/img/openTwo.png" alt="">
        <p>试玩赚钱</p>
      </div>
      <div class="item">
        <img src="https://res.youth.cn/ASO/img/openThree.png" alt="">
        <p>快速提现</p>
      </div>
    </div>
    <div class="layer" v-if="trustKey" @click="closeLayer">
      <div class="openAppLayer" @click.stop>
        <div class="title">设置信任</div>
        <div class="typeList">
          <div class="typeItem">
            <div class="typeItemTitle">1.设置 - 通用</div>
            <div class="image">
              <img src="https://res.youth.cn/ASO/img/openImg1.png" alt="">
            </div>
          </div>
          <div class="typeItem">
            <div class="typeItemTitle">2.设置 - 设备管理</div>
            <div class="image">
              <img src="https://res.youth.cn/ASO/img/openImg2.png" alt="">
            </div>
          </div>
          <div class="typeItem" style="margin-top:1rem;">
            <div class="typeItemTitle">3.设备管理</div>
            <div class="image">
              <img src="https://res.youth.cn/ASO/img/openImg3.png" alt="">
            </div>
          </div>
          <div class="typeItem" style="margin-top:1rem;">
            <div class="typeItemTitle">4.信任</div>
            <div class="image">
              <img src="https://res.youth.cn/ASO/img/openImg4.png" alt="">
            </div>
          </div>
        </div>
        <!-- <div class="btnList">
                    <div class="btn " @click="trustKeyFn" v-if="!downFiveTime">信任钱多多</div>
                    <div class="btn btnActive" v-if="downFiveTime">信任钱多多{{fiveTime}}s</div>
                    <div class="btn" @click="callApp">打开钱多多</div>
        </div>-->

        <div class="newAddBtn" @click="goCourse">APP打不开解决方案</div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      trustKey: false,
      fiveTime: 5,
      downFiveTime: false,
      install: true,
    };
  },
  mounted(){
    this.Statistic();
  },
  methods: {
    Statistic() {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b8cebb650c7d4e2555d9e248e284f6a6";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    },
    downloadKey() {
      location.href =
        "itms-services://?action=download-manifest&url=https://aso.baertt.com/1.plist";
      // 下载钥匙应用
      this.downFiveTime = true;
      this.trustKey = true;
      clearInterval(timer);
      var timer = setInterval(() => {
        this.fiveTime--;
        if (this.fiveTime <= 0) {
          clearInterval(timer);
          this.downFiveTime = false;
        }
      }, 1000);
    },
    // 调取原生app
    callApp: function() {
      this.trustKey = false;
      let IosUrl = "CYRead://";
      location.href = IosUrl;
    },
    //信任钥匙
    trustKeyFn() {
      this.trustKey = false;
      location.href = "http://file.weixinkd.com/ASO/embedded.mobileprovision";
    },
    closeLayer() {
      this.trustKey = false;
    },
    downApp() {
      location.href =
        "itms-services://?action=download-manifest&url=https://aso.baertt.com/1.plist";
        setTimeout(()=>{
         this.trustKey = true;
        },1000)
    },
    goCourse() {
      this.trustKey = false;
      this.$router.push({ path: "/course", query: {} });
    }
  }
};
</script>

<style lang="less" scoped>
.openApp {
  overflow: hidden;
}
.layer {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.openAppLayer {
  width: 18rem;
  height: 22rem;
  background: #fff;
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    width: 100%;
    height: 4rem;
    font-size: 17px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    text-align: center;
    line-height: 4rem;
  }
  .typeList {
    width: 16.5rem;
    height: 12rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    .typeItem {
      width: 7.6rem;
      height: 6rem;
      .typeItemTitle {
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
      .image {
        width: 7.5rem;
        height: 3rem;
        margin-top: 1rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .btnList {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.3rem;
    .btn {
      width: 7rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      background: #ff570d;
      color: #fff;
      text-align: center;
      line-height: 2.5rem;
    }
    .btnActive {
      color: #ff570d;
      background: #fff;
      border: 1px solid #ff570d;
    }
  }
}
.openApp {
  width: 100%;
  height: 100%;
  background: url("https://res.youth.cn/ASO/img/openApp.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  .openAppBtn {
    width: 18rem;
    height: 4.1rem;
    background: url("https://res.youth.cn/ASO/img/openBtn.png");
    background-size: 100% auto;
    position: absolute;
    top: 26rem;
    left: 3rem;
    animation: scale 1s infinite forwards;
  }
  .listItem {
    width: 100%;
    height: 5rem;
    position: absolute;
    left: 0;
    top: 30.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      width: 4rem;
      height: 100%;
      img {
        width: 3rem;
        height: auto;
        margin: 0 auto;
      }
      p {
        font-size: 12px;
        color: #fff;
        text-align: center;
        margin-top: 0.4rem;
      }
    }
  }
}
.newAddBtn {
  width: 12rem;
  height: 2.5rem;
  background: #ff570d;
  border-radius: 1.25rem;
  text-align: center;
  line-height: 2.5rem;
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  font-size: 16px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
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
// 在浏览器里打开的引导
.external_open {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  background:rgba(0, 0, 0, 0.7);
  opacity:1;
}
.external_open img {
  position: fixed;
  top: 0;
  right: 1.5625rem;
  width: 13.1875rem;
  height: 9.5rem;
}
@keyframes scale{
  0%{
    transform: scale(1);
    
  }
  50%{
    transform: scale(1.09);
  }
  100%{
    transform: scale(1);
  }
}

.openAppMain{
  width: 100%;
  height: 100%;
  background:#F9713B; 
}
</style>


