<template>
    <div id="app">
        <v-header></v-header>
        <router-view/>
        <v-bottom></v-bottom>
    </div>
</template>

<script>
import vHeader from "@/components/header.vue";
import vBottom from "@/components/bottom.vue";
export default {
  components: {
    vHeader,
    vBottom
  },
  name: "App"
};
</script>

<style>
/* basic */
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
nav,
ul,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
}
body,
html {
  height: 100%;
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-size: 14px;
  /* overflow-x: hidden; */
  color: #333;
  background: #f0f0f0;
}
.font-weight {
  font-weight: normal;
}
.my-3 {
  margin: 3rem 0;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.text-white {
  color: #fff;
}
.module-title {
  color: #262626;
  padding: 40px 0;
  font-size:42px;
}
.home{
    overflow: hidden;
}
/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
  .module-title {
    padding: 20px 0;
  font-size:32px;
  }
}
</style>
