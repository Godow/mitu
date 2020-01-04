<template>
    <div id="movie">
        <hello></hello>
		<div class="beiyong">
			<a href="https://www.77kpp.com/"><el-button round size="mini">备用线路1</el-button></a>
			<a href="http://www.kk2w.cc/" ><el-button round size="mini">备用线路2</el-button></a>
			<a href="https://www.i6v.cc/" ><el-button round size="mini">备用线路3</el-button></a>
			<a href="https://www.yunbtv.com/" ><el-button round size="mini">备用线路4</el-button></a>
			<a href="https://009bk.com/" ><el-button round size="mini">备用线路5</el-button></a>
			<a href="https://www.qsptv.net" ><el-button round size="mini">备用线路6</el-button></a>
		</div>
		
        <div v-html="waiting" class="waiting"></div>
        <!-- <iframe class="iframeItem" frameborder=0 src="https://009bk.com/" allowfullscreen='true' > </iframe>-->
        <!--https://www.qsptv.net-->
        

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
      height:99%;
  }

  .waiting{
      color:white;
      z-index:-1;
      position:absolute;
  }

    /*大屏*/
    @media screen and (min-width: 800px) {
        .beiyong{
            position:fixed;
            right:-10px;
            top:15vh;

        }
        .beiyong a{
            float:right;
            clear:both;
            line-height:50px;
        }
    }
    /*小屏*/
  @media screen and (max-width: 800px) {
		.beiyong{
            background-color:rgba(139,126,102,0.5);
			display:grid;
			grid-template-columns:repeat(4,25%);
		}
		.waiting{
		  color:black;
		}
		#movie iframe {
			margin:0px;
			width:100%;
			margin-left:0;
		}
    }
</style>