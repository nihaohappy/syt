import {defineStore} from 'pinia'
import {reqHospitalDetail,reqHospitalDepartment} from '@/api/hospital/index.ts'
import { HospitalDetailResponse,HospitalDetail,HospitalDepartmentResponse, HospitalDepartmentArr } from '@/api/hospital/type'
import { HospitalInfo } from '../interface/index.ts'
export const useDetailStore = defineStore('Detail',{//返回的是一个函数
    state():HospitalInfo{
        return {
            hospitalInfo:({} as HospitalDetail),//一开始是空对象
            hospitalDepartment:({} as HospitalDepartmentArr)
        }
    },
    actions:{
        async getHospital(hoscode:string){
            let result:HospitalDetailResponse=await reqHospitalDetail(hoscode);
            console.log(result)
            if(result.code==200){
                console.log(result.data)
                this.hospitalInfo=result.data;
            }
        },
        async getHospitalDepartment(hoscode:string){
            let result:HospitalDepartmentResponse=await reqHospitalDepartment(hoscode);
            console.log(result)
            if(result.code==200){
                this.hospitalDepartment=result.data;
            } 
        }
    },
    getters:{

    }
}) 