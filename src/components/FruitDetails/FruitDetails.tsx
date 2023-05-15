import React from "react";
import { fruitType } from "../fruit-button-wrapper/FruitButtonWrapper";
import styless from "./FruitDetails.module.scss";

const FruitDetails: React.FC<{ fruitData: fruitType[] }> = (props) => {
  const { fruitData } = props;

  const allFruitDetails = fruitData.map((fruit: fruitType) => {
    const fruitValue:string = `(${fruit.value})`;
    return (
        <p className={styless["fruit-p"]}>
        <span className={styless["apple-color"]}> {fruit.name} </span> 
        <span>{fruitValue}</span>
        <span>= qty & 40</span>
      </p>
  
    )
  })

  // console.log('allFruitDetails',allFruitDetails)
  return (
  
      // <React.Fragment>
      // {allFruitDetails}
      // </React.Fragment>
      <>
      {allFruitDetails}
      </>
  );
};

export default FruitDetails;
