import {defineStore} from 'pinia'
import { reqCode,reqUserLogin } from '@/api/hospital';
import type {loginData,UserLoginResponceData,UserInfo} from '@/api/hospital/type';
import type {userState} from '../interface/index'
import { GET_INFO,SET_INFO,REMOVE_TOKEN } from '@/utils/user';
export const useUserStore=defineStore('User',{
    state():userState {
        return {
            visiable:false,
            scene:0,
            code:'',
            userInfo:JSON.parse(GET_INFO() as string)||({} as UserInfo)
        }
    },
    actions:{
        changeScene(){
            this.scene=1;
        },
        async getCode(phone:string){
            let result=await reqCode(phone)
            
            if(result.code==200){
                this.code=result.data;
                return 'ok';
            }
            else{
                return Promise.reject(new Error(result.message));
            }
        },
        async userLogin(loginData:loginData){
            // console.log(loginData);
            let result:UserLoginResponceData=await reqUserLogin(loginData)
            if(result.code==200){
                this.userInfo=result.data;
                SET_INFO(JSON.stringify(result.data))
                return 'ok';
            }else{
                return Promise.reject(new Error(result.message));
            }
            
        },
        logout(){
            this.userInfo={name:'',token:''};
            REMOVE_TOKEN();
        }
    },
    getters:{

    }
})
