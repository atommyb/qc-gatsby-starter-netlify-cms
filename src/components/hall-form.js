import React from 'react';
import { navigate } from "gatsby-link";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const HallForm = () => {
  var submitted = false;
  var state = {};

  const setFormSubmitted = (status) => submitted = status;

  const setState = newState => {
    state = {
      ...state,
      ...newState
    };
  };

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
    console.log({state, submitted})
  };

  const disableTheForm = (element) => {
    element.querySelectorAll('input').forEach((item) => {
      item.setAttribute('disabled', true);
      console.log(item)
    })
    element.querySelector('button[type="submit"]').setAttribute('disabled', true);
  }

  const showThanks = () => {
    document.getElementById('thanksMessage').style.display = 'block';
    document.getElementById('thanksMessage').style.visibility = 'visible';
  }

  const handleSubmit = e => {
    console.log({state, submitted})
    e.preventDefault();
    setFormSubmitted(true);
    console.log({state, submitted})

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(
        () => {
          disableTheForm(form);
          showThanks();
          // return navigate(form.getAttribute("action"))
        }
      )
      .catch(error => {
        console.error("Form error", {error});
        return alert("Ooops, there was a problem. Please try again.")
      });
  };

  return (
    <form
      name="contact"
      method="post"
      action="/hall"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      id="hallForm"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor={"name"}>
          Your name
        </label>
        <div className="control">
          <input
            className="input"
            type={"text"}
            name={"name"}
            onChange={handleChange}
            id={"name"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"email"}>
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type={"email"}
            name={"email"}
            onChange={handleChange}
            id={"email"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor={"message"}>
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={"message"}
            onChange={handleChange}
            id={"message"}
            required={true}
          />
        </div>
      </div>
      <div className="field">
        <button className="button is-link" type="submit">
          Send
        </button>
      </div>
      <div id="thanksMessage" style={{display: 'none', visibility: 'hidden'}}><h3>Thanks, we've sent your message.</h3></div>
    </form>
  )
}