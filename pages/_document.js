import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="128x128" href="/favicon-2.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="/assets/vendor/normalize/normalize.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/fontawesome-all.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" /> 
        <link rel="stylesheet" href="/assets/vendor/lightgallery/css/lightgallery.min.css" /> 
        </Head>
        <body id="body" className="tb-transition tb-boxed tb-smooth-scroll tb-magic-cursor">
            <main id="body-inner">
                
            <div id="page-transition">
                <div className="ptr-overlay" />
                <div className="ptr-preloader">
                <div className="ptr-prel-content">
                    <img src="/assets/img/logo-light.png" className="ptr-prel-image tb-logo-light" alt="BlocSoc" />
                </div> 
                </div>
            </div>
                <div id="magic-cursor">
                    <div id="ball" />
                </div>

                <div className="bg-noise"></div>

                <div id="scroll-container">

                    <header id="tb-header" className="tb-header-fixed">
                        <div className="tb-header-inner"> 
                        <div className="tb-header-col">
                            <div className="tb-logo"> 
                            <Link href="/">
                                <a>
                                    <img src="/assets/img/logo-dark.png" className="tb-logo-dark magnetic-item" alt="BlocSoc" /> 
                                    <img src="/assets/img/logo-light.png" className="tb-logo-light magnetic-item" alt="BlocSoc" />
                                </a>
                            </Link>
                            </div>
                        </div>
                        <div className="tb-header-col">
                            <div id="tb-ol-menu-toggle-btn-wrap">
                            <div className="tb-ol-menu-toggle-btn-text">
                                <span className="text-menu" data-hover="Open">Menu</span>
                                <span className="text-close">Close</span>
                            </div>
                            <div className="tb-ol-menu-toggle-btn-holder">
                                <Link href="#" className="tb-ol-menu-toggle-btn magnetic-item"><a><span /></a></Link>
                            </div>
                            </div>
                            <nav className="tb-overlay-menu tb-ol-menu-center tb-ol-menu-count">
                            <div className="tb-ol-menu-holder">
                                <div className="tb-ol-menu-inner tb-wrap">
                                <div className="tb-ol-menu-content">
                                    <ul className="tb-ol-menu-list">
                                    <li><Link href="/blogposts"><a>Blogposts</a></Link></li>
                                    <li><Link href="/register"><a>Register</a></Link></li>
                                    <li><Link href="/login"><a>Login</a></Link></li>
                                    </ul>
                                </div> 
                                </div> 
                            </div> 
                            <div className="bg-noise" />
                            </nav> 
                        </div> 
                        </div> 
                    </header> 
                    

                    <div id="content-wrap">
                    
                    <Main />
                    
                    <footer id="tb-footer">
                        <div className="tb-footer-inner">
                        <div className="footer-col tb-align-center-left">
                            <div className="footer-col-inner">
                            <div className="tb-btn tb-btn-link"> 
                                <Link href="#" className="scroll-to-top" data-hover="Back to top"><a>Back to top</a></Link>
                            </div>
                            </div> 
                        </div>
                        <div className="footer-col tb-align-center order-m-last">
                            <div className="footer-col-inner">
                            <div className="tb-copyright">
                                © Copyright - <Link href="#" target="_blank" rel="noopener" className="tb-link"><a>RowanBlocSoc</a></Link>
                            </div>
                            </div> 
                        </div>
                        <div className="footer-col tb-align-center-right">
                            <div className="footer-col-inner">
                            <div className="footer-social">
                                <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt" /></div>
                                <div className="social-buttons">
                                <ul>
                                    <li><Link href="#" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-facebook-f" /></a></Link></li>
                                    <li><Link href="#" className="magnetic-item" target="_blank" rel="noopener"><a> <i className="fab fa-linkedin" /></a></Link></li>
                                    <li><Link href="#" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-instagram" /></a></Link></li>
                                    <li><Link href="#" className="magnetic-item" target="_blank" rel="noopener"><a><i className="fab fa-twitter" /></a></Link></li>
                                </ul>
                                </div> 
                            </div> 
                            </div> 
                        </div>
                        </div>
                    </footer>
                    
                    </div>
                </div>
            </main>
            <NextScript />

            
        </body>
      </Html>
    )
  }
}

export default MyDocument