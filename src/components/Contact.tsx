import { UserIcon } from "@heroicons/react/24/outline"

function Contact({name,latestMessage, time}:{name:string,latestMessage:string, time:string}) {
  return (
    <div className="flex px-2   hover:bg-gray-100 py-1 rounded-l ">
      <UserIcon className="bg-gray-100 rounded-full w-8  h-8  p-1"/>
      <div className="flex-1  ml-4">
        <p className="text-sm font-semibold ">{name}</p>
        <p className="text-xs text-gray-400">{latestMessage}</p>
      </div>

      <div>
        <p className="text-sm text-gray-400 font-mono -mb-1">{time}</p>
        <span className="bg-blue-500 text-xs text-white font-semibold px-1 -py-0.5 rounded-full  ">1</span>
      </div>
    </div>
  )
}

export default Contact