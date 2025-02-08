import { useEffect, useState } from "react";

function Clock() {

    const [date,setDate]= useState(new Date())   
    
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())

        },1000);

    },[])

    return(

        <div>
            <p>current time is: {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock