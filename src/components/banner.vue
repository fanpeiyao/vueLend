<template>
    <div class="banner-vue"  style="{background: 'url(static/image/banner.png) no-repeat top center;'}" >
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

                    <!-- 注册弹框 -->
                    <!-- @click="dialogForm = true" -->
                    <!-- eth -->
                    <!-- @click="dialogEth = true" -->




                    <el-button type="text" @click="dialogEmail = true"><img :src='"static/image/"+$t("m.banner.button")+".png"' alt=""></el-button>
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
        :title='$t("m.banner.confirmEmail.title")'
        :visible.sync="dialogForm"
        width="30%"
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

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogForm = false">{{this.$t("m.banner.cancel")}}</el-button>
                <el-button type="primary" @click="dialogForm = false">{{this.$t("m.banner.confirm")}}</el-button>
            </span>
        </el-dialog>


        <!-- eth -->
        <el-dialog class='ethDialog oneButton'
        :title='$t("m.banner.confirmEmail.title")'
        :visible.sync="dialogEth"
        width="30%"
        :before-close="handleCloseEth">
            <div class='text-center' style="margin-bottom: 18px;">sssssssssssssssssss</div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogEth = false">{{this.$t("m.banner.confirm")}}</el-button>
            </span>
        </el-dialog>


        <!-- email -->
        <el-dialog class='oneEmail'
        :title='$t("m.banner.confirmEmail.title")'
        :visible.sync="dialogEmail"
        width="30%"
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
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogEmail = false">{{this.$t("m.banner.confirm")}}</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    name: 'banner',
    data() {
        return {
            // <!-- 注册弹框 -->
            dialogForm:false,
            registerForm: {
                email: '',
                eth:''
            },
            // eth
            dialogEth:false,
            // email
            dialogEmail: false,
            emailForm: {
                email: ''
            },
            endTime:null,
            startTime:null,
            nowTime:null,
            scale:this.$t('m.banner.h3'),
            days:null,
            hours:null,
            min:null,
            secs:null


        };
    },
    computed: {
    },
    methods: {
        // <!-- 注册弹框 -->
        handleClose(done) {
            this.dialogForm = false
        },
        //eth
        handleCloseEth(done) {
            this.dialogEth = false
        },

        handleCloseEmail(done) {
            this.dialogEmail = false
        },
        getCountDown(start,timestamp){
            let that = this;
            setInterval(function(){
                var nowTime = new Date() ||  new Date(start * 1000);
                var endTime = new Date(timestamp * 1000);
                var t = endTime.getTime() - nowTime.getTime();
                var d=Math.floor(t/1000/60/60/24);
                var hour=Math.floor(t/1000/60/60%24);
                var min=Math.floor(t/1000/60%60);
                var sec=Math.floor(t/1000%60);
                if (d < 10)  d = "0" + d;
                if (hour < 10) hour = "0" + hour;
                if (min < 10) min = "0" + min;
                if (sec < 10) sec = "0" + sec;
                that.days = d;
                that.hours = hour;
                that.min =min;
                that.secs = sec;
            },1000);
        }

    },
    watch: {

    },
    created() {
        window.onload = function (params) {
            //dialog背景图片
            document.getElementsByClassName('el-dialog__header')[0].classList.add("header-back");
            if( document.getElementsByClassName('el-dialog__header').length>0){
                for(let a of document.getElementsByClassName('el-dialog__header'))
                    a.classList.add("header-back");
            }
        }

        this.$ajax.post('https://trade.lendx.vip/website/time',{withCredentials:true}).then( res =>{
           if(res.status == '200'){
               let endTime = res.data.data.endTime;
               let startTime = res.data.data.startTime;
               let nowTime = res.data.data.nowTime;
               if (nowTime < startTime ) {
                   this.getCountDown(nowTime,startTime);
               }else if(startTime  <= nowTime <= endTime){
                   this.getCountDown(nowTime,endTime);
               }else if(nowTime >= endTime){
                    that.days = '00';
                    that.hours = '00';
                    that.min ='00';
                    that.secs = '00';
               }
           }
        }).catch(function(res){
            console.log(res)
        });
    }
}
</script>

