import React from "react";
import { Button } from "antd"
import { useHistory } from 'react-router-dom'
import Menubar from '../Components/Menubar';
import Footer from '../Components/Footer'

const myComponent = {
    // width: '400px',
    height: '420px',
    overflowY: 'scroll',
    // overflowX: 'hidden'
};

const Price = () => {

    const history = useHistory();
    const Booking = () => {
    history.push("/booking");
  }

  return (
    <>
    <Menubar/>
        <div className="namebar">
            <h1>Pricing</h1>
            <Button type='button' className="btnstarthome" onClick={Booking}>Get Started</Button>
        </div>
        <div className="page">
            <h2>Inspection Services</h2>
            <div className="wrapper">
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Ministry Safety Standards Inspection
                        </h1>
                        <p className="price-lowertitle" card-content>
                        *Includes Certificate
                        </p>
                    </div>    
                    <div className="amount">
                        <p><b>$150 + HST**</b></p>
                    </div>
                    <div className="price-list" style={myComponent}>
                        <ul>
                            <li>
                                Brakes (Brake pad/Shoe and Rotor Measurements, Components,
                                Parking Brakes, Cables, Lines and Hoses)
                            </li>
                            <li>
                                Tires (Tread Depth, Tire Wear Details, Cracks and Age of Tire;
                                10 years or newer)
                            </li>
                            <li>Fluid Leaks</li>
                            <li>Drive Belt Condition (Pulley, bearings and belt)</li>
                            <li>Exhaust System (Corrosion, Leaks and Gaskets)</li>
                            <li>Suspension (Shocks/Struts and related components)</li>
                            <li>
                                Steering (Linkages, Hydraulic/Electric Steering Rack and Ball
                                Joints)
                            </li>
                            <li>Wheel Alignment</li>
                            <li>Wheel Balance</li>
                            <li>Clutch Operation (If Equipped)</li>
                            <li>Constant Velocity (CV) (Drive Axle Boots)</li>
                            <li>
                                Drivetrain (Driveshaft, Universal Joints, Shift Linkage (If
                                Equipped) and Transmission Function)
                            </li>
                            <li>
                                Fluid Level Check (Brake Fluid, Power Steering Fluid, Engine
                                Coolant, Engine Oil, Transmission Oil, Differential Fluid)
                            </li>
                            <li>
                                Interior/Exterior Lighting (Bulbs, Lense/Housing, Switches,
                                Hazard lamp function)
                            </li>
                            <li>
                                Interior Cluster Function (Speedometer, Tachometer, Odometer,
                                Fuel Level, Temperature, and Battery Voltage)
                            </li>
                            <li>Windshield Wipers (Performance and Function)</li>
                            <li>Anti-Lock Braking System</li>
                            <li>
                                Interior Safety Features (Locks, Windows, Restraints, Horn,
                                Mirrors, Signal Switches, Driver Side Seat Adjustment operation
                                and Airbags)
                            </li>
                            <li>
                                Structural and Body Condition (holes in
                                undercarriage/Rockers/Engine Bay, jagged rust on vehicle Body,
                                Loose or broken body panels, bumpers or parts)
                            </li>
                            <li>Glass Condition (Chips, Cracks)</li>
                            <li style={{color: "blue"}}>
                                *Safety Certificates are valid 36 Days from date of issue.
                            </li>
                            <li style={{color: "blue"}}>
                                **Customers have 10 days from date of inspection to complete
                                necessary repairs and return for reinspection and certificate,
                                additional charges may apply at MVIS discretion.
                            </li>
                        </ul>
                    </div>    
                </div>
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                            Pre-Purchase Inspection
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Includes Safety Certificate
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$250 + HST</b></p>
                    </div>
                    <div className="price-list" style={myComponent}>
                        <ul>
                            <li>
                                A “Pre-Purchase Inspection” is a more comprehensive inspection
                                covering all Safety related items as well as items which can be
                                considered amenities, cosmetic or convenience options and
                                mechanical systems;
                            </li>
                            <li>Radio, Entertainment and Infortainment System Function</li>
                            <li>
                                Interior Upholstery, Finishes and Mechanisms (Seats, Carpet,
                                Roof Lining, Interior Dash/Trim, Glove/Storage Units, switches)
                            </li>
                            <li>
                                Interior Amenities and Options (Heating/Cooling System Function,
                                Heated/Cooled Seats, Moonroof, Passenger Seat Adjustment
                                Function)
                            </li>
                            <li>
                                HVAC System (Hoses, Interior Cabin Filter, Lines and switches)
                            </li>
                            <li>
                                Vehicle Fluid and Filter Condition (The Condition of all fluids
                                covered in Safety Fluid Level Check; Old and Dirty or New and
                                Clean)
                            </li>
                            <li>
                                Engine Functionality (Timing system: Timing Chain/Belt
                                Inspection, Variable Valve Timing components, Ignition System:
                                Spark Plug, Ignition Coil/Wiring, Air Intake System: Throttle
                                Body, Air Filter, Air Intake and Manifold, Fuse and Battery)
                            </li>
                            <li>Hybrid Vehicle Battery Health Diagnostic?</li>
                            <li>
                                Exterior Vehicle Condition (Scratches, dents, paint chips or
                                peels, superficial rust)
                            </li>
                            <li>
                                Emission Related Functions (Catalytic Converters, Oxygen
                                Sensors, Positive Crank Ventilation “PCV”)
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
            <h2>Additional Services</h2>
            <div className="wrapper">
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Seasonal Tire Change
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Standard Vehicles
                        </p>
                    </div>    
                    <div className="amount">
                        <p><b>$50 + HST *On Rims / $100 + HST (Installed & Balanced)</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                <b>* “On Rims”:</b> Seasonal Tires are provided already mounted and 
                                balanced on rims.
                            </li>
                        </ul>
                    </div>    
                </div>
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Seasonal Tire Change
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Truck and HD Tires
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$60 + HST *On Rims / $120 + HST (Installed & Balanced)</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                <b>* “On Rims”:</b> Seasonal Tires are provided already mounted and 
                                balanced on rims.
                            </li>
                        </ul>  
                    </div>
                </div>


                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Oil & Filter Change (Max. 5.5 Litres)
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Conventional
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$60 + HST</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                Includes up to 5.5 litres of oil and applicable filter. Additional 
                                oil extra* 
                            </li>
                            <li>
                                Conventional $7.50/litre
                            </li>
                            <li>
                                Additional charges may apply if the vehicle is equipped with a 
                                removable skid plate. 
                            </li>
                        </ul>  
                    </div>
                </div>
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Oil & Filter Change (Max. 5.5 Litres)
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Semi-Synthetic
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$80 + HST</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                Includes up to 5.5 litres of oil and applicable filter. Additional 
                                oil extra* 
                            </li>
                            <li>
                                Semi Synthetic $12.00/litre
                            </li>
                            <li>
                                Additional charges may apply if the vehicle is equipped with a 
                                removable skid plate. 
                            </li>
                        </ul>  
                    </div>
                </div>
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Oil & Filter Change (Max. 5.5 Litres)
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Full Synthetic
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$100 + HST</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                Includes up to 5.5 litres of oil and applicable filter. Additional 
                                oil extra* 
                            </li>
                            <li>
                                Full Synthetic $15.00/litre
                            </li>
                            <li>
                                Additional charges may apply if the vehicle is equipped with a 
                                removable skid plate. 
                            </li>
                        </ul>  
                    </div>
                </div>
                <div className='box'>
                    <div className="price-box" card>
                        <h1 className="price-title" card-title>
                        Extra Services
                        </h1>
                        <p className="price-lowertitle" card-content>
                        Concierge: Pick up and drop off
                        </p>
                    </div>
                    <div className="amount">    
                        <p><b>$100 + HST</b></p>
                    </div>
                    <div className="price-list">
                        <ul type="none">
                            <li>
                                Choose to have us arrange the pick up and drop off your vehicle for an 
                                additional cost. Upon pickup, a “Yellow Plate” will be secured to the vehicle 
                                for transport and subsequently be covered by the Affiliates commercial insurance 
                                policy. Some restrictions apply as not all of our Affiliates participate in the 
                                concierge service. 
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>    
        </div>
    <Footer/>
    </>
  );
};

export default Price;
