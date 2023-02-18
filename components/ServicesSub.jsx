import React, { useState } from "react";
import classes from "../styles/ServicesSub.module.css";
import Link from "next/link";
import DMSubMenu from "./DMSubMenu";
import WDSubMenu from "./WDSubMenu";
import WLSubMenu from "./WLSubMenu";
import DSubMenu from "./DSubMenu";
import { useRouter } from "next/router";

const ServicesSub = (props) => {
  const router = useRouter();
  const pageIndicator = () => {
    if (
      router.asPath.includes("/digital-marketing-agency-australia") ||
      router.asPath.includes("/seo-agency-melbourne") ||
      router.asPath.includes("/local-seo-melbourne") ||
      router.asPath.includes("/ecommerce-seo-agency") ||
      router.asPath.includes("/international-seo-agency") ||
      router.asPath.includes("/email-marketing-agency") ||
      router.asPath.includes("/ppc-agency-melbourne") ||
      router.asPath.includes("/google-ads-agency") ||
      router.asPath.includes("/social-media-agency-melbourne")
    ) {
      return "dm";
    } else if (
      router.asPath.includes("/web-design-melbourne") ||
      router.asPath.includes("/wordpress-web-design") ||
      router.asPath.includes("/ecommerce-website-design") ||
      router.asPath.includes("/business-website-design") ||
      router.asPath.includes("/educational-website-design") ||
      router.asPath.includes("/medical-website-design")
    ) {
      return "wd";
    } else if (
      router.asPath.includes("/white-label-agency") ||
      router.asPath.includes("/white-label-seo-reseller") ||
      router.asPath.includes("/white-label-web-design") ||
      router.asPath.includes("/white-label-ppc-agency") ||
      router.asPath.includes("/white-label-content-writing-services")
    ) {
      return "wl";
    } else if (router.asPath.includes("/graphic-design-melbourne") || router.asPath.includes("/logo-design-services") || router.asPath.includes("/copywriting-melbourne")) {
      return "d";
    } else {
      return "de";
    }
  };
  const [activeMenu, setActiveMenu] = useState(pageIndicator());
  return (
    <div className={`container ${classes.servicesSubContainer}`} onMouseEnter={() => props.setServiceActive(true)} onMouseLeave={() => props.setServiceActive(false)}>
      <div className={classes.menu}>
        <ul>
          <li className={activeMenu === "dm" || activeMenu === "de" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("dm")}>
            <Link href="/digital-marketing-agency-australia" className={`${pageIndicator() === "dm" && classes.active}`}>
              Digital Marketing
            </Link>
          </li>
          <li className={activeMenu === "wd" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("wd")}>
            <Link href="/web-design-melbourne" className={`${pageIndicator() === "wd" && classes.active}`}>
              Web Design
            </Link>
          </li>
          <li className={activeMenu === "wl" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("wl")}>
            <Link href="/white-label-agency" className={`${pageIndicator() === "wl" && classes.active}`}>
              White Label
            </Link>
          </li>
          <li className={activeMenu === "d" ? classes.active : undefined} onMouseEnter={() => setActiveMenu("d")}>
            <Link href="/graphic-design-melbourne" className={`${pageIndicator() === "d" && classes.active}`}>
              Design
            </Link>
          </li>
        </ul>
      </div>
      {(activeMenu === "dm" || activeMenu === "de") && <DMSubMenu />}
      {activeMenu === "wd" && <WDSubMenu />}
      {activeMenu === "wl" && <WLSubMenu />}
      {activeMenu === "d" && <DSubMenu />}
    </div>
  );
};

export default ServicesSub;
