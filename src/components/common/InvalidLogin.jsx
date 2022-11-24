import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const InvalidLogin = (props) => {
useEffect(()=>{
if(props.error === true){
  injectStyle()
  const notify = () => toast.dark('Login Unsuccessful.')
  notify()
}
},[props.error])



  return (
    <ToastContainer />
  )
}


export default InvalidLogin