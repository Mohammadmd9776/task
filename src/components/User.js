import React from "react";
import classes from "./User.module.scss";

function User() {
  return (
    <div className={classes.container}>
     
      <div className={classes.image}>
        <img src="/image2.png" />
      </div>
      <div className={classes.name}>
        <h2>سعید صفایی</h2>
        <p>بدون اشتراک</p>
      </div>
   
    </div>
  );
}

export default User;
