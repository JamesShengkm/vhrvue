###前后台交互采用axios进行对响应拦截进行处理

api.js.
 
    响应拦截.
 
    axios.interceptors.response.use( success => {
 
        .....
 
    } ,error =>{
    
        .....
    }
    
###菜单项数据加载成功之后，在前端有几个可以存放的地方：

1.sessionStorage

2.localStorage 

3.vuex
###后台菜单渲染 menu.js vuex

递归调用的方式进行对component 赋值




