import Banner from "../components/Home/Banner";
import Discount from "../components/Home/Discount";
import GroomingSalon from "../components/Home/GroomingSalon";
import News from "../components/Home/News";
import PetAdoption from "../components/Home/PetAdoption";
import PetGoods from "../components/Home/PetGoods";
import PetsHotel from "../components/Home/PetsHotel";
import ServiceCategories from "../components/Home/ServiceCategories";
import Testimonials from "../components/Home/Testimonials";
import VaterinaryCare from "../components/Home/VaterinaryCare";
import PetPlaying from "../components/PetPlaying";

const Home = () => {
    return (
        <>
            <Banner />
            <ServiceCategories />
            <GroomingSalon />
            <PetGoods />
            <PetsHotel />
            <Discount />
            <VaterinaryCare />
            <News />
            <PetPlaying />
            <Testimonials />
            <PetAdoption />
        </>
    );
};

export default Home;