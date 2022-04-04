import React from 'react'
import Slider from "react-slick";
import client from '../images/client.png'
import coop from '../images/coop.png'
import cic from '../images/cic.png'
import icdc from '../images/icdc.png'
import kfcb from '../images/kfcb.png'
import medicare from '../images/medicare.png'
import mest from '../images/mest.png'
import nat from '../images/nat.png'
import nimplromed from '../images/nimplromed.png'
import nssf from '../images/nssf.png'
import pionner from '../images/pionner.png'
import re from '../images/re.png'
import quality from "../images/laundry-basket (2).png"
import repeat from "../images/laundry-basket (1).png"
import clock from "../images/wall-clock.png"
import pin from "../images/location (1).png"

const About = () => {
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
      <div className='about'>
        <div className='about-wrapper'>
            <h4 className='about-title'>WELCOME TO SAFARI DRY CLEANERS</h4>
            <div className='about-desc'>
            Launched in 2009, Safari Drycleaners is a local provider of quality residential and commercial laundry services in Nairobi. We focus on offering professional laundry services with FREE pickup and delivery. Items picked up from your home, laundered and folded/hung your way, then returned on the same day.
            Safari Drycleaners' goal is to provide superior washing experience to our valued Clients by providing excellent customer service, fast delivery, and access to plenty of modern and well-maintained washing machines.
            </div>
            <div className='perks'>
              <h2 className='perk-title'>
                WHY CHOOSE US
              </h2>
              <div className='perks-wrapper'>
                <div className='perk'>
                    <img src={pin} className='perk-img'/>
                    <h4>FREE PICKUP & DELIVERY</h4> 
                    <p>enjoy free laundry pickup and delivery, simply order the service and we will be at your doorstep</p>
                </div>
                <div className='perk'>
                    <img src={repeat} className='perk-img'/>
                    <h4>SAFARI REPEAT</h4>
                    <p>save hours with our monthly premium laundry service guaranteed that you will never have to worry about laundry ever again</p>
                </div>
                <div className='perk'>
                    <img src={quality} className='perk-img'/>
                    <h4>QUALITY AND PROFESSIONAL SERVICE</h4>
                    <p>we offer unparalleled quality and professional service in pursuit of exemplary customer service</p>
                </div>
                <div className='perk'>
                    <img src={clock} className='perk-img'/>
                    <h4>24 HOUR LAUNDRY TURNAROUND</h4>
                    <p>enjoy fast laundry turnaround to ensure you never have to worry about laundry ever again</p>
                </div>
              </div>
            </div>
        </div>
    <div className='reviews'>
      <h1 className='title'>
        WHAT CLIENTS SAY ABOUT US
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
          <div className='clients'>
            <h4 className='title'>OUR CLIENTS</h4>
            {/* <Splide 
  options={ {
    rewind: true,
    width : 500,
    gap   : '10px',
  } } className='clients-wrapper'>
              <SplideSlide>
                <img src={coop} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={re} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nssf} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={pionner} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={kfcb} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={medicare} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={mest} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nimplromed} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nat} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={icdc} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={cic} className='client-img'/>
              </SplideSlide>
                
            </Splide> */}
          </div>
    </div>
  )
}

export default About