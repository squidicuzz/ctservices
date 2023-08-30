"use client";
import React, { Component } from "react";
import Image from "next/image";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AndroidIcon from "@mui/icons-material/Android";
type Props = {};
type State = {};
export default class MetrixMobile extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        id="metrimask"
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
              <div className="title-metrix-mobile">
                <div className="text-motion section-title project-title to-primary">
                  {" "}
                  METRIMASK MOBILE{" "}
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                className="section-desc"
              >
                {" "}
                Metrixcoin Web3 wallet with embedded browser. Use to
                send/receive MRX and MRC20 based tokens. Interact with Web3
                websites that support the
                <a href="https://www.metrixcoin.com/" target="_blank">
                  <span className="we-logo-first to-bold"> Metrix chain</span>.
                </a>{" "}
                Use MetriMask to interact with Metrixcoin Web3 apps from your
                mobile device.
              </div>
              <div className="to-flex to-gap-1">
                <a
                  className="project-button to-primary"
                  href="https://play.google.com/store/apps/details?id=com.metrimask_mobile"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <AndroidIcon /> Playstore
                    </button>
                  </div>
                </a>
                <a
                  className="project-button to-primary"
                  href="https://github.com/TheLindaProjectInc/MetriMask-Mobile"
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
                className="ships skew-1"
                // data-aos="fade"
                // data-aos-duration="1500"
                // data-aos-anchor-placement="bottom-bottom"
                alt="ships"
                src="/images/unnamed1.webp"
                width="1100"
                height="1100"
              /> */}
              <div className="gallery-1">
                <Image
                  src="/images/unnamed0.webp"
                  alt="many clothes and pictures"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/unnamed1.webp"
                  alt="someone preparing artisanal coffee"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/unnamed2.webp"
                  alt="some tee"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/unnamed3.webp"
                  alt="an empty table in a restaurant"
                  width="1100"
                  height="1100"
                />
                <Image
                  src="/images/unnamed4.webp"
                  alt="a laptop with a notebook"
                  width="1100"
                  height="1100"
                />

                <Image
                  src="/images/unnamed3.webp"
                  alt="a laptop with a notebook"
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
