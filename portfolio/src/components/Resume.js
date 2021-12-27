import React from "react";
import styles from "../styles/Resume.module.css";
import codeInProgressImg from "../images/CodeInProgress.png";

const Resume = () => {
  return (
    <div className={styles.container}>
      <h1>Check back soon for updates...</h1>
      <img
        src={codeInProgressImg}
        alt="Yellow Diamond 'code in progress' sign"
      />
    </div>
  );
};

export default Resume;
