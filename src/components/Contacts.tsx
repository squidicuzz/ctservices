"use client"
import React, { Component } from 'react'
import Image from 'next/image'

type Props = {}

type State = {}

export default class Contacts extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='contacts-border'>
        <div className="sub-main-secon">
            <div className='color-effect section-title'> CRYPTECH TEAM </div>
        <div className='section-desc'> Site <span className='color-effect-nontitle highlighted'> Administrators </span> & <span className='color-effect-nontitle highlighted'> Support </span> </div>
        <div className='contacts-content contact-div'>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/squid.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name squid-name'> Squidicuz </div>
              <div className='contact-description'> <ul> <li> Developer </li> <li> Bot Admin </li> <li> Site Admin </li></ul> </div>
              <a className="contact-button squid" href="https://discord.com/users/294414250376429569" target='_blank'><div><button type="button" className="home-button-txt">Contact</button></div></a>
            </div>
            </div>
        <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/valor.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name valor-name'> Valor </div>
              <div className='contact-description'> <ul> <li> Research </li> <li> Support </li> <li> Admin </li></ul></div>
              <a className="contact-button valor" href="https://discord.com/users/305452127034277899" target='_blank'><div><button type="button" className="home-button-txt">Contact</button></div></a>
              </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/seqsee.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name seq-name'> SeqSee </div>
              <div className='contact-description'> <ul> <li> Developer </li> <li> Support </li> <li> Admin </li></ul></div>
              <a className="contact-button seqsee" href="https://discord.com/users/412122437954830337" target='_blank'><div><button type="button" className="home-button-txt">Contact</button></div></a>
            </div>
            </div>
        <div data-aos="fade-down" data-aos-duration="2500" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/jekz.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name jekz-name'> Jekz </div>
              <div className='contact-description'> <ul> <li> Security Researcher </li> <li>  </li> <li>  </li></ul> </div>
              <a className="contact-button jekz" href="https://discord.com/users/294414250376429569" target='_blank'><div><button type="button" className="home-button-txt">Contact</button></div></a>
            </div>
            </div>
          </div>
          </div>
      </section>
    )
  }
}