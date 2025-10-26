import{useState} from "react"

let ContactForm=()=>{
    //picking form elements will be stored inside state variable
    let [propname,setPropName]=useState('')
    const [propcost,setPropCost]=useState(0)

//if we want to display error message in an element instead of alerting it we create a state variable e.g feedback and give it a default value
    const [feedback,setFeedback]=useState('')

    function handleForm(event){
        event.preventDefault()
        if(propname==""||propcost==""){
            //alert('form must be completed')
            setFeedback('the form can not be empty')
            
        }
        else{
            setFeedback('')
            //we will connect to api and send the form data as json
            const data2send={title:propname,body:propcost,UserId:1}
            const options={
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify(data2send),
            }
            const url="https://jsonplaceholder.typicode.com/posts"
            fetch(url,options)
            .then((response)=>{return response.json()})
            .then((json)=>{
                alert('your message was sent'+json.title)
                setPropCost('')
                setPropName('')

                console.log(json)
            })
            .catch((error)=>{console.log(error)})
        }
    }
    
    return <div className="container">
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
               <h2 className="text-center">Contact Us</h2> 
            <form>
               {
                feedback !="" && <p className="alert alert-danger">{feedback}</p>
               }
               
                    <div className="mb-3">
                        <label>Property Name{propname}</label>
                        <input type="text" className="form-control border-dark" onChange={(event)=>{setPropName(event.target.value)}} value={propname}/>

                    </div>
                    <div className="mb-3">
                        <label>Property price{propcost}</label>
                        <input type="text" className="form-control border-dark" onChange={function(event){setPropCost(event.target.value)}} value={propcost}/>

                    </div>
                    <div className="mb-3">
                        <button className="btn btn-danger col-12" onClick={handleForm}>Submit</button>

                    </div>
               </form>
                
            </div>

        </div>
    </div>
    
}
export default ContactForm