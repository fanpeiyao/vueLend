
<template>
    <div class="flow">
        <h1 class="text-center font-weight module-title">{{$t('m.flow.title')}}</h1>
        <div class='flow-content'>
            <div  class='flow-list'>
                <img src="static/image/borrower.png" class="image">
                <span>{{$t('m.flow.borrower')}}</span>
                <div class="node node1">
                    <em>1</em>
                    <span>{{$t('m.flow.one')}}</span>
                </div>
                <img src="static/image/arrow.png" alt="" class='arrow'>
                <div class="node node3">
                    <em>3</em>
                    <span>{{$t('m.flow.three')}}</span>
                </div>
                <img src="static/image/arrow2.png" alt="" class='arrow arrow2' >
            </div>

            <div class='flow-list'>
                <img src="static/image/smart.png" class="image">
                <span>{{$t('m.flow.smart')}}</span>
                <div class="node node2">
                    <em>2</em>
                    <span>{{$t('m.flow.two')}}</span>
                </div>
                <img src="static/image/arrow.png" alt="" class='arrow'>
            </div>
            <div class='flow-list'>
                <img src="static/image/investors.png" class="image">
                <span>{{$t('m.flow.investors')}}</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.flow {
  position: relative;
}
.flow > img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.flow .flow-content {
  display: flex;
  padding: 10px 0 40px;
  width: 630px;
  margin: auto;
  justify-content: space-between;
}
.flow .flow-content .flow-list {
  width: 30%;
  text-align: center;
  position: relative;
}
.flow .flow-content .flow-list .arrow {
  position: absolute;
  width: 120px;
  left: 0;
  bottom: 0;
  right: 0;
  top: -8px;
  margin: auto;
  right: -220px;
}
.flow .flow-content .flow-list:nth-child(1) .arrow2 {
  top: -32px;
}
.flow .flow-content .flow-list:nth-child(2) .arrow {
  top: -25px;
}
.flow .flow-content em {
  font-style: normal;
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #4b90ff;
  border-radius: 50%;
  color: #fff;
}
.flow .flow-content .flow-list .node {
  position: absolute;
  top: -15px;
  right: -85px;
    z-index: 2;
}
.flow .flow-content .flow-list .node3 {
  right: -68px;
  top: 53px;
}
.flow .flow-content .flow-list .node2 {
  top: 6px;
  right: -44px;
}
.flow .flow-content .flow-list .node3 span,
.flow .flow-content .flow-list .node2 span {
  display: inline-block;
  padding: 0;
}
.flow .flow-content .node span {
  font-size: 10px;
}
.flow .flow-content .flow-list img {
  width: 65px;
  border-radius: 50%;
}
.flow .flow-content .flow-list span {
  padding: 5px 20px;
  color: #000;
  display: block;
}

/*屏幕宽度小于768px时*/
@media screen and (max-width: 768px) {
    .flow .flow-content {
        width: 100%;
    }
    .flow .flow-content .flow-list:nth-child(1) .arrow2 {
        width: 60px;
        right: -127px;
        top: -48px;
    }
    .flow .flow-content .flow-list .arrow {
        width: 60px;
    }

    .flow .flow-content .flow-list .arrow {
        top: -20px;
        right: -136px;
    }
    .flow .flow-content em {
        height: 10px;
        width: 10px;
        font-size: 8px;
    }
    .flow .flow-content .node span {
        font-size: 6px;
    }
    .flow .flow-content .flow-list .node2 {
            top: 18px;
    right: -30px;
    }
.flow .flow-content .flow-list .node1 {
    top: -13px;
    right: -70px;
}
}
</style>
