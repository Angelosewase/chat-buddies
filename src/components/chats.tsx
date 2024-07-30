import React from "react";
import Contact from "./Contact";
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/outline";

function Chats() {
  return (
    <div className="w-[22%]  border-gray-100  shadow-md  pl-4 flex flex-col">
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
        <button className="p-2 rounded bg-sky-400 ">
          <PlusIcon className="bg-sky-400  text-white h-4" />
        </button>
      </div>
      <Contacts />
      <Menu />
    </div>
  );
}

export default Chats;

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

const Contacts: React.FC = () => {
  return (
    <div className="flex-1 ">
      <Contact />
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="w-full  flex  justify-between items-center pr-3 ">
      <Profile />
      <Cog6ToothIcon className="h-6 " />
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="flex py-3    gap-2  ">
      <div className="relative ">
        <img
          src="/assets/Ellipse 1.png"
          alt="profile picture"
          className="w-8"
        />
              <span className="w-2 h-2 rounded-full bg-sky-400 absolute bottom-0 right-0"/>
      </div>


      <div>
        <p className="text-sm  font-semibold ">Angel</p>
        <p className="text-xs text-gray-400 -mt-1">some details </p>
      </div>
    </div>
  );
};
