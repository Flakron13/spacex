import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MissionDetails from "./pages/MissionDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/item-details" component={ItemDetails} /> */}
        <Route path="mission/:id" element={<MissionDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
