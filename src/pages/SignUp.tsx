import SignUpForm from "../components/forms/SignUpForm";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
export default function SignUp() {
  return (
    <div className="flex flex-1 items-center justify-center   h-[100vh] ">
      <WelcomeComponent />
      <div className=" flex flex-col flex-1 p-4  h-full justify-center items-center  ">
        <h1 className="text-2xl font-bold mb-10">Create account</h1>
        <SignUpForm />
        <p className="flex text-sm text-gray-500 mt-2 ">
          Already have an acount?{" "}
          <a href="/" className="text-blue-500 hover:underline font-semibold">
            {" "}
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

const WelcomeComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        "Welcome to chat buddies!  ",
        "Connect, share, and enjoy real-time conversations with friends, family and your team.",
        "Start chatting now!"
        
      ],
      typeSpeed: 50,
      loop:true,
      showCursor:false,
      backSpeed:50
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex-1 p-10  h-full text-white  bg-gradient-to-br      from-indigo-950 to-indigo-900 flex flex-col ">
        <h1 className="text-2xl  font-semibold  flex items-center gap-2    ">
          CHAT BUDDIES{" "}
          <span className="w-2 h-2 bg-blue-500  rounded-full self-end mb-1.5 "></span>
        </h1>
        <p
          className=" flex items-start text-4xl  font-serif  mt-[60vh]  text-white/80"
          ref={ref}
        ></p>
      </div>
    </>
  );
};
