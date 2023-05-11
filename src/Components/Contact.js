import React, { useRef } from "react";
import "./Components.css";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handelSubmit = (e) => {
    emailjs
      .sendForm(
        "service_sbb0j7q",
        "template_xk7wr3w",
        form.current,
        "1xGVBJ6sQ6xmGe-hv"
      )
      .then(form.current.reset())
      .then(
        (result) => {
          setSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="Contact">
      <div className="right-contact-div">
        <form
          ref={form}
          className="Contact-form"
          onSubmit={handleSubmit(handelSubmit)}
        >
          <div className="input-fields">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              {...register("Name", { required: true })}
              onBlur={() => trigger("Name")}
            />
            {errors.Name && <p>*required</p>}
          </div>
          <div className="input-fields">
            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              onBlur={() => trigger("email")}
            />
            {errors.email && <p>* Invalid email</p>}
          </div>
          <textarea
            placeholder="Message"
            name="message"
            {...register("message", {
              required: true,
            })}
            onBlur={() => {
              trigger("message");
              setSent(false);
            }}
          ></textarea>
          {sent && (
            <p className="sent-message">** Thanks message received **</p>
          )}
          {errors.Message && <p>Please write a message </p>}
          {!errors.Name && !errors.email && !errors.Message && (
            <button type="submit">Send</button>
          )}
        </form>
      </div>
      <div className="left-contact-div">
        <Map />
      </div>
    </section>
  );
};

export default Contact;
