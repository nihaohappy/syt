export const SET_INFO=(userInfo:string)=>{
    localStorage.setItem('USERINFO',userInfo);
}

export const GET_INFO=()=>{
    return localStorage.getItem('USERINFO');
}

export const REMOVE_TOKEN=()=>{
    localStorage.removeItem('USERINFO');
}
