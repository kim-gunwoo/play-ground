import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { Suspense } from 'react'
import styles from '../styles/Home.module.css'

// class ErrorBoundary extends React.Component {
//   constructor(props : {hasError: boolean}) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error : Error) {
//     // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
//     return { hasError: true };
//   }

//   componentDidCatch(error :any , errorInfo :any) {
//     // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
//     // logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

const helloKeys = {
  all: ['hello'] as const,
  lists: () => [...helloKeys.all, 'list'] as const,
  list: (filters: string) => [...helloKeys.lists(), { filters }] as const,
  details: () => [...helloKeys.all, 'detail'] as const,
  detail: (id: number) => [...helloKeys.details(), id] as const,
}

const HomeComponent = dynamic(() => import('../components/Home'), {
  ssr: false, loading: () => <div>loading...</div>
});



const Home: NextPage = () => {
  return (
    // <Suspense fallback={<div>Suspense loading...</div>}>
      <HomeComponent />
    //  </Suspense>
  )
}

export default Home
