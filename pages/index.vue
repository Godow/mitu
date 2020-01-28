<template>
    <div id="hello">

    <div class="drag">
        <div class="drag_box" v-drag></div>
    </div>

    <div class="phoneNav" style="position:fixed;top:0px;">
    <span style="color:gray;position:fixed;right:10vh;font-size:10px">微信扫码<br/>关注公众号</span>
    <div style="position:fixed;right:8vh;width:0px;height:0px;border-left:10px solid white;border-top:10px solid transparent;border-bottom:10px solid transparent"></div>
    <img src="../assets/wechat.jpg" style="width:8vh;height:8vh;position:fixed;right:0px;"></img>
      <el-dropdown trigger="click" style="position:fixed;left:0px;">
        <span class="el-dropdown-link" style="line-height:8vh;color:white;font-size:20px;">
          菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <el-dropdown-menu slot="dropdown" style="line-height:50px;color:white;">

         <template v-for="item of menuList">
            <el-dropdown-item>
              <nuxt-link :to="item.menuLink">{{item.menuName}}</nuxt-link>
            </el-dropdown-item>
         </template>

          <el-dropdown-item>
            <a href="http://rrd.me/ftesh">优惠购物</a>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>     
    </div>


        <div class="nav">
          <template v-for="item of menuList">
            <nuxt-link :to=item.menuLink><el-button type="primary" round>{{item.menuName}}</el-button></nuxt-link>
          </template>

          <a href='http://rrd.me/ftesh'><el-button type="primary" round>优惠购物</el-button></a>

        </div>
        <p class="tuijian">强烈推荐关注公众号<br/>关注公众号</p>
        <img class="joinus" src="../assets/wechat.jpg"></img>        
        
        <router-view name="movie"></router-view>
    </div>
    
</template>

<script>
  
  export default {
    middleware: 'homeRedirect',
    name:'hello',
    data() {
      return {
        menuList:[
            {menuName:'电影频道',menuLink:'/movie'},
            {menuName:'视频解析',menuLink:'/vip'},
            {menuName:'音乐下载',menuLink:'/music'},
            {menuName:'题库中心',menuLink:'/exam'},
            {menuName:'更多资源',menuLink:'/more'},
        ]
      };
    },
    methods: {
    },   
  }
</script>


<style>
  *{
      padding:0px;
      margin:0px;
  }



  #hello{
    position:fixed;
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
	text-align: center; 
  }
  .joinus{
    position:fixed;
    right:20px;
    bottom:20px;
    width:100px;
    height:100p;

  }
  a{
    text-decoration:none;
  }

  .phoneNav{
    display:none;
  }

  @media screen and (max-width: 800px) {
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