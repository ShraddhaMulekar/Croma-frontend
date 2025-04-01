import React from 'react'
import { useNavigate } from 'react-router-dom'
import { base_URL } from '../config/base.url.js'

const LogOut = () => {
    const navigate = useNavigate()
    
    const handleLogOut = async()=>{
        
        let token = localStorage.getItem("token")
    
        if(!token){
            alert("Please Log in now!")
            navigate("/log_in")
            return
        }

        try {
            let res = await fetch(`${base_URL}user/logout`,{
                method : "POST",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            const data = await res.json()
            console.log("data", data)
    
            if(res.ok){
                localStorage.removeItem("token")
                localStorage.removeItem("userId")
                alert("log out successful!..")
                localStorage.removeItem("token")
                navigate("/log_in")
            } else{
                alert(data.msg || "Error in Log out!")
            }
        } catch (error) {
            console.log("error in log out!.. ", error)
            alert("error in logging out! Please try again!..")
        }
    }
  return (
    <div>
        <button onClick={handleLogOut()}>Log out!</button>
    </div>
  )
}

export default LogOut