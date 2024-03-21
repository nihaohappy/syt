<template>
    <div>
        <span>获取验证码({{time}}s)</span>
    </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue';
const flag=defineProps(['flag'])
let time=ref<number>(5);
watch(()=>flag,
()=>{
    let timer=setInterval(()=>{
        time.value--;
        if(time.value==0){
            clearInterval(timer);
            emitor('getflag',false);
        }
    },1000)
},{
    immediate:true//上来就调用一次
});

let emitor=defineEmits(['getflag'])
</script>

<style lang="scss" scoped>

</style>