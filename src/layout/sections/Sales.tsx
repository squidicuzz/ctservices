"use client"
import React, { Component } from 'react'
import Image from 'next/image'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

type Props = {}

type State = {}

export default class Sales extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='sales-container'>
        <div className="to-width to-height to-center to-flex">
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='home-welcome-border'>
                    <div className='sale-welcome-message'>What we do? <div className='color-effect'> in Cryptech Services, </div></div>
                    <p className='sale-welcome-sub-message'> We provide web3 and fullstack development services and support, primarily focusing on <span className='we-logo-first'>cryptocurrency </span>, <span className='we-logo-second'>blockchain technology </span>and <span className='we-logo-third'> cyber security. </span></p>
                </div>
                    {/* <Image
                        className="land-photo"
                    data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="bottom-bottom"
                    alt='front-logo'
                    src="/images/blockchain3.png"
                    width="750" height="750"
          /> */}

          <div className='we-do-container'>
          
          <div className='we-do' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <CurrencyBitcoinOutlinedIcon className='we-logo we-logo-first'/>
              <div className='we-do-title'> Cryptocurrency </div>
          </div>

                    <div className='we-do' data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <PrecisionManufacturingOutlinedIcon className='we-logo we-logo-second'/>
              <div className='we-do-title'> Blockchain Tech. </div>
          </div>

                    <div className='we-do' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" >
                <ShieldOutlinedIcon className='we-logo we-logo-third'/>
              <div className='we-do-title'> Cyber Security </div>
          </div>
          </div>
          
        </div>
                        <Image
                    className="front-land-pic reflect"
                alt='front-logo'
                src="/images/sales.png"
                width="3620" height="1671"
                />
      </section>
    )
  }
}