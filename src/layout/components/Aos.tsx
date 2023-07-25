"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

    const AOScall = () => {
    useEffect(() => {
    AOS.init({
      offset: 50,
      disable: 'tablet'
    });
    }, []);

  return [];
};

export default AOScall;