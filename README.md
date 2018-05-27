# vuelend

> A Vue.js project

## 项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 打包部署
npm run bulid
```
## 项目结构

``` bash
vue-lend

|-----build                              //构建相关
|-----config                             //配置相关
|     |------index.js                    //可修改端口号
|-----src                                //源代码
|     |------assets
|     |      |------i18n                 //中英文切换配置相关
|     |------components                  //页面组件
|     |      |------***.vue
|     |------router                      //路由
|     |      |------index.js             //路由配置
|     |------views                       //views界面（可修改文件）
|     |      |------home.vue             //首页
|     |------App.vue                     //入口页面
|     |------main.js                     //入口 加载组件 初始化等
|-----static                             //静态资源（可修改文件）
|     |------iconfont                    //图标
|     |------image
|-----index.html                         //html模板，加载静态资源
|-----package.json                       //package.json
```
