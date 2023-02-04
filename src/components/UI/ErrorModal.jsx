import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.closeModel}></div>;
};
const OverLay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
        <footer className={styles.actions}>
          <Button onClick={props.closeModel}>Close</Button>
        </footer>
      </div>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop closeModel={props.closeModel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <OverLay
          closeModel={props.closeModel}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
