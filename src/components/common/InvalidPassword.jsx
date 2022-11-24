import React,{useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const InvalidPassword = (props) => {
useEffect(()=>{
if(props.error === true){
  injectStyle()
  const notify = () => toast.dark('Your password is invalid. Please try again.')
  notify()
}
if(props.ok === true ){
    injectStyle()
    const notify = () => toast.dark('Account deleted successfully.')
    notify()

}
},[props.error, props.ok])



  return (
    <ToastContainer />
  )
}


export default InvalidPassword