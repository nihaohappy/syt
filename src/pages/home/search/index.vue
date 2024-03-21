<template>
    <div class="search">
        <el-autocomplete
            
            clearable
            @select="getdetail"
            placeholder="请输入医院名称"
            v-model="hosname"
            :fetch-suggestions="fetchData"
        />
    
    <el-button type="primary" :icon="Search">搜索</el-button>
    </div>
</template>
<script setup lang="ts">
    import {Search} from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router';
    import {ref} from 'vue'
    import { reqHospitalInfo } from '@/api/home';
    import type { HospitalInfo, hospital } from '@/api/home/type';
    let hosname=ref<string>('')
    let router=useRouter();
    const getdetail=(item:hospital)=>{
        console.log(item)
        router.push({path:'/hospitals/register',query:{'hoscode':item.hoscode}})
    }

    const fetchData=async(keyWord:string,callback:any)=>{
        let result:HospitalInfo=await reqHospitalInfo(keyWord);
        console.log(result);
        if(result.code==200){
            let hosnameArr=result.data.map(item=>{
                return {
                    value:item.hosname,
                    hoscode:item.hoscode
                };
            })
            callback(hosnameArr);
        }
    }
//深度选择器：>>> /deep/ ::v-deep
</script>

<!-- <script lang="ts">
export default{
    name:'search'
}
</script> -->
<style scoped lang="scss">
.search{
    display:flex;
    height:50px;
    width:100%;
    justify-content: center;
    align-items: center;
    margin:10px 0;
    ::v-deep(.el-input__wrapper){
        width:600px;
        margin-right:10px;
    }
}
</style>