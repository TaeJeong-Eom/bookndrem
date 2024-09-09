import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 1.3rem 0.9rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  
  &::placeholder {
    color: #aaa;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: #156BF0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
