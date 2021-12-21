import React from "react";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Search from "../../components/form/Search";

const Home = () => (
  <div class="container px-1 px-md-5 px-lg-1 px-xl-5 mx-auto bg-white">
    <div>
      <Header />
      <Search />
      <Gallery />
    </div>
  </div>
);

export default Home;
