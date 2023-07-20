"use client"
import React, { Component } from 'react'
import Image from 'next/image'

type Props = {}

type State = {}

export default class Services extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section id="services">
                <div className="to-width to-height to-center to-flex-column">
          <div>
            <div className='text-motion section-title-logo to-quinary'> ❖ </div>
          <div className='text-motion section-title to-quinary'> SECURITY SERVICES </div>
          </div>
        </div>
      </section>
    )
  }
}