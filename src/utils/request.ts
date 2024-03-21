import axios from 'axios'
import { ElMessage } from 'element-plus';

const request=axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.request.use((config)=>{
    // config.headers.abc=112一般携带token，但是token是啥呢
    return config;
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    let status=error.response.status;
    switch(status){
        case 404:
            ElMessage({
                type:'error',
                message:error.message
            })
            break;
    }
    console.log(error);
    return Promise.reject(new Error(error));
})

export default request;