import React from "react";
import AboutUsHome from "./aboutUsHome";
import ContactHome from "./contactHome";
import MainDisplay from "./maindisplay";
import Services from "./services";
import Technologies from "./technologies";
import MainBanner from "./mainBanner";

function HomePage() {
  return (
    <div>
      {/* <MainDisplay /> */}
      <MainBanner />
      <Technologies />
      <Services />
      <AboutUsHome />
      <ContactHome />
    </div>
  );
}

export default HomePage;
