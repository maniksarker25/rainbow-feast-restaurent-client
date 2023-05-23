import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import RainbowFeast from "../RainbowFeast/RainbowFeast";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RainbowFeast-Home</title>
      </Helmet>
      <Banner />
      <Category />
      <RainbowFeast />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <FeaturedItem />
      <Testimonials />
    </div>
  );
};

export default Home;
