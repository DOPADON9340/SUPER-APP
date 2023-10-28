import { Routes , Route , Link} from "react-router-dom";
import Register from "./pages/Registerpage";
import Home from "./pages/Home";
import Genre from "./pages/genre";
import Movies from "./pages/Movies";
import Browse from "./pages/Browse";


import React from "react";
const app = () => {
  return(
    <>
      <Routes>
        <Route path ="/register" element={<Register />} />  
   
        <Route path ="/" element={<Home />} />  
        <Route path="/genre" element={<Genre/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};
export default App;
