//import { useState } from 'react'
//import {Profile} from './components/profile'
import { Login } from './components/login'
import './App.css'

function App() {
  // const testUser = {
  //   profileImage:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png",
  //   email:"test@test.com",
  //   userAlias:"John Doe"
  // }
  return (
    <>
    {/* <Profile profileImage={testUser.profileImage} email={testUser.email} userAlias={testUser.userAlias}>
    </Profile> */}
    <Login></Login>
    </>
  )
}

export default App
