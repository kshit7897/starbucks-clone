import { createContext, useState } from "react";

const MainContext = createContext();

function MainStateProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signpassword, setSignPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [error, setError] = useState("")

  
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
        phone,
        setPhone,
        displayEmail,
        setDisplayEmail,
        error, setError
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainStateProvider };
