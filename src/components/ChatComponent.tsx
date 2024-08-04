import React from "react";
import SentMessage from "./messages/SentMessage";
import ReceivedMessage from "./messages/ReceivedMessage";
import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

function ChatComponent() {
  return (
    <div className="relative flex flex-col h-[100vh]">
      <Header />
      <MessagesComponent />
      <MessageInput />
    </div>
  );
}

export default ChatComponent;

const Header: React.FC = () => {
  return (
    <div className="w-full bg-white  sticky top-0 right-0 left-0 p-2  pl-8  flex  ">
      <img
        src="/assets/Ellipse 1.png"
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-2">
        <p className="font-semibold  -mb-1  ">Liam Anderson</p>
        <p className="text-sm text-blue-500 ">online</p>
      </div>

      <span className="ml-auto  mr-4 hover:cursor-pointer">
        <EllipsisVerticalIcon className="h-8   text-gray-500 " />
      </span>
    </div>
  );
};

const MessagesComponent: React.FC = () => {
  return (
    <div className="flex flex-col px-10 py-2   border flex-1">
      <SentMessage />
      <ReceivedMessage />
      <ReceivedMessage />
      <SentMessage />
    </div>
  );
};

const MessageInput: React.FC = () => {
  return (
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
    </div>
  );
};
