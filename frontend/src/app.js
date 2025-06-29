import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <div>
      <SignedOut>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <h1>Welcome to the App</h1>
      </SignedIn>
    </div>
  );
}

