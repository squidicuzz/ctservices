"use client"
import React, { Component } from 'react'
import Image from 'next/image'

type Props = {}

type State = {}

export default class Cryptectest extends Component<Props, State> {
  state = {}

  render() {
    return (
            <section className='ctgame'>
            <div className="sub-main-secon">
                <div className='to-flex'>
                    <Image
                        className='ships'
                    data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="bottom-bottom"
                    alt='ships'
                    src="/images/ship-2.webp"
                    width="750" height="750"
                    />
                <div data-aos="fade-right"
                    data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='to-border'>
            <div className='color-effect section-title'> CRYPTECHTEST GAME </div>
                        <div data-aos="fade-up"
                    data-aos-duration="1500" className='section-desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <a className="home-button" href="https://cryptechtest.xyz/" target='_blank'><div><button type="button" className="home-button-txt">Join Us!</button></div></a>
                </div>
                </div>
                                </div>
      </section>
    )
  }
}