<template>
    <div>
        <carousel/>
        <search/>
        <el-row :gutter="20">
            <el-col :span="20">
                <level @getlevel="getlevel"/>
                <region @getregion="getregion"/>
                <div class="hospital" v-if="hasHospitalArr.length>0">
                    <card class='item' v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item"/>
                </div>
                <el-empty v-else description="无匹配项" />
                <el-pagination
                    v-model:current-page="pageNo"
                    v-model:page-size="pageSize"
                    :page-sizes="[10, 20, 30, 40]"
                    :background=true
                    layout="sizes,total,  prev, pager, next, jumper"
                    :total="total"
                    @current-change="currentChange"
                    @size-change="sizeChange"
                    />
            </el-col>
            <el-col :span="4"><tip/></el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
 import carousel from './carousel/index.vue'
 import search from './search/index.vue'
 import level from './level/index.vue'
 import region from './region/index.vue'
 import card from './card/index.vue'
 import type {content,HospitalResponseData} from "@/api/home/type.ts"
 import {onMounted, ref} from 'vue';
 import {reqHospital} from '@/api/home'
 import tip from './tip/index.vue'
 let pageNo=ref<number>(1);
 let pageSize=ref<number>(10);
 let hostype=ref<string>('');
 let districtCode=ref<string>('');

onMounted(()=>{
    getHospitalInfo();
})

const hasHospitalArr=ref<content>([])
let total=ref<number>(0)

const currentChange=()=>{
    getHospitalInfo();
}

const getlevel=(level:string)=>{
    hostype.value=level;
    getHospitalInfo();
}

const getregion=(region:string)=>{
    districtCode.value=region;
    getHospitalInfo();
}

const sizeChange=()=>{
    pageNo.value=1;//element-plus会自动帮助归1，这边还是自己写一下
    getHospitalInfo();
}

const getHospitalInfo=async()=>{
    let result : HospitalResponseData = await reqHospital(pageNo.value,pageSize.value,hostype.value,districtCode.value);
    console.log(result);
    if(result.code==200){ 
        hasHospitalArr.value=result.data.content;
        total.value=result.data.totalElements;
    }
};


</script>

<style lang="scss" scoped>
.hospital{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    .item{
        width:48%;
        margin:10px 0;
    }
}
</style>