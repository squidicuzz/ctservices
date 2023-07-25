"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

    const AOScall = () => {
    useEffect(() => {
      AOS.init({
      disable: 'tablet',
      offset: 50,
    });
    }, []);

  return [];
};

export default AOScall;