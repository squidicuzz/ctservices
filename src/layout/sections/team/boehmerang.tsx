"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Boehmerang extends Component<Props, State> {
  state = {};
  render() {
    return (
                                                <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container"
            >
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/ercknard3.webp"
                width="512"
                height="512"
              />
              <div className="details-bg">
                <div className="contact-name ercknard-name"> Ercknard </div>
                <div className="contact-description">
                  <ul>
                    <li className="ercknard-list"> Web Designer </li>
                    <li className="ercknard-list"> Graphic Designer </li>
                    <li className="ercknard-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button ercknard"
                    href="https://discord.com/users/615741889366458369"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button ercknard t"
                    href="mailto:ercknard@cryptech.services"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <AlternateEmailOutlinedIcon /> Email
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
    );
  }
}