import ChatPageLayout from "./ChatPageLayout";
import ChatComponent from "../components/ChatComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../app/features/user/userSlice";
import { useEffect } from "react";
import { isLoggedIn } from "../app/api/authorisation/isLoggedIn";

function ChatPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function isAuth() {
      const user = await isLoggedIn();

      if (!user) {
        navigate("/");
        return;
      }
      dispatch(addUser(user));
    }
    isAuth();
  }, [navigate,dispatch]);

  return (
    <div className="flex h-[100vh] items-center justify-center  border ">
      <ChatPageLayout>
        <ChatComponent />
      </ChatPageLayout>
    </div>
  );
}

export default ChatPage;
