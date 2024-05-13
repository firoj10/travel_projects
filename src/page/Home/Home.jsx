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
    
       

        // useEffect(() => {
        
        //   fetch('./airport_codes.csv')
        //     .then((response) => response.text())
        //     .then((csvText) => {
        //       const rows = csvText.split('\n');
        //       const headers = rows[0].split(',');
        //       const data = rows.slice(1).map((row) => {
        //         const values = row.split(',');
        //         return headers.reduce((obj, header, index) => {
        //           obj[header] = values[index];
        //           return obj;
        //         }, {});
        //       });
        //       setAirportData(data);
        //       console.log('111111111111');
        //     })
        //     .catch((error) => console.error('Error loading CSV data:', error));
        // }, []);
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