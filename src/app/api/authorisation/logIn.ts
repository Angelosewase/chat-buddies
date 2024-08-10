import axios from "axios";
import { UserState } from "../../features/user/userSlice";

interface FormData {
  email: string;
  password: string;
}
export default function submitLogInInfo(
  formData: FormData,
  e: React.FormEvent<HTMLFormElement>
): UserState | null {
  e.preventDefault();
  axios
    .post(
      "http://localhost:8080/user/logIn",
      {
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      const user = res.data;
      if (user) {
        console.log(user);
        return user;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return null;
}
