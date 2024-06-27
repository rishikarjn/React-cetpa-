import React,{useState} from "react";
export default function FunctionalComp(props){
    const[data,setData]=useState(10);
    const[frame,setFrame]=useState("Sita");
    return (
    <div>This is Functional Component. The End
        <br/>
        The props are-{props.city}{props.country}
        <br/>
        <button onClick={()=>setData("Ram")}>Change Data</button>
        The states are-{data}
    </div>
    );
}

// export function A(){
//     return <div>This is A</div>
// }
// export function B(){
//     return <div>This is B</div>
// }