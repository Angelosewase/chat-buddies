import axios from "axios";
import { UserState } from "../../features/user/userSlice";

interface FormData {
  email: string;
  password: string;
}

export default async function submitLogInInfo(
  formData: FormData,
  e: React.FormEvent<HTMLFormElement>
): Promise<UserState | null> {  // Return a Promise that resolves to UserState or null
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:8080/user/logIn",
      {
        email: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true,
      }
    );
    const user: UserState = res.data;
    return user; // Return the user if successful
  } catch (err) {
    console.log(err);
    return null; // Return null if there's an error
  }
}
