import React from 'react';
import Header from '@components/Header';

const Layout = ({ children }) => (
  <div>
    <main>{children}</main> {/* 각 페이지의 메인 콘텐츠 */}
  </div>
);

export default Layout;
