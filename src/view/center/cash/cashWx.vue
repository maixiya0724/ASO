<template>
    <div class="cash">
        <div class="withdrawal">
            <header class="header_wrap">
                <div class="wc_header">
                    <a class="btn" href="javascript:history.back(-1)">
                        <img
                            width="100%"
                            src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png"
                        >
                    </a>
                    <span class="title">提现-微信</span>
                    <a class="btn" href="javascript:location.reload();">
                        <img
                            width="100%"
                            src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png"
                        >
                    </a>
                </div>
            </header>
            <div class="aw_main">
                <div class="user_info">
                    <span>姓名：</span>
                    <input
                        type="text"
                        id="wx_bank_name"
                        placeholder="绑定银行卡的真实姓名"
                        value=""
                        class="right_inp" v-model.trim="bindName"
                    >
                </div>
                <div class="aw_withdrawal_money">
                    <p class="aw_title">提现金额
                        <span>（账户余额
                            <i class="balance_size aw_red">{{params.total}}</i>元）
                        </span>
                    </p>
                    <div class="aw_money_select">
                        <div
                            :class="zIndex==item.ID?'money_select_list money_select_listActive':'money_select_list '"
                            v-for="(item,index) in cashList"
                            :key="index"
                            @click="selectIndex(index)"
                        >
                            <p class="aw_red">{{item.num}}元</p>
                            <p>{{item.info}}</p>
                        </div>
                    </div>
                </div>
                <div class="aw_withdrawal_instruction">
                    <p class="instruction">提现须知</p>
                    <div class="instruction_list">1、微信提现免手续费，
                        <span class="ai_red">每日开放时间为10:00-22:00</span>
                    </div>
                    <div class="instruction_list">2、
                        <span>24小时之内到账</span>
                    </div>
                    <div class="instruction_list">3、
                        <span>返还的金币或现金，将在提现成功之后打入您的账户</span>
                    </div>
                    <div class="instruction_list">4、
                        <span>每天只能提现一次</span>
                    </div>
                </div>
            </div>
            <footer class="footer_box">
                <button id="now_withdrawal" @click="launchCash">立即提现</button>
            </footer>
        </div>
        <!--身份证验证弹窗-->
        <div class="wc_bg" id="bind_id_card_pop" style="display:none;">
            <div class="wc_prompt">
                <div class="wc_wrap">
                    <p class="wc_title">很抱歉</p>
                    <div class="wc_content">本月累积提现金额达800元以上
                        <br>需要进行实名认证才能提现
                    </div>
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
                            <img
                                class="verification_img"
                                id="auth_code"
                                src="https://mirror.erbicun.cn/2018/images/btn_verification_code.png"
                            >
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
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      params: this.$route.query,
      cashList: [
        { ID: "0", num: "10", info: "不返金币" },
        { ID: "1", num: "20", info: "不返金币" },
        { ID: "2", num: "30", info: "返300金币" },
        { ID: "3", num: "50", info: "返500金币" },
        { ID: "4", num: "100", info: "返1000金币" },
      ],
      zIndex:"",
      bindName:""
    };
  },
  mounted() {},
  methods: {
      //选择提现金额
    selectIndex(index) {
      this.zIndex = index;
    },
    // 发起提现
    launchCash() {
      console.log(this.params.total);

     
      if (this.bindName == "") {
        Toast({
          message: "请输入提现姓名",
          position: "center",
          duration: "2000"
        });
        return false;
      }
      if (this.zIndex == "") {
        Toast({
          message: "请选择提现金额",
          position: "center",
          duration: "2000"
        });
        return false;
      }
      if (this.cashList[this.zIndex].num > this.params.total) {
        Toast({
          message: "请选择正确的提现金额",
          position: "center",
          duration: "2000"
        });
        return false;
      }
      // 发起提现请求
      let param = {
          num:this.cashList[this.zIndex].num,
          phone:this.bindPhone,
          name:this.bindName,
          uid:""
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wt_left_box {
  display: flex;
  align-items: center;
}

.money_select_listActive {
  border: 1px solid#fe6631;
  color: #fe6631;
}
</style>


