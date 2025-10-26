let Category=({cats,fxn})=>{
    //use array.map() to generate the <li></li>
    // let mylist=cats.map(function(value,key){
    //     return <li key={key}>{value}</li>
    // })
     let mylist=cats.map((value,key)=>{
        return <li key={key}>{value}</li>
    })
    return <>
    <h2>Hello</h2>
    <ul>{mylist}</ul>
    <button className="btn btn-success" onClick={fxn}>Click Me</button>

    </>
    
}
export default Category