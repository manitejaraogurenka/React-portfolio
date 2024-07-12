import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { TypeAnimation } from "react-type-animation";

const skillLabels = {
  0.5: "Novice",
  1.0: "Novice+",
  1.5: "Beginner",
  2.0: "Beginner+",
  2.5: "Intermediate",
  3.0: "Intermediate+",
  3.5: "Proficient",
  4.0: "Proficient+",
  4.5: "Advanced",
  5.0: "Advanced+",
};

const skillRatings = [
  {
    key: 1,
    skill: "CSS & it's Framworks",
    rating: 5,
    about:
      "CSS and its frameworks are crucial for styling web pages, ensuring a responsive design that adapts seamlessly across different devices and screen sizes.",
  },
  {
    key: 2,
    skill: "HTML",
    rating: 5,
    about:
      "HTML forms the foundational structure of web pages, defining their content, layout, and organization in a way that is universally understood by web browsers.",
  },
  {
    key: 3,
    skill: "JavaScript/TypeScript",
    rating: 4.5,
    about:
      "JavaScript and TypeScript empower developers to create dynamic and scalable web applications, leveraging their robust libraries and frameworks to handle complex functionalities with ease.",
  },
  {
    key: 4,
    skill: "Reactjs",
    rating: 5,
    about:
      "ReactJS revolutionizes user interface development with its component-based architecture and efficient rendering using virtual DOM, making it a preferred choice for building interactive and high-performance web applications.",
  },
  {
    key: 5,
    skill: "Redux",
    rating: 5,
    about:
      "Redux manages application state and enables predictable state management in complex applications, offering centralized data management and ensuring consistency across different parts of the application.",
  },
  {
    key: 6,
    skill: "Nextjs",
    rating: 4,
    about:
      "Next.js simplifies React application development with built-in features like server-side rendering, routing, and automatic code splitting, enhancing performance and SEO optimization.",
  },
  {
    key: 7,
    skill: "GraphQL/REST Api",
    rating: 4,
    about:
      "GraphQL and REST APIs play a vital role in modern web development, facilitating efficient data fetching and manipulation from servers, providing flexibility in data querying and seamless integration with various data sources.",
  },
  {
    key: 8,
    skill: "Nodejs",
    rating: 4.5,
    about:
      "Node.js enables developers to build scalable and high-performance server-side applications using JavaScript, leveraging its event-driven architecture and extensive ecosystem of libraries and packages.",
  },
  {
    key: 9,
    skill: "Expressjs",
    rating: 5,
    about:
      "Express.js is a minimalist web framework for Node.js, designed to build robust APIs and web applications quickly and efficiently, with features like middleware support and routing capabilities.",
  },
  {
    key: 10,
    skill: "MongoDB/Postgresql",
    rating: 4,
    about:
      "MongoDB is a powerful NoSQL database that provides flexibility and scalability for storing and managing data in modern applications, offering features like sharding, replication, and flexible schema design.",
  },
  {
    key: 11,
    skill: "Github/Version control",
    rating: 5,
    about:
      "GitHub and version control systems are essential tools for collaborative software development, enabling teams to manage and track changes in code, coordinate workflows, and ensure project integrity.",
  },
];

function getSkillLabelText(value) {
  return `${value} Star${value !== 1.0 ? "s" : ""}, ${skillLabels[value]}`;
}

export const RatingComponent = ({ rating, value }) => {
  const [animatedStar, setAnimatedStar] = useState(0);

  useEffect(() => {
    if (rating !== null) {
      setAnimatedStar(0);
      const interval = setInterval(() => {
        setAnimatedStar((prev) => {
          const nextValue = prev + 0.5;
          if (nextValue <= rating) {
            return nextValue;
          } else {
            clearInterval(interval);
            return rating;
          }
        });
      }, 75);

      return () => clearInterval(interval);
    }
  }, [rating]);

  return (
    <div className="w-[260px] h-fit relative">
      <div className="flex flex-col items-center bg-opacity-30 bg-[#28ffff] rounded-xl py-2 px-4">
        <span className="text-white font-Oxanium text-xl font-semibold bg-[#28ffff89] rounded-b-lg mt-[-0.5rem] w-full text-center px-1">
          {skillRatings[value - 1]["skill"]}
        </span>
        <Rating
          name="rating"
          value={animatedStar}
          precision={0.5}
          max={5.0}
          readOnly
          getLabelText={getSkillLabelText}
          emptyIcon={<StarIcon style={{ fontSize: 36, opacity: 0.55 }} />}
          icon={<StarIcon style={{ fontSize: 40 }} />}
        />
        {rating !== null && (
          <span className="text-lg text-white font-Oxanium">
            Level: {skillLabels[rating]}
          </span>
        )}
      </div>
    </div>
  );
};

export function AboutSkill({ value }) {
  return (
    <div className=" w-[260px] h-fit items-start relative">
      <div className="flex flex-col items-center bg-opacity-30 bg-[#28ffff] rounded-xl py-2 px-4">
        <span className=" text-white font-Oxanium text-xl font-semibold bg-[#28ffff89] rounded-b-lg mt-[-0.5rem] w-full text-center px-1">
          {skillRatings[value - 1]["skill"]}{" "}
        </span>
        <div className=" font-Oxanium text-center">
          <TypeAnimation
            key={value}
            splitter={(str) => str.split(/(?=\n| )/)}
            sequence={[skillRatings[value - 1].about, 3000]}
            speed={{ type: "keyStrokeDelayInMs", value: 10 }}
            omitDeletionAnimation={true}
            style={{
              fontSize: "1em",
              display: "block",
              minHeight: "200px",
              whiteSpace: "pre-wrap",
              color: "white",
            }}
            repeat={0}
          />
        </div>
      </div>
    </div>
  );
}
