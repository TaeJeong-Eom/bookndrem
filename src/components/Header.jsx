import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import * as S from '@styles/Header.styles';
import { useNavigate } from 'react-router-dom'; // 라우팅을 위해 useNavigate 사용
import useAuthStore from '@zustands/useAuthStore';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    logout: state.logout,
  }));

  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate('/login'); // 로그아웃 후 로그인 페이지로 리다이렉트
  };

  return (
    <S.HeaderContainer>
      <S.TopSection>
        <S.LeftSection>
          <S.PageName onClick={() => navigate('/')}>북앤드림</S.PageName>
          <S.SearchInput type="text" placeholder="도서 검색..." />
        </S.LeftSection>
        <S.IconsContainer>
          {isAuthenticated ? (
            <>
              <S.UserNickname>{user.nickname}</S.UserNickname>님
              <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
            </>
          ) : (
            <>
              <S.LoginText onClick={() => navigate('/login')}>로그인</S.LoginText>
              <S.LoginText onClick={() => navigate('/signup')}>회원가입</S.LoginText>
            </>
          )}
          <S.IconButton>
            <FaUser />
          </S.IconButton>
          <S.IconButton>
            <FaShoppingCart />
          </S.IconButton>
        </S.IconsContainer>
      </S.TopSection>
    </S.HeaderContainer>
  );
};

export default Header;
