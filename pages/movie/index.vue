<template>
    <div id="movie">
		<div class="beiyong">
            <template v-for="item of movieList">
                <a><el-button round class="btn" size="mini" @click="iframeSrc = item.link">{{item.name}}</el-button></a>
            </template>
		</div>
		
        <div v-html="waiting" class="waiting"></div>
        

    </div>
</template>

<script>
  export default {
    name:'movie',
    data(){
        return {
            waiting:'正在加载资源，请稍后... ...',
            iframeSrc:"",
            movieList:[
                {name:'线路1',link:'https://www.tv432.com'},
                {name:'线路2',link:'https://www.yunbtv.com'},
                {name:'线路3',link:'https://www.qsptv.net'},
                {name:'线路4',link:'https://www.i6v.cc'},
                {name:'线路5',link:'https://www.77kpp.com'},
                {name:'线路6',link:'https://009bk.com'},
                // {name:'线路7',link:'http://www.kk2w.cc'},
            ]
        }
    },
    components:{
    },
    mounted:function(){
        this.iframeSrc = this.movieList[0].link;
    },
    watch:{
        iframeSrc(){
            let oldIframe = document.getElementsByTagName('iframe');
            if(oldIframe.length > 0)
                oldIframe[0].remove();
            this.waiting='正在加载资源，请稍后... ...';
            let that=this;
            var iframe = document.createElement("iframe"); 
            iframe.src = that.iframeSrc;;
            iframe.style.border="0px";
            iframe.setAttribute('allowFullScreen','');
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