<template>
    <el-header height="60px">
        <!-- Header content -->
        <div class="logo">elementUI</div>
        <div class="adminMsg">
            <div class="name"><span class="iconfont">&#xe608;</span>admin</div>
            <div class="out"><span class="iconfont">&#xe61b;</span>注销</div>
        </div>
    </el-header>
</template>

<script>
    export default {
        name: "w_header"
    }
</script>

<style lang="scss">
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
</style>