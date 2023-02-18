import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DMSubMenu = () => {
  const router = useRouter();
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/web-design-melbourne" className={`${router.asPath.includes("/web-design-melbourne") && classes.active} ${classes.menuItem}`}>
          Web Design
        </Link>
        <ul>
          <li className={`${router.asPath.includes("/wordpress-web-design") && classes.active}`}>
            <Link href="/wordpress-web-design">Wordpress</Link>
          </li>
          <li className={`${router.asPath.includes("/ecommerce-website-design") && classes.active}`}>
            <Link href="/ecommerce-website-design">Ecommerce</Link>
          </li>
          <li className={`${router.asPath.includes("/business-website-design") && classes.active}`}>
            <Link href="/business-website-design">Business & Services</Link>
          </li>
          <li className={`${router.asPath.includes("/educational-website-design") && classes.active}`}>
            <Link href="/educational-website-design">Education</Link>
          </li>
          <li className={`${router.asPath.includes("/medical-website-design") && classes.active}`}>
            <Link href="/medical-website-design">Health Care</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
