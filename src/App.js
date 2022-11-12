import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/templatemo.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/slick-theme.min.css";
import Header from "./components/Header";
import StartNav from "./components/StartNav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StartNav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
