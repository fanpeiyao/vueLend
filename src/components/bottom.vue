<template>
    <div class="bottom-vue">
        <h1 class=' text-center text-white'>Join Us</h1>
        <ul>
            <li  v-for="(item, key) in bottomList" :key="key" :class="{'wechatLi':item.img == 'wechat'}">
                <div v-if="item.img == 'wechat'">
                    <img :src='"static/image/"+item.code+".png"' alt="" class="code web_code">
                    <img :src='"static/image/"+item.code+".png"' alt="" class="code mobile_code" v-if="code && item.img == 'wechat'">
                </div>

                <a :href="item.path" target="blank" >
                    <img :src='"static/image/"+item.img+".png"' alt="" class="icon" @click="showCode(item.img)" >
                </a>
            </li>
        </ul>
        <div class="copyRight text-center text-white">
            Copyright © 2018 Lend Chain LTD.All Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {
      code: false,
      bottomList: [
        { path: "https://trade.lendx.vip", img: "l" },
        { path: "https://weibo.com/lendchain", img: "weibo" },
        { img: "wechat", code: "l_ewm" },
        { path: "https://www.facebook.com/lendchain", img: "facebook" },
        { path: "https://twitter.com/lendchain", img: "twitter" },
        { path: "https://t.me/Lendchain", img: "telegram" },
        { path: "https://www.instagram.com/lendchain/", img: "in" }
      ]
    };
  },
  computed: {},
  methods: {
    showCode(flag) {
        if (flag == 'wechat') {
            this.code = !this.code;
        }
    }
  },
  created() {}
};
</script>

<style scope>
.bottom-vue {
  background: #12161f;
  transition: all ease-out 0.3s;
}
.bottom-vue h1 {
  font-size: 30px;
  padding: 53px 0 63px;
  font-weight: normal;
}
.bottom-vue .copyRight {
  background: #161a24;
  height: 40px;
  line-height: 40px;
}
.bottom-vue ul {
  margin-bottom: 68px;
  display: flex;
  justify-content: center;
}
.bottom-vue ul li {
  color: #12161f;
  margin-right: 36px;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 50px;
  position: relative;
  border-radius: 50%;
  transition: 0.6s ease;
}
.bottom-vue ul li img.icon {
  width: 50px;
  height: 50px;
}

.bottom-vue ul li img.code {
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 70px;
  left: -35px;
  transition: all 0.2s;
}

.bottom-vue ul li img.web_code {
  opacity: 0;
  display: none;
}
.bottom-vue ul li.wechatLi:hover img.web_code {
  display: block;
  opacity: 1;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 1000px) {
  .bottom-vue ul {
    width: 80%;
    margin: auto;
    justify-content: space-between;
  }
  .bottom-vue ul li {
    margin-right: 0;
  }
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 414px) {
  .bottom-vue h1 {
    padding: 40px 0;
  }
  .bottom-vue ul {
    width: 90%;
    margin: auto;
     margin-bottom: 20px;
  }
  .bottom-vue ul li {
    height: 30px;
    width: 30px;
    line-height: 30px;
  }
  .bottom-vue ul li img.icon {
    height: 35px;
    width: 35px;
    line-height: 30px;
  }
  .bottom-vue ul li img.web_code {
    display: none;
  }
  .bottom-vue ul li.wechatLi:hover img.web_code {
    display: none;
  }
  .bottom-vue ul li img.code {
        bottom: 50px;
    }
}
</style>
