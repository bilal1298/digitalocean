import { useState, useEffect } from "react";
import classes from "../styles/Header.module.css";
import Link from "next/link";
import { faCaretDown, faAlignCenter, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesSub from "./ServicesSub";
import ResourcesSub from "./ResourcesSub";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./UI/Accordion";
import { useRouter } from "next/router";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);
  const [resourceActive, setResourceActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuActive(false);
  }, [router]);
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
      router.asPath.includes("/social-media-agency-melbourne") ||
      router.asPath.includes("/web-design-melbourne") ||
      router.asPath.includes("/wordpress-web-design") ||
      router.asPath.includes("/ecommerce-website-design") ||
      router.asPath.includes("/business-website-design") ||
      router.asPath.includes("/educational-website-design") ||
      router.asPath.includes("/medical-website-design") ||
      router.asPath.includes("/graphic-design-melbourne") ||
      router.asPath.includes("/logo-design-services") ||
      router.asPath.includes("/copywriting-melbourne") ||
      router.asPath.includes("/white-label-agency") ||
      router.asPath.includes("/white-label-seo-reseller") ||
      router.asPath.includes("/white-label-web-design") ||
      router.asPath.includes("/white-label-ppc-agency") ||
      router.asPath.includes("/white-label-content-writing-services")
    ) {
      return true;
    }
  };

  return (
    <header className={`${classes.header} ${props.offset > 30 ? classes.scrolled : undefined}`} style={{ background: `${props.headerBg ? "#031254" : ""}` }}>
      <nav className={`container ${classes.nav}`}>
        <div className={classes.logo}>
          <Link href="/">
            <img src={"/illwhite.png"} alt="" className={classes.logoWhite} />
            <img src={"/Skyward-Digital-Logo.png"} alt="" className={classes.logoBlue} />
          </Link>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link href={"/"} className={`${router.asPath === "/" && classes.active}`}>
                Home
              </Link>
            </li>
            <li onMouseEnter={() => setServiceActive(true)} onMouseLeave={() => setServiceActive(false)} style={{ marginRight: "10px" }}>
              <Link href="javascript:void(0)" className={`${pageIndicator() && classes.active}`}>
                Services <img src="/downArrow.png" alt="" className={classes.downArrow} />
              </Link>
            </li>
            <li onMouseEnter={() => setResourceActive(true)} onMouseLeave={() => setResourceActive(false)} style={{ marginRight: "10px" }}>
              <Link
                href="javascript:void(0)"
                className={`${(router.asPath.includes("/blog") || router.asPath.includes("/case-studies") || router.asPath.includes("/privacy-policy")) && classes.active}`}
              >
                Resources <img src="/downArrow.png" alt="" className={classes.downArrow} />
              </Link>
              {resourceActive && (
                <motion.div initial={{ scale: 0, y: -50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: -50 }} transition={{ duration: 0.3 }} className={classes.resourceSubContainer}>
                  <ResourcesSub setResourceActive={setResourceActive} />
                </motion.div>
              )}
            </li>
            <li>
              <Link href="/pricing" className={`${router.asPath.includes("/pricing") && classes.active}`}>
                Pricing
              </Link>
            </li>

            <li className={classes.headerButton}>
              <Link className={classes.button} href="/contact">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.mobileMenuIcon}>
          <FontAwesomeIcon icon={faAlignCenter} className={classes.hamIcon} onClick={() => setMenuActive(true)} style={{ width: "30px" }} />
        </div>
        <AnimatePresence>
          {menuActive && (
            <motion.div initial={{ left: "-100vw" }} animate={{ left: 0 }} transition={{ type: "stiff" }} exit={{ left: "-100vw" }} className={classes.mobileMenu}>
              <div className={classes.mobileMenuTopBar}>
                <Link href={"/"}>
                  <img src={"/Skyward-Digital-Logo.png"} alt="" />
                </Link>
                <FontAwesomeIcon icon={faClose} className={classes.closeIcon} onClick={() => setMenuActive(false)} style={{ color: "#000", width: "30px" }} />
              </div>
              <ul className={classes.mobileMenuList}>
                <li>
                  <Link href="/" className={`${router.asPath === "/" && classes.active}`}>
                    Home
                  </Link>
                </li>
              </ul>
              <Accordion
                title={<h3 className={`${pageIndicator() && classes.active}`}>Services</h3>}
                background={"#002eff"}
                backgroundD={"#EBF5FF"}
                color={"#fff"}
                active={pageIndicator()}
                desc={
                  <>
                    <Accordion
                      title={<h3>Digital Marketing</h3>}
                      backgroundD={"#ebebeb"}
                      active={
                        router.asPath.includes("/digital-marketing-agency-australia") ||
                        router.asPath.includes("/seo-agency-melbourne") ||
                        router.asPath.includes("/local-seo-melbourne") ||
                        router.asPath.includes("/ecommerce-seo-agency") ||
                        router.asPath.includes("/international-seo-agency") ||
                        router.asPath.includes("/email-marketing-agency") ||
                        router.asPath.includes("/ppc-agency-melbourne") ||
                        router.asPath.includes("/google-ads-agency") ||
                        router.asPath.includes("/social-media-agency-melbourne")
                      }
                      desc={
                        <>
                          <Link href="/digital-marketing-agency-australia" className={router.asPath.includes("/digital-marketing-agency-australia") && classes.active}>
                            Digital Marketing
                          </Link>
                          <Accordion
                            title={<h3>SEO</h3>}
                            backgroundD={"#fff"}
                            active={
                              router.asPath.includes("/seo-agency-melbourne") ||
                              router.asPath.includes("/local-seo-melbourne") ||
                              router.asPath.includes("/ecommerce-seo-agency") ||
                              router.asPath.includes("/international-seo-agency")
                            }
                            desc={
                              <ul>
                                <li>
                                  <Link href="/seo-agency-melbourne" className={router.asPath.includes("/seo-agency-melbourne") && classes.active}>
                                    SEO
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/local-seo-melbourne" className={router.asPath.includes("/local-seo-melbourne") && classes.active}>
                                    Local SEO
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/ecommerce-seo-agency" className={router.asPath.includes("/ecommerce-seo-agency") && classes.active}>
                                    Ecommerce SEO
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/international-seo-agency" className={router.asPath.includes("/international-seo-agency") && classes.active}>
                                    National/Global SEO
                                  </Link>
                                </li>
                              </ul>
                            }
                          />
                          <Accordion
                            title={<h3>PPC</h3>}
                            backgroundD={"#fff"}
                            active={router.asPath.includes("/ppc-agency-melbourne") || router.asPath.includes("/google-ads-agency") || router.asPath.includes("/social-media-agency-melbourne")}
                            desc={
                              <ul>
                                <li>
                                  <Link href="/ppc-agency-melbourne" className={router.asPath.includes("/ppc-agency-melbourne") && classes.active}>
                                    PPC
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/social-media-agency-melbourne" className={router.asPath.includes("/social-media-agency-melbourne") && classes.active}>
                                    Facebook Ads
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/google-ads-agency" className={router.asPath.includes("/google-ads-agency") && classes.active}>
                                    Google Ads
                                  </Link>
                                </li>
                              </ul>
                            }
                          />
                          <Link href="/email-marketing-agency" className={router.asPath.includes("/email-marketing-agency") && classes.active}>
                            Email Marketing
                          </Link>
                        </>
                      }
                    />
                    <Accordion
                      title={<h3>Web Design</h3>}
                      backgroundD={"#ebebeb"}
                      active={
                        router.asPath.includes("/web-design-melbourne") ||
                        router.asPath.includes("/wordpress-web-design") ||
                        router.asPath.includes("/ecommerce-website-design") ||
                        router.asPath.includes("/business-website-design") ||
                        router.asPath.includes("/educational-website-design") ||
                        router.asPath.includes("/medical-website-design")
                      }
                      desc={
                        <ul>
                          <li>
                            <Link href="/web-design-melbourne" className={router.asPath.includes("/web-design-melbourne") && classes.active}>
                              Website Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/wordpress-web-design" className={router.asPath.includes("/wordpress-web-design") && classes.active}>
                              Wordpress
                            </Link>
                          </li>
                          <li>
                            <Link href="/ecommerce-website-design" className={router.asPath.includes("/ecommerce-website-design") && classes.active}>
                              Ecommerce
                            </Link>
                          </li>
                          <li>
                            <Link href="/business-website-design" className={router.asPath.includes("/business-website-design") && classes.active}>
                              Business & Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/educational-website-design" className={router.asPath.includes("/educational-website-design") && classes.active}>
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link href="/medical-website-design" className={router.asPath.includes("/medical-website-design") && classes.active}>
                              Health Care
                            </Link>
                          </li>
                        </ul>
                      }
                    />
                    <Accordion
                      title={<h3>White Label</h3>}
                      backgroundD={"#ebebeb"}
                      active={
                        router.asPath.includes("/white-label-agency") ||
                        router.asPath.includes("/white-label-seo-reseller") ||
                        router.asPath.includes("/white-label-web-design") ||
                        router.asPath.includes("/white-label-ppc-agency") ||
                        router.asPath.includes("/white-label-content-writing-services")
                      }
                      desc={
                        <ul>
                          <li>
                            <Link href="/white-label-agency" className={router.asPath.includes("/white-label-agency") && classes.active}>
                              White Label
                            </Link>
                          </li>
                          <li>
                            <Link href="/white-label-seo-reseller" className={router.asPath.includes("/white-label-seo-reseller") && classes.active}>
                              SEO
                            </Link>
                          </li>
                          <li>
                            <Link href="/white-label-web-design" className={router.asPath.includes("/white-label-web-design") && classes.active}>
                              Web Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/white-label-ppc-agency" className={router.asPath.includes("/white-label-ppc-agency") && classes.active}>
                              PPC
                            </Link>
                          </li>
                          <li>
                            <Link href="/white-label-content-writing-services" className={router.asPath.includes("/white-label-content-writing-services") && classes.active}>
                              Content Writing
                            </Link>
                          </li>
                        </ul>
                      }
                    />
                    <Accordion
                      title={<h3>Design</h3>}
                      backgroundD={"#ebebeb"}
                      active={router.asPath.includes("/graphic-design-melbourne") || router.asPath.includes("/logo-design-services") || router.asPath.includes("/copywriting-melbourne")}
                      desc={
                        <ul>
                          <li>
                            <Link href="/graphic-design-melbourne" className={router.asPath.includes("/graphic-design-melbourne") && classes.active}>
                              Graphic Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/logo-design-services" className={router.asPath.includes("/logo-design-servicese") && classes.active}>
                              Logo Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/copywriting-melbourne" className={router.asPath.includes("/copywriting-melbourne") && classes.active}>
                              Content Writing
                            </Link>
                          </li>
                        </ul>
                      }
                    />
                  </>
                }
              />
              <Accordion
                title={<h3>Resources</h3>}
                background={"#002eff"}
                backgroundD={"#EBF5FF"}
                color={"#fff"}
                active={router.asPath.includes("/blog") || router.asPath.includes("/case-studies")}
                desc={
                  <ul>
                    <li className={classes.resourcesli}>
                      <Link href={"/blog"} className={`${router.asPath.includes("/blog") && classes.active} ${classes.resourcesLink}`}>
                        Blog
                      </Link>
                    </li>
                    <li className={classes.resourcesli}>
                      <Link href={"/case-studies"} className={`${router.asPath.includes("/case-studies") && classes.active} ${classes.resourcesLink}`}>
                        Case Studies
                      </Link>
                    </li>
                    <li className={classes.resourcesli}>
                      <Link href={"/privacy-policy"} className={`${router.asPath.includes("/privacy-policy") && classes.active} ${classes.resourcesLink}`}>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                }
              />
              <ul className={classes.mobileMenuList}>
                <li>
                  <Link href="/pricing" className={router.asPath.includes("/pricing") && classes.active}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={router.asPath.includes("/contact") && classes.active}>
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
        {serviceActive && (
          <motion.div initial={{ scale: 0, y: -150 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: -150 }} transition={{ duration: 0.3 }} className={classes.subContainer}>
            <ServicesSub setServiceActive={setServiceActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
