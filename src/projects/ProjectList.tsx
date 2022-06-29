import React, { useState, useEffect } from 'react';
import { getProjects, ListedProject as Model } from './project.api';
import { Link } from '../layout';

export function ProjectList() {
  const [projects, setProjects] = useState<Model[]>([]);
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);
  return (
      <>
        <h2>Project List</h2>
        <ul>
          {projects.map(({id, name}) => <li key={id}><Link to={`/projects/${id}`}>{name}</Link></li>)}
        </ul>
      </>
  );
}
