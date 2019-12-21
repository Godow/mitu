<template>
    <div id="youhui">
        <hello></hello>
        <iframe class="iframeItem"  frameborder=0 src="http://dian.dadiyouhui.cn/fl.htm" allowfullscreen='true' >
        </iframe>


        
    </div>
</template>

<script>
  import hello from './HelloWorld'
  export default {
    name:'youhui',
    components:{
        hello
    },
  }
</script>


<style>
  *{
      padding:0px;
      margin:0px;
  }
  #youhui{
      height:100vh;
  }
  iframe{
      margin-left:-10vw;
      width:80vw;
      height:98vh;
  }
@media screen and (max-width: 800px) {
        iframe {
            margin:0px;
            width:100%;
            height:91vh;
        }
    }

</style>