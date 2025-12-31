export default function ToDoCard() {
    return(
        <div>
            <h2>To-Do-List</h2>
            <input type="text" placeholder="Enter the Number" onKeyUp={(event)=>{setTask(event.target.value)}}></input>
            <button onClick={()=>{console.log(task)}}>Add</button>
            <div>No Task Yet...</div>
        </div>
    )
}