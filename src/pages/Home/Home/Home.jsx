import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import ContactFeatured from "../ContactFeatured/ContactFeatured";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Home </title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <ContactFeatured></ContactFeatured>
      <ChefRecommends></ChefRecommends>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
