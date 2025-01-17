import { useEffect } from "react";
import ReactGA from "react-ga4";
import "../styles/globals.css";

const TRACKING_ID = "G-1423PLRJ68"; // Replace with your actual Google Analytics Measurement ID

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Initialize Google Analytics with the tracking ID
      ReactGA.initialize(TRACKING_ID);

      // Track the initial page view
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
