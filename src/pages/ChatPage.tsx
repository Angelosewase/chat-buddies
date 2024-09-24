import ChatPageLayout from "./ChatPageLayout";
import ChatComponent from "../components/ChatComponent";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, selectUser } from "../app/features/user/userSlice";
import { useEffect } from "react";
import { isLoggedIn } from "../app/api/authorisation/isLoggedIn";
import {
  IMessageBase,
  initializeWebSocketServerConnection,
  SendMessage,
} from "../app/api/ws";

import { user } from "../app/api/users/user";

function ChatPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedUser: user = useSelector(selectUser);

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
  }, [navigate, dispatch]);

  //this is where a socket server instance is created

  let WSCONN: WebSocket | undefined = undefined;
  if (selectedUser.Id) {
    WSCONN = initializeWebSocketServerConnection(selectedUser.Id);
    SendMessage({chat_id:"fa8ded55-efd1-463d-8ed8-e3e95f435191", sender_id:"72845712-bf21-4ef9-9c85-938f80ffda93", content:"Hello ws"}, WSCONN )
  }
  function handleMessage(msg: IMessageBase) {
    if (msg.sender_id == "") return;
    if (WSCONN) SendMessage(msg, WSCONN);
  }

  return (
    <div className="flex h-[100vh] items-center justify-center  border ">
      <ChatPageLayout>
        <ChatComponent msgHandler={handleMessage} />
      </ChatPageLayout>
    </div>
  );
}

export default ChatPage;
