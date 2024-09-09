// src/styles/Carousel.styles.jsx
import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 450px; /* 캐러셀 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* 임시 배경색 */
  border-radius: 10px;
`;

export const CarouselContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;
