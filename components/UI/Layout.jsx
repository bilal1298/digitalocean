import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";
import Cookie from "../../components/Cookie";
import Cookies from "js-cookie";

const Layout = (props) => {
  const date = new Date();
  const uqid = Number(`${Math.floor(Math.random() * 4000)}${date.getUTCMinutes()}${date.getUTCSeconds()}`);
  const utm = Cookies.get("utm");
  const referrer = Cookies.get("referrer");
  const router = useRouter();
  return (
    <React.Fragment>
      {router.pathname !== "/dental-marketing-company" ? (
        <>
          <Header offset={props.offset} headerBg={props.headerBg} />
          <main>{props.children}</main>
          <Cookie />
          <Footer uqid={uqid} utm={utm} referrer={referrer} />
        </>
      ) : (
        <>{props.children}</>
      )}
    </React.Fragment>
  );
};

export default Layout;
