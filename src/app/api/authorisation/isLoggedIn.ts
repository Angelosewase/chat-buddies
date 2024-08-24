import axios from "axios";
import { user } from "../users/user";

export async function isLoggedIn(): Promise<user | null> {
  try {
    const response = await axios.get("http://localhost:8080/user/isLoggedIn", {withCredentials:true});
    const user: user = response.data;
    return user;
  } catch (error) {
    console.log(error)
    return null;
  }
}
