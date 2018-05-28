<template>
    <div class="banner-vue">
        <div class="header-inner">
            <div class="contentBox">

                <h1>{{$t('m.banner.h1')}}</h1>
                <h2>{{$t('m.banner.h2')}}</h2>
                <h3>{{scale}}</h3>
                <!-- 时间 -->
                <div class='timeBox'>
                    <div class="grid-content">
                        <div class="block">
                            {{days}}
                        </div>
                        <span>{{$t('m.banner.days')}}</span>
                    </div>
                    <div class="grid-content">
                        <div class="block">
                            {{hours}}
                        </div>
                        <span>{{$t('m.banner.hours')}}</span>
                    </div>
                    <div class="grid-content">
                        <div class="block">{{min}}</div>
                        <span>{{$t('m.banner.minuter')}}</span>
                    </div>
                    <div class="grid-content">
                        <div class="block">{{secs}}</div>
                        <span>{{$t('m.banner.secs')}}</span>
                    </div>
                </div>

                <div class="buttonbox" >
                    <el-button type="text" @click="getToken(dialog)"><img :src='"static/image/"+$t("m.banner.button")+".png"' alt=""></el-button>
                </div>
                <div class="notics">
                    <p class="title">{{$t("m.banner.noticeTitle")}}</p>
                    <ul>
                        <li>{{$t("m.banner.rules1")}}</li>
                        <li>{{$t("m.banner.rules2")}}</li>
                        <li>{{$t("m.banner.rules3")}}</li>
                        <li>{{$t("m.banner.rules4")}}</li>
                    </ul>
                </div>
            </div>
            <!-- banner -->
            <img src="static/image/banner.png" alt="">
        </div>

        <!-- 注册弹框 -->
        <el-dialog class='registerDialog'
        :title='$t("m.banner.registerModal.title")'
        :visible.sync="dialogForm"
        width="550px"
        :before-close="handleClose">
            <el-form :model="registerForm" ref="registerForm" label-width="0" class="demo-dynamic">
                <el-form-item
                    prop="email"
                    :rules="[
                    { required: true, message: this.$t('m.banner.registerModal.Emailerror'), trigger: 'blur' },
                    { type: 'email', message: this.$t('m.banner.registerModal.Emailerror'), trigger: ['blur', 'change'] }
                    ]"
                >
                    <el-input v-model="registerForm.email" :placeholder='this.$t("m.banner.registerModal.placeholderEmail")'></el-input>
                </el-form-item>

                <el-form-item prop="eth">
                    <el-input v-model="registerForm.eth" :placeholder='this.$t("m.banner.registerModal.placeholderEth")'></el-input>
                </el-form-item>
                    <div class="return__error" v-if="returnReg_msg">
                        {{returnReg_msg}}
                    </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogForm = false">{{this.$t("m.banner.cancel")}}</el-button>
                <el-button type="primary" @click="register">{{this.$t("m.banner.confirm")}}</el-button>
            </span>
        </el-dialog>


        <!-- eth -->
        <el-dialog class='ethDialog oneButton'
        :title='$t("m.banner.confirmEth.title")'
        :visible.sync="dialogEth"
        width="550px"
        :before-close="handleCloseEth">
            <div class='text-center' style="margin-bottom: 18px;">{{eth}}</div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary"  v-clipboard="eth" @success="copy" >{{this.$t("m.banner.confirmEth.confirm")}}</el-button>
            </span>
        </el-dialog>


        <!-- email -->
        <el-dialog class='oneEmail'
        :title='$t("m.banner.confirmEmail.title")'
        :visible.sync="dialogEmail"
        width="550px"
        :before-close="handleCloseEmail">
            <el-form :model="emailForm" ref="emailForm" label-width="0" >
                <el-form-item
                    prop="email"
                    :rules="[
                    { required: true, message: this.$t('m.banner.confirmEmail.error'), trigger: 'blur' },
                    { type: 'email', message: this.$t('m.banner.confirmEmail.error'), trigger: ['blur', 'change'] }
                    ]"
                >
                    <el-input v-model="emailForm.email" :placeholder='this.$t("m.banner.confirmEmail.placeholderEmail")'></el-input>
                    <div class="return__error" v-if="returnMessage">
                        {{returnMessage}}
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="emailConfirm">{{this.$t("m.banner.confirm")}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      // <!-- 注册弹框 -->
      dialogForm: false,
      registerForm: {
        email: "",
        eth: ""
      },
      returnReg_msg: null,
      // eth
      dialogEth: false,
      eth: "",
      // email
      dialogEmail: false,
      emailForm: {
        email: ""
      },
      scale: this.$t("m.banner.h3"),
      days: null,
      hours: null,
      min: null,
      secs: null,
      dialog: null,
      returnMessage: null
    };
  },
  computed: {},
  methods: {
    // <!-- 注册弹框 -->
    handleClose(done) {
      this.dialogForm = false;
    },
    //eth
    handleCloseEth(done) {
      this.dialogEth = false;
    },

    handleCloseEmail(done) {
      this.dialogEmail = false;
    },
    getCountDown(start, timestamp) {
      let that = this;
      setInterval(function() {
        var nowTime = new Date() || new Date(start * 1000);
        var endTime = new Date(timestamp * 1000);
        var t = endTime.getTime() - nowTime.getTime();
        var d = Math.floor(t / 1000 / 60 / 60 / 24);
        var hour = Math.floor((t / 1000 / 60 / 60) % 24);
        var min = Math.floor((t / 1000 / 60) % 60);
        var sec = Math.floor((t / 1000) % 60);
        if (d < 10) d = "0" + d;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        that.days = d;
        that.hours = hour;
        that.min = min;
        that.secs = sec;
      }, 1000);
    },
    getToken(n) {
      this[n] = true;
    },

    emailConfirm() {
      var params = {
        email: this.emailForm.email,
        language: this.$i18n.locale
      };
      this.$ajax
        .post("https://trade.lendx.vip/website/appoint", params)
        .then(res => {
          if (res.data.code == "2000") {
            this.dialogEmail = false;
            this.eth = res.data.message;
            this.dialogEth = true;
          } else {
            this.returnMessage = res.data.message;
          }
        });
    },
    register() {
      var params = {
        email: this.registerForm.email,
        address: this.registerForm.eth,
        language: this.$i18n.locale
      };
      this.$ajax
        .post("https://trade.lendx.vip/website/join", params)
        .then(res => {
          if (res.data.code == "2000") {
            this.dialogForm = false;
            this.$message({
              type: "info",
              message: res.data.message
            });
          } else {
            this.returnReg_msg = res.data.message;
          }
        });
    },
    copy() {
      this.dialogEth = false;
      this.$message({
        type: "info",
        message: this.$t("m.banner.confirmEth.success")
      });
    }
  },
  watch: {},
  created() {
    window.onload = function(params) {
      //dialog背景图片
      document
        .getElementsByClassName("el-dialog__header")[0]
        .classList.add("header-back");
      if (document.getElementsByClassName("el-dialog__header").length > 0) {
        for (let a of document.getElementsByClassName("el-dialog__header"))
          a.classList.add("header-back");
      }
    };

    this.$ajax
      .post("https://trade.lendx.vip/website/time")
      .then(res => {
        if (res.status == "200") {
          let endTime = res.data.data.endTime;
          let startTime = res.data.data.startTime;
          let nowTime = res.data.data.nowTime;
          if (nowTime < startTime) {
            this.getCountDown(nowTime, startTime);
            //不是活动时间展示一个email框
            this.dialog = "dialogForm";
          } else if (startTime <= nowTime <= endTime) {
            this.getCountDown(nowTime, endTime);
            //活动时间展示注册框
            this.dialog = "dialogForm";
          } else if (nowTime >= endTime) {
            that.days = "00";
            that.hours = "00";
            that.min = "00";
            that.secs = "00";
            that.secs = "00";
            that.scale = this.$t("m.banner.h3-end");
            this.dialog = "dialogEmail";
          }
        }
      })
      .catch(function(res) {
        console.log(res);
      });
  }
};
</script>

