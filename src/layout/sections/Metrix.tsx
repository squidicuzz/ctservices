"use client"
import React, { Component } from 'react'
import Image from 'next/image'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

type Props = {}

type State = {}

export default class Metrix extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='metrix-container'>
        <div className="to-width to-center to-column">
            <div className='to-flex to-align to-height'>
            <div data-aos="fade-right"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
              <div className='text-motion section-title project-title to-primary'> METRIX.PLACE </div>
              <div data-aos="fade-right"
                data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='section-desc'> metrix.place is a communal grafitti board called a place, which any address can set a single pixel per MetrixCoin transaction by paying the gas fee for the transaction.
</div>
              <a className="project-button to-primary" href="https://test.metrix.place/" target='_blank'><div><button type="button" className="home-button-txt"><ExtensionOutlinedIcon/> Play!</button></div></a>
                    </div>
                    <div className='we-do-container'>
                    <Image
                        data-aos="fade-left"
                data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom "
              className='ships skew'
              alt='ships'
              src="/images/metrixboard.png"
              width="1100" height="1100"
                        />
                        </div>
            </div>

        <div>
          </div>
            </div>
                                                    <Image
                    className="team-land-pic"
                alt='front-logo'
                src="/images/metrixbs.png"
                width="3620" height="1670"
                />
      </section>
    )
  }
}