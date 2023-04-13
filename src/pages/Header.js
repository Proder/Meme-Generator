import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img 
        src={process.env.PUBLIC_URL + "/troll.png"}
        className="header-image"
        />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-cotitle">Made with ♥ by&nbsp;
        <a href="https://github.com/Proder" className="header-link">Proder</a>
        </h4>
      </header>
    </div>
  );
}
