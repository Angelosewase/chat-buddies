import { UserIcon } from "@heroicons/react/24/outline";
import { Chat } from "../app/api/chat/chat";
import {
  parseDatabaseParticipantsString,
  removeLoggedInUserFromChatParticipantsArray,
} from "../app/utils/chat";
import { useSelector } from "react-redux";
import { selectUser, UserState } from "../app/features/user/userSlice";
import { GetuserById, user } from "../app/api/users/user";
import { useEffect, useState } from "react";
// import { IChatBase, message } from "../app/features/chat/chatSlice";

function ChatComponent({ chat }: { chat: Chat }) {
  const [returnedUser, setReturnedUser] = useState<user | null>(null);

  const loggedInUser: UserState = useSelector(selectUser);

  let participantsArray = parseDatabaseParticipantsString(chat.participants);

  participantsArray = removeLoggedInUserFromChatParticipantsArray(
    participantsArray,
    loggedInUser.Id || ""
  );

  useEffect(() => {
    async function fetchUser() {
      const chatMember = await GetuserById(participantsArray[1]);
      setReturnedUser(chatMember);
    }

    fetchUser();
  });

  //bind the user object(contact)

  return (
    <div
      className="flex px-2 hover:bg-gray-100 py-1 rounded-l"
      onClick={() => handleContactComponentClick(returnedUser)}
    >
      <UserIcon className="bg-gray-100 rounded-full w-8 h-8 p-1" />
      <div className="flex-1 ml-4">
        <p className="text-sm font-semibold">
          {returnedUser &&
            `${returnedUser.First_name} ${returnedUser.Last_name}`}
        </p>
        <p className="text-xs text-gray-400">
          {chat.lastMessage !== ""
            ? chat.lastMessage
            : `chat with ${returnedUser?.First_name}`}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400 font-mono -mb-1">time</p>
        <span className="bg-blue-500 text-xs text-white font-semibold px-1 -py-0.5 rounded-full">
          1
        </span>
      </div>
    </div>
  );
}

export default ChatComponent;

async function handleContactComponentClick(user: user | null) {
  if (!user) {
    return;
  }
   
  // get the messages sent between  the users

  //combine them into the dispalabl format
  //dispacth the add chat action
  //
}

// function changeChatAndMessagesIntoChatBase(
//   chatID: string,
//   Messages: message[],
//   user: user
// ): IChatBase {
//   return {
//     ...user,
//     chatId: chatID,
//     Messages,
//   };
// }
