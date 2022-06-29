import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProjectList } from './ProjectList';
import { Project } from './Project';

export function Projects() {
  return (
      <Routes>
        <Route path="/" element={<ProjectList/>}/>
        <Route path="/:id" element={<Project/>}/>
      </Routes>
  );
}
