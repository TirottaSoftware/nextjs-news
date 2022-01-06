import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <div className="overflow-x-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
