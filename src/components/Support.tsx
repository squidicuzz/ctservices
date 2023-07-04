"use client"
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Support extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='supp'>
        <div className="sub-main-secon">
            <div className='color-effect section-title'> SUPPORT </div>
                <div className='section-desc'> Support is available through <span className='color-effect-nontitle highlighted'> Discord Chat! </span></div>
                <div className='to-flex seryo-image'>
                <Image
                    className='support-image sp-image'
                    data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
                    alt='front-logo'
                    src="/images/support-block.png"
                    width="750" height="750"
                    />
                <div data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom" className='section-desc supp-text-border'> Please contact <span className='color-effect-nontitle highlighted'> SQUIDICUZ </span> if it is urgent, or contact another admin to attempt to resolve your issue. <span className='color-effect-nontitle highlighted'> Thank you. </span>
            <a className="home-button" href="https://cryptechtest.xyz/" target='_blank'><div><button type="button" className="home-button-txt">Contact</button></div></a></div>
                </div>
                </div>
      </section>
    )
  }
}