import styled from 'styled-components';

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
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 1.2rem;
  left: 0.8rem;
  font-size: 1.05rem;
  color: #aaa;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 1;
`;

export const RoleSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const RoleButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid #007bff;
  background-color: ${(props) => (props.isSelected ? '#007bff' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#007bff')};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;
