<template>
  <!-- 主页 -->
  <div id="home">
    <div class="homeTop">
      <img src="https://res.youth.cn/ASO/img/top_bg.png" alt="">
    </div>
    <div class="userInfo">
      <div class="userInfoLeft">
        <p class="money">
          <span>{{userInfo.total_score}}</span>元
        </p>
        <div class="infoText">
          <span>账户余额</span>
          <div class="cash" @click="goCash">提现</div>
        </div>
      </div>
      <div class="userInfoRight">
        <div class="userImg">
          <img :src="userInfo.avatar" alt="">
        </div>
        <div class="centerText" @click="goCenter">个人中心</div>
      </div>
    </div>
    <div class="getInfo">
      <div class="getInfoItem">
        <div class="infoText">累计收益(元)</div>
        <div class="infoNum">{{userInfo.total_score}}</div>
      </div>
      <div class="getInfoItem">
        <div class="infoText">今日收入(元)</div>
        <div class="infoNum">{{userInfo.today_score}}</div>
      </div>
      <div class="getInfoItem">
        <div class="infoText">累计收徒(元)</div>
        <div class="infoNum">{{userInfo.invite_money}}</div>
      </div>
    </div>
    <div class="notice" >
      <img src="https://res.youth.cn/ASO/img/news_icon.png" alt="">
      <div><p ref="notice">{{noticeText}}</p></div>
    </div>
    
    <div class="line"></div>
    <div class="banner">广告位</div>
    <div class="taskList">
      <div class="taskListTitle">
        <span>任务赚钱</span> 海量任务 赚钱提醒
      </div>
      <div class="taskAll">
        <div class="domePlay" @click="goDomeplay">
          <img src="https://res.youth.cn/ASO/img/domeplay.png" alt="">
          <div class="imgTtitle">试玩赚钱</div>
          <div class="titleInfo">单价高 无审核</div>
        </div>
        <div class="teacher" @click="goTeacher">
          <img src="https://res.youth.cn/ASO/img/teacher.png" alt="">
          <div class="imgTtitle">收徒赚钱</div>
          <div class="titleInfo">徒弟赚钱 我分成</div>
        </div>
        <div class="sign" @click="goSign">
          <img src="https://res.youth.cn/ASO/img/sign.png" alt="">
          <div class="imgTtitle">每日签到</div>
          <div class="titleInfo">连续签到 赢大钱</div>
        </div>
        <div class="task">
          <img src="https://res.youth.cn/ASO/img/task.png" alt="">
          <div class="imgTtitle">高额任务</div>
          <div class="titleInfo">赚高额奖金</div>
        </div>
        <div class="friend">
          <img src="https://res.youth.cn/ASO/img/friend.png" alt="">
          <div class="imgTtitle">商务合作</div>
        </div>
        <div class="newUser">
          <img src="https://res.youth.cn/ASO/img/newUser.png" alt="">
          <div class="imgTtitle">新手引导</div>
        </div>
      </div>
    </div>

    <!-- 引导页 -->
    <div class="guide" v-if="guideLayer">
      <div class="guideOne" @click="guideOneFn" v-if="guideOne">
        <img src="https://res.youth.cn/ASO/img/guideOne.png" alt="">
      </div>
      <div class="guideTwo" @click="guideTwoFn" v-if="guideTwo">
        <img src="https://res.youth.cn/ASO/img/guideTwo.png" alt="">
      </div>
      <div class="guideThree" @click="guideThreeFn" v-if="guideThree">
        <img src="https://res.youth.cn/ASO/img/guideThree.png" alt="">
      </div>
    </div>
    <div class="layer" v-if="validate" @click="closeLayer">

            <div class="signDevive" >
                <div class="signDeviveText">请验证设备,避免影响您做任务哦</div>
                <div class="btns">
                    <div class="signDeviveBtn">取消</div>
                    <div class="signDeviveBtn" @click="signDevice">验证</div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import $http from "../tool/url.js";
