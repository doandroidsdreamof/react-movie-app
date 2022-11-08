import React, {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";

import data from '../../Data';
import ActorDetail from '../components/actor/ActorDetail.jsx'
import ActorMovies from '../components/actor/ActorMovies.jsx'
import ActorLayout from "../components/layouts/ActorLayout.jsx";
import SideNav from "../components/navbar/SideNav.jsx";

 function ActorPage() {
    const { person_id } = useParams();
    const [actor, setActor] = useState([]);
    const urlBase = `https://api.themoviedb.org/3/person/${person_id}?`

    useEffect(()=>{
        fetch(urlBase + data.requestPeople)
        .then((res) => res.json())
        .then((get) => setActor(get))
        .catch((err) => {
          console.error(err);
        });

    },[person_id])


//  https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1 known for
// `https://api.themoviedb.org/3/person/${person_id}/movie_credits?`

  return (
    <ActorLayout
    sideNav={<SideNav />}
    actorDetail={<ActorDetail actorDetail={actor} />}
    actorMovies={<ActorMovies />}


  />
  )
}


export default ActorPage;