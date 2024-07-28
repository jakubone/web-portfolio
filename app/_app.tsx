// import { useState, useEffect } from 'react';
// import { NextUIProvider } from '@nextui-org/react';
// import Router from 'next/router';
// import Preloader from '../components/Preloader'; // Upewnij się, że ścieżka jest poprawna
// import { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//     const [loading, setLoading] = useState(false);
  
//     useEffect(() => {
//       const handleStart = () => setLoading(true);
//       const handleComplete = () => setLoading(false);
  
//       Router.events.on('routeChangeStart', handleStart);
//       Router.events.on('routeChangeComplete', handleComplete);
//       Router.events.on('routeChangeError', handleComplete);
  
//       return () => {
//         Router.events.off('routeChangeStart', handleStart);
//         Router.events.off('routeChangeComplete', handleComplete);
//         Router.events.off('routeChangeError', handleComplete);
//       };
//     }, []);
  
//     return (
//       <NextUIProvider>
//         {loading ? <Preloader /> : <Component {...pageProps} />}
//       </NextUIProvider>
//     );
//   }
  
// export default MyApp;