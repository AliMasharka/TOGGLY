import Button from "../components/Button";

import { arrowRight } from "../assets/icons";

const PopularProductCard = () => {
  return (
    <section
    id="about-us"
    className="max-container"
    >
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Everything <span className="text-sky-500/50">Want Know </span> About Us
      </h3>
      <p className="info-text m-auto mt-7 max-w-lg text-center">Explore the places you love with the SUV you love.
      More than a car Discover T10X smart device and configure your own device with smart device configurator.</p>
      <div className="flex justify-center items-center">
      <Button label="About Us"
     iconURL={arrowRight}/>
      </div>
    </section>
  );
};

export default PopularProductCard;