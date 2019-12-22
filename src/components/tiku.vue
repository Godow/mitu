<template>
    <div id="tiku">
        <hello></hello>

        <iframe src="https://www.examcoo.com/index/ku"  allowfullscreen='true' ></iframe>

    </div>
</template>

<script>
  import hello from './HelloWorld'
  export default {
    name:'tiku',
    components:{
        hello
    },

  }
</script>


<style>
#tiku{
      height:100vh;
}
 #tiku iframe{
     margin-left:10vw;
     width:80vw;
     border:0px;
     height:99vh;
 }
 @media screen and (max-width: 800px) {
        #tiku iframe {
            width:100vw;
            margin:0px;
        }
    }
</style>