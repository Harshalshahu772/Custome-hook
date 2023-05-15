import { fruitType } from "../fruit-button-wrapper/FruitButtonWrapper";
import styless from "./FruitButton.module.scss";


const FruitButton: React.FC<{
  btName: string;
  btColor: string | undefined;
  fruitFun: () => void;
}> = (props) => {
  const { btName,btColor, fruitFun } = props;
  // console.log('btColor',btColor)
  const styleBt =  btColor ? styless[btColor] : styless['black'];
 
  return (
    <div>
      <button className={`${styless["button-class"]} ${styleBt}`} onClick={fruitFun}>
        {btName}
      </button>
    </div>
  );
};

export default FruitButton;
