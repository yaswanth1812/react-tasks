



const ConditionalRender =()=>{
let hello=[{
    name:"yaswanth",
    marks:90
},
{
    name:"chandu",
    marks:70

},
{
    name:"shyam",
    marks:85
},
{
    name:"anu",
    marks:95
}

]
    return(
    <div>
    {
       hello.map((each)=>{
        return(
            <div>
                <h4>{each.name}</h4>
                <h4>{each.marks}</h4>
                <br></br>
                </div>
        )
       })
    }
    </div>
    )
}
;   
export default ConditionalRender; 


// hello.map((each)=>{
//     return(
//         <div>

//             <h1>{each.name}</h1>
//             <h1>{each.marks}</h1>
//             </div>
//     )
// })