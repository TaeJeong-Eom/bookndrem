import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0; 
  box-sizing: border-box; 
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between; /* 양쪽 끝에 요소 배치 */
  align-items: center;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* 타이틀과 검색창 사이의 간격 조절 */
`;

export const PageName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽에 고정 */
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;

  &:hover {
    color: #007BFF;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽에 고정 */
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

export const LoginText = styled.span`
  cursor: pointer;
  font-size: 16px;
  color: #333;

  &:hover {
    color: #007BFF;
  }
`;

export const UserNickname = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #007BFF;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;

export const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 15px;
  width: 100%;
  border-top: 1px solid #ccc;
  padding-top: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const CategoryItem = styled.span`
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #007BFF;
  }
`;
