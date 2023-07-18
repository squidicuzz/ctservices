"use client"
import React, { Component } from 'react'
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
        <footer className="footer">
        <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    {/* <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <GitHubIcon />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <GitHubIcon />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <GitHubIcon />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <GitHubIcon />
        </a></li>
    </ul> */}
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#home">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#sales">Sales</a></li>
      <li className="menu__item"><a className="menu__link" href="#services">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#team">Team</a></li>
          <li className="menu__item"><a className="menu__link" href="https://test.metrix.place/" target='_blank'>Metrix.Place</a></li>
          <li className="menu__item"><a className="menu__link" href="https://cryptechtest.xyz/" target='_blank'>CryptechTest</a></li>
          <li className="menu__item"><a className="menu__link" href="http://www.freepik.com" target='_blank'>Attributes</a></li>

    </ul>
        <p>&copy;2023 Cryptech Services | All Rights Reserved</p>
        
                                        <Image
                    className="sales-land-pic"
                alt='front-logo'
                src="/images/footer.png"
                width="3620" height="1671"
                />
  </footer>
    )
  }
}