<template>
        <div>
            <!-- 侧边导航栏 -->
            <el-aside width="200px" >
                <el-row class="tac">
                    <el-col :span="24">
                        <!-- :default-active="$route.path" 刷新后根据路劲 导航栏焦点在当前页面的那个选项    -->
                        <el-menu
                                :default-active="$route.path"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b"
                                class="el-menu-vertical-demo">
                            <!-- el-submenu可以带下拉菜单的 -->
                            <!--<el-menu-item disabled index="0">-->
                            <!--<span slot="title"></span>-->
                            <!--</el-menu-item>               -->
                            <div v-for="(item,index) in dataList" :key="item.title">
                                <router-link :to="item.path"  v-if="item.child.length == 0">
                                    <el-menu-item :index="item.path">
                                        <i class="el-icon-menu"></i>
                                        <span slot="title">{{item.title}}</span>
                                    </el-menu-item>
                                </router-link>

                                <el-submenu :index="index+''" v-if="item.child.length != 0">
                                    <template slot="title">
                                        <i class="el-icon-setting"></i>
                                        <span>{{item.title}}</span>
                                    </template>
                                    <!-- 导航下拉选项 -->
                                    <el-menu-item-group >
                                        <!-- 导航下面的选项 -->
                                        <div v-for="(childItema,childIndex) in item.child" :key="childItema.title" v-if="childItema.child == 0">
                                            <router-link :to="childItema.path">
                                                <el-menu-item :index="childItema.path">{{childItema.title}}</el-menu-item>
                                            </router-link>
                                        </div>
                                        <!-- 选项下面还有分组 -->
                                        <el-submenu  v-for="(childItema,childIndex) in item.child" :key="childItema.title" v-if="childItema.child != 0" :index="index+'-'+childIndex">
                                            <template slot="title">
                                                <span>{{childItema.title}}</span>
                                            </template>
                                            <el-menu-item-group >
                                                <div v-for="(childItemChild,i) in childItema.child" :key="childItemChild.title">
                                                    <router-link :to="childItemChild.path" >
                                                        <el-menu-item :index="childItemChild.path">{{childItemChild.title}}</el-menu-item>
                                                    </router-link>
                                                </div>
                                            </el-menu-item-group>
                                        </el-submenu>
                                    </el-menu-item-group>
                                </el-submenu>
                            </div>
                            <!-- disabled  不可选中 -->
                            <!--<router-link to="/navs">-->
                                <!--<el-menu-item index="/navs">-->
                                    <!--<i class="el-icon-view" ></i>-->
                                    <!--<span slot="title">导航栏</span>-->
                                <!--</el-menu-item>-->
                            <!--</router-link>-->

                            <!--<router-link to="/notic">-->
                                <!--<el-menu-item index="/notic" >-->
                                    <!--<i class="el-icon-info" ></i>-->
                                    <!--<span slot="title">弹出框</span>-->
                                <!--</el-menu-item>-->
                            <!--</router-link>-->


                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
        </div>
</template>

<script>
    import navData from "../config/json/asideNacConf"
    export default {
        name:"asideNav",
        data(){
            return {
                dataList:{},
            }
        },
        mounted(){
            this.dataList=navData.asideList;
        },
    }
</script>

<style >
  
  .el-aside {
    /*height:800px;*/
      height:100%;
      margin-top:30px;
  }
  
</style>