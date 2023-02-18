import React from "react";
import Section from "../components/UI/Section";
import classes from "../styles/CaseStudies.module.css";
import Button from "../components/UI/Button";
import { caseStudies } from "../data/caseStudiesData";
import Head from "next/head";

const CaseStudies = ({ setHeaderBg }) => {
  setHeaderBg(true);
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://skywarddigital.com.au/case-studies" />
        <title>Skyward Digital | Case Studies</title>
        <meta name="title" content="Skyward Digital | Case Studies" />
        <meta
          name="description"
          content=" A collection of digital marketing case studies which demonstrate how Skyward Digital has helped businesses thrive even in the most challenging and competitive locations and industries."
        />
      </Head>
      <Section
        title={
          <>
            Case <span className={"titleBackground"}>Studies</span>
          </>
        }
        padding={"150px 0 70px"}
        background={""}
      >
        {caseStudies.map((item) => (
          <div className={classes.caseStudyContainer}>
            <div className={classes.caseStudyImage}>
              <img src={item.image} alt="" />
            </div>
            <div className={classes.caseStudyContent}>
              <h2>{item.business}</h2>
              <p>{JSON.stringify(item.problem.replace(/(.{300})..+/, "$1…"))}</p>
              <Button href={`/case-study/${item.slug}`}>View Case Study</Button>
            </div>
          </div>
        ))}
      </Section>
    </React.Fragment>
  );
};

export default CaseStudies;
