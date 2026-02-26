import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
export default function ContactForm() {

 const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ft76kgv",
        "template_3dczooj",
        form.current,
        "gymt7C783Qi6qTW3m"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setMessage("Something went wrong ❌");
        }
      );
  }; 
  
  return (
      <motion.section
        id="Contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-40 px-6"
      >
        {" "}
        <h2 className="text-center text-3xl font-semibold text-[#444444] mb-10">
          {" "}
          Contact Me{" "}
        </h2>{" "}
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-5">
          {" "}
          <input
            type="email"
            name='user_email'
            placeholder="Your Email"
            required
            className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-500"
          />{" "}
          <textarea
            rows={6}
            name='user_message'
            required
            placeholder="Your Message..."
            className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-500"
          ></textarea>{" "}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#444444] text-white py-3 rounded-lg text-lg font-medium hover:bg-black transition"
          >
           {loading ? "Sending..." : "Send Message"}
          </button>
          {message && (
            <p className='text-center mt-2 text-sm'>{message}</p>
          )}
        </form>{" "}
      </motion.section>
  )
}
