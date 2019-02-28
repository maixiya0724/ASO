<template>
<div 
id="bindPhone">
    <div class="binding_mobile">
        <header class="header_wrap">
            <div class="pc_header">
                <a class="btn" href="javascript:history.back(-1)">
                    <img
                        width="100%"
                        src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
                    >
                </a>
                <span class="title">绑定手机号</span>
                <a class="btn" href="javascript:location.reload();">
                    <img
                        width="100%"
                        src="https://mirror.erbicun.cn/2018/images/task_list_btn_refresh.png"
                    >
                </a>
            </div>
        </header>
        <!--已绑定手机但可修改-->
        <div class="bm_content">
            <p class="current_mobile">当前手机号：
                <span>18519762816</span>
            </p>
            <div class="footer_btn">
                <button class="no_modification" id="confirm_bind">当前不可修改</button>
                <p class="anew_binding">温馨提示：2019年03月15日之后才可以重新绑定手机号</p>
            </div>
        </div>
        <!--未绑定手机-->
        <div class="bindPhone">
          <div class="inputList">
              <div class="inputItem">
                <input class="text" type="text" placeholder="请输入手机号">
                <div class="btn">获取语音验证码</div>
              </div>
              <div class="inputItem">
                <input class="text" type="text" placeholder="请输入验证码">
              </div>
          </div>
            <div class="footer_btn">
                <button class="no_modification" id="confirm_bind">当前不可修改</button>
                <p class="anew_bindingTwo">温馨提示:每个月只能绑定一次手机号</p>
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
  mounted() {
    
  },
  methods: {
    
  }
};
</script>
<style lang="less">
#bindPhone{
  width: 100%;
  height: 100%;
  background: #F4F5F7;

}
.bindPhone{
    width: 20.3125rem;
    height: auto;
    margin: 0 auto;
    .inputList{
        width: 100%;
        height: 5.6rem;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #d2cece;
        margin-top: 1.25rem;
        .inputItem{
          width: 100%;
          height: 2.8rem;
          .text{
            display: block;
            width: 12rem;
            height:2.7rem;
            line-height: 2.7rem;
            font-size: 12px;
            text-indent: 0.5rem;
            float: left;
          }
          .btn{
            float: right;
            width: 7.8rem;
            height: 2.7rem;
            color: #fe6631;
            font-size: 12px;
          }
          
        }
        .inputItem:first-child{
            border-bottom: 1px solid #d2cece;
        }
    }
    .anew_bindingTwo{
      color: #666;
      width: 100%;
      text-align: center;
    }

}

</style>


