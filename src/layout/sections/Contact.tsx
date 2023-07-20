"use client"
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Support extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='support-container' id="sales" >
                        <div className="to-width to-height to-center to-flex-column">
          <div className='to-left'>
            <div className='text-motion section-title-logo to-quaternary'> ❖ </div>
            <div className='text-motion section-title to-quaternary'> CRYPTECH SERVICES </div>
            <div className='section-desc'> For the <span className='text-motion to-quaternary to-bold' >non-SECURITY</span> services we can offer: </div>
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