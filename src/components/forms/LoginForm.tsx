import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import { addUser, UserState } from "../../app/features/user/userSlice";
import submitLogInInfo from "../../app/api/authorisation/logIn";

type stateFunction = (updatedFormState: FormData) => void;

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [formstate, setFormState] = useState<FormData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmission(
    formData: FormData,
    e: React.FormEvent<HTMLFormElement>
  ) {
    const result = await submitLogInInfo(formData, e);

    if (!result) {
      console.log(result);
      return;
    }

     const user:UserState={
      Id:result.Id,
      Email:result.Email,
      First_name:result.First_name,
      Last_name:result.Last_name

     }
    dispatch(addUser(user));
    navigate("/chat");
  }

  return (
    <form
      className="flex  flex-col w-80 gap-4 "
      onSubmit={(e) => handleSubmission(formstate, e)}
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
