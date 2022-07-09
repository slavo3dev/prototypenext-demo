import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");

  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>felpApp - Change your Career Fast & Easy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="icon"
          sizes="16x16"
          href="/assets/logos/felpApp_logo.svg"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script>new WOW().init();</script>
        <meta
          name="description"
          content="felpApp - Software Development / Career Change "
        />
        <meta
          name="og:title"
          property="og:title"
          content="felpApp - Learn How To Create & Develop Software Web / Mobile Applications"
        ></meta>
        <meta
          name="twitter:card"
          content="felpApp - Become Software Web Developer FreeLancer"
        ></meta>
        <link rel="canonical" href="https://www.felpapp.com"></link>
      </Head>
      <div className="main font-body text-body">
        <Header handleHidden={handleHidden} />
        <MobileMenu
          hiddenClass={hiddenClass}
          handleRemove={handleRemove}
        />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Layout;
