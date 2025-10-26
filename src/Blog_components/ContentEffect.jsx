import { useState } from 'react'
import { useEffect } from 'react'

export default function contentEffect(){
   //async function(){}
   //async..await is syntactic sugar for promise. fetch(). then(). then(). catch()
   const[allpost,setAllposts]=useState([])
   //state variable to contain error message when API is down, true,false
   const [errormsg, setErrormsg]=useState(false)
    let fetchPosts=async ()=>{
    const options={
        method:"GET",
        headers:{"content-type":"application/json"}
    }
    try{
        const rsp=await fetch("https://dummyjson.com/posts",options);
        if(!rsp.ok){
            throw new Error("HTTP Error")
        }
         const data = await rsp.json();
        console.log(data.posts);
        setAllposts(data.posts)
    }catch(error){
        setErrormsg(error.message +'error connecting to API')
    }finally{

    }
    
   
   }
    useEffect(()=>{
        fetchPosts()
    },[errormsg])
    
    let data2display=allpost.map(function(value,key){
        return <div key={key}>
        <div className="post-preview" >
          <a href="post.html">
            <h2 className="post-title">{value.title}</h2>
            <h3 className="post-subtitle">
              {value.body}
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            Views:{value.views}
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        </div>
    })
    
    return <>
     <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10">
    <h1>All Posts</h1>
    {errormsg && <div className='row'>
        <div className='col-md-12'>
            <p className='alert alert-danger'>{errormsg}<br/>
            <a href='#' className='alert-link' onClick={()=>{setErrormsg(false)}}>Try again</a>
            
            </p>
        </div>
        </div>}
       
        {data2display}

        {/* Pager*/}
        <div className="d-flex justify-content-end mb-4">
          <button className="btn btn-danger text-uppercase">
            Like →
          </button>
          {/* achieving pagelike using state instead of component */}
          <button className="btn btn-outline-danger text-uppercase ms-5" >
            Like →
          </button>
        </div>
        
      </div>
    </div>
  </div>
    </>
}