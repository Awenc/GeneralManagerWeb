## 表格表头的配置

    eg：
    "tableTit":[
    
        {
          "name":"姓名",   //表头的名字
          "icon":"",      //表头的图表
          "width":"",     //表头的宽度
          "minWidth":"100",   //表头的最小宽度
          "data":"name"    //表头所对应的数据 字段  
          /* 
           // 获取的数据  根据表头的data:"name" 将自动将数据中的"name": "王小虎",渲染到界面中
            {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄",
                "sex":"男",
                "age":"20"
              }*/
        },
        {
          "name":"性别",
          "icon":"",
          "width":"",
          "minWidth":"50",
          "data":"sex"
        },
     ]
*** 
### table_two 下拉表格 注意点

#### -table_two_header.json

* .masData[] 下拉时 需要展示哪些信息 
    
        eg:
        "msgData":[
            {
              "name":"商品名称",
              "data":"name"
            },
            {
              "name":"所属店铺",
              "data":"shop"
            },
            .....
            //"name":"商品名称", label名称
            //"data":"name"  , 所对应数据中对应的数据
        