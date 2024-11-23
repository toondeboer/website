import React, {useEffect, useState} from "react";
import "./HomeScreen.css";
import {SplashScreen} from "../splash/SplashScreen"; // Assuming you have custom CSS for styling

export const HomeScreen = () => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplashScreen(false);
        }, 4000); // splash screen shows for 4 seconds
        return () => clearTimeout(timer);
    }, []);

    if (showSplashScreen) {
        return <SplashScreen show={showSplashScreen}/>
    }


    return (
        <div className="home-screen">
            <header className="header">
                <h1 className="greeting">Hello, I'm Toon de Boer</h1>
                <p className="role">Software Engineer | Full Stack Developer</p>
            </header>

            <div className="intro">
                <p>
                    I am passionate about building intuitive and scalable web applications.
                    With a strong foundation in both frontend and backend technologies, I
                    enjoy solving complex problems and continuously improving my skills.
                </p>
            </div>

            <div className="buttons">
                <a href="#projects" className="button projects">
                    View My Projects
                </a>
                <a href="#contact" className="button contact">
                    Contact Me
                </a>
            </div>

            <footer className="footer">
                <p>Connect with me:</p>
                <div className="social-links">
                    <a href="https://github.com/toondeboer" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/toon-de-boer" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
};

