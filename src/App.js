import "./App.css";
import Feeback from "./components/feeback/Feeback";
import Header from "./components/header/Header.jsx";
import HotelHero from "./components/hotelHero/HotelHero";
import RoomCard from "./components/roomCard/RoomCard";
function App() {
  return (
    <>
      <Header />
      <div className="app">
        <HotelHero />
        <RoomCard />
        <Feeback />
      </div>
    </>
  );
}

export default App;
