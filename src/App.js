import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import EventSelection from "./pages/EventSelection";
import Receipt from "./pages/Receipt";
import Admin from "./pages/Admin";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import RegisterEvents from "./pages/RegisterEvents";
import SearchReceipt from "./pages/SearchReceipt";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register/events" element={<EventSelection />} /> */}
        <Route path="/register/receipt" element={<Receipt />} />
        <Route path="/admin" element={<Admin />} />
<Route path="/events" element={<Events />} />
<Route path="/events/:eventId" element={<EventDetails />} />
<Route path="/register/events" element={<RegisterEvents />} />
<Route path="/search-receipt" element={<SearchReceipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
