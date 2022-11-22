import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const SignOutModal = (props) => {
useEffect(()=>{
if(props.out === true){
  injectStyle()
  const notify = () => toast.dark('logged out successfully')
  notify()
}
},[props.out])



  return (
    <ToastContainer />
  )
}


export default SignOutModal