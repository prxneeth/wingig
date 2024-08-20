import React, { useState } from "react";
import "./aboutusPage.css";
import Coverimg from "./Union.png";

const AboutUsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
    const iframe = document.getElementById("yt-video");
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  return (
    <div>
      <div className="aboutheaderpicc"> </div>
      <div className="aboutinfo">
        <div className="aboutinfoleft"> </div>
        <div className="aboutinforight">
          <h2>
            {" "}
            We Are Here To Manage Your Requirements <br /> With{" "}
            <span>Experience</span>
          </h2>

          <h4>WinGIG Is A Staffing, Selecting and Culture Firm.</h4>
          <p>
            WinGIG Was Begun In 2018, Under The Conviction That On the Off
            Chance That We Employed Extraordinary Individuals, And Prepared And
            Created Them, The Final Product Would Be Exceptional Support Of Our
            Hopefuls And Customers. Having Developed Each And Every Year Since
            Origin, Including Through Two Retreats, We've Understood One thing
            To Be Valid : An Extraordinary Culture Brings About Remarkable
            Conveyance. As Our Business Has Developed, We've Extended To New
            Markets And New Administration Contributions. We Proceed To Change
            And Improve So We Can Enable Our Customers To Eccomplish Their
            Objectives And Thier Vision.
          </p>
        </div>
      </div>

      <div className="aboutusfooter">
        <div class="video-container">
          {!isPlaying && (
            <div className="video-cover">
              <img src={Coverimg} alt="Video Cover" className="cover-image" />
              <button className="play-button" onClick={playVideo}>
                &#9658;
              </button>
            </div>
          )}
          <iframe
            id="yt-video"
            class="youtube-video"
            src="https://www.youtube.com/embed/7HgJIAUtICU?si=UNoicmYE92t_MZJ7"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
            style={{ display: isPlaying ? "block" : "none" }}
          ></iframe>
          <hr />{" "}
          <p>
            See How We Work With Touch Of <span>Experience</span>
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutUsPage;
