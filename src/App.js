import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/loginForm/LoginForm";
import Timer from "./components/timer/Timer";
import Users from "./components/users/Users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [isTimer, setIsTimer] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
    localStorage.setItem("KEY", JSON.stringify(true));
  };

  useEffect(() => {
    const result = localStorage.getItem("KEY");
    setIsLoggedIn(!!result);
  }, []);
  //
  const logoutHandler = () => {
    setIsLoggedIn(false);
    setIsTimer(false);
  };
  //
  const timerHandler = () => {
    setIsUsers(false);
    setIsTimer(true);
  };
  //
  const userHandler = () => {
    setIsUsers(true);
    setIsTimer(false);
  };

  const login = !isUsers && !isTimer && isLoggedIn;
  const showUsers = isUsers && isLoggedIn;
  const showTimer = isTimer && isLoggedIn;

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        logoutHandler={logoutHandler}
        timerHandler={timerHandler}
        userHandler={userHandler}
      />
      <main>
        {!isLoggedIn && <LoginForm loginHandler={loginHandler} />}
        {login && <Users />}
        {showUsers && <Users />}
        {showTimer && <Timer />}
      </main>
    </div>
  );
}

export default App;
