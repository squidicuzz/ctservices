"use client"
import Image from "next/image";
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Landing extends Component<Props, State> {
    state = {}

    render() {

        return (
            <section className="landing-container">
                <div className="sub-main">
                <div data-aos="fade-right" data-aos-duration="1500" className='home-welcome-border'>
                    <div className='home-welcome-message'>Welcome to <div className='color-effect'> Cryptech Services. </div></div>
                    <p className='home-welcome-sub-message'> We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency, blockchain technology and cyber security. </p>
                    <a className="home-button" href="#explorecourses"><div><button type="button" className="home-button-txt">Inquire</button></div></a>
                </div>
                <Image
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    alt='front-logo'
                    src="/images/blockchain3.png"
                    width="750" height="750"
                    />
                    </div>
            </section>
        );
    };
}