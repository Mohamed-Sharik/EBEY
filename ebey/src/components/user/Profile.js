import React, { useContext } from "react";
import UserContext from "../../context/DataContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <h3>No User Logged In</h3>;
  }
  return (
    <div>
      <h1>Profile : {user.userName}</h1>
    </div>
  );
}

export default Profile;
