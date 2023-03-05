import { TOOGLECOLORS, TOOGLESTATUS } from "./actionType";
import initialState from "./initialState";

const filterReducer = (state = initialState , action)=>{
    switch (action.type) {
        case TOOGLESTATUS:
            return {
                ...state,
                status : action.payload
            }
        case TOOGLECOLORS:
            const {color , changeType} = action.payload
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors : [...state.colors , color]
                    }
                    
                 case "removed":
                 return {
                    ...state,
                    colors : state.colors.filter(exColor => exColor !== color)
                 }   
                default:
                    return state;
            }    

    
        default:
            return state;
    }
}

export default filterReducer;