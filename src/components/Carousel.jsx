// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import * as S from '@styles/Carousel.styles';

const Carousel = ({ contents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === contents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3초마다 다음 컨텐츠로 이동

    return () => clearInterval(interval);
  }, [contents]);

  return (
    <S.CarouselContainer>
    <S.CarouselWrapper>
      <S.CarouselContent>
        {contents[currentIndex]}
      </S.CarouselContent>
    </S.CarouselWrapper>
    </S.CarouselContainer>
  );
};

export default Carousel;
