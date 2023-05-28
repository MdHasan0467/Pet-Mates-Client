import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import PetGroomingDetails from "../Pages/petGroomingDetails";
import PetsHotelDetails from "../Pages/PetsHotelDetails";
import PetVeterinaryCareDetails from "../Pages/PetVeterinaryCareDetails";
import PetPlayDetails from "../Pages/PetPlayDetails";
import PetAdoptionDetails from "../Pages/PetAdoptionDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />, 
      children : [
        {
            path: '/', element: <Home />
        },
        {
            path: '/petGrooming', element: <PetGroomingDetails />
        },
        {
            path: '/petHotel', element: <PetsHotelDetails />
        },
        {
            path: '/petVeterinaryCare', element: <PetVeterinaryCareDetails />
        },
        {
            path: '/petPlay', element: <PetPlayDetails />
        },
        {
            path: '/petAdoption', element: <PetAdoptionDetails />
        },
      ]
    },
  ]);
  
  export default router


