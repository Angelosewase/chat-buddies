import ReactTimeago from "react-timeago";
import { message } from "../../app/features/chat/chatSlice";

function ReceivedMessage({content, created_at}:message) {
  return (
    <div className="self-start flex flex-col items-start my-1 ">
      <p className="text-sm text-gray-400 font-mono "><ReactTimeago date={created_at} /></p>
      <p className="bg-white pl-2 pr-4 py-1 rounded-r-lg  rounded-bl-lg shadow">
        {content}
      </p>
    </div>
  );
}

export default ReceivedMessage;
