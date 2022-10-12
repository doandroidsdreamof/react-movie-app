import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../../Data'
import MovieExplore from '../Explore/MovieExplore.jsx'
import SearchBar from '../AsideBar/SearchBar.jsx'

function ExploreLayout(props) {
    const [initialMovies, setInitialMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`${data.requestExploreInitial}${page}`)
            .then((res) => res.json())
            .then((get) => setInitialMovies([...initialMovies, ...get.results]))
            .catch((err) => {
                console.error(err)
            })
    }, [page,props.logic])

    const infiniteIncrease = () => {
        setPage(page < 1000 ? page + 1 : page)
    }

    return (
        <section className="flex flex-col h-full  bg-bg-color">
            <div className="flex flex-1 overflow-x-hidden ">
                <div className="Side-nav  flex  order-1">{props.nav}</div>
                <div className="detail-second-section  flex  flex-1 flex-col  order-2     overflow">
                        <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                            Explore Movies
                        </h1>
                        <div className=" pt-12   mx-auto justify-center w-full   relative  flex ">
                        <SearchBar  expolorePage={props.logic}/>
                        </div>
                        <div className=" lg:h-1/2 h-1/4   px-7 md:px-0 mt-5 w-full md:w-fit  justify-center  lg:ml-auto lg:-translate-x-4  mx-auto  ">
                            <div className="flex flex-col gap-y-5 md:flex-row justify-center md:gap-x-3 md:justify-center ">
                                {props.sortInput}
                                {props.filterInput}
                            </div>
                            <InfiniteScroll
                                dataLength={initialMovies.length}
                                next={infiniteIncrease}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                            >
                                <div
                                    className={`card-place justify-center mt-12 overflow-hidden h-full w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10 `}
                                >
                                    {initialMovies.map((el, id) => (
                                        <MovieExplore key={id} explore={el} />
                                    ))}
                                </div>
                            </InfiniteScroll>
                        </div>
            
                </div>
            </div>
        </section>
    )
}

export default ExploreLayout
