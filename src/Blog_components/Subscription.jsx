import { useEffect } from "react"
import { useState } from "react"

export default function Subscription({category}){
    const[cost,setCost]=useState(0)
    useEffect(()=>{
        console.log("this will run")
    },[category,cost])
    return <div className="container">
                 <div className="row my-5">
        <div className="col-md">
            <button className="btn btn-outline-danger col-12" onClick={()=>{setCost(cost + 1)}}>Subscribe Now to {category}</button>
        </div>

    </div>
        </div>
       
}