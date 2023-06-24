import { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [signpassword, setSignPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        email,
        setEmail,
        password,
        setPassword,
        signpassword,
        setSignPassword,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainStateProvider };
