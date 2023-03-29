import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Message } from "primereact/message";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  console.log(auth?.currentUser?.email);

  useEffect(() => {
    if (!auth?.currentUser?.email) {
      setIsLogedIn(false);
    } else {
      setIsLogedIn(true);
    }
  }, []);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="flex justify-content-evenly flex-wrap card-container orange-container">
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {isLogedIn === false ? ( */}
        <button onClick={signIn}> Sign In</button>
        {/* ) : ( */}
        <button onClick={logout}> LogOut</button>
        {/* )} */}

        <Message text={isLogedIn} />
      </div>
    </div>
  );
};
