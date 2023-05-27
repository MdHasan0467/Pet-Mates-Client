import { BsScissors } from "react-icons/bs";


const GroomingSalon = () => {
    return (
        <div className="mx-20 my-20">
            <h1 className="text-4xl flex text-sky-600 my-5 font-semibold">
                <BsScissors />
                <span className="mx-2">Grooming Salon</span>
                </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div>
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

               <div >
                <img className="" src="https://afamilypetsalon.com/wp-content/uploads/2022/05/cropped-FINAL-LOGO-complete-logo1.jpg" alt="" />
               </div>
            </div>
        </div>
    );
};

export default GroomingSalon;