<style scope>
.el-dialog__body {
    padding: 30px 50px 10px;
}

.el-dialog__footer{
    padding: 0 50px 40px;
}

.oneButton .el-dialog__footer{
    display: flex;
    justify-content: center;
}
.oneButton .el-dialog__footer button{
    width:180px;
}
.oneEmail  .el-dialog__footer .dialog-footer,.oneEmail  .el-dialog__footer  button{
    width:100%;display: block;
}
.dialog-footer button{
    width: 120px;
     border-radius: 0;
}
.dialog-footer button.el-button--default{
    border:1px solid #a6a6a6;
    float: left;
}
.dialog-footer button.el-button--primary{
    background: linear-gradient(45deg, #4885FF 0%,#509FFF 100%);
}
.el-dialog__headerbtn {
    position: absolute;
    top: 10px;
    right: 10px;
}
.el-input input{
    border-radius: 0;
    background: #F5F5F5;
    border: 1px solid #E5E5E5;
}
.banner-vue .header-inner{
    backgroundSize:cover;
    height: 600px;
}
.banner-vue .header-inner{
    position: relative;
    width: 100%;
}
.banner-vue .header-inner img{
    width: 100%;
}
.banner-vue .header-inner .contentBox{
    width: 100%;
    height: 100%;
    position: absolute;
}
.banner-vue .header-inner .contentBox h1{
    text-align: center;
    font-size: 34px;
    margin-top: 42px;
    position: relative;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from( #509eff), to(#3671e2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.banner-vue .header-inner .contentBox h2{

    font-weight: normal;
    text-align: center;
    margin-top: 25px;
    color:#fff;
}
.banner-vue .header-inner .contentBox h3{

    font-weight: normal;
    text-align: center;
    margin-top: 32px;
    color: #fff;
}
.banner-vue .header-inner .contentBox .timeBox{
    width:330px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
}

.banner-vue .header-inner .contentBox .timeBox .block{
    border-radius: 5px;
    text-align: center;
    font-size: 32px;
    color: #fff;
    letter-spacing: 1px;
    position: relative;
    height:60px;width: 60px;
    line-height: 60px;
    background: linear-gradient(45deg,  #4886ff 0%,#509fff 100%);
}
.banner-vue .header-inner .contentBox .timeBox .block::after{
    content: ":";
    position: absolute;
    font-size: 32px;
    color: #fff          ;
    right: -20px;
    top: -5px;
    font-weight: 600;
}
.banner-vue .header-inner .contentBox .timeBox .grid-content:nth-child(4) .block:after{
    content: "";
}
.banner-vue .header-inner .contentBox .timeBox span{
    text-align: center;
    display: block;
    margin-top: 2px;
    color: #fff;
}

.banner-vue .header-inner .contentBox .buttonbox {
    margin: auto;
    text-align: center;
    cursor: pointer;
    margin-top: 12px;
}
.banner-vue .header-inner .contentBox .buttonbox img{
    margin: auto;
    width: 230px;
    cursor: pointer;
}
.notics {
    height: 200px;
    width: 60%;
    margin: auto;
    text-align: left;
    padding: 20px 0 0 0;
    font-size: 12px;
    color: #fff;
}
.notics .title{
    margin-bottom: 10px;
}
.notics li{
    margin-bottom: 5px;
    word-wrap: break-word;
     line-height: 21px;
}
 .header-back{
    text-align: center;
    padding: 30px;
    background: url('/static/images/banner.png')
}

.el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
    border-color: #e5e5e5;
}
.el-dialog{
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.el-dialog .el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #fff;
    width: 100%;
    word-wrap: break-word;
}
.el-dialog__headerbtn .el-dialog__close ,
.el-dialog__headerbtn .el-dialog__close:hover{
    color: #fff;
    font-size: 18px;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {

}
</style>
