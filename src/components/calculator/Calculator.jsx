import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const buttonHandler = (val) => {
    setValue(value.toString() + val);
  };
  const handleClear = () => {
    setValue("");
  };
  const handleResult = () => {
    setValue(eval(value));
  };
  return (
    <table className="calculator">
      <tr>
        <td colSpan={3}>
          <input className="display-box" type="text" value={value} disabled />
        </td>

        <td>
          <input type="button" value="C" id="btn" onClick={handleClear} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="1" onClick={() => buttonHandler(1)} />
        </td>
        <td>
          <input type="button" value="2" onClick={() => buttonHandler(2)} />
        </td>
        <td>
          <input type="button" value="3" onClick={() => buttonHandler(3)} />
        </td>
        <td>
          <input type="button" value="/" onClick={() => buttonHandler("/")} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="4" onClick={() => buttonHandler(4)} />
        </td>
        <td>
          <input type="button" value="5" onClick={() => buttonHandler(5)} />
        </td>
        <td>
          <input type="button" value="6" onClick={() => buttonHandler(6)} />
        </td>
        <td>
          <input type="button" value="-" onClick={() => buttonHandler("-")} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="7" onClick={() => buttonHandler(7)} />
        </td>
        <td>
          <input type="button" value="8" onClick={() => buttonHandler(8)} />
        </td>
        <td>
          <input type="button" value="9" onClick={() => buttonHandler(9)} />
        </td>
        <td>
          <input type="button" value="+" onClick={() => buttonHandler("+")} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="." onClick={() => buttonHandler(".")} />
        </td>
        <td>
          <input type="button" value="0" onClick={() => buttonHandler(0)} />
        </td>

        <td>
          <input type="button" value="=" id="btn" onClick={handleResult} />
        </td>
        <td>
          <input type="button" value="*" onClick={() => buttonHandler("*")} />
        </td>
      </tr>
    </table>
  );
};

export default Calculator;
