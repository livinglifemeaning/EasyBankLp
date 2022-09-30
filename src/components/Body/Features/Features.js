import FlexContainer from "../../UI/FlexContainer/FlexContainer";
import Feature from "./Feature/Feature";
import featuresData from "./featuresData.json";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <div className={classes.features}>
      <h2 className={classes.title}>Why choose Easybank?</h2>
      <p className={classes.paragraph}>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <FlexContainer>
        {featuresData.map((feature) => (
          <Feature
            title={feature.title}
            paragraph={feature.paragraph}
            index={feature.index}
            key={feature.index}
          />
        ))}
      </FlexContainer>
    </div>
  );
};

export default Features;
