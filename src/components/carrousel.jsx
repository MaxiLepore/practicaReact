import React, { useRef } from 'react';
import '../styles/carousel.css';

const Carrousel = () => {
  const carrouselRef = useRef(null);
  const productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'];

  const scroll = (direction) => {
    const scrollAmount = 200;
    const scrollIncrement = direction === 'left' ? -scrollAmount : scrollAmount;
    const currentPosition = carrouselRef.current.scrollLeft;
    const newPosition = currentPosition + scrollIncrement;

    carrouselRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carrousel-container">
      <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>
      <div className="carrousel" ref={carrouselRef}>
        {productos.map((product, index) => (
          <div key={index} className="carrousel-item">
            {product}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default Carrousel;
