import React from 'react';
import "./Home.css";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <button type="button" className="btn btn-primary">
          Click me!
        </button>
      <div className="home__row">
        <Product
          id="1922893982"
          title="Nativity Painting of people inside rome"
          price={12.0}
          image="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          rating={4}
        />
        <Product
          id="3837028373"
          title="The great Elephant"
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
          title="The light show"
          price={10.0}
          image="https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          rating={5}
        />
        <Product
          id="3837020073"
          title="Heat on leaves"
          price={20.0}
          image="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          rating={4}
        />
      </div>
      <div className="home__row">
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
