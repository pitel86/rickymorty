import React from 'react';
import './LocationsGallery.scss'

export const LocationsGallery = ({locations}) => {
  return <div className="c-lgallery">
      {locations.map(location => {
          return (
          <figure className="c-lgallery_card" key={location.id}>
            <figcaption className="c-lgallery_card--name">{location.name}</figcaption>
            <img className="c-lgallery_card--img" src="https://res.cloudinary.com/dpeadveub/image/upload/v1643397038/planet_zfkl5b.png" alt={location.name}/>
          </figure>
          )
      })}
  </div>;
};