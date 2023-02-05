import {
  faChevronLeft,
  faChevronRight,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaded } from "../store/reducers/configSlice";
import "./photo.scss";
export default function Photo() {
  const dispatch = useDispatch();
  const [showBar, setShowBar] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoaded());
    }, 500);
  }, []);
  const openBar = () => {
    setShowBar(!showBar);
  };
  return (
    <div className="photo-container">
      <img
        className="pt alc"
        src="https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"
      />
      {/* <div className="pic-info">
        <div className="p-title">dasdasds</div>
      </div> */}
      <div className={`bottom-bar ${showBar ? "upbar" : ""}`}>
        <div className="before-i" onClick={openBar}>
          <FontAwesomeIcon icon={faComputerMouse} />
        </div>
        <div className="bottom-list">
          {" "}
          <div className="left-arrow flc">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="bottom-item active-item">
            <img src="https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true" />
          </div>
          <div className="bottom-item">
            <img src="https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true" />
          </div>
          <div className="bottom-item">
            <img src="https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true" />
          </div>
          <div className="bottom-item">
            <img src="https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true" />
          </div>{" "}
          <div className="right-arrow flc">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
