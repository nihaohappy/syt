import request from '@/utils/request.ts'
import { HospitalDetailResponse,HospitalDepartmentResponse, UserLoginResponceData } from './type';
enum API {
    HOSPITALDETAIL_URL='/hosp/hospital/',
    HOSPITALDEPARTMENT_URL='/hosp/hospital/department/',
    GETUSERCODE_URL='/sms/send/',
    USERLOGIN_URL='/user/login'
}

export const reqHospitalDetail=(hoscode:string)=>request.get<any,HospitalDetailResponse>(API.HOSPITALDETAIL_URL+hoscode);

export const reqHospitalDepartment=(hoscode:string)=>request.get<any,HospitalDepartmentResponse>(API.HOSPITALDEPARTMENT_URL+hoscode);

export const reqCode=(phone:string)=>request.get<any,any>(API.GETUSERCODE_URL+phone);

export const reqUserLogin=(data:any)=>request.post<any,UserLoginResponceData>(API.USERLOGIN_URL,data);