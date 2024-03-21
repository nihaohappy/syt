<template>
    <div class="close">
        <h1>{{ detailStore.hospitalInfo.hospital?.hosname }}听诊信息</h1>
        <el-empty description="暂无信息" />
    </div>
</template>

<script setup lang="ts">
    import { useDetailStore } from '@/store/modules/hospitalDetail';
const detailStore = useDetailStore();

</script>

<style lang="scss" scoped>
.close{
    h1{
        text-align: center;
        font-size:30px;
    }
}
</style>