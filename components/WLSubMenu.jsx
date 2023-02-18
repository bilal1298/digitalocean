import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DMSubMenu = () => {
  const router = useRouter();
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/white-label-agency" className={`${router.asPath.includes("/white-label-agency") && classes.active} ${classes.menuItem}`}>
          White Label
        </Link>
        <ul>
          <li className={`${router.asPath.includes("/white-label-seo-reseller") && classes.active}`}>
            <Link href="/white-label-seo-reseller">SEO</Link>
          </li>
          <li className={`${router.asPath.includes("/white-label-web-design") && classes.active}`}>
            <Link href="/white-label-web-design">Web Design</Link>
          </li>
          <li className={`${router.asPath.includes("/white-label-ppc-agency") && classes.active}`}>
            <Link href="/white-label-ppc-agency">PPC</Link>
          </li>
          <li className={`${router.asPath.includes("/white-label-content-writing-services") && classes.active}`}>
            <Link href="/white-label-content-writing-services">Content Writing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
