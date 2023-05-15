import ReactDOM from "react-dom";
import { fruitType } from "../components/fruit-button-wrapper/FruitButtonWrapper";
import styless from "./Header.module.scss";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";

const Header: React.FC<{ fruitData: fruitType[] }> = (props) => {
  const { fruitData } = props;

  let totalValue = 23;
  const [openPOPup, setOpenPOPup] = useState(false);
  
  const popUpId:any = ReactDOM.createPortal(
    <PopUp />,
    document.getElementById("popUp") as HTMLElement
  );

  // console.log('popUpId', popUpId)
  const changePopUpStatus = () => {
    // console.log("pop is called",openPOPup);
    setOpenPOPup(!openPOPup)
    // console.log("pop is called",openPOPup);
  };
  return (
    <div className={styless["header-main"]}>
          {openPOPup ? popUpId : ''}
      <p>Fruit Cart</p>
    
      <div>
        <button onClick={changePopUpStatus}> Open pop up </button>
        <p> Total : {totalValue} </p>
      </div>
    </div>
  );
};

export default Header;
