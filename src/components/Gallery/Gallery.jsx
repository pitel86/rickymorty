import React,{useContext} from "react";
import "./Gallery.scss";
import { ProfileContext } from "../../context/Profile/Profile";
import { Link } from "react-router-dom";

export const Gallery = ({ characters }) => {
  const {setProfile} = useContext(ProfileContext);
  return (
    <div className="c-gallery">
      {characters.map((character) => {
        return (
          <div key={character.id} >
          <Link to={`/characters/${character.id}`}>
            <figure className="c-gallery_card" key={character.id}>
              <figcaption className="c-gallery_card--name">
                {character.name}
              </figcaption>
              <img
                className="c-gallery_card--img"
                src={character.image}
                alt={character.name}
              />
            </figure>
            </Link>
            <button className="" onClick={()=>{setProfile(character)}}>Mute</button>
          </div>
        );
      })}
    </div>
  );
};
