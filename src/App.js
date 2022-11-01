import { useState } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/templatemo.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/slick-theme.min.css";
import Header from "./components/Header";
import StartNav from "./components/StartNav";
import db from "./db";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  const [users, setUsers] = useState(db.usersDb);
  const [products, setProducts] = useState(db.productsDb);
  return (
    <div className="App">
      <StartNav />
      <Header />
      <main>
        {/* <Carousel />
        <Categories /> */}
        {/* <Shop /> */}
        {/* <AboutUs /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
