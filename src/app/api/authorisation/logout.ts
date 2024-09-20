import axios from "axios"

export async function Logout():Promise<boolean>{
       try {
        await axios.get("http://localhost:8080/user/logout",{withCredentials:true})
        console.log("logged out")
        return true 
        
       } catch (error) { 
      console.log("failed loggin out")
        return false
           console.log(error)
       }
}