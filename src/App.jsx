import React from 'react';
import Router from '@routers/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 쿼리가 실패했을 때 재시도 횟수 설정
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
