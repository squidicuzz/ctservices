"use client"
import React, { Component } from 'react'
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import Image from 'next/image'

type Props = {}

type State = {}

export default class Team extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='team-container'>
        <div className="to-width to-height to-center to-flex-column">
          <div>
            <div className='text-motion section-title-logo'> ❖ </div>
          <div className='text-motion section-title'> CRYPTECH SERVICES TEAM </div>
</div>
        <div className='to-flex to-flex-evenly'>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/squid.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name squid-name'> Squidicuz </div>
              <div className='contact-description'> <ul> <li className='squid-list'> Developer </li> <li className='squid-list'> Bot Admin </li> <li className='squid-list'> Site Admin </li></ul> </div>
              <a className="contact-button squid" href="https://discord.com/users/294414250376429569" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
            </div>
            </div>
                         <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/ercknard.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name valor-name'> Ercknard </div>
              <div className='contact-description'> <ul> <li className='valor-list'> Developer </li> <li className='valor-list'> UX/UI Designer</li> <li className='valor-list'> </li></ul></div>
              <a className="contact-button valor" href="https://discord.com/users/412122437954830337" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
            </div>
            </div>
        {/* <div data-aos="fade-down" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/valor.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name valor-name'> Valor </div>
              <div className='contact-description'> <ul> <li className='valor-list'> Research </li> <li className='valor-list'> Support </li> <li className='valor-list'> Admin </li></ul></div>
              <a className="contact-button valor" href="https://discord.com/users/305452127034277899" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
              </div>
        </div> */}
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/seqsee.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name seq-name'> SeqSee </div>
              <div className='contact-description'> <ul> <li className='seqsee-list'> Developer </li> <li className='seqsee-list'> Support </li> <li className='seqsee-list'> Admin </li></ul></div>
              <a className="contact-button seqsee" href="https://discord.com/users/412122437954830337" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
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
              <div className='contact-description'> <ul> <li className='jekz-list'> Security Researcher </li> <li className='jekz-list'> Graphic Artist  </li> <li className='jekz-list'> Penetration Tester</li></ul> </div>
              <a className="contact-button jekz" href="https://discord.com/users/294414250376429569" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
            </div>
            </div>

                         {/* <div data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className='contacts-container'>
            <Image
              className='contact-mug'
                    alt='front-logo'
                    src="/images/ercknard.png"
                    width="512" height="512"
            />
            <div className='details-bg'>
            <div className='contact-name ercknard-name'> Ercknard </div>
              <div className='contact-description'> <ul> <li className='ercknard-list'> Web Developer </li> <li className='ercknard-list'> UX/UI Designer</li> <li className='ercknard-list'> </li></ul></div>
              <a className="contact-button ercknard" href="https://discord.com/users/412122437954830337" target='_blank'><div><button type="button" className="home-button-txt"><ContactPageOutlinedIcon /> Contact</button></div></a>
            </div>
            </div> */}
          </div>
        </div>
                                        <Image
                    className="team-land-pic"
                alt='front-logo'
                src="/images/team-1.png"
                width="3620" height="1670"
                />
      </section>
    )
  }
}