import React, { useEffect, useState } from "react";


function Fech(){

     const [item,setQouts]=useState([])
     useEffect(()=>{
          fetch("https://dummyjson.com/quotes")
          .then(response=> response.json())
          .then(data=>setQouts(data.quotes.splice (0,10)))
     },[]);

     return (
          <div>
               {item.map((qout)=> ( <h1 key={qout.id}>{qout.quote}</h1>))}
          </div>
     )
}

export  default Fech