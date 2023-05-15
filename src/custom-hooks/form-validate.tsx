import { useState } from "react";

const UseFormValidate = (validation : any , isElemant:boolean) => {

  const defualValue = isElemant ? "":0;
  const [elemName, setElemName] = useState<string | boolean >("");
  const [isElemNameTouched, setIsElemNameTouched] = useState<boolean>(false);

  let isElemNameEmpty =typeof elemName==="string" && elemName.trim() === "";
  const isElemNameLength = validation(defualValue);

  let isElemNameValid = isElemNameTouched && isElemNameEmpty;


  return {
    elemName,
    setElemName,
    isElemNameTouched,
    setIsElemNameTouched,
    isElemNameEmpty,
    isElemNameLength,
    isElemNameValid
  };
};

export default UseFormValidate;
