<template>
  <div class="container">
    <HospitalTop/>
  <div class="content">
    
    <RouterView></RouterView>
    <!-- 直接写，不用引入 -->
  </div>
    <HospitalBottom/>
  </div>
</template>

<script setup lang="ts">
// import request from '@/utils/request';
// import { onMounted } from 'vue';
// onMounted(()=>{
//   //@ts-ignore
//   request.get('/hosp/hospital/1/10').then((res)=>{
//     console.log('展示',res);
//   })
// })
</script>

<style scoped lang="scss">
  .container{
    display:flex;
    flex-direction: column;
    align-items: center;
    .content{
      margin-top: 70px;
      background:pink;
      width:1200px;
      min-height:700px;
      
    }
    
  }
</style>