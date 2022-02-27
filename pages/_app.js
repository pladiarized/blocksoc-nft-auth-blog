import '../styles/globals.css'
import '../styles/helper.css'
import '../styles/theme.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js" strategy="beforeInteractive" />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/5.0.1/smooth-scrollbar.js" strategy="beforeInteractive" /> 
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.5.6/swiper-bundle.min.js" strategy="beforeInteractive" /> 
      <Script src="https://unpkg.com/imagesloaded@4.1.4/imagesloaded.pkgd.min.js" strategy="beforeInteractive" /> 
      <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" strategy="beforeInteractive" /> 
      <Script src="https://cdn.jsdelivr.net/npm/isotope-packery@2.0.1/packery-mode.pkgd.min.js" strategy="beforeInteractive" /> 
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.7.2/js/lightgallery-all.min.js" strategy="beforeInteractive" /> 
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.3/jquery.mousewheel.min.js" strategy="beforeInteractive" /> 

      <Script src="/assets/js/blocsoc.js" strategy="beforeInteractive" />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
