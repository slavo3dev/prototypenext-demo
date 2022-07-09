/* eslint-disable react/prop-types */
import "../public/assets/css/animate.min.css";
import React, { useEffect, useState } from "react";
import "../public/assets/css/tailwind-built.css";
import Preloader from "../components/elements/Preloader";
import "swiper/css";
import Head from "next/head";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
// eslint-disable-next-line react/prop-types

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {!loading ? (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />{" "}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
