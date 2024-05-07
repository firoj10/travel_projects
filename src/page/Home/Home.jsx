import Banner from "./Banner/Banner";
import SearchCard from "./SearchCard/SearchCard";
import './Home.css'
import Destination from "./Destination/Destination";
import WhyUs from "./WhyUs/WhyUs";
import TopHotels from "./TopHotels/TopHotels";
import CallToAction from "./CallToAction/CallToAction";
import TopRoutes from "./TopRoutes/TopRoutes";
import Contact from "./Contact/Contact";


const Home = () => {

    return (
        <div>
            <div className="slider_banner ">
                <Banner></Banner>
                <div className="slider_card container">
                <SearchCard></SearchCard>
            </div>
            </div>
            <Destination></Destination>
            <WhyUs></WhyUs>
            <TopHotels></TopHotels>
            <CallToAction></CallToAction>
            <TopRoutes></TopRoutes>
            <Contact></Contact>
            

        </div>
    );
};

export default Home;