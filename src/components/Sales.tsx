"use client"
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Sales extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section>
        <div className="sub-main-secon">
            <div className='color-effect section-title'> Sales </div>
          <div className='section-desc'> Estimated Quotes for <span className='color-effect-nontitle highlighted'> Sales Services. </span></div>
          </div>
      </section>
    )
  }
}