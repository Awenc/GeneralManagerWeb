<template>
    <div class="w_table">
        <!--表格的头部操作-->
        <div class="table_top">
            <!--表格标题-->
            <div class="w_table_title">自定义模板表格</div>
            <div class="addBtn">
                <el-button icon="el-icon-circle-plus-outline" type="primary" size="small">添加行</el-button>
            </div>
        </div>

        <!--
            表格内容
            ref="multipleTable"  ----存储多选的数组
            @selection-change="showCheck" ----点击多选的时候 更新数组中的内容
        -->
        <el-table
                ref="multipleTable"
                :data="tableData"
                @selection-change="showCheck">
            <!--多选-->
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <!--序号-->
            <el-table-column
                    type="index">
            </el-table-column>
            <!--不带图标-->
            <el-table-column  v-for="(item,index) in tableTit" :key="tableTit.data" v-if="item.icon == ''"
              :label="item.name"
              :width="item.width"
              :prop="item.data"
              :min-width="item.minWidth"
              align="center">
            </el-table-column>
            <!--带图标-->
            <el-table-column  v-else
                 :label="item.name"
                 :width="item.width"
                 :min-width="item.minWidth"
                 align="center">
                <template slot-scope="scope" >
                    <i :class="item.icon"></i>
                    <span style="margin-left: 10px">{{ scope.row[item.data] }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <!--表格底部操作-->
        <div class="operations">
            <!--
                1.删除所选行
                2.全部删除
                3.分页
            -->
            <div class="btns">
                <el-button type="primary" size="small">删除所选项</el-button>
                <el-button type="danger" size="small">全部删除</el-button>
            </div>
            <div class="paging">
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left" size="mini">上一页</el-button>
                    <div class="pageMsg">1/20</div>
                    <el-button type="primary" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    <el-input  class="goInput" v-model="input"  type="num"></el-input>
                    <el-button size="small">跳转</el-button>
                </el-button-group>
            </div>
        </div>
    </div>
</template>

<script>
    import headerData from "./tableHeaderConf/table_one_hearder"
    import tableData from "../../mock/tableMock/table_one_mock"
    export default {
        name: "table_one",
        data() {
            return {
                tableTit:headerData.tableTit,
                tableData: [],
                multipleSelection:[],
                input:'', //跳转页数
            }
        },
        mounted(){
            //获取table数据
            this.tableData=tableData.tableData;
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            showCheck(val){
                this.multipleSelection = val;
                console.log("==================多选===================")
                console.log(this.multipleSelection);
                console.log("=========================================")
            }
        }

    }
</script>

<style lang="scss">
    .w_table{
        .table_top{
            width:100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .w_table_title{
                width:auto;
                padding:20px 20px;
                font-size:14px;
                color:rgb(140,140,140);
            }
            .addBtn{
                margin-right:40px;
            }
        }
        .el-table{
            display: flex;
            flex-direction: column;
            align-items: center;
            /*border:1px solid black;*/
        }
        .operations{
            width:100%;
            height:100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /*border:1px solid black;*/
            .btns{
                margin-left:40px;
            }
            .paging{
                padding-right:50px;
                .el-button-group{
                    display: flex;
                    align-items: center;
                    .pageMsg{
                        padding:0 10px;
                        font-size:16px;
                        color:grey;
                    }
                    .goInput{
                        padding:0 10px;
                        .el-input__inner{
                            width:50px;
                            height:30px;
                        }
                    }
                }
            }
        }
    }

</style>