<template>
    <div class="affairs">
      <div class="header">
      <a class="goBack" href="javascript:history.back(-1)">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" alt="">
      </a>
      <div class="headerTitle">商务合作</div>
      <div class="resize">
        <img src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png" alt="">
      </div>
    </div>
        <div class="icon">
            <img src="https://res.youth.cn/ASO/img/icon4-75.png" alt="">
        </div>
        <p class="qq">客服咨询加入QQ群:
            <span>619496961</span>
        </p>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
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
.affairs {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    width: 6rem;
    height: 6rem;
    background: red;
    border-radius: 0.8rem;
    margin-top: 8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .qq {
    font-size: 1rem;
    color: #000;
    margin-top: 2rem;
    span {
      color: #3998ff;
      text-decoration: underline;
    }
  }
}
</style>


