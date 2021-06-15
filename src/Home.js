import React from 'react';
import "./Home.css";
import "./Home.css";
import Product from "./Product";
import CarouselContainer from "./CarouselContainer";

//


function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="home__image">
        <CarouselContainer/>
      </div>
      <div className="txt">
        <h1>Bringing You the best hand drawn Images.</h1>
      </div>
      <div className="home__row mb-md-5">
        <Product
          id="1922893982"
          title="Squirrel with pointed teeth"
          price={12.0}
          image="/dc1.jpg"
          rating={4}
        />
        <Product
          id="3837028373"
          title="Elephant on a wall"
          price={20.0}
          image="https://images.pexels.com/photos/3977529/pexels-photo-3977529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="383726373"
          title="Hands connect"
          price={15.0}
          image="https://images.pexels.com/photos/3459713/pexels-photo-3459713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          rating={3}
        />
        <Product
          id="3837428373"
          title="Illuminated Face Paints"
          price={10.0}
          image="dc2.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="3837020073"
          title="Spiral Flower Petals"
          price={20.0}
          image="dc3.jpg"
          rating={4}
        />
        <Product
          id="3837020073"
          title="Face Colored"
          price={20.0}
          image="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          rating={4}
        />
      </div>
      </div>
    </div>
  );
}

export default Home;
