import Lottie from 'lottie-react';
import groomingAnimation from "../../assets/Animation/pets-family.json"
import {  FaDog } from 'react-icons/fa';


const PetAdoption = () => {
    return (
        <div className='mx-28 mt-20 rounded-lg'>
       <div className='flex items-center'>
        <FaDog className='text-5xl gap-4 text-sky-600 mx-2'></FaDog>
         <h1 className='text-4xl text-cyan-900 font-bold my-5 text-start'>Adoption</h1>
       </div>
       <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 '>
       <div  className='grid  grid-cols-1 bg-sky-50 p-10 rounded'>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Aliquam</h3>
                <p className='text-start text-stone-400 text-lg'>
                Elementum etiam auctor purus accumsan, elit. Adipiscing quisque a nisl, imperdiet. Ligula scelerisque sollicitudin turpis.
                </p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Ipsum Fringilla</h3>
                <p className='text-start text-stone-400 text-lg'>
                Integer mattis bibendum in mattis pulvinar viverra augue. Aliquam molestie neque, senectus vel, bibendum vitae.
                </p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Ultricies</h3>
                <p className='text-start text-stone-400 text-lg'>
                Lobortis ac tellus dictum gravida aliquam. Dignissim mattis eget elementum pharetra, tristique. Quam erat feugiat.
                </p>
            </div>
            <div>

            </div>
        </div>
        {/* lottie  */}
        <div className='flex items-center '>
                    <Lottie className='w-96 ml-28' animationData={groomingAnimation} loop={true} />
                </div>
       </div>
    </div>
    );
};

export default PetAdoption;