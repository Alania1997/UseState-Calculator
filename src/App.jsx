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
  const [input, setInput] = useState("0");//возможно стоит потом добавить эту переменную в  <div className="display">0</div>
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
          <button onClick={() => setInput((prev) => prev === "0" ? "1" : prev + "1")}>1</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "2" : prev + "2")}>2</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "3" : prev + "3")}>3</button>
          <button className="operator">+</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "4" : prev + "4")}>4</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "5" : prev + "5")}>5</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "6" : prev + "6")}>6</button>
          <button className="operator">-</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "7" : prev + "7")}>7</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "8" : prev + "8")}>8</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "9" : prev + "9")}>9</button>
          <button className="operator">×</button>
          <button onClick={() => setInput((prev) => prev === "0" ? "0" : prev + "0")}>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button className="operator">÷</button>
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
