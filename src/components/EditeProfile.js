import { Grid } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import React, { useState, useEffect } from "react";
import SexRadio from "./Radio/SexRadio";
import JobRadio from "./Radio/JobRadio";
import classes from "./EditeProfile.module.scss";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import User from "./User";

function EditeProfile() {
  const [countries, setCountries] = useState([
    { id: 1, countyName: "تهران" },
    { id: 2, countyName: "اصفهان" },
    { id: 3, countyName: "تبریز" },
    { id: 4, countyName: "مشهد" },
    { id: 5, countyName: "شیراز" },
  ]);

  const [state, setState] = useState({
    password: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    job: "",
    country: "",
  });
  console.log(state);
  const jobHandler = (job) => {
    setState({ ...state, job: job });
  };
  const sexHandler = (gender) => {
    setState({ ...state, gender: gender });
  };
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  console.log(windowDimensions);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Grid container className={classes.contaniner}>
      {windowDimensions.width < 336 || windowDimensions.height < 609 ? (
        <Grid
          item
          sx={{ direction: "rtl", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.title}
        >
          <SentimentSatisfiedAltIcon className={classes.smile} />
          <p>ویرایش پروفایل</p>
        </Grid>
      ) : (
        ""
      )}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {windowDimensions.width < 336 || windowDimensions.height < 609 ? (
          <User />
        ) : (
          ""
        )}
      </Grid>

      {windowDimensions.width > 336 && windowDimensions.height > 609 ? (
        <Grid
          item
          sx={{ direction: "rtl", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.title}
        >
          <SentimentSatisfiedAltIcon className={classes.smile} />
          <p>ویرایش پروفایل</p>
        </Grid>
      ) : (
        ""
      )}
      {windowDimensions.width > 336 && windowDimensions.height > 609 ? (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={3}
          className={classes.image}
        >
          <div className={classes.imageBox}>
            <AddAPhotoIcon className={classes.icon} />
          </div>
        </Grid>
      ) : (
        ""
      )}

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <input
            placeholder="نام خود را وارد کنید"
            className={classes.input}
            id="fullName"
            name="fullName"
            value={state.fullName}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <input
            placeholder="تاریخ تولد"
            type="date"
            id="dateOfBirth"
            className={classes.input}
            name="dateOfBirth"
            value={state.dateOfBirth}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <select
            placeholder="استان "
            id="country"
            className={classes.input}
            name="country"
            value={state.country}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.countyName}
              </option>
            ))}
          </select>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.checkbox}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <SexRadio sex={state.gender} sexHandler={sexHandler} />{" "}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.checkbox}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <JobRadio jobHandler={jobHandler} job={state.job} />{" "}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.checkbox}
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ display: "flex" }}
        >
          <Grid item xs={6} sm={6} md={3} lg={3} xl={1.5}>
            <button className={classes.activeButton}>ذخیره اطلاعات</button>{" "}
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={1.5}>
            <button className={classes.disableButton}>انصراف</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EditeProfile;
