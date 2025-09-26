import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(false); // ✅ useState
  const [operator, setOperator] = useState(null);

  // Максимальная длина числа (ограничение)
  const MAX_LENGTH = 10;

  // Обработчик для цифр и запятой
  const handleDigitClick = (digit) => {
    if (secondNumber) {
      setInput(digit); // Сбрасываем ввод после оператора
      setSecondNumber(false);
    } else {
      // Если текущее значение — "0", заменяем его на цифру (кроме запятой)
      if (input === "0" && digit !== ",") {
        setInput(digit);
      } else if (digit === "," && !input.includes(".")) {
        // Добавляем запятую, только если её ещё нет
        setInput(input + ".");
      } else if (digit !== ",") {
        // Ограничение длины числа
        if (input.length < MAX_LENGTH) {
          setInput(input + digit);
        }
      }
    }
  };

  // Обработчик для +1 и -1 — теперь корректно работает с числами
  const handleIncrement = () => {
    const currentValue = parseFloat(input); // Преобразуем строку в число
    const newValue = currentValue + 1;
    setInput(String(newValue)); // Возвращаем как строку
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

                // Ограничиваем длину результата
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
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events
          handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;