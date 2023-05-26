import { BsFillHouseHeartFill, BsFillLightningChargeFill } from "react-icons/bs";
import {FaCat } from "react-icons/fa";
import {SiVlcmediaplayer } from "react-icons/si";
import {GiSeatedMouse } from "react-icons/gi";


const ServiceCategories = () => {
    return (
        <div>
            <div>
                <h1 className="ml-20 text-2xl my-5 font-semibold">Our Services</h1>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                    <div>
                        <FaCat className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Grooming</h1>
                    </div>
                    

                    <div>
                        <BsFillHouseHeartFill className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Pets Hotel</h1>
                    </div>

                    <div>
                        <BsFillLightningChargeFill className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Veterinary Care</h1>
                    </div>

                    <div>
                        <SiVlcmediaplayer className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Pets Playing</h1>
                    </div>

                    <div>
                        <GiSeatedMouse className='text-4xl w-full mx-auto text-sky-500' />
                    <h1 className='flex justify-center'>Adoption</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategories;