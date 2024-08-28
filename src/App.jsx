// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import { Routes ,Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import Chat from './pages/Chat/chat'
import Profileupdate from './pages/ProfileUpdate/Profileupdate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { AppContext } from './context/AppContext';

const App = () => {

  const navigate=useNavigate();
  const {loadUserData}=useContext(AppContext)

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        navigate('/chat')
       
        await loadUserData(user.uid)

      }
      else{
        navigate('/')

      }

    })

  },[])
  return (
    <>
    <ToastContainer/>
      <Routes>
      <Route path='/Chat_App' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<Profileupdate/>}/>

    </Routes>
    </>
  );
}

export default App;
