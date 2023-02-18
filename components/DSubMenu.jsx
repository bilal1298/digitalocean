import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DMSubMenu = () => {
  const router = useRouter();
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/graphic-design-melbourne" className={classes.menuItem}>
          Design
        </Link>
        <ul>
          <li className={`${router.asPath.includes("/graphic-design-melbourne") && classes.active}`}>
            <Link href="/graphic-design-melbourne">Graphic Design</Link>
          </li>
          <li className={`${router.asPath.includes("/logo-design-services") && classes.active}`}>
            <Link href="/logo-design-services">Logo Design</Link>
          </li>
          <li className={`${router.asPath.includes("/copywriting-melbourne") && classes.active}`}>
            <Link href="/copywriting-melbourne">Content Writing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
