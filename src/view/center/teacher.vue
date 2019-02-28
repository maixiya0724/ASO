<template>
    <div class="teacher">
        <div class="header">
            <div class="headerLeft"></div>
            <div class="headerCenter">收徒明细</div>
            <div class="appList">徒弟列表</div>
        </div>
        <div class="teacherTitle"></div>
        <div class="teacherSubTitle">每收徒1人赚 20 元现金</div>
        <div class="teacherMain">
            <div class="mainTitle">
                <div class="mainTitleImg"></div>
                <p>收徒奖励规则</p>
            </div>
            <div class="mainList">
                <div class="mainListItem">
                    <div class="itemImage">
                        <img src="../../assets/img/share_icon.png" alt="">
                    </div>
                    <div class="itemText">师傅分享专属链接</div>
                </div>
                <div class="next"></div>
                <div class="mainListItem">
                    <div class="itemImage">
                        <img src="../../assets/img/sw_icon.png" alt="">
                    </div>
                    <div class="itemText">师傅分享专属链接</div>
                </div>
                <div class="next"></div>
                <div class="mainListItem">
                    <div class="itemImage">
                        <img src="../../assets/img/rw_icon.png" alt="">
                    </div>
                    <div class="itemText">师傅分享专属链接</div>
                </div>
            </div>
            <div class="shareInfo">
                <div class="shareInfoItem">
                    <div class="text">收徒人数</div>
                    <div class="num"><span>3</span>人</div>
                </div>
                <div class="line"></div>
                <div class="shareInfoItem">
                    <div class="text">收徒奖励</div>
                    <div class="num"><span>10</span>人</div>
                </div>
               
            </div>
             <div class="shareBtn" @click="showShare"></div>
             <p class="textInfoTwo">徒弟完成一个试玩任务，师傅获得0.5元分红</p>
             <p class="textInfoTwo">每名徒弟贡献提成上限20元，收入更快更稳定</p>
        </div>
        <div class="layer" v-if="shareType" @click="hideShare">
            <div class="sha*3.125remain" @click.stop>
                <div class="sha*3.125remainTitle">分享方式</div>
                <div class="shareList">
                    <div class="shareItem">
                        <div class="hot">
                            <img src="../../assets/img/hot_icon.png" alt="">
                        </div>
                        
                        <img class="icon" src="../../assets/img/wx_icon.png" alt="">
                        <div class="shareItemText">微信好友</div>
                    </div>
                    <div class="shareItem">
                        <img class="icon" src="../../assets/img/ql_icon.png" alt="">
                        <div class="shareItemText">朋友圈</div>
                    </div>
                    <div class="shareItem">
                        <img class="icon" src="../../assets/img/qq_icon.png" alt="">
                        <div class="shareItemText">复制链接</div>
                    </div>
                    <div class="shareItem" style="width:1.2*3.125rem;">
                        <img class="icon" src="../../assets/img/sm_icon.png" alt="">
                        <div class="shareItemText" >面对面扫码</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shareType:false,
        }

    },
    mounted(){

    },
    methods:{
        showShare(){
            this.shareType=true
        },
        hideShare(){
            this.shareType=false
        }
    }
    
}
</script>
<style lang="less" scoped>
.teacher{
    width: 100%;
    height: 100%;
    background: url("../../assets/img/bg.png");
    background-size: 100% 100%;
    .header{
        width: 100%;
        height:0.9*3.125rem;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .headerLeft{
            width: 0.8*3.125rem;
            height: 0.88*3.125rem;
            background: url("../../assets/img/back_icon.png");
            background-size: 100% 100%;
        }
        .headerCenter{
            font-size:0.36*3.125rem;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-indent: 0.6*3.125rem;
        }
        .appList{
            width:1.4*3.125rem;
            height: 0.5*3.125rem; 
            background:rgba(0,0,0,0.2);
            border-radius:0.25*3.125rem 0 0 0.25*3.125rem;
            font-size:0.26*3.125rem;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height: 0.5*3.125rem;
        }
    }
    .teacherTitle{
        width: 5.9*3.125rem;
        height: 0.9*3.125rem;
        margin: 0 auto;
        margin-top: 0.2*3.125rem;
        margin-bottom: 0.2*3.125rem;
        background: url("../../assets/img/banner_fonts.png");
        background-size: 100% 100%;
    }
    .teacherSubTitle{
        width: 5.1*3.125rem;
        height: 0.6*3.125rem;
        margin: 0 auto;
        background: url("../../assets/img/banner_fonts2.png");
        background-size: 100% 100%;
        margin-top: 0.3*3.125rem;
        font-size:0.3*3.125rem;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height: 0.5*3.125rem;
        text-align: center;
    }
    .teacherMain{
        width: 6.8*3.125rem;
        height: 7.76*3.125rem;
        margin: 0 auto;
        background: url("../../assets/img/hb_bg.png");
        background-size: 100% 100%;
        .mainTitle{
            width:3.4*3.125rem;
            height: 1.15*3.125rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            position: relative;
            .mainTitleImg{
                width: 100%;
                height: 0.04*3.125rem;
                background: url("../../assets/img/title_lines.png");
                background-size: 100% 100%;
            }
            p{
                font-size:0.28*3.125rem;
                font-family:SourceHanSansCN-Regular;
                font-weight:400;
                color:rgba(204,162,83,1);
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .mainList{
            width: 6*3.125rem;
            height: 1.65*3.125rem;
            margin: 0 auto;
            display: flex;
            justify-content:space-around;
            align-items: center;
            padding: 0 0.2*3.125rem;
            .mainListItem{
                width: 1*3.125rem;
                height: 1.8*3.125rem;
                .itemImage{
                    width: 1*3.125rem;
                    height: 1*3.125rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    
                }
                .itemText{
                    color: #BB9B5F;
                    font-size:0.24*3.125rem;
                    font-family:SourceHanSansCN-Normal;
                    font-weight:400;
                    color:rgba(187,155,95,1);
                    line-height: 0.3*3.125rem;
                    margin-top: 0.1*3.125rem;
                }
            }
            .next{
                width: 0.4*3.125rem;
                height: 0.2*3.125rem;
                background: url("../../assets/img/next_jt_icon.png");
                background-size: 100% 100%;
                position: relative;
                top: -0.35*3.125rem;
            }
        }
        .shareInfo{
            width: 5.4*3.125rem;
            height: 1.3*3.125rem;
            background:rgba(254,253,253,0.2);
            border:0.01*3.125rem solid rgba(255, 255, 255, 1);
            border-radius: 0.1*3.125rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            margin-top: 1*3.125rem;
            .line{
                width: 0.01*3.125rem;
                height: 0.87*3.125rem;
                background:url("../../assets/img/line.png");
                background-size: 100% 100%;
            }
            .shareInfoItem{
                display: flex;
                flex: 1;
                flex-direction: column;
                .text{
                    text-align: center;
                    font-size:0.26*3.125rem;
                    font-family:SourceHanSansCN-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                }
                .num{
                    text-align: center;
                    font-size:0.26*3.125rem;
                    font-family:SourceHanSansCN-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    span{
                        font-size: 0.44*3.125rem;
                    }
                }
            }
        }
        .shareBtn{
            width: 5.7*3.125rem;
            height: 1.45*3.125rem;
            background: url("../../assets/img/tc_button_bg.png");
            background-size: 100% 100%;
            margin: 0 auto;
            margin-top: 0.1*3.125rem;
            margin-bottom: 0.1*3.125rem;
        }
        .textInfoTwo{
            font-size:0.24*3.125rem;
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            color:rgba(254,227,181,1);
            text-align: center;
        }
    }
    .layer{
        width: 100%;
        height: 100%;
        background: rgba(0,0, 0, 0.6);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        .sha*3.125remain{
            width: 100%;
            height: 3*3.125rem;
            background: #fff;
            position: absolute;
            left: 0;bottom:0;
            .sha*3.125remainTitle{
                width: 100%;
                height: 0.88*3.125rem;
                background:rgba(248,248,248,1);
                text-align: center;
                line-height: 0.88*3.125rem;
                color: #666;
                font-size: 0.3*3.125rem;
            }
            .shareList{
                width: 100%;
                height: 2.07*3.125rem;
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
            .shareItem{
                width: 1*3.125rem;
                height: 2.07*3.125rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                .icon{
                    width:1*3.125rem;
                    height: 1*3.125rem;
                    margin: 0 auto;
                }
                .shareItemText{
                    color: #666;
                    font-size: 0.22*3.125rem;
                    width: 1*3.125rem;
                    text-align: center;
                    width: 100%;
                }
                .hot{
                    width: 0.38*3.125rem;
                    height: 0.3*3.125rem;
                    position: absolute;
                    right: -0.15*3.125rem;
                    top: 0.3*3.125rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>


