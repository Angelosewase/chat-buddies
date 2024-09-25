import { message } from "../../app/features/chat/chatSlice";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const MessagesComponent: React.FC<{
  messages: message[] | null;
  userId: string;
}> = ({ messages = [], userId }) => {
  console.log("messages: ", messages);
  console.log("user id", userId);
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
    <div className="flex flex-col px-10 py-2   border flex-1 overflow-scroll">
      {messages &&
        messages?.map((message) =>
          message.sender_id === userId ? (
            <SentMessage {...message} />
          ) : (
            <ReceivedMessage {...message} />
          )
        )}
    </div>
  );
};

export default MessagesComponent;
