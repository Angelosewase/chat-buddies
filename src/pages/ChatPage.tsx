import ChatPageLayout from "./ChatPageLayout";

function ChatPage() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center ">
       <ChatPageLayout>
          <h1>this is the content of a chat</h1>
       </ChatPageLayout>
    </div>
  );
}

export default ChatPage;
