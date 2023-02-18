import React from "react";
import classes from "../../styles/Blogs.module.css";

const ashley = ({ setHeaderBg }) => {
  setHeaderBg(true);
  return (
    <section className={classes.blogSection}>
      <div className="container-lg">
        <div className={classes.author}>
          <div className={classes.authorImage}>
            <img src="/Ash-v.png" alt="" />
          </div>
          <div className={classes.authorBio}>
            <h3>Ashley Voinescu</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam, maiores accusamus earum magnam, assumenda molestias voluptatibus soluta voluptatum, quibusdam vel! Quaerat
              nesciunt aliquid fuga voluptatibus eum dolor. Laudantium, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam, maiores accusamus earum magnam, assumenda
              molestias voluptatibus soluta voluptatum, quibusdam vel! Quaerat nesciunt aliquid fuga voluptatibus eum dolor. Laudantium, provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ashley;
