<template>
    <div class="buttom">
        <div class="content">
            <div class="left">
                你好你好你好
            </div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .buttom{
    width:100%;
    height:50px;
    background:#fff;
    display:flex;
    justify-content:center;
    .content{
        width:1200px;
        background:cyan;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .left{
            display:flex;
            justify-content: center;
            align-items: center;
            
        }
        .right{
            span{
                margin:0 5px;
            }
        }
    }
}
</style>