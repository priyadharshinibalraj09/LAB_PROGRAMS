import { useEffect, useState } from "react";

export default function() {
    const[users,setUsers]=useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    },[]);

    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
                <h1 className="text-2xl front-bold text-center mb-6">
                    User List
                </h1>

                {users.map((user) =>(
                    <div
                      key={user.id}
                      className="p-3 mb-3 border rounded-lg"
                      >
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    
}