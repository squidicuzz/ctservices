"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Seqsee extends Component<Props, State> {
  state = {};
  render() {
    return (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container"
            >
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/seqsee.webp"
                width="512"
                height="512"
              />
              <div className="details-bg">
                <div className="contact-name seq-name"> SeqSee </div>
                <div className="contact-description">
                  <ul>
                    <li className="seqsee-list"> Admin </li>
                    <li className="seqsee-list"> Consultant </li>
                    <li className="seqsee-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button seqsee"
                    href="https://discord.com/users/412122437954830337"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button seqsee t"
                    href="mailto:seqsee@cryptech.services"
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