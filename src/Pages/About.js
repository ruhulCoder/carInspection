import React from "react";
import { Button } from "antd";
import { useHistory } from 'react-router-dom'
import Menubar from "../Components/Menubar";
import Footer from "../Components/Footer";

const About = () => {

    const history = useHistory();
    const Booking = () => {
    history.push("/booking");
  }

  return (
    <>
    <Menubar/>
      <div className="namebar">
        <h1>About</h1>
        <Button type='button' className="btnstarthome" onClick={Booking}>Get Started</Button>
      </div>
      <div className="page">
        <p>
          Inspect This Car is all about Transparency and Balance. Our
          foundational belief is that everyone deserves a comfortable and
          rewarding experience while securing an inspection for a prospective
          used vehicle. Inspect This Car is a non-biased, completely neutral,
          third party platform designed to promote a fair and balanced
          transaction between buyers and sellers. Our affiliates are trusted,
          vetted Motor Vehicle Inspection Stations which strictly serve Ministry
          of Transportation mandates and protocols to guarantee hassle free,
          completely objective Safety and Pre Purchase Inspections.
        </p>
        <p>
          Inspect This Car was conceived as a remedy to an underlying notion of
          suspicion, reluctance and hostility, endemic in the Automotive
          Industry. Even in an age of limitless information, Consumers still
          feel apprehension while shopping for a used vehicle. Inspect This Car
          serves as a vital tool for used car buyers to gain comfort and a sense
          of security during the used car shopping process.
        </p>
        <p>
          Inspect This Car is an Ottawa, Ontario based technology startup
          currently enrolled in the Invest Ottawa Technology Startup Venture
          Path; Ottawa’s largest Business Development Agency. Invest Ottawa has
          been home to some of Canada’s most successful Technology Startups,
          which include, Shopify.
        </p>
        <p>
          By choosing Inspect This Car to find trusted Motor Vehicle Inspection
          Stations, you can rest assured that you will get a thorough,
          comprehensive and balanced perspective of your next used car!
        </p>
      </div>
    <Footer/>
    </>
  );
};

export default About;
