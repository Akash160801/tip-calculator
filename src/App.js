import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
    </div>
  );
}

function Bill({ bill, setBill }) {
  const [Percentage1, setPercentage1] = useState(0);
  const [Percentage2, setPercentage2] = useState(0);
  const tip = bill * ((Percentage1 + Percentage2) / 2 / 100);
  return (
    <>
      <div style={{ display: "flex" }}>
        <p style={{ margin: "0px 20px" }}>What was your bill?</p>
        <input type={bill} onChange={(e) => setBill(Number(e.target.value))} />
      </div>
      <PercentageCalculator
        setBill={setBill}
        bill={bill}
        Percentage1={Percentage1}
        setPercentage1={setPercentage1}
        Percentage2={Percentage2}
        setPercentage2={setPercentage2}
        tip={tip}
      />
    </>
  );
}

function PercentageCalculator({
  tip,
  bill,
  setBill,
  setPercentage1,
  Percentage1,
  Percentage2,
  setPercentage2,
}) {
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
    tip = 0;
  }
  return (
    <div>
      <div style={{ display: "flex", margin: "20px 0px" }}>
        <p style={{ margin: "0px 20px" }}>Tip by you :</p>
        <select
          value={Percentage1}
          onChange={(e) => setPercentage1(Number(e.target.value))}
        >
          <option value="5">Poor (5%)</option>
          <option value="10">Average (10%)</option>
          <option value="15">Good (15%)</option>
        </select>
      </div>
      <div style={{ display: "flex", margin: "20px 0px" }}>
        <p style={{ margin: "0px 20px" }}>Tip by your friend :</p>
        <select
          value={Percentage2}
          onChange={(e) => setPercentage2(Number(e.target.value))}
        >
          <option value="5">Poor (5%)</option>
          <option value="10">Average (10%)</option>
          <option value="15">Good (15%)</option>
        </select>
      </div>
      <p>
        {" "}
        Your total bill is :{bill + tip} (${bill}+${tip})
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
