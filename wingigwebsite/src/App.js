import "./App.css";

// import Footer from "./footer/footer";

// import Navbar from "./navbar/navbar";
import Layout from "./layout";
import Contactpage from "./contactpage/contactpage";
import AboutUsPage from "./aboutUsPage/aboutusPage";
import HomePage from "./homepage/homepage";
import LoginPage from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniNav from "./navbar/mininav";
import Register from "./registration/reg";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <MiniNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUsPage/aboutusPage" element={<AboutUsPage />} />
            <Route path="/contactpage/contactpage" element={<Contactpage />} />
            <Route path="/login/Login" element={<LoginPage />} />
            <Route path="/registration/reg" element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
