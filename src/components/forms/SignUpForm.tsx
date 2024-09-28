import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import submitSignUpForm from "../../app/api/authorisation/signUp";

export interface FormData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

function SignUp() {
  const navigate = useNavigate();
  const [formstate, setFormState] = useState<FormData>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  function handleSubmission({
    formData,
    e,
  }: {
    formData: FormData;
    e: React.FormEvent<HTMLFormElement>;
  }) {
    const result = submitSignUpForm({ formData, e });
    if (!result) {
      navigate("/");
    }

  
  }

  return (
    <form
      className="flex  flex-col w-[340px] gap-3"
      onSubmit={(e) => handleSubmission({ formData: formstate, e: e })}
    >
      <div className="flex w-full justify-between ">
        <label className="flex flex-col   gap-0.5 w-[48%]  p">
          First name
          <input
            className=" border-2 border-gray-200 py-1 px-2    rounded outline-blue-300/50 outline-4 "
            type="text"
            name="first_name"
            id="first_name"
            placeholder="first name"
            value={formstate["first_name"]}
            onChange={(e) =>
              setFormState({ ...formstate, first_name: e.target.value })
            }
          />
        </label>

        <label className="flex flex-col   gap-0.5  w-[48%] ">
          First name
          <input
            className=" border-2 border-gray-200 py-1 px-2   rounded outline-blue-300/50 outline-4 "
            type="text"
            name="last_name"
            id="last_name"
            placeholder="last name"
            value={formstate["last_name"]}
            onChange={(e) =>
              setFormState({ ...formstate, last_name: e.target.value })
            }
          />
        </label>
      </div>

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setState({ ...rootState, [e.target.name]: e.target.value });
  }

  function handlePasswordVisibilty() {
    setShowPassword(!showPassword);
  }
  return (
    <>
      <div className="flex items-center flex-1 border-2 border-gray-200 rounded px-2 py-1 ">
        <input
          className="flex-1  outline-none"
          type={showPassword ? "password" : "text"}
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
