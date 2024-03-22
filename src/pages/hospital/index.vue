<template>
    <div class="hospital">
        
        <div class="menu">
            <div class="top">
            <el-icon><HomeFilled /></el-icon>
            <span>/医院信息</span>
        </div>
            <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospitals/register" @click="changeActive('/hospitals/register')">
          <el-icon><IconMenu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospitals/detail" @click="changeActive('/hospitals/detail')">
          <el-icon><Document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospitals/notice" @click="changeActive('/hospitals/notice')">
          <el-icon><Setting /></el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="/hospitals/close" @click="changeActive('/hospitals/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊消息</span>
        </el-menu-item>
        <el-menu-item index="/hospitals/search" @click="changeActive('/hospitals/search')">
            <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
        </div>
        <div class="content">
            <RouterView/>
        </div>
    </div>
    <Login v-if="userStore.visiable"/>
</template>

<script setup lang="ts">
import {
    InfoFilled,
    Document,
  Menu as IconMenu,
  Search,
  HomeFilled,
  Setting
} from '@element-plus/icons-vue'
import {useUserStore} from '@/store/modules/user.ts';
import {useDetailStore} from '@/store/modules/hospitalDetail.ts';
import { onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const detailStore=useDetailStore();
const userStore=useUserStore();
const router=useRouter();
const route=useRoute();
onMounted(async()=>{
  detailStore.getHospital(route.query.hoscode as string);
  detailStore.getHospitalDepartment(route.query.hoscode as string);
  console.log('@@@',detailStore.hospitalDepartment);
})
const changeActive=(path:string)=>{
  router.push({path,query:{hoscode:route.query.hoscode}});
  console.log(route.path);
}
</script>

<style scoped lang="scss">
.hospital{
    display:flex;
    .menu{
        flex:2;
        display:flex;
        flex-direction: column;
        align-items: center;
        .top{
            color:gray;
        }
    }
    .content{
        flex:8;
    }
}
</style>
