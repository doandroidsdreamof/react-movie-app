import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const ErrorModal = (props) => {
useEffect(()=>{
if(props.error === true){
  injectStyle()
  const notify = () => toast.dark('please login or register to use this feature')
  notify()
}
},[props.error])



  return (
    <ToastContainer />
  )
}


export default ErrorModal