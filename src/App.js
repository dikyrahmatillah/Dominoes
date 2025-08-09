import { useState } from "react/cjs/react.development";
import {
  sortAsc,
  sortDesc,
  countDoubleNumber,
  flip,
  removeDuplicate,
  remove,
} from "./utils";

const source = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export default function App() {
  const [data, setData] = useState(source);
  const [input, setInput] = useState("");
  const buttonStyle = {
    color: "white",
    padding: "6px 10px",
    borderRadius: "4px",
    border: "1px",
    backgroundColor: "oklch(0.7 0.25 235)",
  };

  const infoCard = {
    display: "inline-block",
    backgroundColor: "oklch(0.95 0 0",
    padding: "2px 6px",
    border: "1px solid black",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberToRemove = Number(input);
    setData((prev) =>
      prev.filter((item) => item[0] + item[1] !== numberToRemove)
    );
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Dominoes</h1>
      <div style={infoCard}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Source</p>
        <p>[{source.map((item) => `[${item[0]}, ${item[1]}]`).toString()}]</p>
      </div>
      <div style={infoCard}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Double Numbers</p>
        <p>{countDoubleNumber(source)}</p>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                border: "1px solid black",
                margin: "2px 4px",
                padding: "6px",
              }}
            >
              <span>{item[0]}</span>
              <span>-</span>
              <span>{item[1]}</span>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <button
          style={buttonStyle}
          onClick={() => setData((prev) => sortAsc([...prev]))}
        >
          SORT (ASC)
        </button>
        <button
          style={buttonStyle}
          onClick={() => setData((prev) => sortDesc([...prev]))}
        >
          SORT (DESC)
        </button>
        <button
          style={buttonStyle}
          onClick={() => setData((prev) => flip([...prev]))}
        >
          Flip
        </button>
        <button
          style={buttonStyle}
          onClick={() => setData((prev) => removeDuplicate([...prev]))}
        >
          Remove Dup
        </button>
        <button style={buttonStyle} onClick={() => setData(source)}>
          Reset
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            style={{ padding: "4px" }}
            type="text"
            placeholder="Input number"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button style={buttonStyle} type="submit">
          Remove
        </button>
      </form>
    </div>
  );
}
