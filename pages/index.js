import Booking from "../components/organisms/Booking";
import Hero from "../components/organisms/Hero";
import Plans from "../components/organisms/Plans";
import Fleet from "../components/organisms/Fleet";
import Banner from "../components/molecules/Banner";
import Choose from "../components/organisms/Choose";
import Reviews from "../components/organisms/Reviews";
import Faq from "../components/organisms/Faq";
import Download from "../components/organisms/Download";

const Home = ({ fleet }) => {
  return (
    <>
      <Hero />
      <Booking />
      <Plans />
      <Fleet fleet={fleet} />
      <Banner />
      <Choose />
      <Reviews />
      <Faq />
      <Download />
    </>
  );
};
export default Home;
