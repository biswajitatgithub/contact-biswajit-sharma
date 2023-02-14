import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqzjerz");
  const form = (
    <React.Fragment>
      <div className="title">
        <p className="content">Any query, leave a message</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <span>Your email address</span>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="input">
          <span>Description</span>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
  const successData = (
    <div className="response">
      <div className="title">Query Sent!</div>
      <div className="description">Thank you for reaching out, you will be responded within 12hours</div>
    </div>
  );
  let mainData = state.succeeded ? successData : form;

  return (
    <div className="form-container">
      <div className="form">{mainData}</div>
    </div>
  );
};

export default ContactForm;
