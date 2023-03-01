import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WalletIcon from "@mui/icons-material/Wallet";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import VoiceChatIcon from "@mui/icons-material/VoiceChat";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import classes from "./sideBar.module.scss";
import User from "../components/User";
import VerticalDevider from "./VerticalDevider";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export default function SideBar() {
  const [activeBar, setActiveBar] = useState(1);
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

  if (windowDimensions.width > 336 && windowDimensions.height > 609) {
    return (
      <div style={{ display: "flex", direction: "rtl", margin: 20 }}>
        <div style={{ direction: "rtl" }}>
          <User />
          <Box sx={{ direction: "rtl" }}>
            <nav className={classes.nav}>
              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 1 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(1)}>
                  <ListItemIcon className={classes.icon}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="اطلاعات پروفایل"
                    style={{ color: activeBar === 1 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 2 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(2)}>
                  <ListItemIcon className={classes.icon}>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="ویژگی ها و علاقه ها"
                    style={{ color: activeBar === 2 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 3 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(3)}>
                  <ListItemIcon className={classes.icon}>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="برنامه های هفتگی"
                    style={{ color: activeBar === 3 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 4 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(4)}>
                  <ListItemIcon className={classes.icon}>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="غذاهای مورد علاقه"
                    style={{ color: activeBar === 4 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 5 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(5)}>
                  <ListItemIcon className={classes.icon}>
                    <WalletIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="اشتراک و پرداخت ها"
                    style={{ color: activeBar === 5 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 6 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(6)}>
                  <ListItemIcon className={classes.icon}>
                    <VoiceChatIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary=" پیام و گفتگو ها "
                    style={{ color: activeBar === 6 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 7 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(7)}>
                  <ListItemIcon className={classes.icon}>
                    <PanoramaFishEyeIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="معرفی به دوستان "
                    style={{ color: activeBar === 7 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div
                className={classes.sideBar}
                style={{ backgroundColor: activeBar === 8 ? "#b0bf24" : "" }}
              >
                <ListItemButton onClick={() => setActiveBar(8)}>
                  <ListItemIcon className={classes.icon}>
                    <CardGiftcardIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    primary="جایزه ها"
                    style={{ color: activeBar === 8 ? "white" : "" }}
                  />
                </ListItemButton>
              </div>

              <div className={classes.sideBar}>
                <ListItemButton onClick={() => setActiveBar(9)}>
                  <ListItemIcon className={classes.icon}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    sx={{ color: "#CF2D55" }}
                    primary=" خروج"
                  />
                </ListItemButton>
              </div>
            </nav>
          </Box>
        </div>
        <VerticalDevider />
      </div>
    );
  } else {
    return (
      <div style={{ direction: "rtl" }}>
        <Box sx={{ direction: "rtl" }}>
          <Swiper
            slidesPerView={2}
            className={classes.swiper}
            style={{ padding: 7 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 1 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(1)}
                >
                  <ListItemIcon className={classes.icon}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 1 ? "white" : "" }}
                  >
                    {" "}
                    اطلاعات پروفایل
                  </h2>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 2 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(2)}
                >
                  <ListItemIcon className={classes.icon}>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 2 ? "white" : "" }}
                  >
                    {" "}
                    ویژگی ها و علاقه ها
                  </h2>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 3 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(3)}
                >
                  <ListItemIcon className={classes.icon}>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 3 ? "white" : "" }}
                  >
                    {" "}
                    برنامه های هفتگی
                  </h2>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 4 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(4)}
                >
                  <ListItemIcon className={classes.icon}>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 4 ? "white" : "" }}
                  >
                    {" "}
                    غذاهای مورد علاقه
                  </h2>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 5 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(5)}
                >
                  <ListItemIcon className={classes.icon}>
                    <WalletIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 5 ? "white" : "" }}
                  >
                    {" "}
                    اشتراک و پرئاخت ها
                  </h2>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 6 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(6)}
                >
                  <ListItemIcon className={classes.icon}>
                    <VoiceChatIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 6 ? "white" : "" }}
                  >
                    {" "}
                    پیام و گفتگو ها
                  </h2>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 7 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(7)}
                >
                  <ListItemIcon className={classes.icon}>
                    <PanoramaFishEyeIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 7 ? "white" : "" }}
                  >
                    {" "}
                    معرفی به دوستان
                  </h2>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 8 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(8)}
                >
                  <ListItemIcon className={classes.icon}>
                    <CardGiftcardIcon />
                  </ListItemIcon>
                  <h2
                    className={classes.text}
                    style={{ color: activeBar === 8 ? "white" : "" }}
                  >
                    {" "}
                    اطلاعات پروفایل
                  </h2>
                </Grid>
              </SwiperSlide>

              <SwiperSlide>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.sideBar}
                  sx={{ backgroundColor: activeBar === 9 ? "#b0bf24" : "" }}
                  onClick={() => setActiveBar(9)}
                >
                  <ListItemIcon className={classes.icon}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <h2 className={classes.text} style={{ color: "red" }}>
                    {" "}
                    خروج
                  </h2>
                </Grid>
              </SwiperSlide>
            </Grid>
          </Swiper>
        </Box>
      </div>
    );
  }
}
