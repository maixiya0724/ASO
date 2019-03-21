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
          <div class="iconImg">
            <img v-if="dataInfo.logo=='alipay'"  src="https://res.youth.cn/ASO/zhiFuBao.png" alt="">
              <img v-if="dataInfo.logo!='alipay'"  src="https://res.youth.cn/ASO/weixinIcon.png" alt="">

          </div>
          <div class="cashInfo">支付宝提现</div>
          <div class="cashNum">{{dataInfo.score}}元</div>
        </div>
        <div class="line"></div>
        <div class="infoList">
          <div class="infoItem">
            <div class="itemTitle">提现时间</div>
            <div class="itemText">{{dataInfo.time}}</div>
          </div>
          <div class="infoItem">
            <div class="itemTitle">提现信息</div>
            <div class="itemText" v-if="dataInfo.logo=='alipay'" >支付宝</div>
            <div class="itemText" v-if="dataInfo.logo!='alipay'" >微信</div>
          </div>
          <div class="infoItem">
              <div class="itemTitle">提现状态</div>
              <div class="itemText" style="color:#fe6631;" v-if="dataInfo.status=='0'">提现中</div>
              <div class="itemText" style="color:green;" v-if="dataInfo.status=='1'">提现成功</div>
              
              <div class="itemText" style="color:#fe6631;" v-if="dataInfo.status=='2'">提现失败,订单已退回</div>
              <div class="itemText" style="color:#fe6631;" v-if="dataInfo.status=='3'">提现失败,订单已退回</div>
          </div>
          <div class="infoItem" v-if="dataInfo.status=='2' || dataInfo.status=='3'">
            <div class="itemTitle">原因</div>
            <div  class="itemText">{{dataInfo.description}}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dataInfo:this.$route.query,
    };
  },
  mounted() {

  },
  methods: {

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
  border-radius: 1.5rem;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
  img{
    width:4.5rem;
    height:auto;
    position: absolute;
    left: -0.65rem;
    top: -0.2rem;

  }
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


