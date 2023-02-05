/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeixin, faGithub, faQq } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  useEffect(() => {});
  return (
    <footer className="footer-container">
      <div className="links">
        <a target="_blank" rel="noreferrer" href="https://github.com/hfyy456">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://qiniu.hfsblog.com/mmqrcode1606545113726.png"
        >
          <FontAwesomeIcon icon={faWeixin} />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:13588742046@163.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://wpa.qq.com/msgrd?v=3&uin=540363975&site=qq&menu=yes"
        >
          <FontAwesomeIcon icon={faQq} />
        </a>
      </div>
      <div className="copyright">
        Copyright © 2020 By SIRIUS | Theme by&nbsp;
        <a target="_blank" rel="noreferrer" href="https://butterfly.js.org/">
          Jerry
        </a>{" "}
        and&nbsp;
        <a target="_blank" rel="noreferrer" href="https://fech.in/">
          Fechin
        </a>
        .
      </div>
      <div className="icp">浙ICP备20003398号</div>
    </footer>
  );
}
