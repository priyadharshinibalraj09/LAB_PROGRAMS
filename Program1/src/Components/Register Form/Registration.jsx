
import { useState } from 'react';
import'./Registration.css';
export default function Registration() {
    const [fullname,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [submittedData,setSubmittedData]=useState({ fullname: '', email: '', password: '' });
    function handleForm(){
        
        setSubmittedData({ fullname: fullname, email: email, password: password })
        setName("")
        setEmail("")
        setPassword("")
    }

    return(
        <div className='bg-white px-6 py-12'>
            <h1>Registration form</h1>
            <div className='flex flex-col'>
            <label className='text-left'>name</label>
            <input type ="text" placeholder="Enter your name" value={fullname} onChange={(e)=> setName(e.target.value)}/> 
            </div>
            <div className='flex flex-col'>
            <label className='text-left'>email</label>
            <input type ="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/> 
            </div>
            <div className='flex flex-col'>
            <label className='text-left'>password</label>
            <input type ="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/> 
            </div>
            <button onClick={handleForm}>Submit</button>

            {submittedData.fullname && <div className='text-left border-1-6 border-green-600 rounded-2xl my-3 px-5 py-2 bg-emerald-200'>
                <h3>Submitted Data</h3>
                <p>Name: {submittedData.fullname}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: {submittedData.password}</p>
            </div>}
        </div>
    )
}
