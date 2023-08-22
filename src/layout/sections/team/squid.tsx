"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Squid extends Component<Props, State> {
  state = {};
  render() {
    return (
                  <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container"
            >
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/valor.webp"
                width="512"
                height="512"
              />
              <div className="details-bg">
                <div className="contact-name squid-name"> Boehmerang </div>
                <div className="contact-description">
                  <ul>
                    <li className="squid-list"> CAD Designer </li>
                    <li className="squid-list"> Consultant </li>
                    <li className="squid-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button squid"
                    href="https://discord.com/users/161986311832600576"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button squid t"
                    href="mailto:boehmerang@cryptech.services"
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