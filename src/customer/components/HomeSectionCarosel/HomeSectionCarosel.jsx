import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {setActiveIndex(activeIndex - 1), console.log(items)};

  const slideNext = () => {setActiveIndex(activeIndex + 1), console.log(items)};

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,].map((item) => <HomeSectionCard/>)


  return (
    <div className='px-4 lg:px-8'>
      <div className='border' style={{ position: 'relative' }}>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <Button
          variant="contained"
          onClick={slideNext}
          className='z-50 bg-white' 
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label="next"
        > 
          <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>

        <Button
          variant="contained"
          onClick={slidePrev}
          className='z-50 bg-white' 
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label="next"
        > 
          <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
