import React, { useState } from "react";

import styles from "./Jobsingle.module.css";
import { Button } from "shards-react";
import user from "../../company.svg";
import { BiMapPin, BiMailSend, BiPhone, BiPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { Progress } from "shards-react";
import {
  MdOutlineHideSource,
  MdSaveAlt,
  MdOutlineCheck,
  MdOutlineRefresh,
  MdEmail,
} from "react-icons/md";
const Jobsingle = (props) => {
  const [applied, setapplied] = useState(props.data.applied && true);
  console.log("propssss", props.data);
  return (
    <div className={styles.block}>
      <div className={styles.section1}>
        <div className={styles.imageback}>
          <img src={user} className={styles.image}></img>
        </div>
        <div className={styles.side}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            <span>{props.data.name} </span>
            {applied ? (
              !props.data.pending ? (
                props.data.hired ? (
                  <span className={styles.hiring}>Hired</span>
                ) : (
                  <span className={styles.pending}>Rejected</span>
                )
              ) : (
                <span className={styles.pending}>Result Pending</span>
              )
            ) : (
              <span className={styles.hiring}>Hiring</span>
            )}
          </div>
          <div style={{ fontSize: "14px", fontWeight: "400" }}>
            {props.data.des}
          </div>
          <div
            className={styles.active}
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            <span style={{ fontWeight: "400", color: "#888" }}>
              {" "}
              <BsPeople style={{ color: "#000", marginRight: "10px" }} />{" "}
              <span style={{ color: "#888", fontSize: "13px" }}>
                {props.data.emp} EMPLOYEES
              </span>
            </span>
          </div>
          <div
            className={styles.active}
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            <BiMapPin style={{ color: "#000", marginRight: "10px" }} />{" "}
            <span style={{ color: "#888", fontSize: "13px" }}>
              {props.data.location}
            </span>{" "}
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.sub2sction1}>
          <div
            style={{ fontSize: "15px", fontWeight: "600", marginRight: "20px" }}
          >
            {props.data.jobtype}
          </div>{" "}
          <div style={{ fontSize: "14px", fontWeight: "400", color: "#666" }}>
            {props.data.where} | {props.data.stipend}
          </div>{" "}
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdOutlineRefresh style={{ fontSize: "16px" }} />
          <span> {props.data.time}</span>
        </div>
      </div>
      <div className={styles.section3}>
        {applied ? (
          <>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "20px",
              }}
            >
              Application Status
            </div>
            {props.data.stage == 4 && !props.data.hired ? (
              <div style={{ width: "100%" }}>
                <Progress multi>
                  <Progress
                    bar
                    value="24.5"
                    theme="danger"
                    title="Application - applied"
                  >
                    Application Applied
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress
                    bar
                    value="24.5"
                    theme="danger"
                    title="Application - accepted"
                  >
                    Application Accepted
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress
                    bar
                    value="24.5"
                    theme="danger"
                    title="Test & Interview - Given"
                  >
                    Test & Interview
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress bar value="25" theme="danger" title="Result Pending">
                    Result
                  </Progress>
                </Progress>
              </div>
            ) : (
              <div style={{ width: "100%" }}>
                <Progress multi>
                  <Progress
                    bar
                    value="24.5"
                    theme="success"
                    title="Application - applied"
                  >
                    Application Applied
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress
                    bar
                    value="24.5"
                    theme="success"
                    title="Application - accepted"
                  >
                    Application Accepted
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress
                    bar
                    value="24.5"
                    theme="success"
                    title="Test & Interview - Given"
                  >
                    Test & Interview
                  </Progress>
                  <Progress bar theme="dark" value="0.5"></Progress>
                  <Progress bar value="25" theme="light" title="Result Pending">
                    Result
                  </Progress>
                </Progress>
              </div>
            )}

            <div
              style={{
                width: "100%",
                fontSize: "14px",
                fontWeight: "400",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <MdEmail
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "#888",
                  }}
                  title="Mail for late reply"
                />
              </div>
              <Button
                outline
                squared
                size="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
                theme="light"
              >
                <MdOutlineHideSource
                  style={{ fontSize: "14px", marginRight: "5px" }}
                />
                <span style={{ fontSize: "14px", marginRight: "5px" }}>
                  Report
                </span>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              <Button
                outline
                squared
                size="sm"
                style={{ display: "flex", alignItems: "center" }}
                theme="light"
              >
                <MdOutlineHideSource
                  style={{ fontSize: "16px", marginRight: "5px" }}
                />
                <span style={{ fontSize: "16px", marginRight: "5px" }}>
                  Not Interested
                </span>
              </Button>
            </div>

            <div className={styles.sub3sction1}>
              <Button
                outline
                squared
                size="sm"
                theme="success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <MdSaveAlt style={{ fontSize: "16px", marginRight: "5px" }} />
                <span style={{ fontSize: "16px", marginRight: "5px" }}>
                  Save
                </span>
              </Button>
              <Button
                squared
                size="sm"
                theme="success"
                style={{ display: "flex", alignItems: "center" }}
              >
                <MdOutlineCheck
                  style={{ fontSize: "16px", marginRight: "5px" }}
                />
                <span style={{ fontSize: "16px", marginRight: "5px" }}>
                  Apply
                </span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobsingle;
