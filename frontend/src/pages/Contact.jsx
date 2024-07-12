import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const Contact = ({ selected }) => {
  const controls = useAnimation();
  const audio = new Audio("/Audio/Email_sent.mp3");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector("#contact-section"));

    return () => observer.disconnect();
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Accessing environment variables directly
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_EMAILJS_USER_ID;

    // Check if environment variables are defined
    if (!service_id || !template_id || !user_id) {
      console.error("EmailJS environment variables not defined.");
      return;
    }

    // EmailJS integration using emailjs-com library
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        audio.play();
        toast.success("Email sent!");
      })
      .catch((error) => {
        toast.error("Failed to send email.");
        console.error("EmailJS Error:", error);
      });

    e.target.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="contact-section"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-black flex h-screen w-screen text-white items-center justify-center"
    >
      <motion.div
        className=" mx-auto p-8 bg-gray-800 rounded-lg shadow-lg w-[85%] sm:max-w-fit sm:p-10"
        variants={itemVariants}
      >
        <motion.h1
          className="text-3xl font-semibold mb-8 text-center font-Orbitron"
          variants={itemVariants}
        >
          Contact Me
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col sm:flex-row sm:space-x-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex-1 flex flex-col space-y-1"
              variants={itemVariants}
            >
              <label htmlFor="name" className="text-lg">
                Name:
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                className="px-3 py-2 bg-gray-700 rounded"
                placeholder="Your Name"
                required
                variants={itemVariants}
              />
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col space-y-1"
              variants={itemVariants}
            >
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 bg-gray-700 rounded"
                placeholder="Your Email"
                required
                variants={itemVariants}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-1"
            variants={itemVariants}
          >
            <label htmlFor="message" className="text-lg">
              Message:
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              className="px-3 py-2 bg-gray-700 rounded"
              placeholder="Your Message"
              required
              variants={itemVariants}
            ></motion.textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 w-full sm:w-auto font-Oxanium font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
