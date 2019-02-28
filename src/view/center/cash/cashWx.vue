<template>
    <div class="cash">
   <div class="withdrawal">
    <header class="header_wrap">
        <div class="wc_header">
            <a class="btn" href="javascript:history.back(-1)"  ><img width="100%" src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png" /></a>
            <span class="title">提现-微信</span>
            <a class="btn" href="javascript:location.reload();"  ><img width="100%" src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png" /></a>
        </div>
    </header>
    <div class="aw_main">
            <div class="user_info">
              <span>姓名：</span>
                <input type="text" id="wx_bank_name" placeholder="绑定银行卡的真实姓名" value="" class="right_inp"  >
            </div>
            <div class="aw_withdrawal_money">
                <p class="aw_title">
                    提现金额<span>（账户余额<i class="balance_size aw_red">8.58</i>元）</span>
                </p>
                <div class="aw_money_select">
                         <div class="money_select_list " data-amount="1000">
                             <p class="aw_red">10元</p>
                                 <p>不返金币</p>
                         </div>
                         <div class="money_select_list " data-amount="2000">
                             <p class="aw_red">20元</p>
                                 <p>不返金币</p>
                         </div>
                         <div class="money_select_list " data-amount="3000">
                             <p class="aw_red">30元</p>
                                 <p>返<span class="aw_red">300</span>金币</p>
                         </div>
                         <div class="money_select_list " data-amount="5000">
                             <p class="aw_red">50元</p>
                                 <p>返<span class="aw_red">500</span>金币</p>
                         </div>
                         <div class="money_select_list " data-amount="10000">
                             <p class="aw_red">100元</p>
                                 <p>返<span class="aw_red">1000</span>金币</p>
                         </div>
                </div>
            </div>
            <div class="aw_withdrawal_instruction">
                <p class="instruction">提现须知</p>
                <div class="instruction_list">1、微信提现免手续费，<span class="ai_red">每日开放时间为10:00-22:00</span></div>
                <div class="instruction_list">2、<span>24小时之内到账</span></div>
                <div class="instruction_list">3、<span>返还的金币或现金，将在提现成功之后打入您的账户</span></div>
                <div class="instruction_list">4、<span>每天只能提现一次</span></div>
            </div>
    </div>
    <footer class="footer_box">
        <button id="now_withdrawal">立即提现</button>
    </footer>
</div>

<!--身份证验证弹窗-->
<div class="wc_bg" id="bind_id_card_pop" style="display:none;">
    <div class="wc_prompt">
        <div class="wc_wrap">
            <p class="wc_title">很抱歉</p>
            <div class="wc_content">本月累积提现金额达800元以上</br>需要进行实名认证才能提现</div>
            <button class="wc_btn" id="to_bind_id_card">立即认证</button>
        </div>
    </div>
</div>

<!--提现验证弹窗-->
<div class="wc_bg" id="validate_code_pop" style="display:none;">
   <div class="wc_prompt">
       <div class="wc_wrap">
           <p class="wc_title">提现验证</p>
           <div class="wc_content_verification">
               <div class="left_inpt">
                   <input id="input_auth_code" type="text" placeholder="请输入验证码">
               </div>
               <div class="verification">
                   <img class="verification_img" id="auth_code" src="https://mirror.erbicun.cn/2018/images/btn_verification_code.png">
               </div>
           </div>
           <button class="wc_btn" id="auth_confirm">确认</button>
           <div class="wc_close_btn">
               <img src="https://mirror.erbicun.cn/2018/images/toast_btn_close.png">
           </div>
       </div>
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
    .wt_left_box{
        display: flex;
        align-items: center;
    }
    
</style>


