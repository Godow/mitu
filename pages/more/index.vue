<template>
    <div id="more">
        <div class="content">

            <template v-for="item of linkList">
                <a :href="item.link" class="more" target="_blank">{{item.name}}</a>
            </template>

        </div>
    </div>
</template>

<script>
  export default {
    name:'more',
    data(){
        return {
            linkList:[
                {name:'动漫专区',link:'http://www.nicotv.club'},
                {name:'视频下载',link:'http://shipinyu.com'},
                {name:'PPT模板',link:'http://www.ypppt.com/moban'},
                {name:'学习教育',link:'http://www.dxzy163.com/'},

                {name:'PDF编辑',link:'https://www.ilovepdf.com/zh-cn'},
                {name:'文件格式转换',link:'http://www.alltoall.net'},
                {name:'临时邮箱',link:'http://24mail.chacuo.net'},
                {name:'短信接码',link:'https://www.becmd.com'},
            ]
        }
    },
    components:{
    },

  }
</script>


<style>
 #more{
     height:100vh;
 }
 .more {
     background-color:rgba(255,255,255,0.8);
     text-decoration:none;
     color:#515151;
     font-weight:700;
     margin:5px;
     display:flex;
     justify-content:center;
     align-items:center;
 }
 .content{
     width:70vw;
     padding-top:5vh;
     height:90vh;
     margin-left:15vw;
     display:grid;
     grid-template-columns:repeat(2,50%);
     
 }
 @media screen and (max-width: 800px) {
        .more{
            background-color:rgba(238,210,238,0.2);
        }
        .content{
            padding:0;
            margin:0;
            width:100vw;
        }
    }
</style>