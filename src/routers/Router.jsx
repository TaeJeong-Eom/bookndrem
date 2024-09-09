import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
import MainPage from '@pages/MainPage';
// import MyPage from '@pages/MyPage';
// import ProtectedRoute from '@components/ProtectedRoute';
// import ProfilePage from '@pages/ProfilePage';


const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
