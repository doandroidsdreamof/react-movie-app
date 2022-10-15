import React, {useEffect,useState} from 'react';
import data from '../../../Data';
import { useParams,Link } from "react-router-dom";


 const ActorMovies = () => {
    let { person_id } = useParams();
    let urlBase = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?`

    const [actorMovies, setActorMovies] = useState([]);

    useEffect(()=>{
        fetch(urlBase + data.requestActorMovies)
        .then((res) => res.json())
        .then((get) => setActorMovies(get.cast))
        .catch((err) => {
          console.error(err);
        });

    },[person_id])

    console.log(actorMovies)

  return (
<div className="relative w-full flex gap-4 py-6 overflow-x-auto">
    {actorMovies.map((items,i) =>(
        	<img className="h-36 aspect-video rounded-sm object-cover object-center dark:bg-gray-500 cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${items.backdrop_path}`} alt={items.original_title} />

    ))}

</div>
  )
}

export default ActorMovies