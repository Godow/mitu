<template>
    <div id="movie">
        <hello></hello>
        <div v-html="waiting" class="waiting"></div>
        <!-- <iframe class="iframeItem" frameborder=0 src="https://009bk.com/" allowfullscreen='true' > </iframe>-->
        <!--https://www.qsptv.net-->
        
        <img class="info" src="../assets/wechat.jpg">

    </div>
</template>

<script>
  import hello from './HelloWorld'
  export default {
    name:'movie',
    data(){
        return {
            waiting:'正在加载资源，请稍后... ...',
            iframeSrc:"https://www.tv432.com",//"https://009bk.com/",//https://www.qsptv.net,
        }
    },
    components:{
        hello
    },
    mounted:function(){
        let that=this;
        var iframe = document.createElement("iframe"); 
        iframe.src = that.iframeSrc;;
        iframe.style.border="0px";
        iframe.style.allowfullscreen = "true";        
        if (iframe.attachEvent){
            iframe.attachEvent("onload", function(){
                that.waiting = '';
            });
        } else {
            iframe.onload = function(){
                that.waiting = '';
            };
        }
        document.getElementById("movie").append(iframe);

    }
  }
</script>


<style>
  *{
      padding:0px;
      margin:0px;
  }
  
  #movie{
      height:100vh;
  }
  #movie iframe{
      margin-left:10vw;
      width:80vw;
      height:99vh;
  }
  .info{
      width:10vh;
      height:10vh;
      background-color:white;
      position:fixed;
      right:11.3vw;
      bottom:46vh;
      opacity:0;
  }

  .waiting{
      color:white;
      z-index:-1;
      position:absolute;
  }
  .info:hover{
      opacity:1;
  }
  @media screen and (max-width: 800px) {
      .waiting{
          color:black;
      }
        iframe {
            margin:0px;
            width:100%;
            margin-left:0;
        }
    }
</style>