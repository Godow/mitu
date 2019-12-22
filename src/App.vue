<template>
  <div id="app">
    <div class="wxtip" id="phoneJweixinTip">
      <span class="wxtip-icon-phone"></span>
      <p class="wxtip-txt">点击屏幕右上角 [···]<br/>选择 [在浏览器打开]</p>
      <img src="./assets/wechat.jpg" style="width:40vw;height:40vw;margin:3vw;"/>
      <p style="color:white;font-size:8px;">长按二维码添加关注</p>
    </div>

    <div class="wxtip" id="pcJweixinTip">
      <span class="wxtip-icon-pc"></span>
      <p class="wxtip-txt">点击屏幕左上角<br/>选择 用默认浏览器打开</p>
      <img src="./assets/wechat.jpg" style="width:10vw;height:10vw;margin:3vw;"/>
    </div>


    <div id="routerView">
      <router-view/>
    </div>
  </div>
</template>
<script>

  //禁止非法调试
  var threshold = 160; // 打开控制台的宽或高阈值
  // 每秒检查一次
  setInterval(function() {
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
          // 如果打开控制台，则隐藏网页内容并强制刷新页面
          console.log("禁止非法调试！");
          window.location.reload();
      }
  }, 1e3);


export default {
  
  name: 'App',
  mounted(){
       //判断是手机端还是电脑端
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                  "SymbianOS", "Windows Phone",
                  "iPad", "iPod"];
    var isPC = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         isPC = false;
         break;
      }
    }

    //判断是不是微信内置浏览器
    var ua = navigator.userAgent;
    var isWeixin = !!/MicroMessenger/i.test(ua);
    
    //如果是微信内置浏览器，就显示遮罩层
    var JweixinTip = document.getElementById('JweixinTip');
    //是微信内置浏览器 
    if(isWeixin){   
      //如果是手机端
      if(!isPC){  
        phoneJweixinTip.style.display='block';
      }
      //如果是PC端
      else{
        pcJweixinTip.style.display='block';
      }
      //不显示路由内容
      var routerView = document.getElementById('routerView');
      routerView.style.display="none";
    }else{
      pcJweixinTip.style.display='none';
      phoneJweixinTip.style.display='none';
    }
  },
}
</script>

<style>
.wxtip{
  background: rgba(0,0,0,0.8); 
  text-align: center; 
  position: fixed; 
  left:0; 
  top: 0; 
  width: 100%; 
  height: 100%; 
  z-index: 998; 
  display: none;
}
.wxtip-icon-phone{
  width: 15vh; 
  height:15vh; 
  background: url(./assets/arrow.png) no-repeat; 
  background-size:15vh 15vh;
  display: block; 
  position: absolute; 
  right: 3vh; 
  top: 3vh;
}
.wxtip-icon-pc{
  width: 15vh; 
  height:15vh; 
  background: url(./assets/arrow.png) no-repeat; 
  background-size:15vh 15vh;
  transform:rotateY(240deg);
  display: block; 
  position: absolute; 
  left: 200px; 
  top: 3vh;
}

.wxtip-txt{
  margin-top: 20vh; 
  color: #fff; 
  font-size: 18px; 
  line-height: 1.5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:0px;
  margin:0px; 
}
#app{
    background-image:url();
}
@media screen and (min-width: 800px) {
    #app{
        
        background-image:url('./assets/background.jpg');
        background-attachment:fixed;
        background-repeat:no-repeat;
        background-position:top left;
    }
  }
</style>
