import OnlineBanking from "./icon-online.svg"; 
import SimpleBudgeting from "./icon-budgeting.svg"; 
import FastOnboarding from "./icon-onboarding.svg"; 
import OpenApi from "./icon-api.svg"; 
import classes from "./Feature.module.css"; 

const IMAGES = [OnlineBanking, SimpleBudgeting, FastOnboarding, OpenApi]; 
const Feature = ({index, title, paragraph}) => {
  return (
    <div className={classes.feature}>
      <img src={IMAGES[index]} alt=""/>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.paragraph}>{paragraph}</p>
    </div>
  )
}

export default Feature
