import React from "react";
import AboutUsHome from "./aboutUsHome";
import ContactHome from "./contactHome";
import MainDisplay from "./maindisplay";
import Services from "./services";
import Technologies from "./technologies";

function HomePage() {
  return (
    <div>
      <MainDisplay />
      <Technologies />
      <Services />
      <AboutUsHome />
      <ContactHome />
    </div>
  );
}

export default HomePage;
