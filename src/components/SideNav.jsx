import React from 'react'

 const SideNav = () => {
  return (
   <>
   
    <div
      className="sidebar  border-r hidden md:block  h-full   border-gray-600 relative top-0 bottom-0 left-0 p-2 w-[230px] overflow-y-auto text-center bg-bg-color"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">Movie App</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-bookmark-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span className="text-sm rotate-180" id="arrow">
            <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>


   </>
  )
}
export default SideNav