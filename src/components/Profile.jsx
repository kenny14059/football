import {
    ClerkProvider,
    UserButton,
    useUser
  } from "@clerk/clerk-react";
  

function Profile() {
    // Get the user's first name
    const { user } = useUser();
  
    return (
      <div className="App-header">
        {/* Mount the UserButton component */}
        <UserButton />
        {user ? <h1>Hello, {user.firstName}!</h1> : null}
      </div>
    );
  }

  export default Profile;