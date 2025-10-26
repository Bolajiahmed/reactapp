import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

import Home from  './custom/Home.jsx'
import Blog from  './Blog.jsx'
//import List from './custom/List.jsx'
//we connect  to api here
let sitename="My react app"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home deets= {sitename} authour ="Mark Zuckerberge"/> */}
    <Blog/>
   
  </StrictMode>,
)
