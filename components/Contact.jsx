"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import Alert from "./Alert.jsx";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r8kg2zl",
        "template_rdmaqje",
        {
          from_name: form.name,
          to_name: "Ayesha Areej",
          from_email: form.email,
          to_email: "ayeshaaay67@gmail.com",
          message: form.message,
        },
        "TCS9_57yXjVi5Gwkq"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    // <section className="c-space my-20 mb-20 bg-[#DA8359] object-cover" id="contact">

    <section className="bg-[#DA8359] py-20 object-cover" id="contact">
      {alert.show && <Alert {...alert} />}
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-2 mt-6 text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            Contact Us
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col min-h-screen mb-6 sm:mb-0 object-cover space-y-4"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="you@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Ask me anything..."
              />
            </label>

            <button
              className="field-btn fill-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              {/* <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" /> */}
            </button>
          </form>
        </div>
        <section className="mb-2 mt-0">
          <div className="order-1 mt-0 text-center text-balance !leading-tight font-bold text-3xl md:text-4xl text-gray-900">
            Our Social Presence
            <div className="flex justify-center mt-4 mb-4">
              <a
                href="https://www.facebook.com/people/Cinnamons-Soapy-Venture/61560579726391/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cinnamonssoaps/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <svg 
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
</svg>
              </a>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </section>
  );
};
export default Contact;
