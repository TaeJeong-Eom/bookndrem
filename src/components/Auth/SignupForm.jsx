import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as F from '@styles/auth/Form.styles'; // Form 전용 스타일 가져오기
import * as S from '@styles/auth/Signup.styles'; // Signup 전용 스타일 가져오기
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@components/firebase';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedRole, setSelectedRole] = useState(null);

  const onSubmit = async (data) => {
    const { email, password } = data;
    if (!selectedRole) {
      alert('역할을 선택해주세요!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user, 'Role:', selectedRole);
      alert('회원가입이 완료되었습니다!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <F.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <F.Input
          type="text"
          {...register('nickname', { required: '닉네임을 입력해주세요.' })}
          placeholder="닉네임"
        />
        <S.InputLabel htmlFor="nickname">닉네임</S.InputLabel>
      </S.InputWrapper>

      <S.InputWrapper>
        <F.Input
          type="email"
          {...register('email', { required: '이메일을 입력해주세요.' })}
          placeholder="이메일"
        />
        <S.InputLabel htmlFor="email">이메일</S.InputLabel>
      </S.InputWrapper>

      <S.InputWrapper>
        <F.Input
          type="password"
          {...register('password', { 
            required: '비밀번호를 입력해주세요.', 
            minLength: { value: 8, message: '비밀번호는 8자 이상이어야 합니다.' }
          })}
          placeholder="비밀번호"
        />
        <S.InputLabel htmlFor="password">비밀번호</S.InputLabel>
        {errors.password && <small style={{ color: 'red' }}>{errors.password.message}</small>}
      </S.InputWrapper>

      <S.RoleSelectionContainer>
        <S.RoleButton
          type="button"
          onClick={() => setSelectedRole('buyer')}
          isSelected={selectedRole === 'buyer'}
        >
          사고 싶어요
        </S.RoleButton>
        <S.RoleButton
          type="button"
          onClick={() => setSelectedRole('seller')}
          isSelected={selectedRole === 'seller'}
        >
          팔고 싶어요
        </S.RoleButton>
      </S.RoleSelectionContainer>

      <F.Button type="submit">회원가입</F.Button>
    </F.Form>
  );
};

export default SignupForm;
