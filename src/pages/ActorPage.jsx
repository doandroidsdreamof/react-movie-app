import React, {useEffect,useState} from 'react';
import { useParams,Link } from "react-router-dom";
import data from '../../Data';
import ActorLayout from "../components/Layouts/ActorLayout.jsx";
import SideNav from "../components/Navbar/SideNav.jsx";
import ActorDetail from '../components/Actor/ActorDetail.jsx'


 const ActorPage = () => {
    let { person_id } = useParams();
    const [actor, setActor] = useState([]);
    let urlBase = `https://api.themoviedb.org/3/person/${person_id}?`

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


  />
  )
}


export default ActorPage;