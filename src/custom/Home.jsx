import List from "./List.jsx"
import Category from "./Category.jsx"
import Table from "./Table.jsx"
import "./bootstrap.min.css"

export default function Home(props){
    //props={deets:"Our react app",authour:"Mark Zuckerberg"}
     let site="Our first React App"
     let offer="Buy one get 2"
     let cats=["Food","politics","Fashion","Sports"];
     let cssobj={fontFamily:"arial",fontSize:"24px"}
     function checkStatus(){
        alert('checked');
     }
    return (
               
        <div className="container">
            <div className="row">
                <div className="col">
                    <Category cats={cats} fxn={checkStatus}/>

                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <List bonus={offer}/>
                </div>
                <div className="col">
                    <h1 className='text-danger'>welcome Everyone-{site}</h1>
                    <h2 style={{textDecoration:'underline'}}>A sub-heading.</h2>
                    <p style={cssobj}>You are welcome to my space</p>
                    <p>{10+26}</p>
                    <p>{props.authour}</p>
                     <button className="btn btn-lg btn-danger col-3" onClick={function(){alert('hello')}}>Click Me</button>
                    <button className="btn btn-lg btn-outline-danger col-3" onClick={()=>{alert('hello')}}>Classwork</button>
                </div>

            </div>
            <div className="row">
                <div className="col-md-3">
                    <Table/>
                </div>

            </div>
            
        </div>
   
)
}