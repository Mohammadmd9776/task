import React, { useState } from "react";
import classes from "./Check.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
function JobRadio({ jobHandler, job }) {
  return (
    <Grid container>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={1}>
        <div
          className={[
            classes.radio + ` ${job === "خانه دار" ? classes.activeRadio : ""}`,
          ]}
          onClick={() => jobHandler("خانه دار")}
        >
          {job === "خانه دار" ? (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "white", width: 10 }}
            />
          ) : (
            ""
          )}
        </div>
        <p>خانه دار</p>
      </Grid>
      <Grid item xs={4} sm={3} md={3} lg={3} xl={1}>
        <div
          className={[
            classes.radio + ` ${job === "شاغل" ? classes.activeRadio : ""}`,
          ]}
          onClick={() => jobHandler("شاغل")}
        >
          {job === "شاغل" ? (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "white", width: 10 }}
            />
          ) : (
            ""
          )}
        </div>
        <p>شاغل</p>
      </Grid>
    </Grid>
  );
}

export default JobRadio;
