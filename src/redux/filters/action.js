import { TOOGLECOLORS, TOOGLESTATUS } from "./actionType"

export const toogleStatus = status =>{
    return{
        type : TOOGLESTATUS,
        payload : status
    }
}
export const toogleColors = (color , changeType )=>{
    return{
        type : TOOGLECOLORS,
        payload : {color , changeType}
    }
}