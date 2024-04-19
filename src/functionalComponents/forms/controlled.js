// import axios from 'axios'
// import React, { useState } from 'react'

// const Controlled = () => {
//    const[username,setUsername]=useState("")
//    const [userNameError,setuserNameError] = useState("")

//    const usernameHandler =(e)=>{
    

//     // const logInApi =()=>{
//     //   fetch('https://dummyjson.com/user/me', {
//     //     method: 'GET',
//     //     headers: {
//     //       'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
//     //       username:username,
//     //       password: '0lelplR'
//     //     }, 
//     //   })
//     //   .then(res => res.json())
//     //   .then((response)=>console.log(response))
//     // }
// //  const username=e.target.value;
//  setUsername(username)
//  if(username.length>5){
//   // alert("user name must be more than 5 characters")
//   setuserNameError("user name must be more than 5 characters")
//  }
//  else{
//   setuserNameError("")
//   let userinfo={
//     user:username
//   }
  
//   console.log(userinfo)
//  }
//    }

//    const SubmitHandler =()=>{
  
   
//    }
//   return (
//     <>
//     <form onSubmit={SubmitHandler}>
//         <div className="mb-3 mt-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             name="email"
//             value={username}
//             onChange={usernameHandler}
        
//           />
//           {
//             userNameError
//             ?
//             <h5 style={{color:"red"}}>{userNameError}</h5>:
//             null
//      }

// export default Controlled



import React, { useState } from 'react'

const Controlled = () => {
  const [username,setUsername]= useState("")
  const [usernameError,setuserNameError]=useState("")

  const usernameHandler =(e)=>{

    const username = e.target.value;
    setUsername(username)
    if(username.length<5){
        setuserNameError("user name must be more than 5 characters")
       }
       else{
        setuserNameError("")
        let userinfo={
          user:username
        }
        
        console.log(userinfo)
       }
         }

  
  const SubmitHandler =()=>{
  
  }

  const [password,setPassword]= useState("")
  const [PasswordError,setPasswordError]=useState("")

  const PasswordHandler =(e)=>{

    const password = e.target.value;
    setPassword(password)
    if(password.length<8){
        setuserNameError("password must be at least 8 characters")
       }
       else{
        setPasswordError("")
        let passwordInfo={
          password:password
        }
        
        console.log(passwordInfo)
       }
         }




  return (
    <div>
      <form onSubmit={SubmitHandler}>
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
            value={username}
            onChange={usernameHandler}
            
        
          />
          {
            usernameError
            ?
            <h5 style={{color:"red"}}>{usernameError}</h5>:
            null
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
            value={password}
            onChange={PasswordHandler}
            
          />
           {
            PasswordError
            ?
            <h6 style={{color:"red"}}>{PasswordError}</h6>:
            null
          }
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
    </div>
  )
}

export default Controlled

