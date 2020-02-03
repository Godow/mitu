<template>
    <div id="movie">

        <a class="beiyong_phone" href="javascript:void(0);" @click="drawer = true" style="color:#eee;position:fixed;top:2.5vh;opacity:0.5;line-height:3vh;right:0px">
            <i class="el-icon-thumb"></i>切换备用线路
        </a>


        <div class="beiyong_pc">
            <template v-for="item of movieList">
                <a><el-button round class="btn" size="mini" @click="iframeSrc = item.link">{{item.name}}</el-button></a>
            </template>
		</div>

        <el-drawer
        title="备用影视线路"
        :visible.sync="drawer"
        :show-close="false"
        direction="rtl"
        size="45%"
        :before-close="handleClose">
            <div class="beiyong">
            <template v-for="item of movieList">
                <a><el-button round class="btn" size="mini" @click="iframeSrc = item.link">{{item.name}}</el-button></a>
            </template>
            </div>
        </el-drawer>


		
		
        <div v-html="waiting" class="waiting"></div>
        

    </div>
</template>

<script>
  export default {
    name:'movie',
    data(){
        return {
            drawer: false,
            waiting:'正在加载资源，请稍后... ...',
            iframeSrc:"",
            movieList:[
                {name:'线路1',link:'https://www.tv432.com'},
                {name:'线路2',link:'https://www.77kpp.com'},
                {name:'线路3',link:'https://www.qsptv.net'},
                {name:'线路4',link:'https://www.i6v.cc'},
                {name:'线路5',link:'https://www.yunbtv.com'},
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
    methods:{
        handleClose(done) {
            this.drawer = false;
        },
    },
    watch:{

        iframeSrc(){
            let oldIframe = document.getElementsByTagName('iframe');
            if(oldIframe.length > 0)
                oldIframe[0].remove();
            this.waiting='正在加载资源，请稍后... ...';
            let that=this;
            var iframe = document.createElement("iframe"); 
            iframe.src = that.iframeSrc;
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
        .beiyong_phone{
            display:none;
        }
        .beiyong_pc{
            display:block;
        }
        .beiyong_pc{
            position:fixed;
            right:-10px;
            top:15vh;

        }
        .beiyong_pc a{
            float:right;
            clear:both;
            line-height:50px;
        }
    }
    /*小屏*/
  @media screen and (max-width: 800px) {
        .beiyong_pc{
            display:none;
        }
		.beiyong{
			display:block;
		}
        .btn{
            display:block;
            margin:3vh;
            width:35vw;
        }
		.waiting{
		  color:black;
		}
		#movie iframe {
            height:120vh;
			margin:0px;
			width:100%;
			margin-left:0;
		}
    }
</style>