import React from 'react'
import { auth } from '../firebase'

const Message = ({msg}) => {

  const messageClass = msg.uid === auth.currentUser.uid ? 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-br-full' : 'bg-[#e5e5ea] text-black float-left rounded-br-full'

  return (
    <div>
      <div className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`} >
        <p className='dixed mt-[-4rem] text-gray-600 text-xs'>{msg.name}</p>
        <p>{msg.text}</p>
      </div>
    </div>
  )
}

export default Message
