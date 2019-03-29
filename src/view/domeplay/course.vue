<template>
    <div class="course">
        <div class="header">
            <a class="goBack" href="javascript:history.back(-1)">
                <img
                    src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
                    alt=""
                >
            </a>
            <div class="headerTitle">解决方案</div>
            <div class="resize">
                <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png" alt="">
            </div>
        </div>
        <div class="courseMain">
            <div class="courseMainTwo">
                <div class="courseTitle">解决打开APP方法</div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg5.png" alt="">
                </div>
                <div class="courseImg1">
                    <img src="https://res.youth.cn/ASO/img/openImg6.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">1</span>
                    <div class="infoListItemText">
                        首先找到苹果手机界面的 
                        <span class="active">设置</span>
                         图标，点击进入
                        <span class="active">设置</span>
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg8.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">2</span>
                    <div class="infoListItemText">
                        进入设置后，找到设置中
                        <span class="active">通用</span>
                        按钮，并点击 
                        <span class="active">通用</span>
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg9.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">3</span>
                    <div class="infoListItemText">
                        进入通用后，找到
                        <span class="active">描述文件与设备管理</span>
                        按钮，并点击进入
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg10.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">4</span>
                    <div class="infoListItemText">
                        点击描述文件与设备管理中的企业级应用
                        <span class="active">Rudraksh Woodtech</span>
                        ，进入详情
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg11.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">5</span>
                    <div class="infoListItemText">
                        在Rudraksh Woodtech文件中，点击
                        <span class="active">Rudraksh Woodtech</span>
                        
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg12.png" alt="">
                </div>
                <div class="infoListItem">
                    <span class="itemNum">6</span>
                    <div class="infoListItemText">
                        完成以上设置，回到界面点击
                        <span class="active">钱多多图标</span>
                        即可试用钱多多APP
                    </div>
                </div>
                <div class="course1">
                    <img src="https://res.youth.cn/ASO/img/openImg13.png" alt="">
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
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.course {
  width: 17.8rem;
  height: 19.2rem;
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

// 代码样式
.course {
  width: 100%;
  height: auto;
  background: linear-gradient(
    0deg,
    rgba(253, 115, 59, 1) 0%,
    rgba(253, 64, 73, 1) 100%
  );
  overflow: hidden;
  padding-bottom: 0.5rem;
  .courseMain {
    width: 22.5rem;
    height: auto;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 0.5rem;
    padding: 0.4rem;

    .courseTitle {
      width: 12.5rem;
      height: 2rem;
      background: url("https://res.youth.cn/ASO/img/openImg14.png");
      background-size: 100% auto;
      text-align: center;
      line-height: 2.3rem;
      color: #fff;
      margin: 0 auto;
      padding: 0.2rem;
      margin-top: 1rem;
    }
    .courseMainTwo {
      border: 1px solid #f0d39d;
      margin: 0 auto;
      margin-top: 0.2rem;
      border-radius: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .course1 {
        width: 19rem;
        height: auto;
        margin: 1.5rem auto;
        img {
          width: 100%;
          height: auto;
        }
      }
      .courseImg1 {
        width: 19.375rem;
        height: 4.5rem;
        margin-bottom: 1rem;
        img {
          width: 100%;
          height: auto;
        }
      }

      .infoListItem {
        width: 20.3rem;
        font-family: PingFangSC-Regular;
        color: #414141;
        margin-top: 0.47rem;
        margin-bottom: 0.5rem;
        .itemNum {
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.4rem;
          position: relative;
          float: left;
          z-index: 10;
          font-size: 20px;
          font-family: PingFang-SC-Medium;
          font-weight: 700;
          color: #3f4042;
          line-height: 1rem;
          text-align: center;
          background: url("https://res.youth.cn/active/one/img/newInv/new/num.png");
          background-size: 100% 100%;
          margin-top: 0.5rem;
          img {
            width: 100%;
            height: auto;
          }
        }
        .infoListItemText {
          width: 19rem;
          margin-left: 1.5rem;
          font-size: 18px;
          color: #333;
          .active {
            color: #e00e0e;
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>


