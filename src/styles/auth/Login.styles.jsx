import styled from 'styled-components';
import * as F from '@styles/auth/Form.styles'; // Form.styles에서 필요한 스타일 가져오기

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  padding-top: -3rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 550px;
  padding: 1rem 3rem 2rem 3rem;
  background: #fff;
  border-radius: 15px;
  border-color: #aaa;
  border: 1px;
  margin-bottom: auto;
`;

export const KakaoButton = styled(F.Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7e700;
  color: #000;
  margin-top: -0.05rem; /* Kakao 버튼과 로그인 버튼 사이 간격 */

  &:hover {
    background-color: #BDB000;
  }
`;

export const KakaoLogoImage = styled.img`
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const SignUpText = styled.span`
  margin-top: 1rem;
  color: #156BF0;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

export const SignUpPrompt = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color: black;
  font-size: 1rem;
`;

export const SignUpLink = styled.span`
  color: #007bff;
  cursor: pointer;
  margin-left: 0.5rem;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

export const LoginText = styled.h1`
  font-size: 1.9rem;
  text-align: left;
  font-weight: bold;
  margin-top: auto;
  line-height: 1.4;
  margin-right: 8rem;
`;

export const HighlightText = styled.span`
  color: #156bf0;
`;
