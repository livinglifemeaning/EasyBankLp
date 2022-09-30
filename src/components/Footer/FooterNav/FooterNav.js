import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <div className={classes.navBox}>
      <ul className={classes.nav}>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
      <ul className={classes.nav}>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default FooterNav;
