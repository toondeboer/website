import React from "react";
import "./SplashScreen.css";

interface Props {
  show: boolean;
}

export const SplashScreen = ({ show }: Props) => {
  if (!show) return null;

  return (
    <div className="splash-screen">
      <div className="content">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="subtitle">Crafted with passion by Toon</p>
      </div>
    </div>
  );
};
