<template>
  <div id="bindPhone">
    <div class="binding_mobile">
      <header class="header_wrap">
        <div class="pc_header">
          <a class="btn" href="javascript:history.back(-1)">
            <img
              width="100%"
              src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
            >
          </a>
          <span class="title">微信公众号</span>
          <a class="btn" href="javascript:location.reload();">
            <img width="100%" src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png">
          </a>
        </div>
      </header>
    </div>
    <!-- 微信公众号 -->
    <div class="wxQr">
        <div class="wxQrMain">
            <div class="wxQrImg"></div>
            <p>长按并储存二维码图片</p>
            <p>打开微信扫一扫识别该二维码</p>
            <p>（或者微信搜索“la6680”关注公众号）</p>
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
<style lang="less" scpoed>

#bindPhone{
    width: 100%;
    height: 100%;
    position: relative;
}
.wxQr{
    width: 100%;
    height: 100%;
    position:absolute ;
    left: 0;
    top: 0;
    .wxQrMain{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        .wxQrImg{
            width: 10rem;
            height: 10rem;
            background: red;
            margin-top: 4rem;
            border-radius: 0.5rem;
            margin-bottom: 0.8rem;
        }
        p{
            color: #999;
            font-size: 14px;
            height: 1.8rem;
            line-height: 1.8rem;
            width: 100%;
            text-align: center;
        }
    }

}
</style>


