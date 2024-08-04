import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
