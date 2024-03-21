import request from "@/utils/request.ts"
import type {HospitalResponseData,HospitalLevelandRegionResponse,HospitalInfo} from "@/api/home/type.ts"
enum API{
    HOSPITAL_URL='/hosp/hospital/',
    HOSPITALLEVLEANDREGION_URL="/cmn/dict/findByDictCode/",
    HOSPITAL_INFO='/hosp/hospital/findByHosname/'
}
export const reqHospital=(page:number,limit:number,hostype='',districtCode='')=>request.get<any,HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);


export const reqLevelandRegion=(dictCode:string)=>{
    //外面不写花括号要，就默认有return，有的话，要返回值就要写return
    return request.get<any,HospitalLevelandRegionResponse>(API.HOSPITALLEVLEANDREGION_URL+`${dictCode}`)
}

export const reqHospitalInfo=(hosname:string)=>{
    return request.get<any,HospitalInfo>(API.HOSPITAL_INFO+`${hosname}`);
}