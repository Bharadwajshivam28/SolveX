import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/header.scss";
import Home from "./components/Home";
import "./styles/home.scss";
import Footer from "./components/Footer";

function App() {
  return (
   <Router>
     <Header />
    <Routes>
    <Route path="/" element = {<Home />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
