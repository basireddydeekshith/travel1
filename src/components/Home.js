import React from 'react';
import Kerka12 from '../images/kerla1.jpg';


function Home() {
  return (
    <div>
       <h1 className="heading">Travel Blog</h1>
      <div className="card-container">
        <div className="card">
        <img src={Kerka12} alt="Goa" />
          <div className="overlay">
            <h2>Goa</h2>
            <p>A place of paradise</p>
          </div>
        </div>
        <div className="card">
          <img src={Kerka12} alt="Kerala" />
          <div className="overlay">
            <h2>Kerala</h2>
            <p>Gods own country</p>
          </div>
        </div>
        <div className="card">
        <img src={Kerka12} alt="Himachal" />
          <div className="overlay">
            <h2>Himachal</h2>
            <p>Natures hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
