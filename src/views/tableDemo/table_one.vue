<template>
    <div class="w_table">
        <el-table
                :data="tableData"
                style="width: 100%">
            <!--<el-table-column-->
                    <!--type="index">-->
            <!--</el-table-column>-->
            <div v-for="(item,index) in tableTit" :key="tableTit.data">
                <!--不带图标-->
                <el-table-column  v-if="item.icon == ''"
                  :label="item.name"
                  :width="item.width"
                  :prop="item.data"
                  align="center">
                </el-table-column>
                <!--带图标-->
                <el-table-column  v-if="item.icon != ''"
                     :label="item.name"
                     :width="item.width"
                     align="center">
                    <template slot-scope="scope" >
                        <i :class="item.icon"></i>
                        <span style="margin-left: 10px">{{ scope.row[item.data] }}</span>
                    </template>
                </el-table-column>
            </div>
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
    </div>
</template>

<script>
    export default {
        name: "table_one",
        data() {
            return {
                tableTit:[
                    {
                        name:"地址",
                        icon:"",
                        width:'250',
                        data:'address'
                    },
                    {
                        name:"日期",
                        icon:"el-icon-time",
                        width:'180',
                        data:'date'
                    },
                    {
                        name:"姓名",
                        icon:"",
                        width:'180',
                        data:'name'
                    },
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }

    }
</script>

<style lang="scss">
    .w_table{

    }
.el-table th,.el-table td {
    /*text-align: center;*/
}
</style>