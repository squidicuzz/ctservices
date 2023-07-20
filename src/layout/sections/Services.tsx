"use client"
import React, { Component } from 'react'
import Image from 'next/image'

type Props = {}

type State = {}

export default class Services extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='support-container' id="services">
                <div className="to-width to-height to-center to-flex-column">
          <div className='to-left'>
            <div className='text-motion section-title-logo to-quinary'> ❖ </div>
            <div className='text-motion section-title to-quinary'> SECURITY SERVICES </div>
            <div className='section-desc'> For <span className='we-logo-fifth to-bold' >SECURITY</span> services we offer: </div>
          </div>
        </div>

                                                        <Image
                className="sales-land-pic reflect"
                alt='front-logo'
                src="/images/sales12.png"
                width="3620" height="1377"
                     />
      </section>
    )
  }
}