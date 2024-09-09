import React from 'react';
import * as S from '@styles/auth/Signup.styles'; 
import * as L from '@styles/auth/Login.styles';
import * as F from '@styles/auth/Form.styles'
import Header from '@components/Header';
import SignupForm from '@components/Auth/SignupForm';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@zustands/useAuthStore';


const SignupPage = () => {
  const { isLoggedIn } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <S.PageContainer>
      <Header />
      <L.LoginText>
        <L.HighlightText>북앤드림</L.HighlightText>에 오신 것을
        <br />
        환영합니다.
      </L.LoginText>
      <S.ContentContainer>
        <F.Form>
          <SignupForm/>
        </F.Form>

      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default SignupPage;
