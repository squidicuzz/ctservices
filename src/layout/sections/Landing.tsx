"use client"
import Image from "next/image";
import React, { Component } from 'react'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

type Props = {}

type State = {}

export default class Landing extends Component<Props, State> {
    state = {}

    render() {

        return (
            <section className="landing-container">

                {/* <Image
                    className="back-land-pic"
                alt='front-logo'
                src="/images/backss.png"
                width="3620" height="1671"
                /> */}

            <div className="to-width to-height to-center home-specs">
            <div data-aos="fade-right" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='home-welcome-border'>
                <div className='home-welcome-message'><div className='color-effect'> ❖ </div> Welcome to <div className='color-effect'>Cryptech Services. </div></div>
            </div>
                </div>

                <Image
                    className="front-land-pic"
                alt='front-logo'
                src="/images/frontss.png"
                width="3620" height="1671"
                />
        </section>
        );
    };
}