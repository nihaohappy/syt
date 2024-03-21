<template>
    <div class="region">
        <div class="content">
            <div class="left">
                地区:
            </div>
            <ul>
                <li :class="{active:activeflag==''}" @click="changeRegion('')">全部</li>
                <li v-for="item in regionArr" :key="item.value" @click="changeRegion(item.value)" :class="{active:activeflag==item.value}">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { reqLevelandRegion } from '@/api/home';
import type { HospitalLevelandRegionResponse,HospitalLevelandRegionArr } from '@/api/home/type.ts'
onMounted(()=>{
    getRegion();
})

let regionArr=ref<HospitalLevelandRegionArr>([])
let activeflag=ref<string>('')
const changeRegion=(region:string)=>{
    activeflag.value=region;
    emits('getregion',region);
}
const getRegion=async()=>{
    let result:HospitalLevelandRegionResponse=await reqLevelandRegion('beijin');
    console.log(result)
    if(result.code==200){
        regionArr.value=result.data;
    }
}

let emits=defineEmits(['getregion']);
</script>

<style lang="scss" scoped>
    .region{
        margin-top:10px;
        color:#f7f7f7;
        .content{
            display:flex;
            .left{
                margin-right:10px;
                width:60px;
            }
            ul{
                display:flex;
                flex-wrap:wrap;//这样就会换行了
                li{
                    margin-right:10px;
                    margin-bottom:10px;
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