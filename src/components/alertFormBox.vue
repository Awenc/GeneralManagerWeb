<template>
    <div class="formBox" >
        <div class="other" @click="toClose"></div>
        <el-row>
            <el-col :span="6" :offset="9" class="formBox_container">
                <div class="form_tit" v-if="isAdd">添加内容</div>
                <div class="form_tit" v-else>编辑内容</div>
                <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="80px"
                    class="demo-ruleForm"
                    size="mini"
                >
                    <el-form-item   v-for="(item,index) in titleData" :key="item.name" :label="item.name" :prop="item.data">
                        <el-input type="text" v-model="ruleForm2[item.data]" autocomplete="off">{{editData.name}}</el-input>
                    </el-form-item>
                    <div class="btns">
                        <el-button type="primary" @click="submitForm('ruleForm2')" size="small" v-if="isAdd">确定</el-button>
                        <el-button type="primary" @click="submitForm('ruleForm2')" size="small" v-else>修改</el-button>
                        <el-button @click="toClose" size="small">取消</el-button>
                    </div>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "alertFormBox",
        props:['titleData','editData'],
        data() {

            // 姓名判断
            let checkName=(rule, value, callback)=>{
                if (!value) {
                    return callback(new Error('姓名不能为空'));
                }
            };
            /*年龄判断*/
            let checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    // console.log(`value---------------${parseFloat(value)}`);
                    if (!Number.isInteger(parseFloat(value))) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            return {
                isAdd:true,
                ruleForm2: {
                    age: '',
                    name:"",
                    sex:"",
                    address:"",
                    date:"",
                },
                rules2: {
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ],
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(this.ruleForm2.name)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            toClose(){
                this.$emit("closeBox");
            },
        },
        watch:{
            editData(old,opr){
                // console.log(old)/
                if(!!old){
                    console.log("---------------")
                    this.isAdd=false;
                }
                // let cur=this.editData
                for(let item in this.editData){
                    this.ruleForm2[item] = this.editData[item]
                }
                // this.ruleForm2.name=this.editData.name;
                // this.ruleForm2.age=this.editData.age;
                // this.ruleForm2.sex=this.editData.sex;
                // this.ruleForm2.address=this.editData.address;
                // this.ruleForm2.date=this.editData.date;
                console.log(this.editData)
            }
        },
        updated(){

        }
    }
</script>

<style lang="scss">
.formBox{
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0,0,0,0.5);
    position: absolute;
    z-index:99;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    .other{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
    .el-row{
        .formBox_container{
            padding:0 30px;
            background: #fff;
            z-index:999;
            margin-top:10%;
            .form_tit{
                text-align: center;
                padding:20px 0;
                font-size:18px;
                color:#909399;
            }
            .btns{
                text-align: center;
                padding:10px 0;
            }
        }
    }

}
</style>