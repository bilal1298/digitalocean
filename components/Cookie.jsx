import React, { useState, useEffect } from "react";
import classes from "../styles/pages.module.css";
import Cookies from "js-cookie";

const Cookie = () => {
  const cookie = () => {
    Cookies.set("Cookies Accepted", "yes");
    setCookies(true);
  };
  const [cookies, setCookies] = useState(true);
  useEffect(() => {
    Cookies.get("Cookies Accepted") && setCookies(true);
    !Cookies.get("Cookies Accepted") && setCookies(false);
  }, []);
  return (
    <React.Fragment>
      {!cookies && (
        <div className={classes.cookieWrapper}>
          <div className="container-lg">
            <div className={classes.cookieContainer}>
              <div className={classes.cookieImage}>
                <h3>Have a cookie :&#41;</h3>
                <img src="/cookie.png" alt="" />
              </div>
              <div className={classes.cookieText}>
                <h3>Have a cookie :&#41;</h3>
                <p>This website uses cookies to enhance your browsing experience.</p>
              </div>
              <div className={classes.cookieButton}>
                <button onClick={cookie}>Understood. Yum!</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cookie;
