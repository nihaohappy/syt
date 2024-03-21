export interface ResponseData{
    "code":number,
    "message":string,
    "ok":boolean
}

export interface hospital{
    "id":string,
    'createTime':string,
    'updateTime':string,
    isDeleted:number,
    param:{
        hostypeString:string,
        fullAddress:string
    },
    hoscode:string,
    hosname:string,
    hostype:string,
    provinceCode:string,
    cityCode:string,
    districtCode:string,
    address:string,
    logoData:string,
    intro:boolean,
    status:number,
    bookingRule:{
        cycle:number,
        releaseTime:string,
        stopTime:string,
        quitDay:number,
        quitTime:string,
        rule:string[]
    }
}

export type content=hospital[];

export interface HospitalResponseData extends ResponseData{
    data:{
        content:content,
        pageable:{
            sort:{
                sorted:boolean,
                unsorted:boolean,
                empty:boolean
            }
            pageNumber:number,
            pageSize:number,
            offset:number,
            paged:boolean,
            unpaged:boolean
        }
        totalPages:number,
        totalElements:number,
        last:boolean,
        first:boolean,
        sort:{
            sorted:boolean,
            unsorted:boolean,
            empty:boolean
        },
        numberOfElements:number,
        size:number,
        number:number,
        empty:boolean
    }
}

//下面是代表医院等级和地区数据的ts类型
export interface HospitalLevelandRegion{
    "id": number,
      "createTime": string,
      "updateTime": string,
      "isDeleted": number,
      "param": object,
      "parentId": number,
      "name":string,
      "value": string,
      "dictCode": string,
      "hasChildren": boolean
}
//type相当于用直接用等于写接口
export type HospitalLevelandRegionArr=HospitalLevelandRegion[]

export interface HospitalLevelandRegionResponse extends ResponseData{
    data:HospitalLevelandRegionArr
}

export interface HospitalInfo extends ResponseData{
    data:content
}