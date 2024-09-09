import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #156bf0;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #004aad;
  }
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>회원가입이 완료되었습니다!</h2>
        <Button onClick={onClose}>확인</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
