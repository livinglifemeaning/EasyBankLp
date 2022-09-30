import SocialMediaBar from "./SocialMediaBar/SocialMediaBar"; 
import FooterNav from "./FooterNav/FooterNav"; 
import Button from "../UI/Button/Button";
import Logo from "./footer-logo.svg"; 
import classes from "./Footer.module.css"; 

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.section}>
        <img src={Logo} alt="Easybank logo" className={classes.logo}/>
        <SocialMediaBar/>
      </div>
      <div className={classes.section}>
        <FooterNav/>
      </div>
      <div className={classes.section}>
        <Button/>
        <p className={classes.copyright}>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
