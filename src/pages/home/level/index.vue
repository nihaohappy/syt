<template>
    <div class="level">
        <h1>医院等级</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital">
                <li :class="{active:activeflag==''}" @click="changelevel('')">全部</li>
                <li v-for="item in levelArr" :key="item.value" @click="changelevel(item.value)" :class="{active:activeflag==item.value}">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { HospitalLevelandRegionArr, HospitalLevelandRegionResponse } from '@/api/home/type.ts';
import { onMounted,ref } from 'vue';
import { reqLevelandRegion } from '@/api/home';

let levelArr=ref<HospitalLevelandRegionArr>([])

onMounted(()=>{
    getLevel();
})

let activeflag=ref<string>('');
let changelevel=(level:string)=>{
    activeflag.value=level;
    emits('getlevel',level);
}
const getLevel=async()=>{
    let result:HospitalLevelandRegionResponse=await reqLevelandRegion('hostype');
    console.log(result);
    if(result.code==200){
        levelArr.value=result.data;
    }
}
let emits=defineEmits(['getlevel']);
</script>
<script lang='ts'>//用vue2的方式给组件起名字，或者安装插件
export default {
    name:'Level'
}
</script>
<style scoped lang="scss">
.level{
    color: #f7f7f7;
    h1{
        
        font-weight: 900;
        margin:10px 0;
    }
    .content{
        display:flex;
        .hospital{
            display:flex;
            li{
                margin-right:10px;
                &.active{
                color:aqua;
                }
            }
            li:hover{
                color:aqua;
                cursor:pointer;
            }
        }
    }
}
</style>
