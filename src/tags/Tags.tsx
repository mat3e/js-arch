import React, { useEffect, useState } from "react";
import { getAll, Tag as Model } from "./tag.api";
import { Tile } from "../layout";

export function Tags() {
  const [tags, setTags] = useState<Model[]>([]);
  useEffect(() => {
    getAll().then(setTags);
  }, []);
  return (
      <>
        <h2>Tags</h2>
        <ul>
          {tags.map(({id, key, value}) => <Tile key={id} name={key} value={value}/>)}
        </ul>
      </>
  );
}
