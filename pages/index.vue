<template>
    <div id="hello">

    <div class="phoneNav" style="position:fixed;top:0px;">
      <a class="beiyong_phone" href="javascript:void(0);" @click="drawer = true" style="color:#eee;margin-left: 0px;position:fixed;top:2.5vh;opacity:0.8;line-height:3vh;">
        <i class="el-icon-menu"></i>菜单
      </a>
    </div>

    <el-drawer
        title="菜单"
        :visible.sync="drawer"
        direction="ltr"
        size="45%"
        :show-close="false"
        :before-close="handleClose">
          <div>
            <template v-for="item of menuList">
                <el-dropdown-item>
                  <nuxt-link :to="item.menuLink" style="color:green;font-weight:bold">{{item.menuName}}</nuxt-link>
                </el-dropdown-item>
            </template>
            <el-dropdown-item>
            <a href="http://rrd.me/ftesh" style="color:green;font-weight:bold">优惠购物</a>
            </el-dropdown-item>

            <span style="color:gray;position:absolute;bottom:10vh;left:0vw;font-size:10px;text-align:center">微信扫码<br/>关注公众号</span>
            <img src="../assets/wechat.jpg" style="width:10vh;height:10vh;position:absolute;left:0px;bottom:0px;"></img>

            <a href="../static/米兔资源.apk" download style="position:absolute;bottom:3px;right:3px;color:#222;font-size:13px;font-weight:bold">
              <i class="el-icon-download"></i>Android下载
            </a>
          </div>
      </el-drawer>


      <div class="nav">
        <template v-for="item of menuList">
          <nuxt-link :to=item.menuLink><el-button type="primary" round>{{item.menuName}}</el-button></nuxt-link>
        </template>
        <a href='http://rrd.me/ftesh'><el-button type="primary" round>优惠购物</el-button></a>
      </div>

      
        <p class="tuijian">强烈推荐<br/>关注公众号</p>
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
        drawer: false,
        menuList:[
            {menuName:'电影频道',menuLink:'/movie'},
            {menuName:'视频解析',menuLink:'/vip'},
            {menuName:'音乐下载',menuLink:'/music'},
            {menuName:'题库中心',menuLink:'/exam'},
            {menuName:'更多资源',menuLink:'/more'},
        ],
      };
    },
    methods: {
      handleClose(done) {
            this.drawer = false;
        },
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
    right:30px;
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