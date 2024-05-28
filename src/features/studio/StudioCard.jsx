import WebPiece from "../../assets/webpiece.svg";
import Projects from "../../assets/needhelp.svg";
import About from "../../assets/about.svg";
import Clients from "../../assets/client.svg";
import Svg from "../../ui/Svg";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

const StudioCard = () => {
  const cards = [
    {
      title: "Blog",
      text: "Browse my blog or submit your own article you like upload.",
      img: WebPiece,
      name: "extension",
      color: "#FFB300",
      link: "blog",
    },
    {
      title: "Projects",
      text: "View some of my work. Interested in building together? ",
      img: Projects,
      name: "work",
      color: "#2196F3",
      link: "projects",
    },
    {
      title: "About Me",
      text: "View info about me. Stack, skills, experience, my resume etc.",
      img: About,
      name: "person",
      color: "#9C27B0",
      link: "about",
    },
    {
      title: "Clients",
      text: "Current/previous clients, click here to book a session with me ",
      img: Clients,
      name: "tools",
      color: "#4CAF50",
      link: "",
    },
  ];

  return (
    <div data-aos="fade-up" className="mt-10 flex flex-wrap gap-14 ">
      {cards.map((card, id) => {
        return (
          <div
            key={id}
            className={`studiocard flex flex-[45%] items-center gap-8 bg-opacity-15 bg-[${card.color}] backdrop-blur-[2px] transition-all duration-300 hover:backdrop-blur-sm`}
          >
            <img
              className="hidden h-[80px] w-[80px] lg:inline "
              src={card.img}
              alt={card.title}
            />
            <div>
              <h2 className="mb-1 text-2xl font-normal text-light-black dark:text-[#fff]">
                {card.title}
              </h2>
              <p className="text-sm font-normal text-[rgba(0,0,0,.6)] dark:text-[rgba(255,255,255,.7)]">
                {card.text}
              </p>
            </div>
            <Link
              to={`/${card.link}`}
              className={`smallbox cursor-pointer rounded-3xl bg-opacity-20 px-7 py-2 shadow-smallbutton hover:shadow-hoversmallbutton bg-[${card.color}]`}
            >
              <Svg name={card.name} color={card.color} size="35" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StudioCard;
