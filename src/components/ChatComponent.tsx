import React from "react";
import SentMessage from "./messages/SentMessage";
import ReceivedMessage from "./messages/ReceivedMessage";
import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { message, selectChat } from "../app/features/chat/chatSlice";
import { useSelector } from "react-redux";
import { IMessageBase } from "../app/api/ws";
import { selectUser } from "../app/features/user/userSlice";

function ChatComponent({ msgHandler}: { msgHandler: (msg: IMessageBase) => void}) {
  const chat = useSelector(selectChat);
  const user = useSelector(selectUser);

  function HandleClick(msg: string) {
    if (!chat.chatId) return;

    msgHandler({
      chat_id: chat.chatId,
      content: msg,
      sender_id: user.Id || "",
    });
  }

  return (
    <div className="relative flex flex-col h-[100vh]">
      <Header
        First_name={chat.First_name}
        Last_name={chat.Last_name}
        Email={chat.Email}
      />
      <MessagesComponent messages={chat.Messages} userId={user.Id || ""} />
      {chat.Id && <MessageInput func={HandleClick} />}
    </div>
  );
}

export default ChatComponent;

const Header: React.FC<{First_name: string | null;Last_name: string | null;Email: string | null;}> = ({ First_name, Last_name, Email }) => {
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

const MessagesComponent: React.FC<{messages: message[] | null;userId: string}> = ({ messages = [], userId }) => {

  console.log("messages: ",messages)
  console.log("user id", userId)
  if (!messages || userId == "") {
    return (
      <>
        <div className="flex flex-1 justify-center items-center">
          <p>chat buddies</p>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col px-10 py-2   border flex-1">
      {messages && (messages?.map((message) =>
        message.sender_id === userId ? (
          <SentMessage {...message} />
        ) : (
          <ReceivedMessage {...message} />
        ))
      )}
    </div>
  );
};

const MessageInput: React.FC<{ func: (msg: string) => void }> = () => {
  return (
    <form action="" onSubmit={(ev) => console.log(ev)}>
      <div className="w-full bg-white   px-4 py-1 flex items-center   pr-8">
        <div className="flex  rounded-md p-4 flex-1 ">
          <FaceSmileIcon className="w-6 text-gray-500  " />
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 outline-none ml-1"
          />
          <PaperClipIcon className="w-6 text-gray-500 mr-1" />
          <MicrophoneIcon className="w-6 text-gray-500 " />
        </div>
        <button className=" bg-blue-500 rounded flex items-center  ml-4 px-2 h-10 gap-2  hover:scale-105 transition-all">
          <p className="font-semibold text-white text-lg ">send</p>
          <PaperAirplaneIcon className="w-6 text-gray-100 -rotate-45" />
        </button>
        <button type="submit" className="hidden"></button>
      </div>
    </form>
  );
};
