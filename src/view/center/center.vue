<template>
    <div class="center">
        <div class="personal_center">
            <header class="header_wrap">
                <div class="pc_header">
                    <a class="btn" href="javascript:history.back(-1)">
                        <img
                            width="100%"
                            src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png"
                        >
                    </a>
                    <span class="title">个人中心</span>
                    <a class="btn" href="javascript:;"></a>
                </div>
            </header>
            <div class="pc_main">
                <div class="pc_user_info">
                    <div class="user_info_box">
                        <div class="left_user">
                            <div class="top_user_info">
                                <img
                                    :src="userInfo.avatar"
                                    class="head_portrait"
                                >
                                <p>
                                    用户
                                    <span>{{userInfo.nickname}}</span>
                                </p>
                            </div>
                            <div class="bottom_user_info">
                                <li
                                    class="detail_list goto_link"
                                    @click="goRecord"
                                    data-link="/ios/my/apps.html"
                                >
                                    <img src="https://res.youth.cn/ASO/img/sr_icon.png">
                                    <p>收入明细</p>
                                </li>
                                <li
                                    class="detail_list goto_link"
                                    data-link="/ios/user/invites.html"
                                    @click="goTeacherDe"
                                >
                                    <img src="https://res.youth.cn/ASO/img/st_icon.png">
                                    <p>收徒明细</p>
                                </li>
                                <li
                                    class="detail_list goto_link"
                                    data-link="/ios/my/enchashments.html"
                                    @click="goCashDe"
                                >
                                    <img src="https://res.youth.cn/ASO/img/tx_icon.png">
                                    <p>提现明细</p>
                                </li>
                            </div>
                        </div>
                        <div class="right_user">
                            <div
                                class="pc_withdrawal_center goto_link"
                                data-link="/ios/user/income.html"
                            >
                                <p>
                                    <span>{{userInfo.score}}</span>元
                                </p>
                                <div class="btn_center" @click="goCash">提现中心</div>
                            </div>
                            <div class="pc_withdrawal_center goto_link" data-link="/ios/share.html">
                                <p>
                                    <span>{{userInfo.invit_num}}</span>人
                                </p>
                                <div class="btn_recruit" @click="goTeacherDe">收徒数量</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的金币
        <div class="pc_type_list">
        <a class="pc_list" href="javascript:;" data-link="/ios/my/goldcoin.html">
            <div class="pc_left_box">
                <img src="https://mirror.erbicun.cn/2018/images/me_my_gold_coin.png" class="left_icon">
            </div>
            <div class="pc_right_box">
                <span class="list_text">我的金币</span>
                <div class="right_icon">
                    <span class="right_text">50</span>
                    <img src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png">
                </div>
            </div>
        </a>
    </div> 
            -->
            <div class="pc_type_list">
                <div class="list">
                    <a
                        class="pc_list"
                        href="javascript:;"
                        data-link="/ios/my/problem.html"
                        @click="goProblem"
                    >
                        <div class="pc_left_box">
                            <img src="https://res.youth.cn/ASO/img/list1_icon.png" class="left_icon">
                        </div>
                        <div class="pc_right_box">
                            <span class="list_text">常见问题</span>
                            <div class="right_icon">
                                <img
                                    src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png"
                                >
                            </div>
                        </div>
                    </a>
                    <a
                        class="pc_list"
                        href="javascript:;"
                        @click="goBindWx"
                        data-link="/ios/my/subscribe.html"
                    >
                        <div class="pc_left_box">
                            <img src="https://res.youth.cn/ASO/img/list2_icon.png" class="left_icon">
                        </div>
                        <div class="pc_right_box">
                            <span class="list_text">商务客服</span>
                            <div class="right_icon">
                                <span class="right_text">联系客服</span>
                                <img class="jiantou"
                                    src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png"
                                >
                            </div>
                        </div>
                    </a>
                    <a
                        class="pc_list"
                        href="javascript:;"
                        @click="goBindPhone"
                        data-link="/ios/my/to_bind_mobile.html"
                    >
                        <div class="pc_left_box">
                            <img src="https://res.youth.cn/ASO/img/list3_icon.png" class="left_icon">
                        </div>
                        <div class="pc_right_box">
                            <span class="list_text">绑定手机号</span>
                            <div class="right_icon">
                                <span class="right_text" v-if="userInfo.mobile">{{userInfo.mobile}}</span>
                                <img class="jiantou"
                                    src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png"
                                >
                            </div>
                        </div>
                    </a>
                    <!-- <a class="pc_list" href="javascript:;" data-link="/ios/clip">
                    <div class="pc_left_box">
                        <img
                            src="https://mirror.erbicun.cn/2018/images/my_gold_coin_download.png"
                            class="left_icon"
                        >
                    </div>
                    <div class="pc_right_box">
                        <span class="list_text">安装秒赚入口</span>
                        <div class="right_icon">
                            <img src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png">
                        </div>
                    </div>
                </a>
                <a class="pc_list" href="javascript:;" data-link="/ios/profile.mobileconfig">
                    <div class="pc_left_box">
                        <img
                            src="https://mirror.erbicun.cn/2018/images/me_verification_equipment.png"
                            class="left_icon"
                        >
                    </div>
                    <div class="pc_right_box">
                        <span class="list_text">验证设备</span>
                        <div class="right_icon">
                            <img src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png">
                        </div>
                    </div>
                    </a>-->
                </div>
            </div>
            <!-- <div class="pc_type_list">
            <div class="list">
                <a class="pc_list" href="javascript:;" data-link="/ios/my/about.html">
                    <div class="pc_left_box">
                        <img
                            src="https://mirror.erbicun.cn/2018/images/me_about_me.png"
                            class="left_icon"
                        >
                    </div>
                    <div class="pc_right_box">
                        <span class="list_text">关于我们</span>
                        <div class="right_icon">
                            <img src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png">
                        </div>
                    </div>
                </a>
                <a class="pc_list" href="javascript:;" data-link="/ios/my/cooperate.html">
                    <div class="pc_left_box">
                        <img
                            src="https://mirror.erbicun.cn/2018/images/me_business_cooperation.png"
                            class="left_icon"
                        >
                    </div>
                    <div class="pc_right_box">
                        <span class="list_text">商务合作</span>
                        <div class="right_icon">
                            <img src="https://mirror.erbicun.cn/2018/images/icon_right_arrow.png">
                        </div>
                    </div>
                </a>
            </div> 
            </div>-->
        </div>
    </div>
