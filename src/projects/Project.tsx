import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Tile } from "../layout";
import { useAssignedTags } from "../tags";
import { getProject, Project as Model } from './project.api';
import { filterByProjectUserName } from "./project.service";

export function Project() {
  const {id = ""} = useParams();
  const [{name, users}, setProject] = useState<Model>({id, name: "...", users: []});
  const [phrase, setPhrase] = useState("");
  useEffect(() => {
    getProject(id).then(setProject);
  }, [id]);
  const tags = useAssignedTags('product', id);
  const filteredUsers = useMemo(() => filterByProjectUserName(phrase, users), [phrase, users]);
  return (
      <>
        <h2>Project "{name}"</h2>
        <hr/>
        <h3>Tags</h3>
        {tags.map(({id: tagId, key, value}) => <Tile key={tagId} name={key} value={value}/>)}
        <hr/>
        <h3>Employees</h3>
        <div>
          <label>
            <input placeholder="Filter..." type="search" onChange={({target: {value}}) => setPhrase(value)}/>
          </label>
        </div>
        {
          filteredUsers
          .map(({id, name, image}) => <Image key={id} url={image} label={name} link={`/users/${id}`}/>)
        }
      </>
  );
}
