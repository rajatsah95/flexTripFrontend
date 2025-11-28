import { useContext, useRef } from "react"
import { appcontext } from "../context/context"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export let Login=()=>
    {
        let {theme,Updatetheme,setislogged,setToken}=useContext(appcontext)
        let emailRef=useRef("")
        let passwordRef=useRef("")
        
        let navigate=useNavigate()
        let handlesubmit=(e)=>
        {
            e.preventDefault()
            
        axios.post(
  "https://flextripbackend.onrender.com/auth/login",
  {
    email: emailRef.current.value,
    password:passwordRef.current.value
  }
)
        .then((res)=>
        {
            // let narr=Object.entries(res.data).filter(([id,ele])=>emailRef.current.value==ele.email&&passwordRef.current.value==ele.password)
            console.log(res)
           if(res.data.message==="loggedin successful")
           {
            alert("you are logged in successfully")
            setToken(res.data.token)
              setislogged(true)
            navigate("/dashboard")

           }
           else
           {
            alert("wrong credentials")
           }
           
        })
        .catch((error)=>{console.log(error)})
        }
        return(
            <>
            <div className="login-container">
             
            <div className="login-card">
                 <h2 className="login-h2">Login</h2>
                <form onSubmit={handlesubmit}>
                     <div className="input-group">
            <label>Email</label>
                       <input ref={emailRef} type="email" placeholder="enter email" required/>
                        </div>
                         <div className="input-group">
            <label>Password</label>
                       <input ref={passwordRef} type="password" placeholder="enter password" required/>
                        </div>
                       <button type="submit" className="login-btn">Submit</button>
                        <button className="login-btn" onClick={()=>{
      navigate("/");
    }}>Back to LandingPage</button>
                </form>
            </div>
            </div>
            </>
        )
    }