</template>

<script>
import httpUrl from "../../tool/url.js";

export default {
  data() {
    return {
        userInfo:"",
    };
  },
  created() {},
  mounted() {
      this.getUserInfo()
  },
  methods: {
    goCash() {
      this.$router.push({ path: "/cash", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")}});
    },
    taskDetails() {
      this.$router.push({ path: "/cash", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goRecord() {
      this.$router.push({ path: "/record", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goTeacherDe() {
      this.$router.push({ path: "/teacherDe", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goCashDe() {
      this.$router.push({ path: "/cashlist", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goProblem() {
      this.$router.push({ path: "/problem", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goBindPhone() {
      this.$router.push({ path: "/bindphone", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    goBindWx() {
      this.$router.push({ path: "/affairs", query: {cookie:localStorage.getItem("cookie"),cookie_id:localStorage.getItem("cookie_id")} });
    },
    async getUserInfo() {
      return httpUrl
        .post("/WebApi/User/getUserInfo")
        .then(res => {
          if (res.data.status == "1") {
            this.userInfo = res.data.data;
          } else {
            console.log("请求用户数据失败");
          }
        });
    },

  }
};
</script>
<style lang="less" scoped>
.jiantou{
    position: relative;
    top: 0.25rem;
}
.center {
  width: 100%;
  height: 100%;
  background: #f4f5f7;
}

.pc_type_list {
  width: 100%;
  padding: 0.625rem 0.9375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.625rem !important;
  overflow: hidden;
}
.pc_type_list .list {
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(153, 153, 153, 0.08);
}
.personal_center .pc_right_box .right_icon img {
  float: right;
}
</style>


