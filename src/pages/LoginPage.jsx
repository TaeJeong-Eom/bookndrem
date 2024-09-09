import React from 'react';
import * as S from '@styles/auth/Login.styles'; // 스타일 경로
import Header from '@components/Header'; // Header 컴포넌트 경로 수정
import LoginForm from '@components/Auth/LoginForm'; // LoginForm 컴포넌트 경로 확인

const LoginPage = () => {

  const handleLogin = () => {
    // 추후 로그인 로직 추가 예정
  };

  return (
    <S.PageContainer>
      <Header />
      <S.LoginText>
        안녕하세요.
        <br />
        <S.HighlightText>북앤드림</S.HighlightText> 입니다 :)
        <br />
        <br />
        로그인
      </S.LoginText>
      <S.ContentContainer>
        <LoginForm onLogin={handleLogin} /> {/* LoginForm 컴포넌트 사용 */}
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default LoginPage;
