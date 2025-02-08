import { useEffect, useState } from "react";


function Counter({initialValue,incrementAmount}) {


    const [count,setCount]= useState(initialValue)

    


    function handleclickIncrement() {

        setCount(prevCount=>prevCount+incrementAmount)
        
    }

    useEffect(()=>{
        console.log("the actually counter is:", count);
        
    })
    return(

        <>
        
        <h2>the counter is: {count}</h2>

        <button onClick={handleclickIncrement}>Increment</button>
        
        
        </>
    )    
}

export default Counter