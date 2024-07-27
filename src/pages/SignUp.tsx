import  SignUpForm from "../components/forms/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex flex-1 items-center justify-center   h-[100vh] ">
      <WelcomeComponent />
      <div className=" flex flex-col flex-1 p-4  h-full justify-center items-center  ">
        <h1 className="text-2xl font-bold mb-10">Create account</h1>
        <SignUpForm />
         <p className="flex text-sm text-gray-500 mt-2 ">Already have an acount? <a  href="/login" className="text-blue-500 hover:underline font-semibold"> Log in</a></p> 
      </div>
    </div>
  );
}

const WelcomeComponent= () => {
  return (
    <>
      <div className="flex-1 p-10  h-full text-white  bg-gradient-to-br      from-indigo-950 to-indigo-900 flex flex-col">
        <h1 className="text-2xl  font-semibold  flex items-center gap-2    ">
          CHAT BUDDIES  <span className="w-2 h-2 bg-blue-500  rounded-full self-end mb-1.5 "></span>
        </h1>
        <p  className="flex-1  flex items-end text-5xl  font-extralight">
          Welcome to chat buddies! <br /> Connect, share, and enjoy real-time conversations
          with friends, family and your team.  <br />  Start chatting now!"
        </p>
      </div>
    </>
  );
};
