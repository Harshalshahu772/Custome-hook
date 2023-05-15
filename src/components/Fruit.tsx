import { SetStateAction } from "react";
import styless from "./Fruit.module.scss";
import FruitDetails from "./FruitDetails/FruitDetails";
import FruitButtonWrapper, {
  fruitType,
} from "./fruit-button-wrapper/FruitButtonWrapper";

const Fruit: React.FC<{
   fruitData: fruitType[];
   setFruitData: any
   }> = (props) => {
    const { fruitData ,setFruitData } = props;
  return (
    <div className={styless["main-page"]}>
      <div className={styless["width20"]}>
        <FruitButtonWrapper setFruitData={setFruitData}/>
      </div>
      <div className={styless["width70"]}>
        <FruitDetails fruitData={fruitData}/>
      </div>
    </div>
  );
};

export default Fruit;
