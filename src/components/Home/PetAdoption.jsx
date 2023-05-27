import { FaHospitalUser } from "react-icons/fa";


const PetAdoption = () => {
    return (
        <div className='mx-28 mt-20 rounded-lg '>
       <div className='flex items-center'>
        <FaHospitalUser className='text-5xl gap-4 text-sky-600 mx-2'></FaHospitalUser>
         <h1 className='text-4xl text-cyan-900 font-bold my-16 text-start'>Veterinary Care</h1>
       </div>
       <div className='grid lg:grid-cols-2 gap-10 grid-cols-1 '>
       <div  className='grid  grid-cols-1  p-10 rounded'>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Dolor Risus</h3>
                <p className='text-start text-stone-400 text-lg'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Vel Nunc Mauris</h3>
                <p className='text-start text-stone-400 text-lg'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
            </div>
            <div>
                <h3 className='font-bold text-sky-600 text-2xl text-start'>Mauris Nunc</h3>
                <p className='text-start text-stone-400 text-lg'>Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
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