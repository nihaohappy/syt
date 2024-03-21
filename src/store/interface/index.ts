import {HospitalDetail,HospitalDepartmentArr} from '@/api/hospital/type.ts'
import {UserInfo} from '@/api/hospital/type'
export interface HospitalInfo{
    hospitalInfo:HospitalDetail
    hospitalDepartment:HospitalDepartmentArr
}

export interface userState{
    visiable:boolean,
    scene:number,
    code:string,
    userInfo:UserInfo
}