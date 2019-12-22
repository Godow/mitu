<template>
    <div id="study">
        <hello></hello>

        <iframe src="http://www.dxzy163.com/"  allowfullscreen='true' ></iframe>

    </div>
</template>

<script>
  import hello from './HelloWorld'
  export default {
    name:'study',
    components:{
        hello
    },

  }
</script>


<style>
 #study iframe{
      margin-left:10vw;
      width:80vw;
      height:99vh;
      border
  }
 @media screen and (max-width: 800px) {
        iframe {
            margin:0px;
            width:100vw;
        }
    }
</style>