<template>
    <div class="table_down">
        <div class="ed_title">可下拉展示全部信息的表格</div>
        <div class="table_down_box">
            <el-table
                    :data="tableData5"
                    style="width: 100%">
                <!--<el-table-column-->
                        <!--type="index">-->
                <!--</el-table-column>-->
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item v-for="(item,index) in tableDownMsg" :key="item.name"
                                    :label="item.name">
                                <span v-show="props.$index != nowIndexChange">{{ props.row[item.data] }}</span>
                                <el-input v-show="props.$index == nowIndexChange"size="mini" v-model="curColData[item.data]" placeholder="请输入内容"></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-button v-show="props.$index != nowIndexChange"
                                    size="mini"
                                    type="warning"
                                    @click="toChangeMsg(props.$index,props.row)">修改信息</el-button>
                                <el-button v-show="props.$index == nowIndexChange"
                                           size="mini"
                                           type="primary"
                                           @click="toSureChange(props.$index,props.row)">确定修改</el-button>
                                <el-button v-show="props.$index == nowIndexChange"
                                           size="mini"
                                           @click="cancelChange">取消</el-button>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>

                <el-table-column  v-for="(item,index) in tableTitle" :key="item.name"
                        :label="item.name"
                        :prop="item.data"
                        :min-width="item.minWidth"
                        align="center">
                </el-table-column>
                <el-table-column label="操作" width="200" align="center">
                    <template slot-scope="scope">
                        <!--<el-button-->
                                <!--size="mini"-->
                                <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
    import headerData from "./tableHeaderConf/table_two_header"
    import tableData from "../../mock/tableMock/table_two_mock"
    export default {
        name: "table_two",
        data() {
            return {
                tableTitle:headerData.tableTit,
                tableDownMsg:headerData.msgData,
                tableData5: [],
                curColData:{},
                nowIndexChange:-1,
            }
        },
        mounted(){
            this.tableData5=tableData.tableData;
        },
        methods:{
            handleEdit(index, row) {
                //编辑行   index-哪一行  row-该行的所有信息
                console.log(index, row);
            },
            handleDelete(index, row) {
                //删除行  index-哪一行  row-该行的所有信息
                console.log(index, row);
            },
            toChangeMsg(index,row){
                console.log(index);
                this.nowIndexChange = index;
                // this.curColData= this.tableData5[index];
                for(let item in this.tableData5[index]){
                    this.curColData[item] =this.tableData5[index][item];
                }
            },
            cancelChange(){
                //取消修改
                this.nowIndexChange=-1;
            },
            toSureChange(index,row){
                //确定修改
                console.log("==============确定修改=========");
                console.log("------修改的原数据为："+JSON.stringify(row)+'--index:'+index);
                console.log("------修改后的数据为："+JSON.stringify(this.curColData));
                console.log("*******************************")
                this.nowIndexChange=-1;
            }
        }
    }
</script>

<style lang="scss">
    .table_down{
        .ed_title{
            padding:20px 20px;
            font-size:14px;
            color:grey;
        }
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>