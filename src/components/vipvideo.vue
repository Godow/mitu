<template>
    <div id="vipvideo">
        <hello></hello>
        <h2 style="color:#FF7256;text-align:center;padding:1vh">全网VIP视频解析</h2>
        <iframe :src="myUrl" style="padding:1vh;height:60vh;border:1px dashed gray;" allowfullscreen='true' ></iframe>

        <el-select v-model="value" placeholder="请选择解析引擎" style="display:block;width:60vw;margin:5px auto;" >
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-input style="width:60vw;display:block;margin:5px auto" placeholder="请输入需要解析的视频网址"  v-model="tempUrl"></el-input>
        <el-button style="width:30vw;" type="primary" round @click="inputUrl = tempUrl">播放</el-button>

    </div>
</template>

<script>
  import hello from './HelloWorld'
  export default {
    name:'vipvideo',
    components:{
        hello
    },
    data(){
        return {
            options: [
                {
                    value: 'https://jx.du2.cc/?url=',
                    label: '一号通用vip引擎系统'
                },{
                    value: 'https://vip.bljiex.com/?v=',
                    label: '二号通用vip引擎系统'
                },{
                    value: 'https://www.8090g.cn/?url=',
                    label: '三号通用vip引擎系统'
                },{
                    value: 'https://jx.618g.com/?url=',
                    label: '四号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.drgxj.com/?url=',
                //     label: '二号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.618ge.com/?url=',
                //     label: '三号通用vip引擎系统'
                // }, {
                //     value: 'http://vip.jlsprh.com/?url=',
                //     label: '四号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.598110.com/?url=',
                //     label: '五号通用vip引擎系统'
                }
            ],
            value: '',
            inputUrl:'',
            tempUrl:'',
        }
    },
    computed:{
        myUrl:function(){
            return this.value+this.inputUrl;
        }
    }

  }
</script>


<style>
#vipvideo{
    height:100vh;
}
 iframe{
     width:80vw;
 }
 @media screen and (max-width: 800px) {
        iframe {
            height:40vh;
            margin:0px;
            width:95vw;
        }
    }
</style>