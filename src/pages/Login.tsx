import { useNavigate } from "react-router-dom"
import LoginForm from "../components/forms/LoginForm"
import { isLoggedIn } from "../app/api/authorisation/isLoggedIn";
import { useEffect } from "react";

const Login = () => {
   const navigate = useNavigate();

   async function CheckIfisLoggedIn() {
     const user = await isLoggedIn()
     if(user){
     navigate("/chat")
     }
   }
   useEffect(()=>{
      CheckIfisLoggedIn()
   })
   isLoggedIn()

  return (
    <div className="bg-indigo-950 w-full h-[100vh]  p-10 "> 
     <h1 className="text-2xl  font-semibold  flex items-center gap-2   text-white  ">
          CHAT BUDDIES  <span className="w-2 h-2 bg-blue-500  rounded-full self-end mb-1.5 "></span>
      </h1>

      <div className="absolute top-[30%] right-[35%] bg-white p-8 rounded-xl flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Log in to your account </h1>
        <LoginForm />
        <p className="flex text-sm text-gray-500 mt-2 ">Already have an acount? <a  href="/signup" className="text-blue-500 hover:underline font-semibold"> sign  up</a></p> 
      </div>
    </div>
  )
}

export default Login