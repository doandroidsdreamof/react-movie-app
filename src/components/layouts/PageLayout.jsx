import React from 'react'


const PageLayout = (props) => {
  return (
    <main className="flex flex-col h-screen   overflow bg-lm-bg dark:bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.sideNav}</div>
        <div
          className={
            props.explorePage
              ? 'hidden'
              : 'aside w-72 order-3 hidden lg:flex border-l border-l-gray-600'
          }
        >
          {props.aside}
        </div>
        <div className="detail-second-section invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
          <div
            className={
              props.homePage
                ? `w-onehundred mr-auto  left-0 relative px-3 md:px-8 `
                : `w-fit mr-auto left-0 relative px-0   `
            }
          >
            <div className="top-slider w-screen md:w-full  ">{props.slider}</div>
            {props.row ? <div className="row-layout   w-screen sm:w-full  ">{props.row}</div> : <></>}
            {props.sectionSecond}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageLayout


