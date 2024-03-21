<template>

    <div class="detail">
        <div class="top">
            <div class="name">{{ detailStore.hospitalInfo.hospital?.hosname }}</div>
            <div class="level">
                <svg t="1710295271375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4260" fill="#d81e06"></path></svg>
                <span>{{ detailStore.hospitalInfo.hospital?.param.hostypeString }}</span>
            </div>
        </div>
        <div class="logo">
            <div class="left">
                <img :src="`data:image/jpeg;base64,`+detailStore.hospitalInfo.hospital?.logoData" alt="">
            </div>
            <div class="right">
                <div class="address">
                    <svg t="1710316127964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5660" width="16" height="16"><path d="M512 828.3c-12 0-24-4-33.7-11.8-64.4-42.1-120.4-94.7-166.6-156.3-42.9-56-66.9-123.1-69.4-193.9v-1.7c0.2-72.1 28.5-139.7 79.6-190.5 51.1-50.7 119.7-79.4 191-78.4 72 0.2 139.7 28.5 190.5 79.6 50.8 51.1 78.6 118.9 78.4 191 0 0.6 0 4-0.1 4.6-7.6 94.9-49.8 183.4-118.6 249-34.7 36.1-74.4 68.8-117.2 96.6-9.9 7.9-21.9 11.8-33.9 11.8zM290.3 464.7v0.7c2.1 59.9 22.7 117.5 59.7 165.8 43.2 57.7 95.5 106.7 155.7 145.8 0.9 0.6 1.8 1.3 2.6 2 2.2 1.8 5.3 1.8 7.5 0 0.8-0.7 1.7-1.4 2.7-2 40.2-26 77.4-56.6 110.6-91.1 61.1-58.2 98-135.7 104.7-218.8 0.1-60.2-22.8-115.9-64.5-157.9S572 244 512.7 243.8h-0.7c-58.9 0-114.4 22.9-156.2 64.4-42.1 41.7-65.3 97.3-65.5 156.5z" fill="#200E32" p-id="5661"></path><path d="M512 572.1c-56.7 0-102.7-46.1-102.7-102.7S455.4 366.7 512 366.7s102.7 46.1 102.7 102.7-46 102.7-102.7 102.7z m0-157.5c-30.2 0-54.7 24.6-54.7 54.7S481.9 524 512 524s54.7-24.6 54.7-54.7-24.5-54.7-54.7-54.7z" fill="#200E32" opacity=".4" p-id="5662"></path></svg>
                    <span>具体位置：{{ detailStore.hospitalInfo.hospital?.param.fullAddress }}</span>
                </div>
                <div class="route">
                    规划路线：{{ detailStore.hospitalInfo.hospital?.route }}
                </div>
            </div>
        </div>
        <div class="footer">
            <h1>医院介绍</h1>
            <p>{{ detailStore.hospitalInfo.hospital?.intro }}</p>
        </div>
        <div class="department">
            <div class="leftNav">123</div>
            <div class="rightDepartment"></div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {useDetailStore} from '@/store/modules/hospitalDetail'
const detailStore=useDetailStore();

</script>

<style lang="scss" scoped>
.detail{
    .top{
        display:flex;
        align-items:center;
        .name{
            font-size:30px;
            font-weight:900;
        }
        .level{
            color:grey;
            margin-left:10px;
            span{
                margin-left:10px;
            }
        }
    }
    .logo{
        display:flex;
        margin:10px 0;
        .left{
            img{
            width:80px;
            height:80px;
            border-radius:50%;
            }
        }
        .right{
            color:gray;
            margin-top:10px;
            div{
                margin:10px 0;

            }
        }
    }
    .footer{
        color:gray;
        p{
            line-height: 30px;
            margin-top:10px;
        }
    }
    .department{
        width:100%;
        height:500px;
        background:red;
    }
}
</style>