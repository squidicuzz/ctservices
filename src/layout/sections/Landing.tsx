"use client"
import Image from "next/image";
import React, { Component } from 'react'
import AllScripts from '@/layout/components/scripts'
type Props = {}
type State = {}
export default class Landing extends Component<Props, State> {
state = {}
render() {
return (
<>
<section id="particles-js">
   <AllScripts />
</section>
<section id="home" className="landing-container" data-color="rgb(44, 104, 208)">
         <Image
            priority={true}
            id="secondary-front-bgs"
      className="back-land-pic"
      alt='front-logo'
      src="/images/back-6566-a.webp"
      width="3620" height="1671"
      />
   <div className="to-width to-height to-center home-specs">
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='home-welcome-border'>
         <div className='home-welcome-message'>
            <div className='text-motion'> ❖ </div>
            Welcome to 
            <div className='color-effect'>CRYPTECH SERVICES. </div>
         </div>
      </div>
   </div>
         <Image
            priority={true}
            quality={100}
      className="front-land-pic reflect-v2"
      alt='front-logo'
      src="/images/frontsss-a.webp"
      width="3620" height="1671"
      />
         <Image
            priority={true}
            id="secondary-front-bg"
      className="mids-land-pic to-glow"
      alt='front-logo'
      src="/images/moon-a.webp"
      width="3620" height="1671"
      />
   {/* <Image
      id="primary-front-bg"
      className="mid-land-pic to-clouds"
      alt='front-logo'
      src="/images/clouds.webp"
      width="3620" height="1671"
         /> */}
         
         <Image
            priority={true}
      id="tertiary-front-bg"
      className="mids-land-pic to-ser"
      alt='front-logo'
      src="/images/bgs.webp"
      width="3620" height="1671"
         />
         <Image
            id="tertiary-front-bgs"
                    className="foots-land-pic"
                alt='front-logo'
                src="/images/footer-a.webp"
                width="3620" height="1671"
                />
   <AllScripts />
</section>
</>
);
};
}