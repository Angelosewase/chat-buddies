import React, { useCallback, useEffect, useState } from "react";
import ChatComponent from "./Contact";
import {
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Chat, getChats } from "../app/api/chat/chat";
import Modal from "react-modal";
import debounce from 'lodash/debounce';
import { searchUsers } from "../app/api/users/user";

Modal.setAppElement("#root"); // Recommended for accessibility

function Chats() {
  const [chatstate, setChatState] = useState<Chat[] | null>(null);

  async function getAndUpdatetheChatState() {
    const chats = await getChats();
    if (chats) {
      setChatState(chats);
    }
  }
  useEffect(() => {
    getAndUpdatetheChatState();
  }, []);

  return (
    <div className="w-[22%]  border-gray-100  shadow-md  pl-4 flex flex-col pt-4">
      <div>
        <HeaderLogo />
      </div>
      <div className="flex  gap-2   mr-4  my-3  ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search messages,people,etc"
          className=" px-2 flex-1  py-1 border-2  outline-sky-400  border-gray-200  rounded-md "
        />
        <AddChatComponent />
      </div>
      {chatstate ? (
        <ChatsComponent chats={chatstate} />
      ) : (
        <>
          <p className="flex-1  text-gray-400 font-serif flex items-center justify-center">
            there are no chats created yet
          </p>
        </>
      )}
      <Menu />
    </div>
  );
}

export default Chats;

const ChatsComponent: React.FC<{ chats: Chat[] }> = ({ chats }) => {
  return (
    <div className="flex-1 flex-col flex  gap-2 ">
      {chats.map((chat, idx) => (
        <ChatComponent chat={chat} key={idx} />
      ))}
    </div>
  );
};

//the menu component for multiple options for a user

const Menu: React.FC = () => {
  return (
    <div className="w-full  flex  justify-between items-center pr-3 ">
      <Profile />
      <Cog6ToothIcon className="h-6 " />
    </div>
  );
};

//the profile component

const Profile: React.FC = () => {
  return (
    <div className="flex py-3    gap-2  ">
      <div className="relative ">
        <img
          src="/assets/Ellipse 1.png"
          alt="profile picture"
          className="w-8"
        />
        <span className="w-2 h-2 rounded-full bg-sky-400 absolute bottom-0 right-0" />
      </div>

      <div>
        <p className="text-sm  font-semibold ">Angel</p>
        <p className="text-xs text-gray-400 -mt-1">some details </p>
      </div>
    </div>
  );
};

//the header logo
const HeaderLogo: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <img src="/assets/logo.png" alt="chat buddies logo" className="w-15" />
        <p className="text-xl font-semibold text-sky-400">Chat buddies</p>
      </div>
    </>
  );
};

const AddChatComponent: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  // Functions to open and close the modal
  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };
  return (
    <>
      <button className="p-2 rounded bg-sky-400 " onClick={openModal}>
        <PlusIcon className="bg-sky-400  text-white h-4" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="fixed inset-0 flex items-center justify-center z-50 w-4/12 mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 "
      >
        <div className="bg-white rounded-lg shadow-lg p-3  h-96 w-full">
          <div className="w-full flex ">
            <label className="flex gap-2  w-full   mx-2 ">
              <MagnifyingGlassIcon className="w-6 " />
              <SearchInput />
            </label>

            <button
              className="text-xl font-semibold px-2 hover:bg-gray-100 rounded hover:text-red-500"
              onClick={closeModal}
            >
              X{" "}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const SearchInput: React.FC = () => {
  const debouncedSearch = useCallback(debounce((query: string) => {
    searchUsers(query);
  }, 3000), []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="flex-1 p-2  outline-sky-300 outline-2 border rounded-lg border-gray-300 placeholder:text-base"
        placeholder="search users  by their names "
        onChange={handleSearch}
      />
    </>
  );
};
