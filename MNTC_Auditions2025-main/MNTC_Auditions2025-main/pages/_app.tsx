import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Public_Sans, Raleway } from "next/font/google";

//For Font Configuration
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: "variable",
  preload: true,
  variable: "--font-ps",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  preload: true,
  variable: "--font-r",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const handleRightClick = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (process.env["NODE_ENV"] === "production") {
      window.addEventListener("contextmenu", handleRightClick);
      return () => {
        window.removeEventListener("contextmenu", handleRightClick);
      };
    }
  }, [router]);

  return (
    <SessionProvider session={session}>
      <main className={`${publicSans.variable} ${raleway.variable} font-body`}>
        <Navbar />
        <ToastContainer />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
