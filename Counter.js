import { useEffect, useState } from "react";

function Counter(){
    const [count,setCount ]=useState(0);
    const [calculation ,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation (()=> count*2);
    },[count]);
    return (
        <>
        <p>Count:{count}</p>
        <button onclick={()=>setCount((c)=>c+1)}>+</button>
        <p>Calculation:{calculation}</p>
        </>
    );
}
export default Counter;