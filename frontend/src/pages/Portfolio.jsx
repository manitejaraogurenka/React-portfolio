import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/ChatLub.jpeg",
    url: "https://github.com/manitejaraogurenka/ChatLub",
    about:
      "ChatLub is a modern MERN stack chat web app with Socket.io for real-time communication. It features MongoDB, Express.js, React, Redux, Tailwind CSS, and Node.js for seamless, responsive chats. Key functionalities include instant messaging, user authentication, and chat room creation/joining, all powered by Socket.io for real-time updates.",
    name: "ChatLub",
  },
  {
    id: 2,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Login.jpeg",
    url: "https://github.com/manitejaraogurenka/Login-web-app",
    about:
      "A full-stack (MERN) login web application with features like profile updates and password recovery in addition to enhanced authentication and permission using a token system.",
    name: "Login web application",
  },
  {
    id: 3,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Crypto.jpeg",
    url: "cryptotrackingapp.vercel.app",
    about:
      "A web application for tracking real-time cryptocurrency prices and trends, built with React and Node.js.",
    name: "Crypto tracker",
  },
  {
    id: 4,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Coffee.jpeg",
    url: "https://manitejaraogurenka.github.io/coffee-haven/",
    about:
      "Coffee Haven is a sleek and modern website crafted with ReactJS and Tailwind CSS, offering a seamless user experience for coffee enthusiasts.",
    name: "Coffee Haven",
  },
  {
    id: 5,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Pocket%20notes-uReDLpsIrDfT471KGkPVgaY71fNspx.png",
    url: "pocketnotesapp.vercel.app",
    about:
      "Pocket Notes is a ReactJS-based app for efficient note management. It lets users create groups, add, edit, delete notes, and organize them effectively. With a powerful search feature for both groups and notes, finding information is quick and effortless.",
    name: "Pocket Notes",
  },
  {
    id: 6,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Taskmaster.jpeg",
    url: "https://manitejaraogurenka.github.io/task-master/",
    about:
      "Task Master is a to-do app built using TypeScript and React.js. This app includes a drag-and-drop feature along with all the necessary task management functionalities.",
    name: "Task Master",
  },
  {
    id: 7,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Recipies.jpeg",
    url: "https://manitejaraogurenka.github.io/The-Recipes/",
    about:
      "This is a recipes web app with 5000+ recipes, and it is built with optimized search and sort functionality. and this app is built without depending on Reactjs.",
    name: "The Recipes",
  },
  {
    id: 8,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/1k%20movies.jpeg",
    url: "https://manitejaraogurenka.github.io/Top-1000-Movies/",
    about:
      "This is a web app that gives information on the world's top 1000 IMDB-rated movies, and this app has many features like search and sort by movie info and these app is built without depending upon Reactjs.",
    name: "Top 1k movies",
  },
  {
    id: 9,
    img: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Notedown.jpeg",
    url: "https://manitejaraogurenka.github.io/NoteDown-vanillaJS/index.html",
    about:
      "A notes web app that has more features and was developed completely using vanilla JavaScript.",
    name: "Note Down",
  },
];

const Portfolio = ({ selected }) => {
  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <motion.div
      initial="hidden"
      animate={selected === "Portfolio" ? "hidden" : "visible"}
      variants={sliderVariants}
      className="bg-black h-screen flex items-center justify-center"
    >
      <div className=" relative w-full md:w-4/5 lg:w-3/4 xl:w-2/2">
        <span className=" absolute top-9 bottom-2 left-3 ">
          <div className=" flex gap-4 overflow-x-scroll w-screen items-center">
            <span className=" text-lg text-white font-Orbitron font-extrabold min-w-fit">
              My work
            </span>
            <div className=" flex gap-2 items-center">
              <FaCaretSquareLeft
                color="white"
                size={30}
                className=" hover:scale-105 active:scale-95"
              />
              <span className=" text-sm sm:text-lg text-white font-Orbitron font-bold bg-black border-2 border-white p-1 rounded-md cursor-pointer">
                Web development
              </span>
              <FaCaretSquareRight
                color="white"
                size={30}
                className=" hover:scale-105 active:scale-95"
              />
            </div>
          </div>
        </span>
        <Slider {...settings}>
          {projects.map((project) => (
            <motion.div
              className="mt-20 px-3"
              key={project.id}
              variants={projectVariants}
            >
              <div className="shadow-lg pt-4 px-6 rounded-xl flex flex-col justify-around bg-gray-800 h-[35rem]">
                <img
                  src={project.img}
                  loading="lazy"
                  alt={`Project ${project.id}`}
                  className=" border-2 border-white rounded-lg w-[100%] h-64 md:h-96 object-fill"
                />
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-300 mb-0.5 overflow-scroll">
                    {project.about}
                  </p>
                  <button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-500 border border-blue-500 rounded-full px-2 py-1 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      View Project
                    </a>
                  </button>
                </div>
                <div></div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Portfolio;
