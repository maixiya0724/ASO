<template>
    <div class="affairs">
        <div class="icon">
            <img src="https://res.youth.cn/ASO/img/icon4-75.png" alt="">
        </div>
        <p class="qq">商务合作QQ:
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


