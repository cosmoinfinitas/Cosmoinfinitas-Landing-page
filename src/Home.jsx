import React from "react";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ViewCard from "./components/ViewCard";

const Home = () => {
  return (
    <>
      <Header />
      <ViewCard />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
