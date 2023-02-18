import React from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DMSubMenu = () => {
  const router = useRouter();
  return (
    <div className={classes.menuItems}>
      <div>
        <Link href="/seo-agency-melbourne" className={`${router.asPath.includes("/seo-agency-melbourne") && classes.active} ${classes.menuItem}`}>
          SEO
        </Link>
        <ul>
          <li className={`${router.asPath.includes("/local-seo-melbourne") && classes.active}`}>
            <Link href="/local-seo-melbourne">Local SEO</Link>
          </li>
          <li className={`${router.asPath.includes("/ecommerce-seo-agency") && classes.active}`}>
            <Link href="/ecommerce-seo-agency">Ecommerce SEO</Link>
          </li>
          <li className={`${router.asPath.includes("/international-seo-agency") && classes.active}`}>
            <Link href="/international-seo-agency">National/Global SEO</Link>
          </li>
        </ul>
        <div style={{ margin: "20px 0 0" }}>
          <Link href="/email-marketing-agency" className={`${router.asPath.includes("/email-marketing-agency") && classes.active} ${classes.menuItem}`}>
            Email Marketing
          </Link>
        </div>
      </div>
      <div>
        <Link href="/ppc-agency-melbourne" className={`${router.asPath.includes("/ppc-agency-melbourne") && classes.active} ${classes.menuItem}`}>
          PPC
        </Link>
        <ul>
          <li className={`${router.asPath.includes("/social-media-agency-melbourne") && classes.active}`}>
            <Link href="/social-media-agency-melbourne">Facebook Ads</Link>
          </li>
          <li className={`${router.asPath.includes("/google-ads-agency") && classes.active}`}>
            <Link href="/google-ads-agency">Google Ads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DMSubMenu;
