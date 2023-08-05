"use client"
import Image from 'next/image'
import React, { Component, useState } from 'react'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ImageSlider from '@/layout/components/ImageSlider';

const images = [
    "/images/undraw_building_websites_i78t.svg",
  "/images/undraw_nakamoto_-2-iv6.svg",
  "/images/undraw_ethereum_re_0m68.svg",
  "/images/undraw_heatmap_uyye.svg",
  "/images/undraw_image_viewer_re_7ejc.svg",
  "/images/undraw_instant_support_re_s7un.svg",
  // Add more image paths here
];

type Props = {}
type State = {}


export default class Support extends Component<Props, State> {
    state = {}
        
    render() {
    
return (
<section className='support-container' id="sales" data-color="rgb(92, 194, 228)">
   <div className="to-width to-height to-center to-flex-column">
      <div className='to-left'>
         
         <div className='text-motion section-title-logo to-quaternary'> ❖ </div>
        <div className='title-support'>
                <div className='text-motion section-title to-quaternary'> CRYPTECH SERVICES </div> </div>
         {/* <div className='section-desc-1'> For <span className='we-logo-fourth to-bold' >DEVELOPMENT</span> services we offer: </div> */}
            </div>
                            {/* <ImageSlider images={images} /> */}
            {/* <div className='to-block'> hu </div> */}
            {/* <div className="container">

  <div className="mySlides">
      <Image src="/images/undraw_building_websites_i78t.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>

  <div className="mySlides">
      <Image src="/images/undraw_nakamoto_-2-iv6.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>

  <div className="mySlides">
      <Image src="/images/undraw_ether_re_y7ft.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>

  <div className="mySlides">
      <Image src="/images/undraw_heatmap_uyye.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>

  <div className="mySlides">
      <Image src="/images/undraw_image_viewer_re_7ejc.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>

  <div className="mySlides">
      <Image src="/images/undraw_instant_support_re_s7un.svg" className="to-svg" alt='services' height={500} width={500}/>
  </div>


  <div className="caption-container">
    <p id="caption"></p>
  </div>
            </div> */}

            
            <div className='lest'>
            <ul>
    <li data-aos="fade-up"
            data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><LayersOutlinedIcon className='we-logo-first ico'/></div>
        <div className="title">Full-Stack Web Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div> */}
    </li>
    <li data-aos="fade-up"
            data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><CurrencyBitcoinOutlinedIcon className='we-logo-second ico'/></div>
        <div className="title">Web3 and DAPP Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit.</div> */}
    </li>
    <li data-aos="fade-up"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><CodeOutlinedIcon className='we-logo-third ico'/></div>
        <div className="title">Solidity smart contract Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div> */}
               </li>
                   <li data-aos="fade-up"
            data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><DesignServicesOutlinedIcon className='we-logo-fourth ico'/></div>
        <div className="title">Web Design</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
    </li>
    <li data-aos="fade-up"
            data-aos-duration="2500" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><DrawOutlinedIcon className='we-logo-fifth ico'/></div>
        <div className="title">Graphic Design</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
               </li>
                   <li data-aos="fade-up"
            data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className='icos'>
        <div className="icon"><SupportAgentOutlinedIcon className='we-logo-first ico'/></div>
        <div className="title">Technical Consultation</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
    </li>
            </ul>

                     {/* <div data-aos="fade-right"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='service-package-2'>
            <div className='service-package-sub'>
               <div className='contact-name-1 to-bold'> Miscellaneous Crypto-currency related Services. </div>
               <div className='contact-description'>
                     <div className='to-indent'> ❖ Various small projects, help, support. </div>
                     <div className='to-indent'> ❖ Base Services Price (36 hours²) ⇒ <span className='we-logo-second to-bold'> 0.05 BTC⁴ </span> </div>
               </div>
            </div>
            </div> */}
            
            </div>
      </div>
   {/* <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/to-rights.webp"
      width="3620" height="1377"
        />
           <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales-2.webp"
      width="3620" height="1671"
      /> */}
        
           {/* <Image
      className="sales-1-land-pic"
      alt='front-logo'
      src="/images/observe-up.png"
      width="3620" height="1671"
      />
        
           <Image
      className="sales-land-pic"
      alt='front-logo'
      src="/images/observe-down.png"
      width="3620" height="1671"
      /> */}
</section>
)
}
}
