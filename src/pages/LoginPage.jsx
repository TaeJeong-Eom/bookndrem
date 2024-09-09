import React from 'react';
import * as S from '@styles/auth/Login.styles';
import Header from '@components/Header'; 
import LoginForm from '@components/Auth/LoginForm';

const LoginPage = () => {
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
        <LoginForm />
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default LoginPage;
