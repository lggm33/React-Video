import React from 'react';
import '../assets/styles/componets/Carousel.scss';

const Carousel = (props) => {
  const { children } = props;
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        { children }
      </div>
    </section>
  );
};
export default Carousel;