<style scope>
.return__error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  right: 0;
}
.el-dialog__body {
  width: 380px;
  margin: auto;
  padding: 50px 0 10px;
}
.el-dialog__footer {
  width: 380px;
  margin: auto;
  padding: 0 0 40px!important;
}
.oneButton .el-dialog__footer {
  display: flex;
  justify-content: center;
}
.oneButton .el-dialog__footer button {
  width: 180px;
}
.oneEmail .el-dialog__footer .dialog-footer,
.oneEmail .el-dialog__footer button {
  width: 100%;
  display: block;
  font-size: 18px;
}
.dialog-footer button {
  width: 160px;
  border-radius: 0;
  height: 50px;
}
.dialog-footer button.el-button--default {
  border: 1px solid #a6a6a6;
  float: left;
}
.ethDialog button.el-button--primary {
  width: 200px;
}
.dialog-footer button.el-button--primary {
  background: linear-gradient(45deg, #4885ff 0%, #509fff 100%);
}
.el-dialog__headerbtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.el-input input {
  border-radius: 0;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
}
.banner-vue {
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 912px;
  background-image: url("/static/image/banner.png");
  background-size: cover;
}
.banner-vue .header-inner {
  position: relative;
  width: 1100px;
  margin: auto;
}
.banner-vue .header-inner img {
  width: 100vw;
}

.banner-vue .header-inner > img {
  visibility: hidden;
}
.banner-vue .header-inner .contentBox {
  width: 100%;
  height: 100%;
  position: absolute;
}
.banner-vue .header-inner .contentBox h1 {
  text-align: center;
  font-size: 48px;
  margin-top: 80px;

  position: relative;

  -webkit-animation: fade-in-down 0.6s;
  animation: fade-in-down 0.6s;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#509eff),
    to(#3671e2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@-webkit-keyframes fade-in-down {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fade-in-down {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.banner-vue .header-inner .contentBox h2 {
  font-weight: normal;
  text-align: center;
  margin-top: 47px;
  margin-bottom: 59px;
  font-size: 30px;
  color: #fff;
}
.banner-vue .header-inner .contentBox h3 {
  font-weight: normal;
  text-align: center;
  margin-bottom: 23px;
  font-size: 22px;
  color: #fff;
}
.banner-vue .header-inner .contentBox .timeBox {
  width: 554px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}

.banner-vue .header-inner .contentBox .timeBox .block {
  border-radius: 5px;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
  position: relative;
  height: 88px;
  width: 88px;
  line-height: 88px;
  font-size: 54px;
  background: linear-gradient(45deg, #4886ff 0%, #509fff 100%);
}
.banner-vue .header-inner .contentBox .timeBox .block::after {
  content: ":";
  position: absolute;
  font-size: 50px;
  color: #fff;
  right: -40px;
  top: -5px;
  font-weight: 600;
}
.banner-vue
  .header-inner
  .contentBox
  .timeBox
  .grid-content:nth-child(4)
  .block:after {
  content: "";
}
.banner-vue .header-inner .contentBox .timeBox span {
  text-align: center;
  display: block;
  margin-top: 15px;
  font-size: 16px;
  color: #fff;
}

.el-button--text {
  padding: 61px 0 58px!important;
}
.banner-vue .header-inner .contentBox .buttonbox {
  margin: auto;
  text-align: center;
  cursor: pointer;
}
.banner-vue .header-inner .contentBox .buttonbox img {
  margin: auto;
  width: 350px;
  cursor: pointer;
}
.notics {
  height: 251px;
  width: 970px;
  margin: auto;
  text-align: left;
  font-size: 12px;
  color: #fff;
}
.notics .title {
  margin-bottom: 10px;
  color: #509fff;
  font-size: 16px;
}
.notics li {
  font-size: 14px;
  margin-bottom: 5px;
  word-wrap: break-word;
  line-height: 21px;
}
.header-back {
  text-align: center;
  padding: 30px!important;
  background-image: url("/static/image/dialog.png");
  background-size: cover;
}

.el-form-item.is-success .el-input__inner,
.el-form-item.is-success .el-input__inner:focus,
.el-form-item.is-success .el-textarea__inner,
.el-form-item.is-success .el-textarea__inner:focus {
  border-color: #e5e5e5;
}
.banner-vue .el-dialog {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.banner-vue .el-dialog .el-dialog__title {
  line-height: 24px;
  font-size: 22px;
  line-height: 36px;
  color: #fff;
  width: 100%;
  word-wrap: break-word;
}
.banner-vue .el-dialog__headerbtn .el-dialog__close,
.banner-vue .el-dialog__headerbtn .el-dialog__close:hover {
  color: #fff;
  font-size: 20px;
}
.el-form-item__content {
  width: 380px;
  margin: auto;
}
.el-dialog__headerbtn .el-dialog__close {
    color: #fff!important;
}
/*屏幕宽度小于768px时*/

@media screen and (max-width: 1100px) {
  .banner-vue .header-inner .contentBox .timeBox {
    width: 330px;
  }
  .banner-vue .header-inner .contentBox {
    width: 100vw;
  }
  .banner-vue .header-inner .contentBox .timeBox .block {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .banner-vue .header-inner .contentBox .notics {
    display: none;
  }

  .banner-vue {
    height: auto;
  }
  .banner-vue .header-inner .contentBox h1 {
    font-size: 30px;
    margin-top: 30px;
  }
  .banner-vue .header-inner .contentBox h2,
  .banner-vue .header-inner .contentBox h3 {
    margin-top: 10px;
  }
  .banner-vue .header-inner .contentBox .timeBox {
    padding: 10px 0 0;
  }
  .banner-vue .header-inner .contentBox .buttonbox {
    margin-top: 12px;
  }
  .el-dialog {
    width: 60% !important;
  }
  .banner-vue .header-inner .contentBox .buttonbox img {
    width: 230px;
  }

  .banner-vue .header-inner .contentBox .timeBox .block {
    text-align: center;
    font-size: 32px;
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .banner-vue .header-inner .contentBox .timeBox .block::after {
    font-size: 32px;
    right: -20px;
    top: -5px;
  }
  .banner-vue .header-inner .contentBox .timeBox span {
    margin-top: 2px;
    font-size: 14px;
  }
  .el-button--text {
    padding: 12px 0;
  }
  .notics {
    height: 251px;
    width: 80%;
  }
}

@media screen and (max-width: 414px) {
  .el-dialog__body {
    width: 80%;
    padding: 30px 0 10px!important;
    padding-left: 0!important;
    padding-right: 0!important;
  }
  .el-dialog__header {
    padding: 20px !important;
}
  .el-dialog__footer {
    width: 80%;
    margin: auto;
    padding-left: 0!important;
    padding-right: 0!important;
  }

.el-button--text {
  padding: 12px 20px!important;
}
  .el-form-item__content {
    width: 100%;
  }
  .banner-vue .header-inner .contentBox h1,
  .banner-vue .header-inner .contentBox h2,
  .banner-vue .header-inner .contentBox h3,
  .banner-vue .header-inner .contentBox .notics {
    display: none;
  }
  .dialog-footer button {
    width: 120px;
  }
  .banner-vue .header-inner .contentBox .timeBox {
    padding: 5% 10px 0;
  }
  .banner-vue .header-inner .contentBox .buttonbox {
    margin-top: 12px;
  }
  .el-dialog {
    width: 80% !important;
  }

  .el-dialog .el-dialog__title {
    font-size: 18px;
  }

  .el-input input {
    height: 40px;
  }

  .dialog-footer button {
    height: 40px;
  }

  .el-dialog {
    border-radius:10px;
  }
}

@media screen and (max-width: 400px) {
  .banner-vue .header-inner .contentBox .buttonbox {
    margin-top: 0;
  }

  .dialog-footer button {
    width: 100px;
  }
}
</style>
