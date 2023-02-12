import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './logo.svg';
import Home from './pages/Home';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Profile from './components/Profile'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerk_pub_key = "pk_test_b3JnYW5pYy1zcGFycm93LTc1LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  return (
    // Wrap your entire app with ClerkProvider
    <ClerkProvider publishableKey={clerk_pub_key}>
      <SignedIn>
        <Header/>
        <Profile/>
        <Home/>
        <Footer/>
        <Copyright/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
