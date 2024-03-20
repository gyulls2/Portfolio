import React from "react";
import "./Intro.scss";
import TimeLine from "./TimeLine";
import profile from "../../asset/img-profile.jpg";

const Intro = () => {
  return (
    <section className="introSection" id="intro">
      <div className="wrapper">
        <div className="introWrap">
          <div className="introLeft">
            <h2>ABOUT ME</h2>
            <img src={profile} alt="프로필 이미지" className="photo" />
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
                  <td>서울시 동대문구 신설동</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="introRight">
            <TimeLine />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
