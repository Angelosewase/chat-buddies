import {
  FaceSmileIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const MessageInput: React.FC<{
  sendMessage: (msg: string) => void;
}> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>("");
  function handleSubmit() {
    if (message == "") {
      return;
    }
    sendMessage(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="w-full bg-white   px-4 py-1 flex items-center   pr-8">
        <div className="flex  rounded-md p-4 flex-1 ">
          <FaceSmileIcon className="w-6 text-gray-500  " />
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 outline-none ml-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <PaperClipIcon className="w-6 text-gray-500 mr-1" />
          <MicrophoneIcon className="w-6 text-gray-500 " />
        </div>
        <button className=" bg-blue-500 rounded flex items-center  ml-4 px-2 h-10 gap-2  hover:scale-105 transition-all">
          <p
            className="font-semibold text-white text-lg "
            onClick={handleSubmit}
          >
            send
          </p>
          <PaperAirplaneIcon className="w-6 text-gray-100 -rotate-45" />
        </button>
        <button type="submit" className="hidden"></button>
      </div>
    </form>
  );
};

export default MessageInput;
