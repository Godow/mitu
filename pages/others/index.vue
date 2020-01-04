<template>
    <div id="others">
        <hello></hello>

        <div class="content">

            <a href='https://www.77kpp.com/' class="others" target="_blank">备用影视资源①</a>

            <a href='http://www.kk2w.cc/' class="others" target="_blank">备用影视资源②</a>

            <a href='http://www.nicotv.club' class="others" target="_blank">动漫专区</a>

            <a href='http://shipinyu.com' class="others" target="_blank">视频下载</a>

            <a href='http://www.ypppt.com/moban' class="others" target="_blank">PPT模板</a>

            <a href='http://www.dxzy163.com/' class="others" target="_blank">学习教育</el-button></a>

            

            <a href='https://www.ilovepdf.com/zh-cn' class="others" target="_blank">PDF编辑</a>

            <a href='http://www.alltoall.net' class="others" target="_blank">文件格式转换</a>

            <a href='http://24mail.chacuo.net' class="others" target="_blank">临时邮箱</a>

            <a href='https://www.becmd.com' class="others" target="_blank">短信接码</a>
            

        </div>
    </div>
</template>

<script>
  import hello from '@/pages/index.vue'
  export default {
    name:'others',
    components:{
        hello
    },

  }
</script>


<style>
 #others{
     height:100vh;
 }
 .others {
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
        .others{
            background-color:rgba(238,210,238,0.2);
        }
        .content{
            padding:0;
            margin:0;
            width:100vw;
        }
    }
</style>