import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { ProfileContext } from "../../context/Profile/Profile";

export const Header = () => {

  const {profile} = useContext(ProfileContext);
  return (
    <header className="c-header">
      <NavLink className="c-header__link" to="" activeclassname={"active"}>
        Home
      </NavLink>
      <NavLink className="c-header__link" to="characters" activeclassname={"active"}>
        Characters
      </NavLink>
      <NavLink className="c-header__link" to="locations" activeclassname={"active"}>
        Locations
      </NavLink>
      <div className="c-profile">
        <img className="c-profile__image" src={profile.image} alt={profile.name} />
        {profile.name} -- {profile.species}
      </div>
    </header>
  );
};
