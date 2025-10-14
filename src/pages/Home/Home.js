import React from 'react';
import './Home.css';
import banner from '../../assets/img/banner-home.png'; // tu imagen de banner

const Home = () => {
  return (
    <section className="home">
      <img src={banner} alt="Banner principal" className="home-banner" />
    </section>
  );
};

export default Home;
