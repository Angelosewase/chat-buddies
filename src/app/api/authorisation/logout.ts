import axios from "axios"

export async function Logout(): Promise<boolean> {
  try {
    await axios.get("http://localhost:8080/user/logout", { withCredentials: true });
    return true;
  } catch (error) {
    console.log("failed logging out");
    console.error(error); // Moved console log before return
    return false;
  }
}
