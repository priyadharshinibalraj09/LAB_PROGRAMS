import { useState } from "react";

export function Calculator() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");

    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;

    const addition = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number2 !==0 ? (number1/number2).toFixed(2) : "infinity";

    return (
        <div className="bg-white drop-shadow-xl rounded-2xl p-8 w-96">
            <h1 className="text-2xl font-bold text-center mb-6">
                Real-Time Calculator
            </h1>
            {/* Input*/}
            <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full mb-6 p-2 border rounded-lg"
            />

            <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full mb-6 p-2 border rounded-lg"
            />

            {/* Result */}
            <div className="space-y-2 text-lg">
                <p>+ addition: <span className="front-semibold">{addition}</span></p>
                <p>- subtraction: <span className="front-semibold">{subtraction}</span></p>
                <p>* multiplication: <span className="front-semibold">{multiplication}</span></p>
                <p>/ divition: <span className="front-semibold">{division}</span></p>
            </div>

        </div>
    )
}