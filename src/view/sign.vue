<template>
    <div class="sign" style="background:#F7F7F7;">
        <header class="header_wrap">
            <div class="pc_header">
                <a class="goLast" href="javascript:history.back(-1)">
                    <img
                        width="100%"
                        src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
                    >
                </a>
                <span class="title">签到赚钱</span>
                <a class="btn" href="javascript:;"></a>
            </div>
        </header>
        <div class="signCenter"></div>
        <div class="signData">
            <div class="signTitle">已连续签到第 <span>{{signList.signDay}}</span> 天</div>

            <div class="signDataList">
                <div class="signItemed" v-for="(item,index) in signList.list" :key="index" v-if="item.sign=='1'">
                    <div class="itemIcon">
                        <img src="https://res.youth.cn/ASO/img/signDayed.png" alt="">
                    </div>
                    <div class="signTime">{{item.time}}</div>
                </div>
                <div class="signItem" v-for="(item,index) in signList.list" :key="index" v-if="item.sign!='1'" @click="signData">
                    <div class="itemIcon">
                        <img src="https://res.youth.cn/ASO/img/signDay.png" alt="">
                    </div>
                    <div class="signTime">{{item.time}}</div>
                </div>
                
            </div>
        </div>
        <div class="activeMoney">
            <div class="activeMoneyTitle">
                <div class="titleImg">
                    <p>活动奖励</p>
                </div>
            </div>
            <div class="signDayType">
                <div class="signDayTypeItem">
                    <div class="itemMoney">
                        <div class="itemMoneyNum"><span>0.2</span>元</div>
                        <p>现金奖励</p>
                        <div class="successSign" v-if="signDay>=3">
                            <img src="https://res.youth.cn/ASO/img/successSign.png" alt="">
                        </div>
                    </div>
                    <div class="itemInfo">连续签到3天</div>
                </div>
                <div class="next"></div>
                <div class="signDayTypeItem">
                    <div class="itemMoney">
                        <div class="itemMoneyNum"><span>0.3</span>元</div>
                        <p>现金奖励</p>
                        <div class="successSign" v-if="signDay>=5">
                            <img src="https://res.youth.cn/ASO/img/successSign.png" alt="">
                        </div>
                    </div>
                    <div class="itemInfo">连续签到5天</div>
                </div>
                <div class="next"></div>
                <div class="signDayTypeItem">
                    <div class="itemMoney">
                        <div class="itemMoneyNum"><span>0.5</span>元</div>
                        <p>现金奖励</p>
                        <div class="successSign" v-if="signDay>=7">
                            <img src="https://res.youth.cn/ASO/img/successSign.png" alt="">
                        </div>
                    </div>
                    <div class="itemInfo">连续签到7天</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        signDay:3,
        signDayNum:0,
        signList:{signDay:3,list:[{sign:1,time:"02-11"},{sign:1,time:"02-11"},{sign:1,time:"02-11"},{sign:0,time:"02-11"},{sign:0,time:"02-11"},{sign:0,time:"02-11"},{sign:0,time:"02-11"}]}
    };
  },
  created() {
      
  },
  mounted() {
    
  },
  methods: {
      //签到接口
      signData(){
        
      }
    
  }
};
</script>

