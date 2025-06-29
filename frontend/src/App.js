import React, { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  // Redirect to /sign-in if user is not signed in
  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div style={{ padding: "40px" }}>
      <SignedOut>
        <SignIn routing="path" path="/sign-in" />
      </SignedOut>

      <SignedIn>
        <h1>You're signed in!</h1>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App;

