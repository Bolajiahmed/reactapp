import{useContext} from 'react'
import { SiteContext } from './SiteContext'
import { use } from 'react'

 export default function Announcement({site_admin}){
   const{version,fxn}=useContext(SiteContext);
   return  <>
   
    <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
             Special Announcement
            </h2>
            <h3 className="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3>
          </a>
          <p className="post-meta">
            Posted by 
            <a href="#" onClick={fxn}> {site_admin}</a>
            on September 24, 2023 version: {version}
          </p>
        </div>
        </>
 }
 
 