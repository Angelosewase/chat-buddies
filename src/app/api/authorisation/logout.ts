import axios from "axios"

export async function Logout():Promise<boolean>{
       try {
        await axios.get("http://localhost:8080/user/Logout",{withCredentials:true})
        return true 
        
       } catch (error) {
        return false
           console.log(error)
       }
}