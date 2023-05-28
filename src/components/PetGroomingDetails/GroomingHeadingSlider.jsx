import Slider from "react-slick";


const GroomingHeadingSlider = () => {

    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };



    return (
        <div className="my-10">
            

            <div className="mx-10 bg-sky-200">
            <Slider className="" {...settings}>
                
            <div>
          <div className="flex justify-around p-4">
                <div className="">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WAsN0xoRePz4DoQseXCr6pIRmybzclsrNND09BI-t2ZbsdxTWd9N5PFjoL5J7snFjrs&usqp=CAU" alt="" className="object-cover w-full h-52 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="ml-5 mt-20">
                    <h1>Grooming Content Section One</h1>
                    <button className="bg-sky-400 hover:bg-sky-500 btn border-0">Book Now</button>
                </div>
            </div>
          </div>
         

        
            
                
          <div>
          <div className="flex justify-around p-4">
                <div className="">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1iiBbQw1jdJHkWhhv4_eqZy7Kwd0tOVXvU27q2cjStcQvpoLhB1e0I7A0nyv90PvBfQ&usqp=CAU" alt="" className="object-cover w-full h-52 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="ml-5 mt-20">
                    <h1>Grooming Content Section One</h1>
                    <button className="bg-sky-400 hover:bg-sky-500 btn border-0">Book Now</button>
                </div>
            </div>
          </div>
         

        
            
                
          <div>
          <div className="flex justify-around p-4">
                <div className="">
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/2073/3021/articles/grooming-tips-for-dog-owners_1024x1024.jpg?v=1584115881" alt="" className="object-cover w-full h-52 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="ml-5 mt-20">
                    <h1>Grooming Content Section One</h1>
                    <button className="bg-sky-400 hover:bg-sky-500 btn border-0">Book Now</button>
                </div>
            </div>
          </div>
         

        
            
                
          <div>
          <div className="flex justify-around p-4">
                <div className="">
                    <div>
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B960%2C679%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F24%2Fgroomer-and-white-dog-969094132-2000.jpg" alt="" className="object-cover w-full h-52 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="ml-5 mt-20">
                    <h1>Grooming Content Section One</h1>
                    <button className="bg-sky-400 hover:bg-sky-500 btn border-0">Book Now</button>
                </div>
            </div>
          </div>
         

        
            
                
          <div>
          <div className="flex justify-around p-4">
                <div className="">
                    <div>
                        <img src="https://media.istockphoto.com/id/946811508/vector/dogs-in-soap-foam.jpg?s=612x612&w=0&k=20&c=OEmawrMzKlFVu_bgPPvqn-IQ1nRcqxjuMMPhPs_fgm4=" alt="" className="object-cover w-full h-52 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="ml-5 mt-20">
                    <h1>Grooming Content Section One</h1>
                    <button className="bg-sky-400 hover:bg-sky-500 btn border-0">Book Now</button>
                </div>
            </div>
          </div>
         

        
            
        
         
        </Slider>
            </div>
            
        </div>
    );
};

export default GroomingHeadingSlider;