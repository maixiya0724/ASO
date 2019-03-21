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
    <!-- 等待开发 -->
    <div class="main" v-if="dataList.length>0">
      <div class="list" >
        <div class="itemList">
          <div class="item rowFlex columnCenter" v-for="(item,index) in dataList" :key="index">
            <div class="itemImg">
              <img :src="item.thumb" alt="">
            </div>
            <div class="itemText">
              <p class="money">+{{item.price}}</p>
              <p class="textInfo">完成{{item.app_name}}任务</p>
            </div>
            <div class="itemTime">{{item.newcompleted_time}}</div>
          </div>
        </div>
      </div>
      <p class="timeInfo">仅显示最近三个月的记录</p>
    </div>
    <div class='noData' v-if="JSON.stringify(dataList)=='[]'">暂无数据</div>
  </div>
</template>

<script>
import $http from "../../tool/url.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      loadMoreData: false,
      dataList: [],
      timer: ""
    };
  },
  mounted() {
    this.getAdList();

    this.timer = this.setTime(1552636845);
    
  },
  methods: {
    getAdList() {
      $http
        .get(
          `/Ad/getUserTaskDetails?cookie=${localStorage.getItem(
            "cookie"
          )}&cookie_id=${localStorage.getItem("cookie_id")}`
        )
        .then(res => {
          if (res.data.status == "1") {
            this.dataList = res.data.data;

            this.dataList.map((item,index)=>{
              if(item.completed_time){
                  item.newcompleted_time = this.setTime(item.completed_time)
              }
            })

          } else {
            Toast({
              message: "请求数据错误",
              position: "center",
              duration: 2000
            });
          }
        });
    },
    setTime(timer) {
      return new Date(parseInt(timer) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '); 
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
      margin-right: 0.2 * 3.125rem;
      overflow: hidden;
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
      width:auto;
      height: 100%;
      text-align: center;
      line-height: 1.8 * 3.125rem;
      color: #666;
      float: right;
      position: absolute;
      top: 0.1 * 3.125rem;
      right: 0.1 * 3.125rem;
      font-size: 0.26 * 3.125rem;
    }
  }
}

// 开发中
.noInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.record {
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
.noInfoTitle {
  font-size: 20px;
  color: #000;
  font-weight: 600;
  margin-top: 2rem;
}
.noInfoInfo {
  font-size: 15px;
  color: #999;
  margin-top: 0.4rem;
}
.noData{
  text-align: center;
  margin-top: 0.5rem;
  color: #000;
}
// new
</style>


