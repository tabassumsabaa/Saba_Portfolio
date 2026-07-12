import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <main className="max-w-7xl mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;