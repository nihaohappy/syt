<template>
    <div class="card">
        <el-card style="max-width: 480px" shadow="hover" @click="godetail">
            <div class="content">
                <div class="left">
                    <div  lass="hostital_name">
                        {{ hospitalInfo.hosname }}
                    </div>
                    <div class="tip">
                        <div class="level">
                            <svg t="1709734976779" class="icon" viewBox="0 0 1070 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4343" width="16" height="16"><path d="M754.196078 934.901961H197.019608l-3.764706-1.254902c-2.509804-1.254902-55.215686-27.607843-51.45098-124.235294 3.764706-84.078431 0-325.019608 0-327.529412 0-28.862745 15.058824-84.078431 65.254902-84.078431 2.509804 0 244.705882-1.254902 261.019607-128 15.058824-119.215686 28.862745-190.745098 94.117647-190.745098h18.82353c35.137255-3.764706 65.254902-3.764706 94.117647 25.098039s55.215686 66.509804 55.215686 146.823529c0 43.921569-6.27451 77.803922-12.549019 99.137255H803.137255c2.509804 0 57.72549 2.509804 94.117647 43.921569 23.843137 27.607843 33.882353 65.254902 28.862745 111.686274-12.54902 130.509804-42.666667 317.490196-42.666667 320l-1.254902 5.019608c-1.254902 3.764706-43.921569 104.156863-128 104.156863z m-547.137254-37.647059h547.137254c52.705882 0 87.843137-67.764706 94.117647-80.313726 3.764706-22.588235 30.117647-194.509804 42.666667-314.980392 3.764706-35.137255-3.764706-62.745098-20.078431-82.823529-25.098039-30.117647-66.509804-31.372549-67.764706-31.372549H663.843137l11.294118-26.352941s18.823529-43.921569 18.823529-110.431373c0-70.27451-22.588235-99.137255-43.921568-119.215686-16.313725-16.313725-32.627451-17.568627-66.509804-16.313726H564.705882c-25.098039 0-40.156863 23.843137-56.470588 158.117647-20.078431 159.372549-286.117647 160.627451-297.411765 160.627451-26.352941 0-27.607843 43.921569-27.607843 46.431373 0 13.803922 3.764706 245.960784 0 330.039216-5.019608 57.72549 16.313725 80.313725 23.843138 86.588235z" fill="#0B3155" p-id="4344"></path></svg>
                            <span>{{ hospitalInfo.param?.hostypeString }}</span>
                        </div>
                        <div class="time">
                            <svg t="1709735068473" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5498" width="16" height="16"><path d="M426.666667 183.466667V128h170.666666v55.466667c149.333333 38.4 256 170.666667 256 328.533333 0 187.733333-153.6 341.333333-341.333333 341.333333s-341.333333-153.6-341.333333-341.333333c0-157.866667 106.666667-294.4 256-328.533333zM512 768c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m110.933333-426.666667L682.666667 401.066667 529.066667 554.666667 469.333333 494.933333 622.933333 341.333333z" fill="#444444" p-id="5499"></path></svg>
                            <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt=""/>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';
const {hospitalInfo}=defineProps(['hospitalInfo'])

let router=useRouter();
const godetail=()=>{
    router.push({path:'/hospitals/register',query:{hoscode:hospitalInfo.hoscode}})
}
</script>

<style scoped lang="scss">
.content{
    display:flex;
    justify-content:space-between;
    .right{
        img{
            height:50px;
            width:50px;
        }
    }
    .left{
        width:60%;
        .tip{
            color:grey;
            margin-top:20px;
            display:flex;
            justify-content:space-between;
            .level{
                display:flex;
                align-items:center;
                span{
                    margin-left:5px;
                }
            }
            .time{
                display:flex;
                align-items:center;
                span{
                    margin-left:5px;
                }
            }
        }
    }
}
</style>