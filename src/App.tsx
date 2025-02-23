import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Seth Verrill || Portfolio";
  }, []);
  return (
    <Router>
      <div className="h-screen w-screen bg-gradient-to-b from-[#4A6D8C] via-[#A28F73] to-[#DCC6A0] flex flex-col justify-between">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-soft-light opacity-7 pointer-events-none bg-paint-effect"
          style={{
            backgroundImage: "url('/black_white_old_computer.png')",
            backgroundSize: "55%",
          }}
        >          
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full">
          <MainContent />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
