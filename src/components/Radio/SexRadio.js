import React from "react";
import classes from "./Check.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

function SexRadio({ sexHandler, sex }) {
  return (
    <Grid container>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={1}>
        <div
          className={[
            classes.radio + ` ${sex === " مجرد" ? classes.activeRadio : ""}`,
          ]}
          onClick={() => sexHandler(" مجرد")}
        >
          {sex === " مجرد" ? (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "white", width: 10 }}
            />
          ) : (
            ""
          )}
        </div>
        <p>بیکار</p>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={1}>
        <div
          className={[
            classes.radio + ` ${sex === "متاهل" ? classes.activeRadio : ""}`,
          ]}
          onClick={() => sexHandler("متاهل")}
        >
          {sex === "متاهل" ? (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "white", width: 10 }}
            />
          ) : (
            ""
          )}
        </div>
        <p>متاهل</p>
      </Grid>
    </Grid>
  );
}

export default SexRadio;
