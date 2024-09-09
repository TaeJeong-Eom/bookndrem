import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* 콘텐츠의 최대 너비 설정 */
  margin: 20px 0; /* 콘텐츠 위아래 여백 */
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
`;
