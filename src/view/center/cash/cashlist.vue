<template>
  <!-- 收入明细 -->
  <div class="record " >
      <div class="header">
        <a class="goBack" href="javascript:history.back(-1)">
          <img src="https://mirror.erbicun.cn/2018/images/task_details_btn_left_arrow.png" alt="">
        </a>
        <div class="headerTitle">提现明细</div>
        <div class="resize">
          <img src="https://mirror.erbicun.cn/2018/images/task_details_btn_refresh.png" alt="">
        </div>
      </div>

      <div class="noData" v-if="!dataList.length>0">暂无数据</div>
    <div
      class="main"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10" v-if="dataList.length>0"
    >
      <div class="list">
        <p class="tc_time">2019-02-14</p>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">提现</p>
              <p class="textInfo">支付宝提现10元,消耗10元</p>
            </div>
            <div class="itemTime">提现失败</div>
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
import $http from "../../../tool/url.js";
import { Toast } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";

export default {
  data() {
    return {
      loadMoreData:false,
      dataList:[],
    };
  },
  mounted(){
    this.getRequestList()

  },
  methods: {
    // 加载更多
    loadMore() { 
      this.loading = true;
      this.loadMoreData=true;
      console.log(1)
    },
    getRequestList(){
      $http.get("/WebApi/User/getInviteReward",{page:1}).then(res=>{
        console.log(res)
        if(res.data.status=="1"){
          this.dataList= res.data.data
        }else{
          
        }
      })
    },
  }
};
</script>
<style lang="less" scoped>
.noData{
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #000;
}
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
    background: url("https://res.youth.cn/ASO/img/loading.png");
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
  background: #fe6631;
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
    color: #fff;
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
  background: #eee;
}
.main {
  width: 100%;
  height: 92%;
  overflow:scroll;
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
      .textInfo {
        width: 100%;
        height: 0.4*3.125rem;
        line-height: 0.6*3.125rem;
        color: #666;
        font-size: 0.26*3.125rem;
      }
    }
    .itemTime {
      width: 1.5*3.125rem;
      height: 1*3.125rem;
      text-align: center;
      line-height: 1.6*3.125rem;
      color: green;
      float: right;
      position: absolute;
      top: 0.1*3.125rem;
      right: 0.1*3.125rem;
      font-size: 0.28*3.125rem;
    }
  }
}

// new
</style>





