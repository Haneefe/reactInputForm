import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userName, setUserNme] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
    }
    if (+age < 1)
      return setError({
        title: "Invalid Input",
        message: "Please enter valid age",
      });
    const userData = {
      Name: userName,
      Age: age,
    };
    props.onAddUser(userName, age);
    setUserNme("");
    setAge("");
  };
  const userNameChangeHandler = (e) => {
    setUserNme(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const CloseModal = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModel={CloseModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={userNameChangeHandler}
            id="username"
            type="text"
            value={userName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            id="age"
            type="number"
            value={age}
          ></input>
          <Button className={styles.button} type="submit">
            Add User
          </Button>
          {/* <button className={styles.button} type="submit">
          Add User
        </button> */}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
