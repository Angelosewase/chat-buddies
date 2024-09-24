import { message } from "../../app/features/chat/chatSlice";
import TimeAgo from 'react-timeago'

function SentMessage({content, created_at}:message) {

  return (
    <div className="self-end  flex flex-col items-end my-1 ">
      <p className="text-sm text-gray-400 font-mono "><TimeAgo date={created_at} /></p>
      <p className="bg-blue-400 rounded-l-lg  rounded-br-lg px-2 pl-4 py-1 text-white shadow">{content}</p>
    </div>
  );
}

export default SentMessage;
