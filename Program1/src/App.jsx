import { useState } from "react"; 
import Registration from "./Components/Register Form/Registration";
import './App.css'
export default function App() { 
    const [count,setCount]=useState(0)  
  return ( 
    <Registration/>
  ) 
}
