import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { CountryCategory } from "./pages/CountryCategory";
import { Destinations } from "./pages/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:continent" element={<CountryCategory />}/>
        <Route path="/:continent/:country" element={<Destinations/>} />
        <Route path="/:continent/:country/:id" element={<DestinationDetail />}/>
      </Routes>
    </>
  )
}

export default App
