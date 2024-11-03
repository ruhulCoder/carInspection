import React from 'react'
import Menubar from '../Components/Menubar'
import Footer from '../Components/Footer'
import ReqInd from './ReqInd'
import ReqDeal from './ReqDeal'
import ReqUber from './ReqUber'

const Booking = () => {
  return (
    <>
    <Menubar/>
        <div className="namebar">
            <h1>Request a Booking</h1>
        </div>
        <div className="modals">
            <p>InspectThisCar helps individuals as well as dealerships & Uber drivers</p>
            <p className='modals2line'>Please choose one of the following options to request a booking:</p>
            <div className='btns'>
                <ReqUber/>
                <ReqInd/>
                <ReqDeal/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        <Footer/> 
    </>
  )
}

export default Booking