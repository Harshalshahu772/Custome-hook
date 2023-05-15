import { useEffect, useState } from "react";
import FruitButton from "../FruitButton/FruitButton";
import styless from "./FruitButtonWrapper.module.scss";
import ReactDOM from "react-dom";
import PopUp from "../../PopUp/PopUp";

export type fruitType = {
  name: string;
  value: number;
  color?: string;
};

const FruitButtonWrapper: React.FC<{ setFruitData: any }> = (props) => {

  const addNewFruit = (newFruit: fruitType) => {
    setFruitName((prevState: fruitType[]) => {
      return [...prevState, newFruit];
    });
  };

  const popUpId: any = ReactDOM.createPortal(
    <PopUp addNewFruit={addNewFruit} />,
    document.getElementById("popUp") as HTMLElement
  );
  const [openPOPup, setOpenPOPup] = useState(false);
  if (props.setFruitData == "") {
    alert("test");
  }
  const { setFruitData } = props;
  const fruitNameIntial: fruitType[] = [
    {
      name: "apple",
      value: 40,
      color: "red",
    },
    {
      name: "Banana",
      value: 10,
      color: " yellow",
    },
    {
      name: "orange",
      value: 100,
      color: "orange",
    },
    {
      name: "grapes",
      value: 100,
    },
  ];
  const [fruitName, setFruitName] = useState<fruitType[]>(fruitNameIntial);

  const addFruit = (fruit: fruitType) => {
    setFruitData((prevState: any) => {
      return [...prevState, fruit];
    });
  };

  useEffect(() => {
    console.log("add fruit method called");
  }, [addFruit]);

  const OpenClosePopUP = () => {
    setOpenPOPup(!openPOPup);
  };

  // All Intial Fruit Button
  const allFruitBt = fruitName.map((fruit: fruitType) => {
    return (
      <FruitButton
        btName={fruit.name}
        btColor={fruit.color}
        fruitFun={() => {
          addFruit(fruit);
        }}
      />
    );
  });
  // All Intial Fruit Button

  return (
    <div>



      {openPOPup ? popUpId : ""}
      <FruitButton
        btName="addNewFruit"
        btColor="red"
        fruitFun={() => {
          OpenClosePopUP();
        }}
      />
      <br />
      Fruit Button Wrapper
      {allFruitBt}
    </div>
  );
};

export default FruitButtonWrapper;
