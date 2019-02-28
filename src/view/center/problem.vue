<template>
    <div>
    <header class="header_wrap">
        <div class="common_header">
            <a class="btn" href="javascript:history.back(-1)" >
                <img width="100%" src="https://mirror.erbicun.cn/2018/images/task_list_btn_left_arrow.png" />
            </a>
            <span class="title">常见问题</span>
            <a class="btn" href="javascript:;"></a>
        </div>
    </header>
    <div class="common_wrapper"></div>

    <div class="main main_v2">
        <h2 class="question_title">任务问题</h2>
        <div class="question_list"  @click="question($event)" >
            <div class="question">做任务为什么得不到奖励？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>① 非首次下载：如果你曾经下载过该试玩应用，是无法获得试玩奖励的。</p>
                <p>② 下载错误应用：一定要按要求下载试玩应用，注意应用图标和要求下载的排名位置，下载错误无法得到试玩奖励。</p>
                <p>③ 未严格按照要求试玩应用：下载完试玩时，一定要保持在应用内试玩3分钟，不能将应用移至后台或关闭应用，否则无法得到奖励。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">为什么有的应用别人有我却没有？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>出现这种情况是因为您之前已经成功下载过该应用，或在其他平台上已经试玩过该应用了。</p>
            </div>
        </div>

        <div class="question_list" @click="question($event)">
            <div class="question">为什么在ipad上的AppStore搜索不到任务？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>部分应用只有iphone版本，ipad用户如需下载可在搜索关键字后，点击AppStore左上角“仅iphone”即可搜索到该应用。</p>
            </div>
        </div>

    </div>
    <div class="main main_v2">
        <h2 class="question_title">提现问题</h2>
        <div class="question_list" @click="question($event)">
            <div class="question">提现什么时候到账？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>① 微信提现时间：10：00-22:00。100元及以下金额提现，5分钟之内到账； 500~1000元周一至周五17：00之前提现，24小时之内到账；周五17:00-24:00以及周六日提现，下周一到账；节假日提现，顺延至工作日到账。
                </p>
                <p>② 支付宝是随时提现。周一至周五17:00之前提现，24小时之内到账；周五17:00-24:00以及周六日提现，下周一到账；节假日提现，顺延至工作日到账。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">每日可提现几次？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>每天只能提现一次，微信或支付宝选择其中一种方式进行提现。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">多少钱可以提现？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>满10元即可提现。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">提现收手续费吗？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>微信提现不收手续费；支付宝提现10元收取1元手续费，20元收取0.5元手续费，30元及以上不收取手续费。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">为什么提示微信提现额度达到上限？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>微信提现可以在每天的上午10点准时提现哦，因为提现有额度限制，由于平台用户量较多，所以每天提现的用户也很多，导致当天的微信提现总额达到上限，最好用支付宝提现哦，支付宝24小时都可以提现的~</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">更换或绑定不上提现账号怎么办？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>请联系客服更改，您可添加秒来大钱微信公众号（la6680），在公众号内直接发送秒赚ID账号、需要更改或绑定的账号和对应的姓名，以及修改的原因。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">关注公众号后还显示关注页面怎么办？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>在秒来大钱公众号的底部菜单中，点击“提现绑定”按钮，如果显示“微信绑定成功”，则可以返回秒赚进行提现了；如果绑定失败，请联系客服解决。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">提现如何实名认证？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>微信提现实名认证：首先需要在微信钱包绑定银行卡，然后在秒赚微信提现之前，需要填写微信钱包银行卡持有人的姓名。</p>
                <p>支付宝提现实名认证：支付宝提现前，需要填写实名认证的支付宝账号及对应姓名。</p>
                <p class="deep_red">（注意！您的支付宝账号若为邮箱账号，则必须填写邮箱账号，不能只填写绑定的手机号，否则无法到账。） </p>
            </div>
        </div>
    </div>
    <div class="main main_v2">
        <h2 class="question_title">其他问题</h2>
        <div class="question_list" @click="question($event)">
            <div class="question">手机号绑定不上怎么办？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>如果您绑定不上手机号，或收不到语音验证码等，请联系客服手动绑定。您可添加秒来大钱微信公众号（la6680），在公众号对话框内，直接发送您的秒赚ID账号和需要绑定的手机号以及原因。</p>
            </div>
        </div>
        <div class="question_list" @click="question($event)">
            <div class="question">钱多多异常怎么办？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>您可以在后台杀掉钥匙，重新打开一下（原因可能是后台运行，一直未操作，钥匙失效了）如果还是不行，可以卸载，然后在 AppStore 中搜索：秒来儿歌，下载后打开跟钥匙一样使用的，不影响账户，这个更稳定些。</p>
            </div>
        </div>

        <div class="question_list" @click="question($event)">
            <div class="question">页面提示操作频繁怎么办？<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>建议更换个网络试试，比如换成自己的流量，再次点击，看看能不能进去任务详情页面。（由于IP下的网络频繁后会记录IP，可能导致不能正常使用，更换个网络试试）</p>
            </div>
        </div>
    </div>
    <div class="main main_v2">
        <h2 class="question_title">作弊行为判定</h2>
        <div class="question_list" @click="question($event)">
            <div class="question">作弊行为判定：<em></em></div>
            <div class="answer dn" style="display:none;">
                <p>同一台设备或多台设备，以任何方式刻意地刷任务，或以不正常手段反复完成任务，均视为作弊。一旦发现作弊行为，将立即封禁相关账户及收益，且永不解封。</p>
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
    
    question:function(e){
        let nextDom = e.currentTarget.getElementsByClassName("answer")[0]
        if(nextDom.style.display=="none"){
            nextDom.style.display="block"
        }else{
            nextDom.style.display="none"
        }
       

        

        

        


    }
  }
};
</script>
<style>

</style>



