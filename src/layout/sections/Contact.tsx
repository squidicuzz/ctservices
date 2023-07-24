"use client"
import Image from 'next/image'
import React, { Component } from 'react'
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
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
        
         <div className='text-motion section-title to-quaternary'> CRYPTECH SERVICES </div>
         <div className='section-desc-1'> For <span className='we-logo-fourth to-bold' >non-SECURITY</span> services we offer: </div>
         </div>
         <div className='lest'>
            <ul>
    <li data-aos="fade-down"
            data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
        <div className="icon"><LayersOutlinedIcon className='we-logo-first ico'/></div>
        <div className="title">Fullstack Web Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div> */}
    </li>
    <li data-aos="fade-down"
            data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
        <div className="icon"><CurrencyBitcoinOutlinedIcon className='we-logo-second ico'/></div>
        <div className="title">Web3 and DAPP Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit.</div> */}
    </li>
    <li data-aos="fade-down"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
        <div className="icon"><CodeOutlinedIcon className='we-logo-third ico'/></div>
        <div className="title">Solidity smart contract Development</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div> */}
               </li>
                   <li data-aos="fade-down"
            data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
        <div className="icon"><DesignServicesOutlinedIcon className='we-logo-fourth ico'/></div>
        <div className="title">Web Design</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
    </li>
    <li data-aos="fade-up"
            data-aos-duration="2500" data-aos-anchor-placement="bottom-bottom">
        <div className="icon"><DrawOutlinedIcon className='we-logo-fifth ico'/></div>
        <div className="title">Graphic Design</div>
        {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> */}
               </li>
                   <li data-aos="fade-up"
            data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
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
   <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales11.png"
      width="3620" height="1377"
      />
</section>
)
}
}