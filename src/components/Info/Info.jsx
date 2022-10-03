import React from "react";
import styles from "./Info.module.css";
import Card from "../Card/Card";
// import { Button } from 'react-bootstrap';
import user from "../../User.svg";
import logo from "../../logo.svg";
import { Button } from "shards-react";
import { AiFillEdit, AiOutlineShareAlt } from "react-icons/ai";
import { BiMapPin, BiMailSend, BiPhone, BiPlus } from "react-icons/bi";

const tags = [
  "Javascript",
  "Java",
  "Full Stack Web Development",
  "UI/UX",
  "Figma",
  "Express",
  "MongoDB",
  "GitHub",
  "Redux",
];
const Info = () => {
  return (
    <Card>
      <div className={styles.outer}>
        <div className={styles.namerow}>
          <div className={styles.name}>
            <div className={styles.imageback}>
              <img src={user} className={styles.image}></img>
            </div>
            <div className={styles.side}>
              <div style={{ fontSize: "22px", fontWeight: "700" }}>
                Sidharth Kumar Saini
              </div>
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                 IIIT Vadodara | Intern@ GE Digital
              </div>
              <div className={styles.active}>
                Open to Work
              </div>
            </div>
          </div>

          <div className={styles.namebutton}>
            <Button outline squared size="sm" style={{ marginRight: "10px" }}>
              <AiFillEdit style={{ fontSize: "16px" }} />{" "}
              <span style={{ fontSize: "14px" }}> Edit </span>
            </Button>
            <Button outline squared size="sm">
              <AiOutlineShareAlt style={{ fontSize: "17px" }} />{" "}
              <span style={{ fontSize: "14px" }}> Share </span>
            </Button>
          </div>
        </div>
        <div className={styles.subsection}>
          <div className={styles.subinfo}>
            <ul className={styles.ulsubinfo}>
              <li className={styles.liulsubinfo}>
                <BiMapPin style={{ fontSize: "22px" }} />
                <span>Gurugram, India</span>
              </li>
              <li className={styles.liulsubinfo}>
                <BiMailSend style={{ fontSize: "22px" }} />
                <span>sidharthkSaini@gmail.com</span>
              </li>
              <li className={styles.liulsubinfo}>
                <BiPhone style={{ fontSize: "22px" }} />
                <span>789*****80</span>
              </li>
            </ul>
          </div>
          <div className={styles.tags}>
            <div style={{ marginLeft: "5px", fontSize: "17px", fontWeight: '600' }}>Skills</div>
            <ul className={styles.tagsul}>
              {tags.map((e) => (
                <li className={styles.tagsli}>{e}</li>
              ))}
              <li>
                <BiPlus
                  style={{
                    fontSize: "17px",
                    fontWeight: "800",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                  title="Add more skills"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Info;

// font-family: 'Monoton', cursive;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;
