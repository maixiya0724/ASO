<template>
    <!-- 提现详情 -->
    <div class="cashDetails">
        <div class="task_details">
            <header class="header">
                <a id="back" class="size_btn" href="javascript:history.back(-1)">
                    <img
                        width="100%"
                        src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png"
                    >
                </a>
                <span class="txt_white">提现详情</span>
                <a class="size_btn" href="javascript:location.reload();">
                    <img
                        width="100%"
                        src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png"
                    >
                </a>
            </header>
        </div>

        <div class="cashMain">
          <div class="iconImg"></div>
          <div class="cashInfo">支付宝提现</div>
          <div class="cashNum">10元</div>
        </div>
        <div class="line"></div>
        <div class="infoList">
          <div class="infoItem">
            <div class="itemTitle">提现时间</div>
            <div class="itemText">2019-02-14</div>
          </div>
          <div class="infoItem">
            <div class="itemTitle">提现信息</div>
            <div class="itemText">支付宝</div>
          </div>
          <div class="infoItem">
            <div class="itemTitle">提现状态</div>
            <div class="itemText">提现失败</div>
          </div>
          <div class="infoItem">
            <div class="itemTitle">原因</div>
            <div class="itemText">支付宝必须实名认证,请修改后，重新提现!</div>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.rem();
  },
  methods: {
    rem: function() {
      (function(doc, win) {
        var docEl = doc.documentElement,
          resizeEvt =
            "orientationchange" in window ? "orientationchange" : "resize",
          recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 16 * (clientWidth / 375) + "px";
          };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
      })(document, window);
    }
  }
};
</script>
<style lang="less" scoped>
.cashDetails{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.task_details{
    margin-top: 0;
}
.cashMain{
  width: 100%;
  height: 12rem;
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.iconImg{
  width: 3rem;
  height: 3rem;
  background: blue;
  border-radius: 1.5rem;
  margin-top: 1rem;
}
.cashInfo{
  font-size: 14px;
  margin-top: 0.8rem;
}
.cashNum{
  font-size: 20px;
  margin-top: 0.5rem;
  color: #000;
  font-weight: 600;
}
.line{
  width: 20rem;
  height: 1px;
  border: 1px solid #efefef;
  margin: 0 auto;
}
.infoList{
  width: 20rem;
  height: auto;
  margin: 0 auto;
  .infoItem{ 
    width: 100%;
    height: 3rem;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    .itemTitle{
      color: #999;
      font-size: 14px;
      margin-right:1.5rem;
    }
    .itemText{
      font-size: 14px;
      color: #333;
    }
  }  
}
</style>


