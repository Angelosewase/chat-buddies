import React from 'react'
import Chats from '../components/chats'

function ChatPageLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-1   h-full'>
     <Chats />
     <div className='bg-gray-100 flex-1'>
        {children}
     </div>
    </div>
  )
}

export default ChatPageLayout