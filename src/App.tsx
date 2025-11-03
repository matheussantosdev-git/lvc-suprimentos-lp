import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/app";
import Sobre from "./pages/Sobre/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] text-white font-sans">
      <Navbar />
      <main className="flex-grow mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default App;
