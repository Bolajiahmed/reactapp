//this component wants to consume a context siteContext
import{useContext} from 'react'
import { SiteContext } from './SiteContext'


export default function Footer({site_admin}){
    const shared_data=useContext(SiteContext)//recall that shared data looks like this{version:"",fxn:""}(check Blog.jsx)
    return <>
     <footer className="border-top">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="small text-center text-muted fst-italic">
            Copyright © 2025{site_admin} version :{shared_data.version}
          </div>
        </div>
      </div>
    </div>
  </footer>
    
    </>
}