import React from "react";
import { EllipsisVerticalIcon, UserIcon } from "@heroicons/react/24/outline";
import { selectChat } from "../app/features/chat/chatSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/user/userSlice";
import MessageInput from "./messages/InputComponent";
import MessagesComponent from "./messages/MessageComponent";
import { IMessageBase, SendMessage } from "../app/api/ws";

function ChatComponent({ wsConne }: { wsConne: WebSocket | undefined }) {
  const chat = useSelector(selectChat);
  const user = useSelector(selectUser);

  function handleSendMessage(msg: string) {
    if (!wsConne) {
      return;
    }

    if (!chat.chatId || !user.Id){
      return
    }
    const message : IMessageBase ={
      chat_id:chat.chatId,
      sender_id: user.Id,
      content :msg
    }
    SendMessage(message, wsConne);
  }

  return (
    <div className="relative flex flex-col h-[100vh]">
      <Header
        First_name={chat.First_name}
        Last_name={chat.Last_name}
        Email={chat.Email}
      />
      <MessagesComponent messages={chat.Messages} userId={user.Id || ""} />
      {chat.Id && <MessageInput sendMessage={handleSendMessage} />}
    </div>
  );
}

export default ChatComponent;

const Header: React.FC<{
  First_name: string | null;
  Last_name: string | null;
  Email: string | null;
}> = ({ First_name, Last_name, Email }) => {
  if (!First_name || !Last_name || !Email) {
    return;
  }
  return (
    <div className="w-full bg-white  sticky top-0 right-0 left-0 p-2  pl-8  flex  ">
      <UserIcon className="bg-gray-100 rounded-full w-8 h-8 p-1" />
      <div className="ml-2">
        <p className="font-semibold  -mb-1  ">
          {First_name} {Last_name}
        </p>
        <p className="text-xs text-blue-500 ">{Email}</p>
      </div>

      <span className="ml-auto  mr-4 hover:cursor-pointer">
        <EllipsisVerticalIcon className="h-8   text-gray-500 " />
      </span>
    </div>
  );
};
