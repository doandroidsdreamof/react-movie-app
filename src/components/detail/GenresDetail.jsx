import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

function GenresDetail({ genresList }) {
  const [genreName, setGenreName] = useState([])

  useEffect(() => {
    genreConvert()
  }, [genresList])

  function genreConvert() {
    const parseGenre = []
    for (let i in genresList.genres) {
      parseGenre.push(genresList.genres[i].name)
    }
    setGenreName(parseGenre)
  }

  return (
    <div className="flex flex-row order-3 ml-8 mr-auto  -translate-y-3 flex-wrap gap-2 max-w-eighty z-50 h-fit">
      {genreName.map((items, index) => (
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label={items} />
        </Stack>
      ))}
    </div>
  )
}

export default GenresDetail
