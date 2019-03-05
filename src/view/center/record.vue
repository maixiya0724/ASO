<template>
  <!-- 收入明细 -->
  <div class="record">
    <div class="header">
      <a class="goBack" href="javascript:history.back(-1)">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" alt="">
      </a>
      <div class="headerTitle">收入明细</div>
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
        <p class="tc_time">2019-02-14</p>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
          </div>
        </div>
        <div class="itemList">
          <div class="item rowFlex columnCenter">
            <div class="itemImg">
              <img src="https://mirror.erbicun.cn/2018/images/my_task_exclusive.png" alt="">
            </div>
            <div class="itemText">
              <p class="money">+1元</p>
              <p class="textInfo">完胜发放大法发顺丰范德萨发 发</p>
            </div>
            <div class="itemTime">13:59</div>
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

export default {
  data() {
    return {
      loadMoreData: false
    };
  },
  methods: {
    // 加载更多
    loadMore() {
      this.loading = true;
      this.loadMoreData = true;
      console.log(1);
    }
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

.header {
  width: 100%;
  height: 0.9 * 3.125rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3 * 3.125rem;
  .goBack {
    width: 0.45 * 3.125rem;
    height: 0.45 * 3.125rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headerTitle {
    font-size: 16px;
    color: #000;
  }
  .resize {
    width: 0.42 * 3.125rem;
    height: 0.42 * 3.125rem;
    img {
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
  overflow: hidden;
  overflow-y: scroll;
}
.list {
  background: #fff;
}

.record .tc_time {
  color: #666;
  font-size: 0.26 * 3.125rem;
  width: 100%;
  height: 0.6 * 3.125rem;
  background: #efefef;
  line-height: 0.6 * 3.125rem;
  padding: 0 0.2 * 3.125rem;
}
.timeInfo {
  width: 100%;
  height: 0.8 * 3.125rem;
  text-align: center;
  line-height: 0.8 * 3.125rem;
  font-size: 0.28 * 3.125rem;
  color: #333;
}
.itemList {
  width: 100%;
  height: auto;
  padding: 0 0.2 * 3.125rem;

  .item {
    width: 100%;
    height: 1.4 * 3.125rem;
    position: relative;
    padding: 0.1 * 3.125rem 0;
    border-bottom: 1px solid #eee;
    .itemImg {
      width: 1 * 3.125rem;
      height: 1 * 3.125rem;
      border-radius: 0.5 * 3.125rem;
      background: blue;
      margin-right: 0.2 * 3.125rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .itemText {
      height: 100%;
      width: 4.5 * 3.125rem;
      .money {
        width: 100%;
        height: 0.6 * 3.125rem;
        line-height: 0.8 * 3.125rem;
        font-size: 0.32 * 3.125rem;
        color: #fe6631;
      }
      .textInfo {
        width: 100%;
        height: 0.4 * 3.125rem;
        line-height: 0.6 * 3.125rem;
        color: #666;
        font-size: 0.26 * 3.125rem;
      }
    }
    .itemTime {
      width: 1 * 3.125rem;
      height: 1 * 3.125rem;
      text-align: center;
      line-height: 1.6 * 3.125rem;
      color: #666;
      float: right;
      position: absolute;
      top: 0.1 * 3.125rem;
      right: 0.1 * 3.125rem;
      font-size: 0.26 * 3.125rem;
    }
  }
}

// new
</style>


