export default function ToDoCard() {
     const [tasks, setTasks] = useState([]);       // list of task objects 
  const [text, setText] = useState("");         // controlled input 
  const addTask = (e) => { 
    e.preventDefault(); 
    const trimmed = text.trim(); 
    if (!trimmed) return;                       // ignore empty 
    const newTask = { 
      id: Date.now(), 
      text: trimmed, 
      completed: false, 
    }; 
    setTasks([newTask, ...tasks]);              // add to front 
    setText(""); 
  }; 
  const deleteTask = (id) => { 
    setTasks(tasks.filter((t) => t.id !== id)); 
  }; 
  const toggleTask = (id) => { 
    setTasks( 
      tasks.map((t) => 
        t.id === id ? { ...t, completed: !t.completed } : t 
      ) 
    ); 
  }; 
    return(
            <div className="app"> 
      <h1>To-Do List</h1> 
      <form onSubmit={addTask} className="task-form"> 
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter new task" 
          aria-label="Task" 
        /> 
        <button type="submit">Add</button> 
      </form> 
      <ul className="task-list"> 
        {tasks.length === 0 && <li className="empty">No tasks yet</li>} 
        {tasks.map((task) => ( 
          <li key={task.id} className="task-item"> 
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(task.id)} 
            /> 
            <span 
              onClick={() => toggleTask(task.id)} 
              className={task.completed ? "done" : ""} 
            > 
              {task.text} 
            </span> 
            <button className="delete" onClick={() => deleteTask(task.id)}> 
              Delete 
            </button> 
          </li> 
        ))} 
      </ul> 
    </div> 
    )
}