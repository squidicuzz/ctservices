"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Loma extends Component<Props, State> {
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
                src="/images/squid.webp"
                width="512"
                height="512"
              />
              <div className="details-bg">
                <div className="contact-name loma-name"> Squidicuz </div>
                <div className="contact-description">
                  <ul>
                    <li className="loma-list"> Admin</li>
                    <li className="loma-list"> Consultant </li>
                    <li className="loma-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button loma"
                    href="https://discord.com/users/294414250376429569"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button loma t"
                    href="mailto:squid@cryptech.services"
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