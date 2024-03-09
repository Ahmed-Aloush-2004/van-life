import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server.js";
import Vanslist from "./pages/Vans/Vanslist.jsx";
import VanDetail from "./pages/Vans/VanDetail.jsx";
import Header from "./components/Header.jsx";
import Layout from "./components/Layout.jsx";
import Income from "./pages/Host/Income.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVaninfo from "./pages/Host/HostVaninfo..jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vanslist />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
            <Route index element={<HostVaninfo />} />
            <Route path="pricing" element={<HostVanPhotos />} />
            <Route path="photos" element={<HostVanPricing />} />


            </Route>

          </Route>
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
