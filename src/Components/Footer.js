import React from 'react'
import { useHistory } from 'react-router-dom'
import { HomeOutlined, PhoneOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined,
         YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {

    const history = useHistory();
    const Terms = () => {
    history.push("/terms");
    }
    const Privacy = () => {
    history.push("/privacy");
    }
    const Faq = () => {
    history.push("/faq");
  }

  return (
    <>
      <footer class="footer-distributed">
          <div class="footer-left">
            <div className='footer-logo-holder'>
                <div className='footer-logo'>
                    <img src='/Images/carlogo.png' className='footer-logos'/>
                    <h3>Inspect This Car</h3>
                </div>
            </div>
            <p class="footer-links">
              <a href="#" class="link-1" onClick={Terms}>Terms & Conditions</a>
              <a href="#" onClick={Privacy}>Privacy Policy</a>
              <a href="#" onClick={Faq}>Faq</a> 
            </p>
            <p class="footer-company-name">&copy; {new Date().getFullYear()} Inspect This Car</p>
          </div>
			    <div class="footer-center">
            <div className='homeicon'>
              <HomeOutlined style={{color: 'white'}} />
              <p>113808 Jamalpur, Aligarh <br/> Uttar Pradesh, India</p>
            </div>
            <div className='phoneicon'>
              <PhoneOutlined style={{color: 'white'}} />
              <p>+91 1234567890</p>
            </div>
            <div className='mailicon'>
              <MailOutlined style={{color: 'white'}} />
              <p><a href="mailto:abc@company.com">abc@company.com</a></p>
            </div>
			    </div>
          <div class="footer-right">
              <p class="footer-company-about">
                <span>About the company</span>
                Inspect This Car to find trusted Motor Vehicle Inspection Stations, you can rest assured that you will get a thorough, 
                comprehensive and balanced perspective of your next used car.</p>
              <div class="footer-icons">
                <a href="#"><FacebookOutlined /></a>
                <a href="#"><TwitterOutlined /></a>
                <a href="#"><InstagramOutlined /></a>
                <a href="#"><YoutubeOutlined /></a>
              </div>
          </div>
		  </footer>
    </>
  )
}

export default Footer