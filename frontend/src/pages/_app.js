// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {useState} from 'react';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
// import { CacheProvider } from '@emotion/react';

// import 'aos/dist/aos.css';

// import theme from '../theme/theme';
// import createEmotionCache from '../utils/createEmotionCache';
// import Layout from '../layout/Layout';



// // Client-side cache, shared for the whole session of the user in the browser
// const clientSideEmotionCache = createEmotionCache();

// const App = ({

 
//   Component,
//   pageProps,
//   emotionCache = clientSideEmotionCache,
  
 
// }) => {
//   useEffect(() => {
//     // Remove the server-side injected CSS
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }

//     AOS.init({
//       once: true,
//       delay: 0,
//       duration: 800,
//       offset: 0,
//       easing: 'ease-in-out',
//     });
//   }, 

//   // pdf file Onchange state
//   // const [pdfFile, setPdfFile]=useState(null);

//   // pdf file error state
//   // const[pdfError,setPdfError]=useState('');

 
  
//   []);

//   return (
//     <CacheProvider value={emotionCache}>
//     <div>
//       <h1>PDFViewer</h1>
//       <PDFViewer pdfFile={uploadedFile}/>
//     </div>
 
//       <Head>
//         <meta charSet='utf-8' />
//         <meta
//           content='minimum-scale=1, initial-scale=1, width=device-width'
//           name='viewport'
//         />
//         <meta name='description' content="Namugarura Syda Portfolio" />
//         <meta
//           name='keywords'
//           content='programming, python, javascript, portfolio, website'
//         />
//         <title>Namugarura &apos Syda;</title>
//       </Head>

//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
        
//       </ThemeProvider>
       
//     </CacheProvider>
//   );
// };

// App.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };

// export default App;



import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import 'aos/dist/aos.css';
import theme from '../theme/theme';
import createEmotionCache from '../utils/createEmotionCache';
import Layout from '../layout/Layout';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <meta name='description' content="Namugarura Syda Portfolio" />
        <title>Namugarura Syda</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}