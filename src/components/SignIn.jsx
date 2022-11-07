import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'

const googleSingIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider);
}

const SignIn = () => {
  return (
    <div className='flex justify-center'>
      <GoogleButton 
        onClick={googleSingIn}
      />
    </div>
  )
}

export default SignIn
