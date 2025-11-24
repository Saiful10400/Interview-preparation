import { useEffect, useState } from "react";

 
const BigData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
    
        fetch("https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json").then(res=>res.json()).then(result=>setData(result))
    },[])
    return (
        <div>
            {
                data?.map((item:{name:string,language:string},idx:number)=><div key={idx}><h1>{idx}{"=>"}{item.name}</h1><h2>{item.language}</h2></div>)
            }
        </div>
    );
};

export default BigData;