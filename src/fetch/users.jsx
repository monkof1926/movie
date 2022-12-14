import { useState } from "react";

let userURL = "http://localhost:7101/api/user?";

function UserList() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle");

  async function GetUsers() {
    try {
      const res = await fetch(userURL + "GetUsers");
      const json = await res.json();
      console.log(json);

      setUsers(json.results);
      setStatus("done");
    } catch (e) {
      setStatus("404 can't find user");
    }
  }

  return (
    <div>
      <button onClick={GetUsers}>Get Users</button>
      {status === "done" && (
        <p>{users.map(u => u.name).join(",")}</p>
      )}
    </div>
  );
}

export { UserList };
