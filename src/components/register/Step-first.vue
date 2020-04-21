<template>
  <div>
    <!-- 顶部 -->
    <Top></Top>
    <div class="content register-content">
      <!-- 注册步骤条 -->
      <div class="register-step-box">
        <div class="register-steps">
          <!-- 第一步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center is-check">1</div>
            </div>
            <div class="link-line"></div>
          </div>
          <!-- 第二步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center">2</div>
            </div>
            <div class="link-line"></div>
          </div>
          <!-- 第三步 -->
          <div class="register-step">
            <div class="register-step-outer">
              <div class="register-step-inner text-center">3</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 注册信息内容 -->
      <!-- 注册第一步 -->
      <div class="register-step-detail">
        <!-- 注册手机号 -->
        <el-form class="step-cont-input" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item class="register-input-box clearfix" prop="phone">
            <div class="belong-address fl font-18 text-color-9">
              <span>中国大陆&nbsp;&nbsp;-86</span>
              <span class="el-icon-caret-bottom pad-l-30 cursor-pointer"></span>
            </div>
            <div class="input-tel fl">
              <el-input type="text" v-model="ruleForm.phone" autocomplete="off" class="register-input font-16" placeholder="请输入您的手机号"></el-input>
            </div>
          </el-form-item>
          <!-- 发送验证码开始 -->
          <el-form-item class="code-box register-input-box clearfix" prop="code"
          :rules="[
            { required: true, message: '验证码不能为空'}
          ]"
          >
            <div class="code-input-box fl">
              <el-input type="text" class="code-input" v-model="ruleForm.code" placeholder="请输入收到的手机验证码"></el-input>
            </div>
            <div class="get-code text-center cursor-pointer fr" v-if="show" @click="getCode">获取验证码</div>
            <div class="get-code text-center cursor-pointer fr" v-else>{{this.time}}秒后重发</div>
          </el-form-item>
          <!-- 发送验证码结束 -->
        </el-form>
        <!-- 协议开始 -->
        <div class="agreement-box clearfix">
          <input type="checkbox" checked class="fl mar-r-10">
          <div class="agreement-text fl">
            <span class="text-color-9">我已阅读并同意</span>
            <a class="terms" @click="centerDialogVisible = true">《伍资用户注册服务协议》</a>
          </div>
          <el-dialog
            title="欢迎您注册伍资农副产品账号并使用伍资农副产品的服务！"
            :visible.sync="centerDialogVisible"
            width="45%"
            center>
            <div>
              本《伍资农副产品平台用户服务协议》（以下简称“本服务协议”）是您与伍资农副产品之间就注册伍资农副产品用户账号及使用伍资农副产品的各项服务等相关事宜所订立的协议。为使用伍资农副产品的服务，您应当仔细阅读并遵守本服务协议下的全部内容，特别是涉及免除或者责任限制的条款，该类条款可能以黑体加粗或加下划线的形式提示您重点注意。
              除非您已阅读并接受本服务协议所有条款，否则您将不能注册伍资农副产品账号或使用伍资农副产品的服务，如您不同意本服务条款的任意内容，请勿注册或使用伍资农副产品的服务，并应立即停止注册程序。如您对本服务协议的内容（特别是涉及免除或者责任限制的条款）有任何疑义，可随时按照本服务协议中列明的联系方式与我们联系，我们将根据您的要求为您进一步解释和说明相关内容。
              如您勾选“我同意《伍资农副产品平台用户服务协议》”并通过注册程序或其他任何方式使用或接受伍资农副产品的任何服务，即视为您已阅读并同意本服务协议，自愿接受本服务协议的所有内容的约束。请您在决定注册或使用服务前再次确认您已知悉并完全理解本服务协议的所有内容。
            </div>
            <div>
              如果您未满18周岁，请务必在家长和其他法定监护人的陪同下阅读本服务协议，并在进行注册、下单、支付等任何行为或使用伍资农副产品的其他任何服务前，应事先征得您的家长和其他法定监护人的同意。
            </div>
            <div>
              本服务协议所述“服务”既包括您使用伍资农副产品用户账号接受伍资农副产品平台相关商家、个人所提供的服务，亦包括在某些特定的业务类别下您使用伍资农副产品用户账号向其他商家、个人或其他主体提供服务的情形。无论“服务”属于上述何种情形，本《伍资农副产品平台用户服务协议》都将予以适用。
            </div>
            <ul>
              <li>一、 协议的主体与范围</li>
              <li>
                【签约主体】 视您所使用的具体服务而定，“伍资农副产品”是指伍资农副产品旗下运营或提供您所使用的相关具体服务的相关主体的统称，您可在相关服务的具体服务条款或说明文件中查看上述主体的名称和信息。
              </li>
              <li>
                “用户”是指使用伍资农副产品相关服务的使用人，在本服务协议中更多称呼为“您”。
              </li>
              <li>
                【协议内容】本服务协议内容同时包括：
              </li>
              <li>
                （1） 本《伍资农副产品平台用户服务协议》文本；
              </li>
              <li>
                2）《伍资农副产品平台隐私政策》（链接地址：https://rules-center.meituan.com/rules-detail/2）：伍资农副产品非常重视您的个人信息和隐私的保护，将按照《伍资农副产品平台隐私政策》中所公布的政策在具体服务中进行隐私及个人信息的收集、存储、使用、披露等活动。您在注册伍资农副产品账号前，应仔细阅读《伍资农副产品平台隐私政策》；
              </li>
              <li>
                （3） 具体服务的服务条款：您的伍资农副产品平台账号一经注册，即可凭该账号按规定享受伍资农副产品平台上的各项丰富的服务。为更好地向您提供各项服务，伍资农副产品平台针对具体的服务制定了专门的服务条款，供服务各方遵守。您可在【相关具体服务的网站、页面或应用程序】中查阅并下载此类专门服务条款。您在使用具体服务前，应仔细阅读该服务所适用的服务条款，您注册伍资农副产品账号并利用伍资农副产品账号使用具体服务即表示您已同时接受该等服务条款，并将受该等服务条款的约束；
              </li>
              <li>
                （4）专项商品或服务规则。为更好地提升用户体验，伍资农副产品在若干具体专项商品或服务中特别制定了详细的规则，供各方遵守。
              </li>
              <li>
                （5） 第三方服务相关的用户授权协议。为方便您在使用伍资农副产品平台服务的同时，根据您自身需要，通过伍资农副产品平台进行跳转等方式，自愿选择接受独立第三方服务商及部分关联第三方服务商所提供的服务，您将在使用该等第三方服务前对相应的用户授权协议予以同意确认，以作为您和伍资农副产品平台之间就该等第三方服务的使用所涉及的相关事项的权利义务依据。
              </li>
              <li>
                上述各项内容之间如存在不一致之处，以时间上最新发布的内容为准，发布时间相同的，以本款【协议内容】中所包含的组成部分的序号倒序排列为准。
              </li>
              <li>
                【协议遵守】您理解并同意：
              </li>
              <li>
                （1）上述【协议内容】中所述的协议、政策、条款与规则构成本服务协议不可分割的组成部分，共同适用于您所使用的伍资农副产品平台服务。
              </li>
              <li>
                （2）根据国家法律法规变化、运营需要或为提升服务质量的目的，伍资农副产品将在必要的时候对上述各项协议、条款与规则不时地进行修改更新，并通过在网页或移动客户端上发出公告、站内信等合理、醒目的方式向您进行提前通知，上述修改更新内容将在相关更新说明中指定的日期开始实施，通常情况下不短于发布之日后八个自然日。
              </li>
              <li>
                （3）您应当及时查阅并了解相关更新修改内容，如您不同意相关更新修改内容，可停止使用相关更新修改内容所涉及的服务，此情形下，变更事项对您不产生效力；如您在上述更新修改内容实施后继续使用所涉及的服务，将视为您已同意各项更新修改内容。
              </li>
              <li>
                【适用平台】本服务协议适用于网页端、移动客户端（包括IOS、安卓及已有或未来将新增的任何其他移动客户端）等各类平台或媒介中伍资农副产品所提供的各项服务。您知悉并理解，为享受上述相关服务，您必须自行提供相关上网设备（如：个人电脑、手机、平板电脑或其他设备）并自行负担相关网络使用和商品服务支付所产生的有关费用。
              </li>
            </ul>
            <ul>
              <li>二、账号的注册</li>
              <li>
                【注册资料】您应遵循诚实信用、合法善意的原则，向伍资农副产品提交相关注册资料，相关注册资料应当遵守法律法规、社会主义制度、国家利益、公民合法权益、公序良俗、信息真实等原则，不应提交任何违法或不良信息，相关资料如有变动，您应及时更新。如果因您所提供的注册资料不合法、不真实、不准确或未及时更新，从而导致相关法律责任或不利后果的，您将承担相应的法律责任及不利后果。
              </li>
              <li>
                您已知悉，在伍资农副产品账号注册过程中，因安全性、内部管理等原因，部分初始注册资料可能将无法再次更改。因此，您应谨慎核查此部分注册资料，确保正确填写。
              </li>
              <li>
                【民事行为能力】您知悉并承诺，您具有完全民事权利能力和行为能力或虽不具有完全民事权利能力和行为能力但已经过您的家长和其他法定监护人同意并由您的家长和其他法定监护人代理注册及使用伍资农副产品的各项服务。若您不具备前述相适应的民事行为能力即进行账号注册的，则您及您的家长和其他法定监护人应依照法律规定承担因此而导致的一切后果。
              </li>
              <li>
                【真实身份】因国家法律法规、监管要求及特定门类的服务（如金融服务等）需要，您有可能需要在注册或使用该等服务的特定环节中填写真实的身份信息，并需通过相关验证流程后方可使用服务，如您填写的身份信息不完整、不真实或未通过验证，将导致您无法使用该服务、损害自身、他人利益或造成其他不利后果，该等后果将由您予以承担。
              </li>
              <li>
                【注册信息保护】伍资农副产品将对您所提交的注册信息予以保护，不会将其披露给任何非关联的第三方，除非：
              </li>
              <li>
                （1）相关法律法规或国家机关要求；
              </li>
              <li>
                （2）伍资农副产品发生相关合并、分立、收购或资产转移；或
              </li>
              <li>
                （3）为提供相关服务所必须的。
              </li>
            </ul>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="centerDialogVisible = false">同意并继续</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 协议结束 -->
        <!-- 下一步按钮 -->
        <div class="register-next-btn text-center" @click="nextStep(ruleForm)"><a class="font-20">下一步</a></div>
      </div>
    </div>
    <!-- 底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../login/Login-top.vue'
