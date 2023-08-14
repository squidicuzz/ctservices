"use client";
import Image from "next/image";
import React, { Component, useState } from "react";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ImageSlider from "@/layout/components/ImageSlider";

const images = [
  "/images/undraw_building_websites_i78t.svg",
  "/images/undraw_nakamoto_-2-iv6.svg",
  "/images/undraw_ethereum_re_0m68.svg",
  "/images/undraw_heatmap_uyye.svg",
  "/images/undraw_image_viewer_re_7ejc.svg",
  "/images/undraw_instant_support_re_s7un.svg",
];

type Props = {};
type State = {};

export default class Support extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section
        className="support-container"
        id="sales"
        data-color="rgb(92, 194, 228)"
      >
        <div className="to-width to-height to-center to-flex-column">
          <div className="to-left">
            <div className="text-motion section-title-logo to-quaternary">
              {" "}
              ❖{" "}
            </div>
            <div className="title-support">
              <div className="text-motion section-title to-quaternary">
                {" "}
                CRYPTECH SERVICES{" "}
              </div>{" "}
            </div>
            {/* <div className="section-desc-1">
              {" "}
              For <span className="we-logo-fourth to-bold">
                DEVELOPMENT
              </span>{" "}
              services we offer:{" "}
            </div> */}
          </div>
          {/* <ImageSlider images={images} /> */}

          <div className="containers">
            <div className="carousels">
              <input type="radio" name="slides" id="slide-1" />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <ul className="carousel__slides">
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b1"
                        src="/images/undraw_building_websites_i78t.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-primary s">
                          {" "}
                          Full-Stack Web Development
                        </span>{" "}
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          Our full-stack web development approach involves
                          proficiently handling both front-end and back-end
                          aspects to deliver comprehensive and dynamic web
                          solutions.
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b2"
                        src="/images/undraw_nakamoto_-2-iv6.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-secondary s">
                          {" "}
                          Web3 And DAPP Development
                        </span>{" "}
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          As experts in Web3 and DApp development, we harness
                          the power of decentralized technologies to build
                          immersive and user-friendly applications.
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b3"
                        src="/images/undraw_ethereum_re_0m68.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-tertiary s">
                          {" "}
                          Solidity Smart Contract Development
                        </span>{" "}
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          We specialize in Solidity smart contract development,
                          creating secure and efficient blockchain-based
                          solutions tailored to your specific decentralized
                          application needs.
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b4"
                        src="/images/undraw_heatmap_uyye.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-quaternary s">
                          {" "}
                          Web Design
                        </span>{" "}
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          Our web design approach focuses on crafting
                          user-centric and aesthetically pleasing websites that
                          align with your brand identity and business goals.
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b5"
                        src="/images/undraw_image_viewer_re_7ejc.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-quinary s">
                          {" "}
                          Graphic Design
                        </span>
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          Our graphic design services involve translating your
                          brand identity and messaging into visually compelling
                          designs.{" "}
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure className="r">
                    <span className="to-center">
                      <Image
                        className="car b6"
                        src="/images/undraw_instant_support_re_s7un.svg"
                        alt="car"
                        width="500"
                        height="500"
                      />
                    </span>
                    <span className="nomors">
                      {" "}
                      <span>
                        <span className="text-motion section-title project-title to-primary s">
                          {" "}
                          Technical Consultation
                        </span>{" "}
                        <br></br>
                        <span className="section-desc">
                          {" "}
                          We offer technical consultation by deeply
                          understanding your project goals and challenges, and
                          then providing targeted expertise and strategic
                          guidance to optimize your systems, resolve technical
                          issues, and enhance overall project success.
                        </span>
                      </span>{" "}
                    </span>
                  </figure>
                </li>
              </ul>
            </div>
          </div>

          <div className="lest">
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-1">
                  <div className="icon">
                    <LayersOutlinedIcon className="we-logo-first ico" />
                  </div>
                  <div className="title">Full-Stack Web Development</div>
                </label>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-2">
                  <div className="icon">
                    <CurrencyBitcoinOutlinedIcon className="we-logo-second ico" />
                  </div>
                  <div className="title">Web3 and DAPP Development</div>
                </label>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-3">
                  <div className="icon">
                    <CodeOutlinedIcon className="we-logo-third ico" />
                  </div>
                  <div className="title">
                    Solidity smart contract Development
                  </div>
                </label>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-4">
                  <div className="icon">
                    <DesignServicesOutlinedIcon className="we-logo-fourth ico" />
                  </div>
                  <div className="title">Web Design</div>
                </label>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="2500"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-5">
                  <div className="icon">
                    <DrawOutlinedIcon className="we-logo-fifth ico" />
                  </div>
                  <div className="title">Graphic Design</div>
                </label>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="bottom-bottom"
                className="icos"
              >
                <label htmlFor="slide-6">
                  <div className="icon">
                    <SupportAgentOutlinedIcon className="we-logo-first ico" />
                  </div>
                  <div className="title">Technical Consultation</div>
                </label>
              </li>
            </ul>

            {/* <div data-aos="fade-right"
            data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='service-package-2'>
            <div className='service-package-sub'>
               <div className='contact-name-1 to-bold'> Miscellaneous Crypto-currency related Services. </div>
               <div className='contact-description'>
                     <div className='to-indent'> ❖ Various small projects, help, support. </div>
                     <div className='to-indent'> ❖ Base Services Price (36 hours²) ⇒ <span className='we-logo-second to-bold'> 0.05 BTC⁴ </span> </div>
               </div>
            </div>
            </div> */}
          </div>
        </div>
        {/* <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/to-rights.webp"
      width="3620" height="1377"
        />
           <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales-2.webp"
      width="3620" height="1671"
      /> */}

        <Image
          className="sales-2-land-pic"
          alt="front-logo"
          src="/images/observe-up-opac-3.png"
          width="3620"
          height="1671"
        />

        <Image
          className="sales-land-pic"
          alt="front-logo"
          src="/images/observe-down.png"
          width="3620"
          height="1671"
        />
      </section>
    );
  }
}
