import React, {useState, useContext} from 'react'
import { UserProfile } from '../Contexts/UserProfile'
const Favourites = () => {
    const {fav, setFav} = useContext(UserProfile)
  return (
    <div className='text-black'>
        {fav}
        {console.log(fav)}
    </div>
  )
}

export default Favourites