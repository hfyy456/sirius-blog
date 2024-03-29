import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header(): JSX.Element {
  //const imageUrl: string = 'https://qiniu.hfsblog.com/36966143821_36e65cfcb3_k.jpg'
  //const imageStr: string = `url(${imageUrl})`
  const scrollToElement = (e: any) => {
    const elem = document.getElementById("post");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header-container">
      <Navbar />
      <div className="blog-infor">
        <h1 className="name">SIRIUS BLOG</h1>
        <div className="desc">连雨不知春去，一晴方觉夏深</div>
      </div>
      <div className="scroll-down">
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={scrollToElement}
          className="bottom"
        />
      </div>
    </header>
  );
}
