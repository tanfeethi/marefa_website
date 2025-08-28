import Container from "../components/common/Container";
import Divider from "../components/common/Divider";
import AboutHero from "../components/once/aboutHero";
import MaarefaOffers from "../components/once/MaarefaOffers";
import AboutClearVision from "../components/once/ServiceClearVision";
import WhyMaarefa from "../components/once/WhyMaarefa";

const About = () => {
  return (
    <>
      <AboutHero />
      <Divider />
      <MaarefaOffers />
      <WhyMaarefa />
      <Divider />
      <AboutClearVision />
      <Container />

    </>
  );
};

export default About;
