"use client"
import React, { Component } from 'react'
import Image from 'next/image'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

type Props = {}

type State = {}

export default class Sales extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section id="offers" className='sales-container'>
        <div className="to-width to-height to-center to-flex">
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='home-welcome-border'>
                    <div className='sale-welcome-message'>What do we offer? <div className='color-effect'> in Cryptech Services, </div></div>
                    <p className='sale-welcome-sub-message'> We provide web3 and fullstack development services and support, primarily focusing on <span className='we-logo-first'>cryptocurrency </span>, <span className='we-logo-second'>blockchain technology </span>, <span className='we-logo-third'> cyber security </span>, <span className='we-logo-fourth'> web designing </span> and <span className='we-logo-fifth'> technical support / consultation. </span></p>
                </div>

          <div className='we-do-container'>
          
          <div className='we-do reflect' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <CurrencyBitcoinOutlinedIcon className='we-logo we-logo-first'/>
              <div className='we-do-title'> Cryptocurrency </div>
          </div>

                    <div className='we-do reflect' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <PrecisionManufacturingOutlinedIcon className='we-logo we-logo-second'/>
              <div className='we-do-title'> Blockchain Technology </div>
          </div>

                    <div className='we-do reflect' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <ShieldOutlinedIcon className='we-logo we-logo-third'/>
              <div className='we-do-title'> Cyber Security </div>
            </div>
            
                                <div className='we-do reflect' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <DesignServicesOutlinedIcon className='we-logo we-logo-fourth'/>
              <div className='we-do-title'> Web Design </div>
          </div>

                    <div className='we-do reflect' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <SupportAgentOutlinedIcon className='we-logo we-logo-fifth'/>
              <div className='we-do-title'> Technical Consultation </div>
          </div>
          </div>
          
        </div>

        
                        <Image
                    className="sales-land-pic reflect"
                alt='front-logo'
                src="/images/sales-1.png"
                width="3620" height="1671"
        />
        
                                <Image
                    className="sales-land-pic reflect"
                alt='front-logo'
                src="/images/sales-2.png"
                width="3620" height="1671"
                />
      </section>
    )
  }
}