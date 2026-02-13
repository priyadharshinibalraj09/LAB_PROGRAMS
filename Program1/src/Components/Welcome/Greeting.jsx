import {useState,useEffect} from "reat";
export default function Greeting(){
    const [Greeting,setGreeting] = useState("");
    const [time,setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            const hour = now.getHours();
            const min = now.getMinutes().toString().padStart(2, "0");
            const secs = now.getSeconds().toString().padStart(2, "0");

            if (hour <12) {
                setGreeting("Good Morning");
            } else if (hour >= 12 && hour <17){
                setGreeting("Good Afternoon");
            }else if (hour >=17 && hour <20){
               setGreeting("Good Evening"); 
            }else {
                setGreeting("Good Night");
            }

            setTime(`${hour.toString().padStart(2, "0")}:${min}:${sec}`);
        },1000);

        return () => clearInterval(interval);//cleanup
    },[]);
        }

        return(
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className=""></div>
            </div>
        )