import Axios from 'axios';
import { Indicator } from "mint-ui";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      guideLayer:false,
      guideOne:false,
      guideTwo:false,
      guideThree:false,
      noticeText:"恭喜您完成了专属任务",
      userInfo:{},
      params: this.$route.query,
      validate:false,
      validateTwo:false,//二次验证
    };
  },
  mounted() {
    this.notice()
    this.getUserInfo()
    // 检查设备是否验证
    this.setUDID() 
  },
  methods: {
    // 验证设备
    signDevice(){
      location.href="https://res.youth.cn/ASO/getUDID.mobileconfig";
    },
    
    cheackGuide(){
      if(localStorage.getItem("guide")){
        this.guideOne = false;
        this.guideLayer = false;
      }else{
        this.guideOne = true;
        this.guideLayer = true;
      }
    },
    
    guideOneFn(){// 点击事件
      this.guideOne=false;
      this.guideTwo=true;
    },
    guideTwoFn(){// 点击事件
      this.guideTwo=false;
      this.guideThree=true;
    },
    guideThreeFn(){// 点击事件
      this.guideThree=false;
      this.guideLayer = false;
      this.$router.push({path:"/",query:{}})
    },
    goDomeplay(){
      this.$router.push({path:"/mainlist",query:{token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    goCenter(){
      this.$router.push({path:"/center",query:{token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    goCash(){
      this.$router.push({path:"/cash",query:{total:this.userInfo.total_score,token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    goTeacher(){
      this.$router.push({path:"/teacher",query:{token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    goSign(){
      this.$router.push({path:"/sign",query:{token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
    notice(){
      var  notice =this.$refs.notice 
      var left =  0;
      clearInterval(timer)
      var  timer = setInterval(() => {
        left--
        notice.style.left = left +"px"
        if(left<-180){
          left = 280
        }
      },60);
    },
    async getUserInfo(){
      return $http.post("/WebApi/User/getUserInfo").then((res)=>{
        if(res.data.status=="1"){
          this.userInfo = res.data.data;
        }else{
          console.log("请求用户数据失败")
        }
      })
    },
    //验证设备
    setUDID(){
      let UDID =localStorage.getItem("UDID")
      // 验证设备完成
      if(UDID){
        this.validate = false;
      }else{
        this.validate = true;
      }


    },
    async bindUDID(UDID){
      return  $http.post("/WebApi/Udid/bindUdid",{UDID:UDID}).then((res)=>{
          console.log(res)
      })
    },
    closeLayer(){
      this.validate=false;
    },
    // 去验证设备
    goSetDev(){
      location.href=""
    },
    //进入详情页面
    jumpDetails(id){
      this.$router.push({path:"/teacherDe",query:{taskId:id,token:localStorage.getItem("token"),token_id:localStorage.getItem("token_id")}})
    },
  }

};
</script>
<style lang="less" >

//@px*3.125rem:3.125

.alert{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0,0, 0.7);
  display: none;
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
      flex-direction: column;
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

#home {
  width: 100%;
  height: 100%;
  position: relative;
  .homeTop {
    width: 100%;
    height: 2.1*3.125rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userInfo {
    width: 100%;
    height: 2.1*3.125rem;
    position: absolute;
    top: 0.3*3.125rem;
    left: 0;
    z-index: 10;
    .userInfoRight {
      width: 2.3*3.125rem;
      height: 2.1*3.125rem;
      background: url("https://res.youth.cn/ASO/img/top_bg2.png");
      background-size: 100% 100%;
      float: left;
      margin-left: 0.2*3.125rem;
      .userImg {
        width: 0.9*3.125rem;
        height: 0.9*3.125rem;
        border-radius: 0.45*3.125rem;
        overflow: hidden;
        border: 1ps solid #fff;
        background: blue;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .centerText {
        width: 1.7*3.125rem;
        height: 0.55*3.125rem;
        border: 1px solid #fff;
        color: #fff;
        font-size: 0.3*3.125rem;
        border-radius: 0.27*3.125rem;
        text-align: center;
        line-height: 0.55*3.125rem;
        margin: 0 auto;
        margin-top: 0.35*3.125rem;
      }
    }
    .userInfoLeft {
      width: 4.5*3.125rem;
      height: 100%;
      float: left;
      background: url("https://res.youth.cn/ASO/img/top_bg1.png");
      background-size: 100% 100%;
      margin-left: 0.25*3.125rem;
      padding: 0 0.2*3.125rem;
      overflow: hidden;
      .money {
        width: 100%;
        height: 1*3.125rem;
        line-height: 1*3.125rem;
        font-size: 0.3*3.125rem;
        font-weight: 600;
        color: #fff;
        margin-top: 0.3*3.125rem;
        span {
          font-size: 0.6*3.125rem;
          display: block;
          float: left;
        }
      }
      .infoText {
        font-size: 0.3*3.125rem;
        span {
          color: #fefefe;
        }
        .cash {
          float: right;
          width: 1.7*3.125rem;
          height: 0.54*3.125rem;
          background: rgba(255, 255, 255, 1);
          border-radius: 0.3*3.125rem;
          font-size: 0.3*3.125rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: rgba(255, 87, 13, 1);
          text-align: center;
          line-height: 0.54*3.125rem;
        }
      }
    }
  }
  .getInfo {
    width: 100%;
    height: 1.5*3.125rem;
    background: #fff;
    margin-top: 0.32*3.125rem;
    .getInfoItem {
      width: 2.5*3.125rem;
      height: 1.5*3.125rem;
      text-align: center;
      overflow: hidden;
      float: left;
      .infoText {
        font-size: 0.26*3.125rem;
        color: #999;
        margin-top: 0.4*3.125rem;
      }
      .infoNum {
        color: #333;
        font-size: 0.32*3.125rem;
      }
    }
  }
  .notice{
    width: 7*3.125rem;
    height: 0.7*3.125rem;
    line-height: 0.7*3.125rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    border-top: 1px solid #E5E5E5;
    img{
      width: 0.3*3.125rem;
      height: 0.3*3.125rem;
      margin-left: 0.25*3.125rem;
      margin-right: 0.15*3.125rem;
    }
    div{
      color: #FF6600;
      font-size: 0.28*3.125rem;
      display: flex;
      flex-wrap: 1;
      width: 18rem;
      height: 100%;
      overflow: hidden;

      p{
        width: 100%;
        height: 100%;
        position: relative;
        left: 0;
      }
    }
  }
  .line{
    width: 100%;
    height: 0.16*3.125rem;
    background: #F2F2F2;
  }
  .banner{
    width: 6.9*3.125rem;
    height: 1.2*3.125rem;
    margin: 0 auto;
    margin-top: 0.25*3.125rem;
    background: red;
    display: none;
  }
  .taskList{
    width: 100%;
    height: auto;
    padding: 0 0.25*3.125rem;
    margin-top: 0.4*3.125rem;
    .taskListTitle{
      font-size: 0.26*3.125rem;
      color: #999999;
      span{
        font-size: 0.38*3.125rem;
        color: #333;
        font-weight: 600;
      }
    }
    .taskAll{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .domePlay,.teacher{
        width: 3.5*3.125rem;
        height: 2.05*3.125rem;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .imgTtitle{
          font-size: 0.4*3.125rem;
          color: #fff;
          position: absolute;
          left: 0.3*3.125rem;
          top: 0.25*3.125rem;
          z-index: 10;
        }
        .titleInfo{
          color: #FFf;
          font-size: 0.24*3.125rem;
          position: absolute;
          left: 0.3*3.125rem;
          top: 0.8*3.125rem;
          z-index: 10;
        }
      }
      .sign,.task,.friend,.newUser{
        width: 3.5*3.125rem;
        height: 1.3*3.125rem;
        position: relative;
        .imgTtitle{
          font-size: 0.3*3.125rem;
          color: #fff;
          position: absolute;
          left: 0.3*3.125rem;
          top: 0.25*3.125rem;
          z-index: 10;
        }
        .titleInfo{
          color: #fff;
          font-size: 0.26*3.125rem;
          position: absolute;
          left: 0.3*3.125rem;
          top: 0.72*3.125rem;
          z-index: 10;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .guide{
    width: 100%;
    height: 100%; 
    background: rgba(0, 0,0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .guideOne{
      z-index: 101;
      width: 4.6*3.125rem;
      height: 1.6*3.125rem;
      position: absolute;
      left: 0.35*3.125rem;
      top: 0.7*3.125rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .guideTwo{
      z-index: 101;
      width: 4.5*3.125rem;
      height: 2.2*3.125rem;
      position: absolute;
      left: 0.8*3.125rem;
      top: 1.5*3.125rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .guideThree{
      z-index: 101;
      width: 6.36*3.125rem;
      height: 3*3.125rem;
      position: absolute;
      left: 0.3*3.125rem;
      top: 6.2*3.125rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}

.signDevive {
  width: 6*3.125rem;
  padding: 0.2*3.125rem;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.2*3.125rem;
  overflow: hidden;
  z-index: 100;
  .signDeviveText {
    font-size: 16px;
    color: #000;
    text-align: center;
    position: relative;
    top: 0.2*3.125rem;
  }
  .btns {
    width: auto;
    height: 0.3*3.125rem;
    margin: 0.4*3.125rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0.2*3.125rem;
    .signDeviveBtn{
        font-size: 16px;
        color: #fe6631;
        margin-left: 0.5*3.125rem;
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




