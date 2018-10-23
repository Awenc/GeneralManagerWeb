<template>
    <div class="formBox" >
        <div class="other" @click="toClose"></div>
        <el-row>
            <el-col :span="6" :offset="9" class="formBox_container">
                <div class="form_tit">添加内容</div>
                <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="80px"
                    class="demo-ruleForm"
                    size="mini"
                >
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm2.age"></el-input>
                    </el-form-item>
                    <div class="btns">
                        <el-button type="primary" @click="submitForm('ruleForm2')" size="small">提交</el-button>
                        <el-button @click="toClose" size="small">取消</el-button>
                    </div>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "formBox",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
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
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
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
            }
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