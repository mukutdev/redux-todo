import { ADDTODO, ALLCOMPLETED, CLEARCOMPLETD, DELETETODO, SETCOLORS, TOOGLETODO } from "./actionType"

export const addTodo = todoText =>{
    return{
        type : ADDTODO,
        payload : todoText
    }
}
export const toggleTodo = todoId =>{
    return{
        type : TOOGLETODO,
        payload : todoId
    }
}
export const setColors = (todoId , color)=>{
    return{
        type : SETCOLORS,
        payload : {todoId , color}
    }
}
export const deleteTodo = todoId =>{
    return{
        type : DELETETODO,
        payload : todoId
    }
}
export const allCompleted = ()=>{
    return{
        type : ALLCOMPLETED,
    }
}
export const clearCompleted = ()=>{
    return{
        type : CLEARCOMPLETD,
    }
}

