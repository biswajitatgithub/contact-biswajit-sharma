import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqzjerz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form-container">
      <div className="form">
        <div className="title">
          <p className="content">Any query, leave a message</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <span>You email address</span>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
      </div>
    </div>
  );
};

export default ContactForm;
