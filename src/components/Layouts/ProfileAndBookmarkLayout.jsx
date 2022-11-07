import React from 'react'

 const ProfileAndBookmarkLayout = (props) => {
  return (
        <section className="flex flex-col h-screen  overflow  bg-bg-color">
          <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
            <div className="Side-nav  flex  order-1">{props.sideNav}</div>
            <div className="detail-second-section invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
              <div className={`w-onehundred mr-auto  left-0 relative px-3 md:px-8 `} >
             
             
              </div>
            </div>
          </div>
        </section>


      )



       }
    

  



export default ProfileAndBookmarkLayout;