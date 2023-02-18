import React from "react";
import classes from "../../styles/Contact.module.css";
import Section from "../UI/Section";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e)
  };

  return (
    <Section padding={"70px 0"} title={"Contact"}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.inputGroup}>
          <div className={classes.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
        </div>
        <div className={classes.inputGroup}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" />
          </div>
        </div>
        <div className={classes.inputGroup}>
          <div className={classes.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea name="" className="form-control" id="message" cols="20" rows="10"></textarea>
          </div>
        </div>
        <div className={classes.inputButton}>
          <input type="submit" value="Submit" className="my-button" />
        </div>
      </form>
    </Section>
  );
};

export default Contact;
