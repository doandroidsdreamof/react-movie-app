import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import data from "../../Data";
import Aside from "../components/aside-bar/Aside.jsx";
import DetailCover from "../components/detail/DetailCover.jsx";
import SectionSecond from "../components/detail/SectionSecond.jsx";
import PageLayout from "../components/layouts/PageLayout.jsx";
import SideNav from "../components/navbar/SideNav.jsx";


function DetailPage() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const getById = `https://api.themoviedb.org/3/movie/${id}?${  data.requestSearchByID}`;
  const getSimilarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?${  data.requestSearchByIDSimilar}`;

  useEffect(() => {
    fetchDetails(getById);
  }, [id]);

  async function fetchDetails(id) {
    try {
      const response = await fetch(id);
      const getData = await response.json();
      const passDetails = await getData;
      setDetails(passDetails);
    } catch (error) {
      console.error(err);
    }
  }


  return (
    <PageLayout
    sideNav={<SideNav />}
    aside={<Aside DetailPage="DetailPage" trendData={getSimilarMovies} />}
    slider={ <DetailCover key={details.length} passDetail={details} />}
    detailPage="detailPage"
    sectionSecond={<SectionSecond />}
  />

  );
}

export default DetailPage;
