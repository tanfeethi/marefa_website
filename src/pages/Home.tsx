import Container from "../components/common/Container"
import FAQs from "../components/common/FAQs";
import Hero from "../components/once/Hero";
import Sponsors from "../components/once/Sponsors"
import StaticSection from "../components/once/StaticSection";

const Home = () => {
    return (
        <div>
            <Hero />
            <StaticSection />
            <FAQs />
            <Sponsors />
            <Container />
        </div>
    )
}

export default Home;