import ChatPageLayout from "./ChatPageLayout";
import ChatComponent from "../components/ChatComponent";

function ChatPage() {

  return (
    <div className="flex h-[100vh] items-center justify-center  border ">
       <ChatPageLayout>
          <ChatComponent />
       </ChatPageLayout>
    </div>
  );
}

export default ChatPage;

