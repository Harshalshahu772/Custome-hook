import { useState, useRef, useEffect } from "react";
import styless from './PopUp.module.scss';
import { fruitType } from "../components/fruit-button-wrapper/FruitButtonWrapper";
const PopUp: React.FC<
{
  addNewFruit?: (newFruit: fruitType) => void
}
> = (props) => {
  const { addNewFruit} = props

  const [ isFormValid, setIsFormValid] = useState(false);
  const [ calledUndefinedFunction, setcalledUndefinedFunction] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [fruitName, setFruitName] = useState("");
  const [fruitValue, setFruitValue] = useState("");
  const modalRef: any = useRef();

  useEffect(() => {
    // console.log(' on load of popup')
    if (modalRef.current.getAttribute("open") == null) {
      openPopUp();
    }
  }, [modalRef]);

  const openPopUp = () => {
    const modal = modalRef.current;
    if (isOpen) {
      modal.close();
      setIsOpen(false);
    } else {
      modal.showModal();
      setIsOpen(true);
    }
  };

  const submitFruitForm = () => {
    console.log('fruitName',fruitName);
    console.log('fruiValue',fruitValue);

    if(fruitName.trim() !== '' && fruitValue.trim() !== '' && addNewFruit){
      setIsFormValid(false)
      console.log('cheked fruitName',fruitName);
    console.log('cheked fruiValue',fruitValue);
    
      setcalledUndefinedFunction(false)
      addNewFruit({name: fruitName ,value: parseFloat(fruitValue)});
      modalRef.current.close();
    } else {
      setIsFormValid(true);
      if(!addNewFruit){
        setcalledUndefinedFunction(true);
      }
      
    }
  }

  return (
    <dialog className={styless['form-dialog']} ref={modalRef}>
      {isFormValid && <span> Name & value can not be empty</span>}
      <br/>
      {calledUndefinedFunction && <span> called Undefined Function</span>}
      <form className={styless['fruit-form']}>
       <div  className={styless['form-control']}>
        <label htmlFor="fruitName">Fruit Name</label>
       <input
          type="text"
          id="fruitName"
          value={fruitName}
          onChange={(e) => {
            setFruitName(e.target.value);
          }}
        />

       </div>
          <div className={styless['form-control']}>
            <label htmlFor="fruitValue">Fruit Value</label>
          <input
          type="number"
          id="fruitValue"
          value={fruitValue}
          onChange={(e) => {
            setFruitValue(e.target.value);
          }}
        />
          </div>
        <div>
          <button type="button" onClick={openPopUp}>
            Cancel
          </button>
          <button type="button" onClick={submitFruitForm} >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default PopUp;
