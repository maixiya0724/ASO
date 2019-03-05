<template>
  <!-- 收入明细 -->
  <div class="record " >
      <div class="header">
        <a class="goBack" href="javascript:history.back(-1)">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" alt="">
        </a>
        <div class="headerTitle">收徒明细</div>
        <div class="resize">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png" alt="">
        </div>
      </div>
      <!-- tablist -->
      <div class="tabList">
          <div  :class="tabItemActive?'tabItem':'tabItemActive'" @click="tabItemActive=false"><span>收徒明细</span></div>
          <div  :class="!tabItemActive?'tabItem':'tabItemActive'" @click="tabItemActive=true"><span>收徒奖励</span></div>
      </div>

    <div v-if="!tabItemActive"
      class="main"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="list">
        <p class="tc_time">共有 <span>3</span> 名徒弟,再接再厉哦</p>
        <p class="tc_time">2019-02-14</p>

        <div class="itemList" v-for="(item,index) in inviteList" :key="index">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img :src="item.avatar" alt="">
            </div>
            <div class="itemText">
              <p class="nickName">{{item.nickname}} </p>
              <p class="textInfo">ID:{{item.uid}}</p>
            </div>
            <div class="itemTime">{{item.date}}</div>
          </div>
        </div>
      
       
      </div>
      <p class="timeInfo">仅显示最近三个月的记录</p>
    </div>

    <!-- 第二个tab -->
    <div v-if="tabItemActive"
      class="main"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="list">
        <p class="tc_time">2019-02-14</p>

        <div class="itemList" v-for="(item,index) in rewardList" :key="index">
          <div class="item rowFlex columnCenter" @click="goWardList">
            <div class="itemImg">
              <img :src="item.avatar" alt="">
            </div>
            <div class="itemText">
              <p class="money">{{item.nickname}}</p>
              <p class="textInfo">收徒描述</p>
            </div>
            <div class="itemTime">{{item.date}}</div>
          </div>
        </div>

      </div>
      <p class="timeInfo">仅显示最近三个月的记录</p>
      <div class="loadMore" v-if="loadMoreData">
        <div class="loadImage"></div>
        <span>加载中</span>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";
import $http from "../../tool/url.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      tabItemActive:false,
      loadMoreData:false,
      inviteList:[],
      page:"1",
      rewardList:[],
      rewardPage:"1"
    };
  },
  mounted(){
    this.inviteRecord()
    this.inviteForward()
  },
  methods: {
    // 加载更多
    loadMore() { 
      console.log(1)
      this.loading = true;
      this.loadMoreData = true;
      
    },
    // 现在没有uid
   async inviteRecord(){
      return $http.post("/WebApi/User/getInviteList",{page:1}).then((res)=>{
        if(res.data.status=="1"){
            this.inviteList = res.data.data.list
        }else{
          Toast({
            message: "请求列表失败",
            position: "center",
            duration: 2000
          });
        }
      })
    },
    async inviteForward(){
      return $http.post("/WebApi/User/getInviteReward",{page:1}).then((res)=>{
        if(res.data.status=="1"){
            this.rewardList= res.data.data.list
        }else{
          Toast({
            message: "请求列表失败",
            position: "center",
            duration: 2000
          });
        }
      })
    },
    // 去收入收徒明细页面
    goWardList(){
      this.$router.push({path:"/reward",query:{uid:"2"}})
    },
    

  }
};
</script>
<style lang="less">

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

.header{
  width: 100%;
  height: 0.9*3.125rem;
  background: #fff;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 0.3*3.125rem;
  .goBack{
    width: 0.45*3.125rem;
    height: 0.45*3.125rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .headerTitle{
    font-size: 16px;
    color: #000;
  }
  .resize{
    width: 0.42*3.125rem;
    height:0.42*3.125rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.record {
  width: 100%;
  height: 100%;
  background: #efefef;
}
.main {
  width: 100%;
  height: 86%;
  overflow: scroll;
}
.list {
  background: #fff;
}

.record .tc_time {
  color: #666;
  font-size: 0.26*3.125rem;
  width: 100%;
  height: 0.6*3.125rem;
  background: #efefef;
  line-height: 0.6*3.125rem;
  padding: 0 0.2*3.125rem;
  span{
      color: #fe6631;
  }
  
}
.timeInfo {
  width: 100%;
  height: 0.8*3.125rem;
  text-align: center;
  line-height: 0.8*3.125rem;
  font-size: 0.28*3.125rem;
  color: #333;
}
.itemList {
  width: 100%;
  height: auto;
  padding: 0 0.2*3.125rem;

  .item {
    width: 100%;
    height: 1.4*3.125rem;
    position: relative;
    padding: 0.1*3.125rem 0;
    border-bottom: 1px solid #eee;
    .itemImg {
      width: 1*3.125rem;
      height: 1*3.125rem;
      border-radius: 0.5*3.125rem;
      background: blue;
      margin-right: 0.2*3.125rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .itemText {
      height: 100%;
      width: 4.5*3.125rem;
      .money {
        width: 100%;
        height: 0.6*3.125rem;
        line-height: 0.8*3.125rem;
        font-size: 0.32*3.125rem;
        color: #fe6631;
      }
      .nickName{
         width: 100%;
        height: 0.6*3.125rem;
        line-height: 0.8*3.125rem;
        font-size: 0.32*3.125rem;
        color: #000;
        position: relative;
        span{
          background: red;
          padding: 0.2rem;
          position: absolute;
          left: 0;
          font-size: 12px;
          color: #fe6631;
          top: 0;
        }
      }
      .textInfo {
        width: 100%;
        height: 0.4*3.125rem;
        line-height: 0.6*3.125rem;
        color: #666;
        font-size: 0.26*3.125rem;
      }
    }
    .itemTime {
      width: 2*3.125rem;
      height: 1*3.125rem;
      text-align: center;
      line-height: 1.6*3.125rem;
      color: #666;
      float: right;
      font-size: 0.26*3.125rem;
      line-height: 2rem;
    }
  }
}

 .tabList{
      width: 100%;
      height:0.8*3.125rem;
      background:#fff;
      border-top: 1px solid #ddd;
      display: flex;
      .tabItem{
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #666;
          span{
              display: block;
              width: auto;
              height: 2.1875rem;
              line-height: 2.1875rem;
          }
      }
      .tabItemActive{
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color:#fe6631;
          span{
              display: block;
              width: auto;
              height:0.7*3.125rem;
              line-height:0.7*3.125rem;
              border-bottom: 2px solid #fe6631;
          }
      }
  }

  //  返回数组的问题，分页问题，不是绑定的师徒关系的问题

// new
</style>




