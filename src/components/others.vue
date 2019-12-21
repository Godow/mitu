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

            <a href='https://cn.office-converter.com' class="others" target="_blank">文件格式转换</a>

        </div>
    </div>
</template>

<script>
  import hello from './HelloWorld'
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
     background-color:rgba(255,255,255,0.7);
     text-decoration:none;
     color:#FF7256;
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
            background-color:rgba(0,255,0,0.2);
        }
        .content{
            padding:0;
            margin:0;
            width:100vw;
        }
    }
</style>