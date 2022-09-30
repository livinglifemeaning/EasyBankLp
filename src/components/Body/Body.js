import Articles from "./Articles/Articles";
import Features from "./Features/Features";
import classes from "./Body.module.css"; 

const Body = () => {
  return (
    <div className={classes.body}>
      <Features/> 
      <Articles/>
    </div>
  )
}

export default Body