import Bottom from '../login/Login-bottom.vue'
import {getCodeData} from '../../common/sendAxios.js'
export default {
  data () {
    let checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号码'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确格式的手机号'))
        }
      }
    }
    return {
      show: true,
      disabled: false,
      time: 0,
      sendAuthCode: true,
      color: false,
      // sendAuthCode控制显示获取验证码还是倒计时
      centerDialogVisible: false,
      ruleForm: {
        phone: '',
        code: '',
        key: ''
      },
      rules: {
        phone: [
          { validator: checkTel, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Top,
    Bottom
  },
  methods: {
    // 获取验证码接口
    getCode () {
      getCodeData({
        data: {
          phone: this.ruleForm.phone
        },
        success: (res) => {
          let _this = this
          if (res.code === 0) {
            _this.ruleForm.key = res.data.key
            _this.nextStep()
          }
        },
        error: (error) => {
          console.log(error)
        }
      })
      // 点击获取验证码按钮倒计时
      this.show = false
      let timer = 60
      this.time = timer
      let clock = setInterval(() => {
        this.time = timer
        timer--
        if (timer <= 0) {
          this.show = true
          this.time = 10
          clearInterval(clock)
        }
      }, 1000)
    },
    // 下一步
    nextStep (ruleForm) {
      this.$refs.ruleForm.validate((valide) => {
        if (valide) {
          this.$router.push({name: 'second', query: {code: this.ruleForm.code, key: this.ruleForm.key}})
        }
      })
    }
  }
}
</script>

<style lang="less">
@import '../../less/tregister.less';
</style>
