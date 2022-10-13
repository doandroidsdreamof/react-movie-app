import React, { useEffect, useState } from 'react'

function GenresDetail({ genresList }) {
    const [genreName, setGenreName] = useState([])

    useEffect(() => {
        genreConvert()
    }, [genresList])

    function genreConvert() {
        const parseGenre =  []
        for (let i in genresList.genres) {
            parseGenre.push(genresList.genres[i].name)
        }
        setGenreName(parseGenre)
    }

    return (
        <>
            {genreName.map((items, index) => (
                <button
                    key={index.length}
                    className="hover:bg-black hover:text-white bg-transparent  md:py-2 w-fit z-50 mt-0  py-1 md:text-base text-xs bottom-4 relative transition ease-in duration-200 uppercase px-8  font-semibold border rounded  "
                >
                    {items}
                </button>
            ))}
        </>
    )
}

export default GenresDetail
