// src/pages/MainPage.jsx
import React from 'react';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Carousel from '@components/Carousel';

const MainPage = () => {
  const carouselContents = [
    <div>공지사항 1</div>,
    <div>공지사항 2</div>,
    <div>공지사항 3</div>,
  ];

  return (
    <Layout>
      <Header />
      <Carousel contents={carouselContents} />
      <div style={{ padding: '20px' }}>
        <h2>Welcome to 북앤드림</h2>
        <p>여기는 메인 페이지입니다.</p>
      </div>
    </Layout>
  );
};

export default MainPage;
