import React from "react";
import{useEffect,useState} from "react";
import axios from "axios";


export default function AxiosDemo(){
    const [apidata,setApidata]=useState([]);

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((response)=>{
            console.log("resp",Response.data.data);
            setApidata(Response.data.data);
        });
    },[]);
    return( <div>This is AxiosDemo Component
        <br />
        <br />
        {apidata.length > 0?
         apidata.map((item,index)=>(
            <p key={item.id}>
                {index+1}.{item.first_name}{item.last_name} has email id-{" "}
                {item.email}
            </p>
        ))
        :"No Data Found"}
    </div>
    );
}






















































































































