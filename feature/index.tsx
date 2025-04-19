import ContactUs from "./Contact Us";
import Display from "./Display";
import Introduce from "./Introduce";
import SilederYoutobe from "./SilederYoutobe";

const Home = async () => {
  return (
    <>
      <SilederYoutobe />
      <Display />
      <Introduce />
      <ContactUs />
    </>
  );
};

export default Home;
