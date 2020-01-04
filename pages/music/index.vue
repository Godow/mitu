<template>
    <div id="music">
        <hello></hello>
        <div v-html="waiting" class="waiting"></div>
    </div>
</template>

<script>
import hello from '@/pages/index.vue'
  export default {
    name:'music',
    data(){
        return {
            waiting:'正在加载资源，请稍后... ...',
            iframeSrc:"https://www.musictool.top",
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
        //https://www.qsptv.net
        
        if (iframe.attachEvent){
            iframe.attachEvent("onload", function(){
                that.waiting = '';
            });
        } else {
            iframe.onload = function(){
                that.waiting = '';
            };
        }
        document.getElementById("music").append(iframe);

    }
  }
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    #music{
      height:100vh;
    }
    #music iframe{
      margin-left:10vw;
      width:80vw;
      height:99vh;
  }
    .waiting{
      color:white;
      z-index:-1;
      position:absolute;
    }
    @media screen and (max-width: 800px) {
        .waiting{
            color:black;
        }
        #music iframe {
            margin:0px;
            width:100%;
            height:91vh;
        }
    }
</style>