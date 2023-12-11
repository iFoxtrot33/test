import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));

  const interval = setInterval(() => {
    setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
  }, 1000);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count)}>count is {count}</button>
      </div>
      <div>Прошло времени: {secondsElapsed} секунд</div>;
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map((user) => (
            <li>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
