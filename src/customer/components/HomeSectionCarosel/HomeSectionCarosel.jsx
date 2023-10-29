import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; // Make sure to adjust the import path based on your project structure.

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <HomeSectionCard />,
    <HomeSectionCard />,
    <HomeSectionCard />,
    <HomeSectionCard />,
    <HomeSectionCard />,
  ];

  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
      />
    </div>
  );
};

export default HomeSectionCarosel;
