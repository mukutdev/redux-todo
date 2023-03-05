import { ADDTODO, ALLCOMPLETED, CLEARCOMPLETD, DELETETODO, SETCOLORS, TOOGLETODO } from "./actionType";
import intialState from "./intialState";



const nextTodoId = todos =>{
    const maxId = todos.reduce((maxId , todo) => Math.max(maxId , todo.id) , -1)
    return maxId + 1
}

const todoReducer = (state = intialState , action)=>{

    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id : nextTodoId(state),
                    todoText : action.payload,
                    completed : false
                }
            ]
        
        case TOOGLETODO:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }
                return {
                        ...todo,
                        completed : !todo.completed
                    }
             
            })
        case SETCOLORS:
            const {todoId , color} = action.payload
            return state.map(todo =>{
                if(todo.id !== todoId){
                    return todo
                }
                return {
                    ...todo,
                    color : color
                }
            })
        case DELETETODO:
            return state.filter(todo => todo.id !== action.payload);
        
        case ALLCOMPLETED:
            return state.map(todo => {
                return{
                    ...todo,
                    completed : true
                }
            })    
        
        case CLEARCOMPLETD:
            return state.filter(todo => !todo.completed )
         
            
        default:
            return state;
    }

}

export default todoReducer;