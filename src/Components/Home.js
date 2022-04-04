import React from 'react'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useInView } from 'react-intersection-observer';
import '../sass/home.css'
import laundry from '../images/laundry-basket (2).png'
import bag from '../images/bag.png'
import repeat from '../images/laundry-basket.png'
import pickup from '../images/delivery (1).png'
import fold from '../images/laundry.png'
import corp from '../images/corporation.png'
import carpet from '../images/carpet-cleaner.png'
import gown from '../images/gown (2).png'
import leather from '../images/leather.png'
import pin from '../images/location (1).png'
import client from '../images/client.png'
import pegs from '../images/pegs.jpg'
import deco from '../images/deco.jpg'
import { BiChevronRight} from 'react-icons/bi'
import Slider from "react-slick";

const Home = () => { 
  const { ref, inView, entry } = useInView({
  /* Optional options */
  threshold: 0,
});
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  focusOnSelect: true,
  autoplaySpeed: 2500,
  speed: 500,
  cssEase: "linear",
  responsive:[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
};
  return (
    <div>
    <div className='main'>
      <div className='main-info'>
        <h1 className='header'>
          Nairobi's First Choice in Dry Cleaning.
        </h1>
        <p className='sub-header'>
          we care for the clothes you wear
        </p>
        <a href='/safarirepeat' className='hero-btn'>
          DISCOVER SAFARI REPEAT
          <img src={laundry} className='cta-icon'/>
        </a>
      </div>
    </div>
    <div className='repeat-wrapper'>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              1 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 3hrs on laundry each month! Perfect for towels & beddings.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 6000.00
          </div>
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              2 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 6hrs on laundry each month! Perfect for individual needs.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 10000.00
          </div>
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              3 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 9hrs on laundry each month! Perfect for couples.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 12000.00
          </div>
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              4 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 12hrs on laundry each month! Perfect for families.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 15000.00
          </div>
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
        </div>
      </div>
    </div>
    <div className='service-intro'>
      <div className='decos'>
          <img src={deco} className='deco one'/>
          <img src={pegs} className='deco two'/>
          </div>
      <div className='service-info'>
        <h2 className='service-title'>
          Laundry is Easier with Dependable Cleaners
        </h2>
        <p className='service-details'>
          Dependable Cleaners make laundry & dry cleaning more convenient than ever
        </p>
        <div className='services'>
          <div className='service'>
            <img src={repeat} className='service-icon'/>
            SAFARI REPEAT
          </div>
          <div className='service'>
            <img src={pickup} className='service-icon'/>
            FREE PICKUP & DELIVERY
          </div>
          <div className='service'>
            <img src={fold} className='service-icon'/>
            WASH & FOLD
          </div>
          <div className='service'>
            <img src={corp} className='service-icon'/>
            CORPORATE LAUNDRY SERVICES
          </div>
          <div className='service'>
            <img src={carpet} className='service-icon'/>
            CARPETS & RUGS
          </div>
          <div className='service'>
            <img src={gown} className='service-icon'/>
            WEDDING GOWNS
          </div>
          <div className='service'>
            <img src={leather} className='service-icon'/>
            LEATHER & SUEDE CLEANING
          </div>
        </div>
        <a href='#contact' className='pickup-btn'>
          <img src={pin} className='pickup-icon'/>
          SCHEDULE FOR A FREE PICKUP
        </a>
      </div>
    </div>
    <div className='reviews'>
      <h1 className='title'>
        TESTIMONIALS
      </h1>
      <p className='reviews-details'>
        we are good, but dont take our word for it, here is what people are saying about us
      </p>
      <Slider {...settings} className='reviews-wrapper'>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
      <div class="review">
        <div class="review-info">
          <h1>"</h1>
          Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony Yolor sit amet, consectetuer adi piscing elit, sed diam non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony non ummy nibh euismod tincidunt ut la ore et dolore magna aliq uam bony
        </div>
        <div class="reviewer">
          <img src={client} id="reviewer-img"/>
          <h4 class="reviewer-name">
            Kendi Kenda
          </h4>
        </div>
      </div>
            </Slider>
    </div>
    <div className='contact' id='contact'>
      <div className='contact-wrapper'>
        <div className='contact-form'>
          <h4 className='form-title'>
            FREE PICKUP & DELIVERY
          </h4>
          <p className='form-info'>
            Save more time with our free laundry pickup & delivery service throughout the Nairobi Metropolitan Area
          </p>
          <form>
            <input type='text' placeholder='Full Names'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='number' placeholder='Phone Number'/>
            <input type='address' placeholder='Enter Your Address'/>
            <input type='submit' value='SCHEDULE YOUR FREE PICKUP' className='submit'/>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home