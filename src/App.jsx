import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./router";
import { Footer } from "./components/Footer";
import "./global.css";




function App() {
  return (
    <BrowserRouter>
      <Header />

      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
