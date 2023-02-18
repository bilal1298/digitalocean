import React from "react";
import classes from "../../styles/CaseStudies.module.css";
import Section from "../../components/UI/Section";
import { caseStudies } from "../../data/caseStudiesData";

export const getStaticPaths = () => {
  const paths = caseStudies.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const data = caseStudies.find((item) => item.slug === slug);
  return {
    props: { myCase: data },
  };
};

const SingleCase = ({ myCase, setHeaderBg }) => {
  setHeaderBg(true);
  return (
    <>
      <Section title={""} padding={"150px 0 70px"} background={"#8EA2FF"}>
        <div className={classes.caseStudySingleContainer}>
          <div className={classes.caseStudySingleImage}>
            <img src={myCase.image} alt="" />
          </div>
          <div className={classes.caseStudySingleContent}>
            <h2>{myCase.business}</h2>
            <h3 className={classes.problem}>Problem:</h3>
            <p>{myCase.problem}</p>
          </div>
        </div>
      </Section>
      <Section padding={"70px 0"} background={"#D6E8EB"}>
        <div className={classes.caseStudySingleSub}>
          <div className={classes.sub1}></div>
          <div className={classes.sub}>
            <h2>Solution</h2>
            <p>{myCase.solution}</p>
          </div>
          <div className={classes.sub2}></div>
          <div className={classes.sub}>
            <h2>Results</h2>
            <p>{myCase.results}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SingleCase;