<style lang="less">
.signCenter {
  width: 100%;
  height: 3.4*3.125rem;
  background: url("https://res.youth.cn/ASO/img/signBanner.png");
  background-size: 100% 100%;
  margin-top: 0.9*3.125rem;
}
.header_wrap{
    width: 100%;
    height: 0.9*3.125rem;
    background: #fff;
    .pc_header{
        width: 100%;
        height: 0.9*3.125rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            font-size: 0.36*3.125rem;
            color: #000;
            font-weight: 500;
        }
    }
    .goLast{
        width: 0.45*3.125rem;
        height: 0.45*3.125rem;
        position: relative;
        left: 0.3*3.125rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.signData {
  width: 6.9*3.125rem;
  height: 2.5*3.125rem;
  border-radius: 0.16*3.125rem;
  background: #fff;
  margin: 0 auto;
  margin-top: -1.2*3.125rem;
  padding: 0 0.3*3.125rem;
  box-shadow:0px 0px 16px 0px rgba(255,172,2,0.2);
}
.signTitle{
    width: auto;
    height: 0.9*3.125rem;
    line-height: 0.9*3.125rem;
    font-size: 0.3*3.125rem;
    color: #333;
    span{
        color: #FF6600;
    }
}

.signDataList{
    width: 6.3*3.125rem;
    height: 1.25*3.125rem;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    .signItemed{
        width: 0.8*3.125rem;
        height: 1.25*3.125rem;
        background: #FFBD00;
        font-size: 0.24*3.125rem;
        border-radius: 0.1*3.125rem;
        .itemIcon{
            width: 0.5*3.125rem;
            height: 0.5*3.125rem;
            margin: 0 auto;
            margin-top: 0.15*3.125rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .signTime{
            color: #fff;
            text-align: center;
            margin-top: 0.15*3.125rem;
        }
    }
    .signItem{
        width: 0.8*3.125rem;
        height: 1.25*3.125rem;
        background: #F2F2F2;
        font-size: 0.24*3.125rem;
        border-radius: 0.1*3.125rem;
        .itemIcon{
            width: 0.5*3.125rem;
            height: 0.5*3.125rem;
            margin: 0 auto;
            margin-top: 0.15*3.125rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .signTime{
            color: #999999;
            text-align: center;
            margin-top: 0.15*3.125rem;
        }
    }
}

.activeMoney{
    width: 6.9*3.125rem;
    height: 3.5*3.125rem;
    background: #fff;
    border-radius: 0.2*3.125rem;
    margin: 0 auto;
    margin-top: 0.3*3.125rem;
    .activeMoneyTitle{
        width: 100%;
        height: 1.2*3.125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        .titleImg{
            width: 2.8*3.125rem;
            height: 0.3*3.125rem;
            background: url(https://res.youth.cn/ASO/img/title.png);
            background-size: 100% 100%;
            p{
                font-size:0.34*3.125rem;
                font-family:SourceHanSansCN-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                text-align: center;
                line-height: 0.1*3.125rem;
            }
        }
    }
    .signDayType{
        width: 100%;
        height: auto;
        display: flex;
        justify-content:space-around;
        align-items: center;
        padding: 0 0.2*3.125rem;

        .signDayTypeItem{
            width: 1.5*3.125rem;
            height: 1.8*3.125rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            .itemMoney{
                width: 1.3*3.125rem;
                height: 1.3*3.125rem;
                background: #F2F2F2;
                border-radius: 0.1*3.125rem;
                .itemMoneyNum{
                    font-weight: 500;
                    font-size: 0.28*3.125rem;
                    color:rgba(198,198,200,1);
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    line-height: 0.6*3.125rem;
                    height: 0.6*3.125rem;
                    margin-top: 0.2*3.125rem;
                    span{
                        font-size:0.42*3.125rem;
                        font-family:PingFang-SC-Heavy;
                        font-weight:800;
                        line-height: 0.5*3.125rem;
                        height: 0.6*3.125rem;
                    }
                }
                p{
                    font-size:0.24*3.125rem;
                    font-family:SourceHanSansCN-Regular;
                    font-weight:400;
                    color:rgba(198,198,200,1);
                    text-align: center;
                }
                .successSign{
                    width: 1.1*3.125rem;
                    height: 0.85*3.125rem;
                    margin: 0 auto;
                    z-index: 10;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    position: absolute;
                    left: 0.2*3.125rem;
                    top: 0.2*3.125rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .itemInfo{
                width: 100%;
                text-align: center;
                font-size:0.24*3.125rem;
                font-family:SourceHanSansCN-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                margin-top: 0.2*3.125rem;
            }
        }
        .next{
            width: 0.4*3.125rem;
            height: 0.28*3.125rem;
            background: url("https://res.youth.cn/ASO/img/next.png");
            background-size: 100% 100%;
            position: relative;
            top: -0.25*3.125rem;
        }

    }
}
</style>

