import React, {useEffect,useState} from 'react';
import { useParams,Link } from "react-router-dom";
import data from '../../Data';

 const ActorPage = () => {
    let { person_id } = useParams();
    const [actor, setActor] = useState([]);
    let urlBase = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?`

    useEffect(()=>{

        fetch(urlBase + data.requestActor)
        .then((res) => res.json())
        .then((get) => setActor(get))
        .catch((err) => {
          console.error(err);
        });

    },[person_id])

    console.log(actor)
//  https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1 known for

  return (
    <div>ActorPage</div>
  )
}


export default ActorPage;