import React from 'react'

const ActorLayout = (props) => {
    return (
        <section className="flex overflow flex-row  bg-bg-color">
                <div className=" flex  order-1 ">{props.sideNav}</div>
                <div className=" flex flex-col gap-y-9 md:gap-y-0 md:h-screen h-fit    order-2  justify-evenly   overflow-y-auto p-0 md:p-5  ">
                    <div className='flex md:flex-row  flex-col  overflow-hidden basis-9/12'>{props.actorDetail}</div>
                    <div className='relative w-full flex gap-4 py-6 overflow-x-auto basis-3/12 '>{props.actorMovies}</div>
            </div>
        </section>
    )
}

export default ActorLayout
