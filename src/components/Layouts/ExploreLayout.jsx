import React, { useEffect, useState  } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../../Data'
import MovieExplore from '../Explore/MovieExplore.jsx'
import SearchBar from '../AsideBar/SearchBar.jsx'
import GenresExplore from '../Explore/GenresExplore.jsx'
import SortInput from '../Explore/SortInput.jsx'

function ExploreLayout(props) {
    const [initialMovies, setInitialMovies] = useState([])
    const [page, setPage] = useState(1)
    const [getData, setGetData] = useState(data.requestExploreInitial)


    useEffect(() => {
        fetch(`${getData}${page}` + '&include_adult=false')
            .then((res) => res.json())
            .then((get) => setInitialMovies([...initialMovies, ...get.results]))
            .catch((err) => {
                console.error(err)
            })
    }, [page, props.logic, getData])

    const infiniteIncrease = () => {
        setPage(page < 1000 ? page + 1 : page)
    }
    function onChangeSort(e) {
        const inputValue =  e.target.innerText
        setInitialMovies([])
        switch (inputValue) {
            case 'Top Rated':
                setGetData(data.requestTopRatedSort)
                break
            case 'Most Popular':
                setGetData(data.requestPopularSort)
                break
            case 'Most Recent':
                setGetData(data.requestRecentSort)
                break
        }
    }


    return (
        <section className=" flex overflow flex-row  bg-bg-color ">
            <div className="  h-full max-h-screen   flex flex-col  ">{props.sideNav}</div>
            <div className="flex flex-col w-full overflow-hidden ">
                <div className="w-full    max-h-screen    bg-bg-color ">
                    <div
                        id="scrollableDiv"
                        className="h-onehundred  bg-bg-color overflow-y-scroll flex flex-col gap-y-7"
                    >
                        <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl ">
                            Explore Movies
                        </h1>
                        <SearchBar explorePage={props.logic} />

                        <div className="flex flex-col  gap-y-5 px-6 md:px-0 md:flex-row justify-center md:gap-x-3 md:justify-center ">
                            <SortInput onChange={(get) => onChangeSort(get)} />
                            <GenresExplore />
                        </div>
                        <InfiniteScroll
                            dataLength={initialMovies.length}
                            next={infiniteIncrease}
                            hasMore={true}
                            loader={<h4></h4>}
                            scrollableTarget="scrollableDiv"
                        >
                            <div
                                className={`   items-center   overflow-hidden mt-12 order-3 h-onehundred   w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4     lg:px-32 gap-5   px-2 md:px-10 `}
                            >
                                {initialMovies.map((el, id) => (
                                    <MovieExplore key={initialMovies.length} explore={el} />
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
