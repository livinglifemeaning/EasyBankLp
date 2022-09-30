import FlexContainer from "../../UI/FlexContainer/FlexContainer";
import Article from "./Article/Article"; 
import articlesData from "./articlesData.json"
import classes from "./Articles.module.css"; 

const Articles = () => {
  return (
    <div className={classes.articles}>
      <h2 className={classes.title}>Latest Articles</h2>
      <FlexContainer>
        {articlesData.map(article => <Article title={article.title} paragraph={article.paragraph} author={article.author} index={article.index} alt={article.alt} key={article.index}/>)}
      </FlexContainer>
    </div>
  )
}

export default Articles
