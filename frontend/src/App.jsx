import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import VerifyOTP from './pages/VerifyOTP';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import Verify from './pages/Verify';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}></Route>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}></Route>
        <Route path='/verify' element={<VerifyEmail/>}></Route>
        <Route path='/verify-otp/:email' element={<VerifyOTP/>}></Route>
        <Route path='/change-password/:email'  element={<ChangePassword/>}></Route>
         <Route  path='/forgot-password' element={<ForgotPassword/>}/>
          <Route  path='/verify/:token' element={<Verify/>}/>
      </Routes>
    </div>
  )
}

export default App
