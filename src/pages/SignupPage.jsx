import React from 'react';
import * as S from '@styles/auth/Signup.styles'; 
import * as L from '@styles/auth/Login.styles'; // Login.styles에서 Form 가져옴
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
        <L.Form> {/* Login.styles에서 Form 가져옴 */}
          <SignupForm /> {/* SignupForm 컴포넌트 사용 */}
        </L.Form>
        <S.SignUpText onClick={() => (window.location.href = '/login')}>
          로그인
        </S.SignUpText>
      </S.ContentContainer>
    </S.PageContainer>
  );
};

export default SignupPage;
