import Lottie from 'lottie-react';
import Animation from '../../assets/Animation/cute-dog.json'
import { FaCat } from 'react-icons/fa';

const PetsHotel = () => {
    return (
        <div>
            <section className="bg-sky-50 my-10">
	<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
		

              <div className='flex items-center'>
                    <Lottie className='w-96' animationData={Animation} loop={true} />
                </div>


		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl flex font-bold text-sky-600 leading-none sm:text-6xl">
             <FaCat /> <span className='mx-5'>Pets Hotel</span>
			</h1>
			<div className="mt-5">
                <div className="my-3">
                <h1 className="text-2xl font-semibold text-sky-600">Bath & Brush</h1>
                <p className="text-slate-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
                </div>


                <div className="my-3">
                <h1 className="text-2xl font-semibold text-sky-600">Bath & Full Haircut</h1>
                <p className="text-slate-400">Bath, haircut, brushing, light dematting, nail trim, paw & pad trim, ear cleaning, sanitary trim & more.</p>
                </div>

                <div className="my-3">
                <h1 className="text-2xl font-semibold text-sky-600">Puppy Bath & Trim</h1>
                <p className="text-slate-400">Bath, 15-minute brushing, light face trim, nail trim & more for puppies through 5 months old.</p>
                </div>

               </div>
		</div>
	</div>
</section>
        </div>
    );
};

export default PetsHotel;