<template>
  <div class="userLoginAndReg">

    <!--//用户登录框-->
    <transition name="el-fade-in">
      <div class="userLoginBox" v-show ="showLoginBox">
        <el-row type="flex" justify="center" v-show="true"  >
          <el-col :span="12"  :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
              <div class="userLogin transition-box" >
                <div class="tit">UserLogin</div>
                <el-input  class="myinput" v-model="username" placeholder="账号" ></el-input>
                <el-input  class="myinput" type="password" v-model="password" placeholder="密码"></el-input>
                <el-row type="flex" justify="center">
                  <el-col :span="12"  >
                    <el-button class="mybtn" type="primary" plain @click="userLogin">登录</el-button>
                  </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                  <el-col :span="12"  >
                    <el-button class="mybtn" type="success" plain @click="toReg">注册</el-button>
                  </el-col>
                </el-row>
              </div>
          </el-col>
        </el-row>
      </div>
    </transition>
    <!--//用户注册框-->
    <div class="userRegBox" :class="{regShow:showRegBox}">
      <div class="tit">UserRegister</div>
      <el-input  class="myinput" v-model="regUserName" placeholder="账号" @focus="EXP('这是账号的要求')"></el-input>
      <el-input  class="myinput" type="password" v-model="regPassword" placeholder="密码" @focus="EXP('请输入密码')"></el-input>
      <el-input  class="myinput" type="password" v-model="regPasswordSure" placeholder="确认密码" @focus="EXP('请确认密码')"></el-input>
      <el-row type="flex" justify="center">
        <el-col :span="19">
          <el-button class="myRegbtn" type="danger" plain @click="userReg">点击注册</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="19">
          <el-button class="myRegbtn" type="primary" plain @click="toLogin">返回登录</el-button>
        </el-col>
      </el-row>
    </div>
    <!--注册信息提示框-->
    <div class="regText" v-show="showRegBox">
      <div  :class="{regErr:isRegErr,regSuc:isRegSuc,nowFocas:isFocus}">{{RegRule}}</div>
    </div>
  </div>
</template>
<script>
  export  default {
    name:"loginAndRegist",
    data(){
      return {
        username:'',   //登录账号
        password:'',  //登录密码
        showLoginBox:true,
        showRegBox:false,
        regUserName:'' , //注册账号
        regPassword:'',//注册密码
        regPasswordSure:'', //确认密码
        RegRule:'', //注册要求
        isRegErr:false,
        isRegSuc:false,
        isFocus:true
      }
    },
    methods:{
      userReg(){
        //用户注册
        let  regOption={
          'username':this.regUserName,
          'password':this.regPassword
        }
        this.$http.post("/api/users/userReg",regOption).then(res=>{
          if(res.data.state == 200){
            this.$message({
              message: '注册成功',
              type: 'success'
            });
          }else{
            this.$message.error('注册失败哦');
          }
        })

      },
      userLogin(){
        this.$router.push('/adminCenter')
        if(this.username !="" && this.password != ""){
          let obj={
            'username':this.username,
            'password':this.password
          }
          this.$http.post("/api/users/userLogin",obj).then(res=>{
            if(res.data.code == 200){
                //跳转到主页面
              this.$router.push("/usercenter")
              // window.location.href="http://sizhuagame.th-yc.com/?openid=112848259956f66c24b7108dbcc1c95548271f57d38c0e2f61a9a39bb904b4ab";
            }else if(res.data.code == 300){
              this.$message.error('账号密码错误');
            }else{
              this.$message.error('服务器发生错误');
            }
          })
        }else{
          this.$message.error('请输入正确的账号密码');
        }

      },
      toLogin(){
        this.showLoginBox=true;
        this.showRegBox=false;
      },
      toReg(){
        this.showLoginBox=false;
        this.showRegBox=true;
        this.RegRule="欢迎注册"
      },
      EXP(txt){
        //账号限制要求
        this.RegRule=txt;
        this.isFocus=true;
        this.isRegErr=false;
        this.isRegSuc=false;
      }
    },
    watch:{
      regUserName(newValue,oldValue){
        if(newValue !=""){
          this.$http.get("/api/users/checkUserName",{
            params:{
              username: newValue,
            }
          }).then(res=>{
            if(res.data.code == 200){
              this.RegRule="大兄弟，这个账号可以注册";
              this.isRegErr=false;
              this.isRegSuc=true;
              this.isFocus=false;
            }else{
              this.RegRule="兄弟你来晚了，这个账号已经被注册了";
              this.isRegErr=true;
              this.isRegSuc=false;
              this.isFocus=false;
            }
          })
        }else{
          this.RegRule="请填写账号";
          this.isRegErr=false;
          this.isRegSuc=false;
          this.isFocus=true;
        }
      },
      regPassword(newValue,oldValue){
        //密码要求
          if(newValue != ""){
            this.RegRule="密码可用";
            this.isRegErr=false;
            this.isRegSuc=true;
            this.isFocus=false;
          }
      },
      regPasswordSure(newValue,oldValue){
        //确认密码要求
        if(newValue != this.regPassword){
          this.RegRule="两次密码不一样哦";
        }else{
          this.RegRule="确认密码成功";
        }
      }
    },
  }
</script>
<style>
  .userLoginAndReg{
    width:100%;
    height:100%;
    background: url("../assets/img/2.jpg") no-repeat;
    background-size:100%;
  }
  .userLoginBox{
    display: flex;
    flex-direction:column;
  }
  .userLogin{
    height:300px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border-radius:4px;
    display: flex;
    flex-direction:column;
    margin-top:50%;
    top:-150px;
  }
  .tit{
    width: 100%;
    text-align: center;
    font-size:22px;
    padding-top:10px;
    padding-bottom:10px;
    color:#fff;
  }
  .userLogin .myinput{
    width:50%;
    margin:10px auto;
  }
  .mybtn{
    width:100%;
    margin-top:5px;
  }

  @keyframes regShow {
    0%{
      right:-300px;
    }
    100%{
      right:0;
    }
  }
  .regShow{
    animation: regShow 0.3s;
    animation-fill-mode:forwards;
  }
  .userRegBox{
    position:absolute;
    width:400px;
    height:100%;
    top:0;
    right:-400px;
    /*background: red;*/
    display: flex;
    background: rgba(0,0,0,0.1);
    box-shadow: 0 0 10px #fff;
    flex-direction:column;
    justify-content: center;
  }
  .userRegBox .myinput{
    width:80%;
    margin:10px auto;
  }
  .myRegbtn{
    width:100%;
    margin:5px auto;
  }
  .regText{
    position: absolute;
    width:80%;
    height:100%;
    /*background: red;*/
    top:0;
    right:300px;
    display: flex;
      justify-content: center;
      align-items: center;
  }
  .regText .nowFocas{
    font-size:30px;
    color:#fff;
  }
  .regErr{
    font-size:30px;
    color:red;
  }
  .regSuc{
    font-size:30px;
    color:green;
    text-align: center;
  }
</style>
