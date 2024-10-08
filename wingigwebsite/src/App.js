import "./App.css";

// import Footer from "./footer/footer";

// import Navbar from "./navbar/navbar";
import './index.css';
import Layout from "./layout";
import Contactpage from "./contactpage/contactpage";
import AboutUsPage from "./aboutUsPage/aboutusPage";
import HomePage from "./homepage/homepage";
import LoginPage from "./login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniNav from "./navbar/mininav";
import UserProfile from "./userProfile/userProfile";
import AI from "./techPages/AI";
import JobPortal from "./jobPortal/jobPortal";
import ApplyJob from "./jobPortal/applyJob";
import Login from "./authh/login/page";
import Register from "./authh/register/page";

import RegisterPage from "./registration/reg";
import ChangePassword from "./authh/psw-change/page";
import Forgot from "./authh/forgot/page";
import { useEffect } from "react";

function App() {





  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/techPages/AI" element={<AI />} />
        </Routes>

        {/* <MiniNav /> */}
        <Routes>
          <Route path="/" element={<Layout><HomePage /> </Layout>} />
          <Route path="/aboutUsPage/aboutusPage" element={<Layout><AboutUsPage /> </Layout>} />
          <Route path="/contactpage/contactpage" element={<Layout> <Contactpage /></Layout>} />
          <Route path="/login/Login" element={<Layout><LoginPage /> </Layout>} />
          <Route path="/registration/reg" element={<Layout> <RegisterPage /></Layout>} />
          <Route path="/userProfile/userProfile" element={<Layout>< UserProfile /> </Layout>} />
          <Route path="/jobPortal/jobPortal" element={<Layout><JobPortal /></Layout>} />
          <Route path="/jobPortal/applyJob" element={<ApplyJob />} />
          <Route path='/authh/login/page' element={<Login />} />

          <Route path="/authh/register/page" element={<Layout> <Register />  </Layout>} />
          <Route path="/authh/forgot/page" element={<Forgot />} />
          <Route path="/authh/pws-change/page" element={<ChangePassword />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
