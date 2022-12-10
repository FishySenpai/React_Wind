import React, {useContext} from 'react'
import { UserContext } from "../Contexts/UserContext";
import { Navigate } from 'react-router-dom';
const Profile = () => {
    const { profile, setProfile, setShowProfile } = useContext(UserContext);
  return (
    <div>
      {profile}
      {console.log(profile)}
    </div>
  );
}

export default Profile;