import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/home.jsx";
import Description from "./components/description.jsx";
import Services from "./components/services.jsx";
import Hm from "./components/health_&_support.jsx";
import About from "./components/about.jsx";
import Loginpage from "./components/loginpage.jsx";

import "./styles/header.scss";
import "./styles/App.scss";
import "./styles/home.scss";

function App() {
  return (
        <Router>
          <Header/>
          <Routes>
            <Route path="/Loginpage" element={<Loginpage/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Description" element={<Description/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Hm" element={<Hm/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </Router>
  );
}

export default App;
