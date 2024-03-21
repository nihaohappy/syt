export interface ResponseData{
    "code": number,
    "message": string,
    "ok": boolean
}

export interface HospitalDetail{
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
      },
      "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
          "hostypeString": string,
          "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": boolean,
        "route": string,
        "status": number,
        "bookingRule": boolean
      }
}

export interface HospitalDetailResponse extends ResponseData{
    data:HospitalDetail
}

export interface HospitalDepartment {
  depcode: string,
  depname: string,
  children?: HospitalDepartment[]
}

export type HospitalDepartmentArr=HospitalDepartment[];

export interface HospitalDepartmentResponse extends ResponseData{
  data:HospitalDepartmentArr
}

export interface loginData{
  phone:string,
  code:string,
}

export interface UserInfo{
  name:string,
  token:string
}

export interface UserLoginResponceData extends ResponseData{
  data:UserInfo
}