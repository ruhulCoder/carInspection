import React from "react";
import { Button } from "antd";
import { useHistory } from 'react-router-dom'
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer'

const Home = () => {

    const history = useHistory();
    const Booking = () => {
    history.push("/booking");
  }

  return (
    <>
    <Menubar/>
      <div className="namebar">
        <h1 className="homecar">Car Inspections Made Simple</h1>
        <p>The simplest way to book your next vehicle inspection</p>
        <Button type="button" className="btnstarthome" onClick={Booking}>
          Get Started
        </Button>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mzTJ1bqxMgM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
      <div className="page">
        <h2>How It Works</h2>
        <div class="wrapper">
          <div class="card">
            <h3 class="card-title">Submit Request Form</h3>
            <p class="card-content">
              Simply fill in the inspection request form with your details and
              we’ll book your inspection with the closest available Government
              certified Motor Vehicle Inspection Station (MVIS).
            </p>
          </div>
          <div class="card">
            <h3 class="card-title">Complete Vehicle Inspection</h3>
            <p class="card-content">Vehicle inspection takes place.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Receive Inspection Report</h3>
            <p class="card-content">
              Upon completion of your vehicle inspection, a copy of your
              detailed inspection report, complete with photo evidence, and
              service estimate will be emailed to you for further consideration.
            </p>
          </div>
        </div>
      </div>
      <div className="flexhome">
        <div className="flexname">
          <lable className="IO">IO</lable>
          <p className="ioflex">FLEX</p>
        </div>
        <div className="flexdiscription">
          <h4 className="weflex">We’re enrolled in IO FLEX!</h4>
          <p className="flexdiscrip">
            Part of Invest Ottawa’ Technology Startup Venture Path. Invest
            Ottawa is the National Capital’s largest Business Development Agency
            and has been home to some of Canada’s most successful Technology
            Startups!”
          </p>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Home;