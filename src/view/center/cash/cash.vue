<template>
    <div class="cash">
          <div class="withdrawal_center">
        <header class="header_wrap">
            <div class="wc_header">
                <a class="btn" href="javascript:history.back(-1)"  ><img width="100%" src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png" /></a>
                <span class="title">提现中心</span>
                <a class="btn" href="javascript:location.reload();"  ><img width="100%" src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png" /></a>
            </div>
        </header>
        <div class="wc_main">
            <p class="money_title">余额 （元）</p> 
            <div class="money_num">{{params.total}}</div>
            <div class="notice clearfix">
                <i class="marquee_text_ico fl"><img src="https://mirror.erbicun.cn/2018/images/cash_center_icon_notice.png"></i>
                <div class="padding_r1">
                    <p ref="notice" class="marquee">微信提现业务已调整完成，可继续提现</p>
                </div>
            </div>      
        </div>
        <div class="withdrawal_type" id="withdrawal_list">
            <a class="withdrawal_list wt_border_bottom withdrawal_item" @click="goZfb" data-type="2">
                <div class="wt_left_box">
                    <img src="https://mirror.erbicun.cn/2018/images/cash_center_icon_alipay.png">
                    <span class="wt_alipay">支付宝提现</span>
                    <i class="red_icon">大额</i>
                </div>
                <div class="wt_right_btn">
                    
                    <img src="https://mirror.erbicun.cn/2018/images/home_icon_right_arrow.png">
                </div>
            </a>
            <!-- <a class="withdrawal_list withdrawal_item" data-type="1" @click="goWx">
                <div class="wt_left_box">
                    <img src="https://mirror.erbicun.cn/2018/images/cash_center_icon_wechat.png">
                    <span class="wt_alipay">微信提现</span>
                    <i class="red_icon">大额</i>
                </div>
                <div class="wt_right_btn">
                    
                    <img src="https://mirror.erbicun.cn/2018/images/home_icon_right_arrow.png">
                </div>
            </a> -->
            <a class="withdrawal_list wt_margin_top" href="javascript:;" @click="cashDe" data-link="/ios/my/enchashments.html">
                <div class="wt_left_box">
                    <img src="https://mirror.erbicun.cn/2018/images/cash_center_present_record.png">
                    <span class="wt_alipay">提现明细</span>
                </div>
                <div class="wt_right_btn">
                    <img src="https://mirror.erbicun.cn/2018/images/home_icon_right_arrow.png">
                </div>
            </a>
        </div>

    </div>


    <!--重新绑定微信提示弹窗-->
    <div class="wc_bg" id="bind_wx_withdrawal" v-if="bindWx">
        <div class="wc_prompt">
            <div class="wc_wrap">
                <p class="wc_title">温馨提示</p>
                <div class="wc_content">
                     亲，由于微信提现策略调整<br>
                    您需要重新进行微信提现绑定
                </div>
                <button class="wc_btn" @click="ISee">朕知道了</button>
            </div>
        </div>
    </div>

    <!--用户协议提示弹窗-->
    <div class="wc_bg" id="user_agreement_pop" style="display:none;">
        <div class="wc_prompt">
            <div class="wc_wrap">
                <p class="wc_title">温馨提示</p>
                <div class="wc_content">
                    请仔细阅读 <a href="https://mirror.erbicun.cn//html/help/user_agreement.pdf" target="_blank" class="user_agreement">《用户协议》</a>，并点击确认同意协议内容
                </div>
                <button class="wc_btn">已阅读并同意</button>
                <div class="wc_close_btn">
                    <img src="https://mirror.erbicun.cn/2018/images/toast_btn_close.png">
                </div>
            </div>
        </div>
    </div>

    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
        params:this.$route.query,
        isInstall:"",
        websocket:{},
        openApp: false,
        bindWx:false,//绑定微信

    };
  },
  mounted() {
    this.notice();
  },

  methods: {
      closeLayer(){
          this.bindWx=false;
      },
     
    callApp: function() {
      let IosUrl = "CYRead://bing";
      location.href = IosUrl;
    },
    
    //验证信息
    proving(){
        if(this.params.total>10){
            Toast({
                message: "提现失败",
                position: "center",
                duration: 2000
            });
        }
    },
    ISee(){//去绑定微信
        this.callApp()
        this.closeLayer()
    },
    notice(){
      var  notice =this.$refs.notice
      var left =  0;
      clearInterval(timer)
      var  timer = setInterval(() => {
        left--
        notice.style.left = left +"px"
        if(left<-250){
          left = 380
        }
      },60);
    },
    goZfb(){
        this.$router.push({path:"/cashzfb",query:{total:this.params.total,token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    goWx(){
        this.bindWx= true;  
        return false      
        this.$router.push({path:"/cashwx",query:{total:this.params.total,token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    cashDe(){
        this.$router.push({path:"/cashlist",query:{token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },

  }
};
</script>
<style lang="less" scoped>
    .wt_left_box{
        display: flex;
        align-items: center;
    }
    .marquee{
        position: relative;
        left: 0;
    }
    
    .padding_r1{
        overflow: hidden;
    }
</style>


