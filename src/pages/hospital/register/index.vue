<template>
    <div class="register">
        <div class="top">
            <div class="title">{{ detailStore.hospitalInfo.hospital?.hosname }}</div>
            <div class="level">
                <svg t="1710295271375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4260" fill="#d81e06"></path></svg>    
                <span>{{ detailStore.hospitalInfo.hospital?.param.hostypeString }}</span>
            </div>
        </div>    
        <div class="content">
            <div class="left">
                <img :src="`data:image/jpeg;base64,`+detailStore.hospitalInfo.hospital?.logoData" alt="">
            </div>
            <div class="right">
                <div>挂号规则</div>
                <div class="time">
                    预约周期:{{ detailStore.hospitalInfo.bookingRule?.cycle }}天
                    放号时间:{{ detailStore.hospitalInfo.bookingRule?.releaseTime }}
                    停挂时间:{{ detailStore.hospitalInfo.bookingRule?.stopTime }}
                </div>
                <div class="address">
                    具体地址:{{ detailStore.hospitalInfo.hospital?.param.fullAddress }}
                </div>
                <div class="route">
                    规划路线:{{ detailStore.hospitalInfo.hospital?.route }}
                </div>
                
                <div class="releasetime">
                    退号时间:就诊前一工作日{{ detailStore.hospitalInfo.bookingRule?.quitTime }}前取消
                </div>
                <div class="rule">医院预约规则</div>
                <div class="ruleInfo" v-for="item in detailStore.hospitalInfo.bookingRule?.rule">
                    {{ item }}
                </div>
            </div>
        </div> 
        <div class="department">
            <div class="leftNav">
                <ul>
                    <li v-for="(item,index) in detailStore.hospitalDepartment" :key="item.depcode" :class="{active:index==currentindex}" @click="changeIndex(index)">{{ item.depname }}</li>
                </ul>
            </div>
            <div class="rightDepartment">
                <div class="showdepartment" v-for="(department,index) in detailStore.hospitalDepartment" :key="department.depcode" :class="{active:index==currentindex}">
                   <h1 class="cur">{{ department.depname }}</h1>
                   <ul>
                    <li v-for="item in department.children" :key="item.depcode" @click="showLogin">{{ item.depname }}</li>
                   </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useDetailStore} from '@/store/modules/hospitalDetail.ts'
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user.ts';  
const detailStore=useDetailStore();
const userStore=useUserStore();
const changeIndex=(index:number)=>{
    currentindex.value=index;
    let allH1=document.querySelectorAll('.cur');
    allH1[currentindex.value].scrollIntoView({
        behavior:'smooth',
        block:'start'
    });
}
let currentindex=ref<number>(0);

const showLogin=()=>{
    userStore.visiable=true;
}
</script>

<style lang="scss" scoped>
    .register{
        .top{
            display:flex;
            .title{
                font-size:30px;
            }
            .level{
                color:gray;
                margin-left :10px;
                height:40px;
                text-align:center;
                line-height:40px;
                span{
                    margin-left:5px; 
                }
            }
        }
        .content{
            display:flex; 
            .left{
                width:80px;
                img{
                    width:80px;
                    height:80px;
                    border-radius:50%;
                }
            }
            .right{
                flex:1;
                font-size:14px;
                margin-left:20px;
                .time,.address,.route,.releasetime,.ruleInfo{
                    margin-top:10px;
                    color:gray;
                }
                .rule{
                    margin:10px 0;
                }
            }    
        }  
        .department{
            width:100%;
            height:500px;
            display:flex;
            margin-top:20px;
            .leftNav{
                width:80px;
                height:100%;
                ul{
                    width:100%;
                    height:100%;
                    background:rgb(248,248,248);
                    display:flex;
                    flex-direction:column;
                    li{
                        flex:1;
                        text-align:center;
                        color:gray;
                        font-size:14px;
                        line-height:30px;
                        &.active{
                            color:red;
                            border-left: 1px solid red;
                            background:white;
                        }
                    };
                }
            }
            .rightDepartment{
                flex:1;
                margin-left:20px;
                height:100%;
                overflow: auto;
                &::-webkit-scrollbar{
                    display: none;
                }
                .showdepartment{
                    h1{
                        background:rgb(248,248,248);
                        color:gray;
                    }
                    ul{
                        display:flex;
                        flex-wrap:wrap;
                        li{
                            width:33%;
                            color:gray;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }
</style>