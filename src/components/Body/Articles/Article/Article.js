import Money from "./image-currency.jpg";
import Restaurant from "./image-restaurant.jpg";
import Plane from "./image-plane.jpg";
import Confetti from "./image-confetti.jpg";
import classes from "./Article.module.css";

const IMAGES = [Money, Restaurant, Plane, Confetti]
const Article = ({ title, paragraph, index, alt, author}) => {
  return (
    <div className={classes.article}>
      <img src={IMAGES[index]} alt={alt} className={classes.image} />
      <div className={classes.textBox}>
      <p className={classes.author}>By {author}</p>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.paragraph}>{paragraph} ...</p>
      </div>
    </div>
  );
};

export default Article;
