import { useState } from "react";


const GroomingBooking = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageSelect = (image) => {
      setSelectedImage(image);
    };
    
    const featuresData = [
      {
        id: 1,
        image: 'https://groomedbyvicki.co.uk/wp-content/uploads/2022/06/vicki-grooming-white-bichon-scaled.jpg',
        title: 'Haircut',
        features:[{feature: 'Cut and style'},{feature: 'Ear cleaning'},{feature: 'Nail trim'},{feature: 'Deep-cleansing shampoo'},],
      },
      {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuW-av-fR5-7XzGioelkGHb6IObgGYmR2yWULMM4N4qIHfYtR9-pa93jjxYrW8bbxkkL8&usqp=CAU',
        title: 'Bath & Haircut',
        features:[{feature: 'Cut and style'},{feature: 'Deep-cleansing shampoo'},{feature: 'Blow-dry'},{feature: 'Scented spritz'},{feature: 'Ear cleaning'},{feature: 'Nail trim'},{feature: '15-min brushout'},],
      },
      // Add more data for additional images and features
    ];
    
    const selectedFeatures = featuresData.find((item) => item.image === selectedImage);




    const handleBooking = data => {
        alert(data)
    }
    return (
        <div className="mb-10">


            <h1 className="text-2xl font-semibold text-center my-10">GROOMING THAT CARES FOR THEIR WHOLE HEALTH</h1>

            <div>
                
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10 lg:mx-20">
            <div className="image-section flex border-b-4 border-sky-500">
                <div className={`image ${selectedImage === featuresData[0].image ? 'selected' : ''}`} onClick={() => handleImageSelect(featuresData[0].image)}>
                <img className="w-80 h-72 cursor-pointer object-cover hover:border-b-2 border-red-500" src={featuresData[0].image} alt="Image 1" />
                <p className="text-center font-semibold">Haircut</p>
                </div>
                <div className={`image ${selectedImage === featuresData[1].image ? 'selected' : ''}`} onClick={() => handleImageSelect(featuresData[1].image)}>
                <img className="w-[300px] h-72 cursor-pointer object-cover ml-2 hover:border-b-2 border-red-500" src={featuresData[1].image} alt="Image 2" />
                <p className="text-center font-semibold">Bath & Haircut</p>
                </div>
            </div>



            <div className="features-section border border-sky-500">
                {selectedFeatures ?
                <div className="selected-features">

                    <p className="text-2xl font-semibold py-5 bg-sky-100 text-center">{selectedFeatures.title}</p>

                    <div className="grid grid-cols-2 p-5">
                        {selectedFeatures.features?.map((feature, idx) => 
                        <div key={idx}>
                            <div className="flex">
                            <span>{idx + 1}.</span>
                            <p className="mx-2 text-sky-500">{feature.feature}</p>
                            </div>

                        </div>
                        )}
                    </div>
                        <button onClick={() => handleBooking(selectedFeatures.title)} className="bg-sky-400 hover:bg-sky-500 btn w-1/2 border-0 ml-28">Booking Now</button>
                </div>
                :
                <div>
                    <p className="text-center mt-28 font-semibold text-sky-500 text-2xl">Select a grooming</p>
                </div>
                }
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default GroomingBooking;