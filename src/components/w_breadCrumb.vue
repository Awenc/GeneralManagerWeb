<template>
    <div class="myBreadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="item.title" :to="{ path: item.path }">
                <router-link :to="item.path">{{item.title}}</router-link></el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    import asideData from "../config/json/asideNacConf"
    export default {
        name: "w_breadCrumb",
        data(){
            return {
                breadCrumbList:[
                    {
                        title:'首页',
                        path:"/adminCenter/homePage"
                    }
                ],
                navData:{},
            }
        },
        // props:['navData'],
        mounted(){
            this.navData=asideData;
            console.log("=========当前路由=========");
            console.log(this.$route.path);
            // console.log(this.navData);
            this.toSetBreadCrumbList(this.$route.path);
        },
        methods:{
            toSetBreadCrumbList(url){
                if(url == '/adminCenter/homePage'){
                    this.breadCrumbList=[

                    ]
                }else{
                    this.breadCrumbList=[
                        {
                            title:'首页',
                            path:"/adminCenter/homePage"
                        }
                    ]
                }

                console.log(this.navData.asideList);
                for(let item of this.navData.asideList){
                    if(item.path == url && item.path !=''){
                        console.log("11111");
                        this.breadCrumbList.push({
                            title:item.title,
                            path:item.path,
                        })
                    }else{
                        for(let i of item.child){
                            console.log("22222");
                            if(i.path == url){
                                //添加上一级父元素
                                this.breadCrumbList.push({
                                    title:item.title,
                                    path:i.path,
                                });
                                //添加当前
                                this.breadCrumbList.push({
                                    title:i.title,
                                    path:i.path,
                                });
                            }
                        }
                    }
                }
                console.log(this.breadCrumbList);
            },
        },
        computed:{

        },
        watch:{
            $route(to,from){
                this.toSetBreadCrumbList(to.path);
            }
        },
    }
</script>

<style lang="scss">
    .myBreadCrumb{
        /*position: absolute;*/
        /*top:0;*/
        width:100%;
        height:40px;
        /*line-height: 40px;*/
        /*border:1px solid black;*/
        display: flex;
        align-items: center;
        /*padding-left:60px;*/
    }
</style>