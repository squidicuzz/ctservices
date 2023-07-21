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
<section id="home" className="landing-container">
   <Image
      id="primary-front-bg"
      className="back-land-pic"
      alt='front-logo'
      src="/images/back-5.png"
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
      className="front-land-pic reflect-v2"
      alt='front-logo'
      src="/images/frontss.png"
      width="3620" height="1671"
      />
   <Image
      className="mid-land-pic to-glow"
      alt='front-logo'
      src="/images/moon-1.png"
      width="3620" height="1671"
      />
   <Image
      id="secondary-front-bg"
      className="mid-land-pic to-clouds"
      alt='front-logo'
      src="/images/clouds.png"
      width="3620" height="1671"
      />
   <AllScripts />
</section>
</>
);
};
}