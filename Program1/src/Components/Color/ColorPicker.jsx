import { useState } from "react";

export default function ColorPicker(){
    const[color,setColor]=useState("bg-gray-300");

    return(
        <div className="flex flex-col items-center min-h-screen gap-6">
        <h2 className="text-2xl font-bold"> Simple Color Picker</h2>
       
        {/*color Box*/}
        <div className = {`w-48 h-48 round-xl ${color}`}></div>
       
        {/* Button*/}
        <div className="flex-gap-4">
            <button
                onClick={() => setColor("bg-red-500")}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
                Red
            </button>

             <button
                onClick={() => setColor("bg-blue-500")}
                className="px-4 py-2 bg-blue-500 text-shadow-white rounded-lg"
            >
                Blue
            </button>

             <button
                onClick={() => setColor("bg-green-500")}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
                Green
            </button>

        </div>
        </div>
    );
}