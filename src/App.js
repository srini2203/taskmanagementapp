import { react } from "react";
import "./styles.css";

function handleClick() {}

export default function App() {
  return (
    <div className="App">
      <h1>TIME MANAGEMENT APP</h1>
      <br></br>
      <br />
      <input type="text" placeholder="Enter task name" id="taskname"></input>
      <br />
      <br />
      <input type="time"></input>
      <br />
      <br />
      <input type="button" value="SUBMIT" onClick={handleClick}></input>
      <div>
        <table>
          <th>TASK NAME</th>
          <th>TASK TIME</th>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
