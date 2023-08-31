import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImagePicker: React.FC = () => {
  const allImages = [
    'https://metrix.place/plc/chunks/1-1.png',
    'https://metrix.place/plc/chunks/2-2.png',
    'https://metrix.place/plc/chunks/3-3.png',
    'https://metrix.place/plc/chunks/4-4.png',
    'https://metrix.place/plc/chunks/5-5.png',
    'https://metrix.place/plc/chunks/6-6.png',
    'https://metrix.place/plc/chunks/7-7.png',
    'https://metrix.place/plc/chunks/8-8.png',
    'https://metrix.place/plc/chunks/9-9.png',
    'https://metrix.place/plc/chunks/10-10.png',
    'https://metrix.place/plc/chunks/11-11.png',
    'https://metrix.place/plc/chunks/12-12.png',
    'https://metrix.place/plc/chunks/13-13.png',
    'https://metrix.place/plc/chunks/14-14.png',
    'https://metrix.place/plc/chunks/15-15.png',
  ];

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffledImages = [...allImages];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    const selected = shuffledImages.slice(0, 5);
    setSelectedImages(selected);
  }, []); // Empty dependency array ensures the effect runs only once, on component mount

  return (
    <div>
      <div className='gallery'>
      <Image
                  src="/images/metrixboard.webp"
                  alt="mrx"
                  width="1100"
                  height="1100"
                />
        {selectedImages.map(imagePath => (
          <Image key={imagePath} src={imagePath} alt="Randomly picked"                 width="1100"
          height="1100"/>
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
