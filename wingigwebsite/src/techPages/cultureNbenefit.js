"use client";
import "./javaTech.css";

import { React, useState } from "react";
import javapic from "./javapic.png";
// import Image from "next/image";
export default function JavaTech() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div class="pl-6">
        <h1 className=" font-bold text-3xl pb-2">
          Culture and benefits at Bubble
        </h1>
        <h2 className="font-bold text-2xl p-2">Culture overview</h2>
        <p className=" clamp-2 p-2">
          Our values are our guiding principles at Bubble. They help us focus on
          what matters most: achieving our mission. We see our values as a
          reflection of the behaviors we celebrate, prioritize, and find most
          important to us as a company. Additionally, we aim to hire folks who
          embody all of these values throughout our recruiting process.
          User-centricity: Remembering that Bubble exists first and foremost to
          have a positive impact on the people who use our software, and making
          decisions accordingly. Empowerment: Helping build others up by giving
          them leverage and autonomy. In the{" "}
          {showMore && (
            <span>
              context of our team, helping people become co-owners of Bubble’s
              vision. In the context of the world, helping people participate in
              the economy and bring new tech-enabled ideas to life. Fire: A
              shared intrinsic motivation to turn our vision as a company into
              reality, with determination, courage, and enthusiasm. Genuineness:
              Communicating and taking responsibility as human beings rather
              than hiding behind corporate-speak. Kindness: Treating our
              teammates and our community with friendliness, consideration, and
              respect.{" "}
            </span>
          )}
          <button
            className="text-blue-400 m-0 "
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <div className="justify justify-around border border-red-500  flex flex-row  ">
          <div class="items-start border border-blue-500">
            <h2 class="font-bold p-2">Remote policy</h2>
            <p>Locations</p>
            <p class=" font-semibold w-36 h-7 border-2 border-black-900 pl-4 pb-4">
              New Work City
            </p>
          </div>
          <div class=" border-2 border-green-800">
            <h3 class="font-bold">Remote Policy</h3>
            <p class="p-2 font-semibold w-50 h-7 border-2 border-black-900">Onsite or Remote</p>
          </div>
        </div>
        <h2 class=" p-3 font-bold text-2xl">Perks and Benefits</h2>
        <div class="  border-2 border-solid border-blue-300 grid grid-rows-3 grid-cols-2 pl-10 divide-x-0 ">
          <div>
            <h2 class=" p-3 font-bold">Health Care</h2>
            <div class="flex flex-row">
              <div className="w-12 h-12 border-2 border-solid border-green-400">
                <img class="w-12 h-12" src={javapic} alt="image" />
              </div>
              <p class="transform translate-x-2 w-80 h-40 border border-green-300">
                Your health is important. Choose from a host of medical, dental,
                and vision insurance options that suit your needs, either 100%
                employer-paid to tiers requiring minimal pre-tax deductions
              </p>
            </div>
          </div>
          <div>
            <h2 class="p-3 font-bold">Work your way</h2>
            <div class="flex flex-row">
              <div className="w-12 h-12 border-2 border-solid border-green-400">
                <img class="w-12 h-12" src={javapic} alt="image" />
              </div>
              <p class=" transform translate-x-2 w-80 h-40 border border-green-300">
                While we’re based in the NYC area, we offer our team the ability
                to work where it makes the most sense for them - be it at home,
                in the office, or a hybrid of both. We bring the whole team
                together twice a year at our NYC office for a week
              </p>
            </div>
          </div>
          <div>
            <h2 class=" p-3 font-bold">Choose your own perks</h2>
            <div class="flex flex-row">
              <div className="w-12 h-12 border-2 border-solid border-green-400">
                <img class="w-12 h-12" src={javapic} alt="image" />
              </div>
              <p class="transform translate-x-2 w-80 h-40 border border-green-300">
                We value autonomy, and we trust our employees to choose what
                will best set them up for personal growth, productivity, and
                wellness. We offer stipends for work enablement and lifestyle
                spending to all full time employees up to $3,400 per year
              </p>
            </div>
          </div>
          <div>
            <h2 class=" p-3 font-bold">Investing in your future</h2>
            <div class="flex flex-row">
              <div className="w-12 h-12 border-2 border-solid border-green-400">
                <img class="w-12 h-12" src={javapic} alt="image" />
              </div>
              <p class="transform translate-x-2 w-80 h-40 border border-green-300">
                In addition to offering a 401(k) match up to $5K, all full time
                employees at Bubble have equity in the company. We believe that
                everyone on our team is helping to achieve our goals, and should
                share in Bubble’s success.
              </p>
            </div>
          </div>
          <div>
            <h2 class=" p-3 font-bold">Time off</h2>
            <div class="flex flex-row">
              <div className="w-12 h-12 border-2 border-solid border-green-400">
                <img class="w-12 h-12" src={javapic} alt="image" />
              </div>
              <p class="transform translate-x-2 w-80 h-40 border border-green-300">
                Our Flexible Time-Off Policy allows employees to take paid time
                off every year to relax and refresh. We offer a Sabbatical
                program, offering 5 weeks of paid time off and a $5K bonus to
                our employees for every 5 years of tenure with Bubble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
