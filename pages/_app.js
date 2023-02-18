import { useState, useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/UI/Layout";
import { useRouter } from "next/router";
// import Loader from "../components/UI/Loader";
// import { motion, AnimatePresence } from "framer-motion";
import TagManager from "react-gtm-module";
import Cookies from "js-cookie";

// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) =>
//       url === router.asPath &&
//       setTimeout(() => {
//         setLoading(false);
//       }, 500);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   });

//   return (
//     loading && (
//       <AnimatePresence>
//         <motion.div key={1} exit={{ x: "-100vw" }}>
//           <Loader />
//         </motion.div>
//       </AnimatePresence>
//     )
//   );
// }

function MyApp({ Component, pageProps }) {
  const [headerBg, setHeaderBg] = useState(false);
  const [offset, setOffset] = useState(0);
  const [myReferrer, setReferrer] = useState("");
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TTN55LM" });
  }, []);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setReferrer(document.referrer);
  }, []);
  const date = new Date();
  const uqid = Number(`${Math.floor(Math.random() * 4000)}${date.getUTCMinutes()}${date.getUTCSeconds()}`);
  !Cookies.get("token") && Cookies.set("token", uqid, { expires: 30 });
  const router = useRouter();
  router.query["utm_source"] && !Cookies.get("utm") && Cookies.set("utm", router.query["utm_source"], { expires: 30 });
  !Cookies.get("referrer") && Cookies.set("referrer", myReferrer, { expires: 1 });
  const referrer = Cookies.get("referrer");
  const utm = Cookies.get("utm");
  return (
    <Layout offset={offset} headerBg={headerBg}>
      {/* <Loading /> */}
      <Component {...pageProps} setHeaderBg={setHeaderBg} uqid={uqid} utm={utm} referrer={referrer} />
    </Layout>
  );
}

export default MyApp;
