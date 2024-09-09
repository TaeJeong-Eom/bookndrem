import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import useAuthStore from '@zustands/useAuthStore';

const logout = useAuthStore((state) => state.logout);

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      logout(); // 상태에서 로그아웃 처리
      window.location.href = '/login';
    })
    .catch((error) => {
      console.error('로그아웃 실패:', error);
    });
};
