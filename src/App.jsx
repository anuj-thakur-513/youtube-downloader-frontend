import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";

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
