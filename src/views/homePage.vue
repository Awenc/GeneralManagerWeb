<template>
    <div class="hp">
        <div class="hp_top">
            <el-row type="flex" align="middle" justify="center">
                <el-col :span="5">
                    <!--管理员信息展示-->
                    <div class="adminMsg">
                        <div class="admin_img">
                            <span class="iconfont">&#xe610;</span>
                        </div>
                        <div class="msg">
                            <ul>
                                <li>姓名：管理员</li>
                                <li>权限：...</li>
                                <li>部门：...</li>
                                <li>其他：...</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" :offset="3">
                    <div class="totalMsg">
                        <div class="title">展示系统的关键信息</div>
                        <div class="mainMsg">
                            <ul>
                                <li>
                                    <div class="msgKey" style="background: #F56C6C">总人数</div>
                                    <div class="msgVal">999</div>
                                </li>
                                <li>
                                    <div class="msgKey" style="background: #E6A23C">总商品数</div>
                                    <div class="msgVal">999</div>
                                </li>
                                <li>
                                    <div class="msgKey" style="background: #67C23A">总店铺数</div>
                                    <div class="msgVal">999</div>
                                </li>
                                <li>
                                    <div class="msgKey" style="background: #409EFF">其他信息</div>
                                    <div class="msgVal">999</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="hp_center">
            <linear
                    myHeight="400"
                    :x_data="xData"
                    :y_data="yData"
                    title="关键数据图表展示"></linear>
        </div>
    </div>
</template>

<script>
    import linear from "../components/echartsComponents/linear"
    export default {
        name: "homePage",
        data(){
          return{
              xData:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              yData:[820, 932, 901, 934, 1290, 1330, 1320],
          }
        },
        mounted(){

        },
        components:{
            linear
        }
    }
</script>

<style lang="scss">
.hp{
    .hp_top{
        width:100%;
        height:300px;
        /*background: skyblue;*/
        display: flex;
        align-items: center;
        .el-row{
            width:100%;
        }
        .adminMsg{
            height:250px;
            /*border:1px solid black;*/
            display: flex;
            justify-content: center;
            align-items: center;
            .admin_img{
                span{
                    font-size:130px;
                    color:skyblue;
                }
            }
            .msg{
                ul{
                    li{
                        list-style: none;
                    }
                }
            }
        }
        .totalMsg{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height:300px;
            .title{
                font-size:18px;
                color:rgb(11,11,11);
            }
            .mainMsg{
                margin-top:30px;
                ul{
                    display: flex;
                    li{
                        display: flex;
                        flex-direction: column;
                        /*justify-content: center;*/
                        /*align-items: center;*/
                        width:100px;
                        height:60px;
                        list-style: none;
                        border:1px solid rgb(140,140,140);
                        margin-left:10px;
                        .msgKey{
                            height:30px;
                            text-align: center;
                            line-height: 30px;
                            border-bottom: 1px solid rgb(140,140,140);
                            color:rgb(245,245,245);
                        }
                        .msgVal{
                            height:30px;
                            text-align: center;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }
    .hp_center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #myChart{
            width:100%;
        }
    }
}
</style>