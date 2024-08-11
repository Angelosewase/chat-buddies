import ChatPageLayout from "./ChatPageLayout";
import ChatComponent from "../components/ChatComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../app/features/user/userSlice";
import { useEffect } from "react";

function ChatPage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user.Email && !user.First_name && !user.Id && !user.Last_name) {
      navigate("/");
      console.log("your are unauthorised to access this route")
    }
  }, [user, navigate]);


  return (
    <div className="flex h-[100vh] items-center justify-center  border ">
      <ChatPageLayout>
        <ChatComponent />
      </ChatPageLayout>
    </div>
  );
}

export default ChatPage;
