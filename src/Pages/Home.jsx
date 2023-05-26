import Banner from "../components/Home/Banner";
import Discount from "../components/Home/Discount";
import GroomingSalon from "../components/Home/GroomingSalon";
import News from "../components/Home/News";
import PetGoods from "../components/Home/PetGoods";
import PetsHotel from "../components/Home/PetsHotel";
import ServiceCategories from "../components/Home/ServiceCategories";
import VaterinaryCare from "../components/Home/VaterinaryCare";

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
        </>
    );
};

export default Home;