export const SET_INFO=(userInfo:string)=>{
    localStorage.setItem('USERINFO',userInfo);
}

export const GET_INFO=()=>{
    return localStorage.getItem('USERINFO');
}