<template>
    <div id="hello" style="">
    
    <div class="phoneNav" style="position:fixed;top:0px;">
    <span style="color:gray;position:fixed;right:10vh;font-size:10px">微信扫码获取<br/>更多资源</span>
    <div style="position:fixed;right:8vh;width:0px;height:0px;border-left:10px solid white;border-top:10px solid transparent;border-bottom:10px solid transparent"></div>
    <img src="../assets/wechat.jpg" style="width:8vh;height:8vh;position:fixed;right:0px;"></img>
      <el-dropdown trigger="click" style="position:fixed;left:0px;">
        <span class="el-dropdown-link" style="line-height:8vh;color:white;font-size:20px;">
          菜单<i class="el-icon-arrow-down el-icon--right"></i>
         
        </span>
        <el-dropdown-menu slot="dropdown" style="line-height:50px;color:white;">
         <el-dropdown-item>
            <router-link to='movie'>电影频道</router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <router-link to='vip'>视频解析</router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <a href="http://rrd.me/ftesh">优惠购物</a>
          </el-dropdown-item>

          <el-dropdown-item>
            <router-link to='music'>音乐下载</router-link>
          </el-dropdown-item>
          
          <el-dropdown-item>
            <router-link to='tiku'>题库中心</router-link>
          </el-dropdown-item>

          <el-dropdown-item>
            <router-link to='others'>更多资源</router-link>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>     
      </div>


        <div class="nav">

          <router-link to='movie'><el-button type="primary" round>电影频道</el-button></router-link>

          <router-link to='vip'><el-button type="primary" round>视频解析</el-button></router-link>

          <a href='http://rrd.me/ftesh'><el-button type="primary" round>优惠购物</el-button></a>

          <router-link to='music'><el-button type="primary" round>音乐下载</el-button></router-link>

          <router-link to='tiku'><el-button type="primary" round>题库中心</el-button></router-link>

          <router-link to='others'><el-button type="primary" round>更多资源</el-button></router-link>
        </div>

        <p class="tuijian">强烈推荐关注公众号<br/>获取更多资源</p>
        <img class="joinus" src="../assets/wechat.jpg"></img>

        <img class="mitu" src="../assets/mitu.png"/>
        
    </div>
    
</template>

<script>
  export default {
    name:'hello',
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
    }
   
  }
</script>


<style>
  *{
      padding:0px;
      margin:0px;
  }

  #hello{
    position:absolute;
  }
  #hello a .el-button{
    float:left;
    clear:both;
    width:10vw;
    margin-top:40px;
    margin-left:-20px;
  }

  .tuijian{
    position:fixed;
    right:0px;
    bottom:120px;
    color:red;
  }

  .joinus{
    position:fixed;
    right:20px;
    bottom:20px;
    width:100px;
    height:100p;

  }
  .mitu{
    position:fixed;
    border-radius:0 0 0 120px;
    right:-20px;
    top:-20px;
    width:120px;
    height:120p;
    background-color:white;
  }
  a{
    text-decoration:none;
  }

  .phoneNav{
    display:none;
  }

  @media screen and (max-width: 800px) {
    .mitu{
      display:none;
    }
    #hello{
      position:relative;
      height:0px;
      margin-bottom:8vh;
    }
    .phoneNav{
      display:block;
      width:100%;
      height:8vh;
      background-color:black;
    }
    .nav{
      display:none;
    }
    .tuijian{
      display:none;
    }
    .joinus{
      display:none;
    }
    
}
</style>