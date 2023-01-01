import React from "react";
import "./Intro.scss";
import TimeLine from "./TimeLine";

const Intro = () => {
  return (
    <section className="introSection">
      <h1>About Me</h1>
      <div className="introWrap">
        <div className="introLeft">
          <img src="/images/IMG_2227.jpg" alt="파일없음" className="photo" />
          <table>
            <tbody>
              <tr>
                <td className="td">Birthday</td>
                <td>1997.01.14</td>
              </tr>
              <tr>
                <td className="td">Email</td>
                <td>kuri6233@gmail.com</td>
              </tr>
              <tr>
                <td className="td">Mobile</td>
                <td>010-3244-7972</td>
              </tr>
              <tr>
                <td className="td">Address</td>
                <td>서울시 중랑구</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="introRight">
          <TimeLine />
        </div>
      </div>
    </section>
  );
};

export default Intro;