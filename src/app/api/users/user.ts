import axios from "axios";

export interface user {
  First_name: string | null;
  Last_name: string | null;
  Email: string | null;
  Id: string | null;
}

export async function GetuserById(userId: string): Promise<user | null> {
  try {
    const response = await axios.post(
      "http://localhost:8080/chat/user",
      { userId },
      { withCredentials: true }
    );
    const resUser: user = response.data;
    return resUser;
  } catch (error) {
    console.log("error fetching user :", error);
    return null;
  }
}

export async function searchUsers(querry: string): Promise<user[] | null> {
  try {
    const response = await axios.post(
      `http://localhost:8080/user/search?q=${querry}`
    );
    const usersArray: user[] = response.data;
    return usersArray;
  } catch (error) {
    return null;
  }
}
