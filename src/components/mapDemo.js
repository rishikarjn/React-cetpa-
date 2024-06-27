import React from "react";

export default function MapDemo(){
    // const arr=[2,1,5,3,8];
    let cars=[
        {
            color:"purple",
            type:"minivan",
            registration:new Date("2017-01-03"),
            capacity:7,

        },
        {
            
            color:"red",
            type:"station wagon",
            registration:new Date("2016-08-03"),
            capacity:5,
        },

    ]
    return(
        <div>
            This is Map MapDemo
            <br/>
            <ol>
            {cars.map((item,index) =>(
                    <li key={index}>
                    <p>{item.color} {" "}
                         {item.type} {" "}registrated on
                          {item.registration.toDateString()}{" "} 
                          has capacity of {item.capacity}{" "}people</p> 
                    </li>
            ))}
                </ol>
        </div>
    );

}
