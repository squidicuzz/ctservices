"use client";
import React, { Component } from "react";
import Image from "next/image";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
type Props = {};
type State = {};
export default class Metrix extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        id="metrix"
        className="metrix-container"
        data-color="rgb(182, 67, 174)"
      >
        <div className="to-width to-center to-column">
          <div className="to-flex to-height to-align">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="title-metrix">
                <div className="text-motion section-title project-title to-primary">
                  {" "}
                  METRIX.PLACE{" "}
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                className="section-desc"
              >
                {" "}
                metrix.place is a communal grafitti board called a place, which
                any address can set a single pixel per{" "}
                <a href="https://www.metrixcoin.com/" target="_blank">
                  <span className="we-logo-first to-bold">Metrix Coin</span>
                </a>{" "}
                transaction by paying the gas fee for the transaction.
              </div>
              <div className="to-flex to-gap-1">
                <a
                  className="project-button to-primary"
                  href="https://metrix.place/"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <ExtensionOutlinedIcon /> Play!
                    </button>
                  </div>
                </a>
                <a
                  className="project-button to-primary"
                  href="https://github.com/SeqSEE/metrix.place"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <GitHubIcon /> Github
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="we-do-container">
              {/* <Image
                className="ships skew"
                // data-aos="fade"
                // data-aos-duration="1500"
                // data-aos-anchor-placement="bottom-bottom"
                alt="ships"
                src="/images/metrixboard.webp"
                width="1100"
                height="1100"
              /> */}
              <div className="gallery">
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <Image
          className="team-land-pic"
          alt="front-logo"
          src="/images/metrixbs.webp"
          width="3620"
          height="1670"
        />
        <Image
          className="sales-1-land-pic"
          alt="front-logo"
          src="/images/team3-up.webp"
          width="3620"
          height="1671"
        />
      </section>
    );
  }
}
