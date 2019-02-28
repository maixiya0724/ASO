<template>
  <!-- 收入明细 -->
  <div class="record " >
      <div class="header">
        <a class="goBack" href="javascript:history.back(-1)">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" alt="">
        </a>
        <div class="headerTitle">收徒奖励明细</div>
        <div class="resize">
          <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png" alt="">
        </div>
      </div>
    <div
      class="main"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="list">
          <div class="item rowFlex columnCenter">
            <div class="itemLeft">
                <div class="itemLeftText">试玩斗牛发发放大法法发</div>
                <div class="timer">2018-02-14 14:05:28</div>
            </div>
            <div class="itemRight">+0.03元</div>
          </div>
      </div>
      <p class="timeInfo">仅显示最近三个月的记录</p>
    </div>
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";

export default {
  data() {
    return {};
  },
  methods: {
    // 加载更多
    loadMore() { 
      this.loading = true;
      
      
    }
  }
};
</script>
<style lang="less">
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
  background: #eee;
  overflow:hidden;
}
.main {
  width: 100%;
  height: auto;
}
.list {
  background: #fff;
    .item{
      width: 100%;
      height: 1*3.125rem;
      background: #fff;
      border-top: 1px solid #eee;
      .itemLeft{
          width: 80%;
          height: 1*3.125rem;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #000;
          display: flex;
          justify-content: center;
          align-items:flex-start;
          padding-left: 0.2*3.125rem;
          .itemLeftText{
              margin-top: 0.1*3.125rem;
          }
          .timer{
              font-size: 12px;
              color: #ccc;
              text-align: center;
          }
      }
      .itemRight{
          width: 20%;
          height: 1*3.125rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #fe6631;
      }
  }
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


}

// new
</style>


