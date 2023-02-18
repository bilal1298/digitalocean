import React from "react";
import classes from "../../styles/Blog.module.css";
import Section from "../UI/Section";
import Button from "../UI/Button";

const Blog = ({ blogs }) => {
  return (
    <Section padding={"70px 0"} background={"#D6E8EB"} title={<span className="titleBackground">Blog</span>}>
      <div className={`${classes.blogs}`}>
        {blogs.map((item) => (
          <div className={classes.blog} key={item.title}>
            <div className={classes.blogImage}>
              <img src={item.image} alt="" />
            </div>
            <div className={classes.blogTitle}>
              <h3>{item.title}</h3>
              <p className={classes.excerpt}>{item.excerpt.replace(/(.{300})..+/, "$1…")}</p>
            </div>
            <div className={classes.button}>
              <Button href={`/blog/${item.slug}`}>Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
