import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import { SplashScreen } from "../splash/SplashScreen";
import Link from "next/link";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export const HomeScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000); // splash screen shows for 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplashScreen) {
    return <SplashScreen show={showSplashScreen} />;
  }

  return (
    <div className="home-screen">
      <header className="header">
        <h1 className="greeting">Hello, I'm Toon de Boer</h1>
        <p className="role">Software Engineer | Full Stack Developer</p>
      </header>

      <div className="intro">
        <p>
          I am passionate about building intuitive and scalable web
          applications. With a strong foundation in both frontend and backend
          technologies, I enjoy solving complex problems and continuously
          improving my skills.
        </p>
      </div>

      <div className="subHeader">Applications</div>

      <div className="buttons">
        <Link href={"/portfolio-tracker-app"} className="button project">
          <AutoGraphIcon sx={{ fontSize: 100 }} />
          Portfolio Tracker
        </Link>
      </div>

      <footer className="footer">
        <p>Connect with me:</p>
        <div className="social-links">
          <a
            href="https://github.com/toondeboer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/toon-de-boer"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};
