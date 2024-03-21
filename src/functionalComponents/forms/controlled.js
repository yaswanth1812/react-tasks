
import { useState } from "react"
// .then(res => res.json())
// .then((Response)=>console.log(Response))
// }
// const sub=(e)=>{
// e.preventDefault()
//     logApi()
const Controll =()=>{
    const [usernname,setusername]=useState("")
    const [usererror,setusererror]=useState("")
    const usernameHandler=(e)=>{
        const username=e.target.value
        setusername(username)
        if(username.length>15){
            setusererror("mail must be less than 8 characters")
        }
        else{
            setusererror("")
            let info={
                username:username
            }
            console.log(info)
        }
    }
    const sub=(e)=>{
         e.preventDefault()
    
    }
        
    return(
        <form onSubmit={sub} >
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={usernname}
            onChange={usernameHandler}
          />
          {
          usererror? <h5 style={{color:"red"}}>{usererror}</h5>:null
          
          }
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
           
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
} 

export default Controll;