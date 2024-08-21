import axios from "axios";
import { UserState } from "../../features/user/userSlice";

export async function getUserbyId(userId: string): Promise<UserState | null> {
  try {
    const response = await axios.get("", {
      data: {
        userId,
      },
    });

    const user: UserState = response.data;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
