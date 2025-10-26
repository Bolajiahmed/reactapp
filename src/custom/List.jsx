export default function List({bonus}){
    //props={bonus:"Buy 1 get 2"}
    return(
        <>
            <ul>
                <li>Reading</li>
                <li>Coding</li>
                <li>sleeping</li>
                <li>{bonus}</li>
            </ul>
        </>
    )
}