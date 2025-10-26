import { useState } from 'react'
import Announcement from'./Announcement'
export default function content({site_admin}){
    //always call react hooks such as useState, useContext at the top of your component not top of your page useState() will return a array containing 2 elements namely: a value and a function
    const[likecount, setLikeCount]=useState(2)
    let likes =1
    function likePage(){
        likes++
        console.log(likes)
    }
    function handleLike(){
        //this function will be called when the button is clicked
        setLikeCount(likecount+1);//the new value that will be stored in likecount will now be equal to what was inside likecount before +1
    }
    return <>
     <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5 justify-content-center">
      <div className="col-md-10">
        <Announcement site_admin={site_admin}/>
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              Man must explore, and this is exploration at its greatest
            </h2>
            <h3 className="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on September 24, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        {/* Post preview*/}
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              I believe every human has a finite number of heartbeats. I don't
              intend to waste any of mine.
            </h2>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on September 18, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        {/* Post preview*/}
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              Science has not yet mastered prophecy
            </h2>
            <h3 className="post-subtitle">
              We predict too much for the next year and yet far too little for
              the next ten.
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on August 24, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        {/* Post preview*/}
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">Failure is not an option</h2>
            <h3 className="post-subtitle">
              Many say exploration is part of our destiny, but it’s actually our
              duty to future generations.
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on July 8, 2023
          </p>
        </div>
        {/* Divider*/}
        <hr className="my-4" />
        {/* Pager*/}
        <div className="d-flex justify-content-end mb-4">
          <button className="btn btn-danger text-uppercase" onClick={likePage}>
           {likes} Like →
          </button>
          {/* achieving pagelike using state instead of component */}
          <button className="btn btn-outline-danger text-uppercase ms-5" onClick={handleLike}>
           {likecount} Like →
          </button>
        </div>
        
      </div>
    </div>
  </div>
    </>
}