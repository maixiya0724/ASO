<template>
  <div id="bindPhone">
    <div class="binding_mobile">
      <header class="header_wrap">
        <div class="pc_header">
          <a class="btn" href="javascript:history.back(-1)">
            <img
              width="100%"
              src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
            >
          </a>
          <span class="title">绑定手机号</span>
          <a class="btn" href="javascript:location.reload();">
            <img width="100%" src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png">
          </a>
        </div>
      </header>
      <!--已绑定手机但可修改-->
      <div class="bm_content"  v-if="userInfo.is_mobile=='1'">
        <p class="current_mobile">
          当前手机号：
          <span>{{userInfo.mobile}}</span>
        </p>
        <div class="footer_btn">
          <button class="no_modification" id="confirm_bind">当前不可修改</button>
          <!-- <p class="anew_binding">温馨提示：2019年03月15日之后才可以重新绑定手机号</p> -->
        </div>
      </div>
      <!--未绑定手机-->
      <div class="bindPhone" v-if="userInfo.is_mobile!='1'">
        <div class="inputList" >
          <div class="inputItem" style="border-bottom:1px solid #d2cece;">
            <input class="text" type="text"  placeholder="请输入手机号" v-model.trim="phone">
            <div class="btn" v-if="show" @click="getCode">获取验证码</div>
            <div class="btn code" v-if="!show">剩余{{count}}秒</div>

          </div>
          <div class="inputItem" >
            <input class="text" type="text" v-model.trim="code" placeholder="请输入验证码">
          </div>
        </div>
        <div class="footer_btn">
          <button id="confirm_bind" @click="launchCash">绑定手机号</button>
          <!-- <p class="anew_bindingTwo">温馨提示:每个月只能绑定一次手机号</p> -->
        </div>
      </div>
    </div>
    <!-- 绑定手机号 -->
    <div class="alert" style="display:none;">
        <div class="alertMain">
          <div class="alertText">请注意接收验证码</div>
          <div class="alertBtn">确定</div>
        </div>
    </div>
  </div>
</template>

<script>
import $http from "../../tool/url.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      phone:"",
      code:"",
      show: true,
      count: '',
      timer: null,
      userInfo:{},
      month:"",
      day:""
    };
  },
  mounted() {
    this.getUserInfo()
    
  },
  methods: {
    checkPhone() {
      var TEL_REGEXP = /(?:^1[3456789]|^9[28])\d{9}$/;
      if (TEL_REGEXP.test(this.phone)) {
        return true;
      } else {
        return false;
      }
    },
    // 发起提现
    launchCash() {
      if (!this.checkPhone()) {
        Toast({
          message: "请输入正确的手机号",
          position: "center",
          duration: "2000"
        });
        return false;
      }
      if (this.code == "") {
        Toast({
          message: "请输入验证码",
          position: "center",
          duration: "2000"
        });
        return false;
      }

      this.bindPhoneFn()
      
    },
    getCode(){

    if (!this.checkPhone()) {
        Toast({
          message: "请输入正确的手机号",
          position: "center",
          duration: "2000"
        });
        return false;
      }
      
    this.requestCode()

     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
   },
   requestCode(){
     $http.post("/WebApi/Sms/send",{mobile:this.phone}).then(res=>{
       console.log(res)
       if(res.data.status=="1"){
         Toast({
              message: "发送成功",
              position: "center",
              duration: 2000
            });
       }else{
         Toast({
              message: res.data.msg,
              position: "center",
              duration: 2000
          });
       }
       
     })
   },
   bindPhoneFn(){
     $http.post("/WebApi/Sms/bind",{mobile:this.phone,code:this.code}).then(res=>{
       if(res.data.status=="1"){
          Toast({
              message: "绑定成功",
              position: "center",
              duration: 2000
            });
            
            this.getUserInfo()

       }else{
         Toast({
              message:res.data.msg,
              position: "center",
              duration: 2000
            });
       }
     })
   },
   //获取用户信息
   async getUserInfo(){
      return $http.post("/WebApi/User/getUserInfo").then((res)=>{
        if(res.data.status=="1"){
          this.userInfo = res.data.data;

        }else{
          console.log("请求用户数据失败")
        }
      })
    },
  }
};
</script>
<style lang="less">
.code{
  opacity: 0.5;
  text-align: center;
  font-size: 18px;
}
.alert{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0,0, 0.7);
  .alertMain{
    width: 18rem;
    height: 6.5rem;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 0.5rem;
    .alertText{
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #000;
      border-bottom: 1px solid #ccc;
    }
    .alertBtn{
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fe6631;
      font-size: 16px;
    }
  }

}
#bindPhone {
  width: 100%;
  height: 100%;
  background: #f4f5f7;
}
.bindPhone {
  width: 20.3125rem;
  height: auto;
  margin: 0 auto;
  .inputList {
    width: 100%;
    height: 5.6rem;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #d2cece;
    margin-top: 1.25rem;
    .inputItem {
      width: 100%;
      height: 2.7rem;
      .text {
        display: block;
        width: 12rem;
        height: 2.65rem;
        line-height: 2.7rem;
        font-size: 14px;
        text-indent: 0.5rem;
        float: left;
      }
      .btn {
        float: right;
        width: 8rem;
        height: 2.7rem;
        color: #fe6631;
        font-size: 14px;
        line-height: 1.5rem;
      }
    }
    .inputItem:first-child {
      border-bottom: 1px solid #d2cece;
    }
  }
  .anew_bindingTwo {
    color: #666;
    width: 100%;
    text-align: center;
  }
}
</style>


