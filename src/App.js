import "./App.scss";
import "swiper";
import "boxicons/css/boxicons.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesConfig from "./config/RoutesConfig";

function App() {
  return (
    <div>
      <Header />
      <RoutesConfig />
      <Footer />
    </div>
  );
}

export default App;
