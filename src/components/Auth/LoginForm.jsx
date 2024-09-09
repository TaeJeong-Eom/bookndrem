import React, { useState, useEffect } from 'react';
import * as L from '@styles/auth/Login.styles';
import * as F from '@styles/auth/Form.styles';
import * as S from '@styles/auth/Signup.styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@components/firebase';
import useAuthStore from '@zustands/useAuthStore';
import KakaoLogo from '@assets/Kakao_logo.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY); // .env 파일의 Kakao 앱 키 사용
      }
    } else {
      console.log('Kakao SDK가 로드되지 않았습니다.');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const accessToken = await user.getIdToken(); // Firebase 인증 토큰 가져오기
      const refreshToken = user.refreshToken;
      login(user, accessToken, refreshToken);
      window.location.href = '/';
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      alert('Kakao SDK가 로드되지 않았습니다.');
      return;
    }

    // 카카오 로그인 URL로 리디렉션
    const url =
      'https://kauth.kakao.com/oauth/authorize?client_id=' +
      import.meta.env.VITE_KAKAO_APP_KEY +
      '&redirect_uri=' +
      import.meta.env.VITE_KAKAO_REDIRECT_URI +
      '&response_type=code&scope=account_email,birthday,gender,profile_nickname,profile_image';

    window.location.href = url;
  };

  return (
    <F.Form onSubmit={handleLogin}>
      <S.InputWrapper>
        <F.Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
        />
        <S.InputLabel htmlFor="email">e-mail을 입력해주세요</S.InputLabel>
      </S.InputWrapper>

      <S.InputWrapper>
        <F.Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
        />
        <S.InputLabel htmlFor="password">비밀번호를 입력해주세요</S.InputLabel>
      </S.InputWrapper>

      <L.SignUpPrompt>
        처음이신가요?{' '}
        <L.SignUpLink onClick={() => (window.location.href = '/signup')}>
          회원가입하기
        </L.SignUpLink>
      </L.SignUpPrompt>

      <F.Button type="submit">로그인</F.Button>

      <L.KakaoButton type="button" onClick={handleKakaoLogin}>
        <L.KakaoLogoImage src={KakaoLogo} alt="Kakao Logo" />
        카카오톡으로 시작하기
      </L.KakaoButton>
    </F.Form>
  );
};

export default LoginForm;
