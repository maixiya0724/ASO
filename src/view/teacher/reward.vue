<template>
  <!-- 收入明细 -->
  <div class="record">
    <div class="header">
      <a class="goBack" href="javascript:history.back(-1)">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" alt="">
      </a>
      <div class="headerTitle">收徒奖励明细</div>
      <div class="resize">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png" alt="">
      </div>
    </div>
     <div class="noInfo">
        <div class="noDataImg">
          <img src="http://file.weixinkd.com/ASO/img/img.png" alt="">
        </div>
        <div class="noInfoTitle">敬请期待...</div>
        <div class="noInfoInfo">更多功能正在开发中</div>
      </div>



    <!-- 有数据 -->
    <!-- <div
      class="main"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div class="list">
        <div class="item rowFlex columnCenter" v-for="(item,index) in listData" :key="index">
          <div class="itemLeft">
            <div class="itemLeftText">{{item.text}}</div>
            <div class="timer">{{item.time}}</div>
          </div>
          <div class="itemRight">{{item.money}}元</div>
        </div>
      </div>
      <p class="timeInfo">仅显示最近三个月的记录</p>
      <div class="loadMore" v-if="loadMoreData">
        <div class="loadImage"></div>
        <span>加载中</span>
      </div>
    </div> -->
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";

import $http from "../../tool/url.js";

export default {
  data() {
    return {
      listData: [
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" },
        { text: "试玩斗牛", time: "2018-02-14 14:20:20", money: "0.3" }
      ],
      rewardList: [],
      loadMoreData: false,
      params: this.$route.query,
      page: "1"
    };
  },
  mounted() {
    this.fowardList();
  },
  methods: {
    // 加载更多
    loadMore() {
      this.loading = true;
      this.loadMoreData = true;
    },
    // 徒弟奖励明细

    async fowardList() {
      return $http
        .post("/WebApi/User/getInviteRewardInfo", {
          page: this.page,
          disciple: this.params.uid
        })
        .then(res => {
          if (res.data.status == "1") {
            this.rewardList.push(...res.data.data.list);
            if (res.data.data.nextpage == "1") {
              this.page++;
            }
          } else {
            Toast({
              message: "请求列表失败",
              position: "center",
              duration: 2000
            });
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
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
  height: 93%;
  overflow: hidden;
  overflow-y: scroll;
  background: #eee;
}
.list {
  background: #fff;
  .item {
    width: 100%;
    height: 1.1 * 3.125rem;
    background: #fff;
    border-top: 1px solid #eee;
    .itemLeft {
      width: 80%;
      height: 1 * 3.125rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-left: 0.2 * 3.125rem;
      .itemLeftText {
        margin-top: 0.1 * 3.125rem;
      }
      .timer {
        font-size: 12px;
        color: #ccc;
        text-align: center;
      }
    }
    .itemRight {
      width: 20%;
      height: 1 * 3.125rem;
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
}

// 没有数据

.noInfo{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}

.record{
  background: #fff;
}

.noDataImg {
  width: 18rem;
  height: 18rem;
  margin-top: 2rem;
  img {
    width: 100%;
    height: auto;
  }
}
.noInfoTitle{
  font-size: 20px;
  color: #000;
  font-weight: 600;
  margin-top: 2rem;
}
.noInfoInfo{
  font-size: 15px;
  color: #999;
  margin-top: 0.4rem;
}

// new
</style>


