import React, { useState, useEffect } from "react";
import "./App.scss";

import UseFormValidate from "./custom-hooks/form-validate";
function App() {
  const minLength = 3;
  const minValue = 5;
  const {
    elemName: fruitName,
    setElemName: setFruitName,
    isElemNameTouched: isFruitNameTouched,
    setIsElemNameTouched: setIsFruitNameTouched,

    isElemNameLength: isFruitNameLength,
    isElemNameValid: isFruitNameValid,
  } = UseFormValidate((elemName: any) => elemName.length > minLength, true);

  const {
    elemName: fruitValue,
    setElemName: setFruitValue,
    isElemNameTouched: isFruitValueTouched,
    setIsElemNameTouched: setIsFruitValueTouched,

    isElemNameLength: isFruitValueLength,
    isElemNameValid: isFruitValueValid,
    
  } = UseFormValidate((elemName: any) => elemName >= minValue, false);

  const isFormValid =
    isFruitNameTouched &&
    isFruitNameValid &&
    isFruitValueTouched &&
    isFruitValueValid;

  // const [fruitData, setFruitData] = useState([]);
  const submitFruitForm = () => {
    console.log("fruitValue", fruitValue);
  };

  return (
    <div className="width100">
      <form className="form-group">
        <div className="form-control">
          <label htmlFor="fruitName">Fruit Name</label>
          <input
            type="text"
            id="fruitName"
            className={isFruitNameValid ? "input-error" : ""}
            value={fruitName}
            onChange={(e) => {
              setFruitName(e.target.value);
            }}
            onBlur={() => {
              setIsFruitNameTouched(true);
            }}
          />
          <span className="min-length">
            {typeof fruitName === "string" && fruitName.length} / {minValue}
          </span>
          {isFruitNameValid && (
            <span className="error-text">Fruit Name can not be empty</span>
          )}
          {isFruitNameTouched && !isFruitNameValid && !isFruitNameLength && (
            <span className="error-text">
              fruit name length must be greater than {minLength}{" "}
            </span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="fruitValue">Fruit Value</label>
          <input
            type="number"
            id="fruitValue"
            value={fruitValue}
            onChange={(e) => {
              console.log("e", e);
              setFruitValue(e.target.value);
            }}
            onBlur={() => {
              setIsFruitValueTouched(true);
            }}
          />
          <span className="min-length">
            {fruitValue} / {minValue}
          </span>
          {isFruitValueValid && (
            <span className="error-text">Fruit Value can not be empty</span>
          )}
          {isFruitValueTouched && !isFruitValueValid && !isFruitValueLength && (
            <span className="error-text">
              fruit Value must be greater than {minValue}{" "}
            </span>
          )}
        </div>

        <button type="button" onClick={submitFruitForm} disabled={isFormValid}>
          Submit
        </button>
      </form>
      {/* <Header fruitData={fruitData}/>
    <Fruit fruitData={fruitData} setFruitData={setFruitData}/> */}
    </div>
  );
}

export default App;
