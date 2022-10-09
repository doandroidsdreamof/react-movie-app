import React from "react";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import DetailCover from "../components/Detail/DetailCover.jsx";
import SectionSecond from "../components/Detail/SectionSecond.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../Data";
import PageLayout from "../components/Layouts/PageLayout.jsx";

const DetailPage = () => {
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const getById = `https://api.themoviedb.org/3/movie/${id}?` + data.requestSearchByID;
  const getSimilarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?` + data.requestSearchByIDSimilar;
  //console.log("detail page =>", id);

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

  //console.log("benzer=>", similar);

  return (
    <PageLayout
    nav={<SideNav />}
    aside={<Aside DetailPage={"DetailPage"} trendData={getSimilarMovies} />}
    slider={ <DetailCover key={details.length} passDetail={details} />}
    detailPage={'detailPage'}
    sectionSecond={<SectionSecond />}
  />

  );
};

export default DetailPage;
