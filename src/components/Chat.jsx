import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from '../firebase'
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import SendMessage from './SendMessage';

const Chat = () => {
const [messages, setMessages] = useState([]);
const scroll = useRef()

useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
        let messages = []
        querySnapShot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id})
        })
        setMessages(messages)
    })
    return () => unsubscribe()
})

  return (
    <>
        <main className='flex flex-col p-[10px] relative'>
            {messages.map((msg) => (
                <Message  msg={msg} key={msg.id}/>
            ))}
        </main>
        <SendMessage />
        {/* send message component */}
          <span ref={scroll}></span>
    </>
  )
}
export default Chat
