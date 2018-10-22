<template>
    <div class="uc">
        <div class="elbox">

            <!-- 顶部导航栏-->
            <w_header></w_header>
            <!-- 中间信息展示 -->
            <el-container class="elbox_all">
                <!-- 侧边导航栏 -->
                <div class="myside">
                    <aside-nav ></aside-nav>
                </div>
                <!-- 中间信息 -->
                <el-container class="elbox_centerMsg">
                    <!--面包屑导航-->
                    <el-row class="bread" type="flex" justify="center">
                        <el-col :span="22"><w_breadCrumb></w_breadCrumb></el-col>
                    </el-row>
                    <el-row class='myMain'type="flex" justify="center">
                        <el-col :span="22">
                            <el-main>
                                <router-view/>
                            </el-main>
                        </el-col>
                    </el-row>
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
    import asideData from "../config/json/asideNacConf"
    import w_header from "../components/w_header"
    import w_breadCrumb from "../components/w_breadCrumb"
    export default {
        name: "adminCenter",
        data(){
            return{
                navData:{},
            }
        },
        mounted(){
            this.navData=asideData;
        },
        methods:{

        },
        components:{
            asideNav,
            w_header,
            w_breadCrumb
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
            .bread{
                position: absolute;
                top:0;
                width: 100%;
                height:40px;
            }
            .elbox_centerMsg{
                position: relative;
                width:100%;
                .myMain{
                    width:100%;
                }
                .el-main{
                    width:100%;
                    padding:0;
                    margin-top:40px;
                    min-height:700px;
                    background: #fff;
                    border-radius: 8px;
                    /*padding-left:60px;*/
                    /*padding-right:60px;*/
                    /*border:1px solid black;*/
                }
            }

        }
    }

</style>