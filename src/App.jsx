import { useState } from "react";
import "./index.css";

//Rus
//1 - Создайте состояние input, которое будет отображать результат вычислений в калькуляторе.
//2 - Создайте 2 функции для увеличения или уменьшения значения input на +1 или -1 и назначьте их на кнопки +1 / -1.
//3 - Создайте функцию, которая будет выполнять определенную операцию на калькуляторе в зависимости от нажатой кнопки. В результате работы этой функции должен получиться полностью рабочий калькулятор. Используйте эту функцию в обработчиках событий для всех кнопок.

//P.S. Если сложно продумать одну универсальную функцию, можете создать столько функций, сколько нужно. Не переживайте о чистоте кода.

//P.P.S. В JavaScript есть метод eval(), который преобразует любую строку в JavaScript-выражение.
//Пример: eval("console.log('Hello')") — выполнит этот код.
// Используйте этот метод для всех операций в калькуляторе.

function Calculator() {
  const [input, setInput] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(false);
  const [operator, setOperator] = useState(null);
  const handleDigitClick = (digit) => {
    if (secondNumber) {
      setInput(digit);
      setSecondNumber(false);
    } else {
      setInput(prev => prev === "0" ? digit : prev + digit);
    }
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={() => (setInput((prev) => prev + 1))}>+1</button>
          <button className="decrement" onClick={() => (setInput((prev) => prev - 1))}>-1</button>
        </div>
        <div className="buttons">

          <button onClick={()=> handleDigitClick("1")}>1</button>
          <button onClick={()=> handleDigitClick("2")}>2</button>
          <button onClick={()=> handleDigitClick("3")}>3</button>

          <button className="operator" onClick={() => {
            setFirstNumber(input); 
            setOperator("+"); 
            setSecondNumber(true);
            }}>+</button>

          <button onClick={()=> handleDigitClick("4")}>4</button>
          <button onClick={()=> handleDigitClick("5")}>5</button>
          <button onClick={()=> handleDigitClick("6")}>6</button>

          <button className="operator" onClick={() => {
            setFirstNumber(input); 
            setOperator("-"); 
            setSecondNumber(true);
            }}>-</button>

          <button onClick={()=> handleDigitClick("7")}>7</button>
          <button onClick={()=> handleDigitClick("8")}>8</button>
          <button onClick={()=> handleDigitClick("9")}>9</button>

          <button className="operator" onClick={() => {
            setFirstNumber(input); 
            setOperator("*"); 
            setSecondNumber(true);
            }}>*</button>

          <button onClick={()=> handleDigitClick("0")}>0</button>

          <button className="operator" onClick={() => {
            setFirstNumber(input); 
            setOperator("/"); 
            setSecondNumber(true);
            }}>/</button>

          <button>,</button>

          <button className="equals" onClick={() => {
            if (firstNumber !== null && operator !== null){
              const num1 = parseFloat(firstNumber);
              const num2 = parseFloat(input);
              let result;
              switch (operator){
                case "+":
                  result = num1 + num2;
                  break;
                  case "-":
                  result = num1 - num2;
                  break;
                  case "*":
                  result = num1 * num2;
                  break;
                  case "/":
                  result = num1 / num2;
                  break;
                  default:
                    result = num2;
              }
              setInput(String(result));
              setFirstNumber(null);
              setOperator(null);
              setSecondNumber(false);
            }
          }}>=</button>
          
          <button className="clear" onClick={() => setInput("0")}>C</button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events
          handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
