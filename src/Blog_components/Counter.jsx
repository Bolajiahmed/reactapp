export default function Counter({total}){
    //method 3
    return <div className="row text-center">
        <div className="col">
            {total>50?
            <button className="btn btn-danger">Heavy Traffick</button>
            :
            <button className="btn btn-info">Moderate Traffick</button>
}

        </div>

    </div> 
    
    //method 2 conditional rendering
    //   return<div className="row text-center">
    //     <div className="col">
    //         {total > 50 && <button className="btn btn-danger">Heavey Traffic</button>}
    //     </div>
    //     {total <= 50 && <button className="btn btn-danger">Heavey Traffic</button>}
        
    // </div>
    ///method one of conditionl rendering
    // if(total>50){
    //       return<div className="row text-center">
    //     <div className="col">
    //         <button className="btn btn-danger">Heavey Traffic</button>
    //     </div>
        
    // </div>
    // }
    // else{
    //     return<div className="row text-center">
    //     <div className="col">
    //         <button className="btn btn-info">low traffic</button>
    //     </div>
        
    // </div>

    // }
    
}