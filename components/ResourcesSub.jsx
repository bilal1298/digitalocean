import React from "react";
import Link from "next/link";
import classes from "../styles/ServicesSub.module.css";
import { useRouter } from "next/router";

const ResourcesSub = ({ setResourceActive }) => {
  const router = useRouter();
  return (
    <div onMouseEnter={() => setResourceActive(true)} onMouseLeave={() => setResourceActive(false)} className={classes.resourcesContainer}>
      <Link href={"/blog"} className={router.asPath === "/blog" && classes.active}>
        Blog
      </Link>
      <Link href={"/case-studies"} className={router.asPath === "/case-studies" && classes.active}>
        Case Studies
      </Link>
      <Link href={"/privacy-policy"} className={router.asPath === "/privacy-policy" && classes.active}>
        Privacy Policy
      </Link>
    </div>
  );
};

export default ResourcesSub;
