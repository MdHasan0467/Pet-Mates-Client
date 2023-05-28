import { BsFillHouseHeartFill, BsFillLightningChargeFill } from "react-icons/bs";
import {FaCat } from "react-icons/fa";
import {SiVlcmediaplayer } from "react-icons/si";
import {GiSeatedMouse } from "react-icons/gi";
import { Link } from "react-router-dom";

const ServiceCategories = () => {
    return (
        <div>
            <div>
                <h1 className="ml-20 text-2xl my-5 font-semibold">Our Services</h1>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mx-10">

                    <Link className="hover:bg-sky-50 p-10 rounded-2xl" to='/petGrooming'>
                        <FaCat className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Grooming</h1>
                    </Link>
                    

                    <Link className="hover:bg-sky-50 p-10 rounded-2xl" to='/petHotel'>
                        <BsFillHouseHeartFill className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Pets Hotel</h1>
                    </Link>

                    <Link className="hover:bg-sky-50 p-10 rounded-2xl" to='/petVeterinaryCare'>
                        <BsFillLightningChargeFill className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Veterinary Care</h1>
                    </Link>

                    <Link className="hover:bg-sky-50 p-10 rounded-2xl" to='/petPlay'>
                        <SiVlcmediaplayer className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Pets Playing</h1>
                    </Link>

                    <Link className="hover:bg-sky-50 p-10 rounded-2xl" to='/petAdoption'>
                        <GiSeatedMouse className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Adoption</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategories;