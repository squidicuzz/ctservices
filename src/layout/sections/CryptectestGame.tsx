"use client"
import React, { Component } from 'react'
import Image from 'next/image'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

type Props = {}

type State = {}

export default class Cryptectest extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section id="cryptechtest" className='cryptechtest-container'>
        <div className="to-width to-height to-center to-column">
            <div className='to-flex'>
            <div data-aos="fade-right"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
              <div className='text-motion section-title project-title to-tertiary'> CRYPTECHTEST GAME </div>
              <div data-aos="fade-right"
                data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='section-desc'> Community-driven Minetest game with endless possibilities. Join us and embark on a journey of creativity, collaboration, and adventure in our immersive world.</div>
              <a className="project-button to-tertiary" href="https://cryptechtest.xyz/" target='_blank'><div><button type="button" className="home-button-txt"><SportsEsportsOutlinedIcon/> Join Us!</button></div></a>
            </div>
            <div className='we-do-container'>
              <Image
                className='ships'
                data-aos="fade"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
              alt='ships'
              src="/images/ship-2.webp"
              width="750" height="750"
              />
              </div>
            </div>

        <div>

          <div data-aos="fade-bottom"
                data-aos-duration="1500" className="carousel-container">
              <div className="carousel">
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/1.png" width="3620" height="1969" /></div>
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/2.png" width="3620" height="1969" /></div>
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/3.png" width="3620" height="1969" /></div>
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/4.png" width="3620" height="1969" /></div>
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/5.png" width="3620" height="1969" /></div>
                              <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/6.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/1.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/2.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/3.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/4.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/5.png" width="3620" height="1969" /></div>
                                            <div className='to-back'>
              <Image alt='ships' className="squid-anim" src="/images/6.png" width="3620" height="1969" /></div>
              
            </div>
          </div>
          </div>
                  </div>
      </section>
    )
  }
}