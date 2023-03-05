import { useDispatch, useSelector } from "react-redux";
import { toogleColors, toogleStatus } from "../redux/filters/action";


const remainingTaskNumber = (no_of_todo)=>{
    switch (no_of_todo) {
        case 0:
            return "No task"
        case 1:
            return "1 task"
        default:
            return `${no_of_todo} tasks`
    }
}


export default function Footer() {

    const todos = useSelector((state)=> state.todos)
    const filters = useSelector((state)=> state.filters)
    const {status , colors} = filters
    console.log(filters)
    const dispatch = useDispatch()
    const remainingTask = todos.filter(todo => !todo.completed).length

    
    const handleStatusChanged = (status)=>{
        dispatch(toogleStatus(status))
    }

    const handleColorChanged = (color)=>{
        if(colors.includes(color)){
            dispatch(toogleColors(color , "removed"))
        }else{
            dispatch(toogleColors(color , "added"))
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p> {remainingTaskNumber(remainingTask)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={()=>handleStatusChanged("All")} className={`cursor-pointer ${status === "All" && 'font-bold'}`}>All</li>
                <li>|</li>
                <li  onClick={()=>handleStatusChanged("Incomplete")} className={`cursor-pointer ${status === "Incomplete" && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li  onClick={()=>handleStatusChanged("Complete")} className={`cursor-pointer ${status === "Complete" && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={()=>handleColorChanged('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`}></li>
                <li onClick={()=>handleColorChanged('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}></li>
                <li onClick={()=>handleColorChanged('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}></li>
            </ul>
        </div>
    );
}
