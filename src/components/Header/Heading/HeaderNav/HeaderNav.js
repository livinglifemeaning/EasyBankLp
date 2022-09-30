import { useContext } from "react";
import { MediaContext } from "../../../../App";
import classes from "./HeaderNav.module.css"; 

const HeaderNav = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={`${classes.navBox} ${isDesktop ? classes.desktop : classes.mobile}`}>
    <ul className={classes.nav}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
    </div>
  )
}

export default HeaderNav
