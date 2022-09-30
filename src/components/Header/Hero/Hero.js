import { useContext } from "react";
import { MediaContext } from "../../../App";
import Button from "../../UI/Button/Button";
import AccentDestkop from "./bg-intro-desktop.svg"; 
import AccentMobile from "./bg-intro-mobile.svg"; 
import Mockups from "./image-mockups.png"; 
import classes from "./Hero.module.css";

const Hero = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={classes.hero}>
      <div className={classes.textBox}>
        <h1 className={classes.title}>Next generation digital banking</h1>
        <p className={classes.paragraph}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button/>
      </div>
      <div className={classes.imageBox}>
        <img src={isDesktop ? AccentDestkop : AccentMobile} alt="" className={classes.accent}/>
        <img src={Mockups} alt="Phones displaying Easybank app" className={classes.mockups}/>
      </div>
    </div>
  );
};

export default Hero;
