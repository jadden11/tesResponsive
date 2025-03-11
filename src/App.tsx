import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#070606] rounded-3xl">
      <Navbar />
      <div className="pt-48"></div>
      <Header />
      <div className="pt-28"></div>
      <Clients />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;
