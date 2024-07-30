import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export interface FormData {
  email: string;
  password: string;
}

function SignUp() {
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
        Password
        <PasswordInput rootState={formstate} setState={setFormState} />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-2  py-1.5 rounded-lg mt-4 "
      >
        Create Account
      </button>
      <button
        type="button"
        className="bg-blue-100 text-blue-500 px-2 opacity-50  py-1.5 rounded-lg hover:cursor-not-allowed "
        disabled
      >
        Continue with Google
      </button>
    </form>
  );
}

export default SignUp;

type stateFunction = (updatedFormState: FormData) => void;

export const PasswordInput: React.FC<{
  setState: stateFunction;
  rootState: FormData;
}> = ({ setState, rootState }) => {
  let hiddenPassword: string = "";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setState({ ...rootState, [e.target.name]: e.target.value });

    const passwordlength: number = rootState.password.length;
    for (let i = 0; i < passwordlength; i++) {
      hiddenPassword += "*";
      console.log(hiddenPassword)
      console.log(rootState.password)
    }

    console.log(hiddenPassword);
  }

  function handlePasswordVisibilty() {
    setShowPassword(!showPassword);
  }
  return (
    <>
      <div className="flex items-center flex-1 border-2 border-gray-200 rounded px-2 py-1 ">
        <input
          className="flex-1  outline-none"
          type={showPassword ? "password":"text"}
          name="password"
          id="password"
          placeholder="Enter your password "
          value={rootState["password"]}
          onChange={handlePasswordChange}
        />
        <button onClick={handlePasswordVisibilty} type="button">
          {showPassword ? (
            <EyeIcon className="w-5" />
           
          ) : (
            <EyeSlashIcon className="w-5" />
          )}
        </button>
      </div>
    </>
  );
};
