import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const InvalidLogin = (props) => {
useEffect(()=>{
if(props.error === true){
  injectStyle()
  const notify = () => toast.dark('Login unsuccessful.',{
    toastId: 9,
  })
  notify()
}
if(props.ok === true){
  injectStyle()
  const notify = () => toast.dark('Login successful.', {
    toastId: 8,
  })
  notify()
}
},[props.error, props.ok])



  return (
    <ToastContainer />
  )
}


export default InvalidLogin