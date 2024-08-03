import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AppDispatch} from "../../app/store"
import { addUser } from "../../app/features/user/userSlice";

type stateFunction = (updatedFormState: FormData) => void;

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {

 const  dispatch=useDispatch<AppDispatch>()
  const [formstate, setFormState] = useState<FormData>({
    email: "",
    password: "",
  });
   const navigate =useNavigate()
  function submitLogInInfo(
    formData: FormData,
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/logIn", {
        email: formData.email,
        password: formData.password,
      },{
        withCredentials:true
      })
      .then((res) => {
         const  user=res.data
          if (user){
              console.log(user)
               dispatch(addUser(user))
              navigate("/chat")
          }

      })
      .catch((err) => console.log(err));
  }
  return (
    <form
      className="flex  flex-col w-80 gap-4 "
      onSubmit={(e) => submitLogInInfo(formstate, e)}
    >
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
        <div className="flex flex-1 justify-between">
          <span>Password</span>{" "}
          <span className="text-blue-500 hover:underline font-semibold">
            Forgot ?
          </span>
        </div>
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

const PasswordInput: React.FC<{
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
      console.log(hiddenPassword);
      console.log(rootState.password);
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


