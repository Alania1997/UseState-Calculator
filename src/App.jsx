import { useState, useEffect } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(false);
  const [operator, setOperator] = useState(null);

  // Максимальная длина числа
  const MAX_LENGTH = 10;

  //Сохранение состояния в localStorage
  useEffect(() => {
    const savedState = {
      input,
      firstNumber,
      secondNumber,
      operator,
    };
    localStorage.setItem("calculatorState", JSON.stringify(savedState));
  }, [input, firstNumber, secondNumber, operator]);

  //Восстановление состояния при загрузке
  useEffect(() => {
    const savedState = localStorage.getItem("calculatorState");
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        console.log("ВОССТАНОВЛЕНИЕ СОСТОЯНИЯ...", parsed); //Проверка

        // Убедимся, что input — строка
        setInput(parsed.input ? String(parsed.input) : "0");

        setFirstNumber(parsed.firstNumber);
        setSecondNumber(parsed.secondNumber);
        setOperator(parsed.operator);

        console.log("СОСТОЯНИЕ ВОССТАНОВЛЕНО:", {
          input: parsed.input,
          firstNumber: parsed.firstNumber,
          secondNumber: parsed.secondNumber,
          operator: parsed.operator,
        });
      } catch (e) {
        console.error("Ошибка при восстановлении состояния:", e);
      }
    }
  }, []); // пустой массив — вызовется только при монтировании

  const handleDigitClick = (digit) => {
    if (secondNumber) {
      setInput(digit);
      setSecondNumber(false);
    } else {
      if (input === "0" && digit !== ",") {
        setInput(digit);
      } else if (digit === "," && !input.includes(".")) {
        setInput(input + ".");
      } else if (digit !== ",") {
        if (input.length < MAX_LENGTH) {
          setInput(input + digit);
        }
      }
    }
  };

  const handleIncrement = () => {
    const currentValue = parseFloat(input);
    const newValue = currentValue + 1;
    setInput(String(newValue));
  };

  const handleDecrement = () => {
    const currentValue = parseFloat(input);
    const newValue = currentValue - 1;
    setInput(String(newValue));
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={handleIncrement}>+1</button>
          <button className="decrement" onClick={handleDecrement}>-1</button>
        </div>
        <div className="buttons">
          <button onClick={() => handleDigitClick("1")}>1</button>
          <button onClick={() => handleDigitClick("2")}>2</button>
          <button onClick={() => handleDigitClick("3")}>3</button>

          <button
            className="operator"
            onClick={() => {
              setFirstNumber(input);
              setOperator("+");
              setSecondNumber(true);
            }}
          >
            +
          </button>

          <button onClick={() => handleDigitClick("4")}>4</button>
          <button onClick={() => handleDigitClick("5")}>5</button>
          <button onClick={() => handleDigitClick("6")}>6</button>

          <button
            className="operator"
            onClick={() => {
              setFirstNumber(input);
              setOperator("-");
              setSecondNumber(true);
            }}
          >
            -
          </button>

          <button onClick={() => handleDigitClick("7")}>7</button>
          <button onClick={() => handleDigitClick("8")}>8</button>
          <button onClick={() => handleDigitClick("9")}>9</button>

          <button
            className="operator"
            onClick={() => {
              setFirstNumber(input);
              setOperator("*");
              setSecondNumber(true);
            }}
          >
            *
          </button>

          <button onClick={() => handleDigitClick("0")}>0</button>

          <button onClick={() => handleDigitClick(",")}>.</button>

          <button
            className="operator"
            onClick={() => {
              setFirstNumber(input);
              setOperator("/");
              setSecondNumber(true);
            }}
          >
            /
          </button>

          <button
            className="equals"
            onClick={() => {
              if (firstNumber !== null && operator !== null) {
                const num1 = parseFloat(firstNumber);
                const num2 = parseFloat(input);
                let result;

                switch (operator) {
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

                const resultStr = String(result);
                setInput(resultStr.length > MAX_LENGTH ? resultStr.slice(0, MAX_LENGTH) : resultStr);

                setFirstNumber(null);
                setOperator(null);
                setSecondNumber(false);
              }
            }}
          >
            =
          </button>

          <button className="clear" onClick={() => setInput("0")}>
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, useEffect, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;