import { useState } from "react";
import { PasswordInput } from "./SignUpForm";
import { FormData } from "./SignUpForm";

export default function LoginForm() {
  const [formstate, setFormState] = useState<FormData>({
    email: "",
    password: "",
  });
  return (
    <form className="flex  flex-col w-80 gap-4 ">
      <label className="flex flex-col   gap-0.5">
        Email
        <input
          className=" border-2 border-gray-200 px-2 py-1  rounded outline-blue-300/50 outline-4"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formstate["email"]}
          onChange={(e) =>
            setFormState({ ...formstate, email: e.target.value })
          }
        />
      </label>
      <label className="flex flex-col flex-1  ">
     <div className="flex flex-1 justify-between"><span>Password</span> <span className="text-blue-500 hover:underline font-semibold" >Forgot ?</span></div>
        <PasswordInput rootState={formstate} setState={setFormState} />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-2  py-1.5 rounded-lg mt-4 "
      >
        Log in
      </button>
    </form>
  );
}
