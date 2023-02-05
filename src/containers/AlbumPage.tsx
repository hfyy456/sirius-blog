import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaded } from "../store/reducers/configSlice";
import "./album.scss";
import Topbar from "../components/Topbar";
import { useHistory } from "react-router-dom";

export default function Album() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoaded());
    }, 500);
    console.log(121);
  }, []);
  const openPhoto = () => {
    history.push({ pathname: "/photo" });
  };
  return (
    <div>
      <Topbar />
      <div className="album-container">
        <div className="fir-con">
          <div className="left-con">
            <div className="top-card mt1">
              <div
                className="pc-in"
                onClick={openPhoto}
                style={{
                  backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
          </div>
          <div className="right-con">
            <div className="other-card mt1">
              {" "}
              <div
                className="pc-in"
                style={{
                  backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
            <div className="other-card mt1">
              {" "}
              <div
                className="pc-in"
                style={{
                  backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
            <div className="other-card mt1">
              {" "}
              <div
                className="pc-in"
                style={{
                  backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
            <div className="other-card mt1">
              {" "}
              <div
                className="pc-in"
                style={{
                  backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
          </div>
        </div>
        <div className="next-con">
          <div className="other-card mt2">
            {" "}
            <div
              className="pc-in"
              style={{
                backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
              }}
            ></div>
            <div className="pc-info">
              <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
              <div className="pc-date">October 14 2018</div>
            </div>
          </div>
          <div className="other-card mt2">
            {" "}
            <div
              className="pc-in"
              style={{
                backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
              }}
            ></div>
            <div className="pc-info">
              <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
              <div className="pc-date">October 14 2018</div>
            </div>
          </div>
          <div className="other-card mt2">
            {" "}
            <div
              className="pc-in"
              style={{
                backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
              }}
            ></div>
            <div className="pc-info">
              <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
              <div className="pc-date">October 14 2018</div>
            </div>
          </div>
          <div className="other-card mt2">
            <div
              className="pc-in"
              style={{
                backgroundImage: `url(${"https://github.com/miccall/MyTextures/blob/master/271043-106.jpg?raw=true"})`,
              }}
            ></div>
            <div className="pc-info">
              <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
              <div className="pc-date">October 14 2018</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
