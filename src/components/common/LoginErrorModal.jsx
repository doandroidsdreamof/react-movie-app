import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const LoginErrorModal = (props) => {
useEffect(()=>{
if(props.login === true){
  injectStyle()
  const notify = () => toast.dark('You are already logged in')
  notify()
}
},[props.login])



  return (
    <ToastContainer />
  )
}


export default LoginErrorModal