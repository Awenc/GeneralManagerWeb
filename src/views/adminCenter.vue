<template>
    <div class="uc">
        <div class="elbox">

            <!-- 顶部导航栏-->
            <el-header height="60px">
                <!-- Header content -->
                <div class="logo">elementUI</div>
                <div class="adminMsg">
                    <div class="name"><span class="iconfont">&#xe608;</span>admin</div>
                    <div class="out"><span class="iconfont">&#xe61b;</span>注销</div>
                </div>
            </el-header>

            <!-- 中间信息展示 -->
            <el-container class="elbox_all">
                <!-- 侧边导航栏 -->
                <div class="myside">
                    <aside-nav></aside-nav>
                </div>

                <el-container class="elbox_centerMsg">
                    <!-- 中间信息 -->
                    <!--面包屑导航-->
                    <div class="myBreadCrumb">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="item.title" :to="{ path: item.path }">
                                <router-link :to="item.path">{{item.title}}</router-link></el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <el-main >

                        <router-view/>
                    </el-main>
                </el-container>
            </el-container>


            <!-- 底部信息 -->
            <!--<el-footer height="100px">-->
                <!--底部信息-->
            <!--</el-footer>-->
        </div>
    </div>
</template>

<script>
    import asideNav from "../components/asideNav"
    import asideData from "../config/asideNacConf"
    export default {
        name: "adminCenter",
        data(){
            return{
                breadCrumbList:[
                    {
                        title:'首页',
                        path:"/adminCenter"
                    }
                ],
                navData:{},
            }
        },
        mounted(){
            console.log("=========当前路由=========");
            console.log(this.$route.path);
            this.navData=asideData;
            this.toSetBreadCrumbList(this.$route.path);
        },
        methods:{
          toSetBreadCrumbList(url){
              this.breadCrumbList=[
                  {
                      title:'首页',
                      path:"/adminCenter"
                  }
              ],
              console.log("gaibian")
              console.log(this.navData.asideList);
              for(let item of this.navData.asideList){
                  if(item.path == url && item.path !=''){
                      console.log("11111");
                      this.breadCrumbList.push({
                          title:item.title,
                          path:item.path,
                      })
                  }else{
                      for(let i of item.child){
                          console.log("22222");
                          if(i.path == url){
                              this.breadCrumbList.push({
                                  title:i.title,
                                  path:i.path,
                              })
                          }
                      }
                  }
              }
              console.log(this.breadCrumbList);
          },
        },
        components:{
            asideNav
        },
        watch:{
            $route(to,from){
                this.toSetBreadCrumbList(to.path);
            }
        },
    }
</script>

<style lang="scss">
    .uc{
        width:100%;
        height:100%;
        .elbox{
            height:100%;
            overflow: hidden;
        }
        .el-header{
            background: rgb(84,92,100);
            display: flex;
            justify-content:space-between;
            align-items: center;
            color:#fff;
            .logo{
                margin-left:50px;
            }
            .adminMsg{
                margin-right:100px;
                display: flex;
                div{
                    margin-left:15px;
                }
            }
        }
        .elbox_all{
            margin-top:30px;
            width:100%;
            height:100%;
            .myside{
                width:199px;
                height:100%;
                background:#545c64;
                border-radius:0 10px 10px 0;
            }
            .elbox_centerMsg{
                position: relative;
                width:100%;
                .myBreadCrumb{
                    position: absolute;
                    top:0;
                    width:100%;
                    height:40px;
                    /*border:1px solid black;*/
                    display: flex;
                    align-items: center;
                    padding-left:60px;
                }
                .el-main{
                    padding:0;
                    margin-top:40px;
                    padding-left:60px;
                }
            }

        }
    }

</style>