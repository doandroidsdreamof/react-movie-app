import React, {useRef} from 'react'

 function DeleteAccountModal({modalRef}) {

  return (
    <div ref={modalRef}  tabIndex="-1" className=" overflow-y-auto overflow-x-hidden  m-auto left-0 z-50 md:inset-0 h-modal md:h-full fixed">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative  rounded-lg shadow bg-gray-700">
          <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" data-modal-toggle="popup-modal">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14  text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="mb-5 text-lg font-normal  text-gray-400">Are you sure you want to delete this product?</h3>
            <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Yes, I'm sure
            </button>
            <button data-modal-toggle="popup-modal" type="button" className="  focus:ring-4 focus:outline-none 0 rounded-lg border  text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500  hover:bg-gray-600 focus:ring-gray-600">No, cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default DeleteAccountModal