import React from"react";
import { useState } from "react";

export default function ConditionalDemo(){
    const[show,setShow]=useState(true);
    return (<div>
        <h3>Employee Form</h3>
        <br />
        <button onClick={()=> setShow(true)}>Submit</button>
        <button onClick={()=> setShow(false)}>Reset</button>
        <br />
        {show=== true? "The Form has submitted":""}
    </div>
    );
}