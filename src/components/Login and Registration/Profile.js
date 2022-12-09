import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from "../Contexts/UserContext";
import { Navigate } from 'react-router-dom';
const Profile = ({username}) => {
    Navigate("/")
  return (
    <div>{username}</div>
  )
}

export default Profile;