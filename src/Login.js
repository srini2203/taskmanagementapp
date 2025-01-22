import { react } from "react";

function handleLogin() {}
export default function Login() {
  return (
    <div>
      <input type="text" id="username" placeholder="username"></input>
      <br></br>
      <input type="text" id="userid" placeholder="userid"></input>
      <br></br>
      <input type="button" onClick={handleLogin} value="LOGIN"></input>
    </div>
  );
}
