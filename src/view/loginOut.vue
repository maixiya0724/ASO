 <template>
 <!-- 未登录状态 -->
 <div class="...">
    
 </div>
    
 </template>

 <script>
export default {
    data(){
        return {}
    },
    mounted(){
    },
    methods:{
       
    }
}
</script>
<style lang="less" scoped>
.loginOut{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    .loginText{
        width: 100%;
        height: 3*3.125rem;
        margin-top: 1.5*3.125rem;
    }
    .loginoutText{
        font-size:0.36*3.125rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,102,0,1);
        text-decoration:underline;
        text-align: center;
    }
    .loginBtn{
        width:3.9*3.125rem;
        height:0.9*3.125rem;
        background:rgba(255,102,0,1);
        border-radius:0.45*3.125rem;
        margin: 0 auto;
        margin-top: 0.7*3.125rem;
        font-size:0.36*3.125rem;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-align: center;
        line-height: 0.9*3.125rem;
    }
    .loginInfo{
        font-size:0.28*3.125rem;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(192,189,189,1);
        text-align: center;
        margin-top: 0.37*3.125rem;
    }
    .loginOutTop{
        width: 100%;
        height: 5.5*3.125rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}

</style>



<template>
    
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created () {
        location.href="https://res.youth.cn/ASO/income.mobileconfig"
    }
}
</script>

<style>

</style>

