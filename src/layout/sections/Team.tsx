"use client";
import React, { Component } from "react";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Squid from "./team/squid";
import Ercknard from "./team/ercknard";
import Seqsee from "./team/seqsee";
import Image from "next/image";
import Jekz from "./team/jekz";
import Boehmerang from "./team/boehmerang";
type Props = {};
type State = {};
export default class Team extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        id="team"
        className="team-container"
        data-color="rgb(176, 117, 248)"
      >
        <div className="to-width to-height to-center to-flex-column">
          <div>
            <div className="text-motion section-title-logo to-secondary">
              {" "}
              ❖{" "}
            </div>
            <div className="title-team to-center">
              <div className="text-motion section-title to-secondary">
                {" "}
                CRYPTECH SERVICES TEAM{" "}
              </div>
            </div>
            <div className="section-desc">
              {" "}
              Please contact an{" "}
              <a href="#contact">
                <span className="we-logo-second to-bold">Admin</span>
              </a>{" "}
              team member if you have an urgent request. Thank you.
            </div>
          </div>
          <div className="to-flex to-flex-evenly width-team koto">
            <Squid />
            <Ercknard />
            <Seqsee />
            <Jekz />
            <Boehmerang />
          </div>
        </div>
        <Image
          className="team-land-pic"
          alt="front-logo"
          src="/images/team3.webp"
          width="3620"
          height="1670"
        />
        <Image
          className="sales-1-land-pic"
          alt="front-logo"
          src="/images/to-center-up.webp"
          width="3620"
          height="1377"
        />
      </section>
    );
  }
}
