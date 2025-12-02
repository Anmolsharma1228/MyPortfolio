import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";
import Hotel from "../assets/images/Hotel.png";
import Appointment from "../assets/images/Appointment.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
export const Home = () => {
  return (
    <main className="px-6 md:px-20 py-10">
      {" "}
      {/* HERO SECTION */}{" "}
      <motion.section
        id="Home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center space-y-6 pt-24"
      >
        {" "}
        {/* Profile Image */}{" "}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-[130px] h-[130px] rounded-full overflow-hidden shadow-lg border-4 border-white"
        >
          {" "}
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />{" "}
        </motion.div>{" "}
        {/* Intro Text */}{" "}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-700 text-lg leading-7 max-w-2xl"
        >
          {" "}
          A skilled and versatile full-stack developer with expertise in
          building robust and scalable web applications. With a strong
          foundation in both front-end and back-end technologies, I specialize
          in creating seamless user experiences and efficient server-side
          solutions. I thrive on tackling challenging projects and collaborating
          with teams to deliver innovative solutions.{" "}
        </motion.p>{" "}
        {/* Hero Buttons */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-4"
        >
          {" "}
          <a
            href="https://wa.me/919667384928?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg bg-slate-800 text-white rounded-full px-6 py-3 hover:bg-slate-900 transition font-semibold"
          >
            Contact me here
          </a>
          <button className="cursor-pointer text-lg bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow hover:shadow-lg transition font-semibold">
            {" "}
            Download CV <BsDownload />{" "}
          </button>{" "}
          <Link
            to="https://www.linkedin.com/in/anmol-sharma120"
            className="bg-white p-4 rounded-full text-2xl shadow hover:shadow-lg transition"
          >
            {" "}
            <FaLinkedin />{" "}
          </Link>{" "}
          <Link
            to="https://github.com/Anmolsharma1228"
            className="bg-white p-4 rounded-full text-2xl shadow hover:shadow-lg transition"
          >
            {" "}
            <FaGithubSquare />{" "}
          </Link>{" "}
        </motion.div>{" "}
      </motion.section>{" "}
      {/* ABOUT SECTION */}{" "}
      <motion.section
        id="About"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-40"
      >
        {" "}
        <h2 className="text-center mt-[30px] text-3xl font-semibold text-[#444444]">
          {" "}
          About Me{" "}
        </h2>{" "}
        <p className="text-lg leading-7 max-w-2xl mx-auto mt-4">
          {" "}
          Hi, my name is Anmol Sharma, and I am a passionate Full Stack
          Developer focused on crafting clean, responsive, and user-friendly web
          interfaces. I enjoy turning ideas into interactive digital experiences
          using modern web technologies. I have completed my Bachelor of Arts
          from IGNOU, as well as the Full Stack Development program from
          Almabetter, where I built strong skills in HTML, CSS, JavaScript,
          Tailwind CSS, React.js, Next.js, Git/GitHub,Node.js, Express.js,
          MongoDB, and other essential web development tools. I love working on
          real-world projects, improving UI/UX, and continuously learning new
          technologies to stay updated with the latest trends in front-end
          development. My goal is to grow as a skilled front-end engineer and
          create meaningful, high-quality digital experiences.{" "}
        </p>{" "}
      </motion.section>{" "}
      {/* PROJECTS SECTION */}{" "}
      <motion.section
        id="Projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-36 px-6"
      >
        {" "}
        <h2 className="text-center text-3xl font-semibold text-[#444444] mb-10">
          {" "}
          My Projects{" "}
        </h2>{" "}
        {/* PROJECT 1 */}{" "}
        <Link to="https://travellwebapp.netlify.app/">
          {" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-indigo-100 py-4 px-4 rounded-2xl max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8"
          >
            {" "}
            <div className="md:w-1/2 text-center md:text-left">
              {" "}
              <h2 className="font-semibold text-xl mb-3">Travel Web</h2>{" "}
              <p className="text-sm text-gray-700 leading-6 mb-4">
                {" "}
                Developing a SPA <strong>“Travel Web App”</strong> — a modern
                platform where users can easily search destinations, explore
                travel options, and book hotels.{" "}
              </p>{" "}
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                {" "}
                <span className="text-white bg-[#444444] rounded-full px-3 py-1 text-xs">
                  React.js
                </span>{" "}
                <span className="text-white bg-[#444444] rounded-full px-3 py-1 text-xs">
                  Tailwind CSS
                </span>{" "}
                <span className="text-white bg-[#444444] rounded-full px-3 py-1 text-xs">
                  Redux
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="md:w-1/2 flex justify-center">
              {" "}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={Hotel}
                alt="Hotel UI"
                className="w-full max-w-sm rounded-lg shadow-md"
              />{" "}
            </div>{" "}
          </motion.div>{" "}
        </Link>{" "}
        {/* PROJECT 2 */}{" "}
        <Link to="https://doctoronlineappointment.netlify.app/">
          {" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-indigo-100 py-4 px-4 rounded-2xl max-w-2xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-8"
          >
            {" "}
            <div className="md:w-1/2 text-center md:text-left">
              {" "}
              <h2 className="font-semibold text-xl mb-3">
                Online Doctor Appointment
              </h2>{" "}
              <p className="text-sm text-gray-700 leading-6 mb-4">
                {" "}
                Developing a Full stack Application{" "}
                <strong>“Online Doctor Appointment”</strong> — a modern platform
                where user can easily book appointment and upload medicals
                report.{" "}
              </p>{" "}
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                {" "}
                <span className="px-3 py-1 text-xs text-white bg-[#444444] rounded-full">
                  React.js
                </span>{" "}
                <span className="px-3 py-1 text-xs text-white bg-[#444444] rounded-full">
                  Tailwind CSS
                </span>{" "}
                <span className="px-3 py-1 text-xs text-white bg-[#444444] rounded-full">
                  Redux
                </span>{" "}
                <span className="px-3 py-1 text-xs text-white bg-[#444444] rounded-full">
                  Express.js
                </span>{" "}
                <span className="px-3 py-1 text-xs text-white bg-[#444444] rounded-full">
                  MongoDB
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="md:w-1/2 flex justify-center">
              {" "}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={Appointment}
                alt="Doctor UI"
                className="w-full max-w-sm rounded-lg shadow-md"
              />{" "}
            </div>{" "}
          </motion.div>{" "}
        </Link>{" "}
      </motion.section>{" "}
      {/* SKILLS SECTION */}{" "}
      <motion.section
        id="Skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-40 px-6 w-[800px] mx-auto select-none"
      >
        {" "}
        <h2 className="text-center text-3xl font-semibold text-[#444444] mb-10">
          {" "}
          My Skills{" "}
        </h2>{" "}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-wrap justify-center gap-4 text-[#444444]"
        >
          {" "}
          {[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Git / GitHub",
            "Sql",
            "Node.js",
            "Express.js",
            "MongoDB",
          ].map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0 },
              }}
              className="border border-gray-400 rounded-lg bg-white px-4 py-2 text-lg shadow-sm hover:shadow-md transition"
            >
              {" "}
              {skill}{" "}
            </motion.span>
          ))}{" "}
        </motion.div>{" "}
      </motion.section>{" "}
      {/* CONTACT SECTION */}{" "}
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
        <form className="max-w-xl mx-auto flex flex-col gap-5">
          {" "}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-500"
          />{" "}
          <textarea
            rows={6}
            placeholder="Your Message..."
            className="w-full bg-white border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-500"
          ></textarea>{" "}
          <button
            type="submit"
            className="w-full bg-[#444444] text-white py-3 rounded-lg text-lg font-medium hover:bg-black transition"
          >
            {" "}
            Send Message{" "}
          </button>{" "}
        </form>{" "}
      </motion.section>{" "}
    </main>
  );
};
