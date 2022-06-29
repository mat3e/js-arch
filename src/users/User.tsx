import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getUser, User as Model } from "./user.api";
import { Image, Tile } from "../layout";
import { useAssignedTags } from "../tags";
import './User.css';

export function User() {
  const {id = ""} = useParams();
  const [{name, image, species, gender}, setUser] = useState<Model>({
    id: +id,
    name: '...',
    image: '',
    species: '',
    gender: ''
  });
  useEffect(() => {
    getUser(id).then(setUser);
  }, [id]);
  const tags = useAssignedTags('user', id);
  return (
      <>
        <h2>Employee: {id}</h2>
        <hr/>
        <div className="User-container">
          <Image url={image} label={name}/>
          <div>
            <ul className="User-data">
              <li>Gender: {gender}</li>
              <li>Species: {species}</li>
            </ul>
            <div>
              {tags.map(({id: tagId, key, value}) => <Tile key={tagId} name={key} value={value}/>)}
            </div>
          </div>
        </div>
      </>
  );
}
