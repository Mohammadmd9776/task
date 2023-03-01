
import classes from './App.module.scss'
import { Grid } from "@mui/material";
import EditeProfile from "./components/EditeProfile";
import SideBar from "./components/sideBar";
import { useEffect,useState } from 'react';


function App() {
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


 let margin= windowDimensions.width < 336 || windowDimensions.height < 609?1:''
 let style={}
 let container=windowDimensions.width > 336 && windowDimensions.height > 609?style={
  padding:10,
  
 }:''
  return (
    <Grid container   sx={{backgroundColor:'#F5F5F5',padding: container.padding,direction:'rtl',}}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ backgroundColor:'white',borderStartStartRadius:10 }}>
        <SideBar />
      </Grid>
    

      <Grid item xs={12} sm={6} md={9} lg={9} xl={9} className={classes.editeContainer} sx={{margin:margin}}>
      

        <EditeProfile />
      </Grid>
    </Grid>
  );
}

export default App;
