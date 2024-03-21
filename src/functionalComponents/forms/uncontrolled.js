import { useRef } from "react"

const Uncontroll =()=>{
    const mailname=useRef(null)
    const passref=useRef(null)

    const sub=(e)=>{
e.preventDefault();
const username=mailname.current.value
const password=passref.current.value

if(username.length>8 && password.length>8){
    alert("mail and password must be less than 8 charcters")
}
else{
    let userinfo={
        username:username,
        password:password
    }
    console.log(userinfo)
}
    }
    return(
        <form onSubmit={sub} >
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={mailname}
          />
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
            ref={passref}
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
export default Uncontroll