import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [userName, setUserNme] = useState("");
  const [age, setAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      Name: userName,
      Age: age,
    };
    console.log(userData);
  };
  const userNameChangeHandler = (e) => {
    setUserNme(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={userNameChangeHandler}
          id="username"
          type="text"
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input onChange={ageChangeHandler} id="age" type="number"></input>
        <Button className={styles.button} type="submit">
          Add User
        </Button>
        {/* <button className={styles.button} type="submit">
          Add User
        </button> */}
      </form>
    </Card>
  );
};

export default AddUser;
