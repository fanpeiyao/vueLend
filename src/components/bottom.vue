<template>
    <div class="bottom-vue">
        <h1 class=' text-center text-white'>Join Us</h1>
        <ul>
            <li  v-for="(item, key) in bottomList" :key="key">
                <a :href="item.path" target="blank">
                    <i class="iconfont" :class="item.icon"></i>
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
      bottomList: [
        { path: "https://trade.lendx.vip", icon: "icon-msnui-computer" },
        { path: "https://weibo.com", icon: "icon-weibo1" },
        { path: "", icon: "icon-wechat" },
        { path: "https://www.facebook.com/", icon: "icon-facebook" },
        { path: "https://twitter.com/", icon: "icon-twitter" },
        { path: "", icon: "icon-emizhifeiji" },
        { path: "https://www.linkedin.com/", icon: "icon-linkedin" }
      ]
    };
  },
  computed: {},
  methods: {},
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
  padding: 50px;
  font-weight: normal;
}
.bottom-vue .copyRight {
  background: #161a24;
  height: 40px;
  line-height: 40px;
}
.bottom-vue ul {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.bottom-vue ul li {
  color: #12161f;
  margin-right: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  border-radius: 50%;
    transition: .6s ease;
  background: linear-gradient(45deg, #4e9aff 0%, #4989ff 100%);
}
.bottom-vue ul li i {
  font-size: 20px;
  color: #333;

}
.bottom-vue ul li:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
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
  }
  .bottom-vue ul li {
    height: 30px;
    width: 30px;
    line-height: 30px;
  }
  .bottom-vue ul li i {
    font-size: 16px;
  }
}
</style>
