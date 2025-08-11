import Container from "../components/common/Container";
import Divider from "../components/common/Divider";
import AboutHero from "../components/once/aboutHero";
import AllServices from "../components/once/AllServices";
import AboutClearVision from "../components/once/ServiceClearVision";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Divider />
      <AllServices />
      <AboutClearVision />
      <Container />
    </div>
  );
};

export default About;
