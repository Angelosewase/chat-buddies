// import axios from "axios";
// import { UserState } from "../../features/user/userSlice";

// export async function getUserbyId(userId: string): Promise<UserState | null> {
//   try {
//     const response = await axios.get("http://localhost:8080/chat/user", {
//       data: {
//         userId,
//       },
//     });

//     const user: UserState = response.data;
//     return user;
//   } catch (error) {

//     return null;
//   }
// }
