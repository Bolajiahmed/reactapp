import Nav from"./Blog_components/Nav"
import Header from "./Blog_components/Header"
import Content from "./Blog_components/Content"
import Footer from "./Blog_components/Footer"
import Counter from "./Blog_components/Counter"
import ContactForm from "./Blog_components/ContactForm.jsx"
import ContentEffect from "./Blog_components/ContentEffect.jsx"
import Subscription from "./Blog_components/Subscription.jsx"

import {SiteContext} from './Blog_components/SiteContext.jsx'

import "./Blog_components/assets/js/bootstrap.bundle.min.js"
import "./Blog_components/css/custom.css"
import "./Blog_components/css/Styles.css"
export default function Blog(){
    let site_admin='mark zuck'
    //supposing we want to share variable version and also function getTotalViiew() across all the components
    function getTotalViiew(){alert(100+"views")}
    let data = {version:"1.2",fxn:getTotalViiew}
    //step1:we can create a context called siteContext.jsx , then import the context into the provider(the component that has something to share)
    //step2:provide the context by wrapping the components with <contextName.Provider value="data to share"></contextName.Provider>
    //step3:Go to the place where you need the data to consume the context(footer and Announcement.jsx)
    return <>
        <SiteContext.Provider value={data}>
            <Nav/>
            <Header/>
            <Subscription category='Sports'/>
            <Counter total='2'/>
            {/* <Content site_admin={site_admin}/> */}
             <ContentEffect/>
            <ContactForm/>
           
            <Footer site_admin={site_admin}/>
        </SiteContext.Provider>
    </>
}