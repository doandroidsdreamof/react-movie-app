import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../../Data'
import MovieExplore from '../Explore/MovieExplore.jsx'
import SearchBar from '../AsideBar/SearchBar.jsx'

function ExploreLayout(props) {
    const [initialMovies, setInitialMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setPage(1)
        fetch(`${data.requestExploreInitial}${page}`)
            .then((res) => res.json())
            .then((get) => setInitialMovies([...initialMovies, ...get.results]))
            .catch((err) => {
                console.error(err)
            })
    }, [page, props.logic])

    const infiniteIncrease = () => {
        setPage(page < 1000 ? page + 1 : page)
    }

    return (
        <section className=" flex overflow flex-row bg-bg-color">
            <div className=" w-fit h-full max-h-screen   flex flex-col flex-grow ">{props.nav}</div>
            
            <div className="flex flex-col overflow-hidden">
 
 
                <div className=" w-full  max-h-screen  bg-bg-color ">
      
          
                    <div id="scrollableDiv" style={{ height: '100%', overflowY: 'scroll'}}>
                    <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                            Explore Movies
                        </h1>
                <SearchBar  expolorePage={props.logic}/>
                   
                            <div className="flex flex-col gap-y-5 md:flex-row justify-center md:gap-x-3 md:justify-center ">
                                {props.sortInput}
                                {props.filterInput}
                            </div>
                        <InfiniteScroll
                            dataLength={initialMovies.length}
                            next={infiniteIncrease}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            scrollableTarget="scrollableDiv"
                        >
                            <div
                                className={`card-place  justify-center overflow-hidden mt-12 order-3 h-onehundred grid-flow-row    w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10 `}
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

/*



 







*/
