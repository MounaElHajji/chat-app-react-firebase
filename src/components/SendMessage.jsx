import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, {useState} from 'react'
import {auth, db} from '../firebase'

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if(input === '') {
            alert('please enter a valid message')
            return
        }
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        });
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }


  return (
      <form className='h-14 w-full max-w-[780px] flex text-xl absolute bottom-0' onSubmit={onSubmitForm}>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='message' className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none'/>
      <button className="w-p[40%]" type="submit">Send</button>
    </form>
  )
}

export default SendMessage
