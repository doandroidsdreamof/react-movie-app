import React from 'react'

const BookmarkLayout = (props) => {
  return (
    <section className="flex flex-col h-screen  overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.sideNav}</div>
        <div className="detail-second-section invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
          <div className={`w-onehundred mr-auto text-center left-0 relative px-3 md:px-8 h-full `}>
            <h1 className="text-4xl sm:text-4xl mt-12  md:text-6xls bg-clip-text font-extrabold text-transparent  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Bookmarks
            </h1>
            <div
              className={`border-2  items-center   overflow-hidden gap-y-10  mt-12 order-3 h-full   w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4     lg:px-32 gap-5   px-7 md:px-10 `}
            >


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookmarkLayout
